/* bg.js — Subtle ambient background (WebGL)
   Gentle noise-based glow that follows the mouse.
   Falls back silently if WebGL is unavailable.
*/
(function () {
    'use strict';

    var VERT = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';

    var FRAG = `
precision mediump float;
uniform vec2  uRes;
uniform vec2  uMouse;
uniform float uTime;
uniform int   uDark;

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
    mat2 m = mat2(.8,.6,-.6,.8);
    for (int i = 0; i < 4; i++) {
        v += a * noise(p);
        p  = m * p * 2. + vec2(1.7 * float(i+1), 9.2);
        a *= .5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float ar = uRes.x / uRes.y;
    vec2 st = vec2(uv.x * ar, uv.y);
    vec2 ms = vec2(uMouse.x * ar, uMouse.y);
    float t = uTime * .065;

    /* two slow noise layers blended for gentle texture */
    float n = fbm(st * 1.6 + t * vec2(.4, .25)) * .5 + .5;
    n = mix(n, fbm(st * 2.8 - t * vec2(.25, .35) + 4.3) * .5 + .5, .35);

    /* soft gaussian mouse glow */
    float md   = length(ms - st);
    float glow = exp(-md * md * 5.5) * .26;

    vec3 col;
    if (uDark == 1) {
        /* dark: near-black with subtle blue-indigo texture */
        vec3 lo = vec3(.005, .018, .075);
        vec3 hi = vec3(.010, .055, .160);
        col  = mix(lo, hi, n) * smoothstep(0., 1., n);
        col += vec3(.22, .52, 1.00) * glow;
    } else {
        /* light: off-white with barely-there blue tint */
        vec3 base = vec3(.961, .961, .969);
        vec3 tint = mix(vec3(.875, .910, .990), vec3(.820, .880, .980), n);
        col  = mix(base, tint, n * .45);
        col += vec3(.55, .75, 1.00) * glow * .22;
    }

    /* soft edge vignette */
    float vig = 1. - smoothstep(.45, 1.35, length(uv - .5) * 2.2);
    col *= mix(.62, 1., vig);

    gl_FragColor = vec4(col, 1.);
}
`;

    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;display:block;';
    document.body.insertBefore(canvas, document.body.firstChild);

    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) { canvas.remove(); return; }

    function shader(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { return null; }
        return s;
    }

    var prog = gl.createProgram();
    var vs = shader(gl.VERTEX_SHADER, VERT);
    var fs = shader(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { canvas.remove(); return; }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.remove(); return; }
    gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    var aLoc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

    var uRes   = gl.getUniformLocation(prog, 'uRes');
    var uMouse = gl.getUniformLocation(prog, 'uMouse');
    var uTime  = gl.getUniformLocation(prog, 'uTime');
    var uDark  = gl.getUniformLocation(prog, 'uDark');

    var mouse = [0.5, 0.5];
    var t0    = performance.now();
    var dpr   = Math.min(window.devicePixelRatio || 1, 2);

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

    function render() {
        var t = (performance.now() - t0) / 1000;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform2fv(uMouse, mouse);
        gl.uniform1f(uTime, t);
        gl.uniform1i(uDark, document.documentElement.getAttribute('data-theme') === 'dark' ? 1 : 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }
    render();

})();
