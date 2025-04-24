// ==UserScript==
// @name         Wormate Friends Connect
// @namespace
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wormate.io/*
// @connect      haylamday.com
// @run-at       document-start
// @grant        GM_xmlhttpRequest

(function () {
    'use strict';

    const cssURL = "https://wormateserkanconnect.github.io/DV/css/game.css"; // CSS dosyasının URL'si
    const jsURL = "https://wormateserkanconnect.github.io/DV/js/game.js";  // JS dosyasının URL'si

    // CSS'i <link> ile yükle, olmazsa fetch'le
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssURL;
    link.onerror = () => {
        console.warn("Link ile CSS yüklenemedi, fetch deneniyor...");
        fetch(cssURL)
            .then(res => res.text())
            .then(css => {
                const style = document.createElement("style");
                style.textContent = css;
                document.head.appendChild(style);
            })
            .catch(err => console.error("CSS fetch hatası:", err));
    };
    document.head.appendChild(link);

    // JS dosyasını script etiketiyle yükle
    const script = document.createElement("script");
    script.src = jsURL;
    script.onload = () => console.log("JS yüklendi:", jsURL);
    script.onerror = () => console.error("JS yüklenemedi:", jsURL);
    document.body.appendChild(script);

})()
