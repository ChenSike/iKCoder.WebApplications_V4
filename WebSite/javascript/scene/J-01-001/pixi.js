var PixiJSFn = function (t, e, i) {
    var n, n;
    (function (e, i) {
        ! function (e) {
            t.exports = e()
        }(function () {
            var t;
            return function r(t, e, i) {
                function o(a, h) {
                    if (!e[a]) {
                        if (!t[a]) {
                            var l = "function" == typeof n && n;
                            if (!h && l) return n(a, !0);
                            if (s) return s(a, !0);
                            var c = new Error("Cannot find module '" + a + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var u = e[a] = {
                            exports: {}
                        };
                        t[a][0].call(u.exports, function (e) {
                            var i = t[a][1][e];
                            return o(i ? i : e)
                        }, u, u.exports, r, t, e, i)
                    }
                    return e[a].exports
                }
                for (var s = "function" == typeof n && n, a = 0; a < i.length; a++) o(i[a]);
                return o
            }({
                1: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }

                        function r(t, e, i, n) {
                            (0, s["default"])(e)(t, (0, h["default"])(i), n)
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = r;
                        var o = t("./internal/eachOfLimit"),
                            s = n(o),
                            a = t("./internal/withoutIndex"),
                            h = n(a);
                        e.exports = i["default"]
                    }, {
                        "./internal/eachOfLimit": 5,
                        "./internal/withoutIndex": 12
                    }
                ],
                2: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        });
                        var r = t("./eachLimit"),
                            o = n(r),
                            s = t("./internal/doLimit"),
                            a = n(s);
                        i["default"] = (0, a["default"])(o["default"], 1), e.exports = i["default"]
                    }, {
                        "./eachLimit": 1,
                        "./internal/doLimit": 4
                    }
                ],
                3: [
                    function (t, e, i) {
                        "use strict";

                        function n() {
                            this.head = this.tail = null, this.length = 0
                        }

                        function r(t, e) {
                            t.length = 1, t.head = t.tail = e
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = n, n.prototype.removeLink = function (t) {
                            return t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev, t.prev = t.next = null, this.length -= 1, t
                        }, n.prototype.empty = n, n.prototype.insertAfter = function (t, e) {
                            e.prev = t, e.next = t.next, t.next ? t.next.prev = e : this.tail = e, t.next = e, this.length += 1
                        }, n.prototype.insertBefore = function (t, e) {
                            e.prev = t.prev, e.next = t, t.prev ? t.prev.next = e : this.head = e, t.prev = e, this.length += 1
                        }, n.prototype.unshift = function (t) {
                            this.head ? this.insertBefore(this.head, t) : r(this, t)
                        }, n.prototype.push = function (t) {
                            this.tail ? this.insertAfter(this.tail, t) : r(this, t)
                        }, n.prototype.shift = function () {
                            return this.head && this.removeLink(this.head)
                        }, n.prototype.pop = function () {
                            return this.tail && this.removeLink(this.tail)
                        }, e.exports = i["default"]
                    }, {}
                ],
                4: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e) {
                            return function (i, n, r) {
                                return t(i, e, n, r)
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = n, e.exports = i["default"]
                    }, {}
                ],
                5: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }

                        function r(t) {
                            return function (e, i, n) {
                                function r(t) {
                                    if (u -= 1, t) l = !0, n(t);
                                    else {
                                        if (l && u <= 0) return n(null);
                                        o()
                                    }
                                }

                                function o() {
                                    for (; u < t && !l;) {
                                        var e = a();
                                        if (null === e) return l = !0, void (u <= 0 && n(null));
                                        u += 1, i(e.value, e.key, (0, p["default"])(r))
                                    }
                                }
                                if (n = (0, h["default"])(n || s["default"]), t <= 0 || !e) return n(null);
                                var a = (0, c["default"])(e),
                                    l = !1,
                                    u = 0;
                                o()
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = r;
                        var o = t("lodash/noop"),
                            s = n(o),
                            a = t("./once"),
                            h = n(a),
                            l = t("./iterator"),
                            c = n(l),
                            u = t("./onlyOnce"),
                            p = n(u);
                        e.exports = i["default"]
                    }, {
                        "./iterator": 7,
                        "./once": 8,
                        "./onlyOnce": 9,
                        "lodash/noop": 38
                    }
                ],
                6: [
                    function (t, e, i) {
                        "use strict";
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = function (t) {
                            return n && t[n] && t[n]()
                        };
                        var n = "function" == typeof Symbol && Symbol.iterator;
                        e.exports = i["default"]
                    }, {}
                ],
                7: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }

                        function r(t) {
                            var e = -1,
                                i = t.length;
                            return function () {
                                return ++e < i ? {
                                    value: t[e],
                                    key: e
                                } : null
                            }
                        }

                        function o(t) {
                            var e = -1;
                            return function () {
                                var i = t.next();
                                return i.done ? null : (e++, {
                                    value: i.value,
                                    key: e
                                })
                            }
                        }

                        function s(t) {
                            var e = (0, d["default"])(t),
                                i = -1,
                                n = e.length;
                            return function () {
                                var r = e[++i];
                                return i < n ? {
                                    value: t[r],
                                    key: r
                                } : null
                            }
                        }

                        function a(t) {
                            if ((0, l["default"])(t)) return r(t);
                            var e = (0, u["default"])(t);
                            return e ? o(e) : s(t)
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = a;
                        var h = t("lodash/isArrayLike"),
                            l = n(h),
                            c = t("./getIterator"),
                            u = n(c),
                            p = t("lodash/keys"),
                            d = n(p);
                        e.exports = i["default"]
                    }, {
                        "./getIterator": 6,
                        "lodash/isArrayLike": 30,
                        "lodash/keys": 37
                    }
                ],
                8: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return function () {
                                if (null !== t) {
                                    var e = t;
                                    t = null, e.apply(this, arguments)
                                }
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = n, e.exports = i["default"]
                    }, {}
                ],
                9: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return function () {
                                if (null === t) throw new Error("Callback was already called.");
                                var e = t;
                                t = null, e.apply(this, arguments)
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = n, e.exports = i["default"]
                    }, {}
                ],
                10: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }

                        function r(t, e, i) {
                            function n(t, e, i) {
                                if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
                                return l.started = !0, (0, h["default"])(t) || (t = [t]), 0 === t.length && l.idle() ? (0, g["default"])(function () {
                                    l.drain()
                                }) : ((0, s["default"])(t, function (t) {
                                    var n = {
                                        data: t,
                                        callback: i || c["default"]
                                    };
                                    e ? l._tasks.unshift(n) : l._tasks.push(n)
                                }), void (0, g["default"])(l.process))
                            }

                            function r(t) {
                                return (0, p["default"])(function (e) {
                                    o -= 1, (0, s["default"])(t, function (t) {
                                        (0, s["default"])(a, function (e, i) {
                                            if (e === t) return a.splice(i, 1), !1
                                        }), t.callback.apply(t, e), null != e[0] && l.error(e[0], t.data)
                                    }), o <= l.concurrency - l.buffer && l.unsaturated(), l.idle() && l.drain(), l.process()
                                })
                            }
                            if (null == e) e = 1;
                            else if (0 === e) throw new Error("Concurrency must not be zero");
                            var o = 0,
                                a = [],
                                l = {
                                    _tasks: new y["default"],
                                    concurrency: e,
                                    payload: i,
                                    saturated: c["default"],
                                    unsaturated: c["default"],
                                    buffer: e / 4,
                                    empty: c["default"],
                                    drain: c["default"],
                                    error: c["default"],
                                    started: !1,
                                    paused: !1,
                                    push: function (t, e) {
                                        n(t, !1, e)
                                    },
                                    kill: function () {
                                        l.drain = c["default"], l._tasks.empty()
                                    },
                                    unshift: function (t, e) {
                                        n(t, !0, e)
                                    },
                                    process: function () {
                                        for (; !l.paused && o < l.concurrency && l._tasks.length;) {
                                            var e = [],
                                                i = [],
                                                n = l._tasks.length;
                                            l.payload && (n = Math.min(n, l.payload));
                                            for (var s = 0; s < n; s++) {
                                                var h = l._tasks.shift();
                                                e.push(h), i.push(h.data)
                                            }
                                            0 === l._tasks.length && l.empty(), o += 1, a.push(e[0]), o === l.concurrency && l.saturated();
                                            var c = (0, f["default"])(r(e));
                                            t(i, c)
                                        }
                                    },
                                    length: function () {
                                        return l._tasks.length
                                    },
                                    running: function () {
                                        return o
                                    },
                                    workersList: function () {
                                        return a
                                    },
                                    idle: function () {
                                        return l._tasks.length + o === 0
                                    },
                                    pause: function () {
                                        l.paused = !0
                                    },
                                    resume: function () {
                                        if (l.paused !== !1) {
                                            l.paused = !1;
                                            for (var t = Math.min(l.concurrency, l._tasks.length), e = 1; e <= t; e++) (0, g["default"])(l.process)
                                        }
                                    }
                                };
                            return l
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = r;
                        var o = t("lodash/_arrayEach"),
                            s = n(o),
                            a = t("lodash/isArray"),
                            h = n(a),
                            l = t("lodash/noop"),
                            c = n(l),
                            u = t("lodash/rest"),
                            p = n(u),
                            d = t("./onlyOnce"),
                            f = n(d),
                            m = t("./setImmediate"),
                            g = n(m),
                            v = t("./DoublyLinkedList"),
                            y = n(v);
                        e.exports = i["default"]
                    }, {
                        "./DoublyLinkedList": 3,
                        "./onlyOnce": 9,
                        "./setImmediate": 11,
                        "lodash/_arrayEach": 19,
                        "lodash/isArray": 29,
                        "lodash/noop": 38,
                        "lodash/rest": 39
                    }
                ],
                11: [
                    function (t, i, n) {
                        (function (i) {
                            "use strict";

                            function r(t) {
                                return t && t.__esModule ? t : {
                                    "default": t
                                }
                            }

                            function o(t) {
                                setTimeout(t, 0)
                            }

                            function s(t) {
                                return (0, l["default"])(function (e, i) {
                                    t(function () {
                                        e.apply(null, i)
                                    })
                                })
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            }), n.hasNextTick = n.hasSetImmediate = void 0, n.fallback = o, n.wrap = s;
                            var a, h = t("lodash/rest"),
                                l = r(h),
                                c = n.hasSetImmediate = "function" == typeof e && e,
                                u = n.hasNextTick = "object" == typeof i && "function" == typeof i.nextTick;
                            a = c ? e : u ? i.nextTick : o, n["default"] = s(a)
                        }).call(this, t("_process"))
                    }, {
                        _process: 61,
                        "lodash/rest": 39
                    }
                ],
                12: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return function (e, i, n) {
                                return t(e, n)
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = n, e.exports = i["default"]
                    }, {}
                ],
                13: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }
                        Object.defineProperty(i, "__esModule", {
                            value: !0
                        }), i["default"] = function (t, e) {
                            return (0, o["default"])(function (e, i) {
                                t(e[0], i)
                            }, e, 1)
                        };
                        var r = t("./internal/queue"),
                            o = n(r);
                        e.exports = i["default"]
                    }, {
                        "./internal/queue": 10
                    }
                ],
                14: [
                    function (t, e, i) {
                        "use strict";
                        "use restrict";

                        function n(t) {
                            var e = 32;
                            return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
                        }
                        var r = 32;
                        i.INT_BITS = r, i.INT_MAX = 2147483647, i.INT_MIN = -1 << r - 1, i.sign = function (t) {
                            return (t > 0) - (t < 0)
                        }, i.abs = function (t) {
                            var e = t >> r - 1;
                            return (t ^ e) - e
                        }, i.min = function (t, e) {
                            return e ^ (t ^ e) & -(t < e)
                        }, i.max = function (t, e) {
                            return t ^ (t ^ e) & -(t < e)
                        }, i.isPow2 = function (t) {
                            return !(t & t - 1 || !t)
                        }, i.log2 = function (t) {
                            var e, i;
                            return e = (t > 65535) << 4, t >>>= e, i = (t > 255) << 3, t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, e |= i, e | t >> 1
                        }, i.log10 = function (t) {
                            return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
                        }, i.popCount = function (t) {
                            return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24
                        }, i.countTrailingZeros = n, i.nextPow2 = function (t) {
                            return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1
                        }, i.prevPow2 = function (t) {
                            return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t - (t >>> 1)
                        }, i.parity = function (t) {
                            return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, t &= 15, 27030 >>> t & 1
                        };
                        var o = new Array(256);
                        ! function (t) {
                            for (var e = 0; e < 256; ++e) {
                                var i = e,
                                    n = e,
                                    r = 7;
                                for (i >>>= 1; i; i >>>= 1) n <<= 1, n |= 1 & i, --r;
                                t[e] = n << r & 255
                            }
                        }(o), i.reverse = function (t) {
                            return o[255 & t] << 24 | o[t >>> 8 & 255] << 16 | o[t >>> 16 & 255] << 8 | o[t >>> 24 & 255]
                        }, i.interleave2 = function (t, e) {
                            return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
                        }, i.deinterleave2 = function (t, e) {
                            return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), t = 65535 & (t | t >>> 16), t << 16 >> 16
                        }, i.interleave3 = function (t, e, i) {
                            return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, i &= 1023, i = 4278190335 & (i | i << 16), i = 251719695 & (i | i << 8), i = 3272356035 & (i | i << 4), i = 1227133513 & (i | i << 2), t | i << 2
                        }, i.deinterleave3 = function (t, e) {
                            return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), t = 1023 & (t | t >>> 16), t << 22 >> 22
                        }, i.nextCombination = function (t) {
                            var e = t | t - 1;
                            return e + 1 | (~e & -~e) - 1 >>> n(t) + 1
                        }
                    }, {}
                ],
                15: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e, i) {
                            i = i || 2;
                            var n = e && e.length,
                                o = n ? e[0] * i : t.length,
                                a = r(t, 0, o, i, !0),
                                h = [];
                            if (!a) return h;
                            var l, c, p, d, f, m, g;
                            if (n && (a = u(t, e, a, i)), t.length > 80 * i) {
                                l = p = t[0], c = d = t[1];
                                for (var v = i; v < o; v += i) f = t[v], m = t[v + 1], f < l && (l = f), m < c && (c = m), f > p && (p = f), m > d && (d = m);
                                g = Math.max(p - l, d - c)
                            }
                            return s(a, h, i, l, c, g), h
                        }

                        function r(t, e, i, n, r) {
                            var o, s;
                            if (r === P(t, e, i, n) > 0)
                                for (o = e; o < i; o += n) s = C(o, t[o], t[o + 1], s);
                            else
                                for (o = i - n; o >= e; o -= n) s = C(o, t[o], t[o + 1], s);
                            return s && w(s, s.next) && (L(s), s = s.next), s
                        }

                        function o(t, e) {
                            if (!t) return t;
                            e || (e = t);
                            var i, n = t;
                            do
                                if (i = !1, n.steiner || !w(n, n.next) && 0 !== b(n.prev, n, n.next)) n = n.next;
                                else {
                                    if (L(n), n = e = n.prev, n === n.next) return null;
                                    i = !0
                                }
                            while (i || n !== e);
                            return e
                        }

                        function s(t, e, i, n, r, u, p) {
                            if (t) {
                                !p && u && m(t, n, r, u);
                                for (var d, f, g = t; t.prev !== t.next;)
                                    if (d = t.prev, f = t.next, u ? h(t, n, r, u) : a(t)) e.push(d.i / i), e.push(t.i / i), e.push(f.i / i), L(t), t = f.next, g = f.next;
                                    else if (t = f, t === g) {
                                        p ? 1 === p ? (t = l(t, e, i), s(t, e, i, n, r, u, 2)) : 2 === p && c(t, e, i, n, r, u) : s(o(t), e, i, n, r, u, 1);
                                        break
                                    }
                            }
                        }

                        function a(t) {
                            var e = t.prev,
                                i = t,
                                n = t.next;
                            if (b(e, i, n) >= 0) return !1;
                            for (var r = t.next.next; r !== t.prev;) {
                                if (_(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && b(r.prev, r, r.next) >= 0) return !1;
                                r = r.next
                            }
                            return !0
                        }

                        function h(t, e, i, n) {
                            var r = t.prev,
                                o = t,
                                s = t.next;
                            if (b(r, o, s) >= 0) return !1;
                            for (var a = r.x < o.x ? r.x < s.x ? r.x : s.x : o.x < s.x ? o.x : s.x, h = r.y < o.y ? r.y < s.y ? r.y : s.y : o.y < s.y ? o.y : s.y, l = r.x > o.x ? r.x > s.x ? r.x : s.x : o.x > s.x ? o.x : s.x, c = r.y > o.y ? r.y > s.y ? r.y : s.y : o.y > s.y ? o.y : s.y, u = v(a, h, e, i, n), p = v(l, c, e, i, n), d = t.nextZ; d && d.z <= p;) {
                                if (d !== t.prev && d !== t.next && _(r.x, r.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
                                d = d.nextZ
                            }
                            for (d = t.prevZ; d && d.z >= u;) {
                                if (d !== t.prev && d !== t.next && _(r.x, r.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
                                d = d.prevZ
                            }
                            return !0
                        }

                        function l(t, e, i) {
                            var n = t;
                            do {
                                var r = n.prev,
                                    o = n.next.next;
                                !w(r, o) && S(r, n, n.next, o) && M(r, o) && M(o, r) && (e.push(r.i / i), e.push(n.i / i), e.push(o.i / i), L(n), L(n.next), n = t = o), n = n.next
                            } while (n !== t);
                            return n
                        }

                        function c(t, e, i, n, r, a) {
                            var h = t;
                            do {
                                for (var l = h.next.next; l !== h.prev;) {
                                    if (h.i !== l.i && x(h, l)) {
                                        var c = A(h, l);
                                        return h = o(h, h.next), c = o(c, c.next), s(h, e, i, n, r, a), void s(c, e, i, n, r, a)
                                    }
                                    l = l.next
                                }
                                h = h.next
                            } while (h !== t)
                        }

                        function u(t, e, i, n) {
                            var s, a, h, l, c, u = [];
                            for (s = 0, a = e.length; s < a; s++) h = e[s] * n, l = s < a - 1 ? e[s + 1] * n : t.length, c = r(t, h, l, n, !1), c === c.next && (c.steiner = !0), u.push(y(c));
                            for (u.sort(p), s = 0; s < u.length; s++) d(u[s], i), i = o(i, i.next);
                            return i
                        }

                        function p(t, e) {
                            return t.x - e.x
                        }

                        function d(t, e) {
                            if (e = f(t, e)) {
                                var i = A(e, t);
                                o(i, i.next)
                            }
                        }

                        function f(t, e) {
                            var i, n = e,
                                r = t.x,
                                o = t.y,
                                s = -(1 / 0);
                            do {
                                if (o <= n.y && o >= n.next.y) {
                                    var a = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                                    if (a <= r && a > s) {
                                        if (s = a, a === r) {
                                            if (o === n.y) return n;
                                            if (o === n.next.y) return n.next
                                        }
                                        i = n.x < n.next.x ? n : n.next
                                    }
                                }
                                n = n.next
                            } while (n !== e);
                            if (!i) return null;
                            if (r === s) return i.prev;
                            var h, l = i,
                                c = i.x,
                                u = i.y,
                                p = 1 / 0;
                            for (n = i.next; n !== l;) r >= n.x && n.x >= c && _(o < u ? r : s, o, c, u, o < u ? s : r, o, n.x, n.y) && (h = Math.abs(o - n.y) / (r - n.x), (h < p || h === p && n.x > i.x) && M(n, t) && (i = n, p = h)), n = n.next;
                            return i
                        }

                        function m(t, e, i, n) {
                            var r = t;
                            do null === r.z && (r.z = v(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== t);
                            r.prevZ.nextZ = null, r.prevZ = null, g(r)
                        }

                        function g(t) {
                            var e, i, n, r, o, s, a, h, l = 1;
                            do {
                                for (i = t, t = null, o = null, s = 0; i;) {
                                    for (s++, n = i, a = 0, e = 0; e < l && (a++, n = n.nextZ, n) ; e++);
                                    for (h = l; a > 0 || h > 0 && n;) 0 === a ? (r = n, n = n.nextZ, h--) : 0 !== h && n ? i.z <= n.z ? (r = i, i = i.nextZ, a--) : (r = n, n = n.nextZ, h--) : (r = i, i = i.nextZ, a--), o ? o.nextZ = r : t = r, r.prevZ = o, o = r;
                                    i = n
                                }
                                o.nextZ = null, l *= 2
                            } while (s > 1);
                            return t
                        }

                        function v(t, e, i, n, r) {
                            return t = 32767 * (t - i) / r, e = 32767 * (e - n) / r, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
                        }

                        function y(t) {
                            var e = t,
                                i = t;
                            do e.x < i.x && (i = e), e = e.next; while (e !== t);
                            return i
                        }

                        function _(t, e, i, n, r, o, s, a) {
                            return (r - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (n - a) - (i - s) * (e - a) >= 0 && (i - s) * (o - a) - (r - s) * (n - a) >= 0
                        }

                        function x(t, e) {
                            return t.next.i !== e.i && t.prev.i !== e.i && !T(t, e) && M(t, e) && M(e, t) && E(t, e)
                        }

                        function b(t, e, i) {
                            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
                        }

                        function w(t, e) {
                            return t.x === e.x && t.y === e.y
                        }

                        function S(t, e, i, n) {
                            return !!(w(t, e) && w(i, n) || w(t, n) && w(i, e)) || b(t, e, i) > 0 != b(t, e, n) > 0 && b(i, n, t) > 0 != b(i, n, e) > 0
                        }

                        function T(t, e) {
                            var i = t;
                            do {
                                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && S(i, i.next, t, e)) return !0;
                                i = i.next
                            } while (i !== t);
                            return !1
                        }

                        function M(t, e) {
                            return b(t.prev, t, t.next) < 0 ? b(t, e, t.next) >= 0 && b(t, t.prev, e) >= 0 : b(t, e, t.prev) < 0 || b(t, t.next, e) < 0
                        }

                        function E(t, e) {
                            var i = t,
                                n = !1,
                                r = (t.x + e.x) / 2,
                                o = (t.y + e.y) / 2;
                            do i.y > o != i.next.y > o && r < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next; while (i !== t);
                            return n
                        }

                        function A(t, e) {
                            var i = new R(t.i, t.x, t.y),
                                n = new R(e.i, e.x, e.y),
                                r = t.next,
                                o = e.prev;
                            return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, o.next = n, n.prev = o, n
                        }

                        function C(t, e, i, n) {
                            var r = new R(t, e, i);
                            return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
                        }

                        function L(t) {
                            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
                        }

                        function R(t, e, i) {
                            this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
                        }

                        function P(t, e, i, n) {
                            for (var r = 0, o = e, s = i - n; o < i; o += n) r += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
                            return r
                        }
                        e.exports = n, n.deviation = function (t, e, i, n) {
                            var r = e && e.length,
                                o = r ? e[0] * i : t.length,
                                s = Math.abs(P(t, 0, o, i));
                            if (r)
                                for (var a = 0, h = e.length; a < h; a++) {
                                    var l = e[a] * i,
                                        c = a < h - 1 ? e[a + 1] * i : t.length;
                                    s -= Math.abs(P(t, l, c, i))
                                }
                            var u = 0;
                            for (a = 0; a < n.length; a += 3) {
                                var p = n[a] * i,
                                    d = n[a + 1] * i,
                                    f = n[a + 2] * i;
                                u += Math.abs((t[p] - t[f]) * (t[d + 1] - t[p + 1]) - (t[p] - t[d]) * (t[f + 1] - t[p + 1]))
                            }
                            return 0 === s && 0 === u ? 0 : Math.abs((u - s) / s)
                        }, n.flatten = function (t) {
                            for (var e = t[0][0].length, i = {
                                vertices: [],
                                holes: [],
                                dimensions: e
                            }, n = 0, r = 0; r < t.length; r++) {
                                for (var o = 0; o < t[r].length; o++)
                                    for (var s = 0; s < e; s++) i.vertices.push(t[r][o][s]);
                                r > 0 && (n += t[r - 1].length, i.holes.push(n))
                            }
                            return i
                        }
                    }, {}
                ],
                16: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e, i) {
                            this.fn = t, this.context = e, this.once = i || !1
                        }

                        function r() { }
                        var o = Object.prototype.hasOwnProperty,
                            s = "function" != typeof Object.create && "~";
                        r.prototype._events = void 0, r.prototype.eventNames = function () {
                            var t, e = this._events,
                                i = [];
                            if (!e) return i;
                            for (t in e) o.call(e, t) && i.push(s ? t.slice(1) : t);
                            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                        }, r.prototype.listeners = function (t, e) {
                            var i = s ? s + t : t,
                                n = this._events && this._events[i];
                            if (e) return !!n;
                            if (!n) return [];
                            if (n.fn) return [n.fn];
                            for (var r = 0, o = n.length, a = new Array(o) ; r < o; r++) a[r] = n[r].fn;
                            return a
                        }, r.prototype.emit = function (t, e, i, n, r, o) {
                            var a = s ? s + t : t;
                            if (!this._events || !this._events[a]) return !1;
                            var h, l, c = this._events[a],
                                u = arguments.length;
                            if ("function" == typeof c.fn) {
                                switch (c.once && this.removeListener(t, c.fn, void 0, !0), u) {
                                    case 1:
                                        return c.fn.call(c.context), !0;
                                    case 2:
                                        return c.fn.call(c.context, e), !0;
                                    case 3:
                                        return c.fn.call(c.context, e, i), !0;
                                    case 4:
                                        return c.fn.call(c.context, e, i, n), !0;
                                    case 5:
                                        return c.fn.call(c.context, e, i, n, r), !0;
                                    case 6:
                                        return c.fn.call(c.context, e, i, n, r, o), !0
                                }
                                for (l = 1, h = new Array(u - 1) ; l < u; l++) h[l - 1] = arguments[l];
                                c.fn.apply(c.context, h)
                            } else {
                                var p, d = c.length;
                                for (l = 0; l < d; l++) switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), u) {
                                    case 1:
                                        c[l].fn.call(c[l].context);
                                        break;
                                    case 2:
                                        c[l].fn.call(c[l].context, e);
                                        break;
                                    case 3:
                                        c[l].fn.call(c[l].context, e, i);
                                        break;
                                    default:
                                        if (!h)
                                            for (p = 1, h = new Array(u - 1) ; p < u; p++) h[p - 1] = arguments[p];
                                        c[l].fn.apply(c[l].context, h)
                                }
                            }
                            return !0
                        }, r.prototype.on = function (t, e, i) {
                            var r = new n(e, i || this),
                                o = s ? s + t : t;
                            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : this._events[o] = r, this
                        }, r.prototype.once = function (t, e, i) {
                            var r = new n(e, i || this, (!0)),
                                o = s ? s + t : t;
                            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : this._events[o] = r, this
                        }, r.prototype.removeListener = function (t, e, i, n) {
                            var r = s ? s + t : t;
                            if (!this._events || !this._events[r]) return this;
                            var o = this._events[r],
                                a = [];
                            if (e)
                                if (o.fn) (o.fn !== e || n && !o.once || i && o.context !== i) && a.push(o);
                                else
                                    for (var h = 0, l = o.length; h < l; h++) (o[h].fn !== e || n && !o[h].once || i && o[h].context !== i) && a.push(o[h]);
                            return a.length ? this._events[r] = 1 === a.length ? a[0] : a : delete this._events[r], this
                        }, r.prototype.removeAllListeners = function (t) {
                            return this._events ? (t ? delete this._events[s ? s + t : t] : this._events = s ? {} : Object.create(null), this) : this
                        }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, r.prototype.setMaxListeners = function () {
                            return this
                        }, r.prefixed = s, "undefined" != typeof e && (e.exports = r)
                    }, {}
                ],
                17: [
                    function (e, i, n) {
                        ! function (e) {
                            var n = /iPhone/i,
                                r = /iPod/i,
                                o = /iPad/i,
                                s = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
                                a = /Android/i,
                                h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                                l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                                c = /IEMobile/i,
                                u = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
                                p = /BlackBerry/i,
                                d = /BB10/i,
                                f = /Opera Mini/i,
                                m = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                                g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                                v = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
                                y = function (t, e) {
                                    return t.test(e)
                                },
                                _ = function (t) {
                                    var e = t || navigator.userAgent,
                                        i = e.split("[FBAN");
                                    if ("undefined" != typeof i[1] && (e = i[0]), i = e.split("Twitter"), "undefined" != typeof i[1] && (e = i[0]), this.apple = {
                                        phone: y(n, e),
                                        ipod: y(r, e),
                                        tablet: !y(n, e) && y(o, e),
                                        device: y(n, e) || y(r, e) || y(o, e)
                                    }, this.amazon = {
                                        phone: y(h, e),
                                        tablet: !y(h, e) && y(l, e),
                                        device: y(h, e) || y(l, e)
                                    }, this.android = {
                                        phone: y(h, e) || y(s, e),
                                        tablet: !y(h, e) && !y(s, e) && (y(l, e) || y(a, e)),
                                        device: y(h, e) || y(l, e) || y(s, e) || y(a, e)
                                    }, this.windows = {
                                        phone: y(c, e),
                                        tablet: y(u, e),
                                        device: y(c, e) || y(u, e)
                                    }, this.other = {
                                        blackberry: y(p, e),
                                        blackberry10: y(d, e),
                                        opera: y(f, e),
                                        firefox: y(g, e),
                                        chrome: y(m, e),
                                        device: y(p, e) || y(d, e) || y(f, e) || y(g, e) || y(m, e)
                                    }, this.seven_inch = y(v, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
                                },
                                x = function () {
                                    var t = new _;
                                    return t.Class = _, t
                                };
                            "undefined" != typeof i && i.exports && "undefined" == typeof window ? i.exports = _ : "undefined" != typeof i && i.exports && "undefined" != typeof window ? i.exports = x() : "function" == typeof t && t.amd ? t("isMobile", [], e.isMobile = x()) : e.isMobile = x()
                        }(this)
                    }, {}
                ],
                18: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            switch (i.length) {
                                case 0:
                                    return t.call(e);
                                case 1:
                                    return t.call(e, i[0]);
                                case 2:
                                    return t.call(e, i[0], i[1]);
                                case 3:
                                    return t.call(e, i[0], i[1], i[2])
                            }
                            return t.apply(e, i)
                        }
                        e.exports = n
                    }, {}
                ],
                19: [
                    function (t, e, i) {
                        function n(t, e) {
                            for (var i = -1, n = t ? t.length : 0; ++i < n && e(t[i], i, t) !== !1;);
                            return t
                        }
                        e.exports = n
                    }, {}
                ],
                20: [
                    function (t, e, i) {
                        function n(t, e) {
                            var i = s(t) || o(t) ? r(t.length, String) : [],
                                n = i.length,
                                h = !!n;
                            for (var c in t) !e && !l.call(t, c) || h && ("length" == c || a(c, n)) || i.push(c);
                            return i
                        }
                        var r = t("./_baseTimes"),
                            o = t("./isArguments"),
                            s = t("./isArray"),
                            a = t("./_isIndex"),
                            h = Object.prototype,
                            l = h.hasOwnProperty;
                        e.exports = n
                    }, {
                        "./_baseTimes": 23,
                        "./_isIndex": 24,
                        "./isArguments": 28,
                        "./isArray": 29
                    }
                ],
                21: [
                    function (t, e, i) {
                        function n(t) {
                            if (!r(t)) return o(t);
                            var e = [];
                            for (var i in Object(t)) a.call(t, i) && "constructor" != i && e.push(i);
                            return e
                        }
                        var r = t("./_isPrototype"),
                            o = t("./_nativeKeys"),
                            s = Object.prototype,
                            a = s.hasOwnProperty;
                        e.exports = n
                    }, {
                        "./_isPrototype": 25,
                        "./_nativeKeys": 26
                    }
                ],
                22: [
                    function (t, e, i) {
                        function n(t, e) {
                            return e = o(void 0 === e ? t.length - 1 : e, 0),
                                function () {
                                    for (var i = arguments, n = -1, s = o(i.length - e, 0), a = Array(s) ; ++n < s;) a[n] = i[e + n];
                                    n = -1;
                                    for (var h = Array(e + 1) ; ++n < e;) h[n] = i[n];
                                    return h[e] = a, r(t, this, h)
                                }
                        }
                        var r = t("./_apply"),
                            o = Math.max;
                        e.exports = n
                    }, {
                        "./_apply": 18
                    }
                ],
                23: [
                    function (t, e, i) {
                        function n(t, e) {
                            for (var i = -1, n = Array(t) ; ++i < t;) n[i] = e(i);
                            return n
                        }
                        e.exports = n
                    }, {}
                ],
                24: [
                    function (t, e, i) {
                        function n(t, e) {
                            return e = null == e ? r : e, !!e && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }
                        var r = 9007199254740991,
                            o = /^(?:0|[1-9]\d*)$/;
                        e.exports = n
                    }, {}
                ],
                25: [
                    function (t, e, i) {
                        function n(t) {
                            var e = t && t.constructor,
                                i = "function" == typeof e && e.prototype || r;
                            return t === i
                        }
                        var r = Object.prototype;
                        e.exports = n
                    }, {}
                ],
                26: [
                    function (t, e, i) {
                        var n = t("./_overArg"),
                            r = n(Object.keys, Object);
                        e.exports = r
                    }, {
                        "./_overArg": 27
                    }
                ],
                27: [
                    function (t, e, i) {
                        function n(t, e) {
                            return function (i) {
                                return t(e(i))
                            }
                        }
                        e.exports = n
                    }, {}
                ],
                28: [
                    function (t, e, i) {
                        function n(t) {
                            return r(t) && a.call(t, "callee") && (!l.call(t, "callee") || h.call(t) == o)
                        }
                        var r = t("./isArrayLikeObject"),
                            o = "[object Arguments]",
                            s = Object.prototype,
                            a = s.hasOwnProperty,
                            h = s.toString,
                            l = s.propertyIsEnumerable;
                        e.exports = n
                    }, {
                        "./isArrayLikeObject": 31
                    }
                ],
                29: [
                    function (t, e, i) {
                        var n = Array.isArray;
                        e.exports = n
                    }, {}
                ],
                30: [
                    function (t, e, i) {
                        function n(t) {
                            return null != t && o(t.length) && !r(t)
                        }
                        var r = t("./isFunction"),
                            o = t("./isLength");
                        e.exports = n
                    }, {
                        "./isFunction": 32,
                        "./isLength": 33
                    }
                ],
                31: [
                    function (t, e, i) {
                        function n(t) {
                            return o(t) && r(t)
                        }
                        var r = t("./isArrayLike"),
                            o = t("./isObjectLike");
                        e.exports = n
                    }, {
                        "./isArrayLike": 30,
                        "./isObjectLike": 35
                    }
                ],
                32: [
                    function (t, e, i) {
                        function n(t) {
                            var e = r(t) ? h.call(t) : "";
                            return e == o || e == s
                        }
                        var r = t("./isObject"),
                            o = "[object Function]",
                            s = "[object GeneratorFunction]",
                            a = Object.prototype,
                            h = a.toString;
                        e.exports = n
                    }, {
                        "./isObject": 34
                    }
                ],
                33: [
                    function (t, e, i) {
                        function n(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
                        }
                        var r = 9007199254740991;
                        e.exports = n
                    }, {}
                ],
                34: [
                    function (t, e, i) {
                        function n(t) {
                            var e = typeof t;
                            return !!t && ("object" == e || "function" == e)
                        }
                        e.exports = n
                    }, {}
                ],
                35: [
                    function (t, e, i) {
                        function n(t) {
                            return !!t && "object" == typeof t
                        }
                        e.exports = n
                    }, {}
                ],
                36: [
                    function (t, e, i) {
                        function n(t) {
                            return "symbol" == typeof t || r(t) && a.call(t) == o
                        }
                        var r = t("./isObjectLike"),
                            o = "[object Symbol]",
                            s = Object.prototype,
                            a = s.toString;
                        e.exports = n
                    }, {
                        "./isObjectLike": 35
                    }
                ],
                37: [
                    function (t, e, i) {
                        function n(t) {
                            return s(t) ? r(t) : o(t)
                        }
                        var r = t("./_arrayLikeKeys"),
                            o = t("./_baseKeys"),
                            s = t("./isArrayLike");
                        e.exports = n
                    }, {
                        "./_arrayLikeKeys": 20,
                        "./_baseKeys": 21,
                        "./isArrayLike": 30
                    }
                ],
                38: [
                    function (t, e, i) {
                        function n() { }
                        e.exports = n
                    }, {}
                ],
                39: [
                    function (t, e, i) {
                        function n(t, e) {
                            if ("function" != typeof t) throw new TypeError(s);
                            return e = void 0 === e ? e : o(e), r(t, e)
                        }
                        var r = t("./_baseRest"),
                            o = t("./toInteger"),
                            s = "Expected a function";
                        e.exports = n
                    }, {
                        "./_baseRest": 22,
                        "./toInteger": 41
                    }
                ],
                40: [
                    function (t, e, i) {
                        function n(t) {
                            if (!t) return 0 === t ? t : 0;
                            if (t = r(t), t === o || t === -o) {
                                var e = t < 0 ? -1 : 1;
                                return e * s
                            }
                            return t === t ? t : 0
                        }
                        var r = t("./toNumber"),
                            o = 1 / 0,
                            s = 1.7976931348623157e308;
                        e.exports = n
                    }, {
                        "./toNumber": 42
                    }
                ],
                41: [
                    function (t, e, i) {
                        function n(t) {
                            var e = r(t),
                                i = e % 1;
                            return e === e ? i ? e - i : e : 0
                        }
                        var r = t("./toFinite");
                        e.exports = n
                    }, {
                        "./toFinite": 40
                    }
                ],
                42: [
                    function (t, e, i) {
                        function n(t) {
                            if ("number" == typeof t) return t;
                            if (o(t)) return s;
                            if (r(t)) {
                                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = r(e) ? e + "" : e
                            }
                            if ("string" != typeof t) return 0 === t ? t : +t;
                            t = t.replace(a, "");
                            var i = l.test(t);
                            return i || c.test(t) ? u(t.slice(2), i ? 2 : 8) : h.test(t) ? s : +t
                        }
                        var r = t("./isObject"),
                            o = t("./isSymbol"),
                            s = NaN,
                            a = /^\s+|\s+$/g,
                            h = /^[-+]0x[0-9a-f]+$/i,
                            l = /^0b[01]+$/i,
                            c = /^0o[0-7]+$/i,
                            u = parseInt;
                        e.exports = n
                    }, {
                        "./isObject": 34,
                        "./isSymbol": 36
                    }
                ],
                43: [
                    function (t, e, i) {
                        "use strict";

                        function n(t) {
                            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(t)
                        }

                        function r() {
                            try {
                                if (!Object.assign) return !1;
                                var t = new String("abc");
                                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                                var n = Object.getOwnPropertyNames(e).map(function (t) {
                                    return e[t]
                                });
                                if ("0123456789" !== n.join("")) return !1;
                                var r = {};
                                return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                                    r[t] = t
                                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                            } catch (o) {
                                return !1
                            }
                        }
                        var o = Object.prototype.hasOwnProperty,
                            s = Object.prototype.propertyIsEnumerable;
                        e.exports = r() ? Object.assign : function (t, e) {
                            for (var i, r, a = n(t), h = 1; h < arguments.length; h++) {
                                i = Object(arguments[h]);
                                for (var l in i) o.call(i, l) && (a[l] = i[l]);
                                if (Object.getOwnPropertySymbols) {
                                    r = Object.getOwnPropertySymbols(i);
                                    for (var c = 0; c < r.length; c++) s.call(i, r[c]) && (a[r[c]] = i[r[c]])
                                }
                            }
                            return a
                        }
                    }, {}
                ],
                44: [
                    function (t, e, i) {
                        (function (t) {
                            function e(t, e) {
                                for (var i = 0, n = t.length - 1; n >= 0; n--) {
                                    var r = t[n];
                                    "." === r ? t.splice(n, 1) : ".." === r ? (t.splice(n, 1), i++) : i && (t.splice(n, 1), i--)
                                }
                                if (e)
                                    for (; i--; i) t.unshift("..");
                                return t
                            }

                            function n(t, e) {
                                if (t.filter) return t.filter(e);
                                for (var i = [], n = 0; n < t.length; n++) e(t[n], n, t) && i.push(t[n]);
                                return i
                            }
                            var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                                o = function (t) {
                                    return r.exec(t).slice(1)
                                };
                            i.resolve = function () {
                                for (var i = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                                    var s = o >= 0 ? arguments[o] : t.cwd();
                                    if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                                    s && (i = s + "/" + i, r = "/" === s.charAt(0))
                                }
                                return i = e(n(i.split("/"), function (t) {
                                    return !!t
                                }), !r).join("/"), (r ? "/" : "") + i || "."
                            }, i.normalize = function (t) {
                                var r = i.isAbsolute(t),
                                    o = "/" === s(t, -1);
                                return t = e(n(t.split("/"), function (t) {
                                    return !!t
                                }), !r).join("/"), t || r || (t = "."), t && o && (t += "/"), (r ? "/" : "") + t
                            }, i.isAbsolute = function (t) {
                                return "/" === t.charAt(0)
                            }, i.join = function () {
                                var t = Array.prototype.slice.call(arguments, 0);
                                return i.normalize(n(t, function (t, e) {
                                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                                    return t
                                }).join("/"))
                            }, i.relative = function (t, e) {
                                function n(t) {
                                    for (var e = 0; e < t.length && "" === t[e]; e++);
                                    for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                                    return e > i ? [] : t.slice(e, i - e + 1)
                                }
                                t = i.resolve(t).substr(1), e = i.resolve(e).substr(1);
                                for (var r = n(t.split("/")), o = n(e.split("/")), s = Math.min(r.length, o.length), a = s, h = 0; h < s; h++)
                                    if (r[h] !== o[h]) {
                                        a = h;
                                        break
                                    }
                                for (var l = [], h = a; h < r.length; h++) l.push("..");
                                return l = l.concat(o.slice(a)), l.join("/")
                            }, i.sep = "/", i.delimiter = ":", i.dirname = function (t) {
                                var e = o(t),
                                    i = e[0],
                                    n = e[1];
                                return i || n ? (n && (n = n.substr(0, n.length - 1)), i + n) : "."
                            }, i.basename = function (t, e) {
                                var i = o(t)[2];
                                return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
                            }, i.extname = function (t) {
                                return o(t)[3]
                            };
                            var s = "b" === "ab".substr(-1) ? function (t, e, i) {
                                return t.substr(e, i)
                            } : function (t, e, i) {
                                return e < 0 && (e = t.length + e), t.substr(e, i)
                            }
                        }).call(this, t("_process"))
                    }, {
                        _process: 61
                    }
                ],
                45: [
                    function (t, e, i) {
                        var n = new ArrayBuffer(0),
                            r = function (t, e, i, r) {
                                this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = r || t.STATIC_DRAW, this.data = n, i && this.upload(i)
                            };
                        r.prototype.upload = function (t, e, i) {
                            i || this.bind();
                            var n = this.gl;
                            t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? n.bufferSubData(this.type, e, t) : n.bufferData(this.type, t, this.drawType), this.data = t
                        }, r.prototype.bind = function () {
                            var t = this.gl;
                            t.bindBuffer(this.type, this.buffer)
                        }, r.createVertexBuffer = function (t, e, i) {
                            return new r(t, t.ARRAY_BUFFER, e, i)
                        }, r.createIndexBuffer = function (t, e, i) {
                            return new r(t, t.ELEMENT_ARRAY_BUFFER, e, i)
                        }, r.create = function (t, e, i, n) {
                            return new r(t, e, n)
                        }, r.prototype.destroy = function () {
                            this.gl.deleteBuffer(this.buffer)
                        }, e.exports = r
                    }, {}
                ],
                46: [
                    function (t, e, i) {
                        var n = t("./GLTexture"),
                            r = function (t, e, i) {
                                this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = i || 100
                            };
                        r.prototype.enableTexture = function (t) {
                            var e = this.gl;
                            this.texture = t || new n(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
                        }, r.prototype.enableStencil = function () {
                            if (!this.stencil) {
                                var t = this.gl;
                                this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
                            }
                        }, r.prototype.clear = function (t, e, i, n) {
                            this.bind();
                            var r = this.gl;
                            r.clearColor(t, e, i, n), r.clear(r.COLOR_BUFFER_BIT)
                        }, r.prototype.bind = function () {
                            var t = this.gl;
                            this.texture && this.texture.unbind(), t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
                        }, r.prototype.unbind = function () {
                            var t = this.gl;
                            t.bindFramebuffer(t.FRAMEBUFFER, null)
                        }, r.prototype.resize = function (t, e) {
                            var i = this.gl;
                            this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencil), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e))
                        }, r.prototype.destroy = function () {
                            var t = this.gl;
                            this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
                        }, r.createRGBA = function (t, e, i) {
                            var o = n.fromData(t, null, e, i);
                            o.enableNearestScaling(), o.enableWrapClamp();
                            var s = new r(t, e, i);
                            return s.enableTexture(o), s.unbind(), s
                        }, r.createFloat32 = function (t, e, i, o) {
                            var s = new n.fromData(t, o, e, i);
                            s.enableNearestScaling(), s.enableWrapClamp();
                            var a = new r(t, e, i);
                            return a.enableTexture(s), a.unbind(), a
                        }, e.exports = r
                    }, {
                        "./GLTexture": 48
                    }
                ],
                47: [
                    function (t, e, i) {
                        var n = t("./shader/compileProgram"),
                            r = t("./shader/extractAttributes"),
                            o = t("./shader/extractUniforms"),
                            s = t("./shader/generateUniformAccessObject"),
                            a = function (t, e, i) {
                                this.gl = t, this.program = n(t, e, i), this.attributes = r(t, this.program);
                                var a = o(t, this.program);
                                this.uniforms = s(t, a)
                            };
                        a.prototype.bind = function () {
                            this.gl.useProgram(this.program)
                        }, a.prototype.destroy = function () { }, e.exports = a
                    }, {
                        "./shader/compileProgram": 53,
                        "./shader/extractAttributes": 55,
                        "./shader/extractUniforms": 56,
                        "./shader/generateUniformAccessObject": 57
                    }
                ],
                48: [
                    function (t, e, i) {
                        var n = function (t, e, i, n, r) {
                            this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || 0, this.height = i || 0, this.format = n || t.RGBA, this.type = r || t.UNSIGNED_BYTE
                        };
                        n.prototype.upload = function (t) {
                            this.bind();
                            var e = this.gl;
                            this.width = t.videoWidth || t.width, this.height = t.videoHeight || t.height, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t)
                        };
                        var r = !1;
                        n.prototype.uploadData = function (t, e, i) {
                            this.bind();
                            var n = this.gl;
                            if (this.width = e || this.width, this.height = i || this.height,
                                t instanceof Float32Array) {
                                if (!r) {
                                    var o = n.getExtension("OES_texture_float");
                                    if (!o) throw new Error("floating point textures not available");
                                    r = !0
                                }
                                this.type = n.FLOAT
                            } else this.type = n.UNSIGNED_BYTE;
                            n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), n.texImage2D(n.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, t || null)
                        }, n.prototype.bind = function (t) {
                            var e = this.gl;
                            void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
                        }, n.prototype.unbind = function () {
                            var t = this.gl;
                            t.bindTexture(t.TEXTURE_2D, null)
                        }, n.prototype.minFilter = function (t) {
                            var e = this.gl;
                            this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
                        }, n.prototype.magFilter = function (t) {
                            var e = this.gl;
                            this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
                        }, n.prototype.enableMipmap = function () {
                            var t = this.gl;
                            this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
                        }, n.prototype.enableLinearScaling = function () {
                            this.minFilter(!0), this.magFilter(!0)
                        }, n.prototype.enableNearestScaling = function () {
                            this.minFilter(!1), this.magFilter(!1)
                        }, n.prototype.enableWrapClamp = function () {
                            var t = this.gl;
                            this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
                        }, n.prototype.enableWrapRepeat = function () {
                            var t = this.gl;
                            this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
                        }, n.prototype.enableWrapMirrorRepeat = function () {
                            var t = this.gl;
                            this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
                        }, n.prototype.destroy = function () {
                            var t = this.gl;
                            t.deleteTexture(this.texture)
                        }, n.fromSource = function (t, e, i) {
                            var r = new n(t);
                            return r.premultiplyAlpha = i || !1, r.upload(e), r
                        }, n.fromData = function (t, e, i, r) {
                            var o = new n(t);
                            return o.uploadData(e, i, r), o
                        }, e.exports = n
                    }, {}
                ],
                49: [
                    function (t, e, i) {
                        function n(t, e) {
                            if (this.nativeVaoExtension = null, n.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
                                this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                                var i = t.getParameter(t.MAX_VERTEX_ATTRIBS);
                                this.nativeState = {
                                    tempAttribState: new Array(i),
                                    attribState: new Array(i)
                                }
                            }
                            this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
                        }
                        var r = t("./setVertexAttribArrays");
                        n.prototype.constructor = n, e.exports = n, n.FORCE_NATIVE = !1, n.prototype.bind = function () {
                            return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this
                        }, n.prototype.unbind = function () {
                            return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
                        }, n.prototype.activate = function () {
                            for (var t = this.gl, e = null, i = 0; i < this.attributes.length; i++) {
                                var n = this.attributes[i];
                                e !== n.buffer && (n.buffer.bind(), e = n.buffer), t.vertexAttribPointer(n.attribute.location, n.attribute.size, n.type || t.FLOAT, n.normalized || !1, n.stride || 0, n.start || 0)
                            }
                            return r(t, this.attributes, this.nativeState), this.indexBuffer.bind(), this
                        }, n.prototype.addAttribute = function (t, e, i, n, r, o) {
                            return this.attributes.push({
                                buffer: t,
                                attribute: e,
                                location: e.location,
                                type: i || this.gl.FLOAT,
                                normalized: n || !1,
                                stride: r || 0,
                                start: o || 0
                            }), this.dirty = !0, this
                        }, n.prototype.addIndex = function (t) {
                            return this.indexBuffer = t, this.dirty = !0, this
                        }, n.prototype.clear = function () {
                            return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
                        }, n.prototype.draw = function (t, e, i) {
                            var n = this.gl;
                            return n.drawElements(t, e, n.UNSIGNED_SHORT, i || 0), this
                        }, n.prototype.destroy = function () {
                            this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
                        }
                    }, {
                        "./setVertexAttribArrays": 52
                    }
                ],
                50: [
                    function (t, e, i) {
                        var n = function (t, e) {
                            var i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                            if (!i) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                            return i
                        };
                        e.exports = n
                    }, {}
                ],
                51: [
                    function (t, e, i) {
                        var n = {
                            createContext: t("./createContext"),
                            setVertexAttribArrays: t("./setVertexAttribArrays"),
                            GLBuffer: t("./GLBuffer"),
                            GLFramebuffer: t("./GLFramebuffer"),
                            GLShader: t("./GLShader"),
                            GLTexture: t("./GLTexture"),
                            VertexArrayObject: t("./VertexArrayObject"),
                            shader: t("./shader")
                        };
                        "undefined" != typeof e && e.exports && (e.exports = n),
                        "undefined" != typeof window && (window.pixi = {
                            gl: n
                        })
                    }, {
                        "./GLBuffer": 45,
                        "./GLFramebuffer": 46,
                        "./GLShader": 47,
                        "./GLTexture": 48,
                        "./VertexArrayObject": 49,
                        "./createContext": 50,
                        "./setVertexAttribArrays": 52,
                        "./shader": 58
                    }
                ],
                52: [
                    function (t, e, i) {
                        var n = function (t, e, i) {
                            var n;
                            if (i) {
                                var r = i.tempAttribState,
                                    o = i.attribState;
                                for (n = 0; n < r.length; n++) r[n] = !1;
                                for (n = 0; n < e.length; n++) r[e[n].attribute.location] = !0;
                                for (n = 0; n < o.length; n++) o[n] !== r[n] && (o[n] = r[n], i.attribState[n] ? t.enableVertexAttribArray(n) : t.disableVertexAttribArray(n))
                            } else
                                for (n = 0; n < e.length; n++) {
                                    var s = e[n];
                                    t.enableVertexAttribArray(s.attribute.location)
                                }
                        };
                        e.exports = n
                    }, {}
                ],
                53: [
                    function (t, e, i) {
                        var n = function (t, e, i) {
                            var n = r(t, t.VERTEX_SHADER, e),
                                o = r(t, t.FRAGMENT_SHADER, i),
                                s = t.createProgram();
                            return t.attachShader(s, n), t.attachShader(s, o), t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || ("" !== t.getProgramInfoLog(s), t.deleteProgram(s), s = null), t.deleteShader(n), t.deleteShader(o), s
                        },
                            r = function (t, e, i) {
                                var n = t.createShader(e);
                                return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : null
                            };
                        e.exports = n
                    }, {}
                ],
                54: [
                    function (t, e, i) {
                        var n = function (t, e) {
                            switch (t) {
                                case "float":
                                    return 0;
                                case "vec2":
                                    return new Float32Array(2 * e);
                                case "vec3":
                                    return new Float32Array(3 * e);
                                case "vec4":
                                    return new Float32Array(4 * e);
                                case "int":
                                case "sampler2D":
                                    return 0;
                                case "ivec2":
                                    return new Int32Array(2 * e);
                                case "ivec3":
                                    return new Int32Array(3 * e);
                                case "ivec4":
                                    return new Int32Array(4 * e);
                                case "bool":
                                    return !1;
                                case "bvec2":
                                    return r(2 * e);
                                case "bvec3":
                                    return r(3 * e);
                                case "bvec4":
                                    return r(4 * e);
                                case "mat2":
                                    return new Float32Array([1, 0, 0, 1]);
                                case "mat3":
                                    return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                                case "mat4":
                                    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                            }
                        },
                            r = function (t) {
                                for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
                                return e
                            };
                        e.exports = n
                    }, {}
                ],
                55: [
                    function (t, e, i) {
                        var n = t("./mapType"),
                            r = t("./mapSize"),
                            o = function (t, e) {
                                for (var i = {}, o = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < o; a++) {
                                    var h = t.getActiveAttrib(e, a),
                                        l = n(t, h.type);
                                    i[h.name] = {
                                        type: l,
                                        size: r(l),
                                        location: t.getAttribLocation(e, h.name),
                                        pointer: s
                                    }
                                }
                                return i
                            },
                            s = function (t, e, i, n) {
                                gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, i || 0, n || 0)
                            };
                        e.exports = o
                    }, {
                        "./mapSize": 59,
                        "./mapType": 60
                    }
                ],
                56: [
                    function (t, e, i) {
                        var n = t("./mapType"),
                            r = t("./defaultValue"),
                            o = function (t, e) {
                                for (var i = {}, o = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), s = 0; s < o; s++) {
                                    var a = t.getActiveUniform(e, s),
                                        h = a.name.replace(/\[.*?\]/, ""),
                                        l = n(t, a.type);
                                    i[h] = {
                                        type: l,
                                        size: a.size,
                                        location: t.getUniformLocation(e, h),
                                        value: r(l, a.size)
                                    }
                                }
                                return i
                            };
                        e.exports = o
                    }, {
                        "./defaultValue": 54,
                        "./mapType": 60
                    }
                ],
                57: [
                    function (t, e, i) {
                        var n = function (t, e) {
                            var i = {
                                data: {}
                            };
                            i.gl = t;
                            for (var n = Object.keys(e), a = 0; a < n.length; a++) {
                                var h = n[a],
                                    l = h.split("."),
                                    c = l[l.length - 1],
                                    u = s(l, i),
                                    p = e[h];
                                u.data[c] = p, u.gl = t, Object.defineProperty(u, c, {
                                    get: r(c),
                                    set: o(c, p)
                                })
                            }
                            return i
                        },
                            r = function (t) {
                                var e = a.replace("%%", t);
                                return new Function(e)
                            },
                            o = function (t, e) {
                                var i, n = h.replace(/%%/g, t);
                                return i = 1 === e.size ? l[e.type] : c[e.type], i && (n += "\nthis.gl." + i + ";"), new Function("value", n)
                            },
                            s = function (t, e) {
                                for (var i = e, n = 0; n < t.length - 1; n++) {
                                    var r = i[t[n]] || {
                                        data: {}
                                    };
                                    i[t[n]] = r, i = r
                                }
                                return i
                            },
                            a = ["return this.data.%%.value;"].join("\n"),
                            h = ["this.data.%%.value = value;", "var location = this.data.%%.location;"].join("\n"),
                            l = {
                                "float": "uniform1f(location, value)",
                                vec2: "uniform2f(location, value[0], value[1])",
                                vec3: "uniform3f(location, value[0], value[1], value[2])",
                                vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                                "int": "uniform1i(location, value)",
                                ivec2: "uniform2i(location, value[0], value[1])",
                                ivec3: "uniform3i(location, value[0], value[1], value[2])",
                                ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                                bool: "uniform1i(location, value)",
                                bvec2: "uniform2i(location, value[0], value[1])",
                                bvec3: "uniform3i(location, value[0], value[1], value[2])",
                                bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                                mat2: "uniformMatrix2fv(location, false, value)",
                                mat3: "uniformMatrix3fv(location, false, value)",
                                mat4: "uniformMatrix4fv(location, false, value)",
                                sampler2D: "uniform1i(location, value)"
                            },
                            c = {
                                "float": "uniform1fv(location, value)",
                                vec2: "uniform2fv(location, value)",
                                vec3: "uniform3fv(location, value)",
                                vec4: "uniform4fv(location, value)",
                                "int": "uniform1iv(location, value)",
                                ivec2: "uniform2iv(location, value)",
                                ivec3: "uniform3iv(location, value)",
                                ivec4: "uniform4iv(location, value)",
                                bool: "uniform1iv(location, value)",
                                bvec2: "uniform2iv(location, value)",
                                bvec3: "uniform3iv(location, value)",
                                bvec4: "uniform4iv(location, value)",
                                sampler2D: "uniform1iv(location, value)"
                            };
                        e.exports = n
                    }, {}
                ],
                58: [
                    function (t, e, i) {
                        e.exports = {
                            compileProgram: t("./compileProgram"),
                            defaultValue: t("./defaultValue"),
                            extractAttributes: t("./extractAttributes"),
                            extractUniforms: t("./extractUniforms"),
                            generateUniformAccessObject: t("./generateUniformAccessObject"),
                            mapSize: t("./mapSize"),
                            mapType: t("./mapType")
                        }
                    }, {
                        "./compileProgram": 53,
                        "./defaultValue": 54,
                        "./extractAttributes": 55,
                        "./extractUniforms": 56,
                        "./generateUniformAccessObject": 57,
                        "./mapSize": 59,
                        "./mapType": 60
                    }
                ],
                59: [
                    function (t, e, i) {
                        var n = function (t) {
                            return r[t]
                        },
                            r = {
                                "float": 1,
                                vec2: 2,
                                vec3: 3,
                                vec4: 4,
                                "int": 1,
                                ivec2: 2,
                                ivec3: 3,
                                ivec4: 4,
                                bool: 1,
                                bvec2: 2,
                                bvec3: 3,
                                bvec4: 4,
                                mat2: 4,
                                mat3: 9,
                                mat4: 16,
                                sampler2D: 1
                            };
                        e.exports = n
                    }, {}
                ],
                60: [
                    function (t, e, i) {
                        var n = function (t, e) {
                            if (!r) {
                                var i = Object.keys(o);
                                r = {};
                                for (var n = 0; n < i.length; ++n) {
                                    var s = i[n];
                                    r[t[s]] = o[s]
                                }
                            }
                            return r[e]
                        },
                            r = null,
                            o = {
                                FLOAT: "float",
                                FLOAT_VEC2: "vec2",
                                FLOAT_VEC3: "vec3",
                                FLOAT_VEC4: "vec4",
                                INT: "int",
                                INT_VEC2: "ivec2",
                                INT_VEC3: "ivec3",
                                INT_VEC4: "ivec4",
                                BOOL: "bool",
                                BOOL_VEC2: "bvec2",
                                BOOL_VEC3: "bvec3",
                                BOOL_VEC4: "bvec4",
                                FLOAT_MAT2: "mat2",
                                FLOAT_MAT3: "mat3",
                                FLOAT_MAT4: "mat4",
                                SAMPLER_2D: "sampler2D"
                            };
                        e.exports = n
                    }, {}
                ],
                61: [
                    function (t, e, i) {
                        function n() {
                            throw new Error("setTimeout has not been defined")
                        }

                        function r() {
                            throw new Error("clearTimeout has not been defined")
                        }

                        function o(t) {
                            if (u === setTimeout) return setTimeout(t, 0);
                            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
                            try {
                                return u(t, 0)
                            } catch (e) {
                                try {
                                    return u.call(null, t, 0)
                                } catch (e) {
                                    return u.call(this, t, 0)
                                }
                            }
                        }

                        function s(t) {
                            if (p === clearTimeout) return clearTimeout(t);
                            if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);
                            try {
                                return p(t)
                            } catch (e) {
                                try {
                                    return p.call(null, t)
                                } catch (e) {
                                    return p.call(this, t)
                                }
                            }
                        }

                        function a() {
                            g && f && (g = !1, f.length ? m = f.concat(m) : v = -1, m.length && h())
                        }

                        function h() {
                            if (!g) {
                                var t = o(a);
                                g = !0;
                                for (var e = m.length; e;) {
                                    for (f = m, m = []; ++v < e;) f && f[v].run();
                                    v = -1, e = m.length
                                }
                                f = null, g = !1, s(t)
                            }
                        }

                        function l(t, e) {
                            this.fun = t, this.array = e
                        }

                        function c() { }
                        var u, p, d = e.exports = {};
                        ! function () {
                            try {
                                u = "function" == typeof setTimeout ? setTimeout : n
                            } catch (t) {
                                u = n
                            }
                            try {
                                p = "function" == typeof clearTimeout ? clearTimeout : r
                            } catch (t) {
                                p = r
                            }
                        }();
                        var f, m = [],
                            g = !1,
                            v = -1;
                        d.nextTick = function (t) {
                            var e = new Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                            m.push(new l(t, e)), 1 !== m.length || g || o(h)
                        }, l.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.binding = function (t) {
                            throw new Error("process.binding is not supported")
                        }, d.cwd = function () {
                            return "/"
                        }, d.chdir = function (t) {
                            throw new Error("process.chdir is not supported")
                        }, d.umask = function () {
                            return 0
                        }
                    }, {}
                ],
                62: [
                    function (e, n, r) {
                        (function (e) {
                            ! function (i) {
                                function o(t) {
                                    throw new RangeError(D[t])
                                }

                                function s(t, e) {
                                    for (var i = t.length, n = []; i--;) n[i] = e(t[i]);
                                    return n
                                }

                                function a(t, e) {
                                    var i = t.split("@"),
                                        n = "";
                                    i.length > 1 && (n = i[0] + "@", t = i[1]), t = t.replace(I, ".");
                                    var r = t.split("."),
                                        o = s(r, e).join(".");
                                    return n + o
                                }

                                function h(t) {
                                    for (var e, i, n = [], r = 0, o = t.length; r < o;) e = t.charCodeAt(r++), e >= 55296 && e <= 56319 && r < o ? (i = t.charCodeAt(r++), 56320 == (64512 & i) ? n.push(((1023 & e) << 10) + (1023 & i) + 65536) : (n.push(e), r--)) : n.push(e);
                                    return n
                                }

                                function l(t) {
                                    return s(t, function (t) {
                                        var e = "";
                                        return t > 65535 && (t -= 65536, e += F(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += F(t)
                                    }).join("")
                                }

                                function c(t) {
                                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : S
                                }

                                function u(t, e) {
                                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                                }

                                function p(t, e, i) {
                                    var n = 0;
                                    for (t = i ? k(t / A) : t >> 1, t += k(t / e) ; t > B * M >> 1; n += S) t = k(t / B);
                                    return k(n + (B + 1) * t / (t + E))
                                }

                                function d(t) {
                                    var e, i, n, r, s, a, h, u, d, f, m = [],
                                        g = t.length,
                                        v = 0,
                                        y = L,
                                        _ = C;
                                    for (i = t.lastIndexOf(R), i < 0 && (i = 0), n = 0; n < i; ++n) t.charCodeAt(n) >= 128 && o("not-basic"), m.push(t.charCodeAt(n));
                                    for (r = i > 0 ? i + 1 : 0; r < g;) {
                                        for (s = v, a = 1, h = S; r >= g && o("invalid-input"), u = c(t.charCodeAt(r++)), (u >= S || u > k((w - v) / a)) && o("overflow"), v += u * a, d = h <= _ ? T : h >= _ + M ? M : h - _, !(u < d) ; h += S) f = S - d, a > k(w / f) && o("overflow"), a *= f;
                                        e = m.length + 1, _ = p(v - s, e, 0 == s), k(v / e) > w - y && o("overflow"), y += k(v / e), v %= e, m.splice(v++, 0, y)
                                    }
                                    return l(m)
                                }

                                function f(t) {
                                    var e, i, n, r, s, a, l, c, d, f, m, g, v, y, _, x = [];
                                    for (t = h(t), g = t.length, e = L, i = 0, s = C, a = 0; a < g; ++a) m = t[a], m < 128 && x.push(F(m));
                                    for (n = r = x.length, r && x.push(R) ; n < g;) {
                                        for (l = w, a = 0; a < g; ++a) m = t[a], m >= e && m < l && (l = m);
                                        for (v = n + 1, l - e > k((w - i) / v) && o("overflow"), i += (l - e) * v, e = l, a = 0; a < g; ++a)
                                            if (m = t[a], m < e && ++i > w && o("overflow"), m == e) {
                                                for (c = i, d = S; f = d <= s ? T : d >= s + M ? M : d - s, !(c < f) ; d += S) _ = c - f, y = S - f, x.push(F(u(f + _ % y, 0))), c = k(_ / y);
                                                x.push(F(u(c, 0))), s = p(i, v, n == r), i = 0, ++n
                                            } ++i, ++e
                                    }
                                    return x.join("")
                                }

                                function m(t) {
                                    return a(t, function (t) {
                                        return P.test(t) ? d(t.slice(4).toLowerCase()) : t
                                    })
                                }

                                function g(t) {
                                    return a(t, function (t) {
                                        return O.test(t) ? "xn--" + f(t) : t
                                    })
                                }
                                var v = "object" == typeof r && r && !r.nodeType && r,
                                    y = "object" == typeof n && n && !n.nodeType && n,
                                    _ = "object" == typeof e && e;
                                _.global !== _ && _.window !== _ && _.self !== _ || (i = _);
                                var x, b, w = 2147483647,
                                    S = 36,
                                    T = 1,
                                    M = 26,
                                    E = 38,
                                    A = 700,
                                    C = 72,
                                    L = 128,
                                    R = "-",
                                    P = /^xn--/,
                                    O = /[^\x20-\x7E]/,
                                    I = /[\x2E\u3002\uFF0E\uFF61]/g,
                                    D = {
                                        overflow: "Overflow: input needs wider integers to process",
                                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                        "invalid-input": "Invalid input"
                                    },
                                    B = S - T,
                                    k = Math.floor,
                                    F = String.fromCharCode;
                                if (x = {
                                    version: "1.4.1",
                                    ucs2: {
                                    decode: h,
                                    encode: l
                                },
                                    decode: d,
                                    encode: f,
                                    toASCII: g,
                                    toUnicode: m
                                }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function () {
                                    return x
                                });
                                else if (v && y)
                                    if (n.exports == v) y.exports = x;
                                    else
                                        for (b in x) x.hasOwnProperty(b) && (v[b] = x[b]);
                                else i.punycode = x
                            }(this)
                        }).call(this, "undefined" != typeof i ? i : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}
                ],
                63: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        e.exports = function (t, e, i, o) {
                            e = e || "&", i = i || "=";
                            var s = {};
                            if ("string" != typeof t || 0 === t.length) return s;
                            var a = /\+/g;
                            t = t.split(e);
                            var h = 1e3;
                            o && "number" == typeof o.maxKeys && (h = o.maxKeys);
                            var l = t.length;
                            h > 0 && l > h && (l = h);
                            for (var c = 0; c < l; ++c) {
                                var u, p, d, f, m = t[c].replace(a, "%20"),
                                    g = m.indexOf(i);
                                g >= 0 ? (u = m.substr(0, g), p = m.substr(g + 1)) : (u = m, p = ""), d = decodeURIComponent(u), f = decodeURIComponent(p), n(s, d) ? r(s[d]) ? s[d].push(f) : s[d] = [s[d], f] : s[d] = f
                            }
                            return s
                        };
                        var r = Array.isArray || function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        }
                    }, {}
                ],
                64: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e) {
                            if (t.map) return t.map(e);
                            for (var i = [], n = 0; n < t.length; n++) i.push(e(t[n], n));
                            return i
                        }
                        var r = function (t) {
                            switch (typeof t) {
                                case "string":
                                    return t;
                                case "boolean":
                                    return t ? "true" : "false";
                                case "number":
                                    return isFinite(t) ? t : "";
                                default:
                                    return ""
                            }
                        };
                        e.exports = function (t, e, i, a) {
                            return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? n(s(t), function (s) {
                                var a = encodeURIComponent(r(s)) + i;
                                return o(t[s]) ? n(t[s], function (t) {
                                    return a + encodeURIComponent(r(t))
                                }).join(e) : a + encodeURIComponent(r(t[s]))
                            }).join(e) : a ? encodeURIComponent(r(a)) + i + encodeURIComponent(r(t)) : ""
                        };
                        var o = Array.isArray || function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                            s = Object.keys || function (t) {
                                var e = [];
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                                return e
                            }
                    }, {}
                ],
                65: [
                    function (t, e, i) {
                        "use strict";
                        i.decode = i.parse = t("./decode"), i.encode = i.stringify = t("./encode")
                    }, {
                        "./decode": 63,
                        "./encode": 64
                    }
                ],
                66: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e) {
                            h.call(this), e = e || l, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = r(this._boundLoadResource, e), this.resources = {}
                        }
                        var r = t("async/queue"),
                            o = t("async/eachSeries"),
                            s = t("url"),
                            a = t("./Resource"),
                            h = t("eventemitter3"),
                            l = 10,
                            c = 100;
                        n.prototype = Object.create(h.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.add = n.prototype.enqueue = function (t, e, i, n) {
                            if (Array.isArray(t)) {
                                for (var r = 0; r < t.length; ++r) this.add(t[r]);
                                return this
                            }
                            if ("object" == typeof t && (n = e || t.callback || t.onComplete, i = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (n = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                            if ("function" == typeof i && (n = i, i = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.');
                            return e = this._prepareUrl(e), this.resources[t] = new a(t, e, i), "function" == typeof n && this.resources[t].once("afterMiddleware", n), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (c - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = c / this._buffer.length), this
                        }, n.prototype.before = n.prototype.pre = function (t) {
                            return this._beforeMiddleware.push(t), this
                        }, n.prototype.after = n.prototype.use = function (t) {
                            return this._afterMiddleware.push(t), this
                        }, n.prototype.reset = function () {
                            this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1;
                            for (var t in this.resources) {
                                var e = this.resources[t];
                                e.off("complete", this._onLoad, this), e.isLoading && e.abort()
                            }
                            return this.resources = {}, this
                        }, n.prototype.load = function (t) {
                            if ("function" == typeof t && this.once("complete", t), this._queue.started) return this;
                            this.emit("start", this), this.loading = !0;
                            for (var e = 0; e < this._buffer.length; ++e) this._queue.push(this._buffer[e]);
                            return this._buffer.length = 0, this
                        }, n.prototype._prepareUrl = function (t) {
                            var e = s.parse(t);
                            return e.protocol || !e.pathname || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t
                        }, n.prototype._loadResource = function (t, e) {
                            var i = this;
                            t._dequeue = e, o(this._beforeMiddleware, function (e, n) {
                                e.call(i, t, function () {
                                    n(t.isComplete ? {} : null)
                                })
                            }, function () {
                                t.isComplete ? i._onLoad(t) : (t.once("complete", i._onLoad, i), t.load())
                            })
                        }, n.prototype._onComplete = function () {
                            this.loading = !1, this.emit("complete", this, this.resources)
                        }, n.prototype._onLoad = function (t) {
                            var e = this;
                            o(this._afterMiddleware, function (i, n) {
                                i.call(e, t, n)
                            }, function () {
                                t.emit("afterMiddleware", t), e._numToLoad--, e.progress += e._progressChunk, e.emit("progress", e, t), t.error ? e.emit("error", t.error, e, t) : e.emit("load", e, t), 0 === e._numToLoad && (e.progress = 100, e._onComplete())
                            }), t._dequeue()
                        }, n.LOAD_TYPE = a.LOAD_TYPE, n.XHR_RESPONSE_TYPE = a.XHR_RESPONSE_TYPE
                    }, {
                        "./Resource": 67,
                        "async/eachSeries": 2,
                        "async/queue": 13,
                        eventemitter3: 16,
                        url: 72
                    }
                ],
                67: [
                    function (t, e, i) {
                        "use strict";

                        function n(t, e, i) {
                            if (s.call(this), i = i || {}, "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                            this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = i.crossOrigin === !0 ? "anonymous" : i.crossOrigin, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this.isComplete = !1, this.isLoading = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
                        }

                        function r(t) {
                            return t.toString().replace("object ", "")
                        }

                        function o(t, e, i) {
                            e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
                        }
                        var s = t("eventemitter3"),
                            a = t("url"),
                            h = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                            l = null,
                            c = 0,
                            u = 200,
                            p = 204;
                        n.prototype = Object.create(s.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.complete = function () {
                            if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this.isComplete = !0, this.isLoading = !1, this.emit("complete", this)
                        }, n.prototype.abort = function (t) {
                            if (!this.error) {
                                if (this.error = new Error(t), this.xhr) this.xhr.abort();
                                else if (this.xdr) this.xdr.abort();
                                else if (this.data)
                                    if ("undefined" != typeof this.data.src) this.data.src = "";
                                    else
                                        for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                                this.complete()
                            }
                        }, n.prototype.load = function (t) {
                            if (!this.isLoading)
                                if (this.isComplete) {
                                    if (t) {
                                        var e = this;
                                        setTimeout(function () {
                                            t(e)
                                        }, 1)
                                    }
                                } else switch (t && this.once("complete", t), this.isLoading = !0, this.emit("start", this), this.crossOrigin !== !1 && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                                    case n.LOAD_TYPE.IMAGE:
                                        this._loadElement("image");
                                        break;
                                    case n.LOAD_TYPE.AUDIO:
                                        this._loadSourceElement("audio");
                                        break;
                                    case n.LOAD_TYPE.VIDEO:
                                        this._loadSourceElement("video");
                                        break;
                                    case n.LOAD_TYPE.XHR:
                                    default:
                                        h && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                                }
                        }, n.prototype._loadElement = function (t) {
                            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && "undefined" != typeof window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url);
                            var e = "is" + t[0].toUpperCase() + t.substring(1);
                            this[e] === !1 && (this[e] = !0), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
                        }, n.prototype._loadSourceElement = function (t) {
                            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && "undefined" != typeof window.Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data) return void this.abort("Unsupported element " + t);
                            if (!this.metadata.skipSource)
                                if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                                else if (Array.isArray(this.url))
                                    for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
                                else this.data.appendChild(this._createSource(t, this.url));
                            this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
                        }, n.prototype._loadXhr = function () {
                            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                            var t = this.xhr = new XMLHttpRequest;
                            t.open("GET", this.url, !0), this.xhrType === n.XHR_RESPONSE_TYPE.JSON || this.xhrType === n.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = n.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
                        }, n.prototype._loadXdr = function () {
                            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                            var t = this.xhr = new XDomainRequest;
                            t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                                t.send()
                            }, 0)
                        }, n.prototype._createSource = function (t, e, i) {
                            i || (i = t + "/" + e.substr(e.lastIndexOf(".") + 1));
                            var n = document.createElement("source");
                            return n.src = e, n.type = i, n
                        }, n.prototype._onError = function (t) {
                            this.abort("Failed to load element using " + t.target.nodeName)
                        }, n.prototype._onProgress = function (t) {
                            t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
                        }, n.prototype._xhrOnError = function () {
                            var t = this.xhr;
                            this.abort(r(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
                        }, n.prototype._xhrOnAbort = function () {
                            this.abort(r(this.xhr) + " Request was aborted by the user.")
                        }, n.prototype._xdrOnTimeout = function () {
                            this.abort(r(this.xhr) + " Request timed out.")
                        }, n.prototype._xhrOnLoad = function () {
                            var t = this.xhr,
                                e = "undefined" == typeof t.status ? t.status : u;
                            if (!(e === u || e === p || e === c && t.responseText.length > 0)) return void this.abort("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
                            if (this.xhrType === n.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
                            else if (this.xhrType === n.XHR_RESPONSE_TYPE.JSON) try {
                                this.data = JSON.parse(t.responseText), this.isJson = !0
                            } catch (i) {
                                return void this.abort("Error trying to parse loaded json:", i)
                            } else if (this.xhrType === n.XHR_RESPONSE_TYPE.DOCUMENT) try {
                                if (window.DOMParser) {
                                    var r = new DOMParser;
                                    this.data = r.parseFromString(t.responseText, "text/xml")
                                } else {
                                    var o = document.createElement("div");
                                    o.innerHTML = t.responseText, this.data = o
                                }
                                this.isXml = !0
                            } catch (i) {
                                return void this.abort("Error trying to parse loaded xml:", i)
                            } else this.data = t.response || t.responseText;
                            this.complete()
                        }, n.prototype._determineCrossOrigin = function (t, e) {
                            if (0 === t.indexOf("data:")) return "";
                            e = e || window.location, l || (l = document.createElement("a")), l.href = t, t = a.parse(l.href);
                            var i = !t.port && "" === e.port || t.port === e.port;
                            return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
                        }, n.prototype._determineXhrType = function () {
                            return n._xhrTypeMap[this._getExtension()] || n.XHR_RESPONSE_TYPE.TEXT
                        }, n.prototype._determineLoadType = function () {
                            return n._loadTypeMap[this._getExtension()] || n.LOAD_TYPE.XHR
                        }, n.prototype._getExtension = function () {
                            var t = this.url,
                                e = "";
                            if (this.isDataUrl) {
                                var i = t.indexOf("/");
                                e = t.substring(i + 1, t.indexOf(";", i))
                            } else {
                                var n = t.indexOf("?");
                                n !== -1 && (t = t.substring(0, n)), e = t.substring(t.lastIndexOf(".") + 1)
                            }
                            return e.toLowerCase()
                        }, n.prototype._getMimeFromXhrType = function (t) {
                            switch (t) {
                                case n.XHR_RESPONSE_TYPE.BUFFER:
                                    return "application/octet-binary";
                                case n.XHR_RESPONSE_TYPE.BLOB:
                                    return "application/blob";
                                case n.XHR_RESPONSE_TYPE.DOCUMENT:
                                    return "application/xml";
                                case n.XHR_RESPONSE_TYPE.JSON:
                                    return "application/json";
                                case n.XHR_RESPONSE_TYPE.DEFAULT:
                                case n.XHR_RESPONSE_TYPE.TEXT:
                                default:
                                    return "text/plain"
                            }
                        }, n.LOAD_TYPE = {
                            XHR: 1,
                            IMAGE: 2,
                            AUDIO: 3,
                            VIDEO: 4
                        }, n.XHR_RESPONSE_TYPE = {
                            DEFAULT: "text",
                            BUFFER: "arraybuffer",
                            BLOB: "blob",
                            DOCUMENT: "document",
                            JSON: "json",
                            TEXT: "text"
                        }, n._loadTypeMap = {
                            gif: n.LOAD_TYPE.IMAGE,
                            png: n.LOAD_TYPE.IMAGE,
                            bmp: n.LOAD_TYPE.IMAGE,
                            jpg: n.LOAD_TYPE.IMAGE,
                            jpeg: n.LOAD_TYPE.IMAGE,
                            tif: n.LOAD_TYPE.IMAGE,
                            tiff: n.LOAD_TYPE.IMAGE,
                            webp: n.LOAD_TYPE.IMAGE,
                            tga: n.LOAD_TYPE.IMAGE,
                            "svg+xml": n.LOAD_TYPE.IMAGE
                        }, n._xhrTypeMap = {
                            xhtml: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            html: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            htm: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            xml: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            tmx: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            tsx: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            svg: n.XHR_RESPONSE_TYPE.DOCUMENT,
                            gif: n.XHR_RESPONSE_TYPE.BLOB,
                            png: n.XHR_RESPONSE_TYPE.BLOB,
                            bmp: n.XHR_RESPONSE_TYPE.BLOB,
                            jpg: n.XHR_RESPONSE_TYPE.BLOB,
                            jpeg: n.XHR_RESPONSE_TYPE.BLOB,
                            tif: n.XHR_RESPONSE_TYPE.BLOB,
                            tiff: n.XHR_RESPONSE_TYPE.BLOB,
                            webp: n.XHR_RESPONSE_TYPE.BLOB,
                            tga: n.XHR_RESPONSE_TYPE.BLOB,
                            json: n.XHR_RESPONSE_TYPE.JSON,
                            text: n.XHR_RESPONSE_TYPE.TEXT,
                            txt: n.XHR_RESPONSE_TYPE.TEXT
                        }, n.setExtensionLoadType = function (t, e) {
                            o(n._loadTypeMap, t, e)
                        }, n.setExtensionXhrType = function (t, e) {
                            o(n._xhrTypeMap, t, e)
                        }
                    }, {
                        eventemitter3: 16,
                        url: 72
                    }
                ],
                68: [
                    function (t, e, i) {
                        "use strict";
                        e.exports = {
                            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            encodeBinary: function (t) {
                                for (var e, i = "", n = new Array(4), r = 0, o = 0, s = 0; r < t.length;) {
                                    for (e = new Array(3), o = 0; o < e.length; o++) r < t.length ? e[o] = 255 & t.charCodeAt(r++) : e[o] = 0;
                                    switch (n[0] = e[0] >> 2, n[1] = (3 & e[0]) << 4 | e[1] >> 4, n[2] = (15 & e[1]) << 2 | e[2] >> 6, n[3] = 63 & e[2], s = r - (t.length - 1)) {
                                        case 2:
                                            n[3] = 64, n[2] = 64;
                                            break;
                                        case 1:
                                            n[3] = 64
                                    }
                                    for (o = 0; o < n.length; o++) i += this._keyStr.charAt(n[o])
                                }
                                return i
                            }
                        }
                    }, {}
                ],
                69: [
                    function (t, e, i) {
                        "use strict";
                        e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = {
                            caching: {
                                memory: t("./middlewares/caching/memory")
                            },
                            parsing: {
                                blob: t("./middlewares/parsing/blob")
                            }
                        }
                    }, {
                        "./Loader": 66,
                        "./Resource": 67,
                        "./middlewares/caching/memory": 70,
                        "./middlewares/parsing/blob": 71
                    }
                ],
                70: [
                    function (t, e, i) {
                        "use strict";
                        var n = {};
                        e.exports = function () {
                            return function (t, e) {
                                n[t.url] ? (t.data = n[t.url], t.complete()) : t.once("complete", function () {
                                    n[this.url] = this.data
                                }), e()
                            }
                        }
                    }, {}
                ],
                71: [
                    function (t, e, i) {
                        "use strict";
                        var n = t("../../Resource"),
                            r = t("../../b64"),
                            o = window.URL || window.webkitURL;
                        e.exports = function () {
                            return function (t, e) {
                                if (!t.data) return void e();
                                if (t.xhr && t.xhrType === n.XHR_RESPONSE_TYPE.BLOB)
                                    if (window.Blob && "string" != typeof t.data) {
                                        if (0 === t.data.type.indexOf("image")) {
                                            var i = o.createObjectURL(t.data);
                                            return t.blob = t.data, t.data = new Image, t.data.src = i, t.isImage = !0, void (t.data.onload = function () {
                                                o.revokeObjectURL(i), t.data.onload = null, e()
                                            })
                                        }
                                    } else {
                                        var s = t.xhr.getResponseHeader("content-type");
                                        if (s && 0 === s.indexOf("image")) return t.data = new Image, t.data.src = "data:" + s + ";base64," + r.encodeBinary(t.xhr.responseText), t.isImage = !0, void (t.data.onload = function () {
                                            t.data.onload = null, e()
                                        })
                                    }
                                e()
                            }
                        }
                    }, {
                        "../../Resource": 67,
                        "../../b64": 68
                    }
                ],
                72: [
                    function (t, e, i) {
                        "use strict";

                        function n() {
                            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                        }

                        function r(t, e, i) {
                            if (t && l.isObject(t) && t instanceof n) return t;
                            var r = new n;
                            return r.parse(t, e, i), r
                        }

                        function o(t) {
                            return l.isString(t) && (t = r(t)), t instanceof n ? t.format() : n.prototype.format.call(t)
                        }

                        function s(t, e) {
                            return r(t, !1, !0).resolve(e)
                        }

                        function a(t, e) {
                            return t ? r(t, !1, !0).resolveObject(e) : e
                        }
                        var h = t("punycode"),
                            l = t("./util");
                        i.parse = r, i.resolve = s, i.resolveObject = a, i.format = o, i.Url = n;
                        var c = /^([a-z0-9.+-]+:)/i,
                            u = /:[0-9]*$/,
                            p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                            d = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
                            f = ["{", "}", "|", "\\", "^", "`"].concat(d),
                            m = ["'"].concat(f),
                            g = ["%", "/", "?", ";", "#"].concat(m),
                            v = ["/", "?", "#"],
                            y = 255,
                            _ = /^[+a-z0-9A-Z_-]{0,63}$/,
                            x = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                            b = {
                                javascript: !0,
                                "javascript:": !0
                            },
                            w = {
                                javascript: !0,
                                "javascript:": !0
                            },
                            S = {
                                http: !0,
                                https: !0,
                                ftp: !0,
                                gopher: !0,
                                file: !0,
                                "http:": !0,
                                "https:": !0,
                                "ftp:": !0,
                                "gopher:": !0,
                                "file:": !0
                            },
                            T = t("querystring");
                        n.prototype.parse = function (t, e, i) {
                            if (!l.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                            var n = t.indexOf("?"),
                                r = n !== -1 && n < t.indexOf("#") ? "?" : "#",
                                o = t.split(r),
                                s = /\\/g;
                            o[0] = o[0].replace(s, "/"), t = o.join(r);
                            var a = t;
                            if (a = a.trim(), !i && 1 === t.split("#").length) {
                                var u = p.exec(a);
                                if (u) return this.path = a, this.href = a, this.pathname = u[1], u[2] ? (this.search = u[2], e ? this.query = T.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "",
                                    this.query = {}), this
                            }
                            var d = c.exec(a);
                            if (d) {
                                d = d[0];
                                var f = d.toLowerCase();
                                this.protocol = f, a = a.substr(d.length)
                            }
                            if (i || d || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                                var M = "//" === a.substr(0, 2);
                                !M || d && w[d] || (a = a.substr(2), this.slashes = !0)
                            }
                            if (!w[d] && (M || d && !S[d])) {
                                for (var E = -1, A = 0; A < v.length; A++) {
                                    var C = a.indexOf(v[A]);
                                    C !== -1 && (E === -1 || C < E) && (E = C)
                                }
                                var L, R;
                                R = E === -1 ? a.lastIndexOf("@") : a.lastIndexOf("@", E), R !== -1 && (L = a.slice(0, R), a = a.slice(R + 1), this.auth = decodeURIComponent(L)), E = -1;
                                for (var A = 0; A < g.length; A++) {
                                    var C = a.indexOf(g[A]);
                                    C !== -1 && (E === -1 || C < E) && (E = C)
                                }
                                E === -1 && (E = a.length), this.host = a.slice(0, E), a = a.slice(E), this.parseHost(), this.hostname = this.hostname || "";
                                var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                                if (!P)
                                    for (var O = this.hostname.split(/\./), A = 0, I = O.length; A < I; A++) {
                                        var D = O[A];
                                        if (D && !D.match(_)) {
                                            for (var B = "", k = 0, F = D.length; k < F; k++) B += D.charCodeAt(k) > 127 ? "x" : D[k];
                                            if (!B.match(_)) {
                                                var N = O.slice(0, A),
                                                    U = O.slice(A + 1),
                                                    G = D.match(x);
                                                G && (N.push(G[1]), U.unshift(G[2])), U.length && (a = "/" + U.join(".") + a), this.hostname = N.join(".");
                                                break
                                            }
                                        }
                                    }
                                this.hostname.length > y ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = h.toASCII(this.hostname));
                                var z = this.port ? ":" + this.port : "",
                                    V = this.hostname || "";
                                this.host = V + z, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
                            }
                            if (!b[f])
                                for (var A = 0, I = m.length; A < I; A++) {
                                    var j = m[A];
                                    if (a.indexOf(j) !== -1) {
                                        var H = encodeURIComponent(j);
                                        H === j && (H = escape(j)), a = a.split(j).join(H)
                                    }
                                }
                            var W = a.indexOf("#");
                            W !== -1 && (this.hash = a.substr(W), a = a.slice(0, W));
                            var X = a.indexOf("?");
                            if (X !== -1 ? (this.search = a.substr(X), this.query = a.substr(X + 1), e && (this.query = T.parse(this.query)), a = a.slice(0, X)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), S[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                                var z = this.pathname || "",
                                    Y = this.search || "";
                                this.path = z + Y
                            }
                            return this.href = this.format(), this
                        }, n.prototype.format = function () {
                            var t = this.auth || "";
                            t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                            var e = this.protocol || "",
                                i = this.pathname || "",
                                n = this.hash || "",
                                r = !1,
                                o = "";
                            this.host ? r = t + this.host : this.hostname && (r = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && l.isObject(this.query) && Object.keys(this.query).length && (o = T.stringify(this.query));
                            var s = this.search || o && "?" + o || "";
                            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || S[e]) && r !== !1 ? (r = "//" + (r || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : r || (r = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), i = i.replace(/[?#]/g, function (t) {
                                return encodeURIComponent(t)
                            }), s = s.replace("#", "%23"), e + r + i + s + n
                        }, n.prototype.resolve = function (t) {
                            return this.resolveObject(r(t, !1, !0)).format()
                        }, n.prototype.resolveObject = function (t) {
                            if (l.isString(t)) {
                                var e = new n;
                                e.parse(t, !1, !0), t = e
                            }
                            for (var i = new n, r = Object.keys(this), o = 0; o < r.length; o++) {
                                var s = r[o];
                                i[s] = this[s]
                            }
                            if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
                            if (t.slashes && !t.protocol) {
                                for (var a = Object.keys(t), h = 0; h < a.length; h++) {
                                    var c = a[h];
                                    "protocol" !== c && (i[c] = t[c])
                                }
                                return S[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
                            }
                            if (t.protocol && t.protocol !== i.protocol) {
                                if (!S[t.protocol]) {
                                    for (var u = Object.keys(t), p = 0; p < u.length; p++) {
                                        var d = u[p];
                                        i[d] = t[d]
                                    }
                                    return i.href = i.format(), i
                                }
                                if (i.protocol = t.protocol, t.host || w[t.protocol]) i.pathname = t.pathname;
                                else {
                                    for (var f = (t.pathname || "").split("/") ; f.length && !(t.host = f.shift()) ;);
                                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), i.pathname = f.join("/")
                                } if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                                    var m = i.pathname || "",
                                        g = i.search || "";
                                    i.path = m + g
                                }
                                return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                            }
                            var v = i.pathname && "/" === i.pathname.charAt(0),
                                y = t.host || t.pathname && "/" === t.pathname.charAt(0),
                                _ = y || v || i.host && t.pathname,
                                x = _,
                                b = i.pathname && i.pathname.split("/") || [],
                                f = t.pathname && t.pathname.split("/") || [],
                                T = i.protocol && !S[i.protocol];
                            if (T && (i.hostname = "", i.port = null, i.host && ("" === b[0] ? b[0] = i.host : b.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), _ = _ && ("" === f[0] || "" === b[0])), y) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, b = f;
                            else if (f.length) b || (b = []), b.pop(), b = b.concat(f), i.search = t.search, i.query = t.query;
                            else if (!l.isNullOrUndefined(t.search)) {
                                if (T) {
                                    i.hostname = i.host = b.shift();
                                    var M = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                                    M && (i.auth = M.shift(), i.host = i.hostname = M.shift())
                                }
                                return i.search = t.search, i.query = t.query, l.isNull(i.pathname) && l.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
                            }
                            if (!b.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                            for (var E = b.slice(-1)[0], A = (i.host || t.host || b.length > 1) && ("." === E || ".." === E) || "" === E, C = 0, L = b.length; L >= 0; L--) E = b[L], "." === E ? b.splice(L, 1) : ".." === E ? (b.splice(L, 1), C++) : C && (b.splice(L, 1), C--);
                            if (!_ && !x)
                                for (; C--; C) b.unshift("..");
                            !_ || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), A && "/" !== b.join("/").substr(-1) && b.push("");
                            var R = "" === b[0] || b[0] && "/" === b[0].charAt(0);
                            if (T) {
                                i.hostname = i.host = R ? "" : b.length ? b.shift() : "";
                                var M = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                                M && (i.auth = M.shift(), i.host = i.hostname = M.shift())
                            }
                            return _ = _ || i.host && b.length, _ && !R && b.unshift(""), b.length ? i.pathname = b.join("/") : (i.pathname = null, i.path = null), l.isNull(i.pathname) && l.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                        }, n.prototype.parseHost = function () {
                            var t = this.host,
                                e = u.exec(t);
                            e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
                        }
                    }, {
                        "./util": 73,
                        punycode: 62,
                        querystring: 65
                    }
                ],
                73: [
                    function (t, e, i) {
                        "use strict";
                        e.exports = {
                            isString: function (t) {
                                return "string" == typeof t
                            },
                            isObject: function (t) {
                                return "object" == typeof t && null !== t
                            },
                            isNull: function (t) {
                                return null === t
                            },
                            isNullOrUndefined: function (t) {
                                return null == t
                            }
                        }
                    }, {}
                ],
                74: [
                    function (t, e, i) {
                        function n(t) {
                            (o.tablet || o.phone) && this.createTouchHook();
                            var e = document.createElement("div");
                            e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
                        }
                        var r = t("../core"),
                            o = t("ismobilejs");
                        Object.assign(r.DisplayObject.prototype, t("./accessibleTarget")), n.prototype.constructor = n, e.exports = n, n.prototype.createTouchHook = function () {
                            var t = document.createElement("button");
                            t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.style.zIndex = 2, t.style.backgroundColor = "#FF0000", t.title = "HOOK DIV", t.addEventListener("focus", function () {
                                this.isMobileAccessabillity = !0, this.activate(), document.body.removeChild(t)
                            }.bind(this)), document.body.appendChild(t)
                        }, n.prototype.activate = function () {
                            this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
                        }, n.prototype.deactivate = function () {
                            this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
                        }, n.prototype.updateAccessibleObjects = function (t) {
                            if (t.visible) {
                                t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                                for (var e = t.children, i = e.length - 1; i >= 0; i--) this.updateAccessibleObjects(e[i])
                            }
                        }, n.prototype.update = function () {
                            if (this.renderer.renderingToScreen) {
                                this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                                var t = this.renderer.view.getBoundingClientRect(),
                                    e = t.width / this.renderer.width,
                                    i = t.height / this.renderer.height,
                                    n = this.div;
                                n.style.left = t.left + "px", n.style.top = t.top + "px", n.style.width = this.renderer.width + "px", n.style.height = this.renderer.height + "px";
                                for (var o = 0; o < this.children.length; o++) {
                                    var s = this.children[o];
                                    if (s.renderId !== this.renderId) s._accessibleActive = !1, r.utils.removeItems(this.children, o, 1), this.div.removeChild(s._accessibleDiv), this.pool.push(s._accessibleDiv), s._accessibleDiv = null, o--, 0 === this.children.length && this.deactivate();
                                    else {
                                        n = s._accessibleDiv;
                                        var a = s.hitArea,
                                            h = s.worldTransform;
                                        s.hitArea ? (n.style.left = (h.tx + a.x * h.a) * e + "px", n.style.top = (h.ty + a.y * h.d) * i + "px", n.style.width = a.width * h.a * e + "px", n.style.height = a.height * h.d * i + "px") : (a = s.getBounds(), this.capHitArea(a), n.style.left = a.x * e + "px", n.style.top = a.y * i + "px", n.style.width = a.width * e + "px", n.style.height = a.height * i + "px")
                                    }
                                }
                                this.renderId++
                            }
                        }, n.prototype.capHitArea = function (t) {
                            t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
                        }, n.prototype.addChild = function (t) {
                            var e = this.pool.pop();
                            e || (e = document.createElement("button"), e.style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleTitle || t.accessibleHint || (e.title = "displayObject " + this.tabIndex), t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
                        }, n.prototype._onClick = function (t) {
                            var e = this.renderer.plugins.interaction;
                            e.dispatchEvent(t.target.displayObject, "click", e.eventData)
                        }, n.prototype._onFocus = function (t) {
                            var e = this.renderer.plugins.interaction;
                            e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
                        }, n.prototype._onFocusOut = function (t) {
                            var e = this.renderer.plugins.interaction;
                            e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
                        }, n.prototype._onKeyDown = function (t) {
                            9 === t.keyCode && this.activate()
                        }, n.prototype._onMouseMove = function () {
                            this.deactivate()
                        }, n.prototype.destroy = function () {
                            this.div = null;
                            for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
                            window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
                        }, r.WebGLRenderer.registerPlugin("accessibility", n), r.CanvasRenderer.registerPlugin("accessibility", n)
                    }, {
                        "../core": 97,
                        "./accessibleTarget": 75,
                        ismobilejs: 17
                    }
                ],
                75: [
                    function (t, e, i) {
                        var n = {
                            accessible: !1,
                            accessibleTitle: null,
                            accessibleHint: null,
                            tabIndex: 0,
                            _accessibleActive: !1,
                            _accessibleDiv: !1
                        };
                        e.exports = n
                    }, {}
                ],
                76: [
                    function (t, e, i) {
                        e.exports = {
                            accessibleTarget: t("./accessibleTarget"),
                            AccessibilityManager: t("./AccessibilityManager")
                        }
                    }, {
                        "./AccessibilityManager": 74,
                        "./accessibleTarget": 75
                    }
                ],
                77: [
                    function (t, e, i) {
                        function n(t) {
                            if (t instanceof Array) {
                                if ("precision" !== t[0].substring(0, 9)) {
                                    var e = t.slice(0);
                                    return e.unshift("precision " + o.PRECISION.DEFAULT + " float;"), e
                                }
                            } else if ("precision" !== t.substring(0, 9)) return "precision " + o.PRECISION.DEFAULT + " float;\n" + t;
                            return t
                        }
                        var r = t("pixi-gl-core").GLShader,
                            o = t("./const"),
                            s = function (t, e, i) {
                                r.call(this, t, n(e), n(i))
                            };
                        s.prototype = Object.create(r.prototype), s.prototype.constructor = s, e.exports = s
                    }, {
                        "./const": 78,
                        "pixi-gl-core": 51
                    }
                ],
                78: [
                    function (t, e, i) {
                        var n = {
                            VERSION: "4.0.1",
                            PI_2: 2 * Math.PI,
                            RAD_TO_DEG: 180 / Math.PI,
                            DEG_TO_RAD: Math.PI / 180,
                            TARGET_FPMS: .06,
                            RENDERER_TYPE: {
                                UNKNOWN: 0,
                                WEBGL: 1,
                                CANVAS: 2
                            },
                            BLEND_MODES: {
                                NORMAL: 0,
                                ADD: 1,
                                MULTIPLY: 2,
                                SCREEN: 3,
                                OVERLAY: 4,
                                DARKEN: 5,
                                LIGHTEN: 6,
                                COLOR_DODGE: 7,
                                COLOR_BURN: 8,
                                HARD_LIGHT: 9,
                                SOFT_LIGHT: 10,
                                DIFFERENCE: 11,
                                EXCLUSION: 12,
                                HUE: 13,
                                SATURATION: 14,
                                COLOR: 15,
                                LUMINOSITY: 16
                            },
                            DRAW_MODES: {
                                POINTS: 0,
                                LINES: 1,
                                LINE_LOOP: 2,
                                LINE_STRIP: 3,
                                TRIANGLES: 4,
                                TRIANGLE_STRIP: 5,
                                TRIANGLE_FAN: 6
                            },
                            SCALE_MODES: {
                                DEFAULT: 0,
                                LINEAR: 0,
                                NEAREST: 1
                            },
                            WRAP_MODES: {
                                DEFAULT: 0,
                                CLAMP: 0,
                                REPEAT: 1,
                                MIRRORED_REPEAT: 2
                            },
                            GC_MODES: {
                                DEFAULT: 0,
                                AUTO: 0,
                                MANUAL: 1
                            },
                            MIPMAP_TEXTURES: !0,
                            RETINA_PREFIX: /@(.+)x/,
                            RESOLUTION: 1,
                            FILTER_RESOLUTION: 1,
                            DEFAULT_RENDER_OPTIONS: {
                                view: null,
                                resolution: 1,
                                antialias: !1,
                                forceFXAA: !1,
                                autoResize: !1,
                                transparent: !1,
                                backgroundColor: 0,
                                clearBeforeRender: !0,
                                preserveDrawingBuffer: !1,
                                roundPixels: !1
                            },
                            SHAPES: {
                                POLY: 0,
                                RECT: 1,
                                CIRC: 2,
                                ELIP: 3,
                                RREC: 4
                            },
                            PRECISION: {
                                DEFAULT: "mediump",
                                LOW: "lowp",
                                MEDIUM: "mediump",
                                HIGH: "highp"
                            },
                            TRANSFORM_MODE: {
                                DEFAULT: 0,
                                STATIC: 0,
                                DYNAMIC: 1
                            },
                            TEXT_GRADIENT: {
                                LINEAR_VERTICAL: 0,
                                LINEAR_HORIZONTAL: 1
                            },
                            SPRITE_BATCH_SIZE: 4096,
                            SPRITE_MAX_TEXTURES: t("./utils/maxRecommendedTextures")(32)
                        };
                        e.exports = n
                    }, {
                        "./utils/maxRecommendedTextures": 152
                    }
                ],
                79: [
                    function (t, e, i) {
                        function n() {
                            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.rect = null
                        }
                        var r = t("../math"),
                            o = r.Rectangle;
                        n.prototype.constructor = n, e.exports = n, n.prototype.isEmpty = function () {
                            return this.minX > this.maxX || this.minY > this.maxY
                        }, n.prototype.clear = function () {
                            this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0)
                        }, n.prototype.getRectangle = function (t) {
                            return this.minX > this.maxX || this.minY > this.maxY ? o.EMPTY : (t = t || new o(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
                        }, n.prototype.addPoint = function (t) {
                            this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
                        }, n.prototype.addQuad = function (t) {
                            var e = this.minX,
                                i = this.minY,
                                n = this.maxX,
                                r = this.maxY,
                                o = t[0],
                                s = t[1];
                            e = o < e ? o : e, i = s < i ? s : i, n = o > n ? o : n, r = s > r ? s : r, o = t[2], s = t[3], e = o < e ? o : e, i = s < i ? s : i, n = o > n ? o : n, r = s > r ? s : r, o = t[4], s = t[5], e = o < e ? o : e, i = s < i ? s : i, n = o > n ? o : n, r = s > r ? s : r, o = t[6], s = t[7], e = o < e ? o : e, i = s < i ? s : i, n = o > n ? o : n, r = s > r ? s : r, this.minX = e, this.minY = i, this.maxX = n, this.maxY = r
                        }, n.prototype.addFrame = function (t, e, i, n, r) {
                            var o = t.worldTransform,
                                s = o.a,
                                a = o.b,
                                h = o.c,
                                l = o.d,
                                c = o.tx,
                                u = o.ty,
                                p = this.minX,
                                d = this.minY,
                                f = this.maxX,
                                m = this.maxY,
                                g = s * e + h * i + c,
                                v = a * e + l * i + u;
                            p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, m = v > m ? v : m, g = s * n + h * i + c, v = a * n + l * i + u, p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, m = v > m ? v : m, g = s * e + h * r + c, v = a * e + l * r + u, p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, m = v > m ? v : m, g = s * n + h * r + c, v = a * n + l * r + u, p = g < p ? g : p, d = v < d ? v : d, f = g > f ? g : f, m = v > m ? v : m, this.minX = p, this.minY = d, this.maxX = f, this.maxY = m
                        }, n.prototype.addVertices = function (t, e, i, n) {
                            for (var r = t.worldTransform, o = r.a, s = r.b, a = r.c, h = r.d, l = r.tx, c = r.ty, u = this.minX, p = this.minY, d = this.maxX, f = this.maxY, m = i; m < n; m += 2) {
                                var g = e[m],
                                    v = e[m + 1],
                                    y = o * g + a * v + l,
                                    _ = h * v + s * g + c;
                                u = y < u ? y : u, p = _ < p ? _ : p, d = y > d ? y : d, f = _ > f ? _ : f
                            }
                            this.minX = u, this.minY = p, this.maxX = d, this.maxY = f
                        }, n.prototype.addBounds = function (t) {
                            var e = this.minX,
                                i = this.minY,
                                n = this.maxX,
                                r = this.maxY;
                            this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > n ? t.maxX : n, this.maxY = t.maxY > r ? t.maxY : r
                        }
                    }, {
                        "../math": 102
                    }
                ],
                80: [
                    function (t, e, i) {
                        function n() {
                            o.call(this), this.children = []
                        }
                        var r = t("../utils"),
                            o = t("./DisplayObject");
                        n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            width: {
                                get: function () {
                                    return this.scale.x * this.getLocalBounds().width
                                },
                                set: function (t) {
                                    var e = this.getLocalBounds().width;
                                    0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
                                }
                            },
                            height: {
                                get: function () {
                                    return this.scale.y * this.getLocalBounds().height
                                },
                                set: function (t) {
                                    var e = this.getLocalBounds().height;
                                    0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
                                }
                            }
                        }), n.prototype.onChildrenChange = function () { }, n.prototype.addChild = function (t) {
                            var e = arguments.length;
                            if (e > 1)
                                for (var i = 0; i < e; i++) this.addChild(arguments[i]);
                            else t.parent && t.parent.removeChild(t), t.parent = this, this.transform._parentID = -1, this.children.push(t), this.onChildrenChange(this.children.length - 1), t.emit("added", this);
                            return t
                        }, n.prototype.addChildAt = function (t, e) {
                            if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.onChildrenChange(e), t.emit("added", this), t;
                            throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
                        }, n.prototype.swapChildren = function (t, e) {
                            if (t !== e) {
                                var i = this.getChildIndex(t),
                                    n = this.getChildIndex(e);
                                if (i < 0 || n < 0) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                                this.children[i] = e, this.children[n] = t, this.onChildrenChange(i < n ? i : n)
                            }
                        }, n.prototype.getChildIndex = function (t) {
                            var e = this.children.indexOf(t);
                            if (e === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
                            return e
                        }, n.prototype.setChildIndex = function (t, e) {
                            if (e < 0 || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                            var i = this.getChildIndex(t);
                            r.removeItems(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
                        }, n.prototype.getChildAt = function (t) {
                            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
                            return this.children[t]
                        }, n.prototype.removeChild = function (t) {
                            var e = arguments.length;
                            if (e > 1)
                                for (var i = 0; i < e; i++) this.removeChild(arguments[i]);
                            else {
                                var n = this.children.indexOf(t);
                                if (n === -1) return;
                                t.parent = null, r.removeItems(this.children, n, 1), this.onChildrenChange(n), t.emit("removed", this)
                            }
                            return t
                        }, n.prototype.removeChildAt = function (t) {
                            var e = this.getChildAt(t);
                            return e.parent = null, r.removeItems(this.children, t, 1), this.onChildrenChange(t), e.emit("removed", this), e
                        }, n.prototype.removeChildren = function (t, e) {
                            var i, n, r = t || 0,
                                o = "number" == typeof e ? e : this.children.length,
                                s = o - r;
                            if (s > 0 && s <= o) {
                                for (i = this.children.splice(r, s), n = 0; n < i.length; ++n) i[n].parent = null;
                                for (this.onChildrenChange(t), n = 0; n < i.length; ++n) i[n].emit("removed", this);
                                return i
                            }
                            if (0 === s && 0 === this.children.length) return [];
                            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
                        }, n.prototype.updateTransform = function () {
                            if (this._boundsID++, this.visible) {
                                this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                                for (var t = 0, e = this.children.length; t < e; ++t) this.children[t].updateTransform()
                            }
                        }, n.prototype.containerUpdateTransform = n.prototype.updateTransform, n.prototype.calculateBounds = function () {
                            if (this._bounds.clear(), this.visible) {
                                this._calculateBounds();
                                for (var t = 0; t < this.children.length; t++) {
                                    var e = this.children[t];
                                    e.calculateBounds(), this._bounds.addBounds(e._bounds)
                                }
                                this._boundsID = this._lastBoundsID
                            }
                        }, n.prototype._calculateBounds = function () { }, n.prototype.renderWebGL = function (t) {
                            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                                if (this._mask || this._filters) this.renderAdvancedWebGL(t);
                                else {
                                    this._renderWebGL(t);
                                    for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].renderWebGL(t)
                                }
                        }, n.prototype.renderAdvancedWebGL = function (t) {
                            t.currentRenderer.flush();
                            var e, i, n = this._filters,
                                r = this._mask;
                            if (n) {
                                for (this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0, e = 0; e < n.length; e++) n[e].enabled && this._enabledFilters.push(n[e]);
                                this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
                            }
                            for (r && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, i = this.children.length; e < i; e++) this.children[e].renderWebGL(t);
                            t.currentRenderer.flush(), r && t.maskManager.popMask(this, this._mask), n && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter(), t.currentRenderer.start()
                        }, n.prototype._renderWebGL = function (t) { }, n.prototype._renderCanvas = function (t) { }, n.prototype.renderCanvas = function (t) {
                            if (this.visible && !(this.alpha <= 0) && this.renderable) {
                                this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
                                for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].renderCanvas(t);
                                this._mask && t.maskManager.popMask(t)
                            }
                        }, n.prototype.destroy = function (t) {
                            o.prototype.destroy.call(this);
                            var e = "boolean" == typeof t ? t : t && t.children,
                                i = this.children;
                            if (this.children = null, e)
                                for (var n = i.length - 1; n >= 0; n--) {
                                    var r = i[n];
                                    r.parent = null, r.destroy(t)
                                }
                        }
                    }, {
                        "../utils": 151,
                        "./DisplayObject": 81
                    }
                ],
                81: [
                    function (t, e, i) {
                        function n() {
                            r.call(this);
                            var t = o.TRANSFORM_MODE.DEFAULT === o.TRANSFORM_MODE.STATIC ? s : a;
                            this.transform = new t, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.filterArea = null, this._filters = null, this._enabledFilters = null, this._bounds = new h, this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null
                        }
                        var r = t("eventemitter3"),
                            o = t("../const"),
                            s = t("./TransformStatic"),
                            a = t("./Transform"),
                            h = t("./Bounds"),
                            l = t("../math"),
                            c = new n;
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            x: {
                                get: function () {
                                    return this.position.x
                                },
                                set: function (t) {
                                    this.transform.position.x = t
                                }
                            },
                            y: {
                                get: function () {
                                    return this.position.y
                                },
                                set: function (t) {
                                    this.transform.position.y = t
                                }
                            },
                            worldTransform: {
                                get: function () {
                                    return this.transform.worldTransform
                                }
                            },
                            localTransform: {
                                get: function () {
                                    return this.transform.localTransform
                                }
                            },
                            position: {
                                get: function () {
                                    return this.transform.position
                                },
                                set: function (t) {
                                    this.transform.position.copy(t)
                                }
                            },
                            scale: {
                                get: function () {
                                    return this.transform.scale
                                },
                                set: function (t) {
                                    this.transform.scale.copy(t)
                                }
                            },
                            pivot: {
                                get: function () {
                                    return this.transform.pivot
                                },
                                set: function (t) {
                                    this.transform.pivot.copy(t)
                                }
                            },
                            skew: {
                                get: function () {
                                    return this.transform.skew
                                },
                                set: function (t) {
                                    this.transform.skew.copy(t)
                                }
                            },
                            rotation: {
                                get: function () {
                                    return this.transform.rotation
                                },
                                set: function (t) {
                                    this.transform.rotation = t
                                }
                            },
                            worldVisible: {
                                get: function () {
                                    var t = this;
                                    do {
                                        if (!t.visible) return !1;
                                        t = t.parent
                                    } while (t);
                                    return !0
                                }
                            },
                            mask: {
                                get: function () {
                                    return this._mask
                                },
                                set: function (t) {
                                    this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
                                }
                            },
                            filters: {
                                get: function () {
                                    return this._filters && this._filters.slice()
                                },
                                set: function (t) {
                                    this._filters = t && t.slice()
                                }
                            }
                        }), n.prototype.updateTransform = function () {
                            this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
                        }, n.prototype.displayObjectUpdateTransform = n.prototype.updateTransform, n.prototype._recursivePostUpdateTransform = function () {
                            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(c.transform)
                        }, n.prototype.getBounds = function (t, e) {
                            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = c, this.parent.transform._worldID++, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new l.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
                        }, n.prototype.getLocalBounds = function (t) {
                            var e = this.transform,
                                i = this.parent;
                            this.parent = null, this.transform = c.transform, t || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle), t = this._localBoundsRect);
                            var n = this.getBounds(!1, t);
                            return this.parent = i, this.transform = e, n
                        }, n.prototype.toGlobal = function (t, e, i) {
                            return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = c, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
                        }, n.prototype.toLocal = function (t, e, i, n) {
                            return e && (t = e.toGlobal(t, i, n)), n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = c, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
                        }, n.prototype.renderWebGL = function (t) { }, n.prototype.renderCanvas = function (t) { }, n.prototype.setParent = function (t) {
                            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                            return t.addChild(this), t
                        }, n.prototype.setTransform = function (t, e, i, n, r, o, s, a, h) {
                            return this.position.x = t || 0, this.position.y = e || 0, this.scale.x = i ? i : 1, this.scale.y = n ? n : 1, this.rotation = r || 0, this.skew.x = o || 0, this.skew.y = s || 0, this.pivot.x = a || 0, this.pivot.y = h || 0, this
                        }, n.prototype.destroy = function () {
                            this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1
                        }
                    }, {
                        "../const": 78,
                        "../math": 102,
                        "./Bounds": 79,
                        "./Transform": 82,
                        "./TransformStatic": 84,
                        eventemitter3: 16
                    }
                ],
                82: [
                    function (t, e, i) {
                        function n() {
                            o.call(this), this.position = new r.Point(0, 0), this.scale = new r.Point(1, 1), this.skew = new r.ObservablePoint(this.updateSkew, this, 0, 0), this.pivot = new r.Point(0, 0), this._rotation = 0, this._sr = Math.sin(0), this._cr = Math.cos(0), this._cy = Math.cos(0), this._sy = Math.sin(0), this._nsx = Math.sin(0), this._cx = Math.cos(0)
                        }
                        var r = t("../math"),
                            o = t("./TransformBase");
                        n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.updateSkew = function () {
                            this._cy = Math.cos(this.skew.y), this._sy = Math.sin(this.skew.y), this._nsx = Math.sin(this.skew.x), this._cx = Math.cos(this.skew.x)
                        }, n.prototype.updateLocalTransform = function () {
                            var t, e, i, n, r = this.localTransform;
                            t = this._cr * this.scale.x, e = this._sr * this.scale.x, i = -this._sr * this.scale.y, n = this._cr * this.scale.y, r.a = this._cy * t + this._sy * i, r.b = this._cy * e + this._sy * n, r.c = this._nsx * t + this._cx * i, r.d = this._nsx * e + this._cx * n
                        }, n.prototype.updateTransform = function (t) {
                            var e, i, n, r, o = t.worldTransform,
                                s = this.worldTransform,
                                a = this.localTransform;
                            e = this._cr * this.scale.x, i = this._sr * this.scale.x, n = -this._sr * this.scale.y, r = this._cr * this.scale.y, a.a = this._cy * e + this._sy * n, a.b = this._cy * i + this._sy * r, a.c = this._nsx * e + this._cx * n, a.d = this._nsx * i + this._cx * r, a.tx = this.position.x - (this.pivot.x * a.a + this.pivot.y * a.c), a.ty = this.position.y - (this.pivot.x * a.b + this.pivot.y * a.d), s.a = a.a * o.a + a.b * o.c, s.b = a.a * o.b + a.b * o.d, s.c = a.c * o.a + a.d * o.c, s.d = a.c * o.b + a.d * o.d, s.tx = a.tx * o.a + a.ty * o.c + o.tx, s.ty = a.tx * o.b + a.ty * o.d + o.ty, this._worldID++
                        }, n.prototype.setFromMatrix = function (t) {
                            t.decompose(this)
                        }, Object.defineProperties(n.prototype, {
                            rotation: {
                                get: function () {
                                    return this._rotation
                                },
                                set: function (t) {
                                    this._rotation = t, this._sr = Math.sin(t), this._cr = Math.cos(t)
                                }
                            }
                        }), e.exports = n
                    }, {
                        "../math": 102,
                        "./TransformBase": 83
                    }
                ],
                83: [
                    function (t, e, i) {
                        function n() {
                            this.worldTransform = new r.Matrix, this.localTransform = new r.Matrix, this._worldID = 0
                        }
                        var r = t("../math");
                        n.prototype.constructor = n, n.prototype.updateLocalTransform = function () { }, n.prototype.updateTransform = function (t) {
                            var e = t.worldTransform,
                                i = this.worldTransform,
                                n = this.localTransform;
                            i.a = n.a * e.a + n.b * e.c, i.b = n.a * e.b + n.b * e.d, i.c = n.c * e.a + n.d * e.c, i.d = n.c * e.b + n.d * e.d, i.tx = n.tx * e.a + n.ty * e.c + e.tx, i.ty = n.tx * e.b + n.ty * e.d + e.ty, this._worldID++
                        }, n.prototype.updateWorldTransform = n.prototype.updateTransform, n.IDENTITY = new n, e.exports = n
                    }, {
                        "../math": 102
                    }
                ],
                84: [
                    function (t, e, i) {
                        function n() {
                            o.call(this), this.position = new r.ObservablePoint(this.onChange, this, 0, 0), this.scale = new r.ObservablePoint(this.onChange, this, 1, 1), this.pivot = new r.ObservablePoint(this.onChange, this, 0, 0), this.skew = new r.ObservablePoint(this.updateSkew, this, 0, 0), this._rotation = 0, this._sr = Math.sin(0), this._cr = Math.cos(0), this._cy = Math.cos(0), this._sy = Math.sin(0), this._nsx = Math.sin(0), this._cx = Math.cos(0), this._localID = 0, this._currentLocalID = 0
                        }
                        var r = t("../math"),
                            o = t("./TransformBase");
                        n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.onChange = function () {
                            this._localID++
                        }, n.prototype.updateSkew = function () {
                            this._cy = Math.cos(this.skew._y), this._sy = Math.sin(this.skew._y), this._nsx = Math.sin(this.skew._x), this._cx = Math.cos(this.skew._x), this._localID++
                        }, n.prototype.updateLocalTransform = function () {
                            var t = this.localTransform;
                            if (this._localID !== this._currentLocalID) {
                                var e, i, n, r;
                                e = this._cr * this.scale._x, i = this._sr * this.scale._x, n = -this._sr * this.scale._y, r = this._cr * this.scale._y, t.a = this._cy * e + this._sy * n, t.b = this._cy * i + this._sy * r, t.c = this._nsx * e + this._cx * n, t.d = this._nsx * i + this._cx * r, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1
                            }
                        }, n.prototype.updateTransform = function (t) {
                            var e = t.worldTransform,
                                i = this.worldTransform,
                                n = this.localTransform;
                            if (this._localID !== this._currentLocalID) {
                                var r, o, s, a;
                                r = this._cr * this.scale._x, o = this._sr * this.scale._x, s = -this._sr * this.scale._y, a = this._cr * this.scale._y, n.a = this._cy * r + this._sy * s, n.b = this._cy * o + this._sy * a, n.c = this._nsx * r + this._cx * s, n.d = this._nsx * o + this._cx * a, n.tx = this.position._x - (this.pivot._x * n.a + this.pivot._y * n.c), n.ty = this.position._y - (this.pivot._x * n.b + this.pivot._y * n.d), this._currentLocalID = this._localID, this._parentID = -1
                            }
                            this._parentID !== t._worldID && (i.a = n.a * e.a + n.b * e.c, i.b = n.a * e.b + n.b * e.d, i.c = n.c * e.a + n.d * e.c, i.d = n.c * e.b + n.d * e.d, i.tx = n.tx * e.a + n.ty * e.c + e.tx, i.ty = n.tx * e.b + n.ty * e.d + e.ty, this._parentID = t._worldID, this._worldID++)
                        }, n.prototype.setFromMatrix = function (t) {
                            t.decompose(this), this._localID++
                        }, Object.defineProperties(n.prototype, {
                            rotation: {
                                get: function () {
                                    return this._rotation
                                },
                                set: function (t) {
                                    this._rotation = t, this._sr = Math.sin(t), this._cr = Math.cos(t), this._localID++
                                }
                            }
                        }), e.exports = n
                    }, {
                        "../math": 102,
                        "./TransformBase": 83
                    }
                ],
                85: [
                    function (t, e, i) {
                        function n() {
                            o.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = u.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new d, this.dirty = 0, this.fastRectDirty = -1, this.clearDirty = 0, this.boundsDirty = -1, this.cachedSpriteDirty = !1, this._spriteRect = null, this._fastRect = !1
                        }
                        var r, o = t("../display/Container"),
                            s = t("../textures/RenderTexture"),
                            a = t("../textures/Texture"),
                            h = t("./GraphicsData"),
                            l = t("../sprites/Sprite"),
                            c = t("../math"),
                            u = t("../const"),
                            p = t("../utils"),
                            d = t("../display/Bounds"),
                            f = t("./utils/bezierCurveTo"),
                            m = t("../renderers/canvas/CanvasRenderer"),
                            g = new c.Matrix,
                            v = new c.Point,
                            y = new Float32Array(4),
                            _ = new Float32Array(4);
                        n._SPRITE_TEXTURE = null, n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            var t = new n;
                            t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
                            for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
                            return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
                        }, n.prototype.lineStyle = function (t, e, i) {
                            if (this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === i ? 1 : i, this.currentPath)
                                if (this.currentPath.shape.points.length) {
                                    var n = new c.Polygon(this.currentPath.shape.points.slice(-2));
                                    n.closed = !1, this.drawShape(n)
                                } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
                            return this
                        }, n.prototype.moveTo = function (t, e) {
                            var i = new c.Polygon([t, e]);
                            return i.closed = !1, this.drawShape(i), this
                        }, n.prototype.lineTo = function (t, e) {
                            return this.currentPath.shape.points.push(t, e), this.dirty++, this
                        }, n.prototype.quadraticCurveTo = function (t, e, i, n) {
                            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                            var r, o, s = 20,
                                a = this.currentPath.shape.points;
                            0 === a.length && this.moveTo(0, 0);
                            for (var h = a[a.length - 2], l = a[a.length - 1], c = 0, u = 1; u <= s; ++u) c = u / s, r = h + (t - h) * c, o = l + (e - l) * c, a.push(r + (t + (i - t) * c - r) * c, o + (e + (n - e) * c - o) * c);
                            return this.dirty++, this
                        }, n.prototype.bezierCurveTo = function (t, e, i, n, r, o) {
                            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                            var s = this.currentPath.shape.points,
                                a = s[s.length - 2],
                                h = s[s.length - 1];
                            return s.length -= 2, f(a, h, t, e, i, n, r, o, s),
                                this.dirty++, this
                        }, n.prototype.arcTo = function (t, e, i, n, r) {
                            this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                            var o = this.currentPath.shape.points,
                                s = o[o.length - 2],
                                a = o[o.length - 1],
                                h = a - e,
                                l = s - t,
                                c = n - e,
                                u = i - t,
                                p = Math.abs(h * u - l * c);
                            if (p < 1e-8 || 0 === r) o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e);
                            else {
                                var d = h * h + l * l,
                                    f = c * c + u * u,
                                    m = h * c + l * u,
                                    g = r * Math.sqrt(d) / p,
                                    v = r * Math.sqrt(f) / p,
                                    y = g * m / d,
                                    _ = v * m / f,
                                    x = g * u + v * l,
                                    b = g * c + v * h,
                                    w = l * (v + y),
                                    S = h * (v + y),
                                    T = u * (g + _),
                                    M = c * (g + _),
                                    E = Math.atan2(S - b, w - x),
                                    A = Math.atan2(M - b, T - x);
                                this.arc(x + t, b + e, r, E, A, l * c > u * h)
                            }
                            return this.dirty++, this
                        }, n.prototype.arc = function (t, e, i, n, r, o) {
                            if (o = o || !1, n === r) return this;
                            !o && r <= n ? r += 2 * Math.PI : o && n <= r && (n += 2 * Math.PI);
                            var s = o ? (n - r) * -1 : r - n,
                                a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
                            if (0 === s) return this;
                            var h = t + Math.cos(n) * i,
                                l = e + Math.sin(n) * i;
                            this.currentPath ? this.currentPath.shape.points.push(h, l) : this.moveTo(h, l);
                            for (var c = this.currentPath.shape.points, u = s / (2 * a), p = 2 * u, d = Math.cos(u), f = Math.sin(u), m = a - 1, g = m % 1 / m, v = 0; v <= m; v++) {
                                var y = v + g * v,
                                    _ = u + n + p * y,
                                    x = Math.cos(_),
                                    b = -Math.sin(_);
                                c.push((d * x + f * b) * i + t, (d * -b + f * x) * i + e)
                            }
                            return this.dirty++, this
                        }, n.prototype.beginFill = function (t, e) {
                            return this.filling = !0,
                                this.fillColor = t || 0,
                                this.fillAlpha = void 0 === e ? 1 : e,
                                this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha),
                                this
                        }, n.prototype.endFill = function () {
                            return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
                        }, n.prototype.drawRect = function (t, e, i, n) {
                            return this.drawShape(new c.Rectangle(t, e, i, n)), this
                        }, n.prototype.drawRoundedRect = function (t, e, i, n, r) {
                            return this.drawShape(new c.RoundedRectangle(t, e, i, n, r)), this
                        }, n.prototype.drawCircle = function (t, e, i) {
                            return this.drawShape(new c.Circle(t, e, i)), this
                        }, n.prototype.drawEllipse = function (t, e, i, n) {
                            return this.drawShape(new c.Ellipse(t, e, i, n)), this
                        }, n.prototype.drawPolygon = function (t) {
                            var e = t,
                                i = !0;
                            if (e instanceof c.Polygon && (i = e.closed, e = e.points), !Array.isArray(e)) {
                                e = new Array(arguments.length);
                                for (var n = 0; n < e.length; ++n) e[n] = arguments[n]
                            }
                            var r = new c.Polygon(e);
                            return r.closed = i, this.drawShape(r), this
                        }, n.prototype.clear = function () {
                            return this.lineWidth = 0, this.filling = !1, this.dirty++, this.clearDirty++, this.graphicsData = [], this
                        }, n.prototype.isFastRect = function () {
                            return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === u.SHAPES.RECT && !this.graphicsData[0].lineWidth
                        }, n.prototype._renderWebGL = function (t) {
                            this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
                        }, n.prototype._renderSpriteRect = function (t) {
                            var e = this.graphicsData[0].shape;
                            if (!this._spriteRect) {
                                if (!n._SPRITE_TEXTURE) {
                                    n._SPRITE_TEXTURE = s.create(10, 10);
                                    var i = t._activeRenderTarget;
                                    t.bindRenderTexture(n._SPRITE_TEXTURE), t.clear([1, 1, 1, 1]), t.bindRenderTarget(i)
                                }
                                this._spriteRect = new l(n._SPRITE_TEXTURE)
                            }
                            if (16777215 === this.tint) this._spriteRect.tint = this.graphicsData[0].fillColor;
                            else {
                                var r = y,
                                    o = _;
                                p.hex2rgb(this.graphicsData[0].fillColor, r), p.hex2rgb(this.tint, o), r[0] *= o[0], r[1] *= o[1], r[2] *= o[2], this._spriteRect.tint = p.rgb2hex(r)
                            }
                            this._spriteRect.alpha = this.graphicsData[0].fillAlpha, this._spriteRect.worldAlpha = this.worldAlpha * this._spriteRect.alpha, n._SPRITE_TEXTURE._frame.width = e.width, n._SPRITE_TEXTURE._frame.height = e.height, this._spriteRect.transform.worldTransform = this.transform.worldTransform, this._spriteRect.anchor.set(-e.x / e.width, -e.y / e.height), this._spriteRect.onAnchorUpdate(), this._spriteRect._renderWebGL(t)
                        }, n.prototype._renderCanvas = function (t) {
                            this.isMask !== !0 && t.plugins.graphics.render(this)
                        }, n.prototype._calculateBounds = function () {
                            if (this.renderable) {
                                this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.dirty++, this.cachedSpriteDirty = !0);
                                var t = this._localBounds;
                                this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
                            }
                        }, n.prototype.containsPoint = function (t) {
                            this.worldTransform.applyInverse(t, v);
                            for (var e = this.graphicsData, i = 0; i < e.length; i++) {
                                var n = e[i];
                                if (n.fill && n.shape && n.shape.contains(v.x, v.y)) return !0
                            }
                            return !1
                        }, n.prototype.updateLocalBounds = function () {
                            var t = 1 / 0,
                                e = -(1 / 0),
                                i = 1 / 0,
                                n = -(1 / 0);
                            if (this.graphicsData.length)
                                for (var r, o, s, a, h, l, c = 0; c < this.graphicsData.length; c++) {
                                    var p = this.graphicsData[c],
                                        d = p.type,
                                        f = p.lineWidth;
                                    if (r = p.shape, d === u.SHAPES.RECT || d === u.SHAPES.RREC) s = r.x - f / 2, a = r.y - f / 2, h = r.width + f, l = r.height + f, t = s < t ? s : t, e = s + h > e ? s + h : e, i = a < i ? a : i, n = a + l > n ? a + l : n;
                                    else if (d === u.SHAPES.CIRC) s = r.x, a = r.y, h = r.radius + f / 2, l = r.radius + f / 2, t = s - h < t ? s - h : t, e = s + h > e ? s + h : e, i = a - l < i ? a - l : i, n = a + l > n ? a + l : n;
                                    else if (d === u.SHAPES.ELIP) s = r.x, a = r.y, h = r.width + f / 2, l = r.height + f / 2, t = s - h < t ? s - h : t, e = s + h > e ? s + h : e, i = a - l < i ? a - l : i, n = a + l > n ? a + l : n;
                                    else {
                                        o = r.points;
                                        for (var m = 0; m < o.length; m += 2) s = o[m], a = o[m + 1], t = s - f < t ? s - f : t, e = s + f > e ? s + f : e, i = a - f < i ? a - f : i, n = a + f > n ? a + f : n
                                    }
                                } else t = 0, e = 0, i = 0, n = 0;
                            var g = this.boundsPadding;
                            this._localBounds.minX = t - g, this._localBounds.maxX = e + 2 * g, this._localBounds.minY = i - g, this._localBounds.maxY = n + 2 * g
                        }, n.prototype.drawShape = function (t) {
                            this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                            var e = new h(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
                            return this.graphicsData.push(e), e.type === u.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty++, e
                        }, n.prototype.generateCanvasTexture = function (t, e) {
                            e = e || 1;
                            var i = this.getLocalBounds(),
                                n = new s.create(i.width * e, i.height * e);
                            r || (r = new m), g.tx = -i.x, g.ty = -i.y, r.render(this, n, !1, g);
                            var o = a.fromCanvas(n.baseTexture._canvasRenderTarget.canvas, t);
                            return o.baseTexture.resolution = e, o
                        }, n.prototype.closePath = function () {
                            var t = this.currentPath;
                            return t && t.shape && t.shape.close(), this
                        }, n.prototype.addHole = function () {
                            var t = this.graphicsData.pop();
                            return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
                        }, n.prototype.destroy = function () {
                            o.prototype.destroy.apply(this, arguments);
                            for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
                            for (var e in this._webgl)
                                for (var i = 0; i < this._webgl[e].data.length; ++i) this._webgl[e].data[i].destroy();
                            this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
                        }
                    }, {
                        "../const": 78,
                        "../display/Bounds": 79,
                        "../display/Container": 80,
                        "../math": 102,
                        "../renderers/canvas/CanvasRenderer": 109,
                        "../sprites/Sprite": 133,
                        "../textures/RenderTexture": 143,
                        "../textures/Texture": 144,
                        "../utils": 151,
                        "./GraphicsData": 86,
                        "./utils/bezierCurveTo": 88
                    }
                ],
                86: [
                    function (t, e, i) {
                        function n(t, e, i, n, r, o, s) {
                            this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = n, this.fillAlpha = r, this._fillTint = n, this.fill = o, this.holes = [], this.shape = s, this.type = s.type
                        }
                        n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            return new n(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
                        }, n.prototype.addHole = function (t) {
                            this.holes.push(t)
                        }, n.prototype.destroy = function () {
                            this.shape = null, this.holes = null
                        }
                    }, {}
                ],
                87: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t
                        }
                        var r = t("../../renderers/canvas/CanvasRenderer"),
                            o = t("../../const");
                        n.prototype.constructor = n, e.exports = n, r.registerPlugin("graphics", n), n.prototype.render = function (t) {
                            var e = this.renderer,
                                i = e.context,
                                n = t.worldAlpha,
                                r = t.transform.worldTransform,
                                s = e.resolution;
                            this._prevTint !== this.tint && (this.dirty = !0), i.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), t.dirty && (this.updateGraphicsTint(t), t.dirty = !1), e.setBlendMode(t.blendMode);
                            for (var a = 0; a < t.graphicsData.length; a++) {
                                var h = t.graphicsData[a],
                                    l = h.shape,
                                    c = h._fillTint,
                                    u = h._lineTint;
                                if (i.lineWidth = h.lineWidth, h.type === o.SHAPES.POLY) {
                                    i.beginPath(), this.renderPolygon(l.points, l.closed, i);
                                    for (var p = 0; p < h.holes.length; p++) {
                                        var d = h.holes[p];
                                        this.renderPolygon(d.points, !0, i)
                                    }
                                    h.fill && (i.globalAlpha = h.fillAlpha * n, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * n, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke())
                                } else if (h.type === o.SHAPES.RECT) (h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * n, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fillRect(l.x, l.y, l.width, l.height)), h.lineWidth && (i.globalAlpha = h.lineAlpha * n, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.strokeRect(l.x, l.y, l.width, l.height));
                                else if (h.type === o.SHAPES.CIRC) i.beginPath(), i.arc(l.x, l.y, l.radius, 0, 2 * Math.PI), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * n, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * n, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke());
                                else if (h.type === o.SHAPES.ELIP) {
                                    var f = 2 * l.width,
                                        m = 2 * l.height,
                                        g = l.x - f / 2,
                                        v = l.y - m / 2;
                                    i.beginPath();
                                    var y = .5522848,
                                        _ = f / 2 * y,
                                        x = m / 2 * y,
                                        b = g + f,
                                        w = v + m,
                                        S = g + f / 2,
                                        T = v + m / 2;
                                    i.moveTo(g, T), i.bezierCurveTo(g, T - x, S - _, v, S, v), i.bezierCurveTo(S + _, v, b, T - x, b, T), i.bezierCurveTo(b, T + x, S + _, w, S, w), i.bezierCurveTo(S - _, w, g, T + x, g, T), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * n, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * n, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke())
                                } else if (h.type === o.SHAPES.RREC) {
                                    var M = l.x,
                                        E = l.y,
                                        A = l.width,
                                        C = l.height,
                                        L = l.radius,
                                        R = Math.min(A, C) / 2 | 0;
                                    L = L > R ? R : L, i.beginPath(), i.moveTo(M, E + L), i.lineTo(M, E + C - L), i.quadraticCurveTo(M, E + C, M + L, E + C), i.lineTo(M + A - L, E + C), i.quadraticCurveTo(M + A, E + C, M + A, E + C - L), i.lineTo(M + A, E + L), i.quadraticCurveTo(M + A, E, M + A - L, E), i.lineTo(M + L, E), i.quadraticCurveTo(M, E, M, E + L), i.closePath(), (h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * n, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * n, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke())
                                }
                            }
                        }, n.prototype.updateGraphicsTint = function (t) {
                            t._prevTint = t.tint;
                            for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, n = (255 & t.tint) / 255, r = 0; r < t.graphicsData.length; r++) {
                                var o = t.graphicsData[r],
                                    s = 0 | o.fillColor,
                                    a = 0 | o.lineColor;
                                o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * i * 255 << 8) + (255 & s) / 255 * n * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * n * 255
                            }
                        }, n.prototype.renderPolygon = function (t, e, i) {
                            i.moveTo(t[0], t[1]);
                            for (var n = 1; n < t.length / 2; n++) i.lineTo(t[2 * n], t[2 * n + 1]);
                            e && i.closePath()
                        }, n.prototype.destroy = function () {
                            this.renderer = null
                        }
                    }, {
                        "../../const": 78,
                        "../../renderers/canvas/CanvasRenderer": 109
                    }
                ],
                88: [
                    function (t, e, i) {
                        var n = function (t, e, i, n, r, o, s, a, h) {
                            h = h || [];
                            var l, c, u, p, d, f = 20;
                            h.push(t, e);
                            for (var m = 0, g = 1; g <= f; ++g) m = g / f, l = 1 - m, c = l * l, u = c * l, p = m * m, d = p * m, h.push(u * t + 3 * c * m * i + 3 * l * p * r + d * s, u * e + 3 * c * m * n + 3 * l * p * o + d * a);
                            return h
                        };
                        e.exports = n
                    }, {}
                ],
                89: [
                    function (t, e, i) {
                        function n(t) {
                            s.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.gl = t.gl, this.CONTEXT_UID = 0
                        }
                        var r = t("../../utils"),
                            o = t("../../const"),
                            s = t("../../renderers/webgl/utils/ObjectRenderer"),
                            a = t("../../renderers/webgl/WebGLRenderer"),
                            h = t("./WebGLGraphicsData"),
                            l = t("./shaders/PrimitiveShader"),
                            c = t("./utils/buildPoly"),
                            u = t("./utils/buildRectangle"),
                            p = t("./utils/buildRoundedRectangle"),
                            d = t("./utils/buildCircle");
                        n.prototype = Object.create(s.prototype), n.prototype.constructor = n, e.exports = n, a.registerPlugin("graphics", n), n.prototype.onContextChange = function () {
                            this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new l(this.gl)
                        }, n.prototype.destroy = function () {
                            s.prototype.destroy.call(this);
                            for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                            this.graphicsDataPool = null
                        }, n.prototype.render = function (t) {
                            var e, i = this.renderer,
                                n = i.gl,
                                o = t._webGL[this.CONTEXT_UID];
                            o && t.dirty === o.dirty || (this.updateGraphics(t), o = t._webGL[this.CONTEXT_UID]);
                            var s = this.primitiveShader;
                            i.bindShader(s), i.state.setBlendMode(t.blendMode);
                            for (var a = 0, h = o.data.length; a < h; a++) {
                                e = o.data[a];
                                var l = e.shader;
                                i.bindShader(l), l.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), l.uniforms.tint = r.hex2rgb(t.tint), l.uniforms.alpha = t.worldAlpha, e.vao.bind().draw(n.TRIANGLE_STRIP, e.indices.length).unbind()
                            }
                        }, n.prototype.updateGraphics = function (t) {
                            var e = this.renderer.gl,
                                i = t._webGL[this.CONTEXT_UID];
                            i || (i = t._webGL[this.CONTEXT_UID] = {
                                lastIndex: 0,
                                data: [],
                                gl: e,
                                clearDirty: -1,
                                dirty: -1
                            }), i.dirty = t.dirty;
                            var n;
                            if (t.clearDirty !== i.clearDirty) {
                                for (i.clearDirty = t.clearDirty, n = 0; n < i.data.length; n++) {
                                    var r = i.data[n];
                                    this.graphicsDataPool.push(r)
                                }
                                i.data = [], i.lastIndex = 0
                            }
                            var s;
                            for (n = i.lastIndex; n < t.graphicsData.length; n++) {
                                var a = t.graphicsData[n];
                                s = this.getWebGLData(i, 0), a.type === o.SHAPES.POLY && c(a, s), a.type === o.SHAPES.RECT ? u(a, s) : a.type === o.SHAPES.CIRC || a.type === o.SHAPES.ELIP ? d(a, s) : a.type === o.SHAPES.RREC && p(a, s), i.lastIndex++
                            }
                            for (n = 0; n < i.data.length; n++) s = i.data[n], s.dirty && s.upload()
                        }, n.prototype.getWebGLData = function (t, e) {
                            var i = t.data[t.data.length - 1];
                            return (!i || i.points.length > 32e4) && (i = this.graphicsDataPool.pop() || new h(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), i.reset(e), t.data.push(i)), i.dirty = !0, i
                        }
                    }, {
                        "../../const": 78,
                        "../../renderers/webgl/WebGLRenderer": 116,
                        "../../renderers/webgl/utils/ObjectRenderer": 126,
                        "../../utils": 151,
                        "./WebGLGraphicsData": 90,
                        "./shaders/PrimitiveShader": 91,
                        "./utils/buildCircle": 92,
                        "./utils/buildPoly": 94,
                        "./utils/buildRectangle": 95,
                        "./utils/buildRoundedRectangle": 96
                    }
                ],
                90: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = r.GLBuffer.createVertexBuffer(t), this.indexBuffer = r.GLBuffer.createIndexBuffer(t), this.dirty = !0, this.glPoints = null, this.glIndices = null, this.shader = e, this.vao = new r.VertexArrayObject(t, i).addIndex(this.indexBuffer).addAttribute(this.buffer, e.attributes.aVertexPosition, t.FLOAT, !1, 24, 0).addAttribute(this.buffer, e.attributes.aColor, t.FLOAT, !1, 24, 8)
                        }
                        var r = t("pixi-gl-core");
                        n.prototype.constructor = n, e.exports = n, n.prototype.reset = function () {
                            this.points.length = 0, this.indices.length = 0
                        }, n.prototype.upload = function () {
                            this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
                        }, n.prototype.destroy = function () {
                            this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
                        }
                    }, {
                        "pixi-gl-core": 51
                    }
                ],
                91: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"))
                        }
                        var r = t("../../../Shader");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n
                    }, {
                        "../../../Shader": 77
                    }
                ],
                92: [
                    function (t, e, i) {
                        var n = t("./buildLine"),
                            r = t("../../../const"),
                            o = t("../../../utils"),
                            s = function (t, e) {
                                var i, s, a = t.shape,
                                    h = a.x,
                                    l = a.y;
                                t.type === r.SHAPES.CIRC ? (i = a.radius, s = a.radius) : (i = a.width, s = a.height);
                                var c = Math.floor(30 * Math.sqrt(a.radius)) || Math.floor(15 * Math.sqrt(a.width + a.height)),
                                    u = 2 * Math.PI / c,
                                    p = 0;
                                if (t.fill) {
                                    var d = o.hex2rgb(t.fillColor),
                                        f = t.fillAlpha,
                                        m = d[0] * f,
                                        g = d[1] * f,
                                        v = d[2] * f,
                                        y = e.points,
                                        _ = e.indices,
                                        x = y.length / 6;
                                    for (_.push(x), p = 0; p < c + 1; p++) y.push(h, l, m, g, v, f), y.push(h + Math.sin(u * p) * i, l + Math.cos(u * p) * s, m, g, v, f), _.push(x++, x++);
                                    _.push(x - 1)
                                }
                                if (t.lineWidth) {
                                    var b = t.points;
                                    for (t.points = [], p = 0; p < c + 1; p++) t.points.push(h + Math.sin(u * p) * i, l + Math.cos(u * p) * s);
                                    n(t, e), t.points = b
                                }
                            };
                        e.exports = s
                    }, {
                        "../../../const": 78,
                        "../../../utils": 151,
                        "./buildLine": 93
                    }
                ],
                93: [
                    function (t, e, i) {
                        var n = t("../../../math"),
                            r = t("../../../utils"),
                            o = function (t, e) {
                                var i = 0,
                                    o = t.points;
                                if (0 !== o.length) {
                                    var s = new n.Point(o[0], o[1]),
                                        a = new n.Point(o[o.length - 2], o[o.length - 1]);
                                    if (s.x === a.x && s.y === a.y) {
                                        o = o.slice(), o.pop(), o.pop(), a = new n.Point(o[o.length - 2], o[o.length - 1]);
                                        var h = a.x + .5 * (s.x - a.x),
                                            l = a.y + .5 * (s.y - a.y);
                                        o.unshift(h, l), o.push(h, l)
                                    }
                                    var c, u, p, d, f, m, g, v, y, _, x, b, w, S, T, M, E, A, C, L, R, P, O, I = e.points,
                                        D = e.indices,
                                        B = o.length / 2,
                                        k = o.length,
                                        F = I.length / 6,
                                        N = t.lineWidth / 2,
                                        U = r.hex2rgb(t.lineColor),
                                        G = t.lineAlpha,
                                        z = U[0] * G,
                                        V = U[1] * G,
                                        j = U[2] * G;
                                    for (p = o[0], d = o[1], f = o[2], m = o[3], y = -(d - m), _ = p - f, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= N, _ *= N, I.push(p - y, d - _, z, V, j, G), I.push(p + y, d + _, z, V, j, G), i = 1; i < B - 1; i++) p = o[2 * (i - 1)], d = o[2 * (i - 1) + 1], f = o[2 * i], m = o[2 * i + 1], g = o[2 * (i + 1)], v = o[2 * (i + 1) + 1], y = -(d - m), _ = p - f, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= N, _ *= N, x = -(m - v), b = f - g, O = Math.sqrt(x * x + b * b), x /= O, b /= O, x *= N, b *= N, T = -_ + d - (-_ + m), M = -y + f - (-y + p), E = (-y + p) * (-_ + m) - (-y + f) * (-_ + d), A = -b + v - (-b + m), C = -x + f - (-x + g), L = (-x + g) * (-b + m) - (-x + f) * (-b + v), R = T * C - A * M, Math.abs(R) < .1 ? (R += 10.1, I.push(f - y, m - _, z, V, j, G), I.push(f + y, m + _, z, V, j, G)) : (c = (M * L - C * E) / R, u = (A * E - T * L) / R, P = (c - f) * (c - f) + (u - m) * (u - m), P > 19600 ? (w = y - x, S = _ - b, O = Math.sqrt(w * w + S * S), w /= O, S /= O, w *= N, S *= N, I.push(f - w, m - S), I.push(z, V, j, G), I.push(f + w, m + S), I.push(z, V, j, G), I.push(f - w, m - S), I.push(z, V, j, G), k++) : (I.push(c, u), I.push(z, V, j, G), I.push(f - (c - f), m - (u - m)), I.push(z, V, j, G)));
                                    for (p = o[2 * (B - 2)], d = o[2 * (B - 2) + 1], f = o[2 * (B - 1)], m = o[2 * (B - 1) + 1], y = -(d - m), _ = p - f, O = Math.sqrt(y * y + _ * _), y /= O, _ /= O, y *= N, _ *= N, I.push(f - y, m - _), I.push(z, V, j, G), I.push(f + y, m + _), I.push(z, V, j, G), D.push(F), i = 0; i < k; i++) D.push(F++);
                                    D.push(F - 1)
                                }
                            };
                        e.exports = o
                    }, {
                        "../../../math": 102,
                        "../../../utils": 151
                    }
                ],
                94: [
                    function (t, e, i) {
                        var n = t("./buildLine"),
                            r = t("../../../utils"),
                            o = t("earcut"),
                            s = function (t, e) {
                                t.points = t.shape.points.slice();
                                var i = t.points;
                                if (t.fill && i.length >= 6) {
                                    for (var s = [], a = t.holes, h = 0; h < a.length; h++) {
                                        var l = a[h];
                                        s.push(i.length / 2), i = i.concat(l.points)
                                    }
                                    var c = e.points,
                                        u = e.indices,
                                        p = i.length / 2,
                                        d = r.hex2rgb(t.fillColor),
                                        f = t.fillAlpha,
                                        m = d[0] * f,
                                        g = d[1] * f,
                                        v = d[2] * f,
                                        y = o(i, s, 2);
                                    if (!y) return;
                                    var _ = c.length / 6;
                                    for (h = 0; h < y.length; h += 3) u.push(y[h] + _), u.push(y[h] + _), u.push(y[h + 1] + _), u.push(y[h + 2] + _), u.push(y[h + 2] + _);
                                    for (h = 0; h < p; h++) c.push(i[2 * h], i[2 * h + 1], m, g, v, f)
                                }
                                t.lineWidth > 0 && n(t, e)
                            };
                        e.exports = s
                    }, {
                        "../../../utils": 151,
                        "./buildLine": 93,
                        earcut: 15
                    }
                ],
                95: [
                    function (t, e, i) {
                        var n = t("./buildLine"),
                            r = t("../../../utils"),
                            o = function (t, e) {
                                var i = t.shape,
                                    o = i.x,
                                    s = i.y,
                                    a = i.width,
                                    h = i.height;
                                if (t.fill) {
                                    var l = r.hex2rgb(t.fillColor),
                                        c = t.fillAlpha,
                                        u = l[0] * c,
                                        p = l[1] * c,
                                        d = l[2] * c,
                                        f = e.points,
                                        m = e.indices,
                                        g = f.length / 6;
                                    f.push(o, s), f.push(u, p, d, c), f.push(o + a, s), f.push(u, p, d, c), f.push(o, s + h), f.push(u, p, d, c), f.push(o + a, s + h), f.push(u, p, d, c), m.push(g, g, g + 1, g + 2, g + 3, g + 3)
                                }
                                if (t.lineWidth) {
                                    var v = t.points;
                                    t.points = [o, s, o + a, s, o + a, s + h, o, s + h, o, s], n(t, e), t.points = v
                                }
                            };
                        e.exports = o
                    }, {
                        "../../../utils": 151,
                        "./buildLine": 93
                    }
                ],
                96: [
                    function (t, e, i) {
                        var n = t("earcut"),
                            r = t("./buildLine"),
                            o = t("../../../utils"),
                            s = function (t, e) {
                                var i = t.shape,
                                    s = i.x,
                                    h = i.y,
                                    l = i.width,
                                    c = i.height,
                                    u = i.radius,
                                    p = [];
                                if (p.push(s, h + u), a(s, h + c - u, s, h + c, s + u, h + c, p), a(s + l - u, h + c, s + l, h + c, s + l, h + c - u, p), a(s + l, h + u, s + l, h, s + l - u, h, p), a(s + u, h, s, h, s, h + u + 1e-10, p), t.fill) {
                                    var d = o.hex2rgb(t.fillColor),
                                        f = t.fillAlpha,
                                        m = d[0] * f,
                                        g = d[1] * f,
                                        v = d[2] * f,
                                        y = e.points,
                                        _ = e.indices,
                                        x = y.length / 6,
                                        b = n(p, null, 2),
                                        w = 0;
                                    for (w = 0; w < b.length; w += 3) _.push(b[w] + x), _.push(b[w] + x), _.push(b[w + 1] + x), _.push(b[w + 2] + x), _.push(b[w + 2] + x);
                                    for (w = 0; w < p.length; w++) y.push(p[w], p[++w], m, g, v, f)
                                }
                                if (t.lineWidth) {
                                    var S = t.points;
                                    t.points = p, r(t, e), t.points = S
                                }
                            },
                            a = function (t, e, i, n, r, o, s) {
                                function a(t, e, i) {
                                    var n = e - t;
                                    return t + n * i
                                }
                                for (var h, l, c, u, p, d, f = 20, m = s || [], g = 0, v = 0; v <= f; v++) g = v / f, h = a(t, i, g), l = a(e, n, g), c = a(i, r, g), u = a(n, o, g), p = a(h, c, g), d = a(l, u, g), m.push(p, d);
                                return m
                            };
                        e.exports = s
                    }, {
                        "../../../utils": 151,
                        "./buildLine": 93,
                        earcut: 15
                    }
                ],
                97: [
                    function (t, e, i) {
                        var n = e.exports = Object.assign(t("./const"), t("./math"), {
                            utils: t("./utils"),
                            ticker: t("./ticker"),
                            DisplayObject: t("./display/DisplayObject"),
                            Container: t("./display/Container"),
                            Transform: t("./display/Transform"),
                            TransformStatic: t("./display/TransformStatic"),
                            TransformBase: t("./display/TransformBase"),
                            Sprite: t("./sprites/Sprite"),
                            CanvasSpriteRenderer: t("./sprites/canvas/CanvasSpriteRenderer"),
                            CanvasTinter: t("./sprites/canvas/CanvasTinter"),
                            SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
                            Text: t("./text/Text"),
                            TextStyle: t("./text/TextStyle"),
                            Graphics: t("./graphics/Graphics"),
                            GraphicsData: t("./graphics/GraphicsData"),
                            GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
                            CanvasGraphicsRenderer: t("./graphics/canvas/CanvasGraphicsRenderer"),
                            Texture: t("./textures/Texture"),
                            BaseTexture: t("./textures/BaseTexture"),
                            RenderTexture: t("./textures/RenderTexture"),
                            BaseRenderTexture: t("./textures/BaseRenderTexture"),
                            VideoBaseTexture: t("./textures/VideoBaseTexture"),
                            TextureUvs: t("./textures/TextureUvs"),
                            CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
                            CanvasRenderTarget: t("./renderers/canvas/utils/CanvasRenderTarget"),
                            Shader: t("./Shader"),
                            WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
                            WebGLManager: t("./renderers/webgl/managers/WebGLManager"),
                            ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
                            RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
                            Quad: t("./renderers/webgl/utils/Quad"),
                            SpriteMaskFilter: t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter"),
                            Filter: t("./renderers/webgl/filters/Filter"),
                            glCore: t("pixi-gl-core"),
                            autoDetectRenderer: function (t, e, i, r) {
                                return t = t || 800, e = e || 600, !r && n.utils.isWebGLSupported() ? new n.WebGLRenderer(t, e, i) : new n.CanvasRenderer(t, e, i)
                            }
                        })
                    }, {
                        "./Shader": 77,
                        "./const": 78,
                        "./display/Container": 80,
                        "./display/DisplayObject": 81,
                        "./display/Transform": 82,
                        "./display/TransformBase": 83,
                        "./display/TransformStatic": 84,
                        "./graphics/Graphics": 85,
                        "./graphics/GraphicsData": 86,
                        "./graphics/canvas/CanvasGraphicsRenderer": 87,
                        "./graphics/webgl/GraphicsRenderer": 89,
                        "./math": 102,
                        "./renderers/canvas/CanvasRenderer": 109,
                        "./renderers/canvas/utils/CanvasRenderTarget": 111,
                        "./renderers/webgl/WebGLRenderer": 116,
                        "./renderers/webgl/filters/Filter": 118,
                        "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 121,
                        "./renderers/webgl/managers/WebGLManager": 125,
                        "./renderers/webgl/utils/ObjectRenderer": 126,
                        "./renderers/webgl/utils/Quad": 127,
                        "./renderers/webgl/utils/RenderTarget": 128,
                        "./sprites/Sprite": 133,
                        "./sprites/canvas/CanvasSpriteRenderer": 134,
                        "./sprites/canvas/CanvasTinter": 135,
                        "./sprites/webgl/SpriteRenderer": 137,
                        "./text/Text": 139,
                        "./text/TextStyle": 140,
                        "./textures/BaseRenderTexture": 141,
                        "./textures/BaseTexture": 142,
                        "./textures/RenderTexture": 143,
                        "./textures/Texture": 144,
                        "./textures/TextureUvs": 145,
                        "./textures/VideoBaseTexture": 146,
                        "./ticker": 148,
                        "./utils": 151,
                        "pixi-gl-core": 51
                    }
                ],
                98: [
                    function (t, e, i) {
                        function n(t) {
                            return t < 0 ? -1 : t > 0 ? 1 : 0
                        }

                        function r() {
                            for (var t = 0; t < 16; t++) {
                                var e = [];
                                u.push(e);
                                for (var i = 0; i < 16; i++)
                                    for (var r = n(o[t] * o[i] + a[t] * s[i]), p = n(s[t] * o[i] + h[t] * s[i]), d = n(o[t] * a[i] + a[t] * h[i]), f = n(s[t] * a[i] + h[t] * h[i]), m = 0; m < 16; m++)
                                        if (o[m] === r && s[m] === p && a[m] === d && h[m] === f) {
                                            e.push(m);
                                            break
                                        }
                            }
                            for (t = 0; t < 16; t++) {
                                var g = new c;
                                g.set(o[t], s[t], a[t], h[t], 0, 0), l.push(g)
                            }
                        }
                        var o = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                            s = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                            a = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                            h = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                            l = [],
                            c = t("./Matrix"),
                            u = [];
                        r();
                        var p = {
                            E: 0,
                            SE: 1,
                            S: 2,
                            SW: 3,
                            W: 4,
                            NW: 5,
                            N: 6,
                            NE: 7,
                            MIRROR_VERTICAL: 8,
                            MIRROR_HORIZONTAL: 12,
                            uX: function (t) {
                                return o[t]
                            },
                            uY: function (t) {
                                return s[t]
                            },
                            vX: function (t) {
                                return a[t]
                            },
                            vY: function (t) {
                                return h[t]
                            },
                            inv: function (t) {
                                return 8 & t ? 15 & t : 7 & -t
                            },
                            add: function (t, e) {
                                return u[t][e]
                            },
                            sub: function (t, e) {
                                return u[t][p.inv(e)]
                            },
                            rotate180: function (t) {
                                return 4 ^ t
                            },
                            isSwapWidthHeight: function (t) {
                                return 2 === (3 & t)
                            },
                            byDirection: function (t, e) {
                                return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? p.S : p.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? p.E : p.W : e > 0 ? t > 0 ? p.SE : p.SW : t > 0 ? p.NE : p.NW
                            },
                            matrixAppendRotationInv: function (t, e, i, n) {
                                var r = l[p.inv(e)];
                                i = i || 0, n = n || 0, r.tx = i, r.ty = n, t.append(r)
                            }
                        };
                        e.exports = p
                    }, {
                        "./Matrix": 99
                    }
                ],
                99: [
                    function (t, e, i) {
                        function n() {
                            this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this.array = null
                        }
                        var r = t("./Point");
                        n.prototype.constructor = n, e.exports = n, n.prototype.fromArray = function (t) {
                            this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                        }, n.prototype.set = function (t, e, i, n, r, o) {
                            return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = r, this.ty = o, this
                        }, n.prototype.toArray = function (t, e) {
                            this.array || (this.array = new Float32Array(9));
                            var i = e || this.array;
                            return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
                        }, n.prototype.apply = function (t, e) {
                            e = e || new r;
                            var i = t.x,
                                n = t.y;
                            return e.x = this.a * i + this.c * n + this.tx, e.y = this.b * i + this.d * n + this.ty, e
                        }, n.prototype.applyInverse = function (t, e) {
                            e = e || new r;
                            var i = 1 / (this.a * this.d + this.c * -this.b),
                                n = t.x,
                                o = t.y;
                            return e.x = this.d * i * n + -this.c * i * o + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * o + -this.b * i * n + (-this.ty * this.a + this.tx * this.b) * i, e
                        }, n.prototype.translate = function (t, e) {
                            return this.tx += t, this.ty += e, this
                        }, n.prototype.scale = function (t, e) {
                            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                        }, n.prototype.rotate = function (t) {
                            var e = Math.cos(t),
                                i = Math.sin(t),
                                n = this.a,
                                r = this.c,
                                o = this.tx;
                            return this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = r * e - this.d * i, this.d = r * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this
                        }, n.prototype.append = function (t) {
                            var e = this.a,
                                i = this.b,
                                n = this.c,
                                r = this.d;
                            return this.a = t.a * e + t.b * n, this.b = t.a * i + t.b * r, this.c = t.c * e + t.d * n, this.d = t.c * i + t.d * r, this.tx = t.tx * e + t.ty * n + this.tx, this.ty = t.tx * i + t.ty * r + this.ty, this
                        }, n.prototype.setTransform = function (t, e, i, n, r, o, s, a, h) {
                            var l, c, u, p, d, f, m, g, v, y;
                            return d = Math.sin(s), f = Math.cos(s), m = Math.cos(h), g = Math.sin(h), v = -Math.sin(a), y = Math.cos(a), l = f * r, c = d * r, u = -d * o, p = f * o, this.a = m * l + g * u, this.b = m * c + g * p, this.c = v * l + y * u, this.d = v * c + y * p, this.tx = t + (i * l + n * u), this.ty = e + (i * c + n * p), this
                        }, n.prototype.prepend = function (t) {
                            var e = this.tx;
                            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                                var i = this.a,
                                    n = this.c;
                                this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = n * t.a + this.d * t.c, this.d = n * t.b + this.d * t.d
                            }
                            return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                        }, n.prototype.decompose = function (t) {
                            var e = this.a,
                                i = this.b,
                                n = this.c,
                                r = this.d,
                                o = Math.atan2(-n, r),
                                s = Math.atan2(i, e),
                                a = Math.abs(1 - o / s);
                            return a < 1e-5 ? (t.rotation = s, e < 0 && r >= 0 && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(n * n + r * r), t.position.x = this.tx, t.position.y = this.ty, t
                        }, n.prototype.invert = function () {
                            var t = this.a,
                                e = this.b,
                                i = this.c,
                                n = this.d,
                                r = this.tx,
                                o = t * n - e * i;
                            return this.a = n / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - n * r) / o, this.ty = -(t * this.ty - e * r) / o, this
                        }, n.prototype.identity = function () {
                            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                        }, n.prototype.clone = function () {
                            var t = new n;
                            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                        }, n.prototype.copy = function (t) {
                            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                        }, n.IDENTITY = new n, n.TEMP_MATRIX = new n
                    }, {
                        "./Point": 101
                    }
                ],
                100: [
                    function (t, e, i) {
                        function n(t, e, i, n) {
                            this._x = i || 0, this._y = n || 0, this.cb = t, this.scope = e
                        }
                        n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            x: {
                                get: function () {
                                    return this._x
                                },
                                set: function (t) {
                                    this._x !== t && (this._x = t, this.cb.call(this.scope))
                                }
                            },
                            y: {
                                get: function () {
                                    return this._y
                                },
                                set: function (t) {
                                    this._y !== t && (this._y = t, this.cb.call(this.scope))
                                }
                            }
                        }), n.prototype.set = function (t, e) {
                            var i = t || 0,
                                n = e || (0 !== e ? i : 0);
                            this._x === i && this._y === n || (this._x = i, this._y = n, this.cb.call(this.scope))
                        }, n.prototype.copy = function (t) {
                            this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
                        }
                    }, {}
                ],
                101: [
                    function (t, e, i) {
                        function n(t, e) {
                            this.x = t || 0, this.y = e || 0
                        }
                        n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            return new n(this.x, this.y)
                        }, n.prototype.copy = function (t) {
                            this.set(t.x, t.y)
                        }, n.prototype.equals = function (t) {
                            return t.x === this.x && t.y === this.y
                        }, n.prototype.set = function (t, e) {
                            this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
                        }
                    }, {}
                ],
                102: [
                    function (t, e, i) {
                        e.exports = {
                            Point: t("./Point"),
                            ObservablePoint: t("./ObservablePoint"),
                            Matrix: t("./Matrix"),
                            GroupD8: t("./GroupD8"),
                            Circle: t("./shapes/Circle"),
                            Ellipse: t("./shapes/Ellipse"),
                            Polygon: t("./shapes/Polygon"),
                            Rectangle: t("./shapes/Rectangle"),
                            RoundedRectangle: t("./shapes/RoundedRectangle")
                        }
                    }, {
                        "./GroupD8": 98,
                        "./Matrix": 99,
                        "./ObservablePoint": 100,
                        "./Point": 101,
                        "./shapes/Circle": 103,
                        "./shapes/Ellipse": 104,
                        "./shapes/Polygon": 105,
                        "./shapes/Rectangle": 106,
                        "./shapes/RoundedRectangle": 107
                    }
                ],
                103: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            this.x = t || 0, this.y = e || 0, this.radius = i || 0, this.type = o.SHAPES.CIRC
                        }
                        var r = t("./Rectangle"),
                            o = t("../../const");
                        n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            return new n(this.x, this.y, this.radius)
                        }, n.prototype.contains = function (t, e) {
                            if (this.radius <= 0) return !1;
                            var i = this.x - t,
                                n = this.y - e,
                                r = this.radius * this.radius;
                            return i *= i, n *= n, i + n <= r
                        }, n.prototype.getBounds = function () {
                            return new r(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                        }
                    }, {
                        "../../const": 78,
                        "./Rectangle": 106
                    }
                ],
                104: [
                    function (t, e, i) {
                        function n(t, e, i, n) {
                            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0, this.type = o.SHAPES.ELIP
                        }
                        var r = t("./Rectangle"),
                            o = t("../../const");
                        n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            return new n(this.x, this.y, this.width, this.height)
                        }, n.prototype.contains = function (t, e) {
                            if (this.width <= 0 || this.height <= 0) return !1;
                            var i = (t - this.x) / this.width,
                                n = (e - this.y) / this.height;
                            return i *= i, n *= n, i + n <= 1
                        }, n.prototype.getBounds = function () {
                            return new r(this.x - this.width, this.y - this.height, this.width, this.height)
                        }
                    }, {
                        "../../const": 78,
                        "./Rectangle": 106
                    }
                ],
                105: [
                    function (t, e, i) {
                        function n(t) {
                            var e = t;
                            if (!Array.isArray(e)) {
                                e = new Array(arguments.length);
                                for (var i = 0; i < e.length; ++i) e[i] = arguments[i]
                            }
                            if (e[0] instanceof r) {
                                for (var n = [], s = 0, a = e.length; s < a; s++) n.push(e[s].x, e[s].y);
                                e = n
                            }
                            this.closed = !0, this.points = e, this.type = o.SHAPES.POLY
                        }
                        var r = t("../Point"),
                            o = t("../../const");
                        n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            return new n(this.points.slice())
                        }, n.prototype.close = function () {
                            var t = this.points;
                            t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
                        }, n.prototype.contains = function (t, e) {
                            for (var i = !1, n = this.points.length / 2, r = 0, o = n - 1; r < n; o = r++) {
                                var s = this.points[2 * r],
                                    a = this.points[2 * r + 1],
                                    h = this.points[2 * o],
                                    l = this.points[2 * o + 1],
                                    c = a > e != l > e && t < (h - s) * (e - a) / (l - a) + s;
                                c && (i = !i)
                            }
                            return i
                        }
                    }, {
                        "../../const": 78,
                        "../Point": 101
                    }
                ],
                106: [
                    function (t, e, i) {
                        function n(t, e, i, n) {
                            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0, this.type = r.SHAPES.RECT
                        }
                        var r = t("../../const");
                        n.prototype.constructor = n, e.exports = n, n.EMPTY = new n(0, 0, 0, 0), n.prototype.clone = function () {
                            return new n(this.x, this.y, this.width, this.height)
                        }, n.prototype.copy = function (t) {
                            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                        }, n.prototype.contains = function (t, e) {
                            return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
                        }, n.prototype.pad = function (t, e) {
                            t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
                        }, n.prototype.fit = function (t) {
                            this.x < t.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t.x), this.y < t.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t.y), this.x + this.width > t.x + t.width && (this.width = t.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > t.y + t.height && (this.height = t.height - this.y, this.height < 0 && (this.height = 0))
                        }, n.prototype.enlarge = function (t) {
                            if (t !== n.EMPTY) {
                                var e = Math.min(this.x, t.x),
                                    i = Math.max(this.x + this.width, t.x + t.width),
                                    r = Math.min(this.y, t.y),
                                    o = Math.max(this.y + this.height, t.y + t.height);
                                this.x = e, this.width = i - e, this.y = r, this.height = o - r
                            }
                        }
                    }, {
                        "../../const": 78
                    }
                ],
                107: [
                    function (t, e, i) {
                        function n(t, e, i, n, o) {
                            this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0, this.radius = o || 20, this.type = r.SHAPES.RREC
                        }
                        var r = t("../../const");
                        n.prototype.constructor = n, e.exports = n, n.prototype.clone = function () {
                            return new n(this.x, this.y, this.width, this.height, this.radius)
                        }, n.prototype.contains = function (t, e) {
                            return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height);
                        }
                    }, {
                        "../../const": 78
                    }
                ],
                108: [
                    function (t, e, i) {
                        function n(t, e, i, n) {
                            if (l.call(this), r.sayHello(t), n)
                                for (var o in s.DEFAULT_RENDER_OPTIONS) "undefined" == typeof n[o] && (n[o] = s.DEFAULT_RENDER_OPTIONS[o]);
                            else n = s.DEFAULT_RENDER_OPTIONS;
                            this.type = s.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = i || 600, this.view = n.view || document.createElement("canvas"), this.resolution = n.resolution, this.transparent = n.transparent, this.autoResize = n.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = n.preserveDrawingBuffer, this.clearBeforeRender = n.clearBeforeRender, this.roundPixels = n.roundPixels, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = n.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new a, this._lastObjectRendered = this._tempDisplayObjectParent
                        }
                        var r = t("../utils"),
                            o = t("../math"),
                            s = t("../const"),
                            a = t("../display/Container"),
                            h = t("../textures/RenderTexture"),
                            l = t("eventemitter3"),
                            c = new o.Matrix;
                        n.prototype = Object.create(l.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            backgroundColor: {
                                get: function () {
                                    return this._backgroundColor
                                },
                                set: function (t) {
                                    this._backgroundColor = t, this._backgroundColorString = r.hex2string(t), r.hex2rgb(t, this._backgroundColorRgba)
                                }
                            }
                        }), n.prototype.resize = function (t, e) {
                            this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
                        }, n.prototype.generateTexture = function (t, e, i) {
                            var n = t.getLocalBounds(),
                                r = h.create(0 | n.width, 0 | n.height, e, i);
                            return c.tx = -n.x, c.ty = -n.y, this.render(t, r, !1, c, !0), r
                        }, n.prototype.destroy = function (t) {
                            t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = s.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this.backgroundColor = 0, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
                        }
                    }, {
                        "../const": 78,
                        "../display/Container": 80,
                        "../math": 102,
                        "../textures/RenderTexture": 143,
                        "../utils": 151,
                        eventemitter3: 16
                    }
                ],
                109: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            i = i || {}, r.call(this, "Canvas", t, e, i), this.type = l.RENDERER_TYPE.CANVAS, this.rootContext = this.view.getContext("2d", {
                                alpha: this.transparent
                            }), this.rootResolution = this.resolution, this.refresh = !0, this.maskManager = new o(this), this.smoothProperty = "imageSmoothingEnabled", this.rootContext.imageSmoothingEnabled || (this.rootContext.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.rootContext.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.rootContext.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.rootContext.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this.blendModes = a(), this._activeBlendMode = null, this.context = null, this.renderingToScreen = !1, this.resize(t, e)
                        }
                        var r = t("../SystemRenderer"),
                            o = t("./utils/CanvasMaskManager"),
                            s = t("./utils/CanvasRenderTarget"),
                            a = t("./utils/mapCanvasBlendModesToPixi"),
                            h = t("../../utils"),
                            l = t("../../const");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, h.pluginTarget.mixin(n), n.prototype.render = function (t, e, i, n, r) {
                            if (this.view) {
                                this.renderingToScreen = !e, this.emit("prerender"), e ? (e = e.baseTexture || e, e._canvasRenderTarget || (e._canvasRenderTarget = new s(e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : (this.context = this.rootContext, this.resolution = this.rootResolution);
                                var o = this.context;
                                if (e || (this._lastObjectRendered = t), !r) {
                                    var a = t.parent,
                                        h = this._tempDisplayObjectParent.transform.worldTransform;
                                    n ? n.copy(h) : h.identity(), t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = a
                                }
                                o.setTransform(1, 0, 0, 1, 0, 0), o.globalAlpha = 1, o.globalCompositeOperation = this.blendModes[l.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (o.fillStyle = "black", o.clear()), (void 0 !== i ? i : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? o.clearRect(0, 0, this.width, this.height) : (o.fillStyle = this._backgroundColorString, o.fillRect(0, 0, this.width, this.height)));
                                var c = this.context;
                                this.context = o, t.renderCanvas(this), this.context = c, this.emit("postrender")
                            }
                        }, n.prototype.setBlendMode = function (t) {
                            this._activeBlendMode !== t && (this.context.globalCompositeOperation = this.blendModes[t])
                        }, n.prototype.destroy = function (t) {
                            this.destroyPlugins(), r.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
                        }, n.prototype.resize = function (t, e) {
                            r.prototype.resize.call(this, t, e), this.smoothProperty && (this.rootContext[this.smoothProperty] = l.SCALE_MODES.DEFAULT === l.SCALE_MODES.LINEAR)
                        }
                    }, {
                        "../../const": 78,
                        "../../utils": 151,
                        "../SystemRenderer": 108,
                        "./utils/CanvasMaskManager": 110,
                        "./utils/CanvasRenderTarget": 111,
                        "./utils/mapCanvasBlendModesToPixi": 113
                    }
                ],
                110: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t
                        }
                        var r = t("../../../const");
                        n.prototype.constructor = n, e.exports = n, n.prototype.pushMask = function (t) {
                            var e = this.renderer;
                            e.context.save();
                            var i = t.alpha,
                                n = t.transform.worldTransform,
                                r = e.resolution;
                            e.context.setTransform(n.a * r, n.b * r, n.c * r, n.d * r, n.tx * r, n.ty * r), t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = i
                        }, n.prototype.renderGraphicsShape = function (t) {
                            var e = this.renderer.context,
                                i = t.graphicsData.length;
                            if (0 !== i) {
                                e.beginPath();
                                for (var n = 0; n < i; n++) {
                                    var o = t.graphicsData[n],
                                        s = o.shape;
                                    if (o.type === r.SHAPES.POLY) {
                                        var a = s.points;
                                        e.moveTo(a[0], a[1]);
                                        for (var h = 1; h < a.length / 2; h++) e.lineTo(a[2 * h], a[2 * h + 1]);
                                        a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
                                    } else if (o.type === r.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
                                    else if (o.type === r.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
                                    else if (o.type === r.SHAPES.ELIP) {
                                        var l = 2 * s.width,
                                            c = 2 * s.height,
                                            u = s.x - l / 2,
                                            p = s.y - c / 2,
                                            d = .5522848,
                                            f = l / 2 * d,
                                            m = c / 2 * d,
                                            g = u + l,
                                            v = p + c,
                                            y = u + l / 2,
                                            _ = p + c / 2;
                                        e.moveTo(u, _), e.bezierCurveTo(u, _ - m, y - f, p, y, p), e.bezierCurveTo(y + f, p, g, _ - m, g, _), e.bezierCurveTo(g, _ + m, y + f, v, y, v), e.bezierCurveTo(y - f, v, u, _ + m, u, _), e.closePath()
                                    } else if (o.type === r.SHAPES.RREC) {
                                        var x = s.x,
                                            b = s.y,
                                            w = s.width,
                                            S = s.height,
                                            T = s.radius,
                                            M = Math.min(w, S) / 2 | 0;
                                        T = T > M ? M : T, e.moveTo(x, b + T), e.lineTo(x, b + S - T), e.quadraticCurveTo(x, b + S, x + T, b + S), e.lineTo(x + w - T, b + S), e.quadraticCurveTo(x + w, b + S, x + w, b + S - T), e.lineTo(x + w, b + T), e.quadraticCurveTo(x + w, b, x + w - T, b), e.lineTo(x + T, b), e.quadraticCurveTo(x, b, x, b + T), e.closePath()
                                    }
                                }
                            }
                        }, n.prototype.popMask = function (t) {
                            t.context.restore()
                        }, n.prototype.destroy = function () { }
                    }, {
                        "../../../const": 78
                    }
                ],
                111: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || r.RESOLUTION, this.resize(t, e)
                        }
                        var r = t("../../../const");
                        n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            width: {
                                get: function () {
                                    return this.canvas.width
                                },
                                set: function (t) {
                                    this.canvas.width = t
                                }
                            },
                            height: {
                                get: function () {
                                    return this.canvas.height
                                },
                                set: function (t) {
                                    this.canvas.height = t
                                }
                            }
                        }), n.prototype.clear = function () {
                            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        }, n.prototype.resize = function (t, e) {
                            this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
                        }, n.prototype.destroy = function () {
                            this.context = null, this.canvas = null
                        }
                    }, {
                        "../../../const": 78
                    }
                ],
                112: [
                    function (t, e, i) {
                        var n = function (t) {
                            var e = document.createElement("canvas");
                            e.width = 6, e.height = 1;
                            var i = e.getContext("2d");
                            return i.fillStyle = t, i.fillRect(0, 0, 6, 1), e
                        },
                            r = function () {
                                if ("undefined" == typeof document) return !1;
                                var t = n("#ff00ff"),
                                    e = n("#ffff00"),
                                    i = document.createElement("canvas");
                                i.width = 6, i.height = 1;
                                var r = i.getContext("2d");
                                r.globalCompositeOperation = "multiply", r.drawImage(t, 0, 0), r.drawImage(e, 2, 0);
                                var o = r.getImageData(2, 0, 1, 1);
                                if (!o) return !1;
                                var s = o.data;
                                return 255 === s[0] && 0 === s[1] && 0 === s[2]
                            };
                        e.exports = r
                    }, {}
                ],
                113: [
                    function (t, e, i) {
                        function n(t) {
                            return t = t || [], o() ? (t[r.BLEND_MODES.NORMAL] = "source-over", t[r.BLEND_MODES.ADD] = "lighter", t[r.BLEND_MODES.MULTIPLY] = "multiply", t[r.BLEND_MODES.SCREEN] = "screen", t[r.BLEND_MODES.OVERLAY] = "overlay", t[r.BLEND_MODES.DARKEN] = "darken", t[r.BLEND_MODES.LIGHTEN] = "lighten", t[r.BLEND_MODES.COLOR_DODGE] = "color-dodge", t[r.BLEND_MODES.COLOR_BURN] = "color-burn", t[r.BLEND_MODES.HARD_LIGHT] = "hard-light", t[r.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[r.BLEND_MODES.DIFFERENCE] = "difference", t[r.BLEND_MODES.EXCLUSION] = "exclusion", t[r.BLEND_MODES.HUE] = "hue", t[r.BLEND_MODES.SATURATION] = "saturate", t[r.BLEND_MODES.COLOR] = "color", t[r.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[r.BLEND_MODES.NORMAL] = "source-over", t[r.BLEND_MODES.ADD] = "lighter", t[r.BLEND_MODES.MULTIPLY] = "source-over", t[r.BLEND_MODES.SCREEN] = "source-over", t[r.BLEND_MODES.OVERLAY] = "source-over", t[r.BLEND_MODES.DARKEN] = "source-over", t[r.BLEND_MODES.LIGHTEN] = "source-over", t[r.BLEND_MODES.COLOR_DODGE] = "source-over", t[r.BLEND_MODES.COLOR_BURN] = "source-over", t[r.BLEND_MODES.HARD_LIGHT] = "source-over", t[r.BLEND_MODES.SOFT_LIGHT] = "source-over", t[r.BLEND_MODES.DIFFERENCE] = "source-over", t[r.BLEND_MODES.EXCLUSION] = "source-over", t[r.BLEND_MODES.HUE] = "source-over", t[r.BLEND_MODES.SATURATION] = "source-over", t[r.BLEND_MODES.COLOR] = "source-over", t[r.BLEND_MODES.LUMINOSITY] = "source-over"), t
                        }
                        var r = t("../../../const"),
                            o = t("./canUseNewCanvasBlendModes");
                        e.exports = n
                    }, {
                        "../../../const": 78,
                        "./canUseNewCanvasBlendModes": 112
                    }
                ],
                114: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = 3600, this.checkCountMax = 600, this.mode = r.GC_MODES.DEFAULT
                        }
                        var r = t("../../const");
                        n.prototype.constructor = n, e.exports = n, n.prototype.update = function () {
                            this.count++, this.mode !== r.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
                        }, n.prototype.run = function () {
                            var t, e, i = this.renderer.textureManager,
                                n = i._managedTextures,
                                r = !1;
                            for (t = 0; t < n.length; t++) {
                                var o = n[t];
                                !o._glRenderTargets && this.count - o.touched > this.maxIdle && (i.destroyTexture(o, !0), n[t] = null, r = !0)
                            }
                            if (r) {
                                for (e = 0, t = 0; t < n.length; t++) null !== n[t] && (n[e++] = n[t]);
                                n.length = e
                            }
                        }, n.prototype.unload = function (t) {
                            var e = this.renderer.textureManager;
                            t._texture && e.destroyTexture(t._texture, !0);
                            for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i])
                        }
                    }, {
                        "../../const": 78
                    }
                ],
                115: [
                    function (t, e, i) {
                        var n = t("pixi-gl-core").GLTexture,
                            r = t("../../const"),
                            o = t("./utils/RenderTarget"),
                            s = t("../../utils"),
                            a = function (t) {
                                this.renderer = t, this.gl = t.gl, this._managedTextures = []
                            };
                        a.prototype.bindTexture = function () { }, a.prototype.getTexture = function () { }, a.prototype.updateTexture = function (t) {
                            t = t.baseTexture || t;
                            var e = !!t._glRenderTargets;
                            if (t.hasLoaded) {
                                var i = t._glTextures[this.renderer.CONTEXT_UID];
                                if (i) e ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : i.upload(t.source);
                                else {
                                    if (e) {
                                        var s = new o(this.gl, t.width, t.height, t.scaleMode, t.resolution);
                                        s.resize(t.width, t.height), t._glRenderTargets[this.renderer.CONTEXT_UID] = s, i = s.texture
                                    } else i = new n(this.gl), i.premultiplyAlpha = !0, i.upload(t.source);
                                    t._glTextures[this.renderer.CONTEXT_UID] = i, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && i.enableMipmap(), t.wrapMode === r.WRAP_MODES.CLAMP ? i.enableWrapClamp() : t.wrapMode === r.WRAP_MODES.REPEAT ? i.enableWrapRepeat() : i.enableWrapMirrorRepeat()) : i.enableWrapClamp(), t.scaleMode === r.SCALE_MODES.NEAREST ? i.enableNearestScaling() : i.enableLinearScaling()
                                }
                                return i
                            }
                        }, a.prototype.destroyTexture = function (t, e) {
                            if (t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.renderer.CONTEXT_UID] && (t._glTextures[this.renderer.CONTEXT_UID].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.renderer.CONTEXT_UID], !e)) {
                                var i = this._managedTextures.indexOf(t);
                                i !== -1 && s.removeItems(this._managedTextures, i, 1)
                            }
                        }, a.prototype.removeAll = function () {
                            for (var t = 0; t < this._managedTextures.length; ++t) {
                                var e = this._managedTextures[t];
                                e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
                            }
                        }, a.prototype.destroy = function () {
                            for (var t = 0; t < this._managedTextures.length; ++t) {
                                var e = this._managedTextures[t];
                                this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
                            }
                            this._managedTextures = null
                        }, e.exports = a
                    }, {
                        "../../const": 78,
                        "../../utils": 151,
                        "./utils/RenderTarget": 128,
                        "pixi-gl-core": 51
                    }
                ],
                116: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            i = i || {}, r.call(this, "WebGL", t, e, i), this.type = y.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._contextOptions = {
                                alpha: this.transparent,
                                antialias: i.antialias,
                                premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                                stencil: !0,
                                preserveDrawingBuffer: i.preserveDrawingBuffer
                            }, this._backgroundColorRgba[3] = this.transparent ? 0 : 1, this.maskManager = new o(this), this.stencilManager = new s(this), this.emptyRenderer = new l(this), this.currentRenderer = this.emptyRenderer, this.initPlugins(), i.context && m(i.context), this.gl = i.context || d(this.view, this._contextOptions), this.CONTEXT_UID = _++, this.state = new p(this.gl), this.renderingToScreen = !0, this._initContext(), this.filterManager = new a(this), this.drawModes = f(this.gl), this._activeShader = null, this._activeRenderTarget = null, this._activeTextureLocation = 999, this._activeTexture = null, this.setBlendMode(0)
                        }
                        var r = t("../SystemRenderer"),
                            o = t("./managers/MaskManager"),
                            s = t("./managers/StencilManager"),
                            a = t("./managers/FilterManager"),
                            h = t("./utils/RenderTarget"),
                            l = t("./utils/ObjectRenderer"),
                            c = t("./TextureManager"),
                            u = t("./TextureGarbageCollector"),
                            p = t("./WebGLState"),
                            d = t("pixi-gl-core").createContext,
                            f = t("./utils/mapWebGLDrawModesToPixi"),
                            m = t("./utils/validateContext"),
                            g = t("../../utils"),
                            v = t("pixi-gl-core"),
                            y = t("../../const"),
                            _ = 0;
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, g.pluginTarget.mixin(n), n.prototype._initContext = function () {
                            var t = this.gl;
                            this.textureManager = new c(this), this.textureGC = new u(this), this.state.resetToDefault(), this.rootRenderTarget = new h(t, this.width, this.height, null, this.resolution, (!0)), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget), this.emit("context", t), this.resize(this.width, this.height)
                        }, n.prototype.render = function (t, e, i, n, r) {
                            if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                                if (e || (this._lastObjectRendered = t), !r) {
                                    var o = t.parent;
                                    t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
                                }
                                this.bindRenderTexture(e, n), this.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
                            }
                        }, n.prototype.setObjectRenderer = function (t) {
                            this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
                        }, n.prototype.flush = function () {
                            this.setObjectRenderer(this.emptyRenderer)
                        }, n.prototype.resize = function (t, e) {
                            r.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
                        }, n.prototype.setBlendMode = function (t) {
                            this.state.setBlendMode(t)
                        }, n.prototype.clear = function (t) {
                            this._activeRenderTarget.clear(t)
                        }, n.prototype.setTransform = function (t) {
                            this._activeRenderTarget.transform = t
                        }, n.prototype.bindRenderTexture = function (t, e) {
                            var i;
                            if (t) {
                                var n = t.baseTexture,
                                    r = this.gl;
                                n._glRenderTargets[this.CONTEXT_UID] ? (this._activeTextureLocation = n._id, r.activeTexture(r.TEXTURE0 + n._id), r.bindTexture(r.TEXTURE_2D, null)) : (this.textureManager.updateTexture(n), r.bindTexture(r.TEXTURE_2D, null)), i = n._glRenderTargets[this.CONTEXT_UID], i.setFrame(t.frame)
                            } else i = this.rootRenderTarget;
                            return i.transform = e, this.bindRenderTarget(i), this
                        }, n.prototype.bindRenderTarget = function (t) {
                            return t !== this._activeRenderTarget && (this._activeRenderTarget = t, t.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
                        }, n.prototype.bindShader = function (t) {
                            return this._activeShader !== t && (this._activeShader = t, t.bind(), t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0)), this
                        }, n.prototype.bindTexture = function (t, e) {
                            t = t.baseTexture || t;
                            var i = this.gl;
                            return e = e || 0, this._activeTextureLocation !== e && (this._activeTextureLocation = e, i.activeTexture(i.TEXTURE0 + e)), this._activeTexture = t, t._glTextures[this.CONTEXT_UID] ? (t.touched = this.textureGC.count, t._glTextures[this.CONTEXT_UID].bind()) : this.textureManager.updateTexture(t), this
                        }, n.prototype.createVao = function () {
                            return new v.VertexArrayObject(this.gl, this.state.attribState)
                        }, n.prototype.reset = function () {
                            return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this._activeTextureLocation = 999, this._activeTexture = null, this.rootRenderTarget.activate(), this.state.resetToDefault(), this
                        }, n.prototype.handleContextLost = function (t) {
                            t.preventDefault()
                        }, n.prototype.handleContextRestored = function () {
                            this._initContext(), this.textureManager.removeAll()
                        }, n.prototype.destroy = function (t) {
                            this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), r.prototype.destroy.call(this, t), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
                        }
                    }, {
                        "../../const": 78,
                        "../../utils": 151,
                        "../SystemRenderer": 108,
                        "./TextureGarbageCollector": 114,
                        "./TextureManager": 115,
                        "./WebGLState": 117,
                        "./managers/FilterManager": 122,
                        "./managers/MaskManager": 123,
                        "./managers/StencilManager": 124,
                        "./utils/ObjectRenderer": 126,
                        "./utils/RenderTarget": 128,
                        "./utils/mapWebGLDrawModesToPixi": 131,
                        "./utils/validateContext": 132,
                        "pixi-gl-core": 51
                    }
                ],
                117: [
                    function (t, e, i) {
                        function n(t) {
                            this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = t, this.maxAttribs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = {
                                tempAttribState: new Array(this.maxAttribs),
                                attribState: new Array(this.maxAttribs)
                            }, this.blendModes = r(t), this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")
                        }
                        var r = t("./utils/mapWebGLBlendModesToPixi");
                        n.prototype.push = function () {
                            var t = this.stack[++this.stackIndex];
                            t || (t = this.stack[this.stackIndex] = new Uint8Array(16));
                            for (var e = 0; e < this.activeState.length; e++) this.activeState[e] = t[e]
                        };
                        var o = 0,
                            s = 1,
                            a = 2,
                            h = 3,
                            l = 4;
                        n.prototype.pop = function () {
                            var t = this.stack[--this.stackIndex];
                            this.setState(t)
                        }, n.prototype.setState = function (t) {
                            this.setBlend(t[o]), this.setDepthTest(t[s]), this.setFrontFace(t[a]), this.setCullFace(t[h]), this.setBlendMode(t[l])
                        }, n.prototype.setBlend = function (t) {
                            if (!(this.activeState[o] === t | 0)) {
                                this.activeState[o] = 0 | t;
                                var e = this.gl;
                                t ? e.enable(e.BLEND) : e.disable(e.BLEND)
                            }
                        }, n.prototype.setBlendMode = function (t) {
                            t !== this.activeState[l] && (this.activeState[l] = t, this.gl.blendFunc(this.blendModes[t][0], this.blendModes[t][1]))
                        }, n.prototype.setDepthTest = function (t) {
                            if (!(this.activeState[s] === t | 0)) {
                                this.activeState[s] = 0 | t;
                                var e = this.gl;
                                t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST)
                            }
                        }, n.prototype.setCullFace = function (t) {
                            if (!(this.activeState[h] === t | 0)) {
                                this.activeState[h] = 0 | t;
                                var e = this.gl;
                                t ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE)
                            }
                        }, n.prototype.setFrontFace = function (t) {
                            if (!(this.activeState[a] === t | 0)) {
                                this.activeState[a] = 0 | t;
                                var e = this.gl;
                                t ? e.frontFace(e.CW) : e.frontFace(e.CCW)
                            }
                        }, n.prototype.resetAttributes = function () {
                            var t;
                            for (t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
                            for (t = 0; t < this.attribState.attribState.length; t++) this.attribState.attribState[t] = 0;
                            var e = this.gl;
                            for (t = 1; t < this.maxAttribs; t++) e.disableVertexAttribArray(t)
                        }, n.prototype.resetToDefault = function () {
                            this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                            for (var t = 0; t < this.activeState.length; t++) this.activeState[t] = 32;
                            var e = this.gl;
                            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
                        }, e.exports = n
                    }, {
                        "./utils/mapWebGLBlendModesToPixi": 130
                    }
                ],
                118: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            this.vertexSrc = t || n.defaultVertexSrc, this.fragmentSrc = e || n.defaultFragmentSrc, this.blendMode = s.BLEND_MODES.NORMAL, this.uniformData = i || r(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
                            for (var h in this.uniformData) this.uniforms[h] = this.uniformData[h].value;
                            this.glShaders = [], a[this.vertexSrc + this.fragmentSrc] || (a[this.vertexSrc + this.fragmentSrc] = o.uid()), this.glShaderKey = a[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = 1, this.enabled = !0
                        }
                        var r = t("./extractUniformsFromSrc"),
                            o = t("../../../utils"),
                            s = t("../../../const"),
                            a = {};
                        e.exports = n, n.prototype.apply = function (t, e, i, n) {
                            t.applyFilter(this, e, i, n)
                        }, n.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n"), n.defaultFragmentSrc = ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
                    }, {
                        "../../../const": 78,
                        "../../../utils": 151,
                        "./extractUniformsFromSrc": 119
                    }
                ],
                119: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            var n = r(t, i),
                                o = r(e, i);
                            return Object.assign(n, o)
                        }

                        function r(t) {
                            for (var e, i = new RegExp("^(projectionMatrix|uSampler|filterArea)$"), n = {}, r = t.replace(/\s+/g, " ").split(/\s*;\s*/), s = 0; s < r.length; s++) {
                                var a = r[s].trim();
                                if (a.indexOf("uniform") > -1) {
                                    var h = a.split(" "),
                                        l = h[1],
                                        c = h[2],
                                        u = 1;
                                    c.indexOf("[") > -1 && (e = c.split(/\[|\]/), c = e[0], u *= Number(e[1])), c.match(i) || (n[c] = {
                                        value: o(l, u),
                                        name: c,
                                        type: l
                                    })
                                }
                            }
                            return n
                        }
                        var o = t("pixi-gl-core").shader.defaultValue;
                        e.exports = n
                    }, {
                        "pixi-gl-core": 51
                    }
                ],
                120: [
                    function (t, e, i) {
                        var n = t("../../../math"),
                            r = function (t, e, i) {
                                var n = t.identity();
                                return n.translate(e.x / i.width, e.y / i.height), n.scale(i.width, i.height), n
                            },
                            o = function (t, e, i) {
                                var n = t.identity();
                                n.translate(e.x / i.width, e.y / i.height);
                                var r = i.width / e.width,
                                    o = i.height / e.height;
                                return n.scale(r, o), n
                            },
                            s = function (t, e, i, r) {
                                var o = r.worldTransform.copy(n.Matrix.TEMP_MATRIX),
                                    s = r._texture.baseTexture,
                                    a = t.identity(),
                                    h = i.height / i.width;
                                a.translate(e.x / i.width, e.y / i.height), a.scale(1, h);
                                var l = i.width / s.width,
                                    c = i.height / s.height;
                                return o.tx /= s.width * l, o.ty /= s.width * l, o.invert(), a.prepend(o), a.scale(1, 1 / h), a.scale(l, c), a.translate(r.anchor.x, r.anchor.y), a
                            };
                        e.exports = {
                            calculateScreenSpaceMatrix: r,
                            calculateNormalizedScreenSpaceMatrix: o,
                            calculateSpriteMatrix: s
                        }
                    }, {
                        "../../../math": 102
                    }
                ],
                121: [
                    function (t, e, i) {
                        function n(t) {
                            var e = new o.Matrix;
                            r.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n"), t.renderable = !1, this.maskSprite = t, this.maskMatrix = e
                        }
                        var r = t("../Filter"),
                            o = t("../../../../math");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.apply = function (t, e, i) {
                            var n = this.maskSprite;
                            this.uniforms.mask = n._texture, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n), this.uniforms.alpha = n.worldAlpha, t.applyFilter(this, e, i)
                        }
                    }, {
                        "../../../../math": 102,
                        "../Filter": 118
                    }
                ],
                122: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t), this.gl = this.renderer.gl, this.quad = new s(this.gl, t.state.attribState), this.shaderCache = {}, this.pool = {}, this.filterData = null
                        }
                        var r = t("./WebGLManager"),
                            o = t("../utils/RenderTarget"),
                            s = t("../utils/Quad"),
                            a = t("../../../math"),
                            h = t("../../../Shader"),
                            l = t("../filters/filterTransforms"),
                            c = t("bit-twiddle"),
                            u = function () {
                                this.renderTarget = null, this.sourceFrame = new a.Rectangle, this.destinationFrame = new a.Rectangle, this.filters = [], this.target = null, this.resolution = 1
                            };
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.pushFilter = function (t, e) {
                            var i = this.renderer,
                                n = this.filterData;
                            if (!n) {
                                n = this.renderer._activeRenderTarget.filterStack;
                                var r = new u;
                                r.sourceFrame = r.destinationFrame = this.renderer._activeRenderTarget.size, r.renderTarget = i._activeRenderTarget, this.renderer._activeRenderTarget.filterData = n = {
                                    index: 0,
                                    stack: [r]
                                }, this.filterData = n
                            }
                            var o = n.stack[++n.index];
                            o || (o = n.stack[n.index] = new u);
                            var s = e[0].resolution,
                                a = e[0].padding,
                                h = t.filterArea || t.getBounds(!0),
                                l = o.sourceFrame,
                                c = o.destinationFrame;
                            l.x = (h.x * s | 0) / s, l.y = (h.y * s | 0) / s, l.width = (h.width * s | 0) / s, l.height = (h.height * s | 0) / s, n.stack[0].renderTarget.transform || l.fit(n.stack[0].destinationFrame), c.width = l.width, c.height = l.height, l.pad(a);
                            var p = this.getPotRenderTarget(i.gl, l.width, l.height, s);
                            o.target = t, o.filters = e, o.resolution = s, o.renderTarget = p, p.setFrame(c, l), i.bindRenderTarget(p), i.clear()
                        }, n.prototype.popFilter = function () {
                            var t = this.filterData,
                                e = t.stack[t.index - 1],
                                i = t.stack[t.index];
                            this.quad.map(i.renderTarget.size, i.sourceFrame).upload();
                            var n = i.filters;
                            if (1 === n.length) n[0].apply(this, i.renderTarget, e.renderTarget, !1), this.freePotRenderTarget(i.renderTarget);
                            else {
                                var r = i.renderTarget,
                                    o = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, 1);
                                o.setFrame(i.destinationFrame, i.sourceFrame);
                                for (var s = 0; s < n.length - 1; s++) {
                                    n[s].apply(this, r, o, !0);
                                    var a = r;
                                    r = o, o = a
                                }
                                n[s].apply(this, r, e.renderTarget, !1), this.freePotRenderTarget(r), this.freePotRenderTarget(o)
                            }
                            t.index--, 0 === t.index && (this.filterData = null)
                        }, n.prototype.applyFilter = function (t, e, i, n) {
                            var r = this.renderer,
                                o = t.glShaders[r.CONTEXT_UID];
                            if (o || (t.glShaderKey ? (o = this.shaderCache[t.glShaderKey], o || (o = t.glShaders[r.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = new h(this.gl, t.vertexSrc, t.fragmentSrc))) : o = t.glShaders[r.CONTEXT_UID] = new h(this.gl, t.vertexSrc, t.fragmentSrc), this.quad.initVao(o)), r.bindRenderTarget(i), n) {
                                var s = r.gl;
                                s.disable(s.SCISSOR_TEST), r.clear(), s.enable(s.SCISSOR_TEST)
                            }
                            i === r.maskManager.scissorRenderTarget && r.maskManager.pushScissorMask(null, r.maskManager.scissorData), r.bindShader(o), this.syncUniforms(o, t), e.texture.bind(0), r._activeTextureLocation = 0, r.state.setBlendMode(t.blendMode), this.quad.draw()
                        }, n.prototype.syncUniforms = function (t, e) {
                            var i, n = e.uniformData,
                                r = e.uniforms,
                                o = 1;
                            if (t.uniforms.data.filterArea) {
                                i = this.filterData.stack[this.filterData.index];
                                var s = t.uniforms.filterArea;
                                s[0] = i.renderTarget.size.width, s[1] = i.renderTarget.size.height, s[2] = i.sourceFrame.x, s[3] = i.sourceFrame.y, t.uniforms.filterArea = s
                            }
                            if (t.uniforms.data.filterClamp) {
                                i = this.filterData.stack[this.filterData.index];
                                var a = t.uniforms.filterClamp;
                                a[0] = .5 / i.renderTarget.size.width, a[1] = .5 / i.renderTarget.size.height, a[2] = (i.sourceFrame.width - .5) / i.renderTarget.size.width, a[3] = (i.sourceFrame.height - .5) / i.renderTarget.size.height, t.uniforms.filterClamp = a
                            }
                            var h;
                            for (var l in n)
                                if ("sampler2D" === n[l].type) {
                                    if (t.uniforms[l] = o, r[l].baseTexture) this.renderer.bindTexture(r[l].baseTexture, o);
                                    else {
                                        var c = this.renderer.gl;
                                        this.renderer._activeTextureLocation = c.TEXTURE0 + o, c.activeTexture(c.TEXTURE0 + o), r[l].texture.bind()
                                    }
                                    o++
                                } else "mat3" === n[l].type ? void 0 !== r[l].a ? t.uniforms[l] = r[l].toArray(!0) : t.uniforms[l] = r[l] : "vec2" === n[l].type ? void 0 !== r[l].x ? (h = t.uniforms[l] || new Float32Array(2), h[0] = r[l].x, h[1] = r[l].y, t.uniforms[l] = h) : t.uniforms[l] = r[l] : "float" === n[l].type ? t.uniforms.data[l].value !== n[l] && (t.uniforms[l] = r[l]) : t.uniforms[l] = r[l]
                        }, n.prototype.getRenderTarget = function (t, e) {
                            var i = this.filterData.stack[this.filterData.index],
                                n = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, e || i.resolution);
                            return n.setFrame(i.destinationFrame, i.sourceFrame), n
                        }, n.prototype.returnRenderTarget = function (t) {
                            return this.freePotRenderTarget(t)
                        }, n.prototype.calculateScreenSpaceMatrix = function (t) {
                            var e = this.filterData.stack[this.filterData.index];
                            return l.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
                        }, n.prototype.calculateNormalizedScreenSpaceMatrix = function (t) {
                            var e = this.filterData.stack[this.filterData.index];
                            return l.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
                        }, n.prototype.calculateSpriteMatrix = function (t, e) {
                            var i = this.filterData.stack[this.filterData.index];
                            return l.calculateSpriteMatrix(t, i.sourceFrame, i.renderTarget.size, e)
                        }, n.prototype.destroy = function () {
                            this.shaderCache = [], this.emptyPool()
                        }, n.prototype.getPotRenderTarget = function (t, e, i, n) {
                            e = c.nextPow2(e * n), i = c.nextPow2(i * n);
                            var r = (65535 & e) << 16 | 65535 & i;
                            this.pool[r] || (this.pool[r] = []);
                            var s = this.pool[r].pop() || new o(t, e, i, null, 1);
                            return s.resolution = n, s.defaultFrame.width = s.size.width = e / n, s.defaultFrame.height = s.size.height = i / n, s
                        }, n.prototype.emptyPool = function () {
                            for (var t in this.pool) {
                                var e = this.pool[t];
                                if (e)
                                    for (var i = 0; i < e.length; i++) e[i].destroy(!0)
                            }
                            this.pool = {}
                        }, n.prototype.freePotRenderTarget = function (t) {
                            var e = t.size.width * t.resolution,
                                i = t.size.height * t.resolution,
                                n = (65535 & e) << 16 | 65535 & i;
                            this.pool[n].push(t)
                        }
                    }, {
                        "../../../Shader": 77,
                        "../../../math": 102,
                        "../filters/filterTransforms": 120,
                        "../utils/Quad": 127,
                        "../utils/RenderTarget": 128,
                        "./WebGLManager": 125,
                        "bit-twiddle": 14
                    }
                ],
                123: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t), this.scissor = !1, this.scissorData = null, this.scissorRenderTarget = null, this.enableScissor = !0, this.alphaMaskPool = [], this.alphaMaskIndex = 0
                        }
                        var r = t("./WebGLManager"),
                            o = t("../filters/spriteMask/SpriteMaskFilter");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.pushMask = function (t, e) {
                            if (e.texture) this.pushSpriteMask(t, e);
                            else if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                                var i = e.worldTransform,
                                    n = Math.atan2(i.b, i.a);
                                n = Math.round(n * (180 / Math.PI)), n % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e);
                            } else this.pushStencilMask(e)
                        }, n.prototype.popMask = function (t, e) {
                            e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
                        }, n.prototype.pushSpriteMask = function (t, e) {
                            var i = this.alphaMaskPool[this.alphaMaskIndex];
                            i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new o(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, i), this.alphaMaskIndex++
                        }, n.prototype.popSpriteMask = function () {
                            this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
                        }, n.prototype.pushStencilMask = function (t) {
                            this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
                        }, n.prototype.popStencilMask = function () {
                            this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
                        }, n.prototype.pushScissorMask = function (t, e) {
                            e.renderable = !0;
                            var i = this.renderer._activeRenderTarget,
                                n = e.getBounds();
                            n.fit(i.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                            var r = this.renderer.resolution;
                            this.renderer.gl.scissor(n.x * r, (i.root ? i.size.height - n.y - n.height : n.y) * r, n.width * r, n.height * r), this.scissorRenderTarget = i, this.scissorData = e, this.scissor = !0
                        }, n.prototype.popScissorMask = function () {
                            this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                            var t = this.renderer.gl;
                            t.disable(t.SCISSOR_TEST)
                        }
                    }, {
                        "../filters/spriteMask/SpriteMaskFilter": 121,
                        "./WebGLManager": 125
                    }
                ],
                124: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t), this.stencilMaskStack = null
                        }
                        var r = t("./WebGLManager");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.setMaskStack = function (t) {
                            this.stencilMaskStack = t;
                            var e = this.renderer.gl;
                            0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
                        }, n.prototype.pushStencil = function (t) {
                            this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                            var e = this.renderer.gl,
                                i = this.stencilMaskStack;
                            0 === i.length && (e.enable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.stencilFunc(e.ALWAYS, 1, 1)), i.push(t), e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, i.length), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
                        }, n.prototype.popStencil = function () {
                            this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                            var t = this.renderer.gl,
                                e = this.stencilMaskStack,
                                i = e.pop();
                            0 === e.length ? t.disable(t.STENCIL_TEST) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(i), t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.NOTEQUAL, 0, e.length), t.stencilOp(t.KEEP, t.KEEP, t.KEEP))
                        }, n.prototype.destroy = function () {
                            r.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
                        }
                    }, {
                        "./WebGLManager": 125
                    }
                ],
                125: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t, this.renderer.on("context", this.onContextChange, this)
                        }
                        n.prototype.constructor = n, e.exports = n, n.prototype.onContextChange = function () { }, n.prototype.destroy = function () {
                            this.renderer.off("context", this.onContextChange, this), this.renderer = null
                        }
                    }, {}
                ],
                126: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t)
                        }
                        var r = t("../managers/WebGLManager");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.start = function () { }, n.prototype.stop = function () {
                            this.flush()
                        }, n.prototype.flush = function () { }, n.prototype.render = function (t) { }
                    }, {
                        "../managers/WebGLManager": 125
                    }
                ],
                127: [
                    function (t, e, i) {
                        function n(t, e) {
                            this.gl = t, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
                            for (var i = 0; i < 4; i++) this.interleaved[4 * i] = this.vertices[2 * i], this.interleaved[4 * i + 1] = this.vertices[2 * i + 1], this.interleaved[4 * i + 2] = this.uvs[2 * i], this.interleaved[4 * i + 3] = this.uvs[2 * i + 1];
                            this.indices = o(1), this.vertexBuffer = r.GLBuffer.createVertexBuffer(t, this.interleaved, t.STATIC_DRAW), this.indexBuffer = r.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.vao = new r.VertexArrayObject(t, e)
                        }
                        var r = t("pixi-gl-core"),
                            o = t("../../../utils/createIndicesForQuads");
                        n.prototype.constructor = n, n.prototype.initVao = function (t) {
                            this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
                        }, n.prototype.map = function (t, e) {
                            var i = 0,
                                n = 0;
                            return this.uvs[0] = i, this.uvs[1] = n, this.uvs[2] = i + e.width / t.width, this.uvs[3] = n, this.uvs[4] = i + e.width / t.width, this.uvs[5] = n + e.height / t.height, this.uvs[6] = i, this.uvs[7] = n + e.height / t.height, i = e.x, n = e.y, this.vertices[0] = i, this.vertices[1] = n, this.vertices[2] = i + e.width, this.vertices[3] = n, this.vertices[4] = i + e.width, this.vertices[5] = n + e.height, this.vertices[6] = i, this.vertices[7] = n + e.height, this
                        }, n.prototype.draw = function () {
                            return this.vao.bind().draw(this.gl.TRIANGLES, 6, 0).unbind(), this
                        }, n.prototype.upload = function () {
                            for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                            return this.vertexBuffer.upload(this.interleaved), this
                        }, n.prototype.destroy = function () {
                            var t = this.gl;
                            t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
                        }, e.exports = n
                    }, {
                        "../../../utils/createIndicesForQuads": 149,
                        "pixi-gl-core": 51
                    }
                ],
                128: [
                    function (t, e, i) {
                        var n = t("../../../math"),
                            r = t("../../../const"),
                            o = t("pixi-gl-core").GLFramebuffer,
                            s = function (t, e, i, s, a, h) {
                                this.gl = t, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new n.Rectangle(0, 0, 1, 1), this.resolution = a || r.RESOLUTION, this.projectionMatrix = new n.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new n.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = s || r.SCALE_MODES.DEFAULT, this.root = h, this.root ? (this.frameBuffer = new o(t, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = o.createRGBA(t, 100, 100), this.scaleMode === r.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(e, i)
                            };
                        s.prototype.constructor = s, e.exports = s, s.prototype.clear = function (t) {
                            var e = t || this.clearColor;
                            this.frameBuffer.clear(e[0], e[1], e[2], e[3])
                        }, s.prototype.attachStencilBuffer = function () {
                            this.root || this.frameBuffer.enableStencil()
                        }, s.prototype.setFrame = function (t, e) {
                            this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t
                        }, s.prototype.activate = function () {
                            var t = this.gl;
                            this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
                        }, s.prototype.calculateProjection = function (t, e) {
                            var i = this.projectionMatrix;
                            e = e || t, i.identity(), this.root ? (i.a = 1 / t.width * 2, i.d = -1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = 1 - e.y * i.d) : (i.a = 1 / t.width * 2, i.d = 1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = -1 - e.y * i.d)
                        }, s.prototype.resize = function (t, e) {
                            if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
                                this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
                                var i = this.frame || this.size;
                                this.calculateProjection(i)
                            }
                        }, s.prototype.destroy = function () {
                            this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
                        }
                    }, {
                        "../../../const": 78,
                        "../../../math": 102,
                        "pixi-gl-core": 51
                    }
                ],
                129: [
                    function (t, e, i) {
                        function n(t) {
                            for (var e = "", i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
                            return e
                        }
                        var r = t("pixi-gl-core"),
                            o = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n"),
                            s = function (t, e) {
                                var i = !e;
                                if (i) {
                                    var s = document.createElement("canvas");
                                    s.width = 1, s.height = 1, e = r.createContext(s)
                                }
                                for (var a = e.createShader(e.FRAGMENT_SHADER) ; ;) {
                                    var h = o.replace(/%forloop%/gi, n(t));
                                    if (e.shaderSource(a, h), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS)) break;
                                    t = t / 2 | 0
                                }
                                return i && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t
                            };
                        e.exports = s
                    }, {
                        "pixi-gl-core": 51
                    }
                ],
                130: [
                    function (t, e, i) {
                        function n(t, e) {
                            return e = e || [], e[r.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[r.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[r.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[r.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e
                        }
                        var r = t("../../../const");
                        e.exports = n
                    }, {
                        "../../../const": 78
                    }
                ],
                131: [
                    function (t, e, i) {
                        function n(t, e) {
                            e = e || {}, e[r.DRAW_MODES.POINTS] = t.POINTS, e[r.DRAW_MODES.LINES] = t.LINES, e[r.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[r.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[r.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[r.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[r.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN
                        }
                        var r = t("../../../const");
                        e.exports = n
                    }, {
                        "../../../const": 78
                    }
                ],
                132: [
                    function (t, e, i) {
                        function n(t) {
                            var e = t.getContextAttributes();
                            !e.stencil
                        }
                        e.exports = n
                    }, {}
                ],
                133: [
                    function (t, e, i) {
                        function n(t) {
                            s.call(this), this.anchor = new r.ObservablePoint(this.onAnchorUpdate, this), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = h.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || o.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1
                        }
                        var r = t("../math"),
                            o = t("../textures/Texture"),
                            s = t("../display/Container"),
                            a = t("../utils"),
                            h = t("../const"),
                            l = new r.Point;
                        n.prototype = Object.create(s.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            width: {
                                get: function () {
                                    return Math.abs(this.scale.x) * this.texture.orig.width
                                },
                                set: function (t) {
                                    var e = a.sign(this.scale.x) || 1;
                                    this.scale.x = e * t / this.texture.orig.width, this._width = t
                                }
                            },
                            height: {
                                get: function () {
                                    return Math.abs(this.scale.y) * this.texture.orig.height
                                },
                                set: function (t) {
                                    var e = a.sign(this.scale.y) || 1;
                                    this.scale.y = e * t / this.texture.orig.height, this._height = t
                                }
                            },
                            tint: {
                                get: function () {
                                    return this._tint
                                },
                                set: function (t) {
                                    this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                                }
                            },
                            texture: {
                                get: function () {
                                    return this._texture
                                },
                                set: function (t) {
                                    this._texture !== t && (this._texture = t, this.cachedTint = 16777215, this._textureID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                                }
                            }
                        }), n.prototype._onTextureUpdate = function () {
                            this._textureID = -1, this._width && (this.scale.x = a.sign(this.scale.x) * this._width / this.texture.orig.width), this._height && (this.scale.y = a.sign(this.scale.y) * this._height / this.texture.orig.height)
                        }, n.prototype.onAnchorUpdate = function () {
                            this._transformID = -1
                        }, n.prototype.calculateVertices = function () {
                            if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                                this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                                var t, e, i, n, r = this._texture,
                                    o = this.transform.worldTransform,
                                    s = o.a,
                                    a = o.b,
                                    h = o.c,
                                    l = o.d,
                                    c = o.tx,
                                    u = o.ty,
                                    p = this.vertexData,
                                    d = r.trim,
                                    f = r.orig;
                                d ? (e = d.x - this.anchor._x * f.width, t = e + d.width, n = d.y - this.anchor._y * f.height, i = n + d.height) : (t = f.width * (1 - this.anchor._x), e = f.width * -this.anchor._x, i = f.height * (1 - this.anchor._y), n = f.height * -this.anchor._y), p[0] = s * e + h * n + c, p[1] = l * n + a * e + u, p[2] = s * t + h * n + c, p[3] = l * n + a * t + u, p[4] = s * t + h * i + c, p[5] = l * i + a * t + u, p[6] = s * e + h * i + c, p[7] = l * i + a * e + u
                            }
                        }, n.prototype.calculateTrimmedVertices = function () {
                            this.vertexTrimmedData || (this.vertexTrimmedData = new Float32Array(8));
                            var t, e, i, n, r = this._texture,
                                o = this.vertexTrimmedData,
                                s = r.orig,
                                a = this.transform.worldTransform,
                                h = a.a,
                                l = a.b,
                                c = a.c,
                                u = a.d,
                                p = a.tx,
                                d = a.ty;
                            t = s.width * (1 - this.anchor._x), e = s.width * -this.anchor._x, i = s.height * (1 - this.anchor._y), n = s.height * -this.anchor._y, o[0] = h * e + c * n + p, o[1] = u * n + l * e + d, o[2] = h * t + c * n + p, o[3] = u * n + l * t + d, o[4] = h * t + c * i + p, o[5] = u * i + l * t + d, o[6] = h * e + c * i + p, o[7] = u * i + l * e + d
                        }, n.prototype._renderWebGL = function (t) {
                            this.calculateVertices(), t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this)
                        }, n.prototype._renderCanvas = function (t) {
                            t.plugins.sprite.render(this)
                        }, n.prototype._calculateBounds = function () {
                            var t = this._texture.trim,
                                e = this._texture.orig;
                            !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                        }, n.prototype.getLocalBounds = function (t) {
                            return 0 === this.children.length ? (this._bounds.minX = -this._texture.orig.width * this.anchor._x, this._bounds.minY = -this._texture.orig.height * this.anchor._y, this._bounds.maxX = this._texture.orig.width, this._bounds.maxY = this._texture.orig.height, t || (this._localBoundsRect || (this._localBoundsRect = new r.Rectangle), t = this._localBoundsRect), this._bounds.getRectangle(t)) : s.prototype.getLocalBounds.call(this, t)
                        }, n.prototype.containsPoint = function (t) {
                            this.worldTransform.applyInverse(t, l);
                            var e, i = this._texture.orig.width,
                                n = this._texture.orig.height,
                                r = -i * this.anchor.x;
                            return l.x > r && l.x < r + i && (e = -n * this.anchor.y, l.y > e && l.y < e + n)
                        }, n.prototype.destroy = function (t) {
                            s.prototype.destroy.call(this, t), this.anchor = null;
                            var e = "boolean" == typeof t ? t : t && t.texture;
                            if (e) {
                                var i = "boolean" == typeof t ? t : t && t.baseTexture;
                                this._texture.destroy(!!i)
                            }
                            this._texture = null, this.shader = null
                        }, n.from = function (t) {
                            return new n(o.from(t))
                        }, n.fromFrame = function (t) {
                            var e = a.TextureCache[t];
                            if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                            return new n(e)
                        }, n.fromImage = function (t, e, i) {
                            return new n(o.fromImage(t, e, i))
                        }
                    }, {
                        "../const": 78,
                        "../display/Container": 80,
                        "../math": 102,
                        "../textures/Texture": 144,
                        "../utils": 151
                    }
                ],
                134: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t
                        }
                        var r = t("../../renderers/canvas/CanvasRenderer"),
                            o = t("../../const"),
                            s = t("../../math"),
                            a = new s.Matrix,
                            h = t("./CanvasTinter");
                        n.prototype.constructor = n, e.exports = n, r.registerPlugin("sprite", n), n.prototype.render = function (t) {
                            var e, i, n = t._texture,
                                r = this.renderer,
                                l = t.transform.worldTransform,
                                c = n._frame.width,
                                u = n._frame.height;
                            if (!(n.orig.width <= 0 || n.orig.height <= 0) && n.baseTexture.source && (r.setBlendMode(t.blendMode), n.valid)) {
                                r.context.globalAlpha = t.worldAlpha;
                                var p = n.baseTexture.scaleMode === o.SCALE_MODES.LINEAR;
                                r.smoothProperty && r.context[r.smoothProperty] !== p && (r.context[r.smoothProperty] = p), n.trim ? (e = n.trim.width / 2 + n.trim.x - t.anchor.x * n.orig.width, i = n.trim.height / 2 + n.trim.y - t.anchor.y * n.orig.height) : (e = (.5 - t.anchor.x) * n.orig.width, i = (.5 - t.anchor.y) * n.orig.height), n.rotate && (l.copy(a), l = a, s.GroupD8.matrixAppendRotationInv(l, n.rotate, e, i), e = 0, i = 0), e -= c / 2, i -= u / 2, r.roundPixels ? (r.context.setTransform(l.a, l.b, l.c, l.d, l.tx * r.resolution | 0, l.ty * r.resolution | 0), e = 0 | e, i = 0 | i) : r.context.setTransform(l.a, l.b, l.c, l.d, l.tx * r.resolution, l.ty * r.resolution);
                                var d = n.baseTexture.resolution;
                                16777215 !== t.tint ? (t.cachedTint !== t.tint && (t.cachedTint = t.tint, t.tintedTexture = h.getTintedTexture(t, t.tint)), r.context.drawImage(t.tintedTexture, 0, 0, c * d, u * d, e * r.resolution, i * r.resolution, c * r.resolution, u * r.resolution)) : r.context.drawImage(n.baseTexture.source, n._frame.x * d, n._frame.y * d, c * d, u * d, e * r.resolution, i * r.resolution, c * r.resolution, u * r.resolution)
                            }
                        }, n.prototype.destroy = function () {
                            this.renderer = null
                        }
                    }, {
                        "../../const": 78,
                        "../../math": 102,
                        "../../renderers/canvas/CanvasRenderer": 109,
                        "./CanvasTinter": 135
                    }
                ],
                135: [
                    function (t, e, i) {
                        var n = t("../../utils"),
                            r = t("../../renderers/canvas/utils/canUseNewCanvasBlendModes"),
                            o = e.exports = {
                                getTintedTexture: function (t, e) {
                                    var i = t.texture;
                                    e = o.roundColor(e);
                                    var n = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                                    if (i.tintCache = i.tintCache || {}, i.tintCache[n]) return i.tintCache[n];
                                    var r = o.canvas || document.createElement("canvas");
                                    if (o.tintMethod(i, e, r), o.convertTintToImage) {
                                        var s = new Image;
                                        s.src = r.toDataURL(), i.tintCache[n] = s
                                    } else i.tintCache[n] = r, o.canvas = null;
                                    return r
                                },
                                tintWithMultiply: function (t, e, i) {
                                    var n = i.getContext("2d"),
                                        r = t._frame.clone(),
                                        o = t.baseTexture.resolution;
                                    r.x *= o, r.y *= o, r.width *= o, r.height *= o, i.width = r.width, i.height = r.height, n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), n.fillRect(0, 0, r.width, r.height), n.globalCompositeOperation = "multiply", n.drawImage(t.baseTexture.source, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height), n.globalCompositeOperation = "destination-atop", n.drawImage(t.baseTexture.source, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height)
                                },
                                tintWithOverlay: function (t, e, i) {
                                    var n = i.getContext("2d"),
                                        r = t._frame.clone(),
                                        o = t.baseTexture.resolution;
                                    r.x *= o, r.y *= o, r.width *= o, r.height *= o, i.width = r.width, i.height = r.height, n.globalCompositeOperation = "copy", n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), n.fillRect(0, 0, r.width, r.height), n.globalCompositeOperation = "destination-atop", n.drawImage(t.baseTexture.source, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height)
                                },
                                tintWithPerPixel: function (t, e, i) {
                                    var r = i.getContext("2d"),
                                        o = t._frame.clone(),
                                        s = t.baseTexture.resolution;
                                    o.x *= s, o.y *= s, o.width *= s, o.height *= s, i.width = o.width, i.height = o.height, r.globalCompositeOperation = "copy", r.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
                                    for (var a = n.hex2rgb(e), h = a[0], l = a[1], c = a[2], u = r.getImageData(0, 0, o.width, o.height), p = u.data, d = 0; d < p.length; d += 4) p[d + 0] *= h, p[d + 1] *= l, p[d + 2] *= c;
                                    r.putImageData(u, 0, 0)
                                },
                                roundColor: function (t) {
                                    var e = o.cacheStepsPerColorChannel,
                                        i = n.hex2rgb(t);
                                    return i[0] = Math.min(255, i[0] / e * e), i[1] = Math.min(255, i[1] / e * e), i[2] = Math.min(255, i[2] / e * e), n.rgb2hex(i)
                                },
                                cacheStepsPerColorChannel: 8,
                                convertTintToImage: !1,
                                canUseMultiply: r(),
                                tintMethod: 0
                            };
                        o.tintMethod = o.canUseMultiply ? o.tintWithMultiply : o.tintWithPerPixel
                    }, {
                        "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 112,
                        "../../utils": 151
                    }
                ],
                136: [
                    function (t, e, i) {
                        var n = function (t) {
                            this.vertices = new ArrayBuffer(t), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
                        };
                        e.exports = n, n.prototype.destroy = function () {
                            this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
                        }
                    }, {}
                ],
                137: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = c.SPRITE_BATCH_SIZE, this.buffers = [];
                            for (var e = 1; e <= p.nextPow2(this.size) ; e *= 2) {
                                var i = 4 * e * this.vertByteSize;
                                this.buffers.push(new l(i))
                            }
                            this.indices = s(this.size), this.shaders = null, this.currentIndex = 0, d = 0, this.groups = [];
                            for (var n = 0; n < this.size; n++) this.groups[n] = {
                                textures: [],
                                textureCount: 0,
                                ids: [],
                                size: 0,
                                start: 0,
                                blend: 0
                            };
                            this.sprites = [], this.vertexBuffers = [], this.vaos = [], this.vaoMax = 2, this.vertexCount = 0, this.renderer.on("prerender", this.onPrerender, this)
                        }
                        var r = t("../../renderers/webgl/utils/ObjectRenderer"),
                            o = t("../../renderers/webgl/WebGLRenderer"),
                            s = t("../../utils/createIndicesForQuads"),
                            a = t("./generateMultiTextureShader"),
                            h = t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),
                            l = t("./BatchBuffer"),
                            c = t("../../const"),
                            u = t("pixi-gl-core"),
                            p = t("bit-twiddle"),
                            d = 0;
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, o.registerPlugin("sprite", n), n.prototype.onContextChange = function () {
                            var t = this.renderer.gl;
                            this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), c.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = h(this.MAX_TEXTURES, t), this.shaders = new Array(this.MAX_TEXTURES), this.shaders[0] = a(t, 1), this.shaders[1] = a(t, 2), this.indexBuffer = u.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW);
                            for (var e = this.shaders[1], i = 0; i < this.vaoMax; i++) this.vertexBuffers[i] = u.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW), this.vaos[i] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[i], e.attributes.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[i], e.attributes.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[i], e.attributes.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[i], e.attributes.aTextureId, t.FLOAT, !1, this.vertByteSize, 16);
                            this.vao = this.vaos[0], this.currentBlendMode = 99999
                        }, n.prototype.onPrerender = function () {
                            this.vertexCount = 0
                        }, n.prototype.render = function (t) {
                            this.currentIndex >= this.size && this.flush(), t.texture._uvs && (this.sprites[this.currentIndex++] = t)
                        }, n.prototype.flush = function () {
                            if (0 !== this.currentIndex) {
                                var t, e, i, n, r, o, s, h = this.renderer.gl,
                                    l = p.nextPow2(this.currentIndex),
                                    c = p.log2(l),
                                    f = this.buffers[c],
                                    m = this.sprites,
                                    g = this.groups,
                                    v = f.float32View,
                                    y = f.uint32View,
                                    _ = 0,
                                    x = 1,
                                    b = 0,
                                    w = g[0],
                                    S = m[0].blendMode;
                                w.textureCount = 0, w.start = 0, w.blend = S, d++;
                                for (var T = 0; T < this.currentIndex; T++) {
                                    var M = m[T];
                                    if (t = M._texture.baseTexture, S !== M.blendMode && (S = M.blendMode, e = null, b = this.MAX_TEXTURES, d++), e !== t && (e = t, t._enabled !== d && (b === this.MAX_TEXTURES && (d++, b = 0, w.size = T - w.start, w = g[x++], w.textureCount = 0, w.blend = S, w.start = T), t._enabled = d, t._id = b, w.textures[w.textureCount++] = t, b++)), i = M.vertexData, n = M._tintRGB + (255 * M.worldAlpha << 24), r = M._texture._uvs.uvsUint32, o = t._id, this.renderer.roundPixels) {
                                        var E = this.renderer.resolution;
                                        v[_] = (i[0] * E | 0) / E, v[_ + 1] = (i[1] * E | 0) / E, v[_ + 5] = (i[2] * E | 0) / E, v[_ + 6] = (i[3] * E | 0) / E, v[_ + 10] = (i[4] * E | 0) / E, v[_ + 11] = (i[5] * E | 0) / E, v[_ + 15] = (i[6] * E | 0) / E, v[_ + 16] = (i[7] * E | 0) / E
                                    } else v[_] = i[0], v[_ + 1] = i[1], v[_ + 5] = i[2], v[_ + 6] = i[3], v[_ + 10] = i[4], v[_ + 11] = i[5], v[_ + 15] = i[6], v[_ + 16] = i[7];
                                    y[_ + 2] = r[0], y[_ + 7] = r[1], y[_ + 12] = r[2], y[_ + 17] = r[3], y[_ + 3] = y[_ + 8] = y[_ + 13] = y[_ + 18] = n, v[_ + 4] = v[_ + 9] = v[_ + 14] = v[_ + 19] = o, _ += 20
                                }
                                for (w.size = T - w.start, this.vertexCount++, this.vaoMax <= this.vertexCount && (this.vaoMax++, s = this.shaders[1], this.vertexBuffers[this.vertexCount] = u.GLBuffer.createVertexBuffer(h, null, h.STREAM_DRAW), this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount], s.attributes.aVertexPosition, h.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], s.attributes.aTextureCoord, h.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[this.vertexCount], s.attributes.aColor, h.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[this.vertexCount], s.attributes.aTextureId, h.FLOAT, !1, this.vertByteSize, 16)), this.vertexBuffers[this.vertexCount].upload(f.vertices, 0), this.vao = this.vaos[this.vertexCount].bind(), T = 0; T < x; T++) {
                                    var A = g[T],
                                        C = A.textureCount;
                                    s = this.shaders[C - 1], s || (s = this.shaders[C - 1] = a(h, C)), this.renderer.bindShader(s);
                                    for (var L = 0; L < C; L++) this.renderer.bindTexture(A.textures[L], L);
                                    this.renderer.state.setBlendMode(A.blend), h.drawElements(h.TRIANGLES, 6 * A.size, h.UNSIGNED_SHORT, 6 * A.start * 2)
                                }
                                this.currentIndex = 0
                            }
                        }, n.prototype.start = function () { }, n.prototype.stop = function () {
                            this.flush(), this.vao.unbind()
                        }, n.prototype.destroy = function () {
                            for (var t = 0; t < this.vaoMax; t++) this.vertexBuffers[t].destroy(), this.vaos[t].destroy();
                            for (this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), r.prototype.destroy.call(this), t = 0; t < this.shaders.length; t++) this.shaders[t] && this.shaders[t].destroy();
                            for (this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null, t = 0; t < this.buffers.length; t++) this.buffers[t].destroy()
                        }
                    }, {
                        "../../const": 78,
                        "../../renderers/webgl/WebGLRenderer": 116,
                        "../../renderers/webgl/utils/ObjectRenderer": 126,
                        "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 129,
                        "../../utils/createIndicesForQuads": 149,
                        "./BatchBuffer": 136,
                        "./generateMultiTextureShader": 138,
                        "bit-twiddle": 14,
                        "pixi-gl-core": 51
                    }
                ],
                138: [
                    function (t, e, i) {
                        function n(t, e) {
                            var i = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
                                n = s;
                            n = n.replace(/%count%/gi, e), n = n.replace(/%forloop%/gi, r(e));
                            for (var a = new o(t, i, n), h = [], l = 0; l < e; l++) h[l] = l;
                            return a.bind(), a.uniforms.uSamplers = h, a
                        }

                        function r(t) {
                            var e = "";
                            e += "\n", e += "\n";
                            for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(textureId == " + i + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
                            return e += "\n", e += "\n"
                        }
                        var o = t("../../Shader"),
                            s = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n");
                        e.exports = n
                    }, {
                        "../../Shader": 77
                    }
                ],
                139: [
                    function (t, e, i) {
                        function n(t, e) {
                            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = h.RESOLUTION, this._text = null, this._style = null, this._styleListener = null, this._font = "";
                            var i = o.fromCanvas(this.canvas);
                            i.orig = new s.Rectangle, i.trim = new s.Rectangle, r.call(this, i), this.text = t, this.style = e, this.localStyleID = -1
                        }
                        var r = t("../sprites/Sprite"),
                            o = t("../textures/Texture"),
                            s = t("../math"),
                            a = t("../utils"),
                            h = t("../const"),
                            l = t("./TextStyle"),
                            c = {
                                texture: !0,
                                children: !1,
                                baseTexture: !0
                            };
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.fontPropertiesCache = {}, n.fontPropertiesCanvas = document.createElement("canvas"), n.fontPropertiesContext = n.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(n.prototype, {
                            width: {
                                get: function () {
                                    return this.updateText(!0), Math.abs(this.scale.x) * this.texture.orig.width
                                },
                                set: function (t) {
                                    this.updateText(!0);
                                    var e = a.sign(this.scale.x) || 1;
                                    this.scale.x = e * t / this.texture.orig.width, this._width = t
                                }
                            },
                            height: {
                                get: function () {
                                    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                                },
                                set: function (t) {
                                    this.updateText(!0);
                                    var e = a.sign(this.scale.y) || 1;
                                    this.scale.y = e * t / this.texture.orig.height, this._height = t
                                }
                            },
                            style: {
                                get: function () {
                                    return this._style
                                },
                                set: function (t) {
                                    t = t || {}, t instanceof l ? this._style = t : this._style = new l(t), this.localStyleID = -1, this.dirty = !0
                                }
                            },
                            text: {
                                get: function () {
                                    return this._text
                                },
                                set: function (t) {
                                    t = t || " ", t = t.toString(), this._text !== t && (this._text = t, this.dirty = !0)
                                }
                            }
                        }), n.prototype.updateText = function (t) {
                            var e = this._style;
                            if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                                var i = "number" == typeof e.fontSize ? e.fontSize + "px" : e.fontSize;
                                this._font = e.fontStyle + " " + e.fontVariant + " " + e.fontWeight + " " + i + " " + e.fontFamily, this.context.font = this._font;
                                var n, r = e.wordWrap ? this.wordWrap(this._text) : this._text,
                                    o = r.split(/(?:\r\n|\r|\n)/),
                                    s = new Array(o.length),
                                    a = 0,
                                    h = this.determineFontProperties(this._font);
                                for (n = 0; n < o.length; n++) {
                                    var l = this.context.measureText(o[n]).width + (o[n].length - 1) * e.letterSpacing;
                                    s[n] = l, a = Math.max(a, l)
                                }
                                var c = a + e.strokeThickness;
                                e.dropShadow && (c += e.dropShadowDistance), c += 2 * e.padding, this.canvas.width = Math.ceil((c + this.context.lineWidth) * this.resolution);
                                var u = this.style.lineHeight || h.fontSize + e.strokeThickness,
                                    p = Math.max(u, h.fontSize + e.strokeThickness) + (o.length - 1) * u;
                                e.dropShadow && (p += e.dropShadowDistance), this.canvas.height = Math.ceil((p + 2 * this._style.padding) * this.resolution), this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this._font, this.context.strokeStyle = e.stroke, this.context.lineWidth = e.strokeThickness, this.context.textBaseline = e.textBaseline, this.context.lineJoin = e.lineJoin, this.context.miterLimit = e.miterLimit;
                                var d, f;
                                if (e.dropShadow) {
                                    e.dropShadowBlur > 0 ? (this.context.shadowColor = e.dropShadowColor, this.context.shadowBlur = e.dropShadowBlur) : this.context.fillStyle = e.dropShadowColor;
                                    var m = Math.cos(e.dropShadowAngle) * e.dropShadowDistance,
                                        g = Math.sin(e.dropShadowAngle) * e.dropShadowDistance;
                                    for (n = 0; n < o.length; n++) d = e.strokeThickness / 2, f = e.strokeThickness / 2 + n * u + h.ascent, "right" === e.align ? d += a - s[n] : "center" === e.align && (d += (a - s[n]) / 2), e.fill && (this.drawLetterSpacing(o[n], d + m + e.padding, f + g + e.padding), e.stroke && e.strokeThickness && (this.context.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(o[n], d + m + e.padding, f + g + e.padding, !0), this.context.strokeStyle = e.stroke))
                                }
                                for (this.context.fillStyle = this._generateFillStyle(e, o), n = 0; n < o.length; n++) d = e.strokeThickness / 2, f = e.strokeThickness / 2 + n * u + h.ascent, "right" === e.align ? d += a - s[n] : "center" === e.align && (d += (a - s[n]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(o[n], d + e.padding, f + e.padding, !0), e.fill && this.drawLetterSpacing(o[n], d + e.padding, f + e.padding);
                                this.updateTexture()
                            }
                        }, n.prototype.drawLetterSpacing = function (t, e, i, n) {
                            var r = this._style,
                                o = r.letterSpacing;
                            if (0 === o) return void (n ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i));
                            for (var s, a = String.prototype.split.call(t, ""), h = 0, l = e; h < t.length;) s = a[h++], n ? this.context.strokeText(s, l, i) : this.context.fillText(s, l, i), l += this.context.measureText(s).width + o
                        }, n.prototype.updateTexture = function () {
                            var t = this._texture,
                                e = this._style;
                            t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.realWidth = this.canvas.width, t.baseTexture.realHeight = this.canvas.height, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.trim.width = t._frame.width = this.canvas.width / this.resolution, t.trim.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = -e.padding, t.trim.y = -e.padding, t.orig.width = t._frame.width - 2 * e.padding, t.orig.height = t._frame.height - 2 * e.padding, this._onTextureUpdate(), t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
                        }, n.prototype.renderWebGL = function (t) {
                            this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), r.prototype.renderWebGL.call(this, t)
                        }, n.prototype._renderCanvas = function (t) {
                            this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), r.prototype._renderCanvas.call(this, t)
                        }, n.prototype.determineFontProperties = function (t) {
                            var e = n.fontPropertiesCache[t];
                            if (!e) {
                                e = {};
                                var i = n.fontPropertiesCanvas,
                                    r = n.fontPropertiesContext;
                                r.font = t;
                                var o = Math.ceil(r.measureText("|MÉq").width),
                                    s = Math.ceil(r.measureText("M").width),
                                    a = 2 * s;
                                s = 1.4 * s | 0, i.width = o, i.height = a, r.fillStyle = "#f00", r.fillRect(0, 0, o, a), r.font = t, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText("|MÉq", 0, s);
                                var h, l, c = r.getImageData(0, 0, o, a).data,
                                    u = c.length,
                                    p = 4 * o,
                                    d = 0,
                                    f = !1;
                                for (h = 0; h < s; h++) {
                                    for (l = 0; l < p; l += 4)
                                        if (255 !== c[d + l]) {
                                            f = !0;
                                            break
                                        }
                                    if (f) break;
                                    d += p
                                }
                                for (e.ascent = s - h, d = u - p, f = !1, h = a; h > s; h--) {
                                    for (l = 0; l < p; l += 4)
                                        if (255 !== c[d + l]) {
                                            f = !0;
                                            break
                                        }
                                    if (f) break;
                                    d -= p
                                }
                                e.descent = h - s, e.fontSize = e.ascent + e.descent, n.fontPropertiesCache[t] = e
                            }
                            return e
                        }, n.prototype.wordWrap = function (t) {
                            for (var e = "", i = t.split("\n"), n = this._style.wordWrapWidth, r = 0; r < i.length; r++) {
                                for (var o = n, s = i[r].split(" "), a = 0; a < s.length; a++) {
                                    var h = this.context.measureText(s[a]).width;
                                    if (this._style.breakWords && h > n)
                                        for (var l = s[a].split(""), c = 0; c < l.length; c++) {
                                            var u = this.context.measureText(l[c]).width;
                                            u > o ? (e += "\n" + l[c], o = n - u) : (0 === c && (e += " "), e += l[c], o -= u)
                                        } else {
                                        var p = h + this.context.measureText(" ").width;
                                        0 === a || p > o ? (a > 0 && (e += "\n"), e += s[a], o = n - h) : (o -= p, e += " " + s[a])
                                    }
                                }
                                r < i.length - 1 && (e += "\n")
                            }
                            return e
                        }, n.prototype._calculateBounds = function () {
                            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
                        }, n.prototype._onStyleChange = function () {
                            this.dirty = !0
                        }, n.prototype._generateFillStyle = function (t, e) {
                            if (Array.isArray(t.fill)) {
                                var i, n, r, o, s, a = this.canvas.width / this.resolution,
                                    l = this.canvas.height / this.resolution;
                                if (t.fillGradientType === h.TEXT_GRADIENT.LINEAR_VERTICAL)
                                    for (n = this.context.createLinearGradient(a / 2, 0, a / 2, l), r = (t.fill.length + 1) * e.length, o = 0, i = 0; i < e.length; i++) {
                                        o += 1;
                                        for (var c = 0; c < t.fill.length; c++) s = o / r, n.addColorStop(s, t.fill[c]), o++
                                    } else
                                    for (n = this.context.createLinearGradient(0, l / 2, a, l / 2), r = t.fill.length + 1, o = 1, i = 0; i < t.fill.length; i++) s = o / r, n.addColorStop(s, t.fill[i]), o++;
                                return n
                            }
                            return t.fill
                        }, n.prototype.destroy = function (t) {
                            "boolean" == typeof t && (t = {
                                children: t
                            }), t = Object.assign({}, c, t), r.prototype.destroy.call(this, t), this.context = null, this.canvas = null, this._style = null
                        }
                    }, {
                        "../const": 78,
                        "../math": 102,
                        "../sprites/Sprite": 133,
                        "../textures/Texture": 144,
                        "../utils": 151,
                        "./TextStyle": 140
                    }
                ],
                140: [
                    function (t, e, i) {
                        function n(t) {
                            this.styleID = 0, Object.assign(this, this._defaults, t)
                        }

                        function r(t) {
                            if ("number" == typeof t) return s.hex2string(t);
                            if (Array.isArray(t))
                                for (var e = 0; e < t.length; ++e) "number" == typeof t[e] && (t[e] = s.hex2string(t[e]));
                            return t
                        }
                        var o = t("../const"),
                            s = t("../utils");
                        n.prototype.constructor = n, e.exports = n, n.prototype._defaults = {
                            align: "left",
                            breakWords: !1,
                            dropShadow: !1,
                            dropShadowAngle: Math.PI / 6,
                            dropShadowBlur: 0,
                            dropShadowColor: "#000000",
                            dropShadowDistance: 5,
                            fill: "black",
                            fillGradientType: o.TEXT_GRADIENT.LINEAR_VERTICAL,
                            fontFamily: "Arial",
                            fontSize: 26,
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            letterSpacing: 0,
                            lineHeight: 0,
                            lineJoin: "miter",
                            miterLimit: 10,
                            padding: 0,
                            stroke: "black",
                            strokeThickness: 0,
                            textBaseline: "alphabetic",
                            wordWrap: !1,
                            wordWrapWidth: 100
                        }, n.prototype.clone = function () {
                            var t = {};
                            for (var e in this._defaults) t[e] = this[e];
                            return new n(t)
                        }, n.prototype.reset = function () {
                            Object.assign(this, this._defaults)
                        }, Object.defineProperties(n.prototype, {
                            align: {
                                get: function () {
                                    return this._align
                                },
                                set: function (t) {
                                    this._align !== t && (this._align = t, this.styleID++)
                                }
                            },
                            breakWords: {
                                get: function () {
                                    return this._breakWords
                                },
                                set: function (t) {
                                    this._breakWords !== t && (this._breakWords = t, this.styleID++)
                                }
                            },
                            dropShadow: {
                                get: function () {
                                    return this._dropShadow
                                },
                                set: function (t) {
                                    this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                                }
                            },
                            dropShadowAngle: {
                                get: function () {
                                    return this._dropShadowAngle
                                },
                                set: function (t) {
                                    this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                                }
                            },
                            dropShadowBlur: {
                                get: function () {
                                    return this._dropShadowBlur
                                },
                                set: function (t) {
                                    this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                                }
                            },
                            dropShadowColor: {
                                get: function () {
                                    return this._dropShadowColor
                                },
                                set: function (t) {
                                    var e = r(t);
                                    this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                                }
                            },
                            dropShadowDistance: {
                                get: function () {
                                    return this._dropShadowDistance
                                },
                                set: function (t) {
                                    this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                                }
                            },
                            fill: {
                                get: function () {
                                    return this._fill
                                },
                                set: function (t) {
                                    var e = r(t);
                                    this._fill !== e && (this._fill = e, this.styleID++)
                                }
                            },
                            fillGradientType: {
                                get: function () {
                                    return this._fillGradientType
                                },
                                set: function (t) {
                                    this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                                }
                            },
                            fontFamily: {
                                get: function () {
                                    return this._fontFamily
                                },
                                set: function (t) {
                                    this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                                }
                            },
                            fontSize: {
                                get: function () {
                                    return this._fontSize
                                },
                                set: function (t) {
                                    this._fontSize !== t && (this._fontSize = t, this.styleID++)
                                }
                            },
                            fontStyle: {
                                get: function () {
                                    return this._fontStyle
                                },
                                set: function (t) {
                                    this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                                }
                            },
                            fontVariant: {
                                get: function () {
                                    return this._fontVariant
                                },
                                set: function (t) {
                                    this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                                }
                            },
                            fontWeight: {
                                get: function () {
                                    return this._fontWeight
                                },
                                set: function (t) {
                                    this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                                }
                            },
                            letterSpacing: {
                                get: function () {
                                    return this._letterSpacing
                                },
                                set: function (t) {
                                    this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                                }
                            },
                            lineHeight: {
                                get: function () {
                                    return this._lineHeight
                                },
                                set: function (t) {
                                    this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                                }
                            },
                            lineJoin: {
                                get: function () {
                                    return this._lineJoin
                                },
                                set: function (t) {
                                    this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                                }
                            },
                            miterLimit: {
                                get: function () {
                                    return this._miterLimit
                                },
                                set: function (t) {
                                    this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                                }
                            },
                            padding: {
                                get: function () {
                                    return this._padding
                                },
                                set: function (t) {
                                    this._padding !== t && (this._padding = t, this.styleID++)
                                }
                            },
                            stroke: {
                                get: function () {
                                    return this._stroke
                                },
                                set: function (t) {
                                    var e = r(t);
                                    this._stroke !== e && (this._stroke = e, this.styleID++)
                                }
                            },
                            strokeThickness: {
                                get: function () {
                                    return this._strokeThickness
                                },
                                set: function (t) {
                                    this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                                }
                            },
                            textBaseline: {
                                get: function () {
                                    return this._textBaseline
                                },
                                set: function (t) {
                                    this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                                }
                            },
                            wordWrap: {
                                get: function () {
                                    return this._wordWrap
                                },
                                set: function (t) {
                                    this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                                }
                            },
                            wordWrapWidth: {
                                get: function () {
                                    return this._wordWrapWidth
                                },
                                set: function (t) {
                                    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                                }
                            }
                        })
                    }, {
                        "../const": 78,
                        "../utils": 151
                    }
                ],
                141: [
                    function (t, e, i) {
                        function n(t, e, i, n) {
                            r.call(this, null, i), this.resolution = n || o.RESOLUTION, this.width = t || 100, this.height = e || 100, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.scaleMode = i || o.SCALE_MODES.DEFAULT, this.hasLoaded = !0, this._glRenderTargets = [], this._canvasRenderTarget = null, this.valid = !1
                        }
                        var r = t("./BaseTexture"),
                            o = t("../const");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.resize = function (t, e) {
                            t === this.width && e === this.height || (this.valid = t > 0 && e > 0, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
                        }, n.prototype.destroy = function () {
                            r.prototype.destroy.call(this, !0), this.renderer = null
                        }
                    }, {
                        "../const": 78,
                        "./BaseTexture": 142
                    }
                ],
                142: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            s.call(this), this.uid = r.uid(), this.touched = 0, this.resolution = i || o.RESOLUTION, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || o.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = o.MIPMAP_TEXTURES, this.wrapMode = o.WRAP_MODES.DEFAULT, this._glTextures = [], this._enabled = 0, this._id = 0, t && this.loadSource(t)
                        }
                        var r = t("../utils"),
                            o = t("../const"),
                            s = t("eventemitter3"),
                            a = t("../utils/determineCrossOrigin"),
                            h = t("bit-twiddle");
                        n.prototype = Object.create(s.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.update = function () {
                            this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = h.isPow2(this.realWidth) && h.isPow2(this.realHeight), this.emit("update", this)
                        }, n.prototype.loadSource = function (t) {
                            var e = this.isLoading;
                            if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
                            else if (!t.getContext) {
                                this.isLoading = !0;
                                var i = this;
                                t.onload = function () {
                                    t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i._sourceLoaded(), i.emit("loaded", i))
                                }, t.onerror = function () {
                                    t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i.emit("error", i))
                                }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
                            }
                        }, n.prototype._sourceLoaded = function () {
                            this.hasLoaded = !0, this.update()
                        }, n.prototype.destroy = function () {
                            this.imageUrl ? (delete r.BaseTextureCache[this.imageUrl], delete r.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete r.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
                        }, n.prototype.dispose = function () {
                            this.emit("dispose", this)
                        }, n.prototype.updateSourceImage = function (t) {
                            this.source.src = t, this.loadSource(this.source)
                        }, n.fromImage = function (t, e, i) {
                            var o = r.BaseTextureCache[t];
                            if (!o) {
                                var s = new Image;
                                void 0 === e && 0 !== t.indexOf("data:") && (s.crossOrigin = a(t)), o = new n(s, i), o.imageUrl = t, s.src = t, r.BaseTextureCache[t] = o, o.resolution = r.getResolutionOfUrl(t)
                            }
                            return o
                        }, n.fromCanvas = function (t, e) {
                            t._pixiId || (t._pixiId = "canvas_" + r.uid());
                            var i = r.BaseTextureCache[t._pixiId];
                            return i || (i = new n(t, e), r.BaseTextureCache[t._pixiId] = i), i
                        }
                    }, {
                        "../const": 78,
                        "../utils": 151,
                        "../utils/determineCrossOrigin": 150,
                        "bit-twiddle": 14,
                        eventemitter3: 16
                    }
                ],
                143: [
                    function (t, e, i) {
                        function n(t, e) {
                            if (this.legacyRenderer = null, !(t instanceof r)) {
                                var i = arguments[1],
                                    n = arguments[2],
                                    s = arguments[3] || 0,
                                    a = arguments[4] || 1;
                                this.legacyRenderer = arguments[0], e = null, t = new r(i, n, s, a)
                            }
                            o.call(this, t, e), this.valid = !0, this._updateUvs()
                        }
                        var r = t("./BaseRenderTexture"),
                            o = t("./Texture");
                        n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.resize = function (t, e, i) {
                            this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i || this.baseTexture.resize(t, e), this._updateUvs()
                        }, n.create = function (t, e, i, o) {
                            return new n(new r(t, e, i, o))
                        }
                    }, {
                        "./BaseRenderTexture": 141,
                        "./Texture": 144
                    }
                ],
                144: [
                    function (t, e, i) {
                        function n(t, e, i, r, o) {
                            if (a.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new h.Rectangle(0, 0, 1, 1)), t instanceof n && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = r, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.orig = i || e, this._rotate = +(o || 0), o === !0) this._rotate = 2;
                            else if (this._rotate % 2 !== 0) throw "attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
                            t.hasLoaded ? (this.noFrame && (e = new h.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this), this._updateID = 0
                        }
                        var r = t("./BaseTexture"),
                            o = t("./VideoBaseTexture"),
                            s = t("./TextureUvs"),
                            a = t("eventemitter3"),
                            h = t("../math"),
                            l = t("../utils");
                        n.prototype = Object.create(a.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            frame: {
                                get: function () {
                                    return this._frame
                                },
                                set: function (t) {
                                    if (this._frame = t, this.noFrame = !1, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                                    this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
                                }
                            },
                            rotate: {
                                get: function () {
                                    return this._rotate
                                },
                                set: function (t) {
                                    this._rotate = t, this.valid && this._updateUvs()
                                }
                            },
                            width: {
                                get: function () {
                                    return this.orig ? this.orig.width : 0
                                }
                            },
                            height: {
                                get: function () {
                                    return this.orig ? this.orig.height : 0
                                }
                            }
                        }), n.prototype.update = function () {
                            this.baseTexture.update()
                        }, n.prototype.onBaseTextureLoaded = function (t) {
                            this._updateID++, this.noFrame ? this.frame = new h.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
                        }, n.prototype.onBaseTextureUpdated = function (t) {
                            this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
                        }, n.prototype.destroy = function (t) {
                            this.baseTexture && (t && (l.TextureCache[this.baseTexture.imageUrl] && delete l.TextureCache[this.baseTexture.imageUrl], this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, this.off("dispose", this.dispose, this), this.off("update", this.update, this)
                        }, n.prototype.clone = function () {
                            return new n(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
                        }, n.prototype._updateUvs = function () {
                            this._uvs || (this._uvs = new s), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                        }, n.fromImage = function (t, e, i) {
                            var o = l.TextureCache[t];
                            return o || (o = new n(r.fromImage(t, e, i)), l.TextureCache[t] = o), o
                        }, n.fromFrame = function (t) {
                            var e = l.TextureCache[t];
                            if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                            return e
                        }, n.fromCanvas = function (t, e) {
                            return new n(r.fromCanvas(t, e))
                        }, n.fromVideo = function (t, e) {
                            return "string" == typeof t ? n.fromVideoUrl(t, e) : new n(o.fromVideo(t, e))
                        }, n.fromVideoUrl = function (t, e) {
                            return new n(o.fromUrl(t, e))
                        }, n.from = function (t) {
                            if ("string" == typeof t) {
                                var e = l.TextureCache[t];
                                if (!e) {
                                    var i = null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/);
                                    return i ? n.fromVideoUrl(t) : n.fromImage(t)
                                }
                                return e
                            }
                            return t instanceof HTMLCanvasElement ? n.fromCanvas(t) : t instanceof HTMLVideoElement ? n.fromVideo(t) : t instanceof r ? new n(r) : t
                        }, n.addTextureToCache = function (t, e) {
                            l.TextureCache[e] = t
                        }, n.removeTextureFromCache = function (t) {
                            var e = l.TextureCache[t];
                            return delete l.TextureCache[t], delete l.BaseTextureCache[t], e
                        }, n.EMPTY = new n(new r), n.EMPTY.destroy = function () { }, n.EMPTY.on = function () { }, n.EMPTY.once = function () { }, n.EMPTY.emit = function () { }
                    }, {
                        "../math": 102,
                        "../utils": 151,
                        "./BaseTexture": 142,
                        "./TextureUvs": 145,
                        "./VideoBaseTexture": 146,
                        eventemitter3: 16
                    }
                ],
                145: [
                    function (t, e, i) {
                        function n() {
                            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
                        }
                        e.exports = n;
                        var r = t("../math/GroupD8");
                        n.prototype.set = function (t, e, i) {
                            var n = e.width,
                                o = e.height;
                            if (i) {
                                var s = t.width / 2 / n,
                                    a = t.height / 2 / o,
                                    h = t.x / n + s,
                                    l = t.y / o + a;
                                i = r.add(i, r.NW), this.x0 = h + s * r.uX(i), this.y0 = l + a * r.uY(i), i = r.add(i, 2), this.x1 = h + s * r.uX(i), this.y1 = l + a * r.uY(i), i = r.add(i, 2), this.x2 = h + s * r.uX(i), this.y2 = l + a * r.uY(i), i = r.add(i, 2), this.x3 = h + s * r.uX(i), this.y3 = l + a * r.uY(i)
                            } else this.x0 = t.x / n, this.y0 = t.y / o, this.x1 = (t.x + t.width) / n, this.y1 = t.y / o, this.x2 = (t.x + t.width) / n, this.y2 = (t.y + t.height) / o, this.x3 = t.x / n, this.y3 = (t.y + t.height) / o;
                            this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
                        }
                    }, {
                        "../math/GroupD8": 98
                    }
                ],
                146: [
                    function (t, e, i) {
                        function n(t, e) {
                            if (!t) throw new Error("No video source element specified.");
                            (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), o.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
                        }

                        function r(t, e) {
                            e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
                            var i = document.createElement("source");
                            return i.src = t, i.type = e, i
                        }
                        var o = t("./BaseTexture"),
                            s = t("../utils");
                        n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n, n.prototype._onUpdate = function () {
                            this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
                        }, n.prototype._onPlayStart = function () {
                            this.hasLoaded || this._onCanPlay(), this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
                        }, n.prototype._onPlayStop = function () {
                            this.autoUpdate = !1
                        }, n.prototype._onCanPlay = function () {
                            this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
                        }, n.prototype.destroy = function () {
                            this.source && this.source._pixiId && (delete s.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), o.prototype.destroy.call(this)
                        }, n.fromVideo = function (t, e) {
                            t._pixiId || (t._pixiId = "video_" + s.uid());
                            var i = s.BaseTextureCache[t._pixiId];
                            return i || (i = new n(t, e), s.BaseTextureCache[t._pixiId] = i), i
                        }, n.fromUrl = function (t, e) {
                            var i = document.createElement("video");
                            if (Array.isArray(t))
                                for (var o = 0; o < t.length; ++o) i.appendChild(r(t[o].src || t[o], t[o].mime));
                            else i.appendChild(r(t.src || t, t.mime));
                            return i.load(), i.play(), n.fromVideo(i, e)
                        }, n.fromUrls = n.fromUrl
                    }, {
                        "../utils": 151,
                        "./BaseTexture": 142
                    }
                ],
                147: [
                    function (t, e, i) {
                        function n() {
                            var t = this;
                            this._tick = function (e) {
                                t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(s, !0) && (t._requestId = requestAnimationFrame(t._tick)))
                            }, this._emitter = new o, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / r.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
                        }
                        var r = t("../const"),
                            o = t("eventemitter3"),
                            s = "tick";
                        Object.defineProperties(n.prototype, {
                            FPS: {
                                get: function () {
                                    return 1e3 / this.elapsedMS
                                }
                            },
                            minFPS: {
                                get: function () {
                                    return 1e3 / this._maxElapsedMS
                                },
                                set: function (t) {
                                    var e = Math.min(Math.max(0, t) / 1e3, r.TARGET_FPMS);
                                    this._maxElapsedMS = 1 / e
                                }
                            }
                        }), n.prototype._requestIfNeeded = function () {
                            null === this._requestId && this._emitter.listeners(s, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
                        }, n.prototype._cancelIfNeeded = function () {
                            null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                        }, n.prototype._startIfPossible = function () {
                            this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                        }, n.prototype.add = function (t, e) {
                            return this._emitter.on(s, t, e), this._startIfPossible(), this
                        }, n.prototype.addOnce = function (t, e) {
                            return this._emitter.once(s, t, e), this._startIfPossible(), this
                        }, n.prototype.remove = function (t, e) {
                            return this._emitter.off(s, t, e), this._emitter.listeners(s, !0) || this._cancelIfNeeded(), this
                        }, n.prototype.start = function () {
                            this.started || (this.started = !0, this._requestIfNeeded())
                        }, n.prototype.stop = function () {
                            this.started && (this.started = !1, this._cancelIfNeeded())
                        }, n.prototype.update = function (t) {
                            var e;
                            t = t || performance.now(), t > this.lastTime ? (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * r.TARGET_FPMS * this.speed, this._emitter.emit(s, this.deltaTime)) : this.deltaTime = this.elapsedMS = 0, this.lastTime = t
                        }, e.exports = n
                    }, {
                        "../const": 78,
                        eventemitter3: 16
                    }
                ],
                148: [
                    function (t, e, i) {
                        var n = t("./Ticker"),
                            r = new n;
                        r.autoStart = !0, e.exports = {
                            shared: r,
                            Ticker: n
                        }
                    }, {
                        "./Ticker": 147
                    }
                ],
                149: [
                    function (t, e, i) {
                        var n = function (t) {
                            for (var e = 6 * t, i = new Uint16Array(e), n = 0, r = 0; n < e; n += 6, r += 4) i[n + 0] = r + 0, i[n + 1] = r + 1, i[n + 2] = r + 2, i[n + 3] = r + 0, i[n + 4] = r + 2, i[n + 5] = r + 3;
                            return i
                        };
                        e.exports = n
                    }, {}
                ],
                150: [
                    function (t, e, i) {
                        var n, r = t("url"),
                            o = function (t, e) {
                                if (0 === t.indexOf("data:")) return "";
                                e = e || window.location, n || (n = document.createElement("a")), n.href = t, t = r.parse(n.href);
                                var i = !t.port && "" === e.port || t.port === e.port;
                                return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
                            };
                        e.exports = o
                    }, {
                        url: 72
                    }
                ],
                151: [
                    function (t, e, i) {
                        var n = t("../const"),
                            r = e.exports = {
                                _uid: 0,
                                _saidHello: !1,
                                EventEmitter: t("eventemitter3"),
                                pluginTarget: t("./pluginTarget"),
                                uid: function () {
                                    return ++r._uid
                                },
                                hex2rgb: function (t, e) {
                                    return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
                                },
                                hex2string: function (t) {
                                    return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
                                },
                                rgb2hex: function (t) {
                                    return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
                                },
                                getResolutionOfUrl: function (t) {
                                    var e = n.RETINA_PREFIX.exec(t);
                                    return e ? parseFloat(e[1]) : 1
                                },
                                sayHello: function (t) {
                                    if (!r._saidHello) {
                                        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                            var e = ["\n %c %c %c Pixi.js " + n.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                                            window.console.log.apply(console, e)
                                        } else window.console && window.console.log("Pixi.js " + n.VERSION + " - " + t + " - http://www.pixijs.com/");
                                        r._saidHello = !0
                                    }
                                },
                                isWebGLSupported: function () {
                                    var t = {
                                        stencil: !0,
                                        failIfMajorPerformanceCaveat: !0
                                    };
                                    try {
                                        if (!window.WebGLRenderingContext) return !1;
                                        var e = document.createElement("canvas"),
                                            i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                                            n = !(!i || !i.getContextAttributes().stencil);
                                        if (i) {
                                            var r = i.getExtension("WEBGL_lose_context");
                                            r && r.loseContext()
                                        }
                                        return i = null, n
                                    } catch (o) {
                                        return !1
                                    }
                                },
                                sign: function (t) {
                                    return t ? t < 0 ? -1 : 1 : 0
                                },
                                removeItems: function (t, e, i) {
                                    var n = t.length;
                                    if (!(e >= n || 0 === i)) {
                                        i = e + i > n ? n - e : i;
                                        for (var r = e, o = n - i; r < o; ++r) t[r] = t[r + i];
                                        t.length = o
                                    }
                                },
                                TextureCache: {},
                                BaseTextureCache: {}
                            }
                    }, {
                        "../const": 78,
                        "./pluginTarget": 153,
                        eventemitter3: 16
                    }
                ],
                152: [
                    function (t, e, i) {
                        var n = t("ismobilejs"),
                            r = function (t) {
                                return n.tablet || n.phone ? 2 : t
                            };
                        e.exports = r
                    }, {
                        ismobilejs: 17
                    }
                ],
                153: [
                    function (t, e, i) {
                        function n(t) {
                            t.__plugins = {}, t.registerPlugin = function (e, i) {
                                t.__plugins[e] = i
                            }, t.prototype.initPlugins = function () {
                                this.plugins = this.plugins || {};
                                for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
                            }, t.prototype.destroyPlugins = function () {
                                for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                                this.plugins = null
                            }
                        }
                        e.exports = {
                            mixin: function (t) {
                                n(t)
                            }
                        }
                    }, {}
                ],
                154: [
                    function (t, e, i) {
                        function n(t) {
                            var e = (new Error).stack;
                            "undefined" == typeof e || (e = e.split("\n").splice(3).join("\n"), console.groupCollapsed)
                        }
                        var r = t("./core"),
                            o = t("./mesh"),
                            s = t("./particles"),
                            a = t("./extras"),
                            h = t("./filters");
                        r.SpriteBatch = function () {
                            throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
                        }, r.AssetLoader = function () {
                            throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
                        }, Object.defineProperties(r, {
                            Stage: {
                                get: function () {
                                    return n("You do not need to use a PIXI Stage any more, you can simply render any container."), r.Container
                                }
                            },
                            DisplayObjectContainer: {
                                get: function () {
                                    return n("DisplayObjectContainer has been shortened to Container, please use Container from now on."), r.Container
                                }
                            },
                            Strip: {
                                get: function () {
                                    return n("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), o.Mesh
                                }
                            },
                            Rope: {
                                get: function () {
                                    return n("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), o.Rope
                                }
                            },
                            ParticleContainer: {
                                get: function () {
                                    return n("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), s.ParticleContainer
                                }
                            },
                            MovieClip: {
                                get: function () {
                                    return n("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), a.MovieClip
                                }
                            },
                            TilingSprite: {
                                get: function () {
                                    return n("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), a.TilingSprite
                                }
                            },
                            BitmapText: {
                                get: function () {
                                    return n("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), a.BitmapText
                                }
                            },
                            blendModes: {
                                get: function () {
                                    return n("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), r.BLEND_MODES
                                }
                            },
                            scaleModes: {
                                get: function () {
                                    return n("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), r.SCALE_MODES
                                }
                            },
                            BaseTextureCache: {
                                get: function () {
                                    return n("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), r.utils.BaseTextureCache
                                }
                            },
                            TextureCache: {
                                get: function () {
                                    return n("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), r.utils.TextureCache
                                }
                            },
                            math: {
                                get: function () {
                                    return n("The math namespace is deprecated, please access members already accessible on PIXI."), r
                                }
                            },
                            AbstractFilter: {
                                get: function () {
                                    return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"), r.Filter
                                }
                            },
                            TransformManual: {
                                get: function () {
                                    return n("TransformManual has been renamed to TransformBase, please update your pixi-spine"), r.TransformBase
                                }
                            }
                        }), r.DisplayObject.prototype.generateTexture = function (t, e, i) {
                            return n("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), t.generateTexture(this, e, i)
                        }, r.Graphics.prototype.generateTexture = function (t, e) {
                            return n("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(t, e)
                        }, r.RenderTexture.prototype.render = function (t, e, i, r) {
                            this.legacyRenderer.render(t, this, i, e, !r), n("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
                        }, r.RenderTexture.prototype.getImage = function (t) {
                            return n("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(t)
                        }, r.RenderTexture.prototype.getBase64 = function (t) {
                            return n("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(t)
                        }, r.RenderTexture.prototype.getCanvas = function (t) {
                            return n("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(t)
                        }, r.RenderTexture.prototype.getPixels = function (t) {
                            return n("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(t)
                        }, r.Sprite.prototype.setTexture = function (t) {
                            this.texture = t, n("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
                        }, a.BitmapText.prototype.setText = function (t) {
                            this.text = t, n("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
                        }, r.Text.prototype.setText = function (t) {
                            this.text = t, n("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
                        }, r.Text.prototype.setStyle = function (t) {
                            this.style = t, n("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
                        }, Object.defineProperties(r.TextStyle.prototype, {
                            font: {
                                get: function () {
                                    n("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on");
                                    var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                                    return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
                                },
                                set: function (t) {
                                    n("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), t.indexOf("italic") > 1 ? this._fontStyle = "italic" : t.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", t.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                                    var e, i = t.split(" "),
                                        r = -1;
                                    for (this._fontSize = 26, e = 0; e < i.length; ++e)
                                        if (i[e].match(/(px|pt|em|%)/)) {
                                            r = e, this._fontSize = i[e];
                                            break
                                        }
                                    for (this._fontWeight = "normal", e = 0; e < r; ++e)
                                        if (i[e].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                            this._fontWeight = i[e];
                                            break
                                        }
                                    if (r > -1 && r < i.length - 1) {
                                        for (this._fontFamily = "", e = r + 1; e < i.length; ++e) this._fontFamily += i[e] + " ";
                                        this._fontFamily = this._fontFamily.slice(0, -1)
                                    } else this._fontFamily = "Arial";
                                    this.styleID++
                                }
                            }
                        }), r.Texture.prototype.setFrame = function (t) {
                            this.frame = t, n("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
                        }, Object.defineProperties(h, {
                            AbstractFilter: {
                                get: function () {
                                    return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"), r.AbstractFilter
                                }
                            },
                            SpriteMaskFilter: {
                                get: function () {
                                    return n("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), r.SpriteMaskFilter
                                }
                            }
                        }), r.utils.uuid = function () {
                            return n("utils.uuid() is deprecated, please use utils.uid() from now on."), r.utils.uid()
                        }, r.utils.canUseNewCanvasBlendModes = function () {
                            return n("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), r.CanvasTinter.canUseMultiply
                        }
                    }, {
                        "./core": 97,
                        "./extras": 164,
                        "./filters": 175,
                        "./mesh": 191,
                        "./particles": 194
                    }
                ],
                155: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t, t.extract = this
                        }
                        var r = t("../../core"),
                            o = new r.Rectangle;
                        n.prototype.constructor = n, e.exports = n, n.prototype.image = function (t) {
                            var e = new Image;
                            return e.src = this.base64(t), e
                        }, n.prototype.base64 = function (t) {
                            return this.canvas(t).toDataURL()
                        }, n.prototype.canvas = function (t) {
                            var e, i, n, s, a = this.renderer;
                            t && (s = t instanceof r.RenderTexture ? t : a.generateTexture(t)), s ? (e = s.baseTexture._canvasRenderTarget.context, i = s.baseTexture._canvasRenderTarget.resolution, n = s.frame) : (e = a.rootContext, i = a.rootResolution, n = o, n.width = this.renderer.width, n.height = this.renderer.height);
                            var h = n.width * i,
                                l = n.height * i,
                                c = new r.CanvasRenderTarget(h, l),
                                u = e.getImageData(n.x * i, n.y * i, h, l);
                            return c.context.putImageData(u, 0, 0), c.canvas
                        }, n.prototype.pixels = function (t) {
                            var e, i, n, s, a = this.renderer;
                            return t && (s = t instanceof r.RenderTexture ? t : a.generateTexture(t)), s ? (e = s.baseTexture._canvasRenderTarget.context, i = s.baseTexture._canvasRenderTarget.resolution, n = s.frame) : (e = a.rootContext, i = a.rootResolution, n = o, n.width = a.width, n.height = a.height), e.getImageData(0, 0, n.width * i, n.height * i).data
                        }, n.prototype.destroy = function () {
                            this.renderer.extract = null, this.renderer = null
                        }, r.CanvasRenderer.registerPlugin("extract", n)
                    }, {
                        "../../core": 97
                    }
                ],
                156: [
                    function (t, e, i) {
                        e.exports = {
                            webGL: t("./webgl/WebGLExtract"),
                            canvas: t("./canvas/CanvasExtract")
                        }
                    }, {
                        "./canvas/CanvasExtract": 155,
                        "./webgl/WebGLExtract": 157
                    }
                ],
                157: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t, t.extract = this
                        }
                        var r = t("../../core"),
                            o = new r.Rectangle;
                        n.prototype.constructor = n, e.exports = n, n.prototype.image = function (t) {
                            var e = new Image;
                            return e.src = this.base64(t), e
                        }, n.prototype.base64 = function (t) {
                            return this.canvas(t).toDataURL()
                        }, n.prototype.canvas = function (t) {
                            var e, i, n, s, a = this.renderer,
                                h = !1;
                            t && (s = t instanceof r.RenderTexture ? t : this.renderer.generateTexture(t)), s ? (e = s.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = e.resolution, n = s.frame, h = !1) : (e = this.renderer.rootRenderTarget, i = e.resolution, h = !0, n = o, n.width = e.size.width, n.height = e.size.height);
                            var l = n.width * i,
                                c = n.height * i,
                                u = new r.CanvasRenderTarget(l, c);
                            if (e) {
                                a.bindRenderTarget(e);
                                var p = new Uint8Array(4 * l * c),
                                    d = a.gl;
                                d.readPixels(n.x * i, n.y * i, l, c, d.RGBA, d.UNSIGNED_BYTE, p);
                                var f = u.context.getImageData(0, 0, l, c);
                                f.data.set(p), u.context.putImageData(f, 0, 0), h && (u.context.scale(1, -1), u.context.drawImage(u.canvas, 0, -c))
                            }
                            return u.canvas
                        }, n.prototype.pixels = function (t) {
                            var e, i, n, s, a = this.renderer;
                            t && (s = t instanceof r.RenderTexture ? t : this.renderer.generateTexture(t)), s ? (e = s.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = e.resolution, n = s.frame) : (e = this.renderer.rootRenderTarget, i = e.resolution, n = o, n.width = e.size.width, n.height = e.size.height);
                            var h = n.width * i,
                                l = n.height * i,
                                c = new Uint8Array(4 * h * l);
                            if (e) {
                                a.bindRenderTarget(e);
                                var u = a.gl;
                                u.readPixels(n.x * i, n.y * i, h, l, u.RGBA, u.UNSIGNED_BYTE, c)
                            }
                            return c
                        }, n.prototype.destroy = function () {
                            this.renderer.extract = null, this.renderer = null
                        }, r.WebGLRenderer.registerPlugin("extract", n)
                    }, {
                        "../../core": 97
                    }
                ],
                158: [
                    function (t, e, i) {
                        function n(t, e) {
                            r.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
                                tint: void 0 !== e.tint ? e.tint : 16777215,
                                align: e.align || "left",
                                name: null,
                                size: 0
                            }, this.font = e.font, this._text = t, this.maxWidth = 0, this.maxLineHeight = 0, this._anchor = new o(this.makeDirty, this, 0, 0), this.dirty = !1, this.updateText()
                        }
                        var r = t("../core"),
                            o = t("../core/math/ObservablePoint");
                        n.prototype = Object.create(r.Container.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            tint: {
                                get: function () {
                                    return this._font.tint
                                },
                                set: function (t) {
                                    this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                                }
                            },
                            align: {
                                get: function () {
                                    return this._font.align
                                },
                                set: function (t) {
                                    this._font.align = t || "left", this.dirty = !0
                                }
                            },
                            anchor: {
                                get: function () {
                                    return this._anchor
                                },
                                set: function (t) {
                                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
                                }
                            },
                            font: {
                                get: function () {
                                    return this._font
                                },
                                set: function (t) {
                                    t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "),
                                        this._font.size = t.length >= 2 ? parseInt(t[0], 10) : n.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                                }
                            },
                            text: {
                                get: function () {
                                    return this._text
                                },
                                set: function (t) {
                                    t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                                }
                            }
                        }), n.prototype.updateText = function () {
                            for (var t = n.fonts[this._font.name], e = new r.Point, i = null, o = [], s = 0, a = 0, h = [], l = 0, c = this._font.size / t.size, u = -1, p = 0, d = 0, f = 0; f < this.text.length; f++) {
                                var m = this.text.charCodeAt(f);
                                if (/(\s)/.test(this.text.charAt(f)) && (u = f, p = s), /(?:\r\n|\r|\n)/.test(this.text.charAt(f))) h.push(s), a = Math.max(a, s), l++, e.x = 0, e.y += t.lineHeight, i = null;
                                else if (u !== -1 && this.maxWidth > 0 && e.x * c > this.maxWidth) r.utils.removeItems(o, u, f - u), f = u, u = -1, h.push(p), a = Math.max(a, p), l++, e.x = 0, e.y += t.lineHeight, i = null;
                                else {
                                    var g = t.chars[m];
                                    g && (i && g.kerning[i] && (e.x += g.kerning[i]), o.push({
                                        texture: g.texture,
                                        line: l,
                                        charCode: m,
                                        position: new r.Point(e.x + g.xOffset, e.y + g.yOffset)
                                    }), s = e.x + (g.texture.width + g.xOffset), e.x += g.xAdvance, d = Math.max(d, g.yOffset + g.texture.height), i = m)
                                }
                            }
                            h.push(s), a = Math.max(a, s);
                            var v = [];
                            for (f = 0; f <= l; f++) {
                                var y = 0;
                                "right" === this._font.align ? y = a - h[f] : "center" === this._font.align && (y = (a - h[f]) / 2), v.push(y)
                            }
                            var _ = o.length,
                                x = this.tint;
                            for (f = 0; f < _; f++) {
                                var b = this._glyphs[f];
                                b ? b.texture = o[f].texture : (b = new r.Sprite(o[f].texture), this._glyphs.push(b)), b.position.x = (o[f].position.x + v[o[f].line]) * c, b.position.y = o[f].position.y * c, b.scale.x = b.scale.y = c, b.tint = x, b.parent || this.addChild(b)
                            }
                            for (f = _; f < this._glyphs.length; ++f) this.removeChild(this._glyphs[f]);
                            if (this.textWidth = a * c, this.textHeight = (e.y + t.lineHeight) * c, 0 !== this.anchor.x || 0 !== this.anchor.y)
                                for (f = 0; f < _; f++) this._glyphs[f].x -= this.textWidth * this.anchor.x, this._glyphs[f].y -= this.textHeight * this.anchor.y;
                            this.maxLineHeight = d * c
                        }, n.prototype.updateTransform = function () {
                            this.validate(), this.containerUpdateTransform()
                        }, n.prototype.getLocalBounds = function () {
                            return this.validate(), r.Container.prototype.getLocalBounds.call(this)
                        }, n.prototype.validate = function () {
                            this.dirty && (this.updateText(), this.dirty = !1)
                        }, n.prototype.makeDirty = function () {
                            this.dirty = !0
                        }, n.fonts = {}
                    }, {
                        "../core": 97,
                        "../core/math/ObservablePoint": 100
                    }
                ],
                159: [
                    function (t, e, i) {
                        function n(t) {
                            r.Sprite.call(this, t[0] instanceof r.Texture ? t[0] : t[0].texture), this._textures = null, this._durations = null, this.textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
                        }
                        var r = t("../core");
                        n.prototype = Object.create(r.Sprite.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            totalFrames: {
                                get: function () {
                                    return this._textures.length
                                }
                            },
                            textures: {
                                get: function () {
                                    return this._textures
                                },
                                set: function (t) {
                                    if (t[0] instanceof r.Texture) this._textures = t, this._durations = null;
                                    else {
                                        this._textures = [], this._durations = [];
                                        for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                                    }
                                }
                            },
                            currentFrame: {
                                get: function () {
                                    var t = Math.floor(this._currentTime) % this._textures.length;
                                    return t < 0 && (t += this._textures.length), t
                                }
                            }
                        }), n.prototype.stop = function () {
                            this.playing && (this.playing = !1, r.ticker.shared.remove(this.update, this))
                        }, n.prototype.play = function () {
                            this.playing || (this.playing = !0, r.ticker.shared.add(this.update, this))
                        }, n.prototype.gotoAndStop = function (t) {
                            this.stop(), this._currentTime = t, this._texture = this._textures[this.currentFrame], this._textureID = -1
                        }, n.prototype.gotoAndPlay = function (t) {
                            this._currentTime = t, this.play()
                        }, n.prototype.update = function (t) {
                            var e = this.animationSpeed * t;
                            if (null !== this._durations) {
                                var i = this._currentTime % 1 * this._durations[this.currentFrame];
                                for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];
                                var n = Math.sign(this.animationSpeed * t);
                                for (this._currentTime = Math.floor(this._currentTime) ; i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * n, this._currentTime += n;
                                this._currentTime += i / this._durations[this.currentFrame]
                            } else this._currentTime += e;
                            this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : (this._texture = this._textures[this.currentFrame], this._textureID = -1)
                        }, n.prototype.destroy = function () {
                            this.stop(), r.Sprite.prototype.destroy.call(this)
                        }, n.fromFrames = function (t) {
                            for (var e = [], i = 0; i < t.length; ++i) e.push(r.Texture.fromFrame(t[i]));
                            return new n(e)
                        }, n.fromImages = function (t) {
                            for (var e = [], i = 0; i < t.length; ++i) e.push(r.Texture.fromImage(t[i]));
                            return new n(e)
                        }
                    }, {
                        "../core": 97
                    }
                ],
                160: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            r.Sprite.call(this, t), this.tileScale = new r.Point(1, 1), this.tilePosition = new r.Point(0, 0), this._width = e || 100, this._height = i || 100, this._uvs = new r.TextureUvs, this._canvasPattern = null, this._glDatas = []
                        }
                        var r = t("../core"),
                            o = new r.Point,
                            s = t("../core/textures/Texture"),
                            a = t("../core/sprites/canvas/CanvasTinter"),
                            h = t("./webgl/TilingShader"),
                            l = new Float32Array(4);
                        n.prototype = Object.create(r.Sprite.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            width: {
                                get: function () {
                                    return this._width
                                },
                                set: function (t) {
                                    this._width = t
                                }
                            },
                            height: {
                                get: function () {
                                    return this._height
                                },
                                set: function (t) {
                                    this._height = t
                                }
                            }
                        }), n.prototype._onTextureUpdate = function () { }, n.prototype._renderWebGL = function (t) {
                            var e = this._texture;
                            if (e && e._uvs) {
                                t.flush();
                                var i = t.gl,
                                    n = this._glDatas[t.CONTEXT_UID];
                                n || (n = {
                                    shader: new h(i),
                                    quad: new r.Quad(i)
                                }, this._glDatas[t.CONTEXT_UID] = n, n.quad.initVao(n.shader));
                                var o = n.quad.vertices;
                                o[0] = o[6] = this._width * -this.anchor.x, o[1] = o[3] = this._height * -this.anchor.y, o[2] = o[4] = this._width * (1 - this.anchor.x), o[5] = o[7] = this._height * (1 - this.anchor.y), n.quad.upload(), t.bindShader(n.shader);
                                var s = e._uvs,
                                    a = e._frame.width,
                                    c = e._frame.height,
                                    u = e.baseTexture.width,
                                    p = e.baseTexture.height,
                                    d = n.shader.uniforms.uPixelSize;
                                d[0] = 1 / u, d[1] = 1 / p, n.shader.uniforms.uPixelSize = d;
                                var f = n.shader.uniforms.uFrame;
                                f[0] = s.x0, f[1] = s.y0, f[2] = s.x1 - s.x0, f[3] = s.y2 - s.y0, n.shader.uniforms.uFrame = f;
                                var m = n.shader.uniforms.uTransform;
                                m[0] = this.tilePosition.x % (a * this.tileScale.x) / this._width, m[1] = this.tilePosition.y % (c * this.tileScale.y) / this._height, m[2] = u / this._width * this.tileScale.x, m[3] = p / this._height * this.tileScale.y, n.shader.uniforms.uTransform = m, n.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                                var g = l;
                                r.utils.hex2rgb(this.tint, g), g[3] = this.worldAlpha, n.shader.uniforms.uColor = g, t.bindTexture(this._texture, 0), t.state.setBlendMode(this.blendMode), n.quad.draw()
                            }
                        }, n.prototype._renderCanvas = function (t) {
                            var e = this._texture;
                            if (e.baseTexture.hasLoaded) {
                                var i = t.context,
                                    n = this.worldTransform,
                                    o = t.resolution,
                                    s = e.baseTexture,
                                    h = this.tilePosition.x / this.tileScale.x % e._frame.width,
                                    l = this.tilePosition.y / this.tileScale.y % e._frame.height;
                                if (!this._canvasPattern) {
                                    var c = new r.CanvasRenderTarget(e._frame.width, e._frame.height);
                                    16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.getTintedTexture(this, this.tint)), c.context.drawImage(this.tintedTexture, 0, 0)) : c.context.drawImage(s.source, -e._frame.x, -e._frame.y), this._canvasPattern = c.context.createPattern(c.canvas, "repeat")
                                }
                                i.globalAlpha = this.worldAlpha, i.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), i.scale(this.tileScale.x, this.tileScale.y), i.translate(h + this.anchor.x * -this._width, l + this.anchor.y * -this._height);
                                var u = t.blendModes[this.blendMode];
                                u !== t.context.globalCompositeOperation && (i.globalCompositeOperation = u), i.fillStyle = this._canvasPattern, i.fillRect(-h, -l, this._width / this.tileScale.x, this._height / this.tileScale.y)
                            }
                        }, n.prototype.getBounds = function () {
                            var t, e, i, n, r = this._width,
                                o = this._height,
                                s = r * (1 - this.anchor.x),
                                a = r * -this.anchor.x,
                                h = o * (1 - this.anchor.y),
                                l = o * -this.anchor.y,
                                c = this.worldTransform,
                                u = c.a,
                                p = c.b,
                                d = c.c,
                                f = c.d,
                                m = c.tx,
                                g = c.ty,
                                v = u * a + d * l + m,
                                y = f * l + p * a + g,
                                _ = u * s + d * l + m,
                                x = f * l + p * s + g,
                                b = u * s + d * h + m,
                                w = f * h + p * s + g,
                                S = u * a + d * h + m,
                                T = f * h + p * a + g;
                            t = v, t = _ < t ? _ : t, t = b < t ? b : t, t = S < t ? S : t, i = y, i = x < i ? x : i, i = w < i ? w : i, i = T < i ? T : i, e = v, e = _ > e ? _ : e, e = b > e ? b : e, e = S > e ? S : e, n = y, n = x > n ? x : n, n = w > n ? w : n, n = T > n ? T : n;
                            var M = this._bounds;
                            return M.x = t, M.width = e - t, M.y = i, M.height = n - i, this._currentBounds = M, M
                        }, n.prototype.containsPoint = function (t) {
                            this.worldTransform.applyInverse(t, o);
                            var e, i = this._width,
                                n = this._height,
                                r = -i * this.anchor.x;
                            return o.x > r && o.x < r + i && (e = -n * this.anchor.y, o.y > e && o.y < e + n)
                        }, n.prototype.destroy = function () {
                            r.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
                        }, n.from = function (t, e, i) {
                            return new n(s.from(t), e, i)
                        }, n.fromFrame = function (t, e, i) {
                            var o = r.utils.TextureCache[t];
                            if (!o) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                            return new n(o, e, i)
                        }, n.fromImage = function (t, e, i, o, s) {
                            return new n(r.Texture.fromImage(t, o, s), e, i)
                        }
                    }, {
                        "../core": 97,
                        "../core/sprites/canvas/CanvasTinter": 135,
                        "../core/textures/Texture": 144,
                        "./webgl/TilingShader": 165
                    }
                ],
                161: [
                    function (t, e, i) {
                        var n = t("../core"),
                            r = n.DisplayObject,
                            o = new n.Matrix;
                        r.prototype._cacheAsBitmap = !1, r.prototype._cacheData = !1;
                        var s = function () {
                            this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
                        };
                        Object.defineProperties(r.prototype, {
                            cacheAsBitmap: {
                                get: function () {
                                    return this._cacheAsBitmap
                                },
                                set: function (t) {
                                    if (this._cacheAsBitmap !== t) {
                                        this._cacheAsBitmap = t;
                                        var e;
                                        t ? (this._cacheData || (this._cacheData = new s), e = this._cacheData, e.originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
                                    }
                                }
                            }
                        }), r.prototype._renderCachedWebGL = function (t) {
                            !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
                        }, r.prototype._initCachedDisplayObject = function (t) {
                            if (!this._cacheData || !this._cacheData.sprite) {
                                var e = this.alpha;
                                this.alpha = 1, t.currentRenderer.flush();
                                var i = this.getLocalBounds().clone();
                                if (this._filters) {
                                    var r = this._filters[0].padding;
                                    i.pad(r)
                                }
                                var s = t._activeRenderTarget,
                                    a = t.filterManager.filterStack,
                                    h = n.RenderTexture.create(0 | i.width, 0 | i.height),
                                    l = o;
                                l.tx = -i.x, l.ty = -i.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, h, !0, l, !0), t.bindRenderTarget(s), t.filterManager.filterStack = a, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
                                var c = new n.Sprite(h);
                                c.transform.worldTransform = this.transform.worldTransform, c.anchor.x = -(i.x / i.width), c.anchor.y = -(i.y / i.height), c.alpha = e, c._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = c, this.transform._parentID = -1, this.updateTransform(), this.containsPoint = c.containsPoint.bind(c)
                            }
                        }, r.prototype._renderCachedCanvas = function (t) {
                            !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t))
                        }, r.prototype._initCachedDisplayObjectCanvas = function (t) {
                            if (!this._cacheData || !this._cacheData.sprite) {
                                var e = this.getLocalBounds(),
                                    i = this.alpha;
                                this.alpha = 1;
                                var r = t.context,
                                    s = new n.RenderTexture.create(0 | e.width, 0 | e.height),
                                    a = o;
                                this.transform.worldTransform.copy(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, s, !0, a, !1), t.context = r, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
                                var h = new n.Sprite(s);
                                h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -(e.x / e.width), h.anchor.y = -(e.y / e.height), h._bounds = this._bounds, h.alpha = i, this.updateTransform(), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = h, this.containsPoint = h.containsPoint.bind(h)
                            }
                        }, r.prototype._calculateCachedBounds = function () {
                            return this._cacheData.sprite._calculateBounds()
                        }, r.prototype._getCachedLocalBounds = function () {
                            return this._cacheData.sprite.getLocalBounds()
                        }, r.prototype._destroyCachedDisplayObject = function () {
                            this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null
                        }, r.prototype._cacheAsBitmapDestroy = function () {
                            this.cacheAsBitmap = !1, this.destroy()
                        }
                    }, {
                        "../core": 97
                    }
                ],
                162: [
                    function (t, e, i) {
                        var n = t("../core");
                        n.DisplayObject.prototype.name = null, n.Container.prototype.getChildByName = function (t) {
                            for (var e = 0; e < this.children.length; e++)
                                if (this.children[e].name === t) return this.children[e];
                            return null
                        }
                    }, {
                        "../core": 97
                    }
                ],
                163: [
                    function (t, e, i) {
                        var n = t("../core");
                        n.DisplayObject.prototype.getGlobalPosition = function (t) {
                            return t = t || new n.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t
                        }
                    }, {
                        "../core": 97
                    }
                ],
                164: [
                    function (t, e, i) {
                        t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = {
                            MovieClip: t("./MovieClip"),
                            TilingSprite: t("./TilingSprite"),
                            BitmapText: t("./BitmapText")
                        }
                    }, {
                        "./BitmapText": 158,
                        "./MovieClip": 159,
                        "./TilingSprite": 160,
                        "./cacheAsBitmap": 161,
                        "./getChildByName": 162,
                        "./getGlobalPosition": 163
                    }
                ],
                165: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n")
                        }
                        var r = t("../../core/Shader");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n
                    }, {
                        "../../core/Shader": 77
                    }
                ],
                166: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            r.Filter.call(this), this.blurXFilter = new o, this.blurYFilter = new s, this.resolution = 1, this.padding = 0, this.resolution = i || 1, this.quality = e || 4, this.blur = t || 8
                        }
                        var r = t("../../core"),
                            o = t("./BlurXFilter"),
                            s = t("./BlurYFilter");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.apply = function (t, e, i) {
                            var n = t.getRenderTarget(!0);
                            this.blurXFilter.apply(t, e, n, !0), this.blurYFilter.apply(t, n, i, !1), t.returnRenderTarget(n)
                        }, Object.defineProperties(n.prototype, {
                            blur: {
                                get: function () {
                                    return this.blurXFilter.blur
                                },
                                set: function (t) {
                                    this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                                }
                            },
                            quality: {
                                get: function () {
                                    return this.blurXFilter.quality
                                },
                                set: function (t) {
                                    this.blurXFilter.quality = this.blurYFilter.quality = t
                                }
                            },
                            blurX: {
                                get: function () {
                                    return this.blurXFilter.blur
                                },
                                set: function (t) {
                                    this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                                }
                            },
                            blurY: {
                                get: function () {
                                    return this.blurYFilter.blur
                                },
                                set: function (t) {
                                    this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                                }
                            }
                        })
                    }, {
                        "../../core": 97,
                        "./BlurXFilter": 167,
                        "./BlurYFilter": 168
                    }
                ],
                167: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            var n = o(5, !0),
                                a = s(5);
                            r.Filter.call(this, n, a), this.resolution = i || 1, this._quality = 0, this.quality = e || 4, this.strength = t || 8, this.firstRun = !0
                        }
                        var r = t("../../core"),
                            o = t("./generateBlurVertSource"),
                            s = t("./generateBlurFragSource"),
                            a = t("./getMaxBlurKernelSize");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.apply = function (t, e, i, n) {
                            if (this.firstRun) {
                                var r = t.renderer.gl,
                                    h = a(r);
                                this.vertexSrc = o(h, !0), this.fragmentSrc = s(h), this.firstRun = !1
                            }
                            if (this.uniforms.strength = 1 / i.size.width * (i.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, n);
                            else {
                                for (var l = t.getRenderTarget(!0), c = e, u = l, p = 0; p < this.passes - 1; p++) {
                                    t.applyFilter(this, c, u, !0);
                                    var d = u;
                                    u = c, c = d
                                }
                                t.applyFilter(this, c, i, n), t.returnRenderTarget(l)
                            }
                        }, Object.defineProperties(n.prototype, {
                            blur: {
                                get: function () {
                                    return this.strength
                                },
                                set: function (t) {
                                    this.padding = 2 * Math.abs(t), this.strength = t
                                }
                            },
                            quality: {
                                get: function () {
                                    return this._quality
                                },
                                set: function (t) {
                                    this._quality = t, this.passes = t
                                }
                            }
                        })
                    }, {
                        "../../core": 97,
                        "./generateBlurFragSource": 169,
                        "./generateBlurVertSource": 170,
                        "./getMaxBlurKernelSize": 171
                    }
                ],
                168: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            var n = o(5, !1),
                                a = s(5);
                            r.Filter.call(this, n, a), this.resolution = i || 1, this._quality = 0, this.quality = e || 4, this.strength = t || 8, this.firstRun = !0
                        }
                        var r = t("../../core"),
                            o = t("./generateBlurVertSource"),
                            s = t("./generateBlurFragSource"),
                            a = t("./getMaxBlurKernelSize");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.apply = function (t, e, i, n) {
                            if (this.firstRun) {
                                var r = t.renderer.gl,
                                    h = a(r);
                                this.vertexSrc = o(h, !1), this.fragmentSrc = s(h), this.firstRun = !1
                            }
                            if (this.uniforms.strength = 1 / i.size.height * (i.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, n);
                            else {
                                for (var l = t.getRenderTarget(!0), c = e, u = l, p = 0; p < this.passes - 1; p++) {
                                    t.applyFilter(this, c, u, !0);
                                    var d = u;
                                    u = c, c = d
                                }
                                t.applyFilter(this, c, i, n), t.returnRenderTarget(l)
                            }
                        }, Object.defineProperties(n.prototype, {
                            blur: {
                                get: function () {
                                    return this.strength
                                },
                                set: function (t) {
                                    this.padding = 2 * Math.abs(t), this.strength = t
                                }
                            },
                            quality: {
                                get: function () {
                                    return this._quality
                                },
                                set: function (t) {
                                    this._quality = t, this.passes = t
                                }
                            }
                        })
                    }, {
                        "../../core": 97,
                        "./generateBlurFragSource": 169,
                        "./generateBlurVertSource": 170,
                        "./getMaxBlurKernelSize": 171
                    }
                ],
                169: [
                    function (t, e, i) {
                        var n = {
                            5: [.153388, .221461, .250301],
                            7: [.071303, .131514, .189879, .214607],
                            9: [.028532, .067234, .124009, .179044, .20236],
                            11: [.0093, .028002, .065984, .121703, .175713, .198596],
                            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
                        },
                            r = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "\tgl_FragColor = vec4(0.0);", "\t%blur%", "}"].join("\n"),
                            o = function (t) {
                                for (var e, i = n[t], o = i.length, s = r, a = "", h = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", l = 0; l < t; l++) {
                                    var c = h.replace("%index%", l);
                                    e = l, l >= o && (e = t - l - 1), c = c.replace("%value%", i[e]), a += c, a += "\n"
                                }
                                return s = s.replace("%blur%", a), s = s.replace("%size%", t)
                            };
                        e.exports = o
                    }, {}
                ],
                170: [
                    function (t, e, i) {
                        var n = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n"),
                            r = function (t, e) {
                                var i, r, o = Math.ceil(t / 2),
                                    s = n,
                                    a = "";
                                i = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                                for (var h = 0; h < t; h++) {
                                    var l = i.replace("%index%", h);
                                    r = h, h >= o && (r = t - h - 1), l = l.replace("%sampleIndex%", h - (o - 1) + ".0"), a += l, a += "\n"
                                }
                                return s = s.replace("%blur%", a), s = s.replace("%size%", t)
                            };
                        e.exports = r
                    }, {}
                ],
                171: [
                    function (t, e, i) {
                        var n = function (t) {
                            for (var e = t.getParameter(t.MAX_VARYING_VECTORS), i = 15; i > e;) i -= 2;
                            return i
                        };
                        e.exports = n
                    }, {}
                ],
                172: [
                    function (t, e, i) {
                        function n() {
                            r.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n"), this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
                        }
                        var r = t("../../core");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n, n.prototype._loadMatrix = function (t, e) {
                            e = !!e;
                            var i = t;
                            e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
                        }, n.prototype._multiply = function (t, e, i) {
                            return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19], t
                        }, n.prototype._colorMatrix = function (t) {
                            var e = new Float32Array(t);
                            return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
                        }, n.prototype.brightness = function (t, e) {
                            var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, n.prototype.greyscale = function (t, e) {
                            var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, n.prototype.grayscale = n.prototype.greyscale, n.prototype.blackAndWhite = function (t) {
                            var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.hue = function (t, e) {
                            t = (t || 0) / 180 * Math.PI;
                            var i = Math.cos(t),
                                n = Math.sin(t),
                                r = Math.sqrt,
                                o = 1 / 3,
                                s = r(o),
                                a = i + (1 - i) * o,
                                h = o * (1 - i) - s * n,
                                l = o * (1 - i) + s * n,
                                c = o * (1 - i) + s * n,
                                u = i + o * (1 - i),
                                p = o * (1 - i) - s * n,
                                d = o * (1 - i) - s * n,
                                f = o * (1 - i) + s * n,
                                m = i + o * (1 - i),
                                g = [a, h, l, 0, 0, c, u, p, 0, 0, d, f, m, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(g, e)
                        }, n.prototype.contrast = function (t, e) {
                            var i = (t || 0) + 1,
                                n = -128 * (i - 1),
                                r = [i, 0, 0, 0, n, 0, i, 0, 0, n, 0, 0, i, 0, n, 0, 0, 0, 1, 0];
                            this._loadMatrix(r, e)
                        }, n.prototype.saturate = function (t, e) {
                            var i = 2 * (t || 0) / 3 + 1,
                                n = (i - 1) * -.5,
                                r = [i, n, n, 0, 0, n, i, n, 0, 0, n, n, i, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(r, e)
                        }, n.prototype.desaturate = function () {
                            this.saturate(-1)
                        }, n.prototype.negative = function (t) {
                            var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.sepia = function (t) {
                            var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.technicolor = function (t) {
                            var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.polaroid = function (t) {
                            var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.toBGR = function (t) {
                            var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.kodachrome = function (t) {
                            var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.browni = function (t) {
                            var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.vintage = function (t) {
                            var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.colorTone = function (t, e, i, n, r) {
                            t = t || .2, e = e || .15, i = i || 16770432, n = n || 3375104;
                            var o = (i >> 16 & 255) / 255,
                                s = (i >> 8 & 255) / 255,
                                a = (255 & i) / 255,
                                h = (n >> 16 & 255) / 255,
                                l = (n >> 8 & 255) / 255,
                                c = (255 & n) / 255,
                                u = [.3, .59, .11, 0, 0, o, s, a, t, 0, h, l, c, e, 0, o - h, s - l, a - c, 0, 0];
                            this._loadMatrix(u, r)
                        }, n.prototype.night = function (t, e) {
                            t = t || .1;
                            var i = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, n.prototype.predator = function (t, e) {
                            var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                            this._loadMatrix(i, e)
                        }, n.prototype.lsd = function (t) {
                            var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(e, t)
                        }, n.prototype.reset = function () {
                            var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                            this._loadMatrix(t, !1)
                        }, Object.defineProperties(n.prototype, {
                            matrix: {
                                get: function () {
                                    return this.uniforms.m
                                },
                                set: function (t) {
                                    this.uniforms.m = t
                                }
                            }
                        })
                    }, {
                        "../../core": 97
                    }
                ],
                173: [
                    function (t, e, i) {
                        function n(t, e) {
                            var i = new r.Matrix;
                            t.renderable = !1, r.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"), this.maskSprite = t, this.maskMatrix = i, this.uniforms.mapSampler = t.texture, this.uniforms.filterMatrix = i.toArray(!0), this.uniforms.scale = {
                                x: 1,
                                y: 1
                            }, null !== e && void 0 !== e || (e = 20), this.scale = new r.Point(e, e)
                        }
                        var r = t("../../core");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.apply = function (t, e, i) {
                            var n = 1 / i.destinationFrame.width * (i.size.width / e.size.width);
                            this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x * n, this.uniforms.scale.y = this.scale.y * n, t.applyFilter(this, e, i)
                        }, Object.defineProperties(n.prototype, {
                            map: {
                                get: function () {
                                    return this.uniforms.mapSampler
                                },
                                set: function (t) {
                                    this.uniforms.mapSampler = t
                                }
                            }
                        })
                    }, {
                        "../../core": 97
                    }
                ],
                174: [
                    function (t, e, i) {
                        function n() {
                            r.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n');
                        }
                        var r = t("../../core");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n
                    }, {
                        "../../core": 97
                    }
                ],
                175: [
                    function (t, e, i) {
                        e.exports = {
                            FXAAFilter: t("./fxaa/FXAAFilter"),
                            NoiseFilter: t("./noise/NoiseFilter"),
                            DisplacementFilter: t("./displacement/DisplacementFilter"),
                            BlurFilter: t("./blur/BlurFilter"),
                            BlurXFilter: t("./blur/BlurXFilter"),
                            BlurYFilter: t("./blur/BlurYFilter"),
                            ColorMatrixFilter: t("./colormatrix/ColorMatrixFilter"),
                            VoidFilter: t("./void/VoidFilter")
                        }
                    }, {
                        "./blur/BlurFilter": 166,
                        "./blur/BlurXFilter": 167,
                        "./blur/BlurYFilter": 168,
                        "./colormatrix/ColorMatrixFilter": 172,
                        "./displacement/DisplacementFilter": 173,
                        "./fxaa/FXAAFilter": 174,
                        "./noise/NoiseFilter": 176,
                        "./void/VoidFilter": 177
                    }
                ],
                176: [
                    function (t, e, i) {
                        function n() {
                            r.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n"), this.noise = .5
                        }
                        var r = t("../../core");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            noise: {
                                get: function () {
                                    return this.uniforms.noise
                                },
                                set: function (t) {
                                    this.uniforms.noise = t
                                }
                            }
                        })
                    }, {
                        "../../core": 97
                    }
                ],
                177: [
                    function (t, e, i) {
                        function n() {
                            r.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"), this.glShaderKey = "void"
                        }
                        var r = t("../../core");
                        n.prototype = Object.create(r.Filter.prototype), n.prototype.constructor = n, e.exports = n
                    }, {
                        "../../core": 97
                    }
                ],
                178: [
                    function (t, e, i) {
                        function n() {
                            this.global = new r.Point, this.target = null, this.originalEvent = null
                        }
                        var r = t("../core");
                        n.prototype.constructor = n, e.exports = n, n.prototype.getLocalPosition = function (t, e, i) {
                            return t.worldTransform.applyInverse(i || this.global, e)
                        }
                    }, {
                        "../core": 97
                    }
                ],
                179: [
                    function (t, e, i) {
                        function n(t, e) {
                            s.call(this), e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new o, this.mouse.global.set(-999999), this.eventData = {
                                stopped: !1,
                                target: null,
                                type: null,
                                data: this.mouse,
                                stopPropagation: function () {
                                    this.stopped = !0
                                }
                            }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.defaultCursorStyle = "inherit", this.currentCursorStyle = "inherit", this._tempPoint = new r.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
                        }
                        var r = t("../core"),
                            o = t("./InteractionData"),
                            s = t("eventemitter3");
                        Object.assign(r.DisplayObject.prototype, t("./interactiveTarget")), n.prototype = Object.create(s.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.setTargetElement = function (t, e) {
                            this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents()
                        }, n.prototype.addEvents = function () {
                            this.interactionDOMElement && (r.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
                        }, n.prototype.removeEvents = function () {
                            this.interactionDOMElement && (r.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
                        }, n.prototype.update = function (t) {
                            if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                                if (this.didMove) return void (this.didMove = !1);
                                this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                            }
                        }, n.prototype.dispatchEvent = function (t, e, i) {
                            i.stopped || (i.target = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
                        }, n.prototype.mapPositionToPoint = function (t, e, i) {
                            var n;
                            n = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }, t.x = (e - n.left) * (this.interactionDOMElement.width / n.width) / this.resolution, t.y = (i - n.top) * (this.interactionDOMElement.height / n.height) / this.resolution
                        }, n.prototype.processInteractive = function (t, e, i, n, r) {
                            if (!e || !e.visible) return !1;
                            var o = !1,
                                s = r = e.interactive || r;
                            if (e.hitArea && (s = !1), n && e._mask && (e._mask.containsPoint(t) || (n = !1)), n && e.filterArea && (e.filterArea.contains(t.x, t.y) || (n = !1)), e.interactiveChildren)
                                for (var a = e.children, h = a.length - 1; h >= 0; h--) {
                                    var l = a[h];
                                    if (this.processInteractive(t, l, i, n, s)) {
                                        if (!l.parent) continue;
                                        o = !0, s = !1, n = !1
                                    }
                                }
                            return r && (n && !o && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), o = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (o = e.containsPoint(t))), e.interactive && i(e, o)), o
                        }, n.prototype.onMouseDown = function (t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0);
                            var e = 2 === t.button || 3 === t.which;
                            this.emit(e ? "rightdown" : "mousedown", this.eventData)
                        }, n.prototype.processMouseDown = function (t, e) {
                            var i = this.mouse.originalEvent,
                                n = 2 === i.button || 3 === i.which;
                            e && (t[n ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, n ? "rightdown" : "mousedown", this.eventData))
                        }, n.prototype.onMouseUp = function (t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0);
                            var e = 2 === t.button || 3 === t.which;
                            this.emit(e ? "rightup" : "mouseup", this.eventData)
                        }, n.prototype.processMouseUp = function (t, e) {
                            var i = this.mouse.originalEvent,
                                n = 2 === i.button || 3 === i.which,
                                r = n ? "_isRightDown" : "_isLeftDown";
                            e ? (this.dispatchEvent(t, n ? "rightup" : "mouseup", this.eventData), t[r] && (t[r] = !1, this.dispatchEvent(t, n ? "rightclick" : "click", this.eventData))) : t[r] && (t[r] = !1, this.dispatchEvent(t, n ? "rightupoutside" : "mouseupoutside", this.eventData))
                        }, n.prototype.onMouseMove = function (t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.emit("mousemove", this.eventData), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                        }, n.prototype.processMouseMove = function (t, e) {
                            this.processMouseOverOut(t, e), this.moveWhenInside && !e || this.dispatchEvent(t, "mousemove", this.eventData)
                        }, n.prototype.onMouseOut = function (t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = this.defaultCursorStyle, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1), this.emit("mouseout", this.eventData)
                        }, n.prototype.processMouseOverOut = function (t, e) {
                            e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData))
                        }, n.prototype.onMouseOver = function (t) {
                            this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.emit("mouseover", this.eventData)
                        }, n.prototype.onTouchStart = function (t) {
                            this.autoPreventDefault && t.preventDefault();
                            for (var e = t.changedTouches, i = e.length, n = 0; n < i; n++) {
                                var r = e[n],
                                    o = this.getTouchData(r);
                                o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.emit("touchstart", this.eventData), this.returnTouchData(o)
                            }
                        }, n.prototype.processTouchStart = function (t, e) {
                            e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
                        }, n.prototype.onTouchEnd = function (t) {
                            this.autoPreventDefault && t.preventDefault();
                            for (var e = t.changedTouches, i = e.length, n = 0; n < i; n++) {
                                var r = e[n],
                                    o = this.getTouchData(r);
                                o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.emit("touchend", this.eventData), this.returnTouchData(o)
                            }
                        }, n.prototype.processTouchEnd = function (t, e) {
                            e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
                        }, n.prototype.onTouchMove = function (t) {
                            this.autoPreventDefault && t.preventDefault();
                            for (var e = t.changedTouches, i = e.length, n = 0; n < i; n++) {
                                var r = e[n],
                                    o = this.getTouchData(r);
                                o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside), this.emit("touchmove", this.eventData), this.returnTouchData(o)
                            }
                        }, n.prototype.processTouchMove = function (t, e) {
                            this.moveWhenInside && !e || this.dispatchEvent(t, "touchmove", this.eventData)
                        }, n.prototype.getTouchData = function (t) {
                            var e = this.interactiveDataPool.pop();
                            return e || (e = new o), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
                        }, n.prototype.returnTouchData = function (t) {
                            this.interactiveDataPool.push(t)
                        }, n.prototype.destroy = function () {
                            this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onMouseOver = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
                        }, r.WebGLRenderer.registerPlugin("interaction", n), r.CanvasRenderer.registerPlugin("interaction", n)
                    }, {
                        "../core": 97,
                        "./InteractionData": 178,
                        "./interactiveTarget": 181,
                        eventemitter3: 16
                    }
                ],
                180: [
                    function (t, e, i) {
                        e.exports = {
                            InteractionData: t("./InteractionData"),
                            InteractionManager: t("./InteractionManager"),
                            interactiveTarget: t("./interactiveTarget")
                        }
                    }, {
                        "./InteractionData": 178,
                        "./InteractionManager": 179,
                        "./interactiveTarget": 181
                    }
                ],
                181: [
                    function (t, e, i) {
                        var n = {
                            interactive: !1,
                            interactiveChildren: !0,
                            hitArea: null,
                            buttonMode: !1,
                            defaultCursor: "pointer",
                            _over: !1,
                            _isLeftDown: !1,
                            _isRightDown: !1,
                            _touchDown: !1
                        };
                        e.exports = n
                    }, {}
                ],
                182: [
                    function (t, e, i) {
                        function n(t, e) {
                            var i = {},
                                n = t.data.getElementsByTagName("info")[0],
                                r = t.data.getElementsByTagName("common")[0];
                            i.font = n.getAttribute("face"), i.size = parseInt(n.getAttribute("size"), 10), i.lineHeight = parseInt(r.getAttribute("lineHeight"), 10), i.chars = {};
                            for (var a = t.data.getElementsByTagName("char"), h = 0; h < a.length; h++) {
                                var l = parseInt(a[h].getAttribute("id"), 10),
                                    c = new o.Rectangle(parseInt(a[h].getAttribute("x"), 10) + e.frame.x, parseInt(a[h].getAttribute("y"), 10) + e.frame.y, parseInt(a[h].getAttribute("width"), 10), parseInt(a[h].getAttribute("height"), 10));
                                i.chars[l] = {
                                    xOffset: parseInt(a[h].getAttribute("xoffset"), 10),
                                    yOffset: parseInt(a[h].getAttribute("yoffset"), 10),
                                    xAdvance: parseInt(a[h].getAttribute("xadvance"), 10),
                                    kerning: {},
                                    texture: new o.Texture(e.baseTexture, c)
                                }
                            }
                            var u = t.data.getElementsByTagName("kerning");
                            for (h = 0; h < u.length; h++) {
                                var p = parseInt(u[h].getAttribute("first"), 10),
                                    d = parseInt(u[h].getAttribute("second"), 10),
                                    f = parseInt(u[h].getAttribute("amount"), 10);
                                i.chars[d] && (i.chars[d].kerning[p] = f)
                            }
                            t.bitmapFont = i, s.BitmapText.fonts[i.font] = i
                        }
                        var r = t("resource-loader").Resource,
                            o = t("../core"),
                            s = t("../extras"),
                            a = t("path");
                        e.exports = function () {
                            return function (t, e) {
                                if (!t.data || !t.isXml) return e();
                                if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return e();
                                var i = t.isDataUrl ? "" : a.dirname(t.url);
                                t.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/"), i = i.replace(this.baseUrl, ""))), i && "/" !== i.charAt(i.length - 1) && (i += "/");
                                var s = i + t.data.getElementsByTagName("page")[0].getAttribute("file");
                                if (o.utils.TextureCache[s]) n(t, o.utils.TextureCache[s]), e();
                                else {
                                    var h = {
                                        crossOrigin: t.crossOrigin,
                                        loadType: r.LOAD_TYPE.IMAGE,
                                        metadata: t.metadata.imageMetadata
                                    };
                                    this.add(t.name + "_image", s, h, function (i) {
                                        n(t, i.texture), e()
                                    })
                                }
                            }
                        }
                    }, {
                        "../core": 97,
                        "../extras": 164,
                        path: 44,
                        "resource-loader": 69
                    }
                ],
                183: [
                    function (t, e, i) {
                        e.exports = {
                            Loader: t("./loader"),
                            bitmapFontParser: t("./bitmapFontParser"),
                            spritesheetParser: t("./spritesheetParser"),
                            textureParser: t("./textureParser"),
                            Resource: t("resource-loader").Resource
                        }
                    }, {
                        "./bitmapFontParser": 182,
                        "./loader": 184,
                        "./spritesheetParser": 185,
                        "./textureParser": 186,
                        "resource-loader": 69
                    }
                ],
                184: [
                    function (t, e, i) {
                        function n(t, e) {
                            r.call(this, t, e);
                            for (var i = 0; i < n._pixiMiddleware.length; ++i) this.use(n._pixiMiddleware[i]())
                        }
                        var r = t("resource-loader"),
                            o = t("./textureParser"),
                            s = t("./spritesheetParser"),
                            a = t("./bitmapFontParser");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n._pixiMiddleware = [r.middleware.parsing.blob, o, s, a], n.addPixiMiddleware = function (t) {
                            n._pixiMiddleware.push(t)
                        };
                        var h = r.Resource;
                        h.setExtensionXhrType("fnt", h.XHR_RESPONSE_TYPE.DOCUMENT)
                    }, {
                        "./bitmapFontParser": 182,
                        "./spritesheetParser": 185,
                        "./textureParser": 186,
                        "resource-loader": 69
                    }
                ],
                185: [
                    function (t, e, i) {
                        var n = t("resource-loader").Resource,
                            r = t("path"),
                            o = t("../core"),
                            s = 1e3;
                        e.exports = function () {
                            return function (t, e) {
                                var i, a = t.name + "_image";
                                if (!t.data || !t.isJson || !t.data.frames || this.resources[a]) return e();
                                var h = {
                                    crossOrigin: t.crossOrigin,
                                    loadType: n.LOAD_TYPE.IMAGE,
                                    metadata: t.metadata.imageMetadata
                                };
                                i = t.isDataUrl ? t.data.meta.image : r.dirname(t.url.replace(this.baseUrl, "")) + "/" + t.data.meta.image, this.add(a, i, h, function (i) {
                                    function n(e, n) {
                                        for (var r = e; r - e < n && r < c.length;) {
                                            var s = c[r],
                                                a = l[s].frame;
                                            if (a) {
                                                var h = null,
                                                    p = null,
                                                    d = new o.Rectangle(0, 0, l[s].sourceSize.w / u, l[s].sourceSize.h / u);
                                                h = l[s].rotated ? new o.Rectangle(a.x / u, a.y / u, a.h / u, a.w / u) : new o.Rectangle(a.x / u, a.y / u, a.w / u, a.h / u), l[s].trimmed && (p = new o.Rectangle(l[s].spriteSourceSize.x / u, l[s].spriteSourceSize.y / u, l[s].spriteSourceSize.w / u, l[s].spriteSourceSize.h / u)), t.textures[s] = new o.Texture(i.texture.baseTexture, h, d, p, l[s].rotated ? 2 : 0), o.utils.TextureCache[s] = t.textures[s]
                                            }
                                            r++
                                        }
                                    }

                                    function r() {
                                        return p * s < c.length
                                    }

                                    function a(t) {
                                        n(p * s, s), p++, setTimeout(t, 0)
                                    }

                                    function h() {
                                        a(function () {
                                            r() ? h() : e()
                                        })
                                    }
                                    t.textures = {};
                                    var l = t.data.frames,
                                        c = Object.keys(l),
                                        u = o.utils.getResolutionOfUrl(t.url),
                                        p = 0;
                                    c.length <= s ? (n(0, s), e()) : h()
                                })
                            }
                        }
                    }, {
                        "../core": 97,
                        path: 44,
                        "resource-loader": 69
                    }
                ],
                186: [
                    function (t, e, i) {
                        var n = t("../core");
                        e.exports = function () {
                            return function (t, e) {
                                if (t.data && t.isImage) {
                                    var i = new n.BaseTexture(t.data, null, n.utils.getResolutionOfUrl(t.url));
                                    i.imageUrl = t.url, t.texture = new n.Texture(i), n.utils.BaseTextureCache[t.url] = i, n.utils.TextureCache[t.url] = t.texture
                                }
                                e()
                            }
                        }
                    }, {
                        "../core": 97
                    }
                ],
                187: [
                    function (t, e, i) {
                        function n(t, e, i, o, s) {
                            r.Container.call(this), this._texture = null, this.uvs = i || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = o || new Uint16Array([0, 1, 3, 2]), this.dirty = 0, this.indexDirty = 0, this.blendMode = r.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = s || n.DRAW_MODES.TRIANGLE_MESH, this.texture = t, this.shader = null, this.tintRgb = new Float32Array([1, 1, 1]), this._glDatas = []
                        }
                        var r = t("../core"),
                            o = t("pixi-gl-core"),
                            s = t("./webgl/MeshShader"),
                            a = new r.Point,
                            h = new r.Polygon;
                        n.prototype = Object.create(r.Container.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            texture: {
                                get: function () {
                                    return this._texture
                                },
                                set: function (t) {
                                    this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                                }
                            },
                            tint: {
                                get: function () {
                                    return r.utils.rgb2hex(this.tintRgb)
                                },
                                set: function (t) {
                                    this.tintRgb = r.utils.hex2rgb(t, this.tintRgb)
                                }
                            }
                        }), n.prototype._renderWebGL = function (t) {
                            t.flush();
                            var e = t.gl,
                                i = this._glDatas[t.CONTEXT_UID];
                            i || (i = {
                                shader: new s(e),
                                vertexBuffer: o.GLBuffer.createVertexBuffer(e, this.vertices, e.STREAM_DRAW),
                                uvBuffer: o.GLBuffer.createVertexBuffer(e, this.uvs, e.STREAM_DRAW),
                                indexBuffer: o.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW),
                                vao: new o.VertexArrayObject(e),
                                dirty: this.dirty,
                                indexDirty: this.indexDirty
                            }, i.vao = new o.VertexArrayObject(e).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer, i.shader.attributes.aVertexPosition, e.FLOAT, !1, 8, 0).addAttribute(i.uvBuffer, i.shader.attributes.aTextureCoord, e.FLOAT, !1, 8, 0), this._glDatas[t.CONTEXT_UID] = i), this.dirty !== i.dirty && (i.dirty = this.dirty, i.uvBuffer.upload()), this.indexDirty !== i.indexDirty && (i.indexDirty = this.indexDirty, i.indexBuffer.upload()), i.vertexBuffer.upload(), t.bindShader(i.shader), t.bindTexture(this._texture, 0), t.state.setBlendMode(this.blendMode), i.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0), i.shader.uniforms.alpha = this.worldAlpha, i.shader.uniforms.tint = this.tintRgb;
                            var r = this.drawMode === n.DRAW_MODES.TRIANGLE_MESH ? e.TRIANGLE_STRIP : e.TRIANGLES;
                            i.vao.bind().draw(r, this.indices.length).unbind()
                        }, n.prototype._renderCanvas = function (t) {
                            var e = t.context,
                                i = this.worldTransform,
                                r = t.resolution;
                            t.roundPixels ? e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r | 0, i.ty * r | 0) : e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r), this.drawMode === n.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
                        }, n.prototype._renderCanvasTriangleMesh = function (t) {
                            for (var e = this.vertices, i = this.uvs, n = e.length / 2, r = 0; r < n - 2; r++) {
                                var o = 2 * r;
                                this._renderCanvasDrawTriangle(t, e, i, o, o + 2, o + 4)
                            }
                        }, n.prototype._renderCanvasTriangles = function (t) {
                            for (var e = this.vertices, i = this.uvs, n = this.indices, r = n.length, o = 0; o < r; o += 3) {
                                var s = 2 * n[o],
                                    a = 2 * n[o + 1],
                                    h = 2 * n[o + 2];
                                this._renderCanvasDrawTriangle(t, e, i, s, a, h)
                            }
                        }, n.prototype._renderCanvasDrawTriangle = function (t, e, i, n, r, o) {
                            var s = this._texture.baseTexture,
                                a = s.source,
                                h = s.width,
                                l = s.height,
                                c = e[n],
                                u = e[r],
                                p = e[o],
                                d = e[n + 1],
                                f = e[r + 1],
                                m = e[o + 1],
                                g = i[n] * s.width,
                                v = i[r] * s.width,
                                y = i[o] * s.width,
                                _ = i[n + 1] * s.height,
                                x = i[r + 1] * s.height,
                                b = i[o + 1] * s.height;
                            if (this.canvasPadding > 0) {
                                var w = this.canvasPadding / this.worldTransform.a,
                                    S = this.canvasPadding / this.worldTransform.d,
                                    T = (c + u + p) / 3,
                                    M = (d + f + m) / 3,
                                    E = c - T,
                                    A = d - M,
                                    C = Math.sqrt(E * E + A * A);
                                c = T + E / C * (C + w), d = M + A / C * (C + S), E = u - T, A = f - M, C = Math.sqrt(E * E + A * A), u = T + E / C * (C + w), f = M + A / C * (C + S), E = p - T, A = m - M, C = Math.sqrt(E * E + A * A), p = T + E / C * (C + w), m = M + A / C * (C + S)
                            }
                            t.save(), t.beginPath(), t.moveTo(c, d), t.lineTo(u, f), t.lineTo(p, m), t.closePath(), t.clip();
                            var L = g * x + _ * y + v * b - x * y - _ * v - g * b,
                                R = c * x + _ * p + u * b - x * p - _ * u - c * b,
                                P = g * u + c * y + v * p - u * y - c * v - g * p,
                                O = g * x * p + _ * u * y + c * v * b - c * x * y - _ * v * p - g * u * b,
                                I = d * x + _ * m + f * b - x * m - _ * f - d * b,
                                D = g * f + d * y + v * m - f * y - d * v - g * m,
                                B = g * x * m + _ * f * y + d * v * b - d * x * y - _ * v * m - g * f * b;
                            t.transform(R / L, I / L, P / L, D / L, O / L, B / L), t.drawImage(a, 0, 0, h * s.resolution, l * s.resolution, 0, 0, h, l), t.restore()
                        }, n.prototype.renderMeshFlat = function (t) {
                            var e = this.context,
                                i = t.vertices,
                                n = i.length / 2;
                            e.beginPath();
                            for (var r = 1; r < n - 2; r++) {
                                var o = 2 * r,
                                    s = i[o],
                                    a = i[o + 2],
                                    h = i[o + 4],
                                    l = i[o + 1],
                                    c = i[o + 3],
                                    u = i[o + 5];
                                e.moveTo(s, l), e.lineTo(a, c), e.lineTo(h, u)
                            }
                            e.fillStyle = "#FF0000", e.fill(), e.closePath()
                        }, n.prototype._onTextureUpdate = function () { }, n.prototype._calculateBounds = function () {
                            this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
                        }, n.prototype.containsPoint = function (t) {
                            if (!this.getBounds().contains(t.x, t.y)) return !1;
                            this.worldTransform.applyInverse(t, a);
                            for (var e = this.vertices, i = h.points, r = this.indices, o = this.indices.length, s = this.drawMode === n.DRAW_MODES.TRIANGLES ? 3 : 1, l = 0; l + 2 < o; l += s) {
                                var c = 2 * r[l],
                                    u = 2 * r[l + 1],
                                    p = 2 * r[l + 2];
                                if (i[0] = e[c], i[1] = e[c + 1], i[2] = e[u], i[3] = e[u + 1], i[4] = e[p], i[5] = e[p + 1], h.contains(a.x, a.y)) return !0
                            }
                            return !1
                        }, n.DRAW_MODES = {
                            TRIANGLE_MESH: 0,
                            TRIANGLES: 1
                        }
                    }, {
                        "../core": 97,
                        "./webgl/MeshShader": 192,
                        "pixi-gl-core": 51
                    }
                ],
                188: [
                    function (t, e, i) {
                        function n(t, e, i, n, s) {
                            o.call(this, t, 4, 4);
                            var a = this.uvs;
                            a[6] = a[14] = a[22] = a[30] = 1, a[25] = a[27] = a[29] = a[31] = 1, this._origWidth = t.width, this._origHeight = t.height, this._uvw = 1 / this._origWidth, this._uvh = 1 / this._origHeight, this.width = t.width, this.height = t.height, a[2] = a[10] = a[18] = a[26] = this._uvw * e, a[4] = a[12] = a[20] = a[28] = 1 - this._uvw * n, a[9] = a[11] = a[13] = a[15] = this._uvh * i, a[17] = a[19] = a[21] = a[23] = 1 - this._uvh * s, this.leftWidth = "undefined" != typeof e ? e : r, this.rightWidth = "undefined" != typeof n ? n : r, this.topHeight = "undefined" != typeof i ? i : r, this.bottomHeight = "undefined" != typeof s ? s : r
                        }
                        var r = 10,
                            o = t("./Plane");
                        n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n, Object.defineProperties(n.prototype, {
                            width: {
                                get: function () {
                                    return this._width
                                },
                                set: function (t) {
                                    this._width = t, this.updateVerticalVertices()
                                }
                            },
                            height: {
                                get: function () {
                                    return this._height
                                },
                                set: function (t) {
                                    this._height = t, this.updateHorizontalVertices()
                                }
                            },
                            leftWidth: {
                                get: function () {
                                    return this._leftWidth
                                },
                                set: function (t) {
                                    this._leftWidth = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[2] = e[10] = e[18] = e[26] = this._uvw * t, i[2] = i[10] = i[18] = i[26] = t, this.dirty = !0
                                }
                            },
                            rightWidth: {
                                get: function () {
                                    return this._rightWidth
                                },
                                set: function (t) {
                                    this._rightWidth = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[4] = e[12] = e[20] = e[28] = 1 - this._uvw * t, i[4] = i[12] = i[20] = i[28] = this._width - t, this.dirty = !0
                                }
                            },
                            topHeight: {
                                get: function () {
                                    return this._topHeight
                                },
                                set: function (t) {
                                    this._topHeight = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[9] = e[11] = e[13] = e[15] = this._uvh * t, i[9] = i[11] = i[13] = i[15] = t, this.dirty = !0
                                }
                            },
                            bottomHeight: {
                                get: function () {
                                    return this._bottomHeight
                                },
                                set: function (t) {
                                    this._bottomHeight = t;
                                    var e = this.uvs,
                                        i = this.vertices;
                                    e[17] = e[19] = e[21] = e[23] = 1 - this._uvh * t, i[17] = i[19] = i[21] = i[23] = this._height - t, this.dirty = !0
                                }
                            }
                        }), n.prototype.updateHorizontalVertices = function () {
                            var t = this.vertices;
                            t[9] = t[11] = t[13] = t[15] = this._topHeight, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight, t[25] = t[27] = t[29] = t[31] = this._height
                        }, n.prototype.updateVerticalVertices = function () {
                            var t = this.vertices;
                            t[2] = t[10] = t[18] = t[26] = this._leftWidth, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth, t[6] = t[14] = t[22] = t[30] = this._width
                        }, n.prototype._renderCanvas = function (t) {
                            var e = t.context;
                            e.globalAlpha = this.worldAlpha;
                            var i = this.worldTransform,
                                n = t.resolution;
                            t.roundPixels ? e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n | 0, i.ty * n | 0) : e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n);
                            var r = this._texture.baseTexture,
                                o = r.source,
                                s = r.width,
                                a = r.height;
                            this.drawSegment(e, o, s, a, 0, 1, 10, 11), this.drawSegment(e, o, s, a, 2, 3, 12, 13), this.drawSegment(e, o, s, a, 4, 5, 14, 15), this.drawSegment(e, o, s, a, 8, 9, 18, 19), this.drawSegment(e, o, s, a, 10, 11, 20, 21), this.drawSegment(e, o, s, a, 12, 13, 22, 23), this.drawSegment(e, o, s, a, 16, 17, 26, 27), this.drawSegment(e, o, s, a, 18, 19, 28, 29), this.drawSegment(e, o, s, a, 20, 21, 30, 31)
                        }, n.prototype.drawSegment = function (t, e, i, n, r, o, s, a) {
                            var h = this.uvs,
                                l = this.vertices,
                                c = (h[s] - h[r]) * i,
                                u = (h[a] - h[o]) * n,
                                p = l[s] - l[r],
                                d = l[a] - l[o];
                            c < 1 && (c = 1), u < 1 && (u = 1), p < 1 && (p = 1), d < 1 && (d = 1), t.drawImage(e, h[r] * i, h[o] * n, c, u, l[r], l[o], p, d)
                        }
                    }, {
                        "./Plane": 189
                    }
                ],
                189: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            r.call(this, t), this._ready = !0, this.verticesX = e || 10, this.verticesY = i || 10, this.drawMode = r.DRAW_MODES.TRIANGLES, this.refresh()
                        }
                        var r = t("./Mesh");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.refresh = function () {
                            var t = this.verticesX * this.verticesY,
                                e = [],
                                i = [],
                                n = [],
                                r = [],
                                o = this.texture,
                                s = this.verticesX - 1,
                                a = this.verticesY - 1,
                                h = 0,
                                l = o.width / s,
                                c = o.height / a;
                            for (h = 0; h < t; h++) {
                                var u = h % this.verticesX,
                                    p = h / this.verticesX | 0;
                                e.push(u * l, p * c), n.push(o._uvs.x0 + (o._uvs.x1 - o._uvs.x0) * (u / (this.verticesX - 1)), o._uvs.y0 + (o._uvs.y3 - o._uvs.y0) * (p / (this.verticesY - 1)))
                            }
                            var d = s * a;
                            for (h = 0; h < d; h++) {
                                var f = h % s,
                                    m = h / s | 0,
                                    g = m * this.verticesX + f,
                                    v = m * this.verticesX + f + 1,
                                    y = (m + 1) * this.verticesX + f,
                                    _ = (m + 1) * this.verticesX + f + 1;
                                r.push(g, v, y), r.push(v, _, y)
                            }
                            this.vertices = new Float32Array(e), this.uvs = new Float32Array(n), this.colors = new Float32Array(i), this.indices = new Uint16Array(r), this.indexDirty = !0
                        }, n.prototype._onTextureUpdate = function () {
                            r.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
                        }
                    }, {
                        "./Mesh": 187
                    }
                ],
                190: [
                    function (t, e, i) {
                        function n(t, e) {
                            r.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh()
                        }
                        var r = t("./Mesh"),
                            o = t("../core");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.refresh = function () {
                            var t = this.points;
                            if (!(t.length < 1) && this._texture._uvs) {
                                var e = this.uvs,
                                    i = this.indices,
                                    n = this.colors,
                                    r = this._texture._uvs,
                                    s = new o.Point(r.x0, r.y0),
                                    a = new o.Point(r.x2 - r.x0, r.y2 - r.y0);
                                e[0] = 0 + s.x, e[1] = 0 + s.y, e[2] = 0 + s.x, e[3] = 1 * a.y + s.y, n[0] = 1, n[1] = 1, i[0] = 0, i[1] = 1;
                                for (var h, l, c, u = t.length, p = 1; p < u; p++) h = t[p], l = 4 * p, c = p / (u - 1), e[l] = c * a.x + s.x, e[l + 1] = 0 + s.y, e[l + 2] = c * a.x + s.x, e[l + 3] = 1 * a.y + s.y, l = 2 * p, n[l] = 1, n[l + 1] = 1, l = 2 * p, i[l] = l, i[l + 1] = l + 1;
                                this.dirty = !0, this.indexDirty = !0
                            }
                        }, n.prototype._onTextureUpdate = function () {
                            r.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
                        }, n.prototype.updateTransform = function () {
                            var t = this.points;
                            if (!(t.length < 1)) {
                                for (var e, i, n, r, o, s, a = t[0], h = 0, l = 0, c = this.vertices, u = t.length, p = 0; p < u; p++) i = t[p], n = 4 * p, e = p < t.length - 1 ? t[p + 1] : i, l = -(e.x - a.x), h = e.y - a.y, r = 10 * (1 - p / (u - 1)), r > 1 && (r = 1), o = Math.sqrt(h * h + l * l), s = this._texture.height / 2, h /= o, l /= o, h *= s, l *= s, c[n] = i.x + h, c[n + 1] = i.y + l, c[n + 2] = i.x - h, c[n + 3] = i.y - l, a = i;
                                this.containerUpdateTransform()
                            }
                        }
                    }, {
                        "../core": 97,
                        "./Mesh": 187
                    }
                ],
                191: [
                    function (t, e, i) {
                        e.exports = {
                            Mesh: t("./Mesh"),
                            Plane: t("./Plane"),
                            NineSlicePlane: t("./NineSlicePlane"),
                            Rope: t("./Rope"),
                            MeshShader: t("./webgl/MeshShader")
                        }
                    }, {
                        "./Mesh": 187,
                        "./NineSlicePlane": 188,
                        "./Plane": 189,
                        "./Rope": 190,
                        "./webgl/MeshShader": 192
                    }
                ],
                192: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "uniform float alpha;", "uniform vec3 tint;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);", "}"].join("\n"))
                        }
                        var r = t("../../core/Shader");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n
                    }, {
                        "../../core/Shader": 77
                    }
                ],
                193: [
                    function (t, e, i) {
                        function n(t, e, i) {
                            r.Container.call(this), i = i || 15e3, t = t || 15e3;
                            var n = 16384;
                            i > n && (i = n), i > t && (i = t), this._properties = [!1, !0, !1, !1, !1], this._maxSize = t, this._batchSize = i, this._glBuffers = [], this._bufferToUpdate = 0, this.interactiveChildren = !1, this.blendMode = r.BLEND_MODES.NORMAL, this.roundPixels = !0, this.baseTexture = null, this.setProperties(e)
                        }
                        var r = t("../core");
                        n.prototype = Object.create(r.Container.prototype), n.prototype.constructor = n, e.exports = n, n.prototype.setProperties = function (t) {
                            t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
                        }, n.prototype.updateTransform = function () {
                            this.displayObjectUpdateTransform()
                        }, n.prototype.renderWebGL = function (t) {
                            this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function () {
                                this.onChildrenChange(0)
                            }, this)), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
                        }, n.prototype.onChildrenChange = function (t) {
                            var e = Math.floor(t / this._batchSize);
                            e < this._bufferToUpdate && (this._bufferToUpdate = e)
                        }, n.prototype.renderCanvas = function (t) {
                            if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                                var e = t.context,
                                    i = this.worldTransform,
                                    n = !0,
                                    r = 0,
                                    o = 0,
                                    s = 0,
                                    a = 0,
                                    h = t.blendModes[this.blendMode];
                                h !== e.globalCompositeOperation && (e.globalCompositeOperation = h), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                                for (var l = 0; l < this.children.length; ++l) {
                                    var c = this.children[l];
                                    if (c.visible) {
                                        var u = c.texture.frame;
                                        if (e.globalAlpha = this.worldAlpha * c.alpha, c.rotation % (2 * Math.PI) === 0) n && (e.setTransform(i.a, i.b, i.c, i.d, i.tx * t.resolution, i.ty * t.resolution), n = !1), r = c.anchor.x * (-u.width * c.scale.x) + c.position.x + .5, o = c.anchor.y * (-u.height * c.scale.y) + c.position.y + .5, s = u.width * c.scale.x, a = u.height * c.scale.y;
                                        else {
                                            n || (n = !0), c.displayObjectUpdateTransform();
                                            var p = c.worldTransform;
                                            t.roundPixels ? e.setTransform(p.a, p.b, p.c, p.d, p.tx * t.resolution | 0, p.ty * t.resolution | 0) : e.setTransform(p.a, p.b, p.c, p.d, p.tx * t.resolution, p.ty * t.resolution), r = c.anchor.x * -u.width + .5, o = c.anchor.y * -u.height + .5, s = u.width,
                                                a = u.height
                                        }
                                        var d = c.texture.baseTexture.resolution;
                                        e.drawImage(c.texture.baseTexture.source, u.x * d, u.y * d, u.width * d, u.height * d, r * d, o * d, s * d, a * d)
                                    }
                                }
                            }
                        }, n.prototype.destroy = function () {
                            if (r.Container.prototype.destroy.apply(this, arguments), this._buffers)
                                for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                            this._properties = null, this._buffers = null
                        }
                    }, {
                        "../core": 97
                    }
                ],
                194: [
                    function (t, e, i) {
                        e.exports = {
                            ParticleContainer: t("./ParticleContainer"),
                            ParticleRenderer: t("./webgl/ParticleRenderer")
                        }
                    }, {
                        "./ParticleContainer": 193,
                        "./webgl/ParticleRenderer": 196
                    }
                ],
                195: [
                    function (t, e, i) {
                        function n(t, e, i, n) {
                            this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = n, this.dynamicProperties = [], this.staticProperties = [];
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r];
                                o = {
                                    attribute: o.attribute,
                                    size: o.size,
                                    uploadFunction: o.uploadFunction,
                                    offset: o.offset
                                }, i[r] ? this.dynamicProperties.push(o) : this.staticProperties.push(o)
                            }
                            this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
                        }
                        var r = t("pixi-gl-core"),
                            o = t("../../core/utils/createIndicesForQuads");
                        n.prototype.constructor = n, e.exports = n, n.prototype.initBuffers = function () {
                            var t, e, i = this.gl,
                                n = 0;
                            for (this.indices = o(this.size), this.indexBuffer = r.GLBuffer.createIndexBuffer(i, this.indices, i.STATIC_DRAW), this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], e.offset = n, n += e.size, this.dynamicStride += e.size;
                            this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = r.GLBuffer.createVertexBuffer(i, this.dynamicData, i.STREAM_DRAW);
                            var s = 0;
                            for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], e.offset = s, s += e.size, this.staticStride += e.size;
                            for (this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = r.GLBuffer.createVertexBuffer(i, this.staticData, i.STATIC_DRAW), this.vao = new r.VertexArrayObject(i).addIndex(this.indexBuffer), t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], this.vao.addAttribute(this.dynamicBuffer, e.attribute, i.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
                            for (t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], this.vao.addAttribute(this.staticBuffer, e.attribute, i.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
                        }, n.prototype.uploadDynamic = function (t, e, i) {
                            for (var n = 0; n < this.dynamicProperties.length; n++) {
                                var r = this.dynamicProperties[n];
                                r.uploadFunction(t, e, i, this.dynamicData, this.dynamicStride, r.offset)
                            }
                            this.dynamicBuffer.upload()
                        }, n.prototype.uploadStatic = function (t, e, i) {
                            for (var n = 0; n < this.staticProperties.length; n++) {
                                var r = this.staticProperties[n];
                                r.uploadFunction(t, e, i, this.staticData, this.staticStride, r.offset)
                            }
                            this.staticBuffer.upload()
                        }, n.prototype.bind = function () {
                            this.vao.bind()
                        }, n.prototype.destroy = function () {
                            this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy()
                        }
                    }, {
                        "../../core/utils/createIndicesForQuads": 149,
                        "pixi-gl-core": 51
                    }
                ],
                196: [
                    function (t, e, i) {
                        function n(t) {
                            r.ObjectRenderer.call(this, t), this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new r.Matrix, this.CONTEXT_UID = 0
                        }
                        var r = t("../../core"),
                            o = t("./ParticleShader"),
                            s = t("./ParticleBuffer");
                        n.prototype = Object.create(r.ObjectRenderer.prototype), n.prototype.constructor = n, e.exports = n, r.WebGLRenderer.registerPlugin("particle", n), n.prototype.onContextChange = function () {
                            var t = this.renderer.gl;
                            this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new o(t), this.properties = [{
                                attribute: this.shader.attributes.aVertexPosition,
                                size: 2,
                                uploadFunction: this.uploadVertices,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aPositionCoord,
                                size: 2,
                                uploadFunction: this.uploadPosition,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aRotation,
                                size: 1,
                                uploadFunction: this.uploadRotation,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aTextureCoord,
                                size: 2,
                                uploadFunction: this.uploadUvs,
                                offset: 0
                            }, {
                                attribute: this.shader.attributes.aColor,
                                size: 1,
                                uploadFunction: this.uploadAlpha,
                                offset: 0
                            }]
                        }, n.prototype.start = function () {
                            this.renderer.bindShader(this.shader)
                        }, n.prototype.render = function (t) {
                            var e = t.children,
                                i = e.length,
                                n = t._maxSize,
                                r = t._batchSize;
                            if (0 !== i) {
                                i > n && (i = n);
                                var o = t._glBuffers[this.renderer.CONTEXT_UID];
                                o || (o = t._glBuffers[this.renderer.CONTEXT_UID] = this.generateBuffers(t)), this.renderer.setBlendMode(t.blendMode);
                                var s = this.renderer.gl,
                                    a = t.worldTransform.copy(this.tempMatrix);
                                a.prepend(this.renderer._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = a.toArray(!0), this.shader.uniforms.uAlpha = t.worldAlpha;
                                var h = e[0]._texture.baseTexture;
                                this.renderer.bindTexture(h);
                                for (var l = 0, c = 0; l < i; l += r, c += 1) {
                                    var u = i - l;
                                    u > r && (u = r);
                                    var p = o[c];
                                    p.uploadDynamic(e, l, u), t._bufferToUpdate === c && (p.uploadStatic(e, l, u), t._bufferToUpdate = c + 1), p.vao.bind().draw(s.TRIANGLES, 6 * u).unbind()
                                }
                            }
                        }, n.prototype.generateBuffers = function (t) {
                            var e, i = this.renderer.gl,
                                n = [],
                                r = t._maxSize,
                                o = t._batchSize,
                                a = t._properties;
                            for (e = 0; e < r; e += o) n.push(new s(i, this.properties, a, o));
                            return n
                        }, n.prototype.uploadVertices = function (t, e, i, n, r, o) {
                            for (var s, a, h, l, c, u, p, d, f, m, g = 0; g < i; g++) s = t[e + g], a = s._texture, c = s.scale.x, u = s.scale.y, h = a.trim, l = a.orig, h ? (d = h.x - s.anchor.x * l.width, p = d + h.width, m = h.y - s.anchor.y * l.height, f = m + h.height) : (p = l.width * (1 - s.anchor.x), d = l.width * -s.anchor.x, f = l.height * (1 - s.anchor.y), m = l.height * -s.anchor.y), n[o] = d * c, n[o + 1] = m * u, n[o + r] = p * c, n[o + r + 1] = m * u, n[o + 2 * r] = p * c, n[o + 2 * r + 1] = f * u, n[o + 3 * r] = d * c, n[o + 3 * r + 1] = f * u, o += 4 * r
                        }, n.prototype.uploadPosition = function (t, e, i, n, r, o) {
                            for (var s = 0; s < i; s++) {
                                var a = t[e + s].position;
                                n[o] = a.x, n[o + 1] = a.y, n[o + r] = a.x, n[o + r + 1] = a.y, n[o + 2 * r] = a.x, n[o + 2 * r + 1] = a.y, n[o + 3 * r] = a.x, n[o + 3 * r + 1] = a.y, o += 4 * r
                            }
                        }, n.prototype.uploadRotation = function (t, e, i, n, r, o) {
                            for (var s = 0; s < i; s++) {
                                var a = t[e + s].rotation;
                                n[o] = a, n[o + r] = a, n[o + 2 * r] = a, n[o + 3 * r] = a, o += 4 * r
                            }
                        }, n.prototype.uploadUvs = function (t, e, i, n, r, o) {
                            for (var s = 0; s < i; s++) {
                                var a = t[e + s]._texture._uvs;
                                a ? (n[o] = a.x0, n[o + 1] = a.y0, n[o + r] = a.x1, n[o + r + 1] = a.y1, n[o + 2 * r] = a.x2, n[o + 2 * r + 1] = a.y2, n[o + 3 * r] = a.x3, n[o + 3 * r + 1] = a.y3, o += 4 * r) : (n[o] = 0, n[o + 1] = 0, n[o + r] = 0, n[o + r + 1] = 0, n[o + 2 * r] = 0, n[o + 2 * r + 1] = 0, n[o + 3 * r] = 0, n[o + 3 * r + 1] = 0, o += 4 * r)
                            }
                        }, n.prototype.uploadAlpha = function (t, e, i, n, r, o) {
                            for (var s = 0; s < i; s++) {
                                var a = t[e + s].alpha;
                                n[o] = a, n[o + r] = a, n[o + 2 * r] = a, n[o + 3 * r] = a, o += 4 * r
                            }
                        }, n.prototype.destroy = function () {
                            this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), r.ObjectRenderer.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
                        }
                    }, {
                        "../../core": 97,
                        "./ParticleBuffer": 195,
                        "./ParticleShader": 197
                    }
                ],
                197: [
                    function (t, e, i) {
                        function n(t) {
                            r.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"))
                        }
                        var r = t("../../core/Shader");
                        n.prototype = Object.create(r.prototype), n.prototype.constructor = n, e.exports = n
                    }, {
                        "../../core/Shader": 77
                    }
                ],
                198: [
                    function (t, e, i) {
                        Math.sign || (Math.sign = function (t) {
                            return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                        })
                    }, {}
                ],
                199: [
                    function (t, e, i) {
                        Object.assign || (Object.assign = t("object-assign"))
                    }, {
                        "object-assign": 43
                    }
                ],
                200: [
                    function (t, e, i) {
                        t("./Object.assign"), t("./requestAnimationFrame"), t("./Math.sign"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
                    }, {
                        "./Math.sign": 198,
                        "./Object.assign": 199,
                        "./requestAnimationFrame": 201
                    }
                ],
                201: [
                    function (t, e, n) {
                        (function (t) {
                            if (Date.now && Date.prototype.getTime || (Date.now = function () {
                                return (new Date).getTime()
                            }), !t.performance || !t.performance.now) {
                                var e = Date.now();
                                t.performance || (t.performance = {}), t.performance.now = function () {
                                    return Date.now() - e
                                }
                            }
                            for (var i = Date.now(), n = ["ms", "moz", "webkit", "o"], r = 0; r < n.length && !t.requestAnimationFrame; ++r) t.requestAnimationFrame = t[n[r] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
                            t.requestAnimationFrame || (t.requestAnimationFrame = function (t) {
                                if ("function" != typeof t) throw new TypeError(t + "is not a function");
                                var e = Date.now(),
                                    n = 16 + i - e;
                                return n < 0 && (n = 0), i = e, setTimeout(function () {
                                    i = Date.now(), t(performance.now())
                                }, n)
                            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
                                clearTimeout(t)
                            })
                        }).call(this, "undefined" != typeof i ? i : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}
                ],
                202: [
                    function (t, e, i) {
                        function n() { }
                        var r = t("../../core");
                        n.prototype.constructor = n, e.exports = n, n.prototype.upload = function (t, e) {
                            "function" == typeof t && (e = t, t = null), e()
                        }, n.prototype.register = function () {
                            return this
                        }, n.prototype.add = function () {
                            return this
                        }, n.prototype.destroy = function () { }, r.CanvasRenderer.registerPlugin("prepare", n)
                    }, {
                        "../../core": 97
                    }
                ],
                203: [
                    function (t, e, i) {
                        e.exports = {
                            webGL: t("./webgl/WebGLPrepare"),
                            canvas: t("./canvas/CanvasPrepare")
                        }
                    }, {
                        "./canvas/CanvasPrepare": 202,
                        "./webgl/WebGLPrepare": 204
                    }
                ],
                204: [
                    function (t, e, i) {
                        function n(t) {
                            this.renderer = t, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.register(s, r).register(a, o)
                        }

                        function r(t, e) {
                            return e instanceof h.BaseTexture && (t.textureManager.updateTexture(e), !0)
                        }

                        function o(t, e) {
                            return e instanceof h.Graphics && (t.plugins.graphics.updateGraphics(e), !0)
                        }

                        function s(t, e) {
                            if (t instanceof h.BaseTexture) return e.indexOf(t) === -1 && e.push(t), !0;
                            if (t._texture && t._texture instanceof h.Texture) {
                                var i = t._texture.baseTexture;
                                return e.indexOf(i) === -1 && e.push(i), !0
                            }
                            return !1
                        }

                        function a(t, e) {
                            return t instanceof h.Graphics && (e.push(t), !0)
                        }
                        var h = t("../../core"),
                            l = h.ticker.shared;
                        n.UPLOADS_PER_FRAME = 4, n.prototype.constructor = n, e.exports = n, n.prototype.upload = function (t, e) {
                            "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (this.numLeft = n.UPLOADS_PER_FRAME, this.completes.push(e), this.ticking || (this.ticking = !0, l.add(this.tick, this))) : e()
                        }, n.prototype.tick = function () {
                            for (var t, e; this.queue.length && this.numLeft > 0;) {
                                var i = this.queue[0],
                                    r = !1;
                                for (t = 0, e = this.uploadHooks.length; t < e; t++)
                                    if (this.uploadHooks[t](this.renderer, i)) {
                                        this.numLeft--, this.queue.shift(), r = !0;
                                        break
                                    }
                                r || this.queue.shift()
                            }
                            if (this.queue.length) this.numLeft = n.UPLOADS_PER_FRAME;
                            else {
                                this.ticking = !1, l.remove(this.tick, this);
                                var o = this.completes.slice(0);
                                for (this.completes.length = 0, t = 0, e = o.length; t < e; t++) o[t]()
                            }
                        }, n.prototype.register = function (t, e) {
                            return t && this.addHooks.push(t), e && this.uploadHooks.push(e), this
                        }, n.prototype.add = function (t) {
                            var e, i;
                            for (e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue) ; e++);
                            if (t instanceof h.Container)
                                for (e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
                            return this
                        }, n.prototype.destroy = function () {
                            this.ticking && l.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null
                        }, h.WebGLRenderer.registerPlugin("prepare", n)
                    }, {
                        "../../core": 97
                    }
                ],
                205: [
                    function (t, e, n) {
                        (function (i) {
                            t("./polyfill");
                            var n = e.exports = t("./core");
                            n.extras = t("./extras"),
                            n.filters = t("./filters"),
                            n.interaction = t("./interaction"),
                            n.loaders = t("./loaders"),
                            n.mesh = t("./mesh"),
                            n.particles = t("./particles"),
                            n.accessibility = t("./accessibility"),
                            n.extract = t("./extract"),
                            n.prepare = t("./prepare"),
                            n.loader = new n.loaders.Loader,
                            Object.assign(n, t("./deprecation"));
                            i.PIXI = n;
                        }).call(this, "undefined" != typeof i ? i : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "./accessibility": 76,
                        "./core": 97,
                        "./deprecation": 154,
                        "./extract": 156,
                        "./extras": 164,
                        "./filters": 175,
                        "./interaction": 180,
                        "./loaders": 183,
                        "./mesh": 191,
                        "./particles": 194,
                        "./polyfill": 200,
                        "./prepare": 203
                    }
                ]
            }, {}, [205])(205)
        })
    }).call(e, i(9).setImmediate, function () {
        return this
    }())
}