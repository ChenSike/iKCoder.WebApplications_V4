ace.define("ace/ace", "require exports module ace/lib/fixoldbrowsers ace/lib/dom ace/lib/event ace/editor ace/edit_session ace/undomanager ace/virtual_renderer ace/multi_select ace/worker/worker_client ace/keyboard/hash_handler ace/placeholder ace/mode/folding/fold_mode ace/theme/textmate ace/ext/error_marker ace/config".split(" "), function (b, c) {
    b("./lib/fixoldbrowsers");
    var d = b("./lib/dom"),
        e = b("./lib/event"),
        f = b("./editor").Editor,
        g = b("./edit_session").EditSession,
        h = b("./undomanager").UndoManager,
        j = b("./virtual_renderer").VirtualRenderer,
        k = b("./multi_select").MultiSelect;
    b("./worker/worker_client");
    b("./keyboard/hash_handler");
    b("./placeholder");
    b("./mode/folding/fold_mode");
    b("./theme/textmate");
    b("./ext/error_marker");
    c.config = b("./config");
    c.require = b;
    c.edit = function (b) {
        if (typeof b == "string") {
            var g = b,
                b = document.getElementById(g);
            if (!b) throw Error("ace.edit can't find div #" + g);
        }
        if (b.env && b.env.editor instanceof f) return b.env.editor;
        g = c.createEditSession(d.getInnerText(b));
        b.innerHTML =
            "";
        var h = new f(new j(b));
        new k(h);
        h.setSession(g);
        var q = {
            document: g,
            editor: h,
            onResize: h.resize.bind(h, null)
        };
        return e.addListener(window, "resize", q.onResize), h.on("destroy", function () {
            e.removeListener(window, "resize", q.onResize)
        }), b.env = h.env = q, h
    };
    c.createEditSession = function (b, c) {
        var d = new g(b, c);
        return d.setUndoManager(new h), d
    };
    c.EditSession = g;
    c.UndoManager = h
});
ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function (b) {
    b("./regexp");
    b("./es5-shim")
});
ace.define("ace/lib/regexp", ["require", "exports", "module"], function () {
    function b(b, c, d) {
        if (Array.prototype.indexOf) return b.indexOf(c, d);
        for (d = d || 0; d < b.length; d++)
            if (b[d] === c) return d;
        return -1
    }
    var c = RegExp.prototype.exec,
        d = RegExp.prototype.test,
        e = String.prototype.replace,
        f = void 0 === c.call(/()??/, "")[1],
        g = function () {
            var b = /^/g;
            return d.call(b, ""), !b.lastIndex
        }();
    if (!g || !f) RegExp.prototype.exec = function (d) {
        var j = c.apply(this, arguments),
            k;
        if ("string" == typeof d && j) {
            !f && 1 < j.length && -1 < b(j, "") && (k = RegExp(this.source,
                e.call((this.global ? "g" : "") + (this.ignoreCase ? "i" : "") + (this.multiline ? "m" : "") + (this.extended ? "x" : "") + (this.sticky ? "y" : ""), "g", "")), e.call(d.slice(j.index), k, function () {
                    for (var b = 1; b < arguments.length - 2; b++) void 0 === arguments[b] && (j[b] = void 0)
                }));
            if (this._xregexp && this._xregexp.captureNames)
                for (var l = 1; l < j.length; l++) (k = this._xregexp.captureNames[l - 1]) && (j[k] = j[l]);
            !g && this.global && !j[0].length && this.lastIndex > j.index && this.lastIndex--
        }
        return j
    }, g || (RegExp.prototype.test = function (b) {
        b = c.call(this, b);
        return b && this.global && !b[0].length && this.lastIndex > b.index && this.lastIndex--, !!b
    })
});
ace.define("ace/lib/es5-shim", ["require", "exports", "module"], function () {
    function b() { }

    function c(b) {
        try {
            return Object.defineProperty(b, "sentinel", {}), "sentinel" in b
        } catch (c) { }
    }

    function d(b) {
        return b = +b, b !== b ? b = 0 : 0 !== b && b !== 1 / 0 && b !== -1 / 0 && (b = (0 < b || -1) * Math.floor(Math.abs(b))), b
    }
    Function.prototype.bind || (Function.prototype.bind = function (c) {
        var d = this;
        if ("function" != typeof d) throw new TypeError("Function.prototype.bind called on incompatible " + d);
        var e = g.call(arguments, 1),
            f = function () {
                if (this instanceof f) {
                    var b = d.apply(this, e.concat(g.call(arguments)));
                    return Object(b) === b ? b : this
                }
                return d.apply(c, e.concat(g.call(arguments)))
            };
        return d.prototype && (b.prototype = d.prototype, f.prototype = new b, b.prototype = null), f
    });
    var e = Function.prototype.call,
        f = Object.prototype,
        g = Array.prototype.slice,
        h = e.bind(f.toString),
        j = e.bind(f.hasOwnProperty),
        k, l, m, n, q;
    if (q = j(f, "__defineGetter__")) k = e.bind(f.__defineGetter__), l = e.bind(f.__defineSetter__), m = e.bind(f.__lookupGetter__), n = e.bind(f.__lookupSetter__);
    if (2 != [1, 2].splice(0).length)
        if (function () {
                function b(c) {
                    c =
                        Array(c + 2);
                    return c[0] = c[1] = 0, c
        }
                var c = [],
                    d;
                c.splice.apply(c, b(20));
                c.splice.apply(c, b(26));
                d = c.length;
                c.splice(5, 0, "XXX");
                d + 1 == c.length;
                if (d + 1 == c.length) return !0
        }()) {
            var p = Array.prototype.splice;
            Array.prototype.splice = function (b, c) {
                return arguments.length ? p.apply(this, [void 0 === b ? 0 : b, void 0 === c ? this.length - b : c].concat(g.call(arguments, 2))) : []
            }
        } else Array.prototype.splice = function (b, c) {
            var d = this.length;
            0 < b ? b > d && (b = d) : void 0 == b ? b = 0 : 0 > b && (b = Math.max(d + b, 0));
            b + c < d || (c = d - b);
            var e = this.slice(b, b + c),
                f =
                g.call(arguments, 2),
                h = f.length;
            if (b === d) h && this.push.apply(this, f);
            else {
                var j = Math.min(c, d - b),
                    k = b + j,
                    l = k + h - j,
                    o = d - k,
                    d = d - j;
                if (l < k)
                    for (j = 0; j < o; ++j) this[l + j] = this[k + j];
                else if (l > k)
                    for (j = o; j--;) this[l + j] = this[k + j];
                if (h && b === d) this.length = d, this.push.apply(this, f);
                else {
                    this.length = d + h;
                    for (j = 0; j < h; ++j) this[b + j] = f[j]
                }
            }
            return e
        };
    Array.isArray || (Array.isArray = function (b) {
        return "[object Array]" == h(b)
    });
    var e = Object("a"),
        s = "a" != e[0] || !(0 in e);
    Array.prototype.forEach || (Array.prototype.forEach = function (b, c) {
        var d =
            K(this),
            e = s && "[object String]" == h(this) ? this.split("") : d,
            f = -1,
            g = e.length >>> 0;
        if ("[object Function]" != h(b)) throw new TypeError;
        for (; ++f < g;) f in e && b.call(c, e[f], f, d)
    });
    Array.prototype.map || (Array.prototype.map = function (b, c) {
        var d = K(this),
            e = s && "[object String]" == h(this) ? this.split("") : d,
            f = e.length >>> 0,
            g = Array(f);
        if ("[object Function]" != h(b)) throw new TypeError(b + " is not a function");
        for (var j = 0; j < f; j++) j in e && (g[j] = b.call(c, e[j], j, d));
        return g
    });
    Array.prototype.filter || (Array.prototype.filter = function (b,
        c) {
        var d = K(this),
            e = s && "[object String]" == h(this) ? this.split("") : d,
            f = e.length >>> 0,
            g = [],
            j;
        if ("[object Function]" != h(b)) throw new TypeError(b + " is not a function");
        for (var k = 0; k < f; k++) k in e && (j = e[k], b.call(c, j, k, d) && g.push(j));
        return g
    });
    Array.prototype.every || (Array.prototype.every = function (b, c) {
        var d = K(this),
            e = s && "[object String]" == h(this) ? this.split("") : d,
            f = e.length >>> 0;
        if ("[object Function]" != h(b)) throw new TypeError(b + " is not a function");
        for (var g = 0; g < f; g++)
            if (g in e && !b.call(c, e[g], g, d)) return !1;
        return !0
    });
    Array.prototype.some || (Array.prototype.some = function (b, c) {
        var d = K(this),
            e = s && "[object String]" == h(this) ? this.split("") : d,
            f = e.length >>> 0;
        if ("[object Function]" != h(b)) throw new TypeError(b + " is not a function");
        for (var g = 0; g < f; g++)
            if (g in e && b.call(c, e[g], g, d)) return !0;
        return !1
    });
    Array.prototype.reduce || (Array.prototype.reduce = function (b) {
        var c = K(this),
            d = s && "[object String]" == h(this) ? this.split("") : c,
            e = d.length >>> 0;
        if ("[object Function]" != h(b)) throw new TypeError(b + " is not a function");
        if (!e && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
        var f = 0,
            g;
        if (2 <= arguments.length) g = arguments[1];
        else {
            do {
                if (f in d) {
                    g = d[f++];
                    break
                }
                if (++f >= e) throw new TypeError("reduce of empty array with no initial value");
            } while (1)
        }
        for (; f < e; f++) f in d && (g = b.call(void 0, g, d[f], f, c));
        return g
    });
    Array.prototype.reduceRight || (Array.prototype.reduceRight = function (b) {
        var c = K(this),
            d = s && "[object String]" == h(this) ? this.split("") : c,
            e = d.length >>> 0;
        if ("[object Function]" != h(b)) throw new TypeError(b +
            " is not a function");
        if (!e && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
        var f, e = e - 1;
        if (2 <= arguments.length) f = arguments[1];
        else {
            do {
                if (e in d) {
                    f = d[e--];
                    break
                }
                if (0 > --e) throw new TypeError("reduceRight of empty array with no initial value");
            } while (1)
        }
        do e in this && (f = b.call(void 0, f, d[e], e, c)); while (e--);
        return f
    });
    if (!Array.prototype.indexOf || -1 != [0, 1].indexOf(1, 2)) Array.prototype.indexOf = function (b) {
        var c = s && "[object String]" == h(this) ? this.split("") :
            K(this),
            e = c.length >>> 0;
        if (!e) return -1;
        var f = 0;
        1 < arguments.length && (f = d(arguments[1]));
        for (f = 0 <= f ? f : Math.max(0, e + f) ; f < e; f++)
            if (f in c && c[f] === b) return f;
        return -1
    };
    if (!Array.prototype.lastIndexOf || -1 != [0, 1].lastIndexOf(0, -3)) Array.prototype.lastIndexOf = function (b) {
        var c = s && "[object String]" == h(this) ? this.split("") : K(this),
            e = c.length >>> 0;
        if (!e) return -1;
        var f = e - 1;
        1 < arguments.length && (f = Math.min(f, d(arguments[1])));
        for (f = 0 <= f ? f : e - Math.abs(f) ; 0 <= f; f--)
            if (f in c && b === c[f]) return f;
        return -1
    };
    Object.getPrototypeOf ||
        (Object.getPrototypeOf = function (b) {
            return b.__proto__ || (b.constructor ? b.constructor.prototype : f)
        });
    Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function (b, c) {
        if ("object" != typeof b && "function" != typeof b || null === b) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + b);
        if (j(b, c)) {
            var d, e, g;
            d = {
                enumerable: !0,
                configurable: !0
            };
            if (q) {
                var h = b.__proto__;
                b.__proto__ = f;
                e = m(b, c);
                g = n(b, c);
                b.__proto__ = h;
                if (e || g) return e && (d.get = e), g && (d.set = g), d
            }
            return d.value = b[c],
                d
        }
    });
    Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (b) {
        return Object.keys(b)
    });
    if (!Object.create) {
        var r;
        null === Object.prototype.__proto__ ? r = function () {
            return {
                __proto__: null
            }
        } : r = function () {
            var b = {},
                c;
            for (c in b) b[c] = null;
            return b.constructor = b.hasOwnProperty = b.propertyIsEnumerable = b.isPrototypeOf = b.toLocaleString = b.toString = b.valueOf = b.__proto__ = null, b
        };
        Object.create = function (b, c) {
            var d;
            if (b === null) d = r();
            else {
                if (typeof b != "object") throw new TypeError("typeof prototype[" + typeof b +
                    "] != 'object'");
                d = function () { };
                d.prototype = b;
                d = new d;
                d.__proto__ = b
            }
            return c !== void 0 && Object.defineProperties(d, c), d
        }
    }
    if (Object.defineProperty) {
        var e = c({}),
            o = "undefined" == typeof document || c(document.createElement("div"));
        if (!e || !o) var t = Object.defineProperty
    }
    if (!Object.defineProperty || t) Object.defineProperty = function (b, c, d) {
        if (typeof b != "object" && typeof b != "function" || b === null) throw new TypeError("Object.defineProperty called on non-object: " + b);
        if (typeof d != "object" && typeof d != "function" || d === null) throw new TypeError("Property description must be an object: " +
            d);
        if (t) try {
            return t.call(Object, b, c, d)
        } catch (e) { }
        if (j(d, "value"))
            if (q && (m(b, c) || n(b, c))) {
                var g = b.__proto__;
                b.__proto__ = f;
                delete b[c];
                b[c] = d.value;
                b.__proto__ = g
            } else b[c] = d.value;
        else {
            if (!q) throw new TypeError("getters & setters can not be defined on this javascript engine");
            j(d, "get") && k(b, c, d.get);
            j(d, "set") && l(b, c, d.set)
        }
        return b
    };
    Object.defineProperties || (Object.defineProperties = function (b, c) {
        for (var d in c) j(c, d) && Object.defineProperty(b, d, c[d]);
        return b
    });
    Object.seal || (Object.seal = function (b) {
        return b
    });
    Object.freeze || (Object.freeze = function (b) {
        return b
    });
    try {
        Object.freeze(function () { })
    } catch (u) {
        Object.freeze = function (b) {
            return function (c) {
                return typeof c == "function" ? c : b(c)
            }
        }(Object.freeze)
    }
    Object.preventExtensions || (Object.preventExtensions = function (b) {
        return b
    });
    Object.isSealed || (Object.isSealed = function () {
        return false
    });
    Object.isFrozen || (Object.isFrozen = function () {
        return false
    });
    Object.isExtensible || (Object.isExtensible = function (b) {
        if (Object(b) === b) throw new TypeError;
        for (var c = ""; j(b, c) ;) c = c +
            "?";
        b[c] = true;
        var d = j(b, c);
        return delete b[c], d
    });
    if (!Object.keys) {
        var w = !0,
            z = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
            A = z.length,
            C;
        for (C in {
            toString: null
        }) w = !1;
        Object.keys = function (b) {
            if (typeof b != "object" && typeof b != "function" || b === null) throw new TypeError("Object.keys called on a non-object");
            var c = [],
                d;
            for (d in b) j(b, d) && c.push(d);
            if (w)
                for (d = 0; d < A; d++) {
                    var e = z[d];
                    j(b, e) && c.push(e)
                }
            return c
        }
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    C = "\t\n\x0B\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if (!String.prototype.trim || C.trim()) {
        C = "[" + C + "]";
        var G = RegExp("^" + C + C + "*"),
            H = RegExp(C + C + "*$");
        String.prototype.trim = function () {
            return ("" + this).replace(G, "").replace(H, "")
        }
    }
    var K = function (b) {
        if (b == null) throw new TypeError("can't convert " + b + " to object");
        return Object(b)
    }
});
ace.define("ace/lib/dom", ["require", "exports", "module"], function (b, c) {
    "undefined" != typeof document && (c.getDocumentHead = function (b) {
        return b || (b = document), b.head || b.getElementsByTagName("head")[0] || b.documentElement
    }, c.createElement = function (b, c) {
        return document.createElementNS ? document.createElementNS(c || "http://www.w3.org/1999/xhtml", b) : document.createElement(b)
    }, c.hasCssClass = function (b, c) {
        return -1 !== b.className.split(/\s+/g).indexOf(c)
    }, c.addCssClass = function (b, e) {
        c.hasCssClass(b, e) || (b.className +=
            " " + e)
    }, c.removeCssClass = function (b, c) {
        for (var f = b.className.split(/\s+/g) ; ;) {
            var g = f.indexOf(c);
            if (-1 == g) break;
            f.splice(g, 1)
        }
        b.className = f.join(" ")
    }, c.toggleCssClass = function (b, c) {
        for (var f = b.className.split(/\s+/g), g = !0; ;) {
            var h = f.indexOf(c);
            if (-1 == h) break;
            g = !1;
            f.splice(h, 1)
        }
        return g && f.push(c), b.className = f.join(" "), g
    }, c.setCssClass = function (b, e, f) {
        f ? c.addCssClass(b, e) : c.removeCssClass(b, e)
    }, c.hasCssString = function (b, c) {
        var f = 0,
            g, c = c || document;
        if (c.createStyleSheet && (g = c.styleSheets))
            for (; f <
                g.length;) {
                if (g[f++].owningElement.id === b) return !0
            } else if (g = c.getElementsByTagName("style"))
                for (; f < g.length;)
                    if (g[f++].id === b) return !0;
        return !1
    }, c.importCssString = function (b, e, f) {
        f = f || document;
        if (e && c.hasCssString(e, f)) return null;
        var g;
        f.createStyleSheet ? (g = f.createStyleSheet(), g.cssText = b, e && (g.owningElement.id = e)) : (g = f.createElementNS ? f.createElementNS("http://www.w3.org/1999/xhtml", "style") : f.createElement("style"), g.appendChild(f.createTextNode(b)), e && (g.id = e), c.getDocumentHead(f).appendChild(g))
    },
        c.importCssStylsheet = function (b, e) {
            if (e.createStyleSheet) e.createStyleSheet(b);
            else {
                var f = c.createElement("link");
                f.rel = "stylesheet";
                f.href = b;
                c.getDocumentHead(e).appendChild(f)
            }
        }, c.getInnerWidth = function (b) {
            return parseInt(c.computedStyle(b, "paddingLeft"), 10) + parseInt(c.computedStyle(b, "paddingRight"), 10) + b.clientWidth
        }, c.getInnerHeight = function (b) {
            return parseInt(c.computedStyle(b, "paddingTop"), 10) + parseInt(c.computedStyle(b, "paddingBottom"), 10) + b.clientHeight
        }, void 0 !== window.pageYOffset ? (c.getPageScrollTop =
            function () {
                return window.pageYOffset
            }, c.getPageScrollLeft = function () {
                return window.pageXOffset
            }) : (c.getPageScrollTop = function () {
                return document.body.scrollTop
            }, c.getPageScrollLeft = function () {
                return document.body.scrollLeft
            }), window.getComputedStyle ? c.computedStyle = function (b, c) {
                return c ? (window.getComputedStyle(b, "") || {})[c] || "" : window.getComputedStyle(b, "") || {}
            } : c.computedStyle = function (b, c) {
                return c ? b.currentStyle[c] : b.currentStyle
            }, c.scrollbarWidth = function (b) {
                var e = c.createElement("ace_inner");
                e.style.width = "100%";
                e.style.minWidth = "0px";
                e.style.height = "200px";
                e.style.display = "block";
                var f = c.createElement("ace_outer"),
                    g = f.style;
                g.position = "absolute";
                g.left = "-10000px";
                g.overflow = "hidden";
                g.width = "200px";
                g.minWidth = "0px";
                g.height = "150px";
                g.display = "block";
                f.appendChild(e);
                b = b.documentElement;
                b.appendChild(f);
                var h = e.offsetWidth;
                g.overflow = "scroll";
                e = e.offsetWidth;
                return h == e && (e = f.clientWidth), b.removeChild(f), h - e
            }, c.setInnerHtml = function (b, c) {
                var f = b.cloneNode(!1);
                return f.innerHTML = c, b.parentNode.replaceChild(f,
                    b), f
            }, "textContent" in document.documentElement ? (c.setInnerText = function (b, c) {
                b.textContent = c
            }, c.getInnerText = function (b) {
                return b.textContent
            }) : (c.setInnerText = function (b, c) {
                b.innerText = c
            }, c.getInnerText = function (b) {
                return b.innerText
            }), c.getParentWindow = function (b) {
                return b.defaultView || b.parentWindow
            })
});
ace.define("ace/lib/event", "require exports module ace/lib/keys ace/lib/useragent ace/lib/dom".split(" "), function (b, c) {
    function d(b, c, d) {
        var m = 0;
        !f.isOpera || "KeyboardEvent" in window || !f.isMac ? m = 0 | (c.ctrlKey ? 1 : 0) | (c.altKey ? 2 : 0) | (c.shiftKey ? 4 : 0) | (c.metaKey ? 8 : 0) : m = 0 | (c.metaKey ? 1 : 0) | (c.altKey ? 2 : 0) | (c.shiftKey ? 4 : 0) | (c.ctrlKey ? 8 : 0);
        if (!f.isMac && g) {
            if (g[91] || g[92]) m = m | 8;
            if (g.altGr) {
                if ((3 & m) == 3) return;
                g.altGr = 0
            }
            if (d === 18 || d === 17) {
                var n = c.location || c.keyLocation;
                if (d === 17 && n === 1) h = c.timeStamp;
                else if (d ===
                    18 && m === 3 && n === 2) {
                    n = -h;
                    h = c.timeStamp;
                    n = n + h;
                    n < 3 && (g.altGr = true)
                }
            }
        }
        if (d in e.MODIFIER_KEYS) {
            switch (e.MODIFIER_KEYS[d]) {
                case "Alt":
                    m = 2;
                    break;
                case "Shift":
                    m = 4;
                    break;
                case "Ctrl":
                    m = 1;
                    break;
                default:
                    m = 8
            }
            d = 0
        }
        m & 8 && (d === 91 || d === 93) && (d = 0);
        if (!m && d === 13 && (c.location || c.keyLocation === 3)) {
            b(c, m, -d);
            if (c.defaultPrevented) return
        }
        return m || d in e.FUNCTION_KEYS || d in e.PRINTABLE_KEYS ? b(c, m, d) : false
    }
    var e = b("./keys"),
        f = b("./useragent");
    b("./dom");
    c.addListener = function (b, c, d) {
        if (b.addEventListener) return b.addEventListener(c,
            d, false);
        if (b.attachEvent) {
            var e = function () {
                d.call(b, window.event)
            };
            d._wrapper = e;
            b.attachEvent("on" + c, e)
        }
    };
    c.removeListener = function (b, c, d) {
        if (b.removeEventListener) return b.removeEventListener(c, d, false);
        b.detachEvent && b.detachEvent("on" + c, d._wrapper || d)
    };
    c.stopEvent = function (b) {
        return c.stopPropagation(b), c.preventDefault(b), false
    };
    c.stopPropagation = function (b) {
        b.stopPropagation ? b.stopPropagation() : b.cancelBubble = true
    };
    c.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue =
            false
    };
    c.getButton = function (b) {
        return b.type == "dblclick" ? 0 : b.type == "contextmenu" || b.ctrlKey && f.isMac ? 2 : b.preventDefault ? b.button : {
            1: 0,
            2: 2,
            4: 1
        }[b.button]
    };
    c.capture = function (b, d, e) {
        function f(b) {
            d && d(b);
            e && e(b);
            c.removeListener(document, "mousemove", d, true);
            c.removeListener(document, "mouseup", f, true);
            c.removeListener(document, "dragstart", f, true)
        }
        return c.addListener(document, "mousemove", d, true), c.addListener(document, "mouseup", f, true), c.addListener(document, "dragstart", f, true), f
    };
    c.addMouseWheelListener =
        function (b, d) {
            "onmousewheel" in b ? c.addListener(b, "mousewheel", function (b) {
                b.wheelDeltaX !== void 0 ? (b.wheelX = -b.wheelDeltaX / 8, b.wheelY = -b.wheelDeltaY / 8) : (b.wheelX = 0, b.wheelY = -b.wheelDelta / 8);
                d(b)
            }) : "onwheel" in b ? c.addListener(b, "wheel", function (b) {
                switch (b.deltaMode) {
                    case b.DOM_DELTA_PIXEL:
                        b.wheelX = b.deltaX * 0.35 || 0;
                        b.wheelY = b.deltaY * 0.35 || 0;
                        break;
                    case b.DOM_DELTA_LINE:
                    case b.DOM_DELTA_PAGE:
                        b.wheelX = (b.deltaX || 0) * 5;
                        b.wheelY = (b.deltaY || 0) * 5
                }
                d(b)
            }) : c.addListener(b, "DOMMouseScroll", function (b) {
                b.axis &&
                    b.axis == b.HORIZONTAL_AXIS ? (b.wheelX = (b.detail || 0) * 5, b.wheelY = 0) : (b.wheelX = 0, b.wheelY = (b.detail || 0) * 5);
                d(b)
            })
        };
    c.addMultiMouseDownListener = function (b, d, e, g) {
        var h = 0,
            q, p, s, r = {
                2: "dblclick",
                3: "tripleclick",
                4: "quadclick"
            };
        c.addListener(b, "mousedown", function (b) {
            c.getButton(b) != 0 ? h = 0 : b.detail > 1 ? (h++, h > 4 && (h = 1)) : h = 1;
            if (f.isIE) {
                (Math.abs(b.clientX - q) > 5 || Math.abs(b.clientY - p) > 5) && (h = 1);
                h == 1 && (q = b.clientX, p = b.clientY)
            }
            e[g]("mousedown", b);
            if (h > 4) h = 0;
            else if (h > 1) return e[g](r[h], b)
        });
        f.isOldIE && c.addListener(b,
            "dblclick",
            function (b) {
                h = 2;
                s && clearTimeout(s);
                s = setTimeout(function () {
                    s = null
                }, d[h - 1] || 600);
                e[g]("mousedown", b);
                e[g](r[h], b)
            })
    };
    var g = null,
        h = 0;
    c.addCommandKeyListener = function (b, e) {
        var h = c.addListener;
        if (f.isOldGecko || f.isOpera && !("KeyboardEvent" in window)) {
            var m = null;
            h(b, "keydown", function (b) {
                m = b.keyCode
            });
            h(b, "keypress", function (b) {
                return d(e, b, m)
            })
        } else {
            var n = null;
            h(b, "keydown", function (b) {
                g[b.keyCode] = true;
                var c = d(e, b, b.keyCode);
                return n = b.defaultPrevented, c
            });
            h(b, "keypress", function (b) {
                n && (b.ctrlKey ||
                    b.altKey || b.shiftKey || b.metaKey) && (c.stopEvent(b), n = null)
            });
            h(b, "keyup", function (b) {
                g[b.keyCode] = null
            });
            g || (g = Object.create(null), h(window, "focus", function () {
                g = Object.create(null)
            }))
        }
    };
    if (window.postMessage && !f.isOldIE) c.nextTick = function (b, d) {
        d = d || window;
        c.addListener(d, "message", function m(e) {
            e.data == "zero-timeout-message-1" && (c.stopPropagation(e), c.removeListener(d, "message", m), b())
        });
        d.postMessage("zero-timeout-message-1", "*")
    };
    c.nextFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    c.nextFrame ? c.nextFrame = c.nextFrame.bind(window) : c.nextFrame = function (b) {
        setTimeout(b, 17)
    }
});
ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function (b, c) {
    var d = b("./oop"),
        e = function () {
            var b = {
                MODIFIER_KEYS: {
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    224: "Meta"
                },
                KEY_MODS: {
                    ctrl: 1,
                    alt: 2,
                    option: 2,
                    shift: 4,
                    meta: 8,
                    command: 8,
                    cmd: 8
                },
                FUNCTION_KEYS: {
                    8: "Backspace",
                    9: "Tab",
                    13: "Return",
                    19: "Pause",
                    27: "Esc",
                    32: "Space",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    44: "Print",
                    45: "Insert",
                    46: "Delete",
                    96: "Numpad0",
                    97: "Numpad1",
                    98: "Numpad2",
                    99: "Numpad3",
                    100: "Numpad4",
                    101: "Numpad5",
                    102: "Numpad6",
                    103: "Numpad7",
                    104: "Numpad8",
                    105: "Numpad9",
                    "-13": "NumpadEnter",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "Numlock",
                    145: "Scrolllock"
                },
                PRINTABLE_KEYS: {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    61: "=",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    107: "+",
                    109: "-",
                    110: ".",
                    188: ",",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }
            },
                c;
            for (c in b.FUNCTION_KEYS) {
                var e = b.FUNCTION_KEYS[c].toLowerCase();
                b[e] = parseInt(c, 10)
            }
            return d.mixin(b, b.MODIFIER_KEYS), d.mixin(b, b.PRINTABLE_KEYS), d.mixin(b, b.FUNCTION_KEYS), b.enter = b["return"], b.escape = b.esc, b.del = b["delete"], b[173] = "-", b
        }();
    d.mixin(c, e);
    c.keyCodeToString = function (b) {
        return (e[b] || String.fromCharCode(b)).toLowerCase()
    }
});
ace.define("ace/lib/oop", ["require", "exports", "module"], function (b, c) {
    c.inherits = function (b, c) {
        b.super_ = c;
        b.prototype = Object.create(c.prototype, {
            constructor: {
                value: b,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    };
    c.mixin = function (b, c) {
        for (var f in c) b[f] = c[f];
        return b
    };
    c.implement = function (b, e) {
        c.mixin(b, e)
    }
});
ace.define("ace/lib/useragent", ["require", "exports", "module"], function (b, c) {
    c.OS = {
        LINUX: "LINUX",
        MAC: "MAC",
        WINDOWS: "WINDOWS"
    };
    c.getOS = function () {
        return c.isMac ? c.OS.MAC : c.isLinux ? c.OS.LINUX : c.OS.WINDOWS
    };
    if ("object" == typeof navigator) {
        var d = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
            e = navigator.userAgent;
        c.isWin = "win" == d;
        c.isMac = "mac" == d;
        c.isLinux = "linux" == d;
        c.isIE = ("Microsoft Internet Explorer" == navigator.appName || 0 <= navigator.appName.indexOf("MSAppHost")) && parseFloat(navigator.userAgent.match(/MSIE ([0-9]+[\.0-9]+)/)[1]);
        c.isOldIE = c.isIE && 9 > c.isIE;
        c.isGecko = c.isMozilla = window.controllers && "Gecko" === window.navigator.product;
        c.isOldGecko = c.isGecko && 4 > parseInt((navigator.userAgent.match(/rv\:(\d+)/) || [])[1], 10);
        c.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera);
        c.isWebKit = parseFloat(e.split("WebKit/")[1]) || void 0;
        c.isChrome = parseFloat(e.split(" Chrome/")[1]) || void 0;
        c.isAIR = 0 <= e.indexOf("AdobeAIR");
        c.isIPad = 0 <= e.indexOf("iPad");
        c.isTouchPad = 0 <= e.indexOf("TouchPad")
    }
});
ace.define("ace/editor", "require exports module ace/lib/fixoldbrowsers ace/lib/oop ace/lib/dom ace/lib/lang ace/lib/useragent ace/keyboard/textinput ace/mouse/mouse_handler ace/mouse/fold_handler ace/keyboard/keybinding ace/edit_session ace/search ace/range ace/lib/event_emitter ace/commands/command_manager ace/commands/default_commands ace/config".split(" "), function (b, c) {
    b("./lib/fixoldbrowsers");
    var d = b("./lib/oop"),
        e = b("./lib/dom"),
        f = b("./lib/lang"),
        g = b("./lib/useragent"),
        h = b("./keyboard/textinput").TextInput,
        j = b("./mouse/mouse_handler").MouseHandler,
        k = b("./mouse/fold_handler").FoldHandler,
        l = b("./keyboard/keybinding").KeyBinding,
        m = b("./edit_session").EditSession,
        n = b("./search").Search,
        q = b("./range").Range,
        p = b("./lib/event_emitter").EventEmitter,
        s = b("./commands/command_manager").CommandManager,
        r = b("./commands/default_commands").commands,
        o = b("./config"),
        t = function (b, c) {
            this.container = b.getContainerElement();
            this.renderer = b;
            this.commands = new s(g.isMac ? "mac" : "win", r);
            this.textInput = new h(b.getTextAreaContainer(),
                this);
            this.renderer.textarea = this.textInput.getElement();
            this.keyBinding = new l(this);
            this.$mouseHandler = new j(this);
            new k(this);
            this.$blockScrolling = 0;
            this.$search = (new n).set({
                wrap: true
            });
            this.$historyTracker = this.$historyTracker.bind(this);
            this.commands.on("exec", this.$historyTracker);
            this.$initOperationListeners();
            this._$emitInputEvent = f.delayedCall(function () {
                this._signal("input", {});
                this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
            }.bind(this));
            this.on("change", function (b, c) {
                c._$emitInputEvent.schedule(31)
            });
            this.setSession(c || new m(""));
            o.resetOptions(this);
            o._emit("editor", this)
        };
    (function () {
        d.implement(this, p);
        this.$initOperationListeners = function () {
            this.selections = [];
            this.commands.on("exec", function (b) {
                this.startOperation(b);
                if (b.command.aceCommandGroup == "fileJump") {
                    b = this.prevOp;
                    if (!b || b.command.aceCommandGroup != "fileJump") this.lastFileJumpPos = this.selections[this.selections.length - 1]
                } else this.lastFileJumpPos = null
            }.bind(this), true);
            this.commands.on("afterExec", function (b) {
                b.command.aceCommandGroup ==
                    "fileJump" && this.lastFileJumpPos && !this.curOp.selectionChanged && this.selection.fromJSON(this.lastFileJumpPos);
                this.endOperation(b)
            }.bind(this), true);
            this.$opResetTimer = f.delayedCall(this.endOperation.bind(this));
            this.on("change", function () {
                this.curOp || this.startOperation();
                this.curOp.docChanged = true
            }.bind(this), true);
            this.on("changeSelection", function () {
                this.curOp || this.startOperation();
                this.curOp.selectionChanged = true
            }.bind(this), true)
        };
        this.curOp = null;
        this.prevOp = {};
        this.startOperation = function (b) {
            if (this.curOp) {
                if (!b ||
                    this.curOp.command) return;
                this.prevOp = this.curOp
            }
            b || (this.previousCommand = null, b = {});
            this.$opResetTimer.schedule();
            this.curOp = {
                command: b.command || {},
                args: b.args,
                scrollTop: this.renderer.scrollTop
            };
            (b = this.curOp.command) && b.scrollIntoView && this.$blockScrolling++;
            this.selections.push(this.selection.toJSON())
        };
        this.endOperation = function () {
            if (this.curOp) {
                var b = this.curOp.command;
                if (b && b.scrollIntoView) {
                    this.$blockScrolling--;
                    switch (b.scrollIntoView) {
                        case "center":
                            this.renderer.scrollCursorIntoView(null,
                                0.5);
                            break;
                        case "animate":
                        case "cursor":
                            this.renderer.scrollCursorIntoView();
                            break;
                        case "selectionPart":
                            var c = this.selection.getRange(),
                                d = this.renderer.layerConfig;
                            (c.start.row >= d.lastRow || c.end.row <= d.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                    }
                    b.scrollIntoView == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop)
                }
                this.prevOp = this.curOp;
                this.curOp = null
            }
        };
        this.$historyTracker = function (b) {
            if (this.$mergeUndoDeltas) {
                var c = this.prevOp,
                    d = ["backspace",
                        "del", "insertstring"
                    ],
                    e = c.command && b.command.name == c.command.name;
                if (b.command.name == "insertstring") {
                    var f = b.args;
                    this.mergeNextCommand === void 0 && (this.mergeNextCommand = true);
                    e = e && this.mergeNextCommand && (!/\s/.test(f) || /\s/.test(c.args));
                    this.mergeNextCommand = true
                } else e = e && d.indexOf(b.command.name) !== -1;
                this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2E3 && (e = false);
                e ? this.session.mergeUndoDeltas = true : d.indexOf(b.command.name) !== -1 && (this.sequenceStartTime = Date.now())
            }
        };
        this.setKeyboardHandler =
            function (b) {
                if (b)
                    if (typeof b == "string") {
                        this.$keybindingId = b;
                        var c = this;
                        o.loadModule(["keybinding", b], function (d) {
                            c.$keybindingId == b && c.keyBinding.setKeyboardHandler(d && d.handler)
                        })
                    } else {
                        this.$keybindingId = null;
                        this.keyBinding.setKeyboardHandler(b)
                    }
                else this.keyBinding.setKeyboardHandler(null)
            };
        this.getKeyboardHandler = function () {
            return this.keyBinding.getKeyboardHandler()
        };
        this.setSession = function (b) {
            if (this.session != b) {
                if (this.session) {
                    var c = this.session;
                    this.session.removeEventListener("change",
                        this.$onDocumentChange);
                    this.session.removeEventListener("changeMode", this.$onChangeMode);
                    this.session.removeEventListener("tokenizerUpdate", this.$onTokenizerUpdate);
                    this.session.removeEventListener("changeTabSize", this.$onChangeTabSize);
                    this.session.removeEventListener("changeWrapLimit", this.$onChangeWrapLimit);
                    this.session.removeEventListener("changeWrapMode", this.$onChangeWrapMode);
                    this.session.removeEventListener("onChangeFold", this.$onChangeFold);
                    this.session.removeEventListener("changeFrontMarker",
                        this.$onChangeFrontMarker);
                    this.session.removeEventListener("changeBackMarker", this.$onChangeBackMarker);
                    this.session.removeEventListener("changeBreakpoint", this.$onChangeBreakpoint);
                    this.session.removeEventListener("changeAnnotation", this.$onChangeAnnotation);
                    this.session.removeEventListener("changeOverwrite", this.$onCursorChange);
                    this.session.removeEventListener("changeScrollTop", this.$onScrollTopChange);
                    this.session.removeEventListener("changeScrollLeft", this.$onScrollLeftChange);
                    var d = this.session.getSelection();
                    d.removeEventListener("changeCursor", this.$onCursorChange);
                    d.removeEventListener("changeSelection", this.$onSelectionChange)
                }
                this.session = b;
                this.$onDocumentChange = this.onDocumentChange.bind(this);
                b.addEventListener("change", this.$onDocumentChange);
                this.renderer.setSession(b);
                this.$onChangeMode = this.onChangeMode.bind(this);
                b.addEventListener("changeMode", this.$onChangeMode);
                this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this);
                b.addEventListener("tokenizerUpdate", this.$onTokenizerUpdate);
                this.$onChangeTabSize =
                    this.renderer.onChangeTabSize.bind(this.renderer);
                b.addEventListener("changeTabSize", this.$onChangeTabSize);
                this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this);
                b.addEventListener("changeWrapLimit", this.$onChangeWrapLimit);
                this.$onChangeWrapMode = this.onChangeWrapMode.bind(this);
                b.addEventListener("changeWrapMode", this.$onChangeWrapMode);
                this.$onChangeFold = this.onChangeFold.bind(this);
                b.addEventListener("changeFold", this.$onChangeFold);
                this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this);
                this.session.addEventListener("changeFrontMarker", this.$onChangeFrontMarker);
                this.$onChangeBackMarker = this.onChangeBackMarker.bind(this);
                this.session.addEventListener("changeBackMarker", this.$onChangeBackMarker);
                this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this);
                this.session.addEventListener("changeBreakpoint", this.$onChangeBreakpoint);
                this.$onChangeAnnotation = this.onChangeAnnotation.bind(this);
                this.session.addEventListener("changeAnnotation", this.$onChangeAnnotation);
                this.$onCursorChange =
                    this.onCursorChange.bind(this);
                this.session.addEventListener("changeOverwrite", this.$onCursorChange);
                this.$onScrollTopChange = this.onScrollTopChange.bind(this);
                this.session.addEventListener("changeScrollTop", this.$onScrollTopChange);
                this.$onScrollLeftChange = this.onScrollLeftChange.bind(this);
                this.session.addEventListener("changeScrollLeft", this.$onScrollLeftChange);
                this.selection = b.getSelection();
                this.selection.addEventListener("changeCursor", this.$onCursorChange);
                this.$onSelectionChange = this.onSelectionChange.bind(this);
                this.selection.addEventListener("changeSelection", this.$onSelectionChange);
                this.onChangeMode();
                this.$blockScrolling = this.$blockScrolling + 1;
                this.onCursorChange();
                this.$blockScrolling = this.$blockScrolling - 1;
                this.onScrollTopChange();
                this.onScrollLeftChange();
                this.onSelectionChange();
                this.onChangeFrontMarker();
                this.onChangeBackMarker();
                this.onChangeBreakpoint();
                this.onChangeAnnotation();
                this.session.getUseWrapMode() && this.renderer.adjustWrapLimit();
                this.renderer.updateFull();
                this._emit("changeSession", {
                    session: b,
                    oldSession: c
                })
            }
        };
        this.getSession = function () {
            return this.session
        };
        this.setValue = function (b, c) {
            return this.session.doc.setValue(b), c ? c == 1 ? this.navigateFileEnd() : c == -1 && this.navigateFileStart() : this.selectAll(), b
        };
        this.getValue = function () {
            return this.session.getValue()
        };
        this.getSelection = function () {
            return this.selection
        };
        this.resize = function (b) {
            this.renderer.onResize(b)
        };
        this.setTheme = function (b) {
            this.renderer.setTheme(b)
        };
        this.getTheme = function () {
            return this.renderer.getTheme()
        };
        this.setStyle =
            function (b) {
                this.renderer.setStyle(b)
            };
        this.unsetStyle = function (b) {
            this.renderer.unsetStyle(b)
        };
        this.getFontSize = function () {
            return this.getOption("fontSize") || e.computedStyle(this.container, "fontSize")
        };
        this.setFontSize = function (b) {
            this.setOption("fontSize", b)
        };
        this.$highlightBrackets = function () {
            this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null);
            if (!this.$highlightPending) {
                var b = this;
                this.$highlightPending = true;
                setTimeout(function () {
                    b.$highlightPending =
                        false;
                    var c = b.session.findMatchingBracket(b.getCursorPosition());
                    if (c) var d = new q(c.row, c.column, c.row, c.column + 1);
                    else b.session.$mode.getMatching && (d = b.session.$mode.getMatching(b.session));
                    d && (b.session.$bracketHighlight = b.session.addMarker(d, "ace_bracket", "text"))
                }, 50)
            }
        };
        this.focus = function () {
            var b = this;
            setTimeout(function () {
                b.textInput.focus()
            });
            this.textInput.focus()
        };
        this.isFocused = function () {
            return this.textInput.isFocused()
        };
        this.blur = function () {
            this.textInput.blur()
        };
        this.onFocus = function () {
            if (!this.$isFocused) {
                this.$isFocused =
                    true;
                this.renderer.showCursor();
                this.renderer.visualizeFocus();
                this._emit("focus")
            }
        };
        this.onBlur = function () {
            if (this.$isFocused) {
                this.$isFocused = false;
                this.renderer.hideCursor();
                this.renderer.visualizeBlur();
                this._emit("blur")
            }
        };
        this.$cursorChange = function () {
            this.renderer.updateCursor()
        };
        this.onDocumentChange = function (b) {
            var c = b.data,
                d = c.range,
                e;
            d.start.row == d.end.row && c.action != "insertLines" && c.action != "removeLines" ? e = d.end.row : e = Infinity;
            this.renderer.updateLines(d.start.row, e);
            this._emit("change",
                b);
            this.$cursorChange()
        };
        this.onTokenizerUpdate = function (b) {
            b = b.data;
            this.renderer.updateLines(b.first, b.last)
        };
        this.onScrollTopChange = function () {
            this.renderer.scrollToY(this.session.getScrollTop())
        };
        this.onScrollLeftChange = function () {
            this.renderer.scrollToX(this.session.getScrollLeft())
        };
        this.onCursorChange = function () {
            this.$cursorChange();
            this.$blockScrolling || this.renderer.scrollCursorIntoView();
            this.$highlightBrackets();
            this.$updateHighlightActiveLine();
            this._emit("changeSelection")
        };
        this.$updateHighlightActiveLine =
            function () {
                var b = this.getSession(),
                    c;
                if (this.$highlightActiveLine) {
                    if (this.$selectionStyle != "line" || !this.selection.isMultiLine()) c = this.getCursorPosition();
                    this.renderer.$maxLines && this.session.getLength() === 1 && (c = false)
                }
                if (b.$highlightLineMarker && !c) {
                    b.removeMarker(b.$highlightLineMarker.id);
                    b.$highlightLineMarker = null
                } else if (!b.$highlightLineMarker && c) {
                    c = new q(c.row, c.column, c.row, Infinity);
                    c.id = b.addMarker(c, "ace_active-line", "screenLine");
                    b.$highlightLineMarker = c
                } else c && (b.$highlightLineMarker.start.row =
                    c.row, b.$highlightLineMarker.end.row = c.row, b.$highlightLineMarker.start.column = c.column, b._emit("changeBackMarker"))
            };
        this.onSelectionChange = function () {
            var b = this.session;
            b.$selectionMarker && b.removeMarker(b.$selectionMarker);
            b.$selectionMarker = null;
            if (this.selection.isEmpty()) this.$updateHighlightActiveLine();
            else {
                var c = this.selection.getRange(),
                    d = this.getSelectionStyle();
                b.$selectionMarker = b.addMarker(c, "ace_selection", d)
            }
            this.session.highlight(this.$highlightSelectedWord && this.$getSelectionHighLightRegexp());
            this._emit("changeSelection")
        };
        this.$getSelectionHighLightRegexp = function () {
            var b = this.session,
                c = this.getSelectionRange();
            if (!c.isEmpty() && !c.isMultiLine()) {
                var d = c.start.column - 1,
                    e = c.end.column + 1,
                    b = b.getLine(c.start.row),
                    f = b.length,
                    g = b.substring(Math.max(d, 0), Math.min(e, f));
                if (!(d >= 0 && /^[\w\d]/.test(g) || e <= f && /[\w\d]$/.test(g))) {
                    g = b.substring(c.start.column, c.end.column);
                    if (/^[\w\d]+$/.test(g)) return this.$search.$assembleRegExp({
                        wholeWord: true,
                        caseSensitive: true,
                        needle: g
                    })
                }
            }
        };
        this.onChangeFrontMarker =
            function () {
                this.renderer.updateFrontMarkers()
            };
        this.onChangeBackMarker = function () {
            this.renderer.updateBackMarkers()
        };
        this.onChangeBreakpoint = function () {
            this.renderer.updateBreakpoints()
        };
        this.onChangeAnnotation = function () {
            this.renderer.setAnnotations(this.session.getAnnotations())
        };
        this.onChangeMode = function (b) {
            this.renderer.updateText();
            this._emit("changeMode", b)
        };
        this.onChangeWrapLimit = function () {
            this.renderer.updateFull()
        };
        this.onChangeWrapMode = function () {
            this.renderer.onResize(true)
        };
        this.onChangeFold =
            function () {
                this.$updateHighlightActiveLine();
                this.renderer.updateFull()
            };
        this.getSelectedText = function () {
            return this.session.getTextRange(this.getSelectionRange())
        };
        this.getCopyText = function () {
            var b = this.getSelectedText();
            return this._signal("copy", b), b
        };
        this.onCopy = function () {
            this.commands.exec("copy", this)
        };
        this.onCut = function () {
            this.commands.exec("cut", this)
        };
        this.onPaste = function (b) {
            if (!this.$readOnly) {
                this._emit("paste", b);
                this.insert(b)
            }
        };
        this.execCommand = function (b, c) {
            this.commands.exec(b,
                this, c)
        };
        this.insert = function (b) {
            var c = this.session,
                d = c.getMode(),
                e = this.getCursorPosition();
            if (this.getBehavioursEnabled()) {
                var f = d.transformAction(c.getState(e.row), "insertion", this, c, b);
                f && (b !== f.text && (this.session.mergeUndoDeltas = false, this.$mergeNextCommand = false), b = f.text)
            }
            b == "\t" && (b = this.session.getTabString());
            if (this.selection.isEmpty()) {
                if (this.session.getOverwrite()) {
                    g = new q.fromPoints(e, e);
                    g.end.column = g.end.column + b.length;
                    this.session.remove(g)
                }
            } else {
                var g = this.getSelectionRange(),
                    e = this.session.remove(g);
                this.clearSelection()
            }
            if (b == "\n" || b == "\r\n") {
                var h = c.getLine(e.row);
                if (e.column > h.search(/\S|$/)) {
                    g = h.substr(e.column).search(/\S|$/);
                    c.doc.removeInLine(e.row, e.column, e.column + g)
                }
            }
            this.clearSelection();
            var j = e.column,
                g = c.getState(e.row),
                h = c.getLine(e.row),
                k = d.checkOutdent(g, h, b);
            c.insert(e, b);
            f && f.selection && (f.selection.length == 2 ? this.selection.setSelectionRange(new q(e.row, j + f.selection[0], e.row, j + f.selection[1])) : this.selection.setSelectionRange(new q(e.row + f.selection[0],
                f.selection[1], e.row + f.selection[2], f.selection[3])));
            if (c.getDocument().isNewLine(b)) {
                b = d.getNextLineIndent(g, h.slice(0, e.column), c.getTabString());
                c.insert({
                    row: e.row + 1,
                    column: 0
                }, b)
            }
            k && d.autoOutdent(g, c, e.row)
        };
        this.onTextInput = function (b) {
            this.keyBinding.onTextInput(b)
        };
        this.onCommandKey = function (b, c, d) {
            this.keyBinding.onCommandKey(b, c, d)
        };
        this.setOverwrite = function (b) {
            this.session.setOverwrite(b)
        };
        this.getOverwrite = function () {
            return this.session.getOverwrite()
        };
        this.toggleOverwrite = function () {
            this.session.toggleOverwrite()
        };
        this.setScrollSpeed = function (b) {
            this.setOption("scrollSpeed", b)
        };
        this.getScrollSpeed = function () {
            return this.getOption("scrollSpeed")
        };
        this.setDragDelay = function (b) {
            this.setOption("dragDelay", b)
        };
        this.getDragDelay = function () {
            return this.getOption("dragDelay")
        };
        this.setSelectionStyle = function (b) {
            this.setOption("selectionStyle", b)
        };
        this.getSelectionStyle = function () {
            return this.getOption("selectionStyle")
        };
        this.setHighlightActiveLine = function (b) {
            this.setOption("highlightActiveLine", b)
        };
        this.getHighlightActiveLine =
            function () {
                return this.getOption("highlightActiveLine")
            };
        this.setHighlightGutterLine = function (b) {
            this.setOption("highlightGutterLine", b)
        };
        this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine")
        };
        this.setHighlightSelectedWord = function (b) {
            this.setOption("highlightSelectedWord", b)
        };
        this.getHighlightSelectedWord = function () {
            return this.$highlightSelectedWord
        };
        this.setAnimatedScroll = function (b) {
            this.renderer.setAnimatedScroll(b)
        };
        this.getAnimatedScroll = function () {
            return this.renderer.getAnimatedScroll()
        };
        this.setShowInvisibles = function (b) {
            this.renderer.setShowInvisibles(b)
        };
        this.getShowInvisibles = function () {
            return this.renderer.getShowInvisibles()
        };
        this.setDisplayIndentGuides = function (b) {
            this.renderer.setDisplayIndentGuides(b)
        };
        this.getDisplayIndentGuides = function () {
            return this.renderer.getDisplayIndentGuides()
        };
        this.setShowPrintMargin = function (b) {
            this.renderer.setShowPrintMargin(b)
        };
        this.getShowPrintMargin = function () {
            return this.renderer.getShowPrintMargin()
        };
        this.setPrintMarginColumn = function (b) {
            this.renderer.setPrintMarginColumn(b)
        };
        this.getPrintMarginColumn = function () {
            return this.renderer.getPrintMarginColumn()
        };
        this.setReadOnly = function (b) {
            this.setOption("readOnly", b)
        };
        this.getReadOnly = function () {
            return this.getOption("readOnly")
        };
        this.setBehavioursEnabled = function (b) {
            this.setOption("behavioursEnabled", b)
        };
        this.getBehavioursEnabled = function () {
            return this.getOption("behavioursEnabled")
        };
        this.setWrapBehavioursEnabled = function (b) {
            this.setOption("wrapBehavioursEnabled", b)
        };
        this.getWrapBehavioursEnabled = function () {
            return this.getOption("wrapBehavioursEnabled")
        };
        this.setShowFoldWidgets = function (b) {
            this.setOption("showFoldWidgets", b)
        };
        this.getShowFoldWidgets = function () {
            return this.getOption("showFoldWidgets")
        };
        this.setFadeFoldWidgets = function (b) {
            this.setOption("fadeFoldWidgets", b)
        };
        this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets")
        };
        this.remove = function (b) {
            this.selection.isEmpty() && (b == "left" ? this.selection.selectLeft() : this.selection.selectRight());
            b = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
                var c = this.session,
                    d = c.getState(b.start.row),
                    d = c.getMode().transformAction(d, "deletion", this, c, b);
                if (b.end.column === 0) {
                    var e = c.getTextRange(b);
                    if (e[e.length - 1] == "\n") {
                        c = c.getLine(b.end.row);
                        /^\s+$/.test(c) && (b.end.column = c.length)
                    }
                }
                d && (b = d)
            }
            this.session.remove(b);
            this.clearSelection()
        };
        this.removeWordRight = function () {
            this.selection.isEmpty() && this.selection.selectWordRight();
            this.session.remove(this.getSelectionRange());
            this.clearSelection()
        };
        this.removeWordLeft = function () {
            this.selection.isEmpty() && this.selection.selectWordLeft();
            this.session.remove(this.getSelectionRange());
            this.clearSelection()
        };
        this.removeToLineStart = function () {
            this.selection.isEmpty() && this.selection.selectLineStart();
            this.session.remove(this.getSelectionRange());
            this.clearSelection()
        };
        this.removeToLineEnd = function () {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var b = this.getSelectionRange();
            b.start.column == b.end.column && b.start.row == b.end.row && (b.end.column = 0, b.end.row++);
            this.session.remove(b);
            this.clearSelection()
        };
        this.splitLine = function () {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()),
                this.clearSelection());
            var b = this.getCursorPosition();
            this.insert("\n");
            this.moveCursorToPosition(b)
        };
        this.transposeLetters = function () {
            if (this.selection.isEmpty()) {
                var b = this.getCursorPosition(),
                    c = b.column;
                if (c !== 0) {
                    var d = this.session.getLine(b.row),
                        e, f;
                    c < d.length ? (e = d.charAt(c) + d.charAt(c - 1), f = new q(b.row, c - 1, b.row, c + 1)) : (e = d.charAt(c - 1) + d.charAt(c - 2), f = new q(b.row, c - 2, b.row, c));
                    this.session.replace(f, e)
                }
            }
        };
        this.toLowerCase = function () {
            var b = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var c = this.getSelectionRange(),
                d = this.session.getTextRange(c);
            this.session.replace(c, d.toLowerCase());
            this.selection.setSelectionRange(b)
        };
        this.toUpperCase = function () {
            var b = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var c = this.getSelectionRange(),
                d = this.session.getTextRange(c);
            this.session.replace(c, d.toUpperCase());
            this.selection.setSelectionRange(b)
        };
        this.indent = function () {
            var b = this.session,
                c = this.getSelectionRange();
            if (c.start.row < c.end.row) {
                c = this.$getSelectedRows();
                b.indentRows(c.first, c.last, "\t")
            } else if (c.start.column < c.end.column && !/^\s+$/.test(b.getTextRange(c))) {
                c = this.$getSelectedRows();
                b.indentRows(c.first, c.last, "\t")
            } else {
                var d = b.getLine(c.start.row),
                    e = c.start,
                    g = b.getTabSize(),
                    b = b.documentToScreenColumn(e.row, e.column);
                if (this.session.getUseSoftTabs()) c = f.stringRepeat(" ", g - b % g);
                else {
                    for (b = b % g; d[c.start.column] == " " && b;) {
                        c.start.column--;
                        b--
                    }
                    this.selection.setSelectionRange(c);
                    c = "\t"
                }
                return this.insert(c)
            }
        };
        this.blockIndent = function () {
            var b = this.$getSelectedRows();
            this.session.indentRows(b.first, b.last, "\t")
        };
        this.blockOutdent = function () {
            this.session.outdentRows(this.session.getSelection().getRange())
        };
        this.sortLines = function () {
            for (var b = this.$getSelectedRows(), c = this.session, d = [], e = b.first; e <= b.last; e++) d.push(c.getLine(e));
            d.sort(function (b, c) {
                return b.toLowerCase() < c.toLowerCase() ? -1 : b.toLowerCase() > c.toLowerCase() ? 1 : 0
            });
            for (var f = new q(0, 0, 0, 0), e = b.first; e <= b.last; e++) {
                var g = c.getLine(e);
                f.start.row = e;
                f.end.row = e;
                f.end.column = g.length;
                c.replace(f, d[e - b.first])
            }
        };
        this.toggleCommentLines = function () {
            var b = this.session.getState(this.getCursorPosition().row),
                c = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(b, this.session, c.first, c.last)
        };
        this.toggleBlockComment = function () {
            var b = this.getCursorPosition(),
                c = this.session.getState(b.row),
                d = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(c, this.session, d, b)
        };
        this.getNumberAt = function (b, c) {
            var d = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            d.lastIndex = 0;
            for (var e = this.session.getLine(b) ; d.lastIndex <
                c;) {
                var f = d.exec(e);
                if (f.index <= c && f.index + f[0].length >= c) return {
                    value: f[0],
                    start: f.index,
                    end: f.index + f[0].length
                }
            }
            return null
        };
        this.modifyNumber = function (b) {
            var c = this.selection.getCursor().row,
                d = this.selection.getCursor().column,
                e = this.session.getTextRange(new q(c, d - 1, c, d));
            if (!isNaN(parseFloat(e)) && isFinite(e))
                if (e = this.getNumberAt(c, d)) {
                    var f = e.value.indexOf(".") >= 0 ? e.start + e.value.indexOf(".") + 1 : e.end,
                        g = e.start + e.value.length - f,
                        h = parseFloat(e.value),
                        h = h * Math.pow(10, g);
                    f !== e.end && d < f ? b = b * Math.pow(10,
                        e.end - d - 1) : b = b * Math.pow(10, e.end - d);
                    h = (h + b) / Math.pow(10, g);
                    b = h.toFixed(g);
                    this.session.replace(new q(c, e.start, c, e.end), b);
                    this.moveCursorTo(c, Math.max(e.start + 1, d + b.length - e.value.length))
                }
        };
        this.removeLines = function () {
            var b = this.$getSelectedRows(),
                c;
            b.first === 0 || b.last + 1 < this.session.getLength() ? c = new q(b.first, 0, b.last + 1, 0) : c = new q(b.first - 1, this.session.getLine(b.first - 1).length, b.last, this.session.getLine(b.last).length);
            this.session.remove(c);
            this.clearSelection()
        };
        this.duplicateSelection = function () {
            var b =
                this.selection,
                c = this.session,
                d = b.getRange(),
                e = b.isBackwards();
            if (d.isEmpty()) {
                b = d.start.row;
                c.duplicateLines(b, b)
            } else {
                var f = e ? d.start : d.end,
                    c = c.insert(f, c.getTextRange(d), false);
                d.start = f;
                d.end = c;
                b.setSelectionRange(d, e)
            }
        };
        this.moveLinesDown = function () {
            this.$moveLines(function (b, c) {
                return this.session.moveLinesDown(b, c)
            })
        };
        this.moveLinesUp = function () {
            this.$moveLines(function (b, c) {
                return this.session.moveLinesUp(b, c)
            })
        };
        this.moveText = function (b, c, d) {
            return this.session.moveText(b, c, d)
        };
        this.copyLinesUp =
            function () {
                this.$moveLines(function (b, c) {
                    return this.session.duplicateLines(b, c), 0
                })
            };
        this.copyLinesDown = function () {
            this.$moveLines(function (b, c) {
                return this.session.duplicateLines(b, c)
            })
        };
        this.$moveLines = function (b) {
            var c = this.selection;
            if (!c.inMultiSelectMode || this.inVirtualSelectionMode) {
                var d = c.toOrientedRange(),
                    e = this.$getSelectedRows(d),
                    e = b.call(this, e.first, e.last);
                d.moveBy(e, 0);
                c.fromOrientedRange(d)
            } else {
                d = c.rangeList.ranges;
                c.rangeList.detach(this.session);
                for (var f = d.length; f--;) {
                    for (var g =
                            f, e = d[f].collapseRows(), h = e.end.row, j = e.start.row; f--;) {
                        e = d[f].collapseRows();
                        if (!(j - e.end.row <= 1)) break;
                        j = e.end.row
                    }
                    f++;
                    for (e = b.call(this, j, h) ; g >= f;) {
                        d[g].moveBy(e, 0);
                        g--
                    }
                }
                c.fromOrientedRange(c.ranges[0]);
                c.rangeList.attach(this.session)
            }
        };
        this.$getSelectedRows = function () {
            var b = this.getSelectionRange().collapseRows();
            return {
                first: this.session.getRowFoldStart(b.start.row),
                last: this.session.getRowFoldEnd(b.end.row)
            }
        };
        this.onCompositionStart = function () {
            this.renderer.showComposition(this.getCursorPosition())
        };
        this.onCompositionUpdate = function (b) {
            this.renderer.setCompositionText(b)
        };
        this.onCompositionEnd = function () {
            this.renderer.hideComposition()
        };
        this.getFirstVisibleRow = function () {
            return this.renderer.getFirstVisibleRow()
        };
        this.getLastVisibleRow = function () {
            return this.renderer.getLastVisibleRow()
        };
        this.isRowVisible = function (b) {
            return b >= this.getFirstVisibleRow() && b <= this.getLastVisibleRow()
        };
        this.isRowFullyVisible = function (b) {
            return b >= this.renderer.getFirstFullyVisibleRow() && b <= this.renderer.getLastFullyVisibleRow()
        };
        this.$getVisibleRowCount = function () {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
        };
        this.$moveByPage = function (b, c) {
            var d = this.renderer,
                e = this.renderer.layerConfig,
                f = b * Math.floor(e.height / e.lineHeight);
            this.$blockScrolling++;
            c === true ? this.selection.$moveSelection(function () {
                this.moveCursorBy(f, 0)
            }) : c === false && (this.selection.moveCursorBy(f, 0), this.selection.clearSelection());
            this.$blockScrolling--;
            var g = d.scrollTop;
            d.scrollBy(0, f * e.lineHeight);
            c != null && d.scrollCursorIntoView(null,
                0.5);
            d.animateScrolling(g)
        };
        this.selectPageDown = function () {
            this.$moveByPage(1, true)
        };
        this.selectPageUp = function () {
            this.$moveByPage(-1, true)
        };
        this.gotoPageDown = function () {
            this.$moveByPage(1, false)
        };
        this.gotoPageUp = function () {
            this.$moveByPage(-1, false)
        };
        this.scrollPageDown = function () {
            this.$moveByPage(1)
        };
        this.scrollPageUp = function () {
            this.$moveByPage(-1)
        };
        this.scrollToRow = function (b) {
            this.renderer.scrollToRow(b)
        };
        this.scrollToLine = function (b, c, d, e) {
            this.renderer.scrollToLine(b, c, d, e)
        };
        this.centerSelection =
            function () {
                var b = this.getSelectionRange();
                this.renderer.alignCursor({
                    row: Math.floor(b.start.row + (b.end.row - b.start.row) / 2),
                    column: Math.floor(b.start.column + (b.end.column - b.start.column) / 2)
                }, 0.5)
            };
        this.getCursorPosition = function () {
            return this.selection.getCursor()
        };
        this.getCursorPositionScreen = function () {
            return this.session.documentToScreenPosition(this.getCursorPosition())
        };
        this.getSelectionRange = function () {
            return this.selection.getRange()
        };
        this.selectAll = function () {
            this.$blockScrolling = this.$blockScrolling +
                1;
            this.selection.selectAll();
            this.$blockScrolling = this.$blockScrolling - 1
        };
        this.clearSelection = function () {
            this.selection.clearSelection()
        };
        this.moveCursorTo = function (b, c) {
            this.selection.moveCursorTo(b, c)
        };
        this.moveCursorToPosition = function (b) {
            this.selection.moveCursorToPosition(b)
        };
        this.jumpToMatching = function (b) {
            var c = this.getCursorPosition(),
                d = this.session.getBracketRange(c);
            if (!d) {
                d = this.find({
                    needle: /[{}()\[\]]/g,
                    preventScroll: true,
                    start: {
                        row: c.row,
                        column: c.column - 1
                    }
                });
                if (!d) return;
                var e = d.start;
                e.row == c.row && Math.abs(e.column - c.column) < 2 && (d = this.session.getBracketRange(e))
            } (e = d && d.cursor || e) && (b ? d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(e.row, e.column) : (this.clearSelection(), this.moveCursorTo(e.row, e.column)))
        };
        this.gotoLine = function (b, c, d) {
            this.selection.clearSelection();
            this.session.unfold({
                row: b - 1,
                column: c || 0
            });
            this.$blockScrolling = this.$blockScrolling + 1;
            this.exitMultiSelectMode && this.exitMultiSelectMode();
            this.moveCursorTo(b - 1, c || 0);
            this.$blockScrolling =
                this.$blockScrolling - 1;
            this.isRowFullyVisible(b - 1) || this.scrollToLine(b - 1, true, d)
        };
        this.navigateTo = function (b, c) {
            this.clearSelection();
            this.moveCursorTo(b, c)
        };
        this.navigateUp = function (b) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) return this.moveCursorToPosition(this.selection.anchor.getPosition());
            this.selection.clearSelection();
            this.selection.moveCursorBy(-(b || 1), 0)
        };
        this.navigateDown = function (b) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) return this.moveCursorToPosition(this.selection.anchor.getPosition());
            this.selection.clearSelection();
            this.selection.moveCursorBy(b || 1, 0)
        };
        this.navigateLeft = function (b) {
            if (this.selection.isEmpty())
                for (b = b || 1; b--;) this.selection.moveCursorLeft();
            else this.moveCursorToPosition(this.getSelectionRange().start);
            this.clearSelection()
        };
        this.navigateRight = function (b) {
            if (this.selection.isEmpty())
                for (b = b || 1; b--;) this.selection.moveCursorRight();
            else this.moveCursorToPosition(this.getSelectionRange().end);
            this.clearSelection()
        };
        this.navigateLineStart = function () {
            this.selection.moveCursorLineStart();
            this.clearSelection()
        };
        this.navigateLineEnd = function () {
            this.selection.moveCursorLineEnd();
            this.clearSelection()
        };
        this.navigateFileEnd = function () {
            this.selection.moveCursorFileEnd();
            this.clearSelection()
        };
        this.navigateFileStart = function () {
            this.selection.moveCursorFileStart();
            this.clearSelection()
        };
        this.navigateWordRight = function () {
            this.selection.moveCursorWordRight();
            this.clearSelection()
        };
        this.navigateWordLeft = function () {
            this.selection.moveCursorWordLeft();
            this.clearSelection()
        };
        this.replace = function (b,
            c) {
            c && this.$search.set(c);
            var d = this.$search.find(this.session),
                e = 0;
            return d ? (this.$tryReplace(d, b) && (e = 1), d !== null && (this.selection.setSelectionRange(d), this.renderer.scrollSelectionIntoView(d.start, d.end)), e) : e
        };
        this.replaceAll = function (b, c) {
            c && this.$search.set(c);
            var d = this.$search.findAll(this.session),
                e = 0;
            if (!d.length) return e;
            this.$blockScrolling = this.$blockScrolling + 1;
            var f = this.getSelectionRange();
            this.clearSelection();
            this.selection.moveCursorTo(0, 0);
            for (var g = d.length - 1; g >= 0; --g) this.$tryReplace(d[g],
                b) && e++;
            return this.selection.setSelectionRange(f), this.$blockScrolling = this.$blockScrolling - 1, e
        };
        this.$tryReplace = function (b, c) {
            return c = this.$search.replace(this.session.getTextRange(b), c), c !== null ? (b.end = this.session.replace(b, c), b) : null
        };
        this.getLastSearchOptions = function () {
            return this.$search.getOptions()
        };
        this.find = function (b, c, e) {
            c || (c = {});
            typeof b == "string" || b instanceof RegExp ? c.needle = b : typeof b == "object" && d.mixin(c, b);
            var f = this.selection.getRange();
            c.needle == null && (b = this.session.getTextRange(f) ||
                this.$search.$options.needle, b || (f = this.session.getWordRange(f.start.row, f.start.column), b = this.session.getTextRange(f)), this.$search.set({
                    needle: b
                }));
            this.$search.set(c);
            c.start || this.$search.set({
                start: f
            });
            b = this.$search.find(this.session);
            if (c.preventScroll) return b;
            if (b) return this.revealRange(b, e), b;
            c.backwards ? f.start = f.end : f.end = f.start;
            this.selection.setRange(f)
        };
        this.findNext = function (b, c) {
            this.find({
                skipCurrent: true,
                backwards: false
            }, b, c)
        };
        this.findPrevious = function (b, c) {
            this.find(b, {
                skipCurrent: true,
                backwards: true
            }, c)
        };
        this.revealRange = function (b, c) {
            this.$blockScrolling = this.$blockScrolling + 1;
            this.session.unfold(b);
            this.selection.setSelectionRange(b);
            this.$blockScrolling = this.$blockScrolling - 1;
            var d = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(b.start, b.end, 0.5);
            c !== false && this.renderer.animateScrolling(d)
        };
        this.undo = function () {
            this.$blockScrolling++;
            this.session.getUndoManager().undo();
            this.$blockScrolling--;
            this.renderer.scrollCursorIntoView(null, 0.5)
        };
        this.redo = function () {
            this.$blockScrolling++;
            this.session.getUndoManager().redo();
            this.$blockScrolling--;
            this.renderer.scrollCursorIntoView(null, 0.5)
        };
        this.destroy = function () {
            this.renderer.destroy();
            this._emit("destroy", this)
        };
        this.setAutoScrollEditorIntoView = function (b) {
            if (b !== false) {
                var c, d = this,
                    e = false;
                this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                var f = this.$scrollAnchor;
                f.style.cssText = "position:absolute";
                this.container.insertBefore(f, this.container.firstChild);
                var g = this.on("changeSelection", function () {
                    e = true
                }),
                    h = this.renderer.on("beforeRender", function () {
                        e && (c = d.renderer.container.getBoundingClientRect())
                    }),
                    j = this.renderer.on("afterRender", function () {
                        if (e && c && d.isFocused()) {
                            var b = d.renderer,
                                g = b.$cursorLayer.$pixelPos,
                                b = b.layerConfig,
                                h = g.top - b.offset;
                            g.top >= 0 && h + c.top < 0 ? e = true : g.top < b.height && g.top + c.top + b.lineHeight > window.innerHeight ? e = false : e = null;
                            e != null && (f.style.top = h + "px", f.style.left = g.left + "px", f.style.height = b.lineHeight + "px", f.scrollIntoView(e));
                            e = c = null
                        }
                    });
                this.setAutoScrollEditorIntoView = function (b) {
                    if (b !==
                        true) {
                        delete this.setAutoScrollEditorIntoView;
                        this.removeEventListener("changeSelection", g);
                        this.renderer.removeEventListener("afterRender", j);
                        this.renderer.removeEventListener("beforeRender", h)
                    }
                }
            }
        };
        this.$resetCursorStyle = function () {
            var b = this.$cursorStyle || "ace",
                c = this.renderer.$cursorLayer;
            if (c) {
                c.setSmoothBlinking(b == "smooth");
                c.isBlinking = !this.$readOnly && b != "wide"
            }
        }
    }).call(t.prototype);
    o.defineOptions(t.prototype, "editor", {
        selectionStyle: {
            set: function (b) {
                this.onSelectionChange();
                this._emit("changeSelectionStyle", {
                    data: b
                })
            },
            initialValue: "line"
        },
        highlightActiveLine: {
            set: function () {
                this.$updateHighlightActiveLine()
            },
            initialValue: true
        },
        highlightSelectedWord: {
            set: function () {
                this.$onSelectionChange()
            },
            initialValue: true
        },
        readOnly: {
            set: function (b) {
                this.textInput.setReadOnly(b);
                this.$resetCursorStyle()
            },
            initialValue: false
        },
        cursorStyle: {
            set: function () {
                this.$resetCursorStyle()
            },
            values: ["ace", "slim", "smooth", "wide"],
            initialValue: "ace"
        },
        mergeUndoDeltas: {
            values: [false, true, "always"],
            initialValue: true
        },
        behavioursEnabled: {
            initialValue: true
        },
        wrapBehavioursEnabled: {
            initialValue: true
        },
        hScrollBarAlwaysVisible: "renderer",
        vScrollBarAlwaysVisible: "renderer",
        highlightGutterLine: "renderer",
        animatedScroll: "renderer",
        showInvisibles: "renderer",
        showPrintMargin: "renderer",
        printMarginColumn: "renderer",
        printMargin: "renderer",
        fadeFoldWidgets: "renderer",
        showFoldWidgets: "renderer",
        showGutter: "renderer",
        displayIndentGuides: "renderer",
        fontSize: "renderer",
        fontFamily: "renderer",
        maxLines: "renderer",
        minLines: "renderer",
        scrollPastEnd: "renderer",
        fixedWidthGutter: "renderer",
        theme: "renderer",
        scrollSpeed: "$mouseHandler",
        dragDelay: "$mouseHandler",
        dragEnabled: "$mouseHandler",
        focusTimout: "$mouseHandler",
        firstLineNumber: "session",
        overwrite: "session",
        newLineMode: "session",
        useWorker: "session",
        useSoftTabs: "session",
        tabSize: "session",
        wrap: "session",
        foldStyle: "session",
        mode: "session"
    });
    c.Editor = t
});
ace.define("ace/lib/lang", ["require", "exports", "module"], function (b, c) {
    c.stringReverse = function (b) {
        return b.split("").reverse().join("")
    };
    c.stringRepeat = function (b, c) {
        for (var d = ""; 0 < c;)
            if (c & 1 && (d += b), c >>= 1) b += b;
        return d
    };
    var d = /^\s\s*/,
        e = /\s\s*$/;
    c.stringTrimLeft = function (b) {
        return b.replace(d, "")
    };
    c.stringTrimRight = function (b) {
        return b.replace(e, "")
    };
    c.copyObject = function (b) {
        var c = {},
            d;
        for (d in b) c[d] = b[d];
        return c
    };
    c.copyArray = function (b) {
        for (var c = [], d = 0, e = b.length; d < e; d++) b[d] && "object" == typeof b[d] ?
            c[d] = this.copyObject(b[d]) : c[d] = b[d];
        return c
    };
    c.deepCopy = function (b) {
        if ("object" != typeof b || !b) return b;
        var d = b.constructor;
        if (d === RegExp) return b;
        var d = d(),
            e;
        for (e in b) "object" == typeof b[e] ? d[e] = c.deepCopy(b[e]) : d[e] = b[e];
        return d
    };
    c.arrayToMap = function (b) {
        for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = 1;
        return c
    };
    c.createMap = function (b) {
        var c = Object.create(null),
            d;
        for (d in b) c[d] = b[d];
        return c
    };
    c.arrayRemove = function (b, c) {
        for (var d = 0; d <= b.length; d++) c === b[d] && b.splice(d, 1)
    };
    c.escapeRegExp = function (b) {
        return b.replace(/([.*+?^${}()|[\]\/\\])/g,
            "\\$1")
    };
    c.escapeHTML = function (b) {
        return b.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
    };
    c.getMatchOffsets = function (b, c) {
        var d = [];
        return b.replace(c, function (b) {
            d.push({
                offset: arguments[arguments.length - 2],
                length: b.length
            })
        }), d
    };
    c.deferredCall = function (b) {
        var c = null,
            d = function () {
                c = null;
                b()
            },
            e = function (b) {
                return e.cancel(), c = setTimeout(d, b || 0), e
            };
        return e.schedule = e, e.call = function () {
            return this.cancel(), b(), e
        }, e.cancel = function () {
            return clearTimeout(c), c =
                null, e
        }, e.isPending = function () {
            return c
        }, e
    };
    c.delayedCall = function (b, c) {
        var d = null,
            e = function () {
                d = null;
                b()
            },
            k = function (b) {
                null == d && (d = setTimeout(e, b || c))
            };
        return k.delay = function (b) {
            d && clearTimeout(d);
            d = setTimeout(e, b || c)
        }, k.schedule = k, k.call = function () {
            this.cancel();
            b()
        }, k.cancel = function () {
            d && clearTimeout(d);
            d = null
        }, k.isPending = function () {
            return d
        }, k
    }
});
ace.define("ace/keyboard/textinput", "require exports module ace/lib/event ace/lib/useragent ace/lib/dom ace/lib/lang".split(" "), function (b, c) {
    var d = b("../lib/event"),
        e = b("../lib/useragent"),
        f = b("../lib/dom"),
        g = b("../lib/lang"),
        h = e.isChrome < 18;
    c.TextInput = function (b, c) {
        function l(b) {
            if (!t) {
                if (F) {
                    c = 0;
                    b = b ? 0 : q.value.length - 1
                } else var c = b ? 2 : 1,
                    b = 2;
                try {
                    q.setSelectionRange(c, b)
                } catch (d) { }
            }
        }

        function m() {
            if (!t) {
                q.value = p;
                e.isWebKit && G.schedule()
            }
        }

        function n() {
            setTimeout(function () {
                u && (q.style.cssText = u, u =
                    "");
                c.renderer.$keepTextAreaAtCursor == null && (c.renderer.$keepTextAreaAtCursor = true, c.renderer.$moveTextAreaToCursor())
            }, 0)
        }
        var q = f.createElement("textarea");
        q.className = "ace_text-input";
        e.isTouchPad && q.setAttribute("x-palm-disable-auto-cap", true);
        q.wrap = "off";
        q.autocorrect = "off";
        q.autocapitalize = "off";
        q.spellcheck = false;
        q.style.opacity = "0";
        b.insertBefore(q, b.firstChild);
        var p = "\u0001\u0001",
            s = false,
            r = false,
            o = false,
            t = false,
            u = "",
            w = true;
        try {
            var z = document.activeElement === q
        } catch (A) { }
        d.addListener(q,
            "blur",
            function () {
                c.onBlur();
                z = false
            });
        d.addListener(q, "focus", function () {
            z = true;
            c.onFocus();
            l()
        });
        this.focus = function () {
            q.focus()
        };
        this.blur = function () {
            q.blur()
        };
        this.isFocused = function () {
            return z
        };
        var C = g.delayedCall(function () {
            z && l(w)
        }),
            G = g.delayedCall(function () {
                t || (q.value = p, z && l())
            });
        e.isWebKit || c.addEventListener("changeSelection", function () {
            c.selection.isEmpty() != w && (w = !w, C.schedule())
        });
        m();
        z && c.onFocus();
        var H = function (b) {
            return b.selectionStart === 0 && b.selectionEnd === b.value.length
        };
        !q.setSelectionRange &&
            q.createTextRange && (q.setSelectionRange = function (b, c) {
                var d = this.createTextRange();
                d.collapse(true);
                d.moveStart("character", b);
                d.moveEnd("character", c);
                d.select()
            }, H = function (b) {
                try {
                    var c = b.ownerDocument.selection.createRange()
                } catch (d) { }
                return !c || c.parentElement() != b ? false : c.text == b.value
            });
        if (e.isOldIE) {
            var K = false,
                P = function (b) {
                    if (!K) {
                        var c = q.value;
                        if (!t && c && c != p) {
                            if (b && c == p[0]) return T.schedule();
                            J(c);
                            K = true;
                            m();
                            K = false
                        }
                    }
                },
                T = g.delayedCall(P);
            d.addListener(q, "propertychange", P);
            var D = {
                13: 1,
                27: 1
            };
            d.addListener(q, "keyup", function (b) {
                t && (!q.value || D[b.keyCode]) && setTimeout(Z, 0);
                if ((q.value.charCodeAt(0) || 0) < 129) return T.call();
                t ? E() : B()
            });
            d.addListener(q, "keydown", function () {
                T.schedule(50)
            })
        }
        var F = null;
        this.setInputHandler = function (b) {
            F = b
        };
        this.getInputHandler = function () {
            return F
        };
        var I = false,
            J = function (b) {
                F && (b = F(b), F = null);
                o ? (l(), b && c.onPaste(b), o = false) : b == p.charAt(0) ? I ? c.execCommand("del", {
                    source: "ace"
                }) : c.execCommand("backspace", {
                    source: "ace"
                }) : (b.substring(0, 2) == p ? b = b.substr(2) : b.charAt(0) ==
                    p.charAt(0) ? b = b.substr(1) : b.charAt(b.length - 1) == p.charAt(0) && (b = b.slice(0, -1)), b.charAt(b.length - 1) == p.charAt(0) && (b = b.slice(0, -1)), b && c.onTextInput(b));
                I && (I = false)
            },
            N = function (b) {
                var e = c.getCopyText();
                if (e) {
                    var f = b.clipboardData || window.clipboardData;
                    if (f && !h) {
                        var g = f.setData("Text", e);
                        g && (c.onCut(), d.preventDefault(b))
                    }
                    g || (s = true, q.value = e, q.select(), setTimeout(function () {
                        s = false;
                        m();
                        l();
                        c.onCut()
                    }))
                } else d.preventDefault(b)
            },
            U = function (b) {
                var e = c.getCopyText();
                if (e) {
                    var f = b.clipboardData || window.clipboardData;
                    if (f && !h) {
                        var g = f.setData("Text", e);
                        g && (c.onCopy(), d.preventDefault(b))
                    }
                    g || (r = true, q.value = e, q.select(), setTimeout(function () {
                        r = false;
                        m();
                        l();
                        c.onCopy()
                    }))
                } else d.preventDefault(b)
            },
            Q = function (b) {
                var f = b.clipboardData || window.clipboardData;
                if (f) {
                    (f = f.getData("Text")) && c.onPaste(f);
                    e.isIE && setTimeout(l);
                    d.preventDefault(b)
                } else {
                    q.value = "";
                    o = true
                }
            };
        d.addCommandKeyListener(q, c.onCommandKey.bind(c));
        d.addListener(q, "select", function () {
            s ? s = false : r ? r = false : H(q) ? (c.selectAll(), l()) : F && l(c.selection.isEmpty())
        });
        d.addListener(q, "input", function () {
            if (!t) {
                J(q.value);
                m()
            }
        });
        d.addListener(q, "cut", N);
        d.addListener(q, "copy", U);
        d.addListener(q, "paste", Q);
        (!("oncut" in q) || !("oncopy" in q) || !("onpaste" in q)) && d.addListener(b, "keydown", function (b) {
            if ((!e.isMac || b.metaKey) && b.ctrlKey) switch (b.keyCode) {
                case 67:
                    U(b);
                    break;
                case 86:
                    Q(b);
                    break;
                case 88:
                    N(b)
            }
        });
        var B = function () {
            if (!t) {
                t = {};
                c.onCompositionStart();
                setTimeout(E, 0);
                c.on("mousedown", Z);
                c.selection.isEmpty() || (c.insert(""), c.session.markUndoGroup(), c.selection.clearSelection());
                c.session.markUndoGroup()
            }
        },
            E = function () {
                if (t) {
                    var b = q.value.replace(/\x01/g, "");
                    if (t.lastValue !== b) {
                        c.onCompositionUpdate(b);
                        t.lastValue && c.undo();
                        t.lastValue = b;
                        if (t.lastValue) {
                            b = c.selection.getRange();
                            c.insert(t.lastValue);
                            c.session.markUndoGroup();
                            t.range = c.selection.getRange();
                            c.selection.setRange(b);
                            c.selection.clearSelection()
                        }
                    }
                }
            },
            Z = function (b) {
                var d = t;
                t = false;
                var e = setTimeout(function () {
                    e = null;
                    var b = q.value.replace(/\x01/g, "");
                    t || (b == d.lastValue ? m() : !d.lastValue && b && (m(), J(b)))
                });
                F = function (b) {
                    return e &&
                        clearTimeout(e), b = b.replace(/\x01/g, ""), b == d.lastValue ? "" : (d.lastValue && e && c.undo(), b)
                };
                c.onCompositionEnd();
                c.removeListener("mousedown", Z);
                b.type == "compositionend" && d.range && c.selection.setRange(d.range)
            },
            O = g.delayedCall(E, 50);
        d.addListener(q, "compositionstart", B);
        e.isGecko ? d.addListener(q, "text", function () {
            O.schedule()
        }) : (d.addListener(q, "keyup", function () {
            O.schedule()
        }), d.addListener(q, "keydown", function () {
            O.schedule()
        }));
        d.addListener(q, "compositionend", Z);
        this.getElement = function () {
            return q
        };
        this.setReadOnly = function (b) {
            q.readOnly = b
        };
        this.onContextMenu = function (b) {
            I = true;
            u || (u = q.style.cssText);
            q.style.cssText = "z-index:100000;" + (e.isIE ? "opacity:0.1;" : "");
            l(c.selection.isEmpty());
            c._emit("nativecontextmenu", {
                target: c,
                domEvent: b
            });
            var g = c.container.getBoundingClientRect(),
                h = f.computedStyle(c.container),
                j = g.top + (parseInt(h.borderTopWidth) || 0),
                o = g.left + (parseInt(g.borderLeftWidth) || 0),
                m = g.bottom - j - q.clientHeight,
                g = function (b) {
                    q.style.left = b.clientX - o - 2 + "px";
                    q.style.top = Math.min(b.clientY -
                        j - 2, m) + "px"
                };
            g(b);
            if (b.type == "mousedown") {
                c.renderer.$keepTextAreaAtCursor && (c.renderer.$keepTextAreaAtCursor = null);
                e.isWin && d.capture(c.container, g, n)
            }
        };
        this.onContextMenuClose = n;
        if (!e.isGecko || e.isMac) {
            P = function (b) {
                c.textInput.onContextMenu(b);
                n()
            };
            d.addListener(c.renderer.scroller, "contextmenu", P);
            d.addListener(q, "contextmenu", P)
        }
    }
});
ace.define("ace/mouse/mouse_handler", "require exports module ace/lib/event ace/lib/useragent ace/mouse/default_handlers ace/mouse/default_gutter_handler ace/mouse/mouse_event ace/mouse/dragdrop_handler ace/config".split(" "), function (b, c) {
    var d = b("../lib/event"),
        e = b("../lib/useragent"),
        f = b("./default_handlers").DefaultHandlers,
        g = b("./default_gutter_handler").GutterHandler,
        h = b("./mouse_event").MouseEvent,
        j = b("./dragdrop_handler").DragdropHandler,
        k = b("../config"),
        l = function (b) {
            this.editor = b;
            new f(this);
            new g(this);
            new j(this);
            var c = b.renderer.getMouseEventTarget();
            d.addListener(c, "click", this.onMouseEvent.bind(this, "click"));
            d.addListener(c, "mousemove", this.onMouseMove.bind(this, "mousemove"));
            d.addMultiMouseDownListener(c, [300, 300, 250], this, "onMouseEvent");
            b.renderer.scrollBarV && (d.addMultiMouseDownListener(b.renderer.scrollBarV.inner, [300, 300, 250], this, "onMouseEvent"), d.addMultiMouseDownListener(b.renderer.scrollBarH.inner, [300, 300, 250], this, "onMouseEvent"));
            d.addMouseWheelListener(b.container,
                this.onMouseWheel.bind(this, "mousewheel"));
            var e = b.renderer.$gutter;
            d.addListener(e, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"));
            d.addListener(e, "click", this.onMouseEvent.bind(this, "gutterclick"));
            d.addListener(e, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"));
            d.addListener(e, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"));
            d.addListener(c, "mousedown", function () {
                b.focus()
            });
            d.addListener(e, "mousedown", function (c) {
                return b.focus(), d.preventDefault(c)
            })
        };
    (function () {
        this.onMouseEvent =
            function (b, c) {
                this.editor._emit(b, new h(c, this.editor))
            };
        this.onMouseMove = function (b, c) {
            var d = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            d && d.length && this.editor._emit(b, new h(c, this.editor))
        };
        this.onMouseWheel = function (b, c) {
            var d = new h(c, this.editor);
            d.speed = this.$scrollSpeed * 2;
            d.wheelX = c.wheelX;
            d.wheelY = c.wheelY;
            this.editor._emit(b, d)
        };
        this.setState = function (b) {
            this.state = b
        };
        this.captureMouse = function (b, c) {
            this.x = b.x;
            this.y = b.y;
            this.isMousePressed = true;
            var f = this.editor.renderer;
            f.$keepTextAreaAtCursor && (f.$keepTextAreaAtCursor = null);
            var g = this,
                j = function (b) {
                    g.x = b.clientX;
                    g.y = b.clientY;
                    c && c(b);
                    g.mouseEvent = new h(b, g.editor);
                    g.$mouseMoved = true
                },
                k = function (b) {
                    clearInterval(t);
                    l();
                    g[g.state + "End"] && g[g.state + "End"](b);
                    g.$clickSelection = null;
                    f.$keepTextAreaAtCursor == null && (f.$keepTextAreaAtCursor = true, f.$moveTextAreaToCursor());
                    g.isMousePressed = false;
                    g.$onCaptureMouseMove = g.releaseMouse = null;
                    g.onMouseEvent("mouseup", b)
                },
                l = function () {
                    g[g.state] && g[g.state]();
                    g.$mouseMoved = false
                };
            if (e.isOldIE && b.domEvent.type == "dblclick") return setTimeout(function () {
                k(b)
            });
            g.$onCaptureMouseMove = j;
            g.releaseMouse = d.capture(this.editor.container, j, k);
            var t = setInterval(l, 20)
        };
        this.releaseMouse = null
    }).call(l.prototype);
    k.defineOptions(l.prototype, "mouseHandler", {
        scrollSpeed: {
            initialValue: 2
        },
        dragDelay: {
            initialValue: 150
        },
        dragEnabled: {
            initialValue: true
        },
        focusTimout: {
            initialValue: 0
        }
    });
    c.MouseHandler = l
});
ace.define("ace/mouse/default_handlers", "require exports module ace/lib/dom ace/lib/event ace/lib/useragent".split(" "), function (b, c) {
    function d(b) {
        b.$clickSelection = null;
        var c = b.editor;
        c.setDefaultHandler("mousedown", this.onMouseDown.bind(b));
        c.setDefaultHandler("dblclick", this.onDoubleClick.bind(b));
        c.setDefaultHandler("tripleclick", this.onTripleClick.bind(b));
        c.setDefaultHandler("quadclick", this.onQuadClick.bind(b));
        c.setDefaultHandler("mousewheel", this.onMouseWheel.bind(b));
        ["select", "startSelect",
            "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"
        ].forEach(function (c) {
            b[c] = this[c]
        }, this);
        b.selectByLines = this.extendSelectionBy.bind(b, "getLineRange");
        b.selectByWords = this.extendSelectionBy.bind(b, "getWordRange")
    }

    function e(b, c) {
        return (b.start.row == b.end.row ? 2 * c.column - b.start.column - b.end.column : b.start.row == b.end.row - 1 && !b.start.column && !b.end.column ? c.column - 4 : 2 * c.row - b.start.row - b.end.row) < 0 ? {
            cursor: b.start,
            anchor: b.end
        } : {
            cursor: b.end,
            anchor: b.start
        }
    }
    b("../lib/dom");
    b("../lib/event");
    b("../lib/useragent");
    (function () {
        this.onMouseDown = function (b) {
            var c = b.inSelection(),
                d = b.getDocumentPosition();
            this.mousedownEvent = b;
            var e = this.editor;
            if (b.getButton() !== 0) {
                e.getSelectionRange().isEmpty() && (e.moveCursorToPosition(d), e.selection.clearSelection());
                e.textInput.onContextMenu(b.domEvent)
            } else {
                if (c && !e.isFocused()) {
                    e.focus();
                    if (this.$focusTimout && !this.$clickSelection && !e.inMultiSelectMode) {
                        this.mousedownEvent.time = Date.now();
                        this.setState("focusWait");
                        this.captureMouse(b);
                        return
                    }
                }
                return !c || this.$clickSelection || b.getShiftKey() || e.inMultiSelectMode ? this.startSelect(d) : c && (this.mousedownEvent.time = Date.now(), this.startSelect(d)), this.captureMouse(b), b.preventDefault()
            }
        };
        this.startSelect = function (b) {
            var b = b || this.editor.renderer.screenToTextCoordinates(this.x, this.y),
                c = this.editor;
            this.mousedownEvent.getShiftKey() ? c.selection.selectToPosition(b) : this.$clickSelection || (c.moveCursorToPosition(b), c.selection.clearSelection());
            c.renderer.scroller.setCapture &&
                c.renderer.scroller.setCapture();
            c.setStyle("ace_selecting");
            this.setState("select")
        };
        this.select = function () {
            var b, c = this.editor,
                d = c.renderer.screenToTextCoordinates(this.x, this.y);
            if (this.$clickSelection) {
                b = this.$clickSelection.comparePoint(d);
                if (b == -1) b = this.$clickSelection.end;
                else if (b == 1) b = this.$clickSelection.start;
                else {
                    b = e(this.$clickSelection, d);
                    d = b.cursor;
                    b = b.anchor
                }
                c.selection.setSelectionAnchor(b.row, b.column)
            }
            c.selection.selectToPosition(d);
            c.renderer.scrollCursorIntoView()
        };
        this.extendSelectionBy =
            function (b) {
                var c, d = this.editor,
                    j = d.renderer.screenToTextCoordinates(this.x, this.y),
                    b = d.selection[b](j.row, j.column);
                if (this.$clickSelection) {
                    c = this.$clickSelection.comparePoint(b.start);
                    var k = this.$clickSelection.comparePoint(b.end);
                    if (c == -1 && k <= 0) {
                        c = this.$clickSelection.end;
                        if (b.end.row != j.row || b.end.column != j.column) j = b.start
                    } else if (k == 1 && c >= 0) {
                        c = this.$clickSelection.start;
                        if (b.start.row != j.row || b.start.column != j.column) j = b.end
                    } else if (c == -1 && k == 1) {
                        j = b.end;
                        c = b.start
                    } else {
                        b = e(this.$clickSelection,
                            j);
                        j = b.cursor;
                        c = b.anchor
                    }
                    d.selection.setSelectionAnchor(c.row, c.column)
                }
                d.selection.selectToPosition(j);
                d.renderer.scrollCursorIntoView()
            };
        this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
            this.editor.unsetStyle("ace_selecting");
            this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
        };
        this.focusWait = function () {
            var b = Math.sqrt(Math.pow(this.x - this.mousedownEvent.x, 2) + Math.pow(this.y - this.mousedownEvent.y, 2)),
                c = Date.now();
            (b >
                0 || c - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
        };
        this.onDoubleClick = function (b) {
            var c = b.getDocumentPosition(),
                d = this.editor,
                e = d.session.getBracketRange(c);
            e ? (e.isEmpty() && (e.start.column--, e.end.column++), this.setState("select")) : (e = d.selection.getWordRange(c.row, c.column), this.setState("selectByWords"));
            this.$clickSelection = e;
            this[this.state] && this[this.state](b)
        };
        this.onTripleClick = function (b) {
            var c = b.getDocumentPosition(),
                d = this.editor;
            this.setState("selectByLines");
            this.$clickSelection = d.selection.getLineRange(c.row);
            this[this.state] && this[this.state](b)
        };
        this.onQuadClick = function () {
            var b = this.editor;
            b.selectAll();
            this.$clickSelection = b.getSelectionRange();
            this.setState("selectAll")
        };
        this.onMouseWheel = function (b) {
            if (!b.getShiftKey() && !b.getAccelKey()) {
                var c = b.domEvent.timeStamp,
                    d = c - (this.$lastScrollTime || 0),
                    e = this.editor;
                if (e.renderer.isScrollableBy(b.wheelX * b.speed, b.wheelY * b.speed) || d < 200) return this.$lastScrollTime = c, e.renderer.scrollBy(b.wheelX *
                    b.speed, b.wheelY * b.speed), b.stop()
            }
        }
    }).call(d.prototype);
    c.DefaultHandlers = d
});
ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event"], function (b, c) {
    var d = b("../lib/dom"),
        e = b("../lib/event");
    c.GutterHandler = function (b) {
        function c() {
            l && (l = clearTimeout(l));
            q && (n.style.display = "none", q = null, j.removeEventListener("mousewheel", c))
        }

        function h(b) {
            var c = j.renderer.$gutter.getBoundingClientRect();
            n.style.left = b.x + 15 + "px";
            b.y + 3 * j.renderer.lineHeight + 15 < c.bottom ? (n.style.bottom = "", n.style.top = b.y + 15 + "px") : (n.style.top = "", n.style.bottom =
                (window.innerHeight || document.documentElement.clientHeight) - b.y + 5 + "px")
        }
        var j = b.editor,
            k = j.renderer.$gutterLayer;
        b.editor.setDefaultHandler("guttermousedown", function (c) {
            if (j.isFocused() && 0 == c.getButton() && "foldWidgets" != k.getRegion(c)) {
                var d = c.getDocumentPosition().row,
                    e = j.session.selection;
                if (c.getShiftKey()) e.selectTo(d, 0);
                else {
                    if (2 == c.domEvent.detail) return j.selectAll(), c.preventDefault();
                    b.$clickSelection = j.selection.getLineRange(d)
                }
                return b.setState("selectByLines"), b.captureMouse(c), c.preventDefault()
            }
        });
        var l, m, n, q;
        b.editor.setDefaultHandler("guttermousemove", function (e) {
            if (d.hasCssClass(e.domEvent.target || e.domEvent.srcElement, "ace_fold-widget")) return c();
            q && h(e);
            m = e;
            l || (l = setTimeout(function () {
                l = null;
                if (m && !b.isMousePressed) a: {
                    n || (n = d.createElement("div"), n.className = "ace_gutter-tooltip", n.style.display = "none", j.container.appendChild(n));
                    var e = m.getDocumentPosition().row,
                        p = k.$annotations[e];
                    if (p) {
                        var o = j.session.getLength();
                        if (e == o && (e = j.renderer.pixelToScreenCoordinates(0, m.y).row, o = m.$pos, e >
                                j.session.documentToScreenRow(o.row, o.column))) {
                            c();
                            break a
                        }
                        q != p && (q = p.text.join("<br/>"), n.style.display = "block", n.innerHTML = q, j.on("mousewheel", c), h(m))
                    } else c()
                }
                else c()
            }, 50))
        });
        e.addListener(j.renderer.$gutter, "mouseout", function () {
            m = null;
            q && !l && (l = setTimeout(function () {
                l = null;
                c()
            }, 50))
        });
        j.on("changeSession", c)
    }
});
ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (b, c) {
    var d = b("../lib/event"),
        e = b("../lib/useragent");
    (function () {
        this.stopPropagation = function () {
            d.stopPropagation(this.domEvent);
            this.propagationStopped = !0
        };
        this.preventDefault = function () {
            d.preventDefault(this.domEvent);
            this.defaultPrevented = !0
        };
        this.stop = function () {
            this.stopPropagation();
            this.preventDefault()
        };
        this.getDocumentPosition = function () {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX,
                this.clientY), this.$pos)
        };
        this.inSelection = function () {
            if (null !== this.$inSelection) return this.$inSelection;
            var b = this.editor.getSelectionRange();
            if (b.isEmpty()) this.$inSelection = !1;
            else {
                var c = this.getDocumentPosition();
                this.$inSelection = b.contains(c.row, c.column)
            }
            return this.$inSelection
        };
        this.getButton = function () {
            return d.getButton(this.domEvent)
        };
        this.getShiftKey = function () {
            return this.domEvent.shiftKey
        };
        this.getAccelKey = e.isMac ? function () {
            return this.domEvent.metaKey
        } : function () {
            return this.domEvent.ctrlKey
        }
    }).call((c.MouseEvent =
        function (b, c) {
            this.domEvent = b;
            this.editor = c;
            this.x = this.clientX = b.clientX;
            this.y = this.clientY = b.clientY;
            this.$inSelection = this.$pos = null;
            this.defaultPrevented = this.propagationStopped = !1
        }).prototype)
});
ace.define("ace/mouse/dragdrop_handler", "require exports module ace/lib/dom ace/lib/event ace/lib/useragent".split(" "), function (b, c) {
    function d(b) {
        var c, d;

        function q() {
            var b = P,
                e = P = u.renderer.screenToTextCoordinates(C, G),
                f = Date.now(),
                g = !b || e.row != b.row,
                l = !b || e.column != b.column;
            if (!J || g || l) {
                u.$blockScrolling = u.$blockScrolling + 1;
                u.moveCursorToPosition(e);
                u.$blockScrolling = u.$blockScrolling - 1;
                J = f;
                c = C;
                d = G
            } else Math.sqrt(Math.pow(C - c, 2) + Math.pow(G - d, 2)) > k ? J = null : f - J >= j && (u.renderer.scrollCursorIntoView(),
                J = null);
            var e = P,
                f = Date.now(),
                l = u.renderer.layerConfig.lineHeight,
                o = u.renderer.layerConfig.characterWidth,
                g = u.renderer.scroller.getBoundingClientRect(),
                s = C - g.left,
                p = g.right - C,
                t = G - g.top,
                q = g.bottom - G,
                r = Math.min(s, p),
                w = Math.min(t, q),
                g = {
                    row: e.row,
                    column: e.column
                };
            r / o <= 2 && (g.column = g.column + (s < p ? -3 : 2));
            w / l <= 1 && (g.row = g.row + (t < q ? -1 : 1));
            l = e.column != g.column;
            b = !b || e.row != b.row;
            e.row != g.row || l && !b ? I ? f - I >= h && u.renderer.scrollCursorIntoView(g) : I = f : I = null
        }

        function p() {
            K = u.selection.toOrientedRange();
            A = u.session.addMarker(K,
                "ace_selection", u.getSelectionStyle());
            u.clearSelection();
            u.isFocused() && u.renderer.$cursorLayer.setBlinking(false);
            clearInterval(H);
            H = setInterval(q, 20);
            T = 0;
            f.addListener(document, "mousemove", r)
        }

        function s() {
            clearInterval(H);
            u.session.removeMarker(A);
            A = null;
            u.$blockScrolling = u.$blockScrolling + 1;
            u.selection.fromOrientedRange(K);
            u.$blockScrolling = u.$blockScrolling - 1;
            u.isFocused() && !F && u.renderer.$cursorLayer.setBlinking(!u.getReadOnly());
            K = null;
            T = 0;
            J = I = null;
            f.removeListener(document, "mousemove", r)
        }

        function r() {
            N == null && (N = setTimeout(function () {
                N != null && A && s()
            }, 20))
        }

        function o(b) {
            b = b.types;
            return !b || Array.prototype.some.call(b, function (b) {
                return b == "text/plain" || b == "Text"
            })
        }

        function t(b) {
            var c = ["copy", "copymove", "all", "uninitialized"],
                d = ["move", "copymove", "linkmove", "all", "uninitialized"],
                e = g.isMac ? b.altKey : b.ctrlKey,
                f = "uninitialized";
            try {
                f = b.dataTransfer.effectAllowed.toLowerCase()
            } catch (h) { }
            return e && c.indexOf(f) >= 0 || d.indexOf(f) >= 0 || c.indexOf(f), "none"
        }
        var u = b.editor,
            w = e.createElement("img");
        w.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        g.isOpera && (w.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
        ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"].forEach(function (c) {
            b[c] = this[c]
        }, this);
        u.addEventListener("mousedown", this.onMouseDown.bind(b));
        var z = u.container,
            A, C, G, H, K, P, T = 0,
            D, F, I, J;
        this.onDragStart = function (b) {
            if (this.cancelDrag || !z.draggable) {
                var c = this;
                return setTimeout(function () {
                    c.startSelect();
                    c.captureMouse(b)
                }, 0), b.preventDefault()
            }
            K = u.getSelectionRange();
            var d = b.dataTransfer;
            d.effectAllowed = u.getReadOnly() ? "copy" : "copyMove";
            g.isOpera && (u.container.appendChild(w), w._top = w.offsetTop);
            d.setDragImage && d.setDragImage(w, 0, 0);
            g.isOpera && u.container.removeChild(w);
            d.clearData();
            d.setData("Text", u.session.getTextRange());
            F = true;
            this.setState("drag")
        };
        this.onDragEnd = function (b) {
            F = z.draggable = false;
            this.setState(null);
            if (!u.getReadOnly()) {
                b = b.dataTransfer.dropEffect;
                !D && b == "move" && u.session.remove(u.getSelectionRange());
                u.renderer.$cursorLayer.setBlinking(true)
            }
            this.editor.unsetStyle("ace_dragging")
        };
        this.onDragEnter = function (b) {
            if (!u.getReadOnly() && o(b.dataTransfer)) return A || p(), T++, b.dataTransfer.dropEffect = D = t(b), f.preventDefault(b)
        };
        this.onDragOver = function (b) {
            if (!u.getReadOnly() && o(b.dataTransfer)) return A || (p(), T++), N !== null && (N = null), C = b.clientX, G = b.clientY, b.dataTransfer.dropEffect = D = t(b), f.preventDefault(b)
        };
        this.onDragLeave = function (b) {
            T--;
            if (T <= 0 && A) return s(), D = null, f.preventDefault(b)
        };
        this.onDrop =
            function (b) {
                if (A) {
                    var c = b.dataTransfer;
                    if (F) switch (D) {
                        case "move":
                            K.contains(P.row, P.column) ? K = {
                                start: P,
                                end: P
                            } : K = u.moveText(K, P);
                            break;
                        case "copy":
                            K = u.moveText(K, P, true)
                    } else {
                        c = c.getData("Text");
                        K = {
                            start: P,
                            end: u.session.insert(P, c)
                        };
                        u.focus();
                        D = null
                    }
                    return s(), f.preventDefault(b)
                }
            };
        f.addListener(z, "dragstart", this.onDragStart.bind(b));
        f.addListener(z, "dragend", this.onDragEnd.bind(b));
        f.addListener(z, "dragenter", this.onDragEnter.bind(b));
        f.addListener(z, "dragover", this.onDragOver.bind(b));
        f.addListener(z,
            "dragleave", this.onDragLeave.bind(b));
        f.addListener(z, "drop", this.onDrop.bind(b));
        var N = null
    }
    var e = b("../lib/dom"),
        f = b("../lib/event"),
        g = b("../lib/useragent"),
        h = 200,
        j = 200,
        k = 5;
    (function () {
        this.dragWait = function () {
            Date.now() - this.mousedownEvent.time > this.editor.getDragDelay() && this.startDrag()
        };
        this.dragWaitEnd = function () {
            this.editor.container.draggable = false;
            this.startSelect(this.mousedownEvent.getDocumentPosition());
            this.selectEnd()
        };
        this.dragReadyEnd = function () {
            this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly());
            this.editor.unsetStyle("ace_dragging");
            this.dragWaitEnd()
        };
        this.startDrag = function () {
            this.cancelDrag = false;
            this.editor.container.draggable = true;
            this.editor.renderer.$cursorLayer.setBlinking(false);
            this.editor.setStyle("ace_dragging");
            this.setState("dragReady")
        };
        this.onMouseDrag = function () {
            var b = this.editor.container;
            if (g.isIE && this.state == "dragReady") {
                var c = Math.sqrt(Math.pow(this.x - this.mousedownEvent.x, 2) + Math.pow(this.y - this.mousedownEvent.y, 2));
                c > 3 && b.dragDrop()
            }
            if (this.state === "dragWait") {
                c =
                    Math.sqrt(Math.pow(this.x - this.mousedownEvent.x, 2) + Math.pow(this.y - this.mousedownEvent.y, 2));
                c > 0 && (b.draggable = false, this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }
        };
        this.onMouseDown = function (b) {
            if (this.$dragEnabled) {
                this.mousedownEvent = b;
                var c = this.editor,
                    d = b.inSelection(),
                    e = b.getButton();
                if ((b.domEvent.detail || 1) === 1 && e === 0 && d)
                    if (!b.editor.inMultiSelectMode || !b.getAccelKey() && !b.getShiftKey()) {
                        this.mousedownEvent.time = Date.now();
                        d = b.domEvent.target || b.domEvent.srcElement;
                        "unselectable" in
                        d && (d.unselectable = "on");
                        if (c.getDragDelay()) {
                            if (g.isWebKit) {
                                this.cancelDrag = true;
                                c.container.draggable = true
                            }
                            this.setState("dragWait")
                        } else this.startDrag();
                        this.captureMouse(b, this.onMouseDrag.bind(this));
                        b.defaultPrevented = true
                    }
            }
        }
    }).call(d.prototype);
    c.DragdropHandler = d
});
ace.define("ace/config", "require exports module ace/lib/lang ace/lib/oop ace/lib/net ace/lib/event_emitter".split(" "), function (b, c, d) {
    function e(b) {
        return b.replace(/-(.)/g, function (b, c) {
            return c.toUpperCase()
        })
    }
    "no use strict";
    var f = b("./lib/lang"),
        g = b("./lib/oop"),
        h = b("./lib/net"),
        j = b("./lib/event_emitter").EventEmitter,
        k = function () {
            return this
        }(),
        l = {
            packaged: false,
            workerPath: null,
            modePath: null,
            themePath: null,
            basePath: "",
            suffix: ".js",
            $moduleUrls: {}
        };
    c.get = function (b) {
        if (!l.hasOwnProperty(b)) throw Error("Unknown config key: " +
            b);
        return l[b]
    };
    c.set = function (b, c) {
        if (!l.hasOwnProperty(b)) throw Error("Unknown config key: " + b);
        l[b] = c
    };
    c.all = function () {
        return f.copyObject(l)
    };
    g.implement(c, j);
    c.moduleUrl = function (b, c) {
        if (l.$moduleUrls[b]) return l.$moduleUrls[b];
        var d = b.split("/"),
            c = c || d[d.length - 2] || "",
            e = c == "snippets" ? "/" : "-",
            f = d[d.length - 1];
        e == "-" && (f = f.replace(RegExp("^" + c + "[\\-_]|[\\-_]" + c + "$", "g"), ""));
        (!f || f == c) && d.length > 1 && (f = d[d.length - 2]);
        d = l[c + "Path"];
        return d == null ? d = l.basePath : e == "/" && (c = e = ""), d && d.slice(-1) != "/" &&
            (d = d + "/"), d + c + e + f + this.get("suffix")
    };
    c.setModuleUrl = function (b, c) {
        return l.$moduleUrls[b] = c
    };
    c.$loading = {};
    c.loadModule = function (d, e) {
        var f, g;
        Array.isArray(d) && (g = d[0], d = d[1]);
        try {
            f = b(d)
        } catch (j) { }
        if (f && !c.$loading[d]) return e && e(f);
        c.$loading[d] || (c.$loading[d] = []);
        c.$loading[d].push(e);
        if (!(c.$loading[d].length > 1)) {
            f = function () {
                b([d], function (b) {
                    c._emit("load.module", {
                        name: d,
                        module: b
                    });
                    var e = c.$loading[d];
                    c.$loading[d] = null;
                    e.forEach(function (c) {
                        c && c(b)
                    })
                })
            };
            if (!c.get("packaged")) return f();
            h.loadScript(c.moduleUrl(d,
                g), f)
        }
    };
    c.init = function () {
        l.packaged = b.packaged || d.packaged || k.define && define.packaged;
        if (!k.document) return "";
        for (var f = {}, g = "", h = document.getElementsByTagName("script"), j = 0; j < h.length; j++) {
            var o = h[j],
                m = o.src || o.getAttribute("src");
            if (m) {
                for (var o = o.attributes, n = 0, w = o.length; n < w; n++) {
                    var z = o[n];
                    z.name.indexOf("data-ace-") === 0 && (f[e(z.name.replace(/^data-ace-/, ""))] = z.value)
                } (m = m.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/)) && (g = m[1])
            }
        }
        g && (f.base = f.base || g, f.packaged = true);
        f.basePath = f.base;
        f.workerPath =
            f.workerPath || f.base;
        f.modePath = f.modePath || f.base;
        f.themePath = f.themePath || f.base;
        delete f.base;
        for (var A in f) typeof f[A] != "undefined" && c.set(A, f[A])
    };
    var m = {
        setOptions: function (b) {
            Object.keys(b).forEach(function (c) {
                this.setOption(c, b[c])
            }, this)
        },
        getOptions: function (b) {
            var c = {};
            return b ? Array.isArray(b) || (c = b, b = Object.keys(c)) : b = Object.keys(this.$options), b.forEach(function (b) {
                c[b] = this.getOption(b)
            }, this), c
        },
        setOption: function (b, c) {
            if (this["$" + b] !== c) {
                var d = this.$options[b];
                if (!d) return typeof console !=
                    "undefined" && console.warn && console.warn('misspelled option "' + b + '"'), void 0;
                if (d.forwardTo) return this[d.forwardTo] && this[d.forwardTo].setOption(b, c);
                d.handlesSet || (this["$" + b] = c);
                d && d.set && d.set.call(this, c)
            }
        },
        getOption: function (b) {
            var c = this.$options[b];
            return c ? c.forwardTo ? this[c.forwardTo] && this[c.forwardTo].getOption(b) : c && c.get ? c.get.call(this) : this["$" + b] : (typeof console != "undefined" && console.warn && console.warn('misspelled option "' + b + '"'), void 0)
        }
    },
        n = {};
    c.defineOptions = function (b, c, d) {
        return b.$options ||
            (n[c] = b.$options = {}), Object.keys(d).forEach(function (c) {
                var e = d[c];
                typeof e == "string" && (e = {
                    forwardTo: e
                });
                e.name || (e.name = c);
                b.$options[e.name] = e;
                "initialValue" in e && (b["$" + e.name] = e.initialValue)
            }), g.implement(b, m), this
    };
    c.resetOptions = function (b) {
        Object.keys(b.$options).forEach(function (c) {
            var d = b.$options[c];
            "value" in d && b.setOption(c, d.value)
        })
    };
    c.setDefaultValue = function (b, d, e) {
        b = n[b] || (n[b] = {});
        b[d] && (b.forwardTo ? c.setDefaultValue(b.forwardTo, d, e) : b[d].value = e)
    };
    c.setDefaultValues = function (b,
        d) {
        Object.keys(d).forEach(function (e) {
            c.setDefaultValue(b, e, d[e])
        })
    }
});
ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function (b, c) {
    var d = b("./dom");
    c.get = function (b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", b, !0);
        d.onreadystatechange = function () {
            4 === d.readyState && c(d.responseText)
        };
        d.send(null)
    };
    c.loadScript = function (b, c) {
        var g = d.getDocumentHead(),
            h = document.createElement("script");
        h.src = b;
        g.appendChild(h);
        h.onload = h.onreadystatechange = function (b, d) {
            if (d || !h.readyState || "loaded" == h.readyState || "complete" == h.readyState) h = h.onload = h.onreadystatechange =
                null, d || c()
        }
    }
});
ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function (b, c) {
    var d = {},
        e = function () {
            this.propagationStopped = !0
        },
        f = function () {
            this.defaultPrevented = !0
        };
    d._emit = d._dispatchEvent = function (b, c) {
        this._eventRegistry || (this._eventRegistry = {});
        this._defaultHandlers || (this._defaultHandlers = {});
        var d = this._eventRegistry[b] || [],
            k = this._defaultHandlers[b];
        if (d.length || k) {
            if ("object" != typeof c || !c) c = {};
            c.type || (c.type = b);
            c.stopPropagation || (c.stopPropagation = e);
            c.preventDefault || (c.preventDefault =
                f);
            for (var d = d.slice(), l = 0; l < d.length && !(d[l](c, this), c.propagationStopped) ; l++);
            if (k && !c.defaultPrevented) return k(c, this)
        }
    };
    d._signal = function (b, c) {
        var d = (this._eventRegistry || {})[b];
        if (d)
            for (var d = d.slice(), e = 0; e < d.length; e++) d[e](c, this)
    };
    d.once = function (b, c) {
        var d = this;
        c && this.addEventListener(b, function l() {
            d.removeEventListener(b, l);
            c.apply(null, arguments)
        })
    };
    d.setDefaultHandler = function (b, c) {
        var d = this._defaultHandlers;
        d || (d = this._defaultHandlers = {
            _disabled_: {}
        });
        if (d[b]) {
            var e = d[b],
                f = d._disabled_[b];
            f || (d._disabled_[b] = f = []);
            f.push(e);
            e = f.indexOf(c); -1 != e && f.splice(e, 1)
        }
        d[b] = c
    };
    d.removeDefaultHandler = function (b, c) {
        var d = this._defaultHandlers;
        if (d) {
            var e = d._disabled_[b];
            d[b] == c ? e && this.setDefaultHandler(b, e.pop()) : e && (d = e.indexOf(c), -1 != d && e.splice(d, 1))
        }
    };
    d.on = d.addEventListener = function (b, c, d) {
        this._eventRegistry = this._eventRegistry || {};
        var e = this._eventRegistry[b];
        return e || (e = this._eventRegistry[b] = []), -1 == e.indexOf(c) && e[d ? "unshift" : "push"](c), c
    };
    d.off = d.removeListener = d.removeEventListener =
        function (b, c) {
            this._eventRegistry = this._eventRegistry || {};
            var d = this._eventRegistry[b];
            if (d) {
                var e = d.indexOf(c); -1 !== e && d.splice(e, 1)
            }
        };
    d.removeAllListeners = function (b) {
        this._eventRegistry && (this._eventRegistry[b] = [])
    };
    c.EventEmitter = d
});
ace.define("ace/mouse/fold_handler", ["require", "exports", "module"], function (b, c) {
    c.FoldHandler = function (b) {
        b.on("click", function (c) {
            var f = c.getDocumentPosition(),
                g = b.session;
            (f = g.getFoldAt(f.row, f.column, 1)) && (c.getAccelKey() ? g.removeFold(f) : g.expandFold(f), c.stop())
        });
        b.on("gutterclick", function (c) {
            if ("foldWidgets" == b.renderer.$gutterLayer.getRegion(c)) {
                var f = c.getDocumentPosition().row,
                    g = b.session;
                g.foldWidgets && g.foldWidgets[f] && b.session.onFoldWidgetClick(f, c);
                b.isFocused() || b.focus();
                c.stop()
            }
        });
        b.on("gutterdblclick", function (c) {
            if ("foldWidgets" == b.renderer.$gutterLayer.getRegion(c)) {
                var f = c.getDocumentPosition().row,
                    g = b.session,
                    h = g.getParentFoldRangeData(f, !0);
                if (h = h.range || h.firstRange) f = h.start.row, (f = g.getFoldAt(f, g.getLine(f).length, 1)) ? g.removeFold(f) : (g.addFold("...", h), b.renderer.scrollCursorIntoView({
                    row: h.start.row,
                    column: 0
                }));
                c.stop()
            }
        })
    }
});
ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function (b, c) {
    var d = b("../lib/keys"),
        e = b("../lib/event"),
        f = function (b) {
            this.$editor = b;
            this.$data = {};
            this.$handlers = [];
            this.setDefaultHandler(b.commands)
        };
    (function () {
        this.setDefaultHandler = function (b) {
            this.removeKeyboardHandler(this.$defaultHandler);
            this.$defaultHandler = b;
            this.addKeyboardHandler(b, 0);
            this.$data = {
                editor: this.$editor
            }
        };
        this.setKeyboardHandler = function (b) {
            var c = this.$handlers;
            if (c[c.length -
                    1] != b) {
                for (; c[c.length - 1] && c[c.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(c[c.length - 1]);
                this.addKeyboardHandler(b, 1)
            }
        };
        this.addKeyboardHandler = function (b, c) {
            if (b) {
                var d = this.$handlers.indexOf(b); -1 != d && this.$handlers.splice(d, 1);
                void 0 == c ? this.$handlers.push(b) : this.$handlers.splice(c, 0, b); -1 == d && b.attach && b.attach(this.$editor)
            }
        };
        this.removeKeyboardHandler = function (b) {
            var c = this.$handlers.indexOf(b);
            return -1 == c ? !1 : (this.$handlers.splice(c, 1), b.detach && b.detach(this.$editor), !0)
        };
        this.getKeyboardHandler = function () {
            return this.$handlers[this.$handlers.length - 1]
        };
        this.$callKeyboardHandlers = function (b, c, d, f) {
            for (var l, m = !1, n = this.$editor.commands, q = this.$handlers.length; q--;)
                if ((l = this.$handlers[q].handleKeyboard(this.$data, b, c, d, f)) && l.command)
                    if ("null" == l.command ? m = !0 : m = n.exec(l.command, this.$editor, l.args, f), m && f && -1 != b && 1 != l.passEvent && 1 != l.command.passEvent && e.stopEvent(f), m) break;
            return m
        };
        this.onCommandKey = function (b, c, e) {
            var f = d.keyCodeToString(e);
            this.$callKeyboardHandlers(c,
                f, e, b)
        };
        this.onTextInput = function (b) {
            this.$callKeyboardHandlers(-1, b) || this.$editor.commands.exec("insertstring", this.$editor, b)
        }
    }).call(f.prototype);
    c.KeyBinding = f
});
ace.define("ace/edit_session", "require exports module ace/lib/oop ace/lib/lang ace/config ace/lib/event_emitter ace/selection ace/mode/text ace/range ace/document ace/background_tokenizer ace/search_highlight ace/edit_session/folding ace/edit_session/bracket_match".split(" "), function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/lang"),
        f = b("./config"),
        g = b("./lib/event_emitter").EventEmitter,
        h = b("./selection").Selection,
        j = b("./mode/text").Mode,
        k = b("./range").Range,
        l = b("./document").Document,
        m = b("./background_tokenizer").BackgroundTokenizer,
        n = b("./search_highlight").SearchHighlight,
        q = function (b, c) {
            this.$breakpoints = [];
            this.$decorations = [];
            this.$frontMarkers = {};
            this.$backMarkers = {};
            this.$markerId = 1;
            this.$undoSelect = true;
            this.$foldData = [];
            this.$foldData.toString = function () {
                return this.join("\n")
            };
            this.on("changeFold", this.onChangeFold.bind(this));
            this.$onChange = this.onChange.bind(this);
            if (typeof b != "object" || !b.getLine) b = new l(b);
            this.setDocument(b);
            this.selection = new h(this);
            f.resetOptions(this);
            this.setMode(c);
            f._emit("session", this)
        };
    (function () {
        function c(b) {
            return b < 4352 ? false : b >= 4352 && b <= 4447 || b >= 4515 && b <= 4519 || b >= 4602 && b <= 4607 || b >= 9001 && b <= 9002 || b >= 11904 && b <= 11929 || b >= 11931 && b <= 12019 || b >= 12032 && b <= 12245 || b >= 12272 && b <= 12283 || b >= 12288 && b <= 12350 || b >= 12353 && b <= 12438 || b >= 12441 && b <= 12543 || b >= 12549 && b <= 12589 || b >= 12593 && b <= 12686 || b >= 12688 && b <= 12730 || b >= 12736 && b <= 12771 || b >= 12784 && b <= 12830 || b >= 12832 && b <= 12871 || b >= 12880 && b <= 13054 || b >= 13056 && b <= 19903 || b >= 19968 && b <= 42124 || b >= 42128 && b <= 42182 || b >= 43360 && b <= 43388 || b >= 44032 && b <= 55203 || b >=
                55216 && b <= 55238 || b >= 55243 && b <= 55291 || b >= 63744 && b <= 64255 || b >= 65040 && b <= 65049 || b >= 65072 && b <= 65106 || b >= 65108 && b <= 65126 || b >= 65128 && b <= 65131 || b >= 65281 && b <= 65376 || b >= 65504 && b <= 65510
        }
        d.implement(this, g);
        this.setDocument = function (b) {
            this.doc && this.doc.removeListener("change", this.$onChange);
            this.doc = b;
            b.on("change", this.$onChange);
            this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument());
            this.resetCaches()
        };
        this.getDocument = function () {
            return this.doc
        };
        this.$resetRowCache = function (b) {
            if (b) {
                var c =
                    this.$docRowCache.length,
                    b = this.$getRowCacheIndex(this.$docRowCache, b) + 1;
                c > b && (this.$docRowCache.splice(b, c), this.$screenRowCache.splice(b, c))
            } else {
                this.$docRowCache = [];
                this.$screenRowCache = []
            }
        };
        this.$getRowCacheIndex = function (b, c) {
            for (var d = 0, e = b.length - 1; d <= e;) {
                var f = d + e >> 1,
                    g = b[f];
                if (c > g) d = f + 1;
                else {
                    if (!(c < g)) return f;
                    e = f - 1
                }
            }
            return d - 1
        };
        this.resetCaches = function () {
            this.$modified = true;
            this.$wrapData = [];
            this.$rowLengthCache = [];
            this.$resetRowCache(0);
            this.bgTokenizer && this.bgTokenizer.start(0)
        };
        this.onChangeFold =
            function (b) {
                this.$resetRowCache(b.data.start.row)
            };
        this.onChange = function (b) {
            var c = b.data;
            this.$modified = true;
            this.$resetRowCache(c.range.start.row);
            var d = this.$updateInternalDataOnChange(b);
            !this.$fromUndo && this.$undoManager && !c.ignore && (this.$deltasDoc.push(c), d && d.length != 0 && this.$deltasFold.push({
                action: "removeFolds",
                folds: d
            }), this.$informUndoManager.schedule());
            this.bgTokenizer.$updateOnChange(c);
            this._emit("change", b)
        };
        this.setValue = function (b) {
            this.doc.setValue(b);
            this.selection.moveCursorTo(0,
                0);
            this.selection.clearSelection();
            this.$resetRowCache(0);
            this.$deltas = [];
            this.$deltasDoc = [];
            this.$deltasFold = [];
            this.getUndoManager().reset()
        };
        this.getValue = this.toString = function () {
            return this.doc.getValue()
        };
        this.getSelection = function () {
            return this.selection
        };
        this.getState = function (b) {
            return this.bgTokenizer.getState(b)
        };
        this.getTokens = function (b) {
            return this.bgTokenizer.getTokens(b)
        };
        this.getTokenAt = function (b, c) {
            var d = this.bgTokenizer.getTokens(b),
                e, f = 0;
            if (c == null) {
                g = d.length - 1;
                f = this.getLine(b).length
            } else
                for (var g =
                        0; g < d.length; g++) {
                    f = f + d[g].value.length;
                    if (f >= c) break
                }
            return e = d[g], e ? (e.index = g, e.start = f - e.value.length, e) : null
        };
        this.setUndoManager = function (b) {
            this.$undoManager = b;
            this.$deltas = [];
            this.$deltasDoc = [];
            this.$deltasFold = [];
            this.$informUndoManager && this.$informUndoManager.cancel();
            if (b) {
                var c = this;
                this.$syncInformUndoManager = function () {
                    c.$informUndoManager.cancel();
                    c.$deltasFold.length && (c.$deltas.push({
                        group: "fold",
                        deltas: c.$deltasFold
                    }), c.$deltasFold = []);
                    c.$deltasDoc.length && (c.$deltas.push({
                        group: "doc",
                        deltas: c.$deltasDoc
                    }), c.$deltasDoc = []);
                    c.$deltas.length > 0 && b.execute({
                        action: "aceupdate",
                        args: [c.$deltas, c],
                        merge: c.mergeUndoDeltas
                    });
                    c.mergeUndoDeltas = false;
                    c.$deltas = []
                };
                this.$informUndoManager = e.delayedCall(this.$syncInformUndoManager)
            }
        };
        this.markUndoGroup = function () {
            this.$syncInformUndoManager && this.$syncInformUndoManager()
        };
        this.$defaultUndoManager = {
            undo: function () { },
            redo: function () { },
            reset: function () { }
        };
        this.getUndoManager = function () {
            return this.$undoManager || this.$defaultUndoManager
        };
        this.getTabString =
            function () {
                return this.getUseSoftTabs() ? e.stringRepeat(" ", this.getTabSize()) : "\t"
            };
        this.setUseSoftTabs = function (b) {
            this.setOption("useSoftTabs", b)
        };
        this.getUseSoftTabs = function () {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs
        };
        this.setTabSize = function (b) {
            this.setOption("tabSize", b)
        };
        this.getTabSize = function () {
            return this.$tabSize
        };
        this.isTabStop = function (b) {
            return this.$useSoftTabs && b.column % this.$tabSize == 0
        };
        this.$overwrite = false;
        this.setOverwrite = function (b) {
            this.setOption("overwrite", b)
        };
        this.getOverwrite = function () {
            return this.$overwrite
        };
        this.toggleOverwrite = function () {
            this.setOverwrite(!this.$overwrite)
        };
        this.addGutterDecoration = function (b, c) {
            this.$decorations[b] || (this.$decorations[b] = "");
            this.$decorations[b] = this.$decorations[b] + (" " + c);
            this._emit("changeBreakpoint", {})
        };
        this.removeGutterDecoration = function (b, c) {
            this.$decorations[b] = (this.$decorations[b] || "").replace(" " + c, "");
            this._emit("changeBreakpoint", {})
        };
        this.getBreakpoints = function () {
            return this.$breakpoints
        };
        this.setBreakpoints =
            function (b) {
                this.$breakpoints = [];
                for (var c = 0; c < b.length; c++) this.$breakpoints[b[c]] = "ace_breakpoint";
                this._emit("changeBreakpoint", {})
            };
        this.clearBreakpoints = function () {
            this.$breakpoints = [];
            this._emit("changeBreakpoint", {})
        };
        this.setBreakpoint = function (b, c) {
            c === void 0 && (c = "ace_breakpoint");
            c ? this.$breakpoints[b] = c : delete this.$breakpoints[b];
            this._emit("changeBreakpoint", {})
        };
        this.clearBreakpoint = function (b) {
            delete this.$breakpoints[b];
            this._emit("changeBreakpoint", {})
        };
        this.addMarker = function (b,
            c, d, e) {
            var f = this.$markerId++,
                b = {
                    range: b,
                    type: d || "line",
                    renderer: typeof d == "function" ? d : null,
                    clazz: c,
                    inFront: !!e,
                    id: f
                };
            return e ? (this.$frontMarkers[f] = b, this._emit("changeFrontMarker")) : (this.$backMarkers[f] = b, this._emit("changeBackMarker")), f
        };
        this.addDynamicMarker = function (b, c) {
            if (b.update) {
                var d = this.$markerId++;
                return b.id = d, b.inFront = !!c, c ? (this.$frontMarkers[d] = b, this._emit("changeFrontMarker")) : (this.$backMarkers[d] = b, this._emit("changeBackMarker")), b
            }
        };
        this.removeMarker = function (b) {
            var c =
                this.$frontMarkers[b] || this.$backMarkers[b];
            if (c) {
                var d = c.inFront ? this.$frontMarkers : this.$backMarkers;
                c && (delete d[b], this._emit(c.inFront ? "changeFrontMarker" : "changeBackMarker"))
            }
        };
        this.getMarkers = function (b) {
            return b ? this.$frontMarkers : this.$backMarkers
        };
        this.highlight = function (b) {
            if (!this.$searchHighlight) this.$searchHighlight = this.addDynamicMarker(new n(null, "ace_selected-word", "text"));
            this.$searchHighlight.setRegexp(b)
        };
        this.highlightLines = function (b, c, d, e) {
            typeof c != "number" && (d = c, c = b);
            d ||
                (d = "ace_step");
            b = new k(b, 0, c, Infinity);
            return b.id = this.addMarker(b, d, "fullLine", e), b
        };
        this.setAnnotations = function (b) {
            this.$annotations = b;
            this._emit("changeAnnotation", {})
        };
        this.getAnnotations = function () {
            return this.$annotations || []
        };
        this.clearAnnotations = function () {
            this.setAnnotations([])
        };
        this.$detectNewLine = function (b) {
            (b = b.match(/^.*?(\r?\n)/m)) ? this.$autoNewLine = b[1] : this.$autoNewLine = "\n"
        };
        this.getWordRange = function (b, c) {
            var d = this.getLine(b),
                e = false;
            c > 0 && (e = !!d.charAt(c - 1).match(this.tokenRe));
            e || (e = !!d.charAt(c).match(this.tokenRe));
            var e = e ? this.tokenRe : /^\s+$/.test(d.slice(c - 1, c + 1)) ? /\s/ : this.nonTokenRe,
                f = c;
            if (f > 0) {
                do f--; while (f >= 0 && d.charAt(f).match(e));
                f++
            }
            for (var g = c; g < d.length && d.charAt(g).match(e) ;) g++;
            return new k(b, f, b, g)
        };
        this.getAWordRange = function (b, c) {
            for (var d = this.getWordRange(b, c), e = this.getLine(d.end.row) ; e.charAt(d.end.column).match(/[ \t]/) ;) d.end.column = d.end.column + 1;
            return d
        };
        this.setNewLineMode = function (b) {
            this.doc.setNewLineMode(b)
        };
        this.getNewLineMode = function () {
            return this.doc.getNewLineMode()
        };
        this.setUseWorker = function (b) {
            this.setOption("useWorker", b)
        };
        this.getUseWorker = function () {
            return this.$useWorker
        };
        this.onReloadTokenizer = function (b) {
            this.bgTokenizer.start(b.data.first);
            this._emit("tokenizerUpdate", b)
        };
        this.$modes = {};
        this.$modeId = this.$mode = null;
        this.setMode = function (b, c) {
            if (b && typeof b == "object") {
                if (b.getTokenizer) return this.$onChangeMode(b);
                var d = b,
                    e = d.path
            } else e = b || "ace/mode/text";
            this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new j);
            if (this.$modes[e] && !d) {
                this.$onChangeMode(this.$modes[e]);
                c && c()
            } else {
                this.$modeId = e;
                f.loadModule(["mode", e], function (b) {
                    if (this.$modeId !== e) return c && c();
                    if (this.$modes[e] && !d) return this.$onChangeMode(this.$modes[e]);
                    b && b.Mode && (b = new b.Mode(d), d || (this.$modes[e] = b, b.$id = e), this.$onChangeMode(b), c && c())
                }.bind(this));
                this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], true)
            }
        };
        this.$onChangeMode = function (b, c) {
            c || (this.$modeId = b.$id);
            if (this.$mode !== b) {
                this.$mode = b;
                this.$stopWorker();
                this.$useWorker && this.$startWorker();
                var d = b.getTokenizer();
                if (d.addEventListener !==
                    void 0) {
                    var e = this.onReloadTokenizer.bind(this);
                    d.addEventListener("update", e)
                }
                if (this.bgTokenizer) this.bgTokenizer.setTokenizer(d);
                else {
                    this.bgTokenizer = new m(d);
                    var f = this;
                    this.bgTokenizer.addEventListener("update", function (b) {
                        f._emit("tokenizerUpdate", b)
                    })
                }
                this.bgTokenizer.setDocument(this.getDocument());
                this.tokenRe = b.tokenRe;
                this.nonTokenRe = b.nonTokenRe;
                c || (this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(b.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
            }
        };
        this.$stopWorker = function () {
            this.$worker && this.$worker.terminate();
            this.$worker = null
        };
        this.$startWorker = function () {
            if (typeof Worker != "undefined" && !b.noWorker) try {
                this.$worker = this.$mode.createWorker(this)
            } catch (c) {
                console.log("Could not load worker");
                console.log(c);
                this.$worker = null
            } else this.$worker = null
        };
        this.getMode = function () {
            return this.$mode
        };
        this.$scrollTop = 0;
        this.setScrollTop = function (b) {
            if (!(this.$scrollTop === b || isNaN(b))) {
                this.$scrollTop = b;
                this._signal("changeScrollTop", b)
            }
        };
        this.getScrollTop =
            function () {
                return this.$scrollTop
            };
        this.$scrollLeft = 0;
        this.setScrollLeft = function (b) {
            if (!(this.$scrollLeft === b || isNaN(b))) {
                this.$scrollLeft = b;
                this._signal("changeScrollLeft", b)
            }
        };
        this.getScrollLeft = function () {
            return this.$scrollLeft
        };
        this.getScreenWidth = function () {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
        };
        this.getLineWidgetMaxWidth = function () {
            if (this.lineWidgetsWidth != null) return this.lineWidgetsWidth;
            var b = 0;
            return this.lineWidgets.forEach(function (c) {
                c &&
                    c.screenWidth > b && (b = c.screenWidth)
            }), this.lineWidgetWidth = b
        };
        this.$computeWidth = function (b) {
            if (this.$modified || b) {
                this.$modified = false;
                if (this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                for (var b = this.doc.getAllLines(), c = this.$rowLengthCache, d = 0, e = 0, f = this.$foldData[e], g = f ? f.start.row : Infinity, h = b.length, j = 0; j < h; j++) {
                    if (j > g) {
                        j = f.end.row + 1;
                        if (j >= h) break;
                        g = (f = this.$foldData[e++]) ? f.start.row : Infinity
                    }
                    c[j] == null && (c[j] = this.$getStringScreenWidth(b[j])[0]);
                    c[j] > d && (d = c[j])
                }
                this.screenWidth =
                    d
            }
        };
        this.getLine = function (b) {
            return this.doc.getLine(b)
        };
        this.getLines = function (b, c) {
            return this.doc.getLines(b, c)
        };
        this.getLength = function () {
            return this.doc.getLength()
        };
        this.getTextRange = function (b) {
            return this.doc.getTextRange(b || this.selection.getRange())
        };
        this.insert = function (b, c) {
            return this.doc.insert(b, c)
        };
        this.remove = function (b) {
            return this.doc.remove(b)
        };
        this.undoChanges = function (b, c) {
            if (b.length) {
                this.$fromUndo = true;
                for (var d = null, e = b.length - 1; e != -1; e--) {
                    var f = b[e];
                    f.group == "doc" ? (this.doc.revertDeltas(f.deltas),
                        d = this.$getUndoSelection(f.deltas, true, d)) : f.deltas.forEach(function (b) {
                            this.addFolds(b.folds)
                        }, this)
                }
                return this.$fromUndo = false, d && this.$undoSelect && !c && this.selection.setSelectionRange(d), d
            }
        };
        this.redoChanges = function (b, c) {
            if (b.length) {
                this.$fromUndo = true;
                for (var d = null, e = 0; e < b.length; e++) {
                    var f = b[e];
                    f.group == "doc" && (this.doc.applyDeltas(f.deltas), d = this.$getUndoSelection(f.deltas, false, d))
                }
                return this.$fromUndo = false, d && this.$undoSelect && !c && this.selection.setSelectionRange(d), d
            }
        };
        this.setUndoSelect =
            function (b) {
                this.$undoSelect = b
            };
        this.$getUndoSelection = function (b, c, d) {
            function e(b) {
                b = b.action === "insertText" || b.action === "insertLines";
                return c ? !b : b
            }
            var f = b[0],
                g, h;
            e(f) ? g = k.fromPoints(f.range.start, f.range.end) : g = k.fromPoints(f.range.start, f.range.start);
            for (var j = 1; j < b.length; j++) {
                f = b[j];
                e(f) ? (h = f.range.start, g.compare(h.row, h.column) == -1 && g.setStart(f.range.start), h = f.range.end, g.compare(h.row, h.column) == 1 && g.setEnd(f.range.end)) : (h = f.range.start, g.compare(h.row, h.column) == -1 && (g = k.fromPoints(f.range.start,
                    f.range.start)))
            }
            if (d != null) {
                k.comparePoints(d.start, g.start) == 0 && (d.start.column = d.start.column + (g.end.column - g.start.column), d.end.column = d.end.column + (g.end.column - g.start.column));
                b = d.compareRange(g);
                b == 1 ? g.setStart(d.start) : b == -1 && g.setEnd(d.end)
            }
            return g
        };
        this.replace = function (b, c) {
            return this.doc.replace(b, c)
        };
        this.moveText = function (b, c, d) {
            var e = this.getTextRange(b),
                f = this.getFoldsInRange(b),
                c = k.fromPoints(c, c);
            if (!d) {
                this.remove(b);
                var g = b.start.row - b.end.row,
                    h = g ? -b.end.column : b.start.column -
                    b.end.column;
                h && (c.start.row == b.end.row && c.start.column > b.end.column && (c.start.column = c.start.column + h), c.end.row == b.end.row && c.end.column > b.end.column && (c.end.column = c.end.column + h));
                g && c.start.row >= b.end.row && (c.start.row = c.start.row + g, c.end.row = c.end.row + g)
            }
            c.end = this.insert(c.start, e);
            if (f.length) {
                var j = b.start,
                    b = c.start,
                    g = b.row - j.row,
                    h = b.column - j.column;
                this.addFolds(f.map(function (b) {
                    return b = b.clone(), b.start.row == j.row && (b.start.column = b.start.column + h), b.end.row == j.row && (b.end.column = b.end.column +
                        h), b.start.row = b.start.row + g, b.end.row = b.end.row + g, b
                }))
            }
            return c
        };
        this.indentRows = function (b, c, d) {
            for (d = d.replace(/\t/g, this.getTabString()) ; b <= c; b++) this.insert({
                row: b,
                column: 0
            }, d)
        };
        this.outdentRows = function (b) {
            for (var b = b.collapseRows(), c = new k(0, 0, 0, 0), d = this.getTabSize(), e = b.start.row; e <= b.end.row; ++e) {
                var f = this.getLine(e);
                c.start.row = e;
                c.end.row = e;
                for (var g = 0; g < d; ++g)
                    if (f.charAt(g) != " ") break;
                g < d && f.charAt(g) == "\t" ? (c.start.column = g, c.end.column = g + 1) : (c.start.column = 0, c.end.column = g);
                this.remove(c)
            }
        };
        this.$moveLines = function (b, c, d) {
            b = this.getRowFoldStart(b);
            c = this.getRowFoldEnd(c);
            if (d < 0) {
                var e = this.getRowFoldStart(b + d);
                if (e < 0) return 0;
                var f = e - b
            } else if (d > 0) {
                e = this.getRowFoldEnd(c + d);
                if (e > this.doc.getLength() - 1) return 0;
                f = e - c
            } else {
                b = this.$clipRowToDocument(b);
                c = this.$clipRowToDocument(c);
                f = c - b + 1
            }
            e = this.getFoldsInRange(new k(b, 0, c, Number.MAX_VALUE)).map(function (b) {
                return b = b.clone(), b.start.row = b.start.row + f, b.end.row = b.end.row + f, b
            });
            c = d == 0 ? this.doc.getLines(b, c) : this.doc.removeLines(b, c);
            return this.doc.insertLines(b +
                f, c), e.length && this.addFolds(e), f
        };
        this.moveLinesUp = function (b, c) {
            return this.$moveLines(b, c, -1)
        };
        this.moveLinesDown = function (b, c) {
            return this.$moveLines(b, c, 1)
        };
        this.duplicateLines = function (b, c) {
            return this.$moveLines(b, c, 0)
        };
        this.$clipRowToDocument = function (b) {
            return Math.max(0, Math.min(b, this.doc.getLength() - 1))
        };
        this.$clipColumnToRow = function (b, c) {
            return c < 0 ? 0 : Math.min(this.doc.getLine(b).length, c)
        };
        this.$clipPositionToDocument = function (b, c) {
            c = Math.max(0, c);
            if (b < 0) c = b = 0;
            else {
                var d = this.doc.getLength();
                b >= d ? (b = d - 1, c = this.doc.getLine(d - 1).length) : c = Math.min(this.doc.getLine(b).length, c)
            }
            return {
                row: b,
                column: c
            }
        };
        this.$clipRangeToDocument = function (b) {
            b.start.row < 0 ? (b.start.row = 0, b.start.column = 0) : b.start.column = this.$clipColumnToRow(b.start.row, b.start.column);
            var c = this.doc.getLength() - 1;
            return b.end.row > c ? (b.end.row = c, b.end.column = this.doc.getLine(c).length) : b.end.column = this.$clipColumnToRow(b.end.row, b.end.column), b
        };
        this.$wrapLimit = 80;
        this.$useWrapMode = false;
        this.$wrapLimitRange = {
            min: null,
            max: null
        };
        this.setUseWrapMode = function (b) {
            if (b != this.$useWrapMode) {
                this.$useWrapMode = b;
                this.$modified = true;
                this.$resetRowCache(0);
                if (b) {
                    b = this.getLength();
                    this.$wrapData = [];
                    for (var c = 0; c < b; c++) this.$wrapData.push([]);
                    this.$updateWrapData(0, b - 1)
                }
                this._emit("changeWrapMode")
            }
        };
        this.getUseWrapMode = function () {
            return this.$useWrapMode
        };
        this.setWrapLimitRange = function (b, c) {
            if (this.$wrapLimitRange.min !== b || this.$wrapLimitRange.max !== c) {
                this.$wrapLimitRange = {
                    min: b,
                    max: c
                };
                this.$modified = true;
                this._emit("changeWrapMode")
            }
        };
        this.adjustWrapLimit = function (b, c) {
            var d = this.$wrapLimitRange;
            d.max < 0 && (d = {
                min: c,
                max: c
            });
            d = this.$constrainWrapLimit(b, d.min, d.max);
            return d != this.$wrapLimit && d > 1 ? (this.$wrapLimit = d, this.$modified = true, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._emit("changeWrapLimit")), true) : false
        };
        this.$constrainWrapLimit = function (b, c, d) {
            return c && (b = Math.max(c, b)), d && (b = Math.min(d, b)), b
        };
        this.getWrapLimit = function () {
            return this.$wrapLimit
        };
        this.setWrapLimit = function (b) {
            this.setWrapLimitRange(b,
                b)
        };
        this.getWrapLimitRange = function () {
            return {
                min: this.$wrapLimitRange.min,
                max: this.$wrapLimitRange.max
            }
        };
        this.$updateInternalDataOnChange = function (b) {
            var c = this.$useWrapMode,
                d, e = b.data.action,
                f = b.data.range.start.row,
                g = b.data.range.end.row,
                h = b.data.range.start,
                j = b.data.range.end,
                k = null;
            e.indexOf("Lines") != -1 ? (e == "insertLines" ? g = f + b.data.lines.length : g = f, d = b.data.lines ? b.data.lines.length : g - f) : d = g - f;
            this.$updating = true;
            if (d != 0)
                if (e.indexOf("remove") != -1) {
                    this[c ? "$wrapData" : "$rowLengthCache"].splice(f,
                        d);
                    e = this.$foldData;
                    k = this.getFoldsInRange(b.data.range);
                    this.removeFolds(k);
                    var b = this.getFoldLine(j.row),
                        l = 0;
                    if (b) {
                        b.addRemoveChars(j.row, j.column, h.column - j.column);
                        b.shiftRow(-d);
                        (g = this.getFoldLine(f)) && g !== b && (g.merge(b), b = g);
                        l = e.indexOf(b) + 1
                    }
                    for (l; l < e.length; l++) {
                        b = e[l];
                        b.start.row >= j.row && b.shiftRow(-d)
                    }
                    g = f
                } else {
                    if (c) {
                        e = [f, 0];
                        for (b = 0; b < d; b++) e.push([]);
                        this.$wrapData.splice.apply(this.$wrapData, e)
                    } else {
                        e = Array(d);
                        e.unshift(f, 0);
                        this.$rowLengthCache.splice.apply(this.$rowLengthCache, e)
                    }
                    e = this.$foldData;
                    b = this.getFoldLine(f);
                    l = 0;
                    if (b) {
                        l = b.range.compareInside(h.row, h.column);
                        l == 0 ? (b = b.split(h.row, h.column), b.shiftRow(d), b.addRemoveChars(g, 0, j.column - h.column)) : l == -1 && (b.addRemoveChars(f, 0, j.column - h.column), b.shiftRow(d));
                        l = e.indexOf(b) + 1
                    }
                    for (l; l < e.length; l++) {
                        b = e[l];
                        b.start.row >= f && b.shiftRow(d)
                    }
                }
            else {
                d = Math.abs(b.data.range.start.column - b.data.range.end.column);
                e.indexOf("remove") != -1 && (k = this.getFoldsInRange(b.data.range), this.removeFolds(k), d = -d);
                (b = this.getFoldLine(f)) && b.addRemoveChars(f, h.column,
                    d)
            }
            return c && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = false, c ? this.$updateWrapData(f, g) : this.$updateRowLengthCache(f, g), k
        };
        this.$updateRowLengthCache = function (b, c) {
            this.$rowLengthCache[b] = null;
            this.$rowLengthCache[c] = null
        };
        this.$updateWrapData = function (b, c) {
            for (var d = this.doc.getAllLines(), e = this.getTabSize(), f = this.$wrapData, g = this.$wrapLimit, j, k, m = b, c = Math.min(c, d.length - 1) ; m <= c;) (k = this.getFoldLine(m,
                k)) ? (j = [], k.walk(function (b, c, e, f) {
                    if (b != null) {
                        b = this.$getDisplayTokens(b, j.length);
                        b[0] = h;
                        for (c = 1; c < b.length; c++) b[c] = l
                    } else b = this.$getDisplayTokens(d[c].substring(f, e), j.length);
                    j = j.concat(b)
                }.bind(this), k.end.row, d[k.end.row].length + 1), f[k.start.row] = this.$computeWrapSplits(j, g, e), m = k.end.row + 1) : (j = this.$getDisplayTokens(d[m]), f[m] = this.$computeWrapSplits(j, g, e), m++)
        };
        var h = 3,
            l = 4;
        this.$computeWrapSplits = function (b, c) {
            function d(c) {
                var f = b.slice(g, c),
                    h = f.length;
                f.join("").replace(/12/g, function () {
                    h =
                        h - 1
                }).replace(/2/g, function () {
                    h = h - 1
                });
                j = j + h;
                e.push(j);
                g = c
            }
            if (b.length == 0) return [];
            for (var e = [], f = b.length, g = 0, j = 0, k = this.$wrapAsCode; f - g > c;) {
                var m = g + c;
                if (b[m - 1] >= 10 && b[m] >= 10) d(m);
                else if (b[m] == h || b[m] == l) {
                    for (m; m != g - 1; m--)
                        if (b[m] == h) break;
                    if (!(m > g)) {
                        m = g + c;
                        for (m; m < b.length; m++)
                            if (b[m] != l) break;
                        if (m == b.length) break
                    }
                    d(m)
                } else {
                    for (var n = Math.max(m - (k ? 10 : c - (c >> 2)), g - 1) ; m > n && b[m] < h;) m--;
                    if (k) {
                        for (; m > n && b[m] < h;) m--;
                        for (; m > n && b[m] == 9;) m--
                    } else
                        for (; m > n && b[m] < 10;) m--;
                    if (m > n) d(++m);
                    else {
                        m = g + c;
                        d(m)
                    }
                }
            }
            return e
        };
        this.$getDisplayTokens = function (b, d) {
            for (var e = [], f, d = d || 0, g = 0; g < b.length; g++) {
                f = b.charCodeAt(g);
                if (f == 9) {
                    f = this.getScreenTabSize(e.length + d);
                    e.push(11);
                    for (var h = 1; h < f; h++) e.push(12)
                } else f == 32 ? e.push(10) : f > 39 && f < 48 || f > 57 && f < 64 ? e.push(9) : f >= 4352 && c(f) ? e.push(1, 2) : e.push(1)
            }
            return e
        };
        this.$getStringScreenWidth = function (b, d, e) {
            if (d == 0) return [0, 0];
            d == null && (d = Infinity);
            var e = e || 0,
                f, g;
            for (g = 0; g < b.length; g++) {
                f = b.charCodeAt(g);
                f == 9 ? e = e + this.getScreenTabSize(e) : f >= 4352 && c(f) ? e = e + 2 : e = e + 1;
                if (e > d) break
            }
            return [e,
                g
            ]
        };
        this.lineWidgets = null;
        this.getRowLength = function (b) {
            var c = this.lineWidgets ? this.lineWidgets[b] && this.lineWidgets[b].rowCount || 0 : 0;
            return !this.$useWrapMode || !this.$wrapData[b] ? 1 + c : this.$wrapData[b].length + 1 + c
        };
        this.getRowLineCount = function (b) {
            return !this.$useWrapMode || !this.$wrapData[b] ? 1 : this.$wrapData[b].length + 1
        };
        this.getScreenLastRowColumn = function (b) {
            b = this.screenToDocumentPosition(b, Number.MAX_VALUE);
            return this.documentToScreenColumn(b.row, b.column)
        };
        this.getDocumentLastRowColumn = function (b,
            c) {
            return this.getScreenLastRowColumn(this.documentToScreenRow(b, c))
        };
        this.getDocumentLastRowColumnPosition = function (b, c) {
            return this.screenToDocumentPosition(this.documentToScreenRow(b, c), Number.MAX_VALUE / 10)
        };
        this.getRowSplitData = function (b) {
            return this.$useWrapMode ? this.$wrapData[b] : void 0
        };
        this.getScreenTabSize = function (b) {
            return this.$tabSize - b % this.$tabSize
        };
        this.screenToDocumentRow = function (b, c) {
            return this.screenToDocumentPosition(b, c).row
        };
        this.screenToDocumentColumn = function (b, c) {
            return this.screenToDocumentPosition(b,
                c).column
        };
        this.screenToDocumentPosition = function (b, c) {
            if (b < 0) return {
                row: 0,
                column: 0
            };
            var d, e = 0,
                f = 0,
                g, h = 0;
            d = 0;
            var j = this.$screenRowCache,
                k = this.$getRowCacheIndex(j, b),
                l = j.length;
            if (l && k >= 0) {
                h = j[k];
                e = this.$docRowCache[k];
                k = b > j[l - 1]
            } else k = !l;
            for (var l = this.getLength() - 1, m = (j = this.getNextFoldLine(e)) ? j.start.row : Infinity; h <= b;) {
                d = this.getRowLength(e);
                if (h + d > b || e >= l) break;
                h = h + d;
                e++;
                e > m && (e = j.end.row + 1, j = this.getNextFoldLine(e, j), m = j ? j.start.row : Infinity);
                k && (this.$docRowCache.push(e), this.$screenRowCache.push(h))
            }
            if (j &&
                j.start.row <= e) {
                d = this.getFoldDisplayLine(j);
                e = j.start.row
            } else {
                if (h + d <= b || e > l) return {
                    row: l,
                    column: this.getLine(l).length
                };
                d = this.getLine(e);
                j = null
            }
            if (this.$useWrapMode)
                if (k = this.$wrapData[e]) {
                    h = Math.floor(b - h);
                    g = k[h];
                    h > 0 && k.length && (f = k[h - 1] || k[k.length - 1], d = d.substring(f))
                }
            return f = f + this.$getStringScreenWidth(d, c)[1], this.$useWrapMode && f >= g && (f = g - 1), j ? j.idxToPosition(f) : {
                row: e,
                column: f
            }
        };
        this.documentToScreenPosition = function (b, c) {
            var d = typeof c == "undefined" ? this.$clipPositionToDocument(b.row,
                    b.column) : this.$clipPositionToDocument(b, c),
                b = d.row,
                c = d.column,
                d = 0,
                e = null,
                f = null;
            (f = this.getFoldAt(b, c, 1)) && (b = f.start.row, c = f.start.column);
            var g, f = 0,
                h = this.$docRowCache,
                j = this.$getRowCacheIndex(h, b);
            if ((g = h.length) && j >= 0) var f = h[j],
                d = this.$screenRowCache[j],
                k = b > h[g - 1];
            else k = !g;
            for (j = (h = this.getNextFoldLine(f)) ? h.start.row : Infinity; f < b;) {
                if (f >= j) {
                    g = h.end.row + 1;
                    if (g > b) break;
                    j = (h = this.getNextFoldLine(g, h)) ? h.start.row : Infinity
                } else g = f + 1;
                d = d + this.getRowLength(f);
                f = g;
                k && (this.$docRowCache.push(f),
                    this.$screenRowCache.push(d))
            }
            g = "";
            h && f >= j ? (g = this.getFoldDisplayLine(h, b, c), e = h.start.row) : (g = this.getLine(b).substring(0, c), e = b);
            if (this.$useWrapMode) {
                e = this.$wrapData[e];
                for (f = 0; g.length >= e[f];) {
                    d++;
                    f++
                }
                g = g.substring(e[f - 1] || 0, g.length)
            }
            return {
                row: d,
                column: this.$getStringScreenWidth(g)[0]
            }
        };
        this.documentToScreenColumn = function (b, c) {
            return this.documentToScreenPosition(b, c).column
        };
        this.documentToScreenRow = function (b, c) {
            return this.documentToScreenPosition(b, c).row
        };
        this.getScreenLength = function () {
            var b =
                0,
                c = null;
            if (this.$useWrapMode)
                for (var d = this.$wrapData.length, e = 0, f = 0, g = (c = this.$foldData[f++]) ? c.start.row : Infinity; e < d;) {
                    b = b + (this.$wrapData[e].length + 1);
                    e++;
                    e > g && (e = c.end.row + 1, c = this.$foldData[f++], g = c ? c.start.row : Infinity)
                } else
                for (var b = this.getLength(), d = this.$foldData, f = 0; f < d.length; f++) {
                    c = d[f];
                    b = b - (c.end.row - c.start.row)
                }
            return this.lineWidgets && (b = b + this.$getWidgetScreenLength()), b
        }
    }).call(q.prototype);
    b("./edit_session/folding").Folding.call(q.prototype);
    b("./edit_session/bracket_match").BracketMatch.call(q.prototype);
    f.defineOptions(q.prototype, "session", {
        wrap: {
            set: function (b) {
                !b || b == "off" ? b = false : b == "free" ? b = true : b == "printMargin" ? b = -1 : typeof b == "string" && (b = parseInt(b, 10) || false);
                if (this.$wrap != b) {
                    if (b) {
                        var c = typeof b == "number" ? b : null;
                        this.setWrapLimitRange(c, c);
                        this.setUseWrapMode(true)
                    } else this.setUseWrapMode(false);
                    this.$wrap = b
                }
            },
            get: function () {
                return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
            },
            handlesSet: true
        },
        wrapMethod: {
            set: function (b) {
                b = b ==
                    "auto" ? this.$mode.type != "text" : b != "text";
                b != this.$wrapAsCode && (this.$wrapAsCode = b, this.$useWrapMode && (this.$modified = true, this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)))
            },
            initialValue: "auto"
        },
        firstLineNumber: {
            set: function () {
                this._emit("changeBreakpoint")
            },
            initialValue: 1
        },
        useWorker: {
            set: function (b) {
                this.$useWorker = b;
                this.$stopWorker();
                b && this.$startWorker()
            },
            initialValue: true
        },
        useSoftTabs: {
            initialValue: true
        },
        tabSize: {
            set: function (b) {
                if (!(isNaN(b) || this.$tabSize === b)) {
                    this.$modified =
                        true;
                    this.$rowLengthCache = [];
                    this.$tabSize = b;
                    this._emit("changeTabSize")
                }
            },
            initialValue: 4,
            handlesSet: true
        },
        overwrite: {
            set: function () {
                this._emit("changeOverwrite")
            },
            initialValue: false
        },
        newLineMode: {
            set: function (b) {
                this.doc.setNewLineMode(b)
            },
            get: function () {
                return this.doc.getNewLineMode()
            },
            handlesSet: true
        },
        mode: {
            set: function (b) {
                this.setMode(b)
            },
            get: function () {
                return this.$modeId
            }
        }
    });
    c.EditSession = q
});
ace.define("ace/selection", "require exports module ace/lib/oop ace/lib/lang ace/lib/event_emitter ace/range".split(" "), function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/lang"),
        f = b("./lib/event_emitter").EventEmitter,
        g = b("./range").Range,
        h = function (b) {
            this.session = b;
            this.doc = b.getDocument();
            this.clearSelection();
            this.lead = this.selectionLead = this.doc.createAnchor(0, 0);
            this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
            var c = this;
            this.lead.on("change", function (b) {
                c._emit("changeCursor");
                c.$isEmpty ||
                    c._emit("changeSelection");
                !c.$keepDesiredColumnOnChange && b.old.column != b.value.column && (c.$desiredColumn = null)
            });
            this.selectionAnchor.on("change", function () {
                c.$isEmpty || c._emit("changeSelection")
            })
        };
    (function () {
        d.implement(this, f);
        this.isEmpty = function () {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
        };
        this.isMultiLine = function () {
            return this.isEmpty() ? false : this.getRange().isMultiLine()
        };
        this.getCursor = function () {
            return this.lead.getPosition()
        };
        this.setSelectionAnchor =
            function (b, c) {
                this.anchor.setPosition(b, c);
                this.$isEmpty && (this.$isEmpty = false, this._emit("changeSelection"))
            };
        this.getSelectionAnchor = function () {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
        };
        this.getSelectionLead = function () {
            return this.lead.getPosition()
        };
        this.shiftSelection = function (b) {
            if (this.$isEmpty) this.moveCursorTo(this.lead.row, this.lead.column + b);
            else {
                var c = this.getSelectionAnchor(),
                    d = this.getSelectionLead(),
                    e = this.isBackwards();
                (!e || c.column !== 0) && this.setSelectionAnchor(c.row,
                    c.column + b);
                (e || d.column !== 0) && this.$moveSelection(function () {
                    this.moveCursorTo(d.row, d.column + b)
                })
            }
        };
        this.isBackwards = function () {
            var b = this.anchor,
                c = this.lead;
            return b.row > c.row || b.row == c.row && b.column > c.column
        };
        this.getRange = function () {
            var b = this.anchor,
                c = this.lead;
            return this.isEmpty() ? g.fromPoints(c, c) : this.isBackwards() ? g.fromPoints(c, b) : g.fromPoints(b, c)
        };
        this.clearSelection = function () {
            this.$isEmpty || (this.$isEmpty = true, this._emit("changeSelection"))
        };
        this.selectAll = function () {
            var b = this.doc.getLength() -
                1;
            this.setSelectionAnchor(0, 0);
            this.moveCursorTo(b, this.doc.getLine(b).length)
        };
        this.setRange = this.setSelectionRange = function (b, c) {
            c ? (this.setSelectionAnchor(b.end.row, b.end.column), this.selectTo(b.start.row, b.start.column)) : (this.setSelectionAnchor(b.start.row, b.start.column), this.selectTo(b.end.row, b.end.column));
            this.getRange().isEmpty() && (this.$isEmpty = true);
            this.$desiredColumn = null
        };
        this.$moveSelection = function (b) {
            var c = this.lead;
            this.$isEmpty && this.setSelectionAnchor(c.row, c.column);
            b.call(this)
        };
        this.selectTo = function (b, c) {
            this.$moveSelection(function () {
                this.moveCursorTo(b, c)
            })
        };
        this.selectToPosition = function (b) {
            this.$moveSelection(function () {
                this.moveCursorToPosition(b)
            })
        };
        this.selectUp = function () {
            this.$moveSelection(this.moveCursorUp)
        };
        this.selectDown = function () {
            this.$moveSelection(this.moveCursorDown)
        };
        this.selectRight = function () {
            this.$moveSelection(this.moveCursorRight)
        };
        this.selectLeft = function () {
            this.$moveSelection(this.moveCursorLeft)
        };
        this.selectLineStart = function () {
            this.$moveSelection(this.moveCursorLineStart)
        };
        this.selectLineEnd = function () {
            this.$moveSelection(this.moveCursorLineEnd)
        };
        this.selectFileEnd = function () {
            this.$moveSelection(this.moveCursorFileEnd)
        };
        this.selectFileStart = function () {
            this.$moveSelection(this.moveCursorFileStart)
        };
        this.selectWordRight = function () {
            this.$moveSelection(this.moveCursorWordRight)
        };
        this.selectWordLeft = function () {
            this.$moveSelection(this.moveCursorWordLeft)
        };
        this.getWordRange = function (b, c) {
            if (typeof c == "undefined") var d = b || this.lead,
                b = d.row,
                c = d.column;
            return this.session.getWordRange(b,
                c)
        };
        this.selectWord = function () {
            this.setSelectionRange(this.getWordRange())
        };
        this.selectAWord = function () {
            var b = this.getCursor();
            this.setSelectionRange(this.session.getAWordRange(b.row, b.column))
        };
        this.getLineRange = function (b, c) {
            var d = typeof b == "number" ? b : this.lead.row,
                e, f = this.session.getFoldLine(d);
            return f ? (d = f.start.row, e = f.end.row) : e = d, c === true ? new g(d, 0, e, this.session.getLine(e).length) : new g(d, 0, e + 1, 0)
        };
        this.selectLine = function () {
            this.setSelectionRange(this.getLineRange())
        };
        this.moveCursorUp =
            function () {
                this.moveCursorBy(-1, 0)
            };
        this.moveCursorDown = function () {
            this.moveCursorBy(1, 0)
        };
        this.moveCursorLeft = function () {
            var b = this.lead.getPosition(),
                c;
            if (c = this.session.getFoldAt(b.row, b.column, -1)) this.moveCursorTo(c.start.row, c.start.column);
            else if (b.column == 0) b.row > 0 && this.moveCursorTo(b.row - 1, this.doc.getLine(b.row - 1).length);
            else {
                c = this.session.getTabSize();
                this.session.isTabStop(b) && this.doc.getLine(b.row).slice(b.column - c, b.column).split(" ").length - 1 == c ? this.moveCursorBy(0, -c) : this.moveCursorBy(0, -1)
            }
        };
        this.moveCursorRight = function () {
            var b = this.lead.getPosition();
            if (b = this.session.getFoldAt(b.row, b.column, 1)) this.moveCursorTo(b.end.row, b.end.column);
            else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
            else {
                var c = this.session.getTabSize(),
                    b = this.lead;
                this.session.isTabStop(b) && this.doc.getLine(b.row).slice(b.column, b.column + c).split(" ").length - 1 == c ? this.moveCursorBy(0, c) : this.moveCursorBy(0, 1)
            }
        };
        this.moveCursorLineStart =
            function () {
                var b = this.lead.row,
                    c = this.lead.column,
                    d = this.session.screenToDocumentPosition(this.session.documentToScreenRow(b, c), 0),
                    b = this.session.getDisplayLine(b, null, d.row, d.column).match(/^\s*/);
                b[0].length != c && !this.session.$useEmacsStyleLineStart && (d.column = d.column + b[0].length);
                this.moveCursorToPosition(d)
            };
        this.moveCursorLineEnd = function () {
            var b = this.lead,
                b = this.session.getDocumentLastRowColumnPosition(b.row, b.column);
            if (this.lead.column == b.column) {
                var c = this.session.getLine(b.row);
                if (b.column ==
                    c.length) {
                    c = c.search(/\s+$/);
                    c > 0 && (b.column = c)
                }
            }
            this.moveCursorTo(b.row, b.column)
        };
        this.moveCursorFileEnd = function () {
            var b = this.doc.getLength() - 1,
                c = this.doc.getLine(b).length;
            this.moveCursorTo(b, c)
        };
        this.moveCursorFileStart = function () {
            this.moveCursorTo(0, 0)
        };
        this.moveCursorLongWordRight = function () {
            var b = this.lead.row,
                c = this.lead.column,
                d = this.doc.getLine(b),
                e = d.substring(c);
            this.session.nonTokenRe.lastIndex = 0;
            this.session.tokenRe.lastIndex = 0;
            var f = this.session.getFoldAt(b, c, 1);
            if (f) this.moveCursorTo(f.end.row,
                f.end.column);
            else {
                if (this.session.nonTokenRe.exec(e)) {
                    c = c + this.session.nonTokenRe.lastIndex;
                    this.session.nonTokenRe.lastIndex = 0;
                    e = d.substring(c)
                }
                if (c >= d.length) {
                    this.moveCursorTo(b, d.length);
                    this.moveCursorRight();
                    b < this.doc.getLength() - 1 && this.moveCursorWordRight()
                } else {
                    if (this.session.tokenRe.exec(e)) {
                        c = c + this.session.tokenRe.lastIndex;
                        this.session.tokenRe.lastIndex = 0
                    }
                    this.moveCursorTo(b, c)
                }
            }
        };
        this.moveCursorLongWordLeft = function () {
            var b = this.lead.row,
                c = this.lead.column,
                d;
            if (d = this.session.getFoldAt(b,
                    c, -1)) this.moveCursorTo(d.start.row, d.start.column);
            else {
                d = this.session.getFoldStringAt(b, c, -1);
                d == null && (d = this.doc.getLine(b).substring(0, c));
                d = e.stringReverse(d);
                this.session.nonTokenRe.lastIndex = 0;
                this.session.tokenRe.lastIndex = 0;
                if (this.session.nonTokenRe.exec(d)) {
                    c = c - this.session.nonTokenRe.lastIndex;
                    d = d.slice(this.session.nonTokenRe.lastIndex);
                    this.session.nonTokenRe.lastIndex = 0
                }
                if (c <= 0) {
                    this.moveCursorTo(b, 0);
                    this.moveCursorLeft();
                    b > 0 && this.moveCursorWordLeft()
                } else {
                    if (this.session.tokenRe.exec(d)) {
                        c =
                            c - this.session.tokenRe.lastIndex;
                        this.session.tokenRe.lastIndex = 0
                    }
                    this.moveCursorTo(b, c)
                }
            }
        };
        this.$shortWordEndIndex = function (b) {
            var c = 0,
                d, e = /\s/,
                f = this.session.tokenRe;
            f.lastIndex = 0;
            if (this.session.tokenRe.exec(b)) c = this.session.tokenRe.lastIndex;
            else {
                for (;
                    (d = b[c]) && e.test(d) ;) c++;
                if (c < 1)
                    for (f.lastIndex = 0;
                        (d = b[c]) && !f.test(d) ;) {
                        f.lastIndex = 0;
                        c++;
                        if (e.test(d)) {
                            if (c > 2) {
                                c--;
                                break
                            }
                            for (;
                                (d = b[c]) && e.test(d) ;) c++;
                            if (c > 2) break
                        }
                    }
            }
            return f.lastIndex = 0, c
        };
        this.moveCursorShortWordRight = function () {
            var b = this.lead.row,
                c = this.lead.column,
                d = this.doc.getLine(b),
                e = d.substring(c),
                f = this.session.getFoldAt(b, c, 1);
            if (f) return this.moveCursorTo(f.end.row, f.end.column);
            if (c == d.length) {
                c = this.doc.getLength();
                do {
                    b++;
                    e = this.doc.getLine(b)
                } while (b < c && /^\s*$/.test(e));
                /^\s+/.test(e) || (e = "");
                c = 0
            }
            e = this.$shortWordEndIndex(e);
            this.moveCursorTo(b, c + e)
        };
        this.moveCursorShortWordLeft = function () {
            var b = this.lead.row,
                c = this.lead.column,
                d;
            if (d = this.session.getFoldAt(b, c, -1)) return this.moveCursorTo(d.start.row, d.start.column);
            d = this.session.getLine(b).substring(0,
                c);
            if (c == 0) {
                do {
                    b--;
                    d = this.doc.getLine(b)
                } while (b > 0 && /^\s*$/.test(d));
                c = d.length;
                /\s+$/.test(d) || (d = "")
            }
            d = this.$shortWordEndIndex(e.stringReverse(d));
            return this.moveCursorTo(b, c - d)
        };
        this.moveCursorWordRight = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
        };
        this.moveCursorWordLeft = function () {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
        };
        this.moveCursorBy = function (b, c) {
            var d = this.session.documentToScreenPosition(this.lead.row,
                this.lead.column);
            c === 0 && (this.$desiredColumn ? d.column = this.$desiredColumn : this.$desiredColumn = d.column);
            d = this.session.screenToDocumentPosition(d.row + b, d.column);
            b !== 0 && c === 0 && d.row === this.lead.row && d.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[d.row] && d.row++;
            this.moveCursorTo(d.row, d.column + c, c === 0)
        };
        this.moveCursorToPosition = function (b) {
            this.moveCursorTo(b.row, b.column)
        };
        this.moveCursorTo = function (b, c, d) {
            var e = this.session.getFoldAt(b, c, 1);
            e && (b = e.start.row, c =
                e.start.column);
            this.$keepDesiredColumnOnChange = true;
            this.lead.setPosition(b, c);
            this.$keepDesiredColumnOnChange = false;
            d || (this.$desiredColumn = null)
        };
        this.moveCursorToScreen = function (b, c, d) {
            b = this.session.screenToDocumentPosition(b, c);
            this.moveCursorTo(b.row, b.column, d)
        };
        this.detach = function () {
            this.lead.detach();
            this.anchor.detach();
            this.session = this.doc = null
        };
        this.fromOrientedRange = function (b) {
            this.setSelectionRange(b, b.cursor == b.start);
            this.$desiredColumn = b.desiredColumn || this.$desiredColumn
        };
        this.toOrientedRange =
            function (b) {
                var c = this.getRange();
                return b ? (b.start.column = c.start.column, b.start.row = c.start.row, b.end.column = c.end.column, b.end.row = c.end.row) : b = c, b.cursor = this.isBackwards() ? b.start : b.end, b.desiredColumn = this.$desiredColumn, b
            };
        this.toJSON = function () {
            if (this.rangeCount) var b = this.ranges.map(function (b) {
                var c = b.clone();
                return c.isBackwards = b.cursor == b.start, c
            });
            else {
                b = this.getRange();
                b.isBackwards = this.isBackwards()
            }
            return b
        };
        this.fromJSON = function (b) {
            if (b.start == void 0) {
                if (this.rangeList) {
                    this.toSingleRange(b[0]);
                    for (var c = b.length; c--;) {
                        var d = g.fromPoints(b[c].start, b[c].end);
                        b.isBackwards && (d.cursor = d.start);
                        this.addRange(d, true)
                    }
                    return
                }
                b = b[0]
            }
            this.rangeList && this.toSingleRange(b);
            this.setSelectionRange(b, b.isBackwards)
        };
        this.isEqual = function (b) {
            if ((b.length || this.rangeCount) && b.length != this.rangeCount) return false;
            if (!b.length || !this.ranges) return this.getRange().isEqual(b);
            for (var c = this.ranges.length; c--;)
                if (!this.ranges[c].isEqual(b[c])) return false;
            return true
        }
    }).call(h.prototype);
    c.Selection = h
});
ace.define("ace/range", ["require", "exports", "module"], function (b, c) {
    var d = function (b, c, d, h) {
        this.start = {
            row: b,
            column: c
        };
        this.end = {
            row: d,
            column: h
        }
    };
    (function () {
        this.isEqual = function (b) {
            return this.start.row === b.start.row && this.end.row === b.end.row && this.start.column === b.start.column && this.end.column === b.end.column
        };
        this.toString = function () {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
        };
        this.contains = function (b, c) {
            return 0 == this.compare(b, c)
        };
        this.compareRange =
            function (b) {
                var c, d = b.end,
                    b = b.start;
                return c = this.compare(d.row, d.column), 1 == c ? (c = this.compare(b.row, b.column), 1 == c ? 2 : 0 == c ? 1 : 0) : -1 == c ? -2 : (c = this.compare(b.row, b.column), -1 == c ? -1 : 1 == c ? 42 : 0)
            };
        this.comparePoint = function (b) {
            return this.compare(b.row, b.column)
        };
        this.containsRange = function (b) {
            return 0 == this.comparePoint(b.start) && 0 == this.comparePoint(b.end)
        };
        this.intersects = function (b) {
            b = this.compareRange(b);
            return -1 == b || 0 == b || 1 == b
        };
        this.isEnd = function (b, c) {
            return this.end.row == b && this.end.column == c
        };
        this.isStart =
            function (b, c) {
                return this.start.row == b && this.start.column == c
            };
        this.setStart = function (b, c) {
            "object" == typeof b ? (this.start.column = b.column, this.start.row = b.row) : (this.start.row = b, this.start.column = c)
        };
        this.setEnd = function (b, c) {
            "object" == typeof b ? (this.end.column = b.column, this.end.row = b.row) : (this.end.row = b, this.end.column = c)
        };
        this.inside = function (b, c) {
            return 0 == this.compare(b, c) ? this.isEnd(b, c) || this.isStart(b, c) ? !1 : !0 : !1
        };
        this.insideStart = function (b, c) {
            return 0 == this.compare(b, c) ? this.isEnd(b, c) ? !1 :
                !0 : !1
        };
        this.insideEnd = function (b, c) {
            return 0 == this.compare(b, c) ? this.isStart(b, c) ? !1 : !0 : !1
        };
        this.compare = function (b, c) {
            return !this.isMultiLine() && b === this.start.row ? c < this.start.column ? -1 : c > this.end.column ? 1 : 0 : b < this.start.row ? -1 : b > this.end.row ? 1 : this.start.row === b ? c >= this.start.column ? 0 : -1 : this.end.row === b ? c <= this.end.column ? 0 : 1 : 0
        };
        this.compareStart = function (b, c) {
            return this.start.row == b && this.start.column == c ? -1 : this.compare(b, c)
        };
        this.compareEnd = function (b, c) {
            return this.end.row == b && this.end.column ==
                c ? 1 : this.compare(b, c)
        };
        this.compareInside = function (b, c) {
            return this.end.row == b && this.end.column == c ? 1 : this.start.row == b && this.start.column == c ? -1 : this.compare(b, c)
        };
        this.clipRows = function (b, c) {
            if (this.end.row > c) var g = {
                row: c + 1,
                column: 0
            };
            else this.end.row < b && (g = {
                row: b,
                column: 0
            });
            if (this.start.row > c) var h = {
                row: c + 1,
                column: 0
            };
            else this.start.row < b && (h = {
                row: b,
                column: 0
            });
            return d.fromPoints(h || this.start, g || this.end)
        };
        this.extend = function (b, c) {
            var g = this.compare(b, c);
            if (0 == g) return this;
            if (-1 == g) var h = {
                row: b,
                column: c
            };
            else var j = {
                row: b,
                column: c
            };
            return d.fromPoints(h || this.start, j || this.end)
        };
        this.isEmpty = function () {
            return this.start.row === this.end.row && this.start.column === this.end.column
        };
        this.isMultiLine = function () {
            return this.start.row !== this.end.row
        };
        this.clone = function () {
            return d.fromPoints(this.start, this.end)
        };
        this.collapseRows = function () {
            return 0 == this.end.column ? new d(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new d(this.start.row, 0, this.end.row, 0)
        };
        this.toScreenRange = function (b) {
            var c =
                b.documentToScreenPosition(this.start),
                b = b.documentToScreenPosition(this.end);
            return new d(c.row, c.column, b.row, b.column)
        };
        this.moveBy = function (b, c) {
            this.start.row += b;
            this.start.column += c;
            this.end.row += b;
            this.end.column += c
        }
    }).call(d.prototype);
    d.fromPoints = function (b, c) {
        return new d(b.row, b.column, c.row, c.column)
    };
    d.comparePoints = function (b, c) {
        return b.row - c.row || b.column - c.column
    };
    d.comparePoints = function (b, c) {
        return b.row - c.row || b.column - c.column
    };
    c.Range = d
});
ace.define("ace/mode/text", "require exports module ace/tokenizer ace/mode/text_highlight_rules ace/mode/behaviour ace/unicode ace/lib/lang ace/token_iterator ace/range".split(" "), function (b, c) {
    var d = b("../tokenizer").Tokenizer,
        e = b("./text_highlight_rules").TextHighlightRules,
        f = b("./behaviour").Behaviour,
        g = b("../unicode"),
        h = b("../lib/lang"),
        j = b("../token_iterator").TokenIterator,
        k = b("../range").Range,
        l = function () {
            this.HighlightRules = e;
            this.$behaviour = new f
        };
    (function () {
        this.tokenRe = RegExp("^[" + g.packages.L +
            g.packages.Mn + g.packages.Mc + g.packages.Nd + g.packages.Pc + "\\$_]+", "g");
        this.nonTokenRe = RegExp("^(?:[^" + g.packages.L + g.packages.Mn + g.packages.Mc + g.packages.Nd + g.packages.Pc + "\\$_]|s])+", "g");
        this.getTokenizer = function () {
            return this.$tokenizer || (this.$highlightRules = new this.HighlightRules, this.$tokenizer = new d(this.$highlightRules.getRules())), this.$tokenizer
        };
        this.blockComment = this.lineCommentStart = "";
        this.toggleCommentLines = function (b, c, d, e) {
            function f(b) {
                for (var c = d; c <= e; c++) b(g.getLine(c), c)
            }
            var g =
                c.doc,
                j = true,
                k = true,
                l = Infinity,
                w = c.getTabSize(),
                b = false;
            if (this.lineCommentStart) {
                if (Array.isArray(this.lineCommentStart)) {
                    z = this.lineCommentStart.map(h.escapeRegExp).join("|");
                    P = this.lineCommentStart[0]
                } else {
                    z = h.escapeRegExp(this.lineCommentStart);
                    P = this.lineCommentStart
                }
                var z = RegExp("^(\\s*)(?:" + z + ") ?"),
                    b = c.getUseSoftTabs(),
                    A = function (b, c) {
                        var d = b.match(z);
                        if (d) {
                            var e = d[1].length,
                                f = d[0].length;
                            !K(b, e, f) && d[0][f - 1] == " " && f--;
                            g.removeInLine(c, e, f)
                        }
                    },
                    C = P + " ",
                    G = function (b, c) {
                        if (!j || /\S/.test(b)) K(b,
                            l, l) ? g.insertInLine({
                                row: c,
                                column: l
                            }, C) : g.insertInLine({
                                row: c,
                                column: l
                            }, P)
                    },
                    H = function (b) {
                        return z.test(b)
                    },
                    K = function (b, c, d) {
                        for (var e = 0; c-- && b.charAt(c) == " ";) e++;
                        if (e % w != 0) return false;
                        for (e = 0; b.charAt(d++) == " ";) e++;
                        return w > 2 ? e % w != w - 1 : e % w == 0
                    }
            } else {
                if (!this.blockComment) return false;
                var P = this.blockComment.start,
                    T = this.blockComment.end,
                    z = RegExp("^(\\s*)(?:" + h.escapeRegExp(P) + ")"),
                    D = RegExp("(?:" + h.escapeRegExp(T) + ")\\s*$"),
                    G = function (b, c) {
                        if (!H(b, c) && (!j || /\S/.test(b))) {
                            g.insertInLine({
                                row: c,
                                column: b.length
                            },
                                T);
                            g.insertInLine({
                                row: c,
                                column: l
                            }, P)
                        }
                    },
                    A = function (b, c) {
                        var d;
                        (d = b.match(D)) && g.removeInLine(c, b.length - d[0].length, b.length);
                        (d = b.match(z)) && g.removeInLine(c, d[1].length, d[0].length)
                    },
                    H = function (b, d) {
                        if (z.test(b)) return true;
                        for (var e = c.getTokens(d), f = 0; f < e.length; f++)
                            if (e[f].type === "comment") return true
                    }
            }
            var F = Infinity;
            f(function (b, c) {
                var d = b.search(/\S/);
                d !== -1 ? (d < l && (l = d), k && !H(b, c) && (k = false)) : F > b.length && (F = b.length)
            });
            l == Infinity && (l = F, j = false, k = false);
            b && l % w != 0 && (l = Math.floor(l / w) * w);
            f(k ?
                A : G)
        };
        this.toggleBlockComment = function (b, c, d, e) {
            if (b = this.blockComment) {
                !b.start && b[0] && (b = b[0]);
                var f = new j(c, e.row, e.column),
                    g = f.getCurrentToken(),
                    h = c.selection.toOrientedRange(),
                    l, u;
                if (g && /comment/.test(g.type)) {
                    for (var w, z; g && /comment/.test(g.type) ;) {
                        g = g.value.indexOf(b.start);
                        if (g != -1) {
                            d = f.getCurrentTokenRow();
                            f = f.getCurrentTokenColumn() + g;
                            w = new k(d, f, d, f + b.start.length);
                            break
                        }
                        g = f.stepBackward()
                    }
                    f = new j(c, e.row, e.column);
                    for (g = f.getCurrentToken() ; g && /comment/.test(g.type) ;) {
                        g = g.value.indexOf(b.end);
                        if (g != -1) {
                            d = f.getCurrentTokenRow();
                            f = f.getCurrentTokenColumn() + g;
                            z = new k(d, f, d, f + b.end.length);
                            break
                        }
                        g = f.stepForward()
                    }
                    z && c.remove(z);
                    w && (c.remove(w), l = w.start.row, u = -b.start.length)
                } else {
                    u = b.start.length;
                    l = d.start.row;
                    c.insert(d.end, b.end);
                    c.insert(d.start, b.start)
                }
                h.start.row == l && (h.start.column = h.start.column + u);
                h.end.row == l && (h.end.column = h.end.column + u);
                c.selection.fromOrientedRange(h)
            }
        };
        this.getNextLineIndent = function (b, c) {
            return this.$getIndent(c)
        };
        this.checkOutdent = function () {
            return false
        };
        this.autoOutdent = function () { };
        this.$getIndent = function (b) {
            return b.match(/^\s*/)[0]
        };
        this.createWorker = function () {
            return null
        };
        this.createModeDelegates = function (b) {
            this.$embeds = [];
            this.$modes = {};
            for (var c in b) b[c] && (this.$embeds.push(c), this.$modes[c] = new b[c]);
            var d = ["toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
            for (c = 0; c < d.length; c++) (function (b) {
                var e = d[c],
                    f = b[e];
                b[d[c]] = function () {
                    return this.$delegator(e, arguments, f)
                }
            })(this)
        };
        this.$delegator =
            function (b, c, d) {
                var e = c[0];
                typeof e != "string" && (e = e[0]);
                for (var f = 0; f < this.$embeds.length; f++)
                    if (this.$modes[this.$embeds[f]]) {
                        var g = e.split(this.$embeds[f]);
                        if (!g[0] && g[1]) {
                            c[0] = g[1];
                            d = this.$modes[this.$embeds[f]];
                            return d[b].apply(d, c)
                        }
                    }
                b = d.apply(this, c);
                return d ? b : void 0
            };
        this.transformAction = function (b, c, d, e, f) {
            if (this.$behaviour) {
                var g = this.$behaviour.getBehaviours(),
                    h;
                for (h in g)
                    if (g[h][c]) {
                        var j = g[h][c].apply(this, arguments);
                        if (j) return j
                    }
            }
        };
        this.getKeywords = function (b) {
            if (!this.completionKeywords) {
                var c =
                    this.$tokenizer.rules,
                    d = [],
                    e;
                for (e in c)
                    for (var f = c[e], g = 0, h = f.length; g < h; g++)
                        if (typeof f[g].token == "string") /keyword|support|storage/.test(f[g].token) && d.push(f[g].regex);
                        else if (typeof f[g].token == "object")
                            for (var j = 0, k = f[g].token.length; j < k; j++)
                                if (/keyword|support|storage/.test(f[g].token[j])) {
                                    e = f[g].regex.match(/\(.+?\)/g)[j];
                                    d.push(e.substr(1, e.length - 2))
                                }
                this.completionKeywords = d
            }
            return b ? d.concat(this.$keywordList || []) : this.$keywordList
        };
        this.$createKeywordList = function () {
            return this.$highlightRules ||
                this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
        };
        this.getCompletions = function () {
            return (this.$keywordList || this.$createKeywordList()).map(function (b) {
                return {
                    name: b,
                    value: b,
                    score: 0,
                    meta: "keyword"
                }
            })
        };
        this.$id = "ace/mode/text"
    }).call(l.prototype);
    c.Mode = l
});
ace.define("ace/tokenizer", ["require", "exports", "module"], function (b, c) {
    var d = 1E3,
        e = function (b) {
            this.states = b;
            this.regExps = {};
            this.matchMappings = {};
            for (var c in this.states) {
                for (var b = this.states[c], d = [], e = 0, k = this.matchMappings[c] = {
                    defaultToken: "text"
                }, l = "g", m = [], n = 0; n < b.length; n++) {
                    var q = b[n];
                    q.defaultToken && (k.defaultToken = q.defaultToken);
                    q.caseInsensitive && (l = "gi");
                    if (null != q.regex) {
                        q.regex instanceof RegExp && (q.regex = q.regex.toString().slice(1, -1));
                        var p = q.regex,
                            s = RegExp("(?:(" + p + ")|(.))").exec("a").length -
                            2;
                        if (Array.isArray(q.token))
                            if (1 == q.token.length || 1 == s) q.token = q.token[0];
                            else {
                                if (s - 1 != q.token.length) throw Error("number of classes and regexp groups in '" + q.token + "'\n'" + q.regex + "' doesn't match\n" + (s - 1) + "!=" + q.token.length);
                                q.tokenArray = q.token;
                                q.token = null;
                                q.onMatch = this.$arrayTokens
                            }
                        else "function" == typeof q.token && !q.onMatch && (1 < s ? q.onMatch = this.$applyToken : q.onMatch = q.token);
                        1 < s && (/\\\d/.test(q.regex) ? p = q.regex.replace(/\\([0-9]+)/g, function (b, c) {
                            return "\\" + (parseInt(c, 10) + e + 1)
                        }) : (s = 1, p = this.removeCapturingGroups(q.regex)), !q.splitRegex && "string" != typeof q.token && m.push(q));
                        k[e] = n;
                        e += s;
                        d.push(p);
                        q.onMatch || (q.onMatch = null);
                        q.__proto__ = null
                    }
                }
                m.forEach(function (b) {
                    b.splitRegex = this.createSplitterRegexp(b.regex, l)
                }, this);
                this.regExps[c] = RegExp("(" + d.join(")|(") + ")|($)", l)
            }
        };
    (function () {
        this.$setMaxTokenCount = function (b) {
            d = b | 0
        };
        this.$applyToken = function (b) {
            var c = this.splitRegex.exec(b).slice(1),
                d = this.token.apply(this, c);
            if ("string" == typeof d) return [{
                type: d,
                value: b
            }];
            for (var b = [], e = 0, k = d.length; e < k; e++) c[e] && (b[b.length] = {
                type: d[e],
                value: c[e]
            });
            return b
        };
        this.$arrayTokens = function (b) {
            if (!b) return [];
            b = this.splitRegex.exec(b);
            if (!b) return "text";
            for (var c = [], d = this.tokenArray, e = 0, k = d.length; e < k; e++) b[e + 1] && (c[c.length] = {
                type: d[e],
                value: b[e + 1]
            });
            return c
        };
        this.removeCapturingGroups = function (b) {
            return b.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function (b, c) {
                return c ? "(?:" : b
            })
        };
        this.createSplitterRegexp = function (b, c) {
            if (-1 != b.indexOf("(?=")) {
                var d = 0,
                    e = !1,
                    k, l, m;
                b.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (b,
                    c, f, g, r, o) {
                    return e ? e = "]" != r : r ? e = !0 : g ? (d == k && (l = o + 1, k = -1), d--) : f && (d++, 1 != f.length && (k = d, m = o)), b
                });
                null != l && /^\)*$/.test(b.substr(l)) && (b = b.substring(0, m) + b.substr(l))
            }
            return RegExp(b, (c || "").replace("g", ""))
        };
        this.getLineTokens = function (b, c) {
            if (c && "string" != typeof c) var e = c.slice(0),
                c = e[0];
            else e = [];
            var j = c || "start",
                k = this.states[j];
            k || (j = "start", k = this.states[j]);
            var l = this.matchMappings[j],
                m = this.regExps[j];
            m.lastIndex = 0;
            for (var n, q = [], p = 0, s = {
                type: null,
                value: ""
            }; n = m.exec(b) ;) {
                var r = l.defaultToken,
                    o = null,
                    t = n[0],
                    u = m.lastIndex;
                if (u - t.length > p) {
                    var w = b.substring(p, u - t.length);
                    s.type == r ? s.value += w : (s.type && q.push(s), s = {
                        type: r,
                        value: w
                    })
                }
                for (w = 0; w < n.length - 2; w++)
                    if (void 0 !== n[w + 1]) {
                        o = k[l[w]];
                        o.onMatch ? r = o.onMatch(t, j, e) : r = o.token;
                        o.next && ("string" == typeof o.next ? j = o.next : j = o.next(j, e), k = this.states[j], k || (window.console && console.error && console.error(j, "doesn't exist"), j = "start", k = this.states[j]), l = this.matchMappings[j], p = u, m = this.regExps[j], m.lastIndex = u);
                        break
                    }
                if (t)
                    if ("string" == typeof r) o && !1 ===
                        o.merge || s.type !== r ? (s.type && q.push(s), s = {
                            type: r,
                            value: t
                        }) : s.value += t;
                    else if (r) {
                        s.type && q.push(s);
                        s = {
                            type: null,
                            value: ""
                        };
                        for (w = 0; w < r.length; w++) q.push(r[w])
                    }
                if (p == b.length) break;
                p = u;
                if (q.length > d) {
                    for (; p < b.length;) s.type && q.push(s), s = {
                        value: b.substring(p, p += 2E3),
                        type: "overflow"
                    };
                    j = "start";
                    e = [];
                    break
                }
            }
            return s.type && q.push(s), 1 < e.length && e[0] !== j && e.unshift(j), {
                tokens: q,
                state: e.length ? e : j
            }
        }
    }).call(e.prototype);
    c.Tokenizer = e
});
ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function (b, c) {
    var d = b("../lib/lang"),
        e = function () {
            this.$rules = {
                start: [{
                    token: "empty_line",
                    regex: "^$"
                }, {
                    defaultToken: "text"
                }]
            }
        };
    (function () {
        this.addRules = function (b, c) {
            if (c)
                for (g in b) {
                    for (var d = b[g], e = 0; e < d.length; e++) {
                        var f = d[e];
                        f.next && ("string" != typeof f.next ? f.nextState && 0 !== f.nextState.indexOf(c) && (f.nextState = c + f.nextState) : 0 !== f.next.indexOf(c) && (f.next = c + f.next))
                    }
                    this.$rules[c + g] = d
                } else
                for (var g in b) this.$rules[g] =
                    b[g]
        };
        this.getRules = function () {
            return this.$rules
        };
        this.embedRules = function (b, c, e, f, g) {
            b = (new b).getRules();
            if (f)
                for (var n = 0; n < f.length; n++) f[n] = c + f[n];
            else
                for (n in f = [], b) f.push(c + n);
            this.addRules(b, c);
            if (e) {
                g = Array.prototype[g ? "push" : "unshift"];
                for (n = 0; n < f.length; n++) g.apply(this.$rules[f[n]], d.deepCopy(e))
            }
            this.$embeds || (this.$embeds = []);
            this.$embeds.push(c)
        };
        this.getEmbeds = function () {
            return this.$embeds
        };
        var b = function (b, c) {
            return "start" != b && c.unshift(this.nextState, b), this.nextState
        },
            c = function (b,
                c) {
                return c[0] !== b ? "start" : (c.shift(), c.shift())
            };
        this.normalizeRules = function () {
            function d(l) {
                l = k[l];
                l.processed = !0;
                for (var m = 0; m < l.length; m++) {
                    var n = l[m];
                    !n.regex && n.start && (n.regex = n.start, n.next || (n.next = []), n.next.push({
                        defaultToken: n.token
                    }, {
                        token: n.token + ".end",
                        regex: n.end || n.start,
                        next: "pop"
                    }), n.token += ".start", n.push = !0);
                    var q = n.next || n.push;
                    if (q && Array.isArray(q)) {
                        var p = n.stateName;
                        p || (p = n.token, "string" != typeof p && (p = p[0] || ""), k[p] && (p += e++));
                        k[p] = q;
                        n.next = p;
                        d(p)
                    } else "pop" == q && (n.next =
                        c);
                    n.push && (n.nextState = n.next || n.push, n.next = b, delete n.push);
                    if (n.rules)
                        for (var s in n.rules) k[s] ? k[s].push && k[s].push.apply(k[s], n.rules[s]) : k[s] = n.rules[s];
                    if (n.include || "string" == typeof n) var r = k[n.include || n];
                    else Array.isArray(n) && (r = n);
                    r && (r = [m, 1].concat(r), n.noEscape && (r = r.filter(function (b) {
                        return !b.next
                    })), l.splice.apply(l, r), m--, r = null);
                    n.keywordMap && (n.token = this.createKeywordMapper(n.keywordMap, n.defaultToken || "text", n.caseInsensitive), delete n.defaultToken)
                }
            }
            var e = 0,
                k = this.$rules;
            Object.keys(k).forEach(d,
                this)
        };
        this.createKeywordMapper = function (b, c, d, e) {
            var f = Object.create(null);
            return Object.keys(b).forEach(function (c) {
                var g = b[c];
                d && (g = g.toLowerCase());
                for (var g = g.split(e || "|"), j = g.length; j--;) f[g[j]] = c
            }), Object.getPrototypeOf(f) && (f.__proto__ = null), this.$keywordList = Object.keys(f), b = null, d ? function (b) {
                return f[b.toLowerCase()] || c
            } : function (b) {
                return f[b] || c
            }
        };
        this.getKeywords = function () {
            return this.$keywords
        }
    }).call(e.prototype);
    c.TextHighlightRules = e
});
ace.define("ace/mode/behaviour", ["require", "exports", "module"], function (b, c) {
    var d = function () {
        this.$behaviours = {}
    };
    (function () {
        this.add = function (b, c, d) {
            switch (void 0) {
                case this.$behaviours:
                    this.$behaviours = {};
                case this.$behaviours[b]:
                    this.$behaviours[b] = {}
            }
            this.$behaviours[b][c] = d
        };
        this.addBehaviours = function (b) {
            for (var c in b)
                for (var d in b[c]) this.add(c, d, b[c][d])
        };
        this.remove = function (b) {
            this.$behaviours && this.$behaviours[b] && delete this.$behaviours[b]
        };
        this.inherit = function (b, c) {
            this.addBehaviours("function" ==
                typeof b ? (new b).getBehaviours(c) : b.getBehaviours(c))
        };
        this.getBehaviours = function (b) {
            if (!b) return this.$behaviours;
            for (var c = {}, d = 0; d < b.length; d++) this.$behaviours[b[d]] && (c[b[d]] = this.$behaviours[b[d]]);
            return c
        }
    }).call(d.prototype);
    c.Behaviour = d
});
ace.define("ace/unicode", ["require", "exports", "module"], function (b, c) {
    c.packages = {};
    var d = {
        L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
        Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
        Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
        Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
        Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
        Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
        Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
        Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
        N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
        No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
        P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
        Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
        Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
        Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
        Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
        Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
        Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
        Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
        S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
        Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
        Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
        Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
        So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
        Z: "002000A01680180E2000-200A20282029202F205F3000",
        Zs: "002000A01680180E2000-200A202F205F3000",
        Zl: "2028",
        Zp: "2029",
        C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
        Cc: "0000-001F007F-009F",
        Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
        Co: "E000-F8FF",
        Cs: "D800-DFFF",
        Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
    },
        e = /\w{4}/g,
        f;
    for (f in d) c.packages[f] = d[f].replace(e, "\\u$&")
});
ace.define("ace/token_iterator", ["require", "exports", "module"], function (b, c) {
    var d = function (b, c, d) {
        this.$session = b;
        this.$row = c;
        this.$rowTokens = b.getTokens(c);
        this.$tokenIndex = (b = b.getTokenAt(c, d)) ? b.index : -1
    };
    (function () {
        this.stepBackward = function () {
            for (this.$tokenIndex -= 1; 0 > this.$tokenIndex;) {
                this.$row -= 1;
                if (0 > this.$row) return this.$row = 0, null;
                this.$rowTokens = this.$session.getTokens(this.$row);
                this.$tokenIndex = this.$rowTokens.length - 1
            }
            return this.$rowTokens[this.$tokenIndex]
        };
        this.stepForward = function () {
            this.$tokenIndex +=
                1;
            for (var b; this.$tokenIndex >= this.$rowTokens.length;) {
                this.$row += 1;
                b || (b = this.$session.getLength());
                if (this.$row >= b) return this.$row = b - 1, null;
                this.$rowTokens = this.$session.getTokens(this.$row);
                this.$tokenIndex = 0
            }
            return this.$rowTokens[this.$tokenIndex]
        };
        this.getCurrentToken = function () {
            return this.$rowTokens[this.$tokenIndex]
        };
        this.getCurrentTokenRow = function () {
            return this.$row
        };
        this.getCurrentTokenColumn = function () {
            var b = this.$rowTokens,
                c = this.$tokenIndex,
                d = b[c].start;
            if (void 0 !== d) return d;
            for (d =
                0; 0 < c;) c -= 1, d += b[c].value.length;
            return d
        }
    }).call(d.prototype);
    c.TokenIterator = d
});
ace.define("ace/document", "require exports module ace/lib/oop ace/lib/event_emitter ace/range ace/anchor".split(" "), function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/event_emitter").EventEmitter,
        f = b("./range").Range,
        g = b("./anchor").Anchor,
        h = function (b) {
            this.$lines = [];
            b.length == 0 ? this.$lines = [""] : Array.isArray(b) ? this._insertLines(0, b) : this.insert({
                row: 0,
                column: 0
            }, b)
        };
    (function () {
        d.implement(this, e);
        this.setValue = function (b) {
            var c = this.getLength();
            this.remove(new f(0, 0, c, this.getLine(c - 1).length));
            this.insert({
                row: 0,
                column: 0
            }, b)
        };
        this.getValue = function () {
            return this.getAllLines().join(this.getNewLineCharacter())
        };
        this.createAnchor = function (b, c) {
            return new g(this, b, c)
        };
        "aaa".split(/a/).length == 0 ? this.$split = function (b) {
            return b.replace(/\r\n|\r/g, "\n").split("\n")
        } : this.$split = function (b) {
            return b.split(/\r\n|\r|\n/)
        };
        this.$detectNewLine = function (b) {
            this.$autoNewLine = (b = b.match(/^.*?(\r\n|\r|\n)/m)) ? b[1] : "\n"
        };
        this.getNewLineCharacter = function () {
            switch (this.$newLineMode) {
                case "windows":
                    return "\r\n";
                case "unix":
                    return "\n";
                default:
                    return this.$autoNewLine
            }
        };
        this.$autoNewLine = "\n";
        this.$newLineMode = "auto";
        this.setNewLineMode = function (b) {
            if (this.$newLineMode !== b) this.$newLineMode = b
        };
        this.getNewLineMode = function () {
            return this.$newLineMode
        };
        this.isNewLine = function (b) {
            return b == "\r\n" || b == "\r" || b == "\n"
        };
        this.getLine = function (b) {
            return this.$lines[b] || ""
        };
        this.getLines = function (b, c) {
            return this.$lines.slice(b, c + 1)
        };
        this.getAllLines = function () {
            return this.getLines(0, this.getLength())
        };
        this.getLength = function () {
            return this.$lines.length
        };
        this.getTextRange = function (b) {
            if (b.start.row == b.end.row) return this.getLine(b.start.row).substring(b.start.column, b.end.column);
            var c = this.getLines(b.start.row, b.end.row);
            c[0] = (c[0] || "").substring(b.start.column);
            var d = c.length - 1;
            return b.end.row - b.start.row == d && (c[d] = c[d].substring(0, b.end.column)), c.join(this.getNewLineCharacter())
        };
        this.$clipPosition = function (b) {
            var c = this.getLength();
            return b.row >= c ? (b.row = Math.max(0, c - 1), b.column = this.getLine(c - 1).length) : b.row < 0 && (b.row = 0), b
        };
        this.insert = function (b,
            c) {
            if (!c || c.length === 0) return b;
            b = this.$clipPosition(b);
            this.getLength() <= 1 && this.$detectNewLine(c);
            var d = this.$split(c),
                e = d.splice(0, 1)[0],
                f = d.length == 0 ? null : d.splice(d.length - 1, 1)[0];
            return b = this.insertInLine(b, e), f !== null && (b = this.insertNewLine(b), b = this._insertLines(b.row, d), b = this.insertInLine(b, f || "")), b
        };
        this.insertLines = function (b, c) {
            return b >= this.getLength() ? this.insert({
                row: b,
                column: 0
            }, "\n" + c.join("\n")) : this._insertLines(Math.max(b, 0), c)
        };
        this._insertLines = function (b, c) {
            if (c.length ==
                0) return {
                    row: b,
                    column: 0
                };
            if (c.length > 65535) var d = this._insertLines(b, c.slice(65535)),
                c = c.slice(0, 65535);
            var e = [b, 0];
            e.push.apply(e, c);
            this.$lines.splice.apply(this.$lines, e);
            e = new f(b, 0, b + c.length, 0);
            return this._emit("change", {
                data: {
                    action: "insertLines",
                    range: e,
                    lines: c
                }
            }), d || e.end
        };
        this.insertNewLine = function (b) {
            var b = this.$clipPosition(b),
                c = this.$lines[b.row] || "";
            this.$lines[b.row] = c.substring(0, b.column);
            this.$lines.splice(b.row + 1, 0, c.substring(b.column, c.length));
            c = {
                row: b.row + 1,
                column: 0
            };
            return this._emit("change", {
                data: {
                    action: "insertText",
                    range: f.fromPoints(b, c),
                    text: this.getNewLineCharacter()
                }
            }), c
        };
        this.insertInLine = function (b, c) {
            if (c.length == 0) return b;
            var d = this.$lines[b.row] || "";
            this.$lines[b.row] = d.substring(0, b.column) + c + d.substring(b.column);
            d = {
                row: b.row,
                column: b.column + c.length
            };
            return this._emit("change", {
                data: {
                    action: "insertText",
                    range: f.fromPoints(b, d),
                    text: c
                }
            }), d
        };
        this.remove = function (b) {
            !b instanceof f && (b = f.fromPoints(b.start, b.end));
            b.start = this.$clipPosition(b.start);
            b.end = this.$clipPosition(b.end);
            if (b.isEmpty()) return b.start;
            var c = b.start.row,
                d = b.end.row;
            if (b.isMultiLine()) {
                var e = b.start.column == 0 ? c : c + 1,
                    g = d - 1;
                b.end.column > 0 && this.removeInLine(d, 0, b.end.column);
                g >= e && this._removeLines(e, g);
                e != c && (this.removeInLine(c, b.start.column, this.getLine(c).length), this.removeNewLine(b.start.row))
            } else this.removeInLine(c, b.start.column, b.end.column);
            return b.start
        };
        this.removeInLine = function (b, c, d) {
            if (c != d) {
                var e = new f(b, c, b, d),
                    g = this.getLine(b),
                    h = g.substring(c, d),
                    c = g.substring(0, c) + g.substring(d, g.length);
                this.$lines.splice(b, 1, c);
                return this._emit("change", {
                    data: {
                        action: "removeText",
                        range: e,
                        text: h
                    }
                }), e.start
            }
        };
        this.removeLines = function (b, c) {
            return b < 0 || c >= this.getLength() ? this.remove(new f(b, 0, c + 1, 0)) : this._removeLines(b, c)
        };
        this._removeLines = function (b, c) {
            var d = new f(b, 0, c + 1, 0),
                e = this.$lines.splice(b, c - b + 1);
            return this._emit("change", {
                data: {
                    action: "removeLines",
                    range: d,
                    nl: this.getNewLineCharacter(),
                    lines: e
                }
            }), e
        };
        this.removeNewLine = function (b) {
            var c = this.getLine(b),
                d = this.getLine(b + 1),
                e = new f(b, c.length,
                    b + 1, 0);
            this.$lines.splice(b, 2, c + d);
            this._emit("change", {
                data: {
                    action: "removeText",
                    range: e,
                    text: this.getNewLineCharacter()
                }
            })
        };
        this.replace = function (b, c) {
            !b instanceof f && (b = f.fromPoints(b.start, b.end));
            if (c.length == 0 && b.isEmpty()) return b.start;
            if (c == this.getTextRange(b)) return b.end;
            this.remove(b);
            return c ? this.insert(b.start, c) : b.start
        };
        this.applyDeltas = function (b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = f.fromPoints(d.range.start, d.range.end);
                d.action == "insertLines" ? this.insertLines(e.start.row,
                    d.lines) : d.action == "insertText" ? this.insert(e.start, d.text) : d.action == "removeLines" ? this._removeLines(e.start.row, e.end.row - 1) : d.action == "removeText" && this.remove(e)
            }
        };
        this.revertDeltas = function (b) {
            for (var c = b.length - 1; c >= 0; c--) {
                var d = b[c],
                    e = f.fromPoints(d.range.start, d.range.end);
                d.action == "insertLines" ? this._removeLines(e.start.row, e.end.row - 1) : d.action == "insertText" ? this.remove(e) : d.action == "removeLines" ? this._insertLines(e.start.row, d.lines) : d.action == "removeText" && this.insert(e.start, d.text)
            }
        };
        this.indexToPosition = function (b, c) {
            for (var d = this.$lines || this.getAllLines(), e = this.getNewLineCharacter().length, f = c || 0, g = d.length; f < g; f++) {
                b = b - (d[f].length + e);
                if (b < 0) return {
                    row: f,
                    column: b + d[f].length + e
                }
            }
            return {
                row: g - 1,
                column: d[g - 1].length
            }
        };
        this.positionToIndex = function (b, c) {
            for (var d = this.$lines || this.getAllLines(), e = this.getNewLineCharacter().length, f = 0, g = Math.min(b.row, d.length), h = c || 0; h < g; ++h) f = f + (d[h].length + e);
            return f + b.column
        }
    }).call(h.prototype);
    c.Document = h
});
ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/event_emitter").EventEmitter;
    (function () {
        d.implement(this, e);
        this.getPosition = function () {
            return this.$clipPositionToDocument(this.row, this.column)
        };
        this.getDocument = function () {
            return this.document
        };
        this.$insertRight = !1;
        this.onChange = function (b) {
            var b = b.data,
                c = b.range;
            if (!(c.start.row == c.end.row && c.start.row != this.row) && !(c.start.row > this.row) && !(c.start.row == this.row &&
                    c.start.column > this.column)) {
                var d = this.row,
                    e = this.column,
                    k = c.start,
                    c = c.end;
                if ("insertText" === b.action)
                    if (k.row === d && k.column <= e) {
                        if (k.column !== e || !this.$insertRight) k.row === c.row ? e += c.column - k.column : (e -= k.column, d += c.row - k.row)
                    } else k.row !== c.row && k.row < d && (d += c.row - k.row);
                else "insertLines" === b.action ? k.row <= d && (d += c.row - k.row) : "removeText" === b.action ? k.row === d && k.column < e ? c.column >= e ? e = k.column : e = Math.max(0, e - (c.column - k.column)) : k.row !== c.row && k.row < d ? (c.row === d && (e = Math.max(0, e - c.column) + k.column),
                    d -= c.row - k.row) : c.row === d && (d -= c.row - k.row, e = Math.max(0, e - c.column) + k.column) : "removeLines" == b.action && k.row <= d && (c.row <= d ? d -= c.row - k.row : (d = k.row, e = 0));
                this.setPosition(d, e, !0)
            }
        };
        this.setPosition = function (b, c, d) {
            var e;
            d ? e = {
                row: b,
                column: c
            } : e = this.$clipPositionToDocument(b, c);
            this.row == e.row && this.column == e.column || (b = {
                row: this.row,
                column: this.column
            }, this.row = e.row, this.column = e.column, this._emit("change", {
                old: b,
                value: e
            }))
        };
        this.detach = function () {
            this.document.removeEventListener("change", this.$onChange)
        };
        this.attach = function (b) {
            this.document = b || this.document;
            this.document.on("change", this.$onChange)
        };
        this.$clipPositionToDocument = function (b, c) {
            var d = {};
            return b >= this.document.getLength() ? (d.row = Math.max(0, this.document.getLength() - 1), d.column = this.document.getLine(d.row).length) : 0 > b ? (d.row = 0, d.column = 0) : (d.row = b, d.column = Math.min(this.document.getLine(d.row).length, Math.max(0, c))), 0 > c && (d.column = 0), d
        }
    }).call((c.Anchor = function (b, c, d) {
        this.$onChange = this.onChange.bind(this);
        this.attach(b);
        "undefined" ==
        typeof d ? this.setPosition(c.row, c.column) : this.setPosition(c, d)
    }).prototype)
});
ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/event_emitter").EventEmitter,
        f = function (b) {
            this.running = !1;
            this.lines = [];
            this.states = [];
            this.currentLine = 0;
            this.tokenizer = b;
            var c = this;
            this.$worker = function () {
                if (c.running) {
                    for (var b = new Date, d = c.currentLine, e = -1, f = c.doc; c.lines[d];) d++;
                    var g = d,
                        f = f.getLength(),
                        q = 0;
                    for (c.running = !1; d < f;) {
                        c.$tokenizeRow(d);
                        e = d;
                        do d++; while (c.lines[d]);
                        q++;
                        if (0 == q % 5 &&
                            20 < new Date - b) {
                            c.running = setTimeout(c.$worker, 20);
                            c.currentLine = d;
                            return
                        }
                    }
                    c.currentLine = d;
                    g <= e && c.fireUpdateEvent(g, e)
                }
            }
        };
    (function () {
        d.implement(this, e);
        this.setTokenizer = function (b) {
            this.tokenizer = b;
            this.lines = [];
            this.states = [];
            this.start(0)
        };
        this.setDocument = function (b) {
            this.doc = b;
            this.lines = [];
            this.states = [];
            this.stop()
        };
        this.fireUpdateEvent = function (b, c) {
            this._emit("update", {
                data: {
                    first: b,
                    last: c
                }
            })
        };
        this.start = function (b) {
            this.currentLine = Math.min(b || 0, this.currentLine, this.doc.getLength());
            this.lines.splice(this.currentLine, this.lines.length);
            this.states.splice(this.currentLine, this.states.length);
            this.stop();
            this.running = setTimeout(this.$worker, 700)
        };
        this.scheduleStart = function () {
            this.running || (this.running = setTimeout(this.$worker, 700))
        };
        this.$updateOnChange = function (b) {
            var c = b.range,
                d = c.start.row,
                c = c.end.row - d;
            0 === c ? this.lines[d] = null : "removeText" == b.action || "removeLines" == b.action ? (this.lines.splice(d, c + 1, null), this.states.splice(d, c + 1, null)) : (b = Array(c + 1), b.unshift(d, 1), this.lines.splice.apply(this.lines,
                b), this.states.splice.apply(this.states, b));
            this.currentLine = Math.min(d, this.currentLine, this.doc.getLength());
            this.stop()
        };
        this.stop = function () {
            this.running && clearTimeout(this.running);
            this.running = !1
        };
        this.getTokens = function (b) {
            return this.lines[b] || this.$tokenizeRow(b)
        };
        this.getState = function (b) {
            return this.currentLine == b && this.$tokenizeRow(b), this.states[b] || "start"
        };
        this.$tokenizeRow = function (b) {
            var c = this.tokenizer.getLineTokens(this.doc.getLine(b), this.states[b - 1], b);
            return this.states[b] +
                "" != c.state + "" ? (this.states[b] = c.state, this.lines[b + 1] = null, this.currentLine > b + 1 && (this.currentLine = b + 1)) : this.currentLine == b && (this.currentLine = b + 1), this.lines[b] = c.tokens
        }
    }).call(f.prototype);
    c.BackgroundTokenizer = f
});
ace.define("ace/search_highlight", "require exports module ace/lib/lang ace/lib/oop ace/range".split(" "), function (b, c) {
    var d = b("./lib/lang");
    b("./lib/oop");
    var e = b("./range").Range,
        f = function (b, c, d) {
            this.setRegexp(b);
            this.clazz = c;
            this.type = d || "text"
        };
    (function () {
        this.MAX_RANGES = 500;
        this.setRegexp = function (b) {
            if (this.regExp + "" != b + "") {
                this.regExp = b;
                this.cache = []
            }
        };
        this.update = function (b, c, f, k) {
            if (this.regExp)
                for (var l = k.lastRow, m = k.firstRow; m <= l; m++) {
                    var n = this.cache[m];
                    n == null && (n = d.getMatchOffsets(f.getLine(m),
                        this.regExp), n.length > this.MAX_RANGES && (n = n.slice(0, this.MAX_RANGES)), n = n.map(function (b) {
                            return new e(m, b.offset, m, b.offset + b.length)
                        }), this.cache[m] = n.length ? n : "");
                    for (var q = n.length; q--;) c.drawSingleLineMarker(b, n[q].toScreenRange(f), this.clazz, k)
                }
        }
    }).call(f.prototype);
    c.SearchHighlight = f
});
ace.define("ace/edit_session/folding", "require exports module ace/range ace/edit_session/fold_line ace/edit_session/fold ace/token_iterator".split(" "), function (b, c) {
    var d = b("../range").Range,
        e = b("./fold_line").FoldLine,
        f = b("./fold").Fold,
        g = b("../token_iterator").TokenIterator;
    c.Folding = function () {
        this.getFoldAt = function (b, c, d) {
            var e = this.getFoldLine(b);
            if (!e) return null;
            for (var e = e.folds, f = 0; f < e.length; f++) {
                var g = e[f];
                if (g.range.contains(b, c) && !(d == 1 && g.range.isEnd(b, c)) && !(d == -1 && g.range.isStart(b,
                        c))) return g
            }
        };
        this.getFoldsInRange = function (b) {
            var c = b.start,
                d = b.end,
                e = this.$foldData,
                f = [];
            c.column = c.column + 1;
            d.column = d.column - 1;
            for (var g = 0; g < e.length; g++) {
                var q = e[g].range.compareRange(b);
                if (q != 2) {
                    if (q == -2) break;
                    for (var p = e[g].folds, s = 0; s < p.length; s++) {
                        var r = p[s],
                            q = r.range.compareRange(b);
                        if (q == -2) break;
                        if (q != 2) {
                            if (q == 42) break;
                            f.push(r)
                        }
                    }
                }
            }
            return c.column = c.column - 1, d.column = d.column + 1, f
        };
        this.getFoldsInRangeList = function (b) {
            if (Array.isArray(b)) {
                var c = [];
                b.forEach(function (b) {
                    c = c.concat(this.getFoldsInRange(b))
                },
                    this)
            } else c = this.getFoldsInRange(b);
            return c
        };
        this.getAllFolds = function () {
            for (var b = [], c = this.$foldData, d = 0; d < c.length; d++)
                for (var e = 0; e < c[d].folds.length; e++) b.push(c[d].folds[e]);
            return b
        };
        this.getFoldStringAt = function (b, c, d, e) {
            e = e || this.getFoldLine(b);
            if (!e) return null;
            for (var f = {
                end: {
                column: 0
            }
            }, g, q, p = 0; p < e.folds.length; p++) {
                q = e.folds[p];
                var s = q.range.compareEnd(b, c);
                if (s == -1) {
                    g = this.getLine(q.start.row).substring(f.end.column, q.start.column);
                    break
                }
                if (s === 0) return null;
                f = q
            }
            return g || (g = this.getLine(q.start.row).substring(f.end.column)),
                d == -1 ? g.substring(0, c - f.end.column) : d == 1 ? g.substring(c - f.end.column) : g
        };
        this.getFoldLine = function (b, c) {
            var d = this.$foldData,
                e = 0;
            c && (e = d.indexOf(c));
            e == -1 && (e = 0);
            for (e; e < d.length; e++) {
                var f = d[e];
                if (f.start.row <= b && f.end.row >= b) return f;
                if (f.end.row > b) break
            }
            return null
        };
        this.getNextFoldLine = function (b, c) {
            var d = this.$foldData,
                e = 0;
            c && (e = d.indexOf(c));
            e == -1 && (e = 0);
            for (e; e < d.length; e++) {
                var f = d[e];
                if (f.end.row >= b) return f
            }
            return null
        };
        this.getFoldedRowCount = function (b, c) {
            for (var d = this.$foldData, e = c - b +
                    1, f = 0; f < d.length; f++) {
                var g = d[f],
                    q = g.end.row,
                    g = g.start.row;
                if (q >= c) {
                    g < c && (g >= b ? e = e - (c - g) : e = 0);
                    break
                }
                q >= b && (g >= b ? e = e - (q - g) : e = e - (q - b + 1))
            }
            return e
        };
        this.$addFoldLine = function (b) {
            return this.$foldData.push(b), this.$foldData.sort(function (b, c) {
                return b.start.row - c.start.row
            }), b
        };
        this.addFold = function (b, c) {
            var d = this.$foldData,
                g = false,
                m;
            b instanceof f ? m = b : (m = new f(c, b), m.collapseChildren = c.collapseChildren);
            this.$clipRangeToDocument(m.range);
            var n = m.start.row,
                q = m.start.column,
                p = m.end.row,
                s = m.end.column;
            if (n < p || n == p && q <= s - 2) {
                var r = this.getFoldAt(n, q, 1),
                    o = this.getFoldAt(p, s, -1);
                if (r && o == r) return r.addSubFold(m);
                if (r && !r.range.isStart(n, q) || o && !o.range.isEnd(p, s)) throw Error("A fold can't intersect already existing fold" + m.range + r.range);
                q = this.getFoldsInRange(m.range);
                q.length > 0 && (this.removeFolds(q), q.forEach(function (b) {
                    m.addSubFold(b)
                }));
                for (q = 0; q < d.length; q++) {
                    var t = d[q];
                    if (p == t.start.row) {
                        t.addFold(m);
                        g = true;
                        break
                    }
                    if (n == t.end.row) {
                        t.addFold(m);
                        g = true;
                        if (!m.sameRow)
                            if ((d = d[q + 1]) && d.start.row ==
                                p) {
                                t.merge(d);
                                break
                            }
                        break
                    }
                    if (p <= t.start.row) break
                }
                return g || (t = this.$addFoldLine(new e(this.$foldData, m))), this.$useWrapMode ? this.$updateWrapData(t.start.row, t.start.row) : this.$updateRowLengthCache(t.start.row, t.start.row), this.$modified = true, this._emit("changeFold", {
                    data: m,
                    action: "add"
                }), m
            }
            throw Error("The range has to be at least 2 characters width");
        };
        this.addFolds = function (b) {
            b.forEach(function (b) {
                this.addFold(b)
            }, this)
        };
        this.removeFold = function (b) {
            var c = b.foldLine,
                d = c.start.row,
                e = c.end.row,
                f =
                this.$foldData,
                g = c.folds;
            if (g.length == 1) f.splice(f.indexOf(c), 1);
            else if (c.range.isEnd(b.end.row, b.end.column)) {
                g.pop();
                c.end.row = g[g.length - 1].end.row;
                c.end.column = g[g.length - 1].end.column
            } else if (c.range.isStart(b.start.row, b.start.column)) {
                g.shift();
                c.start.row = g[0].start.row;
                c.start.column = g[0].start.column
            } else if (b.sameRow) g.splice(g.indexOf(b), 1);
            else {
                c = c.split(b.start.row, b.start.column);
                g = c.folds;
                g.shift();
                c.start.row = g[0].start.row;
                c.start.column = g[0].start.column
            }
            this.$updating || (this.$useWrapMode ?
                this.$updateWrapData(d, e) : this.$updateRowLengthCache(d, e));
            this.$modified = true;
            this._emit("changeFold", {
                data: b,
                action: "remove"
            })
        };
        this.removeFolds = function (b) {
            for (var c = [], d = 0; d < b.length; d++) c.push(b[d]);
            c.forEach(function (b) {
                this.removeFold(b)
            }, this);
            this.$modified = true
        };
        this.expandFold = function (b) {
            this.removeFold(b);
            b.subFolds.forEach(function (c) {
                b.restoreRange(c);
                this.addFold(c)
            }, this);
            b.collapseChildren > 0 && this.foldAll(b.start.row + 1, b.end.row, b.collapseChildren - 1);
            b.subFolds = []
        };
        this.expandFolds =
            function (b) {
                b.forEach(function (b) {
                    this.expandFold(b)
                }, this)
            };
        this.unfold = function (b, c) {
            var e, f;
            b == null ? (e = new d(0, 0, this.getLength(), 0), c = true) : typeof b == "number" ? e = new d(b, 0, b, this.getLine(b).length) : "row" in b ? e = d.fromPoints(b, b) : e = b;
            f = this.getFoldsInRangeList(e);
            if (c) this.removeFolds(f);
            else
                for (var g = f; g.length;) {
                    this.expandFolds(g);
                    g = this.getFoldsInRangeList(e)
                }
            if (f.length) return f
        };
        this.isRowFolded = function (b, c) {
            return !!this.getFoldLine(b, c)
        };
        this.getRowFoldEnd = function (b, c) {
            var d = this.getFoldLine(b,
                c);
            return d ? d.end.row : b
        };
        this.getRowFoldStart = function (b, c) {
            var d = this.getFoldLine(b, c);
            return d ? d.start.row : b
        };
        this.getFoldDisplayLine = function (b, c, d, e, f) {
            e == null && (e = b.start.row, f = 0);
            c == null && (c = b.end.row, d = this.getLine(c).length);
            var g = this.doc,
                q = "";
            return b.walk(function (b, c, d, h) {
                if (!(c < e)) {
                    if (c == e) {
                        if (d < f) return;
                        h = Math.max(f, h)
                    }
                    b != null ? q = q + b : q = q + g.getLine(c).substring(h, d)
                }
            }, c, d), q
        };
        this.getDisplayLine = function (b, c, d, e) {
            var f = this.getFoldLine(b);
            if (!f) {
                var g;
                return g = this.doc.getLine(b), g.substring(e ||
                    0, c || g.length)
            }
            return this.getFoldDisplayLine(f, b, c, d, e)
        };
        this.$cloneFoldData = function () {
            var b = [];
            return b = this.$foldData.map(function (c) {
                c = c.folds.map(function (b) {
                    return b.clone()
                });
                return new e(b, c)
            }), b
        };
        this.toggleFold = function (b) {
            var c = this.selection.getRange(),
                d, e;
            if (c.isEmpty()) {
                b = c.start;
                if (d = this.getFoldAt(b.row, b.column)) {
                    this.expandFold(d);
                    return
                } (e = this.findMatchingBracket(b)) ? c.comparePoint(e) == 1 ? c.end = e : (c.start = e, c.start.column++, c.end.column--) : (e = this.findMatchingBracket({
                    row: b.row,
                    column: b.column + 1
                })) ? (c.comparePoint(e) == 1 ? c.end = e : c.start = e, c.start.column++) : c = this.getCommentFoldRange(b.row, b.column) || c
            } else {
                e = this.getFoldsInRange(c);
                if (b && e.length) {
                    this.expandFolds(e);
                    return
                }
                e.length == 1 && (d = e[0])
            }
            d || (d = this.getFoldAt(c.start.row, c.start.column));
            if (d && d.range.toString() == c.toString()) this.expandFold(d);
            else {
                d = "...";
                if (!c.isMultiLine()) {
                    d = this.getTextRange(c);
                    if (d.length < 4) return;
                    d = d.trim().substring(0, 2) + ".."
                }
                this.addFold(d, c)
            }
        };
        this.getCommentFoldRange = function (b, c, e) {
            var f =
                new g(this, b, c),
                m = f.getCurrentToken();
            if (m && /^comment|string/.test(m.type)) {
                var n = new d,
                    q = RegExp(m.type.replace(/\..*/, "\\."));
                if (e != 1) {
                    do m = f.stepBackward(); while (m && q.test(m.type));
                    f.stepForward()
                }
                n.start.row = f.getCurrentTokenRow();
                n.start.column = f.getCurrentTokenColumn() + 2;
                f = new g(this, b, c);
                if (e != -1) {
                    do m = f.stepForward(); while (m && q.test(m.type));
                    m = f.stepBackward()
                } else m = f.getCurrentToken();
                return n.end.row = f.getCurrentTokenRow(), n.end.column = f.getCurrentTokenColumn() + m.value.length - 2, n
            }
        };
        this.foldAll =
            function (b, c, d) {
                d == void 0 && (d = 1E5);
                var e = this.foldWidgets;
                if (e)
                    for (var c = c || this.getLength(), f = b = b || 0; f < c; f++) {
                        e[f] == null && (e[f] = this.getFoldWidget(f));
                        if (e[f] == "start") {
                            var g = this.getFoldWidgetRange(f);
                            if (g && g.isMultiLine() && g.end.row <= c && g.start.row >= b) {
                                f = g.end.row;
                                try {
                                    var q = this.addFold("...", g);
                                    q && (q.collapseChildren = d)
                                } catch (p) { }
                            }
                        }
                    }
            };
        this.$foldStyles = {
            manual: 1,
            markbegin: 1,
            markbeginend: 1
        };
        this.$foldStyle = "markbegin";
        this.setFoldStyle = function (b) {
            if (!this.$foldStyles[b]) throw Error("invalid fold style: " +
                b + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
            if (this.$foldStyle != b) {
                this.$foldStyle = b;
                b == "manual" && this.unfold();
                b = this.$foldMode;
                this.$setFolding(null);
                this.$setFolding(b)
            }
        };
        this.$setFolding = function (b) {
            if (this.$foldMode != b) {
                this.$foldMode = b;
                this.removeListener("change", this.$updateFoldWidgets);
                this._emit("changeAnnotation");
                if (!b || this.$foldStyle == "manual") this.foldWidgets = null;
                else {
                    this.foldWidgets = [];
                    this.getFoldWidget = b.getFoldWidget.bind(b, this, this.$foldStyle);
                    this.getFoldWidgetRange =
                        b.getFoldWidgetRange.bind(b, this, this.$foldStyle);
                    this.$updateFoldWidgets = this.updateFoldWidgets.bind(this);
                    this.on("change", this.$updateFoldWidgets)
                }
            }
        };
        this.getParentFoldRangeData = function (b, c) {
            var d = this.foldWidgets;
            if (!d || c && d[b]) return {};
            for (var e = b - 1, f; e >= 0;) {
                var g = d[e];
                g == null && (g = d[e] = this.getFoldWidget(e));
                if (g == "start") {
                    var q = this.getFoldWidgetRange(e);
                    f || (f = q);
                    if (q && q.end.row >= b) break
                }
                e--
            }
            return {
                range: e !== -1 && q,
                firstRange: f
            }
        };
        this.onFoldWidgetClick = function (b, c) {
            c = c.domEvent;
            if (!this.$toggleFoldWidget(b, {
                children: c.shiftKey,
                all: c.ctrlKey || c.metaKey,
                siblings: c.altKey
            })) {
                var d = c.target || c.srcElement;
                d && /ace_fold-widget/.test(d.className) && (d.className = d.className + " ace_invalid")
            }
        };
        this.$toggleFoldWidget = function (b, c) {
            if (this.getFoldWidget) {
                var d = this.getFoldWidget(b),
                    e = this.getLine(b),
                    d = d === "end" ? -1 : 1;
                if (d = this.getFoldAt(b, d === -1 ? 0 : e.length, d)) c.children || c.all ? this.removeFold(d) : this.expandFold(d);
                else {
                    if ((e = this.getFoldWidgetRange(b, true)) && !e.isMultiLine())
                        if ((d = this.getFoldAt(e.start.row, e.start.column,
                                1)) && e.isEqual(d.range)) {
                            this.removeFold(d);
                            return
                        }
                    if (c.siblings) {
                        d = this.getParentFoldRangeData(b);
                        if (d.range) var f = d.range.start.row + 1,
                            g = d.range.end.row;
                        this.foldAll(f, g, c.all ? 1E4 : 0)
                    } else c.children ? (e || this.getLength(), this.foldAll(b + 1, e.end.row, c.all ? 1E4 : 0)) : e && (c.all && (e.collapseChildren = 1E4), this.addFold("...", e));
                    return e
                }
            }
        };
        this.toggleFoldWidget = function () {
            var b = this.selection.getCursor().row,
                b = this.getRowFoldStart(b),
                c = this.$toggleFoldWidget(b, {});
            if (!c) {
                c = this.getParentFoldRangeData(b, true);
                if (c = c.range || c.firstRange) {
                    b = c.start.row;
                    (b = this.getFoldAt(b, this.getLine(b).length, 1)) ? this.removeFold(b) : this.addFold("...", c)
                }
            }
        };
        this.updateFoldWidgets = function (b) {
            var c = b.data,
                d = c.range,
                b = d.start.row,
                d = d.end.row - b;
            if (d === 0) this.foldWidgets[b] = null;
            else if (c.action == "removeText" || c.action == "removeLines") this.foldWidgets.splice(b, d + 1, null);
            else {
                c = Array(d + 1);
                c.unshift(b, 1);
                this.foldWidgets.splice.apply(this.foldWidgets, c)
            }
        }
    }
});
ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function (b, c) {
    function d(b, c) {
        this.foldData = b;
        Array.isArray(c) ? this.folds = c : c = this.folds = [c];
        var d = c[c.length - 1];
        this.range = new e(c[0].start.row, c[0].start.column, d.end.row, d.end.column);
        this.start = this.range.start;
        this.end = this.range.end;
        this.folds.forEach(function (b) {
            b.setFoldLine(this)
        }, this)
    }
    var e = b("../range").Range;
    (function () {
        this.shiftRow = function (b) {
            this.start.row += b;
            this.end.row += b;
            this.folds.forEach(function (c) {
                c.start.row +=
                    b;
                c.end.row += b
            })
        };
        this.addFold = function (b) {
            if (b.sameRow) {
                if (b.start.row < this.startRow || b.endRow > this.endRow) throw Error("Can't add a fold to this FoldLine as it has no connection");
                this.folds.push(b);
                this.folds.sort(function (b, c) {
                    return -b.range.compareEnd(c.start.row, c.start.column)
                });
                0 < this.range.compareEnd(b.start.row, b.start.column) ? (this.end.row = b.end.row, this.end.column = b.end.column) : 0 > this.range.compareStart(b.end.row, b.end.column) && (this.start.row = b.start.row, this.start.column = b.start.column)
            } else if (b.start.row ==
                this.end.row) this.folds.push(b), this.end.row = b.end.row, this.end.column = b.end.column;
            else {
                if (b.end.row != this.start.row) throw Error("Trying to add fold to FoldRow that doesn't have a matching row");
                this.folds.unshift(b);
                this.start.row = b.start.row;
                this.start.column = b.start.column
            }
            b.foldLine = this
        };
        this.containsRow = function (b) {
            return b >= this.start.row && b <= this.end.row
        };
        this.walk = function (b, c, d) {
            var e = 0,
                k = this.folds,
                l, m, n;
            n = !0;
            null == c && (c = this.end.row, d = this.end.column);
            for (var q = 0; q < k.length; q++) {
                l = k[q];
                m = l.range.compareStart(c, d);
                if (-1 == m) {
                    b(null, c, d, e, n);
                    return
                }
                n = b(null, l.start.row, l.start.column, e, n);
                if ((n = !n && b(l.placeholder, l.start.row, l.start.column, e)) || 0 == m) return;
                n = !l.sameRow;
                e = l.end.column
            }
            b(null, c, d, e, n)
        };
        this.getNextFoldTo = function (b, c) {
            for (var d, e, k = 0; k < this.folds.length; k++) {
                d = this.folds[k];
                e = d.range.compareEnd(b, c);
                if (-1 == e) return {
                    fold: d,
                    kind: "after"
                };
                if (0 == e) return {
                    fold: d,
                    kind: "inside"
                }
            }
            return null
        };
        this.addRemoveChars = function (b, c, d) {
            var e = this.getNextFoldTo(b, c),
                k;
            if (e)
                if (k = e.fold,
                    "inside" == e.kind && k.start.column != c && k.start.row != b) window.console && window.console.log(b, c, k);
                else if (k.start.row == b) {
                    b = this.folds;
                    c = b.indexOf(k);
                    0 == c && (this.start.column += d);
                    for (c; c < b.length; c++) {
                        k = b[c];
                        k.start.column += d;
                        if (!k.sameRow) return;
                        k.end.column += d
                    }
                    this.end.column += d
                }
        };
        this.split = function (b, c) {
            var e = this.getNextFoldTo(b, c).fold,
                j = this.folds,
                k = this.foldData;
            if (!e) return null;
            var e = j.indexOf(e),
                l = j[e - 1];
            this.end.row = l.end.row;
            this.end.column = l.end.column;
            j = j.splice(e, j.length - e);
            j = new d(k,
                j);
            return k.splice(k.indexOf(this) + 1, 0, j), j
        };
        this.merge = function (b) {
            for (var c = b.folds, d = 0; d < c.length; d++) this.addFold(c[d]);
            c = this.foldData;
            c.splice(c.indexOf(b), 1)
        };
        this.toString = function () {
            var b = [this.range.toString() + ": ["];
            return this.folds.forEach(function (c) {
                b.push("  " + c.toString())
            }), b.push("]"), b.join("\n")
        };
        this.idxToPosition = function (b) {
            for (var c = 0, d, e = 0; e < this.folds.length; e++) {
                d = this.folds[e];
                b -= d.start.column - c;
                if (0 > b) return {
                    row: d.start.row,
                    column: d.start.column + b
                };
                b -= d.placeholder.length;
                if (0 > b) return d.start;
                c = d.end.column
            }
            return {
                row: this.end.row,
                column: this.end.column + b
            }
        }
    }).call(d.prototype);
    c.FoldLine = d
});
ace.define("ace/edit_session/fold", "require exports module ace/range ace/range_list ace/lib/oop".split(" "), function (b, c) {
    b("../range");
    var d = b("../range_list").RangeList,
        e = b("../lib/oop"),
        f = c.Fold = function (b, c) {
            this.foldLine = null;
            this.placeholder = c;
            this.range = b;
            this.start = b.start;
            this.end = b.end;
            this.sameRow = b.start.row == b.end.row;
            this.subFolds = this.ranges = []
        };
    e.inherits(f, d);
    (function () {
        this.toString = function () {
            return '"' + this.placeholder + '" ' + this.range.toString()
        };
        this.setFoldLine = function (b) {
            this.foldLine =
                b;
            this.subFolds.forEach(function (c) {
                c.setFoldLine(b)
            })
        };
        this.clone = function () {
            var b = this.range.clone(),
                c = new f(b, this.placeholder);
            return this.subFolds.forEach(function (b) {
                c.subFolds.push(b.clone())
            }), c.collapseChildren = this.collapseChildren, c
        };
        this.addSubFold = function (b) {
            if (!this.range.isEqual(b)) {
                if (!this.range.containsRange(b)) throw Error("A fold can't intersect already existing fold" + b.range + this.range);
                var c = this.start,
                    d = b.start;
                d.row = d.row - c.row;
                d.row == 0 && (d.column = d.column - c.column);
                d = b.end;
                d.row = d.row - c.row;
                d.row == 0 && (d.column = d.column - c.column);
                for (var e = b.start.row, f = b.start.column, c = 0, d = -1; c < this.subFolds.length; c++) {
                    d = this.subFolds[c].range.compare(e, f);
                    if (d != 1) break
                }
                e = this.subFolds[c];
                if (d == 0) return e.addSubFold(b);
                for (var e = b.range.end.row, f = b.range.end.column, m = c, d = -1; m < this.subFolds.length; m++) {
                    d = this.subFolds[m].range.compare(e, f);
                    if (d != 1) break
                }
                if (d == 0) throw Error("A fold can't intersect already existing fold" + b.range + this.range);
                this.subFolds.splice(c, m - c, b);
                return b.setFoldLine(this.foldLine),
                    b
            }
        };
        this.restoreRange = function (b) {
            var c = this.start,
                d = b.start;
            d.row == 0 && (d.column = d.column + c.column);
            d.row = d.row + c.row;
            b = b.end;
            b.row == 0 && (b.column = b.column + c.column);
            b.row = b.row + c.row
        }
    }).call(f.prototype)
});
ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function (b, c) {
    var d = b("./range").Range.comparePoints,
        e = function () {
            this.ranges = []
        };
    (function () {
        this.comparePoints = d;
        this.pointIndex = function (b, c, e) {
            for (var j = this.ranges, e = e || 0; e < j.length; e++) {
                var k = j[e],
                    l = d(b, k.end);
                if (!(0 < l)) return b = d(b, k.start), 0 === l ? c && 0 !== b ? -e - 2 : e : 0 < b || 0 === b && !c ? e : -e - 1
            }
            return -e - 1
        };
        this.add = function (b) {
            var c = !b.isEmpty(),
                d = this.pointIndex(b.start, c);
            0 > d && (d = -d - 1);
            c = this.pointIndex(b.end, c, d);
            return 0 > c ? c = -c -
                1 : c++, this.ranges.splice(d, c - d, b)
        };
        this.addList = function (b) {
            for (var c = [], d = b.length; d--;) c.push.call(c, this.add(b[d]));
            return c
        };
        this.substractPoint = function (b) {
            b = this.pointIndex(b);
            if (0 <= b) return this.ranges.splice(b, 1)
        };
        this.merge = function () {
            for (var b = [], c = this.ranges, c = c.sort(function (b, c) {
                    return d(b.start, c.start)
            }), e = c[0], j, k = 1; k < c.length; k++) {
                j = e;
                var e = c[k],
                    l = d(j.end, e.start);
                !(0 > l) && !(0 == l && !j.isEmpty() && !e.isEmpty()) && (0 > d(j.end, e.end) && (j.end.row = e.end.row, j.end.column = e.end.column), c.splice(k,
                    1), b.push(e), e = j, k--)
            }
            return this.ranges = c, b
        };
        this.contains = function (b, c) {
            return 0 <= this.pointIndex({
                row: b,
                column: c
            })
        };
        this.containsPoint = function (b) {
            return 0 <= this.pointIndex(b)
        };
        this.rangeAtPoint = function (b) {
            b = this.pointIndex(b);
            if (0 <= b) return this.ranges[b]
        };
        this.clipRows = function (b, c) {
            var d = this.ranges;
            if (d[0].start.row > c || d[d.length - 1].start.row < b) return [];
            var e = this.pointIndex({
                row: b,
                column: 0
            });
            0 > e && (e = -e - 1);
            var k = this.pointIndex({
                row: c,
                column: 0
            }, e);
            0 > k && (k = -k - 1);
            for (var l = []; e < k; e++) l.push(d[e]);
            return l
        };
        this.removeAll = function () {
            return this.ranges.splice(0, this.ranges.length)
        };
        this.attach = function (b) {
            this.session && this.detach();
            this.session = b;
            this.onChange = this.$onChange.bind(this);
            this.session.on("change", this.onChange)
        };
        this.detach = function () {
            this.session && (this.session.removeListener("change", this.onChange), this.session = null)
        };
        this.$onChange = function (b) {
            var c = b.data.range;
            if ("i" == b.data.action[0]) var b = c.start,
                d = c.end;
            else d = c.start, b = c.end;
            for (var c = b.row, e = d.row - c, d = -b.column + d.column,
                    k = this.ranges, l = 0, m = k.length; l < m; l++) {
                var n = k[l];
                if (!(n.end.row < c)) {
                    if (n.start.row > c) break;
                    n.start.row == c && n.start.column >= b.column && (n.start.column != b.column || !this.$insertRight) && (n.start.column += d, n.start.row += e);
                    n.end.row == c && n.end.column >= b.column && !(n.end.column == b.column && this.$insertRight) && (n.end.column == b.column && 0 < d && l < m - 1 && n.end.column > n.start.column && n.end.column == k[l + 1].start.column && (n.end.column -= d), n.end.column += d, n.end.row += e)
                }
            }
            if (0 != e && l < m)
                for (; l < m; l++) n = k[l], n.start.row += e, n.end.row +=
                    e
        }
    }).call(e.prototype);
    c.RangeList = e
});
ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function (b, c) {
    var d = b("../token_iterator").TokenIterator,
        e = b("../range").Range;
    c.BracketMatch = function () {
        this.findMatchingBracket = function (b, c) {
            if (0 == b.column) return null;
            var d = c || this.getLine(b.row).charAt(b.column - 1);
            return "" == d ? null : (d = d.match(/([\(\[\{])|([\)\]\}])/)) ? d[1] ? this.$findClosingBracket(d[1], b) : this.$findOpeningBracket(d[2], b) : null
        };
        this.getBracketRange = function (b) {
            var c = this.getLine(b.row),
                d = !0,
                j = c.charAt(b.column - 1),
                k = j && j.match(/([\(\[\{])|([\)\]\}])/);
            k || (j = c.charAt(b.column), b = {
                row: b.row,
                column: b.column + 1
            }, k = j && j.match(/([\(\[\{])|([\)\]\}])/), d = !1);
            if (!k) return null;
            if (k[1]) {
                c = this.$findClosingBracket(k[1], b);
                if (!c) return null;
                b = e.fromPoints(b, c);
                d || (b.end.column++, b.start.column--);
                b.cursor = b.end
            } else {
                c = this.$findOpeningBracket(k[2], b);
                if (!c) return null;
                b = e.fromPoints(c, b);
                d || (b.start.column++, b.end.column--);
                b.cursor = b.start
            }
            return b
        };
        this.$brackets = {
            ")": "(",
            "(": ")",
            "]": "[",
            "[": "]",
            "{": "}",
            "}": "{"
        };
        this.$findOpeningBracket = function (b, c, e) {
            var j = this.$brackets[b],
                k = 1,
                l = new d(this, c.row, c.column),
                m = l.getCurrentToken();
            m || (m = l.stepForward());
            if (m) {
                e || (e = RegExp("(\\.?" + m.type.replace(".", "\\.").replace("rparen", ".paren") + ")+"));
                c = c.column - l.getCurrentTokenColumn() - 2;
                for (m = m.value; ;) {
                    for (; 0 <= c;) {
                        var n = m.charAt(c);
                        if (n == j) {
                            if (k -= 1, 0 == k) return {
                                row: l.getCurrentTokenRow(),
                                column: c + l.getCurrentTokenColumn()
                            }
                        } else n == b && (k += 1);
                        c -= 1
                    }
                    do m = l.stepBackward(); while (m && !e.test(m.type));
                    if (null == m) break;
                    m = m.value;
                    c = m.length - 1
                }
                return null
            }
        };
        this.$findClosingBracket = function (b, c, e) {
            var j = this.$brackets[b],
                k = 1,
                l = new d(this, c.row, c.column),
                m = l.getCurrentToken();
            m || (m = l.stepForward());
            if (m) {
                e || (e = RegExp("(\\.?" + m.type.replace(".", "\\.").replace("lparen", ".paren") + ")+"));
                for (c = c.column - l.getCurrentTokenColumn() ; ;) {
                    for (var m = m.value, n = m.length; c < n;) {
                        var q = m.charAt(c);
                        if (q == j) {
                            if (k -= 1, 0 == k) return {
                                row: l.getCurrentTokenRow(),
                                column: c + l.getCurrentTokenColumn()
                            }
                        } else q == b && (k += 1);
                        c += 1
                    }
                    do m =
                        l.stepForward(); while (m && !e.test(m.type));
                    if (null == m) break;
                    c = 0
                }
                return null
            }
        }
    }
});
ace.define("ace/search", "require exports module ace/lib/lang ace/lib/oop ace/range".split(" "), function (b, c) {
    var d = b("./lib/lang"),
        e = b("./lib/oop"),
        f = b("./range").Range,
        g = function () {
            this.$options = {}
        };
    (function () {
        this.set = function (b) {
            return e.mixin(this.$options, b), this
        };
        this.getOptions = function () {
            return d.copyObject(this.$options)
        };
        this.setOptions = function (b) {
            this.$options = b
        };
        this.find = function (b) {
            b = this.$matchIterator(b, this.$options);
            if (!b) return false;
            var c = null;
            return b.forEach(function (b, d, e) {
                if (b.start) c =
                    b;
                else {
                    e = b.offset + (e || 0);
                    c = new f(d, e, d, e + b.length)
                }
                return true
            }), c
        };
        this.findAll = function (b) {
            var c = this.$options;
            if (!c.needle) return [];
            this.$assembleRegExp(c);
            var e = c.range,
                g = e ? b.getLines(e.start.row, e.end.row) : b.doc.getAllLines(),
                b = [],
                m = c.re;
            if (c.$isMultiLine)
                for (var n = m.length, q = g.length - n, p = m.offset || 0; p <= q; p++) {
                    for (c = 0; c < n; c++)
                        if (g[p + c].search(m[c]) == -1) break;
                    var c = g[p],
                        s = g[p + n - 1],
                        r = c.match(m[0])[0].length,
                        s = s.match(m[n - 1])[0].length;
                    b.push(new f(p, c.length - r, p + n - 1, s))
                } else
                for (n = 0; n < g.length; n++) {
                    q =
                        d.getMatchOffsets(g[n], m);
                    for (c = 0; c < q.length; c++) {
                        p = q[c];
                        b.push(new f(n, p.offset, n, p.offset + p.length))
                    }
                }
            if (e) {
                m = g = e.start.column;
                n = 0;
                for (c = b.length - 1; n < c && b[n].start.column < g && b[n].start.row == e.start.row;) n++;
                for (; n < c && b[c].end.column > m && b[c].end.row == e.end.row;) c--;
                b = b.slice(n, c + 1);
                n = 0;
                for (c = b.length; n < c; n++) {
                    b[n].start.row = b[n].start.row + e.start.row;
                    b[n].end.row = b[n].end.row + e.start.row
                }
            }
            return b
        };
        this.replace = function (b, c) {
            var d = this.$options,
                e = this.$assembleRegExp(d);
            if (d.$isMultiLine) return c;
            if (e) {
                var f = e.exec(b);
                if (!f || f[0].length != b.length) return null;
                c = b.replace(e, c);
                if (d.preserveCase) {
                    c = c.split("");
                    for (d = Math.min(b.length, b.length) ; d--;) (e = b[d]) && e.toLowerCase() != e ? c[d] = c[d].toUpperCase() : c[d] = c[d].toLowerCase();
                    c = c.join("")
                }
                return c
            }
        };
        this.$matchIterator = function (b, c) {
            var e = this.$assembleRegExp(c);
            if (!e) return false;
            var g = this,
                m, n = c.backwards;
            if (c.$isMultiLine) var q = e.length,
                p = function (c, d, g) {
                    var j = c.search(e[0]);
                    if (j != -1) {
                        for (var l = 1; l < q; l++) {
                            c = b.getLine(d + l);
                            if (c.search(e[l]) ==
                                -1) return
                        }
                        c = c.match(e[q - 1])[0].length;
                        d = new f(d, j, d + q - 1, c);
                        e.offset == 1 ? (d.start.row--, d.start.column = Number.MAX_VALUE) : g && (d.start.column = d.start.column + g);
                        if (m(d)) return true
                    }
                };
            else p = n ? function (b, c, f) {
                for (var b = d.getMatchOffsets(b, e), g = b.length - 1; g >= 0; g--)
                    if (m(b[g], c, f)) return true
            } : function (b, c, f) {
                for (var b = d.getMatchOffsets(b, e), g = 0; g < b.length; g++)
                    if (m(b[g], c, f)) return true
            };
            return {
                forEach: function (d) {
                    m = d;
                    g.$lineIterator(b, c).forEach(p)
                }
            }
        };
        this.$assembleRegExp = function (b, c) {
            if (b.needle instanceof RegExp) return b.re = b.needle;
            var e = b.needle;
            if (!b.needle) return b.re = false;
            b.regExp || (e = d.escapeRegExp(e));
            b.wholeWord && (e = "\\b" + e + "\\b");
            var f = b.caseSensitive ? "g" : "gi";
            b.$isMultiLine = !c && /[\n\r]/.test(e);
            if (b.$isMultiLine) return b.re = this.$assembleMultilineRegExp(e, f);
            try {
                var g = RegExp(e, f)
            } catch (n) {
                g = false
            }
            return b.re = g
        };
        this.$assembleMultilineRegExp = function (b, c) {
            for (var d = b.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), e = [], f = 0; f < d.length; f++) try {
                e.push(RegExp(d[f], c))
            } catch (g) {
                return false
            }
            return d[0] ==
                "" ? (e.shift(), e.offset = 1) : e.offset = 0, e
        };
        this.$lineIterator = function (b, c) {
            var d = c.backwards == 1,
                e = c.skipCurrent != 0,
                f = c.range,
                g = c.start;
            g || (g = f ? f[d ? "end" : "start"] : b.selection.getRange());
            g.start && (g = g[e != d ? "end" : "start"]);
            var q = f ? f.start.row : 0,
                p = f ? f.end.row : b.getLength() - 1;
            return {
                forEach: d ? function (d) {
                    var e = g.row,
                        f = b.getLine(e).substring(0, g.column);
                    if (!d(f, e)) {
                        for (e--; e >= q; e--)
                            if (d(b.getLine(e), e)) return;
                        if (c.wrap != 0) {
                            e = p;
                            for (q = g.row; e >= q; e--)
                                if (d(b.getLine(e), e)) break
                        }
                    }
                } : function (d) {
                    var e = g.row,
                        f =
                        b.getLine(e).substr(g.column);
                    if (!d(f, e, g.column)) {
                        for (e = e + 1; e <= p; e++)
                            if (d(b.getLine(e), e)) return;
                        if (c.wrap != 0) {
                            e = q;
                            for (p = g.row; e <= p; e++)
                                if (d(b.getLine(e), e)) break
                        }
                    }
                }
            }
        }
    }).call(g.prototype);
    c.Search = g
});
ace.define("ace/commands/command_manager", "require exports module ace/lib/oop ace/keyboard/hash_handler ace/lib/event_emitter".split(" "), function (b, c) {
    var d = b("../lib/oop"),
        e = b("../keyboard/hash_handler").HashHandler,
        f = b("../lib/event_emitter").EventEmitter,
        g = function (b, c) {
            e.call(this, c, b);
            this.byName = this.commands;
            this.setDefaultHandler("exec", function (b) {
                return b.command.exec(b.editor, b.args || {})
            })
        };
    d.inherits(g, e);
    (function () {
        d.implement(this, f);
        this.exec = function (b, c, d) {
            typeof b == "string" && (b =
                this.commands[b]);
            if (!b || c && c.$readOnly && !b.readOnly) return false;
            b = {
                editor: c,
                command: b,
                args: d
            };
            c = this._emit("exec", b);
            return this._signal("afterExec", b), c === false ? false : true
        };
        this.toggleRecording = function (b) {
            if (!this.$inReplay) return b && b._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = false) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (b) {
                this.macro.push([b.command,
                    b.args
                ])
            }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = true)
        };
        this.replay = function (b) {
            if (!this.$inReplay && this.macro) {
                if (this.recording) return this.toggleRecording(b);
                try {
                    this.$inReplay = true;
                    this.macro.forEach(function (c) {
                        typeof c == "string" ? this.exec(c, b) : this.exec(c[0], b, c[1])
                    }, this)
                } finally {
                    this.$inReplay = false
                }
            }
        };
        this.trimMacro = function (b) {
            return b.map(function (b) {
                return typeof b[0] != "string" && (b[0] = b[0].name), b[1] || (b = b[0]), b
            })
        }
    }).call(g.prototype);
    c.CommandManager = g
});
ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (b, c) {
    function d(b, c) {
        this.platform = c || (f.isMac ? "mac" : "win");
        this.commands = {};
        this.commandKeyBinding = {};
        if (this.__defineGetter__ && this.__defineSetter__ && "undefined" != typeof console && console.error) {
            var d = !1,
                e = function () {
                    d || (d = !0, console.error("commmandKeyBinding has too many m's. use commandKeyBinding"))
                };
            this.__defineGetter__("commmandKeyBinding", function () {
                return e(), this.commandKeyBinding
            });
            this.__defineSetter__("commmandKeyBinding", function (b) {
                return e(), this.commandKeyBinding = b
            })
        } else this.commmandKeyBinding = this.commandKeyBinding;
        this.addCommands(b)
    }
    var e = b("../lib/keys"),
        f = b("../lib/useragent");
    (function () {
        this.addCommand = function (b) {
            this.commands[b.name] && this.removeCommand(b);
            this.commands[b.name] = b;
            b.bindKey && this._buildKeyHash(b)
        };
        this.removeCommand = function (b) {
            var c = "string" == typeof b ? b : b.name,
                b = this.commands[c];
            delete this.commands[c];
            var c = this.commandKeyBinding,
                d;
            for (d in c)
                for (var e in c[d]) c[d][e] ==
                    b && delete c[d][e]
        };
        this.bindKey = function (b, c) {
            if (b)
                if ("function" == typeof c) this.addCommand({
                    exec: c,
                    bindKey: b,
                    name: c.name || b
                });
                else {
                    var d = this.commandKeyBinding;
                    b.split("|").forEach(function (b) {
                        var b = this.parseKeys(b, c),
                            e = b.hashId;
                        (d[e] || (d[e] = {}))[b.key] = c
                    }, this)
                }
        };
        this.addCommands = function (b) {
            b && Object.keys(b).forEach(function (c) {
                var d = b[c];
                if (d) {
                    if ("string" == typeof d) return this.bindKey(d, c);
                    "function" == typeof d && (d = {
                        exec: d
                    });
                    "object" == typeof d && (d.name || (d.name = c), this.addCommand(d))
                }
            }, this)
        };
        this.removeCommands = function (b) {
            Object.keys(b).forEach(function (c) {
                this.removeCommand(b[c])
            }, this)
        };
        this.bindKeys = function (b) {
            Object.keys(b).forEach(function (c) {
                this.bindKey(c, b[c])
            }, this)
        };
        this._buildKeyHash = function (b) {
            var c = b.bindKey;
            c && this.bindKey("string" == typeof c ? c : c[this.platform], b)
        };
        this.parseKeys = function (b) {
            -1 != b.indexOf(" ") && (b = b.split(/\s+/).pop());
            var c = b.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function (b) {
                return b
            }),
                d = c.pop(),
                f = e[d];
            if (e.FUNCTION_KEYS[f]) d = e.FUNCTION_KEYS[f].toLowerCase();
            else {
                if (!c.length) return {
                    key: d,
                    hashId: -1
                };
                if (1 == c.length && "shift" == c[0]) return {
                    key: d.toUpperCase(),
                    hashId: -1
                }
            }
            for (var f = 0, l = c.length; l--;) {
                var m = e.KEY_MODS[c[l]];
                if (null == m) return "undefined" != typeof console && console.error("invalid modifier " + c[l] + " in " + b), !1;
                f |= m
            }
            return {
                key: d,
                hashId: f
            }
        };
        this.findKeyCommand = function (b, c) {
            var d = this.commandKeyBinding;
            return d[b] && d[b][c]
        };
        this.handleKeyboard = function (b, c, d) {
            return {
                command: this.findKeyCommand(c, d)
            }
        }
    }).call(d.prototype);
    c.HashHandler = d
});
ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config"], function (b, c) {
    function d(b, c) {
        return {
            win: b,
            mac: c
        }
    }
    var e = b("../lib/lang"),
        f = b("../config");
    c.commands = [{
        name: "showSettingsMenu",
        bindKey: d("Ctrl-,", "Command-,"),
        exec: function (b) {
            f.loadModule("ace/ext/settings_menu", function (c) {
                c.init(b);
                b.showSettingsMenu()
            })
        },
        readOnly: !0
    }, {
        name: "goToNextError",
        bindKey: d("Alt-E", "Ctrl-E"),
        exec: function (b) {
            f.loadModule("ace/ext/error_marker", function (c) {
                c.showErrorMarker(b,
                    1)
            })
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "goToPreviousError",
        bindKey: d("Alt-Shift-E", "Ctrl-Shift-E"),
        exec: function (b) {
            f.loadModule("ace/ext/error_marker", function (c) {
                c.showErrorMarker(b, -1)
            })
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "selectall",
        bindKey: d("Ctrl-A", "Command-A"),
        exec: function (b) {
            b.selectAll()
        },
        readOnly: !0
    }, {
        name: "centerselection",
        bindKey: d(null, "Ctrl-L"),
        exec: function (b) {
            b.centerSelection()
        },
        readOnly: !0
    }, {
        name: "gotoline",
        bindKey: d("Ctrl-L", "Command-L"),
        exec: function (b) {
            var c =
                parseInt(prompt("Enter line number:"), 10);
            isNaN(c) || b.gotoLine(c)
        },
        readOnly: !0
    }, {
        name: "fold",
        bindKey: d("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
        exec: function (b) {
            b.session.toggleFold(!1)
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "unfold",
        bindKey: d("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
        exec: function (b) {
            b.session.toggleFold(!0)
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "toggleFoldWidget",
        bindKey: d("F2", "F2"),
        exec: function (b) {
            b.session.toggleFoldWidget()
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "toggleParentFoldWidget",
        bindKey: d("Alt-F2", "Alt-F2"),
        exec: function (b) {
            b.session.toggleFoldWidget(!0)
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "foldall",
        bindKey: d("Ctrl-Alt-0", "Ctrl-Command-Option-0"),
        exec: function (b) {
            b.session.foldAll()
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "foldOther",
        bindKey: d("Alt-0", "Command-Option-0"),
        exec: function (b) {
            b.session.foldAll();
            b.session.unfold(b.selection.getAllRanges())
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "unfoldall",
        bindKey: d("Alt-Shift-0",
            "Command-Option-Shift-0"),
        exec: function (b) {
            b.session.unfold()
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "findnext",
        bindKey: d("Ctrl-K", "Command-G"),
        exec: function (b) {
            b.findNext()
        },
        readOnly: !0
    }, {
        name: "findprevious",
        bindKey: d("Ctrl-Shift-K", "Command-Shift-G"),
        exec: function (b) {
            b.findPrevious()
        },
        readOnly: !0
    }, {
        name: "selectOrFindNext",
        bindKey: d("ALt-K", "Ctrl-G"),
        exec: function (b) {
            b.selection.isEmpty() ? b.selection.selectWord() : b.findNext()
        },
        readOnly: !0
    }, {
        name: "selectOrFindPrevious",
        bindKey: d("Alt-Shift-K",
            "Ctrl-Shift-G"),
        exec: function (b) {
            b.selection.isEmpty() ? b.selection.selectWord() : b.findPrevious()
        },
        readOnly: !0
    }, {
        name: "find",
        bindKey: d("Ctrl-F", "Command-F"),
        exec: function (b) {
            f.loadModule("ace/ext/searchbox", function (c) {
                c.Search(b)
            })
        },
        readOnly: !0
    }, {
        name: "overwrite",
        bindKey: "Insert",
        exec: function (b) {
            b.toggleOverwrite()
        },
        readOnly: !0
    }, {
        name: "selecttostart",
        bindKey: d("Ctrl-Shift-Home", "Command-Shift-Up"),
        exec: function (b) {
            b.getSelection().selectFileStart()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "gotostart",
        bindKey: d("Ctrl-Home", "Command-Home|Command-Up"),
        exec: function (b) {
            b.navigateFileStart()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "selectup",
        bindKey: d("Shift-Up", "Shift-Up"),
        exec: function (b) {
            b.getSelection().selectUp()
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "golineup",
        bindKey: d("Up", "Up|Ctrl-P"),
        exec: function (b, c) {
            b.navigateUp(c.times)
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "selecttoend",
        bindKey: d("Ctrl-Shift-End", "Command-Shift-Down"),
        exec: function (b) {
            b.getSelection().selectFileEnd()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "gotoend",
        bindKey: d("Ctrl-End", "Command-End|Command-Down"),
        exec: function (b) {
            b.navigateFileEnd()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "selectdown",
        bindKey: d("Shift-Down", "Shift-Down"),
        exec: function (b) {
            b.getSelection().selectDown()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "golinedown",
        bindKey: d("Down", "Down|Ctrl-N"),
        exec: function (b, c) {
            b.navigateDown(c.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectwordleft",
        bindKey: d("Ctrl-Shift-Left", "Option-Shift-Left"),
        exec: function (b) {
            b.getSelection().selectWordLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotowordleft",
        bindKey: d("Ctrl-Left", "Option-Left"),
        exec: function (b) {
            b.navigateWordLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selecttolinestart",
        bindKey: d("Alt-Shift-Left", "Command-Shift-Left"),
        exec: function (b) {
            b.getSelection().selectLineStart()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotolinestart",
        bindKey: d("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
        exec: function (b) {
            b.navigateLineStart()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectleft",
        bindKey: d("Shift-Left", "Shift-Left"),
        exec: function (b) {
            b.getSelection().selectLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotoleft",
        bindKey: d("Left", "Left|Ctrl-B"),
        exec: function (b, c) {
            b.navigateLeft(c.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectwordright",
        bindKey: d("Ctrl-Shift-Right", "Option-Shift-Right"),
        exec: function (b) {
            b.getSelection().selectWordRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotowordright",
        bindKey: d("Ctrl-Right", "Option-Right"),
        exec: function (b) {
            b.navigateWordRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selecttolineend",
        bindKey: d("Alt-Shift-Right", "Command-Shift-Right"),
        exec: function (b) {
            b.getSelection().selectLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotolineend",
        bindKey: d("Alt-Right|End", "Command-Right|End|Ctrl-E"),
        exec: function (b) {
            b.navigateLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectright",
        bindKey: d("Shift-Right", "Shift-Right"),
        exec: function (b) {
            b.getSelection().selectRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotoright",
        bindKey: d("Right", "Right|Ctrl-F"),
        exec: function (b, c) {
            b.navigateRight(c.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectpagedown",
        bindKey: "Shift-PageDown",
        exec: function (b) {
            b.selectPageDown()
        },
        readOnly: !0
    }, {
        name: "pagedown",
        bindKey: d(null, "Option-PageDown"),
        exec: function (b) {
            b.scrollPageDown()
        },
        readOnly: !0
    }, {
        name: "gotopagedown",
        bindKey: d("PageDown", "PageDown|Ctrl-V"),
        exec: function (b) {
            b.gotoPageDown()
        },
        readOnly: !0
    }, {
        name: "selectpageup",
        bindKey: "Shift-PageUp",
        exec: function (b) {
            b.selectPageUp()
        },
        readOnly: !0
    }, {
        name: "pageup",
        bindKey: d(null, "Option-PageUp"),
        exec: function (b) {
            b.scrollPageUp()
        },
        readOnly: !0
    }, {
        name: "gotopageup",
        bindKey: "PageUp",
        exec: function (b) {
            b.gotoPageUp()
        },
        readOnly: !0
    }, {
        name: "scrollup",
        bindKey: d("Ctrl-Up", null),
        exec: function (b) {
            b.renderer.scrollBy(0, -2 * b.renderer.layerConfig.lineHeight)
        },
        readOnly: !0
    }, {
        name: "scrolldown",
        bindKey: d("Ctrl-Down", null),
        exec: function (b) {
            b.renderer.scrollBy(0,
                2 * b.renderer.layerConfig.lineHeight)
        },
        readOnly: !0
    }, {
        name: "selectlinestart",
        bindKey: "Shift-Home",
        exec: function (b) {
            b.getSelection().selectLineStart()
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "selectlineend",
        bindKey: "Shift-End",
        exec: function (b) {
            b.getSelection().selectLineEnd()
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "togglerecording",
        bindKey: d("Ctrl-Alt-E", "Command-Option-E"),
        exec: function (b) {
            b.commands.toggleRecording(b)
        },
        readOnly: !0
    }, {
        name: "replaymacro",
        bindKey: d("Ctrl-Shift-E", "Command-Shift-E"),
        exec: function (b) {
            b.commands.replay(b)
        },
        readOnly: !0
    }, {
        name: "jumptomatching",
        bindKey: d("Ctrl-P", "Ctrl-Shift-P"),
        exec: function (b) {
            b.jumpToMatching()
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "selecttomatching",
        bindKey: d("Ctrl-Shift-P", null),
        exec: function (b) {
            b.jumpToMatching(!0)
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "cut",
        exec: function (b) {
            var c = b.getSelectionRange();
            b._emit("cut", c);
            b.selection.isEmpty() || (b.session.remove(c), b.clearSelection())
        },
        multiSelectAction: "forEach"
    }, {
        name: "removeline",
        bindKey: d("Ctrl-D", "Command-D"),
        exec: function (b) {
            b.removeLines()
        },
        multiSelectAction: "forEachLine"
    }, {
        name: "duplicateSelection",
        bindKey: d("Ctrl-Shift-D", "Command-Shift-D"),
        exec: function (b) {
            b.duplicateSelection()
        },
        multiSelectAction: "forEach"
    }, {
        name: "sortlines",
        bindKey: d("Ctrl-Alt-S", "Command-Alt-S"),
        exec: function (b) {
            b.sortLines()
        },
        multiSelectAction: "forEachLine"
    }, {
        name: "togglecomment",
        bindKey: d("Ctrl-/", "Command-/"),
        exec: function (b) {
            b.toggleCommentLines()
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
    },
        {
            name: "toggleBlockComment",
            bindKey: d("Ctrl-Shift-/", "Command-Shift-/"),
            exec: function (b) {
                b.toggleBlockComment()
            },
            multiSelectAction: "forEach"
        }, {
            name: "modifyNumberUp",
            bindKey: d("Ctrl-Shift-Up", "Alt-Shift-Up"),
            exec: function (b) {
                b.modifyNumber(1)
            },
            multiSelectAction: "forEach"
        }, {
            name: "modifyNumberDown",
            bindKey: d("Ctrl-Shift-Down", "Alt-Shift-Down"),
            exec: function (b) {
                b.modifyNumber(-1)
            },
            multiSelectAction: "forEach"
        }, {
            name: "replace",
            bindKey: d("Ctrl-H", "Command-Option-F"),
            exec: function (b) {
                f.loadModule("ace/ext/searchbox",
                    function (c) {
                        c.Search(b, !0)
                    })
            }
        }, {
            name: "undo",
            bindKey: d("Ctrl-Z", "Command-Z"),
            exec: function (b) {
                b.undo()
            }
        }, {
            name: "redo",
            bindKey: d("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
            exec: function (b) {
                b.redo()
            }
        }, {
            name: "copylinesup",
            bindKey: d("Alt-Shift-Up", "Command-Option-Up"),
            exec: function (b) {
                b.copyLinesUp()
            }
        }, {
            name: "movelinesup",
            bindKey: d("Alt-Up", "Option-Up"),
            exec: function (b) {
                b.moveLinesUp()
            }
        }, {
            name: "copylinesdown",
            bindKey: d("Alt-Shift-Down", "Command-Option-Down"),
            exec: function (b) {
                b.copyLinesDown()
            }
        },
        {
            name: "movelinesdown",
            bindKey: d("Alt-Down", "Option-Down"),
            exec: function (b) {
                b.moveLinesDown()
            }
        }, {
            name: "del",
            bindKey: d("Delete", "Delete|Ctrl-D|Shift-Delete"),
            exec: function (b) {
                b.remove("right")
            },
            multiSelectAction: "forEach"
        }, {
            name: "backspace",
            bindKey: d("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
            exec: function (b) {
                b.remove("left")
            },
            multiSelectAction: "forEach"
        }, {
            name: "cut_or_delete",
            bindKey: d("Shift-Delete", null),
            exec: function (b) {
                if (!b.selection.isEmpty()) return !1;
                b.remove("left")
            },
            multiSelectAction: "forEach"
        }, {
            name: "removetolinestart",
            bindKey: d("Alt-Backspace", "Command-Backspace"),
            exec: function (b) {
                b.removeToLineStart()
            },
            multiSelectAction: "forEach"
        }, {
            name: "removetolineend",
            bindKey: d("Alt-Delete", "Ctrl-K"),
            exec: function (b) {
                b.removeToLineEnd()
            },
            multiSelectAction: "forEach"
        }, {
            name: "removewordleft",
            bindKey: d("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
            exec: function (b) {
                b.removeWordLeft()
            },
            multiSelectAction: "forEach"
        }, {
            name: "removewordright",
            bindKey: d("Ctrl-Delete", "Alt-Delete"),
            exec: function (b) {
                b.removeWordRight()
            },
            multiSelectAction: "forEach"
        }, {
            name: "outdent",
            bindKey: d("Shift-Tab", "Shift-Tab"),
            exec: function (b) {
                b.blockOutdent()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "indent",
            bindKey: d("Tab", "Tab"),
            exec: function (b) {
                b.indent()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "blockoutdent",
            bindKey: d("Ctrl-[", "Ctrl-["),
            exec: function (b) {
                b.blockOutdent()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "blockindent",
            bindKey: d("Ctrl-]", "Ctrl-]"),
            exec: function (b) {
                b.blockIndent()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "insertstring",
            exec: function (b, c) {
                b.insert(c)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "inserttext",
            exec: function (b, c) {
                b.insert(e.stringRepeat(c.text || "", c.times || 1))
            },
            multiSelectAction: "forEach"
        }, {
            name: "splitline",
            bindKey: d(null, "Ctrl-O"),
            exec: function (b) {
                b.splitLine()
            },
            multiSelectAction: "forEach"
        }, {
            name: "transposeletters",
            bindKey: d("Ctrl-T", "Ctrl-T"),
            exec: function (b) {
                b.transposeLetters()
            },
            multiSelectAction: function (b) {
                b.transposeSelections(1)
            }
        }, {
            name: "touppercase",
            bindKey: d("Ctrl-U", "Ctrl-U"),
            exec: function (b) {
                b.toUpperCase()
            },
            multiSelectAction: "forEach"
        }, {
            name: "tolowercase",
            bindKey: d("Ctrl-Shift-U", "Ctrl-Shift-U"),
            exec: function (b) {
                b.toLowerCase()
            },
            multiSelectAction: "forEach"
        }
    ]
});
ace.define("ace/undomanager", ["require", "exports", "module"], function (b, c) {
    var d = function () {
        this.reset()
    };
    (function () {
        this.execute = function (b) {
            var c = b.args[0];
            this.$doc = b.args[1];
            b.merge && this.hasUndo() && (c = this.$undoStack.pop().concat(c));
            this.$undoStack.push(c);
            this.$redoStack = [];
            0 > this.dirtyCounter && (this.dirtyCounter = NaN);
            this.dirtyCounter++
        };
        this.undo = function (b) {
            var c = this.$undoStack.pop();
            return c && (this.$doc.undoChanges(c, b), this.$redoStack.push(c), this.dirtyCounter--), null
        };
        this.redo = function (b) {
            var c =
                this.$redoStack.pop();
            return c && (this.$doc.redoChanges(c, b), this.$undoStack.push(c), this.dirtyCounter++), null
        };
        this.reset = function () {
            this.$undoStack = [];
            this.$redoStack = [];
            this.dirtyCounter = 0
        };
        this.hasUndo = function () {
            return 0 < this.$undoStack.length
        };
        this.hasRedo = function () {
            return 0 < this.$redoStack.length
        };
        this.markClean = function () {
            this.dirtyCounter = 0
        };
        this.isClean = function () {
            return 0 === this.dirtyCounter
        }
    }).call(d.prototype);
    c.UndoManager = d
});
ace.define("ace/virtual_renderer", "require exports module ace/lib/oop ace/lib/dom ace/lib/useragent ace/config ace/layer/gutter ace/layer/marker ace/layer/text ace/layer/cursor ace/scrollbar ace/renderloop ace/lib/event_emitter".split(" "), function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/dom");
    b("./lib/useragent");
    var f = b("./config"),
        g = b("./layer/gutter").Gutter,
        h = b("./layer/marker").Marker,
        j = b("./layer/text").Text,
        k = b("./layer/cursor").Cursor,
        l = b("./scrollbar").HScrollBar,
        m = b("./scrollbar").VScrollBar,
        n = b("./renderloop").RenderLoop,
        q = b("./lib/event_emitter").EventEmitter;
    e.importCssString(".ace_editor {position: relative;overflow: hidden;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;font-size: 12px;line-height: normal;color: black;}.ace_editor .ace_line {direction: ltr;unicode-bidi: bidi-override;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: text;min-width: 100%;}.ace_dragging, .ace_dragging * {cursor: move !important;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTQ4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTU4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBMjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBMzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgXxbAAAAJbSURBVHjapFNNaBNBFH4zs5vdZLP5sQmNpT82QY209heh1ioWisaDRcSKF0WKJ0GQnrzrxasHsR6EnlrwD0TagxJabaVEpFYxLWlLSS822tr87m66ccfd2GKyVhA6MMybgfe97/vmPUQphd0sZjto9XIn9OOsvlu2nkqRzVU+6vvlzPf8W6bk8dxQ0NPbxAALgCgg2JkaQuhzQau/El0zbmUA7U0Es8v2CiYmKQJHGO1QICCLoqilMhkmurDAyapKgqItezi/USRdJqEYY4D5jCy03ht2yMkkvL91jTTX10qzyyu2hruPRN7jgbH+EOsXcMLgYiThEgAMhABW85oqy1DXdRIdvP1AHJ2acQXvDIrVHcdQNrEKNYSVMSZGMjEzIIAwDXIo+6G/FxcGnzkC3T2oMhLjre49sBB+RRcHLqdafK6sYdE/GGBwU1VpFNj0aN8pJbe+BkZyevUrvLl6Xmm0W9IuTc0DxrDNAJd5oEvI/KRsNC3bQyNjPO9yQ1YHcfj2QvfQc/5TUhJTBc2iM0U7AWDQtc1nJHvD/cfO2s7jaGkiTEfa/Ep8coLu7zmNmh8+dc5lZDuUeFAGUNA/OY6JVaypQ0vjr7XYjUvJM37vt+j1vuTK5DgVfVUoTjVe+y3/LxMxY2GgU+CSLy4cpfsYorRXuXIOi0Vt40h67uZFTdIo6nLaZcwUJWAzwNS0tBnqqKzQDnjdG/iPyZxo46HaKUpbvYkj8qYRTZsBhge+JHhZyh0x9b95JqjVJkT084kZIPwu/mPWqPgfQ5jXh2+92Ay7HedfAgwA6KDWafb4w3cAAAAASUVORK5CYII=\");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTg4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTk4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBNjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBNzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgd7PfIAAAGmSURBVHjaYvr//z8DJZiJgUIANoCRkREb9gLiSVAaQx4OQM7AAkwd7XU2/v++/rOttdYGEB9dASEvOMydGKfH8Gv/p4XTkvRBfLxeQAP+1cUhXopyvzhP7P/IoSj7g7Mw09cNKO6J1QQ0L4gICPIv/veg/8W+JdFvQNLHVsW9/nmn9zk7B+cCkDwhL7gt6knSZnx9/LuCEOcvkIAMP+cvto9nfqyZmmUAksfnBUtbM60gX/3/kgyv3/xSFOL5DZT+L8vP+Yfh5cvfPvp/xUHyQHXGyAYwgpwBjZYFT3Y1OEl/OfCH4ffv3wzc4iwMvNIsDJ+f/mH4+vIPAxsb631WW0Yln6ZpQLXdMK/DXGDflh+sIv37EivD5x//Gb7+YWT4y86sl7BCCkSD+Z++/1dkvsFRl+HnD1Rvje4F8whjMXmGj58YGf5zsDMwcnAwfPvKcml62DsQDeaDxN+/Y0qwlpEHqrdB94IRNIDUgfgfKJChGK4OikEW3gTiXUB950ASLFAF54AC94A0G9QAfOnmF9DCDzABFqS08IHYDIScdijOjQABBgC+/9awBH96jwAAAABJRU5ErkJggg==\");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAEFBQVJSUl5eXmRkZGtra39/f4WFhYmJiZGRkaampry8vMPDw8zMzNXV1dzc3OTk5Orq6vDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABQALAAAAAAQABAAAAUuICWOZGmeaBml5XGwFCQSBGyXRSAwtqQIiRuiwIM5BoYVbEFIyGCQoeJGrVptIQA7\");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk5MTVGREIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk5MTVGRUIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTkxNUZCQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTkxNUZDQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SIDkjAAAAJ1JREFUeNpi/P//PwMlgImBQkB7A6qrq/+DMC55FkIGKCoq4pVnpFkgTp069f/+/fv/r1u37r+tre1/kg0A+ptn9uzZYLaRkRHpLvjw4cNXWVlZhufPnzOcO3eOdAO0tbVPAjHDmzdvGA4fPsxIsgGSkpJmv379Ynj37h2DjIyMCMkG3LhxQ/T27dsMampqDHZ2dq/pH41DxwCAAAMAFdc68dUsFZgAAAAASUVORK5CYII=\");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;}.ace_text-input.ace_composition {background: #f8f8f8;color: #111;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;/* setting pointer-events: auto; on node under the mouse, which changesduring scroll, will break mouse wheel scrolling in Safari */pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0px;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-moz-transition: opacity 0.18s;-webkit-transition: opacity 0.18s;-o-transition: opacity 0.18s;-ms-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_cursor[style*=\"opacity: 0\"]{-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%3AIDAT8%11c%FC%FF%FF%7F%18%03%1A%60%01%F2%3F%A0%891%80%04%FF%11-%F8%17%9BJ%E2%05%B1ZD%81v%26t%E7%80%F8%A3%82h%A12%1A%20%A3%01%02%0F%01%BA%25%06%00%19%C0%0D%AEF%D5%3ES%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%003IDAT8%11c%FC%FF%FF%7F%3E%03%1A%60%01%F2%3F%A3%891%80%04%FFQ%26%F8w%C0%B43%A1%DB%0C%E2%8F%0A%A2%85%CAh%80%8C%06%08%3C%04%E8%96%18%00%A3S%0D%CD%CF%D8%C1%9D%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;}.ace_gutter-tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;display: inline-block;max-width: 500px;padding: 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre-line;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAe%8A%B1%0D%000%0C%C2%F2%2CK%96%BC%D0%8F9%81%88H%E9%D0%0E%96%C0%10%92%3E%02%80%5E%82%E4%A9*-%EEsw%C8%CC%11%EE%96w%D8%DC%E9*Eh%0C%151(%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAm%C7%C1%09%000%08C%D1%8C%ECE%C8E(%8E%EC%02)%1EZJ%F1%C1'%04%07I%E1%E5%EE%CAL%F5%A2%99%99%22%E2%D6%1FU%B5%FE0%D9x%A7%26Wz5%0E%D5%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget.ace_closed {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%03%00%00%00%06%08%06%00%00%00%06%E5%24%0C%00%00%009IDATx%DA5%CA%C1%09%000%08%03%C0%AC*(%3E%04%C1%0D%BA%B1%23%A4Uh%E0%20%81%C0%CC%F8%82%81%AA%A2%AArGfr%88%08%11%11%1C%DD%7D%E0%EE%5B%F6%F6%CB%B8%05Q%2F%E9tai%D9%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}/*** Dark version for fold widgets*/.ace_dark .ace_fold-widget {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC\");}.ace_dark .ace_fold-widget.ace_end {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget.ace_closed {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-moz-transition: opacity 0.4s ease 0.05s;-webkit-transition: opacity 0.4s ease 0.05s;-o-transition: opacity 0.4s ease 0.05s;-ms-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-moz-transition: opacity 0.05s ease 0.05s;-webkit-transition: opacity 0.05s ease 0.05s;-o-transition: opacity 0.05s ease 0.05s;-ms-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}",
        "ace_editor");
    var p = function (b, c) {
        var d = this;
        this.container = b || e.createElement("div");
        this.$keepTextAreaAtCursor = true;
        e.addCssClass(this.container, "ace_editor");
        this.setTheme(c);
        this.$gutter = e.createElement("div");
        this.$gutter.className = "ace_gutter";
        this.container.appendChild(this.$gutter);
        this.scroller = e.createElement("div");
        this.scroller.className = "ace_scroller";
        this.container.appendChild(this.scroller);
        this.content = e.createElement("div");
        this.content.className = "ace_content";
        this.scroller.appendChild(this.content);
        this.$gutterLayer = new g(this.$gutter);
        this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this));
        this.$markerBack = new h(this.content);
        this.canvas = (this.$textLayer = new j(this.content)).element;
        this.$markerFront = new h(this.content);
        this.$cursorLayer = new k(this.content);
        this.$vScroll = this.$horizScroll = false;
        this.scrollBar = this.scrollBarV = new m(this.container, this);
        this.scrollBarH = new l(this.container, this);
        this.scrollBarV.addEventListener("scroll", function (b) {
            d.$scrollAnimation || d.session.setScrollTop(b.data -
                d.scrollMargin.top)
        });
        this.scrollBarH.addEventListener("scroll", function (b) {
            d.$scrollAnimation || d.session.setScrollLeft(b.data - d.scrollMargin.left)
        });
        this.scrollLeft = this.scrollTop = 0;
        this.cursorPos = {
            row: 0,
            column: 0
        };
        this.$textLayer.addEventListener("changeCharacterSize", function () {
            d.updateCharacterSize();
            d.onResize(true, d.gutterWidth, d.$size.width, d.$size.height);
            d._signal("changeCharacterSize")
        });
        this.$size = {
            width: 0,
            height: 0,
            scrollerHeight: 0,
            scrollerWidth: 0,
            $dirty: true
        };
        this.layerConfig = {
            width: 1,
            padding: 0,
            firstRow: 0,
            firstRowScreen: 0,
            lastRow: 0,
            lineHeight: 0,
            characterWidth: 0,
            minHeight: 1,
            maxHeight: 1,
            offset: 0,
            height: 1
        };
        this.scrollMargin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
        };
        this.$loop = new n(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView);
        this.$loop.schedule(this.CHANGE_FULL);
        this.updateCharacterSize();
        this.setPadding(4);
        f.resetOptions(this);
        f._emit("renderer", this)
    };
    (function () {
        this.CHANGE_CURSOR = 1;
        this.CHANGE_MARKER = 2;
        this.CHANGE_GUTTER = 4;
        this.CHANGE_SCROLL = 8;
        this.CHANGE_LINES =
            16;
        this.CHANGE_TEXT = 32;
        this.CHANGE_SIZE = 64;
        this.CHANGE_MARKER_BACK = 128;
        this.CHANGE_MARKER_FRONT = 256;
        this.CHANGE_FULL = 512;
        this.CHANGE_H_SCROLL = 1024;
        d.implement(this, q);
        this.updateCharacterSize = function () {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts));
            this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth();
            this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight();
            this.$updatePrintMargin()
        };
        this.setSession = function (b) {
            this.session = b;
            this.scrollMargin.top && b.getScrollTop() <= 0 && b.setScrollTop(-this.scrollMargin.top);
            this.$cursorLayer.setSession(b);
            this.$markerBack.setSession(b);
            this.$markerFront.setSession(b);
            this.$gutterLayer.setSession(b);
            this.$textLayer.setSession(b);
            this.$loop.schedule(this.CHANGE_FULL)
        };
        this.updateLines = function (b, c) {
            c === void 0 && (c = Infinity);
            this.$changedLines ? (this.$changedLines.firstRow > b && (this.$changedLines.firstRow = b), this.$changedLines.lastRow <
                c && (this.$changedLines.lastRow = c)) : this.$changedLines = {
                    firstRow: b,
                    lastRow: c
                };
            this.$changedLines.firstRow > this.layerConfig.lastRow || this.$changedLines.lastRow < this.layerConfig.firstRow || this.$loop.schedule(this.CHANGE_LINES)
        };
        this.onChangeTabSize = function () {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER);
            this.$textLayer.onChangeTabSize()
        };
        this.updateText = function () {
            this.$loop.schedule(this.CHANGE_TEXT)
        };
        this.updateFull = function (b) {
            b ? this.$renderChanges(this.CHANGE_FULL, true) : this.$loop.schedule(this.CHANGE_FULL)
        };
        this.updateFontSize = function () {
            this.$textLayer.checkForSizeChanges()
        };
        this.$changes = 0;
        this.$updateSizeAsync = function () {
            this.$loop.pending ? this.$size.$dirty = true : this.onResize()
        };
        this.onResize = function (b, c, d, e) {
            if (!(this.resizing > 2)) {
                this.resizing > 0 ? this.resizing++ : this.resizing = b ? 1 : 0;
                var f = this.container;
                e || (e = f.clientHeight || f.scrollHeight);
                d || (d = f.clientWidth || f.scrollWidth);
                c = this.$updateCachedSize(b, c, d, e);
                if (!this.$size.scrollerHeight || !d && !e) return this.resizing = 0;
                b && (this.$gutterLayer.$padding =
                    null);
                b ? this.$renderChanges(c | this.$changes, true) : this.$loop.schedule(c | this.$changes);
                this.resizing && (this.resizing = 0)
            }
        };
        this.$updateCachedSize = function (b, c, d, e) {
            var e = e - (this.$extraHeight || 0),
                f = 0,
                g = this.$size,
                h = {
                    width: g.width,
                    height: g.height,
                    scrollerHeight: g.scrollerHeight,
                    scrollerWidth: g.scrollerWidth
                };
            e && (b || g.height != e) && (g.height = e, f = this.CHANGE_SIZE, g.scrollerHeight = g.height, this.$horizScroll && (g.scrollerHeight = g.scrollerHeight - this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom =
                this.scrollBarH.getHeight() + "px", this.session && (f = f | this.CHANGE_SCROLL));
            if (d && (b || g.width != d)) {
                f = this.CHANGE_SIZE;
                g.width = d;
                c == null && (c = this.$showGutter ? this.$gutter.offsetWidth : 0);
                this.gutterWidth = c;
                this.scrollBarH.element.style.left = this.scroller.style.left = c + "px";
                g.scrollerWidth = Math.max(0, d - c - this.scrollBarV.getWidth());
                this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px";
                this.scroller.style.bottom = this.scrollBarH.getHeight() + "px";
                if (this.session && this.session.getUseWrapMode() &&
                    this.adjustWrapLimit() || b) f = f | this.CHANGE_FULL
            }
            return g.$dirty = !d || !e, f && this._signal("resize", h), f
        };
        this.onGutterResize = function () {
            var b = this.$showGutter ? this.$gutter.offsetWidth : 0;
            b != this.gutterWidth && (this.$changes = this.$changes | this.$updateCachedSize(true, b, this.$size.width, this.$size.height));
            this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER))
        };
        this.adjustWrapLimit = function () {
            return this.session.adjustWrapLimit(Math.floor((this.$size.scrollerWidth - this.$padding * 2) / this.characterWidth), this.$showPrintMargin && this.$printMarginColumn)
        };
        this.setAnimatedScroll = function (b) {
            this.setOption("animatedScroll", b)
        };
        this.getAnimatedScroll = function () {
            return this.$animatedScroll
        };
        this.setShowInvisibles = function (b) {
            this.setOption("showInvisibles", b)
        };
        this.getShowInvisibles = function () {
            return this.getOption("showInvisibles")
        };
        this.getDisplayIndentGuides = function () {
            return this.getOption("displayIndentGuides")
        };
        this.setDisplayIndentGuides = function (b) {
            this.setOption("displayIndentGuides", b)
        };
        this.setShowPrintMargin = function (b) {
            this.setOption("showPrintMargin", b)
        };
        this.getShowPrintMargin = function () {
            return this.getOption("showPrintMargin")
        };
        this.setPrintMarginColumn = function (b) {
            this.setOption("printMarginColumn", b)
        };
        this.getPrintMarginColumn = function () {
            return this.getOption("printMarginColumn")
        };
        this.getShowGutter = function () {
            return this.getOption("showGutter")
        };
        this.setShowGutter = function (b) {
            return this.setOption("showGutter",
                b)
        };
        this.getFadeFoldWidgets = function () {
            return this.getOption("fadeFoldWidgets")
        };
        this.setFadeFoldWidgets = function (b) {
            this.setOption("fadeFoldWidgets", b)
        };
        this.setHighlightGutterLine = function (b) {
            this.setOption("highlightGutterLine", b)
        };
        this.getHighlightGutterLine = function () {
            return this.getOption("highlightGutterLine")
        };
        this.$updateGutterLineHighlight = function () {
            var b = this.$cursorLayer.$pixelPos,
                c = this.layerConfig.lineHeight;
            if (this.session.getUseWrapMode()) {
                var d = this.session.selection.getCursor();
                d.column = 0;
                b = this.$cursorLayer.getPixelPosition(d, true);
                c = c * this.session.getRowLength(d.row)
            }
            this.$gutterLineHighlight.style.top = b.top - this.layerConfig.offset + "px";
            this.$gutterLineHighlight.style.height = c + "px"
        };
        this.$updatePrintMargin = function () {
            if (this.$showPrintMargin || this.$printMarginEl) {
                if (!this.$printMarginEl) {
                    var b = e.createElement("div");
                    b.className = "ace_layer ace_print-margin-layer";
                    this.$printMarginEl = e.createElement("div");
                    this.$printMarginEl.className = "ace_print-margin";
                    b.appendChild(this.$printMarginEl);
                    this.content.insertBefore(b, this.content.firstChild)
                }
                b = this.$printMarginEl.style;
                b.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px";
                b.visibility = this.$showPrintMargin ? "visible" : "hidden";
                this.session && this.session.$wrap == -1 && this.adjustWrapLimit()
            }
        };
        this.getContainerElement = function () {
            return this.container
        };
        this.getMouseEventTarget = function () {
            return this.content
        };
        this.getTextAreaContainer = function () {
            return this.container
        };
        this.$moveTextAreaToCursor = function () {
            if (this.$keepTextAreaAtCursor) {
                var b =
                    this.layerConfig,
                    c = this.$cursorLayer.$pixelPos.top,
                    d = this.$cursorLayer.$pixelPos.left,
                    c = c - b.offset,
                    e = this.lineHeight;
                if (!(c < 0 || c > b.height - e)) {
                    b = this.characterWidth;
                    if (this.$composition) var f = this.textarea.value.replace(/^\x01+/, ""),
                        b = b * (this.session.$getStringScreenWidth(f)[0] + 2),
                        e = e + 2,
                        c = c - 1;
                    d = d - this.scrollLeft;
                    d > this.$size.scrollerWidth - b && (d = this.$size.scrollerWidth - b);
                    d = d - this.scrollBar.width;
                    this.textarea.style.height = e + "px";
                    this.textarea.style.width = b + "px";
                    this.textarea.style.right = Math.max(0,
                        this.$size.scrollerWidth - d - b) + "px";
                    this.textarea.style.bottom = Math.max(0, this.$size.height - c - e) + "px"
                }
            }
        };
        this.getFirstVisibleRow = function () {
            return this.layerConfig.firstRow
        };
        this.getFirstFullyVisibleRow = function () {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1)
        };
        this.getLastFullyVisibleRow = function () {
            return this.layerConfig.firstRow - 1 + Math.floor((this.layerConfig.height + this.layerConfig.offset) / this.layerConfig.lineHeight)
        };
        this.getLastVisibleRow = function () {
            return this.layerConfig.lastRow
        };
        this.$padding = null;
        this.setPadding = function (b) {
            this.$padding = b;
            this.$textLayer.setPadding(b);
            this.$cursorLayer.setPadding(b);
            this.$markerFront.setPadding(b);
            this.$markerBack.setPadding(b);
            this.$loop.schedule(this.CHANGE_FULL);
            this.$updatePrintMargin()
        };
        this.setScrollMargin = function (b, c, d, e) {
            var f = this.scrollMargin;
            f.top = b | 0;
            f.bottom = c | 0;
            f.right = e | 0;
            f.left = d | 0;
            f.v = f.top + f.bottom;
            f.h = f.left + f.right;
            f.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(f.top);
            this.updateFull()
        };
        this.getHScrollBarAlwaysVisible =
            function () {
                return this.$hScrollBarAlwaysVisible
            };
        this.setHScrollBarAlwaysVisible = function (b) {
            this.setOption("hScrollBarAlwaysVisible", b)
        };
        this.getVScrollBarAlwaysVisible = function () {
            return this.$hScrollBarAlwaysVisible
        };
        this.setVScrollBarAlwaysVisible = function (b) {
            this.setOption("vScrollBarAlwaysVisible", b)
        };
        this.$updateScrollBarV = function () {
            this.scrollBarV.setScrollHeight(this.layerConfig.maxHeight + this.scrollMargin.v);
            this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
        };
        this.$updateScrollBarH =
            function () {
                this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h);
                this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
            };
        this.$frozen = false;
        this.freeze = function () {
            this.$frozen = true
        };
        this.unfreeze = function () {
            this.$frozen = false
        };
        this.$renderChanges = function (b, c) {
            this.$changes && (b = b | this.$changes, this.$changes = 0);
            if (!this.session || !this.container.offsetWidth || this.$frozen || !b && !c) this.$changes = this.$changes | b;
            else {
                if (this.$size.$dirty) return this.$changes =
                    this.$changes | b, this.onResize(true);
                this.lineHeight || this.$textLayer.checkForSizeChanges();
                this._signal("beforeRender");
                var d = this.layerConfig;
                if (b & this.CHANGE_FULL || b & this.CHANGE_SIZE || b & this.CHANGE_TEXT || b & this.CHANGE_LINES || b & this.CHANGE_SCROLL || b & this.CHANGE_H_SCROLL) {
                    b = b | this.$computeLayerConfig();
                    d = this.layerConfig;
                    this.$updateScrollBarV();
                    b & this.CHANGE_H_SCROLL && this.$updateScrollBarH();
                    this.$gutterLayer.element.style.marginTop = -d.offset + "px";
                    this.content.style.marginTop = -d.offset + "px";
                    this.content.style.width =
                        d.width + 2 * this.$padding + "px";
                    this.content.style.height = d.minHeight + "px"
                }
                b & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px", this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left");
                if (b & this.CHANGE_FULL) {
                    this.$textLayer.update(d);
                    this.$showGutter && this.$gutterLayer.update(d);
                    this.$markerBack.update(d);
                    this.$markerFront.update(d);
                    this.$cursorLayer.update(d);
                    this.$moveTextAreaToCursor();
                    this.$highlightGutterLine && this.$updateGutterLineHighlight()
                } else if (b &
                    this.CHANGE_SCROLL) {
                    b & this.CHANGE_TEXT || b & this.CHANGE_LINES ? this.$textLayer.update(d) : this.$textLayer.scrollLines(d);
                    this.$showGutter && this.$gutterLayer.update(d);
                    this.$markerBack.update(d);
                    this.$markerFront.update(d);
                    this.$cursorLayer.update(d);
                    this.$highlightGutterLine && this.$updateGutterLineHighlight();
                    this.$moveTextAreaToCursor()
                } else {
                    b & this.CHANGE_TEXT ? (this.$textLayer.update(d), this.$showGutter && this.$gutterLayer.update(d)) : b & this.CHANGE_LINES ? (this.$updateLines() || b & this.CHANGE_GUTTER && this.$showGutter) &&
                        this.$gutterLayer.update(d) : (b & this.CHANGE_TEXT || b & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(d);
                    b & this.CHANGE_CURSOR && (this.$cursorLayer.update(d), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight());
                    b & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(d);
                    b & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(d)
                }
                this._signal("afterRender")
            }
        };
        this.$autosize = function () {
            var b = this.session.getScreenLength() *
                this.lineHeight,
                c = this.$maxLines * this.lineHeight,
                d = Math.max((this.$minLines || 1) * this.lineHeight, Math.min(c, b)) + this.scrollMargin.v + (this.$extraHeight || 0),
                b = b > c;
            if (d != this.desiredHeight || this.$size.height != this.desiredHeight || b != this.$vScroll) {
                b != this.$vScroll && (this.$vScroll = b, this.scrollBarV.setVisible(b));
                b = this.container.clientWidth;
                this.container.style.height = d + "px";
                this.$updateCachedSize(true, this.$gutterWidth, b, d);
                this.desiredHeight = d
            }
        };
        this.$computeLayerConfig = function () {
            this.$maxLines && this.lineHeight >
                1 && this.$autosize();
            var b = this.session,
                c = this.$size.height <= 2 * this.lineHeight,
                d = this.session.getScreenLength() * this.lineHeight,
                e = this.scrollTop % this.lineHeight,
                f = this.$size.scrollerHeight + this.lineHeight,
                g = this.$getLongestLine(),
                h = !c && (this.$hScrollBarAlwaysVisible || this.$size.scrollerWidth - g - 2 * this.$padding < 0),
                j = this.$horizScroll !== h;
            j && (this.$horizScroll = h, this.scrollBarH.setVisible(h));
            !this.$maxLines && this.$scrollPastEnd && this.scrollTop > d - this.$size.scrollerHeight && (d = d + Math.min((this.$size.scrollerHeight -
                this.lineHeight) * this.$scrollPastEnd, this.scrollTop - d + this.$size.scrollerHeight));
            h = !c && (this.$vScrollBarAlwaysVisible || this.$size.scrollerHeight - d < 0);
            (c = this.$vScroll !== h) && (this.$vScroll = h, this.scrollBarV.setVisible(h));
            this.session.setScrollTop(Math.max(-this.scrollMargin.top, Math.min(this.scrollTop, d - this.$size.scrollerHeight + this.scrollMargin.v)));
            this.session.setScrollLeft(Math.max(-this.scrollMargin.left, Math.min(this.scrollLeft, g + 2 * this.$padding - this.$size.scrollerWidth + this.scrollMargin.h)));
            var f = Math.ceil(f / this.lineHeight) - 1,
                h = Math.max(0, Math.round((this.scrollTop - e) / this.lineHeight)),
                k = h + f,
                l, m = this.lineHeight,
                h = b.screenToDocumentRow(h, 0);
            (e = b.getFoldLine(h)) && (h = e.start.row);
            l = b.documentToScreenRow(h, 0);
            e = b.getRowLength(h) * m;
            k = Math.min(b.screenToDocumentRow(k, 0), b.getLength() - 1);
            f = this.$size.scrollerHeight + b.getRowLength(k) * m + e;
            e = this.scrollTop - l * m;
            b = 0;
            if (j || c) {
                b = this.$updateCachedSize(true, this.gutterWidth, this.$size.width, this.$size.height);
                this._signal("scrollbarVisibilityChanged");
                c && (g = this.$getLongestLine())
            }
            return this.layerConfig = {
                width: g,
                padding: this.$padding,
                firstRow: h,
                firstRowScreen: l,
                lastRow: k,
                lineHeight: m,
                characterWidth: this.characterWidth,
                minHeight: f,
                maxHeight: d,
                offset: e,
                height: this.$size.scrollerHeight
            }, b
        };
        this.$updateLines = function () {
            var b = this.$changedLines.firstRow,
                c = this.$changedLines.lastRow;
            this.$changedLines = null;
            var d = this.layerConfig;
            if (!(b > d.lastRow + 1) && !(c < d.firstRow))
                if (c === Infinity) {
                    this.$showGutter && this.$gutterLayer.update(d);
                    this.$textLayer.update(d)
                } else return this.$textLayer.updateLines(d,
                    b, c), true
        };
        this.$getLongestLine = function () {
            var b = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (b = b + 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(b * this.characterWidth))
        };
        this.updateFrontMarkers = function () {
            this.$markerFront.setMarkers(this.session.getMarkers(true));
            this.$loop.schedule(this.CHANGE_MARKER_FRONT)
        };
        this.updateBackMarkers = function () {
            this.$markerBack.setMarkers(this.session.getMarkers());
            this.$loop.schedule(this.CHANGE_MARKER_BACK)
        };
        this.addGutterDecoration = function (b, c) {
            this.$gutterLayer.addGutterDecoration(b, c)
        };
        this.removeGutterDecoration = function (b, c) {
            this.$gutterLayer.removeGutterDecoration(b, c)
        };
        this.updateBreakpoints = function () {
            this.$loop.schedule(this.CHANGE_GUTTER)
        };
        this.setAnnotations = function (b) {
            this.$gutterLayer.setAnnotations(b);
            this.$loop.schedule(this.CHANGE_GUTTER)
        };
        this.updateCursor = function () {
            this.$loop.schedule(this.CHANGE_CURSOR)
        };
        this.hideCursor = function () {
            this.$cursorLayer.hideCursor()
        };
        this.showCursor =
            function () {
                this.$cursorLayer.showCursor()
            };
        this.scrollSelectionIntoView = function (b, c, d) {
            this.scrollCursorIntoView(b, d);
            this.scrollCursorIntoView(c, d)
        };
        this.scrollCursorIntoView = function (b, c) {
            if (this.$size.scrollerHeight !== 0) {
                var d = this.$cursorLayer.getPixelPosition(b),
                    e = d.left,
                    d = d.top,
                    f = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                f > d ? (c && (d = d - c * this.$size.scrollerHeight), d == 0 ? d = -this.scrollMargin.top : d == 0 && (d = +this.scrollMargin.bottom), this.session.setScrollTop(d)) : f + this.$size.scrollerHeight <
                    d + this.lineHeight && (c && (d = d + c * this.$size.scrollerHeight), this.session.setScrollTop(d + this.lineHeight - this.$size.scrollerHeight));
                d = this.scrollLeft;
                d > e ? (e < this.$padding + 2 * this.layerConfig.characterWidth && (e = -this.scrollMargin.left), this.session.setScrollLeft(e)) : d + this.$size.scrollerWidth < e + this.characterWidth ? this.session.setScrollLeft(Math.round(e + this.characterWidth - this.$size.scrollerWidth)) : d <= this.$padding && e - d < this.characterWidth && this.session.setScrollLeft(0)
            }
        };
        this.getScrollTop = function () {
            return this.session.getScrollTop()
        };
        this.getScrollLeft = function () {
            return this.session.getScrollLeft()
        };
        this.getScrollTopRow = function () {
            return this.scrollTop / this.lineHeight
        };
        this.getScrollBottomRow = function () {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
        };
        this.scrollToRow = function (b) {
            this.session.setScrollTop(b * this.lineHeight)
        };
        this.alignCursor = function (b, c) {
            typeof b == "number" && (b = {
                row: b,
                column: 0
            });
            var d = this.$size.scrollerHeight - this.lineHeight,
                d = this.$cursorLayer.getPixelPosition(b).top -
                d * (c || 0);
            return this.session.setScrollTop(d), d
        };
        this.STEPS = 8;
        this.$calcSteps = function (b, c) {
            for (var d = 0, e = this.STEPS, f = [], d = 0; d < e; ++d) f.push((c - b) * (Math.pow(d / this.STEPS - 1, 3) + 1) + b);
            return f
        };
        this.scrollToLine = function (b, c, d, e) {
            b = this.$cursorLayer.getPixelPosition({
                row: b,
                column: 0
            }).top;
            c && (b = b - this.$size.scrollerHeight / 2);
            c = this.scrollTop;
            this.session.setScrollTop(b);
            d !== false && this.animateScrolling(c, e)
        };
        this.animateScrolling = function (b, c) {
            var d = this.scrollTop;
            if (this.$animatedScroll) {
                var e = this;
                if (b !=
                    d) {
                    if (this.$scrollAnimation) {
                        var f = this.$scrollAnimation.steps;
                        if (f.length) {
                            b = f[0];
                            if (b == d) return
                        }
                    }
                    var g = e.$calcSteps(b, d);
                    this.$scrollAnimation = {
                        from: b,
                        to: d,
                        steps: g
                    };
                    clearInterval(this.$timer);
                    e.session.setScrollTop(g.shift());
                    e.session.$scrollTop = d;
                    this.$timer = setInterval(function () {
                        g.length ? (e.session.setScrollTop(g.shift()), e.session.$scrollTop = d) : d != null ? (e.session.$scrollTop = -1, e.session.setScrollTop(d), d = null) : (e.$timer = clearInterval(e.$timer), e.$scrollAnimation = null, c && c())
                    }, 10)
                }
            }
        };
        this.scrollToY =
            function (b) {
                this.scrollTop !== b && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = b)
            };
        this.scrollToX = function (b) {
            this.scrollLeft !== b && (this.scrollLeft = b);
            this.$loop.schedule(this.CHANGE_H_SCROLL)
        };
        this.scrollTo = function (b, c) {
            this.session.setScrollTop(c);
            this.session.setScrollLeft(c)
        };
        this.scrollBy = function (b, c) {
            c && this.session.setScrollTop(this.session.getScrollTop() + c);
            b && this.session.setScrollLeft(this.session.getScrollLeft() + b)
        };
        this.isScrollableBy = function (b, c) {
            if (c < 0 && this.session.getScrollTop() >=
                1 - this.scrollMargin.top || c > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight - (this.$size.scrollerHeight - this.lineHeight) * this.$scrollPastEnd < -1 + this.scrollMargin.bottom || b < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || b > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right) return true
        };
        this.pixelToScreenCoordinates = function (b, c) {
            var d = this.scroller.getBoundingClientRect(),
                e = (b + this.scrollLeft - d.left -
                    this.$padding) / this.characterWidth,
                d = Math.floor((c + this.scrollTop - d.top) / this.lineHeight),
                f = Math.round(e);
            return {
                row: d,
                column: f,
                side: e - f > 0 ? 1 : -1
            }
        };
        this.screenToTextCoordinates = function (b, c) {
            var d = this.scroller.getBoundingClientRect(),
                e = Math.round((b + this.scrollLeft - d.left - this.$padding) / this.characterWidth);
            return this.session.screenToDocumentPosition((c + this.scrollTop - d.top) / this.lineHeight, Math.max(e, 0))
        };
        this.textToScreenCoordinates = function (b, c) {
            var d = this.scroller.getBoundingClientRect(),
                e = this.session.documentToScreenPosition(b,
                    c),
                f = this.$padding + Math.round(e.column * this.characterWidth);
            return {
                pageX: d.left + f - this.scrollLeft,
                pageY: d.top + e.row * this.lineHeight - this.scrollTop
            }
        };
        this.visualizeFocus = function () {
            e.addCssClass(this.container, "ace_focus")
        };
        this.visualizeBlur = function () {
            e.removeCssClass(this.container, "ace_focus")
        };
        this.showComposition = function () {
            this.$composition || (this.$composition = {
                keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                cssText: this.textarea.style.cssText
            });
            this.$keepTextAreaAtCursor = true;
            e.addCssClass(this.textarea,
                "ace_composition");
            this.textarea.style.cssText = "";
            this.$moveTextAreaToCursor()
        };
        this.setCompositionText = function () {
            this.$moveTextAreaToCursor()
        };
        this.hideComposition = function () {
            if (this.$composition) {
                e.removeCssClass(this.textarea, "ace_composition");
                this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor;
                this.textarea.style.cssText = this.$composition.cssText;
                this.$composition = null
            }
        };
        this.setTheme = function (b, c) {
            function d(f) {
                if (g.$themeId != b) return c && c();
                if (f.cssClass) {
                    e.importCssString(f.cssText,
                        f.cssClass, g.container.ownerDocument);
                    g.theme && e.removeCssClass(g.container, g.theme.cssClass);
                    var h = "padding" in f ? f.padding : "padding" in (g.theme || {}) ? 4 : g.$padding;
                    g.$padding && h != g.$padding && g.setPadding(h);
                    g.$theme = f.cssClass;
                    g.theme = f;
                    e.addCssClass(g.container, f.cssClass);
                    e.setCssClass(g.container, "ace_dark", f.isDark);
                    g.$size && (g.$size.width = 0, g.$updateSizeAsync());
                    g._dispatchEvent("themeLoaded", {
                        theme: f
                    });
                    c && c()
                }
            }
            var g = this;
            this.$themeId = b;
            g._dispatchEvent("themeChange", {
                theme: b
            });
            !b || typeof b ==
                "string" ? f.loadModule(["theme", b || this.$options.theme.initialValue], d) : d(b)
        };
        this.getTheme = function () {
            return this.$themeId
        };
        this.setStyle = function (b, c) {
            e.setCssClass(this.container, b, c !== false)
        };
        this.unsetStyle = function (b) {
            e.removeCssClass(this.container, b)
        };
        this.setCursorStyle = function (b) {
            this.content.style.cursor != b && (this.content.style.cursor = b)
        };
        this.setMouseCursor = function (b) {
            this.content.style.cursor = b
        };
        this.destroy = function () {
            this.$textLayer.destroy();
            this.$cursorLayer.destroy()
        }
    }).call(p.prototype);
    f.defineOptions(p.prototype, "renderer", {
        animatedScroll: {
            initialValue: false
        },
        showInvisibles: {
            set: function (b) {
                this.$textLayer.setShowInvisibles(b) && this.$loop.schedule(this.CHANGE_TEXT)
            },
            initialValue: false
        },
        showPrintMargin: {
            set: function () {
                this.$updatePrintMargin()
            },
            initialValue: true
        },
        printMarginColumn: {
            set: function () {
                this.$updatePrintMargin()
            },
            initialValue: 80
        },
        printMargin: {
            set: function (b) {
                typeof b == "number" && (this.$printMarginColumn = b);
                this.$showPrintMargin = !!b;
                this.$updatePrintMargin()
            },
            get: function () {
                return this.$showPrintMargin &&
                    this.$printMarginColumn
            }
        },
        showGutter: {
            set: function (b) {
                this.$gutter.style.display = b ? "block" : "none";
                this.onGutterResize()
            },
            initialValue: true
        },
        fadeFoldWidgets: {
            set: function (b) {
                e.setCssClass(this.$gutter, "ace_fade-fold-widgets", b)
            },
            initialValue: false
        },
        showFoldWidgets: {
            set: function (b) {
                this.$gutterLayer.setShowFoldWidgets(b)
            },
            initialValue: true
        },
        displayIndentGuides: {
            set: function (b) {
                this.$textLayer.setDisplayIndentGuides(b) && this.$loop.schedule(this.CHANGE_TEXT)
            },
            initialValue: true
        },
        highlightGutterLine: {
            set: function (b) {
                if (this.$gutterLineHighlight) {
                    this.$gutterLineHighlight.style.display =
                        b ? "" : "none";
                    this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight()
                } else {
                    this.$gutterLineHighlight = e.createElement("div");
                    this.$gutterLineHighlight.className = "ace_gutter-active-line";
                    this.$gutter.appendChild(this.$gutterLineHighlight)
                }
            },
            initialValue: false,
            value: true
        },
        hScrollBarAlwaysVisible: {
            set: function () {
                (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
            },
            initialValue: false
        },
        vScrollBarAlwaysVisible: {
            set: function () {
                (!this.$vScrollBarAlwaysVisible ||
                    !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
            },
            initialValue: false
        },
        fontSize: {
            set: function (b) {
                typeof b == "number" && (b = b + "px");
                this.container.style.fontSize = b;
                this.updateFontSize()
            },
            initialValue: 12
        },
        fontFamily: {
            set: function (b) {
                this.container.style.fontFamily = b;
                this.updateFontSize()
            }
        },
        maxLines: {
            set: function () {
                this.updateFull()
            }
        },
        minLines: {
            set: function () {
                this.updateFull()
            }
        },
        scrollPastEnd: {
            set: function (b) {
                b = +b || 0;
                if (this.$scrollPastEnd != b) {
                    this.$scrollPastEnd = b;
                    this.$loop.schedule(this.CHANGE_SCROLL)
                }
            },
            initialValue: 0,
            handlesSet: true
        },
        fixedWidthGutter: {
            set: function (b) {
                this.$gutterLayer.$fixedWidth = !!b;
                this.$loop.schedule(this.CHANGE_GUTTER)
            }
        },
        theme: {
            set: function (b) {
                this.setTheme(b)
            },
            get: function () {
                return this.$themeId || this.theme
            },
            initialValue: "./theme/textmate",
            handlesSet: true
        }
    });
    c.VirtualRenderer = p
});
ace.define("ace/layer/gutter", "require exports module ace/lib/dom ace/lib/oop ace/lib/lang ace/lib/event_emitter".split(" "), function (b, c) {
    var d = b("../lib/dom"),
        e = b("../lib/oop"),
        f = b("../lib/lang"),
        g = b("../lib/event_emitter").EventEmitter,
        h = function (b) {
            this.element = d.createElement("div");
            this.element.className = "ace_layer ace_gutter-layer";
            b.appendChild(this.element);
            this.setShowFoldWidgets(this.$showFoldWidgets);
            this.gutterWidth = 0;
            this.$annotations = [];
            this.$updateAnnotations = this.$updateAnnotations.bind(this);
            this.$cells = []
        };
    (function () {
        e.implement(this, g);
        this.setSession = function (b) {
            this.session && this.session.removeEventListener("change", this.$updateAnnotations);
            this.session = b;
            b.on("change", this.$updateAnnotations)
        };
        this.addGutterDecoration = function (b, c) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration");
            this.session.addGutterDecoration(b, c)
        };
        this.removeGutterDecoration = function (b, c) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration");
            this.session.removeGutterDecoration(b, c)
        };
        this.setAnnotations = function (b) {
            this.$annotations = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.row,
                    g = this.$annotations[e];
                g || (g = this.$annotations[e] = {
                    text: []
                });
                e = (e = d.text) ? f.escapeHTML(e) : d.html || "";
                g.text.indexOf(e) === -1 && g.text.push(e);
                d = d.type;
                d == "error" ? g.className = " ace_error" : d == "warning" && g.className != " ace_error" ? g.className = " ace_warning" : d == "info" && !g.className && (g.className = " ace_info")
            }
        };
        this.$updateAnnotations = function (b) {
            if (this.$annotations.length) {
                var c =
                    b.data,
                    d = c.range,
                    b = d.start.row,
                    d = d.end.row - b;
                if (d !== 0)
                    if (c.action == "removeText" || c.action == "removeLines") this.$annotations.splice(b, d + 1, null);
                    else {
                        c = Array(d + 1);
                        c.unshift(b, 1);
                        this.$annotations.splice.apply(this.$annotations, c)
                    }
            }
        };
        this.update = function (b) {
            for (var c = b.firstRow, e = b.lastRow, f = this.session, g = f.getNextFoldLine(c), h = g ? g.start.row : Infinity, p = this.$showFoldWidgets && f.foldWidgets, s = f.$breakpoints, r = f.$decorations, o = f.$firstLineNumber, t = 0, u = f.gutterRenderer, w = null, z = -1; ;) {
                c > h && (c = g.end.row + 1,
                    g = f.getNextFoldLine(c, g), h = g ? g.start.row : Infinity);
                if (c > e) {
                    for (; this.$cells.length > z + 1;) {
                        w = this.$cells.pop();
                        this.element.removeChild(w.element)
                    }
                    break
                } (w = this.$cells[++z]) || (w = {
                    element: null,
                    textNode: null,
                    foldWidget: null
                }, w.element = d.createElement("div"), w.textNode = document.createTextNode(""), w.element.appendChild(w.textNode), this.element.appendChild(w.element), this.$cells[z] = w);
                t = "ace_gutter-cell ";
                s[c] && (t = t + s[c]);
                r[c] && (t = t + r[c]);
                this.$annotations[c] && (t = t + this.$annotations[c].className);
                w.element.className !=
                    t && (w.element.className = t);
                t = f.getRowLength(c) * b.lineHeight + "px";
                t != w.element.style.height && (w.element.style.height = t);
                if (p) {
                    var A = p[c];
                    A == null && (A = p[c] = f.getFoldWidget(c))
                }
                if (A) {
                    w.foldWidget || (w.foldWidget = d.createElement("span"), w.element.appendChild(w.foldWidget));
                    t = "ace_fold-widget ace_" + A;
                    A == "start" && c == h && c < g.end.row ? t = t + " ace_closed" : t = t + " ace_open";
                    w.foldWidget.className != t && (w.foldWidget.className = t);
                    t = b.lineHeight + "px";
                    w.foldWidget.style.height != t && (w.foldWidget.style.height = t)
                } else w.foldWidget &&
                    (w.element.removeChild(w.foldWidget), w.foldWidget = null);
                var C = t = u ? u.getText(f, c) : c + o;
                C != w.textNode.data && (w.textNode.data = C);
                c++
            }
            this.element.style.height = b.minHeight + "px";
            if (this.$fixedWidth || f.$useWrapMode) t = f.getLength() + o;
            b = u ? u.getWidth(f, t, b) : t.toString().length * b.characterWidth;
            e = this.$padding || this.$computePadding();
            b = b + (e.left + e.right);
            b !== this.gutterWidth && !isNaN(b) && (this.gutterWidth = b, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", b))
        };
        this.$fixedWidth =
            false;
        this.$showFoldWidgets = true;
        this.setShowFoldWidgets = function (b) {
            b ? d.addCssClass(this.element, "ace_folding-enabled") : d.removeCssClass(this.element, "ace_folding-enabled");
            this.$showFoldWidgets = b;
            this.$padding = null
        };
        this.getShowFoldWidgets = function () {
            return this.$showFoldWidgets
        };
        this.$computePadding = function () {
            if (!this.element.firstChild) return {
                left: 0,
                right: 0
            };
            var b = d.computedStyle(this.element.firstChild);
            return this.$padding = {}, this.$padding.left = parseInt(b.paddingLeft) + 1 || 0, this.$padding.right =
                parseInt(b.paddingRight) || 0, this.$padding
        };
        this.getRegion = function (b) {
            var c = this.$padding || this.$computePadding(),
                d = this.element.getBoundingClientRect();
            if (b.x < c.left + d.left) return "markers";
            if (this.$showFoldWidgets && b.x > d.right - c.right) return "foldWidgets"
        }
    }).call(h.prototype);
    c.Gutter = h
});
ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function (b, c) {
    var d = b("../range").Range,
        e = b("../lib/dom"),
        f = function (b) {
            this.element = e.createElement("div");
            this.element.className = "ace_layer ace_marker-layer";
            b.appendChild(this.element)
        };
    (function () {
        this.$padding = 0;
        this.setPadding = function (b) {
            this.$padding = b
        };
        this.setSession = function (b) {
            this.session = b
        };
        this.setMarkers = function (b) {
            this.markers = b
        };
        this.update = function (b) {
            if (b = b || this.config) {
                this.config = b;
                var c = [],
                    d;
                for (d in this.markers) {
                    var f = this.markers[d];
                    if (f.range) {
                        var l = f.range.clipRows(b.firstRow, b.lastRow);
                        if (!l.isEmpty())
                            if (l = l.toScreenRange(this.session), f.renderer) {
                                var m = this.$getTop(l.start.row, b);
                                f.renderer(c, l, this.$padding + l.start.column * b.characterWidth, m, b)
                            } else "fullLine" == f.type ? this.drawFullLineMarker(c, l, f.clazz, b) : "screenLine" == f.type ? this.drawScreenLineMarker(c, l, f.clazz, b) : l.isMultiLine() ? "text" == f.type ? this.drawTextMarker(c, l, f.clazz, b) : this.drawMultiLineMarker(c, l, f.clazz, b) : this.drawSingleLineMarker(c,
                                l, f.clazz + " ace_start", b)
                    } else f.update(c, this, this.session, b)
                }
                this.element = e.setInnerHtml(this.element, c.join(""))
            }
        };
        this.$getTop = function (b, c) {
            return (b - c.firstRowScreen) * c.lineHeight
        };
        this.drawTextMarker = function (b, c, e, f, l) {
            var m = c.start.row,
                n = new d(m, c.start.column, m, this.session.getScreenLastRowColumn(m));
            this.drawSingleLineMarker(b, n, e + " ace_start", f, 1, l);
            m = c.end.row;
            n = new d(m, 0, m, c.end.column);
            this.drawSingleLineMarker(b, n, e, f, 0, l);
            for (m = c.start.row + 1; m < c.end.row; m++) n.start.row = m, n.end.row =
                m, n.end.column = this.session.getScreenLastRowColumn(m), this.drawSingleLineMarker(b, n, e, f, 1, l)
        };
        this.drawMultiLineMarker = function (b, c, d, e, f) {
            var m = this.$padding,
                n = e.lineHeight,
                q = this.$getTop(c.start.row, e),
                p = m + c.start.column * e.characterWidth,
                f = f || "";
            b.push("<div class='", d, " ace_start' style='", "height:", n, "px;", "right:0;", "top:", q, "px;", "left:", p, "px;", f, "'></div>");
            q = this.$getTop(c.end.row, e);
            b.push("<div class='", d, "' style='", "height:", n, "px;", "width:", c.end.column * e.characterWidth, "px;", "top:",
                q, "px;", "left:", m, "px;", f, "'></div>");
            n = (c.end.row - c.start.row - 1) * e.lineHeight;
            0 > n || (q = this.$getTop(c.start.row + 1, e), b.push("<div class='", d, "' style='", "height:", n, "px;", "right:0;", "top:", q, "px;", "left:", m, "px;", f, "'></div>"))
        };
        this.drawSingleLineMarker = function (b, c, d, e, f, m) {
            var n = e.lineHeight,
                f = (c.end.column + (f || 0) - c.start.column) * e.characterWidth,
                q = this.$getTop(c.start.row, e);
            b.push("<div class='", d, "' style='", "height:", n, "px;", "width:", f, "px;", "top:", q, "px;", "left:", this.$padding + c.start.column *
                e.characterWidth, "px;", m || "", "'></div>")
        };
        this.drawFullLineMarker = function (b, c, d, e, f) {
            var m = this.$getTop(c.start.row, e),
                n = e.lineHeight;
            c.start.row != c.end.row && (n += this.$getTop(c.end.row, e) - m);
            b.push("<div class='", d, "' style='", "height:", n, "px;", "top:", m, "px;", "left:0;right:0;", f || "", "'></div>")
        };
        this.drawScreenLineMarker = function (b, c, d, e, f) {
            c = this.$getTop(c.start.row, e);
            b.push("<div class='", d, "' style='", "height:", e.lineHeight, "px;", "top:", c, "px;", "left:0;right:0;", f || "", "'></div>")
        }
    }).call(f.prototype);
    c.Marker = f
});
ace.define("ace/layer/text", "require exports module ace/lib/oop ace/lib/dom ace/lib/lang ace/lib/useragent ace/lib/event_emitter".split(" "), function (b, c) {
    var d = b("../lib/oop"),
        e = b("../lib/dom"),
        f = b("../lib/lang"),
        g = b("../lib/useragent"),
        h = b("../lib/event_emitter").EventEmitter,
        j = function (b) {
            this.element = e.createElement("div");
            this.element.className = "ace_layer ace_text-layer";
            b.appendChild(this.element);
            this.$characterSize = {
                width: 0,
                height: 0
            };
            this.checkForSizeChanges();
            this.$pollSizeChanges()
        };
    (function () {
        d.implement(this,
            h);
        this.EOF_CHAR = "\u00b6";
        this.EOL_CHAR = "\u00ac";
        this.TAB_CHAR = "\u2192";
        this.SPACE_CHAR = "\u00b7";
        this.$padding = 0;
        this.setPadding = function (b) {
            this.$padding = b;
            this.element.style.padding = "0 " + b + "px"
        };
        this.getLineHeight = function () {
            return this.$characterSize.height || 0
        };
        this.getCharacterWidth = function () {
            return this.$characterSize.width || 0
        };
        this.checkForSizeChanges = function () {
            var b = this.$measureSizes();
            if (b && (this.$characterSize.width !== b.width || this.$characterSize.height !== b.height)) {
                this.$measureNode.style.fontWeight =
                    "bold";
                var c = this.$measureSizes();
                this.$measureNode.style.fontWeight = "";
                this.$characterSize = b;
                this.allowBoldFonts = c && c.width === b.width && c.height === b.height;
                this._emit("changeCharacterSize", {
                    data: b
                })
            }
        };
        this.$pollSizeChanges = function () {
            var b = this;
            this.$pollSizeChangesTimer = setInterval(function () {
                b.checkForSizeChanges()
            }, 500)
        };
        this.$fontStyles = {
            fontFamily: 1,
            fontSize: 1,
            fontWeight: 1,
            fontStyle: 1,
            lineHeight: 1
        };
        this.$measureSizes = g.isIE || g.isOldGecko ? function () {
            if (!this.$measureNode) {
                var b = this.$measureNode =
                    e.createElement("div"),
                    c = b.style;
                c.width = c.height = "auto";
                c.left = c.top = "-40000px";
                c.visibility = "hidden";
                c.position = "fixed";
                c.overflow = "visible";
                c.whiteSpace = "nowrap";
                b.innerHTML = f.stringRepeat("Xy", 1E3);
                if (this.element.ownerDocument.body) this.element.ownerDocument.body.appendChild(b);
                else {
                    for (c = this.element.parentNode; !e.hasCssClass(c, "ace_editor") ;) c = c.parentNode;
                    c.appendChild(b)
                }
            }
            if (!this.element.offsetWidth) return null;
            var c = this.$measureNode.style,
                b = e.computedStyle(this.element),
                d;
            for (d in this.$fontStyles) c[d] =
                b[d];
            d = {
                height: this.$measureNode.offsetHeight,
                width: this.$measureNode.offsetWidth / 2E3
            };
            return d.width == 0 || d.height == 0 ? null : d
        } : function () {
            if (!this.$measureNode) {
                var b = this.$measureNode = e.createElement("div"),
                    c = b.style;
                c.width = c.height = "auto";
                c.left = c.top = "-100px";
                c.visibility = "hidden";
                c.position = "fixed";
                c.overflow = "visible";
                c.whiteSpace = "nowrap";
                b.innerHTML = f.stringRepeat("X", 100);
                for (c = this.element.parentNode; c && !e.hasCssClass(c, "ace_editor") ;) c = c.parentNode;
                if (!c) return this.$measureNode = null;
                c.appendChild(b)
            }
            b =
                this.$measureNode.getBoundingClientRect();
            b = {
                height: b.height,
                width: b.width / 100
            };
            return b.width == 0 || b.height == 0 ? null : b
        };
        this.setSession = function (b) {
            this.session = b;
            this.$computeTabString()
        };
        this.showInvisibles = false;
        this.setShowInvisibles = function (b) {
            return this.showInvisibles == b ? false : (this.showInvisibles = b, this.$computeTabString(), true)
        };
        this.displayIndentGuides = true;
        this.setDisplayIndentGuides = function (b) {
            return this.displayIndentGuides == b ? false : (this.displayIndentGuides = b, this.$computeTabString(),
                true)
        };
        this.$tabStrings = [];
        this.onChangeTabSize = this.$computeTabString = function () {
            var b = this.session.getTabSize();
            this.tabSize = b;
            for (var c = this.$tabStrings = [0], d = 1; d < b + 1; d++) this.showInvisibles ? c.push("<span class='ace_invisible'>" + this.TAB_CHAR + f.stringRepeat("\u00a0", d - 1) + "</span>") : c.push(f.stringRepeat("\u00a0", d));
            if (this.displayIndentGuides) {
                this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                b = "ace_indent-guide";
                if (this.showInvisibles) {
                    b = b + " ace_invisible";
                    c = f.stringRepeat(this.SPACE_CHAR, this.tabSize);
                    d = this.TAB_CHAR + f.stringRepeat("\u00a0", this.tabSize - 1)
                } else d = c = f.stringRepeat("\u00a0", this.tabSize);
                this.$tabStrings[" "] = "<span class='" + b + "'>" + c + "</span>";
                this.$tabStrings["\t"] = "<span class='" + b + "'>" + d + "</span>"
            }
        };
        this.updateLines = function (b, c, d) {
            (this.config.lastRow != b.lastRow || this.config.firstRow != b.firstRow) && this.scrollLines(b);
            this.config = b;
            for (var f = Math.max(c, b.firstRow), d = Math.min(d, b.lastRow), c = this.element.childNodes, g = 0, h = b.firstRow; h < f; h++) {
                var j = this.session.getFoldLine(h);
                if (j) {
                    if (j.containsRow(f)) {
                        f =
                            j.start.row;
                        break
                    }
                    h = j.end.row
                }
                g++
            }
            h = f;
            for (f = (j = this.session.getNextFoldLine(h)) ? j.start.row : Infinity; ;) {
                h > f && (h = j.end.row + 1, j = this.session.getNextFoldLine(h, j), f = j ? j.start.row : Infinity);
                if (h > d) break;
                var r = c[g++];
                if (r) {
                    var o = [];
                    this.$renderLine(o, h, !this.$useLineGroups(), h == f ? j : false);
                    r.style.height = b.lineHeight * this.session.getRowLength(h) + "px";
                    e.setInnerHtml(r, o.join(""))
                }
                h++
            }
        };
        this.scrollLines = function (b) {
            var c = this.config;
            this.config = b;
            if (!c || c.lastRow < b.firstRow || b.lastRow < c.firstRow) return this.update(b);
            var d = this.element;
            if (c.firstRow < b.firstRow)
                for (var e = this.session.getFoldedRowCount(c.firstRow, b.firstRow - 1) ; e > 0; e--) d.removeChild(d.firstChild);
            if (c.lastRow > b.lastRow)
                for (e = this.session.getFoldedRowCount(b.lastRow + 1, c.lastRow) ; e > 0; e--) d.removeChild(d.lastChild);
            if (b.firstRow < c.firstRow) {
                e = this.$renderLinesFragment(b, b.firstRow, c.firstRow - 1);
                d.firstChild ? d.insertBefore(e, d.firstChild) : d.appendChild(e)
            }
            if (b.lastRow > c.lastRow) {
                e = this.$renderLinesFragment(b, c.lastRow + 1, b.lastRow);
                d.appendChild(e)
            }
        };
        this.$renderLinesFragment = function (b, c, d) {
            for (var f = this.element.ownerDocument.createDocumentFragment(), g = this.session.getNextFoldLine(c), h = g ? g.start.row : Infinity; ;) {
                c > h && (c = g.end.row + 1, g = this.session.getNextFoldLine(c, g), h = g ? g.start.row : Infinity);
                if (c > d) break;
                var j = e.createElement("div"),
                    r = [];
                this.$renderLine(r, c, false, c == h ? g : false);
                j.innerHTML = r.join("");
                if (this.$useLineGroups()) {
                    j.className = "ace_line_group";
                    f.appendChild(j);
                    j.style.height = b.lineHeight * this.session.getRowLength(c) + "px"
                } else
                    for (j =
                        j.childNodes; j.length;) f.appendChild(j[0]);
                c++
            }
            return f
        };
        this.update = function (b) {
            this.config = b;
            for (var c = [], d = b.lastRow, f = b.firstRow, g = this.session.getNextFoldLine(f), h = g ? g.start.row : Infinity; ;) {
                f > h && (f = g.end.row + 1, g = this.session.getNextFoldLine(f, g), h = g ? g.start.row : Infinity);
                if (f > d) break;
                this.$useLineGroups() && c.push("<div class='ace_line_group' style='height:", b.lineHeight * this.session.getRowLength(f), "px'>");
                this.$renderLine(c, f, false, f == h ? g : false);
                this.$useLineGroups() && c.push("</div>");
                f++
            }
            this.element =
                e.setInnerHtml(this.element, c.join(""))
        };
        this.$textToken = {
            text: true,
            rparen: true,
            lparen: true
        };
        this.$renderToken = function (b, c, d, e) {
            var g = this,
                h = e.replace(/\t|&|<|( +)|([\x00-\x1f\x80-\xa0\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,
                    function (b, d, e, h) {
                        if (d) return g.showInvisibles ? "<span class='ace_invisible'>" + f.stringRepeat(g.SPACE_CHAR, b.length) + "</span>" : f.stringRepeat("\u00a0", b.length);
                        if (b == "&") return "&#38;";
                        if (b == "<") return "&#60;";
                        if (b == "\t") {
                            b = g.session.getScreenTabSize(c + h);
                            return c = c + (b - 1), g.$tabStrings[b]
                        }
                        if (b == "\u3000") {
                            b = g.showInvisibles ? "ace_cjk ace_invisible" : "ace_cjk";
                            d = g.showInvisibles ? g.SPACE_CHAR : "";
                            return c = c + 1, "<span class='" + b + "' style='width:" + g.config.characterWidth * 2 + "px'>" + d + "</span>"
                        }
                        return e ? "<span class='ace_invisible ace_invalid'>" +
                            g.SPACE_CHAR + "</span>" : (c = c + 1, "<span class='ace_cjk' style='width:" + g.config.characterWidth * 2 + "px'>" + b + "</span>")
                    });
            if (this.$textToken[d.type]) b.push(h);
            else {
                var j = "ace_" + d.type.replace(/\./g, " ace_"),
                    r = "";
                d.type == "fold" && (r = " style='width:" + d.value.length * this.config.characterWidth + "px;' ");
                b.push("<span class='", j, "'", r, ">", h, "</span>")
            }
            return c + e.length
        };
        this.renderIndentGuide = function (b, c, d) {
            var e = c.search(this.$indentGuideRe);
            return e <= 0 || e >= d ? c : c[0] == " " ? (e = e - e % this.tabSize, b.push(f.stringRepeat(this.$tabStrings[" "],
                e / this.tabSize)), c.substr(e)) : c[0] == "\t" ? (b.push(f.stringRepeat(this.$tabStrings["\t"], e)), c.substr(e)) : c
        };
        this.$renderWrappedLine = function (b, c, d, e) {
            for (var f = 0, g = 0, h = d[0], j = 0, o = 0; o < c.length; o++) {
                var t = c[o],
                    u = t.value;
                if (o == 0 && this.displayIndentGuides) {
                    f = u.length;
                    u = this.renderIndentGuide(b, u, h);
                    if (!u) continue;
                    f = f - u.length
                }
                if (f + u.length < h) {
                    j = this.$renderToken(b, j, t, u);
                    f = f + u.length
                } else {
                    for (; f + u.length >= h;) {
                        this.$renderToken(b, j, t, u.substring(0, h - f));
                        u = u.substring(h - f);
                        f = h;
                        e || b.push("</div>", "<div class='ace_line' style='height:",
                            this.config.lineHeight, "px'>");
                        g++;
                        j = 0;
                        h = d[g] || Number.MAX_VALUE
                    }
                    u.length != 0 && (f = f + u.length, j = this.$renderToken(b, j, t, u))
                }
            }
        };
        this.$renderSimpleLine = function (b, c) {
            var d = 0,
                e = c[0],
                f = e.value;
            this.displayIndentGuides && (f = this.renderIndentGuide(b, f));
            f && (d = this.$renderToken(b, d, e, f));
            for (var g = 1; g < c.length; g++) {
                e = c[g];
                f = e.value;
                d = this.$renderToken(b, d, e, f)
            }
        };
        this.$renderLine = function (b, c, d, e) {
            !e && e != 0 && (e = this.session.getFoldLine(c));
            var f = e ? this.$getFoldLineTokens(c, e) : this.session.getTokens(c);
            d || b.push("<div class='ace_line' style='height:",
                this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(c)), "px'>");
            if (f.length) {
                var g = this.session.getRowSplitData(c);
                g && g.length ? this.$renderWrappedLine(b, f, g, d) : this.$renderSimpleLine(b, f)
            }
            this.showInvisibles && (e && (c = e.end.row), b.push("<span class='ace_invisible'>", c == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>"));
            d || b.push("</div>")
        };
        this.$getFoldLineTokens = function (b, c) {
            var d = this.session,
                e = [],
                f = d.getTokens(b);
            return c.walk(function (b, c, g, h, j) {
                if (b != null) e.push({
                    type: "fold",
                    value: b
                });
                else {
                    j && (f = d.getTokens(c));
                    if (f.length) a: {
                        b = f;
                        for (j = c = 0; j + b[c].value.length < h;) {
                            j = j + b[c].value.length;
                            c++;
                            if (c == b.length) break a
                        }
                        if (j != h) {
                            var k = b[c].value.substring(h - j);
                            k.length > g - h && (k = k.substring(0, g - h));
                            e.push({
                                type: b[c].type,
                                value: k
                            });
                            j = h + k.length;
                            c = c + 1
                        }
                        for (; j < g && c < b.length;) {
                            k = b[c].value;
                            k.length + j > g ? e.push({
                                type: b[c].type,
                                value: k.substring(0, g - j)
                            }) : e.push(b[c]);
                            j = j + k.length;
                            c = c + 1
                        }
                    }
                }
            }, c.end.row, this.session.getLine(c.end.row).length), e
        };
        this.$useLineGroups = function () {
            return this.session.getUseWrapMode()
        };
        this.destroy = function () {
            clearInterval(this.$pollSizeChangesTimer);
            this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode);
            delete this.$measureNode
        }
    }).call(j.prototype);
    c.Text = j
});
ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function (b, c) {
    var d = b("../lib/dom"),
        e = function (b) {
            this.element = d.createElement("div");
            this.element.className = "ace_layer ace_cursor-layer";
            b.appendChild(this.element);
            this.isVisible = !1;
            this.isBlinking = !0;
            this.blinkInterval = 1E3;
            this.smoothBlinking = !1;
            this.cursors = [];
            this.cursor = this.addCursor();
            d.addCssClass(this.element, "ace_hidden-cursors")
        };
    (function () {
        this.$padding = 0;
        this.setPadding = function (b) {
            this.$padding = b
        };
        this.setSession =
            function (b) {
                this.session = b
            };
        this.setBlinking = function (b) {
            b != this.isBlinking && (this.isBlinking = b, this.restartTimer())
        };
        this.setBlinkInterval = function (b) {
            b != this.blinkInterval && (this.blinkInterval = b, this.restartTimer())
        };
        this.setSmoothBlinking = function (b) {
            b != this.smoothBlinking && (this.smoothBlinking = b, b ? d.addCssClass(this.element, "ace_smooth-blinking") : d.removeCssClass(this.element, "ace_smooth-blinking"), this.restartTimer())
        };
        this.addCursor = function () {
            var b = d.createElement("div");
            return b.className =
                "ace_cursor", this.element.appendChild(b), this.cursors.push(b), b
        };
        this.removeCursor = function () {
            if (1 < this.cursors.length) {
                var b = this.cursors.pop();
                return b.parentNode.removeChild(b), b
            }
        };
        this.hideCursor = function () {
            this.isVisible = !1;
            d.addCssClass(this.element, "ace_hidden-cursors");
            this.restartTimer()
        };
        this.showCursor = function () {
            this.isVisible = !0;
            d.removeCssClass(this.element, "ace_hidden-cursors");
            this.restartTimer()
        };
        this.restartTimer = function () {
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId);
            this.smoothBlinking && d.removeCssClass(this.element, "ace_smooth-blinking");
            for (var b = this.cursors.length; b--;) this.cursors[b].style.opacity = "";
            if (this.isBlinking && this.blinkInterval && this.isVisible) {
                this.smoothBlinking && setTimeout(function () {
                    d.addCssClass(this.element, "ace_smooth-blinking")
                }.bind(this));
                var c = function () {
                    this.timeoutId = setTimeout(function () {
                        for (var b = this.cursors.length; b--;) this.cursors[b].style.opacity = 0
                    }.bind(this), 0.6 * this.blinkInterval)
                }.bind(this);
                this.intervalId = setInterval(function () {
                    for (var b =
                            this.cursors.length; b--;) this.cursors[b].style.opacity = "";
                    c()
                }.bind(this), this.blinkInterval);
                c()
            }
        };
        this.getPixelPosition = function (b, c) {
            if (!this.config || !this.session) return {
                left: 0,
                top: 0
            };
            b || (b = this.session.selection.getCursor());
            var d = this.session.documentToScreenPosition(b);
            return {
                left: this.$padding + d.column * this.config.characterWidth,
                top: (d.row - (c ? this.config.firstRowScreen : 0)) * this.config.lineHeight
            }
        };
        this.update = function (b) {
            this.config = b;
            var c = this.session.$selectionMarkers,
                d = 0,
                e = 0;
            if (void 0 ===
                c || 0 === c.length) c = [{
                    cursor: null
                }];
            for (var d = 0, k = c.length; d < k; d++) {
                var l = this.getPixelPosition(c[d].cursor, !0);
                if (!((l.top > b.height + b.offset || l.top < -b.offset) && 1 < d)) {
                    var m = (this.cursors[e++] || this.addCursor()).style;
                    m.left = l.left + "px";
                    m.top = l.top + "px";
                    m.width = b.characterWidth + "px";
                    m.height = b.lineHeight + "px"
                }
            }
            for (; this.cursors.length > e;) this.removeCursor();
            this.$setOverwrite(this.session.getOverwrite());
            this.$pixelPos = l;
            this.restartTimer()
        };
        this.$setOverwrite = function (b) {
            b != this.overwrite && (this.overwrite =
                b, b ? d.addCssClass(this.element, "ace_overwrite-cursors") : d.removeCssClass(this.element, "ace_overwrite-cursors"))
        };
        this.destroy = function () {
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId)
        }
    }).call(e.prototype);
    c.Cursor = e
});
ace.define("ace/scrollbar", "require exports module ace/lib/oop ace/lib/dom ace/lib/event ace/lib/event_emitter".split(" "), function (b, c) {
    var d = b("./lib/oop"),
        e = b("./lib/dom"),
        f = b("./lib/event"),
        g = b("./lib/event_emitter").EventEmitter,
        h = function (b) {
            this.element = e.createElement("div");
            this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix;
            this.inner = e.createElement("div");
            this.inner.className = "ace_scrollbar-inner";
            this.element.appendChild(this.inner);
            b.appendChild(this.element);
            this.setVisible(false);
            this.skipEvent = false;
            f.addListener(this.element, "scroll", this.onScroll.bind(this));
            f.addListener(this.element, "mousedown", f.preventDefault)
        };
    (function () {
        d.implement(this, g);
        this.setVisible = function (b) {
            this.element.style.display = b ? "" : "none";
            this.isVisible = b
        }
    }).call(h.prototype);
    var j = function (b, c) {
        h.call(this, b);
        this.scrollTop = 0;
        c.$scrollbarWidth = this.width = e.scrollbarWidth(b.ownerDocument);
        this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px"
    };
    d.inherits(j, h);
    (function () {
        this.classSuffix =
            "-v";
        this.onScroll = function () {
            this.skipEvent || (this.scrollTop = this.element.scrollTop, this._emit("scroll", {
                data: this.scrollTop
            }));
            this.skipEvent = false
        };
        this.getWidth = function () {
            return this.isVisible ? this.width : 0
        };
        this.setHeight = function (b) {
            this.element.style.height = b + "px"
        };
        this.setInnerHeight = function (b) {
            this.inner.style.height = b + "px"
        };
        this.setScrollHeight = function (b) {
            this.inner.style.height = b + "px"
        };
        this.setScrollTop = function (b) {
            this.scrollTop != b && (this.skipEvent = true, this.scrollTop = this.element.scrollTop =
                b)
        }
    }).call(j.prototype);
    var k = function (b, c) {
        h.call(this, b);
        this.scrollLeft = 0;
        this.height = c.$scrollbarWidth;
        this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
    };
    d.inherits(k, h);
    (function () {
        this.classSuffix = "-h";
        this.onScroll = function () {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {
                data: this.scrollLeft
            }));
            this.skipEvent = false
        };
        this.getHeight = function () {
            return this.isVisible ? this.height : 0
        };
        this.setWidth = function (b) {
            this.element.style.width = b + "px"
        };
        this.setInnerWidth = function (b) {
            this.inner.style.width = b + "px"
        };
        this.setScrollWidth = function (b) {
            this.inner.style.width = b + "px"
        };
        this.setScrollLeft = function (b) {
            this.scrollLeft != b && (this.skipEvent = true, this.scrollLeft = this.element.scrollLeft = b)
        }
    }).call(k.prototype);
    c.ScrollBar = j;
    c.ScrollBarV = j;
    c.ScrollBarH = k;
    c.VScrollBar = j;
    c.HScrollBar = k
});
ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function (b, c) {
    var d = b("./lib/event"),
        e = function (b, c) {
            this.onRender = b;
            this.pending = !1;
            this.changes = 0;
            this.window = c || window
        };
    (function () {
        this.schedule = function (b) {
            this.changes |= b;
            if (!this.pending && this.changes) {
                this.pending = !0;
                var c = this;
                d.nextFrame(function () {
                    c.pending = !1;
                    for (var b; b = c.changes;) c.changes = 0, c.onRender(b)
                }, this.window)
            }
        }
    }).call(e.prototype);
    c.RenderLoop = e
});
ace.define("ace/multi_select", "require exports module ace/range_list ace/range ace/selection ace/mouse/multi_select_handler ace/lib/event ace/lib/lang ace/commands/multi_select_commands ace/search ace/edit_session ace/editor ace/config".split(" "), function (b, c) {
    function d(b) {
        if (!b.$multiselectOnSessionChange) {
            b.$onAddRange = b.$onAddRange.bind(b);
            b.$onRemoveRange = b.$onRemoveRange.bind(b);
            b.$onMultiSelect = b.$onMultiSelect.bind(b);
            b.$onSingleSelect = b.$onSingleSelect.bind(b);
            b.$multiselectOnSessionChange =
                c.onSessionChange.bind(b);
            b.$multiselectOnSessionChange(b);
            b.on("changeSession", b.$multiselectOnSessionChange);
            b.on("mousedown", j);
            b.commands.addCommands(m.defaultCommands);
            e(b)
        }
    }

    function e(b) {
        function c() {
            e && (b.renderer.setMouseCursor(""), e = false)
        }
        var d = b.textInput.getElement(),
            e = false;
        k.addListener(d, "keydown", function (d) {
            d.keyCode == 18 && !d.ctrlKey && !d.shiftKey && !d.metaKey ? e || (b.renderer.setMouseCursor("crosshair"), e = true) : e && c()
        });
        k.addListener(d, "keyup", c);
        k.addListener(d, "blur", c)
    }
    var f = b("./range_list").RangeList,
        g = b("./range").Range,
        h = b("./selection").Selection,
        j = b("./mouse/multi_select_handler").onMouseDown,
        k = b("./lib/event"),
        l = b("./lib/lang"),
        m = b("./commands/multi_select_commands");
    c.commands = m.defaultCommands.concat(m.multiSelectCommands);
    var n = new (b("./search").Search);
    (function () {
        this.getSelectionMarkers = function () {
            return this.$selectionMarkers
        }
    }).call(b("./edit_session").EditSession.prototype);
    (function () {
        this.rangeList = this.ranges = null;
        this.addRange = function (b, c) {
            if (b) {
                if (!this.inMultiSelectMode &&
                    this.rangeCount == 0) {
                    var d = this.toOrientedRange();
                    this.rangeList.add(d);
                    this.rangeList.add(b);
                    if (this.rangeList.ranges.length != 2) return this.rangeList.removeAll(), c || this.fromOrientedRange(b);
                    this.rangeList.removeAll();
                    this.rangeList.add(d);
                    this.$onAddRange(d)
                }
                b.cursor || (b.cursor = b.end);
                d = this.rangeList.add(b);
                return this.$onAddRange(b), d.length && this.$onRemoveRange(d), this.rangeCount > 1 && !this.inMultiSelectMode && (this._emit("multiSelect"), this.inMultiSelectMode = true, this.session.$undoSelect = false,
                    this.rangeList.attach(this.session)), c || this.fromOrientedRange(b)
            }
        };
        this.toSingleRange = function (b) {
            var b = b || this.ranges[0],
                c = this.rangeList.removeAll();
            c.length && this.$onRemoveRange(c);
            b && this.fromOrientedRange(b)
        };
        this.substractPoint = function (b) {
            if (b = this.rangeList.substractPoint(b)) return this.$onRemoveRange(b), b[0]
        };
        this.mergeOverlappingRanges = function () {
            var b = this.rangeList.merge();
            b.length ? this.$onRemoveRange(b) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
        };
        this.$onAddRange = function (b) {
            this.rangeCount =
                this.rangeList.ranges.length;
            this.ranges.unshift(b);
            this._emit("addRange", {
                range: b
            })
        };
        this.$onRemoveRange = function (b) {
            this.rangeCount = this.rangeList.ranges.length;
            if (this.rangeCount == 1 && this.inMultiSelectMode) {
                var c = this.rangeList.ranges.pop();
                b.push(c);
                this.rangeCount = 0
            }
            for (var d = b.length; d--;) this.ranges.splice(this.ranges.indexOf(b[d]), 1);
            this._emit("removeRange", {
                ranges: b
            });
            this.rangeCount == 0 && this.inMultiSelectMode && (this.inMultiSelectMode = false, this._emit("singleSelect"), this.session.$undoSelect =
                true, this.rangeList.detach(this.session));
            (c = c || this.ranges[0]) && !c.isEqual(this.getRange()) && this.fromOrientedRange(c)
        };
        this.$initRangeList = function () {
            if (!this.rangeList) {
                this.rangeList = new f;
                this.ranges = [];
                this.rangeCount = 0
            }
        };
        this.getAllRanges = function () {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
        };
        this.splitIntoLines = function () {
            if (this.rangeCount > 1) {
                var b = this.rangeList.ranges,
                    c = b[b.length - 1],
                    b = g.fromPoints(b[0].start, c.end);
                this.toSingleRange();
                this.setSelectionRange(b,
                    c.cursor == c.start)
            } else {
                var b = this.getRange(),
                    d = this.isBackwards(),
                    e = b.start.row,
                    c = b.end.row;
                if (e == c) {
                    if (d) {
                        c = b.end;
                        b = b.start
                    } else {
                        c = b.start;
                        b = b.end
                    }
                    this.addRange(g.fromPoints(b, b));
                    this.addRange(g.fromPoints(c, c))
                } else {
                    var d = [],
                        f = this.getLineRange(e, true);
                    f.start.column = b.start.column;
                    d.push(f);
                    for (e = e + 1; e < c; e++) d.push(this.getLineRange(e, true));
                    f = this.getLineRange(c, true);
                    f.end.column = b.end.column;
                    d.push(f);
                    d.forEach(this.addRange, this)
                }
            }
        };
        this.toggleBlockSelection = function () {
            if (this.rangeCount >
                1) {
                var b = this.rangeList.ranges,
                    c = b[b.length - 1],
                    b = g.fromPoints(b[0].start, c.end);
                this.toSingleRange();
                this.setSelectionRange(b, c.cursor == c.start)
            } else {
                c = this.session.documentToScreenPosition(this.selectionLead);
                b = this.session.documentToScreenPosition(this.selectionAnchor);
                this.rectangularRangeBlock(c, b).forEach(this.addRange, this)
            }
        };
        this.rectangularRangeBlock = function (b, c, d) {
            var e = [],
                f = b.column < c.column;
            if (f) var h = b.column,
                j = c.column;
            else {
                h = c.column;
                j = b.column
            }
            var k = b.row < c.row;
            if (k) var l = b.row,
                b =
                c.row;
            else {
                l = c.row;
                b = b.row
            }
            h < 0 && (h = 0);
            l < 0 && (l = 0);
            for (l == b && (d = true) ; l <= b; l++) {
                c = g.fromPoints(this.session.screenToDocumentPosition(l, h), this.session.screenToDocumentPosition(l, j));
                if (c.isEmpty()) {
                    if (m && c.end.row == m.row && c.end.column == m.column) break;
                    var m = c.end
                }
                c.cursor = f ? c.start : c.end;
                e.push(c)
            }
            k && e.reverse();
            if (!d) {
                for (d = e.length - 1; e[d].isEmpty() && d > 0;) d--;
                if (d > 0)
                    for (var n = 0; e[n].isEmpty() ;) n++;
                for (; d >= n; d--) e[d].isEmpty() && e.splice(d, 1)
            }
            return e
        }
    }).call(h.prototype);
    var q = b("./editor").Editor;
    (function () {
        this.updateSelectionMarkers =
            function () {
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers()
            };
        this.addSelectionMarker = function (b) {
            b.cursor || (b.cursor = b.end);
            var c = this.getSelectionStyle();
            return b.marker = this.session.addMarker(b, "ace_selection", c), this.session.$selectionMarkers.push(b), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, b
        };
        this.removeSelectionMarker = function (b) {
            if (b.marker) {
                this.session.removeMarker(b.marker);
                b = this.session.$selectionMarkers.indexOf(b);
                b != -1 && this.session.$selectionMarkers.splice(b,
                    1);
                this.session.selectionMarkerCount = this.session.$selectionMarkers.length
            }
        };
        this.removeSelectionMarkers = function (b) {
            for (var c = this.session.$selectionMarkers, d = b.length; d--;) {
                var e = b[d];
                if (e.marker) {
                    this.session.removeMarker(e.marker);
                    e = c.indexOf(e);
                    e != -1 && c.splice(e, 1)
                }
            }
            this.session.selectionMarkerCount = c.length
        };
        this.$onAddRange = function (b) {
            this.addSelectionMarker(b.range);
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers()
        };
        this.$onRemoveRange = function (b) {
            this.removeSelectionMarkers(b.ranges);
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers()
        };
        this.$onMultiSelect = function () {
            if (!this.inMultiSelectMode) {
                this.inMultiSelectMode = true;
                this.setStyle("ace_multiselect");
                this.keyBinding.addKeyboardHandler(m.keyboardHandler);
                this.commands.setDefaultHandler("exec", this.$onMultiSelectExec);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers()
            }
        };
        this.$onSingleSelect = function () {
            if (!this.session.multiSelect.inVirtualMode) {
                this.inMultiSelectMode = false;
                this.unsetStyle("ace_multiselect");
                this.keyBinding.removeKeyboardHandler(m.keyboardHandler);
                this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers()
            }
        };
        this.$onMultiSelectExec = function (b) {
            var c = b.command,
                d = b.editor;
            if (d.multiSelect) {
                if (c.multiSelectAction) c.multiSelectAction == "forEach" ? e = d.forEachSelection(c, b.args) : c.multiSelectAction == "forEachLine" ? e = d.forEachSelection(c, b.args, true) : c.multiSelectAction == "single" ? (d.exitMultiSelectMode(), e = c.exec(d, b.args || {})) :
                    e = c.multiSelectAction(d, b.args || {});
                else {
                    var e = c.exec(d, b.args || {});
                    d.multiSelect.addRange(d.multiSelect.toOrientedRange());
                    d.multiSelect.mergeOverlappingRanges()
                }
                return e
            }
        };
        this.forEachSelection = function (b, c, d) {
            if (!this.inVirtualSelectionMode) {
                var e = this.session,
                    f = this.selection,
                    g = f.rangeList,
                    j, k = f._eventRegistry;
                f._eventRegistry = {};
                var l = new h(e);
                this.inVirtualSelectionMode = true;
                for (var m = g.ranges.length; m--;) {
                    if (d)
                        for (; m > 0 && g.ranges[m].start.row == g.ranges[m - 1].end.row;) m--;
                    l.fromOrientedRange(g.ranges[m]);
                    this.selection = e.selection = l;
                    var n = b.exec(this, c || {});
                    !j == void 0 && (j = n);
                    l.toOrientedRange(g.ranges[m])
                }
                l.detach();
                this.selection = e.selection = f;
                this.inVirtualSelectionMode = false;
                f._eventRegistry = k;
                f.mergeOverlappingRanges();
                b = this.renderer.$scrollAnimation;
                return this.onCursorChange(), this.onSelectionChange(), b && b.from == b.to && this.renderer.animateScrolling(b.from), j
            }
        };
        this.exitMultiSelectMode = function () {
            this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
        };
        this.getSelectedText =
            function () {
                var b = "";
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    for (var b = this.multiSelect.rangeList.ranges, c = [], d = 0; d < b.length; d++) c.push(this.session.getTextRange(b[d]));
                    d = this.session.getDocument().getNewLineCharacter();
                    b = c.join(d);
                    b.length == (c.length - 1) * d.length && (b = "")
                } else this.selection.isEmpty() || (b = this.session.getTextRange(this.getSelectionRange()));
                return b
            };
        this.onPaste = function (b) {
            if (!this.$readOnly) {
                this._signal("paste", b);
                if (!this.inMultiSelectMode || this.inVirtualSelectionMode) return this.insert(b);
                var c = b.split(/\r\n|\r|\n/),
                    d = this.selection.rangeList.ranges;
                if (c.length > d.length || c.length < 2 || !c[1]) return this.commands.exec("insertstring", this, b);
                for (b = d.length; b--;) {
                    var e = d[b];
                    e.isEmpty() || this.session.remove(e);
                    this.session.insert(e.start, c[b])
                }
            }
        };
        this.findAll = function (b, c, d) {
            c = c || {};
            c.needle = b || c.needle;
            this.$search.set(c);
            b = this.$search.findAll(this.session);
            if (!b.length) return 0;
            this.$blockScrolling = this.$blockScrolling + 1;
            c = this.multiSelect;
            d || c.toSingleRange(b[0]);
            for (d = b.length; d--;) c.addRange(b[d],
                true);
            return this.$blockScrolling = this.$blockScrolling - 1, b.length
        };
        this.selectMoreLines = function (b, c) {
            var d = this.selection.toOrientedRange(),
                e = d.cursor == d.end,
                f = this.session.documentToScreenPosition(d.cursor);
            this.selection.$desiredColumn && (f.column = this.selection.$desiredColumn);
            var h = this.session.screenToDocumentPosition(f.row + b, f.column);
            if (d.isEmpty()) j = h;
            else var j = this.session.documentToScreenPosition(e ? d.end : d.start),
                j = this.session.screenToDocumentPosition(j.row + b, j.column);
            if (e) {
                e = g.fromPoints(h,
                    j);
                e.cursor = e.start
            } else {
                e = g.fromPoints(j, h);
                e.cursor = e.end
            }
            e.desiredColumn = f.column;
            if (this.selection.inMultiSelectMode) {
                if (c) var k = d.cursor
            } else this.selection.addRange(d);
            this.selection.addRange(e);
            k && this.selection.substractPoint(k)
        };
        this.transposeSelections = function (b) {
            for (var c = this.session, d = c.multiSelect, e = d.ranges, f = e.length; f--;) {
                var g = e[f];
                if (g.isEmpty()) {
                    var h = c.getWordRange(g.start.row, g.start.column);
                    g.start.row = h.start.row;
                    g.start.column = h.start.column;
                    g.end.row = h.end.row;
                    g.end.column =
                        h.end.column
                }
            }
            d.mergeOverlappingRanges();
            d = [];
            for (f = e.length; f--;) {
                g = e[f];
                d.unshift(c.getTextRange(g))
            }
            b < 0 ? d.unshift(d.pop()) : d.push(d.shift());
            for (f = e.length; f--;) {
                g = e[f];
                h = g.clone();
                c.replace(g, d[f]);
                g.start.row = h.start.row;
                g.start.column = h.start.column
            }
        };
        this.selectMore = function (b, c) {
            var d = this.session,
                e = d.multiSelect.toOrientedRange();
            e.isEmpty() && (e = d.getWordRange(e.start.row, e.start.column), e.cursor = b == -1 ? e.start : e.end, this.multiSelect.addRange(e));
            var f = d.getTextRange(e);
            (d = (n.$options.wrap =
                true, n.$options.needle = f, n.$options.backwards = b == -1, n.find(d))) && (d.cursor = b == -1 ? d.start : d.end, this.$blockScrolling = this.$blockScrolling + 1, this.session.unfold(d), this.multiSelect.addRange(d), this.$blockScrolling = this.$blockScrolling - 1, this.renderer.scrollCursorIntoView(null, 0.5));
            c && this.multiSelect.substractPoint(e.cursor)
        };
        this.alignCursors = function () {
            var b = this.session,
                c = b.multiSelect,
                d = c.ranges;
            if (d.length) {
                var e = -1,
                    f = d.filter(function (b) {
                        if (b.cursor.row == e) return true;
                        e = b.cursor.row
                    });
                c.$onRemoveRange(f);
                var h = 0,
                    j = Infinity,
                    k = d.map(function (c) {
                        var c = c.cursor,
                            d = b.getLine(c.row).substr(c.column).search(/\S/g);
                        return d == -1 && (d = 0), c.column > h && (h = c.column), d < j && (j = d), d
                    });
                d.forEach(function (c, d) {
                    var e = c.cursor,
                        f = h - e.column,
                        m = k[d] - j;
                    f > m ? b.insert(e, l.stringRepeat(" ", f - m)) : b.remove(new g(e.row, e.column, e.row, e.column - f + m));
                    c.start.column = c.end.column = h;
                    c.start.row = c.end.row = e.row;
                    c.cursor = c.end
                });
                c.fromOrientedRange(d[0]);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers()
            } else {
                var c = this.selection.getRange(),
                    d = c.start.row,
                    m = c.end.row;
                if (f = d == m) {
                    var n = this.session.getLength(),
                        q;
                    do q = this.session.getLine(m); while (/[=:]/.test(q) && ++m < n);
                    do q = this.session.getLine(d); while (/[=:]/.test(q) && --d > 0);
                    d < 0 && (d = 0);
                    m >= n && (m = n - 1)
                }
                m = this.session.doc.removeLines(d, m);
                m = this.$reAlignText(m, f);
                this.session.doc.insert({
                    row: d,
                    column: 0
                }, m.join("\n") + "\n");
                f || (c.start.column = 0, c.end.column = m[m.length - 1].length);
                this.selection.setRange(c)
            }
        };
        this.$reAlignText = function (b, c) {
            function d(b) {
                return l.stringRepeat(" ", b)
            }

            function e(b) {
                return b[2] ?
                    d(k) + b[2] + d(m - b[2].length + n) + b[4].replace(/^([=:])\s+/, "$1 ") : b[0]
            }

            function f(b) {
                return b[2] ? d(k + m - b[2].length) + b[2] + d(n, " ") + b[4].replace(/^([=:])\s+/, "$1 ") : b[0]
            }

            function g(b) {
                return b[2] ? d(k) + b[2] + d(n) + b[4].replace(/^([=:])\s+/, "$1 ") : b[0]
            }
            var h = true,
                j = true,
                k, m, n;
            return b.map(function (b) {
                var c = b.match(/(\s*)(.*?)(\s*)([=:].*)/);
                return c ? k == null ? (k = c[1].length, m = c[2].length, n = c[3].length, c) : (k + m + n != c[1].length + c[2].length + c[3].length && (j = false), k != c[1].length && (h = false), k > c[1].length && (k = c[1].length),
                    m < c[2].length && (m = c[2].length), n > c[3].length && (n = c[3].length), c) : [b]
            }).map(c ? e : h ? j ? f : e : g)
        }
    }).call(q.prototype);
    c.onSessionChange = function (b) {
        var c = b.session;
        c.multiSelect || (c.$selectionMarkers = [], c.selection.$initRangeList(), c.multiSelect = c.selection);
        this.multiSelect = c.multiSelect;
        (b = b.oldSession) && (b.multiSelect.removeEventListener("addRange", this.$onAddRange), b.multiSelect.removeEventListener("removeRange", this.$onRemoveRange), b.multiSelect.removeEventListener("multiSelect", this.$onMultiSelect),
            b.multiSelect.removeEventListener("singleSelect", this.$onSingleSelect));
        c.multiSelect.on("addRange", this.$onAddRange);
        c.multiSelect.on("removeRange", this.$onRemoveRange);
        c.multiSelect.on("multiSelect", this.$onMultiSelect);
        c.multiSelect.on("singleSelect", this.$onSingleSelect);
        this.inMultiSelectMode != c.selection.inMultiSelectMode && (c.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
    };
    c.MultiSelect = d;
    b("./config").defineOptions(q.prototype, "editor", {
        enableMultiselect: {
            set: function (b) {
                d(this);
                b ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", j)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", j))
            },
            value: true
        }
    })
});
ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event"], function (b, c) {
    function d(b, c) {
        return b.row == c.row && b.column == c.column
    }
    var e = b("../lib/event");
    c.onMouseDown = function (b) {
        var c = b.domEvent,
            h = c.altKey,
            c = c.shiftKey,
            j = b.getAccelKey(),
            k = b.getButton();
        if (b.editor.inMultiSelectMode && 2 == k) b.editor.textInput.onContextMenu(b.domEvent);
        else if (!j && !h) 0 == k && b.editor.inMultiSelectMode && b.editor.exitMultiSelectMode();
        else {
            var l = b.editor,
                m = l.selection,
                n = l.inMultiSelectMode,
                q = b.getDocumentPosition(),
                p = m.getCursor(),
                p = b.inSelection() || m.isEmpty() && d(q, p),
                s = b.x,
                r = b.y,
                o = function (b) {
                    s = b.clientX;
                    r = b.clientY
                },
                t = function () {
                    var b = l.renderer.pixelToScreenCoordinates(s, r),
                        c = u.screenToDocumentPosition(b.row, b.column);
                    if (!d(z, b) || !d(c, m.selectionLead)) z = b, l.selection.moveCursorToPosition(c), l.selection.clearSelection(), l.renderer.scrollCursorIntoView(), l.removeSelectionMarkers(G), G = m.rectangularRangeBlock(z, w), G.forEach(l.addSelectionMarker, l), l.updateSelectionMarkers()
                },
                u = l.session,
                w = l.renderer.pixelToScreenCoordinates(s, r),
                z = w;
            if (j && !c && !h && 0 == k) {
                if (n || !p) {
                    if (!n) {
                        var A = m.toOrientedRange();
                        l.addSelectionMarker(A)
                    }
                    var C = m.rangeList.rangeAtPoint(q);
                    l.$blockScrolling++;
                    l.once("mouseup", function () {
                        var b = m.toOrientedRange();
                        C && b.isEmpty() && d(C.cursor, b.cursor) ? m.substractPoint(b.cursor) : (A && (l.removeSelectionMarker(A), m.addRange(A)), m.addRange(b));
                        l.$blockScrolling--
                    })
                }
            } else if (h && 0 == k) {
                b.stop();
                n && !j ? m.toSingleRange() : !n && j && m.addRange();
                var G = [];
                c ? (w = u.documentToScreenPosition(m.lead),
                    t()) : (m.moveCursorToPosition(q), m.clearSelection());
                e.capture(l.container, o, function () {
                    clearInterval(H);
                    l.removeSelectionMarkers(G);
                    for (var b = 0; b < G.length; b++) m.addRange(G[b])
                });
                var H = setInterval(function () {
                    t()
                }, 20);
                return b.preventDefault()
            }
        }
    }
});
ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function (b, c) {
    c.defaultCommands = [{
        name: "addCursorAbove",
        exec: function (b) {
            b.selectMoreLines(-1)
        },
        bindKey: {
            win: "Ctrl-Alt-Up",
            mac: "Ctrl-Alt-Up"
        },
        readonly: !0
    }, {
        name: "addCursorBelow",
        exec: function (b) {
            b.selectMoreLines(1)
        },
        bindKey: {
            win: "Ctrl-Alt-Down",
            mac: "Ctrl-Alt-Down"
        },
        readonly: !0
    }, {
        name: "addCursorAboveSkipCurrent",
        exec: function (b) {
            b.selectMoreLines(-1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Up",
            mac: "Ctrl-Alt-Shift-Up"
        },
        readonly: !0
    }, {
        name: "addCursorBelowSkipCurrent",
        exec: function (b) {
            b.selectMoreLines(1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Down",
            mac: "Ctrl-Alt-Shift-Down"
        },
        readonly: !0
    }, {
        name: "selectMoreBefore",
        exec: function (b) {
            b.selectMore(-1)
        },
        bindKey: {
            win: "Ctrl-Alt-Left",
            mac: "Ctrl-Alt-Left"
        },
        readonly: !0
    }, {
        name: "selectMoreAfter",
        exec: function (b) {
            b.selectMore(1)
        },
        bindKey: {
            win: "Ctrl-Alt-Right",
            mac: "Ctrl-Alt-Right"
        },
        readonly: !0
    }, {
        name: "selectNextBefore",
        exec: function (b) {
            b.selectMore(-1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Left",
            mac: "Ctrl-Alt-Shift-Left"
        },
        readonly: !0
    }, {
        name: "selectNextAfter",
        exec: function (b) {
            b.selectMore(1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Right",
            mac: "Ctrl-Alt-Shift-Right"
        },
        readonly: !0
    }, {
        name: "splitIntoLines",
        exec: function (b) {
            b.multiSelect.splitIntoLines()
        },
        bindKey: {
            win: "Ctrl-Alt-L",
            mac: "Ctrl-Alt-L"
        },
        readonly: !0
    }, {
        name: "alignCursors",
        exec: function (b) {
            b.alignCursors()
        },
        bindKey: {
            win: "Ctrl-Alt-A",
            mac: "Ctrl-Alt-A"
        }
    }];
    c.multiSelectCommands = [{
        name: "singleSelection",
        bindKey: "esc",
        exec: function (b) {
            b.exitMultiSelectMode()
        },
        readonly: !0,
        isAvailable: function (b) {
            return b && b.inMultiSelectMode
        }
    }];
    var d = b("../keyboard/hash_handler").HashHandler;
    c.keyboardHandler = new d(c.multiSelectCommands)
});
ace.define("ace/worker/worker_client", "require exports module ace/lib/oop ace/lib/event_emitter ace/config".split(" "), function (b, c) {
    var d = b("../lib/oop"),
        e = b("../lib/event_emitter").EventEmitter,
        f = b("../config"),
        g = function (c, d, e) {
            this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this);
            this.changeListener = this.changeListener.bind(this);
            this.onMessage = this.onMessage.bind(this);
            b.nameToUrl && !b.toUrl && (b.toUrl = b.nameToUrl);
            var g;
            if (f.get("packaged") || !b.toUrl) g = f.moduleUrl(d, "worker");
            else {
                var h = this.$normalizePath;
                g = h(b.toUrl("ace/worker/worker.js", null, "_"));
                var q = {};
                c.forEach(function (c) {
                    q[c] = h(b.toUrl(c, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                })
            }
            this.$worker = new Worker(g);
            this.$worker.postMessage({
                init: true,
                tlns: q,
                module: d,
                classname: e
            });
            this.callbackId = 1;
            this.callbacks = {};
            this.$worker.onmessage = this.onMessage
        };
    (function () {
        d.implement(this, e);
        this.onMessage = function (b) {
            b = b.data;
            switch (b.type) {
                case "log":
                    window.console && console.log && console.log.apply(console, b.data);
                    break;
                case "event":
                    this._emit(b.name, {
                        data: b.data
                    });
                    break;
                case "call":
                    var c = this.callbacks[b.id];
                    c && (c(b.data), delete this.callbacks[b.id])
            }
        };
        this.$normalizePath = function (b) {
            return location.host ? (b = b.replace(/^[a-z]+:\/\/[^\/]+/, ""), b = location.protocol + "//" + location.host + (b.charAt(0) == "/" ? "" : location.pathname.replace(/\/[^\/]*$/, "")) + "/" + b.replace(/^[\/]+/, ""), b) : b
        };
        this.terminate = function () {
            this._emit("terminate", {});
            this.deltaQueue = null;
            this.$worker.terminate();
            this.$worker = null;
            this.$doc.removeEventListener("change", this.changeListener);
            this.$doc =
                null
        };
        this.send = function (b, c) {
            this.$worker.postMessage({
                command: b,
                args: c
            })
        };
        this.call = function (b, c, d) {
            if (d) {
                var e = this.callbackId++;
                this.callbacks[e] = d;
                c.push(e)
            }
            this.send(b, c)
        };
        this.emit = function (b, c) {
            try {
                this.$worker.postMessage({
                    event: b,
                    data: {
                        data: c.data
                    }
                })
            } catch (d) { }
        };
        this.attachToDocument = function (b) {
            this.$doc && this.terminate();
            this.$doc = b;
            this.call("setValue", [b.getValue()]);
            b.on("change", this.changeListener)
        };
        this.changeListener = function (b) {
            this.deltaQueue ? this.deltaQueue.push(b.data) : (this.deltaQueue = [b.data], setTimeout(this.$sendDeltaQueue, 0))
        };
        this.$sendDeltaQueue = function () {
            var b = this.deltaQueue;
            if (b) {
                this.deltaQueue = null;
                b.length > 20 && b.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {
                    data: b
                })
            }
        }
    }).call(g.prototype);
    var h = function (b, c, d) {
        this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this);
        this.changeListener = this.changeListener.bind(this);
        this.callbackId = 1;
        this.callbacks = {};
        this.messageBuffer = [];
        var g = null,
            h = Object.create(e),
            q = this;
        this.$worker = {};
        this.$worker.terminate = function () { };
        this.$worker.postMessage = function (b) {
            q.messageBuffer.push(b);
            g && setTimeout(p)
        };
        var p = function () {
            var b = q.messageBuffer.shift();
            b.command ? g[b.command].apply(g, b.args) : b.event && h._emit(b.event, b.data)
        };
        h.postMessage = function (b) {
            q.onMessage({
                data: b
            })
        };
        h.callback = function (b, c) {
            this.postMessage({
                type: "call",
                id: c,
                data: b
            })
        };
        h.emit = function (b, c) {
            this.postMessage({
                type: "event",
                name: b,
                data: c
            })
        };
        f.loadModule(["worker", c], function (b) {
            for (g = new b[d](h) ; q.messageBuffer.length;) p()
        })
    };
    h.prototype = g.prototype;
    c.UIWorkerClient = h;
    c.WorkerClient = g
});
ace.define("ace/placeholder", "require exports module ace/range ace/lib/event_emitter ace/lib/oop".split(" "), function (b, c) {
    var d = b("./range").Range,
        e = b("./lib/event_emitter").EventEmitter,
        f = b("./lib/oop"),
        g = function (b, c, d, e, f, g) {
            var q = this;
            this.length = c;
            this.session = b;
            this.doc = b.getDocument();
            this.mainClass = f;
            this.othersClass = g;
            this.$onUpdate = this.onUpdate.bind(this);
            this.doc.on("change", this.$onUpdate);
            this.$others = e;
            this.$onCursorChange = function () {
                setTimeout(function () {
                    q.onCursorChange()
                })
            };
            this.$pos =
                d;
            this.$undoStackDepth = (b.getUndoManager().$undoStack || b.getUndoManager().$undostack || {
                length: -1
            }).length;
            this.setup();
            b.selection.on("changeCursor", this.$onCursorChange)
        };
    (function () {
        f.implement(this, e);
        this.setup = function () {
            var b = this,
                c = this.doc,
                e = this.session,
                f = this.$pos;
            this.pos = c.createAnchor(f.row, f.column);
            this.markerId = e.addMarker(new d(f.row, f.column, f.row, f.column + this.length), this.mainClass, null, false);
            this.pos.on("change", function (c) {
                e.removeMarker(b.markerId);
                b.markerId = e.addMarker(new d(c.value.row,
                    c.value.column, c.value.row, c.value.column + b.length), b.mainClass, null, false)
            });
            this.others = [];
            this.$others.forEach(function (d) {
                d = c.createAnchor(d.row, d.column);
                b.others.push(d)
            });
            e.setUndoSelect(false)
        };
        this.showOtherMarkers = function () {
            if (!this.othersActive) {
                var b = this.session,
                    c = this;
                this.othersActive = true;
                this.others.forEach(function (e) {
                    e.markerId = b.addMarker(new d(e.row, e.column, e.row, e.column + c.length), c.othersClass, null, false);
                    e.on("change", function (f) {
                        b.removeMarker(e.markerId);
                        e.markerId = b.addMarker(new d(f.value.row,
                            f.value.column, f.value.row, f.value.column + c.length), c.othersClass, null, false)
                    })
                })
            }
        };
        this.hideOtherMarkers = function () {
            if (this.othersActive) {
                this.othersActive = false;
                for (var b = 0; b < this.others.length; b++) this.session.removeMarker(this.others[b].markerId)
            }
        };
        this.onUpdate = function (b) {
            var b = b.data,
                c = b.range;
            if (c.start.row === c.end.row && c.start.row === this.pos.row && !this.$updating) {
                this.$updating = true;
                var e = b.action === "insertText" ? c.end.column - c.start.column : c.start.column - c.end.column;
                if (c.start.column >= this.pos.column &&
                    c.start.column <= this.pos.column + this.length + 1) {
                    var f = c.start.column - this.pos.column;
                    this.length = this.length + e;
                    if (!this.session.$fromUndo) {
                        if (b.action === "insertText")
                            for (var g = this.others.length - 1; g >= 0; g--) {
                                var n = this.others[g],
                                    q = {
                                        row: n.row,
                                        column: n.column + f
                                    };
                                n.row === c.start.row && c.start.column < n.column && (q.column = q.column + e);
                                this.doc.insert(q, b.text)
                            } else if (b.action === "removeText")
                                for (g = this.others.length - 1; g >= 0; g--) {
                                    n = this.others[g];
                                    q = {
                                        row: n.row,
                                        column: n.column + f
                                    };
                                    n.row === c.start.row && c.start.column <
                                        n.column && (q.column = q.column + e);
                                    this.doc.remove(new d(q.row, q.column, q.row, q.column - e))
                                }
                        c.start.column === this.pos.column && b.action === "insertText" ? setTimeout(function () {
                            this.pos.setPosition(this.pos.row, this.pos.column - e);
                            for (var b = 0; b < this.others.length; b++) {
                                var d = this.others[b],
                                    f = d.row,
                                    g = d.column - e;
                                d.row === c.start.row && c.start.column < d.column && (g = g + e);
                                d.setPosition(f, g)
                            }
                        }.bind(this), 0) : c.start.column === this.pos.column && b.action === "removeText" && setTimeout(function () {
                            for (var b = 0; b < this.others.length; b++) {
                                var d =
                                    this.others[b];
                                d.row === c.start.row && c.start.column < d.column && d.setPosition(d.row, d.column - e)
                            }
                        }.bind(this), 0)
                    }
                    this.pos._emit("change", {
                        value: this.pos
                    });
                    for (g = 0; g < this.others.length; g++) this.others[g]._emit("change", {
                        value: this.others[g]
                    })
                }
                this.$updating = false
            }
        };
        this.onCursorChange = function (b) {
            if (!this.$updating) {
                var c = this.session.selection.getCursor();
                c.row === this.pos.row && c.column >= this.pos.column && c.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", b)) : (this.hideOtherMarkers(),
                    this._emit("cursorLeave", b))
            }
        };
        this.detach = function () {
            this.session.removeMarker(this.markerId);
            this.hideOtherMarkers();
            this.doc.removeEventListener("change", this.$onUpdate);
            this.session.selection.removeEventListener("changeCursor", this.$onCursorChange);
            this.pos.detach();
            for (var b = 0; b < this.others.length; b++) this.others[b].detach();
            this.session.setUndoSelect(true)
        };
        this.cancel = function () {
            if (this.$undoStackDepth === -1) throw Error("Canceling placeholders only supported with undo manager attached to session.");
            for (var b = this.session.getUndoManager(), c = (b.$undoStack || b.$undostack).length - this.$undoStackDepth, d = 0; d < c; d++) b.undo(true)
        }
    }).call(g.prototype);
    c.PlaceHolder = g
});
ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function (b, c) {
    var d = b("../../range").Range;
    (function () {
        this.foldingStopMarker = this.foldingStartMarker = null;
        this.getFoldWidget = function (b, c, d) {
            b = b.getLine(d);
            return this.foldingStartMarker.test(b) ? "start" : "markbeginend" == c && this.foldingStopMarker && this.foldingStopMarker.test(b) ? "end" : ""
        };
        this.getFoldWidgetRange = function () {
            return null
        };
        this.indentationBlock = function (b, c, g) {
            var h = /\S/,
                j = b.getLine(c),
                k = j.search(h);
            if (-1 !=
                k) {
                for (var g = g || j.length, l = b.getLength(), m = j = c; ++c < l;) {
                    var n = b.getLine(c).search(h);
                    if (-1 != n) {
                        if (n <= k) break;
                        m = c
                    }
                }
                if (m > j) return b = b.getLine(m).length, new d(j, g, m, b)
            }
        };
        this.openingBracketBlock = function (b, c, g, h, j) {
            g = {
                row: g,
                column: h + 1
            };
            if (c = b.$findClosingBracket(c, g, j)) return j = b.foldWidgets[c.row], null == j && (j = b.getFoldWidget(c.row)), "start" == j && c.row > g.row && (c.row--, c.column = b.getLine(c.row).length), d.fromPoints(g, c)
        };
        this.closingBracketBlock = function (b, c, g, h) {
            g = {
                row: g,
                column: h
            };
            if (b = b.$findOpeningBracket(c,
                    g)) return b.column++, g.column--, d.fromPoints(b, g)
        }
    }).call((c.FoldMode = function () { }).prototype)
});
ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function (b, c) {
    c.isDark = !1;
    c.cssClass = "ace-tm";
    c.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
    b("../lib/dom").importCssString(c.cssText,
        c.cssClass)
});
ace.define("ace/ext/error_marker", "require exports module ace/line_widgets ace/lib/dom ace/range".split(" "), function (b, c) {
    function d(b, c, d) {
        b = b.getAnnotations().sort(g.comparePoints);
        if (b.length) {
            var e;
            a: {
                e = {
                    row: c,
                    column: -1
                };
                for (var f = g.comparePoints, n = 0, q = b.length - 1; n <= q;) {
                    var p = n + q >> 1,
                        s = f(e, b[p]);
                    if (s > 0) n = p + 1;
                    else {
                        if (!(s < 0)) {
                            e = p;
                            break a
                        }
                        q = p - 1
                    }
                }
                e = -(n + 1)
            }
            e < 0 && (e = -e - 1);
            e >= b.length - 1 ? e = d > 0 ? 0 : b.length - 1 : e === 0 && d < 0 && (e = b.length - 1);
            if ((f = b[e]) && d) {
                if (f.row === c) {
                    do f = b[e = e + d]; while (f && f.row === c);
                    if (!f) return b.slice()
                }
                n = [];
                c = f.row;
                do {
                    n[d < 0 ? "unshift" : "push"](f);
                    f = b[e = e + d]
                } while (f && f.row == c);
                return n.length && n
            }
        }
    }
    var e = b("ace/line_widgets").LineWidgets,
        f = b("ace/lib/dom"),
        g = b("ace/range").Range;
    c.showErrorMarker = function (b, c) {
        var g = b.session;
        g.widgetManager || (g.widgetManager = new e(g), g.widgetManager.attach(b));
        var l = b.getCursorPosition(),
            m = l.row,
            n = g.lineWidgets && g.lineWidgets[m];
        n ? n.destroy() : m = m - c;
        if (m = d(g, m, c)) {
            n = m[0];
            n.pos && n.column == null && (l.column = n.pos.sc);
            l.row = n.row;
            n = b.renderer.$gutterLayer.$annotations[l.row]
        } else {
            if (n) return;
            n = {
                text: ["Looks good!"],
                className: "ace_ok"
            }
        }
        b.session.unfold(l.row);
        b.selection.moveCursorToPosition(l);
        b.selection.clearSelection();
        var q = {
            row: l.row,
            fixedWidth: true,
            coverGutter: true,
            el: f.createElement("div")
        },
            m = q.el.appendChild(f.createElement("div")),
            p = q.el.appendChild(f.createElement("div"));
        p.className = "error_widget_arrow " + n.className;
        l = b.renderer.$cursorLayer.getPixelPosition(l).left;
        p.style.left = l + b.renderer.gutterWidth - 5 + "px";
        q.el.className = "error_widget_wrapper";
        m.className = "error_widget " +
            n.className;
        m.innerHTML = n.text.join("<br>");
        var s = {
            handleKeyboard: function (b, c, d) {
                if (c === 0 && d === "esc") return q.destroy(), true
            }
        };
        q.destroy = function () {
            if (!b.$mouseHandler.isMousePressed) {
                b.keyBinding.removeKeyboardHandler(s);
                g.widgetManager.removeLineWidget(q);
                b.off("changeSelection", q.destroy);
                b.off("changeSession", q.destroy);
                b.off("mouseup", q.destroy);
                b.off("change", q.destroy)
            }
        };
        b.keyBinding.addKeyboardHandler(s);
        b.on("changeSelection", q.destroy);
        b.on("changeSession", q.destroy);
        b.on("mouseup", q.destroy);
        b.on("change", q.destroy);
        b.session.widgetManager.addLineWidget(q);
        q.el.onmousedown = b.focus.bind(b)
    };
    f.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }",
        "")
});
ace.define("ace/line_widgets", "require exports module ace/lib/oop ace/lib/dom ace/range".split(" "), function (b, c) {
    function d(b) {
        this.session = b;
        this.session.widgetManager = this;
        this.session.getRowLength = this.getRowLength;
        this.session.$getWidgetScreenLength = this.$getWidgetScreenLength;
        this.updateOnChange = this.updateOnChange.bind(this);
        this.renderWidgets = this.renderWidgets.bind(this);
        this.measureWidgets = this.measureWidgets.bind(this);
        this.session._changedWidgets = [];
        this.detach = this.detach.bind(this);
        this.session.on("change",
            this.updateOnChange)
    }
    b("./lib/oop");
    var e = b("./lib/dom");
    b("./range");
    (function () {
        this.getRowLength = function (b) {
            var c;
            return this.lineWidgets ? c = this.lineWidgets[b] && this.lineWidgets[b].rowCount || 0 : c = 0, !this.$useWrapMode || !this.$wrapData[b] ? 1 + c : this.$wrapData[b].length + 1 + c
        };
        this.$getWidgetScreenLength = function () {
            var b = 0;
            return this.lineWidgets.forEach(function (c) {
                c && c.rowCount && (b = b + c.rowCount)
            }), b
        };
        this.attach = function (b) {
            b.widgetManager && b.widgetManager != this && b.widgetManager.detach();
            if (this.editor !=
                b) {
                this.detach();
                this.editor = b;
                this.editor.on("changeSession", this.detach);
                b.widgetManager = this;
                b.setOption("enableLineWidgets", true);
                b.renderer.on("beforeRender", this.measureWidgets);
                b.renderer.on("afterRender", this.renderWidgets)
            }
        };
        this.detach = function (b) {
            if (!(b && b.session == this.session))
                if (b = this.editor) {
                    b.off("changeSession", this.detach);
                    this.editor = null;
                    b.widgetManager = null;
                    b.renderer.off("beforeRender", this.measureWidgets);
                    b.renderer.off("afterRender", this.renderWidgets);
                    (b = this.session.lineWidgets) &&
                    b.forEach(function (b) {
                        b && b.el && b.el.parentNode && (b._inDocument = false, b.el.parentNode.removeChild(b.el))
                    })
                }
        };
        this.updateOnChange = function (b) {
            var c = this.session.lineWidgets;
            if (c) {
                var d = b.data,
                    e = d.range,
                    b = e.start.row,
                    e = e.end.row - b;
                if (e !== 0) {
                    if (d.action == "removeText" || d.action == "removeLines") c.splice(b + 1, e).forEach(function (b) {
                        b && this.removeLineWidget(b)
                    }, this);
                    else {
                        d = Array(e);
                        d.unshift(b, 0);
                        c.splice.apply(c, d)
                    }
                    this.$updateRows()
                }
            }
        };
        this.$updateRows = function () {
            var b = this.session.lineWidgets;
            if (b) {
                var c =
                    true;
                b.forEach(function (b, d) {
                    b && (c = false, b.row = d)
                });
                c && (this.session.lineWidgets = null)
            }
        };
        this.addLineWidget = function (b) {
            this.session.lineWidgets || (this.session.lineWidgets = Array(this.session.getLength()));
            this.session.lineWidgets[b.row] = b;
            var c = this.editor.renderer;
            return b.html && !b.el && (b.el = e.createElement("div"), b.el.innerHTML = b.html), b.el && (e.addCssClass(b.el, "ace_lineWidgetContainer"), b.el.style.position = "absolute", b.el.style.zIndex = 5, c.container.appendChild(b.el), b._inDocument = true), b.coverGutter ||
                (b.el.style.zIndex = 3), b.pixelHeight || (b.pixelHeight = b.el.offsetHeight), b.rowCount == null && (b.rowCount = b.pixelHeight / c.layerConfig.lineHeight), this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: b.row
                        }
                    }
                }), this.$updateRows(), this.renderWidgets(null, c), b
        };
        this.removeLineWidget = function (b) {
            b._inDocument = false;
            b.el && b.el.parentNode && b.el.parentNode.removeChild(b.el);
            if (b.editor && b.editor.destroy) try {
                b.editor.destroy()
            } catch (c) { }
            this.session.lineWidgets && (this.session.lineWidgets[b.row] = void 0);
            this.session._emit("changeFold", {
                data: {
                    start: {
                        row: b.row
                    }
                }
            });
            this.$updateRows()
        };
        this.onWidgetChanged = function (b) {
            this.session._changedWidgets.push(b);
            this.editor && this.editor.renderer.updateFull()
        };
        this.measureWidgets = function (b, c) {
            var d = this.session._changedWidgets,
                e = c.layerConfig;
            if (d && d.length) {
                for (var k = Infinity, l = 0; l < d.length; l++) {
                    var m = d[l];
                    m._inDocument || (m._inDocument = true, c.container.appendChild(m.el));
                    m.h = m.el.offsetHeight;
                    m.fixedWidth || (m.w = m.el.offsetWidth, m.screenWidth = Math.ceil(m.w / e.characterWidth));
                    var n = m.h / e.lineHeight;
                    m.coverLine && (n = n - this.session.getRowLineCount(m.row), n < 0 && (n = 0));
                    m.rowCount != n && (m.rowCount = n, m.row < k && (k = m.row))
                }
                k != Infinity && (this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: k
                        }
                    }
                }), this.session.lineWidgetWidth = null);
                this.session._changedWidgets = []
            }
        };
        this.renderWidgets = function (b, c) {
            var d = c.layerConfig,
                e = this.session.lineWidgets;
            if (e) {
                for (var k = Math.min(this.firstRow, d.firstRow), l = Math.max(this.lastRow, d.lastRow, e.length) ; k > 0 && !e[k];) k--;
                this.firstRow = d.firstRow;
                this.lastRow = d.lastRow;
                for (c.$cursorLayer.config =
                    d; k <= l; k++) {
                    var m = e[k];
                    if (m && m.el) {
                        m._inDocument || (m._inDocument = true, c.container.appendChild(m.el));
                        var n = c.$cursorLayer.getPixelPosition({
                            row: k,
                            column: 0
                        }, true).top;
                        m.coverLine || (n = n + d.lineHeight * this.session.getRowLineCount(m.row));
                        m.el.style.top = n - d.offset + "px";
                        n = m.coverGutter ? 0 : c.gutterWidth;
                        m.fixedWidth || (n = n - c.scrollLeft);
                        m.el.style.left = n + "px";
                        m.fixedWidth ? m.el.style.right = c.scrollBar.getWidth() + "px" : m.el.style.right = ""
                    }
                }
            }
        }
    }).call(d.prototype);
    c.LineWidgets = d
});
(function () {
    ace.require(["ace/ace"], function (b) {
        b && b.config.init();
        window.ace || (window.ace = {});
        for (var c in b) b.hasOwnProperty(c) && (ace[c] = b[c])
    })
})();
ace.define("ace/ext/language_tools", "require exports module ace/snippets ace/autocomplete ace/config ace/autocomplete/text_completer ace/editor".split(" "), function (b, c) {
    var d = b("../snippets").snippetManager,
        e = b("../autocomplete").Autocomplete,
        f = b("../config"),
        g = [{
            getCompletions: function (b, c, e, f, g) {
                var h = d.snippetMap,
                    j = [];
                d.getActiveScopes(b).forEach(function (b) {
                    for (var b = h[b] || [], c = b.length; c--;) {
                        var d = b[c],
                            e = d.name || d.tabTrigger;
                        e && j.push({
                            caption: e,
                            snippet: d.content,
                            meta: d.tabTrigger && !d.name ?
                                d.tabTrigger + "\u21e5 " : "snippet"
                        })
                    }
                }, this);
                g(null, j)
            }
        }, b("../autocomplete/text_completer"), {
            getCompletions: function (b, c, d, e, f) {
                b = b.session.getState(d.row);
                c = c.$mode.getCompletions(b, c, d, e);
                f(null, c)
            }
        }];
    c.addCompleter = function (b) {
        g.push(b)
    };
    var h = {
        name: "expandSnippet",
        exec: function (b) {
            d.expandWithTab(b) || b.execCommand("indent")
        },
        bindKey: "tab"
    },
        j = function (b, c) {
            k(c.session.$mode)
        },
        k = function (b) {
            var c = b.$id;
            d.files || (d.files = {});
            l(c);
            b.modes && b.modes.forEach(k)
        },
        l = function (b) {
            if (b && !d.files[b]) {
                var c =
                    b.replace("mode", "snippets");
                d.files[b] = {};
                f.loadModule(c, function (c) {
                    c && (d.files[b] = c, c.snippets = d.parseSnippetFile(c.snippetText), d.register(c.snippets, c.scope), c.includeScopes && (d.snippetMap[c.scope].includeScopes = c.includeScopes, c.includeScopes.forEach(function (b) {
                        l("ace/mode/" + b)
                    })))
                })
            }
        },
        m = b("../editor").Editor;
    b("../config").defineOptions(m.prototype, "editor", {
        enableBasicAutocompletion: {
            set: function (b) {
                b ? (this.completers = g, this.commands.addCommand(e.startCommand)) : this.commands.removeCommand(e.startCommand)
            },
            value: false
        },
        enableSnippets: {
            set: function (b) {
                b ? (this.commands.addCommand(h), this.on("changeMode", j), j(null, this)) : (this.commands.removeCommand(h), this.off("changeMode", j))
            },
            value: false
        }
    })
});
ace.define("ace/snippets", "require exports module ace/lib/lang ace/range ace/keyboard/hash_handler ace/tokenizer ace/lib/dom".split(" "), function (b, c) {
    var d = b("./lib/lang"),
        e = b("./range").Range,
        f = b("./keyboard/hash_handler").HashHandler,
        g = b("./tokenizer").Tokenizer,
        h = e.comparePoints,
        j = function () {
            this.snippetMap = {};
            this.snippetNameMap = {}
        };
    (function () {
        this.getTokenizer = function () {
            function b(c, d, e) {
                return c = c.substr(1), /^\d+$/.test(c) && !e.inFormatString ? [{
                    tabstopId: parseInt(c, 10)
                }] : [{
                    text: c
                }]
            }

            function c(b) {
                return "(?:[^\\\\" +
                    b + "]|\\\\.)"
            }
            return j.$tokenizer = new g({
                start: [{
                    regex: /:/,
                    onMatch: function (b, c, d) {
                        return d.length && d[0].expectIf ? (d[0].expectIf = false, d[0].elseBranch = d[0], [d[0]]) : ":"
                    }
                }, {
                    regex: /\\./,
                    onMatch: function (b, c, d) {
                        c = b[1];
                        return c == "}" && d.length ? b = c : "`$\\".indexOf(c) != -1 ? b = c : d.inFormatString && (c == "n" ? b = "\n" : c == "t" ? b = "\n" : "ulULE".indexOf(c) != -1 && (b = {
                            changeCase: c,
                            local: c > "a"
                        })), [b]
                    }
                }, {
                    regex: /}/,
                    onMatch: function (b, c, d) {
                        return [d.length ? d.shift() : b]
                    }
                }, {
                    regex: /\$(?:\d+|\w+)/,
                    onMatch: b
                }, {
                    regex: /\$\{[\dA-Z_a-z]+/,
                    onMatch: function (c, d, e) {
                        c = b(c.substr(1), d, e);
                        return e.unshift(c[0]), c
                    },
                    next: "snippetVar"
                }, {
                    regex: /\n/,
                    token: "newline",
                    merge: false
                }],
                snippetVar: [{
                    regex: "\\|" + c("\\|") + "*\\|",
                    onMatch: function (b, c, d) {
                        d[0].choices = b.slice(1, -1).split(",")
                    },
                    next: "start"
                }, {
                    regex: "/(" + c("/") + "+)/(?:(" + c("/") + "*)/)(\\w*):?",
                    onMatch: function (b, c, d) {
                        c = d[0];
                        return c.fmtString = b, b = this.splitRegex.exec(b), c.guard = b[1], c.fmt = b[2], c.flag = b[3], ""
                    },
                    next: "start"
                }, {
                    regex: "`" + c("`") + "*`",
                    onMatch: function (b, c, d) {
                        return d[0].code = b.splice(1, -1), ""
                    },
                    next: "start"
                }, {
                    regex: "\\?",
                    onMatch: function (b, c, d) {
                        d[0] && (d[0].expectIf = true)
                    },
                    next: "start"
                }, {
                    regex: "([^:}\\\\]|\\\\.)*:?",
                    token: "",
                    next: "start"
                }],
                formatString: [{
                    regex: "/(" + c("/") + "+)/",
                    token: "regex"
                }, {
                    regex: "",
                    onMatch: function (b, c, d) {
                        d.inFormatString = true
                    },
                    next: "start"
                }]
            }), j.prototype.getTokenizer = function () {
                return j.$tokenizer
            }, j.$tokenizer
        };
        this.tokenizeTmSnippet = function (b, c) {
            return this.getTokenizer().getLineTokens(b, c).tokens.map(function (b) {
                return b.value || b
            })
        };
        this.$getDefaultValue =
            function (b, c) {
                if (/^[A-Z]\d+$/.test(c)) {
                    var d = c.substr(1);
                    return (this.variables[c[0] + "__"] || {})[d]
                }
                if (/^\d+$/.test(c)) return (this.variables.__ || {})[c];
                c = c.replace(/^TM_/, "");
                if (b) {
                    d = b.session;
                    switch (c) {
                        case "CURRENT_WORD":
                            var e = d.getWordRange();
                        case "SELECTION":
                        case "SELECTED_TEXT":
                            return d.getTextRange(e);
                        case "CURRENT_LINE":
                            return d.getLine(b.getCursorPosition().row);
                        case "PREV_LINE":
                            return d.getLine(b.getCursorPosition().row - 1);
                        case "LINE_INDEX":
                            return b.getCursorPosition().column;
                        case "LINE_NUMBER":
                            return b.getCursorPosition().row +
                                1;
                        case "SOFT_TABS":
                            return d.getUseSoftTabs() ? "YES" : "NO";
                        case "TAB_SIZE":
                            return d.getTabSize();
                        case "FILENAME":
                        case "FILEPATH":
                            return "ace.ajax.org";
                        case "FULLNAME":
                            return "Ace"
                    }
                }
            };
        this.variables = {};
        this.getVariableValue = function (b, c) {
            return this.variables.hasOwnProperty(c) ? this.variables[c](b, c) || "" : this.$getDefaultValue(b, c) || ""
        };
        this.tmStrFormat = function (b, c, d) {
            var e = c.guard,
                e = RegExp(e, (c.flag || "").replace(/[^gi]/, "")),
                f = this.tokenizeTmSnippet(c.fmt, "formatString"),
                g = this,
                b = b.replace(e, function () {
                    g.variables.__ =
                        arguments;
                    for (var b = g.resolveVariables(f, d), c = "E", e = 0; e < b.length; e++) {
                        var h = b[e];
                        if (typeof h == "object") {
                            b[e] = "";
                            if (h.changeCase && h.local) {
                                var j = b[e + 1];
                                j && typeof j == "string" && (h.changeCase == "u" ? b[e] = j[0].toUpperCase() : b[e] = j[0].toLowerCase(), b[e + 1] = j.substr(1))
                            } else h.changeCase && (c = h.changeCase)
                        } else c == "U" ? b[e] = h.toUpperCase() : c == "L" && (b[e] = h.toLowerCase())
                    }
                    return b.join("")
                });
            return this.variables.__ = null, b
        };
        this.resolveVariables = function (b, c) {
            function d(c) {
                c = b.indexOf(c, f + 1);
                c != -1 && (f = c)
            }
            for (var e = [], f = 0; f < b.length; f++) {
                var g = b[f];
                if (typeof g == "string") e.push(g);
                else if (typeof g == "object")
                    if (g.skip) d(g);
                    else if (!(g.processed < f))
                        if (g.text) {
                            var h = this.getVariableValue(c, g.text);
                            h && g.fmtString && (h = this.tmStrFormat(h, g));
                            g.processed = f;
                            g.expectIf == null ? h && (e.push(h), d(g)) : h ? g.skip = g.elseBranch : d(g)
                        } else g.tabstopId != null ? e.push(g) : g.changeCase != null && e.push(g)
            }
            return e
        };
        this.insertSnippet = function (b, c) {
            function d(b) {
                for (var c = [], e = 0; e < b.length; e++) {
                    var f = b[e];
                    if (typeof f == "object") {
                        if (l[f.tabstopId]) continue;
                        var g = b.lastIndexOf(f, e - 1),
                            f = c[g] || {
                                tabstopId: f.tabstopId
                            }
                    }
                    c[e] = f
                }
                return c
            }
            var e = b.getCursorPosition(),
                f = b.session.getLine(e.row).match(/^\s*/)[0],
                g = b.session.getTabString(),
                h = this.tokenizeTmSnippet(c),
                h = this.resolveVariables(h, b),
                h = h.map(function (b) {
                    return b == "\n" ? b + f : typeof b == "string" ? b.replace(/\t/g, g) : b
                }),
                j = [];
            h.forEach(function (b, c) {
                if (typeof b == "object") {
                    var d = b.tabstopId,
                        e = j[d];
                    e || (e = j[d] = [], e.index = d, e.value = "");
                    if (e.indexOf(b) === -1) {
                        e.push(b);
                        d = h.indexOf(b, c + 1);
                        if (d !== -1) {
                            d = h.slice(c + 1,
                                d);
                            d.some(function (b) {
                                return typeof b == "object"
                            }) && !e.value ? e.value = d : d.length && (!e.value || typeof e.value != "string") && (e.value = d.join(""))
                        }
                    }
                }
            });
            j.forEach(function (b) {
                b.length = 0
            });
            for (var l = {}, e = 0; e < h.length; e++) {
                var w = h[e];
                if (typeof w == "object") {
                    var z = w.tabstopId,
                        A = h.indexOf(w, e + 1);
                    if (l[z] == w) l[z] = null;
                    else {
                        var C = j[z],
                            G = typeof C.value == "string" ? [C.value] : d(C.value);
                        G.unshift(e + 1, Math.max(0, A - e));
                        G.push(w);
                        l[z] = w;
                        h.splice.apply(h, G);
                        C.indexOf(w) === -1 && C.push(w)
                    }
                }
            }
            var H = 0,
                K = 0,
                P = "";
            h.forEach(function (b) {
                typeof b ==
                    "string" ? (b[0] === "\n" ? (K = b.length - 1, H++) : K = K + b.length, P = P + b) : b.start ? b.end = {
                        row: H,
                        column: K
                    } : b.start = {
                        row: H,
                        column: K
                    }
            });
            e = b.getSelectionRange();
            w = b.session.replace(e, P);
            z = new k(b);
            z.addTabstops(j, e.start, w);
            z.tabNext()
        };
        this.$getScope = function (b) {
            var c = b.session.$mode.$id || "",
                c = c.split("/").pop();
            if (c === "html" || c === "php") {
                c === "php" && (c = "html");
                var d = b.getCursorPosition(),
                    b = b.session.getState(d.row);
                typeof b == "object" && (b = b[0]);
                b.substring && (b.substring(0, 3) == "js-" ? c = "javascript" : b.substring(0, 4) ==
                    "css-" ? c = "css" : b.substring(0, 4) == "php-" && (c = "php"))
            }
            return c
        };
        this.getActiveScopes = function (b) {
            var b = this.$getScope(b),
                c = [b],
                d = this.snippetMap;
            return d[b] && d[b].includeScopes && c.push.apply(c, d[b].includeScopes), c.push("_"), c
        };
        this.expandWithTab = function (b) {
            var c = b.getCursorPosition(),
                d = b.session.getLine(c.row),
                e = d.substring(0, c.column),
                f = d.substr(c.column),
                g = this.snippetMap,
                h;
            return this.getActiveScopes(b).some(function (b) {
                b = g[b];
                return b && (h = this.findMatchingSnippet(b, e, f)), !!h
            }, this), h ? (b.session.doc.removeInLine(c.row,
                c.column - h.replaceBefore.length, c.column + h.replaceAfter.length), this.variables.M__ = h.matchBefore, this.variables.T__ = h.matchAfter, this.insertSnippet(b, h.content), this.variables.M__ = this.variables.T__ = null, true) : false
        };
        this.findMatchingSnippet = function (b, c, d) {
            for (var e = b.length; e--;) {
                var f = b[e];
                if (!f.startRe || f.startRe.test(c))
                    if (!f.endRe || f.endRe.test(d))
                        if (f.startRe || f.endRe) return f.matchBefore = f.startRe ? f.startRe.exec(c) : [""], f.matchAfter = f.endRe ? f.endRe.exec(d) : [""], f.replaceBefore = f.triggerRe ?
                            f.triggerRe.exec(c)[0] : "", f.replaceAfter = f.endTriggerRe ? f.endTriggerRe.exec(d)[0] : "", f
            }
        };
        this.snippetMap = {};
        this.snippetNameMap = {};
        this.register = function (b, c) {
            function e(b) {
                return b && !/^\^?\(.*\)\$?$|^\\b$/.test(b) && (b = "(?:" + b + ")"), b || ""
            }

            function f(b, c, d) {
                return b = e(b), c = e(c), d ? (b = c + b, b && b[b.length - 1] != "$" && (b = b + "$")) : (b = b + c, b && b[0] != "^" && (b = "^" + b)), RegExp(b)
            }

            function g(b) {
                b.scope || (b.scope = c || "_");
                c = b.scope;
                h[c] || (h[c] = [], j[c] = {});
                var e = j[c];
                if (b.name) {
                    var l = e[b.name];
                    l && k.unregister(l);
                    e[b.name] =
                        b
                }
                h[c].push(b);
                b.tabTrigger && !b.trigger && (!b.guard && /^\w/.test(b.tabTrigger) && (b.guard = "\\b"), b.trigger = d.escapeRegExp(b.tabTrigger));
                b.startRe = f(b.trigger, b.guard, true);
                b.triggerRe = RegExp(b.trigger, "", true);
                b.endRe = f(b.endTrigger, b.endGuard, true);
                b.endTriggerRe = RegExp(b.endTrigger, "", true)
            }
            var h = this.snippetMap,
                j = this.snippetNameMap,
                k = this;
            b.content ? g(b) : Array.isArray(b) && b.forEach(g)
        };
        this.unregister = function (b, c) {
            function d(b) {
                var g = f[b.scope || c];
                if (g && g[b.name]) {
                    delete g[b.name];
                    b = (g = e[b.scope ||
                        c]) && g.indexOf(b);
                    b >= 0 && g.splice(b, 1)
                }
            }
            var e = this.snippetMap,
                f = this.snippetNameMap;
            b.content ? d(b) : Array.isArray(b) && b.forEach(d)
        };
        this.parseSnippetFile = function (b) {
            for (var b = b.replace(/\r/g, ""), c = [], d = {}, e = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm, f; f = e.exec(b) ;) {
                if (f[1]) try {
                    d = JSON.parse(f[1]);
                    c.push(d)
                } catch (g) { }
                if (f[4]) {
                    d.content = f[4].replace(/^\t/gm, "");
                    c.push(d);
                    d = {}
                } else {
                    var h = f[2];
                    f = f[3];
                    if (h == "regex") {
                        h = /\/((?:[^\/\\]|\\.)*)|$/g;
                        d.guard = h.exec(f)[1];
                        d.trigger = h.exec(f)[1];
                        d.endTrigger =
                            h.exec(f)[1];
                        d.endGuard = h.exec(f)[1]
                    } else h == "snippet" ? (d.tabTrigger = f.match(/^\S*/)[0], d.name || (d.name = f)) : d[h] = f
                }
            }
            return c
        };
        this.getSnippetByName = function (b, c) {
            var d = this.snippetNameMap,
                e;
            return this.getActiveScopes(c).some(function (c) {
                c = d[c];
                return c && (e = c[b]), !!e
            }, this), e
        }
    }).call(j.prototype);
    var k = function (b) {
        if (b.tabstopManager) return b.tabstopManager;
        b.tabstopManager = this;
        this.$onChange = this.onChange.bind(this);
        this.$onChangeSelection = d.delayedCall(this.onChangeSelection.bind(this)).schedule;
        this.$onChangeSession = this.onChangeSession.bind(this);
        this.$onAfterExec = this.onAfterExec.bind(this);
        this.attach(b)
    };
    (function () {
        this.attach = function (b) {
            this.index = -1;
            this.ranges = [];
            this.tabstops = [];
            this.selectedTabstop = null;
            this.editor = b;
            this.editor.on("change", this.$onChange);
            this.editor.on("changeSelection", this.$onChangeSelection);
            this.editor.on("changeSession", this.$onChangeSession);
            this.editor.commands.on("afterExec", this.$onAfterExec);
            this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
        };
        this.detach = function () {
            this.tabstops.forEach(this.removeTabstopMarkers, this);
            this.selectedTabstop = this.tabstops = this.ranges = null;
            this.editor.removeListener("change", this.$onChange);
            this.editor.removeListener("changeSelection", this.$onChangeSelection);
            this.editor.removeListener("changeSession", this.$onChangeSession);
            this.editor.commands.removeListener("afterExec", this.$onAfterExec);
            this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
            this.editor = this.editor.tabstopManager = null
        };
        this.onChange =
            function (b) {
                var c = b.data.range,
                    d = b.data.action[0] == "r",
                    e = c.start,
                    f = c.end,
                    c = e.row,
                    b = f.row - c,
                    g = f.column - e.column;
                d && (b = -b, g = -g);
                if (!this.$inChange && d && !this.selectedTabstop.some(function (b) {
                        return h(b.start, e) <= 0 && h(b.end, f) >= 0
                })) return this.detach();
                for (var d = this.ranges, j = 0; j < d.length; j++) {
                    var k = d[j];
                    if (!(k.end.row < e.row))
                        if (h(e, k.start) < 0 && h(f, k.end) > 0) {
                            this.removeRange(k);
                            j--
                        } else {
                            k.start.row == c && k.start.column > e.column && (k.start.column = k.start.column + g);
                            k.end.row == c && k.end.column >= e.column && (k.end.column =
                                k.end.column + g);
                            k.start.row >= c && (k.start.row = k.start.row + b);
                            k.end.row >= c && (k.end.row = k.end.row + b);
                            h(k.start, k.end) > 0 && this.removeRange(k)
                        }
                }
                d.length || this.detach()
            };
        this.updateLinkedFields = function () {
            var b = this.selectedTabstop;
            if (b.hasLinkedRanges) {
                this.$inChange = true;
                for (var d = this.editor.session, e = d.getTextRange(b.firstNonLinked), f = b.length; f--;) {
                    var g = b[f];
                    if (g.linked) {
                        var h = c.snippetManager.tmStrFormat(e, g.original);
                        d.replace(g, h)
                    }
                }
                this.$inChange = false
            }
        };
        this.onAfterExec = function (b) {
            b.command &&
                !b.command.readOnly && this.updateLinkedFields()
        };
        this.onChangeSelection = function () {
            if (this.editor) {
                for (var b = this.editor.selection.lead, c = this.editor.selection.anchor, d = this.editor.selection.isEmpty(), e = this.ranges.length; e--;)
                    if (!this.ranges[e].linked) {
                        var f = this.ranges[e].contains(b.row, b.column),
                            g = d || this.ranges[e].contains(c.row, c.column);
                        if (f && g) return
                    }
                this.detach()
            }
        };
        this.onChangeSession = function () {
            this.detach()
        };
        this.tabNext = function (b) {
            var c = this.tabstops.length - 1,
                b = this.index + (b || 1),
                b = Math.min(Math.max(b,
                    0), c);
            this.selectTabstop(b);
            b == c && this.detach()
        };
        this.selectTabstop = function (b) {
            var c = this.tabstops[this.index];
            c && this.addTabstopMarkers(c);
            this.index = b;
            if ((c = this.tabstops[this.index]) && c.length) {
                this.selectedTabstop = c;
                if (this.editor.inVirtualSelectionMode) this.editor.selection.setRange(c.firstNonLinked);
                else {
                    b = this.editor.multiSelect;
                    b.toSingleRange(c.firstNonLinked.clone());
                    for (var d = c.length; d--;) (!c.hasLinkedRanges || !c[d].linked) && b.addRange(c[d].clone(), true)
                }
                this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
            }
        };
        this.addTabstops = function (b, c, d) {
            if (!b[0]) {
                d = e.fromPoints(d, d);
                l(d.start, c);
                l(d.end, c);
                b[0] = [d];
                b[0].index = 0
            }
            var f = [this.index, 0],
                g = this.ranges;
            b.forEach(function (b) {
                for (var d = b.length; d--;) {
                    var h = b[d],
                        j = e.fromPoints(h.start, h.end || h.start),
                        k = j.start,
                        l = c;
                    k.row == 0 && (k.column = k.column + l.column);
                    k.row = k.row + l.row;
                    k = j.end;
                    l = c;
                    k.row == 0 && (k.column = k.column + l.column);
                    k.row = k.row + l.row;
                    j.original = h;
                    j.tabstop = b;
                    g.push(j);
                    b[d] = j;
                    h.fmtString ? (j.linked = true, b.hasLinkedRanges = true) : b.firstNonLinked || (b.firstNonLinked =
                        j)
                }
                b.firstNonLinked || (b.hasLinkedRanges = false);
                f.push(b);
                this.addTabstopMarkers(b)
            }, this);
            f.push(f.splice(2, 1)[0]);
            this.tabstops.splice.apply(this.tabstops, f)
        };
        this.addTabstopMarkers = function (b) {
            var c = this.editor.session;
            b.forEach(function (b) {
                b.markerId || (b.markerId = c.addMarker(b, "ace_snippet-marker", "text"))
            })
        };
        this.removeTabstopMarkers = function (b) {
            var c = this.editor.session;
            b.forEach(function (b) {
                c.removeMarker(b.markerId);
                b.markerId = null
            })
        };
        this.removeRange = function (b) {
            var c = b.tabstop.indexOf(b);
            b.tabstop.splice(c, 1);
            c = this.ranges.indexOf(b);
            this.ranges.splice(c, 1);
            this.editor.session.removeMarker(b.markerId)
        };
        this.keyboardHandler = new f;
        this.keyboardHandler.bindKeys({
            Tab: function (b) {
                (!c.snippetManager || !c.snippetManager.expandWithTab(b)) && b.tabstopManager.tabNext(1)
            },
            "Shift-Tab": function (b) {
                b.tabstopManager.tabNext(-1)
            },
            Esc: function (b) {
                b.tabstopManager.detach()
            },
            Return: function () {
                return false
            }
        })
    }).call(k.prototype);
    var l = function (b, c) {
        b.row == c.row && (b.column = b.column - c.column);
        b.row = b.row -
            c.row
    };
    b("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}");
    c.snippetManager = new j
});
ace.define("ace/autocomplete", "require exports module ace/keyboard/hash_handler ace/autocomplete/popup ace/autocomplete/util ace/lib/event ace/lib/lang ace/snippets".split(" "), function (b, c) {
    var d = b("./keyboard/hash_handler").HashHandler,
        e = b("./autocomplete/popup").AcePopup,
        f = b("./autocomplete/util"),
        g = b("./lib/event"),
        h = b("./lib/lang"),
        j = b("./snippets").snippetManager,
        k = function () {
            this.autoInsert = true;
            this.keyboardHandler = new d;
            this.keyboardHandler.bindKeys(this.commands);
            this.blurListener = this.blurListener.bind(this);
            this.changeListener = this.changeListener.bind(this);
            this.mousedownListener = this.mousedownListener.bind(this);
            this.mousewheelListener = this.mousewheelListener.bind(this);
            this.changeTimer = h.delayedCall(function () {
                this.updateCompletions(true)
            }.bind(this))
        };
    (function () {
        this.$init = function () {
            this.popup = new e(document.body || document.documentElement);
            this.popup.on("click", function (b) {
                this.insertMatch();
                b.stop()
            }.bind(this))
        };
        this.openPopup = function (b, c, d) {
            this.popup || this.$init();
            this.popup.setData(this.completions.filtered);
            c = b.renderer;
            if (!d) {
                this.popup.setRow(0);
                this.popup.setFontSize(b.getFontSize());
                var d = c.layerConfig.lineHeight,
                    e = c.$cursorLayer.getPixelPosition(this.base, true);
                e.left = e.left - this.popup.getTextLeftOffset();
                var f = b.container.getBoundingClientRect();
                e.top = e.top + (f.top - c.layerConfig.offset);
                e.left = e.left + (f.left - b.renderer.scrollLeft);
                e.left = e.left + c.$gutterLayer.gutterWidth;
                this.popup.show(e, d)
            }
        };
        this.detach = function () {
            this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
            this.editor.off("changeSelection",
                this.changeListener);
            this.editor.off("blur", this.changeListener);
            this.editor.off("mousedown", this.mousedownListener);
            this.editor.off("mousewheel", this.mousewheelListener);
            this.changeTimer.cancel();
            this.popup && this.popup.hide();
            this.activated = false;
            this.completions = this.base = null
        };
        this.changeListener = function () {
            var b = this.editor.selection.lead;
            (b.row != this.base.row || b.column < this.base.column) && this.detach();
            this.activated ? this.changeTimer.schedule() : this.detach()
        };
        this.blurListener = function () {
            document.activeElement !=
                this.editor.textInput.getElement() && this.detach()
        };
        this.mousedownListener = function () {
            this.detach()
        };
        this.mousewheelListener = function () {
            this.detach()
        };
        this.goTo = function (b) {
            var c = this.popup.getRow(),
                d = this.popup.session.getLength() - 1;
            switch (b) {
                case "up":
                    c = c < 0 ? d : c - 1;
                    break;
                case "down":
                    c = c >= d ? -1 : c + 1;
                    break;
                case "start":
                    c = 0;
                    break;
                case "end":
                    c = d
            }
            this.popup.setRow(c)
        };
        this.insertMatch = function (b) {
            b || (b = this.popup.getData(this.popup.getRow()));
            if (!b) return false;
            if (b.completer && b.completer.insertMatch) b.completer.insertMatch(this.editor);
            else {
                if (this.completions.filterText)
                    for (var c = this.editor.selection.getAllRanges(), d = 0, e; e = c[d]; d++) {
                        e.start.column = e.start.column - this.completions.filterText.length;
                        this.editor.session.remove(e)
                    }
                b.snippet ? j.insertSnippet(this.editor, b.snippet) : this.editor.execCommand("insertstring", b.value || b)
            }
            this.detach()
        };
        this.commands = {
            Up: function (b) {
                b.completer.goTo("up")
            },
            Down: function (b) {
                b.completer.goTo("down")
            },
            "Ctrl-Up|Ctrl-Home": function (b) {
                b.completer.goTo("start")
            },
            "Ctrl-Down|Ctrl-End": function (b) {
                b.completer.goTo("end")
            },
            Esc: function (b) {
                b.completer.detach()
            },
            Space: function (b) {
                b.completer.detach();
                b.insert(" ")
            },
            Return: function (b) {
                b.completer.insertMatch()
            },
            "Shift-Return": function (b) {
                b.completer.insertMatch(true)
            },
            Tab: function (b) {
                b.completer.insertMatch()
            },
            PageUp: function (b) {
                b.completer.popup.gotoPageUp()
            },
            PageDown: function (b) {
                b.completer.popup.gotoPageDown()
            }
        };
        this.gatherCompletions = function (b, c) {
            var d = b.getSession(),
                e = b.getCursorPosition(),
                g = d.getLine(e.row),
                h = f.retrievePrecedingIdentifier(g, e.column);
            this.base =
                b.getCursorPosition();
            this.base.column = this.base.column - h.length;
            var j = [];
            return f.parForEach(b.completers, function (c, f) {
                c.getCompletions(b, d, e, h, function (b, c) {
                    b || (j = j.concat(c));
                    f()
                })
            }, function () {
                c(null, {
                    prefix: h,
                    matches: j
                })
            }), true
        };
        this.showPopup = function (b) {
            this.editor && this.detach();
            this.activated = true;
            this.editor = b;
            b.completer != this && (b.completer && b.completer.detach(), b.completer = this);
            b.keyBinding.addKeyboardHandler(this.keyboardHandler);
            b.on("changeSelection", this.changeListener);
            b.on("blur",
                this.blurListener);
            b.on("mousedown", this.mousedownListener);
            b.on("mousewheel", this.mousewheelListener);
            this.updateCompletions()
        };
        this.updateCompletions = function (b) {
            if (b && this.base && this.completions) {
                var c = this.editor.session.getTextRange({
                    start: this.base,
                    end: this.editor.getCursorPosition()
                });
                if (c != this.completions.filterText) {
                    this.completions.setFilter(c);
                    if (!this.completions.filtered.length) return this.detach();
                    this.openPopup(this.editor, c, b)
                }
            } else this.gatherCompletions(this.editor, function (c, d) {
                var e =
                    d && d.matches;
                if (!e || !e.length) return this.detach();
                this.completions = new l(e);
                this.completions.setFilter(d.prefix);
                e = this.completions.filtered;
                if (!e.length) return this.detach();
                if (this.autoInsert && e.length == 1) return this.insertMatch(e[0]);
                this.openPopup(this.editor, d.prefix, b)
            }.bind(this))
        };
        this.cancelContextMenu = function () {
            var b = function (c) {
                this.editor.off("nativecontextmenu", b);
                c && c.domEvent && g.stopEvent(c.domEvent)
            }.bind(this);
            setTimeout(b, 10);
            this.editor.on("nativecontextmenu", b)
        }
    }).call(k.prototype);
    k.startCommand = {
        name: "startAutocomplete",
        exec: function (b) {
            b.completer || (b.completer = new k);
            b.completer.showPopup(b);
            b.completer.cancelContextMenu()
        },
        bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
    };
    var l = function (b, c) {
        this.filtered = this.all = b;
        this.filterText = c || ""
    };
    (function () {
        this.setFilter = function (b) {
            var c = b.length > this.filterText && b.lastIndexOf(this.filterText, 0) === 0 ? this.filtered : this.all;
            this.filterText = b;
            var c = this.filterCompletions(c, this.filterText),
                c = c.sort(function (b, c) {
                    return c.exactMatch -
                        b.exactMatch || c.score - b.score
                }),
                d = null;
            this.filtered = c = c.filter(function (b) {
                b = b.value || b.caption || b.snippet;
                return b === d ? false : (d = b, true)
            })
        };
        this.filterCompletions = function (b, c) {
            var d = [],
                e = c.toUpperCase(),
                f = c.toLowerCase(),
                g = 0,
                h;
            a: for (; h = b[g]; g++) {
                var j = h.value || h.caption || h.snippet;
                if (j) {
                    for (var k = -1, l = 0, z = 0, A, C, G = 0; G < c.length; G++) {
                        A = j.indexOf(f[G], k + 1);
                        C = j.indexOf(e[G], k + 1);
                        A = A >= 0 ? C < 0 || A < C ? A : C : C;
                        if (A < 0) continue a;
                        C = A - k - 1;
                        C > 0 && (k === -1 && (z = z + 10), z = z + C);
                        l = l | 1 << A;
                        k = A
                    }
                    h.matchMask = l;
                    h.exactMatch = z ? 0 :
                        1;
                    h.score = (h.score || 0) - z;
                    d.push(h)
                }
            }
            return d
        }
    }).call(l.prototype);
    c.Autocomplete = k;
    c.FilteredList = l
});
ace.define("ace/autocomplete/popup", "require exports module ace/edit_session ace/virtual_renderer ace/editor ace/range ace/lib/event ace/lib/lang ace/lib/dom".split(" "), function (b, c) {
    b("../edit_session");
    var d = b("../virtual_renderer").VirtualRenderer,
        e = b("../editor").Editor,
        f = b("../range").Range,
        g = b("../lib/event"),
        h = b("../lib/lang"),
        j = b("../lib/dom"),
        k = function (b) {
            b = new d(b);
            b.$maxLines = 4;
            b = new e(b);
            return b.setHighlightActiveLine(false), b.setShowPrintMargin(false), b.renderer.setShowGutter(false),
                b.renderer.setHighlightGutterLine(false), b.$mouseHandler.$focusWaitTimout = 0, b
        };
    j.importCssString(".ace_autocomplete.ace-tm .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_autocomplete.ace-tm .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}");
    c.AcePopup = function (b) {
        var c = j.createElement("div"),
            d = new k(c);
        b && b.appendChild(c);
        c.style.display = "none";
        d.renderer.content.style.cursor = "default";
        d.renderer.setStyle("ace_autocomplete");
        d.setOption("displayIndentGuides", false);
        b = function () { };
        d.focus = b;
        d.$isFocused = true;
        d.renderer.$cursorLayer.restartTimer = b;
        d.renderer.$cursorLayer.element.style.opacity = 0;
        d.renderer.$maxLines = 8;
        d.renderer.$keepTextAreaAtCursor = false;
        d.setHighlightActiveLine(false);
        d.session.highlight("");
        d.session.$searchHighlight.clazz =
            "ace_highlight-marker";
        d.on("mousedown", function (b) {
            var c = b.getDocumentPosition();
            d.moveCursorToPosition(c);
            d.selection.clearSelection();
            s.start.row = s.end.row = c.row;
            b.stop()
        });
        var e, p = new f(-1, 0, -1, Infinity),
            s = new f(-1, 0, -1, Infinity);
        s.id = d.session.addMarker(s, "ace_active-line", "fullLine");
        d.setSelectOnHover = function (b) {
            b ? p.id && (d.session.removeMarker(p.id), p.id = null) : p.id = d.session.addMarker(p, "ace_line-hover", "fullLine")
        };
        d.setSelectOnHover(false);
        d.on("mousemove", function (b) {
            if (e) {
                if (!(e.x == b.x &&
                        e.y == b.y)) {
                    e = b;
                    e.scrollTop = d.renderer.scrollTop;
                    b = e.getDocumentPosition().row;
                    p.start.row != b && (p.id || d.setRow(b), r(b))
                }
            } else e = b
        });
        d.renderer.on("beforeRender", function () {
            if (e && p.start.row != -1) {
                e.$pos = null;
                var b = e.getDocumentPosition().row;
                p.id || d.setRow(b);
                r(b, true)
            }
        });
        d.renderer.on("afterRender", function () {
            var b = d.getRow(),
                c = d.renderer.$textLayer,
                b = c.element.childNodes[b - c.config.firstRow];
            if (b != c.selectedNode) {
                c.selectedNode && j.removeCssClass(c.selectedNode, "ace_selected");
                (c.selectedNode = b) &&
                j.addCssClass(b, "ace_selected")
            }
        });
        var c = function () {
            r(-1)
        },
            r = function (b, c) {
                b !== p.start.row && (p.start.row = p.end.row = b, c || d.session._emit("changeBackMarker"), d._emit("changeHoverMarker"))
            };
        d.getHoveredRow = function () {
            return p.start.row
        };
        g.addListener(d.container, "mouseout", c);
        d.on("hide", c);
        d.on("changeSelection", c);
        d.session.doc.getLength = function () {
            return d.data.length
        };
        d.session.doc.getLine = function (b) {
            b = d.data[b];
            return typeof b == "string" ? b : b && b.value || ""
        };
        c = d.session.bgTokenizer;
        return c.$tokenizeRow =
            function (b) {
                var c = d.data[b],
                    e = [];
                if (!c) return e;
                typeof c == "string" && (c = {
                    value: c
                });
                c.caption || (c.caption = c.value);
                for (var f = -1, g, h, b = 0; b < c.caption.length; b++) {
                    h = c.caption[b];
                    g = c.matchMask & 1 << b ? 1 : 0;
                    f !== g ? (e.push({
                        type: c.className || "" + (g ? "completion-highlight" : ""),
                        value: h
                    }), f = g) : e[e.length - 1].value = e[e.length - 1].value + h
                }
                c.meta && c.meta.length + c.caption.length < d.renderer.$size.scrollerWidth / d.renderer.layerConfig.characterWidth - 2 && e.push({
                    type: "rightAlignedText",
                    value: c.meta
                });
                return e
            }, c.$updateOnChange =
            b, c.start = b, d.session.$computeWidth = function () {
                return this.screenWidth = 0
            }, d.isOpen = false, d.isTopdown = false, d.data = [], d.setData = function (b) {
                d.data = b || [];
                d.setValue(h.stringRepeat("\n", b.length), -1);
                d.setRow(0)
            }, d.getData = function (b) {
                return d.data[b]
            }, d.getRow = function () {
                return s.start.row
            }, d.setRow = function (b) {
                b = Math.max(-1, Math.min(this.data.length, b));
                s.start.row != b && (d.selection.clearSelection(), s.start.row = s.end.row = b || 0, d.session._emit("changeBackMarker"), d.moveCursorTo(b || 0, 0), d.isOpen && d._signal("select"))
            },
            d.on("changeSelection", function () {
                d.isOpen && d.setRow(d.selection.lead.row)
            }), d.hide = function () {
                this.container.style.display = "none";
                this._signal("hide");
                d.isOpen = false
            }, d.show = function (b, c, f) {
                var g = this.container,
                    h = window.innerHeight,
                    j = window.innerWidth,
                    k = b.top + this.$borderSize;
                k + this.renderer.$maxLines * c * 1.4 > h - c && !f ? (g.style.top = "", g.style.bottom = h - k + "px", d.isTopdown = false) : (k = k + c, g.style.top = k + "px", g.style.bottom = "", d.isTopdown = true);
                g.style.display = "";
                this.renderer.$textLayer.checkForSizeChanges();
                b = b.left;
                b + g.offsetWidth > j && (b = j - g.offsetWidth);
                g.style.left = b + "px";
                this._signal("show");
                e = null;
                d.isOpen = true
            }, d.getTextLeftOffset = function () {
                return this.$borderSize + this.renderer.$padding + this.$imageSize
            }, d.$imageSize = 0, d.$borderSize = 1, d
    }
});
ace.define("ace/autocomplete/util", ["require", "exports", "module"], function (b, c) {
    c.parForEach = function (b, c, d) {
        var h = 0,
            j = b.length;
        0 === j && d();
        for (var k = 0; k < j; k++) c(b[k], function (b, c) {
            h++;
            h === j && d(b, c)
        })
    };
    var d = /[a-zA-Z_0-9\$-]/;
    c.retrievePrecedingIdentifier = function (b, c, g) {
        for (var g = g || d, h = [], c = c - 1; 0 <= c && g.test(b[c]) ; c--) h.push(b[c]);
        return h.reverse().join("")
    };
    c.retrieveFollowingIdentifier = function (b, c, g) {
        for (var g = g || d, h = []; c < b.length && g.test(b[c]) ; c++) h.push(b[c]);
        return h
    }
});
ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], function (b, c) {
    function d(b, c) {
        var d = b.getTextRange(e.fromPoints({
            row: 0,
            column: 0
        }, c)).split(f).length - 1,
            k = b.getValue().split(f),
            l = Object.create(null),
            m = k[d];
        return k.forEach(function (b, c) {
            if (b && b !== m) {
                var e = Math.abs(d - c),
                    e = k.length - e;
                l[b] ? l[b] = Math.max(e, l[b]) : l[b] = e
            }
        }), l
    }
    var e = b("ace/range").Range,
        f = /[^a-zA-Z_0-9\$\-]+/;
    c.getCompletions = function (b, c, e, f, l) {
        var m = d(c, e, f),
            b = Object.keys(m);
        l(null, b.map(function (b) {
            return {
                name: b,
                value: b,
                score: m[b],
                meta: "local"
            }
        }))
    }
});