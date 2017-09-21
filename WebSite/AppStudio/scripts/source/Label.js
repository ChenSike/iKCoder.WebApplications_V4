function Label(b) {
    this.cat = b.cat !== void 0 ? b.cat : "flow";
    this.func = b.func !== void 0 ? b.func : "nop";
    this.id = b.id !== void 0 ? b.id : 0;
    this.watchable = b.watchable !== void 0 ? b.watchable : false;
    this.watching = b.watching !== void 0 ? b.watching : false;
    if (b.value) this.value = b.value;
    this.draggable = b.draggable !== void 0 ? b.draggable : true;
    this.hidden = b.hidden !== void 0 ? b.hidden : false;
    this.parent = null;
    this._children = [];
    this.hilight = false;
    this.marked = b.marked !== void 0 ? b.marked : false;
    this.color = g_catColor[b.cat] !== void 0 ? g_catColor[b.cat] :
        g_defaultStepColor;
    if (b.note) this.note = b.note;
    this.height = this.width = this.y = this.x = 0;
    var c;
    if (b.name) {
        this.name = b.name;
        this.func == "valueControlCall" || this.func == "valueControlCallLibrary" ? this.label = c = b.label ? b.label : b.name ? b.name : "" : c = b.name
    } else c = b.label !== void 0 ? b.label : "";
    this.labelText = c;
    window.RenderCode && this.func && (c = RenderCode.getCodeStartLabel(this));
    var d, b = [];
    do {
        d = Blocks.revLabel.exec(c);
        d != null && (d[1] == "choice:" ? d[3] ? b.push(["choice", d[2], d[3]]) : b.push(["choice", d[2], null]) : d[3] ? b.push([d[2],
            d[3]
        ]) : d[2] == "boolean" ? b.push([d[2], "false"]) : d[2] == "number" ? b.push([d[2], "0"]) : d[2] == "color" ? d[3] ? b.push([d[2], d[3]]) : b.push([d[2], ""]) : b.push([d[2], ""]))
    } while (d != null);
    d = g_defaultStepColor[3];
    c = c.split(Blocks.reLabel);
    for (var e = 0; e < c.length; e++) {
        if (c[e].length > 0) {
            var f = c[e],
                g = f.indexOf("\n");
            if (g === 0)
                if (f.length > 1) {
                    this.add(new LabelBreak);
                    this.add(new LabelText({
                        label: f.substring(1),
                        color: d
                    }))
                } else this.add(new LabelBreak);
            else if (g > 0) {
                this.add(new LabelText({
                    label: f.substring(0, g),
                    color: d
                }));
                this.add(new LabelBreak);
                this.add(new LabelText({
                    label: f.substring(g + 1),
                    color: d
                }))
            } else this.add(new LabelText({
                label: f,
                color: d
            }));
            d = g_defaultStepColor[3]
        }
        if (e < c.length - 1) {
            f = b[e];
            if (f[0] == "varargs") {
                this.add(new LabelButton({
                    label: buttonRemoveLabel,
                    func: f[1],
                    callback: "removeInput"
                }));
                this.add(new LabelButton({
                    label: buttonAddLabel,
                    func: f[1],
                    callback: "addInput"
                }))
            } else if (f[0] == "button") this.add(new LabelButton({
                label: f[1],
                callback: "callback_" + f[1]
            }));
            else if (f[0] == "image") this.add(new LabelImg({
                label: f[1]
            }));
            else if (f[0] == "choice") {
                var h = f[1],
                    g = g_choice_lists[f[1]];
                f[2] ? h = f[2] : g && (h = g[0]);
                this.add(new LabelInput({
                    type: "choice",
                    choices: g,
                    label: h
                }))
            } else if (f[0] == "where") this.add(new LabelInput({
                type: "where",
                choices: ["mouse-pointer", "edge", "left edge", "right edge", "top edge", "bottom edge", "any", "self"],
                label: f[1] ? f[1] : "mouse-pointer"
            }));
            else if (f[0] == "actor") this.add(new LabelInput({
                type: "actor",
                choices: ["self", "any", "stage"],
                label: f[1] ? f[1] : "any"
            }));
            else if (f[0] == "actortiles") this.add(new LabelInput({
                type: "actortiles",
                choices: ["self", "any", "stage"],
                label: f[1] ? f[1] : "self"
            }));
            else if (f[0] == "tiles") this.add(new LabelInput({
                type: "tiles",
                choices: ["empty"],
                label: f[1] ? f[1] : "empty"
            }));
            else if (f[0] == "whereall") this.add(new LabelInput({
                type: "whereall",
                choices: ["mouse-pointer", "edge", "left edge", "right edge", "top edge", "bottom edge", "any", "self"],
                label: f[1] ? f[1] : "mouse-pointer"
            }));
            else if (f[0] == "stageproperty") this.add(new LabelInput({
                type: "stageproperty",
                choices: g_choice_lists.stageproperty,
                label: f[1] ? f[1] : "width"
            }));
            else if (f[0] ==
                "method") this.add(new LabelInput({
                    type: "method",
                    choices: [],
                    label: f[1]
                }));
            else if (f[0] == "level") this.add(new LabelInput({
                type: "level",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "scenes") this.add(new LabelInput({
                type: "scenes",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "costumes") this.add(new LabelInput({
                type: "costumes",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "sounds") this.add(new LabelInput({
                type: "sounds",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "properties") this.add(new LabelInput({
                type: "properties",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "variables") this.add(new LabelInput({
                type: "variables",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "lists") this.add(new LabelInput({
                type: "lists",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "events") this.add(new LabelInput({
                type: "events",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "charparts") this.add(new LabelInput({
                type: "charparts",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "charskins") this.add(new LabelInput({
                type: "charskins",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "animations") this.add(new LabelInput({
                type: "animations",
                choices: [],
                label: f[1]
            }));
            else if (f[0] == "param") {
                g = new LabelInput({
                    type: "string",
                    label: f[1]
                });
                g._child = new Label({
                    cat: "functions",
                    name: f[1],
                    value: "string",
                    func: "valueParam"
                });
                g._child.parent = g;
                this.add(g)
            } else if (f[0] == "scriptvar") {
                g = new LabelInput({
                    type: "string",
                    label: f[1]
                });
                g._child = new Label({
                    cat: "localvar",
                    name: f[1],
                    value: "string",
                    func: "valueScriptVar"
                });
                g._child.parent = g;
                this.add(g)
            } else if (f[0] == "color") f[1] == "reset" ? d = g_defaultStepColor[3] : Blocks.reHexColor.test(f[1]) ? d = "#" + f[1] : g_choice_lists.color ?
                this.add(new LabelInput({
                    type: "choice",
                    choices: g_choice_lists.color,
                    label: h
                })) : f[1] ? this.add(new LabelInput({
                    type: f[0],
                    label: f[1]
                })) : this.add(new LabelInput({
                    type: f[0],
                    label: "#ffffff"
                }));
            else if (g_choice_lists[f[0]]) {
                g = g_choice_lists[f[0]];
                this.add(new LabelInput({
                    type: "custom",
                    choices: g,
                    label: f[1]
                }))
            } else if (f[0] == "choice") {
                h = f[1];
                g = g_choice_lists[h];
                f[2] ? h = f[2] : g && (h = g[0]);
                this.add(new LabelInput({
                    type: "choice",
                    choices: g,
                    label: h
                }))
            } else this.add(new LabelInput({
                type: f[0],
                label: f[1]
            }))
        }
    }
}
Label.prototype.reRender = function () {
    var b = ObjectIO.genValueObj(this),
        b = ObjectIO.deserializeScriptStep(b);
    this.cat = b.cat;
    this.func = b.func;
    this.watchable = b.watchable;
    this.watching = b.watching;
    if (b.value) this.value = b.value;
    this.draggable = b.draggable;
    this.hidden = b.hidden;
    this._children = b._children;
    for (var c = 0; c < this._children.length; c++) this._children[c].parent = this;
    this.hilight = b.hilight;
    this.marked = b.marked;
    this.color = b.color;
    if (b.note) this.note = b.note;
    this.labelText = b.labelText;
    this._computeBlockBounds()
};
Label.prototype.convertToBlock = function () {
    var b = new Block({
        cat: this.cat,
        func: this.func,
        id: this.id,
        name: this.name,
        hasFlap: true,
        hasSlot: true,
        marked: this.marked
    });
    b.label = this.copy();
    b.labelText = this.labelText;
    b.label.parent = b;
    b.label.draggable = false;
    return b
};
Label.prototype.setHeight = function (b) {
    this.height = b
};
Label.prototype.addArg = function () {
    for (var b = 0; b < this._children.length; b++)
        if (this._children[b] instanceof LabelButton && this._children[b].label == buttonAddLabel) {
            this.addInput(this._children[b]);
            break
        }
};
Label.prototype.removeArg = function () {
    for (var b = 0; b < this._children.length; b++)
        if (this._children[b] instanceof LabelButton && this._children[b].label == buttonRemoveLabel) {
            this.removeInput(this._children[b]);
            break
        }
};
Label.prototype.removeInput = function (b) {
    for (var c = -1, d = this._children.length - 1; d >= 0; d--)
        if (this._children[d] == b) {
            c = d;
            break
        }
    if (c > 0) {
        c--;
        if (this._children[c] instanceof LabelInput) {
            this.remove(c);
            this.getRoot()._computeBlockBounds();
            window.WinCode && WinCode.draw()
        }
    }
};
Label.prototype.addInput = function (b) {
    for (var c = -1, d = this._children.length - 1; d >= 0; d--)
        if (this._children[d] == b) {
            c = d;
            break
        }
    if (c >= 0) {
        c--;
        c < 0 && (c = 0);
        d = null;
        if (b.func)
            if (b.func == "valueScriptVar") {
                d = new LabelInput({
                    type: "string"
                });
                d._child = new Label({
                    cat: "localvar",
                    name: "var",
                    value: "var",
                    func: "valueScriptVar"
                });
                d._child.parent = d
            } else d = b.func == "actor" ? new LabelInput({
                type: "actor",
                choices: ["self", "all"],
                label: "actor"
            }) : new LabelInput({
                type: "string"
            });
        else d = new LabelInput({
            type: "string"
        });
        this.add(d, c);
        this.getRoot()._computeBlockBounds();
        window.WinCode && WinCode.draw()
    }
};
Label.prototype.callback_edit = function () {
    var b = this.getSocketAtChild(0);
    WinExpressions.show(b.label, function (c, d) {
        if (b._child) b._child.parent = null;
        b._child = d;
        b.label = c;
        d.hidden = true;
        d.parent = b
    })
};
Label.prototype.callback_editfn = function () {
    window.WinTools && WinTools.cmdEditFunction(this.parent)
};
Label.prototype.callback_add = function () {
    var b = this.parent;
    b._containers.splice(b._containers.length - 1, 0, null);
    var c = window.RenderCode ? RenderCode.getElseIfLabel(this) : "else if {boolean} then {button:remove}",
        c = new Label({
            label: c,
            cat: this.cat
        });
    c.parent = b;
    c.draggable = false;
    b._containerLabels.splice(b._containerLabels.length - 1, 0, c);
    this.getRoot()._computeBounds()
};
Label.prototype.callback_remove = function () {
    for (var b = this.parent, c = -1, d = 0; d < b._containerLabels.length; d++)
        if (b._containerLabels[d] == this) {
            c = d;
            break
        }
    if (c >= 0) {
        b._containers.splice(c + 1, 1);
        b._containerLabels.splice(c, 1)
    }
    this.getRoot()._computeBounds()
};
Label.prototype.setDisabled = function (b) {
    this.disabled = b;
    for (var c = 0; c < this._children.length; c++) this._children[c].setDisabled(b)
};
Label.prototype.selectInBounds = function (b, c, d, e) {
    this.showSelected = !(b > this.x + this.width || b + d < this.x || c > this.y + this.height || c + e < this.y)
};
Label.prototype.setSelected = function (b, c) {
    this.showSelected = b;
    for (var d = 0; d < this._children.length; d++) this._children[d].setSelected(b, c)
};
Label.prototype.setOutline = function (b) {
    this.showOutline = b;
    for (var c = 0; c < this._children.length; c++) this._children[c].setOutline(b)
};
Label.prototype.copy = function () {
    var b = new Label({
        cat: this.cat,
        watchable: this.watchable,
        watching: this.watching,
        func: this.func,
        name: this.name,
        label: this.label,
        value: this.value,
        draggable: this.draggable,
        color: this.color
    });
    b.x = this.x;
    b.y = this.y;
    b.width = this.width;
    b.height = this.height;
    b.labelText = this.labelText;
    if (this.marked) b.marked = true;
    if (this.locked) b.locked = true;
    if (this.tags && this.tags.length > 0) {
        b.tags = [];
        for (var c = 0; c < this.tags.length; c++) b.tags.push(this.tags[c])
    }
    for (c = 0; c < this._children.length; c++) {
        b._children[c] =
            this._children[c].copy();
        b._children[c].parent = b
    }
    return b
};
Label.prototype.getImage = function (b, c) {
    c || (c = 1);
    this._computeBounds();
    var d = $('<canvas style="display:none;position:absolute;left:0px;top:0px;z-index:100000;" width="' + (this.width + 1) * c + '" height="' + (this.height + 1) * c + '"></canvas>'),
        e = d[0].getContext("2d");
    e.translateX = 0;
    e.translateY = 0;
    e.offsetX = 0;
    e.offsetY = 0;
    e.translate(0.5, 0.5);
    e.scale(c, c);
    this.draw(e);
    var e = d[0].toDataURL(),
        f = new Image;
    if (b) f.onload = function () {
        b(f)
    };
    f.src = e;
    d.detach();
    return f
};
Label.prototype.add = function (b, c) {
    c === void 0 || this._children.length == 0 ? this._children.push(b) : c <= this._children.length ? this._children.splice(c, 0, b) : this._children.push(b);
    b.parent = this;
    this.getRoot()._computeBlockBounds()
};
Label.prototype.remove = function (b) {
    b === void 0 ? this._children.pop() : b >= 0 && b < this._children.length && this._children.splice(b, 1)
};
Label.prototype.setValue = function (b, c) {
    for (var d = 0, e = 0; e < this._children.length; e++)
        if (this._children[e] instanceof LabelInput) {
            if (b == d) {
                if (c instanceof Label) {
                    this._children[e]._child = c;
                    c.parent = this._children[e];
                    if (c.hidden && c.text) this._children[e].label = c.text
                } else if (this._children[e].type != "object") this._children[e].label = c;
                this.getRoot()._computeBounds();
                break
            }
            d++
        }
};
Label.prototype.ensureSockets = function (b) {
    for (var c = -1, d = 0, e = 0; e < this._children.length; e++) this._children[e] instanceof LabelInput ? d++ : this._children[e] instanceof LabelButton && c < 0 && (c = e);
    if (b > d && c >= 0)
        for (e = 0; e < b - d; e++) {
            var f = new LabelInput({});
            f.parent = this;
            this._children.splice(c, 0, f)
        }
    return d
};
Label.prototype.getSockets = function () {
    for (var b = [], c = 0; c < this._children.length; c++) this._children[c] instanceof LabelInput && b.push(this._children[c]);
    return b
};
Label.prototype.getNumSockets = function () {
    for (var b = 0, c = 0; c < this._children.length; c++) this._children[c] instanceof LabelInput && b++;
    return b
};
Label.prototype.getSocketAtChild = function (b) {
    for (var c = 0, d = 0; d < this._children.length; d++)
        if (this._children[d] instanceof LabelInput) {
            if (b == c) return this._children[d];
            c++
        }
    return null
};
Label.prototype.indexForBlockInChildren = function (b) {
    for (var c = 0, d = 0; d < this._children.length; d++)
        if (this._children[d] instanceof LabelInput) {
            if (this._children[d] == b || this._children[d]._child == b) return c;
            c++
        }
    return -1
};
Label.prototype.detach = function () {
    if (this.parent != null) {
        if (this.parent._child == this) this.parent._child = null;
        else
            for (var b = this.parent._children, c = 0; c < b.length; c++)
                if (b[c] == this) {
                    b.splice(c, 1);
                    break
                }
        b = this.parent;
        this.parent = null;
        b._computeBounds()
    }
};
Label.prototype.detachSelected = function () {
    if (this.showSelected) {
        this.showSelected = false;
        var b = this.parent;
        if (b != null && b instanceof LabelInput) {
            for (var b = b.parent, c = 0; c < b._children.length; c++)
                if (b._children[c] instanceof LabelInput && b._children[c]._child == this) {
                    b._children[c].child = null;
                    break
                }
            this.parent = null;
            b._computeBounds()
        }
        this.setSelected(false, true)
    }
};
Label.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
Label.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
Label.prototype._computeBlockBounds = function () {
    for (var b = 0, c = labelHorzPadding, d = c, e = labelVertPadding, f = 0, g = 0; g < this._children.length; g++) {
        var h = this._children[g];
        h.x = this.x + labelRadius + c;
        h.y = this.y + e;
        h._computeBlockBounds();
        if (h.width < 0) {
            c = labelHorzPadding;
            for (e = e + (b + labelVertPadding) ; f < g; f++) {
                h = this._children[f];
                h.setHeight(b)
            }
            b = 0;
            f = g + 1
        } else {
            c = c + h.width;
            if (h.height > b) b = h.height
        }
        c > d && (d = c)
    }
    if (f >= 0 && f < this._children.length)
        for (; f < g; f++) {
            h = this._children[f];
            h.setHeight(b)
        }
    b = e + b + labelBottomPadding;
    this.width =
        d + labelRadius * 2;
    this.setHeight(b);
    if (this.parent instanceof Block) {
        if (this.width < minLabelWidth) this.width = minLabelWidth;
        this.height < minLabelHeight && this.setHeight(minLabelHeight)
    }
};
Label.prototype.getMaxWidth = function () {
    return this.width
};
Label.prototype.getChildAtPoint = function (b, c) {
    if (this.locked) return null;
    if (b >= this.x && b <= this.x + this.width && c >= this.y & c <= this.y + this.height) {
        for (var d = 0; d < this._children.length; d++) {
            var e = this._children[d].getChildAtPoint(b, c);
            if (e != null) return e
        }
        return this
    }
    return null
};
Label.prototype.getInputAtPoint = function (b, c) {
    if (b >= this.x && b <= this.x + this.width && c >= this.y & c <= this.y + this.height)
        for (var d = 0; d < this._children.length; d++) {
            var e = this._children[d].getInputAtPoint(b, c);
            if (e != null) return e
        }
    return null
};
Label.prototype.nearValue = function (b, c) {
    if (this._children.length > 0)
        for (var d = 0; d < this._children.length; d++) {
            var e = this._children[d].nearValue(b, c);
            if (e) return e
        }
    return null
};
Label.prototype.objNearValue = function (b) {
    if (this._children.length > 0)
        for (var c = 0; c < this._children.length; c++) {
            var d = this._children[c].objNearValue(b);
            if (d) return d
        }
    return null
};
Label.prototype.getContainerPos = function (b) {
    for (var c = 0, d = 0; d < this._children.length; d++)
        if (this._children[d] instanceof LabelInput) {
            if (b == c) {
                b = this._children[d];
                return [b.x + b.width / 2, b.y + b.height / 2]
            }
            c++
        }
    return null
};
Label.prototype.draw = function (b) {
    this.showOutline && this._drawOutline(b);
    this._draw(b)
};
Label.prototype._draw = function (b) {
    if (this.draggable) {
        b.save();
        b.lineWidth = labelStrokeWidth;
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
        if (this.hilight) {
            b.shadowColor = hilightShadowColor;
            b.shadowBlur = 20;
            b.fillStyle = hilightFillColor
        } else if (this.disabled) {
            b.globalAlpha = disabledLabelAlpha;
            if (disabledFillColor) b.fillStyle = disabledFillColor;
            if (disabledStrokeColor) b.strokeStyle = disabledStrokeColor
        } else if (this.marked && Blocks.showMarked) b.globalAlpha = 0.5;
        b.translate(this.x, this.y);
        if (this.value == "boolean") {
            b.beginPath();
            b.moveTo(0, this.height / 2);
            b.lineTo(this.height / 4, this.height);
            b.lineTo(this.height / 4, this.height);
            b.lineTo(this.width - this.height / 4, this.height);
            b.lineTo(this.width, this.height / 2);
            b.lineTo(this.width - this.height / 4, 0);
            b.lineTo(this.height / 4, 0)
        } else if (this.type == "object") {
            b.fillStyle =
                "rgba(255, 255, 255, 0.6)";
            b.beginPath();
            b.moveTo(0, labelAnyRadius);
            b.arcTo(0, 0, labelAnyRadius, 0, labelAnyRadius);
            b.lineTo(width - labelAnyRadius, 0);
            b.arcTo(width, 0, width, labelAnyRadius, labelAnyRadius);
            b.lineTo(width, height - labelAnyRadius);
            b.arcTo(width, height, width - labelAnyRadius, height, labelAnyRadius);
            b.lineTo(labelAnyRadius, height);
            b.arcTo(0, height, 0, height - labelAnyRadius, labelAnyRadius)
        } else if (this.value == "number") {
            var c = this.height / 2;
            b.beginPath();
            b.moveTo(0, c);
            b.arcTo(0, 0, c, 0, c);
            b.lineTo(this.width -
                c, 0);
            b.arcTo(this.width, 0, this.width, c, c);
            b.lineTo(this.width, this.height - c);
            b.arcTo(this.width, this.height, this.width - c, this.height, c);
            b.lineTo(c, this.height);
            b.arcTo(0, this.height, 0, this.height - c, c)
        } else {
            b.beginPath();
            b.moveTo(0, labelRadius);
            b.arcTo(0, 0, labelRadius, 0, labelRadius);
            b.lineTo(this.width - labelRadius, 0);
            b.arcTo(this.width, 0, this.width, labelRadius, labelRadius);
            b.lineTo(this.width, this.height - labelRadius);
            b.arcTo(this.width, this.height, this.width - labelRadius, this.height, labelRadius);
            b.lineTo(labelRadius,
                this.height);
            b.arcTo(0, this.height, 0, this.height - labelRadius, labelRadius)
        }
        b.closePath();
        b.fill();
        b.stroke();
        b.restore()
    }
    for (c = 0; c < this._children.length; c++) this._children[c]._draw(b);
    if (this.showDragHandle || this.parent && this.parent.showDragHandle) {
        b.save();
        b.translate(this.x, this.y);
        b.strokeStyle = "#555";
        b.globalAlpha = 0.3;
        b.lineWidth = 1;
        for (c = 7.5; c < slotBegin + slotWidth; c = c + 3) {
            b.beginPath();
            b.moveTo(c, 1);
            b.lineTo(c, this.height - slotHeight - 2);
            b.closePath();
            b.stroke()
        }
        b.restore()
    }
};
Label.prototype._drawOutline = function (b) {
    if (this.draggable) {
        b.save();
        b.fillStyle = outlineColor;
        b.strokeStyle = outlineColor;
        b.lineWidth = outlineWidth;
        b.lineCap = "round";
        b.translate(this.x, this.y);
        b.beginPath();
        b.moveTo(0, labelRadius);
        b.arcTo(0, 0, labelRadius, 0, labelRadius);
        b.lineTo(this.width - labelRadius, 0);
        b.arcTo(this.width, 0, this.width, labelRadius, labelRadius);
        b.lineTo(this.width, this.height - labelRadius);
        b.arcTo(this.width, this.height, this.width - labelRadius, this.height, labelRadius);
        b.lineTo(labelRadius,
            this.height);
        b.arcTo(0, this.height, 0, this.height - labelRadius, labelRadius);
        b.closePath();
        b.stroke();
        b.restore()
    }
};

function LabelText(b) {
    this.parent = null;
    this.label = b.label !== void 0 ? b.label : null;
    this.fontSize = b.fontSize !== void 0 ? b.fontSize : defaultLabelFontSize;
    this.color = b.color !== void 0 ? b.color : g_defaultStepColor[3];
    this.height = this.width = this.y = this.x = 0
}
LabelText.prototype.setHeight = function (b) {
    this.height = b
};
LabelText.prototype.getMaxWidth = function () {
    return this.width
};
LabelText.prototype.setDisabled = function (b) {
    this.disabled = b
};
LabelText.prototype.setSelected = function (b) {
    this.showSelected = b
};
LabelText.prototype.setOutline = function (b) {
    this.showOutline = b
};
LabelText.prototype.copy = function () {
    return new LabelText({
        label: this.label,
        fontSize: this.fontSize,
        color: this.color
    })
};
LabelText.prototype.setText = function (b) {
    this.label = b;
    this._computeBlockBounds()
};
LabelText.prototype.getText = function () {
    return this.label
};
LabelText.prototype.detach = function () {
    if (label.parent != null) {
        for (var b = label.parent._children, c = 0; c < b.length; c++)
            if (b[c] == this) {
                b.splice(c, 1);
                break
            }
        label.parent = null
    }
};
LabelText.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
LabelText.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
LabelText.prototype._computeBlockBounds = function () {
    this.width = (window.RenderCode && RenderCode.isCode() ? Blocks.measureText(this.label, defaultCodeLabelFont) : Blocks.measureText(this.label)).width;
    this.height = this.fontSize + 6
};
LabelText.prototype.getChildAtPoint = function () {
    return null
};
LabelText.prototype.getInputAtPoint = function () {
    return null
};
LabelText.prototype.nearValue = function () {
    return null
};
LabelText.prototype.objNearValue = function () {
    return null
};
LabelText.prototype.draw = function (b) {
    this._draw(b)
};
LabelText.prototype._draw = function (b) {
    b.save();
    b.textAlign = "left";
    b.textBaseline = "middle";
    b.font = window.RenderCode && RenderCode.isCode() ? defaultLabelFontWeight + " " + this.fontSize + "px " + defaultCodeLabelFont : defaultLabelFontWeight + " " + this.fontSize + "px " + defaultLabelFont;
    if (this.disabled) {
        b.globalAlpha = disabledBlockAlpha;
        if (disabledStrokeColor) b.fillStyle = b.strokeStyle = disabledStrokeColor
    } else if (this.showSelected) {
        b.fillStyle = selectionTextColor;
        b.strokeStyle = selectionTextColor
    } else {
        b.strokeStyle = this.color;
        b.fillStyle = this.color
    }
    b.fillText(this.label, this.x, this.y + this.height / 2);
    b.restore()
};

function LabelBreak() {
    this.parent = null;
    this.y = this.x = 0;
    this.height = this.width = -1
}
LabelBreak.prototype.setHeight = function (b) {
    this.height = b
};
LabelBreak.prototype.getMaxWidth = function () {
    return this.width
};
LabelBreak.prototype.setDisabled = function (b) {
    this.disabled = b
};
LabelBreak.prototype.setSelected = function (b) {
    this.showSelected = b
};
LabelBreak.prototype.setOutline = function (b) {
    this.showOutline = b
};
LabelBreak.prototype.copy = function () {
    return new LabelBreak
};
LabelBreak.prototype.setText = function (b) {
    this.label = b;
    this._computeBlockBounds()
};
LabelBreak.prototype.getText = function () {
    return this.label
};
LabelBreak.prototype.detach = function () {
    if (label.parent != null) {
        for (var b = label.parent._children, c = 0; c < b.length; c++)
            if (b[c] == this) {
                b.splice(c, 1);
                break
            }
        label.parent = null
    }
};
LabelBreak.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
LabelBreak.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
LabelBreak.prototype._computeBlockBounds = function () { };
LabelBreak.prototype.getChildAtPoint = function () {
    return null
};
LabelBreak.prototype.getInputAtPoint = function () {
    return null
};
LabelBreak.prototype.nearValue = function () {
    return null
};
LabelBreak.prototype.objNearValue = function () {
    return null
};
LabelBreak.prototype.draw = function (b) {
    this._draw(b)
};
LabelBreak.prototype._draw = function () { };

function LabelImg(b) {
    this.parent = null;
    this.label = b.label !== void 0 ? b.label : null;
    this.img = Blocks.getImage(this.label);
    this.height = this.width = this.y = this.x = 0
}
LabelImg.prototype.setHeight = function (b) {
    this.height = b
};
LabelImg.prototype.getMaxWidth = function () {
    return this.width
};
LabelImg.prototype.setDisabled = function (b) {
    this.disabled = b
};
LabelImg.prototype.setSelected = function (b) {
    this.showSelected = b
};
LabelImg.prototype.setOutline = function (b) {
    this.showOutline = b
};
LabelImg.prototype.copy = function () {
    return new LabelImg({
        label: this.label
    })
};
LabelImg.prototype.detach = function () {
    if (label.parent != null) {
        for (var b = label.parent._children, c = 0; c < b.length; c++)
            if (b[c] == this) {
                b.splice(c, 1);
                break
            }
        label.parent = null
    }
};
LabelImg.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
LabelImg.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
LabelImg.prototype._computeBlockBounds = function () {
    this.imgWidth = this.width = this.img.width * 16 / this.img.height;
    this.imgHeight = this.height = 16
};
LabelImg.prototype.getChildAtPoint = function () {
    return null
};
LabelImg.prototype.getInputAtPoint = function () {
    return null
};
LabelImg.prototype.nearValue = function () {
    return null
};
LabelImg.prototype.objNearValue = function () {
    return null
};
LabelImg.prototype.draw = function (b) {
    this._draw(b)
};
LabelImg.prototype._draw = function (b) {
    this.img && this.img.ready && b.drawImage(this.img, this.x + (this.width - this.imgWidth) / 2, this.y + (this.height - this.imgHeight) / 2, this.imgWidth, this.imgHeight)
};

function LabelButton(b) {
    this.parent = null;
    this.img = b.img !== void 0 ? b.img : null;
    this.label = b.label !== void 0 ? b.label : null;
    if (this.label == "add" || this.label == buttonAddLabel) {
        this.label = buttonAddLabel;
        this.img = Blocks.getImage("ide/imgs/button-add.png")
    } else if (this.label == "remove" || this.label == buttonRemoveLabel) {
        this.label = buttonRemoveLabel;
        this.img = Blocks.getImage("ide/imgs/button-remove.png")
    } else if (this.label == "edit" || this.label == "editfn") {
        this.label = buttonEditLabel;
        this.img = Blocks.getImage("ide/imgs/button-edit.png")
    }
    this.color =
        b.color !== void 0 ? b.color : g_defaultStepColor;
    this.fontSize = b.fontSize !== void 0 ? b.fontSize : defaultLabelFontSize;
    this.color = b.color !== void 0 ? b.color : g_defaultStepColor;
    this.func = b.func !== void 0 ? b.func : null;
    this.callback = b.callback !== void 0 ? b.callback : null;
    this.height = this.width = this.y = this.x = 0
}
LabelButton.prototype.setHeight = function (b) {
    this.height = b
};
LabelButton.prototype.getMaxWidth = function () {
    return this.width
};
LabelButton.prototype.setDisabled = function (b) {
    this.disabled = b
};
LabelButton.prototype.setSelected = function (b) {
    this.showSelected = b
};
LabelButton.prototype.setOutline = function (b) {
    this.showOutline = b
};
LabelButton.prototype.copy = function () {
    return new LabelButton({
        label: this.label,
        img: this.img,
        fontSize: this.fontSize,
        color: this.color,
        func: this.func,
        callback: this.callback
    })
};
LabelButton.prototype.setText = function (b) {
    this.label = b;
    this._computeBlockBounds()
};
LabelButton.prototype.getText = function () {
    return this.label
};
LabelButton.prototype.detach = function () {
    if (label.parent != null) {
        for (var b = label.parent._children, c = 0; c < b.length; c++)
            if (b[c] == this) {
                b.splice(c, 1);
                break
            }
        label.parent = null
    }
};
LabelButton.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
LabelButton.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
LabelButton.prototype._computeBlockBounds = function () {
    if (this.img) {
        this.imgWidth = this.width = this.img.width * 16 / this.img.height;
        this.imgHeight = this.height = 16
    } else if (this.label == buttonAddLabel || this.label == buttonRemoveLabel) this.width = 24;
    else {
        this.width = Blocks.measureText(this.label).width + labelRadius * 2;
        if (this.width < 10) this.width = 10
    }
    this.height = this.fontSize + 6
};
LabelButton.prototype.getChildAtPoint = function () {
    return null
};
LabelButton.prototype.getInputAtPoint = function (b, c) {
    return b >= this.x && b <= this.x + this.width && c >= this.y && c <= this.y + this.height ? this : null
};
LabelButton.prototype.nearValue = function () {
    return null
};
LabelButton.prototype.objNearValue = function () {
    return null
};
LabelButton.prototype.draw = function (b) {
    this._draw(b)
};
LabelButton.prototype._draw = function (b) {
    if (this.img) this.img.ready && b.drawImage(this.img, this.x + (this.width - this.imgWidth) / 2, this.y + (this.height - this.imgHeight) / 2, this.imgWidth, this.imgHeight);
    else {
        b.save();
        if (this.disabled) {
            b.globalAlpha = disabledLabelAlpha;
            if (disabledStrokeColor) b.fillStyle = b.strokeStyle = disabledStrokeColor
        } else {
            b.strokeStyle = buttonStrokeColor;
            b.fillStyle = buttonFillColor
        }
        b.textAlign = "center";
        b.textBaseline = "middle";
        var c = this.fontSize + 4,
            d = this.width - 4;
        b.translate(this.x + 2, this.y +
            (this.height - c) / 2);
        b.beginPath();
        b.moveTo(0, labelRadius);
        b.arcTo(0, 0, labelRadius, 0, labelRadius);
        b.lineTo(d - labelRadius, 0);
        b.arcTo(d, 0, d, labelRadius, labelRadius);
        b.lineTo(d, c - labelRadius);
        b.arcTo(d, c, d - labelRadius, c, labelRadius);
        b.lineTo(labelRadius, c);
        b.arcTo(0, c, 0, c - labelRadius, labelRadius);
        b.closePath();
        b.fill();
        b.stroke();
        b.strokeStyle = "#555555";
        b.fillStyle = "#555555";
        b.beginPath();
        b.moveTo(d, labelRadius);
        b.lineTo(d, c - labelRadius);
        b.arcTo(d, c, d - labelRadius, c, labelRadius);
        b.lineTo(labelRadius, c);
        b.stroke();
        b.strokeStyle = "#000000";
        b.fillStyle = "#000000";
        b.fillText(this.label, d / 2, c / 2);
        b.restore()
    }
};
LabelButton.prototype.setFocus = function () {
    if (window.WinCode) {
        dismissChoosers();
        if (this.callback && this.parent) this.parent[this.callback](this)
    }
    return false
};

function LabelInput(b) {
    this.droppable = b.droppable !== void 0 ? b.droppable : true;
    this._child = this.parent = null;
    this.type = b.type;
    this.label = b.label !== void 0 ? b.label : "";
    this.choices = b.choices;
    this.defaultLabel = b.label;
    this.fontName = window.RenderCode && RenderCode.isCode() ? defaultCodeLabelInputFont : defaultLabelInputFont;
    this.fontSize = b.fontSize !== void 0 ? b.fontSize : defaultLabelInputFontSize;
    this.fontColor = b.fontColor !== void 0 ? b.fontColor : window.RenderCode && RenderCode.isCode() ? defaultInputCodeFontColor : defaultInputFontColor;
    this.hasFocus = this.hilight = false;
    this.height = this.width = this.y = this.x = 0
}
LabelInput.prototype.setHeight = function (b) {
    this.height = b;
    if (this._child != null) {
        this._child.y = this._child.y + (this.height - this._child.height) / 2;
        this._child._computeBlockBounds()
    }
};
LabelInput.prototype.getMaxWidth = function () {
    return this.width
};
LabelInput.prototype.setDisabled = function (b) {
    this.disabled = b;
    this._child != null && this._child.setDisabled(b)
};
LabelInput.prototype.setSelected = function (b, c) {
    this.showSelected = b;
    this._child != null && this._child.setSelected(b, c)
};
LabelInput.prototype.setOutline = function (b) {
    this.showOutline = b;
    this._child != null && this._child.setOutline(b)
};
LabelInput.prototype.copy = function () {
    var b = new LabelInput({
        droppable: this.droppable,
        label: this.label,
        type: this.type,
        choices: this.choices,
        fontSize: this.fontSize,
        fontColor: this.fontColor
    });
    b.defaultLabel = this.defaultLabel;
    b.x = this.x;
    b.y = this.y;
    b.width = this.width;
    b.height = this.height;
    if (this._child != null) {
        b._child = this._child.copy();
        b._child.parent = b
    }
    return b
};
LabelInput.prototype.getRoot = function () {
    for (var b = this; b.parent != null;) b = b.parent;
    return b
};
LabelInput.prototype._computeBounds = function () {
    this.getRoot()._computeBlockBounds()
};
LabelInput.prototype._computeBlockBounds = function () {
    if (this._child != null && !this._child.hidden) {
        this._child.x = this.x;
        this._child.y = this.y;
        this._child._computeBlockBounds();
        this.width = this._child.width;
        this.height = this._child.height
    } else {
        this.width = (this.type == "string" && this.label ? Blocks.measureText(("" + this.label).substring(0, 80) + (("" + this.label).length > 80 ? "..." : ""), this.fontName) : Blocks.measureText(this.label, this.fontName)).width + 6 + labelRadius * 2;
        if (this.type == "variables" || this.type == "lists") this.width =
            this.width + 10;
        this.height = this.fontSize + 6
    }
};
LabelInput.prototype.detach = function () {
    if (this.parent != null) {
        for (var b = this.parent._children, c = 0; c < b.length; c++)
            if (b[c] == this) {
                b.splice(c, 1);
                break
            }
        b = this.parent;
        this.parent = null;
        b._computeBounds()
    }
};
LabelInput.prototype.getChildAtPoint = function (b, c) {
    if (this.locked) return null;
    if (b >= this.x && b <= this.x + this.width && c >= this.y && c <= this.y + this.height && this._child != null && !this._child.hidden) {
        var d = this._child.getChildAtPoint(b, c);
        if (d != null) return d
    }
    return null
};
LabelInput.prototype.getInputAtPoint = function (b, c) {
    if (b >= this.x && b <= this.x + this.width && c >= this.y && c <= this.y + this.height) {
        if (this._child != null && !this._child.hidden) {
            var d = this._child.getChildAtPoint(b, c);
            if (d != null) return d
        }
        return this
    }
    return null
};
LabelInput.prototype.nearValue = function (b, c) {
    if (b >= this.x && b <= this.x + this.width && c >= this.y && c <= this.y + this.height) {
        if (this._child != null && !this._child.hidden) {
            var d = this._child.nearValue(b, c);
            if (d != null) return d
        }
        return this
    }
    return null
};
LabelInput.prototype.objNearValue = function (b) {
    var c = this.x,
        d = this.y,
        e = this.y + this.height,
        f = b.y,
        g = b.x + b.width,
        h = b.y + b.height;
    if (b.x < this.x + this.width && g > c && f < e && h > d) {
        if (this._child != null) {
            if (this._child.locked) return null;
            if (!this._child.hidden) {
                b = this._child.objNearValue(b);
                if (b != null) return b
            }
        }
        return this
    }
    return null
};
LabelInput.prototype.getPopup = function () {
    return this.hasFocus ? this.type == "color" ? ColorPicker.colors : $(".choice-chooser") : null
};

function dismissChoosers() {
    $(".choice-chooser").detach();
    window.AnglePicker && AnglePicker.hide();
    window.ColorPicker && ColorPicker.hide();
    window.BlockPicker && BlockPicker.hide();
    if (window.WinCode) window.WinCode._inputField = null;
    window.WinMediaAssets && WinMediaAssets.hide();
    window.WinPaint && WinPaint.hide()
}

function findScriptVars(b, c) {
    if (b.func == "blockControlScriptVar")
        for (var d = b.label.getNumSockets(), e = 0; e < d; e++) {
            var f = b.label.getSocketAtChild(e);
            f._child && c.indexOf(f._child.name) < 0 && c.push(f._child.name)
        }
    if (b._containers)
        for (e = 0; e < b._containers.length; e++) b._containers[e] != null && findScriptVars(b._containers[e], c);
    b.next && findScriptVars(b.next, c)
}
LabelInput.prototype.addInputField = function (b, c) {
    var d = this,
        e = $('<li><textarea/> <a href="#" class="more"></a></li>');
    e.find("a.more").click(function () {
        $(this).parents("li").toggleClass("expand");
        return false
    });
    e.find("textarea").val(this.label).keydown(function (b) {
        if (b.keyCode == 9) {
            $(this).blur();
            d.label = $(this).val();
            if (c) {
                d.label = parseFloat(d.label);
                if (typeof d.label == "number" && (!isFinite(d.label) || isNaN(d.label))) d.label = 0
            }
            FocusManager.clearFocus()
        } else if (b.keyCode == 13 && !$(this).parents("li").hasClass("expand")) {
            $(this).blur();
            FocusManager.clearFocus();
            return false
        }
    }).keyup(function (b) {
        d.label = $(this).val();
        if (c) {
            d.label = parseFloat(d.label);
            if (typeof d.label == "number" && (!isFinite(d.label) || isNaN(d.label))) d.label = 0
        }
        d._computeBounds();
        IDE.draw();
        if (b.keyCode == 13) {
            if (!$(this).parents("li").hasClass("expand")) {
                $(this).blur();
                FocusManager.clearFocus();
                return false
            }
        } else if (b.keyCode == 27) {
            $(this).blur();
            FocusManager.clearFocus()
        }
    });
    b.append(e);
    e.find("textarea").focus().select()
};
LabelInput.prototype.setFocus = function (b, c, d, e) {
    if (window.WinCode) {
        dismissChoosers();
        if (this.parent && this.parent.parent && (this.parent.parent.func == "blockControlPostMessage" || this.parent.parent.func == "blockControlPostMessageAndWait")) {
            var f = this.parent.parent;
            f.label.getSocketAtChild(2).type = "string";
            var g = f.label.getSocketAtChild(0);
            if (g && g != this && g.label == "loadProject")
                if ((g = f.label.getSocketAtChild(1)) && g != this && g.label == "TynkerRuntime") this.type = "projects"
        }
        if (this.type == "boolean") {
            this._makeBooleanControl(b,
                c, d, e);
            return false
        }
        if (this.type == "string") this._makeStringControl(b, c, d, e);
        else if (this.type == "number") this._makeNumberControl(b, c, d, e);
        else if (this.type == "color") this._makeColorControl(b, c, d, e);
        else if (this.type == "angle") this._makeAngleControl(b, c, d, e);
        else if (this.type == "mathangle") this._makeMathAngleControl(b, c, d, e);
        else if (window.BlockPicker && BlockPicker.types[this.type]) this._makeBlockControl(this.type, b, c, d, e);
        else if (this.type == "projects") this._makeProjectsControl(b, c, d, e);
        else if (this.choices !=
            null && this.choices !== void 0) {
            this._makeChoicesControl(b, c, d, e);
            if (this.type == "custom") return false
        }
        this.hasFocus = b;
        this.cursorPos = this.label.length;
        if (e) {
            d = "";
            e = e.x - this.x - labelRadius;
            c.textAlign = "left";
            c.textBaseline = "middle";
            for (c = 0; c < this.label.length; c++) {
                d = d + this.label[c];
                f = Blocks.measureText(d);
                if (e < f.width) {
                    this.cursorPos = c;
                    break
                }
            }
        }
        b || WinCode._broadcastChange("valueChange", this)
    }
    return true
};
LabelInput.prototype._makeBooleanControl = function () {
    this.label = this.label == "true" ? "false" : "true";
    this.hasFocus = false;
    WinCode._broadcastChange("valueChange", this)
};
LabelInput.prototype._makeStringControl = function (b, c, d) {
    if (b) {
        b = $('<div class="choice-chooser"><ul></ul></div>');
        b.css("left", d.left + (c.offsetX + this.x) * Blocks._scale);
        b.css("top", d.top + (c.offsetY + this.y) * Blocks._scale);
        $("body").append(b);
        b = b.find("ul");
        this.addInputField(b)
    }
};
LabelInput.prototype._makeNumberControl = function (b, c, d) {
    if (b) {
        b = $('<div class="choice-chooser"><ul></ul></div>');
        b.css("left", d.left + (c.offsetX + this.x) * Blocks._scale);
        b.css("top", d.top + (c.offsetY + this.y) * Blocks._scale);
        $("body").append(b);
        b = b.find("ul");
        this.addInputField(b, true)
    }
};
LabelInput.prototype._makeColorControl = function (b, c, d) {
    if (b) {
        var e = this;
        ColorPicker.show((c.offsetX + this.x + labelRadius) * Blocks._scale + d.left, (c.offsetY + this.y + this.height + 4) * Blocks._scale + d.top, (c.offsetY + this.y) * Blocks._scale + d.top, function (b) {
            e.label = b;
            e._computeBounds();
            WinCode.draw()
        }, function (b) {
            e.label = b;
            e._computeBounds();
            FocusManager.clearFocus();
            WinCode.draw();
            WinCode._broadcastChange("valueChange", e)
        })
    } else ColorPicker.hide()
};
LabelInput.prototype._makeAngleControl = function (b, c, d) {
    if (b) {
        var e = this;
        AnglePicker.show(this.label, (c.offsetX + this.x + labelRadius + this.width / 2) * Blocks._scale + d.left, (c.offsetY + this.y + this.height + 4) * Blocks._scale + d.top, (c.offsetY + this.y) * Blocks._scale + d.top, function (b) {
            e.label = b;
            e._computeBounds();
            WinCode.draw();
            WinCode._broadcastChange("valueChange", e)
        }, function () {
            FocusManager.clearFocus()
        })
    }
};
LabelInput.prototype._makeMathAngleControl = function (b, c, d) {
    if (b) {
        var e = this;
        AnglePicker.show(this.label, (c.offsetX + this.x + labelRadius + this.width / 2) * Blocks._scale + d.left, (c.offsetY + this.y + this.height + 4) * Blocks._scale + d.top, (c.offsetY + this.y) * Blocks._scale + d.top, function (b) {
            e.label = b;
            e._computeBounds();
            e.hasFocus = false;
            WinCode.draw();
            WinCode._broadcastChange("valueChange", e)
        }, function () {
            FocusManager.clearFocus()
        }, true)
    }
};
LabelInput.prototype._makeBlockControl = function (b, c, d, e) {
    if (c) {
        var f = this;
        BlockPicker.show(b, this.label, (d.offsetX + this.x + labelRadius + this.width / 2) * Blocks._scale + e.left, (d.offsetY + this.y + this.height + 4) * Blocks._scale + e.top, (d.offsetY + this.y) * Blocks._scale + e.top, function (b) {
            f.label = b;
            f._computeBounds();
            WinCode.draw();
            WinCode._broadcastChange("valueChange", f);
            FocusManager.clearFocus()
        })
    }
};
LabelInput.prototype._makeProjectsControl = function (b, c, d) {
    if (b) {
        var e = $('<div class="choice-chooser"><ul></ul></div>');
        e.css("left", (c.offsetX + this.x + labelRadius) * Blocks._scale + d.left);
        e.css("top", (c.offsetY + this.y + this.height + 4) * Blocks._scale + d.top);
        $("body").append(e);
        var e = e.find("ul"),
            f = this;
        $.ajax({
            url: "/api/projectids",
            success: function (b) {
                for (var b = JSON.parse(b), c = 0; c < b.length; c++) {
                    var d = $("<li>" + b[c].name + " - " + b[c].id + "</li>");
                    e.append(d);
                    d.click(function () {
                        FocusManager.clearFocus();
                        f.label =
                            $(this).text();
                        f._computeBounds();
                        IDE.draw();
                        dismissChoosers();
                        WinCode._broadcastChange("valueChange", f)
                    })
                }
            }
        })
    }
};
LabelInput.prototype._makeChoicesControl = function (b, c, d) {
    if (b) {
        b = $('<div class="choice-chooser"><ul></ul></div>');
        $("body").append(b);
        b = b.find("ul");
        if (this.choices)
            for (var e = 0; e < this.choices.length; e++) {
                var f = $("<li>" + this.choices[e] + "</li>");
                b.append(f);
                var g = this;
                f.click(function () {
                    FocusManager.clearFocus();
                    g.label = $(this).text();
                    g._computeBounds();
                    IDE.draw();
                    dismissChoosers();
                    WinCode._broadcastChange("valueChange", g)
                })
            }
        if (this.type == "where") {
            f = false;
            for (e = 0; e < Runtime.sprites.length; e++)
                if (Runtime.sprites[e] !=
                    IDE.editingActor) {
                    f = $("<li>" + Runtime.sprites[e].label + "</li>");
                    b.append(f);
                    g = this;
                    f.click(function () {
                        FocusManager.clearFocus();
                        g.label = $(this).text();
                        g._computeBounds();
                        IDE.draw();
                        dismissChoosers();
                        WinCode._broadcastChange("valueChange", g)
                    });
                    f = true
                }
            f || b.append('<li class="disabled">No other actors</li>')
        } else if (this.type == "actortiles") {
            for (e = 0; e < Runtime.sprites.length; e++) {
                f = $("<li>" + Runtime.sprites[e].label + "</li>");
                b.append(f);
                g = this;
                f.click(function () {
                    FocusManager.clearFocus();
                    g.label = $(this).text();
                    g._computeBounds();
                    IDE.draw();
                    dismissChoosers();
                    WinCode._broadcastChange("valueChange", g)
                })
            }
            for (var h in Runtime.stage.tileLayer._tileSetMapping) {
                f = $("<li>" + h + " tiles</li>");
                b.append(f);
                g = this;
                f.click(function () {
                    FocusManager.clearFocus();
                    g.label = $(this).text();
                    g._computeBounds();
                    IDE.draw();
                    dismissChoosers();
                    WinCode._broadcastChange("valueChange", g)
                })
            }
        } else if (this.type == "tiles")
            for (h in Runtime.stage.tileLayer._tileSetMapping) {
                f = $("<li>" + h + "</li>");
                b.append(f);
                g = this;
                f.click(function () {
                    FocusManager.clearFocus();
                    g.label = $(this).text();
                    g._computeBounds();
                    IDE.draw();
                    dismissChoosers();
                    WinCode._broadcastChange("valueChange", g)
                })
            } else if (this.type == "whereall" || this.type == "actor")
                for (e = 0; e < Runtime.sprites.length; e++) {
                    f = $("<li>" + Runtime.sprites[e].label + "</li>");
                    b.append(f);
                    g = this;
                    f.click(function () {
                        FocusManager.clearFocus();
                        g.label = $(this).text();
                        g._computeBounds();
                        IDE.draw();
                        dismissChoosers();
                        WinCode._broadcastChange("valueChange", g)
                    })
                } else if (this.type == "stageproperty")
                    for (e = 0; e < Runtime.sprites.length; e++) {
                        h = [];
                        var j = Runtime.sprites[e].tag;
                        if (j)
                            for (var k = 0; k < j.length; k++) {
                                var l = j[k];
                                if (l && h.indexOf(l) < 0) {
                                    f = $("<li>closest " + l + "</li>");
                                    b.append(f);
                                    g = this;
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange", g)
                                    });
                                    f = $("<li>furthest " + l + "</li>");
                                    b.append(f);
                                    g = this;
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange",
                                            g)
                                    })
                                }
                            }
                    } else if (this.type == "method") {
                        f = "";
                        if (this.parent && this.parent.func == "valueControlCallMember") f = this.parent.getSocketAtChild(0).label;
                        if (this.parent && this.parent.parent && this.parent.parent.func == "blockControlCallMember") f = this.parent.parent.label.getSocketAtChild(0).label;
                        h = Sprites.getSpriteByName(f);
                        if (!h) h = Runtime.background;
                        f = false;
                        h = h.scripts;
                        for (e = 0; e < h.length; e++)
                            if (h[e].func == "registerFunction") {
                                f = $("<li>" + h[e].name + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                });
                                f = true
                            }
                        f || b.append('<li class="disabled">No methods</li>')
                    } else if (this.type == "level") {
                        for (e = 0; e < Runtime.levels.length; e++) {
                            f = $("<li>" + Runtime.levels[e].name + "</li>");
                            b.append(f);
                            g = this;
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            })
                        }
                        Runtime.levels.length <= 0 && b.append('<li class="disabled">No levels</li>')
                    } else if (this.type ==
                        "scenes") {
                        h = Runtime.background;
                        f = $("<li>any</li>");
                        b.append(f);
                        g = this;
                        f.click(function () {
                            FocusManager.clearFocus();
                            g.label = $(this).text();
                            g._computeBounds();
                            IDE.draw();
                            dismissChoosers();
                            WinCode._broadcastChange("valueChange", g)
                        });
                        f = true;
                        for (e = 0; e < h.costumes.length; e++) {
                            f = h.costumes[e].imgPreview ? $('<li><img src="' + h.costumes[e].imgPreview + '"/>' + h.costumes[e].name + "</li>") : $('<li><img src="' + h.costumes[e].img + '"/>' + h.costumes[e].name + "</li>");
                            b.append(f);
                            g = this;
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            });
                            f = true
                        }
                        if (Blocks.allowAddInOptions) {
                            g = this;
                            f = $('<li style="border-top:1px solid #ccc">Add Background</li>');
                            b.append(f);
                            f.click(function () {
                                dismissChoosers();
                                WinMediaAssets.showPicker("Add Background", function (b) {
                                    WinProperties._addAssetAsCostume(b);
                                    FocusManager.clearFocus();
                                    g.label = b[0].name;
                                    g._computeBounds();
                                    IDE.draw();
                                    WinCode._broadcastChange("valueChange", g)
                                }, {
                                    backgrounds: true,
                                    actors: false,
                                    images: false,
                                    sounds: false,
                                    charStudio: false
                                })
                            })
                        } else f || b.append('<li class="disabled">No backgrounds</li>')
                    } else if (this.type == "costumes") {
                        h = IDE.editingActor;
                        if (IDE.editingActor == null) h = Runtime.background;
                        if (h.skeleton.skeletonData)
                            for (e = 0; e < h.skeleton.skeletonData.animations.length; e++)
                                if (h.skeleton.skeletonData.animations[e].name.indexOf("Back 3/4") !== 0) {
                                    f = $("<li>" + h.skeleton.skeletonData.animations[e].name + "</li>");
                                    b.append(f);
                                    g = this;
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange", g)
                                    })
                                }
                        for (e = 0; e < h.costumes.length; e++) {
                            f = h.costumes[e].imgPreview ? $('<li><img src="' + h.costumes[e].imgPreview + '"/>' + h.costumes[e].name + "</li>") : $('<li><img src="' + h.costumes[e].img + '"/>' + h.costumes[e].name + "</li>");
                            b.append(f);
                            g = this;
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            })
                        }
                        if (Blocks.allowAddInOptions) {
                            g =
                                this;
                            f = $('<li style="border-top:1px solid #ccc">Add Costume</li>');
                            b.append(f);
                            f.click(function () {
                                dismissChoosers();
                                WinMediaAssets.showPicker("Add Costume", function (b) {
                                    WinProperties._addAssetAsCostume(b);
                                    FocusManager.clearFocus();
                                    g.label = b[0].name;
                                    g._computeBounds();
                                    IDE.draw();
                                    WinCode._broadcastChange("valueChange", g)
                                }, {
                                    backgrounds: false,
                                    actors: false,
                                    images: true,
                                    sounds: false,
                                    charStudio: false
                                })
                            })
                        }
                    } else if (this.type == "sounds") {
                        h = IDE.editingActor;
                        if (IDE.editingActor == null) h = Runtime.background;
                        j = [];
                        for (e =
                            0; e < h.sounds.length; e++)
                            if (j.indexOf(h.sounds[e].name) < 0) {
                                f = $("<li>" + h.sounds[e].name + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                });
                                j.push(h.sounds[e].name)
                            }
                        for (e = 0; e < Runtime.background.sounds.length; e++)
                            if (j.indexOf(Runtime.background.sounds[e].name) < 0) {
                                f = $("<li>" + Runtime.background.sounds[e].name + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                });
                                j.push(Runtime.background.sounds[e].name)
                            }
                        if (Blocks.allowAddInOptions) {
                            g = this;
                            f = $('<li style="border-top:1px solid #ccc">Add Sound</li>');
                            b.append(f);
                            f.click(function () {
                                dismissChoosers();
                                WinMediaAssets.showPicker("Add Sound", function (b) {
                                    WinProperties._addAssetAsCostume(b);
                                    WinProperties.hide();
                                    FocusManager.clearFocus();
                                    g.label = b[0].name;
                                    g._computeBounds();
                                    IDE.draw();
                                    WinCode._broadcastChange("valueChange",
                                        g)
                                }, {
                                    backgrounds: false,
                                    actors: false,
                                    images: false,
                                    sounds: true,
                                    charStudio: false
                                })
                            })
                        } else j.length <= 0 && b.append('<li class="disabled">No other sounds</li>')
                    } else if (this.type == "properties") {
                        f = this.parent;
                        if (f._children && f._children.length >= 4 && f._children[3] instanceof LabelInput) e = (e = Sprites.getSpriteByName(f._children[3].label)) ? e.variables : Runtime.background.variables;
                        else e = Runtime.background.variables;
                        f = false;
                        if (e)
                            for (h in e) {
                                f = $("<li>" + h + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                });
                                f = true
                            }
                        if (e != Runtime.background.variables && IDE.editingActor)
                            for (h in IDE.editingActor.variables) {
                                f = $("<li>" + h + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                });
                                f = true
                            }
                        f || b.append('<li class="disabled">No properties</li>')
                    } else if (this.type == "variables") {
                        f =
                            false;
                        for (h in Runtime.background.variables) {
                            f = $("<li>" + h + "</li>");
                            b.append(f);
                            g = this;
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            });
                            f = true
                        }
                        if (IDE.editingActor)
                            for (h in IDE.editingActor.variables) {
                                f = $("<li>" + h + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange",
                                        g)
                                });
                                f = true
                            }
                        e = this.getRoot();
                        if (e.func == "registerFunction") {
                            h = e.label._children;
                            for (e = 0; e < h.length; e++)
                                if (h[e] instanceof LabelInput && h[e]._child && h[e]._child.func == "valueParam") {
                                    f = $("<li>" + h[e]._child.name + "</li>");
                                    b.append(f);
                                    g = this;
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange", g)
                                    });
                                    f = true
                                }
                        }
                        e = this.getRoot();
                        h = [];
                        findScriptVars(e, h);
                        for (e = 0; e < h.length; e++) {
                            f = $("<li>" + h[e] + "</li>");
                            b.append(f);
                            g = this;
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            });
                            f = true
                        }
                        f || b.append('<li class="disabled">No variables</li>')
                    } else if (this.type == "lists") {
                        f = false;
                        for (h in Runtime.background.lists) {
                            f = $("<li>" + h + "</li>");
                            b.append(f);
                            g = this;
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            });
                            f =
                                true
                        }
                        if (IDE.editingActor)
                            for (h in IDE.editingActor.lists) {
                                f = $("<li>" + h + "</li>");
                                b.append(f);
                                g = this;
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                });
                                f = true
                            }
                        f || b.append('<li class="disabled">No lists</li>')
                    } else if (this.type == "events") {
                        f = this.parent;
                        h = f._children && f._children.length == 4 && f._children[3] instanceof LabelInput ? Runtime.findEventsOf(f._children[3].label) : Runtime.findEventsOf("any");
                        if (h.length > 0)
                            for (e = 0; e < h.length; e++) {
                                if (h[e].indexOf("runtime") != 0 && h[e].indexOf("tynker") != 0) {
                                    f = $("<li>" + h[e] + "</li>");
                                    b.append(f);
                                    g = this;
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange", g)
                                    })
                                }
                            } else b.append('<li class="disabled">No events</li>')
                    } else if (this.type == "charparts")
                        if (IDE.editingActor && IDE.editingActor.skeleton.skeletonData) {
                            e = g_parts[IDE.editingActor.skeleton.type].options;
                            g = this;
                            for (j in e) {
                                f = $("<li>" + j + "</li>");
                                b.append(f);
                                f.click(function () {
                                    FocusManager.clearFocus();
                                    g.label = $(this).text();
                                    var b = g.parent;
                                    if (b._children && b._children.length == 4 && b._children[3] instanceof LabelInput) {
                                        var c = g_parts[IDE.editingActor.skeleton.type].options[g.label];
                                        if (c.indexOf(b._children[3].label) < 0) b._children[3].label = c[0]
                                    }
                                    g._computeBounds();
                                    IDE.draw();
                                    dismissChoosers();
                                    WinCode._broadcastChange("valueChange", g)
                                })
                            }
                            f = $("<li>type</li>");
                            b.append(f);
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            });
                            f = $("<li>All</li>");
                            b.append(f);
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            })
                        } else b.append('<li class="disabled">No character</li>');
                    else if (this.type == "charskins")
                        if (IDE.editingActor && IDE.editingActor.skeleton.skeletonData) {
                            f = this.parent;
                            if (f._children && f._children.length ==
                                4 && f._children[1] instanceof LabelInput) j = f._children[1].label;
                            else {
                                j = g_parts[IDE.editingActor.skeleton.type].options;
                                for (h in j) {
                                    j = g_parts[IDE.editingActor.skeleton.type].options[h];
                                    break
                                }
                            }
                            h = g_parts[IDE.editingActor.skeleton.type].options[j];
                            g = this;
                            if (h)
                                for (e = 0; e < h.length; e++) {
                                    f = $("<li>" + h[e] + "</li>");
                                    b.append(f);
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange", g)
                                    })
                                }
                            f = $("<li>reset</li>");
                            b.append(f);
                            f.click(function () {
                                FocusManager.clearFocus();
                                g.label = $(this).text();
                                g._computeBounds();
                                IDE.draw();
                                dismissChoosers();
                                WinCode._broadcastChange("valueChange", g)
                            })
                        } else b.append('<li class="disabled">No character</li>');
                    else if (this.type == "animations") {
                        f = this.parent;
                        h = f._children && f._children.length == 4 && f._children[3] instanceof LabelInput ? Runtime.findAnimationsFor(f._children[3].label) : Runtime.findAnimationsFor("any");
                        g = this;
                        if (h.length > 0)
                            for (e = 0; e < h.length; e++)
                                if (h[e].indexOf("runtime") != 0 && h[e].indexOf("tynker") !=
                                    0) {
                                    f = $("<li>" + h[e] + "</li>");
                                    b.append(f);
                                    f.click(function () {
                                        FocusManager.clearFocus();
                                        g.label = $(this).text();
                                        g._computeBounds();
                                        IDE.draw();
                                        dismissChoosers();
                                        WinCode._broadcastChange("valueChange", g)
                                    })
                                }
                        f = $("<li>all</li>");
                        b.append(f);
                        f.click(function () {
                            FocusManager.clearFocus();
                            g.label = $(this).text();
                            g._computeBounds();
                            IDE.draw();
                            dismissChoosers();
                            WinCode._broadcastChange("valueChange", g)
                        })
                    }
        b = b.parent();
        b.css("left", d.left + (c.offsetX + this.x + labelRadius) * Blocks._scale);
        c = d.top + (c.offsetY + this.y + this.height +
            4) * Blocks._scale;
        if (c + b.outerHeight() > window.innerHeight)
            if (c - this.height - 4 - 4 - b.outerHeight() > 0) b.css("top", c - (this.height + 4 + 4) * Blocks._scale - b.outerHeight());
            else {
                d = $(".toolbar-top").outerHeight() + windowPadding;
                if (c - (this.height + 4 + 4) * Blocks._scale - d > window.innerHeight - c) {
                    b.css("top", d);
                    b.css("height", c - (this.height + 4 + 4) * Blocks._scale - d - 10)
                } else {
                    b.css("top", c);
                    b.css("height", window.innerHeight - c - 14 * Blocks._scale)
                }
            }
        else b.css("top", c)
    }
};
LabelInput.prototype.keyPressed = function (b, c) {
    if (this.hasFocus) {
        this.label = "" + this.label;
        if (c == 0) {
            if (b == 8) {
                if (this.label.length > 0) {
                    if (this.cursorPos > 0) {
                        this.label = this.label.substring(0, this.cursorPos - 1) + this.label.substring(this.cursorPos);
                        this.cursorPos--
                    }
                    if (this.parent && this.parent.func == "valueOpExpression") {
                        var d = WinExpressions.buildObject(this.label);
                        if (d != null && d instanceof Label) {
                            d.hidden = true;
                            this._child = null;
                            this._child = d;
                            d.parent = this;
                            this.fontColor = "#007700"
                        } else this.fontColor = "#ff0000"
                    }
                }
                return true
            }
            if (b ==
                37) {
                this.cursorPos > 0 && this.cursorPos--;
                return true
            }
            if (b == 39) {
                this.cursorPos < this.label.length && this.cursorPos++;
                return true
            }
            if (b == 32) {
                if (this.type == "number" || this.type == "angle" || this.type == "mathangle") {
                    if (d >= "0" && d <= "9" || d == "." || d == "-") {
                        this.label = this.label.substring(0, this.cursorPos) + " " + this.label.substring(this.cursorPos);
                        this.cursorPos++
                    }
                } else {
                    this.label = this.label.substring(0, this.cursorPos) + " " + this.label.substring(this.cursorPos);
                    this.cursorPos++
                }
                if (this.parent && this.parent.func == "valueOpExpression") {
                    d =
                        WinExpressions.buildObject(this.label);
                    if (d != null && d instanceof Label) {
                        d.hidden = true;
                        this._child = null;
                        this._child = d;
                        d.parent = this;
                        this.fontColor = "#007700"
                    } else this.fontColor = "#ff0000"
                }
                return true
            }
        } else if (c >= 32) {
            d = String.fromCharCode(c);
            if (this.type == "number" || this.type == "angle" || this.type == "mathangle") {
                if (d >= "0" && d <= "9" || d == "." || d == "-") {
                    this.label = this.label.substring(0, this.cursorPos) + d + this.label.substring(this.cursorPos);
                    this.cursorPos++
                }
            } else {
                this.label = this.label.substring(0, this.cursorPos) +
                    d + this.label.substring(this.cursorPos);
                this.cursorPos++
            }
            if (this.parent && this.parent.func == "valueOpExpression") {
                d = WinExpressions.buildObject(this.label);
                if (d != null && d instanceof Label) {
                    d.hidden = true;
                    this._child = null;
                    this._child = d;
                    d.parent = this;
                    this.fontColor = "#007700"
                } else this.fontColor = "#ff0000"
            }
            return true
        }
    }
    return false
};
LabelInput.prototype.draw = function (b) {
    this._draw(b)
};
LabelInput.prototype._draw = function (b) {
    if (this._child != null && !this._child.hidden) this._child._draw(b);
    else {
        b.save();
        if (this.type == "color") {
            b.strokeStyle = this.label;
            b.fillStyle = this.label
        } else if (window.RenderCode && RenderCode.isCode()) {
            b.strokeStyle = defaultInputCodeLineColor;
            b.fillStyle = defaultInputCodeBgColor
        } else {
            b.strokeStyle = defaultInputLineColor;
            b.fillStyle = defaultInputBgColor
        }
        if (this.hilight && !this.hasFocus) {
            b.shadowColor = "#0f0";
            b.shadowBlur = 20;
            b.fillStyle = "#0f0"
        }
        if (this.disabled) {
            b.globalAlpha =
                disabledLabelAlpha;
            if (disabledFillColor) b.fillStyle = disabledFillColor;
            if (disabledStrokeColor) b.strokeStyle = disabledStrokeColor
        }
        b.textAlign = "left";
        b.textBaseline = "middle";
        b.font = window.RenderCode && RenderCode.isCode() ? defaultLabelInputFontWeight + " " + this.fontSize + "px " + defaultCodeLabelInputFont : defaultLabelInputFontWeight + " " + this.fontSize + "px " + defaultLabelInputFont;
        var c = this.fontSize + 6,
            d = this.width;
        b.translate(this.x, this.y + (this.height - c) / 2);
        if (this.type == "boolean") {
            b.beginPath();
            b.moveTo(0, c / 2);
            b.lineTo(c / 4, c);
            b.lineTo(d - c / 4, c);
            b.lineTo(d, c / 2);
            b.lineTo(d - c / 4, 0);
            b.lineTo(c / 4, 0);
            b.closePath();
            b.fill();
            b.strokeStyle = "rgba(0,0,0,.3)";
            b.beginPath();
            b.moveTo(c / 4, 0);
            b.lineTo(d - c / 4, 0);
            b.lineTo(d, c / 2);
            b.stroke();
            b.strokeStyle = "rgba(0,0,0,.2)";
            b.beginPath();
            b.moveTo(c / 4, 0);
            b.lineTo(0, c / 2)
        } else if (this.type == "number") {
            var e = c / 2;
            b.beginPath();
            b.moveTo(0, e);
            b.arcTo(0, 0, e, 0, e);
            b.lineTo(d - e, 0);
            b.arcTo(d, 0, d, e, e);
            b.lineTo(d, c - e);
            b.arcTo(d, c, d - e, c, e);
            b.lineTo(e, c);
            b.arcTo(0, c, 0, c - e, e);
            b.closePath();
            b.fill();
            b.strokeStyle = "rgba(0,0,0,.3)";
            b.beginPath();
            b.moveTo(e, 0);
            b.lineTo(d - e, 0);
            b.arcTo(d, 0, d, e, e);
            b.stroke();
            b.strokeStyle = "rgba(0,0,0,.2)";
            b.beginPath();
            b.moveTo(e, 0);
            b.arcTo(0, 0, 0, e, e)
        } else {
            b.beginPath();
            b.moveTo(0, labelAnyRadius);
            b.arcTo(0, 0, labelAnyRadius, 0, labelAnyRadius);
            b.lineTo(d - labelAnyRadius, 0);
            b.arcTo(d, 0, d, labelAnyRadius, labelAnyRadius);
            b.lineTo(d, c - labelAnyRadius);
            b.arcTo(d, c, d - labelAnyRadius, c, labelAnyRadius);
            b.lineTo(labelAnyRadius, c);
            b.arcTo(0, c, 0, c - labelAnyRadius, labelAnyRadius);
            b.closePath();
            b.fill();
            b.strokeStyle = "rgba(0,0,0,.3)";
            b.beginPath();
            b.moveTo(labelAnyRadius, 0);
            b.lineTo(d - labelAnyRadius, 0);
            b.arcTo(d, 0, d, labelAnyRadius, labelAnyRadius);
            b.lineTo(d, c - labelAnyRadius);
            b.stroke();
            b.strokeStyle = "rgba(0,0,0,.2)";
            b.beginPath();
            b.moveTo(labelAnyRadius, 0);
            b.arcTo(0, 0, 0, labelAnyRadius, labelAnyRadius);
            b.lineTo(0, c - labelAnyRadius)
        }
        b.stroke();
        b.strokeStyle = this.fontColor;
        b.fillStyle = this.fontColor;
        if (this.parent && this.parent.parent && this.parent.parent.func == "blockInlineComment") {
            b.strokeStyle =
                defaultFontCommentColor;
            b.fillStyle = defaultFontCommentColor
        }
        this.type == "string" && this.label ? b.fillText(("" + this.label).substring(0, 80) + (("" + this.label).length > 80 ? "..." : ""), 3 + labelRadius, c / 2) : b.fillText(this.label, 3 + labelRadius, c / 2);
        if (this.hasFocus) {
            c = b.measureText(("" + this.label).substring(0, this.cursorPos)).width + 3 + labelRadius + 0.5;
            b.lineWidth = 1;
            b.beginPath();
            b.moveTo(c, 2);
            b.lineTo(c, this.height - 3);
            b.closePath();
            b.stroke()
        } else if (this.type == "variables" || this.type == "lists") {
            b.strokeStyle = dropdownColor;
            b.fillStyle = dropdownColor;
            b.beginPath();
            b.moveTo(d - labelRadius - 1, 5);
            b.lineTo(d - labelRadius - 1 - 4, 10);
            b.lineTo(d - labelRadius - 1 - 8, 5);
            b.closePath();
            b.stroke();
            b.fill()
        }
        b.restore()
    }
};