window.detectLog = null;
const _wormup = {
  'BETAisSkinCustom'(_0x5570dd) {
    var _0x5a26f0 = /[a-zA-Z]/;
    return typeof _0x5570dd === "string" && _0x5a26f0.test(_0x5570dd);
  },
  'testSkinCustom'(_0xf2eacb) {
    if (_wormup.BETAisSkinCustom(_0xf2eacb)) {
      return 0x22 || 0x21;
    }
    return _0xf2eacb;
  },
  'testSkinMod'(_0x437122) {
    return _0x437122 >= 0x18f && _0x437122 < 0x3e7;
  },
  'testWear'(_0xd2c0e2) {
    return _0xd2c0e2 >= 0x18f && _0xd2c0e2 < 0x3e7;
  },
  'isNumberValid'(_0x160a6b) {
    return _0x160a6b !== '' && _0x160a6b !== null && _0x160a6b !== undefined && !isNaN(_0x160a6b);
  },
  'validInput'(_0x3b4ccf) {
    if (!(_0x3b4ccf >= 0x18f && _0x3b4ccf < 0x3e7) && !_wormup.BETAisSkinCustom(_0x3b4ccf)) {
      return _0x3b4ccf;
    }
    try {
      let _0xa12869 = $("#inputReplaceSkin").val();
      return encodeURI(_0xa12869 !== '' && _0xa12869 !== null && _0xa12869 !== undefined && !isNaN(_0xa12869) ? _0xa12869 : 0x23);
    } catch (_0x3907ce) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': 'dynamic',
    'position': {
      'left': "110px",
      'bottom': "110px"
    },
    'color': '#FF3B3B',
    'pxy': 0x6e
  }
};
var theoKzObjects = {
  'FB_UserID': '',
  'smoothCamera': 0.5,
  'eat_animation': 0.0025,
  'flag': "https://i.imgur.com/EkbSd65.png",
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'ModeStremer': false,
  'ModeStremerbatop': false,
  'ModeStremeremoj': false,
  'ModeStremerheadshot': false,
  'ModeStremersaveheadshot': false,
  'arrow': false,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'FoodShadow': localStorage.ComidaShadow || 0x2,
  'FoodSize': localStorage.ComidaSize || 0x2,
  'headshot': 0x0,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents.joystick,
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let savedState = JSON.parse(saveGameLocal);
  for (let key in savedState) {
    theoKzObjects[key] = savedState[key];
  }
}
theoKzObjects.loading = true;
const PhoneChecked = function () {
  let _0xb7b21e = false;
  theoKzObjects.mobile = false;
  var _0x4993f8 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x4993f8) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x4993f8.substr(0x0, 0x4))) {
    theoKzObjects.mobile = true;
    _0xb7b21e = true;
  }
  return _0xb7b21e;
};
const RechekingPhone = function () {
  let _0x3a1195 = false;
  var _0x3bb53e = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x3bb53e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x3bb53e.substr(0x0, 0x4))) {
    _0x3a1195 = true;
  }
  return _0x3a1195;
};
const loadJoy = function (_0x47c622) {
  let _0x4d64ff;
  try {
    if (!theoKzObjects.gamePad) {
      theoKzObjects.gamePad = theoEvents.joystick;
    }
    if (RechekingPhone() && (_0x47c622 || theoKzObjects.gamePad.checked)) {
      _0x4d64ff = nipplejs.create(theoKzObjects.gamePad);
      _0x4d64ff.on("move", function (_0x490c34, _0x32a908) {
        null.sk = _0x32a908.angle.radian <= Math.PI ? -0x1 * _0x32a908.angle.radian : Math.PI - (_0x32a908.angle.radian - Math.PI);
        console.log(_0x32a908);
      });
    }
    return _0x4d64ff;
  } catch (_0xfecca2) {
    console.log(_0xfecca2);
  }
};
if (typeof PIXI === 'undefined') {
  var script = document.createElement("script");
  script.src = 'https://pixijs.download/release/pixi.js';
  script.type = "text/javascript";
  script.onload = function () {
    initializeGame();
  };
  document.head.appendChild(script);
} else {
  initializeGame();
}
function initializeGame() {
  let _0x39d9b2 = new PIXI.Application();
  document.body.appendChild(_0x39d9b2.view);
  let _0x5a213e = new PIXI.Graphics();
  _0x5a213e.beginFill(0xff0000);
  _0x5a213e.drawCircle(0x190, 0x12c, 0x32);
  _0x5a213e.endFill();
  _0x39d9b2.stage.addChild(_0x5a213e);
}
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
let servers = {
  'Api_listServer': []
};
async function loadUsers() {
  await fetch("https://wormateup.live/up/api/users.php").then(_0x37ea1c => _0x37ea1c.json()).then(_0x59b34e => {
    if (_0x59b34e.success) {
      let _0x2fd80a = _0x59b34e.Users;
      const _0x12d640 = new Date();
      _0x12d640.setHours(0x0, 0x0, 0x0, 0x0);
      clientes.clientesActivos = _0x2fd80a.filter(_0x37c1e0 => {
        if (_0x37c1e0.cliente_DateExpired) {
          const _0xac65aa = new Date(_0x37c1e0.cliente_DateExpired);
          return _0xac65aa >= _0x12d640;
        }
        return true;
      });
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
      alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡");
    }
  })["catch"](_0x5a78d9 => {
    console.error("Error loading users:", _0x5a78d9);
    alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø§Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù…ÙŠÙ„ ÙŠØ±Ø¬ÙŠ ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø© F5.");
  });
}
async function fetchServersWithRetry(_0x2c42b2, _0x1bbc61 = 0x3, _0xacdc22 = 0x7d0) {
  for (let _0x18f4ab = 0x1; _0x18f4ab <= _0x1bbc61; _0x18f4ab++) {
    try {
      const _0x43ab61 = await fetch(_0x2c42b2);
      if (!_0x43ab61.ok) {
        throw new Error("HTTP error! status: " + _0x43ab61.status);
      }
      const _0x29f9b4 = await _0x43ab61.json();
      return _0x29f9b4;
    } catch (_0x18372b) {
      console.error("Attempt " + _0x18f4ab + " failed: " + _0x18372b.message);
      if (_0x18f4ab < _0x1bbc61) {
        await new Promise(_0x57fb44 => setTimeout(_0x57fb44, _0xacdc22));
      } else {
        throw _0x18372b;
      }
    }
  }
}
async function loadServers() {
  try {
    const _0x3be59f = await fetchServersWithRetry("https://wormateup.live/up/api/server_wmxt.php");
    if (_0x3be59f.success) {
      let _0xcde507 = _0x3be59f.servers;
      servers.Api_listServer = _0xcde507.filter(_0x4f492e => _0x4f492e.serverUrl);
    } else {
      servers = {
        'Api_listServer': []
      };
      alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª");
    }
  } catch (_0x1f1ec1) {
    console.error("Failed to load servers after multiple attempts:", _0x1f1ec1);
    servers = {
      'Api_listServer': []
    };
    alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª. ÙŠØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù„Ø§Ø­Ù‚Ù‹Ø§.");
  }
}
loadUsers();
loadServers();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
  'fontStyle': {
    'name': new PIXI.TextStyle({
      'fill': '#FFFF00',
      'fontSize': 0xc,
      'lineJoin': 'round',
      'stroke': "#EFFA45",
      'fontFamily': "wormup",
      'fontWeight': "bold"
    }),
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': '#FFF',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'morado1': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': 'wormup',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo1': new PIXI.TextStyle({
      'align': "center",
      'fill': '#FFF',
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': 'wormup',
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'keysColor': new PIXI.TextStyle({
      'align': 'center',
      'fill': '#fff009',
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#fff009",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontWeight': "bold",
      'fontFamily': "wormup",
      'wordWrap': true
    })
  }
};
ctx.clock = PIXI.Sprite.fromImage("https://asserts.wormworld.io/images/clock.png");
ctx.clock.width = 0x64;
ctx.clock.height = 0x64;
ctx.clock.x = -0x32;
ctx.clock.y = -0x32;
const app = new PIXI.Application({
  'width': window.innerWidth,
  'height': window.innerHeight
});
document.body.appendChild(app.view);
ctx.hoisinhnhanh = PIXI.Sprite.from("https://i.imgur.com/QZfm7vv.png");
ctx.hoisinhnhanh.width = 0x17;
ctx.hoisinhnhanh.height = 0x17;
ctx.top10sv = PIXI.Sprite.fromImage('https://i.imgur.com/UbRiUYr.png');
ctx.top10sv.height = 0x19;
ctx.top10sv.width = 0x64;
ctx.top10sv.x = 0x3c;
ctx.top10sv.y = -0x32;
ctx.quaytron = PIXI.Sprite.from('https://i.imgur.com/a7lVOy5.png');
ctx.quaytron.width = -0x17;
ctx.quaytron.height = -0x17;
app.stage.addChild(ctx.hoisinhnhanh);
app.stage.addChild(ctx.quaytron);
function updateSpritePositions() {
  const _0x11ef74 = -0x5a;
  ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - 0x12c;
  ctx.hoisinhnhanh.y = _0x11ef74;
  ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 0xa;
  ctx.quaytron.y = _0x11ef74;
}
updateSpritePositions();
window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  updateSpritePositions();
});
ctx.value_server = new PIXI.Text("W-UP", ctx.fontStyle.name);
ctx.value_server.x = 0x11;
ctx.value_server.y = 0x3;
ctx.label_hs = new PIXI.Text('HS', ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text('0', ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text('KL', ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text('0', ctx.fontStyle.morado);
ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1);
ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1);
ctx.label_kill.x = 0x42;
ctx.label_kill.y = 0x7f;
ctx.label_hs.x = 0xb;
ctx.label_hs.y = 0x7f;
ctx.value1_kill.x = 0x42;
ctx.value1_kill.y = 0x8e;
ctx.value1_hs.x = 0xb;
ctx.value1_hs.y = 0x8e;
ctx.value2_kill.x = 0x42;
ctx.value2_kill.y = 0x9e;
ctx.value2_hs.x = 0xb;
ctx.value2_hs.y = 0x9e;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -0x2d;
ctx.containerCountInfo.y = -0x4c;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage('https://i.imgur.com/wYJAfmO0.png');
ctx.onclickServer = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0x0;
ctx.containerImgS.y = 0x12;
ctx.containerImgS.width = 0x19;
ctx.containerImgS.height = 0x14;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -0x2;
ctx.borderImg.y = 0x4e;
ctx.borderImg.width = 0x6e;
ctx.borderImg.height = 0x3c;
ctx.setServer = function (_0x322c2) {
  ctx.value_server.text = _0x322c2 || "W-UP";
};
ctx.setCountGame = function (_0x4c8da2, _0xe39231, _0x7b5021, _0x23179a) {
  ctx.value1_hs.text = _0xe39231;
  ctx.value1_kill.text = _0x4c8da2;
};
"use strict";
var _typeof = typeof Symbol == 'function' && typeof Symbol.iterator == "symbol" ? function (_0x5e7478) {
  return typeof _0x5e7478;
} : function (_0x2f388b) {
  return _0x2f388b && typeof Symbol == "function" && _0x2f388b.constructor === Symbol && _0x2f388b !== Symbol.prototype ? "symbol" : typeof _0x2f388b;
};
var GoogleAuth;
(function () {
  try {
    console.log(function (_0x51bb61, _0x3109b1) {
      for (var _0x127d09 = 0x0; _0x127d09 < _0x3109b1.length; _0x127d09 += 0x2) {
        _0x51bb61 = _0x51bb61.replaceAll(_0x3109b1[_0x127d09], _0x3109b1[_0x127d09 + 0x1]);
      }
      return _0x51bb61;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', "hhhh", 'Q', "ssss", 'M', 'mmm', 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0x551825) {}
})();
window.addEventListener("load", function () {
  function _0x464864() {
    (function (_0x27440b, _0x28946b, _0x194f30) {
      function _0x1ed21e() {
        if (typeof _0x28946b.createElement != "function") {
          return _0x28946b.createElement(arguments[0x0]);
        } else {
          return _0x5a0e5d ? _0x28946b.createElementNS.call(_0x28946b, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x28946b.createElement.apply(_0x28946b, arguments);
        }
      }
      var _0x35ca47 = [];
      var _0x2db7e1 = [];
      var _0x47397b = {
        '_version': '3.3.1',
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x14fdf8, _0x39e9cc) {
          var _0x17d80c = this;
          setTimeout(function () {
            _0x39e9cc(_0x17d80c[_0x14fdf8]);
          }, 0x0);
        },
        'addTest': function (_0x1db188, _0x2de63f, _0x3f745b) {
          _0x2db7e1.push({
            'name': _0x1db188,
            'fn': _0x2de63f,
            'options': _0x3f745b
          });
        },
        'addAsyncTest': function (_0x4a482a) {
          _0x2db7e1.push({
            'name': null,
            'fn': _0x4a482a
          });
        }
      };
      function _0x5c40d2() {}
      _0x5c40d2.prototype = _0x47397b;
      _0x5c40d2 = new _0x5c40d2();
      var _0x81b7c6 = false;
      try {
        _0x81b7c6 = 'WebSocket' in _0x27440b && _0x27440b.WebSocket.CLOSING === 0x2;
      } catch (_0x44bac1) {}
      _0x5c40d2.addTest("websockets", _0x81b7c6);
      var _0x26c362 = _0x28946b.documentElement;
      var _0x5a0e5d = _0x26c362.nodeName.toLowerCase() === "svg";
      _0x5c40d2.addTest("canvas", function () {
        var _0x2d06c2 = _0x1ed21e("canvas");
        return !!_0x2d06c2.getContext && !!_0x2d06c2.getContext('2d');
      });
      _0x5c40d2.addTest("canvastext", function () {
        return _0x5c40d2.canvas !== false && typeof _0x1ed21e("canvas").getContext('2d').fillText == "function";
      });
      (function () {
        var _0x2b5591;
        var _0x51f4d5;
        var _0x5b08a9;
        var _0x2f3b06;
        var _0x453109;
        var _0x24700e;
        var _0x454a97;
        for (var _0xda4058 in _0x2db7e1) {
          if (_0x2db7e1.hasOwnProperty(_0xda4058)) {
            _0x2b5591 = [];
            _0x51f4d5 = _0x2db7e1[_0xda4058];
            if (_0x51f4d5.name && (_0x2b5591.push(_0x51f4d5.name.toLowerCase()), _0x51f4d5.options && _0x51f4d5.options.aliases && _0x51f4d5.options.aliases.length)) {
              for (_0x5b08a9 = 0x0; _0x5b08a9 < _0x51f4d5.options.aliases.length; _0x5b08a9++) {
                _0x2b5591.push(_0x51f4d5.options.aliases[_0x5b08a9].toLowerCase());
              }
            }
            _0x2f3b06 = (_0x51f4d5.fn === _0x194f30 ? "undefined" : _typeof(_0x51f4d5.fn)) === "function" ? _0x51f4d5.fn() : _0x51f4d5.fn;
            _0x453109 = 0x0;
            for (; _0x453109 < _0x2b5591.length; _0x453109++) {
              _0x24700e = _0x2b5591[_0x453109];
              _0x454a97 = _0x24700e.split('.');
              if (_0x454a97.length === 0x1) {
                _0x5c40d2[_0x454a97[0x0]] = _0x2f3b06;
              } else {
                if (!!_0x5c40d2[_0x454a97[0x0]] && !(_0x5c40d2[_0x454a97[0x0]] instanceof Boolean)) {
                  _0x5c40d2[_0x454a97[0x0]] = new Boolean(_0x5c40d2[_0x454a97[0x0]]);
                }
                _0x5c40d2[_0x454a97[0x0]][_0x454a97[0x1]] = _0x2f3b06;
              }
              _0x35ca47.push((_0x2f3b06 ? '' : "no-") + _0x454a97.join('-'));
            }
          }
        }
      })();
      (function (_0x4d59fc) {
        var _0x22794f = _0x26c362.className;
        var _0xbcd2a7 = _0x5c40d2._config.classPrefix || '';
        if (_0x5a0e5d) {
          _0x22794f = _0x22794f.baseVal;
        }
        if (_0x5c40d2._config.enableJSClass) {
          var _0x2db66c = new RegExp("(^|\\s)" + _0xbcd2a7 + "no-js(\\s|$)");
          _0x22794f = _0x22794f.replace(_0x2db66c, '$1' + _0xbcd2a7 + 'js$2');
        }
        if (_0x5c40d2._config.enableClasses) {
          _0x22794f += " " + _0xbcd2a7 + _0x4d59fc.join(" " + _0xbcd2a7);
          if (_0x5a0e5d) {
            _0x26c362.className.baseVal = _0x22794f;
          } else {
            _0x26c362.className = _0x22794f;
          }
        }
      })(_0x35ca47);
      delete _0x47397b.addTest;
      delete _0x47397b.addAsyncTest;
      for (var _0x5e4cfc = 0x0; _0x5e4cfc < _0x5c40d2._q.length; _0x5e4cfc++) {
        _0x5c40d2._q[_0x5e4cfc]();
      }
      _0x27440b.Modernizr = _0x5c40d2;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function _0x1dc1f8(_0x290994, _0x1261d0, _0x11aafc) {
    const _0x20a4fe = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
    const _0x1b29b2 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let _0x3478ec = _0x20a4fe[_0x1261d0] - parseInt((_0x11aafc == 0.99 ? 0x1 : _0x11aafc) * _0x20a4fe[_0x1261d0] / 0x1);
    const _0x2fbeb8 = new PIXI.TextStyle({
      'align': "center",
      'fill': _0x1b29b2[_0x1261d0],
      'fontSize': 0x19,
      'lineJoin': "round",
      'whiteSpace': 'normal',
      'wordWrap': true,
      'dropShadow': true,
      'dropShadowBlur': 0x6,
      'fontFamily': "wormup",
      'fontWeight': "bold"
    });
    let _0xeffabd = "pwr_clock" + _0x1261d0;
    if (!pwrups[_0xeffabd] && _0x20a4fe[_0x1261d0] === _0x3478ec) {
      pwrups[_0xeffabd] = new PIXI.Text(_0x3478ec, _0x2fbeb8);
      pwrups[_0xeffabd].y = 0x3d;
      _0x290994.Tf[_0x1261d0].addChild(pwrups[_0xeffabd]);
    }
    if (pwrups[_0xeffabd]) {
      pwrups[_0xeffabd].x = _0x3478ec >= 0x64 ? 0xb : _0x3478ec >= 0xa ? 0x12 : 0x1a;
      pwrups[_0xeffabd].text = _0x3478ec;
      if (_0x3478ec === 0x0) {
        delete pwrups[_0xeffabd];
      }
    }
  }
  document.getElementById('game-wrap').style.display = 'block';
  if (!_0x464864()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function _0x2805ff(_0x13e9ee) {
      const _0xd6214d = _0x13e9ee + '=';
      const _0x164af4 = document.cookie.split(';');
      for (let _0x19f73f = 0x0; _0x19f73f < _0x164af4.length; _0x19f73f++) {
        let _0x2ac9a4 = _0x164af4[_0x19f73f];
        while (_0x2ac9a4.charAt(0x0) === " ") {
          _0x2ac9a4 = _0x2ac9a4.substring(0x1);
        }
        if (_0x2ac9a4.indexOf(_0xd6214d) === 0x0) {
          return _0x2ac9a4.substring(_0xd6214d.length, _0x2ac9a4.length);
        }
      }
      return '';
    }
    function _0x7adae5(_0x1510f6, _0x6d4847, _0x551d53) {
      var _0x1327a1 = new Date();
      _0x1327a1.setTime(_0x1327a1.getTime() + _0x551d53 * 0x5265c00);
      var _0xea7fd = "expires=" + _0x1327a1.toUTCString();
      document.cookie = _0x1510f6 + '=' + _0x6d4847 + "; " + _0xea7fd + "; path=/";
    }
    function _0x536e03(_0x237251) {
      if (!window.I18N_MESSAGES) {
        window.I18N_MESSAGES = {};
      }
      return window.I18N_MESSAGES[_0x237251] || _0x237251;
    }
    function _0x8e03eb(_0x4ac6d0) {
      if (!_0x4ac6d0) {
        return '';
      }
      if (typeof _0x409b3e !== "undefined" && _0x4ac6d0[_0x409b3e]) {
        return _0x4ac6d0[_0x409b3e];
      }
      if (_0x4ac6d0.en) {
        return _0x4ac6d0.en;
      }
      if (_0x4ac6d0.x) {
        return _0x4ac6d0.x;
      }
      if (typeof _0x4ac6d0 === "string") {
        return _0x4ac6d0;
      }
      return '';
    }
    function _0x25f7f3(_0x18eec5) {
      var _0x11be24 = (Math.floor(_0x18eec5) % 0x3c).toString();
      var _0x207a05 = (Math.floor(_0x18eec5 / 0x3c) % 0x3c).toString();
      var _0x2239de = (Math.floor(_0x18eec5 / 0xe10) % 0x18).toString();
      var _0x56dc61 = Math.floor(_0x18eec5 / 0x15180).toString();
      var _0x54473f = _0x536e03("util.time.days");
      var _0x1d26fd = _0x536e03("util.time.hours");
      var _0x4d531f = _0x536e03('util.time.min');
      var _0x2738d6 = _0x536e03("util.time.sec");
      if (_0x56dc61 > 0x0) {
        return _0x56dc61 + " " + _0x54473f + " " + _0x2239de + " " + _0x1d26fd + " " + _0x207a05 + " " + _0x4d531f + " " + _0x11be24 + " " + _0x2738d6;
      } else {
        if (_0x2239de > 0x0) {
          return _0x2239de + " " + _0x1d26fd + " " + _0x207a05 + " " + _0x4d531f + " " + _0x11be24 + " " + _0x2738d6;
        } else {
          return _0x207a05 > 0x0 ? _0x207a05 + " " + _0x4d531f + " " + _0x11be24 + " " + _0x2738d6 : _0x11be24 + " " + _0x2738d6;
        }
      }
    }
    function _0x55a237(_0x3de39d, _0x1ebe3e, _0x3de215) {
      var _0x387d59 = document.createElement("script");
      var _0x515f54 = true;
      if (_0x1ebe3e) {
        _0x387d59.id = _0x1ebe3e;
      }
      _0x387d59.async = "async";
      _0x387d59.type = "text/javascript";
      _0x387d59.src = _0x3de39d;
      if (_0x3de215) {
        _0x387d59.onload = _0x387d59.onreadystatechange = function () {
          _0x515f54 = false;
          try {
            _0x3de215();
          } catch (_0x4f1f6c) {
            console.log(_0x4f1f6c);
          }
          _0x387d59.onload = _0x387d59.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName('head')[0x0]).appendChild(_0x387d59);
    }
    function _0x122e71(_0xabeeec, _0x362235) {
      var _0x362235 = _0x362235;
      _0x362235.prototype = Object.create(_0xabeeec.prototype);
      _0x362235.prototype.constructor = _0x362235;
      _0x362235.parent = _0xabeeec;
      return _0x362235;
    }
    function _0x5c6d2c(_0x5155ea) {
      _0x5155ea %= _0x2e6b3b;
      return _0x5155ea < 0x0 ? _0x5155ea + _0x2e6b3b : _0x5155ea;
    }
    function _0x18f3c0(_0x417aec, _0x58da81, _0x1a0b1e) {
      if (_0x417aec > _0x1a0b1e) {
        return _0x1a0b1e;
      } else {
        if (_0x417aec < _0x58da81) {
          return _0x58da81;
        } else {
          return Number.isFinite(_0x417aec) ? _0x417aec : (_0x58da81 + _0x1a0b1e) * 0.5;
        }
      }
    }
    function _0xa0106a(_0x20c8a6, _0xa36000, _0x2b52e6, _0x5c9201) {
      var _0x1b53f2 = _0xa36000 + _0x5c9201;
      if (_0x20c8a6 == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x36dbb9 = _0x20c8a6.length >>> 0x0;
      var _0x1f7573 = _0x2b52e6 >> 0x0;
      var _0x26cac4 = _0x1f7573 < 0x0 ? Math.max(_0x36dbb9 + _0x1f7573, 0x0) : Math.min(_0x1f7573, _0x36dbb9);
      var _0x4b96e9 = _0xa36000 >> 0x0;
      var _0x1a652d = _0x4b96e9 < 0x0 ? Math.max(_0x36dbb9 + _0x4b96e9, 0x0) : Math.min(_0x4b96e9, _0x36dbb9);
      var _0x506ff8 = _0x1b53f2 === undefined ? _0x36dbb9 : _0x1b53f2 >> 0x0;
      var _0x3931f6 = _0x506ff8 < 0x0 ? Math.max(_0x36dbb9 + _0x506ff8, 0x0) : Math.min(_0x506ff8, _0x36dbb9);
      var _0x46d276 = Math.min(_0x3931f6 - _0x1a652d, _0x36dbb9 - _0x26cac4);
      var _0x3e39d2 = 0x1;
      for (_0x1a652d < _0x26cac4 && _0x26cac4 < _0x1a652d + _0x46d276 && (_0x3e39d2 = -0x1, _0x1a652d += _0x46d276 - 0x1, _0x26cac4 += _0x46d276 - 0x1); _0x46d276 > 0x0;) {
        if (_0x1a652d in _0x20c8a6) {
          _0x20c8a6[_0x26cac4] = _0x20c8a6[_0x1a652d];
        } else {
          delete _0x20c8a6[_0x26cac4];
        }
        _0x1a652d += _0x3e39d2;
        _0x26cac4 += _0x3e39d2;
        _0x46d276--;
      }
      return _0x20c8a6;
    }
    function _0x236c87(_0x1ddfb4) {
      if (_0x1ddfb4.parent != null) {
        _0x1ddfb4.parent.removeChild(_0x1ddfb4);
      }
    }
    function _0x1987ba(_0x210c3f, _0x154ae6, _0x66a93e) {
      var _0x2f11ab = (0x1 - Math.abs(_0x66a93e * 0x2 - 0x1)) * _0x154ae6;
      var _0x5eef52 = _0x2f11ab * (0x1 - Math.abs(_0x210c3f / 0x3c % 0x2 - 0x1));
      var _0x122878 = _0x66a93e - _0x2f11ab / 0x2;
      if (_0x210c3f >= 0x0 && _0x210c3f < 0x3c) {
        return [_0x122878 + _0x2f11ab, _0x122878 + _0x5eef52, _0x122878 + 0x0];
      } else {
        if (_0x210c3f >= 0x3c && _0x210c3f < 0x78) {
          return [_0x122878 + _0x5eef52, _0x122878 + _0x2f11ab, _0x122878 + 0x0];
        } else {
          if (_0x210c3f >= 0x78 && _0x210c3f < 0xb4) {
            return [_0x122878 + 0x0, _0x122878 + _0x2f11ab, _0x122878 + _0x5eef52];
          } else {
            if (_0x210c3f >= 0xb4 && _0x210c3f < 0xf0) {
              return [_0x122878 + 0x0, _0x122878 + _0x5eef52, _0x122878 + _0x2f11ab];
            } else {
              return _0x210c3f >= 0xf0 && _0x210c3f < 0x12c ? [_0x122878 + _0x5eef52, _0x122878 + 0x0, _0x122878 + _0x2f11ab] : [_0x122878 + _0x2f11ab, _0x122878 + 0x0, _0x122878 + _0x5eef52];
            }
          }
        }
      }
    }
    function _0x4bd5b4() {
      function _0x1def8b() {
        $("#adbl-1").text(_0x536e03("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(_0x536e03("index.game.antiadblocker.msg2"));
        $('#adbl-3').text(_0x536e03("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(_0x536e03("index.game.antiadblocker.msg4").replace("{0}", 0xa));
        $("#adbl-continue span").text(_0x536e03("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0xc224e1 = 0x5;
        for (var _0xc224e1 = 0x0; _0xc224e1 < 0x5; _0xc224e1++) {
          setTimeout(function () {
            _0xc224e1--;
            $("#adbl-4").text(_0x536e03("index.game.antiadblocker.msg4").replace("{0}", _0xc224e1));
            if (_0xc224e1 === 0x0) {
              try {
                ga('send', 'event', "antiadblocker", window.runtimeHash + '_complete');
              } catch (_0xb56942) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, (_0xc224e1 + 0x1) * 0x3e8);
        }
      }
      var _0x9ccacc = false;
      function _0x3ecc49() {}
      var _0x5442dd = {};
      $("#adbl-continue").click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0x3ecc49(false);
      });
      _0x5442dd.a = function (_0x45e254) {
        _0x3ecc49 = _0x45e254;
        if (!_0x9ccacc) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                'AIP_COMPLETE': function (_0x3991ba) {
                  console.log("aipC");
                  _0x3ecc49(true);
                  $('#1eaom01c3pxu9wd3').hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (_0x2fc52a) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0x9ccacc = true;
          } catch (_0x3e0e29) {}
        }
      };
      _0x5442dd.b = function () {
        if (aiptag.adplayer !== undefined) {
          try {
            ga('send', "event", 'preroll', window.runtimeHash + "_request");
          } catch (_0x9a1a53) {}
          _0x1def8b();
        } else {
          try {
            ga("send", "event", 'antiadblocker', window.runtimeHash + '_start');
          } catch (_0x3faa18) {}
          _0x1def8b();
        }
      };
      return _0x5442dd;
    }
    function _0x3c7431(_0xe2ede4, _0x5dc257) {
      var _0x48eef2 = $('#' + _0xe2ede4);
      var _0x24dcd3 = {};
      var _0x2b91b7 = false;
      _0x24dcd3.a = function () {
        if (!_0x2b91b7) {
          _0x48eef2.empty();
          _0x48eef2.append("<div id='" + _0x5dc257 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + '_display');
            } catch (_0x333b79) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x5dc257);
            });
            _0x2b91b7 = true;
          } catch (_0x517d0a) {}
        }
      };
      _0x24dcd3.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (_0x29303b) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x5dc257);
          });
        } catch (_0x425b54) {}
      };
      return _0x24dcd3;
    }
    function _0x5cf4ca() {
      function _0x18fdb9(_0x348c10) {
        var _0x3b36c0 = _0x348c10 + Math.floor(Math.random() * 0xffff) * 0x25;
        _0x7adae5(_0x2b84ef.d, _0x3b36c0, 0x1e);
      }
      return function () {
        var _0x17923f = parseInt(_0x2805ff(_0x2b84ef.d)) % 0x25;
        if (!(_0x17923f >= 0x0) || !(_0x17923f < _0x14dea3.e)) {
          _0x17923f = Math.max(0x0, _0x14dea3.e - 0x2);
          console.log("init2 pSC: " + _0x17923f);
        }
        var _0x291656 = {};
        _0x1113af = _0x291656;
        _0x291656.f = _0x14dea3;
        _0x291656.g = false;
        _0x291656.i = Date.now();
        _0x291656.j = 0x0;
        _0x291656.k = 0x0;
        _0x291656.l = null;
        _0x291656.m = _0x5c492d;
        _0x291656.n = _0x409b3e;
        _0x291656.o = null;
        _0x291656.p = null;
        _0x291656.q = null;
        _0x291656.r = null;
        _0x291656.s = null;
        _0x291656.t = null;
        _0x291656.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x48fb59) {
              if (_0x48fb59.coords !== undefined) {
                var _0x3127fa = _0x48fb59.coords;
                if (_0x3127fa.latitude !== undefined && _0x3127fa.longitude !== undefined) {
                  _0x291656.l = _0x48fb59;
                }
              }
            }, function (_0x21d7cf) {});
          }
        } catch (_0x211e02) {}
        _0x291656.v = function () {
          _0x291656.p = new _0x1d3f61();
          _0x291656.q = new _0x8a356c();
          _0x291656.r = new _0x18ec17();
          _0x291656.s = new _0x67be0c();
          _0x291656.t = new _0x11ab3e();
          _0x291656.u = new _0x56094a();
          _0x291656.o = new _0x3d1355();
          _0x291656.o.z = new _0x2f3e0b(_0x291656.o);
          _0x291656.a();
        };
        _0x291656.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x54bc59) {}
          _0x291656.o.A = function () {
            _0x291656.o.B();
          };
          _0x291656.o.C = function () {
            var _0x5da58d = _0x291656.s.F.D();
            try {
              ga('send', 'event', "game", window.runtimeHash + "_start", _0x5da58d);
            } catch (_0x2c8c34) {}
            _0x291656.r.G(_0x18ec17.AudioState.H);
            _0x291656.s.I(_0x291656.s.H.J());
          };
          _0x291656.o.B = function () {
            try {
              ga("send", "event", 'game', window.runtimeHash + "_end");
            } catch (_0x4cf3d5) {}
            if ($('body').height() >= 0x1ae) {
              _0x291656.f.K.c();
            }
            _0x291656.p.L();
            (function () {
              var _0x8a1cd3 = Math.floor(_0x291656.o.N.M);
              var _0x1e89b4 = _0x291656.o.O;
              if (_0x291656.u.P()) {
                _0x291656.u.Q(function () {
                  _0x291656.R(_0x8a1cd3, _0x1e89b4);
                });
              } else {
                _0x291656.R(_0x8a1cd3, _0x1e89b4);
              }
            })();
          };
          _0x291656.o.S = function (_0x565e8e) {
            _0x565e8e(_0x291656.s.H.T(), _0x291656.s.H.U());
          };
          _0x291656.u.V(function () {
            if (_0x291656.p.W) {
              _0x291656.r.G(_0x18ec17.AudioState.F);
              _0x291656.s.I(_0x291656.s.F);
            }
            if (_0x291656.u.P()) {
              try {
                var _0x3ce0a8 = _0x291656.u.X();
                ga("set", 'userId', _0x3ce0a8);
              } catch (_0x1fe048) {}
            }
            if (_0x291656.Y() && _0x291656.u.P() && !_0x291656.u.Z()) {
              _0x291656.$(false, false);
              _0x291656.s.aa._(new _0x548d62());
            } else {
              _0x291656.ba(true);
            }
          });
          _0x291656.p.ca(function () {
            _0x291656.r.G(_0x18ec17.AudioState.F);
            _0x291656.s.I(_0x291656.s.F);
          });
          _0x291656.q.a(function () {
            _0x291656.o.a();
            _0x291656.r.a();
            _0x291656.s.a();
            _0x291656.t.a();
            _0x291656.p.a();
            _0x291656.u.a();
            if (_0x291656.Y() && !_0x291656.Z()) {
              _0x291656.s.aa._(new _0x548d62());
            } else {
              _0x291656.ba(true);
            }
          });
        };
        _0x291656.da = function (_0x1843eb) {
          if (_0x291656.u.P()) {
            var _0x337a55 = _0x291656.u.ea();
            $.get("https://gateway.wormate.io/pub/wuid/" + _0x337a55 + '/consent/change?value=' + encodeURI(_0x1843eb), function (_0x1a315f) {});
          }
        };
        _0x291656.fa = function (_0x2bebcf) {
          var _0x41d025 = _0x291656.u.ea();
          var _0x20752a = _0x291656.s.F.D();
          var _0x24666a = _0x291656.s.F.ga();
          var _0x5dfc9f = _0x291656.t.ha(_0x4311a3.ia);
          var _0x269217 = _0x291656.t.ha(_0x4311a3.ja);
          var _0x275a9f = _0x291656.t.ha(_0x4311a3.ka);
          var _0x200a20 = _0x291656.t.ha(_0x4311a3.la);
          var _0x2a3470 = _0x291656.t.ha(_0x4311a3.ma);
          var _0x3d9445 = 0x0;
          if (_0x291656.l != null) {
            var _0x47cedf = _0x291656.l.coords.latitude;
            var _0x125b34 = _0x291656.l.coords.longitude;
            _0x3d9445 = Math.max(0x0, Math.min(0x7fff, (_0x47cedf + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | Math.max(0x0, Math.min(0xffff, (_0x125b34 + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          _wormup.testSkinCustom(_0x5dfc9f);
          let _0x5bf150 = 'U_' + (_0x5dfc9f > 0x270f ? '0000' : _0x5dfc9f.toString().padStart(0x4, 0x0)) + (_0x2a3470 > 0x3e7 ? "000" : _0x2a3470.toString().padStart(0x3, 0x0)) + (_0x269217 > 0x3e7 ? "000" : _0x269217.toString().padStart(0x3, 0x0)) + (_0x275a9f > 0x3e7 ? "000" : _0x275a9f.toString().padStart(0x3, 0x0));
          _0x24666a = (_0x24666a.length >= 0x20 ? _0x24666a.substr(0x0, 0x10) : _0x24666a.substr(0x0, 0x10).padEnd(0x10, '_')) + _0x5bf150;
          _0x24666a = _0x24666a.trim();
          var _0x24b17f = "https://gateway.wormate.io/pub/wuid/" + _0x41d025 + "/start?gameMode=" + encodeURI(_0x20752a) + "&gh=" + _0x3d9445 + "&nickname=" + encodeURI(_0x24666a) + "&skinId=" + _wormup.validInput(_0x5dfc9f) + "&eyesId=" + encodeURI(_0x269217) + "&mouthId=" + encodeURI(_0x275a9f) + "&glassesId=" + encodeURI(_0x200a20) + '&hatId=' + encodeURI(_0x2a3470);
          $.get(_0x24b17f, function (_0x52c42d) {
            var _0x4848c4 = _0x52c42d.server_url;
            _0x2bebcf(_0x4848c4);
          });
        };
        _0x291656.na = function () {
          _0x17923f++;
          if (!_0x291656.f.oa && _0x17923f >= _0x291656.f.e) {
            _0x291656.s.I(_0x291656.s.pa);
            _0x291656.r.G(_0x18ec17.AudioState.qa);
            _0x291656.f.ra.b();
          } else {
            _0x18fdb9(_0x17923f);
            _0x291656.sa();
          }
        };
        _0x291656.sa = function (_0x2f53d9) {
          if (_0x291656.o.ta()) {
            _0x291656.s.I(_0x291656.s.ua);
            _0x291656.r.G(_0x18ec17.AudioState.ua);
            var _0x567a57 = _0x291656.s.F.D();
            _0x7adae5(_0x2b84ef.va, _0x567a57, 0x1e);
            var _0x4fb35d = _0x291656.s.xa.wa();
            _0x7adae5(_0x2b84ef.ya, _0x4fb35d, 0x1e);
            if (_0x291656.u.P()) {
              _0x291656.fa(function (_0x590049) {
                hoisinhnhanh = _0x2f53d9 ? _0x2f53d9 : _0x590049;
                _0x291656.o.za(window.server_url || _0x590049, _0x291656.u.ea());
              });
            } else {
              var _0x4f94aa = _0x291656.s.F.ga();
              _0x7adae5(_0x2b84ef.Aa, _0x4f94aa, 0x1e);
              var _0x4ef953 = _0x291656.t.ha(_0x4311a3.ia);
              _0x7adae5(_0x2b84ef.Ba, _0x4ef953, 0x1e);
              _0x291656.fa(function (_0x1cbc9a) {
                hoisinhnhanh = _0x2f53d9 ? _0x2f53d9 : _0x1cbc9a;
                _0x291656.o.Ca(_0x1cbc9a, _0x4f94aa, _0x4ef953);
              });
            }
          }
        };
        _0x291656.R = function (_0x344a48, _0x5effd6) {
          var _0x428a59 = _0x291656.s.F.ga();
          _0x291656.s.H.Da(_0x344a48, _0x5effd6, _0x428a59);
          _0x291656.r.G(_0x18ec17.AudioState.Ea);
          _0x291656.s.I(_0x291656.s.H.Fa());
        };
        _0x291656.Ga = function () {
          if (!_0x291656.Ha()) {
            return _0x291656.t.Ia();
          }
          var _0x381e9a = parseInt(_0x2805ff(_0x2b84ef.Ba));
          return _0x381e9a != null && _0x291656.t.Ja(_0x381e9a, _0x4311a3.ia) ? _0x381e9a : _0x291656.t.Ia();
        };
        _0x291656.Ka = function (_0x2ac06f) {
          _0x7adae5(_0x2b84ef.La, !!_0x2ac06f, 0x708);
        };
        _0x291656.Ha = function () {
          return _0x2805ff(_0x2b84ef.La) === "true";
        };
        _0x291656.ba = function (_0x5534ae) {
          if (_0x5534ae != _0x291656.g) {
            _0x291656.g = _0x5534ae;
            var _0x499603 = _0x499603 || {};
            _0x499603.consented = _0x5534ae;
            _0x499603.gdprConsent = _0x5534ae;
            _0x291656.f.Ma.a();
            _0x291656.f.K.a();
            _0x291656.f.ra.a(function (_0x29a063) {
              if (_0x29a063) {
                _0x18fdb9(_0x17923f = 0x0);
              }
              _0x291656.sa();
            });
          }
        };
        _0x291656.$ = function (_0x3749c6, _0x1c0268) {
          _0x7adae5(_0x2b84ef.Na, _0x3749c6 ? "true" : 'false');
          if (_0x1c0268) {
            _0x291656.da(_0x3749c6);
          }
          _0x291656.ba(_0x3749c6);
        };
        _0x291656.Z = function () {
          switch (_0x2805ff(_0x2b84ef.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x291656.Y = function () {
          try {
            return !!window.isIPInEEA || _0x291656.l != null && !!_0x4a0d4d.Oa(_0x291656.l.coords.latitude, _0x291656.l.coords.longitude);
          } catch (_0x46cb8b) {
            return true;
          }
        };
        _0x291656.Pa = function () {
          _0x291656.j = Date.now();
          _0x291656.k = _0x291656.j - _0x291656.i;
          _0x291656.o.Qa(_0x291656.j, _0x291656.k);
          _0x291656.s.Qa(_0x291656.j, _0x291656.k);
          _0x291656.i = _0x291656.j;
        };
        _0x291656.Ra = function () {
          _0x291656.s.Ra();
        };
        return _0x291656;
      }();
    }
    function _0x3d1355() {
      var _0xb4fe39 = {
        'Wa': 0x1e,
        'Xa': new Float32Array(0x64),
        'Ya': 0x0,
        'Za': 0x0,
        '$a': 0x0,
        '_a': 0x0,
        'ab': 0x0,
        'bb': 0x0,
        'cb': 0x0,
        'db': null,
        'eb': 0x12c,
        'C': function () {},
        'B': function () {},
        'S': function () {},
        'A': function () {},
        'fb': new _0x2ef9fb(),
        'z': null,
        'N': null,
        'gb': {},
        'hb': {},
        'ib': 12.5,
        'jb': 0x28,
        'kb': 0x1,
        'lb': -0x1,
        'mb': 0x1,
        'nb': 0x1,
        'ob': -0x1,
        'pb': -0x1,
        'qb': 0x1,
        'rb': 0x1,
        'sb': -0x1,
        'O': 0x1f4,
        'tb': 0x1f4
      };
      _0xb4fe39.fb.ub = 0x1f4;
      _0xb4fe39.N = new _0x5e4879(_0xb4fe39.fb);
      _0xb4fe39.a = function () {
        null.vb((window.anApp = _0x1113af).s.H.wb);
        setInterval(function () {
          _0xb4fe39.S(function (_0x1fe344, _0x49daa7) {
            _0xb4fe39.xb(_0x1fe344, _0x49daa7);
          });
        }, 0xa);
      };
      _0xb4fe39.yb = function (_0x2edfa5, _0x548544, _0x53e470, _0x2cf384) {
        _0xb4fe39.lb = _0x2edfa5;
        _0xb4fe39.mb = _0x548544;
        _0xb4fe39.nb = _0x53e470;
        _0xb4fe39.ob = _0x2cf384;
        _0xb4fe39.zb();
      };
      _0xb4fe39.Ab = function (_0x525fde) {
        _0xb4fe39.kb = _0x525fde;
        _0xb4fe39.zb();
      };
      _0xb4fe39.zb = function () {
        _0xb4fe39.pb = _0xb4fe39.lb - 0x1;
        _0xb4fe39.qb = 2;
        _0xb4fe39.rb = 0;
        _0xb4fe39.sb = _0xb4fe39.ob + 0x1;
      };
      _0xb4fe39.Qa = function (_0x478659, _0x57562f) {
        _0xb4fe39.$a += _0x57562f;
        _0xb4fe39.Za -= 0 * _0x57562f;
        null.Bb();
        if (false && (false || false)) {
          _0xb4fe39.Cb(_0x478659, _0x57562f);
          _0xb4fe39.jb = 0x4 + 12.5 * null.Db;
        }
        var _0x412a69 = 0x3e8 / Math.max(0x1, _0x57562f);
        var _0x1f43a3 = 0x0;
        var _0x3c9b8a = 0x0;
        for (; _0x3c9b8a < _0xb4fe39.Xa.length - 0x1; _0x3c9b8a++) {
          _0x1f43a3 = _0x1f43a3 + _0xb4fe39.Xa[_0x3c9b8a];
          _0xb4fe39.Xa[_0x3c9b8a] = _0xb4fe39.Xa[_0x3c9b8a + 0x1];
        }
        _0xb4fe39.Xa[_0xb4fe39.Xa.length - 0x1] = _0x412a69;
        _0xb4fe39.Wa = (_0x1f43a3 + _0x412a69) / _0xb4fe39.Xa.length;
      };
      _0xb4fe39.Eb = function (_0x58a5f4, _0x413439) {
        return _0x58a5f4 > _0xb4fe39.pb && _0x58a5f4 < 0x1 && _0x413439 > 0x1 && _0x413439 < _0xb4fe39.sb;
      };
      _0xb4fe39.Cb = function (_0x1b6ffc, _0x293e28) {
        var _0xf16c60 = -NaN;
        null.Fb(_0x1b6ffc, _0x293e28);
        null.Gb(_0x1b6ffc, _0x293e28, _0xf16c60, _0xb4fe39.Eb);
        var _0x43b255 = 0x0;
        var _0x267cae;
        for (_0x267cae in _0xb4fe39.hb) {
          var _0x4b1d70 = _0xb4fe39.hb[_0x267cae];
          _0x4b1d70.Fb(_0x1b6ffc, _0x293e28);
          _0x4b1d70.Gb(_0x1b6ffc, _0x293e28, _0xf16c60, _0xb4fe39.Eb);
          if (_0x4b1d70.Hb && _0x4b1d70.Db > _0x43b255) {
            _0x43b255 = _0x4b1d70.Db;
          }
          if (!_0x4b1d70.Ib && (!!(_0x4b1d70.Jb < 0.005) || !_0x4b1d70.Hb)) {
            _0x4b1d70.Kb();
            delete _0xb4fe39.hb[_0x4b1d70.Mb.Lb];
          }
        }
        _0xb4fe39.Ab(_0x43b255 * 0x3);
        var _0x4684e3;
        for (_0x4684e3 in _0xb4fe39.gb) {
          var _0x292559 = _0xb4fe39.gb[_0x4684e3];
          _0x292559.Fb(_0x1b6ffc, _0x293e28);
          _0x292559.Gb(_0x1b6ffc, _0x293e28, _0xb4fe39.Eb);
          if (_0x292559.Nb && (_0x292559.Jb < 0.005 || !_0xb4fe39.Eb(_0x292559.Ob, _0x292559.Pb))) {
            _0x292559.Kb();
            delete _0xb4fe39.gb[_0x292559.Mb.Lb];
          }
        }
      };
      _0xb4fe39.Qb = function (_0x26619d, _0x2f8fd5) {
        var _0x186eae = (window.anApp = _0x1113af).j;
        _0xb4fe39.bb = _0x26619d;
        if (_0x26619d === 0x0) {
          _0xb4fe39._a = _0x186eae - 0x5f;
          _0xb4fe39.ab = _0x186eae;
          _0xb4fe39.$a = 0x0;
          _0xb4fe39.Za = 0x0;
        } else {
          _0xb4fe39._a = 0x0;
          _0xb4fe39.ab = 0x0 + _0x2f8fd5;
        }
        _0xb4fe39.Ya = -NaN;
      };
      _0xb4fe39.Rb = function () {
        if (false || false) {
          _0xb4fe39.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0xb4fe39.db = null;
            }
          }, 0x1388);
          _0xb4fe39.B();
        }
      };
      _0xb4fe39.ta = function () {
        return true && (_0xb4fe39.cb = 0x1, null.Sb(), _0xb4fe39.gb = {}, _0xb4fe39.hb = {}, null.Tb(), false && (null.close(), _0xb4fe39.db = null), true);
      };
      _0xb4fe39.Ub = function () {
        _0xb4fe39.db = null;
        null.Sb();
        _0xb4fe39.A();
        _0xb4fe39.cb = 0x0;
      };
      _0xb4fe39.za = function (_0x5cc821, _0x23ce4a) {
        _0xb4fe39.Vb(_0x5cc821, function () {
          var _0x55f6c3 = Math.min(0x800, _0x23ce4a.length);
          var _0x4babac = new ArrayBuffer(0x6 + _0x55f6c3 * 0x2);
          var _0x576bf0 = new DataView(_0x4babac);
          var _0x9f325b = 0x0;
          _0x576bf0.setInt8(_0x9f325b, 0x81);
          _0x9f325b = _0x9f325b + 0x1;
          _0x576bf0.setInt16(_0x9f325b, 0xaf0);
          _0x9f325b = _0x9f325b + 0x2;
          _0x576bf0.setInt8(_0x9f325b, 0x1);
          _0x9f325b = _0x9f325b + 0x1;
          _0x576bf0.setInt16(_0x9f325b, _0x55f6c3);
          _0x9f325b = _0x9f325b + 0x2;
          var _0x33b879 = 0x0;
          for (; _0x33b879 < _0x55f6c3; _0x33b879++) {
            _0x576bf0.setInt16(_0x9f325b, _0x23ce4a.charCodeAt(_0x33b879));
            _0x9f325b = _0x9f325b + 0x2;
          }
          _0xb4fe39.Wb(_0x4babac);
        });
      };
      _0xb4fe39.Ca = function (_0x116a7f, _0xb3a4f0, _0x47650f) {
        _0xb4fe39.Vb(_0x116a7f, function () {
          var _0x1fc750 = Math.min(0x20, _0xb3a4f0.length);
          var _0x31e85b = new ArrayBuffer(0x7 + _0x1fc750 * 0x2);
          var _0xfe8688 = new DataView(_0x31e85b);
          var _0x39f991 = 0x0;
          _0xfe8688.setInt8(_0x39f991, 0x81);
          _0x39f991 = _0x39f991 + 0x1;
          _0xfe8688.setInt16(_0x39f991, 0xaf0);
          _0x39f991 = _0x39f991 + 0x2;
          _0xfe8688.setInt8(_0x39f991, 0x0);
          _0x39f991 = _0x39f991 + 0x1;
          _0xfe8688.setInt16(_0x39f991, _0x47650f);
          _0x39f991 = _0x39f991 + 0x2;
          _0xfe8688.setInt8(_0x39f991, _0x1fc750);
          _0x39f991++;
          var _0xbacc62 = 0x0;
          for (; _0xbacc62 < _0x1fc750; _0xbacc62++) {
            _0xfe8688.setInt16(_0x39f991, _0xb3a4f0.charCodeAt(_0xbacc62));
            _0x39f991 = _0x39f991 + 0x2;
          }
          _0xb4fe39.Wb(_0x31e85b);
        });
      };
      _0xb4fe39.Wb = function (_0x34437d) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x34437d);
          }
        } catch (_0x55caae) {
          console.log("Socket send error: " + _0x55caae);
          _0xb4fe39.Ub();
        }
      };
      _0xb4fe39.xb = function (_0x16acd5, _0x2eb9cb) {
        var _0x59f4e1 = _0x2eb9cb ? 0x80 : 0x0;
        var _0x56b0ea = _0x5c6d2c(_0x16acd5) / _0x2e6b3b * 0x80 & 0x7f;
        var _0x3e37bf = (_0x59f4e1 | _0x56b0ea) & 0xff;
        if (0x12c !== _0x3e37bf) {
          var _0x186277 = new ArrayBuffer(0x1);
          new DataView(_0x186277).setInt8(0x0, _0x3e37bf);
          _0xb4fe39.Wb(_0x186277);
          _0xb4fe39.eb = _0x3e37bf;
        }
      };
      _0xb4fe39.Vb = function (_0x17cbe4, _0x297945) {
        let _0x1c2fe5 = loadJoy(true);
        var _0x18ce8c = _0xb4fe39.db = new WebSocket(_0x17cbe4);
        _0x18ce8c.binaryType = "arraybuffer";
        window.onOpen = _0x18ce8c.onopen = function () {
          _0x51006f("open");
          if (null === _0x18ce8c) {
            _0x297945();
          }
          isPlaying = true;
        };
        window.onclose = _0x18ce8c.onclose = function () {
          _0x51006f("closed");
          _wormup.aload = false;
          if (null === _0x18ce8c) {
            _0xb4fe39.Ub();
          }
          isPlaying = false;
          if (_0x1c2fe5) {
            _0x1c2fe5.destroy();
          }
        };
        _0x18ce8c.onerror = function (_0x50258) {
          if (null === _0x18ce8c) {
            console.log("Socket error");
            _0xb4fe39.Ub();
          }
          isPlaying = false;
          if (_0x1c2fe5) {
            _0x1c2fe5.destroy();
          }
        };
        _0x18ce8c.onmessage = function (_0x2e3ba8) {
          if (null === _0x18ce8c) {
            null.Xb(_0x2e3ba8.data);
          }
        };
      };
      return _0xb4fe39;
    }
    var _0x409b3e = window.I18N_LANG;
    _0x409b3e ||= 'en';
    var _0x5c492d = undefined;
    switch (_0x409b3e) {
      case 'uk':
        _0x5c492d = "uk_UA";
        break;
      case 'de':
        _0x5c492d = "de_DE";
        break;
      case 'fr':
        _0x5c492d = "fr_FR";
        break;
      case 'ru':
        _0x5c492d = "ru_RU";
        break;
      case 'es':
        _0x5c492d = "es_ES";
        break;
      default:
        _0x5c492d = 'en_US';
    }
    moment.locale(_0x5c492d);
    var _0x1113af = undefined;
    var _0x2d9910 = function () {
      var _0xc410d6 = {
        'Yb': eval('PIXI;')
      };
      var _0x530199 = _0xc410d6.Yb.BLEND_MODES;
      var _0x30bc87 = _0xc410d6.Yb.WRAP_MODES;
      return {
        'Zb': _0xc410d6.Yb.Container,
        '$b': _0xc410d6.Yb.BaseTexture,
        '_b': _0xc410d6.Yb.Texture,
        'ac': _0xc410d6.Yb.Renderer,
        'bc': _0xc410d6.Yb.Graphics,
        'cc': _0xc410d6.Yb.Shader,
        'dc': _0xc410d6.Yb.Rectangle,
        'ec': _0xc410d6.Yb.Sprite,
        'fc': _0xc410d6.Yb.Text,
        'gc': _0xc410d6.Yb.Geometry,
        'hc': _0xc410d6.Yb.Mesh,
        'ic': {
          'jc': _0x530199.ADD
        },
        'kc': {
          'lc': _0x30bc87.REPEAT
        }
      };
    }();
    var _0x2e6b3b = Math.PI * 0x2;
    (function () {
      var _0x146c86 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x400946) {
        return this[_0x146c86[0x0]](_0x400946);
      };
      DataView.prototype.nc = function (_0x4ab24e) {
        return this[_0x146c86[0x1]](_0x4ab24e);
      };
      DataView.prototype.oc = function (_0x5d0995) {
        return this[_0x146c86[0x2]](_0x5d0995);
      };
      DataView.prototype.pc = function (_0xd66a44) {
        return this[_0x146c86[0x3]](_0xd66a44);
      };
      DataView.prototype.qc = function (_0x34e5bb) {
        return this[_0x146c86[0x4]](_0x34e5bb);
      };
    })();
    var _0x2a5570 = function () {
      function _0x3dbfc2(_0x5e6f2e) {
        this.rc = _0x5e6f2e;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x3dbfc2.VELOCITY_TYPE = 0x0;
      _0x3dbfc2.FLEXIBLE_TYPE = 0x1;
      _0x3dbfc2.MAGNETIC_TYPE = 0x2;
      _0x3dbfc2.ZOOM_TYPE = 0x6;
      _0x3dbfc2.X2_TYPE = 0x3;
      _0x3dbfc2.X5_TYPE = 0x4;
      _0x3dbfc2.X10_TYPE = 0x5;
      return _0x3dbfc2;
    }();
    var _0x1d3f61 = function () {
      function _0x3209ee() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x51c0fb.yc();
      }
      function _0xa8dad3(_0x246d88, _0x5f70d6) {
        for (var _0x4ee0a2 in _0x246d88) {
          if (_0x246d88.hasOwnProperty(_0x4ee0a2)) {
            _0x5f70d6(_0x4ee0a2, _0x246d88[_0x4ee0a2]);
          }
        }
      }
      _0x3209ee.prototype.a = function () {
        this.L();
      };
      _0x3209ee.prototype.W = function () {
        return this.wc != null;
      };
      _0x3209ee.prototype.zc = function () {
        return this.wc != null ? this.wc.revision : -0x1;
      };
      _0x3209ee.prototype.Ac = function () {
        return this.wc;
      };
      _0x3209ee.prototype.L = function () {
        var _0x3a7363 = this;
        $.get("https://resources.wormate.io/dynamic/assets/revision.json", function (_0x400b32) {
          if (_0x400b32 > _0x3a7363.zc()) {
            _0x3a7363.Bc();
          }
        });
      };
      _0x3209ee.prototype.Bc = function () {
        var _0x4e1742 = this;
        $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x44b46e) {
          if (_0x44b46e.revision > _0x4e1742.zc()) {
            _0x4e1742.Cc(_0x44b46e);
          }
        });
      };
      _0x3209ee.prototype.ca = function (_0x310270) {
        this.uc.push(_0x310270);
      };
      _0x3209ee.prototype.Dc = function () {
        return this.xc;
      };
      _0x3209ee.prototype.Ec = function () {
        for (var _0x3c84c1 = 0x0; _0x3c84c1 < this.uc.length; _0x3c84c1++) {
          this.uc[_0x3c84c1]();
        }
      };
      _0x3209ee.prototype.Fc = function (_0x5c88e7, _0x215c35) {
        if (!(_0x5c88e7.revision <= this.zc())) {
          _0xa8dad3(this.vc, function (_0x80997e, _0x1f411d) {
            var _0x389f56 = _0x215c35[_0x80997e];
            if (_0x389f56 == null || _0x1f411d.Gc !== _0x389f56.Gc) {
              print("disposing prev texture: " + _0x80997e + " at " + _0x1f411d.Gc);
              _0x1f411d.Hc.destroy();
            }
          });
          this.vc = _0x215c35;
          this.wc = _0x5c88e7;
          this.xc = _0x51c0fb.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x3209ee.prototype.Cc = function (_0x4855ee) {
        var _0x228e35 = {};
        var _0xa7583c = [];
        var _0x3edf24 = [];
        var _0x1c98cb = 0x0;
        (function (_0x55765d, _0x43b684) {
          for (var _0x1adc30 in _0x55765d) {
            if (_0x55765d.hasOwnProperty(_0x1adc30)) {
              var _0x4d09dd = _0x55765d[_0x1adc30];
              var _0x5ec59f = _0x4d09dd.custom ? _0x4d09dd.relativePath : 'https://resources.wormate.io' + _0x4d09dd.relativePath;
              var _0x38f506 = _0x4d09dd.fileSize;
              var _0x2537b0 = _0x4d09dd.sha256;
              var _0x428745 = {
                'id': _0x1adc30,
                'path': _0x5ec59f,
                'fileSize': _0x38f506,
                'sha256': _0x2537b0
              };
              _0xa7583c.push(_0x428745);
              _0x3edf24.push(_0x428745);
              _0x1c98cb += _0x38f506;
              try {
                _0x228e35[_0x1adc30] = new _0x2af6e9(_0x5ec59f, _0x2d9910.$b.from(_0x4d09dd.file || _0x5ec59f));
              } catch (_0x2a4799) {
                console.log("Error loading file: " + _0x5ec59f);
              }
            }
          }
        })(_0x4855ee.textureDict, function (_0x13cd41, _0x527146) {});
        this.Fc(_0x4855ee, _0x228e35);
      };
      return _0x3209ee;
    }();
    var _0x51c0fb = function () {
      function _0x10c7e6() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x2fa1f8(_0xf1ec90, _0x5affa1) {
        for (var _0x4c4f57 in _0xf1ec90) {
          if (_0xf1ec90.hasOwnProperty(_0x4c4f57)) {
            _0x5affa1(_0x4c4f57, _0xf1ec90[_0x4c4f57]);
          }
        }
      }
      _0x10c7e6.yc = function () {
        var _0x3f6ac2 = new _0x10c7e6();
        _0x3f6ac2.Jc = {};
        _0x3f6ac2.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x3f6ac2.Lc = {};
        _0x3f6ac2.Mc = {
          'Zc': null
        };
        _0x3f6ac2.Nc = {};
        _0x3f6ac2.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x3f6ac2.Pc = {};
        _0x3f6ac2.Qc = {
          'ad': {},
          'bd': _0x3f6ac2.Oc,
          'cd': _0x3f6ac2.Kc
        };
        _0x3f6ac2.Rc = {};
        _0x3f6ac2.Sc = {
          'Zc': []
        };
        _0x3f6ac2.Tc = {};
        _0x3f6ac2.Uc = {
          'Zc': []
        };
        _0x3f6ac2.Vc = {};
        _0x3f6ac2.Wc = {
          'Zc': []
        };
        _0x3f6ac2.Xc = {};
        _0x3f6ac2.Yc = {
          'Zc': []
        };
        return _0x3f6ac2;
      };
      _0x10c7e6.Ic = function (_0x892242, _0x3ba42f) {
        var _0x45368b = new _0x10c7e6();
        var _0x12d9c1 = {};
        _0x2fa1f8(_0x892242.colorDict, function (_0xbb2dbe, _0x5aaa13) {
          _0x12d9c1[_0xbb2dbe] = _0x5aaa13;
        });
        var _0xd67791 = {};
        _0x2fa1f8(_0x892242.regionDict, function (_0xa49754, _0x4e6603) {
          _0xd67791[_0xa49754] = new _0x41b1f5(_0x3ba42f[_0x4e6603.texture].Hc, _0x4e6603.x, _0x4e6603.y, _0x4e6603.w, _0x4e6603.h, _0x4e6603.px, _0x4e6603.py, _0x4e6603.pw, _0x4e6603.ph);
        });
        _0x45368b.Nc = {};
        for (var _0x4e0985 = 0x0; _0x4e0985 < _0x892242.skinArrayDict.length; _0x4e0985++) {
          var _0xfcf651 = _0x892242.skinArrayDict[_0x4e0985];
          _0x45368b.Nc[_0xfcf651.id] = new _0x10c7e6.WormSkinData('#' + _0x12d9c1[_0xfcf651.prime], _0xfcf651.base.map(function (_0x495a53) {
            return _0xd67791[_0x495a53];
          }), _0xfcf651.glow.map(function (_0x109662) {
            return _0xd67791[_0x109662];
          }));
        }
        var _0x166313 = _0x892242.skinUnknown;
        _0x45368b.Oc = new _0x10c7e6.WormSkinData('#' + _0x12d9c1[_0x166313.prime], _0x166313.base.map(function (_0x46783e) {
          return _0xd67791[_0x46783e];
        }), _0x166313.glow.map(function (_0x7d6a13) {
          return _0xd67791[_0x7d6a13];
        }));
        _0x45368b.Rc = {};
        _0x2fa1f8(_0x892242.eyesDict, function (_0x18dff8, _0x437922) {
          _0x18dff8 = parseInt(_0x18dff8);
          _0x45368b.Rc[_0x18dff8] = new _0x10c7e6.WearSkinData(_0x437922.base.map(function (_0x2acf8f) {
            return _0xd67791[_0x2acf8f.region];
          }));
        });
        _0x45368b.Sc = new _0x10c7e6.WearSkinData(_0x892242.eyesUnknown.base.map(function (_0x22e62f) {
          return _0xd67791[_0x22e62f.region];
        }));
        _0x45368b.Tc = {};
        _0x2fa1f8(_0x892242.mouthDict, function (_0x374b9c, _0x31e5cc) {
          _0x374b9c = parseInt(_0x374b9c);
          _0x45368b.Tc[_0x374b9c] = new _0x10c7e6.WearSkinData(_0x31e5cc.base.map(function (_0x7e67e6) {
            return _0xd67791[_0x7e67e6.region];
          }));
        });
        _0x45368b.Uc = new _0x10c7e6.WearSkinData(_0x892242.mouthUnknown.base.map(function (_0xe4f86c) {
          return _0xd67791[_0xe4f86c.region];
        }));
        _0x45368b.Vc = {};
        _0x2fa1f8(_0x892242.glassesDict, function (_0x5aa489, _0x562b49) {
          _0x5aa489 = parseInt(_0x5aa489);
          _0x45368b.Vc[_0x5aa489] = new _0x10c7e6.WearSkinData(_0x562b49.base.map(function (_0x41c9cc) {
            return _0xd67791[_0x41c9cc.region];
          }));
        });
        _0x45368b.Wc = new _0x10c7e6.WearSkinData(_0x892242.glassesUnknown.base.map(function (_0x50de89) {
          return _0xd67791[_0x50de89.region];
        }));
        _0x45368b.Xc = {};
        _0x2fa1f8(_0x892242.hatDict, function (_0x291125, _0x2786ab) {
          _0x291125 = parseInt(_0x291125);
          _0x45368b.Xc[_0x291125] = new _0x10c7e6.WearSkinData(_0x2786ab.base.map(function (_0x5515c0) {
            return _0xd67791[_0x5515c0.region];
          }));
        });
        _0x45368b.Yc = new _0x10c7e6.WearSkinData(_0x892242.hatUnknown.base.map(function (_0x35bf8e) {
          return _0xd67791[_0x35bf8e.region];
        }));
        _0x45368b.Jc = {};
        _0x2fa1f8(_0x892242.portionDict, function (_0x3b725f, _0x3cf8e7) {
          _0x3b725f = parseInt(_0x3b725f);
          _0x45368b.Jc[_0x3b725f] = new _0x10c7e6.PortionSkinData(_0xd67791[_0x3cf8e7.base], _0xd67791[_0x3cf8e7.glow]);
        });
        var _0x3ea08a = _0x892242.portionUnknown;
        _0x45368b.Kc = new _0x10c7e6.PortionSkinData(_0xd67791[_0x3ea08a.base], _0xd67791[_0x3ea08a.glow]);
        _0x45368b.Lc = {};
        _0x2fa1f8(_0x892242.abilityDict, function (_0x497a30, _0x5496dc) {
          _0x497a30 = parseInt(_0x497a30);
          _0x45368b.Lc[_0x497a30] = new _0x10c7e6.AbilitySkinData(_0xd67791[_0x5496dc.base]);
        });
        var _0x33d2c6 = _0x892242.abilityUnknown;
        _0x45368b.Mc = new _0x10c7e6.AbilitySkinData(_0xd67791[_0x33d2c6.base]);
        _0x45368b.Pc = {};
        _0x2fa1f8(_0x892242.teamDict, function (_0x5cb7ef, _0x2b99d8) {
          _0x5cb7ef = parseInt(_0x5cb7ef);
          _0x45368b.Pc[_0x5cb7ef] = new _0x10c7e6.TeamSkinData(_0x2b99d8.name, new _0x10c7e6.WormSkinData('#' + _0x12d9c1[_0x2b99d8.skin.prime], [], _0x2b99d8.skin.glow.map(function (_0x44f5ee) {
            return _0xd67791[_0x44f5ee];
          })), new _0x10c7e6.PortionSkinData([], _0xd67791[_0x2b99d8.portion.glow]));
        });
        _0x45368b.Qc = new _0x10c7e6.TeamSkinData({}, _0x45368b.Oc, _0x45368b.Kc);
        return _0x45368b;
      };
      _0x10c7e6.prototype.dd = function (_0x9ef959) {
        var _0x4aba25 = this.Nc[_0x9ef959];
        return _0x4aba25 || this.Oc;
      };
      _0x10c7e6.prototype.ed = function (_0x8ac11e) {
        var _0x22c264 = this.Pc[_0x8ac11e];
        return _0x22c264 || this.Qc;
      };
      _0x10c7e6.prototype.fd = function (_0x3453d7) {
        var _0x45f87a = this.Rc[_0x3453d7];
        return _0x45f87a || this.Sc;
      };
      _0x10c7e6.prototype.gd = function (_0x520134) {
        var _0x2aadf7 = this.Tc[_0x520134];
        return _0x2aadf7 || this.Uc;
      };
      _0x10c7e6.prototype.hd = function (_0xbe0de1) {
        var _0x75fbd8 = this.Vc[_0xbe0de1];
        return _0x75fbd8 || this.Wc;
      };
      _0x10c7e6.prototype.jd = function (_0x2e067a) {
        var _0x1d3fec = this.Xc[_0x2e067a];
        return _0x1d3fec || this.Yc;
      };
      _0x10c7e6.prototype.kd = function (_0x471f01) {
        var _0x312dbf = this.Jc[_0x471f01];
        return _0x312dbf || this.Kc;
      };
      _0x10c7e6.prototype.ld = function (_0x17389b) {
        var _0x4ad024 = this.Lc[_0x17389b];
        return _0x4ad024 || this.Mc;
      };
      _0x10c7e6.TeamSkinData = function () {
        function _0x112d82(_0x56bdf9, _0x470e88, _0x571c0c) {
          this.ad = _0x56bdf9;
          this.bd = _0x470e88;
          this.cd = _0x571c0c;
        }
        return _0x112d82;
      }();
      _0x10c7e6.WormSkinData = function () {
        function _0x20d03d(_0xda3e03, _0x22ece9, _0x324446) {
          this._c = _0xda3e03;
          this.Zc = _0x22ece9;
          this.$c = _0x324446;
        }
        return _0x20d03d;
      }();
      _0x10c7e6.WearSkinData = function () {
        function _0x59a691(_0x3b2bc5) {
          this.Zc = _0x3b2bc5;
        }
        return _0x59a691;
      }();
      _0x10c7e6.PortionSkinData = function () {
        function _0x1a25b9(_0x66e425, _0x4fc601) {
          this.Zc = _0x66e425;
          this.$c = _0x4fc601;
        }
        return _0x1a25b9;
      }();
      _0x10c7e6.AbilitySkinData = function () {
        function _0x5007f7(_0x46ea6f) {
          this.Zc = _0x46ea6f;
        }
        return _0x5007f7;
      }();
      return _0x10c7e6;
    }();
    var _0x18ec17 = function () {
      function _0x49de68() {
        this.md = _0x49de68.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x49de68.prototype.a = function () {};
      _0x49de68.prototype.rd = function (_0x3aaea3) {
        this.od = _0x3aaea3;
      };
      _0x49de68.prototype.G = function (_0x23d769) {
        this.md = _0x23d769;
        this.sd();
      };
      _0x49de68.prototype.td = function (_0x21a9f0) {
        this.nd = _0x21a9f0;
        this.sd();
      };
      _0x49de68.prototype.sd = function () {};
      _0x49de68.prototype.ud = function (_0x3c196a, _0x3abd00) {
        if (!(window.anApp = _0x1113af).p.W) {
          return null;
        }
        var _0x37ad32 = _0x3c196a[_0x3abd00];
        return _0x37ad32 == null || _0x37ad32.length == 0x0 ? null : _0x37ad32[Math.floor(Math.random() * _0x37ad32.length)].cloneNode();
      };
      _0x49de68.prototype.vd = function (_0x245e3d, _0x21c7f0, _0x150ecd) {
        if (this.od && !(_0x150ecd <= 0x0)) {
          var _0x232ee2 = this.ud(_0x245e3d, _0x21c7f0);
          if (_0x232ee2 != null) {
            _0x232ee2.volume = Math.min(0x1, _0x150ecd);
            _0x232ee2.play();
          }
        }
      };
      _0x49de68.prototype.wd = function (_0x3292c8, _0x49102a) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x3292c8, _0x49102a);
        }
      };
      _0x49de68.prototype.zd = function (_0x15876b, _0x33a631) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x15876b, _0x33a631);
        }
      };
      _0x49de68.prototype.Cd = function () {};
      _0x49de68.prototype.Dd = function () {};
      _0x49de68.prototype.Ed = function () {};
      _0x49de68.prototype.Fd = function () {};
      _0x49de68.prototype.Gd = function () {};
      _0x49de68.prototype.Hd = function () {};
      _0x49de68.prototype.Id = function (_0x5817b4, _0x146c19, _0x24d6a3) {};
      _0x49de68.prototype.Jd = function (_0x5182ba) {};
      _0x49de68.prototype.Kd = function (_0x90c45f) {};
      _0x49de68.prototype.Ld = function (_0x46f9a8) {};
      _0x49de68.prototype.Md = function (_0x5560c9) {};
      _0x49de68.prototype.Nd = function (_0x222e3b) {};
      _0x49de68.prototype.Od = function (_0x12a13e) {};
      _0x49de68.prototype.Pd = function (_0x5a4617) {};
      _0x49de68.prototype.Qd = function (_0x230fa9) {};
      _0x49de68.prototype.Rd = function (_0x47f364) {};
      _0x49de68.prototype.Sd = function (_0x2c0441) {};
      _0x49de68.prototype.Td = function (_0x129070) {};
      _0x49de68.prototype.Ud = function (_0x30ee1a) {};
      _0x49de68.prototype.Vd = function (_0x3aadfd) {};
      _0x49de68.prototype.Wd = function (_0x3a3eea) {};
      _0x49de68.prototype.Xd = function (_0xd03b1e, _0x21ce2b) {};
      _0x49de68.prototype.Yd = function (_0x1695a4) {};
      _0x49de68.prototype.Zd = function (_0x5a73dc, _0x4d81f1, _0xdf2897) {};
      (function () {
        function _0x3795e7(_0x45b0f8) {
          this.$d = new _0x55b330(_0x45b0f8, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x3795e7.prototype.be = function (_0x29b945) {
          if (_0x29b945) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x3795e7.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x3795e7.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x5ec21c(_0x16f908) {
          this.ge = _0x16f908.map(function (_0x50f643) {
            return new _0x55b330(_0x50f643, 0.4);
          });
          _0x5d4f64(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x5d4f64(_0x2123c3, _0x49eb03, _0x95f1bd) {
          for (var _0x27ba2a = _0x95f1bd - 0x1; _0x27ba2a > _0x49eb03; _0x27ba2a--) {
            var _0x5194b9 = _0x49eb03 + Math.floor(Math.random() * (_0x27ba2a - _0x49eb03 + 0x1));
            var _0x328d60 = _0x2123c3[_0x27ba2a];
            _0x2123c3[_0x27ba2a] = _0x2123c3[_0x5194b9];
            _0x2123c3[_0x5194b9] = _0x328d60;
          }
        }
        _0x5ec21c.prototype.be = function (_0xabf49f) {
          if (_0xabf49f) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x5ec21c.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x5ec21c.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x5ec21c.prototype.ke = function (_0x54d179) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je));
            this.he.de = 0x0;
            this.he.ee(_0x54d179, 0x64);
            var _0x254977 = (this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je;
            var _0x91c07f = this;
            var _0x3c62c9 = setTimeout(function () {
              if (_0x91c07f.ae && _0x3c62c9 == _0x91c07f.ie) {
                _0x91c07f.he.fe(_0x91c07f.je, 0x64);
                _0x91c07f.he = _0x91c07f.le();
                _0x91c07f.he._d.currentTime = 0x0;
                _0x91c07f.ke(_0x91c07f.je);
              }
            }, _0x254977);
            this.ie = _0x3c62c9;
          }
        };
        _0x5ec21c.prototype.le = function () {
          var _0x55e81c = this.ge[0x0];
          var _0x1b2442 = Math.max(0x1, this.ge.length / 0x2);
          _0x5d4f64(this.ge, _0x1b2442, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x55e81c;
        };
      })();
      var _0x55b330 = function () {
        function _0x17edf7(_0x1e3cb1, _0x5ce337) {
          this._d = _0x1e3cb1;
          this.me = _0x5ce337;
          this.de = 0x0;
          _0x1e3cb1.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x17edf7.prototype.ee = function (_0x1b0d99, _0x5d5072) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x1b0d99, _0x5d5072);
        };
        _0x17edf7.prototype.fe = function (_0x28609c, _0x2a9c40) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x28609c, _0x2a9c40);
        };
        _0x17edf7.prototype.pe = function (_0x19f9ad, _0x5104c8, _0x11d605) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x16b366 = this;
          var _0x1d10fd = 0x1 / (_0x5104c8 / _0x11d605);
          var _0x36af16 = setInterval(function () {
            if (_0x16b366.oe && _0x36af16 != _0x16b366.ne) {
              clearInterval(_0x36af16);
              return;
            }
            if (_0x19f9ad) {
              _0x16b366.de = Math.min(0x1, _0x16b366.de + _0x1d10fd);
              _0x16b366._d.volume = _0x16b366.de * _0x16b366.me;
              if (_0x16b366.de >= 0x1) {
                _0x16b366.oe = false;
                clearInterval(_0x36af16);
              }
            } else {
              _0x16b366.de = Math.max(0x0, _0x16b366.de - _0x1d10fd);
              _0x16b366._d.volume = _0x16b366.de * _0x16b366.me;
              if (_0x16b366.de <= 0x0) {
                _0x16b366._d.pause();
                _0x16b366.oe = false;
                clearInterval(_0x36af16);
              }
            }
          }, _0x11d605);
          this.oe = true;
          this.ne = _0x36af16;
          this._d.play();
        };
        return _0x17edf7;
      }();
      _0x49de68.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x49de68;
    }();
    var _0x25a902 = function () {
      function _0x49da79(_0x1c83c0) {
        this.se = _0x1c83c0;
        this.te = _0x1c83c0.get()[0x0];
        this.ue = new _0x2d9910.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x2d9910.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x164703 = [{
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Ae': 0x0 + Math.random(_0x2e6b3b - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x49da79.prototype.a = function () {
        var _0x108b7f = window.anApp = _0x1113af;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x164703.length);
        for (var _0x1875e1 = 0x0; _0x1875e1 < this.we.length; _0x1875e1++) {
          this.we[_0x1875e1] = new _0x2d9910.ec();
          this.we[_0x1875e1].texture = _0x108b7f.q.Fe;
          this.we[_0x1875e1].anchor.set(0.5);
          this.we[_0x1875e1].zIndex = 0x1;
          this.ve.addChild(this.we[_0x1875e1]);
        }
        this.xe = new Array(_0x108b7f.q.Ge.length);
        for (var _0x1875e1 = 0x0; _0x1875e1 < this.xe.length; _0x1875e1++) {
          this.xe[_0x1875e1] = new _0x2d9910.ec();
          this.xe[_0x1875e1].texture = _0x108b7f.q.Ge[_0x1875e1];
          this.xe[_0x1875e1].anchor.set(0.5);
          this.xe[_0x1875e1].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x1875e1]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x1875e1 = 0x0; _0x1875e1 < this.ye.length; _0x1875e1++) {
          this.ye[_0x1875e1] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0x49da79.sc = false;
      _0x49da79.Le = function (_0x59b490) {
        _0x49da79.sc = _0x59b490;
      };
      _0x49da79.prototype.Ra = function () {
        var _0x48c323 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x1eadf3 = this.se.width();
        var _0x3ad415 = this.se.height();
        this.ue.resize(_0x1eadf3, _0x3ad415);
        this.ue.resolution = _0x48c323;
        this.te.width = _0x48c323 * _0x1eadf3;
        this.te.height = _0x48c323 * _0x3ad415;
        var _0x5e6a59 = Math.max(_0x1eadf3, _0x3ad415) * 0.8;
        for (var _0x124a63 = 0x0; _0x124a63 < this.we.length; _0x124a63++) {
          this.we[_0x124a63].width = _0x5e6a59;
          this.we[_0x124a63].height = _0x5e6a59;
        }
      };
      _0x49da79.prototype.Pa = function (_0x39311f, _0x300f96) {
        if (_0x49da79.sc) {
          var _0x4957f6 = _0x39311f / 0x3e8;
          var _0x1e6538 = _0x300f96 / 0x3e8;
          var _0x58bffe = this.se.width();
          var _0x4a20ea = this.se.height();
          for (var _0x2ec885 = 0x0; _0x2ec885 < this.we.length; _0x2ec885++) {
            var _0x653cb3 = _0x164703[_0x2ec885 % _0x164703.length];
            var _0x53c75e = this.we[_0x2ec885];
            var _0x465ccb = _0x653cb3.Ce * (_0x4957f6 * 0.08) + _0x653cb3.Ae >= 0x0 ? Math.cos((_0x653cb3.Ce * (_0x4957f6 * 0.08) + _0x653cb3.Ae) % _0x2e6b3b) : Math.cos((_0x653cb3.Ce * (_0x4957f6 * 0.08) + _0x653cb3.Ae) % _0x2e6b3b + _0x2e6b3b);
            var _0x14fe29 = _0x653cb3.De * (_0x4957f6 * 0.08) >= 0x0 ? Math.sin(_0x653cb3.De * (_0x4957f6 * 0.08) % _0x2e6b3b) : Math.sin(_0x653cb3.De * (_0x4957f6 * 0.08) % _0x2e6b3b + _0x2e6b3b);
            var _0x221501 = 0.2 + (_0x653cb3.Ae + _0x653cb3.Be * _0x4957f6 >= 0x0 ? Math.cos((_0x653cb3.Ae + _0x653cb3.Be * _0x4957f6) % _0x2e6b3b) : Math.cos((_0x653cb3.Ae + _0x653cb3.Be * _0x4957f6) % _0x2e6b3b + _0x2e6b3b)) * 0.2;
            _0x53c75e.tint = _0x653cb3.Ee;
            _0x53c75e.alpha = _0x221501;
            _0x53c75e.position.set(_0x58bffe * (0.2 + (_0x465ccb + 0x1) * 0.5 * 0.6), _0x4a20ea * (0.1 + (_0x14fe29 + 0x1) * 0.5 * 0.8));
          }
          var _0x40cb22 = Math.max(_0x58bffe, _0x4a20ea) * 0.05;
          for (var _0x2ec885 = 0x0; _0x2ec885 < this.xe.length; _0x2ec885++) {
            var _0x1d3e90 = this.ye[_0x2ec885];
            var _0x53c75e = this.xe[_0x2ec885];
            var _0x1235b9 = _0x2e6b3b * _0x2ec885 / this.xe.length + _0x1d3e90.He;
            _0x1d3e90.Ke += _0x1d3e90.Ie * _0x1e6538;
            if (_0x1d3e90.Ke > 1.3) {
              _0x1d3e90.He = Math.random() * _0x2e6b3b;
              _0x1d3e90.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              _0x1d3e90.Je = 0.15 + Math.random() * 0.7;
              _0x1d3e90.Ke = -0.3;
            }
            var _0x82829a = _0x1d3e90.Je + Math.sin(Math.sin(_0x1235b9 + _0x4957f6 * 0.48) * 0x6) * 0.03;
            var _0x30a4d9 = _0x1d3e90.Ke;
            var _0x221501 = _0x18f3c0(Math.sin(Math.PI * _0x30a4d9), 0.1, 0x1);
            var _0x1cf552 = (0.4 + (0x1 + Math.sin(_0x1235b9 + _0x4957f6 * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0x725375 = _0x1235b9 + _0x1d3e90.Ie * 0x2 * _0x4957f6;
            _0x53c75e.alpha = _0x221501;
            _0x53c75e.position.set(_0x58bffe * _0x82829a, _0x4a20ea * _0x30a4d9);
            _0x53c75e.rotation = _0x725375;
            var _0x17cb79 = _0x53c75e.texture.width / _0x53c75e.texture.height;
            _0x53c75e.width = _0x1cf552 * _0x40cb22;
            _0x53c75e.height = _0x1cf552 * _0x40cb22 * _0x17cb79;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x49da79;
    }();
    var _0x2b84ef = function () {
      function _0x419e48() {}
      _0x419e48.Na = "consent_state_2";
      _0x419e48.ya = 'showPlayerNames';
      _0x419e48.Me = "musicEnabled";
      _0x419e48.Ne = 'sfxEnabled';
      _0x419e48.Oe = "account_type";
      _0x419e48.va = "gameMode";
      _0x419e48.Aa = "nickname";
      _0x419e48.Ba = "skin";
      _0x419e48.d = "prerollCount";
      _0x419e48.La = "shared";
      return _0x419e48;
    }();
    var _0x4a0d4d = function () {
      function _0x37961a(_0x21a176, _0x2f2b26, _0x48ae14) {
        var _0x1295ee = false;
        var _0x4cca27 = 0x0;
        for (var _0x2c5988 = _0x48ae14.length - 0x1; _0x4cca27 < _0x48ae14.length; _0x2c5988 = _0x4cca27++) {
          if (_0x48ae14[_0x4cca27][0x1] > _0x2f2b26 != _0x48ae14[_0x2c5988][0x1] > _0x2f2b26 && _0x21a176 < (_0x48ae14[_0x2c5988][0x0] - _0x48ae14[_0x4cca27][0x0]) * (_0x2f2b26 - _0x48ae14[_0x4cca27][0x1]) / (_0x48ae14[_0x2c5988][0x1] - _0x48ae14[_0x4cca27][0x1]) + _0x48ae14[_0x4cca27][0x0]) {
            _0x1295ee = !_0x1295ee;
          }
        }
        return _0x1295ee;
      }
      var _0x4707cc = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x42cd78, _0x37fb18) {
          return _0x37961a(_0x37fb18, _0x42cd78, _0x4707cc);
        }
      };
    }();
    var _0x3fe7ef = function () {
      function _0x567e33(_0xc52284) {
        var _0x394bbc = undefined;
        _0x394bbc = _0xc52284 > 0x0 ? '+' + Math.floor(_0xc52284) : _0xc52284 < 0x0 ? '-' + Math.floor(_0xc52284) : '0';
        var _0x5e8872 = Math.min(1.5, 0.5 + _0xc52284 / 0x258);
        var _0x4e6430 = undefined;
        if (_0xc52284 < 0x1) {
          _0x4e6430 = "0xFFFFFF";
        } else {
          if (_0xc52284 < 0x1e) {
            var _0x5476b9 = (_0xc52284 - 0x1) / 0x1d;
            _0x4e6430 = ((((0x1 - _0x5476b9) * 0x1 + _0x5476b9 * 0.96) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x5476b9) * 0x1 + _0x5476b9 * 0.82) * 0xff & 0xff) << 0x8) + (((0x1 - _0x5476b9) * 0x1 + _0x5476b9 * 0x0) * 0xff & 0xff);
          } else {
            if (_0xc52284 < 0x12c) {
              var _0x5476b9 = (_0xc52284 - 0x1e) / 0x10e;
              _0x4e6430 = ((((0x1 - _0x5476b9) * 0.96 + _0x5476b9 * 0.93) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x5476b9) * 0.82 + _0x5476b9 * 0.34) * 0xff & 0xff) << 0x8) + (((0x1 - _0x5476b9) * 0x0 + _0x5476b9 * 0.25) * 0xff & 0xff);
            } else {
              if (_0xc52284 < 0x2bc) {
                var _0x5476b9 = (_0xc52284 - 0x12c) / 0x190;
                _0x4e6430 = ((((0x1 - _0x5476b9) * 0.93 + _0x5476b9 * 0.98) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x5476b9) * 0.34 + _0x5476b9 * 0x0) * 0xff & 0xff) << 0x8) + (((0x1 - _0x5476b9) * 0.25 + _0x5476b9 * 0.98) * 0xff & 0xff);
              } else {
                _0x4e6430 = 16318713;
              }
            }
          }
        }
        var _0x15ac27 = Math.random();
        var _0x4f8dde = 0x1 + Math.random() * 0.5;
        return new _0x27ec8c(_0x394bbc, _0x4e6430, true, 0.5, _0x5e8872, _0x15ac27, _0x4f8dde);
      }
      function _0x14a29e(_0x4a8c8a, _0x1888b0) {
        var _0x4df6c6 = undefined;
        var _0x598a57 = undefined;
        if (_0x1888b0) {
          _0x4df6c6 = 1.3;
          _0x598a57 = 15554111;
        } else {
          _0x4df6c6 = 1.1;
          _0x598a57 = 16044288;
        }
        return new _0x27ec8c(_0x4a8c8a, _0x598a57, true, 0.5, _0x4df6c6, 0.5, 0.7);
      }
      var _0x331b5f = _0x122e71(_0x2d9910.Zb, function () {
        _0x2d9910.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x331b5f.prototype.Re = function (_0x1fda06) {
        this.Qe += _0x1fda06;
        if (this.Qe >= 0x1) {
          var _0x39a3d2 = Math.floor(this.Qe);
          this.Qe -= _0x39a3d2;
          var _0x1f8532 = _0x567e33(_0x39a3d2);
          this.addChild(_0x1f8532);
          this.Pe.push(_0x1f8532);
        }
      };
      let _0x5b848a = 0x0;
      function _0x18397f() {
        _0x5b848a = 0x0;
      }
      _0x331b5f.prototype.Se = function (_0x3fafa0) {
        _0x51006f("count", _0x3fafa0);
        if (_0x3fafa0) {
          const _0x5d6174 = new Audio();
          if (_0x5b848a % 0xa === 0x9) {
            _0x5d6174.src = "https://wormateup.live/up/video/monster-kill-hahaha.MP3";
          } else {
            _0x5d6174.src = localStorage.getItem("selectedSound") || "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
          }
          if (localStorage.getItem("isMuted") !== "true") {
            _0x5d6174.play()["catch"](function (_0x4b432a) {});
          }
          _0x5b848a++;
          if (_0x5b848a % 0xa === 0x0) {
            _0x5b848a = 0x0;
          }
          var _0x2e7c21 = localStorage.getItem('headshotMessage') || "Ø¶Ø±Ø¨Ø© Ù‚ÙˆÙŠØ©";
          var _0x2c0ac4 = _0x14a29e(_0x2e7c21, true);
          this.addChild(_0x2c0ac4);
          this.Pe.push(_0x2c0ac4);
          if (_0x2c0ac4) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(() => theoKzObjects.emoji_headshot = false, 0xbb8);
          }
        } else {
          var _0x521540 = localStorage.getItem("killMessage") || "Ø­Ø§ÙˆÙ„ Ù…Ø¬Ø¯Ø¯Ù‹Ø§";
          var _0x2c0ac4 = _0x14a29e(_0x521540, false);
          this.addChild(_0x2c0ac4);
          this.Pe.push(_0x2c0ac4);
          if (_0x2c0ac4) {
            theoKzObjects.emoji_kill = true;
            setTimeout(() => theoKzObjects.emoji_kill = false, 0xbb8);
          }
        }
      };
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          _0x18397f();
        });
        $(document).on("click", "#final-replay", function () {
          _0x18397f();
        });
        $(document).on('keydown', function (_0x156f7d) {
          if (_0x156f7d.key === 'r' || _0x156f7d.key === 'R') {
            _0x18397f();
          }
        });
      });
      _0x331b5f.prototype.Te = function (_0x49f146, _0x26b1ba) {
        var _0x5b9142 = (window.anApp = _0x1113af).s.H.wb;
        var _0x467887 = _0x5b9142.ue.width / _0x5b9142.ue.resolution;
        var _0x304e3c = _0x5b9142.ue.height / _0x5b9142.ue.resolution;
        var _0x10420d = 0x0;
        while (_0x10420d < this.Pe.length) {
          var _0x27bf92 = this.Pe[_0x10420d];
          _0x27bf92.Ue = _0x27bf92.Ue + _0x26b1ba / 0x7d0 * _0x27bf92.Ve;
          _0x27bf92.We = _0x27bf92.We + _0x26b1ba / 0x7d0 * _0x27bf92.Xe;
          _0x27bf92.alpha = Math.sin(Math.PI * _0x27bf92.We) * 0.5;
          _0x27bf92.scale.set(_0x27bf92.Ue);
          _0x27bf92.position.x = _0x467887 * (0.25 + _0x27bf92.Ye * 0.5);
          _0x27bf92.position.y = _0x27bf92.Ze ? _0x304e3c * (0x1 - (0x1 + _0x27bf92.We) * 0.5) : _0x304e3c * (0x1 - (0x0 + _0x27bf92.We) * 0.5);
          if (_0x27bf92.We > 0x1) {
            _0x236c87(_0x27bf92);
            this.Pe.splice(_0x10420d, 0x1);
            _0x10420d--;
          }
          _0x10420d++;
        }
      };
      var _0x27ec8c = function () {
        return _0x122e71(_0x2d9910.fc, function (_0x3a343e, _0x260c79, _0x891fbe, _0x2daf90, _0x2bca43, _0x2d3c9d, _0x2168c8) {
          _0x2d9910.fc.call(this, _0x3a343e, {
            'fill': _0x260c79,
            'fontFamily': 'wormup',
            'fontSize': 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x891fbe;
          this.Ue = _0x2daf90;
          this.Ve = _0x2bca43;
          this.Ye = _0x2d3c9d;
          this.We = 0x0;
          this.Xe = _0x2168c8;
        });
      }();
      return _0x331b5f;
    }();
    var _0x2af6e9 = function () {
      function _0x1c1a42(_0x1865f6, _0x2242fd) {
        this.Gc = _0x1865f6;
        this.Hc = _0x2242fd;
      }
      return _0x1c1a42;
    }();
    var _0x2ef9fb = function () {
      function _0x57ac96() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x57ac96.TEAM_DEFAULT = 0x0;
      _0x57ac96.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return _0x57ac96;
    }();
    var _0x1e257e = function () {
      function _0xb88063(_0x56676f) {
        this.se = _0x56676f;
        this.te = _0x56676f.get()[0x0];
        this.ue = new _0x2d9910.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x2d9910.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 0x168);
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0xfdc4b();
        this.mf = new _0x2d9910.bc();
        this.nf = new _0x2d9910.Zb();
        this.pf = new _0x2d9910.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x2d9910.Zb();
        this.rf = new _0x2d9910.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x2d9910.Zb();
        this.tf = new _0x1720ff();
        this.uf = new _0x19f2b1();
        this.vf = new _0x558c68();
        this.wf = new _0x3fe7ef();
        this.xf = new _0x2d9910.ec();
        this.yf = {
          'x': 0x0,
          'y': -0x14
        };
        this.a();
      }
      _0xb88063.prototype.a = function () {
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x1113af).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0xb88063.prototype.Ra = function () {
        var _0xf23196 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x5b471f = this.se.width();
        var _0xb6e0c7 = this.se.height();
        this.ue.resize(_0x5b471f, _0xb6e0c7);
        this.ue.resolution = _0xf23196;
        this.te.width = _0xf23196 * _0x5b471f;
        this.te.height = _0xf23196 * _0xb6e0c7;
        this.jf = Math.min(Math.min(_0x5b471f, _0xb6e0c7), 0.625 * Math.max(_0x5b471f, _0xb6e0c7));
        this.xf.position.x = _0x5b471f / 0x2;
        this.xf.position.y = _0xb6e0c7 / 0x2;
        this.xf.width = _0x5b471f;
        this.xf.height = _0xb6e0c7;
        this.vf.position.x = _0x5b471f - 0xe1;
        this.vf.position.y = 0x1;
        window.changedNf = () => this.jf = Math.min(Math.max(_0x5b471f, _0xb6e0c7), window.multiplier * Math.min(_0x5b471f, _0xb6e0c7));
        this.tf.position.x = 0x3c;
        this.uf.position.x = 0x6e;
        this.vf.position.x = _0x5b471f - 0xc8;
        this.tf.position.y = 0x3c;
        this.uf.position.y = 0xa;
        this.vf.position.y = 0x3;
        this.tf.addChild(ctx.hoisinhnhanh);
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.quaytron);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      _0xb88063.prototype.Te = function (_0x9295, _0x23608b) {
        var _0x384854 = window.anApp = _0x1113af;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x9295.af == 0x0 ? _0x384854.q.Cf : _0x384854.q.Df);
        var _0x1ca9dd = this.mf;
        _0x1ca9dd.clear();
        _0x1ca9dd.lineStyle(0.8, 0xff0000);
        _0x1ca9dd.drawCircle(0x0, 0x0, _0x9295.ub);
        _0x1ca9dd.endFill();
        this.vf.Ef = _0x23608b;
        this.sf.visible = _0x23608b;
      };
      _0xb88063.prototype.Pa = function (_0x1dd217, _0x53d605) {
        if (!(this.ue.width <= 0x5)) {
          var _0x1eb6dc = window.anApp = _0x1113af;
          var _0x1f5f70 = _0x1eb6dc.o.N;
          var _0x3c7d3d = this.ue.width / this.ue.resolution;
          var _0x54931b = this.ue.height / this.ue.resolution;
          this['if'] = _0x1eb6dc.o.jb > this['if'] ? Math.min(_0x1eb6dc.o.jb, this['if'] + _0x53d605 * 0.002) : Math.max(_0x1eb6dc.o.jb, this['if'] - _0x53d605 * 0.002);
          var _0x497449 = this.jf / this['if'];
          var _0x9c9fb2 = _0x1eb6dc.o.N.Ff[_0x2a5570.ZOOM_TYPE];
          var _0x5b3e17 = _0x9c9fb2 != null && _0x9c9fb2.sc;
          this.kf = _0x18f3c0(this.kf + _0x53d605 / 0x3e8 * ((_0x5b3e17 ? 0x1 : 0x0) * 0.1 - this.kf), 0x0, 0x1);
          this.xf.alpha = this.kf;
          this.ff = this.ff + _0x53d605 * 0.01;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x1dd217 / 0x4b0 * 0x2 * Math.PI);
          var _0x110513 = _0x1f5f70.Gf();
          this.yf.x = _0x110513.x + (this.yf.x - _0x110513.x) * Math.pow(0.5, _0x53d605 / 33.333);
          this.yf.y = _0x110513.y + (this.yf.y - _0x110513.y) * Math.pow(0.5, _0x53d605 / 33.333);
          var _0x10d2ec = _0x3c7d3d / _0x497449 / 0x2;
          var _0x1e2235 = _0x54931b / _0x497449 / 0x2;
          _0x1eb6dc.o.yb(this.yf.x - _0x10d2ec * 1.3, this.yf.x + _0x10d2ec * 1.3, this.yf.y - _0x1e2235 * 1.3, this.yf.y + _0x1e2235 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, _0x10d2ec * 0x2, _0x1e2235 * 0x2);
          var _0x30b4c4 = _0x1eb6dc.o.fb.ub;
          this.ve.scale.x = _0x497449;
          this.ve.scale.y = _0x497449;
          this.ve.position.x = _0x3c7d3d / 0x2 - this.yf.x * _0x497449;
          this.ve.position.y = _0x54931b / 0x2 - this.yf.y * _0x497449;
          var _0x40c2f0 = Math.hypot(_0x110513.x, _0x110513.y);
          if (_0x40c2f0 > _0x30b4c4 - 0xa) {
            this.hf = _0x18f3c0(0x1 + (_0x40c2f0 - _0x30b4c4) / 0xa, 0x0, 0x1);
            var _0x354c46 = Math.cos(this.ff * _0x2e6b3b / 0x168) * (0x1 - this.hf) + this.hf * 0x1;
            var _0x2a60bd = Math.sin(this.ff * _0x2e6b3b / 0x168) * (0x1 - this.hf);
            var _0xb306bd = (Math.atan2(_0x2a60bd, _0x354c46) + _0x2e6b3b) % _0x2e6b3b * 0x168 / _0x2e6b3b;
            var _0x280cb1 = this.hf * (0.5 + this.gf * 0.5);
            var _0x3ef795 = _0x1987ba(Math.floor(_0xb306bd), 0x1, 0.75 - this.hf * 0.25);
            this.lf.Hf(_0x3ef795[0x0], _0x3ef795[0x1], _0x3ef795[0x2], 0.1 + _0x280cb1 * 0.2);
          } else {
            this.hf = 0x0;
            var _0x3dcc04 = _0x1987ba(Math.floor(this.ff), 0x1, 0.75);
            this.lf.Hf(_0x3dcc04[0x0], _0x3dcc04[0x1], _0x3dcc04[0x2], 0.1);
          }
          var _0x10413d = 0x0;
          for (; _0x10413d < this.sf.children.length; _0x10413d++) {
            var _0x5be6d1 = this.sf.children[_0x10413d];
            _0x5be6d1.position.x = _0x3c7d3d / 0x2 - (this.yf.x - _0x5be6d1.If.x) * _0x497449;
            _0x5be6d1.position.y = _0x54931b / 0x2 - (this.yf.y - _0x5be6d1.If.y) * _0x497449;
          }
          this.tf.Jf.position.x = _0x110513.x / _0x30b4c4 * this.tf.Kf;
          this.tf.Jf.position.y = _0x110513.y / _0x30b4c4 * this.tf.Kf;
          this.uf.Qa(_0x1dd217);
          this.wf.Te(_0x1dd217, _0x53d605);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0xb88063.prototype.Lf = function (_0xc40b69, _0x10cc8e) {
        _0x10cc8e.Of.Nf.Mf().zIndex = (_0xc40b69 + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x10cc8e.Of.Pf.Mf());
        this.pf.addChild(_0x10cc8e.Of.Nf.Mf());
      };
      _0xb88063.prototype.Qf = function (_0x4871cb, _0x469f0d, _0x4edb65) {
        _0x469f0d.Rf.zIndex = (window.anApp = _0x1113af).o.fb.bf ? 0x0 : 0xa + (_0x4871cb + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x469f0d.Rf);
        if (_0x4871cb != (window.anApp = _0x1113af).o.fb.bf) {
          this.sf.addChild(_0x4edb65);
        }
      };
      var _0x1720ff = function () {
        return _0x122e71(_0x2d9910.Zb, function () {
          _0x2d9910.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x2d9910.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x2d9910.bc();
          var _0x31c3b2 = new _0x2d9910.bc();
          _0x31c3b2.beginFill('black', 0.4);
          _0x31c3b2.drawCircle(0x0, 0x0, this.Kf);
          _0x31c3b2.endFill();
          _0x31c3b2.lineStyle(0x2, 0xffffff);
          _0x31c3b2.drawCircle(0x0, 0x0, this.Kf);
          _0x31c3b2.moveTo(0x0, -this.Kf);
          _0x31c3b2.lineTo(0x0, +this.Kf);
          _0x31c3b2.moveTo(-this.Kf, 0x0);
          _0x31c3b2.lineTo(+this.Kf, 0x0);
          _0x31c3b2.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(0xff0000);
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, "black");
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(_0x31c3b2);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var _0x19f2b1 = function () {
        var _0x3057fc = _0x122e71(_0x2d9910.Zb, function () {
          _0x2d9910.Zb.call(this);
          this.Tf = {};
        });
        _0x3057fc.prototype.Qa = function (_0xb2236b) {
          var _0x1f4544 = 0.5 + Math.cos(_0x2e6b3b * (_0xb2236b / 0x3e8 / 1.6)) * 0.5;
          var _0x2703a5;
          for (_0x2703a5 in this.Tf) {
            var _0x45e50f = this.Tf[_0x2703a5];
            var _0x1c3790 = _0x45e50f.Uf;
            _0x45e50f.alpha = 0x1 - _0x1c3790 + _0x1c3790 * _0x1f4544;
          }
        };
        _0x3057fc.prototype.Te = function (_0x464d46) {
          var _0x7035c5;
          for (_0x7035c5 in this.Tf) {
            if (_0x464d46[_0x7035c5] == null || !_0x464d46[_0x7035c5].sc) {
              _0x236c87(this.Tf[_0x7035c5]);
              delete this.Tf[_0x7035c5];
            }
          }
          var _0x9d007 = 0x0;
          var _0x392dac;
          for (_0x392dac in _0x464d46) {
            var _0x12827b = _0x464d46[_0x392dac];
            if (_0x12827b.sc) {
              var _0x5ce83c = this.Tf[_0x392dac];
              if (!_0x5ce83c) {
                var _0x3e0a80 = (window.anApp = _0x1113af).p.Dc().ld(_0x12827b.rc).Zc;
                _0x5ce83c = new _0x3a3d4f();
                _0x5ce83c.texture = _0x3e0a80.Hc;
                _0x5ce83c.width = 0x28;
                _0x5ce83c.height = 0x28;
                this.Tf[_0x392dac] = _0x5ce83c;
                this.addChild(_0x5ce83c);
              }
              _0x1dc1f8(this, _0x392dac, _0x12827b.tc);
              _0x5ce83c.Uf = _0x12827b.tc;
              _0x5ce83c.position.x = _0x9d007;
              _0x9d007 = _0x9d007 + 0x28;
            }
          }
        };
        var _0x3a3d4f = function () {
          return _0x122e71(_0x2d9910.ec, function () {
            _0x2d9910.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0x3057fc;
      }();
      var _0x558c68 = function () {
        var _0x4f23cb = _0x122e71(_0x2d9910.Zb, function () {
          _0x2d9910.Zb.call(this);
          this.Ef = true;
          this.Vf = 0xc;
          this.Wf = 0x9;
          this.Pe = [];
          var _0x3ef45c = 0x0;
          for (; _0x3ef45c < 0xe; _0x3ef45c++) {
            this.Xf();
          }
        });
        _0x4f23cb.prototype.Te = function (_0x419edd) {
          var _0x365baf = window.anApp = _0x1113af;
          var _0x40d35e = _0x365baf.o.fb.af == 0x10;
          var _0x34cd71 = 0x7;
          var _0x3a0bd8 = 0x0;
          if (_0x3a0bd8 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0x3a0bd8].Yf(0x1, "white");
          this.Pe[_0x3a0bd8].Zf('', _0x536e03(''), '(' + _0x365baf.o.tb + " online)");
          this.Pe[_0x3a0bd8].position.y = _0x34cd71;
          _0x34cd71 = _0x34cd71 + this.Vf;
          _0x3a0bd8 = _0x3a0bd8 + 0x1;
          if (_0x419edd.$f.length > 0x0) {
            _0x34cd71 = _0x34cd71 + this.Wf;
          }
          var _0x3d9cde = 0x0;
          for (; _0x3d9cde < _0x419edd.$f.length; _0x3d9cde++) {
            var _0x516fb2 = _0x419edd.$f[_0x3d9cde];
            var _0x5d15d5 = _0x365baf.p.Dc().ed(_0x516fb2._f);
            if (_0x3a0bd8 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x3a0bd8].Yf(0.8, _0x5d15d5.bd._c);
            this.Pe[_0x3a0bd8].Zf('' + (_0x3d9cde + 0x1), _0x8e03eb(_0x5d15d5.ad), '' + Math.floor(_0x516fb2.M));
            this.Pe[_0x3a0bd8].position.y = _0x34cd71;
            _0x34cd71 = _0x34cd71 + this.Vf;
            _0x3a0bd8 = _0x3a0bd8 + 0x1;
          }
          if (_0x419edd.ag.length > 0x0) {
            _0x34cd71 = _0x34cd71 + this.Wf;
          }
          var _0x3b6efa = 0x0;
          for (; _0x3b6efa < _0x419edd.ag.length; _0x3b6efa++) {
            var _0x25a49b = _0x419edd.ag[_0x3b6efa];
            var _0xb1c94e = _0x365baf.o.fb.bf == _0x25a49b.bg;
            var _0x32b60c = undefined;
            var _0x3b7ba4 = undefined;
            if (_0xb1c94e) {
              _0x32b60c = "yellow";
              _0x3b7ba4 = _0x365baf.o.N.Mb.ad;
            } else {
              var _0x47c802 = _0x365baf.o.hb[_0x25a49b.bg];
              if (_0x47c802 != null) {
                _0x32b60c = _0x40d35e ? _0x365baf.p.Dc().ed(_0x47c802.Mb.cg).bd._c : _0x365baf.p.Dc().dd(_0x47c802.Mb.dg)._c;
                _0x3b7ba4 = this.Ef ? _0x47c802.Mb.ad : "---";
              } else {
                _0x32b60c = "gray";
                _0x3b7ba4 = '?';
              }
            }
            if (_0xb1c94e) {
              _0x34cd71 = _0x34cd71 + this.Wf;
            }
            if (_0x3a0bd8 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x3a0bd8].Yf(_0xb1c94e ? 0x1 : 0.8, _0x32b60c);
            var _0x4926e1 = Math.floor(_0x25a49b.M);
            _0x4926e1.dotFormat();
            this.Pe[_0x3a0bd8].Zf('' + (_0x3b6efa + 0x1), _0x3b7ba4, '' + _0x4926e1.dotFormat());
            this.Pe[_0x3a0bd8].position.y = _0x34cd71;
            _0x34cd71 = _0x34cd71 + this.Vf;
            _0x3a0bd8 = _0x3a0bd8 + 0x1;
            if (_0xb1c94e) {
              _0x34cd71 = _0x34cd71 + this.Wf;
            }
          }
          if (_0x365baf.o.O > _0x419edd.ag.length) {
            _0x34cd71 = _0x34cd71 + this.Wf;
            if (_0x3a0bd8 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0x3a0bd8].Yf(0x2, "white");
            window.tuNewScore = Math.floor(_0x365baf.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[_0x3a0bd8].Zf('' + _0x365baf.o.O, _0x365baf.o.N.Mb.ad, '' + window.tuNewScore.dotFormat());
            this.Pe[_0x3a0bd8].position.y = _0x34cd71;
            _0x34cd71 = _0x34cd71 + this.Vf;
            _0x3a0bd8 = _0x3a0bd8 + 0x1;
            _0x34cd71 = _0x34cd71 + this.Wf;
          }
          while (this.Pe.length > _0x3a0bd8) {
            _0x236c87(this.Pe.pop());
          }
        };
        _0x4f23cb.prototype.Xf = function () {
          var _0x2603bb = new _0x2101ef();
          _0x2603bb.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x2603bb.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x2603bb);
          this.addChild(_0x2603bb);
        };
        var _0x2101ef = function () {
          var _0x441f9d = _0x122e71(_0x2d9910.Zb, function () {
            _0x2d9910.Zb.call(this);
            this.eg = new _0x2d9910.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': 'bold',
              'line': 0x5
            });
            this.eg.anchor.x = 0x2;
            this.eg.position.x = 0x4;
            this.addChild(this.eg);
            this.fg = new _0x2d9910.fc('', {
              'fontFamily': 'wormup',
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': 'bold',
              'line': 0x5
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x4;
            this.addChild(this.fg);
            this.gg = new _0x2d9910.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xbe;
            this.addChild(this.gg);
          });
          _0x441f9d.prototype.Zf = function (_0x3a0096, _0x7e00d9, _0x3a1bde) {
            this.eg.text = _0x3a0096;
            this.gg.text = _0x3a1bde;
            var _0x5d2088 = _0x7e00d9;
            this.fg.text = _0x5d2088;
            while (this.fg.width > 0x78) {
              _0x5d2088 = _0x5d2088.substring(0x0, _0x5d2088.length - 0x1);
              this.fg.text = _0x5d2088 + '..';
            }
          };
          _0x441f9d.prototype.Yf = function (_0x2f513b, _0x11ef4d) {
            this.eg.alpha = _0x2f513b;
            this.eg.style.fill = _0x11ef4d;
            this.fg.alpha = _0x2f513b;
            this.fg.style.fill = _0x11ef4d;
            this.gg.alpha = _0x2f513b;
            this.gg.style.fill = _0x11ef4d;
          };
          return _0x441f9d;
        }();
        return _0x4f23cb;
      }();
      return _0xb88063;
    }();
    var _0x2f3e0b = function () {
      function _0x566a24(_0x3aeb17) {
        this.o = _0x3aeb17;
        this.hg = [];
        this.ig = 0x0;
      }
      _0x566a24.prototype.Xb = function (_0x35dcae) {
        this.hg.push(new DataView(_0x35dcae));
      };
      _0x566a24.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0x566a24.prototype.Bb = function () {
        for (var _0x437b93 = 0x0; _0x437b93 < 0xa; _0x437b93++) {
          if (this.hg.length === 0x0) {
            return;
          }
          var _0x5c4bd1 = this.hg.shift();
          try {
            this.jg(_0x5c4bd1);
          } catch (_0x3eedc7) {
            throw _0x3eedc7;
          }
        }
      };
      _0x566a24.prototype.jg = function (_0x3813d2) {
        switch (_0x3813d2.mc(0x0) & 0xff) {
          case 0x0:
            this.kg(_0x3813d2, 0x1);
            return;
          case 0x1:
            this.lg(_0x3813d2, 0x1);
            return;
          case 0x2:
            this.mg(_0x3813d2, 0x1);
            return;
          case 0x3:
            this.ng(_0x3813d2, 0x1);
            return;
          case 0x4:
            this.og(_0x3813d2, 0x1);
            return;
          case 0x5:
            this.pg(_0x3813d2, 0x1);
            return;
        }
      };
      _0x566a24.prototype.kg = function (_0xcde409, _0x93fa51) {
        this.o.fb.af = _0xcde409.mc(_0x93fa51);
        _0x93fa51 = _0x93fa51 + 0x1;
        var _0x1b5ac6 = _0xcde409.nc(_0x93fa51);
        _0x93fa51 = _0x93fa51 + 0x2;
        this.o.fb.bf = _0x1b5ac6;
        this.o.N.Mb.Lb = _0x1b5ac6;
        this.o.fb.ub = _0xcde409.pc(_0x93fa51);
        _0x93fa51 = _0x93fa51 + 0x4;
        this.o.fb.cf = _0xcde409.pc(_0x93fa51);
        _0x93fa51 = _0x93fa51 + 0x4;
        this.o.fb.df = _0xcde409.pc(_0x93fa51);
        _0x93fa51 = _0x93fa51 + 0x4;
        (window.anApp = _0x1113af).s.H.wb.Te(this.o.fb, (window.anApp = _0x1113af).s.xa.wa());
        return _0x93fa51;
      };
      _0x566a24.prototype.lg = function (_0x508de5, _0x5ae04b) {
        var _0x568c27 = this.ig++;
        var _0x4c0fab = _0x508de5.nc(_0x5ae04b);
        _0x5ae04b += 0x2;
        var _0x278d08 = undefined;
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x2e14fc = 0x0; _0x2e14fc < _0x278d08; _0x2e14fc++) {
          _0x5ae04b = this.sg(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x1d0911 = 0x0; _0x1d0911 < _0x278d08; _0x1d0911++) {
          _0x5ae04b = this.tg(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x53668c = 0x0; _0x53668c < _0x278d08; _0x53668c++) {
          _0x5ae04b = this.ug(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x14f135 = 0x0; _0x14f135 < _0x278d08; _0x14f135++) {
          _0x5ae04b = this.vg(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x3db93b = 0x0; _0x3db93b < _0x278d08; _0x3db93b++) {
          _0x5ae04b = this.wg(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x3106de = 0x0; _0x3106de < _0x278d08; _0x3106de++) {
          _0x5ae04b = this.xg(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0xb2ccb6 = 0x0; _0xb2ccb6 < _0x278d08; _0xb2ccb6++) {
          _0x5ae04b = this.yg(_0x508de5, _0x5ae04b);
        }
        _0x278d08 = this.qg(_0x508de5, _0x5ae04b);
        _0x5ae04b += this.rg(_0x278d08);
        for (var _0x57c16d = 0x0; _0x57c16d < _0x278d08; _0x57c16d++) {
          _0x5ae04b = this.zg(_0x508de5, _0x5ae04b);
        }
        if (_0x568c27 > 0x0) {
          _0x5ae04b = this.Ag(_0x508de5, _0x5ae04b);
        }
        this.o.Qb(_0x568c27, _0x4c0fab);
        return _0x5ae04b;
      };
      _0x566a24.prototype.vg = function (_0x1407a9, _0x2b523a) {
        var _0x2502d2 = new _0x5e4879.Config();
        _0x2502d2.Lb = _0x1407a9.nc(_0x2b523a);
        _0x2b523a = _0x2b523a + 0x2;
        _0x2502d2.cg = this.o.fb.af == 0x10 ? _0x1407a9.mc(_0x2b523a++) : _0x2ef9fb.TEAM_DEFAULT;
        _0x2502d2.dg = _0x1407a9.nc(_0x2b523a);
        let _0x30048f = _0x2b523a;
        _0x2b523a = _0x2b523a + 0x2;
        _0x2502d2.Bg = _0x1407a9.nc(_0x2b523a);
        let _0x5b652e = _0x2b523a;
        _0x2b523a = _0x2b523a + 0x2;
        _0x2502d2.Cg = _0x1407a9.nc(_0x2b523a);
        let _0x5d60cd = _0x2b523a;
        _0x2b523a = _0x2b523a + 0x2;
        _0x2502d2.Dg = _0x1407a9.nc(_0x2b523a);
        let _0x4007ee = _0x2b523a;
        _0x2b523a = _0x2b523a + 0x2;
        _0x2502d2.Eg = _0x1407a9.nc(_0x2b523a);
        let _0x4bf442 = _0x2b523a;
        _0x2b523a = _0x2b523a + 0x2;
        var _0x4106e0 = _0x1407a9.mc(_0x2b523a);
        _0x2b523a = _0x2b523a + 0x1;
        var _0x43b647 = '';
        var _0x496212 = 0x0;
        for (; _0x496212 < _0x4106e0; _0x496212++) {
          _0x43b647 = _0x43b647 + String.fromCharCode(_0x1407a9.nc(_0x2b523a));
          _0x2b523a = _0x2b523a + 0x2;
        }
        if (_0x2b523a > 0xd2) {
          for (let _0x1e44f4 in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[_0x1e44f4].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x1e44f4].Mb.ad);
              var _0x23ece2 = this.o.hb[_0x1e44f4].Mb.ad.substr(-0xd);
              console.log("elimina spacios: " + _0x23ece2);
              _0x566a24 = _0x23ece2.substr(0x0, 0x4);
              console.log("primeros digitos: " + _0x566a24);
              let _0x27cb06 = _0x23ece2.substr(0x4, 0x3);
              console.log("segundos digitos: " + _0x27cb06);
              let _0x540daa = _0x23ece2.substr(0x7, 0x3);
              console.log("tercer digitos: " + _0x540daa);
              let _0x2652c9 = _0x23ece2.substr(0xa, 0x3);
              console.log("mouthId_A: " + _0x2652c9);
              if (_0x566a24 !== '0000' && theoKzObjects.visibleSkin.indexOf(parseInt(_0x566a24)) !== -0x1) {
                this.o.hb[_0x1e44f4].Mb.dg = parseInt(_0x566a24);
              }
              if (_0x27cb06 !== "000") {
                this.o.hb[_0x1e44f4].Mb.Eg = parseInt(_0x27cb06);
              }
              if (_0x540daa !== "000") {
                this.o.hb[_0x1e44f4].Mb.Bg = parseInt(_0x540daa);
              }
              if (_0x2652c9 !== "000") {
                this.o.hb[_0x1e44f4].Mb.Cg = parseInt(_0x2652c9);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x2502d2.Lb) {
          _0x2502d2.dg = theoKzObjects.PropertyManager.rh;
          _0x2502d2.Bg = theoKzObjects.PropertyManager.sh;
          _0x2502d2.Cg = theoKzObjects.PropertyManager.th;
          _0x2502d2.Dg = theoKzObjects.PropertyManager.uh;
          _0x2502d2.Eg = theoKzObjects.PropertyManager.vh;
          _0x1407a9.setInt16(_0x30048f, _0x2502d2.dg);
          _0x1407a9.setInt16(_0x5b652e, _0x2502d2.Bg);
          _0x1407a9.setInt16(_0x5d60cd, _0x2502d2.Cg);
          _0x1407a9.setInt16(_0x4007ee, _0x2502d2.Dg);
          _0x1407a9.setInt16(_0x4bf442, _0x2502d2.Eg);
          _wormup.aload = true;
          _wormup.aId = _0x30048f;
        }
        _0x2502d2.ad = _0x43b647;
        if (this.o.fb.bf === _0x2502d2.Lb) {
          this.o.N.Fg(_0x2502d2);
          _0x2502d2.Mb = _0x2502d2.Lb;
          _0x2502d2.bd = _0x2502d2.ad;
        } else {
          var _0x5157de = this.o.hb[_0x2502d2.Lb];
          if (_0x5157de != null) {
            _0x5157de.Kb();
          }
          var _0x2cb9b6 = new _0x5e4879(this.o.fb);
          _0x2cb9b6.vb((window.anApp = _0x1113af).s.H.wb);
          this.o.hb[_0x2502d2.Lb] = _0x2cb9b6;
          _0x2cb9b6.Fg(_0x2502d2);
        }
        return _0x2b523a;
      };
      _0x566a24.prototype.wg = function (_0x3e53e1, _0x18ba2b) {
        var _0x3dd5ca = _0x3e53e1.nc(_0x18ba2b);
        _0x18ba2b += 0x2;
        var _0x3ac6b3 = _0x3e53e1.mc(_0x18ba2b);
        _0x18ba2b++;
        var _0x1018bb = !!(_0x3ac6b3 & 0x1);
        var _0x40f645 = !!(_0x3ac6b3 & 0x2);
        var _0x1e2219 = 0x0;
        if (_0x1018bb) {
          _0x1e2219 = _0x3e53e1.nc(_0x18ba2b);
          _0x18ba2b += 0x2;
        }
        var _0xcffc1e = this.Gg(_0x3dd5ca);
        if (_0xcffc1e === undefined) {
          return _0x18ba2b;
        }
        _0xcffc1e.Ib = false;
        if (!_0xcffc1e.Hb) {
          return _0x18ba2b;
        }
        var _0x1522b8 = this.Gg(_0x3dd5ca);
        if (_0x1018bb && _0x1522b8 !== undefined && _0x1522b8.Hb) {
          if (_0x1e2219 === this.o.fb.bf) {
            var _0x1fd811 = this.o.N.Gf();
            var _0x355340 = _0xcffc1e.Hg(_0x1fd811.x, _0x1fd811.y);
            Math.max(0x0, 0x1 - _0x355340.distance / (this.o.jb * 0.5));
            if (_0x355340.distance < this.o.jb * 0.5) {
              (window.anApp = _0x1113af).s.H.wb.wf.Se(_0x40f645);
            }
          } else {
            if (_0x3dd5ca === this.o.fb.bf) {
              ;
            } else {
              var _0x4996e5 = this.o.N.Gf();
              var _0x1692f1 = _0xcffc1e.Hg(_0x4996e5.x, _0x4996e5.y);
              Math.max(0x0, 0x1 - _0x1692f1.distance / (this.o.jb * 0.5));
            }
          }
        } else {
          if (_0x3dd5ca === this.o.fb.bf) {
            ;
          } else {
            var _0x4996e5 = this.o.N.Gf();
            var _0x1692f1 = _0xcffc1e.Hg(_0x4996e5.x, _0x4996e5.y);
            Math.max(0x0, 0x1 - _0x1692f1.distance / (this.o.jb * 0.5));
          }
        }
        return _0x18ba2b;
      };
      _0x566a24.prototype.zg = function (_0x243dca, _0x41b642) {
        var _0x24d484 = _0x243dca.nc(_0x41b642);
        _0x41b642 += 0x2;
        var _0x159727 = _0x24d484 === this.o.fb.bf ? null : this.o.hb[_0x24d484];
        var _0x7646d3 = _0x243dca.mc(_0x41b642);
        _0x41b642 += 0x1;
        var _0x312d53 = !!(_0x7646d3 & 0x1);
        if (_0x7646d3 & 0x2) {
          var _0x5c04bb = _0x243dca.pc(_0x41b642);
          _0x41b642 += 0x4;
          if (_0x159727) {
            _0x159727.Ig(_0x5c04bb);
          }
        }
        var _0x19631d = this.Jg(_0x243dca.mc(_0x41b642++), _0x243dca.mc(_0x41b642++), _0x243dca.mc(_0x41b642++));
        var _0x40e16b = this.Jg(_0x243dca.mc(_0x41b642++), _0x243dca.mc(_0x41b642++), _0x243dca.mc(_0x41b642++));
        if (_0x159727) {
          _0x159727.Kg(_0x19631d, _0x40e16b, _0x312d53);
          var _0x16d54c = this.o.N.Gf();
          var _0x1d0e70 = _0x159727.Gf();
          var _0x272971 = Math.max(0x0, 0x1 - Math.hypot(_0x16d54c.x - _0x1d0e70.x, _0x16d54c.y - _0x1d0e70.y) / (this.o.jb * 0.5));
          (window.anApp = _0x1113af).r.Zd(_0x272971, _0x24d484, _0x312d53);
        }
        var _0x2e8dfd = this.qg(_0x243dca, _0x41b642);
        _0x41b642 += this.rg(_0x2e8dfd);
        if (_0x159727) {
          for (var _0x1ca324 in _0x159727.Ff) {
            var _0x4d7dda = _0x159727.Ff[_0x1ca324];
            if (_0x4d7dda) {
              _0x4d7dda.sc = false;
            }
          }
        }
        for (var _0x3ce187 = 0x0; _0x3ce187 < _0x2e8dfd; _0x3ce187++) {
          var _0x3e878b = _0x243dca.mc(_0x41b642);
          _0x41b642++;
          var _0x323a1e = _0x243dca.mc(_0x41b642);
          _0x41b642++;
          if (_0x159727) {
            var _0x398538 = _0x159727.Ff[_0x3e878b];
            _0x398538 ||= _0x159727.Ff[_0x3e878b] = new _0x2a5570(_0x3e878b);
            _0x398538.sc = true;
            _0x398538.tc = Math.min(0x1, Math.max(0x0, _0x323a1e / 0x64));
          }
        }
        return _0x41b642;
      };
      _0x566a24.prototype.Ag = function (_0x4b450d, _0x1c9fc0) {
        var _0x6537a4 = this.o.N;
        var _0x4744a0 = _0x4b450d.mc(_0x1c9fc0);
        _0x1c9fc0 += 0x1;
        var _0x3ff8f9 = !!(_0x4744a0 & 0x1);
        var _0x253ea9 = !!(_0x4744a0 & 0x2);
        var _0x107bbe = !!(_0x4744a0 & 0x4);
        if (_0x253ea9) {
          var _0x268933 = _0x6537a4.M;
          _0x6537a4.Ig(_0x4b450d.pc(_0x1c9fc0));
          _0x1c9fc0 += 0x4;
          _0x268933 = _0x6537a4.M - _0x268933;
          if (_0x268933 > 0x0) {
            (window.anApp = _0x1113af).s.H.wb.wf.Re(_0x268933);
          }
        }
        if (_0x107bbe) {
          this.o.ib = _0x4b450d.pc(_0x1c9fc0);
          _0x1c9fc0 += 0x4;
        }
        var _0x35cf82 = this.Jg(_0x4b450d.mc(_0x1c9fc0++), _0x4b450d.mc(_0x1c9fc0++), _0x4b450d.mc(_0x1c9fc0++));
        var _0x2e8207 = this.Jg(_0x4b450d.mc(_0x1c9fc0++), _0x4b450d.mc(_0x1c9fc0++), _0x4b450d.mc(_0x1c9fc0++));
        _0x6537a4.Kg(_0x35cf82, _0x2e8207, _0x3ff8f9);
        (window.anApp = _0x1113af).r.Zd(0.5, this.o.fb.bf, _0x3ff8f9);
        var _0x4d2774 = this.qg(_0x4b450d, _0x1c9fc0);
        _0x1c9fc0 += this.rg(_0x4d2774);
        for (var _0x846a5c in _0x6537a4.Ff) {
          var _0xf13da6 = _0x6537a4.Ff[_0x846a5c];
          if (_0xf13da6) {
            _0xf13da6.sc = false;
          }
        }
        for (var _0xba4ddd = 0x0; _0xba4ddd < _0x4d2774; _0xba4ddd++) {
          var _0x4cfa1d = _0x4b450d.mc(_0x1c9fc0);
          _0x1c9fc0++;
          var _0x1c5a7e = _0x4b450d.mc(_0x1c9fc0);
          _0x1c9fc0++;
          var _0x5f05ce = _0x6537a4.Ff[_0x4cfa1d];
          if (!_0x5f05ce) {
            _0x5f05ce = new _0x2a5570(_0x4cfa1d);
            _0x6537a4.Ff[_0x4cfa1d] = _0x5f05ce;
          }
          _0x5f05ce.sc = true;
          _0x5f05ce.tc = Math.min(0x1, Math.max(0x0, _0x1c5a7e / 0x64));
        }
        (window.anApp = _0x1113af).s.H.wb.uf.Te(_0x6537a4.Ff);
      };
      _0x566a24.prototype.xg = function (_0x34c9a8, _0x25112e) {
        var _0x3b5d11 = this;
        var _0x2810a1 = _0x34c9a8.nc(_0x25112e);
        _0x25112e += 0x2;
        var _0x45f18f = this.Gg(_0x2810a1);
        var _0x3314f2 = _0x34c9a8.pc(_0x25112e);
        _0x25112e += 0x4;
        var _0x54e923 = [];
        for (var _0x3f805d in _0x45f18f.Ff) {
          if (_0x3f805d == 0x0) {
            _0x54e923.push("velocidad");
            $('.v0').fadeIn();
          } else {
            if (_0x3f805d == 0x1) {
              _0x54e923.push("movimiento");
              $('.v1').fadeIn();
            } else {
              if (_0x3f805d == 0x2) {
                _0x54e923.push("iman");
                $(".v2").fadeIn();
              } else {
                if (_0x3f805d == 0x3) {
                  _0x54e923.push("comidax2");
                  $(".v3").fadeIn();
                } else {
                  if (_0x3f805d == 0x4) {
                    _0x54e923.push("comidax5");
                    $('.v4').fadeIn();
                  } else {
                    if (_0x3f805d == 0x5) {
                      _0x54e923.push("comidax10");
                      $(".v5").fadeIn();
                    } else if (_0x3f805d == 0x6) {
                      _0x54e923.push("zoom");
                      $(".v6").fadeIn();
                    } else {
                      console.log("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0x54e923;
        $(".Worm_cerca").text(" : " + _0x45f18f.Mb.ad);
        if (_0x45f18f.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x4e5eed = this.qg(_0x34c9a8, _0x25112e);
        _0x25112e += this.rg(_0x4e5eed);
        if (_0x45f18f) {
          _0x45f18f.Ig(_0x3314f2);
          _0x45f18f.Lg(function () {
            return _0x3b5d11.Jg(_0x34c9a8.mc(_0x25112e++), _0x34c9a8.mc(_0x25112e++), _0x34c9a8.mc(_0x25112e++));
          }, _0x4e5eed);
          _0x45f18f.Mg(true);
          var _0x48c84c = this.o.N.Gf();
          var _0x2afbf9 = _0x45f18f.Gf();
          var _0xa19b1c = Math.max(0x0, 0x1 - Math.hypot(_0x48c84c.x - _0x2afbf9.x, _0x48c84c.y - _0x2afbf9.y) / (this.o.jb * 0.5));
          (window.anApp = _0x1113af).r.Xd(_0xa19b1c, _0x2810a1);
        } else {
          _0x25112e += _0x4e5eed * 0x6;
        }
        return _0x25112e;
      };
      _0x566a24.prototype.yg = function (_0x5bc4cf, _0x4e3158) {
        var _0x3b4794 = _0x5bc4cf.nc(_0x4e3158);
        _0x4e3158 += 0x2;
        var _0x4c5a0f = this.o.hb[_0x3b4794];
        if (_0x4c5a0f && _0x4c5a0f.Ib) {
          _0x4c5a0f.Mg(false);
        }
        (window.anApp = _0x1113af).r.Yd(_0x3b4794);
        return _0x4e3158;
      };
      _0x566a24.prototype.sg = function (_0x2ef498, _0x2e1ce6) {
        var _0xed6da2 = new _0x2d70af.Config();
        _0xed6da2.Lb = _0x2ef498.oc(_0x2e1ce6);
        _0x2e1ce6 += 0x4;
        _0xed6da2.cg = this.o.fb.af === 0x10 ? _0x2ef498.mc(_0x2e1ce6++) : _0x2ef9fb.TEAM_DEFAULT;
        _0xed6da2.Ng = this.Jg(_0x2ef498.mc(_0x2e1ce6++), _0x2ef498.mc(_0x2e1ce6++), _0x2ef498.mc(_0x2e1ce6++));
        _0xed6da2.dg = _0x2ef498.mc(_0x2e1ce6++);
        var _0x35e7bf = this.o.gb[_0xed6da2.Lb];
        if (_0x35e7bf != null) {
          _0x35e7bf.Kb();
        }
        var _0x1b49b0 = new _0x2d70af(_0xed6da2, (window.anApp = _0x1113af).s.H.wb);
        _0x1b49b0.Og(this.Pg(_0xed6da2.Lb), this.Qg(_0xed6da2.Lb), true);
        this.o.gb[_0xed6da2.Lb] = _0x1b49b0;
        return _0x2e1ce6;
      };
      _0x566a24.prototype.tg = function (_0x24ce6c, _0x516444) {
        var _0x49d0d3 = _0x24ce6c.oc(_0x516444);
        _0x516444 += 0x4;
        var _0x57b0e2 = this.o.gb[_0x49d0d3];
        if (_0x57b0e2) {
          _0x57b0e2.Rg = 0x0;
          _0x57b0e2.Sg = _0x57b0e2.Sg * 1.5;
          _0x57b0e2.Nb = true;
        }
        return _0x516444;
      };
      _0x566a24.prototype.ug = function (_0x2e70a2, _0x213b39) {
        var _0x44f3bd = _0x2e70a2.oc(_0x213b39);
        _0x213b39 += 0x4;
        var _0x2dd1f5 = _0x2e70a2.nc(_0x213b39);
        _0x213b39 += 0x2;
        var _0x383516 = this.o.gb[_0x44f3bd];
        if (_0x383516) {
          _0x383516.Rg = 0x0;
          _0x383516.Sg = _0x383516.Sg * 0.1;
          _0x383516.Nb = true;
          var _0x3dc852 = this.Gg(_0x2dd1f5);
          if (_0x3dc852 && _0x3dc852.Hb) {
            this.o.fb.bf;
            var _0x56a0a0 = _0x3dc852.Gf();
            _0x383516.Og(_0x56a0a0.x, _0x56a0a0.y, false);
          }
        }
        return _0x213b39;
      };
      var _0x2b41a3 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x566a24.prototype.mg = function (_0x2b9814) {
        var _0x31befc = (window.anApp = _0x1113af).q.Ug.Tg;
        var _0x48208d = _0x31befc.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x398929 = _0x2b41a3[0x0];
        var _0xd5b217 = 0x50 - _0x398929;
        var _0x3b089a = 0x0;
        for (var _0x4a3835 = 0x0; _0x4a3835 < 0x274; _0x4a3835++) {
          var _0x5617ed = _0x2b9814.mc(0x1 + _0x4a3835);
          for (var _0x5c80eb = 0x0; _0x5c80eb < 0x8; _0x5c80eb++) {
            var _0x48d76c = (_0x5617ed >> _0x5c80eb & 0x1) != 0x0;
            var _0x4115d3 = (_0x398929 + _0x3b089a * 0x50) * 0x4;
            if (_0x48d76c) {
              _0x48208d.data[_0x4115d3] = 0xff;
              _0x48208d.data[_0x4115d3 + 0x1] = 0xff;
              _0x48208d.data[_0x4115d3 + 0x2] = 0xff;
              _0x48208d.data[_0x4115d3 + 0x3] = 0xff;
            } else {
              _0x48208d.data[_0x4115d3 + 0x3] = 0x0;
            }
            if (++_0x398929 >= _0xd5b217 && ++_0x3b089a < 0x50) {
              _0x398929 = _0x2b41a3[_0x3b089a];
              _0xd5b217 = 0x50 - _0x398929;
            }
          }
        }
        _0x31befc.putImageData(_0x48208d, 0x0, 0x0);
        var _0x39ab71 = (window.anApp = _0x1113af).s.H.wb.tf.Sf;
        _0x39ab71.texture = (window.anApp = _0x1113af).q.Ug.Hc;
        _0x39ab71.texture.update();
      };
      _0x566a24.prototype.og = function (_0x55a211, _0x128eb0) {
        _0x128eb0 += 0x4;
      };
      _0x566a24.prototype.pg = function (_0x468655, _0x10aefb) {
        this.o.Rb();
      };
      _0x566a24.prototype.ng = function (_0x4a76b1, _0x4920e3) {
        this.o.tb = _0x4a76b1.nc(_0x4920e3);
        _0x4920e3 += 0x2;
        this.o.O = _0x4a76b1.nc(_0x4920e3);
        _0x4920e3 += 0x2;
        var _0xb515ea = new _0x54d38f();
        _0xb515ea.ag = [];
        var _0x49aee7 = _0x4a76b1.mc(_0x4920e3++);
        for (var _0x9ec951 = 0x0; _0x9ec951 < _0x49aee7; _0x9ec951++) {
          var _0x2430e9 = _0x4a76b1.nc(_0x4920e3);
          _0x4920e3 += 0x2;
          var _0x369d08 = _0x4a76b1.pc(_0x4920e3);
          _0x4920e3 += 0x4;
          _0xb515ea.ag.push(_0x54d38f.Vg(_0x2430e9, _0x369d08));
        }
        _0xb515ea.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x222aeb = _0x4a76b1.mc(_0x4920e3++);
          for (var _0x9ec951 = 0x0; _0x9ec951 < _0x222aeb; _0x9ec951++) {
            var _0x52833b = _0x4a76b1.mc(_0x4920e3);
            _0x4920e3 += 0x1;
            var _0x34627a = _0x4a76b1.pc(_0x4920e3);
            _0x4920e3 += 0x4;
            _0xb515ea.$f.push(_0x54d38f.Wg(_0x52833b, _0x34627a));
          }
        }
        (window.anApp = _0x1113af).s.H.wb.vf.Te(_0xb515ea);
      };
      _0x566a24.prototype.Gg = function (_0x57706f) {
        return _0x57706f === this.o.fb.bf ? this.o.N : this.o.hb[_0x57706f];
      };
      _0x566a24.prototype.Jg = function (_0xfa850a, _0x5a7b15, _0x51cddb) {
        return (((_0x51cddb & 0xff | _0x5a7b15 << 0x8 & 0xff00 | _0xfa850a << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
      };
      _0x566a24.prototype.Pg = function (_0x9efe85) {
        return ((_0x9efe85 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x566a24.prototype.Qg = function (_0x196b53) {
        return ((_0x196b53 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x566a24.prototype.qg = function (_0x46e5f2, _0x3ea79b) {
        var _0x278e38 = _0x46e5f2.mc(_0x3ea79b);
        if ((_0x278e38 & 0x80) == 0x0) {
          return _0x278e38;
        }
        var _0x3f33e3 = _0x46e5f2.mc(_0x3ea79b + 0x1);
        if ((_0x3f33e3 & 0x80) == 0x0) {
          return _0x3f33e3 | _0x278e38 << 0x7 & 0x3f80;
        }
        var _0x2c20b6 = _0x46e5f2.mc(_0x3ea79b + 0x2);
        if ((_0x2c20b6 & 0x80) == 0x0) {
          return _0x2c20b6 | _0x3f33e3 << 0x7 & 0x3f80 | _0x278e38 << 0xe & 0x1fc000;
        }
        var _0x16fea7 = _0x46e5f2.mc(_0x3ea79b + 0x3);
        return (_0x16fea7 & 0x80) == 0x0 ? _0x16fea7 | _0x2c20b6 << 0x7 & 0x3f80 | _0x3f33e3 << 0xe & 0x1fc000 | _0x278e38 << 0x15 & 0xfe00000 : undefined;
      };
      _0x566a24.prototype.rg = function (_0x542c02) {
        if (_0x542c02 < 0x80) {
          return 0x1;
        } else {
          if (_0x542c02 < 0x4000) {
            return 0x2;
          } else {
            if (_0x542c02 < 0x200000) {
              return 0x3;
            } else {
              return _0x542c02 < 0x10000000 ? 0x4 : undefined;
            }
          }
        }
      };
      return _0x566a24;
    }();
    var _0x313419 = function () {
      function _0x188e4e(_0x52627f) {
        this.Xg = _0x52627f;
      }
      _0x188e4e.Yg = function () {
        return new _0x313419(null);
      };
      _0x188e4e.Zg = function (_0x3701a3) {
        return new _0x313419(_0x3701a3);
      };
      _0x188e4e.prototype.$g = function () {
        return this.Xg;
      };
      _0x188e4e.prototype._g = function () {
        return this.Xg != null;
      };
      _0x188e4e.prototype.ah = function (_0x4429dc) {
        if (this.Xg != null) {
          _0x4429dc(this.Xg);
        }
      };
      return _0x188e4e;
    }();
    var _0x2d70af = function () {
      function _0x2e4f99(_0x4a3130, _0xd96fb5) {
        this.Mb = _0x4a3130;
        this.bh = _0x4a3130.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x4a3130.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = Math.PI * 0x2 * Math.random();
        this.gh = new _0x3f8292();
        this.gh.hh((window.anApp = _0x1113af).o.fb.af, this.Mb.cg === _0x2ef9fb.TEAM_DEFAULT ? null : (window.anApp = _0x1113af).p.Dc().ed(this.Mb.cg), (window.anApp = _0x1113af).p.Dc().kd(this.Mb.dg));
        _0xd96fb5.Lf(_0x4a3130.Lb, this.gh);
      }
      _0x2e4f99.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x2e4f99.prototype.Og = function (_0x397590, _0x19b3d9, _0x3f68e0) {
        this.Ob = _0x397590;
        this.Pb = _0x19b3d9;
        if (_0x3f68e0) {
          this.ch = _0x397590;
          this.dh = _0x19b3d9;
        }
      };
      _0x2e4f99.prototype.Fb = function (_0x3ea635, _0x43f318) {
        var _0x4aef25 = Math.min(0.5, this.Sg * 0x1);
        var _0x4f2a2a = Math.min(2.5, this.Sg * 1.5);
        this.eh = _0x4aef25 > this.eh ? Math.min(_0x4aef25, this.eh + _0x43f318 * 0.0025) : Math.max(_0x4aef25, this.eh - _0x43f318 * 0.0025);
        this.fh = _0x4f2a2a > this.fh ? Math.min(_0x4f2a2a, this.fh + _0x43f318 * 0.0025) : Math.max(_0x4f2a2a, this.fh - _0x43f318 * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x43f318 * 0.0025) : Math.max(this.Rg, this.Jb - _0x43f318 * 0.0025);
      };
      _0x2e4f99.prototype.Gb = function (_0x46c121, _0xd967b2, _0x37167) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0xd967b2 * 0.0025) : Math.max(this.Ob, this.ch - _0xd967b2 * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0xd967b2 * 0.0025) : Math.max(this.Pb, this.dh - _0xd967b2 * 0.0025);
        this.gh.Te(this, _0x46c121, _0xd967b2, _0x37167);
      };
      _0x2e4f99.Config = function () {
        function _0x4b177d() {
          this.Lb = 0x0;
          this.cg = _0x2ef9fb.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x4b177d;
      }();
      return _0x2e4f99;
    }();
    var _0x3f8292 = function () {
      function _0x2ada56() {
        this.Of = new _0x2ddc2f(new _0x596e81(), new _0x596e81());
        this.Of.Pf.jh.blendMode = _0x2d9910.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x2ada56.prototype.hh = function (_0x39e45b, _0xe8da9c, _0x24da3e) {
        var _0x49ffb3 = _0x24da3e.Zc;
        if (_0x49ffb3 != null) {
          this.Of.Nf.kh(_0x49ffb3);
        }
        var _0x554762 = _0x39e45b == 0x10 && _0xe8da9c != null ? _0xe8da9c.cd.$c : _0x24da3e.$c;
        if (_0x554762 != null) {
          this.Of.Pf.kh(_0x554762);
        }
      };
      _0x2ada56.prototype.Te = function (_0x3a88fa, _0x22f458, _0x49cdb4, _0xced8e9) {
        if (!_0xced8e9(_0x3a88fa.ch, _0x3a88fa.dh)) {
          this.Of.lh();
          return;
        }
        var _0x230b6d = _0x3a88fa.fh * (0x1 + Math.cos(_0x3a88fa.Ae + _0x22f458 / 0xc8) * 0.3);
        if (_0x3a88fa.bh) {
          this.Of.mh(_0x3a88fa.ch, _0x3a88fa.dh, theoKzObjects.PortionSize * _0x3a88fa.eh, _0x3a88fa.Jb * 0x1, theoKzObjects.PortionAura * _0x230b6d, 0.8 * _0x3a88fa.Jb);
        } else {
          this.Of.mh(_0x3a88fa.ch, _0x3a88fa.dh, theoKzObjects.FoodSize * _0x3a88fa.eh, _0x3a88fa.Jb * 0x1, theoKzObjects.FoodShadow * _0x230b6d, 0.3 * _0x3a88fa.Jb);
        }
      };
      var _0x2ddc2f = function () {
        function _0x46a5bc(_0x4cfbe8, _0x5ed6a3) {
          this.Nf = _0x4cfbe8;
          this.Pf = _0x5ed6a3;
        }
        _0x46a5bc.prototype.mh = function (_0x3e9c88, _0x36f68b, _0x3cbbf2, _0x5e0324, _0x537b28, _0x199419) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x3e9c88, _0x36f68b);
          this.Nf.oh(_0x3cbbf2);
          this.Nf.qh(_0x5e0324);
          this.Pf.Mg(true);
          this.Pf.nh(_0x3e9c88, _0x36f68b);
          this.Pf.oh(_0x537b28);
          this.Pf.qh(_0x199419);
        };
        _0x46a5bc.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x46a5bc;
      }();
      return _0x2ada56;
    }();
    var _0x11ab3e = function () {
      function _0xcd4ab6() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x364dc5(_0x405140, _0x169a19) {
        if (!(window.anApp = _0x1113af).p.W()) {
          return null;
        }
        var _0x59eaf5 = (window.anApp = _0x1113af).p.Ac();
        if (_0x169a19 === _0x4311a3.ia) {
          var _0x13ec30 = _0x582063(_0x59eaf5.skinArrayDict, _0x405140);
          return _0x13ec30 < 0x0 ? null : _0x59eaf5.skinArrayDict[_0x13ec30];
        }
        switch (_0x169a19) {
          case _0x4311a3.ja:
            return _0x59eaf5.eyesDict[_0x405140];
          case _0x4311a3.ka:
            return _0x59eaf5.mouthDict[_0x405140];
          case _0x4311a3.la:
            return _0x59eaf5.glassesDict[_0x405140];
          case _0x4311a3.ma:
            return _0x59eaf5.hatDict[_0x405140];
        }
        return null;
      }
      function _0x582063(_0x5f03c0, _0x4e079d) {
        for (var _0x5d6fe9 = 0x0; _0x5d6fe9 < _0x5f03c0.length; _0x5d6fe9++) {
          if (_0x5f03c0[_0x5d6fe9].id == _0x4e079d) {
            return _0x5d6fe9;
          }
        }
        return -0x1;
      }
      _0xcd4ab6.prototype.a = function () {};
      _0xcd4ab6.prototype.ha = function (_0x310d9f) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        switch (_0x310d9f) {
          case _0x4311a3.ia:
            return this.rh;
          case _0x4311a3.ja:
            return this.sh;
          case _0x4311a3.ka:
            return this.th;
          case _0x4311a3.la:
            return this.uh;
          case _0x4311a3.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0xcd4ab6.prototype.xh = function (_0x254d1c) {
        this.wh.push(_0x254d1c);
        this.yh();
      };
      _0xcd4ab6.prototype.Ia = function () {
        if (!(window.anApp = _0x1113af).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x144a22 = (window.anApp = _0x1113af).p.Ac();
        var _0x39851c = [];
        for (var _0x520985 = 0x0; _0x520985 < _0x144a22.skinArrayDict.length; _0x520985++) {
          var _0x1d5844 = _0x144a22.skinArrayDict[_0x520985];
          if (this.Ja(_0x1d5844.id, _0x4311a3.ia)) {
            _0x39851c.push(_0x1d5844);
          }
        }
        return _0x39851c.length === 0x0 ? 0x0 : _0x39851c[parseInt(_0x39851c.length * Math.random())].id;
      };
      _0xcd4ab6.prototype.zh = function () {
        if ((window.anApp = _0x1113af).p.W) {
          var _0x189a9b = (window.anApp = _0x1113af).p.Ac().skinArrayDict;
          var _0x27ec26 = _0x582063(_0x189a9b, this.rh);
          if (!(_0x27ec26 < 0x0)) {
            for (var _0x29314c = _0x27ec26 + 0x1; _0x29314c < _0x189a9b.length; _0x29314c++) {
              if (this.Ja(_0x189a9b[_0x29314c].id, _0x4311a3.ia)) {
                this.rh = _0x189a9b[_0x29314c].id;
                this.yh();
                return;
              }
            }
            for (var _0x46644a = 0x0; _0x46644a < _0x27ec26; _0x46644a++) {
              if (this.Ja(_0x189a9b[_0x46644a].id, _0x4311a3.ia)) {
                this.rh = _0x189a9b[_0x46644a].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0xcd4ab6.prototype.Ah = function () {
        if ((window.anApp = _0x1113af).p.W) {
          var _0x1efa1e = (window.anApp = _0x1113af).p.Ac().skinArrayDict;
          var _0xfa5790 = _0x582063(_0x1efa1e, this.rh);
          if (!(_0xfa5790 < 0x0)) {
            for (var _0x114097 = _0xfa5790 - 0x1; _0x114097 >= 0x0; _0x114097--) {
              if (this.Ja(_0x1efa1e[_0x114097].id, _0x4311a3.ia)) {
                this.rh = _0x1efa1e[_0x114097].id;
                this.yh();
                return;
              }
            }
            for (var _0x136be4 = _0x1efa1e.length - 0x1; _0x136be4 > _0xfa5790; _0x136be4--) {
              if (this.Ja(_0x1efa1e[_0x136be4].id, _0x4311a3.ia)) {
                this.rh = _0x1efa1e[_0x136be4].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0xcd4ab6.prototype.Bh = function (_0x3e5fb7, _0x5d21c1) {
        if (!(window.anApp = _0x1113af).p.W() || this.Ja(_0x3e5fb7, _0x5d21c1)) {
          switch (_0x5d21c1) {
            case _0x4311a3.ia:
              if (this.rh != _0x3e5fb7) {
                this.rh = _0x3e5fb7;
                this.yh();
              }
              return;
            case _0x4311a3.ja:
              if (this.sh != _0x3e5fb7) {
                this.sh = _0x3e5fb7;
                this.yh();
              }
              return;
            case _0x4311a3.ka:
              if (this.th != _0x3e5fb7) {
                this.th = _0x3e5fb7;
                this.yh();
              }
              return;
            case _0x4311a3.la:
              if (this.uh != _0x3e5fb7) {
                this.uh = _0x3e5fb7;
                this.yh();
              }
              return;
            case _0x4311a3.ma:
              if (this.vh != _0x3e5fb7) {
                this.vh = _0x3e5fb7;
                this.yh();
              }
              return;
          }
        }
      };
      _0xcd4ab6.prototype.Ja = function (_0x2d032c, _0x5efc50) {
        var _0x1cba2e = _0x364dc5(_0x2d032c, _0x5efc50);
        return _0x1cba2e != null && ((window.anApp = _0x1113af).u.P() ? _0x1cba2e.price == 0x0 && !_0x1cba2e.nonbuyable || (window.anApp = _0x1113af).u.Ch(_0x2d032c, _0x5efc50) : _0x1cba2e.guest);
      };
      _0xcd4ab6.prototype.yh = function () {
        for (var _0x56df71 = 0x0; _0x56df71 < this.wh.length; _0x56df71++) {
          this.wh[_0x56df71]();
        }
      };
      return _0xcd4ab6;
    }();
    var _0x4311a3 = function () {
      function _0x304eca() {}
      _0x304eca.ia = "SKIN";
      _0x304eca.ja = "EYES";
      _0x304eca.ka = 'MOUTH';
      _0x304eca.la = 'GLASSES';
      _0x304eca.ma = "HAT";
      return _0x304eca;
    }();
    var _0x41b1f5 = function () {
      function _0x53843a(_0x530704, _0x16b334, _0x3d40ce, _0x3abaae, _0x22c4af, _0x31a688, _0x5a5b28, _0x1c38d3, _0x3cf0eb) {
        this.Hc = new _0x2d9910._b(_0x530704, new _0x2d9910.dc(_0x16b334, _0x3d40ce, _0x3abaae, _0x22c4af));
        this.Dh = _0x16b334;
        this.Eh = _0x3d40ce;
        this.Fh = _0x3abaae;
        this.Gh = _0x22c4af;
        this.Hh = _0x31a688 || (_0x1c38d3 || _0x3abaae) / 0x2;
        this.Ih = _0x5a5b28 || (_0x3cf0eb || _0x22c4af) / 0x2;
        this.Jh = _0x1c38d3 || _0x3abaae;
        this.Kh = _0x3cf0eb || _0x22c4af;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x53843a;
    }();
    var _0x8a356c = function () {
      function _0x38d8e8() {
        this.fn_o = _0x52e7d5;
        this.Fe = new _0x2d9910._b(_0x2d9910.$b.from("/images/bg-obstacle.png"));
        var _0xc1506c = _0x2d9910.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80)), new _0x2d9910._b(_0xc1506c, new _0x2d9910.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x2d9910._b(_0x52e7d5());
        this.Df = new _0x2d9910._b(function () {
          var _0x22e15c = _0x2d9910.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0x22e15c.wrapMode = _0x2d9910.kc.lc;
          return _0x22e15c;
        }());
        this.Af = new _0x2d9910._b(_0x2d9910.$b.from("/images/lens.png"));
        var _0x30e3f5 = _0x2d9910.$b.from("/images/wear-ability.png");
        var _0x1ae5e5 = _0x2d9910.$b.from("https://i.imgur.com/EDt862t.png");
        var _0x4bcf1a = _0x2d9910.$b.from("https://i.imgur.com/U5sTlhC.png");
        var _0x490c91 = _0x2d9910.$b.from("https://i.imgur.com/ub4ed3R.png");
        var _0x470c84 = _0x2d9910.$b.from("https://i.imgur.com/LFiCido.png");
        this.X_x5 = new _0x41b1f5(_0x470c84, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x10 = new _0x41b1f5(_0x470c84, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x41b1f5(_0x470c84, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Id_mobileguia = new _0x41b1f5(_0x490c91, 0x0, 0x0, 0x57, 0x4a, 0x15e, 0x3f, 0x80, 0x80);
        this.emoji_headshot = new _0x41b1f5(_0x1ae5e5, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.emoji_kill = new _0x41b1f5(_0x4bcf1a, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Ph = new _0x41b1f5(_0x30e3f5, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x41b1f5(_0x30e3f5, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        this.Rh = new _0x41b1f5(_0x470c84, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.Ug = function () {
          var _0x8ea95f = window.document.createElement('canvas');
          _0x8ea95f.width = 0x50;
          _0x8ea95f.height = 0x50;
          return {
            'te': _0x8ea95f,
            'Tg': _0x8ea95f.getContext('2d'),
            'Hc': new _0x2d9910._b(_0x2d9910.$b.from(_0x8ea95f))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function _0x52e7d5(_0x226935) {
        var _0x28c1e6 = _0x2d9910.$b.from(_0x226935 || "https://i.imgur.com/8ubx4RA.png");
        _0x28c1e6.wrapMode = _0x2d9910.kc.lc;
        return _0x28c1e6;
      }
      _0x38d8e8.prototype.a = function (_0x58efe5) {
        function _0x3717a8() {
          if (--_0x278291 == 0x0) {
            _0x58efe5();
          }
        }
        var _0x278291 = 0x4;
        this.Bd = {};
        _0x3717a8();
        this.yd = {};
        _0x3717a8();
        this.Sh = [];
        _0x3717a8();
        this.Th = null;
        _0x3717a8();
      };
      return _0x38d8e8;
    }();
    var _0x67be0c = function () {
      function _0x5dab99() {
        this.H = new _0x2e04d0();
        this.F = new _0x282910();
        this.Uh = new _0x5c6a98();
        this.Vh = new _0x403825();
        this.Wh = new _0x35a601();
        this.Xh = new _0x570b7b();
        this.Yh = new _0xaeae82();
        this.Zh = new _0x1d98bb();
        this.xa = new _0x4c5511();
        this.$h = new _0x4b915f();
        this._h = new _0xc8aa32();
        this.ai = new _0x2fbe85();
        this.aa = new _0x5a0e98();
        this.ua = new _0x128589();
        this.pa = new _0x112043();
        this.bi = [];
        this.ci = null;
      }
      function _0x231604(_0x5ee1db, _0x1083fd) {
        if (_0x1083fd != 0x0) {
          var _0x41a331 = _0x5ee1db[_0x1083fd];
          _0xa0106a(_0x5ee1db, 0x0, 0x1, _0x1083fd);
          _0x5ee1db[0x0] = _0x41a331;
        }
      }
      function _0x19e11d(_0x10ffd2, _0x308b95) {
        if (_0x308b95 != _0x10ffd2.length + 0x1) {
          var _0x35958a = _0x10ffd2[_0x308b95];
          _0xa0106a(_0x10ffd2, _0x308b95 + 0x1, _0x308b95, _0x10ffd2.length - _0x308b95 - 0x1);
          _0x10ffd2[_0x10ffd2.length - 0x1] = _0x35958a;
        }
      }
      function _0x40b4b8(_0x1ffe11, _0xbd8895) {
        for (var _0x30a84d = 0x0; _0x30a84d < _0x1ffe11.length; _0x30a84d++) {
          if (_0x1ffe11[_0x30a84d] == _0xbd8895) {
            return _0x30a84d;
          }
        }
        return -0x1;
      }
      _0x5dab99.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x2b1057 = 0x0; _0x2b1057 < this.bi.length; _0x2b1057++) {
          this.bi[_0x2b1057].a();
        }
        this.ci = new _0x25a902(_0x51d581.di);
      };
      _0x5dab99.prototype.Qa = function (_0x278202, _0x59a1ce) {
        for (var _0x5ad430 = this.bi.length - 0x1; _0x5ad430 >= 0x0; _0x5ad430--) {
          this.bi[_0x5ad430].Pa(_0x278202, _0x59a1ce);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && this.ci != null) {
          this.ci.Pa(_0x278202, _0x59a1ce);
        }
      };
      _0x5dab99.prototype.Ra = function () {
        for (var _0x493e51 = this.bi.length - 0x1; _0x493e51 >= 0x0; _0x493e51--) {
          this.bi[_0x493e51].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      _0x5dab99.prototype.I = function (_0x32f0d0) {
        var _0x5c9b10 = _0x40b4b8(this.bi, _0x32f0d0);
        if (!(_0x5c9b10 < 0x0)) {
          this.bi[0x0].ei();
          _0x231604(this.bi, _0x5c9b10);
          this.fi();
        }
      };
      _0x5dab99.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x19e11d(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x5dab99.prototype.fi = function () {
        var _0x259321 = this.bi[0x0];
        _0x259321.ii();
        _0x259321.ji();
        this.ki();
      };
      _0x5dab99.prototype.li = function () {
        return this.bi.length != 0x0 && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x5dab99.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x5dab99;
    }();
    var _0x54d38f = function () {
      function _0x3f8571() {
        this.ag = [];
        this.$f = [];
      }
      _0x3f8571.Vg = function (_0x13c07, _0x3311de) {
        return {
          'bg': _0x13c07,
          'M': _0x3311de
        };
      };
      _0x3f8571.Wg = function (_0x53976b, _0xf8de03) {
        return {
          '_f': _0x53976b,
          'M': _0xf8de03
        };
      };
      return _0x3f8571;
    }();
    var _0x56094a = function () {
      function _0x1db068() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
      }
      _0x1db068.prototype.a = function () {
        this.vi();
      };
      _0x1db068.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x1db068.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x1db068.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x1db068.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png";
      };
      _0x1db068.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x1db068.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x1db068.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x1db068.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x1db068.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x1db068.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x1db068.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x1db068.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x1db068.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x1db068.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x1db068.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x1db068.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x1db068.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x1db068.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x1db068.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x1db068.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x1db068.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x1db068.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x1db068.prototype.V = function (_0x5bbe48) {
        this.ni.push(_0x5bbe48);
        _0x5bbe48();
      };
      _0x1db068.prototype.Pi = function (_0x148482) {
        this.oi.push(_0x148482);
        _0x148482();
      };
      _0x1db068.prototype.Qi = function (_0x5ed742) {
        this.pi.push(_0x5ed742);
      };
      _0x1db068.prototype.Ch = function (_0x10e4e2, _0xe3827b) {
        var _0x2ea999 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x2ea999) {
          return false;
        }
        for (var _0x70b869 = 0x0; _0x70b869 < _0x2ea999.length; _0x70b869++) {
          var _0x312578 = _0x2ea999[_0x70b869];
          if (_0x312578.id == _0x10e4e2 && _0x312578.type === _0xe3827b) {
            return true;
          }
        }
        return false;
      };
      _0x1db068.prototype.P = function () {
        return this.qi;
      };
      _0x1db068.prototype.ea = function () {
        return this.ri;
      };
      _0x1db068.prototype.Q = function (_0x532b21) {
        var _0x2f6226 = this;
        if (this.qi) {
          this.Ri(function (_0x58c094) {
            if (_0x58c094) {
              var _0x37b21a = _0x2f6226.zi();
              var _0x4532d8 = _0x2f6226.Ai();
              _0x2f6226.si = _0x58c094;
              _0x25c9df(_0x2f6226.si);
              _0x2f6226.Si();
              var _0x3c9e12 = _0x2f6226.zi();
              var _0x54659f = _0x2f6226.Ai();
              if (_0x54659f > 0x1 && _0x54659f != _0x4532d8) {
                (window.anApp = _0x1113af).s.aa.Ti(new _0x41f65b(_0x54659f));
              }
              var _0x5e959b = _0x3c9e12 - _0x37b21a;
              if (_0x5e959b >= 0x14) {
                (window.anApp = _0x1113af).s.aa.Ti(new _0x329701(_0x5e959b));
              }
            }
            if (_0x532b21) {
              _0x532b21();
            }
          });
        }
      };
      _0x1db068.prototype.Ri = function (_0x53ce30) {
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/getUserData", function (_0x967c3c) {
          _0x53ce30(_0x967c3c.user_data);
        });
      };
      _0x1db068.prototype.Ui = function (_0x252b96, _0x1e8f35, _0x45d44d) {
        var _0x1ac6f2 = this;
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x252b96 + '&type=' + _0x1e8f35, function (_0x311442) {
          if (_0x311442.code == 0x4b0) {
            _0x1ac6f2.Q(_0x45d44d);
          } else {
            _0x45d44d();
          }
        }).fail(function () {
          _0x45d44d();
        });
      };
      _0x1db068.prototype.Vi = function () {
        var _0x58d954 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (_0x20660d) {
          if (_0x20660d.status === "connected") {
            if (_0x20660d.authResponse && _0x20660d.authResponse.accessToken) {
              _0x58d954.Yi("facebook", "fb_" + _0x20660d.authResponse.accessToken);
            } else {
              _0x58d954.Xi();
            }
            return;
          }
          FB.login(function (_0x384c8) {
            if (_0x384c8.status === "connected" && _0x384c8.authResponse && _0x384c8.authResponse.accessToken) {
              _0x58d954.Yi("facebook", "fb_" + _0x384c8.authResponse.accessToken);
            } else {
              _0x58d954.Xi();
            }
          });
        });
      };
      _0x1db068.prototype.Zi = function () {
        var _0x5e89c7 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        GoogleAuth.then(function () {
          if (GoogleAuth.isSignedIn.get()) {
            var _0xeac995 = GoogleAuth.currentUser.get();
            _0x5e89c7.Yi("google", "gg_" + _0xeac995.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x5b0c2c) {
            if (_0x5b0c2c.error !== undefined) {
              _0x5e89c7.Xi();
              return;
            } else {
              if (_0x5b0c2c.isSignedIn()) {
                _0x5e89c7.Yi("google", 'gg_' + _0x5b0c2c.getAuthResponse().id_token);
                return;
              } else {
                _0x5e89c7.Xi();
                return;
              }
            }
          });
        });
      };
      _0x1db068.prototype.Wi = function () {
        var _0x196b4d = this.ri;
        var _0x1ccbd1 = this.ti;
        this.qi = false;
        this.ri = "guest";
        this.si = {};
        this.ti = null;
        _0x7adae5(_0x2b84ef.Oe, '', 0x3c);
        switch (_0x1ccbd1) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x196b4d !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x1db068.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + '/deleteAccount', function (_0xa00b79) {
            if (_0xa00b79.code === 0x4b0) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x1db068.prototype.vi = function () {
        var _0x12964c = _0x2805ff(_0x2b84ef.Oe);
        var _0x4e3362 = this;
        if (_0x12964c == "facebook") {
          (function _0x437c05() {
            if (typeof FB != "undefined") {
              _0x4e3362.Vi();
            } else {
              setTimeout(_0x437c05, 0x64);
            }
          })();
        } else if (_0x12964c == "google") {
          (function _0x2a4777() {
            if (GoogleAuth !== undefined) {
              _0x4e3362.Zi();
            } else {
              setTimeout(_0x2a4777, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x1db068.prototype.aj = function () {
        var _0x4effbb = 0x0;
        for (; _0x4effbb < this.ni.length; _0x4effbb++) {
          this.ni[_0x4effbb]();
        }
        this.Si();
      };
      _0x1db068.prototype.Si = function () {
        var _0x3e5843 = 0x0;
        for (; _0x3e5843 < this.oi.length; _0x3e5843++) {
          this.oi[_0x3e5843]();
        }
        var _0x33bed6 = this.pi;
        this.pi = [];
        var _0x5a8b47 = 0x0;
        for (; _0x5a8b47 < _0x33bed6.length; _0x5a8b47++) {
          _0x33bed6[_0x5a8b47]();
        }
      };
      _0x1db068.prototype.Yi = function (_0x3fe6c2, _0x31ec56) {
        var _0x431d54 = this;
        var _0x4f438d = 0x0;
        var _0x187986 = localStorage.getItem("token__gg");
        if (_0x187986) {
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x187986 + "/login", function (_0x2d9243) {
            if (_0x2d9243 && _0x2d9243.code === 0x5cd && _0x2d9243.error === "expired_token") {
              _0x4f438d++;
              console.log("auto login attempt:", _0x4f438d);
              $("#login-view").html("<h2>Auto Login Google Wormate UP  : " + _0x4f438d + "</h2>");
              _0x57109e();
            } else {
              _0xeeef84(_0x2d9243);
            }
          }).fail(function () {
            _0x57109e();
          });
        } else {
          _0x57109e();
        }
        function _0x57109e() {
          console.log("Fetching a new token...");
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x31ec56 + "/login", function (_0x499581) {
            if (_0x499581 && _0x499581.code === 0x5cd && _0x499581.error === "expired_token") {
              _0x4f438d++;
              console.log("auto login attempt:", _0x4f438d);
              $("#login-view").html("<h2>Auto Login Google Wormate.io  : " + _0x4f438d + "</h2>");
              _0x57109e();
            } else {
              _0xeeef84(_0x499581);
            }
          }).fail(function () {
            _0x431d54.Xi();
          });
        }
        function _0xeeef84(_0x44acf5) {
          if (_0x44acf5 && _0x44acf5.user_data) {
            _0x25c9df(_0x44acf5.user_data);
            var _0x4d5943 = this.ri;
            _0x431d54.qi = true;
            _0x431d54.ri = _0x31ec56;
            _0x431d54.si = _0x44acf5.user_data;
            theoKzObjects.FB_UserID = _0x44acf5.user_data.userId;
            _0x431d54.ti = _0x3fe6c2;
            _0x7adae5(_0x2b84ef.Oe, _0x431d54.ti, 0x3c);
            _0x2f9505();
            for (var _0x738ac2 = 0x0; _0x738ac2 < clientes.clientesActivos.length; _0x738ac2++) {
              var _0x5eb116 = clientes.clientesActivos[_0x738ac2].cliente_NOMBRE;
              var _0x3c7556 = clientes.clientesActivos[_0x738ac2].cliente_ID;
              var _0x12eb70 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin;
              var _0x29e277 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin1;
              var _0x141e8 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin2;
              var _0x23aa59 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin3;
              var _0x12caaa = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin4;
              var _0x217824 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin5;
              var _0x32c1d9 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin6;
              var _0x4f4f42 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin7;
              var _0x427d5c = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin8;
              var _0x51dbeb = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin9;
              var _0x1e7592 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin10;
              var _0x4bac74 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin11;
              var _0x499015 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin12;
              var _0x4e3ec3 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin13;
              var _0x160b75 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin14;
              var _0x2e5094 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin15;
              var _0x9a8116 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin16;
              var _0x5d2731 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin17;
              var _0x146bba = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin18;
              var _0x3f2b16 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin19;
              var _0x1d9b23 = clientes.clientesActivos[_0x738ac2].Client_VisibleSkin20;
              var _0x4bfc2d = clientes.clientesActivos[_0x738ac2].Client_KeyAccecs;
              var _0x2e278e = clientes.clientesActivos[_0x738ac2].cliente_DateExpired;
            }
            theoKzObjects.loading = false;
            if (_0x4d5943 !== _0x31ec56) {
              _0x431d54.aj();
            } else {
              _0x431d54.Si();
            }
            localStorage.setItem("token__gg", _0x31ec56);
          } else {
            _0x431d54.Xi();
          }
        }
      };
      _0x1db068.prototype.Xi = function () {
        this.Wi();
      };
      _0x1db068.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x1db068.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return _0x1db068;
    }();
    var _0xfdc4b = function () {
      function _0x15540b() {
        this.cj = {};
        this.cj[_0x145d02] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x582108] = _0x2d9910._b.WHITE;
        this.cj[_0x5e7485] = [0x0, 0x0];
        this.cj[_0x3cecc9] = [0x0, 0x0];
        var _0x471a24 = _0x2d9910.cc.from(_0x1e727e, _0x16d677, this.cj);
        this.zf = new _0x2d9910.hc(_0x489d65, _0x471a24);
      }
      var _0x59905c = "a1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x25d09f = 'a2_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x145d02 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x582108 = "u4_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x5e7485 = 'u5_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x3cecc9 = 'u6_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1c2d39 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x489d65 = new _0x2d9910.gc().addAttribute(_0x59905c, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x25d09f, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x1e727e = "precision mediump float;attribute vec2 " + _0x59905c + ";attribute vec2 " + _0x25d09f + ";uniform mat3 " + "translationMatrix" + ";uniform mat3 " + "projectionMatrix" + ";varying vec2 " + _0x1c2d39 + ";void main(){" + _0x1c2d39 + '=' + _0x25d09f + ';gl_Position=vec4((' + "projectionMatrix" + '*' + "translationMatrix" + "*vec3(" + _0x59905c + ",1.0)).xy,0.0,1.0);}";
      var _0x16d677 = "precision highp float;varying vec2 " + _0x1c2d39 + ";uniform vec4 " + _0x145d02 + ";uniform sampler2D " + _0x582108 + ";uniform vec2 " + _0x5e7485 + ";uniform vec2 " + _0x3cecc9 + ";void main(){vec2 coord=" + _0x1c2d39 + '*' + _0x5e7485 + '+' + _0x3cecc9 + ";vec4 v_color_mix=" + _0x145d02 + ';gl_FragColor=texture2D(' + _0x582108 + ',coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}';
      _0x15540b.prototype.Hf = function (_0x1358a7, _0xe88985, _0x3faba9, _0x484e6e) {
        var _0xfdf2be = this.cj[_0x145d02];
        _0xfdf2be[0x0] = _0x1358a7;
        _0xfdf2be[0x1] = _0xe88985;
        _0xfdf2be[0x2] = _0x3faba9;
        _0xfdf2be[0x3] = _0x484e6e;
      };
      _0x15540b.prototype.Bf = function (_0x30ced8) {
        this.cj[_0x582108] = _0x30ced8;
      };
      _0x15540b.prototype.Te = function (_0x298c13, _0x3458b6, _0x2dc78b, _0x40f5ea) {
        this.zf.position.x = _0x298c13;
        this.zf.position.y = _0x3458b6;
        this.zf.scale.x = _0x2dc78b;
        this.zf.scale.y = _0x40f5ea;
        var _0x1b0e64 = this.cj[_0x5e7485];
        _0x1b0e64[0x0] = _0x2dc78b * 0.2520615384615385;
        _0x1b0e64[0x1] = _0x40f5ea * 0.4357063736263738;
        var _0x28187f = this.cj[_0x3cecc9];
        _0x28187f[0x0] = _0x298c13 * 0.2520615384615385;
        _0x28187f[0x1] = _0x3458b6 * 0.4357063736263738;
      };
      return _0x15540b;
    }();
    var _0x596e81 = function () {
      function _0x2119a2() {
        this.jh = new _0x2d9910.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x2119a2.prototype.kh = function (_0x26d5b4) {
        if (_0x26d5b4 && _0x26d5b4.Hc) {
          this.jh.texture = _0x26d5b4.Hc;
          this.jh.anchor.set(_0x26d5b4.Lh, _0x26d5b4.Mh);
          this.dj = _0x26d5b4.Nh;
          this.ej = _0x26d5b4.Oh;
        }
      };
      _0x2119a2.prototype.oh = function (_0x47d376) {
        this.jh.width = _0x47d376 * this.dj;
        this.jh.height = _0x47d376 * this.ej;
      };
      _0x2119a2.prototype.fj = function (_0x32cf68) {
        this.jh.rotation = _0x32cf68;
      };
      _0x2119a2.prototype.nh = function (_0x100cc0, _0x243f6a) {
        this.jh.position.set(_0x100cc0, _0x243f6a);
      };
      _0x2119a2.prototype.Mg = function (_0x17ad35) {
        this.jh.visible = _0x17ad35;
      };
      _0x2119a2.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x2119a2.prototype.qh = function (_0x5afead) {
        this.jh.alpha = _0x5afead;
      };
      _0x2119a2.prototype.Mf = function () {
        return this.jh;
      };
      _0x2119a2.prototype.ih = function () {
        _0x236c87(this.jh);
      };
      return _0x2119a2;
    }();
    var _0x5e4879 = function () {
      function _0x23f95a(_0x5c570a) {
        this.fb = _0x5c570a;
        this.Mb = new _0x5e4879.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      _0x23f95a.prototype.Kb = function () {
        if (this.pj != null) {
          _0x236c87(this.pj.Rf);
        }
        if (this.qj != null) {
          _0x236c87(this.qj);
        }
      };
      _0x23f95a.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x23f95a.prototype.Fg = function (_0x2cf09d) {
        this.Mb = _0x2cf09d;
        this.rj(this.Hb);
      };
      _0x23f95a.prototype.Mg = function (_0x3d1f2f) {
        var _0xb1e20 = this.Hb;
        this.Hb = _0x3d1f2f;
        this.rj(_0xb1e20);
      };
      _0x23f95a.prototype.Ig = function (_0x171605) {
        this.M = _0x171605 * 0x32;
        var _0x5e15c7 = _0x171605;
        if (_0x171605 > this.fb.cf) {
          _0x5e15c7 = Math.atan((_0x171605 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x32a0b4 = Math.sqrt(Math.pow(_0x5e15c7 * 0x5, 0.707106781186548) * 0x4 + 0x19);
        var _0x53b227 = Math.min(0xc8, Math.max(0x3, (_0x32a0b4 - 0x5) * 0x5 + 0x1));
        var _0x3652d6 = this.kj;
        this.Db = (0x5 + _0x32a0b4 * 0.9) * 0.025;
        this.kj = Math.floor(_0x53b227);
        this.ij = _0x53b227 - this.kj;
        if (_0x3652d6 > 0x0 && _0x3652d6 < this.kj) {
          var _0x4c4ba3 = this.lj[_0x3652d6 * 0x2 - 0x2];
          var _0x3ca7a1 = this.lj[_0x3652d6 * 0x2 - 0x1];
          var _0x2d9f54 = this.mj[_0x3652d6 * 0x2 - 0x2];
          var _0x4823f6 = this.mj[_0x3652d6 * 0x2 - 0x1];
          var _0x5a248d = this.nj[_0x3652d6 * 0x2 - 0x2];
          var _0x33a7fb = this.nj[_0x3652d6 * 0x2 - 0x1];
          for (var _0x4eb042 = _0x3652d6; _0x4eb042 < this.kj; _0x4eb042++) {
            this.lj[_0x4eb042 * 0x2] = _0x4c4ba3;
            this.lj[_0x4eb042 * 0x2 + 0x1] = _0x3ca7a1;
            this.mj[_0x4eb042 * 0x2] = _0x2d9f54;
            this.mj[_0x4eb042 * 0x2 + 0x1] = _0x4823f6;
            this.nj[_0x4eb042 * 0x2] = _0x5a248d;
            this.nj[_0x4eb042 * 0x2 + 0x1] = _0x33a7fb;
          }
        }
      };
      _0x23f95a.prototype.Lg = function (_0x814457, _0x1d549f) {
        this.kj = _0x1d549f;
        for (var _0x1f7e51 = 0x0; _0x1f7e51 < this.kj; _0x1f7e51++) {
          this.lj[_0x1f7e51 * 0x2] = this.mj[_0x1f7e51 * 0x2] = this.nj[_0x1f7e51 * 0x2] = _0x814457();
          this.lj[_0x1f7e51 * 0x2 + 0x1] = this.mj[_0x1f7e51 * 0x2 + 0x1] = this.nj[_0x1f7e51 * 0x2 + 0x1] = _0x814457();
        }
      };
      _0x23f95a.prototype.Kg = function (_0x41354a, _0x376ac5, _0x5ef975) {
        this.hj = _0x5ef975;
        for (var _0x4b4c01 = 0x0; _0x4b4c01 < this.kj; _0x4b4c01++) {
          this.lj[_0x4b4c01 * 0x2] = this.mj[_0x4b4c01 * 0x2];
          this.lj[_0x4b4c01 * 0x2 + 0x1] = this.mj[_0x4b4c01 * 0x2 + 0x1];
        }
        var _0x9f67da = _0x41354a - this.mj[0x0];
        var _0x5d1bfa = _0x376ac5 - this.mj[0x1];
        this.sj(_0x9f67da, _0x5d1bfa, this.kj, this.mj);
      };
      _0x23f95a.prototype.sj = function (_0x461476, _0x42ef24, _0xc75737, _0x237e59) {
        var _0x944464 = Math.hypot(_0x461476, _0x42ef24);
        if (!(_0x944464 <= 0x0)) {
          var _0x39f11a = _0x237e59[0x0];
          var _0x508339 = undefined;
          _0x237e59[0x0] += _0x461476;
          var _0x2aa9f5 = _0x237e59[0x1];
          var _0x53cd74 = undefined;
          _0x237e59[0x1] += _0x42ef24;
          var _0x5edf3f = this.Db / (this.Db + _0x944464);
          var _0x16274b = 0x1 - _0x5edf3f * 0x2;
          var _0x1ad434 = 0x1;
          for (var _0x3339d5 = _0xc75737 - 0x1; _0x1ad434 < _0x3339d5; _0x1ad434++) {
            _0x508339 = _0x237e59[_0x1ad434 * 0x2];
            _0x237e59[_0x1ad434 * 0x2] = _0x237e59[_0x1ad434 * 0x2 - 0x2] * _0x16274b + (_0x508339 + _0x39f11a) * _0x5edf3f;
            _0x39f11a = _0x508339;
            _0x53cd74 = _0x237e59[_0x1ad434 * 0x2 + 0x1];
            _0x237e59[_0x1ad434 * 0x2 + 0x1] = _0x237e59[_0x1ad434 * 0x2 - 0x1] * _0x16274b + (_0x53cd74 + _0x2aa9f5) * _0x5edf3f;
            _0x2aa9f5 = _0x53cd74;
          }
          _0x5edf3f = this.ij * this.Db / (this.ij * this.Db + _0x944464);
          _0x16274b = 0x1 - _0x5edf3f * 0x2;
          _0x237e59[_0xc75737 * 0x2 - 0x2] = _0x237e59[_0xc75737 * 0x2 - 0x4] * _0x16274b + (_0x237e59[_0xc75737 * 0x2 - 0x2] + _0x39f11a) * _0x5edf3f;
          _0x237e59[_0xc75737 * 0x2 - 0x1] = _0x237e59[_0xc75737 * 0x2 - 0x3] * _0x16274b + (_0x237e59[_0xc75737 * 0x2 - 0x1] + _0x2aa9f5) * _0x5edf3f;
        }
      };
      _0x23f95a.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x23f95a.prototype.Hg = function (_0x5237f5, _0xa04972) {
        var _0x1c8bcd = 0xf4240;
        var _0x1da533 = _0x5237f5;
        var _0xd4b966 = _0xa04972;
        for (var _0x230574 = 0x0; _0x230574 < this.kj; _0x230574++) {
          var _0x581a6b = this.nj[_0x230574 * 0x2];
          var _0x48b08d = this.nj[_0x230574 * 0x2 + 0x1];
          var _0x61d350 = Math.hypot(_0x5237f5 - _0x581a6b, _0xa04972 - _0x48b08d);
          if (_0x61d350 < _0x1c8bcd) {
            _0x1c8bcd = _0x61d350;
            _0x1da533 = _0x581a6b;
            _0xd4b966 = _0x48b08d;
          }
        }
        return {
          'x': _0x1da533,
          'y': _0xd4b966,
          'distance': _0x1c8bcd
        };
      };
      _0x23f95a.prototype.vb = function (_0x1aab30) {
        this.oj = _0x1aab30;
      };
      _0x23f95a.prototype.Fb = function (_0x41eac6, _0x1ae10d) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + Math.cos(_0x41eac6 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + Math.cos(_0x41eac6 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb + _0x1ae10d * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + Math.cos(_0x41eac6 / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb - _0x1ae10d * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x1ae10d * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x1ae10d * 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x23f95a.prototype.Gb = function (_0x365e2b, _0x4c2ee4, _0x2647e4, _0x5c6bb5) {
        if (this.Hb && this.Ib) {
          var _0x280a8f = Math.pow(0.11112, _0x4c2ee4 / 0x5f);
          for (var _0x2c182e = 0x0; _0x2c182e < this.kj; _0x2c182e++) {
            var _0x132152 = this.lj[_0x2c182e * 0x2] * (0x1 - _0x2647e4) + this.mj[_0x2c182e * 0x2] * _0x2647e4;
            var _0x669e38 = this.lj[_0x2c182e * 0x2 + 0x1] * (0x1 - _0x2647e4) + this.mj[_0x2c182e * 0x2 + 0x1] * _0x2647e4;
            this.nj[_0x2c182e * 0x2] = _0x132152 * (0x1 - _0x280a8f) + this.nj[_0x2c182e * 0x2] * _0x280a8f;
            this.nj[_0x2c182e * 0x2 + 0x1] = _0x669e38 * (0x1 - _0x280a8f) + this.nj[_0x2c182e * 0x2 + 0x1] * _0x280a8f;
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0x365e2b, _0x4c2ee4, _0x5c6bb5);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - this.Db * 0x3;
        }
      };
      _0x23f95a.prototype.rj = function (_0x206663) {
        if (this.Hb) {
          if (!_0x206663) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            _0x236c87(this.pj.Rf);
          }
          if (this.qj != null) {
            _0x236c87(this.qj);
          }
        }
      };
      _0x23f95a.prototype.uj = function () {
        var _0x550cda = window.anApp = _0x1113af;
        if (this.pj == null) {
          this.pj = new _0x5e8699();
        } else {
          _0x236c87(this.pj.Rf);
        }
        this.pj.hh(_0x550cda.o.fb.af, _0x550cda.p.Dc().ed(this.Mb.cg), _0x550cda.p.Dc().dd(this.Mb.dg), _0x550cda.p.Dc().fd(this.Mb.Bg), _0x550cda.p.Dc().gd(this.Mb.Cg), _0x550cda.p.Dc().hd(this.Mb.Dg), _0x550cda.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x548508('');
          this.qj.style.fontFamily = 'wormup';
          this.qj.anchor.set(0.5);
        } else {
          _0x236c87(this.qj);
        }
        this.qj.style.fontSize = 0xf;
        this.qj.style.fill = _0x550cda.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x23f95a.Config = function () {
        function _0x24aa64() {
          this.Lb = 0x0;
          this.cg = _0x2ef9fb.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x24aa64;
      }();
      return _0x23f95a;
    }();
    var _0x548508 = function () {
      return _0x122e71(_0x2d9910.fc, function (_0x3924c0, _0x2c24ed, _0x461fed) {
        _0x2d9910.fc.call(this, _0x3924c0, _0x2c24ed, _0x461fed);
        this.If = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x5e8699 = function () {
      function _0x59c9fe() {
        this.Rf = new _0x2d9910.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x39c535();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x596e81(), new _0x596e81());
        for (var _0x13abd5 = 0x1; _0x13abd5 < 0x31d; _0x13abd5++) {
          this.xj[_0x13abd5] = this.yj(_0x13abd5, new _0x596e81(), new _0x596e81());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x4d43b2 = Math.PI * 0.1;
      var _0x2172eb = -0.06640625;
      var _0x203e07 = -0.03515625;
      var _0x1d75e8 = -0.0625;
      var _0x285fb1 = _0x2172eb * 0x3 + 0.84375;
      var _0x3b115f = 0.2578125 - _0x2172eb * 0x3;
      var _0x4ae2de = _0x2172eb + _0x203e07;
      var _0x389eed = _0x1d75e8 + _0x1d75e8;
      var _0x309a8e = _0x203e07 * 0x3 + 0.2578125;
      var _0x1a04b3 = 0.84375 - _0x203e07 * 0x3;
      var _0x4edc7b = _0x203e07 + _0x2172eb;
      _0x59c9fe.prototype.yj = function (_0x4d3ca1, _0x3b944d, _0x578899) {
        var _0x518c89 = new _0x33db95(_0x3b944d, _0x578899);
        _0x3b944d.jh.zIndex = 0.001 * ((0x31d - _0x4d3ca1) * 0x2 + 0x1 + 0x3);
        _0x578899.jh.zIndex = 0.001 * ((0x31d - _0x4d3ca1) * 0x2 - 0x2 + 0x3);
        return _0x518c89;
      };
      _0x59c9fe.prototype.hh = function (_0x1dfd11, _0x510540, _0x386bed, _0x356a9b, _0x27f34f, _0x33db70, _0x4c0dd8) {
        var _0x516c00 = _0x386bed.Zc;
        var _0x2e7162 = _0x1dfd11 == 0x10 ? _0x510540.bd.$c : _0x386bed.$c;
        if (_0x516c00.length > 0x0 && _0x2e7162.length > 0x0) {
          for (var _0x107275 = 0x0; _0x107275 < this.xj.length; _0x107275++) {
            this.xj[_0x107275].Nf.kh(_0x516c00[_0x107275 % _0x516c00.length]);
            this.xj[_0x107275].Pf.kh(_0x2e7162[_0x107275 % _0x2e7162.length]);
          }
        }
        this.vj.hh(_0x356a9b, _0x27f34f, _0x33db70, _0x4c0dd8);
      };
      var _0x39c535 = function () {
        var _0x59604e = _0x122e71(_0x2d9910.Zb, function () {
          _0x2d9910.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x2d9910.Zb();
          this.Hj = [];
          for (var _0x5bfb50 = 0x0; _0x5bfb50 < 0x4; _0x5bfb50++) {
            var _0x3d6c8c = new _0x596e81();
            _0x3d6c8c.kh((window.anApp = _0x1113af).q.Ph);
            this.Gj.addChild(_0x3d6c8c.jh);
            this.Hj.push(_0x3d6c8c);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x596e81();
          this.Jj.kh((window.anApp = _0x1113af).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new _0x596e81();
          this.xEmojiType_headshot.kh((window.anApp = _0x1113af).q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new _0x596e81();
          this.xEmojiType_kill.kh((window.anApp = _0x1113af).q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new _0x596e81();
          this.guia_mobile.kh((window.anApp = _0x1113af).q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new _0x596e81();
          this.flx.kh((window.anApp = _0x1113af).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x596e81();
          this.xxx5.kh((window.anApp = _0x1113af).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x596e81();
          this.xxx2.kh((window.anApp = _0x1113af).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x596e81();
          this.xxx10.kh((window.anApp = _0x1113af).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x596e81();
          this.xxxLupatype.kh((window.anApp = _0x1113af).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        _0x59604e.prototype.hh = function (_0x18762f, _0x386586, _0x5d0242, _0x4e1dff) {
          this.Lj(0.002, this.Cj, _0x18762f.Zc);
          this.Lj(0.003, this.Dj, _0x386586.Zc);
          this.Lj(0.004, this.Fj, _0x4e1dff.Zc);
          this.Lj(0.005, this.Ej, _0x5d0242.Zc);
        };
        _0x59604e.prototype.Lj = function (_0xbc26e7, _0x5dc820, _0x97c4d0) {
          while (_0x97c4d0.length > _0x5dc820.length) {
            var _0x414cc0 = new _0x596e81();
            _0x5dc820.push(_0x414cc0);
            this.addChild(_0x414cc0.Mf());
          }
          while (_0x97c4d0.length < _0x5dc820.length) {
            _0x5dc820.pop().ih();
          }
          var _0x2faf2d = _0xbc26e7;
          for (var _0x4fe0f0 = 0x0; _0x4fe0f0 < _0x97c4d0.length; _0x4fe0f0++) {
            _0x2faf2d += 0.0001;
            var _0x5022e3 = _0x5dc820[_0x4fe0f0];
            _0x5022e3.kh(_0x97c4d0[_0x4fe0f0]);
            _0x5022e3.jh.zIndex = _0x2faf2d;
          }
        };
        _0x59604e.prototype.mh = function (_0x11a072, _0x341f7e, _0x42a603, _0x7b9120) {
          this.visible = true;
          this.position.set(_0x11a072, _0x341f7e);
          this.rotation = _0x7b9120;
          for (var _0x405586 = 0x0; _0x405586 < this.Cj.length; _0x405586++) {
            this.Cj[_0x405586].oh(_0x42a603);
          }
          for (var _0x29f088 = 0x0; _0x29f088 < this.Dj.length; _0x29f088++) {
            this.Dj[_0x29f088].oh(_0x42a603);
          }
          for (var _0x4a8898 = 0x0; _0x4a8898 < this.Ej.length; _0x4a8898++) {
            this.Ej[_0x4a8898].oh(_0x42a603);
          }
          for (var _0x4419ee = 0x0; _0x4419ee < this.Fj.length; _0x4419ee++) {
            this.Fj[_0x4419ee].oh(_0x42a603);
          }
        };
        _0x59604e.prototype.lh = function () {
          this.visible = false;
        };
        _0x59604e.prototype.Mj = function (_0x49b02c, _0x117333, _0x26d7c5, _0x59be7e) {
          this.Gj.visible = true;
          var _0x1e9f31 = _0x26d7c5 / 0x3e8;
          var _0x532598 = 0x1 / this.Hj.length;
          for (var _0x5f1340 = 0x0; _0x5f1340 < this.Hj.length; _0x5f1340++) {
            var _0xc82a47 = 0x1 - (_0x1e9f31 + _0x532598 * _0x5f1340) % 0x1;
            this.Hj[_0x5f1340].jh.alpha = 0x1 - _0xc82a47;
            this.Hj[_0x5f1340].oh(_0x117333 * (0.5 + _0xc82a47 * 4.5));
          }
        };
        _0x59604e.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x59604e.prototype.Nj = function (_0x334b89, _0x1556e1, _0x46e1c7, _0x4cfdbb) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0x334b89.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x334b89.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x4cfdbb * 0.0025) : Math.max(_0x334b89.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x4cfdbb * 0.0025);
          this.Jj.oh(_0x1556e1);
        };
        _0x59604e.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        _0x59604e.prototype.Nflex = function (_0x23f049, _0x5eb0aa, _0x1dfe11, _0x304d82) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = (_0x23f049.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x23f049.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x304d82 * 0.0025) : Math.max(_0x23f049.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x304d82 * 0.0025);
          this.flx.oh(_0x5eb0aa);
        };
        _0x59604e.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0x59604e.prototype.ActiveX5 = function (_0x4d7ac2, _0x5e4862, _0x4f4db5, _0x2bf75d) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0x4d7ac2.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x4d7ac2.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x2bf75d * 0.0025) : Math.max(_0x4d7ac2.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x2bf75d * 0.0025);
          this.xxx5.oh(_0x5e4862);
        };
        _0x59604e.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0x59604e.prototype.ActiveX2 = function (_0x3c4da0, _0x300e2a, _0x3b247b, _0x43f2b8) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x3c4da0.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x3c4da0.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x43f2b8 * 0.0025) : Math.max(_0x3c4da0.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x43f2b8 * 0.0025);
          this.xxx2.oh(_0x300e2a);
        };
        _0x59604e.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0x59604e.prototype.ActiveX10 = function (_0x4be896, _0x4c8a6b, _0x464c7b, _0x23f29b) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x4be896.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x4be896.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x23f29b * 0.0025) : Math.max(_0x4be896.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x23f29b * 0.0025);
          this.xxx10.oh(_0x4c8a6b);
        };
        _0x59604e.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0x59604e.prototype.ActiveZlupa = function (_0x514954, _0x1029b8, _0x322f35, _0x34812f) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0x514954.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x514954.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x34812f * 0.0025) : Math.max(_0x514954.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x34812f * 0.0025);
          this.xxxLupatype.oh(_0x1029b8);
        };
        _0x59604e.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0x59604e.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        _0x59604e.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        _0x59604e.prototype.Rx = function (_0x247a32, _0x3a3d8b, _0x226e30, _0x53b95d) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(_0x3a3d8b);
        };
        _0x59604e.prototype.Njh = function (_0x4c7d61, _0x597d81, _0x40fdba, _0x5cc442) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(_0x597d81);
        };
        _0x59604e.prototype.Njk = function (_0x42f177, _0x4fccf6, _0x5bb3fe, _0xb69eba) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(_0x4fccf6);
        };
        return _0x59604e;
      }();
      _0x59c9fe.prototype.Oj = function (_0x1e7db6) {
        return this.Aj + this.Bj * Math.sin(_0x1e7db6 * _0x4d43b2 - this.zj);
      };
      _0x59c9fe.prototype.tj = function (_0x5336c3, _0x7450f8, _0x4acaab, _0x19f41c) {
        var _0x476ef2 = _0x5336c3.Db * 0x2;
        var _0x10817e = _0x5336c3.nj;
        var _0x4cbc6e = _0x5336c3.kj;
        var _0x597844 = _0x4cbc6e * 0x4 - 0x3;
        this.zj = _0x7450f8 / 0x190 * Math.PI;
        this.Aj = _0x476ef2 * 1.5;
        this.Bj = _0x476ef2 * 0.15 * _0x5336c3.jj;
        var _0x11a9b8 = undefined;
        var _0x5b4ee2 = undefined;
        var _0x408f21 = undefined;
        var _0x3b0c6d = undefined;
        var _0x500208 = undefined;
        var _0x54dfb0 = undefined;
        var _0x2e3ba0 = undefined;
        var _0x41e837 = undefined;
        _0x5b4ee2 = _0x10817e[0x0];
        _0x54dfb0 = _0x10817e[0x1];
        if (_0x19f41c(_0x5b4ee2, _0x54dfb0)) {
          _0x408f21 = _0x10817e[0x2];
          _0x2e3ba0 = _0x10817e[0x3];
          _0x3b0c6d = _0x10817e[0x4];
          _0x41e837 = _0x10817e[0x5];
          var _0x57306a = Math.atan2(_0x41e837 + _0x54dfb0 * 0x2 - _0x2e3ba0 * 0x3, _0x3b0c6d + _0x5b4ee2 * 0x2 - _0x408f21 * 0x3);
          this.vj.mh(_0x5b4ee2, _0x54dfb0, _0x476ef2, _0x57306a);
          this.xj[0x0].mh(_0x5b4ee2, _0x54dfb0, _0x476ef2, this.Oj(0x0), _0x57306a);
          this.xj[0x1].mh(_0x285fb1 * _0x5b4ee2 + _0x3b115f * _0x408f21 + _0x4ae2de * _0x3b0c6d, _0x285fb1 * _0x54dfb0 + _0x3b115f * _0x2e3ba0 + _0x4ae2de * _0x41e837, _0x476ef2, this.Oj(0x1), _0x33db95.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x5b4ee2 + 0.75 * _0x408f21 + _0x389eed * _0x3b0c6d, 0.375 * _0x54dfb0 + 0.75 * _0x2e3ba0 + _0x389eed * _0x41e837, _0x476ef2, this.Oj(0x2), _0x33db95.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x309a8e * _0x5b4ee2 + _0x1a04b3 * _0x408f21 + _0x4edc7b * _0x3b0c6d, _0x309a8e * _0x54dfb0 + _0x1a04b3 * _0x2e3ba0 + _0x4edc7b * _0x41e837, _0x476ef2, this.Oj(0x3), _0x33db95.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0x1374eb = 0x4;
        var _0x20161a = 0x2;
        for (var _0x3b55a4 = _0x4cbc6e * 0x2 - 0x4; _0x20161a < _0x3b55a4; _0x20161a += 0x2) {
          _0x5b4ee2 = _0x10817e[_0x20161a];
          _0x54dfb0 = _0x10817e[_0x20161a + 0x1];
          if (_0x19f41c(_0x5b4ee2, _0x54dfb0)) {
            _0x11a9b8 = _0x10817e[_0x20161a - 0x2];
            _0x500208 = _0x10817e[_0x20161a - 0x1];
            _0x408f21 = _0x10817e[_0x20161a + 0x2];
            _0x2e3ba0 = _0x10817e[_0x20161a + 0x3];
            _0x3b0c6d = _0x10817e[_0x20161a + 0x4];
            _0x41e837 = _0x10817e[_0x20161a + 0x5];
            this.xj[_0x1374eb].mh(_0x5b4ee2, _0x54dfb0, _0x476ef2, this.Oj(_0x1374eb), _0x33db95.angleBetween(this.xj[_0x1374eb - 0x1], this.xj[_0x1374eb + 0x1]));
            _0x1374eb++;
            this.xj[_0x1374eb].mh(_0x2172eb * _0x11a9b8 + 0.84375 * _0x5b4ee2 + 0.2578125 * _0x408f21 + _0x203e07 * _0x3b0c6d, _0x2172eb * _0x500208 + 0.84375 * _0x54dfb0 + 0.2578125 * _0x2e3ba0 + _0x203e07 * _0x41e837, _0x476ef2, this.Oj(_0x1374eb), _0x33db95.angleBetween(this.xj[_0x1374eb - 0x1], this.xj[_0x1374eb + 0x1]));
            _0x1374eb++;
            this.xj[_0x1374eb].mh(_0x1d75e8 * _0x11a9b8 + 0.5625 * _0x5b4ee2 + 0.5625 * _0x408f21 + _0x1d75e8 * _0x3b0c6d, _0x1d75e8 * _0x500208 + 0.5625 * _0x54dfb0 + 0.5625 * _0x2e3ba0 + _0x1d75e8 * _0x41e837, _0x476ef2, this.Oj(_0x1374eb), _0x33db95.angleBetween(this.xj[_0x1374eb - 0x1], this.xj[_0x1374eb + 0x1]));
            _0x1374eb++;
            this.xj[_0x1374eb].mh(_0x203e07 * _0x11a9b8 + 0.2578125 * _0x5b4ee2 + 0.84375 * _0x408f21 + _0x2172eb * _0x3b0c6d, _0x203e07 * _0x500208 + 0.2578125 * _0x54dfb0 + 0.84375 * _0x2e3ba0 + _0x2172eb * _0x41e837, _0x476ef2, this.Oj(_0x1374eb), _0x33db95.angleBetween(this.xj[_0x1374eb - 0x1], this.xj[_0x1374eb + 0x1]));
            _0x1374eb++;
          } else {
            this.xj[_0x1374eb].lh();
            _0x1374eb++;
            this.xj[_0x1374eb].lh();
            _0x1374eb++;
            this.xj[_0x1374eb].lh();
            _0x1374eb++;
            this.xj[_0x1374eb].lh();
            _0x1374eb++;
          }
        }
        _0x5b4ee2 = _0x10817e[_0x4cbc6e * 0x2 - 0x4];
        _0x54dfb0 = _0x10817e[_0x4cbc6e * 0x2 - 0x3];
        if (_0x19f41c(_0x5b4ee2, _0x54dfb0)) {
          _0x11a9b8 = _0x10817e[_0x4cbc6e * 0x2 - 0x6];
          _0x500208 = _0x10817e[_0x4cbc6e * 0x2 - 0x5];
          _0x408f21 = _0x10817e[_0x4cbc6e * 0x2 - 0x2];
          _0x2e3ba0 = _0x10817e[_0x4cbc6e * 0x2 - 0x1];
          this.xj[_0x597844 - 0x5].mh(_0x5b4ee2, _0x54dfb0, _0x476ef2, this.Oj(_0x597844 - 0x5), _0x33db95.angleBetween(this.xj[_0x597844 - 0x6], this.xj[_0x597844 - 0x4]));
          this.xj[_0x597844 - 0x4].mh(_0x4edc7b * _0x11a9b8 + _0x1a04b3 * _0x5b4ee2 + _0x309a8e * _0x408f21, _0x4edc7b * _0x500208 + _0x1a04b3 * _0x54dfb0 + _0x309a8e * _0x2e3ba0, _0x476ef2, this.Oj(_0x597844 - 0x4), _0x33db95.angleBetween(this.xj[_0x597844 - 0x5], this.xj[_0x597844 - 0x3]));
          this.xj[_0x597844 - 0x3].mh(_0x389eed * _0x11a9b8 + 0.75 * _0x5b4ee2 + 0.375 * _0x408f21, _0x389eed * _0x500208 + 0.75 * _0x54dfb0 + 0.375 * _0x2e3ba0, _0x476ef2, this.Oj(_0x597844 - 0x3), _0x33db95.angleBetween(this.xj[_0x597844 - 0x4], this.xj[_0x597844 - 0x2]));
          this.xj[_0x597844 - 0x2].mh(_0x4ae2de * _0x11a9b8 + _0x3b115f * _0x5b4ee2 + _0x285fb1 * _0x408f21, _0x4ae2de * _0x500208 + _0x3b115f * _0x54dfb0 + _0x285fb1 * _0x2e3ba0, _0x476ef2, this.Oj(_0x597844 - 0x2), _0x33db95.angleBetween(this.xj[_0x597844 - 0x3], this.xj[_0x597844 - 0x1]));
          this.xj[_0x597844 - 0x1].mh(_0x408f21, _0x2e3ba0, _0x476ef2, this.Oj(_0x597844 - 0x1), _0x33db95.angleBetween(this.xj[_0x597844 - 0x2], this.xj[_0x597844 - 0x1]));
        } else {
          this.xj[_0x597844 - 0x5].lh();
          this.xj[_0x597844 - 0x4].lh();
          this.xj[_0x597844 - 0x3].lh();
          this.xj[_0x597844 - 0x2].lh();
          this.xj[_0x597844 - 0x1].lh();
        }
        if (this.wj == 0x0 && _0x597844 > 0x0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0x0 && _0x597844 == 0x0) {
          _0x236c87(this.vj);
        }
        while (this.wj < _0x597844) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        while (this.wj > _0x597844) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var _0x56e7c4 = _0x5336c3.Ff[_0x2a5570.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && _0x56e7c4 != null && _0x56e7c4.sc) {
          this.vj.Mj(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.Ij();
        }
        var _0xa87863 = _0x5336c3.Ff[_0x2a5570.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && _0xa87863 != null && _0xa87863.sc) {
          this.vj.Nj(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.emoji_headshot && _0x5336c3 && _0x5336c3.Mb && _0x5336c3.Mb.Mb) {
          this.vj.Njh(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.xzs();
        }
        if (theoKzObjects.emoji_kill && _0x5336c3 && _0x5336c3.Mb && _0x5336c3.Mb.Mb) {
          this.vj.Njk(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.zas();
        }
        ;
        if (false && false && _0x5336c3 && _0x5336c3.Mb && _0x5336c3.Mb.Mb) {
          this.vj.Rx(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        }
        var _0x339e2d = _0x5336c3.Ff[_0x2a5570.FLEXIBLE_TYPE];
        if (this.xj[0x0].gj() && _0x339e2d != null && _0x339e2d.sc) {
          this.vj.Nflex(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.flexx();
        }
        var _0x582f88 = _0x5336c3.Ff[_0x2a5570.X5_TYPE];
        if (this.xj[0x0].gj() && _0x582f88 != null && _0x582f88.sc) {
          this.vj.ActiveX5(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.xXx5();
        }
        var _0x2584b9 = _0x5336c3.Ff[_0x2a5570.X2_TYPE];
        if (this.xj[0x0].gj() && _0x2584b9 != null && _0x2584b9.sc) {
          this.vj.ActiveX2(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.xXx2();
        }
        var _0x5f03fe = _0x5336c3.Ff[_0x2a5570.X10_TYPE];
        if (this.xj[0x0].gj() && _0x5f03fe != null && _0x5f03fe.sc) {
          this.vj.ActiveX10(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.xXx10();
        }
        var _0xd1fff6 = _0x5336c3.Ff[_0x2a5570.ZOOM_TYPE];
        if (this.xj[0x0].gj() && _0xd1fff6 != null && _0xd1fff6.sc) {
          this.vj.ActiveZlupa(_0x5336c3, _0x476ef2, _0x7450f8, _0x4acaab);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0x33db95 = function () {
        function _0x2ecf9b(_0x39ac3a, _0x44b710) {
          this.Nf = _0x39ac3a;
          this.Nf.Mg(false);
          this.Pf = _0x44b710;
          this.Pf.Mg(false);
        }
        _0x2ecf9b.prototype.mh = function (_0x53b831, _0x1c2ec0, _0x1fe4f4, _0x3a79b8, _0x5ae7c1) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x53b831, _0x1c2ec0);
          this.Nf.oh(_0x1fe4f4);
          this.Nf.fj(_0x5ae7c1);
          this.Pf.Mg(true);
          this.Pf.nh(_0x53b831, _0x1c2ec0);
          this.Pf.oh(_0x3a79b8);
          this.Pf.fj(_0x5ae7c1);
        };
        _0x2ecf9b.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x2ecf9b.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x2ecf9b.angleBetween = function (_0x9601a0, _0x5854dd) {
          return Math.atan2(_0x9601a0.Nf.jh.position.y - _0x5854dd.Nf.jh.position.y, _0x9601a0.Nf.jh.position.x - _0x5854dd.Nf.jh.position.x);
        };
        return _0x2ecf9b;
      }();
      return _0x59c9fe;
    }();
    var _0x490e10 = function () {
      function _0x3ceb81(_0x536611) {
        this.se = _0x536611;
        this.te = _0x536611.get()[0x0];
        this.ue = new _0x2d9910.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x5e8699();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x4b6253 = this;
        (window.anApp = _0x1113af).p.ca(function () {
          if ((window.anApp = _0x1113af).p.W()) {
            _0x4b6253.Fb();
          }
        });
      }
      _0x3ceb81.prototype.Fb = function () {
        var _0x1c2cf3 = window.anApp = _0x1113af;
        this.Pj.hh(0x0, null, _0x1c2cf3.p.Dc().dd(this.rh), _0x1c2cf3.p.Dc().fd(this.sh), _0x1c2cf3.p.Dc().gd(this.th), _0x1c2cf3.p.Dc().hd(this.uh), _0x1c2cf3.p.Dc().jd(this.vh));
      };
      _0x3ceb81.prototype.Le = function (_0x19977f) {
        this.sc = _0x19977f;
      };
      _0x3ceb81.prototype.ak = function (_0x918b0, _0x18c0a4, _0x5cf05d) {
        this.rh = _0x918b0;
        this.Sj = _0x18c0a4;
        this.Xj = _0x5cf05d;
        this.Fb();
      };
      _0x3ceb81.prototype.bk = function (_0x4b9c80, _0x37ef62, _0x2f41a4) {
        this.sh = _0x4b9c80;
        this.Tj = _0x37ef62;
        this.Yj = _0x2f41a4;
        this.Fb();
      };
      _0x3ceb81.prototype.ck = function (_0x2c953a, _0x5b5e64, _0x502fe4) {
        this.th = _0x2c953a;
        this.Uj = _0x5b5e64;
        this.Zj = _0x502fe4;
        this.Fb();
      };
      _0x3ceb81.prototype.dk = function (_0x358bd3, _0x47a302, _0x18ac94) {
        this.uh = _0x358bd3;
        this.Vj = _0x47a302;
        this.$j = _0x18ac94;
        this.Fb();
      };
      _0x3ceb81.prototype.ek = function (_0x286f5d, _0x1e9292, _0x530d3d) {
        this.vh = _0x286f5d;
        this.Wj = _0x1e9292;
        this._j = _0x530d3d;
        this.Fb();
      };
      _0x3ceb81.prototype.Ra = function () {
        var _0x1a8d71 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x1a8d71;
        this.te.width = _0x1a8d71 * this.Qj;
        this.te.height = _0x1a8d71 * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x51afe1 = _0x18f3c0(Math.floor(this.Qj / this.Ng) * 0x2 - 0x5, 0x1, this.Pj.xj.length);
        if (this.Pj.wj != _0x51afe1) {
          for (var _0x41c291 = _0x51afe1; _0x41c291 < this.Pj.xj.length; _0x41c291++) {
            this.Pj.xj[_0x41c291].lh();
          }
          while (this.Pj.wj < _0x51afe1) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          while (this.Pj.wj > _0x51afe1) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x3ceb81.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x1113af).p.W) {
            var _0x2dce64 = Date.now();
            var _0x22d120 = _0x2dce64 / 0xc8;
            var _0x3e9d43 = Math.sin(_0x22d120);
            var _0xe38aca = this.Ng;
            var _0x2fec1e = this.Ng * 1.5;
            var _0x40874e = this.Qj - (this.Qj - _0xe38aca * 0.5 * (this.Pj.wj - 0x1)) * 0.5;
            var _0x22c1a4 = this.Rj * 0.5;
            var _0x4f875c = 0x0;
            var _0x265d2e = 0x0;
            for (var _0x5abf41 = -0x1; _0x5abf41 < this.Pj.wj; _0x5abf41++) {
              var _0x4c0669 = _0x5abf41;
              var _0x1c7800 = Math.cos(_0x4c0669 * 0x1 / 0xc * Math.PI - _0x22d120) * (0x1 - Math.pow(0x10, _0x4c0669 * -0x1 / 0xc));
              if (_0x5abf41 >= 0x0) {
                var _0x27de9f = _0x40874e + _0xe38aca * -0.5 * _0x4c0669;
                var _0x5ceb4d = _0x22c1a4 + _0xe38aca * 0.5 * _0x1c7800;
                var _0x302e1f = _0xe38aca * 0x2;
                var _0x366d45 = _0x2fec1e * 0x2;
                var _0x5716d2 = Math.atan2(_0x265d2e - _0x1c7800, _0x4c0669 - _0x4f875c);
                if (_0x5abf41 == 0x0) {
                  this.Pj.vj.mh(_0x27de9f, _0x5ceb4d, _0x302e1f, _0x5716d2);
                }
                this.Pj.xj[_0x5abf41].mh(_0x27de9f, _0x5ceb4d, _0x302e1f, _0x366d45, _0x5716d2);
                var _0x2d9cb1 = this.Sj ? this.Xj ? 0.4 + _0x3e9d43 * 0.2 : 0.9 + _0x3e9d43 * 0.1 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x5abf41].Nf.qh(_0x2d9cb1);
                this.Pj.xj[_0x5abf41].Pf.qh(_0x2d9cb1);
              }
              _0x4f875c = _0x4c0669;
              _0x265d2e = _0x1c7800;
            }
            for (var _0x480f9b = 0x0; _0x480f9b < this.Pj.vj.Cj.length; _0x480f9b++) {
              var _0x3a46d1 = this.Tj ? this.Yj ? 0.4 + _0x3e9d43 * 0.2 : 0.9 + _0x3e9d43 * 0.1 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x480f9b].qh(_0x3a46d1);
            }
            for (var _0x1b57e7 = 0x0; _0x1b57e7 < this.Pj.vj.Dj.length; _0x1b57e7++) {
              var _0x29eac6 = this.Uj ? this.Zj ? 0.4 + _0x3e9d43 * 0.2 : 0.9 + _0x3e9d43 * 0.1 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x1b57e7].qh(_0x29eac6);
            }
            for (var _0x2e3f45 = 0x0; _0x2e3f45 < this.Pj.vj.Ej.length; _0x2e3f45++) {
              var _0x9476b6 = this.Vj ? this.$j ? 0.4 + _0x3e9d43 * 0.2 : 0.9 + _0x3e9d43 * 0.1 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x2e3f45].qh(_0x9476b6);
            }
            for (var _0x3bfda2 = 0x0; _0x3bfda2 < this.Pj.vj.Fj.length; _0x3bfda2++) {
              var _0x5f4867 = this.Wj ? this._j ? 0.4 + _0x3e9d43 * 0.2 : 0.9 + _0x3e9d43 * 0.1 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x3bfda2].qh(_0x5f4867);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x3ceb81;
    }();
    var _0x51d581 = function () {
      function _0x1ad53c(_0x1b8e67) {
        this.rc = _0x1b8e67;
      }
      _0x1ad53c.fk = $("#game-view");
      _0x1ad53c.gk = $("#results-view");
      _0x1ad53c.hk = $("#main-menu-view");
      _0x1ad53c.ik = $("#popup-view");
      _0x1ad53c.jk = $("#toaster-view");
      _0x1ad53c.kk = $("#loading-view");
      _0x1ad53c.lk = $("#stretch-box");
      _0x1ad53c.mk = $("#game-canvas");
      _0x1ad53c.di = $('#background-canvas');
      _0x1ad53c.nk = $("#social-buttons");
      _0x1ad53c.ok = $("#markup-wrap");
      _0x1ad53c.prototype.a = function () {};
      _0x1ad53c.prototype.ii = function () {};
      _0x1ad53c.prototype.ji = function () {};
      _0x1ad53c.prototype.ei = function () {};
      _0x1ad53c.prototype.Ra = function () {};
      _0x1ad53c.prototype.Pa = function (_0x536cb4, _0x3963d7) {};
      return _0x1ad53c;
    }();
    var _0x2e04d0 = function () {
      function _0x630382(_0x319e10, _0x5b8602, _0x40a9cb, _0x270c45, _0x3fe925, _0x47374e) {
        var _0x243602 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x319e10 + "</span></div>";
        var _0x30f66b = $(_0x243602);
        _0x30f66b.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              'method': "feed",
              'display': "popup",
              'link': _0x5b8602,
              'name': _0x40a9cb,
              'caption': _0x270c45,
              'description': _0x3fe925,
              'picture': _0x47374e
            }, function () {});
          }
        });
        return _0x30f66b;
      }
      var _0x22f092 = $("#final-caption");
      var _0x56bc38 = $("#final-continue");
      var _0x34cbc5 = $('#congrats-bg');
      var _0x2a009f = $('#unl6wj4czdl84o9b');
      $("#congrats");
      var _0x200400 = $("#final-share-fb");
      var _0x15f218 = $("#final-message");
      var _0x2b3f4d = $("#final-score");
      var _0x24d491 = $("#final-place");
      var _0xcf6a6a = $('#final-board');
      var _0x2b6e42 = _0x122e71(_0x51d581, function () {
        _0x51d581.call(this, 0x0);
        var _0x24f77f = this;
        var _0x2c7122 = window.anApp = _0x1113af;
        var _0x3b4847 = _0x51d581.mk.get()[0x0];
        _0x200400.toggle(_0x14dea3.qk);
        _0x22f092.text(_0x536e03("index.game.result.title"));
        _0x56bc38.text(_0x536e03("index.game.result.continue"));
        _0x56bc38.click(function () {
          _0x2c7122.r.Cd();
          _0x2c7122.f.Ma.c();
          _0x2c7122.r.G(_0x18ec17.AudioState.F);
          _0x2c7122.s.I(_0x2c7122.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr('height', window.innerHeight);
        };
        $('html').keydown(function (_0xdea28d) {
          if (_0xdea28d.keyCode == 0x20) {
            _0x24f77f.rk = true;
          }
          if (_0xdea28d.keyCode == 0x6b) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (_0xdea28d.keyCode == 0x6d) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (theoKzObjects.KeyCodeRespawn == _0xdea28d.keyCode) {
            _0x24f77f.rk = true;
            window.onclose();
            setTimeout(function () {
              $('#final-continue').click();
              $('#mm-action-play').click();
              $("#adbl-continue").click();
              $("#final-replay").click();
            }, 0x3e8);
          }
        }).keyup(function (_0x3cea53) {
          if (_0x3cea53.keyCode == 0x20) {
            _0x24f77f.rk = false;
          }
        });
        _0x3b4847.addEventListener("touchmove", function (_0x17c006) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (_0x17c006 === _0x17c006 || window.event) {
              _0x17c006 = _0x17c006.touches[0x0];
              if (_0x17c006.clientX !== undefined) {
                _0x24f77f.sk = Math.atan2(_0x17c006.clientY - _0x3b4847.offsetHeight * 0.5, _0x17c006.clientX - _0x3b4847.offsetWidth * 0.5);
              } else {
                _0x24f77f.sk = Math.atan2(_0x17c006.pageY - _0x3b4847.offsetHeight * 0.5, _0x17c006.pageX - _0x3b4847.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        _0x3b4847.addEventListener("touchstart", function (_0x50996c) {
          if (_0x50996c === _0x50996c || window.event) {
            _0x24f77f.rk = _0x50996c.touches.length >= 0x2;
          }
          _0x50996c.preventDefault();
        }, true);
        _0x3b4847.addEventListener("touchend", function (_0x2efbfb) {
          if (_0x2efbfb === _0x2efbfb || window.event) {
            _0x24f77f.rk = _0x2efbfb.touches.length >= 0x2;
          }
        }, true);
        _0x3b4847.addEventListener("mousemove", function (_0x5a0b6e) {
          if (!PilotoAutomatico && _0x5a0b6e.clientX !== undefined) {
            _0x24f77f.sk = Math.atan2(_0x5a0b6e.clientY - _0x3b4847.offsetHeight * 0.5, _0x5a0b6e.clientX - _0x3b4847.offsetWidth * 0.5);
          }
        }, true);
        _0x3b4847.addEventListener("mousedown", function (_0x359c22) {
          _0x24f77f.rk = true;
        }, true);
        _0x3b4847.addEventListener('mouseup', function (_0x48a371) {
          _0x24f77f.rk = false;
        }, true);
        this.wb = new _0x1e257e(_0x51d581.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x24f77f;
      });
      _0x2b6e42.prototype.a = function () {};
      _0x2b6e42.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0x51d581.fk.stop();
          _0x51d581.fk.fadeIn(0x1f4);
          _0x51d581.gk.stop();
          _0x51d581.gk.fadeOut(0x1);
          _0x51d581.hk.stop();
          _0x51d581.hk.fadeOut(0x32);
          _0x51d581.ik.stop();
          _0x51d581.ik.fadeOut(0x32);
          _0x51d581.jk.stop();
          _0x51d581.jk.fadeOut(0x32);
          _0x51d581.kk.stop();
          _0x51d581.kk.fadeOut(0x32);
          _0x51d581.lk.stop();
          _0x51d581.lk.fadeOut(0x1);
          _0x51d581.di.stop();
          _0x51d581.di.fadeOut(0x32);
          _0x25a902.Le(false);
          _0x51d581.nk.stop();
          _0x51d581.nk.fadeOut(0x32);
          _0x51d581.ok.stop();
          _0x51d581.ok.fadeOut(0x32);
        } else {
          _0x51d581.fk.stop();
          _0x51d581.fk.fadeIn(0x1f4);
          _0x51d581.gk.stop();
          _0x51d581.gk.fadeIn(0x1f4);
          _0x51d581.hk.stop();
          _0x51d581.hk.fadeOut(0x32);
          _0x51d581.ik.stop();
          _0x51d581.ik.fadeOut(0x32);
          _0x51d581.jk.stop();
          _0x51d581.jk.fadeOut(0x32);
          _0x51d581.kk.stop();
          _0x51d581.kk.fadeOut(0x32);
          _0x51d581.lk.stop();
          _0x51d581.lk.fadeOut(0x1);
          _0x51d581.di.stop();
          _0x51d581.di.fadeOut(0x32);
          _0x25a902.Le(false);
          _0x51d581.nk.stop();
          _0x51d581.nk.fadeOut(0x32);
          _0x51d581.ok.stop();
          _0x51d581.ok.fadeOut(0x32);
        }
      };
      _0x2b6e42.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0x2b6e42.prototype.Fa = function () {
        _0x34cbc5.hide();
        setTimeout(function () {
          _0x34cbc5.fadeIn(0x1f4);
        }, 0xbb8);
        _0x2a009f.hide();
        setTimeout(function () {
          _0x2a009f.fadeIn(0x1f4);
        }, 0x1f4);
        this.cb = 0x1;
        return this;
      };
      _0x2b6e42.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x1113af).r.Gd();
        }
      };
      _0x2b6e42.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0x2b6e42.prototype.Pa = function (_0xf6cc91, _0xaea6c) {
        this.wb.Pa(_0xf6cc91, _0xaea6c);
      };
      _0x2b6e42.prototype.Da = function (_0xa70680, _0x1e137b, _0x2eb469) {
        var _0x41c36c = undefined;
        var _0x453098 = undefined;
        var _0x104559 = undefined;
        if (_0x1e137b >= 0x1 && _0x1e137b <= 0xa) {
          _0x41c36c = _0x536e03('index.game.result.place.i' + _0x1e137b);
          _0x453098 = _0x536e03("index.game.result.placeInBoard");
          _0x104559 = _0x536e03("index.game.social.shareResult.messGood").replace("{0}", _0x2eb469).replace("{1}", _0xa70680).replace("{2}", _0x41c36c);
        } else {
          _0x41c36c = '';
          _0x453098 = _0x536e03("index.game.result.tryHit");
          _0x104559 = _0x536e03("index.game.social.shareResult.messNorm").replace("{0}", _0x2eb469).replace("{1}", _0xa70680);
        }
        _0x15f218.html(_0x536e03("index.game.result.your"));
        _0x2b3f4d.html(_0xa70680);
        _0x24d491.html(_0x41c36c);
        _0xcf6a6a.html(_0x453098);
        if (_0x14dea3.qk) {
          var _0x17540f = _0x536e03("index.game.result.share");
          _0x536e03("index.game.social.shareResult.caption");
          _0x200400.empty().append(_0x630382(_0x17540f, "https://wormate.io", "wormate.io", _0x104559, _0x104559, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      _0x2b6e42.prototype.T = function () {
        return this.sk;
      };
      _0x2b6e42.prototype.U = function () {
        return this.rk;
      };
      return _0x2b6e42;
    }();
    var _0x128589 = function () {
      var _0x12585e = $("#loading-worm-a");
      var _0xbae85b = $('#loading-worm-b');
      var _0x2796bf = $("#loading-worm-c");
      var _0x255732 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x53e56d = _0x122e71(_0x51d581, function () {
        _0x51d581.call(this, 0x0);
      });
      _0x53e56d.prototype.a = function () {};
      _0x53e56d.prototype.ii = function () {
        _0x51d581.fk.stop();
        _0x51d581.fk.fadeOut(0x32);
        _0x51d581.gk.stop();
        _0x51d581.gk.fadeOut(0x32);
        _0x51d581.hk.stop();
        _0x51d581.hk.fadeOut(0x32);
        _0x51d581.ik.stop();
        _0x51d581.ik.fadeOut(0x32);
        _0x51d581.jk.stop();
        _0x51d581.jk.fadeOut(0x32);
        _0x51d581.kk.stop();
        _0x51d581.kk.fadeIn(0x1f4);
        _0x51d581.lk.stop();
        _0x51d581.lk.fadeIn(0x1);
        _0x51d581.di.stop();
        _0x51d581.di.fadeIn(0x1f4);
        _0x25a902.Le(true);
        _0x51d581.nk.stop();
        _0x51d581.nk.fadeOut(0x32);
        _0x51d581.ok.stop();
        _0x51d581.ok.fadeOut(0x32);
      };
      _0x53e56d.prototype.ji = function () {
        this.tk();
      };
      _0x53e56d.prototype.tk = function () {
        _0x12585e.css("background-position", "100% 200%");
        for (var _0x1e8f58 = 0x0; _0x1e8f58 < _0x255732.length; _0x1e8f58++) {
          var _0x1224c1 = Math.floor(Math.random() * _0x255732.length);
          var _0x3dad1b = _0x255732[_0x1e8f58];
          _0x255732[_0x1e8f58] = _0x255732[_0x1224c1];
          _0x255732[_0x1224c1] = _0x3dad1b;
        }
        _0x12585e.css('background-position', _0x255732[0x0]);
        _0xbae85b.css('background-position', _0x255732[0x1]);
        _0x2796bf.css("background-position", _0x255732[0x2]);
      };
      return _0x53e56d;
    }();
    var _0x282910 = function () {
      $("#mm-event-text");
      var _0x65f12e = $("#mm-skin-canv");
      var _0x40473c = $("#mm-skin-prev");
      var _0x11f288 = $("#mm-skin-next");
      var _0x445603 = $("#mm-skin-over");
      var _0x5aecdc = $('#mm-skin-over-button-list');
      var _0x1be391 = $("#mm-params-nickname");
      var _0x4c77f5 = $('#mm-params-game-mode');
      var _0x2bce27 = $("#mm-action-buttons");
      var _0x596c1a = $("#mm-action-play");
      var _0x303a3c = $("#mm-action-guest");
      var _0x128639 = $("#mm-action-login");
      var _0x3b9f2a = $("#mm-player-info");
      var _0x280338 = $("#mm-store");
      var _0x5aa671 = $("#mm-leaders");
      var _0xacd45a = $("#mm-settings");
      var _0x5d1066 = $("#mm-coins-box");
      var _0x2a6f45 = $("#mm-player-avatar");
      var _0x41cc41 = $("#mm-player-username");
      var _0x41f7fd = $('#mm-coins-val');
      var _0x546fa9 = $('#mm-player-exp-bar');
      var _0xd9b106 = $("#mm-player-exp-val");
      var _0x4222f8 = $("#mm-player-level");
      var _0x16445f = _0x122e71(_0x51d581, function () {
        _0x51d581.call(this, 0x1);
        var _0x3b8944 = window.anApp = _0x1113af;
        this.uk = new _0x490e10(_0x65f12e);
        _0x4c77f5.click(function () {
          _0x3b8944.r.Cd();
        });
        _0x65f12e.click(function () {
          if (_0x3b8944.u.P()) {
            _0x3b8944.r.Cd();
            _0x3b8944.s.I(_0x3b8944.s.$h);
          }
        });
        _0x40473c.click(function () {
          _0x3b8944.r.Cd();
          _0x3b8944.t.Ah();
        });
        _0x11f288.click(function () {
          _0x3b8944.r.Cd();
          _0x3b8944.t.zh();
        });
        _0x1be391.keypress(function (_0x3481b3) {
          if (_0x3481b3.keyCode == 0xd) {
            _0x3b8944.na();
          }
        });
        _0x596c1a.click(function () {
          _0x3b8944.r.Cd();
          _0x3b8944.na();
        });
        _0x303a3c.click(function () {
          _0x3b8944.r.Cd();
          _0x3b8944.na();
        });
        _0x128639.click(function () {
          _0x3b8944.r.Cd();
          _0x3b8944.s.I(_0x3b8944.s.Zh);
        });
        _0xacd45a.click(function () {
          _0x3b8944.r.Cd();
          _0x3b8944.s.I(_0x3b8944.s.xa);
        });
        _0x3b9f2a.click(function () {
          if (_0x3b8944.u.P()) {
            _0x3b8944.r.Cd();
            _0x3b8944.s.I(_0x3b8944.s.Yh);
          }
        });
        _0x5aa671.click(function () {
          if (_0x3b8944.u.P()) {
            _0x3b8944.r.Cd();
            _0x3b8944.s.I(_0x3b8944.s.Xh);
          }
        });
        _0x280338.click(function () {
          if (_0x3b8944.u.P()) {
            _0x3b8944.r.Cd();
            _0x3b8944.s.I(_0x3b8944.s._h);
          }
        });
        _0x5d1066.click(function () {
          if (_0x3b8944.u.P()) {
            _0x3b8944.r.Cd();
            _0x3b8944.s.I(_0x3b8944.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("<div id=\"final-continue1\">Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠÙ‡</div>");
        $('#final-continue').after("<div id=\"final-replay\">Ø±Ø³Ø¨ÙˆÙ†</div>");
        $('#final-replay').click(function () {
          let _0xe96943 = hoisinhnhanh;
          if (_0xe96943) {
            anApp.r.Hd();
            anApp.sa(_0xe96943);
          }
        });
        $('#final-continue').html("<div id='final-continue1'>Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠÙ‡</div>");
        $("#final-continue").after("<div id='final-replay'>Ø±Ø³Ø¨ÙˆÙ†</div>");
        $('#final-continue1').on("click", function () {
          var _0x2ea3bf = localStorage.getItem('starredNickname');
          if (_0x2ea3bf) {
            setTimeout(function () {
              $("#mm-params-nickname").val(_0x2ea3bf);
            }, 0x32);
          }
        });
        $("#final-replay").on('click', function () {
          var _0x56cbcd = localStorage.getItem("starredNickname");
          handleRespawn();
          if (_0x56cbcd) {
            setTimeout(function () {
              $("#mm-params-nickname").val(_0x56cbcd);
            }, 0x32);
          }
        });
        var _0x54e5d1 = _0x2805ff(_0x2b84ef.va);
        if (_0x54e5d1 != "ARENA" && _0x54e5d1 != "TEAM2") {
          _0x54e5d1 = 'ARENA';
        }
        _0x4c77f5.val(_0x54e5d1);
      });
      _0x16445f.prototype.a = function () {
        var _0x3d2e83 = window.anApp = _0x1113af;
        var _0x502be5 = this;
        _0x3d2e83.u.V(function () {
          _0x3d2e83.s.F.xk();
        });
        _0x3d2e83.u.Pi(function () {
          if (_0x3d2e83.u.P()) {
            _0x3d2e83.t.Bh(_0x3d2e83.u.Di(), _0x4311a3.ia);
            _0x3d2e83.t.Bh(_0x3d2e83.u.Ei(), _0x4311a3.ja);
            _0x3d2e83.t.Bh(_0x3d2e83.u.Fi(), _0x4311a3.ka);
            _0x3d2e83.t.Bh(_0x3d2e83.u.Gi(), _0x4311a3.la);
            _0x3d2e83.t.Bh(_0x3d2e83.u.Hi(), _0x4311a3.ma);
          } else {
            _0x3d2e83.t.Bh(_0x3d2e83.Ga(), _0x4311a3.ia);
            _0x3d2e83.t.Bh(0x0, _0x4311a3.ja);
            _0x3d2e83.t.Bh(0x0, _0x4311a3.ka);
            _0x3d2e83.t.Bh(0x0, _0x4311a3.la);
            _0x3d2e83.t.Bh(0x0, _0x4311a3.ma);
          }
        });
        _0x3d2e83.u.Pi(function () {
          _0x596c1a.toggle(_0x3d2e83.u.P());
          _0x128639.toggle(!_0x3d2e83.u.P());
          _0x303a3c.toggle(!_0x3d2e83.u.P());
          _0x5aa671.toggle(_0x3d2e83.u.P());
          _0x280338.toggle(_0x3d2e83.u.P());
          _0x5d1066.toggle(_0x3d2e83.u.P());
          if (_0x3d2e83.u.P()) {
            _0x445603.hide();
            _0x41cc41.html(_0x3d2e83.u.wi());
            _0x2a6f45.attr("src", _0x3d2e83.u.xi());
            _0x41f7fd.html(_0x3d2e83.u.zi());
            _0x546fa9.width(_0x3d2e83.u.Bi() * 0x64 / _0x3d2e83.u.Ci() + '%');
            _0xd9b106.html(_0x3d2e83.u.Bi() + " / " + _0x3d2e83.u.Ci());
            _0x4222f8.html(_0x3d2e83.u.Ai());
            _0x1be391.val(_0x3d2e83.u.ga());
          } else {
            _0x445603.toggle(_0x14dea3.qk && !_0x3d2e83.Ha());
            _0x41cc41.html(_0x41cc41.data("guest"));
            _0x2a6f45.attr("src", "/images/guest-avatar-xmas2022.png");
            _0x41f7fd.html('10');
            _0x546fa9.width('0');
            _0xd9b106.html('');
            _0x4222f8.html(0x1);
            _0x1be391.val(_0x2805ff(_0x2b84ef.Aa));
          }
        });
        _0x3d2e83.t.xh(function () {
          _0x502be5.uk.ak(_0x3d2e83.t.ha(_0x4311a3.ia), false, false);
          _0x502be5.uk.bk(_0x3d2e83.t.ha(_0x4311a3.ja), false, false);
          _0x502be5.uk.ck(_0x3d2e83.t.ha(_0x4311a3.ka), false, false);
          _0x502be5.uk.dk(_0x3d2e83.t.ha(_0x4311a3.la), false, false);
          _0x502be5.uk.ek(_0x3d2e83.t.ha(_0x4311a3.ma), false, false);
        });
      };
      _0x16445f.prototype.ii = function () {
        _0x51d581.fk.stop();
        _0x51d581.fk.fadeOut(0x32);
        _0x51d581.gk.stop();
        _0x51d581.gk.fadeOut(0x32);
        _0x51d581.hk.stop();
        _0x51d581.hk.fadeIn(0x1f4);
        _0x51d581.ik.stop();
        _0x51d581.ik.fadeOut(0x32);
        _0x51d581.jk.stop();
        _0x51d581.jk.fadeOut(0x32);
        _0x51d581.kk.stop();
        _0x51d581.kk.fadeOut(0x32);
        _0x51d581.lk.stop();
        _0x51d581.lk.fadeIn(0x1);
        _0x51d581.di.stop();
        _0x51d581.di.fadeIn(0x1f4);
        _0x25a902.Le(true);
        _0x51d581.nk.stop();
        _0x51d581.nk.fadeIn(0x1f4);
        _0x51d581.ok.stop();
        _0x51d581.ok.fadeIn(0x1f4);
      };
      _0x16445f.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
        this.uk.Le(true);
      };
      _0x16445f.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x16445f.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x16445f.prototype.Pa = function (_0xe97658, _0x19baf3) {
        this.uk.Pa();
      };
      _0x16445f.prototype.ga = function () {
        return _0x1be391.val();
      };
      _0x16445f.prototype.D = function () {
        return _0x4c77f5.val();
      };
      _0x16445f.prototype.xk = function () {
        _0x2bce27.show();
      };
      _0x16445f.prototype.vk = function () {
        var _0x11b88f = $("#mm-advice-cont").children();
        var _0x49fb5c = 0x0;
        setInterval(function () {
          _0x11b88f.eq(_0x49fb5c).fadeOut(0x1f4, function () {
            if (++_0x49fb5c >= _0x11b88f.length) {
              _0x49fb5c = 0x0;
            }
            _0x11b88f.eq(_0x49fb5c).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x16445f.prototype.wk = function () {
        function _0x1daefe() {
          _0x5226dc.Ka(true);
          setTimeout(function () {
            _0x445603.hide();
          }, 0xbb8);
        }
        var _0x5226dc = window.anApp = _0x1113af;
        if (_0x14dea3.qk && !_0x5226dc.Ha()) {
          _0x445603.show();
          var _0x232c66 = _0x536e03("index.game.main.menu.unlockSkins.share");
          var _0x47945d = encodeURIComponent(_0x536e03('index.game.main.menu.unlockSkins.comeAndPlay') + " https://wormate.io/ #wormate #wormateio");
          var _0x56a46b = encodeURIComponent(_0x536e03("index.game.main.menu.unlockSkins.comeAndPlay"));
          _0x5aecdc.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x47945d + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x232c66 + "</span></a>").click(_0x1daefe));
          _0x5aecdc.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x56a46b + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x232c66 + '</span></a>').click(_0x1daefe));
        }
      };
      return _0x16445f;
    }();
    var _0x112043 = function () {
      var _0x57bc95 = _0x122e71(_0x51d581, function () {
        _0x51d581.call(this, 0x0);
      });
      _0x57bc95.prototype.a = function () {};
      _0x57bc95.prototype.ii = function () {
        _0x51d581.fk.stop();
        _0x51d581.fk.fadeOut(0x32);
        _0x51d581.gk.stop();
        _0x51d581.gk.fadeOut(0x32);
        _0x51d581.hk.stop();
        _0x51d581.hk.fadeOut(0x32);
        _0x51d581.ik.stop();
        _0x51d581.ik.fadeOut(0x32);
        _0x51d581.jk.stop();
        _0x51d581.jk.fadeOut(0x32);
        _0x51d581.kk.stop();
        _0x51d581.kk.fadeOut(0x32);
        _0x51d581.lk.stop();
        _0x51d581.lk.fadeOut(0x1);
        _0x51d581.di.stop();
        _0x51d581.di.fadeOut(0x32);
        _0x25a902.Le(false);
        _0x51d581.nk.stop();
        _0x51d581.nk.fadeOut(0x32);
        _0x51d581.ok.stop();
        _0x51d581.ok.fadeOut(0x32);
      };
      return _0x57bc95;
    }();
    var _0x5a0e98 = function () {
      var _0x35b84c = $("#toaster-stack");
      var _0x272930 = _0x122e71(_0x51d581, function () {
        _0x51d581.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x272930.prototype.a = function () {};
      _0x272930.prototype.ii = function () {
        _0x51d581.fk.stop();
        _0x51d581.fk.fadeOut(0x32);
        _0x51d581.gk.stop();
        _0x51d581.gk.fadeOut(0x32);
        _0x51d581.hk.stop();
        _0x51d581.hk.fadeOut(0x32);
        _0x51d581.ik.stop();
        _0x51d581.ik.fadeOut(0x32);
        _0x51d581.jk.stop();
        _0x51d581.jk.fadeIn(0x1f4);
        _0x51d581.kk.stop();
        _0x51d581.kk.fadeOut(0x32);
        _0x51d581.lk.stop();
        _0x51d581.lk.fadeIn(0x1);
        _0x51d581.di.stop();
        _0x51d581.di.fadeIn(0x1f4);
        _0x25a902.Le(true);
        _0x51d581.nk.stop();
        _0x51d581.nk.fadeOut(0x32);
        _0x51d581.ok.stop();
        _0x51d581.ok.fadeIn(0x1f4);
      };
      _0x272930.prototype.ji = function () {
        this.Ak();
      };
      _0x272930.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0x0;
      };
      _0x272930.prototype._ = function (_0x388ad3) {
        this.yk.unshift(_0x388ad3);
        setTimeout(function () {
          (window.anApp = _0x1113af).s.ki();
        }, 0x0);
      };
      _0x272930.prototype.Ti = function (_0x3deff5) {
        this.yk.push(_0x3deff5);
        setTimeout(function () {
          (window.anApp = _0x1113af).s.ki();
        }, 0x0);
      };
      _0x272930.prototype.Ak = function () {
        var _0x347ad5 = this;
        if (this.zk == null) {
          if (this.yk.length == 0x0) {
            (window.anApp = _0x1113af).s.gi();
            return;
          }
          var _0x4b1a50 = this.yk.shift();
          this.zk = _0x4b1a50;
          var _0x5b3c92 = _0x4b1a50.Bk();
          _0x5b3c92.hide();
          _0x5b3c92.fadeIn(0x12c);
          _0x35b84c.append(_0x5b3c92);
          _0x4b1a50.Ck = function () {
            _0x5b3c92.fadeOut(0x12c);
            setTimeout(function () {
              _0x5b3c92.remove();
            }, 0x12c);
            if (_0x347ad5.zk == _0x4b1a50) {
              _0x347ad5.zk = null;
            }
            _0x347ad5.Ak();
          };
          _0x4b1a50.ji();
        }
      };
      return _0x272930;
    }();
    var _0x15c0e1 = function () {
      var _0x59f777 = $("#popup-menu-label");
      var _0x2f8f0c = $('#popup-menu-coins-box');
      var _0x3a3824 = $('#popup-menu-coins-val');
      $("#popup-menu-back").click(function () {
        var _0x4b22c7 = window.anApp = _0x1113af;
        _0x4b22c7.r.Cd();
        _0x4b22c7.s.gi();
      });
      _0x2f8f0c.click(function () {
        var _0x521536 = window.anApp = _0x1113af;
        if (_0x521536.u.P()) {
          _0x521536.r.Cd();
          _0x521536.s.I(_0x521536.s.Wh);
        }
      });
      var _0x47064f = _0x122e71(_0x51d581, function (_0x1c399d, _0x5b6b84) {
        _0x51d581.call(this, 0x1);
        this.ad = _0x1c399d;
        this.Dk = _0x5b6b84;
      });
      _0x47064f.prototype.a = function () {
        _0x47064f.parent.prototype.a.call(this);
        if (!_0x47064f.Ek) {
          _0x47064f.Ek = true;
          var _0x326d80 = window.anApp = _0x1113af;
          _0x326d80.u.Pi(function () {
            if (_0x326d80.u.P()) {
              _0x3a3824.html(_0x326d80.u.zi());
            } else {
              _0x3a3824.html('0');
            }
          });
        }
      };
      _0x47064f.Fk = $("#coins-view");
      _0x47064f.Gk = $("#leaders-view");
      _0x47064f.Hk = $('#profile-view');
      _0x47064f.Ik = $("#settings-view");
      _0x47064f.Jk = $("#login-view");
      _0x47064f.Kk = $("#skins-view");
      _0x47064f.Lk = $("#store-view");
      _0x47064f.Mk = $('#wear-view');
      _0x47064f.Nk = $("#withdraw-consent-view");
      _0x47064f.Ok = $('#delete-account-view');
      _0x47064f.Pk = $('#please-wait-view');
      _0x47064f.prototype.ii = function () {
        _0x51d581.fk.stop();
        _0x51d581.fk.fadeOut(0xc8);
        _0x51d581.gk.stop();
        _0x51d581.gk.fadeOut(0xc8);
        _0x51d581.hk.stop();
        _0x51d581.hk.fadeOut(0xc8);
        _0x51d581.ik.stop();
        _0x51d581.ik.fadeIn(0xc8);
        _0x51d581.jk.stop();
        _0x51d581.jk.fadeOut(0xc8);
        _0x51d581.kk.stop();
        _0x51d581.kk.fadeOut(0xc8);
        _0x51d581.nk.stop();
        _0x51d581.nk.fadeIn(0xc8);
        _0x51d581.ok.stop();
        _0x51d581.ok.fadeIn(0xc8);
        _0x59f777.html(this.ad);
        _0x2f8f0c.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x47064f.prototype.Rk = function () {};
      _0x47064f.prototype.Sk = function () {
        _0x15c0e1.Pk.stop();
        _0x15c0e1.Pk.fadeIn(0x12c);
      };
      _0x47064f.prototype.Qk = function () {
        _0x15c0e1.Pk.stop();
        _0x15c0e1.Pk.fadeOut(0x12c);
      };
      return _0x47064f;
    }();
    var _0x35a601 = function () {
      var _0x4ece8d = $("#store-buy-coins_125000");
      var _0xc38b36 = $('#store-buy-coins_50000');
      var _0x90e030 = $("#store-buy-coins_16000");
      var _0xdf69b7 = $("#store-buy-coins_7000");
      var _0x1d2128 = $("#store-buy-coins_3250");
      var _0x19ea1c = $("#store-buy-coins_1250");
      var _0x2e194b = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.coins.tab"), false);
        var _0x1f1226 = window.anApp = _0x1113af;
        var _0x11fe3c = this;
        _0x4ece8d.click(function () {
          _0x1f1226.r.Cd();
          _0x11fe3c.Tk("coins_125000");
        });
        _0xc38b36.click(function () {
          _0x1f1226.r.Cd();
          _0x11fe3c.Tk('coins_50000');
        });
        _0x90e030.click(function () {
          _0x1f1226.r.Cd();
          _0x11fe3c.Tk("coins_16000");
        });
        _0xdf69b7.click(function () {
          _0x1f1226.r.Cd();
          _0x11fe3c.Tk("coins_7000");
        });
        _0x1d2128.click(function () {
          _0x1f1226.r.Cd();
          _0x11fe3c.Tk('coins_3250');
        });
        _0x19ea1c.click(function () {
          _0x1f1226.r.Cd();
          _0x11fe3c.Tk('coins_1250');
        });
      });
      _0x2e194b.prototype.a = function () {
        _0x2e194b.parent.prototype.a.call(this);
      };
      _0x2e194b.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeIn(0xc8);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x2e194b.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
      };
      _0x2e194b.prototype.Tk = function (_0x8ef316) {};
      return _0x2e194b;
    }();
    var _0x570b7b = function () {
      var _0x3d5775 = $("#highscore-table");
      var _0x128e5b = $('#leaders-button-level');
      var _0x151a94 = $('#leaders-button-highscore');
      var _0x382b8b = $('#leaders-button-kills');
      var _0x1515cd = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.leaders.tab"), true);
        var _0x4a727e = window.anApp = _0x1113af;
        var _0x2feca1 = this;
        this.Uk = {};
        this.Vk = {
          'Wk': {
            'Xk': _0x128e5b,
            'Yk': "byLevel"
          },
          'Zk': {
            'Xk': _0x151a94,
            'Yk': "byHighScore"
          },
          '$k': {
            'Xk': _0x382b8b,
            'Yk': "byKillsAndHeadShots"
          }
        };
        _0x128e5b.click(function () {
          _0x4a727e.r.Cd();
          _0x2feca1._k(_0x2feca1.Vk.Wk);
        });
        _0x151a94.click(function () {
          _0x4a727e.r.Cd();
          _0x2feca1._k(_0x2feca1.Vk.Zk);
        });
        _0x382b8b.click(function () {
          _0x4a727e.r.Cd();
          _0x2feca1._k(_0x2feca1.Vk.$k);
        });
      });
      _0x1515cd.prototype.a = function () {
        _0x1515cd.parent.prototype.a.call(this);
      };
      _0x1515cd.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeIn(0xc8);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x1515cd.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
        var _0x48bde1 = this;
        this.Sk();
        $.get("https://gateway.wormate.io/pub/leaders", function (_0x1a9cb0) {
          _0x48bde1.Uk = _0x1a9cb0;
          _0x48bde1._k(_0x48bde1.al ?? _0x48bde1.Vk.Wk);
          _0x48bde1.Qk();
        }).done(function () {
          _0x48bde1.Qk();
        });
      };
      _0x1515cd.prototype._k = function (_0x5453c3) {
        this.al = _0x5453c3;
        for (var _0x19b78c in this.Vk) {
          if (this.Vk.hasOwnProperty(_0x19b78c)) {
            var _0x17472c = this.Vk[_0x19b78c];
            _0x17472c.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass('pressed');
        var _0xb04533 = this.Uk[this.al.Yk];
        var _0x55aaff = '';
        for (var _0xa1f8ba = 0x0; _0xa1f8ba < _0xb04533.length; _0xa1f8ba++) {
          var _0x4026c4 = _0xb04533[_0xa1f8ba];
          _0x55aaff += "<div class=\"table-row\"><span>" + (_0xa1f8ba + 0x1) + "</span><span><img src=\"" + _0x4026c4.avatarUrl + "\"/></span><span>" + _0x4026c4.username + "</span><span>" + _0x4026c4.level + "</span><span>" + _0x4026c4.highScore + '</span><span>' + _0x4026c4.headShots + " / " + _0x4026c4.kills + '</span></div>';
        }
        _0x3d5775.empty();
        _0x3d5775.append(_0x55aaff);
      };
      return _0x1515cd;
    }();
    var _0x1d98bb = function () {
      var _0x5aba5e = $('#popup-login-gg');
      var _0x554cef = $("#popup-login-fb");
      var _0xa96f88 = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03('index.game.popup.menu.login.tab'), false);
        var _0x2bb99a = window.anApp = _0x1113af;
        var _0x30dc1a = this;
        _0x5aba5e.click(function () {
          _0x2bb99a.r.Cd();
          _0x30dc1a.Sk();
          _0x2bb99a.u.Qi(function () {
            _0x30dc1a.Qk();
          });
          setTimeout(function () {
            _0x30dc1a.Qk();
          }, 0x2710);
          _0x2bb99a.u.Zi();
        });
        _0x554cef.click(function () {
          _0x2bb99a.r.Cd();
          _0x30dc1a.Sk();
          _0x2bb99a.u.Qi(function () {
            _0x30dc1a.Qk();
          });
          setTimeout(function () {
            _0x30dc1a.Qk();
          }, 0x2710);
          _0x2bb99a.u.Vi();
        });
      });
      _0xa96f88.prototype.a = function () {
        _0xa96f88.parent.prototype.a.call(this);
      };
      _0xa96f88.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeIn(0xc8);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0xa96f88.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
      };
      return _0xa96f88;
    }();
    var _0xaeae82 = function () {
      var _0xc10be8 = $("#profile-avatar");
      var _0x4d082e = $("#profile-username");
      var _0x1ba964 = $("#profile-experience-bar");
      var _0x16c644 = $("#profile-experience-val");
      var _0x28e855 = $('#profile-level');
      var _0x2e4210 = $("#profile-stat-highScore");
      var _0x5599c3 = $("#profile-stat-bestSurvivalTime");
      var _0x38af8f = $("#profile-stat-kills");
      var _0x55ff1f = $("#profile-stat-headshots");
      var _0x223590 = $('#profile-stat-gamesPlayed');
      var _0x3289f4 = $("#profile-stat-totalTimeSpent");
      var _0x397723 = $("#profile-stat-registrationDate");
      var _0x114074 = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.profile.tab"), true);
      });
      _0x114074.prototype.a = function () {
        _0x114074.parent.prototype.a.call(this);
      };
      _0x114074.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeIn(0xc8);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x114074.prototype.ji = function () {
        var _0x2fc8bc = window.anApp = _0x1113af;
        _0x2fc8bc.r.Dd();
        var _0x57a6ac = _0x2fc8bc.u.Oi();
        var _0x3b3ac9 = moment([_0x57a6ac.year, _0x57a6ac.month - 0x1, _0x57a6ac.day]).format('LL');
        _0x4d082e.html(_0x2fc8bc.u.wi());
        _0xc10be8.attr("src", _0x2fc8bc.u.xi());
        _0x1ba964.width(_0x2fc8bc.u.Bi() * 0x64 / _0x2fc8bc.u.Ci() + '%');
        _0x16c644.html(_0x2fc8bc.u.Bi() + " / " + _0x2fc8bc.u.Ci());
        _0x28e855.html(_0x2fc8bc.u.Ai());
        _0x2e4210.html(_0x2fc8bc.u.Ii());
        _0x5599c3.html(_0x25f7f3(_0x2fc8bc.u.Ji()));
        _0x38af8f.html(_0x2fc8bc.u.Ki());
        _0x55ff1f.html(_0x2fc8bc.u.Li());
        _0x223590.html(_0x2fc8bc.u.Mi());
        _0x3289f4.html(_0x25f7f3(_0x2fc8bc.u.Ni()));
        _0x397723.html(_0x3b3ac9);
      };
      return _0x114074;
    }();
    var _0x4c5511 = function () {
      var _0x354304 = $("#settings-music-enabled-switch");
      var _0x45bc7f = $('#settings-sfx-enabled-switch');
      var _0x51579b = $("#settings-show-names-switch");
      var _0x18a6ae = $("#popup-logout");
      var _0x37e993 = $("#popup-logout-container");
      var _0x471181 = $('#popup-delete-account');
      var _0x46819f = $("#popup-delete-account-container");
      var _0x23e4cd = $('#popup-withdraw-consent');
      var _0x4154c9 = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.settings.tab"), false);
        var _0x1b3b22 = this;
        var _0x215c90 = window.anApp = _0x1113af;
        _0x354304.click(function () {
          var _0x1121c0 = !!_0x354304.prop("checked");
          _0x7adae5(_0x2b84ef.Me, _0x1121c0, 0x1e);
          _0x215c90.r.td(_0x1121c0);
          _0x215c90.r.Cd();
        });
        _0x45bc7f.click(function () {
          var _0x30d34b = !!_0x45bc7f.prop("checked");
          _0x7adae5(_0x2b84ef.Ne, _0x30d34b, 0x1e);
          _0x215c90.r.rd(_0x30d34b);
          _0x215c90.r.Cd();
        });
        _0x51579b.click(function () {
          _0x215c90.r.Cd();
        });
        _0x18a6ae.click(function () {
          _0x215c90.r.Cd();
          _0x1b3b22.Sk();
          setTimeout(function () {
            _0x1b3b22.Qk();
          }, 0x7d0);
          _0x215c90.u.Wi();
        });
        _0x471181.click(function () {
          if (_0x215c90.u.P()) {
            _0x215c90.r.Cd();
            _0x215c90.s.I(_0x215c90.s.Vh);
          } else {
            _0x215c90.r.Hd();
          }
        });
        _0x23e4cd.click(function () {
          if (_0x215c90.Y()) {
            _0x215c90.r.Cd();
            _0x215c90.s.I(_0x215c90.s.Uh);
          } else {
            _0x215c90.r.Hd();
          }
        });
      });
      _0x4154c9.prototype.a = function () {
        _0x4154c9.parent.prototype.a.call(this);
        var _0x48b2c5 = window.anApp = _0x1113af;
        var _0x459319 = undefined;
        switch (_0x2805ff(_0x2b84ef.Me)) {
          case "false":
            _0x459319 = false;
            break;
          default:
            _0x459319 = true;
        }
        _0x354304.prop('checked', _0x459319);
        _0x48b2c5.r.td(_0x459319);
        var _0x490c1d = undefined;
        switch (_0x2805ff(_0x2b84ef.Ne)) {
          case "false":
            _0x490c1d = false;
            break;
          default:
            _0x490c1d = true;
        }
        _0x45bc7f.prop("checked", _0x490c1d);
        _0x48b2c5.r.rd(_0x490c1d);
        var _0x486a6e = undefined;
        switch (_0x2805ff(_0x2b84ef.ya)) {
          case "false":
            _0x486a6e = false;
            break;
          default:
            _0x486a6e = true;
        }
        _0x51579b.prop("checked", _0x486a6e);
        _0x48b2c5.u.V(function () {
          _0x37e993.toggle(_0x48b2c5.u.P());
          _0x46819f.toggle(_0x48b2c5.u.P());
        });
      };
      _0x4154c9.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeIn(0xc8);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x4154c9.prototype.ji = function () {
        var _0x581434 = window.anApp = _0x1113af;
        _0x581434.r.Dd();
        if (_0x581434.Y()) {
          _0x23e4cd.show();
        } else {
          _0x23e4cd.hide();
        }
      };
      _0x4154c9.prototype.wa = function () {
        return _0x51579b.prop("checked");
      };
      return _0x4154c9;
    }();
    var _0x4b915f = function () {
      var _0x91731 = $("#store-view-canv");
      var _0x4f229a = $("#skin-description-text");
      var _0x175fe4 = $("#skin-group-description-text");
      var _0x520acf = $("#store-locked-bar");
      var _0x2547fb = $("#store-locked-bar-text");
      var _0x5050de = $("#store-buy-button");
      var _0x3e65f7 = $('#store-item-price');
      var _0x1788a4 = $('#store-groups');
      var _0xf3459 = $('#store-view-prev');
      var _0x3e64a8 = $("#store-view-next");
      var _0x495e58 = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.skins.tab"), true);
        var _0x5d72e5 = this;
        var _0x2158b6 = window.anApp = _0x1113af;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x490e10(_0x91731);
        _0x5050de.click(function () {
          _0x2158b6.r.Cd();
          _0x5d72e5.fl();
        });
        _0xf3459.click(function () {
          _0x2158b6.r.Cd();
          _0x5d72e5.bl.gl();
        });
        _0x3e64a8.click(function () {
          _0x2158b6.r.Cd();
          _0x5d72e5.bl.hl();
        });
      });
      _0x495e58.prototype.a = function () {
        _0x495e58.parent.prototype.a.call(this);
        var _0xe8af82 = this;
        var _0x4267fc = window.anApp = _0x1113af;
        _0x4267fc.p.ca(function () {
          var _0x232351 = _0x4267fc.p.Ac();
          if (_0x232351 != null) {
            _0xe8af82.cl = [];
            for (var _0x5bb17f = 0x0; _0x5bb17f < _0x232351.skinGroupArrayDict.length; _0x5bb17f++) {
              _0xe8af82.cl.push(new _0x125e49(_0xe8af82, _0x232351.skinGroupArrayDict[_0x5bb17f]));
            }
            _0xe8af82.dl = {};
            for (var _0xf9dbe1 = 0x0; _0xf9dbe1 < _0x232351.skinArrayDict.length; _0xf9dbe1++) {
              var _0x3f811b = _0x232351.skinArrayDict[_0xf9dbe1];
              _0xe8af82.dl[_0x3f811b.id] = _0x3f811b;
            }
          }
        });
        this.il(false);
        _0x4267fc.t.xh(function () {
          _0xe8af82.il(false);
        });
      };
      _0x495e58.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeIn(0xc8);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x495e58.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x495e58.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x495e58.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x495e58.prototype.Pa = function (_0x1e7e89, _0x47dc7c) {
        this.el.Pa();
      };
      _0x495e58.prototype.jl = function () {
        var _0x4fc7d6 = this;
        var _0x2feb13 = this;
        var _0x1db4bf = window.anApp = _0x1113af;
        _0x1788a4.empty();
        for (var _0x49f187 = 0x0; _0x49f187 < this.cl.length; _0x49f187++) {
          (function (_0x3f8eae) {
            var _0x4a8dbd = _0x4fc7d6.cl[_0x3f8eae];
            var _0x18a9d4 = document.createElement('li');
            _0x1788a4.append(_0x18a9d4);
            var _0x1c6f32 = $(_0x18a9d4);
            _0x1c6f32.html(_0x4a8dbd.kl());
            _0x1c6f32.click(function () {
              _0x1db4bf.r.Cd();
              _0x2feb13.ll(_0x4a8dbd);
            });
            _0x4a8dbd.ml = _0x1c6f32;
          })(_0x49f187);
        }
        if (this.cl.length > 0x0) {
          var _0x407d31 = _0x1db4bf.t.ha(_0x4311a3.ia);
          for (var _0x49f187 = 0x0; _0x49f187 < this.cl.length; _0x49f187++) {
            var _0x2a4a1b = this.cl[_0x49f187];
            var _0x114c60 = _0x2a4a1b.nl.list;
            for (var _0xe76125 = 0x0; _0xe76125 < _0x114c60.length; _0xe76125++) {
              if (_0x114c60[_0xe76125] == _0x407d31) {
                _0x2a4a1b.ol = _0xe76125;
                this.ll(_0x2a4a1b);
                return;
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0x495e58.prototype.ll = function (_0x2082a8) {
        if (this.bl != _0x2082a8) {
          var _0x2e03c2 = window.anApp = _0x1113af;
          this.bl = _0x2082a8;
          _0x1788a4.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x175fe4.html('');
          if (_0x2082a8.nl != null) {
            var _0x3133fb = _0x2e03c2.p.Ac().textDict[_0x2082a8.nl.description];
            if (_0x3133fb != null) {
              _0x175fe4.html(_0x8e03eb(_0x3133fb).includes("href") ? _0x8e03eb(_0x3133fb).replaceAll("href", "target=\"_black\" href") : _0x8e03eb(_0x3133fb));
            }
          }
          this.il(true);
        }
      };
      _0x495e58.prototype.pl = function () {
        return this.bl == null ? _0x313419.Yg() : this.bl.ql();
      };
      _0x495e58.prototype.fl = function () {
        var _0x225a8b = this;
        this.pl().ah(function (_0x4df40e) {
          _0x225a8b.rl(_0x4df40e);
        });
      };
      _0x495e58.prototype.rl = function (_0x7e553c) {
        var _0x412687 = this;
        var _0x50ab85 = window.anApp = _0x1113af;
        var _0x2cb241 = this.dl[_0x7e553c].price;
        if (!(_0x50ab85.u.zi() < _0x2cb241)) {
          this.Sk();
          var _0x351736 = _0x50ab85.t.ha(_0x4311a3.ia);
          var _0x52be03 = _0x50ab85.t.ha(_0x4311a3.ja);
          var _0x2e7d65 = _0x50ab85.t.ha(_0x4311a3.ka);
          var _0x49a17f = _0x50ab85.t.ha(_0x4311a3.la);
          var _0x560069 = _0x50ab85.t.ha(_0x4311a3.ma);
          _0x50ab85.u.Ui(_0x7e553c, _0x4311a3.ia, function () {
            _0x50ab85.t.Bh(_0x351736, _0x4311a3.ia);
            _0x50ab85.t.Bh(_0x52be03, _0x4311a3.ja);
            _0x50ab85.t.Bh(_0x2e7d65, _0x4311a3.ka);
            _0x50ab85.t.Bh(_0x49a17f, _0x4311a3.la);
            _0x50ab85.t.Bh(_0x560069, _0x4311a3.ma);
            if (_0x50ab85.u.Ch(_0x7e553c, _0x4311a3.ia)) {
              _0x50ab85.t.Bh(_0x7e553c, _0x4311a3.ia);
            }
            _0x412687.Qk();
          });
        }
      };
      _0x495e58.prototype.il = function (_0x3ebba6) {
        var _0x31cfa3 = window.anApp = _0x1113af;
        this.el.bk(_0x31cfa3.t.ha(_0x4311a3.ja), false, false);
        this.el.ck(_0x31cfa3.t.ha(_0x4311a3.ka), false, false);
        this.el.dk(_0x31cfa3.t.ha(_0x4311a3.la), false, false);
        this.el.ek(_0x31cfa3.t.ha(_0x4311a3.ma), false, false);
        var _0x52d544 = this.pl();
        if (_0x52d544._g()) {
          var _0x5da5b7 = _0x52d544.$g();
          var _0x24ed9c = this.dl[_0x5da5b7];
          var _0x1731b7 = false;
          if (_0x31cfa3.t.Ja(_0x5da5b7, _0x4311a3.ia)) {
            _0x520acf.hide();
            _0x5050de.hide();
          } else {
            if (_0x24ed9c == null || _0x24ed9c.nonbuyable == 0x1) {
              _0x1731b7 = true;
              _0x520acf.show();
              _0x5050de.hide();
              _0x2547fb.text(_0x536e03("index.game.popup.menu.store.locked"));
              if (_0x24ed9c != null && _0x24ed9c.nonbuyable && _0x24ed9c.nonbuyableCause != null) {
                var _0x49dd38 = _0x31cfa3.p.Ac().textDict[_0x24ed9c.nonbuyableCause];
                if (_0x49dd38 != null) {
                  _0x2547fb.text(_0x8e03eb(_0x49dd38));
                }
              }
            } else {
              _0x520acf.hide();
              _0x5050de.show();
              _0x3e65f7.html(_0x24ed9c.price);
            }
          }
          _0x4f229a.html('');
          if (_0x24ed9c != null && _0x24ed9c.description != null) {
            var _0x365e45 = _0x31cfa3.p.Ac().textDict[_0x24ed9c.description];
            if (_0x365e45 != null) {
              _0x4f229a.html(_0x8e03eb(_0x365e45).includes("href") ? _0x8e03eb(_0x365e45).replaceAll("href", "target=\"_black\" href") : _0x8e03eb(_0x365e45));
            }
          }
          StoreSkinID.html(_0x24ed9c.id);
          this.el.ak(_0x5da5b7, true, _0x1731b7);
          if (_0x3ebba6) {
            _0x31cfa3.t.Bh(_0x5da5b7, _0x4311a3.ia);
          }
        }
      };
      var _0x125e49 = function () {
        function _0x1b2e92(_0x19b077, _0x1bd64a) {
          this.sl = _0x19b077;
          this.ol = 0x0;
          this.nl = _0x1bd64a;
        }
        _0x1b2e92.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x1b2e92.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x1b2e92.prototype.kl = function () {
          let _0x5de76c = _0x8e03eb(this.nl.name);
          if (this.nl.img) {
            var _0x4e71af = "<img src=\"";
            _0x4e71af = _0x4e71af + "https://wormateup.live" + "/images/paths/" + this.nl.img;
            _0x5de76c = _0x4e71af = _0x4e71af + "\" height=\"43\" width=\"220\" />";
          }
          return _0x5de76c;
        };
        _0x1b2e92.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x313419.Yg() : _0x313419.Zg(this.nl.list[this.ol]);
        };
        return _0x1b2e92;
      }();
      return _0x495e58;
    }();
    var _0xc8aa32 = function () {
      var _0x8514fa = $("#store-go-coins-button");
      var _0x40cfa3 = $("#store-go-skins-button");
      var _0x389097 = $("#store-go-wear-button");
      var _0x27447a = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.store.tab"), true);
        var _0x553b2a = window.anApp = _0x1113af;
        _0x8514fa.click(function () {
          _0x553b2a.r.Cd();
          _0x553b2a.s.I(_0x553b2a.s.Wh);
        });
        _0x40cfa3.click(function () {
          _0x553b2a.r.Cd();
          _0x553b2a.s.I(_0x553b2a.s.$h);
        });
        _0x389097.click(function () {
          _0x553b2a.r.Cd();
          _0x553b2a.s.I(_0x553b2a.s.ai);
        });
      });
      _0x27447a.prototype.a = function () {
        _0x27447a.parent.prototype.a.call(this);
      };
      _0x27447a.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeIn(0xc8);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x27447a.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
      };
      return _0x27447a;
    }();
    var _0x2fbe85 = function () {
      var _0x42e57e = $("#wear-view-canv");
      var _0x49136d = $('#wear-description-text');
      var _0x5f5515 = $("#wear-locked-bar");
      var _0x6e8b42 = $("#wear-locked-bar-text");
      var _0x28e2c8 = $('#wear-buy-button');
      var _0x17becb = $("#wear-item-price");
      var _0x231376 = $('#wear-eyes-button');
      var _0x3a696c = $("#wear-mouths-button");
      var _0x2a983a = $('#wear-glasses-button');
      var _0x439679 = $("#wear-hats-button");
      var _0x32fa58 = $('#wear-tint-chooser');
      var _0x53bb0d = $("#wear-view-prev");
      var _0x35fe36 = $("#wear-view-next");
      var _0x3f588b = _0x122e71(_0x15c0e1, function () {
        var _0x1d9fd8 = this;
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.wear.tab"), true);
        var _0x6447 = window.anApp = _0x1113af;
        var _0x1509a6 = this;
        this.tl = [];
        this.ja = new _0x609ca8(this, _0x4311a3.ja, _0x231376);
        this.ka = new _0x609ca8(this, _0x4311a3.ka, _0x3a696c);
        this.la = new _0x609ca8(this, _0x4311a3.la, _0x2a983a);
        this.ma = new _0x609ca8(this, _0x4311a3.ma, _0x439679);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x490e10(_0x42e57e);
        _0x28e2c8.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.Bl();
        });
        _0x53bb0d.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.ul.Cl();
        });
        _0x35fe36.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.ul.Dl();
        });
        _0x231376.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.El(_0x1d9fd8.ja);
        });
        _0x3a696c.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.El(_0x1d9fd8.ka);
        });
        _0x2a983a.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.El(_0x1d9fd8.la);
        });
        _0x439679.click(function () {
          _0x6447.r.Cd();
          _0x1509a6.El(_0x1d9fd8.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x3f588b.prototype.a = function () {
        _0x3f588b.parent.prototype.a.call(this);
        var _0x113a27 = window.anApp = _0x1113af;
        var _0x35ffec = this;
        _0x113a27.p.ca(function () {
          var _0x449be1 = _0x113a27.p.Ac();
          if (_0x449be1 != null) {
            _0x35ffec.vl = _0x449be1.eyesDict;
            _0x35ffec.wl = _0x449be1.mouthDict;
            _0x35ffec.xl = _0x449be1.glassesDict;
            _0x35ffec.yl = _0x449be1.hatDict;
            _0x35ffec.zl = _0x449be1.colorDict;
            _0x35ffec.ja.Fl(_0x449be1.eyesVariantArray);
            _0x35ffec.ja.Gl(_0x35ffec.vl);
            _0x35ffec.ka.Fl(_0x449be1.mouthVariantArray);
            _0x35ffec.ka.Gl(_0x35ffec.wl);
            _0x35ffec.la.Fl(_0x449be1.glassesVariantArray);
            _0x35ffec.la.Gl(_0x35ffec.xl);
            _0x35ffec.ma.Fl(_0x449be1.hatVariantArray);
            _0x35ffec.ma.Gl(_0x35ffec.yl);
          }
        });
        this.il(false);
        _0x113a27.t.xh(function () {
          _0x35ffec.il(false);
        });
      };
      _0x3f588b.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeIn(0xc8);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x3f588b.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      _0x3f588b.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x3f588b.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x3f588b.prototype.Pa = function (_0x177bf0, _0x1063dc) {
        this.Al.Pa();
      };
      _0x3f588b.prototype.El = function (_0x334ec2) {
        this.ul = _0x334ec2;
        for (var _0xd64350 = 0x0; _0xd64350 < this.tl.length; _0xd64350++) {
          this.tl[_0xd64350].Xk.removeClass('pressed');
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x3f588b.prototype.Hl = function () {
        return this.ul == null ? _0x313419.Yg() : _0x313419.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
        });
      };
      _0x3f588b.prototype.Bl = function () {
        var _0x543900 = this;
        this.Hl().ah(function (_0x313c24) {
          _0x543900.Ui(_0x313c24.Lb, _0x313c24.rc);
        });
      };
      _0x3f588b.prototype.Ui = function (_0x5485b6, _0x15e010) {
        var _0x1ca283 = this;
        var _0x51a76a = window.anApp = _0x1113af;
        var _0x2906ae = undefined;
        switch (_0x15e010) {
          case _0x4311a3.ja:
            _0x2906ae = this.vl[_0x5485b6].price;
            break;
          case _0x4311a3.ka:
            _0x2906ae = this.wl[_0x5485b6].price;
            break;
          case _0x4311a3.la:
            _0x2906ae = this.xl[_0x5485b6].price;
            break;
          case _0x4311a3.ma:
            _0x2906ae = this.yl[_0x5485b6].price;
            break;
          default:
            return;
        }
        if (!(_0x51a76a.u.zi() < _0x2906ae)) {
          this.Sk();
          var _0x1c0305 = _0x51a76a.t.ha(_0x4311a3.ia);
          var _0x5e03f1 = _0x51a76a.t.ha(_0x4311a3.ja);
          var _0x53e4c6 = _0x51a76a.t.ha(_0x4311a3.ka);
          var _0x5e55ec = _0x51a76a.t.ha(_0x4311a3.la);
          var _0x32f3fa = _0x51a76a.t.ha(_0x4311a3.ma);
          _0x51a76a.u.Ui(_0x5485b6, _0x15e010, function () {
            _0x51a76a.t.Bh(_0x1c0305, _0x4311a3.ia);
            _0x51a76a.t.Bh(_0x5e03f1, _0x4311a3.ja);
            _0x51a76a.t.Bh(_0x53e4c6, _0x4311a3.ka);
            _0x51a76a.t.Bh(_0x5e55ec, _0x4311a3.la);
            _0x51a76a.t.Bh(_0x32f3fa, _0x4311a3.ma);
            if (_0x51a76a.u.Ch(_0x5485b6, _0x15e010)) {
              _0x51a76a.t.Bh(_0x5485b6, _0x15e010);
            }
            _0x1ca283.Qk();
          });
        }
      };
      _0x3f588b.prototype.Il = function (_0x27f4a1, _0x37d84c) {
        switch (_0x37d84c) {
          case _0x4311a3.ja:
            return this.vl[_0x27f4a1];
          case _0x4311a3.ka:
            return this.wl[_0x27f4a1];
          case _0x4311a3.la:
            return this.xl[_0x27f4a1];
          case _0x4311a3.ma:
            return this.yl[_0x27f4a1];
        }
        return null;
      };
      _0x3f588b.prototype.il = function (_0x3a6f32) {
        var _0x54fbe5 = window.anApp = _0x1113af;
        this.Al.ak(_0x54fbe5.t.ha(_0x4311a3.ia), false, false);
        this.Al.bk(_0x54fbe5.t.ha(_0x4311a3.ja), false, false);
        this.Al.ck(_0x54fbe5.t.ha(_0x4311a3.ka), false, false);
        this.Al.dk(_0x54fbe5.t.ha(_0x4311a3.la), false, false);
        this.Al.ek(_0x54fbe5.t.ha(_0x4311a3.ma), false, false);
        var _0x48ee26 = this.Hl();
        if (_0x48ee26._g()) {
          var _0x2f9f7d = _0x48ee26.$g();
          var _0x3d9375 = this.Il(_0x2f9f7d.Lb, _0x2f9f7d.rc);
          var _0x2cd662 = false;
          if (_0x54fbe5.t.Ja(_0x2f9f7d.Lb, _0x2f9f7d.rc)) {
            _0x5f5515.hide();
            _0x28e2c8.hide();
          } else {
            if (_0x3d9375 == null || _0x3d9375.nonbuyable == 0x1) {
              _0x2cd662 = true;
              _0x5f5515.show();
              _0x28e2c8.hide();
              _0x6e8b42.text(_0x536e03("index.game.popup.menu.store.locked"));
              if (_0x3d9375 != null && _0x3d9375.nonbuyable && _0x3d9375.nonbuyableCause != null) {
                var _0x2293da = _0x54fbe5.p.Ac().textDict[_0x3d9375.nonbuyableCause];
                if (_0x2293da != null) {
                  _0x6e8b42.text(_0x8e03eb(_0x2293da));
                }
              }
            } else {
              _0x5f5515.hide();
              _0x28e2c8.show();
              _0x17becb.html(_0x3d9375.price);
            }
          }
          _0x49136d.html('');
          if (_0x3d9375 != null && _0x3d9375.description != null) {
            var _0x4236ec = _0x54fbe5.p.Ac().textDict[_0x3d9375.description];
            if (_0x4236ec != null) {
              _0x49136d.html(_0x8e03eb(_0x4236ec).includes("href") ? _0x8e03eb(_0x4236ec).replaceAll("href", "target=\"_black\" href") : _0x8e03eb(_0x4236ec));
            }
          }
          switch (_0x2f9f7d.rc) {
            case _0x4311a3.ja:
              this.Al.bk(_0x2f9f7d.Lb, true, _0x2cd662);
              break;
            case _0x4311a3.ka:
              this.Al.ck(_0x2f9f7d.Lb, true, _0x2cd662);
              break;
            case _0x4311a3.la:
              this.Al.dk(_0x2f9f7d.Lb, true, _0x2cd662);
              break;
            case _0x4311a3.ma:
              this.Al.ek(_0x2f9f7d.Lb, true, _0x2cd662);
          }
          if (_0x3a6f32) {
            _0x54fbe5.t.Bh(_0x2f9f7d.Lb, _0x2f9f7d.rc);
          }
        }
      };
      var _0x609ca8 = function () {
        function _0x410bc0(_0x466a98, _0x5197f0, _0x4235a4) {
          this.sl = _0x466a98;
          this.rc = _0x5197f0;
          this.Xk = _0x4235a4;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0x410bc0.prototype.Fl = function (_0xad6101) {
          this.Kl = _0xad6101;
        };
        _0x410bc0.prototype.Gl = function (_0x1df14b) {
          this.Jl = _0x1df14b;
        };
        _0x410bc0.prototype.ii = function () {
          var _0x24a765 = window.anApp = _0x1113af;
          var _0x373b93 = _0x24a765.t.ha(this.rc);
          for (var _0x5b9961 = 0x0; _0x5b9961 < this.Kl.length; _0x5b9961++) {
            for (var _0x50fcd9 = 0x0; _0x50fcd9 < this.Kl[_0x5b9961].length; _0x50fcd9++) {
              if (this.Kl[_0x5b9961][_0x50fcd9] == _0x373b93) {
                this.Nl(_0x5b9961);
                this.Ol(_0x50fcd9);
                return;
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0x410bc0.prototype.Cl = function () {
          var _0x34d7ad = this.Ll - 0x1;
          if (_0x34d7ad < 0x0) {
            _0x34d7ad = this.Kl.length - 0x1;
          }
          this.Nl(_0x34d7ad);
          this.Ol(this.Ml % this.Kl[_0x34d7ad].length);
        };
        _0x410bc0.prototype.Dl = function () {
          var _0xa3c10b = this.Ll + 0x1;
          if (_0xa3c10b >= this.Kl.length) {
            _0xa3c10b = 0x0;
          }
          this.Nl(_0xa3c10b);
          this.Ol(this.Ml % this.Kl[_0xa3c10b].length);
        };
        _0x410bc0.prototype.Nl = function (_0x31692a) {
          var _0x332e5c = this;
          if (!(_0x31692a < 0x0) && !(_0x31692a >= this.Kl.length)) {
            this.Ll = _0x31692a;
            _0x32fa58.empty();
            var _0x11defc = this.Kl[this.Ll];
            if (_0x11defc.length > 0x1) {
              for (var _0x508838 = 0x0; _0x508838 < _0x11defc.length; _0x508838++) {
                (function (_0x30afa0) {
                  var _0x21a0cf = _0x11defc[_0x30afa0];
                  var _0xaf4ec2 = _0x332e5c.Jl[_0x21a0cf];
                  var _0x1ce4ad = '#' + _0x332e5c.sl.zl[_0xaf4ec2.prime];
                  var _0x17049d = $("<div style=\"border-color:" + _0x1ce4ad + "\"></div>");
                  _0x17049d.click(function () {
                    (window.anApp = _0x1113af).r.Cd();
                    _0x332e5c.Ol(_0x30afa0);
                  });
                  _0x32fa58.append(_0x17049d);
                })(_0x508838);
              }
            }
          }
        };
        _0x410bc0.prototype.Ol = function (_0x94b5c2) {
          if (!(_0x94b5c2 < 0x0) && !(_0x94b5c2 >= this.Kl[this.Ll].length)) {
            this.Ml = _0x94b5c2;
            _0x32fa58.children().css('background-color', 'transparent');
            var _0x45ef25 = _0x32fa58.children(":nth-child(" + (0x1 + _0x94b5c2) + ')');
            _0x45ef25.css("background-color", _0x45ef25.css("border-color"));
            this.sl.il(true);
          }
        };
        _0x410bc0.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0x410bc0;
      }();
      return _0x3f588b;
    }();
    var _0x5c6a98 = function () {
      var _0x3a64d1 = $('#withdraw-consent-yes');
      var _0x445a3e = $("#withdraw-consent-no");
      var _0x307fb2 = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.consent.tab"), false);
        var _0x4b7923 = window.anApp = _0x1113af;
        _0x3a64d1.click(function () {
          _0x4b7923.r.Cd();
          if (_0x4b7923.Y()) {
            _0x4b7923.s.I(_0x4b7923.s.F);
            _0x4b7923.$(false, true);
            _0x4b7923.s.aa._(new _0x548d62());
          } else {
            _0x4b7923.s.gi();
          }
        });
        _0x445a3e.click(function () {
          _0x4b7923.r.Cd();
          _0x4b7923.s.gi();
        });
      });
      _0x307fb2.prototype.a = function () {
        _0x307fb2.parent.prototype.a.call(this);
      };
      _0x307fb2.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeIn(0xc8);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeOut(0x32);
      };
      _0x307fb2.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Dd();
      };
      return _0x307fb2;
    }();
    var _0x403825 = function () {
      var _0x161fd1 = $('#delete-account-timer');
      var _0x470ffa = $("#delete-account-yes");
      var _0x1d35b7 = $('#delete-account-no');
      var _0x2afb77 = _0x122e71(_0x15c0e1, function () {
        _0x15c0e1.call(this, _0x536e03("index.game.popup.menu.delete.tab"), false);
        var _0x474444 = window.anApp = _0x1113af;
        _0x470ffa.click(function () {
          _0x474444.r.Cd();
          if (_0x474444.u.P()) {
            _0x474444.u.bj();
            _0x474444.u.Wi();
          } else {
            _0x474444.s.gi();
          }
        });
        _0x1d35b7.click(function () {
          _0x474444.r.Cd();
          _0x474444.s.gi();
        });
        this.Pl = [];
      });
      _0x2afb77.prototype.a = function () {
        _0x2afb77.parent.prototype.a.call(this);
      };
      _0x2afb77.prototype.Rk = function () {
        _0x15c0e1.Fk.stop();
        _0x15c0e1.Fk.fadeOut(0x32);
        _0x15c0e1.Gk.stop();
        _0x15c0e1.Gk.fadeOut(0x32);
        _0x15c0e1.Hk.stop();
        _0x15c0e1.Hk.fadeOut(0x32);
        _0x15c0e1.Jk.stop();
        _0x15c0e1.Jk.fadeOut(0x32);
        _0x15c0e1.Ik.stop();
        _0x15c0e1.Ik.fadeOut(0x32);
        _0x15c0e1.Kk.stop();
        _0x15c0e1.Kk.fadeOut(0x32);
        _0x15c0e1.Lk.stop();
        _0x15c0e1.Lk.fadeOut(0x32);
        _0x15c0e1.Mk.stop();
        _0x15c0e1.Mk.fadeOut(0x32);
        _0x15c0e1.Nk.stop();
        _0x15c0e1.Nk.fadeOut(0x32);
        _0x15c0e1.Ok.stop();
        _0x15c0e1.Ok.fadeIn(0xc8);
      };
      _0x2afb77.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Hd();
        _0x470ffa.stop();
        _0x470ffa.hide();
        _0x161fd1.stop();
        _0x161fd1.show();
        _0x161fd1.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x161fd1.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x161fd1.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x161fd1.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x161fd1.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x161fd1.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x161fd1.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x161fd1.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x161fd1.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x161fd1.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x161fd1.hide();
          _0x470ffa.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x2afb77.prototype.Rl = function (_0x2a118a, _0x2d1683) {
        var _0x32c540 = setTimeout(_0x2a118a, _0x2d1683);
        this.Pl.push(_0x32c540);
      };
      _0x2afb77.prototype.Ql = function () {
        for (var _0x53f995 = 0x0; _0x53f995 < this.Pl.length; _0x53f995++) {
          clearTimeout(this.Pl[_0x53f995]);
        }
        this.Pl = [];
      };
      return _0x2afb77;
    }();
    var _0x228f70 = function () {
      function _0xff4500() {
        this.Ck = function () {};
      }
      _0xff4500.prototype.Bk = function () {};
      _0xff4500.prototype.ji = function () {};
      return _0xff4500;
    }();
    var _0x329701 = function () {
      var _0x313583 = _0x122e71(_0x228f70, function (_0xdda66d) {
        _0x228f70.call(this);
        var _0x499162 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x499162 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0xdda66d + "</div>    <div class=\"toaster-coins-close\">" + _0x536e03("index.game.toaster.continue") + "</div></div>");
        var _0x560498 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          (window.anApp = _0x1113af).r.Cd();
          _0x560498.Ck();
        });
      });
      _0x313583.prototype.Bk = function () {
        return this.Sl;
      };
      _0x313583.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Fd();
      };
      return _0x313583;
    }();
    var _0x41f65b = function () {
      var _0x3ecb7e = _0x122e71(_0x228f70, function (_0x440e03) {
        _0x228f70.call(this);
        var _0x1ee626 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x1ee626 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x440e03 + "</div>    <div class=\"toaster-levelup-text\">" + _0x536e03("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x536e03("index.game.toaster.continue") + '</div></div>');
        var _0x566f51 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          (window.anApp = _0x1113af).r.Cd();
          _0x566f51.Ck();
        });
      });
      _0x3ecb7e.prototype.Bk = function () {
        return this.Sl;
      };
      _0x3ecb7e.prototype.ji = function () {
        (window.anApp = _0x1113af).r.Ed();
      };
      return _0x3ecb7e;
    }();
    var _0x548d62 = function () {
      var _0x3da4f0 = _0x122e71(_0x228f70, function () {
        _0x228f70.call(this);
        var _0x318997 = this;
        var _0x4e8c7e = window.anApp = _0x1113af;
        var _0x438ed4 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x438ed4 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + '/images/linelogo-xmas2022.png' + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x536e03("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x536e03("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x536e03('index.game.toaster.consent.iAccept') + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          _0x4e8c7e.r.Cd();
          if (_0x4e8c7e.Y()) {
            _0x4e8c7e.$(true, true);
          }
          _0x318997.Ck();
        });
      });
      _0x3da4f0.prototype.Bk = function () {
        return this.Sl;
      };
      _0x3da4f0.prototype.ji = function () {
        var _0x232e7c = this;
        var _0x12545e = window.anApp = _0x1113af;
        if (_0x12545e.Y() && !_0x12545e.Z()) {
          _0x12545e.r.Hd();
          setTimeout(function () {
            _0x232e7c.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x232e7c.Ck();
          }, 0x0);
        }
      };
      return _0x3da4f0;
    }();
    var _0x2de32c = {
      "main": {
        'Ma': _0x3c7431("aqnvgcpz05orkobh", 'WRM_wormate-io_300x250'),
        'K': _0x3c7431('ltmolilci1iurq1i', "wormate-io_970x250"),
        'ra': _0x4bd5b4(),
        'e': 0x4,
        'oa': false,
        'qk': true
      },
      "miniclip": {
        'Ma': _0x3c7431('aqnvgcpz05orkobh', "WRM_wormate-io_300x250"),
        'K': _0x3c7431('ltmolilci1iurq1i', 'wormate-io_970x250'),
        'ra': _0x4bd5b4(),
        'e': 0x4,
        'oa': false,
        'qk': false
      }
    };
    var _0x14dea3 = _0x2de32c[window.ENV];
    _0x14dea3 ||= _0x2de32c.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x47f698) {
      _0x47f698.preventDefault();
      _0x47f698.stopPropagation();
      return false;
    });
    _0x55a237("//connect.facebook.net/" + _0x5c492d + '/sdk.js', "facebook-jssdk", function () {
      FB.init({
        'appId': '861926850619051',
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': "v8.0"
      });
    });
    _0x55a237("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    _0x1113af = _0x5cf4ca();
    _0x1113af.v();
    if (PhoneChecked()) {
      _0x55a237("https://wormateup.live/up/js/joy.min.js", "mobileconfig", function () {
        _0x2e28bc();
      });
    }
    ;
    let _0x2e28bc = function () {
      $('#game-canvas').after("<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>");
    };
    window.keyMove = 'q';
    window.addEventListener("keydown", function (_0x2a821b) {
      if (_0x2a821b.key.toLowerCase() !== 'q' || !isPlaying || PilotoAutomatico !== null) {
        if (PilotoAutomatico !== null) {
          clearInterval(PilotoAutomatico);
          PilotoAutomatico = null;
        }
      } else {
        const _0x45b29a = window.tuNewScore;
        if (PilotoAutomatico !== null) {
          clearInterval(PilotoAutomatico);
        }
        PilotoAutomatico = setInterval(function () {
          let _0x951ef3 = Math.PI / 0x4;
          null.sk += _0x951ef3;
          if (null.sk >= 0x2 * Math.PI) {
            null.sk -= 0x2 * Math.PI;
          } else if (null.sk <= -0x2 * Math.PI) {
            null.sk += 0x2 * Math.PI;
          }
          let _0x527224 = document.getElementById("elementId");
          if (_0x527224) {
            _0x527224.style.transform = "rotate(" + null.sk + "rad)";
          }
        }, 0xa5 + (_0x45b29a >= 0x186a0 ? 0x5 : _0x45b29a >= 0x2710 ? 0xa : 0x0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    theoKzObjects.loading = true;
    var _0xdfa0be = '';
    _0xdfa0be += '</div>';
    _0xdfa0be += "</div>";
    _0xdfa0be += "</div>";
    _0xdfa0be += "<div id=\"wormcerca\">";
    _0xdfa0be += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    _0xdfa0be += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    _0xdfa0be += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    _0xdfa0be += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    _0xdfa0be += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    _0xdfa0be += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    _0xdfa0be += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0xdfa0be += "</div>";
    _0xdfa0be += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    _0xdfa0be += "</div><div class=\"worm_2\"><button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button><div id=\"settingContent\"><div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div><div style=\"display:none\" id=\"zoom-container\"><div id=\"zoom-out\">-</div><div id=\"zoom-in\">+</div><div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span>";
    $("#game-view").append(_0xdfa0be);
    function _0x25c9df(_0x19a185) {
      if (theoKzObjects.PropertyManager) {
        _0x19a185.skinId = theoKzObjects.PropertyManager.rh;
        _0x19a185.eyesId = theoKzObjects.PropertyManager.sh;
        _0x19a185.mouthId = theoKzObjects.PropertyManager.th;
        _0x19a185.glassesId = theoKzObjects.PropertyManager.uh;
        _0x19a185.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function _0x2f9505() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.wormateup.live\">Wormate UP 2025</a></div>");
      $("#mm-store").after("\n    <div id=\"mm-store\" style=\"float: right; position: relative; margin-right: 10px; min-width: 140px;\">\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            <div onclick=\"openPopup()\">\n                <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px;\"></i> Ø§Ù„Ø§Ø¹Ø¯Ø§Ø¯Ø§Øª\n            </div>\n            <div id=\"popup\" class=\"popup\">\n                <div class=\"phdr1\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px; margin-right: 10px;\"></i> \n                    <span>Ø§Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨</span>\n                </div>\n                <button class=\"close-button\" onclick=\"closePopup()\">Ø§ØºÙ„Ø§Ù‚</button>\n\n                <!-- Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª -->\n                <div class=\"tab-buttons\" style=\"display: flex; justify-content: space-around; margin-bottom: 10px;\">\n                    <button class=\"tab-button active\" onclick=\"openTab('gameSettings')\">Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨</button>\n                    <button class=\"tab-button\" onclick=\"openTab('messageSettings')\">Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù‡Ø¯Ø§Øª</button>\n                    <button class=\"tab-button\" onclick=\"openTab('backgroundSettings')\">Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ§Øª</button>\n                </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨ -->\n                <div id=\"gameSettings\" class=\"tab-content active\">\n                    <div id=\"kich-hoat\">\n                        ID: <input type=\"text\" value=\"\" class=\"you-id\" />\n                        <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('').then(() => alert('Your ID  Ù†Ø³Ø®!'));\">\n                            COPY\n                        </button>\n                    </div>\n                    <table>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Eat Fast:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-Abilityzoom-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Streamer Mode:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmode-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total HS:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 1 Top:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodebatop-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodeemoj-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            ğŸ”Š\n                                        </span>\n  <select id=\"sound-selector\">\n    <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Head Shot</option>\n    <option value=\"https://wormateup.live/up/video/emaat.mp3\">ÙˆÙ„Ùƒ Ø§Ù…Ø¹Ø·</option>\n    <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper</option>\n    <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Head Shot2</option>\n    <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Ø§Ù„Ù‚Ù…</option>\n    <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n    <option value=\"https://wormateup.live/up/video/Aelo-Adi.MP3\">Ø§Ø¯ÙŠÙ„ÙˆÙˆ Ø§Ø¯ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/alalobee.mp3\">Ø¹ Ù„ÙˆÙˆØ¨ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/laugh.mp3\">Laugh Ù‡Ù‡Ù‡Ù‡Ù‡</option>\n    <option value=\"https://wormateup.live/up/video/mario-jump.mp3\">Mario Jump</option>\n    <option value=\"https://wormateup.live/up/video/pew.mp3\">Pew</option>\n    <option value=\"https://wormateup.live/up/video/pingo.mp3\">Pingo</option>\n    <option value=\"https://wormateup.live/up/video/wak-wak.mp3\">wak wak</option>\n  </select>\n  <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\" />\n  <label for=\"settings-stremingmodeheadshot-switch\"></label>\n  <label for=\"sound-selector\"></label>\n</div>\n\n<script>\n  // Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªØ­ÙƒÙ…\n  const soundSelector = document.getElementById('sound-selector');\n  const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n\n  // Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø£ØµÙˆØ§Øª\n  let audioSrc = localStorage.getItem('selectedSound') || ''; // Ø§Ù„ØµÙˆØª Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ ÙØ§Ø±Øº\n  let audio = null; // ÙƒØ§Ø¦Ù† Ø§Ù„ØµÙˆØª ØºÙŠØ± Ù…Ù‡ÙŠØ£\n  let isMuted = localStorage.getItem('isMuted') === 'true'; // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª\n\n  // Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠØ©\n  soundSelector.value = audioSrc;\n  muteSwitch.checked = isMuted;\n\n  // ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„ØªØºÙŠÙŠØ± ÙÙŠ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©\n  soundSelector.addEventListener('change', (e) => {\n    audioSrc = e.target.value;\n    localStorage.setItem('selectedSound', audioSrc);\n    if (!isMuted) {\n      if (audio) audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø£ÙŠ ØµÙˆØª Ù‚ÙŠØ¯ Ø§Ù„ØªØ´ØºÙŠÙ„\n      audio = new Audio(audioSrc); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¬Ø¯ÙŠØ¯\n      audio.play(); // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø¬Ø¯ÙŠØ¯\n    }\n  });\n\n  // ØªØ¹Ø·ÙŠÙ„ Ø§Ù„ØµÙˆØª\n  muteSwitch.addEventListener('change', () => {\n    isMuted = muteSwitch.checked;\n    localStorage.setItem('isMuted', isMuted);\n    if (isMuted && audio) {\n      audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„ØµÙˆØª Ø¥Ø°Ø§ ØªÙ… ÙƒØªÙ…Ù‡\n    }\n  });\n\n  // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ ØªÙ…Ø±ÙŠØ± Ø§Ù„Ù…Ø§ÙˆØ³ Ø¹Ù„Ù‰ Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª\n  const options = soundSelector.querySelectorAll('option');\n  options.forEach((option) => {\n    option.addEventListener('mouseover', () => {\n      if (!isMuted) {\n        const hoverAudio = new Audio(option.value); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ù…Ø±ÙˆØ±\n        hoverAudio.play();\n      }\n    });\n  });\n\n  // Ù„Ø§ ÙŠØªÙ… ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠ Ù‡Ù†Ø§\n</script>\n\n<script>\n\n</script>\n\n            </div>\n\n                   </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div class=\"list2\">\n            <div class=\"list2\">\n              <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Ø¯ÙˆØ±Ø§Ù† <a href=\"/\">Q</a>: Ù„ÙˆØ¶Ø¹ Ø§Ù„Ø¯ÙˆØ§Ø±Ø§Ù† Ø­ÙˆÙ„ Ø§Ù„Ø¯ÙˆØ¯Ù‡ (ÙˆÙ„ØªØ¹Ø·ÙŠÙ„ Ø§Ù„Ø¯ÙˆØ±Ø§Ù† Ø§Ø¶ØºØ· Ù†ÙØ³ Ø§Ù„Ø­Ø±Ù)\n                </div>\n            <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Ø±Ø³Ø¨ÙˆÙ† <a href=\"/\">R</a> Ù„Ø¹Ù…Ù„ Ø§Ù„Ø±Ø³Ø¨ÙˆÙ† (Ø«Ù„Ø§Ø« Ù…Ø±Ø§Øª ÙÙ‚Ø·)\n\n            </div>\n                        <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Ø²ÙˆÙ… Ø³Ø±ÙŠØ¹ <a href=\"/\">Z</a>   Ù„Ù„ØªÙ‚Ø±ÙŠØ¨ Ø§Ù„Ø³Ø±ÙŠØ¹\n\n            </div>\n    \n          </div>\n\n          </div>\n\n            \n            <div id=\"messageSettings\" class=\"tab-content\" style=\"display:none;\">\n                <h3>ØªØ¹Ø¯ÙŠÙ„ Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù‡ÙŠØ¯Ø´ÙˆØª Ùˆ Ø§Ù„ÙˆÙŠÙ„Ø¯Ù†</h3>\n                <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: row;\">\n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px;\">\n                        <label for=\"killSelect\">:Ø¹Ø¨Ø§Ø±Ø© Ø§Ù„ÙˆÙ„Ø¯Ù†</label>\n                        <select id=\"killSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"Well Done!\">Well Done!</option>\n                            <option value=\"Ø¨Ù„Ø¹Ø© Ø¨ÙˆØªØ§Øª\">Ø¨Ù„Ø¹Ø© Ø¨ÙˆØªØ§Øª</option>\n                            <option value=\"Ù‡Ø§ÙŠ Ø´Ù†Ùˆ\">Ù‡Ø§ÙŠ Ø´Ù†Ùˆ</option>\n                            <option value=\"Ø®ÙˆØ§Ø§Ø§ØµØ± Ø¹ÙŠÙ†ÙŠ\">Ø®ÙˆØ§Ø§Ø§ØµØ± Ø¹ÙŠÙ†ÙŠ</option>\n                            <option value=\"Ù…Ø§ØªÙ‚Ø¯Ø± Ù„ÙŠ\">Ù…Ø§ØªÙ‚Ø¯Ø± Ù„ÙŠ</option>\n\n                        </select>\n                    </div>\n            \n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;\">\n                        <label for=\"headshotSelect\">:Ø¹Ø¨Ø§Ø±Ø© Ø§Ù„Ù‡ÙŠØ¯ Ø´ÙˆØª</label>\n                        <select id=\"headshotSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"HEADSHOT\">HEADSHOT</option>\n                            <option value=\"Ø¥Ø¨Ù„Ø¹ Ù„ÙŠÙƒ\">Ø¥Ø¨Ù„Ø¹ Ù„ÙŠÙƒ</option>\n                            <option value=\"Ø§Ø¯ÙŠÙ„ÙˆÙˆÙˆ Ø§Ø¯ÙŠ ğŸ”ª\">Ø§Ø¯ÙŠÙ„ÙˆÙˆÙˆ Ø§Ø¯ÙŠ ğŸ”ª</option>\n                            <option value=\" HEADSHOT â˜ ï¸\">HEADSHOT â˜ ï¸</option>\n\n                        </select>\n                    </div>\n                </div>\n                <button onclick=\"saveMessages()\" style=\"margin-top: 5px;\">Ø­ÙØ¸ Ø§Ù„Ø¹Ø¨Ø§Ø±Ø§Øª</button>\n            </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ ØªØ¨ÙˆÙŠØ¨ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ§Øª (ØªÙ… Ø­Ø°Ù ÙƒØ§ÙØ© Ø§Ù„Ø®Ù„ÙÙŠØ§Øª) -->\n                <div id=\"backgroundSettings\" class=\"tab-content\" style=\"display:none;\">\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Curos\n                      </div>\n                      <div class=\"cursor-container\">\n                        <div id=\"default-cursor-btn\">\n                          <img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\">\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Backgound\n                      </div>\n                      <div class=\"background-container\"></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n\n    <style>\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª */\n        .tab-buttons button {\n            padding: 10px;\n            background-color: #ddd;\n            border: none;\n            cursor: pointer;\n            flex: 1;\n            text-align: center;\n        }\n\n        .tab-buttons button.active {\n            background-color: #0d7aef;\n            color: white;\n        }\n\n        .tab-content {\n            display: none;\n        }\n\n        .tab-content.active {\n            display: block;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© */\n        .background-options {\n            margin-top: 20px;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø¯Ø§Ø®Ù„ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        .settings-labelZoom {\n            font-size: 16px;\n        }\n\n\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        #messageSettings {\n            display: flex;\n            flex-direction: row; /* ÙˆØ¶Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ ØµÙ */\n            justify-content: center; /* Ù…Ø­Ø§Ø°Ø§Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ø§Ù„Ù…Ù†ØªØµÙ */\n            align-items: center;\n        }\n\n        #messageSettings div {\n            width: 100%;\n            max-width: 100%;\n        }\n    </style>\n\n    <script>\n        // Ø¯Ø§Ù„Ø© Ø§Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª\n        function openTab(tabId) {\n            const contents = document.querySelectorAll('.tab-content');\n            const buttons = document.querySelectorAll('.tab-button');\n\n            contents.forEach(content => content.style.display = 'none');\n            buttons.forEach(button => button.classList.remove('active'));\n\n            document.getElementById(tabId).style.display = 'block';\n            event.target.classList.add('active');\n        }\n\n\n// Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„\nfunction saveMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† Ø§Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„Ù…Ù†Ø³Ø¯Ù„Ø©\n    const headshotMessage = document.getElementById(\"headshotSelect\").value;\n    const killMessage = document.getElementById(\"killSelect\").value;\n\n    // Ø­ÙØ¸ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ localStorage\n    localStorage.setItem(\"headshotMessage\", headshotMessage);\n    localStorage.setItem(\"killMessage\", killMessage);\n\n    // Ø¹Ø±Ø¶ Ø±Ø³Ø§Ù„Ø© ØªØ£ÙƒÙŠØ¯\n    alert(\"ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø¨Ù†Ø¬Ø§Ø­!\");\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ù…Ø¯Ø®Ù„Ø© ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„ØªØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ø­ÙØ¸\n    console.log(\"Headshot Message: \" + headshotMessage);\n    console.log(\"Kill Message: \" + killMessage);\n}\n\n// Ø¯Ø§Ù„Ø© Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ù…Ù† localStorage Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\nfunction loadMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† localStorage\n    const savedHeadshot = localStorage.getItem(\"headshotMessage\");\n    const savedKill = localStorage.getItem(\"killMessage\");\n\n    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£Ù† Ø§Ù„Ù‚ÙŠÙ… Ù…Ø®Ø²Ù†Ø© ÙÙŠ localStorage\n    if (savedHeadshot) {\n        const headshotSelect = document.getElementById(\"headshotSelect\");\n        if (headshotSelect) {\n            headshotSelect.value = savedHeadshot;\n        }\n    }\n    if (savedKill) {\n        const killSelect = document.getElementById(\"killSelect\");\n        if (killSelect) {\n            killSelect.value = savedKill;\n        }\n    }\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ø³ØªØ±Ø¬Ø§Ø¹Ù‡Ø§ Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­\n\n}\n\n// Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø© Ø£Ùˆ Ø¨Ø¹Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¬Ø¯ÙŠØ¯\nfunction initializeSettings() {\n    setTimeout(() => {\n        loadMessages();\n    }, 100); // ØªØ£Ø®ÙŠØ± Ø¨Ø³ÙŠØ· Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø­ØªÙˆÙ‰\n}\n\n// Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ initializeSettings Ø¹Ù†Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø£Ùˆ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\ninitializeSettings();\n\n\n\n\n\n        // Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ©\n        function saveBackground() {\n            const background = document.getElementById(\"backgroundSelect\").value;\n            localStorage.setItem(\"selectedBackground\", background);\n\n            alert(\"ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ© Ø¨Ù†Ø¬Ø§Ø­!\");\n        }\n    </script>\n");
      $("#loa831pibur0w4gv").replaceWith("\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n          <div class=\"label\" id=\"titleSetings\">Ø§Ù„Ø²ÙˆÙ… ÙŠØ¹Ù…Ù„ Ù…Ø¹ Ø§Ù„ØªÙØ¹ÙŠÙ„ ÙÙ‚Ø·</div>\n          <div class=\"bao-list1\">\n            <input type=\"text\" value=\"\" style=\"width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;\" />\n            <button style=\"height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;\" onclick=\"navigator.clipboard.writeText('').then(() => alert('Your ID  copied!'));\">Ù†Ø³Ø®</button>\n            <center>\n              <div class=\"hg\">\n                <a target=\"_blank\" href=\"https://wormateup.live/\">Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</a>\n                <br> <br> <br><br> <br> <br>\n                                <a\">Ù„Ù… ØªÙ‚Ù… Ø¨ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø¯Ø§Ø© Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ù„ØªÙˆØ¬Ù‡ Ù„Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ </a>\n\n              </div>\n            </center>\n            <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n            <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://discord.gg/zNJkB8EeUF\">Ù„ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø¯Ø§Ø© Ø¹Ù† Ø·Ø±ÙŠÙ‚ Ø§Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯</a>\n          </div>\n        </div>\n      ");
      var _0x2fdf3e = document.getElementById('settingBtn');
      var _0x4f3cb5 = document.getElementById("settingContent");
      _0x2fdf3e.addEventListener('click', function () {
        if (_0x4f3cb5.style.display === 'none') {
          _0x4f3cb5.style.display = 'block';
        } else {
          _0x4f3cb5.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = 0.5;
      });
      $("#FoodSize").on('input', function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#mm-advice-cont").html("\n        <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;\">\n          <input type=\"button\" value=\"Ø´Ø§Ø´Ù€Ø© ÙƒØ§Ù…Ù„Ù€Ø©\" class=\"fullscreen_button\">\n          <input type=\"button\" value=\"Ø±Ø³Ø¨Ù€ÙˆÙ†\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n\n          </div>\n      ");
      $('.mm-merchant-cont').html("\n  <div style=\"display: flex; justify-content: center; align-items: center;margin-top:10px\">\n    <a href=\"https://www.youtube.com/wormup\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://wormateup.live/images/hiep_img/\" alt=\"\" width=\"155\">\n    </a>\n    <a href=\"https://wormateup.live.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/V.png\" alt=\"\" width=\"155\">\n    </a>\n  </div>");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else {
              if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else {
              if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
              }
            }
          }
        });
      });
      $('#hoisinh').click(() => handleRespawn());
      $(".mm-merchant").replaceWith('');
      $(".mm-merchant").replaceWith('');
      $(".description-text").replaceWith("\n        <div class=\"description-text\">\n          <div id=\"title\"></div>\n          <div class=\"description-text-test\">\n            <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n              </li>\n            </ul>\n            <div class=\"bao-list2\">\n              <div class=\"gachngang\"></div>\n              <div class=\"servers-container\">\n                <div class=\"servers-peru\"></div>\n                <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                <div class=\"servers-canada\" style=\"display: none;\"></div>\n                <div class=\"servers-germania\" style=\"display: none;\"></div>\n                <div class=\"servers-francia\" style=\"display: none;\"></div>\n                <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                <div class=\"servers-japon\" style=\"display: none;\"></div>\n                <div class=\"servers-australia\" style=\"display: none;\"></div>\n                <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n              </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n            </div>\n          </div>\n        </div>\n      ");
      $(".ui-tab").on("click", account);
      $(".flag").click(function () {
        let _0x8caafa = $(this).attr("value");
        theoKzObjects.flag = _0x8caafa;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
      });
      $("<style>").text("\n                .status-dot, .nearby-dot {\n                    display: inline-block;\n                    border-radius: 50%;\n                    position: absolute;\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n                \n                .status-dot {\n                    width: 8px;\n                    height: 8px;\n                    transition: all 0.3s ease;\n                    right: 32px;\n                }\n                \n                .nearby-dot {\n                    width: 6px;\n                    height: 6px;\n                    transition: all 0.3s ease;\n                    right: 42px;\n                }\n                \n                .online {\n                    background-color: #00ff00;\n                    box-shadow: 0 0 5px #00ff00;\n                }\n                \n                .nearby {\n                    background-color: #007bff;\n                    box-shadow: 0 0 3px #007bff;\n                }\n            \n                .selectSala {\n                    position: relative;\n                    padding-right: 60px;\n                    line-height: 25px;\n                    min-height: 25px;\n                    display: flex;\n                    align-items: center;\n                    direction: rtl;\n                    text-align: left;\n                }\n            \n                .selectSala > span:first-of-type {\n                    margin-right: auto;\n                    direction: ltr;\n                }\n            \n                .selectSala img {\n                    position: absolute;\n                    right: 5px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n            ").appendTo("head");
      async function _0x5fc8c() {
        try {
          const _0x544e17 = await fetch('https://wormup.in:8082/active-servers', {
            'method': "GET",
            'headers': {
              'Content-Type': "application/json",
              'Cache-Control': "no-cache"
            },
            'timeout': 0x1388
          });
          if (!_0x544e17.ok) {
            throw new Error("HTTP error! status: " + _0x544e17.status);
          }
          window.serverData = await _0x544e17.json();
          console.log("Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ± ÙƒØ§Ù…Ù„Ø©:", window.serverData);
          if (window.serverData.success) {
            $('.selectSala').each(function () {
              const _0x200bbc = $(this).attr("value");
              console.log("Ø±Ø§Ø¨Ø· Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x200bbc);
              console.log("Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±:", window.serverData.servers[_0x200bbc]);
              const _0x352cf1 = $(this).find(".status-dot");
              const _0xacfb0b = $(this).find(".nearby-dot");
              _0x352cf1.removeClass("online");
              _0xacfb0b.removeClass("nearby");
              if (window.serverData.servers && window.serverData.servers[_0x200bbc]) {
                _0x352cf1.addClass('online');
              }
            });
          }
        } catch (_0x2cceb4) {
          console.warn("Ø®Ø·Ø£ ÙÙŠ ØªØ­Ø¯ÙŠØ« Ø­Ø§Ù„Ø© Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª:", _0x2cceb4);
        }
      }
      function _0x3a0162() {
        if (!servers || !servers.Api_listServer) {
          console.error("Servers list not found");
          return;
        }
        $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francesa, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
        for (let _0x48ecf0 = 0x0; _0x48ecf0 < servers.Api_listServer.length; _0x48ecf0++) {
          const _0x47ee75 = servers.Api_listServer[_0x48ecf0].serverUrl;
          const _0xd04096 = servers.Api_listServer[_0x48ecf0].name;
          const _0x3423d0 = servers.Api_listServer[_0x48ecf0].region;
          const _0x539fbd = document.createElement('p');
          _0x539fbd.value = _0x47ee75;
          _0x539fbd.innerHTML = "<span>" + _0xd04096 + "</span>\n                        <span class=\"status-dot\"></span>\n                        <span class=\"nearby-dot\"></span>";
          $(".servers-" + _0x3423d0).prepend(_0x539fbd);
          $(_0x539fbd).attr({
            'id': _0x3423d0,
            'class': "selectSala",
            'value': _0x47ee75
          });
          $(_0x539fbd).click(function () {
            try {
              if (typeof ctx !== "undefined" && ctx.setServer) {
                ctx.setServer($(this).find('span:first').text());
                let _0x3e4ed3 = $(this).val();
                if (ctx.containerImgS && ctx.onclickServer) {
                  ctx.containerImgS.texture = ctx.onclickServer;
                }
                if (typeof retundFlagError === "function") {
                  retundFlagError();
                }
                window.server_url = _0x3e4ed3;
                $('#mm-action-play').click();
                $("#adbl-continue").click();
              }
            } catch (_0x366f76) {
              console.error("Server selection error:", _0x366f76);
            }
          });
        }
      }
      $(document).ready(() => {
        if (servers && servers.Api_listServer) {
          _0x3a0162();
          _0x5fc8c();
        }
      });
    }
    function _0x51006f(_0x338084, _0x5bedd7) {
      let _0x55a9a6 = function (_0x1f0e28, _0x23873c, _0x2eb339, _0x3a6552) {
        ctx.setCountGame(_0x1f0e28, _0x23873c, _0x2eb339, _0x3a6552);
      };
      if (_0x338084 === 'count') {
        theoKzObjects.kill = (0x0 || 0x0) + (_0x5bedd7 ? 0x0 : 0x1);
        theoKzObjects.headshot = (0x0 || 0x0) + (_0x5bedd7 ? 0x1 : 0x0);
        theoKzObjects.totalKills = 0x0 + (_0x5bedd7 ? 0x0 : 0x1);
        theoKzObjects.totalHeadshots = 0x0 + (_0x5bedd7 ? 0x1 : 0x0);
        _0x55a9a6(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x338084 === "open") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        $("#contadorKill_12").show();
        _0x55a9a6(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x338084 === "closed") {
        pwrups = {};
      }
      if (_0x338084 === "cerrar") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        theoKzObjects.totalKills = 0x0;
        theoKzObjects.totalHeadshots = 0x0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(0x3, 0x2);
      };
    }
    setTimeout(function () {
      var _0x49e34e = ['ÙƒÙ„Ø¨', "fuck", 'fuak', "Ø¬Ø­Ø´", "Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ", "Ø¹Ø±Ø¶Ùƒ", 'Ù†Ø¸ÙŠÙ', "Ø·ÙŠØ¨Ø©", "Ø§Ø®ÙˆÙƒ", "Ø§Ø®ØªÙƒ", "Ø§Ù…Ùƒ", "Ø§Ø¨ÙˆÙƒ", "Ù‚ÙˆØ§Ø¯", "Ù…Ù„Ø¹ÙˆÙ†"];
      function _0x49f56e(_0x29c923) {
        if (!_0x29c923) {
          return '';
        }
        return _0x29c923.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF*]/g, '').replace(/[Ù€]/g, '').replace(/[Ù‹ÙŒÙÙÙÙÙ‘Ù’]/g, '').replace(/[Ø£Ø¥Ø¢Ø§]/g, 'Ø§').replace(/[Ù‰ÙŠ]/g, 'ÙŠ').replace(/[Ø©]/g, 'Ù‡');
      }
      function _0x564aa6(_0x4e45cd, _0x25ef7a) {
        if (!_0x4e45cd) {
          return false;
        }
        var _0x4e5592 = _0x4e45cd.replace(/\*$/, '');
        var _0xf490f1 = _0x49f56e(_0x4e5592);
        var _0x44601d = Array.isArray(_0x25ef7a) ? _0x25ef7a : Object.values(_0x25ef7a);
        return _0x44601d.some(function (_0xd6a8b8) {
          var _0x49a866 = _0x49f56e(_0xd6a8b8);
          return _0xf490f1.includes(_0x49a866);
        });
      }
      function _0x53b164(_0x16a946) {
        if (!_0x16a946 || _0x16a946.trim() === '') {
          const _0x4d8a04 = localStorage.getItem('lastValidNickname');
          return _0x4d8a04 || '';
        }
        if (_0x564aa6(_0x16a946, _0x49e34e)) {
          return "Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ*";
        }
        localStorage.setItem("lastValidNickname", _0x16a946);
        return _0x16a946;
      }
      function _0x21ab2a() {
        const _0xb9a33c = new MutationObserver(function () {
          const _0x9de700 = $("#mm-params-nickname").val();
          const _0x352f2d = localStorage.getItem("lastValidNickname");
          if (_0x9de700 !== _0x352f2d && _0x352f2d && !_0x564aa6(_0x352f2d, _0x49e34e)) {
            if (_0x9de700 && !_0x564aa6(_0x9de700, _0x49e34e)) {
              localStorage.setItem("lastValidNickname", _0x9de700);
            } else {
              $('#mm-params-nickname').val(_0x352f2d);
            }
          }
        });
        const _0xe36a16 = document.getElementById("mm-params-nickname");
        if (_0xe36a16) {
          _0xb9a33c.observe(_0xe36a16, {
            'attributes': true,
            'childList': true,
            'characterData': true,
            'subtree': true
          });
        }
      }
      $("#mm-action-play").on('click', function () {
        var _0x4fcb53 = $("#mm-params-nickname").val();
        if (_0x4fcb53 && _0x4fcb53.trim() !== '') {
          var _0x44c996 = _0x53b164(_0x4fcb53);
          $("#mm-params-nickname").val(_0x44c996);
          if (_0x44c996 !== "Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ*") {
            localStorage.setItem("lastValidNickname", _0x44c996);
          }
        }
      });
      $("#final-continue1, #final-replay").on('click', function () {
        setTimeout(() => {
          const _0x36533d = localStorage.getItem("lastValidNickname");
          if (_0x36533d && !_0x564aa6(_0x36533d, _0x49e34e)) {
            $('#mm-params-nickname').val(_0x36533d);
          }
        }, 0x64);
      });
      $("#home-button, .home-button, [data-action=\"home\"]").on("click", function () {
        const _0x23aa83 = $('#mm-params-nickname').val();
        if (_0x23aa83 && !_0x564aa6(_0x23aa83, _0x49e34e)) {
          localStorage.setItem("lastValidNickname", _0x23aa83);
        }
      });
      fetch("https://wormateup.live/up/api/words/get_banned_words.php").then(_0x4ade2f => _0x4ade2f.json()).then(_0x204f0c => {
        _0x49e34e = Array.isArray(_0x204f0c) ? _0x204f0c : Object.values(_0x204f0c);
      })["catch"](_0x374066 => {
        console.error("Error loading banned words:", _0x374066);
      });
      $(document).ready(function () {
        var _0x360c6d = localStorage.getItem("lastValidNickname");
        if (_0x360c6d && !_0x564aa6(_0x360c6d, _0x49e34e)) {
          $("#mm-params-nickname").val(_0x360c6d);
        }
        _0x21ab2a();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css('display', "none");
      $('#mm-menu-cont').css("display", "block");
      $("#mm-bottom-buttons").css('display', "block");
      $("#mm-player-info").css("display", "block");
      $('#mm-bottom-buttons').addClass('buttonNavidad');
      $("#relojHelp").css({
        'position': "absolute",
        'top': "12px",
        'left': "5px"
      });
      $("#delete-account-view").css("display", 'none');
    }, 0xbb8);
    var _0x50d65b = function _0x4b76f2() {
      requestAnimationFrame(_0x4b76f2);
      (window.anApp = _0x1113af).Pa();
    };
    _0x50d65b();
    function _0x8485db() {
      var _0x2dbf4c = _0xe133d6.width();
      var _0x52cb2c = _0xe133d6.height();
      var _0x2951a2 = _0x5e2876.outerWidth();
      var _0xb5abef = _0x5e2876.outerHeight();
      var _0x31f4e6 = _0x43f5b0.outerHeight();
      var _0x9d092e = _0x9cb114.outerHeight();
      var _0xe1f2a2 = Math.min(0x1, Math.min((_0x52cb2c - _0x9d092e - _0x31f4e6) / _0xb5abef, _0x2dbf4c / _0x2951a2));
      var _0x3f9085 = "translate(-50%, -50%) scale(" + _0xe1f2a2 + ')';
      _0x5e2876.css({
        '-webkit-transform': _0x3f9085,
        '-moz-transform': _0x3f9085,
        '-ms-transform': _0x3f9085,
        '-o-transform': _0x3f9085,
        'transform': _0x3f9085
      });
      (window.anApp = _0x1113af).Ra();
      window.scrollTo(0x0, 0x1);
    }
    var _0xe133d6 = $("body");
    var _0x5e2876 = $("#stretch-box");
    var _0x43f5b0 = $("#markup-header");
    var _0x9cb114 = $("#markup-footer");
    _0x8485db();
    $(window).resize(_0x8485db);
  })();
  window.anApp.p.Bc = function () {
    var _0x4d1899 = window.anApp.p;
    var _0x23de2e = {};
    $.get('https://resources.wormate.io/dynamic/assets/registry.json', function (_0x145883) {
      _0x23de2e = _0x145883;
      $.ajax({
        'url': 'https://wormateup.live/up/api/skins.php',
        'method': "GET",
        'dataType': "json",
        'success': function (_0x56606e) {
          theoKzObjects.visibleSkin = _0x56606e.visibleSkin;
          delete _0x56606e.visibleSkin;
          for (let _0x2381fc in _0x56606e) {
            if ('propertyList' !== _0x2381fc) {
              if (Array.isArray(_0x56606e[_0x2381fc])) {
                _0x145883[_0x2381fc] = _0x145883[_0x2381fc].concat(_0x56606e[_0x2381fc]);
              } else {
                _0x145883[_0x2381fc] = {
                  ..._0x145883[_0x2381fc],
                  ..._0x56606e[_0x2381fc]
                };
              }
            }
          }
          theoKzObjects.pL = _0x56606e.propertyList;
          theoKzObjects.idSkin = _0x56606e.skinArrayDict;
          _0x4d1899.Cc(_0x145883);
        },
        'error': function (_0x539cf3, _0x519663, _0x48aa61) {
          console.error(_0x48aa61);
          _0x4d1899.Cc(_0x23de2e);
        }
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $('#popup-login-gg').html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $('#social-buttons').replaceWith('');
  $("#markup-footer").replaceWith("<footer id=\"markup-footer\"><div class=\"lang-menu\"><button class=\"lang-button\">Language </button><div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a><a hreflang=\"de\" href=\"/de/\">Deutsch</a><a hreflang=\"fr\" href=\"/fr/\">FranÃƒÂ§ais</a><a hreflang=\"es\" href=\"/es/\">EspaÃƒÂ±ol</a></div></div><a class=\"link\" hreflang=\"en\" href=\"https://wormateup.live\">Â© 2024 Wormate UP</a><a style=\"font-size: 17px;font-weight: 600;\">wormateup.live</a><a style=\"font-size: 17px;font-weight: 500;color: #ff0;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in Wormate UP !</a></footer>");
});
function openPopup() {
  var _0xf04fe8 = document.getElementById("popup");
  var _0x145045 = document.getElementById("overlay");
  _0xf04fe8.style.display = "block";
  _0x145045.style.display = "block";
}
function closePopup() {
  var _0x8b08cc = document.getElementById("popup");
  var _0x23ec2d = document.getElementById("overlay");
  _0x8b08cc.style.display = "none";
  _0x23ec2d.style.display = "none";
}
function account() {
  $(".mx").on('click', function () {
    $('.servers-mexico').fadeIn(0x1f4);
    $('#addflag').attr('class', "flag mx");
    $(".ui-tab-inactive1").attr('class', "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(0x64);
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
    $(".ui-tab-inactive0").attr('class', "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag br");
  });
  $('.us').on("click", function () {
    $(".servers-eeuu").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag us");
    $('.ui-tab-inactive2').attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $('.ui-tab-inactive6').removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $('.servers-japon').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(0x1f4);
    $('#addflag').attr('class', "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass('ui-tab-active');
    $('.ui-tab-inactive7').removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x1f4);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $('.servers-japon').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.de').on('click', function () {
    $(".servers-germania").fadeIn(0x1f4);
    $('#addflag').attr("class", "flag de");
    $('.ui-tab-inactive4').attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive7').removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x1f4);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $('.servers-japon').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $('.ui-tab-inactive3').removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $('.ui-tab-inactive6').removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass('ui-tab-active');
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.sg').on("click", function () {
    $('.servers-singapur').fadeIn(0x1f4);
    $("#addflag").attr("class", "flag sg");
    $('.ui-tab-inactive6').attr('class', "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass('ui-tab-active');
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr('class', "ui-tab-active ui-tab-inactive7");
    $('.ui-tab-inactive0').removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag au");
    $('.ui-tab-inactive8').attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $('.ui-tab-inactive3').removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $('.ui-tab-inactive6').removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $(".gb").on("click", function () {
    $('.servers-granbretana').fadeIn(0x1f4);
    $("#addflag").attr("class", "flag gb");
    $('.ui-tab-inactive9').attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $('.ui-tab-inactive5').removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
  });
}
getPresedKey = function (_0x7e97f6) {
  var _0x12d74a = '';
  if (_0x7e97f6.keyCode == 0x9) {
    _0x12d74a += "TAB";
  } else {
    if (_0x7e97f6.keyCode == 0xd) {
      _0x12d74a += "ENTER";
    } else {
      if (_0x7e97f6.keyCode == 0x10) {
        _0x12d74a += "SHIFT";
      } else {
        _0x12d74a += String.fromCharCode(_0x7e97f6.keyCode);
      }
    }
  }
  return _0x12d74a;
};
isValidHotkey = function (_0x226a3a) {
  return !!(_0x226a3a.keyCode >= 0x30 && _0x226a3a.keyCode <= 0x39 || _0x226a3a.keyCode >= 0x41 && _0x226a3a.keyCode <= 0x5a || _0x226a3a.keyCode == 0x9 || _0x226a3a.keyCode == 0xd || _0x226a3a.keyCode == 0x10 || _0x226a3a.keyCode == 0x20 || _0x226a3a.keyCode == 0x1b);
};
eval(function (_0x7717f5, _0x4f84b6, _0x1ddce6, _0x4fcbad, _0x480a50, _0x46e2b1) {
  _0x480a50 = function (_0x4435f0) {
    return (_0x4435f0 < _0x4f84b6 ? '' : _0x480a50(parseInt(_0x4435f0 / _0x4f84b6))) + ((_0x4435f0 = _0x4435f0 % _0x4f84b6) > 0x23 ? String.fromCharCode(_0x4435f0 + 0x1d) : _0x4435f0.toString(0x24));
  };
  if (!''.replace(/^/, String)) {
    while (_0x1ddce6--) {
      _0x46e2b1[_0x480a50(_0x1ddce6)] = _0x4fcbad[_0x1ddce6] || _0x480a50(_0x1ddce6);
    }
    _0x4fcbad = [function (_0x29ba8b) {
      return _0x46e2b1[_0x29ba8b];
    }];
    _0x480a50 = function () {
      return "\\w+";
    };
    _0x1ddce6 = 0x1;
  }
  ;
  while (_0x1ddce6--) {
    if (_0x4fcbad[_0x1ddce6]) {
      _0x7717f5 = _0x7717f5.replace(new RegExp("\\b" + _0x480a50(_0x1ddce6) + "\\b", 'g'), _0x4fcbad[_0x1ddce6]);
    }
  }
  return _0x7717f5;
});
function stopZoom(_0x2f7440) {
  if (_0x2f7440.key === 'z') {
    window.w = 0.625;
    window.render();
  }
}
window.addEventListener("wheel", stopZoom);
document.addEventListener('DOMContentLoaded', () => {
  let _0x4aabef = {
    'x': window.innerWidth / 0x2,
    'y': window.innerHeight / 0x2,
    'radius': 0x7
  };
  let _0x1abacb = _0x4aabef.x;
  let _0xd047ba = _0x4aabef.y;
  let _0x58bd16 = 0x0;
  function _0x1159b3() {
    let _0x30b100 = Date.now();
    fetch(window.location.href).then(() => {
      let _0x50271d = Date.now();
      _0x58bd16 = _0x50271d - _0x30b100;
      if (_0x58bd16 > 0x95) {
        _0xa64ec2.style.color = "red";
      } else if (_0x58bd16 > 0x63) {
        _0xa64ec2.style.color = "yellow";
      } else {
        _0xa64ec2.style.color = "green";
      }
    })["catch"](() => {
      _0x58bd16 = "Error";
      _0xa64ec2.style.color = "red";
    });
  }
  let _0xa64ec2 = document.createElement("div");
  _0xa64ec2.style.position = "fixed";
  _0xa64ec2.style.right = "5px";
  _0xa64ec2.style.bottom = "5px";
  _0xa64ec2.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  _0xa64ec2.style.color = 'white';
  _0xa64ec2.style.padding = "2px 5px";
  _0xa64ec2.style.fontSize = "12px";
  _0xa64ec2.style.borderRadius = "3px";
  _0xa64ec2.style.fontWeight = "bold";
  _0xa64ec2.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  document.body.appendChild(_0xa64ec2);
  document.addEventListener("mousemove", _0x1760d0 => {
    _0x1abacb = _0x1760d0.clientX;
    _0xd047ba = _0x1760d0.clientY;
  });
  function _0x592cc5() {
    let _0x1f1eff = _0x1abacb - _0x4aabef.x;
    let _0x33e70b = _0xd047ba - _0x4aabef.y;
    let _0x1df445 = Math.sqrt(_0x1f1eff * _0x1f1eff + _0x33e70b * _0x33e70b);
    if (_0x1df445 > 0x7) {
      _0x4aabef.x += _0x1f1eff / _0x1df445 * 0x7;
      _0x4aabef.y += _0x33e70b / _0x1df445 * 0x7;
    } else {
      _0x4aabef.x = _0x1abacb;
      _0x4aabef.y = _0xd047ba;
    }
    let _0x5c9ef3 = document.getElementById("solucan");
    if (_0x5c9ef3) {
      _0x5c9ef3.style.left = _0x4aabef.x + 'px';
      _0x5c9ef3.style.top = _0x4aabef.y + 'px';
    }
    _0xa64ec2.textContent = "Ping: " + _0x58bd16 + 'ms';
    requestAnimationFrame(_0x592cc5);
  }
  _0x592cc5();
  setInterval(_0x1159b3, 0x3e8);
});
document.addEventListener('keydown', _0x1045f2 => {
  if (_0x1045f2.key === 'F12') {
    _0x1045f2.preventDefault();
  }
}, false);
document.addEventListener('contextmenu', _0x59c992 => {
  _0x59c992.preventDefault();
}, false);
window.addEventListener("keydown", _0x3542ad => {
  const _0x230aa0 = _0x3542ad.key.toLowerCase();
  if (_0x230aa0 === 'z' || _0x230aa0 === 'Ø¦') {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("Function 'changedNf' is not defined.");
    }
  }
});
class ResourceManager {
  constructor() {
    this.textureCache = new Map();
    this.maxCacheSize = 0x64;
    this.gcInterval = 0x2710;
    this.lastGC = 0x0;
    this.memoryThreshold = 0.8;
    this.lowMemoryMode = false;
  }
  ["init"]() {
    this.setupMemoryMonitoring();
    this.setupGCInterval();
  }
  ['clearUnusedTextures']() {
    if (this.textureCache.size > this.maxCacheSize) {
      const _0x461789 = Array.from(this.textureCache.entries()).slice(0x0, Math.floor(this.maxCacheSize * 0.2));
      _0x461789.forEach(([_0x5de455, _0x15e001]) => {
        _0x15e001.destroy(true);
        this.textureCache["delete"](_0x5de455);
      });
    }
  }
  ['setupMemoryMonitoring']() {
    setInterval(() => {
      if (performance && performance.memory) {
        const _0x354d9c = performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit;
        if (_0x354d9c > this.memoryThreshold) {
          this.enableLowMemoryMode();
        } else if (this.lowMemoryMode && _0x354d9c < this.memoryThreshold * 0.8) {
          this.disableLowMemoryMode();
        }
      }
    }, 0x1388);
  }
  ["setupGCInterval"]() {
    setInterval(() => {
      const _0x3351d9 = Date.now();
      if (_0x3351d9 - this.lastGC > this.gcInterval) {
        this.cleanupUnusedResources();
        this.lastGC = _0x3351d9;
      }
    }, this.gcInterval);
  }
  ['enableLowMemoryMode']() {
    this.lowMemoryMode = true;
  }
  ['disableLowMemoryMode']() {
    this.lowMemoryMode = false;
  }
  ['cleanupUnusedResources']() {
    this.clearUnusedTextures();
  }
}
class RenderOptimizer {
  constructor() {
    this.frameCount = 0x0;
    this.lastTime = 0x0;
    this.fps = 0x0;
    this.frameSkipThreshold = 0x10;
    this.lastFrameTime = 0x0;
    this.fpsHistory = [];
    this.qualityLevels = {
      'HIGH': {
        'particleCount': 0x64,
        'shadowQuality': 0x1,
        'antialiasing': true
      },
      'MEDIUM': {
        'particleCount': 0x32,
        'shadowQuality': 0.5,
        'antialiasing': true
      },
      'LOW': {
        'particleCount': 0x19,
        'shadowQuality': 0x0,
        'antialiasing': false
      }
    };
    this.currentQuality = "HIGH";
    this.buffer = null;
    this.showGrid = false;
    this.gridColor = 'rgba(255,255,255,0.2)';
    this.gridSize = 0x32;
  }
  ["init"]() {
    this.createBuffer();
    this.startMonitoring();
  }
  ["createBuffer"]() {
    const _0x18fb59 = document.createElement("canvas");
    const _0x21ff9d = _0x18fb59.getContext('2d', {
      'alpha': false,
      'willReadFrequently': true
    });
    const _0x1eec93 = window.anApp?.['o']?.['fb']?.['ub'] || 0x1f4;
    _0x18fb59.width = _0x1eec93;
    _0x18fb59.height = _0x1eec93;
    _0x21ff9d.imageSmoothingEnabled = false;
    this.buffer = {
      'canvas': _0x18fb59,
      'ctx': _0x21ff9d
    };
  }
  ["shouldRenderFrame"](_0x58f513) {
    const _0x3120a4 = _0x58f513 - this.lastFrameTime;
    if (_0x3120a4 >= this.frameSkipThreshold) {
      this.lastFrameTime = _0x58f513;
      this.updateFPS(_0x3120a4);
      return true;
    }
    return false;
  }
  ["updateFPS"](_0x4c0a76) {
    const _0x1c2a4e = 0x3e8 / _0x4c0a76;
    this.fpsHistory.push(_0x1c2a4e);
    if (this.fpsHistory.length > 0x3c) {
      this.fpsHistory.shift();
    }
    this.adjustQuality();
  }
  ['adjustQuality']() {
    const _0x3804dd = this.getAverageFPS();
    if (_0x3804dd < 0x1e && this.currentQuality !== "LOW") {
      this.currentQuality = "LOW";
      this.applyQualitySettings();
    } else {
      if (_0x3804dd > 0x2d && _0x3804dd < 0x37 && this.currentQuality !== "MEDIUM") {
        this.currentQuality = "MEDIUM";
        this.applyQualitySettings();
      } else if (_0x3804dd > 0x3a && this.currentQuality !== "HIGH") {
        this.currentQuality = "HIGH";
        this.applyQualitySettings();
      }
    }
  }
  ["startMonitoring"]() {
    const _0x1185b8 = () => {
      const _0x293460 = performance.now();
      if (this.shouldRenderFrame(_0x293460)) {}
      requestAnimationFrame(() => _0x1185b8());
    };
    _0x1185b8();
  }
  ['getAverageFPS']() {
    return this.fpsHistory.reduce((_0x23fb73, _0xd122bd) => _0x23fb73 + _0xd122bd, 0x0) / this.fpsHistory.length;
  }
  ["applyQualitySettings"]() {
    const _0xb64afa = this.qualityLevels[this.currentQuality];
    if (window.anApp?.["renderer"]) {
      window.anApp.renderer.antialias = _0xb64afa.antialiasing;
    }
  }
}
class InputManager {
  constructor() {
    this.inputBuffer = [];
    this.bufferSize = 0x5;
    this.inputDelay = 0x10;
    this.lastInputTime = 0x0;
    this.mouseSensitivity = 0x1;
  }
  ["init"]() {
    this.setupEventListeners();
  }
  ["setupEventListeners"]() {
    document.addEventListener("keydown", _0x4e7d63 => this.handleKeyInput(_0x4e7d63));
    document.addEventListener("mousemove", _0x5c0b62 => this.handleMouseInput(_0x5c0b62));
  }
  ['handleKeyInput'](_0x354d80) {
    const _0x50880a = this.processInput({
      'type': "keyboard",
      'key': _0x354d80.key,
      'timestamp': performance.now()
    });
    if (_0x50880a) {
      this.executeInput(_0x50880a);
    }
  }
  ["handleMouseInput"](_0x104437) {
    const _0x363a48 = this.processInput({
      'type': "mouse",
      'x': _0x104437.movementX * this.mouseSensitivity,
      'y': _0x104437.movementY * this.mouseSensitivity,
      'timestamp': performance.now()
    });
    if (_0x363a48) {
      this.executeInput(_0x363a48);
    }
  }
  ["processInput"](_0x49a513) {
    const _0x3a8a3b = performance.now();
    if (_0x3a8a3b - this.lastInputTime < this.inputDelay) {
      return null;
    }
    this.inputBuffer.push(_0x49a513);
    if (this.inputBuffer.length > this.bufferSize) {
      this.inputBuffer.shift();
    }
    this.lastInputTime = _0x3a8a3b;
    return this.getPredictedInput();
  }
  ['getPredictedInput']() {
    if (this.inputBuffer.length < 0x2) {
      return this.inputBuffer[this.inputBuffer.length - 0x1];
    }
    return this.inputBuffer[this.inputBuffer.length - 0x1];
  }
  ['executeInput'](_0x20a309) {
    if (_0x20a309.type === "keyboard") {} else {
      if (_0x20a309.type === "mouse") {}
    }
  }
}
class DiagnosticsSystem {
  constructor() {
    this.lastTime = 0x0;
    this.frameCount = 0x0;
    this.fps = 0x0;
    this.slowFrames = 0x0;
    this.debugMode = false;
  }
  ["init"]() {
    this.startMonitoring();
  }
  ["startMonitoring"]() {
    const _0xa03047 = () => {
      const _0x32e78b = performance.now();
      const _0x567959 = _0x32e78b - this.lastTime;
      this.frameCount++;
      if (_0x567959 >= 0x3e8) {
        this.fps = Math.round(this.frameCount * 0x3e8 / _0x567959);
        this.frameCount = 0x0;
        this.lastTime = _0x32e78b;
        if (this.debugMode) {
          this.logStats();
        }
      }
      if (_0x567959 > 16.67) {
        this.slowFrames++;
        if (this.debugMode) {
          this.logPerformanceIssue(_0x567959);
        }
      }
      requestAnimationFrame(() => _0xa03047());
    };
    _0xa03047();
  }
  ['logStats']() {
    console.debug("Performance Stats - FPS: " + this.fps + " | Slow Frames: " + this.slowFrames);
  }
  ['logPerformanceIssue'](_0x570ef3) {
    console.warn("Performance issue detected: " + Math.round(_0x570ef3) + "ms frame time");
  }
  ["toggleDebugMode"]() {
    this.debugMode = !this.debugMode;
    console.log("Debug mode: " + (this.debugMode ? "enabled" : "disabled"));
  }
}
class GameOptimizer {
  constructor() {
    this.resourceManager = new ResourceManager();
    this.renderOptimizer = new RenderOptimizer();
    this.inputManager = new InputManager();
    this.diagnostics = new DiagnosticsSystem();
  }
  ["init"]() {
    this.resourceManager.init();
    this.renderOptimizer.init();
    this.inputManager.init();
    this.diagnostics.init();
  }
}
class MobileOptimizer {
  constructor() {
    this.fpsTarget = this.detectRefreshRate();
    this.currentFps = 0x0;
    this.frameTime = 0x3e8 / this.fpsTarget;
    this.lastFrameTime = 0x0;
    this.initialized = false;
    this.fpsHistory = [this.fpsTarget];
  }
  ['detectRefreshRate']() {
    if (window.screen && window.screen.refresh) {
      return window.screen.refresh;
    }
    return 0x3c;
  }
  ["init"]() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    window.theoKzObjects = window.theoKzObjects || {};
    window.theoKzObjects.performanceMode = {
      'renderDistance': 0x1,
      'animationQuality': 0x1,
      'eat_animation': 0.0025,
      'smoothCamera': 0.5
    };
    this.startPerformanceMonitoring();
  }
  ['startPerformanceMonitoring']() {
    let _0x332cd8 = 0x0;
    let _0x5e6e83 = performance.now();
    const _0x530b6c = () => {
      const _0x2b439f = performance.now();
      _0x332cd8++;
      if (_0x2b439f - _0x5e6e83 >= 0x3e8) {
        this.currentFps = _0x332cd8;
        this.fpsHistory.push(this.currentFps);
        if (this.fpsHistory.length > 0x3) {
          this.fpsHistory.shift();
        }
        _0x332cd8 = 0x0;
        _0x5e6e83 = _0x2b439f;
        this.adjustPerformance();
      }
      requestAnimationFrame(_0x530b6c);
    };
    _0x530b6c();
  }
  ["adjustPerformance"]() {
    const _0xc4b294 = window.theoKzObjects.performanceMode;
    const _0x10c19d = this.fpsHistory.reduce((_0x2837fd, _0xe6b3bd) => _0x2837fd + _0xe6b3bd, 0x0) / this.fpsHistory.length;
    const _0x2ebe37 = this.fpsTarget;
    const _0x48b127 = _0x10c19d / _0x2ebe37;
    if (_0x48b127 < 0.5) {
      _0xc4b294.renderDistance = 0.6;
      _0xc4b294.animationQuality = 0.6;
      window.theoKzObjects.eat_animation = 0.006;
      window.theoKzObjects.smoothCamera = 0.3;
    } else {
      if (_0x48b127 < 0.75) {
        _0xc4b294.renderDistance = 0.7;
        _0xc4b294.animationQuality = 0.8;
        window.theoKzObjects.eat_animation = 0.005;
        window.theoKzObjects.smoothCamera = 0.4;
      } else if (_0x48b127 < 0.9) {
        _0xc4b294.renderDistance = 0.8;
        _0xc4b294.animationQuality = 0.9;
        window.theoKzObjects.eat_animation = 0.004;
        window.theoKzObjects.smoothCamera = 0.45;
      } else {
        _0xc4b294.renderDistance = 0x1;
        _0xc4b294.animationQuality = 0x1;
        window.theoKzObjects.eat_animation = 0.0025;
        window.theoKzObjects.smoothCamera = 0.5;
      }
    }
  }
  ["throttle"](_0x2f0853, _0x61da0f) {
    let _0x2c5490;
    return function (..._0x2cf9d4) {
      if (!_0x2c5490) {
        _0x2f0853.apply(this, _0x2cf9d4);
        _0x2c5490 = true;
        setTimeout(() => _0x2c5490 = false, _0x61da0f);
      }
    };
  }
}
if (PhoneChecked()) {
  const mobileOptimizer = new MobileOptimizer();
  mobileOptimizer.init();
}
window.GameOptimizer = new GameOptimizer();
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.GameOptimizer.init());
} else {
  window.GameOptimizer.init();
}
