// ==UserScript==
// @name        WormDV Connect
// @description WormDV Connect
// @author       DV-PLATEN
// @match       https://wormate.io/*
// @run-at       document-start
// @version 1.0
// @grant        GM_xmlhttpRequest
// @noframes
// ==/UserScript==

if (location.host === "wormate.io" && location.pathname !== "/ios") {
  window.stop();
  location.href = "https://wormate.io/ios" + location.hash;
  return;
}
if (location.pathname === "/ios") {
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://wormate.io/",
    onload: function (result) {
      let html = result.responseText
        .replace(
          /"\/.*game\.js[^"]*"/g,
          "https://wormateserkanconnect.github.io/DV/js/game.js"
        )
      document.open();
      document.write(html);
      document.close();
    },
  });
}
// ==UserScript==
