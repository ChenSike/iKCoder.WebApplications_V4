Canvas = {
    particles: null,
    tileSize: 0,
    boxPadding: 10,
    handleRadius: 3,
    minSize: 10,
    hideSelections: !1,
    enableAccelerometer: !0,
    Stage: function (b) {
        this.container =
            b;
        this.width = 600;
        this.height = 400;
        this.canvasScale = 1;
        this.drawGrid = this.expand = false;
        this.id = 1;
        this.bgimg = new Image;
        this.bgimg.src = Sprites._blankImg;
        this.cursor = "auto";
        this.backgroundOffsetY = this.backgroundOffsetX = 0;
        this.designMode = "select";
        this.draggingEnabled = true;
        this.selectedActor = null;
        this.selected = false;
        this.mousePos = {
            x: 0,
            y: 0
        };
        this.accel = {};
        this.listeners = [];
        this.lastMouseUp = Date.now();
        this.backgroundLayer = new Canvas.Layer(this);
        this.videoLayer = new Canvas.Layer(this);
        this.tileLayer = new Canvas.TileLayer(this);
        this.penLayer = new Canvas.Layer(this);
        this.actorsLayer = new Canvas.Layer(this);
        this.particleLayer = new Canvas.Layer(this);
        this.particleLayer.context.globalCompositeOperation = "lighter";
        if (!Canvas.particles) {
            Canvas.particles = new Proton;
            Canvas.renderer = new Proton.Renderer("canvas", Canvas.particles, this.particleLayer.canvas);
            this.particleLayer.context.globalCompositeOperation = "lighter";
            Canvas.renderer.start()
        }
        this.setBackgroundType("stretch");
        this.actors = [];
        for (b = 0; b < this.container.children.length; b++) {
            var c =
                this.container.children[b];
            if (c.tagName == "CANVAS") {
                c.style.width = this.width;
                c.style.height = this.height;
                c.setAttribute("width", this.width);
                c.setAttribute("height", this.height)
            }
        }
        var d = this;
        $(this.container).mousedown(function (b) {
            d.setMousePosition(b.clientX, b.clientY);
            d.onMouseDown(b)
        });
        this.container.addEventListener("touchstart", function (b) {
            if (b.touches && b.touches.length > 0) {
                d.setMousePosition(b.touches[0].pageX, b.touches[0].pageY);
                d.onMouseDown(b)
            }
            return false
        }, false);
        $(this.container).mousemove(function (b) {
            d.setMousePosition(b.clientX,
                b.clientY);
            d.onMouseMove(b)
        });
        this.container.addEventListener("touchmove", function (b) {
            if (b.touches && b.touches.length > 0) {
                d.setMousePosition(b.touches[0].pageX, b.touches[0].pageY);
                d.onMouseMove(b)
            }
            return false
        }, false);
        $(this.container).mouseup(function (b) {
            d.setMousePosition(b.clientX, b.clientY);
            d.onMouseUp(b)
        });
        this.container.addEventListener("touchend", function (b) {
            if (b.touches && b.touches.length > 0) {
                d.setMousePosition(b.touches[0].pageX, b.touches[0].pageY);
                d.onMouseUp(b)
            }
            return false
        }, false);
        $(this.container).bind("mousewheel",
            function (b) {
                d.onScroll(b)
            }).bind("DOMMouseScroll", function (b) {
                d.onScroll(b)
            });
        $(this.container).bind("mouseleave", function () {
            d.mouseDown = false;
            Runtime.keys.mouse = false
        });
        var e = 0;
        if (!window.IDE && Canvas.enableAccelerometer) window.ondevicemotion = function (b) {
            var c = Date.now();
            if (Runtime.stage && Runtime.stage.accel) {
                switch (window.orientation) {
                    case 90:
                        Runtime.stage.accel = {
                            orientation: window.orientation,
                            x: -b.accelerationIncludingGravity.y,
                            y: b.accelerationIncludingGravity.x,
                            z: b.accelerationIncludingGravity.z
                        };
                        break;
                    case -90:
                        Runtime.stage.accel = {
                            orientation: window.orientation,
                            x: b.accelerationIncludingGravity.y,
                            y: -b.accelerationIncludingGravity.x,
                            z: b.accelerationIncludingGravity.z
                        };
                        break;
                    case 180:
                        Runtime.stage.accel = {
                            orientation: window.orientation,
                            x: -b.accelerationIncludingGravity.x,
                            y: -b.accelerationIncludingGravity.y,
                            z: b.accelerationIncludingGravity.z
                        };
                    default:
                        Runtime.stage.accel = {
                            orientation: window.orientation,
                            x: b.accelerationIncludingGravity.x,
                            y: b.accelerationIncludingGravity.y,
                            z: b.accelerationIncludingGravity.z
                        }
                }
                if (c -
                    e > 100) {
                    Runtime.keys["left arrow"] = false;
                    Runtime.keys["right arrow"] = false;
                    Runtime.keys["up arrow"] = false;
                    Runtime.keys["down arrow"] = false;
                    e = c;
                    Runtime.stage.accel.x < 0 ? Runtime.triggerKeyDown("left arrow") : Runtime.stage.accel.x > 0 && Runtime.triggerKeyDown("right arrow");
                    Runtime.stage.accel.y < 0 ? Runtime.triggerKeyDown("down arrow") : Runtime.stage.accel.y > 0 && Runtime.triggerKeyDown("up arrow")
                }
            }
        }
    }
};
Canvas.Stage.prototype.setDesignMode = function (b) {
    this.designMode = b;
    this.designMode == "place" && this.tileLayer.enableTiles(true);
    this.draw()
};
Canvas.Stage.prototype.onTouchStart = function (b) {
    if (b.touches.length == 1) {
        this.detectingGesture = true;
        this.gestureStartX = b.touches[0].pageX;
        this.gestureStartY = b.touches[0].pageY;
        this.gestureDirY = this.gestureDirX = null;
        self.setMousePosition(b.touches[0].pageX, b.touches[0].pageY);
        self.onMouseDown(b)
    }
};
Canvas.Stage.prototype.onTouchMove = function (b) {
    if (this.detectingGesture)
        if (b.touches.length > 1) this.detectingGesture = false;
        else {
            self.setMousePosition(b.touches[0].pageX, b.touches[0].pageY);
            self.onMouseMove(b);
            var c = b.touches[0].pageX - this.gestureStartX,
                d = b.touches[0].pageY - this.gestureStartY;
            if (this.gestureDirX == null) {
                this.gestureDirX = c;
                b.preventDefault()
            }
            if (this.gestureDirY == null) {
                this.gestureDirY = d;
                b.preventDefault()
            }
        }
};
Canvas.Stage.prototype.onTouchEnd = function (b) {
    self.onMouseUp(b);
    if (this.gestureDirX == null || this.gestureDirY == null) Runtime.triggerKeyEvent({
        target: {
            tagname: ""
        },
        which: 32
    });
    else if (Math.abs(this.gestureDirX) > Math.abs(this.gestureDirY))
        if (this.gestureDirX < 0) {
            Runtime.triggerKeyEvent({
                target: {
                    tagname: ""
                },
                which: 37
            });
            window.setTimeout(function () {
                Runtime.triggerKeyUpEvent({
                    target: {
                        tagname: ""
                    },
                    which: 37
                })
            }, 500)
        } else {
            Runtime.triggerKeyEvent({
                target: {
                    tagname: ""
                },
                which: 39
            });
            window.setTimeout(function () {
                Runtime.triggerKeyUpEvent({
                    target: {
                        tagname: ""
                    },
                    which: 39
                })
            }, 500)
        }
    else if (this.gestureDirY < 0) {
        Runtime.triggerKeyEvent({
            target: {
                tagname: ""
            },
            which: 38
        });
        window.setTimeout(function () {
            Runtime.triggerKeyUpEvent({
                target: {
                    tagname: ""
                },
                which: 38
            })
        }, 500)
    } else {
        Runtime.triggerKeyEvent({
            target: {
                tagname: ""
            },
            which: 40
        });
        window.setTimeout(function () {
            Runtime.triggerKeyUpEvent({
                target: {
                    tagname: ""
                },
                which: 40
            })
        }, 500)
    }
    this.detectingGesture = false
};
Canvas.Stage.prototype.getWidth = function () {
    return this.width
};
Canvas.Stage.prototype.getHeight = function () {
    return this.height
};
Canvas.Stage.prototype.setBackground = function (b) {
    var c = this;
    if (!(this.bgimg instanceof Image)) this.bgimg = new Image;
    this.bgimg.onload = function () {
        c.setBackgroundType(c.bgtype)
    };
    this.bgimg.src = b == null ? Sprites._blankImg : b
};
Canvas.Stage.prototype.setBackgroundImg = function (b) {
    b ? this.bgimg = b : this.bgimg.src = Sprites._blankImg;
    this.setBackgroundType(this.bgtype)
};
Canvas.Stage.prototype.setBackgroundType = function (b) {
    var c = this.backgroundLayer.context,
        d = this.bgimg,
        e = this.width,
        f = this.height;
    if (b) this.bgtype = b;
    c.clearRect(0, 0, e, f);
    c.globalAlpha = this.backgroundLayer.alpha;
    if (d && d.width > 0 && d.height > 0)
        if (this.tileLayer.scrollBgOffset || this.bgtype == "tile") {
            e = e / Runtime.stage.canvasScale;
            f = f / Runtime.stage.canvasScale;
            c.save();
            c.scale(Runtime.stage.canvasScale, Runtime.stage.canvasScale);
            for (var g = this.backgroundOffsetX % d.width / Runtime.stage.canvasScale; g > 0;) g = g - d.width;
            for (b = this.backgroundOffsetY % d.height / Runtime.stage.canvasScale; b > 0;) b = b - d.height;
            for (; g < e; g = g + d.width)
                for (var h = b; h < f; h = h + d.height) c.drawImage(d, g, h);
            c.restore()
        } else this.expand ? c.drawImage(d, (e - d.width) / 2, (f - d.height) / 2) : this.bgtype == "stretch" ? c.drawImage(d, 0, 0, e, f) : c.drawImage(d, (e - d.width) / 2, (f - d.height) / 2)
};
Canvas.Stage.prototype.setStageExpand = function (b) {
    this.expand = b
};
Canvas.Stage.prototype.setSize = function (b, c) {
    if (b != this.width || c != this.height) {
        this.width = b;
        this.height = c;
        for (var d = 0; d < this.container.children.length; d++) {
            var e = this.container.children[d];
            if (e.tagName == "CANVAS") {
                e.style.width = this.width;
                e.style.height = this.height;
                e.setAttribute("width", this.width);
                e.setAttribute("height", this.height)
            }
        }
        this.setBackgroundType(this.bgtype);
        if (Canvas.renderer) {
            Canvas.renderer.resize(this.width, this.height);
            this.particleLayer.context.globalCompositeOperation = "lighter"
        }
    }
};
Canvas.Stage.prototype.updateStageSize = function () {
    for (var b = 0; b < this.container.children.length; b++) {
        var c = this.container.children[b];
        if (c.tagName == "CANVAS" && (c.getAttribute("width") != this.width || c.getAttribute("height") != this.height)) {
            c.style.width = this.width;
            c.style.height = this.height;
            c.setAttribute("width", this.width);
            c.setAttribute("height", this.height)
        }
    }
    if (Canvas.renderer) {
        Canvas.renderer.resize(this.width, this.height);
        this.particleLayer.context.globalCompositeOperation = "lighter"
    }
    this.setBackgroundType(this.bgtype)
};
Canvas.Stage.prototype.selectActor = function (b) {
    for (var c = false, d = 0; d < this.actors.length; d++)
        if (b != null && this.actors[d].id == b.id) {
            if (this.draggingEnabled) this.actors[d].selected = true;
            c = true
        } else if (this.draggingEnabled) this.actors[d].selected = false;
    if (!c) this.selectedActor = null;
    this.draw()
};
Canvas.Stage.prototype.enableDragging = function (b) {
    if (b) this.draggingEnabled = true;
    else {
        this.draggingEnabled = false;
        for (b = this.actors.length - 1; b >= 0; b--) this.actors[b].selected = false;
        this.backgroundSelected = true;
        this.draw()
    }
};
Canvas.Stage.prototype.showGrid = function (b) {
    this.drawGrid = b;
    this.draw()
};
Canvas.Stage.prototype.isGridVisible = function () {
    return this.drawGrid
};
Canvas.Stage.prototype.broadcastListeners = function (b, c) {
    for (var d = 0; d < this.listeners.length; d++) this.listeners[d].type == b && this.listeners[d].fn(c)
};
Canvas.Stage.prototype.addListener = function (b, c) {
    this.listeners.push({
        type: b,
        fn: c
    })
};
Canvas.Stage.prototype.removeListener = function (b) {
    for (var c = 0; c < this.listeners.length; c++) this.listeners[c].type == b && this.listeners.splice(c, 1)
};
Canvas.Stage.prototype.removeAllListeners = function () {
    this.listeners = []
};
Canvas.Stage.prototype.getMousePos = function () {
    return {
        x: -this.tileLayer.scrollOffset.x + this.mousePos.x,
        y: -this.tileLayer.scrollOffset.y + this.mousePos.y
    }
};
Canvas.Stage.prototype.actorAt = function (b, c) {
    for (var d = this.actors.length - 1; d >= 0; d--) {
        var e = this.actors[d];
        if (e.visible && e.selectable && e.containsPoint(b, c)) return e
    }
    return null
};
Canvas.Stage.prototype.onMouseDown = function (b) {
    if (Runtime.isRunning()) this.selectDown(b);
    else if (b.ctrlKey || b.metaKey || b.shiftKey) this.scrollDown(b);
    else if (this.designMode == "remove") this.removeDown(b);
    else if (this.designMode == "scroll") this.scrollDown(b);
    else if (this.designMode == "place") this.placeDown(b);
    else {
        this.selectDown(b);
        (!this.dragMode || !this.selectedActor) && this.scrollDown(b)
    }
};
Canvas.Stage.prototype.selectDown = function (b) {
    if (window.IDE) {
        var c = $(".color-chooser");
        if (c.length > 0 && c.css("display") != "none") return
    }
    for (c = this.actors.length - 1; c >= 0; c--) {
        var d = this.actors[c];
        if (d.visible && d.selectable) {
            var e = d.drawBubble(this.actorsLayer);
            if (e && (d.bubble.buttonText || this.mousePos.x >= e.left && this.mousePos.y >= e.top && this.mousePos.x < e.left + e.width && this.mousePos.y < e.top + e.height)) {
                this.broadcastListeners("bubbleclicked", d);
                return
            }
        }
    }
    var f = this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX(),
        g = this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY();
    if ((e = this.drawBubble(this.text, this.actorsLayer, this.bubble)) && (this.bubble.buttonText || f >= e.left && g >= e.top && f < e.left + e.width && g < e.top + e.height)) this.broadcastListeners("bubbleclicked", null);
    else if (!($("#stage-canvas .ask:visible").length > 0)) {
        e = false;
        this.mouseDown = true;
        if (b.which == 3) {
            Runtime.lastKeyPressed = "mouse-right";
            Runtime.triggerKeyDown("mouse-right")
        } else {
            Runtime.lastKeyPressed = "mouse";
            Runtime.triggerKeyDown("mouse")
        }
        this.startX =
            this.mousePos.x / Runtime.stage.canvasScale;
        this.startY = this.mousePos.y / Runtime.stage.canvasScale;
        for (c = this.actors.length - 1; c >= 0; c--) {
            d = this.actors[c];
            if (d.visible && d.withinBounds(f, g)) {
                this.selectedActor = d;
                this.broadcastListeners("clicked", this.selectedActor);
                if (d.selectable) {
                    e = true;
                    if (this.draggingEnabled || d.draggable) {
                        this.draggingX = d.x - f;
                        this.draggingY = d.y - g;
                        this.dragMode = "drag";
                        this._save = {
                            sprite: d.sprite,
                            x: d.x,
                            y: d.y,
                            scale: d.scale.x,
                            rotation: d.rotation
                        };
                        d.moveToTop();
                        if (this.draggingEnabled) {
                            if (!this.selectedActor.selected) {
                                this.selectedActor.selected =
                                    true;
                                for (b = c - 1; b >= 0; b--) this.actors[b].selected = false;
                                this.broadcastListeners("selected", this.selectedActor)
                            }
                            this.backgroundSelected = false
                        }
                    } else d.selected = false
                }
                break
            } else if (d.visible && d.selected && (this.draggingEnabled || d.draggable)) {
                b = d.getBounds();
                this._save = {
                    sprite: d.sprite,
                    x: d.x,
                    y: d.y,
                    scale: d.scale.x,
                    rotation: d.rotation
                };
                if (d.isStatic) {
                    f = f + Runtime.stage.tileLayer.getScrollOffsetX();
                    g = g + Runtime.stage.tileLayer.getScrollOffsetY()
                }
                if (f >= b.left - 2 * Canvas.boxPadding && f <= b.left && g >= b.top - 2 * Canvas.boxPadding &&
                    g <= b.top) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = {
                        x: d.width * d.scale.x,
                        y: d.height * d.scale.y
                    };
                    this.draggingX = f;
                    this.draggingY = g;
                    this.dragMode = "resizeTopLeft";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (f >= b.right && f <= b.right + 2 * Canvas.boxPadding && g >= b.top - 2 * Canvas.boxPadding && g <= b.top) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = {
                        x: d.width * d.scale.x,
                        y: d.height * d.scale.y
                    };
                    this.draggingX = f;
                    this.draggingY = g;
                    this.dragMode = "resizeTopRight";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (f >= b.left - 2 * Canvas.boxPadding && f <= b.left && g >= b.bottom && g <= b.bottom + 2 * Canvas.boxPadding) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = {
                        x: d.width * d.scale.x,
                        y: d.height * d.scale.y
                    };
                    this.draggingX = f;
                    this.draggingY = g;
                    this.dragMode = "resizeBottomLeft";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (f >= b.right && f <= b.right + 2 * Canvas.boxPadding && g >= b.bottom && g <= b.bottom + 2 * Canvas.boxPadding) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = {
                        x: d.width * d.scale.x,
                        y: d.height *
                            d.scale.y
                    };
                    this.draggingX = f;
                    this.draggingY = g;
                    this.dragMode = "resizeBottomRight";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (f >= (b.right + b.left) / 2 - Canvas.handleRadius - Canvas.boxPadding && f <= (b.right + b.left) / 2 + Canvas.handleRadius + Canvas.boxPadding && g >= b.top - Canvas.boxPadding * 3 - Canvas.handleRadius - Canvas.boxPadding && g <= b.top - Canvas.boxPadding * 3 + Canvas.handleRadius + Canvas.boxPadding) {
                    if (d.isStatic) {
                        f =
                            f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = d.rotation;
                    this.draggingX = 180 / Math.PI * Math.atan2(g - d.y, f - d.x);
                    this.dragMode = "rotate";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (g >= b.top - 2 * Canvas.boxPadding && g <= b.bottom + 2 * Canvas.boxPadding && f >= b.left - 2 * Canvas.boxPadding && f <= b.left + 2 * Canvas.boxPadding) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = d.width * d.scale.x;
                    this.draggingX = f;
                    this.draggingY = g;
                    this.dragMode = "resizeLeft";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (g >= b.top - 2 * Canvas.boxPadding && g <= b.bottom + 2 * Canvas.boxPadding && f >= b.right - 2 * Canvas.boxPadding && f <= b.right + 2 * Canvas.boxPadding) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal =
                        d.width * d.scale.x;
                    this.draggingX = f;
                    this.draggingY = g;
                    this.dragMode = "resizeRight";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (f >= b.left - 2 * Canvas.boxPadding && f <= b.right + 2 * Canvas.boxPadding && g >= b.top - 2 * Canvas.boxPadding && g <= b.top + 2 * Canvas.boxPadding) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = d.height * d.scale.y;
                    this.draggingX =
                        f;
                    this.draggingY = g;
                    this.dragMode = "resizeTop";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else if (f >= b.left - 2 * Canvas.boxPadding && f <= b.right + 2 * Canvas.boxPadding && g >= b.bottom - 2 * Canvas.boxPadding && g <= b.bottom + 2 * Canvas.boxPadding) {
                    if (d.isStatic) {
                        f = f - Runtime.stage.tileLayer.getScrollOffsetX();
                        g = g - Runtime.stage.tileLayer.getScrollOffsetY()
                    }
                    this.origVal = d.height * d.scale.y;
                    this.draggingX = f;
                    this.draggingY =
                        g;
                    this.dragMode = "resizeBottom";
                    this.backgroundSelected = false;
                    this.selectedActor = d;
                    e = this.selectedActor.selected = true;
                    this.broadcastListeners("selected", this.selectedActor);
                    break
                } else d.selected = false
            } else d.selected = false
        }
        if (e) this.backgroundSelected = false;
        else {
            if (!this.backgroundSelected && this.draggingEnabled) {
                this.backgroundSelected = true;
                this.broadcastListeners("selected", null);
                this.selectedActor = null
            }
            this.broadcastListeners("clicked", null)
        }
        this.draw()
    }
};
Canvas.Stage.prototype.scrollDown = function () {
    if (this.tileLayer.isTilesEnabled()) {
        this.mouseDown = true;
        this.startX = this.mousePos.x / Runtime.stage.canvasScale;
        this.startY = this.mousePos.y / Runtime.stage.canvasScale;
        this.startOffset = this.tileLayer.getScrollOffset()
    }
};
Canvas.Stage.prototype.removeDown = function () {
    this.mouseDown = true;
    var b = Math.floor((this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX()) / this.tileLayer.tileSize),
        c = Math.floor((this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY()) / this.tileLayer.tileSize);
    this.tileLayer.removeTile(b, c);
    this.draw()
};
Canvas.Stage.prototype.placeDown = function () {
    this.mouseDown = true;
    var b = Math.floor((this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX()) / this.tileLayer.tileSize),
        c = Math.floor((this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY()) / this.tileLayer.tileSize);
    this.tileLayer.placeTile(b, c, this.tileLayer.currentTileType);
    for (var d = -Canvas.tileSize; d <= Canvas.tileSize; d++)
        for (var e = -Canvas.tileSize; e <= Canvas.tileSize; e++) this.tileLayer.placeTile(b + d, c + e, this.tileLayer.currentTileType);
    this.draw()
};
Canvas.Stage.prototype.onMouseMove = function (b) {
    if (Runtime.isRunning()) this.selectMove(b);
    else if (b.ctrlKey || b.metaKey || b.shiftKey) this.scrollMove(b);
    else if (this.designMode == "remove") this.removeMove(b);
    else if (this.designMode == "scroll") this.scrollMove(b);
    else if (this.designMode == "place") this.placeMove(b);
    else {
        this.selectMove(b);
        (!this.dragMode || !this.selectedActor) && this.scrollMove(b)
    }
};
Canvas.Stage.prototype.selectMove = function () {
    var b = this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX(),
        c = this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY();
    if (this.selectedActor && (this.draggingEnabled || this.selectedActor.draggable)) {
        if (this.dragMode == "drag") this.selectedActor.setPosition(b + this.draggingX, c + this.draggingY);
        else if (this.dragMode == "rotate") {
            var d = this.draggingX;
            this.selectedActor.setRotation(this.origVal + (180 / Math.PI * Math.atan2(c - this.selectedActor.y,
                b - this.selectedActor.x) - d))
        } else if (this.dragMode == "resizeTopLeft") {
            d = true;
            b = -b + this.draggingX;
            if (-c + this.draggingY > b) {
                c = this.origVal.y + (-c + this.draggingY) * 2;
                d = false
            } else c = this.origVal.x + b * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            d ? this.selectedActor.setScale(c / this.selectedActor.width) : this.selectedActor.setScale(c / this.selectedActor.height)
        } else if (this.dragMode == "resizeBottomRight") {
            d = true;
            b = b - this.draggingX;
            if (c - this.draggingY > b) {
                c = this.origVal.y + (c - this.draggingY) * 2;
                d = false
            } else c = this.origVal.x +
                b * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            d ? this.selectedActor.setScale(c / this.selectedActor.width) : this.selectedActor.setScale(c / this.selectedActor.height)
        } else if (this.dragMode == "resizeTopRight") {
            d = true;
            b = b - this.draggingX;
            if (-c + this.draggingY > b) {
                c = this.origVal.y + (-c + this.draggingY) * 2;
                d = false
            } else c = this.origVal.x + b * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            d ? this.selectedActor.setScale(c / this.selectedActor.width) : this.selectedActor.setScale(c / this.selectedActor.height)
        } else if (this.dragMode == "resizeBottomLeft") {
            d =
                true;
            b = -b + this.draggingX;
            if (c - this.draggingY > b) {
                c = this.origVal.y + (c - this.draggingY) * 2;
                d = false
            } else c = this.origVal.x + b * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            d ? this.selectedActor.setScale(c / this.selectedActor.width) : this.selectedActor.setScale(c / this.selectedActor.height)
        } else if (this.dragMode == "resizeLeft") {
            c = this.origVal + (-b + this.draggingX) * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            this.selectedActor.setScale(c / this.selectedActor.width)
        } else if (this.dragMode == "resizeRight") {
            c = this.origVal + (b - this.draggingX) *
                2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            this.selectedActor.setScale(c / this.selectedActor.width)
        } else if (this.dragMode == "resizeTop") {
            c = this.origVal + (-c + this.draggingY) * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            this.selectedActor.setScale(c / this.selectedActor.height)
        } else if (this.dragMode == "resizeBottom") {
            c = this.origVal + (c - this.draggingY) * 2;
            if (c < Canvas.minSize) c = Canvas.minSize;
            this.selectedActor.setScale(c / this.selectedActor.height)
        } else {
            this.cursor = "auto";
            this.container.style.cursor = this.cursor
        }
        this.draw()
    } else {
        for (var d =
                null, e = 0; e < this.actors.length; e++)
            if (this.actors[e].selected) {
                d = this.actors[e];
                break
            }
        e = false;
        if (d != null) {
            var f = d.getBounds();
            if (d.isStatic) {
                b = b + Runtime.stage.tileLayer.getScrollOffsetX();
                c = c + Runtime.stage.tileLayer.getScrollOffsetY()
            }
            d = $(".color-chooser");
            if (window.IDE && d.length > 0 && d.css("display") != "none") {
                this.cursor = "crosshair";
                this.container.style.cursor = this.cursor;
                e = true
            } else if (b >= f.left && b <= f.right && c >= f.top && c <= f.bottom) {
                if (this.cursor != "url(ide/imgs/canvas/move.png) 8 8,move") {
                    this.cursor =
                        "url(ide/imgs/canvas/move.png) 8 8,move";
                    this.container.style.cursor = this.cursor
                }
                e = true
            } else if (b >= (f.right + f.left) / 2 - Canvas.handleRadius - Canvas.boxPadding && b <= (f.right + f.left) / 2 + Canvas.handleRadius + Canvas.boxPadding && c >= f.top - Canvas.boxPadding * 3 - Canvas.handleRadius - Canvas.boxPadding && c <= f.top - Canvas.boxPadding * 3 + Canvas.handleRadius + Canvas.boxPadding) {
                if (this.cursor != "url(ide/imgs/canvas/rotate.png) 8 8,pointer") {
                    this.cursor = "url(ide/imgs/canvas/rotate.png) 8 8,pointer";
                    this.container.style.cursor =
                        this.cursor
                }
                e = true
            } else if (b >= f.left - 2 * Canvas.boxPadding && b <= f.left && c >= f.top - 2 * Canvas.boxPadding && c <= f.top || b >= f.right && b <= f.right + 2 * Canvas.boxPadding && c >= f.bottom && c <= f.bottom + 2 * Canvas.boxPadding) {
                if (this.cursor != "url(ide/imgs/canvas/resize-nw.png) 8 8,pointer") {
                    this.cursor = "url(ide/imgs/canvas/resize-nw.png) 8 8,pointer";
                    this.container.style.cursor = this.cursor
                }
                e = true
            } else if (b >= f.right && b <= f.right + 2 * Canvas.boxPadding && c >= f.top - 2 * Canvas.boxPadding && c <= f.top || b >= f.left - 2 * Canvas.boxPadding && b <=
                f.left && c >= f.bottom && c <= f.bottom + 2 * Canvas.boxPadding) {
                if (this.cursor != "url(ide/imgs/canvas/resize-ne.png) 8 8,pointer") {
                    this.cursor = "url(ide/imgs/canvas/resize-ne.png) 8 8,pointer";
                    this.container.style.cursor = this.cursor
                }
                e = true
            } else if (c >= f.top - 2 * Canvas.boxPadding && c <= f.bottom + 2 * Canvas.boxPadding && b >= f.left - 2 * Canvas.boxPadding && b <= f.left || c >= f.top - 2 * Canvas.boxPadding && c <= f.bottom + 2 * Canvas.boxPadding && b >= f.right && b <= f.right + 2 * Canvas.boxPadding) {
                if (this.cursor != "url(ide/imgs/canvas/resize-we.png) 8 8,col-resize") {
                    this.cursor =
                        "url(ide/imgs/canvas/resize-we.png) 8 8,col-resize";
                    this.container.style.cursor = this.cursor
                }
                e = true
            } else if (b >= f.left - 2 * Canvas.boxPadding && b <= f.right + 2 * Canvas.boxPadding && c >= f.top - 2 * Canvas.boxPadding && c <= f.top || b >= f.left - 2 * Canvas.boxPadding && b <= f.right + 2 * Canvas.boxPadding && c >= f.bottom && c <= f.bottom + 2 * Canvas.boxPadding) {
                if (this.cursor != "url(ide/imgs/canvas/resize-ns.png) 8 8,row-resize") {
                    this.cursor = "url(ide/imgs/canvas/resize-ns.png) 8 8,row-resize";
                    this.container.style.cursor = this.cursor
                }
                e = true
            }
        }
        if (!e) {
            if (window.IDE) {
                d =
                    $(".color-chooser");
                this.cursor = d.length > 0 && d.css("display") != "none" ? "crosshair" : "auto"
            } else this.cursor = "auto";
            this.container.style.cursor = this.cursor
        }
    }
};
Canvas.Stage.prototype.scrollMove = function () {
    if (this.mouseDown && this.tileLayer.isTilesEnabled()) {
        this.tileLayer.setScrollOffset(this.startOffset.x - (this.startX - this.mousePos.x / Runtime.stage.canvasScale), this.startOffset.y - (this.startY - this.mousePos.y / Runtime.stage.canvasScale));
        this.draw()
    }
};
Canvas.Stage.prototype.removeMove = function () {
    if (this.mouseDown) {
        var b = Math.floor((this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX()) / this.tileLayer.tileSize),
            c = Math.floor((this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY()) / this.tileLayer.tileSize);
        this.tileLayer.removeTile(b, c);
        this.draw()
    }
};
Canvas.Stage.prototype.placeMove = function () {
    if (this.mouseDown) {
        var b = Math.floor((this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX()) / this.tileLayer.tileSize),
            c = Math.floor((this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY()) / this.tileLayer.tileSize);
        this.tileLayer.placeTile(b, c, this.tileLayer.currentTileType);
        for (var d = -Canvas.tileSize; d <= Canvas.tileSize; d++)
            for (var e = -Canvas.tileSize; e <= Canvas.tileSize; e++) this.tileLayer.placeTile(b + d, c + e, this.tileLayer.currentTileType);
        this.draw()
    }
};
Canvas.Stage.prototype.onScroll = function (b) {
    if (this.tileLayer.isTilesEnabled() && Runtime._blockEvents) {
        b = getScrollVectors(b);
        this.tileLayer.setScrollOffset(this.tileLayer.getScrollOffsetX() + b.x, this.tileLayer.getScrollOffsetY() + b.y);
        this.draw()
    }
};
Canvas.Stage.prototype.onMouseUp = function (b) {
    self.mouseDown = false;
    Runtime.keys.mouse = false;
    Runtime.keys["mouse-right"] = false;
    if (Runtime.isRunning()) this.selectUp(b);
    else if (b.ctrlKey || b.metaKey || b.shiftKey) this.scrollUp(b);
    else if (this.designMode == "remove") this.removeUp(b);
    else if (this.designMode == "scroll") this.scrollUp(b);
    else if (this.designMode == "place") this.placeUp(b);
    else {
        this.selectUp(b);
        this.scrollUp(b)
    }
};
Canvas.Stage.prototype.selectUp = function () {
    if (this._save) {
        this._save.dragMode = this.dragMode;
        if (window.IDE) {
            window.IDE.Clipboard.undoStage(this._save);
            window.IDE.dirty()
        }
    }
    this.mouseDown = false;
    this.dragMode = "";
    var b = Date.now(),
        c = this.mousePos.x / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetX(),
        d = this.mousePos.y / Runtime.stage.canvasScale - this.tileLayer.getScrollOffsetY();
    if (this.selectedActor) {
        var e = this.selectedActor;
        this.selectedActor = null;
        this.draw();
        c >= this.startX - 4 && c <= this.startX + 4 &&
            d >= this.startY - 4 && d <= this.startY + 4 && b - this.lastMouseUp < 500 && this.broadcastListeners("doubleclicked", e)
    } else c >= this.startX - 4 && c <= this.startX + 4 && d >= this.startY - 4 && d <= this.startY + 4 && b - this.lastMouseUp < 500 && this.broadcastListeners("doubleclicked", null);
    this.lastMouseUp = b
};
Canvas.Stage.prototype.removeUp = function () {
    this.mouseDown = false
};
Canvas.Stage.prototype.scrollUp = function () {
    this.mouseDown = false
};
Canvas.Stage.prototype.placeUp = function () {
    this.mouseDown = false
};
Canvas.Stage.prototype.setMousePosition = function (b, c) {
    var d = this.getContainerPos(),
        e = b - d.left + window.pageXOffset,
        d = c - d.top + window.pageYOffset;
    this.mousePos = this.width > 0 && this.height > 0 ? {
        x: e * this.width / this.container.offsetWidth,
        y: d * this.height / this.container.offsetHeight
    } : this.width == 0 && this.height == 0 ? {
        x: e,
        y: d
    } : {
        x: e * -this.width / this.container.offsetWidth,
        y: d * -this.height / this.container.offsetHeight
    };
    this.broadcastListeners("mousemoved", this.mousePos)
};
Canvas.Stage.prototype.getContainerPos = function () {
    var b = $(this.actorsLayer.canvas);
    return {
        left: b.offset().left,
        top: b.offset().top
    }
};
Canvas.Stage.prototype.add = function (b) {
    b.stage = this;
    b.id = this.id++;
    if (b.zIndex == void 0) b.zIndex = b.id;
    this.actors.push(b);
    b.draw(this.actorsLayer, this.tileLayer);
    this.actors.sort(function (b, d) {
        return b.sortorder - d.sortorder
    });
    this.actors.sort(function (b, d) {
        return b.zIndex - d.zIndex
    })
};
Canvas.Stage.prototype.remove = function (b) {
    b.physicsBody && Physics.removeBody(b.physicsBody);
    for (var c = 0; c < this.actors.length; c++)
        if (this.actors[c].id == b.id) {
            this.actors.splice(c, 1);
            break
        }
};
Canvas.Stage.prototype.removeAll = function () {
    this.actors = []
};
Canvas.Stage.prototype.draw = function () {
    this.backgroundLayer.context.mozImageSmoothingEnabled = false;
    this.tileLayer.context.mozImageSmoothingEnabled = false;
    this.penLayer.context.mozImageSmoothingEnabled = false;
    this.actorsLayer.context.mozImageSmoothingEnabled = false;
    this.actorsLayer.clear();
    var b = this.actorsLayer.context;
    b.save();
    b.scale(Runtime.stage.canvasScale, Runtime.stage.canvasScale);
    this.tileLayer.draw();
    for (var c = 0; c < this.actors.length; c++) this.actors[c].draw(this.actorsLayer, this.tileLayer);
    this.text &&
        this.drawBubble(this.text, this.actorsLayer, this.bubble);
    for (c = 0; c < this.actors.length; c++) this.actors[c].drawBubble(this.actorsLayer, this.tileLayer);
    if (this.drawGrid) {
        c = this.actorsLayer.context;
        c.save();
        c.strokeStyle = "#555555";
        c.fillStyle = "#555555";
        var d = parseInt(20 * c.canvas.width / 600);
        c.lineWidth = parseInt(2 * c.canvas.width / 600);
        c.font = "normal " + d + "px Arial";
        d = 10 * parseInt(c.canvas.width / 600);
        c.beginPath();
        c.moveTo(0, c.canvas.height / 2);
        c.lineTo(c.canvas.width, c.canvas.height / 2);
        c.stroke();
        c.beginPath();
        c.moveTo(c.canvas.width / 4, c.canvas.height / 2 - d / 2);
        c.lineTo(c.canvas.width / 4, c.canvas.height / 2 + d / 2);
        c.stroke();
        c.beginPath();
        c.moveTo(c.canvas.width * 3 / 4, c.canvas.height / 2 - d / 2);
        c.lineTo(c.canvas.width * 3 / 4, c.canvas.height / 2 + d / 2);
        c.stroke();
        c.beginPath();
        c.moveTo(c.canvas.width / 2, 0);
        c.lineTo(c.canvas.width / 2, c.canvas.height);
        c.stroke();
        c.beginPath();
        c.moveTo(c.canvas.width / 2 - d / 2, c.canvas.height / 4);
        c.lineTo(c.canvas.width / 2 + d / 2, c.canvas.height / 4);
        c.stroke();
        c.beginPath();
        c.moveTo(c.canvas.width / 2 - d / 2, c.canvas.height *
            3 / 4);
        c.lineTo(c.canvas.width / 2 + d / 2, c.canvas.height * 3 / 4);
        c.stroke();
        c.textAlign = "left";
        c.textBaseline = "bottom";
        c.fillText("(" + Math.floor(-this.tileLayer.getScrollOffsetX()) + ", " + Math.floor(this.tileLayer.getScrollOffsetY()) + ")", c.canvas.width / 2 + 2, c.canvas.height / 2 - 2);
        c.textAlign = "left";
        c.textBaseline = "bottom";
        c.fillText("(" + Math.floor(-c.canvas.width / 2 - this.tileLayer.getScrollOffsetX()) + ", " + Math.floor(this.tileLayer.getScrollOffsetY()) + ")", 2, c.canvas.height / 2 - 2);
        c.textAlign = "right";
        c.textBaseline =
            "bottom";
        c.fillText("(" + Math.floor(c.canvas.width / 2 - this.tileLayer.getScrollOffsetX()) + ", " + Math.floor(this.tileLayer.getScrollOffsetY()) + ")", c.canvas.width - 2, c.canvas.height / 2 - 2);
        c.textAlign = "left";
        c.textBaseline = "top";
        c.fillText("(" + Math.floor(-this.tileLayer.getScrollOffsetX()) + ", " + Math.floor(c.canvas.height / 2 + this.tileLayer.getScrollOffsetY()) + ")", c.canvas.width / 2 + 2, 2);
        c.textAlign = "left";
        c.textBaseline = "bottom";
        c.fillText("(" + Math.floor(-this.tileLayer.getScrollOffsetX()) + ", " + Math.floor(-c.canvas.height /
            2 + this.tileLayer.getScrollOffsetY()) + ")", c.canvas.width / 2 + 2, c.canvas.height - 2);
        c.restore()
    }
    b.restore()
};
Canvas.Stage.prototype.drawBubble = function (b, c, d, e, f) {
    var g, h;
    if (b) {
        var c = c.context,
            j = parseFloat(d.font.split(" ")[1]);
        if (isNaN(j)) {
            j = parseFloat(d.font.split(" ")[2]);
            isNaN(j) && (j = 18)
        }
        var k = j / 2,
            l = this.getWidth() - k * 2;
        c.font = d.font;
        c.lineWidth = d.penWidth;
        var b = breakLines(b, c, l).lines,
            l = -d.penWidth / 2,
            m = -d.penWidth / 2,
            n = this.getWidth() + d.penWidth,
            q = k * 2 + b.length * (j + bubbleFontLinePadding);
        c.strokeStyle = d.penColor;
        c.fillStyle = d.fillColor ? d.fillColor : "#ffffff";
        switch (d.style) {
            case "oval":
                c.save();
                c.beginPath();
                c.translate(l + n / 2, m + q / 2);
                var p = Math.sqrt(n * n / 4 + q * q / 4),
                    s = n / Math.SQRT2 / p,
                    r = q / Math.SQRT2 / p;
                c.scale(s, r);
                h = p * Math.cos(50 * Math.PI / 180);
                g = p * Math.sin(50 * Math.PI / 180);
                Math.cos(40 * Math.PI / 180);
                Math.sin(40 * Math.PI / 180);
                c.moveTo(h, g);
                c.arc(0, 0, p, 50 * Math.PI / 180, 40 * Math.PI / 180, false);
                e !== void 0 && f !== void 0 && c.lineTo((e - l - n / 2) / s, (f - m - q / 2) / r);
                c.closePath();
                c.restore();
                c.fill();
                c.stroke();
                break;
            case "thought":
            case "thought-block":
                c.save();
                c.beginPath();
                c.translate(l + n / 2, m + q / 2);
                p = Math.sqrt(n * n / 4 + q * q / 4);
                c.save();
                s =
                    n / Math.SQRT2 / p;
                r = q / Math.SQRT2 / p;
                c.scale(s, r);
                c.moveTo(p, 0);
                c.arc(0, 0, p, 0, 2 * Math.PI, false);
                c.closePath();
                c.restore();
                c.fill();
                c.stroke();
                h = (p + 10) * Math.cos(50 * Math.PI / 180);
                g = (p + 10) * Math.sin(50 * Math.PI / 180);
                c.save();
                c.translate(h * s, g * r);
                c.beginPath();
                c.arc(0, 0, 10, 0, 2 * Math.PI, false);
                c.closePath();
                c.restore();
                c.fill();
                c.stroke();
                c.save();
                c.translate(h * s + 16, g * r + 16);
                c.beginPath();
                c.arc(0, 0, 5, 0, 2 * Math.PI, false);
                c.closePath();
                c.restore();
                c.fill();
                c.stroke();
                c.restore();
                break;
            case "excited":
                p = Math.sqrt(n * n /
                    4 + q * q / 4);
                s = n / Math.SQRT2 / p;
                r = q / Math.SQRT2 / p;
                c.save();
                c.translate(l + n / 2, m + q / 2);
                c.beginPath();
                h = p * s * Math.cos(405 * Math.PI / 180);
                g = p * r * Math.sin(405 * Math.PI / 180);
                c.moveTo(h, g);
                e !== void 0 && f !== void 0 && c.lineTo(e - l - n / 2, f - m - q / 2);
                e = 0;
                for (f = 55; f < 405; f = f + 10) {
                    h = p * s * Math.cos(f * Math.PI / 180);
                    g = p * r * Math.sin(f * Math.PI / 180);
                    c.lineTo(h, g);
                    h = (p + 60 * (e % 2 + 1)) * s * Math.cos((f + 5) * Math.PI / 180);
                    g = (p + 60 * (e % 2 + 1)) * r * Math.sin((f + 5) * Math.PI / 180);
                    c.lineTo(h, g);
                    e++
                }
                c.closePath();
                c.restore();
                c.fill();
                c.stroke();
                break;
            case "rectangular":
                c.beginPath();
                c.moveTo(l, m);
                c.lineTo(l + n, m);
                c.lineTo(l + n, m + q);
                c.lineTo(l + n - k * 2, m + q);
                e !== void 0 && f !== void 0 && c.lineTo(e, f);
                c.lineTo(l + n - k - j * 2, m + q);
                c.lineTo(l, m + q);
                c.lineTo(l, m);
                c.fill();
                c.stroke();
                break;
            default:
                c.beginPath();
                c.arc(l + k * 2, m + k * 2, k * 2, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
                c.lineTo(l + n - k * 2, m);
                c.arc(l + n - k * 2, m + k * 2, k * 2, 270 * Math.PI / 180, 0, false);
                c.lineTo(l + n, m + q - k * 2);
                c.arc(l + n - k * 2, m + q - k * 2, k * 2, 0, 90 * Math.PI / 180, false);
                c.lineTo(l + n - k * 2, m + q);
                e !== void 0 && f !== void 0 && c.lineTo(e, f);
                c.lineTo(l + n - k - j * 2, m + q);
                c.arc(l +
                    k * 2, m + q - k * 2, k * 2, 90 * Math.PI / 180, 180 * Math.PI / 180, false);
                c.lineTo(l, m + k * 2);
                c.fill();
                c.stroke()
        }
        c.strokeStyle = d.fontColor;
        c.fillStyle = d.fontColor;
        for (d = 0; d < b.length; d++) c.fillText(b[d], l + k, m + k + j + (j + bubbleFontLinePadding) * d);
        return {
            left: l,
            top: m,
            width: n,
            height: q
        }
    }
};
Canvas.Stage.prototype.getBuffer = function (b) {
    if (b) var c = b.getBounds(),
        d = Math.floor(c.left),
        e = Math.floor(c.top),
        f = Math.floor(c.right - c.left + 1),
        c = Math.floor(c.bottom - c.top + 1);
    else {
        e = d = 0;
        f = this.backgroundLayer.canvas.width;
        c = this.backgroundLayer.canvas.height
    }
    if (f > 0 && c > 0) {
        if (this.buffer) this.buffer.context.clearRect(d, e, f, c);
        else {
            this.buffer = {};
            this.buffer.canvas = document.createElement("canvas");
            this.buffer.context = this.buffer.canvas.getContext("2d");
            this.buffer.canvas.width = this.backgroundLayer.canvas.width;
            this.buffer.canvas.height = this.backgroundLayer.canvas.height;
            this.buffer.context.mozImageSmoothingEnabled = false
        }
        for (var g = this.backgroundLayer.context.getImageData(d, e, f, c), h = g.data, j = this.penLayer.context.getImageData(d, e, f, c).data, k = 0; k < j.length; k = k + 4)
            if (j[k + 3] != 0) {
                h[k] = j[k];
                h[k + 1] = j[k + 1];
                h[k + 2] = j[k + 2];
                h[k + 3] = j[k + 3]
            }
        this.buffer.context.putImageData(g, d, e);
        for (k = 0; k < this.actors.length; k++) this.actors[k] != b && this.actors[k].draw(this.buffer);
        return this.buffer.context.getImageData(d, e, f, c).data
    }
    return []
};
Canvas.Stage.prototype.captureScreenshot = function (b) {
    $("body > canvas.screenshot").detach();
    var c = $('<canvas class="screenshot" style="display:none" width="' + Runtime.stage.getWidth() + '" height="' + Runtime.stage.getHeight() + '"></canvas>')[0].getContext("2d"),
        d = Runtime.stage.drawGrid,
        e = Runtime.stage.tileLayer.drawGrid;
    Runtime.stage.showGrid(false);
    Runtime.stage.tileLayer.showGrid(false);
    Canvas.hideSelections = true;
    Runtime.stage.draw();
    c.drawImage(Runtime.stage.backgroundLayer.canvas, 0, 0);
    c.drawImage(Runtime.stage.penLayer.canvas,
        0, 0);
    c.drawImage(Runtime.stage.tileLayer.canvas, 0, 0);
    c.drawImage(Runtime.stage.actorsLayer.canvas, 0, 0);
    Canvas.hideSelections = false;
    Runtime.stage.showGrid(d);
    Runtime.stage.tileLayer.showGrid(e);
    return b ? c.canvas : c.canvas.toDataURL()
};
Canvas.Layer = function (b, c) {
    this.canvas = document.createElement("canvas");
    c || (c = "2d");
    this.context = this.canvas.getContext(c);
    this.canvas.width = b.container.offsetWidth;
    this.canvas.height = b.container.offsetHeight;
    this.canvas.style.position = "absolute";
    this.canvas.style.left = "0px";
    this.canvas.style.top = "0px";
    if (c == "2d") this.context.mozImageSmoothingEnabled = false;
    this.actors = [];
    this.stage = b;
    b.container.appendChild(this.canvas)
};
Canvas.Layer.prototype.clear = function () {
    this.context.save();
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.restore()
};
Canvas.Actor = function (b) {
    this.x = b.x ? b.x : 0;
    this.y = b.y ? b.y : 0;
    this.width = b.image.width;
    this.height = b.image.height;
    this.cx = b.cx !== void 0 && b.cx !== null ? b.cx : this.width / 2;
    this.cy = b.cy !== void 0 && b.cy !== null ? b.cy : this.height / 2;
    this.rotation = b.rotation ? b.rotation : 0;
    this.scale = {
        x: b.scale ? b.scale : 1,
        y: b.scale ? b.scale : 1
    };
    this.image = b.image;
    this.visible = b.visible === void 0 ? true : b.visible;
    this.rotateLock = b.rotateLock ? b.rotateLock : 0;
    this.selectable = b.selectable === void 0 ? true : b.selectable;
    this.draggable = b.draggable ?
        true : false;
    this.alpha = 1;
    this.zIndex = b.zIndex
};
Canvas.Actor.prototype.show = function () {
    this.visible = true
};
Canvas.Actor.prototype.hide = function () {
    this.visible = false
};
Canvas.Actor.prototype.setDraggable = function (b) {
    this.draggable = b
};
Canvas.Actor.prototype.setScale = function (b) {
    if (typeof b == "number" && isFinite(b)) {
        b < 1.0E-4 ? b = 1.0E-4 : this.width * b > Runtime.stage.width * 4 ? b = Runtime.stage.width * 4 / this.width : this.height * b > Runtime.stage.height * 4 && (b = Runtime.stage.height * 4 / this.height);
        this.scale.x = b;
        this.scale.y = b;
        this.physicsBody && Physics.updateBody(this, {})
    }
};
Canvas.Actor.prototype.changeScale = function (b) {
    if (typeof b == "number" && isFinite(b)) {
        this.scale.x = this.scale.x * b;
        this.scale.y = this.scale.y * b;
        this.physicsBody && Physics.updateBody(this, {})
    }
};
Canvas.Actor.prototype.setPosition = function (b, c) {
    if (typeof b == "number" && isFinite(b) && typeof c == "number" && isFinite(c)) {
        this.x = b;
        this.y = c;
        if (this.emitter) {
            this.emitter.p.x = this.x;
            this.emitter.p.y = this.y
        }
        if (this.physicsBody) {
            this.physicsBody.SetAwake(true);
            var d = this.physicsBody.GetAngle();
            this.physicsBody.SetTransform({
                position: new b2Vec2(this.x / Physics.scale, this.y / Physics.scale),
                GetAngle: function () {
                    return d
                }
            })
        }
    }
};
Canvas.Actor.prototype.setPosition2 = function (b, c) {
    if (typeof b == "number" && isFinite(b) && typeof c == "number" && isFinite(c)) {
        this.x = b;
        this.y = c;
        if (this.emitter) {
            this.emitter.p.x = this.x;
            this.emitter.p.y = this.y
        }
    }
};
Canvas.Actor.prototype.move = function (b, c) {
    if (typeof b == "number" && isFinite(b) && typeof c == "number" && isFinite(c)) {
        this.x = this.x + b;
        this.y = this.y + c;
        if (this.emitter) {
            this.emitter.p.x = this.x;
            this.emitter.p.y = this.y
        }
        if (this.physicsBody) {
            this.physicsBody.SetAwake(true);
            var d = this.physicsBody.GetAngle();
            this.physicsBody.SetTransform({
                position: new b2Vec2(this.x / Physics.scale, this.y / Physics.scale),
                GetAngle: function () {
                    return d
                }
            })
        }
    }
};
Canvas.Actor.prototype.setRotation = function (b) {
    if (typeof b == "number" && isFinite(b)) {
        var c = b % 360;
        c < 0 && (c = 360 + c);
        this.rotation = c;
        if (this.physicsBody) {
            this.physicsBody.SetAngularVelocity(0);
            this.physicsBody.SetTransform({
                position: this.physicsBody.GetPosition(),
                GetAngle: function () {
                    return c * Math.PI / 180
                }
            })
        }
    }
};
Canvas.Actor.prototype.setRotation2 = function (b) {
    if (typeof b == "number" && isFinite(b)) {
        b = b % 360;
        b < 0 && (b = 360 + b);
        this.rotation = b
    }
};
Canvas.Actor.prototype.rotate = function (b) {
    if (typeof b == "number" && isFinite(b)) {
        var c = (this.rotation + b) % 360;
        c < 0 && (c = 360 + c);
        this.rotation = c;
        if (this.physicsBody) {
            this.physicsBody.SetAngularVelocity(0);
            this.physicsBody.SetTransform({
                position: this.physicsBody.GetPosition(),
                GetAngle: function () {
                    return c * Math.PI / 180
                }
            })
        }
    }
};
Canvas.Actor.prototype.setRotateLock = function (b) {
    this.rotateLock = b;
    b != 0 ? Physics.updateBody(this, {
        fixedRotation: true
    }) : Physics.updateBody(this, {})
};
Canvas.Actor.prototype.setSpriteImg = function (b, c, d) {
    this.drawFunction = null;
    this.image = b;
    this.cx = c;
    this.cy = d;
    if (this.cx === void 0 || this.cx === null) this.cx = b.width / 2;
    if (this.cy === void 0 || this.cy === null) this.cy = b.height / 2;
    if (this.width != b.width || this.height != b.height) {
        this.width = b.width;
        this.height = b.height;
        Physics.updateBody(this, {})
    }
};
Canvas.Actor.prototype.setSpriteDraw = function (b, c, d) {
    if (!this.drawFunction && b) {
        this.drawFunction = b;
        this.cx = c / 2;
        this.cy = d / 2;
        if (this.width != c || this.height != d) {
            this.width = c;
            this.height = d;
            Physics.updateBody(this, {})
        }
    }
};
Canvas.Actor.prototype.isImage = function () {
    return this.drawFunction == null
};
Canvas.Actor.prototype.getImageData = function () {
    var b = this.getBounds(),
        c = Math.floor(b.right - b.left + 1),
        d = Math.floor(b.bottom - b.top + 1);
    if (c > 0 && d > 0) {
        if (!this.canvas || this.canvas.width < c || this.canvas.height < d) {
            this.canvas && $(this.canvas).detach();
            this.canvas = document.createElement("canvas");
            this.context = this.canvas.getContext("2d");
            this.canvas.width = c;
            this.canvas.height = d;
            this.context.mozImageSmoothingEnabled = false
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.save();
        this.context.translate((b.right -
            b.left) / 2, (b.bottom - b.top) / 2);
        this.rotation !== 0 && this.rotateLock == 0 && this.context.rotate(this.rotation * Math.PI / 180);
        this.scale.x != 1 || this.scale.y != 1 ? this.rotateLock == 1 && this.rotation > 90 && this.rotation < 270 ? this.context.scale(-this.scale.x, this.scale.y) : this.context.scale(this.scale.x, this.scale.y) : this.rotateLock == 1 && (this.rotation > 90 && this.rotation < 270) && this.context.scale(-1, 1);
        this.image && (this.image.width > 0 && this.image.height > 0) && this.context.drawImage(this.image, -this.width / 2, -this.height / 2, this.width,
            this.height);
        this.context.restore();
        return this.context.getImageData(0, 0, c, d)
    }
    return null
};
Canvas.Actor.prototype.getBuffer = function () {
    var b = this.getImageData();
    return b ? b.data : []
};
Canvas.Actor.prototype.withinBounds = function (b, c) {
    var d = this.getBounds();
    if (this.isStatic) {
        b = b + Runtime.stage.tileLayer.getScrollOffsetX();
        c = c + Runtime.stage.tileLayer.getScrollOffsetY()
    }
    return b >= d.left && b <= d.right && c >= d.top && c <= d.bottom ? true : false
};
Canvas.Actor.prototype.containsPoint = function (b, c) {
    var d = this.getBounds();
    if (b >= d.left && b <= d.right && c >= d.top && c <= d.bottom) {
        if (this.drawFunction) return true;
        var e = this.getBuffer(),
            d = Math.floor(b - d.left) * 4 + Math.floor(c - d.top) * this.canvas.width * 4;
        if ((e[d] || e[d + 1] || e[d + 2]) && e[d + 3]) return true
    }
    return false
};
Canvas.Actor.prototype.setZIndex = function (b) {
    this.zIndex = b;
    this.stage && this.stage.actors.sort(function (b, d) {
        return b.zIndex - d.zIndex
    })
};
Canvas.Actor.prototype.moveToTop = function () {
    if (this.stage) {
        for (var b = -1, c = 0; c < this.stage.actors.length; c++) {
            var d = this.stage.actors[c];
            if (d.zIndex > b) b = d.zIndex;
            if (d != this && d.zIndex > this.zIndex) d.zIndex = d.zIndex - 1
        }
        this.zIndex = b;
        this.stage.actors.sort(function (b, c) {
            return b.zIndex - c.zIndex
        })
    }
};
Canvas.Actor.prototype.moveToBottom = function () {
    if (this.stage) {
        for (var b = 1E7, c = 0; c < this.stage.actors.length; c++) {
            var d = this.stage.actors[c];
            if (d.zIndex < b) b = d.zIndex;
            if (d != this) d.zIndex = d.zIndex + 1
        }
        this.zIndex = b;
        this.stage.actors.sort(function (b, c) {
            return b.zIndex - c.zIndex
        })
    }
};
Canvas.Actor.prototype.moveBack = function (b) {
    if (this.stage) {
        for (var b = this.zIndex - b, c = 0; c < this.stage.actors.length; c++) {
            var d = this.stage.actors[c];
            if (d != this && d.zIndex >= b) d.zIndex = d.zIndex + 1
        }
        this.zIndex = b;
        this.stage.actors.sort(function (b, c) {
            return b.zIndex - c.zIndex
        })
    }
};
Canvas.Actor.prototype.moveFront = function (b) {
    if (this.stage) {
        b = this.zIndex + b;
        if (b > this.stage.actors.length) b = this.stage.actors.length;
        for (var c = 0; c < this.stage.actors.length; c++) {
            var d = this.stage.actors[c];
            if (d != this && d.zIndex >= b) d.zIndex = d.zIndex - 1
        }
        this.zIndex = b;
        this.stage.actors.sort(function (b, c) {
            return b.zIndex - c.zIndex
        })
    }
};
Canvas.Actor.prototype.getBounds = function () {
    var b = 1;
    if (this.scale.x != 1) b = this.scale.x;
    var c = -this.cx * b,
        d = (-this.cx + this.width) * b,
        e = -this.cy * b,
        b = (-this.cy + this.height) * b;
    if (this.rotateLock == 1 && this.rotation > 90 && this.rotation < 270) var f = c,
        c = d,
        d = f;
    if (this.rotateLock == 0) var g = Math.PI * this.rotation / 180,
        f = [c * Math.cos(g) - e * Math.sin(g), c * Math.sin(g) + e * Math.cos(g)],
        h = [d * Math.cos(g) - e * Math.sin(g), d * Math.sin(g) + e * Math.cos(g)],
        j = [c * Math.cos(g) - b * Math.sin(g), c * Math.sin(g) + b * Math.cos(g)],
        b = [d * Math.cos(g) - b * Math.sin(g),
            d * Math.sin(g) + b * Math.cos(g)
        ];
    else {
        f = [c, e];
        h = [d, e];
        j = [c, b];
        b = [d, b]
    }
    c = this.x + Math.min(f[0], Math.min(h[0], Math.min(j[0], b[0])));
    d = this.x + Math.max(f[0], Math.max(h[0], Math.max(j[0], b[0])));
    e = this.y + Math.min(f[1], Math.min(h[1], Math.min(j[1], b[1])));
    b = this.y + Math.max(f[1], Math.max(h[1], Math.max(j[1], b[1])));
    return {
        left: c,
        top: e,
        right: d,
        bottom: b
    }
};
Canvas.Actor.prototype.draw = function (b, c) {
    var d = b.context;
    if (this.visible) {
        d.save();
        if (this.x !== 0 || this.y !== 0) c && !this.isStatic ? d.translate(this.x + c.getScrollOffsetX(), this.y + c.getScrollOffsetY()) : d.translate(this.x, this.y);
        this.rotation !== 0 && this.rotateLock == 0 && d.rotate(this.rotation * Math.PI / 180);
        this.scale.x != 1 || this.scale.y != 1 ? this.rotateLock == 1 && this.rotation > 90 && this.rotation < 270 ? d.scale(-this.scale.x, this.scale.y) : d.scale(this.scale.x, this.scale.y) : this.rotateLock == 1 && (this.rotation > 90 && this.rotation <
            270) && d.scale(-1, 1);
        d.globalAlpha = this.alpha;
        this.drawFunction ? this.drawFunction(d) : this.image && (this.image.width > 0 && this.image.height > 0) && d.drawImage(this.image, -this.cx + (this.width - this.image.width) / 2, -this.cy + (this.height - this.image.height) / 2, this.image.width, this.image.height);
        if (this.label) {
            d.save();
            this.rotateLock == 1 && (this.rotation > 90 && this.rotation < 270) && d.scale(-1, 1);
            d.strokeStyle = this.fontColor;
            d.fillStyle = this.fontColor;
            d.lineWidth = this.penWidth;
            d.font = this.font;
            d.textAlign = "center";
            d.textBaseline =
                "middle";
            d.fillText(this.label, 0, 0);
            d.restore()
        }
        d.restore()
    }
    Runtime.redrawSprite(this.sprite, b);
    if (!Canvas.hideSelections && this.selected) {
        d.save();
        if (this.x !== 0 || this.y !== 0) c && !this.isStatic ? d.translate(this.x + c.getScrollOffsetX(), this.y + c.getScrollOffsetY()) : d.translate(this.x, this.y);
        if (Runtime.stage.dragMode == "rotate") {
            if (this.rotation !== 0 && this.rotateLock == 0) {
                var e;
                e = c ? 90 + 180 / Math.PI * Math.atan2(Runtime.stage.mousePos.y / Runtime.stage.canvasScale - c.getScrollOffsetY() - Runtime.stage.selectedActor.y,
                    Runtime.stage.mousePos.x / Runtime.stage.canvasScale - c.getScrollOffsetX() - Runtime.stage.selectedActor.x) : 90 + 180 / Math.PI * Math.atan2(Runtime.stage.mousePos.y / Runtime.stage.canvasScale - Runtime.stage.selectedActor.y, Runtime.stage.mousePos.x / Runtime.stage.canvasScale - Runtime.stage.selectedActor.x);
                d.rotate(e * Math.PI / 180)
            }
            e = this.rotation;
            this.rotation = Runtime.stage.origVal;
            var f = this.getBounds();
            this.rotation = e
        } else f = this.getBounds();
        f.left = f.left - this.x;
        f.right = f.right - this.x;
        f.top = f.top - this.y;
        f.bottom =
            f.bottom - this.y;
        d.strokeStyle = "#000";
        d.fillStyle = "#fff";
        d.lineWidth = 2;
        d.dashedLine(f.left - Canvas.boxPadding, f.top - Canvas.boxPadding, f.right + Canvas.boxPadding, f.top - Canvas.boxPadding, 5);
        d.dashedLine(f.right + Canvas.boxPadding, f.top - Canvas.boxPadding, f.right + Canvas.boxPadding, f.bottom + Canvas.boxPadding, 5);
        d.dashedLine(f.right + Canvas.boxPadding, f.bottom + Canvas.boxPadding, f.left - Canvas.boxPadding, f.bottom + Canvas.boxPadding, 5);
        d.dashedLine(f.left - Canvas.boxPadding, f.bottom + Canvas.boxPadding, f.left - Canvas.boxPadding,
            f.top - Canvas.boxPadding, 5);
        d.beginPath();
        d.arc(f.left - Canvas.boxPadding, f.top - Canvas.boxPadding, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc(f.right + Canvas.boxPadding, f.top - Canvas.boxPadding, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc(f.left - Canvas.boxPadding, f.bottom + Canvas.boxPadding, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc(f.right + Canvas.boxPadding, f.bottom + Canvas.boxPadding, Canvas.handleRadius,
            0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc((f.right + f.left) / 2, f.top - Canvas.boxPadding * 3, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.moveTo((f.right + f.left) / 2, f.top - Canvas.boxPadding * 3);
        d.lineTo((f.right + f.left) / 2, f.top - Canvas.boxPadding);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc(f.left - Canvas.boxPadding, (f.top + f.bottom) / 2, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc(f.right + Canvas.boxPadding, (f.top + f.bottom) / 2, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc((f.left + f.right) / 2, f.top - Canvas.boxPadding, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.beginPath();
        d.arc((f.left + f.right) / 2, f.bottom + Canvas.boxPadding, Canvas.handleRadius, 0, Math.PI * 2, true);
        d.stroke();
        d.fill();
        d.closePath();
        d.restore()
    }
};
Canvas.Actor.prototype.drawBubble = function (b, c) {
    if (this.visible && this.text) {
        if (this.bubble.dock == "top") return b.stage.drawBubble(this.text, b, this.bubble, this.x, this.y);
        var d = b.context;
        d.save();
        if (this.x !== 0 || this.y !== 0) c ? d.translate(this.x + c.getScrollOffsetX(), this.y + c.getScrollOffsetY()) : d.translate(this.x, this.y);
        var e = parseFloat(this.bubble.font.split(" ")[1]),
            f = e / 2;
        d.font = this.bubble.font;
        d.lineWidth = this.bubble.penWidth;
        var g = b.canvas.width,
            h = true,
            g = b.canvas.width - (this.x + (-this.cx + this.width) *
                this.scale.x + f * 4),
            j = this.x - this.cx * this.scale.x - f * 4;
        if (j > g)
            if (this.bubble.width > 0) {
                g = b.canvas.width * this.bubble.width / 100;
                h = false
            } else if (this.bubble.width < 0) g = b.canvas.width * this.bubble.width / -100;
            else {
                g = j;
                h = false
            } else if (this.bubble.width > 0) g = b.canvas.width * this.bubble.width / 100;
            else if (this.bubble.width < 0) {
                g = b.canvas.width * this.bubble.width / -100;
                h = false
            }
        var j = breakLines(this.text, d, g),
            g = j.lines,
            j = j.textWidth,
            k = e * 2;
        j < k && (j = k);
        var l = j + f * 2;
        l < e * 4 && (l = e * 4);
        var m = f * 2 + g.length * (e + bubbleFontLinePadding),
            j = h ? (-this.cx + this.width) * this.scale.x + f : -this.cx * this.scale.x - f - l,
            k = -this.cy * this.scale.x - e - f * 2 - g.length * (e + bubbleFontLinePadding);
        this.y + k < 0 && (k = -this.y);
        d.strokeStyle = this.bubble.penColor;
        d.fillStyle = this.bubble.fillColor ? this.bubble.fillColor : "#ffffff";
        switch (this.bubble.style) {
            case "oval":
                d.save();
                d.beginPath();
                d.translate(j + l / 2, k + m / 2);
                var n = Math.sqrt(l * l / 4 + m * m / 4);
                d.scale(l / Math.SQRT2 / n, m / Math.SQRT2 / n);
                if (h) {
                    var h = n * Math.cos(130 * Math.PI / 180),
                        q = n * Math.sin(130 * Math.PI / 180),
                        p = n * Math.cos(140 * Math.PI /
                            180),
                        s = n * Math.sin(140 * Math.PI / 180);
                    d.moveTo(p, s);
                    d.arc(0, 0, n, 140 * Math.PI / 180, 130 * Math.PI / 180, false);
                    d.lineTo(h - e, q + e * 4)
                } else {
                    h = n * Math.cos(50 * Math.PI / 180);
                    q = n * Math.sin(50 * Math.PI / 180);
                    Math.cos(40 * Math.PI / 180);
                    Math.sin(40 * Math.PI / 180);
                    d.moveTo(h, q);
                    d.arc(0, 0, n, 50 * Math.PI / 180, 40 * Math.PI / 180, false);
                    d.lineTo(h + e, q + e * 4)
                }
                d.closePath();
                d.restore();
                d.fill();
                d.stroke();
                break;
            case "thought":
            case "thought-block":
                d.save();
                d.beginPath();
                d.translate(j + l / 2, k + m / 2);
                n = Math.sqrt(l * l / 4 + m * m / 4);
                d.save();
                p = l / Math.SQRT2 /
                    n;
                s = m / Math.SQRT2 / n;
                d.scale(p, s);
                d.moveTo(n, 0);
                d.arc(0, 0, n, 0, 2 * Math.PI, false);
                d.closePath();
                d.restore();
                d.fill();
                d.stroke();
                if (h) {
                    h = (n + 10) * Math.cos(135 * Math.PI / 180);
                    q = (n + 10) * Math.sin(135 * Math.PI / 180);
                    d.save();
                    d.translate(h * p, q * s + 10);
                    d.beginPath();
                    d.arc(0, 0, 10, 0, 2 * Math.PI, false);
                    d.closePath();
                    d.restore();
                    d.fill();
                    d.stroke();
                    d.save();
                    d.translate(h * p - 16, q * s + 30)
                } else {
                    h = (n + 10) * Math.cos(50 * Math.PI / 180);
                    q = (n + 10) * Math.sin(50 * Math.PI / 180);
                    d.save();
                    d.translate(h * p, q * s + 10);
                    d.beginPath();
                    d.arc(0, 0, 10, 0, 2 * Math.PI,
                        false);
                    d.closePath();
                    d.restore();
                    d.fill();
                    d.stroke();
                    d.save();
                    d.translate(h * p + 16, q * s + 30)
                }
                d.beginPath();
                d.arc(0, 0, 5, 0, 2 * Math.PI, false);
                d.closePath();
                d.restore();
                d.fill();
                d.stroke();
                d.restore();
                break;
            case "excited":
                n = Math.sqrt(l * l / 4 + m * m / 4);
                p = l / Math.SQRT2 / n;
                s = m / Math.SQRT2 / n;
                d.save();
                d.translate(j + l / 2, k + m / 2);
                d.beginPath();
                if (h) {
                    var h = 135,
                        q = n * p * Math.cos((h + 360 - 15) * Math.PI / 180),
                        r = n * s * Math.sin((h + 360 - 15) * Math.PI / 180);
                    d.moveTo(q, r);
                    d.lineTo(q - 60, r + 30)
                } else {
                    h = 60;
                    q = n * p * Math.cos((h + 360 - 15) * Math.PI / 180);
                    r = n *
                        s * Math.sin((h + 360 - 15) * Math.PI / 180);
                    d.moveTo(q, r);
                    d.lineTo(q + 40, r + 30)
                }
                for (var o = 0, t = h; t < h + 360 - 15; t = t + 15) {
                    q = n * p * Math.cos(t * Math.PI / 180);
                    r = n * s * Math.sin(t * Math.PI / 180);
                    d.lineTo(q, r);
                    q = (n + 20 * (o % 2 + 1)) * p * Math.cos((t + 7.5) * Math.PI / 180);
                    r = (n + 20 * (o % 2 + 1)) * s * Math.sin((t + 7.5) * Math.PI / 180);
                    d.lineTo(q, r);
                    o++
                }
                d.closePath();
                d.restore();
                d.fill();
                d.stroke();
                break;
            case "rectangular":
                d.beginPath();
                d.moveTo(j, k);
                d.lineTo(j + l, k);
                d.lineTo(j + l, k + m);
                if (h) {
                    d.lineTo(j + f + e * 2, k + m);
                    d.lineTo(j, k + m + e * 2);
                    d.lineTo(j + f * 2, k + m)
                } else {
                    d.lineTo(j +
                        l - f * 2, k + m);
                    d.lineTo(j + l, k + m + e * 2);
                    d.lineTo(j + l - f - e * 2, k + m)
                }
                d.lineTo(j, k + m);
                d.lineTo(j, k);
                d.fill();
                d.stroke();
                break;
            default:
                d.beginPath();
                d.arc(j + f * 2, k + f * 2, f * 2, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
                d.lineTo(j + l - f * 2, k);
                d.arc(j + l - f * 2, k + f * 2, f * 2, 270 * Math.PI / 180, 0, false);
                d.lineTo(j + l, k + m - f * 2);
                d.arc(j + l - f * 2, k + m - f * 2, f * 2, 0, 90 * Math.PI / 180, false);
                if (h) {
                    d.lineTo(j + f + e * 2, k + m);
                    d.lineTo(j, k + m + e * 2);
                    d.lineTo(j + f * 2, k + m)
                } else {
                    d.lineTo(j + l - f * 2, k + m);
                    d.lineTo(j + l, k + m + e * 2);
                    d.lineTo(j + l - f - e * 2, k + m)
                }
                d.arc(j + f * 2, k + m - f * 2, f * 2,
                    90 * Math.PI / 180, 180 * Math.PI / 180, false);
                d.lineTo(j, k + f * 2);
                d.fill();
                d.stroke()
        }
        d.strokeStyle = this.bubble.fontColor;
        d.fillStyle = this.bubble.fontColor;
        for (n = 0; n < g.length; n++) d.fillText(g[n], j + f, k + f + e + (e + bubbleFontLinePadding) * n);
        d.restore();
        return {
            left: this.x + j,
            top: this.y + k,
            width: l,
            height: m
        }
    }
};
Canvas.TileLayer = function (b) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = b.container.offsetWidth;
    this.canvas.height = b.container.offsetHeight;
    this.canvas.style.position = "absolute";
    this.context.mozImageSmoothingEnabled = false;
    this.stage = b;
    this.scrollBgOffset = this.drawGrid = false;
    this.mapHeight = this.mapWidth = 50;
    this.tileSize = 80;
    this.camera = null;
    this.scrollOffset = {
        x: 0,
        y: 0
    };
    this.enabled = false;
    this.tiles = [];
    this.map = [];
    this.blockBounds = {};
    this.fixtures = {};
    this._tileMapping = [15, 15, 15, 15, 20, 27, 20, 27, 21, 21, 28, 28, 18, 16, 17, 30, 19, 19, 19, 19, 4, 23, 4, 23, 5, 5, 24, 24, 1, 8, 9, 29, 22, 22, 22, 22, 13, 13, 13, 13, 14, 14, 14, 14, 25, 25, 25, 25, 26, 26, 26, 26, 11, 11, 11, 11, 12, 12, 12, 12, 10, 10, 10, 10];
    this._tdTileMapping = [8, 4, 5, 1, 6, 11, 12, 16, 7, 9, 10, 15, 2, 14, 13, 3, 8, 4, 5, 1, 6, 19, 12, 32, 7, 9, 10, 15, 2, 35, 13, 44, 8, 4, 5, 1, 6, 11, 21, 36, 7, 9, 10, 15, 2, 14, 33, 41, 8, 4, 5, 1, 6, 19, 21, 20, 7, 9, 10, 15, 2, 35, 33, 49, 8, 4, 5, 1, 6, 11, 12, 16, 7, 25, 10, 38, 2, 31, 13, 43, 8, 4, 5, 1, 6, 19, 5, 32, 7, 25, 10, 38, 2, 22, 13, 52, 8, 4, 5, 1, 6, 11, 21, 36, 7, 25, 10, 38, 2,
        31, 33, 39, 8, 4, 5, 1, 6, 19, 21, 20, 7, 25, 10, 38, 2, 22, 33, 45, 8, 4, 5, 1, 6, 11, 12, 16, 7, 9, 27, 34, 2, 14, 37, 42, 8, 4, 5, 1, 6, 19, 12, 32, 7, 9, 27, 34, 2, 35, 37, 40, 8, 4, 5, 1, 6, 11, 21, 36, 7, 9, 27, 34, 2, 14, 24, 50, 8, 4, 5, 1, 6, 19, 21, 20, 7, 9, 27, 34, 2, 35, 24, 46, 8, 4, 5, 1, 6, 11, 12, 16, 7, 25, 27, 26, 2, 31, 37, 51, 8, 4, 5, 1, 6, 19, 12, 32, 7, 25, 27, 26, 2, 22, 37, 48, 8, 4, 5, 1, 6, 11, 21, 36, 7, 25, 27, 26, 2, 31, 24, 47, 8, 4, 5, 1, 6, 19, 21, 20, 7, 25, 27, 26, 2, 22, 24, 23
    ];
    this.animatedIntervalId = -1;
    this.animatedIntervalIndex = 0;
    this.animationInterval = 200;
    this.currentTileType = 1;
    this._tileSetMapping = {
        transparent: 0,
        castle: 1,
        ruins: 2,
        jungle: 3,
        stone: 4,
        stonevines: 5,
        scifi: 6,
        scifiwreck: 7,
        space: 8,
        steampunk: 9,
        steampunkwreck: 10,
        trees: 11,
        clouds: 12,
        ice: 13,
        "fire-": 14,
        "waterfall-": 15,
        coral: 16,
        dirt: 17,
        purplegeode: 18,
        fortress: 128,
        "green trees": 129,
        house: 130,
        dungeon: 131,
        "blue trees": 132,
        "pink trees": 133,
        "yellow trees": 134,
        desert: 135,
        "water-": 256,
        "slime-": 257,
        "acid-": 258,
        grass: 259,
        sand: 260,
        plaingrass: 261,
        plainsand: 262,
        darkgravel: 263,
        gravel: 264,
        mud: 265,
        rock: 266,
        shallowwater: 267,
        deepwater: 268,
        sidewalk1: 269,
        sidewalk2: 270,
        orangetrack: 271,
        asphalt: 272,
        topsoil: 273,
        hole: 274
    };
    this._tileSetRevMap = {
        "0": "transparent",
        1: "castle",
        2: "ruins",
        3: "jungle",
        4: "stone",
        5: "stonevines",
        6: "scifi",
        7: "scifiwreck",
        8: "space",
        9: "steampunk",
        10: "steampunkwreck",
        11: "trees",
        12: "clouds",
        13: "ice",
        14: "fire-",
        15: "waterfall-",
        16: "coral",
        17: "dirt",
        18: "purplegeode",
        128: "fortress",
        129: "green trees",
        130: "house",
        131: "dungeon",
        132: "blue trees",
        133: "pink trees",
        134: "yellow trees",
        135: "desert",
        256: "water-",
        257: "slime-",
        258: "acid-",
        259: "grass",
        260: "sand",
        261: "plaingrass",
        262: "plainsand",
        263: "darkgravel",
        264: "gravel",
        265: "mud",
        266: "rock",
        267: "shallowwater",
        268: "deepwater",
        269: "sidewalk1",
        270: "sidewalk2",
        271: "orangetrack",
        272: "asphalt",
        273: "topsoil",
        274: "hole"
    };
    this._tiles = {};
    var c = new Image;
    c.src = Sprites._blankImg;
    this._tiles[0] = c;
    this.blockBounds[0] = [];
    c = new b2FixtureDef;
    c.density = 1;
    c.friction = 0.5;
    c.restitution = 0.2;
    this.fixtures[0] = c;
    for (var d in this._tileSetMapping) {
        var e = this._tileSetMapping[d];
        if (e > 0) {
            this._tiles[e] = null;
            this.blockBounds[e] = [];
            this.fixtures[e] =
                c
        }
    }
    b.container.appendChild(this.canvas);
    this.setup();
    window.IDE && $(b.container).bind("mousemove", function () {
        Runtime.stage.draw()
    })
};
Canvas.TileLayer.prototype.setup = function () {
    for (var b in this.blockBounds) this.blockBounds[b] = [];
    this.map = [];
    for (b = 0; b < this.mapHeight; b++) {
        for (var c = [], d = 0; d < this.mapWidth; d++) c.push(0);
        this.map.push(c)
    }
};
Canvas.TileLayer.prototype.enableTiles = function (b) {
    if (this.enabled != b) {
        this.enabled = b;
        this.resetPhysics(Physics.world);
        Physics.updateWorld();
        if (!b) {
            this.scrollOffset.x = 0;
            this.scrollOffset.y = 0;
            this.draw()
        }
    }
};
Canvas.TileLayer.prototype.isTilesEnabled = function () {
    return this.enabled
};
Canvas.TileLayer.prototype.setSize = function (b, c) {
    b <= Math.ceil(Runtime.stage.getWidth() / this.tileSize) ? b = Math.ceil(Runtime.stage.getWidth() / this.tileSize) : b > 200 && (b = 200);
    c <= Math.ceil(Runtime.stage.getHeight() / this.tileSize) ? c = Math.ceil(Runtime.stage.getHeight() / this.tileSize) : c > 200 && (c = 200);
    for (var d = [], e = 0; e < c && e < this.map.length; e++) {
        var f = this.map[e];
        if (b < f.length) f.splice(b, f.length - b);
        else
            for (var g = f.length; g < b; g++) f.push(0);
        d.push(f)
    }
    for (e = this.map.length; e < c; e++) {
        f = [];
        for (g = 0; g < b; g++) f.push(0);
        d.push(f)
    }
    this.map = d;
    this.mapWidth = b;
    this.mapHeight = c
};
Canvas.TileLayer.prototype.getWidth = function () {
    return this.mapWidth
};
Canvas.TileLayer.prototype.getHeight = function () {
    return this.mapHeight
};
Canvas.TileLayer.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
};
Canvas.TileLayer.prototype.resolveTileName = function (b) {
    b = this._tileSetMapping[b];
    return b >= 0 ? b : -1
};
Canvas.TileLayer.prototype.removeTile = function (b, c) {
    if (b >= 0 && b < this.mapWidth && c >= 0 && c < this.mapHeight) {
        this.map[c][b] = 0;
        this.render()
    }
};
Canvas.TileLayer.prototype.placeTile = function (b, c, d) {
    if (b >= 0 && b < this.mapWidth && c >= 0 && c < this.mapHeight) {
        this.map[c][b] = d << 8 | 1;
        this.render()
    }
};
Canvas.TileLayer.prototype.getTile = function (b, c) {
    if (b >= 0 && b < this.mapWidth && c >= 0 && c < this.mapHeight) {
        var d = this.map[c][b] >> 8;
        if (this.map[c][b] != 0 && d >= 0 && this._tileSetRevMap[d]) return this._tileSetRevMap[d]
    }
    return ""
};
Canvas.TileLayer.prototype.render = function () {
    for (var b = 0; b < this.map.length; b++)
        for (var c = this.map[b], d = 0; d < c.length; d++)
            if (c[d]) {
                var e = c[d] & 4294967040,
                    f = d > 0,
                    g = d < c.length - 1,
                    h = b > 0,
                    j = b < this.map.length - 1,
                    k = b < this.map.length - 2;
                if (c[d] >= 32512) {
                    var l = f && (c[d - 1] & 4294967040) == e,
                        m = g && (c[d + 1] & 4294967040) == e,
                        n = h && (this.map[b - 1][d] & 4294967040) == e,
                        q = j && (this.map[b + 1][d] & 4294967040) == e,
                        p = h && f && (this.map[b - 1][d - 1] & 4294967040) == e,
                        h = h && g && (this.map[b - 1][d + 1] & 4294967040) == e,
                        f = j && f && (this.map[b + 1][d - 1] & 4294967040) ==
                        e,
                        g = j && g && (this.map[b + 1][d + 1] & 4294967040) == e,
                        s = false,
                        r = l,
                        o = m,
                        t = q,
                        u = f,
                        w = g;
                    if (c[d] < 65280) {
                        if (j && !k || q && (this.map[b + 2][d] & 4294967040) != e) {
                            s = true;
                            l && (p && !f) && (r = false);
                            m && (h && !g) && (o = false);
                            t = false
                        }
                        l && (p && !f) && (r = false);
                        k && (f && (this.map[b + 2][d - 1] & 4294967040) != e) && (u = false);
                        m && (h && !g) && (o = false);
                        k && (g && (this.map[b + 2][d + 1] & 4294967040) != e) && (w = false)
                    }
                    j = 0;
                    j = j << 1;
                    p && (j = j | 1);
                    j = j << 1;
                    h && (j = j | 1);
                    j = j << 1;
                    u && (j = j | 1);
                    j = j << 1;
                    w && (j = j | 1);
                    j = j << 1;
                    n && (j = j | 1);
                    j = j << 1;
                    t && (j = j | 1);
                    j = j << 1;
                    r && (j = j | 1);
                    j = j << 1;
                    o && (j = j | 1);
                    j = this._tdTileMapping[j];
                    c[d] < 65280 && !s && (!q && n) && (j = l && m ? (f || !p) && (g || !h) ? 30 : f || !p ? 28 : g || !h ? 29 : 17 : l ? f || !p ? 30 : 29 : m ? g || !h ? 30 : 28 : 30)
                } else {
                    l = f && (c[d - 1] & 4294967040) == e;
                    m = g && (c[d + 1] & 4294967040) == e;
                    n = h && (this.map[b - 1][d] & 4294967040) == e;
                    q = j && (this.map[b + 1][d] & 4294967040) == e;
                    p = f && h && (this.map[b - 1][d - 1] & 4294967040) == e;
                    h = g && h && (this.map[b - 1][d + 1] & 4294967040) == e;
                    j = 0;
                    n && (j = j | 1);
                    j = j << 1;
                    q && (j = j | 1);
                    j = j << 1;
                    l && (j = j | 1);
                    j = j << 1;
                    m && (j = j | 1);
                    j = j << 1;
                    p && (j = j | 1);
                    j = j << 1;
                    h && (j = j | 1);
                    j = this._tileMapping[j]
                }
                c[d] = e | j
            }
    this.resetPhysics(Physics.world)
};
Canvas.TileLayer.prototype.setCamera = function (b) {
    this.camera = b;
    if (!b) {
        this.scrollOffset.x = 0;
        this.scrollOffset.y = 0
    }
    this.draw()
};
Canvas.TileLayer.prototype.resetPhysics = function (b) {
    for (var c in this.blockBounds) {
        for (var d = this.blockBounds[c], e = 0; e < d.length; e++) Physics.removeBody(d[e]);
        this.blockBounds[c] = []
    }
    if (this.enabled) {
        e = [];
        for (c = 0; c < this.map.length; c++) e.push(this.map[c].slice());
        d = {};
        for (c in this.blockBounds) d[c] = [];
        for (var f = 0; f < e.length; f++)
            for (var g = e[f], h = 0; h < g.length; h++)
                if (e[f][h]) {
                    var j = e[f][h] >> 8;
                    d[j].push(this._getBlock(e, h, f, j))
                }
        for (c in d) {
            f = new b2BodyDef;
            f.type = b2Body.b2_staticBody;
            g = this.fixtures[c];
            g.shape =
                new b2PolygonShape;
            h = d[c];
            for (e = 0; e < h.length; e++) {
                j = h[e];
                g.shape.SetAsBox(j.width * this.tileSize / 2 / Physics.scale, j.height * this.tileSize / 2 / Physics.scale);
                f.position.Set((j.x + j.width / 2) * this.tileSize / Physics.scale, (j.y + j.height / 2) * this.tileSize / Physics.scale);
                f.userData = c;
                j = b.CreateBody(f);
                j.CreateFixture(g);
                this.blockBounds[c].push(j)
            }
        }
    }
};
Canvas.TileLayer.prototype.setDensity = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    if (b >= 0)
        for (var b = this.blockBounds[b], c = 0; c < b.length; c++) {
            var d = b[c].GetFixtureList();
            d && d.SetDensity(density)
        }
};
Canvas.TileLayer.prototype.setFriction = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    if (b >= 0)
        for (var b = this.blockBounds[b], c = 0; c < b.length; c++) {
            var d = b[c].GetFixtureList();
            d && d.SetFriction(density)
        }
};
Canvas.TileLayer.prototype.setRestitution = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    if (b >= 0)
        for (var b = this.blockBounds[b], c = 0; c < b.length; c++) {
            var d = b[c].GetFixtureList();
            d && d.SetRestitution(density)
        }
};
Canvas.TileLayer.prototype.getDensity = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    return b >= 0 ? this.fixtures[b].GetDensity() : 1
};
Canvas.TileLayer.prototype.getFriction = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    return b >= 0 ? this.fixtures[b].GetFriction() : 0.5
};
Canvas.TileLayer.prototype.getRestitution = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    return b >= 0 ? this.fixtures[b].GetRestitution() : 0.2
};
Canvas.TileLayer.prototype.isActive = function (b) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    b = this._tileSetMapping[b];
    return b >= 0 ? this.blockBounds[b][0].IsActive() : false
};
Canvas.TileLayer.prototype.setActive = function (b, c) {
    b.toString().indexOf(" tiles") == b.length - 6 && (b = b.substring(0, b.length - 6));
    var d = this._tileSetMapping[b];
    if (d >= 0)
        for (var d = this.blockBounds[d], e = 0; e < d.length; e++) d[e].SetActive(c)
};
Canvas.TileLayer.prototype._getBlock = function (b, c, d, e) {
    for (var f = {
        x: c,
        y: d,
        width: 1,
        height: 1
    }, g = c + 1; g < b[d].length && b[d][g] && b[d][g] >> 8 == e; g++) {
        f.width++;
        b[d][g] = 0
    }
    for (d = d + 1; d < b.length; d++) {
        for (var h = 0, g = c; g < c + f.width && b[d][g] && b[d][g] >> 8 == e; g++) h++;
        if (f.width == h) {
            f.height++;
            for (g = c; g < c + f.width; g++) b[d][g] = 0
        } else break
    }
    return f
};
Canvas.TileLayer.prototype.loadMap = function (b) {
    this.map = b;
    this.mapHeight = b.length;
    this.mapWidth = b[0].length;
    if (b) {
        this.render();
        Physics.updateWorld()
    }
    this.draw()
};
Canvas.TileLayer.prototype.getScrollOffset = function () {
    return {
        x: this.scrollOffset.x,
        y: this.scrollOffset.y
    }
};
Canvas.TileLayer.prototype.getScrollOffsetX = function () {
    return this.scrollOffset.x
};
Canvas.TileLayer.prototype.getScrollOffsetY = function () {
    return this.scrollOffset.y
};
Canvas.TileLayer.prototype.setScrollOffset = function (b, c) {
    var d = this.canvas.width / Runtime.stage.canvasScale - this.mapWidth * this.tileSize;
    d > 0 ? b = d / 2 : b > 0 ? b = 0 : b < d && (b = d);
    d = this.canvas.height / Runtime.stage.canvasScale - this.mapHeight * this.tileSize;
    d > 0 ? c = d / 2 : c > 0 ? c = 0 : c < d && (c = d);
    this.scrollOffset.x = Math.floor(b);
    this.scrollOffset.y = Math.floor(c)
};
Canvas.TileLayer.prototype.showGrid = function (b) {
    this.drawGrid = b;
    this.draw()
};
Canvas.TileLayer.prototype.isGridVisible = function () {
    return this.drawGrid
};
Canvas.TileLayer.prototype.draw = function () {
    this.context.save();
    this.context.scale(Runtime.stage.canvasScale, Runtime.stage.canvasScale);
    this.context.clearRect(0, 0, this.canvas.width / Runtime.stage.canvasScale, this.canvas.height / Runtime.stage.canvasScale);
    this.camera && Runtime.isRunning() && this.setScrollOffset(-Math.floor(this.camera.x) + this.canvas.width / 2 / Runtime.stage.canvasScale, -Math.floor(this.camera.y) + this.canvas.height / 2 / Runtime.stage.canvasScale);
    var b = this.scrollOffset.x % this.tileSize,
        c = this.scrollOffset.y %
        this.tileSize;
    if (Runtime.stage.penLayer && Runtime.stage.penLayer.isStatic) {
        var d = document.getElementById("stage-canvas");
        Runtime.stage.penLayer.canvas.style.left = this.scrollOffset.x * parseInt(d.style.width) / Runtime.stage.penLayer.canvas.width + "px";
        Runtime.stage.penLayer.canvas.style.top = this.scrollOffset.y * parseInt(d.style.height) / Runtime.stage.penLayer.canvas.height + "px"
    }
    if (this.drawGrid || Runtime.stage.designMode == "place" || Runtime.stage.designMode == "remove") {
        this.context.save();
        this.context.strokeStyle =
            "#cccccc";
        this.context.fillStyle = "#cccccc";
        for (var e = c; e < c + this.canvas.height / Runtime.stage.canvasScale; e = e + this.tileSize) {
            this.context.beginPath();
            this.context.moveTo(0, e);
            this.context.lineTo(this.canvas.width / Runtime.stage.canvasScale, e);
            this.context.stroke()
        }
        for (var f = b; f < b + this.canvas.width / Runtime.stage.canvasScale; f = f + this.tileSize) {
            this.context.beginPath();
            this.context.moveTo(f, 0);
            this.context.lineTo(f, this.canvas.height / Runtime.stage.canvasScale);
            this.context.stroke()
        }
        this.context.restore()
    }
    if (this.enabled &&
        this.map && this.map.length > 0) {
        if (this.camera && Runtime.isRunning()) {
            Runtime.stage.penLayer.context.setTransform(1, 0, 0, 1, 0, 0);
            Runtime.stage.penLayer.context.translate(this.scrollOffset.x, this.scrollOffset.y)
        }
        d = Runtime.background.getCurrentCostume();
        if (this.scrollBgOffset && d && d.imgObj) {
            if (Runtime.stage.bgtype == "tile") {
                Runtime.stage.backgroundOffsetX = Runtime.stage.tileLayer.scrollOffset.x * Runtime.stage.canvasScale;
                Runtime.stage.backgroundOffsetY = Runtime.stage.tileLayer.scrollOffset.y * Runtime.stage.canvasScale
            } else {
                Runtime.stage.backgroundOffsetX =
                    Runtime.stage.tileLayer.scrollOffset.x * (d.imgObj.width - Runtime.stage.getWidth()) / (this.mapWidth * this.tileSize - Runtime.stage.getWidth());
                Runtime.stage.backgroundOffsetY = Runtime.stage.tileLayer.scrollOffset.y * (d.imgObj.height - Runtime.stage.getHeight()) / (this.mapHeight * this.tileSize - Runtime.stage.getHeight())
            }
            Runtime.stage.setBackgroundType()
        }
        var g = this.scrollOffset.x < 0 ? 1 : -1,
            d = g * Math.floor(Math.abs(this.scrollOffset.x) / this.tileSize),
            g = this.scrollOffset.y < 0 ? 1 : -1,
            g = g * Math.floor(Math.abs(this.scrollOffset.y) /
                this.tileSize),
            h = Math.ceil(this.canvas.width / Runtime.stage.canvasScale / this.tileSize),
            j = Math.ceil(this.canvas.height / Runtime.stage.canvasScale / this.tileSize);
        d + h >= this.map[0].length && (h = this.map[0].length - d - 1);
        g + j >= this.map.length && (j = this.map.length - g - 1);
        var k = 0;
        d < 0 && (k = -d);
        e = 0;
        for (g < 0 && (e = -g) ; e <= j; e++)
            for (var l = this.map[e + g], f = k; f <= h; f++)
                if (l[f + d]) {
                    var m = l[f + d],
                        n = m >> 8;
                    if (m = m & 255) {
                        m--;
                        var q = this._tiles[n];
                        if (q) {
                            q instanceof Array && (q = q[this.animatedIntervalIndex % 4]);
                            q.isReady && this.context.drawImage(q,
                                this.tileSize * (m % 8), this.tileSize * Math.floor(m / 8), this.tileSize, this.tileSize, f * this.tileSize + b, e * this.tileSize + c, this.tileSize + 1, this.tileSize + 1)
                        } else {
                            m = this._tileSetRevMap[n];
                            if (m[m.length - 1] == "-") {
                                for (var p = this, s = [], r = 1; r <= 4; r++) {
                                    q = new Image;
                                    q.isReady = false;
                                    q.onload = function () {
                                        this.isReady = true;
                                        p.draw()
                                    };
                                    q.src = "ide/level/" + m + r + ".png";
                                    s.push(q)
                                }
                                p._tiles[n] = s;
                                if (this.animatedIntervalId < 0) this.animatedIntervalId = window.setInterval(function () {
                                    p.animatedIntervalIndex++;
                                    p.draw()
                                }, this.animationInterval)
                            } else {
                                p =
                                    this;
                                q = new Image;
                                q.isReady = false;
                                q.onload = function () {
                                    this.isReady = true;
                                    p.draw()
                                };
                                q.src = "ide/level/" + m + ".png";
                                p._tiles[n] = q
                            }
                        }
                    }
                }
        if (Runtime.stage.designMode == "place")
            if (q = this._tiles[this.currentTileType]) {
                q instanceof Array && (q = q[this.animatedIntervalIndex % 4]);
                if (q.isReady) {
                    f = Math.floor((Runtime.stage.mousePos.x / Runtime.stage.canvasScale - this.scrollOffset.x) / this.tileSize) - d;
                    e = Math.floor((Runtime.stage.mousePos.y / Runtime.stage.canvasScale - this.scrollOffset.y) / this.tileSize) - g;
                    this.context.drawImage(q,
                        0, 0, this.tileSize, this.tileSize, f * this.tileSize + b, e * this.tileSize + c, this.tileSize, this.tileSize)
                }
            } else {
                m = this._tileSetRevMap[this.currentTileType];
                if (m[m.length - 1] == "-") {
                    p = this;
                    s = [];
                    for (r = 1; r <= 4; r++) {
                        q = new Image;
                        q.isReady = false;
                        q.onload = function () {
                            this.isReady = true;
                            p.draw()
                        };
                        q.src = "ide/level/" + m + r + ".png";
                        s.push(q)
                    }
                    p._tiles[this.currentTileType] = s;
                    if (this.animatedIntervalId < 0) this.animatedIntervalId = window.setInterval(function () {
                        p.animatedIntervalIndex++;
                        p.draw()
                    }, this.animationInterval)
                } else {
                    p = this;
                    q = new Image;
                    q.isReady = false;
                    q.onload = function () {
                        this.isReady = true;
                        p.draw()
                    };
                    q.src = "ide/level/" + m + ".png";
                    p._tiles[this.currentTileType] = q
                }
            }
    }
    this.context.restore()
};
$(document).ready(function () {
    $(window).bind("keydown", function (b) {
        if (!Runtime._blockEvents && ((!window.WinCode || window.WinCode._inputField == null) && b.target.tagName != "INPUT" && b.target.tagName != "TEXTAREA" && $("#win-annotation .jqte").length <= 0) && !b.metaKey)
            if (b.which == 32 || b.which == 37 || b.which == 39 || b.which == 38 || b.which == 40) {
                Runtime.triggerKeyEvent(b);
                b.preventDefault()
            } else Runtime.triggerKeyEvent(b)
    });
    $(window).bind("keyup", function (b) {
        if (!Runtime._blockEvents && ((!window.WinCode || window.WinCode._inputField ==
                null) && b.target.tagName != "INPUT" && b.target.tagName != "TEXTAREA" && $("#win-annotation .jqte").length <= 0) && !b.metaKey)
            if (b.which == 32 || b.which == 37 || b.which == 39 || b.which == 38 || b.which == 40) {
                Runtime.triggerKeyUpEvent(b);
                b.preventDefault()
            } else Runtime.triggerKeyUpEvent(b)
    });
    soundManager.url = "/ext/swf/";
    soundManager.useHTML5Audio = true;
    soundManager.preferFlash = false;
    soundManager.debugMode = false;
    soundManager.onready(function () { });
    soundManager.ontimeout(function () {
        console.log("sound manager could not start")
    })
});