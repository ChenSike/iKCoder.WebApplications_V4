Scripts = {
    clearIds: function (b) {
        if (b) {
            b.id = void 0;
            delete b.id;
            if (b instanceof Block) {
                Scripts.clearIds(b.label);
                for (var c = 0; c < b._containers.length; c++) Scripts.clearIds(b._containers[c]);
                Scripts.clearIds(b.next)
            } else if (b instanceof Label)
                for (c = 0; c < b._children.length; c++) Scripts.clearIds(b._children[c]);
            else b instanceof LabelInput && b._child != null && Scripts.clearIds(b._child)
        }
        return null
    }
};

function Script(b) {
    this.origSprite = this.sprite = b.sprite;
    this.scriptBlock = b.scriptBlock;
    this.reset()
}
Script.TYPE_CONTAINER = 0;
Script.TYPE_FUNC = 1;
Script.TYPE_LOOP = 2;
Script.prototype.reset = function () {
    this.sprite = this.origSprite;
    this.stack = [];
    this.previousBlock = this.currentBlock = null;
    this.skipArgCompute = false;
    this.fnArgs = {};
    this.scriptVars = {};
    this.data = null;
    this.dlgAnswer = this.dlgAskOpen = "no";
    this.doBlock = this.doYield = this.isDirty = false;
    this.currentBlock = this.scriptBlock.hasFlap ? this.scriptBlock : this.scriptBlock.next
};
Script.prototype.dirty = function () {
    this.isDirty = true
};
Script.prototype.yield = function () {
    this.doYield = true
};
Script.prototype.requestBlock = function (b) {
    this.doBlock = b
};
Script.prototype._spaces = function () {
    for (var b = "", c = 0; c < this.stack.length; c++) b = b + "    ";
    return b
};
Script.prototype.pushState = function (b, c, d, e) {
    this.stack.push({
        sprite: this.sprite,
        containerType: d,
        nextBlock: b,
        skipArgCompute: e,
        fnArgs: this.fnArgs,
        scriptVars: this.scriptVars,
        lib: this.lib,
        data: c
    })
};
Script.prototype.peekState = function () {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null
};
Script.prototype.popState = function () {
    if (this.stack.length > 0) {
        var b = this.stack.pop();
        this.sprite = b.sprite;
        this.currentBlock = b.nextBlock;
        this.skipArgCompute = b.skipArgCompute;
        this.fnArgs = b.fnArgs;
        this.scriptVars = b.scriptVars;
        this.lib = b.lib;
        this.data = b.data;
        return b
    }
    return null
};
Script.prototype.evaluateExpression = function (b) {
    if (b instanceof Label) {
        var c = b.func;
        if (c && this[c]) {
            var d = [];
            b._children && (d = b.getSockets());
            this.blockName = b.name;
            var e = this.currentBlock;
            this.currentBlock = b;
            d = this[c](d);
            this.currentBlock = e;
            this.blockName = void 0;
            if (typeof d == "number" && (!isFinite(d) || isNaN(d))) {
                this.currentBlock = null;
                this.stack = [];
                console.log("Error with expression at " + c + (b.name ? ":" + b.name : ""));
                return
            }
            return d
        }
    } else {
        if (b instanceof LabelInput) {
            if (b._child != null) return this.evaluateExpression(b._child);
            if (b.type == "number") {
                d = parseFloat(b.label);
                if (typeof d == "number" && (!isFinite(d) || isNaN(d))) {
                    console.log("Error with numeric expression at " + this.currentBlock.func);
                    this.currentBlock = null;
                    this.stack = [];
                    return
                }
                return d
            }
            if (b.type == "boolean") return b.label == "true" || b.label == true;
            d = valueToNative(b.label);
            if (typeof d == "number" && (!isFinite(d) || isNaN(d))) {
                console.log("Error with string expression at " + this.currentBlock.func);
                this.currentBlock = null;
                this.stack = [];
                return
            }
            return d
        }
        return b
    }
    return 0
};
Script.prototype.pauseState = function () {
    if (window.WinCode && (window.WinCode._hilightStep && this.sprite.scripts == window.WinCode._scripts && this.currentBlock && this.currentBlock.func.indexOf("blockControlCall") != 0) && !this.currentBlock.getRoot().hidden)
        if (this._pauseEndTime)
            if (Date.now() > this._pauseEndTime) this._pauseEndTime = 0;
            else return true;
        else {
            if (this.currentBlock) {
                this.currentBlock.setCurrent();
                WinCode.draw()
            }
            this._pauseEndTime = Date.now() + Runtime.runPauseTimeout;
            return true
        }
    return false
};
Script.prototype.invokeStep = function () {
    var b = this.currentBlock;
    window.WinCode && window.WinCode._hilightStep && b.setCurrent();
    if (b) {
        var c;
        c = b instanceof Block ? b.label : b;
        var d = [];
        this.skipArgCompute || (d = c.getSockets());
        if ((b = b.func) && this[b]) {
            if (!this[b](d)) {
                this.skipArgCompute = false;
                this.data = null;
                if (this.currentBlock) this.currentBlock = this.currentBlock.next
            }
            if (!this.currentBlock) {
                do {
                    (d = this.popState()) && d.containerType == Script.TYPE_LOOP && this.yield();
                    if (d && d.containerType == Script.TYPE_FUNC && d.data) {
                        window.WinCode &&
                            !Runtime.hideRunOutline && d.data.setOutline(false);
                        this.data = null
                    }
                } while (d != null && this.currentBlock == null)
            }
            if (this.currentBlock) return true;
            this.running = false;
            if (window.WinCode && !Runtime.hideRunOutline) {
                this.scriptBlock.getRoot().setOutline(false);
                WinCode.draw()
            }
        } else {
            if (b.indexOf("Drone") > 0 || b.indexOf("Sphero") > 0 || b.indexOf("Hardware") > 0 || b.indexOf("Jumping") > 0 || b.indexOf("Hue") > 0) {
                Runtime.background.font = "normal 50px Arial,Helvetica,sans-serif";
                Runtime.background.fillColor = "#f00";
                Runtime.background.fontColor =
                    "#fff";
                _doBlockLooksSay(Runtime.background, "This project uses hardware blocks. You'll need to run this project on the Tynker app to have it control hardware.")
            }
            console.log("unknown block: " + b);
            this.yield();
            this.currentBlock = this.currentBlock.next
        }
    }
    return false
};
var Avatar = {
    animNames: "walk;run;jump;attack;defend;grab;throw;frustrated;gangnam;idle;talk;jump front;twist dance".split(";"),
    animations: {},
    partGroups: {
        arm: "armL armL1 handL handL1 forearmL forearmL1 armR handR forearmR handFistR handFistL".split(" "),
        fullWeapon: ["weapon", "cover"],
        fullHead: "neck head hat beard nose mouth1 mouth2 mouthClosed mouthSmall mouthteeth hair1 hair2 head_hair ear eyes eyesClosed".split(" "),
        hair: ["hair1", "hair2", "head_hair", "beard"],
        accesoryHat: ["hat"],
        accesoryWeapon: ["weapon",
            "cover"
        ],
        accesoryEye: ["propEyes"],
        fullEyes: ["eyes", "eyesClosed"],
        mouth: ["mouth1", "mouth2", "mouthClosed", "mouthSmall", "mouthteeth"],
        ears: ["ear"],
        expressionParts: ["eyes", "eyesClosed", "mouth1"],
        animationExpressions: ["mouth1_crying", "mouth1_angry", "eyes_crying", "eyes_angry"],
        fullNose: ["nose"],
        torso: ["chest", "cape"],
        legs: "hip thighR legR footR thighL legL footL footR2".split(" "),
        presets: "propEyes chest cape neck head hat beard nose mouth1 mouth2 mouthClosed mouthSmall mouthteeth hair1 hair2 head_hair ear cover eyes eyesClosed mouth1_crying mouth1_angry eyes_crying eyes_angry armL armL1 handL handL1 forearmL forearmL1 armR handR forearmR hip thighR legR footR thighL legL footL footR2 handFistR handFistL weapon".split(" ")
    },
    colorGroups: {
        arm: ["armL", "armL1", "armR"],
        forearm: ["forearmL", "forearmL1", "forearmR"],
        hand: ["handL", "handL1", "handR", "handFistR", "handFistL"],
        weapon: ["weapon", "cover"],
        hip: ["hip"],
        thigh: ["thighR", "thighL"],
        leg: ["legR", "legL"],
        foot: ["footR", "footL", "footR2"],
        torso: ["chest", "cape"],
        head: ["head"],
        hair: ["hair1", "hair2", "head_hair", "beard"],
        hat: ["hat"],
        mouth: ["mouth1", "mouth2", "mouthClosed", "mouthSmall", "mouthteeth"],
        nose: ["nose"],
        ear: ["ear"],
        eyes: ["eyes", "eyesClosed", "eyes_crying", "eyes_angry"],
        accesoryEye: ["propEyes"],
        skin: "chest neck head mouth1 nose ear armL armL1 handL handL1 forearmL forearmL1 armR handR forearmR hip thighR legR footR thighL legL footL footR2 handFistR handFistL".split(" ")
    },
    expressions: "angry bored crying disgusted envy goofy happy inlove laughing mischevious scheming shocked surprised".split(" "),
    availableCharacters: {
        boy: "hero cowboy pirate prince superhero shaman knight zombie wizard robot mummy alien athlete doctor fbiagent heavymetal martialartist soldier halorobot scientist chef businessman new_alien new_cop new_cowboy new_haloblue new_halored new_hero new_indi new_knight new_ninja new_pirate new_regular new_robot new_zombie new_wizard".split(" "),
        girl: "supergirl elf explorer huntress fairy princess witch shopper cowgirl businessgirl fbiagent chef doctor scientist athlete martialartist pirate teacher foodservice new_femfbiagent new_femhero new_femindi new_femmummy new_femninja new_fempirate new_femregular new_femvalkyrie".split(" "),
        littleBoy: "fireman police superhero pijama snow swimming athlete ninja scout chubby".split(" "),
        littleGirl: "normal swimming athlete ninja scout supergirl firegirl police pijama snow".split(" "),
        custom: []
    },
    exceptions: {
        expressions: {
            boy: "new_haloblue new_knight new_robot new_zombie new_ninja new_halored new_cowboy new_alien".split(" "),
            girl: ["new_femninja", "new_femmummy"],
            littleBoy: [],
            littleGirl: []
        },
        hair: {
            boy: ["alien", "mummy", "knight", "zombie", "robot"],
            girl: ["athlete", "chef", "doctor", "martialartist", "teacher"],
            littleBoy: [],
            littleGirl: ["firegirl", "police", "pijama", "snow"]
        },
        accesoryHat: {
            boy: "hero superhero shaman knight zombie robot mummy alien athlete doctor fbiagent heavymetal martialartist halorobot businessman".split(" "),
            girl: "athlete businessgirl doctor elf fairy fbiagent martialartist pirate scientist shopper supergirl teacher".split(" "),
            littleBoy: "pijama superhero athlete ninja scout chubby".split(" "),
            littleGirl: "normal athlete ninja scout supergirl pijama".split(" ")
        },
        fullEyes: {
            boy: "athlete businessman chef doctor fbiagent halorobot heavymetal knight martialartist robot scientist soldier".split(" "),
            girl: "businessgirl chef fbiagent foodservice martialartist pirate scientist teacher".split(" "),
            littleBoy: [],
            littleGirl: []
        },
        fullNose: {
            boy: "alien athlete businessman chef doctor fbiagent halorobot heavymetal knight martialartist mummy prince robot scientist soldier".split(" "),
            girl: [],
            littleBoy: [],
            littleGirl: []
        },
        mouth: {
            boy: "athlete businessman chef doctor fbiagent heavymetal halorobot knight martialartist prince robot scientist soldier".split(" "),
            girl: [],
            littleBoy: [],
            littleGirl: []
        },
        accesoryWeapon: {
            boy: "prince superhero zombie robot mummy alien athlete doctor fbiagent heavymetal martialartist soldier halorobot scientist chef businessman".split(" "),
            girl: "supergirl explorer huntress fairy princess cowgirl businessgirl fbiagent chef doctor scientist".split(" "),
            littleBoy: "fireman police superhero pijama snow swimming athlete ninja scout chubby".split(" "),
            littleGirl: "normal swimming athlete ninja scout supergirl firegirl police pijama snow".split(" ")
        },
        accesoryEye: {
            boy: "hero cowboy pirate prince superhero shaman knight zombie wizard robot mummy alien athlete doctor fbiagent heavymetal martialartist soldier halorobot scientist chef businessman".split(" "),
            girl: "supergirl elf explorer huntress fairy princess witch shopper cowgirl businessgirl fbiagent chef doctor scientist".split(" "),
            littleBoy: ["snow", "fireman", "pijama", "police", "superhero"],
            littleGirl: ["normal",
                "swimming", "athlete", "ninja", "scout"
            ]
        }
    },
    customParts: {
        accesoryHat: {
            boy: [],
            girl: [],
            littleBoy: [],
            littleGirl: []
        },
        accesoryWeapon: {
            boy: [],
            girl: [],
            littleBoy: [],
            littleGirl: []
        },
        accesoryEye: {
            boy: [],
            girl: [],
            littleBoy: [],
            littleGirl: []
        }
    },
    selectedGroup: "presets",
    selectedPreset: "supergirl",
    selectedColorGroup: "",
    selectedGender: "boy",
    selectedCarousel: "boy",
    selectedExpression: "",
    selectedColor: null,
    defaultBoyPreset: "hero",
    defaultGirlPreset: "supergirl",
    defaultLittleBoyPreset: "snow",
    defaultLittleGirlPreset: "normal",
    defaultCustomPreset: null,
    defaultExpression: "happy",
    currentEdition: "body",
    builtCharacter: {
        name: "",
        gender: "boy",
        parts: {
            chest: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            cape: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            neck: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            head: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            nose: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            beard: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            hat: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            mouth1: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            mouth2: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            mouthClosed: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            mouthSmall: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            mouthteeth: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            hair1: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            hair2: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            head_hair: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            ear: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            cover: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            eyes: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            eyesClosed: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            propEyes: {
                baseImg: "ide/avatar/parts/boy/hero/1_propEyes.png",
                part: "hero",
                color: "none"
            },
            mouth1_crying: {
                baseImg: "ide/avatar/parts/boy/expressions/1_mouth1_crying.png",
                part: "hero",
                color: "none"
            },
            mouth1_angry: {
                baseImg: "ide/avatar/parts/boy/expressions/1_mouth1_angry.png",
                part: "hero",
                color: "none"
            },
            eyes_crying: {
                baseImg: "ide/avatar/parts/boy/expressions/1_eyes_crying.png",
                part: "hero",
                color: "none"
            },
            eyes_angry: {
                baseImg: "ide/avatar/parts/boy/expressions/1_eyes_angry.png",
                part: "hero",
                color: "none"
            },
            armL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            armL1: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            handL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            handL1: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            forearmL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            forearmL1: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            armR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            handR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            forearmR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            hip: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            thighR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            legR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            footR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            thighL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            legL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            footL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            footR2: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            handFistR: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            handFistL: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            },
            weapon: {
                baseImg: "hero",
                part: "hero",
                color: "none"
            }
        }
    },
    toGenerate: [],
    generatedCounter: 0,
    imgArray: [],
    cacheImgs: {},
    grayscaledImgs: {},
    imageData: {},
    renderOrder: [],
    downloaded: 0,
    alphaDownloaded: 0,
    cacheDownloaded: 0,
    cacheAlphaDownloaded: 0,
    grayscalesLoaded: 0,
    totalFrames: 9,
    xOffset: 15,
    yOffset: 50,
    generatedImages: [],
    canvas: function () {
        var b = document.createElement("canvas");
        b.width = 400;
        b.height = 400;
        return b
    }(),
    currentId: null,
    _frames: [],
    currentCharacterId: null,
    alphaDownloadedUnchangedCount: 0,
    previousCacheAlphaDownloaded: 0,
    numUserCharacters: 0,
    propertyChangedCallbacks: $.Callbacks(),
    customCharacterList: [],
    init: function (b) {
        Avatar.currentCharacterId = null;
        Avatar.loadCustomCharacters(b)
    },
    initWhenReady: function () {
        Avatar.generatePartList();
        $("#win-avatar iframe").load(function () {
            Avatar._cacheImgs()
        })
    },
    _cacheImgs: function () {
        var b = $("#win-avatar iframe").contents().find("svg image");
        $.each(b, function (b, d) {
            var e = {};
            e.id = $(d).attr("id");
            e.width = $(d).attr("width");
            e.height = $(d).attr("height");
            e.href = $(d).attr("xlink:href");
            e.alphaHref = $(d).attr("xlink:href").replace(/1_(.*)/, "alpha_prop_" + e.id + ".png");
            Avatar.addToCache(e)
        })
    },
    setCanvasSize: function (b, c) {
        Avatar.canvas.width = b;
        Avatar.canvas.height = c
    },
    resetNonCache: function () {
        Avatar.imageData = {};
        Avatar.renderOrder = [];
        Avatar.downloaded = 0;
        Avatar.alphaDownloaded = 0;
        Avatar.clearCanvas()
    },
    clearCache: function () {
        Avatar.cacheImgs = {};
        Avatar.cacheDownloaded = 0
    },
    clearCanvas: function () {
        Avatar.canvas.width = Avatar.canvas.width
    },
    getContext: function () {
        return Avatar.canvas.getContext("2d")
    },
    getCurrentImg: function () {
        return Avatar.canvas.toDataURL("image/png")
    },
    addPropertyChangedCallback: function (b) {
        Avatar.propertyChangedCallbacks.add(b)
    },
    removePropertyChangedCallback: function (b) {
        Avatar.propertyChangedCallbacks.remove(b)
    },
    getNumUserCharacters: function () {
        return Avatar.numUserCharacters
    },
    setNumUserCharacters: function (b) {
        Avatar.numUserCharacters = b;
        Avatar.propertyChangedCallbacks.fire("numUserCharacters")
    },
    getSelectedGender: function () {
        return Avatar.selectedGender
    },
    setSelectedGender: function (b) {
        if (b != Avatar.selectedGender) {
            Avatar.selectedGender = b;
            Avatar.propertyChangedCallbacks.fire("selectedGender")
        }
    },
    getSelectedCarousel: function () {
        return Avatar.selectedCarousel
    },
    setSelectedCarousel: function (b) {
        if (b != Avatar.selectedCarousel) {
            Avatar.selectedCarousel = b;
            Avatar.propertyChangedCallbacks.fire("selectedCarousel")
        }
    },
    getSelectedColorGroup: function () {
        return Avatar.selectedColorGroup
    },
    setSelectedColorGroup: function (b) {
        if (b != Avatar.selectedColorGroup) {
            Avatar.selectedColorGroup = b;
            Avatar.propertyChangedCallbacks.fire("selectedColorGroup")
        }
    },
    addImage: function (b, c, d) {
        b.loaded = false;
        b.img = new Image;
        b.img.addEventListener("load", function () {
            Avatar.loadedImg();
            d && Avatar.downloaded ==
                c && d()
        });
        b.img.src = b.href;
        b.img.id = b.id;
        b.useCache = false;
        b.alphaLoaded = false;
        b.alpha = new Image;
        b.alpha.addEventListener("load", Avatar.loadedAlphaImg);
        if (b.alphaHref) b.alpha.src = b.alphaHref;
        Avatar.imageData[b.id] = b;
        Avatar.renderOrder.push(b.id)
    },
    addToCache: function (b, c, d) {
        b.loaded = false;
        b.img = new Image;
        b.img.addEventListener("load", function () {
            Avatar.loadedCacheImg.call(b);
            d && Avatar.cacheDownloaded == c && d()
        });
        b.img.src = b.href;
        b.img.id = b.id;
        b.alphaLoaded = false;
        b.alpha = new Image;
        b.alpha.addEventListener("load",
            Avatar.loadedCacheAlphaImg.bind(b));
        if (b.alphaHref) b.alpha.src = b.alphaHref;
        Avatar.cacheImgs[b.id] = b;
        Avatar.renderOrder.push(b.id)
    },
    editCacheImg: function (b) {
        if (Avatar.cacheImgs[b.id] && Avatar.cacheImgs[b.id].href != b.href) {
            Avatar.cacheImgs[b.id].href = b.href;
            Avatar.cacheImgs[b.id].loaded = false;
            Avatar.cacheImgs[b.id].alphaLoaded = false;
            if (Avatar.grayscaledImgs[b.id]) Avatar.grayscaledImgs[b.id].loaded = false;
            if (Avatar.cacheDownloaded > 0) Avatar.cacheDownloaded = Avatar.cacheDownloaded - 1;
            if (Avatar.cacheAlphaDownloaded >
                0) Avatar.cacheAlphaDownloaded = Avatar.cacheAlphaDownloaded - 1;
            if (Avatar.grayscalesLoaded > 0) Avatar.grayscalesLoaded = Avatar.grayscalesLoaded - 1;
            var c = Avatar.cacheImgs[b.id].img.src,
                d = Avatar.cacheImgs[b.id].alpha.src;
            Avatar.cacheImgs[b.id].img.src = b.href;
            var e = Avatar.getAlphaURL(b.id, b.href);
            Avatar.cacheImgs[b.id].alpha.src = e;
            c.indexOf(b.href) > -1 && Avatar.loadedCacheImg.call(b);
            d.indexOf(e) > -1 && Avatar.loadedCacheAlphaImg.call(b)
        }
    },
    loadedImg: function () {
        Avatar.downloaded = Avatar.downloaded + 1
    },
    loadedAlphaImg: function () {
        Avatar.alphaDownloaded =
            Avatar.alphaDownloaded + 1
    },
    loadedCacheImg: function () {
        Avatar.cacheDownloaded = Avatar.cacheDownloaded + 1;
        Avatar.cacheImgs[this.id].loaded = true
    },
    loadedCacheAlphaImg: function () {
        Avatar.cacheImgs[this.id].alphaLoaded = true;
        Avatar.cacheAlphaDownloaded = Avatar.cacheAlphaDownloaded + 1
    },
    loadedGrayscaleImg: function () {
        Avatar.grayscaledImgs[this.id].loaded = true;
        Avatar.grayscalesLoaded = Avatar.grayscalesLoaded + 1
    },
    isDownloadDone: function () {
        return Avatar.renderOrder.length == Avatar.downloaded
    },
    isCacheDownloaded: function () {
        var b =
            true,
            c;
        for (c in Avatar.cacheImgs) {
            b = Avatar.cacheImgs[c].loaded && b;
            if (!b) break
        }
        return b
    },
    isAlphaDownloaded: function (b) {
        if (b) {
            var b = true,
                c;
            for (c in Avatar.cacheImgs) {
                b = Avatar.cacheImgs[c].alphaLoaded && b;
                if (!b) break
            }
            return b
        }
        return Avatar.renderOrder.length == Avatar.alphaDownloaded
    },
    isGrayscaleLoaded: function () {
        var b = true,
            c;
        for (c in Avatar.grayscaledImgs) {
            b = Avatar.grayscaledImgs[c].loaded && b;
            if (!b) break
        }
        return b
    },
    applyGrayscaleFilter: function (b, c, d, e) {
        if ((c ? Avatar.isCacheDownloaded() : Avatar.isDownloadDone()) ||
            d) {
            var f = c ? Avatar.cacheImgs[b] : Avatar.imageData[b],
                g = document.createElement("canvas");
            g.width = f.img.width;
            g.height = f.img.height;
            var h = g.getContext("2d");
            h.drawImage(f.img, 0, 0);
            for (var f = h.getImageData(0, 0, g.width, g.height), j = 0; j < f.data.length; j = j + 4) f.data[j + 3] > 0 && (f.data[j] = f.data[j + 1] = f.data[j + 2] = 0.2126 * f.data[j] + 0.7152 * f.data[j + 1] + 0.0722 * f.data[j + 2]);
            h.putImageData(f, 0, 0);
            if (d) return g;
            h = document.createElement("img");
            h.width = g.width;
            h.height = g.height;
            f = {
                id: b,
                img: h,
                loaded: false
            };
            Avatar.grayscaledImgs[b] =
                f;
            h.addEventListener("load", Avatar.loadedGrayscaleImg.bind(f));
            h.src = g.toDataURL("image/png");
            e && e()
        } else setTimeout(function () {
            Avatar.applyGrayscaleFilter(b, c, d, e)
        }, 30)
    },
    applyTint: function (b, c, d, e) {
        if (this.isAlphaDownloaded(d) && this.isGrayscaleLoaded() || e) {
            if (Avatar.grayscaledImgs[b].img != void 0) {
                var f = d ? Avatar.grayscaledImgs[b].img : Avatar.applyGrayscaleFilter(b, d, true),
                    g = document.createElement("canvas");
                g.width = f.width;
                g.height = f.height;
                var h = g.getContext("2d");
                h.globalAlpha = 0.6;
                h.fillStyle = c;
                h.fillRect(0,
                    0, g.width, g.height);
                h.globalCompositeOperation = "destination-atop";
                h.globalAlpha = 1;
                h.drawImage(f, 0, 0);
                h.globalCompositeOperation = "destination-atop";
                f = d ? Avatar.cacheImgs[b].alpha : Avatar.imageData[b].alpha;
                if (f.width == 0) {
                    h.globalAlpha = 0;
                    h.fillRect(0, 0, g.width, g.height);
                    h.globalAlpha = 1
                } else h.drawImage(f, 0, 0);
                h.globalCompositeOperation = "destination-atop";
                f = d ? Avatar.cacheImgs[b].img : Avatar.imageData[b].img;
                h.drawImage(f, 0, 0);
                if (e) return g;
                g = g.toDataURL("image/png");
                $("#win-avatar iframe").contents().find("#" +
                    b).attr("xlink:href", g)
            }
        } else {
            var j = this;
            setTimeout(function () {
                j.applyTint(b, c, d, e)
            }, 30)
        }
    },
    imgFromJson: function (b, c) {
        Avatar.resetNonCache();
        for (var d = false, e = $("#win-avatar iframe").contents().find("svg image"), f = 0; f < e.length; f++) {
            var g = {};
            g.id = $(e[f]).attr("id");
            g.width = $(e[f]).attr("width");
            g.height = $(e[f]).attr("height");
            if (b.parts[g.id].baseImg.indexOf("ide/avatar/parts/") > -1) {
                g.href = b.parts[g.id].baseImg;
                if (g.href.indexOf("none.png") > -1) g.alphaHref = b.parts[g.id].baseImg;
                else {
                    var h = Avatar.getAlphaURL(g.id,
                        b.parts[g.id].baseImg);
                    g.alphaHref = h
                }
            } else {
                g.href = "ide/avatar/parts/" + b.gender + "/" + b.parts[g.id].baseImg + "/1_" + g.id + ".png";
                g.alphaHref = "ide/avatar/parts/" + b.gender + "/" + b.parts[g.id].baseImg + "/alpha_prop_" + g.id + ".png"
            }
            g.color = b.parts[g.id].color;
            Avatar.addImage(g);
            !d && b.parts[g.id].color != "none" && (d = true)
        }
        Avatar.setCanvasSize(400, 400);
        Avatar.renderImg(false, d, c)
    },
    renderImg: function (b, c, d) {
        var e = b ? Avatar.isCacheDownloaded() : Avatar.isDownloadDone();
        c && (e = e && Avatar.isAlphaDownloaded(b));
        if (e) {
            Avatar.clearCanvas();
            for (var e = Avatar.getContext(), f = 0; f < Avatar.renderOrder.length; f++) {
                var g = $("#win-avatar iframe").contents().find("svg #" + Avatar.renderOrder[f]),
                    h = g.attr("transform"),
                    j = b ? Avatar.cacheImgs[Avatar.renderOrder[f]] : Avatar.imageData[Avatar.renderOrder[f]],
                    k = g.attr("x"),
                    g = g.attr("y"),
                    h = h.substring(7, h.length - 1);
                e.save();
                e.scale(Avatar.canvas.width / 400, Avatar.canvas.height / 400);
                Avatar.applySVGRotation(h.split(" "));
                e.translate(k, g);
                Avatar.keepAspectRatio(j.width, j.img.width, j.height, j.img.height);
                if (c && j.color &&
                    j.color != "none") {
                    j = Avatar.applyTint(Avatar.renderOrder[f], j.color, b, true);
                    e.drawImage(j, 0, 0)
                } else e.drawImage(j.img, 0, 0);
                e.restore()
            }
            d && d(Avatar.canvas.toDataURL())
        } else setTimeout(function () {
            Avatar.renderImg(b, c, d)
        }, 30)
    },
    renderSingleFrame: function (b, c, d) {
        Avatar.clearCanvas();
        for (var b = c[b === void 0 ? 0 : b], c = Avatar.getContext(), e = 0; e < Avatar.renderOrder.length; e++) {
            var f = d ? Avatar.cacheImgs[Avatar.renderOrder[e]] : Avatar.imageData[Avatar.renderOrder[e]],
                g = $.grep(b, function (b) {
                    return b.par == f.id
                })[0];
            c.save();
            c.scale(Avatar.canvas.width / 400, Avatar.canvas.height / 400);
            c.scale(0.85, 0.85);
            c.translate(Avatar.xOffset, Avatar.yOffset);
            Avatar.applySVGRotation(g.rot.split(" "));
            c.translate(g.x, g.y);
            Avatar.keepAspectRatio(f.width, f.img.width, f.height, f.img.height);
            if (f.color && f.color != "none") {
                g = Avatar.applyTint(Avatar.renderOrder[e], f.color, d, true);
                c.drawImage(g, 0, 0)
            } else c.drawImage(f.img, 0, 0);
            c.restore()
        }
    },
    applySVGRotation: function (b) {
        var c = Avatar.getContext(),
            d = Avatar.degToRad(b[0]),
            e = b[1],
            b = b[2];
        c.translate(e,
            b);
        c.rotate(d);
        c.translate(-e, -b)
    },
    keepAspectRatio: function (b, c, d, e) {
        var f = Avatar.getContext(),
            g = b / c,
            h = d / e,
            j = Math.min(g, h);
        Math.max(g, h);
        e = e * j;
        j == h && f.translate(b / 2 - c * j / 2, 0);
        j == g && f.translate(0, d / 2 - e / 2);
        f.scale(j, j);
        f.translate(0, 0)
    },
    degToRad: function (b) {
        return b * (Math.PI / 180)
    },
    SVGToCanvas: function (b) {
        var c = $("#win-avatar iframe").contents().find("svg image");
        Avatar.resetNonCache();
        $.each(c, function (d, e) {
            var f = $(e),
                g = {};
            g.id = f.attr("id");
            g.width = f.attr("width");
            g.height = f.attr("height");
            g.href = f.attr("xlink:href");
            f = g.href.indexOf("data:image") > -1 ? Avatar.builtCharacter.parts[g.id].baseImg : g.href;
            g.alphaHref = Avatar.getAlphaURL(g.id, f);
            try {
                g.color = Avatar.builtCharacter.parts[g.id].color
            } catch (h) {
                console.log(h, " - setting data.color for data.id: ", g.id)
            }
            Avatar.addImage(g, c.length, b)
        })
    },
    queueFrame: function (b, c, d, e, f) {
        var g = Avatar._frames.length == 0;
        Avatar._frames.push({
            id: b,
            animationName: c,
            frame: d,
            totalFrames: e,
            callback: f
        });
        if (g) {
            if (window.IDE) IDE._ignoreUpdates = true;
            Avatar.dequeueFrame()
        }
    },
    dequeueFrame: function () {
        if (Avatar._frames.length >
            0) {
            var b = Avatar._frames[0];
            Avatar.generateFrame(b.id, b.animationName, b.frame, b.totalFrames, function (c) {
                b.callback && b.callback(c);
                Avatar._frames.shift();
                Avatar.dequeueFrame()
            })
        } else if (window.IDE) {
            IDE._ignoreUpdates = false;
            Sprites._broadcastSpriteListeners("updateAll", IDE.editingActor ? IDE.editingActor : Runtime.background)
        }
    },
    generateFrame: function (b, c, d, e, f) {
        Avatar.loadCharacter(b, function () {
            Avatar.downloadAnimation(c, function (b) {
                var c = parseInt(d * b.length / e);
                Avatar.setCanvasSize(400, 400);
                Avatar.renderSingleFrame(c,
                    b);
                if (f) {
                    var j = new Image;
                    j.onload = function () {
                        f(j)
                    };
                    j.src = Avatar.canvas.toDataURL("image/png")
                }
            })
        })
    },
    changePartByGroup: function (b) {
        var c = Avatar.partGroups[Avatar.selectedGroup],
            d;
        Avatar.builtCharacter.name = firstLetterToUpper(Avatar.selectedPreset);
        Avatar.builtCharacter.gender = Avatar.selectedGender;
        for (var e = 0; e < c.length; e++) {
            if (b.indexOf("custom") > -1) d = "ide/avatar/parts/" + Avatar.selectedGender + "/extras/" + Avatar.selectedGroup + "/1_" + c[e] + "_" + b + ".png";
            else if (b.indexOf("none") > -1) d = "ide/avatar/parts/standard/none.png";
            else if ($.inArray(c[e], Avatar.partGroups.animationExpressions) > -1)
                if ($.inArray(b, Avatar.exceptions.expressions[Avatar.selectedGender]) > -1) {
                    d = c[e].lastIndexOf("_");
                    d = c[e].substring(0, d);
                    d = "ide/avatar/parts/" + Avatar.selectedGender + "/" + b + "/1_" + d + ".png"
                } else d = "ide/avatar/parts/" + Avatar.selectedGender + "/expressions/1_" + c[e] + ".png";
            else d = "ide/avatar/parts/" + Avatar.selectedGender + "/" + b + "/1_" + c[e] + ".png";
            $("#win-avatar iframe").contents().find("#" + c[e]).attr("xlink:href", d);
            Avatar.builtCharacter.parts[c[e]].baseImg =
                d;
            Avatar.builtCharacter.parts[c[e]].part = b;
            Avatar.builtCharacter.parts[c[e]].color = "none";
            Avatar.editCacheImg({
                href: d,
                id: c[e]
            })
        }
    },
    changeExpression: function (b) {
        var c;
        firstLetterToUpper(Avatar.selectedGender);
        for (var d = ["eyes", "eyesClosed", "mouth1"], e = 0; e < d.length; e++) {
            c = "ide/avatar/parts/" + Avatar.selectedGender + "/expressions/1_" + d[e] + "_" + b + ".png";
            $("#win-avatar iframe").contents().find("#" + d[e]).attr("xlink:href", c);
            Avatar.builtCharacter.parts[d[e]].baseImg = c;
            Avatar.builtCharacter.parts[d[e]].color =
                "none";
            Avatar.editCacheImg({
                href: c,
                id: d[e]
            })
        }
    },
    changePartColorByGroup: function (b) {
        for (var c = Avatar.colorGroups[Avatar.selectedColorGroup], d = 0; d < c.length; d++) {
            Avatar.applyTint(c[d], b, true, false);
            Avatar.builtCharacter.parts[c[d]].color = b
        }
    },
    makefromJson: function () {
        for (var b = $("#win-avatar iframe").contents().find("image"), c, d, e = 0; e < b.length; e++) {
            d = $(b[e]).attr("id");
            c = Avatar.builtCharacter.parts[d].baseImg.indexOf("ide/avatar/parts/") > -1 ? Avatar.builtCharacter.parts[d].baseImg : "ide/avatar/parts/" + Avatar.builtCharacter.gender +
                "/" + Avatar.builtCharacter.parts[d].baseImg + "/1_" + d + ".png";
            Avatar.editCacheImg({
                href: c,
                id: d
            });
            $(b[e]).attr("xlink:href", c);
            Avatar.builtCharacter.parts[d].color && Avatar.builtCharacter.parts[d].color != "none" && Avatar.applyTint(d, Avatar.builtCharacter.parts[d].color, true, false)
        }
    },
    generatePartList: function () {
        var b = "Select " + firstLetterToUpper(Avatar.selectedGroup.replace(/(full|accesory)/, ""));
        $("#win-avatar .sidebar .title").html(b);
        b = $("#win-avatar .sidebar .menu");
        b.empty();
        var c;
        c = Avatar.selectedGroup ==
            "presets" ? "fullHead" : Avatar.selectedGroup;
        for (var d = Avatar.exceptions[Avatar.selectedGroup] ? true : false, e = false, f = Avatar.availableCharacters[Avatar.selectedGender], g = 0; g < f.length; g++) {
            e = d ? $.inArray(f[g], Avatar.exceptions[Avatar.selectedGroup][Avatar.selectedGender]) > -1 : false;
            if (!e) {
                var e = "url(ide/avatar/parts/" + Avatar.selectedGender + "/" + f[g] + "/1_" + c + ".png)",
                    h = $("<div>");
                h.attr("id", f[g]).addClass("item pointer");
                h.append($("<div>").addClass("external-border"));
                h.find(".external-border").append($("<div>").addClass("part-img").css("background-image",
                    e));
                b.append(h)
            }
        }
        if (Avatar.customParts[Avatar.selectedGroup]) {
            c = Avatar.customParts[Avatar.selectedGroup][Avatar.selectedGender];
            for (g = 0; g < c.length; g++) {
                e = "url(ide/avatar/parts/" + Avatar.selectedGender + "/extras/" + Avatar.selectedGroup + "/1_" + c[g] + "Preview.png)";
                h = $("<div>");
                h.attr("id", c[g]).addClass("item pointer");
                h.append($("<div>").addClass("external-border"));
                h.find(".external-border").append($("<div>").addClass("part-img").css("background-image", e));
                b.append(h)
            }
        }
        g = $("<div>");
        g.attr("id", "nonePart").addClass("item pointer");
        g.append($("<div>").addClass("external-border"));
        g.find(".external-border").append($("<div>").addClass("part-img").css("background-image", "url(ide/avatar/parts/standard/nonePreview.png)"));
        b.append(g);
        b.scrollTop(0)
    },
    generateExpressionList: function () {
        $("#win-avatar .sidebar .title").html("Expressions");
        var b = $("#win-avatar .sidebar .menu");
        b.empty();
        firstLetterToUpper(Avatar.selectedGender);
        for (var c = Avatar.expressions, d = 0; d < c.length; d++) {
            var e = "url(ide/avatar/parts/" + Avatar.selectedGender + "/expressions/1_eyes_" +
                c[d] + ".png)",
                f = $("<div>");
            f.attr("id", c[d]).addClass("item pointer");
            f.append($("<div>").addClass("external-border"));
            f.find(".external-border").append($("<div>").addClass("part-img").css("background-image", e));
            b.append(f)
        }
        b.scrollTop(0)
    },
    generatePresetOptions: function (b, c) {
        var d, e, f = "right",
            g = Avatar.availableCharacters[Avatar.selectedCarousel],
            h = $("#win-avatar .carousel-content");
        h.empty();
        for (var j = 0; j < g.length; j++) {
            if (Avatar.selectedCarousel == "custom") {
                var k = Avatar.customCharacterList[j];
                j == 0 &&
                    Avatar.setSelectedGender(k.data.gender);
                if (!b || Avatar.customCharacterList[j].id == b) {
                    var l = 'style="background-image:url(/api/characterpreview?i=' + k.id + "&r=" + Math.random() + ')"';
                    d = !b && j == 0 || k.id == b ? " selected" : "";
                    e = " " + k.data.gender;
                    d = $('<div id="' + k.id + '" class="preset-option pointer left server-loaded' + d + e + '" ' + l + '><a href="#">X</a></div>');
                    d.find("a").click(WinAvatar.removeCharacterEl)
                }
            } else {
                d = j == 0 ? " selected" : "";
                e = " " + Avatar.selectedGender + " " + g[j];
                k = g[j] + "Preset";
                d = "preset-option pointer left" +
                    d + e;
                d = $("<div>").attr("id", k).addClass(d)
            }
            if (j == 0 || f == "right") {
                h.append(d);
                j != 0 && (f = "left")
            } else {
                h.prepend(d);
                f = "right"
            }
        }
        f = $("#win-avatar .preset-option").outerWidth(true);
        h.width(f * g.length + 150);
        g = $("#win-avatar .preset-option.selected");
        g = -g.position().left + h.parent().width() / 2 - g.width() / 2 - 43;
        h.css("left", g + "px");
        c && c()
    },
    resetToPreset: function () {
        var b = Avatar.selectedGroup;
        Avatar.selectedGroup = Avatar.currentEdition == "body" ? "presets" : "fullHead";
        if (Avatar.selectedCarousel == "custom") Avatar.loadCharacter(Avatar.selectedPreset,
            function () {
                Avatar.selectedGroup = b
            });
        else {
            Avatar.changePartByGroup(Avatar.selectedPreset);
            Avatar.selectedGroup = b
        }
    },
    changeCarousel: function (b) {
        Avatar.setSelectedCarousel(b);
        b != "custom" && Avatar.setSelectedGender(b);
        Avatar.builtCharacter.gender = b;
        if (b == "boy") Avatar.selectedPreset = Avatar.defaultBoyPreset;
        else if (b == "girl") Avatar.selectedPreset = Avatar.defaultGirlPreset;
        else if (b == "littleBoy") Avatar.selectedPreset = Avatar.defaultLittleBoyPreset;
        else if (b == "littleGirl") Avatar.selectedPreset = Avatar.defaultLittleGirlPreset;
        else if (b == "custom") {
            if (Avatar.customCharacterList && Avatar.customCharacterList.length > 0) {
                Avatar.selectedPreset = Avatar.defaultCustomPreset;
                Avatar.loadCharacter(Avatar.selectedPreset, function () {
                    Avatar.selectedGroup = "presets";
                    Avatar.generatePresetOptions()
                }, true)
            }
            return
        }
        Avatar.selectedGroup = "presets";
        Avatar.changePartByGroup(Avatar.selectedPreset);
        Avatar.generatePresetOptions()
    },
    changePreset: function (b) {
        Avatar.currentCharacterId = b;
        Avatar.selectedPreset = b;
        Avatar.selectedGroup = "presets";
        Avatar.changePartByGroup(Avatar.selectedPreset)
    },
    downloadAnimation: function (b, c) {
        Avatar.animations[b] ? c && c(Avatar.animations[b]) : $.ajax({
            url: "ide/avatar/animations/" + b + ".json",
            type: "GET",
            dataType: "json",
            success: function (d) {
                Avatar.animations[b] = d;
                c != void 0 && c(Avatar.animations[b])
            },
            error: function (b, c, f) {
                console.log("failure");
                console.log(b);
                console.log(c);
                console.log(f)
            }
        })
    },
    saveCharacter: function (b, c, d) {
        Avatar.imgFromJson(Avatar.builtCharacter, function (e) {
            Avatar.builtCharacter.name = c;
            $.ajax({
                url: "/api/charactersave",
                type: "POST",
                data: {
                    i: b,
                    d: JSON.stringify(Avatar.builtCharacter),
                    p: e
                },
                success: function (b) {
                    d && d(b)
                }
            })
        })
    },
    loadCharacter: function (b, c, d) {
        if (Avatar.currentCharacterId != b || d != null && d) {
            Avatar.currentCharacterId = b;
            var d = false,
                e = Avatar.availableCharacters.boy.indexOf(b);
            if (e >= 0) {
                Avatar.changeCarousel("boy");
                Avatar.changePreset(b);
                c && Avatar.SVGToCanvas(c);
                d = true
            }
            if (!d) {
                e = Avatar.availableCharacters.girl.indexOf(b);
                if (e >= 0) {
                    Avatar.changeCarousel("girl");
                    Avatar.changePreset(b);
                    c && Avatar.SVGToCanvas(c);
                    d = true
                }
            }
            if (!d) {
                e = Avatar.availableCharacters.littleBoy.indexOf(b);
                if (e >=
                    0) {
                    Avatar.changeCarousel("littleBoy");
                    Avatar.changePreset(b);
                    c && Avatar.SVGToCanvas(c);
                    d = true
                }
            }
            if (!d) {
                e = Avatar.availableCharacters.littleGirl.indexOf(b);
                if (e >= 0) {
                    Avatar.changeCarousel("littleGirl");
                    Avatar.changePreset(b);
                    c && Avatar.SVGToCanvas(c);
                    d = true
                }
            }
            d || $.ajax({
                url: "/api/character",
                type: "POST",
                data: {
                    i: b
                },
                success: function (d) {
                    if (d) {
                        Avatar.builtCharacter = JSON.parse(d);
                        Avatar.currentCharacterId = b;
                        Avatar.selectedPreset = Avatar.builtCharacter.name;
                        Avatar.selectedGroup = "presets";
                        Avatar.setSelectedGender(Avatar.builtCharacter.gender);
                        if (Avatar.builtCharacter.parts) {
                            if (!Avatar.builtCharacter.parts.propEyes) {
                                d = Avatar.builtCharacter;
                                Avatar.builtCharacter = {
                                    name: d.name,
                                    gender: d.gender,
                                    parts: {
                                        chest: {
                                            baseImg: d.parts.chest.baseImg,
                                            color: "none"
                                        },
                                        cape: {
                                            baseImg: d.parts.cape.baseImg,
                                            color: "none"
                                        },
                                        neck: {
                                            baseImg: d.parts.neck.baseImg,
                                            color: "none"
                                        },
                                        head: {
                                            baseImg: d.parts.head.baseImg,
                                            color: "none"
                                        },
                                        nose: {
                                            baseImg: d.parts.nose.baseImg,
                                            color: "none"
                                        },
                                        beard: {
                                            baseImg: d.parts.head.baseImg,
                                            color: "none"
                                        },
                                        hat: {
                                            baseImg: d.parts.head.baseImg,
                                            color: "none"
                                        },
                                        mouth1: {
                                            baseImg: d.parts.mouth1.baseImg,
                                            color: "none"
                                        },
                                        mouth2: {
                                            baseImg: d.parts.mouth2.baseImg,
                                            color: "none"
                                        },
                                        mouthClosed: {
                                            baseImg: d.parts.mouthClosed.baseImg,
                                            color: "none"
                                        },
                                        mouthSmall: {
                                            baseImg: d.parts.mouthSmall.baseImg,
                                            color: "none"
                                        },
                                        mouthteeth: {
                                            baseImg: d.parts.mouthteeth.baseImg,
                                            color: "none"
                                        },
                                        hair1: {
                                            baseImg: d.parts.hair1.baseImg,
                                            color: "none"
                                        },
                                        hair2: {
                                            baseImg: d.parts.hair2.baseImg,
                                            color: "none"
                                        },
                                        head_hair: {
                                            baseImg: d.parts.head_hair.baseImg,
                                            color: "none"
                                        },
                                        ear: {
                                            baseImg: d.parts.ear.baseImg,
                                            color: "none"
                                        },
                                        cover: {
                                            baseImg: d.parts.cover.baseImg,
                                            color: "none"
                                        },
                                        eyes: {
                                            baseImg: d.parts.eyebrowL.baseImg,
                                            color: "none"
                                        },
                                        eyesClosed: {
                                            baseImg: d.parts.eyebrowL.baseImg,
                                            color: "none"
                                        },
                                        propEyes: {
                                            baseImg: "ide/avatar/parts/standard/none.png",
                                            color: "none"
                                        },
                                        mouth1_crying: {
                                            baseImg: "ide/avatar/parts/" + d.gender + "/expressions/1_mouth1_crying.png",
                                            color: "none"
                                        },
                                        mouth1_angry: {
                                            baseImg: "ide/avatar/parts/" + d.gender + "/expressions/1_mouth1_angry.png",
                                            color: "none"
                                        },
                                        eyes_crying: {
                                            baseImg: "ide/avatar/parts/" + d.gender + "/expressions/1_eyes_crying.png",
                                            color: "none"
                                        },
                                        eyes_angry: {
                                            baseImg: "ide/avatar/parts/" +
                                                d.gender + "/expressions/1_eyes_angry.png",
                                            color: "none"
                                        },
                                        armL: {
                                            baseImg: d.parts.armL.baseImg,
                                            color: "none"
                                        },
                                        armL1: {
                                            baseImg: d.parts.armL1.baseImg,
                                            color: "none"
                                        },
                                        handL: {
                                            baseImg: d.parts.handL.baseImg,
                                            color: "none"
                                        },
                                        handL1: {
                                            baseImg: d.parts.handL1.baseImg,
                                            color: "none"
                                        },
                                        forearmL: {
                                            baseImg: d.parts.forearmL.baseImg,
                                            color: "none"
                                        },
                                        forearmL1: {
                                            baseImg: d.parts.forearmL1.baseImg,
                                            color: "none"
                                        },
                                        armR: {
                                            baseImg: d.parts.armR.baseImg,
                                            color: "none"
                                        },
                                        handR: {
                                            baseImg: d.parts.handR.baseImg,
                                            color: "none"
                                        },
                                        forearmR: {
                                            baseImg: d.parts.forearmR.baseImg,
                                            color: "none"
                                        },
                                        hip: {
                                            baseImg: d.parts.hip.baseImg,
                                            color: "none"
                                        },
                                        thighR: {
                                            baseImg: d.parts.thighR.baseImg,
                                            color: "none"
                                        },
                                        legR: {
                                            baseImg: d.parts.legR.baseImg,
                                            color: "none"
                                        },
                                        footR: {
                                            baseImg: d.parts.footR.baseImg,
                                            color: "none"
                                        },
                                        thighL: {
                                            baseImg: d.parts.thighL.baseImg,
                                            color: "none"
                                        },
                                        legL: {
                                            baseImg: d.parts.legL.baseImg,
                                            color: "none"
                                        },
                                        footL: {
                                            baseImg: d.parts.footL.baseImg,
                                            color: "none"
                                        },
                                        footR2: {
                                            baseImg: d.parts.footR2.baseImg,
                                            color: "none"
                                        },
                                        handFistR: {
                                            baseImg: d.parts.handFistR.baseImg,
                                            color: "none"
                                        },
                                        handFistL: {
                                            baseImg: d.parts.handFistL.baseImg,
                                            color: "none"
                                        },
                                        weapon: {
                                            baseImg: d.parts.weapon.baseImg,
                                            color: "none"
                                        }
                                    }
                                }
                            }
                        } else {
                            d = Avatar.builtCharacter;
                            Avatar.builtCharacter = {
                                name: d.name,
                                gender: d.gender,
                                parts: {
                                    chest: {
                                        baseImg: d.chest,
                                        color: "none"
                                    },
                                    cape: {
                                        baseImg: d.cape,
                                        color: "none"
                                    },
                                    neck: {
                                        baseImg: d.neck,
                                        color: "none"
                                    },
                                    head: {
                                        baseImg: d.head,
                                        color: "none"
                                    },
                                    nose: {
                                        baseImg: d.nose,
                                        color: "none"
                                    },
                                    beard: {
                                        baseImg: d.head,
                                        color: "none"
                                    },
                                    hat: {
                                        baseImg: d.head,
                                        color: "none"
                                    },
                                    mouth1: {
                                        baseImg: d.mouth1,
                                        color: "none"
                                    },
                                    mouth2: {
                                        baseImg: d.mouth2,
                                        color: "none"
                                    },
                                    mouthClosed: {
                                        baseImg: d.mouthClosed,
                                        color: "none"
                                    },
                                    mouthSmall: {
                                        baseImg: d.mouthSmall,
                                        color: "none"
                                    },
                                    mouthteeth: {
                                        baseImg: d.mouthteeth,
                                        color: "none"
                                    },
                                    hair1: {
                                        baseImg: d.hair1,
                                        color: "none"
                                    },
                                    hair2: {
                                        baseImg: d.hair2,
                                        color: "none"
                                    },
                                    head_hair: {
                                        baseImg: d.head_hair,
                                        color: "none"
                                    },
                                    ear: {
                                        baseImg: d.ear,
                                        color: "none"
                                    },
                                    cover: {
                                        baseImg: d.cover,
                                        color: "none"
                                    },
                                    eyes: {
                                        baseImg: d.eyebrowL,
                                        color: "none"
                                    },
                                    eyesClosed: {
                                        baseImg: d.eyebrowL,
                                        color: "none"
                                    },
                                    propEyes: {
                                        baseImg: "ide/avatar/parts/standard/none.png",
                                        color: "none"
                                    },
                                    mouth1_crying: {
                                        baseImg: "ide/avatar/parts/" + d.gender +
                                            "/expressions/1_mouth1_crying.png",
                                        color: "none"
                                    },
                                    mouth1_angry: {
                                        baseImg: "ide/avatar/parts/" + d.gender + "/expressions/1_mouth1_angry.png",
                                        color: "none"
                                    },
                                    eyes_crying: {
                                        baseImg: "ide/avatar/parts/" + d.gender + "/expressions/1_eyes_crying.png",
                                        color: "none"
                                    },
                                    eyes_angry: {
                                        baseImg: "ide/avatar/parts/" + d.gender + "/expressions/1_eyes_angry.png",
                                        color: "none"
                                    },
                                    armL: {
                                        baseImg: d.armL,
                                        color: "none"
                                    },
                                    armL1: {
                                        baseImg: d.armL1,
                                        color: "none"
                                    },
                                    handL: {
                                        baseImg: d.handL,
                                        color: "none"
                                    },
                                    handL1: {
                                        baseImg: d.handL1,
                                        color: "none"
                                    },
                                    forearmL: {
                                        baseImg: d.forearmL,
                                        color: "none"
                                    },
                                    forearmL1: {
                                        baseImg: d.forearmL1,
                                        color: "none"
                                    },
                                    armR: {
                                        baseImg: d.armR,
                                        color: "none"
                                    },
                                    handR: {
                                        baseImg: d.handR,
                                        color: "none"
                                    },
                                    forearmR: {
                                        baseImg: d.forearmR,
                                        color: "none"
                                    },
                                    hip: {
                                        baseImg: d.hip,
                                        color: "none"
                                    },
                                    thighR: {
                                        baseImg: d.thighR,
                                        color: "none"
                                    },
                                    legR: {
                                        baseImg: d.legR,
                                        color: "none"
                                    },
                                    footR: {
                                        baseImg: d.footR,
                                        color: "none"
                                    },
                                    thighL: {
                                        baseImg: d.thighL,
                                        color: "none"
                                    },
                                    legL: {
                                        baseImg: d.legL,
                                        color: "none"
                                    },
                                    footL: {
                                        baseImg: d.footL,
                                        color: "none"
                                    },
                                    footR2: {
                                        baseImg: d.footR2,
                                        color: "none"
                                    },
                                    handFistR: {
                                        baseImg: d.handFistR,
                                        color: "none"
                                    },
                                    handFistL: {
                                        baseImg: d.handFistL,
                                        color: "none"
                                    },
                                    weapon: {
                                        baseImg: d.weapon,
                                        color: "none"
                                    }
                                }
                            }
                        }
                        Avatar.makefromJson();
                        c && Avatar.SVGToCanvas(c)
                    }
                }
            })
        } else c && c()
    },
    removeCharacter: function (b, c) {
        $.ajax({
            url: "/api/characterremove",
            data: {
                i: b
            },
            success: function () {
                var d = Avatar.availableCharacters.custom.indexOf(b);
                d > -1 && Avatar.availableCharacters.custom.splice(d, 1);
                for (var d = -1, e = 0; e < Avatar.customCharacterList.length; e++)
                    if (Avatar.customCharacterList[e].id == b) {
                        d = e;
                        break
                    }
                d > -1 && Avatar.customCharacterList.splice(d, 1);
                Avatar.setNumUserCharacters(Avatar.customCharacterList.length);
                c(null)
            },
            error: function (b, e, f) {
                c(f)
            }
        })
    },
    loadCustomCharacters: function (b) {
        $.ajax({
            url: "/api/characterlist",
            success: function (c) {
                Avatar.customCharacterList = JSON.parse(c);
                Avatar.setNumUserCharacters(Avatar.customCharacterList.length);
                Avatar.availableCharacters.custom = [];
                for (c = 0; c < Avatar.customCharacterList.length; c++) Avatar.availableCharacters.custom.push(Avatar.customCharacterList[c].id);
                Avatar.defaultCustomPreset = Avatar.customCharacterList.length > 0 ? Avatar.customCharacterList[0].id : null;
                b && b()
            },
            error: function () {
                b &&
                    b()
            }
        })
    },
    getAlphaURL: function (b, c) {
        return b == "propEyes" ? c.replace("1_", "alpha_prop_") : Avatar.colorGroups.skin.indexOf(b) > -1 ? c.replace(/1_(.*)/, "alpha_skin_" + b + ".png") : c.replace(/1_(.*)/, "alpha_prop_" + b + ".png")
    },
    getCharacterGender: function (b) {
        if (Avatar.selectedCarousel != "custom") return Avatar.selectedGender;
        for (var c = 0; c < Avatar.customCharacterList.length; c++) {
            var d = Avatar.customCharacterList[c];
            if (d.id == b) return d.data.gender
        }
    }
};
Script.prototype.registerTrigger = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.externalTriggers.length; c++)
            if (Runtime.externalTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.externalTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.externalTriggers.push(this)
    }
    return false
};
Script.prototype.registerFlagTrigger = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.flagTriggers.length; c++)
            if (Runtime.flagTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.flagTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.flagTriggers.push(this)
    }
    return false
};
Script.prototype.registerKeyTrigger = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.keyTriggers.length; c++)
            if (Runtime.keyTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.keyTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.keyTriggers.push(this)
    }
    return false
};
Script.prototype.registerSpriteTrigger = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.spriteTriggers.length; c++)
            if (Runtime.spriteTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.spriteTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.spriteTriggers.push(this)
    }
    return false
};
Script.prototype.registerBackgroundChange = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.sceneChanges.length; c++)
            if (Runtime.sceneChanges[c] == this) {
                b = true;
                break
            }
        b || Runtime.sceneChanges.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.sceneChanges.push(this)
    }
    return false
};
Script.prototype.registerExternalTrigger = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.externalTriggers.length; c++)
            if (Runtime.externalTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.externalTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.externalTriggers.push(this)
    }
    return false
};
Script.prototype.registerFunction = function () {
    return false
};
Script.prototype.registerCloned = function () {
    return false
};
Script.prototype.registerBroadcastTrigger = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.broadcastTriggers.length; c++)
            if (Runtime.broadcastTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.broadcastTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.broadcastTriggers.push(this)
    }
    return false
};
Script.prototype.blockControlCall = function (b) {
    var c = this.sprite,
        d = this.currentBlock.name,
        e = this._findFunction(c.scripts, d);
    if (e) {
        for (var d = [], f = 0; f < b.length; f++) b[f] instanceof LabelInput && d.push(this.evaluateExpression(b[f]));
        return this._blockControlCall(c, e, d)
    }
    e = this.currentBlock.getRoot();
    if (e.library)
        if (e = this._findFunction(e.library.scripts, d)) {
            d = [];
            for (f = 0; f < b.length; f++) b[f] instanceof LabelInput && d.push(this.evaluateExpression(b[f]));
            return this._blockControlCall(c, e, d)
        }
    return false
};
Script.prototype.blockControlCallLibrary = function (b) {
    var c = this.currentBlock.name.split("::"),
        d = c[1],
        c = c[0],
        e = Runtime.getLibraryByName(c);
    if (e) {
        for (var c = [], f = 0; f < b.length; f++) b[f] instanceof LabelInput && c.push(this.evaluateExpression(b[f]));
        if (b = this._findFunction(e.scripts, d)) return this._blockControlCall(this.sprite, b, c)
    }
    return false
};
Script.prototype.blockControlCallMember = function (b) {
    var c = this.evaluateExpression(b.shift()),
        d = this.evaluateExpression(b.shift());
    if (c == "self") c = this.sprite;
    else {
        c = Sprites.getSpriteByName(c);
        if (!c) c = Runtime.background
    }
    if (c) {
        for (var e = [], f = 0; f < b.length; f++) b[f] instanceof LabelInput && e.push(this.evaluateExpression(b[f]));
        if (b = this._findFunction(c.scripts, d)) return this._blockControlCall(c, b, e)
    }
    return false
};
Script.prototype._findFunction = function (b, c) {
    for (var d = 0; d < b.length; d++)
        if (b[d].func == "registerFunction" && b[d].name == c) return b[d];
    return null
};
Script.prototype._blockControlCall = function (b, c, d) {
    this.yield();
    if (window.WinCode && !Runtime.hideRunOutline) {
        c.setOutline(true);
        WinCode.draw()
    }
    this.pushState(this.currentBlock.next, c, Script.TYPE_FUNC, false);
    if (b) this.sprite = b;
    this.scriptVars = {};
    this.fnArgs = {};
    for (var b = 0, e = c.label._children, f = 0; f < e.length; f++)
        if (e[f] instanceof LabelInput) {
            this.fnArgs[e[f].defaultLabel] = d[b];
            b++
        }
    this.currentBlock = c
};
Script.prototype.valueControlCall = function (b) {
    var c = this.sprite,
        d = this.currentBlock,
        e = "",
        f = this._findFunction(c.scripts, this.currentBlock.name);
    if (f) {
        for (var e = [], g = 0; g < b.length; g++) e.push(this.evaluateExpression(b[g]));
        e = this._valueControlCall(c, f, e)
    }
    this.currentBlock = d;
    return e
};
Script.prototype.valueControlCallLibrary = function (b) {
    var c = this.currentBlock.name.split("::"),
        d = c[1],
        c = c[0],
        e = this.currentBlock,
        f = "",
        g = Runtime.getLibraryByName(c);
    if (g) {
        for (var c = [], h = 0; h < b.length; h++) b[h] instanceof LabelInput && c.push(this.evaluateExpression(b[h]));
        (b = this._findFunction(g.scripts, d)) && (f = this._valueControlCall(this.sprite, b, c))
    }
    this.currentBlock = e;
    return f
};
Script.prototype.valueControlCallMember = function (b) {
    var c = this.evaluateExpression(b.shift()),
        d = this.evaluateExpression(b.shift());
    if (c == "self") c = this.sprite;
    else {
        c = Sprites.getSpriteByName(c);
        if (!c) c = Runtime.background
    }
    var e = "";
    if (d = this._findFunction(c.scripts, d)) {
        for (var f = this.currentBlock, e = [], g = 0; g < b.length; g++) e.push(this.evaluateExpression(b[g]));
        e = this._valueControlCall(c, d, e);
        this.currentBlock = f
    } else this.error = true;
    return e
};
Script.prototype._valueControlReturn = function () {
    return false
};
Script.prototype._valueControlCall = function (b, c, d) {
    var e = Date.now() + 1E3;
    this.returnValue = "";
    var f = this.doYield,
        g = this.isDirty;
    if (window.WinCode && !Runtime.hideRunOutline) {
        c.setOutline(true);
        WinCode.draw()
    }
    this.pushState(new Block({
        func: "_valueControlReturn"
    }), c, Script.TYPE_FUNC, false);
    this.sprite = b;
    this.scriptVars = {};
    this.fnArgs = {};
    for (var b = 0, h = c.label._children, j = 0; j < h.length; j++)
        if (h[j] instanceof LabelInput) {
            this.fnArgs[h[j].defaultLabel] = d[b];
            b++
        }
    this.currentBlock = c;
    for (this.doYield = false; this.running &&
        Date.now() < e;)
        for (c = 100; this.running && --c >= 0;)
            if (this.currentBlock && this.currentBlock.func != "_valueControlReturn") this.invokeStep();
            else {
                this.currentBlock = null;
                this.running = false;
                this.receivedValue = void 0;
                break
            }
    delete this.error;
    this.running = true;
    this.doYield = f;
    this.isDirty = g;
    e = this.returnValue;
    this.returnValue = "";
    return e
};
Script.prototype.blockControlReturn = function (b) {
    window.WinCode && !Runtime.hideRunOutline && this.currentBlock.getRoot().setOutline(false);
    this.currentBlock = null;
    for (var b = this.evaluateExpression(b[0]), c = this.peekState() ; c && c.containerType != Script.TYPE_FUNC;) c = this.popState();
    if (c && c.containerType == Script.TYPE_FUNC && c.data) {
        window.WinCode && !Runtime.hideRunOutline && c.data.setOutline(false);
        this.data = null
    }
    this.returnValue = b;
    this.yield();
    return true
};
Script.prototype.valueParam = function () {
    return this.fnArgs ? this.fnArgs[this.blockName] : ""
};
Script.prototype.blockControlScriptVar = function () {
    var b = this.currentBlock.label.getNumSockets();
    if (!this.scriptVars) this.scriptVars = {};
    for (var c = 0; c < b; c++) {
        var d = this.currentBlock.label.getSocketAtChild(c);
        this.scriptVars[d._child ? d._child.name : d.label] = ""
    }
};
Script.prototype.valueScriptVar = function () {
    return this.scriptVars ? this.scriptVars[this.blockName] : ""
};
Script.prototype.blockControlWait = function (b) {
    this.yield();
    if (this.data == null) {
        b = parseFloat(this.evaluateExpression(b[0]));
        if (b <= 0) return false;
        this.data = Date.now() + b * 1E3
    } else if (Date.now() > this.data) return false;
    return this.skipArgCompute = true
};
Script.prototype.blockControlForever = function () {
    var b = this.currentBlock.getBlockAtContainer(0);
    if (b == null) this.yield();
    else {
        this.pushState(this.currentBlock, null, Script.TYPE_LOOP, false);
        this.currentBlock = b
    }
    this.skipArgCompute = false;
    return true
};
Script.prototype.blockControlRepeat = function (b) {
    if (this.data == null) this.data = this.evaluateExpression(b[0]);
    if (this.data > 0) {
        this.data--;
        this.pushState(this.currentBlock, this.data, Script.TYPE_LOOP, true);
        this.currentBlock = this.currentBlock.getBlockAtContainer(0);
        this.currentBlock == null && this.yield();
        this.data = null;
        this.skipArgCompute = false;
        return true
    }
    this.yield();
    return false
};
Script.prototype.blockControlBroadcast = function (b) {
    b = this.evaluateExpression(b[0]);
    Runtime._broadcastRuntimeListeners("broadcast", b);
    for (var c = 0; c < Runtime.broadcastTriggers.length; c++) {
        var d = Runtime.broadcastTriggers[c].scriptBlock.label.getSocketAtChild(0);
        if (d != null && d.label == b) {
            d = Runtime.broadcastTriggers[c];
            d.receivedValue = "";
            d.messageSource = this.sprite.label;
            Runtime.scheduleToRun(d)
        }
    }
    return false
};
Script.prototype.blockControlBroadcastWait = function (b) {
    this.yield();
    if (this.data == null) {
        var c = this.evaluateExpression(b[0]);
        this.data = c;
        Runtime._broadcastRuntimeListeners("broadcastWait", c);
        for (b = 0; b < Runtime.broadcastTriggers.length; b++) {
            var d = Runtime.broadcastTriggers[b].scriptBlock.label.getSocketAtChild(0);
            if (d != null && d.label == c && !Runtime.broadcastTriggers[b].running) {
                var e = Runtime.broadcastTriggers[b];
                e.receivedValue = "";
                e.messageSource = this.sprite.label;
                Runtime.scheduleToRun(e)
            }
        }
        return this.skipArgCompute =
            true
    }
    c = false;
    for (b = 0; b < Runtime.runningScripts.length; b++) {
        e = Runtime.runningScripts[b];
        if (e.scriptBlock.func == "registerBroadcastTrigger") {
            d = e.scriptBlock.label.getSocketAtChild(0);
            if (d != null && d.label == this.data && e.running) {
                c = true;
                break
            }
        }
    }
    if (c) return this.skipArgCompute = true;
    return false
};
Script.prototype.blockControlPostMessage = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]),
        e = this.evaluateExpression(b[2]);
    if (d == "TynkerRuntime") {
        if (!window.WinCode) {
            if (c == "loadProject") {
                if (c = /[0-9a-fA-F]+$/.exec(e)) {
                    window.location = "ide/embedded?p=" + c[0];
                    Runtime.stopScripts()
                }
                return false
            }
            if (c == "visitUrl") {
                window.parent ? window.parent.location = e : window.location = e;
                return false
            }
        }
        if (c == "turboMode") {
            Runtime.turboMode = e === true || e == "true" || e == "on" ? true : false;
            return false
        }
        if (c ==
            "aabbCollision") {
            Runtime.aabbCollision = e === true || e == "true" || e == "on" ? true : false;
            return false
        }
        if (c == "physicsDebug") e === true || e == "true" || e == "on" ? Physics.setDebug(true) : Physics.setDebug(false);
        else if (c == "hideRunIndicator") Runtime.hideRunOutline = e === true || e == "true" || e == "on" ? true : false;
        else if (c == "runIndicatorTimeout") Runtime.runPauseTimeout = parseInt(e);
        else if (c == "staticPlacement") this.sprite.spriteObj.isStatic = e === true || e == "true" || e == "on" ? true : false;
        else if (c == "penLayerStaticPlacement") Runtime.stage.penLayer.isStatic =
            e === true || e == "true" || e == "on" ? true : false;
        else if (c == "replaceCostume")
            if (this.sprite.costumes.length > 0) {
                var f = this.sprite,
                    b = new Image;
                b.onload = function () {
                    var b = f.currentCostume,
                        c = f.costumes[b - 1];
                    c.img = e;
                    c.imgObj = this;
                    c.cx = this.width / 2;
                    c.cy = this.height / 2;
                    f.currentCostume = -1;
                    f.setCostumeByName(b)
                };
                b.src = e
            } else {
                this.sprite.addCostume({
                    name: "loadimage",
                    img: e
                });
                this.sprite.setCostumeByName(this.sprite.costumes.length)
            }
        else if (c == "playSound") {
            soundManager.globalSound && soundManager.globalSound.stop();
            soundManager.globalSound =
                soundManager.createSound({
                    url: e,
                    autoPlay: false
                });
            soundManager.globalSound.play({
                onfinish: function () {
                    soundManager.globalSound.unload()
                },
                onstop: function () {
                    soundManager.globalSound.unload()
                }
            })
        }
    }
    Runtime._broadcastRuntimeListeners("post", c, e);
    for (b = 0; b < Runtime.broadcastTriggers.length; b++) {
        var g = Runtime.broadcastTriggers[b],
            h = g.scriptBlock.label.getSocketAtChild(0);
        if (h != null && h.label == c && (d == "any" || g.sprite.label == d || d == "self" && g.sprite == this.sprite || d == "stage" && g.sprite == Runtime.background)) {
            g.receivedValue =
                e;
            g.messageSource = this.sprite.label;
            Runtime.scheduleToRun(g)
        }
    }
    return false
};
Script.prototype.blockControlPostMessageAndWait = function (b) {
    this.yield();
    if (this.data == null) {
        var c = this.evaluateExpression(b[0]),
            d = this.evaluateExpression(b[1]),
            e = this.evaluateExpression(b[2]);
        this.data = {
            eventName: c,
            spriteName: d,
            msgValue: e
        };
        if (d == "TynkerRuntime") {
            if (!window.WinCode) {
                if (c == "loadProject") {
                    if (c = /[0-9a-fA-F]+$/.exec(e)) {
                        window.location = "ide/embedded?p=" + c[0];
                        Runtime.stopScripts()
                    }
                    return false
                }
                if (c == "visitUrl") {
                    window.parent ? window.parent.location = e : window.location = e;
                    return false
                }
            }
            if (c ==
                "turboMode") {
                Runtime.turboMode = e === true || e == "true" || e == "on" ? true : false;
                return false
            }
            if (c == "aabbCollision") {
                Runtime.aabbCollision = e === true || e == "true" || e == "on" ? true : false;
                return false
            }
            if (c == "physicsDebug") e === true || e == "true" || e == "on" ? Physics.setDebug(true) : Physics.setDebug(false);
            else if (c == "hideRunIndicator") Runtime.hideRunOutline = e === true || e == "true" || e == "on" ? true : false;
            else if (c == "runIndicatorTimeout") Runtime.runPauseTimeout = parseInt(e);
            else if (c == "staticPlacement") this.sprite.spriteObj.isStatic =
                e === true || e == "true" || e == "on" ? true : false;
            else if (c == "replaceCostume") {
                if (this.sprite.costumes.length > 0) {
                    var f = this.sprite,
                        g = this.data;
                    g.checkFlag = true;
                    g.flag = false;
                    c = new Image;
                    c.onload = function () {
                        var b = f.currentCostume,
                            c = f.costumes[b - 1];
                        c.img = e;
                        c.imgObj = this;
                        c.cx = this.width / 2;
                        c.cy = this.height / 2;
                        f.currentCostume = -1;
                        f.setCostumeByName(b);
                        g.flag = true
                    };
                    c.src = e
                } else {
                    g = this.data;
                    g.checkFlag = true;
                    g.flag = false;
                    this.sprite.addCostume({
                        name: "loadimage",
                        img: e
                    }, function () {
                        g.flag = true
                    });
                    this.sprite.setCostumeByName(this.sprite.costumes.length)
                }
                return this.skipArgCompute =
                    true
            }
        }
        Runtime._broadcastRuntimeListeners("postWait", c, e);
        for (b = 0; b < Runtime.broadcastTriggers.length; b++) {
            var h = Runtime.broadcastTriggers[b],
                j = h.scriptBlock.label.getSocketAtChild(0);
            if (j != null && j.label == c && (d == "any" || h.sprite.label == d || d == "self" && h.sprite == this.sprite || d == "stage" && h.sprite == Runtime.background) && !Runtime.broadcastTriggers[b].running) {
                h.receivedValue = e;
                h.messageSource = this.sprite.label;
                Runtime.scheduleToRun(h)
            }
        }
        return this.skipArgCompute = true
    }
    c = false;
    if (this.data.checkFlag) this.data.flag ||
        (c = true);
    else
        for (b = 0; b < Runtime.runningScripts.length; b++) {
            h = Runtime.runningScripts[b];
            if (h.scriptBlock.func == "registerBroadcastTrigger") {
                j = h.scriptBlock.label.getSocketAtChild(0);
                if (j != null && (j.label == this.data.eventName && (this.data.spriteName == "any" || h.sprite.label == this.data.spriteName || this.data.spriteName == "self" && h.sprite == this.sprite || this.data.spriteName == "stage" && h.sprite == Runtime.background)) && h.running) {
                    c = true;
                    break
                }
            }
        }
    if (c) return this.skipArgCompute = true;
    return false
};
Script.prototype.valueControlMessageValue = function () {
    return this.receivedValue ? this.receivedValue : ""
};
Script.prototype.valueControlMessageSource = function () {
    return this.messageSource ? this.messageSource : ""
};
Script.prototype.blockControlCloneActor = function (b) {
    var b = this.evaluateExpression(b[0]),
        c;
    if (b == "any" || b == "stage") c = null;
    else if (b == "self") {
        c = this.sprite.copyActor(function (b) {
            for (var c = 0; c < b.scripts.length; c++) {
                var f = b.scripts[c];
                if (f.func == "registerCloned") {
                    f = new Script({
                        sprite: b,
                        scriptBlock: f
                    });
                    f.currentBlock = f.scriptBlock;
                    f.invokeStep();
                    Runtime.scheduleToRun(f)
                }
            }
        });
        c.instantiated = true;
        c.instantiatedFrom = this.sprite.instantiated ? this.sprite.instantiatedFrom : this.sprite.label
    } else if (b = Sprites.getSpriteByName(b)) {
        c =
            b.copyActor(function (b) {
                for (var c = 0; c < b.scripts.length; c++) {
                    var f = b.scripts[c];
                    if (f.func == "registerCloned") {
                        f = new Script({
                            sprite: b,
                            scriptBlock: f
                        });
                        f.currentBlock = f.scriptBlock;
                        f.invokeStep();
                        Runtime.scheduleToRun(f)
                    }
                }
            });
        c.instantiated = true;
        c.instantiatedFrom = b.instantiated ? b.instantiatedFrom : b.label
    }
    this.lastClonedActor = c;
    return false
};
Script.prototype.valueControlCloneName = function (b) {
    for (var b = this.evaluateExpression(b[0]), c = 0; c < Runtime.sprites.length; c++) {
        var d = Runtime.sprites[c];
        if (d.label == b) return d.instantiated ? d.instantiatedFrom : d.label
    }
    return ""
};
Script.prototype.blockControlDeleteActor = function () {
    if (this.sprite.instantiated) {
        this.sprite.deleteActor();
        for (var b = 0; b < Runtime.runningScripts.length; b++) {
            var c = Runtime.runningScripts[b];
            if (c.sprite == this.sprite) {
                c.running = false;
                c.currentBlock = null;
                c.stack = []
            }
        }
    }
    this.currentBlock = null;
    this.stack = [];
    return true
};
Script.prototype.valueControlLastClonedActor = function () {
    return this.lastClonedActor ? this.lastClonedActor.label : ""
};
Script.prototype.valueControlIsClone = function () {
    return this.sprite.instantiated ? true : false
};
Script.prototype.blockControlForeverIf = function (b) {
    var c = this.currentBlock.getBlockAtContainer(0);
    if (this.evaluateExpression(b[0]) && c != null) {
        this.pushState(this.currentBlock, null, Script.TYPE_CONTAINER, false);
        this.currentBlock = c
    }
    this.yield();
    return true
};
Script.prototype.blockControlIf = function (b) {
    if (this.evaluateExpression(b[0])) {
        b = this.currentBlock.getBlockAtContainer(0);
        if (b != null) {
            this.pushState(this.currentBlock.next, null, Script.TYPE_CONTAINER, false);
            this.skipArgCompute = false;
            this.currentBlock = b;
            return true
        }
    }
    return false
};
Script.prototype.valueControlIfElse = function (b) {
    return this.evaluateExpression(b[0]) ? this.evaluateExpression(b[1]) : this.evaluateExpression(b[2])
};
Script.prototype.blockControlIfElse = function (b) {
    if (this.evaluateExpression(b[0])) b = this.currentBlock.getBlockAtContainer(0);
    else {
        for (var b = this.currentBlock._containerLabels, c = 0; c < b.length; c++)
            if (b[c].getNumSockets() > 0 && this.evaluateExpression(b[c].getSocketAtChild(0))) {
                b = this.currentBlock.getBlockAtContainer(c + 1);
                if (b != null) {
                    this.pushState(this.currentBlock.next, null, Script.TYPE_CONTAINER, false);
                    this.skipArgCompute = false;
                    this.currentBlock = b;
                    return true
                }
                return false
            }
        b = this.currentBlock.getBlockAtContainer(this.currentBlock.getNumContainers() -
            1)
    }
    if (b != null) {
        this.pushState(this.currentBlock.next, null, Script.TYPE_CONTAINER, false);
        this.skipArgCompute = false;
        this.currentBlock = b;
        return true
    }
    return false
};
Script.prototype.blockControlWaitUntil = function (b) {
    this.yield();
    if (!this.evaluateExpression(b[0])) {
        this.skipArgCompute = false;
        return true
    }
    return false
};
Script.prototype.blockControlWhile = function (b) {
    if (this.evaluateExpression(b[0])) {
        b = this.currentBlock.getBlockAtContainer(0);
        if (b != null) {
            this.pushState(this.currentBlock, null, Script.TYPE_LOOP, false);
            this.currentBlock = b
        } else this.yield();
        this.skipArgCompute = false;
        return true
    }
    this.yield();
    return false
};
Script.prototype.blockControlRepeatUntil = function (b) {
    if (!this.evaluateExpression(b[0])) {
        b = this.currentBlock.getBlockAtContainer(0);
        if (b != null) {
            this.pushState(this.currentBlock, null, Script.TYPE_LOOP, false);
            this.currentBlock = b
        } else this.yield();
        this.skipArgCompute = false;
        return true
    }
    this.yield();
    return false
};
Script.prototype.blockControlStop = function (b) {
    b = this.evaluateExpression(b[0]);
    if (b == "all") Runtime.stopScripts();
    else if (b == "this script") {
        this.currentBlock = null;
        for (b = this.peekState() ; b && b.containerType != Script.TYPE_FUNC;) b = this.popState();
        if (b && b.containerType == Script.TYPE_FUNC && b.data) {
            window.WinCode && !Runtime.hideRunOutline && b.data.setOutline(false);
            this.data = null;
            this.yield();
            return true
        }
    } else if (b == "other scripts in actor") Runtime.stopScripts(this.sprite, this);
    else if (b == "function call chain") {
        this.currentBlock =
            null;
        do
            if ((b = this.popState()) && b.containerType == Script.TYPE_FUNC && b.data) {
                window.WinCode && !Runtime.hideRunOutline && b.data.setOutline(false);
                this.data = null
            }
        while (b)
    }
    return false
};
Script.prototype.blockControlStopScript = function () {
    this.currentBlock = null;
    return true
};
Script.prototype.blockControlStopAll = function () {
    this.currentBlock = null;
    Runtime.stopScripts();
    return true
};
Script.prototype.blockControlFor = function (b) {
    if (this.data == null) {
        var c = "",
            d = b[0];
        if (d && d._child) {
            d = d._child;
            if (d.func == "valueVar" || d.func == "valueParam" || d.func == "valueScriptVar" || d.func == "valueList") c = d.name
        }
        c || (c = this.evaluateExpression(b[0]));
        this.data = {
            name: c,
            start: this.evaluateExpression(b[1]),
            end: this.evaluateExpression(b[2]),
            incr: this.evaluateExpression(b[3])
        };
        if (this.data.incr > 0 && this.data.start > this.data.end || this.data.incr < 0 && this.data.start < this.data.end || this.data.incr === 0) {
            this.yield();
            return false
        }
        this._setVariable(this.data.name, this.data.start - this.data.incr)
    }
    b = this._getVariable(this.data.name) + this.data.incr;
    this._setVariable(this.data.name, b);
    if (this.data.incr < 0 && b >= this.data.end || this.data.incr > 0 && b <= this.data.end) {
        this.pushState(this.currentBlock, this.data, Script.TYPE_LOOP, true);
        this.currentBlock = this.currentBlock.getBlockAtContainer(0);
        this.currentBlock == null && this.yield();
        this.data = null;
        this.skipArgCompute = false;
        return true
    }
    this.yield();
    return false
};
Script.prototype.blockControlForEach = function (b) {
    if (this.data == null) {
        var c = "",
            d = b[1];
        if (d && d._child) {
            d = d._child;
            if (d.func == "valueVar" || d.func == "valueParam" || d.func == "valueScriptVar" || d.func == "valueList") c = d.name
        }
        c || (c = this.evaluateExpression(b[1]));
        this.data = {
            values: this.evaluateExpression(b[0]),
            index: 0,
            name: c
        };
        this._setVariable(this.data.name, null)
    }
    if (this.data.index < this.data.values.length) {
        this._setVariable(this.data.name, this.data.values[this.data.index]);
        this.data.index++;
        this.pushState(this.currentBlock,
            this.data, Script.TYPE_LOOP, true);
        this.currentBlock = this.currentBlock.getBlockAtContainer(0);
        this.currentBlock == null && this.yield();
        this.data = null;
        this.skipArgCompute = false;
        return true
    }
    this.yield();
    return false
};
Script.prototype.blockControlBreak = function () {
    this.currentBlock = null;
    for (var b = this.peekState() ; b && b.containerType != Script.TYPE_LOOP;) {
        this.popState();
        if ((b = this.peekState()) && b.containerType == Script.TYPE_FUNC && b.data) {
            window.WinCode && !Runtime.hideRunOutline && b.data.setOutline(false);
            this.data = null
        }
    }
    if (b && b.containerType == Script.TYPE_LOOP) {
        b = this.popState();
        this.currentBlock = b.nextBlock.next;
        this.data = null;
        this.skipArgCompute = false
    }
    this.yield();
    return true
};
Script.prototype.blockControlContinue = function () {
    for (var b = this.peekState() ; b && b.containerType != Script.TYPE_LOOP;) {
        this.popState();
        if ((b = this.peekState()) && b.containerType == Script.TYPE_FUNC && b.data) {
            window.WinCode && !Runtime.hideRunOutline && b.data.setOutline(false);
            this.data = null
        }
    }
    this.currentBlock = null;
    this.yield();
    return true
};
Script.prototype.blockControlRequestBlocking = function () {
    if (this.data == null) {
        this.requestBlock(true);
        this.data = true;
        var b = this.currentBlock.getBlockAtContainer(0);
        if (b != null) {
            this.pushState(this.currentBlock, this.data, Script.TYPE_CONTAINER, false);
            this.data = null;
            this.skipArgCompute = false;
            this.currentBlock = b;
            return true
        }
    }
    this.requestBlock(false);
    return false
};
Script.prototype.blockControlPrint = function (b) {
    for (var c = "", d = 0; d < b.length; d++) {
        var e = this.evaluateExpression(b[d]);
        if (typeof e == "object") {
            if (c) {
                console.log(c);
                c = ""
            }
            console.log(e)
        } else c = c + ("" + e)
    }
    c && console.log(c);
    return false
};
Script.prototype.valueControlLanguage = function (b) {
    for (var c = 0; c < b.length; c++) b[c] = this.evaluateExpression(b[c]);
    return g_loc.formatText.apply(this, b)
};
Script.prototype.valueControlLanguageWithDefault = function (b) {
    for (var c = 0; c < b.length; c++) b[c] = this.evaluateExpression(b[c]);
    return g_loc.formatTextDefault.apply(this, b)
};
Script.prototype.blockComment = function () {
    return false
};
Script.prototype.blockInlineComment = function () {
    return false
};
Script.prototype.nop = function () {
    this.yield();
    return true
};
Script.prototype.blockControlDebugBreak = function () {
    if (window.IDE) {
        Runtime.pauseScripts();
        IDE.selectAsset(this.sprite);
        WinTools.showDebugger()
    }
};
Script.prototype.blockControlDebugBreakOn = function (b) {
    if (this.evaluateExpression(b[0]) && window.IDE) {
        Runtime.pauseScripts();
        IDE.selectAsset(this.sprite);
        WinTools.showDebugger()
    }
};
Script.prototype.valueControlSerializeActor = function (b) {
    b = this.evaluateExpression(b[0]);
    if (b = b == "self" || b == "any" ? this.sprite : Sprites.getSpriteByName(b)) {
        b = ObjectIO.serializeSprite(b, true);
        return b = JSON.stringify(b)
    }
    return ""
};
Script.prototype.blockControlDeserializeActor = function (b) {
    this.yield();
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    if (this.data === null) {
        var d = this;
        d.data = false;
        typeof c == "string" && (c = JSON.parse(c));
        if (b) c.label = b;
        ObjectIO.deserializeSprite(c, function (b) {
            d.data = true;
            d.lastClonedActor = b
        })
    } else if (this.data === true) return false;
    return this.skipArgCompute = true
};
Script.prototype.blockControlRemoveActor = function (b) {
    (b = this.evaluateExpression(b[0])) && (b != "any" && b != "self" && b != this.sprite.label) && Sprites.removeSprite(b)
};
Script.prototype.valueControlSerializeScripts = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    if (c = c == "self" || c == "any" ? this.sprite : Sprites.getSpriteByName(c)) {
        if (b) {
            for (var d = {
                scripts: []
            }, e = 0; e < c.scripts.length; e++) {
                var f = c.scripts[e];
                if (f.tags)
                    for (var g = 0; g < f.tags.length; g++)
                        if (f.tags[g] == b) {
                            d.scripts.push(f);
                            break
                        }
            }
            b = ObjectIO.serializeScripts(d, true)
        } else b = ObjectIO.serializeScripts(c, true);
        return b = JSON.stringify(b)
    }
    return ""
};
Script.prototype.blockControlDeserializeScripts = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    if (b = b == "self" || b == "any" ? this.sprite : Sprites.getSpriteByName(b)) {
        typeof c == "string" && (c = JSON.parse(c));
        ObjectIO.deserializeScripts(b, c)
    }
};
Script.prototype.blockControlRemoveScriptsWithTag = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    if (b = b == "self" || b == "any" ? this.sprite : Sprites.getSpriteByName(b)) {
        for (var d = [], e = 0; e < b.scripts.length; e++) {
            var f = false,
                g = b.scripts[e];
            if (g.tags)
                for (var h = 0; h < g.tags.length; h++)
                    if (g.tags[h] == c) {
                        Runtime.unregisterBlock(g, b);
                        f = true;
                        break
                    }
            f || d.push(g)
        }
        b.scripts = d
    }
};
Script.prototype.blockControlJS = function (b) {
    b = this.evaluateExpression(b[0]);
    if (this.currentBlock.scriptText != b) {
        this.currentBlock.scriptText = b;
        this.currentBlock.scriptEvaled = eval("(function() {" + b + "})")
    }
    b = this.currentBlock;
    this.currentBlock.scriptEvaled.apply(this);
    this.currentBlock = b
};
Script.prototype.valueControlJS = function (b) {
    b = this.evaluateExpression(b[0]);
    if (this.currentBlock.scriptText != b) {
        this.currentBlock.scriptText = b;
        this.currentBlock.scriptEvaled = eval("(function() {" + b + "})")
    }
    var b = this.currentBlock,
        c = this.currentBlock.scriptEvaled.apply(this);
    this.currentBlock = b;
    return c
};
Script.prototype.callFunction = function (b, c, d) {
    if (b == "self") b = this.sprite;
    else {
        b = Sprites.getSpriteByName(b);
        if (!b) b = Runtime.background
    }
    var e = "";
    if (c = this._findFunction(b.scripts, c)) {
        for (var f = this.currentBlock, e = [], g = 0; g < d.length; g++) e.push(this.evaluateExpression(d[g]));
        e = this._valueControlCall(b, c, e);
        this.currentBlock = f
    } else this.error = true;
    return e
};
Script.prototype.callLibrary = function (b, c, d) {
    var e = this.currentBlock,
        f = "";
    if (b = Runtime.getLibraryByName(b)) {
        for (var g = 0; g < d.length; g++) d[g] = this.evaluateExpression(d[g]);
        (c = this._findFunction(b.scripts, c)) && (f = this._valueControlCall(this.sprite, c, d))
    }
    this.currentBlock = e;
    return f
};
Script.prototype.setProperty = function (b, c, d) {
    if (b == "self") b = this.sprite;
    else {
        b = Sprites.getSpriteByName(b);
        if (!b) b = Runtime.background
    }
    blockVarPropSet(c, b, d);
    this.dirty()
};
Script.prototype.getProperty = function (b, c) {
    if (b == "self") b = this.sprite.label;
    return propertyGet(c, b)
};
Script.prototype.blockLooksSwitchCostume = function (b) {
    this.dirty();
    _doBlockLooksSwitchCostume(this.sprite, this.evaluateExpression(b[0]));
    return false
};

function _doBlockLooksSwitchCostume(b, c) {
    b.setCostumeByName(c);
    return false
}
Script.prototype.blockLooksNextCostume = function () {
    this.dirty();
    if (this.sprite.skeleton && this.sprite.spriteObj.drawFunction) {
        this.sprite.updateSkeleton();
        return false
    }
    var b = this.sprite.getCostumes(),
        c = this.sprite.getCostumeByName(this.sprite.currentCostume),
        d = 0;
    c && (d = (c[0] + 1) % b.length);
    this.sprite.setCostumeByName(d + 1);
    return false
};
Script.prototype.blockLooksFirstCostumeInGroup = function (b) {
    b = this.evaluateExpression(b[0]);
    this.dirty();
    for (var c = this.sprite.getCostumes(), d = 0, e = 0; e < c.length; e++)
        if (c[e].name.substring(0, b.length) == b) {
            d = e;
            break
        }
    this.sprite.setCostumeByName(d + 1);
    return false
};
Script.prototype.blockLooksNextCostumeInGroup = function (b) {
    this.dirty();
    this.sprite.nextCostumeInGroup(this.evaluateExpression(b[0]), parseInt(this.evaluateExpression(b[1])));
    return false
};
Script.prototype.valueLooksCostumeNum = function () {
    return this.sprite.getCostumeByName(this.sprite.currentCostume)[0] + 1
};
Script.prototype.valueLooksCostumeName = function () {
    return this.sprite.skeleton && this.sprite.spriteObj.drawFunction ? this.sprite.skeleton.animationName : this.sprite.getCostumeByName(this.sprite.currentCostume)[1].name
};
Script.prototype.valueLooksBackgroundName = function () {
    return this.sprite.getCostumeByName(this.sprite.currentCostume)[1].name
};
Script.prototype.blockLooksSetLevel = function (b) {
    b = this.evaluateExpression(b[0]);
    if (typeof b == "number") {
        b = Math.floor(b) % Runtime.levels.length;
        b < 0 && (b = b + Runtime.levels.length);
        Runtime.loadLevel(b, null, function () {
            Runtime.triggerFlag()
        })
    } else {
        for (var c = 0; c < Runtime.levels.length; c++)
            if (Runtime.levels[c].name == b) {
                Runtime.loadLevel(c, null, function () {
                    Runtime.triggerFlag()
                });
                return false
            }
        b = coerceToNumber(b);
        b = Math.floor(b) % Runtime.levels.length;
        if (b < 0) {
            b = b + Runtime.levels.length;
            Runtime.loadLevel(c, null, function () {
                Runtime.triggerFlag()
            })
        }
    }
    return false
};
Script.prototype.blockLooksSetLevelWithActors = function (b) {
    for (var c = this.evaluateExpression(b[0]), d = [], e = 1; e < b.length; e++) {
        var f = this.evaluateExpression(b[e]);
        if (f == "self") {
            f = this.sprite.label;
            d.indexOf(f) < 0 && d.push(f)
        } else if (f == "all") {
            d = [];
            for (b = 0; b < Runtime.sprites.length; b++) d.push(Runtime.sprites[b].label);
            break
        } else d.indexOf(f) < 0 && d.push(f)
    }
    if (typeof c == "number") {
        c = Math.floor(c) % Runtime.levels.length;
        c < 0 && (c = c + Runtime.levels.length);
        Runtime.loadLevel(c, d, function () {
            Runtime.triggerFlag()
        })
    } else {
        for (e =
            0; e < Runtime.levels.length; e++)
            if (Runtime.levels[e].name == c) {
                Runtime.loadLevel(e, d, function () {
                    Runtime.triggerFlag()
                });
                return false
            }
        c = coerceToNumber(c);
        c = Math.floor(c) % Runtime.levels.length;
        if (c < 0) {
            c = c + Runtime.levels.length;
            Runtime.loadLevel(e, d, function () {
                Runtime.triggerFlag()
            })
        }
    }
    return false
};
Script.prototype.valueLooksGetLevel = function () {
    return Runtime.levels[Runtime.currentLevelIndex].name
};
Script.prototype.valueLooksGetLevelNum = function () {
    return Runtime.currentLevelIndex
};
Script.prototype.valueLooksNumLevels = function () {
    return Runtime.levels.length
};
Script.prototype.blockLooksSetZoom = function (b) {
    Runtime.stage.canvasScale = this.evaluateExpression(b[0]) / 100;
    b = Math.min(Runtime.stage.actorsLayer.canvas.width / (Runtime.stage.tileLayer.mapWidth * Runtime.stage.tileLayer.tileSize), Runtime.stage.actorsLayer.canvas.height / (Runtime.stage.tileLayer.mapHeight * Runtime.stage.tileLayer.tileSize));
    if (Runtime.stage.canvasScale < b) Runtime.stage.canvasScale = b;
    Runtime.stage.tileLayer.setScrollOffset(Runtime.stage.tileLayer.getScrollOffsetX(), Runtime.stage.tileLayer.getScrollOffsetY());
    Runtime.stage.draw()
};
Script.prototype.valueLooksGetZoom = function () {
    return Runtime.stage.canvasScale * 100
};
Script.prototype.valueLooksGetTileAt = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    return Runtime.stage.tileLayer.getTile(c, b)
};
Script.prototype.valueLooksGetTileAtPoint = function (b) {
    var c = Runtime.stage.tileLayer.tileSize,
        d = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]),
        d = Math.floor((d + Runtime.stage.getWidth() / 2) / c),
        b = Math.floor((Runtime.stage.getHeight() / 2 - b) / c);
    return Runtime.stage.tileLayer.getTile(d, b)
};
Script.prototype.blockLooksSetTileAt = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]),
        b = this.evaluateExpression(b[2]),
        b = Runtime.stage.tileLayer.resolveTileName(b);
    b < 0 ? Runtime.stage.tileLayer.removeTile(c, d) : Runtime.stage.tileLayer.placeTile(c, d, b);
    Runtime.stage.tileLayer.resetPhysics(Physics.world);
    Runtime.stage.draw()
};
Script.prototype.blockLooksSetTileAtPoint = function (b) {
    var c = Runtime.stage.tileLayer.tileSize,
        d = this.evaluateExpression(b[0]),
        e = this.evaluateExpression(b[1]),
        d = Math.floor((d + Runtime.stage.getWidth() / 2) / c),
        e = Math.floor((Runtime.stage.getHeight() / 2 - e) / c),
        b = this.evaluateExpression(b[2]),
        b = Runtime.stage.tileLayer.resolveTileName(b);
    b < 0 ? Runtime.stage.tileLayer.removeTile(d, e) : Runtime.stage.tileLayer.placeTile(d, e, b);
    Runtime.stage.tileLayer.resetPhysics(Physics.world);
    Runtime.stage.draw()
};
Script.prototype.blockLooksSetLabel = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        for (var c = "", d = 0; d < b.length; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
        this.sprite.spriteObj.label = c
    }
    return false
};
Script.prototype.blockLooksSetBubble = function (b) {
    if (this.sprite.spriteObj) {
        Script._saveBubbleStyle(this.sprite.spriteObj, this.sprite);
        this.sprite.spriteObj.bubble.style = this.evaluateExpression(b[0])
    } else {
        Script._saveBubbleStyle(Runtime.stage, this.sprite);
        Runtime.stage.bubble.style = this.evaluateExpression(b[0])
    }
    return false
};
Script.prototype.blockLooksSetBubbleWidth = function (b) {
    if (this.sprite.spriteObj) {
        Script._saveBubbleStyle(this.sprite.spriteObj, this.sprite);
        this.sprite.spriteObj.bubble.width = this.evaluateExpression(b[0])
    }
    return false
};
Script.prototype.blockLooksSetBubbleDock = function (b) {
    if (this.sprite.spriteObj) {
        Script._saveBubbleStyle(this.sprite.spriteObj, this.sprite);
        this.sprite.spriteObj.bubble.dock = this.evaluateExpression(b[0])
    } else {
        Script._saveBubbleStyle(Runtime.stage, this.sprite);
        Runtime.stage.bubble.dock = this.evaluateExpression(b[0])
    }
    return false
};
Script._saveBubbleStyle = function (b, c) {
    if (!b.bubble) b.bubble = {
        style: "rounded",
        width: "auto",
        dock: "none"
    };
    b.bubble.penColor = c.penColor;
    b.bubble.fillColor = c.fillColor;
    b.bubble.penWidth = c.penWidth;
    b.bubble.font = c.font;
    b.bubble.fontColor = c.fontColor ? c.fontColor : c.penColor;
    b.bubble.buttonText = c.buttonText
};
Script.prototype.blockLooksSayFor = function (b) {
    this.yield();
    if (this.data == null) {
        for (var c = "", d = 0; d < b.length - 1; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
        this.data = Date.now() + parseFloat(this.evaluateExpression(b[b.length - 1])) * 1E3;
        this.sprite.buttonText = "";
        _doBlockLooksSay(this.sprite, c);
        this.dirty()
    } else if (Date.now() > this.data) {
        _doBlockLooksSay(this.sprite, "");
        this.dirty();
        return false
    }
    return this.skipArgCompute = true
};
Script.prototype.blockLooksSay = function (b) {
    for (var c = "", d = 0; d < b.length; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
    this.dirty();
    this.sprite.buttonText = "";
    _doBlockLooksSay(this.sprite, c);
    return false
};

function _doBlockLooksSay(b, c) {
    if (b.spriteObj) {
        Script._saveBubbleStyle(b.spriteObj, b);
        if (b.spriteObj.bubble.style == "thought-block") b.spriteObj.bubble.style = "rounded";
        b.spriteObj.bubble.offset = b.avatarid ? true : false;
        b.spriteObj.text = c
    } else {
        Script._saveBubbleStyle(Runtime.stage, Runtime.background);
        Runtime.stage.text = c
    }
}
Script.prototype.blockLooksThinkFor = function (b) {
    this.yield();
    if (this.data == null) {
        if (this.sprite.spriteObj) {
            Script._saveBubbleStyle(this.sprite.spriteObj, this.sprite);
            this.sprite.spriteObj.bubble.style = "thought-block";
            this.sprite.spriteObj.bubble.offset = this.sprite.avatarid ? true : false
        } else {
            Script._saveBubbleStyle(Runtime.stage, this.sprite);
            Runtime.stage.bubble.style = "thought-block"
        }
        for (var c = "", d = 0; d < b.length - 1; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
        this.data = Date.now() + parseFloat(this.evaluateExpression(b[b.length -
            1])) * 1E3;
        this.sprite.spriteObj ? this.sprite.spriteObj.text = c : Runtime.stage.text = c;
        this.dirty()
    } else if (Date.now() > this.data) {
        this.sprite.spriteObj ? this.sprite.spriteObj.text = "" : Runtime.stage.text = "";
        this.dirty();
        return false
    }
    return this.skipArgCompute = true
};
Script.prototype.blockLooksThink = function (b) {
    if (this.sprite.spriteObj) {
        Script._saveBubbleStyle(this.sprite.spriteObj, this.sprite);
        this.sprite.spriteObj.bubble.style = "thought";
        this.sprite.spriteObj.bubble.offset = this.sprite.avatarid ? true : false
    } else {
        Script._saveBubbleStyle(Runtime.stage, this.sprite);
        Runtime.stage.bubble.style = "thought"
    }
    for (var c = "", d = 0; d < b.length; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.text = c
    } else Runtime.stage.text =
        c;
    return false
};
Script.prototype.blockLooksChangeEffect = function (b) {
    this.dirty();
    var c = this.evaluateExpression(b[0]),
        b = parseFloat(this.evaluateExpression(b[1]));
    switch (c) {
        case "color":
            c = "hue";
            break;
        case "fisheye":
            c = "lensdistortion";
            break;
        case "whirl":
            c = "twirl";
            break;
        case "ghost":
        case "opacity":
            c = "opacity"
    }
    var d = this.sprite.getFilter(c);
    d ? this.blockLooksSetEffect([c, (d.options.value + b) % 100]) : this.blockLooksSetEffect([c, b]);
    return false
};
Script.prototype.blockLooksSetEffect = function (b) {
    this.dirty();
    _doBlockLooksSetEffect(this.sprite, this.evaluateExpression(b[0]), this.evaluateExpression(b[1]));
    return false
};

function _doBlockLooksSetEffect(b, c, d) {
    d = parseFloat(d) % 100;
    d < 0 && (d = d + 100);
    switch (c) {
        case "color":
        case "hue":
            b.setFilter("hue", {
                value: d,
                amount: (d - 50) / 50
            });
            return true;
        case "fisheye":
        case "lensdistortion":
            b.setFilter("lensdistortion", {
                value: d,
                refraction: Math.max(1, Math.min(10, d * 10 / 100)),
                radius: Math.max(1, b.spriteObj ? Math.max(b.spriteObj.width, b.spriteObj.height) / 2 : Math.max(Runtime.stage.getWidth(), Runtime.stage.getHeight()) / 2)
            });
            return true;
        case "whirl":
        case "twirl":
            b.setFilter("twirl", {
                value: d,
                radius: Math.max(1,
                    b.spriteObj ? Math.max(b.spriteObj.width, b.spriteObj.height) / 2 : Math.max(Runtime.stage.getWidth(), Runtime.stage.getHeight()) / 2),
                angle: d * 359 / 100
            });
            return true;
        case "pixelate":
            b.setFilter("pixelate", {
                value: d,
                size: Math.max(1, d * 50 / 100)
            });
            return true;
        case "mosaic":
            return true;
        case "brightness":
            b.setFilter("brightness", {
                value: d,
                amount: (d - 50) / 50
            });
            return true;
        case "blur":
            b.setFilter("blur", {
                value: d,
                amount: d * 10 / 100
            });
            return true;
        case "bump":
            b.setFilter("bump", {
                value: d
            });
            return true;
        case "circlesmear":
            b.setFilter("circlesmear", {
                value: d,
                size: d * 9 / 100 + 1,
                density: 0.5,
                mix: 0.5
            });
            return true;
        case "contrast":
            b.setFilter("contrast", {
                value: d,
                amount: d * 2 / 100
            });
            return true;
        case "crosssmear":
            new CrossSmearFilter;
            b.setFilter("crosssmear", {
                value: d,
                distance: d * 30 / 100,
                density: 0.5,
                mix: 0.5
            });
            return true;
        case "diffusion":
            b.setFilter("diffusion", {
                value: d,
                scale: d * 99 / 100 + 1
            });
            return true;
        case "dither":
            b.setFilter("dither", {
                value: d,
                levels: d * 28 / 100 + 2
            });
            return true;
        case "edge":
            b.setFilter("edge", {
                value: d
            });
            return true;
        case "emboss":
            b.setFilter("emboss", {
                value: d,
                height: 1,
                angle: 135,
                elevation: 30
            });
            return true;
        case "exposure":
            b.setFilter("exposure", {
                value: d,
                exposure: d * 5 / 100
            });
            return true;
        case "gain":
            b.setFilter("gain", {
                value: d,
                gain: d / 100,
                bias: d / 100
            });
            return true;
        case "gamma":
            b.setFilter("gamma", {
                value: d,
                amount: d * 2 / 100
            });
            return true;
        case "grayscale":
            b.setFilter("grayscale", {
                value: d
            });
            return true;
        case "invert":
            b.setFilter("invert", {
                value: d
            });
            return true;
        case "kaleidoscope":
            b.setFilter("kaleidoscope", {
                value: d,
                angle: 0,
                rotation: d * 359 / 100,
                sides: 6
            });
            return true;
        case "linesmear":
            b.setFilter("linesmear", {
                value: d,
                distance: d * 29 / 100 + 1,
                density: 0.5,
                angle: 0,
                mix: 0.5
            });
            return true;
        case "maximum":
            b.setFilter("maximum", {
                value: d
            });
            return true;
        case "median":
            b.setFilter("median", {
                value: d
            });
            return true;
        case "minimum":
            b.setFilter("minimum", {
                value: d
            });
            return true;
        case "noise":
            b.setFilter("noise", {
                value: d,
                amount: d,
                density: 1,
                monochrome: true
            });
            return true;
        case "oil":
            b.setFilter("oil", {
                value: d,
                range: d * 5 / 100
            });
            return true;
        case "ghost":
        case "opacity":
            b.setFilter("opacity", {
                value: d,
                amount: d / 100
            });
            return true;
        case "pinch":
            b.setFilter("pinch", {
                value: d,
                amount: (d - 50) / 100,
                radius: Math.max(1, b.spriteObj ? Math.max(b.spriteObj.width, b.spriteObj.height) / 2 : Math.max(Runtime.stage.getWidth(), Runtime.stage.getHeight()) / 2),
                angle: 0
            });
            return true;
        case "posterize":
            b.setFilter("posterize", {
                value: d,
                levels: d * 28 / 100 + 2
            });
            return true;
        case "rgbadjust":
            b.setFilter("rgbadjust", {
                value: d,
                red: d * 2 / 100,
                green: d * 2 / 100,
                blue: d * 2 / 100
            });
            return true;
        case "saturation":
            b.setFilter("saturation", {
                value: d,
                amount: d * 2 / 100
            });
            return true;
        case "sawtoothripple":
            b.setFilter("sawtoothripple", {
                value: d,
                xAmplitude: d * 30 / 100,
                yAmplitude: d * 30 / 100,
                xWavelength: 16,
                yWavelength: 16
            });
            return true;
        case "sepia":
            b.setFilter("sepia", {
                value: d,
                amount: d * 30 / 100
            });
            return true;
        case "sharpen":
            b.setFilter("sharpen", {});
            return true;
        case "sineripple":
            b.setFilter("sineripple", {
                value: d,
                xAmplitude: d * 30 / 100,
                yAmplitude: d * 30 / 100,
                xWavelength: 16,
                yWavelength: 16
            });
            return true;
        case "solarize":
            b.setFilter("solarize", {
                value: d
            });
            return true;
        case "sparkle":
            b.setFilter("sparkle", {
                value: d,
                rays: 50,
                size: 25,
                amount: d,
                randomness: 25
            });
            return true;
        case "squaresmear":
            b.setFilter("squaresmear", {
                value: d,
                size: d * 10 / 100 + 1,
                density: 0.5,
                mix: 0.5
            });
            return true;
        case "threshold":
            b.setFilter("threshold", {
                value: d,
                threshold: d * 255 / 100
            });
            return true;
        case "triangleripple":
            b.setFilter("triangleripple", {
                value: d,
                xAmplitude: d * 30 / 100,
                yAmplitude: d * 30 / 100,
                xWavelength: 16,
                yWavelength: 16
            });
            return true;
        case "vignette":
            b.setFilter("vignette", {
                value: d,
                amount: d / 100
            });
            return true;
        case "waterripple":
            b.setFilter("waterripple", {
                value: d,
                phase: d,
                radius: Math.max(1, b.spriteObj ? Math.max(b.spriteObj.width, b.spriteObj.height) / 2 : Math.max(Runtime.stage.getWidth(), Runtime.stage.getHeight()) / 2),
                wavelength: 16,
                amplitude: 10
            });
            return true
    }
    return false
}
Script.prototype.blockLooksClearEffects = function () {
    this.dirty();
    this.sprite.spriteObj ? this.sprite.spriteObj.alpha = 1 : Runtime.stage.backgroundLayer.alpha = 1;
    this.sprite.clearFilters();
    return false
};
Script.prototype.blockLooksChangeSizeBy = function (b) {
    var c = this.sprite.spriteObj;
    if (c) {
        this.dirty();
        b = c.scale.x * 100 + parseInt(this.evaluateExpression(b[0]));
        _doBlockLooksSetSize(this.sprite, b)
    }
    return false
};
Script.prototype.blockLooksSetSize = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        _doBlockLooksSetSize(this.sprite, this.evaluateExpression(b[0]))
    }
    return false
};

function _doBlockLooksSetSize(b, c) {
    if (b.spriteObj) {
        var d = parseFloat(c) / 100;
        d < 1.0E-4 && (d = 1.0E-4);
        b.spriteObj.setScale(d)
    }
}
Script.prototype.valueLooksSize = function () {
    var b = this.sprite.spriteObj;
    return b ? Math.floor(b.scale.x * 100) : 0
};
Script.prototype.blockLooksShow = function () {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.show()
    }
    return false
};
Script.prototype.blockLooksHide = function () {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.hide()
    }
    return false
};
Script.prototype.valueLooksIsHidden = function () {
    return this.sprite.spriteObj ? !this.sprite.spriteObj.visible : false
};
Script.prototype.blockLooksLayer = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.setZIndex(parseInt(this.evaluateExpression(b[0])))
    }
    return false
};
Script.prototype.valueLooksLayer = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.zIndex : 0
};
Script.prototype.blockLooksGoFront = function () {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.moveToTop()
    }
    return false
};
Script.prototype.blockLooksGoBack = function () {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.moveToBottom()
    }
    return false
};
Script.prototype.blockLooksMoveBack = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.moveBack(parseInt(this.evaluateExpression(b[0])))
    }
    return false
};
Script.prototype.blockLooksMoveFront = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.moveFront(parseInt(this.evaluateExpression(b[0])))
    }
    return false
};
Script.prototype.blockLooksBackgroundColor = function (b) {
    (b = this.evaluateExpression(b[0])) ? $("#stage-canvas").css("background-color", b) : $("#stage-canvas").css("background-color", "#fff")
};
Script.prototype.blockLooksSwitchBackground = function (b) {
    Runtime.background.setCostumeByName("" + this.evaluateExpression(b[0]));
    for (var b = Runtime.background.getCostumeByName(Runtime.background.currentCostume)[1].name, c = 0; c < Runtime.sceneChanges.length; c++) {
        var d = Runtime.sceneChanges[c].scriptBlock.label.getSocketAtChild(0);
        d != null && ("" + d.label == b || "" + d.label == "any") && Runtime.scheduleToRun(Runtime.sceneChanges[c])
    }
    return false
};
Script.prototype.blockLooksSwitchBackgroundAndWait = function (b) {
    this.yield();
    if (this.data == null) {
        Runtime.background.setCostumeByName("" + this.evaluateExpression(b[0]));
        var c = Runtime.background.getCostumeByName(Runtime.background.currentCostume)[1].name;
        this.data = c;
        for (b = 0; b < Runtime.sceneChanges.length; b++) {
            var d = Runtime.sceneChanges[b].scriptBlock.label.getSocketAtChild(0);
            d != null && (("" + d.label == c || "" + d.label == "any") && !Runtime.sceneChanges[b].running) && Runtime.scheduleToRun(Runtime.sceneChanges[b])
        }
        return this.skipArgCompute =
            true
    }
    c = false;
    for (b = 0; b < Runtime.runningScripts.length; b++) {
        var e = Runtime.runningScripts[b];
        if (e.scriptBlock.func == "registerBackgroundChange") {
            d = e.scriptBlock.label.getSocketAtChild(0);
            if (d != null && ("" + d.label == this.data || this.data == "any") && e.running) {
                c = true;
                break
            }
        }
    }
    if (c) return this.skipArgCompute = true;
    return false
};
Script.prototype.blockLooksNextBackground = function () {
    this.dirty();
    var b = Runtime.background.getCostumes(),
        c = Runtime.background.getCostumeByName(Runtime.background.currentCostume),
        d = 0;
    c && (d = (c[0] + 1) % b.length);
    Runtime.background.setCostumeByName(d + 1);
    if (b = Runtime.background.getCostumeByName(Runtime.background.currentCostume)) {
        b = b[1].name;
        for (c = 0; c < Runtime.sceneChanges.length; c++) {
            d = Runtime.sceneChanges[c].scriptBlock.label.getSocketAtChild(0);
            d != null && ("" + d.label == b || d.label == "any") && Runtime.scheduleToRun(Runtime.sceneChanges[c])
        }
    }
    return false
};
Script.prototype.blockLooksFirstBackgroundInGroup = function (b) {
    var c = this.evaluateExpression(b[0]);
    this.dirty();
    var d = Runtime.background.getCostumes();
    Runtime.background.getCostumeByName(Runtime.background.currentCostume);
    for (var e = 0, b = 0; b < d.length; b++)
        if (d[b].name.substring(0, c.length) == c) {
            e = b;
            break
        }
    Runtime.background.setCostumeByName(e + 1);
    c = Runtime.background.getCostumeByName(Runtime.background.currentCostume)[1].name;
    for (b = 0; b < Runtime.sceneChanges.length; b++) {
        d = Runtime.sceneChanges[b].scriptBlock.label.getSocketAtChild(0);
        d != null && ("" + d.label == c || d.label == "any") && Runtime.scheduleToRun(Runtime.sceneChanges[b])
    }
    return false
};
Script.prototype.blockLooksNextBackgroundInGroup = function (b) {
    var c = this.evaluateExpression(b[0]);
    this.dirty();
    var d = Runtime.background.getCostumes(),
        b = Runtime.background.getCostumeByName(Runtime.background.currentCostume),
        e = 0;
    if (b && b[1].name.substring(0, c.length) == c)
        for (var b = e = (b[0] + 1) % d.length, f = 0; f < d.length; b++, f++) {
            if (d[b % d.length].name.substring(0, c.length) == c) {
                e = b % d.length;
                break
            }
        } else
        for (b = 0; b < d.length; b++)
            if (d[b].name.substring(0, c.length) == c) {
                e = b;
                break
            }
    Runtime.background.setCostumeByName(e +
        1);
    c = Runtime.background.getCostumeByName(Runtime.background.currentCostume)[1].name;
    for (b = 0; b < Runtime.sceneChanges.length; b++) {
        d = Runtime.sceneChanges[b].scriptBlock.label.getSocketAtChild(0);
        d != null && ("" + d.label == c || d.label == "any") && Runtime.scheduleToRun(Runtime.sceneChanges[b])
    }
    return false
};
Script.prototype.valueLooksBackground = function () {
    return Runtime.background.getCostumeByName(Runtime.background.currentCostume)[0] + 1
};
Script.prototype.valueLooksBackgroundName = function () {
    return Runtime.background.getCostumeByName(Runtime.background.currentCostume)[1].name
};
Script.prototype.blockLooksVideo = function (b) {
    b = this.evaluateExpression(b[0]);
    $(Runtime.stage.videoLayer.canvas).css("opacity", 1);
    b == "on" ? MediaCapture.showVideo($("#webcam")[0], Runtime.stage.videoLayer.canvas, false) : b == "on-flipped" ? MediaCapture.showVideo($("#webcam")[0], Runtime.stage.videoLayer.canvas, true) : b == "off" && MediaCapture.hideVideo();
    return false
};
Script.prototype.blockLooksVideoTransparency = function (b) {
    this.dirty();
    b = parseFloat(this.evaluateExpression(b[0])) / 100;
    b < 0 ? $(Runtime.stage.videoLayer.canvas).css("opacity", 0) : b > 1 ? $(Runtime.stage.videoLayer.canvas).css("opacity", 1) : $(Runtime.stage.videoLayer.canvas).css("opacity", b);
    return false
};
Script.prototype.blockLooksDialog = function (b) {
    this.dirty();
    this.yield();
    if (this.data == null) {
        this.data = true;
        Runtime.askTriggerText = "";
        var c = $('<a href="#" class="btnDefaultOrange">OK</a>');
        c.click(function () {
            showInfoPopup();
            Runtime.askTriggerText = "continue";
            return false
        });
        b = this.evaluateExpression(b[0]);
        b.indexOf("<p>") < 0 && (b = "<p>" + b + "</p>");
        showInfoPopup(b, null, c, false, true);
        return this.skipArgCompute = true
    }
    if (!Runtime.askTriggerText) return this.skipArgCompute = true;
    Runtime.askTriggerText = "";
    return false
};
Script.prototype.blockLooksViewportCamera = function (b) {
    this.dirty();
    var c = null,
        b = this.evaluateExpression(b[0]);
    if (b == "stage") c = null;
    else if (b == "self") c = this.sprite.spriteObj;
    else if (c = Sprites.getSpriteByName(b)) c = c.spriteObj;
    c && Runtime.stage.tileLayer.setCamera(c);
    return false
};
Script.prototype.blockLooksPromptChoices = function (b) {
    this.dirty();
    this.yield();
    if (this.data == null) {
        this.data = true;
        for (var c = Runtime.askTriggerText = "", d = 1; d < b.length; d++) c = c ? c + (' <a href="#" class="btnDefaultWhite medium">' + this.evaluateExpression(b[d]) + "</a>") : '<a href="#" class="btnDefaultOrange medium">' + this.evaluateExpression(b[d]) + "</a>";
        c = $(c);
        c.length > 1 ? c.siblings("a").click(function () {
            showInfoPopup();
            Runtime.askTriggerText = $(this).text();
            return false
        }) : c.click(function () {
            showInfoPopup();
            Runtime.askTriggerText =
                $(this).text();
            return false
        });
        b = this.evaluateExpression(b[0]);
        b.indexOf("<p>") < 0 && (b = "<p>" + b + "</p>");
        showInfoPopup(b, null, c, false, true);
        return this.skipArgCompute = true
    }
    if (!Runtime.askTriggerText) return this.skipArgCompute = true;
    this.dlgAnswer = Runtime.askTriggerText;
    Runtime.askTriggerText = "";
    return false
};
Script.prototype.blockMotionMove = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = this.sprite.spriteObj,
            d = c.x,
            e = c.y,
            f = c.rotation * Math.PI / 180,
            g = parseFloat(this.evaluateExpression(b[0])),
            b = Math.cos(f) * g,
            f = Math.sin(f) * g;
        c.move(b, f);
        if (this.sprite.penDown) {
            c = Runtime.stage.penLayer.context;
            c.save();
            c.beginPath();
            c.strokeStyle = this.sprite.penColor;
            c.lineWidth = this.sprite.penWidth;
            c.lineCap = "round";
            c.moveTo(d, e);
            c.lineTo(d + b, e + f);
            c.stroke();
            c.closePath();
            c.restore()
        }
    }
    return false
};
Script.prototype.blockMotionTurnCW = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.rotate(parseFloat(this.evaluateExpression(b[0])))
    }
    return false
};
Script.prototype.blockMotionTurnCCW = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.sprite.spriteObj.rotate(-parseFloat(this.evaluateExpression(b[0])))
    }
    return false
};
Script.prototype.blockMotionPointDirection = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        _doBlockMotionPointDirection(this.sprite, this.evaluateExpression(b[0]))
    }
    return false
};
Script.prototype.blockMotionPointAngle = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        b = 360 - parseFloat(this.evaluateExpression(b[0]));
        _doBlockMotionPointDirection(this.sprite, b + 90)
    }
    return false
};

function _doBlockMotionPointDirection(b, c) {
    b.spriteObj.setRotation(-(90 - parseFloat(c)))
}
Script.prototype.blockMotionPointTowards = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        b = this.evaluateExpression(b[0]);
        if (b == "mouse-pointer") (b = Runtime.stage.getMousePos()) && (this.sprite.spriteObj.x != b.x && this.sprite.spriteObj.y != b.y) && this.sprite.spriteObj.setRotation(-Math.atan2(this.sprite.spriteObj.y - b.y, b.x - this.sprite.spriteObj.x) * 180 / Math.PI);
        else {
            if (b == "left edge") return this.sprite.spriteObj.setRotation(-(90 - (this.sprite.spriteObj.x > 0 ? -90 : 90)));
            if (b == "right edge") return this.sprite.spriteObj.setRotation(-(90 -
                (this.sprite.spriteObj.x < Runtime.stage.getWidth() ? 90 : -90)));
            if (b == "top edge") return this.sprite.spriteObj.setRotation(-(90 - (this.sprite.spriteObj.y > 0 ? 0 : 180)));
            if (b == "bottom edge") return this.sprite.spriteObj.setRotation(-(90 - (this.sprite.spriteObj.y < Runtime.stage.getHeight() ? 180 : 0)));
            for (var c = 0; c < Runtime.sprites.length; c++) {
                var d = Runtime.sprites[c];
                if (b == d.label) {
                    this.sprite.spriteObj.x != d.spriteObj.x && this.sprite.spriteObj.y != d.spriteObj.y && this.sprite.spriteObj.setRotation(-Math.atan2(this.sprite.spriteObj.y -
                        d.spriteObj.y, d.spriteObj.x - this.sprite.spriteObj.x) * 180 / Math.PI);
                    break
                }
            }
        }
    }
    return false
};
Script.prototype.blockMotionGoTo = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = this.sprite.spriteObj,
            d = c.x,
            e = c.y,
            f = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0])),
            b = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        c.setPosition(f, b);
        if (this.sprite.penDown) {
            c = Runtime.stage.penLayer.context;
            c.save();
            c.beginPath();
            c.strokeStyle = this.sprite.penColor;
            c.lineWidth = this.sprite.penWidth;
            c.lineCap = "round";
            c.moveTo(d, e);
            c.lineTo(f, b);
            c.stroke();
            c.closePath();
            c.restore()
        }
    }
    return false
};
Script.prototype.blockMotionGoTowards = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = this.sprite.spriteObj,
            d = c.x,
            e = c.y,
            f = d,
            g = e,
            b = this.evaluateExpression(b[0]);
        if (b == "mouse-pointer") {
            if (b = Runtime.stage.getMousePos()) {
                f = b.x;
                g = b.y
            }
        } else if (b == "left edge") f = 0;
        else if (b == "right edge") f = Runtime.stage.getWidth();
        else if (b == "top edge") g = 0;
        else if (b == "bottom edge") g = Runtime.stage.getHeight();
        else
            for (var h = 0; h < Runtime.sprites.length; h++) {
                var j = Runtime.sprites[h];
                if (b == j.label) {
                    f = j.spriteObj.x;
                    g =
                        j.spriteObj.y;
                    break
                }
            }
        c.setPosition(f, g);
        if (this.sprite.penDown) {
            c = Runtime.stage.penLayer.context;
            c.save();
            c.beginPath();
            c.strokeStyle = this.sprite.penColor;
            c.lineWidth = this.sprite.penWidth;
            c.lineCap = "round";
            c.moveTo(d, e);
            c.lineTo(f, g);
            c.stroke();
            c.closePath();
            c.restore()
        }
    }
    return false
};
Script.prototype.blockMotionGlide = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.yield();
        if (this.data == null) {
            var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
            if (c > 0) {
                this.data = {
                    startTime: Date.now(),
                    timeout: c,
                    origPosX: this.sprite.spriteObj.x,
                    origPosY: this.sprite.spriteObj.y,
                    finalPosX: Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[1])),
                    finalPosY: Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[2]))
                };
                return this.skipArgCompute = true
            }
        } else {
            b = Date.now();
            if (b -
                this.data.startTime < this.data.timeout) {
                var c = this.sprite.spriteObj.x,
                    d = this.sprite.spriteObj.y,
                    e = this.data.origPosX + (this.data.finalPosX - this.data.origPosX) * (b - this.data.startTime) / this.data.timeout,
                    f = this.data.origPosY + (this.data.finalPosY - this.data.origPosY) * (b - this.data.startTime) / this.data.timeout;
                this.sprite.spriteObj.setPosition(e, f);
                if (this.sprite.penDown) {
                    b = Runtime.stage.penLayer.context;
                    b.save();
                    b.beginPath();
                    b.strokeStyle = this.sprite.penColor;
                    b.lineWidth = this.sprite.penWidth;
                    b.lineCap = "round";
                    b.moveTo(c, d);
                    b.lineTo(e, f);
                    b.stroke();
                    b.closePath();
                    b.restore()
                }
                return this.skipArgCompute = true
            }
            this.sprite.spriteObj.setPosition(this.data.finalPosX, this.data.finalPosY);
            if (this.sprite.penDown) {
                b = Runtime.stage.penLayer.context;
                b.save();
                b.beginPath();
                b.strokeStyle = this.sprite.penColor;
                b.lineWidth = this.sprite.penWidth;
                b.lineCap = "round";
                b.moveTo(c, d);
                b.lineTo(e, f);
                b.stroke();
                b.closePath();
                b.restore()
            }
        }
    }
    return false
};
Script.prototype.blockMotionChangeXBy = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = this.sprite.spriteObj,
            d = c.x,
            e = c.y,
            b = parseFloat(this.evaluateExpression(b[0]));
        c.move(b, 0);
        if (this.sprite.penDown) {
            c = Runtime.stage.penLayer.context;
            c.save();
            c.beginPath();
            c.strokeStyle = this.sprite.penColor;
            c.lineWidth = this.sprite.penWidth;
            c.lineCap = "round";
            c.moveTo(d, e);
            c.lineTo(d + b, e);
            c.stroke();
            c.closePath();
            c.restore()
        }
    }
    return false
};
Script.prototype.blockMotionSetX = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        _doBlockMotionSetX(this.sprite, this.evaluateExpression(b[0]))
    }
    return false
};

function _doBlockMotionSetX(b, c) {
    if (b.spriteObj) {
        var d = b.spriteObj,
            e = d.x,
            f = d.y,
            g = Runtime.stage.getWidth() / 2 + parseFloat(c);
        d.setPosition(g, f);
        if (b.penDown) {
            d = Runtime.stage.penLayer.context;
            d.save();
            d.beginPath();
            d.strokeStyle = b.penColor;
            d.lineWidth = b.penWidth;
            d.lineCap = "round";
            d.moveTo(e, f);
            d.lineTo(g, f);
            d.stroke();
            d.closePath();
            d.restore()
        }
    }
}
Script.prototype.blockMotionChangeYBy = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = this.sprite.spriteObj,
            d = c.x,
            e = c.y,
            b = -parseFloat(this.evaluateExpression(b[0]));
        c.move(0, b);
        if (this.sprite.penDown) {
            c = Runtime.stage.penLayer.context;
            c.save();
            c.beginPath();
            c.strokeStyle = this.sprite.penColor;
            c.lineWidth = this.sprite.penWidth;
            c.lineCap = "round";
            c.moveTo(d, e);
            c.lineTo(d, e + b);
            c.stroke();
            c.closePath();
            c.restore()
        }
    }
    return false
};
Script.prototype.blockMotionSetY = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        _doBlockMotionSetY(this.sprite, this.evaluateExpression(b[0]))
    }
    return false
};

function _doBlockMotionSetY(b, c) {
    if (b.spriteObj) {
        var d = b.spriteObj,
            e = d.x,
            f = d.y,
            g = Runtime.stage.getHeight() / 2 - parseFloat(c);
        d.setPosition(e, g);
        if (b.penDown) {
            d = Runtime.stage.penLayer.context;
            d.save();
            d.beginPath();
            d.strokeStyle = b.penColor;
            d.lineWidth = b.penWidth;
            d.lineCap = "round";
            d.moveTo(e, f);
            d.lineTo(e, g);
            d.stroke();
            d.closePath();
            d.restore()
        }
    }
}
Script.prototype.blockMotionBounceOnEdge = function () {
    if (this.sprite.spriteObj) {
        this.dirty();
        var b = this.sprite.spriteObj;
        if (b.x - b.cx * b.scale.x < 0) {
            b.rotation > 90 && b.rotation < 270 && b.setRotation(180 - b.rotation);
            b.setPosition(b.cx * b.scale.x, b.y)
        } else if (b.y - b.cy * b.scale.y < 0) {
            b.rotation > 180 && b.setRotation(-b.rotation);
            b.setPosition(b.x, b.cy * b.scale.y)
        } else if (b.x + (-b.cx + b.width) * b.scale.x > Runtime.stage.getWidth()) {
            (b.rotation < 90 || b.rotation > 270) && b.setRotation(180 - b.rotation);
            b.setPosition(Runtime.stage.getWidth() +
                (b.cx - b.width) * b.scale.x, b.y)
        } else if (b.y + (-b.cy + b.height) * b.scale.y > Runtime.stage.getHeight()) {
            b.rotation < 180 && b.setRotation(-b.rotation);
            b.setPosition(b.x, Runtime.stage.getHeight() + (b.cy - b.height) * b.scale.y)
        }
    }
    return false
};
Script.prototype.blockMotionRotationStyle = function (b) {
    if (this.sprite.spriteObj) {
        b = this.evaluateExpression(b[0]);
        b == "left-right" ? this.sprite.spriteObj.rotateLock != 1 && this.sprite.spriteObj.setRotateLock(1) : b == "don't rotate" ? this.sprite.spriteObj.rotateLock != 2 && this.sprite.spriteObj.setRotateLock(2) : this.sprite.spriteObj.rotateLock !== 0 && this.sprite.spriteObj.setRotateLock(0)
    }
    return false
};
Script.prototype.valueMotionXPosition = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.x - Runtime.stage.getWidth() / 2 : 0
};
Script.prototype.valueMotionYPosition = function () {
    return this.sprite.spriteObj ? Runtime.stage.getHeight() / 2 - this.sprite.spriteObj.y : 0
};
Script.prototype.valueMotionDirection = function () {
    if (this.sprite.spriteObj) {
        var b = (this.sprite.spriteObj.rotation + 90) % 360;
        b > 180 && (b = b - 360);
        return b
    }
    return 0
};
Script.prototype.valueMotionAngle = function () {
    if (this.sprite.spriteObj) {
        var b = this.sprite.spriteObj.rotation;
        return (360 - b % 360) % 360
    }
    return 0
};
Script.prototype.blockMotionMotorOnFor = function (b) {
    console.log("unimplemented blockMotorOnFor:" + this.evaluateExpression(b[0]));
    this.yield();
    return false
};
Script.prototype.blockMotionMotorOn = function () {
    console.log("unimplemented blockMotorOn");
    this.yield();
    return false
};
Script.prototype.blockMotionMotorOn = function () {
    console.log("unimplemented blockMotorOff");
    this.yield();
    return false
};
Script.prototype.blockMotionMotorPower = function (b) {
    console.log("unimplemented blockMotorPower:" + this.evaluateExpression(b[0]));
    this.yield();
    return false
};
Script.prototype.blockMotionMotorDirection = function (b) {
    console.log("unimplemented blockMotorDirection:" + this.evaluateExpression(b[0]));
    this.yield();
    return false
};
Script.prototype.registerAnimationDone = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.animationTriggers.length; c++)
            if (Runtime.animationTriggers[c] == this) {
                b = true;
                break
            }
        b || Runtime.animationTriggers.push(this)
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        Runtime.animationTriggers.push(this)
    }
    return false
};
Script.prototype.blockAnimationSimpleMoveBy = function (b) {
    return this.blockAnimationMoveBy([b[2], b[0], b[1], null, b[3]])
};
Script.prototype.blockAnimationMoveBy = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
        if (c > 0) {
            c = {
                animation: "moveBy",
                name: this.evaluateExpression(b[4]),
                startTime: 0,
                timeout: c,
                lastX: 0,
                lastY: 0,
                deltaX: parseFloat(this.evaluateExpression(b[1])),
                deltaY: parseFloat(this.evaluateExpression(b[2])),
                easing: Easing.easeLinear
            };
            b = this.evaluateExpression(b[3]);
            if (Easing[b]) c.easing = Easing[b];
            this.sprite.addAnimation(c)
        }
    }
};
Script.prototype.blockAnimationSimpleMoveTo = function (b) {
    return this.blockAnimationMoveTo([b[2], b[0], b[1], null, b[3]])
};
Script.prototype.blockAnimationMoveTo = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
        if (c > 0) {
            c = {
                animation: "moveTo",
                name: this.evaluateExpression(b[4]),
                startTime: 0,
                timeout: c,
                origPosX: this.sprite.spriteObj.x,
                origPosY: this.sprite.spriteObj.y,
                finalPosX: Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[1])),
                finalPosY: Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[2])),
                easing: Easing.easeLinear
            };
            b = this.evaluateExpression(b[3]);
            if (Easing[b]) c.easing = Easing[b];
            this.sprite.addAnimation(c)
        }
    }
};
Script.prototype.blockAnimationSimpleScaleBy = function (b) {
    return this.blockAnimationScaleBy([b[1], b[0], null, b[2]])
};
Script.prototype.blockAnimationScaleBy = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
        if (c > 0) {
            c = {
                animation: "scaleTo",
                name: this.evaluateExpression(b[3]),
                startTime: 0,
                timeout: c,
                origScale: this.sprite.spriteObj.scale.x,
                finalScale: this.sprite.spriteObj.scale.x + parseFloat(this.evaluateExpression(b[1])) / 100,
                easing: Easing.easeLinear
            };
            b = this.evaluateExpression(b[2]);
            if (Easing[b]) c.easing = Easing[b];
            this.sprite.addAnimation(c)
        }
    }
};
Script.prototype.blockAnimationSimpleScaleTo = function (b) {
    return this.blockAnimationScaleTo([b[1], b[0], null, b[2]])
};
Script.prototype.blockAnimationScaleTo = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
        if (c > 0) {
            c = {
                animation: "scaleTo",
                name: this.evaluateExpression(b[3]),
                startTime: 0,
                timeout: c,
                origScale: this.sprite.spriteObj.scale.x,
                finalScale: parseFloat(this.evaluateExpression(b[1])) / 100,
                easing: Easing.easeLinear
            };
            if (c.finalScale < 1.0E-4) c.finalScale = 1.0E-4;
            b = this.evaluateExpression(b[2]);
            if (Easing[b]) c.easing = Easing[b];
            this.sprite.addAnimation(c)
        }
    }
};
Script.prototype.blockAnimationSimpleRotateBy = function (b) {
    return this.blockAnimationRotateBy([b[1], b[0], null, b[2]])
};
Script.prototype.blockAnimationRotateBy = function (b) {
    var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
    if (c > 0) {
        c = {
            animation: "rotateBy",
            name: this.evaluateExpression(b[3]),
            startTime: 0,
            timeout: c,
            origAngle: this.sprite.spriteObj.rotation,
            deltaAngle: parseFloat(this.evaluateExpression(b[1])),
            easing: Easing.easeLinear
        };
        b = this.evaluateExpression(b[2]);
        if (Easing[b]) c.easing = Easing[b];
        this.sprite.addAnimation(c)
    }
};
Script.prototype.blockAnimationSimpleRotateTo = function (b) {
    return this.blockAnimationRotateTo([b[1], b[0], null, b[2]])
};
Script.prototype.blockAnimationRotateTo = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
        if (c > 0) {
            c = {
                animation: "rotateBy",
                name: this.evaluateExpression(b[3]),
                startTime: 0,
                timeout: c,
                origAngle: this.sprite.spriteObj.rotation,
                deltaAngle: parseFloat(this.evaluateExpression(b[1])),
                easing: Easing.easeLinear
            };
            b = this.evaluateExpression(b[2]);
            if (Easing[b]) c.easing = Easing[b];
            c.origAngle = c.origAngle > 0 ? c.origAngle % 360 : c.origAngle % -360;
            c.deltaAngle = (c.deltaAngle -
                c.origAngle) % 360;
            this.sprite.addAnimation(c)
        }
    }
};
Script.prototype.blockAnimationSimpleBezierBy = function (b) {
    return this.blockAnimationBezierBy([b[6], b[0], b[1], b[2], b[3], b[4], b[5], null, b[7]])
};
Script.prototype.blockAnimationBezierBy = function (b) {
    var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
    if (c > 0) {
        c = {
            animation: "bezierTo",
            name: this.evaluateExpression(b[8]),
            startTime: 0,
            timeout: c,
            sX: this.sprite.spriteObj.x,
            sY: this.sprite.spriteObj.y,
            eX: this.sprite.spriteObj.x + parseFloat(this.evaluateExpression(b[1])),
            eY: this.sprite.spriteObj.y - parseFloat(this.evaluateExpression(b[2])),
            c1X: this.sprite.spriteObj.x + parseFloat(this.evaluateExpression(b[3])),
            c1Y: this.sprite.spriteObj.y - parseFloat(this.evaluateExpression(b[4])),
            c2X: this.sprite.spriteObj.x + parseFloat(this.evaluateExpression(b[5])),
            c2Y: this.sprite.spriteObj.y - parseFloat(this.evaluateExpression(b[6])),
            easing: Easing.easeLinear
        };
        b = this.evaluateExpression(b[7]);
        if (Easing[b]) c.easing = Easing[b];
        this.sprite.addAnimation(c)
    }
};
Script.prototype.blockAnimationSimpleBezierTo = function (b) {
    return this.blockAnimationBezierTo([b[6], b[0], b[1], b[2], b[3], b[4], b[5], null, b[7]])
};
Script.prototype.blockAnimationBezierTo = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
        if (c > 0) {
            c = {
                animation: "bezierTo",
                name: this.evaluateExpression(b[8]),
                startTime: 0,
                timeout: c,
                sX: this.sprite.spriteObj.x,
                sY: this.sprite.spriteObj.y,
                eX: Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[1])),
                eY: Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[2])),
                c1X: Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[3])),
                c1Y: Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[4])),
                c2X: Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[5])),
                c2Y: Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[6])),
                easing: Easing.easeLinear
            };
            b = this.evaluateExpression(b[7]);
            if (Easing[b]) c.easing = Easing[b];
            this.sprite.addAnimation(c)
        }
    }
};
Script.prototype.blockAnimationSimpleEffectBy = function (b) {
    return this.blockAnimationEffectBy([b[2], b[0], b[1], null, b[3]])
};
Script.prototype.blockAnimationEffectBy = function (b) {
    var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
    if (c > 0) {
        var d = 0,
            e = this.evaluateExpression(b[1]);
        e == "ghost" && (e = "opacity");
        var f = this.sprite.getFilter(e);
        if (f) d = f.options.value;
        c = {
            animation: "effectTo",
            name: this.evaluateExpression(b[4]),
            startTime: 0,
            timeout: c,
            filter: e,
            origValue: d,
            finalValue: d + parseFloat(this.evaluateExpression(b[2])),
            easing: Easing.easeLinear
        };
        b = this.evaluateExpression(b[3]);
        if (Easing[b]) c.easing = Easing[b];
        this.sprite.addAnimation(c)
    }
};
Script.prototype.blockAnimationSimpleEffectTo = function (b) {
    return this.blockAnimationEffectTo([b[2], b[0], b[1], null, b[3]])
};
Script.prototype.blockAnimationEffectTo = function (b) {
    var c = parseFloat(this.evaluateExpression(b[0])) * 1E3;
    if (c > 0) {
        var d = 0,
            e = this.evaluateExpression(b[1]);
        e == "ghost" && (e = "opacity");
        var f = this.sprite.getFilter(e);
        if (f) d = f.options.value;
        c = {
            animation: "effectTo",
            name: this.evaluateExpression(b[4]),
            startTime: 0,
            timeout: c,
            filter: e,
            origValue: d,
            finalValue: parseFloat(this.evaluateExpression(b[2])),
            easing: Easing.easeLinear
        };
        b = this.evaluateExpression(b[3]);
        if (Easing[b]) c.easing = Easing[b];
        this.sprite.addAnimation(c)
    }
};
Script.prototype.blockAnimationAnimate = function (b) {
    return this.blockAnimationSwitchCostume([b[2], b[1], b[0], null, b[3]])
};
Script.prototype.blockAnimationSwitchCostume = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var c = parseFloat(this.evaluateExpression(b[0])) * 1E3,
            c = {
                animation: "costume",
                name: this.evaluateExpression(b[4]),
                startTime: 0,
                timeout: c,
                fps: parseFloat(this.evaluateExpression(b[1])),
                costumePrefix: this.evaluateExpression(b[2]),
                numCostumes: 0,
                lastFrame: 0,
                easing: Easing.easeLinear
            },
            b = this.evaluateExpression(b[3]);
        if (Easing[b]) c.easing = Easing[b];
        var d = false;
        if (this.sprite.skeleton.skeletonData)
            for (var e = this.sprite.skeleton.skeletonData.animations,
                    b = 0; b < e.length; b++)
                if (e[b].name == c.costumePrefix) {
                    c.numCostumes = -1;
                    d = true;
                    break
                }
        if (!d) {
            d = this.sprite.getCostumes();
            for (b = 0; b < d.length; b++) d[b].name.indexOf(c.costumePrefix) === 0 && c.numCostumes++
        }
        this.sprite.addAnimation(c)
    }
};
Script.prototype.blockAnimationSetSpeed = function (b) {
    this.sprite.animationSpeed = parseInt(this.evaluateExpression(b[0])) * 30 / 100
};
Script.prototype.blockAnimationSimpleSwitchCostume = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        var b = {
            animation: "costume",
            name: null,
            startTime: 0,
            timeout: -1E3,
            fps: this.sprite.animationSpeed,
            costumePrefix: this.evaluateExpression(b[0]),
            numCostumes: 0,
            lastFrame: 0,
            easing: Easing.easeLinear
        },
            c = false;
        if (this.sprite.skeleton.skeletonData)
            for (var d = this.sprite.skeleton.skeletonData.animations, e = 0; e < d.length; e++)
                if (d[e].name == b.costumePrefix) {
                    b.numCostumes = -1;
                    b.timeout = d[e].duration * 3E4 / b.fps;
                    c = true;
                    break
                }
        if (!c) {
            c =
                this.sprite.getCostumes();
            for (e = 0; e < c.length; e++) c[e].name.indexOf(b.costumePrefix) === 0 && b.numCostumes++;
            b.timeout = b.numCostumes * 1E3 / b.fps
        }
        this.sprite.addAnimation(b)
    }
};
Script.prototype.blockAnimationSimpleSwitchCostumeAndWait = function (b) {
    if (this.sprite.spriteObj) {
        this.dirty();
        this.yield();
        if (this.data == null) {
            var b = this.evaluateExpression(b[0]),
                c = false;
            if (this.sprite.skeleton.skeletonData)
                for (var d = this.sprite.skeleton.skeletonData.animations, e = 0; e < d.length; e++)
                    if (d[e].name == b) {
                        for (var c = true, f = 0; f < this.sprite.animations.length; f++) {
                            var g = this.sprite.animations[f];
                            g.animation == "costume" && this.sprite.removeAnimation(g)
                        }
                        this.data = {
                            startTime: Date.now(),
                            timeout: d[e].duration *
                                3E4 / this.sprite.animationSpeed,
                            numCostumes: -1,
                            costumePrefix: b
                        };
                        this.sprite.skeleton.lastTime = this.data.startTime;
                        this.sprite.setCostumeByName(b);
                        break
                    }
            if (!c) {
                c = 0;
                d = this.sprite.getCostumes();
                for (e = 0; e < d.length; e++) d[e].name.indexOf(b) === 0 && c++;
                this.data = {
                    startTime: Date.now(),
                    timeout: c * 1E3 / this.sprite.animationSpeed,
                    numCostumes: c,
                    costumePrefix: b
                }
            }
            return this.skipArgCompute = true
        }
        b = this.data;
        e = Date.now() - b.startTime;
        if (e < b.timeout && this.sprite.skeleton.animationName == b.costumePrefix) {
            if (this.sprite.skeleton.skeletonData &&
                !this.sprite.spriteObj.isImage()) {
                this.sprite.updateSkeleton();
                this.sprite.setCostumeByName(b.costumePrefix)
            } else {
                e = Math.floor(this.sprite.animationSpeed / 1E3 * e);
                if (e != b.lastFrame) {
                    this.sprite.nextCostumeInGroup(b.costumePrefix, (e - b.lastFrame - 1) % b.numCostumes);
                    b.lastFrame = e
                }
            }
            return this.skipArgCompute = true
        }
    }
    return false
};
Script.prototype.valueLooksGetCharacterPart = function (b) {
    if (this.sprite.skeleton.state) {
        b = this.evaluateExpression(b[0]);
        if (b == "All") {
            if (this.sprite.skeleton.type && this.sprite.skeleton.parts) return {
                type: this.sprite.skeleton.type,
                parts: this.sprite.skeleton.parts
            }
        } else if (b == "type") {
            if (this.sprite.skeleton.type && this.sprite.skeleton.parts) return this.sprite.skeleton.type
        } else {
            var c = g_parts[this.sprite.skeleton.type];
            c.macros[b] && (b = c.macros[b][0]);
            var d;
            this.sprite.skeleton.showParts && (d = this.sprite.skeleton.showParts[b]);
            d || (d = this.sprite.skeleton.parts[b]);
            if (d) return d
        }
    }
    return "blank"
};
Script.prototype.blockLooksSetCharacterPart = function (b) {
    if (this.sprite.skeleton.state) {
        var c = this.evaluateExpression(b[0]),
            b = this.evaluateExpression(b[1]);
        if (c == "All" && b && b.type && b.parts) this.sprite.loadSkeleton(b.type, b.parts);
        else {
            var d = g_parts[this.sprite.skeleton.type].macros[c];
            d || (d = [c]);
            for (var e = 0; e < d.length; e++) {
                var c = d[e],
                    f = g_parts[this.sprite.skeleton.type].options[c];
                if (f && f.indexOf(b) >= 0) {
                    var g = this.sprite;
                    if (f = g_parts[g.skeleton.type].parts[c]) {
                        if (!g.skeleton.showParts) g.skeleton.showParts = {};
                        g.skeleton.showParts[c] = b;
                        if (b == "blank")
                            for (c = 0; c < f.length; c++) {
                                var h = new Image;
                                h.onload = function () {
                                    g.updateSkeleton();
                                    Runtime.stage.draw()
                                };
                                h.src = Sprites._blankImg;
                                g.skeleton.textures[f[c]] = h
                            } else
                            for (c = 0; c < f.length; c++) {
                                h = new Image;
                                h.onload = function () {
                                    g.updateSkeleton();
                                    Runtime.stage.draw()
                                };
                                h.src = "ide/avatar/skins/" + this.sprite.skeleton.type + "/" + b + "/" + f[c] + ".png";
                                g.skeleton.textures[f[c]] = h
                            }
                    }
                } else if (b == "reset") {
                    g = this.sprite;
                    delete g.skeleton.showParts;
                    if (f = g_parts[g.skeleton.type].parts[c]) {
                        var j =
                            g.skeleton.parts[c];
                        if (j == "blank")
                            for (c = 0; c < f.length; c++) {
                                h = new Image;
                                h.onload = function () {
                                    g.updateSkeleton();
                                    Runtime.stage.draw()
                                };
                                h.src = Sprites._blankImg;
                                g.skeleton.textures[f[c]] = h
                            } else
                            for (c = 0; c < f.length; c++) {
                                h = new Image;
                                h.onload = function () {
                                    g.updateSkeleton();
                                    Runtime.stage.draw()
                                };
                                h.src = "ide/avatar/skins/" + this.sprite.skeleton.type + "/" + j + "/" + f[c] + ".png";
                                g.skeleton.textures[f[c]] = h
                            }
                    }
                } else {
                    g = this.sprite;
                    if (f = g_parts[g.skeleton.type].parts[c])
                        for (c = 0; c < f.length; c++) {
                            h = new Image;
                            h.onload = function () {
                                g.updateSkeleton();
                                Runtime.stage.draw()
                            };
                            h.src = Sprites._blankImg;
                            g.skeleton.textures[f[c]] = h
                        }
                }
            }
        }
    }
};
Script.prototype.blockAnimationWaitFor = function (b) {
    this.yield();
    b = this.evaluateExpression(b[0]);
    return b == "all" && this.sprite.getNumAnimations() > 0 || this.sprite.getNumAnimations(b) > 0 ? true : false
};
Script.prototype.valueAnimationTime = function (b) {
    b = this.evaluateExpression(b[0]);
    if (this.sprite.skeleton.skeletonData)
        for (var c = this.sprite.skeleton.skeletonData.animations, d = 0; d < c.length; d++)
            if (c[d].name == b) return c[d].duration * 30 / this.sprite.animationSpeed;
    for (var c = 0, e = this.sprite.getCostumes(), d = 0; d < e.length; d++) e[d].name.indexOf(b) === 0 && c++;
    return c / this.sprite.animationSpeed
};
Script.prototype.valueAnimationIsRunning = function (b) {
    b = this.evaluateExpression(b[0]);
    return (b == "all" || b == "any") && this.sprite.getNumAnimations() > 0 || this.sprite.getNumAnimations(b) > 0 ? true : false
};
Script.prototype.blockAnimationStop = function (b) {
    var c = this.evaluateExpression(b[0]);
    if (c == "all") {
        c = {};
        for (b = this.sprite.animations.length - 1; b >= 0; b--) {
            var d = this.sprite.animations[b];
            c[d.name] = true
        }
        this.sprite.animations.length = 0;
        for (var e in c) Runtime.triggerAnimationDone(e, this.sprite)
    } else {
        e = 0;
        for (b = this.sprite.animations.length - 1; b >= 0; b--) {
            d = this.sprite.animations[b];
            if (d.name == c) {
                this.sprite.removeAnimation(d);
                e++
            }
        }
        e > 0 && Runtime.triggerAnimationDone(c, this.sprite)
    }
    return false
};
Sprite.prototype.animateMoveBy = function (b) {
    var c = this.spriteObj.x,
        d = this.spriteObj.y;
    if (!b.startTime) b.startTime = Date.now();
    var e = Date.now() - b.startTime;
    if (e < b.timeout) {
        var f = b.easing(e, 0, b.deltaX, b.timeout),
            e = b.easing(e, 0, b.deltaY, b.timeout);
        this.spriteObj.setPosition(c + (f - b.lastX), d - (e - b.lastY));
        b.lastX = f;
        b.lastY = e;
        if (this.penDown) {
            b = Runtime.stage.penLayer.context;
            b.save();
            b.beginPath();
            b.strokeStyle = this.penColor;
            b.lineWidth = this.penWidth;
            b.lineCap = "round";
            b.moveTo(c, d);
            b.lineTo(this.spriteObj.x,
                this.spriteObj.y);
            b.stroke();
            b.closePath();
            b.restore()
        }
        return false
    }
    f = b.deltaX - b.lastX;
    e = b.deltaY - b.lastY;
    this.spriteObj.setPosition(c + f, d - e);
    this.removeAnimation(b.name);
    if (this.penDown) {
        b = Runtime.stage.penLayer.context;
        b.save();
        b.beginPath();
        b.strokeStyle = this.penColor;
        b.lineWidth = this.penWidth;
        b.lineCap = "round";
        b.moveTo(c, d);
        b.lineTo(this.spriteObj.x, this.spriteObj.y);
        b.stroke();
        b.closePath();
        b.restore()
    }
    return true
};
Sprite.prototype.animateMoveTo = function (b) {
    var c = this.spriteObj.x,
        d = this.spriteObj.y;
    if (!b.startTime) b.startTime = Date.now();
    var e = Date.now() - b.startTime;
    if (e < b.timeout) {
        var f = b.origPosX;
        b.finalPosX != f && (f = b.easing(e, f, b.finalPosX - f, b.timeout));
        var g = b.origPosY;
        b.finalPosY != g && (g = b.easing(e, g, b.finalPosY - g, b.timeout));
        this.spriteObj.setPosition(f, g);
        if (this.penDown) {
            b = Runtime.stage.penLayer.context;
            b.save();
            b.beginPath();
            b.strokeStyle = this.penColor;
            b.lineWidth = this.penWidth;
            b.lineCap = "round";
            b.moveTo(c,
                d);
            b.lineTo(f, g);
            b.stroke();
            b.closePath();
            b.restore()
        }
        return false
    }
    f = b.finalPosX;
    g = b.finalPosY;
    this.spriteObj.setPosition(b.finalPosX, b.finalPosY);
    this.removeAnimation(b.name);
    if (this.penDown) {
        b = Runtime.stage.penLayer.context;
        b.save();
        b.beginPath();
        b.strokeStyle = this.penColor;
        b.lineWidth = this.penWidth;
        b.lineCap = "round";
        b.moveTo(c, d);
        b.lineTo(f, g);
        b.stroke();
        b.closePath();
        b.restore()
    }
    return true
};
Sprite.prototype.animateScaleTo = function (b) {
    if (!b.startTime) b.startTime = Date.now();
    var c = Date.now() - b.startTime;
    if (c < b.timeout) {
        var d = b.origScale;
        if (b.finalScale != d) {
            d = b.easing(c, d, b.finalScale - d, b.timeout);
            this.spriteObj.setScale(d)
        }
        return false
    }
    this.spriteObj.setScale(b.finalScale);
    return true
};
Sprite.prototype.animateRotateBy = function (b) {
    if (!b.startTime) b.startTime = Date.now();
    var c = Date.now() - b.startTime;
    if (c < b.timeout) {
        var d = b.origAngle;
        if (b.deltaAngle != 0) {
            d = b.easing(c, d, b.deltaAngle, b.timeout);
            this.spriteObj.setRotation(d)
        }
        return false
    }
    this.spriteObj.setRotation(b.origAngle + b.deltaAngle);
    return true
};

function bezierAt(b, c, d, e, f) {
    return Math.pow(1 - f, 3) * b + 3 * f * Math.pow(1 - f, 2) * c + 3 * Math.pow(f, 2) * (1 - f) * d + Math.pow(f, 3) * e
}
Sprite.prototype.animateBezierTo = function (b) {
    if (!b.startTime) b.startTime = Date.now();
    var c = Date.now() - b.startTime;
    if (c < b.timeout) {
        var d = this.spriteObj.x,
            e = this.spriteObj.y,
            f = b.easing(c, 0, 1, b.timeout),
            g = bezierAt(b.sX, b.c1X, b.c2X, b.eX, f),
            f = bezierAt(b.sY, b.c1Y, b.c2Y, b.eY, f);
        this.spriteObj.setPosition(g, f);
        if (this.penDown) {
            b = Runtime.stage.penLayer.context;
            b.save();
            b.beginPath();
            b.strokeStyle = this.penColor;
            b.lineWidth = this.penWidth;
            b.lineCap = "round";
            b.moveTo(d, e);
            b.lineTo(g, f);
            b.stroke();
            b.closePath();
            b.restore()
        }
        return false
    }
    this.spriteObj.setPosition(b.eX, b.eY);
    if (this.penDown) {
        b = Runtime.stage.penLayer.context;
        b.save();
        b.beginPath();
        b.strokeStyle = this.penColor;
        b.lineWidth = this.penWidth;
        b.lineCap = "round";
        b.moveTo(d, e);
        b.lineTo(g, f);
        b.stroke();
        b.closePath();
        b.restore()
    }
    return true
};
Sprite.prototype.animateEffectTo = function (b) {
    if (!b.startTime) b.startTime = Date.now();
    var c = Date.now() - b.startTime;
    if (c < b.timeout) {
        var d = 0,
            e = this.getFilter(b.filter);
        if (e) d = e.options.value;
        e = b.origValue;
        if (b.finalValue != d) {
            e = b.easing(c, e, b.finalValue - e, b.timeout);
            _doBlockLooksSetEffect(this, b.filter, e)
        }
        return false
    }
    _doBlockLooksSetEffect(this, b.filter, b.finalValue);
    return true
};
Sprite.prototype.animateSwitchCostume = function (b) {
    if (!b.startTime) {
        b.startTime = Date.now();
        this.skeleton.lastTime = b.startTime
    }
    var c = Date.now() - b.startTime;
    if (b.timeout < 0 || c < b.timeout) {
        this.animationSpeed = b.fps;
        if (this.skeleton.skeletonData && !this.spriteObj.isImage()) {
            this.updateSkeleton();
            this.setCostumeByName(b.costumePrefix)
        } else {
            c = Math.floor(this.animationSpeed / 1E3 * c);
            if (c != b.lastFrame) {
                this.nextCostumeInGroup(b.costumePrefix, (c - b.lastFrame - 1) % b.numCostumes);
                b.lastFrame = c
            }
        }
        return false
    }
    return true
};
var Easing = {
    easeLinear: function (b, c, d, e) {
        return d * (b / e) + c
    },
    easeInQuad: function (b, c, d, e) {
        return d * (b = b / e) * b + c
    },
    easeOutQuad: function (b, c, d, e) {
        return -d * (b = b / e) * (b - 2) + c
    },
    easeInOutQuad: function (b, c, d, e) {
        return (b = b / (e / 2)) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (b, c, d, e) {
        return d * (b = b / e) * b * b + c
    },
    easeOutCubic: function (b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (b, c, d, e) {
        return (b = b / (e / 2)) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b = b - 2) * b * b + 2) + c
    },
    easeInQuart: function (b, c, d, e) {
        return d * (b = b / e) * b *
            b * b + c
    },
    easeOutQuart: function (b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (b, c, d, e) {
        return (b = b / (e / 2)) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b = b - 2) * b * b * b - 2) + c
    },
    easeInQuint: function (b, c, d, e) {
        return d * (b = b / e) * b * b * b * b + c
    },
    easeOutQuint: function (b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (b, c, d, e) {
        return (b = b / (e / 2)) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b = b - 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (b, c, d, e) {
        return d * Math.sin(b /
            e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExponential: function (b, c, d, e) {
        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExponential: function (b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExponential: function (b, c, d, e) {
        return b == 0 ? c : b == e ? c + d : (b = b / (e / 2)) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (b, c, d, e) {
        return -d * (Math.sqrt(1 - (b = b / e) * b) - 1) + c
    },
    easeOutCirc: function (b, c, d, e) {
        return d * Math.sqrt(1 -
            (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (b, c, d, e) {
        return (b = b / (e / 2)) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b = b - 2) * b) + 1) + c
    },
    easeInElastic: function (b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (b == 0) return c;
        if ((b = b / e) == 1) return c + d;
        g || (g = e * 0.3);
        if (h < Math.abs(d)) {
            h = d;
            f = g / 4
        } else f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b = b - 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
    },
    easeOutElastic: function (b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (b == 0) return c;
        if ((b = b / e) == 1) return c + d;
        g || (g = e * 0.3);
        if (h < Math.abs(d)) {
            h = d;
            f = g / 4
        } else f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInOutElastic: function (b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (b == 0) return c;
        if ((b = b / (e / 2)) == 2) return c + d;
        g || (g = e * 0.3 * 1.5);
        if (h < Math.abs(d)) {
            h = d;
            f = g / 4
        } else f = g / (2 * Math.PI) * Math.asin(d / h);
        return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b = b - 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : h * Math.pow(2, -10 * (b = b - 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * 0.5 + d + c
    },
    easeInBack: function (b, c, d, e, f) {
        f == void 0 && (f = 1.70158);
        return d * (b = b / e) * b * ((f +
            1) * b - f) + c
    },
    easeOutBack: function (b, c, d, e, f) {
        f == void 0 && (f = 1.70158);
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (b, c, d, e, f) {
        f == void 0 && (f = 1.70158);
        return (b = b / (e / 2)) < 1 ? d / 2 * b * b * (((f = f * 1.525) + 1) * b - f) + c : d / 2 * ((b = b - 2) * b * (((f = f * 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (b, c, d, e) {
        return d - Easing.easeOutBounce(e - b, 0, d, e) + c
    },
    easeOutBounce: function (b, c, d, e) {
        return (b = b / e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b = b - 1.5 / 2.75) * b + 0.75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b = b - 2.25 / 2.75) * b + 0.9375) + c : d * (7.5625 *
            (b = b - 2.625 / 2.75) * b + 0.984375) + c
    },
    easeInOutBounce: function (b, c, d, e) {
        return b < e / 2 ? Easing.easeInBounce(b * 2, 0, d, e) * 0.5 + c : Easing.easeOutBounce(b * 2 - e, 0, d, e) * 0.5 + d * 0.5 + c
    }
};
Script.prototype.valueOpAdd = function (b) {
    return valueToNative(this.evaluateExpression(b[0])) + valueToNative(this.evaluateExpression(b[1]))
};
Script.prototype.valueOpSubtract = function (b) {
    return coerceToNumber(this.evaluateExpression(b[0])) - coerceToNumber(this.evaluateExpression(b[1]))
};
Script.prototype.valueOpMultiply = function (b) {
    return coerceToNumber(this.evaluateExpression(b[0])) * coerceToNumber(this.evaluateExpression(b[1]))
};
Script.prototype.valueOpDivide = function (b) {
    return coerceToNumber(this.evaluateExpression(b[0])) / coerceToNumber(this.evaluateExpression(b[1]))
};
Script.prototype.valueOpRandom = function (b) {
    var c = coerceToNumber(this.evaluateExpression(b[0])),
        b = coerceToNumber(this.evaluateExpression(b[1]));
    if (c > b) var d = c,
        c = b,
        b = d;
    return Math.floor(c) == c && Math.floor(b) == b ? Math.floor(Math.random() * (b - c + 1) + c) : Math.random() * (b - c) + c
};
Script.prototype.valueOpLess = function (b) {
    return this.evaluateExpression(b[0]) < this.evaluateExpression(b[1])
};
Script.prototype.valueOpEqual = function (b) {
    return this.evaluateExpression(b[0]) == this.evaluateExpression(b[1])
};
Script.prototype.valueOpGreater = function (b) {
    return this.evaluateExpression(b[0]) > this.evaluateExpression(b[1])
};
Script.prototype.valueOpAnd = function (b) {
    return this.evaluateExpression(b[0]) && this.evaluateExpression(b[1])
};
Script.prototype.valueOpOr = function (b) {
    return this.evaluateExpression(b[0]) || this.evaluateExpression(b[1])
};
Script.prototype.valueOpNot = function (b) {
    return !this.evaluateExpression(b[0])
};
Script.prototype.valueOpBitNot = function (b) {
    return ~parseInt(this.evaluateExpression(b[0]))
};
Script.prototype.valueOpJoin = function (b) {
    for (var c = "", d = 0; d < b.length; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
    return c
};
Script.prototype.valueOpLetter = function (b) {
    var c = Math.floor(coerceToNumber(this.evaluateExpression(b[0]))),
        b = "" + ifArrayMakeString(this.evaluateExpression(b[1]));
    return c - 1 < 0 || c > b.length ? "" : b.charAt(c - 1)
};
Script.prototype.valueOpLength = function (b) {
    var b = this.evaluateExpression(b[0]),
        c = ("" + ifArrayMakeString(b)).length;
    if (c === 0) c = ("" + b).length;
    return c
};
Script.prototype.valueOpMod = function (b) {
    return Math.floor(coerceToNumber(this.evaluateExpression(b[0]))) % Math.floor(coerceToNumber(this.evaluateExpression(b[1])))
};
Script.prototype.valueOpRound = function (b) {
    return Math.round(coerceToNumber(this.evaluateExpression(b[0])))
};
Script.prototype.valueOpMath = function (b) {
    var c = coerceToNumber(this.evaluateExpression(b[1]));
    switch (this.evaluateExpression(b[0])) {
        case "abs":
            return Math.abs(c);
        case "floor":
            return Math.floor(c);
        case "ceiling":
            return Math.ceil(c);
        case "round":
            return Math.round(c);
        case "int":
            return parseInt(c);
        case "sqrt":
            return Math.sqrt(c);
        case "sin":
            return Math.sin(c * Math.PI / 180);
        case "cos":
            return Math.cos(c * Math.PI / 180);
        case "tan":
            return Math.tan(c * Math.PI / 180);
        case "asin":
            return Math.asin(c) * 180 / Math.PI;
        case "acos":
            return Math.acos(c) *
                180 / Math.PI;
        case "atan":
            return Math.atan(c) * 180 / Math.PI;
        case "sinrad":
            return Math.sin(c);
        case "cosrad":
            return Math.cos(c);
        case "tanrad":
            return Math.tan(c);
        case "asinrad":
            return Math.asin(c);
        case "acosrad":
            return Math.acos(c);
        case "atanrad":
            return Math.atan(c);
        case "ln":
            return Math.log(c);
        case "log":
            return Math.log(c) / Math.LN10;
        case "e^":
            return Math.pow(Math.E, c);
        case "10^":
            return Math.pow(10, c);
        case "sign":
            return c < 0 ? -1 : c > 0 ? 1 : 0
    }
    return 0
};
Script.prototype.valueOpMath2 = function (b) {
    var c = coerceToNumber(this.evaluateExpression(b[1])),
        d = coerceToNumber(this.evaluateExpression(b[2]));
    switch (this.evaluateExpression(b[0])) {
        case "atan2":
            return Math.atan2(c, d) * 180 / Math.PI;
        case "atan2rad":
            return Math.atan2(c, d);
        case "max":
            return Math.max(c, d);
        case "min":
            return Math.min(c, d);
        case "pow":
            return Math.pow(c, d)
    }
    return 0
};
Script.prototype.valueOpConstants = function (b) {
    switch (this.evaluateExpression(b[0])) {
        case "pi":
            return Math.PI;
        case "e":
            return Math.E;
        case "ln2":
            return Math.LN2;
        case "ln10":
            return Math.LN10;
        case "log2e":
            return Math.LOG2E;
        case "log10e":
            return Math.LOG10E;
        case "sqrt1/2":
            return Math.SQRT1_2;
        case "sqrt2":
            return Math.SQRT2
    }
    return 0
};
Script.prototype.valueOpBinary = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]),
        b = this.evaluateExpression(b[2]);
    switch (d) {
        case "+":
            return valueToNative(c) + valueToNative(b);
        case "-":
            return coerceToNumber(c) - coerceToNumber(b);
        case "*":
            return coerceToNumber(c) * coerceToNumber(b);
        case "/":
            return coerceToNumber(c) / coerceToNumber(b);
        case "%":
        case "mod":
            return Math.floor(coerceToNumber(c)) % Math.floor(coerceToNumber(b));
        case "=":
        case "==":
            return c == b;
        case "<":
            return c < b;
        case "<=":
            return c <=
                b;
        case ">":
            return c > b;
        case ">=":
            return c >= b;
        case "!=":
            return c != b;
        case "&":
            return parseInt(c) & parseInt(b);
        case "&&":
        case "and":
            return c && b;
        case "|":
            return parseInt(c) | parseInt(b);
        case "||":
        case "or":
            return c || b;
        case "^":
        case "xor":
            return parseInt(c) ^ parseInt(b);
        case "<<":
            return parseInt(c) << parseInt(b);
        case ">>":
            return parseInt(c) >> parseInt(b);
        case ">>>":
            return parseInt(c) >> parseInt(b)
    }
};
Script.prototype.valueOpExpression = function (b) {
    return this.evaluateExpression(b[0])
};
Script.prototype.valueOpTextSplit = function (b) {
    var c = "" + this.evaluateExpression(b[0]),
        b = "" + this.evaluateExpression(b[1]);
    return c.split(b)
};
Script.prototype.valueOpTextReplace = function (b) {
    var c = "" + this.evaluateExpression(b[0]),
        d = "" + this.evaluateExpression(b[1]),
        b = "" + this.evaluateExpression(b[2]);
    return c && d && b ? d.replace(c, b) : c
};
Script.prototype.valueOpTextIndex = function (b) {
    var c = "" + this.evaluateExpression(b[1]),
        b = "" + this.evaluateExpression(b[0]),
        c = c.indexOf(b);
    return c >= 0 ? c + 1 : -1
};
Script.prototype.valueOpTextLastIndex = function (b) {
    var c = "" + this.evaluateExpression(b[1]),
        b = "" + this.evaluateExpression(b[0]),
        c = c.lastIndexOf(b);
    return c >= 0 ? c + 1 : -1
};
Script.prototype.valueOpTextSubstring = function (b) {
    var c = "" + this.evaluateExpression(b[0]),
        d = parseInt(this.evaluateExpression(b[1])) - 1,
        b = parseInt(this.evaluateExpression(b[2])) - 1;
    return b < d ? c.substring(d) : c.substring(d, b)
};
Script.prototype.valueOpTextTransform = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = "" + this.evaluateExpression(b[1]);
    switch (c) {
        case "uppercase":
            b = b.toUpperCase();
            break;
        case "lowercase":
            b = b.toLowerCase();
            break;
        case "trim":
            b = b.trim();
        case "parse":
            try {
                b = JSON.parse(b)
            } catch (d) {
                try {
                    var b = {},
                        e = $($.parseXML(data));
                    _parseXml(obj, e)
                } catch (f) { }
            }
    }
    return b
};
Script.prototype.valueOpTextFormat = function (b) {
    for (var c = 0; c < b.length; c++) b[c] = this.evaluateExpression(b[c]);
    return formatText.apply(null, b)
};
Script.prototype.registerDraw = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.drawTriggers.length; c++)
            if (Runtime.drawTriggers[c] == this) {
                b = true;
                break
            }
        if (!b) {
            this.isDrawEvent = true;
            Runtime.drawTriggers.push(this)
        }
    } else {
        this.scriptId = Runtime.getScriptId();
        this.scriptBlock.scriptid = this.scriptId;
        this.isDrawEvent = this.sprite != Runtime.background;
        Runtime.drawTriggers.push(this)
    }
    return false
};
Script.prototype.blockPenRedraw = function () {
    Runtime.redrawSprite(null);
    return false
};
Script.prototype.blockPenClear = function () {
    Runtime.stage.penLayer.clear();
    return false
};
Script.prototype.blockPenDown = function () {
    if (this.sprite.spriteObj) {
        this.sprite.penDown = true;
        var b = Runtime.stage.penLayer.context;
        b.save();
        b.beginPath();
        b.strokeStyle = this.sprite.penColor;
        b.lineWidth = this.sprite.penWidth;
        b.lineCap = "round";
        b.moveTo(this.sprite.spriteObj.x, this.sprite.spriteObj.y);
        b.lineTo(this.sprite.spriteObj.x + 0.1, this.sprite.spriteObj.y);
        b.stroke();
        b.closePath();
        b.restore()
    }
    return false
};
Script.prototype.blockPenUp = function () {
    if (this.sprite.spriteObj) this.sprite.penDown = false;
    return false
};
Script.prototype.blockPenSetColor = function (b) {
    b = getColorComponents(this.evaluateExpression(b[0]));
    this.sprite.penColor = b[0];
    if (this.sprite.spriteObj) this.sprite.spriteObj.penColor = b[0];
    this.sprite.penHue = b[1];
    this.sprite.penShade = b[2];
    return false
};
Script.prototype.blockPenChangeHue = function (b) {
    this.sprite.penHue = (this.sprite.penHue + parseFloat(this.evaluateExpression(b[0]))) % 200;
    if (this.sprite.penHue < 0) this.sprite.penHue = 200 + this.sprite.penHue;
    if (!this.sprite.penShade) this.sprite.penShade = 0;
    this.blockPenSetShade([this.sprite.penShade]);
    return false
};
Script.prototype.blockPenSetHue = function (b) {
    this.sprite.penHue = parseFloat(this.evaluateExpression(b[0])) % 200;
    if (this.sprite.penHue < 0) this.sprite.penHue = 200 + this.sprite.penHue;
    if (!this.sprite.penShade) this.sprite.penShade = 0;
    this.blockPenSetShade([this.sprite.penShade]);
    return false
};
Script.prototype.blockPenChangeShade = function (b) {
    if (!this.sprite.penShade) this.sprite.penShade = 0;
    this.blockPenSetShade([this.sprite.penShade + parseFloat(this.evaluateExpression(b[0]))]);
    return false
};
Script.prototype.blockPenSetShade = function (b) {
    if (this.sprite.penHue == 0) {
        this.sprite.penShade = parseFloat(this.evaluateExpression(b[0])) % 200;
        b = parseInt(this.sprite.penShade / 200 * 256);
        b = b.toString(16);
        b.length < 2 && (b = "0" + b);
        this.sprite.penColor = "#" + b + b + b
    } else {
        this.sprite.penShade = parseFloat(this.evaluateExpression(b[0])) % 200;
        if (this.sprite.penShade < 0) this.sprite.penShade = 200 + this.sprite.penShade;
        b = this.sprite.penShade > 100 ? 200 - this.sprite.penShade : this.sprite.penShade;
        b = b <= 50 ? hsvToRgb(this.sprite.penHue /
            200, 1, (b + 10) / 60) : hsvToRgb(this.sprite.penHue / 200, (100 - b + 10) / 60, 1);
        b[0] = Math.floor(b[0]).toString(16);
        b[0].length < 2 && (b[0] = "0" + b[0]);
        b[1] = Math.floor(b[1]).toString(16);
        b[1].length < 2 && (b[1] = "0" + b[1]);
        b[2] = Math.floor(b[2]).toString(16);
        b[2].length < 2 && (b[2] = "0" + b[2]);
        this.sprite.penColor = "#" + b[0] + b[1] + b[2]
    }
    if (this.sprite.spriteObj) this.sprite.spriteObj.penColor = this.sprite.penColor;
    return false
};
Script.prototype.blockPenChangeSize = function (b) {
    this.sprite.penWidth = this.sprite.penWidth + parseFloat(this.evaluateExpression(b[0]));
    if (this.sprite.penWidth < 1) this.sprite.penWidth = 1;
    if (this.sprite.spriteObj) this.sprite.spriteObj.penWidth = this.sprite.penWidth;
    return false
};
Script.prototype.blockPenSetSize = function (b) {
    this.sprite.penWidth = parseFloat(this.evaluateExpression(b[0]));
    if (this.sprite.penWidth < 1) this.sprite.penWidth = 1;
    if (this.sprite.spriteObj) this.sprite.spriteObj.penWidth = this.sprite.penWidth;
    return false
};
Script.prototype.blockPenStamp = function () {
    if (this.sprite.spriteObj) {
        for (var b = false, c = 0; c < this.sprite.scripts.length; c++)
            if (this.sprite.scripts[c].func == "registerDraw") {
                b = true;
                break
            }
        if (!b) {
            var d = this.sprite.spriteObj.visible;
            this.sprite.spriteObj.visible = true
        }
        c = this.sprite.spriteObj.selected;
        this.sprite.spriteObj.selected = false;
        this.sprite.spriteObj.draw(Runtime.stage.penLayer);
        this.sprite.spriteObj.selected = c;
        if (!b) this.sprite.spriteObj.visible = d
    }
    return false
};
Script.prototype.blockPenSetFont = function (b) {
    var c = parseFloat(this.evaluateExpression(b[1]));
    c || (c = 18);
    var d = this.evaluateExpression(b[0]);
    d || (d = "normal");
    (b = this.evaluateExpression(b[2])) || (b = "Comic Sans MS,cursive");
    this.sprite.font = d + " " + c + "px " + b;
    if (this.sprite.spriteObj) this.sprite.spriteObj.font = d + " " + c + "px " + b;
    return false
};
Script.prototype.blockPenSetFontColor = function (b) {
    this.sprite.fontColor = this.evaluateExpression(b[0]);
    if (this.sprite.spriteObj) this.sprite.spriteObj.fontColor = this.sprite.fontColor;
    return false
};
Script.prototype.blockPenDrawText = function (b) {
    if (this.sprite.spriteObj) {
        if (!this.sprite.font) this.sprite.font = "normal 18px Comic Sans MS,cursive";
        var c = this.isDrawEvent ? Runtime.stage.drawLayer.context : Runtime.stage.penLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock ==
            1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var b = ifArrayMakeString(this.evaluateExpression(b[0])),
            d = c.measureText(b).width * 2,
            e = parseFloat(this.sprite.font.split(" ")[1]) * 2;
        if (d > this.sprite.spriteObj.drawWidth) this.sprite.spriteObj.drawWidth = d;
        if (e > this.sprite.spriteObj.drawHeight) this.sprite.spriteObj.drawHeight = e;
        c.beginPath();
        c.strokeStyle = this.sprite.penColor;
        c.fillStyle = this.sprite.fontColor ? this.sprite.fontColor : this.sprite.penColor;
        c.lineWidth = this.sprite.penWidth;
        c.textAlign = "left";
        c.font = this.sprite.font;
        c.fillText(b, 0, 0);
        c.closePath();
        c.restore()
    }
    return false
};
Script.prototype.blockPenSetFillColor = function (b) {
    this.sprite.fillColor = getColorComponents(this.evaluateExpression(b[0]))[0];
    return false
};
Script.prototype.blockPenSetNoFill = function () {
    this.sprite.fillColor = "";
    return false
};
Script.prototype.blockPenDrawBezier = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            f = -parseFloat(this.evaluateExpression(b[1])),
            g = parseFloat(this.evaluateExpression(b[2])),
            h = -parseFloat(this.evaluateExpression(b[3])),
            j = parseFloat(this.evaluateExpression(b[4])),
            k = -parseFloat(this.evaluateExpression(b[5])),
            l = parseFloat(this.evaluateExpression(b[6])),
            b = -parseFloat(this.evaluateExpression(b[7])),
            m = Math.max(Math.abs(e), Math.abs(g)),
            n = Math.max(Math.abs(f), Math.abs(h));
        if (m * 2 > d.drawWidth) d.drawWidth = m * 2;
        if (n * 2 > d.drawHeight) d.drawHeight = n * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        f = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        g = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[2]));
        h = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[3]));
        j = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[4]));
        k = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[5]));
        l = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[6]));
        b =
            Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[7]))
    }
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle = this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.moveTo(e, f);
    c.bezierCurveTo(j, k, l, b, g, h);
    this.sprite.fillColor && c.fill();
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawPoint = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            b = -parseFloat(this.evaluateExpression(b[1])),
            f = Math.abs(e),
            g = Math.abs(b);
        if (f * 2 > d.drawWidth) d.drawWidth = f * 2;
        if (g * 2 > d.drawHeight) d.drawHeight = g * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        b = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]))
    }
    c.strokeStyle = this.sprite.penColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.moveTo(e, b);
    c.lineTo(e + 1, b);
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawLine = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            f = -parseFloat(this.evaluateExpression(b[1])),
            g = parseFloat(this.evaluateExpression(b[2])),
            b = -parseFloat(this.evaluateExpression(b[3])),
            h = Math.max(Math.abs(e), Math.abs(g)),
            j = Math.max(Math.abs(f), Math.abs(b));
        if (h * 2 > d.drawWidth) d.drawWidth = h * 2;
        if (j * 2 > d.drawHeight) d.drawHeight = j * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        f = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        g = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[2]));
        b = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[3]))
    }
    c.strokeStyle = this.sprite.penColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.moveTo(e, f);
    c.lineTo(g, b);
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawRectangle = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            f = -parseFloat(this.evaluateExpression(b[1])),
            g = parseFloat(this.evaluateExpression(b[2])),
            b = parseFloat(this.evaluateExpression(b[3])),
            h = Math.max(Math.abs(e), Math.abs(e + g)),
            j = Math.max(Math.abs(f), Math.abs(f + b));
        if (h * 2 > d.drawWidth) d.drawWidth = h * 2;
        if (j * 2 > d.drawHeight) d.drawHeight = j * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        f = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        g = parseFloat(this.evaluateExpression(b[2]));
        b = parseFloat(this.evaluateExpression(b[3]))
    }
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle = this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.rect(e, f, g, b);
    this.sprite.fillColor && c.fill();
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenClearRect = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            f = -parseFloat(this.evaluateExpression(b[1])),
            g = parseFloat(this.evaluateExpression(b[2])),
            b = parseFloat(this.evaluateExpression(b[3])),
            h = Math.max(Math.abs(e), Math.abs(e + g)),
            j = Math.max(Math.abs(f), Math.abs(f + b));
        if (h * 2 > d.drawWidth) d.drawWidth = h * 2;
        if (j * 2 > d.drawHeight) d.drawHeight = j * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        f = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        g = parseFloat(this.evaluateExpression(b[2]));
        b = parseFloat(this.evaluateExpression(b[3]))
    }
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle = this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.clearRect(e, f, g, b);
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawRectangleLocal = function (b) {
    if (this.isDrawEvent && this.sprite != Runtime.background) return this.blockPenDrawRectangle([0, 0, this.evaluateExpression(b[0]), this.evaluateExpression(b[1])]);
    this.dirty();
    var c = Runtime.stage.penLayer.context;
    c.save();
    var d = this.sprite.spriteObj;
    c.translate(d.x, d.y);
    c.rotate(d.rotation * Math.PI / 180 + Math.PI / 2);
    d = parseFloat(this.evaluateExpression(b[0]));
    b = -parseFloat(this.evaluateExpression(b[1]));
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle =
        this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.rect(0, 0, d, b);
    this.sprite.fillColor && c.fill();
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawTriangle = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            f = -parseFloat(this.evaluateExpression(b[1])),
            g = parseFloat(this.evaluateExpression(b[2])),
            h = -parseFloat(this.evaluateExpression(b[3])),
            j = parseFloat(this.evaluateExpression(b[4])),
            b = -parseFloat(this.evaluateExpression(b[5])),
            k = Math.max(Math.abs(e), Math.max(Math.abs(g), Math.abs(j))),
            l = Math.max(Math.abs(f), Math.max(Math.abs(h), Math.abs(b)));
        if (k * 2 > d.drawWidth) d.drawWidth = k * 2;
        if (l * 2 > d.drawHeight) d.drawHeight = l * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        f = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        g = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[2]));
        h = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[3]));
        j = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[4]));
        b = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[5]))
    }
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle = this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.beginPath();
    c.moveTo(e, f);
    c.lineTo(g, h);
    c.lineTo(j, b);
    c.lineTo(e, f);
    this.sprite.fillColor && c.fill();
    c.stroke();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawEllipse = function (b) {
    this.dirty();
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock == 1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var e = parseFloat(this.evaluateExpression(b[0])),
            f = -parseFloat(this.evaluateExpression(b[1])),
            g = parseFloat(this.evaluateExpression(b[2])),
            b = parseFloat(this.evaluateExpression(b[3])),
            h = Math.max(g, b),
            j = Math.max(Math.abs(e - g / 2), Math.abs(e + g / 2)),
            k = Math.max(Math.abs(f - b / 2), Math.abs(f + b / 2));
        if (j * 2 > d.drawWidth) d.drawWidth = j * 2;
        if (k * 2 > d.drawHeight) d.drawHeight = k * 2
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        e = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[0]));
        f = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[1]));
        g =
            parseFloat(this.evaluateExpression(b[2]));
        b = parseFloat(this.evaluateExpression(b[3]));
        h = Math.max(g, b)
    }
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle = this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.translate(e, f);
    c.scale(g / h, b / h);
    c.beginPath();
    c.arc(0, 0, h / 2, 0, 2 * Math.PI, false);
    c.stroke();
    this.sprite.fillColor && c.fill();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawEllipseLocal = function (b) {
    if (this.isDrawEvent && this.sprite != Runtime.background) return this.blockPenDrawEllipse([0, 0, this.evaluateExpression(b[0]), this.evaluateExpression(b[1])]);
    this.dirty();
    var c = Runtime.stage.penLayer.context;
    c.save();
    var d = this.sprite.spriteObj;
    c.translate(d.x, d.y);
    c.rotate(d.rotation * Math.PI / 180 + Math.PI / 2);
    var d = parseFloat(this.evaluateExpression(b[0])),
        b = parseFloat(this.evaluateExpression(b[1])),
        e = Math.max(d, b);
    c.strokeStyle = this.sprite.penColor;
    if (this.sprite.fillColor) c.fillStyle =
        this.sprite.fillColor;
    c.lineWidth = this.sprite.penWidth;
    c.lineCap = "round";
    c.translate(0, -b / 2);
    c.scale(d / e, b / e);
    c.beginPath();
    c.arc(0, 0, e / 2, 0, 2 * Math.PI, false);
    c.stroke();
    this.sprite.fillColor && c.fill();
    c.closePath();
    c.restore();
    return false
};
Script.prototype.blockPenDrawTextAt = function (b) {
    this.dirty();
    if (!this.sprite.font) this.sprite.font = "normal 16px Arial,Helvetica,sans-serif";
    if (this.isDrawEvent && this.sprite != Runtime.background) {
        var c = Runtime.stage.drawLayer.context;
        c.save();
        var d = this.sprite.spriteObj;
        c.translate(d.x, d.y);
        d.rotation !== 0 && d.rotateLock == 0 && c.rotate(d.rotation * Math.PI / 180);
        d.scale.x != 1 || d.scale.y != 1 ? d.rotateLock == 1 && d.rotation > 90 && d.rotation < 270 ? c.scale(-d.scale.x, d.scale.y) : c.scale(d.scale.x, d.scale.y) : d.rotateLock ==
            1 && (d.rotation > 90 && d.rotation < 270) && c.scale(-1, 1);
        var d = parseFloat(this.evaluateExpression(b[1])),
            e = -parseFloat(this.evaluateExpression(b[2])),
            f = ifArrayMakeString(this.evaluateExpression(b[0])),
            b = c.measureText(f),
            b = Math.max(Math.abs(d), Math.abs(d + b.width)) * 2,
            g = parseFloat(this.sprite.font.split(" ")[1]),
            g = Math.max(Math.abs(e), Math.abs(-e + g)) * 2;
        if (b > this.sprite.spriteObj.drawWidth) this.sprite.spriteObj.drawWidth = b;
        if (g > this.sprite.spriteObj.drawHeight) this.sprite.spriteObj.drawHeight = g
    } else {
        c = Runtime.stage.penLayer.context;
        c.save();
        f = ifArrayMakeString(this.evaluateExpression(b[0]));
        d = Runtime.stage.getWidth() / 2 + parseFloat(this.evaluateExpression(b[1]));
        e = Runtime.stage.getHeight() / 2 - parseFloat(this.evaluateExpression(b[2]))
    }
    c.beginPath();
    c.strokeStyle = this.sprite.penColor;
    c.fillStyle = this.sprite.fillColor ? this.sprite.fontColor : this.sprite.penColor;
    c.lineWidth = this.sprite.penWidth;
    c.textAlign = "left";
    c.font = this.sprite.font;
    c.fillText(f, d, e);
    c.closePath();
    c.restore();
    return false
};
Script.prototype.registerSpriteCollision = function () {
    if (this.scriptId) {
        for (var b = false, c = 0; c < Runtime.collisionTriggers.length; c++)
            if (Runtime.collisionTriggers[c] == this) {
                b = true;
                break
            }
        if (b) return true
    } else this.scriptId = Runtime.getScriptId();
    Runtime.collisionTriggers.push(this);
    return false
};
Script.prototype.valuePhysicsGetProperty = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]);
    if ((b = d == "self" ? this.sprite : Sprites.getSpriteByName(d)) && b.spriteObj) {
        d = b.spriteObj;
        if (d.physicsBody) switch (c) {
            case "density":
                return (c = d.physicsBody.GetFixtureList()) ? c.GetDensity() : 1;
            case "friction":
                return (c = d.physicsBody.GetFixtureList()) ? c.GetFriction() : 0.5;
            case "restitution":
                return (c = d.physicsBody.GetFixtureList()) ? c.GetRestitution() : 0.2;
            case "angular velocity":
                return d.physicsBody.GetAngularVelocity();
            case "angular damping":
                return d.physicsBody.GetAngularDamping();
            case "inertia":
                return d.physicsBody.GetInertia();
            case "is active":
                return d.physicsBody.IsActive();
            case "is awake":
                return d.physicsBody.IsAwake();
            case "linear damping":
                return d.physicsBody.GetLinearDamping();
            case "x linear velocity":
                return d.physicsBody.GetLinearVelocity().x;
            case "y linear velocity":
                return d.physicsBody.GetLinearVelocity().y;
            case "x gravity":
                return Physics.getGravity().x;
            case "y gravity":
                return Physics.getGravity().y;
            case "last collided with":
                return b.lastCollisionName ? b.lastCollisionName : "";
            case "last collision x":
                return b.lastCollisionNormal.x;
            case "last collision y":
                return b.lastCollisionNormal.y;
            case "last actor collided with":
                return b.lastActorCollisionName ? b.lastActorCollisionName : "";
            case "last actor collision x":
                if (b.lastActorCollisionName) return b.lastActorCollisionNormal.x;
                break;
            case "last actor collision y":
                if (b.lastActorCollisionName) return b.lastActorCollisionNormal.y
        }
    } else switch (c) {
        case "density":
            return d ==
                "stage" ? Physics.getStageDensity() : Runtime.stage.tileLayer.getDensity(d);
        case "friction":
            return d == "stage" ? Physics.getStageFriction() : Runtime.stage.tileLayer.getFriction(d);
        case "restitution":
            return d == "stage" ? Physics.getStageRestitution() : Runtime.stage.tileLayer.getRestitution(d);
        case "x gravity":
            return Physics.getGravity().x;
        case "y gravity":
            return Physics.getGravity().y;
        case "is active":
            return d == "stage" ? Physics.isStageActive() : Runtime.stage.tileLayer.isActive(d);
        case "last collided with":
        case "last actor collided with":
            return ""
    }
    return 0
};
Script.prototype.blockPhysicsApply = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]),
        b = parseFloat(this.evaluateExpression(b[2]));
    if (isFinite(b)) {
        var e;
        if ((e = d == "self" ? this.sprite : Sprites.getSpriteByName(d)) && e.spriteObj) {
            d = e.spriteObj;
            switch (c) {
                case "force":
                    c = d.rotation * Math.PI / 180;
                    e = Math.cos(c) * b;
                    b = Math.sin(c) * b;
                    d.physicsBody.ApplyForce(new b2Vec2(e, b), d.physicsBody.GetPosition());
                    break;
                case "impulse":
                    c = d.rotation * Math.PI / 180;
                    e = Math.cos(c) * b;
                    b = Math.sin(c) * b;
                    d.physicsBody.ApplyImpulse(new b2Vec2(e,
                        b), d.physicsBody.GetPosition());
                    break;
                case "torque":
                    d.physicsBody.ApplyTorque(b);
                    break;
                case "density":
                    if (c = d.physicsBody.GetFixtureList()) {
                        c.SetDensity(b);
                        d.physicsBody.ResetMassData()
                    }
                    break;
                case "friction":
                    (c = d.physicsBody.GetFixtureList()) && c.SetFriction(b);
                    break;
                case "restitution":
                    (c = d.physicsBody.GetFixtureList()) && c.SetRestitution(b);
                    break;
                case "angular damping":
                    d.physicsBody.SetAngularDamping(b);
                    break;
                case "angular velocity":
                    d.physicsBody.SetAngularVelocity(b);
                    break;
                case "linear damping":
                    d.physicsBody.SetLinearDamping(b);
                    break;
                case "linear velocity":
                    c = d.rotation * Math.PI / 180;
                    e = Math.cos(c) * b;
                    b = Math.sin(c) * b;
                    d.physicsBody.SetAwake(true);
                    d.physicsBody.SetLinearVelocity(new b2Vec2(e, b))
            }
        } else switch (c) {
            case "density":
                if (d == "stage") Physics.setStageDensity(b);
                else return Runtime.stage.tileLayer.setDensity(d, b);
                break;
            case "friction":
                if (d == "stage") Physics.setStageFriction(b);
                else return Runtime.stage.tileLayer.setFriction(d, b);
                break;
            case "restitution":
                if (d == "stage") Physics.setStageRestitution(b);
                else return Runtime.stage.tileLayer.setRestitution(d,
                    b)
        }
    }
    return false
};
Script.prototype.blockPhysicsApplyXY = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]),
        e = parseFloat(this.evaluateExpression(b[2])),
        b = parseFloat(this.evaluateExpression(b[3]));
    if (isFinite(e) && isFinite(b))
        if ((d = d == "self" ? this.sprite : Sprites.getSpriteByName(d)) && d.spriteObj) {
            d = d.spriteObj;
            switch (c) {
                case "force":
                    d.physicsBody.ApplyForce(new b2Vec2(e, b), d.physicsBody.GetPosition());
                    break;
                case "impulse":
                    d.physicsBody.ApplyImpulse(new b2Vec2(e, b), d.physicsBody.GetPosition());
                    break;
                case "linear velocity":
                    d.physicsBody.SetAwake(true);
                    d.physicsBody.SetLinearVelocity(new b2Vec2(e, b));
                    break;
                case "gravity":
                    Physics.updateGravity(e, b)
            }
        } else switch (c) {
            case "gravity":
                Physics.updateGravity(e, b)
        }
};
Script.prototype.blockPhysicsSetActive = function (b) {
    b = this.evaluateExpression(b[0]);
    this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody ? this.sprite.spriteObj.physicsBody.SetActive(b && b != "false") : console.log(this.sprite.label + "'s physics body was undefined") : Physics.setStageActive(b && b != "false");
    return false
};
Script.prototype.blockPhysicsSetActorActive = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = (b = this.evaluateExpression(b[1])) && b != "false",
        d;
    (d = c == "self" ? this.sprite : Sprites.getSpriteByName(c)) && d.spriteObj ? d.spriteObj.physicsBody.SetActive(b) : c == "stage" ? Physics.setStageActive(b) : Runtime.stage.tileLayer.setActive(c, b);
    return false
};
Script.prototype.blockPhysicsSetStatic = function (b) {
    if (this.sprite.spriteObj) {
        b = this.evaluateExpression(b[0]);
        this.sprite.spriteObj.physicsBody.SetType(b && b != "false" ? b2Body.b2_staticBody : b2Body.b2_dynamicBody)
    }
    return false
};
Script.prototype.blockPhysicsSetActorStatic = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = (b = this.evaluateExpression(b[1])) && b != "false";
    (c = c == "self" ? this.sprite : Sprites.getSpriteByName(c)) && c.spriteObj && c.spriteObj.physicsBody.SetType(b ? b2Body.b2_staticBody : b2Body.b2_dynamicBody);
    return false
};
Script.prototype.blockPhysicsSetGeometry = function (b) {
    this.sprite.spriteObj && Physics.updateBody(this.sprite.spriteObj, {
        geometry: this.evaluateExpression(b[0])
    });
    return false
};
Script.prototype.blockPhysicsSetActorGeometry = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    (c = c == "self" ? this.sprite : Sprites.getSpriteByName(c)) && c.spriteObj && Physics.updateBody(c.spriteObj, {
        geometry: b
    });
    return false
};
Script.prototype.blockPhysicsStart = function () {
    Physics.runSimulation();
    return false
};
Script.prototype.blockPhysicsStop = function () {
    Physics.stopSimulation();
    return false
};
Script.prototype.valuePhysicsCollidedWithSprite = function (b) {
    b = this.evaluateExpression(b[0]);
    return this.sprite.lastCollisionName == b || b == "edge" && this.sprite.lastCollisionName && name.indexOf("edge") == name.length - 4 || b == "any" && lastCollsionName ? true : false
};
Script.prototype.valuePhysicsCollidedWithName = function () {
    return this.sprite.lastActorCollisionName ? this.sprite.lastActorCollisionName : ""
};
Script.prototype.valuePhysicsTouchingActor = function (b) {
    if (this.sprite.spriteObj) {
        var c = null,
            b = this.evaluateExpression(b[0]);
        if (b != "edge" && b != "platform")
            if (b == "any")
                for (b = 0; b < Runtime.sprites.length; b++) {
                    if (Physics.isBodyTouching(this.sprite.spriteObj.physicsBody, Runtime.sprites[b].spriteObj.physicsBody)) return true
                } else c = (c = Sprites.getSpriteByName(b)) ? c.spriteObj.physicsBody : null;
        return Physics.isBodyTouching(this.sprite.spriteObj.physicsBody, c)
    }
    return false
};
Script.prototype.valuePhysicsCollisionVectorX = function () {
    return this.sprite.lastCollisionNormal.x
};
Script.prototype.valuePhysicsCollisionVectorY = function () {
    return this.sprite.lastCollisionNormal.y
};
Script.prototype.valuePhysicsActorCollisionVectorX = function () {
    return this.sprite.lastActorCollisionName ? this.sprite.lastActorCollisionNormal.x : 0
};
Script.prototype.valuePhysicsActorCollisionVectorY = function () {
    return this.sprite.lastActorCollisionName ? this.sprite.lastActorCollisionNormal.y : 0
};
Script.prototype.blockPhysicsApplyForce = function (b) {
    var c = this.sprite.spriteObj;
    if (this.sprite.spriteObj) {
        var d = parseFloat(this.evaluateExpression(b[0]));
        if (isFinite(d)) {
            var e = c.rotation * Math.PI / 180,
                b = Math.cos(e) * d,
                d = Math.sin(e) * d;
            c.physicsBody.ApplyForce(new b2Vec2(b, d), c.physicsBody.GetPosition())
        }
    }
    return false
};
Script.prototype.blockPhysicsApplyImpulse = function (b) {
    var c = this.sprite.spriteObj;
    if (c) {
        var d = parseFloat(this.evaluateExpression(b[0]));
        if (isFinite(d)) {
            var e = c.rotation * Math.PI / 180,
                b = Math.cos(e) * d,
                d = Math.sin(e) * d;
            c.physicsBody.ApplyImpulse(new b2Vec2(b, d), c.physicsBody.GetPosition())
        }
    }
    return false
};
Script.prototype.blockPhysicsApplyForceAngle = function (b) {
    var c = this.sprite.spriteObj;
    if (c) {
        var d = parseFloat(this.evaluateExpression(b[0])),
            b = parseFloat(this.evaluateExpression(b[1]));
        if (isFinite(d) && isFinite(b)) {
            var e = -(90 - b) * Math.PI / 180,
                b = Math.cos(e) * d,
                d = Math.sin(e) * d;
            c.physicsBody.ApplyForce(new b2Vec2(b, d), c.physicsBody.GetPosition())
        }
    }
    return false
};
Script.prototype.blockPhysicsApplyImpulseAngle = function (b) {
    var c = this.sprite.spriteObj;
    if (c) {
        var d = parseFloat(this.evaluateExpression(b[0])),
            b = parseFloat(this.evaluateExpression(b[1]));
        if (isFinite(d) && isFinite(b)) {
            var e = -(90 - b) * Math.PI / 180,
                b = Math.cos(e) * d,
                d = Math.sin(e) * d;
            c.physicsBody.ApplyImpulse(new b2Vec2(b, d), c.physicsBody.GetPosition())
        }
    }
    return false
};
Script.prototype.blockPhysicsApplyForceXY = function (b) {
    var c = this.sprite.spriteObj;
    if (c) {
        var d = parseFloat(this.evaluateExpression(b[0])),
            b = parseFloat(this.evaluateExpression(b[1]));
        isFinite(d) && isFinite(b) && c.physicsBody.ApplyForce(new b2Vec2(d, b), c.physicsBody.GetPosition())
    }
    return false
};
Script.prototype.blockPhysicsApplyImpulseXY = function (b) {
    var c = this.sprite.spriteObj;
    if (c) {
        var d = parseFloat(this.evaluateExpression(b[0])),
            b = parseFloat(this.evaluateExpression(b[1]));
        isFinite(d) && isFinite(b) && c.physicsBody.ApplyImpulse(new b2Vec2(d, b), c.physicsBody.GetPosition())
    }
    return false
};
Script.prototype.blockPhysicsApplyTorque = function (b) {
    if (this.sprite.spriteObj) {
        b = parseFloat(this.evaluateExpression(b[0]));
        isFinite(b) && this.sprite.spriteObj.physicsBody.ApplyTorque(b)
    }
    return false
};
Script.prototype.blockPhysicsSetDensity = function (b) {
    _doBlockPhysicsSetDensity(this.sprite, parseFloat(this.evaluateExpression(b[0])));
    return false
};

function _doBlockPhysicsSetDensity(b, c) {
    if (b.spriteObj) {
        if (isFinite(c)) {
            var d = b.spriteObj.physicsBody.GetFixtureList();
            d && d.SetDensity(c)
        }
    } else isFinite(c) && Physics.setStageDensity(c)
}
Script.prototype.blockPhysicsSetFriction = function (b) {
    _doBlockPhysicsSetFriction(this.sprite, parseFloat(this.evaluateExpression(b[0])));
    return false
};

function _doBlockPhysicsSetFriction(b, c) {
    if (b.spriteObj) {
        if (isFinite(c)) {
            var d = b.spriteObj.physicsBody.GetFixtureList();
            d && d.SetFriction(c)
        }
    } else isFinite(c) && Physics.setStageFriction(c)
}
Script.prototype.blockPhysicsSetRestitution = function (b) {
    _doBlockPhysicsSetRestitution(this.sprite, parseFloat(this.evaluateExpression(b[0])));
    return false
};

function _doBlockPhysicsSetRestitution(b, c) {
    if (b.spriteObj) {
        if (isFinite(c)) {
            var d = b.spriteObj.physicsBody.GetFixtureList();
            d && d.SetRestitution(c)
        }
    } else isFinite(c) && Physics.setStageRestitution(c)
}
Script.prototype.blockPhysicsSetAngularDamping = function (b) {
    _doBlockPhysicsSetAngularDamping(this.sprite, parseFloat(this.evaluateExpression(b[0])));
    return false
};

function _doBlockPhysicsSetAngularDamping(b, c) {
    b.spriteObj && isFinite(c) && b.spriteObj.physicsBody.SetAngularDamping(c)
}
Script.prototype.blockPhysicsSetAngularVelocity = function (b) {
    _doBlockPhysicsSetAngularVelocity(this.sprite, parseFloat(this.evaluateExpression(b[0])));
    return false
};

function _doBlockPhysicsSetAngularVelocity(b, c) {
    b.spriteObj && isFinite(c) && b.spriteObj.physicsBody.SetAngularVelocity(c)
}
Script.prototype.blockPhysicsSetLinearDamping = function (b) {
    _doBlockPhysicsSetLinearDamping(this.sprite, parseFloat(this.evaluateExpression(b[0])));
    return false
};

function _doBlockPhysicsSetLinearDamping(b, c) {
    b.spriteObj && isFinite(c) && b.spriteObj.physicsBody.SetLinearDamping(c)
}
Script.prototype.blockPhysicsSetLinearVelocity = function (b) {
    var c = this.sprite.spriteObj;
    if (this.sprite.spriteObj) {
        var b = parseFloat(this.evaluateExpression(b[0])),
            d = c.rotation * Math.PI / 180,
            c = Math.cos(d) * b,
            b = Math.sin(d) * b;
        _doBlockPhysicsSetLinearVelocity(this.sprite, c, b)
    }
    return false
};
Script.prototype.blockPhysicsSetLinearVelocityXY = function (b) {
    _doBlockPhysicsSetLinearVelocity(this.sprite, parseFloat(this.evaluateExpression(b[0])), parseFloat(this.evaluateExpression(b[1])));
    return false
};

function _doBlockPhysicsSetLinearVelocity(b, c, d) {
    if (b.spriteObj && isFinite(c) && isFinite(d)) {
        b.spriteObj.physicsBody.SetAwake(true);
        b.spriteObj.physicsBody.SetLinearVelocity(new b2Vec2(c, d))
    }
}
Script.prototype.valuePhysicsDensity = function () {
    if (this.sprite.spriteObj) {
        var b = this.sprite.spriteObj.physicsBody.GetFixtureList();
        if (b) return b.GetDensity()
    } else return Physics.getStageDensity();
    return 1
};
Script.prototype.valuePhysicsFriction = function () {
    if (this.sprite.spriteObj) {
        var b = this.sprite.spriteObj.physicsBody.GetFixtureList();
        if (b) return b.GetFriction()
    } else return Physics.getStageFriction();
    return 0.5
};
Script.prototype.valuePhysicsRestitution = function () {
    if (this.sprite.spriteObj) {
        var b = this.sprite.spriteObj.physicsBody.GetFixtureList();
        if (b) return b.GetRestitution()
    } else return Physics.getStageRestitution();
    return 0.2
};
Script.prototype.valuePhysicsAngularVelocity = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.GetAngularVelocity() : 0
};
Script.prototype.valuePhysicsInertia = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.GetInertia() : 0
};
Script.prototype.valuePhysicsXVelocity = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.GetLinearVelocity().x : 0
};
Script.prototype.valuePhysicsYVelocity = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.GetLinearVelocity().y : 0
};
Script.prototype.valuePhysicsIsAwake = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.IsAwake() : 0
};
Script.prototype.valuePhysicsIsActive = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.IsActive() : Physics.isStageActive()
};
Script.prototype.valuePhysicsAngularDamping = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.GetAngularDamping() : 0
};
Script.prototype.valuePhysicsLinearDamping = function () {
    return this.sprite.spriteObj ? this.sprite.spriteObj.physicsBody.GetLinearDamping() : 0
};
Script.prototype.blockPhysicsSetGravity = function (b) {
    _doBlockPhysicsSetGravity(parseFloat(this.evaluateExpression(b[0])), parseFloat(this.evaluateExpression(b[1])));
    return false
};

function _doBlockPhysicsSetGravity(b, c) {
    isFinite(b) && isFinite(c) && Physics.updateGravity(b, c)
}
Script.prototype.valuePhysicsXGravity = function () {
    return Physics.getGravity().x
};
Script.prototype.valuePhysicsYGravity = function () {
    return Physics.getGravity().y
};

function getIntersection(b, c) {
    var d = b.getBounds(),
        e = d.left,
        f = d.top,
        g = d.right,
        h = d.bottom,
        j = c.getBounds(),
        k = j.left,
        l = j.top,
        m = j.right,
        n = j.bottom;
    if (b.visible && c.visible && k < g && m > e && l < h && n > f) {
        e = Math.floor(Math.max(e, k));
        g = Math.floor(Math.min(g, m));
        f = Math.floor(Math.max(f, l));
        h = Math.floor(Math.min(h, n));
        return {
            bounds1: d,
            bounds2: j,
            x: e,
            y: f,
            width: g - e,
            height: h - f
        }
    }
    return null
}

function spriteTouching(b, c) {
    var d = getIntersection(b, c);
    if (d) {
        if (Runtime.aabbCollision || b.drawFunction || c.drawFunction) return true;
        for (var e = b.getBuffer(), f = c.getBuffer(), g = d.bounds1, h = d.bounds2, j = Math.floor(g.right - g.left + 1), k = Math.floor(h.right - h.left + 1), l = Math.floor(d.x - g.left), g = Math.floor(d.y - g.top), m = Math.floor(d.x - h.left), n = g, h = Math.floor(d.y - h.top) ; n < g + d.height; n++, h++)
            for (var q = l, p = m; q < l + d.width; q++, p++) {
                var s = (p + k * h) * 4;
                if (e[(q + j * n) * 4 + 3] && f[s + 3]) return true
            }
    }
    return false
}
Script.prototype.valueSensingTouchingSprite = function (b) {
    if (this.sprite.spriteObj) {
        var c = this.evaluateExpression(b[0]);
        if (c == "edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && (c.left < 0 || c.right > Runtime.stage.getWidth() || c.top < 0 || c.bottom > Runtime.stage.getHeight())
        }
        if (c == "left edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.left < 0
        }
        if (c == "right edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.right > Runtime.stage.getWidth()
        }
        if (c == "top edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.top < 0
        }
        if (c == "bottom edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.bottom > Runtime.stage.getHeight()
        }
        for (var d = 0; d < Runtime.sprites.length; d++) {
            b = Runtime.sprites[d];
            if (c == b.label) return spriteTouching(b.spriteObj, this.sprite.spriteObj);
            if (c == "mouse-pointer") {
                b = this.sprite.spriteObj;
                c = Runtime.stage.getMousePos();
                return b.containsPoint(c.x, c.y)
            }
            if (c == "any" && this.sprite != b && spriteTouching(b.spriteObj, this.sprite.spriteObj)) return true
        }
    }
    return false
};
Script.prototype.valueSensingTouchingCloneOf = function (b) {
    if (this.sprite.spriteObj) {
        var c = this.evaluateExpression(b[0]);
        if (c == "edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && (c.left < 0 || c.right > Runtime.stage.getWidth() || c.top < 0 || c.bottom > Runtime.stage.getHeight())
        }
        if (c == "left edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.left < 0
        }
        if (c == "right edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.right > Runtime.stage.getWidth()
        }
        if (c == "top edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.top < 0
        }
        if (c == "bottom edge") {
            b = this.sprite.spriteObj;
            c = b.getBounds();
            return b.visible && c.bottom > Runtime.stage.getHeight()
        }
        for (var d = 0; d < Runtime.sprites.length; d++) {
            b = Runtime.sprites[d];
            if (c == b.label || c == b.instantiatedFrom) {
                if (spriteTouching(b.spriteObj, this.sprite.spriteObj)) return true
            } else {
                if (c == "mouse-pointer") {
                    b = this.sprite.spriteObj;
                    c = Runtime.stage.getMousePos();
                    return b.containsPoint(c.x, c.y)
                }
                if (c == "any" && this.sprite != b && spriteTouching(b.spriteObj, this.sprite.spriteObj)) return true
            }
        }
    }
    return false
};
Script.prototype.valueSensingTouchedActorName = function () {
    if (this.sprite.spriteObj)
        for (var b = 0; b < Runtime.sprites.length; b++) {
            var c = Runtime.sprites[b];
            if (c != this.sprite && spriteTouching(c.spriteObj, this.sprite.spriteObj)) return c.label
        }
    return ""
};
Script.prototype.valueSensingTouchingColor = function (b) {
    if (this.sprite.spriteObj) {
        var c = parseInt(this.evaluateExpression(b[0]).substring(1), 16),
            b = c >> 16 & 248,
            d = c >> 8 & 248,
            c = c & 248,
            e = Runtime.stage.getBuffer(this.sprite.spriteObj);
        if (this.sprite.spriteObj.drawFunction)
            for (var f = this.sprite.spriteObj.getBounds(), f = Math.floor(f.right - f.left + 1) * Math.floor(f.bottom - f.top + 1), g = 0; g < f; g = g + 4) {
                if (e[g + 3] & 248 && (e[g] & 248) == b && (e[g + 1] & 248) == d && (e[g + 2] & 248) == c) return true
            } else
            for (var h = this.sprite.spriteObj.getBuffer(),
                    f = h.length, g = 0; g < f; g = g + 4)
                if (h[g + 3] && e[g + 3] & 248 && (e[g] & 248) == b && (e[g + 1] & 248) == d && (e[g + 2] & 248) == c) return true
    }
    return false
};
Script.prototype.valueSensingSeeColor = function (b) {
    if (this.sprite.spriteObj)
        for (var c = parseInt(this.evaluateExpression(b[0]).substring(1), 16), d = c >> 16 & 248, e = c >> 8 & 248, c = c & 248, f = parseInt(this.evaluateExpression(b[1]).substring(1), 16), b = f >> 16 & 248, g = f >> 8 & 248, f = f & 248, h = Runtime.stage.getBuffer(this.sprite.spriteObj), j = this.sprite.spriteObj.getBuffer(), k = 0; k < j.length; k = k + 4)
            if (j[k + 3] & 248 && (j[k] & 248) == d && (j[k + 1] & 248) == e && (j[k + 2] & 248) == c && h[k + 3] & 248 && (h[k] & 248) == b && (h[k + 1] & 248) == g && (h[k + 2] & 248) == f) return true;
    return false
};
Script.prototype.blockSensingAskAndWait = function (b) {
    this.dirty();
    this.yield();
    if (this.data == null) {
        this.data = true;
        Runtime.askSource = this.sprite;
        Runtime.askTriggerText = null;
        for (var c = this.sprite.buttonText = "", d = 0; d < b.length; d++) c = c + ifArrayMakeString(this.evaluateExpression(b[d]));
        b = $("#stage-canvas .ask");
        d = false;
        this.sprite.spriteObj ? this.sprite.spriteObj.bubble && this.sprite.spriteObj.bubble.dock == "dialog" && (d = true) : Runtime.stage.bubble && Runtime.stage.bubble.dock == "dialog" && (d = true);
        if (d) {
            b.addClass("dialog");
            if (this.sprite == Runtime.background) b.addClass("full");
            else {
                b.removeClass("full");
                if (this.sprite.costumes[0].img == "avatar://spine") {
                    d = this.sprite._generatePreview().toDataURL("image/png");
                    b.find("span.image img").attr("src", d)
                } else b.find("span.image img").attr("src", this.sprite.costumes[0].img)
            }
        } else {
            b.removeClass("dialog");
            _doBlockLooksSay(this.sprite, c)
        }
        b.find("span.textprompt").text(c);
        b.find("span.prompt.input").removeClass("hidden");
        b.find("span.prompt.buttons").addClass("hidden");
        b.removeClass("hidden").find("input").val("").focus();
        c = this.sprite.font;
        d = c.indexOf(" ");
        d > 0 && (d = c.indexOf(" ", d + 1));
        d > 0 ? b.css("font-family", c.substring(d + 1)) : b.css("font-family", "");
        this.sprite.fontColor ? b.css("color", this.sprite.fontColor) : b.css("color", "");
        this.sprite.fillColor ? b.css("background-color", this.sprite.fillColor) : b.css("background-color", "")
    } else if (Runtime.askTriggerText != null) {
        Runtime.askSource = null;
        this.sprite.buttonText = "";
        _doBlockLooksSay(this.sprite, "");
        this.waitTimeout = 0;
        this.dlgAnswer = $("#stage-canvas .ask").addClass("hidden").find("input").val();
        return false
    }
    return this.skipArgCompute = true
};
Script._blockSensingAskChoicesDismiss = function (b) {
    if (b == null) Runtime.askTriggerText = Runtime.stage.bubble.buttonText;
    else
        for (var c = Runtime.sprites.length - 1; c >= 0; c--)
            if (Runtime.sprites[c].spriteObj == b) {
                Runtime.askTriggerText = b.bubble.buttonText;
                break
            }
};
Script.prototype.blockSensingAskChoices = function (b) {
    this.dirty();
    this.yield();
    if (this.data == null) {
        this.data = {
            timeout: Date.now() + 5E3,
            autoselect: false,
            displayed: false
        };
        Runtime.stage.addListener("bubbleclicked", Script._blockSensingAskChoicesDismiss);
        Runtime.askSource = this.sprite;
        Runtime.askTriggerText = null;
        if (b.length == 2) {
            this.data.showContinue = true;
            var c = this.evaluateExpression(b[1]),
                d = c.indexOf(":");
            if (d > 0) {
                this.sprite.buttonText = c.substring(0, d);
                this.data.timeout = Date.now() + parseInt(c.substring(d +
                    1)) * 1E3;
                this.data.autoselect = true
            } else {
                this.sprite.buttonText = c;
                this.data.autoselect = false
            }
            $("#stage-canvas .prompt-overlay").detach();
            $("#stage-canvas").append('<div class="prompt-overlay" style="position:absolute;bottom:' + bubblePadding + "px;right:" + bubblePadding + 'px;color:#fff;font-size:6pt;line-height:1em;padding:5px;border-radius:5px;background-color:rgba(0,0,0,0.6);">' + (window.g_loc ? window.g_loc.getText("winstage.continuemsg", "Click anywhere to continue") : "Click anywhere to continue") + "</div>");
            _doBlockLooksSay(this.sprite, "" + this.evaluateExpression(b[0]))
        } else {
            var c = "" + this.evaluateExpression(b[0]),
                e = $("#stage-canvas .ask"),
                d = false;
            this.sprite.spriteObj ? this.sprite.spriteObj.bubble && this.sprite.spriteObj.bubble.dock == "dialog" && (d = true) : Runtime.stage.bubble && Runtime.stage.bubble.dock == "dialog" && (d = true);
            if (d) e.addClass("dialog");
            else {
                e.removeClass("dialog");
                _doBlockLooksSay(this.sprite, c)
            }
            this.sprite.buttonText = null;
            e.find(".prompt.input").addClass("hidden");
            for (var d = e.find(".prompt.buttons").removeClass("hidden").empty(),
                    f = 1; f < b.length; f++) d.append('<a class="askbutton" href="#">' + this.evaluateExpression(b[f]) + "</a>");
            if (this.sprite == Runtime.background) e.addClass("full");
            else {
                e.removeClass("full");
                if (this.sprite.costumes[0].img == "avatar://spine") {
                    b = this.sprite._generatePreview().toDataURL("image/png");
                    e.find("span.image img").attr("src", b)
                } else e.find("span.image img").attr("src", this.sprite.costumes[0].img)
            }
            e.find("span.textprompt").text(c);
            e.find("span.prompt.input").addClass("hidden");
            e.find("span.prompt.buttons").removeClass("hidden");
            e.removeClass("hidden").find("input").val("").focus();
            c = this.sprite.font;
            d = c.indexOf(" ");
            d > 0 && (d = c.indexOf(" ", d + 1));
            d > 0 ? e.css("font-family", c.substring(d + 1)) : e.css("font-family", "");
            this.sprite.fontColor ? e.css("color", this.sprite.fontColor) : e.css("color", "");
            this.sprite.fillColor ? e.css("background-color", this.sprite.fillColor) : e.css("background-color", "")
        }
    } else {
        if (Runtime.askTriggerText != null) {
            Runtime.stage.removeListener("bubbleclicked");
            Runtime.askSource = null;
            this.sprite.buttonText = null;
            _doBlockLooksSay(this.sprite,
                "");
            $("#stage-canvas .ask").addClass("hidden");
            $("#stage-canvas .prompt-overlay").detach();
            this.dlgAnswer = Runtime.askTriggerText;
            return false
        }
        if (this.data.showContinue && Date.now() > this.data.timeout)
            if (this.data.displayed) {
                if (this.data.autoselect) {
                    Runtime.askTriggerText = this.sprite.buttonText;
                    $("#stage-canvas .ask").addClass("hidden");
                    $("#stage-canvas .prompt-overlay").detach()
                }
            } else {
                this.data.displayed = true;
                $("#stage-canvas .prompt-overlay").detach();
                e = $('<div class="prompt-overlay" style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;background-color:rgba(0,0,0,0.2);"></div>');
                e.append('<div style="position:absolute;bottom:' + bubblePadding + "px;right:" + bubblePadding + 'px;color:#fff;font-size:16pt;line-height:1em;padding:10px;border-radius:10px;background-color:rgba(0,0,0,0.6);">' + (window.g_loc ? window.g_loc.getText("winstage.continuemsg", "Click anywhere to continue") : "Click anywhere to continue") + "</div>");
                $("#stage-canvas").append(e);
                var g = this;
                e.click(function () {
                    Runtime.askTriggerText = g.sprite.buttonText;
                    $("#stage-canvas .prompt-overlay").detach();
                    return false
                })
            }
    }
    return this.skipArgCompute =
        true
};
Script.prototype.valueSensingAnswer = function () {
    return this.dlgAnswer ? valueToNative(this.dlgAnswer) : ""
};
Script.prototype.valueSensingTiltAngle = function () {
    if (Runtime.stage.accel) {
        var b = Runtime.stage.accel;
        return Math.atan2(b.y, b.x) * 180 / Math.PI
    }
    return 0
};
Script.prototype.valueSensingTiltAmount = function () {
    if (Runtime.stage.accel) {
        var b = Runtime.stage.accel;
        return Math.sqrt(b.x * b.x + b.y * b.y)
    }
    return 0
};
Script.prototype.valueSensingAccelerometerX = function () {
    return Runtime.stage.accel ? Runtime.stage.accel.x : 0
};
Script.prototype.valueSensingAccelerometerY = function () {
    return Runtime.stage.accel ? Runtime.stage.accel.y : 0
};
Script.prototype.valueSensingMouseX = function () {
    var b = Runtime.stage.getMousePos();
    return b ? b.x - Runtime.stage.getWidth() / 2 : 0
};
Script.prototype.valueSensingMouseY = function () {
    var b = Runtime.stage.getMousePos();
    return b ? Runtime.stage.getHeight() / 2 - b.y : 0
};
Script.prototype.valueSensingMouseDown = function () {
    return Runtime.stage.mouseDown == true
};
Script.prototype.valueSensingKeyPressed = function (b) {
    b = this.evaluateExpression(b[0]);
    if (b == "any")
        for (var c in Runtime.keys) {
            if (Runtime.keys[c]) return true
        } else if (Runtime.keys[b]) return Runtime.keys[b];
    return false
};
Script.prototype.valueSensingDistanceToSprite = function (b) {
    if (this.sprite.spriteObj) {
        b = this.evaluateExpression(b[0]);
        if (b == "mouse-pointer") {
            if (b = Runtime.stage.getMousePos()) return Math.sqrt((b.x - this.sprite.spriteObj.x) * (b.x - this.sprite.spriteObj.x) + (b.y - this.sprite.spriteObj.y) * (b.y - this.sprite.spriteObj.y))
        } else {
            if (b == "left edge") return Math.abs(this.sprite.spriteObj.x);
            if (b == "right edge") return Math.abs(Runtime.stage.getWidth() - this.sprite.spriteObj.x);
            if (b == "top edge") return Math.abs(this.sprite.spriteObj.y);
            if (b == "bottom edge") return Math.abs(Runtime.stage.getHeight() - this.sprite.spriteObj.y);
            if (b = Sprites.getSpriteByName(b)) return Math.sqrt((this.sprite.spriteObj.x - b.spriteObj.x) * (this.sprite.spriteObj.x - b.spriteObj.x) + (this.sprite.spriteObj.y - b.spriteObj.y) * (this.sprite.spriteObj.y - b.spriteObj.y))
        }
    }
    return 0
};
Script.prototype.blockSensingResetTimer = function () {
    Runtime.startTimer = Date.now();
    return false
};
Script.prototype.valueSensingTimer = function () {
    return (Date.now() - Runtime.startTimer) / 1E3
};
Script.prototype.blockSensingSpriteProperty = function (b) {
    this.blockVarPropSet(b)
};
Script.prototype.valueSensingSpriteProperty = function (b) {
    var c = null,
        d = this.evaluateExpression(b[1]);
    if (d == "self") c = this.sprite;
    else
        for (var e = 0; e < Runtime.sprites.length; e++) {
            var f = Runtime.sprites[e];
            if (d == f.label) {
                c = f;
                break
            }
        }
    b = this.evaluateExpression(b[0]);
    if (c) switch (b) {
        case "x position":
            return c.spriteObj.x - Runtime.stage.getWidth() / 2;
        case "y position":
            return Runtime.stage.getHeight() / 2 - c.spriteObj.y;
        case "angle":
            c = c.spriteObj.rotation;
            return (360 - c % 360) % 360;
        case "direction":
            c = Math.floor(c.spriteObj.rotation);
            c = (c + 90) % 360;
            c > 180 && (c = c - 360);
            return c;
        case "costume #":
            return (c = c.getCostumeByName(c.currentCostume)) ? c[0] + 1 : 1;
        case "costume name":
            if (c.skeleton && c.spriteObj.drawFunction) return c.skeleton.animationName;
            return (c = c.getCostumeByName(c.currentCostume)) ? c[1].name : "";
        case "size":
            return Math.floor(c.spriteObj.scale.x * 100);
        case "volume":
            return 0;
        case "width":
            return Math.floor(c.spriteObj.scale.x * c.spriteObj.width);
        case "height":
            return Math.floor(c.spriteObj.scale.y * c.spriteObj.height);
        default:
            return c.variables[b] !==
                void 0 ? c.variables[b] : Runtime.background.variables[b] !== void 0 ? Runtime.background.variables[b] : ""
    } else {
        if (d == "mouse-pointer") {
            switch (b) {
                case "x position":
                    return (c = Runtime.stage.getMousePos()) ? c.x - Runtime.stage.getWidth() / 2 : 0;
                case "y position":
                    return (c = Runtime.stage.getMousePos()) ? Runtime.stage.getHeight() / 2 - c.y : 0
            }
            return ""
        }
        switch (b) {
            case "background #":
                return Runtime.background.getCostumeByName(Runtime.background.currentCostume)[0] + 1;
            default:
                return Runtime.background.variables[b] !== void 0 ? Runtime.background.variables[b] :
                    ""
        }
    }
};
Script.prototype.valueSensingActorName = function () {
    return this.sprite.label
};
Script.prototype.valueSensingActorNameAt = function (b) {
    var b = this.evaluateExpression(b[0]),
        c = parseInt(b) - 1,
        c = !b || c < 0 ? 0 : c % Runtime.sprites.length;
    return Runtime.sprites[c].label
};
Script.prototype.valueSensingNumActors = function () {
    return Runtime.sprites.length
};
Script.prototype.valueSensingSoundLevel = function () {
    MediaCapture.isCapturingAudio() || MediaCapture.startCaptureAudioLevel();
    return MediaCapture.getSoundLevel() * 100
};
Script.prototype.valueSensingIsLoud = function () {
    console.log("unimplemented valueIsLoud");
    return false
};
Script.prototype.valueSensingSensor = function (b) {
    console.log("unimplemented valueSensor:" + this.evaluateExpression(b[0]));
    return 0
};
Script.prototype.valueSensingSensorPressed = function (b) {
    console.log("unimplemented valueSensorPressed:" + this.evaluateExpression(b[0]));
    return false
};
Script.prototype.valueSensingDateTime = function (b) {
    switch (this.evaluateExpression(b[0])) {
        case "year":
            return (new Date).getFullYear();
        case "month":
            return (new Date).getMonth();
        case "day":
            return (new Date).getDate();
        case "hours":
            return (new Date).getHours();
        case "minutes":
            return (new Date).getMinutes();
        case "seconds":
            return (new Date).getSeconds();
        case "milliseconds":
            return (new Date).getMilliseconds();
        case "unix time":
            return (new Date).getTime();
        default:
            return (new Date).toTimeString()
    }
};
Script.prototype.valueSensingScreenLeft = function () {
    return -Runtime.stage.getWidth() / 2
};
Script.prototype.valueSensingScreenRight = function () {
    return Runtime.stage.getWidth() / 2
};
Script.prototype.valueSensingScreenTop = function () {
    return Runtime.stage.getHeight() / 2
};
Script.prototype.valueSensingScreenBottom = function () {
    return -Runtime.stage.getHeight() / 2
};
Script.prototype.valueSensingStageProperty = function (b) {
    b = this.evaluateExpression(b[0]);
    switch (b) {
        case "width":
        case "design width":
            return Runtime.stage.getWidth();
        case "height":
        case "design height":
            return Runtime.stage.getHeight();
        case "left":
            return -Runtime.stage.getWidth() / 2;
        case "right":
            return Runtime.stage.getWidth() / 2;
        case "top":
            return Runtime.stage.getHeight() / 2;
        case "bottom":
            return -Runtime.stage.getHeight() / 2;
        case "viewport offset x":
            return Runtime.stage.tileLayer.scrollOffset.x;
        case "viewport offset y":
            return -Runtime.stage.tileLayer.scrollOffset.y;
        case "background offset x":
            return Runtime.stage.backgroundOffsetX;
        case "background offset y":
            return Runtime.stage.backgroundOffsetY;
        case "world width":
            return Runtime.stage.tileLayer.getWidth();
        case "world height":
            return Runtime.stage.tileLayer.getHeight();
        case "closest actor":
            for (var c = 1E6, d = null, b = 0; b < Runtime.sprites.length; b++) {
                var e = Runtime.sprites[b];
                if (e != this.sprite) {
                    var f = Math.sqrt((e.spriteObj.x - this.sprite.spriteObj.x) * (e.spriteObj.x - this.sprite.spriteObj.x) + (e.spriteObj.y - this.sprite.spriteObj.y) *
                        (e.spriteObj.y - this.sprite.spriteObj.y));
                    if (f < c) {
                        c = f;
                        d = e
                    }
                }
            }
            if (d) return d.label;
            break;
        case "furthest actor":
            c = 0;
            d = null;
            for (b = 0; b < Runtime.sprites.length; b++) {
                e = Runtime.sprites[b];
                if (e != this.sprite) {
                    f = Math.sqrt((e.spriteObj.x - this.sprite.spriteObj.x) * (e.spriteObj.x - this.sprite.spriteObj.x) + (e.spriteObj.y - this.sprite.spriteObj.y) * (e.spriteObj.y - this.sprite.spriteObj.y));
                    if (f > c) {
                        c = f;
                        d = e
                    }
                }
            }
            if (d) return d.label;
            break;
        case "number of actors":
            return Runtime.sprites.length;
        case "last key pressed":
            return Runtime.lastKeyPressed;
        default:
            if (b.substr(0, 8) == "closest ") {
                for (var g = b.substr(8), c = 1E6, d = null, b = 0; b < Runtime.sprites.length; b++) {
                    e = Runtime.sprites[b];
                    if (e != this.sprite && e.tag && e.tag.indexOf(g) >= 0) {
                        f = Math.sqrt((e.spriteObj.x - this.sprite.spriteObj.x) * (e.spriteObj.x - this.sprite.spriteObj.x) + (e.spriteObj.y - this.sprite.spriteObj.y) * (e.spriteObj.y - this.sprite.spriteObj.y));
                        if (f < c) {
                            c = f;
                            d = e
                        }
                    }
                }
                if (d) return d.label
            } else if (b.substr(0, 9) == "furthest ") {
                g = b.substr(9);
                c = 0;
                d = null;
                for (b = 0; b < Runtime.sprites.length; b++) {
                    e = Runtime.sprites[b];
                    if (e != this.sprite && e.tag && e.tag.indexOf(g) >= 0) {
                        f = Math.sqrt((e.spriteObj.x - this.sprite.spriteObj.x) * (e.spriteObj.x - this.sprite.spriteObj.x) + (e.spriteObj.y - this.sprite.spriteObj.y) * (e.spriteObj.y - this.sprite.spriteObj.y));
                        if (f > c) {
                            c = f;
                            d = e
                        }
                    }
                }
                if (d) return d.label
            }
    }
    return 0
};
Script.prototype.blockSensingSetTag = function (b) {
    this.sprite.tag = this.evaluateExpression(b[0]).split(",")
};
Script.prototype.valueSensingGetTag = function (b) {
    b = this.evaluateExpression(b[0]);
    if (b == "self") {
        if (this.sprite.tag) return this.sprite.tag.join(",")
    } else if ((b = Sprites.getSpriteByName(b)) && b.tag) return b.tag.join(",");
    return ""
};
Script.prototype.valueSensingUserId = function () {
    return prefs && prefs.login ? prefs.login : ""
};
Script.prototype.valueSensingUserFirstName = function () {
    if (prefs) {
        if (prefs.firstName) return prefs.firstName;
        if (prefs.login) return prefs.login
    }
    return ""
};
Script.prototype.valueSensingVideo = function (b) {
    if (this.evaluateExpression(b[0]) == "motion")
        for (var c = 0; c < Runtime.sprites.length; c++) {
            var d = Runtime.sprites[c],
                e = this.evaluateExpression(b[1]);
            if (e == "self" && d == this.sprite || e == d.label) {
                d = d.spriteObj.getBounds();
                if (d = MediaCapture.getBuffer(d.left, d.top, d.right - d.left, d.bottom - d.top)) {
                    b = 0;
                    d = d.data;
                    for (c = 0; c < d.length; c = c + 4) d[c] && b++;
                    return parseInt(b * 100 / (d.length / 4))
                }
            }
        }
    return 0
};
Script.prototype.blockSoundPlay = function (b) {
    var c = this.sprite.getSoundByName(this.evaluateExpression(b[0]));
    if (c && !Runtime.muted) {
        if (!c[1].soundObj) c[1].soundObj = soundManager.createSound({
            id: "s" + Math.random(),
            url: c[1].sound
        });
        if (c[1].soundObj && c[1].soundObj.playState == 0) {
            c[1].soundObj.setVolume(this.sprite.volume);
            c[1].soundObj.play({
                onfinish: function () {
                    c[1].soundObj.unload()
                },
                onstop: function () {
                    c[1].soundObj.unload()
                }
            })
        }
    }
    return false
};
Script.prototype.blockSoundPlayUntilDone = function (b) {
    this.yield();
    if (this.data == null) {
        this.data = 1;
        var c = this.sprite.getSoundByName(this.evaluateExpression(b[0]));
        if (c && !Runtime.muted) {
            var d = this;
            if (!c[1].soundObj) c[1].soundObj = soundManager.createSound({
                id: "s" + Math.random(),
                url: c[1].sound
            });
            if (c[1].soundObj) c[1].soundObj.play({
                onfinish: function () {
                    c[1].soundObj.unload();
                    d.data = -1
                },
                onstop: function () {
                    c[1].soundObj.unload();
                    d.data = -1
                }
            });
            else return false
        } else return false
    } else if (this.data == -1) return false;
    return this.skipArgCompute = true
};
Script.prototype.blockSoundStopAll = function () {
    soundManager.stopAll();
    return false
};
Script.prototype.blockSoundStopActor = function () {
    for (var b = this.sprite.sounds, c = 0; c < b.length; c++) b[c].soundObj && b[c].soundObj.stop();
    return false
};
Script.prototype.blockSoundChangeVolume = function (b) {
    b = this.sprite.volume + parseInt(this.evaluateExpression(b[0]));
    b < 0 ? b = 0 : b > 100 && (b = 100);
    this.sprite.volume = b;
    soundManager.setVolume("id", b);
    for (var c = 0; c < this.sprite.sounds.length; c++) this.sprite.sounds[c].soundObj && this.sprite.sounds[c].soundObj.setVolume(b);
    return false
};
Script.prototype.blockSoundSetVolume = function (b) {
    _doBlockSetVolume(this.sprite, this.evaluateExpression(b[0]));
    return false
};

function _doBlockSetVolume(b, c) {
    var d = parseInt(c);
    d < 0 ? d = 0 : d > 100 && (d = 100);
    var e = null,
        e = b ? b : Runtime.background;
    e.volume = d;
    for (var f = 0; f < e.sounds.length; f++) e.sounds[f].soundObj && e.sounds[f].soundObj.setVolume(d);
    soundManager.setVolume("id", d)
}
Script.prototype.valueSoundVolume = function () {
    return this.sprite.volume
};
Script.prototype.blockSoundChangeTempo = function (b) {
    b = SoundGenerator.tempo + parseInt(this.evaluateExpression(b[0]));
    b < 1 && (b = 1);
    SoundGenerator.tempo = b;
    return false
};
Script.prototype.blockSoundSetTempo = function (b) {
    b = parseInt(this.evaluateExpression(b[0]));
    b < 1 && (b = 1);
    SoundGenerator.tempo = b;
    return false
};
Script.prototype.valueSoundTempo = function () {
    return SoundGenerator.tempo
};
Script.prototype.blockSoundPlayDrum = function (b) {
    this.yield();
    if (this.data == null) {
        if (!SoundGenerator.loadDrums()) return true;
        var c = parseFloat(this.evaluateExpression(b[1])) * 60 / SoundGenerator.tempo,
            b = (parseInt(this.evaluateExpression(b[0])) - 27) % 60;
        b < 0 && (b = b + 60);
        if (c > 0) {
            SoundGenerator.playDrum(27 + b, c);
            this.data = Date.now() + c * 1E3
        } else return false
    } else if (Date.now() > this.data) return false;
    return this.skipArgCompute = true
};
Script.prototype.blockSoundRest = function (b) {
    this.yield();
    if (this.data == null) {
        b = parseFloat(this.evaluateExpression(b[1])) * 60 / SoundGenerator.tempo;
        if (b > 0) this.data = Date.now() + b * 1E3;
        else return false
    } else if (Date.now() > this.data) return false;
    return this.skipArgCompute = true
};
Script.prototype.blockSoundPlayNote = function (b) {
    this.yield();
    if (this.data == null) {
        if (!this.instrument) this.instrument = 1;
        if (!SoundGenerator.loadInstrument(this.instrument)) return true;
        var c = (parseInt(this.evaluateExpression(b[0])) - 21) % 88;
        c < 0 && (c = c + 88);
        b = parseFloat(this.evaluateExpression(b[1])) * 60 / SoundGenerator.tempo;
        if (b > 0) {
            this.data = Date.now() + b * 1E3;
            SoundGenerator.playNote(this.instrument, c, b)
        } else return false
    } else if (Date.now() > this.data) return false;
    return this.skipArgCompute = true
};
Script.prototype.blockSoundSetInstrument = function (b) {
    this.yield();
    b = (parseInt(this.evaluateExpression(b[0])) - 1) % 128;
    b < 0 && (b = b + 128);
    this.instrument = b = b + 1;
    return !SoundGenerator.loadInstrument(b) ? true : false
};
Script.prototype.blockVarPropSet = function (b) {
    var c = this.sprite,
        d = this.evaluateExpression(b[0]),
        e = this.evaluateExpression(b[1]);
    if (e == "Stage" || e == "stage" || e == "any") c = Runtime.background;
    else if (e != "self") {
        c = Sprites.getSpriteByName(e);
        if (!c) c = this.sprite
    }
    b = this.evaluateExpression(b[2]);
    this.dirty();
    blockVarPropSet(d, c, b);
    return false
};

function blockVarPropSet(b, c, d) {
    blockFuncSet(b, c, d) || blockVarSet(b, c, d);
    return false
}

function blockFuncSet(b, c, d) {
    if (!c || c == Runtime.background) switch (b) {
        case "background #":
        case "scene #":
            return Runtime.background.setCostumeByName(d);
        case "x gravity":
            Physics.updateGravity(d, Physics.getGravity().y);
            return true;
        case "y gravity":
            Physics.updateGravity(Physics.getGravity().x, d);
            return true;
        case "background offset x":
            Runtime.stage.backgroundOffsetX = d;
            Runtime.stage.setBackgroundType();
            return true;
        case "background offset y":
            Runtime.stage.backgroundOffsetY = d;
            Runtime.stage.setBackgroundType();
            return true;
        case "viewport offset x":
            Runtime.stage.tileLayer.scrollOffset.x = d;
            Runtime.stage.tileLayer.draw();
            return true;
        case "viewport offset y":
            Runtime.stage.tileLayer.scrollOffset.y = -d;
            Runtime.stage.tileLayer.draw();
            return true;
        default:
            if (Runtime.background.variables[b] !== void 0 && Runtime.background.variables[b] !== d) {
                Runtime.background.variables[b] = d;
                Runtime.updateCloudVar(b);
                return true
            }
    } else if (c) switch (b) {
        case "x position":
            _doBlockMotionSetX(c, d);
            return true;
        case "y position":
            _doBlockMotionSetY(c,
                d);
            return true;
        case "direction":
            _doBlockMotionPointDirection(c, d);
            return true;
        case "angle":
            _doBlockMotionPointDirection(this.sprite, 360 - parseFloat(d) + 90);
            return true;
        case "layer":
            c.spriteObj && c.spriteObj.setZIndex(parseInt(d));
            return true;
        case "rotation style":
            if (c.spriteObj) c.spriteObj.rotateLock = d == "left-right" ? 1 : d == "don't rotate" ? 2 : 0;
            return true;
        case "label":
            if (c.spriteObj) c.spriteObj.label = "" + d;
            return true;
        case "costume #":
            _doBlockLooksSwitchCostume(c, d);
            return true;
        case "say":
            _doBlockLooksSay(c,
                d);
            return true;
        case "visible":
            "" + d == "true" ? c.spriteObj.show() : c.spriteObj.hide();
            return c.spriteObj.visible;
        case "size":
            _doBlockLooksSetSize(c, d);
            return true;
        case "volume":
            _doBlockSoundSetVolume(c, d);
            return true;
        case "tag":
            c.tag = d.split(",");
            return true;
        case "density":
            _doBlockPhysicsSetDensity(c, d);
            return true;
        case "friction":
            _doBlockPhysicsSetFriction(c, d);
            return true;
        case "restitution":
            _doBlockPhysicsSetRestitution(c, d);
            return true;
        case "angular velocity":
            _doBlockPhysicsSetAngularVelocity(c, d);
            return true;
        case "angular damping":
            _doBlockPhysicsSetAngularDamping(c, d);
            return true;
        case "linear damping":
            _doBlockPhysicsSetLinearDamping(c, d);
            return true;
        case "x linear velocity":
            _doBlockPhysicsSetLinearVelocity(c, d, c.spriteObj.physicsBody.GetLinearVelocity().y);
            return true;
        case "y linear velocity":
            _doBlockPhysicsSetLinearVelocity(c, c.spriteObj.physicsBody.GetLinearVelocity().x, d);
            return true;
        default:
            if (b.indexOf("effect/") == 0) return _doBlockLooksSetEffect(c, b.substring(7), d)
    }
    return false
}

function blockVarSet(b, c, d) {
    if (!c || c == Runtime.background)
        if (Runtime.background.variables[b] !== void 0) {
            if (Runtime.background.variables[b] !== d) {
                Runtime.background.variables[b] = d;
                Runtime.updateCloudVar(b)
            }
        } else Runtime.background.varTransient[b] = d;
    else c && (c.variables[b] !== void 0 ? c.variables[b] = d : Runtime.background.variables[b] == void 0 && (c.varTransient[b] = d));
    return true
}
Script.prototype.valueVarPropGet = function (b) {
    var c = this.evaluateExpression(b[0]),
        b = this.evaluateExpression(b[1]);
    if (b == "self") b = this.sprite.label;
    return propertyGet(c, b)
};

function propertyGet(b, c) {
    switch (b) {
        case "tilt angle":
            if (Runtime.stage.accel) {
                var d = Runtime.stage.accel;
                return Math.atan2(d.y, d.x) * 180 / Math.PI
            }
            return 0;
        case "tilt amount":
            if (Runtime.stage.accel) {
                d = Runtime.stage.accel;
                return Math.sqrt(d.x * d.x + d.y * d.y)
            }
            return 0;
        case "x tilt":
            return Runtime.stage.accel ? Runtime.stage.accel.x : 0;
        case "y tilt":
            return Runtime.stage.accel ? Runtime.stage.accel.y : 0;
        case "mouse x":
            return (d = Runtime.stage.getMousePos()) ? d.x - Runtime.stage.getWidth() / 2 : 0;
        case "mouse y":
            return (d = Runtime.stage.getMousePos()) ?
                Runtime.stage.getHeight() / 2 - d.y : 0;
        case "mouse down?":
            return Runtime.stage.mouseDown == true;
        case "background #":
        case "scene #":
            return Runtime.background.getCostumes().length > 0 ? Runtime.background.getCostumeByName(Runtime.background.currentCostume)[0] + 1 : 0;
        case "background name":
        case "scene name":
            return Runtime.background.getCostumes().length > 0 ? Runtime.background.getCostumeByName(Runtime.background.currentCostume)[1].name : 0;
        case "timer":
            return (Date.now() - Runtime.startTimer) / 1E3;
        case "x gravity":
            return Physics.getGravity().x;
        case "y gravity":
            return Physics.getGravity().y;
        case "background offset x":
            return Runtime.stage.backgroundOffsetX;
        case "background offset y":
            return Runtime.stage.backgroundOffsetY;
        case "viewport offset x":
            return Runtime.stage.tileLayer.scrollOffset.x;
        case "viewport offset y":
            return -Runtime.stage.tileLayer.scrollOffset.y;
        case "# of actors":
            return Runtime.sprites.length;
        case "sound level":
            MediaCapture.isCapturingAudio() || MediaCapture.startCaptureAudioLevel();
            return MediaCapture.getSoundLevel() * 100
    }
    if (c ==
        "Stage" || c == "stage" || c == "any") {
        if (Runtime.background.variables[b] !== void 0) return valueToNative(Runtime.background.variables[b]);
        if (Runtime.background.lists[b] !== void 0) return Runtime.background.lists[b];
        if (Runtime.background.varTransient[b] !== void 0) return Runtime.background.varTransient[b]
    } else if (d = Sprites.getSpriteByName(c)) switch (b) {
        case "x position":
            return Math.floor(d.spriteObj.x - Runtime.stage.getWidth() / 2);
        case "y position":
            return Math.floor(Runtime.stage.getHeight() / 2 - d.spriteObj.y);
        case "direction":
            d =
                Math.floor(d.spriteObj.rotation);
            d = (d + 90) % 360;
            d > 180 && (d = d - 360);
            return d;
        case "angle":
            d = d.spriteObj.rotation;
            return (360 - d % 360) % 360;
        case "layer":
            return d.spriteObj.zIndex;
        case "rotation style":
            if (d.spriteObj) {
                if (d.spriteObj.rotateLock == 1) return "left-right";
                if (d.spriteObj.rotateLock == 2) return "don't rotate"
            }
            return "all around";
        case "label":
            if (d.spriteObj) return d.spriteObj.label;
            break;
        case "costume #":
            return (d = d.getCostumeByName(d.currentCostume)) ? d[0] + 1 : 1;
        case "costume name":
            if (d.skeleton && d.spriteObj.drawFunction) return d.skeleton.animationName;
            if (d = d.getCostumeByName(d.currentCostume)) return d[1].name;
            break;
        case "say":
            return d.spriteObj.text;
        case "is hidden?":
            return !d.spriteObj.visible;
        case "visible":
            return d.spriteObj.visible;
        case "size":
            return Math.floor(d.spriteObj.scale.x * 100);
        case "width":
            return Math.floor(d.spriteObj.scale.x * d.spriteObj.width);
        case "height":
            return Math.floor(d.spriteObj.scale.y * d.spriteObj.height);
        case "answer":
            if (d.dlgAnswer) return valueToNative(d.dlgAnswer);
            break;
        case "volume":
            return d.volume;
        case "tempo":
            return SoundGenerator.tempo;
        case "width":
            return Math.floor(d.spriteObj.scale.x * d.spriteObj.width);
        case "height":
            return Math.floor(d.spriteObj.scale.y * d.spriteObj.height);
        case "tag":
            if (d.tag) return d.tag.join(",");
            break;
        case "density":
            return (d = d.spriteObj.physicsBody.GetFixtureList()) ? d.GetDensity() : 0;
        case "friction":
            return (d = d.spriteObj.physicsBody.GetFixtureList()) ? d.GetFriction() : 0;
        case "restitution":
            return (d = d.spriteObj.physicsBody.GetFixtureList()) ? d.GetRestitution() : 0;
        case "angular velocity":
            return d.spriteObj.physicsBody.GetAngularVelocity();
        case "angular damping":
            return d.spriteObj.physicsBody.GetAngularDamping();
        case "inertia":
            return d.spriteObj.physicsBody.GetInertia();
        case "is active?":
            return d.spriteObj.physicsBody.IsActive();
        case "linear damping":
            return d.spriteObj.physicsBody.GetLinearDamping();
        case "x linear velocity":
            return d.spriteObj.physicsBody.GetLinearVelocity().x;
        case "y linear velocity":
            return d.spriteObj.physicsBody.GetLinearVelocity().y;
        case "is awake?":
            return d.spriteObj.physicsBody.IsAwake();
        default:
            if (d.variables[b] !==
                void 0) return valueToNative(d.variables[b]);
            if (d.lists[b] !== void 0) return d.lists[b];
            if (d.varTransient[b] !== void 0) return d.varTransient[b]
    }
    return ""
}
Script.prototype.blockVarSet = function (b) {
    var c = "",
        d = b[0];
    if (d && d._child) {
        d = d._child;
        if (d.func == "valueVar" || d.func == "valueParam" || d.func == "valueScriptVar" || d.func == "valueList") c = d.name
    }
    c || (c = this.evaluateExpression(b[0]));
    b = this.evaluateExpression(b[1]);
    this._setVariable(c, b);
    return false
};
Script.prototype._setVariable = function (b, c) {
    if (this.scriptVars && this.scriptVars[b] !== void 0) this.scriptVars[b] = c;
    else if (this.fnArgs && this.fnArgs[b] !== void 0) this.fnArgs[b] = c;
    else if (this.sprite && this.sprite.variables[b] !== void 0) {
        if (this.sprite.variables[b] !== c) {
            this.sprite.variables[b] = c;
            this.sprite == Runtime.background && Runtime.updateCloudVar(b)
        }
    } else if (this.sprite && this.sprite.lists[b] !== void 0) {
        this.sprite.lists[b] = c;
        this.sprite == Runtime.background && Runtime.updateCloudList(b)
    } else if (Runtime.background.lists[b] !==
        void 0) {
        if (Runtime.background.lists[b] !== c) {
            Runtime.background.lists[b] = c;
            Runtime.updateCloudList(b)
        }
    } else if (Runtime.background.variables[b] !== void 0) {
        if (Runtime.background.variables[b] !== c) {
            Runtime.background.variables[b] = c;
            Runtime.updateCloudVar(b)
        }
    } else this.sprite.varTransient[b] = c
};
Script.prototype.blockVarChangeBy = function (b) {
    var c = "",
        d = b[0];
    if (d && d._child) {
        d = d._child;
        if (d.func == "valueVar" || d.func == "valueParam" || d.func == "valueScriptVar" || d.func == "valueList") c = d.name
    }
    c || (c = this.evaluateExpression(b[0]));
    d = this.evaluateExpression(b[1]);
    if (this.scriptVars && this.scriptVars[c] !== void 0) {
        b = parseFloat(this.scriptVars[c]);
        isNaN(b) && (b = 0);
        d = parseFloat(d);
        isNaN(d) && (d = 1);
        this.scriptVars[c] = b + d
    } else if (this.fnArgs && this.fnArgs[c] !== void 0) {
        b = parseFloat(this.fnArgs[c]);
        isNaN(b) && (b = 0);
        d = parseFloat(d);
        isNaN(d) && (d = 1);
        this.fnArgs[c] = b + d
    } else if (this.sprite && this.sprite.variables[c] !== void 0) {
        b = parseFloat(this.sprite.variables[c]);
        isNaN(b) && (b = 0);
        d = parseFloat(d);
        isNaN(d) && (d = 1);
        this.sprite.variables[c] = b + d;
        this.sprite == Runtime.background && Runtime.updateCloudVar(c)
    } else if (Runtime.background.variables[c] !== void 0) {
        b = parseFloat(Runtime.background.variables[c]);
        isNaN(b) && (b = 0);
        d = parseFloat(d);
        isNaN(d) && (d = 1);
        Runtime.background.variables[c] = b + d;
        Runtime.updateCloudVar(c)
    } else if (this.sprite &&
        this.sprite.varTransient[c] !== void 0) {
        b = parseFloat(this.sprite.varTransient[c]);
        isNaN(b) && (b = 0);
        d = parseFloat(d);
        isNaN(d) && (d = 1);
        this.sprite.varTransient[c] = b + d
    }
    return false
};
Script.prototype.blockVarShow = function () {
    return false
};
Script.prototype.blockVarHide = function () {
    return false
};
Script.prototype.valueVar = function () {
    return this._getVariable(this.blockName)
};
Script.prototype._getVariable = function (b) {
    var c = "";
    this.scriptVars && this.scriptVars[b] !== void 0 ? c = this.scriptVars[b] : this.fnArgs && this.fnArgs[b] !== void 0 ? c = this.fnArgs[b] : this.sprite && this.sprite.variables[b] !== void 0 ? c = this.sprite.variables[b] : this.sprite && this.sprite.lists[b] !== void 0 ? c = this.sprite.lists[b] : Runtime.background.variables[b] !== void 0 ? c = Runtime.background.variables[b] : Runtime.background.lists[b] !== void 0 ? c = Runtime.background.lists[b] : this.sprite && this.sprite.varTransient[b] !== void 0 &&
        (c = this.sprite.varTransient[b]);
    return valueToNative(c)
};
Script.prototype.valueListNew = function () {
    return []
};
Script.prototype.valueObjNew = function () {
    return {}
};
Script.prototype.blockListAdd = function (b) {
    var c = "",
        d = b[b.length - 1];
    if (d && d._child) {
        d = d._child;
        if (d.func == "valueVar" || d.func == "valueParam" || d.func == "valueScriptVar" || d.func == "valueList") c = d.name
    }
    c || (c = this.evaluateExpression(b[b.length - 1]));
    if (this.scriptVars && this.scriptVars[c] !== void 0)
        for (d = 0; d < b.length - 1; d++) this.scriptVars[c].push(this.evaluateExpression(b[d]));
    else if (this.fnArgs[c] !== void 0)
        for (d = 0; d < b.length - 1; d++) this.fnArgs[c].push(this.evaluateExpression(b[d]));
    else if (this.sprite && this.sprite.lists[c] !==
        void 0)
        for (d = 0; d < b.length - 1; d++) this.sprite.lists[c].push(this.evaluateExpression(b[d]));
    else if (this.sprite && this.sprite.variables[c] !== void 0 && this.sprite.variables[c] instanceof Array)
        for (d = 0; d < b.length - 1; d++) this.sprite.variables[c].push(this.evaluateExpression(b[d]));
    else if (Runtime.background.lists[c] !== void 0) {
        for (d = 0; d < b.length - 1; d++) Runtime.background.lists[c].push(this.evaluateExpression(b[d]));
        Runtime.updateCloudList(c)
    } else if (Runtime.background.variables[c] !== void 0 && Runtime.background.variables[c] instanceof Array)
        for (d = 0; d < b.length - 1; d++) Runtime.background.variables[c].push(this.evaluateExpression(b[d]));
    else if (this.sprite && this.sprite.varTransient[c] !== void 0 && this.sprite.varTransient[c] instanceof Array)
        for (d = 0; d < b.length - 1; d++) this.sprite.varTransient[c].push(this.evaluateExpression(b[d]));
    return false
};
Script.prototype.blockListDel = function (b) {
    var c = null,
        d = "",
        e = b[1];
    if (e && e._child) {
        e = e._child;
        if (e.func == "valueVar" || e.func == "valueParam" || e.func == "valueScriptVar" || e.func == "valueList") d = e.name
    }
    d || (d = this.evaluateExpression(b[1]));
    this.scriptVars && this.scriptVars[d] !== void 0 ? c = this.scriptVars[d] : this.fnArgs[d] !== void 0 ? c = this.fnArgs[d] : this.sprite && this.sprite.lists[d] !== void 0 ? c = this.sprite.lists[d] : this.sprite && this.sprite.variables[d] !== void 0 ? c = this.sprite.variables[d] : Runtime.background.lists[d] !==
        void 0 ? c = Runtime.background.lists[d] : Runtime.background.variables[d] !== void 0 ? c = Runtime.background.variables[d] : this.sprite && this.sprite.varTransient[d] !== void 0 && (c = this.sprite.varTransient[d]);
    if (c != null) {
        b = this.evaluateExpression(b[0]);
        if (b == "last") c instanceof Array && c.pop();
        else if (b == "all")
            if (c instanceof Array) c.splice(0, c.length);
            else {
                if (c instanceof Object)
                    for (var f in c) delete c[f]
            }
        else if (c instanceof Array) {
            f = Math.round(parseFloat(b));
            f > 0 && f <= c.length && c.splice(f - 1, 1)
        } else c instanceof
        Object && delete c[b];
        Runtime.background.lists[d] !== void 0 && Runtime.updateCloudList(d)
    }
    return false
};
Script.prototype.blockListInsert = function (b) {
    var c = this.evaluateExpression(b[b.length - 2]),
        d = null,
        e = "",
        f = b[b.length - 1];
    if (f && f._child) {
        f = f._child;
        if (f.func == "valueVar" || f.func == "valueParam" || f.func == "valueScriptVar" || f.func == "valueList") e = f.name
    }
    e || (e = this.evaluateExpression(b[b.length - 1]));
    this.scriptVars && this.scriptVars[e] !== void 0 ? d = this.scriptVars[e] : this.fnArgs[e] !== void 0 ? d = this.fnArgs[e] : this.sprite && this.sprite.lists[e] !== void 0 ? d = this.sprite.lists[e] : this.sprite && this.sprite.variables[e] !==
        void 0 && this.sprite.variables[e] instanceof Array ? d = this.sprite.variables[e] : Runtime.background.lists[e] !== void 0 ? d = Runtime.background.lists[e] : Runtime.background.variables[e] !== void 0 && Runtime.background.variables[e] instanceof Array ? d = Runtime.background.variables[e] : this.sprite && (this.sprite.varTransient[e] !== void 0 && this.sprite.varTransient[e] instanceof Array) && (d = this.sprite.varTransient[e]);
    if (d != null) {
        if (c == "last")
            for (e = 0; e < b.length - 2; e++) d.push(this.evaluateExpression(b[e]));
        else if (c == "any") {
            c =
                Math.round(Math.random() * d.length);
            for (e = 0; e < b.length - 2; e++) d.splice(c + e, 0, this.evaluateExpression(b[e]))
        } else {
            c = Math.round(parseFloat(c)) - 1;
            if (c >= 0 && c < d.length)
                for (e = 0; e < b.length - 2; e++) d.splice(c + e, 0, this.evaluateExpression(b[e]));
            else
                for (e = 0; e < b.length - 2; e++) d.push(this.evaluateExpression(b[e]))
        }
        Runtime.background.lists[c] !== void 0 && Runtime.updateCloudList(c)
    }
    return false
};
Script.prototype.valueListItem = function (b) {
    var c = null,
        d = "",
        e = b[b.length - 1];
    if (e && e._child) {
        e = e._child;
        if (e.func == "valueVar" || e.func == "valueParam" || e.func == "valueScriptVar" || e.func == "valueList") d = e.name
    }
    d || (d = this.evaluateExpression(b[b.length - 1]));
    this.scriptVars && this.scriptVars[d] !== void 0 ? c = this.scriptVars[d] : this.fnArgs[d] !== void 0 ? c = this.fnArgs[d] : this.sprite && this.sprite.lists[d] !== void 0 ? c = this.sprite.lists[d] : this.sprite && this.sprite.variables[d] !== void 0 && this.sprite.variables[d] instanceof
    Array ? c = this.sprite.variables[d] : Runtime.background.lists[d] !== void 0 ? c = Runtime.background.lists[d] : Runtime.background.variables[d] !== void 0 && Runtime.background.variables[d] instanceof Array ? c = Runtime.background.variables[d] : this.sprite && (this.sprite.varTransient[d] !== void 0 && this.sprite.varTransient[d] instanceof Array) && (c = this.sprite.varTransient[d]);
    d = "";
    if (c != null && c.length > 0) {
        b = this.evaluateExpression(b[0]);
        if (b == "last") d = c[c.length - 1];
        else if (b == "any") d = c[Math.round(Math.random() * c.length)];
        else {
            b = Math.round(parseFloat(b));
            b > 0 && b <= c.length && (d = c[b - 1])
        }
    }
    return valueToNative(d)
};
Script.prototype.valueListLength = function (b) {
    var c = "",
        d = b[0];
    if (d && d._child) {
        d = d._child;
        if (d.func == "valueVar" || d.func == "valueParam" || d.func == "valueScriptVar" || d.func == "valueList") c = d.name
    }
    c || (c = this.evaluateExpression(b[0]));
    return this.scriptVars && this.scriptVars[c] !== void 0 ? this.scriptVars[c].length : this.fnArgs[c] !== void 0 ? this.fnArgs[c].length : this.sprite && this.sprite.lists[c] !== void 0 ? this.sprite.lists[c].length : this.sprite && this.sprite.variables[c] !== void 0 && this.sprite.variables[c] instanceof
    Array ? this.sprite.variables[c].length : Runtime.background.lists[c] !== void 0 ? Runtime.background.lists[c].length : Runtime.background.variables[c] !== void 0 && Runtime.background.variables[c] instanceof Array ? Runtime.background.variables[c].length : this.sprite && this.sprite.varTransient[c] !== void 0 && this.sprite.varTransient[c] instanceof Array ? this.sprite.varTransient[c].length : 0
};
Script.prototype.valueListContains = function (b) {
    var c = null,
        d = "",
        e = b[0];
    if (e && e._child) {
        e = e._child;
        if (e.func == "valueVar" || e.func == "valueParam" || e.func == "valueScriptVar" || e.func == "valueList") d = e.name
    }
    d || (d = this.evaluateExpression(b[0]));
    this.scriptVars && this.scriptVars[d] !== void 0 ? c = this.scriptVars[d] : this.fnArgs[d] !== void 0 ? c = this.fnArgs[d] : this.sprite && this.sprite.lists[d] !== void 0 ? c = this.sprite.lists[d] : this.sprite && this.sprite.variables[d] !== void 0 && this.sprite.variables[d] instanceof Array ? c = this.sprite.variables[d] :
        Runtime.background.lists[d] !== void 0 ? c = Runtime.background.lists[d] : Runtime.background.variables[d] !== void 0 && Runtime.background.variables[d] instanceof Array ? c = Runtime.background.variables[d] : this.sprite && (this.sprite.varTransient[d] !== void 0 && this.sprite.varTransient[d] instanceof Array) && (c = this.sprite.varTransient[d]);
    if (c != null) {
        b = valueToNative(this.evaluateExpression(b[1]));
        for (d = 0; d < c.length; d++)
            if (valueToNative(c[d]) == b) return true
    }
    return false
};
Script.prototype.valueList = function () {
    var b = "";
    if (this.scriptVars && this.scriptVars[this.blockName] !== void 0) b = this.scriptVars[this.blockName];
    else if (this.fnArgs[this.blockName] !== void 0) b = this.fnArgs[this.blockName];
    else if (this.sprite && this.sprite.lists[this.blockName] !== void 0) b = this.sprite.lists[this.blockName];
    else if (this.sprite && this.sprite.variables[this.blockName] !== void 0 && (this.sprite.variables[this.blockName] instanceof Array || this.sprite.variables[this.blockName] instanceof Object)) b = this.sprite.variables[this.blockName];
    else if (Runtime.background.lists[this.blockName] !== void 0) b = Runtime.background.lists[this.blockName];
    else if (Runtime.background.variables[this.blockName] !== void 0 && (Runtime.background.variables[this.blockName] instanceof Array || Runtime.background.variables[this.blockName] instanceof Object)) b = Runtime.background.variables[this.blockName];
    else if (this.sprite && this.sprite.varTransient[this.blockName] !== void 0 && (this.sprite.varTransient[this.blockName] instanceof Array || this.sprite.varTransient[this.blockName] instanceof Object)) b = this.sprite.varTransient[this.blockName];
    return b
};
Script.prototype.blockListReplace = function (b) {
    var c = null,
        d = "",
        e = b[1];
    if (e && e._child) {
        e = e._child;
        if (e.func == "valueVar" || e.func == "valueParam" || e.func == "valueScriptVar" || e.func == "valueList") d = e.name
    }
    d || (d = this.evaluateExpression(b[1]));
    this.scriptVars && this.scriptVars[d] !== void 0 ? c = this.scriptVars[d] : this.fnArgs[d] !== void 0 ? c = this.fnArgs[d] : this.sprite && this.sprite.lists[d] !== void 0 ? c = this.sprite.lists[d] : this.sprite && this.sprite.variables[d] !== void 0 && this.sprite.variables[d] instanceof Array ? c = this.sprite.variables[d] :
        Runtime.background.lists[d] !== void 0 ? c = Runtime.background.lists[d] : Runtime.background.variables[d] !== void 0 && Runtime.background.variables[d] instanceof Array ? c = Runtime.background.variables[d] : this.sprite && (this.sprite.varTransient[d] !== void 0 && this.sprite.varTransient[d] instanceof Array) && (c = this.sprite.varTransient[d]);
    if (c != null) {
        e = this.evaluateExpression(b[0]);
        if (e == "last") c[c.length - 1] = this.evaluateExpression(b[2]);
        else if (e == "any") c[Math.round(Math.random() * c.length)] = this.evaluateExpression(b[2]);
        else {
            e = Math.round(parseFloat(e));
            e > 0 && e <= c.length && (c[e - 1] = this.evaluateExpression(b[2]))
        }
        Runtime.background.lists[d] !== void 0 && Runtime.updateCloudList(d)
    }
    return false
};
Script.prototype.blockObjSet = function (b) {
    var c = this.evaluateExpression(b[0]);
    if (c != null) {
        var d = valueToNative(this.evaluateExpression(b[1]));
        if (c instanceof Array && (typeof d != "number" || !isFinite(d))) {
            for (var e = {}, f = 0; f < c.length; f++) e[f] = c[f];
            (c = b[0]) && c._child && (c._child.func == "valueVar" ? this.sprite.variables[c._child.name] !== void 0 ? this.sprite.variables[c._child.name] = e : Runtime.background.variables[c._child.name] !== void 0 ? Runtime.background.variables[c._child.name] = e : this.sprite.lists[c._child.name] !==
                void 0 ? this.sprite.lists[c._child.name] = e : Runtime.background.lists[c._child.name] !== void 0 ? Runtime.background.lists[c._child.name] = e : this.sprite.varTransient[c._child.name] !== void 0 && (this.sprite.varTransient[c._child.name] = e) : c._child.func == "valueScriptVar" ? this.scriptVars[c._child.name] !== void 0 && (this.scriptVars[c._child.name] = e) : c._child.func == "valueParam" ? this.fnArgs[c._child.name] !== void 0 && (this.fnArgs[c._child.name] = e) : c._child.func == "valueList" && (this.sprite.lists[c._child.name] !== void 0 ?
                    this.sprite.lists[c._child.name] = e : Runtime.background.lists[c._child.name] !== void 0 ? Runtime.background.lists[c._child.name] = e : this.sprite && this.sprite.varTransient[c._child.name] !== void 0 && (this.sprite.varTransient[c._child.name] = e)));
            c = e
        }
        c[d] = this.evaluateExpression(b[2])
    }
    return false
};
Script.prototype.blockObjDel = function (b) {
    var c = this.evaluateExpression(b[0]);
    if (c != null) {
        b = valueToNative(this.evaluateExpression(b[1]));
        c instanceof Array && (typeof b != "number" || !isFinite(b)) && b >= 0 && b < c.length ? c.splice(b, 1) : delete c[b]
    }
    return false
};
Script.prototype.valueObjGet = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = "";
    if (c != null) {
        b = valueToNative(this.evaluateExpression(b[1]));
        if (c instanceof Array && (typeof b != "number" || !isFinite(b)) || c.hasOwnProperty(b)) d = c[b]
    }
    return valueToNative(d)
};
Script.prototype.valueObjLength = function (b) {
    var c = 0,
        b = this.evaluateExpression(b[0]);
    if (b != null)
        if (b instanceof Array) c = b.length;
        else if (b instanceof Object)
            for (var d in b) b.hasOwnProperty(d) && c++;
    return c
};
Script.prototype.valueObjKeys = function (b) {
    var b = this.evaluateExpression(b[0]),
        c = [];
    if (b != null)
        for (var d in b) b.hasOwnProperty(d) && c.push(d);
    return c
};
Script.prototype.valueObjValues = function (b) {
    var b = this.evaluateExpression(b[0]),
        c = [];
    if (b != null)
        for (var d in b) b.hasOwnProperty(d) && c.push(b[d]);
    return c
};
Script.prototype.blockNetworkAPI = function (b) {
    this.yield();
    if (this.data == null) {
        this.data = {
            ready: false,
            networkData: null
        };
        for (var c = {
            url: this.evaluateExpression(b[0])
        }, d = 1; d < b.length; d++) {
            var e = this.currentBlock.label.getSocketAtChild(d);
            if (e._child && e._child.name) {
                c[e._child.name] = "" + ifArrayMakeString(this.evaluateExpression(b[d]));
                c.url = c.url.indexOf("?") > 0 ? c.url + "&" : c.url + "?";
                c.url = c.url + (escape(e._child.name) + "=" + escape(c[e._child.name]))
            }
        }
        var f = this;
        $.ajax({
            url: "/api/fetchjson",
            data: c,
            success: function (b) {
                try {
                    f.data.networkData =
                        JSON.parse(b)
                } catch (c) {
                    f.data.networkData = b
                }
                f.sprite.networkData = f.data.networkData;
                f.data.ready = true
            },
            error: function () {
                f.data.networkData = "error";
                f.data.ready = true;
                f.sprite.networkData = "";
                console.log("error")
            }
        });
        return this.skipArgCompute = true
    }
    if (!this.data.ready) return this.skipArgCompute = true;
    return false
};

function _parseXml(b, c) {
    b.tagName = c[0].tagName;
    b.attributes = {};
    $.each(c[0].attributes, function () {
        b.attributes[this.name] = this.value
    });
    b.children = [];
    $.each(c[0].children, function () {
        var c = {};
        _parseXml(c, $(this));
        b.children.push(c)
    });
    b.textNode = c.text()
}
Script.prototype.valueNetworkParse = function (b) {
    b = this.evaluateExpression(b[0]);
    try {
        return JSON.parse(b)
    } catch (c) {
        try {
            var d = {},
                e = $($.parseXML(b));
            _parseXml(d, e);
            return d
        } catch (f) {
            return b
        }
    }
};
Script.prototype.valueNetworkResult = function () {
    return this.sprite.networkData ? this.sprite.networkData : ""
};
Script.prototype.blockNetworkSaveValue = function (b) {
    var c = this.evaluateExpression(b[0]),
        d = this.evaluateExpression(b[1]),
        b = this.evaluateExpression(b[2]);
    if (typeof c == "number" || typeof c == "string") c = "" + c;
    else try {
        c = JSON.stringify(c)
    } catch (e) {
        c = "" + c
    }
    this.yield();
    if (this.data == null) {
        this.data = {
            ready: false,
            networkData: null
        };
        var f = this;
        $.ajax({
            url: "/api/savevalue",
            type: "POST",
            data: {
                n: d,
                v: c,
                p: b,
                pid: window.IDE ? window.IDE.currentProjectId : ""
            },
            success: function (b) {
                f.data.networkData = f.valueNetworkParse([b]);
                f.data.ready =
                    true
            },
            error: function () {
                f.data.networkData = "error";
                f.data.ready = true;
                console.log("save data error")
            }
        });
        return this.skipArgCompute = true
    }
    if (!this.data.ready) return this.skipArgCompute = true;
    return false
};
Script.prototype.blockNetworkLoadValue = function (b) {
    this.yield();
    if (this.data == null) {
        var c = this.evaluateExpression(b[0]),
            d = "",
            e = b[0];
        if (e && e._child) {
            e = e._child;
            if (e.func == "valueVar" || e.func == "valueParam" || e.func == "valueScriptVar" || e.func == "valueList") d = e.name
        }
        d || (d = this.evaluateExpression(b[1]));
        this.data = {
            ready: false,
            varName: d,
            networkData: null
        };
        var f = this;
        $.ajax({
            url: "/api/loadvalue",
            data: {
                n: c,
                pid: window.IDE ? window.IDE.currentProjectId : ""
            },
            success: function (b) {
                var c = "";
                try {
                    c = JSON.parse(b)
                } catch (d) {
                    try {
                        var c = {},
                            e = $($.parseXML(b));
                        _parseXml(g, e)
                    } catch (m) {
                        c = b
                    }
                }
                f.data.networkData = c;
                f.data.ready = true
            },
            error: function () {
                f.data.networkData = "error";
                f.data.ready = true;
                console.log("load data error")
            }
        });
        return this.skipArgCompute = true
    }
    if (!this.data.ready) return this.skipArgCompute = true;
    if (this.data.networkData != "error") {
        var g = null;
        if (this.scriptVars && this.scriptVars[this.data.varName] !== void 0) g = this.scriptVars;
        else if (typeof this.data.networkData == "object")
            if (this.sprite && this.sprite.lists[this.data.varName] !==
                void 0) g = this.sprite.lists;
            else if (Runtime.background.lists[this.data.varName] !== void 0) g = Runtime.background.lists;
        if (!g)
            if (this.fnArgs && this.fnArgs[this.data.varName] !== void 0) g = this.fnArgs;
            else if (this.sprite && this.sprite.variables[this.data.varName] !== void 0) g = this.sprite.variables;
            else if (Runtime.background.variables[this.data.varName] !== void 0) g = Runtime.background.variables;
        if (!g) {
            if (!this.scriptVars) this.scriptVars = {};
            g = this.scriptVars
        }
        g[this.data.varName] = this.data.networkData
    }
    return false
};

function jsonCallback() { }
Script.prototype.valueHardwareDistance = function () {
    if (!Runtime.querying) {
        Runtime.querying = true;
        $.ajax({
            dataType: "json",
            url: "http://localhost:8888/plugin/wedo?callback=?",
            jsonpCallback: "jsonCallback",
            success: function (b) {
                if (b.status == "OK") {
                    Runtime.hwTilt = b.tiltDirection;
                    Runtime.hwDistance = b.distance
                }
                Runtime.querying = false
            }
        })
    }
    return Runtime.hwDistance
};
Script.prototype.valueHardwareTilt = function () {
    if (!Runtime.querying) {
        Runtime.querying = true;
        $.ajax({
            dataType: "json",
            url: "http://localhost:8888/plugin/wedo?callback=?",
            jsonpCallback: "jsonCallback",
            success: function (b) {
                if (b.status == "OK") {
                    Runtime.hwTilt = b.tiltDirection;
                    Runtime.hwDistance = b.distance
                }
                Runtime.querying = false
            }
        })
    }
    return Runtime.hwTilt
};
Script.prototype.blockHardwareMotor = function (b) {
    this.yield();
    if (this.data == null) {
        this.data = {
            ready: false,
            networkData: null
        };
        var c = this;
        Runtime.querying = true;
        $.ajax({
            dataType: "json",
            url: "http://localhost:8888/plugin/wedo?callback=?&a=" + this.evaluateExpression(b[0]) + "&b=" + this.evaluateExpression(b[1]),
            jsonpCallback: "jsonCallback",
            success: function (b) {
                if (b.status == "OK") {
                    Runtime.hwTilt = b.tiltDirection;
                    Runtime.hwDistance = b.distance;
                    c.data.networkData = b
                }
                c.data.ready = true;
                Runtime.querying = false
            },
            error: function () {
                c.data.networkData =
                    "error";
                c.data.ready = true;
                Runtime.querying = false;
                console.log("error")
            }
        });
        return this.skipArgCompute = true
    }
    if (!this.data.ready) return this.skipArgCompute = true;
    return false
};

function hardwareNop() {
    this.dirty();
    this.sprite.buttonText = "";
    Runtime.background.font = "normal 60px Arial,Helvetica,sans-serif";
    Runtime.background.fontColor = "#000000";
    Runtime.background.fillColor = "#ffffff";
    _doBlockLooksSay(Runtime.background, "此项目包含第三方硬件blocks.  请在平板电脑上运行此项目以控制第三方硬件.");
    return false
}

function hardwareFalse() {
    return false
}
Script.prototype.blockSpheroSetSpeed = hardwareNop;
Script.prototype.blockSpheroRoll = hardwareNop;
Script.prototype.blockSpheroStop = hardwareNop;
Script.prototype.blockSpheroTurnCW = hardwareNop;
Script.prototype.blockSpheroTurnCCW = hardwareNop;
Script.prototype.blockSpheroHeading = hardwareNop;
Script.prototype.blockSpheroColor = hardwareNop;
Script.prototype.blockSpheroBrightness = hardwareNop;
Script.prototype.valueSpheroConnected = hardwareFalse;
Script.prototype.valueSpheroHeading = hardwareNop;
Script.prototype.valueSpheroSpeed = hardwareNop;
Script.prototype.valueSpheroProperty = hardwareNop;
Script.prototype.valueSpheroOdometer = hardwareNop;
Script.prototype.valueSpheroCollidedSinceLastCheck = hardwareNop;
Script.prototype.registerHardwareTrigger = hardwareNop;
Script.prototype.blockSpheroSetStabilization = hardwareNop;
Script.prototype.blockSpheroSet = hardwareNop;
Script.prototype.blockDroneTakeOff = hardwareNop;
Script.prototype.blockDroneLand = hardwareNop;
Script.prototype.blockDroneStop = hardwareNop;
Script.prototype.blockDroneEmergency = hardwareNop;
Script.prototype.blockDroneSetSpeed = hardwareNop;
Script.prototype.blockDroneForward = hardwareNop;
Script.prototype.blockDroneBackward = hardwareNop;
Script.prototype.blockDroneLeft = hardwareNop;
Script.prototype.blockDroneRight = hardwareNop;
Script.prototype.blockDroneTurnCW = hardwareNop;
Script.prototype.blockDroneTurnCCW = hardwareNop;
Script.prototype.blockDroneAnimation = hardwareNop;
Script.prototype.blockDroneUp = hardwareNop;
Script.prototype.blockDroneDown = hardwareNop;
Script.prototype.valueDroneConnected = hardwareFalse;
Script.prototype.blockDroneStartUp = hardwareNop;
Script.prototype.blockDroneStartDown = hardwareNop;
Script.prototype.blockDroneStartRotateLeft = hardwareNop;
Script.prototype.blockDroneStartRotateRight = hardwareNop;
Script.prototype.blockDroneTakePicture = hardwareNop;
Script.prototype.blockDroneFetchPicture = hardwareNop;
Script.prototype.blockDroneDeletePicture = hardwareNop;
Script.prototype.blockDroneDeleteAllPictures = hardwareNop;
Script.prototype.blockDroneVarSetNumPictures = hardwareNop;
Script.prototype.blockDroneSetProductName = hardwareNop;
Script.prototype.valueDroneHasGrabber = hardwareNop;
Script.prototype.blockDroneControlGrabber = hardwareNop;
Script.prototype.valueDroneHasCannon = hardwareNop;
Script.prototype.blockDroneControlCannon = hardwareNop;
Script.prototype.blockDroneSetFlyingMode = hardwareNop;
Script.prototype.blockDroneSetPlaneSpeed = hardwareNop;
Script.prototype.blockJumpingSumoStop = hardwareNop;
Script.prototype.blockJumpingSumoEmergency = hardwareNop;
Script.prototype.blockJumpingSumoJump = hardwareNop;
Script.prototype.blockJumpingSumoAnimation = hardwareNop;
Script.prototype.blockJumpingSumoForward = hardwareNop;
Script.prototype.blockJumpingSumoBackward = hardwareNop;
Script.prototype.blockJumpingSumoTurnCW = hardwareNop;
Script.prototype.blockJumpingSumoTurnCCW = hardwareNop;
Script.prototype.blockJumpingSumoSetSpeed = hardwareNop;
Script.prototype.blockJumpingSumoSetTurn = hardwareNop;
Script.prototype.blockJumpingSumoMove = hardwareNop;
Script.prototype.blockJumpingSumoStart = hardwareNop;
Script.prototype.blockJumpingSumoPose = hardwareNop;
Script.prototype.blockJumpingSumoSetVolume = hardwareNop;
Script.prototype.blockJumpingSumoSetAudioTheme = hardwareNop;
Script.prototype.blockWedo2RunMotorFor = hardwareNop;
Script.prototype.blockWedo2SetMotorPower = hardwareNop;
Script.prototype.blockWedo2SetMotorDirection = hardwareNop;
Script.prototype.blockWedo2MotorOn = hardwareNop;
Script.prototype.blockWedo2MotorOff = hardwareNop;
Script.prototype.blockWedo2MotorDrift = hardwareNop;
Script.prototype.valueWedo2MotorPower = hardwareNop;
Script.prototype.valueWedo2MotorDirection = hardwareNop;
Script.prototype.valueWedo2ConnectedTo = hardwareFalse;
Script.prototype.blockWedo2SetLightColor = hardwareNop;
Script.prototype.valueWedo2TiltSensorDirection = hardwareNop;
Script.prototype.blockWedo2SetTiltSensorMode = hardwareNop;
Script.prototype.valueWedo2TiltSensorMode = hardwareNop;
Script.prototype.valueWedo2TiltSensorAngle = hardwareNop;
Script.prototype.valueWedo2TiltSensorBumpCount = hardwareNop;
Script.prototype.blockWedo2SensorReset = hardwareNop;
Script.prototype.valueWedo2MotionSensorDistance = hardwareNop;
Script.prototype.blockWedo2SetMotionSensorMode = hardwareNop;
Script.prototype.valueWedo2MotionSensorMode = hardwareNop;
Script.prototype.valueWedo2MotionSensorCount = hardwareNop;
Script.prototype.blockWedo2PlayToneFor = hardwareNop;
Script.prototype.blockWedo2StopTone = hardwareNop;
Script.prototype.blockHueState = hardwareNop;
Script.prototype.valueHueState = hardwareNop;
Script.prototype.blockHueColor = hardwareNop;
Script.prototype.blockHueSetHue = hardwareNop;
Script.prototype.blockHueChangeHue = hardwareNop;
Script.prototype.blockHueBrightness = hardwareNop;
Script.prototype.valueHueBrightness = hardwareNop;
Script.prototype.blockParticleEmitStart = function () {
    if (this.sprite && this.sprite.spriteObj) {
        var b = this.sprite.spriteObj;
        if (!b.emitter) {
            b.emitter = new Proton.Emitter;
            b.emitter.p.x = b.x;
            b.emitter.p.y = b.y;
            Canvas.particles.addEmitter(b.emitter)
        }
        b.emitter.emit()
    }
};
Script.prototype.blockParticleEmitStop = function () {
    if (this.sprite && this.sprite.spriteObj) {
        var b = this.sprite.spriteObj;
        if (!b.emitter) {
            b.emitter = new Proton.Emitter;
            b.emitter.p.x = b.x;
            b.emitter.p.y = b.y;
            Canvas.particles.addEmitter(b.emitter)
        }
        b.emitter.stopEmit()
    }
};
Script.prototype.blockParticleSetRate = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        b = this.evaluateExpression(b[0]);
        c.emitter.rate = new Proton.Rate(new Proton.Span(b, b), new Proton.Span(0.1, 0.1))
    }
};
Script.prototype.blockParticleSetVectorVelocity = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitVelocity && c.emitter.removeInitialize(c.emitVelocity);
        var d = this.evaluateExpression(b[0]),
            e = this.evaluateExpression(b[1]),
            f = this.evaluateExpression(b[2]),
            b = this.evaluateExpression(b[3]);
        c.emitVelocity = new Proton.Velocity(new Proton.Span(d, e), new Proton.Span(f,
            b), "vector");
        c.emitter.addInitialize(c.emitVelocity)
    }
};
Script.prototype.blockParticleSetRadialVelocity = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitVelocity && c.emitter.removeInitialize(c.emitVelocity);
        var d = this.evaluateExpression(b[0]),
            e = this.evaluateExpression(b[1]),
            f = this.evaluateExpression(b[2]),
            b = this.evaluateExpression(b[3]);
        c.emitVelocity = new Proton.Velocity(new Proton.Span(d, e), new Proton.Span(f,
            b), "polar");
        c.emitter.addInitialize(c.emitVelocity)
    }
};
Script.prototype.blockParticleSetLifetime = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitLifetime && c.emitter.removeInitialize(c.emitLifetime);
        b = this.evaluateExpression(b[0]);
        c.emitLifetime = new Proton.Life(b);
        c.emitter.addInitialize(c.emitLifetime)
    }
};
Script.prototype.blockParticleSetMass = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitMass && c.emitter.removeInitialize(c.emitMass);
        b = this.evaluateExpression(b[0]);
        c.emitMass = new Proton.Mass(b);
        c.emitter.addInitialize(c.emitMass)
    }
};
Script.prototype.blockParticleSetGravity = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitGravity && c.emitter.removeBehaviour(c.emitGravity);
        b = this.evaluateExpression(b[0]);
        if (b > 0) {
            c.emitGravity = new Proton.Gravity(b);
            c.emitter.addBehaviour(c.emitGravity)
        }
    }
};
Script.prototype.blockParticleSetAttraction = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitAttraction && c.emitter.removeBehaviour(c.emitAttraction);
        var d = this.evaluateExpression(b[0]),
            b = this.evaluateExpression(b[1]);
        c.emitAttraction = new Proton.Attraction({
            x: c.x,
            y: c.y
        }, d, b);
        c.emitter.addBehaviour(c.emitAttraction)
    }
};
Script.prototype.blockParticleSetRadius = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitRadius && c.emitter.removeInitialize(c.emitRadius);
        b = this.evaluateExpression(b[0]);
        c.emitRadius = new Proton.Radius(b);
        c.emitter.addInitialize(c.emitRadius)
    }
};
Script.prototype.blockParticleSetScale = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitScale && c.emitter.removeBehaviour(c.emitScale);
        var d = this.evaluateExpression(b[0]),
            b = this.evaluateExpression(b[1]);
        c.emitScale = new Proton.Scale(d, b);
        c.emitter.addBehaviour(c.emitScale)
    }
};
Script.prototype.blockParticleSetAlpha = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitAlpha && c.emitter.removeBehaviour(c.emitAlpha);
        var d = this.evaluateExpression(b[0]),
            b = this.evaluateExpression(b[1]);
        c.emitAlpha = new Proton.Alpha(d, b);
        c.emitter.addBehaviour(c.emitAlpha)
    }
};
Script.prototype.blockParticleSetColor = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitColor && c.emitter.removeBehaviour(c.emitColor);
        var d = this.evaluateExpression(b[0]),
            b = this.evaluateExpression(b[1]);
        c.emitColor = new Proton.Color(d, b);
        c.emitter.addBehaviour(c.emitColor)
    }
};
Script.prototype.blockParticleSetImage = function (b) {
    if (this.sprite && this.sprite.spriteObj) {
        var c = this.sprite.spriteObj;
        if (!c.emitter) {
            c.emitter = new Proton.Emitter;
            c.emitter.p.x = c.x;
            c.emitter.p.y = c.y;
            Canvas.particles.addEmitter(c.emitter)
        }
        c.emitImage && c.emitter.removeInitialize(c.emitImage);
        b = this.evaluateExpression(b[0]);
        if (b != "none") {
            var d = new Image;
            d.onload = function () {
                c.emitImage = new Proton.ImageTarget(d);
                c.emitter.addInitialize(c.emitImage)
            };
            d.src = "imgs/particles/" + b + ".png"
        }
    }
};