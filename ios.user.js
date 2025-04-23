// ==UserScript==
// @name         WormDV Connect
// @namespace    http://tampermonkey.net/
// @version      23.04.2025
// @description  Extension WormDV Connect
// @author       ᕲᐺ•ƤԼƛƬЄƝ
// @match        *://wormate.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 🔗 HARİCİ CSS dosyasını yükle
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'https://wormateserkanconnect.github.io/DV/css/game.css';  // 🔁 CSS dosyanın URL'sini buraya yapıştır
    document.head.appendChild(cssLink);

    // 🧠 HARİCİ JavaScript dosyasını yükle
    const script = document.createElement('script');
    script.src = 'https://wormateserkanconnect.github.io/DV/js/game.js';  // 🔁 JS dosyanın URL'sini buraya yapıştır
    script.type = 'text/javascript';
    script.onload = () => {
        console.log("📦 Harici JS başarıyla yüklendi!");
    };
    document.body.appendChild(script);
})();
