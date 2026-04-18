/* bg.js — Liquid Chrome Interactive Background (WebGL)
   Reacts to mouse movement and clicks.
   Falls back gracefully if WebGL is unavailable.
*/
(function () {
    'use strict';

    var VERT = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0., 1.); }
`;

    var FRAG = `
precision mediump float;

uniform vec2  uRes;
uniform vec2  uMouse;   /* normalised 0-1, Y flipped for GL */
uniform float uTime;
uniform vec3  uClicks[5]; /* xy=normalised pos, z=timestamp */
uniform int   uDark;

/* ── Noise ── */
vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453) * 2. - 1.;
}
float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p), u = f*f*(3.-2.*f);
    return mix(
        mix(dot(hash2(i),           f),           dot(hash2(i+vec2(1,0)), f-vec2(1,0)), u.x),
        mix(dot(hash2(i+vec2(0,1)), f-vec2(0,1)), dot(hash2(i+vec2(1,1)), f-vec2(1,1)), u.x),
    u.y);
}
float fbm(vec2 p) {
    float v = 0., a = .5;
    mat2 m = mat2(.8, .6, -.6, .8);
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p  = m * p * 2.1 + vec2(1.7 * float(i+1), 9.2 - float(i));
        a *= .5;
    }
    return v;
}

/* ── Chrome colour ramp ── */
vec3 chromeRamp(float n, int dark) {
    float s = clamp(n, 0., 1.) * 5.;
    vec3 col;
    if (dark == 1) {
        /* midnight → deep blue → ocean chrome → teal → indigo → silver */
        vec3 c0 = vec3(.010, .018, .075);
        vec3 c1 = vec3(.030, .110, .400);
        vec3 c2 = vec3(.000, .360, .700);
        vec3 c3 = vec3(.000, .580, .740);
        vec3 c4 = vec3(.260, .200, .740);
        vec3 c5 = vec3(.600, .790, 1.00);
        if      (s < 1.) col = mix(c0, c1, s);
        else if (s < 2.) col = mix(c1, c2, s-1.);
        else if (s < 3.) col = mix(c2, c3, s-2.);
        else if (s < 4.) col = mix(c3, c4, s-3.);
        else             col = mix(c4, c5, min(s-4., 1.));
    } else {
        /* pearl → ice blue → sky chrome → seafoam → lavender → cool silver */
        vec3 c0 = vec3(.910, .930, .975);
        vec3 c1 = vec3(.740, .850, .975);
        vec3 c2 = vec3(.600, .780, .960);
        vec3 c3 = vec3(.560, .840, .915);
        vec3 c4 = vec3(.700, .680, .960);
        vec3 c5 = vec3(.880, .920, 1.00);
        if      (s < 1.) col = mix(c0, c1, s);
        else if (s < 2.) col = mix(c1, c2, s-1.);
        else if (s < 3.) col = mix(c2, c3, s-2.);
        else if (s < 4.) col = mix(c3, c4, s-3.);
        else             col = mix(c4, c5, min(s-4., 1.));
    }
    return col;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float ar = uRes.x / uRes.y;

    /* aspect-corrected coords */
    vec2 st = vec2(uv.x * ar, uv.y);
    vec2 ms = vec2(uMouse.x * ar, uMouse.y);
    float t  = uTime * .16;

    /* mouse pull — warps the fluid toward cursor */
    vec2 d   = ms - st;
    float md = length(d);
    vec2 pull = (md > .001 ? normalize(d) : vec2(0.)) * exp(-md * 1.8) * .28;

    /* triple domain-warp for the liquid-chrome look */
    vec2 p = st + pull;
    vec2 q = vec2(
        fbm(p                    + t * vec2( .50,  .30)),
        fbm(p + vec2(5.2, 1.3)  + t * vec2( .40,  .50))
    );
    vec2 r = vec2(
        fbm(p + q               + t * vec2( .35,  .25) + vec2(1.7, 9.2)),
        fbm(p + q               + t * vec2(-.30,  .40) + vec2(8.3, 2.8))
    );
    float f = fbm(p + r * 1.25);

    /* click ripples */
    for (int i = 0; i < 5; i++) {
        vec3 ck = uClicks[i];
        if (ck.z > 0.) {
            float el = uTime - ck.z;
            if (el > 0. && el < 4.) {
                vec2 cp  = vec2(ck.x * ar, ck.y);
                float cd = length(st - cp);
                float rad  = el * .60;
                float decay = max(0., 1. - el * .27);
                float ring  = exp(-pow(cd - rad, 2.) * 55.) * decay;
                /* inner pulse */
                float fill  = exp(-pow(cd, 2.) * 8.) * max(0., .8 - el * .5) * .4;
                f += ring * .80 + fill;
            }
        }
    }

    float n = clamp(f * .5 + .5, 0., 1.);

    /* base chrome colour */
    vec3 col = chromeRamp(n, uDark);

    /* overall brightness: prominent but not blinding */
    if (uDark == 1) {
        col *= .70;
    } else {
        col = mix(vec3(.961, .961, .969), col, .78);
    }

    /* specular highlight that tracks the cursor */
    float spec = exp(-md * 2.8) * .55;
    float rim  = exp(-md * 7.0) * .30;
    col += vec3(.55, .82, 1.) * spec * (uDark == 1 ? 1. : .45);
    col += vec3(.90, .96, 1.) * rim  * (uDark == 1 ? 1. : .30);

    /* subtle vignette keeps edges darker */
    float vig = 1. - smoothstep(.3, 1.25, length(uv - .5) * 2.1);
    col *= mix(.55, 1., vig);

    gl_FragColor = vec4(col, 1.);
}
`;

    /* ── Bootstrap ── */
    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;display:block;';
    document.body.insertBefore(canvas, document.body.firstChild);

    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) { canvas.remove(); return; }

    /* compile helper */
    function compile(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.warn('[bg.js] shader error:', gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    var prog = gl.createProgram();
    var vs = compile(gl.VERTEX_SHADER, VERT);
    var fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { canvas.remove(); return; }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.warn('[bg.js] link error:', gl.getProgramInfoLog(prog));
        canvas.remove(); return;
    }
    gl.useProgram(prog);

    /* fullscreen quad */
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    var aLoc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

    /* uniforms */
    var uRes    = gl.getUniformLocation(prog, 'uRes');
    var uMouse  = gl.getUniformLocation(prog, 'uMouse');
    var uTime   = gl.getUniformLocation(prog, 'uTime');
    var uClicks = gl.getUniformLocation(prog, 'uClicks');
    var uDark   = gl.getUniformLocation(prog, 'uDark');

    /* state */
    var mouse     = [0.5, 0.5];
    var clicks    = new Float32Array(5 * 3); /* [x, y, timestamp] × 5 */
    var clickHead = 0;
    var t0        = performance.now();
    var dpr       = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
        var w = window.innerWidth, h = window.innerHeight;
        canvas.width  = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.width  = w + 'px';
        canvas.style.height = h + 'px';
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('mousemove', function (e) {
        mouse[0] = e.clientX / window.innerWidth;
        mouse[1] = 1 - e.clientY / window.innerHeight;
    });

    document.addEventListener('click', function (e) {
        var t   = (performance.now() - t0) / 1000;
        var idx = (clickHead % 5) * 3;
        clicks[idx]     = e.clientX / window.innerWidth;
        clicks[idx + 1] = 1 - e.clientY / window.innerHeight;
        clicks[idx + 2] = t;
        clickHead++;
    });

    function isDark() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 1 : 0;
    }

    function render() {
        var t = (performance.now() - t0) / 1000;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform2fv(uMouse, mouse);
        gl.uniform1f(uTime, t);
        gl.uniform3fv(uClicks, clicks);
        gl.uniform1i(uDark, isDark());
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }
    render();

})();
