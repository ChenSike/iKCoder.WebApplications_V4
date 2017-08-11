var Sprites = {
    _blankImg: "ide/imgs/blank.png",
    _listeners: [],
    _bufferCanvas: null,
    _skelCache: {},
    _skelLoad: []
};

function Sprite(b) {
    this.label = this.classname = this.id = "";
    this.scripts = [];
    this.costumes = [];
    this.sounds = [];
    this.varDefaults = {};
    this.variables = {};
    this.varTransient = {};
    this.lists = {};
    this.animations = [];
    this.lastCollisionName = "";
    this.lastCollisionNormal = {
        x: 0,
        y: 0
    };
    this.lastActorCollisionName = "";
    this.lastActorCollisionNormal = {
        x: 0,
        y: 0
    };
    this.hidden = false;
    this.spriteObj = null;
    this.currentCostume = 0;
    this.penDown = false;
    this.penColor = "#000000";
    this.fillColor = "";
    this.penWidth = 1;
    this.font = "normal 18px Comic Sans MS,cursive";
    this.fontColor = "#000000";
    this.volume = 100;
    $.extend(this, b);
    b = getColorComponents(this.penColor);
    this.penColor = b[0];
    this.penHue = b[1];
    this.penShade = 255;
    this.filtersChanged = false;
    this.filters = [];
    this.animationSpeed = 30;
    this.skeleton = {
        type: "",
        parts: {},
        skeletonData: null,
        textures: {},
        skeleton: null,
        animationName: null,
        totalTime: null,
        lastTime: null,
        stateData: null,
        state: null
    }
}
Sprite.prototype.update = function (b, c) {
    if (b["class"] !== void 0) this.classname = b["class"];
    if (b.name != this.label) {
        var d = b.name,
            e = d,
            f = 1,
            g = false;
        do
            for (var g = false, h = 0; h < Runtime.sprites.length; h++)
                if (Runtime.sprites[h] != this && Runtime.sprites[h].label == e) {
                    g = true;
                    e = d + f;
                    f++;
                    break
                }
        while (g);
        this.label = e;
        Sprites._broadcastSpriteListeners("updateName", this, e)
    }
    if (b.costumes !== null) {
        this.costumes = [];
        this.currentCostume = 0;
        for (var j = b.costumes.length, h = 0; h < b.costumes.length; h++) {
            var k = this;
            this.addCostume(b.costumes[h],
                function () {
                    if (--j == 0) {
                        b.currentCostume !== null && k.setCostumeByName(b.currentCostume);
                        c && c(k)
                    }
                })
        }
    }
    b.skelType && b.skelParts && k.loadSkeleton(b.skelType, b.skelParts);
    if (b.sounds !== null) {
        this.sounds = [];
        for (h = 0; h < b.sounds.length; h++) {
            d = b.sounds[h];
            d.url = d;
            this.addSound(d)
        }
    }
    b.width !== void 0 && (b.height !== void 0 && this == Runtime.background) && Runtime.stage.setSize(Math.abs(b.width), Math.abs(b.height));
    if (b.expand && this == Runtime.background) Runtime.stage.expand = true;
    b.scale !== void 0 && this.spriteObj.setScale(b.scale);
    b.x !== void 0 && this.spriteObj.setPosition(Runtime.stage.getWidth() / 2 + b.x, this.spriteObj.y);
    b.y !== void 0 && this.spriteObj.setPosition(this.spriteObj.x, Runtime.stage.getHeight() / 2 - b.y);
    b.angle !== void 0 && this.spriteObj.setRotation(b.angle);
    b.layer !== void 0 && this.spriteObj.setZIndex(b.layer);
    b.rotateLock !== void 0 && this.spriteObj.setRotateLock(b.rotateLock);
    b.draggable !== void 0 && this.spriteObj.setDraggable(b.draggable);
    b.hidden !== void 0 && (b.hidden ? this.spriteObj.hide() : this.spriteObj.show());
    if (b.penColor !==
        void 0) {
        h = getColorComponents(b.penColor);
        this.penColor = h[0];
        this.penHue = h[1];
        this.penShade = 255
    }
    if (b.fillColor !== void 0) this.fillColor = b.fillColor;
    if (b.penWidth !== void 0) this.penWidth = b.penWidth;
    if (b.font !== void 0) this.font = b.font;
    if (b.fontColor !== void 0) this.fontColor = b.fontColor;
    if (b.volume !== void 0) this.volume = b.volume;
    if (b.variables !== void 0) this.variables = b.variables;
    if (b.lists !== void 0) this.lists = b.lists;
    Runtime.stage.draw()
};
Sprite.prototype.setFilter = function (b, c) {
    for (var d = false, e = 0; e < this.filters.length; e++)
        if (this.filters[e].filter == b) {
            this.filters[e] = {
                filter: b,
                options: c
            };
            d = true;
            break
        }
    d || this.filters.push({
        filter: b,
        options: c
    });
    this.filtersChanged = true
};
Sprite.prototype.getFilter = function (b) {
    for (var c = 0; c < this.filters.length; c++)
        if (this.filters[c].filter == b) return this.filters[c];
    return null
};
Sprite.prototype.clearFilters = function () {
    this.filters = [];
    this.filtersChanged = true
};
Sprite.prototype.applyFilters = function (b, c, d) {
    if (!b && this.costumes.length > 0) b = this.costumes[(this.currentCostume - 1) % this.costumes.length].img;
    if ((this.filtersChanged || c) && b && b.width && b.height) {
        var c = document.createElement("canvas"),
            e = c.getContext("2d");
        if (this.spriteObj) {
            c.width = b.naturalWidth;
            c.height = b.naturalHeight;
            if (!c.width) c.width = b.width;
            if (!c.height) c.height = b.height
        } else {
            c.width = Runtime.stage.getWidth();
            c.height = Runtime.stage.getHeight()
        }
        e.clearRect(0, 0, c.width, c.height);
        if (this.spriteObj) e.drawImage(b,
            0, 0);
        else if (Runtime.stage.tileLayer.scrollBgOffset) {
            c.width = b.naturalWidth;
            c.height = b.naturalHeight;
            e.drawImage(b, 0, 0)
        } else if (Runtime.stage.expand) {
            var f = c.height,
                g = b.width * c.height / b.height;
            e.drawImage(b, (c.width - g) / 2, (c.height - f) / 2, g, f)
        } else if (Runtime.stage.bgtype == "tile") {
            if (b && b.width > 0 && b.height > 0) {
                c.width = b.naturalWidth;
                c.height = b.naturalHeight;
                e.drawImage(b, 0, 0)
            }
        } else Runtime.stage.bgtype == "stretch" ? e.drawImage(b, 0, 0, c.width, c.height) : e.drawImage(b, (c.width - b.width) / 2, (c.height - b.height) /
            2);
        if (this.filters.length > 0) {
            f = this.filters[0];
            if (this.filters.length == 1 && (f.filter == "ghost" || f.filter == "opacity"))
                if (this == Runtime.background) {
                    Runtime.stage.backgroundLayer.alpha = 1 - f.options.value / 100;
                    if (Runtime.stage.backgroundLayer.alpha < 0) Runtime.stage.backgroundLayer.alpha = 0;
                    else if (Runtime.stage.backgroundLayer.alpha > 1) Runtime.stage.backgroundLayer.alpha = 1;
                    Runtime.stage.setBackgroundType(Runtime.stage.bgtype)
                } else {
                    this.spriteObj.alpha = 1 - f.options.value / 100;
                    if (this.spriteObj.alpha < 0) this.spriteObj.alpha =
                        0;
                    else if (this.spriteObj.alpha > 1) this.spriteObj.alpha = 1
                }
            else {
                for (var g = e.getImageData(0, 0, c.width, c.height), h = 0; h < this.filters.length; h++) {
                    f = this.filters[h];
                    if (f == "ghost" || f == "opacity")
                        if (this == Runtime.background) {
                            Runtime.stage.backgroundLayer.alpha = 1 - f.options.value / 100;
                            if (Runtime.stage.backgroundLayer.alpha < 0) Runtime.stage.backgroundLayer.alpha = 0;
                            else if (Runtime.stage.backgroundLayer.alpha > 1) Runtime.stage.backgroundLayer.alpha = 1;
                            Runtime.stage.setBackgroundType(Runtime.stage.bgtype)
                        } else {
                            this.spriteObj.alpha =
                                1 - f.options.value / 100;
                            if (this.spriteObj.alpha < 0) this.spriteObj.alpha = 0;
                            else if (this.spriteObj.alpha > 1) this.spriteObj.alpha = 1
                        }
                    else {
                        var j = JSManipulate[f.filter];
                        j && j.filter(g, f.options)
                    }
                }
                e.putImageData(g, 0, 0)
            }
        }
        d && d.call(this, c);
        this.filtersChanged = false
    } else d && d.call(this, b);
    return b
};
Sprite.prototype.bringIntoView = function () {
    if (!isFinite(this.spriteObj.scale.x) || !isFinite(this.spriteObj.scale.y)) this.spriteObj.setScale(1);
    else {
        this.spriteObj.width * this.spriteObj.scale.x < 8 && this.spriteObj.setScale(8 / this.spriteObj.width);
        this.spriteObj.height * this.spriteObj.scale.y < 8 && this.spriteObj.setScale(8 / this.spriteObj.height)
    }
    isFinite(this.spriteObj.rotation) || this.spriteObj.setRotation(0);
    isFinite(this.spriteObj.x) ? this.spriteObj.x < 0 ? this.spriteObj.setPosition(0 + (this.spriteObj.width - this.spriteObj.cx) *
        this.spriteObj.scale.x, this.spriteObj.y) : this.spriteObj.x > Runtime.stage.getWidth() && this.spriteObj.setPosition(Runtime.stage.getWidth() - this.spriteObj.cx * this.spriteObj.scale.x, this.spriteObj.y) : this.spriteObj.setPosition(Runtime.stage.getWidth() / 2, this.spriteObj.y);
    isFinite(this.spriteObj.y) ? this.spriteObj.y < 0 ? this.spriteObj.setPosition(this.spriteObj.x, 0 + (this.spriteObj.height - this.spriteObj.cy) * this.spriteObj.scale.y) : this.spriteObj.y > Runtime.stage.getHeight() && this.spriteObj.setPosition(this.spriteObj.x,
        Runtime.stage.getHeight() - this.spriteObj.cy * this.spriteObj.scale.y) : this.spriteObj.setPosition(this.spriteObj.x, Runtime.stage.getHeight() / 2);
    if (!this.spriteObj.visible) this.spriteObj.visible = true;
    if (isNaN(this.spriteObj.alpha) || this.spriteObj.alpha < 0.1) this.spriteObj.alpha = 1
};
Sprite.prototype.changeSpriteName = function (b) {
    for (var c = false, d = 0; d < Runtime.sprites.length; d++)
        if (Runtime.sprites[d].label == b) {
            c = true;
            break
        }
    if (!c && b) {
        this.label = b;
        Sprites._broadcastSpriteListeners("updateName", this, b)
    }
    return this.label
};
Sprite.prototype.getSoundByName = function (b) {
    var c = this.sounds.concat(Runtime.background.sounds);
    if (typeof b == "number") {
        b = (Math.floor(b) - 1) % c.length;
        b < 0 && (b = b + c.length);
        return [b, c[b]]
    }
    for (var d = 0; d < c.length; d++)
        if (c[d].name == b) return [d, c[d]];
    return null
};
Sprite.prototype.deleteSoundByName = function (b) {
    if (typeof b == "number") {
        b = Math.floor(b);
        b >= 0 && b < this.sounds.length && this.sounds.splice(b, 1)
    } else
        for (var c = 0; c < this.sounds.length; c++) {
            var d = this.sounds[c];
            if (d.name == b) {
                this.sounds.splice(c, 1);
                Sprites._broadcastSpriteListeners("updateDeleteSound", this, d);
                break
            }
        }
};
Sprite.prototype.addSound = function (b) {
    var c = 1,
        d = b.name;
    if (d) newName = d;
    else {
        d = "";
        newName = "1";
        c = 2
    }
    b.name = void 0;
    var e = false;
    do
        for (var e = false, f = 0; f < this.sounds.length; f++)
            if (this.sounds[f].name == newName) {
                e = true;
                newName = d + c;
                c++;
                break
            }
    while (e);
    b.name = newName;
    if (b.sound[0] != "/" && b.sound[0] != "h") b.sound = "medialib/" + b.sound;
    b.soundObj = soundManager.createSound({
        id: "s" + Math.random(),
        url: b.sound,
        volume: this.volume
    });
    this.sounds.push(b);
    Sprites._broadcastSpriteListeners("updateAddSound", this, b);
    return b
};
Sprite.prototype.getCostumes = function () {
    return this.costumes
};
Sprite.prototype.getCurrentCostume = function () {
    var b = null;
    this.costumes.length > 0 && (b = this.costumes[(this.currentCostume - 1) % this.costumes.length]);
    return b
};
Sprite.prototype.getCostumeByName = function (b) {
    var c = this.getCostumes();
    if (c.length > 0) {
        if (typeof b != "number") {
            for (var d = 0; d < c.length; d++)
                if (c[d].name == b) return [d, c[d]];
            b = coerceToNumber(b)
        }
        b = (Math.floor(b) - 1) % c.length;
        b < 0 && (b = b + c.length);
        return [b, c[b]]
    }
    return null
};
Sprite.prototype.deleteCostumeByName = function (b) {
    if (b = this.getCostumeByName(b)) {
        this.costumes.splice(b[0], 1);
        this.currentCostume = b[0] - 1;
        this.setCostumeByName(b[0]);
        Sprites._broadcastSpriteListeners("updateDeleteCostume", this, b[1])
    }
};
Sprite.prototype.setCostumeByName = function (b) {
    if (this.spriteObj == null && this.costumes.length == 0) Runtime.stage.setBackground(null);
    else {
        var c = false;
        if (this.skeleton.skeletonData) {
            for (var b = "" + b, d = this.skeleton.skeletonData.animations, e = 0; e < d.length; e++)
                if (d[e].name == b) {
                    if (b != this.skeleton.animationName) {
                        this.skeleton.state.setAnimationByName(0, b, true);
                        this.skeleton.animationName = b
                    }
                    c = true;
                    break
                }
            if (c) {
                this.updateSkeleton();
                var f = this;
                this.spriteObj.setSpriteDraw(function (b) {
                    f._drawSkeleton(b)
                }, f.skeleton.skeletonBounds.maxX -
                    f.skeleton.skeletonBounds.minX, f.skeleton.skeletonBounds.maxY - f.skeleton.skeletonBounds.minY);
                return
            }
        }
        this.skeleton.animationName = "";
        var g = this.getCostumeByName(b);
        if (this.spriteObj && !this.spriteObj.isImage()) this.currentCostume = -1;
        if (g && (this.currentCostume != g[0] + 1 || this.filtersChanged)) {
            this.currentCostume = g[0] + 1;
            f = this;
            this.spriteObj == null ? g[1].imgObj ? f.applyFilters(g[1].imgObj, true, function (b) {
                Runtime.stage.setBackgroundImg(b)
            }) : generateImageFromUrl(g[1].img, function (b) {
                g[1].imgObj = b;
                f.applyFilters(g[1].imgObj,
                    true,
                    function (b) {
                        Runtime.stage.setBackgroundImg(b)
                    })
            }) : g[1].img != "avatar://spine" && (g[1].imgObj ? f.applyFilters(g[1].imgObj, true, function (b) {
                f.spriteObj.setSpriteImg(b, g[1].cx, g[1].cy)
            }) : generateImageFromUrl(g[1].img, function (b) {
                g[1].imgObj = b;
                f.applyFilters(g[1].imgObj, true, function (b) {
                    f.spriteObj.setSpriteImg(b, g[1].cx, g[1].cy)
                })
            }))
        }
    }
};
Sprite.prototype.updateCostume = function () {
    if (this.costumes.length > 0 && this.filtersChanged) {
        var b = this.costumes[(this.currentCostume - 1) % this.costumes.length],
            c = this;
        if (this.spriteObj == null) {
            if (b.imgObj) {
                b.imgObj.onload = function () {
                    c.applyFilters(b.imgObj, false, function (b) {
                        Runtime.stage.setBackgroundImg(b)
                    })
                };
                c.applyFilters(b.imgObj, false, function (b) {
                    Runtime.stage.setBackgroundImg(b)
                })
            }
        } else if (b.imgObj) {
            b.imgObj.onload = function () {
                c.applyFilters(b.imgObj, false, function (d) {
                    c.spriteObj.setSpriteImg(d, b.cx,
                        b.cy)
                })
            };
            c.applyFilters(b.imgObj, false, function (d) {
                c.spriteObj.setSpriteImg(d, b.cx, b.cy)
            })
        }
    }
};
Sprite.prototype.addCostume = function (b, c) {
    var d = {
        hidden: b.hidden,
        name: b.name,
        img: b.img,
        cx: b.cx,
        cy: b.cy
    },
        e = 1,
        f = d.name;
    if (f) newName = f;
    else {
        f = "";
        newName = "1";
        e = 2
    }
    d.name = void 0;
    var g = false;
    do
        for (var g = false, h = 0; h < this.costumes.length; h++)
            if (this.costumes[h].name == newName) {
                g = true;
                newName = f + e;
                e++;
                break
            }
    while (g);
    d.name = newName;
    this.costumes.push(d);
    generateImageFromUrl(b.img, function (b) {
        d.imgObj = b;
        if (d.cx === void 0) d.cx = b.width / 2;
        if (d.cy === void 0) d.cy = b.height / 2;
        c && c(d.imgObj)
    });
    Sprites._broadcastSpriteListeners("updateAddCostume",
        this, d);
    return d
};
Sprite.prototype.cloneActor = function (b) {
    var c = ObjectIO.serializeSprite(this),
        d = this.label,
        e = 1,
        f = d + e,
        g = false;
    do
        for (var g = false, h = 0; h < Runtime.sprites.length; h++)
            if (Runtime.sprites[h].label == f) {
                g = true;
                e++;
                f = d + e;
                break
            }
    while (g);
    c.label = f;
    c = JSON.parse(JSON.stringify(c));
    return ObjectIO.deserializeSprite(c, b)
};
Sprite.prototype.copyActor = function (b) {
    var c = this,
        d = this.currentCostume,
        e = Sprites.addSprite({
            label: c.label,
            scale: c.spriteObj.scale.x,
            x: c.spriteObj.x - Runtime.stage.getWidth() / 2,
            y: -(c.spriteObj.y - Runtime.stage.getHeight() / 2),
            rotation: c.spriteObj.rotation,
            rotateLock: c.spriteObj.rotateLock,
            draggable: c.spriteObj.draggable,
            isHidden: !c.spriteObj.visible,
            costumeName: c.costumes[0].name,
            cx: c.costumes[0].cx,
            cy: c.costumes[0].cy,
            img: Sprites._blankImg,
            volume: c.volume,
            forceNumber: true,
            locked: c.locked ? true : false,
            zIndex: c.spriteObj.zIndex,
            classname: c.classname,
            penColor: c.penColor,
            fillColor: c.fillColor,
            font: c.font,
            fontColor: c.fontColor,
            penWidth: c.penWidth,
            bubble: c.bubble,
            skeletonType: c.skeleton ? c.skeleton.type : null,
            skeletonParts: c.skeleton ? c.skeleton.parts : null
        }, function (e) {
            if (e.spriteObj.physicsBody && c.physicsBody) {
                var g = Physics.getSpriteProperties(c.spriteObj);
                Physics.updateBody(e.spriteObj, {
                    isStatic: g.isStatic !== void 0 ? g.isStatic : false,
                    isActive: g.isActive !== void 0 ? g.isActive : true,
                    geometry: g.geometry,
                    density: g.density,
                    friction: g.friction,
                    restitution: g.restitution
                })
            }
            e.costumes = c.costumes;
            e.currentCostume = -1;
            e.setCostumeByName(d);
            c.spriteObj.zIndex && e.spriteObj.setZIndex(c.spriteObj.zIndex);
            b && b(e)
        });
    if (c.avatarid) e.avatarid = c.avatarid;
    e.sounds = this.sounds;
    e.variables = cloneObj(this.variables);
    e.varDefaults = this.varDefaults;
    e.lists = cloneObj(this.lists);
    e.varTransient = cloneObj(this.varTransient);
    e.scripts = this.scripts;
    Runtime.registerScripts(e);
    return e
};
Sprites.removeSprite = function (b) {
    if (b = Sprites.getSpriteByName(b)) {
        Runtime.stopScripts(b);
        b.deleteActor()
    }
};
Sprite.prototype.deleteActor = function () {
    for (var b = 0; b < Runtime.sprites.length; b++)
        if (Runtime.sprites[b] == this) {
            Runtime.sprites.splice(b, 1);
            break
        }
    Runtime.unregisterScripts(this);
    Runtime.stage.remove(this.spriteObj);
    Runtime.stage.draw();
    Sprites._broadcastSpriteListeners("delete", this)
};
Sprite.prototype.captureScreenshot = function () {
    var b = this.spriteObj.getImageData();
    $("body > canvas.screenshot").detach();
    var c = $('<canvas class="screenshot" style="display:none" width="' + b.width + '" height="' + b.height + '"></canvas>');
    $("body").append(c);
    var d = c[0].getContext("2d");
    d.putImageData(b, 0, 0);
    b = d.canvas.toDataURL();
    c.detach();
    return b
};
Sprite.prototype.whenReady = function (b) {
    this._ready ? b() : this._spriteReadyCallback = b
};
Sprite.prototype.getNumAnimations = function (b) {
    var c = 0;
    if (b)
        for (var d = 0; d < this.animations.length; d++) this.animations[d].name == b && c++;
    else c = this.animations.length;
    return c
};
Sprite.prototype.addAnimation = function (b) {
    if (b.animation == "costume")
        for (var c = 0; c < this.animations.length; c++)
            if (this.animations[c].animation == "costume") {
                if (this.animations[c].costumePrefix == b.costumePrefix) {
                    this.animations[c].startTime = Date.now();
                    this.animations[c].timeout = b.timeout;
                    return
                }
                this.animations.splice(c, 1);
                c--
            }
    this.animations.push(b)
};
Sprite.prototype.removeAnimations = function () {
    for (var b = {}, c = 0; c < this.animations.length; c++) b[this.animations[c].name] = true;
    this.animations.length = 0;
    for (var d in b) Runtime.triggerAnimationDone(d, this)
};
Sprite.prototype.removeAnimation = function (b) {
    for (var c = 0, d = -1, e = 0; e < this.animations.length; e++) this.animations[e] == b ? d = e : this.animations[e].name == b.name && c++;
    d >= 0 && this.animations.splice(d, 1);
    c <= 0 && Runtime.triggerAnimationDone(b.name, this)
};
Sprite.prototype.animate = function () {
    for (var b = this.animations.length - 1; b >= 0; b--) {
        var c = this.animations[b],
            d = false;
        switch (c.animation) {
            case "moveBy":
                d = this.animateMoveBy(c);
                break;
            case "moveTo":
                d = this.animateMoveTo(c);
                break;
            case "scaleTo":
                d = this.animateScaleTo(c);
                break;
            case "rotateBy":
                d = this.animateRotateBy(c);
                break;
            case "bezierTo":
                d = this.animateBezierTo(c);
                break;
            case "costume":
                d = this.animateSwitchCostume(c);
                break;
            case "effectTo":
                d = this.animateEffectTo(c)
        }
        d && this.removeAnimation(c)
    }
};
Sprite.prototype.adjustAnimationTime = function (b) {
    for (var c = this.animations.length - 1; c >= 0; c--) this.animations[c].startTime = this.animations[c].startTime + b
};
Sprite.prototype.nextCostumeInGroup = function (b, c) {
    var d = false;
    if (this.skeleton.skeletonData) {
        for (var e = this.skeleton.skeletonData.animations, f = 0; f < e.length; f++)
            if (e[f].name == b) {
                if (b != this.skeleton.animationName) {
                    this.skeleton.state.setAnimationByName(0, b, true);
                    this.skeleton.animationName = b
                }
                d = true;
                break
            }
        if (d) {
            this.updateSkeleton();
            var g = this;
            this.spriteObj.setSpriteDraw(function (b) {
                g._drawSkeleton(b)
            }, g.skeleton.skeletonBounds.maxX - g.skeleton.skeletonBounds.minX, g.skeleton.skeletonBounds.maxY - g.skeleton.skeletonBounds.minY);
            return
        }
    }
    d = this.getCostumes();
    f = this.getCostumeByName(this.currentCostume);
    e = 0;
    if (f && f[1].name.substring(0, b.length) == b) {
        e = (f[0] + 1) % d.length;
        c || (c = 1);
        for (f = 0; f < c; f++)
            for (var h = e, j = 0; j < d.length; h++, j++)
                if (d[h % d.length].name.substring(0, b.length) == b) {
                    e = h % d.length;
                    break
                }
    } else
        for (f = 0; f < d.length; f++)
            if (d[f].name.substring(0, b.length) == b) {
                e = f;
                break
            }
    this.setCostumeByName(e + 1)
};
Sprite.prototype.loadSkeleton = function (b, c) {
    this.skeleton.type = b;
    this.skeleton.parts = c;
    this._loadSkeleton()
};
Sprite.prototype._generatePreview = function () {
    var b = document.createElement("canvas");
    ctx = b.getContext("2d");
    b.width = 128;
    b.height = 128;
    ctx.save();
    if (this.skeleton.type == "Tiny" || this.skeleton.type == "Small") {
        ctx.translate(64, 64);
        ctx.scale(0.5, 0.5)
    } else if (this.skeleton.type == "Troll") {
        ctx.translate(64, 64);
        ctx.scale(0.25, 0.25)
    } else if (this.skeleton.type == "MonsterHighRig") {
        ctx.translate(64, 64);
        ctx.scale(0.3, 0.3)
    } else {
        ctx.translate(64, 64);
        ctx.scale(0.125, 0.125)
    }
    this._drawSkeleton(ctx);
    ctx.restore();
    return b
};
Sprite.prototype._loadSkeleton = function () {
    var b = this,
        c = b.skeleton.type;
    if (g_parts[c].alias) c = g_parts[c].alias;
    var d = 0,
        e;
    for (e in g_parts[c].parts)
        for (var f = g_parts[c].parts[e], g = 0; g < f.length; g++) d++;
    for (e in g_parts[c].parts) {
        f = g_parts[c].parts[e];
        if (!b.skeleton.parts[e] || b.skeleton.parts[e] == "blank")
            for (g = 0; g < f.length; g++) {
                var h = new Image;
                h.onload = function () {
                    b.updateSkeleton();
                    if (--d <= 0)
                        for (var c = 0; c < b.costumes.length; c++)
                            if (b.costumes[c].img == "avatar://spine") {
                                b.costumes[c].imgPreview = b._generatePreview().toDataURL("image/png");
                                window.WinAssets && WinAssets.update(true);
                                break
                            }
                };
                if (!b.skeleton.parts[e] && g_parts[c].defaultparts && g_parts[c].defaultparts[e]) {
                    var j = g_parts[c].defaultparts[e];
                    h.src = "ide/avatar/skins/" + c + "/" + b.skeleton.parts[j] + "/" + f[g] + ".png"
                } else h.src = Sprites._blankImg;
                b.skeleton.textures[f[g]] = h
            } else
            for (g = 0; g < f.length; g++) {
                h = new Image;
                h.onload = function () {
                    b.updateSkeleton();
                    Runtime.stage.draw();
                    if (--d <= 0)
                        for (var c = 0; c < b.costumes.length; c++)
                            if (b.costumes[c].img == "avatar://spine") {
                                b.costumes[c].imgPreview = b._generatePreview().toDataURL("image/png");
                                window.WinAssets && WinAssets.update(true);
                                break
                            }
                };
                if (b.skeleton.parts[e] == "blank") h.src = Sprites._blankImg;
                else if (b.skeleton.parts[e]) h.src = "ide/avatar/skins/" + c + "/" + b.skeleton.parts[e] + "/" + f[g] + ".png";
                else if (g_parts[c].defaultparts && g_parts[c].defaultparts[e]) {
                    j = g_parts[c].defaultparts[e];
                    h.src = "ide/avatar/skins/" + c + "/" + b.skeleton.parts[j] + "/" + f[g] + ".png"
                } else h.src = Sprites._blankImg;
                b.skeleton.textures[f[g]] = h
            }
    }
    Sprites._fetchSkeleton(c, function (c) {
        b.skeleton.skeletonData = c;
        b.skeleton.skeleton =
            new spine.Skeleton(b.skeleton.skeletonData);
        b.skeleton.stateData = new spine.AnimationStateData(b.skeleton.skeletonData);
        b.skeleton.state = new spine.AnimationState(b.skeleton.stateData);
        b.skeleton.animationName = b.skeleton.skeletonData.animations[0].name;
        for (c = 0; c < b.skeleton.skeletonData.animations.length; c++) {
            var d = b.skeleton.skeletonData.animations[c].name;
            if (d.toLowerCase() == "idle") {
                b.skeleton.animationName = d;
                break
            }
        }
        b.skeleton.state.setAnimationByName(0, b.skeleton.animationName, true);
        b.skeleton.skeleton.setSkinByName("default");
        b.skeleton.skeleton.setSlotsToSetupPose();
        b.skeleton.skeletonBounds = new spine.SkeletonImageBounds;
        b.skeleton.state.update(0);
        b.skeleton.state.apply(b.skeleton.skeleton);
        b.skeleton.skeleton.updateWorldTransform();
        b.skeleton.skeletonBounds.update(b.skeleton.skeleton, true);
        b.spriteObj.drawFunction = null;
        b.spriteObj.setSpriteDraw(function (c) {
            b._drawSkeleton(c)
        }, b.skeleton.skeletonBounds.maxX - b.skeleton.skeletonBounds.minX, b.skeleton.skeletonBounds.maxY - b.skeleton.skeletonBounds.minY);
        for (c = 0; c < b.costumes.length; c++)
            if (b.costumes[c].img ==
                "avatar://spine") {
                b.costumes[c].imgPreview = b._generatePreview().toDataURL("image/png");
                window.WinAssets && WinAssets.update(true);
                break
            }
        b.skeleton.totalTime = 0;
        b.skeleton.lastTime = Date.now();
        Runtime.stage.draw()
    })
};
Sprites._fetchSkeleton = function (b, c) {
    b && c && Sprites._skelLoad.push({
        skelType: b,
        callback: c
    });
    if (Sprites._skelLoad.length > 0 && !Sprites._skelIsFetching) {
        for (; Sprites._skelLoad.length > 0;) {
            var d = Sprites._skelLoad[0];
            if (Sprites._skelCache[d.skelType]) {
                Sprites._skelLoad.shift();
                d.callback(Sprites._skelCache[d.skelType])
            } else break
        }
        if (Sprites._skelLoad.length > 0) {
            d = Sprites._skelLoad.shift();
            Sprites._skelIsFetching = true;
            $.ajax({
                url: "ide/avatar/rigs/" + d.skelType + ".json",
                dataType: "json",
                success: function (b) {
                    b =
                        (new spine.SkeletonJson({
                            newRegionAttachment: function (b, c) {
                                var d = new spine.RegionAttachment(c);
                                d.rendererObject = null;
                                d.setUVs(0, 0, 1, 1, false);
                                d.regionOffsetX = 0;
                                d.regionOffsetY = 0;
                                d.regionOriginalWidth = d.regionWidth = 1;
                                d.regionOriginalHeight = d.regionHeight = 1;
                                return d
                            },
                            newBoundingBoxAttachment: function (b, c) {
                                return new spine.BoundingBoxAttachment(c)
                            },
                            newMeshAttachment: function (b, c) {
                                return new spine.MeshAttachment(c)
                            },
                            newSkinnedMeshAttachment: function (b, c) {
                                return new spine.SkinnedMeshAttachment(c)
                            }
                        })).readSkeletonData(b);
                    Sprites._skelCache[d.skelType] = b;
                    d.callback(b);
                    Sprites._skelIsFetching = false;
                    Sprites._fetchSkeleton()
                },
                error: function () {
                    Sprites._skelIsFetching = false;
                    Sprites._fetchSkeleton()
                }
            })
        }
    }
};
Sprite._applySkelBoneTransform = function (b, c) {
    c.parent && Sprite._applySkelBoneTransform(b, c.parent);
    b.translate(c.x, c.y);
    b.rotate(c.rotation * Math.PI / 180);
    b.scale(c.scaleX, c.scaleY)
};
Sprite.prototype.updateSkeleton = function () {
    if (this.skeleton.state) {
        var b = Date.now();
        this.skeleton.state.update((b - this.skeleton.lastTime) / 1E3 * this.animationSpeed / 30);
        this.skeleton.lastTime = b;
        this.skeleton.state.apply(this.skeleton.skeleton);
        this.skeleton.skeleton.updateWorldTransform()
    }
};
Sprite.prototype._drawSkeleton = function (b) {
    if (this.skeleton.state) {
        b.save();
        b.translate(0, this.spriteObj.height / 2);
        b.scale(1, -1);
        for (var c = this.skeleton.skeleton.drawOrder, d = 0; d < c.length; d++) {
            var e = c[d],
                f = e.attachment;
            if (f) {
                b.save();
                Sprite._applySkelBoneTransform(b, e.bone);
                b.translate(f.x, f.y);
                b.rotate(f.rotation * Math.PI / 180);
                b.scale(f.scaleX, f.scaleY);
                b.scale(1, -1);
                (e = this.skeleton.textures[f.name]) && b.drawImage(e, -f.width / 2, -f.height / 2, f.width, f.height);
                b.restore()
            }
        }
        b.restore()
    }
};
Sprites.addSpriteListener = function (b) {
    Sprites._listeners.indexOf(b) < 0 && Sprites._listeners.push(b)
};
Sprites.removeSpriteListener = function (b) {
    b = Sprites._listeners.indexOf(b);
    b >= 0 && Sprites._listeners.splice(b, 1)
};
Sprites._broadcastSpriteListeners = function (b, c, d) {
    for (var e = 0; e < Sprites._listeners.length; e++) Sprites._listeners[e].spriteEvent(b, c, d)
};
Sprites.getSpriteByName = function (b) {
    for (var c = 0; c < Runtime.sprites.length; c++) {
        var d = Runtime.sprites[c];
        if (d.label == b) return d
    }
    return null
};
Sprites.addSprite = function (b, c) {
    var d = {
        label: b.costumeName ? b.costumeName : "Actor",
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        rotateLock: 0,
        costumeName: "1",
        hidden: false,
        isHidden: false,
        img: Sprites._blankImg,
        varDefaults: {},
        variables: {},
        lists: {},
        locked: false,
        penColor: "#000000",
        fillColor: "",
        fontColor: "#000000",
        font: "normal 18px Comic Sans MS,cursive",
        penWidth: 1,
        bubble: {
            penColor: "#000000",
            fillColor: "",
            fontColor: "#000000",
            font: "normal 18px Comic Sans MS,cursive",
            penWidth: 1
        }
    };
    $.extend(d, b);
    var e = d.label;
    if (!e) e = d.costumeName;
    d.label = void 0;
    if (d.forceNumber) var f = e + "1",
        g = 2;
    else {
        f = e;
        g = 1
    }
    var h = false;
    do
        for (var h = false, j = 0; j < Runtime.sprites.length; j++)
            if (Runtime.sprites[j].label == f) {
                h = true;
                f = e + g;
                g++;
                break
            }
    while (h);
    d.label = f;
    var k = new Sprite({
        id: d.id,
        classname: d.classname,
        label: d.label,
        scripts: [],
        costumes: [],
        sounds: [],
        varDefaults: d.varDefaults,
        variables: d.variables,
        lists: d.lists,
        hidden: d.hidden,
        spriteObj: null,
        currentCostume: 1,
        penDown: false,
        penColor: d.penColor,
        fillColor: d.fillColor,
        font: d.font,
        fontColor: d.fontColor,
        penWidth: d.penWidth,
        volume: 100
    });
    Runtime.sprites.push(k);
    k._ready = false;
    k._spriteReadyCallback = c;
    if (d.avatarid) k.avatarid = d.avatarid;
    if (d.skeletonType && d.skeletonParts) {
        k.skeleton.type = d.skeletonType;
        k.skeleton.parts = d.skeletonParts
    }
    k.spriteObj = new Canvas.Actor({
        image: new Image,
        zIndex: d.zIndex,
        visible: !d.isHidden,
        font: d.font,
        fontColor: d.fontColor,
        penColor: d.penColor,
        fillColor: d.fillColor,
        penWidth: d.penWidth,
        bubble: d.bubble
    });
    k.spriteObj.sortorder = Runtime.sprites.length;
    k.addCostume({
        name: d.costumeName,
        img: d.img,
        cx: d.cx,
        cy: d.cy
    }, function (b) {
        var c = k.spriteObj;
        c.image = b;
        c.x = Runtime.stage.getWidth() / 2 + d.x;
        c.y = Runtime.stage.getHeight() / 2 - d.y;
        c.width = b.width;
        c.height = b.height;
        c.cx = d.cx !== void 0 && d.cx !== null ? d.cx : c.width / 2;
        c.cy = d.cy !== void 0 && d.cy !== null ? d.cy : c.height / 2;
        c.setDraggable(true);
        c.setScale(d.scale, d.scale);
        c.setRotation(d.rotation);
        c.setRotateLock(d.rotateLock);
        c.setDraggable(d.draggable);
        Runtime.stage.add(c);
        k.spriteObj = c;
        c.sprite = k;
        Physics.addBody({}, k.spriteObj);
        k.skeleton.type && k.skeleton.parts && k._loadSkeleton();
        k._ready = true;
        k._spriteReadyCallback && k._spriteReadyCallback(k)
    });
    k.locked = d.locked;
    k.hiddenInSandbox = d.hiddenInSandbox;
    k.lockedInSandbox = d.lockedInSandbox;
    k.classname = d.classname ? d.classname : d.label;
    k.id = d.id;
    Runtime.spriteId++;
    Sprites._broadcastSpriteListeners("add", k);
    return k
};