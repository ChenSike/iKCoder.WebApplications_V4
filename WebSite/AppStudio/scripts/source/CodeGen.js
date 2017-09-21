function CodeGen() {
    this._loopLevel = this.indentLevel = 0
}
CodeGen.prototype.reset = function () {
    this._loopLevel = 0
};
CodeGen.prototype.isIdentifier = function (b) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(b)
};
CodeGen.prototype.reset = function () {
    this._loopLevel = 0
};
CodeGen.prototype.pushLoop = function () {
    this._loopLevel++
};
CodeGen.prototype.peekLoop = function () {
    return this._loopLevel
};
CodeGen.prototype.popLoop = function () {
    this._loopLevel--
};
CodeGen.prototype.emit = function (b) {
    for (var c = "", d = 0; d < this.indentLevel; d++) c = c + "    ";
    return c + b + "\n"
};
CodeGen.prototype.emitPartial = function (b) {
    for (var c = "", d = 0; d < this.indentLevel; d++) c = c + "    ";
    return c + b
};
CodeGen.prototype.emitInline = function (b) {
    return b
};
CodeGen.prototype.emitNumber = function (b) {
    return b
};
CodeGen.prototype.emitString = function (b) {
    return '"' + b.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'
};
CodeGen.prototype.pushLevel = function () {
    this.indentLevel++
};
CodeGen.prototype.popLevel = function () {
    if (--this.indentLevel < 0) this.indentLevel = 0
};
CodeGen.prototype.generateScene = function (b) {
    var c = "";
    if (!b) {
        c = this.emit("// Define scene");
        c = c + this.emit("Runtime.defineScene({");
        this.pushLevel();
        c = c + this.generateState(Runtime.background);
        this.popLevel();
        c = c + this.emit("}, function() {");
        this.pushLevel();
        c = c + this.generateJsVars(Runtime.background)
    }
    for (var d = [], e = 0; e < Runtime.background.scripts.length; e++) d.push({
        block: Runtime.background.scripts[e],
        bounds: WinCode._findExtremes(true, true, Runtime.background.scripts[e])
    });
    d.sort(function (b, c) {
        return (b.block.hidden ||
            b.block.hiddenInSandbox) && (!c.block.hidden || !c.block.hiddenInSandbox) ? 1 : (!b.block.hidden || !b.block.hiddenInSandbox) && (c.block.hidden || c.block.hiddenInSandbox) ? -1 : b.block.value && !c.block.value ? 1 : !b.block.value && c.block.value ? -1 : b.block.hasFlap && !c.block.hasFlap ? 1 : !b.block.hasFlap && c.block.hasFlap || b.block.y < c.block.y ? -1 : b.block.y > c.block.y ? 1 : b.block.x < c.block.x ? -1 : b.block.y > c.block.y ? 1 : 0
    });
    for (e = 0; e < d.length; e++) {
        var f = d[e].block;
        if (f instanceof Block && !f.hidden && !f.hasFlap) try {
            this.reset();
            c = c + this.generate(f)
        } catch (g) {
            console.log("generator error");
            console.log(g.stack)
        }
    }
    if (!b) {
        this.popLevel();
        c = c + this.emit("});\n")
    }
    return c
};
CodeGen.prototype.generateActor = function (b, c) {
    var d = "";
    if (!c) {
        d = this.emit('// Define "' + b.label + '"');
        d = d + this.emit("Runtime.defineActor({");
        this.pushLevel();
        d = d + this.generateState(b);
        this.popLevel();
        d = d + this.emit("}, function() {");
        this.pushLevel();
        d = d + this.generateJsVars(b)
    }
    for (var e = [], f = 0; f < b.scripts.length; f++) e.push({
        block: b.scripts[f],
        bounds: WinCode._findExtremes(true, true, b.scripts[f])
    });
    e.sort(function (b, c) {
        return (b.block.hidden || b.block.hiddenInSandbox) && (!c.block.hidden || !c.block.hiddenInSandbox) ?
            1 : (!b.block.hidden || !b.block.hiddenInSandbox) && (c.block.hidden || c.block.hiddenInSandbox) ? -1 : b.block.value && !c.block.value ? 1 : !b.block.value && c.block.value ? -1 : b.block.hasFlap && !c.block.hasFlap ? 1 : !b.block.hasFlap && c.block.hasFlap || b.block.y < c.block.y ? -1 : b.block.y > c.block.y ? 1 : b.block.x < c.block.x ? -1 : b.block.y > c.block.y ? 1 : 0
    });
    for (f = 0; f < e.length; f++) {
        var g = e[f].block;
        if (g instanceof Block && !g.hasFlap) try {
            this.reset();
            d = d + this.generate(g)
        } catch (h) {
            console.log("generator error");
            console.log(h.stack)
        }
    }
    if (!c) {
        this.popLevel();
        d = d + this.emit("});\n")
    }
    return d
};
CodeGen.prototype.generateState = function (b) {
    var c = "";
    if (!b || b == Runtime.background) {
        b = Runtime.background;
        c = c + this.emit('"name" : ' + this.emitString(b.label) + ",");
        c = c + this.emitPartial('"expand" : ' + (Runtime.stage.expand ? true : false) + ", ");
        c = c + this.emitPartial('"width" : ' + Runtime.stage.width + ", ");
        c = c + this.emitInline('"height" : ' + Runtime.stage.height + ",\n");
        c = c + this.emitPartial('"penWidth" : ' + b.penWidth + ",");
        c = c + this.emitInline('"penColor" : ' + this.emitString(b.penColor) + ", ");
        c = c + this.emitInline('"fillColor" : ' +
            this.emitString(b.fillColor) + ", ");
        c = c + this.emitInline('"font" : ' + this.emitString(b.font) + ", ");
        c = c + this.emitInline('"fontColor" : ' + this.emitString(b.fontColor) + ",\n");
        c = c + this.emit('"physics" : ' + JSON.stringify({
            enabled: Physics.isSimulationRunning(),
            gravityx: Physics.getWorld().GetGravity().x,
            gravityy: Physics.getWorld().GetGravity().y
        }) + ",")
    } else {
        c = c + this.emitPartial('"class" : ' + this.emitString(b.classname) + ", ");
        c = c + this.emitInline('"name" : ' + this.emitString(b.label) + ",\n");
        c = c + this.emitPartial('"x" : ' +
            (b.spriteObj.x - Runtime.stage.width / 2) + ", ");
        c = c + this.emitInline('"y" : ' + -(b.spriteObj.y - Runtime.stage.height / 2) + ", ");
        c = c + this.emitInline('"scale" : ' + b.spriteObj.scale.x + ", ");
        c = c + this.emitInline('"angle" : ' + (360 - b.spriteObj.rotation) % 360 + ", ");
        c = c + this.emitInline('"layer" : ' + b.spriteObj.zIndex + ", ");
        c = c + this.emitInline('"rotateLock" : ' + b.spriteObj.rotateLock + ",\n");
        c = c + this.emitPartial('"hidden" : ' + (!b.spriteObj.visible ? true : false) + ", ");
        c = c + this.emitInline('"draggable" : ' + (b.spriteObj.draggable ?
            true : false) + ",\n");
        c = c + this.emitPartial('"penWidth" : ' + b.penWidth + ", ");
        c = c + this.emitInline('"penColor" : ' + this.emitString(b.penColor) + ", ");
        c = c + this.emitInline('"fillColor" : ' + this.emitString(b.fillColor) + ", ");
        c = c + this.emitInline('"font" : ' + this.emitString(b.font) + ", ");
        c = c + this.emitInline('"fontColor" : ' + this.emitString(b.fontColor) + ",\n");
        if (b.skeleton.type && b.skeleton.parts) {
            c = c + this.emitInline('"skelType" : ' + this.emitString(b.skeleton.type) + ",\n");
            c = c + this.emitInline('"skelParts" : ' +
                JSON.stringify(b.skeleton.parts) + ",\n")
        }
        b.spriteObj.bubble && (c = c + this.emit('"bubble" : ' + JSON.stringify(b.spriteObj.bubble) + ","));
        var d = Physics.getSpriteProperties(b.spriteObj),
            c = c + this.emit('"physics" : ' + JSON.stringify({
                isStatic: d.isStatic ? true : false,
                isActive: d.isActive ? true : false,
                geometry: d.geometry,
                density: d.density,
                friction: d.friction,
                restitution: d.restitution
            }) + ",")
    }
    c = c + this.emit('"currentCostume" : ' + b.currentCostume + ",");
    if (b.costumes.length > 0) {
        c = c + this.emit('"costumes" : [');
        this.pushLevel();
        c = c + this.generateCostumes(b);
        this.popLevel();
        c = c + this.emit("],")
    } else c = c + this.emit('"costumes" : [ ],');
    c = c + this.emit('"volume" : ' + b.volume + ",");
    if (b.sounds.length > 0) {
        c = c + this.emit('"sounds" : [');
        this.pushLevel();
        c = c + this.generateSounds(b);
        this.popLevel();
        c = c + this.emit("],")
    } else c = c + this.emit('"sounds" : [ ],');
    return c
};
CodeGen.prototype.generateCostumes = function (b) {
    for (var c = "", d = 0; d < b.costumes.length; d++) {
        var e = b.costumes[d],
            e = '{"name":"' + e.name + '", "img":"' + e.img.replace(/"/g, '\\"') + '", "cx":' + e.cx + ', "cy":' + e.cy + "}";
        d < b.costumes.length - 1 && (e = e + ",");
        c = c + this.emit(e)
    }
    return c
};
CodeGen.prototype.generateSounds = function (b) {
    for (var c = "", d = 0; d < b.sounds.length; d++) {
        var e = b.sounds[d],
            e = '{"name":"' + e.name + '", "sound":"' + e.sound + '"}';
        d < b.sounds.length - 1 && (e = e + ",");
        c = c + this.emit(e)
    }
    return c
};
CodeGen.prototype.generateJsVars = function (b) {
    var c = "",
        d;
    for (d in b.lists) c = c + this.emit("this." + this.generateIdentifier(d) + " = " + JSON.stringify(b.lists[d]) + ";");
    for (d in b.variables) b.lists[d] === void 0 && (c = c + this.emit("this." + this.generateIdentifier(d) + " = " + JSON.stringify(b.variables[d]) + ";"));
    c && (c = c + this.emit(""));
    return c
};
CodeGen.prototype.generateCode = function (b) {
    for (var c = "", d = 0; d < b.length; d++) c = c + this.generate(b[d]);
    return c
};
CodeGen.prototype.generate = function (b) {
    if (b) {
        if (b instanceof LabelInput) {
            if (b._child) return this.generate(b._child);
            b = valueToNative(b.label);
            return typeof b == "number" ? this.emitNumber(b) : typeof b == "string" ? b == "true" ? true : b == "false" ? false : this.emitString(b) : typeof b == "boolean" ? b : this.emitString("" + b)
        }
        var c = this["generate_" + b.func];
        if (c) return c.apply(this, [b]);
        c = g_revFnMapping[b.func] ? g_revFnMapping[b.func] + "(" : b.func + "(";
        if (b instanceof Label) {
            for (var d = 0, e = b.getNumSockets() ; d < e; d++) {
                d > 0 && (c = c + ", ");
                c = c + this.generate(b.getSocketAtChild(d))
            }
            c = this.emitInline(c + ")")
        } else {
            d = 0;
            for (e = b.label.getNumSockets() ; d < e; d++) {
                d > 0 && (c = c + ", ");
                c = c + this.generate(b.label.getSocketAtChild(d))
            }
            c = this.emit(c + ");");
            c = c + this.generate(b.next)
        }
        return c
    }
    return ""
};
CodeGen.prototype.generateIdentifier = function (b) {
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
CodeGen.prototype.generate_registerFlagTrigger = function (b) {
    var c = this.emit("this.onStart(function() {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerKeyTrigger = function (b) {
    var c = this.emit("this.onKeyPress(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerTrigger = function (b) {
    var c = this.emit("this.onCondition(function() {"),
        c = c + this.emit("}, function() {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerSpriteTrigger = function (b) {
    var c = this.emit("this.onActorClick(function() {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerBackgroundChange = function (b) {
    var c = this.emit("this.onSceneChange(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerBroadcastTrigger = function (b) {
    var c = this.emit("this.onMessageReceived(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerCloned = function (b) {
    var c = this.emit("this.onClone(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerDraw = function (b) {
    var c = this.emit("this.onDraw(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});")
};
CodeGen.prototype.generate_registerSpriteCollision = function (b) {
    var c = this.emit("this.onCollision(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});")
};
CodeGen.prototype.generate_registerAnimationDone = function (b) {
    var c = this.emit("this.onAnimationDone(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});")
};
CodeGen.prototype.generate_blockControlBlock = function (b) {
    var c = this.emit("this.requestBlock(function () {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("});");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_registerFunction = function (b) {
    for (var c = "function " + this.generateIdentifier(b.name) + "(", d = 0, e = b.label.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ") {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("}\n")
};
CodeGen.prototype.generate_blockControlCall = function (b) {
    for (var c = this.generateIdentifier(b.name) + "(", d = 0, e = b.label.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueControlCall = function (b) {
    for (var c = this.generateIdentifier(b.name) + "(", d = 0, e = b.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.getSocketAtChild(d))
    }
    return c = this.emitInline(c + ")")
};
CodeGen.prototype.generate_blockControlCallMember = function (b) {
    for (var c = this.generateIdentifier(b.label.getSocketAtChild(0)), d = this.generateIdentifier(b.label.getSocketAtChild(1)), c = c + "." + d + "(", d = 2, e = b.label.getNumSockets() ; d < e; d++) {
        d > 2 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueControlCallMember = function (b) {
    for (var c = this.generateIdentifier(b.getSocketAtChild(0)), d = this.generateIdentifier(b.getSocketAtChild(1)), c = c + "." + d + "(", d = b.getNumSockets(), e = 2; e < d; e++) {
        e > 2 && (c = c + ", ");
        c = c + this.generate(b.getSocketAtChild(e))
    }
    return c + ")"
};
CodeGen.prototype.generate_blockControlCallLibrary = function (b) {
    for (var c = b.name.split("::"), d = this.generateIdentifier(c[1]), c = c[0], c = "lib." + c + "." + d + "(", d = 0, e = b.label.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueControlCallLibrary = function (b) {
    for (var c = b.name.split("::"), d = this.generateIdentifier(c[1]), c = c[0], c = "lib." + c + "." + d + "(", d = 0, e = b.getNumSockets() ; d < e; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.getSocketAtChild(d))
    }
    return c = this.emitInline(c + ")")
};
CodeGen.prototype.generate_blockControlForever = function (b) {
    var c = this.emit("while (true) {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlRepeat = function (b) {
    this.pushLoop();
    var c = "_repeatIdx" + this.peekLoop(),
        c = this.emit("for (var " + c + "=0; " + c + "<" + this.generate(b.label.getSocketAtChild(0)) + "; " + c + "++) {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlForeverIf = function (b) {
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
CodeGen.prototype.generate_blockControlIf = function (b, c) {
    var d;
    d = c ? this.emitInline("if (" + this.generate(b.label.getSocketAtChild(0)) + ") {\n") : this.emit("if (" + this.generate(b.label.getSocketAtChild(0)) + ") {");
    this.pushLevel();
    d = d + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    d = d + this.emit("}");
    return d = d + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlIfElse = function (b, c) {
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
CodeGen.prototype.generate_valueControlIfElse = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + " ? " + this.generate(b.getSocketAtChild(1)) + " : " + this.generate(b.getSocketAtChild(2)))
};
CodeGen.prototype.generate_blockControlWhile = function (b) {
    var c = this.emit("while (" + this.generate(b.label.getSocketAtChild(0)) + ") { ");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlRepeatUntil = function (b) {
    var c;
    c = b.label.getSocketAtChild(0);
    c = c._child && c._child.func == "valueOpNot" ? this.emit("while (" + this.generate(c._child.getSocketAtChild(0)) + ") { ") : this.emit("while (!" + this.generate(c) + ") { ");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlReturn = function (b) {
    var c;
    c = (c = b.label.getSocketAtChild(0)) && (c._child || c.label) ? this.emit("return " + this.generate(c) + ";") : this.emit("return;");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlStop = function (b) {
    return this.emit("this.terminate(" + this.generate(b.label.getSocketAtChild(0)) + ");")
};
CodeGen.prototype.generate_blockControlStopScript = function () {
    return this.emit("blockControlStopScript();")
};
CodeGen.prototype.generate_blockControlStopAll = function () {
    return this.emit("blockControlStopAll();")
};
CodeGen.prototype.generate_blockControlScriptVar = function (b) {
    for (var c = "var ", d = 0; d < b.label.getNumSockets() ; d++) {
        d > 0 && (c = c + ", ");
        c = c + this.generate(b.label.getSocketAtChild(d))
    }
    c = this.emit(c + ";");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlFor = function (b) {
    var c = this.generateIdentifier(b.label.getSocketAtChild(0)),
        c = this.emit("for (var " + c + "=" + this.generate(b.label.getSocketAtChild(1)) + "; " + c + "<=" + this.generate(b.label.getSocketAtChild(2)) + "; " + c + "+=" + this.generate(b.label.getSocketAtChild(3)) + ") {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlForEach = function (b) {
    var c = this.emit(this.generate(b.label.getSocketAtChild(0)) + ".forEach(function(" + this.generateIdentifier(b.label.getSocketAtChild(1)) + ") {");
    this.pushLevel();
    c = c + this.generate(b.getBlockAtContainer(0));
    this.popLevel();
    c = c + this.emit("}");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlBreak = function (b) {
    var c = this.emit("break;");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockControlContinue = function (b) {
    var c = this.emit("continue;");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockComment = function (b) {
    var c = this.emit("/*"),
        c = c + this.emit(b.label.getSocketAtChild(0).label);
    return c = c + this.emit("*/")
};
CodeGen.prototype.generate_blockInlineComment = function (b) {
    var c = this.emit("//" + b.label.getSocketAtChild(0).label);
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueOpAdd = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " + " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpSubtract = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " - " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpMultiply = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " * " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpDivide = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " / " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpRandom = function (b) {
    return this.emitInline("Math.randomRange(" + this.generate(b.getSocketAtChild(0)) + ", " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpLess = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " < " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpEqual = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " == " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpGreater = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " > " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpAnd = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " && " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpOr = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " || " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpNot = function (b) {
    b = b.getSocketAtChild(0);
    return b._child && b._child.func == "valueOpNot" ? this.generate(b._child.getSocketAtChild(0)) : this.emitInline("!" + this.generate(b))
};
CodeGen.prototype.generate_valueOpJoin = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " + " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpLetter = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".charAt(" + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpLength = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".length")
};
CodeGen.prototype.generate_valueOpMod = function (b) {
    return this.emitInline("(" + this.generate(b.getSocketAtChild(0)) + " % " + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpRound = function (b) {
    return this.emitInline("Math.round(" + this.generate(b.getSocketAtChild(0)) + ")")
};
CodeGen.prototype.generate_valueOpMath = function (b) {
    switch (b.getSocketAtChild(0).label) {
        case "abs":
            return this.emitInline("Math.abs(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "floor":
            return this.emitInline("Math.floor(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "ceiling":
            return this.emitInline("Math.ceil(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "int":
            return this.emitInline("parseInt(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "sqrt":
            return this.emitInline("Math.sqrt(" + this.generate(b.getSocketAtChild(1)) +
                ")");
        case "sin":
            return this.emitInline("Math.sin(" + this.generate(b.getSocketAtChild(1)) + " * Math.PI / 180)");
        case "sinrad":
            return this.emitInline("Math.sin(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "cos":
            return this.emitInline("Math.cos(" + this.generate(b.getSocketAtChild(1)) + " * Math.PI / 180)");
        case "cosrad":
            return this.emitInline("Math.cos(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "tan":
            return this.emitInline("Math.tan(" + this.generate(b.getSocketAtChild(1)) + " * Math.PI / 180)");
        case "tanrad":
            return this.emitInline("Math.tan(" +
                this.generate(b.getSocketAtChild(1)) + ")");
        case "asin":
            return this.emitInline("Math.asin(" + this.generate(b.getSocketAtChild(1)) + " * 180 / Math.PI)");
        case "asinrad":
            return this.emitInline("Math.asin(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "acos":
            return this.emitInline("Math.acos(" + this.generate(b.getSocketAtChild(1)) + " * 180 / Math.PI)");
        case "acosrad":
            return this.emitInline("Math.acos(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "atan":
            return this.emitInline("Math.atan(" + this.generate(b.getSocketAtChild(1)) +
                " * 180 / Math.PI)");
        case "atanrad":
            return this.emitInline("Math.atan(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "ln":
            return this.emitInline("Math.log(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "log":
            return this.emitInline("Math.log(" + this.generate(b.getSocketAtChild(1)) + ") / Math.LN10");
        case "e^":
            return this.emitInline("Math.exp(" + this.generate(b.getSocketAtChild(1)) + ")");
        case "10^":
            return this.emitInline("Math.pow(10, " + this.generate(b.getSocketAtChild(1)) + ")");
        case "sign":
            return this.emitInline("Math.sign(" +
                this.generate(b.getSocketAtChild(1)) + ")")
    }
    return ""
};
CodeGen.prototype.generate_valueOpMath2 = function (b) {
    switch (b.getSocketAtChild(0).label) {
        case "atan2":
            return this.emitInline("Math.atan2(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ") * 180 / Math.PI");
        case "atan2rad":
            return this.emitInline("Math.atan2(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")");
        case "max":
            return this.emitInline("Math.max(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")");
        case "min":
            return this.emitInline("Math.min(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")");
        case "pow":
            return this.emitInline("Math.pow(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")")
    }
    return ""
};
CodeGen.prototype.generate_valueOpConstants = function (b) {
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
CodeGen.prototype.generate_valueOpBinary = function (b) {
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
CodeGen.prototype.generate_valueOpBitNot = function (b) {
    return this.emitInline("~" + this.generate(b.getSocketAtChild(0)))
};
CodeGen.prototype.generate_valueOpExpression = function (b) {
    return this.generate(b.getSocketAtChild(0))
};
CodeGen.prototype.generate_valueOpTextSplit = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".split(" + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_valueOpTextReplace = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(1)) + ".replace(" + this.generate(b.getSocketAtChild(0)) + ", " + this.generate(b.getSocketAtChild(2)) + ")")
};
CodeGen.prototype.generate_valueOpTextIndex = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(1)) + ".indexOf(" + this.generate(b.getSocketAtChild(0)) + ")")
};
CodeGen.prototype.generate_valueOpTextLastIndex = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(1)) + ".lastIndexOf(" + this.generate(b.getSocketAtChild(0)) + ")")
};
CodeGen.prototype.generate_valueOpTextSubstring = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".substring(" + this.generate(b.getSocketAtChild(1)) + ", " + this.generate(b.getSocketAtChild(2)) + ")")
};
CodeGen.prototype.generate_valueOpTextTransform = function (b) {
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
CodeGen.prototype.generate_blockVarPropSet = function (b) {
    var c;
    c = false;
    var d = b.label.getSocketAtChild(1);
    d._child ? c = true : d.label != "self" && (c = true);
    var e = b.label.getSocketAtChild(0);
    e._child ? c = true : g_properties.indexOf(e.label) >= 0 && (c = true);
    c = c ? this.emit("this.sensing.setSpriteProperty(" + this.generate(e) + ", " + this.generate(d) + ", " + this.generate(b.label.getSocketAtChild(2)) + ");") : this.emit(this.generateIdentifier(e) + " = " + this.generate(b.label.getSocketAtChild(2)) + ";");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueSensingSpriteProperty = function (b) {
    return this.generate_valueVarPropGet(b)
};
CodeGen.prototype.generate_valueVarPropGet = function (b) {
    var c = false,
        d = b.getSocketAtChild(1);
    d._child ? c = true : d.label != "self" && (c = true);
    b = b.getSocketAtChild(0);
    b._child ? c = true : g_properties.indexOf(b.label) >= 0 && (c = true);
    return c ? this.emitInline("this.sensing.getSpriteProperty(" + this.generate(b) + ", " + this.generate(d) + ")") : this.generateIdentifier(b)
};
CodeGen.prototype.generate_blockVarSet = function (b) {
    var c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + " = " + this.generate(b.label.getSocketAtChild(1)) + ";");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockVarChangeBy = function (b) {
    var c, d = b.label.getSocketAtChild(1);
    if (!d._child)
        if (d.label == "1" || d.label == 1) c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + "++;");
        else if (d.label == "-1" || d.label == -1) c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + "--;");
    c || (c = this.emit(this.generateIdentifier(b.label.getSocketAtChild(0)) + " += " + this.generate(b.label.getSocketAtChild(1)) + ";"));
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockVarShow = function (b) {
    return this.generate(b.next)
};
CodeGen.prototype.generate_blockVarHide = function (b) {
    return this.generate(b.next)
};
CodeGen.prototype.generate_valueListNew = function () {
    return this.emitInline("[]")
};
CodeGen.prototype.generate_blockListAdd = function (b) {
    for (var c = b.label.getNumSockets(), d = this.generateIdentifier(b.label.getSocketAtChild(c - 1)), d = d + ".push(", e = 0; e < c - 1; e++) {
        e > 0 && (d = d + ", ");
        d = d + this.generate(b.label.getSocketAtChild(e))
    }
    d = this.emit(d + ");");
    return d = d + this.generate(b.next)
};
CodeGen.prototype.generate_blockListDel = function (b) {
    var c = this.generateIdentifier(b.label.getSocketAtChild(1)),
        d = b.label.getSocketAtChild(0);
    if (d.label == "all") c = c + ".length = 0;";
    else {
        d = b.label.getSocketAtChild(0);
        if (d._child) {
            d = d._child;
            d = d.func == "valueOpBinary" ? d.getSocketAtChild(1).label == "+" && (!d.getSocketAtChild(0)._child && "" + d.getSocketAtChild(0).label == "1" || !d.getSocketAtChild(2)._child && "" + d.getSocketAtChild(2).label == "1") ? d.getSocketAtChild(0)._child ? this.generate(d.getSocketAtChild(0)) : this.generate(d.getSocketAtChild(2)) :
                this.generate(d) + " - 1" : d.func == "valueOpAdd" ? !d.getSocketAtChild(0)._child && "" + d.getSocketAtChild(0).label == "1" || !d.getSocketAtChild(1)._child && "" + d.getSocketAtChild(1).label == "1" ? d.getSocketAtChild(0)._child ? this.generate(d.getSocketAtChild(0)) : this.generate(d.getSocketAtChild(1)) : this.generate(d) + " - 1" : this.generate(d) + " - 1"
        } else d = valueToNative(d.label) - 1;
        c = c + (".splice(" + d + ", 1);")
    }
    c = this.emit(c);
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockListInsert = function (b) {
    var c = b.label.getNumSockets(),
        d = this.generateIdentifier(b.label.getSocketAtChild(c - 1)),
        e = b.label.getSocketAtChild(c - 2);
    if (e._child) {
        e = e._child;
        e = e.func == "valueOpBinary" ? e.getSocketAtChild(1).label == "+" && (!e.getSocketAtChild(0)._child && "" + e.getSocketAtChild(0).label == "1" || !e.getSocketAtChild(2)._child && "" + e.getSocketAtChild(2).label == "1") ? e.getSocketAtChild(0)._child ? this.generate(e.getSocketAtChild(0)) : this.generate(e.getSocketAtChild(2)) : this.generate(e) +
            " - 1" : e.func == "valueOpAdd" ? !e.getSocketAtChild(0)._child && "" + e.getSocketAtChild(0).label == "1" || !e.getSocketAtChild(1)._child && "" + e.getSocketAtChild(1).label == "1" ? e.getSocketAtChild(0)._child ? this.generate(e.getSocketAtChild(0)) : this.generate(e.getSocketAtChild(1)) : this.generate(e) + " - 1" : this.generate(e) + " - 1"
    } else e = valueToNative(e.label) - 1;
    d = d + (".splice(" + e + ", 0, ");
    for (e = 0; e < c - 2; e++) {
        e > 0 && (d = d + ", ");
        d = d + this.generate(b.label.getSocketAtChild(e))
    }
    d = this.emit(d + ");");
    return d = d + this.generate(b.next)
};
CodeGen.prototype.generate_blockListReplace = function (b) {
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
CodeGen.prototype.generate_valueListItem = function (b) {
    var c = b.getSocketAtChild(0);
    if (c._child) {
        c = c._child;
        c = c.func == "valueOpBinary" ? c.getSocketAtChild(1).label == "+" && (!c.getSocketAtChild(0)._child && "" + c.getSocketAtChild(0).label == "1" || !c.getSocketAtChild(2)._child && "" + c.getSocketAtChild(2).label == "1") ? c.getSocketAtChild(0)._child ? this.generate(c.getSocketAtChild(0)) : this.generate(c.getSocketAtChild(2)) : this.generate(c) + " - 1" : c.func == "valueOpAdd" ? !c.getSocketAtChild(0)._child && "" + c.getSocketAtChild(0).label ==
            "1" || !c.getSocketAtChild(1)._child && "" + c.getSocketAtChild(1).label == "1" ? c.getSocketAtChild(0)._child ? this.generate(c.getSocketAtChild(0)) : this.generate(c.getSocketAtChild(1)) : this.generate(c) + " - 1" : this.generate(c) + " - 1"
    } else c = c.label == "last" ? this.generateIdentifier(b.getSocketAtChild(1)) + ".length - 1" : c.label == "any" ? "Math.randomRange(1, " + this.generateIdentifier(b.getSocketAtChild(1)) + ".length) - 1" : valueToNative(c.label) - 1;
    return this.emitInline(this.generateIdentifier(b.getSocketAtChild(1)) +
        "[" + c + "]")
};
CodeGen.prototype.generate_valueListLength = function (b) {
    return this.emitInline(this.generateIdentifier(b.getSocketAtChild(0)) + ".length")
};
CodeGen.prototype.generate_valueListContains = function (b) {
    return this.emitInline(this.generateIdentifier(b.getSocketAtChild(0)) + ".contains(" + this.generate(b.getSocketAtChild(1)) + ")")
};
CodeGen.prototype.generate_blockObjSet = function (b) {
    var c = b.label.getSocketAtChild(0),
        d = b.label.getSocketAtChild(1),
        e = b.label.getSocketAtChild(2),
        c = !d._child && this.isIdentifier(d.label) ? this.emit(this.generate(c) + "." + d.label + " = " + this.generate(e) + ";") : this.emit(this.generate(c) + "[" + this.generate(d) + "] = " + this.generate(e) + ";");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueObjGet = function (b) {
    var c = b.getSocketAtChild(0),
        b = b.getSocketAtChild(1);
    return !b._child && this.isIdentifier(b.label) ? this.emitInline(this.generate(c) + "." + b.label) : this.emitInline(this.generate(c) + "[" + this.generate(b) + "]")
};
CodeGen.prototype.generate_valueObjLength = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".length")
};
CodeGen.prototype.generate_valueObjKeys = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".keys()")
};
CodeGen.prototype.generate_valueObjValues = function (b) {
    return this.emitInline(this.generate(b.getSocketAtChild(0)) + ".values()")
};
CodeGen.prototype.generate_valueScriptVar = function (b) {
    return this.generateIdentifier(b.name)
};
CodeGen.prototype.generate_valueParam = function (b) {
    return this.generateIdentifier(b.name)
};
CodeGen.prototype.generate_valueVar = function (b) {
    return this.emitInline("this.") + this.generateIdentifier(b.name)
};
CodeGen.prototype.generate_valueList = function (b) {
    return this.emitInline("this.") + this.generateIdentifier(b.name)
};
CodeGen.prototype.generate_valueNetworkParse = function (b) {
    return this.emitInline(b.getSocketAtChild(0).label)
};
CodeGen.prototype.generate_registerMCPEEventChat = function (b) {
    var c = this.emit("mc.onChat(function (message) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventTell = function (b) {
    var c = this.emit("mc.onTell(function (message) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventDied = function (b) {
    var c = this.emit("mc.onPlayerDied(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventPlayer = function (b) {
    var c = this.emit("mc.onPlayerTravelled(function (traveltype) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventTeleported = function (b) {
    var c = this.emit("mc.onPlayerTeleported(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventBounced = function (b) {
    var c = this.emit("mc.onPlayerBounced(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventBlockPlaced = function (b) {
    var c = this.emit("mc.onBlockPlaced(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventBlockPlacedAny = function (b) {
    var c = this.emit("mc.onAnyBlockPlaced(function (block) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventBlockBroken = function (b) {
    var c = this.emit("mc.onBlockBroken(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventBlockBrokenAny = function (b) {
    var c = this.emit("mc.onAnyBlockBroken(function (block) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventMobKilled = function (b) {
    var c = this.emit("mc.onMobKilled(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventMobKilledAny = function (b) {
    var c = this.emit("mc.onAnyMobKilled(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventEntitySpawned = function (b) {
    var c = this.emit("mc.onEntitySpawned(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventEntitySpawnedAny = function (b) {
    var c = this.emit("mc.onAnyEntitySpawned(function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventItemAcquired = function (b) {
    var c = this.emit("mc.onItemAcquired(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventItemAcquiredAny = function (b) {
    var c = this.emit("mc.onAnyItemAcquired(function (item) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventItemDropped = function (b) {
    var c = this.emit("mc.onItemDropped(" + this.generate(b.label.getSocketAtChild(0)) + ", function () {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_registerMCPEEventItemDroppedAny = function (b) {
    var c = this.emit("mc.onAnyItemDropped(function (item) {");
    this.pushLevel();
    c = c + this.generate(b.next);
    this.popLevel();
    return c = c + this.emit("});\n")
};
CodeGen.prototype.generate_blockMCPEBotStart = function (b) {
    var c = this.emit("mc.bot.start();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotFlush = function (b) {
    var c = this.emit("mc.bot.flush();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotClear = function (b) {
    var c = this.emit("mc.bot.clear();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotMoveBy = function (b) {
    var c = this.emit("mc.bot.moveBy(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ", " + this.generate(b.label.getSocketAtChild(2)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotMoveTo = function (b) {
    var c = this.emit("mc.bot.moveTo(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ", " + this.generate(b.label.getSocketAtChild(2)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotMoveToPlayer = function (b) {
    var c = this.emit("mc.bot.moveToPlayer();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotTestForBlock = function (b) {
    var c = this.emit("mc.bot.testForBlock(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_valueMCPEResult = function () {
    return this.emitInline("mc.bot.result")
};
CodeGen.prototype.generate_blockMCPEBotMove = function (b) {
    var c = this.emit("mc.bot.move(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotTurnLeft = function (b) {
    var c = this.emit("mc.bot.turnLeft();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotTurnRight = function (b) {
    var c = this.emit("mc.bot.turnRight();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotPointDirection = function (b) {
    var c = this.emit("mc.bot.pointTowards(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotSaveCheckpoint = function (b) {
    var c = this.emit("mc.bot.saveCheckpoint(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotRestoreCheckpoint = function (b) {
    var c = this.emit("mc.bot.restoreCheckpoint(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotPlaceBlock = function (b) {
    var c = this.emit("mc.bot.place(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotBox = function (b) {
    var c = this.emit("mc.bot.box(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ", " + this.generate(b.label.getSocketAtChild(2)) + ", " + this.generate(b.label.getSocketAtChild(3)) + ", " + this.generate(b.label.getSocketAtChild(4)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotSummon = function (b) {
    var c = this.emit("mc.bot.summon(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEBotTeleport = function (b) {
    var c = this.emit("mc.bot.teleport(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEEnchant = function (b) {
    var c = this.emit("mc.teleport(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEGive = function (b) {
    var c = this.emit("mc.give(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPETeleport = function (b) {
    var c = this.emit("mc.teleport(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ", " + this.generate(b.label.getSocketAtChild(2)) + ", " + this.generate(b.label.getSocketAtChild(3)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPESetTime = function (b) {
    var c = this.emit("mc.setTime(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEKill = function (b) {
    var c = this.emit("mc.kill(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEGameMode = function (b) {
    var c = this.emit("mc.setGameMode(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPESay = function (b) {
    var c = this.emit("mc.say(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPETell = function (b) {
    var c = this.emit("mc.say(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPESetWeather = function (b) {
    var c = this.emit("mc.setWeather(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPESummon = function (b) {
    var c = this.emit("mc.summon(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ", " + this.generate(b.label.getSocketAtChild(2)) + ", " + this.generate(b.label.getSocketAtChild(3)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentMove = function (b) {
    var c = this.emit("mc.agent.move(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentTurn = function (b) {
    var c = this.emit("mc.agent.turn(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentPlace = function (b) {
    var c = this.emit("mc.agent.place(" + this.generate(b.label.getSocketAtChild(0)) + ", " + this.generate(b.label.getSocketAtChild(1)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentDetect = function (b) {
    var c = this.emit("mc.agent.detect(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentAttack = function (b) {
    var c = this.emit("mc.agent.attack(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentDestroy = function (b) {
    var c = this.emit("mc.agent.destroy(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentCollect = function (b) {
    var c = this.emit("mc.agent.collect(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentTill = function (b) {
    var c = this.emit("mc.agent.till(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentDropall = function (b) {
    var c = this.emit("mc.agent.dropAll(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentTeleport = function (b) {
    var c = this.emit("mc.agent.teleport();");
    return c = c + this.generate(b.next)
};
CodeGen.prototype.generate_blockMCPEAgentFast = function (b) {
    var c = this.emit("mc.agent.setFast(" + this.generate(b.label.getSocketAtChild(0)) + ");");
    return c = c + this.generate(b.next)
};
var g_fnSwiftMapping = {
    "self.broadcast": "blockControlBroadcast",
    "self.broadcastAndWait": "blockControlBroadcastWait",
    "self.post": "blockControlPostMessage",
    "self.postAndWait": "blockControlPostMessageAndWait",
    "self.getMessageValue": "valueControlMessageValue",
    "self.getMessageSource": "valueControlMessageSource",
    "self.isClone": "valueControlIsClone",
    "self.wait": "blockControlWait",
    "self.waitUntil": "blockControlWaitUntil",
    "self.clone": "blockControlCloneActor",
    "self.getLastClonedActor": "valueControlLastClonedActor",
    "self.getOriginalNameFromClone": "valueControlCloneName",
    "self.deleteActor": "blockControlDeleteActor",
    "self.print": "blockControlPrint",
    "self.terminate": "blockControlStop",
    "self.motion.move": "blockMotionMove",
    "self.motion.turnCW": "blockMotionTurnCW",
    "self.motion.turnCCW": "blockMotionTurnCCW",
    "self.motion.pointDirection": "blockMotionPointDirection",
    "self.motion.setAngle": "blockMotionPointAngle",
    "self.motion.pointTowards": "blockMotionPointTowards",
    "self.motion.moveTo": "blockMotionGoTo",
    "self.motion.follow": "blockMotionGoTowards",
    "self.motion.glide": "blockMotionGlide",
    "self.motion.changeXBy": "blockMotionChangeXBy",
    "self.motion.setX": "blockMotionSetX",
    "self.motion.changeYBy": "blockMotionChangeYBy",
    "self.motion.setY": "blockMotionSetY",
    "self.motion.bounceOnEdge": "blockMotionBounceOnEdge",
    "self.motion.setRotationStyle": "blockMotionRotationStyle",
    "self.motion.getX": "valueMotionXPosition",
    "self.motion.getY": "valueMotionYPosition",
    "self.motion.getDirection": "valueMotionDirection",
    "self.motion.getAngle": "valueMotionAngle",
    "self.animation.setSpeed": "blockAnimationSetSpeed",
    "self.animation.setPart": "blockLooksSetCharacterPart",
    "self.animation.getPart": "valueLooksGetCharacterPart",
    "self.animation.waitFor": "blockAnimationWaitFor",
    "self.animation.stop": "blockAnimationStop",
    "self.animation.isRunning": "valueAnimationIsRunning",
    "self.animation.animationLength": "valueAnimationTime",
    "self.animation.whenDone": "registerAnimationDone",
    "self.animation.animate": "blockAnimationAnimate",
    "self.animation.simpleMoveTo": "blockAnimationSimpleMoveTo",
    "self.animation.simpleMoveBy": "blockAnimationSimpleMoveBy",
    "self.animation.simpleRotateTo": "blockAnimationSimpleRotateTo",
    "self.animation.simpleRotateBy": "blockAnimationSimpleRotateBy",
    "self.animation.simpleScaleTo": "blockAnimationSimpleScaleTo",
    "self.animation.simpleScaleBy": "blockAnimationSimpleScaleBy",
    "self.animation.simpleBezierTo": "blockAnimationSimpleBezierTo",
    "self.animation.simpleBezierBy": "blockAnimationSimpleBezierBy",
    "self.animation.simpleEffectTo": "blockAnimationSimpleEffectTo",
    "self.animation.simpleEffectBy": "blockAnimationSimpleEffectBy",
    "self.animation.simpleSwitchCostume": "blockAnimationSimpleSwitchCostume",
    "self.animation.simpleSwitchCostumeAndWait": "blockAnimationSimpleSwitchCostumeAndWait",
    "self.animation.rotateTo": "blockAnimationRotateTo",
    "self.animation.rotateBy": "blockAnimationRotateBy",
    "self.animation.moveTo": "blockAnimationMoveTo",
    "self.animation.moveBy": "blockAnimationMoveBy",
    "self.animation.scaleTo": "blockAnimationScaleTo",
    "self.animation.scaleBy": "blockAnimationScaleBy",
    "self.animation.bezierBy": "blockAnimationBezierBy",
    "self.animation.bezierTo": "blockAnimationBezierTo",
    "self.animation.effectBy": "blockAnimationEffectBy",
    "self.animation.effectTo": "blockAnimationEffectTo",
    "self.animation.changeCostumes": "blockAnimationSwitchCostume",
    "self.looks.setCostume": "blockLooksSwitchCostume",
    "self.looks.nextCostume": "blockLooksNextCostume",
    "self.looks.firstCostumeInGroup": "blockLooksFirstCostumeInGroup",
    "self.looks.nextCostumeInGroup": "blockLooksNextCostumeInGroup",
    "self.looks.getCostumeIndex": "valueLooksCostumeNum",
    "self.looks.getCostume": "valueLooksCostumeName",
    "self.looks.setBackgroundColor": "blockLooksBackgroundColor",
    "self.looks.setBackground": "blockLooksSwitchBackground",
    "self.looks.setBackgroundAndWait": "blockLooksSwitchBackgroundAndWait",
    "self.looks.nextBackground": "blockLooksNextBackground",
    "self.looks.firstBackgroundInGroup": "blockLooksFirstBackgroundInGroup",
    "self.looks.nextBackgroundInGroup": "blockLooksNextBackgroundInGroup",
    "self.looks.getBackgroundIndex": "valueLooksBackground",
    "self.looks.getBackground": "valueLooksBackgroundName",
    "self.looks.setLabel": "blockLooksSetLabel",
    "self.looks.setBubbleStyle": "blockLooksSetBubble",
    "self.looks.setBubbleDock": "blockLooksSetBubbleDock",
    "self.looks.setBubbleWidth": "blockLooksSetBubbleWidth",
    "self.looks.say": "blockLooksSay",
    "self.looks.sayFor": "blockLooksSayFor",
    "self.looks.think": "blockLooksThink",
    "self.looks.thinkFor": "blockLooksThinkFor",
    "self.looks.changeEffect": "blockLooksChangeEffect",
    "self.looks.setEffect": "blockLooksSetEffect",
    "self.looks.resetEffects": "blockLooksClearEffects",
    "self.looks.changeSize": "blockLooksChangeSizeBy",
    "self.looks.setSize": "blockLooksSetSize",
    "self.looks.getSize": "valueLooksSize",
    "self.looks.show": "blockLooksShow",
    "self.looks.hide": "blockLooksHide",
    "self.looks.isHidden": "valueLooksIsHidden",
    "self.looks.setLayer": "blockLooksLayer",
    "self.looks.getLayer": "valueLooksLayer",
    "self.looks.bringToFront": "blockLooksGoFront",
    "self.looks.sendToBack": "blockLooksGoBack",
    "self.looks.moveBackward": "blockLooksMoveBack",
    "self.looks.bringForward": "blockLooksMoveFront",
    "self.looks.dialog": "blockLooksDialog",
    "self.looks.prompt": "blockLooksPromptChoices",
    "self.looks.setViewportCamera": "blockLooksViewportCamera",
    "self.looks.showVideo": "blockLooksVideo",
    "self.looks.setVideoTransparency": "blockLooksVideoTransparency",
    "self.looks.setLevel": "blockLooksSetLevel",
    "self.looks.getLevel": "valueLooksGetLevel",
    "self.looks.getLevelIndex": "valueLooksGetLevelNum",
    "self.looks.getNumLevels": "valueLooksNumLevels",
    "self.looks.getTile": "valueLooksGetTileAt",
    "self.looks.getTileAtPoint": "valueLooksGetTileAtPoint",
    "self.looks.setTile": "blockLooksSetTileAt",
    "self.looks.setTileAtPoint": "blockLooksSetTileAtPoint",
    "self.sensing.getVideo": "valueSensingVideo",
    "self.sensing.isTouching": "valueSensingTouchingSprite",
    "self.sensing.isTouchingClone": "valueSensingTouchingCloneOf",
    "self.sensing.isTouchingColor": "valueSensingTouchingColor",
    "self.sensing.isColorTouchingColor": "valueSensingSeeColor",
    "self.sensing.ask": "blockSensingAskAndWait",
    "self.sensing.askChoices": "blockSensingAskChoices",
    "self.sensing.getAnswer": "valueSensingAnswer",
    "self.sensing.getTiltAngle": "valueSensingTiltAngle",
    "self.sensing.getTiltAmount": "valueSensingTiltAmount",
    "self.sensing.getTiltX": "valueSensingAccelerometerX",
    "self.sensing.getTiltY": "valueSensingAccelerometerY",
    "self.sensing.getMouseX": "valueSensingMouseX",
    "self.sensing.getMouseY": "valueSensingMouseY",
    "self.sensing.isMouseDown": "valueSensingMouseDown",
    "self.sensing.isKeyPressed": "valueSensingKeyPressed",
    "self.sensing.getDistance": "valueSensingDistanceToSprite",
    "self.sensing.resetTimer": "blockSensingResetTimer",
    "self.sensing.getTimer": "valueSensingTimer",
    "self.sensing.setSpriteProperty": "blockSensingSpriteProperty",
    "self.sensing.getSpriteProperty": "valueSensingSpriteProperty",
    "self.sensing.getActorName": "valueSensingActorName",
    "self.sensing.getActorNameAtIndex": "valueSensingActorNameAt",
    "self.sensing.getActorCount": "valueSensingNumActors",
    "self.sensing.getTouchedActorName": "valueSensingTouchedActorName",
    "self.sensing.getDateTime": "valueSensingDateTime",
    "self.sensing.getScreenLeft": "valueSensingScreenLeft",
    "self.sensing.getScreenRight": "valueSensingScreenRight",
    "self.sensing.getScreenTop": "valueSensingScreenTop",
    "self.sensing.getScreenBottom": "valueSensingScreenBottom",
    "self.sensing.getScreenProperty": "valueSensingStageProperty",
    "self.sensing.setTag": "blockSensingSetTag",
    "self.sensing.getTag": "valueSensingGetTag",
    "self.sensing.getUserId": "valueSensingUserId",
    "self.sensing.getUserFirstName": "valueSensingUserFirstName",
    "self.sound.play": "blockSoundPlay",
    "self.sound.playUntilDone": "blockSoundPlayUntilDone",
    "self.sound.stopAll": "blockSoundStopAll",
    "self.sound.playDrum": "blockSoundPlayDrum",
    "self.sound.playRest": "blockSoundRest",
    "self.sound.playNote": "blockSoundPlayNote",
    "self.sound.setInstrument": "blockSoundSetInstrument",
    "self.sound.changeVolume": "blockSoundChangeVolume",
    "self.sound.setVolume": "blockSoundSetVolume",
    "self.sound.getVolume": "valueSoundVolume",
    "self.sound.changeTempo": "blockSoundChangeTempo",
    "self.sound.setTempo": "blockSoundSetTempo",
    "self.sound.getTempo": "valueSoundTempo",
    "self.canvas.clear": "blockPenClear",
    "self.canvas.penDown": "blockPenDown",
    "self.canvas.penUp": "blockPenUp",
    "self.canvas.setColor": "blockPenSetColor",
    "self.canvas.changeHue": "blockPenChangeHue",
    "self.canvas.setHue": "blockPenSetHue",
    "self.canvas.changeShade": "blockPenChangeShade",
    "self.canvas.setShade": "blockPenSetShade",
    "self.canvas.changePenSize": "blockPenChangeSize",
    "self.canvas.setPenSize": "blockPenSetSize",
    "self.canvas.stamp": "blockPenStamp",
    "self.canvas.setFont": "blockPenSetFont",
    "self.canvas.setFontColor": "blockPenSetFontColor",
    "self.canvas.drawText": "blockPenDrawText",
    "self.canvas.redraw": "blockPenRedraw",
    "self.canvas.setFillColor": "blockPenSetFillColor",
    "self.canvas.setNoFill": "blockPenSetNoFill",
    "self.canvas.drawBezier": "blockPenDrawBezier",
    "self.canvas.drawPoint": "blockPenDrawPoint",
    "self.canvas.drawLine": "blockPenDrawLine",
    "self.canvas.drawRect": "blockPenDrawRectangle",
    "self.canvas.drawTriangle": "blockPenDrawTriangle",
    "self.canvas.drawEllipse": "blockPenDrawEllipse",
    "self.canvas.drawTextAt": "blockPenDrawTextAt",
    "self.canvas.drawLocalRect": "blockPenDrawRectangleLocal",
    "self.canvas.drawLocalEllipse": "blockPenDrawRectangleLocal",
    "self.physics.getProperty": "blockPhysicsGetProperty",
    "self.physics.apply": "blockPhysicsApply",
    "self.physics.applyXY": "blockPhysicsApplyXY",
    "self.physics.applyActive": "blockPhysicsSetActorActive",
    "self.physics.applyStatic": "blockPhysicsSetActorStatic",
    "self.physics.applyGeometry": "blockPhysicsSetActorGeometry",
    "self.physics.isCollidedWith": "valuePhysicsCollidedWithSprite",
    "self.physics.getCollidedName": "valuePhysicsCollidedWithName",
    "self.physics.applyForce": "blockPhysicsApplyForce",
    "self.physics.applyImpulse": "blockPhysicsApplyImpulse",
    "self.physics.applyForceAtAngle": "blockPhysicsApplyForceAngle",
    "self.physics.applyImpulseAtAngle": "blockPhysicsApplyImpulseAngle",
    "self.physics.applyForceAtXY": "blockPhysicsApplyForceXY",
    "self.physics.applyImpulseAtXY": "blockPhysicsApplyImpulseXY",
    "self.physics.applyTorque": "blockPhysicsApplyTorque",
    "self.physics.setActive": "blockPhysicsSetActive",
    "self.physics.setStatic": "blockPhysicsSetStatic",
    "self.physics.setGeometry": "blockPhysicsSetGeometry",
    "self.physics.setDensity": "blockPhysicsSetDensity",
    "self.physics.setFriction": "blockPhysicsSetFriction",
    "self.physics.setRestitution": "blockPhysicsSetRestitution",
    "self.physics.setAngularDamping": "blockPhysicsSetAngularDamping",
    "self.physics.setAngularVelocity": "blockPhysicsSetAngularVelocity",
    "self.physics.setLinearDamping": "blockPhysicsSetLinearDamping",
    "self.physics.setLinearVelocity": "blockPhysicsSetLinearVelocity",
    "self.physics.getDensity": "valuePhysicsDensity",
    "self.physics.getFriction": "valuePhysicsFriction",
    "self.physics.getRestitution": "valuePhysicsRestitution",
    "self.physics.getAngularVelocity": "valuePhysicsAngularVelocity",
    "self.physics.getInertia": "valuePhysicsInertia",
    "self.physics.isAwake": "valuePhysicsIsAwake",
    "self.physics.getVelocityX": "valuePhysicsXVelocity",
    "self.physics.getVelocityY": "valuePhysicsYVelocity",
    "self.physics.getAngularDamping": "valuePhysicsAngularDamping",
    "self.physics.getLinearDamping": "valuePhysicsLinearDamping",
    "self.physics.setGravity": "blockPhysicsSetGravity",
    "self.physics.getGravityX": "valuePhysicsXGravity",
    "self.physics.getGravityY": "valuePhysicsYGravity",
    "self.physics.start": "blockPhysicsStart",
    "self.physics.stop": "blockPhysicsStop",
    "self.net.saveValue": "blockNetworkSaveValue",
    "self.net.loadValue": "blockNetworkLoadValue",
    "self.net.fetch": "blockNetworkAPI",
    "self.net.parse": "valueNetworkParse",
    "self.net.getResult": "valueNetworkResult"
},
    g_revFnSwiftMapping = {};
for (key in g_fnSwiftMapping) g_revFnSwiftMapping[g_fnSwiftMapping[key]] = key;
g_builtinsCompletion = ["self.setState({})", "self.onStart(function(){\n});", "self.onCondition(function(){return condition;}, function(){\n});", "self.onActorClick(function(){\n});", 'self.onKeyPress("space", function(){\n});', "self.onSceneChange(function(){\n})", "self.onMessageReceived(message, function(){\n})", "self.onClone(function(){\n})", "self.onDraw(function(){\n})", "self.onCollision(function(){\n})", "self.onAnimationDone(function(){\n})", "self.requestBlock(function(){\n})", "Math.abs(theta)", "Math.acos(theta)",
    "Math.asin(theta)", "Math.atan(theta)", "Math.atan2(y, x)", "Math.ceil(n)", "Math.cos(n)", "Math.exp(n)", "Math.floor(n)", "Math.log(n)", "Math.max(n, m)", "Math.min(n, m)", "Math.pow(x, y)", "Math.random()", "Math.randomRange(min, max)", "Math.round(n)", "Math.sin(theta)", "Math.sqrt(n)", "Math.tan(theta)", "Math.E", "Math.PI", "Math.SQRT2", "Math.SQRT1_2", "Math.LN2", "Math.LN10", "Math.LOG2E", "Math.LOG10E"
];
g_fnCompletion = "self.broadcast(event);self.broadcastAndWait(event);self.post(event, target arg);self.postAndWait(event, target, arg);self.getMessageValue();self.getMessageSource();self.isClone();self.wait(seconds);self.waitUntil(condition);self.clone(actorName);self.getLastClonedActor();self.getOriginalNameFromClone(actorName);self.deleteActor();self.terminate(type);self.motion.move(d);self.motion.turnCW(degrees);self.motion.turnCCW(degrees);self.motion.pointDirection(degrees);self.motion.setAngle(degrees);self.motion.pointTowards(actorName);self.motion.moveTo(x, y);self.motion.follow(actorName);self.motion.glide(seconds, x, y);self.motion.changeXBy(x);self.motion.setX(x);self.motion.changeYBy(y);self.motion.setY(y);self.motion.bounceOnEdge();self.motion.setRotationStyle(style);self.motion.getX();self.motion.getY();self.motion.getDirection();self.motion.getAngle();self.animation.rotateTo(time, theta, easing, name);self.animation.rotateBy(time, theta, easing, name);self.animation.moveTo(time, x, y, easing, name);self.animation.moveBy(time, x, y, easing, name);self.animation.scaleTo(time, scale, easing, name);self.animation.scaleBy(time, scale, easing, name);self.animation.bezierBy(time, x, y, cx1, cy1, cx2, cy2, easing, name);self.animation.bezierTo(time, x, y, cx1, cy1, cx2, cy2, easing, name);self.animation.effectBy(time, effect, value, easing, name);self.animation.effectTo(time, effect, value, easing, name);self.animation.changeCostumes(time, fps, prefix, easing, name);self.animation.waitFor(name);self.animation.stop(name);self.animation.isRunning(name);self.looks.setCostume(name);self.looks.nextCostume();self.looks.firstCostumeInGroup(prefix);self.looks.nextCostumeInGroup(prefix);self.looks.getCostumeIndex();self.looks.getCostume();self.looks.setBackground(scene);self.looks.setBackgroundAndWait(scene);self.looks.nextBackground();self.looks.firstBackgroundInGroup(prefix);self.looks.nextBackgroundInGroup(prefix);self.looks.getBackgroundIndex();self.looks.getBackground();self.looks.setLabel(text);self.looks.setBubbleStyle(style);self.looks.setBubbleDock(dock);self.looks.say(text);self.looks.sayFor(text, seconds);self.looks.think(text);self.looks.thinkFor(text, seconds);self.looks.changeEffect(effect, n);self.looks.setEffect(effect, n);self.looks.resetEffects();self.looks.changeSize(scale);self.looks.setSize();self.looks.getSize();self.looks.show();self.looks.hide();self.looks.isHidden();self.looks.setLayer(n);self.looks.getLayer();self.looks.bringToFront();self.looks.sendToBack();self.looks.moveBackward(n);self.looks.bringForward(n);self.looks.dialog(text);self.looks.prompt(text, button1, button2);self.sensing.isTouching(actorName);self.sensing.isTouchingClone(actorName);self.sensing.isTouchingColor(color);self.sensing.isColorTouchingColor(color1, color2);self.sensing.ask(text);self.sensing.askChoices(text, choice1, choice2);self.sensing.getAnswer();self.sensing.getMouseX();self.sensing.getMouseY();self.sensing.isMouseDown();self.sensing.isKeyPressed(keyName);self.sensing.getDistance(actorName);self.sensing.resetTimer();self.sensing.getTimer();self.sensing.getSpriteProperty(prop, actorName);self.sensing.getActorName();self.sensing.getActorNameAtIndex(n);self.sensing.getActorCount();self.sensing.getTouchedActorName();self.sensing.getDateTime(which);self.sensing.getScreenLeft();self.sensing.getScreenRight();self.sensing.getScreenTop();self.sensing.getScreenBottom();self.sensing.getScreenProperty(which);self.sensing.getUserId();self.sensing.getUserFirstName();self.sound.play(name);self.sound.playUntilDone(name);self.sound.stopAll();self.sound.playDrum(drumIdx, beats);self.sound.playRest(beats);self.sound.playNote(noteIdx);self.sound.setInstrument(instrumentIdx);self.sound.changeVolume(n);self.sound.setVolume(n);self.sound.getVolume();self.sound.changeTempo(n);self.sound.setTempo(n);self.sound.getTempo();self.canvas.clear();self.canvas.penDown();self.canvas.penUp();self.canvas.setColor(color);self.canvas.changeHue(n);self.canvas.setHue(n);self.canvas.changeShade(n);self.canvas.setShade(n);self.canvas.changePenSize(n);self.canvas.setPenSize(n);self.canvas.stamp();self.canvas.setFont(size, style, fontName);self.canvas.setFontColor(color);self.canvas.drawText(text);self.canvas.redraw();self.canvas.setFillColor(color);self.canvas.setNoFill();self.canvas.drawBezier(x1, y1, x2, y2, cx1, cy1, cx2, cy2);self.canvas.drawPoint(x, y);self.canvas.drawLine(x1, y1, x2, y2);self.canvas.drawRect(x, y, width, height);self.canvas.drawTriangle(x1, y1, x2, y2, x3, y3);self.canvas.drawEllipse(x, y, width, height);self.canvas.drawTextAt(text, x, y);self.canvas.drawLocalRect(width, height);self.canvas.drawLocalEllipse(width, height);self.physics.getProperty(name, actor);self.physics.apply(name, actor, value);self.physics.applyXY(name, actor, x, y);self.physics.applyActive(actor, boolean);self.physics.applyStatic(actor, boolean);self.physics.applyGeometry(actor, geometry);self.physics.isCollidedWith(actorName);self.physics.getCollidedName();self.physics.applyForce(n);self.physics.applyImpulse(n);self.physics.applyForceAtAngle(n, degrees);self.physics.applyImpulseAtAngle(n, degrees);self.physics.applyForceAtXY(x, y);self.physics.applyImpulseAtXY(x, y);self.physics.applyTorque(n);self.physics.setActive(b);self.physics.setStatic(b);self.physics.setGeometry(geometry);self.physics.setDensity(n);self.physics.setFriction(n);self.physics.setRestitution(n);self.physics.setAngularDamping(n);self.physics.setAngularVelocity(n);self.physics.setLinearDamping(n);self.physics.setLinearVelocity(x, y);self.physics.getDensity();self.physics.getFriction();self.physics.getRestitution();self.physics.getAngularVelocity();self.physics.getInertia();self.physics.isAwake();self.physics.getVelocityX();self.physics.getVelocityY();self.physics.getAngularDamping();self.physics.getLinearDamping();self.physics.setGravity(x, y);self.physics.getGravityX();self.physics.getGravityY();self.physics.start();self.physics.stop();self.net.saveValue(name,value,access);self.net.loadValue(name);self.net.fetch(url);self.net.parse(json);self.net.getResult()".split(";");
g_keywords = "null true false break case catch const default finally for instanceof new var continue function return void delete if this self do while else in switch throw try typeof with debugger".split(" ");
g_properties = "background #;scene #;scene name;x gravity;y gravity;x position;y position;direction;costume #;costume name;say;visible;size;volume;density;friction;restitution;angular velocity;angular damping;linear damping;x linear velocity;y linear velocity;inertia;awake;width;height;effect/nnn".split(";");
