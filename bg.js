/* bg.js — Subtle cursor glow + click ripple
   Background stays solid. Only a faint spotlight and a clean ring on click.
*/
(function () {
    'use strict';

    /* inject keyframe once */
    var style = document.createElement('style');
    style.textContent = '@keyframes if22-ripple{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(-50%,-50%) scale(1);opacity:0}}';
    document.head.appendChild(style);

    /* glow layer */
    var glow = document.createElement('div');
    glow.setAttribute('aria-hidden', 'true');
    glow.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;';
    document.body.insertBefore(glow, document.body.firstChild);

    var tx = window.innerWidth  / 2;
    var ty = window.innerHeight / 2;
    var cx = tx, cy = ty;

    document.addEventListener('mousemove', function (e) {
        tx = e.clientX;
        ty = e.clientY;
    });

    function glowColor() {
        return document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'rgba(41,151,255,0.07)'
            : 'rgba(0,113,227,0.05)';
    }

    (function tick() {
        cx += (tx - cx) * 0.07;
        cy += (ty - cy) * 0.07;
        glow.style.background =
            'radial-gradient(480px circle at ' + cx + 'px ' + cy + 'px,' +
            glowColor() + ',transparent 65%)';
        requestAnimationFrame(tick);
    }());

    /* click ripple */
    document.addEventListener('click', function (e) {
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        var ring = document.createElement('span');
        ring.setAttribute('aria-hidden', 'true');
        ring.style.cssText =
            'position:fixed;' +
            'left:' + e.clientX + 'px;' +
            'top:'  + e.clientY + 'px;' +
            'width:140px;height:140px;' +
            'border-radius:50%;' +
            'transform:translate(-50%,-50%) scale(0);' +
            'pointer-events:none;z-index:0;background:transparent;' +
            'border:1px solid ' + (dark ? 'rgba(41,151,255,0.30)' : 'rgba(0,113,227,0.18)') + ';' +
            'animation:if22-ripple 0.65s cubic-bezier(0.16,1,0.3,1) forwards;';
        document.body.appendChild(ring);
        ring.addEventListener('animationend', function () { ring.remove(); });
    });

}());
