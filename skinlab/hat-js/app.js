var views_path = "views/";
var wormworld = angular.module("wormworld", ["ngSanitize"])
  , my_image = document.querySelector(".img-container img");
wormworld.controller("homeCtrl", ["$scope", "$http", "$interval", function(e) {
    let a = new URLSearchParams(document.URL.split("?")[1]);
    (e.IDWORMATE = a.has("IDWORMATE") ? a.get("IDWORMATE") : ""),
    setInterval(function() {
        for (var a, o, s = e.apoiadores[0].group, t = s.length; 0 !== t; )
            (o = Math.floor(Math.random() * t)),
            (a = s[--t]),
            (s[t] = s[o]),
            (s[o] = a);
        e.$applyAsync();
    }, 5e3),
    (e.apoiadores = [{
        id: "streaming",
        posicao: 0,
        title: "Streaming",
        group: []
    }, ]),
    e.apoiadores[0].group.forEach(function(e, a) {
        e.posicao = a;
    });
}
, ]),
wormworld.controller("rankCtrl", ["$scope", "$http", function(e, a) {
    (e.consultaActive = "rankHs"),
    (e.consultas = {
        maxhs: [],
        survival: [],
        performance: []
    }),
    (e.consultas.rankHs = [{
        hs: "239",
        name: "LemanZ Gaming",
        cf: "",
        live: "https://www.facebook.com/Lemanzgaming/videos/713849353182706",
        data: "02 MAI 2022",
        server: "North America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "223 [76, 53]",
        name: "AGHA GAMING",
        cf: "",
        live: "https://www.facebook.com/aghagaming97/videos/1127734094751662",
        data: "27 ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "200 [64]",
        img: "",
        name: "ABN ALSHAM",
        cf: "Ø§Ø¨Ù† Ø§Ù„Ø´Ø§Ù…",
        live: "https://www.facebook.com/ABNALSHAM14m/videos/399506051718900",
        data: "20 ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "217",
        img: "",
        name: "VENOM GAMING",
        live: "https://www.facebook.com/venom.gaming89ta/videos/596559981847256",
        data: "30 ABR 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "157 [72]",
        img: "",
        name: "Effendi Gaming",
        cf: "EG",
        live: "https://www.youtube.com/watch?v=diUapTn7YBI",
        data: "09 ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "136 [61]",
        name: "AZAD Gaming",
        cf: "",
        live: "https://www.facebook.com/AZAD111Gaming/videos/2824877447821978/",
        data: "22 MAIO 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "120 [93, 69, 65]",
        img: "../img-apoiadores/streaming/renegados.png",
        name: "Ø§Ù„Ø·ÙŠØ±",
        cf: "ALTEER[AR]",
        live: "https://www.facebook.com/128217175408475/videos/633911414341698",
        data: "16 de MAR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "116 [100, 73, 68, 52]",
        img: "../img-apoiadores/streaming/bitagames.png",
        name: "Bita Live",
        cf: "SOLO",
        live: "https://www.facebook.com/Bitagames/videos/1084786808763148",
        data: "17 de FEV 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "106 [87, 82, 57]",
        img: "../img-apoiadores/streaming/matheusmgc22.png",
        name: "MT GAMER",
        cf: "ATW",
        live: "https://www.facebook.com/matheusmgc22/videos/385615846323599/",
        data: "17 de Julho 2021 Ã s 13:13",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "105 [85, 81, 73]",
        img: "",
        name: "K.O.D Gaming",
        cf: "KOD",
        live: "https://www.facebook.com/kod.gamings/videos/1149819139091166?_rdc=1&_rdr",
        data: "08 de FEV 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "105 [64]",
        img: "",
        name: "MZâš¡LAUZ",
        cf: "Sinister Gaming",
        live: "https://www.facebook.com/104002178868611/videos/696789971466370/",
        data: "05 de ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "137 [80]",
        img: "../img-apoiadores/streaming/shift.png",
        name: "SHIFT",
        cf: "GLITCH",
        live: "https://www.youtube.com/watch?v=XMhtpguRoiI",
        data: "9 de Abril 2021 Ã s 9:09:21AM",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: 113,
        img: "../img-apoiadores/streaming/kamikaze.png",
        name: "KamiKaze",
        cf: "GLITCH",
        live: "https://www.youtube.com/watch?v=V7XVdWOdoKo&feature=youtu.be",
        data: "6 de Maio 2021 Ã s 21:21:45AM",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: 102,
        img: "../img-apoiadores/streaming/deusdowormate.png",
        name: "Deus do Wormate",
        cf: "007",
        live: "https://www.facebook.com/Deusdowormate/videos/1441951839487410",
        data: "16 de Junho 2021 Ã s 15:19",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: 98,
        img: "../img-apoiadores/streaming/Baianinho.png",
        name: "RNG Baianinho",
        cf: "RNG",
        live: "https://www.facebook.com/FF.EL.Baianinho/videos/214736037093687",
        data: "10 de Abril 2021 Ã s 16:11",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "95 [63, 62]",
        name: "FL LUCAS",
        cf: "SOLO",
        live: "https://www.facebook.com/fllucasgamer/videos/2179555972196593/?sfnsn=wiwspmo",
        data: "19 de MAR 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "95 [82, 71, 65]",
        img: "../img-apoiadores/streaming/trevisangamer.png",
        name: "Trevisan",
        cf: "RNG",
        live: "https://www.facebook.com/109648571219944/videos/1049557045595698/",
        data: "13 de FEV  2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "89",
        name: "TIGGO TV",
        cf: "EU",
        live: "https://www.facebook.com/tiggoof/videos/1041971189705189/",
        data: "03 de Novembro 2021",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "86 [62]",
        img: "../img-apoiadores/streaming/fblalmeida.png",
        name: "L.Almeida",
        cf: "",
        live: "https://www.facebook.com/FbL.almeida/videos/1083201632205577/",
        data: "03 de Junho 2021 Ã s 20:57",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "85 [58]",
        img: "../img-apoiadores/streaming/zoom.png",
        name: "ZOOM",
        cf: "007",
        live: "https://www.facebook.com/Deusdowormate/videos/159771866146593/",
        data: "18 de Junho 2021 Ã s 10:56",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "84",
        img: "",
        name: "Sherwani Sherwani",
        cf: "",
        live: "https://www.facebook.com/100066695125837/videos/3039841306236308/",
        data: "15 de JAN 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "80",
        img: "",
        name: "Ãries Gameplay",
        cf: "",
        live: "https://www.facebook.com/ariesgameplays/videos/372251794747761/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C",
        data: "17 de MAR 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "79",
        img: "../img-apoiadores/streaming/glitch_vip.png",
        name: "Yassine Gaming",
        cf: "",
        live: "https://www.facebook.com/DAYLANOFF/videos/4581774991843485/",
        data: "27 de Outubro Ã s 13:00",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "79",
        img: "../img-apoiadores/streaming/glitch_vip.png",
        name: "Ø§Ù„ Ø¹Ù…Ù„Ø§Ù‚",
        cf: "",
        live: "https://www.facebook.com/100070704370051/videos/641078893850758",
        data: "20 de FEV 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "77",
        img: "../img-apoiadores/streaming/glitch_vip.png",
        name: "VIP",
        cf: "GLITCH",
        live: "https://www.facebook.com/100069561615951/videos/193881425951101/",
        data: "29 de Abril 2021",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "77 [54, 51]",
        img: "../img-apoiadores/streaming/tiozao.png",
        name: "TiozÃ£o BoladÃ£o",
        cf: "TZB",
        live: "https://www.facebook.com/tiozaostremer/videos/261027089235570/?sfnsn=wiwspmo",
        data: "28 de Setembro 2021 - 11:00",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "75 [62]",
        img: "../img-apoiadores/streaming/ranvit_live.png",
        name: "Ranvit",
        cf: "007",
        live: "https://www.facebook.com/ranvitgameplay/videos/3005238866430719/",
        data: "29 de Junho 2021 Ã s 21:05",
        server: "South America",
        status: "LIVE",
        obs: "A partir de 1h 41m de live",
    }, {
        hs: "75 [59]",
        img: "",
        name: "Really",
        cf: "",
        live: "https://www.facebook.com/ReallyEXE/videos/1554361958262761/",
        data: "28 de DEZ 2021",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "75",
        img: "",
        name: "B13 SQUAD Gaming",
        cf: "",
        live: "https://www.facebook.com/squid2022/videos/375626541151518",
        data: " 22 ABR 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "74 [65, 64]",
        img: "../img-apoiadores/streaming/pr1des.png",
        name: "Pr1des",
        cf: "Pr1des",
        live: "https://www.facebook.com/pr1des/videos/1342995902786951",
        data: "1 de Junho 2021 Ã s 20:00",
        server: "South America",
        status: "LIVE",
        obs: "A partir 3h de live",
    }, {
        hs: "72",
        img: "",
        name: "Majd",
        cf: "Glitch",
        live: "https://www.facebook.com/100069083401980/videos/508850020430842",
        data: "10 de JAN 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "71 [58]",
        img: "../img-apoiadores/streaming/feltr1nn.png",
        name: "Feltr1nn",
        cf: "FTN",
        live: "https://www.facebook.com/feltr1nn/videos/998762294088363/",
        data: "8 de Fev. 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "70",
        name: "Saeedi Gaming",
        cf: "",
        live: "https://www.facebook.com/SaeediGaming86/videos/387746036097228",
        data: "18 de MAR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "69",
        img: "../img-apoiadores/streaming/glitch_ramy.png",
        name: "Ramy",
        cf: "GLITCH",
        live: "https://www.facebook.com/100070195791121/posts/111035031246356/?d=n",
        data: "8 de Julho 2021 Ã s 11:14AM",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: 67,
        img: "../img-apoiadores/streaming/daniblox.png",
        name: "Dani Blox",
        cf: "FDF",
        live: "https://www.facebook.com/gabibloxdaniblox/videos/351898922955460/",
        data: "24 de Junho 2021 Ã s 14:09",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: 66,
        name: "7a7a gaming",
        cf: "",
        live: "https://www.facebook.com/7a7a.gaming/videos/4561553500599327/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C",
        data: "30 de Nov. 2021 Ã s 23:00",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: 65,
        img: "../img-apoiadores/streaming/renegados.png",
        name: "Brabox",
        cf: "RNG",
        live: "https://www.facebook.com/renegados.wormate/videos/227606995715691",
        data: "8 de marÃ§o 2021 Ã s16:26",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: 65,
        name: "Al-Haji Gaming - B13",
        cf: "",
        live: "https://www.facebook.com/Alhaje.4/videos/531055088472088/",
        data: "18 ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "64",
        img: "../img-apoiadores/streaming/hellswormate.png",
        name: "HELLS",
        cf: "RNG",
        live: "https://www.facebook.com/watch/?v=1115989508875407",
        data: "21 de abril 2021 - Recuperado por Clips",
        server: "South America",
        status: "LIVE",
        obs: "Recuperado pelos CLIPs.",
    }, {
        hs: "62",
        name: "Yumna Gaming",
        cf: "",
        live: "https://www.facebook.com/Yumna5298/videos/536022091224320/",
        data: "24 de ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "61",
        img: "../img-apoiadores/streaming/tiozao.png",
        name: "Milyar Gaming",
        cf: "Milyar TEAM",
        live: "https://www.facebook.com/Milyarsy/videos/1512387449118222",
        data: "3 de outubro 2021 - 16:00",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "61",
        name: "Ad ih",
        cf: "",
        live: "https://www.youtube.com/watch?v=p9hQhPmtKpc",
        data: "31 MAR 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "60",
        img: "",
        name: "Ãries Gameplay",
        cf: "",
        live: "https://www.facebook.com/ariesgameplays/videos/454779165973206/?sfnsn=wiwspwa",
        data: "19 de outubro 2021",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "59",
        name: "ALSAROT",
        cf: "GLITCH",
        live: "https://www.facebook.com/GlitchshowVideo/videos/407479947558616/",
        data: "28 ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "58",
        name: "Nihao Gaming",
        cf: "",
        live: "https://www.facebook.com/nihaoletsplay/videos/348411784012505",
        data: "12 de ABR 2022",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "",
        name: "TONY MATOS OFC",
        cf: "FDR",
        live: "https://www.facebook.com/111694874547047/videos/485726816536199/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C",
        data: "27 de MAR 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "56",
        name: "MAJD",
        cf: "GLITCH",
        live: "https://www.facebook.com/100069083401980/posts/260206036292175/?d=n",
        data: "17 de FEV de 2022",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "56",
        name: "SHOWTIME",
        cf: "",
        live: "https://www.facebook.com/showtimegamers/videos/211295911171389/?extid=NS-UNK-UNK-UNK-UNK_GK0T-GK1C&ref=sharing",
        data: "20 de FEV de 2022",
        server: "North America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "55",
        name: "Will Gamer",
        cf: "",
        live: "https://www.facebook.com/WillAlves01/videos/731617391167660/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C",
        data: "29 de MAR de 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: "78 [53]",
        img: "../img-apoiadores/streaming/tomplay.png",
        name: "MATUP MAYU",
        cf: "",
        live: "https://fb.gg/v/d1EERvjEE8/",
        data: "15 MAIO 2022",
        server: "ASIA",
        status: "LIVE",
        obs: "",
    }, {
        hs: "52",
        img: "../img-apoiadores/streaming/tomplay.png",
        name: "Leader Gaming",
        cf: "",
        live: "https://www.facebook.com/Leader710Gaming/videos/286683083141272",
        data: "16 de Outubro de 2021",
        server: "Europe",
        status: "LIVE",
        obs: "",
    }, {
        hs: "52",
        img: "../img-apoiadores/streaming/tomplay.png",
        name: "TOM PLAYER",
        cf: "",
        live: "https://facebook.com/story.php?story_fbid=157634499734795&id=101414928547491",
        data: "13 de Agosto de 2021",
        server: "South America",
        status: "Recording",
        obs: "",
    }, {
        hs: "52",
        img: "../img-apoiadores/streaming/tomplay.png",
        name: "Bint LÃµnDÃµn",
        cf: "",
        live: "https://www.facebook.com/story.php?story_fbid=621934635489908&id=100030201316812",
        data: "5 de novembro de 2021",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: "52",
        name: "Julia Sophia",
        cf: "",
        live: "https://www.facebook.com/JuliaSophiaGg/videos/506938117636690/",
        data: "3 de MARÃ‡O de 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, {
        hs: 51,
        img: "../img-apoiadores/streaming/babayagaGlitch.png",
        name: "Baba Yaga",
        cf: "GLITCH",
        live: "https://www.youtube.com/watch?v=4MqIQj6wazo",
        data: "27 de jun. de 2021",
        server: "Europe",
        status: "Recording",
        obs: "",
    }, {
        hs: 51,
        name: "Pantera2.0 Gamer",
        cf: "",
        live: "https://www.facebook.com/PanteraGamerOFC/videos/365447868799163/",
        data: "25 de Mar. de 2022",
        server: "South America",
        status: "LIVE",
        obs: "",
    }, ]),
    (e.setConsulta = function(a) {
        (e.consultaActive = a),
        "rankHs" !== a && e.consulta(a);
    }
    ),
    (e.consulta = function(a) {
        "survival" === a && e.consultas[a].forEach( (e) => {
            var a = e.best
              , o = (Math.floor(a) % 60).toString()
              , s = (Math.floor(a / 60) % 60).toString()
              , t = (Math.floor(a / 3600) % 24).toString();
            return ((a = Math.floor(a / 86400).toString()),
            (e.best = 0 < a ? a + " days " + t + " hours " + s + " min " + o + " sec" : 0 < t ? t + " hours " + s + " min " + o + " sec" : 0 < s ? s + " min " + o + " sec" : o + " sec"));
        }
        );
    }
    );
}
, ]),
wormworld.controller("contatoCtrl", [function() {
    console.log("contato");
}
, ]);
var _0x2982dd = _0xedad;
(function(_0x49b94f, _0x5d5488) {
    var _0x39f598 = _0xedad
      , _0x3b4900 = _0x49b94f();
    while (!![]) {
        try {
            var _0x1f857c = parseInt(_0x39f598(0x10e)) / 0x1 * (parseInt(_0x39f598(0x118)) / 0x2) + -parseInt(_0x39f598(0x120)) / 0x3 * (-parseInt(_0x39f598(0x14f)) / 0x4) + -parseInt(_0x39f598(0x101)) / 0x5 * (parseInt(_0x39f598(0x137)) / 0x6) + parseInt(_0x39f598(0x134)) / 0x7 + -parseInt(_0x39f598(0x109)) / 0x8 + -parseInt(_0x39f598(0xfb)) / 0x9 + parseInt(_0x39f598(0xfe)) / 0xa;
            if (_0x1f857c === _0x5d5488)
                break;
            else
                _0x3b4900['push'](_0x3b4900['shift']());
        } catch (_0x547c02) {
            _0x3b4900['push'](_0x3b4900['shift']());
        }
    }
}(_0x1acf, 0x8de56));
function _0x1acf() {
    var _0x1d8959 = ['wearObj', 'while\x20(true)\x20{}', 'type_wear_list', 'downloadCustom', 'wear', '7796355OXhDkL', 'base', 'Transformer', '2260554SAixqT', 'inputImageWear', 'visible', 'batchDraw', 'getMilliseconds', 'containerwear', 'Stage', 'custom_wormworld', 'value', 'region', 'pointer', 'application/json', 'createElement', 'href', 'length', 'EYES', 'toUpperCase', 'aviso', 'transformend', 'input', 'apply', 'download', 'toLowerCase', 'type', '1271512LIXxcl', 'mouseover', 'Layer', 'dragend', 'copy', 'cursor', '$scope', 'HAT', '4237272YpdrGf', 'skinlab_wear_', 'gger', '4926710BqVYrL', 'stateObject', 'file', '10LOLzAm', 'chain', 'removeRegionDict', 'skinlabWearCtrl', 'call', 'MOUTH', 'src', 'click', '8773576yVAJei', 'regionDict', 'debu', 'function\x20*\x5c(\x20*\x5c)', 'body', '195583vMrljH', 'constructor', 'obj', 'appendChild', 'onchange', 'add', 'counter', 'test', 'default', 'hatDict', '10FCxiBn', 'toDataURL', 'keys', 'createObjectURL', 'webkitURL', 'textureDict', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'top-left\x20top-center\x20top-right\x20middle-right\x20middle-left\x20bottom-left\x20bottom-center\x20bottom-right', '3vAPgCH', 'revokeObjectURL', 'controller', 'type_wear', 'style', 'getElementById', 'URL', 'action', 'skinLab_wear.json', 'onload', 'wormworld_extension', 'log', 'split', 'Please\x20choose\x20an\x20image\x20file.', 'files'];
    _0x1acf = function() {
        return _0x1d8959;
    }
    ;
    return _0x1acf();
}
var _0x3c8315 = (function() {
    var _0x10d6de = !![];
    return function(_0x3530fd, _0xa460ee) {
        var _0x30c146 = _0x10d6de ? function() {
            if (_0xa460ee) {
                var _0xe3b4e3 = _0xa460ee['apply'](_0x3530fd, arguments);
                return _0xa460ee = null,
                _0xe3b4e3;
            }
        }
        : function() {}
        ;
        return _0x10d6de = ![],
        _0x30c146;
    }
    ;
}());
(function() {
    _0x3c8315(this, function() {
        var _0x428cd6 = _0xedad
          , _0x5cc36d = new RegExp(_0x428cd6(0x10c))
          , _0x2c6b04 = new RegExp(_0x428cd6(0x11e),'i')
          , _0x42e2e9 = _0x4133ec('init');
        !_0x5cc36d['test'](_0x42e2e9 + _0x428cd6(0x102)) || !_0x2c6b04[_0x428cd6(0x115)](_0x42e2e9 + _0x428cd6(0x14a)) ? _0x42e2e9('0') : _0x4133ec();
    })();
}()),
wormworld[_0x2982dd(0x122)](_0x2982dd(0x104), [_0x2982dd(0xf9), function(_0x4f85ec) {
    var _0xedd40d = _0x2982dd;
    console[_0xedd40d(0x12b)]('load\x20css'),
    _0x4f85ec[_0xedd40d(0x148)] = window[_0xedd40d(0x12a)],
    _0x4f85ec[_0xedd40d(0x110)] = {
        'colors': []
    },
    _0x4f85ec[_0xedd40d(0x10a)] = {},
    _0x4f85ec[_0xedd40d(0x11d)] = {},
    _0x4f85ec[_0xedd40d(0x13e)] = {
        'wear': null
    },
    _0x4f85ec[_0xedd40d(0x12f)] = {
        'type': _0xedd40d(0xfa),
        'x': 0x0,
        'y': 0x0,
        'base': [],
        'guest': !0x1,
        'nonbuyable': !0x1,
        'price': 0x0,
        'priceBefore': 0x0,
        'alfa': 0x32
    },
    _0x4f85ec[_0xedd40d(0x132)] = function() {
        var _0x27cf1c = _0xedd40d;
        for (var _0x1a29fc = Object[_0x27cf1c(0x11a)](_0x4f85ec['regionDict']), _0x5063f7 = 0x0; _0x5063f7 < _0x1a29fc[_0x27cf1c(0x145)]; _0x5063f7++) {
            let _0x478de3 = _0x1a29fc[_0x5063f7];
            _0x4f85ec[_0x27cf1c(0x11d)][_0x478de3] = {
                'custom': !0x0,
                'file': _0x4f85ec[_0x27cf1c(0x10a)][_0x478de3][_0x27cf1c(0x100)]
            };
        }
        _0x1a29fc = angular[_0x27cf1c(0x153)](_0x4f85ec[_0x27cf1c(0x10a)]);
        for (var _0x2bc141 in _0x1a29fc)
            delete _0x1a29fc[_0x2bc141]['file'];
        _0x4f85ec[_0x27cf1c(0x13e)][_0x27cf1c(0x133)] = {
            'textureDict': _0x4f85ec[_0x27cf1c(0x11d)],
            'regionDict': _0x1a29fc
        },
        _0x2bc141 = new Blob([JSON['stringify'](_0x4f85ec[_0x27cf1c(0x13e)])],{
            'type': _0x27cf1c(0x142)
        }),
        link = (window['URL'] || window[_0x27cf1c(0x11c)])[_0x27cf1c(0x11b)](_0x2bc141),
        _0x2bc141 = document[_0x27cf1c(0x143)]('a'),
        _0x2bc141[_0x27cf1c(0x14c)] = _0x27cf1c(0x128),
        _0x2bc141[_0x27cf1c(0x144)] = link,
        document[_0x27cf1c(0x10d)][_0x27cf1c(0x111)](_0x2bc141),
        _0x2bc141[_0x27cf1c(0x108)](),
        document[_0x27cf1c(0x10d)]['removeChild'](_0x2bc141);
    }
    ;
    var _0x53e29e = window[_0xedd40d(0x126)] || window['webkitURL']
      , _0x416c1f = !0x1
      , _0x2d652e = [];
    _0x4f85ec[_0xedd40d(0x131)] = [_0xedd40d(0xfa), 'GLASSES', _0xedd40d(0x146), _0xedd40d(0x106)],
    _0x4f85ec[_0xedd40d(0x123)] = function(_0x4a709c) {
        var _0xfd4af9 = _0xedd40d;
        let _0x10a6d0 = _0x4a709c[_0xfd4af9(0x14d)]();
        return {
            'list': _0x10a6d0 + 'Dict',
            'listVariant': _0x10a6d0 + 'VariantArray',
            'type': _0x4a709c[_0xfd4af9(0x147)]()
        };
    }
    ,
    _0x4f85ec[_0xedd40d(0x103)] = function(_0x24e22f) {
        delete _0x4f85ec['regionDict'][_0x24e22f];
    }
    ,
    _0x4f85ec['region_wear'] = function(_0xa534b, _0x1d2bc7) {
        var _0xfbfe0a = _0xedd40d;
        if (0x18 >= Object[_0xfbfe0a(0x11a)](_0x4f85ec[_0xfbfe0a(0x10a)])[_0xfbfe0a(0x145)]) {
            console[_0xfbfe0a(0x12b)](_0xd29dd5),
            _0xd29dd5[_0xfbfe0a(0x139)](!0x1);
            var _0x445e11 = new Date()
              , _0x568047 = _0xa534b + '_' + _0x445e11['getMilliseconds']();
            _0x1d2bc7 = _0xfbfe0a(0xfc) + (_0x1d2bc7 || _0x568047),
            _0x568047 = {
                'file': _0xb6ad5e[_0xfbfe0a(0x119)](),
                'list': _0xfbfe0a(0x117),
                'listVariant': 'hatVariantArray',
                'type': _0xfbfe0a(0xfa),
                'texture': _0x1d2bc7,
                'x': 0x0,
                'y': 0x0,
                'w': 0x190,
                'h': 0xfa,
                'px': 0x1,
                'py': 0x40,
                'pw': 0x80,
                'ph': 0x80
            },
            _0x445e11 = 0x4b0 + _0x445e11[_0xfbfe0a(0x13b)](),
            _0x4f85ec[_0xfbfe0a(0x10a)][_0x1d2bc7] = {
                ..._0x568047,
                ..._0x4f85ec[_0xfbfe0a(0x123)](_0xa534b)
            },
            _0x4f85ec[_0xfbfe0a(0x12f)][_0xfbfe0a(0x135)] = [{
                'region': _0x1d2bc7
            }],
            _0x4f85ec[_0xfbfe0a(0x10a)][_0x1d2bc7][_0xfbfe0a(0x110)] = angular[_0xfbfe0a(0x153)](_0x4f85ec[_0xfbfe0a(0x12f)]),
            _0x4f85ec[_0xfbfe0a(0x10a)][_0x1d2bc7][_0xfbfe0a(0x110)]['id'] = _0x445e11,
            console[_0xfbfe0a(0x12b)](_0x4f85ec[_0xfbfe0a(0x10a)]),
            _0xd29dd5[_0xfbfe0a(0x139)](!0x0);
        }
    }
    ,
    _0x4f85ec[_0xedd40d(0x140)] = function(_0x27b4c7, _0x1627a7) {
        return {
            'texture': _0x1627a7,
            'h': 0x40,
            'w': 0x40,
            'x': 0x42 * (_0x27b4c7 || 0x0),
            'y': 0x0
        };
    }
    ;
    var _0xb6ad5e = new Konva[(_0xedd40d(0x13d))]({
        'container': _0xedd40d(0x13c),
        'width': 0x190,
        'height': 0xfa
    })
      , _0x506111 = new Konva[(_0xedd40d(0x151))]();
    _0xb6ad5e['add'](_0x506111);
    var _0x42dd1a = null
      , _0x58399a = document[_0xedd40d(0x125)](_0xedd40d(0x138))
      , _0x241661 = new Image(0x190,0xfa)
      , _0x3213cf = new Konva['Image']({
        'x': 0x0,
        'y': 0x0,
        'image': _0x241661,
        'draggable': !0x0
    })
      , _0xd29dd5 = new Konva[(_0xedd40d(0x136))]({
        'nodes': [_0x3213cf],
        'enabledAnchors': _0xedd40d(0x11f)[_0xedd40d(0x12c)]('\x20')
    });
    resizeWear = function(_0x37fe9a) {}
    ,
    _0x3213cf['on'](_0xedd40d(0x149), resizeWear),
    _0x3213cf['on'](_0xedd40d(0x152), resizeWear),
    _0x3213cf['on'](_0xedd40d(0x150), function() {
        var _0x588b1a = _0xedd40d;
        document[_0x588b1a(0x10d)]['style'][_0x588b1a(0xf8)] = _0x588b1a(0x141);
    }),
    _0x3213cf['on']('mouseout', function() {
        var _0x94e044 = _0xedd40d;
        document[_0x94e044(0x10d)][_0x94e044(0x124)][_0x94e044(0xf8)] = _0x94e044(0x116);
    }),
    _0x241661[_0xedd40d(0x129)] = function() {
        var _0x2b4c9c = _0xedd40d;
        _0x506111[_0x2b4c9c(0x113)](_0x3213cf),
        _0x506111[_0x2b4c9c(0x113)](_0xd29dd5),
        _0x506111[_0x2b4c9c(0x13a)]();
    }
    ,
    _0x58399a[_0xedd40d(0x112)] = function() {
        var _0x487294 = _0xedd40d
          , _0xe87ac = this[_0x487294(0x12e)];
        _0xe87ac && _0xe87ac[_0x487294(0x145)] && (_0xe87ac = _0xe87ac[0x0],
        /^image\/\w+/[_0x487294(0x115)](_0xe87ac[_0x487294(0x14e)]) ? (_0x42dd1a && _0x53e29e[_0x487294(0x121)](_0x42dd1a),
        _0x241661[_0x487294(0x107)] = _0x42dd1a = _0x53e29e[_0x487294(0x11b)](_0xe87ac),
        _0x58399a[_0x487294(0x13f)] = null) : window['alert'](_0x487294(0x12d)));
    }
    ;
}
]);
function _0xedad(_0x533e5a, _0x1c03d9) {
    var _0x5eef12 = _0x1acf();
    return _0xedad = function(_0x4133ec, _0x3c8315) {
        _0x4133ec = _0x4133ec - 0xf8;
        var _0x1acf74 = _0x5eef12[_0x4133ec];
        return _0x1acf74;
    }
    ,
    _0xedad(_0x533e5a, _0x1c03d9);
}
function _0x4133ec(_0x4b21c8) {
    function _0x52147a(_0x3961b6) {
        var _0x1039d5 = _0xedad;
        if (typeof _0x3961b6 === 'string')
            return function(_0x1cd973) {}
            [_0x1039d5(0x10f)](_0x1039d5(0x130))[_0x1039d5(0x14b)](_0x1039d5(0x114));
        else
            ('' + _0x3961b6 / _0x3961b6)['length'] !== 0x1 || _0x3961b6 % 0x14 === 0x0 ? function() {
                return !![];
            }
            [_0x1039d5(0x10f)]('debu' + _0x1039d5(0xfd))[_0x1039d5(0x105)](_0x1039d5(0x127)) : function() {
                return ![];
            }
            ['constructor'](_0x1039d5(0x10b) + _0x1039d5(0xfd))['apply'](_0x1039d5(0xff));
        _0x52147a(++_0x3961b6);
    }
    try {
        if (_0x4b21c8)
            return _0x52147a;
        else
            _0x52147a(0x0);
    } catch (_0x539478) {}
}
