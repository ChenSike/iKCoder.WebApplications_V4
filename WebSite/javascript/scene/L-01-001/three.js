var ThreeJSFn = function (t, e, i) {
    var n, r, o = {
        REVISION: "75"
    };
    n = o,
    r = "function" == typeof n ? n.call(e, i, e, t) : n,
    !(void 0 !== r && (t.exports = r)),
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Math.sign && (Math.sign = function (t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }),
    void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
        get: function () {
            return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
        }
    }),
    void 0 === Object.assign && Object.defineProperty(Object, "assign", {
        writable: !0,
        configurable: !0,
        value: function (t) {
            "use strict";
            if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
            for (var e = Object(t), i = 1, n = arguments.length; i !== n; ++i) {
                var r = arguments[i];
                if (void 0 !== r && null !== r) {
                    r = Object(r);
                    for (var o = Object.keys(r), s = 0, a = o.length; s !== a; ++s) {
                        var h = o[s],
                            l = Object.getOwnPropertyDescriptor(r, h);
                        void 0 !== l && l.enumerable && (e[h] = r[h])
                    }
                }
            }
            return e
        }
    }),
    o.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    },
    o.CullFaceNone = 0,
    o.CullFaceBack = 1,
    o.CullFaceFront = 2,
    o.CullFaceFrontBack = 3,
    o.FrontFaceDirectionCW = 0,
    o.FrontFaceDirectionCCW = 1,
    o.BasicShadowMap = 0,
    o.PCFShadowMap = 1,
    o.PCFSoftShadowMap = 2,
    o.FrontSide = 0,
    o.BackSide = 1,
    o.DoubleSide = 2,
    o.FlatShading = 1,
    o.SmoothShading = 2,
    o.NoColors = 0,
    o.FaceColors = 1,
    o.VertexColors = 2,
    o.NoBlending = 0,
    o.NormalBlending = 1,
    o.AdditiveBlending = 2,
    o.SubtractiveBlending = 3,
    o.MultiplyBlending = 4,
    o.CustomBlending = 5,
    o.AddEquation = 100,
    o.SubtractEquation = 101,
    o.ReverseSubtractEquation = 102,
    o.MinEquation = 103,
    o.MaxEquation = 104,
    o.ZeroFactor = 200,
    o.OneFactor = 201,
    o.SrcColorFactor = 202,
    o.OneMinusSrcColorFactor = 203,
    o.SrcAlphaFactor = 204,
    o.OneMinusSrcAlphaFactor = 205,
    o.DstAlphaFactor = 206,
    o.OneMinusDstAlphaFactor = 207,
    o.DstColorFactor = 208,
    o.OneMinusDstColorFactor = 209,
    o.SrcAlphaSaturateFactor = 210, o.NeverDepth = 0, o.AlwaysDepth = 1, o.LessDepth = 2, o.LessEqualDepth = 3, o.EqualDepth = 4,
    o.GreaterEqualDepth = 5, o.GreaterDepth = 6, o.NotEqualDepth = 7, o.MultiplyOperation = 0, o.MixOperation = 1, o.AddOperation = 2,
    o.NoToneMapping = 0, o.LinearToneMapping = 1, o.ReinhardToneMapping = 2, o.Uncharted2ToneMapping = 3, o.CineonToneMapping = 4,
    o.UVMapping = 300, o.CubeReflectionMapping = 301, o.CubeRefractionMapping = 302, o.EquirectangularReflectionMapping = 303,
    o.EquirectangularRefractionMapping = 304, o.SphericalReflectionMapping = 305, o.CubeUVReflectionMapping = 306,
    o.CubeUVRefractionMapping = 307, o.RepeatWrapping = 1e3, o.ClampToEdgeWrapping = 1001, o.MirroredRepeatWrapping = 1002,
    o.NearestFilter = 1003, o.NearestMipMapNearestFilter = 1004, o.NearestMipMapLinearFilter = 1005, o.LinearFilter = 1006,
    o.LinearMipMapNearestFilter = 1007, o.LinearMipMapLinearFilter = 1008, o.UnsignedByteType = 1009, o.ByteType = 1010,
    o.ShortType = 1011, o.UnsignedShortType = 1012, o.IntType = 1013, o.UnsignedIntType = 1014, o.FloatType = 1015,
    o.HalfFloatType = 1025, o.UnsignedShort4444Type = 1016, o.UnsignedShort5551Type = 1017, o.UnsignedShort565Type = 1018,
    o.AlphaFormat = 1019, o.RGBFormat = 1020, o.RGBAFormat = 1021, o.LuminanceFormat = 1022, o.LuminanceAlphaFormat = 1023,
    o.RGBEFormat = o.RGBAFormat, o.RGB_S3TC_DXT1_Format = 2001, o.RGBA_S3TC_DXT1_Format = 2002, o.RGBA_S3TC_DXT3_Format = 2003,
    o.RGBA_S3TC_DXT5_Format = 2004, o.RGB_PVRTC_4BPPV1_Format = 2100, o.RGB_PVRTC_2BPPV1_Format = 2101, o.RGBA_PVRTC_4BPPV1_Format = 2102,
    o.RGBA_PVRTC_2BPPV1_Format = 2103, o.RGB_ETC1_Format = 2151, o.LoopOnce = 2200, o.LoopRepeat = 2201, o.LoopPingPong = 2202,
    o.InterpolateDiscrete = 2300, o.InterpolateLinear = 2301, o.InterpolateSmooth = 2302, o.ZeroCurvatureEnding = 2400, o.ZeroSlopeEnding = 2401,
    o.WrapAroundEnding = 2402, o.TrianglesDrawMode = 0, o.TriangleStripDrawMode = 1, o.TriangleFanDrawMode = 2, o.LinearEncoding = 3e3,
    o.sRGBEncoding = 3001, o.GammaEncoding = 3007, o.RGBEEncoding = 3002, o.LogLuvEncoding = 3003, o.RGBM7Encoding = 3004,
    o.RGBM16Encoding = 3005, o.RGBDEncoding = 3006, o.Color = function (t) {
        return 3 === arguments.length ? this.fromArray(arguments) : this.set(t)
    }, o.Color.prototype = {
        constructor: o.Color,
        r: 1,
        g: 1,
        b: 1,
        set: function (t) {
            return t instanceof o.Color ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setScalar: function (t) {
            this.r = t, this.g = t, this.b = t
        },
        setHex: function (t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function (t, e, i) {
            return this.r = t, this.g = e, this.b = i, this
        },
        setHSL: function () {
            function t(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            return function (e, i, n) {
                if (e = o.Math.euclideanModulo(e, 1), i = o.Math.clamp(i, 0, 1), n = o.Math.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
                else {
                    var r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        s = 2 * n - r;
                    this.r = t(s, r, e + 1 / 3), this.g = t(s, r, e), this.b = t(s, r, e - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function (t) {
            function e(t) {
                void 0 !== t && parseFloat(t) < 1
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var n, r = i[1],
                    s = i[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
                        if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)) {
                            var a = parseFloat(n[1]) / 360,
                                h = parseInt(n[2], 10) / 100,
                                l = parseInt(n[3], 10) / 100;
                            return e(n[5]), this.setHSL(a, h, l)
                        }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var c = i[1],
                    u = c.length;
                if (3 === u) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                if (6 === u) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
            }
            if (t && t.length > 0) {
                var c = o.ColorKeywords[t];
                void 0 !== c && this.setHex(c)
            }
            return this
        },
        clone: function () {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function (t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function (t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function (t, e) {
            void 0 === e && (e = 2);
            var i = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
        },
        convertGammaToLinear: function () {
            var t = this.r,
                e = this.g,
                i = this.b;
            return this.r = t * t, this.g = e * e, this.b = i * i, this
        },
        convertLinearToGamma: function () {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function (t) {
            var e, i, n = t || {
                h: 0,
                s: 0,
                l: 0
            },
                r = this.r,
                o = this.g,
                s = this.b,
                a = Math.max(r, o, s),
                h = Math.min(r, o, s),
                l = (h + a) / 2;
            if (h === a) e = 0, i = 0;
            else {
                var c = a - h;
                switch (i = l <= .5 ? c / (a + h) : c / (2 - a - h), a) {
                    case r:
                        e = (o - s) / c + (o < s ? 6 : 0);
                        break;
                    case o:
                        e = (s - r) / c + 2;
                        break;
                    case s:
                        e = (r - o) / c + 4
                }
                e /= 6
            }
            return n.h = e, n.s = i, n.l = l, n
        },
        getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function (t, e, i) {
            var n = this.getHSL();
            return n.h += t, n.s += e, n.l += i, this.setHSL(n.h, n.s, n.l), this
        },
        add: function (t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function (t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function (t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        multiply: function (t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function (t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function (t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        equals: function (t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        }
    }, o.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    o.Quaternion = function (t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
    }, o.Quaternion.prototype = {
        constructor: o.Quaternion,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(t) {
            this._w = t, this.onChangeCallback()
        },
        set: function (t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function (t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        },
        setFromEuler: function (t, e) {
            if (t instanceof o.Euler == !1) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var i = Math.cos(t._x / 2),
                n = Math.cos(t._y / 2),
                r = Math.cos(t._z / 2),
                s = Math.sin(t._x / 2),
                a = Math.sin(t._y / 2),
                h = Math.sin(t._z / 2),
                l = t.order;
            return "XYZ" === l ? (this._x = s * n * r + i * a * h, this._y = i * a * r - s * n * h, this._z = i * n * h + s * a * r, this._w = i * n * r - s * a * h) : "YXZ" === l ? (this._x = s * n * r + i * a * h, this._y = i * a * r - s * n * h, this._z = i * n * h - s * a * r, this._w = i * n * r + s * a * h) : "ZXY" === l ? (this._x = s * n * r - i * a * h, this._y = i * a * r + s * n * h, this._z = i * n * h + s * a * r, this._w = i * n * r - s * a * h) : "ZYX" === l ? (this._x = s * n * r - i * a * h, this._y = i * a * r + s * n * h, this._z = i * n * h - s * a * r, this._w = i * n * r + s * a * h) : "YZX" === l ? (this._x = s * n * r + i * a * h, this._y = i * a * r + s * n * h, this._z = i * n * h - s * a * r, this._w = i * n * r - s * a * h) : "XZY" === l && (this._x = s * n * r - i * a * h, this._y = i * a * r - s * n * h, this._z = i * n * h + s * a * r, this._w = i * n * r + s * a * h), e !== !1 && this.onChangeCallback(), this
        },
        setFromAxisAngle: function (t, e) {
            var i = e / 2,
                n = Math.sin(i);
            return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t) {
            var e, i = t.elements,
                n = i[0],
                r = i[4],
                o = i[8],
                s = i[1],
                a = i[5],
                h = i[9],
                l = i[2],
                c = i[6],
                u = i[10],
                p = n + a + u;
            return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (c - h) * e, this._y = (o - l) * e, this._z = (s - r) * e) : n > a && n > u ? (e = 2 * Math.sqrt(1 + n - a - u), this._w = (c - h) / e, this._x = .25 * e, this._y = (r + s) / e, this._z = (o + l) / e) : a > u ? (e = 2 * Math.sqrt(1 + a - n - u), this._w = (o - l) / e, this._x = (r + s) / e, this._y = .25 * e, this._z = (h + c) / e) : (e = 2 * Math.sqrt(1 + u - n - a), this._w = (s - r) / e, this._x = (o + l) / e, this._y = (h + c) / e, this._z = .25 * e), this.onChangeCallback(), this
        },
        setFromUnitVectors: function () {
            var t, e, i = 1e-6;
            return function (n, r) {
                return void 0 === t && (t = new o.Vector3), e = n.dot(r) + 1, e < i ? (e = 0, Math.abs(n.x) > Math.abs(n.z) ? t.set(-n.y, n.x, 0) : t.set(0, -n.z, n.y)) : t.crossVectors(n, r), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize(), this
            }
        }(),
        inverse: function () {
            return this.conjugate().normalize(), this
        },
        conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function (t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function () {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
        },
        multiply: function (t, e) {
            return void 0 !== e ? this.multiplyQuaternions(t, e) : this.multiplyQuaternions(this, t)
        },
        multiplyQuaternions: function (t, e) {
            var i = t._x,
                n = t._y,
                r = t._z,
                o = t._w,
                s = e._x,
                a = e._y,
                h = e._z,
                l = e._w;
            return this._x = i * l + o * s + n * h - r * a, this._y = n * l + o * a + r * s - i * h, this._z = r * l + o * h + i * a - n * s, this._w = o * l - i * s - n * a - r * h, this.onChangeCallback(), this
        },
        slerp: function (t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var i = this._x,
                n = this._y,
                r = this._z,
                o = this._w,
                s = o * t._w + i * t._x + n * t._y + r * t._z;
            if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), s >= 1) return this._w = o, this._x = i, this._y = n, this._z = r, this;
            var a = Math.sqrt(1 - s * s);
            if (Math.abs(a) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (i + this._x), this._y = .5 * (n + this._y), this._z = .5 * (r + this._z), this;
            var h = Math.atan2(a, s),
                l = Math.sin((1 - e) * h) / a,
                c = Math.sin(e * h) / a;
            return this._w = o * l + this._w * c, this._x = i * l + this._x * c, this._y = n * l + this._y * c, this._z = r * l + this._z * c, this.onChangeCallback(), this
        },
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () { }
    }, Object.assign(o.Quaternion, {
        slerp: function (t, e, i, n) {
            return i.copy(t).slerp(e, n)
        },
        slerpFlat: function (t, e, i, n, r, o, s) {
            var a = i[n + 0],
                h = i[n + 1],
                l = i[n + 2],
                c = i[n + 3],
                u = r[o + 0],
                p = r[o + 1],
                d = r[o + 2],
                f = r[o + 3];
            if (c !== f || a !== u || h !== p || l !== d) {
                var m = 1 - s,
                    g = a * u + h * p + l * d + c * f,
                    v = g >= 0 ? 1 : -1,
                    y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var _ = Math.sqrt(y),
                        x = Math.atan2(_, g * v);
                    m = Math.sin(m * x) / _,
                        s = Math.sin(s * x) / _
                }
                var b = s * v;
                if (a = a * m + u * b, h = h * m + p * b, l = l * m + d * b, c = c * m + f * b, m === 1 - s) {
                    var w = 1 / Math.sqrt(a * a + h * h + l * l + c * c);
                    a *= w, h *= w, l *= w, c *= w
                }
            }
            t[e] = a, t[e + 1] = h, t[e + 2] = l, t[e + 3] = c
        }
    }), o.Vector2 = function (t, e) {
        this.x = t || 0, this.y = e || 0
    },
    o.Vector2.prototype = {
        constructor: o.Vector2,
        get width() {
            return this.x
        },
        set width(t) {
            this.x = t
        },
        get height() {
            return this.y
        },
        set height(t) {
            this.y = t
        },
        set: function (t, e) {
            return this.x = t, this.y = e, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function (t, e) {
            return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function (t) {
            return isFinite(t) ? (this.x *= t, this.y *= t) : (this.x = 0, this.y = 0), this
        },
        divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        },
        clampScalar: function () {
            var t, e;
            return function (i, n) {
                return void 0 === t && (t = new o.Vector2, e = new o.Vector2), t.set(i, i), e.set(n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i), this
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        angle: function () {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y;
            return e * e + i * i
        },
        setLength: function (t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t), this
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromAttribute: function (t, e, i) {
            return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this
        },
        rotateAround: function (t, e) {
            var i = Math.cos(e),
                n = Math.sin(e),
                r = this.x - t.x,
                o = this.y - t.y;
            return this.x = r * i - o * n + t.x, this.y = r * n + o * i + t.y, this
        }
    }, o.Vector3 = function (t, e, i) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }, o.Vector3.prototype = {
        constructor: o.Vector3,
        set: function (t, e, i) {
            return this.x = t, this.y = e, this.z = i, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setZ: function (t) {
            return this.z = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function (t, e) {
            return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function (t, e) {
            return void 0 !== e ? this.multiplyVectors(t, e) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function (t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this
        },
        multiplyVectors: function (t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: function () {
            var t;
            return function (e) {
                return e instanceof o.Euler == !1, void 0 === t && (t = new o.Quaternion), this.applyQuaternion(t.setFromEuler(e)), this
            }
        }(),
        applyAxisAngle: function () {
            var t;
            return function (e, i) {
                return void 0 === t && (t = new o.Quaternion), this.applyQuaternion(t.setFromAxisAngle(e, i)), this
            }
        }(),
        applyMatrix3: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
        },
        applyMatrix4: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n + r[12], this.y = r[1] * e + r[5] * i + r[9] * n + r[13], this.z = r[2] * e + r[6] * i + r[10] * n + r[14], this
        },
        applyProjection: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements,
                o = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * o, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * o, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * o, this
        },
        applyQuaternion: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.x,
                o = t.y,
                s = t.z,
                a = t.w,
                h = a * e + o * n - s * i,
                l = a * i + s * e - r * n,
                c = a * n + r * i - o * e,
                u = -r * e - o * i - s * n;
            return this.x = h * a + u * -r + l * -s - c * -o, this.y = l * a + u * -o + c * -r - h * -s, this.z = c * a + u * -s + h * -o - l * -r, this
        },
        project: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyProjection(t)
            }
        }(),
        unproject: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyProjection(t)
            }
        }(),
        transformDirection: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize(), this
        },
        divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        },
        clampScalar: function () {
            var t, e;
            return function (i, n) {
                return void 0 === t && (t = new o.Vector3, e = new o.Vector3), t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function (t, e) {
            var i = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i), this
        },
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        setLength: function (t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t), this
        },
        cross: function (t, e) {
            if (void 0 !== e) return this.crossVectors(t, e);
            var i = this.x,
                n = this.y,
                r = this.z;
            return this.x = n * t.z - r * t.y, this.y = r * t.x - i * t.z, this.z = i * t.y - n * t.x, this
        },
        crossVectors: function (t, e) {
            var i = t.x,
                n = t.y,
                r = t.z,
                o = e.x,
                s = e.y,
                a = e.z;
            return this.x = n * a - r * s, this.y = r * o - i * a, this.z = i * s - n * o, this
        },
        projectOnVector: function () {
            var t, e;
            return function (i) {
                return void 0 === t && (t = new o.Vector3), t.copy(i).normalize(), e = this.dot(t), this.copy(t).multiplyScalar(e)
            }
        }(),
        projectOnPlane: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Vector3), t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(),
        reflect: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Vector3), this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function (t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(o.Math.clamp(e, -1, 1))
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y,
                n = this.z - t.z;
            return e * e + i * i + n * n
        },
        setFromSpherical: function (t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
        },
        setFromMatrixPosition: function (t) {
            return this.setFromMatrixColumn(t, 3)
        },
        setFromMatrixScale: function (t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                i = this.setFromMatrixColumn(t, 1).length(),
                n = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = i, this.z = n, this
        },
        setFromMatrixColumn: function (t, e) {
            return "number" == typeof t && (t = arguments[1], e = arguments[0]), this.fromArray(t.elements, 4 * e)
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromAttribute: function (t, e, i) {
            return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this
        }
    }, o.Vector4 = function (t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
    },
    o.Vector4.prototype = {
        constructor: o.Vector4,
        set: function (t, e, i, n) {
            return this.x = t, this.y = e, this.z = i, this.w = n, this
        },
        setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        },
        setX: function (t) {
            return this.x = t, this
        },
        setY: function (t) {
            return this.y = t, this
        },
        setZ: function (t) {
            return this.z = t, this
        },
        setW: function (t) {
            return this.w = t, this
        },
        setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function (t, e) {
            return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        },
        sub: function (t, e) {
            return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function (t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t, this.w *= t) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
        },
        applyMatrix4: function (t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = this.w,
                o = t.elements;
            return this.x = o[0] * e + o[4] * i + o[8] * n + o[12] * r, this.y = o[1] * e + o[5] * i + o[9] * n + o[13] * r, this.z = o[2] * e + o[6] * i + o[10] * n + o[14] * r, this.w = o[3] * e + o[7] * i + o[11] * n + o[15] * r, this
        },
        divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function (t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function (t) {
            var e, i, n, r, o = .01,
                s = .1,
                a = t.elements,
                h = a[0],
                l = a[4],
                c = a[8],
                u = a[1],
                p = a[5],
                d = a[9],
                f = a[2],
                m = a[6],
                g = a[10];
            if (Math.abs(l - u) < o && Math.abs(c - f) < o && Math.abs(d - m) < o) {
                if (Math.abs(l + u) < s && Math.abs(c + f) < s && Math.abs(d + m) < s && Math.abs(h + p + g - 3) < s) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var v = (h + 1) / 2,
                    y = (p + 1) / 2,
                    _ = (g + 1) / 2,
                    x = (l + u) / 4,
                    b = (c + f) / 4,
                    w = (d + m) / 4;
                return v > y && v > _ ? v < o ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(v), n = x / i, r = b / i) : y > _ ? y < o ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(y), i = x / n, r = w / n) : _ < o ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(_), i = b / r, n = w / r), this.set(i, n, r, e), this
            }
            var S = Math.sqrt((m - d) * (m - d) + (c - f) * (c - f) + (u - l) * (u - l));
            return Math.abs(S) < .001 && (S = 1), this.x = (m - d) / S, this.y = (c - f) / S, this.z = (u - l) / S, this.w = Math.acos((h + p + g - 1) / 2), this
        },
        min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        },
        max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        },
        clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        },
        clampScalar: function () {
            var t, e;
            return function (i, n) {
                return void 0 === t && (t = new o.Vector4, e = new o.Vector4), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
            }
        }(),
        floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        setLength: function (t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function (t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t), this
        },
        equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromAttribute: function (t, e, i) {
            return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this.w = t.array[e + 3], this
        }
    }, o.Euler = function (t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || o.Euler.DefaultOrder
    }, o.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
    o.Euler.DefaultOrder = "XYZ", o.Euler.prototype = {
        constructor: o.Euler,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(t) {
            this._order = t, this.onChangeCallback()
        },
        set: function (t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function (t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t, e, i) {
            var n = o.Math.clamp,
                r = t.elements,
                s = r[0],
                a = r[4],
                h = r[8],
                l = r[1],
                c = r[5],
                u = r[9],
                p = r[2],
                d = r[6],
                f = r[10];
            return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(h, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-p, s), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-p, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s))) : "ZYX" === e ? (this._y = Math.asin(-n(p, -1, 1)), Math.abs(p) < .99999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c))) : "YZX" === e ? (this._z = Math.asin(n(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-p, s)) : (this._x = 0, this._y = Math.atan2(h, f))) : "XZY" === e && (this._z = Math.asin(-n(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(h, s)) : (this._x = Math.atan2(-u, f), this._y = 0)), this._order = e, i !== !1 && this.onChangeCallback(), this
        },
        setFromQuaternion: function () {
            var t;
            return function (e, i, n) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n), this
            }
        }(),
        setFromVector3: function (t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function () {
            var t = new o.Quaternion;
            return function (e) {
                t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(),
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function (t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function (t) {
            return t ? t.set(this._x, this._y, this._z) : new o.Vector3(this._x, this._y, this._z)
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () { }
    }, o.Line3 = function (t, e) {
        this.start = void 0 !== t ? t : new o.Vector3, this.end = void 0 !== e ? e : new o.Vector3
    }, o.Line3.prototype = {
        constructor: o.Line3,
        set: function (t, e) {
            return this.start.copy(t), this.end.copy(e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        },
        center: function (t) {
            var e = t || new o.Vector3;
            return e.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function (t) {
            var e = t || new o.Vector3;
            return e.subVectors(this.end, this.start)
        },
        distanceSq: function () {
            return this.start.distanceToSquared(this.end)
        },
        distance: function () {
            return this.start.distanceTo(this.end)
        },
        at: function (t, e) {
            var i = e || new o.Vector3;
            return this.delta(i).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function () {
            var t = new o.Vector3,
                e = new o.Vector3;
            return function (i, n) {
                t.subVectors(i, this.start), e.subVectors(this.end, this.start);
                var r = e.dot(e),
                    s = e.dot(t),
                    a = s / r;
                return n && (a = o.Math.clamp(a, 0, 1)), a
            }
        }(),
        closestPointToPoint: function (t, e, i) {
            var n = this.closestPointToPointParameter(t, e),
                r = i || new o.Vector3;
            return this.delta(r).multiplyScalar(n).add(this.start)
        },
        applyMatrix4: function (t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        },
        equals: function (t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }, o.Box2 = function (t, e) {
        this.min = void 0 !== t ? t : new o.Vector2((+(1 / 0)), (+(1 / 0))), this.max = void 0 !== e ? e : new o.Vector2((-(1 / 0)), (-(1 / 0)))
    },
    o.Box2.prototype = {
        constructor: o.Box2,
        set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function () {
            var t = new o.Vector2;
            return function (e, i) {
                var n = t.copy(i).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = +(1 / 0), this.max.x = this.max.y = -(1 / 0), this
        },
        isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        center: function (t) {
            var e = t || new o.Vector2;
            return e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function (t) {
            var e = t || new o.Vector2;
            return e.subVectors(this.max, this.min)
        },
        expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function (t, e) {
            var i = e || new o.Vector2;
            return i.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function (t, e) {
            var i = e || new o.Vector2;
            return i.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
            var t = new o.Vector2;
            return function (e) {
                var i = t.copy(e).clamp(this.min, this.max);
                return i.sub(e).length()
            }
        }(),
        intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }, o.Box3 = function (t, e) {
        this.min = void 0 !== t ? t : new o.Vector3((+(1 / 0)), (+(1 / 0)), (+(1 / 0))), this.max = void 0 !== e ? e : new o.Vector3((-(1 / 0)), (-(1 / 0)), (-(1 / 0)))
    }, o.Box3.prototype = {
        constructor: o.Box3,
        set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromArray: function (t) {
            this.makeEmpty();
            for (var e = +(1 / 0), i = +(1 / 0), n = +(1 / 0), r = -(1 / 0), o = -(1 / 0), s = -(1 / 0), a = 0, h = t.length; a < h; a += 3) {
                var l = t[a],
                    c = t[a + 1],
                    u = t[a + 2];
                l < e && (e = l), c < i && (i = c), u < n && (n = u), l > r && (r = l), c > o && (o = c), u > s && (s = u)
            }
            this.min.set(e, i, n), this.max.set(r, o, s)
        },
        setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function () {
            var t = new o.Vector3;
            return function (e, i) {
                var n = t.copy(i).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        setFromObject: function () {
            var t;
            return function (e) {
                void 0 === t && (t = new o.Box3);
                var i = this;
                return this.makeEmpty(), e.updateMatrixWorld(!0), e.traverse(function (e) {
                    var n = e.geometry;
                    void 0 !== n && (null === n.boundingBox && n.computeBoundingBox(), n.boundingBox.isEmpty() === !1 && (t.copy(n.boundingBox), t.applyMatrix4(e.matrixWorld), i.union(t)))
                }), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = +(1 / 0), this.max.x = this.max.y = this.max.z = -(1 / 0), this
        },
        isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        center: function (t) {
            var e = t || new o.Vector3;
            return e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function (t) {
            var e = t || new o.Vector3;
            return e.subVectors(this.max, this.min)
        },
        expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function (t, e) {
            var i = e || new o.Vector3;
            return i.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Vector3), this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(),
        intersectsPlane: function (t) {
            var e, i;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant
        },
        clampPoint: function (t, e) {
            var i = e || new o.Vector3;
            return i.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
            var t = new o.Vector3;
            return function (e) {
                var i = t.copy(e).clamp(this.min, this.max);
                return i.sub(e).length()
            }
        }(),
        getBoundingSphere: function () {
            var t = new o.Vector3;
            return function (e) {
                var i = e || new o.Sphere;
                return i.center = this.center(), i.radius = .5 * this.size(t).length(), i
            }
        }(),
        intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: function () {
            var t = [new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3];
            return function (e) {
                return t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.makeEmpty(), this.setFromPoints(t), this
            }
        }(),
        translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }, o.Matrix3 = function () {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0
    }, o.Matrix3.prototype = {
        constructor: o.Matrix3,
        set: function (t, e, i, n, r, o, s, a, h) {
            var l = this.elements;
            return l[0] = t, l[1] = n, l[2] = s, l[3] = e, l[4] = r, l[5] = a, l[6] = i, l[7] = o, l[8] = h, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function () {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function (t) {
            var e = t.elements;
            return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
        },
        setFromMatrix4: function (t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        },
        applyToVector3Array: function () {
            var t;
            return function (e, i, n) {
                void 0 === t && (t = new o.Vector3), void 0 === i && (i = 0), void 0 === n && (n = e.length);
                for (var r = 0, s = i; r < n; r += 3, s += 3) t.fromArray(e, s), t.applyMatrix3(this), t.toArray(e, s);
                return e
            }
        }(),
        applyToBuffer: function () {
            var t;
            return function (e, i, n) {
                void 0 === t && (t = new o.Vector3), void 0 === i && (i = 0), void 0 === n && (n = e.length / e.itemSize);
                for (var r = 0, s = i; r < n; r++, s++) t.x = e.getX(s), t.y = e.getY(s), t.z = e.getZ(s), t.applyMatrix3(this), e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(),
        multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function () {
            var t = this.elements,
                e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                o = t[4],
                s = t[5],
                a = t[6],
                h = t[7],
                l = t[8];
            return e * o * l - e * s * h - i * r * l + i * s * a + n * r * h - n * o * a
        },
        getInverse: function (t, e) {
            t instanceof o.Matrix4;
            var i = t.elements,
                n = this.elements,
                r = i[0],
                s = i[1],
                a = i[2],
                h = i[3],
                l = i[4],
                c = i[5],
                u = i[6],
                p = i[7],
                d = i[8],
                f = d * l - c * p,
                m = c * u - d * h,
                g = p * h - l * u,
                v = r * f + s * m + a * g;
            if (0 === v) {
                var y = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                if (e) throw new Error(y);
                return this.identity()
            }
            return n[0] = f, n[1] = a * p - d * s, n[2] = c * s - a * l, n[3] = m, n[4] = d * r - a * u, n[5] = a * h - c * r, n[6] = g, n[7] = s * u - p * r, n[8] = l * r - s * h, this.multiplyScalar(1 / v)
        },
        transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        },
        flattenToArrayOffset: function (t, e) {
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
        },
        getNormalMatrix: function (t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function (t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        fromArray: function (t) {
            return this.elements.set(t), this
        },
        toArray: function () {
            var t = this.elements;
            return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]
        }
    },
    o.Matrix4 = function () {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0
    }, o.Matrix4.prototype = {
        constructor: o.Matrix4,
        set: function (t, e, i, n, r, o, s, a, h, l, c, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = o, g[9] = s, g[13] = a, g[2] = h, g[6] = l, g[10] = c, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function () {
            return (new o.Matrix4).fromArray(this.elements)
        },
        copy: function (t) {
            return this.elements.set(t.elements), this
        },
        copyPosition: function (t) {
            var e = this.elements,
                i = t.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
        },
        extractBasis: function (t, e, i) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function (t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function () {
            var t;
            return function (e) {
                void 0 === t && (t = new o.Vector3);
                var i = this.elements,
                    n = e.elements,
                    r = 1 / t.setFromMatrixColumn(e, 0).length(),
                    s = 1 / t.setFromMatrixColumn(e, 1).length(),
                    a = 1 / t.setFromMatrixColumn(e, 2).length();
                return i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[4] = n[4] * s, i[5] = n[5] * s, i[6] = n[6] * s, i[8] = n[8] * a, i[9] = n[9] * a, i[10] = n[10] * a, this
            }
        }(),
        makeRotationFromEuler: function (t) {
            t instanceof o.Euler == !1;
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z,
                s = Math.cos(i),
                a = Math.sin(i),
                h = Math.cos(n),
                l = Math.sin(n),
                c = Math.cos(r),
                u = Math.sin(r);
            if ("XYZ" === t.order) {
                var p = s * c,
                    d = s * u,
                    f = a * c,
                    m = a * u;
                e[0] = h * c, e[4] = -h * u, e[8] = l, e[1] = d + f * l, e[5] = p - m * l, e[9] = -a * h, e[2] = m - p * l, e[6] = f + d * l, e[10] = s * h
            } else if ("YXZ" === t.order) {
                var g = h * c,
                    v = h * u,
                    y = l * c,
                    _ = l * u;
                e[0] = g + _ * a, e[4] = y * a - v, e[8] = s * l, e[1] = s * u, e[5] = s * c, e[9] = -a, e[2] = v * a - y, e[6] = _ + g * a, e[10] = s * h
            } else if ("ZXY" === t.order) {
                var g = h * c,
                    v = h * u,
                    y = l * c,
                    _ = l * u;
                e[0] = g - _ * a, e[4] = -s * u, e[8] = y + v * a, e[1] = v + y * a, e[5] = s * c, e[9] = _ - g * a, e[2] = -s * l, e[6] = a, e[10] = s * h
            } else if ("ZYX" === t.order) {
                var p = s * c,
                    d = s * u,
                    f = a * c,
                    m = a * u;
                e[0] = h * c,
                    e[4] = f * l - d, e[8] = p * l + m, e[1] = h * u, e[5] = m * l + p, e[9] = d * l - f, e[2] = -l, e[6] = a * h, e[10] = s * h
            } else if ("YZX" === t.order) {
                var x = s * h,
                    b = s * l,
                    w = a * h,
                    S = a * l;
                e[0] = h * c, e[4] = S - x * u, e[8] = w * u + b, e[1] = u, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = b * u + w, e[10] = x - S * u
            } else if ("XZY" === t.order) {
                var x = s * h,
                    b = s * l,
                    w = a * h,
                    S = a * l;
                e[0] = h * c, e[4] = -u, e[8] = l * c, e[1] = x * u + S, e[5] = s * c, e[9] = b * u - w, e[2] = w * u - b, e[6] = a * c, e[10] = S * u + x
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: function (t) {
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z,
                o = t.w,
                s = i + i,
                a = n + n,
                h = r + r,
                l = i * s,
                c = i * a,
                u = i * h,
                p = n * a,
                d = n * h,
                f = r * h,
                m = o * s,
                g = o * a,
                v = o * h;
            return e[0] = 1 - (p + f), e[4] = c - v, e[8] = u + g, e[1] = c + v, e[5] = 1 - (l + f), e[9] = d - m, e[2] = u - g, e[6] = d + m, e[10] = 1 - (l + p), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        lookAt: function () {
            var t, e, i;
            return function (n, r, s) {
                void 0 === t && (t = new o.Vector3), void 0 === e && (e = new o.Vector3), void 0 === i && (i = new o.Vector3);
                var a = this.elements;
                return i.subVectors(n, r).normalize(), 0 === i.lengthSq() && (i.z = 1), t.crossVectors(s, i).normalize(), 0 === t.lengthSq() && (i.x += 1e-4, t.crossVectors(s, i).normalize()), e.crossVectors(i, t), a[0] = t.x, a[4] = e.x, a[8] = i.x, a[1] = t.y, a[5] = e.y, a[9] = i.y, a[2] = t.z, a[6] = e.z, a[10] = i.z, this
            }
        }(),
        multiply: function (t, e) {
            return void 0 !== e ? this.multiplyMatrices(t, e) : this.multiplyMatrices(this, t)
        },
        multiplyMatrices: function (t, e) {
            var i = t.elements,
                n = e.elements,
                r = this.elements,
                o = i[0],
                s = i[4],
                a = i[8],
                h = i[12],
                l = i[1],
                c = i[5],
                u = i[9],
                p = i[13],
                d = i[2],
                f = i[6],
                m = i[10],
                g = i[14],
                v = i[3],
                y = i[7],
                _ = i[11],
                x = i[15],
                b = n[0],
                w = n[4],
                S = n[8],
                T = n[12],
                M = n[1],
                E = n[5],
                A = n[9],
                C = n[13],
                L = n[2],
                R = n[6],
                P = n[10],
                O = n[14],
                I = n[3],
                D = n[7],
                B = n[11],
                k = n[15];
            return r[0] = o * b + s * M + a * L + h * I, r[4] = o * w + s * E + a * R + h * D, r[8] = o * S + s * A + a * P + h * B, r[12] = o * T + s * C + a * O + h * k, r[1] = l * b + c * M + u * L + p * I, r[5] = l * w + c * E + u * R + p * D, r[9] = l * S + c * A + u * P + p * B, r[13] = l * T + c * C + u * O + p * k, r[2] = d * b + f * M + m * L + g * I, r[6] = d * w + f * E + m * R + g * D, r[10] = d * S + f * A + m * P + g * B, r[14] = d * T + f * C + m * O + g * k, r[3] = v * b + y * M + _ * L + x * I, r[7] = v * w + y * E + _ * R + x * D, r[11] = v * S + y * A + _ * P + x * B, r[15] = v * T + y * C + _ * O + x * k, this
        },
        multiplyToArray: function (t, e, i) {
            var n = this.elements;
            return this.multiplyMatrices(t, e), i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], i[4] = n[4], i[5] = n[5], i[6] = n[6], i[7] = n[7], i[8] = n[8], i[9] = n[9], i[10] = n[10], i[11] = n[11], i[12] = n[12], i[13] = n[13], i[14] = n[14], i[15] = n[15], this
        },
        multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        applyToVector3Array: function () {
            var t;
            return function (e, i, n) {
                void 0 === t && (t = new o.Vector3), void 0 === i && (i = 0), void 0 === n && (n = e.length);
                for (var r = 0, s = i; r < n; r += 3, s += 3) t.fromArray(e, s), t.applyMatrix4(this), t.toArray(e, s);
                return e
            }
        }(),
        applyToBuffer: function () {
            var t;
            return function (e, i, n) {
                void 0 === t && (t = new o.Vector3), void 0 === i && (i = 0), void 0 === n && (n = e.length / e.itemSize);
                for (var r = 0, s = i; r < n; r++, s++) t.x = e.getX(s), t.y = e.getY(s), t.z = e.getZ(s), t.applyMatrix4(this), e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function () {
            var t = this.elements,
                e = t[0],
                i = t[4],
                n = t[8],
                r = t[12],
                o = t[1],
                s = t[5],
                a = t[9],
                h = t[13],
                l = t[2],
                c = t[6],
                u = t[10],
                p = t[14],
                d = t[3],
                f = t[7],
                m = t[11],
                g = t[15];
            return d * (+r * a * c - n * h * c - r * s * u + i * h * u + n * s * p - i * a * p) + f * (+e * a * p - e * h * u + r * o * u - n * o * p + n * h * l - r * a * l) + m * (+e * h * c - e * s * p - r * o * c + i * o * p + r * s * l - i * h * l) + g * (-n * s * l - e * a * c + e * s * u + n * o * c - i * o * u + i * a * l)
        },
        transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        flattenToArrayOffset: function (t, e) {
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
        },
        getPosition: function () {
            var t;
            return function () {
                return void 0 === t && (t = new o.Vector3), t.setFromMatrixColumn(this, 3)
            }
        }(),
        setPosition: function (t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        },
        getInverse: function (t, e) {
            var i = this.elements,
                n = t.elements,
                r = n[0],
                o = n[1],
                s = n[2],
                a = n[3],
                h = n[4],
                l = n[5],
                c = n[6],
                u = n[7],
                p = n[8],
                d = n[9],
                f = n[10],
                m = n[11],
                g = n[12],
                v = n[13],
                y = n[14],
                _ = n[15],
                x = d * y * u - v * f * u + v * c * m - l * y * m - d * c * _ + l * f * _,
                b = g * f * u - p * y * u - g * c * m + h * y * m + p * c * _ - h * f * _,
                w = p * v * u - g * d * u + g * l * m - h * v * m - p * l * _ + h * d * _,
                S = g * d * c - p * v * c - g * l * f + h * v * f + p * l * y - h * d * y,
                T = r * x + o * b + s * w + a * S;
            if (0 === T) {
                var M = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                if (e) throw new Error(M);
                return this.identity()
            }
            return i[0] = x, i[1] = v * f * a - d * y * a - v * s * m + o * y * m + d * s * _ - o * f * _, i[2] = l * y * a - v * c * a + v * s * u - o * y * u - l * s * _ + o * c * _, i[3] = d * c * a - l * f * a - d * s * u + o * f * u + l * s * m - o * c * m, i[4] = b, i[5] = p * y * a - g * f * a + g * s * m - r * y * m - p * s * _ + r * f * _, i[6] = g * c * a - h * y * a - g * s * u + r * y * u + h * s * _ - r * c * _, i[7] = h * f * a - p * c * a + p * s * u - r * f * u - h * s * m + r * c * m, i[8] = w, i[9] = g * d * a - p * v * a - g * o * m + r * v * m + p * o * _ - r * d * _, i[10] = h * v * a - g * l * a + g * o * u - r * v * u - h * o * _ + r * l * _, i[11] = p * l * a - h * d * a - p * o * u + r * d * u + h * o * m - r * l * m, i[12] = S, i[13] = p * v * s - g * d * s + g * o * f - r * v * f - p * o * y + r * d * y, i[14] = g * l * s - h * v * s - g * o * c + r * v * c + h * o * y - r * l * y, i[15] = h * d * s - p * l * s + p * o * c - r * d * c - h * o * f + r * l * f, this.multiplyScalar(1 / T)
        },
        scale: function (t) {
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z;
            return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
        },
        getMaxScaleOnAxis: function () {
            var t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, i, n))
        },
        makeTranslation: function (t, e, i) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
        },
        makeRotationX: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function (t) {
            var e = Math.cos(t),
                i = Math.sin(t);
            return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function (t, e) {
            var i = Math.cos(e),
                n = Math.sin(e),
                r = 1 - i,
                o = t.x,
                s = t.y,
                a = t.z,
                h = r * o,
                l = r * s;
            return this.set(h * o + i, h * s - n * a, h * a + n * s, 0, h * s + n * a, l * s + i, l * a - n * o, 0, h * a - n * s, l * a + n * o, r * a * a + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function (t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        },
        compose: function (t, e, i) {
            return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
        },
        decompose: function () {
            var t, e;
            return function (i, n, r) {
                void 0 === t && (t = new o.Vector3), void 0 === e && (e = new o.Matrix4);
                var s = this.elements,
                    a = t.set(s[0], s[1], s[2]).length(),
                    h = t.set(s[4], s[5], s[6]).length(),
                    l = t.set(s[8], s[9], s[10]).length(),
                    c = this.determinant();
                c < 0 && (a = -a), i.x = s[12], i.y = s[13], i.z = s[14], e.elements.set(this.elements);
                var u = 1 / a,
                    p = 1 / h,
                    d = 1 / l;
                return e.elements[0] *= u, e.elements[1] *= u, e.elements[2] *= u, e.elements[4] *= p, e.elements[5] *= p, e.elements[6] *= p, e.elements[8] *= d, e.elements[9] *= d, e.elements[10] *= d, n.setFromRotationMatrix(e), r.x = a, r.y = h, r.z = l, this
            }
        }(),
        makeFrustum: function (t, e, i, n, r, o) {
            var s = this.elements,
                a = 2 * r / (e - t),
                h = 2 * r / (n - i),
                l = (e + t) / (e - t),
                c = (n + i) / (n - i),
                u = -(o + r) / (o - r),
                p = -2 * o * r / (o - r);
            return s[0] = a, s[4] = 0, s[8] = l, s[12] = 0, s[1] = 0, s[5] = h, s[9] = c, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = u, s[14] = p, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
        },
        makePerspective: function (t, e, i, n) {
            var r = i * Math.tan(o.Math.degToRad(.5 * t)),
                s = -r,
                a = s * e,
                h = r * e;
            return this.makeFrustum(a, h, s, r, i, n)
        },
        makeOrthographic: function (t, e, i, n, r, o) {
            var s = this.elements,
                a = 1 / (e - t),
                h = 1 / (i - n),
                l = 1 / (o - r),
                c = (e + t) * a,
                u = (i + n) * h,
                p = (o + r) * l;
            return s[0] = 2 * a, s[4] = 0, s[8] = 0, s[12] = -c, s[1] = 0, s[5] = 2 * h, s[9] = 0, s[13] = -u, s[2] = 0, s[6] = 0, s[10] = -2 * l, s[14] = -p, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
        },
        equals: function (t) {
            for (var e = this.elements, i = t.elements, n = 0; n < 16; n++)
                if (e[n] !== i[n]) return !1;
            return !0
        },
        fromArray: function (t) {
            return this.elements.set(t), this
        },
        toArray: function () {
            var t = this.elements;
            return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]]
        }
    }, o.Ray = function (t, e) {
        this.origin = void 0 !== t ? t : new o.Vector3, this.direction = void 0 !== e ? e : new o.Vector3
    }, o.Ray.prototype = {
        constructor: o.Ray,
        set: function (t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function (t, e) {
            var i = e || new o.Vector3;
            return i.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function (t) {
            this.direction.copy(t).sub(this.origin).normalize()
        },
        recast: function () {
            var t = new o.Vector3;
            return function (e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(),
        closestPointToPoint: function (t, e) {
            var i = e || new o.Vector3;
            i.subVectors(t, this.origin);
            var n = i.dot(this.direction);
            return n < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function (t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function () {
            var t = new o.Vector3;
            return function (e) {
                var i = t.subVectors(e, this.origin).dot(this.direction);
                return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: function () {
            var t = new o.Vector3,
                e = new o.Vector3,
                i = new o.Vector3;
            return function (n, r, o, s) {
                t.copy(n).add(r).multiplyScalar(.5), e.copy(r).sub(n).normalize(), i.copy(this.origin).sub(t);
                var a, h, l, c, u = .5 * n.distanceTo(r),
                    p = -this.direction.dot(e),
                    d = i.dot(this.direction),
                    f = -i.dot(e),
                    m = i.lengthSq(),
                    g = Math.abs(1 - p * p);
                if (g > 0)
                    if (a = p * f - d, h = p * d - f, c = u * g, a >= 0)
                        if (h >= -c)
                            if (h <= c) {
                                var v = 1 / g;
                                a *= v, h *= v, l = a * (a + p * h + 2 * d) + h * (p * a + h + 2 * f) + m
                            } else h = u, a = Math.max(0, -(p * h + d)), l = -a * a + h * (h + 2 * f) + m;
                        else h = -u, a = Math.max(0, -(p * h + d)), l = -a * a + h * (h + 2 * f) + m;
                    else h <= -c ? (a = Math.max(0, -(-p * u + d)), h = a > 0 ? -u : Math.min(Math.max(-u, -f), u), l = -a * a + h * (h + 2 * f) + m) : h <= c ? (a = 0, h = Math.min(Math.max(-u, -f), u), l = h * (h + 2 * f) + m) : (a = Math.max(0, -(p * u + d)), h = a > 0 ? u : Math.min(Math.max(-u, -f), u), l = -a * a + h * (h + 2 * f) + m);
                else h = p > 0 ? -u : u, a = Math.max(0, -(p * h + d)), l = -a * a + h * (h + 2 * f) + m;
                return o && o.copy(this.direction).multiplyScalar(a).add(this.origin), s && s.copy(e).multiplyScalar(h).add(t), l
            }
        }(),
        intersectSphere: function () {
            var t = new o.Vector3;
            return function (e, i) {
                t.subVectors(e.center, this.origin);
                var n = t.dot(this.direction),
                    r = t.dot(t) - n * n,
                    o = e.radius * e.radius;
                if (r > o) return null;
                var s = Math.sqrt(o - r),
                    a = n - s,
                    h = n + s;
                return a < 0 && h < 0 ? null : a < 0 ? this.at(h, i) : this.at(a, i)
            }
        }(),
        intersectsSphere: function (t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        distanceToPlane: function (t) {
            var e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var i = -(this.origin.dot(t.normal) + t.constant) / e;
            return i >= 0 ? i : null
        },
        intersectPlane: function (t, e) {
            var i = this.distanceToPlane(t);
            return null === i ? null : this.at(i, e)
        },
        intersectsPlane: function (t) {
            var e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            var i = t.normal.dot(this.direction);
            return i * e < 0
        },
        intersectBox: function (t, e) {
            var i, n, r, o, s, a, h = 1 / this.direction.x,
                l = 1 / this.direction.y,
                c = 1 / this.direction.z,
                u = this.origin;
            return h >= 0 ? (i = (t.min.x - u.x) * h, n = (t.max.x - u.x) * h) : (i = (t.max.x - u.x) * h, n = (t.min.x - u.x) * h), l >= 0 ? (r = (t.min.y - u.y) * l, o = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, o = (t.min.y - u.y) * l), i > o || r > n ? null : ((r > i || i !== i) && (i = r), (o < n || n !== n) && (n = o), c >= 0 ? (s = (t.min.z - u.z) * c, a = (t.max.z - u.z) * c) : (s = (t.max.z - u.z) * c, a = (t.min.z - u.z) * c), i > a || s > n ? null : ((s > i || i !== i) && (i = s), (a < n || n !== n) && (n = a), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
        },
        intersectsBox: function () {
            var t = new o.Vector3;
            return function (e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectTriangle: function () {
            var t = new o.Vector3,
                e = new o.Vector3,
                i = new o.Vector3,
                n = new o.Vector3;
            return function (r, o, s, a, h) {
                e.subVectors(o, r), i.subVectors(s, r), n.crossVectors(e, i);
                var l, c = this.direction.dot(n);
                if (c > 0) {
                    if (a) return null;
                    l = 1
                } else {
                    if (!(c < 0)) return null;
                    l = -1, c = -c
                }
                t.subVectors(this.origin, r);
                var u = l * this.direction.dot(i.crossVectors(t, i));
                if (u < 0) return null;
                var p = l * this.direction.dot(e.cross(t));
                if (p < 0) return null;
                if (u + p > c) return null;
                var d = -l * t.dot(n);
                return d < 0 ? null : this.at(d / c, h)
            }
        }(),
        applyMatrix4: function (t) {
            return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin), this.direction.normalize(), this
        },
        equals: function (t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }, o.Sphere = function (t, e) {
        this.center = void 0 !== t ? t : new o.Vector3, this.radius = void 0 !== e ? e : 0
    },
    o.Sphere.prototype = {
        constructor: o.Sphere,
        set: function (t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: function () {
            var t = new o.Box3;
            return function (e, i) {
                var n = this.center;
                void 0 !== i ? n.copy(i) : t.setFromPoints(e).center(n);
                for (var r = 0, o = 0, s = e.length; o < s; o++) r = Math.max(r, n.distanceToSquared(e[o]));
                return this.radius = Math.sqrt(r), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function () {
            return this.radius <= 0
        },
        containsPoint: function (t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function (t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function (t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function (t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function (t) {
            return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
        },
        clampPoint: function (t, e) {
            var i = this.center.distanceToSquared(t),
                n = e || new o.Vector3;
            return n.copy(t), i > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
        },
        getBoundingBox: function (t) {
            var e = t || new o.Box3;
            return e.set(this.center, this.center), e.expandByScalar(this.radius), e
        },
        applyMatrix4: function (t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        },
        translate: function (t) {
            return this.center.add(t), this
        },
        equals: function (t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }, o.Frustum = function (t, e, i, n, r, s) {
        this.planes = [void 0 !== t ? t : new o.Plane, void 0 !== e ? e : new o.Plane, void 0 !== i ? i : new o.Plane, void 0 !== n ? n : new o.Plane, void 0 !== r ? r : new o.Plane, void 0 !== s ? s : new o.Plane]
    }, o.Frustum.prototype = {
        constructor: o.Frustum,
        set: function (t, e, i, n, r, o) {
            var s = this.planes;
            return s[0].copy(t), s[1].copy(e), s[2].copy(i), s[3].copy(n), s[4].copy(r), s[5].copy(o), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            for (var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
            return this
        },
        setFromMatrix: function (t) {
            var e = this.planes,
                i = t.elements,
                n = i[0],
                r = i[1],
                o = i[2],
                s = i[3],
                a = i[4],
                h = i[5],
                l = i[6],
                c = i[7],
                u = i[8],
                p = i[9],
                d = i[10],
                f = i[11],
                m = i[12],
                g = i[13],
                v = i[14],
                y = i[15];
            return e[0].setComponents(s - n, c - a, f - u, y - m).normalize(), e[1].setComponents(s + n, c + a, f + u, y + m).normalize(), e[2].setComponents(s + r, c + h, f + p, y + g).normalize(), e[3].setComponents(s - r, c - h, f - p, y - g).normalize(), e[4].setComponents(s - o, c - l, f - d, y - v).normalize(), e[5].setComponents(s + o, c + l, f + d, y + v).normalize(), this
        },
        intersectsObject: function () {
            var t = new o.Sphere;
            return function (e) {
                var i = e.geometry;
                return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere), t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function (t) {
            for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
                var o = e[r].distanceToPoint(i);
                if (o < n) return !1
            }
            return !0
        },
        intersectsBox: function () {
            var t = new o.Vector3,
                e = new o.Vector3;
            return function (i) {
                for (var n = this.planes, r = 0; r < 6; r++) {
                    var o = n[r];
                    t.x = o.normal.x > 0 ? i.min.x : i.max.x, e.x = o.normal.x > 0 ? i.max.x : i.min.x, t.y = o.normal.y > 0 ? i.min.y : i.max.y, e.y = o.normal.y > 0 ? i.max.y : i.min.y, t.z = o.normal.z > 0 ? i.min.z : i.max.z, e.z = o.normal.z > 0 ? i.max.z : i.min.z;
                    var s = o.distanceToPoint(t),
                        a = o.distanceToPoint(e);
                    if (s < 0 && a < 0) return !1
                }
                return !0
            }
        }(),
        containsPoint: function (t) {
            for (var e = this.planes, i = 0; i < 6; i++)
                if (e[i].distanceToPoint(t) < 0) return !1;
            return !0
        }
    }, o.Plane = function (t, e) {
        this.normal = void 0 !== t ? t : new o.Vector3(1, 0, 0), this.constant = void 0 !== e ? e : 0
    },
    o.Plane.prototype = {
        constructor: o.Plane,
        set: function (t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function (t, e, i, n) {
            return this.normal.set(t, e, i), this.constant = n, this
        },
        setFromNormalAndCoplanarPoint: function (t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function () {
            var t = new o.Vector3,
                e = new o.Vector3;
            return function (i, n, r) {
                var o = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
                return this.setFromNormalAndCoplanarPoint(o, i), this
            }
        }(),
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function () {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function (t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function (t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function (t, e) {
            return this.orthoPoint(t, e).sub(t).negate()
        },
        orthoPoint: function (t, e) {
            var i = this.distanceToPoint(t),
                n = e || new o.Vector3;
            return n.copy(this.normal).multiplyScalar(i)
        },
        intersectLine: function () {
            var t = new o.Vector3;
            return function (e, i) {
                var n = i || new o.Vector3,
                    r = e.delta(t),
                    s = this.normal.dot(r);
                if (0 !== s) {
                    var a = -(e.start.dot(this.normal) + this.constant) / s;
                    if (!(a < 0 || a > 1)) return n.copy(r).multiplyScalar(a).add(e.start)
                } else if (0 === this.distanceToPoint(e.start)) return n.copy(e.start)
            }
        }(),
        intersectsLine: function (t) {
            var e = this.distanceToPoint(t.start),
                i = this.distanceToPoint(t.end);
            return e < 0 && i > 0 || i < 0 && e > 0
        },
        intersectsBox: function (t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function (t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function (t) {
            var e = t || new o.Vector3;
            return e.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function () {
            var t = new o.Vector3,
                e = new o.Vector3,
                i = new o.Matrix3;
            return function (n, r) {
                var o = r || i.getNormalMatrix(n),
                    s = t.copy(this.normal).applyMatrix3(o),
                    a = this.coplanarPoint(e);
                return a.applyMatrix4(n), this.setFromNormalAndCoplanarPoint(s, a), this
            }
        }(),
        translate: function (t) {
            return this.constant = this.constant - t.dot(this.normal), this
        },
        equals: function (t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }, o.Spherical = function (t, e, i) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
    }, o.Spherical.prototype = {
        constructor: o.Spherical,
        set: function (t, e, i) {
            this.radius = t, this.phi = e, this.theta = i
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.radius.copy(t.radius), this.phi.copy(t.phi), this.theta.copy(t.theta), this
        },
        makeSafe: function () {
            var t = 1e-6;
            this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))
        },
        setFromVector3: function (t) {
            return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(o.Math.clamp(t.y / this.radius, -1, 1))), this
        }
    }, o.Math = {
        generateUUID: function () {
            var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                i = new Array(36),
                n = 0;
            return function () {
                for (var r = 0; r < 36; r++) 8 === r || 13 === r || 18 === r || 23 === r ? i[r] = "-" : 14 === r ? i[r] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0), t = 15 & n, n >>= 4, i[r] = e[19 === r ? 3 & t | 8 : t]);
                return i.join("")
            }
        }(),
        clamp: function (t, e, i) {
            return Math.max(e, Math.min(i, t))
        },
        euclideanModulo: function (t, e) {
            return (t % e + e) % e
        },
        mapLinear: function (t, e, i, n, r) {
            return n + (t - e) * (r - n) / (i - e)
        },
        smoothstep: function (t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * (3 - 2 * t))
        },
        smootherstep: function (t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * t * (t * (6 * t - 15) + 10))
        },
        random16: function () {
            return Math.random()
        },
        randInt: function (t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function (t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function (t) {
            return t * (.5 - Math.random())
        },
        degToRad: function () {
            var t = Math.PI / 180;
            return function (e) {
                return e * t
            }
        }(),
        radToDeg: function () {
            var t = 180 / Math.PI;
            return function (e) {
                return e * t
            }
        }(),
        isPowerOfTwo: function (t) {
            return 0 === (t & t - 1) && 0 !== t
        },
        nearestPowerOfTwo: function (t) {
            return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
        },
        nextPowerOfTwo: function (t) {
            return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, t++, t
        }
    }, o.Spline = function (t) {
        function e(t, e, i, n, r, o, s) {
            var a = .5 * (i - t),
                h = .5 * (n - e);
            return (2 * (e - i) + a + h) * s + (-3 * (e - i) - 2 * a - h) * o + a * r + e
        }
        this.points = t;
        var i, n, r, s, a, h, l, c, u, p = [],
            d = {
                x: 0,
                y: 0,
                z: 0
            };
        this.initFromArray = function (t) {
            this.points = [];
            for (var e = 0; e < t.length; e++) this.points[e] = {
                x: t[e][0],
                y: t[e][1],
                z: t[e][2]
            }
        }, this.getPoint = function (t) {
            return i = (this.points.length - 1) * t, n = Math.floor(i), r = i - n, p[0] = 0 === n ? n : n - 1, p[1] = n, p[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1, p[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2, h = this.points[p[0]], l = this.points[p[1]], c = this.points[p[2]], u = this.points[p[3]], s = r * r, a = r * s, d.x = e(h.x, l.x, c.x, u.x, r, s, a), d.y = e(h.y, l.y, c.y, u.y, r, s, a), d.z = e(h.z, l.z, c.z, u.z, r, s, a), d
        }, this.getControlPointsArray = function () {
            var t, e, i = this.points.length,
                n = [];
            for (t = 0; t < i; t++) e = this.points[t], n[t] = [e.x, e.y, e.z];
            return n
        }, this.getLength = function (t) {
            var e, i, n, r, s = 0,
                a = 0,
                h = 0,
                l = new o.Vector3,
                c = new o.Vector3,
                u = [],
                p = 0;
            for (u[0] = 0, t || (t = 100), n = this.points.length * t, l.copy(this.points[0]), e = 1; e < n; e++) i = e / n, r = this.getPoint(i), c.copy(r), p += c.distanceTo(l), l.copy(r), s = (this.points.length - 1) * i, a = Math.floor(s), a !== h && (u[a] = p, h = a);
            return u[u.length] = p, {
                chunks: u,
                total: p
            }
        }, this.reparametrizeByArcLength = function (t) {
            var e, i, n, r, s, a, h, l, c = [],
                u = new o.Vector3,
                p = this.getLength();
            for (c.push(u.copy(this.points[0]).clone()), e = 1; e < this.points.length; e++) {
                for (a = p.chunks[e] - p.chunks[e - 1], h = Math.ceil(t * a / p.total), r = (e - 1) / (this.points.length - 1), s = e / (this.points.length - 1), i = 1; i < h - 1; i++) n = r + i * (1 / h) * (s - r), l = this.getPoint(n), c.push(u.copy(l).clone());
                c.push(u.copy(this.points[e]).clone())
            }
            this.points = c
        }
    },
    o.Triangle = function (t, e, i) {
        this.a = void 0 !== t ? t : new o.Vector3, this.b = void 0 !== e ? e : new o.Vector3, this.c = void 0 !== i ? i : new o.Vector3
    }, o.Triangle.normal = function () {
        var t = new o.Vector3;
        return function (e, i, n, r) {
            var s = r || new o.Vector3;
            s.subVectors(n, i), t.subVectors(e, i), s.cross(t);
            var a = s.lengthSq();
            return a > 0 ? s.multiplyScalar(1 / Math.sqrt(a)) : s.set(0, 0, 0)
        }
    }(), o.Triangle.barycoordFromPoint = function () {
        var t = new o.Vector3,
            e = new o.Vector3,
            i = new o.Vector3;
        return function (n, r, s, a, h) {
            t.subVectors(a, r), e.subVectors(s, r), i.subVectors(n, r);
            var l = t.dot(t),
                c = t.dot(e),
                u = t.dot(i),
                p = e.dot(e),
                d = e.dot(i),
                f = l * p - c * c,
                m = h || new o.Vector3;
            if (0 === f) return m.set(-2, -1, -1);
            var g = 1 / f,
                v = (p * u - c * d) * g,
                y = (l * d - c * u) * g;
            return m.set(1 - v - y, y, v)
        }
    }(), o.Triangle.containsPoint = function () {
        var t = new o.Vector3;
        return function (e, i, n, r) {
            var s = o.Triangle.barycoordFromPoint(e, i, n, r, t);
            return s.x >= 0 && s.y >= 0 && s.x + s.y <= 1
        }
    }(), o.Triangle.prototype = {
        constructor: o.Triangle,
        set: function (t, e, i) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
        },
        setFromPointsAndIndices: function (t, e, i, n) {
            return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        area: function () {
            var t = new o.Vector3,
                e = new o.Vector3;
            return function () {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(),
        midpoint: function (t) {
            var e = t || new o.Vector3;
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function (t) {
            return o.Triangle.normal(this.a, this.b, this.c, t)
        },
        plane: function (t) {
            var e = t || new o.Plane;
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function (t, e) {
            return o.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function (t) {
            return o.Triangle.containsPoint(t, this.a, this.b, this.c)
        },
        equals: function (t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }, o.Interpolant = function (t, e, i, n) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
    }, o.Interpolant.prototype = {
        constructor: o.Interpolant,
        evaluate: function (t) {
            var e = this.parameterPositions,
                i = this._cachedIndex,
                n = e[i],
                r = e[i - 1];
            t: {
                    e: {
                        var o;
                        i: {
                                n: if (!(t < n)) {
                                    for (var s = i + 2; ;) {
                                        if (void 0 === n) {
                                            if (t < r) break n;
                                            return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                                        }
                                        if (i === s) break;
                                        if (r = n, n = e[++i], t < n) break e
                                    }
                                    o = e.length;
                                    break i
                                } {
                                    if (t >= r) break t;
                                    var a = e[1];
                                    t < a && (i = 2, r = a);
                                    for (var s = i - 2; ;) {
                                        if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                                        if (i === s) break;
                                        if (n = r, r = e[--i - 1], t >= r) break e
                                    }
                                    o = i, i = 0
                                }
                        }
                        for (; i < o;) {
                            var h = i + o >>> 1;
                            t < e[h] ? o = h : i = h + 1
                        }
                        if (n = e[i], r = e[i - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                        if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t)
                    }
                this._cachedIndex = i,
                this.intervalChanged_(i, r, n)
            }
            return this.interpolate_(i, r, t, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function () {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function (t) {
            for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, o = 0; o !== n; ++o) e[o] = i[r + o];
            return e
        },
        interpolate_: function (t, e, i, n) {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function (t, e, i) { }
    }, Object.assign(o.Interpolant.prototype, {
        beforeStart_: o.Interpolant.prototype.copySampleValue_,
        afterEnd_: o.Interpolant.prototype.copySampleValue_
    }), o.CubicInterpolant = function (t, e, i, n) {
        o.Interpolant.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }, o.CubicInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.CubicInterpolant,
        DefaultSettings_: {
            endingStart: o.ZeroCurvatureEnding,
            endingEnd: o.ZeroCurvatureEnding
        },
        intervalChanged_: function (t, e, i) {
            var n = this.parameterPositions,
                r = t - 2,
                s = t + 1,
                a = n[r],
                h = n[s];
            if (void 0 === a) switch (this.getSettings_().endingStart) {
                case o.ZeroSlopeEnding:
                    r = t, a = 2 * e - i;
                    break;
                case o.WrapAroundEnding:
                    r = n.length - 2, a = e + n[r] - n[r + 1];
                    break;
                default:
                    r = t, a = i
            }
            if (void 0 === h) switch (this.getSettings_().endingEnd) {
                case o.ZeroSlopeEnding:
                    s = t, h = 2 * i - e;
                    break;
                case o.WrapAroundEnding:
                    s = 1, h = i + n[1] - n[0];
                    break;
                default:
                    s = t - 1, h = e
            }
            var l = .5 * (i - e),
                c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (h - i), this._offsetPrev = r * c, this._offsetNext = s * c
        },
        interpolate_: function (t, e, i, n) {
            for (var r = this.resultBuffer, o = this.sampleValues, s = this.valueSize, a = t * s, h = a - s, l = this._offsetPrev, c = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, _ = p * m - p * f, x = 0; x !== s; ++x) r[x] = g * o[l + x] + v * o[h + x] + y * o[a + x] + _ * o[c + x];
            return r
        }
    }), o.DiscreteInterpolant = function (t, e, i, n) {
        o.Interpolant.call(this, t, e, i, n)
    }, o.DiscreteInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.DiscreteInterpolant,
        interpolate_: function (t, e, i, n) {
            return this.copySampleValue_(t - 1)
        }
    }), o.LinearInterpolant = function (t, e, i, n) {
        o.Interpolant.call(this, t, e, i, n)
    }, o.LinearInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.LinearInterpolant,
        interpolate_: function (t, e, i, n) {
            for (var r = this.resultBuffer, o = this.sampleValues, s = this.valueSize, a = t * s, h = a - s, l = (i - e) / (n - e), c = 1 - l, u = 0; u !== s; ++u) r[u] = o[h + u] * c + o[a + u] * l;
            return r
        }
    }), o.QuaternionLinearInterpolant = function (t, e, i, n) {
        o.Interpolant.call(this, t, e, i, n)
    }, o.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.QuaternionLinearInterpolant,
        interpolate_: function (t, e, i, n) {
            for (var r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, h = t * a, l = (i - e) / (n - e), c = h + a; h !== c; h += 4) o.Quaternion.slerpFlat(r, 0, s, h - a, s, h, l);
            return r
        }
    }), o.Clock = function (t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }, o.Clock.prototype = {
        constructor: o.Clock,
        start: function () {
            this.startTime = performance.now(), this.oldTime = this.startTime, this.running = !0
        },
        stop: function () {
            this.getElapsedTime(), this.running = !1
        },
        getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running && this.start(), this.running) {
                var e = performance.now();
                t = .001 * (e - this.oldTime), this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }, o.EventDispatcher = function () { }, o.EventDispatcher.prototype = {
        constructor: o.EventDispatcher,
        apply: function (t) {
            t.addEventListener = o.EventDispatcher.prototype.addEventListener, t.hasEventListener = o.EventDispatcher.prototype.hasEventListener, t.removeEventListener = o.EventDispatcher.prototype.removeEventListener, t.dispatchEvent = o.EventDispatcher.prototype.dispatchEvent
        },
        addEventListener: function (t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[t] && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e)
        },
        hasEventListener: function (t, e) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[t] && i[t].indexOf(e) !== -1
        },
        removeEventListener: function (t, e) {
            if (void 0 !== this._listeners) {
                var i = this._listeners,
                    n = i[t];
                if (void 0 !== n) {
                    var r = n.indexOf(e);
                    r !== -1 && n.splice(r, 1)
                }
            }
        },
        dispatchEvent: function (t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners,
                    i = e[t.type];
                if (void 0 !== i) {
                    t.target = this;
                    for (var n = [], r = i.length, o = 0; o < r; o++) n[o] = i[o];
                    for (var o = 0; o < r; o++) n[o].call(this, t)
                }
            }
        }
    }, o.Layers = function () {
        this.mask = 1
    }, o.Layers.prototype = {
        constructor: o.Layers,
        set: function (t) {
            this.mask = 1 << t
        },
        enable: function (t) {
            this.mask |= 1 << t
        },
        toggle: function (t) {
            this.mask ^= 1 << t
        },
        disable: function (t) {
            this.mask &= ~(1 << t)
        },
        test: function (t) {
            return 0 !== (this.mask & t.mask)
        }
    },
        function (t) {
            function e(t, e) {
                return t.distance - e.distance
            }

            function i(t, e, n, r) {
                if (t.visible !== !1 && (t.raycast(e, n), r === !0))
                    for (var o = t.children, s = 0, a = o.length; s < a; s++) i(o[s], e, n, !0)
            }
            t.Raycaster = function (e, i, n, r) {
                this.ray = new t.Ray(e, i), this.near = n || 0, this.far = r || 1 / 0, this.params = {
                    Mesh: {},
                    Line: {},
                    LOD: {},
                    Points: {
                        threshold: 1
                    },
                    Sprite: {}
                }, Object.defineProperties(this.params, {
                    PointCloud: {
                        get: function () {
                            return this.Points
                        }
                    }
                })
            }, t.Raycaster.prototype = {
                constructor: t.Raycaster,
                linePrecision: 1,
                set: function (t, e) {
                    this.ray.set(t, e)
                },
                setFromCamera: function (e, i) {
                    i instanceof t.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(i.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(i).sub(this.ray.origin).normalize()) : i instanceof t.OrthographicCamera && (this.ray.origin.set(e.x, e.y, -1).unproject(i), this.ray.direction.set(0, 0, -1).transformDirection(i.matrixWorld))
                },
                intersectObject: function (t, n) {
                    var r = [];
                    return i(t, this, r, n), r.sort(e), r
                },
                intersectObjects: function (t, n) {
                    var r = [];
                    if (Array.isArray(t) === !1) return r;
                    for (var o = 0, s = t.length; o < s; o++) i(t[o], this, r, n);
                    return r.sort(e), r
                }
            }
        }(o), o.Object3D = function () {
            function t() {
                r.setFromEuler(n, !1)
            }

            function e() {
                n.setFromQuaternion(r, void 0, !1)
            }
            Object.defineProperty(this, "id", {
                value: o.Object3DIdCount++
            }), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = o.Object3D.DefaultUp.clone();
            var i = new o.Vector3,
                n = new o.Euler,
                r = new o.Quaternion,
                s = new o.Vector3(1, 1, 1);
            n.onChange(t), r.onChange(e), Object.defineProperties(this, {
                position: {
                    enumerable: !0,
                    value: i
                },
                rotation: {
                    enumerable: !0,
                    value: n
                },
                quaternion: {
                    enumerable: !0,
                    value: r
                },
                scale: {
                    enumerable: !0,
                    value: s
                },
                modelViewMatrix: {
                    value: new o.Matrix4
                },
                normalMatrix: {
                    value: new o.Matrix3
                }
            }), this.rotationAutoUpdate = !0, this.matrix = new o.Matrix4, this.matrixWorld = new o.Matrix4, this.matrixAutoUpdate = o.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new o.Layers, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
        }, o.Object3D.DefaultUp = new o.Vector3(0, 1, 0), o.Object3D.DefaultMatrixAutoUpdate = !0,
        o.Object3D.prototype = {
            constructor: o.Object3D,
            applyMatrix: function (t) {
                this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            setRotationFromAxisAngle: function (t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            },
            setRotationFromEuler: function (t) {
                this.quaternion.setFromEuler(t, !0)
            },
            setRotationFromMatrix: function (t) {
                this.quaternion.setFromRotationMatrix(t)
            },
            setRotationFromQuaternion: function (t) {
                this.quaternion.copy(t)
            },
            rotateOnAxis: function () {
                var t = new o.Quaternion;
                return function (e, i) {
                    return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
                }
            }(),
            rotateX: function () {
                var t = new o.Vector3(1, 0, 0);
                return function (e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateY: function () {
                var t = new o.Vector3(0, 1, 0);
                return function (e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateZ: function () {
                var t = new o.Vector3(0, 0, 1);
                return function (e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            translateOnAxis: function () {
                var t = new o.Vector3;
                return function (e, i) {
                    return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
                }
            }(),
            translateX: function () {
                var t = new o.Vector3(1, 0, 0);
                return function (e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateY: function () {
                var t = new o.Vector3(0, 1, 0);
                return function (e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateZ: function () {
                var t = new o.Vector3(0, 0, 1);
                return function (e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            localToWorld: function (t) {
                return t.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: function () {
                var t = new o.Matrix4;
                return function (e) {
                    return e.applyMatrix4(t.getInverse(this.matrixWorld))
                }
            }(),
            lookAt: function () {
                var t = new o.Matrix4;
                return function (e) {
                    t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
                }
            }(),
            add: function (t) {
                if (arguments.length > 1) {
                    for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                    return this
                }
                return t === this ? this : (t instanceof o.Object3D && (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                    type: "added"
                }), this.children.push(t)), this)
            },
            remove: function (t) {
                if (arguments.length > 1)
                    for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                var i = this.children.indexOf(t);
                i !== -1 && (t.parent = null, t.dispatchEvent({
                    type: "removed"
                }), this.children.splice(i, 1))
            },
            getObjectById: function (t) {
                return this.getObjectByProperty("id", t)
            },
            getObjectByName: function (t) {
                return this.getObjectByProperty("name", t)
            },
            getObjectByProperty: function (t, e) {
                if (this[t] === e) return this;
                for (var i = 0, n = this.children.length; i < n; i++) {
                    var r = this.children[i],
                        o = r.getObjectByProperty(t, e);
                    if (void 0 !== o) return o
                }
            },
            getWorldPosition: function (t) {
                var e = t || new o.Vector3;
                return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function () {
                var t = new o.Vector3,
                    e = new o.Vector3;
                return function (i) {
                    var n = i || new o.Quaternion;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n
                }
            }(),
            getWorldRotation: function () {
                var t = new o.Quaternion;
                return function (e) {
                    var i = e || new o.Euler;
                    return this.getWorldQuaternion(t), i.setFromQuaternion(t, this.rotation.order, !1)
                }
            }(),
            getWorldScale: function () {
                var t = new o.Vector3,
                    e = new o.Quaternion;
                return function (i) {
                    var n = i || new o.Vector3;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n
                }
            }(),
            getWorldDirection: function () {
                var t = new o.Quaternion;
                return function (e) {
                    var i = e || new o.Vector3;
                    return this.getWorldQuaternion(t), i.set(0, 0, 1).applyQuaternion(t)
                }
            }(),
            raycast: function () { },
            traverse: function (t) {
                t(this);
                for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
            },
            traverseVisible: function (t) {
                if (this.visible !== !1) {
                    t(this);
                    for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
                }
            },
            traverseAncestors: function (t) {
                var e = this.parent;
                null !== e && (t(e), e.traverseAncestors(t))
            },
            updateMatrix: function () {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function (t) {
                this.matrixAutoUpdate === !0 && this.updateMatrix(), this.matrixWorldNeedsUpdate !== !0 && t !== !0 || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                for (var e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t)
            },
            toJSON: function (t) {
                function e(t) {
                    var e = [];
                    for (var i in t) {
                        var n = t[i];
                        delete n.metadata, e.push(n)
                    }
                    return e
                }
                var i = void 0 === t,
                    n = {};
                i && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {}
                }, n.metadata = {
                    version: 4.4,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                var r = {};
                if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), r.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)), r.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)), r.material = this.material.uuid), this.children.length > 0) {
                    r.children = [];
                    for (var o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object)
                }
                if (i) {
                    var s = e(t.geometries),
                        a = e(t.materials),
                        h = e(t.textures),
                        l = e(t.images);
                    s.length > 0 && (n.geometries = s), a.length > 0 && (n.materials = a), h.length > 0 && (n.textures = h), l.length > 0 && (n.images = l)
                }
                return n.object = r, n
            },
            clone: function (t) {
                return (new this.constructor).copy(this, t)
            },
            copy: function (t, e) {
                if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.rotationAutoUpdate = t.rotationAutoUpdate, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
                    for (var i = 0; i < t.children.length; i++) {
                        var n = t.children[i];
                        this.add(n.clone())
                    }
                return this
            }
        }, o.EventDispatcher.prototype.apply(o.Object3D.prototype), o.Object3DIdCount = 0, o.Face3 = function (t, e, i, n, r, s) {
            this.a = t, this.b = e, this.c = i, this.normal = n instanceof o.Vector3 ? n : new o.Vector3, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r instanceof o.Color ? r : new o.Color, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== s ? s : 0
        }, o.Face3.prototype = {
            constructor: o.Face3,
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (t) {
                this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
                for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
                for (var e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
                return this
            }
        }, o.BufferAttribute = function (t, e) {
            this.uuid = o.Math.generateUUID(), this.array = t, this.itemSize = e, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }, o.BufferAttribute.prototype = {
            constructor: o.BufferAttribute,
            get count() {
                return this.array.length / this.itemSize
            },
            set needsUpdate(t) {
                t === !0 && this.version++
            },
            setDynamic: function (t) {
                return this.dynamic = t, this
            },
            copy: function (t) {
                return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.dynamic = t.dynamic, this
            },
            copyAt: function (t, e, i) {
                t *= this.itemSize, i *= e.itemSize;
                for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
                return this
            },
            copyArray: function (t) {
                return this.array.set(t), this
            },
            copyColorsArray: function (t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var s = t[n];
                    void 0 === s && (s = new o.Color), e[i++] = s.r, e[i++] = s.g, e[i++] = s.b
                }
                return this
            },
            copyIndicesArray: function (t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var o = t[n];
                    e[i++] = o.a, e[i++] = o.b, e[i++] = o.c
                }
                return this
            },
            copyVector2sArray: function (t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var s = t[n];
                    void 0 === s && (s = new o.Vector2), e[i++] = s.x, e[i++] = s.y
                }
                return this
            },
            copyVector3sArray: function (t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var s = t[n];
                    void 0 === s && (s = new o.Vector3), e[i++] = s.x, e[i++] = s.y, e[i++] = s.z
                }
                return this
            },
            copyVector4sArray: function (t) {
                for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                    var s = t[n];
                    void 0 === s && (s = new o.Vector4), e[i++] = s.x, e[i++] = s.y, e[i++] = s.z, e[i++] = s.w
                }
                return this
            },
            set: function (t, e) {
                return void 0 === e && (e = 0), this.array.set(t, e), this
            },
            getX: function (t) {
                return this.array[t * this.itemSize]
            },
            setX: function (t, e) {
                return this.array[t * this.itemSize] = e, this
            },
            getY: function (t) {
                return this.array[t * this.itemSize + 1]
            },
            setY: function (t, e) {
                return this.array[t * this.itemSize + 1] = e, this
            },
            getZ: function (t) {
                return this.array[t * this.itemSize + 2]
            },
            setZ: function (t, e) {
                return this.array[t * this.itemSize + 2] = e, this
            },
            getW: function (t) {
                return this.array[t * this.itemSize + 3]
            },
            setW: function (t, e) {
                return this.array[t * this.itemSize + 3] = e, this
            },
            setXY: function (t, e, i) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
            },
            setXYZ: function (t, e, i, n) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
            },
            setXYZW: function (t, e, i, n, r) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
            },
            clone: function () {
                return (new this.constructor).copy(this)
            }
        }, o.Int8Attribute = function (t, e) {
            return new o.BufferAttribute(new Int8Array(t), e)
        }, o.Uint8Attribute = function (t, e) {
            return new o.BufferAttribute(new Uint8Array(t), e)
        }, o.Uint8ClampedAttribute = function (t, e) {
            return new o.BufferAttribute(new Uint8ClampedArray(t), e)
        }, o.Int16Attribute = function (t, e) {
            return new o.BufferAttribute(new Int16Array(t), e)
        }, o.Uint16Attribute = function (t, e) {
            return new o.BufferAttribute(new Uint16Array(t), e)
        }, o.Int32Attribute = function (t, e) {
            return new o.BufferAttribute(new Int32Array(t), e)
        }, o.Uint32Attribute = function (t, e) {
            return new o.BufferAttribute(new Uint32Array(t), e)
        }, o.Float32Attribute = function (t, e) {
            return new o.BufferAttribute(new Float32Array(t), e)
        }, o.Float64Attribute = function (t, e) {
            return new o.BufferAttribute(new Float64Array(t), e)
        }, o.DynamicBufferAttribute = function (t, e) {
            return new o.BufferAttribute(t, e).setDynamic(!0)
        }, o.InstancedBufferAttribute = function (t, e, i) {
            o.BufferAttribute.call(this, t, e), this.meshPerAttribute = i || 1
        }, o.InstancedBufferAttribute.prototype = Object.create(o.BufferAttribute.prototype), o.InstancedBufferAttribute.prototype.constructor = o.InstancedBufferAttribute, o.InstancedBufferAttribute.prototype.copy = function (t) {
            return o.BufferAttribute.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }, o.InterleavedBuffer = function (t, e) {
            this.uuid = o.Math.generateUUID(), this.array = t, this.stride = e, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }, o.InterleavedBuffer.prototype = {
            constructor: o.InterleavedBuffer,
            get length() {
                return this.array.length
            },
            get count() {
                return this.array.length / this.stride
            },
            set needsUpdate(t) {
                t === !0 && this.version++
            },
            setDynamic: function (t) {
                return this.dynamic = t, this
            },
            copy: function (t) {
                return this.array = new t.array.constructor(t.array), this.stride = t.stride, this.dynamic = t.dynamic, this
            },
            copyAt: function (t, e, i) {
                t *= this.stride, i *= e.stride;
                for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
                return this
            },
            set: function (t, e) {
                return void 0 === e && (e = 0), this.array.set(t, e), this
            },
            clone: function () {
                return (new this.constructor).copy(this)
            }
        }, o.InstancedInterleavedBuffer = function (t, e, i) {
            o.InterleavedBuffer.call(this, t, e), this.meshPerAttribute = i || 1
        }, o.InstancedInterleavedBuffer.prototype = Object.create(o.InterleavedBuffer.prototype), o.InstancedInterleavedBuffer.prototype.constructor = o.InstancedInterleavedBuffer, o.InstancedInterleavedBuffer.prototype.copy = function (t) {
            return o.InterleavedBuffer.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }, o.InterleavedBufferAttribute = function (t, e, i) {
            this.uuid = o.Math.generateUUID(), this.data = t, this.itemSize = e, this.offset = i
        }, o.InterleavedBufferAttribute.prototype = {
            constructor: o.InterleavedBufferAttribute,
            get length() {
                return this.array.length
            },
            get count() {
                return this.data.count
            },
            setX: function (t, e) {
                return this.data.array[t * this.data.stride + this.offset] = e, this
            },
            setY: function (t, e) {
                return this.data.array[t * this.data.stride + this.offset + 1] = e, this
            },
            setZ: function (t, e) {
                return this.data.array[t * this.data.stride + this.offset + 2] = e, this
            },
            setW: function (t, e) {
                return this.data.array[t * this.data.stride + this.offset + 3] = e, this
            },
            getX: function (t) {
                return this.data.array[t * this.data.stride + this.offset]
            },
            getY: function (t) {
                return this.data.array[t * this.data.stride + this.offset + 1]
            },
            getZ: function (t) {
                return this.data.array[t * this.data.stride + this.offset + 2]
            },
            getW: function (t) {
                return this.data.array[t * this.data.stride + this.offset + 3]
            },
            setXY: function (t, e, i) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
            },
            setXYZ: function (t, e, i, n) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
            },
            setXYZW: function (t, e, i, n, r) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
            }
        }, o.Geometry = function () {
            Object.defineProperty(this, "id", {
                value: o.GeometryIdCount++
            }), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
        }, o.Geometry.prototype = {
            constructor: o.Geometry,
            applyMatrix: function (t) {
                for (var e = (new o.Matrix3).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
                    var r = this.vertices[i];
                    r.applyMatrix4(t)
                }
                for (var i = 0, n = this.faces.length; i < n; i++) {
                    var s = this.faces[i];
                    s.normal.applyMatrix3(e).normalize();
                    for (var a = 0, h = s.vertexNormals.length; a < h; a++) s.vertexNormals[a].applyMatrix3(e).normalize()
                }
                return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
            },
            rotateX: function () {
                var t;
                return function (e) {
                    return void 0 === t && (t = new o.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
                }
            }(),
            rotateY: function () {
                var t;
                return function (e) {
                    return void 0 === t && (t = new o.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
                }
            }(),
            rotateZ: function () {
                var t;
                return function (e) {
                    return void 0 === t && (t = new o.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
                }
            }(),
            translate: function () {
                var t;
                return function (e, i, n) {
                    return void 0 === t && (t = new o.Matrix4), t.makeTranslation(e, i, n), this.applyMatrix(t), this
                }
            }(),
            scale: function () {
                var t;
                return function (e, i, n) {
                    return void 0 === t && (t = new o.Matrix4), t.makeScale(e, i, n), this.applyMatrix(t), this
                }
            }(),
            lookAt: function () {
                var t;
                return function (e) {
                    void 0 === t && (t = new o.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                }
            }(),
            fromBufferGeometry: function (t) {
                function e(t, e, n, r) {
                    var s = void 0 !== a ? [u[t].clone(), u[e].clone(), u[n].clone()] : [],
                        f = void 0 !== h ? [i.colors[t].clone(), i.colors[e].clone(), i.colors[n].clone()] : [],
                        m = new o.Face3(t, e, n, s, f, r);
                    i.faces.push(m), void 0 !== l && i.faceVertexUvs[0].push([p[t].clone(), p[e].clone(), p[n].clone()]), void 0 !== c && i.faceVertexUvs[1].push([d[t].clone(), d[e].clone(), d[n].clone()])
                }
                var i = this,
                    n = null !== t.index ? t.index.array : void 0,
                    r = t.attributes,
                    s = r.position.array,
                    a = void 0 !== r.normal ? r.normal.array : void 0,
                    h = void 0 !== r.color ? r.color.array : void 0,
                    l = void 0 !== r.uv ? r.uv.array : void 0,
                    c = void 0 !== r.uv2 ? r.uv2.array : void 0;
                void 0 !== c && (this.faceVertexUvs[1] = []);
                for (var u = [], p = [], d = [], f = 0, m = 0; f < s.length; f += 3, m += 2) i.vertices.push(new o.Vector3(s[f], s[f + 1], s[f + 2])), void 0 !== a && u.push(new o.Vector3(a[f], a[f + 1], a[f + 2])), void 0 !== h && i.colors.push(new o.Color(h[f], h[f + 1], h[f + 2])), void 0 !== l && p.push(new o.Vector2(l[m], l[m + 1])), void 0 !== c && d.push(new o.Vector2(c[m], c[m + 1]));
                if (void 0 !== n) {
                    var g = t.groups;
                    if (g.length > 0)
                        for (var f = 0; f < g.length; f++)
                            for (var v = g[f], y = v.start, _ = v.count, m = y, x = y + _; m < x; m += 3) e(n[m], n[m + 1], n[m + 2], v.materialIndex);
                    else
                        for (var f = 0; f < n.length; f += 3) e(n[f], n[f + 1], n[f + 2])
                } else
                    for (var f = 0; f < s.length / 3; f += 3) e(f, f + 1, f + 2);
                return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
            },
            center: function () {
                this.computeBoundingBox();
                var t = this.boundingBox.center().negate();
                return this.translate(t.x, t.y, t.z), t
            },
            normalize: function () {
                this.computeBoundingSphere();
                var t = this.boundingSphere.center,
                    e = this.boundingSphere.radius,
                    i = 0 === e ? 1 : 1 / e,
                    n = new o.Matrix4;
                return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
            },
            computeFaceNormals: function () {
                for (var t = new o.Vector3, e = new o.Vector3, i = 0, n = this.faces.length; i < n; i++) {
                    var r = this.faces[i],
                        s = this.vertices[r.a],
                        a = this.vertices[r.b],
                        h = this.vertices[r.c];
                    t.subVectors(h, a), e.subVectors(s, a), t.cross(e), t.normalize(), r.normal.copy(t)
                }
            },
            computeVertexNormals: function (t) {
                void 0 === t && (t = !0);
                var e, i, n, r, s, a;
                for (a = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) a[e] = new o.Vector3;
                if (t) {
                    var h, l, c, u = new o.Vector3,
                        p = new o.Vector3;
                    for (n = 0, r = this.faces.length; n < r; n++) s = this.faces[n], h = this.vertices[s.a], l = this.vertices[s.b], c = this.vertices[s.c], u.subVectors(c, l), p.subVectors(h, l), u.cross(p), a[s.a].add(u), a[s.b].add(u), a[s.c].add(u)
                } else
                    for (n = 0, r = this.faces.length; n < r; n++) s = this.faces[n], a[s.a].add(s.normal), a[s.b].add(s.normal), a[s.c].add(s.normal);
                for (e = 0, i = this.vertices.length; e < i; e++) a[e].normalize();
                for (n = 0, r = this.faces.length; n < r; n++) {
                    s = this.faces[n];
                    var d = s.vertexNormals;
                    3 === d.length ? (d[0].copy(a[s.a]), d[1].copy(a[s.b]), d[2].copy(a[s.c])) : (d[0] = a[s.a].clone(), d[1] = a[s.b].clone(), d[2] = a[s.c].clone())
                }
                this.faces.length > 0 && (this.normalsNeedUpdate = !0)
            },
            computeMorphNormals: function () {
                var t, e, i, n, r;
                for (i = 0, n = this.faces.length; i < n; i++)
                    for (r = this.faces[i], r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
                var s = new o.Geometry;
                for (s.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                    if (!this.morphNormals[t]) {
                        this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                        var a, h, l = this.morphNormals[t].faceNormals,
                            c = this.morphNormals[t].vertexNormals;
                        for (i = 0, n = this.faces.length; i < n; i++) a = new o.Vector3, h = {
                            a: new o.Vector3,
                            b: new o.Vector3,
                            c: new o.Vector3
                        }, l.push(a), c.push(h)
                    }
                    var u = this.morphNormals[t];
                    s.vertices = this.morphTargets[t].vertices, s.computeFaceNormals(), s.computeVertexNormals();
                    var a, h;
                    for (i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], a = u.faceNormals[i], h = u.vertexNormals[i], a.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
                }
                for (i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], r.normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
            },
            computeTangents: function () { },
            computeLineDistances: function () {
                for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) i > 0 && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t
            },
            computeBoundingBox: function () {
                null === this.boundingBox && (this.boundingBox = new o.Box3), this.boundingBox.setFromPoints(this.vertices)
            },
            computeBoundingSphere: function () {
                null === this.boundingSphere && (this.boundingSphere = new o.Sphere), this.boundingSphere.setFromPoints(this.vertices)
            },
            merge: function (t, e, i) {
                if (t instanceof o.Geometry != !1) {
                    var n, r = this.vertices.length,
                        s = this.vertices,
                        a = t.vertices,
                        h = this.faces,
                        l = t.faces,
                        c = this.faceVertexUvs[0],
                        u = t.faceVertexUvs[0];
                    void 0 === i && (i = 0), void 0 !== e && (n = (new o.Matrix3).getNormalMatrix(e));
                    for (var p = 0, d = a.length; p < d; p++) {
                        var f = a[p],
                            m = f.clone();
                        void 0 !== e && m.applyMatrix4(e), s.push(m)
                    }
                    for (p = 0, d = l.length; p < d; p++) {
                        var g, v, y, _ = l[p],
                            x = _.vertexNormals,
                            b = _.vertexColors;
                        g = new o.Face3(_.a + r, _.b + r, _.c + r), g.normal.copy(_.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
                        for (var w = 0, S = x.length; w < S; w++) v = x[w].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v);
                        g.color.copy(_.color);
                        for (var w = 0, S = b.length; w < S; w++) y = b[w], g.vertexColors.push(y.clone());
                        g.materialIndex = _.materialIndex + i, h.push(g)
                    }
                    for (p = 0, d = u.length; p < d; p++) {
                        var T = u[p],
                            M = [];
                        if (void 0 !== T) {
                            for (var w = 0, S = T.length; w < S; w++) M.push(T[w].clone());
                            c.push(M)
                        }
                    }
                }
            },
            mergeMesh: function (t) {
                t instanceof o.Mesh != !1 && (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix))
            },
            mergeVertices: function () {
                var t, e, i, n, r, o, s, a, h = {},
                    l = [],
                    c = [],
                    u = 4,
                    p = Math.pow(10, u);
                for (i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], e = Math.round(t.x * p) + "_" + Math.round(t.y * p) + "_" + Math.round(t.z * p), void 0 === h[e] ? (h[e] = i, l.push(this.vertices[i]), c[i] = l.length - 1) : c[i] = c[h[e]];
                var d = [];
                for (i = 0, n = this.faces.length; i < n; i++) {
                    r = this.faces[i], r.a = c[r.a], r.b = c[r.b], r.c = c[r.c], o = [r.a, r.b, r.c];
                    for (var f = -1, m = 0; m < 3; m++)
                        if (o[m] === o[(m + 1) % 3]) {
                            f = m, d.push(i);
                            break
                        }
                }
                for (i = d.length - 1; i >= 0; i--) {
                    var g = d[i];
                    for (this.faces.splice(g, 1), s = 0, a = this.faceVertexUvs.length; s < a; s++) this.faceVertexUvs[s].splice(g, 1)
                }
                var v = this.vertices.length - l.length;
                return this.vertices = l, v
            },
            sortFacesByMaterialIndex: function () {
                function t(t, e) {
                    return t.materialIndex - e.materialIndex
                }
                for (var e = this.faces, i = e.length, n = 0; n < i; n++) e[n]._id = n;
                e.sort(t);
                var r, o, s = this.faceVertexUvs[0],
                    a = this.faceVertexUvs[1];
                s && s.length === i && (r = []), a && a.length === i && (o = []);
                for (var n = 0; n < i; n++) {
                    var h = e[n]._id;
                    r && r.push(s[h]), o && o.push(a[h])
                }
                r && (this.faceVertexUvs[0] = r), o && (this.faceVertexUvs[1] = o)
            },
            toJSON: function () {
                function t(t, e, i) {
                    return i ? t | 1 << e : t & ~(1 << e)
                }

                function e(t) {
                    var e = t.x.toString() + t.y.toString() + t.z.toString();
                    return void 0 !== p[e] ? p[e] : (p[e] = u.length / 3, u.push(t.x, t.y, t.z), p[e])
                }

                function i(t) {
                    var e = t.r.toString() + t.g.toString() + t.b.toString();
                    return void 0 !== f[e] ? f[e] : (f[e] = d.length, d.push(t.getHex()), f[e])
                }

                function n(t) {
                    var e = t.x.toString() + t.y.toString();
                    return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2, m.push(t.x, t.y), g[e])
                }
                var r = {
                    metadata: {
                        version: 4.4,
                        type: "Geometry",
                        generator: "Geometry.toJSON"
                    }
                };
                if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
                    var o = this.parameters;
                    for (var s in o) void 0 !== o[s] && (r[s] = o[s]);
                    return r
                }
                for (var a = [], h = 0; h < this.vertices.length; h++) {
                    var l = this.vertices[h];
                    a.push(l.x, l.y, l.z)
                }
                for (var c = [], u = [], p = {}, d = [], f = {}, m = [], g = {}, h = 0; h < this.faces.length; h++) {
                    var v = this.faces[h],
                        y = !0,
                        _ = !1,
                        x = void 0 !== this.faceVertexUvs[0][h],
                        b = v.normal.length() > 0,
                        w = v.vertexNormals.length > 0,
                        S = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
                        T = v.vertexColors.length > 0,
                        M = 0;
                    if (M = t(M, 0, 0), M = t(M, 1, y), M = t(M, 2, _), M = t(M, 3, x), M = t(M, 4, b), M = t(M, 5, w), M = t(M, 6, S), M = t(M, 7, T), c.push(M), c.push(v.a, v.b, v.c), c.push(v.materialIndex), x) {
                        var E = this.faceVertexUvs[0][h];
                        c.push(n(E[0]), n(E[1]), n(E[2]))
                    }
                    if (b && c.push(e(v.normal)), w) {
                        var A = v.vertexNormals;
                        c.push(e(A[0]), e(A[1]), e(A[2]))
                    }
                    if (S && c.push(i(v.color)), T) {
                        var C = v.vertexColors;
                        c.push(i(C[0]), i(C[1]), i(C[2]))
                    }
                }
                return r.data = {}, r.data.vertices = a, r.data.normals = u, d.length > 0 && (r.data.colors = d), m.length > 0 && (r.data.uvs = [m]), r.data.faces = c, r
            },
            clone: function () {
                return (new o.Geometry).copy(this)
            },
            copy: function (t) {
                this.vertices = [], this.faces = [], this.faceVertexUvs = [
                    []
                ];
                for (var e = t.vertices, i = 0, n = e.length; i < n; i++) this.vertices.push(e[i].clone());
                for (var r = t.faces, i = 0, n = r.length; i < n; i++) this.faces.push(r[i].clone());
                for (var i = 0, n = t.faceVertexUvs.length; i < n; i++) {
                    var o = t.faceVertexUvs[i];
                    void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
                    for (var s = 0, a = o.length; s < a; s++) {
                        for (var h = o[s], l = [], c = 0, u = h.length; c < u; c++) {
                            var p = h[c];
                            l.push(p.clone())
                        }
                        this.faceVertexUvs[i].push(l)
                    }
                }
                return this
            },
            dispose: function () {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, o.EventDispatcher.prototype.apply(o.Geometry.prototype), o.GeometryIdCount = 0, o.DirectGeometry = function () {
            Object.defineProperty(this, "id", {
                value: o.GeometryIdCount++
            }), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
        }, o.DirectGeometry.prototype = {
            constructor: o.DirectGeometry,
            computeBoundingBox: o.Geometry.prototype.computeBoundingBox,
            computeBoundingSphere: o.Geometry.prototype.computeBoundingSphere,
            computeFaceNormals: function () { },
            computeVertexNormals: function () { },
            computeGroups: function (t) {
                for (var e, i, n = [], r = t.faces, o = 0; o < r.length; o++) {
                    var s = r[o];
                    s.materialIndex !== i && (i = s.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), e = {
                        start: 3 * o,
                        materialIndex: i
                    })
                }
                void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), this.groups = n
            },
            fromGeometry: function (t) {
                var e, i = t.faces,
                    n = t.vertices,
                    r = t.faceVertexUvs,
                    s = r[0] && r[0].length > 0,
                    a = r[1] && r[1].length > 0,
                    h = t.morphTargets,
                    l = h.length;
                if (l > 0) {
                    e = [];
                    for (var c = 0; c < l; c++) e[c] = [];
                    this.morphTargets.position = e
                }
                var u, p = t.morphNormals,
                    d = p.length;
                if (d > 0) {
                    u = [];
                    for (var c = 0; c < d; c++) u[c] = [];
                    this.morphTargets.normal = u
                }
                for (var f = t.skinIndices, m = t.skinWeights, g = f.length === n.length, v = m.length === n.length, c = 0; c < i.length; c++) {
                    var y = i[c];
                    this.vertices.push(n[y.a], n[y.b], n[y.c]);
                    var _ = y.vertexNormals;
                    if (3 === _.length) this.normals.push(_[0], _[1], _[2]);
                    else {
                        var x = y.normal;
                        this.normals.push(x, x, x)
                    }
                    var b = y.vertexColors;
                    if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
                    else {
                        var w = y.color;
                        this.colors.push(w, w, w)
                    } if (s === !0) {
                        var S = r[0][c];
                        void 0 !== S ? this.uvs.push(S[0], S[1], S[2]) : this.uvs.push(new o.Vector2, new o.Vector2, new o.Vector2)
                    }
                    if (a === !0) {
                        var S = r[1][c];
                        void 0 !== S ? this.uvs2.push(S[0], S[1], S[2]) : this.uvs2.push(new o.Vector2, new o.Vector2, new o.Vector2)
                    }
                    for (var T = 0; T < l; T++) {
                        var M = h[T].vertices;
                        e[T].push(M[y.a], M[y.b], M[y.c])
                    }
                    for (var T = 0; T < d; T++) {
                        var E = p[T].vertexNormals[c];
                        u[T].push(E.a, E.b, E.c)
                    }
                    g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
                }
                return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
            },
            dispose: function () {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, o.EventDispatcher.prototype.apply(o.DirectGeometry.prototype), o.BufferGeometry = function () {
            Object.defineProperty(this, "id", {
                value: o.GeometryIdCount++
            }), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }
        }, o.BufferGeometry.prototype = {
            constructor: o.BufferGeometry,
            getIndex: function () {
                return this.index
            },
            setIndex: function (t) {
                this.index = t
            },
            addAttribute: function (t, e) {
                return e instanceof o.BufferAttribute == !1 && e instanceof o.InterleavedBufferAttribute == !1 ? void this.addAttribute(t, new o.BufferAttribute(arguments[1], arguments[2])) : "index" === t ? void this.setIndex(e) : (this.attributes[t] = e, this)
            },
            getAttribute: function (t) {
                return this.attributes[t]
            },
            removeAttribute: function (t) {
                return delete this.attributes[t], this
            },
            addGroup: function (t, e, i) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: void 0 !== i ? i : 0
                })
            },
            clearGroups: function () {
                this.groups = []
            },
            setDrawRange: function (t, e) {
                this.drawRange.start = t, this.drawRange.count = e
            },
            applyMatrix: function (t) {
                var e = this.attributes.position;
                void 0 !== e && (t.applyToVector3Array(e.array), e.needsUpdate = !0);
                var i = this.attributes.normal;
                if (void 0 !== i) {
                    var n = (new o.Matrix3).getNormalMatrix(t);
                    n.applyToVector3Array(i.array), i.needsUpdate = !0
                }
                return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
            },
            rotateX: function () {
                var t;
                return function (e) {
                    return void 0 === t && (t = new o.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
                }
            }(),
            rotateY: function () {
                var t;
                return function (e) {
                    return void 0 === t && (t = new o.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
                }
            }(),
            rotateZ: function () {
                var t;
                return function (e) {
                    return void 0 === t && (t = new o.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
                }
            }(),
            translate: function () {
                var t;
                return function (e, i, n) {
                    return void 0 === t && (t = new o.Matrix4), t.makeTranslation(e, i, n), this.applyMatrix(t), this
                }
            }(),
            scale: function () {
                var t;
                return function (e, i, n) {
                    return void 0 === t && (t = new o.Matrix4), t.makeScale(e, i, n), this.applyMatrix(t), this
                }
            }(),
            lookAt: function () {
                var t;
                return function (e) {
                    void 0 === t && (t = new o.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                }
            }(),
            center: function () {
                this.computeBoundingBox();
                var t = this.boundingBox.center().negate();
                return this.translate(t.x, t.y, t.z), t
            },
            setFromObject: function (t) {
                var e = t.geometry;
                if (t instanceof o.Points || t instanceof o.Line) {
                    var i = new o.Float32Attribute(3 * e.vertices.length, 3),
                        n = new o.Float32Attribute(3 * e.colors.length, 3);
                    if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                        var r = new o.Float32Attribute(e.lineDistances.length, 1);
                        this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                    }
                    null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                } else t instanceof o.Mesh && e instanceof o.Geometry && this.fromGeometry(e);
                return this
            },
            updateFromObject: function (t) {
                var e = t.geometry;
                if (t instanceof o.Mesh) {
                    var i = e.__directGeometry;
                    if (void 0 === i) return this.fromGeometry(e);
                    i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i
                }
                if (e.verticesNeedUpdate === !0) {
                    var n = this.attributes.position;
                    void 0 !== n && (n.copyVector3sArray(e.vertices), n.needsUpdate = !0), e.verticesNeedUpdate = !1
                }
                if (e.normalsNeedUpdate === !0) {
                    var n = this.attributes.normal;
                    void 0 !== n && (n.copyVector3sArray(e.normals), n.needsUpdate = !0), e.normalsNeedUpdate = !1
                }
                if (e.colorsNeedUpdate === !0) {
                    var n = this.attributes.color;
                    void 0 !== n && (n.copyColorsArray(e.colors), n.needsUpdate = !0), e.colorsNeedUpdate = !1
                }
                if (e.uvsNeedUpdate) {
                    var n = this.attributes.uv;
                    void 0 !== n && (n.copyVector2sArray(e.uvs), n.needsUpdate = !0), e.uvsNeedUpdate = !1
                }
                if (e.lineDistancesNeedUpdate) {
                    var n = this.attributes.lineDistance;
                    void 0 !== n && (n.copyArray(e.lineDistances), n.needsUpdate = !0), e.lineDistancesNeedUpdate = !1
                }
                return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
            },
            fromGeometry: function (t) {
                return t.__directGeometry = (new o.DirectGeometry).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
            },
            fromDirectGeometry: function (t) {
                var e = new Float32Array(3 * t.vertices.length);
                if (this.addAttribute("position", new o.BufferAttribute(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                    var i = new Float32Array(3 * t.normals.length);
                    this.addAttribute("normal", new o.BufferAttribute(i, 3).copyVector3sArray(t.normals))
                }
                if (t.colors.length > 0) {
                    var n = new Float32Array(3 * t.colors.length);
                    this.addAttribute("color", new o.BufferAttribute(n, 3).copyColorsArray(t.colors))
                }
                if (t.uvs.length > 0) {
                    var r = new Float32Array(2 * t.uvs.length);
                    this.addAttribute("uv", new o.BufferAttribute(r, 2).copyVector2sArray(t.uvs))
                }
                if (t.uvs2.length > 0) {
                    var s = new Float32Array(2 * t.uvs2.length);
                    this.addAttribute("uv2", new o.BufferAttribute(s, 2).copyVector2sArray(t.uvs2))
                }
                if (t.indices.length > 0) {
                    var a = t.vertices.length > 65535 ? Uint32Array : Uint16Array,
                        h = new a(3 * t.indices.length);
                    this.setIndex(new o.BufferAttribute(h, 1).copyIndicesArray(t.indices))
                }
                this.groups = t.groups;
                for (var l in t.morphTargets) {
                    for (var c = [], u = t.morphTargets[l], p = 0, d = u.length; p < d; p++) {
                        var f = u[p],
                            m = new o.Float32Attribute(3 * f.length, 3);
                        c.push(m.copyVector3sArray(f))
                    }
                    this.morphAttributes[l] = c
                }
                if (t.skinIndices.length > 0) {
                    var g = new o.Float32Attribute(4 * t.skinIndices.length, 4);
                    this.addAttribute("skinIndex", g.copyVector4sArray(t.skinIndices))
                }
                if (t.skinWeights.length > 0) {
                    var v = new o.Float32Attribute(4 * t.skinWeights.length, 4);
                    this.addAttribute("skinWeight", v.copyVector4sArray(t.skinWeights))
                }
                return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
            },
            computeBoundingBox: function () {
                new o.Vector3;
                return function () {
                    null === this.boundingBox && (this.boundingBox = new o.Box3);
                    var t = this.attributes.position.array;
                    t && this.boundingBox.setFromArray(t), void 0 !== t && 0 !== t.length || (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
                }
            }(),
            computeBoundingSphere: function () {
                var t = new o.Box3,
                    e = new o.Vector3;
                return function () {
                    null === this.boundingSphere && (this.boundingSphere = new o.Sphere);
                    var i = this.attributes.position.array;
                    if (i) {
                        var n = this.boundingSphere.center;
                        t.setFromArray(i), t.center(n);
                        for (var r = 0, s = 0, a = i.length; s < a; s += 3) e.fromArray(i, s), r = Math.max(r, n.distanceToSquared(e));
                        this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius)
                    }
                }
            }(),
            computeFaceNormals: function () { },
            computeVertexNormals: function () {
                var t = this.index,
                    e = this.attributes,
                    i = this.groups;
                if (e.position) {
                    var n = e.position.array;
                    if (void 0 === e.normal) this.addAttribute("normal", new o.BufferAttribute(new Float32Array(n.length), 3));
                    else
                        for (var r = e.normal.array, s = 0, a = r.length; s < a; s++) r[s] = 0;
                    var h, l, c, u = e.normal.array,
                        p = new o.Vector3,
                        d = new o.Vector3,
                        f = new o.Vector3,
                        m = new o.Vector3,
                        g = new o.Vector3;
                    if (t) {
                        var v = t.array;
                        0 === i.length && this.addGroup(0, v.length);
                        for (var y = 0, _ = i.length; y < _; ++y)
                            for (var x = i[y], b = x.start, w = x.count, s = b, a = b + w; s < a; s += 3) h = 3 * v[s + 0], l = 3 * v[s + 1], c = 3 * v[s + 2], p.fromArray(n, h), d.fromArray(n, l), f.fromArray(n, c), m.subVectors(f, d), g.subVectors(p, d), m.cross(g), u[h] += m.x, u[h + 1] += m.y, u[h + 2] += m.z, u[l] += m.x, u[l + 1] += m.y, u[l + 2] += m.z, u[c] += m.x, u[c + 1] += m.y, u[c + 2] += m.z
                    } else
                        for (var s = 0, a = n.length; s < a; s += 9) p.fromArray(n, s), d.fromArray(n, s + 3), f.fromArray(n, s + 6), m.subVectors(f, d), g.subVectors(p, d), m.cross(g), u[s] = m.x, u[s + 1] = m.y, u[s + 2] = m.z, u[s + 3] = m.x, u[s + 4] = m.y, u[s + 5] = m.z, u[s + 6] = m.x, u[s + 7] = m.y, u[s + 8] = m.z;
                    this.normalizeNormals(), e.normal.needsUpdate = !0
                }
            },
            merge: function (t, e) {
                if (t instanceof o.BufferGeometry != !1) {
                    void 0 === e && (e = 0);
                    var i = this.attributes;
                    for (var n in i)
                        if (void 0 !== t.attributes[n])
                            for (var r = i[n], s = r.array, a = t.attributes[n], h = a.array, l = a.itemSize, c = 0, u = l * e; c < h.length; c++, u++) s[u] = h[c];
                    return this
                }
            },
            normalizeNormals: function () {
                for (var t, e, i, n, r = this.attributes.normal.array, o = 0, s = r.length; o < s; o += 3) t = r[o], e = r[o + 1], i = r[o + 2], n = 1 / Math.sqrt(t * t + e * e + i * i), r[o] *= n, r[o + 1] *= n, r[o + 2] *= n
            },
            toNonIndexed: function () {
                if (null === this.index) return this;
                var t = new o.BufferGeometry,
                    e = this.index.array,
                    i = this.attributes;
                for (var n in i) {
                    for (var r = i[n], s = r.array, a = r.itemSize, h = new s.constructor(e.length * a), l = 0, c = 0, u = 0, p = e.length; u < p; u++) {
                        l = e[u] * a;
                        for (var d = 0; d < a; d++) h[c++] = s[l++]
                    }
                    t.addAttribute(n, new o.BufferAttribute(h, a))
                }
                return t
            },
            toJSON: function () {
                var t = {
                    metadata: {
                        version: 4.4,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                var n = this.index;
                if (null !== n) {
                    var r = Array.prototype.slice.call(n.array);
                    t.data.index = {
                        type: n.array.constructor.name,
                        array: r
                    }
                }
                var o = this.attributes;
                for (var i in o) {
                    var s = o[i],
                        r = Array.prototype.slice.call(s.array);
                    t.data.attributes[i] = {
                        itemSize: s.itemSize,
                        type: s.array.constructor.name,
                        array: r
                    }
                }
                var a = this.groups;
                a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
                var h = this.boundingSphere;
                return null !== h && (t.data.boundingSphere = {
                    center: h.center.toArray(),
                    radius: h.radius
                }), t
            },
            clone: function () {
                return (new o.BufferGeometry).copy(this)
            },
            copy: function (t) {
                var e = t.index;
                null !== e && this.setIndex(e.clone());
                var i = t.attributes;
                for (var n in i) {
                    var r = i[n];
                    this.addAttribute(n, r.clone())
                }
                for (var o = t.groups, s = 0, a = o.length; s < a; s++) {
                    var h = o[s];
                    this.addGroup(h.start, h.count)
                }
                return this
            },
            dispose: function () {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, o.EventDispatcher.prototype.apply(o.BufferGeometry.prototype), o.BufferGeometry.MaxIndex = 65535, o.InstancedBufferGeometry = function () {
            o.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
        }, o.InstancedBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.InstancedBufferGeometry.prototype.constructor = o.InstancedBufferGeometry, o.InstancedBufferGeometry.prototype.addGroup = function (t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                instances: i
            })
        }, o.InstancedBufferGeometry.prototype.copy = function (t) {
            var e = t.index;
            null !== e && this.setIndex(e.clone());
            var i = t.attributes;
            for (var n in i) {
                var r = i[n];
                this.addAttribute(n, r.clone())
            }
            for (var o = t.groups, s = 0, a = o.length; s < a; s++) {
                var h = o[s];
                this.addGroup(h.start, h.count, h.instances)
            }
            return this
        }, o.EventDispatcher.prototype.apply(o.InstancedBufferGeometry.prototype), o.Uniform = function (t, e) {
            this.type = t, this.value = e, this.dynamic = !1
        }, o.Uniform.prototype = {
            constructor: o.Uniform,
            onUpdate: function (t) {
                return this.dynamic = !0, this.onUpdateCallback = t, this
            }
        }, o.AnimationClip = function (t, e, i) {
            this.name = t || o.Math.generateUUID(), this.tracks = i, this.duration = void 0 !== e ? e : -1, this.duration < 0 && this.resetDuration(), this.trim(), this.optimize()
        }, o.AnimationClip.prototype = {
            constructor: o.AnimationClip,
            resetDuration: function () {
                for (var t = this.tracks, e = 0, i = 0, n = t.length; i !== n; ++i) {
                    var r = this.tracks[i];
                    e = Math.max(e, r.times[r.times.length - 1])
                }
                this.duration = e
            },
            trim: function () {
                for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
                return this
            },
            optimize: function () {
                for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
                return this
            }
        }, Object.assign(o.AnimationClip, {
            parse: function (t) {
                for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, s = i.length; r !== s; ++r) e.push(o.KeyframeTrack.parse(i[r]).scale(n));
                return new o.AnimationClip(t.name, t.duration, e)
            },
            toJSON: function (t) {
                for (var e = [], i = t.tracks, n = {
                    name: t.name,
                    duration: t.duration,
                    tracks: e
                }, r = 0, s = i.length; r !== s; ++r) e.push(o.KeyframeTrack.toJSON(i[r]));
                return n
            },
            CreateFromMorphTargetSequence: function (t, e, i) {
                for (var n = e.length, r = [], s = 0; s < n; s++) {
                    var a = [],
                        h = [];
                    a.push((s + n - 1) % n, s, (s + 1) % n), h.push(0, 1, 0);
                    var l = o.AnimationUtils.getKeyframeOrder(a);
                    a = o.AnimationUtils.sortedArray(a, 1, l), h = o.AnimationUtils.sortedArray(h, 1, l), 0 === a[0] && (a.push(n), h.push(h[0])), r.push(new o.NumberKeyframeTrack(".morphTargetInfluences[" + e[s].name + "]", a, h).scale(1 / i))
                }
                return new o.AnimationClip(t, (-1), r)
            },
            findByName: function (t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i].name === e) return t[i];
                return null
            },
            CreateClipsFromMorphTargetSequences: function (t, e) {
                for (var i = {}, n = /^([\w-]*?)([\d]+)$/, r = 0, s = t.length; r < s; r++) {
                    var a = t[r],
                        h = a.name.match(n);
                    if (h && h.length > 1) {
                        var l = h[1],
                            c = i[l];
                        c || (i[l] = c = []), c.push(a)
                    }
                }
                var u = [];
                for (var l in i) u.push(o.AnimationClip.CreateFromMorphTargetSequence(l, i[l], e));
                return u
            },
            parseAnimation: function (t, e, i) {
                if (!t) return null;
                for (var n = function (t, e, i, n, r) {
                    if (0 !== i.length) {
                        var s = [],
                            a = [];
                        o.AnimationUtils.flattenJSON(i, s, a, n), 0 !== s.length && r.push(new t(e, s, a))
                }
                }, r = [], s = t.name || "default", a = t.length || -1, h = t.fps || 30, l = t.hierarchy || [], c = 0; c < l.length; c++) {
                    var u = l[c].keys;
                    if (u && 0 != u.length)
                        if (u[0].morphTargets) {
                            for (var p = {}, d = 0; d < u.length; d++)
                                if (u[d].morphTargets)
                                    for (var f = 0; f < u[d].morphTargets.length; f++) p[u[d].morphTargets[f]] = -1;
                            for (var m in p) {
                                for (var g = [], v = [], f = 0; f !== u[d].morphTargets.length; ++f) {
                                    var y = u[d];
                                    g.push(y.time), v.push(y.morphTarget === m ? 1 : 0)
                                }
                                r.push(new o.NumberKeyframeTrack(".morphTargetInfluence[" + m + "]", g, v))
                            }
                            a = p.length * (h || 1)
                        } else {
                            var _ = ".bones[" + e[c].name + "]";
                            n(o.VectorKeyframeTrack, _ + ".position", u, "pos", r), n(o.QuaternionKeyframeTrack, _ + ".quaternion", u, "rot", r), n(o.VectorKeyframeTrack, _ + ".scale", u, "scl", r)
                        }
                }
                if (0 === r.length) return null;
                var x = new o.AnimationClip(s, a, r);
                return x
            }
        }), o.AnimationMixer = function (t) {
            this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
        }, o.AnimationMixer.prototype = {
            constructor: o.AnimationMixer,
            clipAction: function (t, e) {
                var i, n = e || this._root,
                    r = n.uuid,
                    s = "string" == typeof t ? t : t.name,
                    a = t !== s ? t : null,
                    h = this._actionsByClip[s];
                if (void 0 !== h) {
                    var l = h.actionByRoot[r];
                    if (void 0 !== l) return l;
                    if (i = h.knownActions[0], a = i._clip, t !== s && t !== a) throw new Error("Different clips with the same name detected!")
                }
                if (null === a) return null;
                var c = new o.AnimationMixer._Action(this, a, e);
                return this._bindAction(c, i), this._addInactiveAction(c, s, r), c
            },
            existingAction: function (t, e) {
                var i = e || this._root,
                    n = i.uuid,
                    r = "string" == typeof t ? t : t.name,
                    o = this._actionsByClip[r];
                return void 0 !== o ? o.actionByRoot[n] || null : null
            },
            stopAllAction: function () {
                var t = this._actions,
                    e = this._nActiveActions,
                    i = this._bindings,
                    n = this._nActiveBindings;
                this._nActiveActions = 0, this._nActiveBindings = 0;
                for (var r = 0; r !== e; ++r) t[r].reset();
                for (var r = 0; r !== n; ++r) i[r].useCount = 0;
                return this
            },
            update: function (t) {
                t *= this.timeScale;
                for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1, s = 0; s !== i; ++s) {
                    var a = e[s];
                    a.enabled && a._update(n, t, r, o)
                }
                for (var h = this._bindings, l = this._nActiveBindings, s = 0; s !== l; ++s) h[s].apply(o);
                return this
            },
            getRoot: function () {
                return this._root
            },
            uncacheClip: function (t) {
                var e = this._actions,
                    i = t.name,
                    n = this._actionsByClip,
                    r = n[i];
                if (void 0 !== r) {
                    for (var o = r.knownActions, s = 0, a = o.length; s !== a; ++s) {
                        var h = o[s];
                        this._deactivateAction(h);
                        var l = h._cacheIndex,
                            c = e[e.length - 1];
                        h._cacheIndex = null, h._byClipCacheIndex = null, c._cacheIndex = l, e[l] = c, e.pop(), this._removeInactiveBindingsForAction(h)
                    }
                    delete n[i]
                }
            },
            uncacheRoot: function (t) {
                var e = t.uuid,
                    i = this._actionsByClip;
                for (var n in i) {
                    var r = i[n].actionByRoot,
                        o = r[e];
                    void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
                }
                var s = this._bindingsByRootAndName,
                    a = s[e];
                if (void 0 !== a)
                    for (var h in a) {
                        var l = a[h];
                        l.restoreOriginalState(), this._removeInactiveBinding(l)
                    }
            },
            uncacheAction: function (t, e) {
                var i = this.existingAction(t, e);
                null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
            }
        }, o.EventDispatcher.prototype.apply(o.AnimationMixer.prototype), o.AnimationMixer._Action = function (t, e, i) {
            this._mixer = t, this._clip = e, this._localRoot = i || null;
            for (var n = e.tracks, r = n.length, s = new Array(r), a = {
                endingStart: o.ZeroCurvatureEnding,
                endingEnd: o.ZeroCurvatureEnding
            }, h = 0; h !== r; ++h) {
                var l = n[h].createInterpolant(null);
                s[h] = l, l.settings = a
            }
            this._interpolantSettings = a, this._interpolants = s, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = o.LoopRepeat, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
        }, o.AnimationMixer._Action.prototype = {
            constructor: o.AnimationMixer._Action,
            play: function () {
                return this._mixer._activateAction(this), this
            },
            stop: function () {
                return this._mixer._deactivateAction(this), this.reset()
            },
            reset: function () {
                return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
            },
            isRunning: function () {
                this._startTime;
                return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
            },
            isScheduled: function () {
                return this._mixer._isActiveAction(this)
            },
            startAt: function (t) {
                return this._startTime = t, this
            },
            setLoop: function (t, e) {
                return this.loop = t, this.repetitions = e, this
            },
            setEffectiveWeight: function (t) {
                return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
            },
            getEffectiveWeight: function () {
                return this._effectiveWeight
            },
            fadeIn: function (t) {
                return this._scheduleFading(t, 0, 1)
            },
            fadeOut: function (t) {
                return this._scheduleFading(t, 1, 0)
            },
            crossFadeFrom: function (t, e, i) {
                this._mixer;
                if (t.fadeOut(e), this.fadeIn(e), i) {
                    var n = this._clip.duration,
                        r = t._clip.duration,
                        o = r / n,
                        s = n / r;
                    t.warp(1, o, e), this.warp(s, 1, e)
                }
                return this
            },
            crossFadeTo: function (t, e, i) {
                return t.crossFadeFrom(this, e, i)
            },
            stopFading: function () {
                var t = this._weightInterpolant;
                return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
            },
            setEffectiveTimeScale: function (t) {
                return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
            },
            getEffectiveTimeScale: function () {
                return this._effectiveTimeScale
            },
            setDuration: function (t) {
                return this.timeScale = this._clip.duration / t, this.stopWarping()
            },
            syncWith: function (t) {
                return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
            },
            halt: function (t) {
                return this.warp(this._currentTimeScale, 0, t)
            },
            warp: function (t, e, i) {
                var n = this._mixer,
                    r = n.time,
                    o = this._timeScaleInterpolant,
                    s = this.timeScale;
                null === o && (o = n._lendControlInterpolant(), this._timeScaleInterpolant = o);
                var a = o.parameterPositions,
                    h = o.sampleValues;
                return a[0] = r, a[1] = r + i, h[0] = t / s, h[1] = e / s, this
            },
            stopWarping: function () {
                var t = this._timeScaleInterpolant;
                return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
            },
            getMixer: function () {
                return this._mixer
            },
            getClip: function () {
                return this._clip
            },
            getRoot: function () {
                return this._localRoot || this._mixer._root
            },
            _update: function (t, e, i, n) {
                var r = this._startTime;
                if (null !== r) {
                    var o = (t - r) * i;
                    if (o < 0 || 0 === i) return;
                    this._startTime = null, e = i * o
                }
                e *= this._updateTimeScale(t);
                var s = this._updateTime(e),
                    a = this._updateWeight(t);
                if (a > 0)
                    for (var h = this._interpolants, l = this._propertyBindings, c = 0, u = h.length; c !== u; ++c) h[c].evaluate(s), l[c].accumulate(n, a)
            },
            _updateWeight: function (t) {
                var e = 0;
                if (this.enabled) {
                    e = this.weight;
                    var i = this._weightInterpolant;
                    if (null !== i) {
                        var n = i.evaluate(t)[0];
                        e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                    }
                }
                return this._effectiveWeight = e, e
            },
            _updateTimeScale: function (t) {
                var e = 0;
                if (!this.paused) {
                    e = this.timeScale;
                    var i = this._timeScaleInterpolant;
                    if (null !== i) {
                        var n = i.evaluate(t)[0];
                        e *= n, t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.pause = !0 : this.timeScale = e)
                    }
                }
                return this._effectiveTimeScale = e, e
            },
            _updateTime: function (t) {
                var e = this.time + t;
                if (0 === t) return e;
                var i = this._clip.duration,
                    n = this.loop,
                    r = this._loopCount,
                    s = !1;
                switch (n) {
                    case o.LoopOnce:
                        if (r === -1 && (this.loopCount = 0, this._setEndings(!0, !0, !1)), e >= i) e = i;
                        else {
                            if (!(e < 0)) break;
                            e = 0
                        }
                        this.clampWhenFinished ? this.pause = !0 : this.enabled = !1, this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t < 0 ? -1 : 1
                        });
                        break;
                    case o.LoopPingPong:
                        s = !0;
                    case o.LoopRepeat:
                        if (r === -1 && (t > 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), e >= i || e < 0) {
                            var a = Math.floor(e / i);
                            e -= i * a, r += Math.abs(a);
                            var h = this.repetitions - r;
                            if (h < 0) {
                                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({
                                    type: "finished",
                                    action: this,
                                    direction: t > 0 ? 1 : -1
                                });
                                break
                            }
                            if (0 === h) {
                                var l = t < 0;
                                this._setEndings(l, !l, s)
                            } else this._setEndings(!1, !1, s);
                            this._loopCount = r, this._mixer.dispatchEvent({
                                type: "loop",
                                action: this,
                                loopDelta: a
                            })
                        }
                        if (n === o.LoopPingPong && 1 === (1 & r)) return this.time = e, i - e
                }
                return this.time = e, e
            },
            _setEndings: function (t, e, i) {
                var n = this._interpolantSettings;
                i ? (n.endingStart = o.ZeroSlopeEnding, n.endingEnd = o.ZeroSlopeEnding) : (t ? n.endingStart = this.zeroSlopeAtStart ? o.ZeroSlopeEnding : o.ZeroCurvatureEnding : n.endingStart = o.WrapAroundEnding, e ? n.endingEnd = this.zeroSlopeAtEnd ? o.ZeroSlopeEnding : o.ZeroCurvatureEnding : n.endingEnd = o.WrapAroundEnding)
            },
            _scheduleFading: function (t, e, i) {
                var n = this._mixer,
                    r = n.time,
                    o = this._weightInterpolant;
                null === o && (o = n._lendControlInterpolant(), this._weightInterpolant = o);
                var s = o.parameterPositions,
                    a = o.sampleValues;
                return s[0] = r, a[0] = e, s[1] = r + t, a[1] = i, this
            }
        }, Object.assign(o.AnimationMixer.prototype, {
            _bindAction: function (t, e) {
                var i = t._localRoot || this._root,
                    n = t._clip.tracks,
                    r = n.length,
                    s = t._propertyBindings,
                    a = t._interpolants,
                    h = i.uuid,
                    l = this._bindingsByRootAndName,
                    c = l[h];
                void 0 === c && (c = {}, l[h] = c);
                for (var u = 0; u !== r; ++u) {
                    var p = n[u],
                        d = p.name,
                        f = c[d];
                    if (void 0 !== f) s[u] = f;
                    else {
                        if (f = s[u], void 0 !== f) {
                            null === f._cacheIndex && (++f.referenceCount, this._addInactiveBinding(f, h, d));
                            continue
                        }
                        var m = e && e._propertyBindings[u].binding.parsedPath;
                        f = new o.PropertyMixer(o.PropertyBinding.create(i, d, m), p.ValueTypeName, p.getValueSize()), ++f.referenceCount, this._addInactiveBinding(f, h, d), s[u] = f
                    }
                    a[u].resultBuffer = f.buffer
                }
            },
            _activateAction: function (t) {
                if (!this._isActiveAction(t)) {
                    if (null === t._cacheIndex) {
                        var e = (t._localRoot || this._root).uuid,
                            i = t._clip.name,
                            n = this._actionsByClip[i];
                        this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
                    }
                    for (var r = t._propertyBindings, o = 0, s = r.length; o !== s; ++o) {
                        var a = r[o];
                        0 === a.useCount++ && (this._lendBinding(a), a.saveOriginalState())
                    }
                    this._lendAction(t)
                }
            },
            _deactivateAction: function (t) {
                if (this._isActiveAction(t)) {
                    for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                        var r = e[i];
                        0 === --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                    }
                    this._takeBackAction(t)
                }
            },
            _initMemoryManager: function () {
                this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
                var t = this;
                this.stats = {
                    actions: {
                        get total() {
                            return t._actions.length
                        }, get inUse() {
                            return t._nActiveActions
                        }
                    },
                    bindings: {
                        get total() {
                            return t._bindings.length
                        }, get inUse() {
                            return t._nActiveBindings
                        }
                    },
                    controlInterpolants: {
                        get total() {
                            return t._controlInterpolants.length
                        }, get inUse() {
                            return t._nActiveControlInterpolants
                        }
                    }
                }
            },
            _isActiveAction: function (t) {
                var e = t._cacheIndex;
                return null !== e && e < this._nActiveActions
            },
            _addInactiveAction: function (t, e, i) {
                var n = this._actions,
                    r = this._actionsByClip,
                    o = r[e];
                if (void 0 === o) o = {
                    knownActions: [t],
                    actionByRoot: {}
                }, t._byClipCacheIndex = 0, r[e] = o;
                else {
                    var s = o.knownActions;
                    t._byClipCacheIndex = s.length, s.push(t)
                }
                t._cacheIndex = n.length, n.push(t), o.actionByRoot[i] = t
            },
            _removeInactiveAction: function (t) {
                var e = this._actions,
                    i = e[e.length - 1],
                    n = t._cacheIndex;
                i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
                var r = t._clip.name,
                    o = this._actionsByClip,
                    s = o[r],
                    a = s.knownActions,
                    h = a[a.length - 1],
                    l = t._byClipCacheIndex;
                h._byClipCacheIndex = l, a[l] = h, a.pop(), t._byClipCacheIndex = null;
                var c = s.actionByRoot,
                    u = (e._localRoot || this._root).uuid;
                delete c[u], 0 === a.length && delete o[r], this._removeInactiveBindingsForAction(t)
            },
            _removeInactiveBindingsForAction: function (t) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 === --r.referenceCount && this._removeInactiveBinding(r)
                }
            },
            _lendAction: function (t) {
                var e = this._actions,
                    i = t._cacheIndex,
                    n = this._nActiveActions++,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _takeBackAction: function (t) {
                var e = this._actions,
                    i = t._cacheIndex,
                    n = --this._nActiveActions,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _addInactiveBinding: function (t, e, i) {
                var n = this._bindingsByRootAndName,
                    r = n[e],
                    o = this._bindings;
                void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = o.length, o.push(t)
            },
            _removeInactiveBinding: function (t) {
                var e = this._bindings,
                    i = t.binding,
                    n = i.rootNode.uuid,
                    r = i.path,
                    o = this._bindingsByRootAndName,
                    s = o[n],
                    a = e[e.length - 1],
                    h = t._cacheIndex;
                a._cacheIndex = h, e[h] = a, e.pop(), delete s[r];
                t: {
                    for (var l in s) break t;
                    delete o[n]
                }
            },
            _lendBinding: function (t) {
                var e = this._bindings,
                    i = t._cacheIndex,
                    n = this._nActiveBindings++,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _takeBackBinding: function (t) {
                var e = this._bindings,
                    i = t._cacheIndex,
                    n = --this._nActiveBindings,
                    r = e[n];
                t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
            },
            _lendControlInterpolant: function () {
                var t = this._controlInterpolants,
                    e = this._nActiveControlInterpolants++,
                    i = t[e];
                return void 0 === i && (i = new o.LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), i.__cacheIndex = e, t[e] = i), i
            },
            _takeBackControlInterpolant: function (t) {
                var e = this._controlInterpolants,
                    i = t.__cacheIndex,
                    n = --this._nActiveControlInterpolants,
                    r = e[n];
                t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
            },
            _controlInterpolantsResultBuffer: new Float32Array(1)
        }), o.AnimationObjectGroup = function (t) {
            this.uuid = o.Math.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            var e = {};
            this._indicesByUUID = e;
            for (var i = 0, n = arguments.length; i !== n; ++i) e[arguments[i].uuid] = i;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            var r = this;
            this.stats = {
                objects: {
                    get total() {
                        return r._objects.length
                    }, get inUse() {
                        return this.total - r.nCachedObjects_
                    }
                },
                get bindingsPerObject() {
                    return r._bindings.length
                }
            }
        }, o.AnimationObjectGroup.prototype = {
            constructor: o.AnimationObjectGroup,
            add: function (t) {
                for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, s = this._paths, a = this._parsedPaths, h = this._bindings, l = h.length, c = 0, u = arguments.length; c !== u; ++c) {
                    var p = arguments[c],
                        d = p.uuid,
                        f = r[d];
                    if (void 0 === f) {
                        f = i++, r[d] = f, e.push(p);
                        for (var m = 0, g = l; m !== g; ++m) h[m].push(new o.PropertyBinding(p, s[m], a[m]))
                    } else if (f < n) {
                        var v = e[f],
                            y = --n,
                            _ = e[y];
                        r[_.uuid] = f, e[f] = _, r[d] = y, e[y] = p;
                        for (var m = 0, g = l; m !== g; ++m) {
                            var x = h[m],
                                b = x[y],
                                w = x[f];
                            x[f] = b, void 0 === w && (w = new o.PropertyBinding(p, s[m], a[m])), x[y] = w
                        }
                    } else e[f] !== v
                }
                this.nCachedObjects_ = n
            },
            remove: function (t) {
                for (var e = this._objects, i = (e.length, this.nCachedObjects_), n = this._indicesByUUID, r = this._bindings, o = r.length, s = 0, a = arguments.length; s !== a; ++s) {
                    var h = arguments[s],
                        l = h.uuid,
                        c = n[l];
                    if (void 0 !== c && c >= i) {
                        var u = i++,
                            p = e[u];
                        n[p.uuid] = c, e[c] = p, n[l] = u, e[u] = h;
                        for (var d = 0, f = o; d !== f; ++d) {
                            var m = r[d],
                                g = m[u],
                                v = m[c];
                            m[c] = g, m[u] = v
                        }
                    }
                }
                this.nCachedObjects_ = i
            },
            uncache: function (t) {
                for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, o = this._bindings, s = o.length, a = 0, h = arguments.length; a !== h; ++a) {
                    var l = arguments[a],
                        c = l.uuid,
                        u = r[c];
                    if (void 0 !== u)
                        if (delete r[c], u < n) {
                            var p = --n,
                                d = e[p],
                                f = --i,
                                m = e[f];
                            r[d.uuid] = u, e[u] = d, r[m.uuid] = p, e[p] = m, e.pop();
                            for (var g = 0, v = s; g !== v; ++g) {
                                var y = o[g],
                                    _ = y[p],
                                    x = y[f];
                                y[u] = _, y[p] = x, y.pop()
                            }
                        } else {
                            var f = --i,
                                m = e[f];
                            r[m.uuid] = u, e[u] = m, e.pop();
                            for (var g = 0, v = s; g !== v; ++g) {
                                var y = o[g];
                                y[u] = y[f], y.pop()
                            }
                        }
                }
                this.nCachedObjects_ = n
            },
            subscribe_: function (t, e) {
                var i = this._bindingsIndicesByPath,
                    n = i[t],
                    r = this._bindings;
                if (void 0 !== n) return r[n];
                var s = this._paths,
                    a = this._parsedPaths,
                    h = this._objects,
                    l = h.length,
                    c = this.nCachedObjects_,
                    u = new Array(l);
                n = r.length, i[t] = n, s.push(t), a.push(e), r.push(u);
                for (var p = c, d = h.length; p !== d; ++p) {
                    var f = h[p];
                    u[p] = new o.PropertyBinding(f, t, e)
                }
                return u
            },
            unsubscribe_: function (t) {
                var e = this._bindingsIndicesByPath,
                    i = e[t];
                if (void 0 !== i) {
                    var n = this._paths,
                        r = this._parsedPaths,
                        o = this._bindings,
                        s = o.length - 1,
                        a = o[s],
                        h = t[s];
                    e[h] = i, o[i] = a, o.pop(), r[i] = r[s], r.pop(), n[i] = n[s], n.pop()
                }
            }
        }, o.AnimationUtils = {
            arraySlice: function (t, e, i) {
                return o.AnimationUtils.isTypedArray(t) ? new t.constructor(t.subarray(e, i)) : t.slice(e, i)
            },
            convertArray: function (t, e, i) {
                return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
            },
            isTypedArray: function (t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView)
            },
            getKeyframeOrder: function (t) {
                function e(e, i) {
                    return t[e] - t[i]
                }
                for (var i = t.length, n = new Array(i), r = 0; r !== i; ++r) n[r] = r;
                return n.sort(e), n
            },
            sortedArray: function (t, e, i) {
                for (var n = t.length, r = new t.constructor(n), o = 0, s = 0; s !== n; ++o)
                    for (var a = i[o] * e, h = 0; h !== e; ++h) r[s++] = t[a + h];
                return r
            },
            flattenJSON: function (t, e, i, n) {
                for (var r = 1, o = t[0]; void 0 !== o && void 0 === o[n];) o = t[r++];
                if (void 0 !== o) {
                    var s = o[n];
                    if (void 0 !== s)
                        if (Array.isArray(s)) {
                            do s = o[n], void 0 !== s && (e.push(o.time), i.push.apply(i, s)), o = t[r++]; while (void 0 !== o)
                        } else if (void 0 !== s.toArray) {
                            do s = o[n], void 0 !== s && (e.push(o.time), s.toArray(i, i.length)), o = t[r++]; while (void 0 !== o)
                        } else
                            do s = o[n], void 0 !== s && (e.push(o.time), i.push(s)), o = t[r++]; while (void 0 !== o)
                }
            }
        }, o.KeyframeTrack = function (t, e, i, n) {
            if (void 0 === t) throw new Error("track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("no keyframes in track named " + t);
            this.name = t, this.times = o.AnimationUtils.convertArray(e, this.TimeBufferType), this.values = o.AnimationUtils.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation), this.validate(), this.optimize()
        }, o.KeyframeTrack.prototype = {
            constructor: o.KeyframeTrack,
            TimeBufferType: Float32Array,
            ValueBufferType: Float32Array,
            DefaultInterpolation: o.InterpolateLinear,
            InterpolantFactoryMethodDiscrete: function (t) {
                return new o.DiscreteInterpolant(this.times, this.values, this.getValueSize(), t)
            },
            InterpolantFactoryMethodLinear: function (t) {
                return new o.LinearInterpolant(this.times, this.values, this.getValueSize(), t)
            },
            InterpolantFactoryMethodSmooth: function (t) {
                return new o.CubicInterpolant(this.times, this.values, this.getValueSize(), t)
            },
            setInterpolation: function (t) {
                var e = void 0;
                switch (t) {
                    case o.InterpolateDiscrete:
                        e = this.InterpolantFactoryMethodDiscrete;
                        break;
                    case o.InterpolateLinear:
                        e = this.InterpolantFactoryMethodLinear;
                        break;
                    case o.InterpolateSmooth:
                        e = this.InterpolantFactoryMethodSmooth
                }
                if (void 0 !== e) this.createInterpolant = e;
                else {
                    var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (void 0 === this.createInterpolant) {
                        if (t === this.DefaultInterpolation) throw new Error(i);
                        this.setInterpolation(this.DefaultInterpolation)
                    }
                }
            },
            getInterpolation: function () {
                switch (this.createInterpolant) {
                    case this.InterpolantFactoryMethodDiscrete:
                        return o.InterpolateDiscrete;
                    case this.InterpolantFactoryMethodLinear:
                        return o.InterpolateLinear;
                    case this.InterpolantFactoryMethodSmooth:
                        return o.InterpolateSmooth
                }
            },
            getValueSize: function () {
                return this.values.length / this.times.length
            },
            shift: function (t) {
                if (0 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
                return this
            },
            scale: function (t) {
                if (1 !== t)
                    for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
                return this
            },
            trim: function (t, e) {
                for (var i = this.times, n = i.length, r = 0, s = n - 1; r !== n && i[r] < t;)++r;
                for (; s !== -1 && i[s] > e;)--s;
                if (++s, 0 !== r || s !== n) {
                    r >= s && (s = Math.max(s, 1), r = s - 1);
                    var a = this.getValueSize();
                    this.times = o.AnimationUtils.arraySlice(i, r, s), this.values = o.AnimationUtils.arraySlice(this.values, r * a, s * a)
                }
                return this
            },
            validate: function () {
                var t = !0,
                    e = this.getValueSize();
                e - Math.floor(e) !== 0 && (t = !1);
                var i = this.times,
                    n = this.values,
                    r = i.length;
                0 === r && (t = !1);
                for (var s = null, a = 0; a !== r; a++) {
                    var h = i[a];
                    if ("number" == typeof h && isNaN(h)) {
                        t = !1;
                        break
                    }
                    if (null !== s && s > h) {
                        t = !1;
                        break
                    }
                    s = h
                }
                if (void 0 !== n && o.AnimationUtils.isTypedArray(n))
                    for (var a = 0, l = n.length; a !== l; ++a) {
                        var c = n[a];
                        if (isNaN(c)) {
                            t = !1;
                            break
                        }
                    }
                return t
            },
            optimize: function () {
                for (var t = this.times, e = this.values, i = this.getValueSize(), n = 1, r = 1, s = t.length - 1; r <= s; ++r) {
                    var a = !1,
                        h = t[r],
                        l = t[r + 1];
                    if (h !== l && (1 !== r || h !== h[0]))
                        for (var c = r * i, u = c - i, p = c + i, d = 0; d !== i; ++d) {
                            var f = e[c + d];
                            if (f !== e[u + d] || f !== e[p + d]) {
                                a = !0;
                                break
                            }
                        }
                    if (a) {
                        if (r !== n) {
                            t[n] = t[r];
                            for (var m = r * i, g = n * i, d = 0; d !== i; ++d) e[g + d] = e[m + d]
                        } ++n
                    }
                }
                return n !== t.length && (this.times = o.AnimationUtils.arraySlice(t, 0, n), this.values = o.AnimationUtils.arraySlice(e, 0, n * i)), this
            }
        }, Object.assign(o.KeyframeTrack, {
            parse: function (t) {
                if (void 0 === t.type) throw new Error("track type undefined, can not parse");
                var e = o.KeyframeTrack._getTrackTypeForValueTypeName(t.type);
                if (void 0 === t.times) {
                    var i = [],
                        n = [];
                    o.AnimationUtils.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
                }
                return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
            },
            toJSON: function (t) {
                var e, i = t.constructor;
                if (void 0 !== i.toJSON) e = i.toJSON(t);
                else {
                    e = {
                        name: t.name,
                        times: o.AnimationUtils.convertArray(t.times, Array),
                        values: o.AnimationUtils.convertArray(t.values, Array)
                    };
                    var n = t.getInterpolation();
                    n !== t.DefaultInterpolation && (e.interpolation = n)
                }
                return e.type = t.ValueTypeName, e
            },
            _getTrackTypeForValueTypeName: function (t) {
                switch (t.toLowerCase()) {
                    case "scalar":
                    case "double":
                    case "float":
                    case "number":
                    case "integer":
                        return o.NumberKeyframeTrack;
                    case "vector":
                    case "vector2":
                    case "vector3":
                    case "vector4":
                        return o.VectorKeyframeTrack;
                    case "color":
                        return o.ColorKeyframeTrack;
                    case "quaternion":
                        return o.QuaternionKeyframeTrack;
                    case "bool":
                    case "boolean":
                        return o.BooleanKeyframeTrack;
                    case "string":
                        return o.StringKeyframeTrack
                }
                throw new Error("Unsupported typeName: " + t)
            }
        }), o.PropertyBinding = function (t, e, i) {
            this.path = e, this.parsedPath = i || o.PropertyBinding.parseTrackName(e), this.node = o.PropertyBinding.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
        }, o.PropertyBinding.prototype = {
            constructor: o.PropertyBinding,
            getValue: function (t, e) {
                this.bind(), this.getValue(t, e)
            },
            setValue: function (t, e) {
                this.bind(), this.setValue(t, e)
            },
            bind: function () {
                var t = this.node,
                    e = this.parsedPath,
                    i = e.objectName,
                    n = e.propertyName,
                    r = e.propertyIndex;
                if (t || (t = o.PropertyBinding.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                    if (i) {
                        var s = e.objectIndex;
                        switch (i) {
                            case "materials":
                                if (!t.material) return;
                                if (!t.material.materials) return;
                                t = t.material.materials;
                                break;
                            case "bones":
                                if (!t.skeleton) return;
                                t = t.skeleton.bones;
                                for (var a = 0; a < t.length; a++)
                                    if (t[a].name === s) {
                                        s = a;
                                        break
                                    }
                                break;
                            default:
                                if (void 0 === t[i]) return;
                                t = t[i]
                        }
                        if (void 0 !== s) {
                            if (void 0 === t[s]) return;
                            t = t[s]
                        }
                    }
                    var h = t[n];
                    if (h) {
                        var l = this.Versioning.None;
                        void 0 !== t.needsUpdate ? (l = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (l = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
                        var c = this.BindingType.Direct;
                        if (void 0 !== r) {
                            if ("morphTargetInfluences" === n) {
                                if (!t.geometry) return;
                                if (!t.geometry.morphTargets) return;
                                for (var a = 0; a < this.node.geometry.morphTargets.length; a++)
                                    if (t.geometry.morphTargets[a].name === r) {
                                        r = a;
                                        break
                                    }
                            }
                            c = this.BindingType.ArrayElement, this.resolvedProperty = h, this.propertyIndex = r
                        } else void 0 !== h.fromArray && void 0 !== h.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = h) : void 0 !== h.length ? (c = this.BindingType.EntireArray, this.resolvedProperty = h) : this.propertyName = n;
                        this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][l]
                    } else {
                        e.nodeName
                    }
                }
            },
            unbind: function () {
                this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
            }
        }, Object.assign(o.PropertyBinding.prototype, {
            _getValue_unavailable: function () { },
            _setValue_unavailable: function () { },
            _getValue_unbound: o.PropertyBinding.prototype.getValue,
            _setValue_unbound: o.PropertyBinding.prototype.setValue,
            BindingType: {
                Direct: 0,
                EntireArray: 1,
                ArrayElement: 2,
                HasFromToArray: 3
            },
            Versioning: {
                None: 0,
                NeedsUpdate: 1,
                MatrixWorldNeedsUpdate: 2
            },
            GetterByBindingType: [
                function (t, e) {
                    t[e] = this.node[this.propertyName]
                },
                function (t, e) {
                    for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
                },
                function (t, e) {
                    t[e] = this.resolvedProperty[this.propertyIndex]
                },
                function (t, e) {
                    this.resolvedProperty.toArray(t, e)
                }
            ],
            SetterByBindingTypeAndVersioning: [
                [
                    function (t, e) {
                        this.node[this.propertyName] = t[e]
                    },
                    function (t, e) {
                        this.node[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
                    },
                    function (t, e) {
                        this.node[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                    }
                ],
                [
                    function (t, e) {
                        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
                    },
                    function (t, e) {
                        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                        this.targetObject.needsUpdate = !0
                    },
                    function (t, e) {
                        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                        this.targetObject.matrixWorldNeedsUpdate = !0
                    }
                ],
                [
                    function (t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e]
                    },
                    function (t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
                    },
                    function (t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                    }
                ],
                [
                    function (t, e) {
                        this.resolvedProperty.fromArray(t, e)
                    },
                    function (t, e) {
                        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
                    },
                    function (t, e) {
                        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
                    }
                ]
            ]
        }), o.PropertyBinding.Composite = function (t, e, i) {
            var n = i || o.PropertyBinding.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, n)
        }, o.PropertyBinding.Composite.prototype = {
            constructor: o.PropertyBinding.Composite,
            getValue: function (t, e) {
                this.bind();
                var i = this._targetGroup.nCachedObjects_,
                    n = this._bindings[i];
                void 0 !== n && n.getValue(t, e)
            },
            setValue: function (t, e) {
                for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
            },
            bind: function () {
                for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
            },
            unbind: function () {
                for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
            }
        }, o.PropertyBinding.create = function (t, e, i) {
            return t instanceof o.AnimationObjectGroup ? new o.PropertyBinding.Composite(t, e, i) : new o.PropertyBinding(t, e, i)
        }, o.PropertyBinding.parseTrackName = function (t) {
            var e = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
                i = e.exec(t);
            if (!i) throw new Error("cannot parse trackName at all: " + t);
            i.index === e.lastIndex && e.lastIndex++;
            var n = {
                nodeName: i[3],
                objectName: i[5],
                objectIndex: i[7],
                propertyName: i[9],
                propertyIndex: i[11]
            };
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("can not parse propertyName from trackName: " + t);
            return n
        }, o.PropertyBinding.findNode = function (t, e) {
            if (!e || "" === e || "root" === e || "." === e || e === -1 || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                var i = function (t) {
                    for (var i = 0; i < t.bones.length; i++) {
                        var n = t.bones[i];
                        if (n.name === e) return n
                    }
                    return null
                },
                    n = i(t.skeleton);
                if (n) return n
            }
            if (t.children) {
                var r = function (t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (n.name === e || n.uuid === e) return n;
                        var o = r(n.children);
                        if (o) return o
                    }
                    return null
                },
                    o = r(t.children);
                if (o) return o
            }
            return null
        }, o.PropertyMixer = function (t, e, i) {
            this.binding = t, this.valueSize = i;
            var n, r = Float64Array;
            switch (e) {
                case "quaternion":
                    n = this._slerp;
                    break;
                case "string":
                case "bool":
                    r = Array, n = this._select;
                    break;
                default:
                    n = this._lerp
            }
            this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
        }, o.PropertyMixer.prototype = {
            constructor: o.PropertyMixer,
            accumulate: function (t, e) {
                var i = this.buffer,
                    n = this.valueSize,
                    r = t * n + n,
                    o = this.cumulativeWeight;
                if (0 === o) {
                    for (var s = 0; s !== n; ++s) i[r + s] = i[s];
                    o = e
                } else {
                    o += e;
                    var a = e / o;
                    this._mixBufferRegion(i, r, 0, a, n)
                }
                this.cumulativeWeight = o
            },
            apply: function (t) {
                var e = this.valueSize,
                    i = this.buffer,
                    n = t * e + e,
                    r = this.cumulativeWeight,
                    o = this.binding;
                if (this.cumulativeWeight = 0, r < 1) {
                    var s = 3 * e;
                    this._mixBufferRegion(i, n, s, 1 - r, e)
                }
                for (var a = e, h = e + e; a !== h; ++a)
                    if (i[a] !== i[a + e]) {
                        o.setValue(i, n);
                        break
                    }
            },
            saveOriginalState: function () {
                var t = this.binding,
                    e = this.buffer,
                    i = this.valueSize,
                    n = 3 * i;
                t.getValue(e, n);
                for (var r = i, o = n; r !== o; ++r) e[r] = e[n + r % i];
                this.cumulativeWeight = 0
            },
            restoreOriginalState: function () {
                var t = 3 * this.valueSize;
                this.binding.setValue(this.buffer, t)
            },
            _select: function (t, e, i, n, r) {
                if (n >= .5)
                    for (var o = 0; o !== r; ++o) t[e + o] = t[i + o]
            },
            _slerp: function (t, e, i, n, r) {
                o.Quaternion.slerpFlat(t, e, t, e, t, i, n)
            },
            _lerp: function (t, e, i, n, r) {
                for (var o = 1 - n, s = 0; s !== r; ++s) {
                    var a = e + s;
                    t[a] = t[a] * o + t[i + s] * n
                }
            }
        }, o.BooleanKeyframeTrack = function (t, e, i) {
            o.KeyframeTrack.call(this, t, e, i)
        }, o.BooleanKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
            constructor: o.BooleanKeyframeTrack,
            ValueTypeName: "bool",
            ValueBufferType: Array,
            DefaultInterpolation: o.IntepolateDiscrete,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }), o.NumberKeyframeTrack = function (t, e, i, n) {
            o.KeyframeTrack.call(this, t, e, i, n)
        }, o.NumberKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
            constructor: o.NumberKeyframeTrack,
            ValueTypeName: "number"
        }), o.QuaternionKeyframeTrack = function (t, e, i, n) {
            o.KeyframeTrack.call(this, t, e, i, n)
        }, o.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
            constructor: o.QuaternionKeyframeTrack,
            ValueTypeName: "quaternion",
            DefaultInterpolation: o.InterpolateLinear,
            InterpolantFactoryMethodLinear: function (t) {
                return new o.QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), t)
            },
            InterpolantFactoryMethodSmooth: void 0
        }), o.StringKeyframeTrack = function (t, e, i, n) {
            o.KeyframeTrack.call(this, t, e, i, n)
        }, o.StringKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
            constructor: o.StringKeyframeTrack,
            ValueTypeName: "string",
            ValueBufferType: Array,
            DefaultInterpolation: o.IntepolateDiscrete,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }), o.VectorKeyframeTrack = function (t, e, i, n) {
            o.KeyframeTrack.call(this, t, e, i, n)
        }, o.VectorKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
            constructor: o.VectorKeyframeTrack,
            ValueTypeName: "vector"
        }), o.Audio = function (t) {
            o.Object3D.call(this), this.type = "Audio", this.context = t.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filter = null
        }, o.Audio.prototype = Object.create(o.Object3D.prototype), o.Audio.prototype.constructor = o.Audio, o.Audio.prototype.getOutput = function () {
            return this.gain
        }, o.Audio.prototype.load = function (t) {
            var e = new o.AudioBuffer(this.context);
            return e.load(t), this.setBuffer(e), this
        }, o.Audio.prototype.setNodeSource = function (t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        }, o.Audio.prototype.setBuffer = function (t) {
            var e = this;
            return t.onReady(function (t) {
                e.source.buffer = t, e.sourceType = "buffer", e.autoplay && e.play()
            }), this
        },
    o.Audio.prototype.play = function () {
        if (this.isPlaying !== !0 && this.hasPlaybackControl !== !1) {
            var t = this.context.createBufferSource();
            t.buffer = this.source.buffer, t.loop = this.source.loop, t.onended = this.source.onended, t.start(0, this.startTime), t.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = t, this.connect()
        }
    },
    o.Audio.prototype.pause = function () {
        this.hasPlaybackControl !== !1 && (this.source.stop(), this.startTime = this.context.currentTime)
    },
    o.Audio.prototype.stop = function () {
        this.hasPlaybackControl !== !1 && (this.source.stop(), this.startTime = 0)
    },
    o.Audio.prototype.connect = function () {
        null !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.getOutput())) : this.source.connect(this.getOutput())
    },
    o.Audio.prototype.disconnect = function () {
        null !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.getOutput())) : this.source.disconnect(this.getOutput())
    },
    o.Audio.prototype.getFilter = function () {
        return this.filter
    },
    o.Audio.prototype.setFilter = function (t) {
        void 0 === t && (t = null), this.isPlaying === !0 ? (this.disconnect(), this.filter = t, this.connect()) : this.filter = t
    },
    o.Audio.prototype.setPlaybackRate = function (t) {
        this.hasPlaybackControl !== !1 && (this.playbackRate = t, this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate))
    },
    o.Audio.prototype.getPlaybackRate = function () {
        return this.playbackRate
    },
    o.Audio.prototype.onEnded = function () {
        this.isPlaying = !1
    },
    o.Audio.prototype.setLoop = function (t) {
        this.hasPlaybackControl !== !1 && (this.source.loop = t)
    },
    o.Audio.prototype.getLoop = function () {
        return this.hasPlaybackControl !== !1 && this.source.loop
    },
    o.Audio.prototype.setVolume = function (t) {
        this.gain.gain.value = t
    },
    o.Audio.prototype.getVolume = function () {
        return this.gain.gain.value
    },
    o.AudioAnalyser = function (t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    },
    o.AudioAnalyser.prototype = {
        constructor: o.AudioAnalyser,
        getData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data
        }
    },
    o.AudioBuffer = function (t) {
        this.context = t, this.ready = !1, this.readyCallbacks = []
    },
    o.AudioBuffer.prototype.load = function (t) {
        var e = this,
            i = new XMLHttpRequest;
        return i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function (t) {
            e.context.decodeAudioData(this.response, function (t) {
                e.buffer = t, e.ready = !0;
                for (var i = 0; i < e.readyCallbacks.length; i++) e.readyCallbacks[i](e.buffer);
                e.readyCallbacks = []
            })
        }, i.send(), this
    },
    o.AudioBuffer.prototype.onReady = function (t) {
        this.ready ? t(this.buffer) : this.readyCallbacks.push(t)
    },
    o.PositionalAudio = function (t) {
        o.Audio.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    },
    o.PositionalAudio.prototype = Object.create(o.Audio.prototype),
    o.PositionalAudio.prototype.constructor = o.PositionalAudio,
    o.PositionalAudio.prototype.getOutput = function () {
        return this.panner
    },
    o.PositionalAudio.prototype.setRefDistance = function (t) {
        this.panner.refDistance = t
    },
    o.PositionalAudio.prototype.getRefDistance = function () {
        return this.panner.refDistance
    },
    o.PositionalAudio.prototype.setRolloffFactor = function (t) {
        this.panner.rolloffFactor = t
    },
    o.PositionalAudio.prototype.getRolloffFactor = function () {
        return this.panner.rolloffFactor
    },
    o.PositionalAudio.prototype.setDistanceModel = function (t) {
        this.panner.distanceModel = t
    },
    o.PositionalAudio.prototype.getDistanceModel = function () {
        return this.panner.distanceModel
    },
    o.PositionalAudio.prototype.setMaxDistance = function (t) {
        this.panner.maxDistance = t
    },
    o.PositionalAudio.prototype.getMaxDistance = function () {
        return this.panner.maxDistance
    },
    o.PositionalAudio.prototype.updateMatrixWorld = function () {
        var t = new o.Vector3;
        return function (e) {
            o.Object3D.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
        }
    }(),
    o.AudioListener = function () {
        o.Object3D.call(this), this.type = "AudioListener", this.context = new (window.AudioContext || window.webkitAudioContext), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    },
    o.AudioListener.prototype = Object.create(o.Object3D.prototype),
    o.AudioListener.prototype.constructor = o.AudioListener,
    o.AudioListener.prototype.getInput = function () {
        return this.gain
    },
    o.AudioListener.prototype.removeFilter = function () {
        null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
    },
    o.AudioListener.prototype.setFilter = function (t) {
        null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
    },
    o.AudioListener.prototype.getFilter = function () {
        return this.filter
    },
    o.AudioListener.prototype.setMasterVolume = function (t) {
        this.gain.gain.value = t
    },
    o.AudioListener.prototype.getMasterVolume = function () {
        return this.gain.gain.value
    },
    o.AudioListener.prototype.updateMatrixWorld = function () {
        var t = new o.Vector3,
            e = new o.Quaternion,
            i = new o.Vector3,
            n = new o.Vector3;
        return function (r) {
            o.Object3D.prototype.updateMatrixWorld.call(this, r);
            var s = this.context.listener,
                a = this.up;
            this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), s.setPosition(t.x, t.y, t.z), s.setOrientation(n.x, n.y, n.z, a.x, a.y, a.z)
        }
    }(),
    o.Camera = function () {
        o.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new o.Matrix4, this.projectionMatrix = new o.Matrix4
    },
    o.Camera.prototype = Object.create(o.Object3D.prototype),
    o.Camera.prototype.constructor = o.Camera,
    o.Camera.prototype.getWorldDirection = function () {
        var t = new o.Quaternion;
        return function (e) {
            var i = e || new o.Vector3;
            return this.getWorldQuaternion(t), i.set(0, 0, -1).applyQuaternion(t)
        }
    }(),
    o.Camera.prototype.lookAt = function () {
        var t = new o.Matrix4;
        return function (e) {
            t.lookAt(this.position, e, this.up), this.quaternion.setFromRotationMatrix(t)
        }
    }(),
    o.Camera.prototype.clone = function () {
        return (new this.constructor).copy(this)
    },
    o.Camera.prototype.copy = function (t) {
        return o.Object3D.prototype.copy.call(this, t), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
    },
    o.CubeCamera = function (t, e, i) {
        o.Object3D.call(this), this.type = "CubeCamera";
        var n = 90,
            r = 1,
            s = new o.PerspectiveCamera(n, r, t, e);
        s.up.set(0, -1, 0), s.lookAt(new o.Vector3(1, 0, 0)), this.add(s);
        var a = new o.PerspectiveCamera(n, r, t, e);
        a.up.set(0, -1, 0), a.lookAt(new o.Vector3((-1), 0, 0)), this.add(a);
        var h = new o.PerspectiveCamera(n, r, t, e);
        h.up.set(0, 0, 1), h.lookAt(new o.Vector3(0, 1, 0)), this.add(h);
        var l = new o.PerspectiveCamera(n, r, t, e);
        l.up.set(0, 0, -1), l.lookAt(new o.Vector3(0, (-1), 0)), this.add(l);
        var c = new o.PerspectiveCamera(n, r, t, e);
        c.up.set(0, -1, 0), c.lookAt(new o.Vector3(0, 0, 1)), this.add(c);
        var u = new o.PerspectiveCamera(n, r, t, e);
        u.up.set(0, -1, 0), u.lookAt(new o.Vector3(0, 0, (-1))), this.add(u);
        var p = {
            format: o.RGBFormat,
            magFilter: o.LinearFilter,
            minFilter: o.LinearFilter
        };
        this.renderTarget = new o.WebGLRenderTargetCube(i, i, p), this.updateCubeMap = function (t, e) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget,
                n = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, s, i), i.activeCubeFace = 1, t.render(e, a, i), i.activeCubeFace = 2, t.render(e, h, i), i.activeCubeFace = 3, t.render(e, l, i), i.activeCubeFace = 4, t.render(e, c, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, t.render(e, u, i), t.setRenderTarget(null)
        }
    },
    o.CubeCamera.prototype = Object.create(o.Object3D.prototype),
    o.CubeCamera.prototype.constructor = o.CubeCamera,
    o.OrthographicCamera = function (t, e, i, n, r, s) {
        o.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== s ? s : 2e3, this.updateProjectionMatrix()
    },
    o.OrthographicCamera.prototype = Object.create(o.Camera.prototype),
    o.OrthographicCamera.prototype.constructor = o.OrthographicCamera,
    o.OrthographicCamera.prototype.updateProjectionMatrix = function () {
        var t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            i = (this.right + this.left) / 2,
            n = (this.top + this.bottom) / 2;
        this.projectionMatrix.makeOrthographic(i - t, i + t, n + e, n - e, this.near, this.far)
    },
    o.OrthographicCamera.prototype.copy = function (t) {
        return o.Camera.prototype.copy.call(this, t), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this
    },
    o.OrthographicCamera.prototype.toJSON = function (t) {
        var e = o.Object3D.prototype.toJSON.call(this, t);
        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, e
    },
    o.PerspectiveCamera = function (t, e, i, n) {
        o.Camera.call(this), this.type = "PerspectiveCamera", this.focalLength = 10, this.zoom = 1, this.fov = void 0 !== t ? t : 50, this.aspect = void 0 !== e ? e : 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
    },
    o.PerspectiveCamera.prototype = Object.create(o.Camera.prototype),
    o.PerspectiveCamera.prototype.constructor = o.PerspectiveCamera,
    o.PerspectiveCamera.prototype.setLens = function (t, e) {
        void 0 === e && (e = 24), this.fov = 2 * o.Math.radToDeg(Math.atan(e / (2 * t))), this.updateProjectionMatrix()
    },
    o.PerspectiveCamera.prototype.setViewOffset = function (t, e, i, n, r, o) {
        this.fullWidth = t, this.fullHeight = e, this.x = i, this.y = n, this.width = r, this.height = o, this.updateProjectionMatrix()
    },
    o.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
        var t = o.Math.radToDeg(2 * Math.atan(Math.tan(.5 * o.Math.degToRad(this.fov)) / this.zoom));
        if (this.fullWidth) {
            var e = this.fullWidth / this.fullHeight,
                i = Math.tan(o.Math.degToRad(.5 * t)) * this.near,
                n = -i,
                r = e * n,
                s = e * i,
                a = Math.abs(s - r),
                h = Math.abs(i - n);
            this.projectionMatrix.makeFrustum(r + this.x * a / this.fullWidth, r + (this.x + this.width) * a / this.fullWidth, i - (this.y + this.height) * h / this.fullHeight, i - this.y * h / this.fullHeight, this.near, this.far)
        } else this.projectionMatrix.makePerspective(t, this.aspect, this.near, this.far)
    },
    o.PerspectiveCamera.prototype.copy = function (t) {
        return o.Camera.prototype.copy.call(this, t), this.focalLength = t.focalLength, this.zoom = t.zoom, this.fov = t.fov, this.aspect = t.aspect, this.near = t.near, this.far = t.far, this
    },
    o.PerspectiveCamera.prototype.toJSON = function (t) {
        var e = o.Object3D.prototype.toJSON.call(this, t);
        return e.object.focalLength = this.focalLength, e.object.zoom = this.zoom, e.object.fov = this.fov, e.object.aspect = this.aspect, e.object.near = this.near, e.object.far = this.far, e
    },
    o.StereoCamera = function () {
        this.type = "StereoCamera", this.aspect = 1, this.cameraL = new o.PerspectiveCamera, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new o.PerspectiveCamera, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    },
    o.StereoCamera.prototype = {
        constructor: o.StereoCamera,
        update: function () {
            var t, e, i, n, r, s = new o.Matrix4,
                a = new o.Matrix4;
            return function (h) {
                var l = t !== h.focalLength || e !== h.fov || i !== h.aspect * this.aspect || n !== h.near || r !== h.far;
                if (l) {
                    t = h.focalLength, e = h.fov, i = h.aspect * this.aspect, n = h.near, r = h.far;
                    var c, u, p = h.projectionMatrix.clone(),
                        d = .032,
                        f = d * n / t,
                        m = n * Math.tan(o.Math.degToRad(.5 * e));
                    a.elements[12] = -d, s.elements[12] = d, c = -m * i + f, u = m * i + f, p.elements[0] = 2 * n / (u - c), p.elements[8] = (u + c) / (u - c), this.cameraL.projectionMatrix.copy(p), c = -m * i - f, u = m * i - f, p.elements[0] = 2 * n / (u - c), p.elements[8] = (u + c) / (u - c), this.cameraR.projectionMatrix.copy(p)
                }
                this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(a), this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(s)
            }
        }()
    },
    o.Light = function (t, e) {
        o.Object3D.call(this), this.type = "Light", this.color = new o.Color(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    },
    o.Light.prototype = Object.create(o.Object3D.prototype),
    o.Light.prototype.constructor = o.Light,
    o.Light.prototype.copy = function (t) {
        return o.Object3D.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
    },
    o.Light.prototype.toJSON = function (t) {
        var e = o.Object3D.prototype.toJSON.call(this, t);
        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), e
    },
    o.LightShadow = function (t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new o.Vector2(512, 512), this.map = null, this.matrix = new o.Matrix4
    },
    o.LightShadow.prototype = {
        constructor: o.LightShadow,
        copy: function (t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        },
        clone: function () {
            return (new this.constructor).copy(this)
        }
    },
    o.AmbientLight = function (t, e) {
        o.Light.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    },
    o.AmbientLight.prototype = Object.create(o.Light.prototype),
    o.AmbientLight.prototype.constructor = o.AmbientLight,
    o.DirectionalLight = function (t, e) {
        o.Light.call(this, t, e), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new o.Object3D, this.shadow = new o.LightShadow(new o.OrthographicCamera((-5), 5, 5, (-5), .5, 500))
    },
    o.DirectionalLight.prototype = Object.create(o.Light.prototype),
    o.DirectionalLight.prototype.constructor = o.DirectionalLight,
    o.DirectionalLight.prototype.copy = function (t) {
        return o.Light.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    },
    o.HemisphereLight = function (t, e, i) {
        o.Light.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new o.Color(e)
    },
    o.HemisphereLight.prototype = Object.create(o.Light.prototype),
    o.HemisphereLight.prototype.constructor = o.HemisphereLight,
    o.HemisphereLight.prototype.copy = function (t) {
        return o.Light.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
    },
    o.PointLight = function (t, e, i, n) {
        o.Light.call(this, t, e), this.type = "PointLight", this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new o.LightShadow(new o.PerspectiveCamera(90, 1, .5, 500))
    },
    o.PointLight.prototype = Object.create(o.Light.prototype),
    o.PointLight.prototype.constructor = o.PointLight,
    Object.defineProperty(o.PointLight.prototype, "power", {
        get: function () {
            return 4 * this.intensity * Math.PI
        },
        set: function (t) {
            this.intensity = t / (4 * Math.PI)
        }
    }),
    o.PointLight.prototype.copy = function (t) {
        return o.Light.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    },
    o.SpotLight = function (t, e, i, n, r, s) {
        o.Light.call(this, t, e), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new o.Object3D, this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== s ? s : 1, this.shadow = new o.LightShadow(new o.PerspectiveCamera(50, 1, .5, 500))
    },
    o.SpotLight.prototype = Object.create(o.Light.prototype),
    o.SpotLight.prototype.constructor = o.SpotLight,
    Object.defineProperty(o.SpotLight.prototype, "power", {
        get: function () {
            return this.intensity * Math.PI
        },
        set: function (t) {
            this.intensity = t / Math.PI
        }
    }),
    o.SpotLight.prototype.copy = function (t) {
        return o.Light.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }, o.Cache = {
        enabled: !1,
        files: {},
        add: function (t, e) {
            this.enabled !== !1 && (this.files[t] = e)
        },
        get: function (t) {
            if (this.enabled !== !1) return this.files[t]
        },
        remove: function (t) {
            delete this.files[t]
        },
        clear: function () {
            this.files = {}
        }
    },
    o.Loader = function () {
        this.onLoadStart = function () { }, this.onLoadProgress = function () { }, this.onLoadComplete = function () { }
    },
    o.Loader.prototype = {
        constructor: o.Loader,
        crossOrigin: void 0,
        extractUrlBase: function (t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        },
        initMaterials: function (t, e, i) {
            for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
            return n
        },
        createMaterial: function () {
            var t, e, i;
            return function (n, r, s) {
                function a(t, i, n, a, l) {
                    var c, u = r + t,
                        p = o.Loader.Handlers.get(u);
                    null !== p ? c = p.load(u) : (e.setCrossOrigin(s), c = e.load(u)), void 0 !== i && (c.repeat.fromArray(i), 1 !== i[0] && (c.wrapS = o.RepeatWrapping), 1 !== i[1] && (c.wrapT = o.RepeatWrapping)), void 0 !== n && c.offset.fromArray(n), void 0 !== a && ("repeat" === a[0] && (c.wrapS = o.RepeatWrapping), "mirror" === a[0] && (c.wrapS = o.MirroredRepeatWrapping), "repeat" === a[1] && (c.wrapT = o.RepeatWrapping), "mirror" === a[1] && (c.wrapT = o.MirroredRepeatWrapping)), void 0 !== l && (c.anisotropy = l);
                    var d = o.Math.generateUUID();
                    return h[d] = c, d
                }
                void 0 === t && (t = new o.Color), void 0 === e && (e = new o.TextureLoader), void 0 === i && (i = new o.MaterialLoader);
                var h = {},
                    l = {
                        uuid: o.Math.generateUUID(),
                        type: "MeshLambertMaterial"
                    };
                for (var c in n) {
                    var u = n[c];
                    switch (c) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            l.name = u;
                            break;
                        case "blending":
                            l.blending = o[u];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            break;
                        case "colorDiffuse":
                            l.color = t.fromArray(u).getHex();
                            break;
                        case "colorSpecular":
                            l.specular = t.fromArray(u).getHex();
                            break;
                        case "colorEmissive":
                            l.emissive = t.fromArray(u).getHex();
                            break;
                        case "specularCoef":
                            l.shininess = u;
                            break;
                        case "shading":
                            "basic" === u.toLowerCase() && (l.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (l.type = "MeshPhongMaterial");
                            break;
                        case "mapDiffuse":
                            l.map = a(u, n.mapDiffuseRepeat, n.mapDiffuseOffset, n.mapDiffuseWrap, n.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapLight":
                            l.lightMap = a(u, n.mapLightRepeat, n.mapLightOffset, n.mapLightWrap, n.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            l.aoMap = a(u, n.mapAORepeat, n.mapAOOffset, n.mapAOWrap, n.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            l.bumpMap = a(u, n.mapBumpRepeat, n.mapBumpOffset, n.mapBumpWrap, n.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            l.bumpScale = u;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            l.normalMap = a(u, n.mapNormalRepeat, n.mapNormalOffset, n.mapNormalWrap, n.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            l.normalScale = [u, u];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            l.specularMap = a(u, n.mapSpecularRepeat, n.mapSpecularOffset, n.mapSpecularWrap, n.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapAlpha":
                            l.alphaMap = a(u, n.mapAlphaRepeat, n.mapAlphaOffset, n.mapAlphaWrap, n.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            l.side = o.BackSide;
                            break;
                        case "doubleSided":
                            l.side = o.DoubleSide;
                            break;
                        case "transparency":
                            l.opacity = u;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            l[c] = u;
                            break;
                        case "vertexColors":
                            u === !0 && (l.vertexColors = o.VertexColors), "face" === u && (l.vertexColors = o.FaceColors)
                    }
                }
                return "MeshBasicMaterial" === l.type && delete l.emissive, "MeshPhongMaterial" !== l.type && delete l.specular, l.opacity < 1 && (l.transparent = !0), i.setTextures(h), i.parse(l)
            }
        }()
    },
    o.Loader.Handlers = {
        handlers: [],
        add: function (t, e) {
            this.handlers.push(t, e)
        },
        get: function (t) {
            for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                var r = e[i],
                    o = e[i + 1];
                if (r.test(t)) return o
            }
            return null
        }
    },
    o.XHRLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },
    o.XHRLoader.prototype = {
        constructor: o.XHRLoader,
        load: function (t, e, i, n) {
            void 0 !== this.path && (t = this.path + t);
            var r = this,
                s = o.Cache.get(t);
            if (void 0 !== s) return e && setTimeout(function () {
                e(s)
            }, 0), s;
            var a = new XMLHttpRequest;
            return a.overrideMimeType("text/plain"), a.open("GET", t, !0), a.addEventListener("load", function (i) {
                var s = i.target.response;
                o.Cache.add(t, s), 200 === this.status ? (e && e(s), r.manager.itemEnd(t)) : 0 === this.status ? (e && e(s), r.manager.itemEnd(t)) : (n && n(i), r.manager.itemError(t))
            }, !1), void 0 !== i && a.addEventListener("progress", function (t) {
                i(t)
            }, !1), a.addEventListener("error", function (e) {
                n && n(e), r.manager.itemError(t)
            }, !1), void 0 !== this.responseType && (a.responseType = this.responseType), void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials), a.send(null), r.manager.itemStart(t), a
        },
        setPath: function (t) {
            this.path = t
        },
        setResponseType: function (t) {
            this.responseType = t
        },
        setWithCredentials: function (t) {
            this.withCredentials = t
        }
    },
    o.FontLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },
    o.FontLoader.prototype = {
        constructor: o.FontLoader,
        load: function (t, e, i, n) {
            var r = new o.XHRLoader(this.manager);
            r.load(t, function (t) {
                e(new o.Font(JSON.parse(t.substring(65, t.length - 2))))
            }, i, n)
        }
    },
    o.ImageLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },
    o.ImageLoader.prototype = {
        constructor: o.ImageLoader,
        load: function (t, e, i, n) {
            void 0 !== this.path && (t = this.path + t);
            var r = this,
                s = o.Cache.get(t);
            if (void 0 !== s) return r.manager.itemStart(t), e ? setTimeout(function () {
                e(s), r.manager.itemEnd(t)
            }, 0) : r.manager.itemEnd(t), s;
            var a = document.createElement("img");
            return a.addEventListener("load", function (i) {
                o.Cache.add(t, this), e && e(this), r.manager.itemEnd(t)
            }, !1), void 0 !== i && a.addEventListener("progress", function (t) {
                i(t)
            }, !1), a.addEventListener("error", function (e) {
                n && n(e), r.manager.itemError(t)
            }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
        },
        setCrossOrigin: function (t) {
            this.crossOrigin = t
        },
        setPath: function (t) {
            this.path = t
        }
    },
    o.JSONLoader = function (t) {
        "boolean" == typeof t && (t = void 0), this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this.withCredentials = !1
    },
    o.JSONLoader.prototype = {
        constructor: o.JSONLoader,
        get statusDomElement() {
            return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")), this._statusDomElement
        },
        load: function (t, e, i, n) {
            var r = this,
                s = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : o.Loader.prototype.extractUrlBase(t),
                a = new o.XHRLoader(this.manager);
            a.setWithCredentials(this.withCredentials), a.load(t, function (t) {
                var i = JSON.parse(t),
                    n = i.metadata;
                if (void 0 !== n) {
                    var o = n.type;
                    if (void 0 !== o) {
                        if ("object" === o.toLowerCase()) return;
                        if ("scene" === o.toLowerCase()) return
                    }
                }
                var a = r.parse(i, s);
                e(a.geometry, a.materials)
            }, i, n)
        },
        setTexturePath: function (t) {
            this.texturePath = t
        },
        parse: function (t, e) {
            function i(e) {
                function i(t, e) {
                    return t & 1 << e
                }
                var n, r, s, h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, S, T, M, E, A, C, L, R, P, O = t.faces,
                    I = t.vertices,
                    D = t.normals,
                    B = t.colors,
                    k = 0;
                if (void 0 !== t.uvs) {
                    for (n = 0; n < t.uvs.length; n++) t.uvs[n].length && k++;
                    for (n = 0; n < k; n++) a.faceVertexUvs[n] = []
                }
                for (h = 0, l = I.length; h < l;) w = new o.Vector3, w.x = I[h++] * e, w.y = I[h++] * e, w.z = I[h++] * e, a.vertices.push(w);
                for (h = 0, l = O.length; h < l;)
                    if (f = O[h++], m = i(f, 0), g = i(f, 1), v = i(f, 3), y = i(f, 4), _ = i(f, 5), x = i(f, 6), b = i(f, 7), m) {
                        if (T = new o.Face3, T.a = O[h], T.b = O[h + 1], T.c = O[h + 3], M = new o.Face3, M.a = O[h + 1], M.b = O[h + 2], M.c = O[h + 3], h += 4, g && (d = O[h++], T.materialIndex = d, M.materialIndex = d), s = a.faces.length, v)
                            for (n = 0; n < k; n++)
                                for (C = t.uvs[n], a.faceVertexUvs[n][s] = [], a.faceVertexUvs[n][s + 1] = [], r = 0; r < 4; r++) p = O[h++], R = C[2 * p], P = C[2 * p + 1], L = new o.Vector2(R, P), 2 !== r && a.faceVertexUvs[n][s].push(L), 0 !== r && a.faceVertexUvs[n][s + 1].push(L);
                        if (y && (u = 3 * O[h++], T.normal.set(D[u++], D[u++], D[u]), M.normal.copy(T.normal)), _)
                            for (n = 0; n < 4; n++) u = 3 * O[h++], A = new o.Vector3(D[u++], D[u++], D[u]), 2 !== n && T.vertexNormals.push(A), 0 !== n && M.vertexNormals.push(A);
                        if (x && (c = O[h++], E = B[c], T.color.setHex(E), M.color.setHex(E)), b)
                            for (n = 0; n < 4; n++) c = O[h++], E = B[c], 2 !== n && T.vertexColors.push(new o.Color(E)), 0 !== n && M.vertexColors.push(new o.Color(E));
                        a.faces.push(T), a.faces.push(M)
                    } else {
                        if (S = new o.Face3, S.a = O[h++], S.b = O[h++], S.c = O[h++], g && (d = O[h++], S.materialIndex = d), s = a.faces.length, v)
                            for (n = 0; n < k; n++)
                                for (C = t.uvs[n], a.faceVertexUvs[n][s] = [], r = 0; r < 3; r++) p = O[h++], R = C[2 * p], P = C[2 * p + 1], L = new o.Vector2(R, P), a.faceVertexUvs[n][s].push(L);
                        if (y && (u = 3 * O[h++], S.normal.set(D[u++], D[u++], D[u])), _)
                            for (n = 0; n < 3; n++) u = 3 * O[h++], A = new o.Vector3(D[u++], D[u++], D[u]), S.vertexNormals.push(A);
                        if (x && (c = O[h++], S.color.setHex(B[c])), b)
                            for (n = 0; n < 3; n++) c = O[h++], S.vertexColors.push(new o.Color(B[c]));
                        a.faces.push(S)
                    }
            }

            function n() {
                var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                if (t.skinWeights)
                    for (var i = 0, n = t.skinWeights.length; i < n; i += e) {
                        var r = t.skinWeights[i],
                            s = e > 1 ? t.skinWeights[i + 1] : 0,
                            h = e > 2 ? t.skinWeights[i + 2] : 0,
                            l = e > 3 ? t.skinWeights[i + 3] : 0;
                        a.skinWeights.push(new o.Vector4(r, s, h, l))
                    }
                if (t.skinIndices)
                    for (var i = 0, n = t.skinIndices.length; i < n; i += e) {
                        var c = t.skinIndices[i],
                            u = e > 1 ? t.skinIndices[i + 1] : 0,
                            p = e > 2 ? t.skinIndices[i + 2] : 0,
                            d = e > 3 ? t.skinIndices[i + 3] : 0;
                        a.skinIndices.push(new o.Vector4(c, u, p, d))
                    }
                a.bones = t.bones, a.bones && a.bones.length > 0 && (a.skinWeights.length !== a.skinIndices.length || a.skinIndices.length !== a.vertices.length)
            }

            function r(e) {
                if (void 0 !== t.morphTargets)
                    for (var i = 0, n = t.morphTargets.length; i < n; i++) {
                        a.morphTargets[i] = {}, a.morphTargets[i].name = t.morphTargets[i].name, a.morphTargets[i].vertices = [];
                        for (var r = a.morphTargets[i].vertices, s = t.morphTargets[i].vertices, h = 0, l = s.length; h < l; h += 3) {
                            var c = new o.Vector3;
                            c.x = s[h] * e, c.y = s[h + 1] * e, c.z = s[h + 2] * e, r.push(c)
                        }
                    }
                if (void 0 !== t.morphColors && t.morphColors.length > 0)
                    for (var u = a.faces, p = t.morphColors[0].colors, i = 0, n = u.length; i < n; i++) u[i].color.fromArray(p, 3 * i)
            }

            function s() {
                var e = [],
                    i = [];
                void 0 !== t.animation && i.push(t.animation), void 0 !== t.animations && (t.animations.length ? i = i.concat(t.animations) : i.push(t.animations));
                for (var n = 0; n < i.length; n++) {
                    var r = o.AnimationClip.parseAnimation(i[n], a.bones);
                    r && e.push(r)
                }
                if (a.morphTargets) {
                    var s = o.AnimationClip.CreateClipsFromMorphTargetSequences(a.morphTargets, 10);
                    e = e.concat(s)
                }
                e.length > 0 && (a.animations = e)
            }
            var a = new o.Geometry,
                h = void 0 !== t.scale ? 1 / t.scale : 1;
            if (i(h), n(), r(h), s(), a.computeFaceNormals(), a.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length) return {
                geometry: a
            };
            var l = o.Loader.prototype.initMaterials(t.materials, e, this.crossOrigin);
            return {
                geometry: a,
                materials: l
            }
        }
    },
    o.LoadingManager = function (t, e, i) {
        var n = this,
            r = !1,
            o = 0,
            s = 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function (t) {
            s++, r === !1 && void 0 !== n.onStart && n.onStart(t, o, s), r = !0
        }, this.itemEnd = function (t) {
            o++, void 0 !== n.onProgress && n.onProgress(t, o, s), o === s && (r = !1, void 0 !== n.onLoad && n.onLoad())
        }, this.itemError = function (t) {
            void 0 !== n.onError && n.onError(t)
        }
    },
    o.DefaultLoadingManager = new o.LoadingManager,
    o.BufferGeometryLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },
    o.BufferGeometryLoader.prototype = {
        constructor: o.BufferGeometryLoader,
        load: function (t, e, i, n) {
            var r = this,
                s = new o.XHRLoader(r.manager);
            s.load(t, function (t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        parse: function (t) {
            var e = new o.BufferGeometry,
                i = t.data.index,
                n = {
                    Int8Array: Int8Array,
                    Uint8Array: Uint8Array,
                    Uint8ClampedArray: Uint8ClampedArray,
                    Int16Array: Int16Array,
                    Uint16Array: Uint16Array,
                    Int32Array: Int32Array,
                    Uint32Array: Uint32Array,
                    Float32Array: Float32Array,
                    Float64Array: Float64Array
                };
            if (void 0 !== i) {
                var r = new n[i.type](i.array);
                e.setIndex(new o.BufferAttribute(r, 1))
            }
            var s = t.data.attributes;
            for (var a in s) {
                var h = s[a],
                    r = new n[h.type](h.array);
                e.addAttribute(a, new o.BufferAttribute(r, h.itemSize))
            }
            var l = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== l)
                for (var c = 0, u = l.length; c !== u; ++c) {
                    var p = l[c];
                    e.addGroup(p.start, p.count, p.materialIndex)
                }
            var d = t.data.boundingSphere;
            if (void 0 !== d) {
                var f = new o.Vector3;
                void 0 !== d.center && f.fromArray(d.center), e.boundingSphere = new o.Sphere(f, d.radius)
            }
            return e
        }
    }, o.MaterialLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this.textures = {}
    }, o.MaterialLoader.prototype = {
        constructor: o.MaterialLoader,
        load: function (t, e, i, n) {
            var r = this,
                s = new o.XHRLoader(r.manager);
            s.load(t, function (t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        setTextures: function (t) {
            this.textures = t
        },
        getTexture: function (t) {
            var e = this.textures;
            return void 0 === e[t], e[t]
        },
        parse: function (t) {
            var e = new o[t.type];
            if (void 0 !== t.uuid && (e.uuid = t.uuid), void 0 !== t.name && (e.name = t.name), void 0 !== t.color && e.color.setHex(t.color), void 0 !== t.roughness && (e.roughness = t.roughness), void 0 !== t.metalness && (e.metalness = t.metalness), void 0 !== t.emissive && e.emissive.setHex(t.emissive), void 0 !== t.specular && e.specular.setHex(t.specular),
                void 0 !== t.shininess && (e.shininess = t.shininess), void 0 !== t.uniforms && (e.uniforms = t.uniforms), void 0 !== t.vertexShader && (e.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (e.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (e.vertexColors = t.vertexColors), void 0 !== t.shading && (e.shading = t.shading), void 0 !== t.blending && (e.blending = t.blending), void 0 !== t.side && (e.side = t.side), void 0 !== t.opacity && (e.opacity = t.opacity), void 0 !== t.transparent && (e.transparent = t.transparent), void 0 !== t.alphaTest && (e.alphaTest = t.alphaTest), void 0 !== t.depthTest && (e.depthTest = t.depthTest), void 0 !== t.depthWrite && (e.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (e.colorWrite = t.colorWrite), void 0 !== t.wireframe && (e.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (e.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.size && (e.size = t.size), void 0 !== t.sizeAttenuation && (e.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (e.map = this.getTexture(t.map)), void 0 !== t.alphaMap && (e.alphaMap = this.getTexture(t.alphaMap), e.transparent = !0), void 0 !== t.bumpMap && (e.bumpMap = this.getTexture(t.bumpMap)), void 0 !== t.bumpScale && (e.bumpScale = t.bumpScale), void 0 !== t.normalMap && (e.normalMap = this.getTexture(t.normalMap)), void 0 !== t.normalScale) {
                var i = t.normalScale;
                Array.isArray(i) === !1 && (i = [i, i]), e.normalScale = (new o.Vector2).fromArray(i)
            }
            if (void 0 !== t.displacementMap && (e.displacementMap = this.getTexture(t.displacementMap)), void 0 !== t.displacementScale && (e.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (e.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (e.roughnessMap = this.getTexture(t.roughnessMap)), void 0 !== t.metalnessMap && (e.metalnessMap = this.getTexture(t.metalnessMap)), void 0 !== t.emissiveMap && (e.emissiveMap = this.getTexture(t.emissiveMap)), void 0 !== t.emissiveIntensity && (e.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (e.specularMap = this.getTexture(t.specularMap)), void 0 !== t.envMap && (e.envMap = this.getTexture(t.envMap), e.combine = o.MultiplyOperation), t.reflectivity && (e.reflectivity = t.reflectivity), void 0 !== t.lightMap && (e.lightMap = this.getTexture(t.lightMap)), void 0 !== t.lightMapIntensity && (e.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (e.aoMap = this.getTexture(t.aoMap)), void 0 !== t.aoMapIntensity && (e.aoMapIntensity = t.aoMapIntensity), void 0 !== t.materials)
                for (var n = 0, r = t.materials.length; n < r; n++) e.materials.push(this.parse(t.materials[n]));
            return e
        }
    }, o.ObjectLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this.texturePath = ""
    }, o.ObjectLoader.prototype = {
        constructor: o.ObjectLoader,
        load: function (t, e, i, n) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var r = this,
                s = new o.XHRLoader(r.manager);
            s.load(t, function (t) {
                r.parse(JSON.parse(t), e)
            }, i, n)
        },
        setTexturePath: function (t) {
            this.texturePath = t
        },
        setCrossOrigin: function (t) {
            this.crossOrigin = t
        },
        parse: function (t, e) {
            var i = this.parseGeometries(t.geometries),
                n = this.parseImages(t.images, function () {
                    void 0 !== e && e(s)
                }),
                r = this.parseTextures(t.textures, n),
                o = this.parseMaterials(t.materials, r),
                s = this.parseObject(t.object, i, o);
            return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
        },
        parseGeometries: function (t) {
            var e = {};
            if (void 0 !== t)
                for (var i = new o.JSONLoader, n = new o.BufferGeometryLoader, r = 0, s = t.length; r < s; r++) {
                    var a, h = t[r];
                    switch (h.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            a = new o[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            a = new o[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            a = new o[h.type](h.radius, h.segments, h.thetaStart, h.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            a = new o[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            a = new o[h.type](h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                            a = new o.DodecahedronGeometry(h.radius, h.detail);
                            break;
                        case "IcosahedronGeometry":
                            a = new o.IcosahedronGeometry(h.radius, h.detail);
                            break;
                        case "OctahedronGeometry":
                            a = new o.OctahedronGeometry(h.radius, h.detail);
                            break;
                        case "TetrahedronGeometry":
                            a = new o.TetrahedronGeometry(h.radius, h.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            a = new o[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            a = new o[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            a = new o[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
                            break;
                        case "LatheGeometry":
                            a = new o.LatheGeometry(h.points, h.segments, h.phiStart, h.phiLength);
                            break;
                        case "BufferGeometry":
                            a = n.parse(h);
                            break;
                        case "Geometry":
                            a = i.parse(h.data, this.texturePath).geometry;
                            break;
                        default:
                            continue
                    }
                    a.uuid = h.uuid, void 0 !== h.name && (a.name = h.name), e[h.uuid] = a
                }
            return e
        },
        parseMaterials: function (t, e) {
            var i = {};
            if (void 0 !== t) {
                var n = new o.MaterialLoader;
                n.setTextures(e);
                for (var r = 0, s = t.length; r < s; r++) {
                    var a = n.parse(t[r]);
                    i[a.uuid] = a
                }
            }
            return i
        },
        parseAnimations: function (t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = o.AnimationClip.parse(t[i]);
                e.push(n)
            }
            return e
        },
        parseImages: function (t, e) {
            function i(t) {
                return n.manager.itemStart(t), a.load(t, function () {
                    n.manager.itemEnd(t)
                })
            }
            var n = this,
                r = {};
            if (void 0 !== t && t.length > 0) {
                var s = new o.LoadingManager(e),
                    a = new o.ImageLoader(s);
                a.setCrossOrigin(this.crossOrigin);
                for (var h = 0, l = t.length; h < l; h++) {
                    var c = t[h],
                        u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
                    r[c.uuid] = i(u)
                }
            }
            return r
        },
        parseTextures: function (t, e) {
            function i(t) {
                return "number" == typeof t ? t : o[t]
            }
            var n = {};
            if (void 0 !== t)
                for (var r = 0, s = t.length; r < s; r++) {
                    var a = t[r];
                    void 0 === a.image, void 0 === e[a.image];
                    var h = new o.Texture(e[a.image]);
                    h.needsUpdate = !0, h.uuid = a.uuid, void 0 !== a.name && (h.name = a.name), void 0 !== a.mapping && (h.mapping = i(a.mapping)), void 0 !== a.offset && (h.offset = new o.Vector2(a.offset[0], a.offset[1])), void 0 !== a.repeat && (h.repeat = new o.Vector2(a.repeat[0], a.repeat[1])), void 0 !== a.minFilter && (h.minFilter = i(a.minFilter)), void 0 !== a.magFilter && (h.magFilter = i(a.magFilter)), void 0 !== a.anisotropy && (h.anisotropy = a.anisotropy), Array.isArray(a.wrap) && (h.wrapS = i(a.wrap[0]), h.wrapT = i(a.wrap[1])), n[a.uuid] = h
                }
            return n
        },
        parseObject: function () {
            var t = new o.Matrix4;
            return function (e, i, n) {
                function r(t) {
                    return void 0 === i[t], i[t]
                }

                function s(t) {
                    if (void 0 !== t) return void 0 === n[t], n[t]
                }
                var a;
                switch (e.type) {
                    case "Scene":
                        a = new o.Scene;
                        break;
                    case "PerspectiveCamera":
                        a = new o.PerspectiveCamera(e.fov, e.aspect, e.near, e.far);
                        break;
                    case "OrthographicCamera":
                        a = new o.OrthographicCamera(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case "AmbientLight":
                        a = new o.AmbientLight(e.color, e.intensity);
                        break;
                    case "DirectionalLight":
                        a = new o.DirectionalLight(e.color, e.intensity);
                        break;
                    case "PointLight":
                        a = new o.PointLight(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case "SpotLight":
                        a = new o.SpotLight(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                        break;
                    case "HemisphereLight":
                        a = new o.HemisphereLight(e.color, e.groundColor, e.intensity);
                        break;
                    case "Mesh":
                        var h = r(e.geometry),
                            l = s(e.material);
                        a = h.bones && h.bones.length > 0 ? new o.SkinnedMesh(h, l) : new o.Mesh(h, l);
                        break;
                    case "LOD":
                        a = new o.LOD;
                        break;
                    case "Line":
                        a = new o.Line(r(e.geometry), s(e.material), e.mode);
                        break;
                    case "PointCloud":
                    case "Points":
                        a = new o.Points(r(e.geometry), s(e.material));
                        break;
                    case "Sprite":
                        a = new o.Sprite(s(e.material));
                        break;
                    case "Group":
                        a = new o.Group;
                        break;
                    default:
                        a = new o.Object3D
                }
                if (a.uuid = e.uuid, void 0 !== e.name && (a.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== e.position && a.position.fromArray(e.position), void 0 !== e.rotation && a.rotation.fromArray(e.rotation), void 0 !== e.scale && a.scale.fromArray(e.scale)), void 0 !== e.castShadow && (a.castShadow = e.castShadow), void 0 !== e.receiveShadow && (a.receiveShadow = e.receiveShadow), void 0 !== e.visible && (a.visible = e.visible), void 0 !== e.userData && (a.userData = e.userData), void 0 !== e.children)
                    for (var c in e.children) a.add(this.parseObject(e.children[c], i, n));
                if ("LOD" === e.type)
                    for (var u = e.levels, p = 0; p < u.length; p++) {
                        var d = u[p],
                            c = a.getObjectByProperty("uuid", d.object);
                        void 0 !== c && a.addLevel(c, d.distance)
                    }
                return a
            }
        }()
    }, o.TextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    }, o.TextureLoader.prototype = {
        constructor: o.TextureLoader,
        load: function (t, e, i, n) {
            var r = new o.Texture,
                s = new o.ImageLoader(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, function (t) {
                r.image = t, r.needsUpdate = !0, void 0 !== e && e(r)
            }, i, n), r
        },
        setCrossOrigin: function (t) {
            this.crossOrigin = t
        },
        setPath: function (t) {
            this.path = t
        }
    }, o.CubeTextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    }, o.CubeTextureLoader.prototype = {
        constructor: o.CubeTextureLoader,
        load: function (t, e, i, n) {
            function r(i) {
                a.load(t[i], function (t) {
                    s.images[i] = t, h++, 6 === h && (s.needsUpdate = !0, e && e(s))
                }, void 0, n)
            }
            var s = new o.CubeTexture,
                a = new o.ImageLoader(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            for (var h = 0, l = 0; l < t.length; ++l) r(l);
            return s
        },
        setCrossOrigin: function (t) {
            this.crossOrigin = t
        },
        setPath: function (t) {
            this.path = t
        }
    }, o.DataTextureLoader = o.BinaryTextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this._parser = null
    }, o.BinaryTextureLoader.prototype = {
        constructor: o.BinaryTextureLoader,
        load: function (t, e, i, n) {
            var r = this,
                s = new o.DataTexture,
                a = new o.XHRLoader(this.manager);
            return a.setResponseType("arraybuffer"), a.load(t, function (t) {
                var i = r._parser(t);
                i && (void 0 !== i.image ? s.image = i.image : void 0 !== i.data && (s.image.width = i.width, s.image.height = i.height, s.image.data = i.data), s.wrapS = void 0 !== i.wrapS ? i.wrapS : o.ClampToEdgeWrapping, s.wrapT = void 0 !== i.wrapT ? i.wrapT : o.ClampToEdgeWrapping, s.magFilter = void 0 !== i.magFilter ? i.magFilter : o.LinearFilter, s.minFilter = void 0 !== i.minFilter ? i.minFilter : o.LinearMipMapLinearFilter, s.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (s.format = i.format), void 0 !== i.type && (s.type = i.type), void 0 !== i.mipmaps && (s.mipmaps = i.mipmaps), 1 === i.mipmapCount && (s.minFilter = o.LinearFilter), s.needsUpdate = !0, e && e(s, i))
            }, i, n), s
        }
    }, o.CompressedTextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this._parser = null
    }, o.CompressedTextureLoader.prototype = {
        constructor: o.CompressedTextureLoader,
        load: function (t, e, i, n) {
            function r(r) {
                l.load(t[r], function (t) {
                    var i = s._parser(t, !0);
                    a[r] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    }, c += 1, 6 === c && (1 === i.mipmapCount && (h.minFilter = o.LinearFilter), h.format = i.format, h.needsUpdate = !0, e && e(h))
                }, i, n)
            }
            var s = this,
                a = [],
                h = new o.CompressedTexture;
            h.image = a;
            var l = new o.XHRLoader(this.manager);
            if (l.setPath(this.path), l.setResponseType("arraybuffer"), Array.isArray(t))
                for (var c = 0, u = 0, p = t.length; u < p; ++u) r(u);
            else l.load(t, function (t) {
                var i = s._parser(t, !0);
                if (i.isCubemap)
                    for (var n = i.mipmaps.length / i.mipmapCount, r = 0; r < n; r++) {
                        a[r] = {
                            mipmaps: []
                        };
                        for (var l = 0; l < i.mipmapCount; l++) a[r].mipmaps.push(i.mipmaps[r * i.mipmapCount + l]), a[r].format = i.format, a[r].width = i.width, a[r].height = i.height
                    } else h.image.width = i.width, h.image.height = i.height, h.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (h.minFilter = o.LinearFilter), h.format = i.format, h.needsUpdate = !0, e && e(h)
            }, i, n);
            return h
        },
        setPath: function (t) {
            this.path = t
        }
    }, o.Material = function () {
        Object.defineProperty(this, "id", {
            value: o.MaterialIdCount++
        }), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "Material", this.side = o.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = o.NormalBlending, this.blendSrc = o.SrcAlphaFactor, this.blendDst = o.OneMinusSrcAlphaFactor, this.blendEquation = o.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = o.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
    }, o.Material.prototype = {
        constructor: o.Material,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(t) {
            t === !0 && this.update(), this._needsUpdate = t
        },
        setValues: function (t) {
            if (void 0 !== t)
                for (var e in t) {
                    var i = t[e];
                    if (void 0 !== i) {
                        var n = this[e];
                        void 0 !== n && (n instanceof o.Color ? n.set(i) : n instanceof o.Vector3 && i instanceof o.Vector3 ? n.copy(i) : "overdraw" === e ? this[e] = Number(i) : this[e] = i)
                    }
                }
        },
        toJSON: function (t) {
            function e(t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    delete n.metadata, e.push(n)
                }
                return e
            }
            var i = void 0 === t;
            i && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.4,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color instanceof o.Color && (n.color = this.color.getHex()), .5 !== this.roughness && (n.roughness = this.roughness), .5 !== this.metalness && (n.metalness = this.metalness), this.emissive instanceof o.Color && (n.emissive = this.emissive.getHex()), this.specular instanceof o.Color && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), this.map instanceof o.Texture && (n.map = this.map.toJSON(t).uuid), this.alphaMap instanceof o.Texture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap instanceof o.Texture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap instanceof o.Texture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap instanceof o.Texture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale = this.normalScale.toArray()), this.displacementMap instanceof o.Texture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap instanceof o.Texture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap instanceof o.Texture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap instanceof o.Texture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap instanceof o.Texture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap instanceof o.Texture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== o.NoColors && (n.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== o.SmoothShading && (n.shading = this.shading), void 0 !== this.blending && this.blending !== o.NormalBlending && (n.blending = this.blending), void 0 !== this.side && this.side !== o.FrontSide && (n.side = this.side), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), i) {
                var r = e(t.textures),
                    s = e(t.images);
                r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s)
            }
            return n
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.name = t.name, this.side = t.side, this.opacity = t.opacity, this.transparent = t.transparent, this.blending = t.blending, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this
        },
        update: function () {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, o.EventDispatcher.prototype.apply(o.Material.prototype), o.MaterialIdCount = 0, o.LineBasicMaterial = function (t) {
        o.Material.call(this), this.type = "LineBasicMaterial", this.color = new o.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.blending = o.NormalBlending, this.vertexColors = o.NoColors, this.fog = !0, this.setValues(t)
    }, o.LineBasicMaterial.prototype = Object.create(o.Material.prototype), o.LineBasicMaterial.prototype.constructor = o.LineBasicMaterial, o.LineBasicMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.vertexColors = t.vertexColors, this.fog = t.fog, this
    }, o.LineDashedMaterial = function (t) {
        o.Material.call(this), this.type = "LineDashedMaterial", this.color = new o.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.blending = o.NormalBlending, this.vertexColors = o.NoColors, this.fog = !0, this.setValues(t)
    }, o.LineDashedMaterial.prototype = Object.create(o.Material.prototype), o.LineDashedMaterial.prototype.constructor = o.LineDashedMaterial, o.LineDashedMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this.vertexColors = t.vertexColors, this.fog = t.fog, this
    }, o.MeshBasicMaterial = function (t) {
        o.Material.call(this), this.type = "MeshBasicMaterial", this.color = new o.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = o.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = o.SmoothShading, this.blending = o.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = o.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(t)
    }, o.MeshBasicMaterial.prototype = Object.create(o.Material.prototype), o.MeshBasicMaterial.prototype.constructor = o.MeshBasicMaterial, o.MeshBasicMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    }, o.MeshLambertMaterial = function (t) {
        o.Material.call(this), this.type = "MeshLambertMaterial", this.color = new o.Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new o.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = o.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.blending = o.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = o.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }, o.MeshLambertMaterial.prototype = Object.create(o.Material.prototype), o.MeshLambertMaterial.prototype.constructor = o.MeshLambertMaterial, o.MeshLambertMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, o.MeshPhongMaterial = function (t) {
        o.Material.call(this), this.type = "MeshPhongMaterial", this.color = new o.Color(16777215), this.specular = new o.Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new o.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new o.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = o.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = o.SmoothShading, this.blending = o.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = o.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }, o.MeshPhongMaterial.prototype = Object.create(o.Material.prototype), o.MeshPhongMaterial.prototype.constructor = o.MeshPhongMaterial, o.MeshPhongMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, o.MeshStandardMaterial = function (t) {
        o.Material.call(this), this.type = "MeshStandardMaterial", this.color = new o.Color(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new o.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new o.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = o.SmoothShading, this.blending = o.NormalBlending, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = o.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }, o.MeshStandardMaterial.prototype = Object.create(o.Material.prototype), o.MeshStandardMaterial.prototype.constructor = o.MeshStandardMaterial, o.MeshStandardMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, o.MeshDepthMaterial = function (t) {
        o.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
    }, o.MeshDepthMaterial.prototype = Object.create(o.Material.prototype), o.MeshDepthMaterial.prototype.constructor = o.MeshDepthMaterial, o.MeshDepthMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, o.MeshNormalMaterial = function (t) {
        o.Material.call(this, t), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(t)
    }, o.MeshNormalMaterial.prototype = Object.create(o.Material.prototype), o.MeshNormalMaterial.prototype.constructor = o.MeshNormalMaterial, o.MeshNormalMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, o.MultiMaterial = function (t) {
        this.uuid = o.Math.generateUUID(), this.type = "MultiMaterial", this.materials = t instanceof Array ? t : [], this.visible = !0
    }, o.MultiMaterial.prototype = {
        constructor: o.MultiMaterial,
        toJSON: function (t) {
            for (var e = {
                metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
                uuid: this.uuid,
                type: this.type,
                materials: []
            }, i = this.materials, n = 0, r = i.length; n < r; n++) {
                var o = i[n].toJSON(t);
                delete o.metadata, e.materials.push(o)
            }
            return e.visible = this.visible, e
        },
        clone: function () {
            for (var t = new this.constructor, e = 0; e < this.materials.length; e++) t.materials.push(this.materials[e].clone());
            return t.visible = this.visible, t
        }
    }, o.PointsMaterial = function (t) {
        o.Material.call(this), this.type = "PointsMaterial", this.color = new o.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.blending = o.NormalBlending, this.vertexColors = o.NoColors, this.fog = !0, this.setValues(t)
    }, o.PointsMaterial.prototype = Object.create(o.Material.prototype), o.PointsMaterial.prototype.constructor = o.PointsMaterial, o.PointsMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.vertexColors = t.vertexColors, this.fog = t.fog, this
    }, o.ShaderMaterial = function (t) {
        o.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = o.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = o.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes, this.setValues(t))
    }, o.ShaderMaterial.prototype = Object.create(o.Material.prototype), o.ShaderMaterial.prototype.constructor = o.ShaderMaterial, o.ShaderMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = o.UniformsUtils.clone(t.uniforms), this.defines = t.defines, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, o.ShaderMaterial.prototype.toJSON = function (t) {
        var e = o.Material.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    }, o.RawShaderMaterial = function (t) {
        o.ShaderMaterial.call(this, t), this.type = "RawShaderMaterial"
    }, o.RawShaderMaterial.prototype = Object.create(o.ShaderMaterial.prototype), o.RawShaderMaterial.prototype.constructor = o.RawShaderMaterial, o.SpriteMaterial = function (t) {
        o.Material.call(this), this.type = "SpriteMaterial", this.color = new o.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(t)
    }, o.SpriteMaterial.prototype = Object.create(o.Material.prototype), o.SpriteMaterial.prototype.constructor = o.SpriteMaterial, o.SpriteMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.fog = t.fog, this
    }, o.Texture = function (t, e, i, n, r, s, a, h, l) {
        Object.defineProperty(this, "id", {
            value: o.TextureIdCount++
        }), this.uuid = o.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== t ? t : o.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : o.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : o.ClampToEdgeWrapping, this.wrapT = void 0 !== n ? n : o.ClampToEdgeWrapping, this.magFilter = void 0 !== r ? r : o.LinearFilter, this.minFilter = void 0 !== s ? s : o.LinearMipMapLinearFilter, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== a ? a : o.RGBAFormat, this.type = void 0 !== h ? h : o.UnsignedByteType, this.offset = new o.Vector2(0, 0), this.repeat = new o.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = o.LinearEncoding, this.version = 0, this.onUpdate = null
    }, o.Texture.DEFAULT_IMAGE = void 0, o.Texture.DEFAULT_MAPPING = o.UVMapping, o.Texture.prototype = {
        constructor: o.Texture,
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function (t) {
            function e(t) {
                var e;
                return void 0 !== t.toDataURL ? e = t : (e = document.createElement("canvas"), e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)), e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
            }
            if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.4,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy
            };
            if (void 0 !== this.image) {
                var n = this.image;
                void 0 === n.uuid && (n.uuid = o.Math.generateUUID()), void 0 === t.images[n.uuid] && (t.images[n.uuid] = {
                    uuid: n.uuid,
                    url: e(n)
                }), i.image = n.uuid
            }
            return t.textures[this.uuid] = i, i
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function (t) {
            if (this.mapping === o.UVMapping) {
                if (t.multiply(this.repeat), t.add(this.offset), t.x < 0 || t.x > 1) switch (this.wrapS) {
                    case o.RepeatWrapping:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case o.ClampToEdgeWrapping:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case o.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
                if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                    case o.RepeatWrapping:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case o.ClampToEdgeWrapping:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case o.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    }, o.EventDispatcher.prototype.apply(o.Texture.prototype), o.TextureIdCount = 0, o.CanvasTexture = function (t, e, i, n, r, s, a, h, l) {
        o.Texture.call(this, t, e, i, n, r, s, a, h, l), this.needsUpdate = !0
    }, o.CanvasTexture.prototype = Object.create(o.Texture.prototype), o.CanvasTexture.prototype.constructor = o.CanvasTexture, o.CubeTexture = function (t, e, i, n, r, s, a, h, l) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : o.CubeReflectionMapping, o.Texture.call(this, t, e, i, n, r, s, a, h, l), this.flipY = !1
    }, o.CubeTexture.prototype = Object.create(o.Texture.prototype), o.CubeTexture.prototype.constructor = o.CubeTexture, Object.defineProperty(o.CubeTexture.prototype, "images", {
        get: function () {
            return this.image
        },
        set: function (t) {
            this.image = t
        }
    }), o.CompressedTexture = function (t, e, i, n, r, s, a, h, l, c, u) {
        o.Texture.call(this, null, s, a, h, l, c, n, r, u), this.image = {
            width: e,
            height: i
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }, o.CompressedTexture.prototype = Object.create(o.Texture.prototype), o.CompressedTexture.prototype.constructor = o.CompressedTexture, o.DataTexture = function (t, e, i, n, r, s, a, h, l, c, u) {
        o.Texture.call(this, null, s, a, h, l, c, n, r, u), this.image = {
            data: t,
            width: e,
            height: i
        }, this.magFilter = void 0 !== l ? l : o.NearestFilter, this.minFilter = void 0 !== c ? c : o.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
    }, o.DataTexture.prototype = Object.create(o.Texture.prototype), o.DataTexture.prototype.constructor = o.DataTexture, o.VideoTexture = function (t, e, i, n, r, s, a, h, l) {
        function c() {
            requestAnimationFrame(c), t.readyState === t.HAVE_ENOUGH_DATA && (u.needsUpdate = !0)
        }
        o.Texture.call(this, t, e, i, n, r, s, a, h, l), this.generateMipmaps = !1;
        var u = this;
        c()
    }, o.VideoTexture.prototype = Object.create(o.Texture.prototype), o.VideoTexture.prototype.constructor = o.VideoTexture, o.Group = function () {
        o.Object3D.call(this), this.type = "Group"
    }, o.Group.prototype = Object.create(o.Object3D.prototype), o.Group.prototype.constructor = o.Group, o.Points = function (t, e) {
        o.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new o.Geometry, this.material = void 0 !== e ? e : new o.PointsMaterial({
            color: 16777215 * Math.random()
        })
    }, o.Points.prototype = Object.create(o.Object3D.prototype), o.Points.prototype.constructor = o.Points, o.Points.prototype.raycast = function () {
        var t = new o.Matrix4,
            e = new o.Ray,
            i = new o.Sphere;
        return function (n, r) {
            function s(t, i) {
                var o = e.distanceSqToPoint(t);
                if (o < p) {
                    var s = e.closestPointToPoint(t);
                    s.applyMatrix4(l);
                    var h = n.ray.origin.distanceTo(s);
                    if (h < n.near || h > n.far) return;
                    r.push({
                        distance: h,
                        distanceToRay: Math.sqrt(o),
                        point: s.clone(),
                        index: i,
                        face: null,
                        object: a
                    })
                }
            }
            var a = this,
                h = this.geometry,
                l = this.matrixWorld,
                c = n.params.Points.threshold;
            if (null === h.boundingSphere && h.computeBoundingSphere(), i.copy(h.boundingSphere), i.applyMatrix4(l), n.ray.intersectsSphere(i) !== !1) {
                t.getInverse(l), e.copy(n.ray).applyMatrix4(t);
                var u = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    p = u * u,
                    d = new o.Vector3;
                if (h instanceof o.BufferGeometry) {
                    var f = h.index,
                        m = h.attributes,
                        g = m.position.array;
                    if (null !== f)
                        for (var v = f.array, y = 0, _ = v.length; y < _; y++) {
                            var x = v[y];
                            d.fromArray(g, 3 * x), s(d, x)
                        } else
                        for (var y = 0, b = g.length / 3; y < b; y++) d.fromArray(g, 3 * y), s(d, y)
                } else
                    for (var w = h.vertices, y = 0, b = w.length; y < b; y++) s(w[y], y)
            }
        }
    }(), o.Points.prototype.clone = function () {
        return new this.constructor(this.geometry, this.material).copy(this)
    }, o.Line = function (t, e, i) {
        return 1 === i ? new o.LineSegments(t, e) : (o.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new o.Geometry, void (this.material = void 0 !== e ? e : new o.LineBasicMaterial({
            color: 16777215 * Math.random()
        })))
    }, o.Line.prototype = Object.create(o.Object3D.prototype), o.Line.prototype.constructor = o.Line, o.Line.prototype.raycast = function () {
        var t = new o.Matrix4,
            e = new o.Ray,
            i = new o.Sphere;
        return function (n, r) {
            var s = n.linePrecision,
                a = s * s,
                h = this.geometry,
                l = this.matrixWorld;
            if (null === h.boundingSphere && h.computeBoundingSphere(), i.copy(h.boundingSphere), i.applyMatrix4(l), n.ray.intersectsSphere(i) !== !1) {
                t.getInverse(l), e.copy(n.ray).applyMatrix4(t);
                var c = new o.Vector3,
                    u = new o.Vector3,
                    p = new o.Vector3,
                    d = new o.Vector3,
                    f = this instanceof o.LineSegments ? 2 : 1;
                if (h instanceof o.BufferGeometry) {
                    var m = h.index,
                        g = h.attributes,
                        v = g.position.array;
                    if (null !== m)
                        for (var y = m.array, _ = 0, x = y.length - 1; _ < x; _ += f) {
                            var b = y[_],
                                w = y[_ + 1];
                            c.fromArray(v, 3 * b), u.fromArray(v, 3 * w);
                            var S = e.distanceSqToSegment(c, u, d, p);
                            if (!(S > a)) {
                                d.applyMatrix4(this.matrixWorld);
                                var T = n.ray.origin.distanceTo(d);
                                T < n.near || T > n.far || r.push({
                                    distance: T,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: _,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        } else
                        for (var _ = 0, x = v.length / 3 - 1; _ < x; _ += f) {
                            c.fromArray(v, 3 * _), u.fromArray(v, 3 * _ + 3);
                            var S = e.distanceSqToSegment(c, u, d, p);
                            if (!(S > a)) {
                                d.applyMatrix4(this.matrixWorld);
                                var T = n.ray.origin.distanceTo(d);
                                T < n.near || T > n.far || r.push({
                                    distance: T,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: _,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                } else if (h instanceof o.Geometry)
                    for (var M = h.vertices, E = M.length, _ = 0; _ < E - 1; _ += f) {
                        var S = e.distanceSqToSegment(M[_], M[_ + 1], d, p);
                        if (!(S > a)) {
                            d.applyMatrix4(this.matrixWorld);
                            var T = n.ray.origin.distanceTo(d);
                            T < n.near || T > n.far || r.push({
                                distance: T,
                                point: p.clone().applyMatrix4(this.matrixWorld),
                                index: _,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
            }
        }
    }(), o.Line.prototype.clone = function () {
        return new this.constructor(this.geometry, this.material).copy(this)
    }, o.LineStrip = 0, o.LinePieces = 1, o.LineSegments = function (t, e) {
        o.Line.call(this, t, e), this.type = "LineSegments"
    }, o.LineSegments.prototype = Object.create(o.Line.prototype), o.LineSegments.prototype.constructor = o.LineSegments, o.Mesh = function (t, e) {
        o.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new o.Geometry, this.material = void 0 !== e ? e : new o.MeshBasicMaterial({
            color: 16777215 * Math.random()
        }), this.drawMode = o.TrianglesDrawMode, this.updateMorphTargets()
    }, o.Mesh.prototype = Object.create(o.Object3D.prototype), o.Mesh.prototype.constructor = o.Mesh, o.Mesh.prototype.setDrawMode = function (t) {
        this.drawMode = t
    }, o.Mesh.prototype.updateMorphTargets = function () {
        if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
            this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t
        }
    }, o.Mesh.prototype.getMorphTargetIndexByName = function (t) {
        return void 0 !== this.morphTargetDictionary[t] ? this.morphTargetDictionary[t] : 0
    }, o.Mesh.prototype.raycast = function () {
        function t(t, e, i, n, r, s, a) {
            return o.Triangle.barycoordFromPoint(t, e, i, n, g), r.multiplyScalar(g.x), s.multiplyScalar(g.y), a.multiplyScalar(g.z), r.add(s).add(a), r.clone()
        }

        function e(t, e, i, n, r, s, a) {
            var h, l = t.material;
            if (h = l.side === o.BackSide ? i.intersectTriangle(s, r, n, !0, a) : i.intersectTriangle(n, r, s, l.side !== o.DoubleSide, a), null === h) return null;
            y.copy(a), y.applyMatrix4(t.matrixWorld);
            var c = e.ray.origin.distanceTo(y);
            return c < e.near || c > e.far ? null : {
                distance: c,
                point: y.clone(),
                object: t
            }
        }

        function i(i, n, r, s, c, u, p, g) {
            a.fromArray(s, 3 * u), h.fromArray(s, 3 * p), l.fromArray(s, 3 * g);
            var y = e(i, n, r, a, h, l, v);
            return y && (c && (d.fromArray(c, 2 * u), f.fromArray(c, 2 * p), m.fromArray(c, 2 * g), y.uv = t(v, a, h, l, d, f, m)), y.face = new o.Face3(u, p, g, o.Triangle.normal(a, h, l)), y.faceIndex = u), y
        }
        var n = new o.Matrix4,
            r = new o.Ray,
            s = new o.Sphere,
            a = new o.Vector3,
            h = new o.Vector3,
            l = new o.Vector3,
            c = new o.Vector3,
            u = new o.Vector3,
            p = new o.Vector3,
            d = new o.Vector2,
            f = new o.Vector2,
            m = new o.Vector2,
            g = new o.Vector3,
            v = new o.Vector3,
            y = new o.Vector3;
        return function (g, y) {
            var _ = this.geometry,
                x = this.material,
                b = this.matrixWorld;
            if (void 0 !== x && (null === _.boundingSphere && _.computeBoundingSphere(), s.copy(_.boundingSphere), s.applyMatrix4(b), g.ray.intersectsSphere(s) !== !1 && (n.getInverse(b), r.copy(g.ray).applyMatrix4(n), null === _.boundingBox || r.intersectsBox(_.boundingBox) !== !1))) {
                var w, S;
                if (_ instanceof o.BufferGeometry) {
                    var T, M, E, A = _.index,
                        C = _.attributes,
                        L = C.position.array;
                    if (void 0 !== C.uv && (w = C.uv.array), null !== A)
                        for (var R = A.array, P = 0, O = R.length; P < O; P += 3) T = R[P], M = R[P + 1], E = R[P + 2], S = i(this, g, r, L, w, T, M, E), S && (S.faceIndex = Math.floor(P / 3), y.push(S));
                    else
                        for (var P = 0, O = L.length; P < O; P += 9) T = P / 3, M = T + 1, E = T + 2, S = i(this, g, r, L, w, T, M, E), S && (S.index = T, y.push(S))
                } else if (_ instanceof o.Geometry) {
                    var I, D, B, k = x instanceof o.MultiMaterial,
                        F = k === !0 ? x.materials : null,
                        N = _.vertices,
                        U = _.faces,
                        G = _.faceVertexUvs[0];
                    G.length > 0 && (w = G);
                    for (var z = 0, V = U.length; z < V; z++) {
                        var j = U[z],
                            H = k === !0 ? F[j.materialIndex] : x;
                        if (void 0 !== H) {
                            if (I = N[j.a], D = N[j.b], B = N[j.c], H.morphTargets === !0) {
                                var W = _.morphTargets,
                                    X = this.morphTargetInfluences;
                                a.set(0, 0, 0), h.set(0, 0, 0), l.set(0, 0, 0);
                                for (var Y = 0, q = W.length; Y < q; Y++) {
                                    var K = X[Y];
                                    if (0 !== K) {
                                        var Z = W[Y].vertices;
                                        a.addScaledVector(c.subVectors(Z[j.a], I), K), h.addScaledVector(u.subVectors(Z[j.b], D), K), l.addScaledVector(p.subVectors(Z[j.c], B), K)
                                    }
                                }
                                a.add(I), h.add(D), l.add(B), I = a, D = h, B = l
                            }
                            if (S = e(this, g, r, I, D, B, v)) {
                                if (w) {
                                    var J = w[z];
                                    d.copy(J[0]), f.copy(J[1]), m.copy(J[2]), S.uv = t(v, I, D, B, d, f, m)
                                }
                                S.face = j, S.faceIndex = z, y.push(S)
                            }
                        }
                    }
                }
            }
        }
    }(), o.Mesh.prototype.clone = function () {
        return new this.constructor(this.geometry, this.material).copy(this)
    }, o.Bone = function (t) {
        o.Object3D.call(this), this.type = "Bone", this.skin = t
    }, o.Bone.prototype = Object.create(o.Object3D.prototype), o.Bone.prototype.constructor = o.Bone, o.Bone.prototype.copy = function (t) {
        return o.Object3D.prototype.copy.call(this, t), this.skin = t.skin, this
    }, o.Skeleton = function (t, e, i) {
        if (this.useVertexTexture = void 0 === i || i, this.identityMatrix = new o.Matrix4, t = t || [], this.bones = t.slice(0), this.useVertexTexture) {
            var n = Math.sqrt(4 * this.bones.length);
            n = o.Math.nextPowerOfTwo(Math.ceil(n)), n = Math.max(n, 4), this.boneTextureWidth = n, this.boneTextureHeight = n, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new o.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, o.RGBAFormat, o.FloatType)
        } else this.boneMatrices = new Float32Array(16 * this.bones.length); if (void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else {
            this.boneInverses = [];
            for (var r = 0, s = this.bones.length; r < s; r++) this.boneInverses.push(new o.Matrix4)
        }
    }, o.Skeleton.prototype.calculateInverses = function () {
        this.boneInverses = [];
        for (var t = 0, e = this.bones.length; t < e; t++) {
            var i = new o.Matrix4;
            this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
        }
    }, o.Skeleton.prototype.pose = function () {
        for (var t, e = 0, i = this.bones.length; e < i; e++) t = this.bones[e], t && t.matrixWorld.getInverse(this.boneInverses[e]);
        for (var e = 0, i = this.bones.length; e < i; e++) t = this.bones[e], t && (t.parent ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
    }, o.Skeleton.prototype.update = function () {
        var t = new o.Matrix4;
        return function () {
            for (var e = 0, i = this.bones.length; e < i; e++) {
                var n = this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix;
                t.multiplyMatrices(n, this.boneInverses[e]), t.flattenToArrayOffset(this.boneMatrices, 16 * e)
            }
            this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
        }
    }(), o.Skeleton.prototype.clone = function () {
        return new o.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
    }, o.SkinnedMesh = function (t, e, i) {
        o.Mesh.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new o.Matrix4, this.bindMatrixInverse = new o.Matrix4;
        var n = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var r, s, a = 0, h = this.geometry.bones.length; a < h; ++a) s = this.geometry.bones[a], r = new o.Bone(this), n.push(r), r.name = s.name, r.position.fromArray(s.pos), r.quaternion.fromArray(s.rotq), void 0 !== s.scl && r.scale.fromArray(s.scl);
            for (var a = 0, h = this.geometry.bones.length; a < h; ++a) s = this.geometry.bones[a], s.parent !== -1 && null !== s.parent ? n[s.parent].add(n[a]) : this.add(n[a])
        }
        this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new o.Skeleton(n, (void 0), i), this.matrixWorld)
    }, o.SkinnedMesh.prototype = Object.create(o.Mesh.prototype), o.SkinnedMesh.prototype.constructor = o.SkinnedMesh, o.SkinnedMesh.prototype.bind = function (t, e) {
        this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
    }, o.SkinnedMesh.prototype.pose = function () {
        this.skeleton.pose()
    }, o.SkinnedMesh.prototype.normalizeSkinWeights = function () {
        if (this.geometry instanceof o.Geometry)
            for (var t = 0; t < this.geometry.skinWeights.length; t++) {
                var e = this.geometry.skinWeights[t],
                    i = 1 / e.lengthManhattan();
                i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0)
            } else if (this.geometry instanceof o.BufferGeometry)
                for (var n = new o.Vector4, r = this.geometry.attributes.skinWeight, t = 0; t < r.count; t++) {
                    n.x = r.getX(t), n.y = r.getY(t), n.z = r.getZ(t), n.w = r.getW(t);
                    var i = 1 / n.lengthManhattan();
                    i !== 1 / 0 ? n.multiplyScalar(i) : n.set(1, 0, 0, 0), r.setXYZW(t, n.x, n.y, n.z, n.w)
                }
    }, o.SkinnedMesh.prototype.updateMatrixWorld = function (t) {
        o.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode && this.bindMatrixInverse.getInverse(this.bindMatrix)
    }, o.SkinnedMesh.prototype.clone = function () {
        return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
    }, o.LOD = function () {
        o.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            },
            objects: {
                get: function () {
                    return this.levels
                }
            }
        })
    }, o.LOD.prototype = Object.create(o.Object3D.prototype), o.LOD.prototype.constructor = o.LOD, o.LOD.prototype.addLevel = function (t, e) {
        void 0 === e && (e = 0), e = Math.abs(e);
        for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance) ; n++);
        i.splice(n, 0, {
            distance: e,
            object: t
        }), this.add(t)
    }, o.LOD.prototype.getObjectForDistance = function (t) {
        for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance) ; i++);
        return e[i - 1].object
    }, o.LOD.prototype.raycast = function () {
        var t = new o.Vector3;
        return function (e, i) {
            t.setFromMatrixPosition(this.matrixWorld);
            var n = e.ray.origin.distanceTo(t);
            this.getObjectForDistance(n).raycast(e, i)
        }
    }(), o.LOD.prototype.update = function () {
        var t = new o.Vector3,
            e = new o.Vector3;
        return function (i) {
            var n = this.levels;
            if (n.length > 1) {
                t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                var r = t.distanceTo(e);
                n[0].object.visible = !0;
                for (var o = 1, s = n.length; o < s && r >= n[o].distance; o++) n[o - 1].object.visible = !1, n[o].object.visible = !0;
                for (; o < s; o++) n[o].object.visible = !1
            }
        }
    }(), o.LOD.prototype.copy = function (t) {
        o.Object3D.prototype.copy.call(this, t, !1);
        for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
            var r = e[i];
            this.addLevel(r.object.clone(), r.distance)
        }
        return this
    }, o.LOD.prototype.toJSON = function (t) {
        var e = o.Object3D.prototype.toJSON.call(this, t);
        e.object.levels = [];
        for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
            var s = i[n];
            e.object.levels.push({
                object: s.object.uuid,
                distance: s.distance
            })
        }
        return e
    }, o.Sprite = function () {
        var t = new Uint16Array([0, 1, 2, 0, 2, 3]),
            e = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
            i = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
            n = new o.BufferGeometry;
        return n.setIndex(new o.BufferAttribute(t, 1)), n.addAttribute("position", new o.BufferAttribute(e, 3)), n.addAttribute("uv", new o.BufferAttribute(i, 2)),
            function (t) {
                o.Object3D.call(this), this.type = "Sprite", this.geometry = n, this.material = void 0 !== t ? t : new o.SpriteMaterial
            }
    }(), o.Sprite.prototype = Object.create(o.Object3D.prototype), o.Sprite.prototype.constructor = o.Sprite, o.Sprite.prototype.raycast = function () {
        var t = new o.Vector3;
        return function (e, i) {
            t.setFromMatrixPosition(this.matrixWorld);
            var n = e.ray.distanceSqToPoint(t),
                r = this.scale.x * this.scale.y;
            n > r || i.push({
                distance: Math.sqrt(n),
                point: this.position,
                face: null,
                object: this
            })
        }
    }(), o.Sprite.prototype.clone = function () {
        return new this.constructor(this.material).copy(this)
    }, o.Particle = o.Sprite, o.LensFlare = function (t, e, i, n, r) {
        o.Object3D.call(this), this.lensFlares = [], this.positionScreen = new o.Vector3, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, i, n, r)
    }, o.LensFlare.prototype = Object.create(o.Object3D.prototype), o.LensFlare.prototype.constructor = o.LensFlare, o.LensFlare.prototype.add = function (t, e, i, n, r, s) {
        void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === s && (s = 1), void 0 === r && (r = new o.Color(16777215)), void 0 === n && (n = o.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
            texture: t,
            size: e,
            distance: i,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotation: 0,
            opacity: s,
            color: r,
            blending: n
        })
    }, o.LensFlare.prototype.updateLensFlares = function () {
        var t, e, i = this.lensFlares.length,
            n = 2 * -this.positionScreen.x,
            r = 2 * -this.positionScreen.y;
        for (t = 0; t < i; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + n * e.distance, e.y = this.positionScreen.y + r * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
    }, o.LensFlare.prototype.copy = function (t) {
        o.Object3D.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
        for (var e = 0, i = t.lensFlares.length; e < i; e++) this.lensFlares.push(t.lensFlares[e]);
        return this
    }, o.Scene = function () {
        o.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }, o.Scene.prototype = Object.create(o.Object3D.prototype), o.Scene.prototype.constructor = o.Scene, o.Scene.prototype.copy = function (t, e) {
        return o.Object3D.prototype.copy.call(this, t, e), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    }, o.Fog = function (t, e, i) {
        this.name = "", this.color = new o.Color(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
    }, o.Fog.prototype.clone = function () {
        return new o.Fog(this.color.getHex(), this.near, this.far)
    }, o.FogExp2 = function (t, e) {
        this.name = "", this.color = new o.Color(t), this.density = void 0 !== e ? e : 25e-5
    }, o.FogExp2.prototype.clone = function () {
        return new o.FogExp2(this.color.getHex(), this.density)
    }, o.ShaderChunk = {}, o.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n", o.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n", o.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n", o.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n", o.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", o.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", o.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", o.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_Smith( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n", o.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n", o.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif", o.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n", o.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", o.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif", o.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n", o.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\nconst float cubeUV_textureSize = 1024.0;\nint getFaceFromDirection(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    int face = -1;\n    if( absDirection.x > absDirection.z ) {\n        if(absDirection.x > absDirection.y )\n            face = direction.x > 0.0 ? 0 : 3;\n        else\n            face = direction.y > 0.0 ? 1 : 4;\n    }\n    else {\n        if(absDirection.z > absDirection.y )\n            face = direction.z > 0.0 ? 2 : 5;\n        else\n            face = direction.y > 0.0 ? 1 : 4;\n    }\n    return face;\n}\nconst float cubeUV_maxLods1 = log2(cubeUV_textureSize*0.25) - 1.0;\nconst float cubeUV_rangeClamp = exp2((6.0 - 1.0) * 2.0);\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n    float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n    float dxRoughness = dFdx(roughness);\n    float dyRoughness = dFdy(roughness);\n    vec3 dx = dFdx( vec * scale * dxRoughness );\n    vec3 dy = dFdy( vec * scale * dyRoughness );\n    float d = max( dot( dx, dx ), dot( dy, dy ) );\n    d = clamp(d, 1.0, cubeUV_rangeClamp);\n    float mipLevel = 0.5 * log2(d);\n    return vec2(floor(mipLevel), fract(mipLevel));\n}\nconst float cubeUV_maxLods2 = log2(cubeUV_textureSize*0.25) - 2.0;\nconst float cubeUV_rcpTextureSize = 1.0 / cubeUV_textureSize;\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n    mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n    float a = 16.0 * cubeUV_rcpTextureSize;\n    vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n    vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n    float powScale = exp2_packed.x * exp2_packed.y;\n    float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n    float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n    bool bRes = mipLevel == 0.0;\n    scale =  bRes && (scale < a) ? a : scale;\n    vec3 r;\n    vec2 offset;\n    int face = getFaceFromDirection(direction);\n    float rcpPowScale = 1.0 / powScale;\n    if( face == 0) {\n        r = vec3(direction.x, -direction.z, direction.y);\n        offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 1) {\n        r = vec3(direction.y, direction.x, direction.z);\n        offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 2) {\n        r = vec3(direction.z, direction.x, direction.y);\n        offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 3) {\n        r = vec3(direction.x, direction.z, direction.y);\n        offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    else if( face == 4) {\n        r = vec3(direction.y, direction.x, -direction.z);\n        offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    else {\n        r = vec3(direction.z, -direction.x, direction.y);\n        offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    r = normalize(r);\n    float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n    vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n    vec2 base = offset + vec2( texelOffset );\n    return base + s * ( scale - 2.0 * texelOffset );\n}\nconst float cubeUV_maxLods3 = log2(cubeUV_textureSize*0.25) - 3.0;\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n    float roughnessVal = roughness* cubeUV_maxLods3;\n    float r1 = floor(roughnessVal);\n    float r2 = r1 + 1.0;\n    float t = fract(roughnessVal);\n    vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n    float s = mipInfo.y;\n    float level0 = mipInfo.x;\n    float level1 = level0 + 1.0;\n    level1 = level1 > 5.0 ? 5.0 : level1;\n    level0 += min( floor( s + 0.5 ), 5.0 );\n    vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n    vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n    vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n    vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n    vec4 result = mix(color10, color20, t);\n    return vec4(result.rgb, 1.0);\n}\n#endif\n", o.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n", o.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n", o.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n", o.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n", o.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n", o.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
        o.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n", o.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n", o.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( STANDARD )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n", o.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\tvarying vec3 vReflect;\n\tuniform float refractionRatio;\n#endif\n", o.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t#ifdef ENVMAP_MODE_REFLECTION\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t#else\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t#endif\n#endif\n", o.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n", o.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", o.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n", o.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", o.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tdirectLight = getPointDirectLightIrradiance( pointLights[ i ], geometry );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tdirectLight = getSpotDirectLightIrradiance( spotLights[ i ], geometry );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectLight = getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n", o.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tIncidentLight getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tIncidentLight getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tIncidentLight getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( STANDARD )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t#endif\n\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n", o.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n", o.ShaderChunk.lights_phong_pars_fragment = "#ifdef USE_ENVMAP\n\tvarying vec3 vWorldPosition;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n", o.ShaderChunk.lights_phong_pars_vertex = "#ifdef USE_ENVMAP\n\tvarying vec3 vWorldPosition;\n#endif\n", o.ShaderChunk.lights_phong_vertex = "#ifdef USE_ENVMAP\n\tvWorldPosition = worldPosition.xyz;\n#endif\n", o.ShaderChunk.lights_standard_fragment = "StandardMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\nmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n", o.ShaderChunk.lights_standard_pars_fragment = "struct StandardMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n};\nvoid RE_Direct_Standard( const in IncidentLight directLight, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n}\nvoid RE_IndirectDiffuse_Standard( const in vec3 irradiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Standard( const in vec3 radiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Standard\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Standard\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Standard\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n", o.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tdirectLight = getPointDirectLightIrradiance( pointLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tdirectLight = getSpotDirectLightIrradiance( spotLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tdirectLight = getDirectionalDirectLightIrradiance( directionalLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\tRE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n#endif\n", o.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif", o.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n", o.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif", o.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n", o.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n", o.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n", o.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n", o.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n", o.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n", o.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", o.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n", o.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", o.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n", o.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n", o.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n", o.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n", o.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n", o.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n", o.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", o.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\treturn dot( rgba_depth, bit_shift );\n\t}\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
        o.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n", o.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n", o.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n", o.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", o.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n", o.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n", o.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n", o.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", o.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", o.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n", o.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n", o.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", o.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif", o.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif", o.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif", o.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n", o.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif", o.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n", o.UniformsUtils = {
            merge: function (t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var n = this.clone(t[i]);
                    for (var r in n) e[r] = n[r]
                }
                return e
            },
            clone: function (t) {
                var e = {};
                for (var i in t) {
                    e[i] = {};
                    for (var n in t[i]) {
                        var r = t[i][n];
                        r instanceof o.Color || r instanceof o.Vector2 || r instanceof o.Vector3 || r instanceof o.Vector4 || r instanceof o.Matrix3 || r instanceof o.Matrix4 || r instanceof o.Texture ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
                    }
                }
                return e
            }
        }, o.UniformsLib = {
            common: {
                diffuse: {
                    type: "c",
                    value: new o.Color(15658734)
                },
                opacity: {
                    type: "f",
                    value: 1
                },
                map: {
                    type: "t",
                    value: null
                },
                offsetRepeat: {
                    type: "v4",
                    value: new o.Vector4(0, 0, 1, 1)
                },
                specularMap: {
                    type: "t",
                    value: null
                },
                alphaMap: {
                    type: "t",
                    value: null
                },
                envMap: {
                    type: "t",
                    value: null
                },
                flipEnvMap: {
                    type: "f",
                    value: -1
                },
                reflectivity: {
                    type: "f",
                    value: 1
                },
                refractionRatio: {
                    type: "f",
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    type: "t",
                    value: null
                },
                aoMapIntensity: {
                    type: "f",
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    type: "t",
                    value: null
                },
                lightMapIntensity: {
                    type: "f",
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    type: "t",
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    type: "t",
                    value: null
                },
                bumpScale: {
                    type: "f",
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    type: "t",
                    value: null
                },
                normalScale: {
                    type: "v2",
                    value: new o.Vector2(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    type: "t",
                    value: null
                },
                displacementScale: {
                    type: "f",
                    value: 1
                },
                displacementBias: {
                    type: "f",
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    type: "t",
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    type: "t",
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    type: "f",
                    value: 25e-5
                },
                fogNear: {
                    type: "f",
                    value: 1
                },
                fogFar: {
                    type: "f",
                    value: 2e3
                },
                fogColor: {
                    type: "c",
                    value: new o.Color(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    type: "fv",
                    value: []
                },
                directionalLights: {
                    type: "sa",
                    value: [],
                    properties: {
                        direction: {
                            type: "v3"
                        },
                        color: {
                            type: "c"
                        },
                        shadow: {
                            type: "i"
                        },
                        shadowBias: {
                            type: "f"
                        },
                        shadowRadius: {
                            type: "f"
                        },
                        shadowMapSize: {
                            type: "v2"
                        }
                    }
                },
                directionalShadowMap: {
                    type: "tv",
                    value: []
                },
                directionalShadowMatrix: {
                    type: "m4v",
                    value: []
                },
                spotLights: {
                    type: "sa",
                    value: [],
                    properties: {
                        color: {
                            type: "c"
                        },
                        position: {
                            type: "v3"
                        },
                        direction: {
                            type: "v3"
                        },
                        distance: {
                            type: "f"
                        },
                        coneCos: {
                            type: "f"
                        },
                        penumbraCos: {
                            type: "f"
                        },
                        decay: {
                            type: "f"
                        },
                        shadow: {
                            type: "i"
                        },
                        shadowBias: {
                            type: "f"
                        },
                        shadowRadius: {
                            type: "f"
                        },
                        shadowMapSize: {
                            type: "v2"
                        }
                    }
                },
                spotShadowMap: {
                    type: "tv",
                    value: []
                },
                spotShadowMatrix: {
                    type: "m4v",
                    value: []
                },
                pointLights: {
                    type: "sa",
                    value: [],
                    properties: {
                        color: {
                            type: "c"
                        },
                        position: {
                            type: "v3"
                        },
                        decay: {
                            type: "f"
                        },
                        distance: {
                            type: "f"
                        },
                        shadow: {
                            type: "i"
                        },
                        shadowBias: {
                            type: "f"
                        },
                        shadowRadius: {
                            type: "f"
                        },
                        shadowMapSize: {
                            type: "v2"
                        }
                    }
                },
                pointShadowMap: {
                    type: "tv",
                    value: []
                },
                pointShadowMatrix: {
                    type: "m4v",
                    value: []
                },
                hemisphereLights: {
                    type: "sa",
                    value: [],
                    properties: {
                        direction: {
                            type: "v3"
                        },
                        skyColor: {
                            type: "c"
                        },
                        groundColor: {
                            type: "c"
                        }
                    }
                }
            },
            points: {
                diffuse: {
                    type: "c",
                    value: new o.Color(15658734)
                },
                opacity: {
                    type: "f",
                    value: 1
                },
                size: {
                    type: "f",
                    value: 1
                },
                scale: {
                    type: "f",
                    value: 1
                },
                map: {
                    type: "t",
                    value: null
                },
                offsetRepeat: {
                    type: "v4",
                    value: new o.Vector4(0, 0, 1, 1)
                }
            }
        }, o.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\t#include <logdepthbuf_fragment>\n}\n", o.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t#include <logdepthbuf_vertex>\n}\n", o.ShaderChunk.depth_frag = "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}\n", o.ShaderChunk.depth_vert = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n}\n", o.ShaderChunk.depthRGBA_frag = "#include <common>\n#include <logdepthbuf_pars_fragment>\nvec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}\n", o.ShaderChunk.depthRGBA_vert = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n}\n", o.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\nvec4 pack1K ( float depth ) {\n\tdepth /= 1000.0;\n\tconst vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bitSh * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bitMsk;\n\treturn res;\n}\nfloat unpack1K ( vec4 color ) {\n\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\treturn dot( color, bitSh ) * 1000.0;\n}\nvoid main () {\n\tgl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );\n}\n", o.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\tvWorldPosition = worldPosition;\n}\n", o.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <logdepthbuf_fragment>\n}\n", o.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t#include <logdepthbuf_vertex>\n}\n", o.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n}\n", o.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n}\n", o.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <lights_phong_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_phong_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.meshstandard_frag = "#define STANDARD\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_standard_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_standard_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshstandard_vert = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n\t#include <logdepthbuf_fragment>\n}\n", o.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n}\n", o.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderLib = {
            basic: {
                uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.fog]),
                vertexShader: o.ShaderChunk.meshbasic_vert,
                fragmentShader: o.ShaderChunk.meshbasic_frag
            },
            lambert: {
                uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.lightmap, o.UniformsLib.emissivemap, o.UniformsLib.fog, o.UniformsLib.lights, {
                    emissive: {
                        type: "c",
                        value: new o.Color(0)
                    }
                }]),
                vertexShader: o.ShaderChunk.meshlambert_vert,
                fragmentShader: o.ShaderChunk.meshlambert_frag
            },
            phong: {
                uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.lightmap, o.UniformsLib.emissivemap, o.UniformsLib.bumpmap, o.UniformsLib.normalmap, o.UniformsLib.displacementmap, o.UniformsLib.fog, o.UniformsLib.lights, {
                    emissive: {
                        type: "c",
                        value: new o.Color(0)
                    },
                    specular: {
                        type: "c",
                        value: new o.Color(1118481)
                    },
                    shininess: {
                        type: "f",
                        value: 30
                    }
                }]),
                vertexShader: o.ShaderChunk.meshphong_vert,
                fragmentShader: o.ShaderChunk.meshphong_frag
            },
            standard: {
                uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.lightmap, o.UniformsLib.emissivemap, o.UniformsLib.bumpmap, o.UniformsLib.normalmap, o.UniformsLib.displacementmap, o.UniformsLib.roughnessmap, o.UniformsLib.metalnessmap, o.UniformsLib.fog, o.UniformsLib.lights, {
                    emissive: {
                        type: "c",
                        value: new o.Color(0)
                    },
                    roughness: {
                        type: "f",
                        value: .5
                    },
                    metalness: {
                        type: "f",
                        value: 0
                    },
                    envMapIntensity: {
                        type: "f",
                        value: 1
                    }
                }]),
                vertexShader: o.ShaderChunk.meshstandard_vert,
                fragmentShader: o.ShaderChunk.meshstandard_frag
            },
            points: {
                uniforms: o.UniformsUtils.merge([o.UniformsLib.points, o.UniformsLib.fog]),
                vertexShader: o.ShaderChunk.points_vert,
                fragmentShader: o.ShaderChunk.points_frag
            },
            dashed: {
                uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.fog, {
                    scale: {
                        type: "f",
                        value: 1
                    },
                    dashSize: {
                        type: "f",
                        value: 1
                    },
                    totalSize: {
                        type: "f",
                        value: 2
                    }
                }]),
                vertexShader: o.ShaderChunk.linedashed_vert,
                fragmentShader: o.ShaderChunk.linedashed_frag
            },
            depth: {
                uniforms: {
                    mNear: {
                        type: "f",
                        value: 1
                    },
                    mFar: {
                        type: "f",
                        value: 2e3
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: o.ShaderChunk.depth_vert,
                fragmentShader: o.ShaderChunk.depth_frag
            },
            normal: {
                uniforms: {
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: o.ShaderChunk.normal_vert,
                fragmentShader: o.ShaderChunk.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: o.ShaderChunk.cube_vert,
                fragmentShader: o.ShaderChunk.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: o.ShaderChunk.equirect_vert,
                fragmentShader: o.ShaderChunk.equirect_frag
            },
            depthRGBA: {
                uniforms: {},
                vertexShader: o.ShaderChunk.depthRGBA_vert,
                fragmentShader: o.ShaderChunk.depthRGBA_frag
            },
            distanceRGBA: {
                uniforms: {
                    lightPos: {
                        type: "v3",
                        value: new o.Vector3(0, 0, 0)
                    }
                },
                vertexShader: o.ShaderChunk.distanceRGBA_vert,
                fragmentShader: o.ShaderChunk.distanceRGBA_frag
            }
        }, o.WebGLRenderer = function (t) {
            function e() {
                return null === _t ? Ot : 1
            }

            function i(t, e, i, n) {
                at === !0 && (t *= n, e *= n, i *= n), Yt.clearColor(t, e, i, n)
            }

            function n() {
                Yt.init(), Yt.scissor(Tt.copy(It).multiplyScalar(Ot)), Yt.viewport(Et.copy(Bt).multiplyScalar(Ot)), i(Ct.r, Ct.g, Ct.b, Lt)
            }

            function r() {
                yt = null, St = null, wt = "", bt = -1, Yt.reset()
            }

            function s(t) {
                t.preventDefault(), r(), n(), qt.clear()
            }

            function a(t) {
                var e = t.target;
                e.removeEventListener("dispose", a), c(e), Gt.textures--
            }

            function h(t) {
                var e = t.target;
                e.removeEventListener("dispose", h), u(e), Gt.textures--
            }

            function l(t) {
                var e = t.target;
                e.removeEventListener("dispose", l),
                    p(e)
            }

            function c(t) {
                var e = qt.get(t);
                if (t.image && e.__image__webglTextureCube) Vt.deleteTexture(e.__image__webglTextureCube);
                else {
                    if (void 0 === e.__webglInit) return;
                    Vt.deleteTexture(e.__webglTexture)
                }
                qt["delete"](t)
            }

            function u(t) {
                var e = qt.get(t),
                    i = qt.get(t.texture);
                if (t && void 0 !== i.__webglTexture) {
                    if (Vt.deleteTexture(i.__webglTexture), t instanceof o.WebGLRenderTargetCube)
                        for (var n = 0; n < 6; n++) Vt.deleteFramebuffer(e.__webglFramebuffer[n]), Vt.deleteRenderbuffer(e.__webglDepthbuffer[n]);
                    else Vt.deleteFramebuffer(e.__webglFramebuffer), Vt.deleteRenderbuffer(e.__webglDepthbuffer);
                    qt["delete"](t.texture), qt["delete"](t)
                }
            }

            function p(t) {
                d(t), qt["delete"](t)
            }

            function d(t) {
                var e = qt.get(t).program;
                t.program = void 0, void 0 !== e && Zt.releaseProgram(e)
            }

            function f(t, e, i, n) {
                var r;
                if (!(i instanceof o.InstancedBufferGeometry && (r = Wt.get("ANGLE_instanced_arrays"), null === r))) {
                    void 0 === n && (n = 0), Yt.initAttributes();
                    var s = i.attributes,
                        a = e.getAttributes(),
                        h = t.defaultAttributeValues;
                    for (var l in a) {
                        var c = a[l];
                        if (c >= 0) {
                            var u = s[l];
                            if (void 0 !== u) {
                                var p = u.itemSize,
                                    d = Kt.getAttributeBuffer(u);
                                if (u instanceof o.InterleavedBufferAttribute) {
                                    var f = u.data,
                                        m = f.stride,
                                        g = u.offset;
                                    f instanceof o.InstancedInterleavedBuffer ? (Yt.enableAttributeAndDivisor(c, f.meshPerAttribute, r), void 0 === i.maxInstancedCount && (i.maxInstancedCount = f.meshPerAttribute * f.count)) : Yt.enableAttribute(c), Vt.bindBuffer(Vt.ARRAY_BUFFER, d), Vt.vertexAttribPointer(c, p, Vt.FLOAT, !1, m * f.array.BYTES_PER_ELEMENT, (n * m + g) * f.array.BYTES_PER_ELEMENT)
                                } else u instanceof o.InstancedBufferAttribute ? (Yt.enableAttributeAndDivisor(c, u.meshPerAttribute, r), void 0 === i.maxInstancedCount && (i.maxInstancedCount = u.meshPerAttribute * u.count)) : Yt.enableAttribute(c), Vt.bindBuffer(Vt.ARRAY_BUFFER, d), Vt.vertexAttribPointer(c, p, Vt.FLOAT, !1, 0, n * p * 4)
                            } else if (void 0 !== h) {
                                var v = h[l];
                                if (void 0 !== v) switch (v.length) {
                                    case 2:
                                        Vt.vertexAttrib2fv(c, v);
                                        break;
                                    case 3:
                                        Vt.vertexAttrib3fv(c, v);
                                        break;
                                    case 4:
                                        Vt.vertexAttrib4fv(c, v);
                                        break;
                                    default:
                                        Vt.vertexAttrib1fv(c, v)
                                }
                            }
                        }
                    }
                    Yt.disableUnusedAttributes()
                }
            }

            function m(t, e) {
                return Math.abs(e[0]) - Math.abs(t[0])
            }

            function g(t, e) {
                return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
            }

            function v(t, e) {
                return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
            }

            function y(t, e, i, n, r) {
                var o, s;
                i.transparent ? (o = pt, s = ++dt) : (o = ct, s = ++ut);
                var a = o[s];
                void 0 !== a ? (a.id = t.id, a.object = t, a.geometry = e, a.material = i, a.z = Nt.z, a.group = r) : (a = {
                    id: t.id,
                    object: t,
                    geometry: e,
                    material: i,
                    z: Nt.z,
                    group: r
                }, o.push(a))
            }

            function _(t, e) {
                if (t.visible !== !1) {
                    if (t.layers.test(e.layers))
                        if (t instanceof o.Light) lt.push(t);
                        else if (t instanceof o.Sprite) t.frustumCulled !== !1 && kt.intersectsObject(t) !== !0 || mt.push(t);
                        else if (t instanceof o.LensFlare) gt.push(t);
                        else if (t instanceof o.ImmediateRenderObject) vt.sortObjects === !0 && (Nt.setFromMatrixPosition(t.matrixWorld), Nt.applyProjection(Ft)), y(t, null, t.material, Nt.z, null);
                        else if ((t instanceof o.Mesh || t instanceof o.Line || t instanceof o.Points) && (t instanceof o.SkinnedMesh && t.skeleton.update(), t.frustumCulled === !1 || kt.intersectsObject(t) === !0)) {
                            var i = t.material;
                            if (i.visible === !0) {
                                vt.sortObjects === !0 && (Nt.setFromMatrixPosition(t.matrixWorld), Nt.applyProjection(Ft));
                                var n = Kt.update(t);
                                if (i instanceof o.MultiMaterial)
                                    for (var r = n.groups, s = i.materials, a = 0, h = r.length; a < h; a++) {
                                        var l = r[a],
                                            c = s[l.materialIndex];
                                        c.visible === !0 && y(t, n, c, Nt.z, l)
                                    } else y(t, n, i, Nt.z, null)
                            }
                        }
                    for (var u = t.children, a = 0, h = u.length; a < h; a++) _(u[a], e)
                }
            }

            function x(t, e, i, n) {
                for (var r = 0, s = t.length; r < s; r++) {
                    var a = t[r],
                        h = a.object,
                        l = a.geometry,
                        c = void 0 === n ? a.material : n,
                        u = a.group;
                    if (h.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, h.matrixWorld), h.normalMatrix.getNormalMatrix(h.modelViewMatrix), h instanceof o.ImmediateRenderObject) {
                        w(c);
                        var p = T(e, i, c, h);
                        wt = "", h.render(function (t) {
                            vt.renderBufferImmediate(t, p, c)
                        })
                    } else vt.renderBufferDirect(e, i, l, c, h, u)
                }
            }

            function b(t, e, i) {
                var n = qt.get(t),
                    r = Zt.getParameters(t, Ut, e, i),
                    s = Zt.getProgramCode(t, r),
                    a = n.program,
                    h = !0;
                if (void 0 === a) t.addEventListener("dispose", l);
                else if (a.code !== s) d(t);
                else {
                    if (void 0 !== r.shaderID) return;
                    h = !1
                } if (h) {
                    if (r.shaderID) {
                        var c = o.ShaderLib[r.shaderID];
                        n.__webglShader = {
                            name: t.type,
                            uniforms: o.UniformsUtils.clone(c.uniforms),
                            vertexShader: c.vertexShader,
                            fragmentShader: c.fragmentShader
                        }
                    } else n.__webglShader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                    t.__webglShader = n.__webglShader, a = Zt.acquireProgram(t, r, s), n.program = a, t.program = a
                }
                var u = a.getAttributes();
                if (t.morphTargets) {
                    t.numSupportedMorphTargets = 0;
                    for (var p = 0; p < vt.maxMorphTargets; p++) u["morphTarget" + p] >= 0 && t.numSupportedMorphTargets++
                }
                if (t.morphNormals) {
                    t.numSupportedMorphNormals = 0;
                    for (var p = 0; p < vt.maxMorphNormals; p++) u["morphNormal" + p] >= 0 && t.numSupportedMorphNormals++
                }
                n.uniformsList = [];
                var f = n.__webglShader.uniforms,
                    m = n.program.getUniforms();
                for (var g in f) {
                    var v = m[g];
                    v && n.uniformsList.push([n.__webglShader.uniforms[g], v])
                } (t instanceof o.MeshPhongMaterial || t instanceof o.MeshLambertMaterial || t instanceof o.MeshStandardMaterial || t.lights) && (n.lightsHash = Ut.hash, f.ambientLightColor.value = Ut.ambient, f.directionalLights.value = Ut.directional, f.spotLights.value = Ut.spot, f.pointLights.value = Ut.point, f.hemisphereLights.value = Ut.hemi, f.directionalShadowMap.value = Ut.directionalShadowMap, f.directionalShadowMatrix.value = Ut.directionalShadowMatrix, f.spotShadowMap.value = Ut.spotShadowMap, f.spotShadowMatrix.value = Ut.spotShadowMatrix, f.pointShadowMap.value = Ut.pointShadowMap, f.pointShadowMatrix.value = Ut.pointShadowMatrix), n.hasDynamicUniforms = !1;
                for (var y = 0, _ = n.uniformsList.length; y < _; y++) {
                    var x = n.uniformsList[y][0];
                    if (x.dynamic === !0) {
                        n.hasDynamicUniforms = !0;
                        break
                    }
                }
            }

            function w(t) {
                S(t), t.transparent === !0 ? Yt.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : Yt.setBlending(o.NoBlending), Yt.setDepthFunc(t.depthFunc), Yt.setDepthTest(t.depthTest), Yt.setDepthWrite(t.depthWrite), Yt.setColorWrite(t.colorWrite), Yt.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            }

            function S(t) {
                t.side !== o.DoubleSide ? Yt.enable(Vt.CULL_FACE) : Yt.disable(Vt.CULL_FACE), Yt.setFlipSided(t.side === o.BackSide)
            }

            function T(t, e, i, n) {
                At = 0;
                var r = qt.get(i);
                void 0 === r.program && (i.needsUpdate = !0), void 0 !== r.lightsHash && r.lightsHash !== Ut.hash && (i.needsUpdate = !0), i.needsUpdate && (b(i, e, n), i.needsUpdate = !1);
                var s = !1,
                    a = !1,
                    h = !1,
                    l = r.program,
                    c = l.getUniforms(),
                    u = r.__webglShader.uniforms;
                if (l.id !== yt && (Vt.useProgram(l.program), yt = l.id, s = !0, a = !0, h = !0), i.id !== bt && (bt = i.id, a = !0), (s || t !== St) && (Vt.uniformMatrix4fv(c.projectionMatrix, !1, t.projectionMatrix.elements), Xt.logarithmicDepthBuffer && Vt.uniform1f(c.logDepthBufFC, 2 / (Math.log(t.far + 1) / Math.LN2)), t !== St && (St = t, a = !0, h = !0), (i instanceof o.ShaderMaterial || i instanceof o.MeshPhongMaterial || i instanceof o.MeshStandardMaterial || i.envMap) && void 0 !== c.cameraPosition && (Nt.setFromMatrixPosition(t.matrixWorld), Vt.uniform3f(c.cameraPosition, Nt.x, Nt.y, Nt.z)), (i instanceof o.MeshPhongMaterial || i instanceof o.MeshLambertMaterial || i instanceof o.MeshBasicMaterial || i instanceof o.MeshStandardMaterial || i instanceof o.ShaderMaterial || i.skinning) && void 0 !== c.viewMatrix && Vt.uniformMatrix4fv(c.viewMatrix, !1, t.matrixWorldInverse.elements), void 0 !== c.toneMappingExposure && Vt.uniform1f(c.toneMappingExposure, vt.toneMappingExposure), void 0 !== c.toneMappingWhitePoint && Vt.uniform1f(c.toneMappingWhitePoint, vt.toneMappingWhitePoint)), i.skinning)
                    if (n.bindMatrix && void 0 !== c.bindMatrix && Vt.uniformMatrix4fv(c.bindMatrix, !1, n.bindMatrix.elements), n.bindMatrixInverse && void 0 !== c.bindMatrixInverse && Vt.uniformMatrix4fv(c.bindMatrixInverse, !1, n.bindMatrixInverse.elements), Xt.floatVertexTextures && n.skeleton && n.skeleton.useVertexTexture) {
                        if (void 0 !== c.boneTexture) {
                            var p = k();
                            Vt.uniform1i(c.boneTexture, p), vt.setTexture(n.skeleton.boneTexture, p)
                        }
                        void 0 !== c.boneTextureWidth && Vt.uniform1i(c.boneTextureWidth, n.skeleton.boneTextureWidth), void 0 !== c.boneTextureHeight && Vt.uniform1i(c.boneTextureHeight, n.skeleton.boneTextureHeight)
                    } else n.skeleton && n.skeleton.boneMatrices && void 0 !== c.boneGlobalMatrices && Vt.uniformMatrix4fv(c.boneGlobalMatrices, !1, n.skeleton.boneMatrices);
                return a && ((i instanceof o.MeshPhongMaterial || i instanceof o.MeshLambertMaterial || i instanceof o.MeshStandardMaterial || i.lights) && D(u, h), e && i.fog && R(u, e), (i instanceof o.MeshBasicMaterial || i instanceof o.MeshLambertMaterial || i instanceof o.MeshPhongMaterial || i instanceof o.MeshStandardMaterial) && E(u, i), i instanceof o.LineBasicMaterial ? A(u, i) : i instanceof o.LineDashedMaterial ? (A(u, i), C(u, i)) : i instanceof o.PointsMaterial ? L(u, i) : i instanceof o.MeshLambertMaterial ? P(u, i) : i instanceof o.MeshPhongMaterial ? O(u, i) : i instanceof o.MeshStandardMaterial ? I(u, i) : i instanceof o.MeshDepthMaterial ? (u.mNear.value = t.near, u.mFar.value = t.far, u.opacity.value = i.opacity) : i instanceof o.MeshNormalMaterial && (u.opacity.value = i.opacity), N(r.uniformsList)), B(c, n), void 0 !== c.modelMatrix && Vt.uniformMatrix4fv(c.modelMatrix, !1, n.matrixWorld.elements), r.hasDynamicUniforms === !0 && M(r.uniformsList, n, t), l
            }

            function M(t, e, i) {
                for (var n = [], r = 0, o = t.length; r < o; r++) {
                    var s = t[r][0],
                        a = s.onUpdateCallback;
                    void 0 !== a && (a.bind(s)(e, i), n.push(t[r]))
                }
                N(n)
            }

            function E(t, e) {
                t.opacity.value = e.opacity, t.diffuse.value = e.color, e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), t.map.value = e.map, t.specularMap.value = e.specularMap, t.alphaMap.value = e.alphaMap, e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
                var i;
                if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i) {
                    i instanceof o.WebGLRenderTarget && (i = i.texture);
                    var n = i.offset,
                        r = i.repeat;
                    t.offsetRepeat.value.set(n.x, n.y, r.x, r.y)
                }
                t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap instanceof o.WebGLRenderTargetCube ? 1 : -1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio
            }

            function A(t, e) {
                t.diffuse.value = e.color, t.opacity.value = e.opacity
            }

            function C(t, e) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }

            function L(t, e) {
                if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * Ot, t.scale.value = et.clientHeight / 2, t.map.value = e.map, null !== e.map) {
                    var i = e.map.offset,
                        n = e.map.repeat;
                    t.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
                }
            }

            function R(t, e) {
                t.fogColor.value = e.color, e instanceof o.Fog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e instanceof o.FogExp2 && (t.fogDensity.value = e.density)
            }

            function P(t, e) {
                e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }

            function O(t, e) {
                t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }

            function I(t, e) {
                t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
            }

            function D(t, e) {
                t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
            }

            function B(t, e) {
                Vt.uniformMatrix4fv(t.modelViewMatrix, !1, e.modelViewMatrix.elements), t.normalMatrix && Vt.uniformMatrix3fv(t.normalMatrix, !1, e.normalMatrix.elements)
            }

            function k() {
                var t = At;
                return t >= Xt.maxTextures, At += 1, t
            }

            function F(t, e, i, n) {
                var r, s;
                if ("1i" === e) Vt.uniform1i(i, n);
                else if ("1f" === e) Vt.uniform1f(i, n);
                else if ("2f" === e) Vt.uniform2f(i, n[0], n[1]);
                else if ("3f" === e) Vt.uniform3f(i, n[0], n[1], n[2]);
                else if ("4f" === e) Vt.uniform4f(i, n[0], n[1], n[2], n[3]);
                else if ("1iv" === e) Vt.uniform1iv(i, n);
                else if ("3iv" === e) Vt.uniform3iv(i, n);
                else if ("1fv" === e) Vt.uniform1fv(i, n);
                else if ("2fv" === e) Vt.uniform2fv(i, n);
                else if ("3fv" === e) Vt.uniform3fv(i, n);
                else if ("4fv" === e) Vt.uniform4fv(i, n);
                else if ("Matrix2fv" === e) Vt.uniformMatrix2fv(i, !1, n);
                else if ("Matrix3fv" === e) Vt.uniformMatrix3fv(i, !1, n);
                else if ("Matrix4fv" === e) Vt.uniformMatrix4fv(i, !1, n);
                else if ("i" === e) Vt.uniform1i(i, n);
                else if ("f" === e) Vt.uniform1f(i, n);
                else if ("v2" === e) Vt.uniform2f(i, n.x, n.y);
                else if ("v3" === e) Vt.uniform3f(i, n.x, n.y, n.z);
                else if ("v4" === e) Vt.uniform4f(i, n.x, n.y, n.z, n.w);
                else if ("c" === e) Vt.uniform3f(i, n.r, n.g, n.b);
                else if ("s" === e) {
                    var a = t.properties;
                    for (var h in a) {
                        var l = a[h],
                            c = i[h],
                            u = n[h];
                        F(l, l.type, c, u)
                    }
                } else if ("sa" === e)
                    for (var a = t.properties, p = 0, d = n.length; p < d; p++)
                        for (var h in a) {
                            var l = a[h],
                                c = i[p][h],
                                u = n[p][h];
                            F(l, l.type, c, u)
                        } else if ("iv1" === e) Vt.uniform1iv(i, n);
                        else if ("iv" === e) Vt.uniform3iv(i, n);
                        else if ("fv1" === e) Vt.uniform1fv(i, n);
                        else if ("fv" === e) Vt.uniform3fv(i, n);
                        else if ("v2v" === e) {
                            void 0 === t._array && (t._array = new Float32Array(2 * n.length));
                            for (var p = 0, f = 0, m = n.length; p < m; p++, f += 2) t._array[f + 0] = n[p].x, t._array[f + 1] = n[p].y;
                            Vt.uniform2fv(i, t._array)
                        } else if ("v3v" === e) {
                            void 0 === t._array && (t._array = new Float32Array(3 * n.length));
                            for (var p = 0, g = 0, m = n.length; p < m; p++, g += 3) t._array[g + 0] = n[p].x, t._array[g + 1] = n[p].y, t._array[g + 2] = n[p].z;
                            Vt.uniform3fv(i, t._array)
                        } else if ("v4v" === e) {
                            void 0 === t._array && (t._array = new Float32Array(4 * n.length));
                            for (var p = 0, v = 0, m = n.length; p < m; p++, v += 4) t._array[v + 0] = n[p].x, t._array[v + 1] = n[p].y, t._array[v + 2] = n[p].z, t._array[v + 3] = n[p].w;
                            Vt.uniform4fv(i, t._array)
                        } else if ("m2" === e) Vt.uniformMatrix2fv(i, !1, n.elements);
                        else if ("m3" === e) Vt.uniformMatrix3fv(i, !1, n.elements);
                        else if ("m3v" === e) {
                            void 0 === t._array && (t._array = new Float32Array(9 * n.length));
                            for (var p = 0, m = n.length; p < m; p++) n[p].flattenToArrayOffset(t._array, 9 * p);
                            Vt.uniformMatrix3fv(i, !1, t._array)
                        } else if ("m4" === e) Vt.uniformMatrix4fv(i, !1, n.elements);
                        else if ("m4v" === e) {
                            void 0 === t._array && (t._array = new Float32Array(16 * n.length));
                            for (var p = 0, m = n.length; p < m; p++) n[p].flattenToArrayOffset(t._array, 16 * p);
                            Vt.uniformMatrix4fv(i, !1, t._array)
                        } else if ("t" === e) {
                            if (r = n, s = k(), Vt.uniform1i(i, s), !r) return;
                            r instanceof o.CubeTexture || Array.isArray(r.image) && 6 === r.image.length ? X(r, s) : r instanceof o.WebGLRenderTargetCube ? Y(r.texture, s) : r instanceof o.WebGLRenderTarget ? vt.setTexture(r.texture, s) : vt.setTexture(r, s)
                        } else if ("tv" === e) {
                            void 0 === t._array && (t._array = []);
                            for (var p = 0, m = t.value.length; p < m; p++) t._array[p] = k();
                            Vt.uniform1iv(i, t._array);
                            for (var p = 0, m = t.value.length; p < m; p++) r = t.value[p], s = t._array[p], r && (r instanceof o.CubeTexture || r.image instanceof Array && 6 === r.image.length ? X(r, s) : r instanceof o.WebGLRenderTarget ? vt.setTexture(r.texture, s) : r instanceof o.WebGLRenderTargetCube ? Y(r.texture, s) : vt.setTexture(r, s))
                        }
            }

            function N(t) {
                for (var e = 0, i = t.length; e < i; e++) {
                    var n = t[e][0];
                    if (n.needsUpdate !== !1) {
                        var r = n.type,
                            o = t[e][1],
                            s = n.value;
                        F(n, r, o, s)
                    }
                }
            }

            function U(t, e) {
                var i, n, r, s, a, h, l = 0,
                    c = 0,
                    u = 0,
                    p = e.matrixWorldInverse,
                    d = 0,
                    f = 0,
                    m = 0,
                    g = 0,
                    v = 0;
                for (Ut.shadowsPointLight = 0, i = 0, n = t.length; i < n; i++)
                    if (r = t[i], s = r.color, a = r.intensity, h = r.distance, r instanceof o.AmbientLight) l += s.r * a, c += s.g * a, u += s.b * a;
                    else if (r instanceof o.DirectionalLight) {
                        var y = Jt.get(r);
                        y.color.copy(r.color).multiplyScalar(r.intensity), y.direction.setFromMatrixPosition(r.matrixWorld), Nt.setFromMatrixPosition(r.target.matrixWorld), y.direction.sub(Nt), y.direction.transformDirection(p), y.shadow = r.castShadow, r.castShadow && (y.shadowBias = r.shadow.bias, y.shadowRadius = r.shadow.radius, y.shadowMapSize = r.shadow.mapSize, Ut.shadows[v++] = r), Ut.directionalShadowMap[d] = r.shadow.map, Ut.directionalShadowMatrix[d] = r.shadow.matrix, Ut.directional[d++] = y
                    } else if (r instanceof o.SpotLight) {
                        var y = Jt.get(r);
                        y.position.setFromMatrixPosition(r.matrixWorld), y.position.applyMatrix4(p), y.color.copy(s).multiplyScalar(a), y.distance = h, y.direction.setFromMatrixPosition(r.matrixWorld), Nt.setFromMatrixPosition(r.target.matrixWorld), y.direction.sub(Nt), y.direction.transformDirection(p), y.coneCos = Math.cos(r.angle), y.penumbraCos = Math.cos(r.angle * (1 - r.penumbra)), y.decay = 0 === r.distance ? 0 : r.decay, y.shadow = r.castShadow, r.castShadow && (y.shadowBias = r.shadow.bias, y.shadowRadius = r.shadow.radius, y.shadowMapSize = r.shadow.mapSize, Ut.shadows[v++] = r), Ut.spotShadowMap[m] = r.shadow.map, Ut.spotShadowMatrix[m] = r.shadow.matrix, Ut.spot[m++] = y
                    } else if (r instanceof o.PointLight) {
                        var y = Jt.get(r);
                        y.position.setFromMatrixPosition(r.matrixWorld), y.position.applyMatrix4(p), y.color.copy(r.color).multiplyScalar(r.intensity), y.distance = r.distance, y.decay = 0 === r.distance ? 0 : r.decay, y.shadow = r.castShadow, r.castShadow && (y.shadowBias = r.shadow.bias, y.shadowRadius = r.shadow.radius, y.shadowMapSize = r.shadow.mapSize, Ut.shadows[v++] = r), Ut.pointShadowMap[f] = r.shadow.map, void 0 === Ut.pointShadowMatrix[f] && (Ut.pointShadowMatrix[f] = new o.Matrix4), Nt.setFromMatrixPosition(r.matrixWorld).negate(), Ut.pointShadowMatrix[f].identity().setPosition(Nt), Ut.point[f++] = y
                    } else if (r instanceof o.HemisphereLight) {
                        var y = Jt.get(r);
                        y.direction.setFromMatrixPosition(r.matrixWorld), y.direction.transformDirection(p), y.direction.normalize(), y.skyColor.copy(r.color).multiplyScalar(a), y.groundColor.copy(r.groundColor).multiplyScalar(a), Ut.hemi[g++] = y
                    }
                Ut.ambient[0] = l, Ut.ambient[1] = c, Ut.ambient[2] = u, Ut.directional.length = d, Ut.spot.length = m, Ut.point.length = f, Ut.hemi.length = g, Ut.shadows.length = v, Ut.hash = d + "," + f + "," + m + "," + g + "," + v
            }

            function G(t, e, i) {
                var n;
                if (i ? (Vt.texParameteri(t, Vt.TEXTURE_WRAP_S, tt(e.wrapS)), Vt.texParameteri(t, Vt.TEXTURE_WRAP_T, tt(e.wrapT)), Vt.texParameteri(t, Vt.TEXTURE_MAG_FILTER, tt(e.magFilter)), Vt.texParameteri(t, Vt.TEXTURE_MIN_FILTER, tt(e.minFilter))) : (Vt.texParameteri(t, Vt.TEXTURE_WRAP_S, Vt.CLAMP_TO_EDGE), Vt.texParameteri(t, Vt.TEXTURE_WRAP_T, Vt.CLAMP_TO_EDGE), e.wrapS !== o.ClampToEdgeWrapping || e.wrapT !== o.ClampToEdgeWrapping, Vt.texParameteri(t, Vt.TEXTURE_MAG_FILTER, $(e.magFilter)), Vt.texParameteri(t, Vt.TEXTURE_MIN_FILTER, $(e.minFilter)), e.minFilter !== o.NearestFilter && e.minFilter !== o.LinearFilter), n = Wt.get("EXT_texture_filter_anisotropic")) {
                    if (e.type === o.FloatType && null === Wt.get("OES_texture_float_linear")) return;
                    if (e.type === o.HalfFloatType && null === Wt.get("OES_texture_half_float_linear")) return;
                    (e.anisotropy > 1 || qt.get(e).__currentAnisotropy) && (Vt.texParameterf(t, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, vt.getMaxAnisotropy())), qt.get(e).__currentAnisotropy = e.anisotropy)
                }
            }

            function z(t, e, i) {
                void 0 === t.__webglInit && (t.__webglInit = !0, e.addEventListener("dispose", a), t.__webglTexture = Vt.createTexture(), Gt.textures++), Yt.activeTexture(Vt.TEXTURE0 + i), Yt.bindTexture(Vt.TEXTURE_2D, t.__webglTexture), Vt.pixelStorei(Vt.UNPACK_FLIP_Y_WEBGL, e.flipY), Vt.pixelStorei(Vt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Vt.pixelStorei(Vt.UNPACK_ALIGNMENT, e.unpackAlignment);
                var n = V(e.image, Xt.maxTextureSize);
                H(e) && j(n) === !1 && (n = W(n));
                var r = j(n),
                    s = tt(e.format),
                    h = tt(e.type);
                G(Vt.TEXTURE_2D, e, r);
                var l, c = e.mipmaps;
                if (e instanceof o.DataTexture)
                    if (c.length > 0 && r) {
                        for (var u = 0, p = c.length; u < p; u++) l = c[u], Yt.texImage2D(Vt.TEXTURE_2D, u, s, l.width, l.height, 0, s, h, l.data);
                        e.generateMipmaps = !1
                    } else Yt.texImage2D(Vt.TEXTURE_2D, 0, s, n.width, n.height, 0, s, h, n.data);
                else if (e instanceof o.CompressedTexture)
                    for (var u = 0, p = c.length; u < p; u++) l = c[u], e.format !== o.RGBAFormat && e.format !== o.RGBFormat ? Yt.getCompressedTextureFormats().indexOf(s) > -1 && Yt.compressedTexImage2D(Vt.TEXTURE_2D, u, s, l.width, l.height, 0, l.data) : Yt.texImage2D(Vt.TEXTURE_2D, u, s, l.width, l.height, 0, s, h, l.data);
                else if (c.length > 0 && r) {
                    for (var u = 0, p = c.length; u < p; u++) l = c[u], Yt.texImage2D(Vt.TEXTURE_2D, u, s, s, h, l);
                    e.generateMipmaps = !1
                } else Yt.texImage2D(Vt.TEXTURE_2D, 0, s, s, h, n);
                e.generateMipmaps && r && Vt.generateMipmap(Vt.TEXTURE_2D), t.__version = e.version, e.onUpdate && e.onUpdate(e)
            }

            function V(t, e) {
                if (t.width > e || t.height > e) {
                    var i = e / Math.max(t.width, t.height),
                        n = document.createElement("canvas");
                    n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i);
                    var r = n.getContext("2d");
                    return r.drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), n
                }
                return t
            }

            function j(t) {
                return o.Math.isPowerOfTwo(t.width) && o.Math.isPowerOfTwo(t.height)
            }

            function H(t) {
                return t.wrapS !== o.ClampToEdgeWrapping || t.wrapT !== o.ClampToEdgeWrapping || t.minFilter !== o.NearestFilter && t.minFilter !== o.LinearFilter
            }

            function W(t) {
                if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
                    var e = document.createElement("canvas");
                    e.width = o.Math.nearestPowerOfTwo(t.width), e.height = o.Math.nearestPowerOfTwo(t.height);
                    var i = e.getContext("2d");
                    return i.drawImage(t, 0, 0, e.width, e.height), e
                }
                return t
            }

            function X(t, e) {
                var i = qt.get(t);
                if (6 === t.image.length)
                    if (t.version > 0 && i.__version !== t.version) {
                        i.__image__webglTextureCube || (t.addEventListener("dispose", a), i.__image__webglTextureCube = Vt.createTexture(), Gt.textures++), Yt.activeTexture(Vt.TEXTURE0 + e), Yt.bindTexture(Vt.TEXTURE_CUBE_MAP, i.__image__webglTextureCube), Vt.pixelStorei(Vt.UNPACK_FLIP_Y_WEBGL, t.flipY);
                        for (var n = t instanceof o.CompressedTexture, r = t.image[0] instanceof o.DataTexture, s = [], h = 0; h < 6; h++) !vt.autoScaleCubemaps || n || r ? s[h] = r ? t.image[h].image : t.image[h] : s[h] = V(t.image[h], Xt.maxCubemapSize);
                        var l = s[0],
                            c = j(l),
                            u = tt(t.format),
                            p = tt(t.type);
                        G(Vt.TEXTURE_CUBE_MAP, t, c);
                        for (var h = 0; h < 6; h++)
                            if (n)
                                for (var d, f = s[h].mipmaps, m = 0, g = f.length; m < g; m++) d = f[m], t.format !== o.RGBAFormat && t.format !== o.RGBFormat ? Yt.getCompressedTextureFormats().indexOf(u) > -1 && Yt.compressedTexImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + h, m, u, d.width, d.height, 0, d.data) : Yt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + h, m, u, d.width, d.height, 0, u, p, d.data);
                            else r ? Yt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, u, s[h].width, s[h].height, 0, u, p, s[h].data) : Yt.texImage2D(Vt.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, u, u, p, s[h]);
                        t.generateMipmaps && c && Vt.generateMipmap(Vt.TEXTURE_CUBE_MAP), i.__version = t.version, t.onUpdate && t.onUpdate(t)
                    } else Yt.activeTexture(Vt.TEXTURE0 + e), Yt.bindTexture(Vt.TEXTURE_CUBE_MAP, i.__image__webglTextureCube)
            }

            function Y(t, e) {
                Yt.activeTexture(Vt.TEXTURE0 + e), Yt.bindTexture(Vt.TEXTURE_CUBE_MAP, qt.get(t).__webglTexture)
            }

            function q(t, e, i, n) {
                var r = tt(e.texture.format),
                    o = tt(e.texture.type);
                Yt.texImage2D(n, 0, r, e.width, e.height, 0, r, o, null), Vt.bindFramebuffer(Vt.FRAMEBUFFER, t), Vt.framebufferTexture2D(Vt.FRAMEBUFFER, i, n, qt.get(e.texture).__webglTexture, 0), Vt.bindFramebuffer(Vt.FRAMEBUFFER, null)
            }

            function K(t, e) {
                Vt.bindRenderbuffer(Vt.RENDERBUFFER, t), e.depthBuffer && !e.stencilBuffer ? (Vt.renderbufferStorage(Vt.RENDERBUFFER, Vt.DEPTH_COMPONENT16, e.width, e.height), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_ATTACHMENT, Vt.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (Vt.renderbufferStorage(Vt.RENDERBUFFER, Vt.DEPTH_STENCIL, e.width, e.height), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_STENCIL_ATTACHMENT, Vt.RENDERBUFFER, t)) : Vt.renderbufferStorage(Vt.RENDERBUFFER, Vt.RGBA4, e.width, e.height), Vt.bindRenderbuffer(Vt.RENDERBUFFER, null)
            }

            function Z(t) {
                var e = qt.get(t),
                    i = t instanceof o.WebGLRenderTargetCube;
                if (i) {
                    e.__webglDepthbuffer = [];
                    for (var n = 0; n < 6; n++) Vt.bindFramebuffer(Vt.FRAMEBUFFER, e.__webglFramebuffer[n]), e.__webglDepthbuffer[n] = Vt.createRenderbuffer(), K(e.__webglDepthbuffer[n], t)
                } else Vt.bindFramebuffer(Vt.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = Vt.createRenderbuffer(), K(e.__webglDepthbuffer, t);
                Vt.bindFramebuffer(Vt.FRAMEBUFFER, null)
            }

            function J(t) {
                var e = qt.get(t),
                    i = qt.get(t.texture);
                t.addEventListener("dispose", h), i.__webglTexture = Vt.createTexture(), Gt.textures++;
                var n = t instanceof o.WebGLRenderTargetCube,
                    r = o.Math.isPowerOfTwo(t.width) && o.Math.isPowerOfTwo(t.height);
                if (n) {
                    e.__webglFramebuffer = [];
                    for (var s = 0; s < 6; s++) e.__webglFramebuffer[s] = Vt.createFramebuffer()
                } else e.__webglFramebuffer = Vt.createFramebuffer(); if (n) {
                    Yt.bindTexture(Vt.TEXTURE_CUBE_MAP, i.__webglTexture), G(Vt.TEXTURE_CUBE_MAP, t.texture, r);
                    for (var s = 0; s < 6; s++) q(e.__webglFramebuffer[s], t, Vt.COLOR_ATTACHMENT0, Vt.TEXTURE_CUBE_MAP_POSITIVE_X + s);
                    t.texture.generateMipmaps && r && Vt.generateMipmap(Vt.TEXTURE_CUBE_MAP), Yt.bindTexture(Vt.TEXTURE_CUBE_MAP, null)
                } else Yt.bindTexture(Vt.TEXTURE_2D, i.__webglTexture), G(Vt.TEXTURE_2D, t.texture, r), q(e.__webglFramebuffer, t, Vt.COLOR_ATTACHMENT0, Vt.TEXTURE_2D), t.texture.generateMipmaps && r && Vt.generateMipmap(Vt.TEXTURE_2D), Yt.bindTexture(Vt.TEXTURE_2D, null);
                t.depthBuffer && Z(t)
            }

            function Q(t) {
                var e = t instanceof o.WebGLRenderTargetCube ? Vt.TEXTURE_CUBE_MAP : Vt.TEXTURE_2D,
                    i = qt.get(t.texture).__webglTexture;
                Yt.bindTexture(e, i), Vt.generateMipmap(e), Yt.bindTexture(e, null)
            }

            function $(t) {
                return t === o.NearestFilter || t === o.NearestMipMapNearestFilter || t === o.NearestMipMapLinearFilter ? Vt.NEAREST : Vt.LINEAR
            }

            function tt(t) {
                var e;
                if (t === o.RepeatWrapping) return Vt.REPEAT;
                if (t === o.ClampToEdgeWrapping) return Vt.CLAMP_TO_EDGE;
                if (t === o.MirroredRepeatWrapping) return Vt.MIRRORED_REPEAT;
                if (t === o.NearestFilter) return Vt.NEAREST;
                if (t === o.NearestMipMapNearestFilter) return Vt.NEAREST_MIPMAP_NEAREST;
                if (t === o.NearestMipMapLinearFilter) return Vt.NEAREST_MIPMAP_LINEAR;
                if (t === o.LinearFilter) return Vt.LINEAR;
                if (t === o.LinearMipMapNearestFilter) return Vt.LINEAR_MIPMAP_NEAREST;
                if (t === o.LinearMipMapLinearFilter) return Vt.LINEAR_MIPMAP_LINEAR;
                if (t === o.UnsignedByteType) return Vt.UNSIGNED_BYTE;
                if (t === o.UnsignedShort4444Type) return Vt.UNSIGNED_SHORT_4_4_4_4;
                if (t === o.UnsignedShort5551Type) return Vt.UNSIGNED_SHORT_5_5_5_1;
                if (t === o.UnsignedShort565Type) return Vt.UNSIGNED_SHORT_5_6_5;
                if (t === o.ByteType) return Vt.BYTE;
                if (t === o.ShortType) return Vt.SHORT;
                if (t === o.UnsignedShortType) return Vt.UNSIGNED_SHORT;
                if (t === o.IntType) return Vt.INT;
                if (t === o.UnsignedIntType) return Vt.UNSIGNED_INT;
                if (t === o.FloatType) return Vt.FLOAT;
                if (e = Wt.get("OES_texture_half_float"), null !== e && t === o.HalfFloatType) return e.HALF_FLOAT_OES;
                if (t === o.AlphaFormat) return Vt.ALPHA;
                if (t === o.RGBFormat) return Vt.RGB;
                if (t === o.RGBAFormat) return Vt.RGBA;
                if (t === o.LuminanceFormat) return Vt.LUMINANCE;
                if (t === o.LuminanceAlphaFormat) return Vt.LUMINANCE_ALPHA;
                if (t === o.AddEquation) return Vt.FUNC_ADD;
                if (t === o.SubtractEquation) return Vt.FUNC_SUBTRACT;
                if (t === o.ReverseSubtractEquation) return Vt.FUNC_REVERSE_SUBTRACT;
                if (t === o.ZeroFactor) return Vt.ZERO;
                if (t === o.OneFactor) return Vt.ONE;
                if (t === o.SrcColorFactor) return Vt.SRC_COLOR;
                if (t === o.OneMinusSrcColorFactor) return Vt.ONE_MINUS_SRC_COLOR;
                if (t === o.SrcAlphaFactor) return Vt.SRC_ALPHA;
                if (t === o.OneMinusSrcAlphaFactor) return Vt.ONE_MINUS_SRC_ALPHA;
                if (t === o.DstAlphaFactor) return Vt.DST_ALPHA;
                if (t === o.OneMinusDstAlphaFactor) return Vt.ONE_MINUS_DST_ALPHA;
                if (t === o.DstColorFactor) return Vt.DST_COLOR;
                if (t === o.OneMinusDstColorFactor) return Vt.ONE_MINUS_DST_COLOR;
                if (t === o.SrcAlphaSaturateFactor) return Vt.SRC_ALPHA_SATURATE;
                if (e = Wt.get("WEBGL_compressed_texture_s3tc"), null !== e) {
                    if (t === o.RGB_S3TC_DXT1_Format) return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (t === o.RGBA_S3TC_DXT1_Format) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (t === o.RGBA_S3TC_DXT3_Format) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (t === o.RGBA_S3TC_DXT5_Format) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (e = Wt.get("WEBGL_compressed_texture_pvrtc"), null !== e) {
                    if (t === o.RGB_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === o.RGB_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === o.RGBA_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === o.RGBA_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (e = Wt.get("WEBGL_compressed_texture_etc1"), null !== e && t === o.RGB_ETC1_Format) return e.COMPRESSED_RGB_ETC1_WEBGL;
                if (e = Wt.get("EXT_blend_minmax"), null !== e) {
                    if (t === o.MinEquation) return e.MIN_EXT;
                    if (t === o.MaxEquation) return e.MAX_EXT
                }
                return 0
            }
            t = t || {};
            var et = void 0 !== t.canvas ? t.canvas : document.createElement("canvas"),
                it = void 0 !== t.context ? t.context : null,
                nt = void 0 !== t.alpha && t.alpha,
                rt = void 0 === t.depth || t.depth,
                ot = void 0 === t.stencil || t.stencil,
                st = void 0 !== t.antialias && t.antialias,
                at = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
                ht = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
                lt = [],
                ct = [],
                ut = -1,
                pt = [],
                dt = -1,
                ft = new Float32Array(8),
                mt = [],
                gt = [];
            this.domElement = et, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = o.LinearToneMapping, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
            var vt = this,
                yt = null,
                _t = null,
                xt = null,
                bt = -1,
                wt = "",
                St = null,
                Tt = new o.Vector4,
                Mt = null,
                Et = new o.Vector4,
                At = 0,
                Ct = new o.Color(0),
                Lt = 0,
                Rt = et.width,
                Pt = et.height,
                Ot = 1,
                It = new o.Vector4(0, 0, Rt, Pt),
                Dt = !1,
                Bt = new o.Vector4(0, 0, Rt, Pt),
                kt = new o.Frustum,
                Ft = new o.Matrix4,
                Nt = new o.Vector3,
                Ut = {
                    hash: "",
                    ambient: [0, 0, 0],
                    directional: [],
                    directionalShadowMap: [],
                    directionalShadowMatrix: [],
                    spot: [],
                    spotShadowMap: [],
                    spotShadowMatrix: [],
                    point: [],
                    pointShadowMap: [],
                    pointShadowMatrix: [],
                    hemi: [],
                    shadows: [],
                    shadowsPointLight: 0
                },
                Gt = {
                    geometries: 0,
                    textures: 0
                },
                zt = {
                    calls: 0,
                    vertices: 0,
                    faces: 0,
                    points: 0
                };
            this.info = {
                render: zt,
                memory: Gt,
                programs: null
            };
            var Vt;
            try {
                var jt = {
                    alpha: nt,
                    depth: rt,
                    stencil: ot,
                    antialias: st,
                    premultipliedAlpha: at,
                    preserveDrawingBuffer: ht
                };
                if (Vt = it || et.getContext("webgl", jt) || et.getContext("experimental-webgl", jt), null === Vt) throw null !== et.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                void 0 === Vt.getShaderPrecisionFormat && (Vt.getShaderPrecisionFormat = function () {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    }
                }), et.addEventListener("webglcontextlost", s, !1)
            } catch (Ht) { }
            var Wt = new o.WebGLExtensions(Vt);
            Wt.get("OES_texture_float"), Wt.get("OES_texture_float_linear"), Wt.get("OES_texture_half_float"), Wt.get("OES_texture_half_float_linear"), Wt.get("OES_standard_derivatives"), Wt.get("ANGLE_instanced_arrays"), Wt.get("OES_element_index_uint") && (o.BufferGeometry.MaxIndex = 4294967296);
            var Xt = new o.WebGLCapabilities(Vt, Wt, t),
                Yt = new o.WebGLState(Vt, Wt, tt),
                qt = new o.WebGLProperties,
                Kt = new o.WebGLObjects(Vt, qt, this.info),
                Zt = new o.WebGLPrograms(this, Xt),
                Jt = new o.WebGLLights;
            this.info.programs = Zt.programs;
            var Qt = new o.WebGLBufferRenderer(Vt, Wt, zt),
                $t = new o.WebGLIndexedBufferRenderer(Vt, Wt, zt);
            n(), this.context = Vt, this.capabilities = Xt, this.extensions = Wt, this.properties = qt, this.state = Yt;
            var te = new o.WebGLShadowMap(this, Ut, Kt);
            this.shadowMap = te;
            var ee = new o.SpritePlugin(this, mt),
                ie = new o.LensFlarePlugin(this, gt);
            this.getContext = function () {
                return Vt
            }, this.getContextAttributes = function () {
                return Vt.getContextAttributes()
            }, this.forceContextLoss = function () {
                Wt.get("WEBGL_lose_context").loseContext()
            }, this.getMaxAnisotropy = function () {
                var t;
                return function () {
                    if (void 0 !== t) return t;
                    var e = Wt.get("EXT_texture_filter_anisotropic");
                    return t = null !== e ? Vt.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                }
            }(), this.getPrecision = function () {
                return Xt.precision
            }, this.getPixelRatio = function () {
                return Ot
            }, this.setPixelRatio = function (t) {
                void 0 !== t && (Ot = t, this.setSize(Bt.z, Bt.w, !1))
            }, this.getSize = function () {
                return {
                    width: Rt,
                    height: Pt
                }
            }, this.setSize = function (t, e, i) {
                Rt = t, Pt = e, et.width = t * Ot, et.height = e * Ot, i !== !1 && (et.style.width = t + "px", et.style.height = e + "px"), this.setViewport(0, 0, t, e)
            }, this.setViewport = function (t, e, i, n) {
                Yt.viewport(Bt.set(t, e, i, n))
            }, this.setScissor = function (t, e, i, n) {
                Yt.scissor(It.set(t, e, i, n))
            }, this.setScissorTest = function (t) {
                Yt.setScissorTest(Dt = t)
            }, this.getClearColor = function () {
                return Ct
            }, this.setClearColor = function (t, e) {
                Ct.set(t), Lt = void 0 !== e ? e : 1, i(Ct.r, Ct.g, Ct.b, Lt)
            }, this.getClearAlpha = function () {
                return Lt
            }, this.setClearAlpha = function (t) {
                Lt = t, i(Ct.r, Ct.g, Ct.b, Lt)
            }, this.clear = function (t, e, i) {
                var n = 0;
                (void 0 === t || t) && (n |= Vt.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= Vt.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= Vt.STENCIL_BUFFER_BIT), Vt.clear(n)
            }, this.clearColor = function () {
                this.clear(!0, !1, !1)
            }, this.clearDepth = function () {
                this.clear(!1, !0, !1)
            }, this.clearStencil = function () {
                this.clear(!1, !1, !0)
            }, this.clearTarget = function (t, e, i, n) {
                this.setRenderTarget(t), this.clear(e, i, n)
            }, this.resetGLState = r, this.dispose = function () {
                et.removeEventListener("webglcontextlost", s, !1)
            }, this.renderBufferImmediate = function (t, e, i) {
                Yt.initAttributes();
                var n = qt.get(t);
                t.hasPositions && !n.position && (n.position = Vt.createBuffer()), t.hasNormals && !n.normal && (n.normal = Vt.createBuffer()), t.hasUvs && !n.uv && (n.uv = Vt.createBuffer()), t.hasColors && !n.color && (n.color = Vt.createBuffer());
                var r = e.getAttributes();
                if (t.hasPositions && (Vt.bindBuffer(Vt.ARRAY_BUFFER, n.position), Vt.bufferData(Vt.ARRAY_BUFFER, t.positionArray, Vt.DYNAMIC_DRAW), Yt.enableAttribute(r.position), Vt.vertexAttribPointer(r.position, 3, Vt.FLOAT, !1, 0, 0)), t.hasNormals) {
                    if (Vt.bindBuffer(Vt.ARRAY_BUFFER, n.normal), "MeshPhongMaterial" !== i.type && "MeshStandardMaterial" !== i.type && i.shading === o.FlatShading)
                        for (var s = 0, a = 3 * t.count; s < a; s += 9) {
                            var h = t.normalArray,
                                l = (h[s + 0] + h[s + 3] + h[s + 6]) / 3,
                                c = (h[s + 1] + h[s + 4] + h[s + 7]) / 3,
                                u = (h[s + 2] + h[s + 5] + h[s + 8]) / 3;
                            h[s + 0] = l, h[s + 1] = c, h[s + 2] = u, h[s + 3] = l, h[s + 4] = c, h[s + 5] = u, h[s + 6] = l, h[s + 7] = c, h[s + 8] = u
                        }
                    Vt.bufferData(Vt.ARRAY_BUFFER, t.normalArray, Vt.DYNAMIC_DRAW), Yt.enableAttribute(r.normal), Vt.vertexAttribPointer(r.normal, 3, Vt.FLOAT, !1, 0, 0)
                }
                t.hasUvs && i.map && (Vt.bindBuffer(Vt.ARRAY_BUFFER, n.uv), Vt.bufferData(Vt.ARRAY_BUFFER, t.uvArray, Vt.DYNAMIC_DRAW), Yt.enableAttribute(r.uv), Vt.vertexAttribPointer(r.uv, 2, Vt.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== o.NoColors && (Vt.bindBuffer(Vt.ARRAY_BUFFER, n.color), Vt.bufferData(Vt.ARRAY_BUFFER, t.colorArray, Vt.DYNAMIC_DRAW), Yt.enableAttribute(r.color), Vt.vertexAttribPointer(r.color, 3, Vt.FLOAT, !1, 0, 0)), Yt.disableUnusedAttributes(), Vt.drawArrays(Vt.TRIANGLES, 0, t.count), t.count = 0
            }, this.renderBufferDirect = function (t, i, n, r, s, a) {
                w(r);
                var h = T(t, i, r, s),
                    l = !1,
                    c = n.id + "_" + h.id + "_" + r.wireframe;
                c !== wt && (wt = c, l = !0);
                var u = s.morphTargetInfluences;
                if (void 0 !== u) {
                    for (var p = [], d = 0, g = u.length; d < g; d++) {
                        var v = u[d];
                        p.push([v, d])
                    }
                    p.sort(m), p.length > 8 && (p.length = 8);
                    for (var y = n.morphAttributes, d = 0, g = p.length; d < g; d++) {
                        var v = p[d];
                        if (ft[d] = v[0], 0 !== v[0]) {
                            var _ = v[1];
                            r.morphTargets === !0 && y.position && n.addAttribute("morphTarget" + d, y.position[_]), r.morphNormals === !0 && y.normal && n.addAttribute("morphNormal" + d, y.normal[_])
                        } else r.morphTargets === !0 && n.removeAttribute("morphTarget" + d), r.morphNormals === !0 && n.removeAttribute("morphNormal" + d)
                    }
                    var x = h.getUniforms();
                    null !== x.morphTargetInfluences && Vt.uniform1fv(x.morphTargetInfluences, ft), l = !0
                }
                var _ = n.index,
                    b = n.attributes.position;
                r.wireframe === !0 && (_ = Kt.getWireframeAttribute(n));
                var S;
                null !== _ ? (S = $t, S.setIndex(_)) : S = Qt, l && (f(r, h, n), null !== _ && Vt.bindBuffer(Vt.ELEMENT_ARRAY_BUFFER, Kt.getAttributeBuffer(_)));
                var M = 0,
                    E = 1 / 0;
                null !== _ ? E = _.count : void 0 !== b && (E = b.count);
                var A = n.drawRange.start,
                    C = n.drawRange.count,
                    L = null !== a ? a.start : 0,
                    R = null !== a ? a.count : 1 / 0,
                    P = Math.max(M, A, L),
                    O = Math.min(M + E, A + C, L + R) - 1,
                    I = Math.max(0, O - P + 1);
                if (s instanceof o.Mesh)
                    if (r.wireframe === !0) Yt.setLineWidth(r.wireframeLinewidth * e()), S.setMode(Vt.LINES);
                    else switch (s.drawMode) {
                        case o.TrianglesDrawMode:
                            S.setMode(Vt.TRIANGLES);
                            break;
                        case o.TriangleStripDrawMode:
                            S.setMode(Vt.TRIANGLE_STRIP);
                            break;
                        case o.TriangleFanDrawMode:
                            S.setMode(Vt.TRIANGLE_FAN)
                    } else if (s instanceof o.Line) {
                        var D = r.linewidth;
                        void 0 === D && (D = 1), Yt.setLineWidth(D * e()), s instanceof o.LineSegments ? S.setMode(Vt.LINES) : S.setMode(Vt.LINE_STRIP)
                    } else s instanceof o.Points && S.setMode(Vt.POINTS);
                n instanceof o.InstancedBufferGeometry ? n.maxInstancedCount > 0 && S.renderInstances(n, P, I) : S.render(P, I)
            }, this.render = function (t, e, i, n) {
                if (e instanceof o.Camera != !1) {
                    var r = t.fog;
                    if (wt = "", bt = -1, St = null, t.autoUpdate === !0 && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), Ft.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), kt.setFromMatrix(Ft), lt.length = 0, ut = -1, dt = -1, mt.length = 0, gt.length = 0, _(t, e), ct.length = ut + 1, pt.length = dt + 1, vt.sortObjects === !0 && (ct.sort(g), pt.sort(v)), U(lt, e), te.render(t, e), zt.calls = 0, zt.vertices = 0, zt.faces = 0, zt.points = 0, void 0 === i && (i = null), this.setRenderTarget(i), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), t.overrideMaterial) {
                        var s = t.overrideMaterial;
                        x(ct, e, r, s), x(pt, e, r, s)
                    } else Yt.setBlending(o.NoBlending), x(ct, e, r), x(pt, e, r); if (ee.render(t, e), ie.render(t, e, Et), i) {
                        var a = i.texture;
                        a.generateMipmaps && j(i) && a.minFilter !== o.NearestFilter && a.minFilter !== o.LinearFilter && Q(i)
                    }
                    Yt.setDepthTest(!0), Yt.setDepthWrite(!0), Yt.setColorWrite(!0)
                }
            }, this.setFaceCulling = function (t, e) {
                t === o.CullFaceNone ? Yt.disable(Vt.CULL_FACE) : (e === o.FrontFaceDirectionCW ? Vt.frontFace(Vt.CW) : Vt.frontFace(Vt.CCW), t === o.CullFaceBack ? Vt.cullFace(Vt.BACK) : t === o.CullFaceFront ? Vt.cullFace(Vt.FRONT) : Vt.cullFace(Vt.FRONT_AND_BACK), Yt.enable(Vt.CULL_FACE))
            }, this.setTexture = function (t, e) {
                var i = qt.get(t);
                if (t.version > 0 && i.__version !== t.version) {
                    var n = t.image;
                    if (void 0 === n) return;
                    if (n.complete === !1) return;
                    return void z(i, t, e)
                }
                Yt.activeTexture(Vt.TEXTURE0 + e), Yt.bindTexture(Vt.TEXTURE_2D, i.__webglTexture)
            }, this.getCurrentRenderTarget = function () {
                return _t
            }, this.setRenderTarget = function (t) {
                _t = t, t && void 0 === qt.get(t).__webglFramebuffer && J(t);
                var e, i = t instanceof o.WebGLRenderTargetCube;
                if (t) {
                    var n = qt.get(t);
                    e = i ? n.__webglFramebuffer[t.activeCubeFace] : n.__webglFramebuffer, Tt.copy(t.scissor), Mt = t.scissorTest, Et.copy(t.viewport)
                } else e = null, Tt.copy(It).multiplyScalar(Ot), Mt = Dt, Et.copy(Bt).multiplyScalar(Ot); if (xt !== e && (Vt.bindFramebuffer(Vt.FRAMEBUFFER, e), xt = e), Yt.scissor(Tt), Yt.setScissorTest(Mt), Yt.viewport(Et), i) {
                    var r = qt.get(t.texture);
                    Vt.framebufferTexture2D(Vt.FRAMEBUFFER, Vt.COLOR_ATTACHMENT0, Vt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
                }
            }, this.readRenderTargetPixels = function (t, e, i, n, r, s) {
                if (t instanceof o.WebGLRenderTarget != !1) {
                    var a = qt.get(t).__webglFramebuffer;
                    if (a) {
                        var h = !1;
                        a !== xt && (Vt.bindFramebuffer(Vt.FRAMEBUFFER, a), h = !0);
                        try {
                            var l = t.texture;
                            if (l.format !== o.RGBAFormat && tt(l.format) !== Vt.getParameter(Vt.IMPLEMENTATION_COLOR_READ_FORMAT)) return;
                            if (!(l.type === o.UnsignedByteType || tt(l.type) === Vt.getParameter(Vt.IMPLEMENTATION_COLOR_READ_TYPE) || l.type === o.FloatType && Wt.get("WEBGL_color_buffer_float") || l.type === o.HalfFloatType && Wt.get("EXT_color_buffer_half_float"))) return;
                            Vt.checkFramebufferStatus(Vt.FRAMEBUFFER) === Vt.FRAMEBUFFER_COMPLETE && Vt.readPixels(e, i, n, r, tt(l.format), tt(l.type), s)
                        } finally {
                            h && Vt.bindFramebuffer(Vt.FRAMEBUFFER, xt)
                        }
                    }
                }
            }
        }, o.WebGLRenderTarget = function (t, e, i) {
            this.uuid = o.Math.generateUUID(), this.width = t, this.height = e, this.scissor = new o.Vector4(0, 0, t, e), this.scissorTest = !1, this.viewport = new o.Vector4(0, 0, t, e), i = i || {}, void 0 === i.minFilter && (i.minFilter = o.LinearFilter), this.texture = new o.Texture((void 0), (void 0), i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy), this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer
        }, o.WebGLRenderTarget.prototype = {
            constructor: o.WebGLRenderTarget,
            setSize: function (t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
            },
            clone: function () {
                return (new this.constructor).copy(this)
            },
            copy: function (t) {
                return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this
            },
            dispose: function () {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, o.EventDispatcher.prototype.apply(o.WebGLRenderTarget.prototype), o.WebGLRenderTargetCube = function (t, e, i) {
            o.WebGLRenderTarget.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
        }, o.WebGLRenderTargetCube.prototype = Object.create(o.WebGLRenderTarget.prototype), o.WebGLRenderTargetCube.prototype.constructor = o.WebGLRenderTargetCube, o.WebGLBufferRenderer = function (t, e, i) {
            function n(t) {
                a = t
            }

            function r(e, n) {
                t.drawArrays(a, e, n), i.calls++, i.vertices += n, a === t.TRIANGLES && (i.faces += n / 3)
            }

            function s(n) {
                var r = e.get("ANGLE_instanced_arrays");
                if (null !== r) {
                    var s = n.attributes.position,
                        h = 0;
                    s instanceof o.InterleavedBufferAttribute ? (h = s.data.count, r.drawArraysInstancedANGLE(a, 0, h, n.maxInstancedCount)) : (h = s.count, r.drawArraysInstancedANGLE(a, 0, h, n.maxInstancedCount)), i.calls++, i.vertices += h * n.maxInstancedCount, a === t.TRIANGLES && (i.faces += n.maxInstancedCount * h / 3)
                }
            }
            var a;
            this.setMode = n, this.render = r, this.renderInstances = s
        }, o.WebGLIndexedBufferRenderer = function (t, e, i) {
            function n(t) {
                a = t
            }

            function r(i) {
                i.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (h = t.UNSIGNED_INT, l = 4) : (h = t.UNSIGNED_SHORT, l = 2)
            }

            function o(e, n) {
                t.drawElements(a, n, h, e * l), i.calls++, i.vertices += n, a === t.TRIANGLES && (i.faces += n / 3)
            }

            function s(n, r, o) {
                var s = e.get("ANGLE_instanced_arrays");
                null !== s && (s.drawElementsInstancedANGLE(a, o, h, r * l, n.maxInstancedCount), i.calls++, i.vertices += o * n.maxInstancedCount, a === t.TRIANGLES && (i.faces += n.maxInstancedCount * o / 3))
            }
            var a, h, l;
            this.setMode = n, this.setIndex = r, this.render = o, this.renderInstances = s
        }, o.WebGLExtensions = function (t) {
            var e = {};
            this.get = function (i) {
                if (void 0 !== e[i]) return e[i];
                var n;
                switch (i) {
                    case "EXT_texture_filter_anisotropic":
                        n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        n = t.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        n = t.getExtension(i)
                }
                return e[i] = n, n
            }
        }, o.WebGLCapabilities = function (t, e, i) {
            function n(e) {
                if ("highp" === e) {
                    if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
                    e = "mediump"
                }
                return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }
            this.getMaxPrecision = n, this.precision = void 0 !== i.precision ? i.precision : "highp", this.logarithmicDepthBuffer = void 0 !== i.logarithmicDepthBuffer && i.logarithmicDepthBuffer, this.maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), this.maxCubemapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = t.getParameter(t.MAX_VARYING_VECTORS), this.maxFragmentUniforms = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!e.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
            var r = n(this.precision);
            r !== this.precision && (this.precision = r), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!e.get("EXT_frag_depth"))
        }, o.WebGLGeometries = function (t, e, i) {
            function n(t) {
                var e = t.geometry;
                if (void 0 !== c[e.id]) return c[e.id];
                e.addEventListener("dispose", r);
                var n;
                return e instanceof o.BufferGeometry ? n = e : e instanceof o.Geometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new o.BufferGeometry).setFromObject(t)), n = e._bufferGeometry), c[e.id] = n, i.memory.geometries++, n
            }

            function r(t) {
                var n = t.target,
                    o = c[n.id];
                null !== o.index && a(o.index), h(o.attributes), n.removeEventListener("dispose", r), delete c[n.id];
                var s = e.get(n);
                s.wireframe && a(s.wireframe), e["delete"](n);
                var l = e.get(o);
                l.wireframe && a(l.wireframe), e["delete"](o), i.memory.geometries--
            }

            function s(t) {
                return t instanceof o.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
            }

            function a(e) {
                var i = s(e);
                void 0 !== i && (t.deleteBuffer(i), l(e))
            }

            function h(t) {
                for (var e in t) a(t[e])
            }

            function l(t) {
                t instanceof o.InterleavedBufferAttribute ? e["delete"](t.data) : e["delete"](t)
            }
            var c = {};
            this.get = n
        }, o.WebGLLights = function () {
            var t = {};
            this.get = function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                var i;
                switch (e.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new o.Vector3,
                            color: new o.Color,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new o.Vector2
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new o.Vector3,
                            direction: new o.Vector3,
                            color: new o.Color,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new o.Vector2
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new o.Vector3,
                            color: new o.Color,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new o.Vector2
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new o.Vector3,
                            skyColor: new o.Color,
                            groundColor: new o.Color
                        }
                }
                return t[e.id] = i, i
            }
        }, o.WebGLObjects = function (t, e, i) {
            function n(e) {
                var i = u.get(e);
                e.geometry instanceof o.Geometry && i.updateFromObject(e);
                var n = i.index,
                    s = i.attributes;
                null !== n && r(n, t.ELEMENT_ARRAY_BUFFER);
                for (var a in s) r(s[a], t.ARRAY_BUFFER);
                var h = i.morphAttributes;
                for (var a in h)
                    for (var l = h[a], c = 0, p = l.length; c < p; c++) r(l[c], t.ARRAY_BUFFER);
                return i
            }

            function r(t, i) {
                var n = t instanceof o.InterleavedBufferAttribute ? t.data : t,
                    r = e.get(n);
                void 0 === r.__webglBuffer ? s(r, n, i) : r.version !== n.version && a(r, n, i)
            }

            function s(e, i, n) {
                e.__webglBuffer = t.createBuffer(), t.bindBuffer(n, e.__webglBuffer);
                var r = i.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
                t.bufferData(n, i.array, r), e.version = i.version
            }

            function a(e, i, n) {
                t.bindBuffer(n, e.__webglBuffer), i.dynamic === !1 || i.updateRange.count === -1 ? t.bufferSubData(n, 0, i.array) : 0 === i.updateRange.count || (t.bufferSubData(n, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)), i.updateRange.count = 0), e.version = i.version
            }

            function h(t) {
                return t instanceof o.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
            }

            function l(i) {
                var n = e.get(i);
                if (void 0 !== n.wireframe) return n.wireframe;
                var s = [],
                    a = i.index,
                    h = i.attributes,
                    l = h.position;
                if (null !== a)
                    for (var u = {}, p = a.array, d = 0, f = p.length; d < f; d += 3) {
                        var m = p[d + 0],
                            g = p[d + 1],
                            v = p[d + 2];
                        c(u, m, g) && s.push(m, g), c(u, g, v) && s.push(g, v), c(u, v, m) && s.push(v, m)
                    } else
                    for (var p = h.position.array, d = 0, f = p.length / 3 - 1; d < f; d += 3) {
                        var m = d + 0,
                            g = d + 1,
                            v = d + 2;
                        s.push(m, g, g, v, v, m)
                    }
                var y = l.count > 65535 ? Uint32Array : Uint16Array,
                    _ = new o.BufferAttribute(new y(s), 1);
                return r(_, t.ELEMENT_ARRAY_BUFFER), n.wireframe = _, _
            }

            function c(t, e, i) {
                if (e > i) {
                    var n = e;
                    e = i, i = n
                }
                var r = t[e];
                return void 0 === r ? (t[e] = [i], !0) : r.indexOf(i) === -1 && (r.push(i), !0)
            }
            var u = new o.WebGLGeometries(t, e, i);
            this.getAttributeBuffer = h, this.getWireframeAttribute = l, this.update = n
        }, o.WebGLProgram = function () {
            function t(t) {
                switch (t) {
                    case o.LinearEncoding:
                        return ["Linear", "( value )"];
                    case o.sRGBEncoding:
                        return ["sRGB", "( value )"];
                    case o.RGBEEncoding:
                        return ["RGBE", "( value )"];
                    case o.RGBM7Encoding:
                        return ["RGBM", "( value, 7.0 )"];
                    case o.RGBM16Encoding:
                        return ["RGBM", "( value, 16.0 )"];
                    case o.RGBDEncoding:
                        return ["RGBD", "( value, 256.0 )"];
                    case o.GammaEncoding:
                        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                    default:
                        throw new Error("unsupported encoding: " + t)
                }
            }

            function e(e, i) {
                var n = t(i);
                return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
            }

            function i(e, i) {
                var n = t(i);
                return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
            }

            function n(t, e) {
                var i;
                switch (e) {
                    case o.LinearToneMapping:
                        i = "Linear";
                        break;
                    case o.ReinhardToneMapping:
                        i = "Reinhard";
                        break;
                    case o.Uncharted2ToneMapping:
                        i = "Uncharted2";
                        break;
                    case o.CineonToneMapping:
                        i = "OptimizedCineon";
                        break;
                    default:
                        throw new Error("unsupported toneMapping: " + e)
                }
                return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
            }

            function r(t, e, i) {
                t = t || {};
                var n = [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
                return n.filter(l).join("\n")
            }

            function s(t) {
                var e = [];
                for (var i in t) {
                    var n = t[i];
                    n !== !1 && e.push("#define " + i + " " + n)
                }
                return e.join("\n")
            }

            function a(t, e, i) {
                for (var n = {}, r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), o = 0; o < r; o++) {
                    var s = t.getActiveUniform(e, o),
                        a = s.name,
                        h = t.getUniformLocation(e, a),
                        l = f.exec(a);
                    if (l) {
                        var c = l[1],
                            u = l[2],
                            p = n[c];
                        p || (p = n[c] = {}), p[u] = h
                    } else if (l = m.exec(a)) {
                        var d = l[1],
                            v = l[2],
                            y = l[3],
                            _ = n[d];
                        _ || (_ = n[d] = []);
                        var x = _[v];
                        x || (x = _[v] = {}), x[y] = h
                    } else if (l = g.exec(a)) {
                        var d = l[1];
                        n[d] = h
                    } else n[a] = h
                }
                return n
            }

            function h(t, e, i) {
                for (var n = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), o = 0; o < r; o++) {
                    var s = t.getActiveAttrib(e, o),
                        a = s.name;
                    n[a] = t.getAttribLocation(e, a)
                }
                return n
            }

            function l(t) {
                return "" !== t
            }

            function c(t, e) {
                return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
            }

            function u(t) {
                function e(t, e) {
                    var i = o.ShaderChunk[e];
                    if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
                    return u(i)
                }
                var i = /#include +<([\w\d.]+)>/g;
                return t.replace(i, e)
            }

            function p(t) {
                function e(t, e, i, n) {
                    for (var r = "", o = parseInt(e) ; o < parseInt(i) ; o++) r += n.replace(/\[ i \]/g, "[ " + o + " ]");
                    return r
                }
                var i = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
                return t.replace(i, e)
            }
            var d = 0,
                f = /^([\w\d_]+)\.([\w\d_]+)$/,
                m = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/,
                g = /^([\w\d_]+)\[0\]$/;
            return function (t, f, m, g) {
                var v = t.context,
                    y = m.extensions,
                    _ = m.defines,
                    x = m.__webglShader.vertexShader,
                    b = m.__webglShader.fragmentShader,
                    w = "SHADOWMAP_TYPE_BASIC";
                g.shadowMapType === o.PCFShadowMap ? w = "SHADOWMAP_TYPE_PCF" : g.shadowMapType === o.PCFSoftShadowMap && (w = "SHADOWMAP_TYPE_PCF_SOFT");
                var S = "ENVMAP_TYPE_CUBE",
                    T = "ENVMAP_MODE_REFLECTION",
                    M = "ENVMAP_BLENDING_MULTIPLY";
                if (g.envMap) {
                    switch (m.envMap.mapping) {
                        case o.CubeReflectionMapping:
                        case o.CubeRefractionMapping:
                            S = "ENVMAP_TYPE_CUBE";
                            break;
                        case o.CubeUVReflectionMapping:
                        case o.CubeUVRefractionMapping:
                            S = "ENVMAP_TYPE_CUBE_UV";
                            break;
                        case o.EquirectangularReflectionMapping:
                        case o.EquirectangularRefractionMapping:
                            S = "ENVMAP_TYPE_EQUIREC";
                            break;
                        case o.SphericalReflectionMapping:
                            S = "ENVMAP_TYPE_SPHERE"
                    }
                    switch (m.envMap.mapping) {
                        case o.CubeRefractionMapping:
                        case o.EquirectangularRefractionMapping:
                            T = "ENVMAP_MODE_REFRACTION"
                    }
                    switch (m.combine) {
                        case o.MultiplyOperation:
                            M = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case o.MixOperation:
                            M = "ENVMAP_BLENDING_MIX";
                            break;
                        case o.AddOperation:
                            M = "ENVMAP_BLENDING_ADD"
                    }
                }
                var E, A, C = t.gammaFactor > 0 ? t.gammaFactor : 1,
                    L = r(y, g, t.extensions),
                    R = s(_),
                    P = v.createProgram();
                m instanceof o.RawShaderMaterial ? (E = "", A = "") : (E = ["precision " + g.precision + " float;", "precision " + g.precision + " int;", "#define SHADER_NAME " + m.__webglShader.name, R, g.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + C, "#define MAX_BONES " + g.maxBones, g.map ? "#define USE_MAP" : "", g.envMap ? "#define USE_ENVMAP" : "", g.envMap ? "#define " + T : "", g.lightMap ? "#define USE_LIGHTMAP" : "", g.aoMap ? "#define USE_AOMAP" : "", g.emissiveMap ? "#define USE_EMISSIVEMAP" : "", g.bumpMap ? "#define USE_BUMPMAP" : "", g.normalMap ? "#define USE_NORMALMAP" : "", g.displacementMap && g.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", g.specularMap ? "#define USE_SPECULARMAP" : "", g.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", g.metalnessMap ? "#define USE_METALNESSMAP" : "", g.alphaMap ? "#define USE_ALPHAMAP" : "", g.vertexColors ? "#define USE_COLOR" : "", g.flatShading ? "#define FLAT_SHADED" : "", g.skinning ? "#define USE_SKINNING" : "", g.useVertexTexture ? "#define BONE_TEXTURE" : "", g.morphTargets ? "#define USE_MORPHTARGETS" : "", g.morphNormals && g.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", g.doubleSided ? "#define DOUBLE_SIDED" : "", g.flipSided ? "#define FLIP_SIDED" : "", g.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", g.shadowMapEnabled ? "#define " + w : "", g.pointLightShadows > 0 ? "#define POINT_LIGHT_SHADOWS" : "", g.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", g.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", g.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(l).join("\n"), A = [L, "precision " + g.precision + " float;", "precision " + g.precision + " int;", "#define SHADER_NAME " + m.__webglShader.name, R, g.alphaTest ? "#define ALPHATEST " + g.alphaTest : "", "#define GAMMA_FACTOR " + C, g.useFog && g.fog ? "#define USE_FOG" : "", g.useFog && g.fogExp ? "#define FOG_EXP2" : "", g.map ? "#define USE_MAP" : "", g.envMap ? "#define USE_ENVMAP" : "", g.envMap ? "#define " + S : "", g.envMap ? "#define " + T : "", g.envMap ? "#define " + M : "", g.lightMap ? "#define USE_LIGHTMAP" : "", g.aoMap ? "#define USE_AOMAP" : "", g.emissiveMap ? "#define USE_EMISSIVEMAP" : "", g.bumpMap ? "#define USE_BUMPMAP" : "", g.normalMap ? "#define USE_NORMALMAP" : "", g.specularMap ? "#define USE_SPECULARMAP" : "", g.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", g.metalnessMap ? "#define USE_METALNESSMAP" : "", g.alphaMap ? "#define USE_ALPHAMAP" : "", g.vertexColors ? "#define USE_COLOR" : "", g.flatShading ? "#define FLAT_SHADED" : "", g.doubleSided ? "#define DOUBLE_SIDED" : "", g.flipSided ? "#define FLIP_SIDED" : "", g.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", g.shadowMapEnabled ? "#define " + w : "", g.pointLightShadows > 0 ? "#define POINT_LIGHT_SHADOWS" : "", g.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", g.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", g.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", g.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", g.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", g.toneMapping !== o.NoToneMapping ? "#define TONE_MAPPING" : "", g.toneMapping !== o.NoToneMapping ? o.ShaderChunk.tonemapping_pars_fragment : "", g.toneMapping !== o.NoToneMapping ? n("toneMapping", g.toneMapping) : "", g.outputEncoding || g.mapEncoding || g.envMapEncoding || g.emissiveMapEncoding ? o.ShaderChunk.encodings_pars_fragment : "", g.mapEncoding ? e("mapTexelToLinear", g.mapEncoding) : "", g.envMapEncoding ? e("envMapTexelToLinear", g.envMapEncoding) : "", g.emissiveMapEncoding ? e("emissiveMapTexelToLinear", g.emissiveMapEncoding) : "", g.outputEncoding ? i("linearToOutputTexel", g.outputEncoding) : "", "\n"].filter(l).join("\n")), x = u(x, g), x = c(x, g), b = u(b, g), b = c(b, g), m instanceof o.ShaderMaterial == !1 && (x = p(x), b = p(b));
                var O = E + x,
                    I = A + b,
                    D = o.WebGLShader(v, v.VERTEX_SHADER, O),
                    B = o.WebGLShader(v, v.FRAGMENT_SHADER, I);
                v.attachShader(P, D), v.attachShader(P, B), void 0 !== m.index0AttributeName ? v.bindAttribLocation(P, 0, m.index0AttributeName) : g.morphTargets === !0 && v.bindAttribLocation(P, 0, "position"), v.linkProgram(P);
                var k = v.getProgramInfoLog(P),
                    F = v.getShaderInfoLog(D),
                    N = v.getShaderInfoLog(B),
                    U = !0,
                    G = !0;
                v.getProgramParameter(P, v.LINK_STATUS) === !1 ? U = !1 : "" !== k || "" !== F && "" !== N || (G = !1), G && (this.diagnostics = {
                    runnable: U,
                    material: m,
                    programLog: k,
                    vertexShader: {
                        log: F,
                        prefix: E
                    },
                    fragmentShader: {
                        log: N,
                        prefix: A
                    }
                }), v.deleteShader(D), v.deleteShader(B);
                var z;
                this.getUniforms = function () {
                    return void 0 === z && (z = a(v, P)), z
                };
                var V;
                return this.getAttributes = function () {
                    return void 0 === V && (V = h(v, P)), V
                }, this.destroy = function () {
                    v.deleteProgram(P), this.program = void 0
                }, Object.defineProperties(this, {
                    uniforms: {
                        get: function () {
                            return this.getUniforms()
                        }
                    },
                    attributes: {
                        get: function () {
                            return this.getAttributes()
                        }
                    }
                }), this.id = d++, this.code = f, this.usedTimes = 1, this.program = P, this.vertexShader = D, this.fragmentShader = B, this
            }
        }(), o.WebGLPrograms = function (t, e) {
            function i(t) {
                if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture) return 1024;
                var i = e.maxVertexUniforms,
                    n = Math.floor((i - 20) / 4),
                    r = n;
                return void 0 !== t && t instanceof o.SkinnedMesh && (r = Math.min(t.skeleton.bones.length, r), r < t.skeleton.bones.length), r
            }

            function n(t, e) {
                var i;
                return t ? t instanceof o.Texture ? i = t.encoding : t instanceof o.WebGLRenderTarget && (i = t.texture.encoding) : i = o.LinearEncoding, i === o.LinearEncoding && e && (i = o.GammaEncoding), i
            }
            var r = [],
                s = {
                    MeshDepthMaterial: "depth",
                    MeshNormalMaterial: "normal",
                    MeshBasicMaterial: "basic",
                    MeshLambertMaterial: "lambert",
                    MeshPhongMaterial: "phong",
                    MeshStandardMaterial: "standard",
                    LineBasicMaterial: "basic",
                    LineDashedMaterial: "dashed",
                    PointsMaterial: "points"
                },
                a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "pointLightShadows", "toneMapping", "physicallyCorrectLights", "shadowMapType", "alphaTest", "doubleSided", "flipSided"];
            this.getParameters = function (r, a, h, l) {
                var c = s[r.type],
                    u = i(l),
                    p = t.getPrecision();
                null !== r.precision && (p = e.getMaxPrecision(r.precision), p !== r.precision);
                var d = {
                    shaderID: c,
                    precision: p,
                    supportsVertexTextures: e.vertexTextures,
                    outputEncoding: n(t.getCurrentRenderTarget(), t.gammaOutput),
                    map: !!r.map,
                    mapEncoding: n(r.map, t.gammaInput),
                    envMap: !!r.envMap,
                    envMapMode: r.envMap && r.envMap.mapping,
                    envMapEncoding: n(r.envMap, t.gammaInput),
                    envMapCubeUV: !!r.envMap && (r.envMap.mapping === o.CubeUVReflectionMapping || r.envMap.mapping === o.CubeUVRefractionMapping),
                    lightMap: !!r.lightMap,
                    aoMap: !!r.aoMap,
                    emissiveMap: !!r.emissiveMap,
                    emissiveMapEncoding: n(r.emissiveMap, t.gammaInput),
                    bumpMap: !!r.bumpMap,
                    normalMap: !!r.normalMap,
                    displacementMap: !!r.displacementMap,
                    roughnessMap: !!r.roughnessMap,
                    metalnessMap: !!r.metalnessMap,
                    specularMap: !!r.specularMap,
                    alphaMap: !!r.alphaMap,
                    combine: r.combine,
                    vertexColors: r.vertexColors,
                    fog: h,
                    useFog: r.fog,
                    fogExp: h instanceof o.FogExp2,
                    flatShading: r.shading === o.FlatShading,
                    sizeAttenuation: r.sizeAttenuation,
                    logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                    skinning: r.skinning,
                    maxBones: u,
                    useVertexTexture: e.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture,
                    morphTargets: r.morphTargets,
                    morphNormals: r.morphNormals,
                    maxMorphTargets: t.maxMorphTargets,
                    maxMorphNormals: t.maxMorphNormals,
                    numDirLights: a.directional.length,
                    numPointLights: a.point.length,
                    numSpotLights: a.spot.length,
                    numHemiLights: a.hemi.length,
                    pointLightShadows: a.shadowsPointLight,
                    shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && a.shadows.length > 0,
                    shadowMapType: t.shadowMap.type,
                    toneMapping: t.toneMapping,
                    physicallyCorrectLights: t.physicallyCorrectLights,
                    premultipliedAlpha: r.premultipliedAlpha,
                    alphaTest: r.alphaTest,
                    doubleSided: r.side === o.DoubleSide,
                    flipSided: r.side === o.BackSide
                };
                return d
            }, this.getProgramCode = function (t, e) {
                var i = [];
                if (e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
                    for (var n in t.defines) i.push(n), i.push(t.defines[n]);
                for (var r = 0; r < a.length; r++) {
                    var o = a[r];
                    i.push(o), i.push(e[o])
                }
                return i.join()
            }, this.acquireProgram = function (e, i, n) {
                for (var s, a = 0, h = r.length; a < h; a++) {
                    var l = r[a];
                    if (l.code === n) {
                        s = l, ++s.usedTimes;
                        break
                    }
                }
                return void 0 === s && (s = new o.WebGLProgram(t, n, e, i), r.push(s)), s
            }, this.releaseProgram = function (t) {
                if (0 === --t.usedTimes) {
                    var e = r.indexOf(t);
                    r[e] = r[r.length - 1], r.pop(), t.destroy()
                }
            }, this.programs = r
        }, o.WebGLProperties = function () {
            var t = {};
            this.get = function (e) {
                var i = e.uuid,
                    n = t[i];
                return void 0 === n && (n = {}, t[i] = n), n
            }, this["delete"] = function (e) {
                delete t[e.uuid]
            }, this.clear = function () {
                t = {}
            }
        }, o.WebGLShader = function () {
            return function (t, e, i) {
                var n = t.createShader(e);
                return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) === !1, "" !== t.getShaderInfoLog(n), n
            }
        }(), o.WebGLShadowMap = function (t, e, i) {
            function n(t, e, i, n) {
                var r = t.geometry,
                    s = null,
                    a = v,
                    h = t.customDepthMaterial;
                if (i && (a = y, h = t.customDistanceMaterial), h) s = h;
                else {
                    var l = void 0 !== r.morphTargets && r.morphTargets.length > 0 && e.morphTargets,
                        c = t instanceof o.SkinnedMesh && e.skinning,
                        u = 0;
                    l && (u |= f), c && (u |= m), s = a[u]
                }
                return s.visible = e.visible, s.wireframe = e.wireframe, s.wireframeLinewidth = e.wireframeLinewidth, i && void 0 !== s.uniforms.lightPos && s.uniforms.lightPos.value.copy(n), s
            }

            function r(t, e, i) {
                if (t.visible !== !1) {
                    if (t.layers.test(e.layers) && (t instanceof o.Mesh || t instanceof o.Line || t instanceof o.Points) && t.castShadow && (t.frustumCulled === !1 || h.intersectsObject(t) === !0)) {
                        var n = t.material;
                        n.visible === !0 && (t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), d.push(t))
                    }
                    for (var s = t.children, a = 0, l = s.length; a < l; a++) r(s[a], e, i)
                }
            }
            for (var s = t.context, a = t.state, h = new o.Frustum, l = new o.Matrix4, c = new o.Vector2, u = new o.Vector3, p = new o.Vector3, d = [], f = 1, m = 2, g = (f | m) + 1, v = new Array(g), y = new Array(g), _ = [new o.Vector3(1, 0, 0), new o.Vector3((-1), 0, 0), new o.Vector3(0, 0, 1), new o.Vector3(0, 0, (-1)), new o.Vector3(0, 1, 0), new o.Vector3(0, (-1), 0)], x = [new o.Vector3(0, 1, 0), new o.Vector3(0, 1, 0), new o.Vector3(0, 1, 0), new o.Vector3(0, 1, 0), new o.Vector3(0, 0, 1), new o.Vector3(0, 0, (-1))], b = [new o.Vector4, new o.Vector4, new o.Vector4, new o.Vector4, new o.Vector4, new o.Vector4], w = o.ShaderLib.depthRGBA, S = o.UniformsUtils.clone(w.uniforms), T = o.ShaderLib.distanceRGBA, M = o.UniformsUtils.clone(T.uniforms), E = 0; E !== g; ++E) {
                var A = 0 !== (E & f),
                    C = 0 !== (E & m),
                    L = new o.ShaderMaterial({
                        uniforms: S,
                        vertexShader: w.vertexShader,
                        fragmentShader: w.fragmentShader,
                        morphTargets: A,
                        skinning: C
                    });
                v[E] = L;
                var R = new o.ShaderMaterial({
                    defines: {
                        USE_SHADOWMAP: ""
                    },
                    uniforms: M,
                    vertexShader: T.vertexShader,
                    fragmentShader: T.fragmentShader,
                    morphTargets: A,
                    skinning: C
                });
                y[E] = R
            }
            var P = this;
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = o.PCFShadowMap, this.cullFace = o.CullFaceFront, this.render = function (f, m) {
                var g, v, y = e.shadows;
                if (0 !== y.length && P.enabled !== !1 && (P.autoUpdate !== !1 || P.needsUpdate !== !1)) {
                    a.clearColor(1, 1, 1, 1), a.disable(s.BLEND), a.enable(s.CULL_FACE), s.frontFace(s.CCW), s.cullFace(P.cullFace === o.CullFaceFront ? s.FRONT : s.BACK), a.setDepthTest(!0), a.setScissorTest(!1);
                    for (var w = 0, S = y.length; w < S; w++) {
                        var T = y[w],
                            M = T.shadow,
                            E = M.camera;
                        if (c.copy(M.mapSize), T instanceof o.PointLight) {
                            g = 6, v = !0;
                            var A = c.x,
                                C = c.y;
                            b[0].set(2 * A, C, A, C), b[1].set(0, C, A, C), b[2].set(3 * A, C, A, C), b[3].set(A, C, A, C), b[4].set(3 * A, 0, A, C), b[5].set(A, 0, A, C), c.x *= 4, c.y *= 2
                        } else g = 1, v = !1; if (null === M.map) {
                            var L = {
                                minFilter: o.NearestFilter,
                                magFilter: o.NearestFilter,
                                format: o.RGBAFormat
                            };
                            M.map = new o.WebGLRenderTarget(c.x, c.y, L), T instanceof o.SpotLight && (E.aspect = c.x / c.y), E.updateProjectionMatrix()
                        }
                        var R = M.map,
                            O = M.matrix;
                        p.setFromMatrixPosition(T.matrixWorld), E.position.copy(p), t.setRenderTarget(R), t.clear();
                        for (var I = 0; I < g; I++) {
                            if (v) {
                                u.copy(E.position), u.add(_[I]), E.up.copy(x[I]), E.lookAt(u);
                                var D = b[I];
                                a.viewport(D)
                            } else u.setFromMatrixPosition(T.target.matrixWorld), E.lookAt(u);
                            E.updateMatrixWorld(), E.matrixWorldInverse.getInverse(E.matrixWorld), O.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), O.multiply(E.projectionMatrix), O.multiply(E.matrixWorldInverse), l.multiplyMatrices(E.projectionMatrix, E.matrixWorldInverse),
                                h.setFromMatrix(l), d.length = 0, r(f, m, E);
                            for (var B = 0, k = d.length; B < k; B++) {
                                var F = d[B],
                                    N = i.update(F),
                                    U = F.material;
                                if (U instanceof o.MultiMaterial)
                                    for (var G = N.groups, z = U.materials, V = 0, j = G.length; V < j; V++) {
                                        var H = G[V],
                                            W = z[H.materialIndex];
                                        if (W.visible === !0) {
                                            var X = n(F, W, v, p);
                                            t.renderBufferDirect(E, null, N, X, F, H)
                                        }
                                    } else {
                                    var X = n(F, U, v, p);
                                    t.renderBufferDirect(E, null, N, X, F, null)
                                }
                            }
                        }
                    }
                    var Y = t.getClearColor(),
                        q = t.getClearAlpha();
                    t.setClearColor(Y, q), a.enable(s.BLEND), P.cullFace === o.CullFaceFront && s.cullFace(s.BACK), P.needsUpdate = !1
                }
            }
        }, o.WebGLState = function (t, e, i) {
            var n = this,
                r = new o.Vector4,
                s = new Uint8Array(16),
                a = new Uint8Array(16),
                h = new Uint8Array(16),
                l = {},
                c = null,
                u = null,
                p = null,
                d = null,
                f = null,
                m = null,
                g = null,
                v = null,
                y = !1,
                _ = null,
                x = null,
                b = null,
                w = null,
                S = null,
                T = null,
                M = null,
                E = null,
                A = null,
                C = null,
                L = null,
                R = null,
                P = null,
                O = null,
                I = null,
                D = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                B = void 0,
                k = {},
                F = new o.Vector4,
                N = null,
                U = null,
                G = new o.Vector4,
                z = new o.Vector4,
                V = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, V), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGB, 1, 1, 0, t.RGB, t.UNSIGNED_BYTE, new Uint8Array(3)), this.init = function () {
                this.clearColor(0, 0, 0, 1), this.clearDepth(1), this.clearStencil(0), this.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.frontFace(t.CCW), t.cullFace(t.BACK), this.enable(t.CULL_FACE), this.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA)
            }, this.initAttributes = function () {
                for (var t = 0, e = s.length; t < e; t++) s[t] = 0
            }, this.enableAttribute = function (i) {
                if (s[i] = 1, 0 === a[i] && (t.enableVertexAttribArray(i), a[i] = 1), 0 !== h[i]) {
                    var n = e.get("ANGLE_instanced_arrays");
                    n.vertexAttribDivisorANGLE(i, 0), h[i] = 0
                }
            }, this.enableAttributeAndDivisor = function (e, i, n) {
                s[e] = 1, 0 === a[e] && (t.enableVertexAttribArray(e), a[e] = 1), h[e] !== i && (n.vertexAttribDivisorANGLE(e, i), h[e] = i)
            }, this.disableUnusedAttributes = function () {
                for (var e = 0, i = a.length; e < i; e++) a[e] !== s[e] && (t.disableVertexAttribArray(e), a[e] = 0)
            }, this.enable = function (e) {
                l[e] !== !0 && (t.enable(e), l[e] = !0)
            }, this.disable = function (e) {
                l[e] !== !1 && (t.disable(e), l[e] = !1)
            }, this.getCompressedTextureFormats = function () {
                if (null === c && (c = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                    for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) c.push(i[n]);
                return c
            }, this.setBlending = function (e, n, r, s, a, h, l, c) {
                e === o.NoBlending ? this.disable(t.BLEND) : this.enable(t.BLEND), e === u && c === y || (e === o.AdditiveBlending ? c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === o.SubtractiveBlending ? c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === o.MultiplyBlending ? c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.SRC_COLOR, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : c ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), u = e, y = c), e === o.CustomBlending ? (a = a || n, h = h || r, l = l || s, n === p && a === m || (t.blendEquationSeparate(i(n), i(a)), p = n, m = a), r === d && s === f && h === g && l === v || (t.blendFuncSeparate(i(r), i(s), i(h), i(l)), d = r, f = s, g = h, v = l)) : (p = null, d = null, f = null, m = null, g = null, v = null)
            }, this.setDepthFunc = function (e) {
                if (_ !== e) {
                    if (e) switch (e) {
                        case o.NeverDepth:
                            t.depthFunc(t.NEVER);
                            break;
                        case o.AlwaysDepth:
                            t.depthFunc(t.ALWAYS);
                            break;
                        case o.LessDepth:
                            t.depthFunc(t.LESS);
                            break;
                        case o.LessEqualDepth:
                            t.depthFunc(t.LEQUAL);
                            break;
                        case o.EqualDepth:
                            t.depthFunc(t.EQUAL);
                            break;
                        case o.GreaterEqualDepth:
                            t.depthFunc(t.GEQUAL);
                            break;
                        case o.GreaterDepth:
                            t.depthFunc(t.GREATER);
                            break;
                        case o.NotEqualDepth:
                            t.depthFunc(t.NOTEQUAL);
                            break;
                        default:
                            t.depthFunc(t.LEQUAL)
                    } else t.depthFunc(t.LEQUAL);
                    _ = e
                }
            }, this.setDepthTest = function (e) {
                e ? this.enable(t.DEPTH_TEST) : this.disable(t.DEPTH_TEST)
            }, this.setDepthWrite = function (e) {
                x !== e && (t.depthMask(e), x = e)
            }, this.setColorWrite = function (e) {
                b !== e && (t.colorMask(e, e, e, e), b = e)
            }, this.setStencilFunc = function (e, i, n) {
                S === e && T === i && M === n || (t.stencilFunc(e, i, n), S = e, T = i, M = n)
            }, this.setStencilOp = function (e, i, n) {
                E === e && A === i && C === n || (t.stencilOp(e, i, n), E = e, A = i, C = n)
            }, this.setStencilTest = function (e) {
                e ? this.enable(t.STENCIL_TEST) : this.disable(t.STENCIL_TEST)
            }, this.setStencilWrite = function (e) {
                w !== e && (t.stencilMask(e), w = e)
            }, this.setFlipSided = function (e) {
                L !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), L = e)
            }, this.setLineWidth = function (e) {
                e !== R && (t.lineWidth(e), R = e)
            }, this.setPolygonOffset = function (e, i, n) {
                e ? this.enable(t.POLYGON_OFFSET_FILL) : this.disable(t.POLYGON_OFFSET_FILL), !e || P === i && O === n || (t.polygonOffset(i, n), P = i, O = n)
            }, this.getScissorTest = function () {
                return I
            }, this.setScissorTest = function (e) {
                I = e, e ? this.enable(t.SCISSOR_TEST) : this.disable(t.SCISSOR_TEST)
            }, this.activeTexture = function (e) {
                void 0 === e && (e = t.TEXTURE0 + D - 1), B !== e && (t.activeTexture(e), B = e)
            }, this.bindTexture = function (e, i) {
                void 0 === B && n.activeTexture();
                var r = k[B];
                void 0 === r && (r = {
                    type: void 0,
                    texture: void 0
                }, k[B] = r), r.type === e && r.texture === i || (t.bindTexture(e, i || V), r.type = e, r.texture = i)
            }, this.compressedTexImage2D = function () {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (e) { }
            }, this.texImage2D = function () {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (e) { }
            }, this.clearColor = function (e, i, n, o) {
                r.set(e, i, n, o), F.equals(r) === !1 && (t.clearColor(e, i, n, o), F.copy(r))
            }, this.clearDepth = function (e) {
                N !== e && (t.clearDepth(e), N = e)
            }, this.clearStencil = function (e) {
                U !== e && (t.clearStencil(e), U = e)
            }, this.scissor = function (e) {
                G.equals(e) === !1 && (t.scissor(e.x, e.y, e.z, e.w), G.copy(e))
            }, this.viewport = function (e) {
                z.equals(e) === !1 && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e))
            }, this.reset = function () {
                for (var e = 0; e < a.length; e++) 1 === a[e] && (t.disableVertexAttribArray(e), a[e] = 0);
                l = {}, c = null, B = void 0, k = {}, u = null, b = null, x = null, w = null, L = null
            }
        }, o.LensFlarePlugin = function (t, e) {
            function i() {
                var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                    e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                r = d.createBuffer(), s = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, r), d.bufferData(d.ARRAY_BUFFER, t, d.STATIC_DRAW), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, s), d.bufferData(d.ELEMENT_ARRAY_BUFFER, e, d.STATIC_DRAW), u = d.createTexture(), p = d.createTexture(), f.bindTexture(d.TEXTURE_2D, u), d.texImage2D(d.TEXTURE_2D, 0, d.RGB, 16, 16, 0, d.RGB, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), f.bindTexture(d.TEXTURE_2D, p), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 16, 16, 0, d.RGBA, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), c = d.getParameter(d.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
                var i;
                i = c ? {
                    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                } : {
                    vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                }, a = n(i), h = {
                    vertex: d.getAttribLocation(a, "position"),
                    uv: d.getAttribLocation(a, "uv")
                }, l = {
                    renderType: d.getUniformLocation(a, "renderType"),
                    map: d.getUniformLocation(a, "map"),
                    occlusionMap: d.getUniformLocation(a, "occlusionMap"),
                    opacity: d.getUniformLocation(a, "opacity"),
                    color: d.getUniformLocation(a, "color"),
                    scale: d.getUniformLocation(a, "scale"),
                    rotation: d.getUniformLocation(a, "rotation"),
                    screenPosition: d.getUniformLocation(a, "screenPosition")
                }
            }

            function n(e) {
                var i = d.createProgram(),
                    n = d.createShader(d.FRAGMENT_SHADER),
                    r = d.createShader(d.VERTEX_SHADER),
                    o = "precision " + t.getPrecision() + " float;\n";
                return d.shaderSource(n, o + e.fragmentShader), d.shaderSource(r, o + e.vertexShader), d.compileShader(n), d.compileShader(r), d.attachShader(i, n), d.attachShader(i, r), d.linkProgram(i), i
            }
            var r, s, a, h, l, c, u, p, d = t.context,
                f = t.state;
            this.render = function (n, m, g) {
                if (0 !== e.length) {
                    var v = new o.Vector3,
                        y = g.w / g.z,
                        _ = .5 * g.z,
                        x = .5 * g.w,
                        b = 16 / g.w,
                        w = new o.Vector2(b * y, b),
                        S = new o.Vector3(1, 1, 0),
                        T = new o.Vector2(1, 1);
                    void 0 === a && i(), d.useProgram(a), f.initAttributes(), f.enableAttribute(h.vertex), f.enableAttribute(h.uv), f.disableUnusedAttributes(), d.uniform1i(l.occlusionMap, 0), d.uniform1i(l.map, 1), d.bindBuffer(d.ARRAY_BUFFER, r), d.vertexAttribPointer(h.vertex, 2, d.FLOAT, !1, 16, 0), d.vertexAttribPointer(h.uv, 2, d.FLOAT, !1, 16, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, s), f.disable(d.CULL_FACE), f.setDepthWrite(!1);
                    for (var M = 0, E = e.length; M < E; M++) {
                        b = 16 / g.w, w.set(b * y, b);
                        var A = e[M];
                        if (v.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), v.applyMatrix4(m.matrixWorldInverse), v.applyProjection(m.projectionMatrix), S.copy(v), T.x = S.x * _ + _, T.y = S.y * x + x, c || T.x > 0 && T.x < g.z && T.y > 0 && T.y < g.w) {
                            f.activeTexture(d.TEXTURE0), f.bindTexture(d.TEXTURE_2D, null), f.activeTexture(d.TEXTURE1), f.bindTexture(d.TEXTURE_2D, u), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGB, g.x + T.x - 8, g.y + T.y - 8, 16, 16, 0), d.uniform1i(l.renderType, 0), d.uniform2f(l.scale, w.x, w.y), d.uniform3f(l.screenPosition, S.x, S.y, S.z), f.disable(d.BLEND), f.enable(d.DEPTH_TEST), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), f.activeTexture(d.TEXTURE0), f.bindTexture(d.TEXTURE_2D, p), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGBA, g.x + T.x - 8, g.y + T.y - 8, 16, 16, 0), d.uniform1i(l.renderType, 1), f.disable(d.DEPTH_TEST), f.activeTexture(d.TEXTURE1), f.bindTexture(d.TEXTURE_2D, u), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), A.positionScreen.copy(S), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), d.uniform1i(l.renderType, 2), f.enable(d.BLEND);
                            for (var C = 0, L = A.lensFlares.length; C < L; C++) {
                                var R = A.lensFlares[C];
                                R.opacity > .001 && R.scale > .001 && (S.x = R.x, S.y = R.y, S.z = R.z, b = R.size * R.scale / g.w, w.x = b * y, w.y = b, d.uniform3f(l.screenPosition, S.x, S.y, S.z), d.uniform2f(l.scale, w.x, w.y), d.uniform1f(l.rotation, R.rotation), d.uniform1f(l.opacity, R.opacity), d.uniform3f(l.color, R.color.r, R.color.g, R.color.b), f.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst), t.setTexture(R.texture, 1), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0))
                            }
                        }
                    }
                    f.enable(d.CULL_FACE), f.enable(d.DEPTH_TEST), f.setDepthWrite(!0), t.resetGLState()
                }
            }
        }, o.SpritePlugin = function (t, e) {
            function i() {
                var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                    e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                s = p.createBuffer(), a = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, s), p.bufferData(p.ARRAY_BUFFER, t, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), p.bufferData(p.ELEMENT_ARRAY_BUFFER, e, p.STATIC_DRAW), h = n(), l = {
                    position: p.getAttribLocation(h, "position"),
                    uv: p.getAttribLocation(h, "uv")
                }, c = {
                    uvOffset: p.getUniformLocation(h, "uvOffset"),
                    uvScale: p.getUniformLocation(h, "uvScale"),
                    rotation: p.getUniformLocation(h, "rotation"),
                    scale: p.getUniformLocation(h, "scale"),
                    color: p.getUniformLocation(h, "color"),
                    map: p.getUniformLocation(h, "map"),
                    opacity: p.getUniformLocation(h, "opacity"),
                    modelViewMatrix: p.getUniformLocation(h, "modelViewMatrix"),
                    projectionMatrix: p.getUniformLocation(h, "projectionMatrix"),
                    fogType: p.getUniformLocation(h, "fogType"),
                    fogDensity: p.getUniformLocation(h, "fogDensity"),
                    fogNear: p.getUniformLocation(h, "fogNear"),
                    fogFar: p.getUniformLocation(h, "fogFar"),
                    fogColor: p.getUniformLocation(h, "fogColor"),
                    alphaTest: p.getUniformLocation(h, "alphaTest")
                };
                var i = document.createElement("canvas");
                i.width = 8, i.height = 8;
                var r = i.getContext("2d");
                r.fillStyle = "white", r.fillRect(0, 0, 8, 8), u = new o.Texture(i), u.needsUpdate = !0
            }

            function n() {
                var e = p.createProgram(),
                    i = p.createShader(p.VERTEX_SHADER),
                    n = p.createShader(p.FRAGMENT_SHADER);
                return p.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), p.shaderSource(n, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), p.compileShader(i), p.compileShader(n), p.attachShader(e, i), p.attachShader(e, n), p.linkProgram(e), e
            }

            function r(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
            }
            var s, a, h, l, c, u, p = t.context,
                d = t.state,
                f = new o.Vector3,
                m = new o.Quaternion,
                g = new o.Vector3;
            this.render = function (n, v) {
                if (0 !== e.length) {
                    void 0 === h && i(), p.useProgram(h), d.initAttributes(), d.enableAttribute(l.position), d.enableAttribute(l.uv), d.disableUnusedAttributes(), d.disable(p.CULL_FACE), d.enable(p.BLEND), p.bindBuffer(p.ARRAY_BUFFER, s), p.vertexAttribPointer(l.position, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(l.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), p.uniformMatrix4fv(c.projectionMatrix, !1, v.projectionMatrix.elements), d.activeTexture(p.TEXTURE0), p.uniform1i(c.map, 0);
                    var y = 0,
                        _ = 0,
                        x = n.fog;
                    x ? (p.uniform3f(c.fogColor, x.color.r, x.color.g, x.color.b), x instanceof o.Fog ? (p.uniform1f(c.fogNear, x.near), p.uniform1f(c.fogFar, x.far), p.uniform1i(c.fogType, 1), y = 1, _ = 1) : x instanceof o.FogExp2 && (p.uniform1f(c.fogDensity, x.density), p.uniform1i(c.fogType, 2), y = 2, _ = 2)) : (p.uniform1i(c.fogType, 0), y = 0, _ = 0);
                    for (var b = 0, w = e.length; b < w; b++) {
                        var S = e[b];
                        S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, S.matrixWorld), S.z = -S.modelViewMatrix.elements[14]
                    }
                    e.sort(r);
                    for (var T = [], b = 0, w = e.length; b < w; b++) {
                        var S = e[b],
                            M = S.material;
                        p.uniform1f(c.alphaTest, M.alphaTest), p.uniformMatrix4fv(c.modelViewMatrix, !1, S.modelViewMatrix.elements), S.matrixWorld.decompose(f, m, g), T[0] = g.x, T[1] = g.y;
                        var E = 0;
                        n.fog && M.fog && (E = _), y !== E && (p.uniform1i(c.fogType, E), y = E), null !== M.map ? (p.uniform2f(c.uvOffset, M.map.offset.x, M.map.offset.y), p.uniform2f(c.uvScale, M.map.repeat.x, M.map.repeat.y)) : (p.uniform2f(c.uvOffset, 0, 0), p.uniform2f(c.uvScale, 1, 1)), p.uniform1f(c.opacity, M.opacity), p.uniform3f(c.color, M.color.r, M.color.g, M.color.b), p.uniform1f(c.rotation, M.rotation), p.uniform2fv(c.scale, T), d.setBlending(M.blending, M.blendEquation, M.blendSrc, M.blendDst), d.setDepthTest(M.depthTest), d.setDepthWrite(M.depthWrite), M.map && M.map.image && M.map.image.width ? t.setTexture(M.map, 0) : t.setTexture(u, 0), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0)
                    }
                    d.enable(p.CULL_FACE), t.resetGLState()
                }
            }
        }, Object.defineProperties(o.Box2.prototype, {
            empty: {
                value: function () {
                    return this.isEmpty()
                }
            },
            isIntersectionBox: {
                value: function (t) {
                    return this.intersectsBox(t)
                }
            }
        }), Object.defineProperties(o.Box3.prototype, {
            empty: {
                value: function () {
                    return this.isEmpty()
                }
            },
            isIntersectionBox: {
                value: function (t) {
                    return this.intersectsBox(t)
                }
            },
            isIntersectionSphere: {
                value: function (t) {
                    return this.intersectsSphere(t)
                }
            }
        }), Object.defineProperties(o.Matrix3.prototype, {
            multiplyVector3: {
                value: function (t) {
                    return t.applyMatrix3(this)
                }
            },
            multiplyVector3Array: {
                value: function (t) {
                    return this.applyToVector3Array(t)
                }
            }
        }), Object.defineProperties(o.Matrix4.prototype, {
            extractPosition: {
                value: function (t) {
                    return this.copyPosition(t)
                }
            },
            setRotationFromQuaternion: {
                value: function (t) {
                    return this.makeRotationFromQuaternion(t)
                }
            },
            multiplyVector3: {
                value: function (t) {
                    return t.applyProjection(this)
                }
            },
            multiplyVector4: {
                value: function (t) {
                    return t.applyMatrix4(this)
                }
            },
            multiplyVector3Array: {
                value: function (t) {
                    return this.applyToVector3Array(t)
                }
            },
            rotateAxis: {
                value: function (t) {
                    t.transformDirection(this)
                }
            },
            crossVector: {
                value: function (t) {
                    return t.applyMatrix4(this)
                }
            },
            translate: {
                value: function (t) { }
            },
            rotateX: {
                value: function (t) { }
            },
            rotateY: {
                value: function (t) { }
            },
            rotateZ: {
                value: function (t) { }
            },
            rotateByAxis: {
                value: function (t, e) { }
            }
        }), Object.defineProperties(o.Plane.prototype, {
            isIntersectionLine: {
                value: function (t) {
                    return this.intersectsLine(t)
                }
            }
        }), Object.defineProperties(o.Quaternion.prototype, {
            multiplyVector3: {
                value: function (t) {
                    return t.applyQuaternion(this)
                }
            }
        }), Object.defineProperties(o.Ray.prototype, {
            isIntersectionBox: {
                value: function (t) {
                    return this.intersectsBox(t)
                }
            },
            isIntersectionPlane: {
                value: function (t) {
                    return this.intersectsPlane(t)
                }
            },
            isIntersectionSphere: {
                value: function (t) {
                    return this.intersectsSphere(t)
                }
            }
        }), Object.defineProperties(o.Vector3.prototype, {
            setEulerFromRotationMatrix: {
                value: function () { }
            },
            setEulerFromQuaternion: {
                value: function () { }
            },
            getPositionFromMatrix: {
                value: function (t) {
                    return this.setFromMatrixPosition(t)
                }
            },
            getScaleFromMatrix: {
                value: function (t) {
                    return this.setFromMatrixScale(t)
                }
            },
            getColumnFromMatrix: {
                value: function (t, e) {
                    return this.setFromMatrixColumn(t, e)
                }
            }
        }), o.Face4 = function (t, e, i, n, r, s, a) {
            return new o.Face3(t, e, i, r, s, a)
        }, o.Vertex = function (t, e, i) {
            return new o.Vector3(t, e, i)
        }, Object.defineProperties(o.Object3D.prototype, {
            eulerOrder: {
                get: function () {
                    return this.rotation.order
                },
                set: function (t) {
                    this.rotation.order = t
                }
            },
            getChildByName: {
                value: function (t) {
                    return this.getObjectByName(t)
                }
            },
            renderDepth: {
                set: function (t) { }
            },
            translate: {
                value: function (t, e) {
                    return this.translateOnAxis(e, t)
                }
            },
            useQuaternion: {
                get: function () { },
                set: function (t) { }
            }
        }), Object.defineProperties(o, {
            PointCloud: {
                value: function (t, e) {
                    return new o.Points(t, e)
                }
            },
            ParticleSystem: {
                value: function (t, e) {
                    return new o.Points(t, e)
                }
            }
        }), Object.defineProperties(o.Light.prototype, {
            onlyShadow: {
                set: function (t) { }
            },
            shadowCameraFov: {
                set: function (t) {
                    this.shadow.camera.fov = t
                }
            },
            shadowCameraLeft: {
                set: function (t) {
                    this.shadow.camera.left = t
                }
            },
            shadowCameraRight: {
                set: function (t) {
                    this.shadow.camera.right = t
                }
            },
            shadowCameraTop: {
                set: function (t) {
                    this.shadow.camera.top = t
                }
            },
            shadowCameraBottom: {
                set: function (t) {
                    this.shadow.camera.bottom = t
                }
            },
            shadowCameraNear: {
                set: function (t) {
                    this.shadow.camera.near = t
                }
            },
            shadowCameraFar: {
                set: function (t) {
                    this.shadow.camera.far = t
                }
            },
            shadowCameraVisible: {
                set: function (t) { }
            },
            shadowBias: {
                set: function (t) {
                    this.shadow.bias = t
                }
            },
            shadowDarkness: {
                set: function (t) { }
            },
            shadowMapWidth: {
                set: function (t) {
                    this.shadow.mapSize.width = t
                }
            },
            shadowMapHeight: {
                set: function (t) {
                    this.shadow.mapSize.height = t
                }
            }
        }), Object.defineProperties(o.BufferAttribute.prototype, {
            length: {
                get: function () {
                    return this.array.length
                }
            }
        }), Object.defineProperties(o.BufferGeometry.prototype, {
            drawcalls: {
                get: function () {
                    return this.groups
                }
            },
            offsets: {
                get: function () {
                    return this.groups
                }
            },
            addIndex: {
                value: function (t) {
                    this.setIndex(t)
                }
            },
            addDrawCall: {
                value: function (t, e, i) {
                    this.addGroup(t, e)
                }
            },
            clearDrawCalls: {
                value: function () {
                    this.clearGroups()
                }
            },
            computeTangents: {
                value: function () { }
            },
            computeOffsets: {
                value: function () { }
            }
        }), Object.defineProperties(o.Material.prototype, {
            wrapAround: {
                get: function () { },
                set: function (t) { }
            },
            wrapRGB: {
                get: function () {
                    return new o.Color
                }
            }
        }), Object.defineProperties(o, {
            PointCloudMaterial: {
                value: function (t) {
                    return new o.PointsMaterial(t)
                }
            },
            ParticleBasicMaterial: {
                value: function (t) {
                    return new o.PointsMaterial(t)
                }
            },
            ParticleSystemMaterial: {
                value: function (t) {
                    return new o.PointsMaterial(t)
                }
            }
        }), Object.defineProperties(o.MeshPhongMaterial.prototype, {
            metal: {
                get: function () {
                    return !1
                },
                set: function (t) { }
            }
        }), Object.defineProperties(o.ShaderMaterial.prototype, {
            derivatives: {
                get: function () {
                    return this.extensions.derivatives
                },
                set: function (t) {
                    this.extensions.derivatives = t
                }
            }
        }), Object.defineProperties(o.WebGLRenderer.prototype, {
            supportsFloatTextures: {
                value: function () {
                    return this.extensions.get("OES_texture_float")
                }
            },
            supportsHalfFloatTextures: {
                value: function () {
                    return this.extensions.get("OES_texture_half_float")
                }
            },
            supportsStandardDerivatives: {
                value: function () {
                    return this.extensions.get("OES_standard_derivatives")
                }
            },
            supportsCompressedTextureS3TC: {
                value: function () {
                    return this.extensions.get("WEBGL_compressed_texture_s3tc")
                }
            },
            supportsCompressedTexturePVRTC: {
                value: function () {
                    return this.extensions.get("WEBGL_compressed_texture_pvrtc")
                }
            },
            supportsBlendMinMax: {
                value: function () {
                    return this.extensions.get("EXT_blend_minmax")
                }
            },
            supportsVertexTextures: {
                value: function () {
                    return this.capabilities.vertexTextures
                }
            },
            supportsInstancedArrays: {
                value: function () {
                    return this.extensions.get("ANGLE_instanced_arrays")
                }
            },
            enableScissorTest: {
                value: function (t) {
                    this.setScissorTest(t)
                }
            },
            initMaterial: {
                value: function () { }
            },
            addPrePlugin: {
                value: function () { }
            },
            addPostPlugin: {
                value: function () { }
            },
            updateShadowMap: {
                value: function () { }
            },
            shadowMapEnabled: {
                get: function () {
                    return this.shadowMap.enabled
                },
                set: function (t) {
                    this.shadowMap.enabled = t
                }
            },
            shadowMapType: {
                get: function () {
                    return this.shadowMap.type
                },
                set: function (t) {
                    this.shadowMap.type = t
                }
            },
            shadowMapCullFace: {
                get: function () {
                    return this.shadowMap.cullFace
                },
                set: function (t) {
                    this.shadowMap.cullFace = t
                }
            }
        }), Object.defineProperties(o.WebGLRenderTarget.prototype, {
            wrapS: {
                get: function () {
                    return this.texture.wrapS
                },
                set: function (t) {
                    this.texture.wrapS = t
                }
            },
            wrapT: {
                get: function () {
                    return this.texture.wrapT
                },
                set: function (t) {
                    this.texture.wrapT = t
                }
            },
            magFilter: {
                get: function () {
                    return this.texture.magFilter
                },
                set: function (t) {
                    this.texture.magFilter = t
                }
            },
            minFilter: {
                get: function () {
                    return this.texture.minFilter
                },
                set: function (t) {
                    this.texture.minFilter = t
                }
            },
            anisotropy: {
                get: function () {
                    return this.texture.anisotropy
                },
                set: function (t) {
                    this.texture.anisotropy = t
                }
            },
            offset: {
                get: function () {
                    return this.texture.offset
                },
                set: function (t) {
                    this.texture.offset = t
                }
            },
            repeat: {
                get: function () {
                    return this.texture.repeat
                },
                set: function (t) {
                    this.texture.repeat = t
                }
            },
            format: {
                get: function () {
                    return this.texture.format
                },
                set: function (t) {
                    this.texture.format = t
                }
            },
            type: {
                get: function () {
                    return this.texture.type
                },
                set: function (t) {
                    this.texture.type = t
                }
            },
            generateMipmaps: {
                get: function () {
                    return this.texture.generateMipmaps
                },
                set: function (t) {
                    this.texture.generateMipmaps = t
                }
            }
        }), o.GeometryUtils = {
            merge: function (t, e, i) {
                var n;
                e instanceof o.Mesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e, n, i)
            },
            center: function (t) {
                return t.center()
            }
        }, o.ImageUtils = {
            crossOrigin: void 0,
            loadTexture: function (t, e, i, n) {
                var r = new o.TextureLoader;
                r.setCrossOrigin(this.crossOrigin);
                var s = r.load(t, i, void 0, n);
                return e && (s.mapping = e), s
            },
            loadTextureCube: function (t, e, i, n) {
                var r = new o.CubeTextureLoader;
                r.setCrossOrigin(this.crossOrigin);
                var s = r.load(t, i, void 0, n);
                return e && (s.mapping = e), s
            },
            loadCompressedTexture: function () { },
            loadCompressedTextureCube: function () { }
        }, o.Projector = function () {
            this.projectVector = function (t, e) {
                t.project(e)
            }, this.unprojectVector = function (t, e) {
                t.unproject(e)
            }, this.pickingRay = function (t, e) { }
        }, o.CanvasRenderer = function () {
            this.domElement = document.createElement("canvas"), this.clear = function () { }, this.render = function () { }, this.setClearColor = function () { }, this.setSize = function () { }
        }, o.MeshFaceMaterial = o.MultiMaterial, o.CurveUtils = {
            tangentQuadraticBezier: function (t, e, i, n) {
                return 2 * (1 - t) * (i - e) + 2 * t * (n - i)
            },
            tangentCubicBezier: function (t, e, i, n, r) {
                return -3 * e * (1 - t) * (1 - t) + 3 * i * (1 - t) * (1 - t) - 6 * t * i * (1 - t) + 6 * t * n * (1 - t) - 3 * t * t * n + 3 * t * t * r
            },
            tangentSpline: function (t, e, i, n, r) {
                var o = 6 * t * t - 6 * t,
                    s = 3 * t * t - 4 * t + 1,
                    a = -6 * t * t + 6 * t,
                    h = 3 * t * t - 2 * t;
                return o + s + a + h
            },
            interpolate: function (t, e, i, n, r) {
                var o = .5 * (i - t),
                    s = .5 * (n - e),
                    a = r * r,
                    h = r * a;
                return (2 * e - 2 * i + o + s) * h + (-3 * e + 3 * i - 2 * o - s) * a + o * r + e
            }
        }, o.SceneUtils = {
            createMultiMaterialObject: function (t, e) {
                for (var i = new o.Group, n = 0, r = e.length; n < r; n++) i.add(new o.Mesh(t, e[n]));
                return i
            },
            detach: function (t, e, i) {
                t.applyMatrix(e.matrixWorld), e.remove(t), i.add(t)
            },
            attach: function (t, e, i) {
                var n = new o.Matrix4;
                n.getInverse(i.matrixWorld), t.applyMatrix(n), e.remove(t), i.add(t)
            }
        }, o.ShapeUtils = {
            area: function (t) {
                for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
                return .5 * i
            },
            triangulate: function () {
                function t(t, e, i, n, r, o) {
                    var s, a, h, l, c, u, p, d, f;
                    if (a = t[o[e]].x, h = t[o[e]].y, l = t[o[i]].x, c = t[o[i]].y, u = t[o[n]].x, p = t[o[n]].y, Number.EPSILON > (l - a) * (p - h) - (c - h) * (u - a)) return !1;
                    var m, g, v, y, _, x, b, w, S, T, M, E, A, C, L;
                    for (m = u - l, g = p - c, v = a - u, y = h - p, _ = l - a, x = c - h, s = 0; s < r; s++)
                        if (d = t[o[s]].x, f = t[o[s]].y, !(d === a && f === h || d === l && f === c || d === u && f === p) && (b = d - a, w = f - h, S = d - l, T = f - c, M = d - u, E = f - p, L = m * T - g * S, A = _ * w - x * b, C = v * E - y * M, L >= -Number.EPSILON && C >= -Number.EPSILON && A >= -Number.EPSILON)) return !1;
                    return !0
                }
                return function (e, i) {
                    var n = e.length;
                    if (n < 3) return null;
                    var r, s, a, h = [],
                        l = [],
                        c = [];
                    if (o.ShapeUtils.area(e) > 0)
                        for (s = 0; s < n; s++) l[s] = s;
                    else
                        for (s = 0; s < n; s++) l[s] = n - 1 - s;
                    var u = n,
                        p = 2 * u;
                    for (s = u - 1; u > 2;) {
                        if (p-- <= 0) return i ? c : h;
                        if (r = s, u <= r && (r = 0), s = r + 1, u <= s && (s = 0), a = s + 1, u <= a && (a = 0), t(e, r, s, a, u, l)) {
                            var d, f, m, g, v;
                            for (d = l[r], f = l[s], m = l[a], h.push([e[d], e[f], e[m]]), c.push([l[r], l[s], l[a]]), g = s, v = s + 1; v < u; g++, v++) l[g] = l[v];
                            u--, p = 2 * u
                        }
                    }
                    return i ? c : h
                }
            }(),
            triangulateShape: function (t, e) {
                function i(t, e, i) {
                    return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y < e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
                }

                function n(t, e, n, r, o) {
                    var s = e.x - t.x,
                        a = e.y - t.y,
                        h = r.x - n.x,
                        l = r.y - n.y,
                        c = t.x - n.x,
                        u = t.y - n.y,
                        p = a * h - s * l,
                        d = a * c - s * u;
                    if (Math.abs(p) > Number.EPSILON) {
                        var f;
                        if (p > 0) {
                            if (d < 0 || d > p) return [];
                            if (f = l * c - h * u, f < 0 || f > p) return []
                        } else {
                            if (d > 0 || d < p) return [];
                            if (f = l * c - h * u, f > 0 || f < p) return []
                        } if (0 === f) return !o || 0 !== d && d !== p ? [t] : [];
                        if (f === p) return !o || 0 !== d && d !== p ? [e] : [];
                        if (0 === d) return [n];
                        if (d === p) return [r];
                        var m = f / p;
                        return [{
                            x: t.x + m * s,
                            y: t.y + m * a
                        }]
                    }
                    if (0 !== d || l * c !== h * u) return [];
                    var g = 0 === s && 0 === a,
                        v = 0 === h && 0 === l;
                    if (g && v) return t.x !== n.x || t.y !== n.y ? [] : [t];
                    if (g) return i(n, r, t) ? [t] : [];
                    if (v) return i(t, e, n) ? [n] : [];
                    var y, _, x, b, w, S, T, M;
                    return 0 !== s ? (t.x < e.x ? (y = t, x = t.x, _ = e, b = e.x) : (y = e, x = e.x, _ = t, b = t.x), n.x < r.x ? (w = n, T = n.x, S = r, M = r.x) : (w = r, T = r.x, S = n, M = n.x)) : (t.y < e.y ? (y = t, x = t.y, _ = e, b = e.y) : (y = e, x = e.y, _ = t, b = t.y), n.y < r.y ? (w = n, T = n.y, S = r, M = r.y) : (w = r, T = r.y, S = n, M = n.y)), x <= T ? b < T ? [] : b === T ? o ? [] : [w] : b <= M ? [w, _] : [w, S] : x > M ? [] : x === M ? o ? [] : [y] : b <= M ? [y, _] : [y, S]
                }

                function r(t, e, i, n) {
                    var r = e.x - t.x,
                        o = e.y - t.y,
                        s = i.x - t.x,
                        a = i.y - t.y,
                        h = n.x - t.x,
                        l = n.y - t.y,
                        c = r * a - o * s,
                        u = r * l - o * h;
                    if (Math.abs(c) > Number.EPSILON) {
                        var p = h * a - l * s;
                        return c > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
                    }
                    return u > 0
                }

                function s(t, e) {
                    function i(t, e) {
                        var i = y.length - 1,
                            n = t - 1;
                        n < 0 && (n = i);
                        var o = t + 1;
                        o > i && (o = 0);
                        var s = r(y[t], y[n], y[o], a[e]);
                        if (!s) return !1;
                        var h = a.length - 1,
                            l = e - 1;
                        l < 0 && (l = h);
                        var c = e + 1;
                        return c > h && (c = 0), s = r(a[e], a[l], a[c], y[t]), !!s
                    }

                    function o(t, e) {
                        var i, r, o;
                        for (i = 0; i < y.length; i++)
                            if (r = i + 1, r %= y.length, o = n(t, e, y[i], y[r], !0), o.length > 0) return !0;
                        return !1
                    }

                    function s(t, i) {
                        var r, o, s, a, h;
                        for (r = 0; r < _.length; r++)
                            for (o = e[_[r]], s = 0; s < o.length; s++)
                                if (a = s + 1, a %= o.length, h = n(t, i, o[s], o[a], !0), h.length > 0) return !0;
                        return !1
                    }
                    for (var a, h, l, c, u, p, d, f, m, g, v, y = t.concat(), _ = [], x = [], b = 0, w = e.length; b < w; b++) _.push(b);
                    for (var S = 0, T = 2 * _.length; _.length > 0 && (T--, !(T < 0)) ;)
                        for (l = S; l < y.length; l++) {
                            c = y[l], h = -1;
                            for (var b = 0; b < _.length; b++)
                                if (p = _[b], d = c.x + ":" + c.y + ":" + p, void 0 === x[d]) {
                                    a = e[p];
                                    for (var M = 0; M < a.length; M++)
                                        if (u = a[M], i(l, M) && !o(c, u) && !s(c, u)) {
                                            h = M, _.splice(b, 1), f = y.slice(0, l + 1), m = y.slice(l), g = a.slice(h), v = a.slice(0, h + 1), y = f.concat(g).concat(v).concat(m), S = l;
                                            break
                                        }
                                    if (h >= 0) break;
                                    x[d] = !0
                                }
                            if (h >= 0) break
                        }
                    return y
                }
                for (var a, h, l, c, u, p, d = {}, f = t.concat(), m = 0, g = e.length; m < g; m++) Array.prototype.push.apply(f, e[m]);
                for (a = 0, h = f.length; a < h; a++) u = f[a].x + ":" + f[a].y, void 0 !== d[u], d[u] = a;
                var v = s(t, e),
                    y = o.ShapeUtils.triangulate(v, !1);
                for (a = 0, h = y.length; a < h; a++)
                    for (c = y[a], l = 0; l < 3; l++) u = c[l].x + ":" + c[l].y, p = d[u], void 0 !== p && (c[l] = p);
                return y.concat()
            },
            isClockWise: function (t) {
                return o.ShapeUtils.area(t) < 0
            },
            b2: function () {
                function t(t, e) {
                    var i = 1 - t;
                    return i * i * e
                }

                function e(t, e) {
                    return 2 * (1 - t) * t * e
                }

                function i(t, e) {
                    return t * t * e
                }
                return function (n, r, o, s) {
                    return t(n, r) + e(n, o) + i(n, s)
                }
            }(),
            b3: function () {
                function t(t, e) {
                    var i = 1 - t;
                    return i * i * i * e
                }

                function e(t, e) {
                    var i = 1 - t;
                    return 3 * i * i * t * e
                }

                function i(t, e) {
                    var i = 1 - t;
                    return 3 * i * t * t * e
                }

                function n(t, e) {
                    return t * t * t * e
                }
                return function (r, o, s, a, h) {
                    return t(r, o) + e(r, s) + i(r, a) + n(r, h)
                }
            }()
        }, o.Curve = function () { }, o.Curve.prototype = {
            constructor: o.Curve,
            getPoint: function (t) {
                return null
            },
            getPointAt: function (t) {
                var e = this.getUtoTmapping(t);
                return this.getPoint(e)
            },
            getPoints: function (t) {
                t || (t = 5);
                var e, i = [];
                for (e = 0; e <= t; e++) i.push(this.getPoint(e / t));
                return i
            },
            getSpacedPoints: function (t) {
                t || (t = 5);
                var e, i = [];
                for (e = 0; e <= t; e++) i.push(this.getPointAt(e / t));
                return i
            },
            getLength: function () {
                var t = this.getLengths();
                return t[t.length - 1]
            },
            getLengths: function (t) {
                if (t || (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
                    this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
                this.needsUpdate = !1;
                var e, i, n = [],
                    r = this.getPoint(0),
                    o = 0;
                for (n.push(0), i = 1; i <= t; i++) e = this.getPoint(i / t), o += e.distanceTo(r), n.push(o), r = e;
                return this.cacheArcLengths = n, n
            },
            updateArcLengths: function () {
                this.needsUpdate = !0, this.getLengths()
            },
            getUtoTmapping: function (t, e) {
                var i, n = this.getLengths(),
                    r = 0,
                    o = n.length;
                i = e ? e : t * n[o - 1];
                for (var s, a = 0, h = o - 1; a <= h;)
                    if (r = Math.floor(a + (h - a) / 2), s = n[r] - i, s < 0) a = r + 1;
                    else {
                        if (!(s > 0)) {
                            h = r;
                            break
                        }
                        h = r - 1
                    }
                if (r = h, n[r] === i) {
                    var l = r / (o - 1);
                    return l
                }
                var c = n[r],
                    u = n[r + 1],
                    p = u - c,
                    d = (i - c) / p,
                    l = (r + d) / (o - 1);
                return l
            },
            getTangent: function (t) {
                var e = 1e-4,
                    i = t - e,
                    n = t + e;
                i < 0 && (i = 0), n > 1 && (n = 1);
                var r = this.getPoint(i),
                    o = this.getPoint(n),
                    s = o.clone().sub(r);
                return s.normalize()
            },
            getTangentAt: function (t) {
                var e = this.getUtoTmapping(t);
                return this.getTangent(e)
            }
        }, o.Curve.create = function (t, e) {
            return t.prototype = Object.create(o.Curve.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
        }, o.CurvePath = function () {
            this.curves = [], this.autoClose = !1
        }, o.CurvePath.prototype = Object.create(o.Curve.prototype), o.CurvePath.prototype.constructor = o.CurvePath, o.CurvePath.prototype.add = function (t) {
            this.curves.push(t)
        }, o.CurvePath.prototype.closePath = function () {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new o.LineCurve(e, t))
        }, o.CurvePath.prototype.getPoint = function (t) {
            for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
                if (i[n] >= e) {
                    var r = i[n] - e,
                        o = this.curves[n],
                        s = 1 - r / o.getLength();
                    return o.getPointAt(s)
                }
                n++
            }
            return null
        }, o.CurvePath.prototype.getLength = function () {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        }, o.CurvePath.prototype.getCurveLengths = function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
            return this.cacheLengths = t, t
        }, o.CurvePath.prototype.createPointsGeometry = function (t) {
            var e = this.getPoints(t);
            return this.createGeometry(e)
        }, o.CurvePath.prototype.createSpacedPointsGeometry = function (t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        }, o.CurvePath.prototype.createGeometry = function (t) {
            for (var e = new o.Geometry, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.vertices.push(new o.Vector3(r.x, r.y, r.z || 0))
            }
            return e
        }, o.Font = function (t) {
            this.data = t
        }, o.Font.prototype = {
            constructor: o.Font,
            generateShapes: function (t, e, i) {
                function n(t) {
                    for (var i = String(t).split(""), n = e / s.resolution, o = 0, a = [], h = 0; h < i.length; h++) {
                        var l = r(i[h], n, o);
                        o += l.offset, a.push(l.path)
                    }
                    return a
                }

                function r(t, e, n) {
                    var r = s.glyphs[t] || s.glyphs["?"];
                    if (r) {
                        var a, h, l, c, u, p, d, f, m, g, v, y = new o.Path,
                            _ = [],
                            x = o.ShapeUtils.b2,
                            b = o.ShapeUtils.b3;
                        if (r.o)
                            for (var w = r._cachedOutline || (r._cachedOutline = r.o.split(" ")), S = 0, T = w.length; S < T;) {
                                var M = w[S++];
                                switch (M) {
                                    case "m":
                                        a = w[S++] * e + n, h = w[S++] * e, y.moveTo(a, h);
                                        break;
                                    case "l":
                                        a = w[S++] * e + n, h = w[S++] * e, y.lineTo(a, h);
                                        break;
                                    case "q":
                                        if (l = w[S++] * e + n, c = w[S++] * e, d = w[S++] * e + n, f = w[S++] * e, y.quadraticCurveTo(d, f, l, c), v = _[_.length - 1]) {
                                            u = v.x, p = v.y;
                                            for (var E = 1; E <= i; E++) {
                                                var A = E / i;
                                                x(A, u, d, l), x(A, p, f, c)
                                            }
                                        }
                                        break;
                                    case "b":
                                        if (l = w[S++] * e + n, c = w[S++] * e, d = w[S++] * e + n, f = w[S++] * e, m = w[S++] * e + n, g = w[S++] * e, y.bezierCurveTo(d, f, m, g, l, c), v = _[_.length - 1]) {
                                            u = v.x, p = v.y;
                                            for (var E = 1; E <= i; E++) {
                                                var A = E / i;
                                                b(A, u, d, m, l), b(A, p, f, g, c)
                                            }
                                        }
                                }
                            }
                        return {
                            offset: r.ha * e,
                            path: y
                        }
                    }
                }
                void 0 === e && (e = 100), void 0 === i && (i = 4);
                for (var s = this.data, a = n(t), h = [], l = 0, c = a.length; l < c; l++) Array.prototype.push.apply(h, a[l].toShapes());
                return h
            }
        }, o.Path = function (t) {
            o.CurvePath.call(this), this.actions = [], t && this.fromPoints(t)
        }, o.Path.prototype = Object.create(o.CurvePath.prototype), o.Path.prototype.constructor = o.Path, o.Path.prototype.fromPoints = function (t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
        }, o.Path.prototype.moveTo = function (t, e) {
            this.actions.push({
                action: "moveTo",
                args: [t, e]
            })
        }, o.Path.prototype.lineTo = function (t, e) {
            var i = this.actions[this.actions.length - 1].args,
                n = i[i.length - 2],
                r = i[i.length - 1],
                s = new o.LineCurve(new o.Vector2(n, r), new o.Vector2(t, e));
            this.curves.push(s), this.actions.push({
                action: "lineTo",
                args: [t, e]
            })
        }, o.Path.prototype.quadraticCurveTo = function (t, e, i, n) {
            var r = this.actions[this.actions.length - 1].args,
                s = r[r.length - 2],
                a = r[r.length - 1],
                h = new o.QuadraticBezierCurve(new o.Vector2(s, a), new o.Vector2(t, e), new o.Vector2(i, n));
            this.curves.push(h), this.actions.push({
                action: "quadraticCurveTo",
                args: [t, e, i, n]
            })
        }, o.Path.prototype.bezierCurveTo = function (t, e, i, n, r, s) {
            var a = this.actions[this.actions.length - 1].args,
                h = a[a.length - 2],
                l = a[a.length - 1],
                c = new o.CubicBezierCurve(new o.Vector2(h, l), new o.Vector2(t, e), new o.Vector2(i, n), new o.Vector2(r, s));
            this.curves.push(c), this.actions.push({
                action: "bezierCurveTo",
                args: [t, e, i, n, r, s]
            })
        }, o.Path.prototype.splineThru = function (t) {
            var e = Array.prototype.slice.call(arguments),
                i = this.actions[this.actions.length - 1].args,
                n = i[i.length - 2],
                r = i[i.length - 1],
                s = [new o.Vector2(n, r)];
            Array.prototype.push.apply(s, t);
            var a = new o.SplineCurve(s);
            this.curves.push(a), this.actions.push({
                action: "splineThru",
                args: e
            })
        }, o.Path.prototype.arc = function (t, e, i, n, r, o) {
            var s = this.actions[this.actions.length - 1].args,
                a = s[s.length - 2],
                h = s[s.length - 1];
            this.absarc(t + a, e + h, i, n, r, o)
        }, o.Path.prototype.absarc = function (t, e, i, n, r, o) {
            this.absellipse(t, e, i, i, n, r, o)
        }, o.Path.prototype.ellipse = function (t, e, i, n, r, o, s, a) {
            var h = this.actions[this.actions.length - 1].args,
                l = h[h.length - 2],
                c = h[h.length - 1];
            this.absellipse(t + l, e + c, i, n, r, o, s, a)
        }, o.Path.prototype.absellipse = function (t, e, i, n, r, s, a, h) {
            var l = [t, e, i, n, r, s, a, h || 0],
                c = new o.EllipseCurve(t, e, i, n, r, s, a, h);
            this.curves.push(c);
            var u = c.getPoint(1);
            l.push(u.x), l.push(u.y), this.actions.push({
                action: "ellipse",
                args: l
            })
        }, o.Path.prototype.getSpacedPoints = function (t) {
            t || (t = 40);
            for (var e = [], i = 0; i < t; i++) e.push(this.getPoint(i / t));
            return this.autoClose && e.push(e[0]), e
        }, o.Path.prototype.getPoints = function (t) {
            t = t || 12;
            for (var e, i, n, r, s, a, h, l, c, u, p, d = o.ShapeUtils.b2, f = o.ShapeUtils.b3, m = [], g = 0, v = this.actions.length; g < v; g++) {
                var y = this.actions[g],
                    _ = y.action,
                    x = y.args;
                switch (_) {
                    case "moveTo":
                        m.push(new o.Vector2(x[0], x[1]));
                        break;
                    case "lineTo":
                        m.push(new o.Vector2(x[0], x[1]));
                        break;
                    case "quadraticCurveTo":
                        e = x[2], i = x[3], s = x[0], a = x[1], m.length > 0 ? (c = m[m.length - 1], h = c.x, l = c.y) : (c = this.actions[g - 1].args, h = c[c.length - 2], l = c[c.length - 1]);
                        for (var b = 1; b <= t; b++) {
                            var w = b / t;
                            u = d(w, h, s, e), p = d(w, l, a, i), m.push(new o.Vector2(u, p))
                        }
                        break;
                    case "bezierCurveTo":
                        e = x[4], i = x[5], s = x[0], a = x[1], n = x[2], r = x[3], m.length > 0 ? (c = m[m.length - 1], h = c.x, l = c.y) : (c = this.actions[g - 1].args, h = c[c.length - 2], l = c[c.length - 1]);
                        for (var b = 1; b <= t; b++) {
                            var w = b / t;
                            u = f(w, h, s, n, e), p = f(w, l, a, r, i), m.push(new o.Vector2(u, p))
                        }
                        break;
                    case "splineThru":
                        c = this.actions[g - 1].args;
                        var S = new o.Vector2(c[c.length - 2], c[c.length - 1]),
                            T = [S],
                            M = t * x[0].length;
                        T = T.concat(x[0]);
                        for (var E = new o.SplineCurve(T), b = 1; b <= M; b++) m.push(E.getPointAt(b / M));
                        break;
                    case "arc":
                        for (var A, C = x[0], L = x[1], R = x[2], P = x[3], O = x[4], I = !!x[5], D = O - P, B = 2 * t, b = 1; b <= B; b++) {
                            var w = b / B;
                            I || (w = 1 - w), A = P + w * D, u = C + R * Math.cos(A), p = L + R * Math.sin(A), m.push(new o.Vector2(u, p))
                        }
                        break;
                    case "ellipse":
                        var A, k, F, C = x[0],
                            L = x[1],
                            N = x[2],
                            U = x[3],
                            P = x[4],
                            O = x[5],
                            I = !!x[6],
                            G = x[7],
                            D = O - P,
                            B = 2 * t;
                        0 !== G && (k = Math.cos(G), F = Math.sin(G));
                        for (var b = 1; b <= B; b++) {
                            var w = b / B;
                            if (I || (w = 1 - w), A = P + w * D, u = C + N * Math.cos(A), p = L + U * Math.sin(A), 0 !== G) {
                                var z = u,
                                    V = p;
                                u = (z - C) * k - (V - L) * F + C, p = (z - C) * F + (V - L) * k + L
                            }
                            m.push(new o.Vector2(u, p))
                        }
                }
            }
            var j = m[m.length - 1];
            return Math.abs(j.x - m[0].x) < Number.EPSILON && Math.abs(j.y - m[0].y) < Number.EPSILON && m.splice(m.length - 1, 1), this.autoClose && m.push(m[0]), m
        }, o.Path.prototype.toShapes = function (t, e) {
            function i(t) {
                for (var e = [], i = new o.Path, n = 0, r = t.length; n < r; n++) {
                    var s = t[n],
                        a = s.args,
                        h = s.action;
                    "moveTo" === h && 0 !== i.actions.length && (e.push(i), i = new o.Path), i[h].apply(i, a)
                }
                return 0 !== i.actions.length && e.push(i), e
            }

            function n(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i],
                        s = new o.Shape;
                    s.actions = r.actions, s.curves = r.curves, e.push(s)
                }
                return e
            }

            function r(t, e) {
                for (var i = e.length, n = !1, r = i - 1, o = 0; o < i; r = o++) {
                    var s = e[r],
                        a = e[o],
                        h = a.x - s.x,
                        l = a.y - s.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (s = e[o], h = -h, a = e[r], l = -l), t.y < s.y || t.y > a.y) continue;
                        if (t.y === s.y) {
                            if (t.x === s.x) return !0
                        } else {
                            var c = l * (t.x - s.x) - h * (t.y - s.y);
                            if (0 === c) return !0;
                            if (c < 0) continue;
                            n = !n
                        }
                    } else {
                        if (t.y !== s.y) continue;
                        if (a.x <= t.x && t.x <= s.x || s.x <= t.x && t.x <= a.x) return !0
                    }
                }
                return n
            }
            var s = o.ShapeUtils.isClockWise,
                a = i(this.actions);
            if (0 === a.length) return [];
            if (e === !0) return n(a);
            var h, l, c, u = [];
            if (1 === a.length) return l = a[0], c = new o.Shape, c.actions = l.actions, c.curves = l.curves, u.push(c), u;
            var p = !s(a[0].getPoints());
            p = t ? !p : p;
            var d, f = [],
                m = [],
                g = [],
                v = 0;
            m[v] = void 0, g[v] = [];
            for (var y = 0, _ = a.length; y < _; y++) l = a[y], d = l.getPoints(), h = s(d), h = t ? !h : h, h ? (!p && m[v] && v++, m[v] = {
                s: new o.Shape,
                p: d
            }, m[v].s.actions = l.actions, m[v].s.curves = l.curves, p && v++, g[v] = []) : g[v].push({
                h: l,
                p: d[0]
            });
            if (!m[0]) return n(a);
            if (m.length > 1) {
                for (var x = !1, b = [], w = 0, S = m.length; w < S; w++) f[w] = [];
                for (var w = 0, S = m.length; w < S; w++)
                    for (var T = g[w], M = 0; M < T.length; M++) {
                        for (var E = T[M], A = !0, C = 0; C < m.length; C++) r(E.p, m[C].p) && (w !== C && b.push({
                            froms: w,
                            tos: C,
                            hole: M
                        }), A ? (A = !1, f[C].push(E)) : x = !0);
                        A && f[w].push(E)
                    }
                b.length > 0 && (x || (g = f))
            }
            for (var L, y = 0, R = m.length; y < R; y++) {
                c = m[y].s, u.push(c), L = g[y];
                for (var P = 0, O = L.length; P < O; P++) c.holes.push(L[P].h)
            }
            return u
        }, o.Shape = function () {
            o.Path.apply(this, arguments), this.holes = []
        }, o.Shape.prototype = Object.create(o.Path.prototype), o.Shape.prototype.constructor = o.Shape, o.Shape.prototype.extrude = function (t) {
            return new o.ExtrudeGeometry(this, t)
        }, o.Shape.prototype.makeGeometry = function (t) {
            return new o.ShapeGeometry(this, t)
        }, o.Shape.prototype.getPointsHoles = function (t) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
            return e
        }, o.Shape.prototype.extractAllPoints = function (t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        }, o.Shape.prototype.extractPoints = function (t) {
            return this.extractAllPoints(t)
        }, o.LineCurve = function (t, e) {
            this.v1 = t, this.v2 = e
        }, o.LineCurve.prototype = Object.create(o.Curve.prototype), o.LineCurve.prototype.constructor = o.LineCurve, o.LineCurve.prototype.getPoint = function (t) {
            var e = this.v2.clone().sub(this.v1);
            return e.multiplyScalar(t).add(this.v1), e
        }, o.LineCurve.prototype.getPointAt = function (t) {
            return this.getPoint(t)
        }, o.LineCurve.prototype.getTangent = function (t) {
            var e = this.v2.clone().sub(this.v1);
            return e.normalize()
        }, o.QuadraticBezierCurve = function (t, e, i) {
            this.v0 = t, this.v1 = e, this.v2 = i
        }, o.QuadraticBezierCurve.prototype = Object.create(o.Curve.prototype), o.QuadraticBezierCurve.prototype.constructor = o.QuadraticBezierCurve, o.QuadraticBezierCurve.prototype.getPoint = function (t) {
            var e = o.ShapeUtils.b2;
            return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x), e(t, this.v0.y, this.v1.y, this.v2.y))
        }, o.QuadraticBezierCurve.prototype.getTangent = function (t) {
            var e = o.CurveUtils.tangentQuadraticBezier;
            return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x), e(t, this.v0.y, this.v1.y, this.v2.y)).normalize()
        }, o.CubicBezierCurve = function (t, e, i, n) {
            this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
        }, o.CubicBezierCurve.prototype = Object.create(o.Curve.prototype), o.CubicBezierCurve.prototype.constructor = o.CubicBezierCurve, o.CubicBezierCurve.prototype.getPoint = function (t) {
            var e = o.ShapeUtils.b3;
            return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
        }, o.CubicBezierCurve.prototype.getTangent = function (t) {
            var e = o.CurveUtils.tangentCubicBezier;
            return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
        }, o.SplineCurve = function (t) {
            this.points = void 0 == t ? [] : t
        }, o.SplineCurve.prototype = Object.create(o.Curve.prototype), o.SplineCurve.prototype.constructor = o.SplineCurve, o.SplineCurve.prototype.getPoint = function (t) {
            var e = this.points,
                i = (e.length - 1) * t,
                n = Math.floor(i),
                r = i - n,
                s = e[0 === n ? n : n - 1],
                a = e[n],
                h = e[n > e.length - 2 ? e.length - 1 : n + 1],
                l = e[n > e.length - 3 ? e.length - 1 : n + 2],
                c = o.CurveUtils.interpolate;
            return new o.Vector2(c(s.x, a.x, h.x, l.x, r), c(s.y, a.y, h.y, l.y, r))
        }, o.EllipseCurve = function (t, e, i, n, r, o, s, a) {
            this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = s, this.aRotation = a || 0
        }, o.EllipseCurve.prototype = Object.create(o.Curve.prototype), o.EllipseCurve.prototype.constructor = o.EllipseCurve, o.EllipseCurve.prototype.getPoint = function (t) {
            var e = this.aEndAngle - this.aStartAngle;
            e < 0 && (e += 2 * Math.PI), e > 2 * Math.PI && (e -= 2 * Math.PI);
            var i;
            i = this.aClockwise === !0 ? this.aEndAngle + (1 - t) * (2 * Math.PI - e) : this.aStartAngle + t * e;
            var n = this.aX + this.xRadius * Math.cos(i),
                r = this.aY + this.yRadius * Math.sin(i);
            if (0 !== this.aRotation) {
                var s = Math.cos(this.aRotation),
                    a = Math.sin(this.aRotation),
                    h = n,
                    l = r;
                n = (h - this.aX) * s - (l - this.aY) * a + this.aX, r = (h - this.aX) * a + (l - this.aY) * s + this.aY
            }
            return new o.Vector2(n, r)
        }, o.ArcCurve = function (t, e, i, n, r, s) {
            o.EllipseCurve.call(this, t, e, i, i, n, r, s)
        }, o.ArcCurve.prototype = Object.create(o.EllipseCurve.prototype), o.ArcCurve.prototype.constructor = o.ArcCurve, o.LineCurve3 = o.Curve.create(function (t, e) {
            this.v1 = t, this.v2 = e
        }, function (t) {
            var e = new o.Vector3;
            return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
        }), o.QuadraticBezierCurve3 = o.Curve.create(function (t, e, i) {
            this.v0 = t, this.v1 = e, this.v2 = i
        }, function (t) {
            var e = o.ShapeUtils.b2;
            return new o.Vector3(e(t, this.v0.x, this.v1.x, this.v2.x), e(t, this.v0.y, this.v1.y, this.v2.y), e(t, this.v0.z, this.v1.z, this.v2.z))
        }), o.CubicBezierCurve3 = o.Curve.create(function (t, e, i, n) {
            this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
        }, function (t) {
            var e = o.ShapeUtils.b3;
            return new o.Vector3(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), e(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
        }), o.SplineCurve3 = o.Curve.create(function (t) {
            this.points = void 0 == t ? [] : t
        }, function (t) {
            var e = this.points,
                i = (e.length - 1) * t,
                n = Math.floor(i),
                r = i - n,
                s = e[0 == n ? n : n - 1],
                a = e[n],
                h = e[n > e.length - 2 ? e.length - 1 : n + 1],
                l = e[n > e.length - 3 ? e.length - 1 : n + 2],
                c = o.CurveUtils.interpolate;
            return new o.Vector3(c(s.x, a.x, h.x, l.x, r), c(s.y, a.y, h.y, l.y, r), c(s.z, a.z, h.z, l.z, r))
        }), o.CatmullRomCurve3 = function () {
            function t() { }
            var e = new o.Vector3,
                i = new t,
                n = new t,
                r = new t;
            return t.prototype.init = function (t, e, i, n) {
                this.c0 = t, this.c1 = i, this.c2 = -3 * t + 3 * e - 2 * i - n, this.c3 = 2 * t - 2 * e + i + n
            }, t.prototype.initNonuniformCatmullRom = function (t, e, i, n, r, o, s) {
                var a = (e - t) / r - (i - t) / (r + o) + (i - e) / o,
                    h = (i - e) / o - (n - e) / (o + s) + (n - i) / s;
                a *= o, h *= o, this.init(e, i, a, h)
            }, t.prototype.initCatmullRom = function (t, e, i, n, r) {
                this.init(e, i, r * (i - t), r * (n - e))
            }, t.prototype.calc = function (t) {
                var e = t * t,
                    i = e * t;
                return this.c0 + this.c1 * t + this.c2 * e + this.c3 * i
            }, o.Curve.create(function (t) {
                this.points = t || [], this.closed = !1
            }, function (t) {
                var s, a, h, l, c = this.points;
                l = c.length, s = (l - (this.closed ? 0 : 1)) * t, a = Math.floor(s), h = s - a, this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / c.length) + 1) * c.length : 0 === h && a === l - 1 && (a = l - 2, h = 1);
                var u, p, d, f;
                if (this.closed || a > 0 ? u = c[(a - 1) % l] : (e.subVectors(c[0], c[1]).add(c[0]), u = e), p = c[a % l], d = c[(a + 1) % l], this.closed || a + 2 < l ? f = c[(a + 2) % l] : (e.subVectors(c[l - 1], c[l - 2]).add(c[l - 1]), f = e), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                    var m = "chordal" === this.type ? .5 : .25,
                        g = Math.pow(u.distanceToSquared(p), m),
                        v = Math.pow(p.distanceToSquared(d), m),
                        y = Math.pow(d.distanceToSquared(f), m);
                    v < 1e-4 && (v = 1), g < 1e-4 && (g = v), y < 1e-4 && (y = v), i.initNonuniformCatmullRom(u.x, p.x, d.x, f.x, g, v, y), n.initNonuniformCatmullRom(u.y, p.y, d.y, f.y, g, v, y), r.initNonuniformCatmullRom(u.z, p.z, d.z, f.z, g, v, y)
                } else if ("catmullrom" === this.type) {
                    var _ = void 0 !== this.tension ? this.tension : .5;
                    i.initCatmullRom(u.x, p.x, d.x, f.x, _), n.initCatmullRom(u.y, p.y, d.y, f.y, _), r.initCatmullRom(u.z, p.z, d.z, f.z, _)
                }
                var x = new o.Vector3(i.calc(h), n.calc(h), r.calc(h));
                return x
            })
        }(), o.ClosedSplineCurve3 = function (t) {
            o.CatmullRomCurve3.call(this, t), this.type = "catmullrom", this.closed = !0
        }, o.ClosedSplineCurve3.prototype = Object.create(o.CatmullRomCurve3.prototype), o.BoxGeometry = function (t, e, i, n, r, s) {
            o.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: s
            }, this.fromBufferGeometry(new o.BoxBufferGeometry(t, e, i, n, r, s)), this.mergeVertices()
        }, o.BoxGeometry.prototype = Object.create(o.Geometry.prototype), o.BoxGeometry.prototype.constructor = o.BoxGeometry, o.CubeGeometry = o.BoxGeometry, o.BoxBufferGeometry = function (t, e, i, n, r, s) {
            function a(t, e, i) {
                var n = 0;
                return n += t * e * 2, n += t * i * 2, n += i * e * 2, 4 * n
            }

            function h(t, e, i, n, r, s, a, h, c, u, b) {
                for (var w = s / c, S = a / u, T = s / 2, M = a / 2, E = h / 2, A = c + 1, C = u + 1, L = 0, R = 0, P = new o.Vector3, O = 0; O < C; O++)
                    for (var I = O * S - M, D = 0; D < A; D++) {
                        var B = D * w - T;
                        P[t] = B * n, P[e] = I * r, P[i] = E, d[g] = P.x, d[g + 1] = P.y, d[g + 2] = P.z, P[t] = 0, P[e] = 0, P[i] = h > 0 ? 1 : -1, f[g] = P.x, f[g + 1] = P.y, f[g + 2] = P.z, m[v] = D / c, m[v + 1] = 1 - O / u, g += 3, v += 2, L += 1
                    }
                for (O = 0; O < u; O++)
                    for (D = 0; D < c; D++) {
                        var k = _ + D + A * O,
                            F = _ + D + A * (O + 1),
                            N = _ + (D + 1) + A * (O + 1),
                            U = _ + (D + 1) + A * O;
                        p[y] = k, p[y + 1] = F, p[y + 2] = U, p[y + 3] = F, p[y + 4] = N, p[y + 5] = U, y += 6, R += 6
                    }
                l.addGroup(x, R, b), x += R, _ += L
            }
            o.BufferGeometry.call(this), this.type = "BoxBufferGeometry", this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: n,
                heightSegments: r,
                depthSegments: s
            };
            var l = this;
            n = Math.floor(n) || 1, r = Math.floor(r) || 1, s = Math.floor(s) || 1;
            var c = a(n, r, s),
                u = c / 4 * 6,
                p = new (u > 65535 ? Uint32Array : Uint16Array)(u),
                d = new Float32Array(3 * c),
                f = new Float32Array(3 * c),
                m = new Float32Array(2 * c),
                g = 0,
                v = 0,
                y = 0,
                _ = 0,
                x = 0;
            h("z", "y", "x", -1, -1, i, e, t, s, r, 0), h("z", "y", "x", 1, -1, i, e, -t, s, r, 1), h("x", "z", "y", 1, 1, t, i, e, n, s, 2), h("x", "z", "y", 1, -1, t, i, -e, n, s, 3), h("x", "y", "z", 1, -1, t, e, i, n, r, 4), h("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(new o.BufferAttribute(p, 1)), this.addAttribute("position", new o.BufferAttribute(d, 3)), this.addAttribute("normal", new o.BufferAttribute(f, 3)), this.addAttribute("uv", new o.BufferAttribute(m, 2))
        }, o.BoxBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.BoxBufferGeometry.prototype.constructor = o.BoxBufferGeometry, o.CircleGeometry = function (t, e, i, n) {
            o.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: i,
                thetaLength: n
            }, this.fromBufferGeometry(new o.CircleBufferGeometry(t, e, i, n))
        }, o.CircleGeometry.prototype = Object.create(o.Geometry.prototype), o.CircleGeometry.prototype.constructor = o.CircleGeometry, o.CircleBufferGeometry = function (t, e, i, n) {
            o.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: i,
                thetaLength: n
            }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
            var r = e + 2,
                s = new Float32Array(3 * r),
                a = new Float32Array(3 * r),
                h = new Float32Array(2 * r);
            a[2] = 1, h[0] = .5, h[1] = .5;
            for (var l = 0, c = 3, u = 2; l <= e; l++, c += 3, u += 2) {
                var p = i + l / e * n;
                s[c] = t * Math.cos(p), s[c + 1] = t * Math.sin(p), a[c + 2] = 1, h[u] = (s[c] / t + 1) / 2, h[u + 1] = (s[c + 1] / t + 1) / 2
            }
            for (var d = [], c = 1; c <= e; c++) d.push(c, c + 1, 0);
            this.setIndex(new o.BufferAttribute(new Uint16Array(d), 1)), this.addAttribute("position", new o.BufferAttribute(s, 3)), this.addAttribute("normal", new o.BufferAttribute(a, 3)), this.addAttribute("uv", new o.BufferAttribute(h, 2)), this.boundingSphere = new o.Sphere(new o.Vector3, t)
        }, o.CircleBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.CircleBufferGeometry.prototype.constructor = o.CircleBufferGeometry, o.CylinderBufferGeometry = function (t, e, i, n, r, s, a, h) {
            function l() {
                var t = (n + 1) * (r + 1);
                return s === !1 && (t += 2 * (n + 1) + 2 * n), t
            }

            function c() {
                var t = n * r * 2 * 3;
                return s === !1 && (t += 2 * n * 3), t
            }

            function u() {
                var s, l, c = new o.Vector3,
                    u = new o.Vector3,
                    p = (e - t) / i;
                for (l = 0; l <= r; l++) {
                    var d = [],
                        f = l / r,
                        S = f * (e - t) + t;
                    for (s = 0; s <= n; s++) {
                        var T = s / n;
                        u.x = S * Math.sin(T * h + a), u.y = -f * i + w, u.z = S * Math.cos(T * h + a), g.setXYZ(_, u.x, u.y, u.z), c.copy(u), (0 === t && 0 === l || 0 === e && l === r) && (c.x = Math.sin(T * h + a), c.z = Math.cos(T * h + a)), c.setY(Math.sqrt(c.x * c.x + c.z * c.z) * p).normalize(), v.setXYZ(_, c.x, c.y, c.z), y.setXY(_, T, 1 - f), d.push(_), _++
                    }
                    b.push(d)
                }
                for (s = 0; s < n; s++)
                    for (l = 0; l < r; l++) {
                        var M = b[l][s],
                            E = b[l + 1][s],
                            A = b[l + 1][s + 1],
                            C = b[l][s + 1];
                        m.setX(x, M), x++, m.setX(x, E), x++, m.setX(x, C), x++, m.setX(x, E), x++, m.setX(x, A), x++, m.setX(x, C), x++
                    }
            }

            function p(i) {
                var r, s, l, c = new o.Vector2,
                    u = new o.Vector3,
                    p = i === !0 ? t : e,
                    d = i === !0 ? 1 : -1;
                for (s = _, r = 1; r <= n; r++) g.setXYZ(_, 0, w * d, 0), v.setXYZ(_, 0, d, 0), i === !0 ? (c.x = r / n, c.y = 0) : (c.x = (r - 1) / n, c.y = 1), y.setXY(_, c.x, c.y), _++;
                for (l = _, r = 0; r <= n; r++) {
                    var f = r / n;
                    u.x = p * Math.sin(f * h + a), u.y = w * d, u.z = p * Math.cos(f * h + a), g.setXYZ(_, u.x, u.y, u.z), v.setXYZ(_, 0, d, 0), y.setXY(_, f, i === !0 ? 1 : 0), _++
                }
                for (r = 0; r < n; r++) {
                    var b = s + r,
                        S = l + r;
                    i === !0 ? (m.setX(x, S), x++, m.setX(x, S + 1), x++, m.setX(x, b), x++) : (m.setX(x, S + 1), x++, m.setX(x, S), x++, m.setX(x, b), x++)
                }
            }
            o.BufferGeometry.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: i,
                radialSegments: n,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: h
            }, t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, i = void 0 !== i ? i : 100, n = Math.floor(n) || 8, r = Math.floor(r) || 1, s = void 0 !== s && s, a = void 0 !== a ? a : 0, h = void 0 !== h ? h : 2 * Math.PI;
            var d = l(),
                f = c(),
                m = new o.BufferAttribute(new (f > 65535 ? Uint32Array : Uint16Array)(f), 1),
                g = new o.BufferAttribute(new Float32Array(3 * d), 3),
                v = new o.BufferAttribute(new Float32Array(3 * d), 3),
                y = new o.BufferAttribute(new Float32Array(2 * d), 2),
                _ = 0,
                x = 0,
                b = [],
                w = i / 2;
            u(), s === !1 && (t > 0 && p(!0), e > 0 && p(!1)), this.setIndex(m), this.addAttribute("position", g), this.addAttribute("normal", v), this.addAttribute("uv", y)
        }, o.CylinderBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.CylinderBufferGeometry.prototype.constructor = o.CylinderBufferGeometry, o.CylinderGeometry = function (t, e, i, n, r, s, a, h) {
            o.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: i,
                radialSegments: n,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: h
            }, this.fromBufferGeometry(new o.CylinderBufferGeometry(t, e, i, n, r, s, a, h)), this.mergeVertices()
        }, o.CylinderGeometry.prototype = Object.create(o.Geometry.prototype), o.CylinderGeometry.prototype.constructor = o.CylinderGeometry, o.EdgesGeometry = function (t, e) {
            function i(t, e) {
                return t - e
            }
            o.BufferGeometry.call(this), e = void 0 !== e ? e : 1;
            var n, r = Math.cos(o.Math.degToRad(e)),
                s = [0, 0],
                a = {},
                h = ["a", "b", "c"];
            t instanceof o.BufferGeometry ? (n = new o.Geometry, n.fromBufferGeometry(t)) : n = t.clone(), n.mergeVertices(), n.computeFaceNormals();
            for (var l = n.vertices, c = n.faces, u = 0, p = c.length; u < p; u++)
                for (var d = c[u], f = 0; f < 3; f++) {
                    s[0] = d[h[f]], s[1] = d[h[(f + 1) % 3]], s.sort(i);
                    var m = s.toString();
                    void 0 === a[m] ? a[m] = {
                        vert1: s[0],
                        vert2: s[1],
                        face1: u,
                        face2: void 0
                    } : a[m].face2 = u
                }
            var g = [];
            for (var m in a) {
                var v = a[m];
                if (void 0 === v.face2 || c[v.face1].normal.dot(c[v.face2].normal) <= r) {
                    var y = l[v.vert1];
                    g.push(y.x), g.push(y.y), g.push(y.z), y = l[v.vert2], g.push(y.x), g.push(y.y), g.push(y.z)
                }
            }
            this.addAttribute("position", new o.BufferAttribute(new Float32Array(g), 3))
        }, o.EdgesGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.EdgesGeometry.prototype.constructor = o.EdgesGeometry, o.ExtrudeGeometry = function (t, e) {
            return "undefined" == typeof t ? void (t = []) : (o.Geometry.call(this), this.type = "ExtrudeGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), void this.computeFaceNormals())
        }, o.ExtrudeGeometry.prototype = Object.create(o.Geometry.prototype), o.ExtrudeGeometry.prototype.constructor = o.ExtrudeGeometry, o.ExtrudeGeometry.prototype.addShapeList = function (t, e) {
            for (var i = t.length, n = 0; n < i; n++) {
                var r = t[n];
                this.addShape(r, e)
            }
        }, o.ExtrudeGeometry.prototype.addShape = function (t, e) {
            function i(t, e, i) {
                return e.clone().multiplyScalar(i).add(t)
            }

            function n(t, e, i) {
                var n, r, s = 1,
                    a = t.x - e.x,
                    h = t.y - e.y,
                    l = i.x - t.x,
                    c = i.y - t.y,
                    u = a * a + h * h,
                    p = a * c - h * l;
                if (Math.abs(p) > Number.EPSILON) {
                    var d = Math.sqrt(u),
                        f = Math.sqrt(l * l + c * c),
                        m = e.x - h / d,
                        g = e.y + a / d,
                        v = i.x - c / f,
                        y = i.y + l / f,
                        _ = ((v - m) * c - (y - g) * l) / (a * c - h * l);
                    n = m + a * _ - t.x, r = g + h * _ - t.y;
                    var x = n * n + r * r;
                    if (x <= 2) return new o.Vector2(n, r);
                    s = Math.sqrt(x / 2)
                } else {
                    var b = !1;
                    a > Number.EPSILON ? l > Number.EPSILON && (b = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (b = !0) : Math.sign(h) === Math.sign(c) && (b = !0), b ? (n = -h, r = a, s = Math.sqrt(u)) : (n = a, r = h, s = Math.sqrt(u / 2))
                }
                return new o.Vector2(n / s, r / s)
            }

            function r() {
                if (x) {
                    var t = 0,
                        e = j * t;
                    for (X = 0; X < H; X++) V = B[X], l(V[2] + e, V[1] + e, V[0] + e);
                    for (t = w + 2 * _, e = j * t, X = 0; X < H; X++) V = B[X], l(V[0] + e, V[1] + e, V[2] + e)
                } else {
                    for (X = 0; X < H; X++) V = B[X], l(V[2], V[1], V[0]);
                    for (X = 0; X < H; X++) V = B[X], l(V[0] + j * w, V[1] + j * w, V[2] + j * w)
                }
            }

            function s() {
                var t = 0;
                for (a(k, t), t += k.length, A = 0, C = I.length; A < C; A++) E = I[A], a(E, t), t += E.length
            }

            function a(t, e) {
                var i, n;
                for (X = t.length; --X >= 0;) {
                    i = X, n = X - 1, n < 0 && (n = t.length - 1);
                    var r = 0,
                        o = w + 2 * _;
                    for (r = 0; r < o; r++) {
                        var s = j * r,
                            a = j * (r + 1),
                            h = e + i + s,
                            l = e + n + s,
                            u = e + n + a,
                            p = e + i + a;
                        c(h, l, u, p, t, r, o, i, n)
                    }
                }
            }

            function h(t, e, i) {
                L.vertices.push(new o.Vector3(t, e, i))
            }

            function l(t, e, i) {
                t += R, e += R, i += R, L.faces.push(new o.Face3(t, e, i, null, null, 0));
                var n = M.generateTopUV(L, t, e, i);
                L.faceVertexUvs[0].push(n)
            }

            function c(t, e, i, n, r, s, a, h, l) {
                t += R, e += R, i += R, n += R, L.faces.push(new o.Face3(t, e, n, null, null, 1)), L.faces.push(new o.Face3(e, i, n, null, null, 1));
                var c = M.generateSideWallUV(L, t, e, i, n);
                L.faceVertexUvs[0].push([c[0], c[1], c[3]]), L.faceVertexUvs[0].push([c[1], c[2], c[3]])
            }
            var u, p, d, f, m, g = void 0 !== e.amount ? e.amount : 100,
                v = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                y = void 0 !== e.bevelSize ? e.bevelSize : v - 2,
                _ = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                x = void 0 === e.bevelEnabled || e.bevelEnabled,
                b = void 0 !== e.curveSegments ? e.curveSegments : 12,
                w = void 0 !== e.steps ? e.steps : 1,
                S = e.extrudePath,
                T = !1,
                M = void 0 !== e.UVGenerator ? e.UVGenerator : o.ExtrudeGeometry.WorldUVGenerator;
            S && (u = S.getSpacedPoints(w), T = !0, x = !1, p = void 0 !== e.frames ? e.frames : new o.TubeGeometry.FrenetFrames(S, w, (!1)), d = new o.Vector3, f = new o.Vector3, m = new o.Vector3), x || (_ = 0, v = 0, y = 0);
            var E, A, C, L = this,
                R = this.vertices.length,
                P = t.extractPoints(b),
                O = P.shape,
                I = P.holes,
                D = !o.ShapeUtils.isClockWise(O);
            if (D) {
                for (O = O.reverse(), A = 0, C = I.length; A < C; A++) E = I[A], o.ShapeUtils.isClockWise(E) && (I[A] = E.reverse());
                D = !1
            }
            var B = o.ShapeUtils.triangulateShape(O, I),
                k = O;
            for (A = 0, C = I.length; A < C; A++) E = I[A], O = O.concat(E);
            for (var F, N, U, G, z, V, j = O.length, H = B.length, W = [], X = 0, Y = k.length, q = Y - 1, K = X + 1; X < Y; X++, q++, K++) q === Y && (q = 0), K === Y && (K = 0), W[X] = n(k[X], k[q], k[K]);
            var Z, J = [],
                Q = W.concat();
            for (A = 0, C = I.length; A < C; A++) {
                for (E = I[A], Z = [], X = 0, Y = E.length, q = Y - 1, K = X + 1; X < Y; X++, q++, K++) q === Y && (q = 0), K === Y && (K = 0), Z[X] = n(E[X], E[q], E[K]);
                J.push(Z), Q = Q.concat(Z)
            }
            for (F = 0; F < _; F++) {
                for (U = F / _, G = v * (1 - U), N = y * Math.sin(U * Math.PI / 2), X = 0, Y = k.length; X < Y; X++) z = i(k[X], W[X], N), h(z.x, z.y, -G);
                for (A = 0, C = I.length; A < C; A++)
                    for (E = I[A], Z = J[A], X = 0, Y = E.length; X < Y; X++) z = i(E[X], Z[X], N), h(z.x, z.y, -G)
            }
            for (N = y, X = 0; X < j; X++) z = x ? i(O[X], Q[X], N) : O[X], T ? (f.copy(p.normals[0]).multiplyScalar(z.x), d.copy(p.binormals[0]).multiplyScalar(z.y), m.copy(u[0]).add(f).add(d), h(m.x, m.y, m.z)) : h(z.x, z.y, 0);
            var $;
            for ($ = 1; $ <= w; $++)
                for (X = 0; X < j; X++) z = x ? i(O[X], Q[X], N) : O[X], T ? (f.copy(p.normals[$]).multiplyScalar(z.x), d.copy(p.binormals[$]).multiplyScalar(z.y), m.copy(u[$]).add(f).add(d), h(m.x, m.y, m.z)) : h(z.x, z.y, g / w * $);
            for (F = _ - 1; F >= 0; F--) {
                for (U = F / _, G = v * (1 - U), N = y * Math.sin(U * Math.PI / 2), X = 0, Y = k.length; X < Y; X++) z = i(k[X], W[X], N), h(z.x, z.y, g + G);
                for (A = 0, C = I.length; A < C; A++)
                    for (E = I[A], Z = J[A], X = 0, Y = E.length; X < Y; X++) z = i(E[X], Z[X], N), T ? h(z.x, z.y + u[w - 1].y, u[w - 1].x + G) : h(z.x, z.y, g + G)
            }
            r(), s()
        }, o.ExtrudeGeometry.WorldUVGenerator = {
            generateTopUV: function (t, e, i, n) {
                var r = t.vertices,
                    s = r[e],
                    a = r[i],
                    h = r[n];
                return [new o.Vector2(s.x, s.y), new o.Vector2(a.x, a.y), new o.Vector2(h.x, h.y)]
            },
            generateSideWallUV: function (t, e, i, n, r) {
                var s = t.vertices,
                    a = s[e],
                    h = s[i],
                    l = s[n],
                    c = s[r];
                return Math.abs(a.y - h.y) < .01 ? [new o.Vector2(a.x, 1 - a.z), new o.Vector2(h.x, 1 - h.z), new o.Vector2(l.x, 1 - l.z), new o.Vector2(c.x, 1 - c.z)] : [new o.Vector2(a.y, 1 - a.z), new o.Vector2(h.y, 1 - h.z), new o.Vector2(l.y, 1 - l.z), new o.Vector2(c.y, 1 - c.z)]
            }
        }, o.ShapeGeometry = function (t, e) {
            o.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(t) === !1 && (t = [t]), this.addShapeList(t, e), this.computeFaceNormals()
        }, o.ShapeGeometry.prototype = Object.create(o.Geometry.prototype), o.ShapeGeometry.prototype.constructor = o.ShapeGeometry, o.ShapeGeometry.prototype.addShapeList = function (t, e) {
            for (var i = 0, n = t.length; i < n; i++) this.addShape(t[i], e);
            return this
        }, o.ShapeGeometry.prototype.addShape = function (t, e) {
            void 0 === e && (e = {});
            var i, n, r, s = void 0 !== e.curveSegments ? e.curveSegments : 12,
                a = e.material,
                h = void 0 === e.UVGenerator ? o.ExtrudeGeometry.WorldUVGenerator : e.UVGenerator,
                l = this.vertices.length,
                c = t.extractPoints(s),
                u = c.shape,
                p = c.holes,
                d = !o.ShapeUtils.isClockWise(u);
            if (d) {
                for (u = u.reverse(), i = 0, n = p.length; i < n; i++) r = p[i], o.ShapeUtils.isClockWise(r) && (p[i] = r.reverse());
                d = !1
            }
            var f = o.ShapeUtils.triangulateShape(u, p);
            for (i = 0, n = p.length; i < n; i++) r = p[i], u = u.concat(r);
            var m, g, v = u.length,
                y = f.length;
            for (i = 0; i < v; i++) m = u[i], this.vertices.push(new o.Vector3(m.x, m.y, 0));
            for (i = 0; i < y; i++) {
                g = f[i];
                var _ = g[0] + l,
                    x = g[1] + l,
                    b = g[2] + l;
                this.faces.push(new o.Face3(_, x, b, null, null, a)), this.faceVertexUvs[0].push(h.generateTopUV(this, _, x, b))
            }
        }, o.LatheBufferGeometry = function (t, e, i, n) {
            o.BufferGeometry.call(this), this.type = "LatheBufferGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: i,
                phiLength: n
            }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = o.Math.clamp(n, 0, 2 * Math.PI);
            var r, s, a, h = (e + 1) * t.length,
                l = e * t.length * 2 * 3,
                c = new o.BufferAttribute(new (l > 65535 ? Uint32Array : Uint16Array)(l), 1),
                u = new o.BufferAttribute(new Float32Array(3 * h), 3),
                p = new o.BufferAttribute(new Float32Array(2 * h), 2),
                d = 0,
                f = 0,
                m = (1 / (t.length - 1), 1 / e),
                g = new o.Vector3,
                v = new o.Vector2;
            for (s = 0; s <= e; s++) {
                var y = i + s * m * n,
                    _ = Math.sin(y),
                    x = Math.cos(y);
                for (a = 0; a <= t.length - 1; a++) g.x = t[a].x * _, g.y = t[a].y, g.z = t[a].x * x, u.setXYZ(d, g.x, g.y, g.z), v.x = s / e, v.y = a / (t.length - 1), p.setXY(d, v.x, v.y), d++
            }
            for (s = 0; s < e; s++)
                for (a = 0; a < t.length - 1; a++) {
                    r = a + s * t.length;
                    var b = r,
                        w = r + t.length,
                        S = r + t.length + 1,
                        T = r + 1;
                    c.setX(f, b), f++, c.setX(f, w), f++, c.setX(f, T), f++, c.setX(f, w), f++, c.setX(f, S), f++, c.setX(f, T), f++
                }
            if (this.setIndex(c), this.addAttribute("position", u), this.addAttribute("uv", p), this.computeVertexNormals(), n === 2 * Math.PI) {
                var M = this.attributes.normal.array,
                    E = new o.Vector3,
                    A = new o.Vector3,
                    C = new o.Vector3;
                for (r = e * t.length * 3, s = 0, a = 0; s < t.length; s++, a += 3) E.x = M[a + 0], E.y = M[a + 1], E.z = M[a + 2], A.x = M[r + a + 0], A.y = M[r + a + 1], A.z = M[r + a + 2], C.addVectors(E, A).normalize(), M[a + 0] = M[r + a + 0] = C.x, M[a + 1] = M[r + a + 1] = C.y, M[a + 2] = M[r + a + 2] = C.z
            }
        }, o.LatheBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.LatheBufferGeometry.prototype.constructor = o.LatheBufferGeometry, o.LatheGeometry = function (t, e, i, n) {
            o.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: i,
                phiLength: n
            }, this.fromBufferGeometry(new o.LatheBufferGeometry(t, e, i, n)), this.mergeVertices()
        }, o.LatheGeometry.prototype = Object.create(o.Geometry.prototype), o.LatheGeometry.prototype.constructor = o.LatheGeometry, o.PlaneGeometry = function (t, e, i, n) {
            o.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: n
            }, this.fromBufferGeometry(new o.PlaneBufferGeometry(t, e, i, n))
        }, o.PlaneGeometry.prototype = Object.create(o.Geometry.prototype), o.PlaneGeometry.prototype.constructor = o.PlaneGeometry, o.PlaneBufferGeometry = function (t, e, i, n) {
            o.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: n
            };
            for (var r = t / 2, s = e / 2, a = Math.floor(i) || 1, h = Math.floor(n) || 1, l = a + 1, c = h + 1, u = t / a, p = e / h, d = new Float32Array(l * c * 3), f = new Float32Array(l * c * 3), m = new Float32Array(l * c * 2), g = 0, v = 0, y = 0; y < c; y++)
                for (var _ = y * p - s, x = 0; x < l; x++) {
                    var b = x * u - r;
                    d[g] = b, d[g + 1] = -_, f[g + 2] = 1, m[v] = x / a, m[v + 1] = 1 - y / h, g += 3, v += 2
                }
            g = 0;
            for (var w = new (d.length / 3 > 65535 ? Uint32Array : Uint16Array)(a * h * 6), y = 0; y < h; y++)
                for (var x = 0; x < a; x++) {
                    var S = x + l * y,
                        T = x + l * (y + 1),
                        M = x + 1 + l * (y + 1),
                        E = x + 1 + l * y;
                    w[g] = S, w[g + 1] = T, w[g + 2] = E, w[g + 3] = T, w[g + 4] = M, w[g + 5] = E, g += 6
                }
            this.setIndex(new o.BufferAttribute(w, 1)), this.addAttribute("position", new o.BufferAttribute(d, 3)), this.addAttribute("normal", new o.BufferAttribute(f, 3)), this.addAttribute("uv", new o.BufferAttribute(m, 2))
        }, o.PlaneBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.PlaneBufferGeometry.prototype.constructor = o.PlaneBufferGeometry, o.RingBufferGeometry = function (t, e, i, n, r, s) {
            o.BufferGeometry.call(this), this.type = "RingBufferGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: i,
                phiSegments: n,
                thetaStart: r,
                thetaLength: s
            }, t = t || 20, e = e || 50, r = void 0 !== r ? r : 0, s = void 0 !== s ? s : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, n = void 0 !== n ? Math.max(1, n) : 1;
            var a, h, l, c = (i + 1) * (n + 1),
                u = i * n * 2 * 3,
                p = new o.BufferAttribute(new (u > 65535 ? Uint32Array : Uint16Array)(u), 1),
                d = new o.BufferAttribute(new Float32Array(3 * c), 3),
                f = new o.BufferAttribute(new Float32Array(3 * c), 3),
                m = new o.BufferAttribute(new Float32Array(2 * c), 2),
                g = 0,
                v = 0,
                y = t,
                _ = (e - t) / n,
                x = new o.Vector3,
                b = new o.Vector2;
            for (h = 0; h <= n; h++) {
                for (l = 0; l <= i; l++) a = r + l / i * s, x.x = y * Math.cos(a), x.y = y * Math.sin(a),
                    d.setXYZ(g, x.x, x.y, x.z), f.setXYZ(g, 0, 0, 1), b.x = (x.x / e + 1) / 2, b.y = (x.y / e + 1) / 2, m.setXY(g, b.x, b.y), g++;
                y += _
            }
            for (h = 0; h < n; h++) {
                var w = h * (i + 1);
                for (l = 0; l < i; l++) {
                    a = l + w;
                    var S = a,
                        T = a + i + 1,
                        M = a + i + 2,
                        E = a + 1;
                    p.setX(v, S), v++, p.setX(v, T), v++, p.setX(v, M), v++, p.setX(v, S), v++, p.setX(v, M), v++, p.setX(v, E), v++
                }
            }
            this.setIndex(p), this.addAttribute("position", d), this.addAttribute("normal", f), this.addAttribute("uv", m)
        }, o.RingBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.RingBufferGeometry.prototype.constructor = o.RingBufferGeometry, o.RingGeometry = function (t, e, i, n, r, s) {
            o.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: i,
                phiSegments: n,
                thetaStart: r,
                thetaLength: s
            }, this.fromBufferGeometry(new o.RingBufferGeometry(t, e, i, n, r, s))
        }, o.RingGeometry.prototype = Object.create(o.Geometry.prototype), o.RingGeometry.prototype.constructor = o.RingGeometry, o.SphereGeometry = function (t, e, i, n, r, s, a) {
            o.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: n,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, this.fromBufferGeometry(new o.SphereBufferGeometry(t, e, i, n, r, s, a))
        }, o.SphereGeometry.prototype = Object.create(o.Geometry.prototype), o.SphereGeometry.prototype.constructor = o.SphereGeometry, o.SphereBufferGeometry = function (t, e, i, n, r, s, a) {
            o.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: n,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, t = t || 50, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI, s = void 0 !== s ? s : 0, a = void 0 !== a ? a : Math.PI;
            for (var h = s + a, l = (e + 1) * (i + 1), c = new o.BufferAttribute(new Float32Array(3 * l), 3), u = new o.BufferAttribute(new Float32Array(3 * l), 3), p = new o.BufferAttribute(new Float32Array(2 * l), 2), d = 0, f = [], m = new o.Vector3, g = 0; g <= i; g++) {
                for (var v = [], y = g / i, _ = 0; _ <= e; _++) {
                    var x = _ / e,
                        b = -t * Math.cos(n + x * r) * Math.sin(s + y * a),
                        w = t * Math.cos(s + y * a),
                        S = t * Math.sin(n + x * r) * Math.sin(s + y * a);
                    m.set(b, w, S).normalize(), c.setXYZ(d, b, w, S), u.setXYZ(d, m.x, m.y, m.z), p.setXY(d, x, 1 - y), v.push(d), d++
                }
                f.push(v)
            }
            for (var T = [], g = 0; g < i; g++)
                for (var _ = 0; _ < e; _++) {
                    var M = f[g][_ + 1],
                        E = f[g][_],
                        A = f[g + 1][_],
                        C = f[g + 1][_ + 1];
                    (0 !== g || s > 0) && T.push(M, E, C), (g !== i - 1 || h < Math.PI) && T.push(E, A, C)
                }
            this.setIndex(new (c.count > 65535 ? o.Uint32Attribute : o.Uint16Attribute)(T, 1)), this.addAttribute("position", c), this.addAttribute("normal", u), this.addAttribute("uv", p), this.boundingSphere = new o.Sphere(new o.Vector3, t)
        }, o.SphereBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.SphereBufferGeometry.prototype.constructor = o.SphereBufferGeometry, o.TextGeometry = function (t, e) {
            e = e || {};
            var i = e.font;
            if (i instanceof o.Font == !1) return new o.Geometry;
            var n = i.generateShapes(t, e.size, e.curveSegments);
            e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), o.ExtrudeGeometry.call(this, n, e), this.type = "TextGeometry"
        }, o.TextGeometry.prototype = Object.create(o.ExtrudeGeometry.prototype), o.TextGeometry.prototype.constructor = o.TextGeometry, o.TorusBufferGeometry = function (t, e, i, n, r) {
            o.BufferGeometry.call(this), this.type = "TorusBufferGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: n,
                arc: r
            }, t = t || 100, e = e || 40, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
            var s, a, h = (i + 1) * (n + 1),
                l = i * n * 2 * 3,
                c = new (l > 65535 ? Uint32Array : Uint16Array)(l),
                u = new Float32Array(3 * h),
                p = new Float32Array(3 * h),
                d = new Float32Array(2 * h),
                f = 0,
                m = 0,
                g = 0,
                v = new o.Vector3,
                y = new o.Vector3,
                _ = new o.Vector3;
            for (s = 0; s <= i; s++)
                for (a = 0; a <= n; a++) {
                    var x = a / n * r,
                        b = s / i * Math.PI * 2;
                    y.x = (t + e * Math.cos(b)) * Math.cos(x), y.y = (t + e * Math.cos(b)) * Math.sin(x), y.z = e * Math.sin(b), u[f] = y.x, u[f + 1] = y.y, u[f + 2] = y.z, v.x = t * Math.cos(x), v.y = t * Math.sin(x), _.subVectors(y, v).normalize(), p[f] = _.x, p[f + 1] = _.y, p[f + 2] = _.z, d[m] = a / n, d[m + 1] = s / i, f += 3, m += 2
                }
            for (s = 1; s <= i; s++)
                for (a = 1; a <= n; a++) {
                    var w = (n + 1) * s + a - 1,
                        S = (n + 1) * (s - 1) + a - 1,
                        T = (n + 1) * (s - 1) + a,
                        M = (n + 1) * s + a;
                    c[g] = w, c[g + 1] = S, c[g + 2] = M, c[g + 3] = S, c[g + 4] = T, c[g + 5] = M, g += 6
                }
            this.setIndex(new o.BufferAttribute(c, 1)), this.addAttribute("position", new o.BufferAttribute(u, 3)), this.addAttribute("normal", new o.BufferAttribute(p, 3)), this.addAttribute("uv", new o.BufferAttribute(d, 2))
        }, o.TorusBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.TorusBufferGeometry.prototype.constructor = o.TorusBufferGeometry, o.TorusGeometry = function (t, e, i, n, r) {
            o.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: n,
                arc: r
            }, this.fromBufferGeometry(new o.TorusBufferGeometry(t, e, i, n, r))
        }, o.TorusGeometry.prototype = Object.create(o.Geometry.prototype), o.TorusGeometry.prototype.constructor = o.TorusGeometry, o.TorusKnotBufferGeometry = function (t, e, i, n, r, s) {
            function a(t, e, i, n, r) {
                var o = Math.cos(t),
                    s = Math.sin(t),
                    a = i / e * t,
                    h = Math.cos(a);
                r.x = n * (2 + h) * .5 * o, r.y = n * (2 + h) * s * .5, r.z = n * Math.sin(a) * .5
            }
            o.BufferGeometry.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: i,
                radialSegments: n,
                p: r,
                q: s
            }, t = t || 100, e = e || 40, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, s = s || 3;
            var h, l, c = (n + 1) * (i + 1),
                u = n * i * 2 * 3,
                p = new o.BufferAttribute(new (u > 65535 ? Uint32Array : Uint16Array)(u), 1),
                d = new o.BufferAttribute(new Float32Array(3 * c), 3),
                f = new o.BufferAttribute(new Float32Array(3 * c), 3),
                m = new o.BufferAttribute(new Float32Array(2 * c), 2),
                g = 0,
                v = 0,
                y = new o.Vector3,
                _ = new o.Vector3,
                x = new o.Vector2,
                b = new o.Vector3,
                w = new o.Vector3,
                S = new o.Vector3,
                T = new o.Vector3,
                M = new o.Vector3;
            for (h = 0; h <= i; ++h) {
                var E = h / i * r * Math.PI * 2;
                for (a(E, r, s, t, b), a(E + .01, r, s, t, w), T.subVectors(w, b), M.addVectors(w, b), S.crossVectors(T, M), M.crossVectors(S, T), S.normalize(), M.normalize(), l = 0; l <= n; ++l) {
                    var A = l / n * Math.PI * 2,
                        C = -e * Math.cos(A),
                        L = e * Math.sin(A);
                    y.x = b.x + (C * M.x + L * S.x), y.y = b.y + (C * M.y + L * S.y), y.z = b.z + (C * M.z + L * S.z), d.setXYZ(g, y.x, y.y, y.z), _.subVectors(y, b).normalize(), f.setXYZ(g, _.x, _.y, _.z), x.x = h / i, x.y = l / n, m.setXY(g, x.x, x.y), g++
                }
            }
            for (l = 1; l <= i; l++)
                for (h = 1; h <= n; h++) {
                    var R = (n + 1) * (l - 1) + (h - 1),
                        P = (n + 1) * l + (h - 1),
                        O = (n + 1) * l + h,
                        I = (n + 1) * (l - 1) + h;
                    p.setX(v, R), v++, p.setX(v, P), v++, p.setX(v, I), v++, p.setX(v, P), v++, p.setX(v, O), v++, p.setX(v, I), v++
                }
            this.setIndex(p), this.addAttribute("position", d), this.addAttribute("normal", f), this.addAttribute("uv", m)
        }, o.TorusKnotBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.TorusKnotBufferGeometry.prototype.constructor = o.TorusKnotBufferGeometry, o.TorusKnotGeometry = function (t, e, i, n, r, s, a) {
            o.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: i,
                radialSegments: n,
                p: r,
                q: s
            }, this.fromBufferGeometry(new o.TorusKnotBufferGeometry(t, e, i, n, r, s)), this.mergeVertices()
        }, o.TorusKnotGeometry.prototype = Object.create(o.Geometry.prototype), o.TorusKnotGeometry.prototype.constructor = o.TorusKnotGeometry, o.TubeGeometry = function (t, e, i, n, r, s) {
            function a(t, e, i) {
                return R.vertices.push(new o.Vector3(t, e, i)) - 1
            }
            o.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
                path: t,
                segments: e,
                radius: i,
                radialSegments: n,
                closed: r,
                taper: s
            }, e = e || 64, i = i || 1, n = n || 8, r = r || !1, s = s || o.TubeGeometry.NoTaper;
            var h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, S, T, M, E, A, C, L = [],
                R = this,
                P = e + 1,
                O = new o.Vector3,
                I = new o.TubeGeometry.FrenetFrames(t, e, r),
                D = I.tangents,
                B = I.normals,
                k = I.binormals;
            for (this.tangents = D, this.normals = B, this.binormals = k, v = 0; v < P; v++)
                for (L[v] = [], u = v / (P - 1), g = t.getPointAt(u), h = D[v], l = B[v], c = k[v], d = i * s(u), y = 0; y < n; y++) p = y / n * 2 * Math.PI, f = -d * Math.cos(p), m = d * Math.sin(p), O.copy(g), O.x += f * l.x + m * c.x, O.y += f * l.y + m * c.y, O.z += f * l.z + m * c.z, L[v][y] = a(O.x, O.y, O.z);
            for (v = 0; v < e; v++)
                for (y = 0; y < n; y++) _ = r ? (v + 1) % e : v + 1, x = (y + 1) % n, b = L[v][y], w = L[_][y], S = L[_][x], T = L[v][x], M = new o.Vector2(v / e, y / n), E = new o.Vector2((v + 1) / e, y / n), A = new o.Vector2((v + 1) / e, (y + 1) / n), C = new o.Vector2(v / e, (y + 1) / n), this.faces.push(new o.Face3(b, w, T)), this.faceVertexUvs[0].push([M, E, C]), this.faces.push(new o.Face3(w, S, T)), this.faceVertexUvs[0].push([E.clone(), A, C.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        }, o.TubeGeometry.prototype = Object.create(o.Geometry.prototype), o.TubeGeometry.prototype.constructor = o.TubeGeometry, o.TubeGeometry.NoTaper = function (t) {
            return 1
        }, o.TubeGeometry.SinusoidalTaper = function (t) {
            return Math.sin(Math.PI * t)
        }, o.TubeGeometry.FrenetFrames = function (t, e, i) {
            function n() {
                f[0] = new o.Vector3, m[0] = new o.Vector3, s = Number.MAX_VALUE, a = Math.abs(d[0].x), h = Math.abs(d[0].y), l = Math.abs(d[0].z), a <= s && (s = a, p.set(1, 0, 0)), h <= s && (s = h, p.set(0, 1, 0)), l <= s && p.set(0, 0, 1), g.crossVectors(d[0], p).normalize(), f[0].crossVectors(d[0], g), m[0].crossVectors(d[0], f[0])
            }
            var r, s, a, h, l, c, u, p = new o.Vector3,
                d = [],
                f = [],
                m = [],
                g = new o.Vector3,
                v = new o.Matrix4,
                y = e + 1;
            for (this.tangents = d, this.normals = f, this.binormals = m, c = 0; c < y; c++) u = c / (y - 1), d[c] = t.getTangentAt(u), d[c].normalize();
            for (n(), c = 1; c < y; c++) f[c] = f[c - 1].clone(), m[c] = m[c - 1].clone(), g.crossVectors(d[c - 1], d[c]), g.length() > Number.EPSILON && (g.normalize(), r = Math.acos(o.Math.clamp(d[c - 1].dot(d[c]), -1, 1)), f[c].applyMatrix4(v.makeRotationAxis(g, r))), m[c].crossVectors(d[c], f[c]);
            if (i)
                for (r = Math.acos(o.Math.clamp(f[0].dot(f[y - 1]), -1, 1)), r /= y - 1, d[0].dot(g.crossVectors(f[0], f[y - 1])) > 0 && (r = -r), c = 1; c < y; c++) f[c].applyMatrix4(v.makeRotationAxis(d[c], r * c)), m[c].crossVectors(d[c], f[c])
        }, o.PolyhedronGeometry = function (t, e, i, n) {
            function r(t) {
                var e = t.normalize().clone();
                e.index = u.vertices.push(e) - 1;
                var i = h(t) / 2 / Math.PI + .5,
                    n = l(t) / Math.PI + .5;
                return e.uv = new o.Vector2(i, 1 - n), e
            }

            function s(t, e, i, n) {
                var r = new o.Face3(t.index, e.index, i.index, [t.clone(), e.clone(), i.clone()], (void 0), n);
                u.faces.push(r), x.copy(t).add(e).add(i).divideScalar(3);
                var s = h(x);
                u.faceVertexUvs[0].push([c(t.uv, t, s), c(e.uv, e, s), c(i.uv, i, s)])
            }

            function a(t, e) {
                for (var i = Math.pow(2, e), n = r(u.vertices[t.a]), o = r(u.vertices[t.b]), a = r(u.vertices[t.c]), h = [], l = t.materialIndex, c = 0; c <= i; c++) {
                    h[c] = [];
                    for (var p = r(n.clone().lerp(a, c / i)), d = r(o.clone().lerp(a, c / i)), f = i - c, m = 0; m <= f; m++) 0 === m && c === i ? h[c][m] = p : h[c][m] = r(p.clone().lerp(d, m / f))
                }
                for (var c = 0; c < i; c++)
                    for (var m = 0; m < 2 * (i - c) - 1; m++) {
                        var g = Math.floor(m / 2);
                        m % 2 === 0 ? s(h[c][g + 1], h[c + 1][g], h[c][g], l) : s(h[c][g + 1], h[c + 1][g + 1], h[c + 1][g], l)
                    }
            }

            function h(t) {
                return Math.atan2(t.z, -t.x)
            }

            function l(t) {
                return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
            }

            function c(t, e, i) {
                return i < 0 && 1 === t.x && (t = new o.Vector2(t.x - 1, t.y)), 0 === e.x && 0 === e.z && (t = new o.Vector2(i / 2 / Math.PI + .5, t.y)), t.clone()
            }
            o.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t,
                indices: e,
                radius: i,
                detail: n
            }, i = i || 1, n = n || 0;
            for (var u = this, p = 0, d = t.length; p < d; p += 3) r(new o.Vector3(t[p], t[p + 1], t[p + 2]));
            for (var f = this.vertices, m = [], p = 0, g = 0, d = e.length; p < d; p += 3, g++) {
                var v = f[e[p]],
                    y = f[e[p + 1]],
                    _ = f[e[p + 2]];
                m[g] = new o.Face3(v.index, y.index, _.index, [v.clone(), y.clone(), _.clone()], (void 0), g)
            }
            for (var x = new o.Vector3, p = 0, d = m.length; p < d; p++) a(m[p], n);
            for (var p = 0, d = this.faceVertexUvs[0].length; p < d; p++) {
                var b = this.faceVertexUvs[0][p],
                    w = b[0].x,
                    S = b[1].x,
                    T = b[2].x,
                    M = Math.max(w, S, T),
                    E = Math.min(w, S, T);
                M > .9 && E < .1 && (w < .2 && (b[0].x += 1), S < .2 && (b[1].x += 1), T < .2 && (b[2].x += 1))
            }
            for (var p = 0, d = this.vertices.length; p < d; p++) this.vertices[p].multiplyScalar(i);
            this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new o.Sphere(new o.Vector3, i)
        }, o.PolyhedronGeometry.prototype = Object.create(o.Geometry.prototype), o.PolyhedronGeometry.prototype.constructor = o.PolyhedronGeometry, o.DodecahedronGeometry = function (t, e) {
            var i = (1 + Math.sqrt(5)) / 2,
                n = 1 / i,
                r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n],
                s = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
            o.PolyhedronGeometry.call(this, r, s, t, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, o.DodecahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.DodecahedronGeometry.prototype.constructor = o.DodecahedronGeometry, o.IcosahedronGeometry = function (t, e) {
            var i = (1 + Math.sqrt(5)) / 2,
                n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1],
                r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
            o.PolyhedronGeometry.call(this, n, r, t, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, o.IcosahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.IcosahedronGeometry.prototype.constructor = o.IcosahedronGeometry, o.OctahedronGeometry = function (t, e) {
            var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
                n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
            o.PolyhedronGeometry.call(this, i, n, t, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, o.OctahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.OctahedronGeometry.prototype.constructor = o.OctahedronGeometry, o.TetrahedronGeometry = function (t, e) {
            var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
                n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
            o.PolyhedronGeometry.call(this, i, n, t, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, o.TetrahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.TetrahedronGeometry.prototype.constructor = o.TetrahedronGeometry, o.ParametricGeometry = function (t, e, i) {
            o.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
                func: t,
                slices: e,
                stacks: i
            };
            var n, r, s, a, h, l = this.vertices,
                c = this.faces,
                u = this.faceVertexUvs[0],
                p = e + 1;
            for (n = 0; n <= i; n++)
                for (h = n / i, r = 0; r <= e; r++) a = r / e, s = t(a, h), l.push(s);
            var d, f, m, g, v, y, _, x;
            for (n = 0; n < i; n++)
                for (r = 0; r < e; r++) d = n * p + r, f = n * p + r + 1, m = (n + 1) * p + r + 1, g = (n + 1) * p + r, v = new o.Vector2(r / e, n / i), y = new o.Vector2((r + 1) / e, n / i), _ = new o.Vector2((r + 1) / e, (n + 1) / i), x = new o.Vector2(r / e, (n + 1) / i), c.push(new o.Face3(d, f, g)), u.push([v, y, x]), c.push(new o.Face3(f, m, g)), u.push([y.clone(), _, x.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        }, o.ParametricGeometry.prototype = Object.create(o.Geometry.prototype), o.ParametricGeometry.prototype.constructor = o.ParametricGeometry, o.WireframeGeometry = function (t) {
            function e(t, e) {
                return t - e
            }
            o.BufferGeometry.call(this);
            var i = [0, 0],
                n = {},
                r = ["a", "b", "c"];
            if (t instanceof o.Geometry) {
                for (var s = t.vertices, a = t.faces, h = 0, l = new Uint32Array(6 * a.length), c = 0, u = a.length; c < u; c++)
                    for (var p = a[c], d = 0; d < 3; d++) {
                        i[0] = p[r[d]], i[1] = p[r[(d + 1) % 3]], i.sort(e);
                        var f = i.toString();
                        void 0 === n[f] && (l[2 * h] = i[0], l[2 * h + 1] = i[1], n[f] = !0, h++)
                    }
                for (var m = new Float32Array(2 * h * 3), c = 0, u = h; c < u; c++)
                    for (var d = 0; d < 2; d++) {
                        var g = s[l[2 * c + d]],
                            v = 6 * c + 3 * d;
                        m[v + 0] = g.x, m[v + 1] = g.y, m[v + 2] = g.z
                    }
                this.addAttribute("position", new o.BufferAttribute(m, 3))
            } else if (t instanceof o.BufferGeometry)
                if (null !== t.index) {
                    var y = t.index.array,
                        s = t.attributes.position,
                        _ = t.groups,
                        h = 0;
                    0 === _.length && t.addGroup(0, y.length);
                    for (var l = new Uint32Array(2 * y.length), x = 0, b = _.length; x < b; ++x)
                        for (var w = _[x], S = w.start, T = w.count, c = S, M = S + T; c < M; c += 3)
                            for (var d = 0; d < 3; d++) {
                                i[0] = y[c + d], i[1] = y[c + (d + 1) % 3], i.sort(e);
                                var f = i.toString();
                                void 0 === n[f] && (l[2 * h] = i[0], l[2 * h + 1] = i[1], n[f] = !0, h++)
                            }
                    for (var m = new Float32Array(2 * h * 3), c = 0, u = h; c < u; c++)
                        for (var d = 0; d < 2; d++) {
                            var v = 6 * c + 3 * d,
                                E = l[2 * c + d];
                            m[v + 0] = s.getX(E), m[v + 1] = s.getY(E), m[v + 2] = s.getZ(E)
                        }
                    this.addAttribute("position", new o.BufferAttribute(m, 3))
                } else {
                    for (var s = t.attributes.position.array, h = s.length / 3, A = h / 3, m = new Float32Array(2 * h * 3), c = 0, u = A; c < u; c++)
                        for (var d = 0; d < 3; d++) {
                            var v = 18 * c + 6 * d,
                                C = 9 * c + 3 * d;
                            m[v + 0] = s[C], m[v + 1] = s[C + 1], m[v + 2] = s[C + 2];
                            var E = 9 * c + 3 * ((d + 1) % 3);
                            m[v + 3] = s[E], m[v + 4] = s[E + 1], m[v + 5] = s[E + 2]
                        }
                    this.addAttribute("position", new o.BufferAttribute(m, 3))
                }
        }, o.WireframeGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.WireframeGeometry.prototype.constructor = o.WireframeGeometry, o.AxisHelper = function (t) {
            t = t || 1;
            var e = new Float32Array([0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]),
                i = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]),
                n = new o.BufferGeometry;
            n.addAttribute("position", new o.BufferAttribute(e, 3)), n.addAttribute("color", new o.BufferAttribute(i, 3));
            var r = new o.LineBasicMaterial({
                vertexColors: o.VertexColors
            });
            o.LineSegments.call(this, n, r)
        }, o.AxisHelper.prototype = Object.create(o.LineSegments.prototype), o.AxisHelper.prototype.constructor = o.AxisHelper, o.ArrowHelper = function () {
            var t = new o.Geometry;
            t.vertices.push(new o.Vector3(0, 0, 0), new o.Vector3(0, 1, 0));
            var e = new o.CylinderGeometry(0, .5, 1, 5, 1);
            return e.translate(0, -.5, 0),
                function (i, n, r, s, a, h) {
                    o.Object3D.call(this), void 0 === s && (s = 16776960), void 0 === r && (r = 1), void 0 === a && (a = .2 * r), void 0 === h && (h = .2 * a), this.position.copy(n), this.line = new o.Line(t, new o.LineBasicMaterial({
                        color: s
                    })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new o.Mesh(e, new o.MeshBasicMaterial({
                        color: s
                    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(i), this.setLength(r, a, h)
                }
        }(), o.ArrowHelper.prototype = Object.create(o.Object3D.prototype), o.ArrowHelper.prototype.constructor = o.ArrowHelper, o.ArrowHelper.prototype.setDirection = function () {
            var t, e = new o.Vector3;
            return function (i) {
                i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
            }
        }(), o.ArrowHelper.prototype.setLength = function (t, e, i) {
            void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
        }, o.ArrowHelper.prototype.setColor = function (t) {
            this.line.material.color.set(t), this.cone.material.color.set(t)
        }, o.BoxHelper = function (t) {
            var e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                i = new Float32Array(24),
                n = new o.BufferGeometry;
            n.setIndex(new o.BufferAttribute(e, 1)), n.addAttribute("position", new o.BufferAttribute(i, 3)), o.LineSegments.call(this, n, new o.LineBasicMaterial({
                color: 16776960
            })), void 0 !== t && this.update(t)
        }, o.BoxHelper.prototype = Object.create(o.LineSegments.prototype), o.BoxHelper.prototype.constructor = o.BoxHelper, o.BoxHelper.prototype.update = function () {
            var t = new o.Box3;
            return function (e) {
                if (t.setFromObject(e), !t.isEmpty()) {
                    var i = t.min,
                        n = t.max,
                        r = this.geometry.attributes.position,
                        o = r.array;
                    o[0] = n.x, o[1] = n.y, o[2] = n.z, o[3] = i.x, o[4] = n.y, o[5] = n.z, o[6] = i.x, o[7] = i.y, o[8] = n.z, o[9] = n.x, o[10] = i.y, o[11] = n.z, o[12] = n.x, o[13] = n.y, o[14] = i.z, o[15] = i.x, o[16] = n.y, o[17] = i.z, o[18] = i.x, o[19] = i.y, o[20] = i.z, o[21] = n.x, o[22] = i.y, o[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
                }
            }
        }(), o.BoundingBoxHelper = function (t, e) {
            var i = void 0 !== e ? e : 8947848;
            this.object = t, this.box = new o.Box3, o.Mesh.call(this, new o.BoxGeometry(1, 1, 1), new o.MeshBasicMaterial({
                color: i,
                wireframe: !0
            }))
        }, o.BoundingBoxHelper.prototype = Object.create(o.Mesh.prototype), o.BoundingBoxHelper.prototype.constructor = o.BoundingBoxHelper, o.BoundingBoxHelper.prototype.update = function () {
            this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
        }, o.CameraHelper = function (t) {
            function e(t, e, n) {
                i(t, n), i(e, n)
            }

            function i(t, e) {
                n.vertices.push(new o.Vector3), n.colors.push(new o.Color(e)), void 0 === s[t] && (s[t] = []), s[t].push(n.vertices.length - 1)
            }
            var n = new o.Geometry,
                r = new o.LineBasicMaterial({
                    color: 16777215,
                    vertexColors: o.FaceColors
                }),
                s = {},
                a = 16755200,
                h = 16711680,
                l = 43775,
                c = 16777215,
                u = 3355443;
            e("n1", "n2", a), e("n2", "n4", a), e("n4", "n3", a), e("n3", "n1", a), e("f1", "f2", a), e("f2", "f4", a), e("f4", "f3", a), e("f3", "f1", a), e("n1", "f1", a), e("n2", "f2", a), e("n3", "f3", a), e("n4", "f4", a), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", c), e("p", "c", u), e("cn1", "cn2", u), e("cn3", "cn4", u), e("cf1", "cf2", u), e("cf3", "cf4", u), o.LineSegments.call(this, n, r), this.camera = t, this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
        }, o.CameraHelper.prototype = Object.create(o.LineSegments.prototype), o.CameraHelper.prototype.constructor = o.CameraHelper, o.CameraHelper.prototype.update = function () {
            function t(t, o, s, a) {
                n.set(o, s, a).unproject(r);
                var h = i[t];
                if (void 0 !== h)
                    for (var l = 0, c = h.length; l < c; l++) e.vertices[h[l]].copy(n)
            }
            var e, i, n = new o.Vector3,
                r = new o.Camera;
            return function () {
                e = this.geometry, i = this.pointMap;
                var n = 1,
                    o = 1;
                r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -n, -o, -1), t("n2", n, -o, -1), t("n3", -n, o, -1), t("n4", n, o, -1), t("f1", -n, -o, 1), t("f2", n, -o, 1), t("f3", -n, o, 1), t("f4", n, o, 1), t("u1", .7 * n, 1.1 * o, -1), t("u2", .7 * -n, 1.1 * o, -1), t("u3", 0, 2 * o, -1), t("cf1", -n, 0, 1), t("cf2", n, 0, 1), t("cf3", 0, -o, 1), t("cf4", 0, o, 1), t("cn1", -n, 0, -1), t("cn2", n, 0, -1), t("cn3", 0, -o, -1), t("cn4", 0, o, -1), e.verticesNeedUpdate = !0
            }
        }(), o.DirectionalLightHelper = function (t, e) {
            o.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, e = e || 1;
            var i = new o.Geometry;
            i.vertices.push(new o.Vector3((-e), e, 0), new o.Vector3(e, e, 0), new o.Vector3(e, (-e), 0), new o.Vector3((-e), (-e), 0), new o.Vector3((-e), e, 0));
            var n = new o.LineBasicMaterial({
                fog: !1
            });
            n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new o.Line(i, n), this.add(this.lightPlane), i = new o.Geometry, i.vertices.push(new o.Vector3, new o.Vector3), n = new o.LineBasicMaterial({
                fog: !1
            }), n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new o.Line(i, n), this.add(this.targetLine), this.update()
        }, o.DirectionalLightHelper.prototype = Object.create(o.Object3D.prototype), o.DirectionalLightHelper.prototype.constructor = o.DirectionalLightHelper, o.DirectionalLightHelper.prototype.dispose = function () {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }, o.DirectionalLightHelper.prototype.update = function () {
            var t = new o.Vector3,
                e = new o.Vector3,
                i = new o.Vector3;
            return function () {
                t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(i), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
            }
        }(), o.EdgesHelper = function (t, e, i) {
            var n = void 0 !== e ? e : 16777215;
            o.LineSegments.call(this, new o.EdgesGeometry(t.geometry, i), new o.LineBasicMaterial({
                color: n
            })), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }, o.EdgesHelper.prototype = Object.create(o.LineSegments.prototype), o.EdgesHelper.prototype.constructor = o.EdgesHelper, o.FaceNormalsHelper = function (t, e, i, n) {
            this.object = t, this.size = void 0 !== e ? e : 1;
            var r = void 0 !== i ? i : 16776960,
                s = void 0 !== n ? n : 1,
                a = 0,
                h = this.object.geometry;
            h instanceof o.Geometry && (a = h.faces.length);
            var l = new o.BufferGeometry,
                c = new o.Float32Attribute(2 * a * 3, 3);
            l.addAttribute("position", c), o.LineSegments.call(this, l, new o.LineBasicMaterial({
                color: r,
                linewidth: s
            })), this.matrixAutoUpdate = !1, this.update()
        }, o.FaceNormalsHelper.prototype = Object.create(o.LineSegments.prototype), o.FaceNormalsHelper.prototype.constructor = o.FaceNormalsHelper, o.FaceNormalsHelper.prototype.update = function () {
            var t = new o.Vector3,
                e = new o.Vector3,
                i = new o.Matrix3;
            return function () {
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
                for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, s = o.vertices, a = o.faces, h = 0, l = 0, c = a.length; l < c; l++) {
                    var u = a[l],
                        p = u.normal;
                    t.copy(s[u.a]).add(s[u.b]).add(s[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(h, t.x, t.y, t.z), h += 1, r.setXYZ(h, e.x, e.y, e.z), h += 1
                }
                return r.needsUpdate = !0, this
            }
        }(), o.GridHelper = function (t, e) {
            var i = new o.Geometry,
                n = new o.LineBasicMaterial({
                    vertexColors: o.VertexColors
                });
            this.color1 = new o.Color(4473924), this.color2 = new o.Color(8947848);
            for (var r = -t; r <= t; r += e) {
                i.vertices.push(new o.Vector3((-t), 0, r), new o.Vector3(t, 0, r), new o.Vector3(r, 0, (-t)), new o.Vector3(r, 0, t));
                var s = 0 === r ? this.color1 : this.color2;
                i.colors.push(s, s, s, s)
            }
            o.LineSegments.call(this, i, n)
        }, o.GridHelper.prototype = Object.create(o.LineSegments.prototype), o.GridHelper.prototype.constructor = o.GridHelper, o.GridHelper.prototype.setColors = function (t, e) {
            this.color1.set(t), this.color2.set(e), this.geometry.colorsNeedUpdate = !0
        }, o.HemisphereLightHelper = function (t, e) {
            o.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new o.Color, new o.Color];
            var i = new o.SphereGeometry(e, 4, 2);
            i.rotateX(-Math.PI / 2);
            for (var n = 0, r = 8; n < r; n++) i.faces[n].color = this.colors[n < 4 ? 0 : 1];
            var s = new o.MeshBasicMaterial({
                vertexColors: o.FaceColors,
                wireframe: !0
            });
            this.lightSphere = new o.Mesh(i, s), this.add(this.lightSphere), this.update()
        }, o.HemisphereLightHelper.prototype = Object.create(o.Object3D.prototype), o.HemisphereLightHelper.prototype.constructor = o.HemisphereLightHelper, o.HemisphereLightHelper.prototype.dispose = function () {
            this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
        }, o.HemisphereLightHelper.prototype.update = function () {
            var t = new o.Vector3;
            return function () {
                this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
            }
        }(), o.PointLightHelper = function (t, e) {
            this.light = t, this.light.updateMatrixWorld();
            var i = new o.SphereGeometry(e, 4, 2),
                n = new o.MeshBasicMaterial({
                    wireframe: !0,
                    fog: !1
                });
            n.color.copy(this.light.color).multiplyScalar(this.light.intensity), o.Mesh.call(this, i, n), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
        }, o.PointLightHelper.prototype = Object.create(o.Mesh.prototype), o.PointLightHelper.prototype.constructor = o.PointLightHelper, o.PointLightHelper.prototype.dispose = function () {
            this.geometry.dispose(), this.material.dispose()
        }, o.PointLightHelper.prototype.update = function () {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }, o.SkeletonHelper = function (t) {
            this.bones = this.getBoneList(t);
            for (var e = new o.Geometry, i = 0; i < this.bones.length; i++) {
                var n = this.bones[i];
                n.parent instanceof o.Bone && (e.vertices.push(new o.Vector3), e.vertices.push(new o.Vector3), e.colors.push(new o.Color(0, 0, 1)), e.colors.push(new o.Color(0, 1, 0)))
            }
            e.dynamic = !0;
            var r = new o.LineBasicMaterial({
                vertexColors: o.VertexColors,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            o.LineSegments.call(this, e, r), this.root = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        }, o.SkeletonHelper.prototype = Object.create(o.LineSegments.prototype), o.SkeletonHelper.prototype.constructor = o.SkeletonHelper, o.SkeletonHelper.prototype.getBoneList = function (t) {
            var e = [];
            t instanceof o.Bone && e.push(t);
            for (var i = 0; i < t.children.length; i++) e.push.apply(e, this.getBoneList(t.children[i]));
            return e
        }, o.SkeletonHelper.prototype.update = function () {
            for (var t = this.geometry, e = (new o.Matrix4).getInverse(this.root.matrixWorld), i = new o.Matrix4, n = 0, r = 0; r < this.bones.length; r++) {
                var s = this.bones[r];
                s.parent instanceof o.Bone && (i.multiplyMatrices(e, s.matrixWorld), t.vertices[n].setFromMatrixPosition(i), i.multiplyMatrices(e, s.parent.matrixWorld), t.vertices[n + 1].setFromMatrixPosition(i), n += 2)
            }
            t.verticesNeedUpdate = !0, t.computeBoundingSphere()
        }, o.SpotLightHelper = function (t) {
            o.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
            var e = new o.CylinderGeometry(0, 1, 1, 8, 1, (!0));
            e.translate(0, -.5, 0), e.rotateX(-Math.PI / 2);
            var i = new o.MeshBasicMaterial({
                wireframe: !0,
                fog: !1
            });
            this.cone = new o.Mesh(e, i), this.add(this.cone), this.update()
        }, o.SpotLightHelper.prototype = Object.create(o.Object3D.prototype), o.SpotLightHelper.prototype.constructor = o.SpotLightHelper, o.SpotLightHelper.prototype.dispose = function () {
            this.cone.geometry.dispose(), this.cone.material.dispose()
        }, o.SpotLightHelper.prototype.update = function () {
            var t = new o.Vector3,
                e = new o.Vector3;
            return function () {
                var i = this.light.distance ? this.light.distance : 1e4,
                    n = i * Math.tan(this.light.angle);
                this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
            }
        }(), o.VertexNormalsHelper = function (t, e, i, n) {
            this.object = t, this.size = void 0 !== e ? e : 1;
            var r = void 0 !== i ? i : 16711680,
                s = void 0 !== n ? n : 1,
                a = 0,
                h = this.object.geometry;
            h instanceof o.Geometry ? a = 3 * h.faces.length : h instanceof o.BufferGeometry && (a = h.attributes.normal.count);
            var l = new o.BufferGeometry,
                c = new o.Float32Attribute(2 * a * 3, 3);
            l.addAttribute("position", c), o.LineSegments.call(this, l, new o.LineBasicMaterial({
                color: r,
                linewidth: s
            })), this.matrixAutoUpdate = !1, this.update()
        }, o.VertexNormalsHelper.prototype = Object.create(o.LineSegments.prototype), o.VertexNormalsHelper.prototype.constructor = o.VertexNormalsHelper, o.VertexNormalsHelper.prototype.update = function () {
            var t = new o.Vector3,
                e = new o.Vector3,
                i = new o.Matrix3;
            return function () {
                var n = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
                var r = this.object.matrixWorld,
                    s = this.geometry.attributes.position,
                    a = this.object.geometry;
                if (a instanceof o.Geometry)
                    for (var h = a.vertices, l = a.faces, c = 0, u = 0, p = l.length; u < p; u++)
                        for (var d = l[u], f = 0, m = d.vertexNormals.length; f < m; f++) {
                            var g = h[d[n[f]]],
                                v = d.vertexNormals[f];
                            t.copy(g).applyMatrix4(r), e.copy(v).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), s.setXYZ(c, t.x, t.y, t.z), c += 1, s.setXYZ(c, e.x, e.y, e.z), c += 1
                        } else if (a instanceof o.BufferGeometry)
                            for (var y = a.attributes.position, _ = a.attributes.normal, c = 0, f = 0, m = y.count; f < m; f++) t.set(y.getX(f), y.getY(f), y.getZ(f)).applyMatrix4(r), e.set(_.getX(f), _.getY(f), _.getZ(f)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), s.setXYZ(c, t.x, t.y, t.z), c += 1, s.setXYZ(c, e.x, e.y, e.z), c += 1;
                return s.needsUpdate = !0, this
            }
        }(), o.WireframeHelper = function (t, e) {
            var i = void 0 !== e ? e : 16777215;
            o.LineSegments.call(this, new o.WireframeGeometry(t.geometry), new o.LineBasicMaterial({
                color: i
            })), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }, o.WireframeHelper.prototype = Object.create(o.LineSegments.prototype), o.WireframeHelper.prototype.constructor = o.WireframeHelper, o.ImmediateRenderObject = function (t) {
            o.Object3D.call(this), this.material = t, this.render = function (t) { }
        }, o.ImmediateRenderObject.prototype = Object.create(o.Object3D.prototype), o.ImmediateRenderObject.prototype.constructor = o.ImmediateRenderObject, o.MorphBlendMesh = function (t, e) {
            o.Mesh.call(this, t, e), this.animationsMap = {}, this.animationsList = [];
            var i = this.geometry.morphTargets.length,
                n = "__default",
                r = 0,
                s = i - 1,
                a = i / 1;
            this.createAnimation(n, r, s, a), this.setAnimationWeight(n, 1)
        }, o.MorphBlendMesh.prototype = Object.create(o.Mesh.prototype), o.MorphBlendMesh.prototype.constructor = o.MorphBlendMesh, o.MorphBlendMesh.prototype.createAnimation = function (t, e, i, n) {
            var r = {
                start: e,
                end: i,
                length: i - e + 1,
                fps: n,
                duration: (i - e) / n,
                lastFrame: 0,
                currentFrame: 0,
                active: !1,
                time: 0,
                direction: 1,
                weight: 1,
                directionBackwards: !1,
                mirroredLoop: !1
            };
            this.animationsMap[t] = r, this.animationsList.push(r)
        }, o.MorphBlendMesh.prototype.autoCreateAnimations = function (t) {
            for (var e, i = /([a-z]+)_?(\d+)/i, n = {}, r = this.geometry, o = 0, s = r.morphTargets.length; o < s; o++) {
                var a = r.morphTargets[o],
                    h = a.name.match(i);
                if (h && h.length > 1) {
                    var l = h[1];
                    n[l] || (n[l] = {
                        start: 1 / 0,
                        end: -(1 / 0)
                    });
                    var c = n[l];
                    o < c.start && (c.start = o), o > c.end && (c.end = o), e || (e = l)
                }
            }
            for (var l in n) {
                var c = n[l];
                this.createAnimation(l, c.start, c.end, t)
            }
            this.firstAnimation = e
        }, o.MorphBlendMesh.prototype.setAnimationDirectionForward = function (t) {
            var e = this.animationsMap[t];
            e && (e.direction = 1, e.directionBackwards = !1)
        }, o.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (t) {
            var e = this.animationsMap[t];
            e && (e.direction = -1, e.directionBackwards = !0)
        }, o.MorphBlendMesh.prototype.setAnimationFPS = function (t, e) {
            var i = this.animationsMap[t];
            i && (i.fps = e, i.duration = (i.end - i.start) / i.fps)
        }, o.MorphBlendMesh.prototype.setAnimationDuration = function (t, e) {
            var i = this.animationsMap[t];
            i && (i.duration = e, i.fps = (i.end - i.start) / i.duration)
        }, o.MorphBlendMesh.prototype.setAnimationWeight = function (t, e) {
            var i = this.animationsMap[t];
            i && (i.weight = e)
        }, o.MorphBlendMesh.prototype.setAnimationTime = function (t, e) {
            var i = this.animationsMap[t];
            i && (i.time = e)
        }, o.MorphBlendMesh.prototype.getAnimationTime = function (t) {
            var e = 0,
                i = this.animationsMap[t];
            return i && (e = i.time), e
        }, o.MorphBlendMesh.prototype.getAnimationDuration = function (t) {
            var e = -1,
                i = this.animationsMap[t];
            return i && (e = i.duration), e
        }, o.MorphBlendMesh.prototype.playAnimation = function (t) {
            var e = this.animationsMap[t];
            e && (e.time = 0, e.active = !0)
        }, o.MorphBlendMesh.prototype.stopAnimation = function (t) {
            var e = this.animationsMap[t];
            e && (e.active = !1)
        }, o.MorphBlendMesh.prototype.update = function (t) {
            for (var e = 0, i = this.animationsList.length; e < i; e++) {
                var n = this.animationsList[e];
                if (n.active) {
                    var r = n.duration / n.length;
                    n.time += n.direction * t, n.mirroredLoop ? (n.time > n.duration || n.time < 0) && (n.direction *= -1, n.time > n.duration && (n.time = n.duration, n.directionBackwards = !0), n.time < 0 && (n.time = 0, n.directionBackwards = !1)) : (n.time = n.time % n.duration, n.time < 0 && (n.time += n.duration));
                    var s = n.start + o.Math.clamp(Math.floor(n.time / r), 0, n.length - 1),
                        a = n.weight;
                    s !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0, this.morphTargetInfluences[n.currentFrame] = 1 * a, this.morphTargetInfluences[s] = 0, n.lastFrame = n.currentFrame, n.currentFrame = s);
                    var h = n.time % r / r;
                    n.directionBackwards && (h = 1 - h), n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = h * a, this.morphTargetInfluences[n.lastFrame] = (1 - h) * a) : this.morphTargetInfluences[n.currentFrame] = a
                }
            }
        }
};
