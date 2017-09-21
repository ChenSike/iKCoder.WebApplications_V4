var Runtime = {
    _blockEvents: !1,
    _savedActorStates: null,
    turboMode: !1,
    aabbCollision: !1,
    hideRunOutline: !1,
    runPauseTimeout: 250,
    retainStates: !1,
    flagTriggers: [],
    keyTriggers: [],
    broadcastTriggers: [],
    collisionTriggers: [],
    externalTriggers: [],
    engageExternalTriggers: !1,
    drawTriggers: [],
    animationTriggers: [],
    systemTriggers: [],
    keys: {},
    lastKeyPressed: "",
    isScratch: !1,
    nextScript: 0,
    runningScripts: [],
    scriptId: 0,
    scriptsPausedTime: 0,
    startTimer: 0,
    spriteId: 1,
    spriteTriggers: [],
    sceneChanges: [],
    stage: null,
    background: null,
    sprites: [],
    libs: [],
    askSource: null,
    askTriggerText: "",
    currentLevelIndex: 0,
    levels: [],
    _runtimeListeners: [],
    blockEvents: function (b) {
        Runtime._blockEvents = b
    },
    getScriptId: function () {
        return Runtime.scriptId++
    },
    init: function () {
        Runtime.background = new Sprite({
            label: "Background"
        });
        Runtime.background.stretch = true;
        Runtime.background.bgtype = "stretch";
        $("#stage-canvas").empty();
        var b = $("#stage-canvas")[0],
            c = $('<video id="webcam" autoplay style="display:none;position:absolute;left:0;right:0;top:0;bottom:0;"></video>');
        $(b).append(c);
        Runtime.stage = new Canvas.Stage(b);
        Script._saveBubbleStyle(Runtime.stage, Runtime.background);
        Runtime.stage.bubble.style = "rectangular";
        Runtime.stage.addListener("clicked", function (b) {
            b == null ? Runtime.backgroundClicked() : Runtime.spriteClicked(b.sprite)
        });
        MediaCapture.init();
        $("#stage-canvas").append('<div class="ask hidden"><span class="image"><img src="ide/imgs/blank.png"/></span><span class="textprompt"></span><span class="prompt input"><input type="text"/><a class="askbutton" href="#">OK</a></span><span class="prompt buttons hidden"></span></div>');
        $("#stage-canvas").find("div").click(function (b) {
            var c = $(b.target);
            if (c[0].tagName == "A") {
                Runtime.askTriggerText = c.text();
                b.preventDefault();
                return true
            }
        }).find("input").keydown(function (b) {
            b.keyCode == 13 && $("#stage-canvas a.askbutton").focus().click()
        });
        Runtime.reset()
    },
    reset: function () {
        this.flagTriggers = [];
        this.keyTriggers = [];
        this.broadcastTriggers = [];
        this.collisionTriggers = [];
        this.externalTriggers = [];
        this.engageExternalTriggers = false;
        this.drawTriggers = [];
        this.animationTriggers = [];
        this.systemTriggers = [];
        this.keys = {};
        this.lastKeyPressed = "";
        this.isScratch = false;
        this.runningScripts = [];
        this.scriptsPausedTime = this.scriptId = 0;
        this.startTimer = Date.now();
        this.spriteId = 1;
        this.spriteTriggers = [];
        this.sceneChanges = [];
        this.sprites = [];
        this.background = new Sprite({
            label: "Background"
        });
        this.background.stretch = true;
        this.background.bgtype = "stretch";
        this._broadcastRuntimeListeners("stop");
        this.stage.setBackground(Sprites._blankImg);
        this.stage.removeAll();
        this.stage.draw();
        Physics.initPhysics();
        $("#stage-canvas .ask").addClass("hidden");
        $("#stage-canvas .prompt-overlay").detach();
        MediaCapture.hideVideo()
    },
    registerScripts: function (b) {
        for (var c = 0; c < b.scripts.length; c++) {
            var d = b.scripts[c];
            if (d.func.substring(0, 8) == "register") {
                d = new Script({
                    sprite: b,
                    scriptBlock: d
                });
                d.currentBlock = d.scriptBlock;
                d.invokeStep()
            }
        }
    },
    unregisterScripts: function (b) {
        for (var c = 0; c < b.scripts.length; c++) {
            var d = b.scripts[c];
            d.func.substring(0, 8) == "register" && Runtime.unregisterBlock(d, b)
        }
    },
    unregisterBlock: function (b, c) {
        for (var d = 0; d < this.flagTriggers.length; d++)
            if (this.flagTriggers[d].scriptBlock ==
                b && (!c || c == this.flagTriggers[d].sprite)) {
                this.flagTriggers.splice(d, 1);
                d--
            }
        for (d = 0; d < this.keyTriggers.length; d++)
            if (this.keyTriggers[d].scriptBlock == b && (!c || c == this.keyTriggers[d].sprite)) {
                this.keyTriggers.splice(d, 1);
                d--
            }
        for (d = 0; d < this.spriteTriggers.length; d++)
            if (this.spriteTriggers[d].scriptBlock == b && (!c || c == this.spriteTriggers[d].sprite)) {
                this.spriteTriggers.splice(d, 1);
                d--
            }
        for (d = 0; d < this.externalTriggers.length; d++)
            if (this.externalTriggers[d].scriptBlock == b && (!c || c == this.externalTriggers[d].sprite)) {
                this.externalTriggers.splice(d,
                    1);
                d--
            }
        for (d = 0; d < this.sceneChanges.length; d++)
            if (this.sceneChanges[d].scriptBlock == b && (!c || c == this.sceneChanges[d].sprite)) {
                this.sceneChanges.splice(d, 1);
                d--
            }
        for (d = 0; d < this.broadcastTriggers.length; d++)
            if (this.broadcastTriggers[d].scriptBlock == b && (!c || c == this.broadcastTriggers[d].sprite)) {
                this.broadcastTriggers.splice(d, 1);
                d--
            }
        for (d = 0; d < this.collisionTriggers.length; d++)
            if (this.collisionTriggers[d].scriptBlock == b && (!c || c == this.collisionTriggers[d].sprite)) {
                this.collisionTriggers.splice(d, 1);
                d--
            }
        for (d =
            0; d < this.drawTriggers.length; d++)
            if (this.drawTriggers[d].scriptBlock == b && (!c || c == this.drawTriggers[d].sprite)) {
                this.drawTriggers.splice(d, 1);
                d--
            }
        for (d = 0; d < this.animationTriggers.length; d++)
            if (this.animationTriggers[d].scriptBlock == b && (!c || c == this.animationTriggers[d].sprite)) {
                this.animationTriggers.splice(d, 1);
                d--
            }
        for (d = 0; d < this.systemTriggers.length; d++)
            if (this.systemTriggers[d].scriptBlock == b && (!c || c == this.systemTriggers[d].sprite)) {
                this.systemTriggers.splice(d, 1);
                d--
            }
        for (var e = this.runningScripts.length >
                0, d = 0; d < this.runningScripts.length; d++) {
            var f = this.runningScripts[d];
            if (f.scriptBlock == b && (!c || c == f.sprite)) {
                this.runningScripts.splice(d, 1);
                f.running = false;
                f.scriptBlock.setOutline(false);
                this.nextScript--
            }
        }
        window.WinCode && e && !Runtime.hideRunOutline && WinCode.draw()
    },
    getLibraryByName: function (b) {
        for (var c = null, d = 0; d < Runtime.libs.length; d++)
            if (Runtime.libs[d].classname == b) {
                c = Runtime.libs[d];
                break
            }
        return c
    },
    clearLibraries: function () {
        Runtime.libs = []
    },
    requireLibrary: function (b, c) {
        for (var d = false, e = 0; e <
            Runtime.libs.length; e++)
            if (Runtime.libs[e].classname == b) {
                d = Runtime.libs[e];
                break
            }
        d ? c && c(d) : $.ajax({
            url: "api/libraryload.aspx",
            type: "POST",
            data: {
                n: b
            },
            success: function (b) {
                b = JSON.parse(b);
                b = ObjectIO.deserializeLibrary(b);
                Runtime.libs.push(b);
                c && c(b)
            }
        })
    },
    requireLibraryId: function (b, c) {
        for (var d = false, e = 0; e < Runtime.libs.length; e++)
            if (Runtime.libs[e].classname == b) {
                d = true;
                break
            }
        d || $.ajax({
            url: "api/libraryload.aspx",
            type: "POST",
            data: {
                id: b
            },
            success: function (b) {
                b = JSON.parse(b);
                b = ObjectIO.deserializeLibrary(b);
                Runtime.libs.push(b);
                c && c(b)
            }
        })
    },
    addRuntimeListener: function (b) {
        this._runtimeListeners.indexOf(b) < 0 && this._runtimeListeners.push(b)
    },
    removeRuntimeListener: function (b) {
        b = this._runtimeListeners.indexOf(b);
        b >= 0 && this._runtimeListeners.splice(b, 1)
    },
    removeAllRuntimeListeners: function () {
        this._runtimeListeners = []
    },
    _broadcastRuntimeListeners: function (b, c, d) {
        for (var e = 0; e < Runtime._runtimeListeners.length; e++) Runtime._runtimeListeners[e](b, c, d)
    },
    _findInboundEvents: function (b) {
        var c = [];
        if (b.func == "registerBroadcastTrigger") {
            var d =
                b.label.getSocketAtChild(0);
            d && (d.label && d.label.length > 0) && (c = mergeLists(c, d.label))
        } else if (b.func == "registerFlagTrigger") c = mergeLists(c, "[" + b.func + "]");
        else if (b.func == "registerKeyTrigger") {
            d = b.label.getSocketAtChild(0);
            c = mergeLists(c, "[" + b.func + "|" + d.label + "]")
        } else b.func == "registerSpriteTrigger" && (c = mergeLists(c, "[" + b.func + "]"));
        return c
    },
    _findOutboundEvents: function (b) {
        var c = [];
        if (b instanceof Block) {
            if (b.func == "blockControlBroadcast" || b.func == "blockControlBroadcastWait" || b.func == "blockControlPostMessage" ||
                b.func == "blockControlPostMessageAndWait") {
                var d = b.label.getSocketAtChild(0);
                d && (d.label && d.label.length > 0) && c.push(d.label)
            }
            for (d = 0; d < b._containers.length; d++) c = mergeLists(c, Runtime._findOutboundEvents(b._containers[d]));
            b.next && (c = mergeLists(c, Runtime._findOutboundEvents(b.next)))
        }
        return c
    },
    _findEvents: function (b) {
        var c = [];
        if (b instanceof Block) {
            if (b.func == "registerBroadcastTrigger" || b.func == "blockControlBroadcast" || b.func == "blockControlBroadcastWait" || b.func == "blockControlPostMessage" || b.func ==
                "blockControlPostMessageAndWait") {
                var d = b.label.getSocketAtChild(0);
                d && (d.label && d.label.length > 0) && c.push(d.label)
            }
            for (d = 0; d < b._containers.length; d++) c = mergeLists(c, Runtime._findEvents(b._containers[d]));
            b.next && (c = mergeLists(c, Runtime._findEvents(b.next)))
        }
        return c
    },
    findAnimationsFor: function (b) {
        var c = [];
        if (b == "stage" || b == "any")
            for (var d = 0; d < Runtime.background.scripts.length; d++) var e = Runtime.background.scripts[d],
                c = mergeLists(c, Runtime._findAnimations(e));
        if (b != "stage")
            for (d = 0; d < Runtime.sprites.length; d++) {
                var f =
                    Runtime.sprites[d];
                if (f.label == b || b == "any") {
                    for (var g = 0; g < f.scripts.length; g++) {
                        e = f.scripts[g];
                        c = mergeLists(c, Runtime._findAnimations(e))
                    }
                    if (b != "any") break
                }
            }
        c.sort();
        return c
    },
    _findAnimations: function (b) {
        var c = [];
        if (b instanceof Block) {
            if (b.func == "registerAnimationDone" || b.func == "blockAnimationMoveBy" || b.func == "blockAnimationMoveTo" || b.func == "blockAnimationScaleBy" || b.func == "blockAnimationScaleTo" || b.func == "blockAnimationRotateBy" || b.func == "blockAnimationRotateTo" || b.func == "blockAnimationBezierBy" ||
                b.func == "blockAnimationBezierTo" || b.func == "blockAnimationEffectTo" || b.func == "blockAnimationEffectBy" || b.func == "blockAnimationSimpleMoveBy" || b.func == "blockAnimationSimpleMoveTo" || b.func == "blockAnimationSimpleScaleBy" || b.func == "blockAnimationSimpleScaleTo" || b.func == "blockAnimationSimpleRotateBy" || b.func == "blockAnimationSimpleRotateTo" || b.func == "blockAnimationSimpleBezierBy" || b.func == "blockAnimationSimpleBezierTo" || b.func == "blockAnimationSimpleEffectTo" || b.func == "blockAnimationSimpleEffectBy" || b.func ==
                "blockAnimationAnimate" || b.func == "blockAnimationSwitchCostume" || b.func == "blockAnimationSimpleSwitchCostume" || b.func == "blockAnimationWaitFor" || b.func == "blockAnimationStop") {
                var d = b.label.getSocketAtChild(b.label.getNumSockets() - 1);
                d && (d.label && d.label.length > 0) && c.push(d.label)
            }
            for (d = 0; d < b._containers.length; d++) c = mergeLists(c, Runtime._findAnimations(b._containers[d]));
            b.next && (c = mergeLists(c, Runtime._findAnimations(b.next)))
        }
        return c
    },
    findInboundEventsOf: function (b) {
        var c = [];
        if (b == "stage" || b == "any")
            for (var d =
                    0; d < Runtime.background.scripts.length; d++) var e = Runtime.background.scripts[d],
                c = mergeLists(c, Runtime._findInboundEvents(e));
        if (b != "stage")
            for (d = 0; d < Runtime.sprites.length; d++) {
                var f = Runtime.sprites[d];
                if (f.label == b || b == "any") {
                    for (var g = 0; g < f.scripts.length; g++) {
                        e = f.scripts[g];
                        c = mergeLists(c, Runtime._findInboundEvents(e))
                    }
                    if (b != "any") break
                }
            }
        c.sort();
        return c
    },
    findOutboundEventsOf: function (b) {
        var c = [];
        if (b == "stage" || b == "any")
            for (var d = 0; d < Runtime.background.scripts.length; d++) var e = Runtime.background.scripts[d],
                c = mergeLists(c, Runtime._findOutboundEvents(e));
        if (b != "stage")
            for (d = 0; d < Runtime.sprites.length; d++) {
                var f = Runtime.sprites[d];
                if (f.label == b || b == "any") {
                    for (var g = 0; g < f.scripts.length; g++) {
                        e = f.scripts[g];
                        c = mergeLists(c, Runtime._findOutboundEvents(e))
                    }
                    if (b != "any") break
                }
            }
        c.sort();
        return c
    },
    findEventsOf: function (b) {
        var c = [];
        if (b == "stage" || b == "any")
            for (var d = 0; d < Runtime.background.scripts.length; d++) var e = Runtime.background.scripts[d],
                c = mergeLists(c, Runtime._findEvents(e));
        if (b != "stage")
            for (d = 0; d < Runtime.sprites.length; d++) {
                var f =
                    Runtime.sprites[d];
                if (f.label == b || b == "any") {
                    for (var g = 0; g < f.scripts.length; g++) {
                        e = f.scripts[g];
                        c = mergeLists(c, Runtime._findEvents(e))
                    }
                    if (b != "any") break
                }
            }
        c.sort();
        return c
    },
    findVariablesOf: function (b, c) {
        var d = [];
        if (b == "stage" || b == "any" || c)
            for (var e in Runtime.background.variables) d = mergeLists(d, e);
        if (b != "stage")
            for (var f = 0; f < Runtime.sprites.length; f++) {
                var g = Runtime.sprites[f];
                if (g.label == b || b == "any") {
                    for (e in g.variables) d = mergeLists(d, e);
                    if (b != "any") break
                }
            }
        d.sort();
        return d
    },
    findBlockWithTag: function (b) {
        for (var c =
                Runtime.background.scripts.length - 1; c >= 0; c--) {
            var d = Runtime._findBlockWithTag(Runtime.background.scripts[c], b);
            if (d != null) return {
                actor: null,
                block: d
            }
        }
        for (c = 0; c < Runtime.sprites.length; c++)
            for (var e = Runtime.sprites[c], f = e.scripts.length - 1; f >= 0; f--) {
                d = Runtime._findBlockWithTag(e.scripts[f], b);
                if (d != null) return {
                    actor: e,
                    block: d
                }
            }
        return null
    },
    _findBlockWithTag: function (b, c) {
        if (b instanceof Block) {
            if (b.tags && b.tags.indexOf(c) >= 0) return b;
            var d = Runtime._findBlockWithTag(b.label, c);
            if (d != null) return d;
            for (var e =
                    0; e < b._containers.length; e++) {
                d = Runtime._findBlockWithTag(b._containers[e], c);
                if (d != null) return d
            }
            if (b.next != null) {
                d = Runtime._findBlockWithTag(b.next, c);
                if (d != null) return d
            }
        } else if (b instanceof Label) {
            if (b.tags && b.tags.indexOf(c) >= 0) return b;
            for (e = 0; e < b._children.length; e++) {
                d = Runtime._findBlockWithTag(b._children[e], c);
                if (d != null) return d
            }
        } else if (b instanceof LabelInput && b._child != null) {
            d = Runtime._findBlockWithTag(b._child, c);
            if (d != null) return d
        }
        return null
    },
    triggerFlag: function (b) {
        for (var c = 0; c <
            Runtime.flagTriggers.length; c++) (!b || Runtime.flagTriggers[c].sprite == b) && Runtime.scheduleToRun(Runtime.flagTriggers[c]);
        Runtime.engageExternalTriggers = true;
        Runtime.runningScripts.length == 0 && Runtime.externalTriggers.length > 0 && window.requestAnimFrame(function () {
            Runtime.runner()
        });
        return false
    },
    triggerKeyEvent: function (b) {
        var c = null;
        if (!Runtime._blockEvents && b.target.tagName != "INPUT" && b.target.tagName != "SELECT" && b.target.tagName != "TEXTAREA") {
            b.which >= 65 && b.which <= 90 ? c = String.fromCharCode(b.which + 32) :
                b.which >= 48 && b.which <= 57 ? c = String.fromCharCode(b.which) : b.which == 38 ? c = "up arrow" : b.which == 40 ? c = "down arrow" : b.which == 37 ? c = "left arrow" : b.which == 39 ? c = "right arrow" : b.which == 32 ? c = "space" : b.which == 13 && (c = "return");
            Runtime.lastKeyPressed = c;
            Runtime.triggerKeyDown(c)
        }
        return c
    },
    triggerKeyDown: function (b) {
        if (b) {
            Runtime.keys[b] = true;
            for (var c = 0; c < Runtime.keyTriggers.length; c++) {
                var d = Runtime.keyTriggers[c].scriptBlock;
                d.func == "registerKeyTrigger" && (d.label.getSocketAtChild(0).label == b || d.label.getSocketAtChild(0).label ==
                    "any") && Runtime.scheduleToRun(Runtime.keyTriggers[c], true)
            }
        }
    },
    triggerKeyUpEvent: function (b) {
        var c = null;
        if (!Runtime._blockEvents && b.target.tagName != "INPUT" && b.target.tagName != "SELECT" && b.target.tagName != "TEXTAREA") {
            b.which >= 65 && b.which <= 90 ? c = String.fromCharCode(b.which + 32) : b.which >= 48 && b.which <= 57 ? c = String.fromCharCode(b.which) : b.which == 38 ? c = "up arrow" : b.which == 40 ? c = "down arrow" : b.which == 37 ? c = "left arrow" : b.which == 39 ? c = "right arrow" : b.which == 32 ? c = "space" : b.which == 13 && (c = "return");
            c && (Runtime.keys[c] =
                false)
        }
        return c
    },
    backgroundClicked: function () {
        if (Runtime._blockEvents || !Runtime.stage) return false;
        for (var b = 0; b < Runtime.spriteTriggers.length; b++) Runtime.spriteTriggers[b].sprite == Runtime.background && Runtime.scheduleToRun(Runtime.spriteTriggers[b]);
        return false
    },
    spriteClicked: function (b) {
        if (Runtime._blockEvents || !Runtime.stage) return false;
        for (var c = 0; c < Runtime.spriteTriggers.length; c++) Runtime.spriteTriggers[c].sprite == b && Runtime.scheduleToRun(Runtime.spriteTriggers[c]);
        return false
    },
    processExternalTriggers: function () {
        for (var b =
                0; b < Runtime.externalTriggers.length; b++) {
            var c = Runtime.externalTriggers[b];
            if (!c.running) {
                var d = c.scriptBlock.label.getSocketAtChild(0);
                if (d._child)
                    if (d = c.evaluateExpression(d._child)) {
                        if (!c.triggered) {
                            c.triggered = true;
                            Runtime.scheduleToRun(c)
                        }
                    } else {
                        if (c.triggered) c.triggered = false
                    }
                else {
                    var d = d.label,
                        e = c.scriptBlock.label.getSocketAtChild(1);
                    if (e) {
                        e = parseFloat(e.label);
                        if (d == "loudness") {
                            MediaCapture.isCapturingAudio() || MediaCapture.startCaptureAudioLevel();
                            d = MediaCapture.getSoundLevel() * 100;
                            d > e &&
                                Runtime.scheduleToRun(c)
                        } else if (d == "timer") {
                            d = (Date.now() - Runtime.startTimer) / 1E3;
                            d > e && Runtime.scheduleToRun(c)
                        } else if (d == "video motion" && c.sprite) {
                            var d = c.sprite.spriteObj.getBounds(),
                                f = MediaCapture.getBuffer(d.left, d.top, d.right - d.left, d.bottom - d.top);
                            if (f) {
                                d = 0;
                                f = f.data;
                                for (b = 0; b < f.length; b = b + 4) f[b] && d++;
                                d = parseInt(d * 100 / (f.length / 4));
                                d > e && Runtime.scheduleToRun(c)
                            }
                        }
                    }
                }
            }
        }
    },
    hasAnimations: function () {
        for (var b = 0; b < Runtime.sprites.length; b++)
            if (Runtime.sprites[b].getNumAnimations() > 0) return true;
        return false
    },
    removeAnimations: function () {
        for (var b = 0; b < Runtime.sprites.length; b++) Runtime.sprites[b].removeAnimations()
    },
    processAnimations: function () {
        for (var b = false, c = 0; c < Runtime.sprites.length; c++) {
            var d = Runtime.sprites[c];
            d.animate();
            d.getNumAnimations() > 0 && (b = true)
        }
        return b
    },
    adjustAnimationTimes: function (b) {
        for (var c = 0; c < Runtime.sprites.length; c++) Runtime.sprites[c].adjustAnimationTime(b)
    },
    redrawSprite: function (b, c) {
        if (!Runtime.stage) return false;
        Runtime.stage.drawLayer = c ? c : Runtime.stage.actorsLayer;
        for (var d =
                0; d < Runtime.drawTriggers.length; d++) {
            var e = Runtime.drawTriggers[d];
            if ((!b || e.sprite == b) && !e.running) {
                var f = e.sprite.spriteObj;
                if (f) {
                    var g = f.drawWidth,
                        h = f.drawHeight;
                    f.drawWidth = 10;
                    f.drawHeight = 10;
                    Runtime.runScript(e);
                    (!g || !h || f.drawWidth != g || f.drawHeight != h) && Physics.updateBody(e.sprite.spriteObj);
                    f.width = f.drawWidth;
                    f.height = f.drawHeight;
                    f.cx = f.drawWidth / 2;
                    f.cy = f.drawHeight / 2
                }
            }
        }
        return false
    },
    triggerAnimationDone: function (b, c) {
        for (var d = 0; d < Runtime.animationTriggers.length; d++) {
            var e = Runtime.animationTriggers[d],
                f = e.scriptBlock;
            (!c || c == e.sprite) && (f.func == "registerAnimationDone" && (f.label.getSocketAtChild(0).label == b || f.label.getSocketAtChild(0).label == "any")) && Runtime.scheduleToRun(e)
        }
    },
    stopBlock: function (b) {
        for (var c = Runtime.runningScripts, d = 0; d < c.length; d++)
            if (c[d].scriptBlock == b) {
                c[d].running = false;
                c[d].receivedValue = void 0;
                c[d].scriptBlock.setOutline(false);
                Runtime.runningScripts.splice(d, 1);
                break
            }
    },
    startScripts: function () {
        Runtime.scriptsPausedTime = 0;
        Runtime.startTimer = Date.now();
        if (Runtime.runningScripts.length ===
            0) {
            Runtime.savedBackground = {
                costume: Runtime.background ? Runtime.background.currentCostume : null,
                tileOffsetX: Runtime.stage ? Runtime.stage.tileLayer.getScrollOffsetX() : null,
                tileOffsetY: Runtime.stage ? Runtime.stage.tileLayer.getScrollOffsetY() : null
            };
            Runtime.savedSprites = [];
            for (var b = 0; b < Runtime.sprites.length; b++) {
                var c = Runtime.sprites[b],
                    d = Physics.getSpriteProperties(c.spriteObj);
                if (!c.instantiated) {
                    d = Physics.getSpriteProperties(c.spriteObj);
                    Runtime.savedSprites.push({
                        costume: c.currentCostume,
                        x: c.spriteObj.x,
                        y: c.spriteObj.y,
                        scale: c.spriteObj.scale.x,
                        rotation: c.spriteObj.rotation,
                        isStatic: d.isStatic,
                        geometry: d.geometry,
                        density: d.density,
                        friction: d.friction,
                        restitution: d.restitution
                    })
                }
            }
        }
        Runtime.triggerFlag()
    },
    stopScripts: function (b, c) {
        if (!b) Runtime.engageExternalTriggers = false;
        Runtime.scriptsPausedTime = 0;
        for (var d = Runtime.runningScripts, e = [], f = 0; f < d.length; f++)
            if ((!b || b == d[f].sprite) && (!c || c != d[f])) {
                d[f].running = false;
                d[f].receivedValue = void 0;
                d[f].scriptBlock.setOutline(false);
                d[f].reset()
            } else e.push(d[f]);
        Runtime.runningScripts = e;
        if (Runtime.runningScripts.length == 0) {
            soundManager.stopAll();
            Runtime.keys = {};
            Runtime.stage.mouseDown = false;
            Runtime.stage && Physics.stopSimulation()
        }
        if (b == Runtime.askSource) {
            $("#stage-canvas .ask").addClass("hidden");
            $("#stage-canvas .prompt-overlay").detach()
        }
        if (!b && !c) {
            $("#stage-canvas .ask").addClass("hidden");
            $("#stage-canvas .prompt-overlay").detach();
            Runtime.removeAnimations();
            Runtime.cleanup();
            Runtime.turboMode = false;
            Runtime.hideRunOutline = false;
            if (Runtime.savedBackground &&
                Runtime.savedSprites) {
                if (!Runtime.retainStates) {
                    Runtime.background.setCostumeByName(Runtime.savedBackground.costume);
                    Runtime.stage.tileLayer.setScrollOffset(Runtime.savedBackground.tileOffsetX, Runtime.savedBackground.tileOffsetY);
                    for (f = 0; f < Runtime.sprites.length && f < Runtime.savedSprites.length; f++) {
                        b = Runtime.sprites[f];
                        d = Runtime.savedSprites[f];
                        b.setCostumeByName(d.costume);
                        b.spriteObj.setPosition(d.x, d.y);
                        b.spriteObj.setScale(d.scaled);
                        b.spriteObj.setRotation(d.rotation);
                        Physics.resetBody(b.spriteObj);
                        Physics.updateFixture(b.spriteObj, d.density, d.friction, d.restitution)
                    }
                }
                delete Runtime.savedBackground;
                delete Runtime.savedSprites;
                Runtime.stage.draw()
            }
        }
        window.WinCode && !Runtime.hideRunOutline && WinCode.draw();
        return false
    },
    pauseScripts: function () {
        if (!this.scriptsPausedTime) {
            this.scriptsPausedTime = Date.now();
            window.WinStage && window.WinStage.showPaused()
        }
    },
    resumeScripts: function () {
        if (this.scriptsPausedTime) {
            var b = this.scriptsPausedTime - this.startTimer;
            this.scriptsPausedTime = 0;
            this.startTimer = Date.now() -
                b;
            Runtime.adjustAnimationTimes();
            (Runtime.runningScripts.length > 0 || Runtime.engageExternalTriggers && Runtime.externalTriggers.length > 0 || hasAnimations) && window.requestAnimFrame(function () {
                Runtime.runner()
            });
            window.WinStage && window.WinStage.showStarted()
        }
    },
    sendEvent: function (b, c, d) {
        Runtime._broadcastRuntimeListeners("post", b, d);
        for (var e = 0; e < Runtime.broadcastTriggers.length; e++) {
            var f = Runtime.broadcastTriggers[e],
                g = f.scriptBlock.label.getSocketAtChild(0);
            if (g != null && g.label == b && (c == "any" || f.sprite.label ==
                    c || (c == "stage" || c == "self") && f.sprite == Runtime.background)) {
                f.receivedValue = d;
                f.messageSource = Runtime.stage.label;
                Runtime.scheduleToRun(f)
            }
        }
    },
    isRunning: function () {
        return Runtime.runningScripts.length > 0 || Runtime.engageExternalTriggers
    }
},
    reqAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1E3 / 60)
    };
window.requestAnimFrame = function (b) {
    if (!Runtime._requestedUpdate && b) {
        Runtime._requestedUpdate = true;
        reqAnimFrame(function () {
            Runtime._requestedUpdate = false;
            b()
        })
    }
};
Runtime.cleanup = function () {
    Physics.stopSimulation();
    Runtime.background.varTransient = {};
    if (Runtime.background.varDefaults)
        for (var b in Runtime.background.varDefaults) Runtime.background.cloudVariables && (!Runtime.background.cloudVariables[b] && Runtime.background.varDefaults[b] !== null) && (Runtime.background.variables[b] = Runtime.background.varDefaults[b]);
    for (var c = 0; c < Runtime.sprites.length; c++) {
        var d = Runtime.sprites[c];
        d.varTransient = {};
        if (d.varDefaults)
            for (b in d.varDefaults) d.varDefaults[b] !== null &&
                (d.variables[b] = d.varDefaults[b])
    }
    b = [];
    for (c = 0; c < Runtime.sprites.length; c++) {
        Runtime.sprites[c].instantiated && b.push(Runtime.sprites[c]);
        Runtime.sprites[c].spriteObj.text = null
    }
    for (c = 0; c < b.length; c++) b[c].deleteActor();
    Runtime.stage.text = null;
    for (c = 0; c < Runtime.background.scripts.length; c++) Runtime.background.scripts[c].setOutline(false);
    for (c = 0; c < Runtime.sprites.length; c++) {
        b = Runtime.sprites[c];
        for (d = 0; d < b.scripts.length; d++) b.scripts[d].setOutline(false)
    }
    for (c = 0; c < Runtime.libs.length; c++) {
        b = Runtime.libs[c];
        for (d = 0; d < b.scripts.length; d++) b.scripts[d].setOutline(false)
    }
    $("#stage-canvas .ask").addClass("hidden");
    $("#stage-canvas .prompt-overlay").detach();
    Runtime.stage.draw();
    MediaCapture.hideVideo();
    MediaCapture.stopCaptureAudioLevel();
    Runtime.keys = {};
    Runtime.stage.mouseDown = false
};
Runtime.scheduleToRun = function (b, c) {
    Runtime.stage.enableDragging(false);
    for (var d = false, e = 0; e < Runtime.runningScripts.length; e++)
        if (Runtime.runningScripts[e] == b && b.running) {
            if (c) return;
            b.reset();
            b.running = true;
            if (window.WinCode && !Runtime.hideRunOutline) {
                b.scriptBlock.setOutline(true);
                window.WinCode.draw()
            }
            d = true;
            break
        }
    if (!d) {
        b.reset();
        b.running = true;
        window.WinStage && window.WinStage.showStarted();
        if (b.currentBlock) {
            if (window.WinCode && !Runtime.hideRunOutline) {
                b.scriptBlock.setOutline(true);
                window.WinCode.draw()
            }
            Runtime.runningScripts.push(b);
            if (Runtime.runningScripts.length == 1 && (!Runtime.engageExternalTriggers || Runtime.externalTriggers.length == 0)) {
                Runtime.nextScript = 0;
                Runtime._broadcastRuntimeListeners("start");
                window.requestAnimFrame(function () {
                    Runtime.redrawSprite(null);
                    Runtime.runner()
                });
                window.g_mcpeConnection && window.g_mcpeConnection.startMCEvents()
            }
        } else b.running = false
    }
};
Runtime.runScript = function (b) {
    var c = Date.now() + 1E3;
    b.running = true;
    b.currentBlock = b.scriptBlock.next;
    b.doYield = false;
    for (window.WinCode && window.WinCode._hilightStep && b.scriptBlock.setCurrent() ; b.running && Date.now() < c;)
        for (var d = 100; b.running && --d >= 0;)
            if (b.currentBlock) {
                b.isDirty = false;
                b.invokeStep();
                if (b.isDirty) b.isDirty = false
            } else {
                b.running = false;
                b.receivedValue = void 0;
                break
            }
    b.running = false;
    return d >= 0
};
Runtime.runner = function () {
    var b = false;
    if (!Runtime.scriptsPausedTime) {
        Canvas.particles.update();
        Physics.isSimulationRunning() && Physics.updateSimulation();
        if (Runtime.runningScripts.length <= 0 && !Runtime.engageExternalTriggers && !Runtime.hasAnimations() && !Physics.isSimulationRunning()) {
            Runtime.keyTriggers.length == 0 && (Runtime.spriteTriggers.length == 0 && !Runtime.engageExternalTriggers) && Runtime._broadcastRuntimeListeners("stop");
            for (var c = 0; c < Runtime.background.scripts.length; c++) Runtime.background.scripts[c].setOutline(false);
            for (c = 0; c < Runtime.sprites.length; c++)
                for (var b = Runtime.sprites[c], d = 0; d < b.scripts.length; d++) b.scripts[d].setOutline(false);
            $("#stage-canvas .ask").addClass("hidden");
            $("#stage-canvas .prompt-overlay").detach();
            console.log("scripts stopped")
        } else {
            if (this.nextScript < 0 && Runtime.runningScripts.length > 0) this.nextScript = 0;
            for (var d = Date.now() + 1E3 / 60, e = 20; Runtime.runningScripts.length > 0 && (Runtime.turboMode && Date.now() < d || !Runtime.turboMode && --e > 0) ;) {
                var f = Runtime.runningScripts[this.nextScript];
                if (!f) break;
                for (f.doYield = false;
                    (!f.doYield || f.doBlock) && f.running;) {
                    if (f.currentBlock) {
                        f.isDirty = false;
                        if (f.pauseState()) break;
                        else {
                            f.invokeStep();
                            if (f.isDirty) {
                                f.isDirty = false;
                                b = true
                            }
                        }
                    }
                    if (f.currentBlock == null || !f.running)
                        for (c = 0; c < Runtime.runningScripts.length; c++)
                            if (Runtime.runningScripts[c] == f) {
                                Runtime.runningScripts.splice(c, 1);
                                f.running = false;
                                f.receivedValue = void 0;
                                window.WinCode && !Runtime.hideRunOutline && f.scriptBlock.setOutline(false);
                                if (c == this.nextScript && --this.nextScript < 0) this.nextScript = 0;
                                break
                            }
                    if (Runtime.scriptsPausedTime) return
                }
                if (Runtime.runningScripts.length >
                    0) this.nextScript = (this.nextScript + 1) % Runtime.runningScripts.length;
                else break
            }
            window.WinCode && !Runtime.hideRunOutline && WinCode.draw();
            for (c = 0; c < Runtime.sprites.length; c++) Runtime.sprites[c].updateCostume();
            Runtime.background.updateCostume();
            Runtime.processExternalTriggers();
            (c = Runtime.processAnimations()) && (b = true);
            b && Runtime.stage && Runtime.stage.draw();
            if (Runtime.runningScripts.length > 0 || Runtime.engageExternalTriggers && Runtime.externalTriggers.length > 0 || c || Physics.isSimulationRunning()) window.requestAnimFrame(function () {
                Runtime.runner()
            });
            else {
                Runtime.keyTriggers.length == 0 && (Runtime.spriteTriggers.length == 0 && !Runtime.engageExternalTriggers) && Runtime._broadcastRuntimeListeners("stop");
                for (c = 0; c < Runtime.background.scripts.length; c++) Runtime.background.scripts[c].setOutline(false);
                for (c = 0; c < Runtime.sprites.length; c++) {
                    b = Runtime.sprites[c];
                    for (d = 0; d < b.scripts.length; d++) b.scripts[d].setOutline(false)
                }
                for (c = 0; c < Runtime.libs.length; c++) {
                    b = Runtime.libs[c];
                    for (d = 0; d < b.scripts.length; d++) b.scripts[d].setOutline(false)
                }
                $("#stage-canvas .ask").addClass("hidden");
                $("#stage-canvas .prompt-overlay").detach();
                console.log("scripts stopped")
            }
        }
    }
};
Runtime.loadVariables = function (b) {
    var c = null;
    if (window.IDE && window.IDE.currentProjectId) c = window.IDE.currentProjectId;
    else if (window.projectId) c = window.projectId;
    c ? $.ajax({
        url: "/api/datagetvars",
        type: "POST",
        data: {
            id: c
        },
        success: function (c) {
            if (c) {
                c = JSON.parse(c);
                if (Runtime.background.cloudVariables && c.v)
                    for (var e in c.v) Runtime.background.cloudVariables[e] && (Runtime.background.variables[e] = c.v[e]);
                if (c.l)
                    for (e in c.l) Runtime.background.cloudLists[e] && (Runtime.background.lists[e] = c.l[e])
            }
            b && b()
        },
        error: function () {
            b &&
                b()
        }
    }) : b && b()
};
Runtime.loadCloudVar = function (b) {
    var c = null;
    if (window.IDE && window.IDE.currentProjectId) c = window.IDE.currentProjectId;
    else if (window.projectId) c = window.projectId;
    c && (Runtime.background.cloudVariables && Runtime.background.cloudVariables[b] !== void 0) && $.ajax({
        url: "/api/datagetvar",
        type: "POST",
        data: {
            id: c,
            n: b
        },
        success: function (c) {
            Runtime.background.variables[b] = JSON.parse(c)
        }
    })
};
Runtime.updateCloudVar = function (b) {
    var c = null;
    if (window.IDE && window.IDE.currentProjectId) c = window.IDE.currentProjectId;
    else if (window.projectId) c = window.projectId;
    c && (Runtime.background.cloudVariables && Runtime.background.cloudVariables[b] !== void 0) && $.ajax({
        url: "/api/datasetvar",
        type: "POST",
        data: {
            id: c,
            n: b,
            v: JSON.stringify(Runtime.background.variables[b])
        }
    })
};
Runtime.loadCloudVar = function (b) {
    var c = null;
    if (window.IDE && window.IDE.currentProjectId) c = window.IDE.currentProjectId;
    else if (window.projectId) c = window.projectId;
    c && (Runtime.background.cloudLists && Runtime.background.cloudLists[b] !== void 0) && $.ajax({
        url: "/api/datagetlist",
        type: "POST",
        data: {
            id: c,
            n: b
        },
        success: function (c) {
            Runtime.background.lists[b] = JSON.parse(c)
        }
    })
};
Runtime.updateCloudList = function (b) {
    var c = null;
    if (window.IDE && window.IDE.currentProjectId) c = window.IDE.currentProjectId;
    else if (window.projectId) c = window.projectId;
    c && (Runtime.background.cloudLists && Runtime.background.cloudLists[b] !== void 0) && $.ajax({
        url: "/api/datasetlist",
        type: "POST",
        data: {
            id: c,
            n: b,
            v: JSON.stringify(Runtime.background.lists[b])
        }
    })
};
Runtime.muteAllSounds = function () {
    Runtime.muted = true;
    soundManager.mute()
};
Runtime.unmuteAllSounds = function () {
    Runtime.muted = false;
    soundManager.unmute()
};
Runtime.addWatcher = function (b, c, d, e, f) {
    var g = "",
        h = null,
        b = !b || b == Runtime.background ? "Stage" : typeof b == "string" ? b : b.label;
    if (typeof c == "string") {
        g = c;
        h = new Label(g_steps.valueVarPropGet);
        h.setValue(0, c);
        h.setValue(1, b)
    } else if (c instanceof Label) {
        g = c.labelText;
        h = new Label(g_steps.valueVarPropGet);
        h.setValue(0, c.labelText);
        h.setValue(1, b)
    }
    if (h) {
        h = ObjectIO.genValueObj(h);
        c = {
            label: g + " watcher",
            scripts: [{
                func: "registerFlagTrigger",
                values: [],
                next: {
                    func: "blockPenSetFont",
                    values: [{
                        type: "choice",
                        value: "bold"
                    },
                        {
                            type: "choice",
                            value: "24"
                        }, {
                            type: "choice",
                            value: "Arial,Helvetica,sans-serif"
                        }
                    ],
                    next: {
                        func: "blockPhysicsSetActorActive",
                        values: [{
                            type: "string",
                            value: "self"
                        }, {
                            type: "boolean",
                            value: "false"
                        }],
                        next: {
                            func: "blockControlForever",
                            values: [],
                            containers: [{
                                func: "blockLooksSetLabel",
                                values: [{
                                    type: "wrapper",
                                    func: "valueOpTextSubstring",
                                    values: [{
                                        type: "string",
                                        value: g
                                    }, {
                                        type: "number",
                                        value: 1
                                    }, {
                                        type: "number",
                                        value: 6
                                    }]
                                }, {
                                    type: "string",
                                    value: ": "
                                }, {
                                    type: "wrapper",
                                    func: "valueOpTextSubstring",
                                    values: [h, {
                                        type: "number",
                                        value: 1
                                    },
                                        {
                                            type: "number",
                                            value: 8
                                        }
                                    ]
                                }]
                            }]
                        }
                    }
                },
                x: 40,
                y: 40
            }],
            costumes: [{
                name: "gray",
                img: "medialib/543489c584aafafe5000084d.png",
                cx: 95,
                cy: 24.5
            }, {
                name: "blue",
                img: "medialib/543489c584aafafe500007d1.png",
                cx: 95,
                cy: 24.5
            }, {
                name: "green",
                img: "medialib/543489c584aafafe50000925.png",
                cx: 95,
                cy: 24.5
            }, {
                name: "orange",
                img: "medialib/543489c584aafafe50000901.png",
                cx: 95,
                cy: 24.5
            }, {
                name: "yellow",
                img: "medialib/543489c584aafafe5000092d.png",
                cx: 95,
                cy: 24.5
            }],
            currentCostume: 3,
            sounds: [],
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            rotateLock: 0,
            hidden: false,
            isHidden: false,
            volume: 100,
            zIndex: 0,
            font: "bold 24px Arial,Helvetica,sans-serif",
            physics: {
                isStatic: false,
                isActive: false,
                geometry: "rectangular",
                density: 1,
                friction: 0.5,
                restitution: 0.2
            },
            variables: {},
            varDefaults: {},
            lists: {},
            classname: "watcher"
        };
        if (f) c.scale = f;
        if (d && e) {
            c.x = d;
            c.y = e
        }
        return ObjectIO.deserializeSprite(c)
    }
    return null
};