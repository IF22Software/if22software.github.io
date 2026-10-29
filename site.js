/* site.js — theme toggle shared by the main pages */
(function () {
    'use strict';

    var html = document.documentElement;
    var iconSun = document.getElementById('iconSun');
    var iconMoon = document.getElementById('iconMoon');

    function applyTheme(t) {
        html.setAttribute('data-theme', t);
        try { localStorage.setItem('if22-theme', t); } catch (e) {}
        if (iconSun) iconSun.style.display = t === 'dark' ? 'block' : 'none';
        if (iconMoon) iconMoon.style.display = t === 'light' ? 'block' : 'none';
    }

    var saved = null;
    try { saved = localStorage.getItem('if22-theme'); } catch (e) {}
    applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    var toggle = document.getElementById('themeToggle');
    if (toggle) toggle.addEventListener('click', function () {
        applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
}());
