var wormfriendsApp = angular.module("wormfriendsApp", []);
wormfriendsApp.controller("skinlabCtrl", ["$scope", "$timeout", "$parse", function($scope, $timeout, $parse) {
    $scope.obj = {};
    $scope.cacheImage = [];
    $scope.formIdBlock = {
        id: "",
    };
    $scope.type_wear_list = ["HAT", "GLASSES", "EYES", "MOUTH"];
    $scope.data = {
        selectedOption: 9,
        selectedGlow: [],
        image: null,
    };
    $scope.baseColor = {
        primes: {
            c___red: "#eb4243",
            c__blue: "#0049c0",
            c__gold: "#ffce03",
            c_a_tm2_A: "#ff6944",
            c_a_tm2_B: "#18d2f2",
            c_choco: "#6c4b42",
            c_green: "#009b3a",
            c_karda: "#ffef42",
            c_olive: "#d4de61",
            c_pmp_1: "#f6ab07",
            c_pmp_2: "#f69809",
            c_pmp_3: "#f68009",
            c_pmp_4: "#d85806",
            c___vio: "#8760c7",
            c__card: "#ec4243",
            c__cyan: "#58c4f5",
            c__dsky: "#22a8f5",
            c__emer: "#31a79b",
            c__orng: "#fca637",
            c__pink: "#f6bdd0",
            c__prpl: "#7042ba",
            c__ruby: "#f44336",
            c__yllw: "#feec64",
            c_azure: "#3196f0",
            c_black: "#606060",
            c_blood: "#fc714a",
            c_grass: "#83c13b",
            c_ivory: "#fedeb5",
            c_ocean: "#26c6da",
            c_veron: "#ff8ef5",
            c_white: "#ffffff",
        },
        glow: [{
            name: "a_trans",
            hex: "transparent",
            label: "Transparent"
        }, {
            name: "a_white",
            hex: "#ffffff",
            label: "White"
        }, {
            name: "a_death",
            hex: "#000000",
            label: "Black"
        }, {
            name: "a_black",
            hex: "#606060",
            label: "Cray"
        }, {
            name: "a__card",
            hex: "#ec4243",
            label: "Red"
        }, {
            name: "a__ruby",
            hex: "#f44336",
            label: "Ruby"
        }, {
            name: "a_blood",
            hex: "#fc714a",
            label: "Orange 1"
        }, {
            name: "a__orng",
            hex: "#fca637",
            label: "Orange 2"
        }, {
            name: "a__yllw",
            hex: "#feec64",
            label: "Yellow"
        }, {
            name: "a_ivory",
            hex: "#fedeb5",
            label: "Cornsilk"
        }, {
            name: "a_grass",
            hex: "#83c13b",
            label: "Green 1"
        }, {
            name: "a__emer",
            hex: "#31a79b",
            label: "Green 2"
        }, {
            name: "a_azure",
            hex: "#3196f0",
            label: "Blue 1"
        }, {
            name: "a__dsky",
            hex: "#22a8f5",
            label: "Blue 2"
        }, {
            name: "a__cyan",
            hex: "#58c4f5",
            label: "Blue 3"
        }, {
            name: "a_ocean",
            hex: "#26c6da",
            label: "Blue 4"
        }, {
            name: "a___vio",
            hex: "#8760c7",
            label: "Violet"
        }, {
            name: "a__prpl",
            hex: "#7042ba",
            label: "Purple"
        }, {
            name: "a_veron",
            hex: "#ff8ef5",
            label: "Pink"
        }, ],
    };
    $scope.segmentsOptions = [{
        name: "09",
        value: 9
    }, {
        name: "10",
        value: 10
    }, {
        name: "11",
        value: 11
    }, {
        name: "12",
        value: 12
    }, {
        name: "13",
        value: 13
    }, {
        name: "14",
        value: 14
    }, ];
    $scope.skinList = [];
    $scope.glowsMemory = {};
    $scope.initGlowMemory = function(id, index, glow) {
        $scope.glowsMemory[id] = $scope.glowsMemory[id] || {};
        if (!$scope.glowsMemory[id].glow) {
            $scope.glowsMemory[id].glow = [];
        }
        $scope.glowsMemory[id].glow[index] = $scope.baseColor.glow.find( (x) => x.name === glow);
    }
    ;
    $scope.generateGlowLenArray = function() {
        const glowLenArray = new Array($scope.data.selectedOption).map( (item, index) => index);
        return glowLenArray;
    }
    ;
    $scope.glowGen = function() {
        $scope.data.selectedGlow = [];
        for (let _0xdc4c91 = 0; _0xdc4c91 < $scope.data.selectedOption; _0xdc4c91++) {
            $scope.data.selectedGlow.push($scope.baseColor.glow[2]);
        }
    }
    ;
    function createObjSkin(version, type) {
        const prefix = generateUniqueID();
        const fileNameInput = document.getElementById("file_name");
        const fileName = "SKIN_" + (fileNameInput.value || prefix);
        $scope.obj.id = prefix;
        $scope.obj.type = type || "skin";
        $scope.obj.cos = const170 + 5;
        $scope.obj.len = $scope.data.selectedGlow.length;
        $scope.obj.fileName = fileName;
        $scope.obj.version_skin = version;
        $scope.obj.skins = [];
        if (version === 2) {
            $scope.obj.glow = $scope.data.selectedGlow.map( (_0x4615c2) => _0x4615c2.name);
            $scope.obj.file = $scope.preview;
        }
    }
    $scope.addSkin = function() {
        if ($scope.skinList.length === 50) {
            alert("Limite de 50 skins atingido.");
            return;
        }
        if (!$scope.obj.id || $scope.obj.id === "") {
            createObjSkin(3);
        }
        const obj = {};
        obj.id = "SKIN_" + $scope.obj.id + "_" + deciamlToBase68($scope.skinList.length + 1);
        obj.glow = $scope.data.selectedGlow.map( (_0x4615c2) => _0x4615c2.name);
        obj.file = $scope.preview;
        obj.associados = [];
        $scope.skinList.push(obj);
    }
    ;
    $scope.removeSkin = function(skin) {
        const id = skin.id;
        const index = $scope.skinList.findIndex( (x) => x.id === id);
        $scope.skinList.splice(index, 1);
    }
    ;
    $scope.addBlock = function(skin) {
        $("#getCroppedCanvasModal").modal("show");
        $scope.modalSkin = skin;
        $scope.$apply();
    }
    ;
    $scope.addIdBlock = function() {
        const index = $scope.skinList.findIndex( (x) => x.id === $scope.modalSkin.id);
        $scope.skinList[index].associados.push($scope.formIdBlock.id);
        $scope.formIdBlock.id = "";
        $scope.$apply();
    }
    ;
    $scope.download = function(type) {
        if (!$scope.obj.id || $scope.obj.id === "") {
            createObjSkin(2, type);
        }
        if ($scope.skinList.length > 0) {
            $scope.obj.skins = $scope.skinList;
            delete $scope.obj.glow;
            delete $scope.obj.td;
        } else {
            $scope.obj.skins.push({
                id: $scope.obj.id,
                glow: $scope.data.selectedGlow.map( (_0x4615c2) => _0x4615c2.name),
                file: $scope.preview,
                associados: [],
            });
        }
        if (!$scope.preview && $scope.skinList.length === 0) {
            alert("CROP NOT FOUND");
            return;
        }
        $scope.obj.version_skin = 3;
        delete $scope.obj.file;
        delete $scope.obj.glow;
        var string = JSON.stringify($scope.obj);
        var _blob = new Blob([string],{
            type: "application/json",
        });
        const fileNameInput = document.getElementById("file_name");
        const downloadFileName = (fileNameInput.value ? "SKIN_" + fileNameInput.value : $scope.obj.fileName) + ".json";
        const downloadLink = (window.URL || window.webkitURL).createObjectURL(_blob);
        _blob = document.createElement("a");
        _blob.download = downloadFileName;
        _blob.href = downloadLink;
        document.body.appendChild(_blob);
        _blob.click();
        document.body.removeChild(_blob);
        $scope.obj.skins = [];
    }
    ;
    $scope.copyGlowAll = function(index) {
        for (let i = 0; i < $scope.data.selectedGlow.length; i++) {
            if (i !== index) {
                $scope.data.selectedGlow[i] = $scope.data.selectedGlow[index];
            }
        }
    }
    ;
    $scope.copyGlowAllSub = function(obj, index) {
        for (let i = 0; i < $scope.skinList[index].glow.length; i++) {
            $scope.skinList[index].glow[i] = obj.name;
            $scope.initGlowMemory($scope.skinList[index].id, i, obj.name);
        }
    }
    ;
    $scope.updateStyle = function(index) {
        var select = document.getElementById("glow" + index);
        var options = select.options;
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var value = option.value;
            var glow = $scope.baseColor.glow.find( (x) => x.name === value);
            option.style.backgroundColor = glow.hex;
        }
    }
    ;
    $timeout(function() {
        for (var i = 0; i < $scope.data.selectedGlow.length; i++) {
            $scope.updateStyle(i);
        }
    });
    var filesJson = [];
    var formFileJson = document.getElementById("formFileJson");
    var skinsView = document.getElementById("skinsView");
    formFileJson.onchange = function() {
        var files = this.files;
        var fileName = files[0].name;
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = JSON.parse(e.target.result);
            if (data.td) {
                (data.skins = data.skins || []).push({
                    file: data.td.file,
                    glow: data.glow,
                });
            }
            for (var i = 0; i < data.skins.length; i++) {
                var createDiv = document.createElement("div");
                createDiv.style.width = "100%";
                createDiv.style.marginBottom = "10px";
                createDiv.style.border = "1px solid #000";
                var createInfoBox = document.createElement("div");
                createInfoBox.style.width = "100%";
                createInfoBox.style.padding = "5px";
                createInfoBox.style.backgroundColor = "#f5f5f5";
                createInfoBox.style.borderBottom = "1px solid #000";
                createInfoBox.innerHTML = "ID: " + (data.skins[i].id || data.id) + " | File: " + fileName;
                createDiv.appendChild(createInfoBox);
                var createImage = document.createElement("img");
                createImage.src = data.skins[i].file;
                createImage.style.width = "100%";
                createDiv.appendChild(createImage);
                skinsView.appendChild(createDiv);
                filesJson.push(data.skins[i]);
            }
        }
        ;
        reader.readAsText(files[0]);
    }
    ;
    $scope.unificationFiles = function() {
        if (filesJson.length === 0) {
            alert("Nenhum arquivo encontrado");
            return;
        }
        const id = "SKIN_" + generateUniqueID();
        filesJson.forEach( (x, index) => {
            x.id = id + deciamlToBase68($scope.skinList.length + index);
        }
        );
        const filesJsonCompile = {
            id: id,
            type: "skin",
            cos: 175,
            len: 9,
            fileName: id,
            version_skin: 3,
            skins: filesJson,
        };
        var string = JSON.stringify(filesJsonCompile);
        var _blob = new Blob([string],{
            type: "application/json",
        });
        const downloadFileName = id + ".json";
        const downloadLink = document.createElement("a");
        downloadLink.href = (window.URL || window.webkitURL).createObjectURL(_blob);
        downloadLink.download = downloadFileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    ;
    $scope.clearFiles = function() {
        filesJson = [];
        skinsView.innerHTML = "";
        formFileJson.value = "";
    }
    ;
    $scope.glowGen();
    const const170 = 170;
    var winCropper = window.Cropper;
    var _0x358890 = window.URL || window.webkitURL;
    var _0xeb4c8f = document.querySelector(".img-container");
    var _0x5415df = _0xeb4c8f.getElementsByTagName("img").item(0);
    var _0x5cc475 = document.getElementById("download");
    var _0x35497a = document.getElementById("actions");
    var _0x37cf2a = {
        aspectRatio: 1,
        autoCropArea: 1,
        viewMode: 1,
        ready: function(_0x3a987d) {
            _winCropper.setCropBoxData({
                left: 0
            }),
            _winCropper.setData({
                width: const170,
                height: const170
            });
        },
        cropstart: function(_0x14304d) {},
        cropmove: function(_0x515eac) {},
        cropend: function(_0x4fc2aa) {},
        crop: function(_0x4f60b4) {},
        zoom: function(_0x2984d7) {},
    };
    var _0x2c954a = _0x5415df.src;
    var _0x58f75f = "image/png";
    var _0x5e20de = document.getElementById("result_skinlab");
    var _0x2884c4;
    _winCropper = new winCropper(_0x5415df,_0x37cf2a);
    function createCircleMaskedImage(image) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var width = image.width;
        var height = image.height;
        canvas.width = width;
        canvas.height = height;
        context.imageSmoothingQuality = "high";
        context.imageSmoothingEnabled = true;
        context.drawImage(image, 0, 0, width, height);
        context.globalCompositeOperation = "destination-in";
        context.beginPath();
        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
        context.fill();
        return canvas;
    }
    function _0x27e89e(_0x1c2dbe) {
        return new Promise( (_0x5c33be, _0x60a688) => {
            const _0x3bdcee = new FileReader();
            (_0x3bdcee.onloadend = () => _0x5c33be(_0x3bdcee.result)),
            _0x3bdcee.readAsDataURL(_0x1c2dbe);
        }
        );
    }
    function convertBlobToBase64(blob) {
        return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                resolve(reader.result);
            }
            ;
        }
        );
    }
    function generateImage(_images) {
        let segmentWidth = const170 + 5;
        const canvas = document.createElement("canvas");
        canvas.width = $scope.data.selectedGlow.length * segmentWidth - 4;
        canvas.height = 170;
        const context = canvas.getContext("2d");
        for (let i = 0; i < _images.length; i++) {
            context.drawImage(_images[i], segmentWidth * i, 0);
            context.globalCompositeOperation = "source-over";
        }
        context.save();
        canvas.toBlob(async function(blob) {
            $scope.data.action = "wwc_skinlab";
            const file = await convertBlobToBase64(blob);
            $scope.data.action = "wwc_skinlab";
            $scope.preview = file;
        });
    }
    $("[data-toggle='tooltip']").tooltip();
    !document.createElement("canvas").getContext && $("button[data-method='getCroppedCanvas']").prop("disabled", true);
    typeof document.createElement("cropper").style.transition === "undefined" && ($("button[data-method='rotate']").prop("disabled", true),
    $("button[data-method='scale']").prop("disabled", true));
    typeof _0x5cc475.download === "undefined" && ((_0x5cc475.className += " disabled"),
    (_0x5cc475.title = "Your browser does not support download"));
    (_0x35497a.querySelector(".docs-buttons").onclick = function(_0x425ec0) {
        var _0x5705bb = _0x425ec0 || window.event, _0x455579 = _0x5705bb.target || _0x5705bb.srcElement, _0x3be466, _0x2c0a5b, _0x5c92ed, _0x3b9ef2;
        if (!_winCropper)
            return;
        while (_0x455579 !== this) {
            if (_0x455579.getAttribute("data-method"))
                break;
            _0x455579 = _0x455579.parentNode;
        }
        if (_0x455579 === this || _0x455579.disabled || _0x455579.className.indexOf("disabled") > -1)
            return;
        (_0x3b9ef2 = {
            method: _0x455579.getAttribute("data-method"),
            target: _0x455579.getAttribute("data-target"),
            option: _0x455579.getAttribute("data-option") || undefined,
            secondOption: _0x455579.getAttribute("data-second-option") || undefined,
        }),
        (_0x3be466 = _winCropper.cropped);
        if (_0x3b9ef2.method) {
            if (typeof _0x3b9ef2.target !== "undefined") {
                _0x5c92ed = document.querySelector(_0x3b9ef2.target);
                if (!_0x455579.hasAttribute("data-option") && _0x3b9ef2.target && _0x5c92ed)
                    try {
                        _0x3b9ef2.option = JSON.parse(_0x5c92ed.value);
                    } catch (_0x1987d3) {
                        console.log(_0x1987d3.message);
                    }
            }
            switch (_0x3b9ef2.method) {
            case "rotate":
                _0x3be466 && _0x37cf2a.viewMode > 0 && _winCropper.clear();
                break;
            case "getCroppedCanvas":
                _0x58f75f === "image/*" && !_0x3b9ef2.option && (_0x3b9ef2.option = {});
                break;
            }
            _0x3b9ef2.method !== "getCroppedCanvas" && (_0x2c0a5b = _winCropper[_0x3b9ef2.method](_0x3b9ef2.option, _0x3b9ef2.secondOption));
            switch (_0x3b9ef2.method) {
            case "reset":
                _winCropper.setCropBoxData({
                    left: 0
                });
                break;
            case "rotate":
                _0x3be466 && _0x37cf2a.viewMode > 0 && _winCropper.crop();
                break;
            case "scaleX":
            case "scaleY":
                _0x455579.setAttribute("data-option", -_0x3b9ef2.option);
                break;
            case "getCroppedCanvas":
                _0x5e20de.innerHTML = "";
                let _0x2602a1 = _winCropper.getCropBoxData()
                  , _0x2910d9 = [];
                for (let _0x5d542e = 0; _0x5d542e < $scope.data.selectedGlow.length; _0x5d542e++) {
                    _winCropper.setCropBoxData({
                        left: _0x2602a1.left + ((_0x2602a1.width * 16) / 64) * _0x5d542e,
                    }),
                    (_0x2c0a5b = createCircleMaskedImage(_winCropper[_0x3b9ef2.method]({
                        width: const170,
                        height: const170
                    }, _0x3b9ef2.secondOption))),
                    _0x2910d9.push(_0x2c0a5b);
                    let _0x56b87a = ((_0x2c0a5b.width * 16) / 64) * _0x5d542e;
                    (_0x2c0a5b.style = "position: absolute; border-radius: 100px; top: 25px; left:" + (_0x56b87a + 25) + "px; box-shadow:0 0 1px 1px #ffffff00, 0 0 1px 2px #ffffff00, 0 0 15px 0px " + $scope.data.selectedGlow[_0x5d542e].hex + ";"),
                    _0x5e20de.appendChild(_0x2c0a5b);
                }
                generateImage(_0x2910d9);
                break;
            case "destroy":
                _winCropper = null;
                _0x2884c4 && (_0x358890.revokeObjectURL(_0x2884c4),
                (_0x2884c4 = ""),
                (_0x5415df.src = _0x2c954a));
                break;
            }
            if (typeof _0x2c0a5b === "object" && _0x2c0a5b !== _winCropper && _0x5c92ed)
                try {
                    _0x5c92ed.value = JSON.stringify(_0x2c0a5b);
                } catch (_0x3093f4) {
                    console.log(_0x3093f4.message);
                }
        }
    }
    ),
    (document.body.onkeydown = function(_0x28e4df) {
        var _0x1cd730 = _0x28e4df || window.event;
        if (_0x1cd730.target !== this || !_winCropper || this.scrollTop > 300)
            return;
        switch (_0x1cd730.keyCode) {
        case 37:
            _0x1cd730.preventDefault(),
            _winCropper.move(-1, 0);
            break;
        case 38:
            _0x1cd730.preventDefault(),
            _winCropper.move(0, -1);
            break;
        case 39:
            _0x1cd730.preventDefault(),
            _winCropper.move(1, 0);
            break;
        case 40:
            _0x1cd730.preventDefault(),
            _winCropper.move(0, 1);
            break;
        }
    }
    );
    var _0x3472ba = document.getElementById("inputImage");
    _0x358890 ? (_0x3472ba.onchange = function() {
        var _0x43bd88 = this.files, _0x163d7d;
        _0x43bd88 && _0x43bd88.length && ((_0x163d7d = _0x43bd88[0]),
        /^image\/\w+/.test(_0x163d7d.type) ? ((_0x58f75f = _0x163d7d.type),
        (uploadedImageName = _0x163d7d.name),
        _0x2884c4 && _0x358890.revokeObjectURL(_0x2884c4),
        (_0x5415df.src = _0x2884c4 = _0x358890.createObjectURL(_0x163d7d)),
        _winCropper && _winCropper.destroy(),
        (_winCropper = new winCropper(_0x5415df,_0x37cf2a)),
        (_0x3472ba.value = null)) : window.alert("Please choose an image file."));
    }
    ) : ((_0x3472ba.disabled = true),
    (_0x3472ba.parentNode.className += " disabled"));
}
, ]);
const baseYear = 2024;
const base68Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const usedIDs = new Set();
function generateUniqueID() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&abcdefghijklmnopqrstuvwxyz#0123456789@";
    let id;
    do {
        id = "";
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            id += chars[randomIndex];
        }
    } while (usedIDs.has(id));
    usedIDs.add("S" + id);
    return "S" + id;
}
function deciamlToBase68(decimalValue) {
    let base68Result = "";
    while (decimalValue > 0) {
        const remainder = decimalValue % 68;
        base68Result = base68Chars[remainder] + base68Result;
        decimalValue = Math.floor(decimalValue / 68);
    }
    return base68Result.toString().padStart(3, "_");
}
