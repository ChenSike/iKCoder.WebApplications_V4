function SwiftCodeGen() {
    this._loopLevel = this.indentLevel = 0;
    this._onAnimationDoneCount = this._onCollisionCount = this._onDrawCount = this._onCloneCount = this._onMessageCount = this._onSceneChangeCount = this._onActorClickCount = this._onKeyPressCount = this._onStartCount = 1
}
SwiftCodeGen.prototype.reset = function () {
    this._loopLevel = 0
};
SwiftCodeGen.prototype.isIdentifier = function (b) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(b)
};
SwiftCodeGen.prototype.reset = function () {
    this._loopLevel = 0
};
SwiftCodeGen.prototype.pushLoop = function () {
    this._loopLevel++
};
SwiftCodeGen.prototype.peekLoop = function () {
    return this._loopLevel
};
SwiftCodeGen.prototype.popLoop = function () {
    this._loopLevel--
};
SwiftCodeGen.prototype.emit = function (b) {
    for (var c = "", d = 0; d < this.indentLevel; d++) c = c + "    ";
    return c + b + "\n"
};
SwiftCodeGen.prototype.emitPartial = function (b) {
    for (var c = "", d = 0; d < this.indentLevel; d++) c = c + "    ";
    return c + b
};
SwiftCodeGen.prototype.emitInline = function (b) {
    return b
};
SwiftCodeGen.prototype.emitNumber = function (b) {
    return b
};
SwiftCodeGen.prototype.emitString = function (b) {
    return '"' + b.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'
};
SwiftCodeGen.prototype.pushLevel = function () {
    this.indentLevel++
};
SwiftCodeGen.prototype.popLevel = function () {
    if (--this.indentLevel < 0) this.indentLevel = 0
};
SwiftCodeGen.prototype.generateScene = function (b) {
    var c = "";
    if (!b) {
        c = this.emit("// Define scene");
        c = c + this.emit("class Scene : BaseScene {");
        this.pushLevel();
        c = c + this.generateState(Runtime.background);
        c = c + this.generateJsVars(Runtime.background)
    }
    for (var d = 0; d < Runtime.background.scripts.length; d++) {
        var e = Runtime.background.scripts[d];
        if (e instanceof Block && !e.hidden && !e.hasFlap) try {
            this.reset();
            c = c + this.generate(e)
        } catch (f) {
            console.log("generator error");
            console.log(f.stack)
        }
    }
    if (!b) {
        this.popLevel();
        c =
            c + this.emit("}\n")
    }
    return c
};
SwiftCodeGen.prototype.generateActor = function (b, c) {
    var d = "";
    if (!c) {
        d = this.emit('// Define "' + b.label + '"');
        d = d + this.emit("class " + this.generateIdentifier(b.label) + " : BaseActor {");
        this.pushLevel();
        d = d + this.generateState(b);
        d = d + this.generateJsVars(b)
    }
    for (var e = 0; e < b.scripts.length; e++) {
        var f = b.scripts[e];
        if (f instanceof Block && !f.hasFlap) try {
            this.reset();
            d = d + this.generate(f)
        } catch (g) {
            console.log("generator error");
            console.log(g.stack)
        }
    }
    if (!c) {
        this.popLevel();
        d = d + this.emit("}\n")
    }
    return d
};
SwiftCodeGen.prototype.generateState = function (b) {
    var c = "";
    if (!b || b == Runtime.background) {
        b = Runtime.background;
        c = c + this.emit("let _name = " + this.emitString(b.label) + ";");
        c = c + this.emit("let _expand = " + (Runtime.stage.expand ? true : false) + ";");
        c = c + this.emit("var _width = " + Runtime.stage.width + ";");
        c = c + this.emit("var _height = " + Runtime.stage.height + ";");
        c = c + this.emit("var _penWidth = " + b.penWidth + ";");
        c = c + this.emit("var _penColor = " + this.emitString(b.penColor) + ";");
        c = c + this.emit("var _fillColor = " + this.emitString(b.fillColor) +
            ";");
        c = c + this.emit("var _font = " + this.emitString(b.font) + ";");
        c = c + this.emit("var _fontColor = " + this.emitString(b.fontColor) + ";");
        c = c + this.emit("var _physicsEnabled = " + (Physics.isSimulationRunning() ? true : false) + ";");
        c = c + this.emit("var _gravityX = " + Physics.getWorld().GetGravity().x + ";");
        c = c + this.emit("var _gravityY = " + Physics.getWorld().GetGravity().y + ";")
    } else {
        c = c + this.emit("let _class = " + this.emitString(b.classname) + ";");
        c = c + this.emit("let _name = " + this.emitString(b.label) + ";");
        c = c + this.emit("var _x = " +
            (b.spriteObj.x - Runtime.stage.width / 2) + ";");
        c = c + this.emit("var _y = " + -(b.spriteObj.y - Runtime.stage.height / 2) + ";");
        c = c + this.emit("var _scale = " + b.spriteObj.scale.x + ";");
        c = c + this.emit("var _angle = " + (360 - b.spriteObj.rotation) % 360 + ";");
        c = c + this.emit("var _layer = " + b.spriteObj.zIndex + ";");
        c = c + this.emit("var _rotateLock = " + b.spriteObj.rotateLock + ";");
        c = c + this.emit("var _hidden = " + (!b.spriteObj.visible ? true : false) + ";");
        c = c + this.emit("var _draggable = " + (b.spriteObj.draggable ? true : false) + ";");
        c = c + this.emit("var _penWidth = " +
            b.penWidth + ";");
        c = c + this.emit("var _penColor = " + this.emitString(b.penColor) + ";");
        c = c + this.emit("var _fillColor = " + this.emitString(b.fillColor) + ";");
        c = c + this.emit("var _font = " + this.emitString(b.font) + ";");
        c = c + this.emit("var _fontColor = " + this.emitString(b.fontColor) + ";");
        if (b.skeleton.type && b.skeleton.parts) {
            c = c + this.emit("var _skelType = " + this.emitString(b.skeleton.type) + ";");
            c = c + this.emit("var _skelParts = " + this.emitString(JSON.stringify(b.skeleton.parts)) + ";")
        }
        b.spriteObj.bubble && (c = c + this.emit("var _bubble = " +
            JSON.stringify(b.spriteObj.bubble) + ";"));
        var d = Physics.getSpriteProperties(b.spriteObj),
            c = c + this.emit("var _physicsStatic = " + (d.isStatic ? true : false) + ";"),
            c = c + this.emit("var _physicsActive = " + (d.isActive ? true : false) + ";"),
            c = c + this.emit("var _physicsGeometry = " + this.emitString(d.geometry) + ";"),
            c = c + this.emit("var _physicsDensity = " + d.density + ";"),
            c = c + this.emit("var _physicsFriction = " + d.friction + ";"),
            c = c + this.emit("var _physicsRestitution = " + d.restitution + ";")
    }
    c = c + this.emit("var _currentCostume = " +
        b.currentCostume + ";");
    if (b.costumes.length > 0) {
        c = c + this.emit("var _costumes = [");
        this.pushLevel();
        c = c + this.generateCostumes(b);
        this.popLevel();
        c = c + this.emit("];")
    } else c = c + this.emit("var _costumes = [ ];");
    c = c + this.emit("var _volume = " + b.volume + ";");
    if (b.sounds.length > 0) {
        c = c + this.emit("var _sounds = [");
        this.pushLevel();
        c = c + this.generateSounds(b);
        this.popLevel();
        c = c + this.emit("];")
    } else c = c + this.emit("var _sounds = [ ];");
    return c
};
SwiftCodeGen.prototype.generateCostumes = function (b) {
    for (var c = "", d = 0; d < b.costumes.length; d++) {
        var e = b.costumes[d],
            e = 'Costume(name:"' + e.name + '", img:"' + e.img + '", cx:' + e.cx + ", cy:" + e.cy + ")";
        d < b.costumes.length - 1 && (e = e + ",");
        c = c + this.emit(e)
    }
    return c
};
SwiftCodeGen.prototype.generateSounds = function (b) {
    for (var c = "", d = 0; d < b.sounds.length; d++) {
        var e = b.sounds[d],
            e = 'Sound(name:"' + e.name + '", sound:"' + e.sound + '")';
        d < b.sounds.length - 1 && (e = e + ",");
        c = c + this.emit(e)
    }
    return c
};
SwiftCodeGen.prototype.generateJsVars = function (b) {
    var c = "",
        d;
    for (d in b.lists) c = c + this.emit("var " + this.generateIdentifier(d) + " = " + JSON.stringify(b.lists[d]) + ";");
    for (d in b.variables) b.lists[d] === void 0 && (c = c + this.emit("var " + this.generateIdentifier(d) + " = " + JSON.stringify(b.variables[d]) + ";"));
    c && (c = c + this.emit(""));
    return c
};
SwiftCodeGen.prototype.generateCode = function (b) {
    for (var c = "", d = 0; d < b.length; d++) c = c + this.generate(b[d]);
    return c
};
SwiftCodeGen.prototype.generate = function (b) {
    if (b) {
        if (b instanceof LabelInput) {
            if (b._child) return this.generate(b._child);
            b = valueToNative(b.label);
            return typeof b == "number" ? this.emitNumber(b) : typeof b == "string" ? b == "true" ? true : b == "false" ? false : this.emitString(b) : typeof b == "boolean" ? b : this.emitString("" + b)
        }
        var c = this["generate_" + b.func];
        if (c) return c.apply(this, [b]);
        c = g_revFnSwiftMapping[b.func] ? g_revFnSwiftMapping[b.func] + "(" : b.func + "(";
        if (b instanceof Label) {
            for (var d = 0, e = b.getNumSockets() ; d < e; d++) {
                d >
                    0 && (c = c + (", p" + d + ":"));
                c = c + this.generate(b.getSocketAtChild(d))
            }
            c = this.emitInline(c + ")")
        } else {
            d = 0;
            for (e = b.label.getNumSockets() ; d < e; d++) {
                d > 0 && (c = c + (", p" + d + ":"));
                c = c + this.generate(b.label.getSocketAtChild(d))
            }
            c = this.emit(c + ");");
            c = c + this.generate(b.next)
        }
        return c
    }
    return ""
};
SwiftCodeGen.prototype.generateIdentifier = function (b) {
    var c = "" + b;
    if (b && b instanceof LabelInput) {
        b = valueToNative(b.label);
        typeof b == "number" ? c = "_" + this.emitNumber(b) : typeof b == "string" && (c = b)
    }
    c = c.replace(/[^a-zA-Z0-9_]/g, "_");
    if (!c || c[0] >= "0" && c[0] <= "9") c = "_" + c;
    g_keywords.indexOf(c) >= 0 && (c = "_" + c);
    return c
};
SwiftCodeGen.prototype.generate_registerFlagTrigger = function (b) {
    var c = this.emit("func onStart" + this._onStartCount++ + "() -> Void {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerKeyTrigger = function (b) {
    var c = this.emit("func onKeyPress" + this._onKeyPressCount++ + "(key:String) -> Void {");
    this.pushLevel();
    c = c + this.emit("if (key == " + this.generate(b.label.getSocketAtChild(0)) + ") {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    c = c + this.emit("}");
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerTrigger = function (b) {
    var c = this.emit("func onCondition() -> Void {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerSpriteTrigger = function (b) {
    var c = this.emit("func onActorClick" + this._onActorClickCount++ + "() -> Void {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerBackgroundChange = function (b) {
    var c = this.generate(b.label.getSocketAtChild(0)),
        d = this.emit("func onSceneChange" + this._onSceneChangeCount++ + "(scene:String) -> Void {");
    this.pushLevel();
    d = d + this.emit("if (scene == " + this.emitString(c) + ") {");
    this.pushLevel();
    d = d + this.generate(b.next);
    this.popLevel();
    d = d + this.emit("}");
    this.popLevel();
    return d = d + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerBroadcastTrigger = function (b) {
    var c = this.generate(b.label.getSocketAtChild(0)),
        d = this.emit("func onMessageReceived" + this._onMessageCount++ + "(message:String) -> Void {");
    this.pushLevel();
    d = d + this.emit("if (message == " + c + ") {");
    this.pushLevel();
    d = d + this.generate(b.next);
    this.popLevel();
    d = d + this.emit("}");
    this.popLevel();
    return d = d + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerCloned = function (b) {
    var c = this.emit("func onClone" + this._onCloneCount++ + "() -> Void {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerDraw = function (b) {
    var c = this.emit("func onDraw" + this._onDrawCount++ + "() -> Void {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerSpriteCollision = function (b) {
    var c = this.emit("func onCollision" + this._onCollisionCount++ + "() -> Void {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_registerAnimationDone = function (b) {
    var c = this.generate(b.label.getSocketAtChild(0)),
        d = this.emit("func onAnimationDone" + this._onAnimationDoneCount++ + "(animName:String) -> Void {");
    this.pushLevel();
    d = d + this.emit("if (animName == " + this.emitString(c) + ") {");
    this.pushLevel();
    d = d + this.generate(b.next);
    this.popLevel();
    d = d + this.emit("}");
    this.popLevel();
    return d = d + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_blockControlBlock = function (b) {
    var c = "";
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_registerFunction = function (b) {
    for (var c = "func " + this.generateIdentifier(b.name) + "(", d = 0, e = b.label.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + (this.generate(b.label.getSocketAtChild(d)) + ":Value")
    }
    c = this.emit(c + ") {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
SwiftCodeGen.prototype.generate_blockControlCall = function (b) {
    for (var c = this.generateIdentifier(b.name) + "(", d = 0, e = b.label.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueControlCall = function (b) {
    for (var c = this.generateIdentifier(b.name) + "(", d = 0, e = b.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.getSocketAtChild(d))
    }
    return c = this.emitInline(c + ")")
};
SwiftCodeGen.prototype.generate_blockControlCallMember = function (b) {
    for (var c = this.generateIdentifier(b.label.getSocketAtChild(0)), d = this.generateIdentifier(b.label.getSocketAtChild(1)), c = c + "." + d + "(", d = 2, e = b.label.getNumSockets() ; d < e; d++) {
        d > 2 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueControlCallMember = function (b) {
    for (var c = this.generateIdentifier(b.getSocketAtChild(0)), d = this.generateIdentifier(b.getSocketAtChild(1)), c = c + "." + d + "(", d = b.getNumSockets(), e = 2; e < d; e++) {
        e > 2 && (c = c + ", ");
        c = c + this.generate(b.getSocketAtChild(e))
    }
    return c + ")"
};
SwiftCodeGen.prototype.generate_blockControlCallLibrary = function (b) {
    for (var c = b.name.split("::"), d = this.generateIdentifier(c[1]), c = c[0], c = "lib." + c + "." + d + "(", d = 0, e = b.label.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueControlCallLibrary = function (b) {
    for (var c = b.name.split("::"), d = this.generateIdentifier(c[1]), c = c[0], c = "lib." + c + "." + d + "(", d = 0, e = b.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.getSocketAtChild(d))
    }
    return c = this.emitInline(c + ")")
};
SwiftCodeGen.prototype.generate_blockControlForever = function (b) {
    var c = this.emit("while (true) {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlRepeat = function (b) {
    this.pushLoop();
    var c = "_repeatIdx" + this.peekLoop(),
        c = this.emit("for (var " + c + " = 0; " + c + "<" + this.generate(b.label.getSocketAtChild(0)) + "; " + c + "++) {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlForeverIf = function (b) {
    var c;
    c = b.label.getSocketAtChild(0);
    c = c._child && c._child.func == "valueOpNot" ? this.emit("while (" + this.generate(c._child.getSocketAtChild(0)) + ") { ") : this.emit("while (!" + this.generate(c) + ") { ");
    this.pushLevel();
    c = c + this.emit("while (true) { ");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlIf = function (b, c) {
    var d;
    d = c ? this.emitInline("if (" + this.generate(b.label.getSocketAtChild(0)) + ") {\n") : this.emit("if (" + this.generate(b.label.getSocketAtChild(0)) + ") {");
    this.pushLevel();
    d = d + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    d = d + this.emit("}");
    return d = d + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlIfElse = function (b, c) {
    var d;
    d = c ? this.emitInline("if (" + this.generate(b.label.getSocketAtChild(0)) + ") {\n") : this.emit("if (" + this.generate(b.label.getSocketAtChild(0)) + ") {");
    this.pushLevel();
    d = d + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    for (var e = 1; e < b.getNumContainers() - 1; e++) {
        var f = b.getLabelAtContainer(e);
        d = d + this.emit("} else if (" + this.generate(f.getSocketAtChild(0)) + ") {");
        this.pushLevel();
        d = d + this.generate(b.getBlockAtContainer(e));
        this.popLevel()
    }
    if ((e =
            b.getBlockAtContainer(b.getNumContainers() - 1)) && e.func == "blockControlIf" && !e.next) {
        d = d + this.emitPartial("} else ");
        d = d + this.generate_blockControlIf(e, true)
    } else if (e && e.func == "blockControlIfElse" && !e.next) {
        d = d + this.emitPartial("} else ");
        d = d + this.generate_blockControlIfElse(e, true)
    } else {
        d = d + this.emit("} else {");
        this.pushLevel();
        d = d + this.generate(e);
        this.popLevel();
        d = d + this.emit("}")
    }
    return d = d + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueControlIfElse = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + " ? " + this.generate(b.getSocketAtChild(1)) + " : " + this.generate(b.getSocketAtChild(2)))
};
SwiftCodeGen.prototype.generate_blockControlWhile = function (b) {
    var c = this.emit("while (" + this.generate(b.label.getSocketAtChild(0)) + ") { ");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlRepeatUntil = function (b) {
    var c;
    c = b.label.getSocketAtChild(0);
    c = c._child && c._child.func == "valueOpNot" ? this.emit("while (" + this.generate(c._child.getSocketAtChild(0)) + ") { ") : this.emit("while (!" + this.generate(c) + ") { ");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlReturn = function (b) {
    var c;
    c = (c = b.label.getSocketAtChild(0)) && (c._child || c.label) ? this.emit("return " + this.generate(c) + ";") : this.emit("return;");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlStop = function (b) {
    return this.emit("self.terminate(" + this.generate(b.label.getSocketAtChild(0)) + ");")
};
SwiftCodeGen.prototype.generate_blockControlStopScript = function () {
    return this.emit("blockControlStopScript();")
};
SwiftCodeGen.prototype.generate_blockControlStopAll = function () {
    return this.emit("blockControlStopAll();")
};
SwiftCodeGen.prototype.generate_blockControlScriptVar = function (b) {
    for (var c = "var ", d = 0; d < b.label.getNumSockets() ; d++) {
        d > 0 && (c = c + ", ");
        c = c + (this.generate(b.label.getSocketAtChild(d)) + ":Int")
    }
    c = this.emit(c + ";");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlFor = function (b) {
    var c = this.generateIdentifier(b.label.getSocketAtChild(0)),
        c = this.emit("for (var " + c + "=" + this.generate(b.label.getSocketAtChild(1)) + "; " + c + "<=" + this.generate(b.label.getSocketAtChild(2)) + "; " + c + "+=" + this.generate(b.label.getSocketAtChild(3)) + ") {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlForEach = function (b) {
    var c = this.emit("for (" + this.generateIdentifier(b.label.getSocketAtChild(1) + " in " + this.generate(b.label.getSocketAtChild(0))) + ") {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlBreak = function (b) {
    var c = this.emit("break;");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockControlContinue = function (b) {
    var c = this.emit("continue;");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockComment = function (b) {
    var c = this.emit("/*"),
        c = c + this.emit(b.label.getSocketAtChild(0).label);
    return c = c + this.emit("*/")
};
SwiftCodeGen.prototype.generate_blockInlineComment = function (b) {
    var c = this.emit("//" + b.label.getSocketAtChild(0).label);
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueOpAdd = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " + " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpSubtract = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " - " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpMultiply = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " * " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpDivide = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " / " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpRandom = function (b) {
    return this.emitInline("Math.randomRange(" + this.generate(b.getSocketAtChild(0)) + ", " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpLess = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " < " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpEqual = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " == " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpGreater = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " > " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpAnd = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " && " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpOr = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " || " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpNot = function (b) {
    b = b.getSocketAtChild(0);
    return b._child && b._child.func == "valueOpNot" ? this.generate(b._child.getSocketAtChild(0)) : this.emitInline("!" + this.generate(b))
};
SwiftCodeGen.prototype.generate_valueOpJoin = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " + " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpLetter = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".charAt(" + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpLength = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".length")
};
SwiftCodeGen.prototype.generate_valueOpMod = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " % " + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpRound = function (b) {
    return this.emitInline("Math.round(" + this.generate(b.getSocketAtChild(0)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpMath = function (b) {
    switch (b.getSocketAtChild(0).label) {
        case "abs":
            return this.emitInline("Math.abs(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "floor":
            return this.emitInline("Math.floor(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "ceiling":
            return this.emitInline("Math.ceil(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "int":
            return this.emitInline("Math.parseInt(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "sqrt":
            return this.emitInline("Math.sqrt(" +
                this.generate(b.getSocketAtChild(1)) + ")");
        case "sin":
            return this.emitInline("Math.sin(" + this.generate(b.getSocketAtChild(1)) + " * Math.PI / 180)");
        case "sinrad":
            return this.emitInline("Math.sin(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "cos":
            return this.emitInline("Math.cos(" + this.generate(b.getSocketAtChild(1)) + " * Math.PI / 180)");
        case "cosrad":
            return this.emitInline("Math.cos(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "tan":
            return this.emitInline("Math.tan(" + this.generate(b.getSocketAtChild(1)) +
                " * Math.PI / 180)");
        case "tanrad":
            return this.emitInline("Math.tan(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "asin":
            return this.emitInline("Math.asin(" + this.generate(b.getSocketAtChild(1)) + " * 180 / Math.PI)");
        case "asinrad":
            return this.emitInline("Math.asin(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "acos":
            return this.emitInline("Math.acos(" + this.generate(b.getSocketAtChild(1)) + " * 180 / Math.PI)");
        case "acosrad":
            return this.emitInline("Math.acos(" + this.generate(b.getSocketAtChild(1)) +
                ")");
        case "atan":
            return this.emitInline("Math.atan(" + this.generate(b.getSocketAtChild(1)) + " * 180 / Math.PI)");
        case "atanrad":
            return this.emitInline("Math.atan(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "ln":
            return this.emitInline("Math.log(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "log":
            return this.emitInline("Math.log(" + this.generate(b.getSocketAtChild(1)) + ") / Math.LN10");
        case "e^":
            return this.emitInline("Math.exp(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "10^":
            return this.emitInline("Math.pow(10, " +
                this.generate(b.getSocketAtChild(1)) + ")");
        case "sign":
            return this.emitInline("Math.sign(" + this.generate(b.getSocketAtChild(1)) + ")")
    }
    return ""
};
SwiftCodeGen.prototype.generate_valueOpMath2 = function (b) {
    switch (b.getSocketAtChild(0).label) {
        case "atan2":
            return this.emitInline("Math.atan2(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ") * 180 / Math.PI");
        case "atan2rad":
            return this.emitInline("Math.atan2(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")");
        case "max":
            return this.emitInline("Math.max(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) +
                ")");
        case "min":
            return this.emitInline("Math.min(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")");
        case "pow":
            return this.emitInline("Math.pow(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")")
    }
    return ""
};
SwiftCodeGen.prototype.generate_valueOpConstants = function (b) {
    switch (b.getSocketAtChild(0).label) {
        case "pi":
            return this.emitInline("Math.PI");
        case "e":
            return this.emitInline("Math.E");
        case "ln2":
            return this.emitInline("Math.LN2");
        case "ln10":
            return this.emitInline("Math.LN10");
        case "log2e":
            return this.emitInline("Math.LOG2E");
        case "log10e":
            return this.emitInline("Math.LOG10E");
        case "sqrt1/2":
            return this.emitInline("Math.SQRT1_2");
        case "sqrt2":
            return this.emitInline("Math.SQRT2")
    }
    return ""
};
SwiftCodeGen.prototype.generate_valueOpBinary = function (b) {
    switch (b.getSocketAtChild(1).label) {
        case "+":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " + " + this.generate(b.getSocketAtChild(2)) + ")");
        case "-":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " - " + this.generate(b.getSocketAtChild(2)) + ")");
        case "*":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " * " + this.generate(b.getSocketAtChild(2)) + ")");
        case "/":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) +
                " / " + this.generate(b.getSocketAtChild(2)) + ")");
        case "%":
        case "mod":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " % " + this.generate(b.getSocketAtChild(2)) + ")");
        case "=":
        case "==":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " == " + this.generate(b.getSocketAtChild(2)) + ")");
        case "<":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " < " + this.generate(b.getSocketAtChild(2)) + ")");
        case "<=":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) +
                " <= " + this.generate(b.getSocketAtChild(2)) + ")");
        case ">":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " > " + this.generate(b.getSocketAtChild(2)) + ")");
        case ">=":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " >= " + this.generate(b.getSocketAtChild(2)) + ")");
        case "!=":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " != " + this.generate(b.getSocketAtChild(2)) + ")");
        case "&":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " & " + this.generate(b.getSocketAtChild(2)) +
                ")");
        case "and":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " && " + this.generate(b.getSocketAtChild(2)) + ")");
        case "|":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " | " + this.generate(b.getSocketAtChild(2)) + ")");
        case "or":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " || " + this.generate(b.getSocketAtChild(2)) + ")");
        case "^":
        case "xor":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " ^ " + this.generate(b.getSocketAtChild(2)) + ")");
        case "<<":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " << " + this.generate(b.getSocketAtChild(2)) + ")");
        case ">>":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " >> " + this.generate(b.getSocketAtChild(2)) + ")");
        case ">>>":
            return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " >>> " + this.generate(b.getSocketAtChild(2)) + ")")
    }
    return ""
};
SwiftCodeGen.prototype.generate_valueOpBitNot = function (b) {
    return this.emitInline("~" + this.generate(b.getSocketAtChild(0)))
};
SwiftCodeGen.prototype.generate_valueOpExpression = function (b) {
    return this.generate(b.getSocketAtChild(0))
};
SwiftCodeGen.prototype.generate_valueOpTextSplit = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".split(" + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpTextReplace = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(1)) + ".replace(" + this.generate(b.getSocketAtChild(0)) + ", " + this.generate(b.getSocketAtChild(2)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpTextIndex = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(1)) + ".indexOf(" + this.generate(b.getSocketAtChild(0)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpTextLastIndex = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(1)) + ".lastIndexOf(" + this.generate(b.getSocketAtChild(0)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpTextSubstring = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".substring(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")")
};
SwiftCodeGen.prototype.generate_valueOpTextTransform = function (b) {
    var c = b.getSocketAtChild(1);
    switch (b.getSocketAtChild(0).label) {
        case "uppercase":
            return this.emitInline(this.generate(c) + ".toUpperCase()");
        case "lowercase":
            return this.emitInline(this.generate(c) + ".toLowerCase()");
        case "trim":
            return this.emitInline(this.generate(c) + ".trim()");
        default:
            return this.generate(c)
    }
};
SwiftCodeGen.prototype.generate_blockVarPropSet = function (b) {
    var c;
    c = false;
    var d = b.label.getSocketAtChild(1);
    d._child ? c = true : d.label != "self" && (c = true);
    var e = b.label.getSocketAtChild(0);
    e._child ? c = true : g_properties.indexOf(e.label) >= 0 && (c = true);
    c = c ? this.emit("self.sensing.setSpriteProperty(" + this.generate(e) + ", actor:" + this.generate(d) + ", value:" + this.generate(b.label.getSocketAtChild(2)) + ");") : this.emit(this.generateIdentifier(e) + " = " + this.generate(b.label.getSocketAtChild(2)) + ";");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueSensingSpriteProperty = function (b) {
    return this.generate_valueVarPropGet(b)
};
SwiftCodeGen.prototype.generate_valueVarPropGet = function (b) {
    var c = false,
        d = b.getSocketAtChild(1);
    d._child ? c = true : d.label != "self" && (c = true);
    b = b.getSocketAtChild(0);
    b._child ? c = true : g_properties.indexOf(b.label) >= 0 && (c = true);
    return c ? this.emitInline("self.sensing.getSpriteProperty(" + this.generate(b) + ", actor:" + this.generate(d) + ")") : this.generateIdentifier(b)
};
SwiftCodeGen.prototype.generate_blockVarSet = function (b) {
    var c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + " = " + this.generate(b.label.getSocketAtChild(1)) + ";");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockVarChangeBy = function (b) {
    var c, d = b.label.getSocketAtChild(1);
    if (!d._child)
        if (d.label == "1" || d.label == 1) c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + "++;");
        else if (d.label == "-1" || d.label == -1) c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + "--;");
    c || (c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + " += " + this.generate(b.label.getSocketAtChild(1)) + ";"));
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockVarShow = function (b) {
    return this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockVarHide = function (b) {
    return this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueListNew = function () {
    return this.emitInline("[]")
};
SwiftCodeGen.prototype.generate_blockListAdd = function (b) {
    for (var c = b.label.getNumSockets(), d = this.generateIdentifier(b.label.getSocketAtChild(c - 1)), d = d + ".push(", e = 0; e < c - 1; e++) {
        e > 0 && (d = d + ", ");
        d = d + this.generate(b.label.getSocketAtChild(e))
    }
    d = this.emit(d + ");");
    return d = d + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockListDel = function (b) {
    var c = this.generateIdentifier(b.label.getSocketAtChild(1)),
        d = b.label.getSocketAtChild(0);
    if (d.label == "all") c = c + ".length = 0;";
    else {
        d = b.label.getSocketAtChild(0);
        if (d._child) {
            d = d._child;
            d = d.func == "valueOpBinary" ? d.getSocketAtChild(1).label == "+" && (!d.getSocketAtChild(0)._child && "" + d.getSocketAtChild(0).label == "1" || !d.getSocketAtChild(2)._child && "" + d.getSocketAtChild(2).label == "1") ? d.getSocketAtChild(0)._child ? this.generate(d.getSocketAtChild(0)) :
                this.generate(d.getSocketAtChild(2)) : this.generate(d) + " - 1" : d.func == "valueOpAdd" ? !d.getSocketAtChild(0)._child && "" + d.getSocketAtChild(0).label == "1" || !d.getSocketAtChild(1)._child && "" + d.getSocketAtChild(1).label == "1" ? d.getSocketAtChild(0)._child ? this.generate(d.getSocketAtChild(0)) : this.generate(d.getSocketAtChild(1)) : this.generate(d) + " - 1" : this.generate(d) + " - 1"
        } else d = valueToNative(d.label) - 1;
        c = c + (".splice(" + d + ", 1);")
    }
    c = this.emit(c);
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockListInsert = function (b) {
    var c = b.label.getNumSockets(),
        d = this.generateIdentifier(b.label.getSocketAtChild(c - 1)),
        e = b.label.getSocketAtChild(c - 2);
    if (e._child) {
        e = e._child;
        e = e.func == "valueOpBinary" ? e.getSocketAtChild(1).label == "+" && (!e.getSocketAtChild(0)._child && "" + e.getSocketAtChild(0).label == "1" || !e.getSocketAtChild(2)._child && "" + e.getSocketAtChild(2).label == "1") ? e.getSocketAtChild(0)._child ? this.generate(e.getSocketAtChild(0)) : this.generate(e.getSocketAtChild(2)) :
            this.generate(e) + " - 1" : e.func == "valueOpAdd" ? !e.getSocketAtChild(0)._child && "" + e.getSocketAtChild(0).label == "1" || !e.getSocketAtChild(1)._child && "" + e.getSocketAtChild(1).label == "1" ? e.getSocketAtChild(0)._child ? this.generate(e.getSocketAtChild(0)) : this.generate(e.getSocketAtChild(1)) : this.generate(e) + " - 1" : this.generate(e) + " - 1"
    } else e = valueToNative(e.label) - 1;
    d = d + (".splice(" + e + ", 0, ");
    for (e = 0; e < c - 2; e++) {
        e > 0 && (d = d + ", ");
        d = d + this.generate(b.label.getSocketAtChild(e))
    }
    d = this.emit(d + ");");
    return d =
        d + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_blockListReplace = function (b) {
    b.label.getNumSockets();
    var c = this.generateIdentifier(b.label.getSocketAtChild(1)),
        d = b.label.getSocketAtChild(0);
    if (d._child) {
        d = d._child;
        d = d.func == "valueOpBinary" ? d.getSocketAtChild(1).label == "+" && (!d.getSocketAtChild(0)._child && "" + d.getSocketAtChild(0).label == "1" || !d.getSocketAtChild(2)._child && "" + d.getSocketAtChild(2).label == "1") ? d.getSocketAtChild(0)._child ? this.generate(d.getSocketAtChild(0)) : this.generate(d.getSocketAtChild(2)) : this.generate(d) +
            " - 1" : d.func == "valueOpAdd" ? !d.getSocketAtChild(0)._child && "" + d.getSocketAtChild(0).label == "1" || !d.getSocketAtChild(1)._child && "" + d.getSocketAtChild(1).label == "1" ? d.getSocketAtChild(0)._child ? this.generate(d.getSocketAtChild(0)) : this.generate(d.getSocketAtChild(1)) : this.generate(d) + " - 1" : this.generate(d) + " - 1"
    } else d = valueToNative(d.label) - 1;
    c = c + (".splice(" + d + ", 1, ") + this.generate(b.label.getSocketAtChild(2));
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueListItem = function (b) {
    var c = b.getSocketAtChild(0);
    if (c._child) {
        c = c._child;
        c = c.func == "valueOpBinary" ? c.getSocketAtChild(1).label == "+" && (!c.getSocketAtChild(0)._child && "" + c.getSocketAtChild(0).label == "1" || !c.getSocketAtChild(2)._child && "" + c.getSocketAtChild(2).label == "1") ? c.getSocketAtChild(0)._child ? this.generate(c.getSocketAtChild(0)) : this.generate(c.getSocketAtChild(2)) : this.generate(c) + " - 1" : c.func == "valueOpAdd" ? !c.getSocketAtChild(0)._child && "" + c.getSocketAtChild(0).label ==
            "1" || !c.getSocketAtChild(1)._child && "" + c.getSocketAtChild(1).label == "1" ? c.getSocketAtChild(0)._child ? this.generate(c.getSocketAtChild(0)) : this.generate(c.getSocketAtChild(1)) : this.generate(c) + " - 1" : this.generate(c) + " - 1"
    } else c = c.label == "last" ? this.generateIdentifier(b.getSocketAtChild(1)) + ".length - 1" : c.label == "any" ? "Math.randomRange(1, " + this.generateIdentifier(b.getSocketAtChild(1)) + ".length) - 1" : valueToNative(c.label) - 1;
    return this.emitInline(this.generateIdentifier(b.getSocketAtChild(1)) +
        "[" + c + "]")
};
SwiftCodeGen.prototype.generate_valueListLength = function (b) {
    return this.emitInline(this.generateIdentifier(b.getSocketAtChild(0)) + ".length")
};
SwiftCodeGen.prototype.generate_valueListContains = function (b) {
    return this.emitInline(this.generateIdentifier(b.getSocketAtChild(0)) + ".contains(" + this.generate(b.getSocketAtChild(1)) + ")")
};
SwiftCodeGen.prototype.generate_blockObjSet = function (b) {
    var c = b.label.getSocketAtChild(0),
        d = b.label.getSocketAtChild(1),
        e = b.label.getSocketAtChild(2),
        c = !d._child && this.isIdentifier(d.label) ? this.emit(this.generate(c) + "." + d.label + " = " + this.generate(e) + ";") : this.emit(this.generate(c) + "[" + this.generate(d) + "] = " + this.generate(e) + ";");
    return c = c + this.generate(b.next)
};
SwiftCodeGen.prototype.generate_valueObjGet = function (b) {
    var c = b.getSocketAtChild(0),
        b = b.getSocketAtChild(1);
    return !b._child && this.isIdentifier(b.label) ? this.emitInline(this.generate(c) + "." + b.label) : this.emitInline(this.generate(c) + "[" + this.generate(b) + "]")
};
SwiftCodeGen.prototype.generate_valueObjLength = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".length")
};
SwiftCodeGen.prototype.generate_valueObjKeys = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".keys()")
};
SwiftCodeGen.prototype.generate_valueObjValues = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".values()")
};
SwiftCodeGen.prototype.generate_valueScriptVar = function (b) {
    return this.generateIdentifier(b.name)
};
SwiftCodeGen.prototype.generate_valueParam = function (b) {
    return this.generateIdentifier(b.name)
};
SwiftCodeGen.prototype.generate_valueVar = function (b) {
    return this.emitInline("self.") + this.generateIdentifier(b.name)
};
SwiftCodeGen.prototype.generate_valueList = function (b) {
    return this.emitInline("self.") + this.generateIdentifier(b.name)
};
SwiftCodeGen.prototype.generate_valueNetworkParse = function (b) {
    return this.emitInline(b.getSocketAtChild(0).label)
};