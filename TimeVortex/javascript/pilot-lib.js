var requirejs, require, define;
!function (global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }
    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }
    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)) ; n += 1);
        }
    }
    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)) ; n -= 1);
        }
    }
    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }
    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }
    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n))
                break
    }
    function mixin(e, t, n, i) {
        return t && eachProp(t, function (t, r) {
            !n && hasProp(e, r) || (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
        }), e
    }
    function bind(e, t) {
        return function () { return t.apply(e, arguments) }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function defaultOnError(e) {
        throw e
    }
    function getGlobal(e) {
        if (!e)
            return e;
        var t = global;
        return each(e.split("."), function (e) { t = t[e] }), t
    }
    function makeError(e, t, n, i) {
        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
    }
    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++)
                if (n = e[t], "." === n)
                    e.splice(t, 1), t -= 1;
                else if (".." === n) {
                    if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1])
                        continue;
                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                }
        }
        function n(e, n, i) {
            var r, o, a, s, c, u, f, l, d, p, h, m, g = n && n.split("/"), b = k.map, v = b && b["*"];
            if (e && (e = e.split("/"), f = e.length - 1, k.nodeIdCompat && jsSuffixRegExp.test(e[f]) && (e[f] = e[f].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), i && b && (g || v)) {
                a = e.split("/");
                e: for (s = a.length; s > 0; s -= 1) {
                    if (u = a.slice(0, s).join("/"), g) {
                        for (c = g.length; c > 0; c -= 1) {
                            if (o = getOwn(b, g.slice(0, c).join("/")), o && (o = getOwn(o, u))) {
                                l = o, d = s;
                                break e
                            }
                        }
                    }
                    !p && v && getOwn(v, u) && (p = getOwn(v, u), h = s)
                }
                !l && p && (l = p, d = h), l && (a.splice(0, d, l), e = a.join("/"))
            }

            return r = getOwn(k.pkgs, e), r ? r : e
        }
        function i(e) {
            isBrowser && each(scripts(),
                function (t) {
                    if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === w.contextName)
                        return t.parentNode.removeChild(t), !0
                })
        }
        function r(e) {
            var t = getOwn(k.paths, e);
            if (t && isArray(t) && t.length > 1)
                return t.shift(), w.require.undef(e), w.makeRequire(null, { skipMap: !0 })([e]), !0
        }
        function o(e) {
            var t, n = e ? e.indexOf("!") : -1; return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }
        function a(e, t, i, r) {
            var a, s, c, u, f = null, l = t ? t.name : null, d = e, p = !0, h = "";
            return e || (p = !1, e = "_@r" + (R += 1)),
                u = o(e),
                f = u[0],
                e = u[1],
                f && (f = n(f, l, r), s = getOwn(q, f)),
                e && (f ? h = s && s.normalize ? s.normalize(e, function (e) { return n(e, l, r) }) : e.indexOf("!") === -1 ? n(e, l, r) : e : (h = n(e, l, r), u = o(h), f = u[0], h = u[1], i = !0, a = w.nameToUrl(h))),
                c = !f || s || i ? "" : "_unnormalized" + (z += 1),
                { prefix: f, name: h, parentMap: t, unnormalized: !!c, url: a, originalName: d, isDefine: p, id: (f ? f + "!" + h : h) + c }
        }
        function s(e) {
            var t = e.id, n = getOwn(E, t); return n || (n = E[t] = new w.Module(e)), n
        }
        function c(e, t, n) {
            var i = e.id, r = getOwn(E, i);
            !hasProp(q, i) || r && !r.defineEmitComplete ? (r = s(e), r.error && "error" === t ? n(r.error) : r.on(t, n)) : "defined" === t && n(q[i])
        }
        function u(e, t) {
            var n = e.requireModules, i = !1; t ? t(e) : (each(n, function (t) { var n = getOwn(E, t); n && (n.error = e, n.events.error && (i = !0, n.emit("error", e))) }), i || req.onError(e))
        }
        function f() {
            globalDefQueue.length && (each(globalDefQueue, function (e) { var t = e[0]; "string" == typeof t && (w.defQueueMap[t] = !0), O.push(e) }), globalDefQueue = [])
        }
        function l(e) {
            delete E[e], delete j[e]
        }
        function d(e, t, n) {
            var i = e.map.id; e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function (i, r) { var o = i.id, a = getOwn(E, o); !a || e.depMatched[r] || n[o] || (getOwn(t, o) ? (e.defineDep(r, q[o]), e.check()) : d(a, t, n)) }), n[i] = !0)
        }
        function p() {
            var e, t, n = 1e3 * k.waitSeconds, o = n && w.startTime + n < (new Date).getTime(), a = [], s = [], c = !1, f = !0;
            if (!v) {
                if (v = !0,
                    eachProp(j,
                        function (e) {
                            var n = e.map, u = n.id;
                            if (e.enabled && (n.isDefine || s.push(e), !e.error)) {
                                if (!e.inited && o) {
                                    r(u) ? (t = !0, c = !0) : (a.push(u), i(u));
                } else if (!e.inited && e.fetched && n.isDefine && (c = !0, !n.prefix)) {
                                    return f = !1
                }
                }
                }
                    ),
                    o && a.length
                ) {
                    return e = makeError("timeout", "Load timeout for modules: " + a, null, a), e.contextName = w.contextName, u(e);
                    f && each(s, function (e) { d(e, {}, {}) }), o && !t || !c || !isBrowser && !isWebWorker || x || (x = setTimeout(function () { x = 0, p() }, 50)), v = !1
                }
            }
        }
        function h(e) {
            hasProp(q, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2])
        }
        function m(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }
        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, w.onScriptLoad, "load", "onreadystatechange"), m(t, w.onScriptError, "error"), { node: t, id: t && t.getAttribute("data-requiremodule") }
        }
        function b() {
            var e;
            for (f() ; O.length;) {
                if (e = O.shift(), null === e[0])
                    return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1])); h(e)
            } w.defQueueMap = {}
        }
        var v, y, w, _, x, k = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, E = {}, j = {}, M = {}, O = [], q = {}, S = {}, A = {}, R = 1, z = 1;
        return _ = {
            require: function (e) {
                return e.require ? e.require : e.require = w.makeRequire(e.map)
            },
            exports: function (e) {
                if (e.usingExports = !0, e.map.isDefine)
                    return e.exports ? q[e.map.id] = e.exports : e.exports = q[e.map.id] = {}
            },
            module: function (e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function () { return getOwn(k.config, e.map.id) || {} },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, y = function (e) {
            this.events = getOwn(M, e.id) || {},
            this.map = e,
            this.shim = getOwn(k.shim, e.id),
            this.depExports = [],
            this.depMaps = [],
            this.depMatched = [],
            this.pluginMaps = {},
            this.depCount = 0
        }, y.prototype = {
            init: function (e, t, n, i) {
                i = i || {},
                this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function (e) { this.emit("error", e) })),
                this.depMaps = e && e.slice(0),
                this.errback = n,
                this.inited = !0,
                this.ignore = i.ignore,
                i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, w.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void w.makeRequire(this.map, { enableBuildCallback: !0 })(this.shim.deps || [], bind(this, function () { return e.prefix ? this.callPlugin() : this.load() })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function () {
                var e = this.map.url; S[e] || (S[e] = !0, w.load(this.map.id, e))
            },
            check: function () {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id, i = this.depExports, r = this.exports, o = this.factory;
                    if (this.inited) {
                        if (this.error)
                            this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    try { r = w.execCb(n, o, i, r) }
                                    catch (a) { e = a }
                                    if (this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports : this.usingExports && (r = this.exports)), e) {
                                        if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)
                                            return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e);
                                        "undefined" != typeof console && console.error ? console.error(e) : req.onError(e)
                                    }
                                } else
                                    r = o;
                                if (this.exports = r, this.map.isDefine && !this.ignore && (q[n] = r, req.onResourceLoad)) {
                                    var s = []; each(this.depMaps, function (e) { s.push(e.normalizedMap || e) }), req.onResourceLoad(w, this.map, s)
                                }
                                l(n), this.defined = !0
                            }
                            this.defining = !1,
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else
                        hasProp(w.defQueueMap, n) || this.fetch()
                }
            },
            callPlugin: function () {
                var e = this.map,
                    t = e.id,
                    i = a(e.prefix);
                this.depMaps.push(i),
                c(i, "defined", bind(this, function (i) {
                    var r, o, f,
                        d = getOwn(A, this.map.id),
                        p = this.map.name,
                        h = this.map.parentMap ? this.map.parentMap.name : null,
                        m = w.makeRequire(e.parentMap, { enableBuildCallback: !0 });
                    return this.map.unnormalized ? (
                        i.normalize && (p = i.normalize(p, function (e) { return n(e, h, !0) }) || ""),
                        o = a(e.prefix + "!" + p, this.map.parentMap),
                        c(o, "defined", bind(this, function (e) { this.map.normalizedMap = o, this.init([], function () { return e }, null, { enabled: !0, ignore: !0 }) })),
                        f = getOwn(E, o.id),
                        void (f && (this.depMaps.push(o), this.events.error && f.on("error", bind(this, function (e) { this.emit("error", e) })), f.enable()))) : d ? (this.map.url = w.nameToUrl(d), void this.load()) : (
                        r = bind(this, function (e) {
                            this.init([], function () { return e }, null, { enabled: !0 })
                        }),
                        r.error = bind(this, function (e) {
                            this.inited = !0,
                            this.error = e,
                            e.requireModules = [t],
                            eachProp(E, function (e) { 0 === e.map.id.indexOf(t + "_unnormalized") && l(e.map.id) }),
                            u(e)
                        }),
                        r.fromText = bind(this, function (n, i) {
                            var o = e.name, c = a(o), f = useInteractive;
                            i && (n = i), f && (useInteractive = !1), s(c), hasProp(k.config, t) && (k.config[o] = k.config[t]);
                            try { req.exec(n) }
                            catch (l) {
                                return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + l, l, [t]))
                            }
                            f && (useInteractive = !0),
                            this.depMaps.push(c),
                            w.completeLoad(o),
                            m([o], r)
                        }),
                        void i.load(e.name, m, r, k))
                })),
                w.enable(i, this),
                this.pluginMaps[i.id] = i
            },
            enable: function () {
                j[this.map.id] = this,
                this.enabled = !0,
                this.enabling = !0,
                each(this.depMaps, bind(this, function (e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(_, e.id))
                            return void (this.depExports[t] = r(this));
                        this.depCount += 1,
                        c(e, "defined", bind(this, function (e) { this.undefed || (this.defineDep(t, e), this.check()) })),
                            this.errback ? c(e, "error", bind(this, this.errback)) : this.events.error && c(e, "error", bind(this, function (e) { this.emit("error", e) }))
                    }
                    n = e.id,
                    i = E[n],
                    hasProp(_, n) || !i || i.enabled || w.enable(e, this)
                })),
                eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = getOwn(E, e.id); t && !t.enabled && w.enable(e, this)
                })),
                this.enabling = !1,
                this.check()
            },
            on: function (e, t) {
                var n = this.events[e]; n || (n = this.events[e] = []), n.push(t)
            },
            emit: function (e, t) {
                each(this.events[e], function (e) { e(t) }), "error" === e && delete this.events[e]
            }
        },
            w = {
                config: k,
                contextName: e,
                registry: E,
                defined: q,
                urlFetched: S,
                defQueue: O,
                defQueueMap: {},
                Module: y,
                makeModuleMap: a,
                nextTick: req.nextTick,
                onError: u,
                configure: function (e) {
                    e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                    var t = k.shim, n = { paths: !0, bundles: !0, config: !0, map: !0 };
                    eachProp(e, function (e, t) {
                        n[t] ? (k[t] || (k[t] = {}), mixin(k[t], e, !0, !0)) : k[t] = e
                    }),
                    e.bundles && eachProp(e.bundles, function (e, t) {
                        each(e, function (e) { e !== t && (A[e] = t) })
                    }),
                    e.shim && (eachProp(e.shim, function (e, n) {
                        isArray(e) && (e = { deps: e }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = w.makeShimExports(e)), t[n] = e
                    }), k.shim = t),
                    e.packages && each(e.packages, function (e) {
                        var t, n;
                        e = "string" == typeof e ? { name: e } : e, n = e.name, t = e.location, t && (k.paths[n] = e.location), k.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }),
                    eachProp(E, function (e, t) {
                        e.inited || e.map.unnormalized || (e.map = a(t, null, !0))
                    }),
                    (e.deps || e.callback) && w.require(e.deps || [], e.callback)
                },
                makeShimExports: function (e) {
                    function t() {
                        var t; return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                    }
                    return t
                },
                makeRequire: function (t, r) {
                    function o(n, i, c) {
                        var f, l, d;
                        return r.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0),
                            "string" == typeof n ? isFunction(i) ? u(makeError("requireargs", "Invalid require call"), c) :
                            t && hasProp(_, n) ? _[n](E[t.id]) :
                            req.get ? req.get(w, n, t, o) :
                            (l = a(n, t, !1, !0),
                            f = l.id,
                            hasProp(q, f) ? q[f] :
                            u(makeError("notloaded", 'Module name "' + f + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) :
                            (b(), w.nextTick(function () { b(), d = s(a(null, t)), d.skipMap = r.skipMap, d.init(n, i, c, { enabled: !0 }), p() }), o)
                    }
                    return r = r || {},
                        mixin(o, {
                            isBrowser: isBrowser,
                            toUrl: function (e) {
                                var i, r = e.lastIndexOf("."), o = e.split("/")[0], a = "." === o || ".." === o;
                                return r !== -1 && (!a || r > 1) && (i = e.substring(r, e.length), e = e.substring(0, r)), w.nameToUrl(n(e, t && t.id, !0), i, !0)
                            },
                            defined: function (e) {
                                return hasProp(q, a(e, t, !1, !0).id)
                            },
                            specified: function (e) {
                                return e = a(e, t, !1, !0).id, hasProp(q, e) || hasProp(E, e)
                            }
                        }),
                        t || (o.undef = function (e) {
                            f();
                            var n = a(e, t, !0), r = getOwn(E, e);
                            r.undefed = !0,
                            i(e),
                            delete q[e],
                            delete S[n.url],
                            delete M[e],
                            eachReverse(O, function (t, n) {
                                t[0] === e && O.splice(n, 1)
                            }),
                            delete w.defQueueMap[e], r && (r.events.defined && (M[e] = r.events), l(e))
                        }), o
                },
                enable: function (e) {
                    var t = getOwn(E, e.id); t && s(e).enable()
                },
                completeLoad: function (e) {
                    var t, n, i, o = getOwn(k.shim, e) || {}, a = o.exports;
                    for (f() ; O.length;) {
                        if (n = O.shift(), null === n[0]) {
                            if (n[0] = e, t) break; t = !0
                        } else
                            n[0] === e && (t = !0); h(n)
                    } if (w.defQueueMap = {}, i = getOwn(E, e), !t && !hasProp(q, e) && i && !i.inited) {
                        if (!(!k.enforceDefine || a && getGlobal(a)))
                            return r(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                        h([e, o.deps || [], o.exportsFn])
                    } p()
                },
                nameToUrl: function (e, t, n) {
                    var i, r, o, a, s, c, u, f = getOwn(k.pkgs, e);
                    if (f && (e = f), u = getOwn(A, e))
                        return w.nameToUrl(u, t, n);
                    if (req.jsExtRegExp.test(e))
                        s = e + (t || "");
                    else {
                        for (i = k.paths, r = e.split("/"), o = r.length; o > 0; o -= 1)
                            if (a = r.slice(0, o).join("/"), c = getOwn(i, a)) {
                                isArray(c) && (c = c[0]), r.splice(0, o, c);
                                break
                            }
                        s = r.join("/"), s += t || (/^data\:|\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + s
                    }
                    return k.urlArgs ? s + ((s.indexOf("?") === -1 ? "?" : "&") + k.urlArgs) : s
                },
                load: function (e, t) {
                    req.load(w, e, t)
                },
                execCb: function (e, t, n, i) {
                    return t.apply(i, n)
                },
                onScriptLoad: function (e) {
                    if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                        interactiveScript = null; var t = g(e); w.completeLoad(t.id)
                    }
                },
                onScriptError: function (e) {
                    var t = g(e);
                    if (!r(t.id)) {
                        var n = [];
                        return eachProp(E, function (e, i) {
                            0 !== i.indexOf("_@r") && each(e.depMaps, function (e) { return e.id === t.id && n.push(i), !0 })
                        }), u(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [t.id]))
                    }
                }
            }, w.require = w.makeRequire(), w
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript)
    }
    var req,
        s,
        head,
        baseElement,
        dataMain,
        src,
        interactiveScript,
        currentlyAddingScript,
        mainScript,
        subPath,
        version = "2.1.22",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs))
                return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0),
        req = requirejs = function (e, t, n, i) {
            var r, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []),
                o && o.context && (a = o.context),
                r = getOwn(contexts, a),
                r || (r = contexts[a] = req.s.newContext(a)),
                o && r.configure(o),
                r.require(e, t, n);
        },
        req.config = function (e) {
            return req(e)
        },
        req.nextTick = "undefined" != typeof setTimeout ? function (e) { setTimeout(e, 4) } : function (e) { e() },
        require || (require = req),
        req.version = version,
        req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser,
        s = req.s = { contexts: contexts, newContext: newContext },
        req({}),
        each(["toUrl", "undef", "defined", "specified"], function (e) {
            req[e] = function () {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }),
        isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)),
        req.onError = defaultOnError,
        req.createNode = function (e, t, n) {
            var i = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return i.type = e.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i
        },
        req.load = function (e, t, n) {
            var i, r = e && e.config || {};
            if (isBrowser)
                return i = req.createNode(r, t, n),
                    r.onNodeCreated && r.onNodeCreated(i, r, t, n),
                    i.setAttribute("data-requirecontext", e.contextName),
                    i.setAttribute("data-requiremodule", t),
                    !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)),
                    i.src = n,
                    currentlyAddingScript = i,
                    baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i),
                    currentlyAddingScript = null, i;
            if (isWebWorker)
                try { importScripts(n), e.completeLoad(t) }
                catch (o) {
                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, o, [t]))
                }
        },
        isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main"))
                return mainScript = dataMain,
                    cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath),
                    mainScript = mainScript.replace(jsSuffixRegExp, ""),
                    req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }),
        define = function (e, t, n) {
            var i, r;
            "string" != typeof e && (n = t, t = e, e = null),
            isArray(t) || (n = t, t = null),
            !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, n) { t.push(n) }),
            t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))),
            useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")])), r ? (r.defQueue.push([e, t, n]), r.defQueueMap[e] = !0) : globalDefQueue.push([e, t, n])
        },
        define.amd = { jQuery: !0 },
        req.exec = function (text) { return eval(text) },
        req(cfg)
    }
}(this),
define("requirejs", function () { }),
!function (e) {
    function t(e, t, n) {
        "addEventListener" in window ? e.addEventListener(t, n, !1) : "attachEvent" in window && e.attachEvent("on" + t, n)
    }
    function n(e, t, n) {
        "removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in window && e.detachEvent("on" + t, n)
    }
    function i() {
        var e, t = ["moz", "webkit", "o", "ms"];
        for (e = 0; e < t.length && !N; e += 1)
            N = window[t[e] + "RequestAnimationFrame"]; N || s("setup", "RequestAnimationFrame not supported")
    }
    function r(e) {
        var t = "Host page: " + e;
        return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
    }
    function o(e) {
        return F + "[" + r(e) + "]"
    }
    function a(e) {
        return B[e] ? B[e].log : z
    }
    function s(e, t) {
        f("log", e, t, a(e))
    }
    function c(e, t) {
        f("info", e, t, a(e))
    }
    function u(e, t) {
        f("warn", e, t, !0)
    }
    function f(e, t, n, i) {
        !0 === i && "object" == typeof window.console && console[e](o(t), n)
    }
    function l(e) {
        function i() {
            function e() {
                v($), m(V), T("resizedCallback", $)
            }
            o("Height"), o("Width"), y(e, $, "init")
        }
        function r() {
            var e = Q.substr(I).split(":");
            return { iframe: B[e[0]] && B[e[0]].iframe, id: e[0], height: e[1], width: e[2], type: e[3] }
        }
        function o(e) {
            var t = Number(B[V]["max" + e]), n = Number(B[V]["min" + e]), i = e.toLowerCase(), r = Number($[i]);
            s(V, "Checking " + i + " is in range " + n + "-" + t), n > r && (r = n, s(V, "Set " + i + " to min value")), r > t && (r = t, s(V, "Set " + i + " to max value")), $[i] = "" + r
        }
        function a() {
            function t() {
                function e() {
                    var e = 0, t = !1;
                    for (s(V, "Checking connection is from allowed list of origins: " + i) ; e < i.length; e++)
                        if (i[e] === n) { t = !0; break }
                    return t
                }
                function t() {
                    var e = B[V] && B[V].remoteHost;
                    return s(V, "Checking connection is from: " + e), n === e
                }
                return i.constructor === Array ? e() : t()
            }
            var n = e.origin, i = B[V] && B[V].checkOrigin;
            if (i && "" + n != "null" && !t())
                throw new Error("Unexpected message received from: " + n + " for " + $.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
            return !0
        }
        function f() {
            return F === ("" + Q).substr(0, I) && Q.substr(I).split(":")[0] in B
        }
        function l() {
            var e = $.type in { "true": 1, "false": 1, undefined: 1 };
            return e && s(V, "Ignoring init message from meta parent page"), e
        }
        function x(e) {
            return Q.substr(Q.indexOf(":") + C + e)
        }
        function E(e) {
            s(V, "MessageCallback passed: {iframe: " + $.iframe.id + ", message: " + e + "}"), T("messageCallback", { iframe: $.iframe, message: JSON.parse(e) }), s(V, "--")
        }
        function j() {
            var e = document.body.getBoundingClientRect(), t = $.iframe.getBoundingClientRect();
            return JSON.stringify({
                iframeHeight: t.height,
                iframeWidth: t.width,
                clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                offsetTop: parseInt(t.top - e.top, 10),
                offsetLeft: parseInt(t.left - e.left, 10),
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset
            })
        }
        function M(e, t) {
            function n() { w("Send Page Info", "pageInfo:" + j(), e, t) } k(n, 32)
        }
        function O() {
            function e(e, t) {
                function n() {
                    B[o] ? M(B[o].iframe, o) : i()
                } ["scroll", "resize"].forEach(function (i) { s(o, e + i + " listener for sendPageInfo"), t(window, i, n) })
            }
            function i() {
                e("Remove ", n)
            }
            function r() {
                e("Add ", t)
            }
            var o = V; r(), B[o] && (B[o].stopPageInfo = i)
        }
        function q() {
            B[V] && B[V].stopPageInfo && (B[V].stopPageInfo(), delete B[V].stopPageInfo)
        }
        function S() {
            var e = !0; return null === $.iframe && (u(V, "IFrame (" + $.id + ") not found"), e = !1), e
        }
        function A(e) {
            var t = e.getBoundingClientRect();
            return h(V), { x: Math.floor(Number(t.left) + Number(W.x)), y: Math.floor(Number(t.top) + Number(W.y)) }
        }
        function R(e) {
            function t() { W = o, z(), s(V, "--") }
            function n() { return { x: Number($.width) + r.x, y: Number($.height) + r.y } }
            function i() {
                window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](o.x, o.y) : u(V, "Unable to scroll to requested position, window.parentIFrame not found")
            }
            var r = e ? A($.iframe) : { x: 0, y: 0 }, o = n(); s(V, "Reposition requested from iFrame (offset x:" + r.x + " y:" + r.y + ")"), window.top !== window.self ? i() : t()
        }
        function z() {
            !1 !== T("scrollCallback", W) ? m(V) : g()
        }
        function P(e) {
            function t() {
                var e = A(o);
                s(V, "Moving to in page link (#" + i + ") at x: " + e.x + " y: " + e.y), W = { x: e.x, y: e.y }, z(), s(V, "--")
            }
            function n() {
                window.parentIFrame ? window.parentIFrame.moveToAnchor(i) : s(V, "In page link #" + i + " not found and window.parentIFrame not found")
            }
            var i = e.split("#")[1] || "", r = decodeURIComponent(i), o = document.getElementById(r) || document.getElementsByName(r)[0];
            o ? t() : window.top !== window.self ? n() : s(V, "In page link #" + i + " not found")
        }
        function T(e, t) {
            return d(V, e, t)
        }
        function N() {
            switch (B[V] && B[V].firstRun && H(), $.type) {
                case "close":
                    B[V].closeRequestCallback ? d(V, "closeRequestCallback", B[V].iframe) : p($.iframe);
                    break;
                case "message":
                    E(x(6));
                    break;
                case "scrollTo":
                    R(!1);
                    break;
                case "scrollToOffset":
                    R(!0);
                    break;
                case "pageInfo":
                    M(B[V] && B[V].iframe, V), O();
                    break;
                case "pageInfoStop":
                    q();
                    break;
                case "inPageLink":
                    P(x(9));
                    break;
                case "reset":
                    b($);
                    break;
                case "init":
                    i(),
                    T("initCallback", $.iframe);
                    break;
                default: i()
            }
        }
        function L(e) {
            var t = !0; return B[e] || (t = !1, u($.type + " No settings for " + e + ". Message was: " + Q)), t
        }
        function D() {
            for (var e in B) w("iFrame requested init", _(e), document.getElementById(e), e)
        }
        function H() {
            B[V] && (B[V].firstRun = !1)
        }
        var Q = e.data, $ = {}, V = null; "[iFrameResizerChild]Ready" === Q ? D() : f() ? ($ = r(), V = U = $.id, B[V] && (B[V].loaded = !0), !l() && L(V) && (s(V, "Received: " + Q), S() && a() && N())) : c(V, "Ignored: " + Q)
    }
    function d(e, t, n) {
        var i = null, r = null; if (B[e]) { if (i = B[e][t], "function" != typeof i) throw new TypeError(t + " on iFrame[" + e + "] is not a function"); r = i(n) } return r
    }
    function p(e) {
        var t = e.id; s(t, "Removing iFrame: " + t), e.parentNode && e.parentNode.removeChild(e), d(t, "closedCallback", t), s(t, "--"), delete B[t]
    }
    function h(t) {
        null === W && (W = { x: window.pageXOffset !== e ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== e ? window.pageYOffset : document.documentElement.scrollTop }, s(t, "Get page position: " + W.x + "," + W.y))
    }
    function m(e) {
        null !== W && (window.scrollTo(W.x, W.y), s(e, "Set page position: " + W.x + "," + W.y), g())
    }
    function g() {
        W = null
    }
    function b(e) {
        function t() {
            v(e), w("reset", "reset", e.iframe, e.id)
        } s(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), h(e.id), y(t, e, "reset")
    }
    function v(e) {
        function t(t) {
            e.iframe.style[t] = e[t] + "px", s(e.id, "IFrame (" + r + ") " + t + " set to " + e[t] + "px")
        }
        function n(t) {
            P || "0" !== e[t] || (P = !0, s(r, "Hidden iFrame detected, creating visibility listener"), E())
        }
        function i(e) {
            t(e), n(e)
        }
        var r = e.iframe.id; B[r] && (B[r].sizeHeight && i("height"), B[r].sizeWidth && i("width"))
    }
    function y(e, t, n) {
        n !== t.type && N ? (s(t.id, "Requesting animation frame"), N(e)) : e()
    }
    function w(e, t, n, i, r) {
        function o() {
            var r = B[i] && B[i].targetOrigin; s(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + r), n.contentWindow.postMessage(F + t, r)
        }
        function a() {
            u(i, "[" + e + "] IFrame(" + i + ") not found")
        }
        function c() {
            n && "contentWindow" in n && null !== n.contentWindow ? o() : a()
        }
        function f() {
            function e() {
                !B[i] || B[i].loaded || l || (l = !0, u(i, "IFrame has not responded within " + B[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
            }
            r && B[i] && B[i].warningTimeout && (B[i].msgTimeout = setTimeout(e, B[i].warningTimeout))
        }
        var l = !1; i = i || n.id, B[i] && (c(), f())
    }
    function _(e) {
        return e + ":" + B[e].bodyMarginV1 + ":" + B[e].sizeWidth + ":" + B[e].log + ":" + B[e].interval + ":" + B[e].enablePublicMethods + ":" +
            B[e].autoResize + ":" + B[e].bodyMargin + ":" + B[e].heightCalculationMethod + ":" + B[e].bodyBackground + ":" + B[e].bodyPadding +
            ":" + B[e].tolerance + ":" + B[e].inPageLinks + ":" + B[e].resizeFrom + ":" + B[e].widthCalculationMethod
    }
    function x(n, i) {
        function r() {
            function e(e) {
                1 / 0 !== B[k][e] && 0 !== B[k][e] && (n.style[e] = B[k][e] + "px", s(k, "Set " + e + " = " + B[k][e] + "px"))
            }
            function t(e) {
                if (B[k]["min" + e] > B[k]["max" + e])
                    throw new Error("Value for min" + e + " can not be greater than max" + e)
            }
            t("Height"), t("Width"), e("maxHeight"), e("minHeight"), e("maxWidth"), e("minWidth")
        }
        function o() {
            var e = i && i.id || H.id + R++;
            return null !== document.getElementById(e) && (e += R++), e
        }
        function a(e) {
            return U = e, "" === e && (n.id = e = o(), z = (i || {}).log, U = e, s(e, "Added missing iframe ID: " + e + " (" + n.src + ")")), e
        }
        function c() {
            switch (s(k, "IFrame scrolling " + (B[k] && B[k].scrolling ? "enabled" : "disabled") + " for " + k),
                n.style.overflow = !1 === (B[k] && B[k].scrolling) ? "hidden" : "auto", B[k] && B[k].scrolling) {
                case !0: n.scrolling = "yes"; break;
                case !1: n.scrolling = "no"; break;
                default: n.scrolling = B[k] ? B[k].scrolling : "no"
            }
        }
        function f() {
            ("number" == typeof (B[k] && B[k].bodyMargin) || "0" === (B[k] && B[k].bodyMargin)) && (B[k].bodyMarginV1 = B[k].bodyMargin, B[k].bodyMargin = "" + B[k].bodyMargin + "px")
        }
        function l() {
            var e = B[k] && B[k].firstRun, t = B[k] && B[k].heightCalculationMethod in L; !e && t && b({ iframe: n, height: 0, width: 0, type: "init" })
        }
        function d() {
            Function.prototype.bind && B[k] && (B[k].iframe.iFrameResizer = {
                close: p.bind(null, B[k].iframe),
                resize: w.bind(null, "Window resize", "resize", B[k].iframe),
                moveToAnchor: function (e) {
                    w("Move to anchor", "moveToAnchor:" + e, B[k].iframe, k)
                },
                sendMessage: function (e) { e = JSON.stringify(e), w("Send Message", "message:" + e, B[k].iframe, k) }
            })
        }
        function h(i) {
            function r() {
                w("iFrame.onload", i, n, e, !0), l()
            }
            t(n, "load", r), w("init", i, n, e, !0)
        }
        function m(e) {
            if ("object" != typeof e) throw new TypeError("Options is not an object")
        }
        function g(e) {
            for (var t in H) H.hasOwnProperty(t) && (B[k][t] = e.hasOwnProperty(t) ? e[t] : H[t])
        }
        function v(e) {
            return "" === e || "file://" === e ? "*" : e
        }
        function y(e) {
            e = e || {},
            B[k] = { firstRun: !0, iframe: n, remoteHost: n.src.split("/").slice(0, 3).join("/") },
            m(e),
            g(e),
            B[k] && (B[k].targetOrigin = !0 === B[k].checkOrigin ? v(B[k].remoteHost) : "*")
        }
        function x() {
            return k in B && "iFrameResizer" in n
        }
        var k = a(n.id); x() ? u(k, "Ignored iFrame, already setup.") : (y(i), c(), r(), f(), h(_(k)), d())
    }
    function k(e, t) {
        null === D && (D = setTimeout(function () { D = null, e() }, t))
    }
    function E() {
        function e() {
            function e(e) {
                function t(t) {
                    return "0px" === (B[e] && B[e].iframe.style[t])
                }
                function n(e) {
                    return null !== e.offsetParent
                }
                B[e] && n(B[e].iframe) && (t("height") || t("width")) && w("Visibility change", "resize", B[e].iframe, e)
            }
            for (var t in B)
                e(t)
        }
        function t(t) {
            s("window", "Mutation observed: " + t[0].target + " " + t[0].type), k(e, 16)
        }
        function n() {
            var e = document.querySelector("body"), n = { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 }, r = new i(t); r.observe(e, n)
        }
        var i = window.MutationObserver || window.WebKitMutationObserver; i && n()
    }
    function j(e) {
        function t() { O("Window " + e, "resize") } s("window", "Trigger event: " + e), k(t, 16)
    }
    function M() {
        function e() { O("Tab Visable", "resize") } "hidden" !== document.visibilityState && (s("document", "Trigger event: Visiblity change"), k(e, 16))
    }
    function O(e, t) {
        function n(e) { return B[e] && "parent" === B[e].resizeFrom && B[e].autoResize && !B[e].firstRun } for (var i in B) n(i) && w(e, t, document.getElementById(i), i)
    }
    function q() {
        t(window, "message", l), t(window, "resize",
            function () {
                j("resize")
            }),
        t(document, "visibilitychange", M),
        t(document, "-webkit-visibilitychange", M),
        t(window, "focusin", function () { j("focus") }), t(window, "focus", function () { j("focus") })
    }
    function S() {
        function t(e, t) {
            function n() {
                if (!t.tagName)
                    throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== t.tagName.toUpperCase())
                    throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">")
            }
            t && (n(), x(t, e), r.push(t))
        }
        function n(e) {
            e && e.enablePublicMethods && u("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
        }
        var r;
        return i(),
            q(),
            function (i, o) {
                switch (r = [], n(i), typeof o) {
                    case "undefined":
                    case "string": Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), t.bind(e, i)); break;
                    case "object": t(i, o); break;
                    default: throw new TypeError("Unexpected data type (" + typeof o + ")")
                }
                return r
            }
    }
    function A(e) {
        e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function (e) { function t(t, n) { x(n, e) } return this.filter("iframe").each(t).end() }) : c("", "Unable to bind to jQuery, it is not fully loaded.")
    }
    if ("undefined" != typeof window) {
        var R = 0,
            z = !1,
            P = !1,
            T = "message",
            C = T.length,
            F = "[iFrameSizer]",
            I = F.length,
            W = null,
            N = window.requestAnimationFrame,
            L = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
            B = {},
            D = null,
            U = "Host Page",
            H = {
                autoResize: !0,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: !0,
                inPageLinks: !1,
                enablePublicMethods: !0,
                heightCalculationMethod: "bodyOffset",
                id: "iFrameResizer",
                interval: 32,
                log: !1,
                maxHeight: 1 / 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                minWidth: 0,
                resizeFrom: "parent",
                scrolling: !1,
                sizeHeight: !0,
                sizeWidth: !1,
                warningTimeout: 5e3,
                tolerance: 0,
                widthCalculationMethod: "scroll",
                closedCallback: function () { },
                initCallback: function () { },
                messageCallback: function () { u("MessageCallback function not defined") },
                resizedCallback: function () { },
                scrollCallback: function () { return !0 }
            };
        window.jQuery && A(window.jQuery),
        "function" == typeof define && define.amd ? define("iframe-resizer", [], S) : "object" == typeof module && "object" == typeof module.exports ? module.exports = S() : window.iFrameResize = window.iFrameResize || S()
    }
}(),
function () {
    function e(e, t, n) {
        switch (n.length) {
            case 0: return e.call(t);
            case 1: return e.call(t, n[0]);
            case 2: return e.call(t, n[0], n[1]);
            case 3: return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    function t(e) {
        return function (t) { return e(t) }
    }
    function n() { }
    function i(e) {
        var t = -1, n = null == e ? 0 : e.length; for (this.clear() ; ++t < n;) { var i = e[t]; this.set(i[0], i[1]) }
    }
    function r(e) {
        var t = -1, n = null == e ? 0 : e.length; for (this.clear() ; ++t < n;) { var i = e[t]; this.set(i[0], i[1]) }
    }
    function o(e) {
        var t = -1, n = null == e ? 0 : e.length; for (this.clear() ; ++t < n;) { var i = e[t]; this.set(i[0], i[1]) }
    }
    function a(e) {
        this.size = (this.__data__ = new r(e)).size
    }
    function s(e, t, n) {
        (n === F || k(e[t], n)) && (n !== F || t in e) || u(e, t, n)
    }
    function c(e, t) {
        for (var n = e.length; n--;) if (k(e[n][0], t)) return n; return -1
    }
    function u(e, t, n) {

        "__proto__" == t && oe ? oe(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n
    }
    function f(e) {
        if (null == e)
            return e === F ? "[object Undefined]" : "[object Null]";
        if (re && re in Object(e)) {
            var t = Y.call(e, re), n = e[re];
            try { e[re] = F; var i = !0 }
            catch (e) { }
            var r = J.call(e);
            i && (t ? e[re] = n : delete e[re]), e = r
        } else
            e = J.call(e);
        return e
    }
    function l(e) {
        return S(e) && "[object Arguments]" == f(e)
    }
    function d(e) {
        return S(e) && O(e.length) && !!N[f(e)]
    }
    function p(e, t, n, i, r) {
        e !== t && le(t, function (o, c) {
            if (q(o)) {
                r || (r = new a); var u = r, f = "__proto__" == c ? F : e[c], l = "__proto__" == c ? F : t[c], d = u.get(l); if (d) s(e, c, d); else {
                    var h = i ? i(f, l, c + "", e, t, u) : F;
                    if (d = h === F) {
                        var m = he(l), g = !m && me(l), b = !m && !g && ge(l), h = l;
                        if (m || g || b)
                            if (he(f)) h = f;
                            else if (j(f))
                                for (h = void 0, m = -1, g = f.length, h || (h = Array(g)) ; ++m < g;)
                                    h[m] = f[m];
                            else
                                g ? (d = !1, h = l.slice()) : b ? (d = !1, f = l.buffer, h = new f.constructor(f.byteLength), new Z(h).set(new Z(f)), h = new l.constructor(h, l.byteOffset, l.length)) : h = [];
                        else
                            A(l) || pe(l) ? (h = f, pe(f) ? h = R(f) : (!q(f) || n && M(f)) && (h = "function" != typeof l.constructor || w(l) ? {} : fe(ee(l)))) : d = !1
                    } d && (u.set(l, h), p(h, l, n, i, u), u["delete"](l)),
s(e, c, h)
                }
            } else u = i ? i("__proto__" == c ? F : e[c], o, c + "", e, t, r) : F, u === F && (u = o), s(e, c, u)
        }, z)
    }
    function h(e, t) {
        return de(_(e, t, T), e + "")
    }
    function m(e, t, n, i, r, o) {
        return q(e) && q(t) && (o.set(t, e), p(e, t, F, m, o), o["delete"](t)), e
    }
    function g(e, t) {
        var n = e.__data__, i = typeof t; return ("string" == i || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== t : null === t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
    function b(e, t) {
        var n, i = null == e ? F : e[t]; return n = !(!q(i) || G && G in i) && (M(i) ? K : I).test(x(i)), n ? i : F
    }
    function v(e, t) {
        var n = typeof e; return t = null == t ? 9007199254740991 : t, !!t && ("number" == n || "symbol" != n && W.test(e)) && -1 < e && 0 == e % 1 && e < t
    }
    function y(e, t, n) {
        if (!q(n)) return !1; var i = typeof t; return !!("number" == i ? E(n) && v(t, n.length) : "string" == i && t in n) && k(n[t], e)
    }
    function w(e) {
        var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || Q)
    }
    function _(t, n, i) {
        return n = ae(n === F ? t.length - 1 : n, 0), function () { for (var r = arguments, o = -1, a = ae(r.length - n, 0), s = Array(a) ; ++o < a;) s[o] = r[n + o]; for (o = -1, a = Array(n + 1) ; ++o < n;) a[o] = r[o]; return a[n] = i(s), e(t, this, a) }
    }
    function x(e) {
        if (null != e) { try { return V.call(e) } catch (e) { } return e + "" } return ""
    }
    function k(e, t) {
        return e === t || e !== e && t !== t
    }
    function E(e) {
        return null != e && O(e.length) && !M(e)
    }
    function j(e) {
        return S(e) && E(e)
    }
    function M(e) {
        return !!q(e) && (e = f(e), "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e)
    }
    function O(e) {
        return "number" == typeof e && -1 < e && 0 == e % 1 && 9007199254740991 >= e
    }
    function q(e) {
        var t = typeof e; return null != e && ("object" == t || "function" == t)
    }
    function S(e) {
        return null != e && "object" == typeof e
    }
    function A(e) {
        return !(!S(e) || "[object Object]" != f(e)) && (e = ee(e), null === e || (e = Y.call(e, "constructor") && e.constructor, "function" == typeof e && e instanceof e && V.call(e) == X))
    }
    function R(e) {
        var t = z(e), n = void 0, i = !n;
        n || (n = {});
        for (var r = -1, o = t.length; ++r < o;) {
            var a = t[r], s = F;
            if (s === F && (s = e[a]), i)
                u(n, a, s);
            else {
                var c = n, f = c[a]; Y.call(c, a) && k(f, s) && (s !== F || a in c) || u(c, a, s)
            }
        } return n
    }
    function z(e) {
        if (E(e)) {
            var t = he(e), n = !t && pe(e), i = !t && !n && me(e), r = !t && !n && !i && ge(e);
            if (t = t || n || i || r) {
                for (var n = e.length, o = String, a = -1, s = Array(n) ; ++a < n;) s[a] = o(a); n = s
            } else {
                n = [];
            }
            var c, o = n.length;
            for (c in e)
                t && ("length" == c || i && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || v(c, o)) || n.push(c);
            e = n
        } else if (q(e)) {
            c = w(e), r = []; for (i in e) ("constructor" != i || !c && Y.call(e, i)) && r.push(i); e = r
        } else {
            if (c = [], null != e) for (r in Object(e)) c.push(r); e = c
        }
        return e
    }
    function P(e) {
        return function () { return e }
    }
    function T(e) {
        return e
    }
    function C() {
        return !1
    }
    var F, I = /^\[object .+?Constructor\]$/, W = /^(?:0|[1-9]\d*)$/, N = {};
    N["[object Float32Array]"] = N["[object Float64Array]"] = N["[object Int8Array]"] = N["[object Int16Array]"] = N["[object Int32Array]"] =
        N["[object Uint8Array]"] = N["[object Uint8ClampedArray]"] = N["[object Uint16Array]"] = N["[object Uint32Array]"] = !0, N["[object Arguments]"] =
        N["[object Array]"] = N["[object ArrayBuffer]"] = N["[object Boolean]"] = N["[object DataView]"] = N["[object Date]"] = N["[object Error]"] =
        N["[object Function]"] = N["[object Map]"] = N["[object Number]"] = N["[object Object]"] = N["[object RegExp]"] = N["[object Set]"] =
        N["[object String]"] = N["[object WeakMap]"] = !1;
    var L,
        B = "object" == typeof global && global && global.Object === Object && global,
        D = "object" == typeof self && self && self.Object === Object && self,
        D = B || D || Function("return this")(),
        U = "object" == typeof exports && exports && !exports.nodeType && exports,
        H = U && "object" == typeof module && module && !module.nodeType && module,
        B = (U = H && H.exports === U) && B.process;
    e: { try { L = B && B.binding && B.binding("util"); break e } catch (e) { } L = void 0 }
    L = L && L.isTypedArray;
    var B = Array.prototype,
        Q = Object.prototype,
        $ = D["__core-js_shared__"],
        V = Function.prototype.toString,
        Y = Q.hasOwnProperty,
        G = function () {
            var e = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }(),
        J = Q.toString,
        X = V.call(Object),
        K = RegExp("^" + V.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        U = U ? D.Buffer : F,
        H = D.Symbol,
        Z = D.Uint8Array,
        ee = function (e, t) {
            return function (n) { return e(t(n)) }
        }(Object.getPrototypeOf, Object),
        te = Object.create,
        ne = Q.propertyIsEnumerable,
        ie = B.splice, re = H ? H.toStringTag : F,
        oe = function () { try { var e = b(Object, "defineProperty"); return e({}, "", {}), e } catch (e) { } }(),
        B = U ? U.isBuffer : F,
        ae = Math.max,
        se = Date.now,
        ce = b(D, "Map"),
        ue = b(Object, "create"),
        fe = function () {
            function e() { }
            return function (t) {
                return q(t) ? te ? te(t) : (e.prototype = t, t = new e, e.prototype = F, t) : {}
            }
        }();
    i.prototype.clear = function () {
        this.__data__ = ue ? ue(null) : {}, this.size = 0
    },
    i.prototype["delete"] = function (e) {
        return e = this.has(e) && delete this.__data__[e], this.size -= e ? 1 : 0, e
    },
    i.prototype.get = function (e) {
        var t = this.__data__; return ue ? (e = t[e], "__lodash_hash_undefined__" === e ? F : e) : Y.call(t, e) ? t[e] : F
    },
    i.prototype.has = function (e) {
        var t = this.__data__; return ue ? t[e] !== F : Y.call(t, e)
    },
    i.prototype.set = function (e, t) {
        var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = ue && t === F ? "__lodash_hash_undefined__" : t, this
    },
    r.prototype.clear = function () {
        this.__data__ = [], this.size = 0
    },
    r.prototype["delete"] = function (e) {
        var t = this.__data__; return e = c(t, e), !(0 > e || (e == t.length - 1 ? t.pop() : ie.call(t, e, 1), --this.size, 0))
    },
    r.prototype.get = function (e) {
        var t = this.__data__; return e = c(t, e), 0 > e ? F : t[e][1]
    },
    r.prototype.has = function (e) {
        return -1 < c(this.__data__, e)
    },
    r.prototype.set = function (e, t) {
        var n = this.__data__, i = c(n, e); return 0 > i ? (++this.size, n.push([e, t])) : n[i][1] = t, this
    },
    o.prototype.clear = function () {
        this.size = 0, this.__data__ = { hash: new i, map: new (ce || r), string: new i }
    },
    o.prototype["delete"] = function (e) {
        return e = g(this, e)["delete"](e), this.size -= e ? 1 : 0, e
    },
    o.prototype.get = function (e) {
        return g(this, e).get(e)
    },
    o.prototype.has = function (e) {
        return g(this, e).has(e)
    },
    o.prototype.set = function (e, t) {
        var n = g(this, e), i = n.size; return n.set(e, t), this.size += n.size == i ? 0 : 1, this
    },
    a.prototype.clear = function () {
        this.__data__ = new r, this.size = 0
    },
    a.prototype["delete"] = function (e) {
        var t = this.__data__; return e = t["delete"](e), this.size = t.size, e
    },
    a.prototype.get = function (e) {
        return this.__data__.get(e)
    },
    a.prototype.has = function (e) {
        return this.__data__.has(e)
    },
    a.prototype.set = function (e, t) {
        var n = this.__data__; if (n instanceof r) { var i = n.__data__; if (!ce || 199 > i.length) return i.push([e, t]), this.size = ++n.size, this; n = this.__data__ = new o(i) } return n.set(e, t), this.size = n.size, this
    };
    var le = function (e) {
        return function (t, n, i) { var r = -1, o = Object(t); i = i(t); for (var a = i.length; a--;) { var s = i[e ? a : ++r]; if (!1 === n(o[s], s, o)) break } return t }
    }(),
    de = function (e) {
        var t = 0, n = 0;
        return function () {
            var i = se(), r = 16 - (i - n); if (n = i, 0 < r) { if (800 <= ++t) return arguments[0] } else t = 0; return e.apply(F, arguments)
        }
    }(oe ? function (e, t) {
        return oe(e, "toString", { configurable: !0, enumerable: !1, value: P(t), writable: !0 })
    } : T),
    pe = l(function () {
        return arguments
    }()) ? l : function (e) {
        return S(e) && Y.call(e, "callee") && !ne.call(e, "callee")
    },
    he = Array.isArray,
    me = B || C,
    ge = L ? t(L) : d,
    D = h(function (e, t) {
        e = Object(e);
        var n = -1, i = t.length, r = 2 < i ? t[2] : F;
        for (r && y(t[0], t[1], r) && (i = 1) ; ++n < i;)
            for (var r = t[n], o = z(r), a = -1, s = o.length; ++a < s;) {
                var c = o[a], u = e[c]; (u === F || k(u, Q[c]) && !Y.call(e, c)) && (e[c] = r[c])
            }
        return e
    });
    L = h(function (t) { return t.push(F, m), e(be, F, t) });
    var be = function (e) {
        return h(function (t, n) {
            var i = -1, r = n.length, o = 1 < r ? n[r - 1] : F, a = 2 < r ? n[2] : F, o = 3 < e.length && "function" == typeof o ? (r--, o) : F;
            for (a && y(n[0], n[1], a) && (o = 3 > r ? F : o, r = 1), t = Object(t) ; ++i < r;)
                (a = n[i]) && e(t, a, i, o);
            return t
        })
    }(function (e, t, n, i) {
        p(e, t, n, i)
    });
    n.constant = P,
    n.defaults = D,
    n.defaultsDeep = L,
    n.keysIn = z,
    n.mergeWith = be,
    n.toPlainObject = R,
    n.eq = k,
    n.identity = T,
    n.isArguments = pe,
    n.isArray = he,
    n.isArrayLike = E,
    n.isArrayLikeObject = j,
    n.isBuffer = me,
    n.isFunction = M,
    n.isLength = O,
    n.isObject = q,
    n.isObjectLike = S,
    n.isPlainObject = A,
    n.isTypedArray = ge,
    n.stubFalse = C,
    n.VERSION = "4.17.5",
    "function" == typeof define && "object" == typeof define.amd && define.amd && define("lodash", [], function () { return n })
}.call(this),
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("es6-promise", t) : e.ES6Promise = t()
}(this, function () {
    function e(e) {
        return "function" == typeof e || "object" == typeof e && null !== e
    }
    function t(e) {
        return "function" == typeof e
    }
    function n(e) { $ = e }
    function i(e) { V = e }
    function r() {
        return function () { return process.nextTick(u) }
    }
    function o() {
        return "undefined" != typeof Q ? function () { Q(u) } : c()
    }
    function a() {
        var e = 0, t = new J(u), n = document.createTextNode(""); return t.observe(n, { characterData: !0 }), function () { n.data = e = ++e % 2 }
    }
    function s() {
        var e = new MessageChannel; return e.port1.onmessage = u, function () { return e.port2.postMessage(0) }
    }
    function c() {
        var e = setTimeout; return function () { return e(u, 1) }
    }
    function u() {
        for (var e = 0; e < H; e += 2) { var t = Z[e], n = Z[e + 1]; t(n), Z[e] = void 0, Z[e + 1] = void 0 } H = 0
    }
    function f() {
        try { var e = require, t = e("vertx"); return Q = t.runOnLoop || t.runOnContext, o() } catch (n) { return c() }
    }
    function l(e, t) {
        var n = arguments, i = this, r = new this.constructor(p);
        void 0 === r[te] && z(r); var o = i._state; return o ? !function () { var e = n[o - 1]; V(function () { return S(o, r, e, i._result) }) }() : j(i, r, e, t), r
    }
    function d(e) {
        var t = this; if (e && "object" == typeof e && e.constructor === t) return e; var n = new t(p); return _(n, e), n
    }
    function p() { }
    function h() {
        return new TypeError("You cannot resolve a promise with itself")
    }
    function m() {
        return new TypeError("A promises callback cannot return that same promise.")
    }
    function g(e) {
        try { return e.then } catch (t) { return oe.error = t, oe }
    }
    function b(e, t, n, i) {
        try { e.call(t, n, i) } catch (r) { return r }
    }
    function v(e, t, n) {
        V(function (e) {
            var i = !1, r = b(n, t, function (n) {
                i || (i = !0, t !== n ? _(e, n) : k(e, n))
            }, function (t) { i || (i = !0, E(e, t)) }, "Settle: " + (e._label || " unknown promise")); !i && r && (i = !0, E(e, r))
        }, e)
    }
    function y(e, t) {
        t._state === ie ? k(e, t._result) : t._state === re ? E(e, t._result) : j(t, void 0, function (t) { return _(e, t) }, function (t) { return E(e, t) })
    }
    function w(e, n, i) {
        n.constructor === e.constructor && i === l && n.constructor.resolve === d ? y(e, n) : i === oe ? E(e, oe.error) : void 0 === i ? k(e, n) : t(i) ? v(e, n, i) : k(e, n)
    }
    function _(t, n) {
        t === n ? E(t, h()) : e(n) ? w(t, n, g(n)) : k(t, n)
    }
    function x(e) {
        e._onerror && e._onerror(e._result), M(e)
    }
    function k(e, t) {
        e._state === ne && (e._result = t, e._state = ie, 0 !== e._subscribers.length && V(M, e))
    }
    function E(e, t) {
        e._state === ne && (e._state = re, e._result = t, V(x, e))
    }
    function j(e, t, n, i) {
        var r = e._subscribers, o = r.length; e._onerror = null, r[o] = t, r[o + ie] = n, r[o + re] = i, 0 === o && e._state && V(M, e)
    }
    function M(e) {
        var t = e._subscribers, n = e._state; if (0 !== t.length) { for (var i = void 0, r = void 0, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? S(n, i, r, o) : r(o); e._subscribers.length = 0 }
    }
    function O() {
        this.error = null
    }
    function q(e, t) {
        try { return e(t) } catch (n) { return ae.error = n, ae }
    }
    function S(e, n, i, r) {
        var o = t(i), a = void 0, s = void 0, c = void 0, u = void 0;
        if (o) {
            if (a = q(i, r), a === ae ? (u = !0, s = a.error, a = null) : c = !0, n === a)
                return void E(n, m())
        } else {
            a = r, c = !0;
        }
        n._state !== ne || (o && c ? _(n, a) : u ? E(n, s) : e === ie ? k(n, a) : e === re && E(n, a))
    }
    function A(e, t) {
        try { t(function (t) { _(e, t) }, function (t) { E(e, t) }) } catch (n) { E(e, n) }
    }
    function R() {
        return se++
    }
    function z(e) {
        e[te] = se++, e._state = void 0, e._result = void 0, e._subscribers = []
    }
    function P(e, t) {
        this._instanceConstructor = e,
        this.promise = new e(p),
        this.promise[te] || z(this.promise),
        U(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && k(this.promise, this._result))) : E(this.promise, T())
    }
    function T() {
        return new Error("Array Methods must be provided an Array")
    }
    function C(e) {
        return new P(this, e).promise
    }
    function F(e) {
        var t = this;
        return new t(U(e) ? function (n, i) {
            for (var r = e.length, o = 0; o < r; o++) t.resolve(e[o]).then(n, i)
        } : function (e, t) {
            return t(new TypeError("You must pass an array to race."))
        })
    }
    function I(e) {
        var t = this, n = new t(p); return E(n, e), n
    }
    function W() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }
    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }
    function L(e) {
        this[te] = R(), this._result = this._state = void 0, this._subscribers = [], p !== e && ("function" != typeof e && W(), this instanceof L ? A(this, e) : N())
    }
    function B() {
        var e = void 0;
        if ("undefined" != typeof global)
            e = global;
        else if ("undefined" != typeof self)
            e = self;
        else
            try { e = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
        var n = e.Promise;
        if (n) {
            var i = null;
            try { i = Object.prototype.toString.call(n.resolve()) } catch (t) { }
            if ("[object Promise]" === i && !n.cast)
                return
        }
        e.Promise = L
    }
    var D = void 0;
    D = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };
    var U = D, H = 0, Q = void 0, $ = void 0, V = function (e, t) {
        Z[H] = e, Z[H + 1] = t, H += 2, 2 === H && ($ ? $(u) : ee())
    },
    Y = "undefined" != typeof window ? window : void 0,
    G = Y || {},
    J = G.MutationObserver || G.WebKitMutationObserver,
    X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
    K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
    Z = new Array(1e3),
    ee = void 0;
    ee = X ? r() : J ? a() : K ? s() : void 0 === Y && "function" == typeof require ? f() : c();
    var te = Math.random().toString(36).substring(16),
        ne = void 0,
        ie = 1,
        re = 2,
        oe = new O,
        ae = new O,
        se = 0;
    return P.prototype._enumerate = function () {
        for (var e = this.length, t = this._input, n = 0; this._state === ne && n < e; n++)
            this._eachEntry(t[n], n)
    },
        P.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor, i = n.resolve;
            if (i === d) {
                var r = g(e);
                if (r === l && e._state !== ne)
                    this._settledAt(e._state, t, e._result);
                else if ("function" != typeof r)
                    this._remaining--, this._result[t] = e;
                else if (n === L) {
                    var o = new n(p); w(o, e, r), this._willSettleAt(o, t)
                }
                else
                    this._willSettleAt(new n(function (t) { return t(e) }), t)
            } else
                this._willSettleAt(i(e), t)
        },
        P.prototype._settledAt = function (e, t, n) {
            var i = this.promise;
            i._state === ne && (this._remaining--, e === re ? E(i, n) : this._result[t] = n), 0 === this._remaining && k(i, this._result)
        },
        P.prototype._willSettleAt = function (e, t) {
            var n = this; j(e, void 0, function (e) {
                return n._settledAt(ie, t, e)
            }, function (e) {
                return n._settledAt(re, t, e)
            })
        },
        L.all = C,
        L.race = F,
        L.resolve = d,
        L.reject = I,
        L._setScheduler = n,
        L._setAsap = i,
        L._asap = V,
        L.prototype = { constructor: L, then: l, "catch": function (e) { return this.then(null, e) } }, L.polyfill = B, L.Promise = L, L
}), define("pilot-lib/taster-offsite-panel", ["iframe-resizer", "lodash", "es6-promise"], function (e, t, n) {
    function i(e, t, i, o, a, s) {
        switch (e) {
            case "expandInfo":
            case "closeQuestions":
            case "closeInfo":
                return new n(function (e) { t.style.width = o + "px", t.style.height = s + "px", e() });
            case "increasePanelH":
                return r(t, s / 25, a, s, u); case "decreasePanelH": return r(t, a / 25 * -1, a, s, u)
        }
    }
    function r(e, t, i, o, a) {
        return new n(function (n) { return t > 0 && i < o || t < 0 && i > o ? (i = t > 0 ? Math.min(i + t, o) : Math.max(i + t, o), a(e, i + "px"), setTimeout(function () { n(r(e, t, i, o, a)) }, 10), void 0) : n() })
    }
    function o(e) {
        e && e.contentWindow && e.contentWindow.postMessage && (window.innerWidth > 480 ? e.contentWindow.postMessage({ tasterCommand: "desktopWidth" }, "*") : e.contentWindow.postMessage({ tasterCommand: "mobileWidth" }, "*"))
    }
    function a(e) {
        for (var t = 0; t < e.length; t++) o(e[t])
    }
    function s(e) {
        var t = document.querySelector("#" + e.data.object);
        if (e.data.dimensions)
            i(e.data.action,
                t,
                e.data.dimensions.start_width,
                e.data.dimensions.end_width,
                e.data.dimensions.start_height,
                e.data.dimensions.end_height).then(function () {
                    t && t.contentWindow && t.contentWindow.postMessage && t.contentWindow.postMessage({
                        tasterCommand: e.data.action + "Resp",
                        dimensions: { frameWidth: e.data.dimensions.end_width, frameHeight: e.data.dimensions.end_height }
                    }, "*")
                });
        else
            switch (e.data.action) {
                case "initialise":
                    if (o(t), !t || !t.contentWindow || !t.contentWindow.postMessage)
                        return;
                    t.contentWindow.postMessage({ tasterCommand: "initialise" }, "*");
                    break;
                case "fullWidth":
                case "fullWidthPanel":
                case "fullWidthRestore":
                    if (t.style.width = "100%", !t || !t.contentWindow || !t.contentWindow.postMessage)
                        return;
                    t.contentWindow.postMessage({ tasterCommand: e.data.action + "Resp", dimensions: { clientWidth: document.body.clientWidth } }, "*");
                    break;
                case "fullWidthInfoPanel":
                    if (t.style.width = document.body.clientWidth + "px", !t || !t.contentWindow || !t.contentWindow.postMessage)
                        return;
                    t.contentWindow.postMessage({ tasterCommand: e.data.action + "Resp", dimensions: { clientWidth: document.body.clientWidth } }, "*")
            }
    }
    function c(n, i) {
        var r = Array.prototype.slice.call(document.querySelectorAll(n));
        i = i || {},
        i = t.defaults(i, {
            checkOrigin: [
                "http://sandbox.bbc.co.uk",
                "https://sandbox.bbc.co.uk",
                "http://int.bbc.co.uk",
                "http://www.int.bbc.co.uk",
                "https://int.bbc.co.uk",
                "https://www.int.bbc.co.uk",
                "http://test.bbc.co.uk",
                "http://www.test.bbc.co.uk",
                "https://test.bbc.co.uk",
                "https://www.test.bbc.co.uk",
                "http://bbc.co.uk",
                "http://www.bbc.co.uk",
                "https://bbc.co.uk",
                "https://www.bbc.co.uk"
            ],
            autoResize: !1,
            minHeight: 56,
            minWidth: 56,
            scrolling: !1,
            sizeWidth: !0
        }),
        e(i, n),
        window.addEventListener("message", s, !1), ["resize", "orientationchange"].forEach(function (e) { window.addEventListener(e, a.bind(window, r), !1) })
    }
    var u = function (e, t) { e.style.height = t }; return c
});