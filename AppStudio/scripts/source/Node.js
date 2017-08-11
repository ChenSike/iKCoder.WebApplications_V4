function Node() {
    this.children = [];
    if (arguments.length >= 1) {
        this.name = arguments[0];
        for (var b = 1; b < arguments.length; b++) this.children.push(arguments[b])
    } else this.name = ""
}
Node.prototype.setChild = function (b, c) {
    if (this.children.length < b)
        for (var d = 0; d <= b; d++) this.children.push(null);
    this.children[b] = c
};
Node.prototype.addChild = function (b) {
    this.children.push(b)
};
Node.prototype.prependChild = function (b) {
    this.children.unshift(b)
};
Node.prototype.getNumChildren = function () {
    return this.children.length
};
Node.prototype.getChild = function (b) {
    return b >= 0 && b < this.children.length ? this.children[b] : null
};
Node.prototype.generate = function (b) {
    var c = this["generate_" + this.name];
    if (c) return c.apply(this, [b]);
    throw new Exception("unknown block: " + this.name);
};
Node.prototype.generate_linecomment = function () {
    var b = new Block({
        cat: "comment",
        func: "blockInlineComment",
        label: "//{string:comment}"
    });
    b.label.setValue(0, this.getChild(0));
    return b
};
Node.prototype.generate_number = function () {
    return parseFloat(this.getChild(0))
};
Node.prototype.generate_string = function () {
    return this.getChild(0)
};
Node.prototype.generate_true = function () {
    return true
};
Node.prototype.generate_false = function () {
    return false
};
Node.prototype.generate_null = function () {
    return null
};
Node.prototype.generate_identifier = function (b) {
    if (b && b.lvalue) b = this.getChild(0);
    else {
        b = BlockGen.peekFunction();
        b = b.locals.indexOf(this.getChild(0)) >= 0 ? new Label({
            cat: "localvar",
            func: "valueScriptVar",
            name: this.getChild(0)
        }) : b.params.indexOf(this.getChild(0)) >= 0 ? new Label({
            cat: "functions",
            func: "valueParam",
            name: this.getChild(0)
        }) : new Label({
            cat: "var",
            func: "valueVar",
            name: this.getChild(0)
        })
    }
    return b
};
Node.prototype.generate_Block = function () {
    for (var b, c = 0; c < this.children.length; c++) b ? b.append(this.getChild(c).generate()) : b = this.getChild(c).generate();
    return b
};
Node.prototype.generate_Function = function () {
    var b = this.getChild(0),
        c = this.getChild(1),
        d = this.getChild(2),
        e = {
            locals: [],
            params: []
        };
    BlockGen.pushFunction(e);
    var f = null;
    if (b) {
        var g = b;
        if (c)
            for (var h = 0; h < c.children.length; h++) {
                g = g + (" {string:" + c.children[h] + "}");
                e.params.indexOf(c.children[h]) < 0 && e.params.push(c.children[h])
            }
        f = new Block({
            cat: "functions",
            func: "registerFunction",
            hasFlap: false,
            name: b,
            label: g
        });
        if (c)
            for (h = 0; h < c.children.length; h++) {
                g = new Label({
                    cat: "functions",
                    func: "valueParam",
                    name: c.children[h]
                });
                f.label.setValue(h, g)
            }
        d && f.add(d.generate())
    }
    c = BlockGen.popFunction().locals;
    if (c.length > 0) {
        g = "script variables";
        for (h = 0; h < c.length; h++) g = g + (" {scriptvar:" + c[h] + "}");
        h = new Block({
            cat: "localvar",
            label: g + "{varargs:valueScriptVar}",
            func: "blockControlScriptVar"
        });
        h.next = f.next;
        f.next = h;
        h.parent = f;
        h.next.parent = h
    }
    return f
};
Node.prototype.generate_Return = function () {
    var b = makeBlockByName("blockControlReturn");
    this.children.length > 0 && b.label.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Break = function () {
    return makeBlockByName("blockControlBreak")
};
Node.prototype.generate_Continue = function () {
    return makeBlockByName("blockControlContinue")
};
Node.prototype.generate_DoWhile = function () {
    var b, c = this.getChild(0).generate({
        rvalue: true
    });
    if (c === true) {
        b = makeBlockByName("blockControlForever");
        this.getChild(1) && b.appendToContainer(0, this.getChild(1).generate())
    } else if (c === false) {
        b = makeBlockByName("blockControlForever");
        this.getChild(1) && b.appendToContainer(0, this.getChild(1).generate());
        b.appendToContainer(0, makeBlockByName("blockControlBreak"))
    } else {
        b = makeBlockByName("blockControlForever");
        var d = makeBlockByName("blockControlIf"),
            e = makeBlockByName("valueOpNot");
        e.setValue(0, c);
        d.label.setValue(0, e);
        d.appendToContainer(0, makeBlockByName("blockControlBreak"));
        this.getChild(1) && b.appendToContainer(0, this.getChild(1).generate());
        b.appendToContainer(0, d)
    }
    return b
};
Node.prototype.generate_While = function () {
    var b, c = this.getChild(0).generate({
        rvalue: true
    });
    if (c === true) b = makeBlockByName("blockControlForever");
    else {
        b = makeBlockByName("blockControlWhile");
        b.label.setValue(0, c)
    }
    this.getChild(1) && b.appendToContainer(0, this.getChild(1).generate());
    return b
};
Node.prototype.generate_For = function () {
    var b, c = this.getChild(0);
    if (c) b = c = c.generate();
    var d = this.getChild(1);
    d && (d = d.generate({
        rvalue: true
    }));
    (c = this.getChild(2)) && (c = c.generate({
        lvalue: true
    }));
    var e;
    if (d) {
        e = makeBlockByName("blockControlWhile");
        d && e.label.setValue(0, d)
    } else e = makeBlockByName("blockControlForever");
    (d = this.getChild(3)) && e.appendToContainer(0, d.generate());
    c && e.appendToContainer(0, c);
    if (b) {
        b.next = e;
        e.parent = b
    } else b = e;
    return b
};
Node.prototype.generate_ForScoped = function () {
    var b, c, d = this.getChild(0);
    if (d)
        for (var e = 0; e < d.length; e++) {
            var f = d[e].generate();
            if (b) {
                c.next = f;
                f.parent = c
            } else b = f;
            for (c = f; c && c.next;) c = c.next
        } (f = this.getChild(1)) && (f = f.generate({
            rvalue: true
        }));
    (d = this.getChild(2)) && (d = d.generate({
        lvalue: true
    }));
    if (f) {
        e = makeBlockByName("blockControlWhile");
        f && e.label.setValue(0, f)
    } else e = makeBlockByName("blockControlForever");
    (f = this.getChild(3)) && e.appendToContainer(0, f.generate());
    d && e.appendToContainer(0, d);
    if (c) {
        c.next =
            e;
        e.parent = c
    } else b = e;
    return b
};
Node.prototype.generate_If = function () {
    var b = makeBlockByName("blockControlIf");
    b.label.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    this.getChild(1) && b.appendToContainer(0, this.getChild(1).generate());
    return b
};
Node.prototype.generate_IfElse = function () {
    var b = makeBlockByName("blockControlIfElse");
    b.label.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    this.getChild(1) && b.appendToContainer(0, this.getChild(1).generate());
    this.getChild(2) && b.appendToContainer(1, this.getChild(2).generate());
    return b
};
Node.prototype.generate_VarDeclaration = function () {
    var b = BlockGen.peekFunction();
    b.locals.indexOf(this.getChild(0)) < 0 && b.locals.push(this.getChild(0));
    return null
};
Node.prototype.generate_VarDeclarationAssignment = function () {
    var b = BlockGen.peekFunction();
    b.locals.indexOf(this.getChild(0)) < 0 && b.locals.push(this.getChild(0));
    if (b = this.getChild(1)) {
        var c = makeBlockByName("blockVarSet");
        c.label.setValue(0, this.getChild(0));
        c.label.setValue(1, b.generate({
            rvalue: true
        }));
        return c
    }
    return null
};
Node.prototype.generate_Json = function () {
    var b;
    if (this.children.length > 0) {
        var c = this.getPropertyValue(this);
        b = makeBlockByName("valueNetworkParse");
        b.setValue(0, JSON.stringify(c))
    } else b = makeBlockByName("valueListNew");
    return b
};
Node.prototype.generate_ArrayLiteral = function () {
    var b;
    if (this.children.length > 0) {
        var c = this.getPropertyValue(this);
        b = makeBlockByName("valueNetworkParse");
        b.setValue(0, JSON.stringify(c))
    } else b = makeBlockByName("valueListNew");
    return b
};
Node.prototype.generateMath = function (b, c) {
    var d;
    switch (b) {
        case "abs":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "abs");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "acos":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "acosrad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "asin":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "asinrad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "atan":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "atanrad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "atan2":
            d = makeBlockByName("valueOpMath2");
            d.setValue(0, "atan2rad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(2, c.getChild(1).generate({
                rvalue: true
            }));
            break;
        case "ceil":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "ceiling");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "cos":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "cosrad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "exp":
            d =
                makeBlockByName("valueOpMath");
            d.setValue(0, "e^");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "floor":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "floor");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "log":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "ln");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "max":
            d = prev = makeBlockByName("valueOpMath2");
            d.setValue(0, "max");
            prev.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            for (var e = 1; e < c.children.length -
                1; e++) {
                var f = makeBlockByName("valueOpMath2");
                f.setValue(0, "max");
                f.setValue(1, c.getChild(e).generate({
                    rvalue: true
                }));
                prev.setValue(2, f);
                prev = f
            }
            prev.setValue(2, c.getChild(c.children.length - 1).generate({
                rvalue: true
            }));
            break;
        case "min":
            d = prev = makeBlockByName("valueOpMath2");
            d.setValue(0, "min");
            prev.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            for (e = 1; e < c.children.length - 1; e++) {
                f = makeBlockByName("valueOpMath2");
                f.setValue(0, "min");
                f.setValue(1, c.getChild(e).generate({
                    rvalue: true
                }));
                prev.setValue(2,
                    f);
                prev = f
            }
            prev.setValue(2, c.getChild(c.children.length - 1).generate({
                rvalue: true
            }));
            break;
        case "pow":
            d = makeBlockByName("valueOpMath2");
            d.setValue(0, "pow");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(2, c.getChild(1).generate({
                rvalue: true
            }));
            break;
        case "random":
            d = makeBlockByName("valueOpRandom");
            d.setValue(0, 0);
            d.setValue(1, 1);
            break;
        case "randomRange":
            d = makeBlockByName("valueOpRandom");
            d.setValue(0, c.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, c.getChild(1).generate({
                rvalue: true
            }));
            break;
        case "round":
            d = makeBlockByName("valueOpRound");
            d.setValue(0, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "sin":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "sinrad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "sqrt":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "sqrt");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "tan":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "tanrad");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }));
            break;
        case "sign":
            d = makeBlockByName("valueOpMath");
            d.setValue(0, "sign");
            d.setValue(1, c.getChild(0).generate({
                rvalue: true
            }))
    }
    return d
};
Node.prototype.generateGlobalFunc = function (b, c, d, e) {
    var f = null;
    switch (b) {
        case "Math":
            if (!e || !e.rvalue) throw new Exception("Math must be used as an r-value");
            f = this.generateMath(c, d);
            break;
        case "Runtime":
            if (e && e.rvalue) throw new Exception("Runtime must be l-value");
            if (c == "defineActor") {
                b = [];
                if (d.getNumChildren() > 0 && d.getChild(0).name != "Json") throw new Exception("Runtime.defineActor needs a JSON");
                BlockGen.startSprite();
                this.setSpriteState(d.getChild(0));
                if (d = d.getChild(1).getChild(2))
                    if (d.name == "Block")
                        for (var g =
                                0; g < d.getNumChildren() ; g++) (f = d.getChild(g).generate()) && b.push(f);
                    else (f = d.generate()) && b.push(f);
                BlockGen.getSprite().scripts = b;
                BlockGen.endSprite();
                f = null
            } else if (c == "defineScene") {
                b = [];
                if (d.getNumChildren() > 0 && d.getChild(0).name != "Json") throw new Exception("Runtime.defineScene needs a JSON");
                this.setSpriteState(d.getChild(0));
                if (d = d.getChild(1).getChild(2))
                    if (d.name == "Block")
                        for (g = 0; g < d.getNumChildren() ; g++) (f = d.getChild(g).generate()) && b.push(f);
                    else (f = d.generate()) && b.push(f);
                BlockGen.getBackground().scripts =
                    b;
                f = null
            } else throw new Exception("unknown function Runtime." + c);
            break;
        case "Net":
            f = this.generateNetFunc(c, d);
            break;
        default:
            f = "{string}.{string} (";
            for (g = 0; g < d.children.length; g++) f = f + "{string}";
            f = f + "{varargs})";
            if (e && e.rvalue) {
                f = new Label({
                    cat: "functions",
                    func: "valueControlCallMember",
                    label: f
                });
                f.setValue(0, b);
                f.setValue(1, c);
                for (g = 0; g < d.children.length; g++) f.setValue(g + 2, d.getChild(g).generate({
                    rvalue: true
                }))
            } else {
                f = new Block({
                    cat: "functions",
                    func: "blockControlCallMember",
                    label: f
                });
                f.label.setValue(0,
                    b);
                f.label.setValue(1, c);
                for (g = 0; g < d.children.length; g++) f.label.setValue(g + 2, d.getChild(g).generate({
                    rvalue: true
                }))
            }
    }
    return f
};
Node.prototype.generateLocalFunc = function (b, c, d, e) {
    var f = null;
    if (b) {
        f = e ? e + "." + b + "." + c : "this." + b + "." + c;
        if (g_fnMapping[f]) {
            if (f = makeBlockByName(g_fnMapping[f])) {
                c = f instanceof Label ? f : f.label;
                b = d.children.length - c.getNumSockets();
                if (b > 0)
                    for (e = 0; e < b; e++) c.addArg();
                for (e = 0; e < d.children.length; e++) c.setValue(e, d.getChild(e).generate({
                    rvalue: true
                }))
            }
        } else throw new Exception(f + " not found");
    } else {
        BlockGen.pushFunction({
            locals: [],
            params: []
        });
        f = e ? e + "." + c : "this." + c;
        switch (c) {
            case "onStart":
                if (d.getChild(0).name !=
                    "FunctionExpr") throw new Exception("this.onStart needs a function");
                f = makeBlockByName("registerFlagTrigger");
                (c = d.getChild(0).getChild(2)) && f.add(c.generate());
                break;
            case "onKeyPress":
                if (d.children.length != 2) throw new Exception("this.onKeyPress needs 2 parameters");
                if (d.getChild(0).name != "string" && d.getChild(0).name != "number") throw new Exception("this.onKeyPress needs a key name");
                if (d.getChild(1).name != "FunctionExpr") throw new Exception("this.onKeyPress needs a function");
                f = makeBlockByName("registerKeyTrigger");
                f.label.setValue(0, d.getChild(0).generate({
                    rvalue: true
                }));
                (c = d.getChild(1).getChild(2)) && f.add(c.generate());
                break;
            case "onCondition":
                if (d.children.length != 2) throw new Exception("this.onCondition needs 2 parameters");
                if (d.getChild(0).name != "FunctionExpr") throw new Exception("this.onCondition needs an expression");
                if (d.getChild(1).name != "FunctionExpr") throw new Exception("this.onCondition needs a function");
                f = makeBlockByName("registerTrigger");
                (c = d.getChild(1).getChild(2)) && f.add(c.generate());
                break;
            case "onActorClick":
                f = makeBlockByName("registerSpriteTrigger");
                (c = d.getChild(0).getChild(2)) && f.add(c.generate());
                break;
            case "onSceneChange":
                if (d.children.length != 2) throw new Exception("this.onSceneChange needs 2 parameters");
                if (d.getChild(0).name != "string" && d.getChild(0).name != "number") throw new Exception("this.onSceneChange needs a scene name");
                if (d.getChild(1).name != "FunctionExpr") throw new Exception("this.onSceneChange needs a function");
                f = makeBlockByName("registerBackgroundChange");
                f.label.setValue(0,
                    d.getChild(0).generate({
                        rvalue: true
                    }));
                (c = d.getChild(1).getChild(2)) && f.add(c.generate());
                break;
            case "onMessageReceived":
                if (d.children.length != 2) throw new Exception("this.onMessageReceived needs 2 parameters");
                if (d.getChild(0).name != "string" && d.getChild(0).name != "number") throw new Exception("this.onMessageReceived needs a message");
                if (d.getChild(1).name != "FunctionExpr") throw new Exception("this.onMessageReceived needs a function");
                f = makeBlockByName("registerBroadcastTrigger");
                f.label.setValue(0, d.getChild(0).generate({
                    rvalue: true
                }));
                (c = d.getChild(1).getChild(2)) && f.add(c.generate());
                break;
            case "onClone":
                if (d.children.length != 1) throw new Exception("this.onClone needs 1 parameter");
                if (d.getChild(0).name != "FunctionExpr") throw new Exception("this.onClone needs a function");
                f = makeBlockByName("registerCloned");
                (c = d.getChild(0).getChild(2)) && f.add(c.generate());
                break;
            case "onDraw":
                if (d.children.length != 1) throw new Exception("this.onDraw needs 1 parameter");
                if (d.getChild(0).name != "FunctionExpr") throw new Exception("this.onDraw needs a function");
                f = makeBlockByName("registerDraw");
                (c = d.getChild(0).getChild(2)) && f.add(d.getChild(0).getChild(2).generate());
                break;
            case "onCollision":
                if (d.children.length != 1) throw new Exception("this.onCollision needs 1 parameter");
                if (d.getChild(0).name != "FunctionExpr") throw new Exception("this.onCollision needs a function");
                f = makeBlockByName("registerSpriteCollision");
                (c = d.getChild(0).getChild(2)) && f.add(c.generate());
                break;
            case "onAnimationDone":
                if (d.children.length != 2) throw new Exception("this.onAnimationDone needs 2 parameters");
                if (d.getChild(0).name != "string" && d.getChild(0).name != "number") throw new Exception("this.onAnimationDone needs an animation name");
                if (d.getChild(1).name != "FunctionExpr") throw new Exception("this.onAnimationDone needs a function");
                f = makeBlockByName("registerAnimationDone");
                f.label.setValue(0, d.getChild(0).generate({
                    rvalue: true
                }));
                (c = d.getChild(1).getChild(2)) && f.add(c.generate());
                break;
            case "requestBlock":
                if (d.children.length != 1) throw new Exception("this.requestBlock needs 1 parameter");
                if (d.getChild(0).name !=
                    "FunctionExpr") throw new Exception("this.requestBlock needs a function");
                f = makeBlockByName("blockControlBlock");
                (c = d.getChild(0).getChild(2)) && f.appendToContainer(0, c.generate());
                break;
            case "onPlayerTravelled":
            case "onBlockPlaced":
            case "onBlockBroken":
            case "onMobKilled":
            case "onEntitySpawned":
            case "onItemAcquired":
            case "onItemDropped":
                e = {
                    onPlayerTravelled: "registerMCPEEventPlayer",
                    onBlockPlaced: "registerMCPEEventBlockPlaced",
                    onBlockBroken: "registerMCPEEventBlockBroken",
                    onMobKilled: "registerMCPEEventMobKilled",
                    onEntitySpawned: "registerMCPEEventEntitySpawned",
                    onItemAcquired: "registerMCPEEventItemAcquired",
                    onItemDropped: "registerMCPEEventItemDropped"
                };
                if (d.children.length != 2) throw new Exception(f + " needs 2 parameters");
                if (d.getChild(0).name != "string" && d.getChild(0).name != "number") throw new Exception(f + " needs a message");
                if (d.getChild(1).name != "FunctionExpr") throw new Exception(f + " needs a function");
                f = makeBlockByName(e[c]);
                f.label.setValue(0, d.getChild(0).generate({
                    rvalue: true
                }));
                (c = d.getChild(1).getChild(2)) &&
                f.add(c.generate());
                break;
            case "onChat":
            case "onTell":
            case "onPlayerDied":
            case "onPlayerTeleported":
            case "onPlayerBounced":
            case "onAnyBlockPlaced":
            case "onAnyBlockBroken":
            case "onAnyMobKilled":
            case "onAnyEntitySpawned":
            case "onAnyItemAcquired":
            case "onAnyItemDropped":
                e = {
                    onChat: "registerMCPEEventChat",
                    onTell: "registerMCPEEventTell",
                    onPlayerDied: "registerMCPEEventDied",
                    onPlayerTeleported: "registerMCPEEventTeleported",
                    onPlayerBounced: "registerMCPEEventBounced",
                    onAnyBlockPlaced: "registerMCPEEventBlockPlacedAny",
                    onAnyBlockBroken: "registerMCPEEventBlockBrokenAny",
                    onAnyMobKilled: "registerMCPEEventMobKilledAny",
                    onAnyEntitySpawned: "registerMCPEEventEntitySpawnedAny",
                    onAnyItemAcquired: "registerMCPEEventItemAcquiredAny",
                    onAnyItemDropped: "registerMCPEEventItemDroppedAny"
                };
                if (d.children.length != 1) throw new Exception(f + " needs 1 parameter");
                if (d.getChild(0).name != "FunctionExpr") throw new Exception(f + " needs a function");
                f = makeBlockByName(e[c]);
                (c = d.getChild(0).getChild(2)) && f.add(c.generate());
                break;
            default:
                f = e ? e +
                    "." + c : "this." + c;
                if (g_fnMapping[f]) {
                    f = makeBlockByName(g_fnMapping[f]);
                    if (f instanceof Label)
                        for (e = 0; e < d.children.length; e++) f.setValue(e, d.getChild(e).generate({
                            rvalue: true
                        }));
                    else
                        for (e = 0; e < d.children.length; e++) f.label.setValue(e, d.getChild(e).generate({
                            rvalue: true
                        }))
                } else throw new Exception(f + " not found");
        }
        d = BlockGen.popFunction().locals;
        if (f && d.length > 0) {
            c = "script variables";
            for (e = 0; e < d.length; e++) c = c + (" {scriptvar:" + d[e] + "}");
            d = new Block({
                cat: "localvar",
                label: c + "{varargs:valueScriptVar}",
                func: "blockControlScriptVar"
            });
            d.next = f.next;
            f.next = d;
            d.parent = f;
            d.next.parent = d
        }
    }
    return f
};
Node.prototype.generate_FunctionCall = function (b) {
    var c = this.getChild(0),
        d = this.getChild(1),
        e, f, g;
    if (c.name == "Property")
        if (c.getChild(0).name == "Property")
            if (c.getChild(0).getChild(0).name == "this" && c.getChild(0).getChild(1).name == "identifier") {
                g = c.getChild(0).getChild(1).getChild(0);
                e = c.getChild(1).getChild(0);
                f = this.generateLocalFunc(g, e, d)
            } else if (c.getChild(0).getChild(0).name == "identifier" && c.getChild(0).getChild(0).getChild(0) == "mc" && c.getChild(0).getChild(1).name == "identifier") {
                g = c.getChild(0).getChild(1).getChild(0);
                e = c.getChild(1).getChild(0);
                f = this.generateLocalFunc(g, e, d, "mc")
            } else throw new Exception("must be this.namespace.function");
        else if (c.getChild(0).name == "this" && c.getChild(1).name == "identifier") {
            e = c.getChild(1).getChild(0);
            f = this.generateLocalFunc(null, e, d)
        } else if (c.getChild(0).name == "identifier" && c.getChild(0).getChild(0) == "mc" && c.getChild(1).name == "identifier") {
            e = c.getChild(1).getChild(0);
            f = this.generateLocalFunc(null, e, d, "mc")
        } else if (c.getChild(0).name == "identifier" && c.getChild(1).name == "identifier") {
            g =
                c.getChild(0).getChild(0);
            e = c.getChild(1).getChild(0);
            if (e == "push") {
                f = makeBlockByName("blockListAdd");
                f.label.setValue(0, d.getChild(0).generate({
                    rvalue: true
                }));
                c = 1;
                for (b = d.getNumChildren() ; c < b; c++) {
                    f.label.addArg();
                    f.label.setValue(c, d.getChild(c).generate({
                        rvalue: true
                    }))
                }
                f.label.setValue(d.getNumChildren(), g)
            } else if (e == "contains") {
                f = makeBlockByName("valueListContains");
                f.setValue(0, g);
                f.setValue(1, d.getChild(0).generate({
                    rvalue: true
                }))
            } else if (e == "splice")
                if (d.getChild(1).getChild(0) == "0") {
                    f = makeBlockByName("blockListInsert");
                    f.label.setValue(0, d.getChild(2).generate({
                        rvalue: true
                    }));
                    b = d.getChild(0);
                    if (b.name == "number") b = parseInt(b.getChild(0)) + 1;
                    else if (b.name == "Subtract" && (b.getChild(0).name == "number" && b.getChild(0).getChild(0) == "1" || b.getChild(1).name == "number" && b.getChild(1).getChild(0) == "1")) b = b.getChild(0).name == "number" ? b.getChild(1).generate({
                        rvalue: true
                    }) : b.getChild(0).generate({
                        rvalue: true
                    });
                    else {
                        c = makeBlockByName("valueOpBinary");
                        c.setValue(0, b.generate({
                            rvalue: true
                        }));
                        c.setValue(1, "+");
                        c.setValue(2, 1);
                        b = c
                    }
                    f.label.setValue(1,
                        b);
                    f.label.setValue(2, g)
                } else {
                    if (d.getChild(1).getChild(0) == "1")
                        if (d.getChild(2) == null) {
                            f = makeBlockByName("blockListDel");
                            b = d.getChild(0);
                            if (b.name == "number") b = parseInt(b.getChild(0)) + 1;
                            else if (b.name == "Subtract" && (b.getChild(0).name == "number" && b.getChild(0).getChild(0) == "1" || b.getChild(1).name == "number" && b.getChild(1).getChild(0) == "1")) b = b.getChild(0).name == "number" ? b.getChild(1).generate({
                                rvalue: true
                            }) : b.getChild(0).generate({
                                rvalue: true
                            });
                            else {
                                c = makeBlockByName("valueOpBinary");
                                c.setValue(0, b.generate({
                                    rvalue: true
                                }));
                                c.setValue(1, "+");
                                c.setValue(2, 1);
                                b = c
                            }
                            f.label.setValue(0, b);
                            f.label.setValue(1, g)
                        } else {
                            f = makeBlockByName("blockListReplace");
                            b = d.getChild(0);
                            if (b.name == "number") b = parseInt(b.getChild(0)) + 1;
                            else if (b.name == "Subtract" && (b.getChild(0).name == "number" && b.getChild(0).getChild(0) == "1" || b.getChild(1).name == "number" && b.getChild(1).getChild(0) == "1")) b = b.getChild(0).name == "number" ? b.getChild(1).generate({
                                rvalue: true
                            }) : b.getChild(0).generate({
                                rvalue: true
                            });
                            else {
                                c = makeBlockByName("valueOpBinary");
                                c.setValue(0,
                                    b.generate({
                                        rvalue: true
                                    }));
                                c.setValue(1, "+");
                                c.setValue(2, 1);
                                b = c
                            }
                            f.label.setValue(0, b);
                            f.label.setValue(1, g);
                            f.label.setValue(2, d.getChild(2).generate({
                                rvalue: true
                            }))
                        }
                }
            else f = this.generateGlobalFunc(g, e, d, b)
        } else throw new Exception("must be namespace.function or this.namespace.function");
    else if (c.name == "identifier") {
        e = c.getChild(0);
        if (e == "parseInt") {
            f = makeBlockByName("valueOpMath");
            f.setValue(0, "int");
            f.setValue(1, d.getChild(0).generate({
                rvalue: true
            }))
        } else if (f = makeBlockByName(e)) {
            g = f instanceof
            Label ? f : f.label;
            var h = d.children.length - g.getNumSockets();
            if (h > 0)
                for (c = 0; c < h; c++) g.addArg();
            for (c = 0; c < d.children.length; c++) g.setValue(c, d.getChild(c).generate({
                rvalue: true
            }))
        }
        if (!f) {
            g = e;
            for (c = 0; c < d.children.length; c++) g = g + " {string}";
            if (b && b.rvalue) {
                f = new Label({
                    cat: "functions",
                    func: "valueControlCall",
                    name: e,
                    label: g
                });
                for (c = 0; c < d.children.length; c++) f.setValue(c, d.getChild(c).generate({
                    rvalue: true
                }))
            } else {
                f = new Block({
                    cat: "functions",
                    func: "blockControlCall",
                    name: e,
                    label: g
                });
                for (c = 0; c < d.children.length; c++) f.label.setValue(c,
                    d.getChild(c).generate({
                        rvalue: true
                    }))
            }
        }
    } else throw new Exception("unknown function");
    return f
};
Node.prototype.setSpriteState = function (b) {
    b = this.getPropertyValue(b);
    if (b.angle !== void 0) b.angle = (360 - b.angle) % 360;
    BlockGen.getSprite().state = b
};
Node.prototype.getPropertyValue = function (b) {
    if (b.name == "number") return parseFloat(b.getChild(0));
    if (b.name == "false") return false;
    if (b.name == "true") return true;
    if (b.name != "null") {
        if (b.name == "string" || b.name == "identifier") return b.getChild(0);
        if (b.name == "Json") {
            for (var c = {}, d = 0; d < b.children.length; d++) {
                var e = b.children[d];
                if (e.name == "JsonProperty") {
                    var f = e.getChild(0),
                        e = this.getPropertyValue(e.getChild(1));
                    c[f] = e
                }
            }
            return c
        }
        if (b.name == "ArrayLiteral") {
            c = [];
            for (d = 0; d < b.children.length; d++) c.push(this.getPropertyValue(b.children[d]));
            return c
        }
    }
    return null
};
Node.prototype.generate_PostIncrement = function () {
    var b, c = this.getChild(0);
    if (c.name == "identifier") {
        b = makeBlockByName("blockVarChangeBy");
        b.label.setValue(0, c.generate({
            lvalue: true
        }));
        b.label.setValue(1, 1)
    } else if (c.name == "Property" && c.getChild(0).name == "this") {
        b = makeBlockByName("blockVarChangeBy");
        b.label.setValue(0, c.getChild(1).generate({
            lvalue: true
        }));
        b.label.setValue(1, 1)
    } else if (c.name == "ArrayProperty") {
        b = makeBlockByName("blockObjSet");
        b.label.setValue(0, c.getChild(0).generate({
            rvalue: true
        }));
        b.label.setValue(1,
            c.getChild(1).generate({
                rvalue: true
            }));
        var d = makeBlockByName("valueOpBinary");
        d.setValue(0, c.generate({
            rvalue: true
        }));
        d.setValue(1, "+");
        d.setValue(2, 1);
        b.label.setValue(setIdx, d)
    }
    return b
};
Node.prototype.generate_PostDecrement = function () {
    var b, c = this.getChild(0);
    if (c.name == "identifier") {
        b = makeBlockByName("blockVarChangeBy");
        b.label.setValue(0, c.generate({
            lvalue: true
        }));
        b.label.setValue(1, -1)
    } else if (c.name == "Property" && c.getChild(0).name == "this") {
        b = makeBlockByName("blockVarChangeBy");
        b.label.setValue(0, c.getChild(1).generate({
            lvalue: true
        }));
        b.label.setValue(1, -1)
    } else if (c.name == "ArrayProperty") {
        b = makeBlockByName("blockObjSet");
        b.label.setValue(0, c.getChild(0).generate({
            rvalue: true
        }));
        b.label.setValue(1, c.getChild(1).generate({
            rvalue: true
        }));
        var d = makeBlockByName("valueOpBinary");
        d.setValue(0, c.generate({
            rvalue: true
        }));
        d.setValue(1, "-");
        d.setValue(2, 1);
        b.label.setValue(setIdx, d)
    }
    return b
};
Node.prototype.generate_PreIncrement = function () {
    return this.generate_PostIncrement()
};
Node.prototype.generate_PreDecrement = function () {
    return this.generate_PostDecrement()
};
Node.prototype.generate_Negative = function () {
    var b = makeBlockByName("valueOpMultiply");
    b.setValue(0, -1);
    b.setValue(1, this.getChild(0).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_BitwiseNot = function () {
    var b = makeBlockByName("valueOpBitNot");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_LogicalNot = function () {
    var b = makeBlockByName("valueOpNot");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Multiply = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "*");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Divide = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "/");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Remainder = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "%");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Add = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "+");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Subtract = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "-");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_ShiftLeft = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "<<");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_ShiftRight = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, ">>");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_UnsignedShiftRight = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, ">>>");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_LessThan = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "<");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_GreaterThan = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, ">");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_LessThanOrEqual = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "<=");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_GreaterThanOrEqual = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, ">=");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Equal = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "=");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_NotEqual = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "!=");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_StrictEqual = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "=");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_StrictNotEqual = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "!=");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_BitwiseAnd = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "&");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_BitwiseXor = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "xor");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_BitwiseOr = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "|");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_LogicalAnd = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "and");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_LogicalOr = function () {
    var b = makeBlockByName("valueOpBinary");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, "or");
    b.setValue(2, this.getChild(1).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Conditional = function () {
    var b = makeBlockByName("valueControlIfElse");
    b.setValue(0, this.getChild(0).generate({
        rvalue: true
    }));
    b.setValue(1, this.getChild(1).generate({
        rvalue: true
    }));
    b.setValue(2, this.getChild(2).generate({
        rvalue: true
    }));
    return b
};
Node.prototype.generate_Assignment = function () {
    var b, c, d = this.getChild(0),
        e = this.getChild(1);
    if (d.name == "identifier") {
        b = makeBlockByName("blockVarSet");
        b.label.setValue(0, d.generate({
            lvalue: true
        }));
        c = 1;
        if (e == "+=") {
            b = makeBlockByName("blockVarChangeBy");
            b.label.setValue(0, d.generate({
                lvalue: true
            }));
            c = this.getChild(2);
            c.name == "number" ? b.label.setValue(1, c.getChild(0)) : b.label.setValue(1, c.generate({
                rvalue: true
            }));
            return b
        }
        if (e == "-=") {
            b = makeBlockByName("blockVarChangeBy");
            b.label.setValue(0, d.generate({
                lvalue: true
            }));
            c = this.getChild(2);
            if (c.name == "number") b.label.setValue(1, -c.getChild(0));
            else {
                d = makeBlockByName("valueOpMultiply");
                d.setValue(0, -1);
                d.setValue(1, c.generate({
                    rvalue: true
                }));
                b.label.setValue(1, d)
            }
            return b
        }
    } else if (d.name == "ArrayProperty") {
        b = makeBlockByName("blockObjSet");
        b.label.setValue(0, d.getChild(0).generate({
            rvalue: true
        }));
        b.label.setValue(1, d.getChild(1).generate({
            rvalue: true
        }));
        c = 2
    } else if (d.name == "Property") {
        if (d.getChild(0).name == "identifier" && d.getChild(1).name == "identifier" && d.getChild(1).getChild(0) ==
            "length" && this.getChild(2).getChild(0) == "0") {
            b = makeBlockByName("blockListDel");
            b.label.setValue(0, "all");
            b.label.setValue(1, d.getChild(0).getChild(0));
            return b
        }
        if (d.getChild(0).name == "this") {
            if (BlockGen.stackSize() == 1 && e == "=") {
                b = d.getChild(1).generate({
                    lvalue: true
                });
                c = this.getPropertyValue(this.getChild(2));
                BlockGen.getSprite().variables[b] = c;
                return null
            }
            b = makeBlockByName("blockVarSet");
            b.label.setValue(0, d.getChild(1).generate({
                lvalue: true
            }));
            c = 1
        } else {
            b = makeBlockByName("blockObjSet");
            b.label.setValue(0,
                d.getChild(0).generate({
                    rvalue: true
                }));
            b.label.setValue(1, d.getChild(1).generate({
                lvalue: true
            }));
            c = 2
        }
    } else return null;
    switch (e) {
        case "=":
            b.label.setValue(c, this.getChild(2).generate({
                rvalue: true
            }));
            break;
        case "+=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "+");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "-=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "-");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "*=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "*");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "/=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "/");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "<<=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "<<");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case ">>=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, ">>");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case ">>>=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, ">>>");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "&=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "&");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "^=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "xor");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "|=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "|");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d);
            break;
        case "%=":
            d = makeBlockByName("valueOpBinary");
            d.setValue(0, this.getChild(0).generate({
                rvalue: true
            }));
            d.setValue(1, "%");
            d.setValue(2, this.getChild(2).generate({
                rvalue: true
            }));
            b.label.setValue(c, d)
    }
    return b
};
Node.prototype.generate_Property = function (b) {
    if (b && b.lvalue)
        if (this.getChild(0).name == "this") {
            b = makeBlockByName("blockVarSet");
            b.label.setValue(0, this.getChild(1).generate());
            b.label.setValue(1, this.getChild(2).generate())
        } else {
            b = makeBlockByName("blockObjSet");
            b.label.setValue(0, this.getChild(0).generate());
            b.label.setValue(1, this.getChild(1).generate());
            b.label.setValue(2, this.getChild(2).generate())
        }
    else if (this.getChild(0).name == "identifier" && this.getChild(1).name == "identifier" && this.getChild(1).getChild(0) ==
        "length") {
        b = makeBlockByName("valueListLength");
        b.setValue(0, this.getChild(0).getChild(0))
    } else if (this.getChild(0).name == "identifier" && this.getChild(0).getChild(0) == "Math" && this.getChild(1).name == "identifier") {
        var b = makeBlockByName("valueOpConstants"),
            c = "";
        switch (this.getChild(1).getChild(0)) {
            case "PI":
                c = "pi";
                break;
            case "E":
                c = "e";
                break;
            case "LN2":
                c = "ln2";
                break;
            case "LN10":
                c = "ln10";
                break;
            case "LOG2E":
                c = "log2e";
                break;
            case "LOG10E":
                c = "log10e";
                break;
            case "SQRT1_2":
                c = "sqrt1/2";
                break;
            case "SQRT2":
                c = "sqrt2"
        }
        b.setValue(0,
            c)
    } else if (this.getChild(0).name == "this") b = this.getChild(1).generate({
        rvalue: true
    });
    else {
        b = makeBlockByName("valueObjGet");
        b.setValue(0, this.getChild(0).generate({
            rvalue: true
        }));
        b.setValue(1, this.getChild(1).generate({
            lvalue: true
        }))
    }
    return b
};
Node.prototype.generate_ArrayProperty = function (b) {
    if (b && b.lvalue) {
        b = makeBlockByName("blockObjSet");
        b.label.setValue(0, this.getChild(0).generate());
        b.label.setValue(1, this.getChild(1).generate())
    } else {
        b = makeBlockByName("valueObjGet");
        b.setValue(0, this.getChild(0).generate());
        b.setValue(1, this.getChild(1).generate())
    }
    return b
};
Node.prototype.generate_InstanceOf = function () {
    console.log('"instanceof" not implemented')
};
Node.prototype.generate_In = function () {
    console.log('"in" not implemented')
};
Node.prototype.generate_Delete = function () {
    console.log('"delete" not implemented')
};
Node.prototype.generate_Void = function () {
    console.log('"void" not implemented')
};
Node.prototype.generate_TypeOf = function () {
    console.log('"typeof" not implemented')
};
Node.prototype.generate_Switch = function () {
    console.log('"switch" not implemented')
};
Node.prototype.generate_Case = function () {
    console.log('"case" not implemented')
};
Node.prototype.generate_Default = function () {
    console.log('"default" not implemented')
};
Node.prototype.generate_TryCatch = function () {
    console.log('"trycatch" not implemented')
};
Node.prototype.generate_Throw = function () {
    console.log('"throw" not implemented')
};
Node.prototype.generate_Label = function () {
    console.log('"label" not implemented')
};
Node.prototype.generate_With = function () {
    console.log('"with" not implemented')
};