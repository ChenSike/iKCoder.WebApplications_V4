var JSManipulate = {
    blur: new BlurFilter,
    brightness: new BrightnessFilter,
    bump: new BumpFilter,
    circlesmear: new CircleSmearFilter,
    contrast: new ContrastFilter,
    crosssmear: new CrossSmearFilter,
    diffusion: new DiffusionFilter,
    dither: new DitherFilter,
    edge: new EdgeFilter,
    emboss: new EmbossFilter,
    exposure: new ExposureFilter,
    gain: new GainFilter,
    gamma: new GammaFilter,
    grayscale: new GrayscaleFilter,
    hue: new HueFilter,
    invert: new InvertFilter,
    kaleidoscope: new KaleidoscopeFilter,
    lensdistortion: new LensDistortionFilter,
    linesmear: new LineSmearFilter,
    maximum: new MaximumFilter,
    median: new MedianFilter,
    minimum: new MinimumFilter,
    noise: new NoiseFilter,
    oil: new OilFilter,
    opacity: new OpacityFilter,
    pinch: new PinchFilter,
    pixelate: new PixelationFilter,
    posterize: new PosterizeFilter,
    rgbadjust: new RGBAdjustFilter,
    saturation: new SaturationFilter,
    sawtoothripple: new SawtoothRippleFilter,
    sepia: new SepiaFilter,
    sharpen: new SharpenFilter,
    sineripple: new SineRippleFilter,
    solarize: new SolarizeFilter,
    sparkle: new SparkleFilter,
    squaresmear: new SquareSmearFilter,
    threshold: new ThresholdFilter,
    triangleripple: new TriangleRippleFilter,
    twirl: new TwirlFilter,
    vignette: new VignetteFilter,
    waterripple: new WaterRippleFilter
};
(function (b) {
    function c(b) {
        this.ok = false;
        b.charAt(0) == "#" && (b = b.substr(1, 6));
        var b = b.replace(/ /g, ""),
            b = b.toLowerCase(),
            e = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dodgerblue: "1e90ff",
                feldspar: "d19275",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslateblue: "8470ff",
                lightslategray: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                violetred: "d02090",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32"
            },
            f;
        for (f in e) b == f && (b = e[f]);
        var g = [{
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function (b) {
                return [parseInt(b[1]), parseInt(b[2]), parseInt(b[3])]
            }
        }, {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ["#00ff00", "336699"],
            process: function (b) {
                return [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)]
            }
        }, {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ["#fb0", "f0f"],
            process: function (b) {
                return [parseInt(b[1] + b[1], 16), parseInt(b[2] + b[2], 16), parseInt(b[3] + b[3], 16)]
            }
        }];
        for (f = 0; f < g.length; f++) {
            var h = g[f].process,
                j = g[f].re.exec(b);
            if (j) {
                channels = h(j);
                this.r = channels[0];
                this.g = channels[1];
                this.b = channels[2];
                this.ok = true
            }
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
        this.g = this.g < 0 || isNaN(this.g) ?
            0 : this.g > 255 ? 255 : this.g;
        this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
        this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
        };
        this.toHex = function () {
            var b = this.r.toString(16),
                c = this.g.toString(16),
                d = this.b.toString(16);
            b.length == 1 && (b = "0" + b);
            c.length == 1 && (c = "0" + c);
            d.length == 1 && (d = "0" + d);
            return "#" + b + c + d
        };
        this.getHelpXML = function () {
            for (var b = [], d = 0; d < g.length; d++)
                for (var f = g[d].example, h = 0; h < f.length; h++) b[b.length] = f[h];
            for (var j in e) b[b.length] = j;
            f = document.createElement("ul");
            f.setAttribute("id", "rgbcolor-examples");
            for (d = 0; d < b.length; d++) try {
                var p = document.createElement("li"),
                    s = new c(b[d]),
                    r = document.createElement("div");
                r.style.cssText = "margin: 3px; border: 1px solid black; background:" + s.toHex() + "; color:" + s.toHex();
                r.appendChild(document.createTextNode("test"));
                var o = document.createTextNode(" " + b[d] + " -> " + s.toRGB() + " -> " + s.toHex());
                p.appendChild(r);
                p.appendChild(o);
                f.appendChild(p)
            } catch (t) { }
            return f
        }
    }
    if (typeof define !== "undefined" && define.amd) define(function () {
        return c
    });
    else if (typeof module !== "undefined" && module.exports) module.exports = c;
    b.RGBColor = c
})("undefined" !== typeof window ? window : this);
(function (b, c) {
    if (typeof define !== "undefined" && define.amd) define("canvgModule", ["rgbcolor", "stackblur"], c);
    else if (typeof module !== "undefined" && module.exports) module.exports = c(require("rgbcolor"), require("stackblur"));
    b.canvg = c(b.RGBColor, b.stackBlur)
})("undefined" !== typeof window ? window : this, function (b, c) {
    function d(b) {
        var c = [0, 0, 0],
            d = function (d, e) {
                var f = b.match(d);
                if (f != null) {
                    c[e] = c[e] + f.length;
                    b = b.replace(d, " ")
                }
            },
            b = b.replace(/:not\(([^\)]*)\)/g, "     $1 "),
            b = b.replace(/{[\s\S]*/gm, " ");
        d(h, 1);
        d(j, 0);
        d(k, 1);
        d(l, 2);
        d(m, 1);
        d(n, 1);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        d(q, 2);
        return c.join("")
    }

    function e(e) {
        var f = {
            opts: e,
            FRAMERATE: 30,
            MAX_VIRTUAL_PIXELS: 3E4,
            log: function () { }
        };
        if (f.opts.log == true && typeof console != "undefined") f.log = function (b) {
            console.log(b)
        };
        f.init = function (b) {
            var c = 0;
            f.UniqueId = function () {
                c++;
                return "canvg" + c
            };
            f.Definitions = {};
            f.Styles = {};
            f.StylesSpecificity = {};
            f.Animations = [];
            f.Images = [];
            f.ctx = b;
            f.ViewPort = new function () {
                this.viewPorts = [];
                this.Clear = function () {
                    this.viewPorts = []
                };
                this.SetCurrent = function (b, c) {
                    this.viewPorts.push({
                        width: b,
                        height: c
                    })
                };
                this.RemoveCurrent = function () {
                    this.viewPorts.pop()
                };
                this.Current = function () {
                    return this.viewPorts[this.viewPorts.length - 1]
                };
                this.width = function () {
                    return this.Current().width
                };
                this.height = function () {
                    return this.Current().height
                };
                this.ComputeSize = function (b) {
                    return b != null && typeof b == "number" ? b : b == "x" ? this.width() : b == "y" ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
                }
            }
        };
        f.init();
        f.ImagesLoaded =
            function () {
                for (var b = 0; b < f.Images.length; b++)
                    if (!f.Images[b].loaded) return false;
                return true
            };
        f.trim = function (b) {
            return b.replace(/^\s+|\s+$/g, "")
        };
        f.compressSpaces = function (b) {
            return b.replace(/[\s\r\t\n]+/gm, " ")
        };
        f.ajax = function (b) {
            var c;
            if (c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")) {
                c.open("GET", b, false);
                c.send(null);
                return c.responseText
            }
            return null
        };
        f.parseXml = function (b) {
            if (typeof Windows != "undefined" && typeof Windows.Data != "undefined" && typeof Windows.Data.Xml !=
                "undefined") {
                var c = new Windows.Data.Xml.Dom.XmlDocument,
                    d = new Windows.Data.Xml.Dom.XmlLoadSettings;
                d.prohibitDtd = false;
                c.loadXml(b, d);
                return c
            }
            if (window.DOMParser) return (new DOMParser).parseFromString(b, "text/xml");
            b = b.replace(/<!DOCTYPE svg[^>]*>/, "");
            c = new ActiveXObject("Microsoft.XMLDOM");
            c.async = "false";
            c.loadXML(b);
            return c
        };
        f.Property = function (b, c) {
            this.name = b;
            this.value = c
        };
        f.Property.prototype.getValue = function () {
            return this.value
        };
        f.Property.prototype.hasValue = function () {
            return this.value !=
                null && this.value !== ""
        };
        f.Property.prototype.numValue = function () {
            if (!this.hasValue()) return 0;
            var b = parseFloat(this.value);
            (this.value + "").match(/%$/) && (b = b / 100);
            return b
        };
        f.Property.prototype.valueOrDefault = function (b) {
            return this.hasValue() ? this.value : b
        };
        f.Property.prototype.numValueOrDefault = function (b) {
            return this.hasValue() ? this.numValue() : b
        };
        f.Property.prototype.addOpacity = function (c) {
            var d = this.value;
            if (c.value != null && c.value != "" && typeof this.value == "string") {
                var e = new b(this.value);
                e.ok && (d =
                    "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + c.numValue() + ")")
            }
            return new f.Property(this.name, d)
        };
        f.Property.prototype.getDefinition = function () {
            var b = this.value.match(/#([^\)'"]+)/);
            b && (b = b[1]);
            if (!b) b = this.value;
            return f.Definitions[b]
        };
        f.Property.prototype.isUrlDefinition = function () {
            return this.value.indexOf("url(") == 0
        };
        f.Property.prototype.getFillStyleDefinition = function (b, c) {
            var d = this.getDefinition();
            if (d != null && d.createGradient) return d.createGradient(f.ctx, b, c);
            if (d != null && d.createPattern) {
                if (d.getHrefAttribute().hasValue()) {
                    var e =
                        d.attribute("patternTransform"),
                        d = d.getHrefAttribute().getDefinition();
                    if (e.hasValue()) d.attribute("patternTransform", true).value = e.value
                }
                return d.createPattern(f.ctx, b)
            }
            return null
        };
        f.Property.prototype.getDPI = function () {
            return 96
        };
        f.Property.prototype.getEM = function (b) {
            var c = 12,
                d = new f.Property("fontSize", f.Font.Parse(f.ctx.font).fontSize);
            d.hasValue() && (c = d.toPixels(b));
            return c
        };
        f.Property.prototype.getUnits = function () {
            return (this.value + "").replace(/[0-9\.\-]/g, "")
        };
        f.Property.prototype.toPixels =
            function (b, c) {
                if (!this.hasValue()) return 0;
                var d = this.value + "";
                if (d.match(/em$/)) return this.numValue() * this.getEM(b);
                if (d.match(/ex$/)) return this.numValue() * this.getEM(b) / 2;
                if (d.match(/px$/)) return this.numValue();
                if (d.match(/pt$/)) return this.numValue() * this.getDPI(b) * (1 / 72);
                if (d.match(/pc$/)) return this.numValue() * 15;
                if (d.match(/cm$/)) return this.numValue() * this.getDPI(b) / 2.54;
                if (d.match(/mm$/)) return this.numValue() * this.getDPI(b) / 25.4;
                if (d.match(/in$/)) return this.numValue() * this.getDPI(b);
                if (d.match(/%$/)) return this.numValue() * f.ViewPort.ComputeSize(b);
                d = this.numValue();
                return c && d < 1 ? d * f.ViewPort.ComputeSize(b) : d
            };
        f.Property.prototype.toMilliseconds = function () {
            if (!this.hasValue()) return 0;
            var b = this.value + "";
            if (b.match(/s$/)) return this.numValue() * 1E3;
            b.match(/ms$/);
            return this.numValue()
        };
        f.Property.prototype.toRadians = function () {
            if (!this.hasValue()) return 0;
            var b = this.value + "";
            return b.match(/deg$/) ? this.numValue() * (Math.PI / 180) : b.match(/grad$/) ? this.numValue() * (Math.PI / 200) : b.match(/rad$/) ?
                this.numValue() : this.numValue() * (Math.PI / 180)
        };
        var h = {
            baseline: "alphabetic",
            "before-edge": "top",
            "text-before-edge": "top",
            middle: "middle",
            central: "middle",
            "after-edge": "bottom",
            "text-after-edge": "bottom",
            ideographic: "ideographic",
            alphabetic: "alphabetic",
            hanging: "hanging",
            mathematical: "alphabetic"
        };
        f.Property.prototype.toTextBaseline = function () {
            return !this.hasValue() ? null : h[this.value]
        };
        f.Font = new function () {
            this.Styles = "normal|italic|oblique|inherit";
            this.Variants = "normal|small-caps|inherit";
            this.Weights =
                "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
            this.CreateFont = function (b, c, d, e, g, h) {
                h = h != null ? this.Parse(h) : this.CreateFont("", "", "", "", "", f.ctx.font);
                return {
                    fontFamily: g || h.fontFamily,
                    fontSize: e || h.fontSize,
                    fontStyle: b || h.fontStyle,
                    fontWeight: d || h.fontWeight,
                    fontVariant: c || h.fontVariant,
                    toString: function () {
                        return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
                    }
                }
            };
            var b = this;
            this.Parse = function (c) {
                for (var d = {}, c = f.trim(f.compressSpaces(c ||
                        "")).split(" "), e = false, g = false, h = false, j = false, k = "", l = 0; l < c.length; l++)
                    if (!g && b.Styles.indexOf(c[l]) != -1) {
                        if (c[l] != "inherit") d.fontStyle = c[l];
                        g = true
                    } else if (!j && b.Variants.indexOf(c[l]) != -1) {
                        if (c[l] != "inherit") d.fontVariant = c[l];
                        g = j = true
                    } else if (!h && b.Weights.indexOf(c[l]) != -1) {
                        if (c[l] != "inherit") d.fontWeight = c[l];
                        g = j = h = true
                    } else if (e) c[l] != "inherit" && (k = k + c[l]);
                    else {
                        if (c[l] != "inherit") d.fontSize = c[l].split("/")[0];
                        g = j = h = e = true
                    }
                if (k != "") d.fontFamily = k;
                return d
            }
        };
        f.ToNumberArray = function (b) {
            for (var b =
                    f.trim(f.compressSpaces((b || "").replace(/,/g, " "))).split(" "), c = 0; c < b.length; c++) b[c] = parseFloat(b[c]);
            return b
        };
        f.Point = function (b, c) {
            this.x = b;
            this.y = c
        };
        f.Point.prototype.angleTo = function (b) {
            return Math.atan2(b.y - this.y, b.x - this.x)
        };
        f.Point.prototype.applyTransform = function (b) {
            var c = this.x * b[1] + this.y * b[3] + b[5];
            this.x = this.x * b[0] + this.y * b[2] + b[4];
            this.y = c
        };
        f.CreatePoint = function (b) {
            b = f.ToNumberArray(b);
            return new f.Point(b[0], b[1])
        };
        f.CreatePath = function (b) {
            for (var b = f.ToNumberArray(b), c = [], d = 0; d <
                b.length; d = d + 2) c.push(new f.Point(b[d], b[d + 1]));
            return c
        };
        f.BoundingBox = function (b, c, d, e) {
            this.y2 = this.x2 = this.y1 = this.x1 = Number.NaN;
            this.x = function () {
                return this.x1
            };
            this.y = function () {
                return this.y1
            };
            this.width = function () {
                return this.x2 - this.x1
            };
            this.height = function () {
                return this.y2 - this.y1
            };
            this.addPoint = function (b, c) {
                if (b != null) {
                    if (isNaN(this.x1) || isNaN(this.x2)) this.x2 = this.x1 = b;
                    if (b < this.x1) this.x1 = b;
                    if (b > this.x2) this.x2 = b
                }
                if (c != null) {
                    if (isNaN(this.y1) || isNaN(this.y2)) this.y2 = this.y1 = c;
                    if (c <
                        this.y1) this.y1 = c;
                    if (c > this.y2) this.y2 = c
                }
            };
            this.addX = function (b) {
                this.addPoint(b, null)
            };
            this.addY = function (b) {
                this.addPoint(null, b)
            };
            this.addBoundingBox = function (b) {
                this.addPoint(b.x1, b.y1);
                this.addPoint(b.x2, b.y2)
            };
            this.addQuadraticCurve = function (b, c, d, e, f, g) {
                d = b + 2 / 3 * (d - b);
                e = c + 2 / 3 * (e - c);
                this.addBezierCurve(b, c, d, d + 1 / 3 * (f - b), e, e + 1 / 3 * (g - c), f, g)
            };
            this.addBezierCurve = function (b, c, d, e, f, g, h, j) {
                var k = [b, c],
                    l = [d, e],
                    m = [f, g],
                    n = [h, j];
                this.addPoint(k[0], k[1]);
                this.addPoint(n[0], n[1]);
                for (i = 0; i <= 1; i++) {
                    b = function (b) {
                        return Math.pow(1 -
                            b, 3) * k[i] + 3 * Math.pow(1 - b, 2) * b * l[i] + 3 * (1 - b) * Math.pow(b, 2) * m[i] + Math.pow(b, 3) * n[i]
                    };
                    c = 6 * k[i] - 12 * l[i] + 6 * m[i];
                    d = -3 * k[i] + 9 * l[i] - 9 * m[i] + 3 * n[i];
                    e = 3 * l[i] - 3 * k[i];
                    if (d == 0) {
                        if (c != 0) {
                            c = -e / c;
                            if (0 < c && c < 1) {
                                i == 0 && this.addX(b(c));
                                i == 1 && this.addY(b(c))
                            }
                        }
                    } else {
                        e = Math.pow(c, 2) - 4 * e * d;
                        if (!(e < 0)) {
                            f = (-c + Math.sqrt(e)) / (2 * d);
                            if (0 < f && f < 1) {
                                i == 0 && this.addX(b(f));
                                i == 1 && this.addY(b(f))
                            }
                            c = (-c - Math.sqrt(e)) / (2 * d);
                            if (0 < c && c < 1) {
                                i == 0 && this.addX(b(c));
                                i == 1 && this.addY(b(c))
                            }
                        }
                    }
                }
            };
            this.isPointInBox = function (b, c) {
                return this.x1 <= b && b <= this.x2 &&
                    this.y1 <= c && c <= this.y2
            };
            this.addPoint(b, c);
            this.addPoint(d, e)
        };
        f.Transform = function (b) {
            var c = this;
            this.Type = {};
            this.Type.translate = function (b) {
                this.p = f.CreatePoint(b);
                this.apply = function (b) {
                    b.translate(this.p.x || 0, this.p.y || 0)
                };
                this.unapply = function (b) {
                    b.translate(-1 * this.p.x || 0, -1 * this.p.y || 0)
                };
                this.applyToPoint = function (b) {
                    b.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
                }
            };
            this.Type.rotate = function (b) {
                b = f.ToNumberArray(b);
                this.angle = new f.Property("angle", b[0]);
                this.cx = b[1] || 0;
                this.cy = b[2] ||
                    0;
                this.apply = function (b) {
                    b.translate(this.cx, this.cy);
                    b.rotate(this.angle.toRadians());
                    b.translate(-this.cx, -this.cy)
                };
                this.unapply = function (b) {
                    b.translate(this.cx, this.cy);
                    b.rotate(-1 * this.angle.toRadians());
                    b.translate(-this.cx, -this.cy)
                };
                this.applyToPoint = function (b) {
                    var c = this.angle.toRadians();
                    b.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]);
                    b.applyTransform([Math.cos(c), Math.sin(c), -Math.sin(c), Math.cos(c), 0, 0]);
                    b.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
                }
            };
            this.Type.scale = function (b) {
                this.p =
                    f.CreatePoint(b);
                this.apply = function (b) {
                    b.scale(this.p.x || 1, this.p.y || this.p.x || 1)
                };
                this.unapply = function (b) {
                    b.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1)
                };
                this.applyToPoint = function (b) {
                    b.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
                }
            };
            this.Type.matrix = function (b) {
                this.m = f.ToNumberArray(b);
                this.apply = function (b) {
                    b.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
                };
                this.unapply = function (b) {
                    var c = this.m[0],
                        d = this.m[2],
                        e = this.m[4],
                        f = this.m[1],
                        g = this.m[3],
                        h = this.m[5],
                        j = 1 / (c *
                            (g * 1 - h * 0) - d * (f * 1 - h * 0) + e * (f * 0 - g * 0));
                    b.transform(j * (g * 1 - h * 0), j * (h * 0 - f * 1), j * (e * 0 - d * 1), j * (c * 1 - e * 0), j * (d * h - e * g), j * (e * f - c * h))
                };
                this.applyToPoint = function (b) {
                    b.applyTransform(this.m)
                }
            };
            this.Type.SkewBase = function (b) {
                this.base = c.Type.matrix;
                this.base(b);
                this.angle = new f.Property("angle", b)
            };
            this.Type.SkewBase.prototype = new this.Type.matrix;
            this.Type.skewX = function (b) {
                this.base = c.Type.SkewBase;
                this.base(b);
                this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
            };
            this.Type.skewX.prototype = new this.Type.SkewBase;
            this.Type.skewY = function (b) {
                this.base = c.Type.SkewBase;
                this.base(b);
                this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
            };
            this.Type.skewY.prototype = new this.Type.SkewBase;
            this.transforms = [];
            this.apply = function (b) {
                for (var c = 0; c < this.transforms.length; c++) this.transforms[c].apply(b)
            };
            this.unapply = function (b) {
                for (var c = this.transforms.length - 1; c >= 0; c--) this.transforms[c].unapply(b)
            };
            this.applyToPoint = function (b) {
                for (var c = 0; c < this.transforms.length; c++) this.transforms[c].applyToPoint(b)
            };
            for (var b = f.trim(f.compressSpaces(b)).replace(/\)([a-zA-Z])/g,
                    ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), d = 0; d < b.length; d++) {
                var e = f.trim(b[d].split("(")[0]),
                    g = b[d].split("(")[1].replace(")", ""),
                    h = this.Type[e];
                if (typeof h != "undefined") {
                    g = new h(g);
                    g.type = e;
                    this.transforms.push(g)
                }
            }
        };
        f.AspectRatio = function (b, c, d, e, g, h, j, k, l, m) {
            var c = f.compressSpaces(c),
                c = c.replace(/^defer\s/, ""),
                n = c.split(" ")[0] || "xMidYMid",
                c = c.split(" ")[1] || "meet",
                p = d / e,
                q = g / h,
                r = Math.min(p, q),
                I = Math.max(p, q);
            if (c == "meet") {
                e = e * r;
                h = h * r
            }
            if (c == "slice") {
                e = e * I;
                h = h * I
            }
            l = new f.Property("refX",
                l);
            m = new f.Property("refY", m);
            if (l.hasValue() && m.hasValue()) b.translate(-r * l.toPixels("x"), -r * m.toPixels("y"));
            else {
                n.match(/^xMid/) && (c == "meet" && r == q || c == "slice" && I == q) && b.translate(d / 2 - e / 2, 0);
                n.match(/YMid$/) && (c == "meet" && r == p || c == "slice" && I == p) && b.translate(0, g / 2 - h / 2);
                n.match(/^xMax/) && (c == "meet" && r == q || c == "slice" && I == q) && b.translate(d - e, 0);
                n.match(/YMax$/) && (c == "meet" && r == p || c == "slice" && I == p) && b.translate(0, g - h)
            }
            n == "none" ? b.scale(p, q) : c == "meet" ? b.scale(r, r) : c == "slice" && b.scale(I, I);
            b.translate(j ==
                null ? 0 : -j, k == null ? 0 : -k)
        };
        f.Element = {};
        f.EmptyProperty = new f.Property("EMPTY", "");
        f.Element.ElementBase = function (b) {
            this.attributes = {};
            this.styles = {};
            this.stylesSpecificity = {};
            this.children = [];
            this.attribute = function (b, c) {
                var d = this.attributes[b];
                if (d != null) return d;
                if (c == true) {
                    d = new f.Property(b, "");
                    this.attributes[b] = d
                }
                return d || f.EmptyProperty
            };
            this.getHrefAttribute = function () {
                for (var b in this.attributes)
                    if (b == "href" || b.match(/:href$/)) return this.attributes[b];
                return f.EmptyProperty
            };
            this.style =
                function (b, c, d) {
                    var e = this.styles[b];
                    if (e != null) return e;
                    var g = this.attribute(b);
                    if (g != null && g.hasValue()) return this.styles[b] = g;
                    if (d != true) {
                        d = this.parent;
                        if (d != null) {
                            d = d.style(b);
                            if (d != null && d.hasValue()) return d
                        }
                    }
                    if (c == true) {
                        e = new f.Property(b, "");
                        this.styles[b] = e
                    }
                    return e || f.EmptyProperty
                };
            this.render = function (b) {
                if (this.style("display").value != "none" && this.style("visibility").value != "hidden") {
                    b.save();
                    if (this.style("mask").hasValue()) {
                        var c = this.style("mask").getDefinition();
                        c != null && c.apply(b,
                            this)
                    } else if (this.style("filter").hasValue()) {
                        c = this.style("filter").getDefinition();
                        c != null && c.apply(b, this)
                    } else {
                        this.setContext(b);
                        this.renderChildren(b);
                        this.clearContext(b)
                    }
                    b.restore()
                }
            };
            this.setContext = function () { };
            this.clearContext = function () { };
            this.renderChildren = function (b) {
                for (var c = 0; c < this.children.length; c++) this.children[c].render(b)
            };
            this.addChild = function (b, c) {
                var d = b;
                c && (d = f.CreateElement(b));
                d.parent = this;
                d.type != "title" && this.children.push(d)
            };
            this.addStylesFromStyleDefinition =
                function () {
                    for (var c in f.Styles)
                        if (c[0] != "@" && g(b, c)) {
                            var d = f.Styles[c],
                                e = f.StylesSpecificity[c];
                            if (d != null)
                                for (var h in d) {
                                    var j = this.stylesSpecificity[h];
                                    typeof j == "undefined" && (j = "000");
                                    if (e > j) {
                                        this.styles[h] = d[h];
                                        this.stylesSpecificity[h] = e
                                    }
                                }
                        }
                };
            var c = /^[A-Z-]+$/;
            if (b != null && b.nodeType == 1) {
                for (var d = 0; d < b.attributes.length; d++) {
                    var e = b.attributes[d],
                        h = c.test(e.nodeName) ? e.nodeName.toLowerCase() : e.nodeName;
                    this.attributes[h] = new f.Property(h, e.value)
                }
                this.addStylesFromStyleDefinition();
                if (this.attribute("style").hasValue()) {
                    c =
                        this.attribute("style").value.split(";");
                    for (d = 0; d < c.length; d++)
                        if (f.trim(c[d]) != "") {
                            h = c[d].split(":");
                            e = f.trim(h[0]);
                            h = f.trim(h[1]);
                            this.styles[e] = new f.Property(e, h)
                        }
                }
                this.attribute("id").hasValue() && f.Definitions[this.attribute("id").value] == null && (f.Definitions[this.attribute("id").value] = this);
                for (d = 0; d < b.childNodes.length; d++) {
                    c = b.childNodes[d];
                    c.nodeType == 1 && this.addChild(c, true);
                    if (this.captureTextNodes && (c.nodeType == 3 || c.nodeType == 4)) f.compressSpaces(c.value || c.text || c.textContent || "") !=
                        "" && this.addChild(new f.Element.tspan(c), false)
                }
            }
        };
        f.Element.RenderedElementBase = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.setContext = function (b) {
                if (this.style("fill").isUrlDefinition()) {
                    var c = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
                    if (c != null) b.fillStyle = c
                } else if (this.style("fill").hasValue()) {
                    c = this.style("fill");
                    if (c.value == "currentColor") c.value = this.style("color").value;
                    if (c.value != "inherit") b.fillStyle = c.value == "none" ? "rgba(0,0,0,0)" : c.value
                }
                if (this.style("fill-opacity").hasValue()) {
                    c =
                        new f.Property("fill", b.fillStyle);
                    c = c.addOpacity(this.style("fill-opacity"));
                    b.fillStyle = c.value
                }
                if (this.style("stroke").isUrlDefinition()) {
                    c = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
                    if (c != null) b.strokeStyle = c
                } else if (this.style("stroke").hasValue()) {
                    c = this.style("stroke");
                    if (c.value == "currentColor") c.value = this.style("color").value;
                    if (c.value != "inherit") b.strokeStyle = c.value == "none" ? "rgba(0,0,0,0)" : c.value
                }
                if (this.style("stroke-opacity").hasValue()) {
                    c = new f.Property("stroke",
                        b.strokeStyle);
                    c = c.addOpacity(this.style("stroke-opacity"));
                    b.strokeStyle = c.value
                }
                if (this.style("stroke-width").hasValue()) {
                    c = this.style("stroke-width").toPixels();
                    b.lineWidth = c == 0 ? 0.001 : c
                }
                if (this.style("stroke-linecap").hasValue()) b.lineCap = this.style("stroke-linecap").value;
                if (this.style("stroke-linejoin").hasValue()) b.lineJoin = this.style("stroke-linejoin").value;
                if (this.style("stroke-miterlimit").hasValue()) b.miterLimit = this.style("stroke-miterlimit").value;
                if (this.style("stroke-dasharray").hasValue() &&
                    this.style("stroke-dasharray").value != "none") {
                    c = f.ToNumberArray(this.style("stroke-dasharray").value);
                    if (typeof b.setLineDash != "undefined") b.setLineDash(c);
                    else if (typeof b.webkitLineDash != "undefined") b.webkitLineDash = c;
                    else if (typeof b.mozDash != "undefined" && !(c.length == 1 && c[0] == 0)) b.mozDash = c;
                    c = this.style("stroke-dashoffset").numValueOrDefault(1);
                    if (typeof b.lineDashOffset != "undefined") b.lineDashOffset = c;
                    else if (typeof b.webkitLineDashOffset != "undefined") b.webkitLineDashOffset = c;
                    else if (typeof b.mozDashOffset !=
                        "undefined") b.mozDashOffset = c
                }
                if (typeof b.font != "undefined") b.font = f.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString();
                this.style("transform", false, true).hasValue() && (new f.Transform(this.style("transform", false, true).value)).apply(b);
                if (this.style("clip-path", false, true).hasValue()) {
                    c = this.style("clip-path", false, true).getDefinition();
                    c != null && c.apply(b)
                }
                if (this.style("opacity").hasValue()) b.globalAlpha = this.style("opacity").numValue()
            }
        };
        f.Element.RenderedElementBase.prototype = new f.Element.ElementBase;
        f.Element.PathElementBase = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.path = function (b) {
                b != null && b.beginPath();
                return new f.BoundingBox
            };
            this.renderChildren = function (b) {
                this.path(b);
                f.Mouse.checkPath(this, b);
                b.fillStyle != "" && (this.style("fill-rule").valueOrDefault("inherit") != "inherit" ? b.fill(this.style("fill-rule").value) :
                    b.fill());
                b.strokeStyle != "" && b.stroke();
                var c = this.getMarkers();
                if (c != null) {
                    if (this.style("marker-start").isUrlDefinition()) {
                        var d = this.style("marker-start").getDefinition();
                        d.render(b, c[0][0], c[0][1])
                    }
                    if (this.style("marker-mid").isUrlDefinition())
                        for (var d = this.style("marker-mid").getDefinition(), e = 1; e < c.length - 1; e++) d.render(b, c[e][0], c[e][1]);
                    if (this.style("marker-end").isUrlDefinition()) {
                        d = this.style("marker-end").getDefinition();
                        d.render(b, c[c.length - 1][0], c[c.length - 1][1])
                    }
                }
            };
            this.getBoundingBox =
                function () {
                    return this.path()
                };
            this.getMarkers = function () {
                return null
            }
        };
        f.Element.PathElementBase.prototype = new f.Element.RenderedElementBase;
        f.Element.svg = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.baseClearContext = this.clearContext;
            this.clearContext = function (b) {
                this.baseClearContext(b);
                f.ViewPort.RemoveCurrent()
            };
            this.baseSetContext = this.setContext;
            this.setContext = function (b) {
                b.strokeStyle = "rgba(0,0,0,0)";
                b.lineCap = "butt";
                b.lineJoin = "miter";
                b.miterLimit = 4;
                if (typeof b.font !=
                    "undefined" && typeof window.getComputedStyle != "undefined") b.font = window.getComputedStyle(b.canvas).getPropertyValue("font");
                this.baseSetContext(b);
                if (!this.attribute("x").hasValue()) this.attribute("x", true).value = 0;
                if (!this.attribute("y").hasValue()) this.attribute("y", true).value = 0;
                b.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
                var c = f.ViewPort.width(),
                    d = f.ViewPort.height();
                if (!this.attribute("width").hasValue()) this.attribute("width", true).value = "100%";
                if (!this.attribute("height").hasValue()) this.attribute("height",
                    true).value = "100%";
                if (typeof this.root == "undefined") {
                    var c = this.attribute("width").toPixels("x"),
                        d = this.attribute("height").toPixels("y"),
                        e = 0,
                        g = 0;
                    if (this.attribute("refX").hasValue() && this.attribute("refY").hasValue()) {
                        e = -this.attribute("refX").toPixels("x");
                        g = -this.attribute("refY").toPixels("y")
                    }
                    if (this.attribute("overflow").valueOrDefault("hidden") != "visible") {
                        b.beginPath();
                        b.moveTo(e, g);
                        b.lineTo(c, g);
                        b.lineTo(c, d);
                        b.lineTo(e, d);
                        b.closePath();
                        b.clip()
                    }
                }
                f.ViewPort.SetCurrent(c, d);
                if (this.attribute("viewBox").hasValue()) {
                    var e =
                        f.ToNumberArray(this.attribute("viewBox").value),
                        g = e[0],
                        h = e[1],
                        c = e[2],
                        d = e[3];
                    f.AspectRatio(b, this.attribute("preserveAspectRatio").value, f.ViewPort.width(), c, f.ViewPort.height(), d, g, h, this.attribute("refX").value, this.attribute("refY").value);
                    f.ViewPort.RemoveCurrent();
                    f.ViewPort.SetCurrent(e[2], e[3])
                }
            }
        };
        f.Element.svg.prototype = new f.Element.RenderedElementBase;
        f.Element.rect = function (b) {
            this.base = f.Element.PathElementBase;
            this.base(b);
            this.path = function (b) {
                var c = this.attribute("x").toPixels("x"),
                    d = this.attribute("y").toPixels("y"),
                    e = this.attribute("width").toPixels("x"),
                    g = this.attribute("height").toPixels("y"),
                    h = this.attribute("rx").toPixels("x"),
                    j = this.attribute("ry").toPixels("y");
                this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (j = h);
                this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (h = j);
                h = Math.min(h, e / 2);
                j = Math.min(j, g / 2);
                if (b != null) {
                    b.beginPath();
                    b.moveTo(c + h, d);
                    b.lineTo(c + e - h, d);
                    b.quadraticCurveTo(c + e, d, c + e, d + j);
                    b.lineTo(c + e, d + g - j);
                    b.quadraticCurveTo(c +
                        e, d + g, c + e - h, d + g);
                    b.lineTo(c + h, d + g);
                    b.quadraticCurveTo(c, d + g, c, d + g - j);
                    b.lineTo(c, d + j);
                    b.quadraticCurveTo(c, d, c + h, d);
                    b.closePath()
                }
                return new f.BoundingBox(c, d, c + e, d + g)
            }
        };
        f.Element.rect.prototype = new f.Element.PathElementBase;
        f.Element.circle = function (b) {
            this.base = f.Element.PathElementBase;
            this.base(b);
            this.path = function (b) {
                var c = this.attribute("cx").toPixels("x"),
                    d = this.attribute("cy").toPixels("y"),
                    e = this.attribute("r").toPixels();
                if (b != null) {
                    b.beginPath();
                    b.arc(c, d, e, 0, Math.PI * 2, true);
                    b.closePath()
                }
                return new f.BoundingBox(c -
                    e, d - e, c + e, d + e)
            }
        };
        f.Element.circle.prototype = new f.Element.PathElementBase;
        f.Element.ellipse = function (b) {
            this.base = f.Element.PathElementBase;
            this.base(b);
            this.path = function (b) {
                var c = 4 * ((Math.sqrt(2) - 1) / 3),
                    d = this.attribute("rx").toPixels("x"),
                    e = this.attribute("ry").toPixels("y"),
                    g = this.attribute("cx").toPixels("x"),
                    h = this.attribute("cy").toPixels("y");
                if (b != null) {
                    b.beginPath();
                    b.moveTo(g, h - e);
                    b.bezierCurveTo(g + c * d, h - e, g + d, h - c * e, g + d, h);
                    b.bezierCurveTo(g + d, h + c * e, g + c * d, h + e, g, h + e);
                    b.bezierCurveTo(g - c * d,
                        h + e, g - d, h + c * e, g - d, h);
                    b.bezierCurveTo(g - d, h - c * e, g - c * d, h - e, g, h - e);
                    b.closePath()
                }
                return new f.BoundingBox(g - d, h - e, g + d, h + e)
            }
        };
        f.Element.ellipse.prototype = new f.Element.PathElementBase;
        f.Element.line = function (b) {
            this.base = f.Element.PathElementBase;
            this.base(b);
            this.getPoints = function () {
                return [new f.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new f.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
            };
            this.path = function (b) {
                var c = this.getPoints();
                if (b != null) {
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    b.lineTo(c[1].x, c[1].y)
                }
                return new f.BoundingBox(c[0].x, c[0].y, c[1].x, c[1].y)
            };
            this.getMarkers = function () {
                var b = this.getPoints(),
                    c = b[0].angleTo(b[1]);
                return [
                    [b[0], c],
                    [b[1], c]
                ]
            }
        };
        f.Element.line.prototype = new f.Element.PathElementBase;
        f.Element.polyline = function (b) {
            this.base = f.Element.PathElementBase;
            this.base(b);
            this.points = f.CreatePath(this.attribute("points").value);
            this.path = function (b) {
                var c = new f.BoundingBox(this.points[0].x, this.points[0].y);
                if (b != null) {
                    b.beginPath();
                    b.moveTo(this.points[0].x, this.points[0].y)
                }
                for (var d = 1; d < this.points.length; d++) {
                    c.addPoint(this.points[d].x, this.points[d].y);
                    b != null && b.lineTo(this.points[d].x, this.points[d].y)
                }
                return c
            };
            this.getMarkers = function () {
                for (var b = [], c = 0; c < this.points.length - 1; c++) b.push([this.points[c], this.points[c].angleTo(this.points[c + 1])]);
                b.length > 0 && b.push([this.points[this.points.length - 1], b[b.length - 1][1]]);
                return b
            }
        };
        f.Element.polyline.prototype = new f.Element.PathElementBase;
        f.Element.polygon =
            function (b) {
                this.base = f.Element.polyline;
                this.base(b);
                this.basePath = this.path;
                this.path = function (b) {
                    var c = this.basePath(b);
                    if (b != null) {
                        b.lineTo(this.points[0].x, this.points[0].y);
                        b.closePath()
                    }
                    return c
                }
            };
        f.Element.polygon.prototype = new f.Element.polyline;
        f.Element.path = function (b) {
            this.base = f.Element.PathElementBase;
            this.base(b);
            for (var b = this.attribute("d").value, b = b.replace(/,/gm, " "), c = 0; c < 2; c++) b = b.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
            b = b.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,
                "$1 $2");
            b = b.replace(/([0-9])([+\-])/gm, "$1 $2");
            for (c = 0; c < 2; c++) b = b.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
            b = b.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 ");
            b = f.compressSpaces(b);
            b = f.trim(b);
            this.PathParser = new function (b) {
                this.tokens = b.split(" ");
                this.reset = function () {
                    this.i = -1;
                    this.previousCommand = this.command = "";
                    this.start = new f.Point(0, 0);
                    this.control = new f.Point(0, 0);
                    this.current = new f.Point(0, 0);
                    this.points = [];
                    this.angles = []
                };
                this.isEnd = function () {
                    return this.i >= this.tokens.length -
                        1
                };
                this.isCommandOrEnd = function () {
                    return this.isEnd() ? true : this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null
                };
                this.isRelativeCommand = function () {
                    switch (this.command) {
                        case "m":
                        case "l":
                        case "h":
                        case "v":
                        case "c":
                        case "s":
                        case "q":
                        case "t":
                        case "a":
                        case "z":
                            return true
                    }
                    return false
                };
                this.getToken = function () {
                    this.i++;
                    return this.tokens[this.i]
                };
                this.getScalar = function () {
                    return parseFloat(this.getToken())
                };
                this.nextCommand = function () {
                    this.previousCommand = this.command;
                    this.command = this.getToken()
                };
                this.getPoint =
                    function () {
                        return this.makeAbsolute(new f.Point(this.getScalar(), this.getScalar()))
                    };
                this.getAsControlPoint = function () {
                    var b = this.getPoint();
                    return this.control = b
                };
                this.getAsCurrentPoint = function () {
                    var b = this.getPoint();
                    return this.current = b
                };
                this.getReflectedControlPoint = function () {
                    return this.previousCommand.toLowerCase() != "c" && this.previousCommand.toLowerCase() != "s" && this.previousCommand.toLowerCase() != "q" && this.previousCommand.toLowerCase() != "t" ? this.current : new f.Point(2 * this.current.x - this.control.x,
                        2 * this.current.y - this.control.y)
                };
                this.makeAbsolute = function (b) {
                    if (this.isRelativeCommand()) {
                        b.x = b.x + this.current.x;
                        b.y = b.y + this.current.y
                    }
                    return b
                };
                this.addMarker = function (b, c, d) {
                    d != null && (this.angles.length > 0 && this.angles[this.angles.length - 1] == null) && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(d));
                    this.addMarkerAngle(b, c == null ? null : c.angleTo(b))
                };
                this.addMarkerAngle = function (b, c) {
                    this.points.push(b);
                    this.angles.push(c)
                };
                this.getMarkerPoints = function () {
                    return this.points
                };
                this.getMarkerAngles = function () {
                    for (var b = 0; b < this.angles.length; b++)
                        if (this.angles[b] == null)
                            for (var c = b + 1; c < this.angles.length; c++)
                                if (this.angles[c] != null) {
                                    this.angles[b] = this.angles[c];
                                    break
                                }
                    return this.angles
                }
            }(b);
            this.path = function (b) {
                var c = this.PathParser;
                c.reset();
                var d = new f.BoundingBox;
                for (b != null && b.beginPath() ; !c.isEnd() ;) {
                    c.nextCommand();
                    switch (c.command) {
                        case "M":
                        case "m":
                            var e = c.getAsCurrentPoint();
                            c.addMarker(e);
                            d.addPoint(e.x, e.y);
                            b != null && b.moveTo(e.x, e.y);
                            for (c.start = c.current; !c.isCommandOrEnd() ;) {
                                e =
                                    c.getAsCurrentPoint();
                                c.addMarker(e, c.start);
                                d.addPoint(e.x, e.y);
                                b != null && b.lineTo(e.x, e.y)
                            }
                            break;
                        case "L":
                        case "l":
                            for (; !c.isCommandOrEnd() ;) {
                                var g = c.current,
                                    e = c.getAsCurrentPoint();
                                c.addMarker(e, g);
                                d.addPoint(e.x, e.y);
                                b != null && b.lineTo(e.x, e.y)
                            }
                            break;
                        case "H":
                        case "h":
                            for (; !c.isCommandOrEnd() ;) {
                                e = new f.Point((c.isRelativeCommand() ? c.current.x : 0) + c.getScalar(), c.current.y);
                                c.addMarker(e, c.current);
                                c.current = e;
                                d.addPoint(c.current.x, c.current.y);
                                b != null && b.lineTo(c.current.x, c.current.y)
                            }
                            break;
                        case "V":
                        case "v":
                            for (; !c.isCommandOrEnd() ;) {
                                e =
                                    new f.Point(c.current.x, (c.isRelativeCommand() ? c.current.y : 0) + c.getScalar());
                                c.addMarker(e, c.current);
                                c.current = e;
                                d.addPoint(c.current.x, c.current.y);
                                b != null && b.lineTo(c.current.x, c.current.y)
                            }
                            break;
                        case "C":
                        case "c":
                            for (; !c.isCommandOrEnd() ;) {
                                var h = c.current,
                                    g = c.getPoint(),
                                    j = c.getAsControlPoint(),
                                    e = c.getAsCurrentPoint();
                                c.addMarker(e, j, g);
                                d.addBezierCurve(h.x, h.y, g.x, g.y, j.x, j.y, e.x, e.y);
                                b != null && b.bezierCurveTo(g.x, g.y, j.x, j.y, e.x, e.y)
                            }
                            break;
                        case "S":
                        case "s":
                            for (; !c.isCommandOrEnd() ;) {
                                h = c.current;
                                g = c.getReflectedControlPoint();
                                j = c.getAsControlPoint();
                                e = c.getAsCurrentPoint();
                                c.addMarker(e, j, g);
                                d.addBezierCurve(h.x, h.y, g.x, g.y, j.x, j.y, e.x, e.y);
                                b != null && b.bezierCurveTo(g.x, g.y, j.x, j.y, e.x, e.y)
                            }
                            break;
                        case "Q":
                        case "q":
                            for (; !c.isCommandOrEnd() ;) {
                                h = c.current;
                                j = c.getAsControlPoint();
                                e = c.getAsCurrentPoint();
                                c.addMarker(e, j, j);
                                d.addQuadraticCurve(h.x, h.y, j.x, j.y, e.x, e.y);
                                b != null && b.quadraticCurveTo(j.x, j.y, e.x, e.y)
                            }
                            break;
                        case "T":
                        case "t":
                            for (; !c.isCommandOrEnd() ;) {
                                h = c.current;
                                j = c.getReflectedControlPoint();
                                c.control = j;
                                e = c.getAsCurrentPoint();
                                c.addMarker(e, j, j);
                                d.addQuadraticCurve(h.x, h.y, j.x, j.y, e.x, e.y);
                                b != null && b.quadraticCurveTo(j.x, j.y, e.x, e.y)
                            }
                            break;
                        case "A":
                        case "a":
                            for (; !c.isCommandOrEnd() ;) {
                                var h = c.current,
                                    k = c.getScalar(),
                                    l = c.getScalar(),
                                    g = c.getScalar() * (Math.PI / 180),
                                    m = c.getScalar(),
                                    j = c.getScalar(),
                                    e = c.getAsCurrentPoint(),
                                    n = new f.Point(Math.cos(g) * (h.x - e.x) / 2 + Math.sin(g) * (h.y - e.y) / 2, -Math.sin(g) * (h.x - e.x) / 2 + Math.cos(g) * (h.y - e.y) / 2),
                                    o = Math.pow(n.x, 2) / Math.pow(k, 2) + Math.pow(n.y, 2) / Math.pow(l,
                                        2);
                                if (o > 1) {
                                    k = k * Math.sqrt(o);
                                    l = l * Math.sqrt(o)
                                }
                                m = (m == j ? -1 : 1) * Math.sqrt((Math.pow(k, 2) * Math.pow(l, 2) - Math.pow(k, 2) * Math.pow(n.y, 2) - Math.pow(l, 2) * Math.pow(n.x, 2)) / (Math.pow(k, 2) * Math.pow(n.y, 2) + Math.pow(l, 2) * Math.pow(n.x, 2)));
                                isNaN(m) && (m = 0);
                                var p = new f.Point(m * k * n.y / l, m * -l * n.x / k),
                                    h = new f.Point((h.x + e.x) / 2 + Math.cos(g) * p.x - Math.sin(g) * p.y, (h.y + e.y) / 2 + Math.sin(g) * p.x + Math.cos(g) * p.y),
                                    q = function (b, c) {
                                        return (b[0] * c[0] + b[1] * c[1]) / (Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2)) * Math.sqrt(Math.pow(c[0], 2) + Math.pow(c[1],
                                            2)))
                                    },
                                    r = function (b, c) {
                                        return (b[0] * c[1] < b[1] * c[0] ? -1 : 1) * Math.acos(q(b, c))
                                    },
                                    m = r([1, 0], [(n.x - p.x) / k, (n.y - p.y) / l]),
                                    o = [(n.x - p.x) / k, (n.y - p.y) / l],
                                    p = [(-n.x - p.x) / k, (-n.y - p.y) / l],
                                    n = r(o, p);
                                if (q(o, p) <= -1) n = Math.PI;
                                q(o, p) >= 1 && (n = 0);
                                o = 1 - j ? 1 : -1;
                                p = m + o * (n / 2);
                                r = new f.Point(h.x + k * Math.cos(p), h.y + l * Math.sin(p));
                                c.addMarkerAngle(r, p - o * Math.PI / 2);
                                c.addMarkerAngle(e, p - o * Math.PI);
                                d.addPoint(e.x, e.y);
                                if (b != null) {
                                    q = k > l ? k : l;
                                    e = k > l ? 1 : k / l;
                                    k = k > l ? l / k : 1;
                                    b.translate(h.x, h.y);
                                    b.rotate(g);
                                    b.scale(e, k);
                                    b.arc(0, 0, q, m, m + n, 1 - j);
                                    b.scale(1 /
                                        e, 1 / k);
                                    b.rotate(-g);
                                    b.translate(-h.x, -h.y)
                                }
                            }
                            break;
                        case "Z":
                        case "z":
                            b != null && b.closePath();
                            c.current = c.start
                    }
                }
                return d
            };
            this.getMarkers = function () {
                for (var b = this.PathParser.getMarkerPoints(), c = this.PathParser.getMarkerAngles(), d = [], e = 0; e < b.length; e++) d.push([b[e], c[e]]);
                return d
            }
        };
        f.Element.path.prototype = new f.Element.PathElementBase;
        f.Element.pattern = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.createPattern = function (b) {
                var c = this.attribute("width").toPixels("x", true),
                    d = this.attribute("height").toPixels("y",
                        true),
                    e = new f.Element.svg;
                e.attributes.viewBox = new f.Property("viewBox", this.attribute("viewBox").value);
                e.attributes.width = new f.Property("width", c + "px");
                e.attributes.height = new f.Property("height", d + "px");
                e.attributes.transform = new f.Property("transform", this.attribute("patternTransform").value);
                e.children = this.children;
                var g = document.createElement("canvas");
                g.width = c;
                g.height = d;
                c = g.getContext("2d");
                this.attribute("x").hasValue() && this.attribute("y").hasValue() && c.translate(this.attribute("x").toPixels("x",
                    true), this.attribute("y").toPixels("y", true));
                for (d = -1; d <= 1; d++)
                    for (var h = -1; h <= 1; h++) {
                        c.save();
                        e.attributes.x = new f.Property("x", d * g.width);
                        e.attributes.y = new f.Property("y", h * g.height);
                        e.render(c);
                        c.restore()
                    }
                return b.createPattern(g, "repeat")
            }
        };
        f.Element.pattern.prototype = new f.Element.ElementBase;
        f.Element.marker = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.baseRender = this.render;
            this.render = function (b, c, d) {
                b.translate(c.x, c.y);
                this.attribute("orient").valueOrDefault("auto") ==
                    "auto" && b.rotate(d);
                this.attribute("markerUnits").valueOrDefault("strokeWidth") == "strokeWidth" && b.scale(b.lineWidth, b.lineWidth);
                b.save();
                var e = new f.Element.svg;
                e.attributes.viewBox = new f.Property("viewBox", this.attribute("viewBox").value);
                e.attributes.refX = new f.Property("refX", this.attribute("refX").value);
                e.attributes.refY = new f.Property("refY", this.attribute("refY").value);
                e.attributes.width = new f.Property("width", this.attribute("markerWidth").value);
                e.attributes.height = new f.Property("height",
                    this.attribute("markerHeight").value);
                e.attributes.fill = new f.Property("fill", this.attribute("fill").valueOrDefault("black"));
                e.attributes.stroke = new f.Property("stroke", this.attribute("stroke").valueOrDefault("none"));
                e.children = this.children;
                e.render(b);
                b.restore();
                this.attribute("markerUnits").valueOrDefault("strokeWidth") == "strokeWidth" && b.scale(1 / b.lineWidth, 1 / b.lineWidth);
                this.attribute("orient").valueOrDefault("auto") == "auto" && b.rotate(-d);
                b.translate(-c.x, -c.y)
            }
        };
        f.Element.marker.prototype =
            new f.Element.ElementBase;
        f.Element.defs = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.render = function () { }
        };
        f.Element.defs.prototype = new f.Element.ElementBase;
        f.Element.GradientBase = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.stops = [];
            for (b = 0; b < this.children.length; b++) {
                var c = this.children[b];
                c.type == "stop" && this.stops.push(c)
            }
            this.getGradient = function () { };
            this.gradientUnits = function () {
                return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")
            };
            this.attributesToInherit = ["gradientUnits"];
            this.inheritStopContainer = function (b) {
                for (var c = 0; c < this.attributesToInherit.length; c++) {
                    var d = this.attributesToInherit[c];
                    if (!this.attribute(d).hasValue() && b.attribute(d).hasValue()) this.attribute(d, true).value = b.attribute(d).value
                }
            };
            this.createGradient = function (b, c, d) {
                var e = this;
                if (this.getHrefAttribute().hasValue()) {
                    e = this.getHrefAttribute().getDefinition();
                    this.inheritStopContainer(e)
                }
                var g = function (b) {
                    return d.hasValue() ? (new f.Property("color", b)).addOpacity(d).value : b
                },
                    b =
                    this.getGradient(b, c);
                if (b == null) return g(e.stops[e.stops.length - 1].color);
                for (c = 0; c < e.stops.length; c++) b.addColorStop(e.stops[c].offset, g(e.stops[c].color));
                if (this.attribute("gradientTransform").hasValue()) {
                    e = f.ViewPort.viewPorts[0];
                    g = new f.Element.rect;
                    g.attributes.x = new f.Property("x", -f.MAX_VIRTUAL_PIXELS / 3);
                    g.attributes.y = new f.Property("y", -f.MAX_VIRTUAL_PIXELS / 3);
                    g.attributes.width = new f.Property("width", f.MAX_VIRTUAL_PIXELS);
                    g.attributes.height = new f.Property("height", f.MAX_VIRTUAL_PIXELS);
                    c = new f.Element.g;
                    c.attributes.transform = new f.Property("transform", this.attribute("gradientTransform").value);
                    c.children = [g];
                    g = new f.Element.svg;
                    g.attributes.x = new f.Property("x", 0);
                    g.attributes.y = new f.Property("y", 0);
                    g.attributes.width = new f.Property("width", e.width);
                    g.attributes.height = new f.Property("height", e.height);
                    g.children = [c];
                    c = document.createElement("canvas");
                    c.width = e.width;
                    c.height = e.height;
                    e = c.getContext("2d");
                    e.fillStyle = b;
                    g.render(e);
                    return e.createPattern(c, "no-repeat")
                }
                return b
            }
        };
        f.Element.GradientBase.prototype = new f.Element.ElementBase;
        f.Element.linearGradient = function (b) {
            this.base = f.Element.GradientBase;
            this.base(b);
            this.attributesToInherit.push("x1");
            this.attributesToInherit.push("y1");
            this.attributesToInherit.push("x2");
            this.attributesToInherit.push("y2");
            this.getGradient = function (b, c) {
                var d = this.gradientUnits() == "objectBoundingBox" ? c.getBoundingBox() : null;
                if (!this.attribute("x1").hasValue() && !this.attribute("y1").hasValue() && !this.attribute("x2").hasValue() && !this.attribute("y2").hasValue()) {
                    this.attribute("x1",
                        true).value = 0;
                    this.attribute("y1", true).value = 0;
                    this.attribute("x2", true).value = 1;
                    this.attribute("y2", true).value = 0
                }
                var e = this.gradientUnits() == "objectBoundingBox" ? d.x() + d.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
                    f = this.gradientUnits() == "objectBoundingBox" ? d.y() + d.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
                    g = this.gradientUnits() == "objectBoundingBox" ? d.x() + d.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
                    d = this.gradientUnits() == "objectBoundingBox" ? d.y() + d.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
                return e == g && f == d ? null : b.createLinearGradient(e, f, g, d)
            }
        };
        f.Element.linearGradient.prototype = new f.Element.GradientBase;
        f.Element.radialGradient = function (b) {
            this.base = f.Element.GradientBase;
            this.base(b);
            this.attributesToInherit.push("cx");
            this.attributesToInherit.push("cy");
            this.attributesToInherit.push("r");
            this.attributesToInherit.push("fx");
            this.attributesToInherit.push("fy");
            this.getGradient = function (b, c) {
                var d = c.getBoundingBox();
                if (!this.attribute("cx").hasValue()) this.attribute("cx", true).value = "50%";
                if (!this.attribute("cy").hasValue()) this.attribute("cy", true).value = "50%";
                if (!this.attribute("r").hasValue()) this.attribute("r", true).value = "50%";
                var e = this.gradientUnits() == "objectBoundingBox" ? d.x() + d.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
                    f = this.gradientUnits() == "objectBoundingBox" ? d.y() + d.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
                    g = e,
                    h = f;
                this.attribute("fx").hasValue() && (g = this.gradientUnits() == "objectBoundingBox" ? d.x() + d.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x"));
                this.attribute("fy").hasValue() && (h = this.gradientUnits() == "objectBoundingBox" ? d.y() + d.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
                d = this.gradientUnits() == "objectBoundingBox" ? (d.width() + d.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
                return b.createRadialGradient(g, h, 0, e,
                    f, d)
            }
        };
        f.Element.radialGradient.prototype = new f.Element.GradientBase;
        f.Element.stop = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.offset = this.attribute("offset").numValue();
            if (this.offset < 0) this.offset = 0;
            if (this.offset > 1) this.offset = 1;
            b = this.style("stop-color", true);
            if (b.value === "") b.value = "#000";
            this.style("stop-opacity").hasValue() && (b = b.addOpacity(this.style("stop-opacity")));
            this.color = b.value
        };
        f.Element.stop.prototype = new f.Element.ElementBase;
        f.Element.AnimateBase = function (b) {
            this.base =
                f.Element.ElementBase;
            this.base(b);
            f.Animations.push(this);
            this.duration = 0;
            this.begin = this.attribute("begin").toMilliseconds();
            this.maxDuration = this.begin + this.attribute("dur").toMilliseconds();
            this.getProperty = function () {
                var b = this.attribute("attributeType").value,
                    c = this.attribute("attributeName").value;
                return b == "CSS" ? this.parent.style(c, true) : this.parent.attribute(c, true)
            };
            this.initialValue = null;
            this.initialUnits = "";
            this.removed = false;
            this.calcValue = function () {
                return ""
            };
            this.update = function (b) {
                if (this.initialValue ==
                    null) {
                    this.initialValue = this.getProperty().value;
                    this.initialUnits = this.getProperty().getUnits()
                }
                if (this.duration > this.maxDuration) {
                    if (this.attribute("repeatCount").value == "indefinite" || this.attribute("repeatDur").value == "indefinite") this.duration = 0;
                    else if (this.attribute("fill").valueOrDefault("remove") == "freeze" && !this.frozen) {
                        this.frozen = true;
                        this.parent.animationFrozen = true;
                        this.parent.animationFrozenValue = this.getProperty().value
                    } else if (this.attribute("fill").valueOrDefault("remove") == "remove" &&
                        !this.removed) {
                        this.removed = true;
                        this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue;
                        return true
                    }
                    return false
                }
                this.duration = this.duration + b;
                b = false;
                if (this.begin < this.duration) {
                    b = this.calcValue();
                    this.attribute("type").hasValue() && (b = this.attribute("type").value + "(" + b + ")");
                    this.getProperty().value = b;
                    b = true
                }
                return b
            };
            this.from = this.attribute("from");
            this.to = this.attribute("to");
            this.values = this.attribute("values");
            if (this.values.hasValue()) this.values.value =
                this.values.value.split(";");
            this.progress = function () {
                var b = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (this.values.hasValue()) {
                    var c = b.progress * (this.values.value.length - 1),
                        d = Math.floor(c),
                        e = Math.ceil(c);
                    b.from = new f.Property("from", parseFloat(this.values.value[d]));
                    b.to = new f.Property("to", parseFloat(this.values.value[e]));
                    b.progress = (c - d) / (e - d)
                } else {
                    b.from = this.from;
                    b.to = this.to
                }
                return b
            }
        };
        f.Element.AnimateBase.prototype = new f.Element.ElementBase;
        f.Element.animate = function (b) {
            this.base =
                f.Element.AnimateBase;
            this.base(b);
            this.calcValue = function () {
                var b = this.progress();
                return b.from.numValue() + (b.to.numValue() - b.from.numValue()) * b.progress + this.initialUnits
            }
        };
        f.Element.animate.prototype = new f.Element.AnimateBase;
        f.Element.animateColor = function (c) {
            this.base = f.Element.AnimateBase;
            this.base(c);
            this.calcValue = function () {
                var c = this.progress(),
                    d = new b(c.from.value),
                    e = new b(c.to.value);
                if (d.ok && e.ok) {
                    var f = d.g + (e.g - d.g) * c.progress,
                        g = d.b + (e.b - d.b) * c.progress;
                    return "rgb(" + parseInt(d.r + (e.r -
                        d.r) * c.progress, 10) + "," + parseInt(f, 10) + "," + parseInt(g, 10) + ")"
                }
                return this.attribute("from").value
            }
        };
        f.Element.animateColor.prototype = new f.Element.AnimateBase;
        f.Element.animateTransform = function (b) {
            this.base = f.Element.AnimateBase;
            this.base(b);
            this.calcValue = function () {
                for (var b = this.progress(), c = f.ToNumberArray(b.from.value), d = f.ToNumberArray(b.to.value), e = "", g = 0; g < c.length; g++) e = e + (c[g] + (d[g] - c[g]) * b.progress + " ");
                return e
            }
        };
        f.Element.animateTransform.prototype = new f.Element.animate;
        f.Element.font =
            function (b) {
                this.base = f.Element.ElementBase;
                this.base(b);
                this.horizAdvX = this.attribute("horiz-adv-x").numValue();
                this.isArabic = this.isRTL = false;
                this.missingGlyph = this.fontFace = null;
                this.glyphs = [];
                for (b = 0; b < this.children.length; b++) {
                    var c = this.children[b];
                    if (c.type == "font-face") {
                        this.fontFace = c;
                        c.style("font-family").hasValue() && (f.Definitions[c.style("font-family").value] = this)
                    } else if (c.type == "missing-glyph") this.missingGlyph = c;
                    else if (c.type == "glyph")
                        if (c.arabicForm != "") {
                            this.isArabic = this.isRTL =
                                true;
                            typeof this.glyphs[c.unicode] == "undefined" && (this.glyphs[c.unicode] = []);
                            this.glyphs[c.unicode][c.arabicForm] = c
                        } else this.glyphs[c.unicode] = c
                }
            };
        f.Element.font.prototype = new f.Element.ElementBase;
        f.Element.fontface = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.ascent = this.attribute("ascent").value;
            this.descent = this.attribute("descent").value;
            this.unitsPerEm = this.attribute("units-per-em").numValue()
        };
        f.Element.fontface.prototype = new f.Element.ElementBase;
        f.Element.missingglyph = function (b) {
            this.base =
                f.Element.path;
            this.base(b);
            this.horizAdvX = 0
        };
        f.Element.missingglyph.prototype = new f.Element.path;
        f.Element.glyph = function (b) {
            this.base = f.Element.path;
            this.base(b);
            this.horizAdvX = this.attribute("horiz-adv-x").numValue();
            this.unicode = this.attribute("unicode").value;
            this.arabicForm = this.attribute("arabic-form").value
        };
        f.Element.glyph.prototype = new f.Element.path;
        f.Element.text = function (b) {
            this.captureTextNodes = true;
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.baseSetContext = this.setContext;
            this.setContext = function (b) {
                this.baseSetContext(b);
                var c = this.style("dominant-baseline").toTextBaseline();
                c == null && (c = this.style("alignment-baseline").toTextBaseline());
                if (c != null) b.textBaseline = c
            };
            this.getBoundingBox = function () {
                var b = this.attribute("x").toPixels("x"),
                    c = this.attribute("y").toPixels("y"),
                    d = this.parent.style("font-size").numValueOrDefault(f.Font.Parse(f.ctx.font).fontSize);
                return new f.BoundingBox(b, c - d, b + Math.floor(d * 2 / 3) * this.children[0].getText().length, c)
            };
            this.renderChildren = function (b) {
                this.x =
                    this.attribute("x").toPixels("x");
                this.y = this.attribute("y").toPixels("y");
                if (this.attribute("dx").hasValue()) this.x = this.x + this.attribute("dx").toPixels("x");
                if (this.attribute("dy").hasValue()) this.y = this.y + this.attribute("dy").toPixels("y");
                this.x = this.x + this.getAnchorDelta(b, this, 0);
                for (var c = 0; c < this.children.length; c++) this.renderChild(b, this, this, c)
            };
            this.getAnchorDelta = function (b, c, d) {
                var e = this.style("text-anchor").valueOrDefault("start");
                if (e != "start") {
                    for (var f = 0, g = d; g < c.children.length; g++) {
                        var h =
                            c.children[g];
                        if (g > d && h.attribute("x").hasValue()) break;
                        f = f + h.measureTextRecursive(b)
                    }
                    return -1 * (e == "end" ? f : f / 2)
                }
                return 0
            };
            this.renderChild = function (b, c, d, e) {
                var f = d.children[e];
                if (f.attribute("x").hasValue()) {
                    f.x = f.attribute("x").toPixels("x") + c.getAnchorDelta(b, d, e);
                    if (f.attribute("dx").hasValue()) f.x = f.x + f.attribute("dx").toPixels("x")
                } else {
                    if (f.attribute("dx").hasValue()) c.x = c.x + f.attribute("dx").toPixels("x");
                    f.x = c.x
                }
                c.x = f.x + f.measureText(b);
                if (f.attribute("y").hasValue()) {
                    f.y = f.attribute("y").toPixels("y");
                    if (f.attribute("dy").hasValue()) f.y = f.y + f.attribute("dy").toPixels("y")
                } else {
                    if (f.attribute("dy").hasValue()) c.y = c.y + f.attribute("dy").toPixels("y");
                    f.y = c.y
                }
                c.y = f.y;
                f.render(b);
                for (e = 0; e < f.children.length; e++) c.renderChild(b, c, f, e)
            }
        };
        f.Element.text.prototype = new f.Element.RenderedElementBase;
        f.Element.TextElementBase = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.getGlyph = function (b, c, d) {
                var e = c[d],
                    f = null;
                if (b.isArabic) {
                    var g = "isolated";
                    if ((d == 0 || c[d - 1] == " ") && d < c.length - 2 &&
                        c[d + 1] != " ") g = "terminal";
                    d > 0 && (c[d - 1] != " " && d < c.length - 2 && c[d + 1] != " ") && (g = "medial");
                    if (d > 0 && c[d - 1] != " " && (d == c.length - 1 || c[d + 1] == " ")) g = "initial";
                    if (typeof b.glyphs[e] != "undefined") {
                        f = b.glyphs[e][g];
                        f == null && b.glyphs[e].type == "glyph" && (f = b.glyphs[e])
                    }
                } else f = b.glyphs[e];
                if (f == null) f = b.missingGlyph;
                return f
            };
            this.renderChildren = function (b) {
                var c = this.parent.style("font-family").getDefinition();
                if (c != null) {
                    var d = this.parent.style("font-size").numValueOrDefault(f.Font.Parse(f.ctx.font).fontSize),
                        e =
                        this.parent.style("font-style").valueOrDefault(f.Font.Parse(f.ctx.font).fontStyle),
                        g = this.getText();
                    c.isRTL && (g = g.split("").reverse().join(""));
                    for (var h = f.ToNumberArray(this.parent.attribute("dx").value), j = 0; j < g.length; j++) {
                        var k = this.getGlyph(c, g, j),
                            l = d / c.fontFace.unitsPerEm;
                        b.translate(this.x, this.y);
                        b.scale(l, -l);
                        var m = b.lineWidth;
                        b.lineWidth = b.lineWidth * c.fontFace.unitsPerEm / d;
                        e == "italic" && b.transform(1, 0, 0.4, 1, 0, 0);
                        k.render(b);
                        e == "italic" && b.transform(1, 0, -0.4, 1, 0, 0);
                        b.lineWidth = m;
                        b.scale(1 /
                            l, -1 / l);
                        b.translate(-this.x, -this.y);
                        this.x = this.x + d * (k.horizAdvX || c.horizAdvX) / c.fontFace.unitsPerEm;
                        if (typeof h[j] != "undefined" && !isNaN(h[j])) this.x = this.x + h[j]
                    }
                } else {
                    b.fillStyle != "" && b.fillText(f.compressSpaces(this.getText()), this.x, this.y);
                    b.strokeStyle != "" && b.strokeText(f.compressSpaces(this.getText()), this.x, this.y)
                }
            };
            this.getText = function () { };
            this.measureTextRecursive = function (b) {
                for (var c = this.measureText(b), d = 0; d < this.children.length; d++) c = c + this.children[d].measureTextRecursive(b);
                return c
            };
            this.measureText = function (b) {
                var c = this.parent.style("font-family").getDefinition();
                if (c != null) {
                    var b = this.parent.style("font-size").numValueOrDefault(f.Font.Parse(f.ctx.font).fontSize),
                        d = 0,
                        e = this.getText();
                    c.isRTL && (e = e.split("").reverse().join(""));
                    for (var g = f.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < e.length; h++) {
                        var j = this.getGlyph(c, e, h),
                            d = d + (j.horizAdvX || c.horizAdvX) * b / c.fontFace.unitsPerEm;
                        typeof g[h] != "undefined" && !isNaN(g[h]) && (d = d + g[h])
                    }
                    return d
                }
                c = f.compressSpaces(this.getText());
                if (!b.measureText) return c.length * 10;
                b.save();
                this.setContext(b);
                c = b.measureText(c).width;
                b.restore();
                return c
            }
        };
        f.Element.TextElementBase.prototype = new f.Element.RenderedElementBase;
        f.Element.tspan = function (b) {
            this.captureTextNodes = true;
            this.base = f.Element.TextElementBase;
            this.base(b);
            this.text = f.compressSpaces(b.value || b.text || b.textContent || "");
            this.getText = function () {
                return this.children.length > 0 ? "" : this.text
            }
        };
        f.Element.tspan.prototype = new f.Element.TextElementBase;
        f.Element.tref = function (b) {
            this.base =
                f.Element.TextElementBase;
            this.base(b);
            this.getText = function () {
                var b = this.getHrefAttribute().getDefinition();
                if (b != null) return b.children[0].getText()
            }
        };
        f.Element.tref.prototype = new f.Element.TextElementBase;
        f.Element.a = function (b) {
            this.base = f.Element.TextElementBase;
            this.base(b);
            this.hasText = b.childNodes.length > 0;
            for (var c = 0; c < b.childNodes.length; c++)
                if (b.childNodes[c].nodeType != 3) this.hasText = false;
            this.text = this.hasText ? b.childNodes[0].value : "";
            this.getText = function () {
                return this.text
            };
            this.baseRenderChildren =
                this.renderChildren;
            this.renderChildren = function (b) {
                if (this.hasText) {
                    this.baseRenderChildren(b);
                    var c = new f.Property("fontSize", f.Font.Parse(f.ctx.font).fontSize);
                    f.Mouse.checkBoundingBox(this, new f.BoundingBox(this.x, this.y - c.toPixels("y"), this.x + this.measureText(b), this.y))
                } else if (this.children.length > 0) {
                    c = new f.Element.g;
                    c.children = this.children;
                    c.parent = this;
                    c.render(b)
                }
            };
            this.onclick = function () {
                window.open(this.getHrefAttribute().value)
            };
            this.onmousemove = function () {
                f.ctx.canvas.style.cursor =
                    "pointer"
            }
        };
        f.Element.a.prototype = new f.Element.TextElementBase;
        f.Element.image = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            var c = this.getHrefAttribute().value;
            if (c != "") {
                var d = c.match(/\.svg$/);
                f.Images.push(this);
                this.loaded = false;
                if (d) {
                    this.img = f.ajax(c);
                    this.loaded = true
                } else {
                    this.img = document.createElement("img");
                    if (f.opts.useCORS == true) this.img.crossOrigin = "Anonymous";
                    var e = this;
                    this.img.onload = function () {
                        e.loaded = true
                    };
                    this.img.onerror = function () {
                        f.log('ERROR: image "' + c +
                            '" not found');
                        e.loaded = true
                    };
                    this.img.src = c
                }
                this.renderChildren = function (b) {
                    var c = this.attribute("x").toPixels("x"),
                        e = this.attribute("y").toPixels("y"),
                        g = this.attribute("width").toPixels("x"),
                        h = this.attribute("height").toPixels("y");
                    if (!(g == 0 || h == 0)) {
                        b.save();
                        if (d) b.drawSvg(this.img, c, e, g, h);
                        else {
                            b.translate(c, e);
                            f.AspectRatio(b, this.attribute("preserveAspectRatio").value, g, this.img.width, h, this.img.height, 0, 0);
                            b.drawImage(this.img, 0, 0)
                        }
                        b.restore()
                    }
                };
                this.getBoundingBox = function () {
                    var b = this.attribute("x").toPixels("x"),
                        c = this.attribute("y").toPixels("y"),
                        d = this.attribute("width").toPixels("x"),
                        e = this.attribute("height").toPixels("y");
                    return new f.BoundingBox(b, c, b + d, c + e)
                }
            }
        };
        f.Element.image.prototype = new f.Element.RenderedElementBase;
        f.Element.g = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.getBoundingBox = function () {
                for (var b = new f.BoundingBox, c = 0; c < this.children.length; c++) b.addBoundingBox(this.children[c].getBoundingBox());
                return b
            }
        };
        f.Element.g.prototype = new f.Element.RenderedElementBase;
        f.Element.symbol = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.render = function () { }
        };
        f.Element.symbol.prototype = new f.Element.RenderedElementBase;
        f.Element.style = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            for (var c = "", e = 0; e < b.childNodes.length; e++) c = c + b.childNodes[e].data;
            c = c.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "");
            c = f.compressSpaces(c);
            b = c.split("}");
            for (e = 0; e < b.length; e++)
                if (f.trim(b[e]) != "")
                    for (var g = b[e].split("{"), c = g[0].split(","),
                            g = g[1].split(";"), h = 0; h < c.length; h++) {
                        var j = f.trim(c[h]);
                        if (j != "") {
                            for (var k = f.Styles[j] || {}, l = 0; l < g.length; l++) {
                                var m = g[l].indexOf(":"),
                                    n = g[l].substr(0, m),
                                    m = g[l].substr(m + 1, g[l].length - m);
                                n != null && m != null && (k[f.trim(n)] = new f.Property(f.trim(n), f.trim(m)))
                            }
                            f.Styles[j] = k;
                            f.StylesSpecificity[j] = d(j);
                            if (j == "@font-face") {
                                j = k["font-family"].value.replace(/"/g, "");
                                k = k.src.value.split(",");
                                for (l = 0; l < k.length; l++)
                                    if (k[l].indexOf('format("svg")') > 0) {
                                        n = k[l].indexOf("url");
                                        m = k[l].indexOf(")", n);
                                        n = k[l].substr(n +
                                            5, m - n - 6);
                                        n = f.parseXml(f.ajax(n)).getElementsByTagName("font");
                                        for (m = 0; m < n.length; m++) {
                                            var p = f.CreateElement(n[m]);
                                            f.Definitions[j] = p
                                        }
                                    }
                            }
                        }
                    }
        };
        f.Element.style.prototype = new f.Element.ElementBase;
        f.Element.use = function (b) {
            this.base = f.Element.RenderedElementBase;
            this.base(b);
            this.baseSetContext = this.setContext;
            this.setContext = function (b) {
                this.baseSetContext(b);
                this.attribute("x").hasValue() && b.translate(this.attribute("x").toPixels("x"), 0);
                this.attribute("y").hasValue() && b.translate(0, this.attribute("y").toPixels("y"))
            };
            var c = this.getHrefAttribute().getDefinition();
            this.path = function (b) {
                c != null && c.path(b)
            };
            this.getBoundingBox = function () {
                if (c != null) return c.getBoundingBox()
            };
            this.renderChildren = function (b) {
                if (c != null) {
                    var d = c;
                    if (c.type == "symbol") {
                        d = new f.Element.svg;
                        d.type = "svg";
                        d.attributes.viewBox = new f.Property("viewBox", c.attribute("viewBox").value);
                        d.attributes.preserveAspectRatio = new f.Property("preserveAspectRatio", c.attribute("preserveAspectRatio").value);
                        d.attributes.overflow = new f.Property("overflow", c.attribute("overflow").value);
                        d.children = c.children
                    }
                    if (d.type == "svg") {
                        this.attribute("width").hasValue() && (d.attributes.width = new f.Property("width", this.attribute("width").value));
                        this.attribute("height").hasValue() && (d.attributes.height = new f.Property("height", this.attribute("height").value))
                    }
                    var e = d.parent;
                    d.parent = null;
                    d.render(b);
                    d.parent = e
                }
            }
        };
        f.Element.use.prototype = new f.Element.RenderedElementBase;
        f.Element.mask = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.apply = function (b, c) {
                var d = this.attribute("x").toPixels("x"),
                    e = this.attribute("y").toPixels("y"),
                    g = this.attribute("width").toPixels("x"),
                    h = this.attribute("height").toPixels("y");
                if (g == 0 && h == 0) {
                    h = new f.BoundingBox;
                    for (d = 0; d < this.children.length; d++) h.addBoundingBox(this.children[d].getBoundingBox());
                    d = Math.floor(h.x1);
                    e = Math.floor(h.y1);
                    g = Math.floor(h.width());
                    h = Math.floor(h.height())
                }
                var j = c.attribute("mask").value;
                c.attribute("mask").value = "";
                var k = document.createElement("canvas");
                k.width = d + g;
                k.height = e + h;
                var l = k.getContext("2d");
                this.renderChildren(l);
                var m =
                    document.createElement("canvas");
                m.width = d + g;
                m.height = e + h;
                var n = m.getContext("2d");
                c.render(n);
                n.globalCompositeOperation = "destination-in";
                n.fillStyle = l.createPattern(k, "no-repeat");
                n.fillRect(0, 0, d + g, e + h);
                b.fillStyle = n.createPattern(m, "no-repeat");
                b.fillRect(0, 0, d + g, e + h);
                c.attribute("mask").value = j
            };
            this.render = function () { }
        };
        f.Element.mask.prototype = new f.Element.ElementBase;
        f.Element.clipPath = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.apply = function (b) {
                var c = CanvasRenderingContext2D.prototype.beginPath;
                CanvasRenderingContext2D.prototype.beginPath = function () { };
                var d = CanvasRenderingContext2D.prototype.closePath;
                CanvasRenderingContext2D.prototype.closePath = function () { };
                c.call(b);
                for (var e = 0; e < this.children.length; e++) {
                    var g = this.children[e];
                    if (typeof g.path != "undefined") {
                        var h = null;
                        if (g.style("transform", false, true).hasValue()) {
                            h = new f.Transform(g.style("transform", false, true).value);
                            h.apply(b)
                        }
                        g.path(b);
                        CanvasRenderingContext2D.prototype.closePath = d;
                        h && h.unapply(b)
                    }
                }
                d.call(b);
                b.clip();
                CanvasRenderingContext2D.prototype.beginPath =
                    c;
                CanvasRenderingContext2D.prototype.closePath = d
            };
            this.render = function () { }
        };
        f.Element.clipPath.prototype = new f.Element.ElementBase;
        f.Element.filter = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.apply = function (b, c) {
                var d = c.getBoundingBox(),
                    e = Math.floor(d.x1),
                    f = Math.floor(d.y1),
                    g = Math.floor(d.width()),
                    d = Math.floor(d.height()),
                    h = c.style("filter").value;
                c.style("filter").value = "";
                for (var j = 0, k = 0, l = 0; l < this.children.length; l++) var m = this.children[l].extraFilterDistance || 0,
                    j = Math.max(j,
                        m),
                    k = Math.max(k, m);
                m = document.createElement("canvas");
                m.width = g + 2 * j;
                m.height = d + 2 * k;
                var n = m.getContext("2d");
                n.translate(-e + j, -f + k);
                c.render(n);
                for (l = 0; l < this.children.length; l++) typeof this.children[l].apply == "function" && this.children[l].apply(n, 0, 0, g + 2 * j, d + 2 * k);
                b.drawImage(m, 0, 0, g + 2 * j, d + 2 * k, e - j, f - k, g + 2 * j, d + 2 * k);
                c.style("filter", true).value = h
            };
            this.render = function () { }
        };
        f.Element.filter.prototype = new f.Element.ElementBase;
        f.Element.feMorphology = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.apply = function () { }
        };
        f.Element.feMorphology.prototype = new f.Element.ElementBase;
        f.Element.feComposite = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.apply = function () { }
        };
        f.Element.feComposite.prototype = new f.Element.ElementBase;
        f.Element.feColorMatrix = function (b) {
            function c(b, e) {
                var f = d[b];
                return f * (f < 0 ? e - 255 : e)
            }
            this.base = f.Element.ElementBase;
            this.base(b);
            var d = f.ToNumberArray(this.attribute("values").value);
            switch (this.attribute("type").valueOrDefault("matrix")) {
                case "saturate":
                    b =
                        d[0];
                    d = [0.213 + 0.787 * b, 0.715 - 0.715 * b, 0.072 - 0.072 * b, 0, 0, 0.213 - 0.213 * b, 0.715 + 0.285 * b, 0.072 - 0.072 * b, 0, 0, 0.213 - 0.213 * b, 0.715 - 0.715 * b, 0.072 + 0.928 * b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                    break;
                case "hueRotate":
                    var e = d[0] * Math.PI / 180,
                        b = function (b, c, d) {
                            return b + Math.cos(e) * c + Math.sin(e) * d
                        },
                        d = [b(0.213, 0.787, -0.213), b(0.715, -0.715, -0.715), b(0.072, -0.072, 0.928), 0, 0, b(0.213, -0.213, 0.143), b(0.715, 0.285, 0.14), b(0.072, -0.072, -0.283), 0, 0, b(0.213, -0.213, -0.787), b(0.715, -0.715, 0.715), b(0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                    break;
                case "luminanceToAlpha":
                    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1]
            }
            this.apply = function (b, d, e, f, g) {
                for (var h = b.getImageData(0, 0, f, g), e = 0; e < g; e++)
                    for (d = 0; d < f; d++) {
                        var j = h.data[e * f * 4 + d * 4 + 0],
                            k = h.data[e * f * 4 + d * 4 + 1],
                            l = h.data[e * f * 4 + d * 4 + 2],
                            m = h.data[e * f * 4 + d * 4 + 3],
                            n = c(0, j) + c(1, k) + c(2, l) + c(3, m) + c(4, 1);
                        h.data[e * f * 4 + d * 4 + 0] = n;
                        n = c(5, j) + c(6, k) + c(7, l) + c(8, m) + c(9, 1);
                        h.data[e * f * 4 + d * 4 + 1] = n;
                        n = c(10, j) + c(11, k) + c(12, l) + c(13, m) + c(14, 1);
                        h.data[e * f * 4 + d * 4 + 2] = n;
                        j = c(15, j) + c(16, k) + c(17, l) + c(18, m) +
                            c(19, 1);
                        h.data[e * f * 4 + d * 4 + 3] = j
                    }
                b.clearRect(0, 0, f, g);
                b.putImageData(h, 0, 0)
            }
        };
        f.Element.feColorMatrix.prototype = new f.Element.ElementBase;
        f.Element.feGaussianBlur = function (b) {
            this.base = f.Element.ElementBase;
            this.base(b);
            this.extraFilterDistance = this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue());
            this.apply = function (b, d, e, g, h) {
                if (typeof c.canvasRGBA == "undefined") f.log("ERROR: StackBlur.js must be included for blur to work");
                else {
                    b.canvas.id = f.UniqueId();
                    b.canvas.style.display = "none";
                    document.body.appendChild(b.canvas);
                    c.canvasRGBA(b.canvas.id, d, e, g, h, this.blurRadius);
                    document.body.removeChild(b.canvas)
                }
            }
        };
        f.Element.feGaussianBlur.prototype = new f.Element.ElementBase;
        f.Element.title = function () { };
        f.Element.title.prototype = new f.Element.ElementBase;
        f.Element.desc = function () { };
        f.Element.desc.prototype = new f.Element.ElementBase;
        f.Element.MISSING = function (b) {
            f.log("ERROR: Element '" + b.nodeName + "' not yet implemented.")
        };
        f.Element.MISSING.prototype = new f.Element.ElementBase;
        f.CreateElement =
            function (b) {
                var c = b.nodeName.replace(/^[^:]+:/, ""),
                    c = c.replace(/\-/g, ""),
                    d = null,
                    d = typeof f.Element[c] != "undefined" ? new f.Element[c](b) : new f.Element.MISSING(b);
                d.type = b.nodeName;
                return d
            };
        f.load = function (b, c) {
            f.loadXml(b, f.ajax(c))
        };
        f.loadXml = function (b, c) {
            f.loadXmlDoc(b, f.parseXml(c))
        };
        f.loadXmlDoc = function (b, c) {
            f.init(b);
            var d = function (c) {
                for (var d = b.canvas; d;) {
                    c.x = c.x - d.offsetLeft;
                    c.y = c.y - d.offsetTop;
                    d = d.offsetParent
                }
                if (window.scrollX) c.x = c.x + window.scrollX;
                if (window.scrollY) c.y = c.y + window.scrollY;
                return c
            };
            if (f.opts.ignoreMouse != true) {
                b.canvas.onclick = function (b) {
                    b = d(new f.Point(b != null ? b.clientX : event.clientX, b != null ? b.clientY : event.clientY));
                    f.Mouse.onclick(b.x, b.y)
                };
                b.canvas.onmousemove = function (b) {
                    b = d(new f.Point(b != null ? b.clientX : event.clientX, b != null ? b.clientY : event.clientY));
                    f.Mouse.onmousemove(b.x, b.y)
                }
            }
            var e = f.CreateElement(c.documentElement);
            e.root = true;
            e.addStylesFromStyleDefinition();
            var g = true,
                h = function () {
                    f.ViewPort.Clear();
                    b.canvas.parentNode && f.ViewPort.SetCurrent(b.canvas.parentNode.clientWidth,
                        b.canvas.parentNode.clientHeight);
                    if (f.opts.ignoreDimensions != true) {
                        if (e.style("width").hasValue()) {
                            b.canvas.width = e.style("width").toPixels("x");
                            b.canvas.style.width = b.canvas.width + "px"
                        }
                        if (e.style("height").hasValue()) {
                            b.canvas.height = e.style("height").toPixels("y");
                            b.canvas.style.height = b.canvas.height + "px"
                        }
                    }
                    var d = b.canvas.clientWidth || b.canvas.width,
                        h = b.canvas.clientHeight || b.canvas.height;
                    if (f.opts.ignoreDimensions == true && e.style("width").hasValue() && e.style("height").hasValue()) {
                        d = e.style("width").toPixels("x");
                        h = e.style("height").toPixels("y")
                    }
                    f.ViewPort.SetCurrent(d, h);
                    if (f.opts.offsetX != null) e.attribute("x", true).value = f.opts.offsetX;
                    if (f.opts.offsetY != null) e.attribute("y", true).value = f.opts.offsetY;
                    if (f.opts.scaleWidth != null || f.opts.scaleHeight != null) {
                        var j = null,
                            k = null,
                            l = f.ToNumberArray(e.attribute("viewBox").value);
                        f.opts.scaleWidth != null && (e.attribute("width").hasValue() ? j = e.attribute("width").toPixels("x") / f.opts.scaleWidth : isNaN(l[2]) || (j = l[2] / f.opts.scaleWidth));
                        f.opts.scaleHeight != null && (e.attribute("height").hasValue() ?
                            k = e.attribute("height").toPixels("y") / f.opts.scaleHeight : isNaN(l[3]) || (k = l[3] / f.opts.scaleHeight));
                        j == null && (j = k);
                        k == null && (k = j);
                        e.attribute("width", true).value = f.opts.scaleWidth;
                        e.attribute("height", true).value = f.opts.scaleHeight;
                        e.style("transform", true, true).value += " scale(" + 1 / j + "," + 1 / k + ")"
                    }
                    f.opts.ignoreClear != true && b.clearRect(0, 0, d, h);
                    e.render(b);
                    if (g) {
                        g = false;
                        typeof f.opts.renderCallback == "function" && f.opts.renderCallback(c)
                    }
                },
                j = true;
            if (f.ImagesLoaded()) {
                j = false;
                h()
            }
            f.intervalID = setInterval(function () {
                var b =
                    false;
                if (j && f.ImagesLoaded()) {
                    j = false;
                    b = true
                }
                f.opts.ignoreMouse != true && (b = b | f.Mouse.hasEvents());
                if (f.opts.ignoreAnimation != true)
                    for (var c = 0; c < f.Animations.length; c++) b = b | f.Animations[c].update(1E3 / f.FRAMERATE);
                typeof f.opts.forceRedraw == "function" && f.opts.forceRedraw() == true && (b = true);
                if (b) {
                    h();
                    f.Mouse.runEvents()
                }
            }, 1E3 / f.FRAMERATE)
        };
        f.stop = function () {
            f.intervalID && clearInterval(f.intervalID)
        };
        f.Mouse = new function () {
            this.events = [];
            this.hasEvents = function () {
                return this.events.length != 0
            };
            this.onclick =
                function (b, c) {
                    this.events.push({
                        type: "onclick",
                        x: b,
                        y: c,
                        run: function (b) {
                            if (b.onclick) b.onclick()
                        }
                    })
                };
            this.onmousemove = function (b, c) {
                this.events.push({
                    type: "onmousemove",
                    x: b,
                    y: c,
                    run: function (b) {
                        if (b.onmousemove) b.onmousemove()
                    }
                })
            };
            this.eventElements = [];
            this.checkPath = function (b, c) {
                for (var d = 0; d < this.events.length; d++) {
                    var e = this.events[d];
                    c.isPointInPath && c.isPointInPath(e.x, e.y) && (this.eventElements[d] = b)
                }
            };
            this.checkBoundingBox = function (b, c) {
                for (var d = 0; d < this.events.length; d++) {
                    var e = this.events[d];
                    c.isPointInBox(e.x, e.y) && (this.eventElements[d] = b)
                }
            };
            this.runEvents = function () {
                f.ctx.canvas.style.cursor = "";
                for (var b = 0; b < this.events.length; b++)
                    for (var c = this.events[b], d = this.eventElements[b]; d;) {
                        c.run(d);
                        d = d.parent
                    }
                this.events = [];
                this.eventElements = []
            }
        };
        return f
    }
    var f = function (b, c, d) {
        if (b == null && c == null && d == null) {
            c = document.querySelectorAll("svg");
            for (b = 0; b < c.length; b++) {
                var d = c[b],
                    g = document.createElement("canvas");
                g.width = d.clientWidth;
                g.height = d.clientHeight;
                d.parentNode.insertBefore(g, d);
                d.parentNode.removeChild(d);
                var h = document.createElement("div");
                h.appendChild(d);
                f(g, h.innerHTML)
            }
        } else {
            typeof b == "string" && (b = document.getElementById(b));
            b.svg != null && b.svg.stop();
            d = e(d || {});
            if (!(b.childNodes.length == 1 && b.childNodes[0].nodeName == "OBJECT")) b.svg = d;
            b = b.getContext("2d");
            typeof c.documentElement != "undefined" ? d.loadXmlDoc(b, c) : c.substr(0, 1) == "<" ? d.loadXml(b, c) : d.load(b, c)
        }
    },
        g;
    if (typeof Element.prototype.matches != "undefined") g = function (b, c) {
        return b.matches(c)
    };
    else if (typeof Element.prototype.webkitMatchesSelector !=
        "undefined") g = function (b, c) {
            return b.webkitMatchesSelector(c)
        };
    else if (typeof Element.prototype.mozMatchesSelector != "undefined") g = function (b, c) {
        return b.mozMatchesSelector(c)
    };
    else if (typeof Element.prototype.msMatchesSelector != "undefined") g = function (b, c) {
        return b.msMatchesSelector(c)
    };
    else if (typeof Element.prototype.oMatchesSelector != "undefined") g = function (b, c) {
        return b.oMatchesSelector(c)
    };
    else {
        if (typeof jQuery === "function" || typeof Zepto === "function") g = function (b, c) {
            return $(b).is(c)
        };
        if (typeof g ===
            "undefined") g = Sizzle.matchesSelector
    }
    var h = /(\[[^\]]+\])/g,
        j = /(#[^\s\+>~\.\[:]+)/g,
        k = /(\.[^\s\+>~\.\[:]+)/g,
        l = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
        m = /(:[\w-]+\([^\)]*\))/gi,
        n = /(:[^\s\+>~\.\[:]+)/g,
        q = /([^\s\+>~\.\[:]+)/g;
    if (typeof CanvasRenderingContext2D != "undefined") CanvasRenderingContext2D.prototype.drawSvg = function (b, c, d, e, g, h) {
        var c = {
            ignoreMouse: true,
            ignoreAnimation: true,
            ignoreDimensions: true,
            ignoreClear: true,
            offsetX: c,
            offsetY: d,
            scaleWidth: e,
            scaleHeight: g
        },
            j;
        for (j in h) h.hasOwnProperty(j) &&
            (c[j] = h[j]);
        f(this.canvas, b, c)
    };
    return f
});

function fmod(b, c) {
    return b % c
}

function sign(b) {
    return b > 0 ? 1 : -1
}

function smoothstep(b, c, d) {
    if (d < b) return 0;
    if (d > c) return 1;
    b = (d - b) / (c - b);
    return b * b * (3 - 2 * b)
}

function clamp(b, c, d) {
    return b < c ? c : b > d ? d : b
}

function step(b, c) {
    return c < b ? 0 : 1
}

function mix(b, c, d) {
    return b + (c - b) * Math.min(Math.max(d, 0), 1)
}

function over(b, c) {
    return 1 - (1 - b) * (1 - c)
}

function tri(b, c) {
    c = c / (2 * Math.PI);
    c = c % 1;
    c < 0 && (c = 1 + c);
    return -1 + 2 * (c < b ? c / b : 1 - (c - b) / (1 - b))
}

function saw(b, c) {
    var d = b % 1;
    return d < c ? d / c : 1 - (d - c) / (1 - c)
}

function sqr(b, c) {
    return c = Math.sin(c) > b ? 1 : -1
}

function grad(b, c) {
    var b = b << 13 ^ b,
        d = c;
    b * (b * b * 15731 + 789221) + 1376312589 & 536870912 && (d = -c);
    return d
}

function noise(b) {
    var c = Math.floor(b),
        d = b - c,
        b = d * d * d * (d * (d * 6 - 15) + 10),
        e = grad(c + 0, d + 0),
        c = grad(c + 1, d - 1);
    return e + (c - e) * b
}

function cellnoise(b) {
    b = Math.floor(b);
    b = b << 13 ^ b;
    return (b * (b * b * 15731 + 789221) + 1376312589 >> 14 & 65535) / 65535
}

function frac(b) {
    return b % 1
}

function SineGenerator(b) {
    var c = {
        alive: true
    },
        d = sampleRate / b,
        e = 0;
    c.generate = function (b, c, h) {
        for (; h; h--) {
            var j = Math.sin(e / d * 2 * Math.PI);
            b[c++] += j;
            b[c++] += j;
            e++
        }
    };
    return c
}

function SquareGenerator(b, c) {
    var d = {
        alive: true
    },
        e = sampleRate / b,
        f = 0;
    d.generate = function (b, d, j) {
        for (; j; j--) {
            var k = f / e % 1 > c ? 1 : -1;
            b[d++] += k;
            b[d++] += k;
            f++
        }
    };
    return d
}

function ADSRGenerator(b, c, d, e, f, g) {
    var h = {
        alive: true
    },
        j = sampleRate * e,
        k = sampleRate * (e + f),
        l = (c - d) / (k - j),
        m = null,
        n = null,
        q = d / (sampleRate * g),
        p = 0;
    h.noteOff = function () {
        if (!h.released) {
            m = p;
            h.released = true;
            n = m + sampleRate * g
        }
    };
    h.generate = function (e, f, g) {
        if (h.alive) {
            for (var t = Array(g * 2), u = 0; u < g * 2; u++) t[u] = 0;
            b.generate(t, 0, g);
            for (childOffset = 0; g;)
                if (m != null)
                    if (p < n)
                        for (; g && p < n;) {
                            u = d - q * (p - m);
                            e[f++] += t[childOffset++] * u;
                            e[f++] += t[childOffset++] * u;
                            p++;
                            g--
                        } else {
                        h.alive = false;
                        break
                    } else if (p < j)
                        for (; g && p < j;) {
                            u = c * p / j;
                            e[f++] += t[childOffset++] * u;
                            e[f++] += t[childOffset++] * u;
                            p++;
                            g--
                        } else if (p < k)
                            for (; g && p < k;) {
                                u = c - l * (p - j);
                                e[f++] += t[childOffset++] * u;
                                e[f++] += t[childOffset++] * u;
                                p++;
                                g--
                            } else
                            for (; g;) {
                                e[f++] += t[childOffset++] * d;
                                e[f++] += t[childOffset++] * d;
                                p++;
                                g--
                            }
        }
    };
    return h
}

function midiToFrequency(b) {
    return 440 * Math.pow(2, (b - 69) / 12)
}
PianoProgram = {
    attackAmplitude: 0.2,
    sustainAmplitude: 0.1,
    attackTime: 0.02,
    decayTime: 0.3,
    releaseTime: 0.02,
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return ADSRGenerator(SineGenerator(d), this.attackAmplitude * (c / 128), this.sustainAmplitude * (c / 128), this.attackTime, this.decayTime, this.releaseTime)
    }
};
StringProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return ADSRGenerator(SineGenerator(d), 0.5 * (c / 128), 0.2 * (c / 128), 0.4, 0.8, 0.4)
    }
};

function Synth(b) {
    function c(b, c, g) {
        for (var h = g; h < g + b * 2; h++) c[h] = 0;
        for (h = d.length - 1; h >= 0; h--) {
            d[h].generate(c, g, b);
            d[h].alive || d.splice(h, 1)
        }
    }
    var d = [];
    return {
        sampleRate: b,
        addGenerator: function (b) {
            d.push(b)
        },
        generate: function (b) {
            var d = Array(b * 2);
            c(b, d, 0);
            return d
        },
        generateIntoBuffer: c
    }
}

function AudioSynthGenerator(b, c) {
    var d = {
        alive: true,
        released: false,
        decayTime: 0.3,
        releaseTime: 1,
        endTime: null,
        _sampleRate: 44100,
        _volume: 1,
        _mod: [function (b, c, d, e) {
            return 1 * Math.sin(2 * Math.PI * (b / c) * d + e)
        }, function (b, c, d, e) {
            return 1 * Math.sin(2 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 1 * Math.sin(4 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 1 * Math.sin(8 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 1 * Math.sin(0.5 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 1 * Math.sin(0.25 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 0.5 *
                Math.sin(2 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 0.5 * Math.sin(4 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 0.5 * Math.sin(8 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 0.5 * Math.sin(0.5 * Math.PI * b / c * d + e)
        }, function (b, c, d, e) {
            return 0.5 * Math.sin(0.25 * Math.PI * b / c * d + e)
        }],
        _temp: {}
    },
        e = 0,
        f = 0;
    d.noteOff = function () {
        if (!d.released) {
            d.released = true;
            d.endTime = f + d.releaseTime
        }
    };
    d.generate = function (g, h, j) {
        for (var k = this._sampleRate, l = this._volume, m = b.attack(k, c, l), n = b.dampen(k, c, l), q = b.wave.bind({
            modulate: this._mod,
            vars: this._temp
        }), p = 0, p = 0, s = e; e <= s + j; e++) {
            p = e <= k * m ? l * (e / (k * m)) : l * Math.pow(1 - (e - k * m) / (k * (2 - m)), n);
            p = p * Math.min(Math.max(q(e, k, c, l), -1), 1);
            g[h++] = p;
            g[h++] = p;
            f = f + e / k
        }
        if (d.endTime && f > d.endTime) d.alive = false
    };
    return d
}
AudioSynthPianoProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return AudioSynthGenerator({
            name: "piano",
            attack: function () {
                return 0.002
            },
            dampen: function (b, c, d) {
                return Math.pow(0.5 * Math.log(c * d / b), 2)
            },
            wave: function (b, c, d) {
                var h = this.modulate[0];
                return this.modulate[1](b, c, d, Math.pow(h(b, c, d, 0), 2) + 0.75 * h(b, c, d, 0.25) + 0.1 * h(b, c, d, 0.5))
            }
        }, d, c)
    }
};
AudioSynthOrganProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return AudioSynthGenerator({
            name: "organ",
            attack: function () {
                return 0.3
            },
            dampen: function (b, c) {
                return 1 + c * 0.01
            },
            wave: function (b, c, d) {
                var h = this.modulate[0];
                return this.modulate[1](b, c, d, h(b, c, d, 0) + 0.5 * h(b, c, d, 0.25) + 0.25 * h(b, c, d, 0.5))
            }
        }, d, c)
    }
};
AudioSynthAcousticProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return AudioSynthGenerator({
            name: "acoustic",
            attack: function () {
                return 0.002
            },
            dampen: function () {
                return 1
            },
            wave: function (b, c, d) {
                b = this.vars;
                b.valueTable = !b.valueTable ? [] : b.valueTable;
                if (typeof b.playVal == "undefined") b.playVal = 0;
                if (typeof b.periodCount == "undefined") b.periodCount = 0;
                var h = b.valueTable,
                    j = b.playVal,
                    k = b.periodCount,
                    d = c / d,
                    l = Math.floor((d - Math.floor(d)) * 100),
                    c = false;
                if (h.length <= Math.ceil(d)) {
                    h.push(Math.round(Math.random()) *
                        2 - 1);
                    return h[h.length - 1]
                }
                h[j] = (h[j >= h.length - 1 ? 0 : j + 1] + h[j]) * 0.5;
                if (j >= Math.floor(d))
                    if (j < Math.ceil(d)) {
                        if (k % 100 >= l) {
                            c = true;
                            h[j + 1] = (h[0] + h[j + 1]) * 0.5;
                            b.periodCount++
                        }
                    } else c = true;
                h = h[j];
                c ? b.playVal = 0 : b.playVal++;
                return h
            }
        }, d, c)
    }
};
AudioSynthEDMProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return AudioSynthGenerator({
            name: "edm",
            attack: function () {
                return 0.002
            },
            dampen: function () {
                return 1
            },
            wave: function (b, c, d) {
                var h = this.modulate[0],
                    j = this.modulate.slice(1);
                return j[0](b, c, d, j[9](b, c, d, j[2](b, c, d, Math.pow(h(b, c, d, 0), 3) + Math.pow(h(b, c, d, 0.5), 5) + Math.pow(h(b, c, d, 1), 7))) + j[8](b, c, d, h(b, c, d, 1.75)))
            }
        }, d, c)
    }
};

function SoundToyGenerator(b, c) {
    var d = {
        alive: true,
        released: false,
        endTime: null,
        releaseTime: 1
    },
        e = 0,
        f = 0;
    d.noteOff = function () {
        if (!d.released) {
            d.released = true;
            d.endTime = f + d.releaseTime
        }
    };
    d.generate = function (g, h, j) {
        for (var k = e; e < k + j; e++) {
            f = e / 44100;
            var l = b(2 * Math.PI * c, f);
            g[h++] += l;
            g[h++] += l
        }
        if (d.endTime && f > d.endTime) d.alive = false
    };
    return d
}

function SoundToyPiano1Function(b, c) {
    var d = 0.6 * Math.sin(1 * b * c) * Math.exp(-8.0E-4 * b * c),
        d = d + 0.3 * Math.sin(2 * b * c) * Math.exp(-0.001 * b * c),
        d = d + 0.1 * Math.sin(4 * b * c) * Math.exp(-0.0015 * b * c),
        d = (d + 0.2 * d * d * d) * (0.9 + 0.1 * Math.cos(70 * c));
    return d = 2 * d * Math.exp(-22 * c) + d
}

function SoundToyPiano2Function(b, c) {
    var d = c = c + 1.5E-4 * noise(12 * c),
        e;
    e = fmod(c * b * 0.2, 1);
    var f = 50 * e * (e - 1) * (e - 0.2) * (e - (0.15 + 0.6 * d)) * (e - (0.65 - 0.5 * d));
    e = fmod(c * b * 0.401, 1);
    var g = 50 * e * (e - 1) * (e - 0.4) * (e - (0.12 + 0.65 * d)) * (e - (0.67 - 0.55 * d));
    e = fmod(c * b * 0.399, 1);
    d = 50 * e * (e - 1) * (e - 0.8) * (e - (0.14 + 0.55 * d)) * (e - (0.66 - 0.65 * d));
    f = f + 0.02 * noise(1E3 * c);
    return (f / (c * b * 0.0015 + 0.1) + g / (c * b * 0.002 + 0.1) + d / (c * b * 0.0025 + 0.1)) / 3
}

function SoundToySpacePianoFunction(b, c) {
    var d = 1 - c,
        e = Math.sin(c * b * 0.5) * Math.log(c + 0.3) * d,
        f = Math.sin(c * b) * c * 0.4,
        g = fmod(d, 0.075) * Math.cos(Math.pow(d, 3) * b) * c * 2;
    return (e + f + g) * d
}

function SoundToyBellFunction(b, c) {
    var d = 0.1 * Math.exp(-c / 1) * Math.sin(0.56 * b * c),
        d = d + 0.067 * Math.exp(-c / 0.9) * Math.sin(0.56 * b * c),
        d = d + 0.1 * Math.exp(-c / 0.65) * Math.sin(0.92 * b * c),
        d = d + 0.18 * Math.exp(-c / 0.55) * Math.sin(0.92 * b * c),
        d = d + 0.267 * Math.exp(-c / 0.325) * Math.sin(1.19 * b * c),
        d = d + 0.167 * Math.exp(-c / 0.35) * Math.sin(1.7 * b * c),
        d = d + 0.146 * Math.exp(-c / 0.25) * Math.sin(2 * b * c),
        d = d + 0.133 * Math.exp(-c / 0.2) * Math.sin(2.74 * b * c),
        d = d + 0.133 * Math.exp(-c / 0.15) * Math.sin(3 * b * c),
        d = d + 0.1 * Math.exp(-c / 0.1) * Math.sin(3.76 * b * c);
    return d = d + 0.133 *
        Math.exp(-c / 0.075) * Math.sin(4.07 * b * c)
}

function SoundToyGuitarFunction(b, c) {
    var d = Math.cos(0.251 * b * c),
        e = 0.5 * Math.cos(1 * b * c + 3.14 * d) * Math.exp(-7.0E-4 * b * c),
        e = e + 0.2 * Math.cos(2 * b * c + 3.14 * d) * Math.exp(-9.0E-4 * b * c),
        e = e + 0.2 * Math.cos(4 * b * c + 3.14 * d) * Math.exp(-0.0016 * b * c),
        e = e + 0.1 * Math.cos(8 * b * c + 3.14 * d) * Math.exp(-0.002 * b * c),
        e = e * (0.9 + 0.1 * Math.cos(70 * c));
    return e = 2 * e * Math.exp(-22 * c) + e
}

function SoundToyFluteFunction(b, c) {
    var d = 6 * c * Math.exp(-2 * c) * Math.sin(b * c);
    return d = d * (0.8 + 0.2 * Math.cos(16 * c))
}

function SoundToyRhythmFunction(b, c) {
    var d = fmod(c, 0.5),
        e = 0.2 * noise(32E3 * d) * Math.exp(-32 * d),
        e = e + 1 * noise(3200 * d) * Math.exp(-32 * d),
        e = e + 7 * Math.cos(320 - 100 * Math.exp(-10 * d)) * Math.exp(-4 * d),
        d = fmod(c + 0.15, 1),
        e = e + 0.5 * noise(32E3 * d) * Math.exp(-64 * d),
        d = fmod(c + 0.25, 1),
        e = e + 1 * noise(32E3 * d) * Math.exp(-32 * d),
        c = c + 0.25,
        f = sign(Math.sin(3.14155 * c)),
        d = fmod(c, 0.5),
        e = e + 2 * Math.cos(6.2831 * (105 + 11 * f) * c) * Math.exp(-6 * d),
        d = fmod(c, 0.125) / 0.125,
        e = e + 1.4 * noise(320 * d) * Math.exp(-32 * d),
        f = c + 0.05 * Math.cos(c * 6.2831),
        d = fmod(f, 0.018) / 0.018,
        f = 0.5 + 0.4 * Math.cos(6.2831 * f),
        d = saw(d, f),
        d = -1 + 2 * d;
    return (e + d * d * d * 1.5) * 0.6
}

function SoundToyDrum1Function(b, c) {
    return Math.max(-1, Math.min(1, 8 * Math.sin(3E3 * c * Math.exp(-6 * c))))
}

function SoundToyDrum2Function(b, c) {
    var d = 0.5 * noise(32E3 * c) * Math.exp(-32 * c),
        d = d + 2 * noise(3200 * c) * Math.exp(-32 * c);
    return d = d + 3 * Math.cos(400 * (1 - c) * c) * Math.exp(-4 * c)
}

function SoundToyDrum3Function(b, c) {
    var d = Math.sin((1E3 - 2500 * c) * c),
        d = d + 0.2 * Math.random(),
        d = d * Math.exp(-12 * c);
    return d * 8
}

function SoundToyOrgan1Function(b, c) {
    var d = 0.6 * Math.cos(b * c) * Math.exp(-4 * c),
        d = d + 0.4 * Math.cos(2 * b * c) * Math.exp(-3 * c),
        d = d + 0.01 * Math.cos(4 * b * c) * Math.exp(-1 * c),
        d = d * d * d + d * d * d * d * d + d * d,
        e = 0.5 + 0.5 * Math.cos(8 * c),
        d = Math.sin(d * e * 3.14);
    return d = d * 30 * c * Math.exp(-0.1 * c)
}

function SoundToyOrgan2Function(b, c) {
    var d = fmod(c, 6.2831 / b) * b / 6.2831;
    a = 0.7 + 0.3 * Math.cos(6.2831 * c);
    y = -1 + 2 * saw(d, a);
    y = y * y * y;
    return y = 15 * y * c * Math.exp(-5 * c)
}

function SoundToyOrgan3Function(b, c) {
    var d = 0.5 + 0.5 * Math.cos(0 + c * 12),
        e = 0.5 + 0.5 * Math.cos(1 + c * 8),
        f = 0.5 + 0.5 * Math.cos(2 + c * 4),
        d = saw(0.25 * b * c, d) * Math.exp(-2 * c),
        d = d + saw(0.125 * b * c, e) * Math.exp(-3 * c),
        d = d + saw(0.0625 * b * c, f) * Math.exp(-4 * c);
    return d = d * (0.8 + 0.2 * Math.cos(64 * c))
}

function SoundToyOrgan4Function(b, c) {
    var d = 0.001 * Math.cos(5 * c),
        e = 1 * (saw((1 + d) * 0.1 * b * c, 1) - 0.5),
        e = e + 0.7 * (saw((2.01 + d) * 0.1 * b * c, 1) - 0.5),
        e = e + 0.5 * (saw((4.02 + d) * 0.1 * b * c, 1) - 0.5),
        e = e + 0.2 * (saw((8.02 + d) * 0.1 * b * c, 1) - 0.5),
        e = e * 20 * c * Math.exp(-4 * c);
    return e = e * (0.9 + 0.1 * Math.cos(40 * c))
}

function SoundToyFM1Function(b, c) {
    var d = Math.sin(12 * Math.sin(0.5 * b * c) + Math.sin(8 * Math.sin(0.15 * b * c))),
        e = (d * d - 1.05) * Math.sin(0.005 * b * c),
        f = 0.5 * Math.random() * Math.log(8 * c),
        d = 0.3333 * (d + e + f) * 3 * Math.exp(-1 * c) * Math.exp(-2 * c),
        d = Math.exp(2 * d);
    return (d - 1) / (d + 1)
}

function SoundToyFM2Function(b, c) {
    var d = Math.sin(Math.sin(0.2 * b * c) - Math.tan(0.5 * b * c)),
        e = Math.sin(Math.sin(0.2 * b * c) + Math.sin(2 * b * c)),
        f = Math.sin(Math.sin(0.4 * b * c) - Math.sin(2 * b * c)),
        g = 1.2 * Math.random(),
        d = 0.25 * (d + e + f + g),
        d = (0.25 + Math.sin(0.005 * b * c)) * Math.sin(d * c),
        d = d * Math.exp(-4 * c) * Math.exp(-1.5 * c) * 40,
        d = Math.exp(2 * d);
    return (d - 1) / (d + 1)
}

function SoundToyFM3Function(b, c) {
    var d = 0,
        e = Math.tan(0.025 * b * c) + 2 * Math.sin(b * c) + Math.random(),
        e = Math.sin(e * c),
        f = -0.93 * c,
        d = Math.exp(2 * ((1 - f) * e + f * d));
    return (d - 1) / (d + 1)
}
SoundToyPiano1Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyPiano1Function, d, c)
    }
};
SoundToyPiano2Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyPiano2Function, d, c)
    }
};
SoundToySpacePianoProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToySpacePianoFunction, d, c)
    }
};
SoundToyBellProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyBellFunction, d, c)
    }
};
SoundToyGuitarProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyGuitarFunction, d, c)
    }
};
SoundToyFluteProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyFluteFunction, d, c)
    }
};
SoundToyRythmProgram = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyRhythmFunction, d, c)
    }
};
SoundToyDrum1Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyDrum1Function, d, c)
    }
};
SoundToyDrum2Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyDrum2Function, d, c)
    }
};
SoundToyDrum3Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyDrum3Function, d, c)
    }
};
SoundToyOrgan1Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyOrgan1Function, d, c)
    }
};
SoundToyOrgan2Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyOrgan2Function, d, c)
    }
};
SoundToyOrgan3Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyOrgan3Function, d, c)
    }
};
SoundToyOrgan4Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyOrgan4Function, d, c)
    }
};
SoundToyFM1Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyFM1Function, d, c)
    }
};
SoundToyFM2Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyFM2Function, d, c)
    }
};
SoundToyFM3Program = {
    createNote: function (b, c) {
        var d = midiToFrequency(b);
        return SoundToyGenerator(SoundToyFM3Function, d, c)
    }
};
PROGRAMS = {
    41: StringProgram,
    42: StringProgram,
    43: StringProgram,
    44: StringProgram,
    45: StringProgram,
    46: StringProgram,
    47: StringProgram,
    49: StringProgram,
    50: StringProgram
};
PROGRAMS[1] = AudioSynthPianoProgram;
PROGRAMS[2] = PianoProgram;
PROGRAMS[4] = SoundToyPiano1Program;
PROGRAMS[5] = SoundToyPiano2Program;
PROGRAMS[6] = SoundToySpacePianoProgram;
PROGRAMS[17] = AudioSynthOrganProgram;
PROGRAMS[18] = SoundToyOrgan1Program;
PROGRAMS[19] = SoundToyOrgan2Program;
PROGRAMS[20] = SoundToyOrgan3Program;
PROGRAMS[21] = SoundToyOrgan4Program;
PROGRAMS[25] = AudioSynthAcousticProgram;
PROGRAMS[27] = SoundToyGuitarProgram;
PROGRAMS[43] = StringProgram;
PROGRAMS[74] = SoundToyFluteProgram;
PROGRAMS[90] = AudioSynthEDMProgram;
PROGRAMS[91] = SoundToyRythmProgram;
PROGRAMS[92] = SoundToyFM1Program;
PROGRAMS[93] = SoundToyFM2Program;
PROGRAMS[94] = SoundToyFM3Program;
PROGRAMS[113] = SoundToyBellProgram;
PROGRAMS[115] = SoundToyDrum1Program;
PROGRAMS[116] = SoundToyDrum3Program;
PROGRAMS[119] = SoundToyDrum2Program;
for (i = 0; 128 > i; i++) null == PROGRAMS[i] && (PROGRAMS[i] = AudioSynthPianoProgram);
var sampleRate = 44100;

function AudioPlayer(b, c) {
    c || (c = {});
    var d = c.latency || 1,
        e = d * 100,
        f = new Audio,
        g = window.AudioContext || window.webkitAudioContext,
        h = false;
    if (f.mozSetup) {
        f.mozSetup(2, sampleRate);
        var j = [],
            k = d * 2 * sampleRate,
            l = Math.floor(d * sampleRate),
            m = function () {
                if (j.length) {
                    var c = f.mozWriteAudio(j);
                    j = j.slice(c)
                }
                j.length < k && !b.finished && (j = j.concat(b.generate(l)));
                !h && (!b.finished || j.length) && setTimeout(m, e)
            };
        m();
        return {
            type: "Firefox Audio",
            stop: function () {
                h = true
            }
        }
    }
    if (g) {
        d = new g;
        sampleRate = d.sampleRate;
        var n;
        n = d.createScriptProcessor ?
            d.createScriptProcessor(4096, 0, 2) : d.createJavaScriptNode(4096, 0, 2);
        n.onaudioprocess = function (c) {
            if (b.finished) n.disconnect();
            else
                for (var d = c.outputBuffer.getChannelData(0), c = c.outputBuffer.getChannelData(1), e = b.generate(4096), f = 0; f < 4096; ++f) {
                    d[f] = e[f * 2];
                    c[f] = e[f * 2 + 1]
                }
        };
        n.connect(d.destination);
        return {
            stop: function () {
                n.disconnect();
                h = true
            },
            type: "Webkit Audio"
        }
    }
    g = document.createElement("div");
    g.innerHTML = '<embed type="application/x-shockwave-flash" id="da-swf" src="/ext/midi/da.swf" width="8" height="8" allowScriptAccess="always" style="position: fixed; left:-10px;" />';
    document.body.appendChild(g);
    var q = document.getElementById("da-swf"),
        p = d * 1E3,
        l = d * sampleRate,
        m = function () {
            if (q.bufferedDuration() < p) {
                for (var c = b.generate(l), d = Array(c.length), f = c.length - 1; f != 0; f--) d[f] = Math.floor(c[f] * 32768);
                q.write(d.join(" "))
            } !h && !b.finished && setTimeout(m, e)
        },
        s = function () {
            q.write ? m() : setTimeout(s, 10)
        };
    s();
    return {
        stop: function () {
            q.stop();
            h = true
        },
        bufferedDuration: function () {
            return q.bufferedDuration()
        },
        type: "Flash Audio"
    }
}