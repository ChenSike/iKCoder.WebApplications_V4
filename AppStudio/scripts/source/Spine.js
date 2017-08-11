var spine = {
    radDeg: 180 / Math.PI,
    degRad: Math.PI / 180,
    temp: [],
    Float32Array: "undefined" === typeof Float32Array ? Array : Float32Array,
    Uint16Array: "undefined" === typeof Uint16Array ? Array : Uint16Array,
    BoneData: function (b, c) {
        this.name = b;
        this.parent = c
    }
};
spine.BoneData.prototype = {
    length: 0,
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    inheritScale: !0,
    inheritRotation: !0,
    flipX: !1,
    flipY: !1
};
spine.BlendMode = {
    normal: 0,
    additive: 1,
    multiply: 2,
    screen: 3
};
spine.SlotData = function (b, c) {
    this.name = b;
    this.boneData = c
};
spine.SlotData.prototype = {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    attachmentName: null,
    blendMode: spine.BlendMode.normal
};
spine.IkConstraintData = function (b) {
    this.name = b;
    this.bones = []
};
spine.IkConstraintData.prototype = {
    target: null,
    bendDirection: 1,
    mix: 1
};
spine.Bone = function (b, c, d) {
    this.data = b;
    this.skeleton = c;
    this.parent = d;
    this.setToSetupPose()
};
spine.Bone.yDown = !1;
spine.Bone.prototype = {
    x: 0,
    y: 0,
    rotation: 0,
    rotationIK: 0,
    scaleX: 1,
    scaleY: 1,
    flipX: !1,
    flipY: !1,
    m00: 0,
    m01: 0,
    worldX: 0,
    m10: 0,
    m11: 0,
    worldY: 0,
    worldRotation: 0,
    worldScaleX: 1,
    worldScaleY: 1,
    worldFlipX: !1,
    worldFlipY: !1,
    updateWorldTransform: function () {
        var b = this.parent;
        if (b) {
            this.worldX = this.x * b.m00 + this.y * b.m01 + b.worldX;
            this.worldY = this.x * b.m10 + this.y * b.m11 + b.worldY;
            if (this.data.inheritScale) {
                this.worldScaleX = b.worldScaleX * this.scaleX;
                this.worldScaleY = b.worldScaleY * this.scaleY
            } else {
                this.worldScaleX = this.scaleX;
                this.worldScaleY = this.scaleY
            }
            this.worldRotation = this.data.inheritRotation ? b.worldRotation + this.rotationIK : this.rotationIK;
            this.worldFlipX = b.worldFlipX != this.flipX;
            this.worldFlipY = b.worldFlipY != this.flipY
        } else {
            var b = this.skeleton.flipX,
                c = this.skeleton.flipY;
            this.worldX = b ? -this.x : this.x;
            this.worldY = c != spine.Bone.yDown ? -this.y : this.y;
            this.worldScaleX = this.scaleX;
            this.worldScaleY = this.scaleY;
            this.worldRotation = this.rotationIK;
            this.worldFlipX = b != this.flipX;
            this.worldFlipY = c != this.flipY
        }
        c = this.worldRotation *
            spine.degRad;
        b = Math.cos(c);
        c = Math.sin(c);
        if (this.worldFlipX) {
            this.m00 = -b * this.worldScaleX;
            this.m01 = c * this.worldScaleY
        } else {
            this.m00 = b * this.worldScaleX;
            this.m01 = -c * this.worldScaleY
        }
        if (this.worldFlipY != spine.Bone.yDown) {
            this.m10 = -c * this.worldScaleX;
            this.m11 = -b * this.worldScaleY
        } else {
            this.m10 = c * this.worldScaleX;
            this.m11 = b * this.worldScaleY
        }
    },
    setToSetupPose: function () {
        var b = this.data;
        this.x = b.x;
        this.y = b.y;
        this.rotationIK = this.rotation = b.rotation;
        this.scaleX = b.scaleX;
        this.scaleY = b.scaleY;
        this.flipX = b.flipX;
        this.flipY = b.flipY
    },
    worldToLocal: function (b) {
        var c = b[0] - this.worldX,
            d = b[1] - this.worldY,
            e = this.m00,
            f = this.m10,
            g = this.m01,
            h = this.m11;
        if (this.worldFlipX != (this.worldFlipY != spine.Bone.yDown)) {
            e = -e;
            h = -h
        }
        var j = 1 / (e * h - g * f);
        b[0] = c * e * j - d * g * j;
        b[1] = d * h * j - c * f * j
    },
    localToWorld: function (b) {
        var c = b[0],
            d = b[1];
        b[0] = c * this.m00 + d * this.m01 + this.worldX;
        b[1] = c * this.m10 + d * this.m11 + this.worldY
    }
};
spine.Slot = function (b, c) {
    this.data = b;
    this.bone = c;
    this.setToSetupPose()
};
spine.Slot.prototype = {
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    _attachmentTime: 0,
    attachment: null,
    attachmentVertices: [],
    setAttachment: function (b) {
        this.attachment = b;
        this._attachmentTime = this.bone.skeleton.time;
        this.attachmentVertices.length = 0
    },
    setAttachmentTime: function (b) {
        this._attachmentTime = this.bone.skeleton.time - b
    },
    getAttachmentTime: function () {
        return this.bone.skeleton.time - this._attachmentTime
    },
    setToSetupPose: function () {
        var b = this.data;
        this.r = b.r;
        this.g = b.g;
        this.b = b.b;
        this.a = b.a;
        for (var c = this.bone.skeleton.data.slots,
                d = 0, e = c.length; d < e; d++)
            if (c[d] == b) {
                this.setAttachment(!b.attachmentName ? null : this.bone.skeleton.getAttachmentBySlotIndex(d, b.attachmentName));
                break
            }
    }
};
spine.IkConstraint = function (b, c) {
    this.data = b;
    this.mix = b.mix;
    this.bendDirection = b.bendDirection;
    this.bones = [];
    for (var d = 0, e = b.bones.length; d < e; d++) this.bones.push(c.findBone(b.bones[d].name));
    this.target = c.findBone(b.target.name)
};
spine.IkConstraint.prototype = {
    apply: function () {
        var b = this.target,
            c = this.bones;
        switch (c.length) {
            case 1:
                spine.IkConstraint.apply1(c[0], b.worldX, b.worldY, this.mix);
                break;
            case 2:
                spine.IkConstraint.apply2(c[0], c[1], b.worldX, b.worldY, this.bendDirection, this.mix)
        }
    }
};
spine.IkConstraint.apply1 = function (b, c, d, e) {
    var f = !b.data.inheritRotation || !b.parent ? 0 : b.parent.worldRotation,
        g = b.rotation,
        c = Math.atan2(d - b.worldY, c - b.worldX) * spine.radDeg;
    b.worldFlipX != (b.worldFlipY != spine.Bone.yDown) && (c = -c);
    b.rotationIK = g + (c - f - g) * e
};
spine.IkConstraint.apply2 = function (b, c, d, e, f, g) {
    var h = c.rotation,
        j = b.rotation;
    if (g) {
        var k, l, m = spine.temp;
        if (k = b.parent) {
            m[0] = d;
            m[1] = e;
            k.worldToLocal(m);
            d = (m[0] - b.x) * k.worldScaleX;
            e = (m[1] - b.y) * k.worldScaleY
        } else {
            d = d - b.x;
            e = e - b.y
        }
        if (c.parent == b) {
            k = c.x;
            l = c.y
        } else {
            m[0] = c.x;
            m[1] = c.y;
            c.parent.localToWorld(m);
            b.worldToLocal(m);
            k = m[0];
            l = m[1]
        }
        m = k * b.worldScaleX;
        l = l * b.worldScaleY;
        k = Math.atan2(l, m);
        l = Math.sqrt(m * m + l * l);
        var m = c.data.length * c.worldScaleX,
            n = 2 * l * m;
        if (n < 1.0E-4) c.rotationIK = h + (Math.atan2(e, d) * spine.radDeg -
            j - h) * g;
        else {
            n = (d * d + e * e - l * l - m * m) / n;
            n < -1 ? n = -1 : n > 1 && (n = 1);
            f = Math.acos(n) * f;
            l = l + m * n;
            m = m * Math.sin(f);
            d = (Math.atan2(e * l - d * m, d * l + e * m) - k) * spine.radDeg - j;
            d > 180 ? d = d - 360 : d < -180 && (d = d + 360);
            b.rotationIK = j + d * g;
            d = (f + k) * spine.radDeg - h;
            d > 180 ? d = d - 360 : d < -180 && (d = d + 360);
            c.rotationIK = h + (d + b.worldRotation - c.parent.worldRotation) * g
        }
    } else {
        c.rotationIK = h;
        b.rotationIK = j
    }
};
spine.Skin = function (b) {
    this.name = b;
    this.attachments = {}
};
spine.Skin.prototype = {
    addAttachment: function (b, c, d) {
        this.attachments[b + ":" + c] = d
    },
    getAttachment: function (b, c) {
        return this.attachments[b + ":" + c]
    },
    _attachAll: function (b, c) {
        for (var d in c.attachments) {
            var e = d.indexOf(":"),
                f = parseInt(d.substring(0, e)),
                g = d.substring(e + 1),
                e = b.slots[f];
            if (e.attachment && e.attachment.name == g) (f = this.getAttachment(f, g)) && e.setAttachment(f)
        }
    }
};
spine.Animation = function (b, c, d) {
    this.name = b;
    this.timelines = c;
    this.duration = d
};
spine.Animation.prototype = {
    apply: function (b, c, d, e, f) {
        if (e && this.duration != 0) {
            d = d % this.duration;
            c = c % this.duration
        }
        for (var e = this.timelines, g = 0, h = e.length; g < h; g++) e[g].apply(b, c, d, f, 1)
    },
    mix: function (b, c, d, e, f, g) {
        if (e && this.duration != 0) {
            d = d % this.duration;
            c = c % this.duration
        }
        for (var e = this.timelines, h = 0, j = e.length; h < j; h++) e[h].apply(b, c, d, f, g)
    }
};
spine.Animation.binarySearch = function (b, c, d) {
    var e = 0,
        f = Math.floor(b.length / d) - 2;
    if (!f) return d;
    for (var g = f >>> 1; ;) {
        b[(g + 1) * d] <= c ? e = g + 1 : f = g;
        if (e == f) return (e + 1) * d;
        g = e + f >>> 1
    }
};
spine.Animation.binarySearch1 = function (b, c) {
    var d = 0,
        e = b.length - 2;
    if (!e) return 1;
    for (var f = e >>> 1; ;) {
        b[f + 1] <= c ? d = f + 1 : e = f;
        if (d == e) return d + 1;
        f = d + e >>> 1
    }
};
spine.Animation.linearSearch = function (b, c, d) {
    for (var e = 0, f = b.length - d; e <= f; e = e + d)
        if (b[e] > c) return e;
    return -1
};
spine.Curves = function () {
    this.curves = []
};
spine.Curves.prototype = {
    setLinear: function (b) {
        this.curves[b * 19] = 0
    },
    setStepped: function (b) {
        this.curves[b * 19] = 1
    },
    setCurve: function (b, c, d, e, f) {
        var g = 0.1 * 0.1,
            h = g * 0.1,
            j = 3 * 0.1,
            k = 3 * g,
            l = 6 * g,
            g = 6 * h,
            m = -c * 2 + e,
            n = -d * 2 + f,
            e = (c - e) * 3 + 1,
            f = (d - f) * 3 + 1,
            c = c * j + m * k + e * h,
            d = d * j + n * k + f * h,
            h = m * l + e * g,
            l = n * l + f * g,
            n = e * g,
            g = f * g,
            b = b * 19,
            e = this.curves;
        e[b++] = 2;
        f = c;
        j = d;
        for (k = b + 19 - 1; b < k; b = b + 2) {
            e[b] = f;
            e[b + 1] = j;
            c = c + h;
            d = d + l;
            h = h + n;
            l = l + g;
            f = f + c;
            j = j + d
        }
    },
    getCurvePercent: function (b, c) {
        var c = c < 0 ? 0 : c > 1 ? 1 : c,
            d = this.curves,
            e = b * 19,
            f = d[e];
        if (f === 0) return c;
        if (f == 1) return 0;
        e++;
        for (var f = 0, g = e, h = e + 19 - 1; e < h; e = e + 2) {
            f = d[e];
            if (f >= c) {
                if (e == g) h = g = 0;
                else {
                    g = d[e - 2];
                    h = d[e - 1]
                }
                return h + (d[e + 1] - h) * (c - g) / (f - g)
            }
        }
        d = d[e - 1];
        return d + (1 - d) * (c - f) / (1 - f)
    }
};
spine.RotateTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 2
};
spine.RotateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 2
    },
    setFrame: function (b, c, d) {
        b = b * 2;
        this.frames[b] = c;
        this.frames[b + 1] = d
    },
    apply: function (b, c, d, e, f) {
        c = this.frames;
        if (!(d < c[0])) {
            b = b.bones[this.boneIndex];
            if (d >= c[c.length - 2]) c = b.data.rotation + c[c.length - 1] - b.rotation;
            else {
                for (var g = spine.Animation.binarySearch(c, d, 2), e = c[g - 1], h = c[g], d = 1 - (d - h) / (c[g - 2] - h), d = this.curves.getCurvePercent(g / 2 - 1, d), c = c[g + 1] - e; c > 180;) c = c - 360;
                for (; c < -180;) c = c + 360;
                c = b.data.rotation +
                    (e + c * d) - b.rotation
            }
            for (; c > 180;) c = c - 360;
            for (; c < -180;) c = c + 360;
            b.rotation = b.rotation + c * f
        }
    }
};
spine.TranslateTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 3
};
spine.TranslateTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 3
    },
    setFrame: function (b, c, d, e) {
        b = b * 3;
        this.frames[b] = c;
        this.frames[b + 1] = d;
        this.frames[b + 2] = e
    },
    apply: function (b, c, d, e, f) {
        c = this.frames;
        if (!(d < c[0])) {
            b = b.bones[this.boneIndex];
            if (d >= c[c.length - 3]) {
                b.x = b.x + (b.data.x + c[c.length - 2] - b.x) * f;
                b.y = b.y + (b.data.y + c[c.length - 1] - b.y) * f
            } else {
                var e = spine.Animation.binarySearch(c, d, 3),
                    g = c[e - 2],
                    h = c[e - 1],
                    j = c[e],
                    d = 1 - (d - j) / (c[e + -3] - j),
                    d = this.curves.getCurvePercent(e / 3 - 1, d);
                b.x = b.x + (b.data.x + g + (c[e + 1] - g) * d - b.x) * f;
                b.y = b.y + (b.data.y + h + (c[e + 2] - h) * d - b.y) * f
            }
        }
    }
};
spine.ScaleTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 3
};
spine.ScaleTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 3
    },
    setFrame: function (b, c, d, e) {
        b = b * 3;
        this.frames[b] = c;
        this.frames[b + 1] = d;
        this.frames[b + 2] = e
    },
    apply: function (b, c, d, e, f) {
        c = this.frames;
        if (!(d < c[0])) {
            b = b.bones[this.boneIndex];
            if (d >= c[c.length - 3]) {
                b.scaleX = b.scaleX + (b.data.scaleX * c[c.length - 2] - b.scaleX) * f;
                b.scaleY = b.scaleY + (b.data.scaleY * c[c.length - 1] - b.scaleY) * f
            } else {
                var e = spine.Animation.binarySearch(c, d, 3),
                    g = c[e - 2],
                    h = c[e - 1],
                    j = c[e],
                    d = 1 - (d - j) / (c[e + -3] - j),
                    d =
                    this.curves.getCurvePercent(e / 3 - 1, d);
                b.scaleX = b.scaleX + (b.data.scaleX * (g + (c[e + 1] - g) * d) - b.scaleX) * f;
                b.scaleY = b.scaleY + (b.data.scaleY * (h + (c[e + 2] - h) * d) - b.scaleY) * f
            }
        }
    }
};
spine.ColorTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 5
};
spine.ColorTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 5
    },
    setFrame: function (b, c, d, e, f, g) {
        b = b * 5;
        this.frames[b] = c;
        this.frames[b + 1] = d;
        this.frames[b + 2] = e;
        this.frames[b + 3] = f;
        this.frames[b + 4] = g
    },
    apply: function (b, c, d, e, f) {
        c = this.frames;
        if (!(d < c[0])) {
            var g, h;
            if (d >= c[c.length - 5]) {
                e = c.length - 1;
                d = c[e - 3];
                g = c[e - 2];
                h = c[e - 1];
                c = c[e]
            } else {
                var e = spine.Animation.binarySearch(c, d, 5),
                    j = c[e - 4];
                g = c[e - 3];
                h = c[e - 2];
                var k = c[e - 1],
                    l = c[e],
                    l = 1 - (d - l) / (c[e - 5] - l),
                    l = this.curves.getCurvePercent(e /
                        5 - 1, l),
                    d = j + (c[e + 1] - j) * l;
                g = g + (c[e + 2] - g) * l;
                h = h + (c[e + 3] - h) * l;
                c = k + (c[e + 4] - k) * l
            }
            b = b.slots[this.slotIndex];
            if (f < 1) {
                b.r = b.r + (d - b.r) * f;
                b.g = b.g + (g - b.g) * f;
                b.b = b.b + (h - b.b) * f;
                b.a = b.a + (c - b.a) * f
            } else {
                b.r = d;
                b.g = g;
                b.b = h;
                b.a = c
            }
        }
    }
};
spine.AttachmentTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b;
    this.attachmentNames = [];
    this.attachmentNames.length = b
};
spine.AttachmentTimeline.prototype = {
    slotIndex: 0,
    getFrameCount: function () {
        return this.frames.length
    },
    setFrame: function (b, c, d) {
        this.frames[b] = c;
        this.attachmentNames[b] = d
    },
    apply: function (b, c, d) {
        var e = this.frames;
        if (d < e[0]) c > d && this.apply(b, c, Number.MAX_VALUE, null, 0);
        else {
            c > d && (c = -1);
            d = d >= e[e.length - 1] ? e.length - 1 : spine.Animation.binarySearch1(e, d) - 1;
            if (!(e[d] < c)) {
                c = this.attachmentNames[d];
                b.slots[this.slotIndex].setAttachment(!c ? null : b.getAttachmentBySlotIndex(this.slotIndex, c))
            }
        }
    }
};
spine.EventTimeline = function (b) {
    this.frames = [];
    this.frames.length = b;
    this.events = [];
    this.events.length = b
};
spine.EventTimeline.prototype = {
    getFrameCount: function () {
        return this.frames.length
    },
    setFrame: function (b, c, d) {
        this.frames[b] = c;
        this.events[b] = d
    },
    apply: function (b, c, d, e, f) {
        if (e) {
            var g = this.frames,
                h = g.length;
            if (c > d) {
                this.apply(b, c, Number.MAX_VALUE, e, f);
                c = -1
            } else if (c >= g[h - 1]) return;
            if (!(d < g[0])) {
                if (c < g[0]) b = 0;
                else {
                    b = spine.Animation.binarySearch1(g, c);
                    for (c = g[b]; b > 0;) {
                        if (g[b - 1] != c) break;
                        b--
                    }
                }
                for (c = this.events; b < h && d >= g[b]; b++) e.push(c[b])
            }
        }
    }
};
spine.DrawOrderTimeline = function (b) {
    this.frames = [];
    this.frames.length = b;
    this.drawOrders = [];
    this.drawOrders.length = b
};
spine.DrawOrderTimeline.prototype = {
    getFrameCount: function () {
        return this.frames.length
    },
    setFrame: function (b, c, d) {
        this.frames[b] = c;
        this.drawOrders[b] = d
    },
    apply: function (b, c, d) {
        c = this.frames;
        if (!(d < c[0])) {
            var e;
            e = d >= c[c.length - 1] ? c.length - 1 : spine.Animation.binarySearch1(c, d) - 1;
            d = b.drawOrder;
            c = b.slots;
            if (e = this.drawOrders[e]) {
                f = 0;
                for (g = e.length; f < g; f++) d[f] = b.slots[e[f]]
            } else
                for (var f = 0, g = c.length; f < g; f++) d[f] = c[f]
        }
    }
};
spine.FfdTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b;
    this.frameVertices = [];
    this.frameVertices.length = b
};
spine.FfdTimeline.prototype = {
    slotIndex: 0,
    attachment: 0,
    getFrameCount: function () {
        return this.frames.length
    },
    setFrame: function (b, c, d) {
        this.frames[b] = c;
        this.frameVertices[b] = d
    },
    apply: function (b, c, d, e, f) {
        c = b.slots[this.slotIndex];
        if (c.attachment == this.attachment) {
            var g = this.frames;
            if (!(d < g[0])) {
                e = this.frameVertices;
                b = e[0].length;
                c = c.attachmentVertices;
                c.length != b && (f = 1);
                c.length = b;
                if (d >= g[g.length - 1]) {
                    d = e[g.length - 1];
                    if (f < 1)
                        for (e = 0; e < b; e++) c[e] = c[e] + (d[e] - c[e]) * f;
                    else
                        for (e = 0; e < b; e++) c[e] = d[e]
                } else {
                    var h =
                        spine.Animation.binarySearch1(g, d),
                        j = g[h],
                        d = 1 - (d - j) / (g[h - 1] - j),
                        d = this.curves.getCurvePercent(h - 1, d < 0 ? 0 : d > 1 ? 1 : d),
                        g = e[h - 1],
                        h = e[h];
                    if (f < 1)
                        for (e = 0; e < b; e++) {
                            j = g[e];
                            c[e] = c[e] + (j + (h[e] - j) * d - c[e]) * f
                        } else
                        for (e = 0; e < b; e++) {
                            j = g[e];
                            c[e] = j + (h[e] - j) * d
                        }
                }
            }
        }
    }
};
spine.IkConstraintTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 3
};
spine.IkConstraintTimeline.prototype = {
    ikConstraintIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 3
    },
    setFrame: function (b, c, d, e) {
        b = b * 3;
        this.frames[b] = c;
        this.frames[b + 1] = d;
        this.frames[b + 2] = e
    },
    apply: function (b, c, d, e, f) {
        c = this.frames;
        if (!(d < c[0])) {
            b = b.ikConstraints[this.ikConstraintIndex];
            if (d >= c[c.length - 3]) {
                b.mix = b.mix + (c[c.length - 2] - b.mix) * f;
                b.bendDirection = c[c.length - 1]
            } else {
                var e = spine.Animation.binarySearch(c, d, 3),
                    g = c[e + -2],
                    h = c[e],
                    d = 1 - (d - h) / (c[e + -3] - h),
                    d = this.curves.getCurvePercent(e /
                        3 - 1, d);
                b.mix = b.mix + (g + (c[e + 1] - g) * d - b.mix) * f;
                b.bendDirection = c[e + -1]
            }
        }
    }
};
spine.FlipXTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 2
};
spine.FlipXTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 2
    },
    setFrame: function (b, c, d) {
        b = b * 2;
        this.frames[b] = c;
        this.frames[b + 1] = d ? 1 : 0
    },
    apply: function (b, c, d) {
        var e = this.frames;
        if (d < e[0]) c > d && this.apply(b, c, Number.MAX_VALUE, null, 0);
        else {
            c > d && (c = -1);
            d = (d >= e[e.length - 2] ? e.length : spine.Animation.binarySearch(e, d, 2)) - 2;
            if (!(e[d] < c)) b.bones[this.boneIndex].flipX = e[d + 1] != 0
        }
    }
};
spine.FlipYTimeline = function (b) {
    this.curves = new spine.Curves(b);
    this.frames = [];
    this.frames.length = b * 2
};
spine.FlipYTimeline.prototype = {
    boneIndex: 0,
    getFrameCount: function () {
        return this.frames.length / 2
    },
    setFrame: function (b, c, d) {
        b = b * 2;
        this.frames[b] = c;
        this.frames[b + 1] = d ? 1 : 0
    },
    apply: function (b, c, d) {
        var e = this.frames;
        if (d < e[0]) c > d && this.apply(b, c, Number.MAX_VALUE, null, 0);
        else {
            c > d && (c = -1);
            d = (d >= e[e.length - 2] ? e.length : spine.Animation.binarySearch(e, d, 2)) - 2;
            if (!(e[d] < c)) b.bones[this.boneIndex].flipY = e[d + 1] != 0
        }
    }
};
spine.SkeletonData = function () {
    this.bones = [];
    this.slots = [];
    this.skins = [];
    this.events = [];
    this.animations = [];
    this.ikConstraints = []
};
spine.SkeletonData.prototype = {
    name: null,
    defaultSkin: null,
    width: 0,
    height: 0,
    version: null,
    hash: null,
    findBone: function (b) {
        for (var c = this.bones, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return c[d];
        return null
    },
    findBoneIndex: function (b) {
        for (var c = this.bones, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return d;
        return -1
    },
    findSlot: function (b) {
        for (var c = this.slots, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return slot[d];
        return null
    },
    findSlotIndex: function (b) {
        for (var c = this.slots, d = 0, e = c.length; d < e; d++)
            if (c[d].name ==
                b) return d;
        return -1
    },
    findSkin: function (b) {
        for (var c = this.skins, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return c[d];
        return null
    },
    findEvent: function (b) {
        for (var c = this.events, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return c[d];
        return null
    },
    findAnimation: function (b) {
        for (var c = this.animations, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return c[d];
        return null
    },
    findIkConstraint: function (b) {
        for (var c = this.ikConstraints, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return c[d];
        return null
    }
};
spine.Skeleton = function (b) {
    this.data = b;
    this.bones = [];
    for (var c = 0, d = b.bones.length; c < d; c++) {
        var e = b.bones[c],
            f = !e.parent ? null : this.bones[b.bones.indexOf(e.parent)];
        this.bones.push(new spine.Bone(e, this, f))
    }
    this.slots = [];
    this.drawOrder = [];
    c = 0;
    for (d = b.slots.length; c < d; c++) {
        e = b.slots[c];
        f = this.bones[b.bones.indexOf(e.boneData)];
        e = new spine.Slot(e, f);
        this.slots.push(e);
        this.drawOrder.push(e)
    }
    this.ikConstraints = [];
    c = 0;
    for (d = b.ikConstraints.length; c < d; c++) this.ikConstraints.push(new spine.IkConstraint(b.ikConstraints[c],
        this));
    this.boneCache = [];
    this.updateCache()
};
spine.Skeleton.prototype = {
    x: 0,
    y: 0,
    skin: null,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    time: 0,
    flipX: !1,
    flipY: !1,
    updateCache: function () {
        var b = this.ikConstraints,
            c = b.length,
            d = c + 1,
            e = this.boneCache;
        if (e.length > d) e.length = d;
        for (var f = 0, g = e.length; f < g; f++) e[f].length = 0;
        for (; e.length < d;) e[e.length] = [];
        var d = e[0],
            h = this.bones,
            f = 0,
            g = h.length;
        a: for (; f < g; f++) {
            var j = h[f],
                k = j;
            do {
                for (var l = 0; l < c; l++)
                    for (var m = b[l], n = m.bones[0], m = m.bones[m.bones.length - 1]; ;) {
                        if (k == m) {
                            e[l].push(j);
                            e[l + 1].push(j);
                            continue a
                        }
                        if (m == n) break;
                        m = m.parent
                    }
                k = k.parent
            } while (k);
            d[d.length] = j
        }
    },
    updateWorldTransform: function () {
        for (var b = this.bones, c = 0, d = b.length; c < d; c++) {
            var e = b[c];
            e.rotationIK = e.rotation
        }
        c = 0;
        for (b = this.boneCache.length - 1; ;) {
            for (var d = this.boneCache[c], e = 0, f = d.length; e < f; e++) d[e].updateWorldTransform();
            if (c == b) break;
            this.ikConstraints[c].apply();
            c++
        }
    },
    setToSetupPose: function () {
        this.setBonesToSetupPose();
        this.setSlotsToSetupPose()
    },
    setBonesToSetupPose: function () {
        for (var b = this.bones, c = 0, d = b.length; c < d; c++) b[c].setToSetupPose();
        b = this.ikConstraints;
        c = 0;
        for (d =
            b.length; c < d; c++) {
            var e = b[c];
            e.bendDirection = e.data.bendDirection;
            e.mix = e.data.mix
        }
    },
    setSlotsToSetupPose: function () {
        for (var b = this.slots, c = this.drawOrder, d = 0, e = b.length; d < e; d++) {
            c[d] = b[d];
            b[d].setToSetupPose(d)
        }
    },
    getRootBone: function () {
        return this.bones.length ? this.bones[0] : null
    },
    findBone: function (b) {
        for (var c = this.bones, d = 0, e = c.length; d < e; d++)
            if (c[d].data.name == b) return c[d];
        return null
    },
    findBoneIndex: function (b) {
        for (var c = this.bones, d = 0, e = c.length; d < e; d++)
            if (c[d].data.name == b) return d;
        return -1
    },
    findSlot: function (b) {
        for (var c = this.slots, d = 0, e = c.length; d < e; d++)
            if (c[d].data.name == b) return c[d];
        return null
    },
    findSlotIndex: function (b) {
        for (var c = this.slots, d = 0, e = c.length; d < e; d++)
            if (c[d].data.name == b) return d;
        return -1
    },
    setSkinByName: function (b) {
        var c = this.data.findSkin(b);
        if (!c) throw "Skin not found: " + b;
        this.setSkin(c)
    },
    setSkin: function (b) {
        if (b)
            if (this.skin) b._attachAll(this, this.skin);
            else
                for (var c = this.slots, d = 0, e = c.length; d < e; d++) {
                    var f = c[d],
                        g = f.data.attachmentName;
                    if (g) (g = b.getAttachment(d,
                        g)) && f.setAttachment(g)
                }
        this.skin = b
    },
    getAttachmentBySlotName: function (b, c) {
        return this.getAttachmentBySlotIndex(this.data.findSlotIndex(b), c)
    },
    getAttachmentBySlotIndex: function (b, c) {
        if (this.skin) {
            var d = this.skin.getAttachment(b, c);
            if (d) return d
        }
        return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(b, c) : null
    },
    setAttachment: function (b, c) {
        for (var d = this.slots, e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            if (g.data.name == b) {
                d = null;
                if (c) {
                    d = this.getAttachmentBySlotIndex(e, c);
                    if (!d) throw "Attachment not found: " +
                        c + ", for slot: " + b;
                }
                g.setAttachment(d);
                return
            }
        }
        throw "Slot not found: " + b;
    },
    findIkConstraint: function (b) {
        for (var c = this.ikConstraints, d = 0, e = c.length; d < e; d++)
            if (c[d].data.name == b) return c[d];
        return null
    },
    update: function (b) {
        this.time = this.time + b
    }
};
spine.EventData = function (b) {
    this.name = b
};
spine.EventData.prototype = {
    intValue: 0,
    floatValue: 0,
    stringValue: null
};
spine.Event = function (b) {
    this.data = b
};
spine.Event.prototype = {
    intValue: 0,
    floatValue: 0,
    stringValue: null
};
spine.AttachmentType = {
    region: 0,
    boundingbox: 1,
    mesh: 2,
    skinnedmesh: 3
};
spine.RegionAttachment = function (b) {
    this.name = b;
    this.offset = [];
    this.offset.length = 8;
    this.uvs = [];
    this.uvs.length = 8
};
spine.RegionAttachment.prototype = {
    type: spine.AttachmentType.region,
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    width: 0,
    height: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    rendererObject: null,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    setUVs: function (b, c, d, e, f) {
        var g = this.uvs;
        if (f) {
            g[2] = b;
            g[3] = e;
            g[4] = b;
            g[5] = c;
            g[6] = d;
            g[7] = c;
            g[0] = d;
            g[1] = e
        } else {
            g[0] = b;
            g[1] = e;
            g[2] = b;
            g[3] = c;
            g[4] = d;
            g[5] = c;
            g[6] = d;
            g[7] = e
        }
    },
    updateOffset: function () {
        var b = this.width / this.regionOriginalWidth *
            this.scaleX,
            c = this.height / this.regionOriginalHeight * this.scaleY,
            d = -this.width / 2 * this.scaleX + this.regionOffsetX * b,
            e = -this.height / 2 * this.scaleY + this.regionOffsetY * c,
            f = d + this.regionWidth * b,
            b = e + this.regionHeight * c,
            b = f = e = d = 0,
            c = this.rotation * spine.degRad,
            g = Math.cos(c),
            h = Math.sin(c),
            c = d * g + this.x,
            d = d * h,
            j = e * g + this.y,
            e = e * h,
            k = f * g + this.x,
            f = f * h,
            g = b * g + this.y,
            b = b * h,
            h = this.offset;
        h[0] = c - e;
        h[1] = j + d;
        h[2] = c - b;
        h[3] = g + d;
        h[4] = k - b;
        h[5] = g + f;
        h[6] = k - e;
        h[7] = j + f
    },
    computeVertices: function (b, c, d, e) {
        var b = b + d.worldX,
            c = c + d.worldY,
            f = d.m00,
            g = d.m01,
            h = d.m10,
            d = d.m11,
            j = this.offset;
        e[0] = j[0] * f + j[1] * g + b;
        e[1] = j[0] * h + j[1] * d + c;
        e[2] = j[2] * f + j[3] * g + b;
        e[3] = j[2] * h + j[3] * d + c;
        e[4] = j[4] * f + j[5] * g + b;
        e[5] = j[4] * h + j[5] * d + c;
        e[6] = j[6] * f + j[7] * g + b;
        e[7] = j[6] * h + j[7] * d + c
    }
};
spine.MeshAttachment = function (b) {
    this.name = b
};
spine.MeshAttachment.prototype = {
    type: spine.AttachmentType.mesh,
    vertices: null,
    uvs: null,
    regionUVs: null,
    triangles: null,
    hullLength: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    rendererObject: null,
    regionU: 0,
    regionV: 0,
    regionU2: 0,
    regionV2: 0,
    regionRotate: !1,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    edges: null,
    width: 0,
    height: 0,
    updateUVs: function () {
        var b = this.regionU2 - this.regionU,
            c = this.regionV2 - this.regionV,
            d = this.regionUVs.length;
        if (!this.uvs || this.uvs.length !=
            d) this.uvs = new spine.Float32Array(d);
        if (this.regionRotate)
            for (var e = 0; e < d; e = e + 2) {
                this.uvs[e] = this.regionU + this.regionUVs[e + 1] * b;
                this.uvs[e + 1] = this.regionV + c - this.regionUVs[e] * c
            } else
            for (e = 0; e < d; e = e + 2) {
                this.uvs[e] = this.regionU + this.regionUVs[e] * b;
                this.uvs[e + 1] = this.regionV + this.regionUVs[e + 1] * c
            }
    },
    computeWorldVertices: function (b, c, d, e) {
        var f = d.bone,
            b = b + f.worldX,
            c = c + f.worldY,
            g = f.m00,
            h = f.m01,
            j = f.m10,
            f = f.m11,
            k = this.vertices,
            l = k.length;
        if (d.attachmentVertices.length == l) k = d.attachmentVertices;
        for (d = 0; d <
            l; d = d + 2) {
            var m = k[d],
                n = k[d + 1];
            e[d] = m * g + n * h + b;
            e[d + 1] = m * j + n * f + c
        }
    }
};
spine.SkinnedMeshAttachment = function (b) {
    this.name = b
};
spine.SkinnedMeshAttachment.prototype = {
    type: spine.AttachmentType.skinnedmesh,
    bones: null,
    weights: null,
    uvs: null,
    regionUVs: null,
    triangles: null,
    hullLength: 0,
    r: 1,
    g: 1,
    b: 1,
    a: 1,
    path: null,
    rendererObject: null,
    regionU: 0,
    regionV: 0,
    regionU2: 0,
    regionV2: 0,
    regionRotate: !1,
    regionOffsetX: 0,
    regionOffsetY: 0,
    regionWidth: 0,
    regionHeight: 0,
    regionOriginalWidth: 0,
    regionOriginalHeight: 0,
    edges: null,
    width: 0,
    height: 0,
    updateUVs: function () {
        var b = this.regionU2 - this.regionU,
            c = this.regionV2 - this.regionV,
            d = this.regionUVs.length;
        if (!this.uvs ||
            this.uvs.length != d) this.uvs = new spine.Float32Array(d);
        if (this.regionRotate)
            for (var e = 0; e < d; e = e + 2) {
                this.uvs[e] = this.regionU + this.regionUVs[e + 1] * b;
                this.uvs[e + 1] = this.regionV + c - this.regionUVs[e] * c
            } else
            for (e = 0; e < d; e = e + 2) {
                this.uvs[e] = this.regionU + this.regionUVs[e] * b;
                this.uvs[e + 1] = this.regionV + this.regionUVs[e + 1] * c
            }
    },
    computeWorldVertices: function (b, c, d, e) {
        var f = d.bone.skeleton.bones,
            g = this.weights,
            h = this.bones,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = h.length,
            q, p, s, r, o, t;
        if (d.attachmentVertices.length)
            for (var u = d.attachmentVertices; k <
                n; j = j + 2) {
                p = q = 0;
                for (d = h[k++] + k; k < d; k++, l = l + 3, m = m + 2) {
                    s = f[h[k]];
                    r = g[l] + u[m];
                    o = g[l + 1] + u[m + 1];
                    t = g[l + 2];
                    q = q + (r * s.m00 + o * s.m01 + s.worldX) * t;
                    p = p + (r * s.m10 + o * s.m11 + s.worldY) * t
                }
                e[j] = q + b;
                e[j + 1] = p + c
            } else
            for (; k < n; j = j + 2) {
                p = q = 0;
                for (d = h[k++] + k; k < d; k++, l = l + 3) {
                    s = f[h[k]];
                    r = g[l];
                    o = g[l + 1];
                    t = g[l + 2];
                    q = q + (r * s.m00 + o * s.m01 + s.worldX) * t;
                    p = p + (r * s.m10 + o * s.m11 + s.worldY) * t
                }
                e[j] = q + b;
                e[j + 1] = p + c
            }
    }
};
spine.BoundingBoxAttachment = function (b) {
    this.name = b;
    this.vertices = []
};
spine.BoundingBoxAttachment.prototype = {
    type: spine.AttachmentType.boundingbox,
    computeWorldVertices: function (b, c, d, e) {
        for (var b = b + d.worldX, c = c + d.worldY, f = d.m00, g = d.m01, h = d.m10, d = d.m11, j = this.vertices, k = 0, l = j.length; k < l; k = k + 2) {
            var m = j[k],
                n = j[k + 1];
            e[k] = m * f + n * g + b;
            e[k + 1] = m * h + n * d + c
        }
    }
};
spine.AnimationStateData = function (b) {
    this.skeletonData = b;
    this.animationToMixTime = {}
};
spine.AnimationStateData.prototype = {
    defaultMix: 0,
    setMixByName: function (b, c, d) {
        var e = this.skeletonData.findAnimation(b);
        if (!e) throw "Animation not found: " + b;
        b = this.skeletonData.findAnimation(c);
        if (!b) throw "Animation not found: " + c;
        this.setMix(e, b, d)
    },
    setMix: function (b, c, d) {
        this.animationToMixTime[b.name + ":" + c.name] = d
    },
    getMix: function (b, c) {
        var d = b.name + ":" + c.name;
        return this.animationToMixTime.hasOwnProperty(d) ? this.animationToMixTime[d] : this.defaultMix
    }
};
spine.TrackEntry = function () { };
spine.TrackEntry.prototype = {
    next: null,
    previous: null,
    animation: null,
    loop: !1,
    delay: 0,
    time: 0,
    lastTime: -1,
    endTime: 0,
    timeScale: 1,
    mixTime: 0,
    mixDuration: 0,
    mix: 1,
    onStart: null,
    onEnd: null,
    onComplete: null,
    onEvent: null
};
spine.AnimationState = function (b) {
    this.data = b;
    this.tracks = [];
    this.events = []
};
spine.AnimationState.prototype = {
    onStart: null,
    onEnd: null,
    onComplete: null,
    onEvent: null,
    timeScale: 1,
    update: function (b) {
        for (var b = b * this.timeScale, c = 0; c < this.tracks.length; c++) {
            var d = this.tracks[c];
            if (d) {
                d.time = d.time + b * d.timeScale;
                if (d.previous) {
                    var e = b * d.previous.timeScale;
                    d.previous.time = d.previous.time + e;
                    d.mixTime = d.mixTime + e
                }
                if (e = d.next) {
                    e.time = d.lastTime - e.delay;
                    e.time >= 0 && this.setCurrent(c, e)
                } else !d.loop && d.lastTime >= d.endTime && this.clearTrack(c)
            }
        }
    },
    apply: function (b) {
        for (var c = 0; c < this.tracks.length; c++) {
            var d =
                this.tracks[c];
            if (d) {
                this.events.length = 0;
                var e = d.time,
                    f = d.lastTime,
                    g = d.endTime,
                    h = d.loop;
                !h && e > g && (e = g);
                var j = d.previous;
                if (j) {
                    var k = j.time;
                    if (!j.loop && k > j.endTime) k = j.endTime;
                    j.animation.apply(b, k, k, j.loop, null);
                    j = d.mixTime / d.mixDuration * d.mix;
                    if (j >= 1) {
                        j = 1;
                        d.previous = null
                    }
                    d.animation.mix(b, d.lastTime, e, h, this.events, j)
                } else d.mix == 1 ? d.animation.apply(b, d.lastTime, e, h, this.events) : d.animation.mix(b, d.lastTime, e, h, this.events, d.mix);
                j = 0;
                for (k = this.events.length; j < k; j++) {
                    var l = this.events[j];
                    if (d.onEvent) d.onEvent(c,
                        l);
                    if (this.onEvent) this.onEvent(c, l)
                }
                if (h ? f % g > e % g : f < g && e >= g) {
                    e = Math.floor(e / g);
                    if (d.onComplete) d.onComplete(c, e);
                    if (this.onComplete) this.onComplete(c, e)
                }
                d.lastTime = d.time
            }
        }
    },
    clearTracks: function () {
        for (var b = 0, c = this.tracks.length; b < c; b++) this.clearTrack(b);
        this.tracks.length = 0
    },
    clearTrack: function (b) {
        if (!(b >= this.tracks.length)) {
            var c = this.tracks[b];
            if (c) {
                if (c.onEnd) c.onEnd(b);
                if (this.onEnd) this.onEnd(b);
                this.tracks[b] = null
            }
        }
    },
    _expandToIndex: function (b) {
        if (b < this.tracks.length) return this.tracks[b];
        for (; b >= this.tracks.length;) this.tracks.push(null);
        return null
    },
    setCurrent: function (b, c) {
        var d = this._expandToIndex(b);
        if (d) {
            var e = d.previous;
            d.previous = null;
            if (d.onEnd) d.onEnd(b);
            if (this.onEnd) this.onEnd(b);
            c.mixDuration = this.data.getMix(d.animation, c.animation);
            if (c.mixDuration > 0) {
                c.mixTime = 0;
                c.previous = e && d.mixTime / d.mixDuration < 0.5 ? e : d
            }
        }
        this.tracks[b] = c;
        if (c.onStart) c.onStart(b);
        if (this.onStart) this.onStart(b)
    },
    setAnimationByName: function (b, c, d) {
        var e = this.data.skeletonData.findAnimation(c);
        if (!e) throw "Animation not found: " +
            c;
        return this.setAnimation(b, e, d)
    },
    setAnimation: function (b, c, d) {
        var e = new spine.TrackEntry;
        e.animation = c;
        e.loop = d;
        e.endTime = c.duration;
        this.setCurrent(b, e);
        return e
    },
    addAnimationByName: function (b, c, d, e) {
        var f = this.data.skeletonData.findAnimation(c);
        if (!f) throw "Animation not found: " + c;
        return this.addAnimation(b, f, d, e)
    },
    addAnimation: function (b, c, d, e) {
        var f = new spine.TrackEntry;
        f.animation = c;
        f.loop = d;
        f.endTime = c.duration;
        if (d = this._expandToIndex(b)) {
            for (; d.next;) d = d.next;
            d.next = f
        } else this.tracks[b] =
            f;
        e <= 0 && (e = d ? e + (d.endTime - this.data.getMix(d.animation, c)) : 0);
        f.delay = e;
        return f
    },
    getCurrent: function (b) {
        return b >= this.tracks.length ? null : this.tracks[b]
    }
};
spine.SkeletonJson = function (b) {
    this.attachmentLoader = b
};
spine.SkeletonJson.prototype = {
    scale: 1,
    readSkeletonData: function (b, c) {
        var d = new spine.SkeletonData;
        d.name = c;
        var e = b.skeleton;
        if (e) {
            d.hash = e.hash;
            d.version = e.spine;
            d.width = e.width || 0;
            d.height = e.height || 0
        }
        for (var f = b.bones, e = 0, g = f.length; e < g; e++) {
            var h = f[e],
                j = null;
            if (h.parent) {
                j = d.findBone(h.parent);
                if (!j) throw "Parent bone not found: " + h.parent;
            }
            j = new spine.BoneData(h.name, j);
            j.length = (h.length || 0) * this.scale;
            j.x = (h.x || 0) * this.scale;
            j.y = (h.y || 0) * this.scale;
            j.rotation = h.rotation || 0;
            j.scaleX = h.hasOwnProperty("scaleX") ?
                h.scaleX : 1;
            j.scaleY = h.hasOwnProperty("scaleY") ? h.scaleY : 1;
            j.inheritScale = h.hasOwnProperty("inheritScale") ? h.inheritScale : true;
            j.inheritRotation = h.hasOwnProperty("inheritRotation") ? h.inheritRotation : true;
            d.bones.push(j)
        }
        if (j = b.ik) {
            e = 0;
            for (g = j.length; e < g; e++) {
                for (var h = j[e], k = new spine.IkConstraintData(h.name), f = h.bones, l = 0, m = f.length; l < m; l++) {
                    var n = d.findBone(f[l]);
                    if (!n) throw "IK bone not found: " + f[l];
                    k.bones.push(n)
                }
                k.target = d.findBone(h.target);
                if (!k.target) throw "Target bone not found: " + h.target;
                k.bendDirection = !h.hasOwnProperty("bendPositive") || h.bendPositive ? 1 : -1;
                k.mix = h.hasOwnProperty("mix") ? h.mix : 1;
                d.ikConstraints.push(k)
            }
        }
        f = b.slots;
        e = 0;
        for (g = f.length; e < g; e++) {
            h = f[e];
            j = d.findBone(h.bone);
            if (!j) throw "Slot bone not found: " + h.bone;
            j = new spine.SlotData(h.name, j);
            if (k = h.color) {
                j.r = this.toColor(k, 0);
                j.g = this.toColor(k, 1);
                j.b = this.toColor(k, 2);
                j.a = this.toColor(k, 3)
            }
            j.attachmentName = h.attachment;
            j.blendMode = spine.BlendMode[h.blend || "normal"];
            d.slots.push(j)
        }
        var e = b.skins,
            q;
        for (q in e)
            if (e.hasOwnProperty(q)) {
                var g =
                    e[q],
                    f = new spine.Skin(q),
                    p;
                for (p in g)
                    if (g.hasOwnProperty(p)) {
                        var j = d.findSlotIndex(p),
                            h = g[p],
                            s;
                        for (s in h)
                            if (h.hasOwnProperty(s)) (k = this.readAttachment(f, s, h[s])) && f.addAttachment(j, s, k)
                    }
                d.skins.push(f);
                if (f.name == "default") d.defaultSkin = f
            }
        q = b.events;
        for (var r in q)
            if (q.hasOwnProperty(r)) {
                p = q[r];
                s = new spine.EventData(r);
                s.intValue = p["int"] || 0;
                s.floatValue = p["float"] || 0;
                s.stringValue = p.string || null;
                d.events.push(s)
            }
        r = b.animations;
        for (var o in r) r.hasOwnProperty(o) && this.readAnimation(o, r[o], d);
        return d
    },
    readAttachment: function (b, c, d) {
        var c = d.name || c,
            e = spine.AttachmentType[d.type || "region"],
            f = d.path || c,
            g = this.scale;
        if (e == spine.AttachmentType.region) {
            b = this.attachmentLoader.newRegionAttachment(b, c, f);
            if (!b) return null;
            b.path = f;
            b.x = (d.x || 0) * g;
            b.y = (d.y || 0) * g;
            b.scaleX = d.hasOwnProperty("scaleX") ? d.scaleX : 1;
            b.scaleY = d.hasOwnProperty("scaleY") ? d.scaleY : 1;
            b.rotation = d.rotation || 0;
            b.width = (d.width || 0) * g;
            b.height = (d.height || 0) * g;
            if (f = d.color) {
                b.r = this.toColor(f, 0);
                b.g = this.toColor(f, 1);
                b.b = this.toColor(f, 2);
                b.a = this.toColor(f, 3)
            }
            b.updateOffset();
            return b
        }
        if (e == spine.AttachmentType.mesh) {
            b = this.attachmentLoader.newMeshAttachment(b, c, f);
            if (!b) return null;
            b.path = f;
            b.vertices = this.getFloatArray(d, "vertices", g);
            b.triangles = this.getIntArray(d, "triangles");
            b.regionUVs = this.getFloatArray(d, "uvs", 1);
            b.updateUVs();
            if (f = d.color) {
                b.r = this.toColor(f, 0);
                b.g = this.toColor(f, 1);
                b.b = this.toColor(f, 2);
                b.a = this.toColor(f, 3)
            }
            b.hullLength = (d.hull || 0) * 2;
            if (d.edges) b.edges = this.getIntArray(d, "edges");
            b.width = (d.width || 0) * g;
            b.height = (d.height || 0) * g;
            return b
        }
        if (e == spine.AttachmentType.skinnedmesh) {
            b = this.attachmentLoader.newSkinnedMeshAttachment(b, c, f);
            if (!b) return null;
            b.path = f;
            for (var h = this.getFloatArray(d, "uvs", 1), f = this.getFloatArray(d, "vertices", 1), j = [], k = [], c = 0, e = f.length; c < e;) {
                var l = f[c++] | 0;
                k[k.length] = l;
                for (l = c + l * 4; c < l;) {
                    k[k.length] = f[c];
                    j[j.length] = f[c + 1] * g;
                    j[j.length] = f[c + 2] * g;
                    j[j.length] = f[c + 3];
                    c = c + 4
                }
            }
            b.bones = k;
            b.weights = j;
            b.triangles = this.getIntArray(d, "triangles");
            b.regionUVs = h;
            b.updateUVs();
            if (f = d.color) {
                b.r =
                    this.toColor(f, 0);
                b.g = this.toColor(f, 1);
                b.b = this.toColor(f, 2);
                b.a = this.toColor(f, 3)
            }
            b.hullLength = (d.hull || 0) * 2;
            if (d.edges) b.edges = this.getIntArray(d, "edges");
            b.width = (d.width || 0) * g;
            b.height = (d.height || 0) * g;
            return b
        }
        if (e == spine.AttachmentType.boundingbox) {
            b = this.attachmentLoader.newBoundingBoxAttachment(b, c);
            f = d.vertices;
            c = 0;
            for (e = f.length; c < e; c++) b.vertices.push(f[c] * g);
            return b
        }
        throw "Unknown attachment type: " + e;
    },
    readAnimation: function (b, c, d) {
        var e = [],
            f = 0,
            g = c.slots,
            h;
        for (h in g)
            if (g.hasOwnProperty(h)) {
                var j =
                    g[h],
                    k = d.findSlotIndex(h),
                    l;
                for (l in j)
                    if (j.hasOwnProperty(l)) {
                        var m = j[l];
                        if (l == "color") {
                            var n = new spine.ColorTimeline(m.length);
                            n.slotIndex = k;
                            for (var q = 0, p = 0, s = m.length; p < s; p++) {
                                var r = m[p],
                                    o = r.color,
                                    t = this.toColor(o, 0),
                                    u = this.toColor(o, 1),
                                    w = this.toColor(o, 2),
                                    o = this.toColor(o, 3);
                                n.setFrame(q, r.time, t, u, w, o);
                                this.readCurve(n, q, r);
                                q++
                            }
                            e.push(n);
                            f = Math.max(f, n.frames[n.getFrameCount() * 5 - 5])
                        } else if (l == "attachment") {
                            n = new spine.AttachmentTimeline(m.length);
                            n.slotIndex = k;
                            p = q = 0;
                            for (s = m.length; p < s; p++) {
                                r =
                                    m[p];
                                n.setFrame(q++, r.time, r.name)
                            }
                            e.push(n);
                            f = Math.max(f, n.frames[n.getFrameCount() - 1])
                        } else throw "Invalid timeline type for a slot: " + l + " (" + h + ")";
                    }
            }
        var k = c.bones,
            z;
        for (z in k)
            if (k.hasOwnProperty(z)) {
                j = d.findBoneIndex(z);
                if (j == -1) throw "Bone not found: " + z;
                g = k[z];
                for (l in g)
                    if (g.hasOwnProperty(l)) {
                        m = g[l];
                        if (l == "rotate") {
                            n = new spine.RotateTimeline(m.length);
                            n.boneIndex = j;
                            p = q = 0;
                            for (s = m.length; p < s; p++) {
                                r = m[p];
                                n.setFrame(q, r.time, r.angle);
                                this.readCurve(n, q, r);
                                q++
                            }
                            e.push(n);
                            f = Math.max(f, n.frames[n.getFrameCount() *
                                2 - 2])
                        } else if (l == "translate" || l == "scale") {
                            t = 1;
                            if (l == "scale") n = new spine.ScaleTimeline(m.length);
                            else {
                                n = new spine.TranslateTimeline(m.length);
                                t = this.scale
                            }
                            n.boneIndex = j;
                            p = q = 0;
                            for (s = m.length; p < s; p++) {
                                r = m[p];
                                u = (r.x || 0) * t;
                                n.setFrame(q, r.time, u, (r.y || 0) * t);
                                this.readCurve(n, q, r);
                                q++
                            }
                            e.push(n);
                            f = Math.max(f, n.frames[n.getFrameCount() * 3 - 3])
                        } else if (l == "flipX" || l == "flipY") {
                            n = (u = l == "flipX") ? new spine.FlipXTimeline(m.length) : new spine.FlipYTimeline(m.length);
                            n.boneIndex = j;
                            t = u ? "x" : "y";
                            p = q = 0;
                            for (s = m.length; p < s; p++) {
                                r =
                                    m[p];
                                n.setFrame(q, r.time, r[t] || false);
                                q++
                            }
                            e.push(n);
                            f = Math.max(f, n.frames[n.getFrameCount() * 2 - 2])
                        } else throw "Invalid timeline type for a bone: " + l + " (" + z + ")";
                    }
            }
        var k = c.ik,
            A;
        for (A in k)
            if (k.hasOwnProperty(A)) {
                q = d.findIkConstraint(A);
                m = k[A];
                n = new spine.IkConstraintTimeline(m.length);
                n.ikConstraintIndex = d.ikConstraints.indexOf(q);
                p = q = 0;
                for (s = m.length; p < s; p++) {
                    r = m[p];
                    j = r.hasOwnProperty("mix") ? r.mix : 1;
                    l = !r.hasOwnProperty("bendPositive") || r.bendPositive ? 1 : -1;
                    n.setFrame(q, r.time, j, l);
                    this.readCurve(n, q,
                        r);
                    q++
                }
                e.push(n);
                f = Math.max(f, n.frames[n.frameCount * 3 - 3])
            }
        z = c.ffd;
        for (var C in z) {
            g = d.findSkin(C);
            j = z[C];
            for (h in j) {
                var k = d.findSlotIndex(h),
                    t = j[h],
                    G;
                for (G in t) {
                    m = t[G];
                    n = new spine.FfdTimeline(m.length);
                    u = g.getAttachment(k, G);
                    if (!u) throw "FFD attachment not found: " + G;
                    n.slotIndex = k;
                    n.attachment = u;
                    o = (w = u.type == spine.AttachmentType.mesh) ? u.vertices.length : u.weights.length / 3 * 2;
                    p = q = 0;
                    for (s = m.length; p < s; p++) {
                        var r = m[p],
                            H;
                        if (r.vertices) {
                            var K = r.vertices;
                            H = [];
                            H.length = o;
                            var P = r.offset || 0;
                            A = K.length;
                            if (this.scale ==
                                1)
                                for (l = 0; l < A; l++) H[l + P] = K[l];
                            else
                                for (l = 0; l < A; l++) H[l + P] = K[l] * this.scale;
                            if (w) {
                                K = u.vertices;
                                l = 0;
                                for (A = H.length; l < A; l++) H[l] = H[l] + K[l]
                            }
                        } else if (w) H = u.vertices;
                        else {
                            H = [];
                            H.length = o
                        }
                        n.setFrame(q, r.time, H);
                        this.readCurve(n, q, r);
                        q++
                    }
                    e[e.length] = n;
                    f = Math.max(f, n.frames[n.frameCount - 1])
                }
            }
        } (h = c.drawOrder) || (h = c.draworder);
        if (h) {
            n = new spine.DrawOrderTimeline(h.length);
            m = d.slots.length;
            p = q = 0;
            for (s = h.length; p < s; p++) {
                C = h[p];
                G = null;
                if (C.offsets) {
                    G = [];
                    G.length = m;
                    for (l = m - 1; l >= 0; l--) G[l] = -1;
                    r = C.offsets;
                    j = [];
                    j.length =
                        m - r.length;
                    l = g = z = 0;
                    for (A = r.length; l < A; l++) {
                        t = r[l];
                        k = d.findSlotIndex(t.slot);
                        if (k == -1) throw "Slot not found: " + t.slot;
                        for (; z != k;) j[g++] = z++;
                        G[z + t.offset] = z++
                    }
                    for (; z < m;) j[g++] = z++;
                    for (l = m - 1; l >= 0; l--) G[l] == -1 && (G[l] = j[--g])
                }
                n.setFrame(q++, C.time, G)
            }
            e.push(n);
            f = Math.max(f, n.frames[n.getFrameCount() - 1])
        }
        if (c = c.events) {
            n = new spine.EventTimeline(c.length);
            p = q = 0;
            for (s = c.length; p < s; p++) {
                h = c[p];
                m = d.findEvent(h.name);
                if (!m) throw "Event not found: " + h.name;
                C = new spine.Event(m);
                C.intValue = h.hasOwnProperty("int") ?
                    h["int"] : m.intValue;
                C.floatValue = h.hasOwnProperty("float") ? h["float"] : m.floatValue;
                C.stringValue = h.hasOwnProperty("string") ? h.string : m.stringValue;
                n.setFrame(q++, h.time, C)
            }
            e.push(n);
            f = Math.max(f, n.frames[n.getFrameCount() - 1])
        }
        d.animations.push(new spine.Animation(b, e, f))
    },
    readCurve: function (b, c, d) {
        (d = d.curve) ? d == "stepped" ? b.curves.setStepped(c) : d instanceof Array && b.curves.setCurve(c, d[0], d[1], d[2], d[3]) : b.curves.setLinear(c)
    },
    toColor: function (b, c) {
        if (b.length != 8) throw "Color hexidecimal length must be 8, recieved: " +
            b;
        return parseInt(b.substring(c * 2, c * 2 + 2), 16) / 255
    },
    getFloatArray: function (b, c, d) {
        var b = b[c],
            c = new spine.Float32Array(b.length),
            e = 0,
            f = b.length;
        if (d == 1)
            for (; e < f; e++) c[e] = b[e];
        else
            for (; e < f; e++) c[e] = b[e] * d;
        return c
    },
    getIntArray: function (b, c) {
        for (var d = b[c], e = new spine.Uint16Array(d.length), f = 0, g = d.length; f < g; f++) e[f] = d[f] | 0;
        return e
    }
};
spine.Atlas = function (b, c) {
    this.textureLoader = c;
    this.pages = [];
    this.regions = [];
    var d = new spine.AtlasReader(b),
        e = [];
    e.length = 4;
    for (var f = null; ;) {
        var g = d.readLine();
        if (g === null) break;
        g = d.trim(g);
        if (g.length)
            if (f) {
                var h = new spine.AtlasRegion;
                h.name = g;
                h.page = f;
                h.rotate = d.readValue() == "true";
                d.readTuple(e);
                var g = parseInt(e[0]),
                    j = parseInt(e[1]);
                d.readTuple(e);
                var k = parseInt(e[0]),
                    l = parseInt(e[1]);
                h.u = g / f.width;
                h.v = j / f.height;
                if (h.rotate) {
                    h.u2 = (g + l) / f.width;
                    h.v2 = (j + k) / f.height
                } else {
                    h.u2 = (g + k) / f.width;
                    h.v2 =
                        (j + l) / f.height
                }
                h.x = g;
                h.y = j;
                h.width = Math.abs(k);
                h.height = Math.abs(l);
                if (d.readTuple(e) == 4) {
                    h.splits = [parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), parseInt(e[3])];
                    if (d.readTuple(e) == 4) {
                        h.pads = [parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), parseInt(e[3])];
                        d.readTuple(e)
                    }
                }
                h.originalWidth = parseInt(e[0]);
                h.originalHeight = parseInt(e[1]);
                d.readTuple(e);
                h.offsetX = parseInt(e[0]);
                h.offsetY = parseInt(e[1]);
                h.index = parseInt(d.readValue());
                this.regions.push(h)
            } else {
                f = new spine.AtlasPage;
                f.name = g;
                if (d.readTuple(e) ==
                    2) {
                    f.width = parseInt(e[0]);
                    f.height = parseInt(e[1]);
                    d.readTuple(e)
                }
                f.format = spine.Atlas.Format[e[0]];
                d.readTuple(e);
                f.minFilter = spine.Atlas.TextureFilter[e[0]];
                f.magFilter = spine.Atlas.TextureFilter[e[1]];
                h = d.readValue();
                f.uWrap = spine.Atlas.TextureWrap.clampToEdge;
                f.vWrap = spine.Atlas.TextureWrap.clampToEdge;
                if (h == "x") f.uWrap = spine.Atlas.TextureWrap.repeat;
                else if (h == "y") f.vWrap = spine.Atlas.TextureWrap.repeat;
                else if (h == "xy") f.uWrap = f.vWrap = spine.Atlas.TextureWrap.repeat;
                c.load(f, g, this);
                this.pages.push(f)
            }
        else f =
            null
    }
};
spine.Atlas.prototype = {
    findRegion: function (b) {
        for (var c = this.regions, d = 0, e = c.length; d < e; d++)
            if (c[d].name == b) return c[d];
        return null
    },
    dispose: function () {
        for (var b = this.pages, c = 0, d = b.length; c < d; c++) this.textureLoader.unload(b[c].rendererObject)
    },
    updateUVs: function (b) {
        for (var c = this.regions, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (f.page == b) {
                f.u = f.x / b.width;
                f.v = f.y / b.height;
                if (f.rotate) {
                    f.u2 = (f.x + f.height) / b.width;
                    f.v2 = (f.y + f.width) / b.height
                } else {
                    f.u2 = (f.x + f.width) / b.width;
                    f.v2 = (f.y + f.height) / b.height
                }
            }
        }
    }
};
spine.Atlas.Format = {
    alpha: 0,
    intensity: 1,
    luminanceAlpha: 2,
    rgb565: 3,
    rgba4444: 4,
    rgb888: 5,
    rgba8888: 6
};
spine.Atlas.TextureFilter = {
    nearest: 0,
    linear: 1,
    mipMap: 2,
    mipMapNearestNearest: 3,
    mipMapLinearNearest: 4,
    mipMapNearestLinear: 5,
    mipMapLinearLinear: 6
};
spine.Atlas.TextureWrap = {
    mirroredRepeat: 0,
    clampToEdge: 1,
    repeat: 2
};
spine.AtlasPage = function () { };
spine.AtlasPage.prototype = {
    name: null,
    format: null,
    minFilter: null,
    magFilter: null,
    uWrap: null,
    vWrap: null,
    rendererObject: null,
    width: 0,
    height: 0
};
spine.AtlasRegion = function () { };
spine.AtlasRegion.prototype = {
    page: null,
    name: null,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    u: 0,
    v: 0,
    u2: 0,
    v2: 0,
    offsetX: 0,
    offsetY: 0,
    originalWidth: 0,
    originalHeight: 0,
    index: 0,
    rotate: !1,
    splits: null,
    pads: null
};
spine.AtlasReader = function (b) {
    this.lines = b.split(/\r\n|\r|\n/)
};
spine.AtlasReader.prototype = {
    index: 0,
    trim: function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    },
    readLine: function () {
        return this.index >= this.lines.length ? null : this.lines[this.index++]
    },
    readValue: function () {
        var b = this.readLine(),
            c = b.indexOf(":");
        if (c == -1) throw "Invalid line: " + b;
        return this.trim(b.substring(c + 1))
    },
    readTuple: function (b) {
        var c = this.readLine(),
            d = c.indexOf(":");
        if (d == -1) throw "Invalid line: " + c;
        for (var e = 0, d = d + 1; e < 3; e++) {
            var f = c.indexOf(",", d);
            if (f == -1) break;
            b[e] = this.trim(c.substr(d, f - d));
            d = f +
                1
        }
        b[e] = this.trim(c.substring(d));
        return e + 1
    }
};
spine.AtlasAttachmentLoader = function (b) {
    this.atlas = b
};
spine.AtlasAttachmentLoader.prototype = {
    newRegionAttachment: function (b, c, d) {
        b = this.atlas.findRegion(d);
        if (!b) throw "Region not found in atlas: " + d + " (region attachment: " + c + ")";
        c = new spine.RegionAttachment(c);
        c.rendererObject = b;
        c.setUVs(b.u, b.v, b.u2, b.v2, b.rotate);
        c.regionOffsetX = b.offsetX;
        c.regionOffsetY = b.offsetY;
        c.regionWidth = b.width;
        c.regionHeight = b.height;
        c.regionOriginalWidth = b.originalWidth;
        c.regionOriginalHeight = b.originalHeight;
        return c
    },
    newMeshAttachment: function (b, c, d) {
        b = this.atlas.findRegion(d);
        if (!b) throw "Region not found in atlas: " + d + " (mesh attachment: " + c + ")";
        c = new spine.MeshAttachment(c);
        c.rendererObject = b;
        c.regionU = b.u;
        c.regionV = b.v;
        c.regionU2 = b.u2;
        c.regionV2 = b.v2;
        c.regionRotate = b.rotate;
        c.regionOffsetX = b.offsetX;
        c.regionOffsetY = b.offsetY;
        c.regionWidth = b.width;
        c.regionHeight = b.height;
        c.regionOriginalWidth = b.originalWidth;
        c.regionOriginalHeight = b.originalHeight;
        return c
    },
    newSkinnedMeshAttachment: function (b, c, d) {
        b = this.atlas.findRegion(d);
        if (!b) throw "Region not found in atlas: " + d +
            " (skinned mesh attachment: " + c + ")";
        c = new spine.SkinnedMeshAttachment(c);
        c.rendererObject = b;
        c.regionU = b.u;
        c.regionV = b.v;
        c.regionU2 = b.u2;
        c.regionV2 = b.v2;
        c.regionRotate = b.rotate;
        c.regionOffsetX = b.offsetX;
        c.regionOffsetY = b.offsetY;
        c.regionWidth = b.width;
        c.regionHeight = b.height;
        c.regionOriginalWidth = b.originalWidth;
        c.regionOriginalHeight = b.originalHeight;
        return c
    },
    newBoundingBoxAttachment: function (b, c) {
        return new spine.BoundingBoxAttachment(c)
    }
};
spine.SkeletonBounds = function () {
    this.polygonPool = [];
    this.polygons = [];
    this.boundingBoxes = []
};
spine.SkeletonBounds.prototype = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
    update: function (b, c) {
        for (var d = b.slots, e = d.length, f = b.x, g = b.y, h = this.boundingBoxes, j = this.polygonPool, k = this.polygons, l = h.length = 0, m = k.length; l < m; l++) j.push(k[l]);
        for (l = k.length = 0; l < e; l++) {
            var m = d[l],
                n = m.attachment;
            if (n && n.type == spine.AttachmentType.boundingbox) {
                h.push(n);
                var q = j.length,
                    p;
                if (q > 0) {
                    p = j[q - 1];
                    j.splice(q - 1, 1)
                } else p = [];
                k.push(p);
                p.length = n.vertices.length;
                n.computeWorldVertices(f, g, m.bone, p)
            }
        }
        c && this.aabbCompute()
    },
    aabbCompute: function () {
        for (var b =
                this.polygons, c = Number.MAX_VALUE, d = Number.MAX_VALUE, e = Number.MIN_VALUE, f = Number.MIN_VALUE, g = 0, h = b.length; g < h; g++)
            for (var j = b[g], k = 0, l = j.length; k < l; k = k + 2) var m = j[k],
                n = j[k + 1],
                c = Math.min(c, m),
                d = Math.min(d, n),
                e = Math.max(e, m),
                f = Math.max(f, n);
        this.minX = c;
        this.minY = d;
        this.maxX = e;
        this.maxY = f
    },
    aabbContainsPoint: function (b, c) {
        return b >= this.minX && b <= this.maxX && c >= this.minY && c <= this.maxY
    },
    aabbIntersectsSegment: function (b, c, d, e) {
        var f = this.minX,
            g = this.minY,
            h = this.maxX,
            j = this.maxY;
        if (b <= f && d <= f || c <= g && e <= g || b >=
            h && d >= h || c >= j && e >= j) return false;
        d = (e - c) / (d - b);
        e = d * (f - b) + c;
        if (e > g && e < j) return true;
        e = d * (h - b) + c;
        if (e > g && e < j) return true;
        g = (g - c) / d + b;
        if (g > f && g < h) return true;
        g = (j - c) / d + b;
        return g > f && g < h ? true : false
    },
    aabbIntersectsSkeleton: function (b) {
        return this.minX < b.maxX && this.maxX > b.minX && this.minY < b.maxY && this.maxY > b.minY
    },
    containsPoint: function (b, c) {
        for (var d = this.polygons, e = 0, f = d.length; e < f; e++)
            if (this.polygonContainsPoint(d[e], b, c)) return this.boundingBoxes[e];
        return null
    },
    intersectsSegment: function (b, c, d, e) {
        for (var f =
                this.polygons, g = 0, h = f.length; g < h; g++)
            if (f[g].intersectsSegment(b, c, d, e)) return this.boundingBoxes[g];
        return null
    },
    polygonContainsPoint: function (b, c, d) {
        for (var e = b.length, f = e - 2, g = false, h = 0; h < e; h = h + 2) {
            var j = b[h + 1],
                k = b[f + 1];
            if (j < d && k >= d || k < d && j >= d) {
                var l = b[h];
                l + (d - j) / (k - j) * (b[f] - l) < c && (g = !g)
            }
            f = h
        }
        return g
    },
    polygonIntersectsSegment: function (b, c, d, e, f) {
        for (var g = b.length, h = c - e, j = d - f, k = c * f - d * e, l = b[g - 2], m = b[g - 1], n = 0; n < g; n = n + 2) {
            var q = b[n],
                p = b[n + 1],
                s = l * p - m * q,
                r = l - q,
                o = m - p,
                t = h * o - j * r,
                r = (k * r - h * s) / t;
            if ((r >= l && r <=
                    q || r >= q && r <= l) && (r >= c && r <= e || r >= e && r <= c)) {
                l = (k * o - j * s) / t;
                if ((l >= m && l <= p || l >= p && l <= m) && (l >= d && l <= f || l >= f && l <= d)) return true
            }
            l = q;
            m = p
        }
        return false
    },
    getPolygon: function (b) {
        b = this.boundingBoxes.indexOf(b);
        return b == -1 ? null : this.polygons[b]
    },
    getWidth: function () {
        return this.maxX - this.minX
    },
    getHeight: function () {
        return this.maxY - this.minY
    }
};
spine.SkeletonImageBounds = function () {
    this.polygonPool = [];
    this.polygons = []
};
spine.SkeletonImageBounds.prototype = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
    update: function (b, c) {
        for (var d = b.slots, e = d.length, f = b.x, g = b.y, h = this.polygonPool, j = this.polygons, k = 0, l = j.length; k < l; k++) h.push(j[k]);
        for (k = j.length = 0; k < e; k++) {
            var l = d[k],
                m = l.attachment;
            if (m && m.type == spine.AttachmentType.region) {
                var n = h.length,
                    q;
                if (n > 0) {
                    q = h[n - 1];
                    h.splice(n - 1, 1)
                } else q = [];
                j.push(q);
                q.length = 8;
                m.computeVertices(f, g, l.bone, q)
            }
        }
        c && this.aabbCompute()
    },
    aabbCompute: function () {
        for (var b = this.polygons, c = Number.MAX_VALUE, d = Number.MAX_VALUE,
                e = Number.MIN_VALUE, f = Number.MIN_VALUE, g = 0, h = b.length; g < h; g++)
            for (var j = b[g], k = 0, l = j.length; k < l; k = k + 2) var m = j[k],
                n = j[k + 1],
                c = Math.min(c, m),
                d = Math.min(d, n),
                e = Math.max(e, m),
                f = Math.max(f, n);
        this.minX = c;
        this.minY = d;
        this.maxX = e;
        this.maxY = f
    },
    aabbContainsPoint: function (b, c) {
        return b >= this.minX && b <= this.maxX && c >= this.minY && c <= this.maxY
    },
    aabbIntersectsSegment: function (b, c, d, e) {
        var f = this.minX,
            g = this.minY,
            h = this.maxX,
            j = this.maxY;
        if (b <= f && d <= f || c <= g && e <= g || b >= h && d >= h || c >= j && e >= j) return false;
        d = (e - c) / (d - b);
        e = d *
            (f - b) + c;
        if (e > g && e < j) return true;
        e = d * (h - b) + c;
        if (e > g && e < j) return true;
        g = (g - c) / d + b;
        if (g > f && g < h) return true;
        g = (j - c) / d + b;
        return g > f && g < h ? true : false
    },
    aabbIntersectsSkeleton: function (b) {
        return this.minX < b.maxX && this.maxX > b.minX && this.minY < b.maxY && this.maxY > b.minY
    },
    containsPoint: function (b, c) {
        for (var d = this.polygons, e = 0, f = d.length; e < f; e++)
            if (this.polygonContainsPoint(d[e], b, c)) return this.boundingBoxes[e];
        return null
    },
    intersectsSegment: function (b, c, d, e) {
        for (var f = this.polygons, g = 0, h = f.length; g < h; g++)
            if (f[g].intersectsSegment(b,
                    c, d, e)) return this.boundingBoxes[g];
        return null
    },
    polygonContainsPoint: function (b, c, d) {
        for (var e = b.length, f = e - 2, g = false, h = 0; h < e; h = h + 2) {
            var j = b[h + 1],
                k = b[f + 1];
            if (j < d && k >= d || k < d && j >= d) {
                var l = b[h];
                l + (d - j) / (k - j) * (b[f] - l) < c && (g = !g)
            }
            f = h
        }
        return g
    },
    polygonIntersectsSegment: function (b, c, d, e, f) {
        for (var g = b.length, h = c - e, j = d - f, k = c * f - d * e, l = b[g - 2], m = b[g - 1], n = 0; n < g; n = n + 2) {
            var q = b[n],
                p = b[n + 1],
                s = l * p - m * q,
                r = l - q,
                o = m - p,
                t = h * o - j * r,
                r = (k * r - h * s) / t;
            if ((r >= l && r <= q || r >= q && r <= l) && (r >= c && r <= e || r >= e && r <= c)) {
                l = (k * o - j * s) / t;
                if ((l >= m &&
                        l <= p || l >= p && l <= m) && (l >= d && l <= f || l >= f && l <= d)) return true
            }
            l = q;
            m = p
        }
        return false
    },
    getPolygon: function (b) {
        b = this.boundingBoxes.indexOf(b);
        return b == -1 ? null : this.polygons[b]
    },
    getWidth: function () {
        return this.maxX - this.minX
    },
    getHeight: function () {
        return this.maxY - this.minY
    }
};