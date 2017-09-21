! function (b, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function (b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return c(b)
    } : c(b)
}("undefined" != typeof window ? window : this, function (b, c) {
    function d(b) {
        var c = !!b && "length" in b && b.length,
            d = v.type(b);
        return "function" === d || v.isWindow(b) ? !1 : "array" === d || 0 === c || "number" == typeof c && 0 < c && c - 1 in b
    }

    function e(b, c, d) {
        if (v.isFunction(c)) return v.grep(b, function (b, e) {
            return !!c.call(b, e, b) !==
                d
        });
        if (c.nodeType) return v.grep(b, function (b) {
            return b === c !== d
        });
        if ("string" == typeof c) {
            if (xb.test(c)) return v.filter(c, b, d);
            c = v.filter(c, b)
        }
        return v.grep(b, function (b) {
            return -1 < v.inArray(b, c) !== d
        })
    }

    function f(b, c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function g(b) {
        var c = {};
        return v.each(b.match(Aa) || [], function (b, d) {
            c[d] = !0
        }), c
    }

    function h() {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", j), b.removeEventListener("load", j)) : (V.detachEvent("onreadystatechange", j), b.detachEvent("onload",
            j))
    }

    function j() {
        (V.addEventListener || "load" === b.event.type || "complete" === V.readyState) && (h(), v.ready())
    }

    function k(b, c, d) {
        if (void 0 === d && 1 === b.nodeType) {
            var e = "data-" + c.replace(Ma, "-$1").toLowerCase();
            if (d = b.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : qb.test(d) ? v.parseJSON(d) : d
                } catch (f) { }
                v.data(b, c, d)
            } else d = void 0
        }
        return d
    }

    function l(b) {
        for (var c in b)
            if (("data" !== c || !v.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function m(b, c, d, e) {
        if (Ia(b)) {
            var f, j, g = v.expando,
                k = b.nodeType,
                h = k ? v.cache : b,
                l = k ? b[g] : b[g] && g;
            if (l && h[l] && (e || h[l].data) || void 0 !== d || "string" != typeof c) return l || (l = k ? b[g] = pa.pop() || v.guid++ : g), h[l] || (h[l] = k ? {} : {
                toJSON: v.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? h[l] = v.extend(h[l], c) : h[l].data = v.extend(h[l].data, c)), j = h[l], e || (j.data || (j.data = {}), j = j.data), void 0 !== d && (j[v.camelCase(c)] = d), "string" == typeof c ? (f = j[c], null == f && (f = j[v.camelCase(c)])) : f = j, f
        }
    }

    function n(b, c, d) {
        if (Ia(b)) {
            var e, f, j = b.nodeType,
                g = j ? v.cache : b,
                k = j ? b[v.expando] : v.expando;
            if (g[k]) {
                if (c && (e = d ? g[k] : g[k].data)) {
                    v.isArray(c) ? c = c.concat(v.map(c, v.camelCase)) : c in e ? c = [c] : (c = v.camelCase(c), c = c in e ? [c] : c.split(" "));
                    for (f = c.length; f--;) delete e[c[f]];
                    if (d ? !l(e) : !v.isEmptyObject(e)) return
                } (d || (delete g[k].data, l(g[k]))) && (j ? v.cleanData([b], !0) : R.deleteExpando || g != g.window ? delete g[k] : g[k] = void 0)
            }
        }
    }

    function q(b, c, d, e) {
        var f, j = 1,
            g = 20,
            k = e ? function () {
                return e.cur()
            } : function () {
                return v.css(b, c, "")
            },
            h = k(),
            l = d && d[3] || (v.cssNumber[c] ? "" :
                "px"),
            m = (v.cssNumber[c] || "px" !== l && +h) && gb.exec(v.css(b, c));
        if (m && m[3] !== l) {
            l = l || m[3];
            d = d || [];
            m = +h || 1;
            do j = j || ".5", m /= j, v.style(b, c, m + l); while (j !== (j = k() / h) && 1 !== j && --g)
        }
        return d && (m = +m || +h || 0, f = d[1] ? m + (d[1] + 1) * d[2] : +d[2], e && (e.unit = l, e.start = m, e.end = f)), f
    }

    function p(b) {
        var c = yb.split("|"),
            b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function s(b, c) {
        var d, e, f = 0,
            j = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" !=
            typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : void 0;
        if (!j) {
            j = [];
            for (d = b.childNodes || b; null != (e = d[f]) ; f++) !c || v.nodeName(e, c) ? j.push(e) : v.merge(j, s(e, c))
        }
        return void 0 === c || c && v.nodeName(b, c) ? v.merge([b], j) : j
    }

    function r(b, c) {
        for (var d, e = 0; null != (d = b[e]) ; e++) v._data(d, "globalEval", !c || v._data(c[e], "globalEval"))
    }

    function o(b) {
        ua.test(b.type) && (b.defaultChecked = b.checked)
    }

    function t(b, c, d, e, f) {
        for (var j, g, k, h, l, m, n, q = b.length, u = p(c), t = [], L = 0; q > L; L++)
            if (g = b[L], g || 0 === g)
                if ("object" === v.type(g)) v.merge(t,
                    g.nodeType ? [g] : g);
                else if (Fb.test(g)) {
                    h = h || u.appendChild(c.createElement("div"));
                    l = (hb.exec(g) || ["", ""])[1].toLowerCase();
                    n = na[l] || na._default;
                    h.innerHTML = n[1] + v.htmlPrefilter(g) + n[2];
                    for (j = n[0]; j--;) h = h.lastChild;
                    if (!R.leadingWhitespace && Pa.test(g) && t.push(c.createTextNode(Pa.exec(g)[0])), !R.tbody)
                        for (j = (g = "table" !== l || Ja.test(g) ? "<table>" !== n[1] || Ja.test(g) ? 0 : h : h.firstChild) && g.childNodes.length; j--;) v.nodeName(m = g.childNodes[j], "tbody") && !m.childNodes.length && g.removeChild(m);
                    v.merge(t, h.childNodes);
                    for (h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = u.lastChild
                } else t.push(c.createTextNode(g));
        h && u.removeChild(h);
        R.appendChecked || v.grep(s(t, "input"), o);
        for (L = 0; g = t[L++];)
            if (e && -1 < v.inArray(g, e)) f && f.push(g);
            else if (k = v.contains(g.ownerDocument, g), h = s(u.appendChild(g), "script"), k && r(h), d)
                for (j = 0; g = h[j++];) Ka.test(g.type || "") && d.push(g);
        return u
    }

    function u() {
        return !0
    }

    function w() {
        return !1
    }

    function z() {
        try {
            return V.activeElement
        } catch (b) { }
    }

    function A(b, c, d, e, f, j) {
        var g, k;
        if ("object" ==
            typeof c) {
            "string" != typeof d && (e = e || d, d = void 0);
            for (k in c) A(b, k, d, e, c[k], j);
            return b
        }
        if (null == e && null == f ? (f = d, e = d = void 0) : null == f && ("string" == typeof d ? (f = e, e = void 0) : (f = e, e = d, d = void 0)), !1 === f) f = w;
        else if (!f) return b;
        return 1 === j && (g = f, f = function (b) {
            return v().off(b), g.apply(this, arguments)
        }, f.guid = g.guid || (g.guid = v.guid++)), b.each(function () {
            v.event.add(this, c, f, e, d)
        })
    }

    function C(b, c) {
        return v.nodeName(b, "table") && v.nodeName(11 !== c.nodeType ? c : c.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] ||
            b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }

    function G(b) {
        return b.type = (null !== v.find.attr(b, "type")) + "/" + b.type, b
    }

    function H(b) {
        var c = $b.exec(b.type);
        return c ? b.type = c[1] : b.removeAttribute("type"), b
    }

    function K(b, c) {
        if (1 === c.nodeType && v.hasData(b)) {
            var d, e, f;
            e = v._data(b);
            var j = v._data(c, e),
                g = e.events;
            if (g)
                for (d in delete j.handle, j.events = {}, g) {
                    e = 0;
                    for (f = g[d].length; f > e; e++) v.event.add(c, d, g[d][e])
                }
            j.data && (j.data = v.extend({}, j.data))
        }
    }

    function P(b, c, d, e) {
        var c = ta.apply([], c),
            f, j, g, k,
            h = 0,
            l = b.length,
            m = l - 1,
            n = c[0],
            o = v.isFunction(n);
        if (o || 1 < l && "string" == typeof n && !R.checkClone && Mb.test(n)) return b.each(function (f) {
            var j = b.eq(f);
            o && (c[0] = n.call(this, f, j.html()));
            P(j, c, d, e)
        });
        if (l && (k = t(c, b[0].ownerDocument, !1, b, e), f = k.firstChild, 1 === k.childNodes.length && (k = f), f || e)) {
            g = v.map(s(k, "script"), G);
            for (j = g.length; l > h; h++) f = k, h !== m && (f = v.clone(f, !0, !0), j && v.merge(g, s(f, "script"))), d.call(b[h], f, h);
            if (j) {
                k = g[g.length - 1].ownerDocument;
                v.map(g, H);
                for (h = 0; j > h; h++) f = g[h], Ka.test(f.type || "") && !v._data(f,
                    "globalEval") && v.contains(k, f) && (f.src ? v._evalUrl && v._evalUrl(f.src) : v.globalEval((f.text || f.textContent || f.innerHTML || "").replace(ac, "")))
            }
            k = f = null
        }
        return b
    }

    function T(b, c, d) {
        for (var e = c ? v.filter(c, b) : b, f = 0; null != (c = e[f]) ; f++) d || 1 !== c.nodeType || v.cleanData(s(c)), c.parentNode && (d && v.contains(c.ownerDocument, c) && r(s(c, "script")), c.parentNode.removeChild(c));
        return b
    }

    function D(b, c) {
        var d = v(c.createElement(b)).appendTo(c.body),
            e = v.css(d[0], "display");
        return d.detach(), e
    }

    function F(b) {
        var c = V,
            d = bc[b];
        return d || (d = D(b, c), "none" !== d && d || (Ya = (Ya || v("<iframe frameborder='0' width='0' height='0'/>")).appendTo(c.documentElement), c = (Ya[0].contentWindow || Ya[0].contentDocument).document, c.write(), c.close(), d = D(b, c), Ya.detach()), bc[b] = d), d
    }

    function I(b, c) {
        return {
            get: function () {
                return b() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function J(b) {
        if (b in ib) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = vc.length; d--;)
            if (b = vc[d] + c, b in ib) return b
    }

    function N(b, c) {
        for (var d, e, f, j = [], g = 0, k = b.length; k > g; g++) e = b[g], e.style && (j[g] = v._data(e, "olddisplay"), d = e.style.display, c ? (j[g] || "none" !== d || (e.style.display = ""), "" === e.style.display && qa(e) && (j[g] = v._data(e, "olddisplay", F(e.nodeName)))) : (f = qa(e), (d && "none" !== d || !f) && v._data(e, "olddisplay", f ? d : v.css(e, "display"))));
        for (g = 0; k > g; g++) e = b[g], e.style && (c && "none" !== e.style.display && "" !== e.style.display || (e.style.display = c ? j[g] || "" : "none"));
        return b
    }

    function U(b, c, d) {
        return (b = rb.exec(c)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : c
    }

    function Q(b,
        c, d, e, f) {
        for (var c = d === (e ? "border" : "content") ? 4 : "width" === c ? 1 : 0, j = 0; 4 > c; c += 2) "margin" === d && (j += v.css(b, d + Qa[c], !0, f)), e ? ("content" === d && (j -= v.css(b, "padding" + Qa[c], !0, f)), "margin" !== d && (j -= v.css(b, "border" + Qa[c] + "Width", !0, f))) : (j += v.css(b, "padding" + Qa[c], !0, f), "padding" !== d && (j += v.css(b, "border" + Qa[c] + "Width", !0, f)));
        return j
    }

    function B(c, d, e) {
        var f = !0,
            j = "width" === d ? c.offsetWidth : c.offsetHeight,
            g = jb(c),
            k = R.boxSizing && "border-box" === v.css(c, "boxSizing", !1, g);
        if (V.msFullscreenElement && b.top !== b && c.getClientRects().length &&
            (j = Math.round(100 * c.getBoundingClientRect()[d])), 0 >= j || null == j) {
            if (j = sb(c, d, g), (0 > j || null == j) && (j = c.style[d]), Za.test(j)) return j;
            f = k && (R.boxSizingReliable() || j === c.style[d]);
            j = parseFloat(j) || 0
        }
        return j + Q(c, d, e || (k ? "border" : "content"), f, g) + "px"
    }

    function E(b, c, d, e, f) {
        return new E.prototype.init(b, c, d, e, f)
    }

    function Z() {
        return b.setTimeout(function () {
            $a = void 0
        }), $a = v.now()
    }

    function O(b, c) {
        for (var d, e = {
            height: b
        }, f = 0, c = c ? 1 : 0; 4 > f; f += 2 - c) d = Qa[f], e["margin" + d] = e["padding" + d] = b;
        return c && (e.opacity = e.width =
            b), e
    }

    function M(b, c, d) {
        for (var e, f = (aa.tweeners[c] || []).concat(aa.tweeners["*"]), j = 0, g = f.length; g > j; j++)
            if (e = f[j].call(d, c, b)) return e
    }

    function X(b, c) {
        var d, e, f, j, g;
        for (d in b)
            if (e = v.camelCase(d), f = c[e], j = b[d], v.isArray(j) && (f = j[1], j = b[d] = j[0]), d !== e && (b[e] = j, delete b[d]), g = v.cssHooks[e], g && "expand" in g)
                for (d in j = g.expand(j), delete b[e], j) d in b || (b[d] = j[d], c[d] = f);
            else c[e] = f
    }

    function aa(b, c, d) {
        var e, f = 0,
            j = aa.prefilters.length,
            g = v.Deferred().always(function () {
                delete k.elem
            }),
            k = function () {
                if (e) return !1;
                for (var c = $a || Z(), c = Math.max(0, h.startTime + h.duration - c), d = 1 - (c / h.duration || 0), f = 0, j = h.tweens.length; j > f; f++) h.tweens[f].run(d);
                return g.notifyWith(b, [h, d, c]), 1 > d && j ? c : (g.resolveWith(b, [h]), !1)
            },
            h = g.promise({
                elem: b,
                props: v.extend({}, c),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: $a || Z(),
                duration: d.duration,
                tweens: [],
                createTween: function (c, d) {
                    var e = v.Tween(b, h.opts, c, d, h.opts.specialEasing[c] || h.opts.easing);
                    return h.tweens.push(e),
                        e
                },
                stop: function (c) {
                    var d = 0,
                        f = c ? h.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; f > d; d++) h.tweens[d].run(1);
                    return c ? (g.notifyWith(b, [h, 1, 0]), g.resolveWith(b, [h, c])) : g.rejectWith(b, [h, c]), this
                }
            }),
            d = h.props;
        for (X(d, h.opts.specialEasing) ; j > f; f++)
            if (c = aa.prefilters[f].call(h, b, d, h.opts)) return v.isFunction(c.stop) && (v._queueHooks(h.elem, h.opts.queue).stop = v.proxy(c.stop, c)), c;
        return v.map(d, M, h), v.isFunction(h.opts.start) && h.opts.start.call(b, h), v.fx.timer(v.extend(k, {
            elem: b,
            anim: h,
            queue: h.opts.queue
        })),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function Y(b) {
        return v.attr(b, "class") || ""
    }

    function ba(b) {
        return function (c, d) {
            "string" != typeof c && (d = c, c = "*");
            var e, f = 0,
                j = c.toLowerCase().match(Aa) || [];
            if (v.isFunction(d))
                for (; e = j[f++];) "+" === e.charAt(0) ? (e = e.slice(1) || "*", (b[e] = b[e] || []).unshift(d)) : (b[e] = b[e] || []).push(d)
        }
    }

    function da(b, c, d, e) {
        function f(k) {
            var h;
            return j[k] = !0, v.each(b[k] || [], function (b, k) {
                var l = k(c, d, e);
                return "string" != typeof l ||
                    g || j[l] ? g ? !(h = l) : void 0 : (c.dataTypes.unshift(l), f(l), !1)
            }), h
        }
        var j = {},
            g = b === wc;
        return f(c.dataTypes[0]) || !j["*"] && f("*")
    }

    function ra(b, c) {
        var d, e, f = v.ajaxSettings.flatOptions || {};
        for (e in c) void 0 !== c[e] && ((f[e] ? b : d || (d = {}))[e] = c[e]);
        return d && v.extend(!0, b, d), b
    }

    function x(b, c, d, e) {
        var f;
        if (v.isArray(c)) v.each(c, function (c, f) {
            d || gd.test(b) ? e(b, f) : x(b + "[" + ("object" == typeof f && null != f ? c : "") + "]", f, d, e)
        });
        else if (d || "object" !== v.type(c)) e(b, c);
        else
            for (f in c) x(b + "[" + f + "]", c[f], d, e)
    }

    function ja() {
        try {
            return new b.XMLHttpRequest
        } catch (c) { }
    }

    function ka() {
        try {
            return new b.ActiveXObject("Microsoft.XMLHTTP")
        } catch (c) { }
    }

    function oa(b) {
        return v.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var pa = [],
        V = b.document,
        va = pa.slice,
        ta = pa.concat,
        sa = pa.push,
        Da = pa.indexOf,
        L = {},
        W = L.toString,
        fa = L.hasOwnProperty,
        R = {},
        v = function (b, c) {
            return new v.fn.init(b, c)
        },
        Na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tb = /^-ms-/,
        kb = /-([\da-z])/gi,
        ea = function (b, c) {
            return c.toUpperCase()
        };
    v.fn = v.prototype = {
        jquery: "1.12.1",
        constructor: v,
        selector: "",
        length: 0,
        toArray: function () {
            return va.call(this)
        },
        get: function (b) {
            return null != b ? 0 > b ? this[b + this.length] : this[b] : va.call(this)
        },
        pushStack: function (b) {
            b = v.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (b) {
            return v.each(this, b)
        },
        map: function (b) {
            return this.pushStack(v.map(this, function (c, d) {
                return b.call(c, d, c)
            }))
        },
        slice: function () {
            return this.pushStack(va.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (b) {
            var c =
                this.length,
                b = +b + (0 > b ? c : 0);
            return this.pushStack(0 <= b && c > b ? [this[b]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: sa,
        sort: pa.sort,
        splice: pa.splice
    };
    v.extend = v.fn.extend = function () {
        var b, c, d, e, f, j, g = arguments[0] || {},
            k = 1,
            h = arguments.length,
            l = !1;
        "boolean" == typeof g && (l = g, g = arguments[k] || {}, k++);
        "object" == typeof g || v.isFunction(g) || (g = {});
        for (k === h && (g = this, k--) ; h > k; k++)
            if (null != (f = arguments[k]))
                for (e in f) b = g[e], d = f[e], g !== d && (l && d && (v.isPlainObject(d) || (c = v.isArray(d))) ? (c ? (c = !1, j = b && v.isArray(b) ? b : []) : j = b && v.isPlainObject(b) ? b : {}, g[e] = v.extend(l, j, d)) : void 0 !== d && (g[e] = d));
        return g
    };
    v.extend({
        expando: "jQuery" + ("1.12.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (b) {
            throw Error(b);
        },
        noop: function () { },
        isFunction: function (b) {
            return "function" === v.type(b)
        },
        isArray: Array.isArray || function (b) {
            return "array" === v.type(b)
        },
        isWindow: function (b) {
            return null != b && b == b.window
        },
        isNumeric: function (b) {
            var c = b && b.toString();
            return !v.isArray(b) && 0 <= c - parseFloat(c) + 1
        },
        isEmptyObject: function (b) {
            for (var c in b) return !1;
            return !0
        },
        isPlainObject: function (b) {
            var c;
            if (!b || "object" !== v.type(b) || b.nodeType || v.isWindow(b)) return !1;
            try {
                if (b.constructor && !fa.call(b, "constructor") && !fa.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            if (!R.ownFirst)
                for (c in b) return fa.call(b, c);
            for (c in b);
            return void 0 === c || fa.call(b, c)
        },
        type: function (b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? L[W.call(b)] || "object" : typeof b
        },
        globalEval: function (c) {
            c && v.trim(c) && (b.execScript || function (c) {
                b.eval.call(b,
                    c)
            })(c)
        },
        camelCase: function (b) {
            return b.replace(tb, "ms-").replace(kb, ea)
        },
        nodeName: function (b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function (b, c) {
            var e, f = 0;
            if (d(b))
                for (e = b.length; e > f && !1 !== c.call(b[f], f, b[f]) ; f++);
            else
                for (f in b)
                    if (!1 === c.call(b[f], f, b[f])) break;
            return b
        },
        trim: function (b) {
            return null == b ? "" : (b + "").replace(Na, "")
        },
        makeArray: function (b, c) {
            var e = c || [];
            return null != b && (d(Object(b)) ? v.merge(e, "string" == typeof b ? [b] : b) : sa.call(e, b)), e
        },
        inArray: function (b,
            c, d) {
            var e;
            if (c) {
                if (Da) return Da.call(c, b, d);
                e = c.length;
                for (d = d ? 0 > d ? Math.max(0, e + d) : d : 0; e > d; d++)
                    if (d in c && c[d] === b) return d
            }
            return -1
        },
        merge: function (b, c) {
            for (var d = +c.length, e = 0, f = b.length; d > e;) b[f++] = c[e++];
            if (d !== d)
                for (; void 0 !== c[e];) b[f++] = c[e++];
            return b.length = f, b
        },
        grep: function (b, c, d) {
            for (var e = [], f = 0, j = b.length, g = !d; j > f; f++) d = !c(b[f], f), d !== g && e.push(b[f]);
            return e
        },
        map: function (b, c, e) {
            var f, j, g = 0,
                k = [];
            if (d(b))
                for (f = b.length; f > g; g++) j = c(b[g], g, e), null != j && k.push(j);
            else
                for (g in b) j = c(b[g],
                    g, e), null != j && k.push(j);
            return ta.apply([], k)
        },
        guid: 1,
        proxy: function (b, c) {
            var d, e, f;
            return "string" == typeof c && (f = b[c], c = b, b = f), v.isFunction(b) ? (d = va.call(arguments, 2), e = function () {
                return b.apply(c || this, d.concat(va.call(arguments)))
            }, e.guid = b.guid = b.guid || v.guid++, e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: R
    });
    "function" == typeof Symbol && (v.fn[Symbol.iterator] = pa[Symbol.iterator]);
    v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (b, c) {
        L["[object " +
            c + "]"] = c.toLowerCase()
    });
    var ma = function (b) {
        function c(b, d, e, f) {
            var j, g, k, h, l, n = d && d.ownerDocument,
                s = d ? d.nodeType : 9;
            if (e = e || [], "string" != typeof b || !b || 1 !== s && 9 !== s && 11 !== s) return e;
            if (!f && ((d ? d.ownerDocument || d : aa) !== W && F(d), d = d || W, X)) {
                if (11 !== s && (h = va.exec(b)))
                    if (j = h[1])
                        if (9 === s) {
                            if (!(g = d.getElementById(j))) return e;
                            if (g.id === j) return e.push(g), e
                        } else {
                            if (n && (g = n.getElementById(j)) && la(d, g) && g.id === j) return e.push(g), e
                        }
                    else {
                        if (h[2]) return ba.apply(e, d.getElementsByTagName(b)), e;
                        if ((j = h[3]) && w.getElementsByClassName &&
                            d.getElementsByClassName) return ba.apply(e, d.getElementsByClassName(j)), e
                    }
                if (w.qsa && !U[b + " "] && (!J || !J.test(b))) {
                    if (1 !== s) n = d, l = b;
                    else if ("object" !== d.nodeName.toLowerCase()) {
                        (k = d.getAttribute("id")) ? k = k.replace(ma, "\\$&") : d.setAttribute("id", k = H);
                        h = z(b);
                        j = h.length;
                        for (g = V.test(k) ? "#" + k : "[id='" + k + "']"; j--;) h[j] = g + " " + o(h[j]);
                        l = h.join(",");
                        n = Na.test(b) && m(d.parentNode) || d
                    }
                    if (l) try {
                        return ba.apply(e, n.querySelectorAll(l)), e
                    } catch (q) { } finally {
                        k === H && d.removeAttribute("id")
                    }
                }
            }
            return O(b.replace(ta, "$1"),
                d, e, f)
        }

        function d() {
            function b(d, e) {
                return c.push(d + " ") > A.cacheLength && delete b[c.shift()], b[d + " "] = e
            }
            var c = [];
            return b
        }

        function e(b) {
            return b[H] = !0, b
        }

        function f(b) {
            var c = W.createElement("div");
            try {
                return !!b(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        }

        function j(b, c) {
            for (var d = b.split("|"), e = d.length; e--;) A.attrHandle[d[e]] = c
        }

        function g(b, c) {
            var d = c && b,
                e = d && 1 === b.nodeType && 1 === c.nodeType && (~c.sourceIndex || K) - (~b.sourceIndex || K);
            if (e) return e;
            if (d)
                for (; d = d.nextSibling;)
                    if (d ===
                        c) return -1;
            return b ? 1 : -1
        }

        function k(b) {
            return function (c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        }

        function h(b) {
            return function (c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        }

        function l(b) {
            return e(function (c) {
                return c = +c, e(function (d, e) {
                    for (var f, j = b([], d.length, c), g = j.length; g--;) d[f = j[g]] && (d[f] = !(e[f] = d[f]))
                })
            })
        }

        function m(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        }

        function n() { }

        function o(b) {
            for (var c = 0, d = b.length, e = ""; d > c; c++) e +=
                b[c].value;
            return e
        }

        function s(b, c, d) {
            var e = c.dir,
                f = d && "parentNode" === e,
                j = Q++;
            return c.first ? function (c, d, j) {
                for (; c = c[e];)
                    if (1 === c.nodeType || f) return b(c, d, j)
            } : function (c, d, g) {
                var k, h, l, m = [N, j];
                if (g)
                    for (; c = c[e];) {
                        if ((1 === c.nodeType || f) && b(c, d, g)) return !0
                    } else
                    for (; c = c[e];)
                        if (1 === c.nodeType || f) {
                            if (l = c[H] || (c[H] = {}), h = l[c.uniqueID] || (l[c.uniqueID] = {}), (k = h[e]) && k[0] === N && k[1] === j) return m[2] = k[2];
                            if (h[e] = m, m[2] = b(c, d, g)) return !0
                        }
            }
        }

        function q(b) {
            return 1 < b.length ? function (c, d, e) {
                for (var f = b.length; f--;)
                    if (!b[f](c,
                            d, e)) return !1;
                return !0
            } : b[0]
        }

        function u(b, c, d, e, f) {
            for (var j, g = [], k = 0, h = b.length, l = null != c; h > k; k++) (j = b[k]) && (!d || d(j, e, f)) && (g.push(j), l && c.push(k));
            return g
        }

        function p(b, d, f, j, g, k) {
            return j && !j[H] && (j = p(j)), g && !g[H] && (g = p(g, k)), e(function (e, k, h, l) {
                var m, n, o = [],
                    s = [],
                    q = k.length,
                    p;
                if (!(p = e)) {
                    p = d || "*";
                    for (var t = h.nodeType ? [h] : h, r = [], L = 0, w = t.length; w > L; L++) c(p, t[L], r);
                    p = r
                }
                p = !b || !e && d ? p : u(p, o, b, h, l);
                t = f ? g || (e ? b : q || j) ? [] : k : p;
                if (f && f(p, t, h, l), j) {
                    m = u(t, s);
                    j(m, [], h, l);
                    for (h = m.length; h--;) (n = m[h]) && (t[s[h]] = !(p[s[h]] = n))
                }
                if (e) {
                    if (g || b) {
                        if (g) {
                            m = [];
                            for (h = t.length; h--;) (n = t[h]) && m.push(p[h] = n);
                            g(null, t = [], m, l)
                        }
                        for (h = t.length; h--;) (n = t[h]) && -1 < (m = g ? R(e, n) : o[h]) && (e[m] = !(k[m] = n))
                    }
                } else t = u(t === k ? t.splice(q, t.length) : t), g ? g(null, k, t, l) : ba.apply(k, t)
            })
        }

        function t(b) {
            var c, d, e, f = b.length,
                j = A.relative[b[0].type];
            d = j || A.relative[" "];
            for (var g = j ? 1 : 0, k = s(function (b) {
                    return b === c
            }, d, !0), h = s(function (b) {
                    return -1 < R(c, b)
            }, d, !0), l = [function (b, d, e) {
                    b = !j && (e || d !== C) || ((c = d).nodeType ? k(b, d, e) : h(b, d, e));
                    return c = null, b
            }]; f >
                g; g++)
                if (d = A.relative[b[g].type]) l = [s(q(l), d)];
                else {
                    if (d = A.filter[b[g].type].apply(null, b[g].matches), d[H]) {
                        for (e = ++g; f > e && !A.relative[b[e].type]; e++);
                        return p(1 < g && q(l), 1 < g && o(b.slice(0, g - 1).concat({
                            value: " " === b[g - 2].type ? "*" : ""
                        })).replace(ta, "$1"), d, e > g && t(b.slice(g, e)), f > e && t(b = b.slice(e)), f > e && o(b))
                    }
                    l.push(d)
                }
            return q(l)
        }

        function r(b, d) {
            var f = 0 < d.length,
                j = 0 < b.length,
                g = function (e, g, k, h, l) {
                    var m, n, o, s = 0,
                        q = "0",
                        p = e && [],
                        t = [],
                        r = C,
                        L = e || j && A.find.TAG("*", l),
                        w = N += null == r ? 1 : Math.random() || 0.1,
                        D = L.length;
                    for (l && (C = g === W || g || l) ; q !== D && null != (m = L[q]) ; q++) {
                        if (j && m) {
                            n = 0;
                            for (g || m.ownerDocument === W || (F(m), k = !X) ; o = b[n++];)
                                if (o(m, g || W, k)) {
                                    h.push(m);
                                    break
                                }
                            l && (N = w)
                        }
                        f && ((m = !o && m) && s--, e && p.push(m))
                    }
                    if (s += q, f && q !== s) {
                        for (n = 0; o = d[n++];) o(p, t, g, k);
                        if (e) {
                            if (0 < s)
                                for (; q--;) p[q] || t[q] || (t[q] = Ub.call(h));
                            t = u(t)
                        }
                        ba.apply(h, t);
                        l && !e && 0 < t.length && 1 < s + d.length && c.uniqueSort(h)
                    }
                    return l && (N = w, C = r), p
                };
            return f ? e(g) : g
        }
        var L, w, A, D, B, z, v, O, C, x, E, F, W, M, X, J, I, G, la, H = "sizzle" + 1 * new Date,
            aa = b.document,
            N = 0,
            Q = 0,
            Z = d(),
            fa = d(),
            U = d(),
            da = function (b, c) {
                return b === c && (E = !0), 0
            },
            K = -2147483648,
            Y = {}.hasOwnProperty,
            P = [],
            Ub = P.pop,
            ra = P.push,
            ba = P.push,
            ja = P.slice,
            R = function (b, c) {
                for (var d = 0, e = b.length; e > d; d++)
                    if (b[d] === c) return d;
                return -1
            },
            T = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
            ta = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            ka = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            Da = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            Vb = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            sa = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            V = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            pa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
                PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i")
            },
            Db = /^(?:input|select|textarea|button)$/i,
            oa = /^h\d$/i,
            rb = /^[^{]+\{\s*\[native \w/,
            va = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Na = /[+~]/,
            ma = /'|\\/g,
            La = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            ea = function (b, c, d) {
                b = "0x" + c - 65536;
                return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
            },
            Wa = function () {
                F()
            };
        try {
            ba.apply(P = ja.call(aa.childNodes), aa.childNodes), P[aa.childNodes.length].nodeType
        } catch (Fa) {
            ba = {
                apply: P.length ? function (b,
                    c) {
                    ra.apply(b, ja.call(c))
                } : function (b, c) {
                    for (var d = b.length, e = 0; b[d++] = c[e++];);
                    b.length = d - 1
                }
            }
        }
        w = c.support = {};
        B = c.isXML = function (b) {
            return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
        };
        F = c.setDocument = function (b) {
            var c, d, b = b ? b.ownerDocument || b : aa;
            return b !== W && 9 === b.nodeType && b.documentElement ? (W = b, M = W.documentElement, X = !B(W), (d = W.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", Wa, !1) : d.attachEvent && d.attachEvent("onunload", Wa)), w.attributes = f(function (b) {
                return b.className =
                    "i", !b.getAttribute("className")
            }), w.getElementsByTagName = f(function (b) {
                return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
            }), w.getElementsByClassName = rb.test(W.getElementsByClassName), w.getById = f(function (b) {
                return M.appendChild(b).id = H, !W.getElementsByName || !W.getElementsByName(H).length
            }), w.getById ? (A.find.ID = function (b, c) {
                if ("undefined" != typeof c.getElementById && X) {
                    var d = c.getElementById(b);
                    return d ? [d] : []
                }
            }, A.filter.ID = function (b) {
                var c = b.replace(La, ea);
                return function (b) {
                    return b.getAttribute("id") ===
                        c
                }
            }) : (delete A.find.ID, A.filter.ID = function (b) {
                var c = b.replace(La, ea);
                return function (b) {
                    return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
                }
            }), A.find.TAG = w.getElementsByTagName ? function (b, c) {
                return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : w.qsa ? c.querySelectorAll(b) : void 0
            } : function (b, c) {
                var d, e = [],
                    f = 0,
                    j = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (; d = j[f++];) 1 === d.nodeType && e.push(d);
                    return e
                }
                return j
            }, A.find.CLASS = w.getElementsByClassName &&
                function (b, c) {
                    return "undefined" != typeof c.getElementsByClassName && X ? c.getElementsByClassName(b) : void 0
                }, I = [], J = [], (w.qsa = rb.test(W.querySelectorAll)) && (f(function (b) {
                    M.appendChild(b).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    b.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    b.querySelectorAll("[selected]").length || J.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    b.querySelectorAll("[id~=" + H + "-]").length || J.push("~=");
                    b.querySelectorAll(":checked").length || J.push(":checked");
                    b.querySelectorAll("a#" + H + "+*").length || J.push(".#.+[+~]")
                }), f(function (b) {
                    var c = W.createElement("input");
                    c.setAttribute("type", "hidden");
                    b.appendChild(c).setAttribute("name", "D");
                    b.querySelectorAll("[name=d]").length && J.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    b.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled");
                    b.querySelectorAll("*,:x");
                    J.push(",.*:")
                })), (w.matchesSelector =
                    rb.test(G = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && f(function (b) {
                        w.disconnectedMatch = G.call(b, "div");
                        G.call(b, "[s!='']:x");
                        I.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                    }),
                J = J.length && RegExp(J.join("|")), I = I.length && RegExp(I.join("|")), c = rb.test(M.compareDocumentPosition), la = c || rb.test(M.contains) ? function (b, c) {
                    var d = 9 === b.nodeType ? b.documentElement : b,
                        e = c && c.parentNode;
                    return b === e || !(!e || 1 !== e.nodeType || !(d.contains ? d.contains(e) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(e)))
                } : function (b, c) {
                    if (c)
                        for (; c = c.parentNode;)
                            if (c === b) return !0;
                    return !1
                }, da = c ? function (b, c) {
                    if (b === c) return E = !0, 0;
                    var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
                    return d ?
                        d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !w.sortDetached && c.compareDocumentPosition(b) === d ? b === W || b.ownerDocument === aa && la(aa, b) ? -1 : c === W || c.ownerDocument === aa && la(aa, c) ? 1 : x ? R(x, b) - R(x, c) : 0 : 4 & d ? -1 : 1)
                } : function (b, c) {
                    if (b === c) return E = !0, 0;
                    var d, e = 0;
                    d = b.parentNode;
                    var f = c.parentNode,
                        j = [b],
                        k = [c];
                    if (!d || !f) return b === W ? -1 : c === W ? 1 : d ? -1 : f ? 1 : x ? R(x, b) - R(x, c) : 0;
                    if (d === f) return g(b, c);
                    for (d = b; d = d.parentNode;) j.unshift(d);
                    for (d = c; d = d.parentNode;) k.unshift(d);
                    for (; j[e] ===
                        k[e];) e++;
                    return e ? g(j[e], k[e]) : j[e] === aa ? -1 : k[e] === aa ? 1 : 0
                }, W) : W
        };
        c.matches = function (b, d) {
            return c(b, null, null, d)
        };
        c.matchesSelector = function (b, d) {
            if ((b.ownerDocument || b) !== W && F(b), d = d.replace(Vb, "='$1']"), w.matchesSelector && X && !U[d + " "] && (!I || !I.test(d)) && (!J || !J.test(d))) try {
                var e = G.call(b, d);
                if (e || w.disconnectedMatch || b.document && 11 !== b.document.nodeType) return e
            } catch (f) { }
            return 0 < c(d, W, null, [b]).length
        };
        c.contains = function (b, c) {
            return (b.ownerDocument || b) !== W && F(b), la(b, c)
        };
        c.attr = function (b,
            c) {
            (b.ownerDocument || b) !== W && F(b);
            var d = A.attrHandle[c.toLowerCase()],
                d = d && Y.call(A.attrHandle, c.toLowerCase()) ? d(b, c, !X) : void 0;
            return void 0 !== d ? d : w.attributes || !X ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
        };
        c.error = function (b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        };
        c.uniqueSort = function (b) {
            var c, d = [],
                e = 0,
                f = 0;
            if (E = !w.detectDuplicates, x = !w.sortStable && b.slice(0), b.sort(da), E) {
                for (; c = b[f++];) c === b[f] && (e = d.push(f));
                for (; e--;) b.splice(d[e], 1)
            }
            return x =
                null, b
        };
        D = c.getText = function (b) {
            var c, d = "",
                e = 0;
            if (c = b.nodeType)
                if (1 === c || 9 === c || 11 === c) {
                    if ("string" == typeof b.textContent) return b.textContent;
                    for (b = b.firstChild; b; b = b.nextSibling) d += D(b)
                } else {
                    if (3 === c || 4 === c) return b.nodeValue
                }
            else
                for (; c = b[e++];) d += D(c);
            return d
        };
        A = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: pa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (b) {
                    return b[1] =
                        b[1].replace(La, ea), b[3] = (b[3] || b[4] || b[5] || "").replace(La, ea), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
                },
                CHILD: function (b) {
                    return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || c.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && c.error(b[0]), b
                },
                PSEUDO: function (b) {
                    var c, d = !b[6] && b[2];
                    return pa.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && sa.test(d) && (c = z(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0,
                        c), b[2] = d.slice(0, c)), b.slice(0, 3))
                }
            },
            filter: {
                TAG: function (b) {
                    var c = b.replace(La, ea).toLowerCase();
                    return "*" === b ? function () {
                        return !0
                    } : function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === c
                    }
                },
                CLASS: function (b) {
                    var c = Z[b + " "];
                    return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && Z(b, function (b) {
                        return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                    })
                },
                ATTR: function (b, d, e) {
                    return function (f) {
                        f = c.attr(f, b);
                        return null == f ? "!=" === d : d ? (f += "", "=" === d ? f === e : "!=" === d ? f !== e : "^=" === d ? e && 0 === f.indexOf(e) : "*=" === d ? e && -1 < f.indexOf(e) : "$=" === d ? e && f.slice(-e.length) === e : "~=" === d ? -1 < (" " + f.replace(T, " ") + " ").indexOf(e) : "|=" === d ? f === e || f.slice(0, e.length + 1) === e + "-" : !1) : !0
                    }
                },
                CHILD: function (b, c, d, e, f) {
                    var j = "nth" !== b.slice(0, 3),
                        g = "last" !== b.slice(-4),
                        k = "of-type" === c;
                    return 1 === e && 0 === f ? function (b) {
                        return !!b.parentNode
                    } : function (c, d, h) {
                        var l, m, n, o, s, q, d = j !== g ? "nextSibling" : "previousSibling",
                            u = c.parentNode,
                            p = k && c.nodeName.toLowerCase(),
                            h = !h && !k,
                            t = !1;
                        if (u) {
                            if (j) {
                                for (; d;) {
                                    for (o = c; o = o[d];)
                                        if (k ? o.nodeName.toLowerCase() === p : 1 === o.nodeType) return !1;
                                    q = d = "only" === b && !q && "nextSibling"
                                }
                                return !0
                            }
                            if (q = [g ? u.firstChild : u.lastChild], g && h) {
                                o = u;
                                n = o[H] || (o[H] = {});
                                m = n[o.uniqueID] || (n[o.uniqueID] = {});
                                l = m[b] || [];
                                t = (s = l[0] === N && l[1]) && l[2];
                                for (o = s && u.childNodes[s]; o = ++s && o && o[d] || (t = s = 0) || q.pop() ;)
                                    if (1 === o.nodeType && ++t && o === c) {
                                        m[b] = [N, s, t];
                                        break
                                    }
                            } else if (h && (o = c, n = o[H] || (o[H] = {}), m = n[o.uniqueID] || (n[o.uniqueID] = {}), l = m[b] || [], s = l[0] === N && l[1], t = s), !1 === t)
                                for (;
                                    (o = ++s && o && o[d] || (t = s = 0) || q.pop()) && (!(k ? o.nodeName.toLowerCase() === p : 1 === o.nodeType) || !++t || !(h && (n = o[H] || (o[H] = {}), m = n[o.uniqueID] || (n[o.uniqueID] = {}), m[b] = [N, t]), o === c)) ;);
                            return t -= f, t === e || 0 === t % e && 0 <= t / e
                        }
                    }
                },
                PSEUDO: function (b, d) {
                    var f, j = A.pseudos[b] || A.setFilters[b.toLowerCase()] || c.error("unsupported pseudo: " + b);
                    return j[H] ? j(d) : 1 < j.length ? (f = [b, b, "", d], A.setFilters.hasOwnProperty(b.toLowerCase()) ? e(function (b, c) {
                        for (var e, f = j(b, d), g = f.length; g--;) e = R(b, f[g]), b[e] = !(c[e] = f[g])
                    }) :
                        function (b) {
                            return j(b, 0, f)
                        }) : j
                }
            },
            pseudos: {
                not: e(function (b) {
                    var c = [],
                        d = [],
                        f = v(b.replace(ta, "$1"));
                    return f[H] ? e(function (b, c, d, e) {
                        for (var j, d = f(b, null, e, []), e = b.length; e--;) (j = d[e]) && (b[e] = !(c[e] = j))
                    }) : function (b, e, j) {
                        return c[0] = b, f(c, null, j, d), c[0] = null, !d.pop()
                    }
                }),
                has: e(function (b) {
                    return function (d) {
                        return 0 < c(b, d).length
                    }
                }),
                contains: e(function (b) {
                    return b = b.replace(La, ea),
                        function (c) {
                            return -1 < (c.textContent || c.innerText || D(c)).indexOf(b)
                        }
                }),
                lang: e(function (b) {
                    return V.test(b || "") || c.error("unsupported lang: " +
                            b), b = b.replace(La, ea).toLowerCase(),
                        function (c) {
                            var d;
                            do
                                if (d = X ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
                            return !1
                        }
                }),
                target: function (c) {
                    var d = b.location && b.location.hash;
                    return d && d.slice(1) === c.id
                },
                root: function (b) {
                    return b === M
                },
                focus: function (b) {
                    return b === W.activeElement && (!W.hasFocus || W.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
                },
                enabled: function (b) {
                    return !1 === b.disabled
                },
                disabled: function (b) {
                    return !0 ===
                        b.disabled
                },
                checked: function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && !!b.checked || "option" === c && !!b.selected
                },
                selected: function (b) {
                    return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
                },
                empty: function (b) {
                    for (b = b.firstChild; b; b = b.nextSibling)
                        if (6 > b.nodeType) return !1;
                    return !0
                },
                parent: function (b) {
                    return !A.pseudos.empty(b)
                },
                header: function (b) {
                    return oa.test(b.nodeName)
                },
                input: function (b) {
                    return Db.test(b.nodeName)
                },
                button: function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" ===
                        c && "button" === b.type || "button" === c
                },
                text: function (b) {
                    var c;
                    return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (b, c) {
                    return [c - 1]
                }),
                eq: l(function (b, c, d) {
                    return [0 > d ? d + c : d]
                }),
                even: l(function (b, c) {
                    for (var d = 0; c > d; d += 2) b.push(d);
                    return b
                }),
                odd: l(function (b, c) {
                    for (var d = 1; c > d; d += 2) b.push(d);
                    return b
                }),
                lt: l(function (b, c, d) {
                    for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                    return b
                }),
                gt: l(function (b, c, d) {
                    for (d =
                        0 > d ? d + c : d; ++d < c;) b.push(d);
                    return b
                })
            }
        };
        A.pseudos.nth = A.pseudos.eq;
        for (L in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) A.pseudos[L] = k(L);
        for (L in {
            submit: !0,
            reset: !0
        }) A.pseudos[L] = h(L);
        n.prototype = A.filters = A.pseudos;
        A.setFilters = new n;
        z = c.tokenize = function (b, d) {
            var e, f, j, g, k, h, l;
            if (k = fa[b + " "]) return d ? 0 : k.slice(0);
            k = b;
            h = [];
            for (l = A.preFilter; k;) {
                (!e || (f = ka.exec(k))) && (f && (k = k.slice(f[0].length) || k), h.push(j = []));
                e = !1;
                (f = Da.exec(k)) && (e = f.shift(), j.push({
                    value: e,
                    type: f[0].replace(ta, " ")
                }),
                    k = k.slice(e.length));
                for (g in A.filter) !(f = pa[g].exec(k)) || l[g] && !(f = l[g](f)) || (e = f.shift(), j.push({
                    value: e,
                    type: g,
                    matches: f
                }), k = k.slice(e.length));
                if (!e) break
            }
            return d ? k.length : k ? c.error(b) : fa(b, h).slice(0)
        };
        return v = c.compile = function (b, c) {
            var d, e = [],
                f = [],
                j = U[b + " "];
            if (!j) {
                c || (c = z(b));
                for (d = c.length; d--;) j = t(c[d]), j[H] ? e.push(j) : f.push(j);
                j = U(b, r(f, e));
                j.selector = b
            }
            return j
        }, O = c.select = function (b, c, d, e) {
            var f, j, g, k, h, l = "function" == typeof b && b,
                n = !e && z(b = l.selector || b);
            if (d = d || [], 1 === n.length) {
                if (j =
                    n[0] = n[0].slice(0), 2 < j.length && "ID" === (g = j[0]).type && w.getById && 9 === c.nodeType && X && A.relative[j[1].type]) {
                    if (c = (A.find.ID(g.matches[0].replace(La, ea), c) || [])[0], !c) return d;
                    l && (c = c.parentNode);
                    b = b.slice(j.shift().value.length)
                }
                for (f = pa.needsContext.test(b) ? 0 : j.length; f-- && !(g = j[f], A.relative[k = g.type]) ;)
                    if ((h = A.find[k]) && (e = h(g.matches[0].replace(La, ea), Na.test(j[0].type) && m(c.parentNode) || c))) {
                        if (j.splice(f, 1), b = e.length && o(j), !b) return ba.apply(d, e), d;
                        break
                    }
            }
            return (l || v(b, n))(e, c, !X, d, !c || Na.test(b) &&
                m(c.parentNode) || c), d
        }, w.sortStable = H.split("").sort(da).join("") === H, w.detectDuplicates = !!E, F(), w.sortDetached = f(function (b) {
            return 1 & b.compareDocumentPosition(W.createElement("div"))
        }), f(function (b) {
            return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
        }) || j("type|href|height|width", function (b, c, d) {
            return d ? void 0 : b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        }), w.attributes && f(function (b) {
            return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
        }) ||
            j("value", function (b, c, d) {
                return d || "input" !== b.nodeName.toLowerCase() ? void 0 : b.defaultValue
            }), f(function (b) {
                return null == b.getAttribute("disabled")
            }) || j("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (b, c, d) {
                var e;
                return d ? void 0 : !0 === b[c] ? c.toLowerCase() : (e = b.getAttributeNode(c)) && e.specified ? e.value : null
            }), c
    }(b);
    v.find = ma;
    v.expr = ma.selectors;
    v.expr[":"] = v.expr.pseudos;
    v.uniqueSort = v.unique = ma.uniqueSort;
    v.text =
        ma.getText;
    v.isXMLDoc = ma.isXML;
    v.contains = ma.contains;
    var Ca = function (b, c, d) {
        for (var e = [], f = void 0 !== d;
            (b = b[c]) && 9 !== b.nodeType;)
            if (1 === b.nodeType) {
                if (f && v(b).is(d)) break;
                e.push(b)
            }
        return e
    },
        ub = function (b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        },
        Va = v.expr.match.needsContext,
        nb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        xb = /^.[^:#\[\.,]*$/;
    v.filter = function (b, c, d) {
        var e = c[0];
        return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === e.nodeType ? v.find.matchesSelector(e, b) ? [e] : [] : v.find.matches(b,
            v.grep(c, function (b) {
                return 1 === b.nodeType
            }))
    };
    v.fn.extend({
        find: function (b) {
            var c, d = [],
                e = this,
                f = e.length;
            if ("string" != typeof b) return this.pushStack(v(b).filter(function () {
                for (c = 0; f > c; c++)
                    if (v.contains(e[c], this)) return !0
            }));
            for (c = 0; f > c; c++) v.find(b, e[c], d);
            return d = this.pushStack(1 < f ? v.unique(d) : d), d.selector = this.selector ? this.selector + " " + b : b, d
        },
        filter: function (b) {
            return this.pushStack(e(this, b || [], !1))
        },
        not: function (b) {
            return this.pushStack(e(this, b || [], !0))
        },
        is: function (b) {
            return !!e(this, "string" ==
                typeof b && Va.test(b) ? v(b) : b || [], !1).length
        }
    });
    var Fa, Sa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (v.fn.init = function (b, c, d) {
        var e, f;
        if (!b) return this;
        if (d = d || Fa, "string" == typeof b) {
            if (e = "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? [null, b, null] : Sa.exec(b), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
            if (e[1]) {
                if (c = c instanceof v ? c[0] : c, v.merge(this, v.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : V, !0)), nb.test(e[1]) && v.isPlainObject(c))
                    for (e in c) v.isFunction(this[e]) ?
                        this[e](c[e]) : this.attr(e, c[e]);
                return this
            }
            if (f = V.getElementById(e[2]), f && f.parentNode) {
                if (f.id !== e[2]) return Fa.find(b);
                this.length = 1;
                this[0] = f
            }
            return this.context = V, this.selector = b, this
        }
        return b.nodeType ? (this.context = this[0] = b, this.length = 1, this) : v.isFunction(b) ? "undefined" != typeof d.ready ? d.ready(b) : b(v) : (void 0 !== b.selector && (this.selector = b.selector, this.context = b.context), v.makeArray(b, this))
    }).prototype = v.fn;
    Fa = v(V);
    var bb = /^(?:parents|prev(?:Until|All))/,
        Ta = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        has: function (b) {
            var c, d = v(b, this),
                e = d.length;
            return this.filter(function () {
                for (c = 0; e > c; c++)
                    if (v.contains(this, d[c])) return !0
            })
        },
        closest: function (b, c) {
            for (var d, e = 0, f = this.length, j = [], g = Va.test(b) || "string" != typeof b ? v(b, c || this.context) : 0; f > e; e++)
                for (d = this[e]; d && d !== c; d = d.parentNode)
                    if (11 > d.nodeType && (g ? -1 < g.index(d) : 1 === d.nodeType && v.find.matchesSelector(d, b))) {
                        j.push(d);
                        break
                    }
            return this.pushStack(1 < j.length ? v.uniqueSort(j) : j)
        },
        index: function (b) {
            return b ? "string" == typeof b ?
                v.inArray(this[0], v(b)) : v.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (b, c) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(b, c))))
        },
        addBack: function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    v.each({
        parent: function (b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function (b) {
            return Ca(b, "parentNode")
        },
        parentsUntil: function (b, c, d) {
            return Ca(b, "parentNode", d)
        },
        next: function (b) {
            return f(b, "nextSibling")
        },
        prev: function (b) {
            return f(b, "previousSibling")
        },
        nextAll: function (b) {
            return Ca(b, "nextSibling")
        },
        prevAll: function (b) {
            return Ca(b, "previousSibling")
        },
        nextUntil: function (b, c, d) {
            return Ca(b, "nextSibling", d)
        },
        prevUntil: function (b, c, d) {
            return Ca(b, "previousSibling", d)
        },
        siblings: function (b) {
            return ub((b.parentNode || {}).firstChild, b)
        },
        children: function (b) {
            return ub(b.firstChild)
        },
        contents: function (b) {
            return v.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : v.merge([], b.childNodes)
        }
    }, function (b,
        c) {
        v.fn[b] = function (d, e) {
            var f = v.map(this, c, d);
            return "Until" !== b.slice(-5) && (e = d), e && "string" == typeof e && (f = v.filter(e, f)), 1 < this.length && (Ta[b] || (f = v.uniqueSort(f)), bb.test(b) && (f = f.reverse())), this.pushStack(f)
        }
    });
    var Aa = /\S+/g;
    v.Callbacks = function (b) {
        var b = "string" == typeof b ? g(b) : v.extend({}, b),
            c, d, e, f, j = [],
            k = [],
            h = -1,
            l = function () {
                f = b.once;
                for (e = c = !0; k.length; h = -1)
                    for (d = k.shift() ; ++h < j.length;) !1 === j[h].apply(d[0], d[1]) && b.stopOnFalse && (h = j.length, d = !1);
                b.memory || (d = !1);
                c = !1;
                f && (j = d ? [] : "")
            },
            m = {
                add: function () {
                    return j &&
                        (d && !c && (h = j.length - 1, k.push(d)), function jc(c) {
                            v.each(c, function (c, d) {
                                v.isFunction(d) ? b.unique && m.has(d) || j.push(d) : d && d.length && "string" !== v.type(d) && jc(d)
                            })
                        }(arguments), d && !c && l()), this
                },
                remove: function () {
                    return v.each(arguments, function (b, c) {
                        for (var d; -1 < (d = v.inArray(c, j, d)) ;) j.splice(d, 1), h >= d && h--
                    }), this
                },
                has: function (b) {
                    return b ? -1 < v.inArray(b, j) : 0 < j.length
                },
                empty: function () {
                    return j && (j = []), this
                },
                disable: function () {
                    return f = k = [], j = d = "", this
                },
                disabled: function () {
                    return !j
                },
                lock: function () {
                    return f = !0, d || m.disable(), this
                },
                locked: function () {
                    return !!f
                },
                fireWith: function (b, d) {
                    return f || (d = d || [], d = [b, d.slice ? d.slice() : d], k.push(d), c || l()), this
                },
                fire: function () {
                    return m.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!e
                }
            };
        return m
    };
    v.extend({
        Deferred: function (b) {
            var c = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
            ],
                d = "pending",
                e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments),
                            this
                    },
                    then: function () {
                        var b = arguments;
                        return v.Deferred(function (d) {
                            v.each(c, function (c, j) {
                                var g = v.isFunction(b[c]) && b[c];
                                f[j[1]](function () {
                                    var b = g && g.apply(this, arguments);
                                    b && v.isFunction(b.promise) ? b.promise().progress(d.notify).done(d.resolve).fail(d.reject) : d[j[0] + "With"](this === e ? d.promise() : this, g ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    promise: function (b) {
                        return null != b ? v.extend(b, e) : e
                    }
                },
                f = {};
            return e.pipe = e.then, v.each(c, function (b, j) {
                var g = j[2],
                    k = j[3];
                e[j[1]] = g.add;
                k && g.add(function () {
                    d =
                        k
                }, c[1 ^ b][2].disable, c[2][2].lock);
                f[j[0]] = function () {
                    return f[j[0] + "With"](this === f ? e : this, arguments), this
                };
                f[j[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function (b) {
            var c = 0,
                d = va.call(arguments),
                e = d.length,
                f = 1 !== e || b && v.isFunction(b.promise) ? e : 0,
                j = 1 === f ? b : v.Deferred(),
                g = function (b, c, d) {
                    return function (e) {
                        c[b] = this;
                        d[b] = 1 < arguments.length ? va.call(arguments) : e;
                        d === k ? j.notifyWith(c, d) : --f || j.resolveWith(c, d)
                    }
                },
                k, h, l;
            if (1 < e) {
                k = Array(e);
                h = Array(e);
                for (l = Array(e) ; e > c; c++) d[c] && v.isFunction(d[c].promise) ?
                    d[c].promise().progress(g(c, h, k)).done(g(c, l, d)).fail(j.reject) : --f
            }
            return f || j.resolveWith(l, d), j.promise()
        }
    });
    var xa;
    v.fn.ready = function (b) {
        return v.ready.promise().done(b), this
    };
    v.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (b) {
            b ? v.readyWait++ : v.ready(!0)
        },
        ready: function (b) {
            (!0 === b ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== b && 0 < --v.readyWait || (xa.resolveWith(V, [v]), v.fn.triggerHandler && (v(V).triggerHandler("ready"), v(V).off("ready"))))
        }
    });
    v.ready.promise = function (c) {
        if (!xa)
            if (xa = v.Deferred(),
                "complete" === V.readyState || "loading" !== V.readyState && !V.documentElement.doScroll) b.setTimeout(v.ready);
            else if (V.addEventListener) V.addEventListener("DOMContentLoaded", j), b.addEventListener("load", j);
            else {
                V.attachEvent("onreadystatechange", j);
                b.attachEvent("onload", j);
                var d = !1;
                try {
                    d = null == b.frameElement && V.documentElement
                } catch (e) { }
                d && d.doScroll && function Lb() {
                    if (!v.isReady) {
                        try {
                            d.doScroll("left")
                        } catch (c) {
                            return b.setTimeout(Lb, 50)
                        }
                        h();
                        v.ready()
                    }
                }()
            }
        return xa.promise(c)
    };
    v.ready.promise();
    for (var Hb in v(R)) break;
    R.ownFirst = "0" === Hb;
    R.inlineBlockNeedsLayout = !1;
    v(function () {
        var b, c, d, e;
        (d = V.getElementsByTagName("body")[0]) && d.style && (c = V.createElement("div"), e = V.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", d.appendChild(e).appendChild(c), "undefined" != typeof c.style.zoom && (c.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", R.inlineBlockNeedsLayout = b = 3 === c.offsetWidth, b && (d.style.zoom = 1)), d.removeChild(e))
    });
    (function () {
        var b =
            V.createElement("div");
        R.deleteExpando = !0;
        try {
            delete b.test
        } catch (c) {
            R.deleteExpando = !1
        }
    })();
    var Ia = function (b) {
        var c = v.noData[(b.nodeName + " ").toLowerCase()],
            d = +b.nodeType || 1;
        return 1 !== d && 9 !== d ? !1 : !c || !0 !== c && b.getAttribute("classid") === c
    },
        qb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ma = /([A-Z])/g;
    v.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (b) {
            return b = b.nodeType ? v.cache[b[v.expando]] : b[v.expando], !!b && !l(b)
        },
        data: function (b,
            c, d) {
            return m(b, c, d)
        },
        removeData: function (b, c) {
            return n(b, c)
        },
        _data: function (b, c, d) {
            return m(b, c, d, !0)
        },
        _removeData: function (b, c) {
            return n(b, c, !0)
        }
    });
    v.fn.extend({
        data: function (b, c) {
            var d, e, f, j = this[0],
                g = j && j.attributes;
            if (void 0 === b) {
                if (this.length && (f = v.data(j), 1 === j.nodeType && !v._data(j, "parsedAttrs"))) {
                    for (d = g.length; d--;) g[d] && (e = g[d].name, 0 === e.indexOf("data-") && (e = v.camelCase(e.slice(5)), k(j, e, f[e])));
                    v._data(j, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof b ? this.each(function () {
                v.data(this,
                    b)
            }) : 1 < arguments.length ? this.each(function () {
                v.data(this, b, c)
            }) : j ? k(j, b, v.data(j, b)) : void 0
        },
        removeData: function (b) {
            return this.each(function () {
                v.removeData(this, b)
            })
        }
    });
    v.extend({
        queue: function (b, c, d) {
            var e;
            return b ? (c = (c || "fx") + "queue", e = v._data(b, c), d && (!e || v.isArray(d) ? e = v._data(b, c, v.makeArray(d)) : e.push(d)), e || []) : void 0
        },
        dequeue: function (b, c) {
            var c = c || "fx",
                d = v.queue(b, c),
                e = d.length,
                f = d.shift(),
                j = v._queueHooks(b, c),
                g = function () {
                    v.dequeue(b, c)
                };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" ===
                c && d.unshift("inprogress"), delete j.stop, f.call(b, g, j));
            !e && j && j.empty.fire()
        },
        _queueHooks: function (b, c) {
            var d = c + "queueHooks";
            return v._data(b, d) || v._data(b, d, {
                empty: v.Callbacks("once memory").add(function () {
                    v._removeData(b, c + "queue");
                    v._removeData(b, d)
                })
            })
        }
    });
    v.fn.extend({
        queue: function (b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? v.queue(this[0], b) : void 0 === c ? this : this.each(function () {
                var d = v.queue(this, b, c);
                v._queueHooks(this, b);
                "fx" === b && "inprogress" !== d[0] && v.dequeue(this,
                    b)
            })
        },
        dequeue: function (b) {
            return this.each(function () {
                v.dequeue(this, b)
            })
        },
        clearQueue: function (b) {
            return this.queue(b || "fx", [])
        },
        promise: function (b, c) {
            var d, e = 1,
                f = v.Deferred(),
                j = this,
                g = this.length,
                k = function () {
                    --e || f.resolveWith(j, [j])
                };
            "string" != typeof b && (c = b, b = void 0);
            for (b = b || "fx"; g--;) (d = v._data(j[g], b + "queueHooks")) && d.empty && (e++, d.empty.add(k));
            return k(), f.promise(c)
        }
    });
    (function () {
        var b;
        R.shrinkWrapBlocks = function () {
            if (null != b) return b;
            b = !1;
            var c, d, e;
            return d = V.getElementsByTagName("body")[0],
                d && d.style ? (c = V.createElement("div"), e = V.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", d.appendChild(e).appendChild(c), "undefined" != typeof c.style.zoom && (c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", c.appendChild(V.createElement("div")).style.width = "5px", b = 3 !== c.offsetWidth), d.removeChild(e), b) : void 0
        }
    })();
    var cb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        gb = RegExp("^(?:([+-])=|)(" + cb + ")([a-z%]*)$", "i"),
        Qa = ["Top", "Right", "Bottom", "Left"],
        qa = function (b, c) {
            return b = c || b, "none" === v.css(b, "display") || !v.contains(b.ownerDocument, b)
        },
        za = function (b, c, d, e, f, j, g) {
            var k = 0,
                h = b.length,
                l = null == d;
            if ("object" === v.type(d))
                for (k in f = !0, d) za(b, c, k, d[k], !0, j, g);
            else if (void 0 !== e && (f = !0, v.isFunction(e) || (g = !0), l && (g ? (c.call(b, e), c = null) : (l = c, c = function (b, c, d) {
                    return l.call(v(b), d)
            })), c))
                for (; h > k; k++) c(b[k], d, g ? e : e.call(b[k], k, c(b[k], d)));
            return f ? b : l ? c.call(b) : h ? c(b[0],
                d) : j
        },
        ua = /^(?:checkbox|radio)$/i,
        hb = /<([\w:-]+)/,
        Ka = /^$|\/(?:java|ecma)script/i,
        Pa = /^\s+/,
        yb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function () {
        var b = V.createElement("div"),
            c = V.createDocumentFragment(),
            d = V.createElement("input");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        R.leadingWhitespace = 3 === b.firstChild.nodeType;
        R.tbody = !b.getElementsByTagName("tbody").length;
        R.htmlSerialize = !!b.getElementsByTagName("link").length;
        R.html5Clone = "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML;
        d.type = "checkbox";
        d.checked = !0;
        c.appendChild(d);
        R.appendChecked = d.checked;
        b.innerHTML = "<textarea>x</textarea>";
        R.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
        c.appendChild(b);
        d = V.createElement("input");
        d.setAttribute("type", "radio");
        d.setAttribute("checked", "checked");
        d.setAttribute("name", "t");
        b.appendChild(d);
        R.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        R.noCloneEvent = !!b.addEventListener;
        b[v.expando] = 1;
        R.attributes = !b.getAttribute(v.expando)
    }();
    var na = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: R.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    na.optgroup = na.option;
    na.tbody = na.tfoot = na.colgroup = na.caption = na.thead;
    na.th = na.td;
    var Fb = /<|&#?\w+;/,
        Ja = /<tbody/i;
    ! function () {
        var c, d, e = V.createElement("div");
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d = "on" + c, (R[c] = d in b) || (e.setAttribute(d, "t"), R[c] = !1 === e.attributes[d].expando)
    }();
    var db = /^(?:input|select|textarea)$/i,
        Ib = /^key/,
        Ab = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vb = /^(?:focusinfocus|focusoutblur)$/,
        ob = /^([^.]*)(?:\.(.+)|)/;
    v.event = {
        global: {},
        add: function (b, c, d, e, f) {
            var j, g, k, h, l, m, n, o, s, q;
            if (k = v._data(b)) {
                d.handler && (h = d, d = h.handler, f = h.selector);
                d.guid || (d.guid = v.guid++);
                (g = k.events) || (g = k.events = {});
                (m = k.handle) || (m = k.handle = function (b) {
                    return "undefined" == typeof v || b && v.event.triggered === b.type ? void 0 : v.event.dispatch.apply(m.elem, arguments)
                }, m.elem = b);
                c = (c || "").match(Aa) || [""];
                for (k = c.length; k--;) j = ob.exec(c[k]) || [], s = q = j[1], j = (j[2] || "").split(".").sort(), s && (l = v.event.special[s] || {}, s = (f ? l.delegateType : l.bindType) ||
                    s, l = v.event.special[s] || {}, n = v.extend({
                        type: s,
                        origType: q,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && v.expr.match.needsContext.test(f),
                        namespace: j.join(".")
                    }, h), (o = g[s]) || (o = g[s] = [], o.delegateCount = 0, l.setup && !1 !== l.setup.call(b, e, j, m) || (b.addEventListener ? b.addEventListener(s, m, !1) : b.attachEvent && b.attachEvent("on" + s, m))), l.add && (l.add.call(b, n), n.handler.guid || (n.handler.guid = d.guid)), f ? o.splice(o.delegateCount++, 0, n) : o.push(n), v.event.global[s] = !0);
                b = null
            }
        },
        remove: function (b, c, d, e,
            f) {
            var j, g, k, h, l, m, n, o, s, q, u, t = v.hasData(b) && v._data(b);
            if (t && (m = t.events)) {
                c = (c || "").match(Aa) || [""];
                for (l = c.length; l--;)
                    if (k = ob.exec(c[l]) || [], s = u = k[1], q = (k[2] || "").split(".").sort(), s) {
                        n = v.event.special[s] || {};
                        s = (e ? n.delegateType : n.bindType) || s;
                        o = m[s] || [];
                        k = k[2] && RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (h = j = o.length; j--;) g = o[j], !f && u !== g.origType || d && d.guid !== g.guid || k && !k.test(g.namespace) || e && e !== g.selector && ("**" !== e || !g.selector) || (o.splice(j, 1), g.selector && o.delegateCount--,
                            n.remove && n.remove.call(b, g));
                        h && !o.length && (n.teardown && !1 !== n.teardown.call(b, q, t.handle) || v.removeEvent(b, s, t.handle), delete m[s])
                    } else
                        for (s in m) v.event.remove(b, s + c[l], d, e, !0);
                v.isEmptyObject(m) && (delete t.handle, v._removeData(b, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var j, g, k, h, l, m, n = [e || V],
                o = fa.call(c, "type") ? c.type : c;
            m = fa.call(c, "namespace") ? c.namespace.split(".") : [];
            if (k = j = e = e || V, 3 !== e.nodeType && 8 !== e.nodeType && !vb.test(o + v.event.triggered) && (-1 < o.indexOf(".") && (m = o.split("."), o = m.shift(),
                    m.sort()), g = 0 > o.indexOf(":") && "on" + o, c = c[v.expando] ? c : new v.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = m.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = e), d = null == d ? [c] : v.makeArray(d, [c]), l = v.event.special[o] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, d))) {
                if (!f && !l.noBubble && !v.isWindow(e)) {
                    h = l.delegateType || o;
                    for (vb.test(h + o) || (k = k.parentNode) ; k; k = k.parentNode) n.push(k), j = k;
                    j === (e.ownerDocument || V) &&
                        n.push(j.defaultView || j.parentWindow || b)
                }
                for (m = 0;
                    (k = n[m++]) && !c.isPropagationStopped() ;) c.type = 1 < m ? h : l.bindType || o, (j = (v._data(k, "events") || {})[c.type] && v._data(k, "handle")) && j.apply(k, d), (j = g && k[g]) && j.apply && Ia(k) && (c.result = j.apply(k, d), !1 === c.result && c.preventDefault());
                if (c.type = o, !f && !c.isDefaultPrevented() && (!l._default || !1 === l._default.apply(n.pop(), d)) && Ia(e) && g && e[o] && !v.isWindow(e)) {
                    (j = e[g]) && (e[g] = null);
                    v.event.triggered = o;
                    try {
                        e[o]()
                    } catch (s) { }
                    v.event.triggered = void 0;
                    j && (e[g] = j)
                }
                return c.result
            }
        },
        dispatch: function (b) {
            var b = v.event.fix(b),
                c, d, e, f, j, g = [],
                k = va.call(arguments);
            c = (v._data(this, "events") || {})[b.type] || [];
            var h = v.event.special[b.type] || {};
            if (k[0] = b, b.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, b)) {
                g = v.event.handlers.call(this, b, c);
                for (c = 0;
                    (f = g[c++]) && !b.isPropagationStopped() ;) {
                    b.currentTarget = f.elem;
                    for (d = 0;
                        (j = f.handlers[d++]) && !b.isImmediatePropagationStopped() ;) (!b.rnamespace || b.rnamespace.test(j.namespace)) && (b.handleObj = j, b.data = j.data, e = ((v.event.special[j.origType] || {}).handle || j.handler).apply(f.elem, k), void 0 !== e && !1 === (b.result = e) && (b.preventDefault(), b.stopPropagation()))
                }
                return h.postDispatch && h.postDispatch.call(this, b), b.result
            }
        },
        handlers: function (b, c) {
            var d, e, f, j, g = [],
                k = c.delegateCount,
                h = b.target;
            if (k && h.nodeType && ("click" !== b.type || isNaN(b.button) || 1 > b.button))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (!0 !== h.disabled || "click" !== b.type)) {
                        e = [];
                        for (d = 0; k > d; d++) j = c[d], f = j.selector + " ", void 0 === e[f] && (e[f] = j.needsContext ? -1 < v(f, this).index(h) :
                            v.find(f, this, null, [h]).length), e[f] && e.push(j);
                        e.length && g.push({
                            elem: h,
                            handlers: e
                        })
                    }
            return k < c.length && g.push({
                elem: this,
                handlers: c.slice(k)
            }), g
        },
        fix: function (b) {
            if (b[v.expando]) return b;
            var c, d, e;
            c = b.type;
            var f = b,
                j = this.fixHooks[c];
            j || (this.fixHooks[c] = j = Ab.test(c) ? this.mouseHooks : Ib.test(c) ? this.keyHooks : {});
            e = j.props ? this.props.concat(j.props) : this.props;
            b = new v.Event(f);
            for (c = e.length; c--;) d = e[c], b[d] = f[d];
            return b.target || (b.target = f.srcElement || V), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, j.filter ? j.filter(b, f) : b
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b, c) {
                var d,
                    e, f, j = c.button,
                    g = c.fromElement;
                return null == b.pageX && null != c.clientX && (e = b.target.ownerDocument || V, f = e.documentElement, d = e.body, b.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), b.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !b.relatedTarget && g && (b.relatedTarget = g === b.target ? c.toElement : g), b.which || void 0 === j || (b.which = 1 & j ? 1 : 2 & j ? 3 : 4 & j ? 2 : 0), b
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== z() &&
                        this.focus) try {
                            return this.focus(), !1
                        } catch (b) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === z() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return v.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (b) {
                    return v.nodeName(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        },
        simulate: function (b, c, d) {
            b = v.extend(new v.Event,
                d, {
                    type: b,
                    isSimulated: !0
                });
            v.event.trigger(b, null, c);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    v.removeEvent = V.removeEventListener ? function (b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d)
    } : function (b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    v.Event = function (b, c) {
        return this instanceof v.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? u : w) :
            this.type = b, c && v.extend(this, c), this.timeStamp = b && b.timeStamp || v.now(), void (this[v.expando] = !0)) : new v.Event(b, c)
    };
    v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        preventDefault: function () {
            var b = this.originalEvent;
            this.isDefaultPrevented = u;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function () {
            var b = this.originalEvent;
            this.isPropagationStopped = u;
            b && !this.isSimulated && (b.stopPropagation && b.stopPropagation(),
                b.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = u;
            b && b.stopImmediatePropagation && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (b, c) {
        v.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function (b) {
                var d, e = b.relatedTarget,
                    f = b.handleObj;
                return (!e || e !== this && !v.contains(this, e)) && (b.type = f.origType, d = f.handler.apply(this,
                    arguments), b.type = c), d
            }
        }
    });
    R.submit || (v.event.special.submit = {
        setup: function () {
            return v.nodeName(this, "form") ? !1 : void v.event.add(this, "click._submit keypress._submit", function (b) {
                b = b.target;
                (b = v.nodeName(b, "input") || v.nodeName(b, "button") ? v.prop(b, "form") : void 0) && !v._data(b, "submit") && (v.event.add(b, "submit._submit", function (b) {
                    b._submitBubble = true
                }), v._data(b, "submit", true))
            })
        },
        postDispatch: function (b) {
            b._submitBubble && (delete b._submitBubble, this.parentNode && !b.isTrigger && v.event.simulate("submit",
                this.parentNode, b))
        },
        teardown: function () {
            return v.nodeName(this, "form") ? !1 : void v.event.remove(this, "._submit")
        }
    });
    R.change || (v.event.special.change = {
        setup: function () {
            return db.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (v.event.add(this, "propertychange._change", function (b) {
                "checked" === b.originalEvent.propertyName && (this._justChanged = !0)
            }), v.event.add(this, "click._change", function (b) {
                this._justChanged && !b.isTrigger && (this._justChanged = !1);
                v.event.simulate("change", this, b)
            })), !1) : void v.event.add(this, "beforeactivate._change", function (b) {
                b = b.target;
                db.test(b.nodeName) && !v._data(b, "change") && (v.event.add(b, "change._change", function (b) {
                    !this.parentNode || b.isSimulated || b.isTrigger || v.event.simulate("change", this.parentNode, b)
                }), v._data(b, "change", !0))
            })
        },
        handle: function (b) {
            var c = b.target;
            return this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? b.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return v.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    R.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, c) {
        var d = function (b) {
            v.event.simulate(c, b.target, v.event.fix(b))
        };
        v.event.special[c] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    f = v._data(e, c);
                f || e.addEventListener(b, d, !0);
                v._data(e, c, (f || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    f = v._data(e, c) - 1;
                f ? v._data(e, c, f) : (e.removeEventListener(b, d, !0), v._removeData(e, c))
            }
        }
    });
    v.fn.extend({
        on: function (b, c, d, e) {
            return A(this, b, c, d, e)
        },
        one: function (b,
            c, d, e) {
            return A(this, b, c, d, e, 1)
        },
        off: function (b, c, d) {
            var e, f;
            if (b && b.preventDefault && b.handleObj) return e = b.handleObj, v(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof b) {
                for (f in b) this.off(f, c, b[f]);
                return this
            }
            return (!1 === c || "function" == typeof c) && (d = c, c = void 0), !1 === d && (d = w), this.each(function () {
                v.event.remove(this, b, d, c)
            })
        },
        trigger: function (b, c) {
            return this.each(function () {
                v.event.trigger(b, c, this)
            })
        },
        triggerHandler: function (b,
            c) {
            var d = this[0];
            return d ? v.event.trigger(b, c, d, !0) : void 0
        }
    });
    var Ga = / jQuery\d+="(?:null|\d+)"/g,
        Ha = RegExp("<(?:" + yb + ")[\\s/>]", "i"),
        pb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Rb = /<script|<style|<link/i,
        Mb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $b = /^true\/(.*)/,
        ac = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Nb = p(V).appendChild(V.createElement("div"));
    v.extend({
        htmlPrefilter: function (b) {
            return b.replace(pb, "<$1></$2>")
        },
        clone: function (b, c, d) {
            var e, f, j, g, k, h = v.contains(b.ownerDocument,
                b);
            if (R.html5Clone || v.isXMLDoc(b) || !Ha.test("<" + b.nodeName + ">") ? j = b.cloneNode(!0) : (Nb.innerHTML = b.outerHTML, Nb.removeChild(j = Nb.firstChild)), !(R.noCloneEvent && R.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || v.isXMLDoc(b))) {
                e = s(j);
                k = s(b);
                for (g = 0; null != (f = k[g]) ; ++g)
                    if (e[g]) {
                        var l = e[g],
                            m = void 0,
                            n = void 0,
                            o = void 0;
                        if (1 === l.nodeType) {
                            if (m = l.nodeName.toLowerCase(), !R.noCloneEvent && l[v.expando]) {
                                o = v._data(l);
                                for (n in o.events) v.removeEvent(l, n, o.handle);
                                l.removeAttribute(v.expando)
                            }
                            "script" === m && l.text !==
                                f.text ? (G(l).text = f.text, H(l)) : "object" === m ? (l.parentNode && (l.outerHTML = f.outerHTML), R.html5Clone && f.innerHTML && !v.trim(l.innerHTML) && (l.innerHTML = f.innerHTML)) : "input" === m && ua.test(f.type) ? (l.defaultChecked = l.checked = f.checked, l.value !== f.value && (l.value = f.value)) : "option" === m ? l.defaultSelected = l.selected = f.defaultSelected : ("input" === m || "textarea" === m) && (l.defaultValue = f.defaultValue)
                        }
                    }
            }
            if (c)
                if (d) {
                    k = k || s(b);
                    e = e || s(j);
                    for (g = 0; null != (f = k[g]) ; g++) K(f, e[g])
                } else K(b, j);
            return e = s(j, "script"), 0 < e.length &&
                r(e, !h && s(b, "script")), j
        },
        cleanData: function (b, c) {
            for (var d, e, f, j, g = 0, k = v.expando, h = v.cache, l = R.attributes, m = v.event.special; null != (d = b[g]) ; g++)
                if ((c || Ia(d)) && (f = d[k], j = f && h[f])) {
                    if (j.events)
                        for (e in j.events) m[e] ? v.event.remove(d, e) : v.removeEvent(d, e, j.handle);
                    h[f] && (delete h[f], l || "undefined" == typeof d.removeAttribute ? d[k] = void 0 : d.removeAttribute(k), pa.push(f))
                }
        }
    });
    v.fn.extend({
        domManip: P,
        detach: function (b) {
            return T(this, b, !0)
        },
        remove: function (b) {
            return T(this, b)
        },
        text: function (b) {
            return za(this,
                function (b) {
                    return void 0 === b ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(b))
                }, null, b, arguments.length)
        },
        append: function () {
            return P(this, arguments, function (b) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && C(this, b).appendChild(b)
            })
        },
        prepend: function () {
            return P(this, arguments, function (b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = C(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function () {
            return P(this, arguments, function (b) {
                this.parentNode &&
                    this.parentNode.insertBefore(b, this)
            })
        },
        after: function () {
            return P(this, arguments, function (b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function () {
            for (var b, c = 0; null != (b = this[c]) ; c++) {
                for (1 === b.nodeType && v.cleanData(s(b, !1)) ; b.firstChild;) b.removeChild(b.firstChild);
                b.options && v.nodeName(b, "select") && (b.options.length = 0)
            }
            return this
        },
        clone: function (b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function () {
                return v.clone(this, b, c)
            })
        },
        html: function (b) {
            return za(this,
                function (b) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (void 0 === b) return 1 === c.nodeType ? c.innerHTML.replace(Ga, "") : void 0;
                    if ("string" == typeof b && !Rb.test(b) && (R.htmlSerialize || !Ha.test(b)) && (R.leadingWhitespace || !Pa.test(b)) && !na[(hb.exec(b) || ["", ""])[1].toLowerCase()]) {
                        b = v.htmlPrefilter(b);
                        try {
                            for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (v.cleanData(s(c, !1)), c.innerHTML = b);
                            c = 0
                        } catch (f) { }
                    }
                    c && this.empty().append(b)
                }, null, b, arguments.length)
        },
        replaceWith: function () {
            var b = [];
            return P(this, arguments, function (c) {
                var d =
                    this.parentNode;
                0 > v.inArray(this, b) && (v.cleanData(s(this)), d && d.replaceChild(c, this))
            }, b)
        }
    });
    v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, c) {
        v.fn[b] = function (b) {
            for (var d = 0, e = [], f = v(b), j = f.length - 1; j >= d; d++) b = d === j ? this : this.clone(!0), v(f[d])[c](b), sa.apply(e, b.get());
            return this.pushStack(e)
        }
    });
    var Ya, bc = {
        HTML: "block",
        BODY: "block"
    },
        gc = /^margin/,
        Za = RegExp("^(" + cb + ")(?!px)[a-z%]+$", "i"),
        Sb = function (b, c, d, e) {
            var f, j = {};
            for (f in c) j[f] = b.style[f], b.style[f] = c[f];
            d = d.apply(b, e || []);
            for (f in c) b.style[f] = j[f];
            return d
        },
        Tb = V.documentElement;
    ! function () {
        var c, d, e, f, j, g, k = V.createElement("div"),
            h = V.createElement("div");
        if (h.style) {
            h.style.cssText = "float:left;opacity:.5";
            R.opacity = "0.5" === h.style.opacity;
            R.cssFloat = !!h.style.cssFloat;
            h.style.backgroundClip = "content-box";
            h.cloneNode(!0).style.backgroundClip = "";
            R.clearCloneStyle = "content-box" === h.style.backgroundClip;
            k = V.createElement("div");
            k.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
            h.innerHTML = "";
            k.appendChild(h);
            R.boxSizing = "" === h.style.boxSizing || "" === h.style.MozBoxSizing || "" === h.style.WebkitBoxSizing;
            v.extend(R, {
                reliableHiddenOffsets: function () {
                    return null == c && l(), f
                },
                boxSizingReliable: function () {
                    return null == c && l(), e
                },
                pixelMarginRight: function () {
                    return null == c && l(), d
                },
                pixelPosition: function () {
                    return null == c && l(), c
                },
                reliableMarginRight: function () {
                    return null == c && l(), j
                },
                reliableMarginLeft: function () {
                    return null == c && l(), g
                }
            });
            var l = function () {
                var l, m, n = V.documentElement;
                n.appendChild(k);
                h.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                c = e = g = !1;
                d = j = !0;
                b.getComputedStyle && (m = b.getComputedStyle(h), c = "1%" !== (m || {}).top, g = "2px" === (m || {}).marginLeft, e = "4px" === (m || {
                    width: "4px"
                }).width, h.style.marginRight = "50%", d = "4px" === (m || {
                    marginRight: "4px"
                }).marginRight, l = h.appendChild(V.createElement("div")), l.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    l.style.marginRight = l.style.width = "0", h.style.width = "1px", j = !parseFloat((b.getComputedStyle(l) || {}).marginRight), h.removeChild(l));
                h.style.display = "none";
                (f = 0 === h.getClientRects().length) && (h.style.display = "", h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l = h.getElementsByTagName("td"), l[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === l[0].offsetHeight, f && (l[0].style.display = "", l[1].style.display = "none", f = 0 === l[0].offsetHeight));
                n.removeChild(k)
            }
        }
    }();
    var jb, sb, hc = /^(top|right|bottom|left)$/;
    b.getComputedStyle ? (jb = function (c) {
        var d = c.ownerDocument.defaultView;
        return d && d.opener || (d = b), d.getComputedStyle(c)
    }, sb = function (b, c, d) {
        var e, f, j, g, k = b.style;
        return d = d || jb(b), g = d ? d.getPropertyValue(c) || d[c] : void 0, "" !== g && void 0 !== g || v.contains(b.ownerDocument, b) || (g = v.style(b, c)), d && !R.pixelMarginRight() && Za.test(g) && gc.test(c) && (e = k.width, f = k.minWidth, j = k.maxWidth, k.minWidth = k.maxWidth = k.width = g, g = d.width, k.width = e, k.minWidth = f, k.maxWidth = j), void 0 === g ? g : g + ""
    }) : Tb.currentStyle && (jb = function (b) {
        return b.currentStyle
    },
        sb = function (b, c, d) {
            var e, f, j, g, k = b.style;
            return d = d || jb(b), g = d ? d[c] : void 0, null == g && k && k[c] && (g = k[c]), Za.test(g) && !hc.test(c) && (e = k.left, f = b.runtimeStyle, j = f && f.left, j && (f.left = b.currentStyle.left), k.left = "fontSize" === c ? "1em" : g, g = k.pixelLeft + "px", k.left = e, j && (f.left = j)), void 0 === g ? g : g + "" || "auto"
        });
    var nc = /alpha\([^)]*\)/i,
        Ub = /opacity\s*=\s*([^)]*)/i,
        Vb = /^(none|table(?!-c[ea]).+)/,
        rb = RegExp("^(" + cb + ")(.*)$", "i"),
        la = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        La = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        vc = ["Webkit", "O", "Moz", "ms"],
        ib = V.createElement("div").style;
    v.extend({
        cssHooks: {
            opacity: {
                get: function (b, c) {
                    if (c) {
                        var d = sb(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": R.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b, c, d, e) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var f, j, g, k = v.camelCase(c),
                    h = b.style;
                if (c = v.cssProps[k] || (v.cssProps[k] = J(k) || k), g = v.cssHooks[c] || v.cssHooks[k], void 0 === d) return g && "get" in g && void 0 !== (f = g.get(b, !1, e)) ? f : h[c];
                if (j = typeof d, "string" === j && (f = gb.exec(d)) && f[1] && (d = q(b, c, f), j = "number"), null != d && d === d && ("number" === j && (d += f && f[3] || (v.cssNumber[k] ? "" : "px")), R.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (h[c] = "inherit"), !(g && "set" in g && void 0 === (d = g.set(b, d, e))))) try {
                    h[c] = d
                } catch (l) { }
            }
        },
        css: function (b, c, d, e) {
            var f, j, g, k = v.camelCase(c);
            return c = v.cssProps[k] || (v.cssProps[k] =
                J(k) || k), g = v.cssHooks[c] || v.cssHooks[k], g && "get" in g && (j = g.get(b, !0, d)), void 0 === j && (j = sb(b, c, e)), "normal" === j && c in La && (j = La[c]), "" === d || d ? (f = parseFloat(j), !0 === d || isFinite(f) ? f || 0 : j) : j
        }
    });
    v.each(["height", "width"], function (b, c) {
        v.cssHooks[c] = {
            get: function (b, d, e) {
                return d ? Vb.test(v.css(b, "display")) && 0 === b.offsetWidth ? Sb(b, la, function () {
                    return B(b, c, e)
                }) : B(b, c, e) : void 0
            },
            set: function (b, d, e) {
                var f = e && jb(b);
                return U(b, d, e ? Q(b, c, e, R.boxSizing && "border-box" === v.css(b, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    R.opacity ||
        (v.cssHooks.opacity = {
            get: function (b, c) {
                return Ub.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
            },
            set: function (b, c) {
                var d = b.style,
                    e = b.currentStyle,
                    f = v.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                    j = e && e.filter || d.filter || "";
                d.zoom = 1;
                (1 <= c || "" === c) && "" === v.trim(j.replace(nc, "")) && d.removeAttribute && (d.removeAttribute("filter"), "" === c || e && !e.filter) || (d.filter = nc.test(j) ? j.replace(nc, f) : j + " " + f)
            }
        });
    v.cssHooks.marginRight = I(R.reliableMarginRight,
        function (b, c) {
            return c ? Sb(b, {
                display: "inline-block"
            }, sb, [b, "marginRight"]) : void 0
        });
    v.cssHooks.marginLeft = I(R.reliableMarginLeft, function (b, c) {
        return c ? (parseFloat(sb(b, "marginLeft")) || (v.contains(b.ownerDocument, b) ? b.getBoundingClientRect().left - Sb(b, {
            marginLeft: 0
        }, function () {
            return b.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    });
    v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (b, c) {
        v.cssHooks[b + c] = {
            expand: function (d) {
                for (var e = 0, f = {}, d = "string" == typeof d ? d.split(" ") : [d]; 4 > e; e++) f[b + Qa[e] +
                    c] = d[e] || d[e - 2] || d[0];
                return f
            }
        };
        gc.test(b) || (v.cssHooks[b + c].set = U)
    });
    v.fn.extend({
        css: function (b, c) {
            return za(this, function (b, c, d) {
                var e, f = {},
                    j = 0;
                if (v.isArray(c)) {
                    d = jb(b);
                    for (e = c.length; e > j; j++) f[c[j]] = v.css(b, c[j], !1, d);
                    return f
                }
                return void 0 !== d ? v.style(b, c, d) : v.css(b, c)
            }, b, c, 1 < arguments.length)
        },
        show: function () {
            return N(this, !0)
        },
        hide: function () {
            return N(this)
        },
        toggle: function (b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function () {
                qa(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    v.Tween = E;
    E.prototype = {
        constructor: E,
        init: function (b, c, d, e, f, j) {
            this.elem = b;
            this.prop = d;
            this.easing = f || v.easing._default;
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = j || (v.cssNumber[d] ? "" : "px")
        },
        cur: function () {
            var b = E.propHooks[this.prop];
            return b && b.get ? b.get(this) : E.propHooks._default.get(this)
        },
        run: function (b) {
            var c, d = E.propHooks[this.prop];
            return this.options.duration ? this.pos = c = v.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now =
                (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : E.propHooks._default.set(this), this
        }
    };
    E.prototype.init.prototype = E.prototype;
    E.propHooks = {
        _default: {
            get: function (b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = v.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function (b) {
                v.fx.step[b.prop] ? v.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[v.cssProps[b.prop]] && !v.cssHooks[b.prop] ?
                    b.elem[b.prop] = b.now : v.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function (b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    v.easing = {
        linear: function (b) {
            return b
        },
        swing: function (b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    v.fx = E.prototype.init;
    v.fx.step = {};
    var $a, Jb, Ac = /^(?:toggle|show|hide)$/,
        Bc = /queueHooks$/;
    v.Animation = v.extend(aa, {
        tweeners: {
            "*": [function (b, c) {
                var d = this.createTween(b, c);
                return q(d.elem, b, gb.exec(c), d), d
            }]
        },
        tweener: function (b, c) {
            v.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(Aa);
            for (var d, e = 0, f = b.length; f > e; e++) d = b[e], aa.tweeners[d] = aa.tweeners[d] || [], aa.tweeners[d].unshift(c)
        },
        prefilters: [function (b, c, d) {
            var e, f, j, g, k, h, l, m = this,
                n = {},
                o = b.style,
                s = b.nodeType && qa(b),
                q = v._data(b, "fxshow");
            d.queue || (g = v._queueHooks(b, "fx"), null == g.unqueued && (g.unqueued = 0, k = g.empty.fire, g.empty.fire = function () {
                g.unqueued || k()
            }), g.unqueued++, m.always(function () {
                m.always(function () {
                    g.unqueued--;
                    v.queue(b, "fx").length || g.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [o.overflow, o.overflowX, o.overflowY], h = v.css(b, "display"), l = "none" === h ? v._data(b, "olddisplay") || F(b.nodeName) : h, "inline" === l && "none" === v.css(b, "float") && (R.inlineBlockNeedsLayout && "inline" !== F(b.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
            d.overflow && (o.overflow = "hidden", R.shrinkWrapBlocks() || m.always(function () {
                o.overflow = d.overflow[0];
                o.overflowX = d.overflow[1];
                o.overflowY = d.overflow[2]
            }));
            for (e in c)
                if (f = c[e], Ac.exec(f)) {
                    if (delete c[e],
                        j = j || "toggle" === f, f === (s ? "hide" : "show")) {
                        if ("show" !== f || !q || void 0 === q[e]) continue;
                        s = !0
                    }
                    n[e] = q && q[e] || v.style(b, e)
                } else h = void 0;
            if (v.isEmptyObject(n)) "inline" === ("none" === h ? F(b.nodeName) : h) && (o.display = h);
            else
                for (e in q ? "hidden" in q && (s = q.hidden) : q = v._data(b, "fxshow", {}), j && (q.hidden = !s), s ? v(b).show() : m.done(function () {
                        v(b).hide()
                }), m.done(function () {
                        var c;
                        v._removeData(b, "fxshow");
                        for (c in n) v.style(b, c, n[c])
                }), n) c = M(s ? q[e] : 0, e, m), e in q || (q[e] = c.start, s && (c.end = c.start, c.start = "width" === e || "height" ===
                e ? 1 : 0))
        }],
        prefilter: function (b, c) {
            c ? aa.prefilters.unshift(b) : aa.prefilters.push(b)
        }
    });
    v.speed = function (b, c, d) {
        var e = b && "object" == typeof b ? v.extend({}, b) : {
            complete: d || !d && c || v.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !v.isFunction(c) && c
        };
        return e.duration = v.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in v.fx.speeds ? v.fx.speeds[e.duration] : v.fx.speeds._default, (null == e.queue || !0 === e.queue) && (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            v.isFunction(e.old) && e.old.call(this);
            e.queue && v.dequeue(this, e.queue)
        }, e
    };
    v.fn.extend({
        fadeTo: function (b, c, d, e) {
            return this.filter(qa).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function (b, c, d, e) {
            var f = v.isEmptyObject(b),
                j = v.speed(c, d, e),
                c = function () {
                    var c = aa(this, v.extend({}, b), j);
                    (f || v._data(this, "finish")) && c.stop(!0)
                };
            return c.finish = c, f || !1 === j.queue ? this.each(c) : this.queue(j.queue, c)
        },
        stop: function (b, c, d) {
            var e = function (b) {
                var c = b.stop;
                delete b.stop;
                c(d)
            };
            return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !==
                b && this.queue(b || "fx", []), this.each(function () {
                    var c = !0,
                        f = null != b && b + "queueHooks",
                        j = v.timers,
                        g = v._data(this);
                    if (f) g[f] && g[f].stop && e(g[f]);
                    else
                        for (f in g) g[f] && g[f].stop && Bc.test(f) && e(g[f]);
                    for (f = j.length; f--;) j[f].elem !== this || null != b && j[f].queue !== b || (j[f].anim.stop(d), c = !1, j.splice(f, 1));
                    (c || !d) && v.dequeue(this, b)
                })
        },
        finish: function (b) {
            return !1 !== b && (b = b || "fx"), this.each(function () {
                var c, d = v._data(this),
                    e = d[b + "queue"];
                c = d[b + "queueHooks"];
                var f = v.timers,
                    j = e ? e.length : 0;
                d.finish = !0;
                v.queue(this,
                    b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = f.length; c--;) f[c].elem === this && f[c].queue === b && (f[c].anim.stop(!0), f.splice(c, 1));
                for (c = 0; j > c; c++) e[c] && e[c].finish && e[c].finish.call(this);
                delete d.finish
            })
        }
    });
    v.each(["toggle", "show", "hide"], function (b, c) {
        var d = v.fn[c];
        v.fn[c] = function (b, e, f) {
            return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(O(c, !0), b, e, f)
        }
    });
    v.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
        function (b, c) {
            v.fn[b] = function (b, d, e) {
                return this.animate(c, b, d, e)
            }
        });
    v.timers = [];
    v.fx.tick = function () {
        var b, c = v.timers,
            d = 0;
        for ($a = v.now() ; d < c.length; d++) b = c[d], b() || c[d] !== b || c.splice(d--, 1);
        c.length || v.fx.stop();
        $a = void 0
    };
    v.fx.timer = function (b) {
        v.timers.push(b);
        b() ? v.fx.start() : v.timers.pop()
    };
    v.fx.interval = 13;
    v.fx.start = function () {
        Jb || (Jb = b.setInterval(v.fx.tick, v.fx.interval))
    };
    v.fx.stop = function () {
        b.clearInterval(Jb);
        Jb = null
    };
    v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    v.fn.delay = function (c,
        d) {
        return c = v.fx ? v.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function (d, e) {
            var f = b.setTimeout(d, c);
            e.stop = function () {
                b.clearTimeout(f)
            }
        })
    };
    (function () {
        var b, c = V.createElement("input"),
            d = V.createElement("div"),
            e = V.createElement("select"),
            f = e.appendChild(V.createElement("option")),
            d = V.createElement("div");
        d.setAttribute("className", "t");
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        d.getElementsByTagName("a");
        c.setAttribute("type", "checkbox");
        d.appendChild(c);
        b = d.getElementsByTagName("a")[0];
        b.style.cssText = "top:1px";
        R.getSetAttribute = "t" !== d.className;
        R.style = /top/.test(b.getAttribute("style"));
        R.hrefNormalized = "/a" === b.getAttribute("href");
        R.checkOn = !!c.value;
        R.optSelected = f.selected;
        R.enctype = !!V.createElement("form").enctype;
        e.disabled = !0;
        R.optDisabled = !f.disabled;
        c = V.createElement("input");
        c.setAttribute("value", "");
        R.input = "" === c.getAttribute("value");
        c.value = "t";
        c.setAttribute("type", "radio");
        R.radioValue = "t" === c.value
    })();
    var Rc = /\r/g;
    v.fn.extend({
        val: function (b) {
            var c, d, e, f =
                this[0];
            if (arguments.length) return e = v.isFunction(b), this.each(function (d) {
                var f;
                1 === this.nodeType && (f = e ? b.call(this, d, v(this).val()) : b, null == f ? f = "" : "number" == typeof f ? f += "" : v.isArray(f) && (f = v.map(f, function (b) {
                    return null == b ? "" : b + ""
                })), c = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, f, "value") || (this.value = f))
            });
            if (f) return c = v.valHooks[f.type] || v.valHooks[f.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(f, "value")) ? d : (d = f.value, "string" ==
                typeof d ? d.replace(Rc, "") : null == d ? "" : d)
        }
    });
    v.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var c = v.find.attr(b, "value");
                    return null != c ? c : v.trim(v.text(b))
                }
            },
            select: {
                get: function (b) {
                    for (var c, d = b.options, e = b.selectedIndex, f = "select-one" === b.type || 0 > e, j = f ? null : [], g = f ? e + 1 : d.length, k = 0 > e ? g : f ? e : 0; g > k; k++)
                        if (c = d[k], (c.selected || k === e) && (R.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !v.nodeName(c.parentNode, "optgroup"))) {
                            if (b = v(c).val(), f) return b;
                            j.push(b)
                        }
                    return j
                },
                set: function (b, c) {
                    for (var d, e, f = b.options, j = v.makeArray(c), g = f.length; g--;)
                        if (e = f[g], 0 <= v.inArray(v.valHooks.option.get(e), j)) try {
                            e.selected = d = !0
                        } catch (k) {
                            e.scrollHeight
                        } else e.selected = !1;
                    return d || (b.selectedIndex = -1), f
                }
            }
        }
    });
    v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            set: function (b, c) {
                return v.isArray(c) ? b.checked = -1 < v.inArray(v(b).val(), c) : void 0
            }
        };
        R.checkOn || (v.valHooks[this].get = function (b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var Bb, Cc, Cb = v.expr.attrHandle,
        Dc =
        /^(?:checked|selected)$/i,
        eb = R.getSetAttribute,
        Db = R.input;
    v.fn.extend({
        attr: function (b, c) {
            return za(this, v.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function (b) {
            return this.each(function () {
                v.removeAttr(this, b)
            })
        }
    });
    v.extend({
        attr: function (b, c, d) {
            var e, f, j = b.nodeType;
            if (3 !== j && 8 !== j && 2 !== j) return "undefined" == typeof b.getAttribute ? v.prop(b, c, d) : (1 === j && v.isXMLDoc(b) || (c = c.toLowerCase(), f = v.attrHooks[c] || (v.expr.match.bool.test(c) ? Cc : Bb)), void 0 !== d ? null === d ? void v.removeAttr(b, c) : f && "set" in f && void 0 !==
                (e = f.set(b, d, c)) ? e : (b.setAttribute(c, d + ""), d) : f && "get" in f && null !== (e = f.get(b, c)) ? e : (e = v.find.attr(b, c), null == e ? void 0 : e))
        },
        attrHooks: {
            type: {
                set: function (b, c) {
                    if (!R.radioValue && "radio" === c && v.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        removeAttr: function (b, c) {
            var d, e, f = 0,
                j = c && c.match(Aa);
            if (j && 1 === b.nodeType)
                for (; d = j[f++];) e = v.propFix[d] || d, v.expr.match.bool.test(d) ? Db && eb || !Dc.test(d) ? b[e] = !1 : b[v.camelCase("default-" + d)] = b[e] = !1 : v.attr(b, d, ""), b.removeAttribute(eb ?
                        d : e)
        }
    });
    Cc = {
        set: function (b, c, d) {
            return !1 === c ? v.removeAttr(b, d) : Db && eb || !Dc.test(d) ? b.setAttribute(!eb && v.propFix[d] || d, d) : b[v.camelCase("default-" + d)] = b[d] = !0, d
        }
    };
    v.each(v.expr.match.bool.source.match(/\w+/g), function (b, c) {
        var d = Cb[c] || v.find.attr;
        Db && eb || !Dc.test(c) ? Cb[c] = function (b, c, e) {
            var f, j;
            return e || (j = Cb[c], Cb[c] = f, f = null != d(b, c, e) ? c.toLowerCase() : null, Cb[c] = j), f
        } : Cb[c] = function (b, c, d) {
            return d ? void 0 : b[v.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    });
    Db && eb || (v.attrHooks.value = {
        set: function (b,
            c, d) {
            return v.nodeName(b, "input") ? void (b.defaultValue = c) : Bb && Bb.set(b, c, d)
        }
    });
    eb || (Bb = {
        set: function (b, c, d) {
            var e = b.getAttributeNode(d);
            return e || b.setAttributeNode(e = b.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === b.getAttribute(d) ? c : void 0
        }
    }, Cb.id = Cb.name = Cb.coords = function (b, c, d) {
        var e;
        return d ? void 0 : (e = b.getAttributeNode(c)) && "" !== e.value ? e.value : null
    }, v.valHooks.button = {
        get: function (b, c) {
            var d = b.getAttributeNode(c);
            return d && d.specified ? d.value : void 0
        },
        set: Bb.set
    }, v.attrHooks.contenteditable = {
        set: function (b, c, d) {
            Bb.set(b, "" === c ? !1 : c, d)
        }
    }, v.each(["width", "height"], function (b, c) {
        v.attrHooks[c] = {
            set: function (b, d) {
                return "" === d ? (b.setAttribute(c, "auto"), d) : void 0
            }
        }
    }));
    R.style || (v.attrHooks.style = {
        get: function (b) {
            return b.style.cssText || void 0
        },
        set: function (b, c) {
            return b.style.cssText = c + ""
        }
    });
    var Wa = /^(?:input|select|textarea|button|object)$/i,
        Sc = /^(?:a|area)$/i;
    v.fn.extend({
        prop: function (b, c) {
            return za(this, v.prop, b, c, 1 < arguments.length)
        },
        removeProp: function (b) {
            return b = v.propFix[b] || b, this.each(function () {
                try {
                    this[b] =
                        void 0, delete this[b]
                } catch (c) { }
            })
        }
    });
    v.extend({
        prop: function (b, c, d) {
            var e, f, j = b.nodeType;
            if (3 !== j && 8 !== j && 2 !== j) return 1 === j && v.isXMLDoc(b) || (c = v.propFix[c] || c, f = v.propHooks[c]), void 0 !== d ? f && "set" in f && void 0 !== (e = f.set(b, d, c)) ? e : b[c] = d : f && "get" in f && null !== (e = f.get(b, c)) ? e : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function (b) {
                    var c = v.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : Wa.test(b.nodeName) || Sc.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    R.hrefNormalized || v.each(["href",
        "src"
    ], function (b, c) {
        v.propHooks[c] = {
            get: function (b) {
                return b.getAttribute(c, 4)
            }
        }
    });
    R.optSelected || (v.propHooks.selected = {
        get: function (b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    });
    v.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        v.propFix[this.toLowerCase()] = this
    });
    R.enctype || (v.propFix.enctype = "encoding");
    var Wb = /[\t\r\n\f]/g;
    v.fn.extend({
        addClass: function (b) {
            var c,
                d, e, f, j, g, k = 0;
            if (v.isFunction(b)) return this.each(function (c) {
                v(this).addClass(b.call(this, c, Y(this)))
            });
            if ("string" == typeof b && b)
                for (c = b.match(Aa) || []; d = this[k++];)
                    if (f = Y(d), e = 1 === d.nodeType && (" " + f + " ").replace(Wb, " ")) {
                        for (g = 0; j = c[g++];) 0 > e.indexOf(" " + j + " ") && (e += j + " ");
                        e = v.trim(e);
                        f !== e && v.attr(d, "class", e)
                    }
            return this
        },
        removeClass: function (b) {
            var c, d, e, f, j, g, k = 0;
            if (v.isFunction(b)) return this.each(function (c) {
                v(this).removeClass(b.call(this, c, Y(this)))
            });
            if (!arguments.length) return this.attr("class",
                "");
            if ("string" == typeof b && b)
                for (c = b.match(Aa) || []; d = this[k++];)
                    if (f = Y(d), e = 1 === d.nodeType && (" " + f + " ").replace(Wb, " ")) {
                        for (g = 0; j = c[g++];)
                            for (; -1 < e.indexOf(" " + j + " ") ;) e = e.replace(" " + j + " ", " ");
                        e = v.trim(e);
                        f !== e && v.attr(d, "class", e)
                    }
            return this
        },
        toggleClass: function (b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : v.isFunction(b) ? this.each(function (d) {
                v(this).toggleClass(b.call(this, d, Y(this), c), c)
            }) : this.each(function () {
                var c, e, f, j;
                if ("string" ===
                    d) {
                    e = 0;
                    f = v(this);
                    for (j = b.match(Aa) || []; c = j[e++];) f.hasClass(c) ? f.removeClass(c) : f.addClass(c)
                } else (void 0 === b || "boolean" === d) && (c = Y(this), c && v._data(this, "__className__", c), v.attr(this, "class", c || !1 === b ? "" : v._data(this, "__className__") || ""))
            })
        },
        hasClass: function (b) {
            for (var c, d = 0, b = " " + b + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + Y(c) + " ").replace(Wb, " ").indexOf(b)) return !0;
            return !1
        }
    });
    v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (b, c) {
            v.fn[c] = function (b, d) {
                return arguments.length > 0 ? this.on(c, null, b, d) : this.trigger(c)
            }
        });
    v.fn.extend({
        hover: function (b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    var od = b.location,
        oc = v.now(),
        Ba = /\?/,
        Tc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    v.parseJSON = function (c) {
        if (b.JSON && b.JSON.parse) return b.JSON.parse(c + "");
        var d, e = null,
            f = v.trim(c + "");
        return f && !v.trim(f.replace(Tc, function (b, c, f, j) {
            return d &&
                c && (e = 0), 0 === e ? b : (d = f || c, e += !j - !f, "")
        })) ? Function("return " + f)() : v.error("Invalid JSON: " + c)
    };
    v.parseXML = function (c) {
        var d, e;
        if (!c || "string" != typeof c) return null;
        try {
            b.DOMParser ? (e = new b.DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new b.ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
        } catch (f) {
            d = void 0
        }
        return d && d.documentElement && !d.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + c), d
    };
    var Uc = /#.*$/,
        Ec = /([?&])_=[^&]*/,
        Vc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wc =
        /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Xc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Yc = {},
        wc = {},
        Gc = "*/".concat("*"),
        Hc = od.href,
        Xb = Xc.exec(Hc.toLowerCase()) || [];
    v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hc,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Xb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (b, c) {
            return c ? ra(ra(b, v.ajaxSettings), c) : ra(v.ajaxSettings, b)
        },
        ajaxPrefilter: ba(Yc),
        ajaxTransport: ba(wc),
        ajax: function (c, d) {
            function e(c, d, f, j) {
                var n, r, L, A, B = d;
                if (2 !== w) {
                    w = 2;
                    h && b.clearTimeout(h);
                    m = void 0;
                    k = j || "";
                    D.readyState = 0 < c ? 4 : 0;
                    j = 200 <= c && 300 > c || 304 === c;
                    if (f) {
                        L = o;
                        for (var z = D, O, C, x, E, W = L.contents, F = L.dataTypes;
                            "*" === F[0];) F.shift(), void 0 === C && (C = L.mimeType || z.getResponseHeader("Content-Type"));
                        if (C)
                            for (E in W)
                                if (W[E] && W[E].test(C)) {
                                    F.unshift(E);
                                    break
                                }
                        if (F[0] in f) x = F[0];
                        else {
                            for (E in f) {
                                if (!F[0] || L.converters[E + " " + F[0]]) {
                                    x = E;
                                    break
                                }
                                O || (O = E)
                            }
                            x = x || O
                        }
                        L = x ? (x !== F[0] && F.unshift(x), f[x]) : void 0
                    }
                    var M;
                    a: {
                        f = o; O = L; C = D; x = j;
                        var X, J, I; L = {}; z = f.dataTypes.slice();
                        if (z[1])
                            for (X in f.converters) L[X.toLowerCase()] =
                                f.converters[X];
                        for (E = z.shift() ; E;)
                            if (f.responseFields[E] && (C[f.responseFields[E]] = O), !I && x && f.dataFilter && (O = f.dataFilter(O, f.dataType)), I = E, E = z.shift())
                                if ("*" === E) E = I;
                                else if ("*" !== I && I !== E) {
                                    if (X = L[I + " " + E] || L["* " + E], !X)
                                        for (M in L)
                                            if (J = M.split(" "), J[1] === E && (X = L[I + " " + J[0]] || L["* " + J[0]])) {
                                                !0 === X ? X = L[M] : !0 !== L[M] && (E = J[0], z.unshift(J[1]));
                                                break
                                            }
                                    if (!0 !== X)
                                        if (X && f["throws"]) O = X(O);
                                        else try {
                                            O = X(O)
                                        } catch (G) {
                                            M = {
                                                state: "parsererror",
                                                error: X ? G : "No conversion from " + I + " to " + E
                                            };
                                            break a
                                        }
                                }
                        M = {
                            state: "success",
                            data: O
                        }
                    }
                    L = M;
                    j ? (o.ifModified && (A = D.getResponseHeader("Last-Modified"), A && (v.lastModified[g] = A), A = D.getResponseHeader("etag"), A && (v.etag[g] = A)), 204 === c || "HEAD" === o.type ? B = "nocontent" : 304 === c ? B = "notmodified" : (B = L.state, n = L.data, r = L.error, j = !r)) : (r = B, (c || !B) && (B = "error", 0 > c && (c = 0)));
                    D.status = c;
                    D.statusText = (d || B) + "";
                    j ? u.resolveWith(s, [n, B, D]) : u.rejectWith(s, [D, B, r]);
                    D.statusCode(p);
                    p = void 0;
                    l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [D, o, j ? n : r]);
                    t.fireWith(s, [D, B]);
                    l && (q.trigger("ajaxComplete", [D, o]), --v.active ||
                        v.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = void 0);
            var d = d || {},
                f, j, g, k, h, l, m, n, o = v.ajaxSetup({}, d),
                s = o.context || o,
                q = o.context && (s.nodeType || s.jquery) ? v(s) : v.event,
                u = v.Deferred(),
                t = v.Callbacks("once memory"),
                p = o.statusCode || {},
                r = {},
                L = {},
                w = 0,
                A = "canceled",
                D = {
                    readyState: 0,
                    getResponseHeader: function (b) {
                        var c;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; c = Vc.exec(k) ;) n[c[1].toLowerCase()] = c[2];
                            c = n[b.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? k : null
                    },
                    setRequestHeader: function (b,
                        c) {
                        var d = b.toLowerCase();
                        return w || (b = L[d] = L[d] || b, r[b] = c), this
                    },
                    overrideMimeType: function (b) {
                        return w || (o.mimeType = b), this
                    },
                    statusCode: function (b) {
                        var c;
                        if (b)
                            if (2 > w)
                                for (c in b) p[c] = [p[c], b[c]];
                            else D.always(b[D.status]);
                        return this
                    },
                    abort: function (b) {
                        b = b || A;
                        return m && m.abort(b), e(0, b), this
                    }
                };
            if (u.promise(D).complete = t.add, D.success = D.done, D.error = D.fail, o.url = ((c || o.url || Hc) + "").replace(Uc, "").replace(Fc, Xb[1] + "//"), o.type = d.method || d.type || o.method || o.type, o.dataTypes = v.trim(o.dataType || "*").toLowerCase().match(Aa) || [""], null == o.crossDomain && (f = Xc.exec(o.url.toLowerCase()), o.crossDomain = !(!f || f[1] === Xb[1] && f[2] === Xb[2] && (f[3] || ("http:" === f[1] ? "80" : "443")) === (Xb[3] || ("http:" === Xb[1] ? "80" : "443")))), o.data && o.processData && "string" != typeof o.data && (o.data = v.param(o.data, o.traditional)), da(Yc, o, d, D), 2 === w) return D;
            (l = v.event && o.global) && 0 === v.active++ && v.event.trigger("ajaxStart");
            o.type = o.type.toUpperCase();
            o.hasContent = !Wc.test(o.type);
            g = o.url;
            o.hasContent || (o.data && (g = o.url += (Ba.test(g) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (o.url = Ec.test(g) ? g.replace(Ec, "$1_=" + oc++) : g + (Ba.test(g) ? "&" : "?") + "_=" + oc++));
            o.ifModified && (v.lastModified[g] && D.setRequestHeader("If-Modified-Since", v.lastModified[g]), v.etag[g] && D.setRequestHeader("If-None-Match", v.etag[g]));
            (o.data && o.hasContent && !1 !== o.contentType || d.contentType) && D.setRequestHeader("Content-Type", o.contentType);
            D.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Gc + "; q=0.01" : "") : o.accepts["*"]);
            for (j in o.headers) D.setRequestHeader(j, o.headers[j]);
            if (o.beforeSend && (!1 === o.beforeSend.call(s, D, o) || 2 === w)) return D.abort();
            A = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) D[j](o[j]);
            if (m = da(wc, o, d, D)) {
                if (D.readyState = 1, l && q.trigger("ajaxSend", [D, o]), 2 === w) return D;
                o.async && 0 < o.timeout && (h = b.setTimeout(function () {
                    D.abort("timeout")
                }, o.timeout));
                try {
                    w = 1, m.send(r, e)
                } catch (B) {
                    if (!(2 > w)) throw B;
                    e(-1, B)
                }
            } else e(-1, "No Transport");
            return D
        },
        getJSON: function (b, c, d) {
            return v.get(b, c, d, "json")
        },
        getScript: function (b,
            c) {
            return v.get(b, void 0, c, "script")
        }
    });
    v.each(["get", "post"], function (b, c) {
        v[c] = function (b, d, e, f) {
            return v.isFunction(d) && (f = f || e, e = d, d = void 0), v.ajax(v.extend({
                url: b,
                type: c,
                dataType: f,
                data: d,
                success: e
            }, v.isPlainObject(b) && b))
        }
    });
    v._evalUrl = function (b) {
        return v.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    v.fn.extend({
        wrapAll: function (b) {
            if (v.isFunction(b)) return this.each(function (c) {
                v(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = v(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function () {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function (b) {
            return v.isFunction(b) ? this.each(function (c) {
                v(this).wrapInner(b.call(this, c))
            }) : this.each(function () {
                var c = v(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function (b) {
            var c = v.isFunction(b);
            return this.each(function (d) {
                v(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                v.nodeName(this,
                    "body") || v(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    v.expr.filters.hidden = function (b) {
        if (R.reliableHiddenOffsets()) b = 0 >= b.offsetWidth && 0 >= b.offsetHeight && !b.getClientRects().length;
        else a: {
            for (; b && 1 === b.nodeType;) {
                if ("none" === (b.style && b.style.display || v.css(b, "display")) || "hidden" === b.type) {
                    b = !0;
                    break a
                }
                b = b.parentNode
            }
            b = !1
        }
        return b
    };
    v.expr.filters.visible = function (b) {
        return !v.expr.filters.hidden(b)
    };
    var pd = /%20/g,
        gd = /\[\]$/,
        Ic = /\r?\n/g,
        qd = /^(?:submit|button|image|reset|file)$/i,
        rd = /^(?:input|select|textarea|keygen)/i;
    v.param = function (b, c) {
        var d, e = [],
            f = function (b, c) {
                c = v.isFunction(c) ? c() : null == c ? "" : c;
                e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        if (void 0 === c && (c = v.ajaxSettings && v.ajaxSettings.traditional), v.isArray(b) || b.jquery && !v.isPlainObject(b)) v.each(b, function () {
            f(this.name, this.value)
        });
        else
            for (d in b) x(d, b[d], c, f);
        return e.join("&").replace(pd, "+")
    };
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var b = v.prop(this,
                    "elements");
                return b ? v.makeArray(b) : this
            }).filter(function () {
                var b = this.type;
                return this.name && !v(this).is(":disabled") && rd.test(this.nodeName) && !qd.test(b) && (this.checked || !ua.test(b))
            }).map(function (b, c) {
                var d = v(this).val();
                return null == d ? null : v.isArray(d) ? v.map(d, function (b) {
                    return {
                        name: c.name,
                        value: b.replace(Ic, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(Ic, "\r\n")
                }
            }).get()
        }
    });
    v.ajaxSettings.xhr = void 0 !== b.ActiveXObject ? function () {
        return this.isLocal ? ka() : 8 < V.documentMode ? ja() : /^(get|post|head|put|delete|options)$/i.test(this.type) &&
            ja() || ka()
    } : ja;
    var sd = 0,
        pc = {},
        qc = v.ajaxSettings.xhr();
    b.attachEvent && b.attachEvent("onunload", function () {
        for (var b in pc) pc[b](void 0, !0)
    });
    R.cors = !!qc && "withCredentials" in qc;
    (qc = R.ajax = !!qc) && v.ajaxTransport(function (c) {
        if (!c.crossDomain || R.cors) {
            var d;
            return {
                send: function (e, f) {
                    var j, g = c.xhr(),
                        k = ++sd;
                    if (g.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                        for (j in c.xhrFields) g[j] = c.xhrFields[j];
                    c.mimeType && g.overrideMimeType && g.overrideMimeType(c.mimeType);
                    c.crossDomain || e["X-Requested-With"] ||
                        (e["X-Requested-With"] = "XMLHttpRequest");
                    for (j in e) void 0 !== e[j] && g.setRequestHeader(j, e[j] + "");
                    g.send(c.hasContent && c.data || null);
                    d = function (b, e) {
                        var j, h, l;
                        if (d && (e || 4 === g.readyState))
                            if (delete pc[k], d = void 0, g.onreadystatechange = v.noop, e) 4 !== g.readyState && g.abort();
                            else {
                                l = {};
                                j = g.status;
                                "string" == typeof g.responseText && (l.text = g.responseText);
                                try {
                                    h = g.statusText
                                } catch (m) {
                                    h = ""
                                }
                                j || !c.isLocal || c.crossDomain ? 1223 === j && (j = 204) : j = l.text ? 200 : 404
                            }
                        l && f(j, h, l, g.getAllResponseHeaders())
                    };
                    c.async ? 4 === g.readyState ?
                        b.setTimeout(d) : g.onreadystatechange = pc[k] = d : d()
                },
                abort: function () {
                    d && d(void 0, !0)
                }
            }
        }
    });
    v.ajaxPrefilter(function (b) {
        b.crossDomain && (b.contents.script = !1)
    });
    v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (b) {
                return v.globalEval(b), b
            }
        }
    });
    v.ajaxPrefilter("script", function (b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    v.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var c, d = V.head || v("head")[0] || V.documentElement;
            return {
                send: function (e, f) {
                    c = V.createElement("script");
                    c.async = !0;
                    b.scriptCharset && (c.charset = b.scriptCharset);
                    c.src = b.url;
                    c.onload = c.onreadystatechange = function (b, d) {
                        (d || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, d || f(200, "success"))
                    };
                    d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(void 0, !0)
                }
            }
        }
    });
    var Zc = [],
        wb = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var b = Zc.pop() || v.expando + "_" + oc++;
            return this[b] = !0, b
        }
    });
    v.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, j, g, k = !1 !== c.jsonp && (wb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && wb.test(c.data) && "data");
        return k || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = v.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, k ? c[k] = c[k].replace(wb,
            "$1" + f) : !1 !== c.jsonp && (c.url += (Ba.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
                return g || v.error(f + " was not called"), g[0]
            }, c.dataTypes[0] = "json", j = b[f], b[f] = function () {
                g = arguments
            }, e.always(function () {
                void 0 === j ? v(b).removeProp(f) : b[f] = j;
                c[f] && (c.jsonpCallback = d.jsonpCallback, Zc.push(f));
                g && v.isFunction(j) && j(g[0]);
                g = j = void 0
            }), "script") : void 0
    });
    R.createHTMLDocument = function () {
        if (!V.implementation.createHTMLDocument) return !1;
        var b = V.implementation.createHTMLDocument("");
        return b.body.innerHTML = "<form></form><form></form>", 2 === b.body.childNodes.length
    }();
    v.parseHTML = function (b, c, d) {
        if (!b || "string" != typeof b) return null;
        "boolean" == typeof c && (d = c, c = !1);
        var c = c || (R.createHTMLDocument ? V.implementation.createHTMLDocument("") : V),
            e = nb.exec(b),
            d = !d && [];
        return e ? [c.createElement(e[1])] : (e = t([b], c, d), d && d.length && v(d).remove(), v.merge([], e.childNodes))
    };
    var rc = v.fn.load;
    v.fn.load = function (b, c, d) {
        if ("string" != typeof b && rc) return rc.apply(this, arguments);
        var e, f, j, g = this,
            k = b.indexOf(" ");
        return -1 < k && (e = v.trim(b.slice(k, b.length)), b = b.slice(0, k)), v.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (f = "POST"), 0 < g.length && v.ajax({
            url: b,
            type: f || "GET",
            dataType: "html",
            data: c
        }).done(function (b) {
            j = arguments;
            g.html(e ? v("<div>").append(v.parseHTML(b)).find(e) : b)
        }).always(d && function (b, c) {
            g.each(function () {
                d.apply(g, j || [b.responseText, c, b])
            })
        }), this
    };
    v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
        v.fn[c] = function (b) {
            return this.on(c, b)
        }
    });
    v.expr.filters.animated = function (b) {
        return v.grep(v.timers, function (c) {
            return b === c.elem
        }).length
    };
    v.offset = {
        setOffset: function (b, c, d) {
            var e, f, j, g, k, h, l = v.css(b, "position"),
                m = v(b),
                n = {};
            "static" === l && (b.style.position = "relative");
            k = m.offset();
            j = v.css(b, "top");
            h = v.css(b, "left");
            ("absolute" === l || "fixed" === l) && -1 < v.inArray("auto", [j, h]) ? (e = m.position(), g = e.top, f = e.left) : (g = parseFloat(j) || 0, f = parseFloat(h) || 0);
            v.isFunction(c) && (c = c.call(b, d, v.extend({}, k)));
            null != c.top && (n.top = c.top - k.top + g);
            null != c.left &&
                (n.left = c.left - k.left + f);
            "using" in c ? c.using.call(b, n) : m.css(n)
        }
    };
    v.fn.extend({
        offset: function (b) {
            if (arguments.length) return void 0 === b ? this : this.each(function (c) {
                v.offset.setOffset(this, b, c)
            });
            var c, d, e = {
                top: 0,
                left: 0
            },
                f = this[0],
                j = f && f.ownerDocument;
            if (j) return c = j.documentElement, v.contains(c, f) ? ("undefined" != typeof f.getBoundingClientRect && (e = f.getBoundingClientRect()), d = oa(j), {
                top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
                left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
            }) :
                e
        },
        position: function () {
            if (this[0]) {
                var b, c, d = {
                    top: 0,
                    left: 0
                },
                    e = this[0];
                return "fixed" === v.css(e, "position") ? c = e.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), v.nodeName(b[0], "html") || (d = b.offset()), d.top += v.css(b[0], "borderTopWidth", !0), d.left += v.css(b[0], "borderLeftWidth", !0)), {
                    top: c.top - d.top - v.css(e, "marginTop", !0),
                    left: c.left - d.left - v.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var b = this.offsetParent; b && !v.nodeName(b, "html") && "static" === v.css(b,
                        "position") ;) b = b.offsetParent;
                return b || Tb
            })
        }
    });
    v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b, c) {
        var d = /Y/.test(c);
        v.fn[b] = function (e) {
            return za(this, function (b, e, f) {
                var j = oa(b);
                return void 0 === f ? j ? c in j ? j[c] : j.document.documentElement[e] : b[e] : void (j ? j.scrollTo(d ? v(j).scrollLeft() : f, d ? f : v(j).scrollTop()) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    });
    v.each(["top", "left"], function (b, c) {
        v.cssHooks[c] = I(R.pixelPosition, function (b, d) {
            return d ? (d = sb(b, c), Za.test(d) ? v(b).position()[c] +
                "px" : d) : void 0
        })
    });
    v.each({
        Height: "height",
        Width: "width"
    }, function (b, c) {
        v.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function (d, e) {
            v.fn[e] = function (e, f) {
                var j = arguments.length && (d || "boolean" != typeof e),
                    g = d || (!0 === e || !0 === f ? "margin" : "border");
                return za(this, function (c, d, e) {
                    var f;
                    return v.isWindow(c) ? c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === e ? v.css(c, d, g) : v.style(c,
                        d, e, g)
                }, c, j ? e : void 0, j, null)
            }
        })
    });
    v.fn.extend({
        bind: function (b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function (b, c) {
            return this.off(b, null, c)
        },
        delegate: function (b, c, d, e) {
            return this.on(c, b, d, e)
        },
        undelegate: function (b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        }
    });
    v.fn.size = function () {
        return this.length
    };
    v.fn.andSelf = v.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return v
    });
    var td = b.jQuery,
        $c = b.$;
    return v.noConflict = function (c) {
        return b.$ ===
            v && (b.$ = $c), c && b.jQuery === v && (b.jQuery = td), v
    }, c || (b.jQuery = b.$ = v), v
});
(function (b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function (b) {
    function c(c, e) {
        var f, g, h, q = c.nodeName.toLowerCase();
        return "area" === q ? (f = c.parentNode, g = f.name, c.href && g && "map" === f.nodeName.toLowerCase() ? (h = b("img[usemap='#" + g + "']")[0], !!h && d(h)) : !1) : (/^(input|select|textarea|button|object)$/.test(q) ? !c.disabled : "a" === q ? c.href || e : e) && d(c)
    }

    function d(c) {
        return b.expr.filters.visible(c) && !b(c).parents().addBack().filter(function () {
            return "hidden" === b.css(this, "visibility")
        }).length
    }
    b.ui = b.ui || {};
    b.extend(b.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    b.fn.extend({
        scrollParent: function (c) {
            var d = this.css("position"),
                e = "absolute" === d,
                f = c ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                c = this.parents().filter(function () {
                    var c = b(this);
                    return e && "static" === c.css("position") ? !1 : f.test(c.css("overflow") + c.css("overflow-y") + c.css("overflow-x"))
                }).eq(0);
            return "fixed" !==
                d && c.length ? c : b(this[0].ownerDocument || document)
        },
        uniqueId: function () {
            var b = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++b)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && b(this).removeAttr("id")
            })
        }
    });
    b.extend(b.expr[":"], {
        data: b.expr.createPseudo ? b.expr.createPseudo(function (c) {
            return function (d) {
                return !!b.data(d, c)
            }
        }) : function (c, d, e) {
            return !!b.data(c, e[3])
        },
        focusable: function (d) {
            return c(d, !isNaN(b.attr(d, "tabindex")))
        },
        tabbable: function (d) {
            var e = b.attr(d, "tabindex"),
                f = isNaN(e);
            return (f || 0 <= e) && c(d, !f)
        }
    });
    b("<a>").outerWidth(1).jquery || b.each(["Width", "Height"], function (c, d) {
        function e(c, d, j, g) {
            return b.each(f, function () {
                d -= parseFloat(b.css(c, "padding" + this)) || 0;
                j && (d -= parseFloat(b.css(c, "border" + this + "Width")) || 0);
                g && (d -= parseFloat(b.css(c, "margin" + this)) || 0)
            }), d
        }
        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
            g = d.toLowerCase(),
            h = {
                innerWidth: b.fn.innerWidth,
                innerHeight: b.fn.innerHeight,
                outerWidth: b.fn.outerWidth,
                outerHeight: b.fn.outerHeight
            };
        b.fn["inner" + d] = function (c) {
            return void 0 === c ? h["inner" + d].call(this) : this.each(function () {
                b(this).css(g, e(this, c) + "px")
            })
        };
        b.fn["outer" + d] = function (c, f) {
            return "number" != typeof c ? h["outer" + d].call(this, c) : this.each(function () {
                b(this).css(g, e(this, c, !0, f) + "px")
            })
        }
    });
    b.fn.addBack || (b.fn.addBack = function (b) {
        return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
    });
    b("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (b.fn.removeData = function (c) {
        return function (d) {
            return arguments.length ?
                c.call(this, b.camelCase(d)) : c.call(this)
        }
    }(b.fn.removeData));
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.fn.extend({
        focus: function (c) {
            return function (d, e) {
                return "number" == typeof d ? this.each(function () {
                    var c = this;
                    setTimeout(function () {
                        b(c).focus();
                        e && e.call(c)
                    }, d)
                }) : c.apply(this, arguments)
            }
        }(b.fn.focus),
        disableSelection: function () {
            var b = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(b + ".ui-disableSelection", function (b) {
                    b.preventDefault()
                })
            }
        }(),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function (c) {
            if (void 0 !== c) return this.css("zIndex", c);
            if (this.length)
                for (var d, e, c = b(this[0]) ; c.length && c[0] !== document;) {
                    if (d = c.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(c.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                    c = c.parent()
                }
            return 0
        }
    });
    b.ui.plugin = {
        add: function (c, d, e) {
            var f, c = b.ui[c].prototype;
            for (f in e) c.plugins[f] = c.plugins[f] || [], c.plugins[f].push([d, e[f]])
        },
        call: function (b, c,
            d, e) {
            if ((c = b.plugins[c]) && (e || b.element[0].parentNode && 11 !== b.element[0].parentNode.nodeType))
                for (e = 0; c.length > e; e++) b.options[c[e][0]] && c[e][1].apply(b.element, d)
        }
    };
    var e = 0,
        f = Array.prototype.slice;
    b.cleanData = function (c) {
        return function (d) {
            var e, f, g;
            for (g = 0; null != (f = d[g]) ; g++) try {
                (e = b._data(f, "events")) && e.remove && b(f).triggerHandler("remove")
            } catch (h) { }
            c(d)
        }
    }(b.cleanData);
    b.widget = function (c, d, e) {
        var f, g, h, p, s = {},
            r = c.split(".")[0];
        return c = c.split(".")[1], f = r + "-" + c, e || (e = d, d = b.Widget), b.expr[":"][f.toLowerCase()] =
            function (c) {
                return !!b.data(c, f)
            }, b[r] = b[r] || {}, g = b[r][c], h = b[r][c] = function (b, c) {
                return this._createWidget ? (arguments.length && this._createWidget(b, c), void 0) : new h(b, c)
            }, b.extend(h, g, {
                version: e.version,
                _proto: b.extend({}, e),
                _childConstructors: []
            }), p = new d, p.options = b.widget.extend({}, p.options), b.each(e, function (c, e) {
                return b.isFunction(e) ? (s[c] = function () {
                    var b = function () {
                        return d.prototype[c].apply(this, arguments)
                    },
                        f = function (b) {
                            return d.prototype[c].apply(this, b)
                        };
                    return function () {
                        var c, d = this._super,
                            j = this._superApply;
                        return this._super = b, this._superApply = f, c = e.apply(this, arguments), this._super = d, this._superApply = j, c
                    }
                }(), void 0) : (s[c] = e, void 0)
            }), h.prototype = b.widget.extend(p, {
                widgetEventPrefix: g ? p.widgetEventPrefix || c : c
            }, s, {
                constructor: h,
                namespace: r,
                widgetName: c,
                widgetFullName: f
            }), g ? (b.each(g._childConstructors, function (c, d) {
                var e = d.prototype;
                b.widget(e.namespace + "." + e.widgetName, h, d._proto)
            }), delete g._childConstructors) : d._childConstructors.push(h), b.widget.bridge(c, h), h
    };
    b.widget.extend =
        function (c) {
            for (var d, e, g = f.call(arguments, 1), h = 0, q = g.length; q > h; h++)
                for (d in g[h]) e = g[h][d], g[h].hasOwnProperty(d) && void 0 !== e && (c[d] = b.isPlainObject(e) ? b.isPlainObject(c[d]) ? b.widget.extend({}, c[d], e) : b.widget.extend({}, e) : e);
            return c
        };
    b.widget.bridge = function (c, d) {
        var e = d.prototype.widgetFullName || c;
        b.fn[c] = function (g) {
            var h = "string" == typeof g,
                q = f.call(arguments, 1),
                p = this;
            return h ? this.each(function () {
                var d, f = b.data(this, e);
                return "instance" === g ? (p = f, !1) : f ? b.isFunction(f[g]) && "_" !== g.charAt(0) ?
                    (d = f[g].apply(f, q), d !== f && void 0 !== d ? (p = d && d.jquery ? p.pushStack(d.get()) : d, !1) : void 0) : b.error("no such method '" + g + "' for " + c + " widget instance") : b.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
            }) : (q.length && (g = b.widget.extend.apply(null, [g].concat(q))), this.each(function () {
                var c = b.data(this, e);
                c ? (c.option(g || {}), c._init && c._init()) : b.data(this, e, new d(g, this))
            })), p
        }
    };
    b.Widget = function () { };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (c, d) {
            d = b(d || this.defaultElement || this)[0];
            this.element = b(d);
            this.uuid = e++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            d !== this && (b.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (b) {
                    b.target === d && this.destroy()
                }
            }), this.document = b(d.style ? d.ownerDocument : d.document || d), this.window = b(this.document[0].defaultView ||
                this.document[0].parentWindow));
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), c);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName +
                "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return b.widget.extend({}, this.options);
            if ("string" == typeof c)
                if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                    f = h[c] = b.widget.extend({}, this.options[c]);
                    for (g = 0; e.length - 1 > g; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                    if (c = e.pop(), 1 === arguments.length) return void 0 ===
                        f[c] ? null : f[c];
                    f[c] = d
                } else {
                    if (1 === arguments.length) return void 0 === this.options[c] ? null : this.options[c];
                    h[c] = d
                }
            return this._setOptions(h), this
        },
        _setOptions: function (b) {
            for (var c in b) this._setOption(c, b[c]);
            return this
        },
        _setOption: function (b, c) {
            return this.options[b] = c, "disabled" === b && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!c), c && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (c, d, e) {
            var f, g = this;
            "boolean" != typeof c && (e = d, d = c, c = !1);
            e ? (d = f = b(d), this.bindings = this.bindings.add(d)) : (e = d, d = this.element, f = this.widget());
            b.each(e, function (e, h) {
                function l() {
                    return c || !0 !== g.options.disabled && !b(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : void 0
                }
                "string" != typeof h && (l.guid = h.guid = h.guid || l.guid || b.guid++);
                var r = e.match(/^([\w:-]*)\s*(.*)$/),
                    o = r[1] + g.eventNamespace;
                (r =
                    r[2]) ? f.delegate(r, o, l) : d.bind(o, l)
            })
        },
        _off: function (c, d) {
            d = (d || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            c.unbind(d).undelegate(d);
            this.bindings = b(this.bindings.not(c).get());
            this.focusable = b(this.focusable.not(c).get());
            this.hoverable = b(this.hoverable.not(c).get())
        },
        _delay: function (b, c) {
            var d = this;
            return setTimeout(function () {
                return ("string" == typeof b ? d[b] : b).apply(d, arguments)
            }, c || 0)
        },
        _hoverable: function (c) {
            this.hoverable = this.hoverable.add(c);
            this._on(c, {
                mouseenter: function (c) {
                    b(c.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (c) {
                    b(c.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (c) {
            this.focusable = this.focusable.add(c);
            this._on(c, {
                focusin: function (c) {
                    b(c.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (c) {
                    b(c.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (c, d, e) {
            var f, g = this.options[c];
            if (e = e || {}, d = b.Event(d), d.type = (c === this.widgetEventPrefix ? c : this.widgetEventPrefix + c).toLowerCase(), d.target = this.element[0], c = d.originalEvent)
                for (f in c) f in d ||
                    (d[f] = c[f]);
            return this.element.trigger(d, e), !(b.isFunction(g) && !1 === g.apply(this.element[0], [d].concat(e)) || d.isDefaultPrevented())
        }
    };
    b.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (c, d) {
        b.Widget.prototype["_" + c] = function (e, f, g) {
            "string" == typeof f && (f = {
                effect: f
            });
            var h, p = f ? !0 === f || "number" == typeof f ? d : f.effect || d : c,
                f = f || {};
            "number" == typeof f && (f = {
                duration: f
            });
            h = !b.isEmptyObject(f);
            f.complete = g;
            f.delay && e.delay(f.delay);
            h && b.effects && b.effects.effect[p] ? e[c](f) : p !== c && e[p] ? e[p](f.duration, f.easing,
                g) : e.queue(function (d) {
                    b(this)[c]();
                    g && g.call(e[0]);
                    d()
                })
        }
    });
    b.widget;
    var g = !1;
    b(document).mouseup(function () {
        g = !1
    });
    b.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var c = this;
            this.element.bind("mousedown." + this.widgetName, function (b) {
                return c._mouseDown(b)
            }).bind("click." + this.widgetName, function (d) {
                return !0 === b.data(d.target, c.widgetName + ".preventClickEvent") ? (b.removeData(d.target, c.widgetName + ".preventClickEvent"),
                    d.stopImmediatePropagation(), !1) : void 0
            });
            this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (c) {
            if (!g) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(c);
                this._mouseDownEvent = c;
                var d = this,
                    e = 1 === c.which,
                    f = "string" == typeof this.options.cancel && c.target.nodeName ? b(c.target).closest(this.options.cancel).length :
                    !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = !1 !== this._mouseStart(c), !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === b.data(c.target, this.widgetName + ".preventClickEvent") && b.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (b) {
                    return d._mouseMove(b)
                },
                    this._mouseUpDelegate = function (b) {
                        return d._mouseUp(b)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), g = !0, !0)) : !0
            }
        },
        _mouseMove: function (c) {
            return this._mouseMoved && (b.ui.ie && (!document.documentMode || 9 > document.documentMode) && !c.button || !c.which) ? this._mouseUp(c) : ((c.which || c.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(c), c.preventDefault()) : (this._mouseDistanceMet(c) && this._mouseDelayMet(c) &&
                (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, c), this._mouseStarted ? this._mouseDrag(c) : this._mouseUp(c)), !this._mouseStarted))
        },
        _mouseUp: function (c) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && b.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), g = !1, !1
        },
        _mouseDistanceMet: function (b) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX -
                b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () { },
        _mouseDrag: function () { },
        _mouseStop: function () { },
        _mouseCapture: function () {
            return !0
        }
    });
    (function () {
        function c(b, d, e) {
            return [parseFloat(b[0]) * (w.test(b[0]) ? d / 100 : 1), parseFloat(b[1]) * (w.test(b[1]) ? e / 100 : 1)]
        }

        function d(c, e) {
            return parseInt(b.css(c, e), 10) || 0
        }

        function e(c) {
            var d = c[0];
            return 9 === d.nodeType ? {
                width: c.width(),
                height: c.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : b.isWindow(d) ? {
                width: c.width(),
                height: c.height(),
                offset: {
                    top: c.scrollTop(),
                    left: c.scrollLeft()
                }
            } : d.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: d.pageY,
                    left: d.pageX
                }
            } : {
                width: c.outerWidth(),
                height: c.outerHeight(),
                offset: c.offset()
            }
        }
        b.ui = b.ui || {};
        var f, g, h = Math.max,
            p = Math.abs,
            s = Math.round,
            r = /left|center|right/,
            o = /top|center|bottom/,
            t = /[\+\-]\d+(\.[\d]+)?%?/,
            u = /^\w+/,
            w = /%$/,
            z = b.fn.position;
        b.position = {
            scrollbarWidth: function () {
                if (void 0 !== f) return f;
                var c, d, e = b("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    j = e.children()[0];
                return b("body").append(e), c = j.offsetWidth, e.css("overflow", "scroll"), d = j.offsetWidth, c === d && (d = e[0].clientWidth), e.remove(), f = c - d
            },
            getScrollInfo: function (c) {
                var d = c.isWindow || c.isDocument ? "" : c.element.css("overflow-x"),
                    e = c.isWindow || c.isDocument ? "" : c.element.css("overflow-y"),
                    d = "scroll" === d || "auto" === d && c.width < c.element[0].scrollWidth;
                return {
                    width: "scroll" === e || "auto" === e && c.height < c.element[0].scrollHeight ? b.position.scrollbarWidth() : 0,
                    height: d ? b.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function (c) {
                var c = b(c || window),
                    d = b.isWindow(c[0]),
                    e = !!c[0] && 9 === c[0].nodeType;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: c.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: d || e ? c.width() : c.outerWidth(),
                    height: d || e ? c.height() : c.outerHeight()
                }
            }
        };
        b.fn.position = function (f) {
            if (!f || !f.of) return z.apply(this, arguments);
            var f = b.extend({}, f),
                m, w, H, K, P, T, D = b(f.of),
                F = b.position.getWithinInfo(f.within),
                I = b.position.getScrollInfo(F),
                J = (f.collision || "flip").split(" "),
                N = {};
            return T = e(D), D[0].preventDefault && (f.at = "left top"), w = T.width, H = T.height, K = T.offset, P = b.extend({}, K), b.each(["my", "at"], function () {
                var b, c, d = (f[this] || "").split(" ");
                1 === d.length && (d = r.test(d[0]) ? d.concat(["center"]) : o.test(d[0]) ? ["center"].concat(d) : ["center", "center"]);
                d[0] = r.test(d[0]) ? d[0] : "center";
                d[1] = o.test(d[1]) ? d[1] : "center";
                b = t.exec(d[0]);
                c = t.exec(d[1]);
                N[this] = [b ? b[0] : 0, c ? c[0] : 0];
                f[this] = [u.exec(d[0])[0], u.exec(d[1])[0]]
            }), 1 === J.length && (J[1] = J[0]), "right" === f.at[0] ? P.left += w : "center" ===
                f.at[0] && (P.left += w / 2), "bottom" === f.at[1] ? P.top += H : "center" === f.at[1] && (P.top += H / 2), m = c(N.at, w, H), P.left += m[0], P.top += m[1], this.each(function () {
                    var e, l, o = b(this),
                        u = o.outerWidth(),
                        t = o.outerHeight(),
                        r = d(this, "marginLeft"),
                        z = d(this, "marginTop"),
                        X = u + r + d(this, "marginRight") + I.width,
                        aa = t + z + d(this, "marginBottom") + I.height,
                        Y = b.extend({}, P),
                        ba = c(N.my, o.outerWidth(), o.outerHeight());
                    "right" === f.my[0] ? Y.left -= u : "center" === f.my[0] && (Y.left -= u / 2);
                    "bottom" === f.my[1] ? Y.top -= t : "center" === f.my[1] && (Y.top -= t / 2);
                    Y.left +=
                        ba[0];
                    Y.top += ba[1];
                    g || (Y.left = s(Y.left), Y.top = s(Y.top));
                    e = {
                        marginLeft: r,
                        marginTop: z
                    };
                    b.each(["left", "top"], function (c, d) {
                        b.ui.position[J[c]] && b.ui.position[J[c]][d](Y, {
                            targetWidth: w,
                            targetHeight: H,
                            elemWidth: u,
                            elemHeight: t,
                            collisionPosition: e,
                            collisionWidth: X,
                            collisionHeight: aa,
                            offset: [m[0] + ba[0], m[1] + ba[1]],
                            my: f.my,
                            at: f.at,
                            within: F,
                            elem: o
                        })
                    });
                    f.using && (l = function (b) {
                        var c = K.left - Y.left,
                            d = c + w - u,
                            e = K.top - Y.top,
                            j = e + H - t,
                            g = {
                                target: {
                                    element: D,
                                    left: K.left,
                                    top: K.top,
                                    width: w,
                                    height: H
                                },
                                element: {
                                    element: o,
                                    left: Y.left,
                                    top: Y.top,
                                    width: u,
                                    height: t
                                },
                                horizontal: 0 > d ? "left" : 0 < c ? "right" : "center",
                                vertical: 0 > j ? "top" : 0 < e ? "bottom" : "middle"
                            };
                        u > w && w > p(c + d) && (g.horizontal = "center");
                        t > H && H > p(e + j) && (g.vertical = "middle");
                        g.important = h(p(c), p(d)) > h(p(e), p(j)) ? "horizontal" : "vertical";
                        f.using.call(this, b, g)
                    });
                    o.offset(b.extend(Y, {
                        using: l
                    }))
                })
        };
        b.ui.position = {
            fit: {
                left: function (b, c) {
                    var d, e = c.within,
                        f = e.isWindow ? e.scrollLeft : e.offset.left,
                        e = e.width,
                        j = b.left - c.collisionPosition.marginLeft,
                        g = f - j,
                        k = j + c.collisionWidth - e - f;
                    c.collisionWidth >
                        e ? 0 < g && 0 >= k ? (d = b.left + g + c.collisionWidth - e - f, b.left += g - d) : b.left = 0 < k && 0 >= g ? f : g > k ? f + e - c.collisionWidth : f : 0 < g ? b.left += g : 0 < k ? b.left -= k : b.left = h(b.left - j, b.left)
                },
                top: function (b, c) {
                    var d, e = c.within,
                        e = e.isWindow ? e.scrollTop : e.offset.top,
                        f = c.within.height,
                        j = b.top - c.collisionPosition.marginTop,
                        g = e - j,
                        k = j + c.collisionHeight - f - e;
                    c.collisionHeight > f ? 0 < g && 0 >= k ? (d = b.top + g + c.collisionHeight - f - e, b.top += g - d) : b.top = 0 < k && 0 >= g ? e : g > k ? e + f - c.collisionHeight : e : 0 < g ? b.top += g : 0 < k ? b.top -= k : b.top = h(b.top - j, b.top)
                }
            },
            flip: {
                left: function (b,
                    c) {
                    var d, e, f = c.within,
                        j = f.offset.left + f.scrollLeft,
                        g = f.width,
                        f = f.isWindow ? f.scrollLeft : f.offset.left,
                        k = b.left - c.collisionPosition.marginLeft,
                        h = k - f,
                        k = k + c.collisionWidth - g - f,
                        l = "left" === c.my[0] ? -c.elemWidth : "right" === c.my[0] ? c.elemWidth : 0,
                        m = "left" === c.at[0] ? c.targetWidth : "right" === c.at[0] ? -c.targetWidth : 0,
                        n = -2 * c.offset[0];
                    0 > h ? (d = b.left + l + m + n + c.collisionWidth - g - j, (0 > d || p(h) > d) && (b.left += l + m + n)) : 0 < k && (e = b.left - c.collisionPosition.marginLeft + l + m + n - f, (0 < e || k > p(e)) && (b.left += l + m + n))
                },
                top: function (b, c) {
                    var d,
                        e, f = c.within,
                        j = f.offset.top + f.scrollTop,
                        g = f.height,
                        f = f.isWindow ? f.scrollTop : f.offset.top,
                        k = b.top - c.collisionPosition.marginTop,
                        h = k - f,
                        k = k + c.collisionHeight - g - f,
                        l = "top" === c.my[1] ? -c.elemHeight : "bottom" === c.my[1] ? c.elemHeight : 0,
                        m = "top" === c.at[1] ? c.targetHeight : "bottom" === c.at[1] ? -c.targetHeight : 0,
                        n = -2 * c.offset[1];
                    0 > h ? (e = b.top + l + m + n + c.collisionHeight - g - j, (0 > e || p(h) > e) && (b.top += l + m + n)) : 0 < k && (d = b.top - c.collisionPosition.marginTop + l + m + n - f, (0 < d || k > p(d)) && (b.top += l + m + n))
                }
            },
            flipfit: {
                left: function () {
                    b.ui.position.flip.left.apply(this,
                        arguments);
                    b.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    b.ui.position.flip.top.apply(this, arguments);
                    b.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function () {
            var c, d, e, f, j = document.getElementsByTagName("body")[0];
            e = document.createElement("div");
            c = document.createElement(j ? "div" : "body");
            d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            j && b.extend(d, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (f in d) c.style[f] = d[f];
            c.appendChild(e);
            d = j || document.documentElement;
            d.insertBefore(c, d.firstChild);
            e.style.cssText = "position: absolute; left: 10.7432222px;";
            e = b(e).offset().left;
            g = 10 < e && 11 > e;
            c.innerHTML = "";
            d.removeChild(c)
        })()
    })();
    b.ui.position;
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function (b, c) {
            this._super(b, c);
            "handle" === b && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function (c) {
            var d = this.options;
            return this._blurActiveElement(c), this.helper || d.disabled || 0 < b(c.target).closest(".ui-resizable-handle").length ? !1 : (this.handle = this._getHandle(c), this.handle ? (this._blockFrames(!0 === d.iframeFix ?
                "iframe" : d.iframeFix), !0) : !1)
        },
        _blockFrames: function (c) {
            this.iframeBlocks = this.document.find(c).map(function () {
                var c = b(this);
                return b("<div>").css("position", "absolute").appendTo(c.parent()).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).offset(c.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (c) {
            var d = this.document[0];
            if (this.handleElement.is(c.target)) try {
                d.activeElement && "body" !== d.activeElement.nodeName.toLowerCase() &&
                    b(d.activeElement).blur()
            } catch (e) { }
        },
        _mouseStart: function (c) {
            var d = this.options;
            return this.helper = this._createHelper(c), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), b.ui.ddmanager && (b.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function () {
                return "fixed" === b(this).css("position")
            }).length,
                this.positionAbs = this.element.offset(), this._refreshOffsets(c), this.originalPosition = this.position = this._generatePosition(c, !1), this.originalPageX = c.pageX, this.originalPageY = c.pageY, d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt), this._setContainment(), !1 === this._trigger("start", c) ? (this._clear(), !1) : (this._cacheHelperProportions(), b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, c), this._normalizeRightBottom(), this._mouseDrag(c, !0), b.ui.ddmanager && b.ui.ddmanager.dragStart(this,
                    c), !0)
        },
        _refreshOffsets: function (b) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: b.pageX - this.offset.left,
                top: b.pageY - this.offset.top
            }
        },
        _mouseDrag: function (c, d) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(c, !0), this.positionAbs = this._convertPositionTo("absolute"), !d) {
                var e = this._uiHash();
                if (!1 === this._trigger("drag", c, e)) return this._mouseUp({}), !1;
                this.position = e.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", b.ui.ddmanager && b.ui.ddmanager.drag(this, c), !1
        },
        _mouseStop: function (c) {
            var d = this,
                e = !1;
            return b.ui.ddmanager && !this.options.dropBehaviour && (e = b.ui.ddmanager.drop(this, c)), this.dropped && (e = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !e || "valid" === this.options.revert && e || !0 === this.options.revert ||
                b.isFunction(this.options.revert) && this.options.revert.call(this.element, e) ? b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    !1 !== d._trigger("stop", c) && d._clear()
                }) : !1 !== this._trigger("stop", c) && this._clear(), !1
        },
        _mouseUp: function (c) {
            return this._unblockFrames(), b.ui.ddmanager && b.ui.ddmanager.dragStop(this, c), this.handleElement.is(c.target) && this.element.focus(), b.ui.mouse.prototype._mouseUp.call(this, c)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ?
                this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (c) {
            return this.options.handle ? !!b(c.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (c) {
            var d = this.options,
                e = b.isFunction(d.helper),
                c = e ? b(d.helper.apply(this.element[0], [c])) : "clone" === d.helper ? this.element.clone().removeAttr("id") : this.element;
            return c.parents("body").length || c.appendTo("parent" === d.appendTo ? this.element[0].parentNode : d.appendTo), e && c[0] === this.element[0] && this._setPositionRelative(), c[0] === this.element[0] || /(fixed|absolute)/.test(c.css("position")) || c.css("position", "absolute"), c
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (c) {
            "string" ==
            typeof c && (c = c.split(" "));
            b.isArray(c) && (c = {
                left: +c[0],
                top: +c[1] || 0
            });
            "left" in c && (this.offset.click.left = c.left + this.margins.left);
            "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left);
            "top" in c && (this.offset.click.top = c.top + this.margins.top);
            "bottom" in c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
        },
        _isRootNode: function (b) {
            return /(html|body)/i.test(b.tagName) || b === this.document[0]
        },
        _getParentOffset: function () {
            var c = this.offsetParent.offset(),
                d = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== d && b.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (c = {
                top: 0,
                left: 0
            }), {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var b =
                this.element.position(),
                c = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + (c ? 0 : this.scrollParent.scrollTop()),
                left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + (c ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) ||
                    0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var c, d, e, f = this.options,
                g = this.document[0];
            return this.relativeContainer = null, f.containment ? "window" === f.containment ? (this.containment = [b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, b(window).scrollLeft() + b(window).width() - this.helperProportions.width -
                this.margins.left, b(window).scrollTop() + (b(window).height() || g.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ], void 0) : "document" === f.containment ? (this.containment = [0, 0, b(g).width() - this.helperProportions.width - this.margins.left, (b(g).height() || g.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : f.containment.constructor === Array ? (this.containment = f.containment, void 0) : ("parent" === f.containment && (f.containment = this.helper[0].parentNode),
                d = b(f.containment), e = d[0], e && (c = /(scroll|auto)/.test(d.css("overflow")), this.containment = [(parseInt(d.css("borderLeftWidth"), 10) || 0) + (parseInt(d.css("paddingLeft"), 10) || 0), (parseInt(d.css("borderTopWidth"), 10) || 0) + (parseInt(d.css("paddingTop"), 10) || 0), (c ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(d.css("borderRightWidth"), 10) || 0) - (parseInt(d.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (c ? Math.max(e.scrollHeight, e.offsetHeight) :
                    e.offsetHeight) - (parseInt(d.css("borderBottomWidth"), 10) || 0) - (parseInt(d.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = d), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1,
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.offset.scroll.top : e ? 0 : this.offset.scroll.top) *
                    d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.offset.scroll.left : e ? 0 : this.offset.scroll.left) * d
            }
        },
        _generatePosition: function (b, c) {
            var d, e, f, g, h = this.options,
                s = this._isRootNode(this.scrollParent[0]),
                r = b.pageX,
                o = b.pageY;
            return s && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), c && (this.containment && (this.relativeContainer ? (e = this.relativeContainer.offset(), d = [this.containment[0] +
                e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top
            ]) : d = this.containment, b.pageX - this.offset.click.left < d[0] && (r = d[0] + this.offset.click.left), b.pageY - this.offset.click.top < d[1] && (o = d[1] + this.offset.click.top), b.pageX - this.offset.click.left > d[2] && (r = d[2] + this.offset.click.left), b.pageY - this.offset.click.top > d[3] && (o = d[3] + this.offset.click.top)), h.grid && (f = h.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / h.grid[1]) * h.grid[1] : this.originalPageY, o = d ? f - this.offset.click.top >=
                d[1] || f - this.offset.click.top > d[3] ? f : f - this.offset.click.top >= d[1] ? f - h.grid[1] : f + h.grid[1] : f, g = h.grid[0] ? this.originalPageX + Math.round((r - this.originalPageX) / h.grid[0]) * h.grid[0] : this.originalPageX, r = d ? g - this.offset.click.left >= d[0] || g - this.offset.click.left > d[2] ? g : g - this.offset.click.left >= d[0] ? g - h.grid[0] : g + h.grid[0] : g), "y" === h.axis && (r = this.originalPageX), "x" === h.axis && (o = this.originalPageY)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ?
                        -this.offset.scroll.top : s ? 0 : this.offset.scroll.top),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left)
                }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function () {
            "y" !== this.options.axis &&
                "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
            "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function (c, d, e) {
            return e = e || this._uiHash(), b.ui.plugin.call(this, c, [d, e, this], !0), /^(drag|start|stop)/.test(c) && (this.positionAbs = this._convertPositionTo("absolute"), e.offset = this.positionAbs), b.Widget.prototype._trigger.call(this, c, d, e)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    b.ui.plugin.add("draggable", "connectToSortable", {
        start: function (c, d, e) {
            var f = b.extend({}, d, {
                item: e.element
            });
            e.sortables = [];
            b(e.options.connectToSortable).each(function () {
                var d = b(this).sortable("instance");
                d && !d.options.disabled && (e.sortables.push(d), d.refreshPositions(), d._trigger("activate", c, f))
            })
        },
        stop: function (c, d, e) {
            var f = b.extend({}, d, {
                item: e.element
            });
            e.cancelHelperRemoval = !1;
            b.each(e.sortables, function () {
                this.isOver ? (this.isOver = 0, e.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left")
                }, this._mouseStop(c), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", c, f))
            })
        },
        drag: function (c, d, e) {
            b.each(e.sortables, function () {
                var f = !1,
                    g = this;
                g.positionAbs = e.positionAbs;
                g.helperProportions = e.helperProportions;
                g.offset.click =
                    e.offset.click;
                g._intersectsWith(g.containerCache) && (f = !0, b.each(e.sortables, function () {
                    return this.positionAbs = e.positionAbs, this.helperProportions = e.helperProportions, this.offset.click = e.offset.click, this !== g && this._intersectsWith(this.containerCache) && b.contains(g.element[0], this.element[0]) && (f = !1), f
                }));
                f ? (g.isOver || (g.isOver = 1, e._parent = d.helper.parent(), g.currentItem = d.helper.appendTo(g.element).data("ui-sortable-item", !0), g.options._helper = g.options.helper, g.options.helper = function () {
                    return d.helper[0]
                },
                    c.target = g.currentItem[0], g._mouseCapture(c, !0), g._mouseStart(c, !0, !0), g.offset.click.top = e.offset.click.top, g.offset.click.left = e.offset.click.left, g.offset.parent.left -= e.offset.parent.left - g.offset.parent.left, g.offset.parent.top -= e.offset.parent.top - g.offset.parent.top, e._trigger("toSortable", c), e.dropped = g.element, b.each(e.sortables, function () {
                        this.refreshPositions()
                    }), e.currentItem = e.element, g.fromOutside = e), g.currentItem && (g._mouseDrag(c), d.position = g.position)) : g.isOver && (g.isOver = 0, g.cancelHelperRemoval = !0, g.options._revert = g.options.revert, g.options.revert = !1, g._trigger("out", c, g._uiHash(g)), g._mouseStop(c, !0), g.options.revert = g.options._revert, g.options.helper = g.options._helper, g.placeholder && g.placeholder.remove(), d.helper.appendTo(e._parent), e._refreshOffsets(c), d.position = e._generatePosition(c, !0), e._trigger("fromSortable", c), e.dropped = !1, b.each(e.sortables, function () {
                        this.refreshPositions()
                    }))
            })
        }
    });
    b.ui.plugin.add("draggable", "cursor", {
        start: function (c, d, e) {
            c = b("body");
            e = e.options;
            c.css("cursor") &&
                (e._cursor = c.css("cursor"));
            c.css("cursor", e.cursor)
        },
        stop: function (c, d, e) {
            c = e.options;
            c._cursor && b("body").css("cursor", c._cursor)
        }
    });
    b.ui.plugin.add("draggable", "opacity", {
        start: function (c, d, e) {
            c = b(d.helper);
            e = e.options;
            c.css("opacity") && (e._opacity = c.css("opacity"));
            c.css("opacity", e.opacity)
        },
        stop: function (c, d, e) {
            c = e.options;
            c._opacity && b(d.helper).css("opacity", c._opacity)
        }
    });
    b.ui.plugin.add("draggable", "scroll", {
        start: function (b, c, d) {
            d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1));
            d.scrollParentNotHidden[0] !== d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset())
        },
        drag: function (c, d, e) {
            var d = e.options,
                f = !1,
                g = e.scrollParentNotHidden[0],
                h = e.document[0];
            g !== h && "HTML" !== g.tagName ? (d.axis && "x" === d.axis || (e.overflowOffset.top + g.offsetHeight - c.pageY < d.scrollSensitivity ? g.scrollTop = f = g.scrollTop + d.scrollSpeed : c.pageY - e.overflowOffset.top < d.scrollSensitivity && (g.scrollTop = f = g.scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (e.overflowOffset.left +
                g.offsetWidth - c.pageX < d.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + d.scrollSpeed : c.pageX - e.overflowOffset.left < d.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (c.pageY - b(h).scrollTop() < d.scrollSensitivity ? f = b(h).scrollTop(b(h).scrollTop() - d.scrollSpeed) : b(window).height() - (c.pageY - b(h).scrollTop()) < d.scrollSensitivity && (f = b(h).scrollTop(b(h).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (c.pageX - b(h).scrollLeft() < d.scrollSensitivity ? f = b(h).scrollLeft(b(h).scrollLeft() -
                d.scrollSpeed) : b(window).width() - (c.pageX - b(h).scrollLeft()) < d.scrollSensitivity && (f = b(h).scrollLeft(b(h).scrollLeft() + d.scrollSpeed))));
            !1 !== f && b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(e, c)
        }
    });
    b.ui.plugin.add("draggable", "snap", {
        start: function (c, d, e) {
            c = e.options;
            e.snapElements = [];
            b(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function () {
                var c = b(this),
                    d = c.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        },
        drag: function (c, d, e) {
            var f, g, h, p, s, r, o, t, u, w, z = e.options,
                A = z.snapTolerance,
                C = d.offset.left,
                G = C + e.helperProportions.width,
                H = d.offset.top,
                K = H + e.helperProportions.height;
            for (u = e.snapElements.length - 1; 0 <= u; u--) s = e.snapElements[u].left - e.margins.left, r = s + e.snapElements[u].width, o = e.snapElements[u].top - e.margins.top, t = o + e.snapElements[u].height, s - A > G || C > r + A || o - A > K || H > t + A || !b.contains(e.snapElements[u].item.ownerDocument, e.snapElements[u].item) ? (e.snapElements[u].snapping && e.options.snap.release &&
                e.options.snap.release.call(e.element, c, b.extend(e._uiHash(), {
                    snapItem: e.snapElements[u].item
                })), e.snapElements[u].snapping = !1) : ("inner" !== z.snapMode && (f = A >= Math.abs(o - K), g = A >= Math.abs(t - H), h = A >= Math.abs(s - G), p = A >= Math.abs(r - C), f && (d.position.top = e._convertPositionTo("relative", {
                    top: o - e.helperProportions.height,
                    left: 0
                }).top), g && (d.position.top = e._convertPositionTo("relative", {
                    top: t,
                    left: 0
                }).top), h && (d.position.left = e._convertPositionTo("relative", {
                    top: 0,
                    left: s - e.helperProportions.width
                }).left), p &&
                (d.position.left = e._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left)), w = f || g || h || p, "outer" !== z.snapMode && (f = A >= Math.abs(o - H), g = A >= Math.abs(t - K), h = A >= Math.abs(s - C), p = A >= Math.abs(r - G), f && (d.position.top = e._convertPositionTo("relative", {
                    top: o,
                    left: 0
                }).top), g && (d.position.top = e._convertPositionTo("relative", {
                    top: t - e.helperProportions.height,
                    left: 0
                }).top), h && (d.position.left = e._convertPositionTo("relative", {
                    top: 0,
                    left: s
                }).left), p && (d.position.left = e._convertPositionTo("relative", {
                    top: 0,
                    left: r - e.helperProportions.width
                }).left)), !e.snapElements[u].snapping && (f || g || h || p || w) && e.options.snap.snap && e.options.snap.snap.call(e.element, c, b.extend(e._uiHash(), {
                    snapItem: e.snapElements[u].item
                })), e.snapElements[u].snapping = f || g || h || p || w)
        }
    });
    b.ui.plugin.add("draggable", "stack", {
        start: function (c, d, e) {
            var f, c = b.makeArray(b(e.options.stack)).sort(function (c, d) {
                return (parseInt(b(c).css("zIndex"), 10) || 0) - (parseInt(b(d).css("zIndex"), 10) || 0)
            });
            c.length && (f = parseInt(b(c[0]).css("zIndex"), 10) || 0, b(c).each(function (c) {
                b(this).css("zIndex", f +
                    c)
            }), this.css("zIndex", f + c.length))
        }
    });
    b.ui.plugin.add("draggable", "zIndex", {
        start: function (c, d, e) {
            c = b(d.helper);
            e = e.options;
            c.css("zIndex") && (e._zIndex = c.css("zIndex"));
            c.css("zIndex", e.zIndex)
        },
        stop: function (c, d, e) {
            c = e.options;
            c._zIndex && b(d.helper).css("zIndex", c._zIndex)
        }
    });
    b.ui.draggable;
    b.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var c, d = this.options,
                e = d.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = b.isFunction(e) ? e : function (b) {
                return b.is(e)
            };
            this.proportions = function () {
                return arguments.length ? (c = arguments[0], void 0) : c ? c : c = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(d.scope);
            d.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function (c) {
            b.ui.ddmanager.droppables[c] = b.ui.ddmanager.droppables[c] || [];
            b.ui.ddmanager.droppables[c].push(this)
        },
        _splice: function (b) {
            for (var c = 0; b.length > c; c++) b[c] === this && b.splice(c, 1)
        },
        _destroy: function () {
            this._splice(b.ui.ddmanager.droppables[this.options.scope]);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (c, d) {
            "accept" === c ? this.accept = b.isFunction(d) ? d : function (b) {
                return b.is(d)
            } : "scope" === c && (this._splice(b.ui.ddmanager.droppables[this.options.scope]), this._addToManager(d));
            this._super(c, d)
        },
        _activate: function (c) {
            var d = b.ui.ddmanager.current;
            this.options.activeClass &&
                this.element.addClass(this.options.activeClass);
            d && this._trigger("activate", c, this.ui(d))
        },
        _deactivate: function (c) {
            var d = b.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            d && this._trigger("deactivate", c, this.ui(d))
        },
        _over: function (c) {
            var d = b.ui.ddmanager.current;
            d && (d.currentItem || d.element)[0] !== this.element[0] && this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over",
                c, this.ui(d)))
        },
        _out: function (c) {
            var d = b.ui.ddmanager.current;
            d && (d.currentItem || d.element)[0] !== this.element[0] && this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", c, this.ui(d)))
        },
        _drop: function (c, d) {
            var e = d || b.ui.ddmanager.current,
                f = !1;
            return e && (e.currentItem || e.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var d = b(this).droppable("instance");
                return d.options.greedy && !d.options.disabled && d.options.scope === e.options.scope && d.accept.call(d.element[0], e.currentItem || e.element) && b.ui.intersect(e, b.extend(d, {
                    offset: d.element.offset()
                }), d.options.tolerance, c) ? (f = !0, !1) : void 0
            }), f ? !1 : this.accept.call(this.element[0], e.currentItem || e.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", c, this.ui(e)), this.element) : !1) :
                !1
        },
        ui: function (b) {
            return {
                draggable: b.currentItem || b.element,
                helper: b.helper,
                position: b.position,
                offset: b.positionAbs
            }
        }
    });
    b.ui.intersect = function () {
        return function (b, c, d, e) {
            if (!c.offset) return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
                g = (b.positionAbs || b.position.absolute).top + b.margins.top,
                h = f + b.helperProportions.width,
                s = g + b.helperProportions.height,
                r = c.offset.left,
                o = c.offset.top,
                t = r + c.proportions().width,
                u = o + c.proportions().height;
            switch (d) {
                case "fit":
                    return f >= r && t >= h && g >=
                        o && u >= s;
                case "intersect":
                    return f + b.helperProportions.width / 2 > r && t > h - b.helperProportions.width / 2 && g + b.helperProportions.height / 2 > o && u > s - b.helperProportions.height / 2;
                case "pointer":
                    b = e.pageY;
                    d = c.proportions().height;
                    if (o = b >= o && o + d > b) e = e.pageX, c = c.proportions().width, o = e >= r && r + c > e;
                    return o;
                case "touch":
                    return (g >= o && u >= g || s >= o && u >= s || o > g && s > u) && (f >= r && t >= f || h >= r && t >= h || r > f && h > t);
                default:
                    return !1
            }
        }
    }();
    b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (c, d) {
            var e, f, g = b.ui.ddmanager.droppables[c.options.scope] || [],
                h = d ? d.type : null,
                p = (c.currentItem || c.element).find(":data(ui-droppable)").addBack();
            e = 0;
            a: for (; g.length > e; e++)
                if (!(g[e].options.disabled || c && !g[e].accept.call(g[e].element[0], c.currentItem || c.element))) {
                    for (f = 0; p.length > f; f++)
                        if (p[f] === g[e].element[0]) {
                            g[e].proportions().height = 0;
                            continue a
                        }
                    g[e].visible = "none" !== g[e].element.css("display");
                    g[e].visible && ("mousedown" === h && g[e]._activate.call(g[e], d), g[e].offset = g[e].element.offset(), g[e].proportions({
                        width: g[e].element[0].offsetWidth,
                        height: g[e].element[0].offsetHeight
                    }))
                }
        },
        drop: function (c, d) {
            var e = !1;
            return b.each((b.ui.ddmanager.droppables[c.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && b.ui.intersect(c, this, this.options.tolerance, d) && (e = this._drop.call(this, d) || e), !this.options.disabled && this.visible && this.accept.call(this.element[0], c.currentItem || c.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, d)))
            }), e
        },
        dragStart: function (c, d) {
            c.element.parentsUntil("body").bind("scroll.droppable", function () {
                c.options.refreshPositions ||
                    b.ui.ddmanager.prepareOffsets(c, d)
            })
        },
        drag: function (c, d) {
            c.options.refreshPositions && b.ui.ddmanager.prepareOffsets(c, d);
            b.each(b.ui.ddmanager.droppables[c.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var e, f, g, h = b.ui.intersect(c, this, this.options.tolerance, d);
                    (h = !h && this.isover ? "isout" : h && !this.isover ? "isover" : null) && (this.options.greedy && (f = this.options.scope, g = this.element.parents(":data(ui-droppable)").filter(function () {
                        return b(this).droppable("instance").options.scope ===
                            f
                    }), g.length && (e = b(g[0]).droppable("instance"), e.greedyChild = "isover" === h)), e && "isover" === h && (e.isover = !1, e.isout = !0, e._out.call(e, d)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, d), e && "isout" === h && (e.isout = !1, e.isover = !0, e._over.call(e, d)))
                }
            })
        },
        dragStop: function (c, d) {
            c.element.parentsUntil("body").unbind("scroll.droppable");
            c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
        }
    };
    b.ui.droppable;
    b.widget("ui.resizable", b.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (b) {
            return parseInt(b, 10) || 0
        },
        _isNumber: function (b) {
            return !isNaN(parseInt(b, 10))
        },
        _hasScroll: function (c, d) {
            if ("hidden" === b(c).css("overflow")) return !1;
            var e = d && "left" === d ? "scrollLeft" : "scrollTop";
            return 0 <
                c[e] ? !0 : (c[e] = 1, c[e] = 0, !1)
        },
        _create: function () {
            var c, d, e, f, g, h = this,
                p = this.options;
            if (this.element.addClass("ui-resizable"), b.extend(this, {
                _aspectRatio: !!p.aspectRatio,
                aspectRatio: p.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: p.helper || p.ghost || p.animate ? p.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(b("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = p.handles || (b(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = b(), this.handles.constructor === String) {
                "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                c = this.handles.split(",");
                this.handles = {};
                for (d = 0; c.length > d; d++) e = b.trim(c[d]), g = "ui-resizable-" + e, f = b("<div class='ui-resizable-handle " + g + "'></div>"), f.css({
                    zIndex: p.zIndex
                }), "se" === e && f.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[e] = ".ui-resizable-" + e, this.element.append(f)
            }
            this._renderAxis =
                function (c) {
                    var d, e, f, g, c = c || this.element;
                    for (d in this.handles) this.handles[d].constructor === String ? this.handles[d] = this.element.children(this.handles[d]).first().show() : (this.handles[d].jquery || this.handles[d].nodeType) && (this.handles[d] = b(this.handles[d]), this._on(this.handles[d], {
                        mousedown: h._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (e = b(this.handles[d], this.element), g = /sw|ne|nw|se|n|s/.test(d) ? e.outerHeight() : e.outerWidth(),
                        f = ["padding", /ne|nw|n/.test(d) ? "Top" : /se|sw|s/.test(d) ? "Bottom" : /^e$/.test(d) ? "Right" : "Left"].join(""), c.css(f, g), this._proportionallyResize()), this._handles = this._handles.add(this.handles[d])
                };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.mouseover(function () {
                h.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), h.axis = f && f[1] ? f[1] : "se")
            });
            p.autoHide &&
                (this._handles.hide(), b(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    p.disabled || (b(this).removeClass("ui-resizable-autohide"), h._handles.show())
                }).mouseleave(function () {
                    p.disabled || h.resizing || (b(this).addClass("ui-resizable-autohide"), h._handles.hide())
                }));
            this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var c, d = function (c) {
                b(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (d(this.element), c = this.element, this.originalElement.css({
                position: c.css("position"),
                width: c.outerWidth(),
                height: c.outerHeight(),
                top: c.css("top"),
                left: c.css("left")
            }).insertAfter(c), c.remove()), this.originalElement.css("resize", this.originalResizeStyle), d(this.originalElement), this
        },
        _mouseCapture: function (c) {
            var d, e, f = !1;
            for (d in this.handles) e = b(this.handles[d])[0], (e === c.target || b.contains(e, c.target)) && (f = !0);
            return !this.options.disabled && f
        },
        _mouseStart: function (c) {
            var d,
                e, f, g = this.options,
                h = this.element;
            return this.resizing = !0, this._renderProxy(), d = this._num(this.helper.css("left")), e = this._num(this.helper.css("top")), g.containment && (d += b(g.containment).scrollLeft() || 0, e += b(g.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: d,
                top: e
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalPosition = {
                left: d,
                top: e
            }, this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, f = b(".ui-resizable-" + this.axis).css("cursor"), b("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), h.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
        },
        _mouseDrag: function (c) {
            var d,
                e, f = this.originalMousePosition,
                g = c.pageX - f.left || 0,
                f = c.pageY - f.top || 0,
                h = this._change[this.axis];
            return this._updatePrevProperties(), h ? (d = h.apply(this, [c, g, f]), this._updateVirtualBoundaries(c.shiftKey), (this._aspectRatio || c.shiftKey) && (d = this._updateRatio(d, c)), d = this._respectSize(d, c), this._updateCache(d), this._propagate("resize", c), e = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), b.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize",
                c, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (c) {
            this.resizing = !1;
            var d, e, f, g, h, p, s, r = this.options;
            return this._helper && (d = this._proportionallyResizeElements, e = d.length && /textarea/i.test(d[0].nodeName), f = e && this._hasScroll(d[0], "left") ? 0 : this.sizeDiff.height, g = e ? 0 : this.sizeDiff.width, h = {
                width: this.helper.width() - g,
                height: this.helper.height() - f
            }, p = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, s = parseInt(this.element.css("top"), 10) + (this.position.top -
                this.originalPosition.top) || null, r.animate || this.element.css(b.extend(h, {
                    top: s,
                    left: p
                })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !r.animate && this._proportionallyResize()), b("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", c), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function () {
            var b = {};
            return this.position.top !== this.prevPosition.top && (b.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (b.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (b.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (b.height = this.size.height + "px"), this.helper.css(b), b
        },
        _updateVirtualBoundaries: function (b) {
            var c, d, e, f, g;
            g = this.options;
            g = {
                minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                maxWidth: this._isNumber(g.maxWidth) ?
                    g.maxWidth : 1 / 0,
                minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
            };
            (this._aspectRatio || b) && (c = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, c > g.minWidth && (g.minWidth = c), e > g.minHeight && (g.minHeight = e), g.maxWidth > d && (g.maxWidth = d), g.maxHeight > f && (g.maxHeight = f));
            this._vBoundaries = g
        },
        _updateCache: function (b) {
            this.offset = this.helper.offset();
            this._isNumber(b.left) && (this.position.left =
                b.left);
            this._isNumber(b.top) && (this.position.top = b.top);
            this._isNumber(b.height) && (this.size.height = b.height);
            this._isNumber(b.width) && (this.size.width = b.width)
        },
        _updateRatio: function (b) {
            var c = this.position,
                d = this.size,
                e = this.axis;
            return this._isNumber(b.height) ? b.width = b.height * this.aspectRatio : this._isNumber(b.width) && (b.height = b.width / this.aspectRatio), "sw" === e && (b.left = c.left + (d.width - b.width), b.top = null), "nw" === e && (b.top = c.top + (d.height - b.height), b.left = c.left + (d.width - b.width)), b
        },
        _respectSize: function (b) {
            var c =
                this._vBoundaries,
                d = this.axis,
                e = this._isNumber(b.width) && c.maxWidth && c.maxWidth < b.width,
                f = this._isNumber(b.height) && c.maxHeight && c.maxHeight < b.height,
                g = this._isNumber(b.width) && c.minWidth && c.minWidth > b.width,
                h = this._isNumber(b.height) && c.minHeight && c.minHeight > b.height,
                s = this.originalPosition.left + this.originalSize.width,
                r = this.position.top + this.size.height,
                o = /sw|nw|w/.test(d),
                d = /nw|ne|n/.test(d);
            return g && (b.width = c.minWidth), h && (b.height = c.minHeight), e && (b.width = c.maxWidth), f && (b.height = c.maxHeight),
                g && o && (b.left = s - c.minWidth), e && o && (b.left = s - c.maxWidth), h && d && (b.top = r - c.minHeight), f && d && (b.top = r - c.maxHeight), b.width || b.height || b.left || !b.top ? b.width || b.height || b.top || !b.left || (b.left = null) : b.top = null, b
        },
        _getPaddingPlusBorderDimensions: function (b) {
            for (var c = 0, d = [], e = [b.css("borderTopWidth"), b.css("borderRightWidth"), b.css("borderBottomWidth"), b.css("borderLeftWidth")], b = [b.css("paddingTop"), b.css("paddingRight"), b.css("paddingBottom"), b.css("paddingLeft")]; 4 > c; c++) d[c] = parseInt(e[c], 10) || 0, d[c] +=
                parseInt(b[c], 10) || 0;
            return {
                height: d[0] + d[2],
                width: d[1] + d[3]
            }
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var b, c = 0, d = this.helper || this.element; this._proportionallyResizeElements.length > c; c++) b = this._proportionallyResizeElements[c], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(b)), b.css({
                    height: d.height() - this.outerDimensions.height || 0,
                    width: d.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function () {
            var c = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || b("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (b, c) {
                return {
                    width: this.originalSize.width + c
                }
            },
            w: function (b, c) {
                return {
                    left: this.originalPosition.left +
                        c,
                    width: this.originalSize.width - c
                }
            },
            n: function (b, c, d) {
                return {
                    top: this.originalPosition.top + d,
                    height: this.originalSize.height - d
                }
            },
            s: function (b, c, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function (c, d, e) {
                return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [c, d, e]))
            },
            sw: function (c, d, e) {
                return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [c, d, e]))
            },
            ne: function (c, d, e) {
                return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [c, d, e]))
            },
            nw: function (c, d, e) {
                return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [c, d, e]))
            }
        },
        _propagate: function (c, d) {
            b.ui.plugin.call(this, c, [d, this.ui()]);
            "resize" !== c && this._trigger(c, d, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    b.ui.plugin.add("resizable", "animate", {
        stop: function (c) {
            var d =
                b(this).resizable("instance"),
                e = d.options,
                f = d._proportionallyResizeElements,
                g = f.length && /textarea/i.test(f[0].nodeName),
                h = g && d._hasScroll(f[0], "left") ? 0 : d.sizeDiff.height,
                g = {
                    width: d.size.width - (g ? 0 : d.sizeDiff.width),
                    height: d.size.height - h
                },
                h = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
                p = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
            d.element.animate(b.extend(g, p && h ? {
                top: p,
                left: h
            } : {}), {
                duration: e.animateDuration,
                easing: e.animateEasing,
                step: function () {
                    var e = {
                        width: parseInt(d.element.css("width"), 10),
                        height: parseInt(d.element.css("height"), 10),
                        top: parseInt(d.element.css("top"), 10),
                        left: parseInt(d.element.css("left"), 10)
                    };
                    f && f.length && b(f[0]).css({
                        width: e.width,
                        height: e.height
                    });
                    d._updateCache(e);
                    d._propagate("resize", c)
                }
            })
        }
    });
    b.ui.plugin.add("resizable", "containment", {
        start: function () {
            var c, d, e, f, g, h, p, s = b(this).resizable("instance"),
                r = s.element,
                o = s.options.containment;
            (r = o instanceof b ? o.get(0) : /parent/.test(o) ? r.parent().get(0) :
                o) && (s.containerElement = b(r), /document/.test(o) || o === document ? (s.containerOffset = {
                    left: 0,
                    top: 0
                }, s.containerPosition = {
                    left: 0,
                    top: 0
                }, s.parentData = {
                    element: b(document),
                    left: 0,
                    top: 0,
                    width: b(document).width(),
                    height: b(document).height() || document.body.parentNode.scrollHeight
                }) : (c = b(r), d = [], b(["Top", "Right", "Left", "Bottom"]).each(function (b, e) {
                    d[b] = s._num(c.css("padding" + e))
                }), s.containerOffset = c.offset(), s.containerPosition = c.position(), s.containerSize = {
                    height: c.innerHeight() - d[3],
                    width: c.innerWidth() -
                        d[1]
                }, e = s.containerOffset, f = s.containerSize.height, g = s.containerSize.width, h = s._hasScroll(r, "left") ? r.scrollWidth : g, p = s._hasScroll(r) ? r.scrollHeight : f, s.parentData = {
                    element: r,
                    left: e.left,
                    top: e.top,
                    width: h,
                    height: p
                }))
        },
        resize: function (c) {
            var d, e, f, g = b(this).resizable("instance");
            d = g.options;
            e = g.containerOffset;
            f = g.position;
            var c = g._aspectRatio || c.shiftKey,
                h = {
                    top: 0,
                    left: 0
                },
                p = g.containerElement,
                s = !0;
            p[0] !== document && /static/.test(p.css("position")) && (h = e);
            f.left < (g._helper ? e.left : 0) && (g.size.width +=
                g._helper ? g.position.left - e.left : g.position.left - h.left, c && (g.size.height = g.size.width / g.aspectRatio, s = !1), g.position.left = d.helper ? e.left : 0);
            f.top < (g._helper ? e.top : 0) && (g.size.height += g._helper ? g.position.top - e.top : g.position.top, c && (g.size.width = g.size.height * g.aspectRatio, s = !1), g.position.top = g._helper ? e.top : 0);
            d = g.containerElement.get(0) === g.element.parent().get(0);
            f = /relative|absolute/.test(g.containerElement.css("position"));
            d && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top =
                g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top);
            d = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - h.left : g.offset.left - e.left));
            e = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - h.top : g.offset.top - e.top));
            d + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - d, c && (g.size.height = g.size.width / g.aspectRatio, s = !1));
            e + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - e, c && (g.size.width = g.size.height *
                g.aspectRatio, s = !1));
            s || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
        },
        stop: function () {
            var c = b(this).resizable("instance"),
                d = c.options,
                e = c.containerOffset,
                f = c.containerPosition,
                g = c.containerElement,
                h = b(c.helper),
                p = h.offset(),
                s = h.outerWidth() - c.sizeDiff.width,
                h = h.outerHeight() - c.sizeDiff.height;
            c._helper && !d.animate && /relative/.test(g.css("position")) && b(this).css({
                left: p.left - f.left - e.left,
                width: s,
                height: h
            });
            c._helper &&
                !d.animate && /static/.test(g.css("position")) && b(this).css({
                    left: p.left - f.left - e.left,
                    width: s,
                    height: h
                })
        }
    });
    b.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var c = b(this).resizable("instance").options;
            b(c.alsoResize).each(function () {
                var c = b(this);
                c.data("ui-resizable-alsoresize", {
                    width: parseInt(c.width(), 10),
                    height: parseInt(c.height(), 10),
                    left: parseInt(c.css("left"), 10),
                    top: parseInt(c.css("top"), 10)
                })
            })
        },
        resize: function (c, d) {
            var e = b(this).resizable("instance"),
                f = e.originalSize,
                g = e.originalPosition,
                h = {
                    height: e.size.height - f.height || 0,
                    width: e.size.width - f.width || 0,
                    top: e.position.top - g.top || 0,
                    left: e.position.left - g.left || 0
                };
            b(e.options.alsoResize).each(function () {
                var c = b(this),
                    e = b(this).data("ui-resizable-alsoresize"),
                    f = {},
                    g = c.parents(d.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                b.each(g, function (b, c) {
                    var d = (e[c] || 0) + (h[c] || 0);
                    d && 0 <= d && (f[c] = d || null)
                });
                c.css(f)
            })
        },
        stop: function () {
            b(this).removeData("resizable-alsoresize")
        }
    });
    b.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var c = b(this).resizable("instance"),
                d = c.options,
                e = c.size;
            c.ghost = c.originalElement.clone();
            c.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof d.ghost ? d.ghost : "");
            c.ghost.appendTo(c.helper)
        },
        resize: function () {
            var c = b(this).resizable("instance");
            c.ghost && c.ghost.css({
                position: "relative",
                height: c.size.height,
                width: c.size.width
            })
        },
        stop: function () {
            var c = b(this).resizable("instance");
            c.ghost && c.helper && c.helper.get(0).removeChild(c.ghost.get(0))
        }
    });
    b.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var c, d = b(this).resizable("instance"),
                e = d.options,
                f = d.size,
                g = d.originalSize,
                h = d.originalPosition,
                p = d.axis,
                s = "number" == typeof e.grid ? [e.grid, e.grid] : e.grid,
                r = s[0] || 1,
                o = s[1] || 1,
                t = Math.round((f.width - g.width) / r) * r,
                f = Math.round((f.height - g.height) / o) * o,
                u = g.width + t,
                w = g.height + f,
                z = e.maxWidth && u > e.maxWidth,
                A = e.maxHeight && w > e.maxHeight,
                C = e.minWidth && e.minWidth > u,
                G = e.minHeight && e.minHeight >
                w;
            e.grid = s;
            C && (u += r);
            G && (w += o);
            z && (u -= r);
            A && (w -= o);
            /^(se|s|e)$/.test(p) ? (d.size.width = u, d.size.height = w) : /^(ne)$/.test(p) ? (d.size.width = u, d.size.height = w, d.position.top = h.top - f) : /^(sw)$/.test(p) ? (d.size.width = u, d.size.height = w, d.position.left = h.left - t) : ((0 >= w - o || 0 >= u - r) && (c = d._getPaddingPlusBorderDimensions(this)), 0 < w - o ? (d.size.height = w, d.position.top = h.top - f) : (w = o - c.height, d.size.height = w, d.position.top = h.top + g.height - w), 0 < u - r ? (d.size.width = u, d.position.left = h.left - t) : (u = r - c.width, d.size.width = u,
                d.position.left = h.left + g.width - u))
        }
    });
    b.ui.resizable;
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var c, d = this;
            this.element.addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function () {
                c = b(d.options.filter, d.element[0]);
                c.addClass("ui-selectee");
                c.each(function () {
                    var c = b(this),
                        d = c.offset();
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: c,
                        left: d.left,
                        top: d.top,
                        right: d.left + c.outerWidth(),
                        bottom: d.top + c.outerHeight(),
                        startselected: !1,
                        selected: c.hasClass("ui-selected"),
                        selecting: c.hasClass("ui-selecting"),
                        unselecting: c.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = c.addClass("ui-selectee");
            this._mouseInit();
            this.helper = b("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function (c) {
            var d = this,
                e = this.options;
            this.opos = [c.pageX, c.pageY];
            this.options.disabled || (this.selectees = b(e.filter, this.element[0]), this._trigger("start", c), b(e.appendTo).append(this.helper), this.helper.css({
                left: c.pageX,
                top: c.pageY,
                width: 0,
                height: 0
            }), e.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var e = b.data(this, "selectable-item");
                e.startselected = !0;
                c.metaKey || c.ctrlKey || (e.$element.removeClass("ui-selected"), e.selected = !1,
                    e.$element.addClass("ui-unselecting"), e.unselecting = !0, d._trigger("unselecting", c, {
                        unselecting: e.element
                    }))
            }), b(c.target).parents().addBack().each(function () {
                var e, f = b.data(this, "selectable-item");
                return f ? (e = !c.metaKey && !c.ctrlKey || !f.$element.hasClass("ui-selected"), f.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), f.unselecting = !e, f.selecting = e, f.selected = e, e ? d._trigger("selecting", c, {
                    selecting: f.element
                }) : d._trigger("unselecting", c, {
                    unselecting: f.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function (c) {
            if (this.dragged = !0, !this.options.disabled) {
                var d, e = this,
                    f = this.options,
                    g = this.opos[0],
                    h = this.opos[1],
                    p = c.pageX,
                    s = c.pageY;
                return g > p && (d = p, p = g, g = d), h > s && (d = s, s = h, h = d), this.helper.css({
                    left: g,
                    top: h,
                    width: p - g,
                    height: s - h
                }), this.selectees.each(function () {
                    var d = b.data(this, "selectable-item");
                    d && d.element !== e.element[0] && (d.selecting && ((c.metaKey || c.ctrlKey) && d.startselected ? (d.$element.removeClass("ui-selecting"), d.selecting = !1, d.$element.addClass("ui-selected"), d.selected = !0) : (d.$element.removeClass("ui-selecting"), d.selecting = !1, d.startselected && (d.$element.addClass("ui-unselecting"), d.unselecting = !0), e._trigger("unselecting", c, {
                        unselecting: d.element
                    }))), d.selected && (c.metaKey || c.ctrlKey || d.startselected || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, e._trigger("unselecting", c, {
                        unselecting: d.element
                    }))))
                }), !1
            }
        },
        _mouseStop: function (c) {
            var d = this;
            return this.dragged = !1, b(".ui-unselecting", this.element[0]).each(function () {
                var e =
                    b.data(this, "selectable-item");
                e.$element.removeClass("ui-unselecting");
                e.unselecting = !1;
                e.startselected = !1;
                d._trigger("unselected", c, {
                    unselected: e.element
                })
            }), b(".ui-selecting", this.element[0]).each(function () {
                var e = b.data(this, "selectable-item");
                e.$element.removeClass("ui-selecting").addClass("ui-selected");
                e.selecting = !1;
                e.selected = !0;
                e.startselected = !0;
                d._trigger("selected", c, {
                    selected: e.element
                })
            }), this._trigger("stop", c), this.helper.remove(), !1
        }
    });
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (b, c, d) {
            return b >= c && c + d > b
        },
        _isFloating: function (b) {
            return /left|right/.test(b.css("float")) || /inline|table-cell/.test(b.css("display"))
        },
        _create: function () {
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function (b, c) {
            this._super(b, c);
            "handle" === b && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            b.each(this.items, function () {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var b = this.items.length - 1; 0 <= b; b--) this.items[b].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (c, d) {
            var e = null,
                f = !1,
                g = this;
            return this.reverting ? !1 : this.options.disabled ||
                "static" === this.options.type ? !1 : (this._refreshItems(c), b(c.target).parents().each(function () {
                    return b.data(this, g.widgetName + "-item") === g ? (e = b(this), false) : void 0
                }), b.data(c.target, g.widgetName + "-item") === g && (e = b(c.target)), e ? !this.options.handle || d || (b(this.options.handle, e).find("*").addBack().each(function () {
                    this === c.target && (f = true)
                }), f) ? (this.currentItem = e, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (c, d, e) {
            var f, d = this.options;
            if (this.currentContainer = this, this.refreshPositions(),
                this.helper = this._createHelper(c), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, b.extend(this.offset, {
                click: {
                left: c.pageX - this.offset.left,
                top: c.pageY - this.offset.top
            },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition =
                this._generatePosition(c), this.originalPageX = c.pageX, this.originalPageY = c.pageY, d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), d.containment && this._setContainment(), d.cursor && "auto" !== d.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", d.cursor), this.storedStylesheet = b("<style>*{ cursor: " +
                    d.cursor + " !important; }</style>").appendTo(f)), d.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", d.opacity)), d.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", d.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", c, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !e)
                for (e = this.containers.length - 1; 0 <= e; e--) this.containers[e]._trigger("activate", c, this._uiHash(this));
            return b.ui.ddmanager && (b.ui.ddmanager.current = this), b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, c), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(c), !0
        },
        _mouseDrag: function (c) {
            var d, e, f, g;
            d = this.options;
            var h = !1;
            this.position = this._generatePosition(c);
            this.positionAbs = this._convertPositionTo("absolute");
            this.lastPositionAbs || (this.lastPositionAbs =
                this.positionAbs);
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - c.pageY < d.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + d.scrollSpeed : c.pageY - this.overflowOffset.top < d.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - d.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - c.pageX < d.scrollSensitivity ?
                this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + d.scrollSpeed : c.pageX - this.overflowOffset.left < d.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - d.scrollSpeed)) : (c.pageY - this.document.scrollTop() < d.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - d.scrollSpeed) : this.window.height() - (c.pageY - this.document.scrollTop()) < d.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + d.scrollSpeed)), c.pageX - this.document.scrollLeft() <
                d.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - d.scrollSpeed) : this.window.width() - (c.pageX - this.document.scrollLeft()) < d.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + d.scrollSpeed))), !1 !== h && b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, c));
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis ||
                (this.helper[0].style.top = this.position.top + "px");
            for (d = this.items.length - 1; 0 <= d; d--)
                if (e = this.items[d], f = e.item[0], g = this._intersectsWithPointer(e), g && e.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === g ? "next" : "prev"]()[0] !== f && !b.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !b.contains(this.element[0], f) : !0)) {
                    if (this.direction = 1 === g ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(e)) break;
                    this._rearrange(c, e);
                    this._trigger("change",
                        c, this._uiHash());
                    break
                }
            return this._contactContainers(c), b.ui.ddmanager && b.ui.ddmanager.drag(this, c), this._trigger("sort", c, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (c, d) {
            if (c) {
                if (b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, c), this.options.revert) {
                    var e = this,
                        f = this.placeholder.offset(),
                        g = this.options.axis,
                        h = {};
                    g && "x" !== g || (h.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    g && "y" !== g || (h.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function () {
                        e._clear(c)
                    })
                } else this._clear(c, d);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var c = this.containers.length -
                        1; 0 <= c; c--) this.containers[c]._trigger("deactivate", null, this._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, this._uiHash(this)), this.containers[c].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
                this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (c) {
            var d = this._getItemsAsjQuery(c && c.connected),
                e = [];
            return c = c || {}, b(d).each(function () {
                var d = (b(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[\-=_](.+)/);
                d && e.push((c.key || d[1] + "[]") + "=" + (c.key && c.expression ? d[1] : d[2]))
            }), !e.length && c.key && e.push(c.key + "="), e.join("&")
        },
        toArray: function (c) {
            var d = this._getItemsAsjQuery(c && c.connected),
                e = [];
            return c = c || {}, d.each(function () {
                e.push(b(c.item || this).attr(c.attribute || "id") || "")
            }), e
        },
        _intersectsWith: function (b) {
            var c = this.positionAbs.left,
                d = c + this.helperProportions.width,
                e = this.positionAbs.top,
                f = e + this.helperProportions.height,
                g = b.left,
                h = g + b.width,
                s = b.top,
                r = s + b.height,
                o = this.offset.click.top,
                t = this.offset.click.left,
                t = "y" === this.options.axis || c + t > g && h > c + t,
                o = ("x" === this.options.axis || e + o > s && r > e + o) && t;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !==
                this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > b[this.floating ? "width" : "height"] ? o : c + this.helperProportions.width / 2 > g && h > d - this.helperProportions.width / 2 && e + this.helperProportions.height / 2 > s && r > f - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (b) {
            var c = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height),
                b = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width),
                c = c && b,
                b = this._getDragVerticalDirection(),
                d = this._getDragHorizontalDirection();
            return c ? this.floating ? d && "right" === d || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1) : !1
        },
        _intersectsWithSides: function (b) {
            var c = this._isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height),
                b = this._isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width),
                d = this._getDragVerticalDirection(),
                e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" === e && b || "left" === e && !b : d &&
                ("down" === d && c || "up" === d && !c)
        },
        _getDragVerticalDirection: function () {
            var b = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== b && (0 < b ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var b = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== b && (0 < b ? "right" : "left")
        },
        refresh: function (b) {
            return this._refreshItems(b), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var b = this.options;
            return b.connectWith.constructor === String ? [b.connectWith] : b.connectWith
        },
        _getItemsAsjQuery: function (c) {
            function d() {
                h.push(this)
            }
            var e, f, g, h = [],
                p = [],
                s = this._connectWith();
            if (s && c)
                for (c = s.length - 1; 0 <= c; c--) {
                    f = b(s[c], this.document[0]);
                    for (e = f.length - 1; 0 <= e; e--) (g = b.data(f[e], this.widgetFullName)) && g !== this && !g.options.disabled && p.push([b.isFunction(g.options.items) ? g.options.items.call(g.element) : b(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g])
                }
            p.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (c = p.length - 1; 0 <= c; c--) p[c][0].each(d);
            return b(h)
        },
        _removeCurrentsFromItems: function () {
            var c = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function (b) {
                for (var d = 0; c.length > d; d++)
                    if (c[d] === b.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (c) {
            this.items = [];
            this.containers = [this];
            var d, e, f, g, h, p = this.items,
                s = [
                    [b.isFunction(this.options.items) ?
                        this.options.items.call(this.element[0], c, {
                            item: this.currentItem
                        }) : b(this.options.items, this.element), this
                    ]
                ];
            if ((h = this._connectWith()) && this.ready)
                for (d = h.length - 1; 0 <= d; d--) {
                    f = b(h[d], this.document[0]);
                    for (e = f.length - 1; 0 <= e; e--) (g = b.data(f[e], this.widgetFullName)) && g !== this && !g.options.disabled && (s.push([b.isFunction(g.options.items) ? g.options.items.call(g.element[0], c, {
                        item: this.currentItem
                    }) : b(g.options.items, g.element), g]), this.containers.push(g))
                }
            for (d = s.length - 1; 0 <= d; d--) {
                c = s[d][1];
                f = s[d][0];
                e = 0;
                for (h = f.length; h > e; e++) g = b(f[e]), g.data(this.widgetName + "-item", c), p.push({
                    item: g,
                    instance: c,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function (c) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var d, e, f, g;
            for (d = this.items.length - 1; 0 <= d; d--) e = this.items[d], e.instance !== this.currentContainer && this.currentContainer && e.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ?
                b(this.options.toleranceElement, e.item) : e.item, c || (e.width = f.outerWidth(), e.height = f.outerHeight()), g = f.offset(), e.left = g.left, e.top = g.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (d = this.containers.length - 1; 0 <= d; d--) g = this.containers[d].element.offset(), this.containers[d].containerCache.left = g.left, this.containers[d].containerCache.top = g.top, this.containers[d].containerCache.width = this.containers[d].element.outerWidth(),
                    this.containers[d].containerCache.height = this.containers[d].element.outerHeight();
            return this
        },
        _createPlaceholder: function (c) {
            var c = c || this,
                d, e = c.options;
            e.placeholder && e.placeholder.constructor !== String || (d = e.placeholder, e.placeholder = {
                element: function () {
                    var e = c.currentItem[0].nodeName.toLowerCase(),
                        f = b("<" + e + ">", c.document[0]).addClass(d || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === e ? c._createTrPlaceholder(c.currentItem.find("tr").eq(0),
                        b("<tr>", c.document[0]).appendTo(f)) : "tr" === e ? c._createTrPlaceholder(c.currentItem, f) : "img" === e && f.attr("src", c.currentItem.attr("src")), d || f.css("visibility", "hidden"), f
                },
                update: function (b, f) {
                    (!d || e.forcePlaceholderSize) && (f.height() || f.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") ||
                        0, 10)))
                }
            });
            c.placeholder = b(e.placeholder.element.call(c.element, c.currentItem));
            c.currentItem.after(c.placeholder);
            e.placeholder.update(c, c.placeholder)
        },
        _createTrPlaceholder: function (c, d) {
            var e = this;
            c.children().each(function () {
                b("<td>&#160;</td>", e.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(d)
            })
        },
        _contactContainers: function (c) {
            var d, e, f, g, h, p, s, r, o = g = null;
            for (d = this.containers.length - 1; 0 <= d; d--)
                if (!b.contains(this.currentItem[0], this.containers[d].element[0]))
                    if (this._intersectsWith(this.containers[d].containerCache)) {
                        if (!g ||
                            !b.contains(this.containers[d].element[0], g.element[0])) g = this.containers[d], o = d
                    } else this.containers[d].containerCache.over && (this.containers[d]._trigger("out", c, this._uiHash(this)), this.containers[d].containerCache.over = 0);
            if (g)
                if (1 === this.containers.length) this.containers[o].containerCache.over || (this.containers[o]._trigger("over", c, this._uiHash(this)), this.containers[o].containerCache.over = 1);
                else {
                    d = 1E4;
                    f = null;
                    g = (e = g.floating || this._isFloating(this.currentItem)) ? "left" : "top";
                    h = e ? "width" : "height";
                    r = e ? "clientX" : "clientY";
                    for (e = this.items.length - 1; 0 <= e; e--) b.contains(this.containers[o].element[0], this.items[e].item[0]) && this.items[e].item[0] !== this.currentItem[0] && (p = this.items[e].item.offset()[g], s = !1, c[r] - p > this.items[e][h] / 2 && (s = !0), d > Math.abs(c[r] - p) && (d = Math.abs(c[r] - p), f = this.items[e], this.direction = s ? "up" : "down"));
                    if (f || this.options.dropOnEmpty) {
                        if (this.currentContainer === this.containers[o]) return this.currentContainer.containerCache.over || (this.containers[o]._trigger("over", c, this._uiHash()),
                            this.currentContainer.containerCache.over = 1), void 0;
                        f ? this._rearrange(c, f, null, !0) : this._rearrange(c, null, this.containers[o].element, !0);
                        this._trigger("change", c, this._uiHash());
                        this.containers[o]._trigger("change", c, this._uiHash(this));
                        this.currentContainer = this.containers[o];
                        this.options.placeholder.update(this.currentContainer, this.placeholder);
                        this.containers[o]._trigger("over", c, this._uiHash(this));
                        this.containers[o].containerCache.over = 1
                    }
                }
        },
        _createHelper: function (c) {
            var d = this.options,
                c = b.isFunction(d.helper) ?
                b(d.helper.apply(this.element[0], [c, this.currentItem])) : "clone" === d.helper ? this.currentItem.clone() : this.currentItem;
            return c.parents("body").length || b("parent" !== d.appendTo ? d.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0]), c[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!c[0].style.width || d.forceHelperSize) &&
                c.width(this.currentItem.width()), (!c[0].style.height || d.forceHelperSize) && c.height(this.currentItem.height()), c
        },
        _adjustOffsetFromHelper: function (c) {
            "string" == typeof c && (c = c.split(" "));
            b.isArray(c) && (c = {
                left: +c[0],
                top: +c[1] || 0
            });
            "left" in c && (this.offset.click.left = c.left + this.margins.left);
            "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left);
            "top" in c && (this.offset.click.top = c.top + this.margins.top);
            "bottom" in c && (this.offset.click.top = this.helperProportions.height -
                c.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie) && (c = {
                top: 0,
                left: 0
            }), {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var b = this.currentItem.position();
                return {
                    top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"),
                    10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var c, d, e, f = this.options;
            "parent" === f.containment && (f.containment = this.helper[0].parentNode);
            ("document" === f.containment || "window" === f.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === f.containment ?
                this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === f.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ]);
            /^(document|window|parent)$/.test(f.containment) || (c = b(f.containment)[0], d = b(f.containment).offset(), e = "hidden" !== b(c).css("overflow"), this.containment = [d.left + (parseInt(b(c).css("borderLeftWidth"), 10) || 0) + (parseInt(b(c).css("paddingLeft"), 10) ||
                    0) - this.margins.left, d.top + (parseInt(b(c).css("borderTopWidth"), 10) || 0) + (parseInt(b(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b(c).css("borderLeftWidth"), 10) || 0) - (parseInt(b(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b(c).css("borderTopWidth"), 10) || 0) - (parseInt(b(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height -
                this.margins.top
            ])
        },
        _convertPositionTo: function (c, d) {
            d || (d = this.position);
            var e = "absolute" === c ? 1 : -1,
                f = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                g = /(html|body)/i.test(f[0].tagName);
            return {
                top: d.top + this.offset.relative.top * e + this.offset.parent.top * e - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * e,
                left: d.left + this.offset.relative.left * e + this.offset.parent.left *
                    e - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * e
            }
        },
        _generatePosition: function (c) {
            var d, e, f = this.options,
                g = c.pageX,
                h = c.pageY,
                p = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(p[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative =
                this._getRelativeOffset()), this.originalPosition && (this.containment && (c.pageX - this.offset.click.left < this.containment[0] && (g = this.containment[0] + this.offset.click.left), c.pageY - this.offset.click.top < this.containment[1] && (h = this.containment[1] + this.offset.click.top), c.pageX - this.offset.click.left > this.containment[2] && (g = this.containment[2] + this.offset.click.left), c.pageY - this.offset.click.top > this.containment[3] && (h = this.containment[3] + this.offset.click.top)), f.grid && (d = this.originalPageY + Math.round((h -
                this.originalPageY) / f.grid[1]) * f.grid[1], h = this.containment ? d - this.offset.click.top >= this.containment[1] && d - this.offset.click.top <= this.containment[3] ? d : d - this.offset.click.top >= this.containment[1] ? d - f.grid[1] : d + f.grid[1] : d, e = this.originalPageX + Math.round((g - this.originalPageX) / f.grid[0]) * f.grid[0], g = this.containment ? e - this.offset.click.left >= this.containment[0] && e - this.offset.click.left <= this.containment[2] ? e : e - this.offset.click.left >= this.containment[0] ? e - f.grid[0] : e + f.grid[0] : e)), {
                    top: h - this.offset.click.top -
                        this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : p.scrollTop()),
                    left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : p.scrollLeft())
                }
        },
        _rearrange: function (b, c, d, e) {
            d ? d[0].appendChild(this.placeholder[0]) : c.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? c.item[0] : c.item[0].nextSibling);
            var f = this.counter = this.counter ? ++this.counter :
                1;
            this._delay(function () {
                f === this.counter && this.refreshPositions(!e)
            })
        },
        _clear: function (b, c) {
            function d(b, c, e) {
                return function (d) {
                    e._trigger(b, d, c._uiHash(c))
                }
            }
            this.reverting = !1;
            var e, f = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (e in this._storedCSS) ("auto" === this._storedCSS[e] || "static" === this._storedCSS[e]) && (this._storedCSS[e] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !c && f.push(function (b) {
                this._trigger("receive", b, this._uiHash(this.fromOutside))
            });
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || c || f.push(function (b) {
                this._trigger("update", b, this._uiHash())
            });
            this !== this.currentContainer && (c || (f.push(function (b) {
                this._trigger("remove", b, this._uiHash())
            }), f.push(function (b) {
                return function (c) {
                    b._trigger("receive", c, this._uiHash(this))
                }
            }.call(this,
                this.currentContainer)), f.push(function (b) {
                    return function (c) {
                        b._trigger("update", c, this._uiHash(this))
                    }
                }.call(this, this.currentContainer))));
            for (e = this.containers.length - 1; 0 <= e; e--) c || f.push(d("deactivate", this, this.containers[e])), this.containers[e].containerCache.over && (f.push(d("out", this, this.containers[e])), this.containers[e].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity",
                    this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !c) {
                for (e = 0; f.length > e; e++) f[e].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            !1 ===
                b.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function (c) {
            var d = c || this;
            return {
                helper: d.helper,
                placeholder: d.placeholder || b([]),
                position: d.position,
                originalPosition: d.originalPosition,
                offset: d.positionAbs,
                item: d.currentItem,
                sender: c ? c.element : null
            }
        }
    });
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function () {
            var c,
                d;
            c = this.options;
            var e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = [];
            d = c.values && c.values.length || 1;
            e.length > d && (e.slice(d).remove(), e = e.slice(0, d));
            for (c = e.length; d > c; c++) f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = e.add(b(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function (c) {
                b(this).data("ui-slider-handle-index", c)
            })
        },
        _createRange: function () {
            var c = this.options,
                d = "";
            c.range ? (!0 === c.range && (c.values ? c.values.length && 2 !== c.values.length ? c.values = [c.values[0], c.values[0]] : b.isArray(c.values) && (c.values = c.values.slice(0)) : c.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = b("<div></div>").appendTo(this.element), d = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(d + ("min" === c.range || "max" === c.range ? " ui-slider-range-" +
                c.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function (c) {
            var d, e, f, g, h, p, s, r, o = this,
                t = this.options;
            return t.disabled ?
                !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), d = {
                    x: c.pageX,
                    y: c.pageY
                }, e = this._normValueFromMouse(d), f = this._valueMax() - this._valueMin() + 1, this.handles.each(function (c) {
                    var d = Math.abs(e - o.values(c));
                    (f > d || f === d && (c === o._lastChangedValue || o.values(c) === t.min)) && (f = d, g = b(this), h = c)
                }), p = this._start(c, h), !1 === p ? !1 : (this._mouseSliding = !0, this._handleIndex = h, g.addClass("ui-state-active").focus(), s = g.offset(), r = !b(c.target).parents().addBack().is(".ui-slider-handle"),
                    this._clickOffset = r ? {
                        left: 0,
                        top: 0
                    } : {
                        left: c.pageX - s.left - g.width() / 2,
                        top: c.pageY - s.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(c, h, e), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (b) {
            var c = this._normValueFromMouse({
                x: b.pageX,
                y: b.pageY
            });
            return this._slide(b, this._handleIndex, c), !1
        },
        _mouseStop: function (b) {
            return this.handles.removeClass("ui-state-active"),
                this._mouseSliding = !1, this._stop(b, this._handleIndex), this._change(b, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (b) {
            var c, d, e, f, g;
            return "horizontal" === this.orientation ? (c = this.elementSize.width, d = b.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (c = this.elementSize.height, d = b.y - this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0)), e = d / c, 1 < e && (e = 1), 0 > e && (e = 0), "vertical" === this.orientation && (e = 1 - e), f = this._valueMax() - this._valueMin(), g = this._valueMin() + e * f, this._trimAlignValue(g)
        },
        _start: function (b, c) {
            var d = {
                handle: this.handles[c],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values()), this._trigger("start", b, d)
        },
        _slide: function (b, c, d) {
            var e, f, g;
            this.options.values && this.options.values.length ? (e = this.values(c ? 0 : 1),
                2 === this.options.values.length && !0 === this.options.range && (0 === c && d > e || 1 === c && e > d) && (d = e), d !== this.values(c) && (f = this.values(), f[c] = d, g = this._trigger("slide", b, {
                    handle: this.handles[c],
                    value: d,
                    values: f
                }), this.values(c ? 0 : 1), !1 !== g && this.values(c, d))) : d !== this.value() && (g = this._trigger("slide", b, {
                    handle: this.handles[c],
                    value: d
                }), !1 !== g && this.value(d))
        },
        _stop: function (b, c) {
            var d = {
                handle: this.handles[c],
                value: this.value()
            };
            this.options.values && this.options.values.length && (d.value = this.values(c), d.values =
                this.values());
            this._trigger("stop", b, d)
        },
        _change: function (b, c) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {
                    handle: this.handles[c],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
                this._lastChangedValue = c;
                this._trigger("change", b, d)
            }
        },
        value: function (b) {
            return arguments.length ? (this.options.value = this._trimAlignValue(b), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (c, d) {
            var e, f, g;
            if (1 < arguments.length) return this.options.values[c] =
                this._trimAlignValue(d), this._refreshValue(), this._change(null, c), void 0;
            if (!arguments.length) return this._values();
            if (!b.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(c) : this.value();
            e = this.options.values;
            f = arguments[0];
            for (g = 0; e.length > g; g += 1) e[g] = this._trimAlignValue(f[g]), this._change(null, g);
            this._refreshValue()
        },
        _setOption: function (c, d) {
            var e, f = 0;
            switch ("range" === c && !0 === this.options.range && ("min" === d ? (this.options.value = this._values(0), this.options.values =
                null) : "max" === d && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), b.isArray(this.options.values) && (f = this.options.values.length), "disabled" === c && this.element.toggleClass("ui-state-disabled", !!d), this._super(c, d), c) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.handles.css("horizontal" === d ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (e = 0; f > e; e += 1) this._change(null, e);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            return this._trimAlignValue(this.options.value)
        },
        _values: function (b) {
            var c, d;
            if (arguments.length) return c =
                this.options.values[b], this._trimAlignValue(c);
            if (this.options.values && this.options.values.length) {
                c = this.options.values.slice();
                for (d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c
            }
            return []
        },
        _trimAlignValue: function (b) {
            if (this._valueMin() >= b) return this._valueMin();
            if (b >= this._valueMax()) return this._valueMax();
            var c = 0 < this.options.step ? this.options.step : 1,
                d = (b - this._valueMin()) % c,
                b = b - d;
            return 2 * Math.abs(d) >= c && (b += 0 < d ? c : -c), parseFloat(b.toFixed(5))
        },
        _calculateNewMax: function () {
            var b =
                this.options.max,
                c = this._valueMin(),
                d = this.options.step,
                b = Math.floor(+(b - c).toFixed(this._precision()) / d) * d + c;
            this.max = parseFloat(b.toFixed(this._precision()))
        },
        _precision: function () {
            var b = this._precisionOf(this.options.step);
            return null !== this.options.min && (b = Math.max(b, this._precisionOf(this.options.min))), b
        },
        _precisionOf: function (b) {
            var b = "" + b,
                c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshValue: function () {
            var c,
                d, e, f, g, h = this.options.range,
                p = this.options,
                s = this,
                r = this._animateOff ? !1 : p.animate,
                o = {};
            this.options.values && this.options.values.length ? this.handles.each(function (e) {
                d = 100 * ((s.values(e) - s._valueMin()) / (s._valueMax() - s._valueMin()));
                o["horizontal" === s.orientation ? "left" : "bottom"] = d + "%";
                b(this).stop(1, 1)[r ? "animate" : "css"](o, p.animate);
                !0 === s.options.range && ("horizontal" === s.orientation ? (0 === e && s.range.stop(1, 1)[r ? "animate" : "css"]({
                    left: d + "%"
                }, p.animate), 1 === e && s.range[r ? "animate" : "css"]({
                    width: d - c +
                        "%"
                }, {
                    queue: !1,
                    duration: p.animate
                })) : (0 === e && s.range.stop(1, 1)[r ? "animate" : "css"]({
                    bottom: d + "%"
                }, p.animate), 1 === e && s.range[r ? "animate" : "css"]({
                    height: d - c + "%"
                }, {
                    queue: !1,
                    duration: p.animate
                })));
                c = d
            }) : (e = this.value(), f = this._valueMin(), g = this._valueMax(), d = g !== f ? 100 * ((e - f) / (g - f)) : 0, o["horizontal" === this.orientation ? "left" : "bottom"] = d + "%", this.handle.stop(1, 1)[r ? "animate" : "css"](o, p.animate), "min" === h && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                width: d + "%"
            }, p.animate), "max" ===
                h && "horizontal" === this.orientation && this.range[r ? "animate" : "css"]({
                    width: 100 - d + "%"
                }, {
                    queue: !1,
                    duration: p.animate
                }), "min" === h && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                    height: d + "%"
                }, p.animate), "max" === h && "vertical" === this.orientation && this.range[r ? "animate" : "css"]({
                    height: 100 - d + "%"
                }, {
                    queue: !1,
                    duration: p.animate
                }))
        },
        _handleEvents: {
            keydown: function (c) {
                var d, e, f, g = b(c.target).data("ui-slider-handle-index");
                switch (c.keyCode) {
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_UP:
                    case b.ui.keyCode.PAGE_DOWN:
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, b(c.target).addClass("ui-state-active"), d = this._start(c, g), !1 === d)) return
                }
                switch (f = this.options.step, d = e = this.options.values && this.options.values.length ? this.values(g) : this.value(), c.keyCode) {
                    case b.ui.keyCode.HOME:
                        e = this._valueMin();
                        break;
                    case b.ui.keyCode.END:
                        e = this._valueMax();
                        break;
                    case b.ui.keyCode.PAGE_UP:
                        e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case b.ui.keyCode.PAGE_DOWN:
                        e = this._trimAlignValue(d - (this._valueMax() -
                            this._valueMin()) / this.numPages);
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                        if (d === this._valueMax()) return;
                        e = this._trimAlignValue(d + f);
                        break;
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (d === this._valueMin()) return;
                        e = this._trimAlignValue(d - f)
                }
                this._slide(c, g, e)
            },
            keyup: function (c) {
                var d = b(c.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(c, d), this._change(c, d), b(c.target).removeClass("ui-state-active"))
            }
        }
    });
    var h = b;
    b.effects = {
        effect: {}
    };
    (function (b,
        c) {
        function d(b, c, e) {
            var f = t[c.type] || {};
            return null == b ? e || !c.def ? null : c.def : (b = f.floor ? ~~b : parseFloat(b), isNaN(b) ? c.def : f.mod ? (b + f.mod) % f.mod : 0 > b ? 0 : b > f.max ? f.max : b)
        }

        function e(d) {
            var f = r(),
                h = f._rgba = [];
            return d = d.toLowerCase(), z(s, function (b, e) {
                var g, j = e.re.exec(d),
                    j = j && e.parse(j),
                    l = e.space || "rgba";
                return j ? (g = f[l](j), f[o[l].cache] = g[o[l].cache], h = f._rgba = g._rgba, !1) : c
            }), h.length ? ("0,0,0,0" === h.join() && b.extend(h, g.transparent), f) : g[d]
        }

        function f(b, c, d) {
            return d = (d + 1) % 1, 1 > 6 * d ? b + 6 * (c - b) * d : 1 > 2 * d ? c :
                2 > 3 * d ? b + 6 * (c - b) * (2 / 3 - d) : b
        }
        var g, h = /^([\-+])=\s*(\d+\.?\d*)/,
            s = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (b) {
                    return [b[1], b[2], b[3], b[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (b) {
                    return [2.55 * b[1], 2.55 * b[2], 2.55 * b[3], b[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (b) {
                    return [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)]
                }
            },
                {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (b) {
                        return [parseInt(b[1] + b[1], 16), parseInt(b[2] + b[2], 16), parseInt(b[3] + b[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (b) {
                        return [b[1], b[2] / 100, b[3] / 100, b[4]]
                    }
                }
            ],
            r = b.Color = function (c, d, e, f) {
                return new b.Color.fn.parse(c, d, e, f)
            },
            o = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            t = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            u = r.support = {},
            w = b("<p>")[0],
            z = b.each;
        w.style.cssText = "background-color:rgba(1,1,1,.5)";
        u.rgba = -1 < w.style.backgroundColor.indexOf("rgba");
        z(o, function (b, c) {
            c.cache = "_" + b;
            c.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        r.fn = b.extend(r.prototype, {
            parse: function (f, h, n, s) {
                if (f === c) return this._rgba = [null, null, null, null], this;
                (f.jquery || f.nodeType) && (f = b(f).css(h),
                    h = c);
                var u = this,
                    t = b.type(f),
                    p = this._rgba = [];
                return h !== c && (f = [f, h, n, s], t = "array"), "string" === t ? this.parse(e(f) || g._default) : "array" === t ? (z(o.rgba.props, function (b, c) {
                    p[c.idx] = d(f[c.idx], c)
                }), this) : "object" === t ? (f instanceof r ? z(o, function (b, c) {
                    f[c.cache] && (u[c.cache] = f[c.cache].slice())
                }) : z(o, function (c, e) {
                    var g = e.cache;
                    z(e.props, function (b, c) {
                        if (!u[g] && e.to) {
                            if ("alpha" === b || null == f[b]) return;
                            u[g] = e.to(u._rgba)
                        }
                        u[g][c.idx] = d(f[b], c, !0)
                    });
                    u[g] && 0 > b.inArray(null, u[g].slice(0, 3)) && (u[g][3] = 1, e.from &&
                        (u._rgba = e.from(u[g])))
                }), this) : c
            },
            is: function (b) {
                var d = r(b),
                    e = !0,
                    f = this;
                return z(o, function (b, g) {
                    var j, h = d[g.cache];
                    return h && (j = f[g.cache] || g.to && g.to(f._rgba) || [], z(g.props, function (b, d) {
                        return null != h[d.idx] ? e = h[d.idx] === j[d.idx] : c
                    })), e
                }), e
            },
            _space: function () {
                var b = [],
                    c = this;
                return z(o, function (d, e) {
                    c[e.cache] && b.push(d)
                }), b.pop()
            },
            transition: function (b, c) {
                var e = r(b),
                    f = e._space(),
                    g = o[f],
                    j = 0 === this.alpha() ? r("transparent") : this,
                    h = j[g.cache] || g.to(j._rgba),
                    k = h.slice();
                return e = e[g.cache], z(g.props,
                    function (b, f) {
                        var g = f.idx,
                            j = h[g],
                            o = e[g],
                            m = t[f.type] || {};
                        null !== o && (null === j ? k[g] = o : (m.mod && (o - j > m.mod / 2 ? j += m.mod : j - o > m.mod / 2 && (j -= m.mod)), k[g] = d((o - j) * c + j, f)))
                    }), this[f](k)
            },
            blend: function (c) {
                if (1 === this._rgba[3]) return this;
                var d = this._rgba.slice(),
                    e = d.pop(),
                    f = r(c)._rgba;
                return r(b.map(d, function (b, c) {
                    return (1 - e) * f[c] + e * b
                }))
            },
            toRgbaString: function () {
                var c = "rgba(",
                    d = b.map(this._rgba, function (b, c) {
                        return null == b ? 2 < c ? 1 : 0 : b
                    });
                return 1 === d[3] && (d.pop(), c = "rgb("), c + d.join() + ")"
            },
            toHslaString: function () {
                var c =
                    "hsla(",
                    d = b.map(this.hsla(), function (b, c) {
                        return null == b && (b = 2 < c ? 1 : 0), c && 3 > c && (b = Math.round(100 * b) + "%"), b
                    });
                return 1 === d[3] && (d.pop(), c = "hsl("), c + d.join() + ")"
            },
            toHexString: function (c) {
                var d = this._rgba.slice(),
                    e = d.pop();
                return c && d.push(~~(255 * e)), "#" + b.map(d, function (b) {
                    return b = (b || 0).toString(16), 1 === b.length ? "0" + b : b
                }).join("")
            },
            toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        r.fn.parse.prototype = r.fn;
        o.hsla.to = function (b) {
            if (null == b[0] || null == b[1] || null == b[2]) return [null,
                null, null, b[3]
            ];
            var c, d, e = b[0] / 255,
                f = b[1] / 255,
                g = b[2] / 255,
                b = b[3],
                j = Math.max(e, f, g),
                h = Math.min(e, f, g),
                k = j - h,
                l = j + h,
                o = 0.5 * l;
            return c = h === j ? 0 : e === j ? 60 * (f - g) / k + 360 : f === j ? 60 * (g - e) / k + 120 : 60 * (e - f) / k + 240, d = 0 === k ? 0 : 0.5 >= o ? k / l : k / (2 - l), [Math.round(c) % 360, d, o, null == b ? 1 : b]
        };
        o.hsla.from = function (b) {
            if (null == b[0] || null == b[1] || null == b[2]) return [null, null, null, b[3]];
            var c = b[0] / 360,
                d = b[1],
                e = b[2],
                b = b[3],
                d = 0.5 >= e ? e * (1 + d) : e + d - e * d,
                e = 2 * e - d;
            return [Math.round(255 * f(e, d, c + 1 / 3)), Math.round(255 * f(e, d, c)), Math.round(255 * f(e, d,
                c - 1 / 3)), b]
        };
        z(o, function (e, f) {
            var g = f.props,
                o = f.cache,
                m = f.to,
                n = f.from;
            r.fn[e] = function (e) {
                if (m && !this[o] && (this[o] = m(this._rgba)), e === c) return this[o].slice();
                var f, h = b.type(e),
                    s = "array" === h || "object" === h ? e : arguments,
                    u = this[o].slice();
                return z(g, function (b, c) {
                    var e = s["object" === h ? b : c.idx];
                    null == e && (e = u[c.idx]);
                    u[c.idx] = d(e, c)
                }), n ? (f = r(n(u)), f[o] = u, f) : r(u)
            };
            z(g, function (c, d) {
                r.fn[c] || (r.fn[c] = function (f) {
                    var g, k = b.type(f),
                        l = "alpha" === c ? this._hsla ? "hsla" : "rgba" : e,
                        o = this[l](),
                        m = o[d.idx];
                    return "undefined" ===
                        k ? m : ("function" === k && (f = f.call(this, m), k = b.type(f)), null == f && d.empty ? this : ("string" === k && (g = h.exec(f), g && (f = m + parseFloat(g[2]) * ("+" === g[1] ? 1 : -1))), o[d.idx] = f, this[l](o)))
                })
            })
        });
        r.hook = function (c) {
            c = c.split(" ");
            z(c, function (c, d) {
                b.cssHooks[d] = {
                    set: function (c, f) {
                        var g, h = "";
                        if ("transparent" !== f && ("string" !== b.type(f) || (g = e(f)))) {
                            if (f = r(g || f), !u.rgba && 1 !== f._rgba[3]) {
                                for (g = "backgroundColor" === d ? c.parentNode : c;
                                    ("" === h || "transparent" === h) && g && g.style;) try {
                                        h = b.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (k) { }
                                f =
                                    f.blend(h && "transparent" !== h ? h : "_default")
                            }
                            f = f.toRgbaString()
                        }
                        try {
                            c.style[d] = f
                        } catch (l) { }
                    }
                };
                b.fx.step[d] = function (c) {
                    c.colorInit || (c.start = r(c.elem, d), c.end = r(c.end), c.colorInit = !0);
                    b.cssHooks[d].set(c.elem, c.start.transition(c.end, c.pos))
                }
            })
        };
        r.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        b.cssHooks.borderColor = {
            expand: function (b) {
                var c = {};
                return z(["Top", "Right", "Bottom", "Left"],
                    function (d, e) {
                        c["border" + e + "Color"] = b
                    }), c
            }
        };
        g = b.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(h);
    (function () {
        function c(d) {
            var e, f = d.ownerDocument.defaultView ? d.ownerDocument.defaultView.getComputedStyle(d, null) : d.currentStyle,
                g = {};
            if (f && f.length && f[0] && f[f[0]])
                for (d = f.length; d--;) e = f[d], "string" == typeof f[e] && (g[b.camelCase(e)] = f[e]);
            else
                for (e in f) "string" == typeof f[e] && (g[e] = f[e]);
            return g
        }
        var d = ["add", "remove", "toggle"],
            e = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (c, d) {
            b.fx.step[d] = function (b) {
                ("none" !== b.end && !b.setAttr || 1 === b.pos && !b.setAttr) && (h.style(b.elem,
                    d, b.end), b.setAttr = !0)
            }
        });
        b.fn.addBack || (b.fn.addBack = function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        });
        b.effects.animateClass = function (f, g, h, p) {
            var s = b.speed(g, h, p);
            return this.queue(function () {
                var g, h = b(this),
                    n = h.attr("class") || "",
                    u = s.children ? h.find("*").addBack() : h,
                    u = u.map(function () {
                        return {
                            el: b(this),
                            start: c(this)
                        }
                    });
                g = function () {
                    b.each(d, function (b, c) {
                        f[c] && h[c + "Class"](f[c])
                    })
                };
                g();
                u = u.map(function () {
                    this.end = c(this.el[0]);
                    var d = this.start,
                        f = this.end,
                        g, h, k = {};
                    for (g in f) h = f[g], d[g] !== h && (e[g] || (b.fx.step[g] || !isNaN(parseFloat(h))) && (k[g] = h));
                    return this.diff = k, this
                });
                h.attr("class", n);
                u = u.map(function () {
                    var c = this,
                        d = b.Deferred();
                    return this.el.animate(this.diff, b.extend({}, s, {
                        queue: !1,
                        complete: function () {
                            d.resolve(c)
                        }
                    })), d.promise()
                });
                b.when.apply(b, u.get()).done(function () {
                    g();
                    b.each(arguments, function () {
                        var c = this.el;
                        b.each(this.diff, function (b) {
                            c.css(b, "")
                        })
                    });
                    s.complete.call(h[0])
                })
            })
        };
        b.fn.extend({
            addClass: function (c) {
                return function (d, e, f, g) {
                    return e ?
                        b.effects.animateClass.call(this, {
                            add: d
                        }, e, f, g) : c.apply(this, arguments)
                }
            }(b.fn.addClass),
            removeClass: function (c) {
                return function (d, e, f, g) {
                    return 1 < arguments.length ? b.effects.animateClass.call(this, {
                        remove: d
                    }, e, f, g) : c.apply(this, arguments)
                }
            }(b.fn.removeClass),
            toggleClass: function (c) {
                return function (d, e, f, g, j) {
                    return "boolean" == typeof e || void 0 === e ? f ? b.effects.animateClass.call(this, e ? {
                        add: d
                    } : {
                        remove: d
                    }, f, g, j) : c.apply(this, arguments) : b.effects.animateClass.call(this, {
                        toggle: d
                    }, e, f, g)
                }
            }(b.fn.toggleClass),
            switchClass: function (c, d, e, f, g) {
                return b.effects.animateClass.call(this, {
                    add: d,
                    remove: c
                }, e, f, g)
            }
        })
    })();
    (function () {
        function c(d, e, f, g) {
            return b.isPlainObject(d) && (e = d, d = d.effect), d = {
                effect: d
            }, null == e && (e = {}), b.isFunction(e) && (g = e, f = null, e = {}), ("number" == typeof e || b.fx.speeds[e]) && (g = f, f = e, e = {}), b.isFunction(f) && (g = f, f = null), e && b.extend(d, e), f = f || e.duration, d.duration = b.fx.off ? 0 : "number" == typeof f ? f : f in b.fx.speeds ? b.fx.speeds[f] : b.fx.speeds._default, d.complete = g || e.complete, d
        }

        function d(c) {
            return !c ||
                "number" == typeof c || b.fx.speeds[c] ? !0 : "string" != typeof c || b.effects.effect[c] ? b.isFunction(c) ? !0 : "object" != typeof c || c.effect ? !1 : !0 : !0
        }
        b.extend(b.effects, {
            version: "1.11.4",
            save: function (b, c) {
                for (var d = 0; c.length > d; d++) null !== c[d] && b.data("ui-effects-" + c[d], b[0].style[c[d]])
            },
            restore: function (b, c) {
                var d, e;
                for (e = 0; c.length > e; e++) null !== c[e] && (d = b.data("ui-effects-" + c[e]), void 0 === d && (d = ""), b.css(c[e], d))
            },
            setMode: function (b, c) {
                return "toggle" === c && (c = b.is(":hidden") ? "show" : "hide"), c
            },
            getBaseline: function (b,
                c) {
                var d, e;
                switch (b[0]) {
                    case "top":
                        d = 0;
                        break;
                    case "middle":
                        d = 0.5;
                        break;
                    case "bottom":
                        d = 1;
                        break;
                    default:
                        d = b[0] / c.height
                }
                switch (b[1]) {
                    case "left":
                        e = 0;
                        break;
                    case "center":
                        e = 0.5;
                        break;
                    case "right":
                        e = 1;
                        break;
                    default:
                        e = b[1] / c.width
                }
                return {
                    x: e,
                    y: d
                }
            },
            createWrapper: function (c) {
                if (c.parent().is(".ui-effects-wrapper")) return c.parent();
                var d = {
                    width: c.outerWidth(!0),
                    height: c.outerHeight(!0),
                    "float": c.css("float")
                },
                    e = b("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    f = {
                        width: c.width(),
                        height: c.height()
                    },
                    g = document.activeElement;
                try {
                    g.id
                } catch (j) {
                    g = document.body
                }
                return c.wrap(e), (c[0] === g || b.contains(c[0], g)) && b(g).focus(), e = c.parent(), "static" === c.css("position") ? (e.css({
                    position: "relative"
                }), c.css({
                    position: "relative"
                })) : (b.extend(d, {
                    position: c.css("position"),
                    zIndex: c.css("z-index")
                }), b.each(["top", "left", "bottom", "right"], function (b, e) {
                    d[e] = c.css(e);
                    isNaN(parseInt(d[e], 10)) && (d[e] = "auto")
                }), c.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), c.css(f), e.css(d).show()
            },
            removeWrapper: function (c) {
                var d = document.activeElement;
                return c.parent().is(".ui-effects-wrapper") && (c.parent().replaceWith(c), (c[0] === d || b.contains(c[0], d)) && b(d).focus()), c
            },
            setTransition: function (c, d, e, f) {
                return f = f || {}, b.each(d, function (b, d) {
                    var g = c.cssUnit(d);
                    0 < g[0] && (f[d] = g[0] * e + g[1])
                }), f
            }
        });
        b.fn.extend({
            effect: function () {
                function d(c) {
                    function f() {
                        b.isFunction(j) && j.call(g[0]);
                        b.isFunction(c) && c()
                    }
                    var g = b(this),
                        j = e.complete,
                        k = e.mode;
                    (g.is(":hidden") ? "hide" === k : "show" === k) ? (g[k](), f()) : h.call(g[0], e, f)
                }
                var e = c.apply(this, arguments),
                    f = e.mode,
                    g = e.queue,
                    h = b.effects.effect[e.effect];
                return b.fx.off || !h ? f ? this[f](e.duration, e.complete) : this.each(function () {
                    e.complete && e.complete.call(this)
                }) : !1 === g ? this.each(d) : this.queue(g || "fx", d)
            },
            show: function (b) {
                return function (e) {
                    if (d(e)) return b.apply(this, arguments);
                    var f = c.apply(this, arguments);
                    return f.mode = "show", this.effect.call(this, f)
                }
            }(b.fn.show),
            hide: function (b) {
                return function (e) {
                    if (d(e)) return b.apply(this,
                        arguments);
                    var f = c.apply(this, arguments);
                    return f.mode = "hide", this.effect.call(this, f)
                }
            }(b.fn.hide),
            toggle: function (b) {
                return function (e) {
                    if (d(e) || "boolean" == typeof e) return b.apply(this, arguments);
                    var f = c.apply(this, arguments);
                    return f.mode = "toggle", this.effect.call(this, f)
                }
            }(b.fn.toggle),
            cssUnit: function (c) {
                var d = this.css(c),
                    e = [];
                return b.each(["em", "px", "%", "pt"], function (b, c) {
                    0 < d.indexOf(c) && (e = [parseFloat(d), c])
                }), e
            }
        })
    })();
    (function () {
        var c = {};
        b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (b,
            d) {
            c[d] = function (c) {
                return Math.pow(c, b + 2)
            }
        });
        b.extend(c, {
            Sine: function (b) {
                return 1 - Math.cos(b * Math.PI / 2)
            },
            Circ: function (b) {
                return 1 - Math.sqrt(1 - b * b)
            },
            Elastic: function (b) {
                return 0 === b || 1 === b ? b : -Math.pow(2, 8 * (b - 1)) * Math.sin((80 * (b - 1) - 7.5) * Math.PI / 15)
            },
            Back: function (b) {
                return b * b * (3 * b - 2)
            },
            Bounce: function (b) {
                for (var c, d = 4;
                    ((c = Math.pow(2, --d)) - 1) / 11 > b;);
                return 1 / Math.pow(4, 3 - d) - 7.5625 * Math.pow((3 * c - 2) / 22 - b, 2)
            }
        });
        b.each(c, function (c, d) {
            b.easing["easeIn" + c] = d;
            b.easing["easeOut" + c] = function (b) {
                return 1 -
                    d(1 - b)
            };
            b.easing["easeInOut" + c] = function (b) {
                return 0.5 > b ? d(2 * b) / 2 : 1 - d(-2 * b + 2) / 2
            }
        })
    })();
    b.effects;
    b.effects.effect.blind = function (c, d) {
        var e, f, g, h = b(this),
            p = "position top bottom left right height width".split(" "),
            s = b.effects.setMode(h, c.mode || "hide");
        e = c.direction || "up";
        var r = /up|down|vertical/.test(e),
            o = r ? "height" : "width",
            t = r ? "top" : "left",
            u = /up|left|vertical|horizontal/.test(e),
            w = {},
            z = "show" === s;
        h.parent().is(".ui-effects-wrapper") ? b.effects.save(h.parent(), p) : b.effects.save(h, p);
        h.show();
        e = b.effects.createWrapper(h).css({
            overflow: "hidden"
        });
        f = e[o]();
        g = parseFloat(e.css(t)) || 0;
        w[o] = z ? f : 0;
        u || (h.css(r ? "bottom" : "right", 0).css(r ? "top" : "left", "auto").css({
            position: "absolute"
        }), w[t] = z ? g : f + g);
        z && (e.css(o, 0), u || e.css(t, g + f));
        e.animate(w, {
            duration: c.duration,
            easing: c.easing,
            queue: !1,
            complete: function () {
                "hide" === s && h.hide();
                b.effects.restore(h, p);
                b.effects.removeWrapper(h);
                d()
            }
        })
    };
    b.effects.effect.bounce = function (c, d) {
        var e, f, g, h = b(this),
            p = "position top bottom left right height width".split(" "),
            s = b.effects.setMode(h, c.mode || "effect"),
            r = "hide" ===
            s;
        e = "show" === s;
        var o = c.direction || "up",
            s = c.distance,
            t = c.times || 5,
            u = 2 * t + (e || r ? 1 : 0),
            w = c.duration / u,
            z = c.easing,
            A = "up" === o || "down" === o ? "top" : "left",
            o = "up" === o || "left" === o,
            C = h.queue(),
            G = C.length;
        (e || r) && p.push("opacity");
        b.effects.save(h, p);
        h.show();
        b.effects.createWrapper(h);
        s || (s = h["top" === A ? "outerHeight" : "outerWidth"]() / 3);
        e && (g = {
            opacity: 1
        }, g[A] = 0, h.css("opacity", 0).css(A, o ? 2 * -s : 2 * s).animate(g, w, z));
        r && (s /= Math.pow(2, t - 1));
        g = {};
        for (e = g[A] = 0; t > e; e++) f = {}, f[A] = (o ? "-=" : "+=") + s, h.animate(f, w, z).animate(g,
            w, z), s = r ? 2 * s : s / 2;
        r && (f = {
            opacity: 0
        }, f[A] = (o ? "-=" : "+=") + s, h.animate(f, w, z));
        h.queue(function () {
            r && h.hide();
            b.effects.restore(h, p);
            b.effects.removeWrapper(h);
            d()
        });
        1 < G && C.splice.apply(C, [1, 0].concat(C.splice(G, u + 1)));
        h.dequeue()
    };
    b.effects.effect.clip = function (c, d) {
        var e, f, g = b(this),
            h = "position top bottom left right height width".split(" "),
            p = "show" === b.effects.setMode(g, c.mode || "hide"),
            s = "vertical" === (c.direction || "vertical"),
            r = s ? "height" : "width",
            s = s ? "top" : "left",
            o = {};
        b.effects.save(g, h);
        g.show();
        e =
            b.effects.createWrapper(g).css({
                overflow: "hidden"
            });
        e = "IMG" === g[0].tagName ? e : g;
        f = e[r]();
        p && (e.css(r, 0), e.css(s, f / 2));
        o[r] = p ? f : 0;
        o[s] = p ? 0 : f / 2;
        e.animate(o, {
            queue: !1,
            duration: c.duration,
            easing: c.easing,
            complete: function () {
                p || g.hide();
                b.effects.restore(g, h);
                b.effects.removeWrapper(g);
                d()
            }
        })
    };
    b.effects.effect.drop = function (c, d) {
        var e, f = b(this),
            g = "position top bottom left right opacity height width".split(" "),
            h = b.effects.setMode(f, c.mode || "hide"),
            p = "show" === h;
        e = c.direction || "left";
        var s = "up" === e || "down" ===
            e ? "top" : "left",
            r = "up" === e || "left" === e ? "pos" : "neg",
            o = {
                opacity: p ? 1 : 0
            };
        b.effects.save(f, g);
        f.show();
        b.effects.createWrapper(f);
        e = c.distance || f["top" === s ? "outerHeight" : "outerWidth"](!0) / 2;
        p && f.css("opacity", 0).css(s, "pos" === r ? -e : e);
        o[s] = (p ? "pos" === r ? "+=" : "-=" : "pos" === r ? "-=" : "+=") + e;
        f.animate(o, {
            queue: !1,
            duration: c.duration,
            easing: c.easing,
            complete: function () {
                "hide" === h && f.hide();
                b.effects.restore(f, g);
                b.effects.removeWrapper(f);
                d()
            }
        })
    };
    b.effects.effect.explode = function (c, d) {
        function e() {
            G.push(this);
            G.length === o * t && (u.css({
                visibility: "visible"
            }), b(G).remove(), w || u.hide(), d())
        }
        var f, g, h, p, s, r, o = c.pieces ? Math.round(Math.sqrt(c.pieces)) : 3,
            t = o,
            u = b(this),
            w = "show" === b.effects.setMode(u, c.mode || "hide"),
            z = u.show().css("visibility", "hidden").offset(),
            A = Math.ceil(u.outerWidth() / t),
            C = Math.ceil(u.outerHeight() / o),
            G = [];
        for (f = 0; o > f; f++) {
            p = z.top + f * C;
            r = f - (o - 1) / 2;
            for (g = 0; t > g; g++) h = z.left + g * A, s = g - (t - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -g * A,
                top: -f *
                    C
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: A,
                height: C,
                left: h + (w ? s * A : 0),
                top: p + (w ? r * C : 0),
                opacity: w ? 0 : 1
            }).animate({
                left: h + (w ? 0 : s * A),
                top: p + (w ? 0 : r * C),
                opacity: w ? 1 : 0
            }, c.duration || 500, c.easing, e)
        }
    };
    b.effects.effect.fade = function (c, d) {
        var e = b(this),
            f = b.effects.setMode(e, c.mode || "toggle");
        e.animate({
            opacity: f
        }, {
            queue: !1,
            duration: c.duration,
            easing: c.easing,
            complete: d
        })
    };
    b.effects.effect.fold = function (c, d) {
        var e, f, g = b(this),
            h = "position top bottom left right height width".split(" ");
        e = b.effects.setMode(g, c.mode || "hide");
        var p = "show" === e,
            s = "hide" === e,
            r = c.size || 15,
            o = /([0-9]+)%/.exec(r),
            t = !!c.horizFirst,
            u = (f = p !== t) ? ["width", "height"] : ["height", "width"],
            w = c.duration / 2,
            z = {},
            A = {};
        b.effects.save(g, h);
        g.show();
        e = b.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        f = f ? [e.width(), e.height()] : [e.height(), e.width()];
        o && (r = parseInt(o[1], 10) / 100 * f[s ? 0 : 1]);
        p && e.css(t ? {
            height: 0,
            width: r
        } : {
            height: r,
            width: 0
        });
        z[u[0]] = p ? f[0] : r;
        A[u[1]] = p ? f[1] : 0;
        e.animate(z, w, c.easing).animate(A, w, c.easing, function () {
            s &&
                g.hide();
            b.effects.restore(g, h);
            b.effects.removeWrapper(g);
            d()
        })
    };
    b.effects.effect.highlight = function (c, d) {
        var e = b(this),
            f = ["backgroundImage", "backgroundColor", "opacity"],
            g = b.effects.setMode(e, c.mode || "show"),
            h = {
                backgroundColor: e.css("backgroundColor")
            };
        "hide" === g && (h.opacity = 0);
        b.effects.save(e, f);
        e.show().css({
            backgroundImage: "none",
            backgroundColor: c.color || "#ffff99"
        }).animate(h, {
            queue: !1,
            duration: c.duration,
            easing: c.easing,
            complete: function () {
                "hide" === g && e.hide();
                b.effects.restore(e, f);
                d()
            }
        })
    };
    b.effects.effect.size = function (c, d) {
        var e, f, g, h, p, s, r = b(this),
            o = "position top bottom left right width height overflow opacity".split(" ");
        p = "position top bottom left right overflow opacity".split(" ");
        var t = ["width", "height", "overflow"],
            u = ["fontSize"],
            w = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            z = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            A = b.effects.setMode(r, c.mode || "effect"),
            C = c.restore || "effect" !== A,
            G = c.scale || "both",
            H = c.origin || ["middle", "center"],
            K = r.css("position"),
            P = C ? o : p,
            T = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === A && r.show();
        p = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        };
        "toggle" === c.mode && "show" === A ? (r.from = c.to || T, r.to = c.from || p) : (r.from = c.from || ("show" === A ? T : p), r.to = c.to || ("hide" === A ? T : p));
        g = r.from.height / p.height;
        h = r.from.width / p.width;
        e = r.to.height / p.height;
        f = r.to.width / p.width;
        ("box" === G || "both" === G) && (g !== e && (P = P.concat(w), r.from = b.effects.setTransition(r, w, g, r.from), r.to =
            b.effects.setTransition(r, w, e, r.to)), h !== f && (P = P.concat(z), r.from = b.effects.setTransition(r, z, h, r.from), r.to = b.effects.setTransition(r, z, f, r.to)));
        ("content" === G || "both" === G) && g !== e && (P = P.concat(u).concat(t), r.from = b.effects.setTransition(r, u, g, r.from), r.to = b.effects.setTransition(r, u, e, r.to));
        b.effects.save(r, P);
        r.show();
        b.effects.createWrapper(r);
        r.css("overflow", "hidden").css(r.from);
        H && (s = b.effects.getBaseline(H, p), r.from.top = (p.outerHeight - r.outerHeight()) * s.y, r.from.left = (p.outerWidth - r.outerWidth()) *
            s.x, r.to.top = (p.outerHeight - r.to.outerHeight) * s.y, r.to.left = (p.outerWidth - r.to.outerWidth) * s.x);
        r.css(r.from);
        ("content" === G || "both" === G) && (w = w.concat(["marginTop", "marginBottom"]).concat(u), z = z.concat(["marginLeft", "marginRight"]), t = o.concat(w).concat(z), r.find("*[width]").each(function () {
            var d = b(this),
                k = d.height(),
                o = d.width(),
                s = d.outerHeight(),
                u = d.outerWidth();
            C && b.effects.save(d, t);
            d.from = {
                height: k * g,
                width: o * h,
                outerHeight: s * g,
                outerWidth: u * h
            };
            d.to = {
                height: k * e,
                width: o * f,
                outerHeight: k * e,
                outerWidth: o *
                    f
            };
            g !== e && (d.from = b.effects.setTransition(d, w, g, d.from), d.to = b.effects.setTransition(d, w, e, d.to));
            h !== f && (d.from = b.effects.setTransition(d, z, h, d.from), d.to = b.effects.setTransition(d, z, f, d.to));
            d.css(d.from);
            d.animate(d.to, c.duration, c.easing, function () {
                C && b.effects.restore(d, t)
            })
        }));
        r.animate(r.to, {
            queue: !1,
            duration: c.duration,
            easing: c.easing,
            complete: function () {
                0 === r.to.opacity && r.css("opacity", r.from.opacity);
                "hide" === A && r.hide();
                b.effects.restore(r, P);
                C || ("static" === K ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : b.each(["top", "left"], function (b, c) {
                    r.css(c, function (c, d) {
                        var e = parseInt(d, 10),
                            f = b ? r.to.left : r.to.top;
                        return "auto" === d ? f + "px" : e + f + "px"
                    })
                }));
                b.effects.removeWrapper(r);
                d()
            }
        })
    };
    b.effects.effect.scale = function (c, d) {
        var e = b(this),
            f = b.extend(!0, {}, c),
            g = b.effects.setMode(e, c.mode || "effect"),
            h = parseInt(c.percent, 10) || (0 === parseInt(c.percent, 10) ? 0 : "hide" === g ? 0 : 100),
            p = c.direction || "both",
            s = c.origin,
            r = {
                height: e.height(),
                width: e.width(),
                outerHeight: e.outerHeight(),
                outerWidth: e.outerWidth()
            },
            o = "horizontal" !== p ? h / 100 : 1,
            h = "vertical" !== p ? h / 100 : 1;
        f.effect = "size";
        f.queue = !1;
        f.complete = d;
        "effect" !== g && (f.origin = s || ["middle", "center"], f.restore = !0);
        f.from = c.from || ("show" === g ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : r);
        f.to = {
            height: r.height * o,
            width: r.width * h,
            outerHeight: r.outerHeight * o,
            outerWidth: r.outerWidth * h
        };
        f.fade && ("show" === g && (f.from.opacity = 0, f.to.opacity = 1), "hide" === g && (f.from.opacity = 1, f.to.opacity = 0));
        e.effect(f)
    };
    b.effects.effect.puff = function (c, d) {
        var e = b(this),
            f = b.effects.setMode(e,
                c.mode || "hide"),
            g = "hide" === f,
            h = parseInt(c.percent, 10) || 150,
            p = h / 100,
            s = {
                height: e.height(),
                width: e.width(),
                outerHeight: e.outerHeight(),
                outerWidth: e.outerWidth()
            };
        b.extend(c, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: f,
            complete: d,
            percent: g ? h : 100,
            from: g ? s : {
                height: s.height * p,
                width: s.width * p,
                outerHeight: s.outerHeight * p,
                outerWidth: s.outerWidth * p
            }
        });
        e.effect(c)
    };
    b.effects.effect.pulsate = function (c, d) {
        var e, f = b(this),
            g = b.effects.setMode(f, c.mode || "show");
        e = "show" === g;
        var h = "hide" === g,
            g = 2 * (c.times || 5) + (e || "hide" ===
                g ? 1 : 0),
            p = c.duration / g,
            s = 0,
            r = f.queue(),
            o = r.length;
        (e || !f.is(":visible")) && (f.css("opacity", 0).show(), s = 1);
        for (e = 1; g > e; e++) f.animate({
            opacity: s
        }, p, c.easing), s = 1 - s;
        f.animate({
            opacity: s
        }, p, c.easing);
        f.queue(function () {
            h && f.hide();
            d()
        });
        1 < o && r.splice.apply(r, [1, 0].concat(r.splice(o, g + 1)));
        f.dequeue()
    };
    b.effects.effect.shake = function (c, d) {
        var e, f = b(this),
            g = "position top bottom left right height width".split(" "),
            h = b.effects.setMode(f, c.mode || "effect"),
            p = c.direction || "left";
        e = c.distance || 20;
        var s = c.times ||
            3,
            r = 2 * s + 1,
            o = Math.round(c.duration / r),
            t = "up" === p || "down" === p ? "top" : "left",
            u = "up" === p || "left" === p,
            p = {},
            w = {},
            z = {},
            A = f.queue(),
            C = A.length;
        b.effects.save(f, g);
        f.show();
        b.effects.createWrapper(f);
        p[t] = (u ? "-=" : "+=") + e;
        w[t] = (u ? "+=" : "-=") + 2 * e;
        z[t] = (u ? "-=" : "+=") + 2 * e;
        f.animate(p, o, c.easing);
        for (e = 1; s > e; e++) f.animate(w, o, c.easing).animate(z, o, c.easing);
        f.animate(w, o, c.easing).animate(p, o / 2, c.easing).queue(function () {
            "hide" === h && f.hide();
            b.effects.restore(f, g);
            b.effects.removeWrapper(f);
            d()
        });
        1 < C && A.splice.apply(A, [1, 0].concat(A.splice(C, r + 1)));
        f.dequeue()
    };
    b.effects.effect.slide = function (c, d) {
        var e, f = b(this),
            g = "position top bottom left right width height".split(" "),
            h = b.effects.setMode(f, c.mode || "show"),
            p = "show" === h;
        e = c.direction || "left";
        var s = "up" === e || "down" === e ? "top" : "left",
            r = "up" === e || "left" === e,
            o = {};
        b.effects.save(f, g);
        f.show();
        e = c.distance || f["top" === s ? "outerHeight" : "outerWidth"](!0);
        b.effects.createWrapper(f).css({
            overflow: "hidden"
        });
        p && f.css(s, r ? isNaN(e) ? "-" + e : -e : e);
        o[s] = (p ? r ? "+=" : "-=" : r ? "-=" : "+=") +
            e;
        f.animate(o, {
            queue: !1,
            duration: c.duration,
            easing: c.easing,
            complete: function () {
                "hide" === h && f.hide();
                b.effects.restore(f, g);
                b.effects.removeWrapper(f);
                d()
            }
        })
    };
    b.effects.effect.transfer = function (c, d) {
        var e = b(this),
            f = b(c.to),
            g = "fixed" === f.css("position"),
            h = b("body"),
            p = g ? h.scrollTop() : 0,
            h = g ? h.scrollLeft() : 0,
            s = f.offset(),
            f = {
                top: s.top - p,
                left: s.left - h,
                height: f.innerHeight(),
                width: f.innerWidth()
            },
            s = e.offset(),
            r = b("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(c.className).css({
                top: s.top -
                    p,
                left: s.left - h,
                height: e.innerHeight(),
                width: e.innerWidth(),
                position: g ? "fixed" : "absolute"
            }).animate(f, c.duration, c.easing, function () {
                r.remove();
                d()
            })
    }
});

! function (b) {
    var c = null;
    b.modal = function (d, e) {
        b.modal.close();
        var f, g;
        if (this.$body = b("body"), this.options = b.extend({}, b.modal.defaults, e), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), d.is("a"))
            if (g = d.attr("href"), /^#/.test(g)) {
                if (this.$elm = b(g), 1 !== this.$elm.length) return null;
                this.open()
            } else this.$elm = b("<div>"), this.$body.append(this.$elm), f = function (b, c) {
                c.elm.remove()
            }, this.showSpinner(), d.trigger(b.modal.AJAX_SEND), b.get(g).done(function (e) {
                c && (d.trigger(b.modal.AJAX_SUCCESS),
                    c.$elm.empty().append(e).on(b.modal.CLOSE, f), c.hideSpinner(), c.open(), d.trigger(b.modal.AJAX_COMPLETE))
            }).fail(function () {
                d.trigger(b.modal.AJAX_FAIL);
                c.hideSpinner();
                d.trigger(b.modal.AJAX_COMPLETE)
            });
        else this.$elm = d, this.open()
    };
    b.modal.prototype = {
        constructor: b.modal,
        open: function () {
            var c = this;
            this.options.doFade ? (this.block(), setTimeout(function () {
                c.show()
            }, this.options.fadeDuration * this.options.fadeDelay)) : (this.block(), this.show());
            this.options.escapeClose && b(document).on("keydown.modal", function (c) {
                27 ==
                    c.which && b.modal.close()
            });
            this.options.clickClose && this.blocker.click(b.modal.close)
        },
        close: function () {
            this.unblock();
            this.hide();
            b(document).off("keydown.modal")
        },
        block: function () {
            var c = this.options.doFade ? 0 : this.options.opacity;
            this.$elm.trigger(b.modal.BEFORE_BLOCK, [this._ctx()]);
            this.blocker = b('<div class="jquery-modal blocker"></div>').css({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: this.options.zIndex,
                background: this.options.overlay,
                opacity: c
            });
            this.$body.append(this.blocker);
            this.options.doFade && this.blocker.animate({
                opacity: this.options.opacity
            }, this.options.fadeDuration);
            this.$elm.trigger(b.modal.BLOCK, [this._ctx()])
        },
        unblock: function () {
            this.options.doFade ? this.blocker.fadeOut(this.options.fadeDuration, function () {
                b(this).remove()
            }) : this.blocker.remove()
        },
        show: function () {
            this.$elm.trigger(b.modal.BEFORE_OPEN, [this._ctx()]);
            this.options.showClose && (this.closeButton = b('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText +
                "</a>"), this.$elm.append(this.closeButton));
            this.$elm.addClass(this.options.modalClass + " current");
            this.center();
            this.options.doFade ? this.$elm.fadeIn(this.options.fadeDuration) : this.$elm.show();
            this.$elm.trigger(b.modal.OPEN, [this._ctx()])
        },
        hide: function () {
            this.$elm.trigger(b.modal.BEFORE_CLOSE, [this._ctx()]);
            this.closeButton && this.closeButton.remove();
            this.$elm.removeClass("current");
            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration) : this.$elm.hide();
            this.$elm.trigger(b.modal.CLOSE, [this._ctx()])
        },
        showSpinner: function () {
            this.options.showSpinner && (this.spinner = this.spinner || b('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())
        },
        hideSpinner: function () {
            this.spinner && this.spinner.remove()
        },
        center: function () {
            this.$elm.css({
                position: "fixed",
                top: "50%",
                left: "50%",
                marginTop: -(this.$elm.outerHeight() / 2),
                marginLeft: -(this.$elm.outerWidth() / 2),
                zIndex: this.options.zIndex + 1
            })
        },
        _ctx: function () {
            return {
                elm: this.$elm,
                blocker: this.blocker,
                options: this.options
            }
        }
    };
    b.modal.prototype.resize = b.modal.prototype.center;
    b.modal.close = function (b) {
        if (c) return b && b.preventDefault(), c.close(), b = c.$elm, c = null, b
    };
    b.modal.resize = function () {
        c && c.resize()
    };
    b.modal.isActive = function () {
        return c ? !0 : !1
    };
    b.modal.defaults = {
        overlay: "#000",
        opacity: 0.75,
        zIndex: 1E3,
        escapeClose: !0,
        clickClose: !0,
        closeText: "",
        closeClass: "",
        modalClass: "modal",
        spinnerHtml: null,
        showSpinner: !0,
        showClose: !0,
        fadeDuration: null,
        fadeDelay: 1
    };
    b.modal.BEFORE_BLOCK = "modal:before-block";
    b.modal.BLOCK = "modal:block";
    b.modal.BEFORE_OPEN = "modal:before-open";
    b.modal.OPEN = "modal:open";
    b.modal.BEFORE_CLOSE = "modal:before-close";
    b.modal.CLOSE = "modal:close";
    b.modal.AJAX_SEND = "modal:ajax:send";
    b.modal.AJAX_SUCCESS = "modal:ajax:success";
    b.modal.AJAX_FAIL = "modal:ajax:fail";
    b.modal.AJAX_COMPLETE = "modal:ajax:complete";
    b.fn.modal = function (d) {
        return 1 === this.length && (c = new b.modal(this, d)), this
    };
    b(document).on("click.modal", 'a[rel="modal:close"]', b.modal.close);
    b(document).on("click.modal", 'a[rel="modal:open"]',
        function (c) {
            c.preventDefault();
            b(this).modal()
        })
}(jQuery);