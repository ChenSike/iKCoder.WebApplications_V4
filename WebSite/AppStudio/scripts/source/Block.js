Blocks = {
    showMarked: !1,
    images: {
        "ide/imgs/play.png": null,
        "ide/imgs/button-cw.png": null,
        "ide/imgs/button-ccw.png": null,
        "ide/imgs/button-add.png": null,
        "ide/imgs/button-remove.png": null,
        "ide/imgs/button-edit.png": null,
        "ide/imgs/button-grass.png": null,
        "ide/imgs/button-drone.png": null,
        "ide/imgs/button-ollie.png": null,
        "ide/imgs/button-hue.png": null,
        "ide/imgs/button-sphero.png": null,
        "ide/imgs/button-wedo2.png": null
    },
    _scale: 1,
    _pattern: /^[0-9a-fA-F]+\.(png|jpg)$/,
    reLabel: RegExp(/(?:\{(?:[-a-zA-Z0-9:#_./!? ]+|\{[0-9]+\})+\})/g),
    revLabel: RegExp(/\{(choice:)?([a-zA-Z0-9 ]+):?(([-a-zA-Z0-9#_./!? ]+|\{[0-9]+\})+)?}/g),
    reHexColor: RegExp(/^[0-9A-Fa-f]{6}$/),
    allowAddInOptions: !0,
    getImage: function (b) {
        if (Blocks.images[b]) c = Blocks.images[b];
        else {
            var c = new Image;
            c.onload = function () {
                c.ready = true;
                window.IDE && IDE.computeAll();
                window.IDE && IDE.draw()
            };
            c.src = b.indexOf("/") >= 0 ? b : Blocks._pattern.test(b) ? "/assets2/assets/" + b : "ide/imgs/puzzler/" + b;
            Blocks.images[b] = c
        }
        return c
    },
    findBlockWithId: function (b, c) {
        if (b instanceof Block) {
            if (b.id == c) return b;
            var d = Blocks.findBlockWithId(b.label, c);
            if (d != null) return d;
            for (var e = 0; e < b._containers.length; e++) {
                d = Blocks.findBlockWithId(b._containers[e], c);
                if (d != null) return d
            }
            if (b.next != null) {
                d = Blocks.findBlockWithId(b.next, c);
                if (d != null) return d
            }
        } else if (b instanceof Label) {
            if (b.id == c) return b;
            for (e = 0; e < b._children.length; e++) {
                d = Blocks.findBlockWithId(b._children[e], c);
                if (d != null) return d
            }
        } else if (b instanceof LabelInput && b._child != null) {
            d = Blocks.findBlockWithId(b._child, c);
            if (d != null) return d
        }
        return null
    },
    measureText: function (b, c) {
        if (!Blocks.fontCtx) Blocks.fontCtx = {};
        c || (c = defaultLabelFont);
        if (!Blocks.fontCtx[c]) {
            Blocks.fontCtx[c] = $("<canvas></canvas>")[0].getContext("2d");
            Blocks.fontCtx[c].font = defaultLabelFontWeight + " " + defaultLabelFontSize + "px " + c
        }
        return Blocks.fontCtx[c].measureText(b)
    }
};
$(document).ready(function () {
    for (var b in Blocks.images) Blocks.images[b] = Blocks.getImage(b)
});

function Block(b) {
    this.cat = b.cat !== void 0 ? b.cat : "flow";
    this.func = b.func !== void 0 ? b.func : "nop";
    this.id = b.id !== void 0 ? b.id : 0;
    if (b.name) this.name = b.name;
    this.hasFlap = b.hasFlap !== void 0 ? b.hasFlap : true;
    this.hasSlot = b.hasSlot !== void 0 ? b.hasSlot : true;
    this.color = g_catColor[b.cat] !== void 0 ? g_catColor[b.cat] : g_defaultStepColor;
    this.marked = b.marked !== void 0 ? b.marked : false;
    this.hilight = false;
    if (b.note) this.note = b.note;
    this.totalHeight = this.height = this.width = this.y = this.x = 0;
    this._containers = [];
    if (b.containers !==
        void 0) {
        this._containerLabels = [];
        for (var c = 0; c < b.containers; c++) {
            this._containers.push(null);
            if (c > 0) {
                var d;
                if (c < b.containers - 1) {
                    d = window.RenderCode ? RenderCode.getElseIfLabel(this) : "else if {boolean} then";
                    d = new Label({
                        label: d,
                        cat: this.cat
                    })
                } else if (c < b.containers) {
                    d = window.RenderCode ? RenderCode.getElseLabel(this) : "else";
                    d = new Label({
                        label: d,
                        cat: this.cat
                    })
                }
                d.parent = this;
                d.draggable = false;
                this._containerLabels.push(d)
            }
        }
    }
    this.parent = this.next = null;
    this.labelText = b.label ? b.label : b.name ? b.name : "";
    if (!this.hasFlap &&
        !this.hasSlot) {
        this.labelText = "Code Notes";
        this.width = 100;
        this.totalHeight = this.height = 24
    }
    c = this.labelText;
    window.RenderCode && (c = RenderCode.getCodeStartLabel(this));
    this.locked = b.locked ? true : false;
    this.hidden = b.hidden ? true : false;
    this.func == "registerFunction" && !this.locked && (c = c + " {button:editfn}");
    this.label = new Label({
        label: c,
        cat: this.cat,
        varargs: b.varargs
    });
    this.label.parent = this;
    this.label.draggable = false
}
Block.prototype.reRender = function () {
    var b = ObjectIO.genScriptObj(this),
        b = ObjectIO.deserializeScriptStep(b);
    this.cat = b.cat;
    this.func = b.func;
    if (b.name) this.name = b.name;
    this.hasFlap = b.hasFlap;
    this.hasSlot = b.hasSlot;
    this.color = b.color;
    this.marked = b.marked;
    this.hilight = b.hilight;
    if (b.note) this.note = b.note;
    if (this._containers = b._containers)
        for (var c = 0; c < this._containers.length; c++)
            if (this._containers[c]) this._containers[c].parent = this;
    if (this._containerLabels = b._containerLabels)
        for (c = 0; c < this._containerLabels.length; c++)
            if (this._containerLabels[c]) this._containerLabels[c].parent =
                this;
    if (this.next = b.next) this.next.parent = this;
    this.labelText = b.labelText;
    this.label = b.label;
    this.label.parent = this;
    this._computeBlockBounds()
};
Block.prototype.convertToLabel = function () {
    var b = this.label.copy();
    b.name = this.name;
    b.cat = this.cat;
    b.parent = null;
    b.draggable = true;
    b.label = b.labelText;
    return b
};
Block.prototype.setDisabled = function (b) {
    this.disabled = b;
    this.label.setDisabled(b);
    for (var c = 0; c < this._containers.length; c++) this._containers[c] != null && this._containers[c].setDisabled(b);
    this.next != null && this.next.setDisabled(b)
};
Block.prototype.selectInBounds = function (b, c, d, e) {
    this.showSelected = !(b > this.x + this.width || b + d < this.x || c > this.y + this.height || c + e < this.y);
    this.label.selectInBounds(b, c, d, e);
    if (this.showSelected)
        for (var f = 0; f < this._containers.length; f++) this._containers[f] != null && this._containers[f].setSelected(true, true);
    else
        for (f = 0; f < this._containers.length; f++) this._containers[f] != null && this._containers[f].selectInBounds(b, c, d, e);
    this.next != null && this.next.selectInBounds(b, c, d, e)
};
Block.prototype.setSelected = function (b, c) {
    this.showSelected = b;
    this.label.setSelected(b, c);
    for (var d = false, e = 0; e < this._containers.length; e++) this._containers[e] != null && (c === false || c === true ? this._containers[e].setSelected(b, true) : this._containers[e].setSelected(b, -c) && (d = true));
    if (this._containerLabels)
        for (e = 0; e < this._containerLabels.length; e++) this._containerLabels[e].setSelected(b, true);
    if (c)
        if (!d && this.id != c && this.id != -c) {
            if (this.next != null) return this.next.setSelected(b, c)
        } else {
            this.next != null &&
                this.next.setSelected(c < 0, true);
            return true
        }
    return d
};
Block.prototype.setCurrent = function () {
    this.getRoot()._setCurrent(this)
};
Block.prototype._setCurrent = function (b) {
    this.isCurrent = this == b ? true : false;
    for (var c = 0; c < this._containers.length; c++) this._containers[c] != null && this._containers[c]._setCurrent(b);
    this.next != null && this.next._setCurrent(b)
};
Block.prototype.setOutline = function (b) {
    this.showOutline = b;
    this.label.setOutline(b);
    for (var c = 0; c < this._containers.length; c++) this._containers[c] != null && this._containers[c].setOutline(b);
    this.next != null && this.next.setOutline(b)
};
Block.prototype.copy = function () {
    var b = new Block({
        cat: this.cat,
        func: this.func,
        label: this.labelText,
        name: this.name,
        containers: this._containers.length,
        containerLabels: this._containers.length,
        hasFlap: this.hasFlap,
        hasSlot: this.hasSlot,
        color: this.color,
        locked: this.locked,
        hidden: this.hidden
    });
    b.label = this.label.copy();
    b.label.parent = b;
    b.labelText = this.labelText;
    if (this.marked) b.marked = true;
    if (this.locked) b.locked = true;
    if (this.tags && this.tags.length > 0) {
        b.tags = [];
        for (var c = 0; c < this.tags.length; c++) b.tags.push(this.tags[c])
    }
    b.x =
        this.x;
    b.y = this.y;
    b.width = this.width;
    b.height = this.height;
    if (this._containers.length > 1) b._containerLabels = [];
    for (c = 0; c < this._containers.length; c++) {
        if (this._containers[c] != null) {
            b._containers[c] = this._containers[c].copy();
            b._containers[c].parent = b
        }
        if (c > 0) {
            var d = this._containerLabels[c - 1].copy();
            d.labelText = this._containerLabels[c - 1].labelText;
            d.parent = b;
            b._containerLabels[c - 1] = d
        }
    }
    if (this.next != null) {
        b.next = this.next.copy();
        b.next.parent = b
    }
    return b
};
Block.prototype.copySelection = function () {
    var b = null;
    if (this.showSelected) {
        b = new Block({
            cat: this.cat,
            func: this.func,
            label: this.labelText,
            name: this.name,
            containers: this._containers.length,
            hasFlap: this.hasFlap,
            hasSlot: this.hasSlot,
            color: this.color
        });
        b.label = this.label.copy();
        b.label.parent = b;
        b.labelText = this.labelText;
        b.x = this.x;
        b.y = this.y;
        b.width = this.width;
        b.height = this.height;
        for (var c = 0; c < this._containers.length; c++) {
            if (this._containers[c] != null) {
                b._containers[c] = this._containers[c].copy();
                b._containers[c].parent =
                    b
            }
            if (c > 0) {
                var d = this._containerLabels[c - 1].copy();
                d.labelText = this._containerLabels[c - 1].labelText;
                d.parent = b;
                b._containerLabels[c - 1] = d
            }
        }
        if (this.next != null) {
            b.next = this.next.copySelection();
            if (b.next != null) b.next.parent = b
        }
    }
    return b
};
Block.prototype.copyUntil = function (b) {
    var c = new Block({
        cat: this.cat,
        func: this.func,
        label: this.labelText,
        name: this.name,
        containers: this._containers.length,
        hasFlap: this.hasFlap,
        hasSlot: this.hasSlot,
        color: this.color
    });
    c.label = this.label.copy();
    c.label.parent = c;
    c.x = this.x;
    c.y = this.y;
    c.width = this.width;
    c.height = this.height;
    for (var d = 0; d < this._containers.length; d++) {
        if (this._containers[d] != null) {
            c._containers[d] = this._containers[d].copyUntil(b);
            c._containers[d].parent = c
        }
        if (d > 0) {
            var e = this._containerLabels[d -
                1].copy();
            e.labelText = this._containerLabels[d - 1].labelText;
            e.parent = c;
            c._containerLabels[d - 1] = e
        }
    }
    if (this.next != null) {
        c.next = this.next.copyUntil(b);
        c.next.parent = c
    }
    return c
};
Block.prototype.getMaxWidth = function () {
    var b = this.width;
    if (this.next) {
        var c = this.next.getMaxWidth();
        c > b && (b = c)
    }
    for (var d = 0; d < this._containers.length; d++) {
        c = this._containers[d];
        if (c != null) {
            c = c.getMaxWidth();
            c + containerLeft > b && (b = c + containerLeft)
        }
    }
    return b
};
Block.prototype.getImage = function (b, c) {
    c || (c = 1);
    if (this.hasFlap) this.y = this.y + slotHeight;
    this._computeBounds();
    var d = this.getMaxWidth(),
        d = $('<canvas style="display:none;position:absolute;left:0px;top:0px;z-index:100000;" width="' + (d + 1) * c + '" height="' + (this.totalHeight + slotHeight + 1) * c + '"></canvas>'),
        e = d[0].getContext("2d");
    e.translateX = 0;
    e.translateY = 0;
    e.offsetX = 0;
    e.offsetY = 0;
    e.translate(0.5, 0.5);
    e.scale(c, c);
    this.draw(e);
    var d = d[0].toDataURL(),
        f = new Image;
    if (b) f.onload = function () {
        b(f)
    };
    f.src = d;
    if (this.hasFlap) this.y =
        this.y - slotHeight;
    return f
};
Block.prototype.addToContainer = function (b, c) {
    if (b >= 0 && b < this._containers.length) {
        var d = this._containers[b];
        if (d != null) {
            for (var e = c; e.next != null;) e = e.next;
            e.next = d;
            d.parent = e
        }
        this._containers[b] = c;
        if (c != null) c.parent = this;
        this._computeBounds()
    }
};
Block.prototype.appendToContainer = function (b, c) {
    if (c && b >= 0 && b < this._containers.length) {
        var d = this._containers[b];
        if (d != null) {
            for (; d.next != null;) d = d.next;
            d.next = c;
            c.parent = d
        } else {
            c.parent = this;
            this._containers[b] = c
        }
        this._computeBounds()
    }
};
Block.prototype.getNumContainers = function () {
    return this._containers.length
};
Block.prototype.getBlockAtContainer = function (b) {
    return b >= 0 && b < this._containers.length ? this._containers[b] : null
};
Block.prototype.getLabelAtContainer = function (b) {
    return b == 0 ? this.label : this._containerLabels[b - 1]
};
Block.prototype.indexForBlockInContainer = function (b) {
    for (var c = 0; c < this._containers.length; c++)
        if (this._containers[c] == b) return c;
    return -1
};
Block.prototype.add = function (b) {
    if (b) {
        if (this.next != null) {
            for (var c = b; c.next != null;) c = c.next;
            c.next = this.next;
            this.next.parent = c
        }
        this.next = b;
        b.parent = this;
        this._computeBounds()
    }
};
Block.prototype.getLastBlock = function () {
    for (var b = this; b.next != null;) b = b.next;
    return b
};
Block.prototype.append = function (b) {
    if (b) {
        for (var c = this; c.next != null;) c = c.next;
        c.next = b;
        b.parent = c;
        this._computeBounds()
    }
};
Block.prototype.detach = function () {
    var b = this.parent;
    if (b != null) {
        for (var c = false, d = 0; d < b._containers.length; d++)
            if (b._containers[d] == this) {
                b._containers[d] = null;
                c = true;
                break
            }
        if (!c) b.next = null;
        this.parent = null;
        b._computeBounds()
    }
};
Block.prototype.detachSelected = function () {
    var b = null;
    if (this.showSelected) {
        this.showSelected = false;
        for (b = this.next; b && b.showSelected;) b = b.next;
        if (b && b.parent) {
            b.parent.next = null;
            b.parent = null
        } else b = null;
        var c = this.parent;
        if (c != null) {
            for (var d = false, e = 0; e < c._containers.length; e++)
                if (c._containers[e] == this) {
                    if (c._containers[e] = b) b.parent = c;
                    d = true;
                    break
                }
            if (!d) {
                if (b) b.parent = c;
                c.next = b
            }
            this.parent = null;
            c._computeBounds();
            b = null
        }
        this.setSelected(false, true)
    }
    b && b._computeBounds();
    return b
};
Block.prototype.getInputAtPoint = function (b, c) {
    var d = this.label.getInputAtPoint(b, c);
    if (!d && this._containerLabels && this._containerLabels.length > 0)
        for (var e = 0; e < this._containerLabels.length; e++)
            if (d = this._containerLabels[e].getInputAtPoint(b, c)) break;
    return d
};
Block.prototype.getChildAtPoint = function (b, c) {
    if (this.locked && (this.hasFlap || this.next && this.next.locked)) return null;
    if (b >= this.x) {
        var d;
        if (this.hasFlap) {
            if (b <= this.x + this.label.width + labelHorzPadding && c >= this.y && c <= this.y + this.label.height + labelVertPadding * 2) {
                d = this.label.getChildAtPoint(b, c);
                return d != null && d != this.label ? d : this
            }
            d = this.label.height + labelVertPadding * 2
        } else if (this.hasSlot) {
            if (b <= this.x + this.label.width + labelHorzPadding + this.label.height && c >= this.y && c <= this.y + this.label.height + labelVertPadding *
                2 + containerSeparator / 2) {
                d = this.label.getChildAtPoint(b, c);
                return d != null && d != this.label ? d : this
            }
            d = this.label.height + labelVertPadding * 2 + containerSeparator / 2
        } else return b <= this.x + this.width && c >= this.y && c <= this.y + this.height ? this : null;
        for (var e = 0; e < this._containers.length; e++) {
            if (this._containers[e] != null) {
                var f = this._containers[e].getChildAtPoint(b, c);
                if (f != null) return f;
                d = d + this._containers[e].totalHeight
            } else d = d + emptyContainerHeight;
            var f = this.label.width,
                g = containerSeparator;
            if (e < this._containers.length -
                1) {
                f = this._containerLabels[e].width;
                g = this._containerLabels[e].height;
                if (b <= this.x + f + labelHorzPadding && c >= this.y + d && c <= this.y + d + g) {
                    d = this._containerLabels[e].getChildAtPoint(b, c);
                    return d != null && d != this._containerLabels[e] ? d : this
                }
            }
            d = d + g
        }
        if (b >= this.x && b <= this.x + containerLeft && c >= this.y && c <= this.y + d) return this;
        if (this.next != null)
            if (f = this.next.getChildAtPoint(b, c)) return f
    }
    return null
};
Block.prototype.nearValue = function (b, c) {
    for (var d = this; d;) {
        var e = d.label.nearValue(b, c);
        if (e != null) return e;
        if (d._containers != null)
            for (var f = 0; f < d._containers.length; f++) {
                e = d._containers[f];
                if (e != null) {
                    e = e.nearValue(b, c);
                    if (e != null) return e
                }
                if (f > 0) {
                    e = d._containerLabels[f - 1].nearValue(b, c);
                    if (e != null) return e
                }
            }
        d = d.next
    }
    return null
};
Block.prototype.objNearValue = function (b) {
    for (var c = this; c;) {
        var d = c.label.objNearValue(b);
        if (d != null) return d;
        if (c._containers != null)
            for (var e = 0; e < c._containers.length; e++) {
                d = c._containers[e];
                if (d != null) {
                    d = d.objNearValue(b);
                    if (d != null) return d
                }
                if (e > 0) {
                    d = c._containerLabels[e - 1].objNearValue(b);
                    if (d != null) return d
                }
            }
        c = c.next
    }
    return null
};
Block.prototype.blockNearSlot = function (b) {
    return b instanceof Block && b.hasFlap ? this.nearSlot(b.x + slotBegin + slotWidth / 2, b.y - slotHeight / 2) : false
};
Block.prototype.blockNearFlap = function (b) {
    return b instanceof Block && b.hasSlot ? this.nearFlap(b.x + slotBegin + slotWidth / 2, b.y + b.totalHeight - slotHeight / 2) : false
};
Block.prototype.blockNearContainer = function (b) {
    if (b instanceof Block && b._containers.length > 0)
        for (var c = 0; c < b._containers.length; c++);
    return false
};
Block.prototype.nearSlot = function (b, c) {
    var d = this;
    if (d.locked && (d.hasFlap || d.next && d.next.locked)) return null;
    for (; d;) {
        if (d._containers.length > 0)
            for (var e = d.y + d.label.height + labelVertPadding * 2, f = 0; f < d._containers.length; f++) {
                var g = d._containers[f];
                if (b >= d.x + containerLeft + slotBegin - slotSelectionBounds && b <= d.x + d.width && c >= e - slotHeight - slotSelectionBounds && c <= e + slotSelectionBounds) return [f, d, d.x + containerLeft, e];
                if (g != null) {
                    var h = g.nearSlot(b, c);
                    if (h) return h;
                    e = e + g.totalHeight
                } else e = e + emptyContainerHeight;
                e = f < d._containers.length - 1 ? e + d._containerLabels[f].height : e + containerSeparator
            }
        if (d.hasSlot && b >= d.x + slotBegin - slotSelectionBounds && b <= d.x + d.width && c >= d.y + d.height - slotHeight - slotSelectionBounds && c <= d.y + d.height + slotSelectionBounds) return [-1, d, d.x, d.y + d.height];
        d = d.next
    }
    return null
};
Block.prototype.nearFlap = function (b, c) {
    for (var d = this; d;) {
        if (d._containers.length > 0)
            for (var e = 0; e < d._containers.length; e++) {
                var f = d._containers[e];
                if (f != null)
                    if (f = f.nearFlap(b, c)) return f
            }
        if (d.hasFlap && b >= d.x + slotBegin - slotSelectionBounds && b <= d.x + d.width && c >= d.y - slotHeight - slotSelectionBounds && c <= d.y + slotSelectionBounds) return [-1, d, d.x, d.y];
        d = d.next
    }
    return null
};
Block.prototype.getContainerPos = function (b) {
    if (this._containers.length > 0)
        for (var c = this.y + this.label.height + labelVertPadding * 2, d = 0; d < this._containers.length; d++) {
            var e = this._containers[d];
            if (d == b) return [this.x + containerLeft, c];
            c = e != null ? c + e.totalHeight : c + emptyContainerHeight;
            c = d < this._containers.length - 1 ? c + this._containerLabels[d].height : c + containerSeparator
        }
    return [obj.x, obj.y + obj.height]
};
Block.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
Block.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
Block.prototype._computeBlockBounds = function () {
    if (this.func == "blockComment" && !this.hasFlap && !this.hasSlot) this.totalHeight = this.height;
    else {
        this.label.x = this.x;
        this.label.y = this.y + labelVertPadding;
        if (!this.hasFlap) this.label.y = this.label.y + containerSeparator / 2;
        this.label._computeBlockBounds();
        this.width = this.label.width + labelHorzPadding;
        var b = this.label.height + labelVertPadding * 2;
        this.hasFlap || (b = b + startBlockTopHeight);
        for (var c = 0; c < this._containers.length; c++) {
            var d = this._containers[c];
            if (d != null) {
                d.x =
                    this.x + containerLeft;
                d.y = this.y + b;
                b = b + d._computeBlockBounds()
            } else b = b + emptyContainerHeight;
            if (c < this._containers.length - 1) {
                d = this._containerLabels[c];
                d.x = this.x;
                d.y = this.y + b;
                d._computeBlockBounds();
                b = b + (d.height + labelVertPadding * 2);
                if (d.width + labelHorzPadding > this.width) this.width = d.width + labelHorzPadding
            } else b = window.RenderCode && RenderCode.isCode() && RenderCode.getCodeEndLabel(this) ? b + (defaultLabelFontSize + 6 + labelVertPadding * 2) : b + containerSeparator
        }
        this.height = b;
        if (!this.hasFlap) this.width = this.width +
            (this.label.height + labelVertPadding * 2);
        if (this.next) {
            this.next.x = window.RenderCode && RenderCode.startRequiresClosingBracket(this) ? this.x + containerLeft : this.x;
            this.next.y = this.y + b;
            b = b + this.next._computeBlockBounds()
        }
        if (window.RenderCode && RenderCode.startRequiresClosingBracket(this)) {
            b = RenderCode.getCodeEndLabel(this) ? b + (defaultLabelFontSize + 6 + labelVertPadding * 2) : b + containerSeparator;
            this.next || (b = b + emptyContainerHeight)
        }
        return this.totalHeight = b
    }
};
Block.prototype.draw = function (b) {
    window.WinCode && (!window.WinCode._hilightStep && this.showOutline) && this._drawOutline(b);
    this._draw(b);
    window.WinCode && (window.WinCode._hilightStep && this.showOutline) && this._drawOutline(b, 4)
};
Block.prototype._draw = function (b) {
    if (b.translateX + b.offsetX + this.x < b.canvas.width / Blocks._scale && b.translateY + b.offsetY + this.y < b.canvas.height / Blocks._scale && b.translateY + b.offsetY + this.y + this.totalHeight > 0) {
        if (!this.hasFlap && !this.hasSlot) {
            b.save();
            b.translate(this.x, this.y);
            if (this.showSelected) {
                b.fillStyle = selectionBgColor;
                b.strokeStyle = selectionStrokeColor
            } else if (window.RenderCode && RenderCode.isCode()) {
                b.fillStyle = g_blockCodeColor[0];
                b.strokeStyle = g_blockCodeColor[2]
            } else {
                b.fillStyle = this.color[0];
                b.strokeStyle = this.color[2]
            }
            b.beginPath();
            b.moveTo(0, 0);
            b.lineTo(this.width, 0);
            b.lineTo(this.width, this.height);
            b.lineTo(0, this.height);
            b.lineTo(0, this.height);
            b.closePath();
            b.fill();
            b.stroke();
            b.save();
            b.beginPath();
            b.moveTo(notePadding, notePadding);
            b.lineTo(this.width - notePadding, notePadding);
            b.lineTo(this.width - notePadding, this.height - notePadding);
            b.lineTo(notePadding, this.height - notePadding);
            b.clip();
            b.strokeStyle = "#000";
            b.fillStyle = "#000";
            b.font = noteFontHeight + "px " + noteFont;
            for (var c = breakLines(this.labelText,
                    b, this.width - notePadding * 2).lines, d = 0; d < c.length; d++) b.fillText(c[d], notePadding, notePadding + noteFontHeight + noteFontHeight * d);
            b.restore();
            if (this.showDragHandle) {
                b.strokeStyle = "#555";
                b.globalAlpha = 0.3;
                b.lineWidth = 1;
                for (d = 4; d <= 16; d = d + 3) {
                    b.beginPath();
                    b.moveTo(this.width - 2.5 - d, this.height - 2.5);
                    b.lineTo(this.width - 2.5, this.height - 2.5 - d);
                    b.closePath();
                    b.stroke()
                }
            }
            b.restore();
            return
        }
        b.save();
        if (this.showSelected) {
            b.fillStyle = selectionBgColor;
            b.strokeStyle = selectionStrokeColor
        } else {
            if (window.RenderCode &&
                RenderCode.isCode()) {
                b.fillStyle = g_blockCodeColor[0];
                b.strokeStyle = g_blockCodeColor[2]
            } else {
                b.fillStyle = this.color[0];
                b.strokeStyle = this.color[2]
            }
            b.lineWidth = labelStrokeWidth
        }
        if (this.hilight) {
            b.shadowColor = hilightShadowColor;
            b.shadowBlur = 10;
            b.fillStyle = hilightFillColor
        } else if (this.disabled) {
            b.globalAlpha = disabledBlockAlpha;
            if (disabledFillColor) b.fillStyle = disabledFillColor;
            if (disabledStrokeColor) b.strokeStyle = disabledStrokeColor
        } else if (this.marked && Blocks.showMarked) b.globalAlpha = 0.5;
        b.translate(this.x,
            this.y);
        b.beginPath();
        c = 0;
        if (this.hasFlap) {
            b.moveTo(0, 0);
            b.lineTo(slotBegin, 0);
            b.lineTo(slotBegin, -slotHeight + cornerRadius);
            b.lineTo(slotBegin + cornerRadius, -slotHeight);
            b.lineTo(slotBegin + slotWidth - cornerRadius, -slotHeight);
            b.lineTo(slotBegin + slotWidth, -slotHeight + cornerRadius);
            b.lineTo(slotBegin + slotWidth, 0);
            b.lineTo(this.label.width + labelHorzPadding - cornerRadius, 0);
            b.lineTo(this.label.width + labelHorzPadding, cornerRadius);
            c = c + (this.label.height + labelVertPadding * 2);
            b.lineTo(this.label.width + labelHorzPadding,
                c - cornerRadius);
            b.lineTo(this.label.width + labelHorzPadding - cornerRadius, c)
        } else {
            b.moveTo(cornerRadius, 0);
            b.lineTo(startBlockTopWidth - cornerRadius, 0);
            b.lineTo(startBlockTopWidth, cornerRadius);
            b.lineTo(startBlockTopWidth, startBlockTopHeight);
            b.lineTo(this.label.width, startBlockTopHeight);
            b.arcTo(this.label.width + startBlockRadius, startBlockTopHeight, this.label.width + startBlockRadius, this.label.height + labelVertPadding * 2, startBlockRadius);
            c = c + (this.label.height + labelVertPadding * 2 + startBlockTopHeight);
            b.lineTo(this.label.width + startBlockRadius, c - cornerRadius);
            b.lineTo(this.label.width + startBlockRadius - cornerRadius, c)
        }
        for (d = 0; d < this._containers.length; d++) {
            b.lineTo(containerLeft + slotBegin + slotWidth, c);
            b.lineTo(containerLeft + slotBegin + slotWidth, c - slotHeight + cornerRadius);
            b.lineTo(containerLeft + slotBegin + slotWidth - cornerRadius, c - slotHeight);
            b.lineTo(containerLeft + slotBegin + cornerRadius, c - slotHeight);
            b.lineTo(containerLeft + slotBegin, c - slotHeight + cornerRadius);
            b.lineTo(containerLeft + slotBegin, c);
            b.lineTo(containerLeft,
                c);
            var e = this._containers[d],
                c = e != null ? c + e.totalHeight : c + emptyContainerHeight;
            b.lineTo(containerLeft, c);
            if (this._containers[d] != null) {
                b.lineTo(containerLeft + slotBegin, c);
                b.lineTo(containerLeft + slotBegin, c - slotHeight);
                b.lineTo(containerLeft + slotBegin + slotWidth, c - slotHeight);
                b.lineTo(containerLeft + slotBegin + slotWidth, c)
            }
            if (d < this._containers.length - 1) {
                if (cornerRadius > 0 && d < this._containers.length - 1) {
                    b.lineTo(this._containerLabels[d].width + labelHorzPadding - cornerRadius, c);
                    b.lineTo(this._containerLabels[d].width +
                        labelHorzPadding, c + cornerRadius)
                } else b.lineTo(this._containerLabels[d].width + labelHorzPadding, c);
                c = c + (this._containerLabels[d].height + labelVertPadding * 2);
                if (cornerRadius > 0) {
                    b.lineTo(this._containerLabels[d].width + labelHorzPadding, c - cornerRadius);
                    b.lineTo(this._containerLabels[d].width + labelHorzPadding - 4, c)
                } else b.lineTo(this._containerLabels[d].width + labelHorzPadding, c)
            } else {
                e = this.label.width;
                e = 60;
                if (cornerRadius > 0 && d < this._containers.length - 1) {
                    b.lineTo(e + labelHorzPadding - cornerRadius, c);
                    b.lineTo(e +
                        labelHorzPadding, c + cornerRadius)
                } else b.lineTo(e + labelHorzPadding, c);
                c = window.RenderCode && RenderCode.isCode() && RenderCode.getCodeEndLabel(this) ? c + (defaultLabelFontSize + 6 + labelVertPadding * 2) : c + containerSeparator
            }
        }
        if (this._containers.length > 0) {
            e = 60;
            b.lineTo(e + labelHorzPadding, c - cornerRadius);
            b.lineTo(e + labelHorzPadding - cornerRadius, c)
        }
        if (this.hasSlot)
            if (window.RenderCode && RenderCode.startRequiresClosingBracket(this)) {
                b.lineTo(containerLeft + slotBegin + slotWidth, c);
                b.lineTo(containerLeft + slotBegin + slotWidth,
                    c - slotHeight + cornerRadius);
                b.lineTo(containerLeft + slotBegin + slotWidth - cornerRadius, c - slotHeight);
                b.lineTo(containerLeft + slotBegin + cornerRadius, c - slotHeight);
                b.lineTo(containerLeft + slotBegin, c - slotHeight + cornerRadius);
                b.lineTo(containerLeft + slotBegin, c)
            } else {
                b.lineTo(slotBegin + slotWidth, c);
                b.lineTo(slotBegin + slotWidth, c - slotHeight + cornerRadius);
                b.lineTo(slotBegin + slotWidth - cornerRadius, c - slotHeight);
                b.lineTo(slotBegin + cornerRadius, c - slotHeight);
                b.lineTo(slotBegin, c - slotHeight + cornerRadius);
                b.lineTo(slotBegin,
                    c)
            }
        if (window.RenderCode && RenderCode.startRequiresClosingBracket(this)) {
            e = 60;
            d = containerSeparator;
            RenderCode.getCodeEndLabel(this) && (d = defaultLabelFontSize + 6 + labelVertPadding * 2);
            b.lineTo(containerLeft, c);
            b.lineTo(containerLeft, this.totalHeight - d);
            if (this.next) {
                b.lineTo(containerLeft + slotBegin, this.totalHeight - d);
                b.lineTo(containerLeft + slotBegin, this.totalHeight - d - slotHeight);
                b.lineTo(containerLeft + slotBegin + slotWidth, this.totalHeight - d - slotHeight);
                b.lineTo(containerLeft + slotBegin + slotWidth, this.totalHeight -
                    d)
            }
            b.lineTo(e + labelHorzPadding, this.totalHeight - d);
            b.lineTo(e + labelHorzPadding, this.totalHeight);
            b.lineTo(0, this.totalHeight)
        } else b.lineTo(0, c);
        b.lineTo(0, cornerRadius);
        b.closePath();
        b.fill();
        b.stroke();
        b.restore();
        this.label.draw(b);
        for (d = 0; d < this._containers.length; d++) {
            e = this._containers[d];
            if (d > 0) {
                b.save();
                this._containerLabels[d - 1].draw(b);
                b.restore()
            }
            e != null && e._draw(b)
        }
        if (window.RenderCode && RenderCode.isCode())
            if (this._containers.length > 0) {
                d = RenderCode.getCodeEndLabel(this);
                b.save();
                b.translate(this.x,
                    this.y);
                b.beginPath();
                b.textAlign = "left";
                b.textBaseline = "middle";
                b.strokeStyle = g_defaultStepColor[3];
                b.fillStyle = g_defaultStepColor[3];
                b.font = defaultLabelFontWeight + " " + defaultLabelFontSize + "px " + defaultCodeLabelFont;
                b.fillText(d, labelHorzPadding + labelRadius, c - labelVertPadding - (defaultLabelFontSize + 6) / 2);
                b.restore()
            } else if (RenderCode.startRequiresClosingBracket(this)) {
                d = RenderCode.getCodeEndLabel(this);
                b.save();
                b.translate(this.x, this.y);
                b.beginPath();
                b.textAlign = "left";
                b.textBaseline = "middle";
                b.strokeStyle =
                    g_defaultStepColor[3];
                b.fillStyle = g_defaultStepColor[3];
                b.font = defaultLabelFontWeight + " " + defaultLabelFontSize + "px " + defaultCodeLabelFont;
                b.fillText(d, labelHorzPadding + labelRadius, this.totalHeight - labelVertPadding - (defaultLabelFontSize + 6) / 2);
                b.restore()
            }
    }
    this.next != null && this.next._draw(b)
};
Block.prototype._drawOutline = function (b, c) {
    if (b.translateX + b.offsetX + this.x < b.canvas.width / Blocks._scale && b.translateY + b.offsetY + this.y < b.canvas.height / Blocks._scale && b.translateY + b.offsetY + this.y + this.totalHeight > 0) {
        if (window.WinCode && (!window.WinCode._hilightStep || this.isCurrent)) {
            b.save();
            b.fillStyle = outlineColor;
            b.strokeStyle = outlineColor;
            b.lineWidth = c ? c : outlineWidth;
            b.lineCap = "round";
            b.translate(this.x, this.y);
            b.beginPath();
            var d = 0;
            if (this.hasFlap) {
                b.moveTo(0, 0);
                b.lineTo(slotBegin, 0);
                b.lineTo(slotBegin, -slotHeight + cornerRadius);
                b.lineTo(slotBegin + cornerRadius, -slotHeight);
                b.lineTo(slotBegin + slotWidth - cornerRadius, -slotHeight);
                b.lineTo(slotBegin + slotWidth, -slotHeight + cornerRadius);
                b.lineTo(slotBegin + slotWidth, 0);
                b.lineTo(this.label.width + labelHorzPadding - cornerRadius, 0);
                b.lineTo(this.label.width + labelHorzPadding, cornerRadius);
                d = d + (this.label.height + labelVertPadding * 2);
                b.lineTo(this.label.width + labelHorzPadding, d - cornerRadius);
                b.lineTo(this.label.width + labelHorzPadding - cornerRadius, d)
            } else {
                b.moveTo(cornerRadius,
                    0);
                b.lineTo(startBlockTopWidth - cornerRadius, 0);
                b.lineTo(startBlockTopWidth, cornerRadius);
                b.lineTo(startBlockTopWidth, startBlockTopHeight);
                b.lineTo(this.label.width, startBlockTopHeight);
                b.arcTo(this.label.width + startBlockRadius, startBlockTopHeight, this.label.width + startBlockRadius, this.label.height + labelVertPadding * 2, startBlockRadius);
                d = d + (this.label.height + labelVertPadding * 2 + startBlockTopHeight);
                b.lineTo(this.label.width + startBlockRadius, d - cornerRadius);
                b.lineTo(this.label.width + startBlockRadius -
                    cornerRadius, d)
            }
            for (var e = 0; e < this._containers.length; e++) {
                b.lineTo(containerLeft + slotBegin + slotWidth, d);
                b.lineTo(containerLeft + slotBegin + slotWidth, d - slotHeight + cornerRadius);
                b.lineTo(containerLeft + slotBegin + slotWidth - cornerRadius, d - slotHeight);
                b.lineTo(containerLeft + slotBegin + cornerRadius, d - slotHeight);
                b.lineTo(containerLeft + slotBegin, d - slotHeight + cornerRadius);
                b.lineTo(containerLeft + slotBegin, d);
                b.lineTo(containerLeft, d);
                var f = this._containers[e],
                    d = f != null ? d + f.totalHeight : d + emptyContainerHeight;
                b.lineTo(containerLeft, d);
                if (this._containers[e] != null) {
                    b.lineTo(containerLeft + slotBegin, d);
                    b.lineTo(containerLeft + slotBegin, d - slotHeight);
                    b.lineTo(containerLeft + slotBegin + slotWidth, d - slotHeight);
                    b.lineTo(containerLeft + slotBegin + slotWidth, d)
                }
                if (e < this._containers.length - 1) {
                    if (cornerRadius > 0 && e < this._containers.length - 1) {
                        b.lineTo(this._containerLabels[e].width + labelHorzPadding - cornerRadius, d);
                        b.lineTo(this._containerLabels[e].width + labelHorzPadding, d + cornerRadius)
                    } else b.lineTo(this._containerLabels[e].width +
                        labelHorzPadding, d);
                    d = d + this._containerLabels[e].height;
                    if (cornerRadius > 0) {
                        b.lineTo(this._containerLabels[e].width + labelHorzPadding, d - cornerRadius);
                        b.lineTo(this._containerLabels[e].width + labelHorzPadding - 4, d)
                    } else b.lineTo(this._containerLabels[e].width + labelHorzPadding, d)
                } else {
                    f = this.label.width;
                    f = 60;
                    if (cornerRadius > 0 && e < this._containers.length - 1) {
                        b.lineTo(f + labelHorzPadding - cornerRadius, d);
                        b.lineTo(f + labelHorzPadding, d + cornerRadius)
                    } else b.lineTo(f + labelHorzPadding, d);
                    d = window.RenderCode && RenderCode.isCode() &&
                        RenderCode.getCodeEndLabel(this) ? d + (defaultLabelFontSize + 6 + labelVertPadding * 2) : d + containerSeparator
                }
            }
            if (this._containers.length > 0) {
                f = 60;
                b.lineTo(f + labelHorzPadding, d - cornerRadius);
                b.lineTo(f + labelHorzPadding - cornerRadius, d)
            }
            if (this.hasSlot)
                if (window.RenderCode && RenderCode.startRequiresClosingBracket(this)) {
                    b.lineTo(containerLeft + slotBegin + slotWidth, d);
                    b.lineTo(containerLeft + slotBegin + slotWidth, d - slotHeight + cornerRadius);
                    b.lineTo(containerLeft + slotBegin + slotWidth - cornerRadius, d - slotHeight);
                    b.lineTo(containerLeft +
                        slotBegin + cornerRadius, d - slotHeight);
                    b.lineTo(containerLeft + slotBegin, d - slotHeight + cornerRadius);
                    b.lineTo(containerLeft + slotBegin, d)
                } else {
                    b.lineTo(slotBegin + slotWidth, d);
                    b.lineTo(slotBegin + slotWidth, d - slotHeight + cornerRadius);
                    b.lineTo(slotBegin + slotWidth - cornerRadius, d - slotHeight);
                    b.lineTo(slotBegin + cornerRadius, d - slotHeight);
                    b.lineTo(slotBegin, d - slotHeight + cornerRadius);
                    b.lineTo(slotBegin, d)
                }
            if (window.RenderCode && RenderCode.startRequiresClosingBracket(this)) {
                f = 60;
                e = containerSeparator;
                RenderCode.getCodeEndLabel(this) &&
                    (e = defaultLabelFontSize + 6 + labelVertPadding * 2);
                b.lineTo(containerLeft, d);
                b.lineTo(containerLeft, this.totalHeight - e);
                b.lineTo(f + labelHorzPadding, this.totalHeight - e);
                if (this.next) {
                    b.lineTo(containerLeft + slotBegin, this.totalHeight - e);
                    b.lineTo(containerLeft + slotBegin, this.totalHeight - e - slotHeight);
                    b.lineTo(containerLeft + slotBegin + slotWidth, this.totalHeight - e - slotHeight);
                    b.lineTo(containerLeft + slotBegin + slotWidth, this.totalHeight - e)
                }
                b.lineTo(f + labelHorzPadding, this.totalHeight - e);
                b.lineTo(f + labelHorzPadding,
                    this.totalHeight);
                b.lineTo(0, this.totalHeight)
            } else b.lineTo(0, d);
            b.lineTo(0, cornerRadius);
            b.closePath();
            b.stroke();
            b.restore()
        }
        for (e = 0; e < this._containers.length; e++) {
            f = this._containers[e];
            f != null && f._drawOutline(b, c)
        }
    }
    this.next != null && this.next._drawOutline(b, c)
};