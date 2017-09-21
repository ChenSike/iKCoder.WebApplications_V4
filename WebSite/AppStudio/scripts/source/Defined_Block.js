var ObjectIO = {
    forceFullScreen: !1,
    serialize: function () {
        var b = {
            description: window.IDE ? window.IDE.currentProjectDescription : "",
            puzzleTitle: window.WinPuzzle ? window.WinPuzzle.puzzleTitle : "",
            puzzleInstructions: window.WinPuzzle ? window.WinPuzzle.puzzleInstructions : "",
            background: {},
            sprites: [],
            libs: [],
            variables: {},
            cloudVariables: {},
            varDefaults: {},
            lists: {},
            cloudLists: {},
            physics: {}
        };
        b.name = Runtime.levels && Runtime.levels.length > 0 ? Runtime.levels[Runtime.currentLevelIndex].name : window.IDE ? window.IDE.currentProjectName :
            "";
        if (window.IDE && IDE.currentLessonOwnerId) b.lessonownerid = IDE.currentLessonOwnerId;
        for (var c in Runtime.background.variables) b.variables[c] = Runtime.background.variables[c];
        if (Runtime.background.cloudVariables)
            for (c in Runtime.background.cloudVariables) b.cloudVariables[c] = Runtime.background.cloudVariables[c];
        if (Runtime.background.varDefaults)
            for (c in Runtime.background.varDefaults) b.varDefaults[c] = Runtime.background.varDefaults[c];
        else
            for (c in Runtime.background.variables) b.varDefaults[c] = Runtime.background.variables[c];
        for (c in Runtime.background.lists) b.lists[c] = Runtime.background.lists[c];
        if (Runtime.background.cloudLists)
            for (c in Runtime.background.cloudLists) b.cloudLists[c] = Runtime.background.cloudLists[c];
        b.background.scaleType = Runtime.stage.bgtype;
        b.background.width = Runtime.stage.width;
        b.background.height = Runtime.stage.height;
        b.background.canvasWidth = $(Runtime.stage.container).innerWidth();
        b.background.canvasHeight = $(Runtime.stage.container).innerHeight();
        b.background.canvasExpand = Runtime.stage.expand ? true :
            false;
        b.background.img = Runtime.background.imgSrc;
        b.background.currentBackground = Runtime.background.currentCostume;
        b.background.scripts = ObjectIO.serializeScripts(Runtime.background);
        var d = [];
        for (c = 0; c < Runtime.background.costumes.length; c++) d.push({
            name: Runtime.background.costumes[c].name,
            img: Runtime.background.costumes[c].img,
            cx: Runtime.background.costumes[c].cx,
            cy: Runtime.background.costumes[c].cy
        });
        b.background.backgrounds = d;
        d = [];
        for (c = 0; c < Runtime.background.sounds.length; c++) d.push({
            name: Runtime.background.sounds[c].name,
            sound: Runtime.background.sounds[c].sound
        });
        b.background.sounds = d;
        if (Runtime.background.documentation) b.background.documentation = Runtime.background.documentation;
        for (d = 0; d < Runtime.libs.length; d++) b.libs.push(Runtime.libs[d].classname);
        for (d = 0; d < Runtime.sprites.length; d++) {
            c = Runtime.sprites[d];
            if (!c.instantiated) {
                c = ObjectIO.serializeSprite(c);
                b.sprites.push(c)
            }
        }
        b.physics.enabled = Physics.isSimulationRunning();
        b.physics.gravity = {
            x: Physics.getWorld().GetGravity().x,
            y: Physics.getWorld().GetGravity().y
        };
        if (Runtime.stage.tileLayer.enabled && Runtime.stage.tileLayer.map && Runtime.stage.tileLayer.map.length > 0) {
            b.scrollBgOffset = Runtime.stage.tileLayer.scrollBgOffset;
            b.tilesEnabled = Runtime.stage.tileLayer.enabled;
            for (var e = Runtime.stage.tileLayer.map, f = e[0].length, g = [], d = 0; d < e.length; d++) {
                var h = e[d],
                    j = [];
                for (c = 0; c < f; c++) h[c] ? j.push(h[c] >> 3 | 31) : j.push(0);
                g.push(j)
            }
            b.tiles = g
        }
        return JSON.stringify(b)
    },
    serializeScripts: function (b, c) {
        for (var d = [], e = 0; e < b.scripts.length; e++) {
            var f = b.scripts[e],
                g;
            if (f instanceof Block) {
                if (g = ObjectIO.genScriptObj(f, c)) {
                    g.x = f.x;
                    g.y = f.y;
                    d.push(g)
                }
            } else if (f instanceof Label)
                if (g = ObjectIO.genValueObj(f, c)) {
                    g.x = f.x;
                    g.y = f.y;
                    d.push(g)
                }
        }
        return d
    },
    deserializeScripts: function (b, c) {
        for (var d = 0; d < c.length; d++) {
            var e = c[d],
                f = ObjectIO.deserializeScriptStep(e, b);
            if (f) {
                f.x = e.x;
                f.y = e.y;
                if (f.func.substring(0, 8) == "register") {
                    if (f.func == "registerFunction")
                        for (e = 0; e < b.scripts.length; e++)
                            if (b.scripts[e].func == "registerFunction" && b.scripts[e].name == f.name) {
                                b.scripts.splice(e, 1);
                                break
                            }
                    e = new Script({
                        sprite: b,
                        scriptBlock: f
                    });
                    e.currentBlock = e.scriptBlock;
                    e.invokeStep()
                }
                b.scripts.push(f)
            }
        }
    },
    serializeSprite: function (b, c) {
        var d = Physics.getSpriteProperties(b.spriteObj),
            d = {
                label: b.label,
                scripts: [],
                costumes: [],
                currentCostume: b.currentCostume,
                sounds: [],
                scale: b.spriteObj.scale.x,
                x: b.spriteObj.x - Runtime.stage.getWidth() / 2,
                y: -(b.spriteObj.y - Runtime.stage.getHeight() / 2),
                rotation: b.spriteObj.rotation,
                rotateLock: b.spriteObj.rotateLock,
                draggable: b.spriteObj.draggable,
                hidden: b.hidden ? true : false,
                isHidden: !b.spriteObj.visible,
                volume: b.volume,
                locked: b.locked ? true : false,
                hiddenInSandbox: b.hiddenInSandbox ? true : false,
                lockedInSandbox: b.lockedInSandbox ? true : false,
                zIndex: b.spriteObj.zIndex,
                penColor: b.spriteObj.penColor,
                fillColor: b.spriteObj.fillColor,
                font: b.spriteObj.font,
                fontColor: b.spriteObj.fontColor,
                penWidth: b.spriteObj.penWidth,
                bubble: b.spriteObj.bubble,
                physics: {
                    isStatic: d.isStatic,
                    isActive: d.isActive,
                    geometry: d.geometry,
                    density: d.density,
                    friction: d.friction,
                    restitution: d.restitution
                },
                variables: {},
                varDefaults: {},
                lists: {}
            };
        if (b.classname) d.classname = b.classname;
        if (b.id) d.id = b.id;
        if (b.hidden) d.hidden = true;
        if (b.spriteObj.isStatic) d.isStatic = true;
        if (b.avatarid) d.avatarid = b.avatarid;
        if (b.skeleton.type && b.skeleton.parts) {
            d.skeletonType = b.skeleton.type;
            d.skeletonParts = b.skeleton.parts
        }
        if (b.documentation) {
            d.documentation = b.documentation;
            if (d.documentation.inboundEvents)
                for (var e = 0; e < d.documentation.inboundEvents.length; e++) d.documentation.inboundEvents[e] && delete d.documentation.inboundEvents[e].blockImg;
            if (d.documentation.outboundEvents)
                for (e =
                    0; e < d.documentation.outboundEvents.length; e++) d.documentation.outboundEvents[e] && delete d.documentation.outboundEvents[e].blockImg
        }
        for (var f in b.variables) d.variables[f] = b.variables[f];
        if (b.varDefaults)
            for (f in b.varDefaults) d.varDefaults[f] = b.varDefaults[f];
        else
            for (f in b.variables) d.varDefaults[f] = b.variables[f];
        for (f in b.lists) d.lists[f] = b.lists[f];
        d.scripts = ObjectIO.serializeScripts(b, c);
        for (e = 0; e < b.costumes.length; e++) {
            f = {
                name: b.costumes[e].name,
                img: b.costumes[e].img,
                cx: b.costumes[e].cx,
                cy: b.costumes[e].cy
            };
            if (b.locked && b.costumes[e].hidden) f.hidden = true;
            d.costumes.push(f)
        }
        for (e = 0; e < b.sounds.length; e++) {
            f = {
                hidden: b.sounds[e].hidden ? true : false,
                name: b.sounds[e].name,
                sound: b.sounds[e].sound
            };
            if (b.locked && b.sounds[e].hidden) f.hidden = true;
            d.sounds.push(f)
        }
        return d
    },
    genScriptObj: function (b, c) {
        var d = {
            func: b.func
        };
        if (b.hidden) d.hidden = true;
        if (b.locked) d.locked = true;
        if (b.hiddenInSandbox) d.hiddenInSandbox = true;
        if (b.lockedInSandbox) d.lockedInSandbox = true;
        if (!c && b.id) d.id = b.id;
        if (b.marked) {
            if (ObjectIO.omitMarked) return null;
            d.marked = true
        }
        if (b.tags) d.tags = b.tags;
        if (b.func == "registerFunction") {
            d.cat = "functions";
            d.name = b.name;
            d.label = b.labelText;
            d.hasFlap = false
        } else if (b.func == "blockControlCall" || b.func == "blockControlCallLibrary") {
            d.cat = "functions";
            d.name = b.name;
            d.label = b.labelText
        } else if (b.func == "blockControlScriptVar") {
            d.cat = "var";
            d.name = b.name;
            d.label = b.labelText
        } else if (b.func == "blockComment") {
            d.width = b.width;
            d.height = b.height;
            d.label = b.labelText
        }
        for (var e = [], f = b.label.getNumSockets(), g = 0; g < f; g++) e.push(ObjectIO.genValueObj(b.label.getSocketAtChild(g),
            c));
        d.values = e;
        for (var e = [], h = [], f = b.getNumContainers(), g = 0; g < f; g++) {
            var j = b.getBlockAtContainer(g);
            j ? e.push(ObjectIO.genScriptObj(j, c)) : e.push(null);
            if (g > 0) {
                j = ObjectIO.genValueObj(b._containerLabels[g - 1], c);
                j.labelText = b._containerLabels[g - 1].labelText;
                h.push(j)
            }
        }
        if (e.length > 0) d.containers = e;
        if (h.length > 0) d.containerLabels = h;
        if (b.next) d.next = ObjectIO.genScriptObj(b.next, c);
        return d
    },
    genValueObj: function (b, c) {
        var d = {};
        if (b instanceof Label) {
            d.type = "wrapper";
            d.func = b.func;
            if (!c && b.id) d.id = b.id;
            if (b.hidden) d.hidden =
                true;
            if (b.locked) d.locked = true;
            if (b.marked) {
                if (ObjectIO.omitMarked) return null;
                d.marked = b.marked
            }
            if (b.tags) d.tags = b.tags;
            if (b.func == "valueControlCall" || b.func == "valueControlCallLibrary") {
                d.name = b.name;
                d.label = b.label
            }
            if (b.func == "valueVar" || b.func == "valueList" || b.func == "valueParam" || b.func == "valueScriptVar") d.name = b.name;
            else {
                for (var e = [], f = b.getNumSockets(), g = 0; g < f; g++) e.push(ObjectIO.genValueObj(b.getSocketAtChild(g), c));
                d.values = e
            }
        } else {
            d.type = b.type == "number" ? "number" : b.type == "boolean" ? "boolean" :
                b.type == "string" ? "string" : b.type == "any" ? "any" : b.type == "color" ? "color" : b.type == "choice" ? "choice" : "string";
            d.value = b.label;
            if (b.marked) {
                if (ObjectIO.omitMarked) return null;
                d.marked = b.marked
            }
            if (b._child != null) {
                d = ObjectIO.genValueObj(b._child, c);
                if (b._child.hidden) d.text = b.label
            }
        }
        return d
    },
    deserialize: function (b, c) {
        ObjectIO.loaded = 1;
        var d = b;
        if (typeof b == "string" || b instanceof String) d = JSON.parse(b);
        if (window.IDE) {
            IDE.reset();
            IDE._ignoreUpdates = true
        }
        Runtime.reset();
        Runtime.stage.enableDragging(true);
        if (window.IDE) {
            IDE.setTitle(d.projectName ?
                d.projectName : "");
            IDE.currentProjectDescription = d.description ? d.description : g_loc.getText("dialog.defaultprojdesc");
            WinPuzzle.puzzleTitle = d.puzzleTitle;
            WinPuzzle.puzzleInstructions = d.puzzleInstructions
        }
        if (d.background) {
            Runtime.background.label = d.background.label ? d.background.label : "Stage";
            Runtime.background.variables = d.background.variables ? d.background.variables : {};
            Runtime.background.cloudVariables = d.background.cloudVariables ? d.background.cloudVariables : {};
            Runtime.background.varDefaults = d.background.varDefaults ?
                d.background.varDefaults : {};
            Runtime.background.lists = d.background.lists ? d.background.lists : {};
            Runtime.background.cloudLists = d.background.cloudLists ? d.background.cloudLists : {};
            Runtime.stage.setBackgroundType(d.background.scaleType);
            if (!d.background.width) d.background.width = 480;
            if (!d.background.height) d.background.height = 360;
            if (!d.background.canvasWidth) d.background.canvasWidth = d.background.width;
            if (!d.background.canvasHeight) d.background.canvasHeight = d.background.height;
            Runtime.stage.expand = d.background.canvasExpand;
            if (!window.IDE) {
                var e = $("#stage-canvas");
                e.length > 0 && e.css("width", Math.abs(d.background.width)).css("height", Math.abs(d.background.height))
            }
            Runtime.stage.setSize(Math.abs(d.background.width), Math.abs(d.background.height));
            for (var f = d.background.backgrounds, e = 0; e < f.length; e++) {
                var g = f[e];
                Runtime.background.addCostume({
                    name: g.name,
                    img: g.img
                }, function () {
                    d.background.currentBackground != void 0 && Runtime.background.setCostumeByName(d.background.currentBackground)
                })
            }
            if (f = d.background.sounds)
                for (e = 0; e < f.length; e++) {
                    g =
                        f[e];
                    Runtime.background.addSound({
                        name: g.name,
                        sound: g.sound
                    })
                }
            ObjectIO.deserializeScripts(Runtime.background, d.background.scripts);
            if (d.variables)
                for (var h in d.variables) Runtime.background.variables[h] = d.variables[h];
            if (d.varDefaults)
                for (h in d.varDefaults) Runtime.background.varDefaults[h] = d.varDefaults[h];
            if (d.cloudVariables)
                for (h in d.cloudVariables) Runtime.background.cloudVariables[h] = d.cloudVariables[h];
            if (d.lists)
                for (h in d.lists) Runtime.background.lists[h] = d.lists[h];
            if (d.cloudLists)
                for (h in d.cloudLists) Runtime.background.cloudLists[h] =
                    d.cloudLists[h];
            if (d.background.documentation) Runtime.background.documentation = d.background.documentation
        }
        if (d.libs)
            for (e = 0; e < d.libs.length; e++) {
                ObjectIO.loaded++;
                Runtime.requireLibrary(d.libs[e], function () {
                    ObjectIO.doCallback(c, d);
                    window.WinTools && window.WinTools.reset()
                })
            }
        h = d.sprites;
        for (e = 0; e < h.length; e++) {
            f = h[e];
            if (f.zIndex === void 0) f.zIndex = e;
            ObjectIO.deserializeSprite(f, function () {
                ObjectIO.doCallback(c, d)
            })
        }
        if (d.physics) {
            Physics.getWorld().SetGravity(new b2Vec2(d.physics.gravity.x, d.physics.gravity.y));
            Runtime.isScratch = false
        } else Runtime.isScratch = true;
        if (d.watchers)
            for (e = 0; e < d.watchers.length; e++) {
                h = d.watchers[e];
                if (h.visible) {
                    (f = h.target) || (f = "Stage");
                    if (h.func) {
                        Runtime.addWatcher(f, g_steps[h.func], h.x - Runtime.stage.getWidth() / 2, Runtime.stage.getHeight() / 2 - h.y, 0.5);
                        ObjectIO.doCallback(c, d)
                    } else if (h.name) {
                        Runtime.addWatcher(f, h.name, h.x - Runtime.stage.getWidth() / 2, Runtime.stage.getHeight() / 2 - h.y, 0.5);
                        ObjectIO.doCallback(c, d)
                    }
                }
            }
        if (d.tiles) {
            Runtime.stage.tileLayer.setup();
            Runtime.stage.tileLayer.scrollBgOffset =
                d.scrollBgOffset ? true : false;
            Runtime.stage.tileLayer.enableTiles(d.tilesEnabled);
            h = d.tiles;
            f = h[0].length;
            g = [];
            for (e = 0; e < h.length; e++) {
                for (var j = h[e], k = [], l = 0; l < f; l++) j[l] & 31 ? k.push((j[l] << 3 | 255) & 4294967295) : k.push(0);
                g.push(k)
            }
            d.tiles = g;
            Runtime.stage.tileLayer.loadMap(d.tiles)
        } else Runtime.stage.tileLayer.setup();
        if (d.levels) {
            Runtime.levels = d.levels;
            Runtime.currentLevelIndex = parseInt(d.currentLevel)
        } else {
            Runtime.levels = [{
                name: d.name,
                screenshotid: ""
            }];
            Runtime.currentLevelIndex = 0
        }
        Runtime.cleanup();
        ObjectIO.doCallback(c,
            d)
    },
    doCallback: function (b, c) {
        ObjectIO.loaded--;
        if (ObjectIO.loaded <= 0) {
            if (window.IDE) IDE._ignoreUpdates = false;
            b && b(c)
        }
    },
    loadSprite: function (b, c) {
        $.ajax({
            url: b,
            dataType: "json",
            success: function (b) {
                ObjectIO.deserializeSprite(b, function (b) {
                    c && c(b)
                }, false)
            }
        })
    },
    serializeLibrary: function (b) {
        var c = {
            label: b.label,
            scripts: [],
            variables: {},
            varDefaults: {},
            lists: {}
        },
            d;
        for (d in b.variables) c.variables[d] = b.variables[d];
        if (b.varDefaults)
            for (d in b.varDefaults) c.varDefaults[d] = b.varDefaults[d];
        else
            for (d in b.variables) c.varDefaults[d] =
                b.variables[d];
        for (d in b.lists) c.lists[d] = b.lists[d];
        c.scripts = ObjectIO.serializeScripts(b);
        return c
    },
    deserializeLibrary: function (b, c) {
        var d = new Sprite({
            label: b.label,
            classname: b.label,
            isHidden: true
        });
        if (b.classname) d.classname = b.classname;
        if (b.description) d.description = b.description;
        if (b.dbid) d.dbid = b.dbid;
        if (b.ownerid) d.ownerid = b.ownerid;
        if (b.variables)
            for (var e in b.variables)
                if (e != "_empty_") {
                    d.variables[e] = b.variables[e];
                    b.varDefaults && b.varDefaults[e] !== void 0 && (d.varDefaults[e] = b.varDefaults[e])
                }
        if (b.lists)
            for (e in b.lists) e !=
                "_empty_" && (d.lists[e] = d.lists[e]);
        ObjectIO.deserializeScripts(d, b.scripts, true);
        for (e = 0; e < d.scripts.length; e++) d.scripts[e].library = d;
        c && c(d);
        return d
    },
    deserializeSprite: function (b, c, d) {
        ObjectIO.loaded++;
        var e = {};
        if (b.varDefaults) e = b.varDefaults;
        else if (b.variables)
            for (var f in b.variables) e[f] = b.variables[f];
        e = b.costumes[0].img;
        e.indexOf("http:") === 0 && window.location.protocol != "http:" ? e = window.location.protocol + e.substring(5) : e.indexOf("https:") === 0 && window.location.protocol != "https:" && (e = window.location.protocol +
            e.substring(6));
        d = Sprites.addSprite({
            label: b.label,
            scale: b.scale,
            x: b.x,
            y: b.y,
            rotation: b.rotation,
            rotateLock: b.rotateLock,
            draggable: b.draggable,
            hidden: b.hidden ? true : false,
            isHidden: b.isHidden ? true : false,
            costumeName: b.costumes[0].name,
            cx: b.costumes[0].cx,
            cy: b.costumes[0].cy,
            img: e,
            volume: b.volume,
            variables: b.variables,
            varDefaults: b.varDefaults,
            lists: b.lists,
            forceNumber: d ? true : false,
            locked: b.locked ? true : false,
            hiddenInSandbox: b.hiddenInSandbox ? true : false,
            lockedInSandbox: b.lockedInSandbox ? true : false,
            id: b.id,
            classname: b.classname,
            zIndex: b.zIndex,
            penColor: b.penColor,
            fillColor: b.fillColor,
            font: b.font,
            fontColor: b.fontColor,
            penWidth: b.penWidth,
            bubble: b.bubble,
            avatarid: b.avatarid,
            skeletonType: b.skeletonType,
            skeletonParts: b.skeletonParts
        }, function (d) {
            if (b.isStatic) d.spriteObj.isStatic = true;
            d.spriteObj.physicsBody && b.physics && Physics.updateBody(d.spriteObj, {
                isStatic: b.physics.isStatic !== void 0 ? b.physics.isStatic : false,
                isActive: b.physics.isActive !== void 0 ? b.physics.isActive : true,
                geometry: b.physics.geometry,
                density: b.physics.density,
                friction: b.physics.friction,
                restitution: b.physics.restitution
            });
            if (b.variables)
                for (var e in b.variables)
                    if (e != "_empty_") {
                        d.variables[e] = b.variables[e];
                        b.varDefaults && b.varDefaults[e] !== void 0 && (d.varDefaults[e] = b.varDefaults[e])
                    }
            if (b.lists)
                for (e in b.lists) e != "_empty_" && (d.lists[e] = b.lists[e]);
            e = b.costumes;
            for (var f = 1; f < e.length; f++) {
                var g = e[f],
                    m = g.img;
                m.indexOf("http:") === 0 && window.location.protocol != "http:" ? m = window.location.protocol + m.substring(5) : m.indexOf("https:") === 0 && window.location.protocol !=
                    "https:" && (m = window.location.protocol + m.substring(6));
                d.addCostume({
                    hidden: g.hidden ? true : false,
                    name: g.name,
                    img: m,
                    cx: g.cx,
                    cy: g.cy
                })
            }
            b.currentCostume && d.setCostumeByName(b.currentCostume);
            b.zIndex && d.spriteObj.setZIndex(b.zIndex);
            c && c(d)
        });
        if (b.avatarid) d.avatarid = b.avatarid;
        if (b.hidden) d.hidden = true;
        e = b.sounds;
        for (f = 0; f < e.length; f++) {
            var g = e[f];
            d.addSound({
                hidden: g.hidden ? true : false,
                name: g.name,
                sound: g.sound
            })
        }
        if (b.documentation) d.documentation = b.documentation;
        f = false;
        if (d.id && d.classname && !d.locked)
            for (e =
                0; e < Runtime.sprites.length; e++) {
                g = Runtime.sprites[e];
                if (g != d && g.id == d.id && g.classname == d.classname) {
                    d.scripts = g.scripts;
                    f = true;
                    break
                }
            }
        if (f)
            for (e = 0; e < d.scripts.length; e++) {
                f = d.scripts[e];
                if (f.func.substring(0, 8) == "register") {
                    f = new Script({
                        sprite: d,
                        scriptBlock: f
                    });
                    f.currentBlock = f.scriptBlock;
                    f.invokeStep()
                }
            } else ObjectIO.deserializeScripts(d, b.scripts, b.locked);
        return d
    },
    deserializeScriptSocket: function (b) {
        var c = null;
        if (b.type == "wrapper") {
            var d;
            if (d = b.func == "valueControlCall" ? new Label({
                cat: b.cat ?
                        b.cat : "functions",
                name: b.name,
                label: b.label,
                marked: b.marked,
                value: "string",
                func: b.func
            }) : b.func == "valueControlCallLibrary" ? new Label({
                cat: "library",
                name: b.name,
                label: b.label,
                marked: b.marked,
                value: "string",
                func: b.func
            }) : findStepByFunc(b.func)) {
                if (b.label) d.label = b.label;
                c = new Label(d);
                if (b.hidden) {
                    c.hidden = true;
                    c.text = b.text
                }
                c.marked = b.marked;
                if (b.tags) c.tags = b.tags;
                if (b.id) c.id = b.id;
                if (b.values) {
                    c.ensureSockets(b.values.length);
                    for (d = 0; d < b.values.length; d++) {
                        var e = ObjectIO.deserializeScriptSocket(b.values[d]);
                        c.setValue(d, e)
                    }
                }
            } else if (b.name) {
                c = void 0;
                b.cat || (b.func == "valueVar" ? c = "var" : b.func == "valueList" ? c = "list" : b.func == "valueParam" ? c = "functions" : b.func == "valueScriptVar" && (c = "localvar"));
                c = new Label({
                    cat: c,
                    name: b.name,
                    marked: b.marked,
                    value: "number",
                    func: b.func
                });
                if (b.id) c.id = b.id
            }
            if (b.hidden) c.hidden = true;
            if (b.locked) c.locked = true;
            if (b.note) c.note = b.note
        } else c = b.value;
        return c
    },
    deserializeScriptStep: function (b) {
        var c = null,
            d = null;
        if (b.func == "registerFunction" || b.func == "blockControlCall") {
            d = b;
            if (!d.cat) d.cat =
                "functions"
        } else if (b.func == "blockControlCallLibrary") {
            d = b;
            d.cat = "library"
        } else if (b.func == "blockControlScriptVar") {
            d = b;
            d.cat = "obj";
            if (!d.label) {
                var e = findStepByFunc(d.func);
                if (e) d.label = e.label
            }
        } else {
            if (b.func == "valueControlCall" || b.func == "valueControlCallLibrary" || b.func == "valueVar" || b.func == "valueList" || b.func == "valueParam" || b.func == "valueScriptVar") {
                c = ObjectIO.deserializeScriptSocket(b);
                c.hiddenInSandbox = b.hiddenInSandbox;
                c.lockedInSandbox = b.lockedInSandbox;
                return c
            }
            d = b ? findStepByFunc(b.func) :
                null;
            if (b.label) d.label = b.label
        }
        if (d) {
            if (d.value) {
                c = new Label(d);
                delete c.hidden;
                c.marked = b.marked;
                if (b.tags) c.tags = b.tags;
                if (b.id) c.id = b.id;
                if (b.values) {
                    c.ensureSockets(b.values.length);
                    for (d = 0; d < b.values.length; d++) {
                        e = ObjectIO.deserializeScriptSocket(b.values[d]);
                        c.setValue(d, e)
                    }
                }
            } else {
                c = new Block(d);
                delete c.hidden;
                c.marked = b.marked;
                if (b.tags) c.tags = b.tags;
                if (b.id) c.id = b.id;
                if (d.func == "blockComment") {
                    c.width = b.width;
                    c.height = b.height;
                    c.labelText = b.label
                }
                if (b.values) {
                    c.label.ensureSockets(b.values.length);
                    for (d = 0; d < b.values.length; d++) {
                        e = ObjectIO.deserializeScriptSocket(b.values[d]);
                        c.label.setValue(d, e)
                    }
                }
                if (b.containers)
                    for (d = 0; d < b.containers.length; d++) {
                        if (d > 0 && b.containerLabels) {
                            for (var e = [], f = 0; f < b.containerLabels[d - 1].values.length; f++) e.push(ObjectIO.deserializeScriptSocket(b.containerLabels[d - 1].values[f]));
                            d < b.containers.length - 1 ? textLabel = window.RenderCode ? RenderCode.getElseIfLabel() : "else if {boolean} then {button:remove}" : d < b.containers.length && (textLabel = window.RenderCode ? RenderCode.getElseLabel() :
                                "else {button:add}");
                            var g = new Label({
                                label: textLabel
                            });
                            g.parent = c;
                            g.draggable = false;
                            for (f = 0; f < e.length; f++) g.setValue(f, e[f]);
                            d - 1 >= c._containerLabels.length && c._containerLabels.push(null);
                            c._containerLabels[d - 1] = g
                        }
                        d >= c._containers.length && c._containers.push(null);
                        if (b.containers[d]) {
                            e = ObjectIO.deserializeScriptStep(b.containers[d]);
                            if (e != null) {
                                c.addToContainer(d, e);
                                e.parent = c
                            }
                        }
                    }
                if (b.next) {
                    c.next = ObjectIO.deserializeScriptStep(b.next);
                    if (c.next) c.next.parent = c
                }
            }
            c.hiddenInSandbox = b.hiddenInSandbox;
            c.lockedInSandbox = b.lockedInSandbox;
            if (b.hidden) c.hidden = true;
            if (b.locked) c.locked = true;
            if (b.note) c.note = b.note
        }
        return c
    },
    serializeLesson: function () {
        var b = {
            width: Runtime.stage.width,
            height: Runtime.stage.height,
            bgtype: Runtime.stage.bgtype,
            canvasWidth: $(Runtime.stage.container).innerWidth(),
            canvasHeight: $(Runtime.stage.container).innerHeight()
        };
        if (window.WinLessons) {
            var c = WinLessons.getDetails();
            b.name = c.name;
            b.description = c.description;
            b.showPlayer = c.showPlayer;
            b.instructions = c.instructions;
            c = WinLessons.getNotes();
            b.resources = c.resources;
            b.globalVars = c.globalVars;
            b.blocks = c.blocks;
            b.initialState = c.initialState;
            b.notes = c.notes
        }
        return b
    },
    deserializeLesson: function (b) {
        $("#wincmd-runlesson").addClass("disabled");
        if (window.WinLessons && b && b.notes) {
            window.IDE && WinLessons.reset();
            IDE.currentProjectDetails = b.details ? b.details : "";
            IDE.currentProjectConcepts = b.concepts ? b.concepts : "";
            WinLessons.setDetails({
                ownerid: b.ownerid,
                name: b.name,
                description: b.description,
                showPlayer: b.showPlayer,
                instructions: b.instructions
            });
            WinLessons.setNotes(b);
            if (window.IDE) {
                if (!b.canvasWidth) b.canvasWidth = 600;
                if (!b.canvasHeight) b.canvasHeight = 400;
                b.bgtype && Runtime.stage.setBackgroundType(b.bgtype);
                b.width && b.height && Runtime.stage.setSize(Math.abs(b.width), Math.abs(b.height));
                IDE.adjustPanels()
            }
        }
    }
},
    g_choice_lists = {
        keys: "up arrow;down arrow;left arrow;right arrow;space;return;mouse;mouse-right;any".split(";").concat("abcdefghijklmnopqrstuvwxyz0123456789".split("")),
        videosensetype: ["motion", "direction"],
        videoviewtype: ["on", "off", "on-flipped"],
        events: ["loudness",
            "timer", "video motion"
        ],
        geometry: ["circular", "rectangular"],
        rotatestyle: ["all around", "left-right", "don't rotate"],
        stageproperty: "width;height;left;right;top;bottom;viewport offset x;viewport offset y;world width;world height;design width;design height;closest actor;furthest actor;number of actors;last key pressed".split(";"),
        stop: ["all", "this script", "other scripts in actor", "function call chain"],
        lastany: ["1", "last", "any"],
        lastall: ["1", "last", "all"],
        operator: "+ - * / % mod == < <= > >= != & | && and || or ^ xor << >> >>>".split(" "),
        texttransform: ["lowercase", "uppercase", "trim", "parse"],
        bubblestyle: ["rectangular", "rounded", "oval", "thought", "excited"],
        bubbledock: ["default", "top", "dialog"],
        effect: "color fisheye whirl pixelate mosaic brightness ghost blur brightness bump circlesmear contrast crosssmear diffusion dither edge emboss exposure gain gamma grayscale hue invert kaleidoscope lensdistortion linesmear maximum median minimum noise oil opacity pinch pixelate posterize rgbadjust saturation sawtoothripple sepia sharpen sineripple solarize sparkle squaresmear threshold triangleripple twirl vignette waterripple".split(" "),
        drums: "35 Acoustic Bass Drum;36 Bass Drum 1;37 Side Stick;38 Acoustic Snare;39 Hand Clap;40 Electric Snare;41 Low Floor Tom;42 Closed Hi Hat;43 High Floor Tom;44 Pedal Hi-Hat;45 Low Tom;46 Open Hi-Hat;47 Low-Mid Tom;48 Hi-Mid Tom;49 Crash Cymbal 1;50 High Tom;51 Ride Cymbal 1;52 Chinese Cymbal;53 Ride Bell;54 Tambourine;55 Splash Cymbal;56 Cowbell;57 Crash Cymbal 2;58 Vibraslap;59 Ride Cymbal 2;60 Hi Bongo;61 Low Bongo;62 Mute Hi Conga;63 Open Hi Conga;64 Low Conga;65 High Timbale;66 Low Timbale;67 High Agogo;68 Low Agogo;69 Cabasa;70 Maracas;71 Short Whistle;72 Long Whistle;73 Short Guiro;74 Long Guiro;75 Claves;76 Hi Wood Block;77 Low Wood Block;78 Mute Cuica;79 Open Cuica;80 Mute Triangle;81 Open Triangle".split(";"),
        instruments: "1 Acoustic Grand Piano;2 Bright Acoustic Piano;4 Honky-tonk Piano;5 Electric Piano 1;6 Electric Piano 2;17 Drawbar Organ;18 Percussive Organ;19 Rock Organ;20 Church Organ;21 Reed Organ;25 Acoustic Guitar (nylon);27 Electric Guitar (jazz);43 Cello;74 Flute;90 Pad 1 (new age);91 Pad 3 (polysynth);92 Pad 4 (choir);93 Pad 5 (bowed);94 Pad 6 (metallic);113 Tinkle Bell;115 Steel Drums;116 Woodblock;119 Synth Drum".split(";"),
        permissions: ["local", "user", "project"],
        spriteprop: "x position;y position;angle;direction;layer;rotation style;label;say;costume #;costume name;size;volume;width;height;density;friction;restitution;angular velocity;angular damping;linear damping;x linear velocity;y linear velocity".split(";"),
        datetime: "year;month;day;hours;minutes;seconds;milliseconds;unix time;text".split(";"),
        math: "abs floor ceiling round int sqrt sin sinrad cos cosrad tan tanrad asin asinrad acos acosrad atan atanrad ln log e^ 10^ sign".split(" "),
        math2: ["atan2", "atan2rad", "max", "min", "pow"],
        mathunary: ["!", "~", "+", "-"],
        mathbinary: "* / % + - << >> >>> < <= > >= == != & | ^ && ||".split(" "),
        constants: "pi e ln2 ln10 log2e log10e sqrt1/2 sqrt2".split(" "),
        fontstyle: ["normal", "bold", "italic", "italic bold"],
        fontsize: "8 9 10 11 12 14 16 18 20 22 24 26 28 36 48 72 96 120".split(" "),
        font: "Arial,Helvetica,sans-serif;Arial Black,Gadget,sans-serif;Comic Sans MS,cursive;Courier New,Courier New,monospace;Impact,Charcoal,sans-serif;Lucida Console,Monaco,monospace;Lucida Sans Unice,Lucida Grande,sans-serif;Tahoma,Geneva,sans-serif;Times New Roman,Times,serif;Trebuchet MS,sans-serif;Verdana,Geneva,sans-serif".split(";"),
        getphysics: "density;friction;restitution;angular velocity;angular damping;inertia;is active;is awake;linear damping;x linear velocity;y linear velocity;x gravity;y gravity;last collided with;last collision x;last collision y;last actor collided with;last actor collision x;last actor collision y".split(";"),
        setphysics: "force;impulse;torque;density;friction;restitution;angular damping;angular velocity;linear damping;linear velocity".split(";"),
        setphysicsxy: ["force", "impulse", "linear velocity", "gravity"],
        easing: "easeLinear easeInQuad easeOutQuad easeInOutQuad easeInCubic easeOutCubic easeInOutCubic easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInExponential easeOutExponential easeInOutExponential easeInCirc easeOutCirc easeInOutCirc easeInElastic easeOutElastic easeInOutElastic easeBackIn easeBackOut easeBackInOut easeBounceIn easeBounceOut easeBounceInOut".split(" "),
        particleimg: "none;fire;line;smoke;snow;snowflake;starburst;circle;hexagon;rectangle;star;filled circle;filled hexagon;filled rectangle;filled star".split(";"),
        droneanimations: ["flip forward", "flip backward", "flip left", "flip right"],
        jumpingsumojumps: ["long", "high"],
        jumpingsumoanimations: "stop;spin;tap;slow shake;metronome;wave;spin jump;spin to posture;spiral;slalom".split(";"),
        jumpingsumopositions: ["balancing", "ready to jump", "ready to kick"],
        jumpingsumoaudiothemes: ["default", "robot", "insect", "monster"],
        spheroprop: "accelerometer x;accelerometer y;accelerometer z;pitch;roll;yaw;location x;location y;velocity x;velocity y;quaternion 0;quaternion 1;quaternion 2;quaternion 3;gyro x;gyro y;gyro z".split(";"),
        spherosetnumericprop: ["collision threshold - x", "collision threshold - x speed", "collision threshold - y", "collision threshold - y speed", "collision interval"],
        grabbercmd: ["open", "close"],
        flyingmode: ["quadcopter", "plane forward", "plane backward"],
        planespeed: ["low", "medium", "high"],
        wedo2tiltsensormode: ["angle",
            "direction", "bump"
        ],
        wedo2tiltsensorangle: ["x", "y"],
        wedo2tiltbumpdirection: ["x", "y", "z"],
        wedo2resettablesensor: ["tilt sensor", "motion sensor"],
        wedo2motionsensormode: ["distance", "count"],
        wedo2motordirection: ["clockwise", "counter clockwise"],
        wedo2sensorormotor: ["tilt sensor", "motion sensor", "motor"]
    },
    g_steps = {
        registerFlagTrigger: {
            cat: "events",
            label: "当开始",
            hasFlap: !1,
            func: "registerFlagTrigger",
            readName: "On Start",
            concept: "simple events",
            tags: "hat block;event;start;begin;program;play".split(";")
        },
        registerKeyTrigger: {
            cat: "events",
            label: "当 {choice:keys} 敲击",
            hasFlap: !1,
            func: "registerKeyTrigger",
            readName: "When Key Pressed",
            concept: "simple events",
            tags: "hat block;keyboard;key press;arrow keys;keypress;when key pressed".split(";")
        },
        registerTrigger: {
            cat: "events",
            label: "当 {boolean} 发生",
            hasFlap: !1,
            func: "registerTrigger",
            readName: "When Condition Occurs",
            concept: "advanced events",
            tags: "hat block;event;start;begin;program;trigger".split(";")
        },
        registerSpriteTrigger: {
            cat: "events",
            label: "当角色被点击",
            hasFlap: !1,
            func: "registerSpriteTrigger",
            readName: "When Actor Clicked",
            concept: "simple events",
            tags: ["click actor", "touch actor", "press actor", "mouse click"]
        },
        registerBackgroundChange: {
            cat: "events",
            label: "当背景切换为 {scenes}",
            hasFlap: !1,
            func: "registerBackgroundChange",
            readName: "When Scene Switches",
            concept: "simple events",
            tags: ["background", "backdrop", "scene", "change", "scene change"]
        },
        registerExternalTrigger: {
            cat: "events",
            hidden: !0,
            label: "当 {choice:events} >{number}",
            hasFlap: !1,
            func: "registerExternalTrigger",
            readName: "When Condition",
            concept: "external events",
            tags: "change sound audio video event trigger".split(" ")
        },
        blockControlBroadcast: {
            cat: "events",
            label: "广播 {events}",
            func: "blockControlBroadcast",
            readName: "Broadcast",
            concept: "simple messaging",
            tags: ["send event", "send messages", "tell", "signal"]
        },
        blockControlBroadcastWait: {
            cat: "events",
            label: "广播 {events} 并等待",
            func: "blockControlBroadcastWait",
            readName: "Broadcast And Wait",
            concept: "advanced messaging",
            tags: ["send", "messages", "event", "signal", "wait till done"]
        },
        blockControlPostMessage: {
            cat: "events",
            label: "发送事件 {events}的消息\"{string}\" 给 {actor}",
            func: "blockControlPostMessage",
            readName: "Send Message To Actor",
            concept: "advanced messaging",
            tags: "send;messages;event;signal;wait;pass value;value;parameter".split(";")
        },
        blockControlPostMessageAndWait: {
            cat: "events",
            label: "发送事件 {events}的消息\"{string}\" 给 {actor}并等待",
            func: "blockControlPostMessageAndWait",
            readName: "Send Message To Actor And Wait",
            concept: "advanced messaging",
            tags: "send;messages;event;signal;wait;pass value;value;parameter".split(";")
        },
        valueControlMessageValue: {
            cat: "events",
            label: "接收的值",
            value: "string",
            func: "valueControlMessageValue",
            readName: "Received Value",
            concept: "advanced messaging",
            tags: ["value", "messages"]
        },
        valueControlMessageSource: {
            cat: "events",
            label: "接收的源",
            value: "string",
            func: "valueControlMessageSource",
            readName: "Received Source",
            concept: "advanced messaging",
            tags: ["value", "messages"]
        },
        registerBroadcastTrigger: {
            cat: "events",
            label: "当我接收到 {events}",
            hasFlap: !1,
            func: "registerBroadcastTrigger",
            readName: "When I Receive",
            concept: "simple messaging",
            tags: ["hat block", "messaging", "message", "receive"]
        },
        registerCloned: {
            cat: "events",
            omitbg: !0,
            label: "克隆启动",
            hasFlap: !1,
            func: "registerCloned",
            readName: "Clone Startup",
            concept: "cloning",
            tags: ["hat block", "cloning", "copy actor", "duplicate"]
        },
        valueControlIsClone: {
            cat: "flow",
            label: "是克隆体?",
            value: "boolean",
            func: "valueControlIsClone",
            readName: "Is Clone?",
            concept: "cloning",
            tags: ["cloning", "value"]
        },
        registerFunction: {
            cat: "functions",
            label: "",
            func: "registerFunction",
            hasFlap: !1,
            readName: "Function Definition",
            concept: "functions",
            tags: ["functions", "objects"]
        },
        blockControlCall: {
            cat: "functions",
            label: "",
            func: "blockControlCall",
            readName: "Function Call",
            concept: "functions",
            tags: ["functions", "objects"]
        },
        valueControlCall: {
            cat: "functions",
            label: "",
            func: "valueControlCall",
            readName: "Function Value",
            value: "string",
            concept: "functions",
            tags: ["functions", "objects"]
        },
        blockControlCallLibrary: {
            cat: "library",
            label: "",
            func: "blockControlCallLibrary",
            readName: "Library Function Call",
            concept: "functions",
            tags: ["functions", "objects", "library"]
        },
        valueControlCallLibrary: {
            cat: "library",
            label: "",
            value: "string",
            func: "valueControlCallLibrary",
            readName: "Library Function Value",
            concept: "functions",
            tags: ["functions", "objects", "library"]
        },
        blockControlCallMember: {
            cat: "functions",
            label: "{actor} . {method}({varargs})",
            func: "blockControlCallMember",
            readName: "Member Function Call",
            concept: "functions",
            tags: ["functions", "objects"]
        },
        valueControlCallMember: {
            cat: "functions",
            label: "{actor} . {method}({varargs})",
            value: "string",
            func: "valueControlCallMember",
            readName: "Member Function Value",
            concept: "functions",
            tags: ["functions", "objects"]
        },
        blockControlWait: {
            cat: "flow",
            label: "等待 {number:1} 秒",
            func: "blockControlWait",
            readName: "Wait",
            concept: "delays",
            tags: ["wait", "delay", "blocked"]
        },
        blockControlForever: {
            cat: "flow",
            label: "一直持续",
            containers: 1,
            hasSlot: !1,
            func: "blockControlForever",
            readName: "Forever",
            concept: "simple loops",
            tags: ["loop",
                "endless", "repetition", "again"
            ]
        },
        blockControlRepeat: {
            cat: "flow",
            label: "重复 {number:10}",
            containers: 1,
            func: "blockControlRepeat",
            readName: "Repeat",
            concept: "simple loops",
            tags: ["loop", "finite loop", "repitition"]
        },
        blockControlCloneActor: {
            cat: "flow",
            label: "为 {actor} 创建克隆",
            func: "blockControlCloneActor",
            readName: "Create Clone Of",
            concept: "cloning",
            tags: ["make copy", "cloning", "duplicate"]
        },
        valueControlLastClonedActor: {
            cat: "flow",
            label: "最后创建的角色的名字",
            value: "string",
            func: "valueControlLastClonedActor",
            readName: "Name Of Last Cloned Actor",
            concept: "cloning",
            tags: ["cloning", "value"]
        },
        valueControlCloneName: {
            cat: "flow",
            label: "clone name of actor {string}",
            value: "string",
            func: "valueControlCloneName",
            readName: "Clone Name Of Actor",
            concept: "cloning",
            tags: ["cloning", "value"]
        },
        blockControlDeleteActor: {
            cat: "flow",
            omitbg: !0,
            label: "删除这个克隆",
            hasSlot: !1,
            func: "blockControlDeleteActor",
            readName: "Delete This Clone",
            concept: "cloning",
            tags: ["cloning", "delete"]
        },
        blockControlForeverIf: {
            cat: "flow",
            label: "一直持续 如果 {boolean}",
            containers: 1,
            hasSlot: !1,
            func: "blockControlForeverIf",
            readName: "Forever If",
            concept: "conditional loops",
            tags: ["loop", "conditional", "if"]
        },
        blockControlIf: {
            cat: "flow",
            label: "如果 {boolean} 那么",
            containers: 1,
            func: "blockControlIf",
            readName: "If Then",
            concept: "simple conditionals",
            tags: ["contition", "if", "logic"]
        },
        blockControlIfElse: {
            cat: "flow",
            label: "如果 {boolean} 那么",
            containers: 2,
            containerLabels: ["否则 {button:add}"],
            func: "blockControlIfElse",
            readName: "If Then Else",
            concept: "simple conditionals",
            tags: ["if else",
                "else", "logic", "conditional"
            ]
        },
        valueControlIfElse: {
            cat: "flow",
            label: "如果 {boolean} 那么 {string} 否则 {string}",
            value: "string",
            func: "valueControlIfElse",
            readName: "If Then Else",
            concept: "conditionals",
            tags: ["if else", "else", "logic", "conditional"]
        },
        blockControlWaitUntil: {
            cat: "flow",
            label: "等待 直到 {boolean}",
            func: "blockControlWaitUntil",
            readName: "Wait Until",
            concept: "conditional wait",
            tags: ["loop", "repetition", "if condition"]
        },
        blockControlWhile: {
            cat: "flow",
            label: "当 {boolean} 重复",
            containers: 1,
            func: "blockControlWhile",
            readName: "Repeat While",
            concept: "conditional loops",
            tags: ["loop", "repetition", "while condition"]
        },
        blockControlRepeatUntil: {
            cat: "flow",
            label: "重复 直到 {boolean}",
            containers: 1,
            func: "blockControlRepeatUntil",
            readName: "Repeat Until",
            concept: "conditional loops",
            tags: ["loop", "repetition", "until condition"]
        },
        blockControlReturn: {
            cat: "functions",
            label: "返回 {string}",
            hasSlot: !1,
            func: "blockControlReturn",
            readName: "Return",
            concept: "functions",
            tags: ["stop", "end", "finish", "done",
                "return"
            ]
        },
        blockControlStop: {
            cat: "flow",
            label: "停止 {choice:stop}",
            hasSlot: !1,
            func: "blockControlStop",
            readName: "Stop",
            concept: "program control",
            tags: ["stop", "end", "finish", "done"]
        },
        blockControlStopScript: {
            cat: "flow",
            hidden: !0,
            label: "停止脚本",
            hasSlot: !1,
            func: "blockControlStopScript",
            readName: "Stop Script",
            concept: "program control",
            tags: ["stop", "end", "finish", "done"]
        },
        blockControlStopAll: {
            cat: "flow",
            hidden: !0,
            label: "停止所有",
            hasSlot: !1,
            func: "blockControlStopAll",
            readName: "Stop All",
            concept: "program control",
            tags: ["stop all", "finish", "done"]
        },
        blockControlScriptVar: {
            cat: "localvar",
            label: "脚本 变量 {varargs:valueScriptVar}",
            func: "blockControlScriptVar",
            readName: "Script Variables",
            concept: "simple variables",
            tags: ["variable", "variables"]
        },
        blockControlFor: {
            cat: "flow",
            label: "设置 {variables} 从 {number:0} 到 {number:10} 步长 {number:1}",
            func: "blockControlFor",
            containers: 1,
            readName: "For",
            concept: "advanced loops",
            tags: ["loop"]
        },
        blockControlForEach: {
            cat: "flow",
            label: "设置 每个 {string} 为 {variables}",
            func: "blockControlForEach",
            readName: "For In",
            containers: 1,
            concept: "advanced loops",
            tags: ["loop"]
        },
        blockControlBreak: {
            cat: "flow",
            label: "中断",
            func: "blockControlBreak",
            hasSlot: !1,
            readName: "Break",
            concept: "advanced loops",
            tags: ["loop", "break"]
        },
        blockControlContinue: {
            cat: "flow",
            label: "继续",
            func: "blockControlContinue",
            hasSlot: !1,
            readName: "Continue",
            concept: "advanced loops",
            tags: ["loop", "continue"]
        },
        blockControlRequestBlocking: {
            cat: "flow",
            hidden: !1,
            label: "执行 直到 完成",
            containers: 1,
            func: "blockControlRequestBlocking",
            readName: "Block",
            concept: "advanced control",
            tags: ["control"]
        },
        blockControlPrint: {
            cat: "flow",
            label: "打印 {string} {varargs}",
            func: "blockControlPrint",
            readName: "Print",
            concept: "advanced control",
            tags: ["control"]
        },
        blockControlJS: {
            cat: "flow",
            hidden: !0,
            label: "JS: {string}",
            func: "blockControlJS",
            readName: "JS",
            concept: "advanced control",
            tags: ["control"]
        },
        valueControlJS: {
            cat: "flow",
            hidden: !0,
            label: "JS: {string}",
            func: "valueControlJS",
            value: "string",
            readName: "JS",
            concept: "advanced control",
            tags: ["control"]
        },
        valueControlLanguage: {
            cat: "flow",
            label: "text ID {string} with {varargs}",
            func: "valueControlLanguage",
            value: "string",
            readName: "Language Format",
            concept: "advanced control",
            tags: ["control"]
        },
        valueControlLanguageWithDefault: {
            cat: "flow",
            label: "text ID {string} ({string}) with {varargs}",
            func: "valueControlLanguageWithDefault",
            value: "string",
            readName: "Language Format",
            concept: "advanced control",
            tags: ["control"]
        },
        valueControlSerializeActor: {
            cat: "control",
            hidden: !0,
            label: "从角色 {actor} 获取数据",
            func: "valueControlSerializeActor",
            value: "string",
            readName: "serialize actor",
            concept: "actor serialization",
            tags: ["advanced", "serialization"]
        },
        blockControlDeserializeActor: {
            cat: "control",
            hidden: !0,
            label: "create actor with {string} named {string}",
            func: "blockControlDeserializeActor",
            readName: "deserialize actor",
            concept: "actor serialization",
            tags: ["advanced", "serialization"]
        },
        blockControlRemoveActor: {
            cat: "control",
            hidden: !0,
            label: "移除角色 {actor}",
            func: "blockControlRemoveActor",
            readName: "remove actor",
            concept: "actor serialization",
            tags: ["advanced", "serialization"]
        },
        valueControlSerializeScripts: {
            cat: "control",
            hidden: !0,
            label: "get scripts from actor {actor} tagged with {string}",
            func: "valueControlSerializeScripts",
            value: "string",
            readName: "serialize scripts",
            concept: "script serialization",
            tags: ["advanced", "serialization"]
        },
        blockControlDeserializeScripts: {
            cat: "control",
            hidden: !0,
            label: "add scripts with {string} into actor {actor}",
            func: "blockControlDeserializeScripts",
            readName: "serialize scripts",
            concept: "actor serialization",
            tags: ["advanced", "serialization"]
        },
        blockControlRemoveScriptsWithTag: {
            cat: "control",
            hidden: !0,
            label: "remove scripts tagged {string} on actor {actor}",
            func: "blockControlRemoveScriptsWithTag",
            readName: "remove scripts",
            concept: "actor serialization",
            tags: ["advanced", "serialization"]
        },
        blockComment: {
            cat: "comment",
            hidden: !1,
            hasFlap: !1,
            hasSlot: !1,
            label: "{string:message}",
            func: "blockComment",
            readName: "Comment",
            concept: "miscellaneous"
        },
        blockInlineComment: {
            cat: "comment",
            label: "//{string:comment}",
            func: "blockInlineComment",
            readName: "Inline Comment",
            concept: "miscellaneous"
        },
        blockSystem: {
            cat: "system",
            label: "IDE {choice:systemEvents} with {string}",
            func: "blockSystem",
            readName: "System",
            concept: "miscellaneous",
            tags: []
        },
        blockControlDebugBreak: {
            cat: "flow",
            label: "断点",
            func: "blockControlDebugBreak",
            readName: "Break",
            concept: "debugging",
            tags: ["break", "debugging"]
        },
        blockControlDebugBreakOn: {
            cat: "flow",
            label: "断点 当 {boolean}",
            func: "blockControlDebugBreakOn",
            readName: "Break When",
            concept: "debugging",
            tags: ["break",
                "debugging"
            ]
        },
        nop: {
            cat: "flow",
            hidden: !0,
            label: "空操作指令",
            func: "nop",
            readName: "No Operation",
            concept: "miscellaneous"
        },
        blockMotionMove: {
            cat: "motion",
            omitbg: !0,
            label: "移动 {number:10} 像素",
            func: "blockMotionMove",
            readName: "Move Steps",
            concept: "simple motion",
            tags: ["movement", "push", "nudge", "walk", "run"]
        },
        blockMotionTurnCW: {
            cat: "motion",
            omitbg: !0,
            label: "顺时针旋转 {image:ide/imgs/button-cw.png} {angle:15} 度",
            func: "blockMotionTurnCW",
            readName: "Turn Clockwise",
            concept: "direction and turning",
            tags: ["rotation",
                "rotate", "turning", "clockwise"
            ]
        },
        blockMotionTurnCCW: {
            cat: "motion",
            omitbg: !0,
            label: "逆时针旋转 {image:ide/imgs/button-ccw.png} {angle:15} 度",
            func: "blockMotionTurnCCW",
            readName: "Turn Counter-Clockwise",
            concept: "direction and turning",
            tags: ["rotation", "rotate", "turning", "counter clockwise"]
        },
        blockMotionPointDirection: {
            cat: "motion",
            omitbg: !0,
            label: "方向指向 {angle:90} 度",
            func: "blockMotionPointDirection",
            readName: "Point In Direction",
            concept: "direction and turning",
            tags: ["see", "angle",
                "direction"
            ]
        },
        blockMotionPointAngle: {
            cat: "motion",
            omitbg: !0,
            label: "设置角度为 {mathangle:0} 度",
            func: "blockMotionPointAngle",
            readName: "Point In Direction",
            concept: "direction and turning",
            tags: ["see", "angle", "direction"]
        },
        blockMotionPointTowards: {
            cat: "motion",
            omitbg: !0,
            label: "指向 {where}",
            func: "blockMotionPointTowards",
            readName: "Point Towards",
            concept: "direction and turning",
            tags: ["see", "point", "direction"]
        },
        blockMotionGoTo: {
            cat: "motion",
            omitbg: !0,
            label: "移动到 x:{number:0} y:{number:0}",
            func: "blockMotionGoTo",
            readName: "Go To X-Y",
            concept: "simple motion",
            tags: ["movement", "motion", "goto", "move"]
        },
        blockMotionGoTowards: {
            cat: "motion",
            omitbg: !0,
            label: "移动到 {where}",
            func: "blockMotionGoTowards",
            readName: "Go To",
            concept: "advanced motion",
            tags: ["move", "goto", "reach"]
        },
        blockMotionGlide: {
            cat: "motion",
            omitbg: !0,
            label: "滑行 {number:1} 秒 到 x:{number:0} y:{number:0}",
            func: "blockMotionGlide",
            readName: "Glide To X-Y",
            concept: "advanced motion",
            tags: ["glide", "movement", "motion"]
        },
        blockMotionChangeXBy: {
            cat: "motion",
            omitbg: !0,
            label: "改变 x 值 {number:10} 像素",
            func: "blockMotionChangeXBy",
            readName: "Change X By",
            concept: "advanced motion",
            tags: ["move", "horizontal", "motion"]
        },
        blockMotionSetX: {
            cat: "motion",
            omitbg: !0,
            label: "设置 x 为 {number:0}",
            func: "blockMotionSetX",
            readName: "Set X To",
            concept: "advanced motion",
            tags: ["go to", "horizontal"]
        },
        blockMotionChangeYBy: {
            cat: "motion",
            omitbg: !0,
            label: "改变 y 值 {number:10} 像素",
            func: "blockMotionChangeYBy",
            readName: "Change Y By",
            concept: "advanced motion",
            tags: ["vertical",
                "y", "move", "go to"
            ]
        },
        blockMotionSetY: {
            cat: "motion",
            omitbg: !0,
            label: "设置 y 为 {number:0}",
            func: "blockMotionSetY",
            readName: "Set Y To",
            concept: "advanced motion",
            tags: ["vertical", "y", "go to", "move"]
        },
        blockMotionBounceOnEdge: {
            cat: "motion",
            omitbg: !0,
            label: "如果在边缘,反弹",
            func: "blockMotionBounceOnEdge",
            readName: "If On Edge, Bounce",
            concept: "screen bounds",
            tags: ["screen bound", "bounce", "inside"]
        },
        blockMotionRotationStyle: {
            cat: "motion",
            omitbg: !0,
            label: "设置旋转样式 {choice:rotatestyle}",
            func: "blockMotionRotationStyle",
            readName: "Set Rotation Style",
            concept: "direction and turning",
            tags: ["rotation", "rotate", "turning"]
        },
        valueMotionXPosition: {
            cat: "motion",
            watchable: !0,
            omitbg: !0,
            label: "x 位置",
            value: "number",
            func: "valueMotionXPosition",
            readName: "X Position",
            concept: "advanced motion",
            tags: ["value", "x", "horizontal"]
        },
        valueMotionYPosition: {
            cat: "motion",
            watchable: !0,
            omitbg: !0,
            label: "y 位置",
            value: "number",
            func: "valueMotionYPosition",
            readName: "Y Position",
            concept: "advanced motion",
            tags: ["value", "y", "vertical"]
        },
        valueMotionDirection: {
            cat: "motion",
            watchable: !0,
            omitbg: !0,
            label: "方向",
            value: "number",
            func: "valueMotionDirection",
            readName: "Direction",
            concept: "advanced motion",
            tags: ["angle", "direction", "value"]
        },
        valueMotionAngle: {
            cat: "motion",
            watchable: !0,
            omitbg: !0,
            label: "角度",
            value: "number",
            func: "valueMotionAngle",
            readName: "Direction",
            concept: "advanced motion",
            tags: ["angle", "direction", "value"]
        },
        blockHardwareMotor: {
            cat: "hardware",
            label: "马达动力 A:{number:0} B:{number:0}",
            func: "blockHardwareMotor",
            readName: "Power Motor",
            concept: "sensor control"
        },
        valueHardwareDistance: {
            cat: "hardware",
            label: "距离",
            func: "valueHardwareDistance",
            value: "string",
            readName: "Distance",
            concept: "sensor control"
        },
        valueHardwareTilt: {
            cat: "hardware",
            label: "倾斜",
            func: "valueHardwareTilt",
            value: "string",
            readName: "Tilt",
            concept: "sensor control"
        },
        blockMotionMotorOnFor: {
            cat: "motion",
            omitbg: !0,
            hidden: !0,
            label: "motor on for {number:1} secs",
            func: "blockMotionMotorOnFor",
            readName: "Motor On For",
            concept: "sensor control"
        },
        blockMotionMotorOn: {
            cat: "motion",
            omitbg: !0,
            hidden: !0,
            label: "马达启动",
            func: "blockMotionMotorOn",
            readName: "Motor On",
            concept: "sensor control"
        },
        blockMotionMotorOff: {
            cat: "motion",
            omitbg: !0,
            hidden: !0,
            label: "马达关闭",
            func: "blockMotionMotorOff",
            readName: "Motor Off",
            concept: "sensor control"
        },
        blockMotionMotorPower: {
            cat: "motion",
            omitbg: !0,
            hidden: !0,
            label: "马达动力 {number:100}",
            func: "blockMotionMotorPower",
            readName: "Set Motor Power To",
            concept: "sensor control"
        },
        blockMotionMotorDirection: {
            cat: "motion",
            omitbg: !0,
            hidden: !0,
            label: "马达 方向 {string:this way}",
            func: "blockMotionMotorDirection",
            readName: "Direction",
            concept: "sensor control"
        },
        blockAnimationSetSpeed: {
            cat: "animation",
            omitbg: !0,
            label: "设置动画速度为 {number:100}%",
            func: "blockAnimationSetSpeed",
            readName: "Set Animation Speed",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockLooksSetCharacterPart: {
            cat: "animation",
            omitbg: !0,
            label: "set part {charparts} to {charskins}",
            func: "blockLooksSetCharacterPart",
            readName: "Set Character Part",
            concept: "advanced animation",
            tags: ["animation"]
        },
        valueLooksGetCharacterPart: {
            cat: "animation",
            omitbg: !0,
            label: "get part {charparts}",
            func: "valueLooksGetCharacterPart",
            value: "string",
            readName: "Get Character Part",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationWaitFor: {
            cat: "animation",
            omitbg: !0,
            label: "等待动画 {animations}",
            func: "blockAnimationWaitFor",
            readName: "Wait For Animation",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationStop: {
            cat: "animation",
            omitbg: !0,
            label: "停止动画 {animations}",
            func: "blockAnimationStop",
            readName: "Stop Animation",
            concept: "advanced animation",
            tags: ["animation"]
        },
        valueAnimationIsRunning: {
            cat: "animation",
            omitbg: !0,
            label: "如果动画 {animations} 正在运行?",
            value: "boolean",
            func: "valueAnimationIsRunning",
            readName: "Is Animation Running",
            concept: "advanced animation",
            tags: ["animation"]
        },
        valueAnimationTime: {
            cat: "animation",
            omitbg: !0,
            label: "time for animation {costumes}",
            value: "number",
            func: "valueAnimationTime",
            readName: "Animation Time",
            concept: "advanced animation",
            tags: ["animation"]
        },
        registerAnimationDone: {
            cat: "animation",
            omitbg: !0,
            label: "当动画 {animations} 完成",
            hasFlap: !1,
            func: "registerAnimationDone",
            readName: "When Animation is Done",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationMoveBy: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "移动 {number:1} 秒 每秒 x:{number:0},y:{number:0} 以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationMoveBy",
            readName: "Animate Move By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationMoveTo: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "移动 {number:1} 秒 到 x:{number:0},y:{number:0} 以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationMoveTo",
            readName: "Animate Move To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationScaleBy: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "缩放 {number:1} 秒 每秒 {number:10}% 以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationScaleBy",
            readName: "Animate Scale By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationScaleTo: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "缩放 {number:1} 秒 到 {number:100}% 以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationScaleTo",
            readName: "Animate Scale To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationRotateBy: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "旋转 {number:1} 秒 每秒 {number:15} 度 以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationRotateBy",
            readName: "Animate Rotate By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationRotateTo: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "旋转 {number:1} 秒 到 {number:0} 度 以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationRotateTo",
            readName: "Animate Rotate To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationBezierBy: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "延贝塞尔曲线运动 {number:1} 秒 by x:{number:0},y:{number:0} with cx1:{number:0},cy1:{number:0} and cx2:{number:0},cy2:{number:0}  以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationBezierBy",
            readName: "Animate Bezier By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationBezierTo: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "延贝塞尔曲线运动 {number:1} 秒 到 x:{number:0},y:{number:0} with cx1:{number:0},cy1:{number:0} and cx2:{number:0},cy2:{number:0}  以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationBezierTo",
            readName: "Animate Bezier To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationEffectBy: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "change {number:1} secs for {choice:effect} by {number:100}  以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationEffectBy",
            readName: "Animate Effect By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationEffectTo: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "change {number:1} secs for {choice:effect} to {number:100}  以 {choice:easing} 模式 使用动画 {animations}",
            func: "blockAnimationEffectTo",
            readName: "Animate EffectTo",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSwitchCostume: {
            cat: "animation",
            hidden: !0,
            omitbg: !0,
            label: "switch costumes for {number:1} secs with {number:30} fps and prefixed {costumes} using {choice:easing} with name {animations}",
            func: "blockAnimationSwitchCostume",
            readName: "Animate Costumes",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationAnimate: {
            cat: "animation",
            omitbg: !0,
            label: "animate {costumes} at {number:30} fps\nfor {number:1} secs\nand name it {animations}",
            func: "blockAnimationAnimate",
            readName: "Animate",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleMoveTo: {
            cat: "animation",
            omitbg: !0,
            label: "move to x:{number:0},y:{number:0}\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleMoveTo",
            readName: "Animate Move To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleMoveBy: {
            cat: "animation",
            omitbg: !0,
            label: "move by x:{number:0},y:{number:0}\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleMoveBy",
            readName: "Animate Move By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleRotateTo: {
            cat: "animation",
            omitbg: !0,
            label: "rotate to {number:0} degrees\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleRotateTo",
            readName: "Animate Rotate To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleRotateBy: {
            cat: "animation",
            omitbg: !0,
            label: "rotate by {number:0} degrees\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleRotateBy",
            readName: "Animate Rotate By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleScaleTo: {
            cat: "animation",
            omitbg: !0,
            label: "scale to {number:0}%\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleScaleTo",
            readName: "Animate Scale To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleScaleBy: {
            cat: "animation",
            omitbg: !0,
            label: "scale by {number:0}%\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleScaleBy",
            readName: "Animate Scale By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleBezierTo: {
            cat: "animation",
            omitbg: !0,
            label: "bezier to x:{number:0},y:{number:0}\nwith cx1:{number:0},cy1:{number:0}\nand cx2:{number:0},cy2:{number:0}\nfor {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleBezierTo",
            readName: "Animate Bezier To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleBezierBy: {
            cat: "animation",
            omitbg: !0,
            label: "bezier by x:{number:0},y:{number:0}\nwith cx1:{number:0},cy1:{number:0}\nand cx2:{number:0},cy2:{number:0}\nfor {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleBezierBy",
            readName: "Animate Bezier By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleEffectTo: {
            cat: "animation",
            label: "change {choice:effect} to {number:0}\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleEffectTo",
            readName: "Animate Effect To",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleEffectBy: {
            cat: "animation",
            label: "change {choice:effect} by {number:25}\nin {number:1} secs\nand name it {animations}",
            func: "blockAnimationSimpleEffectBy",
            readName: "Animate Effect By",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleSwitchCostume: {
            cat: "animation",
            omitbg: !0,
            label: "animate {costumes}",
            func: "blockAnimationSimpleSwitchCostume",
            readName: "Animate",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockAnimationSimpleSwitchCostumeAndWait: {
            cat: "animation",
            omitbg: !0,
            label: "animate {costumes} and wait",
            func: "blockAnimationSimpleSwitchCostumeAndWait",
            readName: "Animate and Wait",
            concept: "advanced animation",
            tags: ["animation"]
        },
        blockLooksSwitchCostume: {
            cat: "looks",
            omitbg: !0,
            label: "switch to costume {costumes}",
            func: "blockLooksSwitchCostume",
            readName: "Switch To Costume",
            concept: "advanced costume handling",
            tags: ["change look", "switch costume"]
        },
        blockLooksNextCostume: {
            cat: "looks",
            omitbg: !0,
            label: "next costume",
            func: "blockLooksNextCostume",
            readName: "Next Costume",
            concept: "simple costume handling",
            tags: ["change look", "change costume"]
        },
        blockLooksFirstCostumeInGroup: {
            cat: "looks",
            omitbg: !0,
            label: "first costume starting with {costumes}",
            func: "blockLooksFirstCostumeInGroup",
            readName: "First Costume Starting With",
            concept: "advanced costume handling",
            tags: ["change look", "change costume"]
        },
        blockLooksNextCostumeInGroup: {
            cat: "looks",
            omitbg: !0,
            label: "next costume starting with {costumes}",
            func: "blockLooksNextCostumeInGroup",
            readName: "Next Costume Starting With",
            concept: "advanced costume handling",
            tags: ["change look", "change costume"]
        },
        valueLooksCostumeNum: {
            cat: "looks",
            watchable: !0,
            omitbg: !0,
            label: "costume #",
            value: "number",
            func: "valueLooksCostumeNum",
            readName: "Costume #",
            concept: "advanced costume handling",
            tags: ["value"]
        },
        valueLooksCostumeName: {
            cat: "looks",
            watchable: !0,
            omitbg: !0,
            label: "costume name",
            value: "string",
            func: "valueLooksCostumeName",
            readName: "Costume Name",
            concept: "advanced costume handling",
            tags: ["value"]
        },
        blockLooksBackgroundColor: {
            cat: "looks",
            label: "set background color {color}",
            func: "blockLooksBackgroundColor",
            readName: "Background Color",
            concept: "advanced costume handling",
            tags: ["change background"]
        },
        blockLooksSwitchBackground: {
            cat: "looks",
            label: "switch to background {scenes}",
            func: "blockLooksSwitchBackground",
            readName: "Switch To Scene",
            concept: "advanced costume handling",
            tags: ["change background"]
        },
        blockLooksSwitchBackgroundAndWait: {
            cat: "looks",
            label: "switch to background {scenes} and wait",
            func: "blockLooksSwitchBackgroundAndWait",
            readName: "Switch To Scene And Wait",
            concept: "advanced costume handling",
            tags: ["change background"]
        },
        blockLooksNextBackground: {
            cat: "looks",
            label: "next background",
            func: "blockLooksNextBackground",
            readName: "Next Scene",
            concept: "simple costume handling"
        },
        blockLooksFirstBackgroundInGroup: {
            cat: "looks",
            label: "first background starting with {costumes}",
            func: "blockLooksFirstBackgroundInGroup",
            readName: "First Scene Starting With",
            concept: "advanced costume handling",
            tags: ["change look", "change background"]
        },
        blockLooksNextBackgroundInGroup: {
            cat: "looks",
            label: "next background starting with {costumes}",
            func: "blockLooksNextBackgroundInGroup",
            readName: "Next Scene Starting With",
            concept: "advanced costume handling",
            tags: ["change look", "change background"]
        },
        valueLooksBackground: {
            cat: "looks",
            watchable: !0,
            omitactor: !0,
            label: "background #",
            value: "number",
            func: "valueLooksBackground",
            readName: "Scene #",
            concept: "advanced costume handling"
        },
        valueLooksBackgroundName: {
            cat: "looks",
            watchable: !0,
            label: "background name",
            value: "number",
            func: "valueLooksBackgroundName",
            readName: "Scene Name",
            concept: "advanced costume handling"
        },
        blockLooksSetLabel: {
            cat: "looks",
            omitbg: !0,
            label: "set label to {string:Hello} {varargs}",
            func: "blockLooksSetLabel",
            readName: "Set Label To",
            concept: "input/output",
            tags: ["bubble", "talk", "say", "output"]
        },
        blockLooksSetBubble: {
            cat: "looks",
            label: "set bubble to {choice:bubblestyle}",
            func: "blockLooksSetBubble",
            readName: "Set Bubble To",
            concept: "input/output",
            tags: ["talk"]
        },
        blockLooksSetBubbleDock: {
            cat: "looks",
            label: "set bubble dock to {choice:bubbledock}",
            func: "blockLooksSetBubbleDock",
            readName: "Set Bubble Dock To",
            concept: "input/output",
            tags: ["talk"]
        },
        blockLooksSetBubbleWidth: {
            cat: "looks",
            label: "set bubble width to {number:50}%",
            func: "blockLooksSetBubbleWidth",
            readName: "Set Bubble Width To",
            concept: "input/output",
            tags: ["talk"]
        },
        blockLooksSayFor: {
            cat: "looks",
            label: "say {string:Hello} {varargs} for {number:2} secs",
            func: "blockLooksSayFor",
            readName: "Say For",
            concept: "input/output",
            tags: ["bubble", "talk", "output", "time"]
        },
        blockLooksSay: {
            cat: "looks",
            label: "say {string:Hello} {varargs}",
            func: "blockLooksSay",
            readName: "Say",
            concept: "input/output",
            tags: ["talk"]
        },
        blockLooksThinkFor: {
            cat: "looks",
            label: "think {string:Hmm} {varargs} for {number:2} secs",
            func: "blockLooksThinkFor",
            readName: "Think For",
            concept: "input/output",
            tags: ["bubble", "output"]
        },
        blockLooksThink: {
            cat: "looks",
            label: "think {string:Hmm} {varargs}",
            func: "blockLooksThink",
            readName: "Think",
            concept: "input/output"
        },
        blockLooksChangeEffect: {
            cat: "looks",
            label: "change {choice:effect} effect by {number:25}",
            func: "blockLooksChangeEffect",
            readName: "Change Effect By",
            concept: "graphic effects",
            tags: ["transparent", "visual", "special effect", "alpha", "opacity"]
        },
        blockLooksSetEffect: {
            cat: "looks",
            label: "set {choice:effect} effect to {number:0}",
            func: "blockLooksSetEffect",
            readName: "Set Effect To",
            concept: "graphic effects",
            tags: ["transparent", "visual", "special effect", "alpha", "opacity"]
        },
        blockLooksClearEffects: {
            cat: "looks",
            label: "clear graphic effects",
            func: "blockLooksClearEffects",
            readName: "Clear Graphic Effects",
            concept: "graphic effects",
            tags: ["special effect"]
        },
        blockLooksChangeSizeBy: {
            cat: "looks",
            omitbg: !0,
            label: "change size by {number:10}%",
            func: "blockLooksChangeSizeBy",
            readName: "Change Size By",
            concept: "resize actor",
            tags: ["size", "resize", "bigger", "smaller"]
        },
        blockLooksSetSize: {
            cat: "looks",
            omitbg: !0,
            label: "set size to {number:100}%",
            func: "blockLooksSetSize",
            readName: "Set Size To",
            concept: "resize actor",
            tags: "resize;bigger;smaller;make bigger;make smaller;shrink;enlarge".split(";")
        },
        valueLooksSize: {
            cat: "looks",
            watchable: !0,
            omitbg: !0,
            label: "size",
            value: "number",
            func: "valueLooksSize",
            readName: "Size",
            concept: "resize actor",
            tags: ["resize", "bigger", "smaller", "make bigger", "make smaller"]
        },
        blockLooksShow: {
            cat: "looks",
            omitbg: !0,
            label: "show",
            func: "blockLooksShow",
            readName: "Show",
            concept: "visibility",
            tags: ["visibility"]
        },
        blockLooksHide: {
            cat: "looks",
            omitbg: !0,
            label: "hide",
            func: "blockLooksHide",
            readName: "Hide",
            concept: "visibility",
            tags: ["visibility"]
        },
        valueLooksIsHidden: {
            cat: "looks",
            watchable: !0,
            omitbg: !0,
            label: "is hidden?",
            value: "boolean",
            func: "valueLooksIsHidden",
            readName: "Is Hidden?",
            concept: "visibility",
            tags: ["visibility"]
        },
        blockLooksLayer: {
            cat: "looks",
            omitbg: !0,
            label: "set layer to {number}",
            func: "blockLooksLayer",
            readName: "Set Layer",
            concept: "layers",
            tags: ["layers"]
        },
        valueLooksLayer: {
            cat: "looks",
            omitbg: !0,
            label: "get layer",
            func: "valueLooksLayer",
            value: "number",
            readName: "Get Layer",
            concept: "layers",
            tags: ["layers"]
        },
        blockLooksGoFront: {
            cat: "looks",
            omitbg: !0,
            label: "go to front",
            func: "blockLooksGoFront",
            readName: "Go To Front",
            concept: "layers",
            tags: ["layers"]
        },
        blockLooksGoBack: {
            cat: "looks",
            omitbg: !0,
            label: "go to back",
            func: "blockLooksGoBack",
            readName: "Go To Back",
            concept: "layers",
            tags: ["layers"]
        },
        blockLooksMoveBack: {
            cat: "looks",
            omitbg: !0,
            label: "go back {number:1} layers",
            func: "blockLooksMoveBack",
            readName: "Go Back Layers",
            concept: "layers"
        },
        blockLooksMoveFront: {
            cat: "looks",
            omitbg: !0,
            label: "go forward {number:1} layers",
            func: "blockLooksMoveFront",
            readName: "Go Forward Layers",
            concept: "layers"
        },
        blockLooksDialog: {
            cat: "looks",
            hidden: !0,
            label: "show dialog with {string}",
            func: "blockLooksDialog",
            readName: "System Dialog",
            concept: "input/output",
            tags: []
        },
        blockLooksViewportCamera: {
            cat: "looks",
            hidden: !0,
            label: "set viewport camera to {actor}",
            func: "blockLooksViewportCamera",
            readName: "Viewport Camera",
            concept: "level design",
            tags: ["level"]
        },
        blockLooksPromptChoices: {
            cat: "looks",
            hidden: !0,
            label: "show dialog with {string} and choices {string:OK} {varargs}",
            func: "blockLooksPromptChoices",
            readName: "System Dialog",
            concept: "input/output",
            tags: []
        },
        blockLooksVideo: {
            cat: "looks",
            hidden: !0,
            omitactor: !0,
            label: "turn video {choice:videoviewtype}",
            func: "blockLooksVideo",
            readName: "Turn Video",
            concept: "video",
            tags: ["video"]
        },
        blockLooksVideoTransparency: {
            cat: "looks",
            hidden: !0,
            omitactor: !0,
            label: "set video transparency to {number:100}%",
            func: "blockLooksVideoTransparency",
            readName: "Set Video Transparency To",
            concept: "video",
            tags: ["video"]
        },
        blockLooksSetLevel: {
            cat: "looks",
            label: "set level to {level}",
            hasSlot: !1,
            func: "blockLooksSetLevel",
            readName: "Set level to",
            concept: "level design",
            tags: ["level"]
        },
        blockLooksSetLevelWithActors: {
            cat: "looks",
            label: "set level to {level} with actors {varargs:actor}",
            hasSlot: !1,
            func: "blockLooksSetLevelWithActors",
            readName: "Set level to",
            concept: "level design",
            tags: ["level"]
        },
        valueLooksGetLevel: {
            cat: "looks",
            label: "get current level",
            func: "valueLooksGetLevel",
            value: "string",
            readName: "Get current level",
            concept: "level design",
            tags: ["level"]
        },
        valueLooksGetLevelNum: {
            cat: "looks",
            label: "get current level number",
            func: "valueLooksGetLevelNum",
            value: "number",
            readName: "Get current level",
            concept: "level design",
            tags: ["level"]
        },
        valueLooksNumLevels: {
            cat: "looks",
            label: "get number of levels",
            func: "valueLooksNumLevels",
            value: "number",
            readName: "Get number of levels",
            concept: "level design",
            tags: ["level"]
        },
        blockLooksSetZoom: {
            cat: "looks",
            hidden: !0,
            label: "set stage zoom to {number:100} %",
            func: "blockLooksSetZoom",
            readName: "Set canvas zoom",
            concept: "level design",
            tags: ["level"]
        },
        valueLooksGetZoom: {
            cat: "looks",
            hidden: !0,
            label: "get stage zoom",
            func: "valueLooksGetZoom",
            value: "number",
            readName: "Get canvas zoom",
            concept: "level design",
            tags: ["level"]
        },
        valueLooksGetTileAt: {
            cat: "looks",
            hidden: !0,
            label: "get tile at column:{number} row:{number}",
            func: "valueLooksGetTileAt",
            value: "string",
            readName: "Get tile at",
            concept: "level design",
            tags: ["level"]
        },
        valueLooksGetTileAtPoint: {
            cat: "looks",
            hidden: !0,
            label: "get tile at point x:{number} y:{number}",
            func: "valueLooksGetTileAtPoint",
            value: "string",
            readName: "Get tile at point",
            concept: "level design",
            tags: ["level"]
        },
        blockLooksSetTileAt: {
            cat: "looks",
            hidden: !0,
            label: "set tile at column:{number} row:{number} to {tiles}",
            func: "blockLooksSetTileAt",
            readName: "Set tile at",
            concept: "level design",
            tags: ["level"]
        },
        blockLooksSetTileAtPoint: {
            cat: "looks",
            hidden: !0,
            label: "set tile at point x:{number} y:{number} to {tiles}",
            func: "blockLooksSetTileAtPoint",
            readName: "Set tile at point",
            concept: "level design",
            tags: ["level"]
        },
        valueSensingVideo: {
            cat: "sensing",
            hidden: !0,
            label: "video {choice:videosensetype} on{where}?",
            value: "number",
            func: "valueSensingVideo",
            readName: "Video On?",
            concept: "detect conditions",
            tags: ["video", "detect"]
        },
        valueSensingTouchingSprite: {
            cat: "sensing",
            omitbg: !0,
            label: "touching {where}?",
            value: "boolean",
            func: "valueSensingTouchingSprite",
            readName: "Touching?",
            concept: "detect conditions"
        },
        valueSensingTouchingCloneOf: {
            cat: "sensing",
            omitbg: !0,
            label: "touching clone of {where}?",
            value: "boolean",
            func: "valueSensingTouchingCloneOf",
            readName: "Touching Clone Of?",
            concept: "detect conditions"
        },
        valueSensingTouchingColor: {
            cat: "sensing",
            omitbg: !0,
            label: "touching color {color}?",
            value: "boolean",
            func: "valueSensingTouchingColor",
            readName: "Touching Color?",
            concept: "color detection"
        },
        valueSensingSeeColor: {
            cat: "sensing",
            omitbg: !0,
            label: "color {color} is touching {color}?",
            value: "boolean",
            func: "valueSensingSeeColor",
            readName: "Color Is Touching?",
            concept: "color detection"
        },
        blockSensingAskAndWait: {
            cat: "sensing",
            label: "ask {string:What is your name} {varargs} and wait",
            func: "blockSensingAskAndWait",
            readName: "Ask And Wait",
            concept: "input/output"
        },
        blockSensingAskChoices: {
            cat: "sensing",
            label: "ask {string:Yes or no} with choices {string:ok} {varargs}",
            func: "blockSensingAskChoices",
            readName: "Ask With Choices",
            concept: "input/output"
        },
        valueSensingAnswer: {
            cat: "sensing",
            watchable: !0,
            label: "answer",
            value: "string",
            func: "valueSensingAnswer",
            readName: "Answer",
            concept: "input/output"
        },
        valueSensingTiltAngle: {
            cat: "sensing",
            watchable: !0,
            label: "tilt angle",
            value: "number",
            func: "valueSensingTiltAngle",
            readName: "Tilt Angle",
            concept: "advanced motion"
        },
        valueSensingTiltAmount: {
            cat: "sensing",
            watchable: !0,
            label: "tilt amount",
            value: "number",
            func: "valueSensingTiltAmount",
            readName: "Tilt Amount",
            concept: "advanced motion"
        },
        valueSensingAccelerometerX: {
            cat: "sensing",
            watchable: !0,
            label: "x tilt",
            value: "number",
            func: "valueSensingAccelerometerX",
            readName: "Accelerometer X",
            concept: "advanced motion"
        },
        valueSensingAccelerometerY: {
            cat: "sensing",
            watchable: !0,
            label: "y tilt",
            value: "number",
            func: "valueSensingAccelerometerY",
            readName: "Accelerometer Y",
            concept: "advanced motion"
        },
        valueSensingMouseX: {
            cat: "sensing",
            watchable: !0,
            label: "mouse x",
            value: "number",
            func: "valueSensingMouseX",
            readName: "Mouse X",
            concept: "advanced motion"
        },
        valueSensingMouseY: {
            cat: "sensing",
            watchable: !0,
            label: "mouse y",
            value: "number",
            func: "valueSensingMouseY",
            readName: "Mouse Y",
            concept: "advanced motion"
        },
        valueSensingMouseDown: {
            cat: "sensing",
            watchable: !0,
            label: "mouse down?",
            value: "boolean",
            func: "valueSensingMouseDown",
            readName: "Mouse Down?",
            concept: "detect conditions"
        },
        valueSensingKeyPressed: {
            cat: "sensing",
            label: "key {choice:keys} pressed?",
            value: "boolean",
            func: "valueSensingKeyPressed",
            readName: "Key Pressed?",
            concept: "detect conditions"
        },
        valueSensingDistanceToSprite: {
            cat: "sensing",
            omitbg: !0,
            label: "distance to {whereall}?",
            value: "number",
            func: "valueSensingDistanceToSprite",
            readName: "Distance To",
            concept: "advanced motion",
            tags: ["value"]
        },
        blockSensingResetTimer: {
            cat: "sensing",
            label: "reset timer",
            func: "blockSensingResetTimer",
            readName: "Reset Timer",
            concept: "timer"
        },
        valueSensingTimer: {
            cat: "sensing",
            watchable: !0,
            label: "timer",
            value: "number",
            func: "valueSensingTimer",
            readName: "Timer",
            concept: "timer"
        },
        blockSensingSpriteProperty: {
            cat: "sensing",
            label: "set {choice:spriteprop} of {whereall} to {string:0}",
            func: "blockSensingSpriteProperty",
            readName: "Property Of",
            concept: "resize actor",
            tags: "value;variable;variables;property;properties;x position;y position;angle;direction;layer;rotation style;label;say;costume #;costume name;size;volume;width;height;density;friction;restitution;angular velocity;angular damping;linear damping;x linear velocity;y linear velocity".split(";")
        },
        valueSensingSpriteProperty: {
            cat: "sensing",
            label: "{choice:spriteprop} of {whereall}",
            value: "number",
            func: "valueSensingSpriteProperty",
            readName: "Property Of",
            concept: "resize actor",
            tags: "value;variable;variables;property;properties;x position;y position;angle;direction;layer;rotation style;label;say;costume #;costume name;size;volume;width;height;density;friction;restitution;angular velocity;angular damping;linear damping;x linear velocity;y linear velocity".split(";")
        },
        valueSensingActorName: {
            cat: "sensing",
            label: "my actor name",
            value: "string",
            func: "valueSensingActorName",
            readName: "Name Of Actor",
            concept: "resize actor",
            tags: ["value"]
        },
        valueSensingActorNameAt: {
            cat: "sensing",
            label: "name of actor at {number}",
            value: "string",
            func: "valueSensingActorNameAt",
            readName: "Name Of Actor",
            concept: "resize actor",
            tags: ["value"]
        },
        valueSensingNumActors: {
            cat: "sensing",
            label: "# of actors",
            value: "number",
            func: "valueSensingNumActors",
            readName: "# Of Actors",
            concept: "resize actor",
            tags: ["value"]
        },
        valueSensingTouchedActorName: {
            cat: "sensing",
            label: "name of actor touched",
            value: "string",
            func: "valueSensingTouchedActorName",
            readName: "Name Of Actor Touched",
            concept: "touching actor",
            tags: ["value"]
        },
        valueSensingSoundLevel: {
            cat: "sensing",
            hidden: !0,
            watchable: !0,
            label: "loudness",
            value: "number",
            func: "valueSensingSoundLevel",
            readName: "Loudness",
            concept: "sensor control",
            tags: ["value"]
        },
        valueSensingIsLoud: {
            cat: "sensing",
            hidden: !0,
            label: "loud?",
            value: "boolean",
            func: "valueSensingIsLoud",
            readName: "Loud?",
            concept: "sensor control",
            tags: ["value"]
        },
        valueSensingSensor: {
            cat: "sensing",
            hidden: !0,
            label: "{string:slider} sensor value",
            value: "number",
            func: "valueSensingSensor",
            readName: "Sensor Value",
            concept: "sensor control",
            tags: ["value"]
        },
        valueSensingSensorPressed: {
            cat: "sensing",
            hidden: !0,
            label: "sensor {string:button pressed}?",
            value: "boolean",
            func: "valueSensingSensorPressed",
            readName: "Sensor?",
            concept: "sensor control",
            tags: ["value"]
        },
        valueSensingDateTime: {
            cat: "sensing",
            label: "{choice:datetime} of date/time",
            value: "number",
            func: "valueSensingDateTime",
            readName: "Of Date/Time",
            concept: "system date",
            tags: "value system time date year month day hours minutes seconds milliseconds time".split(" ")
        },
        valueSensingScreenLeft: {
            cat: "sensing",
            hidden: !1,
            label: "screen left",
            value: "number",
            func: "valueSensingScreenLeft",
            readName: "Screen Left",
            concept: "screen bounds",
            tags: ["border", "edge", "value"]
        },
        valueSensingScreenRight: {
            cat: "sensing",
            hidden: !1,
            label: "screen right",
            value: "number",
            func: "valueSensingScreenRight",
            readName: "Screen Right",
            concept: "screen bounds",
            tags: ["border", "edge", "value"]
        },
        valueSensingScreenTop: {
            cat: "sensing",
            hidden: !1,
            label: "screen top",
            value: "number",
            func: "valueSensingScreenTop",
            readName: "Screen Top",
            concept: "screen bounds",
            tags: ["border", "edge", "value"]
        },
        valueSensingScreenBottom: {
            cat: "sensing",
            hidden: !1,
            label: "screen bottom",
            value: "number",
            func: "valueSensingScreenBottom",
            readName: "Screen Bottom",
            concept: "screen bounds",
            tags: ["border", "edge", "value"]
        },
        valueSensingStageProperty: {
            cat: "sensing",
            label: "stage property {stageproperty}",
            value: "number",
            func: "valueSensingStageProperty",
            readName: "Stage Property",
            concept: "stage property",
            tags: ["stage", "property", "properties", "value"]
        },
        blockSensingSetTag: {
            cat: "sensing",
            label: "set tag to {string}",
            func: "blockSensingSetTag",
            readName: "Set Tag",
            concept: "actor properties",
            tags: ["actor", "property", "properties", "value"]
        },
        valueSensingGetTag: {
            cat: "sensing",
            label: "get tag of {actor}",
            func: "valueSensingGetTag",
            value: "string",
            readName: "Get Tag",
            concept: "actor properties",
            tags: ["actor", "property", "properties", "value", "tag"]
        },
        valueSensingUserId: {
            cat: "sensing",
            label: "user ID",
            value: "string",
            func: "valueSensingUserId",
            readName: "User ID",
            concept: "identification",
            tags: ["value", "cloud", "user"]
        },
        valueSensingUserFirstName: {
            cat: "sensing",
            label: "user first name",
            value: "string",
            func: "valueSensingUserFirstName",
            readName: "User First Name",
            concept: "identification",
            tags: ["value", "cloud", "user", "name"]
        },
        blockSoundPlay: {
            cat: "sound",
            label: "play sound {sounds}",
            func: "blockSoundPlay",
            readName: "Play Sound",
            concept: "simple sound playing",
            tags: ["music", "media"]
        },
        blockSoundPlayUntilDone: {
            cat: "sound",
            label: "play sound {sounds} until done",
            func: "blockSoundPlayUntilDone",
            readName: "Play Sound Until Done",
            concept: "simple sound playing",
            tags: ["music", "media"]
        },
        blockSoundStopAll: {
            cat: "sound",
            label: "stop all sounds",
            func: "blockSoundStopAll",
            readName: "Stop All Sounds",
            concept: "music and instruments"
        },
        blockSoundStopActor: {
            cat: "sound",
            label: "stop actor sounds",
            func: "blockSoundStopActor",
            readName: "Stop Current Actor Sounds",
            concept: "music and instruments"
        },
        blockSoundPlayDrum: {
            cat: "sound",
            label: "play drum {choice:drums} for {number:0.2} beats",
            func: "blockSoundPlayDrum",
            readName: "Play Drum For Beats",
            concept: "music and instruments",
            tags: ["music"]
        },
        blockSoundRest: {
            cat: "sound",
            label: "rest for {number:0.2} beats",
            func: "blockSoundRest",
            readName: "Rest For Beats",
            concept: "music and instruments",
            tags: ["music"]
        },
        blockSoundPlayNote: {
            cat: "sound",
            label: "play note {number:60} for {number:0.5} beats",
            func: "blockSoundPlayNote",
            readName: "Play Note For Beats",
            concept: "music and instruments",
            tags: ["music"]
        },
        blockSoundSetInstrument: {
            cat: "sound",
            label: "set instrument to {choice:instruments}",
            func: "blockSoundSetInstrument",
            readName: "Set Instrument To",
            concept: "music and instruments",
            tags: ["music"]
        },
        blockSoundChangeVolume: {
            cat: "sound",
            label: "change volume by {number:-10}",
            func: "blockSoundChangeVolume",
            readName: "Change Volume By",
            concept: "music and instruments",
            tags: ["music"]
        },
        blockSoundSetVolume: {
            cat: "sound",
            label: "set volume to {number:100}%",
            func: "blockSoundSetVolume",
            readName: "Set Volume To",
            concept: "music and instruments",
            tags: ["music"]
        },
        valueSoundVolume: {
            cat: "sound",
            watchable: !0,
            label: "volume",
            value: "number",
            value: "number",
            func: "valueSoundVolume",
            readName: "Volume",
            concept: "music and instruments",
            tags: ["value"]
        },
        blockSoundChangeTempo: {
            cat: "sound",
            label: "change tempo by {number:20}",
            func: "blockSoundChangeTempo",
            readName: "Change Tempo By",
            concept: "music and instruments",
            tags: ["music"]
        },
        blockSoundSetTempo: {
            cat: "sound",
            label: "set tempo to {number:60} bpm",
            func: "blockSoundSetTempo",
            readName: "Set Tempo To",
            concept: "music and instruments",
            tags: ["music"]
        },
        valueSoundTempo: {
            cat: "sound",
            watchable: !0,
            label: "tempo",
            value: "number",
            func: "valueSoundTempo",
            readName: "Tempo",
            concept: "music and instruments",
            tags: ["music"]
        },
        valueOpAdd: {
            cat: "operator",
            label: "{number} + {number}",
            value: "number",
            func: "valueOpAdd",
            readName: "Add (+)",
            concept: "basic math",
            tags: ["plus", "addition"]
        },
        valueOpSubtract: {
            cat: "operator",
            label: "{number} - {number}",
            value: "number",
            func: "valueOpSubtract",
            readName: "Subtract (-)",
            concept: "basic math",
            tags: ["minus", "subtraction"]
        },
        valueOpMultiply: {
            cat: "operator",
            label: "{number} * {number}",
            value: "number",
            func: "valueOpMultiply",
            readName: "Multiple (*)",
            concept: "basic math",
            tags: ["into", "multiply", "multiplication", "times"]
        },
        valueOpDivide: {
            cat: "operator",
            label: "{number} / {number}",
            value: "number",
            func: "valueOpDivide",
            readName: "Divide (/)",
            concept: "basic math",
            tags: ["divide by", "division"]
        },
        valueOpRandom: {
            cat: "operator",
            label: "pick random {number:1} to {number:10}",
            value: "number",
            func: "valueOpRandom",
            readName: "Pick Random",
            concept: "basic math",
            tags: ["gamble", "any", "chance", "choice"]
        },
        valueOpLess: {
            cat: "operator",
            label: "{string} < {string}",
            value: "boolean",
            func: "valueOpLess",
            readName: "Less Than (<)",
            concept: "basic math",
            tags: ["logical", "less than", "compare"]
        },
        valueOpEqual: {
            cat: "operator",
            label: "{string} = {string}",
            value: "boolean",
            func: "valueOpEqual",
            readName: "Equal To (=)",
            concept: "basic math",
            tags: ["logical", "equals", "compare"]
        },
        valueOpGreater: {
            cat: "operator",
            label: "{string} > {string}",
            value: "boolean",
            func: "valueOpGreater",
            readName: "Greater Than (>)",
            concept: "basic math",
            tags: ["logical", "greater than",
                "compare"
            ]
        },
        valueOpAnd: {
            cat: "operator",
            label: "{boolean} and {boolean}",
            value: "boolean",
            func: "valueOpAnd",
            readName: "And",
            concept: "advanced math",
            tags: ["logical"]
        },
        valueOpOr: {
            cat: "operator",
            label: "{boolean} or {boolean}",
            value: "boolean",
            func: "valueOpOr",
            readName: "Or",
            concept: "advanced math",
            tags: ["logical"]
        },
        valueOpNot: {
            cat: "operator",
            label: "not {boolean}",
            value: "boolean",
            func: "valueOpNot",
            readName: "Not",
            concept: "advanced math",
            tags: ["logical"]
        },
        valueOpJoin: {
            cat: "operator",
            label: "join {string:hello} {string:world} {varargs}",
            value: "string",
            func: "valueOpJoin",
            readName: "Join",
            concept: "string handling",
            tags: ["strings", "add", "string", "strings", "text"]
        },
        valueOpLetter: {
            cat: "operator",
            label: "letter {number:1} of {any:world}",
            value: "string",
            func: "valueOpLetter",
            readName: "Letter Of",
            concept: "advanced string handling",
            tags: ["value", "string", "strings", "text"]
        },
        valueOpLength: {
            cat: "operator",
            label: "length of {string:world}",
            value: "number",
            func: "valueOpLength",
            readName: "Length Of",
            concept: "advanced string handling",
            tags: ["value", "string",
                "strings", "text"
            ]
        },
        valueOpMod: {
            cat: "operator",
            label: " {number} mod {number}",
            value: "number",
            func: "valueOpMod",
            readName: "Mod",
            concept: "advanced math",
            tags: ["mod", "modulo", "remainder"]
        },
        valueOpRound: {
            cat: "operator",
            label: "round {number}",
            value: "number",
            func: "valueOpRound",
            readName: "Round",
            concept: "advanced math",
            tags: ["round", "round up", "integer"]
        },
        valueOpMath: {
            cat: "operator",
            label: "{choice:math} of {number:10}",
            value: "number",
            func: "valueOpMath",
            readName: "Math Function Of",
            concept: "expert math",
            tags: "abs;floor;ceiling;int;sqrt;sin;cos;tan;asin;acos;atan;ln;log;e^;10^;trigonometry;math operator".split(";")
        },
        valueOpMath2: {
            cat: "operator",
            label: "{choice:math2} of {number:10} and {number:10}",
            value: "number",
            func: "valueOpMath2",
            readName: "Math Function Of",
            concept: "expert math",
            tags: "atan2;atan2rad;max;min;pow;math operator".split(";")
        },
        valueOpConstants: {
            cat: "operator",
            label: " {choice:constants}",
            value: "number",
            func: "valueOpConstants",
            readName: "Math Constants",
            concept: "expert math",
            tags: "value pi e ln ln2 ln10 log2e log10e".split(" ")
        },
        valueOpBinary: {
            cat: "operator",
            label: " {string} {choice:operator} {string}",
            value: "number",
            func: "valueOpBinary",
            readName: "Binary Operators",
            concept: "advanced math",
            tags: "logical binary math + - * / = == < <= > >= != & && and || or ^ xor << >> >>>".split(" ")
        },
        valueOpBitNot: {
            cat: "operator",
            label: "bitwise not {number}",
            value: "number",
            func: "valueOpBitNot",
            readName: "Bitwise Not",
            concept: "advanced math",
            tags: ["logical", "bit"]
        },
        valueOpExpression: {
            cat: "operator",
            label: "expression {string} {button:edit}",
            value: "number",
            func: "valueOpExpression",
            readName: "Expression",
            concept: "advanced math",
            tags: ["math", "expression"]
        },
        valueOpTextSplit: {
            cat: "operator",
            label: "split {string:hello world} by {string: }",
            value: "list",
            func: "valueOpTextSplit",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        valueOpTextReplace: {
            cat: "operator",
            label: "replace {string:hello} in {string:hello world} with {string:hi}",
            value: "string",
            func: "valueOpTextReplace",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        valueOpTextIndex: {
            cat: "operator",
            label: "index of {string:world} in {string:hello world}",
            value: "number",
            func: "valueOpTextIndex",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        valueOpTextLastIndex: {
            cat: "operator",
            label: "last index of {string:l} in {string:hello}",
            value: "number",
            func: "valueOpTextLastIndex",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        valueOpTextSubstring: {
            cat: "operator",
            label: "substring of {string:hello} from {number:2} to {number:5}",
            value: "string",
            func: "valueOpTextSubstring",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        valueOpTextTransform: {
            cat: "operator",
            label: "perform {choice:texttransform} on {string:Hello World}",
            value: "string",
            func: "valueOpTextTransform",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        valueOpTextFormat: {
            cat: "operator",
            label: "format {string:hello {0}} with {varargs}",
            value: "string",
            func: "valueOpTextFormat",
            readName: "split",
            concept: "advanced text",
            tags: ["text", "string", "strings"]
        },
        blockPenClear: {
            cat: "pen",
            label: "clear",
            func: "blockPenClear",
            readName: "Clear",
            concept: "simple drawing",
            tags: ["draw"]
        },
        blockPenDown: {
            cat: "pen",
            omitbg: !0,
            label: "pen down",
            func: "blockPenDown",
            readName: "Pen Down",
            concept: "simple drawing",
            tags: ["draw"]
        },
        blockPenUp: {
            cat: "pen",
            omitbg: !0,
            label: "pen up",
            func: "blockPenUp",
            readName: "Pen Up",
            concept: "simple drawing",
            tags: ["draw"]
        },
        blockPenSetColor: {
            cat: "pen",
            label: "set pen color to {color}",
            func: "blockPenSetColor",
            readName: "Set Pen Color To",
            concept: "pen color",
            tags: ["draw"]
        },
        blockPenChangeHue: {
            cat: "pen",
            label: "change pen color by {number:10}",
            func: "blockPenChangeHue",
            readName: "Change Pen Color By",
            concept: "pen color",
            tags: ["draw"]
        },
        blockPenSetHue: {
            cat: "pen",
            label: "set pen color to {number:0}",
            func: "blockPenSetHue",
            readName: "Set Pen Color To",
            concept: "pen color",
            tags: ["color", "rgb", "hue", "draw"]
        },
        blockPenChangeShade: {
            cat: "pen",
            label: "change pen shade by {number:10}",
            func: "blockPenChangeShade",
            readName: "Change Pen Shade By",
            concept: "pen shade",
            tags: ["draw"]
        },
        blockPenSetShade: {
            cat: "pen",
            label: "set pen shade to {number:50}",
            func: "blockPenSetShade",
            readName: "Set Pen Shade To",
            concept: "pen shade"
        },
        blockPenChangeSize: {
            cat: "pen",
            label: "change pen size by {number:1}",
            func: "blockPenChangeSize",
            readName: "Change Pen Size By",
            concept: "pen size",
            tags: ["draw"]
        },
        blockPenSetSize: {
            cat: "pen",
            label: "set pen size to {number:1}",
            func: "blockPenSetSize",
            readName: "Set Pen Size To",
            concept: "pen size",
            tags: ["draw"]
        },
        blockPenStamp: {
            cat: "pen",
            omitbg: !0,
            label: "stamp",
            func: "blockPenStamp",
            readName: "Stamp",
            concept: "simple drawing",
            tags: ["draw"]
        },
        blockPenSetFont: {
            cat: "pen",
            label: "set font to {choice:fontstyle} {choice:fontsize:18} {choice:font}",
            func: "blockPenSetFont",
            readName: "Set Font To",
            concept: "text handling",
            tags: ["text"]
        },
        blockPenSetFontColor: {
            cat: "pen",
            label: "set font color to {color}",
            func: "blockPenSetFontColor",
            readName: "Set Font Color To",
            concept: "text handling",
            tags: ["text"]
        },
        blockPenDrawText: {
            cat: "pen",
            omitbg: !0,
            label: "draw text {string}",
            func: "blockPenDrawText",
            readName: "Draw Text",
            concept: "text handling",
            tags: ["write"]
        },
        registerDraw: {
            cat: "pen",
            hidden: !0,
            omitbg: !0,
            hasFlap: !1,
            label: "when drawing actor",
            func: "registerDraw",
            readName: "When Drawing Actor",
            concept: "drawing actors",
            tags: ["hat block", "callback", "paint"]
        },
        blockPenRedraw: {
            cat: "pen",
            hidden: !0,
            omitbg: !0,
            label: "redraw actor",
            func: "blockPenRedraw",
            readName: "Redraw Actor",
            concept: "drawing actors",
            tags: ["draw"]
        },
        blockPenSetFillColor: {
            cat: "pen",
            label: "set fill color to {color}",
            func: "blockPenSetFillColor",
            readName: "Set Fill Color To",
            concept: "fill color",
            tags: ["draw"]
        },
        blockPenSetNoFill: {
            cat: "pen",
            label: "no fill",
            func: "blockPenSetNoFill",
            readName: "No Fill",
            concept: "fill color",
            tags: ["draw", "paint"]
        },
        blockPenDrawBezier: {
            cat: "pen",
            label: "draw bezier at x1:{number:0} y1:{number:0}\nto x2:{number:0} y2:{number:0}\nwith control points cx1:{number:0} cy1:{number:0}\nand cx2:{number:0} cy2:{number:0}",
            func: "blockPenDrawBezier",
            readName: "Draw Bezier At",
            concept: "shape drawing",
            tags: ["geometry", "curve"]
        },
        blockPenDrawPoint: {
            cat: "pen",
            label: "draw point at x:{number:0} y:{number:0}",
            func: "blockPenDrawPoint",
            readName: "Draw Point",
            concept: "shape drawing",
            tags: ["geometry", "shapes", "geometric"]
        },
        blockPenDrawLine: {
            cat: "pen",
            label: "draw line from x1:{number:0} y1:{number:0}\nto x2:{number:0} y2:{number:0}",
            func: "blockPenDrawLine",
            readName: "Draw Line",
            concept: "shape drawing",
            tags: ["shapes", "geometry", "geometric"]
        },
        blockPenDrawRectangle: {
            cat: "pen",
            label: "draw rectangle at x:{number:0} y:{number:0}\nwith width:{number:0} height:{number:0}",
            func: "blockPenDrawRectangle",
            readName: "Draw Rectangle",
            concept: "shape drawing",
            tags: ["geometry", "geometric shape"]
        },
        blockPenClearRect: {
            cat: "pen",
            hidden: !0,
            label: "clear rectangle at x:{number:0} y:{number:0}\nwith width:{number:0} height:{number:0}",
            func: "blockPenClearRect",
            readName: "Clear",
            concept: "simple drawing",
            tags: ["draw"]
        },
        blockPenDrawTriangle: {
            cat: "pen",
            label: "draw triangle with points x1:{number:0} y1:{number:0}\nx2:{number:0} y2:{number:0}\nx3:{number:0} y3:{number:0}",
            func: "blockPenDrawTriangle",
            readName: "Draw Triangle",
            concept: "shape drawing",
            tags: ["geometry", "geometric shape"]
        },
        blockPenDrawEllipse: {
            cat: "pen",
            label: "draw ellipse at x:{number:0} y:{number:0}\nwith width:{number:0} height:{number:0}",
            func: "blockPenDrawEllipse",
            readName: "Draw Ellipse",
            concept: "shape drawing",
            tags: ["geometry", "geometric shape", "circle", "oval"]
        },
        blockPenDrawTextAt: {
            cat: "pen",
            label: "draw text {string} at x:{number:0} y:{number:0}",
            func: "blockPenDrawTextAt",
            readName: "Draw Text At",
            concept: "text handling"
        },
        blockPenDrawRectangleLocal: {
            cat: "pen",
            omitbg: !0,
            label: "draw rectangle with width:{number:0} height:{number:0}",
            func: "blockPenDrawRectangleLocal",
            readName: "Draw Rectangle",
            concept: "shape drawing",
            tags: ["geometry", "geometric shape"]
        },
        blockPenDrawEllipseLocal: {
            cat: "pen",
            omitbg: !0,
            label: "draw ellipse with width:{number:0} height:{number:0}",
            func: "blockPenDrawEllipseLocal",
            readName: "Draw Ellipse",
            concept: "shape drawing",
            tags: ["circle", "oval", "geometry", "geometric shape"]
        },
        registerSpriteCollision: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "when actor collides",
            hasFlap: !1,
            func: "registerSpriteCollision",
            readName: "When Actor Collides",
            concept: "advanced physics",
            tags: ["hat block", "collision"]
        },
        valuePhysicsGetProperty: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "get property {choice:getphysics} of {actortiles}",
            value: "string",
            func: "valuePhysicsGetProperty",
            readName: "Physics properties",
            concept: "advanced physics",
            tags: "value;property;properties;density;friction;restitution;angular velocity;angular damping;inertia;is active;is awake;linear damping;x linear velocity;y linear velocity;x gravity;y gravity;last collided with;last collision x;last collision y;last actor collided with;last actor collision x;last actor collision y".split(";")
        },
        blockPhysicsApply: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "apply {choice:setphysics} to {actortiles} with {number:0}",
            func: "blockPhysicsApply",
            readName: "Physics properties",
            concept: "expert physics",
            tags: "value;force;impulse;torque;density;friction;restitution;angular damping;angular velocity;linear damping;linear velocity".split(";")
        },
        blockPhysicsApplyXY: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "apply {choice:setphysicsxy} to {actortiles} with x:{number:0} y:{number:0}",
            func: "blockPhysicsApplyXY",
            readName: "Physics properties",
            concept: "expert physics",
            tags: ["value", "force", "impulse", "linear velocity", "gravity"]
        },
        blockPhysicsSetActorActive: {
            cat: "physics",
            label: "set active on {actortiles} to {boolean}",
            func: "blockPhysicsSetActorActive",
            readName: "Set Active",
            concept: "expert physics"
        },
        blockPhysicsSetActorStatic: {
            cat: "physics",
            omitbg: !0,
            label: "set static on {actortiles} to {boolean}",
            func: "blockPhysicsSetActorStatic",
            readName: "Set Static",
            concept: "expert physics"
        },
        blockPhysicsSetActorGeometry: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "set shape on {actor} to {choice:geometry}",
            func: "blockPhysicsSetActorGeometry",
            readName: "Set Shape To",
            concept: "expert physics"
        },
        valuePhysicsCollidedWithSprite: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "collided with {where}?",
            value: "boolean",
            func: "valuePhysicsCollidedWithSprite",
            readName: "Collided With?",
            concept: "advanced physics",
            tags: ["value"]
        },
        valuePhysicsCollidedWithName: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "collided with actor name",
            value: "string",
            func: "valuePhysicsCollidedWithName",
            readName: "Collided With Actor Name",
            concept: "advanced physics",
            tags: ["value"]
        },
        valuePhysicsTouchingActor: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "is touching {where}?",
            value: "string",
            func: "valuePhysicsTouchingActor",
            readName: "Touching With Actor Name",
            concept: "advanced physics",
            tags: ["value"]
        },
        blockPhysicsApplyForce: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply force {number:0}",
            func: "blockPhysicsApplyForce",
            readName: "Apply Force",
            concept: "expert physics"
        },
        blockPhysicsApplyImpulse: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply impulse {number:0}",
            func: "blockPhysicsApplyImpulse",
            readName: "Apply Impulse",
            concept: "expert physics"
        },
        blockPhysicsApplyForceAngle: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply force {number:0} at{number:0} degrees",
            func: "blockPhysicsApplyForceAngle",
            readName: "Apply Force At Degrees",
            concept: "expert physics"
        },
        blockPhysicsApplyImpulseAngle: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply impulse {number:0} at {number:0} degrees",
            func: "blockPhysicsApplyImpulseAngle",
            readName: "Apply Impulse At Degrees",
            concept: "expert physics"
        },
        blockPhysicsApplyForceXY: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply force x:{number:0} y:{number:0}",
            func: "blockPhysicsApplyForceXY",
            readName: "Apply Horizontal and Vertical Force",
            concept: "expert physics"
        },
        blockPhysicsApplyImpulseXY: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply impulse x:{number:0} y:{number:0}",
            func: "blockPhysicsApplyImpulseXY",
            readName: "Apply Horizontal And Vertical Impulse",
            concept: "expert physics"
        },
        blockPhysicsApplyTorque: {
            cat: "physics",
            omitbg: !0,
            hidden: !1,
            label: "apply torque {number:0}",
            func: "blockPhysicsApplyTorque",
            readName: "Apply Torque",
            concept: "expert physics"
        },
        blockPhysicsSetActive: {
            cat: "physics",
            hidden: !1,
            label: "set active {boolean}",
            func: "blockPhysicsSetActive",
            readName: "Set Active",
            concept: "expert physics"
        },
        blockPhysicsSetStatic: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set static {boolean}",
            func: "blockPhysicsSetStatic",
            readName: "Set Static",
            concept: "expert physics"
        },
        blockPhysicsSetGeometry: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set shape to {choice:geometry}",
            func: "blockPhysicsSetGeometry",
            readName: "Set Shape To",
            concept: "expert physics"
        },
        blockPhysicsSetDensity: {
            cat: "physics",
            hidden: !1,
            label: "set density to {number:10}",
            func: "blockPhysicsSetDensity",
            readName: "Set Density To",
            concept: "expert physics"
        },
        blockPhysicsSetFriction: {
            cat: "physics",
            hidden: !1,
            label: "set friction to {number:0.5}",
            func: "blockPhysicsSetFriction",
            readName: "Set Friction To",
            concept: "expert physics"
        },
        blockPhysicsSetRestitution: {
            cat: "physics",
            hidden: !1,
            label: "set restitution to {number:0.2}",
            func: "blockPhysicsSetRestitution",
            readName: "Set Restitution To",
            concept: "expert physics"
        },
        blockPhysicsSetAngularDamping: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set angular damping to {number:0}",
            func: "blockPhysicsSetAngularDamping",
            readName: "Set Angular Damping To",
            concept: "expert physics"
        },
        blockPhysicsSetAngularVelocity: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set angular velocity to {number:0}",
            func: "blockPhysicsSetAngularVelocity",
            readName: "Set Angular Velocity To",
            concept: "expert physics"
        },
        blockPhysicsSetLinearDamping: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set linear damping to {number:0}",
            func: "blockPhysicsSetLinearDamping",
            readName: "Set Linear Damping To",
            concept: "expert physics"
        },
        blockPhysicsSetLinearVelocity: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set linear velocity to {number:0}",
            func: "blockPhysicsSetLinearVelocity",
            readName: "Set Linear Velocity To",
            concept: "expert physics"
        },
        blockPhysicsSetLinearVelocityXY: {
            cat: "physics",
            omitbg: !1,
            hidden: !1,
            label: "set linear velocity to x:{number:0} y:{number:0}",
            func: "blockPhysicsSetLinearVelocityXY",
            readName: "Set Linear Velocity To",
            concept: "expert physics"
        },
        valuePhysicsDensity: {
            cat: "physics",
            watchable: !0,
            omitbg: !1,
            hidden: !1,
            label: "density",
            value: "number",
            func: "valuePhysicsDensity",
            readName: "Density",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsFriction: {
            cat: "physics",
            watchable: !0,
            omitbg: !1,
            hidden: !1,
            label: "friction",
            value: "number",
            func: "valuePhysicsFriction",
            readName: "Friction",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsRestitution: {
            cat: "physics",
            watchable: !0,
            omitbg: !1,
            hidden: !1,
            label: "restitution",
            value: "number",
            func: "valuePhysicsRestitution",
            readName: "Restitution",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsAngularVelocity: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "angular velocity",
            value: "number",
            func: "valuePhysicsAngularVelocity",
            readName: "Angular Velocity",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsInertia: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "inertia",
            value: "number",
            func: "valuePhysicsInertia",
            readName: "Inertia",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsIsAwake: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "is awake?",
            value: "boolean",
            func: "valuePhysicsIsAwake",
            readName: "Is Awake?",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsIsActive: {
            cat: "physics",
            watchable: !0,
            omitbg: !1,
            hidden: !1,
            label: "is active?",
            value: "boolean",
            func: "valuePhysicsIsActive",
            readName: "Is Active?",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsXVelocity: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "x linear velocity",
            value: "number",
            func: "valuePhysicsXVelocity",
            readName: "X Linear Velocity",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsYVelocity: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "y linear velocity",
            value: "number",
            func: "valuePhysicsYVelocity",
            readName: "Y Linear Velocity",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsAngularDamping: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "angular damping",
            value: "number",
            func: "valuePhysicsAngularDamping",
            readName: "Angular Damping",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsLinearDamping: {
            cat: "physics",
            watchable: !0,
            omitbg: !0,
            hidden: !1,
            label: "linear damping",
            value: "number",
            func: "valuePhysicsLinearDamping",
            readName: "Linear Damping",
            concept: "expert physics",
            tags: ["value"]
        },
        blockPhysicsSetGravity: {
            cat: "physics",
            label: "set gravity to {number:0} by {number:10}",
            hidden: !1,
            func: "blockPhysicsSetGravity",
            readName: "Set Gravity To",
            concept: "advanced physics"
        },
        valuePhysicsXGravity: {
            cat: "physics",
            watchable: !0,
            hidden: !1,
            label: "X Gravity",
            value: "number",
            func: "valuePhysicsXGravity",
            readName: "X Gravity",
            concept: "expert physics",
            tags: ["value"]
        },
        valuePhysicsYGravity: {
            cat: "physics",
            watchable: !0,
            hidden: !1,
            label: "Y Gravity",
            value: "number",
            func: "valuePhysicsYGravity",
            readName: "Y Gravity",
            concept: "expert physics",
            tags: ["value"]
        },
        blockPhysicsStart: {
            cat: "physics",
            label: "start physics",
            func: "blockPhysicsStart",
            readName: "Start Physics",
            concept: "basic physics"
        },
        blockPhysicsStop: {
            cat: "physics",
            label: "stop physics",
            func: "blockPhysicsStop",
            readName: "Stop Physics",
            concept: "basic physics"
        },
        blockVarPropSet: {
            cat: "var",
            label: "set {properties} of {actor} to {string:0}",
            func: "blockVarPropSet",
            readName: "Set Property To",
            concept: "actor properties",
            tags: ["value", "property", "properties"]
        },
        valueVarPropGet: {
            cat: "var",
            label: "property {properties} of {actor}",
            value: "string",
            func: "valueVarPropGet",
            readName: "Property Of",
            concept: "actor properties",
            tags: ["value", "property", "properties"]
        },
        blockVarSet: {
            cat: "var",
            label: "set {variables} to {string:0}",
            func: "blockVarSet",
            readName: "Set Variable To",
            concept: "simple variables",
            tags: ["variable", "variables"]
        },
        blockVarChangeBy: {
            cat: "var",
            label: "change {variables} by {number:1}",
            func: "blockVarChangeBy",
            readName: "Change Variable By",
            concept: "simple variables",
            tags: ["variable", "variables"]
        },
        blockVarShow: {
            cat: "var",
            hidden: !0,
            label: "show variable {variables}",
            func: "blockVarShow",
            readName: "Show Variable",
            concept: "variable watchers",
            tags: ["variable", "variables"]
        },
        blockVarHide: {
            cat: "var",
            hidden: !0,
            label: "hide variable {variables}",
            func: "blockVarHide",
            readName: "Hide Variable",
            concept: "variable watchers",
            tags: ["variable", "variables"]
        },
        blockListAdd: {
            cat: "list",
            label: "add {string:thing} {varargs} to {lists}",
            func: "blockListAdd",
            readName: "Add To List",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        blockListDel: {
            cat: "list",
            label: "delete {choice:lastall} of {lists}",
            func: "blockListDel",
            readName: "Delete from List",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        blockListInsert: {
            cat: "list",
            label: "insert {string:thing} {varargs} at {choice:lastany} of {lists}",
            func: "blockListInsert",
            readName: "Insert At Of List",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        blockListReplace: {
            cat: "list",
            label: "replace item {choice:lastany} of {lists} with {string:thing}",
            func: "blockListReplace",
            readName: "Replace Item Of List With",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        valueListItem: {
            cat: "list",
            label: "item {choice:lastany} of {lists}",
            value: "string",
            func: "valueListItem",
            readName: "Item Of List",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        valueListLength: {
            cat: "list",
            label: "length of {lists}",
            value: "number",
            func: "valueListLength",
            readName: "Length Of List",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        valueListContains: {
            cat: "list",
            label: "{lists} contains {string:thing}",
            value: "boolean",
            func: "valueListContains",
            readName: "List Contains",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        blockObjDel: {
            cat: "obj",
            label: "delete {string}[{string:0}]",
            func: "blockObjDel",
            readName: "Delete Key",
            concept: "objects",
            tags: ["value", "variable",
                "variables"
            ]
        },
        blockObjSet: {
            cat: "obj",
            label: "set {string}[{string:0}] = {string}",
            func: "blockObjSet",
            readName: "Set To Item",
            concept: "objects",
            tags: ["value", "variable", "variables"]
        },
        valueObjGet: {
            cat: "obj",
            label: "get {string}[{string:0}]",
            value: "object",
            func: "valueObjGet",
            readName: "Get Item",
            concept: "objects",
            tags: ["value", "variable", "variables"]
        },
        valueObjLength: {
            cat: "obj",
            label: "length of {string}",
            value: "number",
            func: "valueObjLength",
            readName: "Length Of List",
            concept: "objects",
            tags: ["value", "variable",
                "variables"
            ]
        },
        valueObjKeys: {
            cat: "obj",
            label: "keys of {string}",
            value: "object",
            func: "valueObjKeys",
            readName: "Keys Of",
            concept: "objects",
            tags: ["value", "variable", "variables"]
        },
        valueObjValues: {
            cat: "obj",
            label: "values of {string}",
            value: "object",
            func: "valueObjValues",
            readName: "Values Of",
            concept: "objects",
            tags: ["value", "variable", "variables"]
        },
        valueListNew: {
            cat: "obj",
            label: "new list",
            value: "object",
            func: "valueListNew",
            readName: "New List",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        valueObjNew: {
            cat: "obj",
            label: "new object",
            value: "object",
            func: "valueObjNew",
            readName: "New Object",
            concept: "lists",
            tags: ["value", "variable", "variables"]
        },
        blockNetworkSaveValue: {
            cat: "network",
            hidden: !0,
            label: "save {string:value} as {string:name} for {choice:permissions}",
            func: "blockNetworkSaveValue",
            readName: "Network",
            concept: "networking",
            tags: ["network", "networking"]
        },
        blockNetworkLoadValue: {
            cat: "network",
            hidden: !0,
            label: "read {string:name} into {variables}",
            func: "blockNetworkLoadValue",
            readName: "Network",
            concept: "networking",
            tags: ["network", "networking"]
        },
        blockNetworkAPI: {
            cat: "network",
            hidden: !0,
            label: "network {string} {varargs}",
            func: "blockNetworkAPI",
            readName: "Network",
            concept: "networking",
            tags: ["network", "networking"]
        },
        valueNetworkParse: {
            cat: "network",
            hidden: !0,
            label: "parse data {string}",
            value: "object",
            func: "valueNetworkParse",
            readName: "Parse Network Object",
            concept: "networking",
            tags: ["network", "networking"]
        },
        valueNetworkResult: {
            cat: "network",
            hidden: !0,
            label: "network result",
            value: "object",
            func: "valueNetworkResult",
            readName: "Network Result",
            concept: "networking",
            tags: ["network", "networking"]
        },
        blockParticleEmitStart: {
            cat: "particles",
            hidden: !0,
            label: "start emit particles",
            func: "blockParticleEmitStart",
            readName: "emit particles",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleEmitStop: {
            cat: "particles",
            hidden: !0,
            label: "stop emit particles",
            func: "blockParticleEmitStop",
            readName: "stop particles",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetRate: {
            cat: "particles",
            hidden: !0,
            label: "set emit rate to {number} particles per seconds",
            func: "blockParticleSetRate",
            readName: "set emit rate",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetVectorVelocity: {
            cat: "particles",
            hidden: !0,
            label: "set emit vector velocity X from {number} to {number}, Y from {number} to {number} ",
            func: "blockParticleSetVectorVelocity",
            readName: "set particle velocity",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetRadialVelocity: {
            cat: "particles",
            hidden: !0,
            label: "set emit radial velocity from {number} to {number}, from {number} degrees to {number} degrees ",
            func: "blockParticleSetRadialVelocity",
            readName: "set particle velocity",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetLifetime: {
            cat: "particles",
            hidden: !0,
            label: "set particle lifetime to {number}",
            func: "blockParticleSetLifetime",
            readName: "set particle lifetime",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetMass: {
            cat: "particles",
            hidden: !0,
            label: "set particle mass to {number}",
            func: "blockParticleSetMass",
            readName: "set particle mass",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetGravity: {
            cat: "particles",
            hidden: !0,
            label: "set particle gravity to {number}",
            func: "blockParticleSetGravity",
            readName: "set particle gravity",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetAttraction: {
            cat: "particles",
            hidden: !0,
            label: "set particle attraction to force {number} with radius {number}",
            func: "blockParticleSetAttraction",
            readName: "set particle attraction",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetRadius: {
            cat: "particles",
            hidden: !0,
            label: "set particle radius to {number}",
            func: "blockParticleSetRadius",
            readName: "set particle radius",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetColor: {
            cat: "particles",
            hidden: !0,
            label: "set particle color from {color:#ff0000} to {color:#ffff00}",
            func: "blockParticleSetColor",
            readName: "set particle color",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetScale: {
            cat: "particles",
            hidden: !0,
            label: "set particle scaling from {number:1} to {number:.1}",
            func: "blockParticleSetScale",
            readName: "set particle scaling",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetAlpha: {
            cat: "particles",
            hidden: !0,
            label: "set particle alpha from {number:1} to {number:.1}",
            func: "blockParticleSetAlpha",
            readName: "set particle alpha",
            concept: "particles",
            tags: ["particle"]
        },
        blockParticleSetImage: {
            cat: "particles",
            hidden: !0,
            label: "set particle image to {choice:particleimg}",
            func: "blockParticleSetImage",
            readName: "set particle image",
            concept: "particles",
            tags: ["particle"]
        },
        registerMCPECommand: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} /wsserver command {string}",
            func: "registerMCPECommand",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventChat: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when receive chat {param:message}",
            func: "registerMCPEEventChat",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventTell: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when receive tell {param:message}",
            func: "registerMCPEEventTell",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventDied: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when player dies",
            func: "registerMCPEEventDied",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventPlayer: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when player travels {param:traveltype}",
            func: "registerMCPEEventPlayer",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventTeleported: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when player teleported",
            func: "registerMCPEEventTeleported",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventBounced: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when player bounced",
            func: "registerMCPEEventBounced",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventBlockPlaced: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when block {block:stone} placed",
            func: "registerMCPEEventBlockPlaced",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventBlockBrokenAny: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when {param:block} broken",
            func: "registerMCPEEventBlockBrokenAny",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventMobKilled: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when mob {entityType:chicken} killed",
            func: "registerMCPEEventMobKilled",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventMobKilledAny: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when {param:mob} killed",
            func: "registerMCPEEventMobKilled",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventEntitySpawned: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when mob {entityType:chicken} spawned",
            func: "registerMCPEEventEntitySpawned",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventEntitySpawnedAny: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when {param:mob} spawned",
            func: "registerMCPEEventEntitySpawned",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventItemAcquired: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when item {inventory:apple} is acquired",
            func: "registerMCPEEventItemAcquired",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventItemAcquiredAny: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when {param:item} is acquired",
            func: "registerMCPEEventItemAcquiredAny",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventItemDropped: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when item {inventory:apple} is dropped",
            func: "registerMCPEEventItemDropped",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventItemDroppedAny: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when {param:item} is dropped",
            func: "registerMCPEEventItemDroppedAny",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventItemUsed: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when item {inventory:bow} is used",
            func: "registerMCPEEventItemUsed",
            readName: "command",
            concept: "Minecraft PE"
        },
        registerMCPEEventItemUsedAny: {
            cat: "mcpe",
            hidden: !0,
            hasFlap: !1,
            label: "{image:ide/imgs/button-grass.png} when item {param:item} is used",
            func: "registerMCPEEventItemUsedAny",
            readName: "command",
            concept: "Minecraft PE"
        },
        blockMCPEBotStart: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} start TynkerBot buffer",
            func: "blockMCPEBotStart"
        },
        blockMCPEBotFlush: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} run TynkerBot buffer",
            func: "blockMCPEBotFlush"
        },
        blockMCPEBotClear: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} clear TynkerBot buffer",
            func: "blockMCPEBotClear"
        },
        blockMCPEBotMoveBy: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} move TynkerBot by x:{number:0} y:{number:0} z:{number:0}",
            func: "blockMCPEBotMoveBy"
        },
        blockMCPEBotMoveTo: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} move TynkerBot to x:{number:0} y:{number:0} z:{number:0}",
            func: "blockMCPEBotMoveTo"
        },
        blockMCPEBotMoveToPlayer: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} move TynkerBot to player",
            func: "blockMCPEBotMoveToPlayer"
        },
        blockMCPEBotTestForBlock: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} test for block {block:stone} at TynkerBot",
            func: "blockMCPEBotTestForBlock"
        },
        valueMCPEResult: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} query result",
            value: "object",
            func: "valueMCPEResult",
            readName: "Result",
            concept: "Minecraft PE"
        },
        blockMCPEBotMove: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} move TynkerBot {choice:mcpebotdir} by {number:1} blocks",
            func: "blockMCPEBotMove"
        },
        blockMCPEBotTurnLeft: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} turn TynkerBot left",
            func: "blockMCPEBotTurnLeft"
        },
        blockMCPEBotTurnRight: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} turn TynkerBot right",
            func: "blockMCPEBotTurnRight"
        },
        blockMCPEBotPointDirection: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} point TynkerBot towards {cardinaldirection:south}",
            func: "blockMCPEBotPointDirection"
        },
        blockMCPEBotSaveCheckpoint: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} save TynkerBot checkpoint as {string}",
            func: "blockMCPEBotSaveCheckpoint"
        },
        blockMCPEBotRestoreCheckpoint: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} go to TynkerBot checkpoint named {string}",
            func: "blockMCPEBotRestoreCheckpoint"
        },
        blockMCPEBotPlaceBlock: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} place block {block:stone} at TynkerBot",
            func: "blockMCPEBotPlaceBlock"
        },
        blockMCPEBotBox: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} build {choice:mcpefill} box at TynkerBot using {block:stone} with\nwidth:{number:1} height:{number:1} depth:{number:1}",
            func: "blockMCPEBotBox"
        },
        blockMCPEBotSummon: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} summon {entityType:chicken} at TynkerBot",
            func: "blockMCPEBotSummon"
        },
        blockMCPEBotTeleport: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} teleport {choice:mcpeplayer:nearest player} to TynkerBot",
            func: "blockMCPEBotTeleport"
        },
        blockMCPEEnchant: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} enchant {choice:mcpeplayer:nearest player} with {string:mcpeenchantment}",
            func: "blockMCPEEnchant",
            readName: "enchant",
            concept: "Minecraft PE"
        },
        blockMCPEGive: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} give {inventory:apple} to {choice:mcpeplayer:nearest player}",
            func: "blockMCPEGive",
            readName: "give item",
            concept: "Minecraft PE"
        },
        blockMCPETeleport: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} teleport {choice:mcpeplayer:nearest player} to {number:x},{number:y},{number:z}",
            func: "blockMCPETeleport",
            readName: "teleport",
            concept: "Minecraft PE"
        },
        blockMCPESetTime: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} set time to {number:0}",
            func: "blockMCPESetTime",
            readName: "set time",
            concept: "Minecraft PE"
        },
        blockMCPEKill: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} kill {choice:mcpeplayer:nearest player}",
            func: "blockMCPEKill",
            readName: "kill player",
            concept: "Minecraft PE"
        },
        blockMCPEGameMode: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} set game mode to {choice:mcpegamemode:creative}",
            func: "blockMCPEGameMode",
            readName: "set game mode",
            concept: "Minecraft PE"
        },
        blockMCPESay: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} say {string:message} {varargs}",
            func: "blockMCPESay",
            readName: "say",
            concept: "Minecraft PE"
        },
        blockMCPETell: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} tell {string:message}  {varargs} to {choice:mcpeplayer:nearest player}",
            func: "blockMCPETell",
            readName: "tell player",
            concept: "Minecraft PE"
        },
        blockMCPESetWeather: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} set weather to {choice:mcpeweather:clear}",
            func: "blockMCPESetWeather",
            readName: "set weather",
            concept: "Minecraft PE"
        },
        blockMCPESummon: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} summon {entityType:chicken} at {number:x},{number:y},{number:z}",
            func: "blockMCPESummon",
            readName: "summon",
            concept: "Minecraft PE"
        },
        blockMCPEExecute: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} execute {string}",
            func: "blockMCPEExecute",
            readName: "execute",
            concept: "Minecraft PE"
        },
        blockMCPEFillBlock: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} fill {number:x},{number:y},{number:z} to {number:x},{number:y},{number:z} with {block:stone}",
            func: "blockMCPEFillBlock",
            readName: "fill blocks",
            concept: "Minecraft PE"
        },
        blockMCPESetBlock: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} set block {block:stone} at {number:x},{number:y},{number:z}",
            func: "blockMCPESetBlock",
            readName: "set block",
            concept: "Minecraft PE"
        },
        blockMCPEAgentMove: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent move {choice:mcpebotdir}",
            func: "blockMCPEAgentMove",
            readName: "move",
            concept: "Minecraft PE"
        },
        blockMCPEAgentTurn: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent turn {choice:mcpedir}",
            func: "blockMCPEAgentTurn",
            readName: "turn",
            concept: "Minecraft PE"
        },
        blockMCPEAgentPlace: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent place {choice:mcpebotdir} from slot {number:1}",
            func: "blockMCPEAgentPlace",
            readName: "turn",
            concept: "Minecraft PE"
        },
        blockMCPEAgentDetect: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent detect {choice:mcpebotdir}",
            func: "blockMCPEAgentDetect",
            readName: "detect",
            concept: "Minecraft PE"
        },
        blockMCPEAgentAttack: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent attack {choice:mcpebotdir}",
            func: "blockMCPEAgentAttack",
            readName: "attack",
            concept: "Minecraft PE"
        },
        blockMCPEAgentDestroy: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent destroy {choice:mcpebotdir}",
            func: "blockMCPEAgentDestroy",
            readName: "destroy",
            concept: "Minecraft PE"
        },
        blockMCPEAgentCollect: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent collect {inventory:apple}",
            func: "blockMCPEAgentCollect",
            readName: "attack",
            concept: "Minecraft PE"
        },
        blockMCPEAgentTill: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent till {choice:mcpebotdir}",
            func: "blockMCPEAgentTill",
            readName: "attack",
            concept: "Minecraft PE"
        },
        blockMCPEAgentDropall: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent drop {choice:mcpebotdir}",
            func: "blockMCPEAgentDropall",
            readName: "attack",
            concept: "Minecraft PE"
        },
        blockMCPEAgentTeleport: {
            cat: "mcpe",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} agent teleport to player",
            func: "blockMCPEAgentTeleport",
            readName: "teleport",
            concept: "Minecraft PE"
        },
        blockMCPESetBlocks: {
            cat: "nop",
            hidden: !0,
            label: "deprecated: set blocks {object:list of blocks}",
            func: "blockMCPESetBlocks",
            readName: "Set Block List",
            concept: "Minecraft PE"
        },
        valueMCPEBlockExists: {
            value: "string",
            cat: "nop",
            hidden: !0,
            label: "deprecated: does block {block:stone} exist at {number:x},{number:y},{number:z}",
            func: "valueMCPEBlockExists",
            readName: "test block exists",
            concept: "Minecraft PE"
        },
        valueMCPEBlockExistsWithin: {
            value: "string",
            cat: "nop",
            hidden: !0,
            label: "deprecated: does block {block:stone} exist within {number:x},{number:y},{number:z} to {number:x},{number:y},{number:z}",
            func: "valueMCPEBlockExistsWithin"
        },
        valueMCPEItemType: {
            cat: "mcpe",
            value: "string",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} item {inventory:apple}",
            func: "valueMCPEItemType",
            readName: "item",
            concept: "Minecraft PE"
        },
        valueMCPEBlockType: {
            cat: "mcpe",
            value: "string",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} block {block:stone}",
            func: "valueMCPEBlockType",
            readName: "block",
            concept: "Minecraft PE"
        },
        valueMCPEMobType: {
            cat: "mcpe",
            value: "string",
            hidden: !0,
            label: "{image:ide/imgs/button-grass.png} mob {entityType:chicken}",
            func: "valueMCPEMobType",
            readName: "mob",
            concept: "Minecraft PE"
        },
        blockSpheroSetSpeed: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} set speed to {number:50}%",
            func: "blockSpheroSetSpeed",
            readName: "Set Speed To",
            concept: "ground control"
        },
        blockSpheroRoll: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} roll for {number:1} seconds",
            func: "blockSpheroRoll",
            readName: "Roll For",
            concept: "ground control"
        },
        blockSpheroStop: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} stop moving",
            func: "blockSpheroStop",
            readName: "Stop Moving",
            concept: "ground control"
        },
        blockSpheroTurnCW: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} turn right by {angle:90} degrees",
            func: "blockSpheroTurnCW",
            readName: "Turn Clockwise",
            concept: "ground control"
        },
        blockSpheroTurnCCW: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} turn left by {angle:90} degrees",
            func: "blockSpheroTurnCCW",
            readName: "Turn Counter-Clockwise",
            concept: "ground control"
        },
        blockSpheroHeading: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} set heading to {angle:0} degrees",
            func: "blockSpheroHeading",
            readName: "Set Heading To",
            concept: "ground control"
        },
        blockSpheroColor: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} set color to {color}",
            func: "blockSpheroColor",
            readName: "Set Color To",
            concept: "ground control"
        },
        valueSpheroConnected: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-sphero.png} is connected?",
            func: "valueSpheroConnected",
            readName: "Connected?",
            concept: "ground control"
        },
        valueSpheroHeading: {
            cat: "hardware",
            value: "number",
            label: "{image:ide/imgs/button-sphero.png} heading",
            func: "valueSpheroHeading",
            readName: "Heading",
            concept: "ground control"
        },
        valueSpheroSpeed: {
            cat: "hardware",
            value: "number",
            label: "{image:ide/imgs/button-sphero.png} speed",
            func: "valueSpheroSpeed",
            readName: "Speed",
            concept: "ground control"
        },
        valueSpheroProperty: {
            cat: "hardware",
            value: "number",
            label: "{image:ide/imgs/button-sphero.png} get property {spheroprop}",
            func: "valueSpheroProperty",
            readName: "Get Property",
            concept: "ground control"
        },
        valueSpheroOdometer: {
            cat: "hardware",
            value: "number",
            label: "{image:ide/imgs/button-sphero.png} odometer",
            func: "valueSpheroOdometer",
            readName: "Odometer",
            concept: "ground control"
        },
        valueSpheroCollidedSinceLastCheck: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-sphero.png} collided since last check?",
            func: "valueSpheroCollidedSinceLastCheck",
            readName: "Collided Since Last Check",
            concept: "ground control"
        },
        registerHardwareTrigger: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} when I collide",
            hasFlap: !1,
            func: "registerHardwareTrigger",
            readName: "When I Collide",
            concept: "ground control",
            tags: ["hat block", "collision"]
        },
        blockSpheroSetStabilization: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} set stabilization {boolean}",
            func: "blockSpheroSetStabilization",
            readName: "Set Stabilization",
            concept: "ground control"
        },
        blockSpheroSet: {
            cat: "hardware",
            label: "{image:ide/imgs/button-sphero.png} set {spherosetnumericprop} to {number}",
            func: "blockSpheroSet",
            readName: "Set",
            concept: "ground control"
        },
        blockDroneTakeOff: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} take off",
            func: "blockDroneTakeOff",
            readName: "Take Off",
            concept: "flight control"
        },
        blockDroneLand: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} land",
            func: "blockDroneLand",
            readName: "Land",
            concept: "flight control"
        },
        blockDroneStop: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} stop",
            func: "blockDroneStop",
            readName: "Stop",
            concept: "flight control"
        },
        blockDroneEmergency: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} emergency",
            func: "blockDroneEmergency",
            readName: "Emergency",
            concept: "flight control"
        },
        blockDroneSetSpeed: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} set speed to {number:50}%",
            func: "blockDroneSetSpeed",
            readName: "Set Speed To",
            concept: "flight control"
        },
        blockDroneForward: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} forward for {number:1} seconds",
            func: "blockDroneForward",
            readName: "Go Forward For",
            concept: "flight control"
        },
        blockDroneBackward: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} backward for {number:1} seconds",
            func: "blockDroneBackward",
            readName: "Go Backward For",
            concept: "flight control"
        },
        blockDroneLeft: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} left for {number:1} seconds",
            func: "blockDroneLeft",
            readName: "Go Left For",
            concept: "flight control"
        },
        blockDroneRight: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} right for {number:1} seconds",
            func: "blockDroneRight",
            readName: "Go Right For",
            concept: "flight control"
        },
        blockDroneTurnCW: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} turn right by {angle:90} degrees",
            func: "blockDroneTurnCW",
            readName: "Turn Right",
            concept: "flight control"
        },
        blockDroneTurnCCW: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} turn left by {angle:90} degrees",
            func: "blockDroneTurnCCW",
            readName: "Turn Left",
            concept: "flight control"
        },
        blockDroneAnimation: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} flip {droneanimations:flip forward}",
            func: "blockDroneAnimation",
            readName: "Flip",
            concept: "flight control"
        },
        blockDroneUp: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} up for {number:1} seconds",
            func: "blockDroneUp",
            readName: "Go Up For",
            concept: "flight control"
        },
        blockDroneDown: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} down for {number:1} seconds",
            func: "blockDroneDown",
            readName: "Go Down For",
            concept: "flight control"
        },
        valueDroneConnected: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-drone.png} is connected?",
            func: "valueDroneConnected",
            readName: "Connected?",
            concept: "flight control"
        },
        blockDroneStartUp: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} start moving up",
            func: "blockDroneStartUp",
            readName: "Start Moving Up",
            concept: "flight control"
        },
        blockDroneStartDown: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} start moving down",
            func: "blockDroneStartDown",
            readName: "Start Moving Down",
            concept: "flight control"
        },
        blockDroneStartRotateLeft: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} start rotating left",
            func: "blockDroneStartRotateLeft",
            readName: "Start Rotating Left",
            concept: "flight control"
        },
        blockDroneStartRotateRight: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} start rotating right",
            func: "blockDroneStartRotateRight",
            readName: "Start Rotating Right",
            concept: "flight control"
        },
        blockDroneTakePicture: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} take picture",
            func: "blockDroneTakePicture",
            readName: "Take Picture",
            concept: "flight control"
        },
        blockDroneFetchPicture: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} fetch picture from drone",
            func: "blockDroneFetchPicture",
            readName: "Fetch Picture From Drone",
            concept: "flight control"
        },
        blockDroneDeletePicture: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} delete picture on drone",
            func: "blockDroneDeletePicture",
            readName: "Delete Picture On Drone",
            concept: "flight control"
        },
        blockDroneDeleteAllPictures: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} delete all pictures",
            func: "blockDroneDeleteAllPictures",
            readName: "Delete All Pictures",
            concept: "flight control"
        },
        blockDroneVarSetNumPictures: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} set {variables} to number of pictures on drone",
            func: "blockDroneVarSetNumPictures",
            readName: "Set Variable to Number of Pictures on Drone",
            concept: "flight control"
        },
        blockDroneSetProductName: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} set drone name to {string:My Drone}",
            func: "blockDroneSetProductName",
            readName: "Set Drone Name",
            concept: "flight control"
        },
        valueDroneHasGrabber: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-drone.png} has grabber?",
            func: "valueDroneHasGrabber",
            readName: "Has Grabber?",
            concept: "flight control"
        },
        blockDroneControlGrabber: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} {grabbercmd:close} grabber",
            func: "blockDroneControlGrabber",
            readName: "Control Grabber",
            concept: "flight control"
        },
        valueDroneHasCannon: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-drone.png} has cannon?",
            func: "valueDroneHasCannon",
            readName: "Has Cannon?",
            concept: "flight control"
        },
        blockDroneControlCannon: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} fire cannon",
            func: "blockDroneControlCannon",
            readName: "Control Cannon",
            concept: "flight control"
        },
        blockDroneSetFlyingMode: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} set flying mode {flyingmode:quadcopter}",
            func: "blockDroneSetFlyingMode",
            readName: "Set Flying Mode",
            concept: "flight control"
        },
        blockDroneSetPlaneSpeed: {
            cat: "hardware",
            label: "{image:ide/imgs/button-drone.png} set plane speed {planespeed:low}",
            func: "blockDroneSetPlaneSpeed",
            readName: "Set Plane Speed",
            concept: "flight control"
        },
        blockJumpingSumoStop: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} stop",
            func: "blockJumpingSumoStop",
            readName: "Stop",
            concept: "ground control"
        },
        blockJumpingSumoEmergency: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} emergency",
            func: "blockJumpingSumoEmergency",
            readName: "Emergency",
            concept: "ground control"
        },
        blockJumpingSumoJump: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} jump {jumpingsumojumps:long}",
            func: "blockJumpingSumoJump",
            readName: "Jump",
            concept: "ground control"
        },
        blockJumpingSumoAnimation: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} perform {jumpingsumoanimations:spin}",
            func: "blockJumpingSumoAnimation",
            readName: "Perform",
            concept: "ground control"
        },
        blockJumpingSumoForward: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} forward for {number:1} seconds",
            func: "blockJumpingSumoForward",
            readName: "Go Forward For",
            concept: "ground control"
        },
        blockJumpingSumoBackward: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} backward for {number:1} seconds",
            func: "blockJumpingSumoBackward",
            readName: "Go Backward For",
            concept: "ground control"
        },
        blockJumpingSumoTurnCW: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} turn right by {number:90} degrees",
            func: "blockJumpingSumoTurnCW",
            readName: "Turn Right",
            concept: "ground control"
        },
        blockJumpingSumoTurnCCW: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} turn left by {number:90} degrees",
            func: "blockJumpingSumoTurnCCW",
            readName: "Turn Left",
            concept: "ground control"
        },
        blockJumpingSumoSetSpeed: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} set drive speed to {number:50}",
            func: "blockJumpingSumoSetSpeed",
            readName: "Set Speed To",
            concept: "ground control"
        },
        blockJumpingSumoSetTurn: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} set turn rate to {number:50}",
            func: "blockJumpingSumoSetTurn",
            readName: "Set Turn To",
            concept: "ground control"
        },
        blockJumpingSumoMove: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} drive and turn for {number:1} seconds",
            func: "blockJumpingSumoMove",
            readName: "Move",
            concept: "ground control"
        },
        blockJumpingSumoStart: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} start",
            func: "blockJumpingSumoStart",
            readName: "Start",
            concept: "ground control"
        },
        blockJumpingSumoPose: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} pose {jumpingsumopositions:balancing}",
            func: "blockJumpingSumoPose",
            readName: "Pose",
            concept: "ground control"
        },
        blockJumpingSumoSetVolume: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} set volume to {number:50}",
            func: "blockJumpingSumoSetVolume",
            readName: "Set Volume To",
            concept: "ground control"
        },
        blockJumpingSumoSetAudioTheme: {
            cat: "hardware",
            label: "{image:ide/imgs/button-jumpingsumo.png} set audio theme to {jumpingsumoaudiotheme:default}",
            func: "blockJumpingSumoSetAudioTheme",
            readName: "Set Audio Theme To",
            concept: "ground control"
        },
        blockWedo2RunMotorFor: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}run motor for {number:1} seconds",
            func: "blockWedo2RunMotorFor",
            readName: "Run Motor For",
            concept: "lego control"
        },
        blockWedo2SetMotorPower: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}set motor power {number:50}",
            func: "blockWedo2SetMotorPower",
            readName: "Set Motor Power",
            concept: "lego control"
        },
        blockWedo2SetMotorDirection: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}set motor direction {wedo2motordirection:clockwise}",
            func: "blockWedo2SetMotorDirection",
            readName: "Set Motor Direction",
            concept: "lego control"
        },
        blockWedo2MotorOn: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}start motor",
            func: "blockWedo2MotorOn",
            readName: "Start Motor",
            concept: "lego control"
        },
        blockWedo2MotorOff: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}stop motor",
            func: "blockWedo2MotorOff",
            readName: "Stop Motor",
            concept: "lego control"
        },
        blockWedo2MotorDrift: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}drift motor",
            func: "blockWedo2MotorDrift",
            readName: "Drift Motor",
            concept: "lego control"
        },
        valueWedo2MotorPower: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}motor power",
            func: "valueWedo2MotorPower",
            readName: "Motor Power",
            concept: "lego control"
        },
        valueWedo2MotorDirection: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}motor direction",
            func: "valueWedo2MotorDirection",
            readName: "Motor Direction",
            concept: "lego control"
        },
        valueWedo2ConnectedTo: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}connected to {wedo2sensorormotor:motor}?",
            func: "valueWedo2ConnectedTo",
            readName: "Connected To",
            concept: "lego control"
        },
        blockWedo2SetLightColor: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}set light color {number:1}",
            func: "blockWedo2SetLightColor",
            readName: "Set Light Color",
            concept: "lego control"
        },
        valueWedo2TiltSensorDirection: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}tilt direction",
            func: "valueWedo2TiltSensorDirection",
            readName: "Tilt Direction",
            concept: "lego control"
        },
        blockWedo2SetTiltSensorMode: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}set tilt sensor mode {wedo2tiltsensormode:direction}",
            func: "blockWedo2SetTiltSensorMode",
            readName: "Set Tilt Sensor Mode",
            concept: "lego control"
        },
        valueWedo2TiltSensorMode: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}tilt sensor mode",
            func: "valueWedo2TiltSensorMode",
            readName: "Tile Sensor Mode",
            concept: "lego control"
        },
        valueWedo2TiltSensorAngle: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}tilt angle {wedo2tiltsensorangle:x}",
            func: "valueWedo2TiltSensorAngle",
            readName: "Tilt Angle",
            concept: "lego control"
        },
        valueWedo2TiltSensorBumpCount: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}tilt bump count {wedo2tiltbumpdirection:x}",
            func: "valueWedo2TiltSensorBumpCount",
            readName: "Tilt Bump Count",
            concept: "lego control"
        },
        blockWedo2SensorReset: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}reset {wedo2resettablesensor:tilt sensor}",
            func: "blockWedo2SensorReset",
            readName: "Reset Sensor",
            concept: "lego control"
        },
        valueWedo2MotionSensorDistance: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}distance",
            func: "valueWedo2MotionSensorDistance",
            readName: "Distance",
            concept: "lego control"
        },
        blockWedo2SetMotionSensorMode: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}set motion sensor mode {wedo2motionsensormode:distance}",
            func: "blockWedo2SetMotionSensorMode",
            readName: "Set Motion Sensor Mode",
            concept: "lego control"
        },
        valueWedo2MotionSensorMode: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}motion sensor mode",
            func: "valueWedo2MotionSensorMode",
            readName: "Motion Sensor Mode",
            concept: "lego control"
        },
        valueWedo2MotionSensorCount: {
            cat: "hardware",
            value: "boolean",
            label: "{image:ide/imgs/button-wedo2.png}motion sensor count",
            func: "valueWedo2MotionSensorCount",
            readName: "Motion Sensor Count",
            concept: "lego control"
        },
        blockWedo2PlayToneFor: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}play tone with frequency {number:500} Hz for {number:1} secs",
            func: "blockWedo2PlayToneFor",
            readName: "Play Tone For",
            concept: "lego control"
        },
        blockWedo2StopTone: {
            cat: "hardware",
            label: "{image:ide/imgs/button-wedo2.png}stop playing tone",
            func: "blockWedo2StopTone",
            readName: "Stop Playing Tone",
            concept: "lego control"
        },
        blockHueState: {
            cat: "hardware",
            label: "{image:ide/imgs/button-hue.png} turn on light {boolean}",
            func: "blockHueState",
            readName: "Turn On Light",
            concept: "home control"
        },
        valueHueState: {
            cat: "hardware",
            value: "number",
            label: "{image:ide/imgs/button-hue.png} is on?",
            func: "valueHueState",
            readName: "On?",
            concept: "home control"
        },
        blockHueColor: {
            cat: "hardware",
            label: "{image:ide/imgs/button-hue.png} set color to {color}",
            func: "blockHueColor",
            readName: "Set Color To",
            concept: "home control"
        },
        blockHueSetHue: {
            cat: "hardware",
            label: "{image:ide/imgs/button-hue.png} set hue to {number:50}",
            func: "blockHueSetHue",
            readName: "Set Hue To",
            concept: "home control"
        },
        blockHueChangeHue: {
            cat: "hardware",
            label: "{image:ide/imgs/button-hue.png} change hue by {number:10}",
            func: "blockHueChangeHue",
            readName: "Change Hue By",
            concept: "home control"
        },
        blockHueBrightness: {
            cat: "hardware",
            label: "{image:ide/imgs/button-hue.png} set brightness to {number:100}",
            func: "blockHueBrightness",
            readName: "Set Brightness To",
            concept: "home control"
        },
        valueHueBrightness: {
            cat: "hardware",
            value: "number",
            label: "{image:ide/imgs/button-hue.png} brightness",
            func: "valueHueBrightness",
            readName: "Brightness",
            concept: "home control"
        }
    },
    g_varBlocks = [g_steps.blockVarPropSet, g_steps.valueVarPropGet, g_steps.blockVarSet, g_steps.blockVarChangeBy],
    g_listBlocks = [g_steps.blockListAdd, g_steps.blockListDel, g_steps.blockListInsert, g_steps.blockListReplace, g_steps.valueListItem, g_steps.valueListLength, g_steps.valueListContains],
    g_objBlocks = [g_steps.blockObjSet, g_steps.blockObjDel, g_steps.valueObjGet, g_steps.valueObjLength, g_steps.valueObjKeys, g_steps.valueObjValues, g_steps.valueListNew, g_steps.valueObjNew],
    g_palette = [{
        label: "常用",
        cat: "common",
        items: [g_steps.registerFlagTrigger, g_steps.registerKeyTrigger, g_steps.registerSpriteTrigger, g_steps.blockMotionMove, g_steps.blockMotionPointTowards, g_steps.blockMotionPointAngle, g_steps.blockMotionBounceOnEdge, g_steps.blockMotionGoTowards, g_steps.blockMotionTurnCW, g_steps.blockMotionTurnCCW,
            g_steps.registerTrigger, g_steps.valueSensingTouchingSprite, g_steps.blockControlWait, g_steps.blockControlRepeat, g_steps.blockControlForever, g_steps.blockLooksNextCostume, g_steps.blockLooksSwitchCostume, g_steps.blockLooksShow, g_steps.blockLooksHide, g_steps.blockSoundPlayUntilDone, g_steps.blockLooksSayFor, g_steps.blockMotionRotationStyle, g_steps.valueSensingKeyPressed, g_steps.blockControlIf, g_steps.valueControlIfElse, g_steps.valueSensingMouseDown, g_steps.valueOpNot, g_steps.blockLooksChangeSizeBy, g_steps.blockLooksSetSize,
            g_steps.blockMotionGlide, g_steps.blockMotionGoTo, g_steps.blockMotionChangeXBy, g_steps.blockMotionChangeYBy, g_steps.valueOpRandom, g_steps.blockAnimationSimpleSwitchCostume, g_steps.blockAnimationSimpleSwitchCostumeAndWait, g_steps.blockLooksChangeEffect, g_steps.blockLooksClearEffects, g_steps.blockPenDown, g_steps.blockPenUp, g_steps.blockPenSetColor, g_steps.blockPenSetSize, g_steps.blockPenClear, g_steps.blockPenStamp, g_steps.valueSensingTouchingColor, g_steps.blockInlineComment
        ]
    }, {
        label: "事件",
        cat: "events",
        items: [{
            label: "事件处理器",
            items: [g_steps.registerFlagTrigger, g_steps.registerSpriteTrigger, g_steps.registerKeyTrigger, g_steps.registerBroadcastTrigger, g_steps.registerTrigger, g_steps.registerCloned, g_steps.registerBackgroundChange]
        }, {
            label: "事件",
            items: [g_steps.blockControlBroadcast, g_steps.blockControlBroadcastWait, g_steps.blockControlPostMessage, g_steps.blockControlPostMessageAndWait, g_steps.valueControlMessageValue, g_steps.valueControlMessageSource]
        }, {
            label: "信息",
            items: [g_steps.blockComment,
                g_steps.blockInlineComment
            ]
        }]
    }, {
        label: "控制",
        cat: "flow",
        items: [{
            label: "条件",
            items: [g_steps.blockControlIf, g_steps.valueControlIfElse, g_steps.blockControlIfElse]
        }, {
            label: "循环",
            items: [g_steps.blockControlForever, g_steps.blockControlRepeat, g_steps.blockControlForeverIf, g_steps.blockControlWaitUntil, g_steps.blockControlWhile, g_steps.blockControlRepeatUntil, g_steps.blockControlFor, g_steps.blockControlForEach, g_steps.blockControlBreak, g_steps.blockControlContinue]
        }, {
            label: "克隆",
            items: [g_steps.blockControlCloneActor,
                g_steps.valueControlLastClonedActor, g_steps.valueControlCloneName, g_steps.valueControlIsClone, g_steps.blockControlDeleteActor
            ]
        }, {
            label: "延迟",
            items: [g_steps.blockControlWait]
        }, {
            label: "调试",
            items: [g_steps.blockControlDebugBreak, g_steps.blockControlDebugBreakOn]
        }, {
            label: "高级",
            items: [g_steps.blockControlStop]
        }]
    }, {
        label: "动作",
        cat: "motion",
        items: [{
            label: "移动",
            items: [g_steps.blockMotionMove, g_steps.blockMotionGoTo, g_steps.blockMotionGoTowards, g_steps.blockMotionGlide, g_steps.blockMotionBounceOnEdge]
        },
            {
                label: "位置",
                items: [g_steps.blockMotionChangeXBy, g_steps.blockMotionSetX, g_steps.blockMotionChangeYBy, g_steps.blockMotionSetY, g_steps.valueMotionXPosition, g_steps.valueMotionYPosition]
            }, {
                label: "旋转",
                items: [g_steps.blockMotionRotationStyle, g_steps.blockMotionTurnCW, g_steps.blockMotionTurnCCW, g_steps.blockMotionPointDirection, g_steps.blockMotionPointAngle, g_steps.blockMotionPointTowards, g_steps.valueMotionDirection, g_steps.valueMotionAngle]
            },
            g_steps.blockMotionMotorOnFor, g_steps.blockMotionMotorOn,
            g_steps.blockMotionMotorOff, g_steps.blockMotionMotorPower, g_steps.blockMotionMotorDirection
        ]
    }, {
        label: "动画",
        cat: "animation",
        items: [{
            label: "基本动画",
            items: [g_steps.blockAnimationSimpleSwitchCostume, g_steps.blockAnimationSimpleSwitchCostumeAndWait, g_steps.blockAnimationSetSpeed, g_steps.blockAnimationAnimate]
        }, {
            label: "角色部位",
            items: [g_steps.blockLooksSetCharacterPart, g_steps.valueLooksGetCharacterPart]
        }, {
            label: "动画控制",
            items: [g_steps.blockAnimationWaitFor, g_steps.blockAnimationStop,
                g_steps.valueAnimationTime, g_steps.valueAnimationIsRunning, g_steps.registerAnimationDone
            ]
        }, {
            label: "高级动画",
            items: [g_steps.blockAnimationSimpleMoveBy, g_steps.blockAnimationSimpleMoveTo, g_steps.blockAnimationSimpleScaleBy, g_steps.blockAnimationSimpleScaleTo, g_steps.blockAnimationSimpleRotateBy, g_steps.blockAnimationSimpleRotateTo, g_steps.blockAnimationSimpleBezierBy, g_steps.blockAnimationSimpleBezierTo, g_steps.blockAnimationSimpleEffectBy, g_steps.blockAnimationSimpleEffectTo]
        }]
    }, {
        label: "外观",
        cat: "looks",
        items: [{
            label: "外观",
            items: [g_steps.blockLooksSwitchCostume, g_steps.blockLooksNextCostume, g_steps.blockLooksFirstCostumeInGroup, g_steps.blockLooksNextCostumeInGroup, g_steps.valueLooksCostumeNum, g_steps.valueLooksCostumeName, g_steps.blockLooksBackgroundColor, g_steps.blockLooksSwitchBackground, g_steps.blockLooksSwitchBackgroundAndWait, g_steps.blockLooksNextBackground, g_steps.blockLooksFirstBackgroundInGroup, g_steps.blockLooksNextBackgroundInGroup, g_steps.valueLooksBackground, g_steps.valueLooksBackgroundName]
        },
            {
                label: "对话框",
                items: [g_steps.blockLooksSetBubble, g_steps.blockLooksSayFor, g_steps.blockLooksSay, g_steps.blockLooksThinkFor, g_steps.blockLooksThink, g_steps.blockLooksSetLabel]
            }, {
                label: "水平",
                items: [g_steps.blockLooksViewportCamera, g_steps.blockLooksSetLevel, g_steps.blockLooksSetLevelWithActors, g_steps.valueLooksGetLevel, g_steps.valueLooksGetLevelNum, g_steps.valueLooksNumLevels]
            }, {
                label: "图层",
                items: [g_steps.blockLooksLayer, g_steps.valueLooksLayer, g_steps.blockLooksGoFront, g_steps.blockLooksGoBack,
                    g_steps.blockLooksMoveBack, g_steps.blockLooksMoveFront
                ]
            }, {
                label: "可见性",
                items: [g_steps.blockLooksShow, g_steps.blockLooksHide, g_steps.valueLooksIsHidden, g_steps.blockLooksSetSize, g_steps.blockLooksChangeSizeBy, g_steps.valueLooksSize]
            }, {
                label: "特殊效果",
                items: [g_steps.blockLooksChangeEffect, g_steps.blockLooksSetEffect, g_steps.blockLooksClearEffects]
            }
        ]
    }, {
        label: "感应",
        cat: "sensing",
        items: [{
            label: "监测",
            items: [g_steps.valueSensingTouchingSprite, g_steps.valueSensingTouchingCloneOf, g_steps.valueSensingTouchedActorName,
                g_steps.valueSensingTouchingColor, g_steps.valueSensingSeeColor, g_steps.valueSensingDistanceToSprite
            ]
        }, {
            label: "用户输入",
            items: [g_steps.blockSensingAskAndWait, g_steps.blockSensingAskChoices, g_steps.valueSensingAnswer, g_steps.valueSensingMouseX, g_steps.valueSensingMouseY, g_steps.valueSensingMouseDown, g_steps.valueSensingKeyPressed]
        }, {
            label: "加速度",
            items: [g_steps.valueSensingTiltAngle, g_steps.valueSensingTiltAmount, g_steps.valueSensingAccelerometerX, g_steps.valueSensingAccelerometerY]
        }, {
            label: "时间",
            items: [g_steps.blockSensingResetTimer, g_steps.valueSensingTimer, g_steps.valueSensingDateTime]
        }, {
            label: "角色属性",
            items: [g_steps.blockSensingSpriteProperty, g_steps.valueSensingSpriteProperty, g_steps.valueSensingActorName, g_steps.valueSensingActorNameAt, g_steps.valueSensingNumActors]
        }, {
            label: "用户属性",
            items: [g_steps.valueSensingUserId, g_steps.valueSensingUserFirstName]
        }, {
            label: "屏幕尺寸",
            items: [g_steps.valueSensingScreenLeft, g_steps.valueSensingScreenRight, g_steps.valueSensingScreenTop,
                g_steps.valueSensingScreenBottom, g_steps.valueSensingStageProperty
            ]
        }]
    }, {
        label: "声音",
        cat: "sound",
        items: [{
            label: "音符",
            items: [g_steps.blockSoundPlayDrum, g_steps.blockSoundRest, g_steps.blockSoundPlayNote, g_steps.blockSoundSetInstrument, g_steps.blockSoundChangeTempo, g_steps.blockSoundSetTempo, g_steps.valueSoundTempo]
        }, {
            label: "声音",
            items: [g_steps.blockSoundPlayUntilDone, g_steps.blockSoundPlay, g_steps.blockSoundStopActor, g_steps.blockSoundStopAll, g_steps.blockSoundChangeVolume, g_steps.blockSoundSetVolume,
                g_steps.valueSoundVolume
            ]
        }]
    }, {
        label: "操作",
        cat: "operator",
        items: [{
            label: "基础操作",
            items: [g_steps.valueOpAdd, g_steps.valueOpSubtract, g_steps.valueOpMultiply, g_steps.valueOpDivide, g_steps.valueOpMod, g_steps.valueOpBinary, g_steps.valueOpExpression]
        }, {
            label: "数学函数",
            items: [g_steps.valueOpRound, g_steps.valueOpRandom, g_steps.valueOpMath, g_steps.valueOpMath2, g_steps.valueOpConstants]
        }, {
            label: "布尔值",
            items: [g_steps.valueOpLess, g_steps.valueOpEqual, g_steps.valueOpGreater, g_steps.valueOpAnd,
                g_steps.valueOpOr, g_steps.valueOpNot, g_steps.valueOpBitNot
            ]
        }, {
            label: "字符串",
            items: [g_steps.valueOpJoin, g_steps.valueOpLetter, g_steps.valueOpLength, g_steps.valueOpTextSplit, g_steps.valueOpTextReplace, g_steps.valueOpTextIndex, g_steps.valueOpTextLastIndex, g_steps.valueOpTextSubstring, g_steps.valueOpTextTransform, g_steps.valueOpTextFormat]
        }]
    }, {
        label: "画笔",
        cat: "pen",
        items: [{
            label: "画笔动作",
            items: [g_steps.blockPenClear, g_steps.blockPenDown, g_steps.blockPenUp, g_steps.blockPenChangeSize, g_steps.blockPenSetSize,
                g_steps.blockPenStamp
            ]
        }, {
            label: "颜色",
            items: [g_steps.blockPenSetColor, g_steps.blockPenChangeHue, g_steps.blockPenSetHue, g_steps.blockPenChangeShade, g_steps.blockPenSetShade, g_steps.blockPenSetFillColor, g_steps.blockPenSetNoFill]
        }, {
            label: "文本",
            items: [g_steps.blockPenSetFont, g_steps.blockPenSetFontColor, g_steps.blockPenDrawText, g_steps.blockPenDrawTextAt]
        }, {
            label: "图形",
            items: [g_steps.blockPenDrawPoint, g_steps.blockPenDrawLine, g_steps.blockPenDrawRectangle, g_steps.blockPenDrawRectangleLocal, g_steps.blockPenDrawTriangle,
                g_steps.blockPenDrawEllipse, g_steps.blockPenDrawEllipseLocal, g_steps.blockPenDrawBezier
            ]
        }]
    }, {
        label: "物理",
        cat: "physics",
        items: [{
            label: "基本",
            items: [g_steps.blockPhysicsStart, g_steps.blockPhysicsStop, g_steps.blockPhysicsSetGravity, g_steps.blockPhysicsSetActorActive, g_steps.blockPhysicsSetActorStatic, g_steps.blockPhysicsSetActorGeometry]
        }, {
            label: "碰撞",
            items: [g_steps.registerSpriteCollision, g_steps.valuePhysicsCollidedWithSprite, g_steps.valuePhysicsCollidedWithName, g_steps.valuePhysicsTouchingActor]
        },
            {
                label: "物理属性",
                items: [g_steps.blockPhysicsSetDensity, g_steps.blockPhysicsSetFriction, g_steps.blockPhysicsSetRestitution, g_steps.valuePhysicsDensity, g_steps.valuePhysicsFriction, g_steps.valuePhysicsRestitution]
            }, {
                label: "强制",
                items: [g_steps.blockPhysicsApplyForce, g_steps.blockPhysicsApplyImpulse, g_steps.blockPhysicsApplyTorque, g_steps.blockPhysicsApplyForceAngle, g_steps.blockPhysicsApplyImpulseAngle, g_steps.blockPhysicsApplyForceXY, g_steps.blockPhysicsApplyImpulseXY, g_steps.blockPhysicsSetAngularDamping,
                    g_steps.blockPhysicsSetLinearDamping, g_steps.valuePhysicsXGravity, g_steps.valuePhysicsYGravity, g_steps.valuePhysicsAngularDamping, g_steps.valuePhysicsLinearDamping, g_steps.valuePhysicsInertia
                ]
            }, {
                label: "速度",
                items: [g_steps.blockPhysicsSetLinearVelocity, g_steps.blockPhysicsSetLinearVelocityXY, g_steps.blockPhysicsSetAngularVelocity, g_steps.valuePhysicsAngularVelocity, g_steps.valuePhysicsXVelocity, g_steps.valuePhysicsYVelocity, g_steps.valuePhysicsIsAwake]
            }, {
                label: "高级",
                items: [g_steps.valuePhysicsGetProperty,
                    g_steps.blockPhysicsApply, g_steps.blockPhysicsApplyXY
                ]
            }
        ]
    //}, {
    //    label: "第三方硬件",
    //    cat: "hardware",
    //    items: [{
    //        label: "Sphero智能球",
    //        items: [g_steps.blockSpheroSetSpeed, g_steps.blockSpheroRoll, g_steps.blockSpheroStop, g_steps.blockSpheroTurnCW, g_steps.blockSpheroTurnCCW, g_steps.blockSpheroHeading, g_steps.blockSpheroColor, g_steps.valueSpheroSpeed, g_steps.valueSpheroHeading, g_steps.valueSpheroConnected, g_steps.valueSpheroProperty, g_steps.valueSpheroOdometer, g_steps.valueSpheroCollidedSinceLastCheck, g_steps.registerHardwareTrigger,
    //            g_steps.blockSpheroSetStabilization, g_steps.blockSpheroSet
    //        ]
    //    }, {
    //        label: "Drone无人机",
    //        items: [g_steps.blockDroneTakeOff, g_steps.blockDroneLand, g_steps.blockDroneStop, g_steps.blockDroneEmergency, g_steps.blockDroneSetSpeed, g_steps.blockDroneForward, g_steps.blockDroneBackward, g_steps.blockDroneLeft, g_steps.blockDroneRight, g_steps.blockDroneTurnCW, g_steps.blockDroneTurnCCW, g_steps.blockDroneAnimation, g_steps.blockDroneUp, g_steps.blockDroneDown, g_steps.valueDroneConnected, g_steps.blockDroneStartUp, g_steps.blockDroneStartDown,
    //            g_steps.blockDroneStartRotateLeft, g_steps.blockDroneStartRotateRight, g_steps.blockDroneTakePicture, g_steps.blockDroneFetchPicture, g_steps.blockDroneDeletePicture, g_steps.blockDroneVarSetNumPictures, g_steps.blockDroneSetProductName, g_steps.valueDroneHasGrabber, g_steps.blockDroneControlGrabber, g_steps.valueDroneHasCannon, g_steps.blockDroneControlCannon, g_steps.blockDroneSetFlyingMode
    //        ]
    //    }, {
    //        label: "WeDo 2.0乐高遥控机器人",
    //        items: [g_steps.blockWedo2RunMotorFor, g_steps.blockWedo2SetMotorPower, g_steps.blockWedo2SetMotorDirection,
    //            g_steps.blockWedo2MotorOn, g_steps.blockWedo2MotorOff, g_steps.blockWedo2MotorDrift, g_steps.valueWedo2MotorPower, g_steps.valueWedo2MotorDirection, g_steps.valueWedo2ConnectedTo, g_steps.blockWedo2SetLightColor, g_steps.valueWedo2TiltSensorDirection, g_steps.blockWedo2SetTiltSensorMode, g_steps.valueWedo2TiltSensorMode, g_steps.valueWedo2TiltSensorAngle, g_steps.valueWedo2TiltSensorBumpCount, g_steps.blockWedo2SensorReset, g_steps.valueWedo2MotionSensorDistance, g_steps.blockWedo2SetMotionSensorMode, g_steps.valueWedo2MotionSensorMode,
    //            g_steps.valueWedo2MotionSensorCount, g_steps.blockWedo2PlayToneFor, g_steps.blockWedo2StopTone
    //        ]
    //    }, {
    //        label: "Hue飞利浦智能照明",
    //        items: [g_steps.blockHueState, g_steps.valueHueState, g_steps.blockHueColor, g_steps.blockHueSetHue, g_steps.blockHueChangeHue, g_steps.blockHueBrightness, g_steps.valueHueBrightness]
    //    }, {
    //        label: "Parrot Jumping Sumo遥控机器人",
    //        items: [g_steps.blockJumpingSumoStop, g_steps.blockJumpingSumoEmergency, g_steps.blockJumpingSumoJump, g_steps.blockJumpingSumoAnimation, g_steps.blockJumpingSumoForward, g_steps.blockJumpingSumoBackward,
    //            g_steps.blockJumpingSumoTurnCW, g_steps.blockJumpingSumoTurnCCW, g_steps.blockJumpingSumoSetSpeed, g_steps.blockJumpingSumoSetTurn, g_steps.blockJumpingSumoMove, g_steps.blockJumpingSumoStart, g_steps.blockJumpingSumoPose, g_steps.blockJumpingSumoSetVolume, g_steps.blockJumpingSumoSetAudioTheme
    //        ]
    //    }]
    }, {
        label: "变量",
        cat: "variables",
        items: []
    }, {
        label: "函数",
        cat: "functions",
        items: []
    }];