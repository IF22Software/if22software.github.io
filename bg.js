/* bg.js — Custom cursor (dot + ring) + click ripple */
(function () {
    'use strict';

    /* touch/mobile: skip entirely */
    if (window.matchMedia('(pointer: coarse)').matches) return;

    /* inject styles */
    var style = document.createElement('style');
    style.textContent = [
        'body { cursor: none !important; }',
        'a, button, [role="button"], input, label, select, textarea { cursor: none !important; }',

        /* dot */
        '#if22-dot {',
        '  position: fixed; z-index: 9999; pointer-events: none;',
        '  width: 6px; height: 6px; border-radius: 50%;',
        '  background: var(--accent, #2997FF);',
        '  transform: translate(-50%, -50%);',
        '  transition: width 0.2s, height 0.2s, opacity 0.2s;',
        '  will-change: transform;',
        '}',

        /* ring */
        '#if22-ring {',
        '  position: fixed; z-index: 9998; pointer-events: none;',
        '  width: 32px; height: 32px; border-radius: 50%;',
        '  border: 1.5px solid var(--accent, #2997FF);',
        '  opacity: 0.5;',
        '  transform: translate(-50%, -50%);',
        '  transition: width 0.25s cubic-bezier(0.16,1,0.3,1),',
        '              height 0.25s cubic-bezier(0.16,1,0.3,1),',
        '              opacity 0.25s, border-color 0.25s;',
        '  will-change: transform;',
        '}',

        /* hover state */
        'body.cursor-hover #if22-dot { width: 8px; height: 8px; opacity: 0.6; }',
        'body.cursor-hover #if22-ring { width: 48px; height: 48px; opacity: 0.35; }',

        /* click ripple keyframe */
        '@keyframes if22-ripple {',
        '  0%   { transform: translate(-50%,-50%) scale(0); opacity: 0.6; }',
        '  100% { transform: translate(-50%,-50%) scale(1); opacity: 0; }',
        '}',

        /* glow layer */
        '#if22-glow {',
        '  position: fixed; inset: 0; z-index: 0; pointer-events: none;',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    /* cursor elements */
    var dot  = document.createElement('div'); dot.id  = 'if22-dot';
    var ring = document.createElement('div'); ring.id = 'if22-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    /* glow layer */
    var glow = document.createElement('div'); glow.id = 'if22-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(glow, document.body.firstChild);

    /* positions */
    var mx = window.innerWidth / 2,  my = window.innerHeight / 2;
    var rx = mx, ry = my;
    var gx = mx, gy = my;

    document.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
    });

    /* hover detection */
    document.addEventListener('mouseover', function (e) {
        if (e.target.closest('a, button, [role="button"], input, label, select, textarea')) {
            document.body.classList.add('cursor-hover');
        }
    });
    document.addEventListener('mouseout', function (e) {
        if (e.target.closest('a, button, [role="button"], input, label, select, textarea')) {
            document.body.classList.remove('cursor-hover');
        }
    });

    /* hide when leaving window */
    document.addEventListener('mouseleave', function () {
        dot.style.opacity  = '0';
        ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
        dot.style.opacity  = '';
        ring.style.opacity = '';
    });

    function accentColor() {
        return document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'rgba(41,151,255,0.07)'
            : 'rgba(0,113,227,0.05)';
    }

    /* animation loop */
    (function tick() {
        /* dot: instant */
        dot.style.left = mx + 'px';
        dot.style.top  = my + 'px';

        /* ring: lerp */
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';

        /* glow: slower lerp */
        gx += (mx - gx) * 0.06;
        gy += (my - gy) * 0.06;
        glow.style.background =
            'radial-gradient(520px circle at ' + gx + 'px ' + gy + 'px,' +
            accentColor() + ',transparent 65%)';

        requestAnimationFrame(tick);
    }());

    /* click: burst rings */
    document.addEventListener('click', function (e) {
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        var color = dark ? 'rgba(41,151,255,0.35)' : 'rgba(0,113,227,0.25)';

        [80, 130].forEach(function (size, i) {
            var r = document.createElement('span');
            r.setAttribute('aria-hidden', 'true');
            r.style.cssText =
                'position:fixed;' +
                'left:' + e.clientX + 'px;top:' + e.clientY + 'px;' +
                'width:' + size + 'px;height:' + size + 'px;' +
                'border-radius:50%;pointer-events:none;z-index:9997;' +
                'background:transparent;' +
                'border:1px solid ' + color + ';' +
                'transform:translate(-50%,-50%) scale(0);' +
                'animation:if22-ripple 0.6s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.08) + 's forwards;';
            document.body.appendChild(r);
            r.addEventListener('animationend', function () { r.remove(); });
        });
    });

}());
