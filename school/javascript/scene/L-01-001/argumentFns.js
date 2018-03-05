var argumentFn = [
    function (t, e, i) {
        t.exports = i(1)
    },
    function (t, e, i) {
        "use strict";

        function n() {
            var t = document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }
        if (
            //window.ASSET_URL = "assets/",
            window.ASSET_URL = "",
            window.config = {
            app: "com/football/app/FootballApp"
        },
            window.console || (window.console = {
            log: function (t) { }
        }),
            window.console.log || (window.console.log = function (t) { }),
            window.DEVICE_SCALE = window.devicePixelRatio || 1, n()
        ) {
            var r, o, s, a, h, l, c, u, p, d;
            ! function () {
                var t = function () {
                    //document.getElementById("container");                    
                    //window.scrollTo(0, 0),
                    //p.resize(window.innerWidth, window.innerHeight);
                    var tmpRate = 763 / 1164;
                    p.resize(d.width(), tmpRate * d.width());
                };
                r = i(3),
                o = i(4),
                s = i(5),
                a = i(6),
                h = i(8),
                l = i(12),
                window.THREE = l,
                c = i(13),
                u = i(24),
                p = new c,
                window.app = p,
                //d=document.getElementById("container");   
                d = $("#game_container");
                //document.body.appendChild(p.view),      
                d.append($(p.view)),
                //d.style.background = "black",                
                //p.view.style.position = "absolute",
                //p.view.style.top = 0,
                //p.view.style.left = 0,
                window.addEventListener("resize", function () {
                    t()
                }),
                t()
            }()
        } else {
            var f = i(2);
            new f(document.body)
        }
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function (t) {
                this.domElement = t || document.body;
                var e = {
                    message: '<p>Uh-oh! It looks like you need to update your browser before you\'ll be able to play this game</p><p>In the meantime, check out <a href="#brand_url">this</a> or <a href="#cbeebies_games_url">this</a>.',
                    brand_url: "http://www.someurl.tld/",
                    games_url: "http://www.someurl.tld/",
                    enabled: !0
                },
                    i = e.message;
                i = i.replace("#brand_url", e.brand_url), i = i.replace("#games_url", e.games_url), this.active = !1, this.checkDevice(navigator.userAgent), this.checkCanvas(), this.checkCookies()
            };
            n.prototype.constructor = n, n.prototype = {
                checkDevice: function (t) {
                    for (var e = [/(Mobile\/8C148)/, /(Mobile\/8C148a)/, /(Mobile\/8A293)/, /(Mobile\/8A306)/, /(Mobile\/8A400)/, /(Mobile\/8B117)/, /(Mobile\/8E128)/, /(Mobile\/8E200)/, /(Mobile\/8E303)/, /(Mobile\/8E401)/, /(Mobile\/8E600)/, /(Mobile\/8E501)/, /(Mobile\/8G4)/, /(Mobile\/8H7)/, /(Mobile\/8J2)/, /(Mobile\/8K2)/, /(Mobile\/8L1)/, /(Mobile\/9A334)/, /(Mobile\/10A523)/, /(Mobile\/9A405)/], i = 0; i < e.length; i++)
                        if (t.match(e[i])) {
                            var n = URL_HEADER.IMAGE + "unsupported.jpg";
                            return this.createBigImage(n), !1
                        }
                    if (/iP[ao]d|iPhone/i.test(t)) {
                        var r = parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1;
                        if (r < 6) {
                            var n = URL_HEADER.IMAGE + "unsupported.jpg";
                            return this.createBigImage(n), !1
                        }
                    }
                },
                checkCanvas: function () {
                    if (!this.hasCanvasSupport()) {
                        var t = URL_HEADER.IMAGE + "unsupported.jpg";
                        return this.createBigImage(t), !1
                    }
                    return !0
                },
                hasCanvasSupport: function () {
                    var t = document.createElement("canvas");
                    return !(!t.getContext || !t.getContext("2d"))
                },
                checkCookies: function () {
                    if (!this.cookiesEnabled()) {
                        var t = URL_HEADER.IMAGE + "cookies.jpg";
                        this.createBigImage(t)
                    }
                },
                cookiesEnabled: function () {
                    var t = !!navigator.cookieEnabled;
                    return "undefined" != typeof navigator.cookieEnabled || t || (document.cookie = "testcookie", t = document.cookie.indexOf("testcookie") != -1), t
                },
                createBigImage2: function (t) {
                    var e = document.createElement("div");
                    e.style.backgroundPosition = "50% 50%",
                    e.style.backgroundColor = "#3b3b3b",
                    e.style.backgroundRepeat = "no-repeat",
                    e.style.position = "absolute",
                    e.style.top = "0",
                    e.style.left = "0",
                    e.style.bottom = "0",
                    e.style.right = "0",
                    e.style.zIndex = 1e5,
                    e.height = "100%",
                    e.width = "100%",
                    e.style.backgroundImage = "url(" + t + ")",
                    this.domElement.appendChild(e),
                    this.active = !0
                },
                createBigImage: function (t) {
                    var e = new Image;
                    e.style.backgroundPosition = "50% 50%", e.style.backgroundColor = "#3b3b3b", e.style.backgroundRepeat = "no-repeat", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.bottom = "0", e.style.right = "0", e.style.zIndex = 1e5, e.src = t, this.domElement.appendChild(e), window.onresize = function () {
                        var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            i = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                            n = t / 750;
                        n > 1 && (n = 1), e.width = 750 * n, e.height = 500 * n, e.style.left = t / 2 - 750 * n / 2 + "px", e.style.top = i / 2 - 500 * n / 2 + "px"
                    }, window.onresize(), this.active = !0
                }
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n, r;
        ! function (i) {
            "use strict";
            var o, s, a, h, l, c = i.GreenSockGlobals || i,
                u = function (t) {
                    var e, i = t.split("."),
                        n = c;
                    for (e = 0; i.length > e; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                p = u("com.greensock"),
                d = [].slice,
                f = function () { },
                m = {},
                g = function (i, o, s, a) {
                    this.sc = m[i] ? m[i].sc : [], m[i] = this, this.gsClass = null, this.func = s;
                    var h = [];
                    this.check = function (l) {
                        for (var p, d, f, v, y = o.length, _ = y; --y > -1;) (p = m[o[y]] || new g(o[y], [])).gsClass ? (h[y] = p.gsClass, _--) : l && p.sc.push(this);
                        if (0 === _ && s)
                            for (d = ("com.greensock." + i).split("."), f = d.pop(), v = u(d.join("."))[f] = this.gsClass = s.apply(s, h), a && (c[f] = v, n = [], r = function () {
                                return v
                            }.apply(e, n), !(void 0 !== r && (t.exports = r))), y = 0; this.sc.length > y; y++) this.sc[y].check()
                    }, this.check(!0)
                },
                v = i._gsDefine = function (t, e, i, n) {
                    return new g(t, e, i, n)
                },
                y = p._class = function (t, e, i) {
                    return e = e || function () { }, v(t, [], function () {
                        return e
                    }, i), e
                };
            v.globals = c;
            var _ = [0, 0, 1, 1],
                x = [],
                b = y("easing.Ease", function (t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
                }, !0),
                w = b.map = {},
                S = b.register = function (t, e, i, n) {
                    for (var r, o, s, a, h = e.split(","), l = h.length, c = (i || "easeIn,easeOut,easeInOut").split(",") ; --l > -1;)
                        for (o = h[l], r = n ? y("easing." + o, null, !0) : p.easing[o] || {}, s = c.length; --s > -1;) a = c[s], w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (a = b.prototype, a._calcEnd = !1, a.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = o.length; --s > -1;) a = o[s] + ",Power" + s, S(new b(null, null, 1, s), a, "easeOut", !0), S(new b(null, null, 2, s), a, "easeIn" + (0 === s ? ",easeNone" : "")), S(new b(null, null, 3, s), a, "easeInOut");
            w.linear = p.easing.Linear.easeIn, w.swing = p.easing.Quad.easeInOut;
            var T = y("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            a = T.prototype, a.addEventListener = function (t, e, i, n, r) {
                r = r || 0;
                var o, s, a = this._listeners[t],
                    c = 0;
                for (null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === i ? a.splice(s, 1) : 0 === c && r > o.pr && (c = s + 1);
                a.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== h || l || h.wake()
            }, a.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, a.dispatchEvent = function (t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var M = i.requestAnimationFrame,
                E = i.cancelAnimationFrame,
                A = Date.now || function () {
                    return (new Date).getTime()
                },
                C = A();
            for (o = ["ms", "moz", "webkit", "o"], s = o.length; --s > -1 && !M;) M = i[o[s] + "RequestAnimationFrame"], E = i[o[s] + "CancelAnimationFrame"] || i[o[s] + "CancelRequestAnimationFrame"];
            y("Ticker", function (t, e) {
                var i, n, r, o, s, a = this,
                    c = A(),
                    u = e !== !1 && M,
                    p = function (t) {
                        C = A(), a.time = (C - c) / 1e3;
                        var e, h = a.time - s;
                        (!i || h > 0 || t === !0) && (a.frame++, s += h + (h >= o ? .004 : o - h), e = !0), t !== !0 && (r = n(p)), e && a.dispatchEvent("tick")
                    };
                T.call(a), this.time = this.frame = 0, this.tick = function () {
                    p(!0)
                }, this.sleep = function () {
                    null != r && (u && E ? E(r) : clearTimeout(r), n = f, r = null, a === h && (l = !1))
                }, this.wake = function () {
                    null !== r && a.sleep(), n = 0 === i ? f : u && M ? M : function (t) {
                        return setTimeout(t, 0 | 1e3 * (s - a.time) + 1)
                    }, a === h && (l = !0), p(2)
                }, this.fps = function (t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), s = this.time + o, void a.wake()) : i
                }, this.useRAF = function (t) {
                    return arguments.length ? (a.sleep(), u = t, void a.fps(i)) : u
                }, a.fps(t), setTimeout(function () {
                    u && (!r || 5 > a.frame) && a.useRAF(!1)
                }, 1500)
            }), a = p.Ticker.prototype = new p.events.EventDispatcher, a.constructor = p.Ticker;
            var L = y("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, V) {
                    l || h.wake();
                    var i = this.vars.useFrames ? z : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            h = L.ticker = new p.Ticker, a = L.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var R = function () {
                A() - C > 2e3 && h.wake(), setTimeout(R, 2e3)
            };
            R(), a.play = function (t, e) {
                return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
            }, a.pause = function (t, e) {
                return arguments.length && this.seek(t, e), this.paused(!0)
            }, a.resume = function (t, e) {
                return arguments.length && this.seek(t, e), this.paused(!1)
            }, a.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, a.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, a.reverse = function (t, e) {
                return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, a.render = function () { }, a.invalidate = function () {
                return this
            }, a._enabled = function (t, e) {
                return l || h.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function () {
                return this._enabled(!1, !1)
            }, a.kill = function (t, e) {
                return this._kill(t, e), this
            }, a._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, a._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat() ; --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, a.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, a.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, a.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, a.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, a.totalTime = function (t, e, i) {
                if (l || h.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
                }
                return this
            }, a.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, a.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, a.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
            }, a.paused = function (t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    l || t || h.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === n || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var P = y("core.SimpleTimeline", function (t) {
                L.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            a = P.prototype = new L, a.constructor = P, a.kill()._gc = !1, a._first = a._last = null, a._sortChildren = !1, a.add = a.insert = function (t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, a._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
            }, a.render = function (t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, a.rawTime = function () {
                return l || h.wake(), this._totalTime
            };
            var O = y("TweenLite", function (t, e, n) {
                if (L.call(this, e, n), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : O.selector(t) || t;
                var r, o, s, a = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? G[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : G[h], (a || t instanceof Array) && "number" != typeof t[0])
                    for (this._targets = s = d.call(t, 0), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== i && o[0] && (o[0] === i || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(d.call(o, 0))) : (this._siblings[r] = j(o, this, !1), 1 === h && this._siblings[r].length > 1 && H(o, this, null, 1, this._siblings[r])) : (o = s[r--] = O.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                else this._propLookup = {}, this._siblings = j(t, this, !1), 1 === h && this._siblings.length > 1 && H(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
                I = function (t) {
                    return t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
                },
                D = function (t, e) {
                    var i, n = {};
                    for (i in t) U[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!k[i] || k[i] && k[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            a = O.prototype = new L, a.constructor = O, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = !1, O.version = "1.10.2", O.defaultEase = a._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = h, O.autoSleep = !0, O.selector = i.$ || i.jQuery || function (t) {
                return i.$ ? (O.selector = i.$, i.$(t)) : i.document ? i.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
            };
            var B = O._internals = {},
                k = O._plugins = {},
                F = O._tweenLookup = {},
                N = 0,
                U = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                G = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                z = L._rootFramesTimeline = new P,
                V = L._rootTimeline = new P;
            V._startTime = h.time, z._startTime = h.frame, V._active = z._active = !0, L._updateRoot = function () {
                if (V.render((h.time - V._startTime) * V._timeScale, !1, !1), z.render((h.frame - z._startTime) * z._timeScale, !1, !1), !(h.frame % 120)) {
                    var t, e, i;
                    for (i in F) {
                        for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete F[i]
                    }
                    if (i = V._first, (!i || i._paused) && O.autoSleep && !z._first && 1 === h._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || h.sleep()
                    }
                }
            }, h.addEventListener("tick", L._updateRoot);
            var j = function (t, e, i) {
                var n, r, o = t._gsTweenID;
                if (F[o || (t._gsTweenID = o = "t" + N++)] || (F[o] = {
                    target: t,
                    tweens: []
                }), e && (n = F[o].tweens, n[r = n.length] = e, i))
                    for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return F[o].tweens
            },
                H = function (t, e, i, n, r) {
                    var o, s, a, h;
                    if (1 === n || n >= 4) {
                        for (h = r.length, o = 0; h > o; o++)
                            if ((a = r[o]) !== e) a._gc || a._enabled(!1, !1) && (s = !0);
                            else if (5 === n) break;
                        return s
                    }
                    var l, c = e._startTime + 1e-10,
                        u = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (o = r.length; --o > -1;) (a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || W(e, 0, d), 0 === W(a, l, d) && (u[p++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale + 1e-10 > c && ((d || !a._initted) && 2e-10 >= c - a._startTime || (u[p++] = a)));
                    for (o = p; --o > -1;) a = u[o], 2 === n && a._kill(i, t) && (s = !0), (2 !== n || !a._firstPT && a._initted) && a._enabled(!1, !1) && (s = !0);
                    return s
                },
                W = function (t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime, s = 1e-10; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * s > o - e ? s : (o += t.totalDuration() / t._timeScale / r) > e + s ? 0 : o - e - s
                };
            a._init = function () {
                var t, e, i, n, r = this.vars,
                    o = this._overwrittenProps,
                    s = this._duration,
                    a = r.immediateRender,
                    h = r.ease;
                if (r.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, r.startAt), a)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== s) return
                } else if (r.runBackwards && r.immediateRender && 0 !== s)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else if (0 === this._time) {
                        i = {};
                        for (n in r) U[n] && "autoCSS" !== n || (i[n] = r[n]);
                        return i.overwrite = 0, void (this._startAt = O.to(this.target, 0, i))
                    }
                if (this._ease = h ? h instanceof b ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new b(h, r.easeParams) : w[h] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o); if (e && O._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, a._initProps = function (t, e, n, r) {
                var o, s, a, h, l, c;
                if (null == t) return !1;
                this.vars.css || t.style && t !== i && t.nodeType && k.css && this.vars.autoCSS !== !1 && D(this.vars, t);
                for (o in this.vars) {
                    if (c = this.vars[o], U[o]) c instanceof Array && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (k[o] && (h = new k[o])._onInitTween(t, this.vars[o], this)) {
                        for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: o,
                            pg: !0,
                            pr: h._priority
                        }, s = h._overwriteProps.length; --s > -1;) e[h._overwriteProps[s]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (a = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = e[o] = l = {
                        _next: this._firstPT,
                        t: t,
                        p: o,
                        f: "function" == typeof t[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), l.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, t) ? this._initProps(t, e, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && H(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, r)) : a
            }, a.render = function (t, e, i) {
                var n, r, o, s = this._time;
                if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var a = t / this._duration,
                        h = this._easeType,
                        l = this._easePower;
                    (1 === h || 3 === h && a >= .5) && (a = 1 - a), 3 === h && (a *= 2), 1 === l ? a *= a : 2 === l ? a *= a * a : 3 === l ? a *= a * a * a : 4 === l && (a *= a * a * a * a), this.ratio = 1 === h ? 1 - a : 2 === h ? a : .5 > t / this._duration ? a / 2 : 1 - a / 2
                } else this.ratio = this._ease.getRatio(t / this._duration); if (this._time !== s || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / this._duration) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || x))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || x)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || x)))
                }
            }, a._kill = function (t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var i, n, r, o, s, a, h, l;
                if ((e instanceof Array || I(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (a = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                s = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        s = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    } if (s) {
                        h = t || s, l = t !== n && "all" !== n && t !== s && (null == t || t._tempKill !== !0);
                        for (r in h) (o = s[r]) && (o.pg && o.t._kill(h) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), l && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return a
            }, a.invalidate = function () {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, a._enabled = function (t, e) {
                if (l || h.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = j(n[i], this, !0);
                    else this._siblings = j(this.target, this, !0)
                }
                return L.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, O.to = function (t, e, i) {
                return new O(t, e, i)
            }, O.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
            }, O.delayedCall = function (t, e, i, n, r) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, O.set = function (t, e) {
                return new O(t, 0, e)
            }, O.killTweensOf = O.killDelayedCallsTo = function (t, e) {
                for (var i = O.getTweensOf(t), n = i.length; --n > -1;) i[n]._kill(e, t)
            }, O.getTweensOf = function (t) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var e, i, n, r;
                if ((t instanceof Array || I(t)) && "number" != typeof t[0]) {
                    for (e = t.length, i = []; --e > -1;) i = i.concat(O.getTweensOf(t[e]));
                    for (e = i.length; --e > -1;)
                        for (r = i[e], n = e; --n > -1;) r === i[n] && i.splice(e, 1)
                } else
                    for (i = j(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
                return i
            };
            var X = y("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = X.prototype
            }, !0);
            if (a = X.prototype, X.version = "1.10.1", X.API = 2, a._firstPT = null, a._addTween = function (t, e, i, n, r, o) {
                var s, a;
                return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: s,
                f: "function" == typeof t[e],
                n: r || e,
                r: o
            }, a._next && (a._next._prev = a), a) : void 0
            }, a.setRatio = function (t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, a._kill = function (t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
            else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, a._roundProps = function (t, e) {
                for (var i = this._firstPT; i;) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, O._onPluginEvent = function (t, e) {
                var i, n, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : o = a, a = s
            }
                    a = e._firstPT = r
            }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, X.activate = function (t) {
                for (var e = t.length; --e > -1;) t[e].API === X.API && (k[(new t[e])._propName] = t[e]);
                return !0
            }, v.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    o = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
                    s = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        X.call(this, i, n), this._overwriteProps = r || []
            }, t.global === !0),
                    a = s.prototype = new X(i);
                a.constructor = s, s.API = t.API;
                for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version, X.activate([s]), s
            }, o = i._gsQueue) {
                for (s = 0; o.length > s; s++) o[s]();
                for (a in m) m[a].func || i.console.log("GSAP encountered missing dependency: com.greensock." + a)
            }
            l = !1
        }(window)
    },
    function (t, e) {
        (window._gsQueue || (window._gsQueue = [])).push(function () {
            "use strict";
            window._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, n, r = window.GreenSockGlobals || window,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    h = o._class,
                    l = function (e, i) {
                        var n = h("easing." + e, function () { }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function () { },
                    u = function (t, e, i, n) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t), r
                    },
                    p = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    d = function (e, i) {
                        var n = h("easing." + e, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    f = u("Back", d("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function (t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function (t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, n, r, o, s, a, h = e.taper || "none", l = [], c = 0, u = 0 | (e.points || 20), d = u, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / u * d, n = g ? g.getRatio(i) : i, "none" === h ? r = v : "out" === h ? (o = 1 - i, r = o * o * v) : "in" === h ? r = i * i * v : .5 > i ? (o = 2 * i, r = .5 * o * o * v) : (o = 2 * (1 - i), r = .5 * o * o * v), f ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), l[c++] = {
                        x: i,
                        y: n
                    };
                    for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), a = new p(1, 1, null), d = u; --d > -1;) s = l[d], a = new p(s.x, s.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function (t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function (t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function (e, i, n) {
                    var r = h("easing." + e, function (t, e) {
                        this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function (t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", n("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
                }, .3), n("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2))
                }, .3), n("ElasticInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function (t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function (t) {
                    return Math.sin(t * a)
                }), l("SineIn", function (t) {
                    return -Math.cos(t * a) + 1
                }), l("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
            }, !0)
        }), window._gsDefine && window._gsQueue.pop()()
    },
    function (t, e) {
        (window._gsQueue || (window._gsQueue = [])).push(function () {
            "use strict";
            window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var i, n, r, o, s = function () {
                    t.call(this, "css"), this._overwriteProps.length = 0
                },
                    a = {},
                    h = s.prototype = new t("css");
                h.constructor = s, s.version = "1.9.6", s.API = 2, s.defaultTransformPerspective = 0, h = "px", s.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h
                };
                var l, c, u, p, d, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    _ = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/,
                    b = /opacity:([^;]*)/,
                    w = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    T = /([A-Z])/g,
                    M = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function (t, e) {
                        return e.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    P = /,(?=[^\)]*(?:\(|$))/gi,
                    O = Math.PI / 180,
                    I = 180 / Math.PI,
                    D = {},
                    B = document,
                    k = B.createElement("div"),
                    F = B.createElement("img"),
                    N = s._internals = {
                        _specialProps: a
                    },
                    U = navigator.userAgent,
                    G = function () {
                        var t, e = U.indexOf("Android"),
                            i = B.createElement("div");
                        return u = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === e || Number(U.substr(e + 8, 1)) > 3), d = u && 6 > Number(U.substr(U.indexOf("Version/") + 8, 1)), p = -1 !== U.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U), f = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], !!t && /^0.55/.test(t.style.opacity)
                    }(),
                    z = function (t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    V = function (t) {
                        window.console && void 0
                    },
                    j = "",
                    H = "",
                    W = function (t, e) {
                        e = e || k;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (H = 3 === n ? "ms" : i[n], j = "-" + H.toLowerCase() + "-", H + t) : null
                    },
                    X = B.defaultView ? B.defaultView.getComputedStyle : function () { },
                    Y = s.getStyle = function (t, e, i, n, r) {
                        var o;
                        return G || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || X(t, null)) ? (t = i.getPropertyValue(e.replace(T, "-$1").toLowerCase()), o = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, o = i[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : z(t)
                    },
                    q = function (t, e, i, n, r) {
                        if ("px" === n || !n) return i;
                        if ("auto" === n || !i) return 0;
                        var o, s = C.test(e),
                            a = t,
                            h = k.style,
                            l = 0 > i;
                        return l && (i = -i), "%" === n && -1 !== e.indexOf("border") ? o = i / 100 * (s ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== n && a.appendChild ? h[s ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || B.body, h[s ? "width" : "height"] = i + n), a.appendChild(k), o = parseFloat(k[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(k), 0 !== o || r || (o = q(t, e, i, n, !0))), l ? -o : o
                    },
                    K = function (t, e, i) {
                        if ("absolute" !== Y(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Y(t, "margin" + n, i);
                        return t["offset" + n] - (q(t, e, parseFloat(r), r.replace(_, "")) || 0)
                    },
                    Z = function (t, e) {
                        var i, n, r = {};
                        if (e = e || X(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(M, A)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) r[i.replace(M, A)] = e[i];
                        return G || (r.opacity = z(t)), n = St(t, e, !1), r.rotation = n.rotation * I, r.skewX = n.skewX * I, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, wt && (r.z = n.z, r.rotationX = n.rotationX * I, r.rotationY = n.rotationY * I, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    J = function (t, e, i, n, r) {
                        var o, s, a, h = {},
                            l = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (h[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : K(t, s), void 0 !== l[s] && (a = new ut(l, s, l[s], a)));
                        if (n)
                            for (s in n) "className" !== s && (h[s] = n[s]);
                        return {
                            difs: h,
                            firstMPT: a
                        }
                    },
                    Q = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    $ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    tt = function (t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = Q[e],
                            o = r.length;
                        for (i = i || X(t, null) ; --o > -1;) n -= parseFloat(Y(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Y(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    et = function (t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n))) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    it = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    nt = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    rt = function (t, e, i, n) {
                        var r, o, s, a, h = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t * O : (r = 2 * Math.PI, o = t.split("_"), s = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? O : 1) - ("=" === t.charAt(1) ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = e + s), h > a && a > -h && (a = 0), a
                    },
                    ot = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    st = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    at = function (t) {
                        var e, i, n, r, o, s;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = st(r + 1 / 3, e, i), t[1] = st(r, e, i), t[2] = st(r - 1 / 3, e, i), t) : (t = t.match(m) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in ot) ht += "|" + h + "\\b";
                ht = RegExp(ht + ")", "gi");
                var lt = function (t, e, i, n) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var r, o = e ? (t.match(ht) || [""])[0] : "",
                        s = t.split(o).join("").match(v) || [],
                        a = t.substr(0, t.indexOf(s[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        l = -1 !== t.indexOf(" ") ? " " : ",",
                        c = s.length,
                        u = c > 0 ? s[0].replace(m, "") : "";
                    return c ? r = e ? function (t) {
                        var e, p, d, f;
                        if ("number" == typeof t) t += u;
                        else if (n && P.test(t)) {
                            for (f = t.replace(P, "|").split("|"), d = 0; f.length > d; d++) f[d] = r(f[d]);
                            return f.join(",")
                        }
                        if (e = (t.match(ht) || [o])[0], p = t.split(e).join("").match(v) || [], d = p.length, c > d--)
                            for (; c > ++d;) p[d] = i ? p[0 | (d - 1) / 2] : s[d];
                        return a + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function (t) {
                        var e, o, p;
                        if ("number" == typeof t) t += u;
                        else if (n && P.test(t)) {
                            for (o = t.replace(P, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
                            return o.join(",")
                        }
                        if (e = t.match(v) || [], p = e.length, c > p--)
                            for (; c > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : s[p];
                        return a + e.join(l) + h
                    } : function (t) {
                        return t
                    }
                },
                    ct = function (t) {
                        return t = t.split(","),
                            function (e, i, n, r, o, s, a) {
                                var h, l = (i + "").split(" ");
                                for (a = {}, h = 0; 4 > h; h++) a[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    ut = (N._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o = this.data, s = o.proxy, a = o.firstMPT, h = 1e-6; a;) e = s[a.v], a.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0), a.t[a.p] = e, a = a._next;
                        if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                            for (a = o.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function (t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    pt = (N._parseToProxy = function (t, e, i, n, r, o) {
                        var s, a, h, l, c, u = n,
                            p = {},
                            d = {},
                            f = i._transform,
                            m = D;
                        for (i._transform = null, D = e, n = c = i.parse(t, e, n, r), D = m, o && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))) ; n && n !== u;) {
                            if (1 >= n.type && (a = n.p, d[a] = n.s + n.c, p[a] = n.s, o || (l = new ut(n, "s", a, l, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) h = "xn" + s, a = n.p + "_" + h, d[a] = n.data[h], p[a] = n[h], o || (l = new ut(n, h, a, l, n.rxp[h]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: d,
                            firstMPT: l,
                            pt: c
                        }
                    }, N.CSSPropTween = function (t, e, n, r, s, a, h, l, c, u, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = h || "css_" + e, t instanceof pt || o.push(this.n), this.r = l, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === p ? n + r : p, s && (this._next = s, s._prev = this)
                    }),
                    dt = s.parseComplex = function (t, e, i, n, r, o, s, a, h, c) {
                        s = new pt(t, e, 0, 0, s, c ? 2 : 1, null, (!1), a, i, n), n += "";
                        var u, p, d, f, v, y, _, x, b, w, T, M, E = i.split(", ").join(",").split(" "),
                            A = n.split(", ").join(",").split(" "),
                            C = E.length,
                            L = l !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(P, ", ").split(" "), A = A.join(" ").replace(P, ", ").split(" "), C = E.length), C !== A.length && (E = (o || "").split(" "), C = E.length), s.plugin = h, s.setRatio = c, u = 0; C > u; u++)
                            if (f = E[u], v = A[u], x = parseFloat(f), x || 0 === x) s.appendXtra("", x, it(v, x), v.replace(g, ""), L && -1 !== v.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || ot[f] || S.test(f))) M = "," === v.charAt(v.length - 1) ? ")," : ")", f = at(f), v = at(v), b = f.length + v.length > 6, b && !G && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(A[u]).join("transparent")) : (G || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0).appendXtra("", f[1], v[1] - f[1], ",", !0).appendXtra("", f[2], v[2] - f[2], b ? "," : M, !0), b && (f = 4 > f.length ? 1 : f[3], s.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, M, !1)));
                            else if (y = f.match(m)) {
                                if (_ = v.match(g), !_ || _.length !== y.length) return s;
                                for (d = 0, p = 0; y.length > p; p++) T = y[p], w = f.indexOf(T, d), s.appendXtra(f.substr(d, w - d), Number(T), it(_[p], T), "", L && "px" === f.substr(w + T.length, 2), 0 === p), d = w + T.length;
                                s["xs" + s.l] += f.substr(d)
                            } else s["xs" + s.l] += s.l ? " " + f : f; if (-1 !== n.indexOf("=") && s.data) {
                                for (M = s.xs0 + s.data.s, u = 1; s.l > u; u++) M += s["xs" + u] + s.data["xn" + u];
                                s.e = M + s["xs" + u]
                            }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    ft = 9;
                for (h = pt.prototype, h.l = h.pr = 0; --ft > 0;) h["xn" + ft] = 0, h["xs" + ft] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new pt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var mt = function (t, e) {
                    e = e || {}, this.p = e.prefix ? W(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || lt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                    gt = N._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new mt(o[n], e)
                    },
                    vt = function (t) {
                        if (!a[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            gt(t, {
                                parser: function (t, i, n, r, o, s, h) {
                                    var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                    return l ? (l._cssRegister(), a[n].parse(t, i, n, r, o, s, h)) : (V("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                h = mt.prototype, h.parseComplex = function (t, e, i, n, r, o) {
                    var s, a, h, l, c, u, p = this.keyword;
                    if (this.multi && (P.test(i) || P.test(e) ? (a = e.replace(P, "|").split("|"), h = i.replace(P, "|").split("|")) : p && (a = [e], h = [i])), h) {
                        for (l = h.length > a.length ? h.length : a.length, s = 0; l > s; s++) e = a[s] = a[s] || this.dflt, i = h[s] = h[s] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (i = -1 === u ? h : a, i[s] += " " + p));
                        e = a.join(", "), i = h.join(", ")
                    }
                    return dt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, h.parse = function (t, e, i, n, o, s) {
                    return this.parseComplex(t.style, this.format(Y(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, s.registerSpecialProp = function (t, e, i) {
                    gt(t, {
                        parser: function (t, n, r, o, s, a) {
                            var h = new pt(t, r, 0, 0, s, 2, r, (!1), i);
                            return h.plugin = a, h.setRatio = e(t, n, o._tween, r), h
                        },
                        priority: i
                    })
                };
                var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    _t = W("transform"),
                    xt = j + "transform",
                    bt = W("transformOrigin"),
                    wt = null !== W("perspective"),
                    St = function (t, e, i) {
                        var n, r, o, a, h, l, c, u, p, d, f, m, g, v = i ? t._gsTransform || {
                            skewY: 0
                        } : {
                            skewY: 0
                        },
                            y = 0 > v.scaleX,
                            _ = 2e-5,
                            x = 1e5,
                            b = -Math.PI + 1e-4,
                            w = Math.PI - 1e-4,
                            S = wt ? parseFloat(Y(t, bt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        if (_t) n = Y(t, xt, e, !0);
                        else if (t.currentStyle)
                            if (n = t.currentStyle.filter.match(L), n && 4 === n.length) n = [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), v.x || 0, v.y || 0].join(",");
                            else {
                                if (null != v.x) return v;
                                n = ""
                            }
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = r.length; --o > -1;) a = Number(r[o]), r[o] = (h = a - (a |= 0)) ? (0 | h * x + (0 > h ? -.5 : .5)) / x + a : a;
                        if (16 === r.length) {
                            var T = r[8],
                                M = r[9],
                                E = r[10],
                                A = r[12],
                                C = r[13],
                                R = r[14];
                            if (v.zOrigin && (R = -v.zOrigin, A = T * R - r[12], C = M * R - r[13], R = E * R + v.zOrigin - r[14]), !i || null == v.rotationX) {
                                var P, O, I, D, B, k, F, N = r[0],
                                    U = r[1],
                                    G = r[2],
                                    z = r[3],
                                    V = r[4],
                                    j = r[5],
                                    H = r[6],
                                    W = r[7],
                                    X = r[11],
                                    q = v.rotationX = Math.atan2(H, E),
                                    K = b > q || q > w;
                                q && (D = Math.cos(-q), B = Math.sin(-q), P = V * D + T * B, O = j * D + M * B, I = H * D + E * B, T = V * -B + T * D, M = j * -B + M * D, E = H * -B + E * D, X = W * -B + X * D, V = P, j = O, H = I), q = v.rotationY = Math.atan2(T, N), q && (k = b > q || q > w, D = Math.cos(-q), B = Math.sin(-q), P = N * D - T * B, O = U * D - M * B, I = G * D - E * B, M = U * B + M * D, E = G * B + E * D, X = z * B + X * D, N = P, U = O, G = I), q = v.rotation = Math.atan2(U, j), q && (F = b > q || q > w, D = Math.cos(-q), B = Math.sin(-q), N = N * D + V * B, O = U * D + j * B, j = U * -B + j * D, H = G * -B + H * D, U = O), F && K ? v.rotation = v.rotationX = 0 : F && k ? v.rotation = v.rotationY = 0 : k && K && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(N * N + U * U) * x + .5) / x, v.scaleY = (0 | Math.sqrt(j * j + M * M) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(H * H + E * E) * x + .5) / x, v.skewX = 0, v.perspective = X ? 1 / (0 > X ? -X : X) : 0, v.x = A, v.y = C, v.z = R
                            }
                        } else if (!(wt && 0 !== r.length && v.x === r[4] && v.y === r[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === Y(t, "display", e))) {
                            var Z = r.length >= 6,
                                J = Z ? r[0] : 1,
                                Q = r[1] || 0,
                                $ = r[2] || 0,
                                tt = Z ? r[3] : 1;
                            v.x = r[4] || 0, v.y = r[5] || 0, l = Math.sqrt(J * J + Q * Q), c = Math.sqrt(tt * tt + $ * $), u = J || Q ? Math.atan2(Q, J) : v.rotation || 0, p = $ || tt ? Math.atan2($, tt) + u : v.skewX || 0, d = l - Math.abs(v.scaleX || 0), f = c - Math.abs(v.scaleY || 0), Math.abs(p) > Math.PI / 2 && Math.abs(p) < 1.5 * Math.PI && (y ? (l *= -1, p += 0 >= u ? Math.PI : -Math.PI, u += 0 >= u ? Math.PI : -Math.PI) : (c *= -1, p += 0 >= p ? Math.PI : -Math.PI)), m = (u - v.rotation) % Math.PI, g = (p - v.skewX) % Math.PI, (void 0 === v.skewX || d > _ || -_ > d || f > _ || -_ > f || m > b && w > m && !1 | m * x || g > b && w > g && !1 | g * x) && (v.scaleX = l, v.scaleY = c, v.rotation = u, v.skewX = p), wt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(s.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = S;
                        for (o in v) _ > v[o] && v[o] > -_ && (v[o] = 0);
                        return i && (t._gsTransform = v), v
                    },
                    Tt = function (t) {
                        var e, i, n = this.data,
                            r = -n.rotation,
                            o = r + n.skewX,
                            s = 1e5,
                            a = (0 | Math.cos(r) * n.scaleX * s) / s,
                            h = (0 | Math.sin(r) * n.scaleX * s) / s,
                            l = (0 | Math.sin(o) * -n.scaleY * s) / s,
                            c = (0 | Math.cos(o) * n.scaleY * s) / s,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var d, m, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== p.position,
                                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + h + ", M21=" + l + ", M22=" + c,
                                w = n.x,
                                S = n.y;
                            if (null != n.ox && (d = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, w += d - (d * a + m * h), S += m - (d * l + m * c)), y) d = g / 2, m = v / 2, b += ", Dx=" + (d - (d * a + m * h) + w) + ", Dy=" + (m - (d * l + m * c) + S) + ")";
                            else {
                                var T, M, E, A = 8 > f ? 1 : -1;
                                for (d = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > h ? -h : h) * v)) / 2 + w), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > l ? -l : l) * g)) / 2 + S), ft = 0; 4 > ft; ft++) M = $[ft], T = p[M], i = -1 !== T.indexOf("px") ? parseFloat(T) : q(this.t, M, parseFloat(T), T.replace(_, "")) || 0, E = i !== n[M] ? 2 > ft ? -n.ieOffsetX : -n.ieOffsetY : 2 > ft ? d - n.ieOffsetX : m - n.ieOffsetY, u[M] = (n[M] = Math.round(i - E * (0 === ft || 2 === ft ? 1 : A))) + "px";
                                b += ", sizingMethod='auto expand')"
                            }
                            u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, b) : b + " " + e, (0 === t || 1 === t) && 1 === a && 0 === h && 0 === l && 1 === c && (y && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
                        }
                    },
                    Mt = function () {
                        var t, e, i, n, r, o, s, a, h, l = this.data,
                            c = this.t.style,
                            u = l.perspective,
                            d = l.scaleX,
                            f = 0,
                            m = 0,
                            g = 0,
                            v = 0,
                            y = l.scaleY,
                            _ = 0,
                            x = 0,
                            b = 0,
                            w = 0,
                            S = l.scaleZ,
                            T = 0,
                            M = 0,
                            E = 0,
                            A = u ? -1 / u : 0,
                            C = l.rotation,
                            L = l.zOrigin,
                            R = 1e5;
                        p && (s = c.top ? "top" : c.bottom ? "bottom" : parseFloat(Y(this.t, "top", null, !1)) ? "bottom" : "top", i = Y(this.t, s, null, !1), a = parseFloat(i) || 0, h = i.substr((a + "").length) || "px", l._ffFix = !l._ffFix, c[s] = (l._ffFix ? a + .05 : a - .05) + h), (C || l.skewX) && (i = d * Math.cos(C), n = y * Math.sin(C), C -= l.skewX, f = d * -Math.sin(C), y *= Math.cos(C), d = i, v = n), C = l.rotationY, C && (t = Math.cos(C), e = Math.sin(C), i = d * t, n = v * t, r = S * -e, o = A * -e, m = d * e, _ = v * e, S *= t, A *= t, d = i, v = n, b = r, M = o), C = l.rotationX, C && (t = Math.cos(C), e = Math.sin(C), i = f * t + m * e, n = y * t + _ * e, r = w * t + S * e, o = E * t + A * e, m = f * -e + m * t, _ = y * -e + _ * t, S = w * -e + S * t, A = E * -e + A * t, f = i, y = n, w = r, E = o), L && (T -= L, g = m * T, x = _ * T, T = S * T + L), g = (i = (g += l.x) - (g |= 0)) ? (0 | i * R + (0 > i ? -.5 : .5)) / R + g : g, x = (i = (x += l.y) - (x |= 0)) ? (0 | i * R + (0 > i ? -.5 : .5)) / R + x : x, T = (i = (T += l.z) - (T |= 0)) ? (0 | i * R + (0 > i ? -.5 : .5)) / R + T : T, c[_t] = "matrix3d(" + [(0 | d * R) / R, (0 | v * R) / R, (0 | b * R) / R, (0 | M * R) / R, (0 | f * R) / R, (0 | y * R) / R, (0 | w * R) / R, (0 | E * R) / R, (0 | m * R) / R, (0 | _ * R) / R, (0 | S * R) / R, (0 | A * R) / R, g, x, T, u ? 1 + -T / u : 1].join(",") + ")"
                    },
                    Et = function () {
                        var t, e, i, n, r, o, s, a, h, l = this.data,
                            c = this.t,
                            u = c.style;
                        p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(Y(c, "top", null, !1)) ? "bottom" : "top", e = Y(c, t, null, !1), i = parseFloat(e) || 0, n = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + n), l.rotation || l.skewX ? (r = l.rotation, o = r - l.skewX, s = 1e5, a = l.scaleX * s, h = l.scaleY * s, u[_t] = "matrix(" + (0 | Math.cos(r) * a) / s + "," + (0 | Math.sin(r) * a) / s + "," + (0 | Math.sin(o) * -h) / s + "," + (0 | Math.cos(o) * h) / s + "," + l.x + "," + l.y + ")") : u[_t] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                    };
                gt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
                    parser: function (t, e, i, n, o, s, a) {
                        if (n._transform) return o;
                        var h, l, c, u, p, d, f, m = n._transform = St(t, r, !0),
                            g = t.style,
                            v = 1e-6,
                            y = yt.length,
                            _ = a,
                            x = {};
                        if ("string" == typeof _.transform && _t) c = g.cssText, g[_t] = _.transform, g.display = "block", h = St(t, null, !1), g.cssText = c;
                        else if ("object" == typeof _) {
                            if (h = {
                                scaleX: nt(null != _.scaleX ? _.scaleX : _.scale, m.scaleX),
                                scaleY: nt(null != _.scaleY ? _.scaleY : _.scale, m.scaleY),
                                scaleZ: nt(null != _.scaleZ ? _.scaleZ : _.scale, m.scaleZ),
                                x: nt(_.x, m.x),
                                y: nt(_.y, m.y),
                                z: nt(_.z, m.z),
                                perspective: nt(_.transformPerspective, m.perspective)
                            }, f = _.directionalRotation, null != f)
                                if ("object" == typeof f)
                                    for (c in f) _[c] = f[c];
                                else _.rotation = f;
                            h.rotation = rt("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : m.rotation * I, m.rotation, "rotation", x), wt && (h.rotationX = rt("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : m.rotationX * I || 0, m.rotationX, "rotationX", x), h.rotationY = rt("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : m.rotationY * I || 0, m.rotationY, "rotationY", x)), h.skewX = null == _.skewX ? m.skewX : rt(_.skewX, m.skewX), h.skewY = null == _.skewY ? m.skewY : rt(_.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                        }
                        for (p = m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == _.scale || (h.scaleZ = 1) ; --y > -1;) i = yt[y], u = h[i] - m[i], (u > v || -v > u || null != D[i]) && (d = !0, o = new pt(m, i, m[i], u, o), i in x && (o.e = x[i]), o.xs0 = 0, o.plugin = s, n._overwriteProps.push(o.n));
                        return u = _.transformOrigin, (u || wt && p && m.zOrigin) && (_t ? (d = !0, u = (u || Y(t, i, r, !1, "50% 50%")) + "", i = bt, o = new pt(g, i, 0, 0, o, (-1), "css_transformOrigin"), o.b = g[i], o.plugin = s, wt ? (c = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 ? parseFloat(u[2]) : c) || 0, o.xs0 = o.e = g[i] = u[0] + " " + (u[1] || "50%") + " 0px", o = new pt(m, "zOrigin", 0, 0, o, (-1), o.n), o.b = c, o.xs0 = o.e = m.zOrigin) : o.xs0 = o.e = g[i] = u) : et(u + "", m)), d && (n._transformType = p || 3 === this._transformType ? 3 : 2), o
                    },
                    prefix: !0
                }), gt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), gt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, o, s) {
                        e = this.format(e);
                        var a, h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            T = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), h = 0; S.length > h; h++) this.p.indexOf("border") && (S[h] = W(S[h])), u = c = Y(t, S[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), p = l = a[h], d = parseFloat(u), y = u.substr((d + "").length), _ = "=" === p.charAt(1), _ ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), v = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), v = p.substr((f + "").length)), "" === v && (v = n[i] || y), v !== y && (x = q(t, "borderLeft", d, y), b = q(t, "borderTop", d, y), "%" === v ? (u = 100 * (x / m) + "%", c = 100 * (b / g) + "%") : "em" === v ? (w = q(t, "borderLeft", 1, "em"), u = x / w + "em", c = b / w + "em") : (u = x + "px", c = b + "px"), _ && (p = parseFloat(u) + f + v, l = parseFloat(c) + f + v)), s = dt(T, S[h], u + " " + c, p + " " + l, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: lt("0px 0px 0px 0px", !1, !0)
                }), gt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, n, o, s) {
                        var a, h, l, c, u, p, d = "background-position",
                            m = r || X(t, null),
                            g = this.format((m ? f ? m.getPropertyValue(d + "-x") + " " + m.getPropertyValue(d + "-y") : m.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Y(t, "backgroundImage").replace(E, ""), p && "none" !== p)) {
                            for (a = g.split(" "), h = v.split(" "), F.setAttribute("src", p), l = 2; --l > -1;) g = a[l], c = -1 !== g.indexOf("%"), c !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - F.width : t.offsetHeight - F.height, a[l] = c ? parseFloat(g) / 100 * u + "px" : 100 * (parseFloat(g) / u) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, o, s)
                    },
                    formatter: et
                }), gt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: et
                }), gt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), gt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), gt("transformStyle", {
                    prefix: !0
                }), gt("backfaceVisibility", {
                    prefix: !0
                }), gt("margin", {
                    parser: ct("marginTop,marginRight,marginBottom,marginLeft")
                }), gt("padding", {
                    parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), gt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, n, o, s) {
                        var a, h, l;
                        return 9 > f ? (h = t.currentStyle, l = 8 > f ? " " : ",", a = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(Y(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), gt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), gt("autoRound,strictUnits", {
                    parser: function (t, e, i, n, r) {
                        return r
                    }
                }), gt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, n, o, s) {
                        return this.parseComplex(t.style, this.format(Y(t, "borderTopWidth", r, !1, "0px") + " " + Y(t, "borderTopStyle", r, !1, "solid") + " " + Y(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), gt("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, n, r) {
                        var o = t.style,
                            s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new pt(o, s, 0, 0, r, (-1), i, (!1), 0, o[s], e)
                    }
                });
                var At = function (t) {
                    var e, i = this.t,
                        n = i.filter,
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=100)"), -1 === n.indexOf("opacity") ? i.filter += " alpha(opacity=" + r + ")" : i.filter = n.replace(x, "opacity=" + r))
                };
                gt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, o, s) {
                        var a, h = parseFloat(Y(t, "opacity", r, !1, "1")),
                            l = t.style;
                        return e = parseFloat(e), "autoAlpha" === i && (a = Y(t, "visibility", r), 1 === h && "hidden" === a && 0 !== e && (h = 0), o = new pt(l, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== h ? "visible" : "hidden", 0 === e ? "hidden" : "visible"), o.xs0 = "visible", n._overwriteProps.push(o.n)), G ? o = new pt(l, "opacity", h, e - h, o) : (o = new pt(l, "opacity", 100 * h, 100 * (e - h), o), o.xn1 = "autoAlpha" === i ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = At), o
                    }
                });
                var Ct = function (t, e) {
                    e && (t.removeProperty ? t.removeProperty(e.replace(T, "-$1").toLowerCase()) : t.removeAttribute(e))
                },
                    Lt = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ct(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                gt("className", {
                    parser: function (t, e, n, o, s, a, h) {
                        var l, c, u, p, d, f = t.className,
                            m = t.style.cssText;
                        if (s = o._classNamePT = new pt(t, n, 0, 0, s, 2), s.setRatio = Lt, s.pr = -11, i = !0, s.b = f, c = Z(t, r), u = t._gsClassPT) {
                            for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.className = s.e, l = J(t, c, Z(t), h, p), t.className = f, s.data = l.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, l.difs, s, a)), s
                    }
                });
                var Rt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration)
                        for (var e, i = "all" === this.e, n = this.t.style, r = i ? n.cssText.split(";") : this.e.split(","), o = r.length, s = a.transform.parse; --o > -1;) e = r[o], i && (e = e.substr(0, e.indexOf(":")).split(" ").join("")), a[e] && (e = a[e].parse === s ? _t : a[e].p), Ct(n, e)
                };
                for (gt("clearProps", {
                    parser: function (t, e, n, r, o) {
                        return o = new pt(t, n, 0, 0, o, 2), o.setRatio = Rt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                }
                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ft = h.length; ft--;) vt(h[ft]);
                h = s.prototype, h._firstPT = null, h._onInitTween = function (t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, l = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = X(t, ""), o = this._overwriteProps;
                    var h, p, f, m, g, v, y, _, x, w = t.style;
                    if (c && "" === w.zIndex && (h = Y(t, "zIndex", r), ("auto" === h || "" === h) && (w.zIndex = 0)), "string" == typeof e && (m = w.cssText, h = Z(t, r), w.cssText = m + ";" + e, h = J(t, h, Z(t)).difs, !G && b.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, _t ? u && (c = !0, "" === w.zIndex && (y = Y(t, "zIndex", r), ("auto" === y || "" === y) && (w.zIndex = 0)), d && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, f = p; f && f._next;) f = f._next;
                        _ = new pt(t, "transform", 0, 0, null, 2),
                            this._linkCSSP(_, null, f), _.setRatio = x && wt ? Mt : _t ? Et : Tt, _.data = this._transform || St(t, r, !0), o.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, f = m; f && f.pr > p.pr;) f = f._next;
                            (p._prev = f ? f._prev : g) ? p._prev._next = p : m = p, (p._next = f) ? f._prev = p : g = p, p = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function (t, e, i, o) {
                    var s, h, c, u, p, d, f, m, g, v, y = t.style;
                    for (s in e) d = e[s], h = a[s], h ? i = h.parse(t, d, s, this, i, o, e) : (p = Y(t, s, r) + "", g = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && S.test(d) ? (g || (d = at(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = dt(y, s, p, d, !0, "transparent", i, 0, o)) : !g || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (c = parseFloat(p), f = c || 0 === c ? p.substr((c + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (c = tt(t, s, r), f = "px") : "left" === s || "top" === s ? (c = K(t, s, r), f = "px") : (c = "opacity" !== s ? 0 : 1, f = "")), v = g && "=" === d.charAt(1), v ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), m = d.replace(_, "")) : (u = parseFloat(d), m = g ? d.substr((u + "").length) || "" : ""), "" === m && (m = n[s] || f), d = u || 0 === u ? (v ? u + c : u) + m : e[s], f !== m && "" !== m && (u || 0 === u) && (c || 0 === c) && (c = q(t, s, c, f), "%" === m ? (c /= q(t, s, 100, "%") / 100, c > 100 && (c = 100), e.strictUnits !== !0 && (p = c + "%")) : "em" === m ? c /= q(t, s, 1, "em") : (u = q(t, s, u, m), m = "px"), v && (u || 0 === u) && (d = u + c + m)), v && (u += c), !c && 0 !== c || !u && 0 !== u ? d || "NaN" != d + "" && null != d ? (i = new pt(y, s, u || c || 0, 0, i, (-1), "css_" + s, (!1), 0, p, d), i.xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : p) : V("invalid " + s + " tween value: " + e[s]) : (i = new pt(y, s, c, u - c, i, 0, "css_" + s, l !== !1 && ("px" === m || "zIndex" === s), 0, p, d), i.xs0 = m)) : i = dt(y, s, p, d, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, h.setRatio = function (t) {
                    var e, i, n, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : o > e && e > -o && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function (t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2
                }, h._linkCSSP = function (t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next), t._next = e, t._prev = i), t
                }, h._kill = function (e) {
                    var i, n, r, o = e;
                    if (e.css_autoAlpha || e.css_alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.css_opacity = 1, o.css_autoAlpha && (o.css_visibility = 1)
                    }
                    return e.css_className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
                };
                var Pt = function (t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Pt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(Z(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Pt(o, e, i)
                };
                return s.cascadeTo = function (t, i, n) {
                    var r, o, s, a = e.to(t, i, n),
                        h = [a],
                        l = [],
                        c = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = a._targets || a.target, Pt(t, l, u), a.render(i, !0), Pt(t, c), a.render(0, !0), a._enabled(!0), r = u.length; --r > -1;)
                        if (o = J(u[r], l[r], c[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) p[s] && (o[s] = n[s]);
                            h.push(e.to(u[r], i, o))
                        }
                    return h
                }, t.activate([s]), s
            }, !0)
        }), window._gsDefine && window._gsQueue.pop()()
    },
    function (t, e, i) {
        var n, r;
        (function (o) {
            ! function () {
                "use strict";
                var s = function () {
                    this.init()
                };
                s.prototype = {
                    init: function () {
                        var t = this || a;
                        return t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.mobileAutoEnable = !0, t._setup(), t
                    },
                    volume: function (t) {
                        var e = this || a;
                        if (t = parseFloat(t), e.ctx || m(), "undefined" != typeof t && t >= 0 && t <= 1) {
                            if (e._volume = t, e._muted) return e;
                            e.usingWebAudio && (e.masterGain.gain.value = t);
                            for (var i = 0; i < e._howls.length; i++)
                                if (!e._howls[i]._webAudio)
                                    for (var n = e._howls[i]._getSoundIds(), r = 0; r < n.length; r++) {
                                        var o = e._howls[i]._soundById(n[r]);
                                        o && o._node && (o._node.volume = o._volume * t)
                                    }
                            return e
                        }
                        return e._volume
                    },
                    mute: function (t) {
                        var e = this || a;
                        e.ctx || m(), e._muted = t, e.usingWebAudio && (e.masterGain.gain.value = t ? 0 : e._volume);
                        for (var i = 0; i < e._howls.length; i++)
                            if (!e._howls[i]._webAudio)
                                for (var n = e._howls[i]._getSoundIds(), r = 0; r < n.length; r++) {
                                    var o = e._howls[i]._soundById(n[r]);
                                    o && o._node && (o._node.muted = !!t || o._muted)
                                }
                        return e
                    },
                    unload: function () {
                        for (var t = this || a, e = t._howls.length - 1; e >= 0; e--) t._howls[e].unload();
                        return t.usingWebAudio && "undefined" != typeof t.ctx.close && (t.ctx.close(), t.ctx = null, m()), t
                    },
                    codecs: function (t) {
                        return (this || a)._codecs[t]
                    },
                    _setup: function () {
                        var t = this || a;
                        return t.state = t.ctx ? t.ctx.state || "running" : "running", t._autoSuspend(), t.noAudio || t._setupCodecs(), t
                    },
                    _setupCodecs: function () {
                        var t = this || a,
                            e = "undefined" != typeof Audio ? new Audio : null;
                        if (!e || "function" != typeof e.canPlayType) return t;
                        var i = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                            n = t._navigator && t._navigator.userAgent.match(/OPR\/([0-6].)/g),
                            r = n && parseInt(n[0].split("/")[1], 10) < 33;
                        return t._codecs = {
                            mp3: !(r || !i && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!i,
                            opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                            aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            webm: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, "")
                        }, t
                    },
                    _enableMobileAudio: function () {
                        var t = this || a,
                            e = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(t._navigator && t._navigator.userAgent),
                            i = !!("ontouchend" in window || t._navigator && t._navigator.maxTouchPoints > 0 || t._navigator && t._navigator.msMaxTouchPoints > 0);
                        if (!t._mobileEnabled && t.ctx && (e || i)) {
                            t._mobileEnabled = !1, t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
                            var n = function () {
                                var e = t.ctx.createBufferSource();
                                e.buffer = t._scratchBuffer, e.connect(t.ctx.destination), "undefined" == typeof e.start ? e.noteOn(0) : e.start(0), e.onended = function () {
                                    e.disconnect(0), t._mobileEnabled = !0, t.mobileAutoEnable = !1, document.removeEventListener("touchend", n, !0)
                                }
                            };
                            return document.addEventListener("touchend", n, !0), t
                        }
                    },
                    _autoSuspend: function () {
                        var t = this;
                        if (t.autoSuspend && t.ctx && "undefined" != typeof t.ctx.suspend && a.usingWebAudio) {
                            for (var e = 0; e < t._howls.length; e++)
                                if (t._howls[e]._webAudio)
                                    for (var i = 0; i < t._howls[e]._sounds.length; i++)
                                        if (!t._howls[e]._sounds[i]._paused) return t;
                            return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout(function () {
                                t.autoSuspend && (t._suspendTimer = null, t.state = "suspending", t.ctx.suspend().then(function () {
                                    t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume())
                                }))
                            }, 3e4), t
                        }
                    },
                    _autoResume: function () {
                        var t = this;
                        if (t.ctx && "undefined" != typeof t.ctx.resume && a.usingWebAudio) return "running" === t.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state ? (t.state = "resuming", t.ctx.resume().then(function () {
                            t.state = "running"
                        }), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
                    }
                };
                var a = new s,
                    h = function (t) {
                        var e = this;
                        return t.src && 0 !== t.src.length ? void e.init(t) : void 0
                    };
                h.prototype = {
                    init: function (t) {
                        var e = this;
                        return a.ctx || m(), e._autoplay = t.autoplay || !1, e._format = "string" != typeof t.format ? t.format : [t.format], e._html5 = t.html5 || !1, e._muted = t.mute || !1, e._loop = t.loop || !1, e._pool = t.pool || 5, e._preload = "boolean" != typeof t.preload || t.preload, e._rate = t.rate || 1, e._sprite = t.sprite || {}, e._src = "string" != typeof t.src ? t.src : [t.src], e._volume = void 0 !== t.volume ? t.volume : 1, e._duration = 0, e._state = "unloaded", e._sounds = [], e._endTimers = {}, e._queue = [], e._onend = t.onend ? [{
                            fn: t.onend
                        }] : [], e._onfade = t.onfade ? [{
                            fn: t.onfade
                        }] : [], e._onload = t.onload ? [{
                            fn: t.onload
                        }] : [], e._onloaderror = t.onloaderror ? [{
                            fn: t.onloaderror
                        }] : [], e._onpause = t.onpause ? [{
                            fn: t.onpause
                        }] : [], e._onplay = t.onplay ? [{
                            fn: t.onplay
                        }] : [], e._onstop = t.onstop ? [{
                            fn: t.onstop
                        }] : [], e._onmute = t.onmute ? [{
                            fn: t.onmute
                        }] : [], e._onvolume = t.onvolume ? [{
                            fn: t.onvolume
                        }] : [], e._onrate = t.onrate ? [{
                            fn: t.onrate
                        }] : [], e._onseek = t.onseek ? [{
                            fn: t.onseek
                        }] : [], e._webAudio = a.usingWebAudio && !e._html5, "undefined" != typeof a.ctx && a.ctx && a.mobileAutoEnable && a._enableMobileAudio(), a._howls.push(e), e._preload && e.load(), e
                    },
                    load: function () {
                        var t = this,
                            e = null;
                        if (a.noAudio) return void t._emit("loaderror", null, "No audio support.");
                        "string" == typeof t._src && (t._src = [t._src]);
                        for (var i = 0; i < t._src.length; i++) {
                            var n, r;
                            if (t._format && t._format[i]) n = t._format[i];
                            else {
                                if (r = t._src[i], "string" != typeof r) {
                                    t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                    continue
                                }
                                n = /^data:audio\/([^;,]+);/i.exec(r), n || (n = /\.([^.]+)$/.exec(r.split("?", 1)[0])), n && (n = n[1].toLowerCase())
                            } if (a.codecs(n)) {
                                e = t._src[i];
                                break
                            }
                        }
                        return e ? (t._src = e, t._state = "loading", "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (t._html5 = !0, t._webAudio = !1), new l(t), t._webAudio && u(t), t) : void t._emit("loaderror", null, "No codec support for selected audio sources.")
                    },
                    play: function (t, e) {
                        var i = this,
                            n = null;
                        if ("number" == typeof t) n = t, t = null;
                        else {
                            if ("string" == typeof t && "loaded" === i._state && !i._sprite[t]) return null;
                            if ("undefined" == typeof t) {
                                t = "__default";
                                for (var r = 0, o = 0; o < i._sounds.length; o++) i._sounds[o]._paused && !i._sounds[o]._ended && (r++, n = i._sounds[o]._id);
                                1 === r ? t = null : n = null
                            }
                        }
                        var s = n ? i._soundById(n) : i._inactiveSound();
                        if (!s) return null;
                        if (n && !t && (t = s._sprite || "__default"), "loaded" !== i._state && !i._sprite[t]) return i._queue.push({
                            event: "play",
                            action: function () {
                                i.play(i._soundById(s._id) ? s._id : void 0)
                            }
                        }), s._id;
                        if (n && !s._paused) return e || setTimeout(function () {
                            i._emit("play", s._id)
                        }, 0), s._id;
                        i._webAudio && a._autoResume();
                        var h = s._seek > 0 ? s._seek : i._sprite[t][0] / 1e3,
                            l = (i._sprite[t][0] + i._sprite[t][1]) / 1e3 - h,
                            c = 1e3 * l / Math.abs(s._rate);
                        s._paused = !1, s._ended = !1, s._sprite = t, s._seek = h, s._start = i._sprite[t][0] / 1e3, s._stop = (i._sprite[t][0] + i._sprite[t][1]) / 1e3, s._loop = !(!s._loop && !i._sprite[t][2]);
                        var u = s._node;
                        if (i._webAudio) {
                            var p = function () {
                                i._refreshBuffer(s);
                                var t = s._muted || i._muted ? 0 : s._volume;
                                u.gain.setValueAtTime(t, a.ctx.currentTime), s._playStart = a.ctx.currentTime, "undefined" == typeof u.bufferSource.start ? s._loop ? u.bufferSource.noteGrainOn(0, h, 86400) : u.bufferSource.noteGrainOn(0, h, l) : s._loop ? u.bufferSource.start(0, h, 86400) : u.bufferSource.start(0, h, l), c !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c)), e || setTimeout(function () {
                                    i._emit("play", s._id)
                                }, 0)
                            };
                            "loaded" === i._state ? p() : (i.once("load", p, s._id), i._clearTimer(s._id))
                        } else {
                            var d = function () {
                                u.currentTime = h, u.muted = s._muted || i._muted || a._muted || u.muted, u.volume = s._volume * a.volume(), u.playbackRate = s._rate, setTimeout(function () {
                                    u.play(), c !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), c)), e || i._emit("play", s._id)
                                }, 0)
                            },
                                f = "loaded" === i._state && (window && window.ejecta || !u.readyState && a._navigator.isCocoonJS);
                            if (4 === u.readyState || f) d();
                            else {
                                var m = function () {
                                    d(), u.removeEventListener(a._canPlayEvent, m, !1)
                                };
                                u.addEventListener(a._canPlayEvent, m, !1), i._clearTimer(s._id)
                            }
                        }
                        return s._id
                    },
                    pause: function (t) {
                        var e = this;
                        if ("loaded" !== e._state) return e._queue.push({
                            event: "pause",
                            action: function () {
                                e.pause(t)
                            }
                        }), e;
                        for (var i = e._getSoundIds(t), n = 0; n < i.length; n++) {
                            e._clearTimer(i[n]);
                            var r = e._soundById(i[n]);
                            if (r && !r._paused) {
                                if (r._seek = e.seek(i[n]), r._rateSeek = 0, r._paused = !0, e._stopFade(i[n]), r._node)
                                    if (e._webAudio) {
                                        if (!r._node.bufferSource) return e;
                                        "undefined" == typeof r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), e._cleanBuffer(r._node)
                                    } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                                arguments[1] || e._emit("pause", r._id)
                            }
                        }
                        return e
                    },
                    stop: function (t, e) {
                        var i = this;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "stop",
                            action: function () {
                                i.stop(t)
                            }
                        }), i;
                        for (var n = i._getSoundIds(t), r = 0; r < n.length; r++) {
                            i._clearTimer(n[r]);
                            var o = i._soundById(n[r]);
                            if (o && !o._paused && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, i._stopFade(n[r]), o._node))
                                if (i._webAudio) {
                                    if (!o._node.bufferSource) return i;
                                    "undefined" == typeof o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), i._cleanBuffer(o._node)
                                } else isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause());
                            o && !e && i._emit("stop", o._id)
                        }
                        return i
                    },
                    mute: function (t, e) {
                        var i = this;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "mute",
                            action: function () {
                                i.mute(t, e)
                            }
                        }), i;
                        if ("undefined" == typeof e) {
                            if ("boolean" != typeof t) return i._muted;
                            i._muted = t
                        }
                        for (var n = i._getSoundIds(e), r = 0; r < n.length; r++) {
                            var o = i._soundById(n[r]);
                            o && (o._muted = t, i._webAudio && o._node ? o._node.gain.setValueAtTime(t ? 0 : o._volume, a.ctx.currentTime) : o._node && (o._node.muted = !!a._muted || t), i._emit("mute", o._id))
                        }
                        return i
                    },
                    volume: function () {
                        var t, e, i = this,
                            n = arguments;
                        if (0 === n.length) return i._volume;
                        if (1 === n.length) {
                            var r = i._getSoundIds(),
                                o = r.indexOf(n[0]);
                            o >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
                        } else n.length >= 2 && (t = parseFloat(n[0]), e = parseInt(n[1], 10));
                        var s;
                        if (!("undefined" != typeof t && t >= 0 && t <= 1)) return s = e ? i._soundById(e) : i._sounds[0], s ? s._volume : 0;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "volume",
                            action: function () {
                                i.volume.apply(i, n)
                            }
                        }), i;
                        "undefined" == typeof e && (i._volume = t), e = i._getSoundIds(e);
                        for (var h = 0; h < e.length; h++) s = i._soundById(e[h]), s && (s._volume = t, n[2] || i._stopFade(e[h]), i._webAudio && s._node && !s._muted ? s._node.gain.setValueAtTime(t, a.ctx.currentTime) : s._node && !s._muted && (s._node.volume = t * a.volume()), i._emit("volume", s._id));
                        return i
                    },
                    fade: function (t, e, i, n) {
                        var r = this,
                            o = Math.abs(t - e),
                            s = t > e ? "out" : "in",
                            h = o / .01,
                            l = i / h;
                        if ("loaded" !== r._state) return r._queue.push({
                            event: "fade",
                            action: function () {
                                r.fade(t, e, i, n)
                            }
                        }), r;
                        r.volume(t, n);
                        for (var c = r._getSoundIds(n), u = 0; u < c.length; u++) {
                            var p = r._soundById(c[u]);
                            if (p) {
                                if (n || r._stopFade(c[u]), r._webAudio && !p._muted) {
                                    var d = a.ctx.currentTime,
                                        f = d + i / 1e3;
                                    p._volume = t, p._node.gain.setValueAtTime(t, d), p._node.gain.linearRampToValueAtTime(e, f)
                                }
                                var m = t;
                                p._interval = setInterval(function (t, i) {
                                    m += "in" === s ? .01 : -.01, m = Math.max(0, m), m = Math.min(1, m), m = Math.round(100 * m) / 100, r._webAudio ? ("undefined" == typeof n && (r._volume = m), i._volume = m) : r.volume(m, t, !0), m === e && (clearInterval(i._interval), i._interval = null, r.volume(m, t), r._emit("fade", t))
                                }.bind(r, c[u], p), l)
                            }
                        }
                        return r
                    },
                    _stopFade: function (t) {
                        var e = this,
                            i = e._soundById(t);
                        return i && i._interval && (e._webAudio && i._node.gain.cancelScheduledValues(a.ctx.currentTime), clearInterval(i._interval), i._interval = null, e._emit("fade", t)), e
                    },
                    loop: function () {
                        var t, e, i, n = this,
                            r = arguments;
                        if (0 === r.length) return n._loop;
                        if (1 === r.length) {
                            if ("boolean" != typeof r[0]) return i = n._soundById(parseInt(r[0], 10)), !!i && i._loop;
                            t = r[0], n._loop = t
                        } else 2 === r.length && (t = r[0], e = parseInt(r[1], 10));
                        for (var o = n._getSoundIds(e), s = 0; s < o.length; s++) i = n._soundById(o[s]), i && (i._loop = t, n._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = t));
                        return n
                    },
                    rate: function () {
                        var t, e, i = this,
                            n = arguments;
                        if (0 === n.length) e = i._sounds[0]._id;
                        else if (1 === n.length) {
                            var r = i._getSoundIds(),
                                o = r.indexOf(n[0]);
                            o >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
                        } else 2 === n.length && (t = parseFloat(n[0]), e = parseInt(n[1], 10));
                        var s;
                        if ("number" != typeof t) return s = i._soundById(e), s ? s._rate : i._rate;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "rate",
                            action: function () {
                                i.rate.apply(i, n)
                            }
                        }), i;
                        "undefined" == typeof e && (i._rate = t), e = i._getSoundIds(e);
                        for (var h = 0; h < e.length; h++)
                            if (s = i._soundById(e[h])) {
                                s._rateSeek = i.seek(e[h]), s._playStart = i._webAudio ? a.ctx.currentTime : s._playStart, s._rate = t, i._webAudio && s._node && s._node.bufferSource ? s._node.bufferSource.playbackRate.value = t : s._node && (s._node.playbackRate = t);
                                var l = i.seek(e[h]),
                                    c = (i._sprite[s._sprite][0] + i._sprite[s._sprite][1]) / 1e3 - l,
                                    u = 1e3 * c / Math.abs(s._rate);
                                !i._endTimers[e[h]] && s._paused || (i._clearTimer(e[h]), i._endTimers[e[h]] = setTimeout(i._ended.bind(i, s), u)), i._emit("rate", s._id)
                            }
                        return i
                    },
                    seek: function () {
                        var t, e, i = this,
                            n = arguments;
                        if (0 === n.length) e = i._sounds[0]._id;
                        else if (1 === n.length) {
                            var r = i._getSoundIds(),
                                o = r.indexOf(n[0]);
                            o >= 0 ? e = parseInt(n[0], 10) : (e = i._sounds[0]._id, t = parseFloat(n[0]))
                        } else 2 === n.length && (t = parseFloat(n[0]), e = parseInt(n[1], 10)); if ("undefined" == typeof e) return i;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "seek",
                            action: function () {
                                i.seek.apply(i, n)
                            }
                        }), i;
                        var s = i._soundById(e);
                        if (s) {
                            if (!("number" == typeof t && t >= 0)) {
                                if (i._webAudio) {
                                    var h = i.playing(e) ? a.ctx.currentTime - s._playStart : 0,
                                        l = s._rateSeek ? s._rateSeek - s._seek : 0;
                                    return s._seek + (l + h * Math.abs(s._rate))
                                }
                                return s._node.currentTime
                            }
                            var c = i.playing(e);
                            c && i.pause(e, !0), s._seek = t, s._ended = !1, i._clearTimer(e), c && i.play(e, !0), !i._webAudio && s._node && (s._node.currentTime = t), i._emit("seek", e)
                        }
                        return i
                    },
                    playing: function (t) {
                        var e = this;
                        if ("number" == typeof t) {
                            var i = e._soundById(t);
                            return !!i && !i._paused
                        }
                        for (var n = 0; n < e._sounds.length; n++)
                            if (!e._sounds[n]._paused) return !0;
                        return !1
                    },
                    duration: function (t) {
                        var e = this,
                            i = e._duration,
                            n = e._soundById(t);
                        return n && (i = e._sprite[n._sprite][1] / 1e3), i
                    },
                    state: function () {
                        return this._state
                    },
                    unload: function () {
                        for (var t = this, e = t._sounds, i = 0; i < e.length; i++) {
                            e[i]._paused || (t.stop(e[i]._id), t._emit("end", e[i]._id)), t._webAudio || (e[i]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", e[i]._node.removeEventListener("error", e[i]._errorFn, !1), e[i]._node.removeEventListener(a._canPlayEvent, e[i]._loadFn, !1)), delete e[i]._node, t._clearTimer(e[i]._id);
                            var n = a._howls.indexOf(t);
                            n >= 0 && a._howls.splice(n, 1)
                        }
                        var r = !0;
                        for (i = 0; i < a._howls.length; i++)
                            if (a._howls[i]._src === t._src) {
                                r = !1;
                                break
                            }
                        return c && r && delete c[t._src], t._state = "unloaded", t._sounds = [], t = null, null
                    },
                    on: function (t, e, i, n) {
                        var r = this,
                            o = r["_on" + t];
                        return "function" == typeof e && o.push(n ? {
                            id: i,
                            fn: e,
                            once: n
                        } : {
                            id: i,
                            fn: e
                        }), r
                    },
                    off: function (t, e, i) {
                        var n = this,
                            r = n["_on" + t],
                            o = 0;
                        if (e) {
                            for (o = 0; o < r.length; o++)
                                if (e === r[o].fn && i === r[o].id) {
                                    r.splice(o, 1);
                                    break
                                }
                        } else if (t) n["_on" + t] = [];
                        else {
                            var s = Object.keys(n);
                            for (o = 0; o < s.length; o++) 0 === s[o].indexOf("_on") && Array.isArray(n[s[o]]) && (n[s[o]] = [])
                        }
                        return n
                    },
                    once: function (t, e, i) {
                        var n = this;
                        return n.on(t, e, i, 1), n
                    },
                    _emit: function (t, e, i) {
                        for (var n = this, r = n["_on" + t], o = r.length - 1; o >= 0; o--) r[o].id && r[o].id !== e && "load" !== t || (setTimeout(function (t) {
                            t.call(this, e, i)
                        }.bind(n, r[o].fn), 0), r[o].once && n.off(t, r[o].fn, r[o].id));
                        return n
                    },
                    _loadQueue: function () {
                        var t = this;
                        if (t._queue.length > 0) {
                            var e = t._queue[0];
                            t.once(e.event, function () {
                                t._queue.shift(), t._loadQueue()
                            }), e.action()
                        }
                        return t
                    },
                    _ended: function (t) {
                        var e = this,
                            i = t._sprite,
                            n = !(!t._loop && !e._sprite[i][2]);
                        if (e._emit("end", t._id), !e._webAudio && n && e.stop(t._id, !0).play(t._id), e._webAudio && n) {
                            e._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = a.ctx.currentTime;
                            var r = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                            e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), r)
                        }
                        return e._webAudio && !n && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, e._clearTimer(t._id), e._cleanBuffer(t._node), a._autoSuspend()), e._webAudio || n || e.stop(t._id), e
                    },
                    _clearTimer: function (t) {
                        var e = this;
                        return e._endTimers[t] && (clearTimeout(e._endTimers[t]), delete e._endTimers[t]), e
                    },
                    _soundById: function (t) {
                        for (var e = this, i = 0; i < e._sounds.length; i++)
                            if (t === e._sounds[i]._id) return e._sounds[i];
                        return null
                    },
                    _inactiveSound: function () {
                        var t = this;
                        t._drain();
                        for (var e = 0; e < t._sounds.length; e++)
                            if (t._sounds[e]._ended) return t._sounds[e].reset();
                        return new l(t)
                    },
                    _drain: function () {
                        var t = this,
                            e = t._pool,
                            i = 0,
                            n = 0;
                        if (!(t._sounds.length < e)) {
                            for (n = 0; n < t._sounds.length; n++) t._sounds[n]._ended && i++;
                            for (n = t._sounds.length - 1; n >= 0; n--) {
                                if (i <= e) return;
                                t._sounds[n]._ended && (t._webAudio && t._sounds[n]._node && t._sounds[n]._node.disconnect(0), t._sounds.splice(n, 1), i--)
                            }
                        }
                    },
                    _getSoundIds: function (t) {
                        var e = this;
                        if ("undefined" == typeof t) {
                            for (var i = [], n = 0; n < e._sounds.length; n++) i.push(e._sounds[n]._id);
                            return i
                        }
                        return [t]
                    },
                    _refreshBuffer: function (t) {
                        var e = this;
                        return t._node.bufferSource = a.ctx.createBufferSource(), t._node.bufferSource.buffer = c[e._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop), t._node.bufferSource.playbackRate.value = t._rate, e
                    },
                    _cleanBuffer: function (t) {
                        var e = this;
                        if (e._scratchBuffer) {
                            t.bufferSource.onended = null, t.bufferSource.disconnect(0);
                            try {
                                t.bufferSource.buffer = e._scratchBuffer
                            } catch (t) { }
                        }
                        return t.bufferSource = null, e
                    }
                };
                var l = function (t) {
                    this._parent = t, this.init()
                };
                l.prototype = {
                    init: function () {
                        var t = this,
                            e = t._parent;
                        return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._muted = e._muted, t._rate = e._rate, t._seek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = Math.round(Date.now() * Math.random()), e._sounds.push(t), t.create(), t
                    },
                    create: function () {
                        var t = this,
                            e = t._parent,
                            i = a._muted || t._muted || t._parent._muted ? 0 : t._volume;
                        return e._webAudio ? (t._node = "undefined" == typeof a.ctx.createGain ? a.ctx.createGainNode() : a.ctx.createGain(), t._node.gain.setValueAtTime(i, a.ctx.currentTime), t._node.paused = !0, t._node.connect(a.masterGain)) : (t._node = new Audio, t._errorFn = t._errorListener.bind(t), t._node.addEventListener("error", t._errorFn, !1), t._loadFn = t._loadListener.bind(t), t._node.addEventListener(a._canPlayEvent, t._loadFn, !1), t._node.src = e._src, t._node.preload = "auto", t._node.volume = i * a.volume(), t._node.load()), t
                    },
                    reset: function () {
                        var t = this,
                            e = t._parent;
                        return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._muted = e._muted, t._rate = e._rate, t._seek = 0, t._rateSeek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = Math.round(Date.now() * Math.random()), t
                    },
                    _errorListener: function () {
                        var t = this;
                        t._node.error && 4 === t._node.error.code && (a.noAudio = !0), t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0), t._node.removeEventListener("error", t._errorListener, !1)
                    },
                    _loadListener: function () {
                        var t = this,
                            e = t._parent;
                        e._duration = Math.ceil(10 * t._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), e._autoplay && e.play(), t._node.removeEventListener(a._canPlayEvent, t._loadFn, !1)
                    }
                };
                var c = {},
                    u = function (t) {
                        var e = t._src;
                        if (c[e]) return t._duration = c[e].duration, void f(t);
                        if (/^data:[^;]+;base64,/.test(e)) {
                            for (var i = atob(e.split(",")[1]), n = new Uint8Array(i.length), r = 0; r < i.length; ++r) n[r] = i.charCodeAt(r);
                            d(n.buffer, t)
                        } else {
                            var o = new XMLHttpRequest;
                            o.open("GET", e, !0), o.responseType = "arraybuffer", o.onload = function () {
                                var e = (o.status + "")[0];
                                return "0" !== e && "2" !== e && "3" !== e ? void t._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".") : void d(o.response, t)
                            }, o.onerror = function () {
                                t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete c[e], t.load())
                            }, p(o)
                        }
                    },
                    p = function (t) {
                        try {
                            t.send()
                        } catch (e) {
                            t.onerror()
                        }
                    },
                    d = function (t, e) {
                        a.ctx.decodeAudioData(t, function (t) {
                            t && e._sounds.length > 0 && (c[e._src] = t, f(e, t))
                        }, function () {
                            e._emit("loaderror", null, "Decoding audio data failed.")
                        })
                    },
                    f = function (t, e) {
                        e && !t._duration && (t._duration = e.duration), 0 === Object.keys(t._sprite).length && (t._sprite = {
                            __default: [0, 1e3 * t._duration]
                        }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), t._autoplay && t.play()
                    },
                    m = function () {
                        a.noAudio = !1;
                        try {
                            "undefined" != typeof AudioContext ? a.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? a.ctx = new webkitAudioContext : a.usingWebAudio = !1
                        } catch (t) {
                            a.usingWebAudio = !1
                        }
                        if (!a.usingWebAudio)
                            if ("undefined" != typeof Audio) try {
                                var t = new Audio;
                                "undefined" == typeof t.oncanplaythrough && (a._canPlayEvent = "canplay")
                            } catch (t) {
                                a.noAudio = !0
                            } else a.noAudio = !0;
                        try {
                            var t = new Audio;
                            t.muted && (a.noAudio = !0)
                        } catch (t) { }
                        var e = /iP(hone|od|ad)/.test(a._navigator && a._navigator.platform),
                            i = a._navigator && a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                            n = i ? parseInt(i[1], 10) : null;
                        if (e && n && n < 9) {
                            var r = /safari/.test(a._navigator && a._navigator.userAgent.toLowerCase());
                            (a._navigator && a._navigator.standalone && !r || a._navigator && !a._navigator.standalone && !r) && (a.usingWebAudio = !1)
                        }
                        a.usingWebAudio && (a.masterGain = "undefined" == typeof a.ctx.createGain ? a.ctx.createGainNode() : a.ctx.createGain(), a.masterGain.gain.value = 1, a.masterGain.connect(a.ctx.destination)), a._setup()
                    };
                i(7) && (n = [], r = function () {
                    return {
                        Howler: a,
                        Howl: h
                    }
                }.apply(e, n), !(void 0 !== r && (t.exports = r))), "undefined" != typeof e && (e.Howler = a, e.Howl = h), "undefined" != typeof window ? (window.HowlerGlobal = s, window.Howler = a, window.Howl = h, window.Sound = l) : "undefined" != typeof o && (o.HowlerGlobal = s, o.Howler = a, o.Howl = h, o.Sound = l)
            }(), ! function () {
                "use strict";
                HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (t) {
                    var e = this;
                    if (!e.ctx || !e.ctx.listener) return e;
                    for (var i = e._howls.length - 1; i >= 0; i--) e._howls[i].stereo(t);
                    return e
                }, HowlerGlobal.prototype.pos = function (t, e, i) {
                    var n = this;
                    return n.ctx && n.ctx.listener ? (e = "number" != typeof e ? n._pos[1] : e, i = "number" != typeof i ? n._pos[2] : i, "number" != typeof t ? n._pos : (n._pos = [t, e, i], n.ctx.listener.setPosition(n._pos[0], n._pos[1], n._pos[2]), n)) : n
                }, HowlerGlobal.prototype.orientation = function (t, e, i, n, r, o) {
                    var s = this;
                    if (!s.ctx || !s.ctx.listener) return s;
                    var a = s._orientation;
                    return e = "number" != typeof e ? a[1] : e, i = "number" != typeof i ? a[2] : i, n = "number" != typeof n ? a[3] : n, r = "number" != typeof r ? a[4] : r, o = "number" != typeof o ? a[5] : o, "number" != typeof t ? a : (s._orientation = [t, e, i, n, r, o], s.ctx.listener.setOrientation(t, e, i, n, r, o), s)
                }, Howl.prototype.init = function (t) {
                    return function (e) {
                        var i = this;
                        return i._orientation = e.orientation || [1, 0, 0], i._stereo = e.stereo || null, i._pos = e.pos || null, i._pannerAttr = {
                            coneInnerAngle: "undefined" != typeof e.coneInnerAngle ? e.coneInnerAngle : 360,
                            coneOuterAngle: "undefined" != typeof e.coneOuterAngle ? e.coneOuterAngle : 360,
                            coneOuterGain: "undefined" != typeof e.coneOuterGain ? e.coneOuterGain : 0,
                            distanceModel: "undefined" != typeof e.distanceModel ? e.distanceModel : "inverse",
                            maxDistance: "undefined" != typeof e.maxDistance ? e.maxDistance : 1e4,
                            panningModel: "undefined" != typeof e.panningModel ? e.panningModel : "HRTF",
                            refDistance: "undefined" != typeof e.refDistance ? e.refDistance : 1,
                            rolloffFactor: "undefined" != typeof e.rolloffFactor ? e.rolloffFactor : 1
                        }, i._onstereo = e.onstereo ? [{
                            fn: e.onstereo
                        }] : [], i._onpos = e.onpos ? [{
                            fn: e.onpos
                        }] : [], i._onorientation = e.onorientation ? [{
                            fn: e.onorientation
                        }] : [], t.call(this, e)
                    }
                }(Howl.prototype.init), Howl.prototype.stereo = function (e, i) {
                    var n = this;
                    if (!n._webAudio) return n;
                    if ("loaded" !== n._state) return n._queue.push({
                        event: "stereo",
                        action: function () {
                            n.stereo(e, i)
                        }
                    }), n;
                    var r = "undefined" == typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if ("undefined" == typeof i) {
                        if ("number" != typeof e) return n._stereo;
                        n._stereo = e, n._pos = [e, 0, 0]
                    }
                    for (var o = n._getSoundIds(i), s = 0; s < o.length; s++) {
                        var a = n._soundById(o[s]);
                        if (a) {
                            if ("number" != typeof e) return a._stereo;
                            a._stereo = e, a._pos = [e, 0, 0], a._node && (a._pannerAttr.panningModel = "equalpower", a._panner && a._panner.pan || t(a, r), "spatial" === r ? a._panner.setPosition(e, 0, 0) : a._panner.pan.value = e), n._emit("stereo", a._id)
                        }
                    }
                    return n
                }, Howl.prototype.pos = function (e, i, n, r) {
                    var o = this;
                    if (!o._webAudio) return o;
                    if ("loaded" !== o._state) return o._queue.push({
                        event: "pos",
                        action: function () {
                            o.pos(e, i, n, r)
                        }
                    }), o;
                    if (i = "number" != typeof i ? 0 : i, n = "number" != typeof n ? -.5 : n, "undefined" == typeof r) {
                        if ("number" != typeof e) return o._pos;
                        o._pos = [e, i, n]
                    }
                    for (var s = o._getSoundIds(r), a = 0; a < s.length; a++) {
                        var h = o._soundById(s[a]);
                        if (h) {
                            if ("number" != typeof e) return h._pos;
                            h._pos = [e, i, n], h._node && (h._panner && !h._panner.pan || t(h, "spatial"), h._panner.setPosition(e, i, n)), o._emit("pos", h._id)
                        }
                    }
                    return o
                }, Howl.prototype.orientation = function (e, i, n, r) {
                    var o = this;
                    if (!o._webAudio) return o;
                    if ("loaded" !== o._state) return o._queue.push({
                        event: "orientation",
                        action: function () {
                            o.orientation(e, i, n, r)
                        }
                    }), o;
                    if (i = "number" != typeof i ? o._orientation[1] : i, n = "number" != typeof n ? o._orientation[2] : n, "undefined" == typeof r) {
                        if ("number" != typeof e) return o._orientation;
                        o._orientation = [e, i, n]
                    }
                    for (var s = o._getSoundIds(r), a = 0; a < s.length; a++) {
                        var h = o._soundById(s[a]);
                        if (h) {
                            if ("number" != typeof e) return h._orientation;
                            h._orientation = [e, i, n], h._node && (h._panner || (h._pos || (h._pos = o._pos || [0, 0, -.5]), t(h, "spatial")), h._panner.setOrientation(e, i, n)), o._emit("orientation", h._id)
                        }
                    }
                    return o
                }, Howl.prototype.pannerAttr = function () {
                    var e, i, n, r = this,
                        o = arguments;
                    if (!r._webAudio) return r;
                    if (0 === o.length) return r._pannerAttr;
                    if (1 === o.length) {
                        if ("object" != typeof o[0]) return n = r._soundById(parseInt(o[0], 10)), n ? n._pannerAttr : r._pannerAttr;
                        e = o[0], "undefined" == typeof i && (r._pannerAttr = {
                            coneInnerAngle: "undefined" != typeof e.coneInnerAngle ? e.coneInnerAngle : r._coneInnerAngle,
                            coneOuterAngle: "undefined" != typeof e.coneOuterAngle ? e.coneOuterAngle : r._coneOuterAngle,
                            coneOuterGain: "undefined" != typeof e.coneOuterGain ? e.coneOuterGain : r._coneOuterGain,
                            distanceModel: "undefined" != typeof e.distanceModel ? e.distanceModel : r._distanceModel,
                            maxDistance: "undefined" != typeof e.maxDistance ? e.maxDistance : r._maxDistance,
                            panningModel: "undefined" != typeof e.panningModel ? e.panningModel : r._panningModel,
                            refDistance: "undefined" != typeof e.refDistance ? e.refDistance : r._refDistance,
                            rolloffFactor: "undefined" != typeof e.rolloffFactor ? e.rolloffFactor : r._rolloffFactor
                        })
                    } else 2 === o.length && (e = o[0], i = parseInt(o[1], 10));
                    for (var s = r._getSoundIds(i), a = 0; a < s.length; a++)
                        if (n = r._soundById(s[a])) {
                            var h = n._pannerAttr;
                            h = {
                                coneInnerAngle: "undefined" != typeof e.coneInnerAngle ? e.coneInnerAngle : h.coneInnerAngle,
                                coneOuterAngle: "undefined" != typeof e.coneOuterAngle ? e.coneOuterAngle : h.coneOuterAngle,
                                coneOuterGain: "undefined" != typeof e.coneOuterGain ? e.coneOuterGain : h.coneOuterGain,
                                distanceModel: "undefined" != typeof e.distanceModel ? e.distanceModel : h.distanceModel,
                                maxDistance: "undefined" != typeof e.maxDistance ? e.maxDistance : h.maxDistance,
                                panningModel: "undefined" != typeof e.panningModel ? e.panningModel : h.panningModel,
                                refDistance: "undefined" != typeof e.refDistance ? e.refDistance : h.refDistance,
                                rolloffFactor: "undefined" != typeof e.rolloffFactor ? e.rolloffFactor : h.rolloffFactor
                            };
                            var l = n._panner;
                            l ? (l.coneInnerAngle = h.coneInnerAngle, l.coneOuterAngle = h.coneOuterAngle, l.coneOuterGain = h.coneOuterGain, l.distanceModel = h.distanceModel, l.maxDistance = h.maxDistance, l.panningModel = h.panningModel, l.refDistance = h.refDistance, l.rolloffFactor = h.rolloffFactor) : (n._pos || (n._pos = r._pos || [0, 0, -.5]), t(n, "spatial"))
                        }
                    return r
                }, Sound.prototype.init = function (t) {
                    return function () {
                        var e = this,
                            i = e._parent;
                        e._orientation = i._orientation, e._stereo = i._stereo, e._pos = i._pos, e._pannerAttr = i._pannerAttr, t.call(this), e._stereo ? i.stereo(e._stereo) : e._pos && i.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
                    }
                }(Sound.prototype.init), Sound.prototype.reset = function (t) {
                    return function () {
                        var e = this,
                            i = e._parent;
                        return e._orientation = i._orientation, e._pos = i._pos, e._pannerAttr = i._pannerAttr, t.call(this)
                    }
                }(Sound.prototype.reset);
                var t = function (t, e) {
                    e = e || "spatial", "spatial" === e ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance,
                        t._panner.panningModel = t._pannerAttr.panningModel, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.value = t._stereo), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id)
                }
            }()
        }).call(e, function () {
            return this
        }())
    },
    function (t, e) {
        (function (e) {
            t.exports = e
        }).call(e, {})
    },
    PixiJSFn,
    function (t, e, i) {
        function n(t, e) {
            this._id = t, this._clearFn = e
        }
        var r = Function.prototype.apply;
        e.setTimeout = function () {
            return new n(r.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new n(r.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, n.prototype.unref = n.prototype.ref = function () { }, n.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, i(10), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
    },
    function (t, e, i) {
        (function (t, e) {
            ! function (t, i) {
                "use strict";

                function n(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                    var n = {
                        callback: t,
                        args: e
                    };
                    return m[f] = n, d(f), f++
                }

                function r(t) {
                    delete m[t]
                }

                function o(t) {
                    var e = t.callback,
                        n = t.args;
                    switch (n.length) {
                        case 0:
                            e();
                            break;
                        case 1:
                            e(n[0]);
                            break;
                        case 2:
                            e(n[0], n[1]);
                            break;
                        case 3:
                            e(n[0], n[1], n[2]);
                            break;
                        default:
                            e.apply(i, n)
                    }
                }

                function s(t) {
                    if (g) setTimeout(s, 0, t);
                    else {
                        var e = m[t];
                        if (e) {
                            g = !0;
                            try {
                                o(e)
                            } finally {
                                r(t), g = !1
                            }
                        }
                    }
                }

                function a() {
                    d = function (t) {
                        e.nextTick(function () {
                            s(t)
                        })
                    }
                }

                function h() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            i = t.onmessage;
                        return t.onmessage = function () {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = i, e
                    }
                }

                function l() {
                    var e = "setImmediate$" + Math.random() + "$",
                        i = function (i) {
                            i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && s(+i.data.slice(e.length))
                        };
                    t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), d = function (i) {
                        t.postMessage(e + i, "*")
                    }
                }

                function c() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function (t) {
                        var e = t.data;
                        s(e)
                    }, d = function (e) {
                        t.port2.postMessage(e)
                    }
                }

                function u() {
                    var t = v.documentElement;
                    d = function (e) {
                        var i = v.createElement("script");
                        i.onreadystatechange = function () {
                            s(e), i.onreadystatechange = null, t.removeChild(i), i = null
                        }, t.appendChild(i)
                    }
                }

                function p() {
                    d = function (t) {
                        setTimeout(s, 0, t)
                    }
                }
                if (!t.setImmediate) {
                    var d, f = 1,
                        m = {},
                        g = !1,
                        v = t.document,
                        y = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    y = y && y.setTimeout ? y : t, "[object process]" === {}.toString.call(t.process) ? a() : h() ? l() : t.MessageChannel ? c() : v && "onreadystatechange" in v.createElement("script") ? u() : p(), y.setImmediate = n, y.clearImmediate = r
                }
            }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
        }).call(e, function () {
            return this
        }(), i(11))
    },
    //function index: 10
    function (t, e) {
        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(t) {
            if (c === setTimeout) return setTimeout(t, 0);
            if ((c === i || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
            try {
                return c(t, 0)
            } catch (e) {
                try {
                    return c.call(null, t, 0)
                } catch (e) {
                    return c.call(this, t, 0)
                }
            }
        }

        function o(t) {
            if (u === clearTimeout) return clearTimeout(t);
            if ((u === n || !u) && clearTimeout) return u = clearTimeout, clearTimeout(t);
            try {
                return u(t)
            } catch (e) {
                try {
                    return u.call(null, t)
                } catch (e) {
                    return u.call(this, t)
                }
            }
        }

        function s() {
            m && d && (m = !1, d.length ? f = d.concat(f) : g = -1, f.length && a())
        }

        function a() {
            if (!m) {
                var t = r(s);
                m = !0;
                for (var e = f.length; e;) {
                    for (d = f, f = []; ++g < e;) d && d[g].run();
                    g = -1, e = f.length
                }
                d = null, m = !1, o(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function l() { }
        var c, u, p = t.exports = {};
        ! function () {
            try {
                c = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                c = i
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                u = n
            }
        }();
        var d, f = [],
            m = !1,
            g = -1;
        p.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            f.push(new h(t, e)), 1 !== f.length || m || r(a)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function () {
            return "/"
        }, p.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function () {
            return 0
        }
    },
    ThreeJSFn,
    applicationFn,
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(15),
                s = i(20),
                a = i(23),
                h = i(24),
                l = i(25),
                c = i(27),
                u = i(28),
                p = i(16),
                d = (i(29), function (t) {
                    t = t || d.defaultOptions, this.options = {};
                    for (var e in d.defaultOptions) this.options[e] = t[e] || d.defaultOptions[e];
                    this.setupPixi(),
                    a.instance.start(),
                    a.instance.add(this.update, this),
                    this.screenManager = new s(null, 300, 300),
                    this.preloader = new o,
                    this.loader = new o,
                    this.onReady = new p,
                    this.options.orientationMode !== d.orientationModes.BOTH && (this.orientationManager = new c(this.options.orientationMode)),
                    this.stage.addChild(this.screenManager.container)
                });
            d.prototype.setupPixi = function () {
                var t = this.options;
                if (t.forceCanvas || h.instance.android && !h.instance.chrome) this.renderer = new r.CanvasRenderer(t.width, t.height), this.renderer.clearBeforeRender = !0;
                else {
                    var e = {
                        resolution: 1,
                        backgroundColor: t.backgroundColor
                    };
                    this.renderer = r.autoDetectRenderer(t.width, t.height, e)
                }
                window.WEBGL = r.isWebGL = this.renderer instanceof r.WebGLRenderer,
                window.renderer = this.renderer,
                this.view = this.renderer.view,
                this.stage = new r.Container,
                //this.view.style.position = "absolute", 
                this.view.addEventListener("mousedown", function () {
                    window.focus()
                }, !0),
                r.stage = this.stage
            },
            d.prototype.update = function () {
                this.renderer.render(this.stage)
            },
            d.prototype.startup = function () {
                this.options.config && this.preloader.addJson(this.options.config, "config"), this.preloader.onComplete.addOnce(this.onPreloadComplete, this), this.preloader.load()
            },
            d.prototype.onPreloadComplete = function () {
                this.translation = new u(this, this.options),
                this.loaderScreen = new this.options.loaderScreen(this),
                this.loaderScreen.onReady.addOnce(this.onLoaderScreenReady, this),
                this.loaderScreen.onComplete.addOnce(this.onLoaderScreenComplete, this),
                this.onPreload && this.onPreload(),
                this.screenManager.addScreen(this.loaderScreen, "loader"),
                this.screenManager.gotoScreenByID("loader")
            },
            d.prototype.onLoaderScreenReady = function () {
                this.loader.onComplete.addOnce(this.onAssetsLoaded, this), this.loader.onProgress.add(this.onProgresss, this), this.loader.load()
            },
            d.prototype.onAssetsLoaded = function () { },
            d.prototype.onProgresss = function (t) {
                this.loaderScreen.updateProgress(t)
            },
            d.prototype.onLoaderScreenComplete = function () {
                this.onReady.dispatch()
            },
            d.prototype.resize = function (t, e) {
                this.orientationManager && this.orientationManager.check(t, e), this.options.resizeMode === d.resizeModes.DEFUALT ? (this.renderer.resize(t, e), this.view.style.width = "auto", this.view.style.height = "auto") : this["this"].options.resizeMode === d.resizeModes.CSS_RESIZE_PRESERVE_RATIO || this.options.resizeMode === d.resizeModes.CSS_RESIZE && (this.view.style.width = t + "px", this.view.style.height = e + "px")
            },
            d.resizeModes = {
                DEFUALT: 0,
                CSS_RESIZE_PRESERVE_RATIO: 1,
                CSS_RESIZE: 2
            },
            d.orientationModes = {
                LANDSCAPE: 0,
                PORTRAIT: 1,
                BOTH: 2
            },
            d.defaultOptions = {
                width: 800,
                height: 600,
                forceCanvas: !1,
                backgroundColor: 0,
                resizeMode: d.resizeModes.DEFUALT,
                orientationMode: d.orientationModes.LANDSCAPE,
                loaderScreen: l,
                config: null
            },
            n.exports = d
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(16),
                s = i(17),
                a = i(18),
                h = (i(19), function () {
                    this.crossdomain = !1,
                    window.XDomainRequest && this.crossdomain ? (
                        this.ajaxRequest = new window.XDomainRequest,
                        this.ajaxRequest.timeout = 3e3,
                        this.ajaxRequest.onerror = function () { },
                        this.ajaxRequest.ontimeout = function () { },
                        this.ajaxRequest.onprogress = function () { }
                    ) : window.XMLHttpRequest && (this.ajaxRequest = new window.XMLHttpRequest),
                    this.ajaxRequest.onload = this._onFileLoaded.bind(this),
                    this.ajaxRequest.onreadystatechange = function (t) { },
                    this.fileCount = 0,
                    this.filesToLoad = [],
                    this.fontsToLoad = [],
                    this.pixiAssetsToLoad = [],
                    this.soundsToLoad = [],
                    this.customToLoad = [],
                    this.onComplete = new o,
                    this.onProgress = new o
                });
            h.prototype.addFonts = function (t) {
                return this.fontsToLoad = this.fontsToLoad.concat(t), this
            },
            h.prototype.addText = function (t, e) {
                var e = e || s.basename(t, s.extname(t)),
                    i = {
                        url: t,
                        id: e,
                        type: h.TEXT
                    };
                return this.filesToLoad.push(i), this
            },
            h.prototype.addJson = function (t, e) {
                var e = e || s.basename(t, s.extname(t)),
                    i = {
                        url: t,
                        id: e,
                        type: h.JSON
                    };
                return this.filesToLoad.push(i), this
            },
            h.prototype.addManifest = function (t, e) {
                var i = t.map(function (t) {
                    return e + t
                });
                return this.addPixiAssets(i), this
            },
            h.prototype.addPixiAssets = function (t) {
                return this.pixiAssetsToLoad = this.pixiAssetsToLoad.concat(t), this
            },
            h.prototype.addCSS = function (t) {
                var e = document.createElement("link");
                return e.type = "text/css",
                    e.rel = "stylesheet",
                    e.href = t,
                    document.getElementsByTagName("head")[0].appendChild(e), this
            },
            h.prototype.addCustom = function (t) {
                var e = {
                    object: t,
                    type: h.CUSTOM
                };
                return this.filesToLoad.push(e), this
            },
            h.prototype.load = function () {
                this._loadFonts()
            },
            h.prototype._loadFiles = function () {
                this.fileCount = 0, this.filesToLoad.length ? this._loadNextFile() : this._loadPixiAssets()
            },
            h.prototype._loadNextFile = function () {
                var t = this.filesToLoad[this.fileCount];
                t.type === h.CUSTOM ? (t.object.onLoaded.addOnce(this._onFileLoaded, this), t.object.load()) : (this.ajaxRequest.open("GET", t.url, !0), this.ajaxRequest.send())
            },
            h.prototype._onFileLoaded = function () {
                var t = this.filesToLoad[this.fileCount];
                if (t.type === h.CUSTOM);
                else if (200 !== this.ajaxRequest.status);
                else switch (t.type) {
                    case h.TEXT:
                        var e = this.ajaxRequest.responseText;
                        a.addText(e, t.id);
                        break;
                    case h.JSON:
                        var i = JSON.parse(this.ajaxRequest.responseText);
                        a.addJson(i, t.id)
                }
                this.fileCount++, this._onProgress(), this.fileCount === this.filesToLoad.length ? this._loadPixiAssets() : this._loadNextFile()
            },
            h.prototype._loadPixiAssets = function () {
                return 0 === this.pixiAssetsToLoad.length ? void this._onComplete() : (
                    this.pixiAssetLoader = new r.loaders.Loader,
                    this.pixiAssetLoader.add(this.pixiAssetsToLoad),
                    this.pixiAssetLoader.on("progress", this._onProgress, this),
                    void this.pixiAssetLoader.load(this._onComplete.bind(this))
                )
            },
            h.prototype._loadFonts = function () {
                return 0 === this.fontsToLoad.length ? void this._loadFiles() : (WebFont.load({
                    custom: {
                        families: this.fontsToLoad,
                        urls: [URL_HEADER.CSS + "leading-course-fonts.css"]
                    },
                    active: function () {
                        for (var t = 0; t < this.fontsToLoad.length; t++) {
                            var e = new r.Text("cheeky", {
                                font: "32px " + this.fontsToLoad[t]
                            });
                            e.updateText()
                        }
                    }.bind(this)
                }), void this._loadFiles())
            },
            h.prototype._onComplete = function (t, e) {
                r.loadedResources = e, this.onProgress.dispatch(1), this.onComplete.dispatch()
            },
            h.prototype._onProgress = function () {
                var t = (this.filesToLoad.length + this.pixiAssetsToLoad.length, this.fileCount);
                this.pixiAssetLoader && (t = this.pixiAssetLoader.progress), this.onProgress.dispatch(.01 * t)
            },
            h.TEXT = 0,
            h.JSON = 1,
            h.CUSTOM = 2,
            n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //16
    function (t, e, i) {
        var n;
        ! function (r) {
            function o(t, e, i, n, r) {
                this._listener = e, this._isOnce = i, this.context = n, this._signal = t, this._priority = r || 0
            }

            function s(t, e) {
                if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
            }

            function a() {
                this._bindings = [], this._prevParams = null;
                var t = this;
                this.dispatch = function () {
                    a.prototype.dispatch.apply(t, arguments)
                }
            }
            o.prototype = {
                active: !0,
                params: null,
                execute: function (t) {
                    var e, i;
                    return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
                },
                detach: function () {
                    return this.isBound() ? this._signal.remove(this._listener, this.context) : null
                },
                isBound: function () {
                    return !!this._signal && !!this._listener
                },
                isOnce: function () {
                    return this._isOnce
                },
                getListener: function () {
                    return this._listener
                },
                getSignal: function () {
                    return this._signal
                },
                _destroy: function () {
                    delete this._signal, delete this._listener, delete this.context
                },
                toString: function () {
                    return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
                }
            }, a.prototype = {
                VERSION: "1.0.0",
                memorize: !1,
                _shouldPropagate: !0,
                active: !0,
                _registerListener: function (t, e, i, n) {
                    var r, s = this._indexOfListener(t, i);
                    if (s !== -1) {
                        if (r = this._bindings[s], r.isOnce() !== e) throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.")
                    } else r = new o(this, t, e, i, n), this._addBinding(r);
                    return this.memorize && this._prevParams && r.execute(this._prevParams), r
                },
                _addBinding: function (t) {
                    var e = this._bindings.length;
                    do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
                    this._bindings.splice(e + 1, 0, t)
                },
                _indexOfListener: function (t, e) {
                    for (var i, n = this._bindings.length; n--;)
                        if (i = this._bindings[n], i._listener === t && i.context === e) return n;
                    return -1
                },
                has: function (t, e) {
                    return this._indexOfListener(t, e) !== -1
                },
                add: function (t, e, i) {
                    return s(t, "add"), this._registerListener(t, !1, e, i)
                },
                addOnce: function (t, e, i) {
                    return s(t, "addOnce"), this._registerListener(t, !0, e, i)
                },
                remove: function (t, e) {
                    s(t, "remove");
                    var i = this._indexOfListener(t, e);
                    return i !== -1 && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), t
                },
                removeAll: function () {
                    for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
                    this._bindings.length = 0
                },
                getNumListeners: function () {
                    return this._bindings.length
                },
                halt: function () {
                    this._shouldPropagate = !1
                },
                dispatch: function (t) {
                    if (this.active) {
                        var e, i = Array.prototype.slice.call(arguments),
                            n = this._bindings.length;
                        if (this.memorize && (this._prevParams = i), n) {
                            e = this._bindings.slice(), this._shouldPropagate = !0;
                            do n--; while (e[n] && this._shouldPropagate && e[n].execute(i) !== !1)
                        }
                    }
                },
                forget: function () {
                    this._prevParams = null
                },
                dispose: function () {
                    this.removeAll(), delete this._bindings, delete this._prevParams
                },
                toString: function () {
                    return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
                }
            };
            var h = a;
            h.Signal = a, n = function () {
                return h
            }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
        }(this)
    },
    function (t, e, i) {
        (function (t) {
            function i(t, e) {
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
            e.resolve = function () {
                for (var e = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                    var s = o >= 0 ? arguments[o] : t.cwd();
                    if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                    s && (e = s + "/" + e, r = "/" === s.charAt(0))
                }
                return e = i(n(e.split("/"), function (t) {
                    return !!t
                }), !r).join("/"), (r ? "/" : "") + e || "."
            }, e.normalize = function (t) {
                var r = e.isAbsolute(t),
                    o = "/" === s(t, -1);
                return t = i(n(t.split("/"), function (t) {
                    return !!t
                }), !r).join("/"), t || r || (t = "."), t && o && (t += "/"), (r ? "/" : "") + t
            }, e.isAbsolute = function (t) {
                return "/" === t.charAt(0)
            }, e.join = function () {
                var t = Array.prototype.slice.call(arguments, 0);
                return e.normalize(n(t, function (t, e) {
                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t
                }).join("/"))
            }, e.relative = function (t, i) {
                function n(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++);
                    for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                    return e > i ? [] : t.slice(e, i - e + 1)
                }
                t = e.resolve(t).substr(1), i = e.resolve(i).substr(1);
                for (var r = n(t.split("/")), o = n(i.split("/")), s = Math.min(r.length, o.length), a = s, h = 0; h < s; h++)
                    if (r[h] !== o[h]) {
                        a = h;
                        break
                    }
                for (var l = [], h = a; h < r.length; h++) l.push("..");
                return l = l.concat(o.slice(a)), l.join("/")
            }, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
                var e = o(t),
                    i = e[0],
                    n = e[1];
                return i || n ? (n && (n = n.substr(0, n.length - 1)), i + n) : "."
            }, e.basename = function (t, e) {
                var i = o(t)[2];
                return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
            }, e.extname = function (t) {
                return o(t)[3]
            };
            var s = "b" === "ab".substr(-1) ? function (t, e, i) {
                return t.substr(e, i)
            } : function (t, e, i) {
                return e < 0 && (e = t.length + e), t.substr(e, i)
            }
        }).call(e, i(11))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function () {
                this._json = {}, this._text = {}
            };
            n.prototype.addJson = function (t, e) {
                this._json[e] = t
            }, n.prototype.addText = function (t, e) {
                this._text[e] = t
            }, n.prototype.getJson = function (t) {
                return this._json[t] ? this._json[t] : null
            }, n.prototype.getText = function (t) {
                if (this._text[t]) return this._text[t]
            }, i.exports = new n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e) {
        ! function (t, e, i) {
            function n(t, e, i) {
                return t.call.apply(t.bind, arguments)
            }

            function r(t, e, i) {
                if (!t) throw Error();
                if (2 < arguments.length) {
                    var n = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var i = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(i, n), t.apply(e, i)
                    }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function o(t, e, i) {
                return o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : r, o.apply(null, arguments)
            }

            function s(t, e) {
                this.J = t, this.t = e || t, this.C = this.t.document
            }

            function a(t, i, n) {
                t = t.C.getElementsByTagName(i)[0], t || (t = e.documentElement), t && t.lastChild && t.insertBefore(n, t.lastChild)
            }

            function h(t, e) {
                function i() {
                    t.C.body ? e() : setTimeout(i, 0)
                }
                i()
            }

            function l(t, e, i) {
                e = e || [], i = i || [];
                for (var n = t.className.split(/\s+/), r = 0; r < e.length; r += 1) {
                    for (var o = !1, s = 0; s < n.length; s += 1)
                        if (e[r] === n[s]) {
                            o = !0;
                            break
                        }
                    o || n.push(e[r])
                }
                for (e = [], r = 0; r < n.length; r += 1) {
                    for (o = !1, s = 0; s < i.length; s += 1)
                        if (n[r] === i[s]) {
                            o = !0;
                            break
                        }
                    o || e.push(n[r])
                }
                t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
            }

            function c(t, e) {
                for (var i = t.className.split(/\s+/), n = 0, r = i.length; n < r; n++)
                    if (i[n] == e) return !0;
                return !1
            }

            function u(t) {
                if ("string" == typeof t.ma) return t.ma;
                var e = t.t.location.protocol;
                return "about:" == e && (e = t.J.location.protocol), "https:" == e ? "https:" : "http:"
            }

            function p(t, e) {
                var i = t.createElement("link", {
                    rel: "stylesheet",
                    href: e
                }),
                    n = !1;
                i.onload = function () {
                    n || (n = !0)
                }, i.onerror = function () {
                    n || (n = !0)
                }, a(t, "head", i)
            }

            function d(e, i, n, r) {
                var o = e.C.getElementsByTagName("head")[0];
                if (o) {
                    var s = e.createElement("script", {
                        src: i
                    }),
                        a = !1;
                    return s.onload = s.onreadystatechange = function () {
                        a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), s.onload = s.onreadystatechange = null, "HEAD" == s.parentNode.tagName && o.removeChild(s))
                    }, o.appendChild(s), t.setTimeout(function () {
                        a || (a = !0, n && n(Error("Script load timeout")))
                    }, r || 5e3), s
                }
                return null
            }

            function f(t, e) {
                this.X = t, this.fa = e
            }

            function m(t, e, i, n) {
                this.c = null != t ? t : null, this.g = null != e ? e : null, this.A = null != i ? i : null, this.e = null != n ? n : null
            }

            function g(t) {
                t = Q.exec(t);
                var e = null,
                    i = null,
                    n = null,
                    r = null;
                return t && (null !== t[1] && t[1] && (e = parseInt(t[1], 10)), null !== t[2] && t[2] && (i = parseInt(t[2], 10)), null !== t[3] && t[3] && (n = parseInt(t[3], 10)), null !== t[4] && t[4] && (r = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new m(e, i, n, r)
            }

            function v(t, e, i, n, r, o, s, a) {
                this.M = t, this.k = a
            }

            function y(t) {
                this.a = t
            }

            function _(t) {
                var e = w(t.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
                return "" != e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = w(t.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" != t ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown")
            }

            function x(t) {
                var e = w(t.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
                if (e || (e = w(t.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = w(t.a, /(iPhone )?OS ([\d_]+)/, 2))) return e;
                if (e = w(t.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
                    for (var e = e.split(/\s/), i = 0; i < e.length; i += 1)
                        if (/^[\d\._]+$/.test(e[i])) return e[i];
                return (t = w(t.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
            }

            function b(t) {
                var e = _(t),
                    i = g(x(t)),
                    n = g(w(t.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
                    r = "Unknown",
                    o = new m,
                    o = "Unknown",
                    s = !1;
                return /OPR\/[\d.]+/.test(t.a) ? r = "Opera" : -1 != t.a.indexOf("Chrome") || -1 != t.a.indexOf("CrMo") || -1 != t.a.indexOf("CriOS") ? r = "Chrome" : /Silk\/\d/.test(t.a) ? r = "Silk" : "BlackBerry" == e || "Android" == e ? r = "BuiltinBrowser" : -1 != t.a.indexOf("PhantomJS") ? r = "PhantomJS" : -1 != t.a.indexOf("Safari") ? r = "Safari" : -1 != t.a.indexOf("AdobeAIR") ? r = "AdobeAIR" : -1 != t.a.indexOf("PlayStation") && (r = "BuiltinBrowser"), "BuiltinBrowser" == r ? o = "Unknown" : "Silk" == r ? o = w(t.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == r ? o = w(t.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.a.indexOf("Version/") ? o = w(t.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == r ? o = w(t.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == r ? o = w(t.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == r && (o = w(t.a, /PhantomJS\/([\d.]+)/, 1)), o = g(o), s = "AdobeAIR" == r ? 2 < o.c || 2 == o.c && 5 <= o.g : "BlackBerry" == e ? 10 <= i.c : "Android" == e ? 2 < i.c || 2 == i.c && 1 < i.g : 526 <= n.c || 525 <= n.c && 13 <= n.g, new v(r, 0, 0, 0, 0, 0, 0, new f(s, 536 > n.c || 536 == n.c && 11 > n.g))
            }

            function w(t, e, i) {
                return (t = t.match(e)) && t[i] ? t[i] : ""
            }

            function S(t) {
                this.la = t || "-"
            }

            function T(t, e) {
                this.M = t, this.Y = 4, this.N = "n";
                var i = (e || "n4").match(/^([nio])([1-9])$/i);
                i && (this.N = i[1], this.Y = parseInt(i[2], 10))
            }

            function M(t) {
                return t.N + t.Y
            }

            function E(t) {
                var e = 4,
                    i = "n",
                    n = null;
                return t && ((n = t.match(/(normal|oblique|italic)/i)) && n[1] && (i = n[1].substr(0, 1).toLowerCase()), (n = t.match(/([1-9]00|normal|bold)/i)) && n[1] && (/bold/i.test(n[1]) ? e = 7 : /[1-9]00/.test(n[1]) && (e = parseInt(n[1].substr(0, 1), 10)))), i + e
            }

            function A(t, e) {
                this.d = t, this.p = t.t.document.documentElement, this.P = e, this.j = "wf", this.h = new S("-"), this.ga = !1 !== e.events, this.B = !1 !== e.classes
            }

            function C(t) {
                if (t.B) {
                    var e = c(t.p, t.h.e(t.j, "active")),
                        i = [],
                        n = [t.h.e(t.j, "loading")];
                    e || i.push(t.h.e(t.j, "inactive")), l(t.p, i, n)
                }
                L(t, "inactive")
            }

            function L(t, e, i) {
                t.ga && t.P[e] && (i ? t.P[e](i.getName(), M(i)) : t.P[e]())
            }

            function R() {
                this.w = {}
            }

            function P(t, e) {
                this.d = t, this.G = e, this.m = this.d.createElement("span", {
                    "aria-hidden": "true"
                }, this.G)
            }

            function O(t) {
                a(t.d, "body", t.m)
            }

            function I(t) {
                var e;
                e = [];
                for (var i = t.M.split(/,\s*/), n = 0; n < i.length; n++) {
                    var r = i[n].replace(/['"]/g, ""); -1 == r.indexOf(" ") ? e.push(r) : e.push("'" + r + "'")
                }
                return e = e.join(","), i = "normal", "o" === t.N ? i = "oblique" : "i" === t.N && (i = "italic"), "display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + e + ";" + ("font-style:" + i + ";font-weight:" + (t.Y + "00") + ";")
            }

            function D(t, e, i, n, r, o, s, a) {
                this.Z = t, this.ja = e, this.d = i, this.s = n, this.G = a || "BESbswy", this.k = r, this.I = {}, this.W = o || 3e3, this.ba = s || null, this.F = this.D = null, t = new P(this.d, this.G), O(t);
                for (var h in tt) tt.hasOwnProperty(h) && (e = new T(tt[h], M(this.s)), e = I(e), t.m.style.cssText = e, this.I[tt[h]] = t.m.offsetWidth);
                t.remove()
            }

            function B(t, e, i) {
                for (var n in tt)
                    if (tt.hasOwnProperty(n) && e === t.I[tt[n]] && i === t.I[tt[n]]) return !0;
                return !1
            }

            function k(t) {
                var e = t.D.m.offsetWidth,
                    i = t.F.m.offsetWidth;
                e === t.I.serif && i === t.I["sans-serif"] || t.k.fa && B(t, e, i) ? J() - t.na >= t.W ? t.k.fa && B(t, e, i) && (null === t.ba || t.ba.hasOwnProperty(t.s.getName())) ? N(t, t.Z) : N(t, t.ja) : F(t) : N(t, t.Z)
            }

            function F(t) {
                setTimeout(o(function () {
                    k(this)
                }, t), 25)
            }

            function N(t, e) {
                t.D.remove(), t.F.remove(), e(t.s)
            }

            function U(t, e, i, n) {
                this.d = e, this.u = i, this.R = 0, this.da = this.aa = !1, this.W = n, this.k = t.k
            }

            function G(t, e, i, n, r) {
                if (i = i || {}, 0 === e.length && r) C(t.u);
                else
                    for (t.R += e.length, r && (t.aa = r), r = 0; r < e.length; r++) {
                        var s = e[r],
                            a = i[s.getName()],
                            h = t.u,
                            c = s;
                        h.B && l(h.p, [h.h.e(h.j, c.getName(), M(c).toString(), "loading")]), L(h, "fontloading", c), h = null, h = new D(o(t.ha, t), o(t.ia, t), t.d, s, t.k, t.W, n, a), h.start()
                    }
            }

            function z(t) {
                0 == --t.R && t.aa && (t.da ? (t = t.u, t.B && l(t.p, [t.h.e(t.j, "active")], [t.h.e(t.j, "loading"), t.h.e(t.j, "inactive")]), L(t, "active")) : C(t.u))
            }

            function V(t) {
                this.J = t, this.v = new R, this.oa = new y(t.navigator.userAgent), this.a = this.oa.parse(), this.T = this.U = 0, this.Q = this.S = !0
            }

            function j(t, e, i, n, r) {
                var o = 0 == --t.U;
                (t.Q || t.S) && setTimeout(function () {
                    G(e, i, n || null, r || null, o)
                }, 0)
            }

            function H(t, e, i) {
                this.O = t ? t : e + et, this.q = [], this.V = [], this.ea = i || ""
            }

            function W(t) {
                this.q = t, this.ca = [], this.L = {}
            }

            function X(t, e) {
                this.a = new y(navigator.userAgent).parse(), this.d = t, this.f = e
            }

            function Y(t, e) {
                this.d = t, this.f = e, this.o = []
            }

            function q(t, e) {
                this.d = t, this.f = e, this.o = []
            }

            function K(t, e) {
                this.d = t, this.f = e, this.o = []
            }

            function Z(t, e) {
                this.d = t, this.f = e
            }
            var J = Date.now || function () {
                return +new Date
            };
            s.prototype.createElement = function (t, e, i) {
                if (t = this.C.createElement(t), e)
                    for (var n in e) e.hasOwnProperty(n) && ("style" == n ? t.style.cssText = e[n] : t.setAttribute(n, e[n]));
                return i && t.appendChild(this.C.createTextNode(i)), t
            };
            var Q = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
            m.prototype.compare = function (t) {
                return this.c > t.c || this.c === t.c && this.g > t.g || this.c === t.c && this.g === t.g && this.A > t.A ? 1 : this.c < t.c || this.c === t.c && this.g < t.g || this.c === t.c && this.g === t.g && this.A < t.A ? -1 : 0
            }, m.prototype.toString = function () {
                return [this.c, this.g || "", this.A || "", this.e || ""].join("")
            }, v.prototype.getName = function () {
                return this.M
            };
            var $ = new v("Unknown", 0, 0, 0, 0, 0, 0, new f((!1), (!1)));
            y.prototype.parse = function () {
                var t;
                if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
                    t = _(this);
                    var e = g(x(this)),
                        i = null,
                        n = w(this.a, /Trident\/([\d\w\.]+)/, 1),
                        i = g(-1 != this.a.indexOf("MSIE") ? w(this.a, /MSIE ([\d\w\.]+)/, 1) : w(this.a, /rv:([\d\w\.]+)/, 1));
                    "" != n && g(n), t = new v("MSIE", 0, 0, 0, 0, 0, 0, new f("Windows" == t && 6 <= i.c || "Windows Phone" == t && 8 <= e.c, (!1)))
                } else if (-1 != this.a.indexOf("Opera")) t: if (t = g(w(this.a, /Presto\/([\d\w\.]+)/, 1)), g(x(this)), null !== t.c || g(w(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/")) t = g(w(this.a, /Opera Mini\/([\d\.]+)/, 1)), t = new v("OperaMini", 0, 0, 0, _(this), 0, 0, new f((!1), (!1)));
                else {
                    if (-1 != this.a.indexOf("Version/") && (t = g(w(this.a, /Version\/([\d\.]+)/, 1)), null !== t.c)) {
                        t = new v("Opera", 0, 0, 0, _(this), 0, 0, new f(10 <= t.c, (!1)));
                        break t
                    }
                    t = g(w(this.a, /Opera[\/ ]([\d\.]+)/, 1)), t = null !== t.c ? new v("Opera", 0, 0, 0, _(this), 0, 0, new f(10 <= t.c, (!1))) : new v("Opera", 0, 0, 0, _(this), 0, 0, new f((!1), (!1)))
                } else /OPR\/[\d.]+/.test(this.a) ? t = b(this) : /AppleWeb(K|k)it/.test(this.a) ? t = b(this) : -1 != this.a.indexOf("Gecko") ? (t = "Unknown", e = new m, g(x(this)), e = !1, -1 != this.a.indexOf("Firefox") ? (t = "Firefox", e = g(w(this.a, /Firefox\/([\d\w\.]+)/, 1)), e = 3 <= e.c && 5 <= e.g) : -1 != this.a.indexOf("Mozilla") && (t = "Mozilla"), i = g(w(this.a, /rv:([^\)]+)/, 1)), e || (e = 1 < i.c || 1 == i.c && 9 < i.g || 1 == i.c && 9 == i.g && 2 <= i.A), t = new v(t, 0, 0, 0, _(this), 0, 0, new f(e, (!1)))) : t = $;
                return t
            }, S.prototype.e = function (t) {
                for (var e = [], i = 0; i < arguments.length; i++) e.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
                return e.join(this.la)
            }, T.prototype.getName = function () {
                return this.M
            }, P.prototype.remove = function () {
                var t = this.m;
                t.parentNode && t.parentNode.removeChild(t)
            };
            var tt = {
                ra: "serif",
                qa: "sans-serif",
                pa: "monospace"
            };
            D.prototype.start = function () {
                this.D = new P(this.d, this.G), O(this.D), this.F = new P(this.d, this.G), O(this.F), this.na = J();
                var t = new T(this.s.getName() + ",serif", M(this.s)),
                    t = I(t);
                this.D.m.style.cssText = t, t = new T(this.s.getName() + ",sans-serif", M(this.s)), t = I(t), this.F.m.style.cssText = t, k(this)
            }, U.prototype.ha = function (t) {
                var e = this.u;
                e.B && l(e.p, [e.h.e(e.j, t.getName(), M(t).toString(), "active")], [e.h.e(e.j, t.getName(), M(t).toString(), "loading"), e.h.e(e.j, t.getName(), M(t).toString(), "inactive")]), L(e, "fontactive", t), this.da = !0, z(this)
            }, U.prototype.ia = function (t) {
                var e = this.u;
                if (e.B) {
                    var i = c(e.p, e.h.e(e.j, t.getName(), M(t).toString(), "active")),
                        n = [],
                        r = [e.h.e(e.j, t.getName(), M(t).toString(), "loading")];
                    i || n.push(e.h.e(e.j, t.getName(), M(t).toString(), "inactive")), l(e.p, n, r)
                }
                L(e, "fontinactive", t), z(this)
            }, V.prototype.load = function (t) {
                this.d = new s(this.J, t.context || this.J), this.S = !1 !== t.events, this.Q = !1 !== t.classes;
                var e = new A(this.d, t),
                    i = [],
                    n = t.timeout;
                e.B && l(e.p, [e.h.e(e.j, "loading")]), L(e, "loading");
                var r, i = this.v,
                    a = this.d,
                    h = [];
                for (r in t)
                    if (t.hasOwnProperty(r)) {
                        var c = i.w[r];
                        c && h.push(c(t[r], a))
                    }
                for (i = h, this.T = this.U = i.length, t = new U(this.a, this.d, e, n), n = 0, r = i.length; n < r; n++) a = i[n], a.K(this.a, o(this.ka, this, a, e, t))
            }, V.prototype.ka = function (t, e, i, n) {
                var r = this;
                n ? t.load(function (t, e, n) {
                    j(r, i, t, e, n)
                }) : (t = 0 == --this.U, this.T--, t && 0 == this.T ? C(e) : (this.Q || this.S) && G(i, [], {}, null, t))
            };
            var et = "//fonts.googleapis.com/css";
            H.prototype.e = function () {
                if (0 == this.q.length) throw Error("No fonts to load!");
                if (-1 != this.O.indexOf("kit=")) return this.O;
                for (var t = this.q.length, e = [], i = 0; i < t; i++) e.push(this.q[i].replace(/ /g, "+"));
                return t = this.O + "?family=" + e.join("%7C"), 0 < this.V.length && (t += "&subset=" + this.V.join(",")), 0 < this.ea.length && (t += "&text=" + encodeURIComponent(this.ea)), t
            };
            var it = {
                latin: "BESbswy",
                cyrillic: "&#1081;&#1103;&#1046;",
                greek: "&#945;&#946;&#931;",
                khmer: "&#x1780;&#x1781;&#x1782;",
                Hanuman: "&#x1780;&#x1781;&#x1782;"
            },
                nt = {
                    thin: "1",
                    extralight: "2",
                    "extra-light": "2",
                    ultralight: "2",
                    "ultra-light": "2",
                    light: "3",
                    regular: "4",
                    book: "4",
                    medium: "5",
                    "semi-bold": "6",
                    semibold: "6",
                    "demi-bold": "6",
                    demibold: "6",
                    bold: "7",
                    "extra-bold": "8",
                    extrabold: "8",
                    "ultra-bold": "8",
                    ultrabold: "8",
                    black: "9",
                    heavy: "9",
                    l: "3",
                    r: "4",
                    b: "7"
                },
                rt = {
                    i: "i",
                    italic: "i",
                    n: "n",
                    normal: "n"
                },
                ot = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
            W.prototype.parse = function () {
                for (var t = this.q.length, e = 0; e < t; e++) {
                    var i = this.q[e].split(":"),
                        n = i[0].replace(/\+/g, " "),
                        r = ["n4"];
                    if (2 <= i.length) {
                        var o, s = i[1];
                        if (o = [], s)
                            for (var s = s.split(","), a = s.length, h = 0; h < a; h++) {
                                var l;
                                if (l = s[h], l.match(/^[\w-]+$/)) {
                                    l = ot.exec(l.toLowerCase());
                                    var c = void 0;
                                    if (null == l) c = "";
                                    else {
                                        if (c = void 0, c = l[1], null == c || "" == c) c = "4";
                                        else var u = nt[c],
                                            c = u ? u : isNaN(c) ? "4" : c.substr(0, 1);
                                        l = l[2], c = [null == l || "" == l ? "n" : rt[l], c].join("")
                                    }
                                    l = c
                                } else l = "";
                                l && o.push(l)
                            }
                        0 < o.length && (r = o), 3 == i.length && (i = i[2], o = [], i = i ? i.split(",") : o, 0 < i.length && (i = it[i[0]]) && (this.L[n] = i))
                    }
                    for (this.L[n] || (i = it[n]) && (this.L[n] = i), i = 0; i < r.length; i += 1) this.ca.push(new T(n, r[i]))
                }
            };
            var st = {
                Arimo: !0,
                Cousine: !0,
                Tinos: !0
            };
            X.prototype.K = function (t, e) {
                e(t.k.X)
            }, X.prototype.load = function (t) {
                var e = this.d;
                "MSIE" == this.a.getName() && 1 != this.f.blocking ? h(e, o(this.$, this, t)) : this.$(t)
            }, X.prototype.$ = function (t) {
                for (var e = this.d, i = new H(this.f.api, u(e), this.f.text), n = this.f.families, r = n.length, o = 0; o < r; o++) {
                    var s = n[o].split(":");
                    3 == s.length && i.V.push(s.pop());
                    var a = "";
                    2 == s.length && "" != s[1] && (a = ":"), i.q.push(s.join(a))
                }
                n = new W(n), n.parse(), p(e, i.e()), t(n.ca, n.L, st)
            }, Y.prototype.H = function (t) {
                var e = this.d;
                return u(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (e.t.location.hostname || e.J.location.hostname) + "/" + t + ".js"
            }, Y.prototype.K = function (t, e) {
                var i = this.f.id,
                    n = this.d.t,
                    r = this;
                i ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[i] = function (t, i) {
                    for (var n = 0, o = i.fonts.length; n < o; ++n) {
                        var s = i.fonts[n];
                        r.o.push(new T(s.name, E("font-weight:" + s.weight + ";font-style:" + s.style)))
                    }
                    e(t)
                }, d(this.d, this.H(i), function (t) {
                    t && e(!1)
                })) : e(!1)
            }, Y.prototype.load = function (t) {
                t(this.o)
            }, q.prototype.H = function (t) {
                var e = u(this.d);
                return (this.f.api || e + "//use.typekit.net") + "/" + t + ".js"
            }, q.prototype.K = function (t, e) {
                var i = this.f.id,
                    n = this.d.t,
                    r = this;
                i ? d(this.d, this.H(i), function (t) {
                    if (t) e(!1);
                    else {
                        if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                            t = n.Typekit.config.fn;
                            for (var i = 0; i < t.length; i += 2)
                                for (var o = t[i], s = t[i + 1], a = 0; a < s.length; a++) r.o.push(new T(o, s[a]));
                            try {
                                n.Typekit.load({
                                    events: !1,
                                    classes: !1
                                })
                            } catch (h) { }
                        }
                        e(!0)
                    }
                }, 2e3) : e(!1)
            }, q.prototype.load = function (t) {
                t(this.o)
            }, K.prototype.K = function (t, e) {
                var i = this,
                    n = i.f.projectId,
                    r = i.f.version;
                if (n) {
                    var o = i.d.t;
                    d(this.d, i.H(n, r), function (r) {
                        if (r) e(!1);
                        else {
                            if (o["__mti_fntLst" + n] && (r = o["__mti_fntLst" + n]()))
                                for (var s = 0; s < r.length; s++) i.o.push(new T(r[s].fontfamily));
                            e(t.k.X)
                        }
                    }).id = "__MonotypeAPIScript__" + n
                } else e(!1)
            }, K.prototype.H = function (t, e) {
                var i = u(this.d),
                    n = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
                return i + "//" + n + "/" + t + ".js" + (e ? "?v=" + e : "")
            }, K.prototype.load = function (t) {
                t(this.o)
            }, Z.prototype.load = function (t) {
                var e, i, n = this.f.urls || [],
                    r = this.f.families || [],
                    o = this.f.testStrings || {};
                for (e = 0, i = n.length; e < i; e++) p(this.d, n[e]);
                for (n = [], e = 0, i = r.length; e < i; e++) {
                    var s = r[e].split(":");
                    if (s[1])
                        for (var a = s[1].split(","), h = 0; h < a.length; h += 1) n.push(new T(s[0], a[h]));
                    else n.push(new T(s[0]))
                }
                t(n, o)
            }, Z.prototype.K = function (t, e) {
                return e(t.k.X)
            };
            var at = new V(this);
            at.v.w.custom = function (t, e) {
                return new Z(e, t)
            }, at.v.w.fontdeck = function (t, e) {
                return new Y(e, t)
            }, at.v.w.monotype = function (t, e) {
                return new K(e, t)
            }, at.v.w.typekit = function (t, e) {
                return new q(e, t)
            }, at.v.w.google = function (t, e) {
                return new X(e, t)
            }, this.WebFont || (this.WebFont = {}, this.WebFont.load = o(at.load, at), this.WebFontConfig && at.load(this.WebFontConfig))
        }(this, document)
    },
    //function index: 20
    screenManagerFn,
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            AlphaTransition = function () { }, AlphaTransition.constructor = AlphaTransition, AlphaTransition.prototype.begin = function (t, e, i) {
                this.screenManager = t, this.currentScreen = e, this.nextScreen = i, this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), TweenLite.to(this.currentScreen, .4, {
                    alpha: 0,
                    onComplete: this.onFadeout.bind(this)
                })) : this.onFadeout()
            }, AlphaTransition.prototype.onFadeout = function () {
                this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.screenManager.container.removeChild(this.currentScreen), this.currentScreen.alpha = 1), this.nextScreen.alpha = 0, this.nextScreen.onShow && this.nextScreen.onShow(), this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), TweenLite.to(this.nextScreen, .4, {
                    alpha: 1,
                    onComplete: this.onFadein.bind(this)
                }), this.screenManager.container.addChild(this.nextScreen)
            }, AlphaTransition.prototype.onFadein = function () {
                this.nextScreen.onShown && this.nextScreen.onShown(), this.screenManager.onTransitionComplete()
            }, AlphaTransition.prototype.resize = function (t, e) {
                this.w = t, this.h = e
            }, i.exports = AlphaTransition
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            ColorTransition = function () {
                this.colorRect = (new PIXI.Graphics).beginFill(0).drawRect(0, 0, 2e3, 1e3), this.colorRect.alpha = 0
            }, ColorTransition.constructor = ColorTransition, ColorTransition.prototype.begin = function (t, e, i) {
                this.screenManager = t, this.currentScreen = e, this.nextScreen = i, this.screenManager.container.addChild(this.colorRect), this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), TweenLite.to(this.colorRect, .4, {
                    alpha: 1,
                    onComplete: this.onFadeout.bind(this)
                })) : this.onFadeout()
            }, ColorTransition.prototype.onFadeout = function () {
                this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.screenManager.container.removeChild(this.currentScreen), this.currentScreen.alpha = 1), this.nextScreen.onShow && this.nextScreen.onShow(), this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), this.screenManager.container.addChild(this.nextScreen), this.screenManager.container.addChild(this.colorRect), TweenLite.to(this.colorRect, .4, {
                    alpha: 0,
                    onComplete: this.onFadein.bind(this)
                })
            }, ColorTransition.prototype.onFadein = function () {
                this.screenManager.container.removeChild(this.colorRect), this.nextScreen.onShown && this.nextScreen.onShown(), this.screenManager.onTransitionComplete()
            }, ColorTransition.prototype.resize = function (t, e) {
                this.w === t && this.h === e || (this.w = t, this.h = e, this.colorRect.scale.x = t / 100, this.colorRect.scale.y = e / 100)
            }, i.exports = ColorTransition
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(16),
                o = function () {
                    this.onUpdate = new r, this.updateBind = this.update.bind(this), this.active = !1, this.deltaTime = 1, this.timeElapsed = 0, this.lastTime = 0, this.speed = 1
                };
            o.prototype.start = function () {
                this.active || (this.active = !0, requestAnimationFrame(this.updateBind))
            }, o.prototype.stop = function () {
                this.active && (this.active = !1)
            }, o.prototype.update = function () {
                if (this.active) {
                    requestAnimationFrame(this.updateBind);
                    var t = (new Date).getTime(),
                        e = t - this.lastTime;
                    e > 100 && (e = 100), this.deltaTime = .06 * e, this.deltaTime *= this.speed, this.onUpdate.dispatch(this.deltaTime), this.lastTime = t
                }
            }, o.prototype.add = function (t, e) {
                this.onUpdate.add(t, e)
            }, o.prototype.remove = function (t, e) {
                this.onUpdate.remove(t, e)
            }, o.instance = new o, o.game = new o, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            Device = function () {
                this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.mobileSafari = !1, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.midori = !1, this.opera = !1, this.safari = !1, this.silk = !1, this.webApp = !1, this.cocoonJS = !1, this.android = !1, this.chromeOS = !1, this.iOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.desktop = !1, this.pixelRatio = 0, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.blob = !1, this.canvas = !1, this.localStorage = !1, this.file = !1, this.fileSystem = !1, this.webGL = !1, this.worker = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1;
                var t = navigator.userAgent;
                this._checkBrowser(t), this._checkOS(t), this._checkDevice(t), this._checkAudio(), this._checkFeatures(), this._checkIsMobile(), this._checkIsTouch()
            }, Device.prototype._checkBrowser = function (t) {
                /Arora/.test(t) ? this.arora = !0 : /Opera|OPR|op/.test(t) ? (this.opera = !0, this.chrome = !1) : /Chrome/.test(t) ? this.chrome = !0 : /Epiphany/.test(t) ? this.epiphany = !0 : /Firefox/.test(t) ? this.firefox = !0 : /Mobile Safari/.test(t) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(t) || navigator.userAgent.match(/Trident.*rv[ :]*11\./) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(t) ? this.midori = !0 : /Safari/.test(t) ? this.safari = !0 : /\bSilk\b/.test(t) ? this.silk = !0 : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(t) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10), this.ieVersion = parseInt(RegExp.$3, 10)), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0)
            }, Device.prototype._checkOS = function (t) {
                /Android/.test(t) ? this.android = !0 : /CrOS/.test(t) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? (this.iOS = !0, this.iOS_version = parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1) : /Linux/.test(t) ? this.linux = !0 : /Mac OS/.test(t) ? this.macOS = !0 : /Windows/.test(t) && (this.windows = !0), (this.windows || this.macOS || this.linux || this.chromeOS) && (this.desktop = !0)
            }, Device.prototype._checkDevice = function () {
                this.pixelRatio = window.devicePixelRatio || 1, this.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1, this.iPhone4 = 2 === this.pixelRatio && this.iPhone, this.iPhone4 && (this.iPhone4 = 480 == window.screen.height && 320 == window.screen.width || 480 == window.screen.width && 320 == window.screen.height), this.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1
            }, Device.prototype._checkFeatures = function () {
                "undefined" != typeof window.Blob && (this.blob = !0), this.canvas = !!window.CanvasRenderingContext2D;
                try {
                    this.localStorage = !!localStorage.getItem
                } catch (t) {
                    this.localStorage = !1
                }
                this.file = !!(window.File && window.FileReader && window.FileList && window.Blob), this.fileSystem = !!window.requestFileSystem, this.webGL = function () {
                    try {
                        var t = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch (e) {
                        return !1
                    }
                }(), (this.android || this.ie) && (this.webGL = !1), this.worker = !!window.Worker, ("ontouchstart" in document.documentElement || window.navigator.msPointerEnabled) && (this.touch = !0)
            }, Device.prototype._checkAudio = function () {
                this.audioData = !!window.Audio, this.webaudio = !(!window.AudioContext && !window.webkitAudioContext);
                var t = document.createElement("audio"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && (t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), t.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0))
                } catch (i) { }
            }, Device.prototype._checkIsMobile = function () {
                var t = !1;
                ! function (e) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                }(navigator.userAgent || navigator.vendor || window.opera), this.isMobile = t, this.mobile = t
            }, Device.prototype._checkIsTouch = function () {
                this.isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            }, Device.prototype.getInfo = function () {
                var t = "DEVICE OUTPUT\n\n";
                return t += "---\n", t += "Browser Info :: \n", t += "Arora : " + this.arora + "\n", t += "Chrome : " + this.chrome + "\n", t += "Epiphany : " + this.epiphany + "\n", t += "Firefox : " + this.firefox + "\n", t += "Mobile Safari : " + this.mobileSafari + "\n", t += "IE : " + this.ie, t += this.ie ? " (Version " + this.ieVersion + ")\n" : "\n", t += "Midori : " + this.midori + "\n", t += "Opera : " + this.opera + "\n", t += "Safari : " + this.safari + "\n", t += "Web App : " + this.webApp + "\n", t += "CocoonJS : " + this.cocoonJS + "\n", t += "Android : " + this.android + "\n", t += "---\n", t += "Operating System :: \n", t += "Chrome OS : " + this.chromeOS + "\n", t += "iOS : " + this.iOS + "\n", t += "Linux : " + this.linux + "\n", t += "Mac OS : " + this.macOS + "\n", t += "Windows : " + this.windows + "\n", t += "Desktop : " + this.desktop + "\n", t += "---\n", t += "Device Type : \n", t += "Pixel Ratio : " + this.pixelRatio + "\n", t += "iPhone : " + this.iPhone + "\n", t += "iPhone 4 : " + this.iPhone4 + "\n", t += "iPad : " + this.iPad + "\n", t += "---\n", t += "Features :: \n", t += "Blob : " + this.blob + "\n", t += "Canvas : " + this.canvas + "\n", t += "LocalStorage : " + this.localStorage + "\n", t += "File : " + this.file + "\n", t += "File System : " + this.fileSystem + "\n", t += "WebGL : " + this.webGL + "\n", t += "Workers : " + this.worker + "\n", t += "---\n", t += "Audio :: \n", t += "AudioData : " + this.audioData + "\n", t += "WebAudio : " + this.webAudio + "\n", t += "Supports .ogg : " + this.ogg + "\n", t += "Supports Opus : " + this.opus + "\n", t += "Supports .mp3 : " + this.mp3 + "\n", t += "Supports .wav : " + this.wav + "\n", t += "Supports .m4a : " + this.m4a + "\n", t += "Supports .webm : " + this.webm
            }, Object.defineProperty(Device.prototype, "ie9", {
                get: function () {
                    return this.ie && 9 === this.ieVersion
                }
            }), Object.defineProperty(Device.prototype, "useSM2", {
                get: function () {
                    return this.ie || this.opera
                }
            }), Device.instance = new Device, i.exports = Device
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(23),
                s = i(26),
                a = i(16),
                h = function (t) {
                    r.Container.call(this),
                    this.app = t,
                    this.easeLoad = 0,
                    this.targetLoad = 0,
                    this.onReady = new a,
                    this.onComplete = new a,
                    this.initLoader()
                };
            h.prototype = Object.create(r.Container.prototype), h.prototype.initLoader = function () {
                o.instance.add(this.update, this), this.resize(this.w, this.h), s.wait(this.showLoader.bind(this))
            }, h.prototype.showLoader = function () {
                this.onReady.dispatch()
            }, h.prototype.update = function () {
                this.easeLoad += .3 * (this.targetLoad - this.easeLoad), this.easeLoad > .99 && (this.easeLoad = 1, o.instance.remove(this.update, this), this.onComplete.dispatch())
            }, h.prototype.updateProgress = function (t) {
                this.targetLoad = t
            }, h.prototype.onHide = function () {
                o.instance.remove(this.update, this)
            }, h.prototype.resize = function (t, e) {
                this.w = t, this.h = e, this.barBg
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function () {
                this.updateBind = this.update.bind(this), this.waits = []
            };
            n.prototype.wait = function (t, e) {
                var i = {
                    callback: t,
                    count: e || 2
                };
                this.waits.push(i), requestAnimationFrame(this.updateBind)
            }, n.prototype.update = function () {
                for (var t = this.waits.length - 1; t >= 0; t--) {
                    var e = this.waits[t];
                    e.count--, e.count <= 0 && (e.callback(), this.waits.splice(t, 1))
                }
                this.waits.length > 0 && requestAnimationFrame(this.updateBind)
            }, i.exports = new n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(23),
                o = i(24),
                s = i(16),
                a = (i(14), function (t) {
                    if (
                        this.mode = t,
                        this.onRotationChanged = new s,
                        this.rotationWarning = !0,
                        this.orientation,
                        this.rotateScreen = document.createElement("div"),
                        this.rotateScreen.style.backgroundPosition = "50% 50%",
                        this.rotateScreen.style.backgroundColor = "#3b3b3b",
                        this.rotateScreen.style.backgroundRepeat = "no-repeat",
                        this.rotateScreen.style.position = "absolute",
                        this.rotateScreen.style.backgroundSize = "cover",
                        this.rotateScreen.style.top = "0",
                        this.rotateScreen.style.left = "0",
                        this.rotateScreen.style.bottom = "0",
                        this.rotateScreen.style.right = "0",
                        this.rotateScreen.style.zIndex = 1e7,
                        this.rotateScreen.style.display = "none",
                        this.rotateScreen.height = "100%",
                        this.rotateScreen.width = "100%",
                        this.changeRotationImage(URL_HEADER.IMAGE + "orientation_iphone.jpg"),
                        o.instance.iPad && this.changeRotationImage(URL_HEADER.IMAGE + "orientation_ipad.jpg"),
                        //document.body.appendChild(this.rotateScreen),
                        $('body').append($(this.rotateScreen)),
                        o.instance.firefox
                    ) {
                        var e = window.matchMedia("(orientation: portrait)");
                        e.addListener(this.checkOrientationChangesFirefox.bind(this))
                    }

                    this.supportsOrientationChange = "onorientationchange" in window,
                    this.supportsOrientationChange && (
                        this.orientation = window.orientation,
                        window.addEventListener("orientationchange", this.checkOrientationChanges.bind(this), !1),
                        this.checkOrientationChanges()
                    ),
                    this.supportsOrientationEvent = "DeviceOrientationEvent" in window
                });
            a.prototype.constructor = a, a.prototype.checkOrientationResize = function (t) { }, a.prototype.changeRotationImage = function (t) {
                this.rotateScreen.style.backgroundImage = "url(" + t + ")"
            }, a.prototype.checkOrientationChangesFirefox = function () {
                var t = screen.orientation || screen.mozOrientation || screen.msOrientation;
                "landscape-primary" === t ? this.orientation = 90 : "landscape-secondary" === t && (this.orientation = -90), this.onRotationChanged.dispatch(this.orientation)
            }, a.prototype.checkOrientationChanges = function () {
                this.orientation = window.orientation, this.onRotationChanged.dispatch(window.orientation), 0 === this.orientation ? (r.instance.stop(), r.game.stop(), this.rotateScreen.style.display = "block") : (r.instance.start(), r.game.start(), this.rotateScreen.style.display = "none")
            }, a.prototype.check = function (t, e) {
                if (!o.instance.desktop) {
                    var i = 0 === this.mode ? t < e : t > e;
                    i ? (r.instance.stop(), this.rotateScreen.style.display = "block") : (r.instance.start(), this.rotateScreen.style.display = "none")
                }
            }, a.prototype.updateDeviceOrientation = function (t) {
                this.alpha = t.alpha, this.beta = t.beta, this.gamma = t.gamma
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(18),
                o = function (t, e) {
                    this.debug = e.debug || !1, this.app = t, this.app.loader.addJson(e.stringsUrl || URL_HEADER.DATA + "json/strings.json", "strings")
                };
            o.prototype.constructor = o, o.prototype.init = function () {
                if (window.translations = r.getJson("strings").strings, this.debug)
                    for (var t in window.translations) window.translations[t] += window.translations[t]
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        ! function (r) {
            var o = function (t) {
                return this instanceof o ? o.methods.initialize(t) : new o(t)
            },
                s = window.devicePixelRatio || 1,
                a = {
                    WIDTH: 80 * s,
                    HEIGHT: 50 * s,
                    FRAMES: {
                        WIDTH: 74 * s,
                        HEIGHT: 32 * s,
                        X: 3 * s,
                        Y: 15 * s
                    },
                    TEXT: {
                        HEIGHT: 8 * s,
                        X: 75 * s,
                        Y: 10 * s
                    }
                },
                h = {
                    FPS: {
                        DATAS: "#1AFFFF",
                        FRAMES: "#1B314C",
                        BACKGROUND: "#1A1A38"
                    },
                    MS: {
                        DATAS: "#1AFF1A",
                        FRAMES: "#1B4C1B",
                        BACKGROUND: "#1A381A"
                    },
                    MB: {
                        DATAS: "#FF1A94",
                        FRAMES: "#4C1B34",
                        BACKGROUND: "#381A29"
                    },
                    PING: {
                        DATAS: "#FFFFFF",
                        FRAMES: "#555555",
                        BACKGROUND: "#222222"
                    }
                },
                l = {
                    FPS: 0,
                    MS: 1,
                    MB: 2,
                    PING: 3
                },
                c = void 0 != window.performance && void 0 != window.performance.memory && void 0 != window.performance.memory.usedJSHeapSize;
            o.methods = {
                initialize: function (t) {
                    return this.mode = l.FPS, this.realTime = t || !1, this.frameTime = 0, this.beginTime = 0, this.endTime = 0, this.isPinging = !1, this.beginPinging = 0, this.endPinging = 0, this.fps = {
                        value: 0,
                        current: 0,
                        min: 1 / 0,
                        max: -(1 / 0),
                        array: new Array(a.FRAMES.WIDTH)
                    }, this.ms = {
                        value: 0,
                        current: 0,
                        min: 1 / 0,
                        max: -(1 / 0),
                        array: new Array(a.FRAMES.WIDTH)
                    }, this.mb = {
                        value: 0,
                        current: 0,
                        min: 1 / 0,
                        max: -(1 / 0),
                        array: new Array(a.FRAMES.WIDTH)
                    }, this.ping = {
                        value: 0,
                        current: 0,
                        min: 1 / 0,
                        max: -(1 / 0),
                        array: new Array(a.FRAMES.WIDTH)
                    }, this.domElement = document.createElement("canvas"), this.domElement.className = "statsjs", this.domElement.width = a.WIDTH, this.domElement.height = a.HEIGHT, this.domElement.style.width = a.WIDTH / s + "px", this.domElement.style.height = a.HEIGHT / s + "px", this.domElement.addEventListener("click", function (t) {
                        this.switchMode()
                    }.bind(this), !1), this.context = this.domElement.getContext("2d"), this.context.imageSmoothingEnabled = !1, this.context.font = "bold " + a.TEXT.HEIGHT + "px sans-serif", this.context.textAlign = "right", this
                },
                switchMode: function () {
                    this.mode == l.FPS ? this.mode = l.MS : this.mode == l.MS ? 1 == c ? this.mode = l.MB : this.mode = l.PING : this.mode == l.MB ? this.mode = l.PING : this.mode == l.PING && (this.mode = l.FPS), this.draw()
                },
                begin: function () {
                    this.beginTime = window.performance.now()
                },
                end: function () {
                    var t = window.performance.now(),
                        e = t - this.frameTime;
                    if (this.endTime = t, this.fps.current++, this.fps.max = Math.max(this.fps.current, this.fps.max), this.ms.current = (this.endTime - this.beginTime).toFixed(0), this.ms.min = Math.min(this.ms.current, this.ms.min), this.ms.max = Math.max(this.ms.current, this.ms.max), 1 == c && (this.mb.current = Math.round(9.54e-7 * window.performance.memory.usedJSHeapSize), this.mb.min = Math.min(this.mb.current, this.mb.min), this.mb.max = Math.max(this.mb.current, this.mb.max)), 1 == this.realTime && (this.fps.value = this.fps.current, this.fps.array[this.fps.array.length - 1] = this.fps.value), e < 1e3 && 1 == this.realTime) this.draw();
                    else if (e >= 1e3) {
                        this.fps.min = Math.min(this.fps.current, this.fps.min), this.frameTime = t, this.fps.value = this.fps.current, this.ms.value = this.ms.current, this.mb.value = this.mb.current, this.ping.value = this.ping.current;
                        for (var i = 0, n = a.FRAMES.WIDTH; i < n; i++) this.fps.array[i] = this.fps.array[i + 1], this.ms.array[i] = this.ms.array[i + 1], this.mb.array[i] = this.mb.array[i + 1], this.ping.array[i] = this.ping.array[i + 1];
                        this.fps.array[this.fps.array.length - 1] = this.fps.value, this.ms.array[this.ms.array.length - 1] = this.ms.value, this.mb.array[this.mb.array.length - 1] = this.mb.value, this.ping.array[this.ping.array.length - 1] = this.ping.value, this.draw(), this.fps.current = 0
                    }
                },
                beginPing: function () {
                    this.beginPinging = window.performance.now()
                },
                endPing: function () {
                    this.endPinging = window.performance.now(), this.ping.current = parseInt(this.endPinging - this.beginPinging), this.ping.min = Math.min(this.ping.current, this.ping.min), this.ping.max = Math.max(this.ping.current, this.ping.max)
                },
                draw: function () {
                    if (this.context.clearRect(0, 0, a.WIDTH, a.HEIGHT), this.mode == l.FPS) {
                        this.context.fillStyle = h.FPS.BACKGROUND, this.context.fillRect(0, 0, a.WIDTH, a.HEIGHT), this.context.fillStyle = h.FPS.FRAMES, this.context.fillRect(a.FRAMES.X, a.FRAMES.Y, a.FRAMES.WIDTH, a.FRAMES.HEIGHT), this.context.fillStyle = h.FPS.DATAS;
                        var t = this.fps.min == 1 / 0 ? "∞" : this.fps.min,
                            e = this.fps.max == -(1 / 0) ? "∞" : this.fps.max;
                        1 == this.realTime ? this.context.fillText(this.fps.current + " FPS (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y) : this.context.fillText(this.fps.value + " FPS (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y);
                        for (var i = 0, n = this.fps.array.length; i < n; i++) {
                            var r = this.fps.array[i] / this.fps.max * a.FRAMES.HEIGHT || 0,
                                o = a.FRAMES.X + i,
                                s = a.FRAMES.Y + a.FRAMES.HEIGHT - r;
                            this.context.fillRect(o, s, 1, r)
                        }
                    } else if (this.mode == l.MS) {
                        this.context.fillStyle = h.MS.BACKGROUND, this.context.fillRect(0, 0, a.WIDTH, a.HEIGHT), this.context.fillStyle = h.MS.FRAMES, this.context.fillRect(a.FRAMES.X, a.FRAMES.Y, a.FRAMES.WIDTH, a.FRAMES.HEIGHT), this.context.fillStyle = h.MS.DATAS;
                        var t = this.ms.min == 1 / 0 ? "∞" : this.ms.min,
                            e = this.ms.max == -(1 / 0) ? "∞" : this.ms.max;
                        1 == this.realTime ? this.context.fillText(this.ms.current + " MS (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y) : this.context.fillText(this.ms.value + " MS (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y);
                        for (var i = 0, n = this.ms.array.length; i < n; i++) {
                            var r = this.ms.array[i] / this.ms.max * a.FRAMES.HEIGHT || 0,
                                o = a.FRAMES.X + i,
                                s = a.FRAMES.Y + a.FRAMES.HEIGHT - r;
                            this.context.fillRect(o, s, 1, r)
                        }
                    } else if (this.mode == l.MB) {
                        this.context.fillStyle = h.MB.BACKGROUND, this.context.fillRect(0, 0, a.WIDTH, a.HEIGHT), this.context.fillStyle = h.MB.FRAMES, this.context.fillRect(a.FRAMES.X, a.FRAMES.Y, a.FRAMES.WIDTH, a.FRAMES.HEIGHT), this.context.fillStyle = h.MB.DATAS;
                        var t = this.mb.min == 1 / 0 ? "∞" : this.mb.min,
                            e = this.mb.max == -(1 / 0) ? "∞" : this.mb.max;
                        1 == this.realTime ? this.context.fillText(this.mb.current + " MB (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y) : this.context.fillText(this.mb.value + " MB (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y);
                        for (var i = 0, n = this.mb.array.length; i < n; i++) {
                            var r = this.mb.array[i] / this.mb.max * a.FRAMES.HEIGHT || 0,
                                o = a.FRAMES.X + i,
                                s = a.FRAMES.Y + a.FRAMES.HEIGHT - r;
                            this.context.fillRect(o, s, 1, r)
                        }
                    } else if (this.mode == l.PING) {
                        this.context.fillStyle = h.PING.BACKGROUND, this.context.fillRect(0, 0, a.WIDTH, a.HEIGHT), this.context.fillStyle = h.PING.FRAMES, this.context.fillRect(a.FRAMES.X, a.FRAMES.Y, a.FRAMES.WIDTH, a.FRAMES.HEIGHT), this.context.fillStyle = h.PING.DATAS;
                        var t = this.ping.min == 1 / 0 ? "∞" : this.ping.min,
                            e = this.ping.max == -(1 / 0) ? "∞" : this.ping.max;
                        1 == this.realTime ? this.context.fillText(this.ping.current + " PING (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y) : this.context.fillText(this.ping.value + " PING (" + t + "-" + e + ")", a.TEXT.X, a.TEXT.Y);
                        for (var i = 0, n = this.ping.array.length; i < n; i++) {
                            var r = this.ping.array[i] / this.ping.max * a.FRAMES.HEIGHT || 0,
                                o = a.FRAMES.X + i,
                                s = a.FRAMES.Y + a.FRAMES.HEIGHT - r;
                            this.context.fillRect(o, s, 1, r)
                        }
                    }
                }
            }, o.methods.initialize.prototype = o.methods, i(30) instanceof Function && void 0 != i(7) ? (n = function () {
                return o
            }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))) : "undefined" != typeof t && t.exports ? t.exports = o : void 0 != r && (r.Stats = o)
        }(this || {})
    },
    //function index: 30
    function (t, e) {
        t.exports = function () {
            throw new Error("define cannot be used indirect")
        }
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        e.__esModule = !0, e["default"] = function () {
            //reset sound url
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/applause_extra", "applause_extra"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/button_deselect", "cantselect"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/ballkick_billboards", "ballkick_billboards"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/ballkick_pass", "ballkick_pass"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/ball_pickup", "ball_pickup"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/ballkick_post", "ballkick_post"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/ballkick_shoot", "ballkick_shoot"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/ballkick_shoot_hard", "ballkick_shoot_hard"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/bonus_box_pickup", "bonus_box_pickup"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/buttercup", "buttercup"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/button_press", "button_press"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/button_press2", "button_press2"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/button_roll", "button_roll"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/captain_shot_charged", "captain_shot_charged"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_goal_1", "crowd_goal_1"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_goal_2", "crowd_goal_2"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_tackle", "crowd_tackle"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/electro_cute", "electro_cute"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/finn", "finn"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/gumball", "gumball"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/mojo", "mojo"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/panda_bear", "panda_bear"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/princess_bubblegum", "princess_bubblegum"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/shot_charged", "shot_charged"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/charge_up", "charge_up"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/tackle_hit_deck", "tackle_hit_deck"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/whistle_full_time", "whistle_full_time"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/whistle_long", "whistle_long"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/whistle_short", "whistle_short"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/whistle_tripple", "whistle_tripple"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_tackle_2", "crowd_tackle_2"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/big_kick", "big_kick"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/slide_1", "slide_1"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/slide_2", "slide_2"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/slide_3", "slide_3"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_normal_1", "crowd_normal_1"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_normal_2", "crowd_normal_2"),
            o["default"].sfx.addSound(URL_HEADER.SOUND + "/crowd_normal_3", "crowd_normal_3"),
            o["default"].sfx.addGroup(["crowd_tackle_2", "crowd_tackle", "crowd_normal_1", "crowd_normal_2", "crowd_normal_3"], "croudAngry"),
            o["default"].sfx.addGroup(["crowd_normal_1", "crowd_normal_2", "crowd_normal_3"], "croudHappy"),
            o["default"].sfx.addGroup(["slide_1", "slide_2", "slide_3"], "slide"),
            o["default"].music.addSound(URL_HEADER.SOUND + "/menumusic2", "menumusic2", {
                loop: !0
            }),
            o["default"].music.addSound(URL_HEADER.SOUND + "/applause_loop", "applause_loop", {
                loop: !0,
                volume: .1
            }),
            window.SoundManager = o["default"]
        };
        var r = i(32),
            o = n(r);
        t.exports = e["default"]
    },
    soundManagerFn,
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(16),
                o = function () {
                    "undefined" != typeof document.hidden ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.onHide = new r, this.onShow = new r, this.init()
                };
            o.prototype.handleVisibilityChange = function () {
                document[this.hidden] ? this.onHide.dispatch() : this.onShow.dispatch()
            }, o.prototype.init = function () {
                document.addEventListener(this.visibilityChange, this.handleVisibilityChange.bind(this), !1)
            }, n.exports = new o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e) {
        "use strict";
        t.exports = {
            BREADCRUMB: {
                HEIGHT: 80
            },
            COUNTRY_SELECT: {
                MARGIN: 20
            },
            PLAYER_CARD: {
                WIDTH: 306,
                OFFSET: 60,
                HEIGHT: 400,
                PADDING: 10
            },
            MARGIN: {
                TITLE_TOP: 82
            },
            SCREEN_ID: {
                TITLE: "TITLE",
                INSTRUCTIONS: "INSTRUCTIONS",
                COUNTRY_SELECT: "COUNTRY_SELECT",
                CAPTAIN_SELECT: "CAPTAIN_SELECT",
                PLAYER_SELECT: "PLAYER_SELECT",
                PLAYER_SELECT_2: "PLAYER_SELECT_2",
                TEAM_REVIEW: "TEAM_REVIEW",
                TEAM_SELECT: "TEAM_SELECT",
                TOURNAMENT: "TOURNAMENT",
                GAME: "GAME",
                GAMEOVER: "GAMEOVER",
                SUCCEED: "SUCCEED",
                FAIL: "FAIL",
                LEADERBOARD: "LEADERBOARD"
            },
            OVERLAY_ID: {
                INSTRUCTIONS: "INSTRUCTIONS",
                PAUSE: "PAUSE",
                QUIT: "QUIT",
                EMPTY: "EMPTY"
            },
            MESSAGE_ID: {
                VS: "VS",
                WHISTLE: "WHISTLE",
                GOAL: "GOAL",
                SCORE: "SCORE"
            }
        }
    },
    loaderScreenFn,
    //36
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = {};
            o.trimTexture = function (t, e, i, n, r) {
                e = e || 0, i = i || 0, n = n || 0, r = r || 0;
                var o = t._frame;
                o.x += e, o.y += n, o.width -= e + i, o.height -= n + r, t.frame = o, t._updateUvs()
            },
            o.getTexturesFromFrames = function (t) {
                for (var e = [], i = 0; i < t.length; i++) e.push(new r.Texture.fromFrame(t[i]));
                return e
            },
            o.getTexturesFromImages = function (t) {
                for (var e = [], i = 0; i < t.length; i++) e.push(new r.Texture.fromImage(t[i]));
                return e
            },
            o.getTexturesFromFramesWithPrefix = function (t, e, i, n) {
                var o = [];
                void 0 == i && (i = 0);
                for (var s = 0; s < e; s++) {
                    var a = s + i,
                        h = t.replace("%%", a < 10 ? "0" + a : a);
                    if (n) var h = t.replace("%%", a);
                    o.push(new r.Texture.fromFrame(h))
                }
                return o
            },
            o.formatTime = function (t) {
                if (999999 === t) return "00:00:00";
                var t = t / .06,
                    e = t / 60 / 1e3 | 0;
                t -= 60 * e * 1e3;
                var i = t / 1e3 | 0;
                t -= 1e3 * i;
                var n = t / 10 | 0;
                return t -= 10 * n, (e < 10 ? "0" : "") + e + ":" + (i < 10 ? "0" : "") + i + ":" + (n < 10 ? "0" : "") + n
            },
            o.formatTimeSeconds = function (t) {
                if (999999 === t) return "00:00";
                var t = t / .06,
                    e = t / 60 / 1e3 | 0;
                t -= 60 * e * 1e3;
                var i = t / 1e3 | 0;
                return t -= 1e3 * i, (e < 10 ? "0" : "") + e + ":" + (i < 10 ? "0" : "") + i
            },
            o.pad = function (t, e) {
                var i = "0000" + t;
                return i.substr(i.length - e)
            },
            o.shuffle = function (t) {
                for (var e = t.length - 1; e > 0; e--) {
                    var i = Math.floor(Math.random() * (e + 1)),
                        n = t[e];
                    t[e] = t[i], t[i] = n
                }
                return t
            },
            o.isInArray = function (t, e) {
                for (var i = t.length; i--;)
                    if (t[i] === e) return !0;
                return !1
            },
            o.uniq = function (t, e) {
                var i = [],
                    n = {};
                for (var r in t) n[t[r][e]] = t[r];
                for (r in n) i.push(n[r]);
                return i
            },
            o.formatScore = function (t) {
                for (var e = t.toString().split(""), i = "", n = e.length, r = n % 3 - 1, o = 0; o < n; o++) i += e[o], (o - r) % 3 == 0 && o != n - 1 && (i += ",");
                return i
            },
            o.formatNumber = function (t) {
                if (ones = t % 10, tens = Math.floor(t / 10) % 10, 1 == tens) return t + "th";
                switch (ones) {
                    case 1:
                        return t + "st";
                    case 2:
                        return t + "nd";
                    case 3:
                        return t + "rd";
                    default:
                        return t + "th"
                }
            },
            o.formatName = function (t) {
                for (var e = t.split(" "), i = e.length - 1; i >= 0; i--) 0 !== e[i].length && (wordArray = e[i].split(""), wordArray[0] = wordArray[0].toUpperCase(), e[i] = wordArray.join(""));
                return word = e.join(" "), word
            },
            window.console || (window.console = {
                log: function (t) { }
            }),
            o.get_query = function (t) {
                for (var e = location.href, i = e.substring(e.indexOf("?") + 1).split("&"), n = 0, r = {}; n < i.length; n++) i[n] = i[n].split("="), r[i[n][0]] = decodeURIComponent(i[n][1]);
                return !!r.hasOwnProperty(t) && r[t]
            },
            o.toCamelCase = function (t) {
                var e = /\s([a-z]|[A-Z])/,
                    i = t.trim();
                return i = i.toLowerCase(), i = i.replace(e, function (t, e) {
                    return e.toUpperCase()
                })
            },
            o.defaults = function (t, e) {
                t = t || {};
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            o.fitText = o.resizeText = function (t, e, i, n) {
                n = n || "w", t.scale.set(1), i && (t.text = i);
                var r = 0;
                r = "w" === n ? e / t.width : e / t.height, r > 1 && (r = 1), t.scale.set(r)
            },
            o.resizeMultipleTexts = function (t, e, i) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.scale.set(1)
                }
                var o = 0;
                if (i)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.text = i[n]
                    }
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.width > o && (o = r.width)
                }
                var s = e / o;
                s > 1 && (s = 1);
                for (var n = 0; n < t.length; n++) t[n].scale.set(s)
            },
            n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e) {
        "use strict";
        var i = {
            playButton: "STR_PLAY_BUTTON",
            loader: {
                loading: "STR_LOADER_LOADING"
            },
            sponsor: {
                path: URL_HEADER.IMAGE + "sponsor/main-menu-sponsor.jpg",
                //url: "www.google.co.uk"
                url: "www.ikcoder.com"
            },
            title_screen: {
                logo: "/localisation/logo.png",
                quick_play: "STR_TITLE_QUICKPLAY",
                tournament: "STR_TITLE_TOURNAMENT",
                leaderboard: "STR_TITLE_LEADERBOARD",
                updateBrowser: "STR_BROWSER_SUPPORT"
            },
            country_select_screen: {
                title: "STR_COUNTRY_SELECT_TITLE",
                toolTip: "STR_COUNTRY_RANKING"
            },
            captain_select_screen: {
                title: "STR_CAPTAIN_SELECT_TITLE"
            },
            player1_select_screen: {
                title: "STR_PLAYER1_SELECT_TITLE"
            },
            player2_select_screen: {
                title: "STR_PLAYER2_SELECT_TITLE"
            },
            review_screen: {
                title: "STR_REVIEW_TITLE"
            },
            instructions_screen: {
                title: "STR_INSTRUCTIONS_TITLE",
                movement: "STR_INSTRUCTIONS_MOVEMENT",
                tackle: "STR_INSTRUCTIONS_TACKLE",
                shortPass: "STR_INSTRUCTIONS_PASS",
                specialShot: "STR_INSTRUCTIONS_SHOT",
                tackleKey: "Z",
                specialShotKey: "X"
            },
            team_select_screen: {
                title: "STR_TEAM_SELECT_TITLE",
                captain: "STR_TEAM_SELECT_CAPTAIN",
                players: "STR_TEAM_SELECT_PLAYERS"
            },
            tournament_screen: {
                title: "STR_TOURNAMENT_TITLE",
                playButton: "STR_PLAY_BUTTON",
                endButton: "STR_TOURNAMENT_END_BUTTON",
                stages: {
                    quarter: "STR_TOURNAMENT_QUARTERS",
                    semi: "STR_TOURNAMENT_SEMI",
                    "final": "STR_TOURNAMENT_FINALS",
                    winner: "STR_TOURNAMENT_WINNER"
                }
            },
            gameover_screen: {
                title: "STR_GAMEOVER_TITLE"
            },
            leaderboard_screen: {
                title: "STR_LEADERBOARD_TITLE"
            },
            game_screen: {
                goal: "STR_GAME_GOAL",
                goldenGoal: "STR_GAME_GOLDEN_GOAL"
            },
            succeed_screen: {
                title: "STR_GAME_WIN"
            },
            fail_screen: {
                title: "STR_GAME_FAIL"
            },
            pause_overlay: {
                title: "STR_PAUSED"
            },
            quit_overlay: {
                title: "STR_QUIT"
            },
            countries: {
                BG: {
                    ID: "BG",
                    SCORE_ID: 1,
                    NAME: "STR_COUNTRY_BULGARIA",
                    FLAG: "bulgaria-flag.png"
                },
                DK: {
                    ID: "DK",
                    SCORE_ID: 3,
                    NAME: "STR_COUNTRY_DENMARK",
                    FLAG: "denmark-flag.png"
                },
                EG: {
                    ID: "EG",
                    SCORE_ID: 20,
                    NAME: "STR_COUNTRY_EGYPT",
                    FLAG: "egypt-flag.png"
                },
                FR: {
                    ID: "FR",
                    SCORE_ID: 6,
                    NAME: "STR_COUNTRY_FRANCE",
                    FLAG: "france-flag.png"
                },
                DE: {
                    ID: "DE",
                    SCORE_ID: 2,
                    NAME: "STR_COUNTRY_GERMANY",
                    FLAG: "germany-flag.png"
                },
                DZ: {
                    ID: "DZ",
                    SCORE_ID: 18,
                    NAME: "STR_COUNTRY_ALGERIA",
                    FLAG: "algeria-flag.png"
                },
                HU: {
                    ID: "HU",
                    SCORE_ID: 7,
                    NAME: "STR_COUNTRY_HUNGARY",
                    FLAG: "hungary-flag.png"
                },
                IT: {
                    ID: "IT",
                    SCORE_ID: 8,
                    NAME: "STR_COUNTRY_ITALY",
                    FLAG: "italy-flag.png"
                },
                NL: {
                    ID: "NL",
                    SCORE_ID: 9,
                    NAME: "STR_COUNTRY_NETHERLANDS",
                    FLAG: "netherlands-flag.png"
                },
                NO: {
                    ID: "NO",
                    SCORE_ID: 10,
                    NAME: "STR_COUNTRY_NORWAY",
                    FLAG: "norway-flag.png"
                },
                PL: {
                    ID: "PL",
                    SCORE_ID: 11,
                    NAME: "STR_COUNTRY_POLAND",
                    FLAG: "poland-flag.png"
                },
                PT: {
                    ID: "PT",
                    SCORE_ID: 12,
                    NAME: "STR_COUNTRY_PORTUGAL",
                    FLAG: "portugal-flag.png"
                },
                RO: {
                    ID: "RO",
                    SCORE_ID: 13,
                    NAME: "STR_COUNTRY_ROMANIA",
                    FLAG: "romania-flag.png"
                },
                RU: {
                    ID: "RU",
                    SCORE_ID: 14,
                    NAME: "STR_COUNTRY_RUSSIA",
                    FLAG: "russia-flag.png"
                },
                SA: {
                    ID: "SA",
                    SCORE_ID: 21,
                    NAME: "STR_COUNTRY_SAUDI_ARABIA",
                    FLAG: "saudi-arabia-flag.png"
                },
                ZA: {
                    ID: "ZA",
                    SCORE_ID: 16,
                    NAME: "STR_COUNTRY_SOUTH_AFRICA",
                    FLAG: "south-africa-flag.png"
                },
                ES: {
                    ID: "ES",
                    SCORE_ID: 5,
                    NAME: "STR_COUNTRY_SPAIN",
                    FLAG: "spain-flag.png"
                },
                SE: {
                    ID: "SE",
                    SCORE_ID: 15,
                    NAME: "STR_COUNTRY_SWEDEN",
                    FLAG: "sweden-flag.png"
                },
                TR: {
                    ID: "TR",
                    SCORE_ID: 17,
                    NAME: "STR_COUNTRY_TURKEY",
                    FLAG: "turkey-flag.png"
                },
                AE: {
                    ID: "AE",
                    SCORE_ID: 26,
                    NAME: "STR_COUNTRY_EMIRATES",
                    FLAG: "uae-flag.png"
                },
                GB: {
                    ID: "GB",
                    SCORE_ID: 4,
                    NAME: "STR_COUNTRY_UNITED_KINGDOM",
                    FLAG: "uk-flag.png"
                },
                CZ: {
                    ID: "CZ",
                    SCORE_ID: 27,
                    NAME: "STR_COUNTRY_CZECH",
                    FLAG: "czech-flag.png"
                },
                AFR: {
                    ID: "AFR",
                    SCORE_ID: 25,
                    NAME: "STR_COUNTRY_AFRICA",
                    FLAG: "all-stars-africa-flag.png"
                },
                EUR: {
                    ID: "EUR",
                    SCORE_ID: 24,
                    NAME: "STR_COUNTRY_EUR",
                    FLAG: "all-stars-euro-flags.png"
                },
                MEA: {
                    ID: "MEA",
                    SCORE_ID: 22,
                    NAME: "STR_COUNTRY_MEA",
                    FLAG: "all-stars-middle-east-flag.png"
                },
                WRD: {
                    ID: "WRD",
                    SCORE_ID: 23,
                    NAME: "STR_COUNTRY_WRD",
                    FLAG: "all-stars-world-flag.png"
                }
            }
        };
        t.exports = {
            Translation: i,
            getCountries: function () {
                var t = [];
                for (var e in i.countries) t.push(i.countries[e]);
                return t
            }
        }
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = function (t, e) {
                    r.Container.call(this), this.bg = r.Sprite.from(e), this.bg.anchor.set(.5, .5), this.addChild(this.bg), this.label = new r.Text("", {
                        fill: "white",
                        fontSize: 28,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), this.label.anchor.set(.5, .5), this.addChild(this.label), this.setText(t)
                };
            o.prototype = Object.create(r.Container.prototype), o.prototype.setText = function (t) {
                this.label.scale.set(1), this.label.text = "undefined" != typeof t ? t : "", this.label.updateText();
                var e = .9 * this.bg.width / this.label.width;
                e = Math.min(e, 1), this.label.scale.set(e)
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    titleScreenFn,
    //function index: 40
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(16),
                o = i(32),
                s = function (t) {
                    this.disabled = o.music.disabled, this.music = o.music, this.currentSound = null, this.newSound = null, this.onFade = new r, this.globalVolume = 1, this.volume = 1, this.fadeInDuration = 1, this.fadeOutDuration = 1, this.music.onMuteToggle.add(this.onMusicToggle, this)
                };
            s.prototype.init = function (t) {
                this.volume = t.volume || 1, this.fadeInDuration = t.fadeInDuration || 3.2, this.fadeOutDuration = t.fadeOutDuration || 3.5
            }, s.prototype.add = function (t, e) {
                o.music.addSound(t, e, {
                    loop: !0
                })
            }, s.prototype.play = function (t) {
                var e = this.music.sounds[t];
                !this.disabled && e && this.currentSound !== e && (this.currentSound && this.currentSound.fade(this.volume, 0, 1e3 * this.fadeOutDuration), this.currentSound = e, this.currentSound.fade(0, this.volume, 1e3 * this.fadeInDuration, this.currentSound.play()))
            }, s.prototype.onMusicToggle = function (t) { }, s.prototype.setVolume = function (t, e) {
                this.disabled || (t.realVolume = e, t.volume(e * this.globalVolume))
            }, s.prototype.isPlaying = function (t) {
                if (!this.disabled) return !this.sounds[t]._audioNode[0].paused
            }, n.exports = new s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(42)),
                o = i(44),
                s = i(45),
                a = i(47),
                h = {
                    small: function (t) {
                        var e = new r("big-button-up.png", "big-button-over.png", "big-button-over.png", t ? t : null, .85);
                        return e.defaultScale = .75, e.scale.set(.75), e
                    },
                    big: function (t) {
                        var e = new r("big-button-up.png", "big-button-over.png", "big-button-over.png", t ? t : null, 1.1);
                        return e.defaultScale = 1, e
                    },
                    select: function (t) {
                        var e = new r("button-select-normal.png", "button-select-hover.png", "button-select-hover.png", t ? t : null, null);
                        return e.defaultScale = 1, e
                    },
                    validate: function (t) {
                        var e = new r("big-button-yes.png", "big-button-yes.png", "big-button-yes.png", t ? t : null, 1.1);
                        return e.defaultScale = 1, e
                    },
                    cancel: function (t) {
                        var e = new r("big-button-no.png", "big-button-no.png", "big-button-no.png", t ? t : null, 1.1);
                        return e.defaultScale = 1, e
                    },
                    label: function (t) {
                        var e = new o("big-button-up.png", "big-button-over.png", "big-button-over.png", t);
                        return e.defaultScale = 1, e.pressSound = "button_press2", e
                    },
                    country: function (t) {
                        var e = new s(null, null, null, t, null, "transparent-pixel.png", "flag-white-border.png");
                        return e
                    },
                    character: function (t) {
                        var e = new a(null, null, null, t.profile, null, t.isCaptain ? "blue-pixel.png" : "orange-pixel.png", null, null, t.available);
                        return e
                    },
                    sponsor: function (t, e) {
                        var i = new r("sponsor-background.png", null, null, null);
                        return i.defaultScale = 1, i.interactive = !1, i
                    },
                    close: function (t) {
                        var e = new r("big-button-up.png", "big-button-over.png", "big-button-over.png", t ? t : null);
                        return e.defaultScale = 1, e
                    }
                };
            n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(43),
                s = i(32),
                a = function (t, e, i, n, s) {
                    o.call(this), this.isOnlyIcon = !0, this.scaleVal = "undefined" != typeof s ? s : null, this.pressSound = "button_press", this.rollSound = "button_roll", t && (this.background = new r.Sprite.fromFrame(t), this.background.anchor.set(.5), this.addChild(this.background), this.isOnlyIcon = !1), this.normalTexture = t, this.downTexture = e || this.normalTexture, this.hoverTexture = i || this.normalTexture, n && (this.icon = new r.Sprite.fromFrame(n), this.icon.anchor.set(.5), this.addChild(this.icon)), this.onDown.add(this._onDown, this), this.onUp.add(this._onUp, this), this.onHover.add(this._onHover, this), this.onOut.add(this._onMouseOut, this), this.onEnabled.add(this._onEnabled, this), this.onDisabled.add(this._onDisabled, this), this._soundDirty = !0
                };
            a.prototype = Object.create(o.prototype), a.prototype._onDown = function () {
                this.isOnlyIcon || (this.background.texture = r.Texture.fromFrame(this.downTexture))
            }, a.prototype._onHover = function () {
                this.isOnlyIcon || (this._soundDirty && (this._soundDirty = !1, s.sfx.play(this.rollSound)), this.background.texture = r.Texture.fromFrame(this.hoverTexture), null !== this.scaleVal && (TweenLite.to(this.scale, .3, {
                    x: this.scaleVal,
                    y: this.scaleVal,
                    ease: Linear.None
                }), TweenLite.to(this, .2, {
                    rotation: -5 * Math.PI / 180,
                    ease: Linear.None
                })))
            }, a.prototype._onMouseOut = function () {
                this.isOnlyIcon || (this._soundDirty || TweenLite.delayedCall(.4, function () {
                    this._soundDirty = !0
                }.bind(this)), this.background.texture = r.Texture.fromFrame(this.normalTexture), null !== this.scaleVal && (TweenLite.to(this.scale, .3, {
                    x: this.defaultScale,
                    y: this.defaultScale,
                    ease: Linear.None
                }), TweenLite.to(this, .3, {
                    rotation: 0,
                    ease: Linear.None
                })))
            }, a.prototype._onUp = function () {
                this.isOnlyIcon || (s.sfx.play(this.pressSound), this.background.texture = r.Texture.fromFrame(this.normalTexture))
            }, a.prototype._onEnabled = function () {
                o.prototype.enable.call(this)
            }, a.prototype._onDisabled = function () {
                o.prototype.disable.call(this)
            }, a.prototype.setIcon = function (t) {
                this.icon.texture = r.Texture.fromFrame(t)
            }, a.prototype.setSize = function (t) {
                this.defaultScale = t, this.overScale = 1.1 * t
            }, a.prototype.fromFrames = function (t, e, i, n) {
                return new a(r.Texture.fromFrame(t), r.Texture.fromFrame(e), r.Texture.fromFrame(i), n ? r.Texture.fromFrame(n) : null)
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n));
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(16),
                s = function () {
                    r.Container.call(this), this.onPress = new o, this.onDown = new o, this.onUp = new o, this.onHover = new o, this.onOut = new o, this.onEnabled = new o, this.onDisabled = new o, this.mousedown = this.touchstart = this.onDown.dispatch.bind(this, this), this.mouseup = this.touchend = this.onUp.dispatch.bind(this, this), this.click = this.tap = this.onPress.dispatch.bind(this, this), this.mouseover = this.onHover.dispatch.bind(this, this), this.touchendoutside = this.mouseupoutside = this.mouseout = this.onOut.dispatch.bind(this, this), this.onDown.add(this.down, this), this.onUp.add(this.up, this), this.onHover.add(this.hover, this), this.onOut.add(this.out, this), this.onEnabled.add(this.enable, this), this.onDisabled.add(this.disable, this), this._scale = new r.Point, this.enable(), this.setSize()
                };
            s.prototype = Object.create(r.Container.prototype), s.prototype.constructor = s, s.prototype.setSize = function (t) {
                switch (t) {
                    case "small":
                        this.scale.set(.5);
                        break;
                    case "big":
                        this.scale.set(2);
                        break;
                    default:
                        this.scale.set(1)
                }
            }, s.prototype.enable = function () {
                this.interactive = !0, this.buttonMode = !0, TweenLite.to(this, .3, {
                    alpha: 1,
                    ease: Linear.None
                })
            }, s.prototype.disable = function () {
                this.interactive = !1, this.buttonMode = !1, TweenLite.to(this, .3, {
                    alpha: .5,
                    ease: Linear.None
                })
            }, s.prototype.down = function (t, e) { }, s.prototype.up = function (t, e) { }, s.prototype.hover = function (t, e) { }, s.prototype.out = function (t, e) { }, s.prototype.show = function () {
                this.visible = !0, this.enable()
            }, s.prototype.hide = function () {
                this.disable(), this.visible = !1
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(42),
                o = function (t, e, i, n, o) {
                    r.call(this, t, e, i, null, o);
                    var s = {
                        fill: "white",
                        fontSize: 38,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    };
                    this.label = new PIXI.Text(n, s), this.label.anchor.set(.5), this.addChild(this.label);
                    var a = .9 * this.background.width / this.label.width;
                    a = Math.min(1, a), this.label.scale.set(a)
                };
            o.prototype = Object.create(r.prototype), n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(46),
                s = (i(16), function (t, e, i, n, s, a, h, l, c) {
                    o.call(this, t, e, i, n, s, l, c), this.borderTexture = a, this.borderTextureSelected = h || this.borderTexture, this.bg = new r.Sprite.fromFrame("empty-flag.png"), this.bg.anchor.set(.5), this.addChild(this.bg), this.bg.alpha = .5
                });
            s.prototype = Object.create(o.prototype), s.prototype.toggleIcon = function (t) {
                o.prototype.toggleIcon.call(this);
                var e = t === !0;
                e ? TweenLite.to(this.bg, .3, {
                    alpha: 0,
                    ease: Linear.None
                }) : this.bg && TweenLite.to(this.bg, .3, {
                    alpha: .5,
                    ease: Linear.None
                })
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(42),
                s = i(16),
                a = i(32),
                h = function (t, e, i, n, r, a, h) {
                    o.call(this, t, e, i, n), this.iconTexture = n, this.iconTextureSelected, "undefined" != typeof r && (this.iconTextureSelected = r), this.selected = a === !0, this.enabled = this.enabledInit = h !== !1, this.onSelected = new s, this.onHover2 = new s, this.onMouseOut = new s, this.toggleIcon(this.selected), this.setEnabled(this.enabled)
                };
            h.prototype = Object.create(o.prototype), h.prototype.setEnabled = function (t) {
                this.enabled = t !== !1, this.enabled ? o.prototype._onEnabled.call(this) : o.prototype._onDisabled.call(this)
            }, h.prototype.toggleIcon = function (t) {
                var e = t === !0;
                this.iconTextureSelected && (this.icon.texture = r.Texture.fromFrame(e ? this.iconTextureSelected : this.iconTexture))
            }, h.prototype._onDown = function () {
                this.selected = !this.selected, this.onSelected.dispatch(this), this.toggleIcon(this.selected), a.sfx.play("button_press"), o.prototype._onDown.call(this)
            }, h.prototype.select = function () {
                this.selected = !0, this.toggleIcon(this.selected)
            }, h.prototype.unselect = function () {
                this.selected = !1, this.toggleIcon(this.selected)
            }, h.prototype._onHover = function () {
                this.toggleIcon(!0), this._soundDirty = !0, a.sfx.play("button_roll"), this.onHover2.dispatch(this)
            }, h.prototype._onMouseOut = function () {
                this.onMouseOut.dispatch(this), this.toggleIcon(this.selected), o.prototype._onMouseOut.call(this)
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(46),
                s = (i(16), function (t, e, i, n, s, a, h, l, c) {
                    this.borderTexture = a, this.borderTextureSelected = h, this.multiplier = Math.pow(-1, Math.floor(2 * Math.random())), this.borderSprite = new r.Sprite.fromFrame(a), this.borderSprite.anchor.set(.5), o.call(this, t, e, i, n, s, l, c), this.addChildAt(this.borderSprite, 0)
                });
            s.prototype = Object.create(o.prototype), s.prototype.toggleIcon = function (t) {
                o.prototype.toggleIcon.call(this);
                var e = t === !0;
                e ? (TweenLite.to(this.scale, .3, {
                    x: 1.1,
                    y: 1.1,
                    ease: Back.easeOut
                }), TweenLite.to(this, .2, {
                    rotation: 5 * this.multiplier * Math.PI / 180,
                    ease: Back.easeOut
                })) : (TweenLite.to(this.scale, .3, {
                    x: 1,
                    y: 1,
                    ease: Linear.None
                }), TweenLite.to(this, .2, {
                    rotation: 0,
                    ease: Linear.None
                })), this.borderTextureSelected ? this.borderSprite.texture = r.Texture.fromFrame(e ? this.borderTextureSelected : this.borderTexture) : e ? TweenLite.to(this.borderSprite.scale, .3, {
                    x: 1.1,
                    y: 1.1,
                    ease: Back.easeOut
                }) : TweenLite.to(this.borderSprite.scale, .3, {
                    x: 1,
                    y: 1,
                    ease: Back.easeOut
                })
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = {};
            n.TWO_PI = 2 * Math.PI, n.random = function (t, e) {
                return t = t || 0, e = void 0 === e ? 1 : e, t + Math.random() * (e - t)
            }, n.randomInt = function (t, e) {
                return t + Math.random() * (e - t) | 0
            }, n.randomSeed = function (t, e, i) {
                min = t, max = e, i = i || 1, i = (9301 * i + 49297) % 233280;
                var n = i / 233280;
                return min + n * (max - min)
            }, n.randomChance = function (t, e) {
                return n.randomSeed(0, 1, e) > t
            }, n.cap = function (t, e, i) {
                return t < e ? e : t > i ? i : t
            }, n.sign = function (t) {
                return t < 0 ? -1 : t > 0 ? 1 : 0
            }, n.randomSign = function (t) {
                return Math.random() < (t || .5) ? -1 : 1
            }, n.randomChoice = function (t, e) {
                return Math.random() < .5 ? t : e
            }, n.map = function (t, e, i, n, r) {
                return (r - n) * ((t - e) / (i - e)) + n
            }, n.smallestAngle = function (t, e) {
                t %= 2 * Math.PI, t < 0 && (t += 2 * Math.PI);
                var i = e - t,
                    n = e + 2 * Math.PI - t,
                    r = e - 2 * Math.PI - t,
                    o = Math.abs(i),
                    s = Math.abs(n),
                    a = Math.abs(r),
                    h = i;
                return s < o && s < a ? h = n : a < o && a < s && (h = r), h
            }, n.wrap = function (t, e, i) {
                var n = i - e;
                return t -= e, t %= n, t < 0 && (t += n), t += e
            }, n.floor = function (t, e) {
                return (t / e | 0) * e
            }, n.round = function (t, e) {
                return Math.round(t / e) * e
            }, n.ceil = function (t, e) {
                return Math.ceil(t / e) * e
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";
        var n = i(50),
            r = n.CharacterData,
            o = (i(34), function () {
                var t = r;
                this.teamA = [t.ben10, t.grup, t.fourarms], this.teamB = [t.prohyas, t.vambre, t.ben10], this.teamA = [t.darwin, t.anais, t.princess_bubblegum], this.leftOverPlayers = [], this.autoSwitch = !0, this.isMuted = !1, this.isTournament = !1, this.countryID = {
                    ID: "MEA",
                    NAME: "MIDDLE EAST\nALL STARS",
                    FLAG: "all-stars-middle-east-flag.png"
                }, this.opponentID = {
                    ID: "WRD",
                    NAME: "WORLD\nALL STARS",
                    FLAG: "all-stars-world-flag.png"
                }, this.tournamentData = {
                    quarter: [],
                    semi: [],
                    "final": [],
                    winner: []
                }, this.difficulty = 0, this.matchResult = {
                    goalsA: -1,
                    goalsB: -1
                }, this.reset = function () {
                    var t = r;
                    this.teamA = [t.ben10, t.grup, t.fourarms], this.teamB = [t.prohyas, t.vambre, t.ben10], this.leftOverPlayers = [], this.countryID = {
                        ID: "MEA",
                        NAME: "MIDDLE EAST\nALL STARS",
                        FLAG: "all-stars-middle-east-flag.png"
                    }, this.opponentID = {
                        ID: "WRD",
                        NAME: "WORLD\nALL STARS",
                        FLAG: "all-stars-world-flag.png"
                    }, this.tournamentData = {
                        quarter: [],
                        semi: [],
                        "final": [],
                        winner: []
                    }, this.matchResult = {
                        goalsA: -1,
                        goalsB: -1
                    }, this.difficulty = 0
                }
            }),
            s = new o;
        window.gameSession = s, t.exports = s
    },
    //function index: 50
    function (t, e) {
        "use strict";
        var i = {
            ben10: {
                id: "ben10",
                name: "STR_CHAR_BEN",
                available: !0,
                isCaptain: !0,
                scale: 1,
                skill: .35,
                power: .3,
                speed: .5,
                "super": "super_shot_ben10_red.png",
                profile: "ben10.png",
                icon: "ben10-78x78.jpg",
                spriteSheet: "ben10_%COLOR%.json",
                brand: "ben10logo.png"
            },
            grup: {
                id: "grup",
                name: "STR_CHAR_GRUP",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .2,
                speed: .3,
                profile: "grup.png",
                icon: "grup-78x78.jpg",
                spriteSheet: "grup_%COLOR%.json",
                brand: "magicswords.png"
            },
            anais: {
                id: "anais",
                name: "STR_CHAR_ANAIS",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .2,
                speed: .3,
                profile: "anais.png",
                icon: "anais-78x78.jpg",
                spriteSheet: "anais_%COLOR%.json",
                brand: "gumble.png"
            },
            vambre: {
                id: "vambre",
                name: "STR_CHAR_VAMBRE",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .2,
                speed: .3,
                profile: "vambre.png",
                icon: "vambre-78x78.jpg",
                spriteSheet: "vambre_%COLOR%.json",
                brand: "magicswords.png"
            },
            blossom: {
                id: "blossom",
                name: "STR_CHAR_BLOSSOM",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .3,
                speed: .3,
                profile: "blossom.png",
                icon: "blossom-78x78.jpg",
                spriteSheet: "blossom_%COLOR%.json",
                brand: "powerpuff-girl.png",
                offsetBreadCrumb: {
                    y: -50
                }
            },
            bmo: {
                id: "bmo",
                name: "STR_CHAR_BMO",
                available: !0,
                isCaptain: !1,
                scale: .9,
                skill: .3,
                power: .2,
                speed: .4,
                profile: "BMO.png",
                icon: "bmo-78x78.jpg",
                spriteSheet: "bmo_%COLOR%.json",
                brand: "aventure-time.png"
            },
            xlr8: {
                id: "xlr8",
                name: "STR_CHAR_XLR8",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .2,
                speed: .5,
                profile: "XLR8.png",
                icon: "xlr8-78x78.jpg",
                spriteSheet: "xlr8_%COLOR%.json",
                brand: "ben10logo.png"
            },
            bubbles: {
                id: "bubbles",
                name: "STR_CHAR_BUBBLES",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .2,
                power: .3,
                speed: .3,
                profile: "bubbles.png",
                icon: "bubbles-78x78.jpg",
                spriteSheet: "bubbles_%COLOR%.json",
                brand: "powerpuff-girl.png"
            },
            buttercup: {
                id: "buttercup",
                name: "STR_CHAR_BUTTERCUP",
                available: !0,
                isCaptain: !0,
                scale: 1,
                skill: .3,
                power: .5,
                speed: .4,
                profile: "buttercup.png",
                icon: "buttercup-78x78.jpg",
                "super": "super_shot_buttercup_red.png",
                spriteSheet: "buttercup_%COLOR%.json",
                brand: "powerpuff-girl.png"
            },
            darwin: {
                id: "darwin",
                name: "STR_CHAR_DARWIN",
                available: !0,
                isCaptain: !1,
                scale: .9,
                skill: .3,
                power: .2,
                speed: .4,
                profile: "darwin.png",
                icon: "darwin-78x78.jpg",
                spriteSheet: "darwin_%COLOR%.json",
                brand: "gumble.png"
            },
            finn: {
                id: "finn",
                name: "STR_CHAR_FINN",
                available: !0,
                isCaptain: !0,
                scale: .8,
                skill: .3,
                power: .4,
                speed: .4,
                profile: "finn.png",
                icon: "finn-78x78.jpg",
                "super": "super_shot_finn_red.png",
                spriteSheet: "finn_%COLOR%.json",
                brand: "aventure-time.png"
            },
            grizz_bear: {
                id: "grizz_bear",
                name: "STR_CHAR_GRIZZ",
                available: !0,
                isCaptain: !1,
                scale: 1.1,
                skill: .4,
                power: .2,
                speed: .2,
                profile: "grizz.png",
                icon: "grizz-bear-78x78.jpg",
                spriteSheet: "grizz_%COLOR%.json",
                brand: "we-bare-bears.png"
            },
            prohyas: {
                id: "prohyas",
                name: "STR_CHAR_PROHYAS",
                available: !0,
                isCaptain: !0,
                scale: 1,
                skill: .3,
                power: .2,
                speed: .3,
                profile: "prohyas.png",
                icon: "prohyas-78x78.jpg",
                "super": "super_shot_prohyas_red.png",
                spriteSheet: "prohyas_%COLOR%.json",
                brand: "magicswords.png"
            },
            gumball: {
                id: "gumball",
                name: "STR_CHAR_GUMBALL",
                available: !0,
                isCaptain: !0,
                scale: 1,
                skill: .3,
                power: .3,
                speed: .5,
                profile: "gumball.png",
                icon: "gumball-78x78.jpg",
                "super": "super_shot_gumball_red.png",
                spriteSheet: "gumball_%COLOR%.json",
                brand: "gumble.png"
            },
            jake: {
                id: "jake",
                name: "STR_CHAR_JAKE",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .3,
                speed: .2,
                profile: "jake.png",
                icon: "jake-78x78.jpg",
                spriteSheet: "jake_%COLOR%.json",
                brand: "aventure-time.png"
            },
            fourarms: {
                id: "fourarms",
                name: "STR_CHAR_FOUR_ARMS",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .2,
                speed: .3,
                profile: "four_arms.png",
                icon: "fourarms-78x78.jpg",
                spriteSheet: "fourarms_%COLOR%.json",
                brand: "ben10logo.png",
                offsetBreadCrumb: {
                    y: -50
                }
            },
            rigby: {
                id: "rigby",
                name: "STR_CHAR_RIGBY",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .2,
                power: .2,
                speed: .4,
                profile: "rigby.png",
                icon: "rigby-78x78.jpg",
                spriteSheet: "rigby_%COLOR%.json",
                brand: "regular-show.png"
            },
            marceline: {
                id: "marceline",
                name: "STR_CHAR_MARCELLINE",
                available: !0,
                isCaptain: !1,
                scale: 1,
                skill: .3,
                power: .4,
                speed: .2,
                profile: "marceline.png",
                icon: "marceline-78x78.jpg",
                spriteSheet: "marceline_%COLOR%.json",
                brand: "aventure-time.png"
            },
            ice_bear: {
                id: "ice_bear",
                name: "STR_CHAR_ICE_BEAR",
                available: !0,
                isCaptain: !1,
                scale: 1.1,
                skill: .5,
                power: .3,
                speed: .2,
                profile: "ice_bear.png",
                icon: "ice-bear-78x78.jpg",
                spriteSheet: "ice-bear_%COLOR%.json",
                brand: "we-bare-bears.png"
            },
            mojo: {
                id: "mojo",
                name: "STR_CHAR_MOJO",
                available: !0,
                isCaptain: !0,
                scale: .8,
                skill: .5,
                power: .4,
                speed: .3,
                profile: "mojo.png",
                icon: "mojo-78x78.jpg",
                offsetPlayerCard: {
                    x: 100
                },
                offsetBreadCrumb: {
                    x: 50,
                    y: -50
                },
                offsetReview: {
                    x: 80
                },
                "super": "super_shot_mojo_red.png",
                spriteSheet: "mojo_%COLOR%.json",
                brand: "powerpuff-girl.png"
            },
            moredecai: {
                id: "moredecai",
                name: "STR_CHAR_MORDECAI",
                available: !0,
                isCaptain: !1,
                scale: .9,
                skill: .3,
                power: .2,
                speed: .4,
                profile: "moredecai.png",
                icon: "moredecai-78x78.jpg",
                spriteSheet: "moredecai_%COLOR%.json",
                brand: "regular-show.png"
            },
            panda_bear: {
                id: "panda_bear",
                name: "STR_CHAR_PANDA",
                available: !0,
                isCaptain: !0,
                scale: 1.1,
                skill: .4,
                power: .4,
                speed: .2,
                profile: "panda.png",
                icon: "panda-bear-78x78.jpg",
                "super": "super_shot_panda_red.png",
                spriteSheet: "panda_%COLOR%.json",
                brand: "we-bare-bears.png"
            },
            princess_bubblegum: {
                id: "princess_bubblegum",
                name: "STR_CHAR_BUBBLEGUM",
                available: !0,
                isCaptain: !0,
                scale: 1,
                skill: .5,
                power: .2,
                speed: .4,
                profile: "princess-bubblegum.png",
                icon: "princess-bubblegum-78x78.jpg",
                "super": "super_shot_princess_red.png",
                spriteSheet: "princess_%COLOR%.json",
                brand: "aventure-time.png"
            },
            richard: {
                id: "richard",
                name: "STR_CHAR_RICHARD",
                available: !0,
                isCaptain: !1,
                scale: 1.3,
                skill: .2,
                power: .5,
                speed: .1,
                profile: "richard.png",
                icon: "richard-78x78.jpg",
                spriteSheet: "richard_%COLOR%.json",
                brand: "gumble.png"
            }
        },
            n = !1;
        t.exports = {
            CharacterData: i,
            getCaptains: function () {
                var t = [];
                for (var e in i) i[e].isCaptain && t.push(i[e]);
                return t
            },
            getPlayers: function () {
                var t = [];
                for (var e in i) i[e].isCaptain || t.push(i[e]);
                return t
            },
            translateCharacterNames: function (t) {
                if (!n) {
                    for (var e in i) {
                        var r = i[e],
                            o = r.name,
                            s = t[o];
                        s && (r.name = s)
                    }
                    n = !0
                }
            }
        }
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = function (t, e) {
                    r.Graphics.call(this), this.beginFill(16777215).drawRect(0, 0, 100, 100), this.resize(t, e), this.alpha = 0
                };
            o.prototype = Object.create(r.Graphics.prototype), o.prototype.flash = function (t, e) {
                this.alpha = 1, TweenLite.to(this, e || .5, {
                    alpha: 0,
                    delay: t || 0,
                    ease: Expo.easeOut
                })
            }, o.prototype.resize = function (t, e) {
                this.scale.x = t / 100, this.scale.y = t / 100
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(53),
                s = i(24);
            PixiParty = function (t, e, i) {
                r.Container.call(this), this.particals = [], this.particalPool = new o(ParticalTickerTape), this.max = r.isWebGL ? 150 : 5, this.overallScale = i || 1, s.instance.isMobile && (this.max = r.isWebGL ? 60 : 10), this.count = 0, this.pos = 0;
                for (var n = 0; n < this.max; n++) {
                    var a = this.particalPool.getObject();
                    a.home.x = Math.random() * -1136, a.position.y = a.home.y = 110640 * Math.random(), a.speed = new r.Point(Math.random() - .5, Math.random() + 2), this.particals.push(a), this.addChild(a)
                }
                this.w = t || 1136, this.h = e || 740, this.focalLength = 150
            }, PixiParty.prototype = Object.create(r.Container.prototype), PixiParty.prototype.update = function (t) {
                if (this.visible)
                    for (var e = 0; e < this.particals.length; e++) {
                        var i = this.particals[e],
                            n = this.focalLength / (this.focalLength + i.z),
                            n = this.focalLength / (this.focalLength + i.z);
                        i.scale.x = i.scale.y = .2 * n * i.scaleOffset * this.overallScale, i.home.x += i.speed.x, i.home.y += i.speed.y, i.position.y = (i.home.y - t.y) * n * .5, i.position.x = (i.home.x - t.x) * n * .5, i.scale.y *= Math.sin(2 * i.rotation), i.position.x %= this.w, i.position.x < 0 && (i.position.x += this.w), i.position.y %= this.h, i.position.y < 0 && (i.position.y += this.h), i.rotation += i.rotationSpeed
                    }
            }, PixiParty.prototype.resize = function (t) { }, ParticalTickerTape = function (t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function () {
                    return t.toString()
                }, e
            }(function () {
                ParticalTicker.globalCount++, r.Sprite.call(this, r.Texture.fromFrame(ParticalTickerTape.frames[ParticalTicker.globalCount % 6])), this.anchor.x = .5, this.anchor.y = .5, this.scaleOffset = 1 + Math.random(), this.z = -50 + Math.random() * -50, this.rotation = Math.random() * Math.PI * 2, this.rotationSpeed = .3 * (Math.random() - .5), this.home = new r.Point
            }), ParticalTickerTape.globalCount = 0, ParticalTickerTape.frames = ["confetti_yellow.png", "confetti-blue.png", "confetti-red.png", "streamer-blue.png", "streamer-red.png", "streamer-yellow.png"], ParticalTickerTape.prototype = Object.create(r.Sprite.prototype), n.exports = PixiParty
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function (t) {
                this.classType = t, this.pool = []
            };
            n.constructor = n, n.prototype.prepopulate = function (t) {
                for (var e = 0; e < t; e++) this.pool.push(new this.classType)
            }, n.prototype.get = n.prototype.getObject = function () {
                var t = this.pool.pop();
                return t || (t = new this.classType), t
            }, n.prototype["return"] = n.prototype.returnObject = function (t) {
                this.pool.indexOf(t) !== -1 || this.pool.push(t)
            }, Object.defineProperties(n.prototype, {
                total: {
                    get: function () {
                        return this.pool.length
                    }
                },
                length: {
                    get: function () {
                        return this.pool.length
                    }
                }
            }), n.pools = [], n.idGenerator = 1, n.getPool = function (t) {
                return t._CLASS_ID || (t._CLASS_ID = n.idGenerator++, n.pools[t._CLASS_ID] = new n(t)), n.pools[t._CLASS_ID]
            }, n.get = n.getObject = function (t) {
                t._CLASS_ID || (t._CLASS_ID = n.idGenerator++, n.pools[t._CLASS_ID] = new n(t));
                var e = n.pools[t._CLASS_ID].getObject();
                return e._CLASS_ID = t._CLASS_ID, e
            }, n["return"] = n.returnObject = function (t) {
                n.pools[t._CLASS_ID].returnObject(t)
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            SlideTransition = function () {
                this.reverse = !1
            }, SlideTransition.constructor = SlideTransition, SlideTransition.prototype.begin = function (t, e, i) {
                this.screenManager = t, this.currentScreen = e, this.nextScreen = i, this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), TweenLite.to(this.currentScreen, .45, {
                    ease: Sine.easeInOut,
                    x: this.reverse ? -1224 : 1224
                }), this.onFadeout()) : this.onFadeout()
            }, SlideTransition.prototype.onFadeout = function () {
                this.nextScreen.onShow && this.nextScreen.onShow(), this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), this.nextScreen.position.x = this.reverse ? 1224 : -1224, TweenLite.to(this.nextScreen, .45, {
                    x: 0,
                    ease: Sine.easeInOut,
                    onComplete: this.onFadein.bind(this)
                }), this.screenManager.container.addChild(this.nextScreen)
            }, SlideTransition.prototype.onFadein = function () {
                this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.screenManager.container.removeChild(this.currentScreen)), this.nextScreen.onShown && this.nextScreen.onShown(), this.screenManager.onTransitionComplete()
            }, SlideTransition.prototype.resize = function (t, e) {
                this.w = t, this.h = e
            }, i.exports = SlideTransition
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(41),
                s = (i(38), i(56)),
                a = (i(59), i(49)),
                h = i(50),
                l = (h.CharacterData, i(24), i(34)),
                c = i(37),
                u = c.Translation,
                p = (i(60), i(61), function (t) {
                    r.Container.call(this), this.app = t, this.bg = new s, this.bg.onNextButton.add(this.onNextButtonPressed, this), this.bg.onPreviousButton.add(this.onPreviousButtonPressed, this), this.addChild(this.bg), this.sponsorButton = o.sponsor("sponsor-background.png", u.sponsor.url), this.sponsorButton.position.set(0, 200), this.bg.addChild(this.sponsorButton);
                    var e = r.Sprite.from(ASSET_URL + u.sponsor.path);
                    e.anchor.set(.5, .5), this.sponsorButton.addChild(e)
                });
            p.prototype = Object.create(r.Container.prototype), p.prototype.onPreviousButtonPressed = function () {
                a.isTournament ? this.screenManager.gotoScreenByID(l.SCREEN_ID.TOURNAMENT) : this.screenManager.gotoScreenByID(l.SCREEN_ID.TEAM_SELECT)
            }, p.prototype.onNextButtonPressed = function () {
                this.screenManager.gotoScreenByID(l.SCREEN_ID.GAME)
            }, p.prototype.onShow = function () {
                this.bg.scale.set(0), this.app.topMenu.setState("home"), TweenLite.to(this.bg.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: Elastic.easeOut,
                    delay: .2
                })
            }, p.prototype.onShown = function () { }, p.prototype.resize = function (t, e) {
                this.position.y = e / 2 - 372.5 - 40, this.bg.position.set(t / 2, 440)
            }, n.exports = p
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(32), i(41)),
                s = i(18),
                a = (i(38), i(57)),
                h = (i(34), i(37)),
                l = h.Translation,
                c = (i(49), i(16)),
                u = i(36),
                p = i(58),
                d = i(24);
            InstructionsBaseScreen = function (t) {
                r.Container.call(this),
                this.hasNextButton = t !== !1,
                this.mobile = !d.instance.desktop,
                this.bg = r.Sprite.from(URL_HEADER.IMAGE + "/ui/panel-player-select-and-tournament.png"),
                this.bg.anchor.set(.5, .5),
                this.addChild(this.bg),
                this.panelBg = r.Sprite.from(URL_HEADER.IMAGE + "ui/instructions-panel.png"),
                this.panelBg.anchor.set(.5, .5),
                this.panelBg.position.set(0, -40),
                this.bg.addChild(this.panelBg),
                this.title = new a.h1(l.instructions_screen.title),
                this.title.anchor.set(.5, 1),
                this.title.position.set(0, -this.bg.height / 2 - 25),
                this.addChild(this.title),
                this.onNextButton = new c,
                this.onPreviousButton = new c;
                var e = {
                    fill: "white",
                    fontSize: 16,
                    fontFamily: window.MAIN_FONT
                };
                if (this.movementLabel = new r.Text(l.instructions_screen.movement, e), this.movementLabel.anchor.set(.5), this.movementLabel.position.set(-275, -195), this.bg.addChild(this.movementLabel), this.tackleLabel = new r.Text(l.instructions_screen.tackle, e), this.tackleLabel.anchor.set(.5), this.tackleLabel.position.set(0, -195), this.tackleLabel.alpha = 0, this.bg.addChild(this.tackleLabel), TweenLite.to(this.tackleLabel, .5, {
                    alpha: 1,
                    ease: Linear.None,
                    delay: 2,
                    onCompleteScope: this,
                    onComplete: this.tackleAnimCompleted
                }), this.shortPassLabel = new r.Text(l.instructions_screen.shortPass, e), this.shortPassLabel.anchor.set(.5), this.shortPassLabel.position.set(0, -195), this.bg.addChild(this.shortPassLabel), TweenLite.to(this.shortPassLabel, .5, {
                    alpha: 0,
                    ease: Linear.None,
                    delay: 2
                }), this.specialShotLabel = new r.Text(l.instructions_screen.specialShot, e), this.specialShotLabel.anchor.set(.5), this.specialShotLabel.position.set(275, -195), this.bg.addChild(this.specialShotLabel), this.line = new r.Graphics, this.line.lineStyle(4, 16777215).moveTo(0, 0).lineTo(40, -140), this.line.x = -15, this.line.y = -10, this.addChild(this.line), this.movementKey = r.Sprite.fromFrame(this.mobile ? "touch-button-background.png" : "instructions-arrowkeys.png"), this.movementKey.anchor.set(.5, .5), this.movementKey.position.set(-285, 50), this.bg.addChild(this.movementKey), this.mobile) {
                    var i = r.Sprite.fromFrame("touch-button-movement.png");
                    i.anchor.set(.5), this.movementKey.icon = i, this.movementKey.addChild(i)
                }
                if (this.tackleKey = r.Sprite.fromFrame(this.mobile ? "touch-button-yellow.png" : "space-bar.png"), this.tackleKey.scale.set(.75), this.tackleKey.anchor.set(.5, .5), this.tackleKey.position.set(0, this.mobile ? 50 : 80), this.mobile) {
                    var i = r.Sprite.fromFrame("touch-icon-ball.png");
                    i.anchor.set(.5), this.tackleKey.addChild(i), this.tackleKey.y += 15
                }
                this.bg.addChild(this.tackleKey);
                var e = {
                    fill: "black",
                    fontSize: 20,
                    fontFamily: "lubalin",
                    align: "center"
                };
                if (this.specialShotKey = r.Sprite.fromFrame(this.mobile ? "touch-button-yellow.png" : "space-bar.png"), this.specialShotKey.scale.set(.75), this.specialShotKey.anchor.set(.5, .5), this.specialShotKey.position.set(285, this.mobile ? 50 : 80), this.bg.addChild(this.specialShotKey), this.mobile) {
                    this.specialShotKey.scale.set(.75);
                    var i = r.Sprite.fromFrame("touch-icon-ball.png");
                    i.anchor.set(.5), this.specialShotKey.addChild(i), this.specialShotKey.y += 15
                }
                var n = s.getJson("character-animation")["finn_blue.json"];
                this.movementAnim = new r.extras.MovieClip(u.getTexturesFromFrames(n.run)), this.movementAnim.anchor.set(.5, .5), this.movementAnim.scale.set(.6), this.movementAnim.position.set(-275, -100), this.movementAnim.animationSpeed = .3, this.movementAnim.play(), this.bg.addChild(this.movementAnim), this.tackleAnim = new r.extras.MovieClip(u.getTexturesFromFrames(n.tackle)), this.tackleAnim.anchor.set(.5, .5), this.tackleAnim.scale.set(.6), this.tackleAnim.position.set(-55, -100), this.tackleAnim.animationSpeed = .3, this.tackleAnim.play(), this.tackleAnim.alpha = 0, this.bg.addChild(this.tackleAnim), TweenLite.to(this.tackleAnim, .5, {
                    alpha: 1,
                    ease: Linear.None,
                    delay: 2
                }), this.shortPassAnim = new r.extras.MovieClip(u.getTexturesFromFrames(n.kickCharge)), this.shortPassAnim.anchor.set(.5, .5), this.shortPassAnim.scale.set(.6), this.shortPassAnim.position.set(55, -100), this.shortPassAnim.animationSpeed = .3, this.shortPassAnim.alpha = 0, this.shortPassAnim.play(), this.bg.addChild(this.shortPassAnim), TweenLite.to(this.shortPassAnim, .5, {
                    alpha: 1,
                    ease: Linear.None,
                    delay: 2
                }), this.specialShotAnim = new r.extras.MovieClip(u.getTexturesFromFrames(n.kickCharge)), this.specialShotAnim.anchor.set(.5, .5), this.specialShotAnim.scale.set(.6), this.specialShotAnim.position.set(275, -100), this.specialShotAnim.animationSpeed = .3, this.specialShotAnim.loop = !1, this.specialShotAnim.play(), this.bg.addChild(this.specialShotAnim), this.previousButton = o.big("icon-back.png"), this.previousButton.position.set(-370, 200), this.previousButton.onPress.add(this.onPreviousButtonPressed, this), this.bg.addChild(this.previousButton), this.nextButton = o.big("icon-back.png"), this.nextButton.position.set(380, 200), this.nextButton.icon.rotation = Math.PI, this.nextButton.onPress.add(this.onNextButtonPressed, this), this.hasNextButton && this.bg.addChild(this.nextButton), this.chargeBar = new p, this.ratio = 0, this.chargeBar.setSize(1), this.bg.addChild(this.chargeBar), this.chargeBar.show(), this.chargeBar.position.set(280, -10), this.count = 0, this.step = 0, this.tick = 0, this.specialShotAnim.gotoAndStop(1)
            }, InstructionsBaseScreen.prototype = Object.create(r.Container.prototype), InstructionsBaseScreen.prototype.updateTransform = function () {
                this.containerUpdateTransform(), this.mobile && (this.tick += .1, this.movementKey.icon.position.x = 20 * Math.sin(this.tick)), 0 === this.step ? (this.ratio += .01, this.chargeBar.setRatio(this.ratio), this.specialShotKey.texture = r.Texture.fromFrame(this.mobile ? "touch-button-yellow-on.png" : "space-bar-hover.png"), this.mobile && this.specialShotKey.scale.set(.75 * .95), this.ratio > .75 && (this.step = 1, this.count = 0, this.specialShotAnim.play(), this.specialShotKey.texture = r.Texture.fromFrame(this.mobile ? "touch-button-yellow.png" : "space-bar.png"), this.mobile && this.specialShotKey.scale.set(.75))) : 1 === this.step && (this.count++, this.count > 30 && (this.step = 0, this.ratio = 0, this.specialShotAnim.gotoAndStop(1)))
            }, InstructionsBaseScreen.prototype.tackleAnimCompleted = function () {
                return
            }, InstructionsBaseScreen.prototype.onPreviousButtonPressed = function () {
                this.onPreviousButton.dispatch()
            }, InstructionsBaseScreen.prototype.onNextButtonPressed = function () {
                this.onNextButton.dispatch()
            }, n.exports = InstructionsBaseScreen
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";
        var n = i(8);
        t.exports = {
            h1: function (t) {
                var e = new n.Text(t, {
                    fill: "white",
                    fontSize: 36,
                    fontFamily: window.MAIN_FONT,
                    stroke: !0,
                    strokeThickness: 8,
                    lineJoin: "round"
                });
                return e
            },
            h2: function (t) {
                var e = new n.Text(t, {
                    fill: "white",
                    fontSize: 30,
                    fontFamily: window.MAIN_FONT,
                    stroke: !0,
                    strokeThickness: 8,
                    lineJoin: "round"
                });
                return e
            },
            h3: function (t) {
                var e = new n.Text(t, {
                    fill: "white",
                    align: "center",
                    fontSize: 26,
                    fontFamily: window.MAIN_FONT,
                    stroke: !0,
                    strokeThickness: 8,
                    lineJoin: "round"
                });
                return e
            }
        }
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = function () {
                    r.Container.call(this), this.bg = (new r.Graphics).beginFill(16777215).drawRect(0, -10, 100, 20), this.bar = (new r.Graphics).beginFill(16711680).drawRect(0, -10, 100, 20), this.sweetSpot = (new r.Graphics).beginFill(255).drawRect(0, -10, 15, 20), this.bg2 = new r.Sprite.from("shoot_charge_bg.png"), this.bar2 = new r.Sprite.from("shoot_charge_fill.png"), this.frame = new r.Sprite.from("shoot_charge_frame.png"), this.bar2.alpha = .5, this.addChild(this.bg2), this.addChild(this.bar2), this.addChild(this.frame), this.sweetSpot.position.x = 75, this.min = 0, this.max = 0, this.hidden = !0, this.scale.y = 0, this.visible = !1;
                    var t = (new r.Graphics).beginFill(16711680).moveTo(5, 7).lineTo(146, 3).lineTo(141, 38).lineTo(3, 33);
                    this.addChild(t), this.bar2.mask = t, this.setRatio(0), this.pivot.y = 21, this.pivot.x = 75, this.setSize(2)
                };
            o.prototype = Object.create(r.Container.prototype), o.prototype.setRatio = function (t) {
                this.bar.scale.x = t, this.bar2.anchor.x = 1 - t
            }, o.prototype.setSize = function (t) {
                0 === t ? (this.bg2.texture = r.Texture.from("shoot_charge_bg_small.png"), this.min = 91 / 143, this.max = 107 / 143) : 1 === t ? (this.bg2.texture = r.Texture.from("shoot_charge_bg.png"), this.min = 96 / 143, this.max = 118 / 143) : 2 === t && (this.bg2.texture = r.Texture.from("shoot_charge_bg_large.png"), this.min = 77 / 143, this.max = 118 / 143)
            }, o.prototype.show = function () {
                this.hidden && (this.hidden = !1, this.visible = !0, this.rotation = Math.random(), TweenLite.to(this.scale, .3, {
                    y: 1,
                    ease: Back.easeOut
                }), TweenLite.to(this, .5, {
                    rotation: 0,
                    ease: Elastic.easeOut
                }))
            }, o.prototype.hide = function () {
                this.hidden || (this.hidden = !0, TweenLite.to(this.scale, .3, {
                    y: 0,
                    ease: Back.easeIn,
                    onComplete: this.onHidden,
                    onCompleteScope: this
                }))
            }, o.prototype.onHidden = function () {
                this.visible = !1
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = function (t) {
                    r.Container.call(this), this.id = t, ie = {
                        id: 4,
                        name: "United Kingdom",
                        total_wins: "5",
                        total_loses: "0",
                        total_points: "16",
                        goal_difference: "15"
                    };
                    var e = {
                        fill: "white",
                        fontSize: 20,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round",
                        dropShadow: !1
                    },
                        i = 25,
                        n = 110;
                    this.labelRank = new r.Text("", e), this.labelRank.anchor.set(0, 0), this.addChild(this.labelRank), this.labelName = new r.Text("", e), this.labelName.position.set(i, 0), this.addChild(this.labelName), i += 315, this.labelPoints = new r.Text("", e), this.labelPoints.anchor.set(0, 0), this.labelPoints.position.set(i, 0), this.addChild(this.labelPoints), i += n, this.labelWins = new r.Text("", e), this.labelWins.anchor.set(0, 0), this.labelWins.position.set(i, 0), this.addChild(this.labelWins), i += n, this.labelLoses = new r.Text("", e), this.labelLoses.anchor.set(0, 0), this.labelLoses.position.set(i, 0), this.addChild(this.labelLoses), i += n, this.labelGoalDiff = new r.Text("", e), this.labelGoalDiff.anchor.set(0, 0), this.labelGoalDiff.position.set(i, 0), this.addChild(this.labelGoalDiff)
                };
            o.prototype = Object.create(r.Container.prototype), o.prototype.setData = function (t) {
                this.data = t, this.labelRank.text = this.data.rank, this.labelName.text = this.data.name, this.labelPoints.text = this.data.goal_diff_v_wins_100, this.labelWins.text = this.data.total_wins, this.labelLoses.text = this.data.total_loses, this.labelGoalDiff.text = this.data.goal_difference
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 60
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = {};
            n.shuffle = function (t) {
                for (var e, i, n = t.length; 0 !== n;) i = Math.floor(Math.random() * n), n -= 1, e = t[n], t[n] = t[i], t[i] = e;
                return t
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n = (i(62), i(63)),
            r = function () {
                this.targetFile = "./", this.sharedKey = null, this.lastEncryption = !1, this.defaultPerPage = 20, this.defaultPageNumber = 1, this.cachedResult = null
            };
        r.prototype.setSharedKey = function (t) {
            this.sharedKey = t
        }, r.prototype.getScores = function (t, e) {
            // var i = this.getRequest();
            // this.cachedResult && e ? t && t(this.cachedResult) : (i.onload = function(e) {
            //     this.cachedResult = JSON.parse(i.response).sort(function(t, e) {
            //         return e.goal_diff_v_wins_100 - t.goal_diff_v_wins_100
            //     }), t && t(this.cachedResult)
            // }.bind(this), i.onreadystatechange = function(t) {}, i.open("GET", this.targetFile + "getScores", !0), i.send())
        }, r.prototype.sendScore = function (t, e, i) {
            var r = this.getRequest();
            r.onload = function (t) {
                i && i(JSON.parse(r.response))
            }.bind(this), r.onreadystatechange = function (t) { };
            var o = {
                id: t,
                gd: e
            },
                s = n.Ctr.encrypt(JSON.stringify(o), "S0Bwt275r192B1rPOokA8hu3EWoUHzNsFaYypUyU0BE", 256);
            r.open("POST", this.targetFile + "scrsvc", !0), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send("val=" + s)
        }, r.prototype.getRequest = function () {
            var t;
            return window.XDomainRequest && this.crossdomain ? (t = new window.XDomainRequest, t.timeout = 3e3, t.onerror = function () { }, t.ontimeout = function () { }, t.onprogress = function () { }) : window.XMLHttpRequest && (t = new window.XMLHttpRequest), t
        }, t.exports = new r
    },
    function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        ! function (t) {
            __WEBPACK_AMD_DEFINE_FACTORY__ = t, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }(function () {
            var win = window,
                limit = null,
                requests = 0,
                request_stack = [],
                getXHR = function () {
                    return win.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                },
                version2 = "" === getXHR().responseType,
                qwest = function (method, url, data, options, before) {
                    data = data || null, options = options || {};
                    var typeSupported = !1,
                        xhr = getXHR(),
                        async = void 0 === options.async || !!options.async,
                        cache = options.cache,
                        type = options.type ? options.type.toLowerCase() : "json",
                        user = options.user || "",
                        password = options.password || "",
                        headers = {
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        accepts = {
                            xml: "application/xml, text/xml",
                            html: "text/html",
                            json: "application/json, text/javascript",
                            js: "application/javascript, text/javascript"
                        },
                        toUpper = function (t, e, i) {
                            return e + i.toUpperCase()
                        },
                        vars = "",
                        i, j, parseError = "parseError",
                        serialized, success_stack = [],
                        error_stack = [],
                        complete_stack = [],
                        response, success, error, func, promises = {
                            success: function (t) {
                                return async ? success_stack.push(t) : success && t.apply(xhr, [response]), promises
                            },
                            error: function (t) {
                                return async ? error_stack.push(t) : error && t.apply(xhr, [response]), promises
                            },
                            complete: function (t) {
                                return async ? complete_stack.push(t) : t.apply(xhr), promises
                            }
                        },
                        promises_limit = {
                            success: function (t) {
                                return request_stack[request_stack.length - 1].success.push(t), promises_limit
                            },
                            error: function (t) {
                                return request_stack[request_stack.length - 1].error.push(t), promises_limit
                            },
                            complete: function (t) {
                                return request_stack[request_stack.length - 1].complete.push(t), promises_limit
                            }
                        },
                        handleResponse = function () {
                            var i, req, p;
                            if (--requests, request_stack.length) {
                                for (req = request_stack.shift(), p = qwest(req.method, req.url, req.data, req.options, req.before), i = 0; func = req.success[i]; ++i) p.success(func);
                                for (i = 0; func = req.error[i]; ++i) p.error(func);
                                for (i = 0; func = req.complete[i]; ++i) p.complete(func)
                            }
                            try {
                                if (!/^2/.test(xhr.status)) throw xhr.status + " (" + xhr.statusText + ")";
                                var responseText = "responseText",
                                    responseXML = "responseXML";
                                if (typeSupported && void 0 !== xhr.response) response = xhr.response;
                                else switch (type) {
                                    case "json":
                                        try {
                                            response = win.JSON ? win.JSON.parse(xhr[responseText]) : eval("(" + xhr[responseText] + ")")
                                        } catch (e) {
                                            throw "Error while parsing JSON body"
                                        }
                                        break;
                                    case "js":
                                        response = eval(xhr[responseText]);
                                        break;
                                    case "xml":
                                        if (!xhr[responseXML] || xhr[responseXML][parseError] && xhr[responseXML][parseError].errorCode && xhr[responseXML][parseError].reason) throw "Error while parsing XML body";
                                        response = xhr[responseXML];
                                        break;
                                    default:
                                        response = xhr[responseText]
                                }
                                if (success = !0, async)
                                    for (i = 0; func = success_stack[i]; ++i) func.apply(xhr, [response])
                            } catch (e) {
                                if (error = !0, response = "Request to '" + url + "' aborted: " + e, async)
                                    for (i = 0; func = error_stack[i]; ++i) func.apply(xhr, [response])
                            }
                            if (async)
                                for (i = 0; func = complete_stack[i]; ++i) func.apply(xhr)
                        };
                    if (limit && requests == limit) return request_stack.push({
                        method: method,
                        url: url,
                        data: data,
                        options: options,
                        before: before,
                        success: [],
                        error: [],
                        complete: []
                    }), promises_limit;
                    if (++requests, win.ArrayBuffer && (data instanceof ArrayBuffer || data instanceof Blob || data instanceof Document || data instanceof FormData)) "GET" == method && (data = null);
                    else {
                        var values = [],
                            enc = encodeURIComponent;
                        for (i in data) void 0 !== data[i] && values.push(enc(i) + (data[i].pop ? "[]" : "") + "=" + enc(data[i]));
                        data = values.join("&"), serialized = !0
                    } if ("GET" == method && (vars += data), null == cache && (cache = "POST" == method), cache || (vars && (vars += "&"), vars += "__t=" + Date.now()), vars && (url += (/\?/.test(url) ? "&" : "?") + vars), xhr.open(method, url, async, user, password), type && version2) try {
                        xhr.responseType = type, typeSupported = xhr.responseType == type
                    } catch (e) { }
                    version2 ? xhr.onload = handleResponse : xhr.onreadystatechange = function () {
                        4 == xhr.readyState && handleResponse()
                    };
                    for (i in headers) j = i.replace(/(^|-)([^-])/g, toUpper), headers[j] = headers[i], delete headers[i], xhr.setRequestHeader(j, headers[j]);
                    return !headers["Content-Type"] && serialized && "POST" == method && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), headers.Accept || xhr.setRequestHeader("Accept", accepts[type]), before && before.apply(xhr), xhr.send("POST" == method ? data : null), promises
                };
            return {
                get: function (t, e, i, n) {
                    return qwest("GET", t, e, i, n)
                },
                post: function (t, e, i, n) {
                    return qwest("POST", t, e, i, n)
                },
                xhr2: version2,
                limit: function (t) {
                    limit = t
                }
            }
        }())
    },
    function (t, e) {
        var i = {};
        i.cipher = function (t, e) {
            for (var n = 4, r = e.length / n - 1, o = [
                [],
                [],
                [],
                []
            ], s = 0; s < 4 * n; s++) o[s % 4][Math.floor(s / 4)] = t[s];
            o = i.addRoundKey(o, e, 0, n);
            for (var a = 1; a < r; a++) o = i.subBytes(o, n), o = i.shiftRows(o, n), o = i.mixColumns(o, n), o = i.addRoundKey(o, e, a, n);
            o = i.subBytes(o, n), o = i.shiftRows(o, n), o = i.addRoundKey(o, e, r, n);
            for (var h = new Array(4 * n), s = 0; s < 4 * n; s++) h[s] = o[s % 4][Math.floor(s / 4)];
            return h
        }, i.keyExpansion = function (t) {
            for (var e = 4, n = t.length / 4, r = n + 6, o = new Array(e * (r + 1)), s = new Array(4), a = 0; a < n; a++) {
                var h = [t[4 * a], t[4 * a + 1], t[4 * a + 2], t[4 * a + 3]];
                o[a] = h
            }
            for (var a = n; a < e * (r + 1) ; a++) {
                o[a] = new Array(4);
                for (var l = 0; l < 4; l++) s[l] = o[a - 1][l];
                if (a % n == 0) {
                    s = i.subWord(i.rotWord(s));
                    for (var l = 0; l < 4; l++) s[l] ^= i.rCon[a / n][l]
                } else n > 6 && a % n == 4 && (s = i.subWord(s));
                for (var l = 0; l < 4; l++) o[a][l] = o[a - n][l] ^ s[l]
            }
            return o
        }, i.subBytes = function (t, e) {
            for (var n = 0; n < 4; n++)
                for (var r = 0; r < e; r++) t[n][r] = i.sBox[t[n][r]];
            return t
        }, i.shiftRows = function (t, e) {
            for (var i = new Array(4), n = 1; n < 4; n++) {
                for (var r = 0; r < 4; r++) i[r] = t[n][(r + n) % e];
                for (var r = 0; r < 4; r++) t[n][r] = i[r]
            }
            return t
        }, i.mixColumns = function (t, e) {
            for (var i = 0; i < 4; i++) {
                for (var n = new Array(4), r = new Array(4), o = 0; o < 4; o++) n[o] = t[o][i], r[o] = 128 & t[o][i] ? t[o][i] << 1 ^ 283 : t[o][i] << 1;
                t[0][i] = r[0] ^ n[1] ^ r[1] ^ n[2] ^ n[3], t[1][i] = n[0] ^ r[1] ^ n[2] ^ r[2] ^ n[3], t[2][i] = n[0] ^ n[1] ^ r[2] ^ n[3] ^ r[3], t[3][i] = n[0] ^ r[0] ^ n[1] ^ n[2] ^ r[3]
            }
            return t
        }, i.addRoundKey = function (t, e, i, n) {
            for (var r = 0; r < 4; r++)
                for (var o = 0; o < n; o++) t[r][o] ^= e[4 * i + o][r];
            return t
        }, i.subWord = function (t) {
            for (var e = 0; e < 4; e++) t[e] = i.sBox[t[e]];
            return t
        }, i.rotWord = function (t) {
            for (var e = t[0], i = 0; i < 3; i++) t[i] = t[i + 1];
            return t[3] = e, t
        }, i.sBox = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], i.rCon = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [2, 0, 0, 0],
            [4, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
            [32, 0, 0, 0],
            [64, 0, 0, 0],
            [128, 0, 0, 0],
            [27, 0, 0, 0],
            [54, 0, 0, 0]
        ], i.Ctr = {}, i.Ctr.encrypt = function (t, e, o) {
            var s = 16;
            if (128 != o && 192 != o && 256 != o) return "";
            t = r.encode(t), e = r.encode(e);
            for (var a = o / 8, h = new Array(a), l = 0; l < a; l++) h[l] = isNaN(e.charCodeAt(l)) ? 0 : e.charCodeAt(l);
            var c = i.cipher(h, i.keyExpansion(h));
            c = c.concat(c.slice(0, a - 16));
            for (var u = new Array(s), p = (new Date).getTime(), d = p % 1e3, f = Math.floor(p / 1e3), m = Math.floor(65535 * Math.random()), l = 0; l < 2; l++) u[l] = d >>> 8 * l & 255;
            for (var l = 0; l < 2; l++) u[l + 2] = m >>> 8 * l & 255;
            for (var l = 0; l < 4; l++) u[l + 4] = f >>> 8 * l & 255;
            for (var g = "", l = 0; l < 8; l++) g += String.fromCharCode(u[l]);
            for (var v = i.keyExpansion(c), y = Math.ceil(t.length / s), _ = new Array(y), x = 0; x < y; x++) {
                for (var b = 0; b < 4; b++) u[15 - b] = x >>> 8 * b & 255;
                for (var b = 0; b < 4; b++) u[15 - b - 4] = x / 4294967296 >>> 8 * b;
                for (var w = i.cipher(u, v), S = x < y - 1 ? s : (t.length - 1) % s + 1, T = new Array(S), l = 0; l < S; l++) T[l] = w[l] ^ t.charCodeAt(x * s + l), T[l] = String.fromCharCode(T[l]);
                _[x] = T.join("")
            }
            var M = g + _.join("");
            return M = n.encode(M)
        }, i.Ctr.decrypt = function (t, e, o) {
            var s = 16;
            if (128 != o && 192 != o && 256 != o) return "";
            t = n.decode(t), e = r.encode(e);
            for (var a = o / 8, h = new Array(a), l = 0; l < a; l++) h[l] = isNaN(e.charCodeAt(l)) ? 0 : e.charCodeAt(l);
            var c = i.cipher(h, i.keyExpansion(h));
            c = c.concat(c.slice(0, a - 16));
            var u = new Array(8);
            ctrTxt = t.slice(0, 8);
            for (var l = 0; l < 8; l++) u[l] = ctrTxt.charCodeAt(l);
            for (var p = i.keyExpansion(c), d = Math.ceil((t.length - 8) / s), f = new Array(d), m = 0; m < d; m++) f[m] = t.slice(8 + m * s, 8 + m * s + s);
            t = f;
            for (var g = new Array(t.length), m = 0; m < d; m++) {
                for (var v = 0; v < 4; v++) u[15 - v] = m >>> 8 * v & 255;
                for (var v = 0; v < 4; v++) u[15 - v - 4] = (m + 1) / 4294967296 - 1 >>> 8 * v & 255;
                for (var y = i.cipher(u, p), _ = new Array(t[m].length), l = 0; l < t[m].length; l++) _[l] = y[l] ^ t[m].charCodeAt(l), _[l] = String.fromCharCode(_[l]);
                g[m] = _.join("")
            }
            var x = g.join("");
            return x = r.decode(x)
        };
        var n = {};
        n.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n.encode = function (t, e) {
            e = "undefined" != typeof e && e;
            var i, r, o, s, a, h, l, c, u, p, d, f = [],
                m = "",
                g = n.code;
            if (p = e ? t.encodeUTF8() : t, u = p.length % 3, u > 0)
                for (; u++ < 3;) m += "=", p += "\0";
            for (u = 0; u < p.length; u += 3) i = p.charCodeAt(u), r = p.charCodeAt(u + 1), o = p.charCodeAt(u + 2), s = i << 16 | r << 8 | o, a = s >> 18 & 63, h = s >> 12 & 63, l = s >> 6 & 63, c = 63 & s, f[u / 3] = g.charAt(a) + g.charAt(h) + g.charAt(l) + g.charAt(c);
            return d = f.join(""), d = d.slice(0, d.length - m.length) + m
        }, n.decode = function (t, e) {
            e = "undefined" != typeof e && e;
            var i, r, o, s, a, h, l, c, u, p, d = [],
                f = n.code;
            p = e ? t.decodeUTF8() : t;
            for (var m = 0; m < p.length; m += 4) s = f.indexOf(p.charAt(m)), a = f.indexOf(p.charAt(m + 1)), h = f.indexOf(p.charAt(m + 2)), l = f.indexOf(p.charAt(m + 3)), c = s << 18 | a << 12 | h << 6 | l, i = c >>> 16 & 255, r = c >>> 8 & 255, o = 255 & c, d[m / 4] = String.fromCharCode(i, r, o), 64 == l && (d[m / 4] = String.fromCharCode(i, r)), 64 == h && (d[m / 4] = String.fromCharCode(i));
            return u = d.join(""), e ? u.decodeUTF8() : u
        };
        var r = {};
        r.encode = function (t) {
            var e = t.replace(/[\u0080-\u07ff]/g, function (t) {
                var e = t.charCodeAt(0);
                return String.fromCharCode(192 | e >> 6, 128 | 63 & e)
            });
            return e = e.replace(/[\u0800-\uffff]/g, function (t) {
                var e = t.charCodeAt(0);
                return String.fromCharCode(224 | e >> 12, 128 | e >> 6 & 63, 128 | 63 & e)
            })
        }, r.decode = function (t) {
            var e = t.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (t) {
                var e = (15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2);
                return String.fromCharCode(e)
            });
            return e = e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (t) {
                var e = (31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1);
                return String.fromCharCode(e)
            })
        }, t.exports = i
    },
    countrySelectScreenFn,
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(16),
                s = function (t, e, i) {
                    r.Container.call(this), this.buttonList = t, this.maxSelected = e, this.autoLock = i === !0, this.onUpdate = new o, this.selectedList = [];
                    for (var n in this.buttonList) {
                        var s = this.buttonList[n];
                        s.selected && this.selectedList.length < e && this.selectedList.push(s), s.onSelected.add(this.updateButtons, this)
                    }
                };
            s.prototype = Object.create(r.Container.prototype), s.prototype.setLock = function (t) {
                for (var e in this.buttonList) {
                    var i = this.buttonList[e];
                    t === !1 && i.enabledInit === !0 ? i.enable() : i.selected === !1 && i.disable()
                }
            }, s.prototype.reset = function () {
                for (var t in this.buttonList) {
                    var e = this.buttonList[t];
                    e.selected === !0 && e._onDown()
                }
            }, s.prototype.updateButtons = function (t) {
                if (t.selected) {
                    if (this.selectedList.length >= this.maxSelected) {
                        var e = this.selectedList.shift();
                        e._onDown()
                    }
                    this.selectedList.push(t)
                } else {
                    var i = this.selectedList.indexOf(t);
                    i > -1 && this.selectedList.splice(i, 1)
                }
                this.autoLock && this.setLock(this.selectedList.length >= this.maxSelected), this.onUpdate.dispatch(this.selectedList.length >= this.maxSelected, t)
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(37),
                s = (o.Translation, i(41)),
                a = i(16),
                h = i(24),
                l = function (t, e) {
                    var i = this;
                    r.Container.call(this), this.data = "undefined" != typeof t ? t : {
                        name: "",
                        label: "",
                        ranking: ""
                    }, this.alpha = 0, this.onDown = new a, this.bg = r.Sprite.fromFrame("country-select-popup.png"), this.bg.anchor.set(.5, 0), this.addChild(this.bg), this.name = new r.Text(this.data.name.replace("\n", " "), {
                        fill: "white",
                        fontSize: 26,
                        fontFamily: window.MAIN_FONT,
                        align: "center",
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), this.name.anchor.set(.5, 0), this.name.position.y = 50, this.addChild(this.name), this.ranking = new r.Text(this.data.ranking, {
                        fill: "white",
                        fontSize: 26,
                        fontFamily: window.MAIN_FONT,
                        align: "right",
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), this.ranking.anchor.set(.5, 0), this.ranking.position.set(0, this.name.position.y + 50), this.addChild(this.ranking), h.instance.isMobile && (this.pickButton = new s.select, this.pickButton.position.x = this.bg.width / 2 - this.pickButton.width + 3, this.pickButton.position.y = this.bg.height - this.pickButton.height - 5, this.addChild(this.pickButton), this.pickButton.onDown.add(function () {
                        i.onDown.dispatch(i)
                    })), e === !0 && this.show(this.data)
                };
            l.prototype = Object.create(r.Container.prototype), l.prototype.show = function (t) {
                TweenLite.killTweensOf(this), this.data = t, this.name.scale.set(1), this.name.text = this.data.name.replace("\n", " ").replace("\n", " ");
                var e = .9 * this.bg.width / this.name.width;
                e = Math.min(1, e), this.name.scale.set(e), this.ranking.text = this.data.label + " - " + t.ranking, TweenLite.to(this, .1, {
                    alpha: 1,
                    ease: Linear.None
                })
            }, l.prototype.hide = function () {
                TweenLite.to(this, .1, {
                    alpha: 0,
                    ease: Linear.None
                })
            }, n.exports = l
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        e.__esModule = !0;
        var r = (i(8), function () {
            function t(e) {
                n(this, t), this.app = e
            }
            return t.prototype.begin = function (t, e, i) {
                var n = this;
                this.screenManager = t, this.currentScreen = e, this.nextScreen = i, this.currentScreen.interactiveChildren = !1, this.app.topMenu.interactiveChildren = !1, this.nextScreen.interactiveChildren = !1, this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), this.app.brand.center.scale.set(8), this.app.brand.logo.scale.x = -1, TweenLite.to(this.app.brand, .2, {
                    ease: Quad.easeOut,
                    alpha: 1
                }), TweenLite.to(this.app.brand.center.scale, .3, {
                    delay: 0,
                    x: 1,
                    y: 1,
                    ease: Quad.easeOut
                }), TweenLite.to(this.app.brand.bg, .3, {
                    delay: .1,
                    alpha: .4,
                    ease: Quad.easeOut
                }), TweenLite.to(this.app.brand.logo.scale, .3, {
                    delay: .2,
                    x: 1,
                    onComplete: function () {
                        setTimeout(function () {
                            n.onFadeout()
                        }, 350)
                    }
                }), this.nextScreen.position.x = 0) : this.onFadeout()
            }, t.prototype.onFadeout = function () {
                var t = this;
                this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), TweenLite.to(this.app.brand.bg, .7, {
                    alpha: 0,
                    ease: Quad.easeOut
                }), TweenLite.to(this.app.brand.center.scale, .7, {
                    ease: Quad.easeOut,
                    x: 10,
                    y: 10,
                    onComplete: function () {
                        t.onFadein()
                    }
                }), setTimeout(function () {
                    t.nextScreen.onShow && t.nextScreen.onShow(), t.screenManager.container.addChildAt(t.nextScreen, 0), t.screenManager.container.removeChild(t.currentScreen), t.currentScreen && t.currentScreen.onHidden && t.currentScreen.onHidden()
                }, 300), TweenLite.to(this.app.brand, .2, {
                    ease: Quad.easeOut,
                    delay: .65,
                    alpha: 0
                })
            }, t.prototype.onFadein = function () {
                this.nextScreen.onShown && this.nextScreen.onShown(), this.nextScreen.interactiveChildren = !0, this.currentScreen.interactiveChildren = !0, this.app.topMenu.interactiveChildren = !0, this.screenManager.onTransitionComplete()
            }, t.prototype.resize = function (t, e) {
                this.w = t, this.h = e
            }, t
        }());
        e["default"] = r, t.exports = e["default"]
    },
    captainSelectScreenFn,
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function h(t, e) {
            return t.depth - e.depth
        }
        e.__esModule = !0;
        var l = i(8),
            c = r(l),
            u = i(41),
            p = (n(u), i(65)),
            d = (n(p), i(38)),
            f = (n(d), i(70)),
            m = (n(f), i(49)),
            g = (n(m), i(24)),
            v = n(g),
            y = i(34),
            _ = n(y),
            x = (i(37), i(60)),
            b = (n(x), i(73)),
            w = n(b),
            S = i(74),
            T = n(S),
            M = i(50),
            E = i(57),
            A = n(E),
            C = i(67),
            L = n(C),
            R = i(75),
            P = n(R),
            O = i(32),
            I = n(O),
            D = i(76),
            B = function (t) {
                function e(i) {
                    o(this, e);
                    var n = s(this, t.call(this));
                    return n.app = i, n.trackpad = new D({
                        target: n
                    }), n.trackpad.snapTo = !0, n.trackpad.scrollMax = 1 / 0, n.trackpad.capMovement = !1, n.trackpad.size = 306, n.trackpad.maxSlots = 1 / 0, n.trackpad.spring.springiness = .08, n._onKeyDown = n.onKeyDown.bind(n), n.transition = new L["default"](n.app), n.title = A["default"].h1(""), n.title.anchor.set(.5, .5), n.addChild(n.title), n.playersContainer = new c.Container, n.addChild(n.playersContainer), n.playersData = [], n
                }
                return a(e, t), e.prototype.setPlayers = function (t) {
                    this.playersData = t, this.playerCardSelected = null, this.init()
                }, e.prototype.init = function () {
                    this.cards = [], this.offset = 0, this.numberOfCards = 6, this.pagination = new P["default"]({
                        itemLength: this.playersData.length,
                        currentItem: 0
                    }), this.addChild(this.pagination), this.slider = new w["default"]({
                        itemLength: this.playersData.length,
                        currentItem: 0
                    }), this.slider.prev.add(this.prev.bind(this)), this.slider.next.add(this.next.bind(this));
                    for (var t = 0; t < this.numberOfCards; t++) {
                        var e = new T["default"](this.app);
                        e.onDown.add(this.onItemDown, this, e), this.playersContainer.addChild(e), this.cards.push(e)
                    }
                    this.playersContainer.position.x = _["default"].PLAYER_CARD.WIDTH - 44, this.pcOffset = _["default"].PLAYER_CARD.OFFSET / 2 + _["default"].PLAYER_CARD.WIDTH / 2 + _["default"].PLAYER_CARD.WIDTH / 4 + 2.5
                }, e.prototype.updateTransform = function () {
                    t.prototype.updateTransform.call(this), this.trackpad.update();
                    for (var e = this.numberOfCards * _["default"].PLAYER_CARD.WIDTH, i = 0; i < this.numberOfCards; i++) {
                        this.cards[i].position.x = i * _["default"].PLAYER_CARD.WIDTH + this.trackpad.value + this.offset;
                        var n = Math.floor((this.cards[i].position.x + _["default"].PLAYER_CARD.WIDTH / 2) / e);
                        if (n *= this.numberOfCards, n *= -1, n += i, n != this.cards[i].id) {
                            this.cards[i].id = n;
                            var r = n % this.playersData.length;
                            r < 0 && (r += this.playersData.length), this.cards[i].update(this.playersData[r], r)
                        }
                        this.cards[i].position.x %= e, this.cards[i].position.x < 0 && (this.cards[i].position.x += e), this.cards[i].position.x -= _["default"].PLAYER_CARD.WIDTH, this.cards[i].position.x > 1336 && (this.cards[i].position.x += e), this.cards[i].position.x -= _["default"].PLAYER_CARD.WIDTH;
                        var o = 2 * ((this.cards[i].position.x + this.pcOffset) / 1136 - .5);
                        this.cards[i].z = o, this.cards[i].depth = 2 - Math.abs(o), this.cards[i].z < .1 && this.cards[i].z > -.1 && this.pagination.update((n - 3) % this.playersData.length), this.cards[i].scale.x = 1 - Math.sin(.2 * Math.abs(o)), this.cards[i].scale.y = 1 - Math.sin(.2 * Math.abs(o))
                    }
                    this.playersContainer.children.sort(h)
                }, e.prototype.onItemDown = function (t) {
                    var e = this;
                    if (!this.trackpad.didMove) {
                        var i = !1;
                        t.z < .1 && t.z > -.1 && (i = !0), this.slider.currentItem = this.slider.currentItem + (t.position.x / _["default"].PLAYER_CARD.WIDTH - 1);
                        var n = .2;
                        if (TweenLite.to(t.container.scale, n, {
                            x: .8,
                            y: .8,
                            ease: Expo.easeOut
                        }), TweenLite.to(t.container.scale, .8, {
                            x: 1,
                            y: 1,
                            delay: n,
                            ease: Elastic.easeOut
                        }), TweenLite.to(this, .3, {
                            offset: this.offset - (t.position.x / _["default"].PLAYER_CARD.WIDTH - 1) * _["default"].PLAYER_CARD.WIDTH,
                            onComplete: function () { }
                        }), i)
                            if (t.data.selected) {
                                I["default"].sfx.play("cantselect");
                                for (var r = 7, o = .1, s = 1; s < r; s++) {
                                    var a = s % 2 == 0 ? -1 : 1;
                                    TweenLite.to(t.container.position, o, {
                                        x: 50 * a,
                                        delay: o * s
                                    })
                                }
                                TweenLite.to(t.container.position, o, {
                                    x: 0,
                                    delay: o * r,
                                    onComplete: function () { }
                                })
                            } else I["default"].sfx.play("button_press"), this.selectPlayer(t), setTimeout(function () {
                                e.app.breadcrumb.currentItem.update(t.data, t.orange), e.app.breadcrumb.next()
                            }, 300), this.updateCharaterGameSession(t)
                    }
                }, e.prototype.selectPlayer = function (t) {
                    if (this.playerCardSelected) {
                        for (var e = 0; e < this.cards.length; e++) this.cards[e].unselect();
                        M.CharacterData[this.playerCardSelected.data.id].selected = !1
                    }
                    this.playerCardSelected = t, this.playerCardSelected.select(), M.CharacterData[this.playerCardSelected.data.id].selected = !0
                }, e.prototype.updateCharaterGameSession = function (t) { }, e.prototype.prev = function (t) {
                    TweenLite.to(this, .4, {
                        offset: -t * _["default"].PLAYER_CARD.WIDTH
                    })
                }, e.prototype.next = function (t) {
                    TweenLite.to(this, .4, {
                        offset: -t * _["default"].PLAYER_CARD.WIDTH
                    })
                }, e.prototype.beforeShow = function (t) {
                    this.slider.on();
                    for (var e = 0; e < this.cards.length; e++) this.cards[e].data && this.cards[e].data.selected && this.playerCardSelected !== this.cards[e] ? this.cards[e].select() : (this.cards[e].unselect(), this.cards[e].data && (this.cards[e].data.selected = !1))
                }, e.prototype.onShow = function () {
                    this.slider.on(), window.addEventListener("keydown", this._onKeyDown);
                    for (var t = void 0, e = void 0, i = 0; i < this.app.stage.children.length; i++) {
                        var n = this.app.stage.children[i];
                        "breabcrumb" === n.name && (t = n), "screenmanager" === n.name && (e = n)
                    }
                    for (var i = 0; i < this.cards.length; i++) this.cards[i].data && this.cards[i].data.selected, this.cards[i].checkHide = !0, this.cards[i].container.scale.set(0), TweenLite.to(this.cards[i].container.scale, 1, {
                        x: v["default"].instance.isMobile ? .9 : 1,
                        y: v["default"].instance.isMobile ? .9 : 1,
                        ease: Elastic.easeOut,
                        delay: .2
                    });
                    this.title.scale.set(0), TweenLite.to(this.title.scale, 1, {
                        x: 1,
                        y: 1,
                        ease: Elastic.easeOut,
                        delay: .2
                    }), this.app.stage.children[2] = e, this.app.stage.children[3] = t
                }, e.prototype.onKeyDown = function (t) {
                    if (32 === t.keyCode || 13 === t.keyCode)
                        for (var e = 0; e < this.cards.length; e++) 0 === this.cards[e].z && this.onItemDown(this.cards[e])
                }, e.prototype.onShown = function () { }, e.prototype.onHide = function () {
                    this.slider.off(), window.removeEventListener("keydown", this._onKeyDown)
                }, e.prototype.resize = function (t, e) {
                    this.pagination.position.x = t / 2 - this.pagination.width / 2, this.pagination.position.y = e - _["default"].BREADCRUMB.HEIGHT - 20, this.playersContainer.position.y = e / 2 - 20, this.title.position.y = _["default"].MARGIN.TITLE_TOP - 15, this.title.position.x = t / 2
                }, e
            }(c.Container);
        e["default"] = B, t.exports = e["default"]
    },
    //function index: 70
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(42),
                s = i(71),
                a = i(16),
                h = function () {
                    r.Container.call(this), this.data = null, this.onRemoved = new a, this.bg = r.Sprite.fromFrame("placeholder-player-circle.png"), this.bg.anchor.set(.5, .5), this.addChild(this.bg), this.profile = new r.Container, this.profile.item = null, this.addChild(this.profile);
                    var t = (new r.Graphics).beginFill(16711680).drawCircle(0, 0, 32).endFill();
                    this.addChild(t), this.profile.mask = t, this.removeButton = new o("close-player-selected.png"), this.removeButton.alpha = 0, this.removeButton.onPress.add(this.onRemoveButtonPressed, this), this.addChild(this.removeButton);
                    var e = new r.Point(10, 3),
                        i = new r.Point(74, 0);
                    this.skillBar = new s.skill, this.skillBar.position.set(i.x + e.x, i.y), this.addChild(this.skillBar), this.powerBar = new s.power, this.powerBar.position.set(i.x + e.x, i.y + e.y + this.skillBar.height + this.skillBar.y), this.addChild(this.powerBar), this.speedBar = new s.speed, this.speedBar.position.set(i.x + e.x, i.y + e.y + this.powerBar.height + this.powerBar.y), this.addChild(this.speedBar), this.bg.position.set(this.bg.width / 2, (this.speedBar.height + this.speedBar.y) / 2), this.profile.position.set(this.bg.position.x, this.bg.position.y), this.removeButton.position.set(this.bg.x + 15, this.bg.y + 30), t.position.set(this.bg.position.x, this.bg.position.y)
                };
            h.prototype = Object.create(r.Container.prototype), h.prototype.setData = function (t) {
                this.data = "undefined" != typeof t ? t : null, this.showData(this.data)
            }, h.prototype.showData = function (t) {
                "undefined" != typeof t && null !== t ? (this.setProfile(t.profile), this.skillBar.setData(2 * t.skill), this.powerBar.setData(2 * t.power), this.speedBar.setData(2 * t.speed)) : (this.setProfile(), this.skillBar.setData(), this.powerBar.setData(), this.speedBar.setData())
            }, h.prototype.setProfile = function (t) {
                var e = "undefined" != typeof t && null !== t;
                !e && this.profile.item && (TweenLite.killTweensOf(this.profile.item.scale), this.profile.removeChild(this.profile.item), this.profile.item = null), e && (this.profile.item ? this.profile.item.texture = r.Texture.fromFrame(t) : (this.profile.item = r.Sprite.fromFrame(t), this.profile.item.anchor.set(.5), this.profile.item.scale.set(0), this.profile.addChild(this.profile.item), TweenLite.to(this.profile.item.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: Elastic.easeOut,
                    delay: .2
                }))), TweenLite.to(this.removeButton, .25, {
                    alpha: e ? 1 : 0,
                    ease: Linear.None
                })
            }, h.prototype.onRemoveButtonPressed = function () {
                this.onRemoved.dispatch(this.data)
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(72)),
                o = {
                    skill: function (t) {
                        var e = new r("player-select-icons-skill.png", t ? t : null, "blue");
                        return e
                    },
                    power: function (t) {
                        var e = new r("player-select-icons-power.png", t ? t : null, "pink");
                        return e
                    },
                    speed: function (t) {
                        var e = new r("player-select-icons-speed.png", t ? t : null, "yellow");
                        return e
                    }
                };
            n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = function (t, e, i) {
                    r.Container.call(this), this.barW = 94, this.level = "undefined" != typeof e ? e : 0, this.color = "undefined" != typeof i ? i : "pink", this.bg = r.Sprite.fromFrame("player-card-bar-back.png"), this.bg.anchor.set(.5, .5), this.bg.position.set(this.bg.width / 2, this.bg.height / 2), this.addChild(this.bg);
                    var n = new r.Point(5, (this.bg.height - 10) / 2),
                        o = (new r.Graphics).beginFill(16777215).drawRect(0, 0, this.barW, 10).endFill();
                    o.position.set(this.bg.width + n.x, n.y), this.bar = r.Sprite.fromFrame("player-card-bar-fill-" + i + ".png"), this.addChild(this.bar);
                    for (var s = (new r.Graphics).beginFill(16777215), a = 0; a < 4; a++) s.drawRect(18 * (a + 1) + 1 * a, 0, 1, 10);
                    s.endFill(), s.position.set(o.x, o.y);
                    var h = new r.Sprite.from("player_stat_frame.png");
                    h.position.x = 32, h.position.y = 7
                };
            o.prototype = Object.create(r.Container.prototype), o.prototype.setData = function (t) {
                this.level = "undefined" != typeof t ? t : 0;
                var e = 50 * Math.abs(this.level - this.bar.scale.x) / this.barW;
                TweenLite.killTweensOf(this.bar.scale), TweenLite.to(this.bar.scale, e, {
                    x: this.level,
                    ease: Linear.easeIn,
                    delay: .2
                })
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        e.__esModule = !0;
        var o = i(16),
            s = n(o),
            a = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = e.currentItem,
                        n = void 0 === i ? 0 : i,
                        o = e.itemLength,
                        a = void 0 === o ? 0 : o;
                    r(this, t), this.lastCall = 0, this.currentItem = n, this.itemLength = a, this.mouseNormalized = {
                        x: 0,
                        y: 0
                    }, this._onKeyDown = this.onKeyDown.bind(this), this._onMouseMove = this.onMouseMove.bind(this), this._onMouseDown = this.onMouseDown.bind(this), this._onMouseUp = this.onMouseUp.bind(this), this._onMouseWheel = this.onMouseWheel.bind(this), this.prev = new s["default"], this.next = new s["default"], this.relaseItems = new s["default"],
                        this.translateItems = new s["default"], this.deltas = [0, 0, 0, 0, 0], this.off()
                }
                return t.prototype.on = function () {
                    window.addEventListener("keydown", this._onKeyDown), window.addEventListener("mousewheel", this._onMouseWheel)
                }, t.prototype.off = function () {
                    window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("mousewheel", this._onMouseWheel)
                }, t.prototype.onKeyDown = function (t) {
                    switch (t.keyCode) {
                        case 37:
                            this.onPrevious();
                            break;
                        case 39:
                            this.onNext()
                    }
                }, t.prototype.peak = function () {
                    return this.lock > 0 ? (this.lock--, !1) : this.deltas[0] < this.deltas[2] && this.deltas[1] < this.deltas[2] && this.deltas[3] > this.deltas[2] && this.deltas[4] > this.deltas[2]
                }, t.prototype.onMouseWheel = function (t) {
                    this.peak() && (this.lock = 15, t.deltaY > 0 ? this.onNext() : this.onPrevious()), this.deltas.shift(), this.deltas.push(Math.abs(t.deltaY)), t.preventDefault()
                }, t.prototype.onMouseDown = function (t) {
                    this.dragging = !0, this.distance = 0, this.start = {
                        x: t.clientX || t.touches[0].clientX,
                        y: t.clientY || t.touches[0].clientY
                    }, this.last = this.start
                }, t.prototype.onMouseUp = function (t) {
                    this.dragging = !1, Math.abs(this.distance) > .1 * window.innerWidth ? this.delta < 0 ? this.onNext() : this.onPrevious() : this.itemReleased(), this.distance = 0, this.start = {
                        x: 0,
                        y: 0
                    }
                }, t.prototype.onMouseMove = function (t) {
                    this.lastMouseMove = Date.now(), this.idle = !1;
                    var e = t.clientX || t.touches[0].clientX,
                        i = t.clientY || t.touches[0].clientY;
                    if (this.mouseNormalized.x = 2 * (e / window.innerWidth - .5), this.mouseNormalized.y = 2 * (i / window.innerHeight - .5), this.dragging) {
                        var n = {
                            x: e,
                            y: i
                        };
                        this.distance = n.x - this.start.x, this.delta = n.x - this.last.x > 0 ? 1 : -1, this.last = n, this.translateItems.dispatch(.2 * this.distance)
                    }
                }, t.prototype.itemReleased = function () {
                    this.distance = 0, this.start = {
                        x: 0,
                        y: 0
                    }, this.relaseItems.dispatch()
                }, t.prototype.onPrevious = function () {
                    this.currentItem--, this.prev.dispatch(this.currentItem)
                }, t.prototype.onNext = function () {
                    this.currentItem++, this.next.dispatch(this.currentItem)
                }, t
            }();
        e["default"] = a, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(8),
            l = r(h),
            c = i(41),
            u = (n(c), i(16)),
            p = n(u),
            d = i(71),
            f = n(d),
            m = i(34),
            g = n(m),
            v = i(24),
            y = n(v),
            _ = function (t) {
                function e(i, n) {
                    o(this, e);
                    var r = s(this, t.call(this)),
                        r = s(this, t.call(this));
                    r.app = i, window.playerCard = r, r.buttonMode = !0, r.container = new l.Container, r.centerCotainer = new l.Container, r.w = g["default"].PLAYER_CARD.WIDTH, r.h = g["default"].PLAYER_CARD.HEIGHT, r.padding = g["default"].PLAYER_CARD.PADDING, r.centerCotainer.position.x = -r.w / 2, r.centerCotainer.position.y = -r.h / 2, r.bw = new l.filters.ColorMatrixFilter, r.bw.blackAndWhite(), window.bw = r.bw, r.bw.padding = 0, r.bg = new l.Sprite.fromImage("player-card.png"), r.centerCotainer.addChild(r.bg), r.backgroundColored = new l.Sprite.fromImage("player-card-middle-1.png"), r.backgroundColored.position.x = r.padding, r.backgroundColored.position.y = 2 * r.padding, r.backgroundColored.width = r.bg.width - 2 * r.padding, r.centerCotainer.addChild(r.backgroundColored), r.topBG = new l.Sprite.fromImage("player-card-top.png"), r.topBG.position.x = r.padding, r.topBG.position.y = r.padding, r.topBG.width = r.bg.width - 2 * r.padding, r.centerCotainer.addChild(r.topBG), r.profile = new l.Sprite, r.profile.scale.set(.7), r._maskProfile = new l.Graphics, r._maskProfile.moveTo(0, 0), r._maskProfile.beginFill(16711680), r._maskProfile.lineStyle(.1, 16767232, 1), r._maskProfile.lineTo(0, 0), r._maskProfile.lineTo(r.topBG.width - 32, 0), r._maskProfile.lineTo(r.topBG.width - 32, r.topBG.height - 28 - 2), r._maskProfile.lineTo(0, r.topBG.height - 28 - 2), r._maskProfile.position.x = r.padding + 16, r._maskProfile.position.y = r.padding + 14.5, r._maskProfile.alpha = .5, r.centerCotainer.addChild(r._maskProfile), r.profile.mask = r._maskProfile, r.profile.position.y = 2 * r.padding + 14, r.centerCotainer.addChild(r.profile), r.profile.offset = {
                        x: 0,
                        y: 0
                    }, r.brand = new l.Sprite.fromImage("powerpuff-girl.png"), r.brand.anchor.y = 1, r.brand.position.x = 3 * r.padding, r.brand.position.y = r.topBG.height - r.padding, r.centerCotainer.addChild(r.brand), r.name = new l.Text("", {
                        fill: "white",
                        fontSize: 24,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), r.name.position.x = r.padding, r.name.position.y = r.bg.height - r.name.height - r.padding, r.centerCotainer.addChild(r.name), r.onDown = new p["default"], r.interactive = !0, r.check = new l.Sprite.from("select_tick.png"), y["default"].instance.isMobile || (r.check.filters = [r.bw]), r.check.interactive = !0, r.check.mouseover = function () {
                        TweenLite.to(this.check.scale, .5, {
                            x: 1.1,
                            y: 1.1,
                            ease: Elastic.easeOut
                        })
                    }.bind(r), r.check.mouseout = function () {
                        TweenLite.to(this.check.scale, .5, {
                            x: 1.03,
                            y: 1.03,
                            ease: Elastic.easeOut
                        })
                    }.bind(r), r.check.anchor.set(.5), r.check.position.x = r.bg.width / 2 - r.w / 2, r.check.position.y = r.bg.height / 2 - r.h / 2 + 90, r.checkHide = !0, r.mouseup = r.touchend = function () {
                        this.onDown.dispatch(this)
                    }.bind(r), r.mouseover = function () {
                        this.check.filters = [], TweenLite.to(this.container.scale, .5, {
                            x: 1.04,
                            y: 1.04,
                            ease: Elastic.easeOut
                        })
                    }.bind(r), r.mouseout = function () {
                        this.check.filters = [this.bw], TweenLite.to(this.container.scale, .5, {
                            x: 1,
                            y: 1,
                            ease: Elastic.easeOut
                        })
                    }.bind(r);
                    var a = r.padding + 53;
                    r.skillBar = new f["default"].skill, r.skillBar.position.set(a, r.topBG.height + 2 * r.padding + 4), r.centerCotainer.addChild(r.skillBar), r.powerBar = new f["default"].power, r.powerBar.position.set(a, r.skillBar.position.y + r.skillBar.height + r.padding + 8), r.centerCotainer.addChild(r.powerBar), r.speedBar = new f["default"].speed, r.speedBar.position.set(a, r.powerBar.position.y + r.powerBar.height + r.padding + 8), r.centerCotainer.addChild(r.speedBar), r.container.addChild(r.centerCotainer), r.addChild(r.container), r.reflexion = new l.Container;
                    var h = new l.Sprite.fromImage("player-card.png");
                    return r.reflexion.addChild(h), r.name2 = new l.Text("", {
                        fill: "white",
                        fontSize: 24,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), r.name2.position.x = r.padding, r.name2.position.y = r.bg.height - r.name2.height - r.padding, r.reflexion.addChild(r.name2), r.speedBar2 = new f["default"].speed, r.speedBar2.position.set(a, r.powerBar.position.y + r.powerBar.height + r.padding + 8), r.reflexion.addChild(r.speedBar2), r.reflexion.position.y = r.bg.height + r.bg.height, r.reflexion.scale.y = -1, r.centerCotainer.addChild(r.reflexion), r.reflexion.alpha = .2, r.container.addChild(r.check), r
                }
                return a(e, t), e.prototype.select = function () {
                    this.check.scale.set(1), this.centerCotainer.filters = [this.bw], this.check.filters = [this.bw]
                }, e.prototype.unselect = function () {
                    this.check.scale.set(0), this.centerCotainer.filters = [], y["default"].instance.isMobile && (this.check.filters = [])
                }, e.prototype.updateTransform = function () {
                    t.prototype.updateTransform.call(this), this.profile && (this.profile.position.x = this.w / 2 - this.profile.width / 2 + this.profile.offset.x + 70 * this.z, this.profile.position.y = this.backgroundColored.height / 1.4 - this.profile.height / 2 + this.profile.offset.y), this.z < .3 && this.z > -.3 ? (this.checkHide && TweenLite.to(this.check.scale, .5, {
                        x: 1.04,
                        y: 1.04,
                        ease: Elastic.easeOut
                    }), this.checkHide = !1) : this.data && (this.data.selected === !0 || this.checkHide || (this.checkHide = !0, TweenLite.to(this.check.scale, .2, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeOut
                    })))
                }, e.prototype.update = function (t, e) {
                    this.data = t, t.selected ? this.select() : this.unselect(), this.skillBar.setData(2 * t.skill), this.powerBar.setData(2 * t.power), this.speedBar.setData(2 * t.speed), this.speedBar2.setData(2 * t.speed), this.name.text = t.name, this.name2.text = t.name, this.brand.texture = new l.Texture.fromImage(t.brand), this.profile.texture = new l.Texture.fromImage(t.profile), t.offsetPlayerCard ? (this.profile.offset.x = t.offsetPlayerCard.x || 0, this.profile.offset.y = t.offsetPlayerCard.y || 0) : (this.profile.offset.x = 0, this.profile.offset.y = 0), e % 2 ? (this.orange = !0, this.backgroundColored.texture = new l.Texture.fromImage("player-card-middle-1.png")) : (this.orange = !1, this.backgroundColored.texture = new l.Texture.fromImage("player-card-middle-2.png"))
                }, e
            }(l.Container);
        e["default"] = _, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var s = i(8),
            a = function (t) {
                function e(i) {
                    var o = i.itemLength;
                    i.currentItem;
                    n(this, e);
                    var a = r(this, t.call(this));
                    a.current = 0, a.size = o, a.dotsContainer = new s.Container;
                    for (var h = 0; h < a.size; h++) {
                        var l = new s.Sprite.from("roulette_dot_white.png");
                        l.position.x = 30 * h, a.dotsContainer.addChild(l)
                    }
                    return a.dotsContainer.children[a.current].tint = 16253112, a.addChild(a.dotsContainer), a
                }
                return o(e, t), e.prototype.update = function (t) {
                    t = t, t < 0 && (t = this.size + t), t = Math.abs(t), this.current !== t && (this.dotsContainer.children[this.current].tint = 16777215, this.current = t, this.dotsContainer.children[t].tint = 16253112)
                }, e
            }(s.Container);
        e["default"] = a, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(77),
                o = i(78),
                s = i(24),
                a = i(16);
            PixiTrackpad = function (t) {
                this.spring = new r, this.onScrollUpdate = new a;
                var e = t.scrollbarClass || o;
                this.target = t.target, this.value = 0, this.easingValue = 0, this.dragOffset = 0, this.dragging = !1, this.speed = 0, this.size = 1024, this.maxSlots = 1, this.capMovement = !0, this.prevPosition = 0, this.valueY = 0, this.easingValueY = 0, this.dragOffsetY = 0, this.speedY = 0, this.prevPositionY = 0, this.didMove = !1, this.didMoveY = !1, this.target.interactive = !0, this.scrollMin = -(1 / 0), this.scrollMax = 1 / 0, this.scrollMinY = -(1 / 0), this.scrollMaxY = 0, this.snapTo = !1, t.scrollbar === !0 && s.instance.mobile === !1 && s.instance.iPad === !1 && (this.scrollBar = new e({
                    target: t.scrollTarget,
                    trackpad: this
                })), this._onDownBinded = this.onDown.bind(this), this._onUpBinded = this.onUp.bind(this), this._onMoveBinded = this.onMove.bind(this), this.target.on("touchstart", this._onDownBinded).on("mousedown", this._onDownBinded)
            }, PixiTrackpad.constructor = PixiTrackpad, PixiTrackpad.prototype.unlock = function () {
                this.locked = !1, this.speed = 0, this.easingValue = this.value, this.easingValueY = this.valueY, this.speedY = 0, this.speedX = 0, window.onmousewheel = this.onMouseWheel.bind(this)
            }, PixiTrackpad.prototype.lock = function () {
                this.locked = !0, window.onmousewheel = null
            }, PixiTrackpad.prototype.update = function () {
                if (this.value += .3 * (this.easingValue - this.value), this.valueY += .3 * (this.easingValueY - this.valueY), !this.locked)
                    if (this.dragging) {
                        var t = this.easingValue - this.prevPosition;
                        t *= .7, this.speed += .5 * (t - this.speed), this.prevPosition = this.easingValue;
                        var e = this.easingValueY - this.prevPositionY;
                        e *= .7, this.speedY += .5 * (e - this.speedY), this.prevPositionY = this.easingValueY
                    } else this.snapTo ? (this.spring.update(), this.easingValue = this.spring.x, this.easingValueY = this.spring.y, this.capMovement && (this.easingValue > this.scrollMax ? this.easingValue += .3 * (this.scrollMax - this.easingValue) : this.easingValue < this.scrollMin && (this.easingValue += .3 * (this.scrollMin - this.easingValue)), this.easingValueY > this.scrollMaxY ? this.easingValueY += .3 * (this.scrollMaxY - this.easingValueY) : this.easingValueY < this.scrollMinY && (this.easingValueY += .3 * (this.scrollMinY - this.easingValueY)))) : (this.speed *= .95, this.easingValue += this.speed, this.speedY *= .95, this.easingValueY += this.speedY, this.capMovement && (this.easingValue > this.scrollMax ? this.easingValue += .3 * (this.scrollMax - this.easingValue) : this.easingValue < this.scrollMin && (this.easingValue += .3 * (this.scrollMin - this.easingValue)), this.easingValueY > this.scrollMaxY ? this.easingValueY += .3 * (this.scrollMaxY - this.easingValueY) : this.easingValueY < this.scrollMinY && (this.easingValueY += .3 * (this.scrollMinY - this.easingValueY))))
            }, PixiTrackpad.prototype.stop = function () {
                this.speed = 0, this.speedY = 0, this.value = this.prevPosition = this.easingValue, this.valueY = this.prevPositionY = this.easingValueY
            }, PixiTrackpad.prototype.setPosition = function (t, e) {
                this.value = this.easingValue = t, this.valueY = this.easingValueY = e
            }, PixiTrackpad.prototype.easeToPosition = function (t, e) {
                this.easingValue = t, this.easingValueY = e
            }, PixiTrackpad.prototype.onDown = function (t) {
                this.locked || (this.speed = 0, this.speedY = 0, this.stop(), this.didMove = !1, this.didMoveY = !1, this.checkX = t.data.global.x, this.checkY = t.data.global.y, this.dragging = !0, this.dragOffset = t.data.global.x - this.value, this.dragOffsetY = t.data.global.y - this.valueY, this.target.on("touchend", this._onUpBinded).on("touchendoutside", this._onUpBinded).on("mouseup", this._onUpBinded).on("mouseupoutside", this._onUpBinded).on("touchmove", this._onMoveBinded).on("mousemove", this._onMoveBinded))
            }, PixiTrackpad.prototype.onMouseWheel = function (t) {
                this.target.interactive && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, this.locked || (this.speed = .15 * t.wheelDeltaX, this.speedY = .15 * t.wheelDeltaY))
            }, PixiTrackpad.prototype.onUp = function () {
                if (!this.locked) {
                    if (this.dragging = !1, this.snapTo) {
                        if (this.didMove) {
                            this.spring.dx = this.speed;
                            var t;
                            t = this.speed < 0 ? Math.floor(this.easingValue / this.size) : Math.ceil(this.easingValue / this.size), this.capMovement && (t > 0 ? t = 0 : t < -this.maxSlots && (t = -this.maxSlots)), this.spring.tx = t * this.size, this.spring.dy = this.speedY, t = this.speedY < 0 ? Math.floor(this.easingValueY / this.size) : Math.ceil(this.easingValueY / this.size), this.capMovement && (t > 0 ? t = 0 : t < -this.maxSlots && (t = -this.maxSlots)), this.spring.ty = t * this.size
                        }
                        this.spring.x = this.easingValue, this.spring.y = this.easingValueY
                    }
                    this.cap(), this.target.off("touchend", this._onUpBinded).off("touchendoutside", this._onUpBinded).off("mouseup", this._onUpBinded).off("mouseupoutside", this._onUpBinded).off("touchmove", this._onMoveBinded).off("mousemove", this._onMoveBinded)
                }
            }, PixiTrackpad.prototype.cap = function () {
                this.capMovement && (this.snapTo && (this.spring.tx > this.scrollMax ? this.spring.tx = this.scrollMax : this.spring.tx < this.scrollMin && (this.spring.tx = this.scrollMin)), this.snapTo && (this.spring.ty > this.scrollMaxY ? this.spring.ty = this.scrollMaxY : this.spring.ty < this.scrollMinY && (this.spring.ty = this.scrollMinY)))
            }, PixiTrackpad.prototype.setSlot = function (t, e) {
                this.spring.tx = t * -this.size, e && (this.value = this.easingValue = this.spring.x = this.spring.tx), this.cap()
            }, PixiTrackpad.prototype.setSlotY = function (t) {
                this.spring.ty = t * -this.size, this.cap()
            }, PixiTrackpad.prototype.nextSlot = function () {
                this.spring.tx -= this.size, this.spring.tx < -(this.maxSlots * this.size) && (this.spring.tx = -(this.maxSlots * this.size)), this.cap()
            }, PixiTrackpad.prototype.nextSlotY = function () {
                this.spring.ty -= this.size, this.spring.ty < -(this.maxSlots * this.size) && (this.spring.ty = -(this.maxSlots * this.size)), this.cap()
            }, PixiTrackpad.prototype.previousSlot = function () {
                this.spring.tx += this.size, this.cap()
            }, PixiTrackpad.prototype.previousSlotY = function () {
                this.spring.ty += this.size, this.cap()
            }, PixiTrackpad.prototype.setSize = function (t) {
                this.size = t, this.scrollbar && this.scrollBar.setSize(t)
            }, PixiTrackpad.prototype.setSlots = function (t) {
                this.maxSlots = t - 1
            }, PixiTrackpad.prototype.onMove = function (t) {
                if (!this.locked) {
                    var e;
                    e = Math.abs(this.checkX - t.data.global.x), e > 10 && (this.didMove = !0), e = Math.abs(this.checkY - t.data.global.y), e > 10 && (this.didMove = !0), this.easingValue = t.data.global.x - this.dragOffset, this.easingValueY = t.data.global.y - this.dragOffsetY, this.capMovement && (this.easingValue > this.scrollMax ? this.easingValue = this.scrollMax + .3 * (this.easingValue - this.scrollMax) : this.easingValue < this.scrollMin && (this.easingValue = this.scrollMin + .3 * (this.easingValue - this.scrollMin)), this.easingValueY > this.scrollMaxY ? this.easingValueY = this.scrollMaxY + .3 * (this.easingValueY - this.scrollMaxY) : this.easingValueY < this.scrollMinY && (this.easingValueY = this.scrollMinY + .3 * (this.easingValueY - this.scrollMinY)))
                }
            }, n.exports = PixiTrackpad
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function () {
                this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.y = 0, this.ay = 0, this.dy = 0, this.ty = 0, this.max = 30, this.damp = .75, this.springiness = .09, this.max = 160, this.damp = .85, this.springiness = .29
            };
            n.constructor = n, n.prototype.update = function () {
                this.ax = (this.tx - this.x) * this.springiness, this.dx += this.ax, this.dx *= this.damp, this.dx < -this.max ? this.dx = -this.max : this.dx > this.max && (this.dx = this.max), this.x += this.dx, this.ay = (this.ty - this.y) * this.springiness, this.dy += this.ay, this.dy *= this.damp, this.dy < -this.max ? this.dy = -this.max : this.dy > this.max && (this.dy = this.max), this.y += this.dy
            }, n.prototype.reset = function () {
                this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.y = 0, this.ay = 0, this.dy = 0, this.ty = 0
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(79), i(23));
            i(76);
            PixiScrollBar = function (t) {
                this.topMargin = 15, this.bottomMargin = 15, this.yTouchOffset = 0, this.dragging = !1, this.trackpad = t.trackpad, this.targetPosition = {
                    x: 0,
                    y: 0
                }, this.container = t.target, this.guideLine = new PIXI.Sprite, this.guideLine.anchor.set(1, 0), this.guideLine.position.x = 630, this.guideLine.position.y = 1, this.guideLine.height = 229, this.guideLine.hitArea = new PIXI.Rectangle((-10), 0, 40, 300), this.guideLine.interactive = !1, this.guideLine.buttonMode = !1, this.guideButton = new PIXI.Sprite, this.guideButton.anchor.set(1, .5), this.guideButton.position.x = 642, this.guideButton.hitArea = new PIXI.Rectangle((-100), (-100), 400, 300), this.guideButton.position.y = this.topMargin + .5 * this.guideButton.height, this.guideButton.interactive = !0, this.guideButton.buttonMode = !0, this.container.addChild(this.guideLine), this.container.addChild(this.guideButton), this.guideButton.touchstart = this.guideButton.mousedown = this.onDown.bind(this), this.guideButton.touchend = this.guideButton.touchendoutside = this.guideButton.mouseup = this.guideButton.mouseupoutside = this.onUp.bind(this), this.guideButton.mousemove = this.guideButton.touchmove = this.onMove.bind(this), this.panelHeight = this.container.viewHeight, this.scrollHeight = this.container.scrollHeight - this.panelHeight, this.scrollableDistance = this.panelHeight - this.topMargin - this.bottomMargin - this.guideButton.height, this.scrollBarRatio = this.scrollHeight / this.scrollableDistance, r.instance.add(this.update, this)
            }, PixiScrollBar.prototype.onDown = function (t) {
                alert(2), this.dragging = !0, this.yTouchOffset = t.data.getLocalPosition(this.guideButton).y, this.onMove(t)
            }, PixiScrollBar.prototype.onUp = function () {
                alert(2434), this.dragging = !1, this.yTouchOffset = 0
            }, PixiScrollBar.prototype.onMove = function (t) {
                this.dragging === !0 && (this.targetPosition = t.data.getLocalPosition(this.container), this.targetPosition.y < this.topMargin + .5 * this.guideButton.height && (this.targetPosition.y = this.topMargin + .5 * this.guideButton.height), this.targetPosition.y > this.scrollableDistance + this.topMargin + .5 * this.guideButton.height && (this.targetPosition.y = this.scrollableDistance + this.topMargin + .5 * this.guideButton.height))
            }, PixiScrollBar.prototype.update = function () {
                if (this.dragging) {
                    var t = -((this.guideButton.position.y - this.topMargin - .5 * this.guideButton.height) * this.scrollBarRatio);
                    this.trackpad.easeToPosition(0, t), this.guideButton.position.y = this.targetPosition.y
                } else this.guideButton.position.y = this.trackpad.valueY * -1 / this.scrollBarRatio + this.topMargin + .5 * this.guideButton.height
            }, n.exports = PixiScrollBar
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function () {
                this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.max = 160, this.damp = .8, this.springiness = .1
            };
            n.prototype.update = function () {
                this.ax = (this.tx - this.x) * this.springiness, this.dx += this.ax, this.dx *= this.damp, this.dx < -this.max ? this.dx = -this.max : this.dx > this.max && (this.dx = this.max), this.x += this.dx
            }, n.prototype.reset = function () {
                this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 80
    playerSelectScreenFn,
    teamReviewScreenFn,
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(8),
            l = r(h),
            c = i(41),
            u = (n(c), i(65)),
            p = (n(u), i(38)),
            d = (n(p), i(70)),
            f = (n(d), i(49)),
            m = (n(f), i(50)),
            g = (n(m), i(24)),
            v = (n(g), i(34)),
            y = n(v),
            _ = i(37),
            x = i(60),
            b = (n(x), i(73)),
            w = n(b),
            S = function (t) {
                function e(i) {
                    o(this, e);
                    var n = s(this, t.call(this));
                    return n.app = i, n.slider = new w["default"], n.bg = l.Sprite.from(URL_HEADER.IMAGE + "ui/panel-player-select-and-tournament.png"), n.bg.anchor.set(.5, .5), n.addChild(n.bg), n.title = new l.Text(_.Translation.team_select_screen.title, {
                        fill: "white",
                        fontSize: 28,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), n.title.anchor.set(.5, .5), n.bg.addChild(n.title), n
                }
                return a(e, t), e.prototype.beforeShow = function (t) {
                    this.slider.on()
                }, e.prototype.onShow = function () {
                    this.bg.scale.set(0), this.app.topMenu.normalMode(), TweenLite.to(this.bg.scale, .3, {
                        x: 1,
                        y: 1,
                        ease: Elastic.easeOut,
                        delay: .2
                    })
                }, e.prototype.resize = function (t, e) {
                    this.position.y = e / 2 - 372.5 - 40, this.bg.position.set(t / 2, 440), this.title.position.y = -e / 2 + y["default"].MARGIN.TITLE_TOP
                }, e
            }(l.Container);
        e["default"] = S, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(8),
            l = r(h),
            c = i(41),
            u = (n(c), i(38)),
            p = (n(u), i(57)),
            d = n(p),
            f = i(49),
            m = n(f),
            g = i(50),
            v = i(24),
            y = (n(v), i(34)),
            _ = n(y),
            x = i(37),
            b = i(60),
            w = n(b),
            S = i(84),
            T = n(S),
            M = i(44),
            E = n(M),
            A = function (t) {
                function e(i) {
                    o(this, e);
                    var n = s(this, t.call(this));
                    n.app = i, window.tour = n, n.scaleRatio = .75, n.bg = l.Sprite.from(URL_HEADER.IMAGE + "ui/panel-player-select-and-tournament.png"), n.bg.anchor.set(.5, .5), n.addChild(n.bg), n.title = d["default"].h1(x.Translation.tournament_screen.title), n.title.anchor.set(.5, .5), n.addChild(n.title), n.stageLabel = new l.Text("", {
                        fill: "white",
                        fontSize: 28,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), n.stageLabel.anchor.set(.5, .5), n.stageLabel.position.set(0, -185), n.bg.addChild(n.stageLabel);
                    var r = l.Sprite.from(URL_HEADER.IMAGE + "ui/diagram.png");
                    r.anchor.set(.5, .5), r.position.set(0, -25), n.bg.addChild(r);
                    new l.Point(0, 15), new l.Point(10, 15);
                    return n.stageInfo = {
                        quarter: {
                            id: "quarter",
                            pos: [{
                                x: -350,
                                y: 0
                            }, {
                                x: -350,
                                y: 80
                            }, {
                                x: -350,
                                y: 175
                            }, {
                                x: -350,
                                y: 255
                            }, {
                                x: 350,
                                y: 0
                            }, {
                                x: 350,
                                y: 80
                            }, {
                                x: 350,
                                y: 175
                            }, {
                                x: 350,
                                y: 255
                            }]
                        },
                        semi: {
                            id: "semi",
                            pos: [{
                                x: -225,
                                y: 40
                            }, {
                                x: -225,
                                y: 215
                            }, {
                                x: 225,
                                y: 40
                            }, {
                                x: 225,
                                y: 215
                            }]
                        },
                        "final": {
                            id: "final",
                            pos: [{
                                x: -105,
                                y: 125
                            }, {
                                x: 105,
                                y: 125
                            }]
                        },
                        winner: {
                            id: "winner",
                            pos: [{
                                x: 0,
                                y: 200
                            }]
                        }
                    }, n.emptyFlag = {
                        ID: "",
                        FLAG: "empty-flag.png"
                    }, n.blackFlag = {
                        ID: "",
                        FLAG: "empty-flag.png"
                    }, n.countryPanel = new T["default"], n.playButton = new E["default"]("tournament-normal.png", "tournament-hover.png", "tournament-hover.png", x.Translation.tournament_screen.playButton, 1.1), n.playButton.defaultScale = 1, n.playButton.position.y = n.bg.height / 2 - n.playButton.height / 2 - 40, n.playButton.onPress.add(function () {
                        n.onPlayButtonPressed()
                    }), n.bg.addChild(n.playButton), n
                }
                return a(e, t),
                    e.prototype.setContent = function () {
                        this.bg.removeChild(this.itemContainer), this.itemContainer = new l.Container, this.itemContainer.position.set(0, -150), this.bg.addChild(this.itemContainer), this.bg.addChild(this.countryPanel), this.stage, m["default"].tournamentData.winner.length > 0 ? this.stage = this.stageInfo.winner.id : m["default"].tournamentData["final"].length > 0 ? this.stage = this.stageInfo["final"].id : m["default"].tournamentData.semi.length > 0 ? this.stage = this.stageInfo.semi.id : m["default"].tournamentData.quarter.length > 0 && (this.stage = this.stageInfo.quarter.id);
                        var t = {
                            quarter: 0,
                            semi: 0,
                            "final": 1
                        };
                        m["default"].difficulty = t[this.stage], this.stageLabel.text = x.Translation.tournament_screen.stages[this.stage], this.arrangeItems(this.stage, !0)
                    },
                    e.prototype.chooseOpponent = function () {
                        m["default"].leftOverPlayers = [];
                        for (var t in g.CharacterData) {
                            var e = g.CharacterData[t];
                            e.available && m["default"].teamA.indexOf(e) === -1 && m["default"].leftOverPlayers.push(e)
                        }
                        w["default"].shuffle(m["default"].leftOverPlayers), m["default"].teamB = [m["default"].leftOverPlayers[0], m["default"].leftOverPlayers[1], m["default"].leftOverPlayers[2]];
                        for (var t in g.CharacterData) {
                            var e = g.CharacterData[t];
                            e.available && m["default"].teamB.indexOf(e) !== -1 && (g.CharacterData[t].available = !1)
                        }
                        var i = this.flattenArray(m["default"].tournamentData[this.stage]),
                            n = i.indexOf(m["default"].countryID);
                        m["default"].opponentID = i[n % 2 === 0 ? ++n : --n]
                    },
                    e.prototype.chooseRivals = function (t, e) {
                        for (var i, n, r, o = [], s = [], a = m["default"].tournamentData[t], h = 0; h < a.length; h++) i = a[h], n = i.indexOf(m["default"].countryID), r = n > -1 ? i[e ? n : (n + 1) % 2] : i[Math.floor(2 * Math.random())], o.push(r), 2 == o.length && (s.push(o), o = []);
                        return s
                    },
                    e.prototype.updateRivals = function (t, e) {
                        t === this.stageInfo["final"].id ? m["default"].tournamentData.winner = [e ? m["default"].countryID : m["default"].tournamentData["final"][Math.floor(2 * Math.random())]] : t === this.stageInfo.semi.id ? (m["default"].tournamentData["final"] = this.flattenArray(this.chooseRivals(t, e)), e || this.updateRivals(this.stageInfo["final"].id, !1)) : t === this.stageInfo.quarter.id && (m["default"].tournamentData.semi = this.chooseRivals(t, e), e || this.updateRivals(this.stageInfo.semi.id, !1))
                    },
                    e.prototype.arrangeItems = function (t, e) {
                        t === this.stageInfo.winner.id ? (this.placeItems(this.stageInfo.winner.id, [this.emptyFlag]), this.placeItems(t, m["default"].tournamentData.winner), this.arrangeItems(this.stageInfo["final"].id, !1)) : t === this.stageInfo["final"].id ? (e ? (this.placeItems(this.stageInfo.winner.id, [this.emptyFlag]), this.placeItems(this.stageInfo["final"].id, [this.emptyFlag, this.emptyFlag]), this.placeItems(t, m["default"].tournamentData["final"])) : this.placeItems(t, m["default"].tournamentData["final"]), this.arrangeItems(this.stageInfo.semi.id, !1)) : t === this.stageInfo.semi.id ? (e ? (this.placeItems(this.stageInfo.winner.id, [this.emptyFlag]), this.placeItems(this.stageInfo["final"].id, [this.emptyFlag, this.emptyFlag]), this.placeItems(this.stageInfo.semi.id, [this.emptyFlag, this.emptyFlag, this.emptyFlag, this.emptyFlag]), this.placeItems(t, this.flattenArray(m["default"].tournamentData.semi))) : this.placeItems(t, this.flattenArray(m["default"].tournamentData.semi)), this.arrangeItems(this.stageInfo.quarter.id, !1)) : t === this.stageInfo.quarter.id && (e && (this.placeItems(this.stageInfo.winner.id, [this.emptyFlag]), this.placeItems(this.stageInfo["final"].id, [this.emptyFlag, this.emptyFlag]), this.placeItems(this.stageInfo.semi.id, [this.emptyFlag, this.emptyFlag, this.emptyFlag, this.emptyFlag])), this.placeItems(t, this.flattenArray(m["default"].tournamentData.quarter)))
                    },
                    e.prototype.onItemHover = function (t) {
                        if (t.id) {
                            var e = {
                                name: x.Translation.countries[t.id].NAME,
                                label: x.Translation.country_select_screen.countryPanel
                            },
                                i = {
                                    x: t.position.x,
                                    y: t.position.y - 2 * t.height - 20
                                };
                            TweenLite.to(this.countryPanel.position, .25, {
                                x: i.x,
                                y: i.y,
                                ease: Linear.None
                            }), this.countryPanel.show(e), this.countryPanel.depth = 2
                        }
                    },
                    e.prototype.onItemOut = function (t) {
                        t.id && this.countryPanel.hide()
                    },
                    e.prototype.placeItems = function (t, e) {
                        var i = [];
                        m["default"].tournamentData.winner.length > 0 ? i = m["default"].tournamentData.winner : m["default"].tournamentData["final"].length > 0 ? i = m["default"].tournamentData["final"] : m["default"].tournamentData.semi.length > 0 && (i = this.flattenArray(m["default"].tournamentData.semi));
                        for (var n, r, o, s, a, h, c = 0; c < e.length; c++) n = e[c], r = l.Sprite.fromFrame(n.FLAG), o = this.stageInfo[t].pos[c], r.scale.set(this.scaleRatio), r.id = n.ID, r.interactive = !0, r.buttonMode = !0, r.mouseover = this.onItemHover.bind(this, r), r.mouseout = this.onItemOut.bind(this, r), r.anchor.set(.5), r.x = o.x, r.y = o.y, n === m["default"].countryID && (a = l.Sprite.fromFrame("flag-white-border.png"), a.anchor.set(.5), r.addChild(a), h = l.Sprite.fromFrame("halo.png"), h.position.x = r.position.x, h.position.y = r.position.y, h.anchor.set(.5), this.itemContainer.addChild(h)), this.itemContainer.addChild(r), i.length > 0 && i.indexOf(n) < 0 && (s = l.Sprite.fromFrame(this.blackFlag.FLAG), s.anchor.set(.5), s.alpha = .5, r.addChild(s))
                    },
                    e.prototype.flattenArray = function (t) {
                        for (var e = [], i = 0; i < t.length; i++) e = e.concat(t[i]);
                        return e
                    },
                    e.prototype.onPlayButtonPressed = function () {
                        void 0 === m["default"].tournamentData.winner[0] ? (
                            this.chooseOpponent(),
                            this.app.spotLights.hide(),
                            this.screenManager.gotoScreenByID(_["default"].SCREEN_ID.GAME)
                        ) : m["default"].tournamentData.winner[0] === m["default"].countryID ? this.screenManager.gotoScreenByID(_["default"].SCREEN_ID.SUCCEED) : this.screenManager.gotoScreenByID(_["default"].SCREEN_ID.FAIL)
                    },
                    e.prototype.onShow = function () {
                        m["default"].matchResult.goalsA > -1 && this.updateRivals(this.stage, m["default"].matchResult.goalsA > m["default"].matchResult.goalsB), this.app.breadcrumb.hide(), void 0 !== m["default"].tournamentData.winner[0] && (this.playButton.label.text = x.Translation.tournament_screen.endButton), this.setContent(), this.bg.scale.set(0), this.app.topMenu.prevScreen = _["default"].SCREEN_ID.TEAM_REVIEW, this._hack = this.hack.bind(this), this.app.topMenu.buttons.prev.onPress.add(this._hack), this.app.topMenu.setState("prevnext"), TweenLite.to(this.bg.scale, 1, {
                            x: 1,
                            y: 1,
                            ease: Elastic.easeOut,
                            delay: .2
                        }), this.title.scale.set(0), TweenLite.to(this.title.scale, 1, {
                            x: 1,
                            y: 1,
                            ease: Elastic.easeOut,
                            delay: .2
                        }), this.playButton.scale.set(0), TweenLite.to(this.playButton.scale, 1, {
                            x: 1,
                            y: 1,
                            ease: Elastic.easeOut,
                            delay: .5
                        })
                    },
                    e.prototype.hack = function () {
                        this.app.breadcrumb.currentStep--, this.app.breadcrumb.steps[this.app.breadcrumb.currentStep].activate(), this.app.topMenu.buttons.prev.onPress.remove(this._hack)
                    },
                    e.prototype.onShown = function () { },
                    e.prototype.resize = function (t, e) {
                        this.bg.position.set(t / 2, e / 2 + 20), this.title.position.y = _["default"].MARGIN.TITLE_TOP, this.title.position.x = t / 2
                    },
                    e
            }(l.Container);
        e["default"] = A, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(37),
                s = (o.Translation, function (t, e) {
                    r.Container.call(this), this.data = "undefined" != typeof t ? t : {
                        name: ""
                    }, this.alpha = 0, this.bg = r.Sprite.fromFrame("tournament-pop-up.png"), this.bg.anchor.set(.5, 0), this.addChild(this.bg), this.name = new r.Text(this.data.name.replace("\n", " "), {
                        fill: "white",
                        fontSize: 26,
                        fontFamily: window.MAIN_FONT,
                        align: "center",
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }), this.name.scale.set(.8), this.name.anchor.set(.5, .5), this.name.position.y = this.bg.height / 2 + 6, this.addChild(this.name), e === !0 && this.show(this.data)
                });
            s.prototype = Object.create(r.Container.prototype), s.prototype.show = function (t) {
                TweenLite.killTweensOf(this), this.data = t, this.name.scale.set(1), this.name.text = this.data.name.replace("\n", " ").replace("\n", " ");
                var e = .9 * this.bg.width / this.name.width;
                e = Math.min(.8, e), this.name.scale.set(e), TweenLite.to(this, .1, {
                    alpha: 1,
                    ease: Linear.None
                })
            }, s.prototype.hide = function () {
                TweenLite.to(this, .1, {
                    alpha: 0,
                    ease: Linear.None
                })
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(41),
                s = (i(38), i(59), i(86)),
                a = (i(49), i(50)),
                h = (a.CharacterData, i(24)),
                l = i(34),
                c = i(37),
                u = c.Translation,
                p = (i(60), i(61)),
                d = i(87),
                f = i(88),
                m = i(76),
                g = i(23),
                v = i(89),
                y = i(54),
                _ = function (t) {
                    var e = this;
                    r.Container.call(this),
                    this.transition = new y(this.app),
                    this.transition.reverse = !0,
                    this.app = t,
                    this.itemList = [],
                    this.margin = new r.Point(50, 40),
                    p.getScores(function (t) {
                        this.setContent(t)
                    }.bind(this)),
                    this.bg = r.Sprite.from(URL_HEADER.IMAGE + "ui/panel-player-select-and-tournament.png"),
                    this.bg.anchor.set(.5, .5),
                    this.addChild(this.bg),
                    this.title = new r.Text(u.leaderboard_screen.title, {
                        fill: "white",
                        fontSize: 36,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }),
                    this.title.anchor.set(.5, .5), this.addChild(this.title),
                    this.itemContainer = new r.Container, this.bg.addChild(this.itemContainer),
                    this.titleLabel = new r.Container;
                    var i = ({
                        fill: "white",
                        fontSize: 20,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round",
                        dropShadow: !1
                    }, r.Sprite.from("icon_country.png")),
                        n = r.Sprite.from("icon_points.png"),
                        a = r.Sprite.from("icon_won.png"),
                        h = r.Sprite.from("icon_lost.png"),
                        l = r.Sprite.from("icon_goal_difference.png");
                    i.x = 25, n.x = 347, a.x = 472, h.x = 577, l.x = 697, this.tooltop = new s, this.tooltop.addItem(n, window.translations.STR_POINTS), this.tooltop.addItem(a, window.translations.STR_WINS), this.tooltop.addItem(h, window.translations.STR_LOSES), this.tooltop.addItem(l, window.translations.STR_GOAL_DIFFERENCE), this.titleLabel.addChild(i), this.titleLabel.addChild(n), this.titleLabel.addChild(a), this.titleLabel.addChild(h), this.titleLabel.addChild(l), this.titleLabel.addChild(this.tooltop), this.titleLabel.position.set(-450, -175), this.titleLabel.position.x += 50;
                    var c = {
                        frameWidth: 880,
                        frameHeight: 310,
                        lineHeight: 30,
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    };
                    this.leaderboard = new v(c), this.leaderboard.position.set(this.titleLabel.x, -130), this.leaderboard.disappear(), this.bg.addChild(this.leaderboard), this.sponsorButton = o.sponsor("sponsor-background.png", u.sponsor.url), this.sponsorButton.position.set(0, 200);
                    var g = r.Sprite.from(ASSET_URL + u.sponsor.path);
                    g.anchor.set(.5, .5), this.sponsorButton.addChild(g);
                    var _ = {
                        target: this.leaderboard.container
                    },
                        x = new m(_),
                        b = 300,
                        w = 30,
                        S = r.Sprite.from("scrollbar_button.png");
                    S.anchor.set(.25);
                    var T = r.Sprite.from("scrollbar_bg.png"),
                        M = new d({
                            draggerHeight: w,
                            dragLength: b,
                            bar: T,
                            dragger: S
                        });
                    M.position.set(420, -160), this.bg.addChild(M);
                    var E = new f({
                        scrollbar: M,
                        trackpad: x,
                        min: 0,
                        max: 380
                    });
                    this.scrollCombo = E, window.combo = this.scrollCombo, this.translationIds = {};
                    var A = 0;
                    for (var C in u.countries) {
                        A++;
                        var L = u.countries[C];
                        this.translationIds[L.SCORE_ID] = L.NAME
                    }
                    this.bg.addChild(this.titleLabel), window.addEventListener("keydown", function (t) {
                        38 === t.keyCode && (e.scrollCombo.value += 50), 40 === t.keyCode && (e.scrollCombo.value -= 50)
                    })
                };
            _.prototype = Object.create(r.Container.prototype), _.prototype.setContent = function (t) {
                for (var e = 0; e < this.itemList.length; e++) this.itemContainer.removeChild(this.itemList[e]);
                this.data = t, this.data = this.data.map(function (t, e) {
                    return t.name = this.translationIds[t.id], t.name && (t.name = t.name.replace("\n", " ")), t.rank = e + 1, t
                }.bind(this)), this.itemList = [], this.leaderboard.setData(this.data);
                var i = 30 * (t.length - 1) - 220;
                this.scrollCombo.max = i, this.scrollCombo.trackpad.scrollMinY = -i, this.itemContainer.position.set(this.titleLabel.position.x, this.titleLabel.position.y + this.margin.x)
            }, _.prototype.onHidden = function () { }, _.prototype.onShown = function () {
                this.transition.reverse = !1
            }, _.prototype.onShow = function () {
                this.bg.scale.set(0), this.app.topMenu.setState("home"), this.app.topMenu.prevShow(), this.app.topMenu.prevScreen = l.SCREEN_ID.TITLE, TweenLite.to(this.bg.scale, 1, {
                    x: h.instance.isMobile ? .9 : 1,
                    y: h.instance.isMobile ? .9 : 1,
                    ease: Elastic.easeOut,
                    delay: .2
                }), this.title.scale.set(0), TweenLite.to(this.title.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: Elastic.easeOut,
                    delay: .2
                }), this.leaderboard.appear(), this.app.showPlatform(), g.instance.add(this.update, this), this.scrollCombo.value = 0
            }, _.prototype.onShown = function () { }, _.prototype.onHidden = function () {
                g.instance.remove(this.update, this), this.leaderboard.disappear()
            }, _.prototype.update = function () {
                this.scrollCombo.update(), this.leaderboard.scrollPosition = this.scrollCombo.value
            }, _.prototype.resize = function (t, e) {
                this.bg.position.set(t / 2, e / 2 + 40), this.title.position.y = l.MARGIN.TITLE_TOP, this.title.position.x = t / 2
            }, n.exports = _
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(37),
                s = (o.Translation, function () {
                    r.Container.call(this), this.interactive = !1, this.interactiveChildren = !1, this.data = "undefined" != typeof data ? data : {
                        name: "",
                        label: "",
                        ranking: ""
                    }, this.alpha = 0, this.bg = r.Sprite.fromFrame("tooltip_explaination.png"), this.bg.anchor.set(.5, 0), this.addChild(this.bg), this.name = new r.Text("HELLO", {
                        fill: "black",
                        fontSize: 20,
                        fontFamily: window.MAIN_FONT,
                        align: "center"
                    }), this.name.anchor.set(.5, 0), this.name.position.y = 32, this.addChild(this.name)
                });
            s.prototype = Object.create(r.Container.prototype), s.prototype.addItem = function (t, e) {
                t.interactive = !0, t.on("mouseover", function () {
                    this.position.x = t.position.x + 15, this.position.y = t.position.y + 35, this.show(e)
                }, this), t.on("mouseout", function () {
                    this.hide()
                }, this)
            }, s.prototype.show = function (t) {
                this.name.text = t.toUpperCase(), TweenLite.to(this, .1, {
                    alpha: 1,
                    ease: Linear.None
                })
            }, s.prototype.hide = function () {
                TweenLite.to(this, .1, {
                    alpha: 0,
                    ease: Linear.None
                })
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(48),
                o = i(8),
                s = new o.Point,
                a = function (t) {
                    t = t || {}, this.value = 0, this._ratio = 0, this.dragOffset = 0, this.dragPosition = 0, this.draggerHeight = t.draggerHeight || 30, this.dragLength = t.dragLength || 300, o.Container.call(this), this.bar = t.bar || (new o.Graphics).beginFill(16711680).drawRect(0, 0, 20, this.dragLength), this.dragger = t.dragger || (new o.Graphics).beginFill(16776960).drawRect(0, -this.draggerHeight / 2, 20, this.draggerHeight), this.addChild(this.bar), this.addChild(this.dragger), this.dragger.position.y = this.draggerHeight / 2, this.interactive = !0, this.buttonMode = !0, this.mousedown = this.onDown.bind(this), this.onUp = this.onUp.bind(this), this.onMove = this.onMove.bind(this), this.onUpdate = null
                };
            a.prototype = Object.create(o.Container.prototype), a.prototype.updateTransform = function () {
                var t = this.draggerHeight / 2 + this.ratio * (this.dragLength - this.draggerHeight);
                this.dragger.position.y += .5 * (t - this.dragger.position.y), this.containerUpdateTransform()
            }, Object.defineProperties(a.prototype, {
                ratio: {
                    get: function () {
                        return this._ratio
                    },
                    set: function (t) {
                        this._ratio = r.cap(t, 0, 1)
                    }
                }
            }), a.prototype.updateRatio = function (t) {
                this._ratio = r.map(t, this.draggerHeight / 2, this.dragLength - this.draggerHeight / 2, 0, 1), this._ratio = r.cap(this.ratio, 0, 1), this.onUpdate()
            }, a.prototype.onDown = function (t) {
                var e = t.data.getLocalPosition(this, s).y;
                this.updateRatio(e), this.isDragging = !0, this.mousemove = this.onMove, this.mouseup = this.mouseupoutside = this.onUp
            }, a.prototype.onUp = function () {
                this.isDragging = !1, this.mousemove = null, this.mouseup = this.mouseupoutside = null
            }, a.prototype.onMove = function (t) {
                var e = t.data.getLocalPosition(this, s).y;
                this.updateRatio(e)
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(79), i(23), i(76), i(48));
            PixiScrollCombo = function (t) {
                this.min = t.min || 0, this.max = t.max || 500, this.trackpad = t.trackpad, this.trackpad.scrollMinY = -this.max, this.trackpad.scrollMaxY = this.min, this.trackpad.capMovement = !0, this.trackpad.easeToPosition(0, this.min), this.scrollbar = t.scrollbar, Device.instance.desktop || (this.scrollbar.visible = !1), this.scrollbar.onUpdate = this.onScrollUpdate.bind(this), this.value = 0
            }, Object.defineProperties(PixiScrollCombo.prototype, {
                value: {
                    get: function () {
                        return this._value
                    },
                    set: function (t) {
                        this._value = t, this.trackpad.easeToPosition(0, t)
                    }
                }
            }), PixiScrollCombo.prototype.update = function () {
                this.trackpad.update(), this._value = this.trackpad.valueY, this.scrollbar.ratio = r.map(-this.trackpad.valueY, this.min, this.max, 0, 1)
            }, PixiScrollCombo.prototype.onScrollUpdate = function () {
                var t = r.map(this.scrollbar.ratio, 1, 0, -this.max, this.min);
                this.trackpad.easeToPosition(0, t)
            }, n.exports = PixiScrollCombo
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        n = function (t, e, n) {
            var o = i(8),
                s = (i(36), i(23), i(59)),
                a = function (t) {
                    o.Container.call(this), this.list = [], this.realHeight = 0, this.viewHeight = t.frameHeight || 240, this.viewWidth = t.frameWidth || 800, this.scoreViewHeight = t.lineHeight || 40, this.padding = "object" === r(t.padding) ? t.padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, this.container = new o.Container, this.container.hitArea = new o.Rectangle((-50), 0, this.viewWidth, this.viewHeight), this.addChild(this.container), this.maskGraphic = (new o.Graphics).beginFill(16711680, .4).drawRect(-50, 0, this.viewWidth, this.viewHeight - 30), this.addChild(this.maskGraphic), this.container.mask = this.maskGraphic, this.containerScrollbar = new o.Container, this.containerScrollbar.position.x = 5, this.containerScrollbar.viewHeight = t.frameHeight || 240, this.containerScrollbar.viewWidth = t.frameWidth || 800, this.addChild(this.containerScrollbar), this.containerScrollbar.realHeight = this.containerScrollbar.viewHeight + 2 * this.scoreViewHeight, this.realHeight = this.containerScrollbar.viewHeight + 1.5 * this.scoreViewHeight;
                    for (var e = Math.floor(this.containerScrollbar.realHeight / this.scoreViewHeight), i = 0; i < e; i++) {
                        var n = new s(i);
                        this.container.addChild(n), n.position.y = i * this.scoreViewHeight, this.list.push(n)
                    }
                    this.dirty = !0
                };
            a.constructor = a, a.prototype = Object.create(o.Container.prototype), Object.defineProperty(a.prototype, "scrollPosition", {
                get: function () {
                    return this._scrollPosition
                },
                set: function (t) {
                    this._scrollPosition = t, this.updateScrollPosition()
                }
            }), a.prototype.setData = function (t) {
                this.data = t;
                for (var e = 0; e < this.list.length; e++) {
                    var i = this.list[e];
                    i.id = 99999
                }
                this.alpha = 0, TweenLite.to(this, .3, {
                    alpha: 1
                }), this.scrollHeight = t.length * this.scoreViewHeight + this.padding.top + this.padding.bottom, this.dirty = !0, this.updateScrollPosition()
            }, a.prototype.updateScrollPosition = function () {
                if (this.data) {
                    for (var t = 0; t < this.list.length; t++) {
                        var e = this.list[t];
                        e.position.y = t * this.scoreViewHeight + this._scrollPosition + this.padding.top, e.position.y += this.scoreViewHeight;
                        var i = Math.floor((e.position.y + 40) / this.realHeight);
                        i *= this.list.length, i -= t, i *= -1, e.id != i && (e.id = i, e.visible = e.id >= 0 && e.id < this.data.length, e.visible && e.setData(this.data[i])), e.position.y %= this.realHeight, e.position.y < -20 && (e.position.y += this.realHeight), e.position.y -= this.scoreViewHeight
                    }
                    this.dirty = !1
                }
            }, a.prototype.disappear = function () {
                for (var t = 0; t < this.list.length; t++) {
                    var e = this.list[t];
                    TweenLite.to(e, .4, {
                        alpha: 0
                    }), TweenLite.to(this.containerScrollbar.position, .4, {
                        x: 200
                    })
                }
            }, a.prototype.appear = function () {
                for (var t = 0; t < this.list.length; t++) {
                    var e = this.list[t];
                    TweenLite.to(e, .4, {
                        alpha: 1
                    }), TweenLite.to(this.containerScrollbar.position, .4, {
                        x: 5
                    })
                }
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 90
    gameOverScreenFn,
    gameScreenWrapFn,
    gameScreenFn,
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(94),
                o = i(18),
                s = function (t) {
                    this.game = t, this.keyboard = new r, this.keyIsDown = !1, this.enadbled = !0, this.currentActiveItem = null, this.dPad = new PIXI.Point;
                    var e = o.getJson("config").config.LOCALE,
                        i = "z";
                    "_fr" === e ? i = "w" : "_de" === e && (i = "y"), this.keyboard.onKeyPress("space", this.onSpacePressed.bind(this)), this.keyboard.onKeyRelease("space", this.onSpaceReleased.bind(this)), this.keyboard.onKeyRelease("s", function () { })
                };
            s.prototype.reset = function () {
                this.keyIsDown = !1, window.focus()
            }, s.prototype.update = function (t) {
                this.game.paused && (this.keyIsDown = !1);
                var e = 0,
                    i = 0,
                    n = this.game.teamManagerA;
                if (this.keyboard.isPressed("left") ? e = -1 : this.keyboard.isPressed("right") && (e = 1), this.keyboard.isPressed("up") ? i = -1 : this.keyboard.isPressed("down") && (i = 1), 0 === e && 0 === i) n.stopActivePlayer();
                else {
                    var r = Math.sqrt(e * e + i * i);
                    e /= r, i /= r, n.moveActivePlayerInDirection(e, -i)
                }
            }, s.prototype.onSpacePressed = function () {
                this.game.paused || this.game.teamManagerA.actionBegin()
            }, s.prototype.onSpaceReleased = function () {
                this.game.paused || this.game.teamManagerA.actionEnd()
            }, s.prototype.resize = function (t, e) { }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            Keyboard = function () {
                this._states = {
                    up: 0,
                    down: 1
                }, this._keyCodes = {
                    37: {
                        label: "left",
                        state: 0,
                        preventBubble: !0
                    },
                    38: {
                        label: "up",
                        state: 0,
                        preventBubble: !0
                    },
                    39: {
                        label: "right",
                        state: 0,
                        preventBubble: !0
                    },
                    40: {
                        label: "down",
                        state: 0,
                        preventBubble: !0
                    },
                    49: {
                        label: "1",
                        state: 0,
                        preventBubble: !0
                    },
                    50: {
                        label: "2",
                        state: 0,
                        preventBubble: !0
                    },
                    51: {
                        label: "3",
                        state: 0,
                        preventBubble: !0
                    },
                    52: {
                        label: "4",
                        state: 0,
                        preventBubble: !0
                    },
                    53: {
                        label: "5",
                        state: 0,
                        preventBubble: !0
                    },
                    54: {
                        label: "6",
                        state: 0,
                        preventBubble: !0
                    },
                    55: {
                        label: "7",
                        state: 0,
                        preventBubble: !0
                    },
                    56: {
                        label: "8",
                        state: 0,
                        preventBubble: !0
                    },
                    57: {
                        label: "9",
                        state: 0,
                        preventBubble: !0
                    },
                    97: {
                        label: "numpad1",
                        state: 0,
                        preventBubble: !0
                    },
                    98: {
                        label: "numpad2",
                        state: 0,
                        preventBubble: !0
                    },
                    99: {
                        label: "numpad3",
                        state: 0,
                        preventBubble: !0
                    },
                    100: {
                        label: "numpad4",
                        state: 0,
                        preventBubble: !0
                    },
                    101: {
                        label: "numpad5",
                        state: 0,
                        preventBubble: !0
                    },
                    102: {
                        label: "numpad6",
                        state: 0,
                        preventBubble: !0
                    },
                    103: {
                        label: "numpad7",
                        state: 0,
                        preventBubble: !0
                    },
                    104: {
                        label: "numpad8",
                        state: 0,
                        preventBubble: !0
                    },
                    105: {
                        label: "numpad9",
                        state: 0,
                        preventBubble: !0
                    },
                    13: {
                        label: "enter",
                        state: 0,
                        preventBubble: !0
                    },
                    32: {
                        label: "space",
                        state: 0,
                        preventBubble: !0
                    },
                    65: {
                        label: "a",
                        state: 0,
                        preventBubble: !0
                    },
                    68: {
                        label: "d",
                        state: 0,
                        preventBubble: !0
                    },
                    83: {
                        label: "s",
                        state: 0,
                        preventBubble: !0
                    },
                    87: {
                        label: "w",
                        state: 0,
                        preventBubble: !0
                    },
                    89: {
                        label: "y",
                        state: 0,
                        preventBubble: !0
                    },
                    90: {
                        label: "z",
                        state: 0,
                        preventBubble: !0
                    },
                    88: {
                        label: "x",
                        state: 0,
                        preventBubble: !0
                    }
                }, this.hash = {}, this.hashUp = {}, this.disabled = !1, this.start(), this.dirty = !1
            }, Keyboard.prototype.start = function () {
                var t = this;
                this._onKeyDown = function (e) {
                    return t.processKeyDown(e)
                }, this._onKeyUp = function (e) {
                    return t.processKeyUp(e)
                }, window.addEventListener("keydown", this._onKeyDown, !1), window.addEventListener("keyup", this._onKeyUp, !1)
            }, Keyboard.prototype.stop = function () {
                window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp)
            }, Keyboard.prototype.processKeyDown = function (t) {
                if (this.disabled !== !0) {
                    var e = t.keyCode;
                    if (this.keyCode = e, this._keyCodes.hasOwnProperty(e)) {
                        var i = this._keyCodes[e];
                        i.preventBubble && t.preventDefault(), i.state != this._states.down && (i.state = this._states.down, this.dirty = !0, this.hash[i.label] && this.hash[i.label](i))
                    }
                }
            }, Keyboard.prototype.processKeyUp = function (t) {
                if (this.disabled !== !0) {
                    var e = t.keyCode;
                    if (this.keyCode = null, this._keyCodes.hasOwnProperty(e)) {
                        var i = this._keyCodes[e];
                        i.preventBubble && t.preventDefault(), i.state != this._states.up && (i.state = this._states.up, this.dirty = !0, this.hashUp[i.label] && this.hashUp[i.label](i))
                    }
                }
            }, Keyboard.prototype.isPressed = function (t) {
                var e = this.getCodeFromLabel(t);
                return !!e && this._keyCodes[e].state === this._states.down
            }, Keyboard.prototype.getCodeFromLabel = function (t) {
                for (var e in this._keyCodes)
                    if (this._keyCodes[e].label === t) return e;
                return !1
            }, Keyboard.prototype.onKeyPress = function (t, e) {
                this.hash[t] = e
            }, Keyboard.prototype.onKeyRelease = function (t, e) {
                this.hashUp[t] = e
            }, i.exports = Keyboard
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            function r(t) {
                var t = t || {};
                s.call(this), this.sprite = PIXI.Sprite.from(t.downFrame), this.sprite.anchor.set(.5), this.addChild(this.sprite), this.interactiveChildren = !1, this.view.hitArea = new PIXI.Circle(0, 0, 80), this.actionFrame = new PIXI.Sprite, this.actionFrame.anchor.set(.5), this.addChild(this.actionFrame), this.onDown.add(function () {
                    this.sprite.texture = PIXI.Texture.fromFrame(t.downFrame)
                }, this), this.onUp.add(function () {
                    this.sprite.texture = PIXI.Texture.fromFrame(t.upFrame)
                }, this)
            }
            var o = i(96),
                s = i(97),
                a = function (t) {
                    this.game = t, this.view = this.game.view, this.view.interactive = !0, this.view.buttonMode = !0;
                    var e = PIXI.Sprite.from("touch-button-background.png");
                    e.anchor.set(.5);
                    var i = PIXI.Sprite.from("touch-button-movement.png");
                    i.anchor.set(.5);
                    var n = {
                        background: e,
                        stick: i
                    };
                    this.analogueStick = new o(n), this.buttonOne = new r({
                        downFrame: "touch-button-yellow-on.png",
                        upFrame: "touch-button-yellow.png"
                    }), this.buttonOne.setActionFrame("touch-icon-ball.png"), this.buttonOne.addCallbacks(function () {
                        this.game.teamManagerA.actionBegin()
                    }, function () {
                        this.game.teamManagerA.actionEnd()
                    }, this), this.view.addChild(this.analogueStick.view), this.view.addChild(this.buttonOne.view), this.w = 1024, this.h = 702, this.resize(this.w, this.h)
                };
            a.prototype.disable = function () {
                this.view.interactive = !1
            }, a.prototype.enable = function () {
                this.view.interactive = !0
            }, a.prototype.update = function () {
                this.analogueStick.update();
                var t = this.game.teamManagerA;
                this.game.teamManagerA.activePlayer;
                var e = this.analogueStick.delta;
                t.moveActivePlayerInDirection(e.x, -e.y)
            }, a.prototype.resize = function (t, e) {
                this.analogueStick.view.position.set(100, .65 * e), this.buttonOne.view.position.set(t - 100, .65 * e)
            }, a.prototype.onDown = function (t) {
                t.data.getLocalPosition(this.view)
            };
            r.prototype = Object.create(s.prototype), r.prototype.setActionFrame = function (t) {
                this.actionFrame.texture = PIXI.Texture.fromFrame(t)
            }, r.prototype.addCallbacks = function (t, e, i) {
                this.onDown.add(t, i), this.onUp.add(e, i)
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(48), new r.Point),
                s = function (t) {
                    t = t || {}, this.view = new r.Container, this.view.hitArea = new r.Rectangle(0, 0, 1e4, 1e4), this.view.interactive = !0, this.dot = t.background || (new r.Graphics).beginFill(16711680, .4).drawCircle(0, 0, 70), this.view.addChild(this.dot), this.pad = t.stick || (new r.Graphics).beginFill(16711680).drawCircle(0, 0, 50), this.pad.interactive = !0, t.stick || (this.pad.hitArea = new r.Circle(0, 0, 60)), this.pad.alpha = .6, this.view.addChild(this.pad), this.range = 30, this.pad.on("mousedown", this.down, this), this.view.on("mouseup", this.up, this), this.view.on("mouseupoutside", this.up, this), this.pad.on("touchstart", this.down, this), this.view.on("touchend", this.up, this), this.view.on("touchendoutside", this.up, this), this.delta = new r.Point
                };
            s.prototype.update = function (t) { }, s.prototype.down = function (t) {
                this.view.hitArea = this.hit, this.moveId = t.data.identifier, this.isDown = !0;
                t.data.getLocalPosition(this.view, o);
                this.pad.alpha = 1, this.view.on("mousemove", this.move, this), this.view.on("touchmove", this.move, this)
            }, s.prototype.up = function (t) {
                if (this.view.hitArea = null, this.moveId === t.data.identifier) {
                    this.moveId = 99999999, this.isDown = !1;
                    t.data.getLocalPosition(this.view, o);
                    this.pad.x = 0, this.pad.y = 0, this.pad.alpha = .6, this.delta.x = 0, this.delta.y = 0, this.view.off("mousemove", this.move, this), this.view.off("touchmove", this.move, this)
                }
            }, s.prototype.move = function (t) {
                if (this.moveId === t.data.identifier) {
                    var e = t.data.getLocalPosition(this.view, o);
                    this.pad.x = e.x, this.pad.y = e.y;
                    var i = e.x,
                        n = e.y,
                        r = Math.sqrt(i * i + n * n);
                    i /= r, n /= r, r > this.range && (r = this.range), this.pad.x = i * r, this.pad.y = n * r, this.delta.x = i * r / 30, this.delta.y = n * r / 30
                }
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(16),
                o = i(8),
                s = function (t) {
                    o.Container.call(this), this.view = this, t && this.addChild(t), this.onPress = new r, this.onDown = new r, this.onUp = new r, this.onHover = new r, this.onOut = new r, this.mousedown = this.touchstart = this.onDown.dispatch.bind(this, this), this.mouseup = this.touchend = this.onUp.dispatch.bind(this, this), this.click = this.tap = this.onPress.dispatch.bind(this, this), this.mouseover = this.onHover.dispatch.bind(this, this), this.touchendoutside = this.mouseupoutside = this.mouseout = this.onOut.dispatch.bind(this, this), this.onDown.add(this.down, this), this.onUp.add(this.up, this), this.onHover.add(this.hover, this), this.onOut.add(this.out, this), this._scale = new o.Point, this.enable()
                };
            s.prototype = Object.create(o.Container.prototype), s.prototype.constructor = s, s.prototype.setSize = function (t) {
                switch (t) {
                    case "small":
                        this.scale.set(.5);
                        break;
                    case "big":
                        this.scale.set(2);
                        break;
                    default:
                        this.scale.set(1)
                }
            }, s.prototype.enable = function () {
                this.interactive = !0, this.buttonMode = !0
            }, s.prototype.disable = function () {
                this.interactive = !1, this.buttonMode = !1
            }, s.prototype.down = function (t, e) { }, s.prototype.up = function (t, e) { }, s.prototype.hover = function (t, e) { }, s.prototype.out = function (t, e) { }, s.prototype.show = function () {
                this.visible = !0, this.enable()
            }, s.prototype.hide = function () {
                this.disable(), this.visible = !1
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(99),
                s = i(53),
                a = (i(36), i(100)),
                h = i(52),
                l = (i(49), i(34), i(24), i(37)),
                c = l.Translation,
                u = function (t) {
                    r.Container.call(this),
                    this.game = t,
                    this.scorePanel = new r.Container,
                    this.addChild(this.scorePanel),
                    this.score = new r.Text("0 - 0", {
                        fill: "white",
                        fontSize: 32,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }),
                    this.score.anchor.set(.5, .5),
                    this.scorePanel.addChild(this.score),
                    this.time = new r.Text("00:00", {
                        fill: "#ffd800",
                        fontSize: 20,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    }),
                    this.time.position.set(0, 20),
                    this.time.anchor.x = .5,
                    this.scorePanel.addChild(this.time),
                    this.detailPool = new s(o),
                    this.message = new a(this.game),
                    this.addChild(this.message),
                    this.party = new h(null, null, 1),
                    this.party.visible = !1,
                    this.pos = new r.Point
                };
            u.prototype = Object.create(r.Container.prototype),
            u.prototype.setData = function (t, e) {
                t && e && (this.scorePanel.removeChild(this.flag), this.flag = new r.Sprite.fromFrame(t.FLAG), this.flag.anchor.set(.5, .5), this.flag.scale.set(.5), this.flag.position.set(-75, 2), this.scorePanel.addChild(this.flag), this.scorePanel.removeChild(this.flag2), this.flag2 = new r.Sprite.fromFrame(e.FLAG), this.flag2.anchor.set(.5, .5), this.flag2.scale.set(.5), this.flag2.position.set(75, 2), this.scorePanel.addChild(this.flag2))
            },
            u.prototype.reset = function () {
                this.score.text = this.game.score, this.message.reset()
            },
            u.prototype.updateScore = function (t, e) { },
            u.prototype.update = function () {
                var t = this.game.goalsA + " : " + this.game.goalsB;
                this.score.text = t, this.pos.x = this.game.world.view3d.camera.position.x, this.party.update(this.pos), this.game.goldenGoal ? this.time.text = c.game_screen.goldenGoal : this.time.text = this.formatTime(Math.floor(this.game.timer.getSecondsLeft()))
            },
            u.prototype.formatTime = function (t) {
                var e = Math.max(Math.floor(t / 60), 0),
                    i = Math.max(t % 60, 0);
                return (e < 10 ? "0" : "") + e + ":" + (i < 10 ? "0" : "") + i
            },
            u.prototype.showGameover = function () { },
            u.prototype.resize = function (t, e) {
                this.message.x = t / 2, this.message.y = e / 2, this.scorePanel.position.y = 55, this.scorePanel.position.x = t / 2
            },
            n.exports = u
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(53), i(16)),
                s = function () {
                    r.Text.call(this, "YAY", {
                        font: "26px chunkfiveroman",
                        fill: "#eaff32",
                        dropShadow: !0
                    }), this.anchor.set(.5), this.count = 0, this.multiplierColors = ["#eaff32", "#ffd300", "#ff70df", "#00ebff"], this.onFinish = new o
                };
            s.prototype = Object.create(r.Text.prototype), s.prototype.setup = function (t, e, i, n) {
                this.x = t, this.y = e, this.speed = 5, this.alpha = 1, this.count = 0, this.scale.x = this.scale.y = 0, TweenLite.to(this.scale, .5, {
                    x: 1 + .2 * (n - 1),
                    y: 1 + .2 * (n - 1),
                    ease: Elastic.easeOut
                }), this.style.fill = this.multiplierColors[(n - 1) % 4], this.text = i + (n > 1 ? "x" + n : "")
            }, s.prototype.updateTransform = function () {
                r.Text.prototype.updateTransform.call(this), this.speed *= .95, this.position.y -= this.speed, this.count++, this.count > 20 && (this.alpha *= .95), this.alpha < .3 && this.onFinish.dispatch(this)
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 100
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(20), i(34)),
                s = (i(49), i(101)),
                a = i(102),
                h = i(103),
                l = i(104),
                c = function (t) {
                    r.Container.call(this), this.game = t, this.message = null
                };
            c.prototype = Object.create(r.Container.prototype), c.prototype.show = function (t, e) {
                this.onAnimComplete(this), t === o.MESSAGE_ID.VS ? (this.message = new s(this.game), this.animToBottom()) : t === o.MESSAGE_ID.WHISTLE ? (this.message = new a(this.game), this.animFromBottom(e)) : t === o.MESSAGE_ID.GOAL ? (this.message = new h(this.game), this.animToBottom()) : t === o.MESSAGE_ID.SCORE && (this.message = new l(this.game), this.animToBottom()), null !== this.message && this.addChild(this.message)
            }, c.prototype.reset = function () {
                this.onAnimComplete(this)
            }, c.prototype.animToBottom = function () {
                TweenLite.killTweensOf(this.message), TweenLite.killTweensOf(this.message.scale), this.message.alpha = 0, this.message.scale.set(2), TweenLite.to(this.message, .2, {
                    alpha: 1
                }), TweenLite.to(this.message.scale, .5, {
                    x: 1,
                    y: 1
                })
            }, c.prototype.animFromBottom = function (t) {
                TweenLite.killTweensOf(this.message.position), this.message.position.y = this.game.pitchHeight / 2, t && (this.message.position.x = t.x, this.message.scale.x = t.sx), TweenLite.to(this.message.position, .5, {
                    y: this.game.pitchHeight / 2 - this.message.height,
                    ease: Back.easeOut
                }), TweenLite.to(this.message.position, .5, {
                    y: this.message.height,
                    delay: 2,
                    ease: Back.easeIn,
                    onComplete: this.onAnimComplete,
                    onCompleteScope: this
                })
            }, c.prototype.onAnimComplete = function () {
                null !== this.message && (this.removeChild(this.message), TweenLite.killTweensOf(this.message), TweenLite.killTweensOf(this.message.position), TweenLite.killTweensOf(this.message.scale), this.message = null)
            }, n.exports = c
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(37),
            l = i(49),
            c = r(l),
            u = i(8),
            p = n(u),
            d = i(57),
            f = r(d),
            m = function (t) {
                function e(i) {
                    o(this, e);
                    var n = s(this, t.call(this));
                    p.Container.call(n), n.game = i, n.bg = p.Sprite.from(URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png"), n.bg.anchor.set(.5, .5), n.addChild(n.bg);
                    var r = c["default"].countryID,
                        a = c["default"].opponentID;
                    n.title = f["default"].h1(window.translations.STR_KICK_OFF), n.title.anchor.set(.5, .5), n.title.position.y = -n.bg.height / 2 - n.title.height + 20, n.addChild(n.title), n.flag = new p.Sprite.fromFrame(r.FLAG), n.flag.anchor.set(.5, .5), n.flag.scale.set(.75), n.flag.position.set(-100, -35), n.addChild(n.flag), n.flag2 = new p.Sprite.fromFrame(a.FLAG), n.flag2.anchor.set(.5, .5), n.flag2.scale.set(.75), n.flag2.position.set(100, -35), n.addChild(n.flag2);
                    var l = {
                        fill: "white",
                        font: "20px " + window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round",
                        align: "center"
                    };
                    return n.labelCountry = new p.Text(h.Translation.countries[r.ID].NAME, l), n.labelCountry.anchor.set(.5, .5), n.labelCountry.position.set(-100, 35), n.addChild(n.labelCountry), n.labelVs = new p.Text("vs", l), n.labelVs.anchor.set(.5, .5), n.labelVs.position.set(0, 35), n.addChild(n.labelVs), n.labelCountry2 = new p.Text(h.Translation.countries[a.ID].NAME, l), n.labelCountry2.anchor.set(.5, .5), n.labelCountry2.position.set(100, 35), n.addChild(n.labelCountry2), n
                }
                return a(e, t), e
            }(p.Container);
        e["default"] = m, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(37),
                s = (o.Translation, i(49), i(36)),
                a = function (t) {
                    r.Container.call(this), this.game = t;
                    var e = [];
                    for (var i = 1; i < 39; i++) {
                        e.push('robin-referee-whistle00' + (i < 10 ? '0' + i : i) + '.png');
                    }

                    //var e = [
                    //    "robin-referee-whistle0001.png",
                    //    "robin-referee-whistle0002.png",
                    //    "robin-referee-whistle0003.png",
                    //    "robin-referee-whistle0004.png",
                    //    "robin-referee-whistle0005.png",
                    //    "robin-referee-whistle0006.png",
                    //    "robin-referee-whistle0007.png",
                    //    "robin-referee-whistle0008.png",
                    //    "robin-referee-whistle0009.png",
                    //    "robin-referee-whistle0010.png",
                    //    "robin-referee-whistle0011.png",
                    //    "robin-referee-whistle0012.png",
                    //    "robin-referee-whistle0013.png",
                    //    "robin-referee-whistle0014.png",
                    //    "robin-referee-whistle0015.png",
                    //    "robin-referee-whistle0016.png",
                    //    "robin-referee-whistle0017.png",
                    //    "robin-referee-whistle0018.png",
                    //    "robin-referee-whistle0019.png",
                    //    "robin-referee-whistle0020.png",
                    //    "robin-referee-whistle0021.png",
                    //    "robin-referee-whistle0022.png",
                    //    "robin-referee-whistle0023.png",
                    //    "robin-referee-whistle0024.png",
                    //    "robin-referee-whistle0025.png",
                    //    "robin-referee-whistle0026.png",
                    //    "robin-referee-whistle0027.png",
                    //    "robin-referee-whistle0028.png",
                    //    "robin-referee-whistle0029.png",
                    //    "robin-referee-whistle0030.png",
                    //    "robin-referee-whistle0031.png",
                    //    "robin-referee-whistle0032.png",
                    //    "robin-referee-whistle0033.png",
                    //    "robin-referee-whistle0034.png",
                    //    "robin-referee-whistle0035.png",
                    //    "robin-referee-whistle0036.png",
                    //    "robin-referee-whistle0037.png",
                    //    "robin-referee-whistle0038.png"
                    //];
                    this.referee = new r.extras.MovieClip(s.getTexturesFromFrames(e)),
                    this.referee.anchor.set(.5, 0),
                    this.referee.position.set(70, -10),
                    this.referee.animationSpeed = .3
                    //this.addChild(this.referee),
                    //this.referee.play(),
                    //t.scripts.start.left || (this.referee.scale.x = -1, this.referee.position.x = -70)
                };
            a.prototype = Object.create(r.Container.prototype), n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(37),
                s = o.Translation,
                a = (i(49), function (t) {
                    r.Container.call(this), this.game = t;
                    var e = {
                        fill: "white",
                        font: "108px " + window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 30,
                        lineJoin: "round",
                        align: "center",
                        dropShadow: !1
                    };
                    this.message = new r.Text(s.game_screen.goal, e), this.message.anchor.set(.5), this.addChild(this.message)
                });
            a.prototype = Object.create(r.Container.prototype), n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(37),
                s = (o.Translation, i(49)),
                a = i(57),
                h = function (t) {
                    r.Container.call(this), this.game = t, this.bg = r.Sprite.from(URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png"), this.bg.anchor.set(.5, .5), this.addChild(this.bg);
                    var e = s.countryID,
                        i = s.opponentID;
                    this.flag = new r.Sprite.fromFrame(e.FLAG), this.flag.anchor.set(.5, .5), this.flag.position.set(-100, -60), this.addChild(this.flag), this.flag2 = new r.Sprite.fromFrame(i.FLAG), this.flag2.anchor.set(.5, .5), this.flag2.position.set(100, -60), this.addChild(this.flag2);
                    ({
                        fill: "white",
                        font: "30px " + window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round",
                        align: "center"
                    });
                    this.title = a.h3(e.NAME), this.title.anchor.set(.5, 0), this.title.scale.set(.65), this.title.position.set(-100, this.flag.position.y + this.flag.height / 2 + 10), this.addChild(this.title), this.title2 = a.h3(i.NAME), this.title2.anchor.set(.5, 0), this.title2.scale.set(.65), this.title2.position.set(100, this.flag.position.y + this.flag.height / 2 + 10), this.addChild(this.title2), this.labelScore = a.h1("" + this.game.goalsA), this.labelScore.anchor.set(.5, .5), this.labelScore.position.set(-100, 65), this.labelScore.scale.set(1.2), this.addChild(this.labelScore), this.labelVs = a.h1("-"), this.labelVs.anchor.set(.5, .5), this.labelVs.position.set(0, 65), this.addChild(this.labelVs), this.labelScore2 = a.h1("" + this.game.goalsB), this.labelScore2.anchor.set(.5, .5), this.labelScore2.position.set(100, 65), this.labelScore2.scale.set(1.2), this.addChild(this.labelScore2)
                };
            h.prototype = Object.create(r.Container.prototype), n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 105;
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            n.exports = {
                World: i(106),
                Group: i(107),
                PixiView: i(108),
                CrashWorld: i(109)
            }
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 106; World
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(107)),
                o = i(23),
                s = function () {
                    this.allItems = new r,
                    this.updateItems = new r,
                    this.groups = {},
                    this.itemsToRemove = [],
                    this.systems = []
                };
            s.constructor = s,
            s.prototype.install = function (t, e) {
                this.systems.push(t), t.init(this), this[e] = t
            },
            s.prototype.addGroup = function (t) {
                for (var e = 0; e < t.children.length; e++) this.add(t.children[e])
            },
            s.prototype.initGroups = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = this.groups[i];
                    n || (n = this.groups[i] = new r)
                }
            },
            s.prototype.add = function (t) {
                if (t._gc) {
                    var e = this.itemsToRemove.indexOf(t);
                    this.itemsToRemove.splice(e, 1), t._gc = !1
                }
                t.world && this.removeItem(t), t.world = this;
                for (var i = 0; i < this.systems.length; i++) this.systems[i].add(t);
                this.allItems.add(t);
                for (var i = 0; i < t.groups.length; i++) {
                    var n = t.groups[i],
                        o = this.groups[n];
                    o || (o = this.groups[n] = new r), o.add(t)
                }
                t.update && this.updateItems.add(t), t.addedToWorld && t.addedToWorld(this)
            },
            s.prototype.remove = function (t) {
                !t._gc && t.world && (t._gc = !0, this.itemsToRemove.push(t))
            },
            s.prototype.update = function () {
                var t = Math.round(o.game.deltaTime / o.game.speed);
                t > 2 && (t = 2);
                for (var e = 0; e < t; e++) {
                    this.removeItems();
                    for (var i = 0; i < this.systems.length; i++) this.systems[i].preupdate();
                    for (var n = this.updateItems.children, i = 0; i < n.length; i++) n[i].update();
                    for (var i = 0; i < this.systems.length; i++) this.systems[i].update();
                    for (var i = 0; i < this.systems.length; i++) this.systems[i].postupdate()
                }
            },
            s.prototype.removeItems = function () {
                this.itemsToRemove.length;
                for (var t = 0; t < this.itemsToRemove.length; t++) {
                    var e = this.itemsToRemove[t];
                    this.removeItem(e)
                }
                this.itemsToRemove.length = 0
            },
            s.prototype.removeItem = function (t) {
                t._gc = !1;
                for (var e = 0; e < this.systems.length; e++) this.systems[e].remove(t);
                t.update && this.updateItems.remove(t),
                t.removedFromWorld && t.removedFromWorld(this),
                t.world = null,
                this.allItems.remove(t);
                for (var e = 0; e < t.groups.length; e++) {
                    var i = t.groups[e];
                    this.groups[i].remove(t)
                }
            },
            s.prototype.clear = function () {
                for (var t = 0; t < this.systems.length; t++) this.systems[t].clear();
                this.allItems.empty(), this.updateItems.empty(), this.groups = {}, this.removeItems(), this.collisionHash = {}
            },
            s.prototype.find = function (t, e) {
                if (!this.groups[t]) return null;
                for (var i = this.groups[t].children, n = 0; n < i.length; n++)
                    if (i[n].meta.name === e) return i[n]
            };
            var a = [];
            s.prototype.findAll = function (t, e) {
                if (!this.groups[t]) return null;
                var i = this.groups[t].children;
                a.length = 0;
                for (var n = 0; n < i.length; n++) i[n].meta.name === e && a.push(i[n]);
                return a
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function (t) {
                this.children = t || []
            };
            n.prototype.add = function (t) {
                return this.children.push(t), t
            }, n.prototype.remove = function (t) {
                var e = this.children.indexOf(t);
                return e === -1 ? null : (this.children.splice(e, 1), t)
            }, n.prototype.getIndex = function (t) {
                return this.children.indexOf(t)
            }, n.prototype.getItem = function (t) {
                return this.children[t]
            }, n.prototype.run = function (t, e) {
                if (e)
                    for (var i = 0; i < this.children.length; i++) t.call(e, this.children[i]);
                else
                    for (var i = 0; i < this.children.length; i++) t(this.children[i])
            }, n.prototype.empty = function () {
                this.children.length = 0
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8);
            r.DisplayObject.prototype.layer = "default";
            var o = function (t) {
                r.Container.call(this), this.innerContainer = new r.Container, this.activeItemsContainer = new r.Container, this.addChild(this.innerContainer), this.innerContainer.addChild(this.activeItemsContainer), this.filterArea = new r.Rectangle(0, 0, 1e6, 1e6), this.layers = {}, this.camera = t.camera || {
                    x: 0,
                    y: 0,
                    zoom: 1
                }, this.addLayer("back"), this.addLayer("default"), this.addLayer("front")
            };
            o.prototype = Object.create(r.Container.prototype), o.prototype.init = function (t) { }, o.prototype.preupdate = function (t) { }, o.prototype.update = function () {
                this.camera.update();
                var t = this.camera.zoom;
                this.scale.set(t), this.position.x = this.camera.viewWidth / 2 - this.camera.viewWidth / 2 * t, this.position.y = this.camera.viewHeight / 2 - this.camera.viewHeight / 2 * t, this.innerContainer.x = -this.camera.x + this.camera.viewWidth / 2, this.innerContainer.y = -this.camera.y + this.camera.viewHeight / 2
            }, o.prototype.postupdate = function (t) { }, o.prototype.add = function (t) {
                if (t.view) {
                    var e = t.view,
                        i = this.layers[e.layer];
                    e.parent = i, i.children.push(t.view)
                }
            }, o.prototype.remove = function (t) {
                if (t.view) {
                    var e = t.view,
                        i = this.layers[e.layer],
                        n = i.children.indexOf(e);
                    n != -1 && (e.parent = null, i.children.splice(n, 1))
                }
            }, o.prototype.clear = function () {
                for (var t in this.layers) this.layers[t].removeChildren()
            }, o.prototype.addLayer = function (t) {
                this.layers[t] = new r.Container, this.activeItemsContainer.addChild(this.layers[t])
            }, o.prototype.bringToFront = function (t) {
                var e = this.layers[t.view.layer],
                    i = e.children.indexOf(t.view);
                i != -1 && (e.children.splice(i, 1), e.children.push(t.view))
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(107),
                o = i(110),
                s = i(113),
                a = i(115),
                h = function () {
                    this.staticItems = new a, this.kinimaticItems = new r, this.dynamicItems = new r, this.collisions = [], this.narrowPhase = new o, this.dt = 1, this.collisionKeys = {}, this.DEBUG = !1
                };
            h.prototype.init = function (t) { }, h.prototype.preupdate = function () { }, h.prototype.add = function (t) {
                t.body && (this.DEBUG && (t._debugView || (t._debugView = t.body.getDebugView(), t._debugView.alpha = .5, t.view && t.view.addChild(t._debugView))), t.body.type === s.STATIC ? this.staticItems.add(t) : t.body.type === s.KINIMATIC ? this.kinimaticItems.add(t) : t.body.type === s.DYNAMIC && this.dynamicItems.add(t))
            }, h.prototype.remove = function (t) {
                t.body && (t.body.type === s.STATIC ? this.staticItems.remove(t) : t.body.type === s.KINIMATIC ? this.kinimaticItems.remove(t) : t.body.type === s.DYNAMIC && this.dynamicItems.remove(t))
            }, h.prototype.update = function () {
                for (var t = this.getCollisions(), e = 0; e < this.dynamicItems.children.length; e++) this.dynamicItems.children[e].body.update(this.dt);
                this.narrowPhase.hitTest(t)
            }, h.prototype.postupdate = function (t) { }, h.prototype.reset = function () {
                this.staticItems.empty(), this.kinimaticItems.empty(), this.dynamicItems.empty(), this.collisions.length = 0, this.narrowPhase.reset()
            }, h.prototype.onCollision = function (t, e) { }, h.prototype.getKey = function (t, e) {
                return (t << 12) + e
            }, h.prototype.registerCollison = function (t, e) {
                this.collisionKeys[this.getKey(t, e)] = !0, this.collisionKeys[this.getKey(e, t)] = !0
            }, h.prototype.getCollisions = function () {
                this.collisions.length = 0;
                var t = this.dynamicItems.children;
                this.sortAxisList(t);
                for (var e = 0; e < t.length; e++)
                    for (var i = t[e], n = i.body.position.x + i.body.shape.x + i.body.shape.width + 5, r = e + 1; r < t.length; r++) {
                        var o = t[r],
                            s = o.body.position.x + o.body.shape.x - 5;
                        if (n <= s) break;
                        var a = !0,
                            h = this.getKey(o.type, i.type);
                        this.collisionKeys[h] ? o.canCollide && i.canCollide || (a = !1) : a = !1, a && this.collisions.push(i, o)
                    }
                for (var e = 0; e < this.dynamicItems.children.length; e++)
                    for (var l = this.dynamicItems.children[e], c = this.staticItems.retrieveArea(l), r = 0; r < c.length; r++) {
                        var u = c[r];
                        u.canCollide && l.canCollide && this.collisions.push(l, u)
                    }
                for (var e = 0; e < this.dynamicItems.children.length; e++)
                    for (var r = 0; r < this.kinimaticItems.children.length; r++) {
                        var l = this.dynamicItems.children[e],
                            u = this.kinimaticItems.children[r],
                            a = !0,
                            h = this.getKey(u.type, l.type);
                        this.collisionKeys[h] ? l.canCollide && u.canCollide || (a = !1) : a = !1, a && (l.debug, this.collisions.push(l, u))
                    }
                return this.collisions
            }, h.prototype.sortAxisList = function (t) {
                for (var e = 1, i = t.length; e < i; e++) {
                    for (var n = t[e], r = e - 1; r >= 0; r--) {
                        var o = t[r];
                        if (o.body.shape.x + o.body.position.x <= n.body.shape.x + n.body.position.x) break;
                        t[r + 1] = t[r]
                    }
                    t[r + 1] = n
                }
                return t
            }, h.prototype.castRay = function (t, e) { }, h.prototype.constrainToBounds = function () {
                for (var t = this.bounds, e = 0; e < this.dynamicItems.children.length; e++) {
                    var i = this.dynamicItems.children[e].body;
                    i.position.x + i.shape.x < t.x ? i.position.x = t.x + i.shape.x : i.position.x + i.shape.x + i.shape.width > t.x + t.width && (i.position.x = t.x + t.width - (i.shape.x + i.shape.width)), i.position.y + i.shape.y < t.y ? i.position.y = t.y + i.shape.y : i.position.y + i.shape.y + i.shape.height > t.y + t.height && (i.position.y = t.y + t.height - (i.shape.y + i.shape.height), this.dynamicItems.children[e].onGround = !0)
                }
            }, h.prototype.setBounds = function (t) {
                this.bounds.x = t.x, this.bounds.y = t.y, this.bounds.width = t.width, this.bounds.height = t.height
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 110
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(111)),
                o = i(112),
                s = i(113),
                a = (i(114), function () {
                    this.collisions = {}, this.pool = [], this.tickId = 0, this.currentCollisions = [], this.collisionDatas = []
                });
            a.prototype.hitTest = function (t) {
                this.tickId++;
                for (var e = 0; e < 2; e++)
                    for (var i = 0; i < t.length; i += 2) {
                        var n = this.hitTestAABBAABB(t[i], t[i + 1]);
                        n && n.object1.body.solid && n.object2.body.solid && this.solve(n)
                    }
                for (var i = 0; i < this.currentCollisions.length; i++) {
                    var r = this.currentCollisions[i];
                    r._tickId !== this.tickId && (this.endCollision(r), this.currentCollisions.splice(i, 1), i--)
                }
            }, a.prototype.hitTestAABBAABB = function (t, e) {
                var i = t.body,
                    n = e.body,
                    o = i.shape,
                    s = n.shape,
                    a = o.x + t.position.x,
                    h = o.y + t.position.y,
                    l = s.x + e.position.x,
                    c = s.y + e.position.y,
                    u = h + o.height - c,
                    p = c + s.height - h,
                    d = a + o.width - l,
                    f = l + s.width - a,
                    m = 999999;
                if (d < m && (m = d), f < m && (m = f), u < m && (m = u), p < m && (m = p), m > 0) {
                    var g = new r;
                    m == d ? (g.x = -1, g.y = 0) : m == f ? (g.x = 1, g.y = 0) : m == u ? (g.x = 0, g.y = -1) : m == p && (g.x = 0, g.y = 1);
                    var v = -m,
                        y = this.startCollision(t, e, v, g);
                    if (!y.ignore) return y
                }
                return null
            }, a.prototype.solve = function (t) {
                var e = t.object1,
                    i = t.object2,
                    n = t.projection,
                    r = t.penetration;
                if (i.body.type === s.DYNAMIC) {
                    e.position.x -= n.x * r * .5, e.position.y -= n.y * r * .5, i.position.x += n.x * r * .5, i.position.y += n.y * r * .5;
                    var o = e.body.velocity.x - i.body.velocity.x,
                        a = e.body.velocity.y - i.body.velocity.y;
                    0 !== n.x ? o * n.x <= 0 && (e.body.velocity.x -= .5 * o, i.body.velocity.x += .5 * o) : a * n.y <= 0 && (e.body.velocity.y -= .5 * a, i.body.velocity.y += .5 * a)
                } else {
                    e.position.x -= n.x * r, e.position.y -= n.y * r;
                    var o = e.body.velocity.x - i.body.velocity.x,
                        a = e.body.velocity.y - i.body.velocity.y;
                    0 !== n.x ? o * n.x <= 0 && (e.body.velocity.x *= -e.body.bounce) : a * n.y <= 0 && (e.body.velocity.y *= -e.body.bounce)
                }
            }, a.prototype.startCollision = function (t, e, i, n) {
                var r;
                r = t.UID > e.UID ? (e.UID << 12) + t.UID : (t.UID << 12) + e.UID;
                var s = this.collisions[r];
                return s ? (s.penetration = i, s.projection = n, s._tickId = this.tickId, s.ignore || (n.y === -1 ? t.body.velocity.y >= 0 && (t.body.currentSurface = e, t.onGround = !0) : 1 === n.y && e.body.velocity.y >= 0 && (e.body.currentSurface = t, e.onGround = !0)), s) : (s = this.pool.pop(), s ? (s.object1 = t, s.object2 = e, s.penetration = i, s.projection = n, s.ignore = !1) : s = new o(t, e, i, n, (!1)), s._key = r, s._tickId = this.tickId, n.y === -1 * t.body.flip ? (t.body.currentSurface = e, t.onGround = !0) : n.y === 1 * e.body.flip && (e.body.currentSurface = t, e.onGround = !0), t.onCollideBegin && t.onCollideBegin(s), e.onCollideBegin && e.onCollideBegin(s), this.collisions[r] = s, this.currentCollisions.push(s), s)
            }, a.prototype.endCollision = function (t) {
                var e = t._key,
                    i = this.collisions[e];
                return i && (this.pool.push(i), this.collisions[e] = null), t.object1.world && (t.object1.onCollideEnd && t.object1.onCollideEnd(i), t.object2.onCollideEnd && t.object2.onCollideEnd(i)), i
            }, a.prototype.reset = function () {
                this.collisions = {}, this.tickId = 0, this.currentCollisions = []
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function (t, e) {
                this.x = t || 0, this.y = e || 0, this.id = n._UID++
            };
            n._UID = 0, n.prototype.clone = function () {
                return new n(this.x, this.y)
            }, n.prototype.plus = function (t) {
                return this.x += t.x, this.y += t.y, this
            }, n.prototype.minus = function (t) {
                return this.x -= t.x, this.y -= t.y, this
            }, n.prototype.invert = function (t) {
                return this.x *= -1, this.y *= -1, this
            }, n.prototype.multiply = n.prototype.multiplyScalar = function (t) {
                return this.x *= t, this.y *= t, this
            }, n.prototype.divideScalar = function (t) {
                if (0 === t) this.x = 0, this.y = 0;
                else {
                    var e = 1 / t;
                    this.x *= e, this.y *= e
                }
                return this
            }, n.prototype.dot = function (t) {
                return this.x * t.x + this.y * t.y
            }, n.prototype.length = function (t) {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, n.prototype.lengthSq = function () {
                return this.x * this.x + this.y * this.y
            }, n.prototype.normalize = function () {
                return this.divideScalar(this.length())
            }, n.prototype.distanceTo = function (t) {
                return Math.sqrt(this.distanceToSq(t))
            }, n.prototype.distanceToSq = function (t) {
                var e = this.x - t.x,
                    i = this.y - t.y;
                return e * e + i * i
            }, n.prototype.set = function (t, e) {
                this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
            }, n.prototype.setX = function (t) {
                return this.x = t, this
            }, n.prototype.setY = function (t) {
                return this.y = t, this
            }, n.prototype.setLength = function (t) {
                var e = this.length();
                return 0 !== e && t !== e && this.multiplyScalar(t / e), this
            }, n.prototype.invert = function (t) {
                return this.x *= -1, this.y *= -1, this
            }, n.prototype.lerp = function (t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
            }, n.prototype.rad = function () {
                return Math.atan2(this.x, this.y)
            }, n.prototype.deg = function () {
                return 180 * this.rad() / Math.PI
            }, n.prototype.equals = function (t) {
                return this.x === t.x && this.y === t.y
            }, n.prototype.rotate = function (t) {
                var e = this.x;
                return this.x = this.x * Math.cos(t) - this.y * Math.sin(t), this.y = e * Math.sin(t) + this.y * Math.cos(t), this
            }, n.projectPoint = function (t, e) {
                var i = new n(0, 0),
                    r = n.project(t.clone().minus(i), e);
                return r.clone().plus(i)
            }, n.project = function (t, e) {
                var i = new n(0, 0),
                    r = t.dot(e);
                return i.x = r / (e.x * e.x + e.y * e.y) * e.x, i.y = r / (e.x * e.x + e.y * e.y) * e.y, i
            }, n.prototype.constructor = n, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function (t, e, i, n, r) {
                this.object1 = t, this.object2 = e, this.penetration = i, this.projection = n, this.ignore = r || !1, this._key = null, this._tickId = null
            };
            n.prototype.getOtherObject = function (t) {
                return t === this.object1 ? this.object2 : this.object1
            }, n.pool = [], i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(48),
                s = i(111),
                a = function (t) {
                    this.type = a.DYNAMIC, this.shape = t, this.passthrough = !1, this.currentSurface = null, this.position = new r.Point, this.timeScale = 1, this.velocity = new s, this.acceleration = new s, this.bounce = 0, this.maxSpeed = 3, this.maxSpeedY = 3, this.gravity = 0, this.friction = .9, this.sleeping = !1, this.solid = !0, this.active = !0, this.remainder = 0, this.flip = 1
                };
            a.prototype.setMaxSpeed = function (t) {
                this.maxSpeed = this.maxSpeedY = t
            }, a.prototype.update = function (t) {
                this.active && (this.velocity.x += this.acceleration.x * t, this.velocity.y += this.acceleration.y * t, this.velocity.y *= this.friction, this.velocity.x *= this.friction, this.velocity.y += this.gravity * this.timeScale, this.velocity.x = o.cap(this.velocity.x, -this.maxSpeed, this.maxSpeed), this.velocity.y = o.cap(this.velocity.y, -this.maxSpeedY, this.maxSpeedY), this.position.x += this.velocity.x * this.timeScale * t, this.position.y += this.velocity.y * this.timeScale * t)
            }, a.prototype.reset = function () {
                this.velocity.x = 0, this.velocity.y = 0, this.acceleration.x = 0, this.acceleration.y = 0, this.remainder = 0, this.active = !0
            }, a.prototype.getDebugView = function (t) {
                var e = this.shape,
                    t = t || colors[this.type];
                return (new r.Graphics).beginFill(t).drawRect(e.x, e.y, e.width, e.height)
            }, a.fromRect = function (t, e, i, n) {
                return new a(new r.Rectangle(t, e, i, n))
            }, a.STATIC = 0, a.KINIMATIC = 1, a.DYNAMIC = 2, a.NONE = 3, colors = [4602488, 16776960, 16711680, 255], n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, n) {
        var r;
        r = function (t, e, r) {
            var o = n(113),
                s = function () { };
            s.solve = function (t, e) {
                for (i = 0; i < t.length; i++) {
                    var n = t[i],
                        r = n.object1,
                        s = n.object2,
                        a = n.projection,
                        h = n.penetration;
                    if (s.body.type === o.DYNAMIC) {
                        r.position.x -= a.x * h * .5, r.position.y -= a.y * h * .5, s.position.x += a.x * h * .5, s.position.y += a.y * h * .5;
                        var l = r.body.velocity.x - s.body.velocity.x,
                            c = r.body.velocity.y - s.body.velocity.y;
                        0 !== a.x ? l * a.x <= 0 && (r.body.velocity.x -= .5 * l, s.body.velocity.x += .5 * l) : c * a.y <= 0 && (r.body.velocity.y -= .5 * c, s.body.velocity.y += .5 * c)
                    } else {
                        r.position.x -= a.x * h, r.position.y -= a.y * h;
                        var l = r.body.velocity.x - s.body.velocity.x,
                            c = r.body.velocity.y - s.body.velocity.y;
                        0 !== a.x ? l * a.x <= 0 && (r.body.velocity.x -= l) : (c * a.y <= 0 && (r.body.velocity.y -= c), r.body.position.x += s.body.velocity.x)
                    }
                }
            }, s.solve3 = function (t) {
                var e = t.object1,
                    i = t.object2,
                    n = t.projection,
                    r = t.penetration;
                if (i.body.type === o.DYNAMIC) {
                    e.position.x -= n.x * r * .5, e.position.y -= n.y * r * .5, i.position.x += n.x * r * .5, i.position.y += n.y * r * .5;
                    var s = e.body.velocity.x - i.body.velocity.x,
                        a = e.body.velocity.y - i.body.velocity.y;
                    0 !== n.x ? s * n.x <= 0 && (e.body.velocity.x -= .5 * s, i.body.velocity.x += .5 * s) : a * n.y <= 0 && (e.body.velocity.y -= .5 * a, i.body.velocity.y += .5 * a)
                } else {
                    e.position.x -= n.x * r, e.position.y -= n.y * r;
                    var s = e.body.velocity.x - i.body.velocity.x,
                        a = e.body.velocity.y - i.body.velocity.y;
                    0 !== n.x ? s * n.x <= 0 && (e.body.velocity.x -= s) : (a * n.y <= 0 && (e.body.velocity.y -= a), e.body.position.x += i.body.velocity.x)
                }
            }, s.solve2 = function (t, e) {
                for (i = 0; i < t.length; i++) {
                    var n = t[i],
                        r = n.object1,
                        s = n.object2,
                        a = n.object2,
                        h = n.projection,
                        l = n.penetration,
                        c = r.body,
                        u = a.body,
                        p = c.shape,
                        d = u.shape,
                        f = p.x + r.position.x,
                        m = p.y + r.position.y,
                        g = d.x + a.position.x,
                        v = d.y + a.position.y,
                        y = m + p.height - v,
                        _ = v + d.height - m,
                        x = f + p.width - g,
                        b = g + d.width - f,
                        w = 999999;
                    if (a.passthrough, x < w && (w = x), b < w && (w = b), y < w && (w = y), _ < w && (w = _), w > 0)
                        if (w == x ? (h.x = -1, h.y = 0) : w == b ? (h.x = 1, h.y = 0) : w == y ? (h.x = 0, h.y = -1) : w == _ && (h.x = 0, h.y = 1), l = -w, s.body.type === o.DYNAMIC) {
                            r.position.x -= h.x * l * .5, r.position.y -= h.y * l * .5, s.position.x += h.x * l * .5, s.position.y += h.y * l * .5;
                            var S = r.body.velocity.x - s.body.velocity.x,
                                T = r.body.velocity.y - s.body.velocity.y;
                            0 !== h.x ? S * h.x <= 0 && (r.body.velocity.x -= .5 * S, s.body.velocity.x += .5 * S) : T * h.y <= 0 && (r.body.velocity.y -= .5 * T, s.body.velocity.y += .5 * T)
                        } else {
                            r.position.x -= h.x * l, r.position.y -= h.y * l;
                            var S = r.body.velocity.x - s.body.velocity.x,
                                T = r.body.velocity.y - s.body.velocity.y;
                            0 !== h.x ? S * h.x <= 0 && (r.body.velocity.x -= S) : (T * h.y <= 0 && (r.body.velocity.y -= T), r.body.position.x += s.body.velocity.x)
                        }
                }
            }, r.exports = s
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(16), 0),
                o = function (t, e, i) {
                    this.hash = [], this.width = 300, this.height = 300, this.size = 96, this.buildHash(), this.cache = {}
                };
            o.prototype.buildHash = function () {
                for (var t = this.width, e = this.height, i = t * e, n = 0; n < i; n++) this.hash[n] = [];
                this.cache = {}
            }, o.prototype.add = function (t) {
                this.cache = {};
                var e, i, n = t.body.shape,
                    r = (t.position.x + n.x) / this.size | 0,
                    o = (t.position.y + n.y) / this.size | 0,
                    s = (t.position.x + n.x + n.width) / this.size | 0,
                    a = (t.position.y + n.y + n.height) / this.size | 0;
                for (i = o; i <= a; i++)
                    for (e = r; e <= s; e++) {
                        var h = i * this.width + e;
                        this.hash[h] && this.hash[h].push(t)
                    }
            }, o.prototype.retrieve = function (t) {
                var e = t.position.x / this.size | 0,
                    i = t.position.y / this.size | 0,
                    n = this.cache[e + ":" + i];
                return n || (n = [], n = this.addSquare(e - 1, i - 1, n), n = this.addSquare(e, i - 1, n), n = this.addSquare(e + 1, i - 1, n), n = this.addSquare(e - 1, i, n), n = this.addSquare(e, i, n), n = this.addSquare(e + 1, i, n), n = this.addSquare(e, i + 1, n), n = this.addSquare(e, i + 1, n), n = this.addSquare(e + 1, i + 1, n), n = this.removeDuplicates(n), this.cache[e + ":" + i] = n), n
            }, o.prototype.addSquare = function (t, e, i) {
                var n = e * this.width + t;
                return this.hash[n] && (i = i.concat(this.hash[n])), i
            };
            var s = [];
            o.prototype.retrieveArea = function (t) {
                var e, i, n = t.body.shape,
                    o = (t.position.x + n.x) / this.size | 0,
                    a = (t.position.y + n.y) / this.size | 0,
                    h = (t.position.x + n.x + n.width) / this.size | 0,
                    l = (t.position.y + n.y + n.height) / this.size | 0,
                    c = s;
                s.length = 0;
                var u = r++,
                    p = 0;
                for (i = a; i <= l; i++)
                    for (e = o; e <= h; e++) {
                        var d = i * this.width + e,
                            f = this.hash[d];
                        if (f)
                            for (var m = 0; m < f.length; m++) {
                                var g = f[m];
                                g._TICK !== u && (g._TICK = u, c[p++] = g)
                            }
                    }
                return c
            }, o.prototype.removeDuplicates = function (t) {
                for (var e = {}, i = [], n = t.length, r = 0, o = 0; o < n; o++) {
                    var s = t[o];
                    1 !== e[s.UID] && (e[s.UID] = 1, i[r++] = s)
                }
                return i
            }, o.prototype.remove = function (t) {
                var e, i, n = t.body.shape,
                    r = (t.position.x + n.x) / this.size | 0,
                    o = (t.position.y + n.y) / this.size | 0,
                    s = (t.position.x + n.x + n.width) / this.size | 0,
                    a = (t.position.y + n.y + n.height) / this.size | 0;
                for (i = o; i <= a; i++)
                    for (e = r; e <= s; e++) {
                        var h = i * this.width + e;
                        if (h > 0) {
                            var l = this.hash[h].indexOf(t);
                            l !== -1 && this.hash[h].splice(l, 1)
                        }
                        this.cache = {}
                    }
            }, o.prototype.empty = function () {
                this.buildHash()
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(12),
                s = i(117),
                a = (i(118), function (t) {
                    r.Container.call(this);
                    var e = t.camera3d || new o.PerspectiveCamera(40, 4, 1, 3e3);
                    e.position.z = 800;
                    var i = new o.Scene;
                    this.scene = i, this.camera = e, this.camera.position.x = 0, this.camera.position.y = 0, this.threeRenderer = null, this.w = -1, this.h = -1
                });
            a.prototype = Object.create(r.Container.prototype), a.prototype._renderWebGL = function (t) {
                this.camera.update(), this.threeRenderer || (this.threeRenderer = new o.WebGLRenderer({
                    context: t.gl
                }), this.threeRenderer.setSize(800, 600), this.threeRenderer.autoClear = !1, this.threeRenderer.autoClearColor = !1), this.threeRenderer.resetGLState(), this.threeRenderer.render(this.scene, this.camera), t.reset()
            }, a.prototype.init = function (t) { }, a.prototype.preupdate = function (t) { }, a.prototype.update = function () { }, a.prototype.postupdate = function (t) { }, a.prototype.add = function (t) {
                t.view3d && this.scene.add(t.view3d)
            }, a.prototype.remove = function (t) {
                t.view3d && this.scene.remove(t.view3d)
            }, a.prototype.clear = function () {
                for (var t in this.layers) this.layers[t].removeChildren()
            }, a.prototype.addLayer = function (t) {
                this.layers[t] = new r.Container, this.activeItemsContainer.addChild(this.layers[t])
            }, a.prototype.bringToFront = function (t) {
                var e = this.layers[t.view.layer],
                    i = e.children.indexOf(t.view);
                i != -1 && (e.children.splice(i, 1), e.children.push(t.view))
            };
            var h = new r.Point;
            a.prototype.toScreenPosition = function (t) {
                return s.toScreenPosition(t.view3d, this.w, this.h, this.camera, h)
            }, a.prototype.resize = function (t, e) {
                this.w === t && this.h === e || (this.w = t, this.h = e, this.threeRenderer, this.camera.aspect = t / e, this.camera.updateProjectionMatrix())
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(12),
                s = {},
                a = {},
                h = new o.Texture;
            s.getMesh = function (t, e, i, n) {
                var a = new o.MeshBasicMaterial({
                    map: h
                });
                a.transparent = !0, a.alphaTest = .25, a.side = o.DoubleSide;
                var l = new o.PlaneGeometry(200, 200),
                    c = new o.Mesh(l, a);
                if (t) {
                    var u = r.Texture.from(t);
                    s.setUvs(c, u, e, i, n)
                }
                return c
            }, s.setUvs = function (t, e, i, n, r) {
                var s = e.baseTexture.uid;
                if (!a[s]) {
                    var h = new o.Texture;
                    h.image = e.baseTexture.source, h.flipY = !1, h.needsUpdate = !0, h.wrapS = o.ClampToEdgeWrapping, h.wrapT = o.ClampToEdgeWrapping, h.minFilter = o.LinearFilter, h.maxFilter = o.LinearFilter, a[s] = h
                }
                var l = a[s],
                    c = t.geometry;
                t.material.map = l;
                var u = c.faceVertexUvs[0],
                    p = u[0],
                    d = u[1];
                p[0].x = e._uvs.x3, p[0].y = e._uvs.y3, p[1].x = e._uvs.x0, p[1].y = e._uvs.y0, p[2].x = e._uvs.x2, p[2].y = e._uvs.y2, d[0].x = e._uvs.x0, d[0].y = e._uvs.y0, d[1].x = e._uvs.x1, d[1].y = e._uvs.y1, d[2].x = e._uvs.x2, d[2].y = e._uvs.y2, c.uvsNeedUpdate = !0;
                c.vertices;
                i = i || .5, n = n || .85;
                var f = e.orig,
                    m = e.trim;
                if (m) t.position.x = m.width + 2 * m.x, t.position.x -= f.width * i * 2, t.position.y = m.height + 2 * m.y, t.position.y -= f.height * n * 2, t.scale.x = m.width / 100, t.scale.y = m.height / 100;
                else {
                    var m = e._frame;
                    t.scale.x = m.width / 100, t.scale.y = m.height / 100, t.position.x = m.width / 2 - f.width * i * 2, t.position.y = m.height / 2 - f.height * n * 2
                }
            };
            var l = new o.Vector3;
            s.toScreenPosition = function (t, e, i, n, r) {
                var o = .5 * e,
                    s = .5 * i;
                return t.updateMatrixWorld(), l.setFromMatrixPosition(t.matrixWorld), l.project(n), l.x = l.x * o + o, l.y = -(l.y * s) + s, r.x = l.x, r.y = l.y, r
            }, s.getPixiTexture = function (t) {
                var e = window.renderer.extract.image(t),
                    i = new o.Texture;
                return i.image = e, i.wrapS = o.ClampToEdgeWrapping, i.wrapT = o.ClampToEdgeWrapping, i.minFilter = o.LinearFilter, i.maxFilter = o.LinearFilter, i.needsUpdate = !0, i
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        t.exports = i(119), t.exports.color = i(120)
    },
    function (t, e) {
        var i = t.exports = i || {};
        i.gui = i.gui || {}, i.utils = i.utils || {}, i.controllers = i.controllers || {}, i.dom = i.dom || {}, i.color = i.color || {}, i.utils.css = function () {
            return {
                load: function (t, e) {
                    e = e || document;
                    var i = e.createElement("link");
                    i.type = "text/css", i.rel = "stylesheet", i.href = t, e.getElementsByTagName("head")[0].appendChild(i)
                },
                inject: function (t, e) {
                    e = e || document;
                    var i = document.createElement("style");
                    i.type = "text/css", i.innerHTML = t, e.getElementsByTagName("head")[0].appendChild(i)
                }
            }
        }(), i.utils.common = function () {
            var t = Array.prototype.forEach,
                e = Array.prototype.slice;
            return {
                BREAK: {},
                extend: function (t) {
                    return this.each(e.call(arguments, 1), function (e) {
                        for (var i in e) this.isUndefined(e[i]) || (t[i] = e[i])
                    }, this), t
                },
                defaults: function (t) {
                    return this.each(e.call(arguments, 1), function (e) {
                        for (var i in e) this.isUndefined(t[i]) && (t[i] = e[i])
                    }, this), t
                },
                compose: function () {
                    var t = e.call(arguments);
                    return function () {
                        for (var i = e.call(arguments), n = t.length - 1; n >= 0; n--) i = [t[n].apply(this, i)];
                        return i[0]
                    }
                },
                each: function (e, i, n) {
                    if (t && e.forEach === t) e.forEach(i, n);
                    else if (e.length === e.length + 0) {
                        for (var r = 0, o = e.length; r < o; r++)
                            if (r in e && i.call(n, e[r], r) === this.BREAK) return
                    } else
                        for (var r in e)
                            if (i.call(n, e[r], r) === this.BREAK) return
                },
                defer: function (t) {
                    setTimeout(t, 0)
                },
                toArray: function (t) {
                    return t.toArray ? t.toArray() : e.call(t)
                },
                isUndefined: function (t) {
                    return void 0 === t
                },
                isNull: function (t) {
                    return null === t
                },
                isNaN: function (t) {
                    return t !== t
                },
                isArray: Array.isArray || function (t) {
                    return t.constructor === Array
                },
                isObject: function (t) {
                    return t === Object(t)
                },
                isNumber: function (t) {
                    return t === t + 0
                },
                isString: function (t) {
                    return t === t + ""
                },
                isBoolean: function (t) {
                    return t === !1 || t === !0
                },
                isFunction: function (t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
            }
        }(), i.controllers.Controller = function (t) {
            var e = function (t, e) {
                this.initialValue = t[e], this.domElement = document.createElement("div"), this.object = t, this.property = e, this.__onChange = void 0, this.__onFinishChange = void 0
            };
            return t.extend(e.prototype, {
                onChange: function (t) {
                    return this.__onChange = t, this
                },
                onFinishChange: function (t) {
                    return this.__onFinishChange = t, this
                },
                setValue: function (t) {
                    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
                },
                getValue: function () {
                    return this.object[this.property]
                },
                updateDisplay: function () {
                    return this
                },
                isModified: function () {
                    return this.initialValue !== this.getValue()
                }
            }), e
        }(i.utils.common), i.dom.dom = function (t) {
            function e(e) {
                if ("0" === e || t.isUndefined(e)) return 0;
                var i = e.match(r);
                return t.isNull(i) ? 0 : parseFloat(i[1])
            }
            var i = {
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            },
                n = {};
            t.each(i, function (e, i) {
                t.each(e, function (t) {
                    n[t] = i
                })
            });
            var r = /(\d+(\.\d+)?)px/,
                o = {
                    makeSelectable: function (t, e) {
                        void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () {
                            return !1
                        } : function () { }, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
                    },
                    makeFullscreen: function (e, i, n) {
                        t.isUndefined(i) && (i = !0), t.isUndefined(n) && (n = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), n && (e.style.top = 0, e.style.bottom = 0)
                    },
                    fakeEvent: function (e, i, r, o) {
                        r = r || {};
                        var s = n[i];
                        if (!s) throw new Error("Event type " + i + " not supported.");
                        var a = document.createEvent(s);
                        switch (s) {
                            case "MouseEvents":
                                var h = r.x || r.clientX || 0,
                                    l = r.y || r.clientY || 0;
                                a.initMouseEvent(i, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, h, l, !1, !1, !1, !1, 0, null);
                                break;
                            case "KeyboardEvents":
                                var c = a.initKeyboardEvent || a.initKeyEvent;
                                t.defaults(r, {
                                    cancelable: !0,
                                    ctrlKey: !1,
                                    altKey: !1,
                                    shiftKey: !1,
                                    metaKey: !1,
                                    keyCode: void 0,
                                    charCode: void 0
                                }), c(i, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                                break;
                            default:
                                a.initEvent(i, r.bubbles || !1, r.cancelable || !0)
                        }
                        t.defaults(a, o), e.dispatchEvent(a)
                    },
                    bind: function (t, e, i, n) {
                        return n = n || !1, t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i), o
                    },
                    unbind: function (t, e, i, n) {
                        return n = n || !1, t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i), o
                    },
                    addClass: function (t, e) {
                        if (void 0 === t.className) t.className = e;
                        else if (t.className !== e) {
                            var i = t.className.split(/ +/);
                            i.indexOf(e) == -1 && (i.push(e), t.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                        }
                        return o
                    },
                    removeClass: function (t, e) {
                        if (e)
                            if (void 0 === t.className);
                            else if (t.className === e) t.removeAttribute("class");
                            else {
                                var i = t.className.split(/ +/),
                                    n = i.indexOf(e);
                                n != -1 && (i.splice(n, 1), t.className = i.join(" "))
                            } else t.className = void 0;
                        return o
                    },
                    hasClass: function (t, e) {
                        return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
                    },
                    getWidth: function (t) {
                        var i = getComputedStyle(t);
                        return e(i["border-left-width"]) + e(i["border-right-width"]) + e(i["padding-left"]) + e(i["padding-right"]) + e(i.width)
                    },
                    getHeight: function (t) {
                        var i = getComputedStyle(t);
                        return e(i["border-top-width"]) + e(i["border-bottom-width"]) + e(i["padding-top"]) + e(i["padding-bottom"]) + e(i.height)
                    },
                    getOffset: function (t) {
                        var e = {
                            left: 0,
                            top: 0
                        };
                        if (t.offsetParent)
                            do e.left += t.offsetLeft, e.top += t.offsetTop; while (t = t.offsetParent);
                        return e
                    },
                    isActive: function (t) {
                        return t === document.activeElement && (t.type || t.href)
                    }
                };
            return o
        }(i.utils.common), i.controllers.OptionController = function (t, e, i) {
            var n = function (t, r, o) {
                n.superclass.call(this, t, r);
                var s = this;
                if (this.__select = document.createElement("select"), i.isArray(o)) {
                    var a = {};
                    i.each(o, function (t) {
                        a[t] = t
                    }), o = a
                }
                i.each(o, function (t, e) {
                    var i = document.createElement("option");
                    i.innerHTML = e, i.setAttribute("value", t), s.__select.appendChild(i)
                }), this.updateDisplay(), e.bind(this.__select, "change", function () {
                    var t = this.options[this.selectedIndex].value;
                    s.setValue(t)
                }), this.domElement.appendChild(this.__select)
            };
            return n.superclass = t, i.extend(n.prototype, t.prototype, {
                setValue: function (t) {
                    var e = n.superclass.prototype.setValue.call(this, t);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e
                },
                updateDisplay: function () {
                    return this.__select.value = this.getValue(), n.superclass.prototype.updateDisplay.call(this)
                }
            }), n
        }(i.controllers.Controller, i.dom.dom, i.utils.common), i.controllers.NumberController = function (t, e) {
            function i(t) {
                return t = t.toString(), t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
            }
            var n = function (t, r, o) {
                n.superclass.call(this, t, r), o = o || {}, this.__min = o.min, this.__max = o.max, this.__step = o.step, e.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = i(this.__impliedStep)
            };
            return n.superclass = t, e.extend(n.prototype, t.prototype, {
                setValue: function (t) {
                    return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && t % this.__step != 0 && (t = Math.round(t / this.__step) * this.__step), n.superclass.prototype.setValue.call(this, t)
                },
                min: function (t) {
                    return this.__min = t, this
                },
                max: function (t) {
                    return this.__max = t, this
                },
                step: function (t) {
                    return this.__step = t, this
                }
            }), n
        }(i.controllers.Controller, i.utils.common), i.controllers.NumberControllerBox = function (t, e, i) {
            function n(t, e) {
                var i = Math.pow(10, e);
                return Math.round(t * i) / i
            }
            var r = function (t, n, o) {
                function s() {
                    var t = parseFloat(p.__input.value);
                    i.isNaN(t) || p.setValue(t)
                }

                function a() {
                    s(), p.__onFinishChange && p.__onFinishChange.call(p, p.getValue())
                }

                function h(t) {
                    e.bind(window, "mousemove", l), e.bind(window, "mouseup", c), u = t.clientY
                }

                function l(t) {
                    var e = u - t.clientY;
                    p.setValue(p.getValue() + e * p.__impliedStep), u = t.clientY
                }

                function c() {
                    e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", c)
                }
                this.__truncationSuspended = !1, r.superclass.call(this, t, n, o);
                var u, p = this;
                this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "change", s), e.bind(this.__input, "blur", a), e.bind(this.__input, "mousedown", h), e.bind(this.__input, "keydown", function (t) {
                    13 === t.keyCode && (p.__truncationSuspended = !0, this.blur(), p.__truncationSuspended = !1)
                }), this.updateDisplay(), this.domElement.appendChild(this.__input)
            };
            return r.superclass = t, i.extend(r.prototype, t.prototype, {
                updateDisplay: function () {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : n(this.getValue(), this.__precision), r.superclass.prototype.updateDisplay.call(this)
                }
            }), r
        }(i.controllers.NumberController, i.dom.dom, i.utils.common), i.controllers.NumberControllerSlider = function (t, e, i, n, r) {
            function o(t, e, i, n, r) {
                return n + (r - n) * ((t - e) / (i - e))
            }
            var s = function (t, i, n, r, a) {
                function h(t) {
                    e.bind(window, "mousemove", l), e.bind(window, "mouseup", c), l(t)
                }

                function l(t) {
                    t.preventDefault();
                    var i = e.getOffset(u.__background),
                        n = e.getWidth(u.__background);
                    return u.setValue(o(t.clientX, i.left, i.left + n, u.__min, u.__max)), !1
                }

                function c() {
                    e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", c), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
                }
                s.superclass.call(this, t, i, {
                    min: n,
                    max: r,
                    step: a
                });
                var u = this;
                this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), e.bind(this.__background, "mousedown", h), e.addClass(this.__background, "slider"), e.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
            };
            return s.superclass = t, s.useDefaultStyles = function () {
                i.inject(r)
            }, n.extend(s.prototype, t.prototype, {
                updateDisplay: function () {
                    var t = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * t + "%", s.superclass.prototype.updateDisplay.call(this)
                }
            }), s
        }(i.controllers.NumberController, i.dom.dom, i.utils.css, i.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), i.controllers.FunctionController = function (t, e, i) {
            var n = function (t, i, r) {
                n.superclass.call(this, t, i);
                var o = this;
                this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === r ? "Fire" : r, e.bind(this.__button, "click", function (t) {
                    return t.preventDefault(), o.fire(), !1
                }), e.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
            };
            return n.superclass = t, i.extend(n.prototype, t.prototype, {
                fire: function () {
                    this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
                }
            }), n
        }(i.controllers.Controller, i.dom.dom, i.utils.common), i.controllers.BooleanController = function (t, e, i) {
            var n = function (t, i) {
                function r() {
                    o.setValue(!o.__prev)
                }
                n.superclass.call(this, t, i);
                var o = this;
                this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), e.bind(this.__checkbox, "change", r, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
            };
            return n.superclass = t, i.extend(n.prototype, t.prototype, {
                setValue: function (t) {
                    var e = n.superclass.prototype.setValue.call(this, t);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e
                },
                updateDisplay: function () {
                    return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, n.superclass.prototype.updateDisplay.call(this)
                }
            }), n
        }(i.controllers.Controller, i.dom.dom, i.utils.common), i.color.toString = function (t) {
            return function (e) {
                if (1 == e.a || t.isUndefined(e.a)) {
                    for (var i = e.hex.toString(16) ; i.length < 6;) i = "0" + i;
                    return "#" + i
                }
                return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
            }
        }(i.utils.common), i.color.interpret = function (t, e) {
            var i, n, r = function () {
                n = !1;
                var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
                return e.each(o, function (r) {
                    if (r.litmus(t)) return e.each(r.conversions, function (r, o) {
                        if (i = r.read(t), n === !1 && i !== !1) return n = i, i.conversionName = o, i.conversion = r, e.BREAK
                    }), e.BREAK
                }), n
            },
                o = [{
                    litmus: e.isString,
                    conversions: {
                        THREE_CHAR_HEX: {
                            read: function (t) {
                                var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                return null !== e && {
                                    space: "HEX",
                                    hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
                                }
                            },
                            write: t
                        },
                        SIX_CHAR_HEX: {
                            read: function (t) {
                                var e = t.match(/^#([A-F0-9]{6})$/i);
                                return null !== e && {
                                    space: "HEX",
                                    hex: parseInt("0x" + e[1].toString())
                                }
                            },
                            write: t
                        },
                        CSS_RGB: {
                            read: function (t) {
                                var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null !== e && {
                                    space: "RGB",
                                    r: parseFloat(e[1]),
                                    g: parseFloat(e[2]),
                                    b: parseFloat(e[3])
                                }
                            },
                            write: t
                        },
                        CSS_RGBA: {
                            read: function (t) {
                                var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                                return null !== e && {
                                    space: "RGB",
                                    r: parseFloat(e[1]),
                                    g: parseFloat(e[2]),
                                    b: parseFloat(e[3]),
                                    a: parseFloat(e[4])
                                }
                            },
                            write: t
                        }
                    }
                }, {
                    litmus: e.isNumber,
                    conversions: {
                        HEX: {
                            read: function (t) {
                                return {
                                    space: "HEX",
                                    hex: t,
                                    conversionName: "HEX"
                                }
                            },
                            write: function (t) {
                                return t.hex
                            }
                        }
                    }
                }, {
                    litmus: e.isArray,
                    conversions: {
                        RGB_ARRAY: {
                            read: function (t) {
                                return 3 == t.length && {
                                    space: "RGB",
                                    r: t[0],
                                    g: t[1],
                                    b: t[2]
                                }
                            },
                            write: function (t) {
                                return [t.r, t.g, t.b]
                            }
                        },
                        RGBA_ARRAY: {
                            read: function (t) {
                                return 4 == t.length && {
                                    space: "RGB",
                                    r: t[0],
                                    g: t[1],
                                    b: t[2],
                                    a: t[3]
                                }
                            },
                            write: function (t) {
                                return [t.r, t.g, t.b, t.a]
                            }
                        }
                    }
                }, {
                    litmus: e.isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a)) && {
                                    space: "RGB",
                                    r: t.r,
                                    g: t.g,
                                    b: t.b,
                                    a: t.a
                                }
                            },
                            write: function (t) {
                                return {
                                    r: t.r,
                                    g: t.g,
                                    b: t.b,
                                    a: t.a
                                }
                            }
                        },
                        RGB_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b)) && {
                                    space: "RGB",
                                    r: t.r,
                                    g: t.g,
                                    b: t.b
                                }
                            },
                            write: function (t) {
                                return {
                                    r: t.r,
                                    g: t.g,
                                    b: t.b
                                }
                            }
                        },
                        HSVA_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a)) && {
                                    space: "HSV",
                                    h: t.h,
                                    s: t.s,
                                    v: t.v,
                                    a: t.a
                                }
                            },
                            write: function (t) {
                                return {
                                    h: t.h,
                                    s: t.s,
                                    v: t.v,
                                    a: t.a
                                }
                            }
                        },
                        HSV_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v)) && {
                                    space: "HSV",
                                    h: t.h,
                                    s: t.s,
                                    v: t.v
                                }
                            },
                            write: function (t) {
                                return {
                                    h: t.h,
                                    s: t.s,
                                    v: t.v
                                }
                            }
                        }
                    }
                }];
            return r
        }(i.color.toString, i.utils.common), i.GUI = i.gui.GUI = function (t, e, i, n, r, o, s, a, h, l, c, u, p, d, f) {
            function m(t, e, i, o) {
                if (void 0 === e[i]) throw new Error("Object " + e + ' has no property "' + i + '"');
                var s;
                if (o.color) s = new c(e, i);
                else {
                    var a = [e, i].concat(o.factoryArgs);
                    s = n.apply(t, a)
                }
                o.before instanceof r && (o.before = o.before.__li), y(t, s), d.addClass(s.domElement, "c");
                var h = document.createElement("span");
                d.addClass(h, "property-name"), h.innerHTML = s.property;
                var l = document.createElement("div");
                l.appendChild(h), l.appendChild(s.domElement);
                var u = g(t, l, o.before);
                return d.addClass(u, N.CLASS_CONTROLLER_ROW), d.addClass(u, typeof s.getValue()), v(t, u, s), t.__controllers.push(s), s
            }

            function g(t, e, i) {
                var n = document.createElement("li");
                return e && n.appendChild(e), i ? t.__ul.insertBefore(n, params.before) : t.__ul.appendChild(n), t.onResize(), n
            }

            function v(t, e, i) {
                if (i.__li = e, i.__gui = t, f.extend(i, {
                    options: function (e) {
                        return arguments.length > 1 ? (i.remove(), m(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [f.toArray(arguments)]
                })) : f.isArray(e) || f.isObject(e) ? (i.remove(), m(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [e]
                })) : void 0
                },
                    name: function (t) {
                        return i.__li.firstElementChild.firstElementChild.innerHTML = t, i
                },
                    listen: function () {
                        return i.__gui.listen(i), i
                },
                    remove: function () {
                        return i.__gui.remove(i), i
                }
                }), i instanceof h) {
                    var n = new a(i.object, i.property, {
                        min: i.__min,
                        max: i.__max,
                        step: i.__step
                    });
                    f.each(["updateDisplay", "onChange", "onFinishChange"], function (t) {
                        var e = i[t],
                            r = n[t];
                        i[t] = n[t] = function () {
                            var t = Array.prototype.slice.call(arguments);
                            return e.apply(i, t), r.apply(n, t)
                        }
                    }), d.addClass(e, "has-slider"), i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
                } else if (i instanceof a) {
                    var r = function (e) {
                        return f.isNumber(i.__min) && f.isNumber(i.__max) ? (i.remove(), m(t, i.object, i.property, {
                            before: i.__li.nextElementSibling,
                            factoryArgs: [i.__min, i.__max, i.__step]
                        })) : e
                    };
                    i.min = f.compose(r, i.min), i.max = f.compose(r, i.max)
                } else i instanceof o ? (d.bind(e, "click", function () {
                    d.fakeEvent(i.__checkbox, "click")
                }), d.bind(i.__checkbox, "click", function (t) {
                    t.stopPropagation()
                })) : i instanceof s ? (d.bind(e, "click", function () {
                    d.fakeEvent(i.__button, "click")
                }), d.bind(e, "mouseover", function () {
                    d.addClass(i.__button, "hover")
                }), d.bind(e, "mouseout", function () {
                    d.removeClass(i.__button, "hover")
                })) : i instanceof c && (d.addClass(e, "color"), i.updateDisplay = f.compose(function (t) {
                    return e.style.borderLeftColor = i.__color.toString(), t
                }, i.updateDisplay), i.updateDisplay());
                i.setValue = f.compose(function (e) {
                    return t.getRoot().__preset_select && i.isModified() && E(t.getRoot(), !0), e
                }, i.setValue)
            }

            function y(t, e) {
                var i = t.getRoot(),
                    n = i.__rememberedObjects.indexOf(e.object);
                if (n != -1) {
                    var r = i.__rememberedObjectIndecesToControllers[n];
                    if (void 0 === r && (r = {}, i.__rememberedObjectIndecesToControllers[n] = r), r[e.property] = e, i.load && i.load.remembered) {
                        var o, s = i.load.remembered;
                        if (s[t.preset]) o = s[t.preset];
                        else {
                            if (!s[I]) return;
                            o = s[I]
                        } if (o[n] && void 0 !== o[n][e.property]) {
                            var a = o[n][e.property];
                            e.initialValue = a, e.setValue(a)
                        }
                    }
                }
            }

            function _(t, e) {
                return document.location.href + "." + e
            }

            function x(t) {
                function e() {
                    l.style.display = t.useLocalStorage ? "block" : "none"
                }
                var i = t.__save_row = document.createElement("li");
                d.addClass(t.domElement, "has-save"), t.__ul.insertBefore(i, t.__ul.firstChild), d.addClass(i, "save-row");
                var n = document.createElement("span");
                n.innerHTML = "&nbsp;", d.addClass(n, "button gears");
                var r = document.createElement("span");
                r.innerHTML = "Save", d.addClass(r, "button"), d.addClass(r, "save");
                var o = document.createElement("span");
                o.innerHTML = "New", d.addClass(o, "button"), d.addClass(o, "save-as");
                var s = document.createElement("span");
                s.innerHTML = "Revert", d.addClass(s, "button"), d.addClass(s, "revert");
                var a = t.__preset_select = document.createElement("select");
                if (t.load && t.load.remembered ? f.each(t.load.remembered, function (e, i) {
                    T(t, i, i == t.preset)
                }) : T(t, I, !1), d.bind(a, "change", function () {
                    for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                    t.preset = this.value
                }), i.appendChild(a), i.appendChild(n), i.appendChild(r), i.appendChild(o), i.appendChild(s), D) {
                    var h = document.getElementById("dg-save-locally"),
                        l = document.getElementById("dg-local-explain");
                    h.style.display = "block";
                    var c = document.getElementById("dg-local-storage");
                    "true" === localStorage.getItem(_(t, "isLocal")) && c.setAttribute("checked", "checked"), e(), d.bind(c, "change", function () {
                        t.useLocalStorage = !t.useLocalStorage,
                            e()
                    })
                }
                var u = document.getElementById("dg-new-constructor");
                d.bind(u, "keydown", function (t) {
                    !t.metaKey || 67 !== t.which && 67 != t.keyCode || C.hide()
                }), d.bind(n, "click", function () {
                    u.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), C.show(), u.focus(), u.select()
                }), d.bind(r, "click", function () {
                    t.save()
                }), d.bind(o, "click", function () {
                    var e = prompt("Enter a new preset name.");
                    e && t.saveAs(e)
                }), d.bind(s, "click", function () {
                    t.revert()
                })
            }

            function b(t) {
                function e(e) {
                    return e.preventDefault(), r = e.clientX, d.addClass(t.__closeButton, N.CLASS_DRAG), d.bind(window, "mousemove", i), d.bind(window, "mouseup", n), !1
                }

                function i(e) {
                    return e.preventDefault(), t.width += r - e.clientX, t.onResize(), r = e.clientX, !1
                }

                function n() {
                    d.removeClass(t.__closeButton, N.CLASS_DRAG), d.unbind(window, "mousemove", i), d.unbind(window, "mouseup", n)
                }
                t.__resize_handle = document.createElement("div"), f.extend(t.__resize_handle.style, {
                    width: "6px",
                    marginLeft: "-3px",
                    height: "200px",
                    cursor: "ew-resize",
                    position: "absolute"
                });
                var r;
                d.bind(t.__resize_handle, "mousedown", e), d.bind(t.__closeButton, "mousedown", e), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
            }

            function w(t, e) {
                t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
            }

            function S(t, e) {
                var i = {};
                return f.each(t.__rememberedObjects, function (n, r) {
                    var o = {},
                        s = t.__rememberedObjectIndecesToControllers[r];
                    f.each(s, function (t, i) {
                        o[i] = e ? t.initialValue : t.getValue()
                    }), i[r] = o
                }), i
            }

            function T(t, e, i) {
                var n = document.createElement("option");
                n.innerHTML = e, n.value = e, t.__preset_select.appendChild(n), i && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
            }

            function M(t) {
                for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].value == t.preset && (t.__preset_select.selectedIndex = e)
            }

            function E(t, e) {
                var i = t.__preset_select[t.__preset_select.selectedIndex];
                e ? i.innerHTML = i.value + "*" : i.innerHTML = i.value
            }

            function A(t) {
                0 != t.length && u(function () {
                    A(t)
                }), f.each(t, function (t) {
                    t.updateDisplay()
                })
            }
            t.inject(i);
            var C, L, R = "dg",
                P = 72,
                O = 20,
                I = "Default",
                D = function () {
                    try {
                        return "localStorage" in window && null !== window.localStorage
                    } catch (t) {
                        return !1
                    }
                }(),
                B = !0,
                k = !1,
                F = [],
                N = function (t) {
                    function e() {
                        localStorage.setItem(_(n, "gui"), JSON.stringify(n.getSaveObject()))
                    }

                    function i() {
                        var t = n.getRoot();
                        t.width += 1, f.defer(function () {
                            t.width -= 1
                        })
                    }
                    var n = this;
                    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), d.addClass(this.domElement, R), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = f.defaults(t, {
                        autoPlace: !0,
                        width: N.DEFAULT_WIDTH
                    }), t = f.defaults(t, {
                        resizable: t.autoPlace,
                        hideable: t.autoPlace
                    }), f.isUndefined(t.load) ? t.load = {
                        preset: I
                    } : t.preset && (t.load.preset = t.preset), f.isUndefined(t.parent) && t.hideable && F.push(this), t.resizable = f.isUndefined(t.parent) && t.resizable, t.autoPlace && f.isUndefined(t.scrollable) && (t.scrollable = !0);
                    var r = D && "true" === localStorage.getItem(_(this, "isLocal"));
                    if (Object.defineProperties(this, {
                        parent: {
                        get: function () {
                                return t.parent
                    }
                    },
                        scrollable: {
                        get: function () {
                                return t.scrollable
                    }
                    },
                        autoPlace: {
                        get: function () {
                                return t.autoPlace
                    }
                    },
                        preset: {
                        get: function () {
                                return n.parent ? n.getRoot().preset : t.load.preset
                    },
                        set: function (e) {
                                n.parent ? n.getRoot().preset = e : t.load.preset = e, M(this), n.revert()
                    }
                    },
                        width: {
                        get: function () {
                                return t.width
                    },
                        set: function (e) {
                                t.width = e, w(n, e)
                    }
                    },
                        name: {
                        get: function () {
                                return t.name
                    },
                        set: function (e) {
                                t.name = e, s && (s.innerHTML = t.name)
                    }
                    },
                        closed: {
                        get: function () {
                                return t.closed
                    },
                        set: function (e) {
                                t.closed = e, t.closed ? d.addClass(n.__ul, N.CLASS_CLOSED) : d.removeClass(n.__ul, N.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? N.TEXT_OPEN : N.TEXT_CLOSED)
                    }
                    },
                        load: {
                        get: function () {
                                return t.load
                    }
                    },
                        useLocalStorage: {
                        get: function () {
                                return r
                    },
                        set: function (t) {
                                D && (r = t, t ? d.bind(window, "unload", e) : d.unbind(window, "unload", e), localStorage.setItem(_(n, "isLocal"), t))
                    }
                    }
                    }), f.isUndefined(t.parent)) {
                        if (t.closed = !1, d.addClass(this.domElement, N.CLASS_MAIN), d.makeSelectable(this.domElement, !1), D && r) {
                            n.useLocalStorage = !0;
                            var o = localStorage.getItem(_(this, "gui"));
                            o && (t.load = JSON.parse(o))
                        }
                        this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = N.TEXT_CLOSED, d.addClass(this.__closeButton, N.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), d.bind(this.__closeButton, "click", function () {
                            n.closed = !n.closed
                        })
                    } else {
                        void 0 === t.closed && (t.closed = !0);
                        var s = document.createTextNode(t.name);
                        d.addClass(s, "controller-name");
                        var a = g(n, s),
                            h = function (t) {
                                return t.preventDefault(), n.closed = !n.closed, !1
                            };
                        d.addClass(this.__ul, N.CLASS_CLOSED), d.addClass(a, "title"), d.bind(a, "click", h), t.closed || (this.closed = !1)
                    }
                    t.autoPlace && (f.isUndefined(t.parent) && (B && (L = document.createElement("div"), d.addClass(L, R), d.addClass(L, N.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(L), B = !1), L.appendChild(this.domElement), d.addClass(this.domElement, N.CLASS_AUTO_PLACE)), this.parent || w(n, t.width)), d.bind(window, "resize", function () {
                        n.onResize()
                    }), d.bind(this.__ul, "webkitTransitionEnd", function () {
                        n.onResize()
                    }), d.bind(this.__ul, "transitionend", function () {
                        n.onResize()
                    }), d.bind(this.__ul, "oTransitionEnd", function () {
                        n.onResize()
                    }), this.onResize(), t.resizable && b(this);
                    n.getRoot();
                    t.parent || i()
                };
            return N.toggleHide = function () {
                k = !k, f.each(F, function (t) {
                    t.domElement.style.zIndex = k ? -999 : 999, t.domElement.style.opacity = k ? 0 : 1
                })
            }, N.CLASS_AUTO_PLACE = "a", N.CLASS_AUTO_PLACE_CONTAINER = "ac", N.CLASS_MAIN = "main", N.CLASS_CONTROLLER_ROW = "cr", N.CLASS_TOO_TALL = "taller-than-window", N.CLASS_CLOSED = "closed", N.CLASS_CLOSE_BUTTON = "close-button", N.CLASS_DRAG = "drag", N.DEFAULT_WIDTH = 245, N.TEXT_CLOSED = "Close Controls", N.TEXT_OPEN = "Open Controls", d.bind(window, "keydown", function (t) {
                "text" === document.activeElement.type || t.which !== P && t.keyCode != P || N.toggleHide()
            }, !1), f.extend(N.prototype, {
                add: function (t, e) {
                    return m(this, t, e, {
                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                    })
                },
                addColor: function (t, e) {
                    return m(this, t, e, {
                        color: !0
                    })
                },
                remove: function (t) {
                    this.__ul.removeChild(t.__li), this.__controllers.slice(this.__controllers.indexOf(t), 1);
                    var e = this;
                    f.defer(function () {
                        e.onResize()
                    })
                },
                destroy: function () {
                    this.autoPlace && L.removeChild(this.domElement)
                },
                addFolder: function (t) {
                    if (void 0 !== this.__folders[t]) throw new Error('You already have a folder in this GUI by the name "' + t + '"');
                    var e = {
                        name: t,
                        parent: this
                    };
                    e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
                    var i = new N(e);
                    this.__folders[t] = i;
                    var n = g(this, i.domElement);
                    return d.addClass(n, "folder"), i
                },
                open: function () {
                    this.closed = !1
                },
                close: function () {
                    this.closed = !0
                },
                onResize: function () {
                    var t = this.getRoot();
                    if (t.scrollable) {
                        var e = d.getOffset(t.__ul).top,
                            i = 0;
                        f.each(t.__ul.childNodes, function (e) {
                            t.autoPlace && e === t.__save_row || (i += d.getHeight(e))
                        }), window.innerHeight - e - O < i ? (d.addClass(t.domElement, N.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - O + "px") : (d.removeClass(t.domElement, N.CLASS_TOO_TALL), t.__ul.style.height = "auto")
                    }
                    t.__resize_handle && f.defer(function () {
                        t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
                    }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
                },
                remember: function () {
                    if (f.isUndefined(C) && (C = new p, C.domElement.innerHTML = e), this.parent) throw new Error("You can only call remember on a top level GUI.");
                    var t = this;
                    f.each(Array.prototype.slice.call(arguments), function (e) {
                        0 == t.__rememberedObjects.length && x(t), t.__rememberedObjects.indexOf(e) == -1 && t.__rememberedObjects.push(e)
                    }), this.autoPlace && w(this, this.width)
                },
                getRoot: function () {
                    for (var t = this; t.parent;) t = t.parent;
                    return t
                },
                getSaveObject: function () {
                    var t = this.load;
                    return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = S(this)), t.folders = {}, f.each(this.__folders, function (e, i) {
                        t.folders[i] = e.getSaveObject()
                    }), t
                },
                save: function () {
                    this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = S(this), E(this, !1)
                },
                saveAs: function (t) {
                    this.load.remembered || (this.load.remembered = {}, this.load.remembered[I] = S(this, !0)), this.load.remembered[t] = S(this), this.preset = t, T(this, t, !0)
                },
                revert: function (t) {
                    f.each(this.__controllers, function (e) {
                        this.getRoot().load.remembered ? y(t || this.getRoot(), e) : e.setValue(e.initialValue)
                    }, this), f.each(this.__folders, function (t) {
                        t.revert(t)
                    }), t || E(this.getRoot(), !1)
                },
                listen: function (t) {
                    var e = 0 == this.__listening.length;
                    this.__listening.push(t), e && A(this.__listening)
                }
            }), N
        }(i.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", i.controllers.factory = function (t, e, i, n, r, o, s) {
            return function (a, h) {
                var l = a[h];
                return s.isArray(arguments[2]) || s.isObject(arguments[2]) ? new t(a, h, arguments[2]) : s.isNumber(l) ? s.isNumber(arguments[2]) && s.isNumber(arguments[3]) ? new i(a, h, arguments[2], arguments[3]) : new e(a, h, {
                    min: arguments[2],
                    max: arguments[3]
                }) : s.isString(l) ? new n(a, h) : s.isFunction(l) ? new r(a, h, "") : s.isBoolean(l) ? new o(a, h) : void 0
            }
        }(i.controllers.OptionController, i.controllers.NumberControllerBox, i.controllers.NumberControllerSlider, i.controllers.StringController = function (t, e, i) {
            var n = function (t, i) {
                function r() {
                    s.setValue(s.__input.value)
                }

                function o() {
                    s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                }
                n.superclass.call(this, t, i);
                var s = this;
                this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "keyup", r), e.bind(this.__input, "change", r), e.bind(this.__input, "blur", o), e.bind(this.__input, "keydown", function (t) {
                    13 === t.keyCode && this.blur()
                }), this.updateDisplay(), this.domElement.appendChild(this.__input)
            };
            return n.superclass = t, i.extend(n.prototype, t.prototype, {
                updateDisplay: function () {
                    return e.isActive(this.__input) || (this.__input.value = this.getValue()), n.superclass.prototype.updateDisplay.call(this)
                }
            }), n
        }(i.controllers.Controller, i.dom.dom, i.utils.common), i.controllers.FunctionController, i.controllers.BooleanController, i.utils.common), i.controllers.Controller, i.controllers.BooleanController, i.controllers.FunctionController, i.controllers.NumberControllerBox, i.controllers.NumberControllerSlider, i.controllers.OptionController, i.controllers.ColorController = function (t, e, i, n, r) {
            function o(t, e, i, n) {
                t.style.background = "", r.each(h, function (r) {
                    t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + i + " 0%, " + n + " 100%); "
                })
            }

            function s(t) {
                t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
            }
            var a = function (t, h) {
                function l(t) {
                    d(t), e.bind(window, "mousemove", d), e.bind(window, "mouseup", c)
                }

                function c() {
                    e.unbind(window, "mousemove", d), e.unbind(window, "mouseup", c)
                }

                function u() {
                    var t = n(this.value);
                    t !== !1 ? (m.__color.__state = t, m.setValue(m.__color.toOriginal())) : this.value = m.__color.toString()
                }

                function p() {
                    e.unbind(window, "mousemove", f), e.unbind(window, "mouseup", p)
                }

                function d(t) {
                    t.preventDefault();
                    var i = e.getWidth(m.__saturation_field),
                        n = e.getOffset(m.__saturation_field),
                        r = (t.clientX - n.left + document.body.scrollLeft) / i,
                        o = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
                    return o > 1 ? o = 1 : o < 0 && (o = 0), r > 1 ? r = 1 : r < 0 && (r = 0), m.__color.v = o, m.__color.s = r, m.setValue(m.__color.toOriginal()), !1
                }

                function f(t) {
                    t.preventDefault();
                    var i = e.getHeight(m.__hue_field),
                        n = e.getOffset(m.__hue_field),
                        r = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
                    return r > 1 ? r = 1 : r < 0 && (r = 0), m.__color.h = 360 * r, m.setValue(m.__color.toOriginal()), !1
                }
                a.superclass.call(this, t, h), this.__color = new i(this.getValue()), this.__temp = new i(0);
                var m = this;
                this.domElement = document.createElement("div"), e.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", e.bind(this.__input, "keydown", function (t) {
                    13 === t.keyCode && u.call(this)
                }), e.bind(this.__input, "blur", u), e.bind(this.__selector, "mousedown", function (t) {
                    e.addClass(this, "drag").bind(window, "mouseup", function (t) {
                        e.removeClass(m.__selector, "drag")
                    })
                });
                var g = document.createElement("div");
                r.extend(this.__selector.style, {
                    width: "122px",
                    height: "102px",
                    padding: "3px",
                    backgroundColor: "#222",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                }), r.extend(this.__field_knob.style, {
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                    borderRadius: "12px",
                    zIndex: 1
                }), r.extend(this.__hue_knob.style, {
                    position: "absolute",
                    width: "15px",
                    height: "2px",
                    borderRight: "4px solid #fff",
                    zIndex: 1
                }), r.extend(this.__saturation_field.style, {
                    width: "100px",
                    height: "100px",
                    border: "1px solid #555",
                    marginRight: "3px",
                    display: "inline-block",
                    cursor: "pointer"
                }), r.extend(g.style, {
                    width: "100%",
                    height: "100%",
                    background: "none"
                }), o(g, "top", "rgba(0,0,0,0)", "#000"), r.extend(this.__hue_field.style, {
                    width: "15px",
                    height: "100px",
                    display: "inline-block",
                    border: "1px solid #555",
                    cursor: "ns-resize"
                }), s(this.__hue_field), r.extend(this.__input.style, {
                    outline: "none",
                    textAlign: "center",
                    color: "#fff",
                    border: 0,
                    fontWeight: "bold",
                    textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
                }), e.bind(this.__saturation_field, "mousedown", l), e.bind(this.__field_knob, "mousedown", l), e.bind(this.__hue_field, "mousedown", function (t) {
                    f(t), e.bind(window, "mousemove", f), e.bind(window, "mouseup", p)
                }), this.__saturation_field.appendChild(g), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
            };
            a.superclass = t, r.extend(a.prototype, t.prototype, {
                updateDisplay: function () {
                    var t = n(this.getValue());
                    if (t !== !1) {
                        var e = !1;
                        r.each(i.COMPONENTS, function (i) {
                            if (!r.isUndefined(t[i]) && !r.isUndefined(this.__color.__state[i]) && t[i] !== this.__color.__state[i]) return e = !0, {}
                        }, this), e && r.extend(this.__color.__state, t)
                    }
                    r.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                    var s = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                        a = 255 - s;
                    r.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toString(),
                        border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
                    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, o(this.__saturation_field, "left", "#fff", this.__temp.toString()), r.extend(this.__input.style, {
                        backgroundColor: this.__input.value = this.__color.toString(),
                        color: "rgb(" + s + "," + s + "," + s + ")",
                        textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
                    })
                }
            });
            var h = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
            return a
        }(i.controllers.Controller, i.dom.dom, i.color.Color = function (t, e, i, n) {
            function r(t, e, i) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return "RGB" === this.__state.space ? this.__state[e] : (s(this, e, i), this.__state[e])
                    },
                    set: function (t) {
                        "RGB" !== this.__state.space && (s(this, e, i), this.__state.space = "RGB"), this.__state[e] = t
                    }
                })
            }

            function o(t, e) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return "HSV" === this.__state.space ? this.__state[e] : (a(this), this.__state[e])
                    },
                    set: function (t) {
                        "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[e] = t
                    }
                })
            }

            function s(t, i, r) {
                if ("HEX" === t.__state.space) t.__state[i] = e.component_from_hex(t.__state.hex, r);
                else {
                    if ("HSV" !== t.__state.space) throw "Corrupted color state";
                    n.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
                }
            }

            function a(t) {
                var i = e.rgb_to_hsv(t.r, t.g, t.b);
                n.extend(t.__state, {
                    s: i.s,
                    v: i.v
                }), n.isNaN(i.h) ? n.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = i.h
            }
            var h = function () {
                if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
                this.__state.a = this.__state.a || 1
            };
            return h.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], n.extend(h.prototype, {
                toString: function () {
                    return i(this)
                },
                toOriginal: function () {
                    return this.__state.conversion.write(this)
                }
            }), r(h.prototype, "r", 2), r(h.prototype, "g", 1), r(h.prototype, "b", 0), o(h.prototype, "h"), o(h.prototype, "s"), o(h.prototype, "v"), Object.defineProperty(h.prototype, "a", {
                get: function () {
                    return this.__state.a
                },
                set: function (t) {
                    this.__state.a = t
                }
            }), Object.defineProperty(h.prototype, "hex", {
                get: function () {
                    return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
                },
                set: function (t) {
                    this.__state.space = "HEX", this.__state.hex = t
                }
            }), h
        }(i.color.interpret, i.color.math = function () {
            var t;
            return {
                hsv_to_rgb: function (t, e, i) {
                    var n = Math.floor(t / 60) % 6,
                        r = t / 60 - Math.floor(t / 60),
                        o = i * (1 - e),
                        s = i * (1 - r * e),
                        a = i * (1 - (1 - r) * e),
                        h = [
                            [i, a, o],
                            [s, i, o],
                            [o, i, a],
                            [o, s, i],
                            [a, o, i],
                            [i, o, s]
                        ][n];
                    return {
                        r: 255 * h[0],
                        g: 255 * h[1],
                        b: 255 * h[2]
                    }
                },
                rgb_to_hsv: function (t, e, i) {
                    var n, r, o = Math.min(t, e, i),
                        s = Math.max(t, e, i),
                        a = s - o;
                    return 0 == s ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (r = a / s, n = t == s ? (e - i) / a : e == s ? 2 + (i - t) / a : 4 + (t - e) / a, n /= 6, n < 0 && (n += 1), {
                        h: 360 * n,
                        s: r,
                        v: s / 255
                    })
                },
                rgb_to_hex: function (t, e, i) {
                    var n = this.hex_with_component(0, 2, t);
                    return n = this.hex_with_component(n, 1, e), n = this.hex_with_component(n, 0, i)
                },
                component_from_hex: function (t, e) {
                    return t >> 8 * e & 255
                },
                hex_with_component: function (e, i, n) {
                    return n << (t = 8 * i) | e & ~(255 << t)
                }
            }
        }(), i.color.toString, i.utils.common), i.color.interpret, i.utils.common), i.utils.requestAnimationFrame = function () {
            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
                window.setTimeout(t, 1e3 / 60)
            }
        }(), i.dom.CenteredDiv = function (t, e) {
            var i = function () {
                this.backgroundElement = document.createElement("div"), e.extend(this.backgroundElement.style, {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    top: 0,
                    left: 0,
                    display: "none",
                    zIndex: "1000",
                    opacity: 0,
                    WebkitTransition: "opacity 0.2s linear"
                }), t.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), e.extend(this.domElement.style, {
                    position: "fixed",
                    display: "none",
                    zIndex: "1001",
                    opacity: 0,
                    WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
                }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                var i = this;
                t.bind(this.backgroundElement, "click", function () {
                    i.hide()
                })
            };
            return i.prototype.show = function () {
                var t = this;
                this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), e.defer(function () {
                    t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
                })
            }, i.prototype.hide = function () {
                var e = this,
                    i = function () {
                        e.domElement.style.display = "none", e.backgroundElement.style.display = "none", t.unbind(e.domElement, "webkitTransitionEnd", i), t.unbind(e.domElement, "transitionend", i), t.unbind(e.domElement, "oTransitionEnd", i)
                    };
                t.bind(this.domElement, "webkitTransitionEnd", i), t.bind(this.domElement, "transitionend", i), t.bind(this.domElement, "oTransitionEnd", i), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
            }, i.prototype.layout = function () {
                this.domElement.style.left = window.innerWidth / 2 - t.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - t.getHeight(this.domElement) / 2 + "px"
            }, i
        }(i.dom.dom, i.utils.common), i.dom.dom, i.utils.common)
    },
    //function index: 120
    function (t, e) {
        var i = t.exports = i || {};
        i.color = i.color || {}, i.utils = i.utils || {}, i.utils.common = function () {
            var t = Array.prototype.forEach,
                e = Array.prototype.slice;
            return {
                BREAK: {},
                extend: function (t) {
                    return this.each(e.call(arguments, 1), function (e) {
                        for (var i in e) this.isUndefined(e[i]) || (t[i] = e[i])
                    }, this), t
                },
                defaults: function (t) {
                    return this.each(e.call(arguments, 1), function (e) {
                        for (var i in e) this.isUndefined(t[i]) && (t[i] = e[i])
                    }, this), t
                },
                compose: function () {
                    var t = e.call(arguments);
                    return function () {
                        for (var i = e.call(arguments), n = t.length - 1; n >= 0; n--) i = [t[n].apply(this, i)];
                        return i[0]
                    }
                },
                each: function (e, i, n) {
                    if (t && e.forEach === t) e.forEach(i, n);
                    else if (e.length === e.length + 0) {
                        for (var r = 0, o = e.length; r < o; r++)
                            if (r in e && i.call(n, e[r], r) === this.BREAK) return
                    } else
                        for (var r in e)
                            if (i.call(n, e[r], r) === this.BREAK) return
                },
                defer: function (t) {
                    setTimeout(t, 0)
                },
                toArray: function (t) {
                    return t.toArray ? t.toArray() : e.call(t)
                },
                isUndefined: function (t) {
                    return void 0 === t
                },
                isNull: function (t) {
                    return null === t
                },
                isNaN: function (t) {
                    return t !== t
                },
                isArray: Array.isArray || function (t) {
                    return t.constructor === Array
                },
                isObject: function (t) {
                    return t === Object(t)
                },
                isNumber: function (t) {
                    return t === t + 0
                },
                isString: function (t) {
                    return t === t + ""
                },
                isBoolean: function (t) {
                    return t === !1 || t === !0
                },
                isFunction: function (t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                }
            }
        }(), i.color.toString = function (t) {
            return function (e) {
                if (1 == e.a || t.isUndefined(e.a)) {
                    for (var i = e.hex.toString(16) ; i.length < 6;) i = "0" + i;
                    return "#" + i
                }
                return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
            }
        }(i.utils.common), i.Color = i.color.Color = function (t, e, i, n) {
            function r(t, e, i) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return "RGB" === this.__state.space ? this.__state[e] : (s(this, e, i), this.__state[e])
                    },
                    set: function (t) {
                        "RGB" !== this.__state.space && (s(this, e, i), this.__state.space = "RGB"), this.__state[e] = t
                    }
                })
            }

            function o(t, e) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return "HSV" === this.__state.space ? this.__state[e] : (a(this), this.__state[e])
                    },
                    set: function (t) {
                        "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[e] = t
                    }
                })
            }

            function s(t, i, r) {
                if ("HEX" === t.__state.space) t.__state[i] = e.component_from_hex(t.__state.hex, r);
                else {
                    if ("HSV" !== t.__state.space) throw "Corrupted color state";
                    n.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
                }
            }

            function a(t) {
                var i = e.rgb_to_hsv(t.r, t.g, t.b);
                n.extend(t.__state, {
                    s: i.s,
                    v: i.v
                }), n.isNaN(i.h) ? n.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = i.h
            }
            var h = function () {
                if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
                this.__state.a = this.__state.a || 1
            };
            return h.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], n.extend(h.prototype, {
                toString: function () {
                    return i(this)
                },
                toOriginal: function () {
                    return this.__state.conversion.write(this)
                }
            }), r(h.prototype, "r", 2), r(h.prototype, "g", 1), r(h.prototype, "b", 0), o(h.prototype, "h"), o(h.prototype, "s"), o(h.prototype, "v"), Object.defineProperty(h.prototype, "a", {
                get: function () {
                    return this.__state.a
                },
                set: function (t) {
                    this.__state.a = t
                }
            }), Object.defineProperty(h.prototype, "hex", {
                get: function () {
                    return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
                },
                set: function (t) {
                    this.__state.space = "HEX", this.__state.hex = t
                }
            }), h
        }(i.color.interpret = function (t, e) {
            var i, n, r = function () {
                n = !1;
                var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
                return e.each(o, function (r) {
                    if (r.litmus(t)) return e.each(r.conversions, function (r, o) {
                        if (i = r.read(t), n === !1 && i !== !1) return n = i, i.conversionName = o, i.conversion = r, e.BREAK
                    }), e.BREAK
                }), n
            },
                o = [{
                    litmus: e.isString,
                    conversions: {
                        THREE_CHAR_HEX: {
                            read: function (t) {
                                var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                return null !== e && {
                                    space: "HEX",
                                    hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
                                }
                            },
                            write: t
                        },
                        SIX_CHAR_HEX: {
                            read: function (t) {
                                var e = t.match(/^#([A-F0-9]{6})$/i);
                                return null !== e && {
                                    space: "HEX",
                                    hex: parseInt("0x" + e[1].toString())
                                }
                            },
                            write: t
                        },
                        CSS_RGB: {
                            read: function (t) {
                                var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null !== e && {
                                    space: "RGB",
                                    r: parseFloat(e[1]),
                                    g: parseFloat(e[2]),
                                    b: parseFloat(e[3])
                                }
                            },
                            write: t
                        },
                        CSS_RGBA: {
                            read: function (t) {
                                var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                                return null !== e && {
                                    space: "RGB",
                                    r: parseFloat(e[1]),
                                    g: parseFloat(e[2]),
                                    b: parseFloat(e[3]),
                                    a: parseFloat(e[4])
                                }
                            },
                            write: t
                        }
                    }
                }, {
                    litmus: e.isNumber,
                    conversions: {
                        HEX: {
                            read: function (t) {
                                return {
                                    space: "HEX",
                                    hex: t,
                                    conversionName: "HEX"
                                }
                            },
                            write: function (t) {
                                return t.hex
                            }
                        }
                    }
                }, {
                    litmus: e.isArray,
                    conversions: {
                        RGB_ARRAY: {
                            read: function (t) {
                                return 3 == t.length && {
                                    space: "RGB",
                                    r: t[0],
                                    g: t[1],
                                    b: t[2]
                                }
                            },
                            write: function (t) {
                                return [t.r, t.g, t.b]
                            }
                        },
                        RGBA_ARRAY: {
                            read: function (t) {
                                return 4 == t.length && {
                                    space: "RGB",
                                    r: t[0],
                                    g: t[1],
                                    b: t[2],
                                    a: t[3]
                                }
                            },
                            write: function (t) {
                                return [t.r, t.g, t.b, t.a]
                            }
                        }
                    }
                }, {
                    litmus: e.isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a)) && {
                                    space: "RGB",
                                    r: t.r,
                                    g: t.g,
                                    b: t.b,
                                    a: t.a
                                }
                            },
                            write: function (t) {
                                return {
                                    r: t.r,
                                    g: t.g,
                                    b: t.b,
                                    a: t.a
                                }
                            }
                        },
                        RGB_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b)) && {
                                    space: "RGB",
                                    r: t.r,
                                    g: t.g,
                                    b: t.b
                                }
                            },
                            write: function (t) {
                                return {
                                    r: t.r,
                                    g: t.g,
                                    b: t.b
                                }
                            }
                        },
                        HSVA_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a)) && {
                                    space: "HSV",
                                    h: t.h,
                                    s: t.s,
                                    v: t.v,
                                    a: t.a
                                }
                            },
                            write: function (t) {
                                return {
                                    h: t.h,
                                    s: t.s,
                                    v: t.v,
                                    a: t.a
                                }
                            }
                        },
                        HSV_OBJ: {
                            read: function (t) {
                                return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v)) && {
                                    space: "HSV",
                                    h: t.h,
                                    s: t.s,
                                    v: t.v
                                }
                            },
                            write: function (t) {
                                return {
                                    h: t.h,
                                    s: t.s,
                                    v: t.v
                                }
                            }
                        }
                    }
                }];
            return r
        }(i.color.toString, i.utils.common), i.color.math = function () {
            var t;
            return {
                hsv_to_rgb: function (t, e, i) {
                    var n = Math.floor(t / 60) % 6,
                        r = t / 60 - Math.floor(t / 60),
                        o = i * (1 - e),
                        s = i * (1 - r * e),
                        a = i * (1 - (1 - r) * e),
                        h = [
                            [i, a, o],
                            [s, i, o],
                            [o, i, a],
                            [o, s, i],
                            [a, o, i],
                            [i, o, s]
                        ][n];
                    return {
                        r: 255 * h[0],
                        g: 255 * h[1],
                        b: 255 * h[2]
                    }
                },
                rgb_to_hsv: function (t, e, i) {
                    var n, r, o = Math.min(t, e, i),
                        s = Math.max(t, e, i),
                        a = s - o;
                    return 0 == s ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (r = a / s, n = t == s ? (e - i) / a : e == s ? 2 + (i - t) / a : 4 + (t - e) / a, n /= 6, n < 0 && (n += 1), {
                        h: 360 * n,
                        s: r,
                        v: s / 255
                    })
                },
                rgb_to_hex: function (t, e, i) {
                    var n = this.hex_with_component(0, 2, t);
                    return n = this.hex_with_component(n, 1, e), n = this.hex_with_component(n, 0, i)
                },
                component_from_hex: function (t, e) {
                    return t >> 8 * e & 255
                },
                hex_with_component: function (e, i, n) {
                    return n << (t = 8 * i) | e & ~(255 << t)
                }
            }
        }(), i.color.toString, i.utils.common)
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(122)),
                o = i(24),
                s = i(77),
                a = function (t) {
                    r.call(this), this.game = t, this.padding = (o.instance.isMobile, 0), this.idleZoom = 1, this.zoom = this.idleZoom, this.zoomWait = 0, this.lockToFrame = !0, this.easeX = 0, this.easeY = 0, this.mobileMode = !1, this.spring = new s, this.canShake = !0
                };
            a.prototype = Object.create(r.prototype), a.prototype.reset = function () {
                this.x = this.easeX = this.viewWidth / 2
            }, a.prototype.shake = function (t, e) {
                this.canShake && (t = t || Math.random() * Math.PI * 2, e = e || 20, this.spring.dx = Math.sin(t) * e, this.spring.dy = Math.cos(t) * e)
            }, a.prototype.update = function () {
                this.spring.update();
                var t = this.game.ball,
                    e = t.position.x,
                    i = t.position.y;
                this.viewWidth, this.viewHeight;
                this.easeX += .1 * (e - this.x), this.easeY += .1 * (i - this.y), this.x = this.easeX + this.spring.x, this.y = this.easeY + this.spring.y
            }, a.prototype.resize = function (t, e) {
                this.viewWidth = t, this.viewHeight = e
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), function () {
                this.x = 0, this.y = 0, this.rotation = 0, this.zoom = 1, this.viewWidth = 1130, this.viewHeight = 640
            });
            r.prototype.update = function () { }, r.prototype.resize = function (t, e) {
                this.viewWidth = t, this.viewHeight = e
            }, n.exports = r
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(12)),
                o = i(48),
                s = i(24),
                a = i(77),
                h = (i(118), i(124)),
                l = function (t) {
                    r.PerspectiveCamera.call(this, 40, 4, 1, 3e3),
                    this.game = t,
                    this.padding = (s.instance.isMobile, 0),
                    this.idleZoom = 1,
                    this.targetZoom = 1,
                    this.zoom = this.idleZoom,
                    this.zoomWait = 0,
                    this.lockToFrame = !0,
                    this.easeX = 0,
                    this.easeY = 0,
                    this.easeZ = 0,
                    this.mobileMode = !1,
                    this.spring = new a,
                    this.canShake = !0,
                    this.focusMode = !1,
                    this.celebrateMode = !1,
                    this.endMode = !1,
                    this.rock = 0,
                    this.tick = 0,
                    this.currentId = 0
                };
            l.prototype = Object.create(r.PerspectiveCamera.prototype),
            l.prototype.reset = function () {
                this.x = this.easeX = this.viewWidth / 2, this.endMode = !1, this.celebrateMode = !1
            },
            l.prototype.shake = function (t, e) {
                this.canShake && (t = t || Math.random() * Math.PI * 2, e = e || 20, this.spring.dx = Math.sin(t) * e, this.spring.dy = Math.cos(t) * e)
            },
            l.prototype.update = function () {
                this.spring.update();
                var t = this.game.ball;
                if (this.celebrateMode) t = this.game.ball.lastOwner || this.game.ball;
                else if (this.endMode) {
                    this.tick > 100 && (this.currentId++, this.tick = 0);
                    var e = this.game.endState === h.END_STATE.WIN ? this.game.teamLeft : this.game.teamRight;
                    this.game, t = e.children[this.currentId % e.children.length]
                }
                var i = t.position.x;
                i < 200 ? i = 200 : i > 1400 && (i = 1400);
                var n = t.position.y;
                n < 150 ? n = 150 : n > 800 && (n = 800);
                var r = i,
                    s = n - 400,
                    a = 500 - o.map(n, 150, 800, 150, 0);
                this.focusMode ? (a = 300, this.targetZoom = 1.4, this.shake(null, (this.zoom - 1) / .2), this.easeZ += .1 * (a - this.easeZ)) : (this.targetZoom = 1, this.easeZ += .3 * (a - this.easeZ)), this.easeX += .2 * (r - this.easeX), this.easeY += .2 * (s - this.easeY), this.position.x = this.easeX, this.position.y = this.easeY, this.position.z = this.easeZ;
                var l = this.position.z - 0,
                    c = this.position.y - n,
                    u = this.position.x - i,
                    p = Math.atan2(-c, l),
                    d = Math.atan2(-l, u) + Math.PI / 2;
                if (this.rotation.x += o.smallestAngle(this.rotation.x, p), this.rotation.y += o.smallestAngle(this.rotation.y, d), window.test = this.rotation.x, this.position.x += this.spring.x, this.position.z += this.spring.y, this.celebrateMode) {
                    this.rotation.z = .15 * Math.sin(.6 * this.rock), this.rock += .1;
                    var f = 1.5 + .2 * Math.sin(.5 * this.rock);
                    this.zoom += .1 * (f - this.zoom)
                } else this.rotation.z *= .9, this.zoom += .01 * (this.targetZoom - this.zoom);
                this.updateProjectionMatrix()
            }, n.exports = l
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    getGlobalSettingFn,
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(8),
            l = r(h),
            c = i(12),
            u = (n(c), i(32)),
            p = n(u),
            d = i(23),
            f = n(d),
            m = i(16),
            g = (n(m), i(126)),
            v = n(g),
            y = i(24),
            _ = (n(y), i(127)),
            x = n(_),
            b = i(128),
            w = n(b),
            S = i(124),
            T = n(S),
            M = i(133),
            E = n(M),
            A = i(134),
            C = n(A),
            L = i(135),
            R = n(L),
            P = i(58),
            O = n(P),
            I = i(136),
            D = n(I),
            B = i(48),
            k = n(B),
            F = i(117),
            N = (n(F), i(53)),
            U = n(N),
            G = T["default"].PLAYER_STATE,
            z = function (t) {
                function e(i) {
                    o(this, e);
                    var n = 20,
                        r = new w["default"].CrashBody.fromRect(-n / 2, -n / 2, n, n),
                        a = (new l.Graphics).beginFill(16711680).drawRect(-20, -20, 40, 40);
                    i && (a.tint = 65280);
                    var h = s(this, t.call(this, 400, 50, a, r));
                    return window.player = h, h.isTeamA = i, h.view3d = new x["default"](h), h.speedBoost = 1, h.shotPower = 1, h.tacklePower = 1, h._tick = 1e3 * Math.random(), h.type = 1, h.currentTouchingPlayer = null, h.touchingBall = !1, h.ball = null, h.body.position = h.position, h.name = "player", h.groups = ["Player"], h.state = G.IDLE, h.startPosition = new w["default"].Vector, h.ballSkills = new E["default"](h), h.movement = new C["default"](h), h.DEBUG = !1, h.auto = !0, h.shootTarget = null, h.tackleWait = 0, h.fallWait = 0, h.chaseWait = 0, h.passWait = 0, h.shotWait = 0, h.turnCount = 0, h.canTackleCount = 0, h.overwriteStopWalk = !1, h.reticle = new R["default"](h), h.view.addChild(h.reticle), h.reticle.visible = !1, h.shootArrow = (new l.Graphics).beginFill(16776960).drawRect(0, -5, 100, 10).drawCircle(0, 0, 20), h.view.addChild(h.shootArrow), h.shootDirection = new l.Point(1, 0), h.shootAngle = 0, h.shootOffsetAngle = 0, h.didModifyShootAngle = !1, h.chargeBar = new O["default"], h.powerup = null, h.speedBoost = !1, h.canBeTackled = !0, h.offScreenIcon = new D["default"], h.balanceData = null, h.helpTackle = !0, h.tackleSize = 30, h.normalSize = 20, h.actualSpeed = 3, h
                }
                return a(e, t), e.prototype.fallOver = function () {
                    p["default"].sfx.play("tackle_hit_deck");
                    var t = Math.random();
                    t < .4 && p["default"].sfx.playGroup("croudAngry"), this.body.acceleration.x = 0, this.body.acceleration.y = 0, this.fallWait = 0, this.setState(G.FALL), this.ballSkills.ball && this.ballSkills.releaseBall()
                }, e.prototype.reset = function () {
                    this.setState(G.STOP), this.endPowerup(), this.ballSkills.ball && this.ballSkills.releaseBall()
                }, e.prototype.setData = function (t) {
                    this.data = t, this.view3d.setData(t), this.data.power >= .4 ? this.chargeBar.setSize(2) : this.data.power >= .3 ? this.chargeBar.setSize(1) : this.chargeBar.setSize(0), this.offScreenIcon.setData(t)
                }, e.prototype.setTeam = function (t) {
                    for (var e = [], i = 0; i < t.children.length; i++) {
                        var n = t.children[i];
                        n !== this && e.push(n)
                    }
                    this.reticle.setArrows(e), this.view3d.reticle.setArrows(e)
                }, e.prototype.setReticle = function (t) {
                    this.reticle.visible = t
                }, e.prototype.setState = function (t) {
                    if (this.state !== t && (this.state !== G.HIDE || t === G.SHOW)) {
                        this.state === G.KICK_CHARGE && (this.world.view3d.camera.focusMode = !1), this.canCollide = t !== G.FALL;
                        var e = this.normalSize;
                        t !== G.TACKLE || this.auto || (e = this.tackleSize), this.body.shape.x = -e / 2, this.body.shape.y = -e / 2, this.body.shape.width = e, this.body.shape.height = e, t === G.KICK_CHARGE ? this.world.view3d.camera.focusMode = !0 : t === G.TACKLE ? (this.tackleWait = 0, this.body.friction = .9, this.actualSpeed = 20) : this.body.friction = .94, this.state = t, this.overwriteStopWalk = !1, this.state === G.HIDE && (this.view3d.hide(), this.movement.stop(), this.overwriteStopWalk = !0, this.offScreenIcon.hide()), this.state === G.SHOW && (this.view3d.show(), this.overwriteStopWalk = !1, this.movement.update(), this.offScreenIcon.show()), this.state !== G.WIN && this.state !== G.LOSE || this.movement.stop(), this.state !== G.LOSE && this.state !== G.WIN && this.state !== G.TACKLE && this.state !== G.FALL && this.state !== G.KICK_CHARGE || (this.overwriteStopWalk = !0)
                    }
                }, e.prototype.setPowerUp = function (t) {
                    this.setState(G.STOP), this.endPowerup(), this.powerup = U["default"].get(t), this.powerup.reset(this)
                }, e.prototype.endPowerup = function (t) {
                    this.powerup && (this.powerup.stop(), U["default"]["return"](this.powerup), this.powerup = null)
                }, e.prototype.update = function () {
                    this.count += .3;
                    var t = this.data.speed > .25 ? 1.1 : .9;
                    if (this.speedBoost ? this.actualSpeed = 4 * this.balanceData.speedMod * t : this.actualSpeed = 3 * this.balanceData.speedMod * t, this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y, this.view3d.update(), this.powerup && (this.powerup.update(), this.powerup.dead && this.endPowerup()), this.canTackleCount++, this.view3d.reticle.chargeArrow.visible = !1, this.ballSkills.update(), this.view3d.reticle.update(), this.state === G.RUN) this.movement.update();
                    else if (this.state === G.TACKLE) {
                        this.actualSpeed = 20;
                        var e = this.body.velocity.length();
                        e < 2 && (this.tackleWait++, this.tackleWait > 20 && (this.setState(G.IDLE), this.stop()))
                    } else if (this.state === G.FALL) this.view.scale.set(.5), this.fallWait++, this.body.velocity.x *= .8, this.body.velocity.y *= .8, this.fallWait > 140 && (this.view.scale.set(1), this.setState(G.IDLE), this.stop());
                    else if (this.state === G.KICK_CHARGE) {
                        if (!this.ballSkills.ball) return void this.setState(G.IDLE);
                        this.chargeBar.show(), this.view3d.reticle.chargeArrow.visible = !0;
                        var i = Math.atan2(this.shootDirection.y, this.shootDirection.x);
                        i += this.shootOffsetAngle, !this.didModifyShootAngle, this.didModifyShootAngle = !1, this.shootAngle = i + Math.PI / 2;
                        var n = this.data.power < .25 ? 1.1 : .9;
                        this.speedBoost && (n *= 1.5), this.shotWait += .7 * n;
                        var r = this.shotWait / 75;
                        r *= r, this.body.velocity.x *= .8, this.body.velocity.y *= .8, this.chargeBar.setRatio(r), this.ballSkills.ball.chargeEffect.setRatio(r), this.shotWait > 75 && this.shootRelease(this.shootTarget)
                    }
                    this.movingTo && (this.actualSpeed *= 1.1), this.body.setMaxSpeed(this.actualSpeed), this.state === G.KICK_CHARGE ? this.chargeBar.show() : this.chargeBar.hide();
                    var o = this.world.view3d.toScreenPosition(this);
                    this.chargeBar.position.x = o.x, this.chargeBar.position.y = o.y + 40, this.isTeamA || this.offScreenIcon.update(o);
                    var s = this.world.game.ball;
                    this.touchingBall && !this.ballSkills.ball && s.body.velocity.z < 15 && s.body.position.z < 10 && (this.touchingBall = !1, this.ballSkills.pickupBall(s))
                }, e.prototype.addedToWorld = function () {
                    this.world.overlay.addChild(this.chargeBar), this.isTeamA || this.world.overlay.addChild(this.offScreenIcon)
                }, e.prototype.removedFromWorld = function () {
                    this.world.overlay.removeChild(this.chargeBar), this.isTeamA || this.world.overlay.removeChild(this.offScreenIcon)
                }, e.prototype.chaseDown = function (t) {
                    if (this.auto && this.state !== G.TACKLE && this.state !== G.FALL) {
                        this.movingTo = !1, this.alpha = Math.random(), this.movement.follow(t);
                        var e = t.position.x - this.position.x,
                            i = t.position.y - this.position.y,
                            n = Math.sqrt(e * e + i * i);
                        if (e /= n, i /= n, t.owner && t.owner !== this && n < 150 && (this.chaseWait += f["default"].game.speed, this.chaseWait > 70 + this.balanceData.aggressiveness || t.owner.canTackleCount > 0 && t.owner.body.velocity.length() < 2)) {
                            var r = Math.atan2(i, e);
                            this.balanceData.tackleChance < Math.random() && (r = Math.atan2(this.body.velocity.y, this.body.velocity.x)), this.slideTackle(Math.cos(r), Math.sin(r)), this.chaseWait = -80
                        }
                    }
                }, e.prototype.chargeGoal = function () {
                    this.auto && this.moveInDirection(-1, 0)
                }, e.prototype.shootBegin = function (t) {
                    if (this.ballSkills.ball) {
                        p["default"].sfx.playGroup("croudHappy"), p["default"].sfx.play("charge_up"), this.shotWait = 0, this.world.game.speed = .1, this.shootTarget = t, this.movement.target = null, this.body.acceleration.x = 1e-4, this.body.acceleration.y = 0;
                        var e = t.position.x - this.position.x,
                            i = t.position.y - this.position.y,
                            n = Math.sqrt(e * e + i * i);
                        e /= n, i /= n, this.shootDirection.x = e, this.shootDirection.y = i, this.shootDirection.visible = !0, this.setState(G.KICK_CHARGE)
                    }
                }, e.prototype.shootRelease = function (t) {
                    if (this.state !== G.TACKLE) {
                        this.world.game.speed = 1, this.passWait = 0;
                        var e = 15;
                        if (this.ballSkills.ball) {
                            if (this.setState(G.KICK), t)
                                if (this.auto) {
                                    var i = 0;
                                    i = this.position.x < t.position.x ? 0 : Math.PI, i += k["default"].random(-.3, .3);
                                    var n = Math.random() < this.balanceData.goalScorePercentage;
                                    n && p["default"].sfx.play("big_kick"), this.ballSkills.ball.shoot(Math.cos(i) * e, Math.sin(i) * e, n)
                                } else {
                                    var r = Math.atan2(this.shootDirection.y, this.shootDirection.x);
                                    r += this.shootOffsetAngle, this.shootDirection.x = Math.cos(r), this.shootDirection.y = Math.sin(r);
                                    var o = this.shotWait / 75;
                                    o *= o;
                                    var s = this.chargeBar.min,
                                        a = this.chargeBar.max,
                                        n = !1;
                                    if (o > s && o < a) {
                                        var h = this.position.x - this.shootTarget.position.x,
                                            l = this.position.y - this.shootTarget.position.y,
                                            c = Math.sqrt(h * h + l * l);
                                        c < 500 && (n = Math.random() < this.balanceData.goalScorePercentage, this.data.isCaptain ? (n = !0, this.world.game.scripts["super"].run(this)) : n && p["default"].sfx.play("big_kick"))
                                    }
                                    this.ballSkills.ball.shoot(this.shootDirection.x * e, this.shootDirection.y * e, n)
                                }
                            this.ballSkills.releaseBall()
                        }
                    }
                }, e.prototype.slideTackle = function (t, e) {
                    if (!this.overwriteStopWalk) {
                        if (p["default"].sfx.playGroup("slide"), this.setState(G.TACKLE), this.chaseWait = -80, !this.auto) {
                            t = this.body.velocity.x, e = this.body.velocity.y;
                            var i = Math.sqrt(t * t + e * e);
                            t /= i, e /= i
                        }
                        this.movement.direction.x = t, this.movement.direction.y = e, this.body.velocity.x = 15 * t, this.body.velocity.y = 15 * e, this.body.acceleration.x = 0, this.body.acceleration.y = 0, this.currentTouchingPlayer && this.runTackle(this.currentTouchingPlayer)
                    }
                }, e.prototype.moveTo = function (t, e) {
                    this.overwriteStopWalk || this.auto && (this.setState(G.RUN), this.movement.moveTo(t, e))
                }, e.prototype.moveInDirection = function (t, e) {
                    this.state === G.KICK_CHARGE && (this.didModifyShootAngle = !0, this.shootOffsetAngle += .02 * (.4 * e - this.shootOffsetAngle)), this.overwriteStopWalk || this.movement.moveInDirection(t, e)
                }, e.prototype.show = function () {
                    this.setState(G.SHOW)
                }, e.prototype.hide = function () {
                    this.setState(G.HIDE)
                }, e.prototype.win = function () {
                    this.setState(G.WIN)
                }, e.prototype.lose = function () {
                    this.setState(G.LOSE)
                }, e.prototype.stop = function () {
                    this.overwriteStopWalk || (this.setState(G.STOP), this.movement.stop())
                }, e.prototype.onCollideBegin = function (t) {
                    var e = t.getOtherObject(this);
                    "ball" === e.name ? (t.ignore = !0, e.body.velocity.z < 15 && e.body.position.z < 20 ? (this.canTackleCount = -50, this.passWait = Math.random() * -150, this.onBallCollide(e)) : this.touchingBall = !0) : "player" === e.name && (t.ignore = !0, e.isTeamA !== this.isTeamA && (this.currentTouchingPlayer = e, this.state === G.TACKLE && this.runTackle(e)))
                }, e.prototype.runTackle = function (t) {
                    var e = this.body.velocity.length();
                    e > 4 && (this.tackleWait = 1e3, t.canBeTackled ? (t.ballSkills.ball && (t.ballSkills.releaseBall(), this.ballSkills.pickupBall(this.world.game.ball)), t.fallOver()) : this.fallOver(), this.world.view3d.camera.shake())
                }, e.prototype.onCollideEnd = function (t) {
                    var e = t.getOtherObject(this);
                    "ball" === e.name ? this.touchingBall = !1 : "player" === e.name && e.isTeamA !== this.isTeamA && (this.world.game.speed = 1, this.currentTouchingPlayer = null)
                }, e.prototype.onBallCollide = function (t) {
                    this.state !== G.FALL && (t.owner || this.ballSkills.pickupBall(t))
                }, e
            }(v["default"]);
        e["default"] = z, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(53),
                s = i(26),
                a = function (t, e, i, n) {
                    this.UID = a._UID++, this.view = i || null, this.body = n || null, this.signals = {}, this.position = new r.Point, this.view && (this.view.position = this.position), this.position.x = 0 | t, this.position.y = 0 | e, this.world = null, this.canCollide = !0, this.collideWithSelf = !0, this.type = 0, this.groups = [], this._TICK = -1, this.keepInBonus = !0, this._gc = !1, this.returnToPool = function () {
                        o.returnObject(this)
                    }.bind(this)
                };
            a.prototype.updateView = function (t) {
                this.view = t
            }, a.prototype.reset = function (t) { }, a.prototype.destroy = function () {
                this.world && (this.world.remove(this), s.wait(this.returnToPool))
            }, a._UID = 0, a.mixin = function (t, e) {
                e.call(t), Object.assign(t, e)
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = (n(a), i(12)),
            l = n(h),
            c = i(117),
            u = n(c),
            p = i(36),
            d = n(p),
            f = i(126),
            m = (n(f), i(128)),
            g = (n(m), i(23)),
            v = n(g),
            y = i(130),
            _ = n(y),
            x = i(131),
            b = n(x),
            w = i(132),
            S = n(w),
            T = i(124),
            M = n(T),
            E = i(18),
            A = n(E),
            C = M["default"].PLAYER_STATE,
            L = (new l["default"].PlaneGeometry(200, 200), function (t) {
                function e(i) {
                    r(this, e);
                    var n = o(this, t.call(this));
                    return n.player = i, n.scale.x = n.scale.y = n.scale.z = .24, n.flipContainer = new l["default"].Object3D, n.flipContainer.rotation.x = -Math.PI + .6, n.add(n.flipContainer), n.playerMesh = new u["default"].getMesh, n.flipContainer.add(n.playerMesh), i.isTeamA, n.animation = new _["default"], n.animation.register("run", {
                        frames: [],
                        loop: !0
                    }), n.animation.register("dash", {
                        frames: [],
                        loop: !0
                    }), n.animation.register("stand", {
                        frames: [],
                        speed: .1,
                        loop: !0
                    }), n.animation.register("tackle", {
                        frames: [],
                        loop: !1
                    }), n.animation.register("fall", {
                        frames: [],
                        loop: !1
                    }), n.animation.register("kickCharge", {
                        frames: [],
                        loop: !1
                    }), n.animation.register("kickRelease", {
                        frames: [],
                        loop: !1
                    }), n.animation.register("win", {
                        frames: [],
                        loop: !0
                    }), n.animation.register("lose", {
                        frames: [],
                        loop: !1
                    }), n.reticle = new b["default"](i), n.reticle.position.z += 10, n.add(n.reticle), n.chargeArrow = new S["default"](i), n
                }
                return s(e, t), e.prototype.setData = function (t) {
                    this.scale.x = this.scale.y = this.scale.z = .24 * t.scale;
                    var e = this.player.isTeamA ? "blue" : "red",
                        i = t.spriteSheet.replace("%COLOR%", e),
                        n = A["default"].getJson("character-animation")[i],
                        r = this.animation.animations;
                    r.run.frames = d["default"].getTexturesFromFrames(n.run), r.dash.frames = d["default"].getTexturesFromFrames(n.dash), r.stand.frames = d["default"].getTexturesFromFrames(n.stand), r.tackle.frames = d["default"].getTexturesFromFrames(n.tackle), r.fall.frames = d["default"].getTexturesFromFrames(n.fall), r.kickCharge.frames = d["default"].getTexturesFromFrames(n.kickCharge), r.win.frames = d["default"].getTexturesFromFrames(n.win), r.lose.frames = d["default"].getTexturesFromFrames(n.lose)
                }, e.prototype.hide = function () {
                    this.playerMesh.material.opacity = .5
                }, e.prototype.show = function () {
                    this.playerMesh.material.opacity = 1
                }, e.prototype.update = function () {
                    this.chargeArrow.update(), this.player.state === C.KICK_CHARGE ? this.animation.play("kickCharge") : this.player.state === C.FALL ? this.animation.play("fall") : this.player.state === C.TACKLE ? this.animation.play("tackle") : this.player.state === C.WIN ? this.animation.play("win") : this.player.state === C.LOSE ? this.animation.play("lose") : this.player.body.velocity.length() > 1 ? this.player.speedBoost ? this.animation.play("dash") : this.animation.play("run") : this.animation.play("stand"), this.animation.update(v["default"].game.deltaTime), this.count++, u["default"].setUvs(this.playerMesh, this.animation.texture);
                    var t = this.player.body.velocity.x > 0 ? 1 : -1;
                    this.flipContainer.scale.x = t, this.flipContainer.rotation.x = window.test - Math.PI
                }, e
            }(l["default"].Object3D));
        e["default"] = L, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            n.exports = {
                Vector: i(111),
                CrashData: i(112),
                CrashBody: i(113),
                CrashWorld: i(109),
                CrashTests: i(129)
            }
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(111)),
                o = function () { };
            o.hitTestItemGroup = function (t, e, i, n) {
                for (var r = e.children, s = 0; s < r.length; s++) o.hitTestAABBAABB(t, r[s], i, n)
            }, o.hitTestItemItem = function (t, e, i, n) {
                o.hitTestAABBAABB(t, e, i, n)
            }, o.hitTestGroup = function (t, e, i) {
                for (var n = t.children, r = 0; r < n.length - 1; r++)
                    for (var s = r + 1; s < n.length; s++) o.hitTestAABBAABB(n[r], n[s], e, i)
            }, o.hitTestGroupGroup = function (t, e, i, n) {
                for (var r = t.children, s = e.children, a = 0; a < r.length; a++)
                    for (var h = 0; h < s.length; h++) o.hitTestAABBAABB(r[a], s[h], i, n);
                o.hitTestAABBAABB(item, r[a], i, n)
            }, o.hitTestAABBAABB = function (t, e, i, n) {
                var o = t.body,
                    s = e.body,
                    a = o.shape,
                    h = s.shape,
                    l = a.x + t.position.x,
                    c = a.y + t.position.y,
                    u = h.x + e.position.x,
                    p = h.y + e.position.y,
                    d = c + a.height - p,
                    f = p + h.height - c,
                    m = l + a.width - u,
                    g = u + h.width - l,
                    v = 999999;
                if (m < v && (v = m), g < v && (v = g), d < v && (v = d), f < v && (v = f), v >= 0) {
                    var y = new r;
                    v == m ? (y.x = -1, y.y = 0) : v == g ? (y.x = 1, y.y = 0) : v == d ? (y.x = 0, y.y = -1) : v == f && (y.x = 0, y.y = 1);
                    var _ = -v;
                    i && i(t, e, _, y)
                } else n && n(t, e)
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 130
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), function () {
                this.animations = {}, this.rules = {}, this.texture = null, this.nextAnimation = null, this.currentAnimation = null
            });
            r.prototype.register = function (t, e) {
                e.id = t, e.currentFrame = 0, e.speed = e.speed || .4, this.animations[t] = e
            }, r.prototype.play = function (t, e) {
                var i = this.animations[t];
                i !== this.currentAnimation && (i.currentFrame = 0, this.currentAnimation = i, e ? (this.nextAnimation = this.animations[e], this.nextAnimation.currentFrame = 0) : this.nextAnimation = null)
            }, r.prototype.update = function (t) {
                t = t || 1;
                var e = this.currentAnimation,
                    i = Math.floor(e.currentFrame);
                e && (e.loop ? i %= e.frames.length : i > e.frames.length - 1 && (i = e.frames.length - 1, this.nextAnimation && (this.currentAnimation = this.nextAnimation, this.nextAnimation = null)), e.currentFrame += e.speed * t, this.texture = e.frames[i])
            }, n.exports = r
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(12)),
                o = i(117),
                s = (i(126), i(128), i(130), i(48)),
                a = i(124),
                h = function (t) {
                    r.Object3D.call(this), this.owner = t, this.spin = new r.Object3D, this.reticle = o.getMesh("player_marker_ring.png", .5, .5, !0), this.chargeArrow = o.getMesh("player_marker_shoot.png", .5, 1, !0), this.chargeArrow.material.alphaTest = .8, this.reticle.material.alphaTest = .8, this.chargeArrow.position.y += 30, this.chargeArrow.position.x += 25, this.spin.add(this.reticle), this.spin.add(this.chargeArrow), this.add(this.spin), this.reticle.scale.x *= 1.5, this.reticle.scale.y *= 1.5, this.reticle.scale.z *= 1.5, this.visible = !1, this.shootDir
                };
            h.prototype = Object.create(r.Object3D.prototype), h.prototype.setArrows = function (t) {
                this.team = t
            }, h.prototype.update = function () {
                if (this.visible) {
                    if (this.owner.state !== a.PLAYER_STATE.KICK_CHARGE) {
                        var t = Math.atan2(this.owner.movement.direction.y, this.owner.movement.direction.x);
                        t += Math.PI / 2
                    } else t = this.owner.shootAngle;
                    this.spin.rotation.z += .2 * s.smallestAngle(this.spin.rotation.z, t)
                }
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";
        var n = (i(8), i(12)),
            r = i(117),
            o = (i(126), i(128), i(130), i(48), function (t) {
                n.Object3D.call(this), this.owner = t, this.reticle = r.getMesh("player_marker_shoot.png", .5, 1), this.add(this.reticle), this.reticle.scale.x *= 1.5, this.reticle.scale.y *= 1.5, this.reticle.scale.z *= 1.5
            });
        o.prototype = Object.create(n.Object3D.prototype), o.prototype.setArrows = function (t) {
            this.team = t
        }, o.prototype.update = function () { }, t.exports = o
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(16),
                s = i(48),
                a = function (t) {
                    this.item = t, this.ball = null, t.signals.onBallRecieved = new o(this), t.signals.onBallLost = new o(this), this.easeX = .1, this.offset = new r.Point, this.offset.z = 0, this.speedRange = 35
                };
            a.prototype.pickupBall = function (t) {
                this.ball = t, t.pickUp(this.item), this.item.signals.onBallRecieved.dispatch(this.item)
            }, a.prototype.update = function () {
                if (this.ball) {
                    var t = this.item.body.velocity.x / 3;
                    t *= 40, t = s.cap(t, -this.speedRange, this.speedRange), this.ball.position.x += (this.item.position.x + this.offset.x + t - this.ball.position.x) * this.easeX, this.item.body.velocity.y > 0 ? this.ball.position.y += .5 * (this.item.position.y + 0 - this.ball.position.y) : this.ball.position.y += .5 * (this.item.position.y - 10 - this.ball.position.y), this.ball.position.z = this.offset.z, this.ball.body.velocity.z = 0
                }
            }, a.prototype.releaseBall = function () {
                this.ball.released(), this.ball = null, this.item.signals.onBallLost.dispatch(this.item)
            }, a.prototype.passTo = function (t) {
                this.ball && (this.ball.passTo(t), this.releaseBall())
            }, a.prototype.pass = function (t, e, i, n) {
                this.ball && (this.ball.pass(t, e, i, n), this.releaseBall())
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(128)),
                o = i(16),
                s = i(48),
                a = function (t) {
                    this.item = t, this.direction = new r.Vector(1, 0), this.targetDirection = new r.Vector(1, 0), this.targetPosition = new r.Vector(1, 0), t.signals.onArrive = new o(this), t.signals.onMoveTo = new o(this), this.callback = null, this.scope = null, this.active = !0, this.turnMultiplier = 1, this.accel = 1, this.lookingForTarget = !1
                };
            a.prototype.update = function () {
                if (this.lookingForTarget) {
                    this.target && (this.targetPosition.x = this.target.position.x, this.targetPosition.y = this.target.position.y);
                    var t = this.targetPosition.x - this.item.position.x,
                        e = this.targetPosition.y - this.item.position.y,
                        i = Math.sqrt(t * t + e * e);
                    t /= i, e /= i, i > 10 ? this.moveInDirection(t, e) : (this.callback && (this.callback.call(this.scope), this.callback = null), this.stop())
                }
            }, a.prototype.follow = function (t, e) {
                this.target = t, this.lookingForTarget = !0
            }, a.prototype.moveTo = function (t, e) {
                this.target = null, this.callback = null, this.lookingForTarget = !0, this.targetPosition.x = t, this.targetPosition.y = e
            }, a.prototype.then = function (t, e) {
                this.callback = t, this.scope = e
            }, a.prototype.moveInDirection = function (t, e) {
                if (this.targetDirection = t, this.targetDirection = e, this.item.auto) {
                    var i = Math.atan2(this.direction.y, this.direction.x),
                        n = Math.atan2(e, t),
                        r = s.smallestAngle(i, n);
                    i += r * this.turnMultiplier, this.direction.x = Math.cos(i), this.direction.y = Math.sin(i)
                } else this.direction.x = t, this.direction.y = e;
                this.item.body.acceleration.x = .6 * this.direction.x * this.accel, this.item.body.acceleration.y = .6 * this.direction.y * this.accel
            }, a.prototype.stop = function () {
                this.target = null, this.lookingForTarget = !1, this.item.body.acceleration.x = 1e-4, this.item.body.acceleration.y = 0, this.item.body.velocity.x = .001, this.item.body.velocity.y = 0
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(126), i(128), i(48)),
                s = function (t) {
                    r.Container.call(this), this.arrows = [], this.team = null, this.owner = t;
                    var e = (new r.Graphics).lineStyle(2, 16711680).drawCircle(0, 0, 30);
                    this.addChild(e);
                    for (var i = 0; i < 2; i++) this.arrows.push((new r.Graphics).beginFill(0, .4).moveTo(30, 5).lineTo(30, -5).lineTo(40, 0)), this.addChild(this.arrows[i]);
                    this.directionArrow = (new r.Graphics).beginFill(16711680).moveTo(30, 15).lineTo(30, -15).lineTo(50, 0), this.addChild(this.directionArrow)
                };
            s.prototype = Object.create(r.Container.prototype), s.prototype.setArrows = function (t) {
                this.team = t
            }, s.prototype.update = function () {
                if (this.visible) {
                    for (var t = 0; t < this.team.length; t++) {
                        var e = this.team[t],
                            i = Math.atan2(e.position.y - this.owner.position.y, e.position.x - this.owner.position.x);
                        this.arrows[t].rotation = i
                    }
                    var n = Math.atan2(this.owner.movement.direction.y, this.owner.movement.direction.x);
                    this.directionArrow.rotation += .2 * o.smallestAngle(this.directionArrow.rotation, n)
                }
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(48),
                s = function () {
                    r.Container.call(this), this.circle = (new r.Graphics).beginFill(16711680).drawCircle(0, 0, 30), this.icon = new r.Sprite, this.addChild(this.circle), this.addChild(this.icon), this.icon.anchor.set(.5), this.icon.mask = this.circle, this.ring = new r.Sprite.from("offscreen_marker_ring.png"), this.addChild(this.ring), this.ring.anchor.set(.5), this.ring.position.y = 2
                };
            s.prototype = Object.create(r.Container.prototype), s.prototype.setData = function (t) {
                this.cacheAsBitmap = !1, this.icon.texture = r.Texture.from(t.icon), this.cacheAsBitmap = !0
            }, s.prototype.hide = function (t) {
                this.hidden = !0, this.alpha = 0
            }, s.prototype.show = function (t) {
                this.hidden = !1
            }, s.prototype.update = function (t) {
                if (!this.hidden) {
                    var e = t.x,
                        i = t.y - 50,
                        n = !0,
                        r = 30;
                    e < r || e > 1136 - r ? (e = o.cap(e, r, 1136 - r), n = !1) : (i < r || i > 745 - r) && (i = o.cap(i, r, 745 - r), n = !1), n ? (this.alpha -= .1, this.alpha < 0 && (this.alpha = 0)) : (this.alpha += .1, this.alpha > 1 && (this.alpha = 1)), this.position.x = e, this.position.y = i
                }
            }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(12),
                s = i(32),
                a = i(117),
                h = i(138),
                l = i(139),
                c = i(36),
                u = i(126),
                p = i(48),
                d = i(128),
                f = function () {
                    var t = new d.CrashBody.fromRect((-10), (-10), 20, 20);
                    t.maxSpeed = 1e4, t.maxSpeedY = 1e4, t.bounce = .8, t.friction = .99;
                    var e = (new r.Graphics).beginFill(16777215).drawCircle(0, 0, 10);
                    u.call(this, 0, 0, e, t);
                    var i = new o.SphereGeometry(10, 32, 32),
                        n = new o.TextureLoader,
                        s = n.load(URL_HEADER.IMAGE + "game/football.jpg"),
                        p = new o.MeshBasicMaterial({
                            map: s
                        });
                    p.side = o.DoubleSide,
                    this.view3d = new o.Object3D,
                    this.container = new o.Object3D,
                    this.innerBall = new o.Mesh(i, p),
                    this.view3d.add(this.container),
                    this.container.add(this.innerBall),
                    this.ballMatrix = new o.Matrix4,
                    this.body.position = this.position,
                    t.position.z = 0,
                    t.velocity.z = 0,
                    this.groups = ["Ball"],
                    this.name = "ball",
                    this.shot = !1,
                    this.active = !1,
                    this.perfect = !1,
                    this.type = 99,
                    this.pickedUp = !1,
                    this.owner = null,
                    this.target = null,
                    this.lastOwner = null,
                    this.shadow = a.getMesh(URL_HEADER.IMAGE + "game/game_objects/ball-shadow.png", .5, .5),
                    this.shadow.position.z = 10,
                    this.shadow.renderOrder = 999,
                    this.shadow.scale.x = this.shadow.scale.y = this.shadow.scale.z = .1,
                    this.shadow.position.z = -6,
                    this.quaternion = new o.Quaternion,
                    this.quaternion2 = new o.Quaternion,
                    this.chargeEffect = new h(this),
                    this.trailEffect = new l(this),
                    this.rect = new r.Sprite.from("ball_trail_00003.png"),
                    this.frames = c.getTexturesFromFramesWithPrefix("ball_trail_000%%.png", 15),
                    this.tick = 0,
                    this.rect.blendMode = r.BLEND_MODES.ADD,
                    this.rect.scale.set(2),
                    this.rect.anchor.x = .5,
                    this.rect.anchor.y = .75
                };
            f.prototype = Object.create(u.prototype), f.prototype.addedToWorld = function () {
                this.world.view3d.scene.add(this.shadow), this.world.view3d.scene.add(this.trailEffect.view), this.world.overlay.addChild(this.rect)
            }, f.prototype.removedFromWorld = function () {
                this.world.view3d.scene.remove(this.shadow), this.world.view3d.scene.remove(this.trailEffect.view), this.world.overlay.removeChild(this.rect)
            }, f.prototype.setActive = function (t) {
                this.active = t, t ? this.type = 0 : this.type = 99
            }, f.prototype.reset = function () { }, f.prototype.released = function () {
                this.pickedUp = !1, this.owner = null
            }, f.prototype.pickUp = function (t) {
                s.sfx.playGroup("ball_pickup"), this.pickedUp = !0, this.lastOwner = this.owner = t, this.target = null, this.body.velocity.set(0), this.chargeEffect.setRatio(0)
            }, f.prototype.shoot = function (t, e, i) {
                this.perfect = i, this.shot = !0, this.body.velocity.y = e, this.body.velocity.x = t, i ? (s.sfx.playGroup("croudHappy"), this.body.velocity.y *= 1.5, this.body.velocity.x *= 1.5, this.rect.visible = !0) : (Math.random() < .3 && s.sfx.playGroup("croudHappy"), s.sfx.play("ballkick_shoot_hard")), this.body.velocity.z = 13, this.chargeEffect.setRatio(0)
            }, f.prototype.pass = function (t, e, i, n) {
                s.sfx.play("ballkick_pass"), this.shot = !1, this.body.velocity.x = t * i, this.body.velocity.y = e * i, this.body.velocity.z = n || 0
            }, f.prototype.passTo = function (t) {
                if (this.owner !== t) {
                    s.sfx.play("ballkick_pass"), this.target = t;
                    var e = t.position.x - this.position.x,
                        i = t.position.y - this.position.y,
                        n = Math.sqrt(e * e + i * i);
                    e /= n, i /= n;
                    var r = 15;
                    this.body.velocity.x = e * r, this.body.velocity.y = i * r, this.body.velocity.z = 1
                }
            }, f.prototype.update = function () {
                var t = this.body;
                t.velocity.z -= .6, t.position.z += t.velocity.z, t.position.z < 0 && (t.position.z = 0, t.velocity.z *= -.6, this.rect.visible = !1), this.owner && (this.rect.visible = !1);
                var e = 700,
                    i = e / (e - t.position.z);
                this.view.scale.set(i);
                var n = this.body.velocity.length();
                if (this.target) {
                    var r = this.target,
                        o = r.body.position.x - this.body.position.x,
                        s = r.body.position.y - this.body.position.y,
                        a = Math.sqrt(o * o + s * s);
                    o /= a, s /= a, this.body.velocity.x = o * n, this.body.velocity.y = s * n
                }
                if (this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y, this.view3d.position.z = .5 * this.position.z + 10, window.ball = this, this.owner) {
                    var o = this.owner.body.velocity.x,
                        s = this.owner.body.velocity.y,
                        a = Math.sqrt(o * o + s * s);
                    this.innerBall.rotation.x += .1 * a, this.container.rotation.z = Math.atan2(s, o) + Math.PI / 2
                } else this.container.rotation.y += .03 * this.body.velocity.x;
                this.shadow.position.x = this.view3d.position.x, this.shadow.position.y = this.view3d.position.y;
                var h = p.map(this.view3d.position.z, 80, 0, 0, 2);
                h = Math.max(h, .3), this.shadow.material.alphaTest = 0, this.shadow.material.opacity = .5 * h, this.shadow.scale.x = this.shadow.scale.y = this.shadow.scale.z = .05 * h;
                var l = p.cap(p.map(n, 4, 12, 1, .2), .3, 1);
                if (this.view3d.scale.z += .1 * (l - this.view3d.scale.z), this.chargeEffect.update(), this.trailEffect.update(), this.rect.visible) {
                    var c = this.world.view3d.toScreenPosition(this);
                    this.rect.position.x = c.x, this.rect.position.y = c.y, this.tick += .5, this.rect._texture = this.frames[(0 | this.tick) % this.frames.length], this.owner ? this.rect.rotation = -Math.atan2(this.owner.body.velocity.y, this.owner.body.velocity.x) - Math.PI / 2 : this.rect.rotation = -Math.atan2(this.body.velocity.y, this.body.velocity.x) - Math.PI / 2
                }
            }, f.prototype.onCollideBegin = function (t) {
                this.target = null;
                var e = t.getOtherObject(this);
                e.net && (this.body.velocity.x *= .15, this.body.velocity.y *= .15), e.wall && s.sfx.play("ballkick_post")
            }, n.exports = f
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(16), i(48)),
                o = i(12),
                s = i(117),
                a = ["attribute float alpha;", "uniform float tick;", "uniform float power;", "void main() {", "    float pos = alpha + tick;", "    pos = mod(pos, 1.0);", "    vec4 mvPosition = modelViewMatrix * vec4( position * pos, 1.0 );", "    gl_PointSize = (1.0-pos) * 28.0 * power* 3.0;", "    gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
                h = ["uniform vec3 color;", "uniform sampler2D circle;", "void main() {", "    gl_FragColor = texture2D(circle, gl_PointCoord);", "}"].join("\n"),
                l = function (t) {
                    this.item = t, this.ratio = 0;
                    for (var e = new o.SphereBufferGeometry(100, 16, 8), i = new Float32Array(e.attributes.position.count), n = 0; n < i.length; n++) i[n] = Math.random();
                    e.addAttribute("alpha", new o.BufferAttribute(i, 1)), this.geometry = e;
                    var r = new o.TextureLoader,
                        l = r.load(URL_HEADER.IMAGE + "dot.png");
                    uniforms = {
                        color: {
                            type: "c",
                            value: new o.Color(65280)
                        },
                        tick: {
                            type: "f",
                            value: 0
                        },
                        power: {
                            type: "f",
                            value: 0
                        },
                        circle: {
                            type: "t",
                            value: l
                        }
                    };
                    var c = new o.ShaderMaterial({
                        uniforms: uniforms,
                        vertexShader: a,
                        fragmentShader: h,
                        transparent: !0,
                        depthTest: !1
                    });
                    c.blending = o.AdditiveBlending;
                    var u = new o.Points(e, c);
                    t.view3d.add(u), this.cloud = u, this.ring = s.getMesh("powerupGet.png"), this.ring.material.blending = o.AdditiveBlending, t.view3d.add(this.ring), this.ring.rotation.x = -Math.PI / 2, this.ring.position.x = 0, this.ring.position.y = 0, this.ratio = 99, this.tick = 0, this.setRatio(0)
                };
            l.prototype.setRatio = function (t) {
                t !== this.ratio && (t > 1 && (t = 1), this.ratio = t, this.tick += .02 + .01 * t, this.ring.visible = this.cloud.visible = 0 !== t, this.ring.material.opacity = r.map(t, 0, 1, 0, 10), this.ring.scale.x = this.ring.scale.y = 1 - t - .1, this.cloud.material.uniforms.tick.value = -this.tick, this.cloud.material.uniforms.power.value = Math.sin(t * Math.PI))
            }, l.prototype.update = function () {
                this.cloud.rotation.x += .03, this.cloud.rotation.y += .03
            }, n.exports = l
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(16), i(48)),
                o = i(12),
                s = (i(117), ["attribute float alpha;", "varying float vAlpha;", "void main() {", "    vAlpha = alpha;", "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "    gl_Position = projectionMatrix * mvPosition;", "}"].join("\n")),
                a = ["uniform vec3 color;", "uniform float uAlpha;", "uniform sampler2D circle;", "varying float vAlpha;", "void main() {", "    gl_FragColor = vec4(color, vAlpha * uAlpha);", "}"].join("\n"),
                h = function (t) {
                    this.item = t, this.trailLength = 40, this.loader = new o.TextureLoader, this.top = 14, this.bottom = -14;
                    var e = new o.BufferGeometry,
                        i = new Float32Array(3 * this.trailLength);
                    this.realVerticies = new Float32Array(3 * this.trailLength);
                    for (var n = new Float32Array(this.trailLength), r = new Uint32Array(this.trailLength), h = 0; h < r.length; h++) r[h] = h;
                    for (var h = 0; h < n.length; h += 2) {
                        var l = h / 2 / this.trailLength;
                        n[h] = l, n[h + 1] = l
                    }
                    for (var h = 0; h < i.length; h += 3);
                    for (var h = 0; h < i.length; h += 3) {
                        var c = h / 3,
                            u = c % 2,
                            p = Math.floor(c / 2);
                        i[h] = 30 * u, i[h + 1] = 30 * p, i[h + 2] = 0
                    }
                    e.setIndex(new o.BufferAttribute(r, 1)), e.addAttribute("position", new o.BufferAttribute(i, 3)), e.addAttribute("alpha", new o.BufferAttribute(n, 1)), this.geometry = e;
                    this.loader.load(URL_HEADER.IMAGE + "dot.png");
                    uniforms = {
                        color: {
                            type: "c",
                            value: new o.Color(16730352)
                        },
                        uAlpha: {
                            type: "f",
                            value: 1
                        }
                    };
                    var d = new o.ShaderMaterial({
                        uniforms: uniforms,
                        vertexShader: s,
                        fragmentShader: a,
                        transparent: !0
                    });
                    d.side = o.DoubleSide, d.blending = o.AdditiveBlending, d.depthTest = !1;
                    var f = new o.Mesh(e, d);
                    f.drawMode = o.TriangleStripDrawMode, this.cloud = f, this.view = f, this.pos = 0
                };
            h.prototype.update = function () {
                this.pos++, this.pos %= this.trailLength / 2;
                for (var t = this.cloud.geometry.getAttribute("position"), e = 2 * this.pos, i = 2 * this.pos + 1, n = this.realVerticies, o = 0; o < t.array.length; o += 3);
                var s = this.item.view3d.position;
                n[3 * e] = s.x, n[3 * e + 1] = s.y + this.top, n[3 * e + 2] = s.z, n[3 * i] = s.x, n[3 * i + 1] = s.y + this.bottom, n[3 * i + 2] = s.z;
                for (var o = 0; o < t.array.length; o += 3) {
                    var a = o + 3 * (2 * this.pos + 2);
                    a %= n.length, t.array[o + 0] = n[a + 0] - s.x, t.array[o + 1] = n[a + 1] - s.y, t.array[o + 2] = n[a + 2]
                }
                this.view.position.x = this.item.position.x, this.view.position.y = this.item.position.y, t.needsUpdate = !0;
                var h = r.cap(r.map(this.item.body.velocity.length(), 5, 20, 0, 1), 0, 1),
                    l = this.cloud.material.uniforms.uAlpha.value;
                h < l ? l += .2 * (h - l) : l = h, this.cloud.visible = l > .1, this.cloud.material.uniforms.uAlpha.value = l, this.view.material.needsUpdate = !0
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 140
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(12)),
                o = i(16),
                s = i(126),
                a = i(128),
                h = function (t) {
                    var e = 200,
                        n = new a.CrashBody.fromRect(0, -e / 2, 100, e);
                    n.type = a.CrashBody.STATIC, n.solid = !1, this.lastTimeGall = 0, this.currentTimeGall = 0;
                    var h = n.getDebugView();
                    h.alpha = .5, s.call(this, 100, 100, h, n), this.body.position = this.position, this.groups = ["Goal"], this.type = 1, this.left = !1, this.onGoalScored = new o;
                    var l = (i(141), new r.SphereGeometry(1, 1, 1), new r.TextureLoader, new r.TextureLoader);
                    this.view3d = new r.Object3D, l.load(URL_HEADER.IMAGE + "models/texture_test_goal2.png", function (e) {
                        e.wrapS = r.ClampToEdgeWrapping, e.wrapT = r.ClampToEdgeWrapping, e.minFilter = r.LinearFilter, e.maxFilter = r.LinearFilter;
                        var i = new r.MeshBasicMaterial({
                            map: e
                        });
                        i.side = r.DoubleSide, i.transparent = !0;
                        var n = new r.OBJLoader;
                        n.load(URL_HEADER.DATA + "models/GOAL.obj", function (e) {
                            e.rotation.x = Math.PI / 2, e.traverse(function (t) {
                                t instanceof r.Mesh && (t.material = i, t.material.needsUpdate = !0)
                            }), this.view3d.add(e), e.position.y = -95, e.position.x = 100, t && (e.rotation.y = Math.PI, e.position.x = 0, e.position.y = 95), e.scale.x = e.scale.y = e.scale.z = .53
                        }.bind(this), function () { }, function () { })
                    }.bind(this)), this.enableGoal()
                };
            h.prototype = Object.create(s.prototype), h.prototype.addedToWorld = function () { }, h.prototype.reset = function () { }, h.prototype.update = function () {
                this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y, this.currentTimeGall = Date.now()
            }, h.prototype.enableGoal = function () {
                this.canGoal = !0
            }, h.prototype.disableGoal = function () {
                this.canGoal = !1
            }, h.prototype.onCollideBegin = function (t) {
                var e = t.getOtherObject(this);
                "ball" === e.name && this.canGoal && (t.ignore = !0, this.currentTimeGall - this.lastTimeGall > 1e3 && (this.lastTimeGall = Date.now(), this.onGoalScored.dispatch(this)))
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e) {
        THREE.OBJLoader = function (t) {
            this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager, this.materials = null
        }, THREE.OBJLoader.prototype = {
            constructor: THREE.OBJLoader,
            load: function (t, e, i, n) {
                var r = this,
                    o = new THREE.XHRLoader(r.manager);
                o.setPath(this.path), o.load(t, function (t) {
                    e(r.parse(t))
                }, i, n)
            },
            setPath: function (t) {
                this.path = t
            },
            setMaterials: function (t) {
                this.materials = t
            },
            parse: function (t) {
                function e(t) {
                    var e = {
                        vertices: [],
                        normals: [],
                        uvs: []
                    },
                        i = {
                            name: "",
                            smooth: !0
                        };
                    l = {
                        name: t,
                        geometry: e,
                        material: i
                    }, c.push(l)
                }

                function i(t) {
                    var e = parseInt(t);
                    return 3 * (e >= 0 ? e - 1 : e + p.length / 3)
                }

                function n(t) {
                    var e = parseInt(t);
                    return 3 * (e >= 0 ? e - 1 : e + d.length / 3)
                }

                function r(t) {
                    var e = parseInt(t);
                    return 2 * (e >= 0 ? e - 1 : e + f.length / 2)
                }

                function o(t, e, i) {
                    l.geometry.vertices.push(p[t], p[t + 1], p[t + 2], p[e], p[e + 1], p[e + 2], p[i], p[i + 1], p[i + 2])
                }

                function s(t, e, i) {
                    l.geometry.normals.push(d[t], d[t + 1], d[t + 2], d[e], d[e + 1], d[e + 2], d[i], d[i + 1], d[i + 2])
                }

                function a(t, e, i) {
                    l.geometry.uvs.push(f[t], f[t + 1], f[e], f[e + 1], f[i], f[i + 1])
                }

                function h(t, e, h, l, c, u, p, d, f, m, g, v) {
                    var y, _ = i(t),
                        x = i(e),
                        b = i(h);
                    void 0 === l ? o(_, x, b) : (y = i(l), o(_, x, y), o(x, b, y)), void 0 !== c && (_ = r(c), x = r(u), b = r(p), void 0 === l ? a(_, x, b) : (y = r(d), a(_, x, y), a(x, b, y))), void 0 !== f && (_ = n(f), x = n(m), b = n(g), void 0 === l ? s(_, x, b) : (y = n(v), s(_, x, y), s(x, b, y)))
                }
                var l, c = [],
                    u = !1,
                    p = [],
                    d = [],
                    f = [];
                e("");
                for (var m = /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, g = /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, v = /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, y = /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/, _ = /^f\s+((-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+))(?:\s+((-?\d+)\/(-?\d+)))?/, x = /^f\s+((-?\d+)\/(-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+)\/(-?\d+))(?:\s+((-?\d+)\/(-?\d+)\/(-?\d+)))?/, b = /^f\s+((-?\d+)\/\/(-?\d+))\s+((-?\d+)\/\/(-?\d+))\s+((-?\d+)\/\/(-?\d+))(?:\s+((-?\d+)\/\/(-?\d+)))?/, w = /^[og]\s*(.+)?/, S = /^s\s+(\d+|on|off)/, T = t.split("\n"), M = 0; M < T.length; M++) {
                    var E = T[M];
                    E = E.trim();
                    var A;
                    if (0 !== E.length && "#" !== E.charAt(0))
                        if (null !== (A = m.exec(E))) p.push(parseFloat(A[1]), parseFloat(A[2]), parseFloat(A[3]));
                        else if (null !== (A = g.exec(E))) d.push(parseFloat(A[1]), parseFloat(A[2]), parseFloat(A[3]));
                        else if (null !== (A = v.exec(E))) f.push(parseFloat(A[1]), parseFloat(A[2]));
                        else if (null !== (A = y.exec(E))) h(A[1], A[2], A[3], A[4]);
                        else if (null !== (A = _.exec(E))) h(A[2], A[5], A[8], A[11], A[3], A[6], A[9], A[12]);
                        else if (null !== (A = x.exec(E))) h(A[2], A[6], A[10], A[14], A[3], A[7], A[11], A[15], A[4], A[8], A[12], A[16]);
                        else if (null !== (A = b.exec(E))) h(A[2], A[5], A[8], A[11], void 0, void 0, void 0, void 0, A[3], A[6], A[9], A[12]);
                        else if (null !== (A = w.exec(E))) {
                            var C = A[0].substr(1).trim();
                            u === !1 ? (u = !0, l.name = C) : e(C)
                        } else if (/^usemtl /.test(E)) l.material.name = E.substring(7).trim();
                        else if (/^mtllib /.test(E));
                        else {
                            if (null === (A = S.exec(E))) throw new Error("Unexpected line: " + E);
                            l.material.smooth = "1" === A[1] || "on" === A[1]
                        }
                }
                for (var L = new THREE.Group, M = 0, R = c.length; M < R; M++) {
                    l = c[M];
                    var P = l.geometry,
                        O = new THREE.BufferGeometry;
                    O.addAttribute("position", new THREE.BufferAttribute(new Float32Array(P.vertices), 3)), P.normals.length > 0 ? O.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(P.normals), 3)) : O.computeVertexNormals(), P.uvs.length > 0 && O.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(P.uvs), 2));
                    var I;
                    null !== this.materials && (I = this.materials.create(l.material.name)), I || (I = new THREE.MeshPhongMaterial, I.name = l.material.name), I.shading = l.material.smooth ? THREE.SmoothShading : THREE.FlatShading;
                    var D = new THREE.Mesh(O, I);
                    D.name = l.name, L.add(D)
                }
                return L
            }
        }
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = (n(a), i(16)),
            l = (n(h), i(32)),
            c = n(l),
            u = i(126),
            p = n(u),
            d = i(48),
            f = n(d),
            m = i(12),
            g = (n(m), i(128)),
            v = n(g),
            y = i(133),
            _ = n(y),
            x = i(134),
            b = n(x),
            w = i(117),
            S = (n(w), i(143)),
            T = n(S),
            M = i(124),
            E = n(M),
            A = function (t) {
                function e(i) {
                    r(this, e);
                    var n = new v["default"].CrashBody.fromRect((-20), (-20), 40, 40),
                        s = n.getDebugView(),
                        a = o(this, t.call(this, 100, 100, s, n));
                    return a.right = i, a.view3d = new T["default"](a), a.view3d.scale.x = a.view3d.scale.y = a.view3d.scale.z = .3, a.type = 1, a.active = !0, a.body.position = a.position, a.groups = ["GoalKeeper"], a.name = "keeper", a.body.setMaxSpeed(2.5), a.ballSkills = new _["default"](a), a.ballSkills.speedRange = 1, a.movement = new b["default"](a), a.diveTarget = null, a.diving = !1, a.ballSkills.offset.x = i ? -24 : 24, a.ballSkills.offset.z = 38, a.balanceData = null, a
                }
                return s(e, t), e.prototype.show = function () {
                    this.hidden = !1, this.view3d.keeperMesh.material.opacity = 1
                }, e.prototype.hide = function () {
                    this.hidden = !0, this.view3d.keeperMesh.material.opacity = 0
                }, e.prototype.dive = function (t) {
                    if (!this.diving) {
                        this.diveTarget = t, this.diving = !0, this.body.friction = .9;
                        var e = t.position.x - this.body.position.x,
                            i = t.position.y - this.body.position.y,
                            n = Math.sqrt(e * e + i * i);
                        e /= n, i /= n, this.body.velocity.x = 15 * e, this.body.velocity.y = 15 * i, this.body.acceleration.x = 0, this.body.acceleration.y = 0, this.body.setMaxSpeed(20)
                    }
                }, e.prototype.reset = function () { }, e.prototype.update = function () {
                    if (this.diving) {
                        var t = this.body.velocity.length();
                        if (this.diveTarget) {
                            var e = this.diveTarget.position.x - this.body.position.x,
                                i = this.diveTarget.position.y - this.body.position.y,
                                n = Math.sqrt(e * e + i * i);
                            e /= n, i /= n, this.body.velocity.x = e * t, this.body.velocity.y = i * t
                        }
                        t < 2 && (this.diving = !1, this.body.friction = .9, this.body.setMaxSpeed(2.5))
                    } else this.movement.update();
                    this.ballSkills.update(), this.view3d.update(), this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y
                }, e.prototype.kickOut = function (t, e) {
                    this.ballSkills.pass(t, e, 10, 20), this.view3d.animation.play("kick", "stand")
                }, e.prototype.onCollideBegin = function (t) {
                    if (!this.hidden) {
                        var e = t.getOtherObject(this);
                        if ("ball" === e.name) {
                            var i = e;
                            if (i.perfect && i.shot) return void (t.ignore = !0);
                            c["default"].sfx.playGroup("croudAngry");
                            var n = i.body.velocity.length();
                            n > 15 ? (i.body.velocity.x *= -1, i.body.velocity.y = f["default"].randomSign() * f["default"].random(3, 8), i.body.velocity.setLength(.5 * n)) : (t.ignore = !0, i.owner && i.owner.ballSkills.releaseBall(), this.ballSkills.pickupBall(i), this.diveTarget = null, this.diving = !1)
                        } else "player" === e.name && (e.state === E["default"].PLAYER_STATE.KICK_CHARGE && e.shootRelease(this), t.ignore = !0)
                    }
                }, e
            }(p["default"]);
        e["default"] = A, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(12)),
                o = i(117),
                s = i(36),
                s = (i(126), i(36)),
                a = (i(128), i(23)),
                h = i(130),
                l = (new r.PlaneGeometry(200, 200), i(124)),
                c = (l.PLAYER_STATE, function (t) {
                    r.Object3D.call(this), this.keeper = t, this.scale.x = this.scale.y = this.scale.z = .22, this.flipContainer = new r.Object3D, this.flipContainer.rotation.x = -Math.PI + .6, this.add(this.flipContainer), this.keeperMesh = new o.getMesh, this.flipContainer.add(this.keeperMesh), t.right && (this.flipContainer.scale.x *= -1), this.animation = new h, this.animation.register("run", {
                        frames: s.getTexturesFromFramesWithPrefix("characters_goalkeeper_stand00%%.png", 3, 1),
                        loop: !0
                    }), this.animation.register("stand", {
                        frames: s.getTexturesFromFramesWithPrefix("characters_goalkeeper_stand00%%.png", 3, 1),
                        loop: !0
                    }), this.animation.register("kick", {
                        frames: s.getTexturesFromFramesWithPrefix("characters_goalkeeper_kick00%%.png", 10, 1),
                        loop: !1
                    }), this.animation.register("jump", {
                        frames: s.getTexturesFromFramesWithPrefix("characters_goalkeeper_jumpup00%%.png", 1, 10),
                        loop: !1
                    }), this.animation.play("stand")
                });
            c.prototype = Object.create(r.Object3D.prototype), c.prototype.setData = function (t) { }, c.prototype.update = function () {
                this.animation.update(a.game.deltaTime), this.count++, o.setUvs(this.keeperMesh, this.animation.texture)
            }, n.exports = c
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 144; Game Background
    PitchObjectFn,
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(126)),
                o = i(128),
                s = function (t, e, i, n) {
                    var s = new o.CrashBody.fromRect(0, 0, i, n);
                    s.type = o.CrashBody.STATIC;
                    var a = s.getDebugView();
                    this.wall = !0, r.call(this, t, e, a, s), this.body.position = this.position, this.groups = ["Wall"]
                };
            s.prototype = Object.create(r.prototype), s.prototype.reset = function () { }, s.prototype.update = function () { }, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e) {
        "use strict";
        var i = function (t) {
            this.ticker = t, this.updateBind = this.update.bind(this), this.waits = [], this.active = !1
        };
        i.prototype.wait = function (t, e, i) {
            var n = {
                callback: e,
                scope: i,
                count: t || 2
            };
            this.waits.push(n), this.active || (this.active = !0, this.ticker.add(this.update, this))
        }, i.prototype.update = function () {
            for (var t = this.waits.length - 1; t >= 0; t--) {
                var e = this.waits[t];
                e.count--, e.count <= 0 && (e.callback.call(e.scope), this.waits.splice(t, 1))
            }
            this.waits.length < 0 && (this.active = !1, this.ticker.remove(this.update, this))
        }, t.exports = i
    },
    function (t, e, i) {
        "use strict";
        var n = (i(8), function (t) { });
        n.constructor = n, n.prototype.get, t.exports = n
    },
    teamManagerFn,
    function (t, e, i) {
        "use strict";
        var n = i(124),
            r = n.PLAYER_STATE,
            o = {
                dx: 0,
                dy: 0,
                player: null
            },
            s = function (t, e) {
                for (var i, n = e.children, s = t.movement.direction.x, a = t.movement.direction.y, h = 1 / 0, l = null, c = s, u = a, p = 0; p < n.length; p++)
                    if (i = n[p], i !== t && i.state !== r.FALL) {
                        var d = i.position.x - t.position.x,
                            f = i.position.y - t.position.y,
                            m = Math.sqrt(d * d + f * f);
                        d /= m, f /= m;
                        var g = d * s + f * a;
                        g > .6 && m < h && (c = d, u = f,
                            l = i, h = m)
                    }
                return o.dx = c, o.dy = u, o.player = l, o
            };
        t.exports = s
    },
    //function index: 150
    function (t, e, i) {
        "use strict";
        var n = i(124),
            r = n.PLAYER_STATE,
            o = {
                dx: 0,
                dy: 0,
                player: null
            },
            s = function (t, e) {
                for (var i, n = e.children, s = 1 / 0, a = n[0], h = 0, l = 0, c = 0; c < n.length; c++)
                    if (i = n[c], i !== t && i.state !== r.FALL) {
                        var u = i.position.x - t.position.x,
                            p = i.position.y - t.position.y,
                            d = Math.sqrt(u * u + p * p);
                        u /= d, p /= d, d < s && (h = u, l = p, a = i, s = d)
                    }
                return o.dx = h, o.dy = l, o.len = s, o.player = a, o
            };
        t.exports = s
    },
    function (t, e, i) {
        "use strict";
        var n = i(124),
            r = n.PLAYER_STATE,
            o = {
                dx: 0,
                dy: 0,
                player: null
            },
            s = function (t, e, i, n) {
                for (var s, a = i.children, h = 1 / 0, l = a[0], c = 0, u = 0, p = 0; p < a.length; p++)
                    if (s = a[p], s.state !== r.FALL) {
                        var d = s.position.x - t.position.x,
                            f = s.position.y - t.position.y,
                            m = Math.sqrt(d * d + f * f);
                        d /= m, f /= m, s === e && (m -= 100), m < h && (c = d, u = f, l = s, h = m)
                    }
                return o.dx = c, o.dy = u, o.player = l, o
            };
        t.exports = s
    },
    function (t, e, i) {
        "use strict";
        var n = (i(8), i(124)),
            r = i(48),
            o = i(149),
            s = (n.TEAM_STATE, function (t, e, i) {
                this.game = i,
                this.left = e,
                this.keeper = t,
                e ? (this.goal = i.goalLeft, this.teamBad = i.teamLeft, this.team = i.teamRight) : (this.goal = i.goalRight, this.team = i.teamLeft, this.teamBad = i.teamRight, window.keeperm = this),
                this.keeperHome = this.goal.position.clone(),
                e ? this.keeperHome.x = 40 : this.keeperHome.x -= 40,
                this.keeper.signals.onBallRecieved.add(this.onRecievedBall, this),
                this.keeper.signals.onBallLost.add(this.onLostBall, this),
                this.closeDownDistance = 300,
                this.active = !0
            });
        s.constructor = s, s.prototype.onRecievedBall = function () {
            if (!this.keeper.hidden) {
                if (this.left) {
                    var t = Math.min(this.goal.position.x + 320, this.keeper.position.x + 100);
                    this.keeper.movement.moveTo(t, this.keeper.position.y)
                } else {
                    var t = Math.max(this.goal.position.x - 220, this.keeper.position.x - 100);
                    this.keeper.movement.moveTo(t, this.keeper.position.y)
                }
                this.active = !1, this.game.wait.wait(120, function () {
                    this.keeper.movement.moveTo(this.keeperHome.x, this.keeperHome.y),
                    this.left ? this.keeper.movement.direction.set(1, 0) : this.keeper.movement.direction.set(-1, 0);
                    var t = o(this.keeper, this.teamBad);
                    this.keeper.kickOut(t.dx, t.dy), this.active = !0
                }, this)
            }
        }, s.prototype.show = function () {
            this.keeper.position.x = this.keeperHome.x, this.keeper.position.y = this.keeperHome.y
        }, s.prototype.hide = function () {
            this.keeper.position.y = -1e3
        }, s.prototype.update = function () {
            if (!this.keeper.hidden && this.active) {
                var t = this.game.ball,
                    e = Math.abs(t.position.x - this.goal.position.x),
                    i = Math.abs(t.position.y - this.goal.position.y),
                    n = Math.sqrt(e * e + i * i);
                if (n < 220 && t.active && this.keeper.dive(t), e < this.closeDownDistance && i < 200 && t.active) this.keeper.movement.follow(t);
                else {
                    var o = this.goal.position.y;
                    e < 600 && (o = r.cap(t.position.y, this.goal.position.y - 20, this.goal.position.y + 20)), this.keeper.movement.moveTo(this.keeperHome.x, o)
                }
                var s = this.keeper;
                s.right ? s.body.velocity.x < 0 && s.body.position.x < this.goal.position.x - 300 && (s.body.velocity.x *= 0) : s.body.velocity.x > 0 && s.body.position.x > this.goal.position.x + 300 && (s.body.velocity.x *= 0)
            }
        },
        s.prototype.onLostBall = function () { },
        t.exports = s
    },
    function (t, e, i) {
        "use strict";
        var n = (i(146), i(34)),
            r = i(32),
            o = function (t) {
                this.game = t, this.active = !1, this.firstRun = !0, this.runID = 0
            };
        o.prototype.run = function (t, e) {
            this.active = !0, this.runID++, this.game.movieBorders.show(), this.left = e;
            var i = this.game.ball;
            i.setActive(!1), i.body.velocity.x = 0, i.body.velocity.y = 0, i.body.position.x = .5 * this.game.pitchWidth, i.body.position.y = .5 * this.game.pitchHeight, t && this.firstRun ? e ? (this.game.teamManagerA.resetPositions(!0), this.game.teamManagerB.resetPositions(!1)) : (this.game.teamManagerA.resetPositions(!1), this.game.teamManagerB.resetPositions(!0)) : e ? (this.game.teamManagerA.resetPositions(!0, !0), this.game.teamManagerB.resetPositions(!1, !0)) : (this.game.teamManagerA.resetPositions(!1, !0), this.game.teamManagerB.resetPositions(!0, !0));
            var o = 150;
            0 === this.game.goalsA && 0 === this.game.goalsB && (this.game.wait.wait(o, function () {
                this.game.hud.message.show(n.MESSAGE_ID.VS)
            }, this), o += 150);
            var s = this.runID;
            this.game.wait.wait(o, function () {
                this.active && s === this.runID && (this.game.hud.message.show(n.MESSAGE_ID.WHISTLE), TweenLite.delayedCall(.5, function () {
                    r.sfx.play("whistle_full_time")
                }))
            }, this), o += 150, this.game.wait.wait(o, function () {
                this.active && s === this.runID && (this.game.movieBorders.hide(), this.game.ball.setActive(!0), this.game.pitch.hideLogo(), this.left ? this.game.teamManagerA.go() : this.game.teamManagerB.go(), this.game.timer.start(!0))
            }, this), this.game.pitch.showLogo()
        }, o.prototype.update = function () { }, o.prototype.reset = function () {
            this.active = !1
        }, t.exports = o
    },
    function (t, e, i) {
        "use strict";
        var n = (i(146), i(34)),
            r = function (t) {
                this.game = t, this.left = !1, this.active = !1
            };
        r.prototype.run = function (t) {
            this.active = !0, this.left = t, this.game.movieBorders.show(.05, 1), this.game.flash.flash(), this.game.hud.party.visible = !0, this.game.world.view3d.camera.shake(30), this.game.world.view3d.camera.celebrateMode = !0, this.game.teamManagerA.left === t ? (this.game.teamManagerB.happy(), this.game.teamManagerA.sad()) : (this.game.teamManagerA.happy(), this.game.teamManagerB.sad()), this.game.hud.message.show(n.MESSAGE_ID.GOAL), this.game.wait.wait(150, function () {
                this.active && (window.firstPlay || this.game.hud.message.show(n.MESSAGE_ID.SCORE))
            }, this), this.game.timer.stop(), this.game.ball.setActive(!1), TweenLite.to(this.game.black, .8, {
                delay: 5,
                alpha: 1,
                ease: Sine.easeOut,
                onComplete: this.onFadeOut,
                onCompleteScope: this
            })
        }, r.prototype.onFadeOut = function () {
            TweenLite.to(this.game.black, .8, {
                alpha: 0,
                ease: Sine.easeOut
            });
            var t = this.game.ball;
            t.body.velocity.x = 0, t.body.velocity.y = 0, t.body.position.x = .5 * this.game.pitchWidth, t.body.position.y = .5 * this.game.pitchHeight, this.game.world.view3d.camera.celebrateMode = !1, this.game.hud.party.visible = !1, this.active && this.game.scripts.start.run(!1, this.left)
        }, r.prototype.update = function () { }, r.prototype.reset = function () {
            this.active = !1
        }, t.exports = r
    },
    function (t, e, i) {
        "use strict";
        var n = (i(146), i(124)),
            r = i(49),
            o = i(34),
            s = i(32),
            a = function (t) {
                this.game = t, this.active = !1
            };
        a.prototype.run = function (t) {
            this.active = !0,
            t === n.END_STATE.LOSE ? (
                this.game.teamManagerA.sad(),
                this.game.teamManagerB.happy(),
                this.game.hud.message.show("lose :/")
            ) : t === n.END_STATE.WIN ? (
                this.game.teamManagerA.happy(),
                this.game.teamManagerB.sad(),
                this.game.hud.message.show("WIN!!"),
                this.game.flash.flash(),
                this.game.hud.party.visible = !0,
                this.game.world.view3d.camera.shake(30)
            ) : t === n.END_STATE.DRAW && (this.game.teamManagerA.sad(), this.game.teamManagerB.happy(), this.game.hud.message.show("DRAW!!")),
            r.matchResult.goalsA = this.game.goalsA,
            r.matchResult.goalsB = this.game.goalsB,
            this.game.world.view3d.camera.endMode = !0,
            this.game.ball.body.velocity.x *= .1,
            this.game.ball.body.velocity.y *= .1,
            this.game.ball.setActive(!1),
            this.game.hud.message.show(o.MESSAGE_ID.WHISTLE),
            TweenLite.delayedCall(.5, function () {
                this.active && s.sfx.play("whistle_full_time")
            }.bind(this)),
            TweenLite.to(this.game.black, .3, {
                delay: 6,
                alpha: 1,
                ease: Sine.easeOut,
                onComplete: this.onFadeOut,
                onCompleteScope: this
            })
        }, a.prototype.onFadeOut = function () {
            TweenLite.to(this.game.black, .3, {
                alpha: 0,
                ease: Sine.easeOut
            }), this.game.hud.party.visible = !1, this.game.world.view3d.camera.endMode = !1, this.active && this.game.gameover()
        }, a.prototype.update = function () { }, a.prototype.reset = function () {
            this.active = !1
        }, t.exports = a
    },
    function (t, e, i) {
        "use strict";
        var n = (i(146), i(23)),
            r = i(32),
            o = function (t) {
                this.game = t, this.active = !1
            };
        o.prototype.run = function (t) {
            this.active = !0, this.game.movieBorders.show(), n.game.stop(), this.game.superMove.onFinish.addOnce(this.onFinish, this), this.game.superMove.show(t.data)
        }, o.prototype.onFinish = function () {
            this.active && (n.game.start(), r.sfx.play("big_kick"))
        }, o.prototype.reset = function () {
            this.active = !1
        }, t.exports = o
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(23),
                o = i(16),
                s = function (t, e) {
                    this.isOn = !1, this.count = 0, this.ticker = e || r.instance, this.duration = 60 * t, this.onComplete = new o
                };
            s.prototype.setDuration = function (t) {
                this.duration = 60 * t
            },
            s.prototype.getDuration = function () {
                return this.duration / 60
            },
            s.prototype.start = function (t) {
                this.isOn || (this.ticker.add(this.update, this), this.isOn = !0), t || (this.count = 0)
            },
            s.prototype.stop = function () {
                this.isOn = !1, this.ticker.remove(this.update, this)
            },
            s.prototype.reset = function () {
                this.stop(), this.count = 0
            },
            s.prototype.getRatio = function () {
                return this.count / this.duration
            },
            s.prototype.getSeconds = function () {
                return this.count / 60
            },
            s.prototype.getSecondsLeft = function () {
                return (this.duration - this.count) / 60
            },
            s.prototype.update = function () {
                this.count += this.ticker.deltaTime, this.count > this.duration && (this.onComplete.dispatch(), this.stop())
            },
            n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    pickupManagerFn,
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(16),
                o = i(126),
                s = i(128),
                a = (i(23), i(117)),
                h = (i(130), i(32)),
                l = i(36),
                c = function () {
                    var t = new PIXI.DisplayObjectContainer,
                        e = new s.CrashBody.fromRect((-10), (-10), 20, 20);
                    o.call(this, 0, 0, t, e), this.type = 4, this.timer = 0, this.tick = 100 * Math.random(), this.onDead = new r, this.onPickedup = new r, e.position = this.position, this.height = 300;
                    var i = a.getMesh("pickup_box.png");
                    this.view3d = i, i.scale.x = i.scale.y = i.scale.z = .2, i.rotation.x = window.test - Math.PI, this.powerup = null, this.groups = ["pickup"], this.shadow = a.getMesh(URL_HEADER.IMAGE + "game/game_objects/ball-shadow.png", .5, .5), this.shadow.position.z = 10, i.material.depthTest = !1, this.shadow.scale.x = this.shadow.scale.y = this.shadow.scale.z = .1, this.shadow.position.z = -6, this.pickupEffect = new PIXI.Sprite.from("pickup_00000.png"), this.pickupEffect.anchor.set(.5), this.pickupEffect.blendMode = PIXI.BLEND_MODES.ADD, this.pickupFrames = l.getTexturesFromFramesWithPrefix("pickup_000%%.png", 6), this.frameTick = 0, this.pickedUp = !1
                };
            c.prototype = Object.create(o.prototype),
            c.prototype.setType = function (t) {
                this.powerup && this.view.removeChild(this.powerup.icon), this.powerup = t, this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y
            },
            c.prototype.addedToWorld = function () {
                this.world.view3d.scene.add(this.shadow), this.world.overlay.addChild(this.pickupEffect)
            },
            c.prototype.removedFromWorld = function () {
                this.world.view3d.scene.remove(this.shadow), this.world.overlay.removeChild(this.pickupEffect)
            },
            c.prototype.reset = function (t) {
                this.view3d.visible = !0, this.height = 300, this.powerup = t, this.landed = !1, this.view3d.position.z = 300, this.canCollide = !0, this.pickupEffect.visible = !1, this.shadow.visible = !0, this.pickedUp = !1, t.customIcon ? (a.setUvs(this.view3d, PIXI.Texture.from(t.customIcon), .5, .85), this.view3d.scale.x = this.view3d.scale.y = this.view3d.scale.z = .2) : (a.setUvs(this.view3d, PIXI.Texture.from("pickup_box.png"), .5, .85), this.view3d.scale.x = this.view3d.scale.y = this.view3d.scale.z = .2), this.shadow.scale.x = this.shadow.scale.y = this.shadow.scale.z = 0, TweenLite.to(this.view3d.position, 1.5, {
                    z: 2,
                    ease: Bounce.easeOut
                }), TweenLite.to(this.shadow.scale, 1.5, {
                    x: .32,
                    y: .32,
                    z: .32,
                    ease: Bounce.easeOut
                })
            },
            c.prototype.update = function () {
                if (this.timer++, this.timer >= 1e4 && this.destroy(), this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y, this.shadow.position.x = this.view3d.position.x, this.shadow.position.y = this.view3d.position.y - 5, this.view3d.rotation.x = window.test - Math.PI, this.tick += .1, this.view3d.rotation.z = .1 * Math.sin(1.6 * this.tick), this.view3d.scale.x = .2 + .01 * Math.sin(this.tick), this.view3d.scale.y = .2 + .01 * Math.cos(this.tick), this.pickedUp) {
                    var t = this.world.view3d.toScreenPosition(this);
                    if (this.pickupEffect.position.x = t.x, this.pickupEffect.position.y = t.y, this.frameTick > this.pickupFrames.length) this.destroy();
                    else {
                        var e = this.pickupFrames[0 | this.frameTick];
                        this.pickupEffect._texture = e, this.frameTick += .4
                    }
                }
            },
            c.prototype.activate = function () {
                this.onPickedup.dispatch(this)
            },
            c.prototype.onCollideBegin = function (t) {
                var e = t.getOtherObject(this);
                if ("player" === e.name) {
                    var i = this.world.view3d.toScreenPosition(this);
                    h.sfx.play("bonus_box_pickup"), h.sfx.playGroup("croudHappy");
                    var n = 30,
                        r = i.x,
                        o = i.y - 50,
                        s = !1;
                    r < n || r > 1136 - n ? s = !0 : (o < n || o > 745 - n) && (s = !0), s || (this.pickedUp = !0, this.canCollide = !1, this.view3d.visible = !1, this.shadow.visible = !1, this.frameTick = 0, this.pickupEffect.visible = !0, e.setPowerUp(this.powerup))
                }
            },
            n.exports = c
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 160
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(128), i(16), i(48), i(157)),
                o = i(23),
                s = i(161),
                a = function () {
                    this.item = null, this.timer = new r(10, o.game), this.timer.onComplete.add(this.stop, this), this.trailEffect = new s, this.dead = !1
                };
            a.prototype.reset = function (t) {
                this.trailEffect.item = t, this.item = t, this.dead = !1, this.timer.start(), this.item.speedBoost = !0, this.item.body.setMaxSpeed(4), t.world.view3d.scene.add(this.trailEffect.cloud)
            }, a.prototype.update = function () {
                this.trailEffect.update(this.item)
            }, a.prototype.stop = function () {
                this.item.speedBoost = !1, this.dead = !0, this.item.body.setMaxSpeed(3), this.item.world.view3d.scene.remove(this.trailEffect.cloud)
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(16), i(48), i(12)),
                o = (i(117), ["attribute float alpha;", "attribute float random;", "uniform float tick;", "uniform float power;", "varying float valpha;", "void main() {", "    vec3 pos = position;", "    pos.z = alpha * 250.0 * mix(0.5, 1.0, random);", "    float scaleOff = mix(0.5, 1.0, random);", "    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );", "    valpha = 1.0-(alpha * 3.0);", "    gl_PointSize = (40.0 + (103.0 * (alpha * 3.0) ) )* 2.0 * scaleOff;", "    gl_Position = projectionMatrix * mvPosition;", "}"].join("\n")),
                s = ["uniform vec3 ucolor;", "uniform sampler2D circle;", "varying float valpha;", "void main() {", "    vec4 color = texture2D(circle, gl_PointCoord);", "    gl_FragColor = vec4(color.rgb, color.a * valpha * 0.5);", "}"].join("\n"),
                a = function () {
                    this.ratio = 0, this.totalDust = 20;
                    var t = [];
                    this.count = 0, this.targetCount = 0;
                    for (var e = 0; e < this.totalDust; e++) t.push(140 * Math.random(), 0, 0);
                    var i = new Float32Array(t),
                        n = new r.BufferGeometry;
                    n.addAttribute("position", new r.BufferAttribute(i, 3));
                    for (var a = new Float32Array(n.attributes.position.count), e = 0; e < a.length; e++) a[e] = 0;
                    for (var h = new Float32Array(n.attributes.position.count), e = 0; e < h.length; e++) h[e] = Math.random();
                    n.addAttribute("alpha", new r.BufferAttribute(a, 1)), n.addAttribute("random", new r.BufferAttribute(h, 1)), this.geometry = n;
                    var l = r.ImageUtils.loadTexture(URL_HEADER.IMAGE + "smoke_mixed.png");
                    uniforms = {
                        ucolor: {
                            type: "c",
                            value: new r.Color(0)
                        },
                        tick: {
                            type: "f",
                            value: 0
                        },
                        power: {
                            type: "f",
                            value: 0
                        },
                        circle: {
                            type: "t",
                            value: l
                        }
                    };
                    var c = new r.ShaderMaterial({
                        uniforms: uniforms,
                        vertexShader: o,
                        fragmentShader: s,
                        transparent: !0,
                        depthTest: !1
                    }),
                        u = new r.Points(n, c);
                    u.frustumCulled = !1, this.cloud = u, this.ratio = 99, this.tick = 0
                };
            a.prototype.update = function (t) {
                var e = this.cloud.geometry.getAttribute("position"),
                    i = this.cloud.geometry.getAttribute("alpha"),
                    n = e.array,
                    r = i.array;
                this.count += .5, this.count %= this.totalDust, this.targetCount;
                var o = t.body.velocity.length();
                if (!(this.count % 1) && o > 3) {
                    var s = t.position.x;
                    t.body.velocity.x > 0 ? s -= 20 : s += 20, n[3 * this.count] = s + 10 * (Math.random() - .5), n[3 * this.count + 1] = t.position.y, r[this.count] = 0
                }
                for (var a = 0; a < this.totalDust; a++) r[a] += .01;
                e.needsUpdate = !0, i.needsUpdate = !0
            }, n.exports = a
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(128), i(16), i(48), i(157)),
                s = i(23),
                a = (i(117), null),
                h = function () {
                    if (this.item = null, this.timer = new o(8, s.game), this.timer.onComplete.add(this.stop, this), !a) {
                        a = [];
                        for (var t = 0; t < 40; t++) {
                            var e = t;
                            e < 10 && (e = "0" + e);
                            var i = r.Texture.from(URL_HEADER.IMAGE + "game/shield/shield_" + e + ".png"),
                                n = new THREE.Texture;
                            n.image = i.baseTexture.source, n.needsUpdate = !0, a.push(n)
                        }
                    }
                    var h = new THREE.SphereGeometry(20, 32, 32),
                        l = a[0],
                        c = new THREE.MeshBasicMaterial({
                            map: l
                        });
                    c.side = THREE.DoubleSide, c.blending = THREE.AdditiveBlending, c.transparent = !0, c.alphaTest = .25;
                    var u = new THREE.Mesh(h, c);
                    this.shieldView = new THREE.Object3D, this.shieldView.position.y = 30, this.shieldView.position.z = 100, this.ball = u, this.count = 0, this.dead = !1;
                    var i = r.Texture.from(URL_HEADER.IMAGE + "game/shield_bubble.png"),
                        n = new THREE.Texture;
                    n.image = i.baseTexture.source, n.needsUpdate = !0;
                    var c = new THREE.MeshBasicMaterial({
                        map: n
                    });
                    c.side = THREE.DoubleSide, c.blending = THREE.AdditiveBlending, c.transparent = !0, c.depthTest = !1, c.opacity = .5;
                    var h = new THREE.PlaneGeometry(60, 60),
                        p = new THREE.Mesh(h, c);
                    p.rotation.x = window.test - Math.PI, this.outline = p, this.shieldView.scale.x = this.shieldView.scale.y = this.shieldView.scale.z = 9, this.shieldView.add(u), this.shieldView.add(this.outline)
                };
            h.prototype.reset = function (t) {
                this.item = t, this.dead = !1, this.timer.start(), this.item.canBeTackled = !1, this.item.view3d.add(this.shieldView)
            }, h.prototype.update = function () {
                this.ball.rotation.y += .02, this.ball.rotation.x += .02, this.count += 1, this.ball.material.map = a[(0 | this.count) % a.length], this.ball.material.opacity = .2 + .5 * (Math.sin(.1 * this.count) + 1) * .6, this.ball.material.needsUpdate = !0
            }, h.prototype.stop = function (t) {
                this.item.canBeTackled = !0, this.dead = !0, this.item.view3d.remove(this.shieldView)
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(128), i(16), i(48)),
                o = i(157),
                s = i(23),
                a = i(12),
                h = i(117),
                l = i(126),
                c = i(36),
                u = i(53),
                p = i(32),
                d = function () {
                    this.item = null, this.timer = new o(10, s.game), this.timer.onComplete.add(this.stop, this), this.dead = !1
                };
            d.prototype.reset = function (t) {
                var e = t.isTeamA ? t.world.game.teamLeft : t.world.game.teamRight;
                p.sfx.play("electro_cute"), e.run(function (t) {
                    if (t.ballSkills.ball) {
                        var e = Math.random() * Math.PI * 2;
                        t.ballSkills.pass(Math.sin(e), Math.cos(e), 5, 10)
                    }
                    t.fallOver(), t.fallWait = -30;
                    var i = u.get(m);
                    i.reset(t), t.world.add(i)
                }, this)
            }, d.prototype.update = function () { }, d.prototype.stop = function () { }, n.exports = d;
            var f, m = function () {
                l.call(this), this.view3d = new a.Object3D;
                var t = h.getMesh("lightning_03.png", .5, 0);
                this.view3d.scale.x = this.view3d.scale.y = this.view3d.scale.z = .22, this.light = t, t.material.blending = a.AdditiveBlending, this.view3d.add(t), this.view3d.rotation.x = -Math.PI / 2, this.tick = 0, f || (f = c.getTexturesFromFrames(["lightning_01.png", "lightning_02.png", "lightning_03.png", "lightning_04.png"])), this.life = 0, this.target = null
            };
            m.prototype = Object.create(l.prototype), m.prototype.reset = function (t) {
                this.target = t, this.life = 0, this.position.x = t.position.x, this.position.y = t.position.y + 30
            }, m.prototype.update = function () {
                this.view3d.position.x = this.position.x, this.view3d.position.y = this.position.y, this.tick += .5, h.setUvs(this.light, f[this.tick % f.length | 0], .5, 0), this.target.view3d.rotation.y = r.random(-.3, .3), this.life++, this.life > 100 && (this.destroy(), this.target.view3d.rotation.y = 0)
            }
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = (i(8), i(128), i(16), i(48), i(157), i(23), function () {
                this.item = null
            });
            r.customIcon = "banana-skin.png", r.prototype.reset = function (t) {
                if (t.ballSkills.ball) {
                    var e = Math.random() * Math.PI * 2;
                    t.ballSkills.pass(Math.sin(e), Math.cos(e), 5, 10)
                }
                t.fallOver(), t.fallWait = -30
            }, r.prototype.update = function () { }, r.prototype.stop = function (t) { }, n.exports = r
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        ! function (r) {
            function o(t, e, i, n, r) {
                this._listener = e, this._isOnce = i, this.context = n, this._signal = t, this._priority = r || 0
            }

            function s(t, e) {
                if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
            }

            function a() {
                this._bindings = [], this._prevParams = null;
                var t = this;
                this.dispatch = function () {
                    a.prototype.dispatch.apply(t, arguments)
                }
            }
            o.prototype = {
                active: !0,
                params: null,
                execute: function (t) {
                    var e, i;
                    return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
                },
                detach: function () {
                    return this.isBound() ? this._signal.remove(this._listener, this.context) : null
                },
                isBound: function () {
                    return !!this._signal && !!this._listener
                },
                isOnce: function () {
                    return this._isOnce
                },
                getListener: function () {
                    return this._listener
                },
                getSignal: function () {
                    return this._signal
                },
                _destroy: function () {
                    delete this._signal, delete this._listener, delete this.context
                },
                toString: function () {
                    return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
                }
            }, a.prototype = {
                VERSION: "1.0.0",
                memorize: !1,
                _shouldPropagate: !0,
                active: !0,
                _registerListener: function (t, e, i, n) {
                    var r, s = this._indexOfListener(t, i);
                    if (s !== -1) {
                        if (r = this._bindings[s], r.isOnce() !== e) throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.")
                    } else r = new o(this, t, e, i, n), this._addBinding(r);
                    return this.memorize && this._prevParams && r.execute(this._prevParams), r
                },
                _addBinding: function (t) {
                    var e = this._bindings.length;
                    do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
                    this._bindings.splice(e + 1, 0, t)
                },
                _indexOfListener: function (t, e) {
                    for (var i, n = this._bindings.length; n--;)
                        if (i = this._bindings[n], i._listener === t && i.context === e) return n;
                    return -1
                },
                has: function (t, e) {
                    return this._indexOfListener(t, e) !== -1
                },
                add: function (t, e, i) {
                    return s(t, "add"), this._registerListener(t, !1, e, i)
                },
                addOnce: function (t, e, i) {
                    return s(t, "addOnce"), this._registerListener(t, !0, e, i)
                },
                remove: function (t, e) {
                    s(t, "remove");
                    var i = this._indexOfListener(t, e);
                    return i !== -1 && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), t
                },
                removeAll: function () {
                    for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
                    this._bindings.length = 0
                },
                getNumListeners: function () {
                    return this._bindings.length
                },
                halt: function () {
                    this._shouldPropagate = !1
                },
                dispatch: function (t) {
                    if (this.active) {
                        var e, i = Array.prototype.slice.call(arguments),
                            n = this._bindings.length;
                        if (this.memorize && (this._prevParams = i), n) {
                            e = this._bindings.slice(), this._shouldPropagate = !0;
                            do n--; while (e[n] && this._shouldPropagate && e[n].execute(i) !== !1)
                        }
                    }
                },
                forget: function () {
                    this._prevParams = null
                },
                dispose: function () {
                    this.removeAll(), delete this._bindings, delete this._prevParams
                },
                toString: function () {
                    return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
                }
            };
            var h = a;
            h.Signal = a, n = function () {
                return h
            }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
        }(this)
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(16), function (t, e, i) {
                    r.Container.call(this), this.w = t, this.h = e, this.ratio = i || .1;
                    var n = (new r.Graphics).beginFill(0).drawRect(0, 0, 32, 32).generateTexture();
                    this.topBar = new r.Sprite(n), this.bottomBar = new r.Sprite(n), this.addChild(this.topBar), this.addChild(this.bottomBar), this.resize(t, e), this.shown = !1, this.topBar.anchor.y = 1, this.bottomBar.anchor.y = -1
                });
            o.prototype = Object.create(r.Container.prototype), o.prototype.show = function (t) {
                t ? (this.topBar.anchor.y = 0, this.bottomBar.anchor.y = 0) : (TweenLite.to(this.topBar.anchor, 2, {
                    y: 0,
                    ease: Ease.easeIn
                }), TweenLite.to(this.bottomBar.anchor, 2, {
                    y: 0,
                    ease: Ease.easeIn
                }))
            }, o.prototype.hide = function (t) {
                t ? (this.topBar.anchor.y = 1, this.bottomBar.anchor.y = -1) : (TweenLite.to(this.topBar.anchor, 2, {
                    y: 1,
                    ease: Ease.easeOut
                }), TweenLite.to(this.bottomBar.anchor, 2, {
                    y: -1,
                    ease: Ease.easeOut
                }))
            }, o.prototype.resize = function (t, e) {
                this.w = t, this.h = e, this.topBar.scale.x = t / 32, this.bottomBar.scale.x = t / 32;
                var i = e * this.ratio;
                this.topBar.scale.y = i / 32, this.bottomBar.scale.y = i / 32, this.bottomBar.position.y = e - i
            }, n.exports = o
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";
        var n = i(49),
            r = function (t) {
                this.game = t, this.teamA = {
                    lastScored: 0,
                    goalScorePercentage: .5,
                    speedMod: 1,
                    aggressiveness: 0,
                    tackleChance: 1,
                    turnMultiplier: 1
                }, this.teamB = {
                    lastScored: 0,
                    goalScorePercentage: .5,
                    speedMod: .95,
                    aggressiveness: 20,
                    tackleChance: .5,
                    turnMultiplier: 1
                }, this.human = this.teamA, this.ai = this.teamB, this.difficulty = 1, this.eb = 0
            };
        r.prototype.update = function () {
            n.difficulty;
            this.eb++;
            var t = this.game.goalsA - this.game.goalsB;
            t <= -1 ? (this.ai.goalScorePercentage = .15, this.human.goalScorePercentage = 1, this.ai.turnMultiplier = 4) : t >= 1 ? (this.human.goalScorePercentage = .5, this.ai.goalScorePercentage = .75, this.ai.turnMultiplier = 1, 1 === this.difficulty && (this.ai.goalScorePercentage *= .5)) : (this.human.goalScorePercentage = 1, this.ai.goalScorePercentage = .25, this.ai.turnMultiplier = 1), this.ai.tackleChance = .5, this.ai.aggressiveness = 0, 1 === this.difficulty && (this.ai.tackleChance = .75, this.ai.speedMod = 1), t <= -3 ? (this.ai.aggressiveness = 200, this.ai.speedMod = .9, this.ai.tackleChance = .3, this.ai.goalScorePercentage = .1) : t >= 3 && (this.ai.aggressiveness = -50, this.ai.speedMod = 1.3, this.ai.tackleChance = 1, this.ai.goalScorePercentage = 1), this.human.speedMod = 1, this.eb > 3600 && (t >= 0 && (this.human.speedMod = .9), this.eb > 7200 && (this.human.speedMod = 1.1))
        }, t.exports = r
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(16),
                s = i(169),
                a = (i(18), i(32)),
                h = function () {
                    r.Container.call(this), this.onFinish = new o, this.bg = new r.Sprite.from(URL_HEADER.IMAGE + "game/bg_superkick_red.jpg"), this.rushBackground = new s, this.addChild(this.bg), this.addChild(this.rushBackground), this.bg.width = 1136, this.bg.height = 746, this.item = new r.Sprite, this.addChild(this.item), this.item.anchor.set(1), this.item.scale.set(1.5), this.visible = !1, this.pos = new r.Point
                };
            h.prototype = Object.create(r.Container.prototype), h.prototype.show = function (t) {
                var e = "red";
                t.spriteSheet.replace("%COLOR%", e);
                a.sfx.play(t.id), this.item.texture = r.Texture.from(t["super"]), this.visible = !0, this.item.x = 0, this.item.y = this.h, this.item.scale.set(1), TweenLite.to(this.item.scale, 1.2, {
                    x: 1.5,
                    y: 1.5,
                    ease: Sine.easeOut
                }), TweenLite.to(this.item, 1, {
                    x: this.w + 1.5 * this.item.width,
                    onComplete: function () {
                        this.onFinish.dispatch(), this.visible = !1
                    },
                    onCompleteScope: this,
                    delay: .2,
                    ease: Sine.easeIn
                })
            }, h.prototype.updateTransform = function () {
                this.rushBackground.update(this.pos), this.containerUpdateTransform()
            }, h.prototype.resize = function (t, e) {
                this.w = t, this.h = e
            }, n.exports = h
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(53),
                s = i(24);
            RushBackground = function (t, e, i) {
                r.Container.call(this), this.particals = [], this.particalPool = new o(ParticalTicker), this.max = r.isWebGL ? 80 : 5, this.overallScale = i || 1, s.instance.isMobile && (this.max = r.isWebGL ? 60 : 10), this.count = 0, this.pos = 0;
                for (var n = 0; n < this.max; n++) {
                    var a = this.particalPool.getObject();
                    a.home.x = Math.random() * -1136, a.position.y = a.home.y = 110640 * Math.random(), a.speed = new r.Point(5 + 10 * Math.random(), 0), a.speed.x *= 5, this.particals.push(a), this.addChild(a)
                }
                this.w = t || 1136, this.h = e || 740, this.focalLength = 150
            }, RushBackground.prototype = Object.create(r.Container.prototype), RushBackground.prototype.update = function (t) {
                if (this.visible)
                    for (var e = 0; e < this.particals.length; e++) {
                        var i = this.particals[e],
                            n = this.focalLength / (this.focalLength + i.z),
                            n = this.focalLength / (this.focalLength + i.z);
                        i.scale.x = i.scale.y = .5 * n * i.scaleOffset * this.overallScale, i.home.x += i.speed.x, i.home.y += i.speed.y, i.position.y = (i.home.y - t.y) * n * .5, i.position.x = (i.home.x - t.x) * n * .5;
                        var r = 300;
                        i.position.x += r;
                        var o = this.w + 2 * r;
                        i.position.x %= o, i.position.x < 0 && (i.position.x += o), i.position.x -= r, i.position.y %= this.h, i.position.y < 0 && (i.position.y += this.h)
                    }
            }, RushBackground.prototype.resize = function (t) { }, ParticalTicker = function (t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function () {
                    return t.toString()
                }, e
            }(function () {
                ParticalTicker.globalCount++, r.Sprite.call(this, r.Texture.fromFrame(ParticalTicker.frames[ParticalTicker.globalCount % 1])), this.anchor.x = .5, this.anchor.y = .5, this.scaleOffset = 1 + Math.random(), this.z = -50 + Math.random() * -50, this.rotation = 0, this.home = new r.Point
            }), ParticalTicker.globalCount = 0, ParticalTicker.frames = ["superkick_streak_large.png", "confetti-blue.png", "confetti-red.png", "streamer-blue.png", "streamer-red.png", "streamer-yellow.png"], ParticalTicker.prototype = Object.create(r.Sprite.prototype), n.exports = RushBackground
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 170
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = i(171),
            l = n(h),
            c = i(124),
            u = c.TEAM_STATE,
            p = {
                PICKUPBALL: 0,
                PASS: 1,
                IATACKLE: 2,
                HUMANTACKLE: 3,
                HUMANSHOOT: 4
            },
            d = function (t) {
                function e(i) {
                    r(this, e);
                    var n = o(this, t.call(this));
                    return n.currentStep = 0, n.game = i, n.controller = i.controller, n.instruction = new l["default"], n.addChild(n.instruction), n.activeShoot = !1, n.activeRealse = !1, n.instructionReaded = !1, n._onGoalScored = n.onGoalScored.bind(n), n._onBallRecievedHUMANTACKLE = n.onBallRecievedHUMANTACKLE.bind(n), n._onBallRecievedPass = n.onBallRecievedPass.bind(n), n._onBallRecievedB = n.onBallRecievedB.bind(n), n._onPickUp = n.onPickup.bind(n), n
                }
                return s(e, t), e.prototype.start = function () {
                    var t = this;
                    this.game.reset(), this.instruction.reset(), this.currentStep = 0, this.updateStep(), this.instruction.updateStep(), setTimeout(function () {
                        t.instruction.show(), t.showWistle()
                    }, 1900)
                }, e.prototype.next = function () {
                    this.currentStep++, this.updateStep()
                }, e.prototype.prev = function () {
                    this.currentStep--, this.updateStep()
                }, e.prototype.updateStep = function () {
                    var t = this;
                    switch (this.currentStep) {
                        case p.PICKUPBALL:
                            this.game.powerupManager.pause(), this.game.arrow.show(), this.game.arrow.place(this.game.ball.position), this.game.pitch.hideLogo(), this.game.teamManagerA.hideAll(), this.game.teamManagerB.hideAll(), this.game.keeperManagerRight.hide(), this.game.keeperRight.hide(), this.game.keeperLeft.hide(), this.game.keeperRight.hide(), window.keeper = this.game.keeperRight, this.game.goalLeft.disableGoal(), this.game.goalRight.disableGoal(), this.game.teamManagerA.setState(u.TUTORIAL_IDLE), this.game.teamManagerA.show(2, .45, .5), this.game.teamManagerA.setPlayer(this.game.teamManagerA.team[2]), this.game.teamManagerA.go(), this.game.ball.setActive(!0), this.game.teamManagerA.disableTackle(), this.game.teamManagerA.disableShoot(), this.instruction.showKeyBoard(), this.game.teamManagerB.setState(u.TUTORIAL_IDLE), this.game.teamManagerA.team.children[2].signals.onBallRecieved.addOnce(this._onPickUp);
                            break;
                        case p.PASS:
                            this.game.teamManagerA.setState(u.TUTORIAL_IDLE), this.game.arrow.show(), this.game.teamManagerA.show(1, .6, .5), setTimeout(function () {
                                t.game.arrow.place(t.game.teamManagerA.team.children[1].view3d.position)
                            }, 100), this.instruction.showSpace(), this.game.teamManagerA.team.children[1].signals.onBallRecieved.addOnce(this._onBallRecievedPass);
                            break;
                        case p.IATACKLE:
                            this.game.teamManagerA.disablePass(), this.game.teamManagerB.setState(u.TUTORIAL_TACKLE), this.game.teamManagerB.show(1, .2, .5), this.game.teamManagerB.team.children[1].signals.onBallRecieved.addOnce(this._onBallRecievedB);
                            break;
                        case p.HUMANTACKLE:
                            this.timeOutTackle = setTimeout(function () {
                                t.instruction.next(), t.instruction.showSpace(), t.showWistle(), t.game.arrow.place(t.game.teamManagerB.team.children[1].view3d.position), t.game.arrow.show()
                            }, 2400), this.game.teamManagerA.setState(u.TUTORIAL_IDLE), this.game.teamManagerB.setState(u.TUTORIAL_IDLE),
                                this.game.teamManagerA.enableTackle(), this.game.teamManagerA.team.children[1].signals.onBallRecieved.addOnce(this._onBallRecievedHUMANTACKLE);
                            break;
                        case p.HUMANSHOOT:
                            this.game.teamManagerA.enablePass(), this.game.teamManagerA.setState(u.ATTACKING), this.game.arrow.show(), this.game.arrow.place(this.game.goalRight.view3d.position, 150), this.game.goalRight.onGoalScored.addOnce(this._onGoalScored)
                    }
                }, e.prototype.onPickup = function () {
                    this.game.teamManagerA.constrainPlayer = !1, this.game.arrow.hide(), this.next(), this.instruction.hideKeyBoard(), this.instruction.next(), this.showWistle()
                }, e.prototype.onBallRecievedB = function () {
                    this.instruction.next(), this.next()
                }, e.prototype.onBallRecievedPass = function () {
                    this.next(), this.game.arrow.hide(), this.instruction.hideSpace(), this.instruction.empty()
                }, e.prototype.onBallRecievedHUMANTACKLE = function () {
                    this.game.arrow.hide(), this.instruction.empty(), this.instruction.hideSpace(), this.next()
                }, e.prototype.onGoalScored = function () {
                    var t = this;
                    this.instruction["final"](), this.game.arrow.hide(), setTimeout(function () {
                        t.instruction.hide()
                    }, 5e3), setTimeout(function () {
                        window.firstPlay = !1, t.game.reset()
                    }, 5600)
                }, e.prototype.showWistle = function () {
                    this.game.hud.message.show("WHISTLE", {
                        x: -448,
                        sx: -1
                    })
                }, e.prototype.resize = function (t, e) {
                    this.instruction.resize(t, e)
                }, e.prototype.update = function () {
                    var t = this;
                    if (this.instruction.update(this.game.controller), this.currentStep === p.HUMANSHOOT) {
                        var e = this.game.teamManagerA.activePlayer;
                        if (!e) return;
                        e.position.x / this.game.pitchWidth > .8 && !this.activeShoot ? (this.instruction.next(), this.activeShoot = !0, this.game.goalRight.enableGoal(), this.instruction.showSpace(), this.showWistle(), this.instructionReaded ? this.game.teamManagerA.enableShoot() : (this.instructionReaded = !0, this.game.teamManagerA.blockMove = !0, this.game.teamManagerA.disablePass(), setTimeout(function () {
                            t.game.teamManagerA.blockMove = !1, t.game.teamManagerA.enableShoot(), t.game.teamManagerA.enablePass()
                        }, 1e3))) : this.activeShoot && e.position.x / this.game.pitchWidth < .75 ? (this.activeShoot = !1, this.instruction.prev(), this.instruction.empty(), this.game.goalRight.disableGoal(), this.game.teamManagerA.disableShoot(), this.instruction.hideSpace()) : this.activeShoot && e.state === c.PLAYER_STATE.KICK_CHARGE && !this.activeRealse ? (this.activeRealse = !0, this.instruction.next()) : this.activeShoot && e.state !== c.PLAYER_STATE.KICK_CHARGE && this.activeRealse && (this.activeRealse = !1, this.instruction.prev(), this.instruction.empty(), this.instruction.hideSpace())
                    }
                }, e.prototype.reset = function () {
                    window.clearTimeout(this.timeOutTackle), this.game.teamManagerA.team.children[2].signals.onBallRecieved.remove(this._onPickUp), this.game.teamManagerA.team.children[1].signals.onBallRecieved.remove(this._onBallRecievedPass), this.game.teamManagerB.team.children[1].signals.onBallRecieved.remove(this._onBallRecievedB), this.game.teamManagerA.team.children[1].signals.onBallRecieved.remove(this._onBallRecievedHUMANTACKLE), this.game.goalRight.onGoalScored.remove(this._onGoalScored), this.currentStep = 0
                }, e
            }(a.Container);
        e["default"] = d, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = i(172),
            l = n(h),
            c = i(57),
            u = n(c),
            p = i(24),
            d = n(p),
            f = function (t) {
                function e() {
                    r(this, e);
                    var i = o(this, t.call(this));
                    return window.inst = i, i.w = app.safeSize.width, i.h = app.safeSize.height, i.data = [d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_PICKUPBALL : window.translations.STR_TUTORIAL_PICKUPBALL, d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_PASS : window.translations.STR_TUTORIAL_PASS, d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_IATACKLE : window.translations.STR_TUTORIAL_IATACKLE, d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_HUMANTACKLE : window.translations.STR_TUTORIAL_HUMANTACKLE, d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_HUMANSHOOT : window.translations.STR_TUTORIAL_HUMANSHOOT, d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_KICK_CHARGE : window.translations.STR_TUTORIAL_KICK_CHARGE, d["default"].instance.isMobile ? window.translations.STR_MOBILE_TUTORIAL_GOAL : window.translations.STR_TUTORIAL_GOAL], i.current = 0, i.last = i.data.length - 1, i.bg = new a.Sprite.from("dialogue.png"), i.bg.anchor.y = 1, i.addChild(i.bg), i.controllerView = new l["default"], i.controllerView.position.x = i.w / 2 - i.controllerView.width / 2, i.controllerView.position.y = i.bg.position.y - i.controllerView.height - 20, i.addChild(i.controllerView), i.text = new u["default"].h1(""), i.text.anchor.set(.5), i.text.position.x = i.w / 2, i.text.position.y = 40, i.addChild(i.text), i.hide(!0), i
                }
                return s(e, t), e.prototype.resize = function (t, e) {
                    this.bg.position.y = e, this.bg.width = t, this.bg.height = 100, this.text.position.x = t / 2, this.text.position.y = this.bg.position.y - 50, this.controllerView.position.y = this.bg.position.y - this.bg.height - this.controllerView.height + 20
                }, e.prototype.prev = function () {
                    this.current--, this.updateStep()
                }, e.prototype.next = function () {
                    this.current !== this.last && (this.current++, this.updateStep())
                }, e.prototype["final"] = function () {
                    this.current = this.last, this.updateStep()
                }, e.prototype.updateStep = function () {
                    this.text.text = this.data[this.current]
                }, e.prototype.update = function (t) {
                    this.controllerView.update(t)
                }, e.prototype.empty = function () {
                    this.text.text = ""
                }, e.prototype.showKeyBoard = function () {
                    this.controllerView.showKeyBoard()
                }, e.prototype.hideKeyBoard = function () {
                    this.controllerView.hideKeyBoard()
                }, e.prototype.showSpace = function () {
                    this.controllerView.showSpace()
                }, e.prototype.hideSpace = function () {
                    this.controllerView.hideSpace()
                }, e.prototype.show = function () {
                    TweenLite.to(this.position, .3, {
                        y: 0,
                        ease: Quad.easeOut
                    })
                }, e.prototype.hide = function (t) {
                    TweenLite.to(this.position, t ? .001 : .3, {
                        y: this.bg.height + this.controllerView.height + 20,
                        ease: Quad.easeIn
                    })
                }, e.prototype.reset = function () {
                    this.current = 0, this.hideSpace(), this.hideKeyBoard(), this.hide(!0)
                }, e
            }(a.Container);
        e["default"] = f, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = i(41),
            l = n(h),
            c = i(24),
            u = n(c),
            p = function (t) {
                function e() {
                    r(this, e);
                    var i = o(this, t.call(this));
                    if (i.mobile = !u["default"].instance.desktop, i.keyboard = new a.Container, !i.mobile) {
                        var n = l["default"].small("tutorial_arrow.png");
                        n.interactive = !1, n.rotation = Math.PI / 180 * 90, n.position.x = 0, n.position.y = 60, i.keyboard.addChild(n), i.keyboard.left = n;
                        var s = l["default"].small("tutorial_arrow.png");
                        s.interactive = !1, s.position.x = 70, s.rotation = Math.PI / 180 * 180, i.keyboard.addChild(s), i.keyboard.up = s;
                        var h = l["default"].small("tutorial_arrow.png");
                        h.interactive = !1, h.position.x = 140, h.rotation = Math.PI / 180 * -90, h.position.y = 60, i.keyboard.addChild(h), i.keyboard.right = h;
                        var c = l["default"].small("tutorial_arrow.png");
                        c.interactive = !1, c.position.x = 70, c.position.y = 63, i.keyboard.addChild(c), i.keyboard.down = c;
                        var p = new a.Sprite.from("space-bar.png");
                        p.position.x = 0, p.position.y = 50, i.addChild(p), i.space = p
                    }
                    if (i.addChild(i.keyboard), i.keyboard.position.x = 40, i.mobile) {
                        i.pad = PIXI.Sprite.fromFrame("touch-button-background.png"), i.pad.scale.set(.7), i.pad.anchor.set(.5, .5), i.pad.position.set(0, 0);
                        var d = PIXI.Sprite.fromFrame("touch-button-movement.png");
                        d.anchor.set(.5), i.pad.icon = d, i.pad.addChild(d), i.tick = 0, i.keyboard.addChild(i.pad), i.oneTouchButton = PIXI.Sprite.fromFrame("touch-button-yellow.png"), i.oneTouchButton.scale.set(.7), i.oneTouchButton.anchor.set(.5, .5), i.oneTouchButton.position.set(40, 0);
                        var d = PIXI.Sprite.fromFrame("touch-icon-ball.png");
                        d.anchor.set(.5), i.oneTouchButton.addChild(d), i.addChild(i.oneTouchButton)
                    }
                    return i.hideKeyBoard(), i.hideSpace(), i
                }
                return s(e, t), e.prototype.show = function () {
                    this.alpha = 1
                }, e.prototype.hide = function () {
                    this.alpha = 0
                }, e.prototype.showKeyBoard = function () {
                    this.keyboard.alpha = 1
                }, e.prototype.hideKeyBoard = function () {
                    this.keyboard.alpha = 0
                }, e.prototype.showSpace = function () {
                    this.mobile ? this.oneTouchButton.alpha = 1 : this.space.alpha = 1
                }, e.prototype.hideSpace = function () {
                    this.mobile ? this.oneTouchButton.alpha = 0 : this.space.alpha = 0
                }, e.prototype.update = function (t) {
                    this.mobile ? (this.tick += .1, this.pad.icon.position.x = 20 * Math.sin(this.tick)) : (t.keyboard.isPressed("space") ? this.space.texture = a.Texture.fromFrame("space-bar-hover.png") : this.space.texture = a.Texture.fromFrame("space-bar.png"), t.keyboard.isPressed("left") ? (this.keyboard.left.background.texture = a.Texture.fromFrame(this.keyboard.left.hoverTexture), this.keyboard.left.scale.set(.72)) : (this.keyboard.left.background.texture = a.Texture.fromFrame(this.keyboard.left.normalTexture), this.keyboard.left.scale.set(.75)), t.keyboard.isPressed("up") ? (this.keyboard.up.background.texture = a.Texture.fromFrame(this.keyboard.left.hoverTexture), this.keyboard.up.scale.set(.72)) : (this.keyboard.up.background.texture = a.Texture.fromFrame(this.keyboard.left.normalTexture), this.keyboard.up.scale.set(.75)), t.keyboard.isPressed("right") ? (this.keyboard.right.background.texture = a.Texture.fromFrame(this.keyboard.left.hoverTexture), this.keyboard.right.scale.set(.72)) : (this.keyboard.right.background.texture = a.Texture.fromFrame(this.keyboard.left.normalTexture), this.keyboard.right.scale.set(.75)), t.keyboard.isPressed("down") ? (this.keyboard.down.background.texture = a.Texture.fromFrame(this.keyboard.left.hoverTexture), this.keyboard.down.scale.set(.72)) : (this.keyboard.down.background.texture = a.Texture.fromFrame(this.keyboard.left.normalTexture), this.keyboard.down.scale.set(.75)))
                }, e
            }(a.Container);
        e["default"] = p, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(12),
            h = n(a),
            l = i(174),
            c = n(l),
            u = function (t) {
                function e() {
                    r(this, e);
                    var i = o(this, t.call(this)),
                        n = 48,
                        s = 48,
                        a = new Float32Array(n * s * 3),
                        l = new Float32Array(n * s * 1),
                        u = new Float32Array(n * s * 3),
                        p = new Float32Array(n * s * 3),
                        d = ["ffb3ba", "ffdfba", "ffffba", "baffc9", "bae1ff"];
                    i.time = 0, i.geom = new h["default"].BufferGeometry;
                    for (var f = 0, m = 0, g = n * s * 3; m < g; m += 3) {
                        a[3 * f + 0] = 1600 * Math.random() - 800, a[3 * f + 1] = 1600 * Math.random() - 800, a[3 * f + 2] = 400 * Math.random(), l[f] = 4 * Math.random(), u[3 * f + 0] = Math.random(), u[3 * f + 1] = Math.random(), u[3 * f + 2] = Math.random();
                        var v = (0, c["default"])(d[Math.floor(Math.random() * d.length)]);
                        p[3 * f + 0] = v[0] / 255, p[3 * f + 1] = v[1] / 255, p[3 * f + 2] = v[2] / 255, f++
                    }
                    return i.geom.addAttribute("position", new h["default"].BufferAttribute(a, 3)), i.geom.addAttribute("size", new h["default"].BufferAttribute(l, 1)), i.geom.addAttribute("info", new h["default"].BufferAttribute(u, 3)), i.geom.addAttribute("color", new h["default"].BufferAttribute(p, 3)), i.mesh = new h["default"].Points(i.geom, new h["default"].ShaderMaterial({
                        vertexShader: "\n      attribute float size;\n      attribute vec3 info;\n      attribute vec3 color;\n      uniform float time;\n      varying vec3 vColor;\n       void main() {\n         vColor = color;\n         vec4 p = vec4(position, 1.0);\n         p.x += cos(time * info.x) * size;\n         p.y += sin(time * info.y) * size;\n         p.z += cos(time * info.z) * size;\n         gl_PointSize = size;\n         gl_Position = projectionMatrix * modelViewMatrix * p;\n       }\n      ",
                        fragmentShader: "\n      varying vec3 vColor;\n      void main() {\n        if ( length(vec2(0.5) - gl_PointCoord) > 0.5 ) {\n          discard;\n        }\n        gl_FragColor = vec4(vColor, 0.3);\n      }\n      ",
                        uniforms: {
                            time: {
                                type: "f",
                                value: 0
                            }
                        },
                        blending: h["default"].AdditiveBlending,
                        transparent: !0
                    })), i.position.x = 800, i.position.y = 450, i.add(i.mesh), i
                }
                return s(e, t), e.prototype.update = function () {
                    this.time += .055, this.mesh.material.uniforms.time.value = this.time
                }, e
            }(h["default"].Object3D);
        e["default"] = u, t.exports = e["default"]
    },
    function (t, e) {
        "use strict";
        t.exports = function (t) {
            if ("string" != typeof t) throw new TypeError("Expected a string");
            t = t.replace(/^#/, ""), 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
            var e = parseInt(t, 16);
            return [e >> 16, e >> 8 & 255, 255 & e]
        }
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(12),
            l = r(h),
            c = i(126),
            u = (n(c), function (t) {
                function e() {
                    o(this, e);
                    var i = s(this, t.call(this));
                    window.arrow = i;
                    var n = new l.TextureLoader,
                        r = n.load(URL_HEADER.IMAGE + "game/tutorial_arrow.png");
                    return i.mesh = new l.Mesh(new l.PlaneGeometry(40, 40), new l.MeshBasicMaterial({
                        map: r,
                        transparent: !0
                    })), i.mesh.rotation.x = Math.PI / 180 * 90, i.mesh.material.opacity = 0, i.add(i.mesh), i.tick = 0, i.opos = new l.Vector3, i
                }
                return a(e, t), e.prototype.place = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    this.opos.copy(t), this.opos.z += e
                }, e.prototype.show = function () {
                    TweenLite.to(this.mesh.material, .3, {
                        opacity: 1
                    })
                }, e.prototype.hide = function () {
                    TweenLite.to(this.mesh.material, .3, {
                        opacity: 0
                    })
                }, e.prototype.update = function () {
                    this.tick += .1, this.position.x = this.opos.x, this.position.y = this.opos.y, this.position.z = this.opos.z + 5 * Math.sin(this.tick)
                }, e
            }(l.Object3D));
        e["default"] = u, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(177),
                o = i(16),
                s = function () {
                    this.onLoaded = new o, this.localStorage = new r("com.oneeyedrhino.filmclub"), this.save = null
                };
            s.prototype.loadGame = function () {
                this.loadGameFromLocalStorage()
            }, s.prototype.loadGameFromLocalStorage = function () {
                var t = this.localStorage.getObject("save");
                t || (t = new a, this.localStorage.storeObject("save", t)), this.save = t, this.onLoaded.dispatch()
            }, s.prototype.isPB = function (t, e) {
                var i = this.save.levelBestScores[t];
                return e > i
            }, s.prototype.getPB = function (t) {
                var e = this.save.levelBestScores[t];
                return e
            }, s.prototype.unlockLevel = function (t, e) {
                return this.save.levelBestScores[t - 1] >= e && (0 !== this.save.levelStates[t] || (this.save.levelStates[t] = 1, this.saveToStorage(), !0))
            }, s.prototype.saveScore = function (t, e) {
                var i = this.save.levelBestScores[t];
                if (this.save.totalScore = this.save.totalScore || 0, this.save.totalScore += e, e > i) {
                    for (var n = 0; n < this.save.levelBestScores.length; n++) {
                        var r = this.save.levelBestScores[n];
                        e > r && window.Highscores && window.UserDetails.isUserSignedIn() && Highscores.setUserScore(function (t) { }, function (t) { }, ["allatbreak_overall"], [e])
                    }
                    this.save.levelBestScores[t] = e
                }
                window.Highscores && window.UserDetails.isUserSignedIn() && Highscores.setUserScore(function (t) { }, function (t) { }, ["allatbreak_total"], [this.save.totalScore]), this.saveToStorage()
            }, s.prototype.saveToStorage = function () {
                window.Data && this.localStorage.storeObject("save", this.save)
            };
            var a = function () {
                this.levelStates = [1, 0, 0, 0, 0, 0, 0], this.levelBestScores = [0, 0, 0, 0, 0, 0, 0], this.tutorials = [0, 0, 0, 0, 0, 0, 0], this.totalScore = 0
            };
            s.instance = new s, n.exports = s
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            var n = function (t) {
                this.id = t || "ikcoder.com", this.canSave = !1;
                try {
                    localStorage.setItem(this.id + ".access", !0), localStorage.removeItem(this.id + ".access", !0), this.canSave = !0
                } catch (e) { }
            };
            n.prototype.store = function (t, e) {
                this.canSave && localStorage.setItem(this.id + "." + t, e)
            }, n.prototype.get = function (t) {
                if (this.canSave) return localStorage.getItem(this.id + "." + t)
            }, n.prototype.storeObject = function (t, e) {
                this.canSave && localStorage.setItem(this.id + "." + t, JSON.stringify(e))
            }, n.prototype.getObject = function (t) {
                if (this.canSave) return JSON.parse(localStorage.getItem(this.id + "." + t))
            }, n.prototype.remove = function (t) {
                this.canSave && localStorage.removeItem(this.id + "." + t)
            }, n.prototype.reset = function () {
                if (this.canSave)
                    for (var t in localStorage) t.indexOf(this.id + ".") !== -1 && localStorage.removeItem(t)
            }, i.exports = n
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            CartoonTransition = function () {
                this.circle = (new PIXI.Graphics).beginFill(1044480).drawCircle(0, 0, 100)
            }, CartoonTransition.constructor = CartoonTransition, CartoonTransition.prototype.begin = function (t, e, i) {
                this.screenManager = t, this.currentScreen = e, this.nextScreen = i, this.nextScreen.onShow && this.nextScreen.onShow(), t.container.addChild(this.circle), t.container.mask = this.circle, this.circle.scale.set(this.targetScale), this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), TweenLite.to(this.circle.scale, 1, {
                    x: .001,
                    y: .001,
                    ease: Sine.easeOut,
                    onComplete: this.onFadeout.bind(this)
                })) : this.onFadeout()
            }, CartoonTransition.prototype.onFadeout = function () {
                this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.screenManager.container.removeChild(this.currentScreen)), this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), this.screenManager.container.addChild(this.nextScreen), TweenLite.to(this.circle.scale, 1.2, {
                    delay: .2,
                    x: this.targetScale,
                    y: this.targetScale,
                    ease: Cubic.easeIn,
                    onComplete: this.onFadein.bind(this)
                })
            }, CartoonTransition.prototype.onFadein = function () {
                this.nextScreen.onShown && this.nextScreen.onShown(), this.screenManager.container.removeChild(this.circle), this.screenManager.container.mask = null, this.screenManager.onTransitionComplete()
            }, CartoonTransition.prototype.onResize = function (t, e) {
                this.w = t, this.h = e, this.targetScale = t / 100 * 1.2, this.circle.x = t / 2, this.circle.y = e / 2
            }, i.exports = CartoonTransition
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(41),
                s = (i(44), i(38), i(57)),
                a = (i(24), i(49)),
                h = i(50),
                l = (h.CharacterData, i(34)),
                c = i(37),
                u = c.Translation,
                p = (i(51), i(18)),
                d = i(36),
                f = i(52),
                m = function (t) {
                    r.Container.call(this), this.app = t, this.characters = [], this.pos = new r.Point, this.party = new f(1136, 800, 1), this.addChild(this.party), this.bg = new r.Container, this.characterContainer = new r.Container, this.characterContainer.scale.set(1), this.characterContainer.position.y = 80, this.bg.addChild(this.characterContainer), this.bg.scale.set(.5), this.addChild(this.bg), this.title = new s.h1(u.succeed_screen.title), this.title.anchor.set(.5), this.title.position.set(0, -this.bg.height / 2 - 35), this.addChild(this.title), this.trophy = r.Sprite.fromFrame("trophy-winner.png"), this.trophy.anchor.set(.5, .5), this.trophy.position.set(0, 75), this.bg.addChild(this.trophy), this.teamContainer = new r.Container, this.bg.addChild(this.teamContainer), this.nextButton = o.small("icon-back.png"), this.nextButton.icon.rotation = Math.PI, this.nextButton.position.set(450, 470), this.nextButton.onPress.add(this.onNextButtonPressed, this), this.addChild(this.nextButton)
                };
            m.prototype = Object.create(r.Container.prototype), m.prototype.onNextButtonPressed = function () {
                this.screenManager.gotoScreenByID(l.SCREEN_ID.LEADERBOARD), a.reset()
            }, m.prototype.setContent = function () {
                for (var t = [{
                    x: -250,
                    y: 400
                }, {
                    x: 0,
                    y: 400
                }, {
                    x: 250,
                    y: 400
                }], e = 0; e < this.characters.length; e++) {
                    var i = this.characters[e];
                    this.bg.removeChild(i)
                }
                this.characters = [];
                var n, o, s, h, i;
                for (e = 0; e < a.teamA.length; e++) n = t[e], o = a.teamA[e], s = o.spriteSheet.replace("%COLOR%", "red"), h = p.getJson("character-animation")[s], i = new r.extras.MovieClip(d.getTexturesFromFrames(h.win)), i.anchor.set(.5, 1), i.position.set(n.x, n.y), i.animationSpeed = .3, i.scale.set(1.5), i.play(), this.characterContainer.addChild(i), this.characters.push(i)
            }, m.prototype.onShow = function () {
                this.setContent(), this.bg.scale.set(0), this.app.topMenu.setState("home"), TweenLite.to(this.bg.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: Elastic.easeOut,
                    delay: .2
                })
            }, m.prototype.onShown = function () { }, m.prototype.updateTransform = function () {
                this.party.update(this.pos), this.containerUpdateTransform()
            }, m.prototype.resize = function (t, e) {
                this.bg.position.set(t / 2, 200), this.title.position.y = l.MARGIN.TITLE_TOP, this.title.position.x = t / 2;
                var i = 40,
                    n = 70;
                this.nextButton.position.x = t - n / 2 - i
            }, n.exports = m
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    //function index: 180
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(41),
                s = (i(44), i(38), i(57)),
                a = (i(24), i(49)),
                h = i(50),
                l = (h.CharacterData, i(34)),
                c = i(18),
                u = i(36),
                p = i(37),
                d = p.Translation,
                f = function (t) {
                    r.Container.call(this),
                    this.app = t,
                    this.characters = [],
                    this.bg = r.Sprite.from(URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png"),
                    this.bg.anchor.set(.5, .5),
                    this.addChild(this.bg),
                    this.title = new s.h1(d.fail_screen.title),
                    this.title.anchor.set(.5, .5),
                    this.title.position.set(0, -this.bg.height / 2 - 35),
                    this.bg.addChild(this.title),
                    this.restartButton = o.validate("icon-tick.png"),
                    this.restartButton.position.set(-65, 0),
                    this.restartButton.onPress.add(this.onRestartButtonPressed, this),
                    this.bg.addChild(this.restartButton),
                    this.quitButton = o.cancel("icon-cross.png"),
                    this.quitButton.position.set(65, 0),
                    this.quitButton.onPress.add(this.onQuitButtonPressed, this),
                    this.bg.addChild(this.quitButton)
                };
            f.prototype = Object.create(r.Container.prototype),
            f.prototype.onRestartButtonPressed = function () {
                this.screenManager.gotoScreenByID(l.SCREEN_ID.COUNTRY_SELECT), a.reset()
            },
            f.prototype.onQuitButtonPressed = function () {
                this.screenManager.gotoScreenByID(l.SCREEN_ID.LEADERBOARD), a.reset()
            },
            f.prototype.setContent = function () {
                for (var t = [{
                    x: -250,
                    y: 400
                }, {
                    x: -400,
                    y: 400
                }, {
                    x: -100,
                    y: 400
                }], e = 0; e < this.characters.length; e++) {
                    var i = this.characters[e];
                    this.bg.removeChild(i)
                }
                this.characters = [];
                var n, o, s, h, i;
                for (e = 0; e < a.teamA.length; e++) n = t[e], o = a.teamA[e], s = o.spriteSheet.replace("%COLOR%", "red"), h = c.getJson("character-animation")[s], i = new r.extras.MovieClip(u.getTexturesFromFrames(h.lose)), i.anchor.set(.5, 1), i.position.set(n.x, n.y), i.animationSpeed = .3, i.loop = !1, i.play(), this.bg.addChild(i), this.characters.push(i);
                for (e = 0; e < a.teamB.length; e++) n = t[e], o = a.teamB[e], s = o.spriteSheet.replace("%COLOR%", "blue"), h = c.getJson("character-animation")[s], i = new r.extras.MovieClip(u.getTexturesFromFrames(h.win)), i.anchor.set(.5, 1), i.position.set(-n.x, n.y), i.scale.x = -1, i.animationSpeed = .3, i.play(), this.bg.addChild(i), this.characters.push(i)
            },
            f.prototype.onShow = function () {
                this.setContent(), this.bg.scale.set(0), this.app.topMenu.setState("home"), TweenLite.to(this.bg.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: Elastic.easeOut,
                    delay: .2
                })
            },
            f.prototype.onShown = function () { },
            f.prototype.resize = function (t, e) {
                this.bg.position.set(t / 2, 250)
            },
            n.exports = f
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, i) {
            SlideTransition = function () { }, SlideTransition.constructor = SlideTransition, SlideTransition.prototype.begin = function (t, e, i) {
                this.screenManager = t, this.currentScreen = e, this.nextScreen = i, this.currentScreen ? (this.currentScreen.onHide && this.currentScreen.onHide(), TweenLite.to(this.currentScreen, .45, {
                    ease: Sine.easeInOut,
                    x: this.reverse ? 1224 : -1224
                }), this.onFadeout()) : this.onFadeout()
            }, SlideTransition.prototype.onFadeout = function () {
                this.nextScreen.onShow && this.nextScreen.onShow(), this.nextScreen.resize && this.nextScreen.resize(this.screenManager.w, this.screenManager.h), this.nextScreen.position.x = this.reverse ? -1224 : 1224, TweenLite.to(this.nextScreen, .45, {
                    x: 0,
                    ease: Sine.easeInOut,
                    onComplete: this.onFadein.bind(this)
                }), this.screenManager.container.addChild(this.nextScreen)
            }, SlideTransition.prototype.onFadein = function () {
                this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.screenManager.container.removeChild(this.currentScreen)), this.nextScreen.onShown && this.nextScreen.onShown(), this.screenManager.onTransitionComplete()
            }, SlideTransition.prototype.resize = function (t, e) {
                this.w = t, this.h = e
            }, i.exports = SlideTransition
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var s = i(8),
            a = function (t) {
                function e() {
                    n(this, e);
                    var i = r(this, t.call(this, app));
                    return window.brand = i,
                        i.bg = new s.Graphics,
                        i.bg.beginFill(0),
                        i.bg.drawRect(0, 0, app.maxSize.width, app.maxSize.height),
                        i.addChild(i.bg),
                        i.bg.alpha = 0,
                        i.center = new s.Container,
                        i.logo = new s.Sprite.from(URL_HEADER.IMAGE + "sponsor/main-menu-sponsor.jpg"),
                        i.logo.anchor.set(.5),
                        i.center.position.x = -i.logo.width / 2,
                        i.center.position.y = -i.logo.height / 2,
                        i.center.addChild(i.logo),
                        i.addChild(i.center),
                        i.alpha = 0, i
                }
                return o(e, t), e.prototype.resize = function (t, e) {
                    this.center.position.set(t / 2, 360)
                }, e
            }(s.Container);
        e["default"] = a, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var h = i(8),
            l = r(h),
            c = i(41),
            u = n(c),
            p = i(34),
            d = n(p),
            f = i(49),
            m = n(f),
            g = i(32),
            v = n(g),
            y = i(24),
            _ = (n(y), function (t) {
                function e(i) {
                    o(this, e);
                    var n = s(this, t.call(this));
                    return window.topMenu = n, n.app = i, n.state = "home", n.previousState = n.state, n.nextScreen = null, n.prevScreen = null, n.states = {
                        home: ["mute"],
                        game: ["mute", "pause"],
                        prev: ["prev", "mute"],
                        next: ["next"],
                        prevnext: ["prev", "mute"],
                        pause: []
                    }, n.buildButtons(), n.hideButtons(), n.setState("prevnext"), n
                }
                return a(e, t), e.prototype.buildButtons = function () {
                    var t = this;
                    this.buttons = {};
                    var e = u["default"].small("icon-pause.png");
                    this.addChild(e), this.buttons.pause = e;
                    var i = u["default"].small("icon-sound-on.png");
                    this.addChild(i), this.buttons.mute = i;
                    var n = u["default"].small("icon-back.png");
                    this.addChild(n), this.buttons.prev = n;
                    var r = u["default"].small("icon-forward.png");
                    this.addChild(r), this.buttons.next = r;
                    var o = u["default"].small("icon-exit.png", "exit");
                    this.addChild(o), this.buttons.exit = o;
                    var s = function (e) {
                        t.buttons[e].onPress.add(t.onButtonPressed, t), t[e + "Show"] = function () {
                            t.buttons[e].alpha = 0, t.buttons[e].visible = !0, TweenLite.to(t.buttons[e], .3, {
                                alpha: 1
                            })
                        }, t[e + "Hide"] = function () {
                            t.buttons[e].alpha = 1, t.buttons[e].visible = !0, TweenLite.to(t.buttons[e], .3, {
                                alpha: 0
                            })
                        }
                    };
                    for (var a in this.buttons) s(a);
                    v["default"].sfx.onMuteToggle.add(this.onMuteToggle, this), v["default"].music.onMuteToggle.add(this.onMuteToggle, this)
                }, e.prototype.hideButtons = function () {
                    for (var t in this.buttons) this.buttons[t].visible = !1, this.buttons[t].aplha = 0
                }, e.prototype.setState = function (t) {
                    this.hideButtons();
                    for (var e in this.states)
                        if (t === e)
                            for (var i = this.states[e], n = 0; n < i.length; n++) {
                                var r = i[n];
                                this.buttons[r].visible = !0, this.buttons[r].aplha = 1
                            }
                    this.previousState = this.state, this.state = t
                }, e.prototype.show = function () {
                    this.visible = !0
                }, e.prototype.hide = function (t) {
                    this.visible = !t
                }, e.prototype.onButtonPressed = function (t) {
                    switch (t) {
                        case this.buttons.mute:
                            m["default"].isMuted ? (v["default"].music.unmute(), v["default"].sfx.unmute()) : (v["default"].music.mute(), v["default"].sfx.mute()), m["default"].isMuted = !m["default"].isMuted;
                            break;
                        case this.buttons.pause:
                            this.setState("pause"), this.app.overlayManager.show(d["default"].OVERLAY_ID.PAUSE);
                            break;
                        case this.buttons.prev:
                            this.app.breadcrumb.hidden ? this.prevScreen ? (this.app.screenManager.gotoScreenByID(this.prevScreen), this.prevScreen = null) : this.app.screenManager.goBack() : this.app.breadcrumb.prev();
                            break;
                        case this.buttons.next:
                            this.app.breadcrumb.hidden ? this.nextScreen && this.app.screenManager.gotoScreenByID(this.nextScreen) : this.app.breadcrumb.next();
                            break;
                        case this.buttons.exit:
                            window.location.href = "http://www.goodboydigital.com/"
                    }
                }, e.prototype.onMuteToggle = function () {
                    v["default"].music.isMuted && v["default"].sfx.isMuted ? this.buttons.mute.setIcon("icon-sound-off.png") : this.buttons.mute.setIcon("icon-sound-on.png")
                }, e.prototype.resize = function (t, e) {
                    var i = 40,
                        n = 70,
                        r = 60;
                    this.buttons.mute.position.set(t - n / 2 - i, i + r / 2), this.buttons.pause.position.set(this.buttons.mute.position.x - n - i, i + r / 2), this.buttons.prev.position.set(n / 2 + i, i + r / 2), this.buttons.next.position.set(t - n / 2 - i, i + r / 2)
                }, e
            }(l.Container));
        e["default"] = _, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
            h = i(8),
            l = i(185),
            c = n(l),
            u = i(34),
            p = n(u),
            d = i(49),
            f = n(d),
            m = [p["default"].SCREEN_ID.COUNTRY_SELECT, p["default"].SCREEN_ID.CAPTAIN_SELECT, p["default"].SCREEN_ID.PLAYER_SELECT, p["default"].SCREEN_ID.PLAYER_SELECT_2, p["default"].SCREEN_ID.TEAM_REVIEW],
            g = function (t) {
                function e(i) {
                    r(this, e);
                    var n = o(this, t.call(this));
                    window.bread = n, n.app = i, n.currentStep = 0, n.previousStep = -1, n.name = "breabcrumb", n.steps = [], n.breadCrumbContainer = new h.Container;
                    for (var s = 4; s >= 0; s--) {
                        var a = new c["default"](s, 4 === s, p["default"].BREADCRUMB.HEIGHT);
                        a.onDown.add(n.onItemDown, n), a.onHover.add(n.onItemHover, n), n.breadCrumbContainer.addChild(a), n.steps[s] = a
                    }
                    return n.breadCrumbContainer.position.x = -25, n.addChild(n.breadCrumbContainer), n.steps[0].activate(),
                        n.maxStepIndexRiched = -1, n.hide(!0), n
                }
                return s(e, t), e.prototype.onItemDown = function (t) {
                    t.hasBeenActivate && (this.previousStep = this.currentStep, this.currentStep = t.index, t.last && t.active ? (this.currentStep++, f["default"].isTournament ? this.app.screenManager.gotoScreenByID(p["default"].SCREEN_ID.TOURNAMENT) : (this.app.spotLights.hide(), this.app.screenManager.gotoScreenByID(p["default"].SCREEN_ID.GAME), this.hide())) : this.goTo())
                }, e.prototype.onItemHover = function (t) {
                    this.maxStepIndexRiched < t.index - 1 || t.hover()
                }, e.prototype.reset = function () {
                    this.currentStep = 0, this.previousStep = -1
                }, e.prototype.show = function () {
                    this.hidden = !1, this.app.showPlatform(), this.maxStepIndexRiched = -1, TweenLite.to(this, .4, {
                        y: 0
                    }), TweenLite.to(this, .2, {
                        alpha: 1,
                        delay: .1
                    })
                }, e.prototype.hide = function (t) {
                    var e = this;
                    if (this.hidden = !0, this.app.hidePlatform(), t) {
                        for (var i = 0; i < this.steps.length; i++) this.steps[i].reset();
                        this.y = 100
                    } else TweenLite.to(this, .4, {
                        y: 100,
                        onComplete: function () {
                            for (var t = 0; t < e.steps.length; t++) e.steps[t].reset()
                        }
                    }), TweenLite.to(this, .2, {
                        alpha: 0,
                        delay: .1
                    })
                }, e.prototype.next = function () {
                    this.previousStep = this.currentStep, this.currentStep++, this.goTo()
                }, e.prototype.prev = function () {
                    this.previousStep = this.currentStep, this.currentStep--, this.goTo()
                }, e.prototype.goTo = function () {
                    if (void 0 === this.steps[this.currentStep]) this.app.screenManager.gotoScreenByID(p["default"].SCREEN_ID.TITLE), this.app.hidePlatform();
                    else {
                        this.app.screenManager.gotoScreenByID(m[this.currentStep]), this.maxStepIndexRiched < this.steps[this.currentStep].index && (this.maxStepIndexRiched = this.steps[this.currentStep].index);
                        for (var t = 0; t < this.steps.length; t++) this.steps[t].desactivate()
                    }
                    void 0 !== this.steps[this.currentStep] ? (this.steps[this.currentStep].activate(), this.app.screenManager.currentScreen.beforeShow && this.app.screenManager.currentScreen.beforeShow(this.currentStep)) : this.currentStep = 0
                }, e.prototype.resize = function (t, e) {
                    for (var i = 0; i < this.steps.length; i++) this.steps[i].resize(t, e)
                }, a(e, [{
                    key: "currentItem",
                    get: function () {
                        return this.steps[this.currentStep]
                    }
                }]), e
            }(h.Container);
        e["default"] = g, t.exports = e["default"]
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = i(16),
            l = n(h),
            c = i(18),
            u = n(c),
            p = function (t) {
                function e(i, n, s) {
                    r(this, e);
                    var h = o(this, t.call(this)),
                        c = u["default"].getJson("config").config.LOCALE;
                    c = "_pl";
                    var p = ["_pl"].indexOf(c) !== -1;
                    h.tick = 0, h.tickSpedd = .05 * Math.random() + .05, Math.random() > .5 && (h.tickSpedd = h.tickSpedd * -1), h.index = i, h.height = s, h.oheight = s, h.last = n;
                    new a.Texture.fromImage("breadcrumb-play-off.png");
                    h.bg = new a.Sprite.fromImage("breadcrumb-empty-off.png"), h.over = new a.Sprite.fromImage("breadcrumb_blur_blue.png"), h.over.anchor.set(.5), h.over.alpha = 0, h.over.blendMode = PIXI.BLEND_MODES.ADD, h.addChild(h.bg), h.mask2 = new a.Graphics, h.mask2.beginFill(), h.mask2.moveTo(0, 0), h.mask2.lineStyle(.1, 16767232, 1), h.mask2.lineTo(h.bg.width - 35, 0), h.mask2.lineTo(h.bg.width + 4, s / 2), h.mask2.lineTo(h.bg.width - 40, s), h.mask2.lineTo(0, s), h.mask2.lineTo(0, 0), h.mask2.endFill(), h.addChild(h.mask2), h.graphic = new a.Sprite, h.graphic.o = {
                        x: 0,
                        y: 0
                    }, h.graphic.anchor.x = .5, h.graphic.mask = h.mask2, h.addChild(h.graphic), h.active = !1, h.hasBeenActivate = !1, h.interactive = !0, h.buttonMode = !0;
                    var d = "",
                        f = 20;
                    return h.last ? (window.itemt = h, d = translations.STR_READY_BUTTON, f = 0) : (d = h.index + 1 + ".", h.arrow = new a.Sprite.fromImage("breadcrumb-arrow.png"), h.arrow.anchor.x = .5, h.arrow.position.x = h.bg.width - h.arrow.width / 2 + 4, h.addChild(h.arrow)), h.text = new a.Text(d.toString(), {
                        fontSize: 40,
                        fontFamily: window.MAIN_FONT,
                        fill: "#ffffff",
                        stroke: !0,
                        strokeThickness: 15,
                        lineJoin: "round"
                    }), h.text.anchor.y = .5, p ? h.text.position.x = 50 : h.text.position.x = f + h.text.width / 2, h.text.position.y = s / 2 - 5, h.addChild(h.text), h.mouseover = function () {
                        TweenLite.to(this.over, .5, {
                            alpha: .3,
                            ease: Quad.easeOut
                        })
                    }.bind(h), h.mouseout = function () {
                        TweenLite.to(this.over, .5, {
                            alpha: 0,
                            ease: Quad.easeOut
                        })
                    }.bind(h), h.desactivate(), h.onDown = new l["default"], h.onHover = new l["default"], h.mousedown = h.touchstart = h.onDown.dispatch.bind(h, h), h.addChild(h.over), h
                }
                return s(e, t), e.prototype.reset = function () {
                    this.active = !1, this.hasBeenActivate = !1, this.text.alpha = 1, this.graphic.texture = PIXI.Texture.EMPTY, this.bg.texture = new a.Texture.fromImage("breadcrumb-empty-off.png"), this.over.texture = new a.Texture.fromImage("breadcrumb_blur_blue.png"), this.graphicOverlay && (this.graphicOverlay.texture = a.Texture.EMPTY), this.moving || (this.bg.texture = new a.Texture.fromImage(this.last ? "breadcrumb-empty-play-off.png" : "breadcrumb-empty-off.png"))
                }, e.prototype.updateTexture = function (t, e) {
                    this.text.alpha = 0, this.graphic.texture = new a.Texture.fromImage(t), this.graphic.scale.set(1.8), this.graphic.anchor.y = .5;
                    var i = new a.filters.BlurFilter(3);
                    i.padding = 0, window.blurFilter = i, this.graphic.filters = [i], this.graphicOverlay ? this.graphicOverlay.texture = new a.Texture.fromImage(t) : (this.graphicOverlay = new a.Sprite.from(t), this.graphicOverlay.anchor.set(.5), this.graphicOverlay.scale.set(.7), this.addChild(this.graphicOverlay)), this.graphicOverlay.position.y = this.bg.height / 2, this.graphicOverlay.position.x = this.bg.width / 2
                }, e.prototype.update = function (t, e) {
                    this.text.alpha = 0, this.moving = !0, this.bg.texture = new a.Texture.fromImage(e ? "breadcrumb-full-orange.png" : "breadcrumb-full-blue.png"), this.over.texture = new a.Texture.fromImage(e ? "breadcrumb_blur_orange.png" : "breadcrumb_blur_blue.png"), this.graphic.texture = new a.Texture.fromImage(t.profile);
                    var i = 0,
                        n = 0;
                    t.offsetBreadCrumb && (i = t.offsetBreadCrumb.x || 0, n = t.offsetBreadCrumb.y || 0), this.graphic.o.x = this.bg.width / 2 + i, this.graphic.o.y = -this.bg.height / 4 + n, this.graphic.position.x = this.graphic.o.x, this.graphic.position.y = this.graphic.o.y, this.graphic.scale.set(.6)
                }, e.prototype.activate = function () {
                    this.active = !0, this.hasBeenActivate = !0, this.moving || (this.bg.texture = new a.Texture.fromImage(this.last ? "breadcrumb-empty-play-on.png" : "breadcrumb-empty-on.png"))
                }, e.prototype.desactivate = function () {
                    this.active = !1, this.moving || (this.bg.texture = new a.Texture.fromImage(this.last ? "breadcrumb-empty-play-off.png" : "breadcrumb-empty-off.png"))
                }, e.prototype.hover = function () { }, e.prototype.updateTransform = function () {
                    t.prototype.updateTransform.call(this), this.tick += this.tickSpedd, this.active && this.graphic && this.moving && (this.tick += this.tickSpedd, this.graphic.position.x = this.graphic.o.x + 2 * Math.sin(this.tick), this.graphic.position.y = this.graphic.o.y + 2 * Math.cos(this.tick))
                }, e.prototype.resize = function (t, e) {
                    var i = 10 * this.index;
                    this.x = t / 5 * this.index - i, this.y = e - this.oheight + 10, this.last ? this.bg.width = t / 3 : this.bg.width = t / 5, this.over.width = Math.min(this.bg.width + 100), this.last && (this.over.height = Math.min(this.bg.height + 100)), this.over.position.y = this.bg.height / 2, this.over.position.x = this.bg.width / 2, this.graphicOverlay && (this.graphicOverlay.position.y = this.bg.height / 2, this.graphicOverlay.position.x = this.bg.width / 2), this.moving || (this.graphic.position.y = this.bg.height / 2, this.graphic.position.x = this.bg.width / 2)
                }, e
            }(a.Container);
        e["default"] = p, t.exports = e["default"]
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = i(16),
                s = i(20),
                a = i(41),
                h = i(187),
                l = i(188),
                c = i(189),
                u = i(34),
                p = i(21),
                d = function (t) {
                    s.call(this),
                    this.defaultTransition = new p,
                    this.app = t,
                    this.view = new r.Container,
                    this.view.visible = !1,
                    this.shown = !1,
                    this.pauseScreen = new h(t),
                    this.quitScreen = new l(t),
                    this.instructionsScreen = new c(t),
                    this.addScreen(this.pauseScreen, u.OVERLAY_ID.PAUSE),
                    this.addScreen(this.quitScreen, u.OVERLAY_ID.QUIT),
                    this.addScreen(this.instructionsScreen, u.OVERLAY_ID.INSTRUCTIONS),
                    this.addScreen(new r.Container, u.OVERLAY_ID.EMPTY),
                    this.onShow = new o,
                    this.onHide = new o,
                    this.black = r.Sprite.from(URL_HEADER.IMAGE + "ui/overlay-background.png"),
                    this.black.anchor.set(.5, .5),
                    this.black.interactive = !0,
                    this.closeButton = a.close("icon-back.png"),
                    this.closeButton.onPress.add(this.goBack, this),
                    this.closeButton.x = 1e4,
                    this.closeButton.y = 120,
                    this.view.addChild(this.black),
                    this.view.addChild(this.container),
                    this.view.addChild(this.closeButton),
                    this.app.screenManager.container.filterArea = new r.Rectangle(0, 0, 1e4, 1e4)
                };
            d.prototype = Object.create(s.prototype), d.prototype.goBack = function () {
                this.history.pop();
                var t = this.history.pop();
                t ? this.gotoScreen(t) : this.hide()
            }, d.prototype.show = function (t) {
                return this.shown ? void this.gotoScreenByID(t, !0) : (this.shown = !0, this.history = [], this.gotoScreenByID(t, !0), this.onShow.dispatch(), this.view.alpha = 0, this.view.visible = !0, TweenLite.to(this.view, .3, {
                    alpha: 1
                }), void this.closeButton.scale.set(0))
            }, d.prototype.gotoScreen = function (t) {
                void 0 === t.hasClose || t.hasClose === !0 ? (this.closeButton.interactive = !0, TweenLite.to(this.closeButton.scale, .3, {
                    x: this.closeButton.defaultScale,
                    y: this.closeButton.defaultScale,
                    ease: Back.easeOut,
                    delay: .4
                })) : (this.closeButton.interactive = !1, TweenLite.to(this.closeButton.scale, .3, {
                    x: 0,
                    y: 0,
                    ease: Back.easeOut
                })), s.prototype.gotoScreen.call(this, t)
            }, d.prototype.hide = function () {
                this.shown && (this.shown = !1, this.history = [], this.closeButton.interactive = !1, this.gotoScreenByID(u.OVERLAY_ID.EMPTY), TweenLite.to(this.closeButton.scale, .3, {
                    x: 0,
                    y: 0,
                    ease: Back.easeOut
                }), TweenLite.to(this.view, .3, {
                    alpha: 0,
                    onComplete: function () {
                        this.view.visible = !1, this.onHide.dispatch()
                    }.bind(this)
                }))
            }, d.prototype.resize = function (t, e) {
                this.closeButton.x = t / 2 + 320 - 5, this.closeButton.y = e / 2 - 180 - 12;
                var i = Math.max(t, e);
                this.black.width = this.black.height = i, this.black.position.set(t / 2, e / 2), s.prototype.resize.call(this, t, e)
            }, d.prototype.onFadeout = function () {
                this.currentScreen && (this.currentScreen.onHidden && this.currentScreen.onHidden(), this.container.removeChild(this.currentScreen)), this.currentScreen = this.nextScreen, this.currentScreen.alpha = 0, this.currentScreen.onShow && this.currentScreen.onShow(), this.currentScreen.resize && this.currentScreen.resize(this.w, this.h), this.container.addChild(this.currentScreen), TweenLite.to(this.currentScreen, .4, {
                    alpha: 1,
                    onComplete: this.onFadein.bind(this)
                })
            }, n.exports = d
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(32), i(41)),
                s = i(42),
                a = (i(18), i(38), i(57)),
                h = i(34),
                l = i(37),
                c = l.Translation;
            PauseScreen = function (t) {
                r.Container.call(this), this.app = t, this.hasClose = !1, this.bg = r.Sprite.from(URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png"), this.bg.anchor.set(.5, .5), this.addChild(this.bg), this.title = new a.h1(c.pause_overlay.title), this.title.anchor.set(.5), this.title.position.set(0, -this.bg.height / 2 - 35), this.addChild(this.title), this.helpButton = o.big("icon-help.png"), this.helpButton.position.set(130, 0), this.helpButton.onPress.add(this.onHelpButtonPressed, this), this.addChild(this.helpButton), this.resumeButton = new s("big-button-play.png", "big-button-play.png", "big-button-play.png", "icon_play.png", 1.1), this.resumeButton.icon.scale.x = -1, this.resumeButton.defaultScale = 1, this.resumeButton.icon.rotation = Math.PI, this.resumeButton.onPress.add(this.onResumeButtonPressed, this), this.addChild(this.resumeButton), this.quitButton = o.big("icon-bullet-burger.png"), this.quitButton.position.set(-130, 0), this.quitButton.onPress.add(this.onQuitButtonPressed, this), this.addChild(this.quitButton)
            }, PauseScreen.prototype = Object.create(r.Container.prototype), PauseScreen.prototype.onHelpButtonPressed = function () {
                this.app.overlayManager.show(h.OVERLAY_ID.INSTRUCTIONS)
            }, PauseScreen.prototype.onResumeButtonPressed = function () {
                this.app.overlayManager.hide(), this.app.gameScreen.game.resume(), this.app.topMenu.setState("game")
            }, PauseScreen.prototype.onQuitButtonPressed = function () {
                this.app.overlayManager.show(h.OVERLAY_ID.QUIT)
            }, PauseScreen.prototype.resize = function (t, e) {
                this.x = t / 2, this.y = e / 2
            }, n.exports = PauseScreen
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(32), i(41)),
                s = (i(18), i(38), i(57)),
                a = i(34),
                h = i(37),
                l = h.Translation,
                c = i(49),
                u = i(50);
            QuitScreen = function (t) {
                r.Container.call(this), this.app = t, this.hasClose = !1, this.bg = r.Sprite.from(URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png"), this.bg.anchor.set(.5, .5), this.addChild(this.bg), this.title = new s.h1(l.quit_overlay.title), this.title.anchor.set(.5, .5), this.title.position.set(0, -this.bg.height / 2 - 35), this.addChild(this.title), this.yesButton = o.validate("icon-tick.png"), this.yesButton.position.set(-65, 0), this.yesButton.onPress.add(this.onYesButtonPressed, this), this.addChild(this.yesButton), this.noButton = o.cancel("icon-cross.png"), this.noButton.position.set(65, 0), this.noButton.onPress.add(this.onNoButtonPressed, this), this.addChild(this.noButton)
            }, QuitScreen.prototype = Object.create(r.Container.prototype), QuitScreen.prototype.onYesButtonPressed = function () {
                this.app.gameScreen.game.reset();
                for (var t in u.CharacterData) {
                    var e = u.CharacterData[t];
                    e.selected = !1, e.available = !0
                }
                window.firstPlay && this.app.gameScreen.game.tutorialManager.reset(), this.app.overlayManager.hide(), c.isTournament ? this.app.screenManager.gotoScreenByID(a.SCREEN_ID.TITLE) : this.app.screenManager.gotoScreenByID(a.SCREEN_ID.TITLE)
            }, QuitScreen.prototype.onNoButtonPressed = function () {
                this.app.overlayManager.show(a.OVERLAY_ID.PAUSE)
            }, QuitScreen.prototype.resize = function (t, e) {
                this.x = t / 2, this.y = e / 2
            }, n.exports = QuitScreen
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        var n;
        n = function (t, e, n) {
            var r = i(8),
                o = (i(32), i(41), i(18), i(56)),
                s = i(34),
                a = i(37);
            a.Translation, i(49);
            InstructionsScreen = function (t) {
                r.Container.call(this),
                this.app = t,
                this.hasClose = !1,
                this.content = new o,
                this.content.onNextButton.add(this.onNextButtonPressed, this),
                this.content.onPreviousButton.add(this.onPreviousButtonPressed, this),
                this.addChild(this.content),
                this.content.nextButton.visible = !1
            },
            InstructionsScreen.prototype = Object.create(r.Container.prototype),
            InstructionsScreen.prototype.onShow = function () { },
            InstructionsScreen.prototype.onPreviousButtonPressed = function () {
                this.app.overlayManager.show(s.OVERLAY_ID.PAUSE)
            },
            InstructionsScreen.prototype.onNextButtonPressed = function () {
                this.app.overlayManager.show(s.OVERLAY_ID.PAUSE)
            },
            InstructionsScreen.prototype.resize = function (t, e) {
                this.x = t / 2, this.y = e / 2
            },
            n.exports = InstructionsScreen
        }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
    },
    function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        e.__esModule = !0;
        var a = i(8),
            h = i(48),
            l = (n(h), function (t) {
                function e(i) {
                    r(this, e);
                    var n = o(this, t.call(this));
                    window.spot = n, n.app = i, n.spots = [];
                    for (var s = [{
                        x: 33,
                        y: 60
                    }, {
                        x: 365,
                        y: 60
                    }, {
                        x: 413,
                        y: 60
                    }, {
                        x: 720,
                        y: 60
                    }, {
                        x: 773,
                        y: 60
                    }, {
                        x: 1100,
                        y: 60
                    }], h = 0; h < 6; h++) {
                        var l = new PIXI.Container,
                            c = new a.Sprite.from("spotlight.png");
                        c.blendMode = PIXI.BLEND_MODES.ADD, c.tint = 6304632;
                        var u = new a.Sprite.from("spotlight_blur.png");
                        u.tint = 6304632, u.blendMode = PIXI.BLEND_MODES.ADD, c.anchor.x = u.anchor.x = 1, c.anchor.y = u.anchor.y = 1, c.tick = h % 2 === 0 ? -1 : 1, c.alpha = .4, u.alpha = .3, c.addChild(u), l.addChild(c), n.spots.push(c), n.addChild(l), n.spots[h].position.x = s[h].x, n.spots[h].position.y = s[h].y + n.spots[h].height
                    }
                    return n.tick = 0, n
                }
                return s(e, t), e.prototype.updateTransform = function () {
                    t.prototype.updateTransform.call(this), this.tick += .01;
                    for (var e = 0; e < this.spots.length; e++) this.spots[e].rotation = Math.PI / 180 * 60 + Math.PI / 180 * Math.sin(this.tick * this.spots[e].tick) * 40
                }, e.prototype.show = function () {
                    TweenLite.to(this, .3, {
                        alpha: 1
                    })
                }, e.prototype.hide = function () {
                    TweenLite.to(this, .5, {
                        alpha: 0
                    })
                }, e
            }(a.Container));
        e["default"] = l, t.exports = e["default"]
    }
];