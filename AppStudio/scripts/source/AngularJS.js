var swfobject = function () {
    function b() {
        if (!Q) {
            try {
                var b = G.getElementsByTagName("body")[0].appendChild(G.createElement("span"));
                b.parentNode.removeChild(b)
            } catch (c) {
                return
            }
            Q = !0;
            for (var b = P.length, d = 0; d < b; d++) P[d]()
        }
    }

    function c(b) {
        Q ? b() : P[P.length] = b
    }

    function d(b) {
        if (typeof C.addEventListener != u) C.addEventListener("load", b, !1);
        else if (typeof G.addEventListener != u) G.addEventListener("load", b, !1);
        else if (typeof C.attachEvent != u) p(C, "onload", b);
        else if ("function" == typeof C.onload) {
            var c = C.onload;
            C.onload =
                function () {
                    c();
                    b()
                }
        } else C.onload = b
    }

    function e() {
        var b = G.getElementsByTagName("body")[0],
            c = G.createElement(w);
        c.setAttribute("type", z);
        var d = b.appendChild(c);
        if (d) {
            var e = 0;
            (function () {
                if (typeof d.GetVariable != u) {
                    var g = d.GetVariable("$version");
                    g && (g = g.split(" ")[1].split(","), M.pv = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)])
                } else if (10 > e) {
                    e++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                b.removeChild(c);
                d = null;
                f()
            })()
        } else f()
    }

    function f() {
        var b = T.length;
        if (0 < b)
            for (var c = 0; c < b; c++) {
                var d = T[c].id,
                    e = T[c].callbackFn,
                    f = {
                        success: !1,
                        id: d
                    };
                if (0 < M.pv[0]) {
                    var l = q(d);
                    if (l)
                        if (s(T[c].swfVersion) && !(M.wk && 312 > M.wk)) o(d, !0), e && (f.success = !0, f.ref = g(d), e(f));
                        else if (T[c].expressInstall && h()) {
                            f = {};
                            f.data = T[c].expressInstall;
                            f.width = l.getAttribute("width") || "0";
                            f.height = l.getAttribute("height") || "0";
                            l.getAttribute("class") && (f.styleclass = l.getAttribute("class"));
                            l.getAttribute("align") && (f.align = l.getAttribute("align"));
                            for (var m = {}, l = l.getElementsByTagName("param"), n = l.length, t = 0; t < n; t++) "movie" != l[t].getAttribute("name").toLowerCase() &&
                                (m[l[t].getAttribute("name")] = l[t].getAttribute("value"));
                            j(f, m, d, e)
                        } else k(l), e && e(f)
                } else if (o(d, !0), e) {
                    if ((d = g(d)) && typeof d.SetVariable != u) f.success = !0, f.ref = d;
                    e(f)
                }
            }
    }

    function g(b) {
        var c = null;
        if ((b = q(b)) && "OBJECT" == b.nodeName) typeof b.SetVariable != u ? c = b : (b = b.getElementsByTagName(w)[0]) && (c = b);
        return c
    }

    function h() {
        return !B && s("6.0.65") && (M.win || M.mac) && !(M.wk && 312 > M.wk)
    }

    function j(b, c, d, e) {
        B = !0;
        N = e || null;
        U = {
            success: !1,
            id: d
        };
        var f = q(d);
        if (f) {
            "OBJECT" == f.nodeName ? (I = l(f), J = null) : (I = f, J = d);
            b.id =
                A;
            if (typeof b.width == u || !/%$/.test(b.width) && 310 > parseInt(b.width, 10)) b.width = "310";
            if (typeof b.height == u || !/%$/.test(b.height) && 137 > parseInt(b.height, 10)) b.height = "137";
            G.title = G.title.slice(0, 47) + " - Flash Player Installation";
            e = M.ie && M.win ? "ActiveX" : "PlugIn";
            e = "MMredirectURL=" + C.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + e + "&MMdoctitle=" + G.title;
            c.flashvars = typeof c.flashvars != u ? c.flashvars + ("&" + e) : e;
            M.ie && (M.win && 4 != f.readyState) && (e = G.createElement("div"), d += "SWFObjectNew", e.setAttribute("id",
                d), f.parentNode.insertBefore(e, f), f.style.display = "none", function () {
                    f.readyState == 4 ? f.parentNode.removeChild(f) : setTimeout(arguments.callee, 10)
                }());
            m(b, c, d)
        }
    }

    function k(b) {
        if (M.ie && M.win && 4 != b.readyState) {
            var c = G.createElement("div");
            b.parentNode.insertBefore(c, b);
            c.parentNode.replaceChild(l(b), c);
            b.style.display = "none";
            (function () {
                4 == b.readyState ? b.parentNode.removeChild(b) : setTimeout(arguments.callee, 10)
            })()
        } else b.parentNode.replaceChild(l(b), b)
    }

    function l(b) {
        var c = G.createElement("div");
        if (M.win &&
            M.ie) c.innerHTML = b.innerHTML;
        else if (b = b.getElementsByTagName(w)[0])
            if (b = b.childNodes)
                for (var d = b.length, e = 0; e < d; e++) !(1 == b[e].nodeType && "PARAM" == b[e].nodeName) && 8 != b[e].nodeType && c.appendChild(b[e].cloneNode(!0));
        return c
    }

    function m(b, c, d) {
        var e, f = q(d);
        if (M.wk && 312 > M.wk) return e;
        if (f)
            if (typeof b.id == u && (b.id = d), M.ie && M.win) {
                var g = "",
                    h;
                for (h in b) b[h] != Object.prototype[h] && ("data" == h.toLowerCase() ? c.movie = b[h] : "styleclass" == h.toLowerCase() ? g += ' class="' + b[h] + '"' : "classid" != h.toLowerCase() && (g += " " +
                    h + '="' + b[h] + '"'));
                h = "";
                for (var j in c) c[j] != Object.prototype[j] && (h += '<param name="' + j + '" value="' + c[j] + '" />');
                f.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + g + ">" + h + "</object>";
                D[D.length] = b.id;
                e = q(b.id)
            } else {
                j = G.createElement(w);
                j.setAttribute("type", z);
                for (var k in b) b[k] != Object.prototype[k] && ("styleclass" == k.toLowerCase() ? j.setAttribute("class", b[k]) : "classid" != k.toLowerCase() && j.setAttribute(k, b[k]));
                for (g in c) c[g] != Object.prototype[g] && "movie" != g.toLowerCase() &&
                    (b = j, h = g, k = c[g], d = G.createElement("param"), d.setAttribute("name", h), d.setAttribute("value", k), b.appendChild(d));
                f.parentNode.replaceChild(j, f);
                e = j
            }
        return e
    }

    function n(b) {
        var c = q(b);
        c && "OBJECT" == c.nodeName && (M.ie && M.win ? (c.style.display = "none", function () {
            if (4 == c.readyState) {
                var d = q(b);
                if (d) {
                    for (var e in d) "function" == typeof d[e] && (d[e] = null);
                    d.parentNode.removeChild(d)
                }
            } else setTimeout(arguments.callee, 10)
        }()) : c.parentNode.removeChild(c))
    }

    function q(b) {
        var c = null;
        try {
            c = G.getElementById(b)
        } catch (d) { }
        return c
    }

    function p(b, c, d) {
        b.attachEvent(c, d);
        F[F.length] = [b, c, d]
    }

    function s(b) {
        var c = M.pv,
            b = b.split(".");
        b[0] = parseInt(b[0], 10);
        b[1] = parseInt(b[1], 10) || 0;
        b[2] = parseInt(b[2], 10) || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? !0 : !1
    }

    function r(b, c, d, e) {
        if (!M.ie || !M.mac) {
            var f = G.getElementsByTagName("head")[0];
            if (f) {
                d = d && "string" == typeof d ? d : "screen";
                e && (Z = E = null);
                if (!E || Z != d) e = G.createElement("style"), e.setAttribute("type", "text/css"), e.setAttribute("media", d), E = f.appendChild(e),
                    M.ie && (M.win && typeof G.styleSheets != u && 0 < G.styleSheets.length) && (E = G.styleSheets[G.styleSheets.length - 1]), Z = d;
                M.ie && M.win ? E && typeof E.addRule == w && E.addRule(b, c) : E && typeof G.createTextNode != u && E.appendChild(G.createTextNode(b + " {" + c + "}"))
            }
        }
    }

    function o(b, c) {
        if (O) {
            var d = c ? "visible" : "hidden";
            Q && q(b) ? q(b).style.visibility = d : r("#" + b, "visibility:" + d)
        }
    }

    function t(b) {
        return null != /[\\\"<>\.;]/.exec(b) && typeof encodeURIComponent != u ? encodeURIComponent(b) : b
    }
    var u = "undefined",
        w = "object",
        z = "application/x-shockwave-flash",
        A = "SWFObjectExprInst",
        C = window,
        G = document,
        H = navigator,
        K = !1,
        P = [function () {
            K ? e() : f()
        }],
        T = [],
        D = [],
        F = [],
        I, J, N, U, Q = !1,
        B = !1,
        E, Z, O = !0,
        M = function () {
            var b = typeof G.getElementById != u && typeof G.getElementsByTagName != u && typeof G.createElement != u,
                c = H.userAgent.toLowerCase(),
                d = H.platform.toLowerCase(),
                e = d ? /win/.test(d) : /win/.test(c),
                d = d ? /mac/.test(d) : /mac/.test(c),
                c = /webkit/.test(c) ? parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                f = !+"\v1",
                g = [0, 0, 0],
                h = null;
            if (typeof H.plugins != u && typeof H.plugins["Shockwave Flash"] ==
                w) {
                if ((h = H.plugins["Shockwave Flash"].description) && !(typeof H.mimeTypes != u && H.mimeTypes[z] && !H.mimeTypes[z].enabledPlugin)) K = !0, f = !1, h = h.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), g[0] = parseInt(h.replace(/^(.*)\..*$/, "$1"), 10), g[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, "$1"), 10), g[2] = /[a-zA-Z]/.test(h) ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            } else if (typeof C.ActiveXObject != u) try {
                var j = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (j && (h = j.GetVariable("$version"))) f = !0, h = h.split(" ")[1].split(","),
                    g = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)]
            } catch (k) { }
            return {
                w3: b,
                pv: g,
                wk: c,
                ie: f,
                win: e,
                mac: d
            }
        }();
    (function () {
        M.w3 && ((typeof G.readyState != u && "complete" == G.readyState || typeof G.readyState == u && (G.getElementsByTagName("body")[0] || G.body)) && b(), Q || (typeof G.addEventListener != u && G.addEventListener("DOMContentLoaded", b, !1), M.ie && M.win && (G.attachEvent("onreadystatechange", function () {
            "complete" == G.readyState && (G.detachEvent("onreadystatechange", arguments.callee), b())
        }), C == top && function () {
            if (!Q) {
                try {
                    G.documentElement.doScroll("left")
                } catch (c) {
                    setTimeout(arguments.callee,
                        0);
                    return
                }
                b()
            }
        }()), M.wk && function () {
            Q || (/loaded|complete/.test(G.readyState) ? b() : setTimeout(arguments.callee, 0))
        }(), d(b)))
    })();
    (function () {
        M.ie && M.win && window.attachEvent("onunload", function () {
            for (var b = F.length, c = 0; c < b; c++) F[c][0].detachEvent(F[c][1], F[c][2]);
            b = D.length;
            for (c = 0; c < b; c++) n(D[c]);
            for (var d in M) M[d] = null;
            M = null;
            for (var e in swfobject) swfobject[e] = null;
            swfobject = null
        })
    })();
    return {
        registerObject: function (b, c, d, e) {
            if (M.w3 && b && c) {
                var f = {};
                f.id = b;
                f.swfVersion = c;
                f.expressInstall = d;
                f.callbackFn =
                    e;
                T[T.length] = f;
                o(b, !1)
            } else e && e({
                success: !1,
                id: b
            })
        },
        getObjectById: function (b) {
            if (M.w3) return g(b)
        },
        embedSWF: function (b, d, e, f, g, k, l, n, t, p) {
            var q = {
                success: !1,
                id: d
            };
            M.w3 && !(M.wk && 312 > M.wk) && b && d && e && f && g ? (o(d, !1), c(function () {
                e += "";
                f += "";
                var c = {};
                if (t && typeof t === w)
                    for (var r in t) c[r] = t[r];
                c.data = b;
                c.width = e;
                c.height = f;
                r = {};
                if (n && typeof n === w)
                    for (var A in n) r[A] = n[A];
                if (l && typeof l === w)
                    for (var z in l) r.flashvars = typeof r.flashvars != u ? r.flashvars + ("&" + z + "=" + l[z]) : z + "=" + l[z];
                if (s(g)) A = m(c, r, d), c.id ==
                    d && o(d, !0), q.success = !0, q.ref = A;
                else {
                    if (k && h()) {
                        c.data = k;
                        j(c, r, d, p);
                        return
                    }
                    o(d, !0)
                }
                p && p(q)
            })) : p && p(q)
        },
        switchOffAutoHideShow: function () {
            O = !1
        },
        ua: M,
        getFlashPlayerVersion: function () {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: s,
        createSWF: function (b, c, d) {
            if (M.w3) return m(b, c, d)
        },
        showExpressInstall: function (b, c, d, e) {
            M.w3 && h() && j(b, c, d, e)
        },
        removeSWF: function (b) {
            M.w3 && n(b)
        },
        createCSS: function (b, c, d, e) {
            M.w3 && r(b, c, d, e)
        },
        addDomLoadEvent: c,
        addLoadEvent: d,
        getQueryParamValue: function (b) {
            var c =
                G.location.search || G.location.hash;
            if (c) {
                /\?/.test(c) && (c = c.split("?")[1]);
                if (null == b) return t(c);
                for (var c = c.split("&"), d = 0; d < c.length; d++)
                    if (c[d].substring(0, c[d].indexOf("=")) == b) return t(c[d].substring(c[d].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (B) {
                var b = q(A);
                b && I && (b.parentNode.replaceChild(I, b), J && (o(J, !0), M.ie && M.win && (I.style.display = "block")), N && N(U));
                B = !1
            }
        }
    }
}(),
    Wami = window.Wami || {};
Wami.clear = function () {
    Wami._callbacks = {};
    Wami.startRecording = null
};
Wami.createID = function () {
    return "wid" + "10000000000".replace(/[018]/g, function (b) {
        return (b ^ 16 * Math.random() >> b / 4).toString(16)
    })
};
Wami.nameCallback = function (b, c) {
    Wami._callbacks = Wami._callbacks || {};
    var d = Wami.createID();
    Wami._callbacks[d] = function () {
        c && (Wami._callbacks[d] = null);
        b.apply(null, arguments)
    };
    return "Wami._callbacks['" + d + "']"
};
Wami.setup = function (b) {
    function c() {
        return -1 == navigator.platform.indexOf("Linux")
    }

    function d(b) {
        j = {
            swfUrl: "Wami.swf",
            onReady: function () {
                Wami.hide()
            },
            onSecurity: e,
            onError: function (b) {
                alert(b)
            }
        };
        "undefined" == typeof b && alert("Need at least an element ID to place the Flash object.");
        j.id = "string" == typeof b ? b : b.id;
        b.swfUrl && (j.swfUrl = b.swfUrl);
        b.onReady && (j.onReady = b.onReady);
        b.onLoaded && (j.onLoaded = b.onLoaded);
        b.onSecurity && (j.onSecurity = b.onSecurity);
        b.onError && (j.onError = b.onError);
        b = document.createElement("div");
        j.cid = Wami.createID();
        b.setAttribute("id", j.cid);
        var c = document.createElement("div"),
            d = Wami.createID();
        c.setAttribute("id", d);
        b.appendChild(c);
        document.getElementById(j.id).appendChild(b);
        j.id = d
    }

    function e() {
        if (Wami.getSettings().microphone.granted) j.onReady();
        else Wami.showSecurity("privacy", "Wami.show", Wami.nameCallback(j.onSecurity), Wami.nameCallback(j.onError))
    }

    function f(b, d) {
        var e = {
            visible: !1,
            loadedCallback: d
        },
            f = {
                allowScriptAccess: "always"
            };
        c() && (f.wmode = "transparent");
        "undefined" !== typeof console &&
            (e.console = !0);
        document.getElementById(b).innerHTML = "WAMI requires Flash 10.0.0 or greater<br />https://get.adobe.com/flashplayer/";
        Wami.swfobject.embedSWF(j.swfUrl, b, 214, 137, "10.0.0", null, e, f);
        Wami.swfobject.createCSS("#" + b, "outline:none")
    }

    function g(b) {
        var c = Wami.createID(),
            d = document.createElement("div");
        d.style.top = "-999px";
        d.style.left = "-999px";
        d.setAttribute("id", c);
        document.getElementsByTagName("body").item(0).appendChild(d);
        d = Wami.nameCallback(function () {
            var d = document.getElementById(c);
            Wami._remembered =
                d.getSettings().microphone.granted;
            Wami.swfobject.removeSWF(c);
            eval(b + "()")
        });
        f(c, d)
    }

    function h() {
        function b(c) {
            Wami[c] = function () {
                return d[c].apply(d, arguments)
            }
        }
        var d = document.getElementById(j.id);
        b("startPlaying");
        b("stopPlaying");
        b("startRecording");
        b("stopRecording");
        b("startListening");
        b("stopListening");
        b("getRecordingLevel");
        b("getPlayingLevel");
        b("setSettings");
        Wami.getSettings = function () {
            var b = d.getSettings();
            b.microphone.remembered = Wami._remembered;
            return b
        };
        Wami.showSecurity = function (b,
            c, e, f) {
            var h = document.getElementById(j.cid),
                k = Wami.nameCallback(function () {
                    g(e);
                    h.style.cssText = "position: absolute;"
                });
            h.style.cssText = "position: absolute; z-index: 99999";
            d.showSecurity(b, c, k, f)
        };
        Wami.show = function () {
            c() || (d.style.visibility = "visible")
        };
        Wami.hide = function () {
            c() || (d.style.visibility = "hidden")
        };
        Wami._remembered = d.getSettings().microphone.granted;
        if (j.onLoaded) j.onLoaded();
        j.noSecurityCheck || e()
    }
    if (Wami.startRecording) {
        if (b.onReady) b.onReady()
    } else {
        Wami.swfobject = Wami.swfobject || swfobject;
        Wami.swfobject || alert("Unable to find swfobject to help embed the SWF.");
        var j;
        d(b);
        f(j.id, Wami.nameCallback(h))
    }
};
(function (b) {
    var c = function (b, c) {
        var f = c || {},
            g = f.bufferLen || 4096;
        this.context = b.context;
        this.node = this.context.createScriptProcessor(g, 2, 2);
        var h = new Worker(f.workerPath || "/ext/recorder/recorderWorker.js");
        h.postMessage({
            command: "init",
            config: {
                sampleRate: this.context.sampleRate
            }
        });
        var j = !1,
            k;
        this.node.onaudioprocess = function (b) {
            var c = b.inputBuffer.getChannelData(0),
                b = b.inputBuffer.getChannelData(1);
            f.levelCallback && f.levelCallback(c, b);
            j && h.postMessage({
                command: "record",
                buffer: [c, b]
            })
        };
        this.configure =
            function (b) {
                for (var c in b) b.hasOwnProperty(c) && (f[c] = b[c])
            };
        this.record = function () {
            j = !0
        };
        this.stop = function () {
            j = !1
        };
        this.isRecording = function () {
            return j
        };
        this.clear = function () {
            h.postMessage({
                command: "clear"
            })
        };
        this.getBuffer = function (b) {
            k = b || f.callback;
            h.postMessage({
                command: "getBuffer"
            })
        };
        this.exportWAV = function (b, c) {
            k = b || f.callback;
            c = c || f.type || "audio/wav";
            if (!k) throw Error("Callback not set");
            h.postMessage({
                command: "exportWAV",
                type: c
            })
        };
        h.onmessage = function (b) {
            k(b.data)
        };
        b.connect(this.node);
        this.node.connect(this.context.destination)
    };
    c.forceDownload = function (c, e) {
        var f = (b.URL || b.webkitURL).createObjectURL(c),
            g = b.document.createElement("a");
        g.href = f;
        g.download = e || "output.wav";
        f = document.createEvent("Event");
        f.initEvent("click", !0, !0);
        g.dispatchEvent(f)
    };
    b.Recorder = c
})(window);
jQuery && function (b) {
    function c(c, d) {
        var e = b('<span class="minicolors" />'),
            f = b.minicolors.defaultSettings;
        c.data("minicolors-initialized") || (d = b.extend(!0, {}, f, d), e.addClass("minicolors-theme-" + d.theme).addClass("minicolors-swatch-position-" + d.swatchPosition).toggleClass("minicolors-swatch-left", "left" === d.swatchPosition).toggleClass("minicolors-with-opacity", d.opacity), void 0 !== d.position && b.each(d.position.split(" "), function () {
            e.addClass("minicolors-position-" + this)
        }), c.addClass("minicolors-input").data("minicolors-initialized", !0).data("minicolors-settings", d).prop("size", 7).prop("maxlength", 7).wrap(e).after('<span class="minicolors-panel minicolors-slider-' + d.control + '"><span class="minicolors-slider"><span class="minicolors-picker"></span></span><span class="minicolors-opacity-slider"><span class="minicolors-picker"></span></span><span class="minicolors-grid"><span class="minicolors-grid-inner"></span><span class="minicolors-picker"><span></span></span></span></span>'), c.parent().find(".minicolors-panel").on("selectstart",
            function () {
                return !1
            }).end(), "left" === d.swatchPosition ? c.before('<span class="minicolors-swatch"><span></span></span>') : c.after('<span class="minicolors-swatch"><span></span></span>'), d.textfield || c.addClass("minicolors-hidden"), d.inline && c.parent().addClass("minicolors-inline"), j(c, !1, !0))
    }

    function d(b) {
        var c = b.parent();
        b.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeProp("maxlength").removeClass("minicolors-input");
        c.before(b).remove()
    }

    function e(b) {
        var c =
            b.parent(),
            d = c.find(".minicolors-panel"),
            e = b.data("minicolors-settings");
        b.data("minicolors-initialized") && (!b.prop("disabled") && !c.hasClass("minicolors-inline") && !c.hasClass("minicolors-focus")) && (f(), c.addClass("minicolors-focus"), d.stop(!0, !0).fadeIn(e.showSpeed, function () {
            e.show && e.show.call(b)
        }))
    }

    function f() {
        b(".minicolors-input").each(function () {
            var c = b(this),
                d = c.data("minicolors-settings"),
                e = c.parent();
            d.inline || e.find(".minicolors-panel").fadeOut(d.hideSpeed, function () {
                e.hasClass("minicolors-focus") &&
                    d.hide && d.hide.call(c);
                e.removeClass("minicolors-focus")
            })
        })
    }

    function g(b, c, d) {
        var e = b.parents(".minicolors").find(".minicolors-input"),
            f = e.data("minicolors-settings"),
            g = b.find("[class$=-picker]"),
            j = b.offset().left,
            k = b.offset().top,
            l = Math.round(c.pageX - j),
            o = Math.round(c.pageY - k),
            d = d ? f.animationSpeed : 0;
        c.originalEvent.changedTouches && (l = c.originalEvent.changedTouches[0].pageX - j, o = c.originalEvent.changedTouches[0].pageY - k);
        0 > l && (l = 0);
        0 > o && (o = 0);
        l > b.width() && (l = b.width());
        o > b.height() && (o = b.height());
        b.parent().is(".minicolors-slider-wheel") && g.parent().is(".minicolors-grid") && (j = 75 - l, k = 75 - o, c = Math.sqrt(j * j + k * k), j = Math.atan2(k, j), 0 > j && (j += 2 * Math.PI), 75 < c && (c = 75, l = 75 - 75 * Math.cos(j), o = 75 - 75 * Math.sin(j)), l = Math.round(l), o = Math.round(o));
        b.is(".minicolors-grid") ? g.stop(!0).animate({
            top: o + "px",
            left: l + "px"
        }, d, f.animationEasing, function () {
            h(e, b)
        }) : g.stop(!0).animate({
            top: o + "px"
        }, d, f.animationEasing, function () {
            h(e, b)
        })
    }

    function h(b, c) {
        function d(b, c) {
            var e, f;
            if (!b.length || !c) return null;
            e = b.offset().left;
            f = b.offset().top;
            return {
                x: e - c.offset().left + b.outerWidth() / 2,
                y: f - c.offset().top + b.outerHeight() / 2
            }
        }
        var e, f, g, h, j, l;
        h = b.val();
        var o = b.attr("data-opacity");
        j = b.parent();
        var m = b.data("minicolors-settings");
        j.find(".minicolors-panel");
        var s = j.find(".minicolors-swatch");
        l = j.find(".minicolors-grid");
        var q = j.find(".minicolors-slider"),
            I = j.find(".minicolors-opacity-slider");
        g = l.find("[class$=-picker]");
        var J = q.find("[class$=-picker]"),
            N = I.find("[class$=-picker]");
        g = d(g, l);
        J = d(J, q);
        N = d(N, I);
        if (c.is(".minicolors-grid, .minicolors-slider")) {
            switch (m.control) {
                case "wheel":
                    h =
                        l.width() / 2 - g.x;
                    j = l.height() / 2 - g.y;
                    l = Math.sqrt(h * h + j * j);
                    h = Math.atan2(j, h);
                    0 > h && (h += 2 * Math.PI);
                    75 < l && (l = 75, g.x = 69 - 75 * Math.cos(h), g.y = 69 - 75 * Math.sin(h));
                    f = p(l / 0.75, 0, 100);
                    e = p(180 * h / Math.PI, 0, 360);
                    g = p(100 - Math.floor(J.y * (100 / q.height())), 0, 100);
                    h = r({
                        h: e,
                        s: f,
                        b: g
                    });
                    q.css("backgroundColor", r({
                        h: e,
                        s: f,
                        b: 100
                    }));
                    break;
                case "saturation":
                    e = p(parseInt(g.x * (360 / l.width())), 0, 360);
                    f = p(100 - Math.floor(J.y * (100 / q.height())), 0, 100);
                    g = p(100 - Math.floor(g.y * (100 / l.height())), 0, 100);
                    h = r({
                        h: e,
                        s: f,
                        b: g
                    });
                    q.css("backgroundColor",
                        r({
                            h: e,
                            s: 100,
                            b: g
                        }));
                    j.find(".minicolors-grid-inner").css("opacity", f / 100);
                    break;
                case "brightness":
                    e = p(parseInt(g.x * (360 / l.width())), 0, 360);
                    f = p(100 - Math.floor(g.y * (100 / l.height())), 0, 100);
                    g = p(100 - Math.floor(J.y * (100 / q.height())), 0, 100);
                    h = r({
                        h: e,
                        s: f,
                        b: g
                    });
                    q.css("backgroundColor", r({
                        h: e,
                        s: f,
                        b: 100
                    }));
                    j.find(".minicolors-grid-inner").css("opacity", 1 - g / 100);
                    break;
                default:
                    e = p(360 - parseInt(J.y * (360 / q.height())), 0, 360), f = p(Math.floor(g.x * (100 / l.width())), 0, 100), g = p(100 - Math.floor(g.y * (100 / l.height())), 0, 100),
                        h = r({
                            h: e,
                            s: f,
                            b: g
                        }), l.css("backgroundColor", r({
                            h: e,
                            s: 100,
                            b: 100
                        }))
            }
            b.val(n(h, m.letterCase))
        }
        c.is(".minicolors-opacity-slider") && (o = m.opacity ? parseFloat(1 - N.y / I.height()).toFixed(2) : 1, m.opacity && b.attr("data-opacity", o));
        s.find("SPAN").css({
            backgroundColor: h,
            opacity: o
        });
        k(b, h, o)
    }

    function j(b, c, d) {
        var e, f, g, h, j;
        h = b.parent();
        g = b.data("minicolors-settings");
        j = h.find(".minicolors-swatch");
        var l = h.find(".minicolors-grid"),
            m = h.find(".minicolors-slider"),
            s = h.find(".minicolors-opacity-slider"),
            D = l.find("[class$=-picker]"),
            F = m.find("[class$=-picker]"),
            I = s.find("[class$=-picker]");
        (e = n(q(b.val(), !0), g.letterCase)) || (e = n(q(g.defaultValue, !0)));
        var J = o(e),
            N = 0,
            U = 0,
            Q = 0,
            U = Math.min(J.r, J.g, J.b),
            Q = Math.max(J.r, J.g, J.b),
            N = Q - U,
            U = 0 !== Q ? 255 * N / Q : 0,
            N = 0 !== U ? J.r === Q ? (J.g - J.b) / N : J.g === Q ? 2 + (J.b - J.r) / N : 4 + (J.r - J.g) / N : -1,
            N = 60 * N;
        0 > N && (N += 360);
        U *= 100 / 255;
        Q *= 100 / 255;
        0 === U && (N = 360);
        c || b.val(e);
        g.opacity && (f = "" === b.attr("data-opacity") ? 1 : p(parseFloat(b.attr("data-opacity")).toFixed(2), 0, 1), isNaN(f) && (f = 1), b.attr("data-opacity", f), j.find("SPAN").css("opacity",
            f), c = p(s.height() - s.height() * f, 0, s.height()), I.css("top", c + "px"));
        j.find("SPAN").css("backgroundColor", e);
        switch (g.control) {
            case "wheel":
                h = p(Math.ceil(0.75 * U), 0, l.height() / 2);
                j = N * Math.PI / 180;
                g = p(75 - Math.cos(j) * h, 0, l.width());
                c = p(75 - Math.sin(j) * h, 0, l.height());
                D.css({
                    top: c + "px",
                    left: g + "px"
                });
                c = 150 - Q / (100 / l.height());
                "" === e && (c = 0);
                F.css("top", c + "px");
                m.css("backgroundColor", r({
                    h: N,
                    s: U,
                    b: 100
                }));
                break;
            case "saturation":
                g = p(5 * N / 12, 0, 150);
                c = p(l.height() - Math.ceil(Q / (100 / l.height())), 0, l.height());
                D.css({
                    top: c +
                        "px",
                    left: g + "px"
                });
                c = p(m.height() - U * (m.height() / 100), 0, m.height());
                F.css("top", c + "px");
                m.css("backgroundColor", r({
                    h: N,
                    s: 100,
                    b: Q
                }));
                h.find(".minicolors-grid-inner").css("opacity", U / 100);
                break;
            case "brightness":
                g = p(5 * N / 12, 0, 150);
                c = p(l.height() - Math.ceil(U / (100 / l.height())), 0, l.height());
                D.css({
                    top: c + "px",
                    left: g + "px"
                });
                c = p(m.height() - Q * (m.height() / 100), 0, m.height());
                F.css("top", c + "px");
                m.css("backgroundColor", r({
                    h: N,
                    s: U,
                    b: 100
                }));
                h.find(".minicolors-grid-inner").css("opacity", 1 - Q / 100);
                break;
            default:
                g =
                    p(Math.ceil(U / (100 / l.width())), 0, l.width()), c = p(l.height() - Math.ceil(Q / (100 / l.height())), 0, l.height()), D.css({
                        top: c + "px",
                        left: g + "px"
                    }), c = p(m.height() - N / (360 / m.height()), 0, m.height()), F.css("top", c + "px"), l.css("backgroundColor", r({
                        h: N,
                        s: 100,
                        b: 100
                    }))
        }
        d || k(b, e, f)
    }

    function k(b, c, d) {
        var e = b.data("minicolors-settings");
        c + d !== b.data("minicolors-lastChange") && (b.data("minicolors-lastChange", c + d), e.change && (e.changeDelay ? (clearTimeout(b.data("minicolors-changeTimeout")), b.data("minicolors-changeTimeout", setTimeout(function () {
            e.change.call(b,
                c, d)
        }, e.changeDelay))) : e.change.call(b, c, d)))
    }

    function l(c) {
        var d = q(b(c).val(), !0),
            d = o(d),
            c = b(c).attr("data-opacity");
        if (!d) return null;
        void 0 !== c && b.extend(d, {
            a: parseFloat(c)
        });
        return d
    }

    function m(c, d) {
        var e = q(b(c).val(), !0),
            e = o(e),
            f = b(c).attr("data-opacity");
        if (!e) return null;
        void 0 === f && (f = 1);
        return d ? "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + parseFloat(f) + ")" : "rgb(" + e.r + ", " + e.g + ", " + e.b + ")"
    }

    function n(b, c) {
        return "uppercase" === c ? b.toUpperCase() : b.toLowerCase()
    }

    function q(b, c) {
        b = b.replace(/[^A-F0-9]/ig,
            "");
        if (3 !== b.length && 6 !== b.length) return "";
        3 === b.length && c && (b = b[0] + b[0] + b[1] + b[1] + b[2] + b[2]);
        return "#" + b
    }

    function p(b, c, d) {
        b < c && (b = c);
        b > d && (b = d);
        return b
    }

    function s(c) {
        var d = [c.r.toString(16), c.g.toString(16), c.b.toString(16)];
        b.each(d, function (b, c) {
            1 === c.length && (d[b] = "0" + c)
        });
        return "#" + d.join("")
    }

    function r(b) {
        var c = s,
            d, e, f;
        d = Math.round(b.h);
        var g = Math.round(255 * b.s / 100),
            b = Math.round(255 * b.b / 100);
        if (0 === g) d = e = f = b;
        else {
            var g = (255 - g) * b / 255,
                h = (b - g) * (d % 60) / 60;
            360 === d && (d = 0);
            60 > d ? (d = b, f = g, e = g + h) : 120 >
                d ? (e = b, f = g, d = b - h) : 180 > d ? (e = b, d = g, f = g + h) : 240 > d ? (f = b, d = g, e = b - h) : 300 > d ? (f = b, e = g, d = g + h) : 360 > d ? (d = b, e = g, f = b - h) : f = e = d = 0
        }
        b = {
            r: Math.round(d),
            g: Math.round(e),
            b: Math.round(f)
        };
        return c(b)
    }

    function o(b) {
        b = parseInt(-1 < b.indexOf("#") ? b.substring(1) : b, 16);
        return {
            r: b >> 16,
            g: (b & 65280) >> 8,
            b: b & 255
        }
    }
    b.minicolors = {
        defaultSettings: {
            animationSpeed: 100,
            animationEasing: "swing",
            change: null,
            changeDelay: 0,
            control: "hue",
            defaultValue: "",
            hide: null,
            hideSpeed: 100,
            inline: !1,
            letterCase: "lowercase",
            opacity: !1,
            position: "default",
            show: null,
            showSpeed: 100,
            swatchPosition: "left",
            textfield: !0,
            theme: "default"
        }
    };
    b.extend(b.fn, {
        minicolors: function (g, h) {
            switch (g) {
                case "destroy":
                    return b(this).each(function () {
                        d(b(this))
                    }), b(this);
                case "hide":
                    return f(), b(this);
                case "opacity":
                    if (void 0 === h) return b(this).attr("data-opacity");
                    b(this).each(function () {
                        var c = b(this).attr("data-opacity", h);
                        j(c)
                    });
                    return b(this);
                case "rgbObject":
                    return l(b(this), "rgbaObject" === g);
                case "rgbString":
                case "rgbaString":
                    return m(b(this), "rgbaString" === g);
                case "settings":
                    if (void 0 ===
                        h) return b(this).data("minicolors-settings");
                    b(this).each(function () {
                        var c = b(this).data("minicolors-settings") || {};
                        d(b(this));
                        b(this).minicolors(b.extend(!0, c, h))
                    });
                    return b(this);
                case "show":
                    return e(b(this).eq(0)), b(this);
                case "value":
                    if (void 0 === h) return b(this).val();
                    b(this).each(function () {
                        var c = b(this).val(h);
                        j(c)
                    });
                    return b(this);
                default:
                    return "create" !== g && (h = g), b(this).each(function () {
                        c(b(this), h)
                    }), b(this)
            }
        }
    });
    b(document).on("mousedown.minicolors touchstart.minicolors", function (c) {
        b(c.target).parents().add(c.target).hasClass("minicolors") ||
            f()
    }).on("mousedown.minicolors touchstart.minicolors", ".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider", function (c) {
        var d = b(this);
        c.preventDefault();
        b(document).data("minicolors-target", d);
        g(d, c, !0)
    }).on("mousemove.minicolors touchmove.minicolors", function (c) {
        var d = b(document).data("minicolors-target");
        d && g(d, c)
    }).on("mouseup.minicolors touchend.minicolors", function () {
        b(this).removeData("minicolors-target")
    }).on("mousedown.minicolors touchstart.minicolors", ".minicolors-swatch", function () {
        var c =
            b(this).parent().find(".minicolors-input");
        c.parent().hasClass("minicolors-focus") ? f(c) : e(c)
    }).on("focus.minicolors", ".minicolors-input", function () {
        var c = b(this);
        c.data("minicolors-initialized") && e(c)
    }).on("blur.minicolors", ".minicolors-input", function () {
        var c = b(this),
            d = c.data("minicolors-settings");
        c.data("minicolors-initialized") && (c.val(q(c.val(), !0)), "" === c.val() && c.val(q(d.defaultValue, !0)), c.val(n(c.val(), d.letterCase)))
    }).on("keydown.minicolors", ".minicolors-input", function (c) {
        var d = b(this);
        if (d.data("minicolors-initialized")) switch (c.keyCode) {
            case 9:
                f();
                break;
            case 27:
                f(), d.blur()
        }
    }).on("keyup.minicolors", ".minicolors-input", function () {
        var c = b(this);
        c.data("minicolors-initialized") && j(c, !0)
    }).on("paste.minicolors", ".minicolors-input", function () {
        var c = b(this);
        c.data("minicolors-initialized") && setTimeout(function () {
            j(c, !0)
        }, 1)
    })
}(jQuery);
(function (b) {
    function c(b) {
        return function () {
            var c = arguments[0],
                d;
            d = "[" + (b ? b + ":" : "") + c + "] http://errors.angularjs.org/1.5.5/" + (b ? b + "/" : "") + c;
            for (c = 1; c < arguments.length; c++) {
                d = d + (1 == c ? "?" : "&") + "p" + (c - 1) + "=";
                var e = encodeURIComponent,
                    f;
                f = arguments[c];
                f = "function" == typeof f ? f.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof f ? "undefined" : "string" != typeof f ? JSON.stringify(f) : f;
                d += e(f)
            }
            return Error(d)
        }
    }

    function d(b) {
        if (null == b || G(b)) return !1;
        if (ia(b) || u(b) || ca && b instanceof ca) return !0;
        var c = "length" in
            Object(b) && b.length;
        return w(c) && (0 <= c && (c - 1 in b || b instanceof Array) || "function" == typeof b.item)
    }

    function e(b, c, f) {
        var g, h;
        if (b)
            if (A(b))
                for (g in b) "prototype" == g || "length" == g || "name" == g || b.hasOwnProperty && !b.hasOwnProperty(g) || c.call(f, b[g], g, b);
            else if (ia(b) || d(b)) {
                var j = "object" !== typeof b;
                g = 0;
                for (h = b.length; g < h; g++) (j || g in b) && c.call(f, b[g], g, b)
            } else if (b.forEach && b.forEach !== e) b.forEach(c, f, b);
            else if (t(b))
                for (g in b) c.call(f, b[g], g, b);
            else if ("function" === typeof b.hasOwnProperty)
                for (g in b) b.hasOwnProperty(g) &&
                    c.call(f, b[g], g, b);
            else
                for (g in b) Gb.call(b, g) && c.call(f, b[g], g, b);
        return b
    }

    function f(b, c, d) {
        for (var e = Object.keys(b).sort(), f = 0; f < e.length; f++) c.call(d, b[e[f]], e[f]);
        return e
    }

    function g(b) {
        return function (c, d) {
            b(d, c)
        }
    }

    function h() {
        return ++Pc
    }

    function j(b, c, d) {
        for (var e = b.$$hashKey, f = 0, g = c.length; f < g; ++f) {
            var h = c[f];
            if (o(h) || A(h))
                for (var k = Object.keys(h), l = 0, m = k.length; l < m; l++) {
                    var n = k[l],
                        s = h[n];
                    d && o(s) ? z(s) ? b[n] = new Date(s.valueOf()) : C(s) ? b[n] = RegExp(s) : s.nodeName ? b[n] = s.cloneNode(!0) : P(s) ? b[n] =
                        s.clone() : (o(b[n]) || (b[n] = ia(s) ? [] : {}), j(b[n], [s], !0)) : b[n] = s
                }
        }
        e ? b.$$hashKey = e : delete b.$$hashKey;
        return b
    }

    function k(b) {
        return j(b, lb.call(arguments, 1), !1)
    }

    function l(b) {
        return j(b, lb.call(arguments, 1), !0)
    }

    function m(b) {
        return parseInt(b, 10)
    }

    function n() { }

    function q(b) {
        return b
    }

    function p(b) {
        return function () {
            return b
        }
    }

    function s(b) {
        return "undefined" === typeof b
    }

    function r(b) {
        return "undefined" !== typeof b
    }

    function o(b) {
        return null !== b && "object" === typeof b
    }

    function t(b) {
        return null !== b && "object" ===
            typeof b && !Td(b)
    }

    function u(b) {
        return "string" === typeof b
    }

    function w(b) {
        return "number" === typeof b
    }

    function z(b) {
        return "[object Date]" === ab.call(b)
    }

    function A(b) {
        return "function" === typeof b
    }

    function C(b) {
        return "[object RegExp]" === ab.call(b)
    }

    function G(b) {
        return b && b.window === b
    }

    function H(b) {
        return b && b.$evalAsync && b.$watch
    }

    function K(b) {
        return "boolean" === typeof b
    }

    function P(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function T(b) {
        var c = {},
            b = b.split(","),
            d;
        for (d = 0; d < b.length; d++) c[b[d]] = !0;
        return c
    }

    function D(b) {
        return wa(b.nodeName || b[0] && b[0].nodeName)
    }

    function F(b, c) {
        var d = b.indexOf(c);
        0 <= d && b.splice(d, 1);
        return d
    }

    function I(b, c) {
        function d(b, c) {
            var e = c.$$hashKey,
                g;
            if (ia(b)) {
                g = 0;
                for (var h = b.length; g < h; g++) c.push(f(b[g]))
            } else if (t(b))
                for (g in b) c[g] = f(b[g]);
            else if (b && "function" === typeof b.hasOwnProperty)
                for (g in b) b.hasOwnProperty(g) && (c[g] = f(b[g]));
            else
                for (g in b) Gb.call(b, g) && (c[g] = f(b[g]));
            e ? c.$$hashKey = e : delete c.$$hashKey;
            return c
        }

        function f(b) {
            if (!o(b)) return b;
            var c = h.indexOf(b);
            if (-1 !== c) return j[c];
            if (G(b) || H(b)) throw dc("cpws");
            var c = !1,
                e = g(b);
            void 0 === e && (e = ia(b) ? [] : Object.create(Td(b)), c = !0);
            h.push(b);
            j.push(e);
            return c ? d(b, e) : e
        }

        function g(b) {
            switch (ab.call(b)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new b.constructor(f(b.buffer));
                case "[object ArrayBuffer]":
                    if (!b.slice) {
                        var c =
                            new ArrayBuffer(b.byteLength);
                        (new Uint8Array(c)).set(new Uint8Array(b));
                        return c
                    }
                    return b.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new b.constructor(b.valueOf());
                case "[object RegExp]":
                    return c = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), c.lastIndex = b.lastIndex, c;
                case "[object Blob]":
                    return new b.constructor([b], {
                        type: b.type
                    })
            }
            if (A(b.cloneNode)) return b.cloneNode(!0)
        }
        var h = [],
            j = [];
        if (c) {
            if (c && w(c.length) && Ke.test(ab.call(c)) ||
                "[object ArrayBuffer]" === ab.call(c)) throw dc("cpta");
            if (b === c) throw dc("cpi");
            ia(c) ? c.length = 0 : e(c, function (b, d) {
                "$$hashKey" !== d && delete c[d]
            });
            h.push(b);
            j.push(c);
            return d(b, c)
        }
        return f(b)
    }

    function J(b, c) {
        if (ia(b))
            for (var c = c || [], d = 0, e = b.length; d < e; d++) c[d] = b[d];
        else if (o(b))
            for (d in c = c || {}, b)
                if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) c[d] = b[d];
        return c || b
    }

    function N(b, c) {
        if (b === c) return !0;
        if (null === b || null === c) return !1;
        if (b !== b && c !== c) return !0;
        var d = typeof b,
            e;
        if (d == typeof c && "object" == d)
            if (ia(b)) {
                if (!ia(c)) return !1;
                if ((d = b.length) == c.length) {
                    for (e = 0; e < d; e++)
                        if (!N(b[e], c[e])) return !1;
                    return !0
                }
            } else {
                if (z(b)) return z(c) ? N(b.getTime(), c.getTime()) : !1;
                if (C(b)) return C(c) ? b.toString() == c.toString() : !1;
                if (H(b) || H(c) || G(b) || G(c) || ia(c) || z(c) || C(c)) return !1;
                d = W();
                for (e in b)
                    if ("$" !== e.charAt(0) && !A(b[e])) {
                        if (!N(b[e], c[e])) return !1;
                        d[e] = !0
                    }
                for (e in c)
                    if (!(e in d) && "$" !== e.charAt(0) && r(c[e]) && !A(c[e])) return !1;
                return !0
            }
        return !1
    }

    function U(b, c) {
        var d = 2 < arguments.length ? lb.call(arguments, 2) : [];
        return !A(c) || c instanceof RegExp ?
            c : d.length ? function () {
                return arguments.length ? c.apply(b, d.concat(lb.call(arguments, 0))) : c.apply(b, d)
            } : function () {
                return arguments.length ? c.apply(b, arguments) : c.call(b)
            }
    }

    function Q(c, d) {
        var e = d;
        "string" === typeof c && "$" === c.charAt(0) && "$" === c.charAt(1) ? e = void 0 : G(d) ? e = "$WINDOW" : d && b.document === d ? e = "$DOCUMENT" : H(d) && (e = "$SCOPE");
        return e
    }

    function B(b, c) {
        if (!s(b)) return w(c) || (c = c ? 2 : null), JSON.stringify(b, Q, c)
    }

    function E(b) {
        return u(b) ? JSON.parse(b) : b
    }

    function Z(b, c) {
        var b = b.replace(Ne, ""),
            d = Date.parse("Jan 01, 1970 00:00:00 " +
                b) / 6E4;
        return isNaN(d) ? c : d
    }

    function O(b, c, d) {
        var d = d ? -1 : 1,
            e = b.getTimezoneOffset(),
            c = Z(c, e),
            d = d * (c - e),
            b = new Date(b.getTime());
        b.setMinutes(b.getMinutes() + d);
        return b
    }

    function M(b) {
        b = ca(b).clone();
        try {
            b.empty()
        } catch (c) { }
        var d = ca("<div>").append(b).html();
        try {
            return b[0].nodeType === mc ? wa(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (b, c) {
                return "<" + wa(c)
            })
        } catch (e) {
            return wa(d)
        }
    }

    function X(b) {
        try {
            return decodeURIComponent(b)
        } catch (c) { }
    }

    function aa(b) {
        var c = {};
        e((b || "").split("&"), function (b) {
            var d,
                e, f;
            b && (e = b = b.replace(/\+/g, "%20"), d = b.indexOf("="), -1 !== d && (e = b.substring(0, d), f = b.substring(d + 1)), e = X(e), r(e) && (f = r(f) ? X(f) : !0, Gb.call(c, e) ? ia(c[e]) ? c[e].push(f) : c[e] = [c[e], f] : c[e] = f))
        });
        return c
    }

    function Y(b) {
        var c = [];
        e(b, function (b, d) {
            ia(b) ? e(b, function (b) {
                c.push(da(d, !0) + (!0 === b ? "" : "=" + da(b, !0)))
            }) : c.push(da(d, !0) + (!0 === b ? "" : "=" + da(b, !0)))
        });
        return c.length ? c.join("&") : ""
    }

    function ba(b) {
        return da(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function da(b, c) {
        return encodeURIComponent(b).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, c ? "%20" : "+")
    }

    function ra(b, c) {
        var d, e, f = lc.length;
        for (e = 0; e < f; ++e)
            if (d = lc[e] + c, u(d = b.getAttribute(d))) return d;
        return null
    }

    function x(b, c) {
        var d, f, g = {};
        e(lc, function (c) {
            c += "app";
            !d && b.hasAttribute && b.hasAttribute(c) && (d = b, f = b.getAttribute(c))
        });
        e(lc, function (c) {
            var c = c + "app",
                e;
            !d && (e = b.querySelector("[" + c.replace(":", "\\:") + "]")) && (d = e, f = e.getAttribute(c))
        });
        d && (g.strictDi = null !== ra(d, "strict-di"),
            c(d, f ? [f] : [], g))
    }

    function ja(c, d, f) {
        o(f) || (f = {});
        var f = k({
            strictDi: !1
        }, f),
            g = function () {
                c = ca(c);
                if (c.injector()) {
                    var e = c[0] === b.document ? "document" : M(c);
                    throw dc("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                d = d || [];
                d.unshift(["$provide", function (b) {
                    b.value("$rootElement", c)
                }]);
                f.debugInfoEnabled && d.push(["$compileProvider", function (b) {
                    b.debugInfoEnabled(!0)
                }]);
                d.unshift("ng");
                e = Pa(d, f.strictDi);
                e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (b, c, d, e) {
                    b.$apply(function () {
                        c.data("$injector",
                            e);
                        d(c)(b)
                    })
                }]);
                return e
            },
            h = /^NG_ENABLE_DEBUG_INFO!/,
            j = /^NG_DEFER_BOOTSTRAP!/;
        b && h.test(b.name) && (f.debugInfoEnabled = !0, b.name = b.name.replace(h, ""));
        if (b && !j.test(b.name)) return g();
        b.name = b.name.replace(j, "");
        mb.resumeBootstrap = function (b) {
            e(b, function (b) {
                d.push(b)
            });
            return g()
        };
        A(mb.resumeDeferredBootstrap) && mb.resumeDeferredBootstrap()
    }

    function ka() {
        b.name = "NG_ENABLE_DEBUG_INFO!" + b.name;
        b.location.reload()
    }

    function oa(b) {
        b = mb.element(b).injector();
        if (!b) throw dc("test");
        return b.get("$$testability")
    }

    function pa(b, c) {
        c = c || "_";
        return b.replace(Oe, function (b, d) {
            return (d ? c : "") + b.toLowerCase()
        })
    }

    function V() {
        var c;
        if (!Ud) {
            var d = Mc();
            (Pb = s(d) ? b.jQuery : d ? b[d] : void 0) && Pb.fn.on ? (ca = Pb, k(Pb.fn, {
                scope: kc.scope,
                isolateScope: kc.isolateScope,
                controller: kc.controller,
                injector: kc.injector,
                inheritedData: kc.inheritedData
            }), c = Pb.cleanData, Pb.cleanData = function (b) {
                for (var d, e = 0, f; null != (f = b[e]) ; e++) (d = Pb._data(f, "events")) && d.$destroy && Pb(f).triggerHandler("$destroy");
                c(b)
            }) : ca = ea;
            mb.element = ca;
            Ud = !0
        }
    }

    function va(b,
        c, d) {
        if (!b) throw dc("areq", c || "?", d || "required");
        return b
    }

    function ta(b, c, d) {
        d && ia(b) && (b = b[b.length - 1]);
        va(A(b), c, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function sa(b, c) {
        if ("hasOwnProperty" === b) throw dc("badname", c);
    }

    function Da(b, c, d) {
        if (!c) return b;
        for (var c = c.split("."), e, f = b, g = c.length, h = 0; h < g; h++) e = c[h], b && (b = (f = b)[e]);
        return !d && A(b) ? U(f, b) : b
    }

    function L(b) {
        for (var c = b[0], d = b[b.length - 1], e, f = 1; c !== d && (c = c.nextSibling) ; f++)
            if (e || b[f] !==
                c) e || (e = ca(lb.call(b, 0, f))), e.push(c);
        return e || b
    }

    function W() {
        return Object.create(null)
    }

    function fa(b) {
        var d = c("$injector"),
            e = c("ng"),
            b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || c;
        return b.module || (b.module = function () {
            var b = {};
            return function (c, f, g) {
                if ("hasOwnProperty" === c) throw e("badname", "module");
                f && b.hasOwnProperty(c) && (b[c] = null);
                return b[c] || (b[c] = function () {
                    function b(c, d, e, f) {
                        f || (f = h);
                        return function () {
                            f[e || "push"]([c, d, arguments]);
                            return o
                        }
                    }

                    function e(b, d) {
                        return function (e, f) {
                            f &&
                                A(f) && (f.$$moduleName = c);
                            h.push([b, d, arguments]);
                            return o
                        }
                    }
                    if (!f) throw d("nomod", c);
                    var h = [],
                        j = [],
                        k = [],
                        l = b("$injector", "invoke", "push", j),
                        o = {
                            _invokeQueue: h,
                            _configBlocks: j,
                            _runBlocks: k,
                            requires: f,
                            name: c,
                            provider: e("$provide", "provider"),
                            factory: e("$provide", "factory"),
                            service: e("$provide", "service"),
                            value: b("$provide", "value"),
                            constant: b("$provide", "constant", "unshift"),
                            decorator: e("$provide", "decorator"),
                            animation: e("$animateProvider", "register"),
                            filter: e("$filterProvider", "register"),
                            controller: e("$controllerProvider",
                                "register"),
                            directive: e("$compileProvider", "directive"),
                            component: e("$compileProvider", "component"),
                            config: l,
                            run: function (b) {
                                k.push(b);
                                return this
                            }
                        };
                    g && l(g);
                    return o
                }())
            }
        }())
    }

    function R(d) {
        k(d, {
            bootstrap: ja,
            copy: I,
            extend: k,
            merge: l,
            equals: N,
            element: ca,
            forEach: e,
            injector: Pa,
            noop: n,
            bind: U,
            toJson: B,
            fromJson: E,
            identity: q,
            isUndefined: s,
            isDefined: r,
            isString: u,
            isFunction: A,
            isObject: o,
            isNumber: w,
            isElement: P,
            isArray: ia,
            version: Pe,
            isDate: z,
            lowercase: wa,
            uppercase: Oc,
            callbacks: {
                counter: 0
            },
            getTestability: oa,
            $$minErr: c,
            $$csp: fc,
            reloadWithDebugInfo: ka
        });
        jd = fa(b);
        jd("ng", ["ngLocale"], ["$provide", function (b) {
            b.provider({
                $$sanitizeUri: pd
            });
            b.provider("$compile", ob).directive({
                a: Ye,
                input: Vd,
                textarea: Vd,
                form: Ze,
                script: $e,
                select: af,
                style: bf,
                option: cf,
                ngBind: df,
                ngBindHtml: ef,
                ngBindTemplate: ff,
                ngClass: gf,
                ngClassEven: hf,
                ngClassOdd: jf,
                ngCloak: kf,
                ngController: lf,
                ngForm: mf,
                ngHide: nf,
                ngIf: of,
                ngInclude: pf,
                ngInit: qf,
                ngNonBindable: rf,
                ngPluralize: sf,
                ngRepeat: tf,
                ngShow: uf,
                ngStyle: vf,
                ngSwitch: wf,
                ngSwitchWhen: xf,
                ngSwitchDefault: yf,
                ngOptions: zf,
                ngTransclude: Af,
                ngModel: Bf,
                ngList: Cf,
                ngChange: Df,
                pattern: Wd,
                ngPattern: Wd,
                required: Xd,
                ngRequired: Xd,
                minlength: Yd,
                ngMinlength: Yd,
                maxlength: Zd,
                ngMaxlength: Zd,
                ngValue: Ef,
                ngModelOptions: Ff
            }).directive({
                ngInclude: Gf
            }).directive(ad).directive($d);
            b.provider({
                $anchorScroll: yb,
                $animate: Fe,
                $animateCss: Ie,
                $$animateJs: De,
                $$animateQueue: Ee,
                $$AnimateRunner: He,
                $$animateAsyncRun: Ge,
                $browser: Ib,
                $cacheFactory: Ab,
                $controller: $b,
                $document: ac,
                $exceptionHandler: Nb,
                $filter: Bd,
                $$forceReflow: Hf,
                $interpolate: Vb,
                $interval: rb,
                $http: sb,
                $httpParamSerializer: bc,
                $httpParamSerializerJQLike: gc,
                $httpBackend: nc,
                $xhrFactory: hc,
                $location: Cb,
                $log: Dc,
                $parse: Xc,
                $rootScope: Xb,
                $q: Yc,
                $$q: wc,
                $sce: rd,
                $sceDelegate: qd,
                $sniffer: sd,
                $templateCache: vb,
                $templateRequest: pc,
                $$testability: qc,
                $timeout: Zc,
                $window: td,
                $$rAF: Hc,
                $$jqLite: qa,
                $$HashMap: ue,
                $$cookieReader: pe
            })
        }])
    }

    function v(b) {
        return b.replace(Re, function (b, c, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(Se, "Moz$1")
    }

    function Na(b) {
        b = b.nodeType;
        return 1 === b || !b || 9 === b
    }

    function tb(b,
        c) {
        var d, f, g = c.createDocumentFragment(),
            h = [];
        if (id.test(b)) {
            d = d || g.appendChild(c.createElement("div"));
            f = (Te.exec(b) || ["", ""])[1].toLowerCase();
            f = zb[f] || zb._default;
            d.innerHTML = f[1] + b.replace(Ue, "<$1></$2>") + f[2];
            for (f = f[0]; f--;) d = d.lastChild;
            h = h.concat(lb.call(d.childNodes, void 0));
            d = g.firstChild;
            d.textContent = ""
        } else h.push(c.createTextNode(b));
        g.textContent = "";
        g.innerHTML = "";
        e(h, function (b) {
            g.appendChild(b)
        });
        return g
    }

    function kb(b, c) {
        var d = b.parentNode;
        d && d.replaceChild(c, b);
        c.appendChild(b)
    }

    function ea(c) {
        if (c instanceof ea) return c;
        var d;
        u(c) && (c = ya(c), d = !0);
        if (!(this instanceof ea)) {
            if (d && "<" != c.charAt(0)) throw hd("nosel");
            return new ea(c)
        }
        if (d) {
            d = b.document;
            var e, c = (e = Ae.exec(c)) ? [d.createElement(e[1])] : (e = tb(c, d)) ? e.childNodes : []
        }
        Ta(this, c)
    }

    function ma(b) {
        return b.cloneNode(!0)
    }

    function Ca(b, c) {
        c || Va(b);
        if (b.querySelectorAll)
            for (var d = b.querySelectorAll("*"), e = 0, f = d.length; e < f; e++) Va(d[e])
    }

    function ub(b, c, d, f) {
        if (r(f)) throw hd("offargs");
        var g = (f = nb(b)) && f.events,
            h = f && f.handle;
        if (h)
            if (c) {
                var j =
                    function (c) {
                        var e = g[c];
                        r(d) && F(e || [], d);
                        r(d) && e && 0 < e.length || (b.removeEventListener(c, h, !1), delete g[c])
                    };
                e(c.split(" "), function (b) {
                    j(b);
                    Qc[b] && j(Qc[b])
                })
            } else
                for (c in g) "$destroy" !== c && b.removeEventListener(c, h, !1), delete g[c]
    }

    function Va(b, c) {
        var d = b.ng339,
            e = d && yc[d];
        e && (c ? delete e.data[c] : (e.handle && (e.events.$destroy && e.handle({}, "$destroy"), ub(b)), delete yc[d], b.ng339 = void 0))
    }

    function nb(b, c) {
        var d = b.ng339,
            d = d && yc[d];
        c && !d && (b.ng339 = d = ++Qe, d = yc[d] = {
            events: {},
            data: {},
            handle: void 0
        });
        return d
    }

    function xb(b, c, d) {
        if (Na(b)) {
            var e = r(d),
                f = !e && c && !o(c),
                g = !c,
                b = (b = nb(b, !f)) && b.data;
            if (e) b[c] = d;
            else {
                if (g) return b;
                if (f) return b && b[c];
                k(b, c)
            }
        }
    }

    function Fa(b, c) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + c + " ") : !1
    }

    function Sa(b, c) {
        c && b.setAttribute && e(c.split(" "), function (c) {
            b.setAttribute("class", ya((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ya(c) + " ", " ")))
        })
    }

    function bb(b, c) {
        if (c && b.setAttribute) {
            var d = (" " +
                (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            e(c.split(" "), function (b) {
                b = ya(b); -1 === d.indexOf(" " + b + " ") && (d += b + " ")
            });
            b.setAttribute("class", ya(d))
        }
    }

    function Ta(b, c) {
        if (c)
            if (c.nodeType) b[b.length++] = c;
            else {
                var d = c.length;
                if ("number" === typeof d && c.window !== c) {
                    if (d)
                        for (var e = 0; e < d; e++) b[b.length++] = c[e]
                } else b[b.length++] = c
            }
    }

    function Aa(b, c) {
        return xa(b, "$" + (c || "ngController") + "Controller")
    }

    function xa(b, c, d) {
        9 == b.nodeType && (b = b.documentElement);
        for (c = ia(c) ? c : [c]; b;) {
            for (var e = 0, f = c.length; e <
                f; e++)
                if (r(d = ca.data(b, c[e]))) return d;
            b = b.parentNode || 11 === b.nodeType && b.host
        }
    }

    function Hb(b) {
        for (Ca(b, !0) ; b.firstChild;) b.removeChild(b.firstChild)
    }

    function Ia(b, c) {
        c || Ca(b);
        var d = b.parentNode;
        d && d.removeChild(b)
    }

    function qb(c, d) {
        d = d || b;
        if ("complete" === d.document.readyState) d.setTimeout(c);
        else ca(d).on("load", c)
    }

    function Ma(b, c) {
        var d = Lc[c.toLowerCase()];
        return d && Hd[D(b)] && d
    }

    function cb(b, c) {
        var d = function (d, e) {
            d.isDefaultPrevented = function () {
                return d.defaultPrevented
            };
            var f = c[e || d.type],
                g = f ?
                f.length : 0;
            if (g) {
                if (s(d.immediatePropagationStopped)) {
                    var h = d.stopImmediatePropagation;
                    d.stopImmediatePropagation = function () {
                        d.immediatePropagationStopped = !0;
                        d.stopPropagation && d.stopPropagation();
                        h && h.call(d)
                    }
                }
                d.isImmediatePropagationStopped = function () {
                    return !0 === d.immediatePropagationStopped
                };
                var j = f.specialHandlerWrapper || gb;
                1 < g && (f = J(f));
                for (var k = 0; k < g; k++) d.isImmediatePropagationStopped() || j(b, d, f[k])
            }
        };
        d.elem = b;
        return d
    }

    function gb(b, c, d) {
        d.call(b, c)
    }

    function Qa(b, c, d) {
        var e = c.relatedTarget;
        e && (e === b || Ve.call(b, e)) || d.call(b, c)
    }

    function qa() {
        this.$get = function () {
            return k(ea, {
                hasClass: function (b, c) {
                    b.attr && (b = b[0]);
                    return Fa(b, c)
                },
                addClass: function (b, c) {
                    b.attr && (b = b[0]);
                    return bb(b, c)
                },
                removeClass: function (b, c) {
                    b.attr && (b = b[0]);
                    return Sa(b, c)
                }
            })
        }
    }

    function za(b, c) {
        var d = b && b.$$hashKey;
        if (d) return "function" === typeof d && (d = b.$$hashKey()), d;
        d = typeof b;
        return "function" == d || "object" == d && null !== b ? b.$$hashKey = d + ":" + (c || h)() : d + ":" + b
    }

    function ua(b, c) {
        if (c) {
            var d = 0;
            this.nextUid = function () {
                return ++d
            }
        }
        e(b,
            this.put, this)
    }

    function hb(b) {
        b = Function.prototype.toString.call(b).replace(ze, "");
        return b.match(ve) || b.match(we)
    }

    function Ka(b) {
        return (b = hb(b)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Pa(b, c) {
        function d(b) {
            return function (c, d) {
                if (o(c)) e(c, g(b));
                else return b(c, d)
            }
        }

        function f(b, c) {
            sa(b, "service");
            if (A(c) || ia(c)) c = r.instantiate(c);
            if (!c.$get) throw cc("pget", b);
            return q[b + "Provider"] = c
        }

        function h(b, c) {
            return function () {
                var d = B.invoke(c, this);
                if (s(d)) throw cc("undef", b);
                return d
            }
        }

        function j(b, c, d) {
            return f(b, {
                $get: !1 !== d ? h(b, c) : c
            })
        }

        function k(b) {
            va(s(b) || ia(b), "modulesToLoad", "not an array");
            var c = [],
                d;
            e(b, function (b) {
                function e(b) {
                    var c, d;
                    c = 0;
                    for (d = b.length; c < d; c++) {
                        var f = b[c],
                            g = r.get(f[0]);
                        g[f[1]].apply(g, f[2])
                    }
                }
                if (!t.get(b)) {
                    t.put(b, !0);
                    try {
                        u(b) ? (d = jd(b), c = c.concat(k(d.requires)).concat(d._runBlocks), e(d._invokeQueue), e(d._configBlocks)) : A(b) ? c.push(r.invoke(b)) : ia(b) ? c.push(r.invoke(b)) : ta(b, "module")
                    } catch (f) {
                        throw ia(b) && (b = b[b.length - 1]), f.message && f.stack && -1 == f.stack.indexOf(f.message) &&
                            (f = f.message + "\n" + f.stack), cc("modulerr", b, f.stack || f.message || f);
                    }
                }
            });
            return c
        }

        function l(b, d) {
            function e(c, f) {
                if (b.hasOwnProperty(c)) {
                    if (b[c] === m) throw cc("cdep", c + " <- " + n.join(" <- "));
                    return b[c]
                }
                try {
                    return n.unshift(c), b[c] = m, b[c] = d(c, f)
                } catch (g) {
                    throw b[c] === m && delete b[c], g;
                } finally {
                    n.shift()
                }
            }

            function f(b, d, g) {
                for (var h = [], b = Pa.$$annotate(b, c, g), j = 0, k = b.length; j < k; j++) {
                    var l = b[j];
                    if ("string" !== typeof l) throw cc("itkn", l);
                    h.push(d && d.hasOwnProperty(l) ? d[l] : e(l, g))
                }
                return h
            }
            return {
                invoke: function (b,
                    c, d, e) {
                    "string" === typeof d && (e = d, d = null);
                    d = f(b, d, e);
                    ia(b) && (b = b[b.length - 1]);
                    return (e = 11 >= Qb ? !1 : "function" === typeof b && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(b))) ? (d.unshift(null), new (Function.prototype.bind.apply(b, d))) : b.apply(c, d)
                },
                instantiate: function (b, c, d) {
                    var e = ia(b) ? b[b.length - 1] : b,
                        b = f(b, c, d);
                    b.unshift(null);
                    return new (Function.prototype.bind.apply(e, b))
                },
                get: e,
                annotate: Pa.$$annotate,
                has: function (c) {
                    return q.hasOwnProperty(c + "Provider") || b.hasOwnProperty(c)
                }
            }
        }
        var c = !0 === c,
            m = {},
            n = [],
            t = new ua([], !0),
            q = {
                $provide: {
                    provider: d(f),
                    factory: d(j),
                    service: d(function (b, c) {
                        return j(b, ["$injector", function (b) {
                            return b.instantiate(c)
                        }])
                    }),
                    value: d(function (b, c) {
                        return j(b, p(c), !1)
                    }),
                    constant: d(function (b, c) {
                        sa(b, "constant");
                        q[b] = c;
                        L[b] = c
                    }),
                    decorator: function (b, c) {
                        var d = r.get(b + "Provider"),
                            e = d.$get;
                        d.$get = function () {
                            var b = B.invoke(e, d);
                            return B.invoke(c, null, {
                                $delegate: b
                            })
                        }
                    }
                }
            },
            r = q.$injector = l(q, function (b, c) {
                mb.isString(c) && n.push(c);
                throw cc("unpr", n.join(" <- "));
            }),
            L = {},
            w = l(L, function (b, c) {
                var d = r.get(b + "Provider", c);
                return B.invoke(d.$get, d, void 0, b)
            }),
            B = w;
        q.$injectorProvider = {
            $get: p(w)
        };
        var D = k(b),
            B = w.get("$injector");
        B.strictDi = c;
        e(D, function (b) {
            b && B.invoke(b)
        });
        return B
    }

    function yb() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (c, d, e) {
            function f(b) {
                var c = null;
                Array.prototype.some.call(b, function (b) {
                    if ("a" === D(b)) return c = b, !0
                });
                return c
            }

            function g(b) {
                if (b) {
                    b.scrollIntoView();
                    var d;
                    d = h.yOffset;
                    A(d) ? d = d() : P(d) ? (d = d[0], d = "fixed" !== c.getComputedStyle(d).position ? 0 : d.getBoundingClientRect().bottom) : w(d) || (d = 0);
                    d && (b = b.getBoundingClientRect().top, c.scrollBy(0, b - d))
                } else c.scrollTo(0, 0)
            }

            function h(b) {
                var b = u(b) ? b : d.hash(),
                    c;
                b ? (c = j.getElementById(b)) ? g(c) : (c = f(j.getElementsByName(b))) ? g(c) : "top" === b && g(null) : g(null)
            }
            var j = c.document;
            b && e.$watch(function () {
                return d.hash()
            }, function (b, c) {
                b === c && "" === b || qb(function () {
                    e.$evalAsync(h)
                })
            });
            return h
        }]
    }

    function na(b, c) {
        if (!b && !c) return "";
        if (!b) return c;
        if (!c) return b;
        ia(b) && (b = b.join(" "));
        ia(c) && (c = c.join(" "));
        return b + " " + c
    }

    function Fb(b) {
        u(b) && (b = b.split(" "));
        var c = W();
        e(b, function (b) {
            b.length && (c[b] = !0)
        });
        return c
    }

    function Ja(b) {
        return o(b) ? b : {}
    }

    function db(b, c, d, f) {
        function g(b) {
            try {
                b.apply(null, lb.call(arguments, 1))
            } finally {
                if (q--, 0 === q)
                    for (; r.length;) try {
                        r.pop()()
                    } catch (c) {
                        d.error(c)
                    }
            }
        }

        function h() {
            D = null;
            j();
            k()
        }

        function j() {
            L = z();
            L = s(L) ? null : L;
            N(L, E) && (L = E);
            E = L
        }

        function k() {
            if (B !== l.url() || w !== L) B = l.url(), w = L, e(v, function (b) {
                b(l.url(),
                    L)
            })
        }
        var l = this,
            o = b.location,
            m = b.history,
            u = b.setTimeout,
            p = b.clearTimeout,
            t = {};
        l.isMock = !1;
        var q = 0,
            r = [];
        l.$$completeOutstandingRequest = g;
        l.$$incOutstandingRequestCount = function () {
            q++
        };
        l.notifyWhenNoOutstandingRequests = function (b) {
            0 === q ? b() : r.push(b)
        };
        var L, w, B = o.href,
            A = c.find("base"),
            D = null,
            z = f.history ? function () {
                try {
                    return m.state
                } catch (b) { }
            } : n;
        j();
        w = L;
        l.url = function (c, d, e) {
            s(e) && (e = null);
            o !== b.location && (o = b.location);
            m !== b.history && (m = b.history);
            if (c) {
                var g = w === e;
                if (B === c && (!f.history || g)) return l;
                var h = B && $a(B) === $a(c);
                B = c;
                w = e;
                if (!f.history || h && g) {
                    if (!h || D) D = c;
                    d ? o.replace(c) : h ? (d = o, e = c.indexOf("#"), e = -1 === e ? "" : c.substr(e), d.hash = e) : o.href = c;
                    o.href !== c && (D = c)
                } else m[d ? "replaceState" : "pushState"](e, "", c), j(), w = L;
                return l
            }
            return D || o.href.replace(/%27/g, "'")
        };
        l.state = function () {
            return L
        };
        var v = [],
            O = !1,
            E = null;
        l.onUrlChange = function (c) {
            if (!O) {
                if (f.history) ca(b).on("popstate", h);
                ca(b).on("hashchange", h);
                O = !0
            }
            v.push(c);
            return c
        };
        l.$$applicationDestroyed = function () {
            ca(b).off("hashchange popstate",
                h)
        };
        l.$$checkUrlChange = k;
        l.baseHref = function () {
            var b = A.attr("href");
            return b ? b.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        l.defer = function (b, c) {
            var d;
            q++;
            d = u(function () {
                delete t[d];
                g(b)
            }, c || 0);
            t[d] = !0;
            return d
        };
        l.defer.cancel = function (b) {
            return t[b] ? (delete t[b], p(b), g(n), !0) : !1
        }
    }

    function Ib() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, c, d, e) {
            return new db(b, e, c, d)
        }]
    }

    function Ab() {
        this.$get = function () {
            function b(e, f) {
                function g(b) {
                    b != u && (p ? p == b && (p = b.n) : p = b, h(b.n, b.p), h(b, u), u = b,
                        u.n = null)
                }

                function h(b, c) {
                    b != c && (b && (b.p = c), c && (c.n = b))
                }
                if (e in d) throw c("$cacheFactory")("iid", e);
                var j = 0,
                    l = k({}, f, {
                        id: e
                    }),
                    o = W(),
                    m = f && f.capacity || Number.MAX_VALUE,
                    n = W(),
                    u = null,
                    p = null;
                return d[e] = {
                    put: function (b, c) {
                        if (!s(c)) {
                            if (m < Number.MAX_VALUE) {
                                var d = n[b] || (n[b] = {
                                    key: b
                                });
                                g(d)
                            }
                            b in o || j++;
                            o[b] = c;
                            j > m && this.remove(p.key);
                            return c
                        }
                    },
                    get: function (b) {
                        if (m < Number.MAX_VALUE) {
                            var c = n[b];
                            if (!c) return;
                            g(c)
                        }
                        return o[b]
                    },
                    remove: function (b) {
                        if (m < Number.MAX_VALUE) {
                            var c = n[b];
                            if (!c) return;
                            c == u && (u = c.p);
                            c == p &&
                                (p = c.n);
                            h(c.n, c.p);
                            delete n[b]
                        }
                        b in o && (delete o[b], j--)
                    },
                    removeAll: function () {
                        o = W();
                        j = 0;
                        n = W();
                        u = p = null
                    },
                    destroy: function () {
                        n = l = o = null;
                        delete d[e]
                    },
                    info: function () {
                        return k({}, l, {
                            size: j
                        })
                    }
                }
            }
            var d = {};
            b.info = function () {
                var b = {};
                e(d, function (c, d) {
                    b[d] = c.info()
                });
                return b
            };
            b.get = function (b) {
                return d[b]
            };
            return b
        }
    }

    function vb() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function ob(c, d) {
        function f(b, c, d) {
            var g = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
                h = W();
            e(b, function (b, e) {
                if (b in B) h[e] =
                    B[b];
                else {
                    var f = b.match(g);
                    if (!f) throw Ra("iscp", c, e, b, d ? "controller bindings definition" : "isolate scope definition");
                    h[e] = {
                        mode: f[1][0],
                        collection: "*" === f[2],
                        optional: "?" === f[3],
                        attrName: f[4] || e
                    };
                    f[4] && (B[b] = h[e])
                }
            });
            return h
        }

        function h(b) {
            var c = b.charAt(0);
            if (!c || c !== wa(c)) throw Ra("baddir", b);
            if (b !== b.trim()) throw Ra("baddir", b);
        }
        var j = {},
            l = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            m = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            t = T("ngSrc,ngSrcset,src,srcset"),
            L = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            w = /^(on[a-z]+|formaction)$/,
            B = W();
        this.directive = function Xe(b, d) {
            sa(b, "directive");
            u(b) ? (h(b), va(d, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], c.factory(b + "Directive", ["$injector", "$exceptionHandler", function (c, d) {
                var f = [];
                e(j[b], function (e, g) {
                    try {
                        var h = c.invoke(e);
                        A(h) ? h = {
                            compile: p(h)
                        } : !h.compile && h.link && (h.compile = p(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        h.$$moduleName = e.$$moduleName;
                        f.push(h)
                    } catch (j) {
                        d(j)
                    }
                });
                return f
            }])),
                j[b].push(d)) : e(b, g(Xe));
            return this
        };
        this.component = function (b, c) {
            function d(b) {
                function g(c) {
                    return A(c) || ia(c) ? function (d, e) {
                        return b.invoke(c, this, {
                            $element: d,
                            $attrs: e
                        })
                    } : c
                }
                var h = c.template || c.templateUrl ? c.template : "",
                    j = {
                        controller: f,
                        controllerAs: Mb(c.controller) || c.controllerAs || "$ctrl",
                        template: g(h),
                        templateUrl: g(c.templateUrl),
                        transclude: c.transclude,
                        scope: {},
                        bindToController: c.bindings || {},
                        restrict: "E",
                        require: c.require
                    };
                e(c, function (b, c) {
                    "$" === c.charAt(0) && (j[c] = b)
                });
                return j
            }
            var f = c.controller ||
                function () { };
            e(c, function (b, c) {
                "$" === c.charAt(0) && (d[c] = b, A(f) && (f[c] = b))
            });
            d.$inject = ["$injector"];
            return this.directive(b, d)
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return r(b) ? (d.aHrefSanitizationWhitelist(b), this) : d.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return r(b) ? (d.imgSrcSanitizationWhitelist(b), this) : d.imgSrcSanitizationWhitelist()
        };
        var z = !0;
        this.debugInfoEnabled = function (b) {
            return r(b) ? (z = b, this) : z
        };
        var v = 10;
        this.onChangesTtl = function (b) {
            return arguments.length ?
                (v = b, this) : v
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (c, d, g, h, p, r, ha, B, O, E) {
            function Xa() {
                try {
                    if (!--Db) throw oa = void 0, Ra("infchng", v);
                    ha.$apply(function () {
                        for (var b = 0, c = oa.length; b < c; ++b) oa[b]();
                        oa = void 0
                    })
                } finally {
                    Db++
                }
            }

            function x(b, c) {
                if (c) {
                    var d = Object.keys(c),
                        e, f, g;
                    e = 0;
                    for (f = d.length; e < f; e++) g = d[e], this[g] = c[g]
                } else this.$attr = {};
                this.$$element = b
            }

            function Ea(b, c, d) {
                rb.innerHTML =
                    "<span " + c + ">";
                var c = rb.firstChild.attributes,
                    e = c[0];
                c.removeNamedItem(e.name);
                e.value = d;
                b.attributes.setNamedItem(e)
            }

            function J(b, c) {
                try {
                    b.addClass(c)
                } catch (d) { }
            }

            function C(c, d, e, f, g) {
                c instanceof ca || (c = ca(c));
                for (var h = /\S+/, j = 0, k = c.length; j < k; j++) {
                    var l = c[j];
                    l.nodeType === mc && l.nodeValue.match(h) && kb(l, c[j] = b.document.createElement("span"))
                }
                var o = I(c, d, c, e, f, g);
                C.$$addScopeClass(c);
                var m = null;
                return function (b, d, e) {
                    va(b, "scope");
                    g && g.needsNewScope && (b = b.$parent.$new());
                    var e = e || {},
                        f = e.parentBoundTranscludeFn,
                        h = e.transcludeControllers,
                        e = e.futureParentElement;
                    f && f.$$boundTransclude && (f = f.$$boundTransclude);
                    m || (m = (e = e && e[0]) ? "foreignobject" !== D(e) && ab.call(e).match(/SVG/) ? "svg" : "html" : "html");
                    e = "html" !== m ? ca(ta(m, ca("<div>").append(c).html())) : d ? kc.clone.call(c) : c;
                    if (h)
                        for (var j in h) e.data("$" + j + "Controller", h[j].instance);
                    C.$$addScopeInfo(e, b);
                    d && d(e, b);
                    o && o(b, e, e, f);
                    return e
                }
            }

            function I(b, c, d, e, f, g) {
                function h(b, d, e, f) {
                    var g, k, l, o, m, s, u;
                    if (n) {
                        u = Array(d.length);
                        for (o = 0; o < j.length; o += 3) g = j[o], u[g] = d[g]
                    } else u =
                        d;
                    o = 0;
                    for (m = j.length; o < m;) k = u[j[o++]], d = j[o++], g = j[o++], d ? (d.scope ? (l = b.$new(), C.$$addScopeInfo(ca(k), l)) : l = b, s = d.transcludeOnThisElement ? la(b, d.transclude, f) : !d.templateOnThisElement && f ? f : !f && c ? la(b, c) : null, d(g, l, k, e, s)) : g && g(b, k.childNodes, void 0, f)
                }
                for (var j = [], k, l, o, m, n, s = 0; s < b.length; s++) {
                    k = new x;
                    l = X(b[s], [], k, 0 === s ? e : void 0, f);
                    (g = l.length ? Q(l, b[s], k, c, d, null, [], [], g) : null) && g.scope && C.$$addScopeClass(k.$$element);
                    k = g && g.terminal || !(o = b[s].childNodes) || !o.length ? null : I(o, g ? (g.transcludeOnThisElement ||
                        !g.templateOnThisElement) && g.transclude : c);
                    if (g || k) j.push(s, g, k), m = !0, n = n || g;
                    g = null
                }
                return m ? h : null
            }

            function la(b, c, d) {
                function e(f, g, h, j, k) {
                    f || (f = b.$new(!1, k), f.$$transcluded = !0);
                    return c(f, g, {
                        parentBoundTranscludeFn: d,
                        transcludeControllers: h,
                        futureParentElement: j
                    })
                }
                var f = e.$$slots = W(),
                    g;
                for (g in c.$$slots) f[g] = c.$$slots[g] ? la(b, c.$$slots[g], d) : null;
                return e
            }

            function X(b, c, d, e, f) {
                var g = d.$attr,
                    h;
                switch (b.nodeType) {
                    case 1:
                        da(c, Ha(D(b)), "E", e, f);
                        for (var j, k, n, s = b.attributes, p = 0, t = s && s.length; p < t; p++) {
                            var q = !1,
                                r = !1;
                            j = s[p];
                            h = j.name;
                            k = ya(j.value);
                            j = Ha(h);
                            if (n = Wa.test(j)) h = h.replace(Qd, "").substr(8).replace(/_(.)/g, function (b, c) {
                                return c.toUpperCase()
                            });
                            (j = j.match(Fa)) && Y(j[1]) && (q = h, r = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6));
                            j = Ha(h.toLowerCase());
                            g[j] = h;
                            if (n || !d.hasOwnProperty(j)) d[j] = k, Ma(b, j) && (d[j] = !0);
                            We(b, c, k, j, n);
                            da(c, j, "A", e, f, q, r)
                        }
                        b = b.className;
                        o(b) && (b = b.animVal);
                        if (u(b) && "" !== b)
                            for (; h = m.exec(b) ;) j = Ha(h[2]), da(c, j, "C", e, f) && (d[j] = ya(h[3])), b = b.substr(h.index + h[0].length);
                        break;
                    case mc:
                        if (11 ===
                            Qb)
                            for (; b.parentNode && b.nextSibling && b.nextSibling.nodeType === mc;) b.nodeValue += b.nextSibling.nodeValue, b.parentNode.removeChild(b.nextSibling);
                        ba(c, b.nodeValue);
                        break;
                    case 8:
                        try {
                            if (h = l.exec(b.nodeValue)) j = Ha(h[1]), da(c, j, "M", e, f) && (d[j] = ya(h[2]))
                        } catch (L) { }
                }
                c.sort(R);
                return c
            }

            function Z(b, c, d) {
                var e = [],
                    f = 0;
                if (c && b.hasAttribute && b.hasAttribute(c)) {
                    do {
                        if (!b) throw Ra("uterdir", c, d);
                        1 == b.nodeType && (b.hasAttribute(c) && f++, b.hasAttribute(d) && f--);
                        e.push(b);
                        b = b.nextSibling
                    } while (0 < f)
                } else e.push(b);
                return ca(e)
            }

            function fa(b, c, d) {
                return function (e, f, g, h, j) {
                    f = Z(f[0], c, d);
                    return b(e, f, g, h, j)
                }
            }

            function G(b, c, d, e, f, g) {
                var h;
                return b ? C(c, d, e, f, g) : function () {
                    h || (h = C(c, d, e, f, g), c = d = g = null);
                    return h.apply(this, arguments)
                }
            }

            function Q(b, c, d, f, h, j, l, m, n) {
                function u(b, c, d, e) {
                    if (b) {
                        d && (b = fa(b, d, e));
                        b.require = E.require;
                        b.directiveName = Xa;
                        if (L === E || E.$$isolateScope) b = Da(b, {
                            isolateScope: !0
                        });
                        l.push(b)
                    }
                    if (c) {
                        d && (c = fa(c, d, e));
                        c.require = E.require;
                        c.directiveName = Xa;
                        if (L === E || E.$$isolateScope) c = Da(c, {
                            isolateScope: !0
                        });
                        m.push(c)
                    }
                }

                function p(b, f, g, h, j) {
                    function n(b, c, d, e) {
                        var f;
                        H(b) || (e = d, d = c, c = b, b = void 0);
                        v && (f = z);
                        d || (d = v ? E.parent() : E);
                        if (e) {
                            var g = j.$$slots[e];
                            if (g) return g(b, c, f, d, Ea);
                            if (s(g)) throw Ra("noslot", e, M(E));
                        } else return j(b, c, f, d, Ea)
                    }
                    var u, t, ha, B, D, z, O, E;
                    c === g ? (h = d, E = d.$$element) : (E = ca(g), h = new x(E, d));
                    D = f;
                    L ? B = f.$new(!0) : q && (D = f.$parent);
                    j && (O = n, O.$$boundTransclude = j, O.isSlotFilled = function (b) {
                        return !!j.$$slots[b]
                    });
                    r && (z = aa(E, h, O, r, B, f, L));
                    L && (C.$$addScopeInfo(E, B, !0, !(w && (w === L || w === L.$$originalDirective))),
                        C.$$addScopeClass(E, !0), B.$$isolateBindings = L.$$isolateBindings, t = sa(f, h, B, B.$$isolateBindings, L), t.removeWatches && B.$on("$destroy", t.removeWatches));
                    for (u in z) {
                        t = r[u];
                        ha = z[u];
                        var Xa = t.$$bindings.bindToController;
                        ha.bindingInfo = ha.identifier && Xa ? sa(D, h, ha.instance, Xa, t) : {};
                        var W = ha();
                        W !== ha.instance && (ha.instance = W, E.data("$" + t.name + "Controller", W), ha.bindingInfo.removeWatches && ha.bindingInfo.removeWatches(), ha.bindingInfo = sa(D, h, ha.instance, Xa, t))
                    }
                    e(r, function (b, c) {
                        var d = b.require;
                        b.bindToController &&
                            !ia(d) && o(d) && k(z[c].instance, U(c, d, E, z))
                    });
                    e(z, function (b) {
                        var c = b.instance;
                        A(c.$onChanges) && c.$onChanges(b.bindingInfo.initialChanges);
                        A(c.$onInit) && c.$onInit();
                        A(c.$onDestroy) && D.$on("$destroy", function () {
                            c.$onDestroy()
                        })
                    });
                    u = 0;
                    for (t = l.length; u < t; u++) ha = l[u], Vb(ha, ha.isolateScope ? B : f, E, h, ha.require && U(ha.directiveName, ha.require, E, z), O);
                    var Ea = f;
                    L && (L.template || null === L.templateUrl) && (Ea = B);
                    b && b(Ea, g.childNodes, void 0, j);
                    for (u = m.length - 1; 0 <= u; u--) ha = m[u], Vb(ha, ha.isolateScope ? B : f, E, h, ha.require &&
                        U(ha.directiveName, ha.require, E, z), O);
                    e(z, function (b) {
                        b = b.instance;
                        A(b.$postLink) && b.$postLink()
                    })
                }
                for (var n = n || {}, t = -Number.MAX_VALUE, q = n.newScopeDirective, r = n.controllerDirectives, L = n.newIsolateScopeDirective, w = n.templateDirective, ha = n.nonTlbTranscludeDirective, B = !1, z = !1, v = n.hasElementTranscludeDirective, O = d.$$element = ca(c), E, Xa, Ea, F = f, J, Yb = !1, I = !1, la, Kb = 0, sc = b.length; Kb < sc; Kb++) {
                    E = b[Kb];
                    var N = E.$$start,
                        ud = E.$$end;
                    N && (O = Z(c, N, ud));
                    Ea = void 0;
                    if (t > E.priority) break;
                    if (la = E.scope) E.templateUrl || (o(la) ?
                        (ja("new/isolated scope", L || q, E, O), L = E) : ja("new/isolated scope", L, E, O)), q = q || E;
                    Xa = E.name;
                    if (!Yb && (E.replace && (E.templateUrl || E.template) || E.transclude && !E.$$tlb)) {
                        for (la = Kb + 1; Yb = b[la++];)
                            if (Yb.transclude && !Yb.$$tlb || Yb.replace && (Yb.templateUrl || Yb.template)) {
                                I = !0;
                                break
                            }
                        Yb = !0
                    } !E.templateUrl && E.controller && (la = E.controller, r = r || W(), ja("'" + Xa + "' controller", r[Xa], E, O), r[Xa] = E);
                    if (la = E.transclude)
                        if (B = !0, E.$$tlb || (ja("transclusion", ha, E, O), ha = E), "element" == la) v = !0, t = E.priority, Ea = O, O = d.$$element = ca(C.$$createComment(Xa,
                            d[Xa])), c = O[0], ka(h, lb.call(Ea, 0), c), Ea[0].$$parentNode = Ea[0].parentNode, F = G(I, Ea, f, t, j && j.name, {
                                nonTlbTranscludeDirective: ha
                            });
                        else {
                            var Ob = W();
                            Ea = ca(ma(c)).contents();
                            if (o(la)) {
                                Ea = [];
                                var da = W(),
                                    vd = W();
                                e(la, function (b, c) {
                                    var d = "?" === b.charAt(0),
                                        b = d ? b.substring(1) : b;
                                    da[b] = c;
                                    Ob[c] = null;
                                    vd[c] = d
                                });
                                e(O.contents(), function (b) {
                                    var c = da[Ha(D(b))];
                                    c ? (vd[c] = !0, Ob[c] = Ob[c] || [], Ob[c].push(b)) : Ea.push(b)
                                });
                                e(vd, function (b, c) {
                                    if (!b) throw Ra("reqslot", c);
                                });
                                for (var Y in Ob) Ob[Y] && (Ob[Y] = G(I, Ob[Y], f))
                            }
                            O.empty();
                            F = G(I, Ea, f, void 0, void 0, {
                                needsNewScope: E.$$isolateScope || E.$$newScope
                            });
                            F.$$slots = Ob
                        }
                    if (E.template)
                        if (z = !0, ja("template", w, E, O), w = E, la = A(E.template) ? E.template(O, d) : E.template, la = Na(la), E.replace) {
                            j = E;
                            Ea = id.test(la) ? Rb(ta(E.templateNamespace, ya(la))) : [];
                            c = Ea[0];
                            if (1 != Ea.length || 1 !== c.nodeType) throw Ra("tplrt", Xa, "");
                            ka(h, O, c);
                            sc = {
                                $attr: {}
                            };
                            la = X(c, [], sc);
                            var R = b.splice(Kb + 1, b.length - (Kb + 1));
                            (L || q) && Ub(la, L, q);
                            b = b.concat(la).concat(R);
                            P(d, sc);
                            sc = b.length
                        } else O.html(la);
                    if (E.templateUrl) z = !0, ja("template",
                        w, E, O), w = E, E.replace && (j = E), p = ra(b.splice(Kb, b.length - Kb), O, d, h, B && F, l, m, {
                            controllerDirectives: r,
                            newScopeDirective: q !== E && q,
                            newIsolateScopeDirective: L,
                            templateDirective: w,
                            nonTlbTranscludeDirective: ha
                        }), sc = b.length;
                    else if (E.compile) try {
                        J = E.compile(O, d, F), A(J) ? u(null, J, N, ud) : J && u(J.pre, J.post, N, ud)
                    } catch (K) {
                        g(K, M(O))
                    }
                    E.terminal && (p.terminal = !0, t = Math.max(t, E.priority))
                }
                p.scope = q && !0 === q.scope;
                p.transcludeOnThisElement = B;
                p.templateOnThisElement = z;
                p.transclude = F;
                n.hasElementTranscludeDirective = v;
                return p
            }

            function U(b, c, d, f) {
                var g;
                if (u(c)) {
                    var h = c.match(L),
                        c = c.substring(h[0].length),
                        j = h[1] || h[3],
                        h = "?" === h[2];
                    "^^" === j ? d = d.parent() : g = (g = f && f[c]) && g.instance;
                    if (!g) {
                        var k = "$" + c + "Controller";
                        g = j ? d.inheritedData(k) : d.data(k)
                    }
                    if (!g && !h) throw Ra("ctreq", c, b);
                } else if (ia(c)) {
                    g = [];
                    j = 0;
                    for (h = c.length; j < h; j++) g[j] = U(b, c[j], d, f)
                } else o(c) && (g = {}, e(c, function (c, e) {
                    g[e] = U(b, c, d, f)
                }));
                return g || null
            }

            function aa(b, c, d, e, f, g, h) {
                var j = W(),
                    k;
                for (k in e) {
                    var l = e[k],
                        o = {
                            $scope: l === h || l.$$isolateScope ? f : g,
                            $element: b,
                            $attrs: c,
                            $transclude: d
                        },
                        m = l.controller;
                    "@" == m && (m = c[l.name]);
                    o = r(m, o, !0, l.controllerAs);
                    j[l.name] = o;
                    b.data("$" + l.name + "Controller", o.instance)
                }
                return j
            }

            function Ub(b, c, d) {
                for (var e = 0, f = b.length; e < f; e++) b[e] = k(Object.create(b[e]), {
                    $$isolateScope: c,
                    $$newScope: d
                })
            }

            function da(b, d, e, h, l, m, n) {
                if (d === l) return null;
                l = null;
                if (j.hasOwnProperty(d))
                    for (var u, d = c.get(d + "Directive"), p = 0, t = d.length; p < t; p++) try {
                        if (u = d[p], (s(h) || h > u.priority) && -1 != u.restrict.indexOf(e)) {
                            m && (u = k(Object.create(u), {
                                $$start: m,
                                $$end: n
                            }));
                            if (!u.$$bindings) {
                                var q =
                                    u,
                                    r = u,
                                    L = u.name,
                                    w = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                o(r.scope) && (!0 === r.bindToController ? (w.bindToController = f(r.scope, L, !0), w.isolateScope = {}) : w.isolateScope = f(r.scope, L, !1));
                                o(r.bindToController) && (w.bindToController = f(r.bindToController, L, !0));
                                if (o(w.bindToController)) {
                                    var ha = r.controller,
                                        B = r.controllerAs;
                                    if (!ha) throw Ra("noctrl", L);
                                    if (!Mb(ha, B)) throw Ra("noident", L);
                                }
                                var D = q.$$bindings = w;
                                o(D.isolateScope) && (u.$$isolateBindings = D.isolateScope)
                            }
                            b.push(u);
                            l = u
                        }
                    } catch (A) {
                        g(A)
                    }
                return l
            }

            function Y(b) {
                if (j.hasOwnProperty(b))
                    for (var d =
                            c.get(b + "Directive"), e = 0, f = d.length; e < f; e++)
                        if (b = d[e], b.multiElement) return !0;
                return !1
            }

            function P(b, c) {
                var d = c.$attr,
                    f = b.$attr,
                    g = b.$$element;
                e(b, function (e, f) {
                    "$" != f.charAt(0) && (c[f] && c[f] !== e && (e += ("style" === f ? ";" : " ") + c[f]), b.$set(f, e, !0, d[f]))
                });
                e(c, function (c, e) {
                    "class" == e ? (J(g, c), b["class"] = (b["class"] ? b["class"] + " " : "") + c) : "style" == e ? (g.attr("style", g.attr("style") + ";" + c), b.style = (b.style ? b.style + ";" : "") + c) : "$" == e.charAt(0) || b.hasOwnProperty(e) || (b[e] = c, f[e] = d[e])
                })
            }

            function ra(b, c, d, f, g, j,
                l, m) {
                var n = [],
                    s, u, p = c[0],
                    t = b.shift(),
                    q = k(Object.create(t), {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: t
                    }),
                    r = A(t.templateUrl) ? t.templateUrl(c, d) : t.templateUrl,
                    L = t.templateNamespace;
                c.empty();
                h(r).then(function (h) {
                    var k, w, h = Na(h);
                    if (t.replace) {
                        h = id.test(h) ? Rb(ta(L, ya(h))) : [];
                        k = h[0];
                        if (1 != h.length || 1 !== k.nodeType) throw Ra("tplrt", t.name, r);
                        h = {
                            $attr: {}
                        };
                        ka(f, c, k);
                        var ha = X(k, [], h);
                        o(t.scope) && Ub(ha, !0);
                        b = ha.concat(b);
                        P(d, h)
                    } else k = p, c.html(h);
                    b.unshift(q);
                    s = Q(b, k, d, g, c, t, j, l, m);
                    e(f, function (b, d) {
                        b == k && (f[d] = c[0])
                    });
                    for (u = I(c[0].childNodes, g) ; n.length;) {
                        h = n.shift();
                        w = n.shift();
                        var B = n.shift(),
                            D = n.shift(),
                            ha = c[0];
                        if (!h.$$destroyed) {
                            if (w !== p) {
                                var A = w.className;
                                m.hasElementTranscludeDirective && t.replace || (ha = ma(k));
                                ka(B, ca(w), ha);
                                J(ca(ha), A)
                            }
                            w = s.transcludeOnThisElement ? la(h, s.transclude, D) : D;
                            s(u, h, ha, f, w)
                        }
                    }
                    n = null
                });
                return function (b, c, d, e, f) {
                    b = f;
                    c.$$destroyed || (n ? n.push(c, d, e, b) : (s.transcludeOnThisElement && (b = la(c, s.transclude, f)), s(u, c, d, e, b)))
                }
            }

            function R(b, c) {
                var d = c.priority -
                    b.priority;
                return 0 !== d ? d : b.name !== c.name ? b.name < c.name ? -1 : 1 : b.index - c.index
            }

            function ja(b, c, d, e) {
                if (c) throw Ra("multidir", c.name, c.$$moduleName ? " (module: " + c.$$moduleName + ")" : "", d.name, d.$$moduleName ? " (module: " + d.$$moduleName + ")" : "", b, M(e));
            }

            function ba(b, c) {
                var e = d(c, !0);
                e && b.push({
                    priority: 0,
                    compile: function (b) {
                        var b = b.parent(),
                            c = !!b.length;
                        c && C.$$addBindingClass(b);
                        return function (b, d) {
                            var f = d.parent();
                            c || C.$$addBindingClass(f);
                            C.$$addBindingInfo(f, e.expressions);
                            b.$watch(e, function (b) {
                                d[0].nodeValue =
                                    b
                            })
                        }
                    }
                })
            }

            function ta(c, d) {
                c = wa(c || "html");
                switch (c) {
                    case "svg":
                    case "math":
                        var e = b.document.createElement("div");
                        e.innerHTML = "<" + c + ">" + d + "</" + c + ">";
                        return e.childNodes[0].childNodes;
                    default:
                        return d
                }
            }

            function T(b, c) {
                if ("srcdoc" == c) return B.HTML;
                var d = D(b);
                if ("xlinkHref" == c || "form" == d && "action" == c || "img" != d && ("src" == c || "ngSrc" == c)) return B.RESOURCE_URL
            }

            function We(b, c, e, f, g) {
                var h = T(b, f),
                    g = t[f] || g,
                    j = d(e, !0, h, g);
                if (j) {
                    if ("multiple" === f && "select" === D(b)) throw Ra("selmulti", M(b));
                    c.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (b, c, k) {
                                    c = k.$$observers || (k.$$observers = W());
                                    if (w.test(f)) throw Ra("nodomevents");
                                    var l = k[f];
                                    l !== e && (j = l && d(l, !0, h, g), e = l);
                                    j && (k[f] = j(b), (c[f] || (c[f] = [])).$$inter = !0, (k.$$observers && k.$$observers[f].$$scope || b).$watch(j, function (b, c) {
                                        "class" === f && b != c ? k.$updateClass(b, c) : k.$set(f, b)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ka(c, d, e) {
                var f = d[0],
                    g = d.length,
                    h = f.parentNode,
                    j, k;
                if (c) {
                    j = 0;
                    for (k = c.length; j < k; j++)
                        if (c[j] == f) {
                            c[j++] = e;
                            k = j + g - 1;
                            for (var l = c.length; j < l; j++, k++) k < l ? c[j] = c[k] : delete c[j];
                            c.length -= g - 1;
                            c.context === f && (c.context = e);
                            break
                        }
                }
                h && h.replaceChild(e, f);
                c = b.document.createDocumentFragment();
                for (j = 0; j < g; j++) c.appendChild(d[j]);
                ca.hasData(f) && (ca.data(e, ca.data(f)), ca(f).off("$destroy"));
                ca.cleanData(c.querySelectorAll("*"));
                for (j = 1; j < g; j++) delete d[j];
                d[0] = e;
                d.length = 1
            }

            function Da(b, c) {
                return k(function () {
                    return b.apply(null, arguments)
                }, b, c)
            }

            function Vb(b, c, d, e, f, h) {
                try {
                    b(c, d, e, f, h)
                } catch (j) {
                    g(j, M(d))
                }
            }

            function sa(b, c, f, g, h) {
                function j(c, d, e) {
                    A(f.$onChanges) && d !== e && (oa || (b.$$postDigest(Xa),
                        oa = []), m || (m = {}, oa.push(k)), m[c] && (e = m[c].previousValue), m[c] = new Ga(e, d))
                }

                function k() {
                    f.$onChanges(m);
                    m = void 0
                }
                var l = [],
                    o = {},
                    m;
                e(g, function (e, g) {
                    var k = e.attrName,
                        m = e.optional,
                        s, t, q, r;
                    switch (e.mode) {
                        case "@":
                            m || Gb.call(c, k) || (f[g] = c[k] = void 0);
                            c.$observe(k, function (b) {
                                if (u(b) || K(b)) j(g, b, f[g]), f[g] = b
                            });
                            c.$$observers[k].$$scope = b;
                            s = c[k];
                            u(s) ? f[g] = d(s)(b) : K(s) && (f[g] = s);
                            o[g] = new Ga(ld, f[g]);
                            break;
                        case "=":
                            if (!Gb.call(c, k)) {
                                if (m) break;
                                c[k] = void 0
                            }
                            if (m && !c[k]) break;
                            t = p(c[k]);
                            r = t.literal ? N : function (b,
                                c) {
                                return b === c || b !== b && c !== c
                            };
                            q = t.assign || function () {
                                s = f[g] = t(b);
                                throw Ra("nonassign", c[k], k, h.name);
                            };
                            s = f[g] = t(b);
                            m = function (c) {
                                r(c, f[g]) || (r(c, s) ? q(b, c = f[g]) : f[g] = c);
                                return s = c
                            };
                            m.$stateful = !0;
                            m = e.collection ? b.$watchCollection(c[k], m) : b.$watch(p(c[k], m), null, t.literal);
                            l.push(m);
                            break;
                        case "<":
                            if (!Gb.call(c, k)) {
                                if (m) break;
                                c[k] = void 0
                            }
                            if (m && !c[k]) break;
                            t = p(c[k]);
                            f[g] = t(b);
                            o[g] = new Ga(ld, f[g]);
                            m = b.$watch(t, function (b, c) {
                                b === c && (c = f[g]);
                                j(g, b, c);
                                f[g] = b
                            }, t.literal);
                            l.push(m);
                            break;
                        case "&":
                            t = c.hasOwnProperty(k) ?
                                p(c[k]) : n;
                            if (t === n && m) break;
                            f[g] = function (c) {
                                return t(b, c)
                            }
                    }
                });
                return {
                    initialChanges: o,
                    removeWatches: l.length && function () {
                        for (var b = 0, c = l.length; b < c; ++b) l[b]()
                    }
                }
            }
            var V = /^\w/,
                rb = b.document.createElement("div"),
                Db = v,
                oa;
            x.prototype = {
                $normalize: Ha,
                $addClass: function (b) {
                    b && 0 < b.length && O.addClass(this.$$element, b)
                },
                $removeClass: function (b) {
                    b && 0 < b.length && O.removeClass(this.$$element, b)
                },
                $updateClass: function (b, c) {
                    var d = pb(b, c);
                    d && d.length && O.addClass(this.$$element, d);
                    (d = pb(c, b)) && d.length && O.removeClass(this.$$element,
                        d)
                },
                $set: function (b, c, d, f) {
                    var h = Ma(this.$$element[0], b),
                        j = Id[b],
                        k = b;
                    h ? (this.$$element.prop(b, c), f = h) : j && (this[j] = c, k = j);
                    this[b] = c;
                    f ? this.$attr[b] = f : (f = this.$attr[b]) || (this.$attr[b] = f = pa(b, "-"));
                    h = D(this.$$element);
                    if ("a" === h && ("href" === b || "xlinkHref" === b) || "img" === h && "src" === b) this[b] = c = E(c, "src" === b);
                    else if ("img" === h && "srcset" === b) {
                        for (var h = "", j = ya(c), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(j) ? l : /(,)/, j = j.split(l), l = Math.floor(j.length / 2), o = 0; o < l; o++) var m = 2 * o,
                            h = h + E(ya(j[m]), !0),
                            h = h + (" " + ya(j[m + 1]));
                        j = ya(j[2 * o]).split(/\s/);
                        h += E(ya(j[0]), !0);
                        2 === j.length && (h += " " + ya(j[1]));
                        this[b] = c = h
                    } !1 !== d && (null === c || s(c) ? this.$$element.removeAttr(f) : V.test(f) ? this.$$element.attr(f, c) : Ea(this.$$element[0], f, c));
                    (b = this.$$observers) && e(b[k], function (b) {
                        try {
                            b(c)
                        } catch (d) {
                            g(d)
                        }
                    })
                },
                $observe: function (b, c) {
                    var d = this,
                        e = d.$$observers || (d.$$observers = W()),
                        f = e[b] || (e[b] = []);
                    f.push(c);
                    ha.$evalAsync(function () {
                        f.$$inter || !d.hasOwnProperty(b) || s(d[b]) || c(d[b])
                    });
                    return function () {
                        F(f, c)
                    }
                }
            };
            var La =
                d.startSymbol(),
                ea = d.endSymbol(),
                Na = "{{" == La && "}}" == ea ? q : function (b) {
                    return b.replace(/\{\{/g, La).replace(/}}/g, ea)
                },
                Wa = /^ngAttr[A-Z]/,
                Fa = /^(.+)Start$/;
            C.$$addBindingInfo = z ? function (b, c) {
                var d = b.data("$binding") || [];
                ia(c) ? d = d.concat(c) : d.push(c);
                b.data("$binding", d)
            } : n;
            C.$$addBindingClass = z ? function (b) {
                J(b, "ng-binding")
            } : n;
            C.$$addScopeInfo = z ? function (b, c, d, e) {
                b.data(d ? e ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", c)
            } : n;
            C.$$addScopeClass = z ? function (b, c) {
                J(b, c ? "ng-isolate-scope" : "ng-scope")
            } :
                n;
            C.$$createComment = function (c, d) {
                var e = "";
                z && (e = " " + (c || "") + ": " + (d || "") + " ");
                return b.document.createComment(e)
            };
            return C
        }]
    }

    function Ga(b, c) {
        this.previousValue = b;
        this.currentValue = c
    }

    function Ha(b) {
        return v(b.replace(Qd, ""))
    }

    function pb(b, c) {
        var d = "",
            e = b.split(/\s+/),
            f = c.split(/\s+/),
            g = 0;
        a: for (; g < e.length; g++) {
            for (var h = e[g], j = 0; j < f.length; j++)
                if (h == f[j]) continue a;
            d += (0 < d.length ? " " : "") + h
        }
        return d
    }

    function Rb(b) {
        var b = ca(b),
            c = b.length;
        if (1 >= c) return b;
        for (; c--;) 8 === b[c].nodeType && Ce.call(b, c, 1);
        return b
    }

    function Mb(b, c) {
        if (c && u(c)) return c;
        if (u(b)) {
            var d = ae.exec(b);
            if (d) return d[3]
        }
    }

    function $b() {
        var b = {},
            d = !1;
        this.has = function (c) {
            return b.hasOwnProperty(c)
        };
        this.register = function (c, d) {
            sa(c, "controller");
            o(c) ? k(b, c) : b[c] = d
        };
        this.allowGlobals = function () {
            d = !0
        };
        this.$get = ["$injector", "$window", function (e, f) {
            function g(b, d, e, f) {
                if (!b || !o(b.$scope)) throw c("$controller")("noscp", f, d);
                b.$scope[d] = e
            }
            return function (c, h, j, l) {
                var m, n, s, j = !0 === j;
                l && u(l) && (s = l);
                if (u(c)) {
                    l = c.match(ae);
                    if (!l) throw If("ctrlfmt",
                        c);
                    n = l[1];
                    s = s || l[3];
                    c = b.hasOwnProperty(n) ? b[n] : Da(h.$scope, n, !0) || (d ? Da(f, n, !0) : void 0);
                    ta(c, n, !0)
                }
                if (j) return j = (ia(c) ? c[c.length - 1] : c).prototype, m = Object.create(j || null), s && g(h, s, m, n || c.name), k(function () {
                    var b = e.invoke(c, m, h, n);
                    b !== m && (o(b) || A(b)) && (m = b, s && g(h, s, m, n || c.name));
                    return m
                }, {
                    instance: m,
                    identifier: s
                });
                m = e.instantiate(c, h, n);
                s && g(h, s, m, n || c.name);
                return m
            }
        }]
    }

    function ac() {
        this.$get = ["$window", function (b) {
            return ca(b.document)
        }]
    }

    function Nb() {
        this.$get = ["$log", function (b) {
            return function (c,
                d) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Ya(b) {
        return o(b) ? z(b) ? b.toISOString() : B(b) : b
    }

    function bc() {
        this.$get = function () {
            return function (b) {
                if (!b) return "";
                var c = [];
                f(b, function (b, d) {
                    null === b || s(b) || (ia(b) ? e(b, function (b) {
                        c.push(da(d) + "=" + da(Ya(b)))
                    }) : c.push(da(d) + "=" + da(Ya(b))))
                });
                return c.join("&")
            }
        }
    }

    function gc() {
        this.$get = function () {
            return function (b) {
                function c(b, g, h) {
                    null === b || s(b) || (ia(b) ? e(b, function (b, d) {
                        c(b, g + "[" + (o(b) ? d : "") + "]")
                    }) : o(b) && !z(b) ? f(b, function (b, d) {
                        c(b, g + (h ? "" : "[") + d + (h ? "" :
                            "]"))
                    }) : d.push(da(g) + "=" + da(Ya(b))))
                }
                if (!b) return "";
                var d = [];
                c(b, "", !0);
                return d.join("&")
            }
        }
    }

    function Za(b, c) {
        if (u(b)) {
            var d = b.replace(Jf, "").trim();
            if (d) {
                var e = c("Content-Type");
                (e = e && 0 === e.indexOf(be)) || (e = (e = d.match(Kf)) && Lf[e[0]].test(d));
                e && (b = E(d))
            }
        }
        return b
    }

    function Sb(b) {
        var c = W(),
            d;
        u(b) ? e(b.split("\n"), function (b) {
            d = b.indexOf(":");
            var e = wa(ya(b.substr(0, d))),
                b = ya(b.substr(d + 1));
            e && (c[e] = c[e] ? c[e] + ", " + b : b)
        }) : o(b) && e(b, function (b, d) {
            var e = wa(d),
                f = ya(b);
            e && (c[e] = c[e] ? c[e] + ", " + f : f)
        });
        return c
    }

    function Tb(b) {
        var c;
        return function (d) {
            c || (c = Sb(b));
            return d ? (d = c[wa(d)], void 0 === d && (d = null), d) : c
        }
    }

    function jb(b, c, d, f) {
        if (A(f)) return f(b, c, d);
        e(f, function (e) {
            b = e(b, c, d)
        });
        return b
    }

    function sb() {
        var b = this.defaults = {
            transformResponse: [Za],
            transformRequest: [function (b) {
                return o(b) && "[object File]" !== ab.call(b) && "[object Blob]" !== ab.call(b) && "[object FormData]" !== ab.call(b) ? B(b) : b
            }],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: J(wd),
                put: J(wd),
                patch: J(wd)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        },
            d = !1;
        this.useApplyAsync = function (b) {
            return r(b) ? (d = !!b, this) : d
        };
        var f = !0;
        this.useLegacyPromiseExtensions = function (b) {
            return r(b) ? (f = !!b, this) : f
        };
        var g = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (h, j, l, m, n, p) {
            function t(d) {
                function g(b) {
                    var c = k({}, b);
                    c.data = jb(b.data, b.headers, b.status, j.transformResponse);
                    b = b.status;
                    return 200 <= b && 300 > b ? c : n.reject(c)
                }

                function h(b,
                    c) {
                    var d, f = {};
                    e(b, function (b, e) {
                        A(b) ? (d = b(c), null != d && (f[e] = d)) : f[e] = b
                    });
                    return f
                }
                if (!o(d)) throw c("$http")("badreq", d);
                if (!u(d.url)) throw c("$http")("badreq", d.url);
                var j = k({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse,
                    paramSerializer: b.paramSerializer
                }, d);
                j.headers = function (c) {
                    var d = b.headers,
                        e = k({}, c.headers),
                        f, g, j, d = k({}, d.common, d[wa(c.method)]);
                    a: for (f in d) {
                        g = wa(f);
                        for (j in e)
                            if (wa(j) === g) continue a;
                        e[f] = d[f]
                    }
                    return h(e, J(c))
                }(d);
                j.method = Oc(j.method);
                j.paramSerializer = u(j.paramSerializer) ? p.get(j.paramSerializer) : j.paramSerializer;
                var l = [function (c) {
                    var d = c.headers,
                        f = jb(c.data, Tb(d), void 0, c.transformRequest);
                    s(f) && e(d, function (b, c) {
                        "content-type" === wa(c) && delete d[c]
                    });
                    s(c.withCredentials) && !s(b.withCredentials) && (c.withCredentials = b.withCredentials);
                    return q(c, f).then(g, g)
                }, void 0],
                    m = n.when(j);
                for (e(B, function (b) {
                        (b.request || b.requestError) && l.unshift(b.request, b.requestError);
                        (b.response || b.responseError) && l.push(b.response, b.responseError)
                }) ; l.length;) var d =
                l.shift(),
                r = l.shift(),
                m = m.then(d, r);
                f ? (m.success = function (b) {
                    ta(b, "fn");
                    m.then(function (c) {
                        b(c.data, c.status, c.headers, j)
                    });
                    return m
                }, m.error = function (b) {
                    ta(b, "fn");
                    m.then(null, function (c) {
                        b(c.data, c.status, c.headers, j)
                    });
                    return m
                }) : (m.success = ce("success"), m.error = ce("error"));
                return m
            }

            function q(c, f) {
                function g(b) {
                    if (b) {
                        var c = {};
                        e(b, function (b, e) {
                            c[e] = function (c) {
                                function e() {
                                    b(c)
                                }
                                d ? m.$applyAsync(e) : m.$$phase ? e() : m.$apply(e)
                            }
                        });
                        return c
                    }
                }

                function k(b, c, e, f) {
                    function g() {
                        l(c, b, e, f)
                    }
                    z && (200 <= b && 300 >
                        b ? z.put(E, [b, c, Sb(e), f]) : z.remove(E));
                    d ? m.$applyAsync(g) : (g(), m.$$phase || m.$apply())
                }

                function l(b, d, e, f) {
                    d = -1 <= d ? d : 0;
                    (200 <= d && 300 > d ? B.resolve : B.reject)({
                        data: b,
                        status: d,
                        headers: Tb(e),
                        config: c,
                        statusText: f
                    })
                }

                function u(b) {
                    l(b.data, b.status, J(b.headers()), b.statusText)
                }

                function p() {
                    var b = t.pendingRequests.indexOf(c); -1 !== b && t.pendingRequests.splice(b, 1)
                }
                var B = n.defer(),
                    D = B.promise,
                    z, O, v = c.headers,
                    E = L(c.url, c.paramSerializer(c.params));
                t.pendingRequests.push(c);
                D.then(p, p);
                !c.cache && !b.cache || !1 === c.cache ||
                    "GET" !== c.method && "JSONP" !== c.method || (z = o(c.cache) ? c.cache : o(b.cache) ? b.cache : w);
                z && (O = z.get(E), r(O) ? O && A(O.then) ? O.then(u, u) : ia(O) ? l(O[1], O[0], J(O[2]), O[3]) : l(O, 200, {}, "OK") : z.put(E, D));
                s(O) && ((O = rc(c.url) ? j()[c.xsrfCookieName || b.xsrfCookieName] : void 0) && (v[c.xsrfHeaderName || b.xsrfHeaderName] = O), h(c.method, E, f, k, v, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
                return D
            }

            function L(b, c) {
                0 < c.length && (b += (-1 == b.indexOf("?") ? "?" : "&") + c);
                return b
            }
            var w = l("$http");
            b.paramSerializer = u(b.paramSerializer) ? p.get(b.paramSerializer) : b.paramSerializer;
            var B = [];
            e(g, function (b) {
                B.unshift(u(b) ? p.get(b) : p.invoke(b))
            });
            t.pendingRequests = [];
            (function (b) {
                e(arguments, function (b) {
                    t[b] = function (c, d) {
                        return t(k({}, d || {}, {
                            method: b,
                            url: c
                        }))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (b) {
                e(arguments, function (b) {
                    t[b] = function (c, d, e) {
                        return t(k({}, e || {}, {
                            method: b,
                            url: c,
                            data: d
                        }))
                    }
                })
            })("post", "put", "patch");
            t.defaults = b;
            return t
        }]
    }

    function hc() {
        this.$get = function () {
            return function () {
                return new b.XMLHttpRequest
            }
        }
    }

    function nc() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (b, c, d, e) {
            return Ub(b, e, b.defer, c.angular.callbacks, d[0])
        }]
    }

    function Ub(b, c, d, f, g) {
        function h(b, c, d) {
            var e = g.createElement("script"),
                j = null;
            e.type = "text/javascript";
            e.src = b;
            e.async = !0;
            j = function (b) {
                e.removeEventListener("load", j, !1);
                e.removeEventListener("error", j, !1);
                g.body.removeChild(e);
                e = null;
                var h = -1,
                    k = "unknown";
                b && ("load" !== b.type || f[c].called || (b = {
                    type: "error"
                }), k = b.type, h = "error" === b.type ? 404 : 200);
                d && d(h, k)
            };
            e.addEventListener("load",
                j, !1);
            e.addEventListener("error", j, !1);
            g.body.appendChild(e);
            return j
        }
        return function (g, j, k, l, o, m, u, p, t, q) {
            function L() {
                D && D();
                z && z.abort()
            }

            function w(c, e, f, g, h) {
                r(v) && d.cancel(v);
                D = z = null;
                c(e, f, g, h);
                b.$$completeOutstandingRequest(n)
            }
            b.$$incOutstandingRequestCount();
            j = j || b.url();
            if ("jsonp" == wa(g)) {
                var B = "_" + (f.counter++).toString(36);
                f[B] = function (b) {
                    f[B].data = b;
                    f[B].called = !0
                };
                var D = h(j.replace("JSON_CALLBACK", "angular.callbacks." + B), B, function (b, c) {
                    w(l, b, f[B].data, "", c);
                    f[B] = n
                })
            } else {
                var z = c(g,
                    j);
                z.open(g, j, !0);
                e(o, function (b, c) {
                    r(b) && z.setRequestHeader(c, b)
                });
                z.onload = function () {
                    var b = z.statusText || "",
                        c = "response" in z ? z.response : z.responseText,
                        d = 1223 === z.status ? 204 : z.status;
                    0 === d && (d = c ? 200 : "file" == wb(j).protocol ? 404 : 0);
                    w(l, d, c, z.getAllResponseHeaders(), b)
                };
                g = function () {
                    w(l, -1, null, null, "")
                };
                z.onerror = g;
                z.onabort = g;
                e(t, function (b, c) {
                    z.addEventListener(c, b)
                });
                e(q, function (b, c) {
                    z.upload.addEventListener(c, b)
                });
                u && (z.withCredentials = !0);
                if (p) try {
                    z.responseType = p
                } catch (O) {
                    if ("json" !== p) throw O;
                }
                z.send(s(k) ? null : k)
            }
            if (0 < m) var v = d(L, m);
            else m && A(m.then) && m.then(L)
        }
    }

    function Vb() {
        var b = "{{",
            c = "}}";
        this.startSymbol = function (c) {
            return c ? (b = c, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (c = b, this) : c
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, e, f) {
            function g(b) {
                return "\\\\\\" + b
            }

            function h(d) {
                return d.replace(n, b).replace(u, c)
            }

            function j(b, c, d, e) {
                var f;
                return f = b.$watch(function (b) {
                    f();
                    return e(b)
                }, c, d)
            }

            function l(g, n, u, t) {
                function q(b) {
                    try {
                        var c = b,
                            b = u ? f.getTrusted(u, c) : f.valueOf(c),
                            d;
                        if (t && !r(b)) d = b;
                        else if (null == b) d = "";
                        else {
                            switch (typeof b) {
                                case "string":
                                    break;
                                case "number":
                                    b = "" + b;
                                    break;
                                default:
                                    b = B(b)
                            }
                            d = b
                        }
                        return d
                    } catch (h) {
                        e(ic.interr(g, h))
                    }
                }
                if (!g.length || -1 === g.indexOf(b)) {
                    var L;
                    n || (n = h(g), L = p(n), L.exp = g, L.expressions = [], L.$$watchDelegate = j);
                    return L
                }
                var t = !!t,
                    w, D, z = 0,
                    O = [],
                    v = [];
                L = g.length;
                for (var E = [], x = []; z < L;)
                    if (-1 != (w = g.indexOf(b, z)) && -1 != (D = g.indexOf(c, w + o))) z !== w && E.push(h(g.substring(z, w))), z = g.substring(w + o, D), O.push(z), v.push(d(z, q)), z = D + m, x.push(E.length), E.push("");
                    else {
                        z !== L && E.push(h(g.substring(z)));
                        break
                    }
                u && 1 < E.length && ic.throwNoconcat(g);
                if (!n || O.length) {
                    var W = function (b) {
                        for (var c = 0, d = O.length; c < d; c++) {
                            if (t && s(b[c])) return;
                            E[x[c]] = b[c]
                        }
                        return E.join("")
                    };
                    return k(function (b) {
                        var c = 0,
                            d = O.length,
                            f = Array(d);
                        try {
                            for (; c < d; c++) f[c] = v[c](b);
                            return W(f)
                        } catch (h) {
                            e(ic.interr(g, h))
                        }
                    }, {
                        exp: g,
                        expressions: O,
                        $$watchDelegate: function (b, c) {
                            var d;
                            return b.$watchGroup(v, function (e, f) {
                                var g = W(e);
                                A(c) && c.call(this, g, e !== f ? d : g, b);
                                d = g
                            })
                        }
                    })
                }
            }
            var o = b.length,
                m = c.length,
                n = RegExp(b.replace(/./g,
                    g), "g"),
                u = RegExp(c.replace(/./g, g), "g");
            l.startSymbol = function () {
                return b
            };
            l.endSymbol = function () {
                return c
            };
            return l
        }]
    }

    function rb() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (b, c, d, e, f) {
            function g(j, k, l, o) {
                function m() {
                    n ? j.apply(null, s) : j(t)
                }
                var n = 4 < arguments.length,
                    s = n ? lb.call(arguments, 4) : [],
                    u = c.setInterval,
                    p = c.clearInterval,
                    t = 0,
                    q = r(o) && !o,
                    L = (q ? e : d).defer(),
                    w = L.promise,
                    l = r(l) ? l : 0;
                w.$$intervalId = u(function () {
                    q ? f.defer(m) : b.$evalAsync(m);
                    L.notify(t++);
                    0 < l && t >= l && (L.resolve(t),
                        p(w.$$intervalId), delete h[w.$$intervalId]);
                    q || b.$apply()
                }, k);
                h[w.$$intervalId] = L;
                return w
            }
            var h = {};
            g.cancel = function (b) {
                return b && b.$$intervalId in h ? (h[b.$$intervalId].reject("canceled"), c.clearInterval(b.$$intervalId), delete h[b.$$intervalId], !0) : !1
            };
            return g
        }]
    }

    function la(b) {
        for (var b = b.split("/"), c = b.length; c--;) b[c] = ba(b[c]);
        return b.join("/")
    }

    function La(b, c) {
        var d = wb(b);
        c.$$protocol = d.protocol;
        c.$$host = d.hostname;
        c.$$port = m(d.port) || Mf[d.protocol] || null
    }

    function vc(b, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        var e = wb(b);
        c.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname);
        c.$$search = aa(e.search);
        c.$$hash = decodeURIComponent(e.hash);
        c.$$path && "/" != c.$$path.charAt(0) && (c.$$path = "/" + c.$$path)
    }

    function ib(b, c) {
        if (0 === c.indexOf(b)) return c.substr(b.length)
    }

    function $a(b) {
        var c = b.indexOf("#");
        return -1 == c ? b : b.substr(0, c)
    }

    function Jb(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function Ac(b, c, d) {
        this.$$html5 = !0;
        d = d || "";
        La(b, this);
        this.$$parse = function (b) {
            var d = ib(c,
                b);
            if (!u(d)) throw bd("ipthprfx", b, c);
            vc(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var b = Y(this.$$search),
                d = this.$$hash ? "#" + ba(this.$$hash) : "";
            this.$$url = la(this.$$path) + (b ? "?" + b : "") + d;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (e, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var g, h;
            r(g = ib(b, e)) ? (h = g, h = r(g = ib(d, g)) ? c + (ib("/", g) || g) : b + h) : r(g = ib(c, e)) ? h = c + g : c == e + "/" && (h = c);
            h && this.$$parse(h);
            return !!h
        }
    }

    function Bc(b, c, d) {
        La(b, this);
        this.$$parse = function (e) {
            var f = ib(b, e) || ib(c, e),
                g;
            s(f) || "#" !== f.charAt(0) ? this.$$html5 ? g = f : (g = "", s(f) && (b = e, this.replace())) : (g = ib(d, f), s(g) && (g = f));
            vc(g, this);
            var e = this.$$path,
                f = b,
                h = /^\/[A-Z]:(\/.*)/;
            0 === g.indexOf(f) && (g = g.replace(f, ""));
            h.exec(g) || (e = (g = h.exec(e)) ? g[1] : e);
            this.$$path = e;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Y(this.$$search),
                e = this.$$hash ? "#" + ba(this.$$hash) : "";
            this.$$url = la(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? d + this.$$url : "")
        };
        this.$$parseLinkUrl =
            function (c) {
                return $a(b) == $a(c) ? (this.$$parse(c), !0) : !1
            }
    }

    function Rc(b, c, d) {
        this.$$html5 = !0;
        Bc.apply(this, arguments);
        this.$$parseLinkUrl = function (e, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var g, h;
            b == $a(e) ? g = e : (h = ib(c, e)) ? g = b + d + h : c === e + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        };
        this.$$compose = function () {
            var c = Y(this.$$search),
                e = this.$$hash ? "#" + ba(this.$$hash) : "";
            this.$$url = la(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + d + this.$$url
        }
    }

    function Bb(b) {
        return function () {
            return this[b]
        }
    }

    function Cc(b,
        c) {
        return function (d) {
            if (s(d)) return this[b];
            this[b] = c(d);
            this.$$compose();
            return this
        }
    }

    function Cb() {
        var b = "",
            c = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function (c) {
            return r(c) ? (b = c, this) : b
        };
        this.html5Mode = function (b) {
            return K(b) ? (c.enabled = b, this) : o(b) ? (K(b.enabled) && (c.enabled = b.enabled), K(b.requireBase) && (c.requireBase = b.requireBase), K(b.rewriteLinks) && (c.rewriteLinks = b.rewriteLinks), this) : c
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d,
            e, f, g, h) {
            function j(b, c, d) {
                var f = l.url(),
                    g = l.$$state;
                try {
                    e.url(b, c, d), l.$$state = e.state()
                } catch (h) {
                    throw l.url(f), l.$$state = g, h;
                }
            }

            function k(b, c) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), b, l.$$state, c)
            }
            var l, m;
            m = e.baseHref();
            var n = e.url(),
                u;
            if (c.enabled) {
                if (!m && c.requireBase) throw bd("nobase");
                u = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = f.history ? Ac : Rc
            } else u = $a(n), m = Bc;
            var p = u.substr(0, $a(u).lastIndexOf("/") + 1);
            l = new m(u, p, "#" + b);
            l.$$parseLinkUrl(n, n);
            l.$$state = e.state();
            var t = /^\s*(javascript|mailto):/i;
            g.on("click", function (b) {
                if (c.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var f = ca(b.target) ;
                        "a" !== D(f[0]) ;)
                        if (f[0] === g[0] || !(f = f.parent())[0]) return;
                    var j = f.prop("href"),
                        k = f.attr("href") || f.attr("xlink:href");
                    o(j) && "[object SVGAnimatedString]" === j.toString() && (j = wb(j.animVal).href);
                    t.test(j) || !j || f.attr("target") || b.isDefaultPrevented() || !l.$$parseLinkUrl(j, k) || (b.preventDefault(), l.absUrl() != e.url() && (d.$apply(), h.angular["ff-684208-preventDefault"] = !0))
                }
            });
            Jb(l.absUrl()) != Jb(n) && e.url(l.absUrl(), !0);
            var q = !0;
            e.onUrlChange(function (b, c) {
                s(ib(p, b)) ? h.location.href = b : (d.$evalAsync(function () {
                    var e = l.absUrl(),
                        f = l.$$state,
                        g;
                    b = Jb(b);
                    l.$$parse(b);
                    l.$$state = c;
                    g = d.$broadcast("$locationChangeStart", b, e, c, f).defaultPrevented;
                    l.absUrl() === b && (g ? (l.$$parse(e), l.$$state = f, j(e, !1, f)) : (q = !1, k(e, f)))
                }), d.$$phase || d.$digest())
            });
            d.$watch(function () {
                var b = Jb(e.url()),
                    c = Jb(l.absUrl()),
                    g = e.state(),
                    h = l.$$replace,
                    o = b !== c || l.$$html5 && f.history && g !== l.$$state;
                if (q ||
                    o) q = !1, d.$evalAsync(function () {
                        var c = l.absUrl(),
                            e = d.$broadcast("$locationChangeStart", c, b, l.$$state, g).defaultPrevented;
                        l.absUrl() === c && (e ? (l.$$parse(b), l.$$state = g) : (o && j(c, h, g === l.$$state ? null : l.$$state), k(b, g)))
                    });
                l.$$replace = !1
            });
            return l
        }]
    }

    function Dc() {
        var b = !0,
            c = this;
        this.debugEnabled = function (c) {
            return r(c) ? (b = c, this) : b
        };
        this.$get = ["$window", function (d) {
            function f(b) {
                b instanceof Error && (b.stack ? b = b.message && -1 === b.stack.indexOf(b.message) ? "Error: " + b.message + "\n" + b.stack : b.stack : b.sourceURL &&
                    (b = b.message + "\n" + b.sourceURL + ":" + b.line));
                return b
            }

            function g(b) {
                var c = d.console || {},
                    h = c[b] || c.log || n,
                    b = !1;
                try {
                    b = !!h.apply
                } catch (j) { }
                return b ? function () {
                    var b = [];
                    e(arguments, function (c) {
                        b.push(f(c))
                    });
                    return h.apply(c, b)
                } : function (b, c) {
                    h(b, null == c ? "" : c)
                }
            }
            return {
                log: g("log"),
                info: g("info"),
                warn: g("warn"),
                error: g("error"),
                debug: function () {
                    var d = g("debug");
                    return function () {
                        b && d.apply(c, arguments)
                    }
                }()
            }
        }]
    }

    function eb(b, c) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" ===
            b || "__proto__" === b) throw fb("isecfld", c);
        return b
    }

    function Db(b) {
        return b + ""
    }

    function Wa(b, c) {
        if (b) {
            if (b.constructor === b) throw fb("isecfn", c);
            if (b.window === b) throw fb("isecwindow", c);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw fb("isecdom", c);
            if (b === Object) throw fb("isecobj", c);
        }
        return b
    }

    function Sc(b, c) {
        if (b) {
            if (b.constructor === b) throw fb("isecfn", c);
            if (b === Nf || b === Of || b === Pf) throw fb("isecff", c);
        }
    }

    function Wb(b, c) {
        if (b && (b === (0).constructor || b === (!1).constructor || b === "".constructor ||
                b === {}.constructor || b === [].constructor || b === Function.constructor)) throw fb("isecaf", c);
    }

    function od(b, c) {
        return "undefined" !== typeof b ? b : c
    }

    function oc(b, c) {
        return "undefined" === typeof b ? c : "undefined" === typeof c ? b : b + c
    }

    function Ba(b, c) {
        var d, f;
        switch (b.type) {
            case S.Program:
                d = !0;
                e(b.body, function (b) {
                    Ba(b.expression, c);
                    d = d && b.expression.constant
                });
                b.constant = d;
                break;
            case S.Literal:
                b.constant = !0;
                b.toWatch = [];
                break;
            case S.UnaryExpression:
                Ba(b.argument, c);
                b.constant = b.argument.constant;
                b.toWatch = b.argument.toWatch;
                break;
            case S.BinaryExpression:
                Ba(b.left, c);
                Ba(b.right, c);
                b.constant = b.left.constant && b.right.constant;
                b.toWatch = b.left.toWatch.concat(b.right.toWatch);
                break;
            case S.LogicalExpression:
                Ba(b.left, c);
                Ba(b.right, c);
                b.constant = b.left.constant && b.right.constant;
                b.toWatch = b.constant ? [] : [b];
                break;
            case S.ConditionalExpression:
                Ba(b.test, c);
                Ba(b.alternate, c);
                Ba(b.consequent, c);
                b.constant = b.test.constant && b.alternate.constant && b.consequent.constant;
                b.toWatch = b.constant ? [] : [b];
                break;
            case S.Identifier:
                b.constant = !1;
                b.toWatch = [b];
                break;
            case S.MemberExpression:
                Ba(b.object, c);
                b.computed && Ba(b.property, c);
                b.constant = b.object.constant && (!b.computed || b.property.constant);
                b.toWatch = [b];
                break;
            case S.CallExpression:
                d = b.filter ? !c(b.callee.name).$stateful : !1;
                f = [];
                e(b.arguments, function (b) {
                    Ba(b, c);
                    d = d && b.constant;
                    b.constant || f.push.apply(f, b.toWatch)
                });
                b.constant = d;
                b.toWatch = b.filter && !c(b.callee.name).$stateful ? f : [b];
                break;
            case S.AssignmentExpression:
                Ba(b.left, c);
                Ba(b.right, c);
                b.constant = b.left.constant && b.right.constant;
                b.toWatch = [b];
                break;
            case S.ArrayExpression:
                d = !0;
                f = [];
                e(b.elements, function (b) {
                    Ba(b, c);
                    d = d && b.constant;
                    b.constant || f.push.apply(f, b.toWatch)
                });
                b.constant = d;
                b.toWatch = f;
                break;
            case S.ObjectExpression:
                d = !0;
                f = [];
                e(b.properties, function (b) {
                    Ba(b.value, c);
                    d = d && b.value.constant;
                    b.value.constant || f.push.apply(f, b.value.toWatch)
                });
                b.constant = d;
                b.toWatch = f;
                break;
            case S.ThisExpression:
                b.constant = !1;
                b.toWatch = [];
                break;
            case S.LocalsExpression:
                b.constant = !1, b.toWatch = []
        }
    }

    function Tc(b) {
        if (1 == b.length) {
            var b = b[0].expression,
                c = b.toWatch;
            return 1 !== c.length ? c : c[0] !== b ? c : void 0
        }
    }

    function Uc(b) {
        if (1 === b.body.length && (b.body[0].expression.type === S.Identifier || b.body[0].expression.type === S.MemberExpression)) return {
            type: S.AssignmentExpression,
            left: b.body[0].expression,
            right: {
                type: S.NGValueParameter
            },
            operator: "="
        }
    }

    function Ec(b) {
        return 0 === b.body.length || 1 === b.body.length && (b.body[0].expression.type === S.Literal || b.body[0].expression.type === S.ArrayExpression || b.body[0].expression.type === S.ObjectExpression)
    }

    function Vc(b, c) {
        this.astBuilder =
            b;
        this.$filter = c
    }

    function Wc(b, c) {
        this.astBuilder = b;
        this.$filter = c
    }

    function Fc(b) {
        return A(b.valueOf) ? b.valueOf() : Qf.call(b)
    }

    function Xc() {
        var b = W(),
            c = W(),
            d = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: void 0
            },
            f, g;
        this.addLiteral = function (b, c) {
            d[b] = c
        };
        this.setIdentifierFns = function (b, c) {
            f = b;
            g = c;
            return this
        };
        this.$get = ["$filter", function (h) {
            function j(d, e, f) {
                var g, l, t, f = f || w;
                switch (typeof d) {
                    case "string":
                        t = d = d.trim();
                        var r = f ? c : b;
                        g = r[t];
                        if (!g) {
                            ":" === d.charAt(0) && ":" === d.charAt(1) && (l = !0, d = d.substring(2));
                            g = f ? L : q;
                            var B = new xd(g);
                            g = (new yd(B, h, g)).parse(d);
                            g.constant ? g.$$watchDelegate = u : l ? g.$$watchDelegate = g.literal ? s : m : g.inputs && (g.$$watchDelegate = o);
                            f && (g = k(g));
                            r[t] = g
                        }
                        return p(g, e);
                    case "function":
                        return p(d, e);
                    default:
                        return p(n, e)
                }
            }

            function k(b) {
                function c(d, e, f, g) {
                    var h = w;
                    w = !0;
                    try {
                        return b(d, e, f, g)
                    } finally {
                        w = h
                    }
                }
                if (!b) return b;
                c.$$watchDelegate = b.$$watchDelegate;
                c.assign = k(b.assign);
                c.constant = b.constant;
                c.literal = b.literal;
                for (var d = 0; b.inputs && d < b.inputs.length; ++d) b.inputs[d] = k(b.inputs[d]);
                c.inputs = b.inputs;
                return c
            }

            function l(b, c) {
                return null == b || null == c ? b === c : "object" === typeof b && (b = Fc(b), "object" === typeof b) ? !1 : b === c || b !== b && c !== c
            }

            function o(b, c, d, e, f) {
                var g = e.inputs,
                    h;
                if (1 === g.length) {
                    var j = l,
                        g = g[0];
                    return b.$watch(function (b) {
                        var c = g(b);
                        l(c, j) || (h = e(b, void 0, void 0, [c]), j = c && Fc(c));
                        return h
                    }, c, d, f)
                }
                for (var k = [], m = [], n = 0, s = g.length; n < s; n++) k[n] = l, m[n] = null;
                return b.$watch(function (b) {
                    for (var c = !1, d = 0, f = g.length; d < f; d++) {
                        var j = g[d](b);
                        if (c || (c = !l(j, k[d]))) m[d] = j, k[d] = j && Fc(j)
                    }
                    c &&
                        (h = e(b, void 0, void 0, m));
                    return h
                }, c, d, f)
            }

            function m(b, c, d, e) {
                var f, g;
                return f = b.$watch(function (b) {
                    return e(b)
                }, function (b, d, e) {
                    g = b;
                    A(c) && c.apply(this, arguments);
                    r(b) && e.$$postDigest(function () {
                        r(g) && f()
                    })
                }, d)
            }

            function s(b, c, d, f) {
                function g(b) {
                    var c = !0;
                    e(b, function (b) {
                        r(b) || (c = !1)
                    });
                    return c
                }
                var h, j;
                return h = b.$watch(function (b) {
                    return f(b)
                }, function (b, d, e) {
                    j = b;
                    A(c) && c.call(this, b, d, e);
                    g(b) && e.$$postDigest(function () {
                        g(j) && h()
                    })
                }, d)
            }

            function u(b, c, d, e) {
                var f;
                return f = b.$watch(function (b) {
                    f();
                    return e(b)
                },
                    c, d)
            }

            function p(b, c) {
                if (!c) return b;
                var d = b.$$watchDelegate,
                    e = !1,
                    d = d !== s && d !== m ? function (d, f, g, h) {
                        g = e && h ? h[0] : b(d, f, g, h);
                        return c(g, d, f)
                    } : function (d, e, f, g) {
                        f = b(d, e, f, g);
                        d = c(f, d, e);
                        return r(f) ? d : f
                    };
                b.$$watchDelegate && b.$$watchDelegate !== o ? d.$$watchDelegate = b.$$watchDelegate : c.$stateful || (d.$$watchDelegate = o, e = !b.inputs, d.inputs = b.inputs ? b.inputs : [b]);
                return d
            }
            var t = fc().noUnsafeEval,
                q = {
                    csp: t,
                    expensiveChecks: !1,
                    literals: I(d),
                    isIdentifierStart: A(f) && f,
                    isIdentifierContinue: A(g) && g
                },
                L = {
                    csp: t,
                    expensiveChecks: !0,
                    literals: I(d),
                    isIdentifierStart: A(f) && f,
                    isIdentifierContinue: A(g) && g
                },
                w = !1;
            j.$$runningExpensiveChecks = function () {
                return w
            };
            return j
        }]
    }

    function Yc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, c) {
            return Gc(function (c) {
                b.$evalAsync(c)
            }, c)
        }]
    }

    function wc() {
        this.$get = ["$browser", "$exceptionHandler", function (b, c) {
            return Gc(function (c) {
                b.defer(c)
            }, c)
        }]
    }

    function Gc(b, d) {
        function f() {
            this.$$state = {
                status: 0
            }
        }

        function g(b, c) {
            return function (d) {
                c.call(b, d)
            }
        }

        function h(c) {
            !c.processScheduled && c.pending &&
                (c.processScheduled = !0, b(function () {
                    var b, e, f;
                    f = c.pending;
                    c.processScheduled = !1;
                    c.pending = void 0;
                    for (var g = 0, h = f.length; g < h; ++g) {
                        e = f[g][0];
                        b = f[g][c.status];
                        try {
                            A(b) ? e.resolve(b(c.value)) : 1 === c.status ? e.resolve(c.value) : e.reject(c.value)
                        } catch (j) {
                            e.reject(j), d(j)
                        }
                    }
                }))
        }

        function j() {
            this.promise = new f
        }
        var l = c("$q", TypeError);
        k(f.prototype, {
            then: function (b, c, d) {
                if (s(b) && s(c) && s(d)) return this;
                var e = new j;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([e, b, c, d]);
                0 < this.$$state.status &&
                    h(this.$$state);
                return e.promise
            },
            "catch": function (b) {
                return this.then(null, b)
            },
            "finally": function (b, c) {
                return this.then(function (c) {
                    return n(c, !0, b)
                }, function (c) {
                    return n(c, !1, b)
                }, c)
            }
        });
        k(j.prototype, {
            resolve: function (b) {
                this.promise.$$state.status || (b === this.promise ? this.$$reject(l("qcycle", b)) : this.$$resolve(b))
            },
            $$resolve: function (b) {
                function c(b) {
                    k || (k = !0, j.$$resolve(b))
                }

                function e(b) {
                    k || (k = !0, j.$$reject(b))
                }
                var f, j = this,
                    k = !1;
                try {
                    if (o(b) || A(b)) f = b && b.then;
                    A(f) ? (this.promise.$$state.status = -1,
                        f.call(b, c, e, g(this, this.notify))) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, h(this.promise.$$state))
                } catch (l) {
                    e(l), d(l)
                }
            },
            reject: function (b) {
                this.promise.$$state.status || this.$$reject(b)
            },
            $$reject: function (b) {
                this.promise.$$state.value = b;
                this.promise.$$state.status = 2;
                h(this.promise.$$state)
            },
            notify: function (c) {
                var e = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && e && e.length && b(function () {
                    for (var b, f, g = 0, h = e.length; g < h; g++) {
                        f = e[g][0];
                        b = e[g][3];
                        try {
                            f.notify(A(b) ? b(c) :
                                c)
                        } catch (j) {
                            d(j)
                        }
                    }
                })
            }
        });
        var m = function (b, c) {
            var d = new j;
            c ? d.resolve(b) : d.reject(b);
            return d.promise
        },
            n = function (b, c, d) {
                var e = null;
                try {
                    A(d) && (e = d())
                } catch (f) {
                    return m(f, !1)
                }
                return e && A(e.then) ? e.then(function () {
                    return m(b, c)
                }, function (b) {
                    return m(b, !1)
                }) : m(b, c)
            },
            u = function (b, c, d, e) {
                var f = new j;
                f.resolve(b);
                return f.promise.then(c, d, e)
            },
            p = function (b) {
                if (!A(b)) throw l("norslvr", b);
                var c = new j;
                b(function (b) {
                    c.resolve(b)
                }, function (b) {
                    c.reject(b)
                });
                return c.promise
            };
        p.prototype = f.prototype;
        p.defer = function () {
            var b =
                new j;
            b.resolve = g(b, b.resolve);
            b.reject = g(b, b.reject);
            b.notify = g(b, b.notify);
            return b
        };
        p.reject = function (b) {
            var c = new j;
            c.reject(b);
            return c.promise
        };
        p.when = u;
        p.resolve = u;
        p.all = function (b) {
            var c = new j,
                d = 0,
                f = ia(b) ? [] : {};
            e(b, function (b, e) {
                d++;
                u(b).then(function (b) {
                    f.hasOwnProperty(e) || (f[e] = b, --d || c.resolve(f))
                }, function (b) {
                    f.hasOwnProperty(e) || c.reject(b)
                })
            });
            0 === d && c.resolve(f);
            return c.promise
        };
        return p
    }

    function Hc() {
        this.$get = ["$window", "$timeout", function (b, c) {
            var d = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                e = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                f = !!d,
                g = f ? function (b) {
                    var c = d(b);
                    return function () {
                        e(c)
                    }
                } : function (b) {
                    var d = c(b, 16.66, !1);
                    return function () {
                        c.cancel(d)
                    }
                };
            g.supported = f;
            return g
        }]
    }

    function Xb() {
        function b(c) {
            function d() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++Pc;
                this.$$ChildScope = null
            }
            d.prototype = c;
            return d
        }
        var f = 10,
            g = c("$rootScope"),
            h = null,
            j = null;
        this.digestTtl = function (b) {
            arguments.length && (f = b);
            return f
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (c, k, l) {
            function m(b) {
                b.currentScope.$$destroyed = !0
            }

            function u(b) {
                9 === Qb && (b.$$childHead && u(b.$$childHead), b.$$nextSibling && u(b.$$nextSibling));
                b.$parent = b.$$nextSibling = b.$$prevSibling = b.$$childHead = b.$$childTail = b.$root = b.$$watchers = null
            }

            function p() {
                this.$id = ++Pc;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail =
                    null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function t(b) {
                if (D.$$phase) throw g("inprog", D.$$phase);
                D.$$phase = b
            }

            function q(b, c) {
                do b.$$watchersCount += c; while (b = b.$parent)
            }

            function r(b, c, d) {
                do b.$$listenerCount[d] -= c, 0 === b.$$listenerCount[d] && delete b.$$listenerCount[d]; while (b = b.$parent)
            }

            function L() { }

            function w() {
                for (; v.length;) try {
                    v.shift()()
                } catch (b) {
                    c(b)
                }
                j = null
            }

            function B() {
                null === j && (j = l.defer(function () {
                    D.$apply(w)
                }))
            }
            p.prototype = {
                constructor: p,
                $new: function (c, d) {
                    var e, d = d || this;
                    c ? (e = new p, e.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), e = new this.$$ChildScope);
                    e.$parent = d;
                    e.$$prevSibling = d.$$childTail;
                    d.$$childHead ? (d.$$childTail.$$nextSibling = e, d.$$childTail = e) : d.$$childHead = d.$$childTail = e;
                    (c || d != this) && e.$on("$destroy", m);
                    return e
                },
                $watch: function (b, c, d, e) {
                    var f = k(b);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, c, d, f, b);
                    var g = this,
                        j = g.$$watchers,
                        l = {
                            fn: c,
                            last: L,
                            get: f,
                            exp: e || b,
                            eq: !!d
                        };
                    h = null;
                    A(c) || (l.fn = n);
                    j || (j = g.$$watchers = []);
                    j.unshift(l);
                    q(this, 1);
                    return function () {
                        0 <= F(j, l) && q(g, -1);
                        h = null
                    }
                },
                $watchGroup: function (b, c) {
                    function d() {
                        k = !1;
                        l ? (l = !1, c(g, g, j)) : c(g, f, j)
                    }
                    var f = Array(b.length),
                        g = Array(b.length),
                        h = [],
                        j = this,
                        k = !1,
                        l = !0;
                    if (!b.length) {
                        var o = !0;
                        j.$evalAsync(function () {
                            o && c(g, g, j)
                        });
                        return function () {
                            o = !1
                        }
                    }
                    if (1 === b.length) return this.$watch(b[0], function (b, d, e) {
                        g[0] = b;
                        f[0] = d;
                        c(g, b === d ? g : f, e)
                    });
                    e(b, function (b, c) {
                        var e = j.$watch(b, function (b, e) {
                            g[c] = b;
                            f[c] = e;
                            k || (k = !0, j.$evalAsync(d))
                        });
                        h.push(e)
                    });
                    return function () {
                        for (; h.length;) h.shift()()
                    }
                },
                $watchCollection: function (b, c) {
                    function e(b) {
                        g = b;
                        var c, f, j, k;
                        if (!s(g)) {
                            if (o(g))
                                if (d(g)) {
                                    h !== n && (h = n, t = h.length = 0, m++);
                                    b = g.length;
                                    t !== b && (m++, h.length = t = b);
                                    for (c = 0; c < b; c++) k = h[c], j = g[c], (f = k !== k && j !== j) || k === j || (m++, h[c] = j)
                                } else {
                                    h !== u && (h = u = {}, t = 0, m++);
                                    b = 0;
                                    for (c in g) Gb.call(g, c) && (b++, j = g[c], k = h[c], c in h ? (f = k !== k && j !== j, f || k === j || (m++, h[c] = j)) : (t++, h[c] = j, m++));
                                    if (t > b)
                                        for (c in m++, h) Gb.call(g, c) || (t--, delete h[c])
                                }
                            else h !== g && (h = g, m++);
                            return m
                        }
                    }
                    e.$stateful = !0;
                    var f = this,
                        g, h, j, l = 1 < c.length,
                        m = 0,
                        n = [],
                        u = {},
                        p = !0,
                        t = 0;
                    return this.$watch(k(b, e), function () {
                        p ? (p = !1, c(g, g, f)) : c(g, j, f);
                        if (l)
                            if (o(g))
                                if (d(g)) {
                                    j = Array(g.length);
                                    for (var b = 0; b < g.length; b++) j[b] = g[b]
                                } else
                                    for (b in j = {}, g) Gb.call(g, b) && (j[b] = g[b]);
                            else j = g
                    })
                },
                $digest: function () {
                    var b, d, e, k, o, m, n, s, u = f,
                        p, q = [],
                        r, B;
                    t("$digest");
                    l.$$checkUrlChange();
                    this === D && null !== j && (l.defer.cancel(j), w());
                    h = null;
                    do {
                        s = !1;
                        for (p = this; z.length;) {
                            try {
                                B = z.shift(), B.scope.$eval(B.expression, B.locals)
                            } catch (ha) {
                                c(ha)
                            }
                            h =
                                null
                        }
                        a: do {
                            if (m = p.$$watchers)
                                for (n = m.length; n--;) try {
                                    if (b = m[n])
                                        if (o = b.get, (d = o(p)) !== (e = b.last) && !(b.eq ? N(d, e) : "number" === typeof d && "number" === typeof e && isNaN(d) && isNaN(e))) s = !0, h = b, b.last = b.eq ? I(d, null) : d, k = b.fn, k(d, e === L ? d : e, p), 5 > u && (r = 4 - u, q[r] || (q[r] = []), q[r].push({
                                            msg: A(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                                            newVal: d,
                                            oldVal: e
                                        }));
                                        else if (b === h) {
                                            s = !1;
                                            break a
                                        }
                                } catch (v) {
                                    c(v)
                                }
                            if (!(m = p.$$watchersCount && p.$$childHead || p !== this && p.$$nextSibling))
                                for (; p !== this && !(m = p.$$nextSibling) ;) p = p.$parent
                        } while (p =
                            m);
                        if ((s || z.length) && !u--) throw D.$$phase = null, g("infdig", f, q);
                    } while (s || z.length);
                    for (D.$$phase = null; O.length;) try {
                        O.shift()()
                    } catch (E) {
                        c(E)
                    }
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var b = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === D && l.$$applicationDestroyed();
                        q(this, -this.$$watchersCount);
                        for (var c in this.$$listenerCount) r(this, this.$$listenerCount[c], c);
                        b && b.$$childHead == this && (b.$$childHead = this.$$nextSibling);
                        b && b.$$childTail == this && (b.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = n;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return n
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        u(this)
                    }
                },
                $eval: function (b, c) {
                    return k(b)(this, c)
                },
                $evalAsync: function (b, c) {
                    D.$$phase || z.length || l.defer(function () {
                        z.length && D.$digest()
                    });
                    z.push({
                        scope: this,
                        expression: k(b),
                        locals: c
                    })
                },
                $$postDigest: function (b) {
                    O.push(b)
                },
                $apply: function (b) {
                    try {
                        t("$apply");
                        try {
                            return this.$eval(b)
                        } finally {
                            D.$$phase = null
                        }
                    } catch (d) {
                        c(d)
                    } finally {
                        try {
                            D.$digest()
                        } catch (e) {
                            throw c(e), e;
                        }
                    }
                },
                $applyAsync: function (b) {
                    function c() {
                        d.$eval(b)
                    }
                    var d = this;
                    b && v.push(c);
                    b = k(b);
                    B()
                },
                $on: function (b, c) {
                    var d = this.$$listeners[b];
                    d || (this.$$listeners[b] = d = []);
                    d.push(c);
                    var e = this;
                    do e.$$listenerCount[b] || (e.$$listenerCount[b] = 0), e.$$listenerCount[b]++; while (e = e.$parent);
                    var f = this;
                    return function () {
                        var e = d.indexOf(c); -
                        1 !== e && (d[e] = null, r(f, 1, b))
                    }
                },
                $emit: function (b, d) {
                    var e = [],
                        f, g = this,
                        h = !1,
                        j = {
                            name: b,
                            targetScope: g,
                            stopPropagation: function () {
                                h = !0
                            },
                            preventDefault: function () {
                                j.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = [j].concat(lb.call(arguments, 1)),
                        l, o;
                    do {
                        f = g.$$listeners[b] || e;
                        j.currentScope = g;
                        l = 0;
                        for (o = f.length; l < o; l++)
                            if (f[l]) try {
                                f[l].apply(null, k)
                            } catch (m) {
                                c(m)
                            } else f.splice(l, 1), l--, o--;
                        if (h) return j.currentScope = null, j;
                        g = g.$parent
                    } while (g);
                    j.currentScope = null;
                    return j
                },
                $broadcast: function (b, d) {
                    var e = this,
                        f = this,
                        g = {
                            name: b,
                            targetScope: this,
                            preventDefault: function () {
                                g.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[b]) return g;
                    for (var h = [g].concat(lb.call(arguments, 1)), j, k; e = f;) {
                        g.currentScope = e;
                        f = e.$$listeners[b] || [];
                        j = 0;
                        for (k = f.length; j < k; j++)
                            if (f[j]) try {
                                f[j].apply(null, h)
                            } catch (l) {
                                c(l)
                            } else f.splice(j, 1), j--, k--;
                        if (!(f = e.$$listenerCount[b] && e.$$childHead || e !== this && e.$$nextSibling))
                            for (; e !== this && !(f = e.$$nextSibling) ;) e = e.$parent
                    }
                    g.currentScope = null;
                    return g
                }
            };
            var D = new p,
                z = D.$$asyncQueue = [],
                O = D.$$postDigestQueue = [],
                v = D.$$applyAsyncQueue = [];
            return D
        }]
    }

    function pd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            c = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (c) {
            return r(c) ? (b = c, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return r(b) ? (c = b, this) : c
        };
        this.$get = function () {
            return function (d, e) {
                var f = e ? c : b,
                    g;
                g = wb(d).href;
                return "" === g || g.match(f) ? d : "unsafe:" + g
            }
        }
    }

    function gd(b) {
        if ("self" === b) return b;
        if (u(b)) {
            if (-1 < b.indexOf("***")) throw Zb("iwcard",
                b);
            b = Ld(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$")
        }
        if (C(b)) return RegExp("^" + b.source + "$");
        throw Zb("imatcher");
    }

    function Ic(b) {
        var c = [];
        r(b) && e(b, function (b) {
            c.push(gd(b))
        });
        return c
    }

    function qd() {
        this.SCE_CONTEXTS = Eb;
        var b = ["self"],
            c = [];
        this.resourceUrlWhitelist = function (c) {
            arguments.length && (b = Ic(c));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (c = Ic(b));
            return c
        };
        this.$get = ["$injector", function (d) {
            function e(b) {
                var c = function (b) {
                    this.$$unwrapTrustedValue =
                        function () {
                            return b
                        }
                };
                b && (c.prototype = new b);
                c.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                c.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return c
            }
            var f = function () {
                throw Zb("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(),
                h = {};
            h[Eb.HTML] = e(g);
            h[Eb.CSS] = e(g);
            h[Eb.URL] = e(g);
            h[Eb.JS] = e(g);
            h[Eb.RESOURCE_URL] = e(h[Eb.URL]);
            return {
                trustAs: function (b, c) {
                    var d = h.hasOwnProperty(b) ? h[b] : null;
                    if (!d) throw Zb("icontext", b, c);
                    if (null === c || s(c) ||
                        "" === c) return c;
                    if ("string" !== typeof c) throw Zb("itype", b);
                    return new d(c)
                },
                getTrusted: function (d, e) {
                    if (null === e || s(e) || "" === e) return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (d === Eb.RESOURCE_URL) {
                        var g = wb(e.toString()),
                            j, k, l = !1;
                        j = 0;
                        for (k = b.length; j < k; j++)
                            if ("self" === b[j] ? rc(g) : b[j].exec(g.href)) {
                                l = !0;
                                break
                            }
                        if (l) {
                            j = 0;
                            for (k = c.length; j < k; j++)
                                if ("self" === c[j] ? rc(g) : c[j].exec(g.href)) {
                                    l = !1;
                                    break
                                }
                        }
                        if (l) return e;
                        throw Zb("insecurl", e.toString());
                    }
                    if (d ===
                        Eb.HTML) return f(e);
                    throw Zb("unsafe");
                },
                valueOf: function (b) {
                    return b instanceof g ? b.$$unwrapTrustedValue() : b
                }
            }
        }]
    }

    function rd() {
        var b = !0;
        this.enabled = function (c) {
            arguments.length && (b = !!c);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function (c, d) {
            if (b && 8 > Qb) throw Zb("iequirks");
            var f = J(Eb);
            f.isEnabled = function () {
                return b
            };
            f.trustAs = d.trustAs;
            f.getTrusted = d.getTrusted;
            f.valueOf = d.valueOf;
            b || (f.trustAs = f.getTrusted = function (b, c) {
                return c
            }, f.valueOf = q);
            f.parseAs = function (b, d) {
                var e = c(d);
                return e.literal &&
                    e.constant ? e : c(d, function (c) {
                        return f.getTrusted(b, c)
                    })
            };
            var g = f.parseAs,
                h = f.getTrusted,
                j = f.trustAs;
            e(Eb, function (b, c) {
                var d = wa(c);
                f[v("parse_as_" + d)] = function (c) {
                    return g(b, c)
                };
                f[v("get_trusted_" + d)] = function (c) {
                    return h(b, c)
                };
                f[v("trust_as_" + d)] = function (c) {
                    return j(b, c)
                }
            });
            return f
        }]
    }

    function sd() {
        this.$get = ["$window", "$document", function (b, c) {
            var d = {},
                e = !(b.chrome && b.chrome.app && b.chrome.app.runtime) && b.history && b.history.pushState,
                f = m((/android (\d+)/.exec(wa((b.navigator || {}).userAgent)) || [])[1]),
                g = /Boxee/i.test((b.navigator || {}).userAgent),
                h = c[0] || {},
                j, k = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = h.body && h.body.style,
                o = !1,
                n = !1;
            if (l) {
                for (var p in l)
                    if (o = k.exec(p)) {
                        j = o[0];
                        j = j.substr(0, 1).toUpperCase() + j.substr(1);
                        break
                    }
                j || (j = "WebkitOpacity" in l && "webkit");
                o = !!("transition" in l || j + "Transition" in l);
                n = !!("animation" in l || j + "Animation" in l);
                !f || o && n || (o = u(l.webkitTransition), n = u(l.webkitAnimation))
            }
            return {
                history: !(!e || 4 > f || g),
                hasEvent: function (b) {
                    if ("input" === b && 11 >= Qb) return !1;
                    if (s(d[b])) {
                        var c = h.createElement("div");
                        d[b] = "on" + b in c
                    }
                    return d[b]
                },
                csp: fc(),
                vendorPrefix: j,
                transitions: o,
                animations: n,
                android: f
            }
        }]
    }

    function pc() {
        var b;
        this.httpOptions = function (c) {
            return c ? (b = c, this) : b
        };
        this.$get = ["$templateCache", "$http", "$q", "$sce", function (c, d, e, f) {
            function g(h, j) {
                g.totalPendingRequests++;
                u(h) && c.get(h) || (h = f.getTrustedResourceUrl(h));
                var l = d.defaults && d.defaults.transformResponse;
                ia(l) ? l = l.filter(function (b) {
                    return b !== Za
                }) : l === Za && (l = null);
                return d.get(h, k({
                    cache: c,
                    transformResponse: l
                }, b))["finally"](function () {
                    g.totalPendingRequests--
                }).then(function (b) {
                    c.put(h,
                        b.data);
                    return b.data
                }, function (b) {
                    if (!j) throw Rf("tpload", h, b.status, b.statusText);
                    return e.reject(b)
                })
            }
            g.totalPendingRequests = 0;
            return g
        }]
    }

    function qc() {
        this.$get = ["$rootScope", "$browser", "$location", function (b, c, d) {
            return {
                findBindings: function (b, c, d) {
                    var b = b.getElementsByClassName("ng-binding"),
                        f = [];
                    e(b, function (b) {
                        var g = mb.element(b).data("$binding");
                        g && e(g, function (e) {
                            d ? RegExp("(^|\\s)" + Ld(c) + "(\\s|\\||$)").test(e) && f.push(b) : -1 != e.indexOf(c) && f.push(b)
                        })
                    });
                    return f
                },
                findModels: function (b, c,
                    d) {
                    for (var e = ["ng-", "data-ng-", "ng\\:"], f = 0; f < e.length; ++f) {
                        var g = b.querySelectorAll("[" + e[f] + "model" + (d ? "=" : "*=") + '"' + c + '"]');
                        if (g.length) return g
                    }
                },
                getLocation: function () {
                    return d.url()
                },
                setLocation: function (c) {
                    c !== d.url() && (d.url(c), b.$digest())
                },
                whenStable: function (b) {
                    c.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function Zc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, c, d, e, f) {
            function g(j, k, l) {
                A(j) || (l = k, k = j, j = n);
                var o = lb.call(arguments, 3),
                    m = r(l) && !l,
                    s = (m ? e : d).defer(),
                    u = s.promise,
                    p;
                p = c.defer(function () {
                    try {
                        s.resolve(j.apply(null, o))
                    } catch (c) {
                        s.reject(c), f(c)
                    } finally {
                        delete h[u.$$timeoutId]
                    }
                    m || b.$apply()
                }, k);
                u.$$timeoutId = p;
                h[p] = s;
                return u
            }
            var h = {};
            g.cancel = function (b) {
                return b && b.$$timeoutId in h ? (h[b.$$timeoutId].reject("canceled"), delete h[b.$$timeoutId], c.defer.cancel(b.$$timeoutId)) : !1
            };
            return g
        }]
    }

    function wb(b) {
        Qb && (Ua.setAttribute("href", b), b = Ua.href);
        Ua.setAttribute("href", b);
        return {
            href: Ua.href,
            protocol: Ua.protocol ? Ua.protocol.replace(/:$/, "") : "",
            host: Ua.host,
            search: Ua.search ? Ua.search.replace(/^\?/, "") : "",
            hash: Ua.hash ? Ua.hash.replace(/^#/, "") : "",
            hostname: Ua.hostname,
            port: Ua.port,
            pathname: "/" === Ua.pathname.charAt(0) ? Ua.pathname : "/" + Ua.pathname
        }
    }

    function rc(b) {
        b = u(b) ? wb(b) : b;
        return b.protocol === de.protocol && b.host === de.host
    }

    function td() {
        this.$get = p(b)
    }

    function $c(b) {
        function c(b) {
            try {
                return decodeURIComponent(b)
            } catch (d) {
                return b
            }
        }
        var d = b[0] || {},
            e = {},
            f = "";
        return function () {
            var b, g, h, j, k;
            b = d.cookie || "";
            if (b !== f) {
                f = b;
                b = f.split("; ");
                e = {};
                for (h = 0; h < b.length; h++) g =
                    b[h], j = g.indexOf("="), 0 < j && (k = c(g.substring(0, j)), s(e[k]) && (e[k] = c(g.substring(j + 1))))
            }
            return e
        }
    }

    function pe() {
        this.$get = $c
    }

    function Bd(b) {
        function c(d, f) {
            if (o(d)) {
                var g = {};
                e(d, function (b, d) {
                    g[d] = c(d, b)
                });
                return g
            }
            return b.factory(d + "Filter", f)
        }
        this.register = c;
        this.$get = ["$injector", function (b) {
            return function (c) {
                return b.get(c + "Filter")
            }
        }];
        c("currency", Cd);
        c("date", Od);
        c("filter", qe);
        c("json", Je);
        c("limitTo", Le);
        c("lowercase", Sf);
        c("number", Dd);
        c("orderBy", Md);
        c("uppercase", Tf)
    }

    function qe() {
        return function (b,
            e, f) {
            if (!d(b)) {
                if (null == b) return b;
                throw c("filter")("notarray", b);
            }
            var g;
            switch (fd(e)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    g = !0;
                case "object":
                    e = re(e, f, g);
                    break;
                default:
                    return b
            }
            return Array.prototype.filter.call(b, e)
        }
    }

    function re(b, c, d) {
        var e = o(b) && "$" in b;
        !0 === c ? c = N : A(c) || (c = function (b, c) {
            if (s(b)) return !1;
            if (null === b || null === c) return b === c;
            if (o(c) || o(b) && !(A(b.toString) && b.toString !== ab)) return !1;
            b = wa("" + b);
            c = wa("" + c);
            return -1 !== b.indexOf(c)
        });
        return function (f) {
            return e &&
                !o(f) ? Lb(f, b.$, c, !1) : Lb(f, b, c, d)
        }
    }

    function Lb(b, c, d, e, f) {
        var g = fd(b),
            h = fd(c);
        if ("string" === h && "!" === c.charAt(0)) return !Lb(b, c.substring(1), d, e);
        if (ia(b)) return b.some(function (b) {
            return Lb(b, c, d, e)
        });
        switch (g) {
            case "object":
                var j;
                if (e) {
                    for (j in b)
                        if ("$" !== j.charAt(0) && Lb(b[j], c, d, !0)) return !0;
                    return f ? !1 : Lb(b, c, d, !1)
                }
                if ("object" === h) {
                    for (j in c)
                        if (f = c[j], !A(f) && !s(f) && (g = "$" === j, !Lb(g ? b : b[j], f, d, g, g))) return !1;
                    return !0
                }
                return d(b, c);
            case "function":
                return !1;
            default:
                return d(b, c)
        }
    }

    function fd(b) {
        return null ===
            b ? "null" : typeof b
    }

    function Cd(b) {
        var c = b.NUMBER_FORMATS;
        return function (b, d, e) {
            s(d) && (d = c.CURRENCY_SYM);
            s(e) && (e = c.PATTERNS[1].maxFrac);
            return null == b ? b : Ed(b, c.PATTERNS[1], c.GROUP_SEP, c.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function Dd(b) {
        var c = b.NUMBER_FORMATS;
        return function (b, d) {
            return null == b ? b : Ed(b, c.PATTERNS[0], c.GROUP_SEP, c.DECIMAL_SEP, d)
        }
    }

    function se(b) {
        var c = 0,
            d, e, f, g, h; -1 < (e = b.indexOf(ee)) && (b = b.replace(ee, ""));
        0 < (f = b.search(/e/i)) ? (0 > e && (e = f), e += +b.slice(f + 1), b = b.substring(0, f)) : 0 > e && (e =
            b.length);
        for (f = 0; b.charAt(f) == zd; f++);
        if (f == (h = b.length)) d = [0], e = 1;
        else {
            for (h--; b.charAt(h) == zd;) h--;
            e -= f;
            d = [];
            for (g = 0; f <= h; f++, g++) d[g] = +b.charAt(f)
        }
        e > fe && (d = d.splice(0, fe - 1), c = e - 1, e = 1);
        return {
            d: d,
            e: c,
            i: e
        }
    }

    function te(b, c, d, e) {
        var f = b.d,
            g = f.length - b.i,
            c = s(c) ? Math.min(Math.max(d, g), e) : +c,
            d = c + b.i,
            e = f[d];
        if (0 < d) {
            f.splice(Math.max(b.i, d));
            for (var h = d; h < f.length; h++) f[h] = 0
        } else {
            g = Math.max(0, g);
            b.i = 1;
            f.length = Math.max(1, d = c + 1);
            f[0] = 0;
            for (h = 1; h < d; h++) f[h] = 0
        }
        if (5 <= e)
            if (0 > d - 1) {
                for (e = 0; e > d; e--) f.unshift(0),
                    b.i++;
                f.unshift(1);
                b.i++
            } else f[d - 1]++;
        for (; g < Math.max(0, c) ; g++) f.push(0);
        if (c = f.reduceRight(function (b, c, d, e) {
                c += b;
                e[d] = c % 10;
                return Math.floor(c / 10)
        }, 0)) f.unshift(c), b.i++
    }

    function Ed(b, c, d, e, f) {
        if (!u(b) && !w(b) || isNaN(b)) return "";
        var g = !isFinite(b),
            h = !1,
            j = Math.abs(b) + "",
            k = "";
        if (g) k = "\u221e";
        else {
            h = se(j);
            te(h, f, c.minFrac, c.maxFrac);
            k = h.d;
            j = h.i;
            f = h.e;
            g = [];
            for (h = k.reduce(function (b, c) {
                    return b && !c
            }, !0) ; 0 > j;) k.unshift(0), j++;
            0 < j ? g = k.splice(j) : (g = k, k = [0]);
            j = [];
            for (k.length >= c.lgSize && j.unshift(k.splice(-c.lgSize).join("")) ; k.length >
                c.gSize;) j.unshift(k.splice(-c.gSize).join(""));
            k.length && j.unshift(k.join(""));
            k = j.join(d);
            g.length && (k += e + g.join(""));
            f && (k += "e+" + f)
        }
        return 0 > b && !h ? c.negPre + k + c.negSuf : c.posPre + k + c.posSuf
    }

    function jc(b, c, d, e) {
        var f = "";
        if (0 > b || e && 0 >= b) e ? b = -b + 1 : (b = -b, f = "-");
        for (b = "" + b; b.length < c;) b = zd + b;
        d && (b = b.substr(b.length - c));
        return f + b
    }

    function Oa(b, c, d, e, f) {
        d = d || 0;
        return function (g) {
            g = g["get" + b]();
            if (0 < d || g > -d) g += d;
            0 === g && -12 == d && (g = 12);
            return jc(g, c, e, f)
        }
    }

    function uc(b, c, d) {
        return function (e, f) {
            var g = e["get" +
                    b](),
                h = Oc((d ? "STANDALONE" : "") + (c ? "SHORT" : "") + b);
            return f[h][g]
        }
    }

    function Fd(b) {
        var c = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= c ? 5 : 12) - c)
    }

    function Gd(b) {
        return function (c) {
            var d = Fd(c.getFullYear()),
                c = +new Date(c.getFullYear(), c.getMonth(), c.getDate() + (4 - c.getDay())) - +d,
                c = 1 + Math.round(c / 6048E5);
            return jc(c, b)
        }
    }

    function kd(b, c) {
        return 0 >= b.getFullYear() ? c.ERAS[0] : c.ERAS[1]
    }

    function Od(b) {
        function c(b) {
            var e;
            if (e = b.match(d)) {
                var b = new Date(0),
                    f = 0,
                    g = 0,
                    h = e[8] ? b.setUTCFullYear : b.setFullYear,
                    j =
                    e[8] ? b.setUTCHours : b.setHours;
                e[9] && (f = m(e[9] + e[10]), g = m(e[9] + e[11]));
                h.call(b, m(e[1]), m(e[2]) - 1, m(e[3]));
                f = m(e[4] || 0) - f;
                g = m(e[5] || 0) - g;
                h = m(e[6] || 0);
                e = Math.round(1E3 * parseFloat("0." + (e[7] || 0)));
                j.call(b, f, g, h, e)
            }
            return b
        }
        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (d, f, g) {
            var h = "",
                j = [],
                k, l, f = f || "mediumDate",
                f = b.DATETIME_FORMATS[f] || f;
            u(d) && (d = Uf.test(d) ? m(d) : c(d));
            w(d) && (d = new Date(d));
            if (!z(d) || !isFinite(d.getTime())) return d;
            for (; f;) (l = Vf.exec(f)) ? (j = j.concat(lb.call(l, 1)), f = j.pop()) : (j.push(f), f = null);
            var o = d.getTimezoneOffset();
            g && (o = Z(g, o), d = O(d, g, !0));
            e(j, function (c) {
                k = Wf[c];
                h += k ? k(d, b.DATETIME_FORMATS, o) : "''" === c ? "'" : c.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return h
        }
    }

    function Je() {
        return function (b, c) {
            s(c) && (c = 2);
            return B(b, c)
        }
    }

    function Le() {
        return function (b, c, d) {
            c = Infinity === Math.abs(Number(c)) ? Number(c) : m(c);
            if (isNaN(c)) return b;
            w(b) && (b = b.toString());
            if (!ia(b) && !u(b)) return b;
            d = !d || isNaN(d) ? 0 : m(d);
            d = 0 > d ?
                Math.max(0, b.length + d) : d;
            return 0 <= c ? b.slice(d, d + c) : 0 === d ? b.slice(c, b.length) : b.slice(Math.max(0, d + c), d)
        }
    }

    function Md(b) {
        function e(c, d) {
            d = d ? -1 : 1;
            return c.map(function (c) {
                var e = 1,
                    f = q;
                if (A(c)) f = c;
                else if (u(c)) {
                    if ("+" == c.charAt(0) || "-" == c.charAt(0)) e = "-" == c.charAt(0) ? -1 : 1, c = c.substring(1);
                    if ("" !== c && (f = b(c), f.constant)) var g = f(),
                        f = function (b) {
                            return b[g]
                        }
                }
                return {
                    get: f,
                    descending: e * d
                }
            })
        }

        function f(b) {
            switch (typeof b) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }
        return function (b,
            g, h) {
            if (null == b) return b;
            if (!d(b)) throw c("orderBy")("notarray", b);
            ia(g) || (g = [g]);
            0 === g.length && (g = ["+"]);
            var j = e(g, h);
            j.push({
                get: function () {
                    return {}
                },
                descending: h ? -1 : 1
            });
            b = Array.prototype.map.call(b, function (b, c) {
                return {
                    value: b,
                    predicateValues: j.map(function (d) {
                        var e = d.get(b),
                            d = typeof e;
                        if (null === e) d = "string", e = "null";
                        else if ("string" === d) e = e.toLowerCase();
                        else if ("object" === d && !("function" === typeof e.valueOf && (e = e.valueOf(), f(e))))
                            if (!(A(e.toString) && e.toString !== ab) || !(e = e.toString(), f(e))) e =
                                c;
                        return {
                            value: e,
                            type: d
                        }
                    })
                }
            });
            b.sort(function (b, c) {
                for (var d = 0, e = 0, f = j.length; e < f; ++e) {
                    var d = b.predicateValues[e],
                        g = c.predicateValues[e],
                        h = 0;
                    d.type === g.type ? d.value !== g.value && (h = d.value < g.value ? -1 : 1) : h = d.type < g.type ? -1 : 1;
                    if (d = h * j[e].descending) break
                }
                return d
            });
            return b = b.map(function (b) {
                return b.value
            })
        }
    }

    function ec(b) {
        A(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return p(b)
    }

    function Rd(b, c, d, f, g) {
        var h = this,
            j = [];
        h.$error = {};
        h.$$success = {};
        h.$pending = void 0;
        h.$name = g(c.name || c.ngForm || "")(d);
        h.$dirty = !1;
        h.$pristine = !0;
        h.$valid = !0;
        h.$invalid = !1;
        h.$submitted = !1;
        h.$$parentForm = cd;
        h.$rollbackViewValue = function () {
            e(j, function (b) {
                b.$rollbackViewValue()
            })
        };
        h.$commitViewValue = function () {
            e(j, function (b) {
                b.$commitViewValue()
            })
        };
        h.$addControl = function (b) {
            sa(b.$name, "input");
            j.push(b);
            b.$name && (h[b.$name] = b);
            b.$$parentForm = h
        };
        h.$$renameControl = function (b, c) {
            var d = b.$name;
            h[d] === b && delete h[d];
            h[c] = b;
            b.$name = c
        };
        h.$removeControl = function (b) {
            b.$name && h[b.$name] === b && delete h[b.$name];
            e(h.$pending, function (c,
                d) {
                h.$setValidity(d, null, b)
            });
            e(h.$error, function (c, d) {
                h.$setValidity(d, null, b)
            });
            e(h.$$success, function (c, d) {
                h.$setValidity(d, null, b)
            });
            F(j, b);
            b.$$parentForm = cd
        };
        Kd({
            ctrl: this,
            $element: b,
            set: function (b, c, d) {
                var e = b[c];
                e ? -1 === e.indexOf(d) && e.push(d) : b[c] = [d]
            },
            unset: function (b, c, d) {
                var e = b[c];
                e && (F(e, d), 0 === e.length && delete b[c])
            },
            $animate: f
        });
        h.$setDirty = function () {
            f.removeClass(b, tc);
            f.addClass(b, dd);
            h.$dirty = !0;
            h.$pristine = !1;
            h.$$parentForm.$setDirty()
        };
        h.$setPristine = function () {
            f.setClass(b, tc,
                dd + " ng-submitted");
            h.$dirty = !1;
            h.$pristine = !0;
            h.$submitted = !1;
            e(j, function (b) {
                b.$setPristine()
            })
        };
        h.$setUntouched = function () {
            e(j, function (b) {
                b.$setUntouched()
            })
        };
        h.$setSubmitted = function () {
            f.addClass(b, "ng-submitted");
            h.$submitted = !0;
            h.$$parentForm.$setSubmitted()
        }
    }

    function md(b) {
        b.$formatters.push(function (c) {
            return b.$isEmpty(c) ? c : c.toString()
        })
    }

    function xc(b, c, d, e, f, g) {
        var h = wa(c[0].type);
        if (!f.android) {
            var j = !1;
            c.on("compositionstart", function () {
                j = !0
            });
            c.on("compositionend", function () {
                j = !1;
                l()
            })
        }
        var k,
            l = function (b) {
                k && (g.defer.cancel(k), k = null);
                if (!j) {
                    var f = c.val(),
                        b = b && b.type;
                    "password" === h || d.ngTrim && "false" === d.ngTrim || (f = ya(f));
                    (e.$viewValue !== f || "" === f && e.$$hasNativeValidators) && e.$setViewValue(f, b)
                }
            };
        if (f.hasEvent("input")) c.on("input", l);
        else {
            var o = function (b, c, d) {
                k || (k = g.defer(function () {
                    k = null;
                    c && c.value === d || l(b)
                }))
            };
            c.on("keydown", function (b) {
                var c = b.keyCode;
                91 === c || 15 < c && 19 > c || 37 <= c && 40 >= c || o(b, this, this.value)
            });
            if (f.hasEvent("paste")) c.on("paste cut", o)
        }
        c.on("change", l);
        if (ge[h] &&
            e.$$hasNativeValidators && h === d.type) c.on("keydown wheel mousedown", function (b) {
                if (!k) {
                    var c = this.validity,
                        d = c.badInput,
                        e = c.typeMismatch;
                    k = g.defer(function () {
                        k = null;
                        c.badInput === d && c.typeMismatch === e || l(b)
                    })
                }
            });
        e.$render = function () {
            var b = e.$isEmpty(e.$viewValue) ? "" : e.$viewValue;
            c.val() !== b && c.val(b)
        }
    }

    function Nc(b, c) {
        return function (d, f) {
            var g, h;
            if (z(d)) return d;
            if (u(d)) {
                '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (Xf.test(d)) return new Date(d);
                b.lastIndex = 0;
                if (g = b.exec(d)) return g.shift(),
                    h = f ? {
                        yyyy: f.getFullYear(),
                        MM: f.getMonth() + 1,
                        dd: f.getDate(),
                        HH: f.getHours(),
                        mm: f.getMinutes(),
                        ss: f.getSeconds(),
                        sss: f.getMilliseconds() / 1E3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, e(g, function (b, d) {
                        d < c.length && (h[c[d]] = +b)
                    }), new Date(h.yyyy, h.MM - 1, h.dd, h.HH, h.mm, h.ss || 0, 1E3 * h.sss || 0)
            }
            return NaN
        }
    }

    function zc(b, c, d, e) {
        return function (f, g, h, j, k, l, o) {
            function m(b) {
                return b && !(b.getTime && b.getTime() !== b.getTime())
            }
            Pd(f, g, h, j);
            xc(f, g, h, j, k, l);
            var n = j && j.$options && j.$options.timezone,
                u;
            j.$$parserName =
                b;
            j.$parsers.push(function (b) {
                if (j.$isEmpty(b)) return null;
                if (c.test(b)) return b = d(b, u), n && (b = O(b, n)), b
            });
            j.$formatters.push(function (b) {
                if (b && !z(b)) throw Jc("datefmt", b);
                if (m(b)) return (u = b) && n && (u = O(u, n, !0)), o("date")(b, e, n);
                u = null;
                return ""
            });
            if (r(h.min) || h.ngMin) {
                var p;
                j.$validators.min = function (b) {
                    return !m(b) || s(p) || d(b) >= p
                };
                h.$observe("min", function (b) {
                    p = r(b) && !z(b) ? d(b) || void 0 : b;
                    j.$validate()
                })
            }
            if (r(h.max) || h.ngMax) {
                var t;
                j.$validators.max = function (b) {
                    return !m(b) || s(t) || d(b) <= t
                };
                h.$observe("max",
                    function (b) {
                        t = r(b) && !z(b) ? d(b) || void 0 : b;
                        j.$validate()
                    })
            }
        }
    }

    function Pd(b, c, d, e) {
        (e.$$hasNativeValidators = o(c[0].validity)) && e.$parsers.push(function (b) {
            var d = c.prop("validity") || {};
            return d.badInput || d.typeMismatch ? void 0 : b
        })
    }

    function Sd(b, c, d, e, f) {
        if (r(e)) {
            b = b(e);
            if (!b.constant) throw Jc("constexpr", d, e);
            return b(c)
        }
        return f
    }

    function nd(b, c) {
        b = "ngClass" + b;
        return ["$animate", function (d) {
            function f(b, c) {
                var d = [],
                    e = 0;
                a: for (; e < b.length; e++) {
                    for (var g = b[e], h = 0; h < c.length; h++)
                        if (g == c[h]) continue a;
                    d.push(g)
                }
                return d
            }

            function g(b) {
                var c = [];
                return ia(b) ? (e(b, function (b) {
                    c = c.concat(g(b))
                }), c) : u(b) ? b.split(" ") : o(b) ? (e(b, function (b, d) {
                    b && (c = c.concat(d.split(" ")))
                }), c) : b
            }
            return {
                restrict: "AC",
                link: function (h, j, k) {
                    function l(b) {
                        b = o(b, 1);
                        k.$addClass(b)
                    }

                    function o(b, c) {
                        var d = j.data("$classCounts") || W(),
                            f = [];
                        e(b, function (b) {
                            if (0 < c || d[b]) d[b] = (d[b] || 0) + c, d[b] === +(0 < c) && f.push(b)
                        });
                        j.data("$classCounts", d);
                        return f.join(" ")
                    }

                    function m(b, c) {
                        var e = f(c, b),
                            g = f(b, c),
                            e = o(e, 1),
                            g = o(g, -1);
                        e && e.length && d.addClass(j, e);
                        g && g.length &&
                            d.removeClass(j, g)
                    }

                    function n(b) {
                        if (!0 === c || h.$index % 2 === c) {
                            var d = g(b || []);
                            if (s) {
                                if (!N(b, s)) {
                                    var e = g(s);
                                    m(e, d)
                                }
                            } else l(d)
                        }
                        s = ia(b) ? b.map(function (b) {
                            return J(b)
                        }) : J(b)
                    }
                    var s;
                    h.$watch(k[b], n, !0);
                    k.$observe("class", function () {
                        n(h.$eval(k[b]))
                    });
                    "ngClass" !== b && h.$watch("$index", function (d, e) {
                        var f = d & 1;
                        if (f !== (e & 1)) {
                            var j = g(h.$eval(k[b]));
                            f === c ? l(j) : (f = o(j, -1), k.$removeClass(f))
                        }
                    })
                }
            }
        }]
    }

    function Kd(b) {
        function c(b, d) {
            d && !g[b] ? (k.addClass(f, b), g[b] = !0) : !d && g[b] && (k.removeClass(f, b), g[b] = !1)
        }

        function d(b,
            e) {
            b = b ? "-" + pa(b, "-") : "";
            c(Kc + b, !0 === e);
            c(he + b, !1 === e)
        }
        var e = b.ctrl,
            f = b.$element,
            g = {},
            h = b.set,
            j = b.unset,
            k = b.$animate;
        g[he] = !(g[Kc] = f.hasClass(Kc));
        e.$setValidity = function (b, f, g) {
            s(f) ? (e.$pending || (e.$pending = {}), h(e.$pending, b, g)) : (e.$pending && j(e.$pending, b, g), Jd(e.$pending) && (e.$pending = void 0));
            K(f) ? f ? (j(e.$error, b, g), h(e.$$success, b, g)) : (h(e.$error, b, g), j(e.$$success, b, g)) : (j(e.$error, b, g), j(e.$$success, b, g));
            e.$pending ? (c(ie, !0), e.$valid = e.$invalid = void 0, d("", null)) : (c(ie, !1), e.$valid = Jd(e.$error),
                e.$invalid = !e.$valid, d("", e.$valid));
            f = e.$pending && e.$pending[b] ? void 0 : e.$error[b] ? !1 : e.$$success[b] ? !0 : null;
            d(b, f);
            e.$$parentForm.$setValidity(b, f, e)
        }
    }

    function Jd(b) {
        if (b)
            for (var c in b)
                if (b.hasOwnProperty(c)) return !1;
        return !0
    }
    var Me = /^\/(.+)\/([a-z]*)$/,
        Gb = Object.prototype.hasOwnProperty,
        wa = function (b) {
            return u(b) ? b.toLowerCase() : b
        },
        Oc = function (b) {
            return u(b) ? b.toUpperCase() : b
        },
        Qb, ca, Pb, lb = [].slice,
        Ce = [].splice,
        Be = [].push,
        ab = Object.prototype.toString,
        Td = Object.getPrototypeOf,
        dc = c("ng"),
        mb = b.angular ||
        (b.angular = {}),
        jd, Pc = 0;
    Qb = b.document.documentMode;
    n.$inject = [];
    q.$inject = [];
    var ia = Array.isArray,
        Ke = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        ya = function (b) {
            return u(b) ? b.trim() : b
        },
        Ld = function (b) {
            return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        fc = function () {
            if (!r(fc.rules)) {
                var c = b.document.querySelector("[ng-csp]") || b.document.querySelector("[data-ng-csp]");
                if (c) {
                    var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
                    fc.rules = {
                        noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
                        noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
                    }
                } else {
                    c = fc;
                    try {
                        new Function(""), d = !1
                    } catch (e) {
                        d = !0
                    }
                    c.rules = {
                        noUnsafeEval: d,
                        noInlineStyle: !1
                    }
                }
            }
            return fc.rules
        },
        Mc = function () {
            if (r(Mc.name_)) return Mc.name_;
            var c, d, e = lc.length,
                f, g;
            for (d = 0; d < e; ++d)
                if (f = lc[d], c = b.document.querySelector("[" + f.replace(":", "\\:") + "jq]")) {
                    g = c.getAttribute(f + "jq");
                    break
                }
            return Mc.name_ = g
        },
        Ne = /:/g,
        lc = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Oe = /[A-Z]/g,
        Ud = !1,
        mc = 3,
        Pe = {
            full: "1.5.5",
            major: 1,
            minor: 5,
            dot: 5,
            codeName: "material-conspiration"
        };
    ea.expando = "ng339";
    var yc = ea.cache = {},
        Qe = 1;
    ea._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var Re = /([\:\-\_]+(.))/g,
        Se = /^moz([A-Z])/,
        Qc = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        hd = c("jqLite"),
        Ae = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        id = /<|&#?\w+;/,
        Te = /<([\w:-]+)/,
        Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        zb = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2,
                "<table><colgroup>", "</colgroup></table>"
            ],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    zb.optgroup = zb.option;
    zb.tbody = zb.tfoot = zb.colgroup = zb.caption = zb.thead;
    zb.th = zb.td;
    var Ve = b.Node.prototype.contains || function (b) {
        return !!(this.compareDocumentPosition(b) & 16)
    },
        kc = ea.prototype = {
            ready: function (c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.document.readyState ? b.setTimeout(d) : (this.on("DOMContentLoaded", d), ea(b).on("load",
                    d))
            },
            toString: function () {
                var b = [];
                e(this, function (c) {
                    b.push("" + c)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function (b) {
                return 0 <= b ? ca(this[b]) : ca(this[this.length + b])
            },
            length: 0,
            push: Be,
            sort: [].sort,
            splice: [].splice
        },
        Lc = {};
    e("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        Lc[wa(b)] = b
    });
    var Hd = {};
    e("input select option textarea button form details".split(" "), function (b) {
        Hd[b] = true
    });
    var Id = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    e({
        data: xb,
        removeData: Va,
        hasData: function (b) {
            for (var c in yc[b.ng339]) return !0;
            return !1
        },
        cleanData: function (b) {
            for (var c = 0, d = b.length; c < d; c++) Va(b[c])
        }
    }, function (b, c) {
        ea[c] = b
    });
    e({
        data: xb,
        inheritedData: xa,
        scope: function (b) {
            return ca.data(b, "$scope") || xa(b.parentNode || b, ["$isolateScope", "$scope"])
        },
        isolateScope: function (b) {
            return ca.data(b, "$isolateScope") || ca.data(b, "$isolateScopeNoTemplate")
        },
        controller: Aa,
        injector: function (b) {
            return xa(b, "$injector")
        },
        removeAttr: function (b, c) {
            b.removeAttribute(c)
        },
        hasClass: Fa,
        css: function (b, c, d) {
            c = v(c);
            if (r(d)) b.style[c] = d;
            else return b.style[c]
        },
        attr: function (b, c, d) {
            var e = b.nodeType;
            if (e !== mc && 2 !== e && 8 !== e)
                if (e = wa(c), Lc[e])
                    if (r(d)) d ? (b[c] = !0, b.setAttribute(c, e)) : (b[c] = !1, b.removeAttribute(e));
                    else return b[c] || (b.attributes.getNamedItem(c) || n).specified ? e : void 0;
                else if (r(d)) b.setAttribute(c, d);
                else if (b.getAttribute) return b = b.getAttribute(c, 2), null === b ? void 0 : b
        },
        prop: function (b, c, d) {
            if (r(d)) b[c] = d;
            else return b[c]
        },
        text: function () {
            function b(c, d) {
                if (s(d)) {
                    var e =
                        c.nodeType;
                    return 1 === e || e === mc ? c.textContent : ""
                }
                c.textContent = d
            }
            b.$dv = "";
            return b
        }(),
        val: function (b, c) {
            if (s(c)) {
                if (b.multiple && "select" === D(b)) {
                    var d = [];
                    e(b.options, function (b) {
                        b.selected && d.push(b.value || b.text)
                    });
                    return 0 === d.length ? null : d
                }
                return b.value
            }
            b.value = c
        },
        html: function (b, c) {
            if (s(c)) return b.innerHTML;
            Ca(b, !0);
            b.innerHTML = c
        },
        empty: Hb
    }, function (b, c) {
        ea.prototype[c] = function (c, d) {
            var e, f, g = this.length;
            if (b !== Hb && s(2 == b.length && b !== Fa && b !== Aa ? c : d)) {
                if (o(c)) {
                    for (e = 0; e < g; e++)
                        if (b === xb) b(this[e],
                            c);
                        else
                            for (f in c) b(this[e], f, c[f]);
                    return this
                }
                e = b.$dv;
                g = s(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], c, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) b(this[e], c, d);
            return this
        }
    });
    e({
        removeData: Va,
        on: function (b, c, d, e) {
            if (r(e)) throw hd("onargs");
            if (Na(b)) {
                var e = nb(b, !0),
                    f = e.events,
                    g = e.handle;
                g || (g = e.handle = cb(b, f));
                for (var e = 0 <= c.indexOf(" ") ? c.split(" ") : [c], h = e.length, j = function (c, e, h) {
                        var j = f[c];
                        j || (j = f[c] = [], j.specialHandlerWrapper = e, "$destroy" === c || h || b.addEventListener(c, g, !1));
                        j.push(d)
                }; h--;) c =
                e[h], Qc[c] ? (j(Qc[c], Qa), j(c, void 0, !0)) : j(c)
            }
        },
        off: ub,
        one: function (b, c, d) {
            b = ca(b);
            b.on(c, function Kb() {
                b.off(c, d);
                b.off(c, Kb)
            });
            b.on(c, d)
        },
        replaceWith: function (b, c) {
            var d, f = b.parentNode;
            Ca(b);
            e(new ea(c), function (c) {
                d ? f.insertBefore(c, d.nextSibling) : f.replaceChild(c, b);
                d = c
            })
        },
        children: function (b) {
            var c = [];
            e(b.childNodes, function (b) {
                1 === b.nodeType && c.push(b)
            });
            return c
        },
        contents: function (b) {
            return b.contentDocument || b.childNodes || []
        },
        append: function (b, c) {
            var d = b.nodeType;
            if (1 === d || 11 === d)
                for (var c =
                        new ea(c), d = 0, e = c.length; d < e; d++) b.appendChild(c[d])
        },
        prepend: function (b, c) {
            if (1 === b.nodeType) {
                var d = b.firstChild;
                e(new ea(c), function (c) {
                    b.insertBefore(c, d)
                })
            }
        },
        wrap: function (b, c) {
            kb(b, ca(c).eq(0).clone()[0])
        },
        remove: Ia,
        detach: function (b) {
            Ia(b, !0)
        },
        after: function (b, c) {
            for (var d = b, e = b.parentNode, c = new ea(c), f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        },
        addClass: bb,
        removeClass: Sa,
        toggleClass: function (b, c, d) {
            c && e(c.split(" "), function (c) {
                var e = d;
                s(e) && (e = !Fa(b, c));
                (e ? bb : Sa)(b,
                    c)
            })
        },
        parent: function (b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        next: function (b) {
            return b.nextElementSibling
        },
        find: function (b, c) {
            return b.getElementsByTagName ? b.getElementsByTagName(c) : []
        },
        clone: ma,
        triggerHandler: function (b, c, d) {
            var f, g, h = c.type || c,
                j = nb(b);
            if (j = (j = j && j.events) && j[h]) f = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function () {
                    return !0 ===
                        this.immediatePropagationStopped
                },
                stopPropagation: n,
                type: h,
                target: b
            }, c.type && (f = k(f, c)), c = J(j), g = d ? [f].concat(d) : [f], e(c, function (c) {
                f.isImmediatePropagationStopped() || c.apply(b, g)
            })
        }
    }, function (b, c) {
        ea.prototype[c] = function (c, d, e) {
            for (var f, g = 0, h = this.length; g < h; g++) s(f) ? (f = b(this[g], c, d, e), r(f) && (f = ca(f))) : Ta(f, b(this[g], c, d, e));
            return r(f) ? f : this
        };
        ea.prototype.bind = ea.prototype.on;
        ea.prototype.unbind = ea.prototype.off
    });
    ua.prototype = {
        put: function (b, c) {
            this[za(b, this.nextUid)] = c
        },
        get: function (b) {
            return this[za(b,
                this.nextUid)]
        },
        remove: function (b) {
            var c = this[b = za(b, this.nextUid)];
            delete this[b];
            return c
        }
    };
    var ue = [function () {
        this.$get = [function () {
            return ua
        }]
    }],
        ve = /^([^\(]+?)=>/,
        we = /^[^\(]*\(\s*([^\)]*)\)/m,
        xe = /,/,
        ye = /^\s*(_?)(\S+?)\1\s*$/,
        ze = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        cc = c("$injector");
    Pa.$$annotate = function (b, c, d) {
        var f;
        if ("function" === typeof b) {
            if (!(f = b.$inject)) {
                f = [];
                if (b.length) {
                    if (c) throw u(d) && d || (d = b.name || Ka(b)), cc("strictdi", d);
                    c = hb(b);
                    e(c[1].split(xe), function (b) {
                        b.replace(ye, function (b, c,
                            d) {
                            f.push(d)
                        })
                    })
                }
                b.$inject = f
            }
        } else ia(b) ? (c = b.length - 1, ta(b[c], "fn"), f = b.slice(0, c)) : ta(b, "fn", !0);
        return f
    };
    var Nd = c("$animate"),
        De = function () {
            this.$get = n
        },
        Ee = function () {
            var b = new ua,
                c = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (d, f) {
                function g(b, c, d) {
                    var f = !1;
                    c && (c = u(c) ? c.split(" ") : ia(c) ? c : [], e(c, function (c) {
                        c && (f = !0, b[c] = d)
                    }));
                    return f
                }

                function h() {
                    e(c, function (c) {
                        var d = b.get(c);
                        if (d) {
                            var f = Fb(c.attr("class")),
                                g = "",
                                h = "";
                            e(d, function (b, c) {
                                b !== !!f[c] && (b ? g += (g.length ? " " : "") + c : h += (h.length ?
                                    " " : "") + c)
                            });
                            e(c, function (b) {
                                g && bb(b, g);
                                h && Sa(b, h)
                            });
                            b.remove(c)
                        }
                    });
                    c.length = 0
                }
                return {
                    enabled: n,
                    on: n,
                    off: n,
                    pin: n,
                    push: function (e, j, k, l) {
                        l && l();
                        k = k || {};
                        k.from && e.css(k.from);
                        k.to && e.css(k.to);
                        if (k.addClass || k.removeClass)
                            if (j = k.addClass, l = k.removeClass, k = b.get(e) || {}, j = g(k, j, !0), l = g(k, l, !1), j || l) b.put(e, k), c.push(e), 1 === c.length && f.$$postDigest(h);
                        e = new d;
                        e.complete();
                        return e
                    }
                }
            }]
        },
        Fe = ["$provide", function (b) {
            var c = this;
            this.$$registeredAnimations = Object.create(null);
            this.register = function (d, e) {
                if (d &&
                    "." !== d.charAt(0)) throw Nd("notcsel", d);
                var f = d + "-animation";
                c.$$registeredAnimations[d.substr(1)] = f;
                b.factory(f, e)
            };
            this.classNameFilter = function (b) {
                if (1 === arguments.length && (this.$$classNameFilter = b instanceof RegExp ? b : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Nd("nongcls", "ng-animate");
                return this.$$classNameFilter
            };
            this.$get = ["$$animateQueue", function (b) {
                function c(b, d, e) {
                    if (e) {
                        var f;
                        a: {
                            for (f = 0; f < e.length; f++) {
                                var g = e[f];
                                if (1 === g.nodeType) {
                                    f = g;
                                    break a
                                }
                            }
                            f =
                            void 0
                        } !f || f.parentNode || f.previousElementSibling || (e = null)
                    }
                    e ? e.after(b) : d.prepend(b)
                }
                return {
                    on: b.on,
                    off: b.off,
                    pin: b.pin,
                    enabled: b.enabled,
                    cancel: function (b) {
                        b.end && b.end()
                    },
                    enter: function (d, e, f, g) {
                        e = e && ca(e);
                        f = f && ca(f);
                        e = e || f.parent();
                        c(d, e, f);
                        return b.push(d, "enter", Ja(g))
                    },
                    move: function (d, e, f, g) {
                        e = e && ca(e);
                        f = f && ca(f);
                        e = e || f.parent();
                        c(d, e, f);
                        return b.push(d, "move", Ja(g))
                    },
                    leave: function (c, d) {
                        return b.push(c, "leave", Ja(d), function () {
                            c.remove()
                        })
                    },
                    addClass: function (c, d, e) {
                        e = Ja(e);
                        e.addClass = na(e.addclass,
                            d);
                        return b.push(c, "addClass", e)
                    },
                    removeClass: function (c, d, e) {
                        e = Ja(e);
                        e.removeClass = na(e.removeClass, d);
                        return b.push(c, "removeClass", e)
                    },
                    setClass: function (c, d, e, f) {
                        f = Ja(f);
                        f.addClass = na(f.addClass, d);
                        f.removeClass = na(f.removeClass, e);
                        return b.push(c, "setClass", f)
                    },
                    animate: function (c, d, e, f, g) {
                        g = Ja(g);
                        g.from = g.from ? k(g.from, d) : d;
                        g.to = g.to ? k(g.to, e) : e;
                        g.tempClasses = na(g.tempClasses, f || "ng-inline-animate");
                        return b.push(c, "animate", g)
                    }
                }
            }]
        }],
        Ge = function () {
            this.$get = ["$$rAF", function (b) {
                function c(e) {
                    d.push(e);
                    1 < d.length || b(function () {
                        for (var b = 0; b < d.length; b++) d[b]();
                        d = []
                    })
                }
                var d = [];
                return function () {
                    var b = !1;
                    c(function () {
                        b = !0
                    });
                    return function (d) {
                        b ? d() : c(d)
                    }
                }
            }]
        },
        He = function () {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (b, c, d, f, g) {
                function h(b) {
                    this.setHost(b);
                    var c = d();
                    this._doneCallbacks = [];
                    this._tick = function (b) {
                        var d = f[0];
                        d && d.hidden ? g(b, 0, !1) : c(b)
                    };
                    this._state = 0
                }
                h.chain = function (b, c) {
                    function d() {
                        if (e === b.length) c(!0);
                        else b[e](function (b) {
                            !1 === b ? c(!1) : (e++, d())
                        })
                    }
                    var e = 0;
                    d()
                };
                h.all = function (b, c) {
                    function d(e) {
                        g = g && e;
                        ++f === b.length && c(g)
                    }
                    var f = 0,
                        g = !0;
                    e(b, function (b) {
                        b.done(d)
                    })
                };
                h.prototype = {
                    setHost: function (b) {
                        this.host = b || {}
                    },
                    done: function (b) {
                        2 === this._state ? b() : this._doneCallbacks.push(b)
                    },
                    progress: n,
                    getPromise: function () {
                        if (!this.promise) {
                            var c = this;
                            this.promise = b(function (b, d) {
                                c.done(function (c) {
                                    !1 === c ? d() : b()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function (b, c) {
                        return this.getPromise().then(b, c)
                    },
                    "catch": function (b) {
                        return this.getPromise()["catch"](b)
                    },
                    "finally": function (b) {
                        return this.getPromise()["finally"](b)
                    },
                    pause: function () {
                        this.host.pause && this.host.pause()
                    },
                    resume: function () {
                        this.host.resume && this.host.resume()
                    },
                    end: function () {
                        this.host.end && this.host.end();
                        this._resolve(!0)
                    },
                    cancel: function () {
                        this.host.cancel && this.host.cancel();
                        this._resolve(!1)
                    },
                    complete: function (b) {
                        var c = this;
                        0 === c._state && (c._state = 1, c._tick(function () {
                            c._resolve(b)
                        }))
                    },
                    _resolve: function (b) {
                        2 !== this._state && (e(this._doneCallbacks, function (c) {
                            c(b)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                };
                return h
            }]
        },
        Ie = function () {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (b, c, d) {
                return function (c, e) {
                    function f() {
                        b(function () {
                            g.addClass && (c.addClass(g.addClass), g.addClass = null);
                            g.removeClass && (c.removeClass(g.removeClass), g.removeClass = null);
                            g.to && (c.css(g.to), g.to = null);
                            h || j.complete();
                            h = !0
                        });
                        return j
                    }
                    var g = e || {};
                    g.$$prepared || (g = I(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (c.css(g.from), g.from = null);
                    var h, j = new d;
                    return {
                        start: f,
                        end: f
                    }
                }
            }]
        },
        Ra = c("$compile"),
        ld = new function () { };
    ob.$inject = ["$provide", "$$sanitizeUriProvider"];
    Ga.prototype.isFirstChange = function () {
        return this.previousValue === ld
    };
    var Qd = /^((?:x|data)[\:\-_])/i,
        If = c("$controller"),
        ae = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Hf = function () {
            this.$get = ["$document", function (b) {
                return function (c) {
                    c ? !c.nodeType && c instanceof ca && (c = c[0]) : c = b[0].body;
                    return c.offsetWidth + 1
                }
            }]
        },
        be = "application/json",
        wd = {
            "Content-Type": be + ";charset=utf-8"
        },
        Kf = /^\[|^\{(?!\{)/,
        Lf = {
            "[": /]$/,
            "{": /}$/
        },
        Jf = /^\)\]\}',?\n/,
        Yf = c("$http"),
        ce = function (b) {
            return function () {
                throw Yf("legacy", b);
            }
        },
        ic = mb.$interpolateMinErr =
        c("$interpolate");
    ic.throwNoconcat = function (b) {
        throw ic("noconcat", b);
    };
    ic.interr = function (b, c) {
        return ic("interr", b, c.toString())
    };
    var Zf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Mf = {
            http: 80,
            https: 443,
            ftp: 21
        },
        bd = c("$location"),
        $f = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Bb("$$absUrl"),
            url: function (b) {
                if (s(b)) return this.$$url;
                var c = Zf.exec(b);
                (c[1] || "" === b) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === b) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            },
            protocol: Bb("$$protocol"),
            host: Bb("$$host"),
            port: Bb("$$port"),
            path: Cc("$$path", function (b) {
                b = null !== b ? b.toString() : "";
                return "/" == b.charAt(0) ? b : "/" + b
            }),
            search: function (b, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (u(b) || w(b)) b = b.toString(), this.$$search = aa(b);
                        else if (o(b)) b = I(b, {}), e(b, function (c, d) {
                            null == c && delete b[d]
                        }), this.$$search = b;
                        else throw bd("isrcharg");
                        break;
                    default:
                        s(c) || null === c ? delete this.$$search[b] : this.$$search[b] = c
                }
                this.$$compose();
                return this
            },
            hash: Cc("$$hash", function (b) {
                return null !== b ? b.toString() :
                    ""
            }),
            replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    e([Rc, Bc, Ac], function (b) {
        b.prototype = Object.create($f);
        b.prototype.state = function (c) {
            if (!arguments.length) return this.$$state;
            if (b !== Ac || !this.$$html5) throw bd("nostate");
            this.$$state = s(c) ? null : c;
            return this
        }
    });
    var fb = c("$parse"),
        Nf = Function.prototype.call,
        Of = Function.prototype.apply,
        Pf = Function.prototype.bind,
        ed = W();
    e("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (b) {
        ed[b] = true
    });
    var ag = {
        n: "\n",
        f: "\u000c",
        r: "\r",
        t: "\t",
        v: "\v",
        "'": "'",
        '"': '"'
    },
        xd = function (b) {
            this.options = b
        };
    xd.prototype = {
        constructor: xd,
        lex: function (b) {
            this.text = b;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (b = this.text.charAt(this.index), '"' === b || "'" === b) this.readString(b);
                else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++;
                else if (this.isWhitespace(b)) this.index++;
                else {
                    var c = b + this.peek(),
                        d = c + this.peek(2),
                        e = ed[c],
                        f = ed[d];
                    ed[b] || e || f ? (b = f ? d : e ? c : b, this.tokens.push({
                        index: this.index,
                        text: b,
                        operator: !0
                    }), this.index += b.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            return this.tokens
        },
        is: function (b, c) {
            return -1 !== c.indexOf(b)
        },
        peek: function (b) {
            b = b || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function (b) {
            return "0" <= b && "9" >= b && "string" === typeof b
        },
        isWhitespace: function (b) {
            return " " === b || "\r" === b ||
                "\t" === b || "\n" === b || "\v" === b || "\u00a0" === b
        },
        isIdentifierStart: function (b) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(b, this.codePointAt(b)) : this.isValidIdentifierStart(b)
        },
        isValidIdentifierStart: function (b) {
            return "a" <= b && "z" >= b || "A" <= b && "Z" >= b || "_" === b || "$" === b
        },
        isIdentifierContinue: function (b) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(b, this.codePointAt(b)) : this.isValidIdentifierContinue(b)
        },
        isValidIdentifierContinue: function (b, c) {
            return this.isValidIdentifierStart(b,
                c) || this.isNumber(b)
        },
        codePointAt: function (b) {
            return 1 === b.length ? b.charCodeAt(0) : (b.charCodeAt(0) << 10) + b.charCodeAt(1) - 56613888
        },
        peekMultichar: function () {
            var b = this.text.charAt(this.index),
                c = this.peek();
            if (!c) return b;
            var d = b.charCodeAt(0),
                e = c.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= e && 57343 >= e ? b + c : b
        },
        isExpOperator: function (b) {
            return "-" === b || "+" === b || this.isNumber(b)
        },
        throwError: function (b, c, d) {
            d = d || this.index;
            c = r(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw fb("lexerr",
                b, c, this.text);
        },
        readNumber: function () {
            for (var b = "", c = this.index; this.index < this.text.length;) {
                var d = wa(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) b += d;
                else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) b += d;
                    else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == b.charAt(b.length - 1)) b += d;
                    else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != b.charAt(b.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: c,
                text: b,
                constant: !0,
                value: Number(b)
            })
        },
        readIdent: function () {
            var b = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var c = this.peekMultichar();
                if (!this.isIdentifierContinue(c)) break;
                this.index += c.length
            }
            this.tokens.push({
                index: b,
                text: this.text.slice(b, this.index),
                identifier: !0
            })
        },
        readString: function (b) {
            var c = this.index;
            this.index++;
            for (var d = "", e = b, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index),
                    e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) ||
                    this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += ag[g] || g, f = !1;
                else if ("\\" === g) f = !0;
                else {
                    if (g === b) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var S = function (b, c) {
        this.lexer = b;
        this.options = c
    };
    S.Program = "Program";
    S.ExpressionStatement = "ExpressionStatement";
    S.AssignmentExpression = "AssignmentExpression";
    S.ConditionalExpression = "ConditionalExpression";
    S.LogicalExpression = "LogicalExpression";
    S.BinaryExpression = "BinaryExpression";
    S.UnaryExpression = "UnaryExpression";
    S.CallExpression = "CallExpression";
    S.MemberExpression = "MemberExpression";
    S.Identifier = "Identifier";
    S.Literal = "Literal";
    S.ArrayExpression = "ArrayExpression";
    S.Property = "Property";
    S.ObjectExpression = "ObjectExpression";
    S.ThisExpression = "ThisExpression";
    S.LocalsExpression = "LocalsExpression";
    S.NGValueParameter = "NGValueParameter";
    S.prototype = {
        ast: function (b) {
            this.text = b;
            this.tokens = this.lexer.lex(b);
            b = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return b
        },
        program: function () {
            for (var b = []; ;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && b.push(this.expressionStatement()), !this.expect(";")) return {
                    type: S.Program,
                    body: b
                }
        },
        expressionStatement: function () {
            return {
                type: S.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var b = this.expression() ; this.expect("|") ;) b = this.filter(b);
            return b
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var b = this.ternary();
            this.expect("=") && (b = {
                type: S.AssignmentExpression,
                left: b,
                right: this.assignment(),
                operator: "="
            });
            return b
        },
        ternary: function () {
            var b = this.logicalOR(),
                c, d;
            return this.expect("?") && (c = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: S.ConditionalExpression,
                test: b,
                alternate: c,
                consequent: d
            }) : b
        },
        logicalOR: function () {
            for (var b = this.logicalAND() ; this.expect("||") ;) b = {
                type: S.LogicalExpression,
                operator: "||",
                left: b,
                right: this.logicalAND()
            };
            return b
        },
        logicalAND: function () {
            for (var b =
                    this.equality() ; this.expect("&&") ;) b = {
                        type: S.LogicalExpression,
                        operator: "&&",
                        left: b,
                        right: this.equality()
                    };
            return b
        },
        equality: function () {
            for (var b = this.relational(), c; c = this.expect("==", "!=", "===", "!==") ;) b = {
                type: S.BinaryExpression,
                operator: c.text,
                left: b,
                right: this.relational()
            };
            return b
        },
        relational: function () {
            for (var b = this.additive(), c; c = this.expect("<", ">", "<=", ">=") ;) b = {
                type: S.BinaryExpression,
                operator: c.text,
                left: b,
                right: this.additive()
            };
            return b
        },
        additive: function () {
            for (var b = this.multiplicative(),
                    c; c = this.expect("+", "-") ;) b = {
                        type: S.BinaryExpression,
                        operator: c.text,
                        left: b,
                        right: this.multiplicative()
                    };
            return b
        },
        multiplicative: function () {
            for (var b = this.unary(), c; c = this.expect("*", "/", "%") ;) b = {
                type: S.BinaryExpression,
                operator: c.text,
                left: b,
                right: this.unary()
            };
            return b
        },
        unary: function () {
            var b;
            return (b = this.expect("+", "-", "!")) ? {
                type: S.UnaryExpression,
                operator: b.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var b;
            this.expect("(") ? (b = this.filterChain(), this.consume(")")) :
                this.expect("[") ? b = this.arrayDeclaration() : this.expect("{") ? b = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? b = I(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? b = {
                    type: S.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? b = this.identifier() : this.peek().constant ? b = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c; c = this.expect("(", "[", ".") ;) "(" === c.text ? (b = {
                type: S.CallExpression,
                callee: b,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === c.text ? (b = {
                type: S.MemberExpression,
                object: b,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === c.text ? b = {
                type: S.MemberExpression,
                object: b,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return b
        },
        filter: function (b) {
            for (var b = [b], c = {
                type: S.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0
            }; this.expect(":") ;) b.push(this.expression());
            return c
        },
        parseArguments: function () {
            var b = [];
            if (")" !==
                this.peekToken().text) {
                do b.push(this.expression()); while (this.expect(","))
            }
            return b
        },
        identifier: function () {
            var b = this.consume();
            b.identifier || this.throwError("is not a valid identifier", b);
            return {
                type: S.Identifier,
                name: b.text
            }
        },
        constant: function () {
            return {
                type: S.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var b = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    b.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {
                type: S.ArrayExpression,
                elements: b
            }
        },
        object: function () {
            var b = [],
                c;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    c = {
                        type: S.Property,
                        kind: "init"
                    };
                    this.peek().constant ? c.key = this.constant() : this.peek().identifier ? c.key = this.identifier() : this.throwError("invalid key", this.peek());
                    this.consume(":");
                    c.value = this.expression();
                    b.push(c)
                } while (this.expect(","))
            }
            this.consume("}");
            return {
                type: S.ObjectExpression,
                properties: b
            }
        },
        throwError: function (b, c) {
            throw fb("syntax", c.text, b, c.index + 1, this.text, this.text.substring(c.index));
        },
        consume: function (b) {
            if (0 ===
                this.tokens.length) throw fb("ueoe", this.text);
            var c = this.expect(b);
            c || this.throwError("is unexpected, expecting [" + b + "]", this.peek());
            return c
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw fb("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (b, c, d, e) {
            return this.peekAhead(0, b, c, d, e)
        },
        peekAhead: function (b, c, d, e, f) {
            if (this.tokens.length > b) {
                var b = this.tokens[b],
                    g = b.text;
                if (g === c || g === d || g === e || g === f || !c && !d && !e && !f) return b
            }
            return !1
        },
        expect: function (b, c, d, e) {
            return (b = this.peek(b, c, d, e)) ?
                (this.tokens.shift(), b) : !1
        },
        selfReferential: {
            "this": {
                type: S.ThisExpression
            },
            $locals: {
                type: S.LocalsExpression
            }
        }
    };
    Vc.prototype = {
        compile: function (b, c) {
            var d = this,
                f = this.astBuilder.ast(b);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: c,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            };
            Ba(f, d.$filter);
            var g = "",
                h;
            this.stage = "assign";
            if (h = Uc(f)) this.state.computing = "assign", g = this.nextId(), this.recurse(h, g), this.return_(g), g = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            h = Tc(f.body);
            d.stage = "inputs";
            e(h, function (b, c) {
                var e = "fn" + c;
                d.state[e] = {
                    vars: [],
                    body: [],
                    own: {}
                };
                d.state.computing = e;
                var f = d.nextId();
                d.recurse(b, f);
                d.return_(f);
                d.state.inputs.push(e);
                b.watchId = c
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(f);
            g = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + g + this.watchFns() + "return fn;";
            g = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext",
                "ifDefined", "plus", "text", g))(this.$filter, eb, Wa, Sc, Db, Wb, od, oc, b);
            this.state = this.stage = void 0;
            g.literal = Ec(f);
            g.constant = f.constant;
            return g
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
            var b = [],
                c = this.state.inputs,
                d = this;
            e(c, function (c) {
                b.push("var " + c + "=" + d.generateFunction(c, "s"))
            });
            c.length && b.push("fn.inputs=[" + c.join(",") + "];");
            return b.join("")
        },
        generateFunction: function (b, c) {
            return "function(" + c + "){" + this.varsPrefix(b) + this.body(b) + "};"
        },
        filterPrefix: function () {
            var b = [],
                c = this;
            e(this.state.filters,
                function (d, e) {
                    b.push(d + "=$filter(" + c.escape(e) + ")")
                });
            return b.length ? "var " + b.join(",") + ";" : ""
        },
        varsPrefix: function (b) {
            return this.state[b].vars.length ? "var " + this.state[b].vars.join(",") + ";" : ""
        },
        body: function (b) {
            return this.state[b].body.join("")
        },
        recurse: function (b, c, d, f, g, h) {
            var j, k, l = this,
                o, m, f = f || n;
            if (!h && r(b.watchId)) c = c || this.nextId(), this.if_("i", this.lazyAssign(c, this.computedMember("i", b.watchId)), this.lazyRecurse(b, c, d, f, g, !0));
            else switch (b.type) {
                case S.Program:
                    e(b.body, function (c, d) {
                        l.recurse(c.expression,
                            void 0, void 0,
                            function (b) {
                                k = b
                            });
                        d !== b.body.length - 1 ? l.current().body.push(k, ";") : l.return_(k)
                    });
                    break;
                case S.Literal:
                    m = this.escape(b.value);
                    this.assign(c, m);
                    f(m);
                    break;
                case S.UnaryExpression:
                    this.recurse(b.argument, void 0, void 0, function (b) {
                        k = b
                    });
                    m = b.operator + "(" + this.ifDefined(k, 0) + ")";
                    this.assign(c, m);
                    f(m);
                    break;
                case S.BinaryExpression:
                    this.recurse(b.left, void 0, void 0, function (b) {
                        j = b
                    });
                    this.recurse(b.right, void 0, void 0, function (b) {
                        k = b
                    });
                    m = "+" === b.operator ? this.plus(j, k) : "-" === b.operator ? this.ifDefined(j,
                        0) + b.operator + this.ifDefined(k, 0) : "(" + j + ")" + b.operator + "(" + k + ")";
                    this.assign(c, m);
                    f(m);
                    break;
                case S.LogicalExpression:
                    c = c || this.nextId();
                    l.recurse(b.left, c);
                    l.if_("&&" === b.operator ? c : l.not(c), l.lazyRecurse(b.right, c));
                    f(c);
                    break;
                case S.ConditionalExpression:
                    c = c || this.nextId();
                    l.recurse(b.test, c);
                    l.if_(c, l.lazyRecurse(b.alternate, c), l.lazyRecurse(b.consequent, c));
                    f(c);
                    break;
                case S.Identifier:
                    c = c || this.nextId();
                    d && (d.context = "inputs" === l.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l",
                        b.name) + "?l:s"), d.computed = !1, d.name = b.name);
                    eb(b.name);
                    l.if_("inputs" === l.stage || l.not(l.getHasOwnProperty("l", b.name)), function () {
                        l.if_("inputs" === l.stage || "s", function () {
                            g && 1 !== g && l.if_(l.not(l.nonComputedMember("s", b.name)), l.lazyAssign(l.nonComputedMember("s", b.name), "{}"));
                            l.assign(c, l.nonComputedMember("s", b.name))
                        })
                    }, c && l.lazyAssign(c, l.nonComputedMember("l", b.name)));
                    (l.state.expensiveChecks || "constructor" == b.name) && l.addEnsureSafeObject(c);
                    f(c);
                    break;
                case S.MemberExpression:
                    j = d && (d.context =
                        this.nextId()) || this.nextId();
                    c = c || this.nextId();
                    l.recurse(b.object, j, void 0, function () {
                        l.if_(l.notNull(j), function () {
                            g && 1 !== g && l.addEnsureSafeAssignContext(j);
                            if (b.computed) k = l.nextId(), l.recurse(b.property, k), l.getStringValue(k), l.addEnsureSafeMemberName(k), g && 1 !== g && l.if_(l.not(l.computedMember(j, k)), l.lazyAssign(l.computedMember(j, k), "{}")), m = l.ensureSafeObject(l.computedMember(j, k)), l.assign(c, m), d && (d.computed = !0, d.name = k);
                            else {
                                eb(b.property.name);
                                g && 1 !== g && l.if_(l.not(l.nonComputedMember(j,
                                    b.property.name)), l.lazyAssign(l.nonComputedMember(j, b.property.name), "{}"));
                                m = l.nonComputedMember(j, b.property.name);
                                if (l.state.expensiveChecks || "constructor" == b.property.name) m = l.ensureSafeObject(m);
                                l.assign(c, m);
                                d && (d.computed = !1, d.name = b.property.name)
                            }
                        }, function () {
                            l.assign(c, "undefined")
                        });
                        f(c)
                    }, !!g);
                    break;
                case S.CallExpression:
                    c = c || this.nextId();
                    b.filter ? (k = l.filter(b.callee.name), o = [], e(b.arguments, function (b) {
                        var c = l.nextId();
                        l.recurse(b, c);
                        o.push(c)
                    }), m = k + "(" + o.join(",") + ")", l.assign(c, m),
                        f(c)) : (k = l.nextId(), j = {}, o = [], l.recurse(b.callee, k, j, function () {
                            l.if_(l.notNull(k), function () {
                                l.addEnsureSafeFunction(k);
                                e(b.arguments, function (b) {
                                    l.recurse(b, l.nextId(), void 0, function (b) {
                                        o.push(l.ensureSafeObject(b))
                                    })
                                });
                                j.name ? (l.state.expensiveChecks || l.addEnsureSafeObject(j.context), m = l.member(j.context, j.name, j.computed) + "(" + o.join(",") + ")") : m = k + "(" + o.join(",") + ")";
                                m = l.ensureSafeObject(m);
                                l.assign(c, m)
                            }, function () {
                                l.assign(c, "undefined")
                            });
                            f(c)
                        }));
                    break;
                case S.AssignmentExpression:
                    k = this.nextId();
                    j = {};
                    if (!(b.left.type === S.Identifier || b.left.type === S.MemberExpression)) throw fb("lval");
                    this.recurse(b.left, void 0, j, function () {
                        l.if_(l.notNull(j.context), function () {
                            l.recurse(b.right, k);
                            l.addEnsureSafeObject(l.member(j.context, j.name, j.computed));
                            l.addEnsureSafeAssignContext(j.context);
                            m = l.member(j.context, j.name, j.computed) + b.operator + k;
                            l.assign(c, m);
                            f(c || m)
                        })
                    }, 1);
                    break;
                case S.ArrayExpression:
                    o = [];
                    e(b.elements, function (b) {
                        l.recurse(b, l.nextId(), void 0, function (b) {
                            o.push(b)
                        })
                    });
                    m = "[" + o.join(",") +
                        "]";
                    this.assign(c, m);
                    f(m);
                    break;
                case S.ObjectExpression:
                    o = [];
                    e(b.properties, function (b) {
                        l.recurse(b.value, l.nextId(), void 0, function (c) {
                            o.push(l.escape(b.key.type === S.Identifier ? b.key.name : "" + b.key.value) + ":" + c)
                        })
                    });
                    m = "{" + o.join(",") + "}";
                    this.assign(c, m);
                    f(m);
                    break;
                case S.ThisExpression:
                    this.assign(c, "s");
                    f("s");
                    break;
                case S.LocalsExpression:
                    this.assign(c, "l");
                    f("l");
                    break;
                case S.NGValueParameter:
                    this.assign(c, "v"), f("v")
            }
        },
        getHasOwnProperty: function (b, c) {
            var d = b + "." + c,
                e = this.current().own;
            e.hasOwnProperty(d) ||
                (e[d] = this.nextId(!1, b + "&&(" + this.escape(c) + " in " + b + ")"));
            return e[d]
        },
        assign: function (b, c) {
            if (b) return this.current().body.push(b, "=", c, ";"), b
        },
        filter: function (b) {
            this.state.filters.hasOwnProperty(b) || (this.state.filters[b] = this.nextId(!0));
            return this.state.filters[b]
        },
        ifDefined: function (b, c) {
            return "ifDefined(" + b + "," + this.escape(c) + ")"
        },
        plus: function (b, c) {
            return "plus(" + b + "," + c + ")"
        },
        return_: function (b) {
            this.current().body.push("return ", b, ";")
        },
        if_: function (b, c, d) {
            if (!0 === b) c();
            else {
                var e = this.current().body;
                e.push("if(", b, "){");
                c();
                e.push("}");
                d && (e.push("else{"), d(), e.push("}"))
            }
        },
        not: function (b) {
            return "!(" + b + ")"
        },
        notNull: function (b) {
            return b + "!=null"
        },
        nonComputedMember: function (b, c) {
            var d = /[^$_a-zA-Z0-9]/g;
            return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(c) ? b + "." + c : b + '["' + c.replace(d, this.stringEscapeFn) + '"]'
        },
        computedMember: function (b, c) {
            return b + "[" + c + "]"
        },
        member: function (b, c, d) {
            return d ? this.computedMember(b, c) : this.nonComputedMember(b, c)
        },
        addEnsureSafeObject: function (b) {
            this.current().body.push(this.ensureSafeObject(b),
                ";")
        },
        addEnsureSafeMemberName: function (b) {
            this.current().body.push(this.ensureSafeMemberName(b), ";")
        },
        addEnsureSafeFunction: function (b) {
            this.current().body.push(this.ensureSafeFunction(b), ";")
        },
        addEnsureSafeAssignContext: function (b) {
            this.current().body.push(this.ensureSafeAssignContext(b), ";")
        },
        ensureSafeObject: function (b) {
            return "ensureSafeObject(" + b + ",text)"
        },
        ensureSafeMemberName: function (b) {
            return "ensureSafeMemberName(" + b + ",text)"
        },
        ensureSafeFunction: function (b) {
            return "ensureSafeFunction(" + b + ",text)"
        },
        getStringValue: function (b) {
            this.assign(b, "getStringValue(" + b + ")")
        },
        ensureSafeAssignContext: function (b) {
            return "ensureSafeAssignContext(" + b + ",text)"
        },
        lazyRecurse: function (b, c, d, e, f, g) {
            var h = this;
            return function () {
                h.recurse(b, c, d, e, f, g)
            }
        },
        lazyAssign: function (b, c) {
            var d = this;
            return function () {
                d.assign(b, c)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (b) {
            return "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function (b) {
            if (u(b)) return "'" + b.replace(this.stringEscapeRegex, this.stringEscapeFn) +
                "'";
            if (w(b)) return b.toString();
            if (!0 === b) return "true";
            if (!1 === b) return "false";
            if (null === b) return "null";
            if ("undefined" === typeof b) return "undefined";
            throw fb("esc");
        },
        nextId: function (b, c) {
            var d = "v" + this.state.nextId++;
            b || this.current().vars.push(d + (c ? "=" + c : ""));
            return d
        },
        current: function () {
            return this.state[this.state.computing]
        }
    };
    Wc.prototype = {
        compile: function (b, c) {
            var d = this,
                f = this.astBuilder.ast(b);
            this.expression = b;
            this.expensiveChecks = c;
            Ba(f, d.$filter);
            var g, h;
            if (g = Uc(f)) h = this.recurse(g);
            g = Tc(f.body);
            var j;
            g && (j = [], e(g, function (b, c) {
                var e = d.recurse(b);
                b.input = e;
                j.push(e);
                b.watchId = c
            }));
            var k = [];
            e(f.body, function (b) {
                k.push(d.recurse(b.expression))
            });
            g = 0 === f.body.length ? n : 1 === f.body.length ? k[0] : function (b, c) {
                var d;
                e(k, function (e) {
                    d = e(b, c)
                });
                return d
            };
            h && (g.assign = function (b, c, d) {
                return h(b, d, c)
            });
            j && (g.inputs = j);
            g.literal = Ec(f);
            g.constant = f.constant;
            return g
        },
        recurse: function (b, c, d) {
            var f, g, h = this,
                j;
            if (b.input) return this.inputs(b.input, b.watchId);
            switch (b.type) {
                case S.Literal:
                    return this.value(b.value,
                        c);
                case S.UnaryExpression:
                    return g = this.recurse(b.argument), this["unary" + b.operator](g, c);
                case S.BinaryExpression:
                    return f = this.recurse(b.left), g = this.recurse(b.right), this["binary" + b.operator](f, g, c);
                case S.LogicalExpression:
                    return f = this.recurse(b.left), g = this.recurse(b.right), this["binary" + b.operator](f, g, c);
                case S.ConditionalExpression:
                    return this["ternary?:"](this.recurse(b.test), this.recurse(b.alternate), this.recurse(b.consequent), c);
                case S.Identifier:
                    return eb(b.name, h.expression), h.identifier(b.name,
                        h.expensiveChecks || "constructor" == b.name, c, d, h.expression);
                case S.MemberExpression:
                    return f = this.recurse(b.object, !1, !!d), b.computed || (eb(b.property.name, h.expression), g = b.property.name), b.computed && (g = this.recurse(b.property)), b.computed ? this.computedMember(f, g, c, d, h.expression) : this.nonComputedMember(f, g, h.expensiveChecks, c, d, h.expression);
                case S.CallExpression:
                    return j = [], e(b.arguments, function (b) {
                        j.push(h.recurse(b))
                    }), b.filter && (g = this.$filter(b.callee.name)), b.filter || (g = this.recurse(b.callee, !0)), b.filter ? function (b, d, e, f) {
                        for (var h = [], k = 0; k < j.length; ++k) h.push(j[k](b, d, e, f));
                        b = g.apply(void 0, h, f);
                        return c ? {
                            context: void 0,
                            name: void 0,
                            value: b
                        } : b
                    } : function (b, d, e, f) {
                        var k = g(b, d, e, f),
                            l;
                        if (null != k.value) {
                            Wa(k.context, h.expression);
                            Sc(k.value, h.expression);
                            l = [];
                            for (var o = 0; o < j.length; ++o) l.push(Wa(j[o](b, d, e, f), h.expression));
                            l = Wa(k.value.apply(k.context, l), h.expression)
                        }
                        return c ? {
                            value: l
                        } : l
                    };
                case S.AssignmentExpression:
                    return f = this.recurse(b.left, !0, 1), g = this.recurse(b.right),
                        function (b,
                            d, e, j) {
                            var k = f(b, d, e, j),
                                b = g(b, d, e, j);
                            Wa(k.value, h.expression);
                            Wb(k.context);
                            k.context[k.name] = b;
                            return c ? {
                                value: b
                            } : b
                        };
                case S.ArrayExpression:
                    return j = [], e(b.elements, function (b) {
                        j.push(h.recurse(b))
                    }),
                        function (b, d, e, f) {
                            for (var g = [], h = 0; h < j.length; ++h) g.push(j[h](b, d, e, f));
                            return c ? {
                                value: g
                            } : g
                        };
                case S.ObjectExpression:
                    return j = [], e(b.properties, function (b) {
                        j.push({
                            key: b.key.type === S.Identifier ? b.key.name : "" + b.key.value,
                            value: h.recurse(b.value)
                        })
                    }),
                        function (b, d, e, f) {
                            for (var g = {}, h = 0; h < j.length; ++h) g[j[h].key] =
                                j[h].value(b, d, e, f);
                            return c ? {
                                value: g
                            } : g
                        };
                case S.ThisExpression:
                    return function (b) {
                        return c ? {
                            value: b
                        } : b
                    };
                case S.LocalsExpression:
                    return function (b, d) {
                        return c ? {
                            value: d
                        } : d
                    };
                case S.NGValueParameter:
                    return function (b, d, e) {
                        return c ? {
                            value: e
                        } : e
                    }
            }
        },
        "unary+": function (b, c) {
            return function (d, e, f, g) {
                d = b(d, e, f, g);
                d = r(d) ? +d : 0;
                return c ? {
                    value: d
                } : d
            }
        },
        "unary-": function (b, c) {
            return function (d, e, f, g) {
                d = b(d, e, f, g);
                d = r(d) ? -d : 0;
                return c ? {
                    value: d
                } : d
            }
        },
        "unary!": function (b, c) {
            return function (d, e, f, g) {
                d = !b(d, e, f, g);
                return c ? {
                    value: d
                } : d
            }
        },
        "binary+": function (b, c, d) {
            return function (e, f, g, h) {
                var j = b(e, f, g, h),
                    e = c(e, f, g, h),
                    j = oc(j, e);
                return d ? {
                    value: j
                } : j
            }
        },
        "binary-": function (b, c, d) {
            return function (e, f, g, h) {
                var j = b(e, f, g, h),
                    e = c(e, f, g, h),
                    j = (r(j) ? j : 0) - (r(e) ? e : 0);
                return d ? {
                    value: j
                } : j
            }
        },
        "binary*": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) * c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary/": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) / c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary%": function (b, c, d) {
            return function (e, f, g, h) {
                e =
                    b(e, f, g, h) % c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary===": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) === c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary!==": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) !== c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary==": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) == c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary!=": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) != c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary<": function (b, c, d) {
            return function (e, f, g, h) {
                e =
                    b(e, f, g, h) < c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary>": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) > c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary<=": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) <= c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary>=": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) >= c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary&&": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e, f, g, h) && c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "binary||": function (b, c, d) {
            return function (e, f, g, h) {
                e = b(e,
                    f, g, h) || c(e, f, g, h);
                return d ? {
                    value: e
                } : e
            }
        },
        "ternary?:": function (b, c, d, e) {
            return function (f, g, h, j) {
                f = b(f, g, h, j) ? c(f, g, h, j) : d(f, g, h, j);
                return e ? {
                    value: f
                } : f
            }
        },
        value: function (b, c) {
            return function () {
                return c ? {
                    context: void 0,
                    name: void 0,
                    value: b
                } : b
            }
        },
        identifier: function (b, c, d, e, f) {
            return function (g, h) {
                g = h && b in h ? h : g;
                e && 1 !== e && g && !g[b] && (g[b] = {});
                h = g ? g[b] : void 0;
                c && Wa(h, f);
                return d ? {
                    context: g,
                    name: b,
                    value: h
                } : h
            }
        },
        computedMember: function (b, c, d, e, f) {
            return function (g, h, j, k) {
                var l = b(g, h, j, k),
                    o, m;
                null != l && (o =
                    c(g, h, j, k), o += "", eb(o, f), e && 1 !== e && (Wb(l), l && !l[o] && (l[o] = {})), m = l[o], Wa(m, f));
                return d ? {
                    context: l,
                    name: o,
                    value: m
                } : m
            }
        },
        nonComputedMember: function (b, c, d, e, f, g) {
            return function (h, j, k, l) {
                h = b(h, j, k, l);
                f && 1 !== f && (Wb(h), h && !h[c] && (h[c] = {}));
                j = null != h ? h[c] : void 0;
                (d || "constructor" == c) && Wa(j, g);
                return e ? {
                    context: h,
                    name: c,
                    value: j
                } : j
            }
        },
        inputs: function (b, c) {
            return function (d, e, f, g) {
                return g ? g[c] : b(d, e, f)
            }
        }
    };
    var yd = function (b, c, d) {
        this.lexer = b;
        this.$filter = c;
        this.options = d;
        this.ast = new S(b, d);
        this.astCompiler =
            d.csp ? new Wc(this.ast, c) : new Vc(this.ast, c)
    };
    yd.prototype = {
        constructor: yd,
        parse: function (b) {
            return this.astCompiler.compile(b, this.options.expensiveChecks)
        }
    };
    var Qf = Object.prototype.valueOf,
        Zb = c("$sce"),
        Eb = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Rf = c("$compile"),
        Ua = b.document.createElement("a"),
        de = wb(b.location.href);
    $c.$inject = ["$document"];
    Bd.$inject = ["$provide"];
    var fe = 22,
        ee = ".",
        zd = "0";
    Cd.$inject = ["$locale"];
    Dd.$inject = ["$locale"];
    var Wf = {
        yyyy: Oa("FullYear", 4, 0, !1, !0),
        yy: Oa("FullYear", 2, 0, !0, !0),
        y: Oa("FullYear", 1, 0, !1, !0),
        MMMM: uc("Month"),
        MMM: uc("Month", !0),
        MM: Oa("Month", 2, 1),
        M: Oa("Month", 1, 1),
        LLLL: uc("Month", !1, !0),
        dd: Oa("Date", 2),
        d: Oa("Date", 1),
        HH: Oa("Hours", 2),
        H: Oa("Hours", 1),
        hh: Oa("Hours", 2, -12),
        h: Oa("Hours", 1, -12),
        mm: Oa("Minutes", 2),
        m: Oa("Minutes", 1),
        ss: Oa("Seconds", 2),
        s: Oa("Seconds", 1),
        sss: Oa("Milliseconds", 3),
        EEEE: uc("Day"),
        EEE: uc("Day", !0),
        a: function (b, c) {
            return 12 > b.getHours() ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function (b, c, d) {
            b = -1 * d;
            return (0 <= b ? "+" : "") + (jc(Math[0 <
                b ? "floor" : "ceil"](b / 60), 2) + jc(Math.abs(b % 60), 2))
        },
        ww: Gd(2),
        w: Gd(1),
        G: kd,
        GG: kd,
        GGG: kd,
        GGGG: function (b, c) {
            return 0 >= b.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1]
        }
    },
        Vf = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Uf = /^\-?\d+$/;
    Od.$inject = ["$locale"];
    var Sf = p(wa),
        Tf = p(Oc);
    Md.$inject = ["$parse"];
    var Ye = p({
        restrict: "E",
        compile: function (b, c) {
            if (!c.href && !c.xlinkHref) return function (b, c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var d = "[object SVGAnimatedString]" ===
                        ab.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function (b) {
                        c.attr(d) || b.preventDefault()
                    })
                }
            }
        }
    }),
        ad = {};
    e(Lc, function (b, c) {
        function d(b, f, g) {
            b.$watch(g[e], function (b) {
                g.$set(c, !!b)
            })
        }
        if ("multiple" != b) {
            var e = Ha("ng-" + c),
                f = d;
            "checked" === b && (f = function (b, c, f) {
                f.ngModel !== f[e] && d(b, c, f)
            });
            ad[e] = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    link: f
                }
            }
        }
    });
    e(Id, function (b, c) {
        ad[c] = function () {
            return {
                priority: 100,
                link: function (b, d, e) {
                    "ngPattern" === c && "/" == e.ngPattern.charAt(0) && (d = e.ngPattern.match(Me)) ?
                        e.$set("ngPattern", RegExp(d[1], d[2])) : b.$watch(e[c], function (b) {
                            e.$set(c, b)
                        })
                }
            }
        }
    });
    e(["src", "srcset", "href"], function (b) {
        var c = Ha("ng-" + b);
        ad[c] = function () {
            return {
                priority: 99,
                link: function (d, e, f) {
                    var g = b,
                        h = b;
                    "href" === b && "[object SVGAnimatedString]" === ab.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function (c) {
                        c ? (f.$set(h, c), Qb && g && e.prop(g, f[h])) : "href" === b && f.$set(h, null)
                    })
                }
            }
        }
    });
    var cd = {
        $addControl: n,
        $$renameControl: function (b, c) {
            b.$name = c
        },
        $removeControl: n,
        $setValidity: n,
        $setDirty: n,
        $setPristine: n,
        $setSubmitted: n
    };
    Rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var je = function (b) {
        return ["$timeout", "$parse", function (c, d) {
            function e(b) {
                return "" === b ? d('this[""]').assign : d(b).assign || n
            }
            return {
                name: "form",
                restrict: b ? "EAC" : "E",
                require: ["form", "^^?form"],
                controller: Rd,
                compile: function (d, f) {
                    d.addClass(tc).addClass(Kc);
                    var g = f.name ? "name" : b && f.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (b, d, f, h) {
                            var j = h[0];
                            if (!("action" in f)) {
                                var l = function (c) {
                                    b.$apply(function () {
                                        j.$commitViewValue();
                                        j.$setSubmitted()
                                    });
                                    c.preventDefault()
                                };
                                d[0].addEventListener("submit", l, !1);
                                d.on("$destroy", function () {
                                    c(function () {
                                        d[0].removeEventListener("submit", l, !1)
                                    }, 0, !1)
                                })
                            } (h[1] || j.$$parentForm).$addControl(j);
                            var o = g ? e(j.$name) : n;
                            g && (o(b, j), f.$observe(g, function (c) {
                                j.$name !== c && (o(b, void 0), j.$$parentForm.$$renameControl(j, c), o = e(j.$name), o(b, j))
                            }));
                            d.on("$destroy", function () {
                                j.$$parentForm.$removeControl(j);
                                o(b, void 0);
                                k(j, cd)
                            })
                        }
                    }
                }
            }
        }]
    },
        Ze = je(),
        mf = je(!0),
        Xf = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        bg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        cg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        dg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        ke = /^(\d{4,})-(\d{2})-(\d{2})$/,
        le = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Ad = /^(\d{4,})-W(\d\d)$/,
        me = /^(\d{4,})-(\d\d)$/,
        ne = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        ge = W();
    e(["date", "datetime-local",
        "month", "time", "week"
    ], function (b) {
        ge[b] = !0
    });
    var oe = {
        text: function (b, c, d, e, f, g) {
            xc(b, c, d, e, f, g);
            md(e)
        },
        date: zc("date", ke, Nc(ke, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": zc("datetimelocal", le, Nc(le, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: zc("time", ne, Nc(ne, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: zc("week", Ad, function (b, c) {
            if (z(b)) return b;
            if (u(b)) {
                Ad.lastIndex = 0;
                var d = Ad.exec(b);
                if (d) {
                    var e = +d[1],
                        f = +d[2],
                        g = d = 0,
                        h = 0,
                        j = 0,
                        k = Fd(e),
                        f = 7 * (f - 1);
                    c && (d = c.getHours(),
                        g = c.getMinutes(), h = c.getSeconds(), j = c.getMilliseconds());
                    return new Date(e, 0, k.getDate() + f, d, g, h, j)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: zc("month", me, Nc(me, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (b, c, d, e, f, g) {
            Pd(b, c, d, e);
            xc(b, c, d, e, f, g);
            e.$$parserName = "number";
            e.$parsers.push(function (b) {
                if (e.$isEmpty(b)) return null;
                if (dg.test(b)) return parseFloat(b)
            });
            e.$formatters.push(function (b) {
                if (!e.$isEmpty(b)) {
                    if (!w(b)) throw Jc("numfmt", b);
                    b = b.toString()
                }
                return b
            });
            if (r(d.min) || d.ngMin) {
                var h;
                e.$validators.min =
                    function (b) {
                        return e.$isEmpty(b) || s(h) || b >= h
                    };
                d.$observe("min", function (b) {
                    r(b) && !w(b) && (b = parseFloat(b, 10));
                    h = w(b) && !isNaN(b) ? b : void 0;
                    e.$validate()
                })
            }
            if (r(d.max) || d.ngMax) {
                var j;
                e.$validators.max = function (b) {
                    return e.$isEmpty(b) || s(j) || b <= j
                };
                d.$observe("max", function (b) {
                    r(b) && !w(b) && (b = parseFloat(b, 10));
                    j = w(b) && !isNaN(b) ? b : void 0;
                    e.$validate()
                })
            }
        },
        url: function (b, c, d, e, f, g) {
            xc(b, c, d, e, f, g);
            md(e);
            e.$$parserName = "url";
            e.$validators.url = function (b, c) {
                var d = b || c;
                return e.$isEmpty(d) || bg.test(d)
            }
        },
        email: function (b,
            c, d, e, f, g) {
            xc(b, c, d, e, f, g);
            md(e);
            e.$$parserName = "email";
            e.$validators.email = function (b, c) {
                var d = b || c;
                return e.$isEmpty(d) || cg.test(d)
            }
        },
        radio: function (b, c, d, e) {
            s(d.name) && c.attr("name", ++Pc);
            c.on("click", function (b) {
                c[0].checked && e.$setViewValue(d.value, b && b.type)
            });
            e.$render = function () {
                c[0].checked = d.value == e.$viewValue
            };
            d.$observe("value", e.$render)
        },
        checkbox: function (b, c, d, e, f, g, h, j) {
            var k = Sd(j, b, "ngTrueValue", d.ngTrueValue, !0),
                l = Sd(j, b, "ngFalseValue", d.ngFalseValue, !1);
            c.on("click", function (b) {
                e.$setViewValue(c[0].checked,
                    b && b.type)
            });
            e.$render = function () {
                c[0].checked = e.$viewValue
            };
            e.$isEmpty = function (b) {
                return !1 === b
            };
            e.$formatters.push(function (b) {
                return N(b, k)
            });
            e.$parsers.push(function (b) {
                return b ? k : l
            })
        },
        hidden: n,
        button: n,
        submit: n,
        reset: n,
        file: n
    },
        Vd = ["$browser", "$sniffer", "$filter", "$parse", function (b, c, d, e) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function (f, g, h, j) {
                        j[0] && (oe[wa(h.type)] || oe.text)(f, g, h, j[0], c, b, d, e)
                    }
                }
            }
        }],
        eg = /^(true|false|\d+)$/,
        Ef = function () {
            return {
                restrict: "A",
                priority: 100,
                compile: function (b,
                    c) {
                    return eg.test(c.ngValue) ? function (b, c, d) {
                        d.$set("value", b.$eval(d.ngValue))
                    } : function (b, c, d) {
                        b.$watch(d.ngValue, function (b) {
                            d.$set("value", b)
                        })
                    }
                }
            }
        },
        df = ["$compile", function (b) {
            return {
                restrict: "AC",
                compile: function (c) {
                    b.$$addBindingClass(c);
                    return function (c, d, e) {
                        b.$$addBindingInfo(d, e.ngBind);
                        d = d[0];
                        c.$watch(e.ngBind, function (b) {
                            d.textContent = s(b) ? "" : b
                        })
                    }
                }
            }
        }],
        ff = ["$interpolate", "$compile", function (b, c) {
            return {
                compile: function (d) {
                    c.$$addBindingClass(d);
                    return function (d, e, f) {
                        d = b(e.attr(f.$attr.ngBindTemplate));
                        c.$$addBindingInfo(e, d.expressions);
                        e = e[0];
                        f.$observe("ngBindTemplate", function (b) {
                            e.textContent = s(b) ? "" : b
                        })
                    }
                }
            }
        }],
        ef = ["$sce", "$parse", "$compile", function (b, c, d) {
            return {
                restrict: "A",
                compile: function (e, f) {
                    var g = c(f.ngBindHtml),
                        h = c(f.ngBindHtml, function (b) {
                            return (b || "").toString()
                        });
                    d.$$addBindingClass(e);
                    return function (c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function () {
                            e.html(b.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }],
        Df = p({
            restrict: "A",
            require: "ngModel",
            link: function (b, c, d, e) {
                e.$viewChangeListeners.push(function () {
                    b.$eval(d.ngChange)
                })
            }
        }),
        gf = nd("", !0),
        jf = nd("Odd", 0),
        hf = nd("Even", 1),
        kf = ec({
            compile: function (b, c) {
                c.$set("ngCloak", void 0);
                b.removeClass("ng-cloak")
            }
        }),
        lf = [function () {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        $d = {},
        fg = {
            blur: !0,
            focus: !0
        };
    e("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (b) {
        var c = Ha("ng-" + b);
        $d[c] = ["$parse", "$rootScope", function (d, e) {
            return {
                restrict: "A",
                compile: function (f, g) {
                    var h =
                        d(g[c], null, true);
                    return function (c, d) {
                        d.on(b, function (d) {
                            var f = function () {
                                h(c, {
                                    $event: d
                                })
                            };
                            fg[b] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var of = ["$animate", "$compile", function (b, c) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (d, e, f, g, h) {
                var j, k, l;
                d.$watch(f.ngIf, function (d) {
                    d ? k || h(function (d, g) {
                        k = g;
                        d[d.length++] = c.$$createComment("end ngIf", f.ngIf);
                        j = {
                            clone: d
                        };
                        b.enter(d, e.parent(), e)
                    }) : (l && (l.remove(), l = null), k && (k.$destroy(), k =
                        null), j && (l = L(j.clone), b.leave(l).then(function () {
                            l = null
                        }), j = null))
                })
            }
        }
    }], pf = ["$templateRequest", "$anchorScroll", "$animate", function (b, c, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: mb.noop,
            compile: function (e, f) {
                var g = f.ngInclude || f.src,
                    h = f.onload || "",
                    j = f.autoscroll;
                return function (e, f, k, l, o) {
                    var m = 0,
                        n, s, u, p = function () {
                            s && (s.remove(), s = null);
                            n && (n.$destroy(), n = null);
                            u && (d.leave(u).then(function () {
                                s = null
                            }), s = u, u = null)
                        };
                    e.$watch(g, function (g) {
                        var k = function () {
                            !r(j) ||
                                j && !e.$eval(j) || c()
                        },
                            s = ++m;
                        g ? (b(g, !0).then(function (b) {
                            if (!e.$$destroyed && s === m) {
                                var c = e.$new();
                                l.template = b;
                                b = o(c, function (b) {
                                    p();
                                    d.enter(b, null, f).then(k)
                                });
                                n = c;
                                u = b;
                                n.$emit("$includeContentLoaded", g);
                                e.$eval(h)
                            }
                        }, function () {
                            e.$$destroyed || s !== m || (p(), e.$emit("$includeContentError", g))
                        }), e.$emit("$includeContentRequested", g)) : (p(), l.template = null)
                    })
                }
            }
        }
    }], Gf = ["$compile", function (c) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function (d, e, f, g) {
                ab.call(e[0]).match(/SVG/) ? (e.empty(),
                    c(tb(g.template, b.document).childNodes)(d, function (b) {
                        e.append(b)
                    }, {
                        futureParentElement: e
                    })) : (e.html(g.template), c(e.contents())(d))
            }
        }
    }], qf = ec({
        priority: 450,
        compile: function () {
            return {
                pre: function (b, c, d) {
                    b.$eval(d.ngInit)
                }
            }
        }
    }), Cf = function () {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function (b, c, d, f) {
                var g = c.attr(d.$attr.ngList) || ", ",
                    h = "false" !== d.ngTrim,
                    j = h ? ya(g) : g;
                f.$parsers.push(function (b) {
                    if (!s(b)) {
                        var c = [];
                        b && e(b.split(j), function (b) {
                            b && c.push(h ? ya(b) : b)
                        });
                        return c
                    }
                });
                f.$formatters.push(function (b) {
                    if (ia(b)) return b.join(g)
                });
                f.$isEmpty = function (b) {
                    return !b || !b.length
                }
            }
        }
    }, Kc = "ng-valid", he = "ng-invalid", tc = "ng-pristine", dd = "ng-dirty", ie = "ng-pending", Jc = c("ngModel"), gg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (b, c, d, f, g, h, j, k, l, o) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = void 0;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = o(d.name || "", !1)(b);
        this.$$parentForm = cd;
        var m = g(d.ngModel),
            u = m.assign,
            p = m,
            t = u,
            q = null,
            L, B = this;
        this.$$setOptions = function (b) {
            if ((B.$options = b) && b.getterSetter) {
                var c = g(d.ngModel + "()"),
                    e = g(d.ngModel + "($$$p)");
                p = function (b) {
                    var d = m(b);
                    A(d) && (d = c(b));
                    return d
                };
                t = function (b, c) {
                    A(m(b)) ? e(b, {
                        $$$p: c
                    }) : u(b, c)
                }
            } else if (!m.assign) throw Jc("nonassign", d.ngModel, M(f));
        };
        this.$render =
            n;
        this.$isEmpty = function (b) {
            return s(b) || "" === b || null === b || b !== b
        };
        this.$$updateEmptyClasses = function (b) {
            B.$isEmpty(b) ? (h.removeClass(f, "ng-not-empty"), h.addClass(f, "ng-empty")) : (h.removeClass(f, "ng-empty"), h.addClass(f, "ng-not-empty"))
        };
        var D = 0;
        Kd({
            ctrl: this,
            $element: f,
            set: function (b, c) {
                b[c] = !0
            },
            unset: function (b, c) {
                delete b[c]
            },
            $animate: h
        });
        this.$setPristine = function () {
            B.$dirty = !1;
            B.$pristine = !0;
            h.removeClass(f, dd);
            h.addClass(f, tc)
        };
        this.$setDirty = function () {
            B.$dirty = !0;
            B.$pristine = !1;
            h.removeClass(f,
                tc);
            h.addClass(f, dd);
            B.$$parentForm.$setDirty()
        };
        this.$setUntouched = function () {
            B.$touched = !1;
            B.$untouched = !0;
            h.setClass(f, "ng-untouched", "ng-touched")
        };
        this.$setTouched = function () {
            B.$touched = !0;
            B.$untouched = !1;
            h.setClass(f, "ng-touched", "ng-untouched")
        };
        this.$rollbackViewValue = function () {
            j.cancel(q);
            B.$viewValue = B.$$lastCommittedViewValue;
            B.$render()
        };
        this.$validate = function () {
            if (!w(B.$modelValue) || !isNaN(B.$modelValue)) {
                var b = B.$$rawModelValue,
                    c = B.$valid,
                    d = B.$modelValue,
                    e = B.$options && B.$options.allowInvalid;
                B.$$runValidators(b, B.$$lastCommittedViewValue, function (f) {
                    e || c === f || (B.$modelValue = f ? b : void 0, B.$modelValue !== d && B.$$writeModelToScope())
                })
            }
        };
        this.$$runValidators = function (b, c, d) {
            function f() {
                var d = !0;
                e(B.$validators, function (e, f) {
                    var g = e(b, c);
                    d = d && g;
                    h(f, g)
                });
                return d ? !0 : (e(B.$asyncValidators, function (b, c) {
                    h(c, null)
                }), !1)
            }

            function g() {
                var d = [],
                    f = !0;
                e(B.$asyncValidators, function (e, g) {
                    var j = e(b, c);
                    if (!j || !A(j.then)) throw Jc("nopromise", j);
                    h(g, void 0);
                    d.push(j.then(function () {
                        h(g, !0)
                    }, function () {
                        f = !1;
                        h(g, !1)
                    }))
                });
                d.length ? l.all(d).then(function () {
                    j(f)
                }, n) : j(!0)
            }

            function h(b, c) {
                k === D && B.$setValidity(b, c)
            }

            function j(b) {
                k === D && d(b)
            }
            D++;
            var k = D;
            (function () {
                var b = B.$$parserName || "parse";
                if (s(L)) h(b, null);
                else return L || (e(B.$validators, function (b, c) {
                    h(c, null)
                }), e(B.$asyncValidators, function (b, c) {
                    h(c, null)
                })), h(b, L), L;
                return !0
            })() ? f() ? g() : j(!1) : j(!1)
        };
        this.$commitViewValue = function () {
            var b = B.$viewValue;
            j.cancel(q);
            if (B.$$lastCommittedViewValue !== b || "" === b && B.$$hasNativeValidators) B.$$updateEmptyClasses(b),
                B.$$lastCommittedViewValue = b, B.$pristine && this.$setDirty(), this.$$parseAndValidate()
        };
        this.$$parseAndValidate = function () {
            var c = B.$$lastCommittedViewValue;
            if (L = s(c) ? void 0 : !0)
                for (var d = 0; d < B.$parsers.length; d++)
                    if (c = B.$parsers[d](c), s(c)) {
                        L = !1;
                        break
                    }
            w(B.$modelValue) && isNaN(B.$modelValue) && (B.$modelValue = p(b));
            var e = B.$modelValue,
                f = B.$options && B.$options.allowInvalid;
            B.$$rawModelValue = c;
            f && (B.$modelValue = c, B.$modelValue !== e && B.$$writeModelToScope());
            B.$$runValidators(c, B.$$lastCommittedViewValue, function (b) {
                f ||
                    (B.$modelValue = b ? c : void 0, B.$modelValue !== e && B.$$writeModelToScope())
            })
        };
        this.$$writeModelToScope = function () {
            t(b, B.$modelValue);
            e(B.$viewChangeListeners, function (b) {
                try {
                    b()
                } catch (d) {
                    c(d)
                }
            })
        };
        this.$setViewValue = function (b, c) {
            B.$viewValue = b;
            B.$options && !B.$options.updateOnDefault || B.$$debounceViewValueCommit(c)
        };
        this.$$debounceViewValueCommit = function (c) {
            var d = 0,
                e = B.$options;
            e && r(e.debounce) && (e = e.debounce, w(e) ? d = e : w(e[c]) ? d = e[c] : w(e["default"]) && (d = e["default"]));
            j.cancel(q);
            d ? q = j(function () {
                B.$commitViewValue()
            },
                d) : k.$$phase ? B.$commitViewValue() : b.$apply(function () {
                    B.$commitViewValue()
                })
        };
        b.$watch(function () {
            var c = p(b);
            if (c !== B.$modelValue && (B.$modelValue === B.$modelValue || c === c)) {
                B.$modelValue = B.$$rawModelValue = c;
                L = void 0;
                for (var d = B.$formatters, e = d.length, f = c; e--;) f = d[e](f);
                B.$viewValue !== f && (B.$$updateEmptyClasses(f), B.$viewValue = B.$$lastCommittedViewValue = f, B.$render(), B.$$runValidators(c, f, n))
            }
            return c
        })
    }], Bf = ["$rootScope", function (b) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: gg,
            priority: 1,
            compile: function (c) {
                c.addClass(tc).addClass("ng-untouched").addClass(Kc);
                return {
                    pre: function (b, c, d, e) {
                        var f = e[0],
                            c = e[1] || f.$$parentForm;
                        f.$$setOptions(e[2] && e[2].$options);
                        c.$addControl(f);
                        d.$observe("name", function (b) {
                            f.$name !== b && f.$$parentForm.$$renameControl(f, b)
                        });
                        b.$on("$destroy", function () {
                            f.$$parentForm.$removeControl(f)
                        })
                    },
                    post: function (c, d, e, f) {
                        var g = f[0];
                        if (g.$options && g.$options.updateOn) d.on(g.$options.updateOn, function (b) {
                            g.$$debounceViewValueCommit(b && b.type)
                        });
                        d.on("blur", function () {
                            g.$touched || (b.$$phase ? c.$evalAsync(g.$setTouched) : c.$apply(g.$setTouched))
                        })
                    }
                }
            }
        }
    }], hg = /(\s+|^)default(\s+|$)/, Ff = function () {
        return {
            restrict: "A",
            controller: ["$scope", "$attrs", function (b, c) {
                var d = this;
                this.$options = I(b.$eval(c.ngModelOptions));
                r(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = ya(this.$options.updateOn.replace(hg, function () {
                    d.$options.updateOnDefault = !0;
                    return " "
                }))) : this.$options.updateOnDefault = !0
            }]
        }
    }, rf = ec({
        terminal: !0,
        priority: 1E3
    }),
        ig = c("ngOptions"), jg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, zf = ["$compile", "$document", "$parse", function (c, f, g) {
            function h(b, c, e) {
                function f(b, c, d, e, g) {
                    this.selectValue = b;
                    this.viewValue = c;
                    this.label = d;
                    this.group = e;
                    this.disabled = g
                }

                function j(b) {
                    var c;
                    if (!o && d(b)) c = b;
                    else {
                        c = [];
                        for (var e in b) b.hasOwnProperty(e) &&
                            "$" !== e.charAt(0) && c.push(e)
                    }
                    return c
                }
                var k = b.match(jg);
                if (!k) throw ig("iexp", b, M(c));
                var l = k[5] || k[7],
                    o = k[6],
                    b = / as /.test(k[0]) && k[1],
                    m = k[9],
                    c = g(k[2] ? k[1] : l),
                    n = b && g(b) || c,
                    s = m && g(m),
                    u = m ? function (b, c) {
                        return s(e, c)
                    } : function (b) {
                        return za(b)
                    },
                    p = function (b, c) {
                        return u(b, B(b, c))
                    },
                    t = g(k[2] || k[1]),
                    q = g(k[3] || ""),
                    r = g(k[4] || ""),
                    L = g(k[8]),
                    w = {},
                    B = o ? function (b, c) {
                        w[o] = c;
                        w[l] = b;
                        return w
                    } : function (b) {
                        w[l] = b;
                        return w
                    };
                return {
                    trackBy: m,
                    getTrackByValue: p,
                    getWatchables: g(L, function (b) {
                        for (var c = [], b = b || [], d = j(b),
                                f = d.length, g = 0; g < f; g++) {
                            var h = b === d ? g : d[g],
                                l = b[h],
                                h = B(l, h),
                                l = u(l, h);
                            c.push(l);
                            if (k[2] || k[1]) l = t(e, h), c.push(l);
                            k[4] && (h = r(e, h), c.push(h))
                        }
                        return c
                    }),
                    getOptions: function () {
                        for (var b = [], c = {}, d = L(e) || [], g = j(d), h = g.length, k = 0; k < h; k++) {
                            var l = d === g ? k : g[k],
                                o = B(d[l], l),
                                s = n(e, o),
                                l = u(s, o),
                                w = t(e, o),
                                D = q(e, o),
                                o = r(e, o),
                                s = new f(l, s, w, D, o);
                            b.push(s);
                            c[l] = s
                        }
                        return {
                            items: b,
                            selectValueMap: c,
                            getOptionFromViewValue: function (b) {
                                return c[p(b)]
                            },
                            getViewValueFromOption: function (b) {
                                return m ? mb.copy(b.viewValue) : b.viewValue
                            }
                        }
                    }
                }
            }
            var j = b.document.createElement("option"),
                k = b.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function (b, c, d, e) {
                        e[0].registerOption = n
                    },
                    post: function (b, d, g, l) {
                        function o() {
                            var b = w && m.readValue();
                            if (w)
                                for (var c = w.items.length - 1; 0 <= c; c--) {
                                    var e = w.items[c];
                                    e.group ? Ia(e.element.parentNode) : Ia(e.element)
                                }
                            w = B.getOptions();
                            var f = {};
                            q && d.prepend(u);
                            w.items.forEach(function (b) {
                                var c;
                                if (r(b.group)) {
                                    (c = f[b.group]) || (c = k.cloneNode(!1), D.appendChild(c), c.label =
                                        b.group, f[b.group] = c);
                                    var d = j.cloneNode(!1)
                                } else c = D, d = j.cloneNode(!1);
                                c.appendChild(d);
                                c = d;
                                b.element = c;
                                c.disabled = b.disabled;
                                b.label !== c.label && (c.label = b.label, c.textContent = b.label);
                                b.value !== c.value && (c.value = b.selectValue)
                            });
                            d[0].appendChild(D);
                            n.$render();
                            n.$isEmpty(b) || (c = m.readValue(), (B.trackBy || s ? N(b, c) : b === c) || (n.$setViewValue(c), n.$render()))
                        }
                        for (var m = l[0], n = l[1], s = g.multiple, u, l = 0, p = d.children(), t = p.length; l < t; l++)
                            if ("" === p[l].value) {
                                u = p.eq(l);
                                break
                            }
                        var q = !!u,
                            L = ca(j.cloneNode(!1));
                        L.val("?");
                        var w, B = h(g.ngOptions, d, b),
                            D = f[0].createDocumentFragment();
                        s ? (n.$isEmpty = function (b) {
                            return !b || 0 === b.length
                        }, m.writeValue = function (b) {
                            w.items.forEach(function (b) {
                                b.element.selected = !1
                            });
                            b && b.forEach(function (b) {
                                if (b = w.getOptionFromViewValue(b)) b.element.selected = !0
                            })
                        }, m.readValue = function () {
                            var b = d.val() || [],
                                c = [];
                            e(b, function (b) {
                                (b = w.selectValueMap[b]) && !b.disabled && c.push(w.getViewValueFromOption(b))
                            });
                            return c
                        }, B.trackBy && b.$watchCollection(function () {
                            if (ia(n.$viewValue)) return n.$viewValue.map(function (b) {
                                return B.getTrackByValue(b)
                            })
                        },
                            function () {
                                n.$render()
                            })) : (m.writeValue = function (b) {
                                var c = w.getOptionFromViewValue(b);
                                c ? (d[0].value !== c.selectValue && (L.remove(), q || u.remove(), d[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : null === b || q ? (L.remove(), q || d.prepend(u), d.val(""), u.prop("selected", !0), u.attr("selected", !0)) : (q || u.remove(), d.prepend(L), d.val("?"), L.prop("selected", !0), L.attr("selected", !0))
                            }, m.readValue = function () {
                                var b = w.selectValueMap[d.val()];
                                return b && !b.disabled ? (q || u.remove(),
                                    L.remove(), w.getViewValueFromOption(b)) : null
                            }, B.trackBy && b.$watch(function () {
                                return B.getTrackByValue(n.$viewValue)
                            }, function () {
                                n.$render()
                            }));
                        q ? (u.remove(), c(u)(b), u.removeClass("ng-scope")) : u = ca(j.cloneNode(!1));
                        d.empty();
                        o();
                        b.$watchCollection(B.getWatchables, o)
                    }
                }
            }
        }], sf = ["$locale", "$interpolate", "$log", function (b, c, d) {
            var f = /{}/g,
                g = /^when(Minus)?(.+)$/;
            return {
                link: function (h, j, k) {
                    function l(b) {
                        j.text(b || "")
                    }
                    var o = k.count,
                        m = k.$attr.when && j.attr(k.$attr.when),
                        u = k.offset || 0,
                        p = h.$eval(m) || {},
                        t = {},
                        q = c.startSymbol(),
                        r = c.endSymbol(),
                        L = q + o + "-" + u + r,
                        B = mb.noop,
                        D;
                    e(k, function (b, c) {
                        var d = g.exec(c);
                        d && (d = (d[1] ? "-" : "") + wa(d[2]), p[d] = j.attr(k.$attr[c]))
                    });
                    e(p, function (b, d) {
                        t[d] = c(b.replace(f, L))
                    });
                    h.$watch(o, function (c) {
                        var e = parseFloat(c),
                            f = isNaN(e);
                        f || e in p || (e = b.pluralCat(e - u));
                        e === D || f && w(D) && isNaN(D) || (B(), f = t[e], s(f) ? (null != c && d.debug("ngPluralize: no rule defined for '" + e + "' in " + m), B = n, l()) : B = h.$watch(f, l), D = e)
                    })
                }
            }
        }], tf = ["$parse", "$animate", "$compile", function (b, f, g) {
            var h = c("ngRepeat"),
                j = function (b,
                    c, d, e, f, g, h) {
                    b[d] = e;
                    f && (b[f] = g);
                    b.$index = c;
                    b.$first = 0 === c;
                    b.$last = c === h - 1;
                    b.$middle = !(b.$first || b.$last);
                    b.$odd = !(b.$even = 0 === (c & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (c, k) {
                    var l = k.ngRepeat,
                        o = g.$$createComment("end ngRepeat", l),
                        m = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!m) throw h("iexp", l);
                    var n = m[1],
                        s = m[2],
                        u = m[3],
                        p = m[4],
                        m = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!m) throw h("iidexp", n);
                    var t = m[3] || m[1],
                        q = m[2];
                    if (u && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(u) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(u))) throw h("badident", u);
                    var r, w, B, D, z = {
                        $id: za
                    };
                    p ? r = b(p) : (B = function (b, c) {
                        return za(c)
                    }, D = function (b) {
                        return b
                    });
                    return function (b, c, g, k, m) {
                        r && (w = function (c, d, e) {
                            q && (z[q] = c);
                            z[t] = d;
                            z.$index = e;
                            return r(b, z)
                        });
                        var n = W();
                        b.$watchCollection(s, function (g) {
                            var k, s, p = c[0],
                                r, z = W(),
                                A, O, v, E, x, M, F;
                            u && (b[u] = g);
                            if (d(g)) x =
                                g, s = w || B;
                            else
                                for (F in s = w || D, x = [], g) Gb.call(g, F) && "$" !== F.charAt(0) && x.push(F);
                            A = x.length;
                            F = Array(A);
                            for (k = 0; k < A; k++)
                                if (O = g === x ? k : x[k], v = g[O], E = s(O, v, k), n[E]) M = n[E], delete n[E], z[E] = M, F[k] = M;
                                else {
                                    if (z[E]) throw e(F, function (b) {
                                        b && b.scope && (n[b.id] = b)
                                    }), h("dupes", l, E, v);
                                    F[k] = {
                                        id: E,
                                        scope: void 0,
                                        clone: void 0
                                    };
                                    z[E] = !0
                                }
                            for (r in n) {
                                M = n[r];
                                E = L(M.clone);
                                f.leave(E);
                                if (E[0].parentNode) {
                                    k = 0;
                                    for (s = E.length; k < s; k++) E[k].$$NG_REMOVED = !0
                                }
                                M.scope.$destroy()
                            }
                            for (k = 0; k < A; k++)
                                if (O = g === x ? k : x[k], v = g[O], M = F[k], M.scope) {
                                    r =
                                        p;
                                    do r = r.nextSibling; while (r && r.$$NG_REMOVED);
                                    M.clone[0] != r && f.move(L(M.clone), null, p);
                                    p = M.clone[M.clone.length - 1];
                                    j(M.scope, k, t, v, q, O, A)
                                } else m(function (b, c) {
                                    M.scope = c;
                                    var d = o.cloneNode(!1);
                                    b[b.length++] = d;
                                    f.enter(b, null, p);
                                    p = d;
                                    M.clone = b;
                                    z[M.id] = M;
                                    j(M.scope, k, t, v, q, O, A)
                                });
                            n = z
                        })
                    }
                }
            }
        }], uf = ["$animate", function (b) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (c, d, e) {
                    c.$watch(e.ngShow, function (c) {
                        b[c ? "removeClass" : "addClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }], nf = ["$animate", function (b) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (c, d, e) {
                    c.$watch(e.ngHide, function (c) {
                        b[c ? "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }], vf = ec(function (b, c, d) {
            b.$watch(d.ngStyle, function (b, d) {
                d && b !== d && e(d, function (b, d) {
                    c.css(d, "")
                });
                b && c.css(b)
            }, !0)
        }), wf = ["$animate", "$compile", function (b, c) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (d, f, g, h) {
                    var j = [],
                        k = [],
                        l = [],
                        o = [],
                        m = function (b, c) {
                            return function () {
                                b.splice(c, 1)
                            }
                        };
                    d.$watch(g.ngSwitch || g.on,
                        function (d) {
                            var f, g;
                            f = 0;
                            for (g = l.length; f < g; ++f) b.cancel(l[f]);
                            f = l.length = 0;
                            for (g = o.length; f < g; ++f) {
                                var n = L(k[f].clone);
                                o[f].$destroy();
                                (l[f] = b.leave(n)).then(m(l, f))
                            }
                            k.length = 0;
                            o.length = 0;
                            (j = h.cases["!" + d] || h.cases["?"]) && e(j, function (d) {
                                d.transclude(function (e, f) {
                                    o.push(f);
                                    var g = d.element;
                                    e[e.length++] = c.$$createComment("end ngSwitchWhen");
                                    k.push({
                                        clone: e
                                    });
                                    b.enter(e, g.parent(), g)
                                })
                            })
                        })
                }
            }
        }], xf = ec({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (b, c, d, e, f) {
                e.cases["!" +
                    d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({
                    transclude: f,
                    element: c
                })
            }
        }), yf = ec({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (b, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }), kg = c("ngTransclude"), Af = ec({
            restrict: "EAC",
            link: function (b, c, d, e, f) {
                d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");
                if (!f) throw kg("orphan", M(c));
                f(function (b) {
                    b.length && (c.empty(), c.append(b))
                }, null,
                    d.ngTransclude || d.ngTranscludeSlot)
            }
        }), $e = ["$templateCache", function (b) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (c, d) {
                    "text/ng-template" == d.type && b.put(d.id, c[0].text)
                }
            }
        }], lg = {
            $setViewValue: n,
            $render: n
        }, mg = ["$element", "$scope", function (c, d) {
            var e = this,
                f = new ua;
            e.ngModelCtrl = lg;
            e.unknownOption = ca(b.document.createElement("option"));
            e.renderUnknownOption = function (b) {
                b = "? " + za(b) + " ?";
                e.unknownOption.val(b);
                c.prepend(e.unknownOption);
                c.val(b)
            };
            d.$on("$destroy", function () {
                e.renderUnknownOption =
                    n
            });
            e.removeUnknownOption = function () {
                e.unknownOption.parent() && e.unknownOption.remove()
            };
            e.readValue = function () {
                e.removeUnknownOption();
                return c.val()
            };
            e.writeValue = function (b) {
                e.hasOption(b) ? (e.removeUnknownOption(), c.val(b), "" === b && e.emptyOption.prop("selected", !0)) : null == b && e.emptyOption ? (e.removeUnknownOption(), c.val("")) : e.renderUnknownOption(b)
            };
            e.addOption = function (b, c) {
                if (8 !== c[0].nodeType) {
                    sa(b, '"option value"');
                    "" === b && (e.emptyOption = c);
                    var d = f.get(b) || 0;
                    f.put(b, d + 1);
                    e.ngModelCtrl.$render();
                    c[0].hasAttribute("selected") && (c[0].selected = !0)
                }
            };
            e.removeOption = function (b) {
                var c = f.get(b);
                c && (1 === c ? (f.remove(b), "" === b && (e.emptyOption = void 0)) : f.put(b, c - 1))
            };
            e.hasOption = function (b) {
                return !!f.get(b)
            };
            e.registerOption = function (b, c, d, f, g) {
                if (f) {
                    var h;
                    d.$observe("value", function (b) {
                        r(h) && e.removeOption(h);
                        h = b;
                        e.addOption(b, c)
                    })
                } else g ? b.$watch(g, function (b, f) {
                    d.$set("value", b);
                    f !== b && e.removeOption(f);
                    e.addOption(b, c)
                }) : e.addOption(d.value, c);
                c.on("$destroy", function () {
                    e.removeOption(d.value);
                    e.ngModelCtrl.$render()
                })
            }
        }], af = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: mg,
                priority: 1,
                link: {
                    pre: function (b, c, d, f) {
                        var g = f[1];
                        if (g) {
                            var h = f[0];
                            h.ngModelCtrl = g;
                            c.on("change", function () {
                                b.$apply(function () {
                                    g.$setViewValue(h.readValue())
                                })
                            });
                            if (d.multiple) {
                                h.readValue = function () {
                                    var b = [];
                                    e(c.find("option"), function (c) {
                                        c.selected && b.push(c.value)
                                    });
                                    return b
                                };
                                h.writeValue = function (b) {
                                    var d = new ua(b);
                                    e(c.find("option"), function (b) {
                                        b.selected = r(d.get(b.value))
                                    })
                                };
                                var j, k = NaN;
                                b.$watch(function () {
                                    k !== g.$viewValue || N(j, g.$viewValue) || (j = J(g.$viewValue), g.$render());
                                    k = g.$viewValue
                                });
                                g.$isEmpty = function (b) {
                                    return !b || 0 === b.length
                                }
                            }
                        }
                    },
                    post: function (b, c, d, e) {
                        var f = e[1];
                        if (f) {
                            var g = e[0];
                            f.$render = function () {
                                g.writeValue(f.$viewValue)
                            }
                        }
                    }
                }
            }
        }, cf = ["$interpolate", function (b) {
            return {
                restrict: "E",
                priority: 100,
                compile: function (c, d) {
                    if (r(d.value)) var e = b(d.value, !0);
                    else {
                        var f = b(c.text(), !0);
                        f || d.$set("value", c.text())
                    }
                    return function (b, c, d) {
                        var g = c.parent();
                        (g = g.data("$selectController") ||
                            g.parent().data("$selectController")) && g.registerOption(b, c, d, e, f)
                    }
                }
            }
        }], bf = p({
            restrict: "E",
            terminal: !1
        }), Xd = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (b, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function (b, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function () {
                        e.$validate()
                    }))
                }
            }
        }, Wd = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (b, d, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function (b) {
                            u(b) && 0 < b.length && (b = RegExp("^" +
                                b + "$"));
                            if (b && !b.test) throw c("ngPattern")("noregexp", h, b, M(d));
                            g = b || void 0;
                            f.$validate()
                        });
                        f.$validators.pattern = function (b, c) {
                            return f.$isEmpty(c) || s(g) || g.test(c)
                        }
                    }
                }
            }
        }, Zd = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (b, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function (b) {
                            b = m(b);
                            f = isNaN(b) ? -1 : b;
                            e.$validate()
                        });
                        e.$validators.maxlength = function (b, c) {
                            return 0 > f || e.$isEmpty(c) || c.length <= f
                        }
                    }
                }
            }
        }, Yd = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (b, c, d, e) {
                    if (e) {
                        var f =
                            0;
                        d.$observe("minlength", function (b) {
                            f = m(b) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength = function (b, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        };
    b.angular.bootstrap ? b.console && console.log("WARNING: Tried to load angular more than once.") : (V(), R(mb), mb.module("ngLocale", [], ["$provide", function (b) {
        function c(b) {
            var b = b + "",
                d = b.indexOf(".");
            return -1 == d ? 0 : b.length - d - 1
        }
        b.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ",
                    "Anno Domini"
                ],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\u00a4",
                    negSuf: "",
                    posPre: "\u00a4",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (b, d) {
                var e = b | 0,
                    f = d;
                void 0 === f && (f = Math.min(c(b), 3));
                Math.pow(10, f);
                return 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]),
        ca(b.document).ready(function () {
            x(b.document, ja)
        }))
})(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router");
(function (b, c, d) {
    function e(b, c) {
        return X(new (X(function () { }, {
            prototype: b
        })), c)
    }

    function f(b) {
        return M(arguments, function (c) {
            c !== b && M(c, function (c, d) {
                b.hasOwnProperty(d) || (b[d] = c)
            })
        }), b
    }

    function g(b) {
        if (Object.keys) return Object.keys(b);
        var c = [];
        return M(b, function (b, d) {
            c.push(d)
        }), c
    }

    function h(b, c, d) {
        if (Array.prototype.indexOf) return b.indexOf(c, Number(d) || 0);
        var e = b.length >>> 0,
            d = Number(d) || 0,
            d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += e) ; e > d; d++)
            if (d in b && b[d] === c) return d;
        return -1
    }

    function j(b,
        c, d, e) {
        var f, j = [],
            k;
        for (k in d.path) {
            if (d.path[k] !== e.path[k]) break;
            j.push(d.path[k])
        }
        var d = {},
            e = [],
            l;
        for (l in j)
            if (j[l] && j[l].params && (f = g(j[l].params), f.length))
                for (var o in f) 0 <= h(e, f[o]) || (e.push(f[o]), d[f[o]] = b[f[o]]);
        return X({}, d, c)
    }

    function k(b, c, d) {
        if (!d) {
            var d = [],
                e;
            for (e in b) d.push(e)
        }
        for (e = 0; e < d.length; e++) {
            var f = d[e];
            if (b[f] != c[f]) return !1
        }
        return !0
    }

    function l(b, c) {
        var d = {};
        return M(b, function (b) {
            d[b] = c[b]
        }), d
    }

    function m(b) {
        var c = {},
            d = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments,
                1));
        return M(d, function (d) {
            d in b && (c[d] = b[d])
        }), c
    }

    function n(b) {
        var c = {},
            d = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1)),
            e;
        for (e in b) -1 == h(d, e) && (c[e] = b[e]);
        return c
    }

    function q(b, c) {
        var d = O(b),
            e = d ? [] : {};
        return M(b, function (b, f) {
            c(b, f) && (e[d ? e.length : f] = b)
        }), e
    }

    function p(b, c) {
        var d = O(b) ? [] : {};
        return M(b, function (b, e) {
            d[e] = c(b, e)
        }), d
    }

    function s(b, c) {
        var e = 1,
            j = 2,
            k = {},
            l = [],
            o = X(b.when(k), {
                $$promises: k,
                $$values: k
            });
        this.study = function (m) {
            function s(b, d) {
                if (q[d] !==
                    j) {
                    if (t.push(d), q[d] === e) throw t.splice(0, h(t, d)), Error("Cyclic dependency: " + t.join(" -> "));
                    if (q[d] = e, E(b)) p.push(d, [function () {
                        return c.get(b)
                    }], l);
                    else {
                        var f = c.annotate(b);
                        M(f, function (b) {
                            b !== d && m.hasOwnProperty(b) && s(m[b], b)
                        });
                        p.push(d, b, f)
                    }
                    t.pop();
                    q[d] = j
                }
            }
            if (!Z(m)) throw Error("'invocables' must be an object");
            var u = g(m || {}),
                p = [],
                t = [],
                q = {};
            return M(m, s), m = t = q = null,
                function (e, g, h) {
                    function j() {
                        --L || (w || f(r, g.$$values), t.$$values = r, t.$$promises = t.$$promises || !0, delete t.$$inheritedValues, s.resolve(r))
                    }

                    function l(b) {
                        t.$$failure = b;
                        s.reject(b)
                    }

                    function m(d, f, g) {
                        function k(b) {
                            n.reject(b);
                            l(b)
                        }

                        function o() {
                            if (!Q(t.$$failure)) try {
                                n.resolve(c.invoke(f, h, r)), n.promise.then(function (b) {
                                    r[d] = b;
                                    j()
                                }, k)
                            } catch (b) {
                                k(b)
                            }
                        }
                        var n = b.defer(),
                            s = 0;
                        M(g, function (b) {
                            q.hasOwnProperty(b) && !e.hasOwnProperty(b) && (s++, q[b].then(function (c) {
                                r[b] = c;
                                --s || o()
                            }, k))
                        });
                        s || o();
                        q[d] = n.promise
                    }
                    if (Z(e) && e.then && e.$$promises && h === d && (h = g, g = e, e = null), e) {
                        if (!Z(e)) throw Error("'locals' must be an object");
                    } else e = k;
                    if (g) {
                        if (!Z(g) || !g.then ||
                            !g.$$promises) throw Error("'parent' must be a promise returned by $resolve.resolve()");
                    } else g = o;
                    var s = b.defer(),
                        t = s.promise,
                        q = t.$$promises = {},
                        r = X({}, e),
                        L = 1 + p.length / 3,
                        w = !1;
                    if (Q(g.$$failure)) return l(g.$$failure), t;
                    g.$$inheritedValues && f(r, n(g.$$inheritedValues, u));
                    X(q, g.$$promises);
                    g.$$values ? (w = f(r, n(g.$$values, u)), t.$$inheritedValues = n(g.$$values, u), j()) : (g.$$inheritedValues && (t.$$inheritedValues = n(g.$$inheritedValues, u)), g.then(j, l));
                    for (var B = 0, D = p.length; D > B; B += 3) e.hasOwnProperty(p[B]) ? j() :
                        m(p[B], p[B + 1], p[B + 2]);
                    return t
                }
        };
        this.resolve = function (b, c, d, e) {
            return this.study(b)(c, d, e)
        }
    }

    function r(b, c, d) {
        this.fromConfig = function (b, c, d) {
            return Q(b.template) ? this.fromString(b.template, c) : Q(b.templateUrl) ? this.fromUrl(b.templateUrl, c) : Q(b.templateProvider) ? this.fromProvider(b.templateProvider, c, d) : null
        };
        this.fromString = function (b, c) {
            return B(b) ? b(c) : b
        };
        this.fromUrl = function (d, e) {
            return B(d) && (d = d(e)), null == d ? null : b.get(d, {
                cache: c,
                headers: {
                    Accept: "text/html"
                }
            }).then(function (b) {
                return b.data
            })
        };
        this.fromProvider = function (b, c, e) {
            return d.invoke(b, null, e || {
                params: c
            })
        }
    }

    function o(b, c, f) {
        function g(c, d, e, f) {
            if (t.push(c), u[c]) return u[c];
            if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(c)) throw Error("Invalid parameter name '" + c + "' in pattern '" + b + "'");
            if (p[c]) throw Error("Duplicate parameter name '" + c + "' in pattern '" + b + "'");
            return p[c] = new ba.Param(c, d, e, f), p[c]
        }

        function h(b, c, d, e) {
            var f = ["", ""],
                b = b.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!c) return b;
            switch (d) {
                case !1:
                    f = ["(", ")" + (e ? "?" : "")];
                    break;
                case !0:
                    b =
                        b.replace(/\/$/, "");
                    f = ["(?:/(", ")|/)?"];
                    break;
                default:
                    f = ["(" + d + "|", ")?"]
            }
            return b + f[0] + c + f[1]
        }

        function j(f, g) {
            var h, k, l, o, m;
            return h = f[2] || f[3], m = c.params[h], l = b.substring(n, f.index), k = g ? f[4] : f[4] || ("*" == f[1] ? ".*" : null), k && (o = ba.type(k) || e(ba.type("string"), {
                pattern: RegExp(k, c.caseInsensitive ? "i" : d)
            })), {
                id: h,
                regexp: k,
                segment: l,
                type: o,
                cfg: m
            }
        }
        var c = X({
            params: {}
        }, Z(c) ? c : {}),
            k, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            o = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            m = "^",
            n = 0,
            s = this.segments = [],
            u = f ? f.params : {},
            p = this.params = f ? f.params.$$new() : new ba.ParamSet,
            t = [];
        this.source = b;
        for (var q, r;
            (k = l.exec(b)) && (q = j(k, !1), !(0 <= q.segment.indexOf("?"))) ;) r = g(q.id, q.type, q.cfg, "path"), m += h(q.segment, r.type.pattern.source, r.squash, r.isOptional), s.push(q.segment), n = l.lastIndex;
        f = b.substring(n);
        k = f.indexOf("?");
        if (0 <= k) {
            var w = this.sourceSearch = f.substring(k);
            if (f = f.substring(0, k), this.sourcePath = b.substring(0, n + k), 0 < w.length)
                for (n = 0; k = o.exec(w) ;) q = j(k, !0), r = g(q.id, q.type,
                    q.cfg, "search"), n = l.lastIndex
        } else this.sourcePath = b, this.sourceSearch = "";
        m += h(f) + (!1 === c.strict ? "/?" : "") + "$";
        s.push(f);
        this.regexp = RegExp(m, c.caseInsensitive ? "i" : d);
        this.prefix = s[0];
        this.$$paramNames = t
    }

    function t(b) {
        X(this, b)
    }

    function u() {
        function b(c) {
            return null != c ? c.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : c
        }

        function f() {
            for (; w.length;) {
                var b = w.shift();
                if (b.pattern) throw Error("You cannot override a type's .pattern at runtime.");
                c.extend(s[b.name], k.invoke(b.def))
            }
        }

        function j(b) {
            X(this,
                b || {})
        }
        ba = this;
        var k, l = !1,
            m = !0,
            n = !1,
            s = {},
            r = !0,
            w = [],
            D = {
                string: {
                    encode: b,
                    decode: function (b) {
                        return null != b ? b.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : b
                    },
                    is: function (b) {
                        return null == b || !Q(b) || "string" == typeof b
                    },
                    pattern: /[^\/]*/
                },
                "int": {
                    encode: b,
                    decode: function (b) {
                        return parseInt(b, 10)
                    },
                    is: function (b) {
                        return Q(b) && this.decode(b.toString()) === b
                    },
                    pattern: /\d+/
                },
                bool: {
                    encode: function (b) {
                        return b ? 1 : 0
                    },
                    decode: function (b) {
                        return 0 !== parseInt(b, 10)
                    },
                    is: function (b) {
                        return !0 === b || !1 === b
                    },
                    pattern: /0|1/
                },
                date: {
                    encode: function (b) {
                        return this.is(b) ? [b.getFullYear(), ("0" + (b.getMonth() + 1)).slice(-2), ("0" + b.getDate()).slice(-2)].join("-") : d
                    },
                    decode: function (b) {
                        return this.is(b) ? b : (b = this.capture.exec(b)) ? new Date(b[1], b[2] - 1, b[3]) : d
                    },
                    is: function (b) {
                        return b instanceof Date && !isNaN(b.valueOf())
                    },
                    equals: function (b, c) {
                        return this.is(b) && this.is(c) && b.toISOString() === c.toISOString()
                    },
                    pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                    capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                },
                json: {
                    encode: c.toJson,
                    decode: c.fromJson,
                    is: c.isObject,
                    equals: c.equals,
                    pattern: /[^\/]*/
                },
                any: {
                    encode: c.identity,
                    decode: c.identity,
                    equals: c.equals,
                    pattern: /.*/
                }
            };
        u.$$getDefaultValue = function (b) {
            if (!(B(b.value) || O(b.value) && B(b.value[b.value.length - 1]))) return b.value;
            if (!k) throw Error("Injectable functions cannot be called at configuration time");
            return k.invoke(b.value)
        };
        this.caseInsensitive = function (b) {
            return Q(b) && (l = b), l
        };
        this.strictMode = function (b) {
            return Q(b) && (m = b), m
        };
        this.defaultSquashPolicy =
            function (b) {
                if (!Q(b)) return n;
                if (!0 !== b && !1 !== b && !E(b)) throw Error("Invalid squash policy: " + b + ". Valid policies: false, true, arbitrary-string");
                return n = b, b
            };
        this.compile = function (b, c) {
            return new o(b, X({
                strict: m,
                caseInsensitive: l
            }, c))
        };
        this.isMatcher = function (b) {
            if (!Z(b)) return !1;
            var c = !0;
            return M(o.prototype, function (d, e) {
                B(d) && (c = c && Q(b[e]) && B(b[e]))
            }), c
        };
        this.type = function (b, c, d) {
            if (!Q(c)) return s[b];
            if (s.hasOwnProperty(b)) throw Error("A type named '" + b + "' has already been defined.");
            return s[b] =
                new t(X({
                    name: b
                }, c)), d && (w.push({
                    name: b,
                    def: d
                }), r || f()), this
        };
        M(D, function (b, c) {
            s[c] = new t(X({
                name: c
            }, b))
        });
        s = e(s, {});
        this.$get = ["$injector", function (b) {
            return k = b, r = !1, f(), M(D, function (b, c) {
                s[c] || (s[c] = new t(b))
            }), this
        }];
        this.Param = function (b, e, f, j) {
            function l() {
                if (!k) throw Error("Injectable functions cannot be called at configuration time");
                var b = k.invoke(f.$$fn);
                if (null !== b && b !== d && !o.type.is(b)) throw Error("Default value (" + b + ") for parameter '" + o.id + "' is not an instance of Type (" + o.type.name +
                    ")");
                return b
            }
            var o = this,
                f = function (b) {
                    var c = Z(b) ? g(b) : [];
                    return -1 === h(c, "value") && (-1 === h(c, "type") && -1 === h(c, "squash") && -1 === h(c, "array")) && (b = {
                        value: b
                    }), b.$$fn = B(b.value) || O(b.value) && B(b.value[b.value.length - 1]) ? b.value : function () {
                        return b.value
                    }, b
                }(f),
                e = function (d, e, f) {
                    if (d.type && e) throw Error("Param '" + b + "' has two type configurations.");
                    return e ? e : d.type ? c.isString(d.type) ? s[d.type] : d.type instanceof t ? d.type : new t(d.type) : "config" === f ? s.any : s.string
                }(f, e, j),
                m = function () {
                    var c = {
                        array: "search" ===
                            j ? "auto" : !1
                    },
                        d = b.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return X(c, d, f).array
                }(),
                e = m ? e.$asArray(m, "search" === j) : e;
            "string" !== e.name || m || "path" !== j || f.value !== d || (f.value = "");
            var u = f.value !== d,
                r = function (b, c) {
                    var d = b.squash;
                    if (!c || !1 === d) return !1;
                    if (!Q(d) || null == d) return n;
                    if (!0 === d || E(d)) return d;
                    throw Error("Invalid squash policy: '" + d + "'. Valid policies: false, true, or arbitrary string");
                }(f, u),
                w = function (b, c, e, f) {
                    var g, j, c = [{
                        from: "",
                        to: e || c ? d : ""
                    }, {
                        from: null,
                        to: e || c ? d : ""
                    }];
                    return g = O(b.replace) ? b.replace : [], E(f) && g.push({
                        from: f,
                        to: d
                    }), j = p(g, function (b) {
                        return b.from
                    }), q(c, function (b) {
                        return -1 === h(j, b.from)
                    }).concat(g)
                }(f, m, u, r);
            X(this, {
                id: b,
                type: e,
                location: j,
                array: m,
                squash: r,
                replace: w,
                isOptional: u,
                value: function (b) {
                    function c(b) {
                        return function (c) {
                            return c.from === b
                        }
                    }
                    return b = function (b) {
                        var d = p(q(o.replace, c(b)), function (b) {
                            return b.to
                        });
                        return d.length ? d[0] : b
                    }(b), Q(b) ? o.type.$normalize(b) : l()
                },
                dynamic: d,
                config: f,
                toString: function () {
                    return "{Param:" + b + " " + e + " squash: '" + r + "' optional: " + u + "}"
                }
            })
        };
        j.prototype = {
            $$new: function () {
                return e(this, X(new j, {
                    $$parent: this
                }))
            },
            $$keys: function () {
                for (var b = [], c = [], d = this, e = g(j.prototype) ; d;) c.push(d), d = d.$$parent;
                return c.reverse(), M(c, function (c) {
                    M(g(c), function (c) {
                        -1 === h(b, c) && -1 === h(e, c) && b.push(c)
                    })
                }), b
            },
            $$values: function (b) {
                var c = {},
                    d = this;
                return M(d.$$keys(), function (e) {
                    c[e] = d[e].value(b && b[e])
                }), c
            },
            $$equals: function (b, c) {
                var d = !0,
                    e = this;
                return M(e.$$keys(), function (f) {
                    e[f].type.equals(b && b[f], c && c[f]) || (d = !1)
                }), d
            },
            $$validates: function (b) {
                var e,
                    f, g, h, j, k = this.$$keys();
                for (e = 0; e < k.length && (f = this[k[e]], g = b[k[e]], g !== d && null !== g || !f.isOptional) ; e++)
                    if ((h = f.type.$normalize(g), !f.type.is(h)) || (j = f.type.encode(h), c.isString(j) && !f.type.pattern.exec(j))) return !1;
                return !0
            },
            $$parent: d
        };
        this.ParamSet = j
    }

    function w(b, e) {
        function f(b) {
            b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(b.source);
            return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
        }

        function g(b, c) {
            return b.replace(/\$(\$|\d{1,2})/, function (b, d) {
                return c["$" === d ? 0 : Number(d)]
            })
        }

        function h(b,
            c, d) {
            if (!d) return !1;
            b = b.invoke(c, c, {
                $match: d
            });
            return Q(b) ? b : !0
        }

        function j(e, f, g, h, n) {
            function s(b) {
                function c(b) {
                    return (b = b(g, e)) ? (E(b) && e.replace().url(b), !0) : !1
                }
                if (!b || !b.defaultPrevented) {
                    p && e.url();
                    p = d;
                    for (var f = l.length, b = 0; f > b; b++)
                        if (c(l[b])) return;
                    o && c(o)
                }
            }

            function u() {
                return k = k || f.$on("$locationChangeSuccess", s)
            }
            var p, t = h.baseHref(),
                q = e.url();
            return m || u(), {
                sync: function () {
                    s()
                },
                listen: function () {
                    return u()
                },
                update: function (b) {
                    return b ? void (q = e.url()) : void (e.url() !== q && (e.url(q), e.replace()))
                },
                push: function (b, c, f) {
                    b = b.format(c || {});
                    null !== b && c && c["#"] && (b += "#" + c["#"]);
                    e.url(b);
                    p = f && f.$$avoidResync ? e.url() : d;
                    f && f.replace && e.replace()
                },
                href: function (d, f, g) {
                    if (!d.validates(f)) return null;
                    var h = b.html5Mode();
                    c.isObject(h) && (h = h.enabled);
                    h = h && n.history;
                    d = d.format(f);
                    if (g = g || {}, h || null === d || (d = "#" + b.hashPrefix() + d), null !== d && f && f["#"] && (d += "#" + f["#"]), d = "/" === t ? d : h ? t.slice(0, -1) + d : g.absolute ? t.slice(1) + d : d, !g.absolute || !d) return d;
                    f = !h && d ? "/" : "";
                    g = e.port();
                    return g = 80 === g || 443 === g ? "" : ":" + g, [e.protocol(),
                        "://", e.host(), g, f, d
                    ].join("")
                }
            }
        }
        var k, l = [],
            o = null,
            m = !1;
        this.rule = function (b) {
            if (!B(b)) throw Error("'rule' must be a function");
            return l.push(b), this
        };
        this.otherwise = function (b) {
            if (E(b)) var c = b,
                b = function () {
                    return c
                };
            else if (!B(b)) throw Error("'rule' must be a function");
            return o = b, this
        };
        this.when = function (b, c) {
            var d, j = E(c);
            if (E(b) && (b = e.compile(b)), !j && !B(c) && !O(c)) throw Error("invalid 'handler' in when()");
            var k = {
                matcher: function (b, c) {
                    return j && (d = e.compile(c), c = ["$match", function (b) {
                        return d.format(b)
                    }]),
                        X(function (d, e) {
                            return h(d, c, b.exec(e.path(), e.search()))
                        }, {
                            prefix: E(b.prefix) ? b.prefix : ""
                        })
                },
                regex: function (b, c) {
                    if (b.global || b.sticky) throw Error("when() RegExp must not be global or sticky");
                    return j && (d = c, c = ["$match", function (b) {
                        return g(d, b)
                    }]), X(function (d, e) {
                        return h(d, c, b.exec(e.path()))
                    }, {
                        prefix: f(b)
                    })
                }
            },
                l = {
                    matcher: e.isMatcher(b),
                    regex: b instanceof RegExp
                },
                o;
            for (o in l)
                if (l[o]) return this.rule(k[o](b, c));
            throw Error("invalid 'what' in when()");
        };
        this.deferIntercept = function (b) {
            b === d && (b = !0);
            m = b
        };
        this.$get = j;
        j.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
    }

    function z(b, f) {
        function o(b, c) {
            if (!b) return d;
            var e = E(b),
                f = e ? b : b.name;
            if (0 === f.indexOf(".") || 0 === f.indexOf("^")) {
                if (!c) throw Error("No reference point given for path '" + f + "'");
                for (var c = o(c), g = f.split("."), h = 0, j = g.length, k = c; j > h; h++)
                    if ("" !== g[h] || 0 !== h) {
                        if ("^" !== g[h]) break;
                        if (!k.parent) throw Error("Path '" + f + "' not valid for state '" + c.name + "'");
                        k = k.parent
                    } else k = c;
                g = g.slice(h).join(".");
                f = k.name + (k.name &&
                    g ? "." : "") + g
            }
            f = D[f];
            return !f || !e && (e || f !== b && f.self !== b) ? d : f
        }

        function n(b, c) {
            z[b] || (z[b] = []);
            z[b].push(c)
        }

        function s(b) {
            for (b = z[b] || []; b.length;) u(b.shift())
        }

        function u(c) {
            var c = e(c, {
                self: c,
                resolve: c.resolve || {},
                toString: function () {
                    return this.name
                }
            }),
                d = c.name;
            if (!E(d) || 0 <= d.indexOf("@")) throw Error("State must have a valid name");
            if (D.hasOwnProperty(d)) throw Error("State '" + d + "' is already defined");
            var f = -1 !== d.indexOf(".") ? d.substring(0, d.lastIndexOf(".")) : E(c.parent) ? c.parent : Z(c.parent) && E(c.parent.name) ?
                c.parent.name : "";
            if (f && !D[f]) return n(f, c.self);
            for (var g in A) B(A[g]) && (c[g] = A[g](c, A.$delegates[g]));
            return D[d] = c, !c[L] && c.url && b.when(c.url, ["$match", "$stateParams", function (b, d) {
                w.$current.navigable == c && k(b, d) || w.transitionTo(c, b, {
                    inherit: !0,
                    location: !1
                })
            }]), s(d), c
        }

        function t(b, f, m, n, s, u, z) {
            function A(c, d, e, g) {
                d = b.$broadcast("$stateNotFound", c, d, e);
                if (d.defaultPrevented) return z.update(), J;
                if (!d.retry) return null;
                if (g.$retry) return z.update(), I;
                var h = w.transition = f.when(d.retry);
                return h.then(function () {
                    return h !==
                        w.transition ? W : (c.options.$retry = !0, w.transitionTo(c.to, c.toParams, c.options))
                }, function () {
                    return J
                }), z.update(), h
            }

            function F(b, d, e, g, h, j) {
                var k = e ? d : l(b.params.$$keys(), d);
                h.resolve = s.resolve(b.resolve, {
                    $stateParams: k
                }, h.resolve, b);
                d = [h.resolve.then(function (b) {
                    h.globals = b
                })];
                return g && d.push(g), f.all(d).then(function () {
                    var d = [];
                    return M(b.views, function (e, f) {
                        var g = e.resolve && e.resolve !== b.resolve ? e.resolve : {};
                        g.$template = [function () {
                            return m.load(f, {
                                view: e,
                                locals: h.globals,
                                params: k,
                                notify: j.notify
                            }) ||
                                ""
                        }];
                        d.push(s.resolve(g, h.globals, h.resolve, b).then(function (d) {
                            if (B(e.controllerProvider) || O(e.controllerProvider)) {
                                var j = c.extend({}, g, h.globals);
                                d.$$controller = n.invoke(e.controllerProvider, null, j)
                            } else d.$$controller = e.controller;
                            d.$$state = b;
                            d.$$controllerAs = e.controllerAs;
                            d.$$resolveAs = e.resolveAs;
                            h[f] = d
                        }))
                    }), f.all(d).then(function () {
                        return h.globals
                    })
                }).then(function () {
                    return h
                })
            }
            var W = f.reject(Error("transition superseded")),
                C = f.reject(Error("transition prevented")),
                J = f.reject(Error("transition aborted")),
                I = f.reject(Error("transition failed"));
            return r.locals = {
                resolve: null,
                globals: {
                    $stateParams: {}
                }
            }, w = {
                params: {},
                current: r.self,
                $current: r,
                transition: null
            }, w.reload = function (b) {
                return w.transitionTo(w.current, u, {
                    reload: b || !0,
                    inherit: !1,
                    notify: !0
                })
            }, w.go = function (b, c, d) {
                return w.transitionTo(b, c, X({
                    inherit: !0,
                    relative: w.$current
                }, d))
            }, w.transitionTo = function (c, d, g) {
                var d = d || {},
                    g = X({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, g || {}),
                    h, k = w.$current,
                    m = w.params,
                    s = k.path,
                    p = o(c, g.relative),
                    t = d["#"];
                if (!Q(p)) {
                    var B = {
                        to: c,
                        toParams: d,
                        options: g
                    },
                        D = A(B, k.self, m, g);
                    if (D) return D;
                    if (c = B.to, d = B.toParams, g = B.options, p = o(c, g.relative), !Q(p)) {
                        if (!g.relative) throw Error("No such state '" + c + "'");
                        throw Error("Could not resolve '" + c + "' from state '" + g.relative + "'");
                    }
                }
                if (p[L]) throw Error("Cannot transition to abstract state '" + c + "'");
                if (g.inherit && (d = j(u, d || {}, w.$current, p)), !p.params.$$validates(d)) return I;
                var d = p.params.$$values(d),
                    c = p,
                    O = c.path,
                    v = 0,
                    p = O[v],
                    B = r.locals,
                    M = [];
                if (g.reload) {
                    if (E(g.reload) ||
                        Z(g.reload)) {
                        if (Z(g.reload) && !g.reload.name) throw Error("Invalid reload state object");
                        D = !0 === g.reload ? s[0] : o(g.reload);
                        if (g.reload && !D) throw Error("No such reload state '" + (E(g.reload) ? g.reload : g.reload.name) + "'");
                        for (; p && p === s[v] && p !== D;) B = M[v] = p.locals, v++, p = O[v]
                    }
                } else
                    for (; p && p === s[v] && p.ownParams.$$equals(d, m) ;) B = M[v] = p.locals, v++, p = O[v];
                if (q(c, d, k, m, B, g)) return t && (d["#"] = t), w.params = d, aa(w.params, u), aa(l(c.params.$$keys(), u), c.locals.globals.$stateParams), g.location && c.navigable && c.navigable.url &&
                    (z.push(c.navigable.url, d, {
                        $$avoidResync: !0,
                        replace: "replace" === g.location
                    }), z.update(!0)), w.transition = null, f.when(w.current);
                if (d = l(c.params.$$keys(), d || {}), t && (d["#"] = t), g.notify && b.$broadcast("$stateChangeStart", c.self, d, k.self, m, g).defaultPrevented) return b.$broadcast("$stateChangeCancel", c.self, d, k.self, m), null == w.transition && z.update(), C;
                t = f.when(B);
                for (D = v; D < O.length; D++, p = O[D]) B = M[D] = e(B), t = F(p, d, p === c, t, B, g);
                var J = w.transition = t.then(function () {
                    var e, f;
                    if (w.transition !== J) return W;
                    for (e =
                        s.length - 1; e >= v; e--) f = s[e], f.self.onExit && n.invoke(f.self.onExit, f.self, f.locals.globals), f.locals = null;
                    for (e = v; e < O.length; e++) f = O[e], f.locals = M[e], f.self.onEnter && n.invoke(f.self.onEnter, f.self, f.locals.globals);
                    return w.transition !== J ? W : (w.$current = c, w.current = c.self, w.params = d, aa(w.params, u), w.transition = null, g.location && c.navigable && z.push(c.navigable.url, c.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === g.location
                    }), g.notify && b.$broadcast("$stateChangeSuccess", c.self,
                        d, k.self, m), z.update(!0), w.current)
                }).then(null, function (e) {
                    return w.transition !== J ? W : (w.transition = null, h = b.$broadcast("$stateChangeError", c.self, d, k.self, m, e), h.defaultPrevented || z.update(), f.reject(e))
                });
                return J
            }, w.is = function (b, c, e) {
                e = X({
                    relative: w.$current
                }, e || {});
                b = o(b, e.relative);
                return Q(b) ? w.$current !== b ? !1 : c ? k(b.params.$$values(c), u) : !0 : d
            }, w.includes = function (b, c, e) {
                if (e = X({
                    relative: w.$current
                }, e || {}), E(b) && -1 < b.indexOf("*")) {
                    for (var b = b.split("."), f = w.$current.name.split("."), j = 0, l = b.length; l >
                        j; j++) "*" === b[j] && (f[j] = "*");
                    if (!("**" === b[0] && (f = f.slice(h(f, b[1])), f.unshift("**")), "**" === b[b.length - 1] && (f.splice(h(f, b[b.length - 2]) + 1, Number.MAX_VALUE), f.push("**")), b.length != f.length ? !1 : f.join("") === b.join(""))) return !1;
                    b = w.$current.name
                }
                e = o(b, e.relative);
                return Q(e) ? Q(w.$current.includes[e.name]) ? c ? k(e.params.$$values(c), u, g(c)) : !0 : !1 : d
            }, w.href = function (b, c, e) {
                e = X({
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: w.$current
                }, e || {});
                b = o(b, e.relative);
                if (!Q(b)) return null;
                e.inherit && (c = j(u, c || {}, w.$current,
                    b));
                var f = b && e.lossy ? b.navigable : b;
                return f && f.url !== d && null !== f.url ? z.href(f.url, l(b.params.$$keys().concat("#"), c || {}), {
                    absolute: e.absolute
                }) : null
            }, w.get = function (b, c) {
                if (0 === arguments.length) return p(g(D), function (b) {
                    return D[b].self
                });
                var d = o(b, c || w.$current);
                return d && d.self ? d.self : null
            }, w
        }

        function q(b, c, d, e, f, g) {
            function h(b, c, d) {
                var e = b.params.$$keys().filter(function (c) {
                    return "search" != b.params[c].location
                }),
                    e = m.apply({}, [b.params].concat(e));
                return (new ba.ParamSet(e)).$$equals(c, d)
            }
            return !g.reload &&
                b === d && (f === d.locals || !1 === b.self.reloadOnSearch && h(d, e, c)) ? !0 : void 0
        }
        var r, w, D = {},
            z = {},
            L = "abstract",
            A = {
                parent: function (b) {
                    return Q(b.parent) && b.parent ? o(b.parent) : (b = /^(.+)\.[^.]+$/.exec(b.name)) ? o(b[1]) : r
                },
                data: function (b) {
                    return b.parent && b.parent.data && (b.data = b.self.data = e(b.parent.data, b.data)), b.data
                },
                url: function (b) {
                    var c = b.url,
                        d = {
                            params: b.params || {}
                        };
                    if (E(c)) return "^" == c.charAt(0) ? f.compile(c.substring(1), d) : (b.parent.navigable || r).url.concat(c, d);
                    if (!c || f.isMatcher(c)) return c;
                    throw Error("Invalid url '" +
                        c + "' in state '" + b + "'");
                },
                navigable: function (b) {
                    return b.url ? b : b.parent ? b.parent.navigable : null
                },
                ownParams: function (b) {
                    var c = b.url && b.url.params || new ba.ParamSet;
                    return M(b.params || {}, function (b, d) {
                        c[d] || (c[d] = new ba.Param(d, null, b, "config"))
                    }), c
                },
                params: function (b) {
                    var c = m(b.ownParams, b.ownParams.$$keys());
                    return b.parent && b.parent.params ? X(b.parent.params.$$new(), c) : new ba.ParamSet
                },
                views: function (b) {
                    var c = {};
                    return M(Q(b.views) ? b.views : {
                        "": b
                    }, function (d, e) {
                        0 > e.indexOf("@") && (e += "@" + b.parent.name);
                        d.resolveAs = d.resolveAs || b.resolveAs || "$resolve";
                        c[e] = d
                    }), c
                },
                path: function (b) {
                    return b.parent ? b.parent.path.concat(b) : []
                },
                includes: function (b) {
                    var c = b.parent ? X({}, b.parent.includes) : {};
                    return c[b.name] = !0, c
                },
                $delegates: {}
            };
        r = u({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        });
        r.navigable = null;
        this.decorator = function (b, c) {
            return E(b) && !Q(c) ? A[b] : B(c) && E(b) ? (A[b] && !A.$delegates[b] && (A.$delegates[b] = A[b]), A[b] = c, this) : this
        };
        this.state = function (b, c) {
            return Z(b) ? c = b : c.name = b, u(c), this
        };
        this.$get = t;
        t.$inject =
            "$rootScope $q $view $injector $resolve $stateParams $urlRouter $location $urlMatcherFactory".split(" ")
    }

    function A() {
        function b(c, d) {
            return {
                load: function (b, c) {
                    var e;
                    return c = X({
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    }, c), c.view && (e = d.fromConfig(c.view, c.params, c.locals)), e
                }
            }
        }
        this.$get = b;
        b.$inject = ["$rootScope", "$templateFactory"]
    }

    function C(b, d, e, f, g) {
        function h(b, d) {
            if (l) return {
                enter: function (b, d, e) {
                    2 < c.version.minor ? l.enter(b, null, d).then(e) : l.enter(b, null,
                        d, e)
                },
                leave: function (b, d) {
                    2 < c.version.minor ? l.leave(b).then(d) : l.leave(b, d)
                }
            };
            if (k) {
                var e = k && k(d, b);
                return {
                    enter: function (b, c, d) {
                        e.enter(b, null, c);
                        d()
                    },
                    leave: function (b, c) {
                        e.leave(b);
                        c()
                    }
                }
            }
            return function () {
                return {
                    enter: function (b, c, d) {
                        c.after(b);
                        d()
                    },
                    leave: function (b, c) {
                        b.remove();
                        c()
                    }
                }
            }()
        }
        var j = function () {
            return d.has ? function (b) {
                return d.has(b) ? d.get(b) : null
            } : function (b) {
                try {
                    return d.get(b)
                } catch (c) {
                    return null
                }
            }
        }(),
            k = j("$animator"),
            l = j("$animate");
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function (d, j, k) {
                return function (d, j, l) {
                    function o() {
                        if (n && (n.remove(), n = null), u && (u.$destroy(), u = null), s) {
                            var b = s.data("$uiViewAnim");
                            r.leave(s, function () {
                                b.$$animLeave.resolve();
                                n = null
                            });
                            n = s;
                            s = null
                        }
                    }

                    function m(h) {
                        var n = H(d, l, j, f),
                            w = n && b.$current && b.$current.locals[n];
                        if (h || w !== p) h = d.$new(), p = b.$current.locals[n], h.$emit("$viewContentLoading", n), s = k(h, function (b) {
                            var f = g.defer(),
                                h = g.defer();
                            b.data("$uiViewAnim", {
                                $animEnter: f.promise,
                                $animLeave: h.promise,
                                $$animLeave: h
                            });
                            r.enter(b, j, function () {
                                f.resolve();
                                u && u.$emit("$viewContentAnimationEnded");
                                (c.isDefined(q) && !q || d.$eval(q)) && e(b)
                            });
                            o()
                        }), u = h, u.$emit("$viewContentLoaded", n), u.$eval(t)
                    }
                    var n, s, u, p, t = l.onload || "",
                        q = l.autoscroll,
                        r = h(l, d);
                    j.inheritedData("$uiView");
                    d.$on("$stateChangeSuccess", function () {
                        m(!1)
                    });
                    m(!0)
                }
            }
        }
    }

    function G(b, d, e, f) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function (g) {
                var h = g.html();
                return function (g, j, k) {
                    var l = e.$current,
                        k = H(g, k, j, f);
                    if (l = l && l.locals[k]) {
                        j.data("$uiView", {
                            name: k,
                            state: l.$$state
                        });
                        j.html(l.$template ? l.$template : h);
                        k = c.extend({}, l);
                        g[l.$$resolveAs] = k;
                        var o = b(j.contents());
                        if (l.$$controller) {
                            l.$scope = g;
                            l.$element = j;
                            var m = d(l.$$controller, l);
                            l.$$controllerAs && (g[l.$$controllerAs] = m, g[l.$$controllerAs][l.$$resolveAs] = k);
                            B(m.$onInit) && m.$onInit();
                            j.data("$ngControllerController", m);
                            j.children().data("$ngControllerController", m)
                        }
                        o(g)
                    }
                }
            }
        }
    }

    function H(b, c, d, e) {
        b = e(c.uiView || c.name || "")(b);
        d = d.inheritedData("$uiView");
        return 0 <= b.indexOf("@") ? b : b + "@" + (d ? d.state.name : "")
    }

    function K(b,
        c) {
        var d, e = b.match(/^\s*({[^}]*})\s*$/);
        if (e && (b = c + "(" + e[1] + ")"), d = b.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !d || 4 !== d.length) throw Error("Invalid state ref '" + b + "'");
        return {
            state: d[1],
            paramExpr: d[3] || null
        }
    }

    function P(b) {
        return (b = b.parent().inheritedData("$uiView")) && b.state && b.state.name ? b.state : void 0
    }

    function T(b) {
        var c = "[object SVGAnimatedString]" === Object.prototype.toString.call(b.prop("href")),
            d = "FORM" === b[0].nodeName;
        return {
            attr: d ? "action" : c ? "xlink:href" : "href",
            isAnchor: "A" ===
                b.prop("tagName").toUpperCase(),
            clickable: !d
        }
    }

    function D(b, c, d, e, f) {
        return function (g) {
            var h = g.which || g.button,
                j = f();
            if (!(1 < h || g.ctrlKey || g.metaKey || g.shiftKey || b.attr("target"))) {
                var k = d(function () {
                    c.go(j.state, j.params, j.options)
                });
                g.preventDefault();
                var l = e.isAnchor && !j.href ? 1 : 0;
                g.preventDefault = function () {
                    0 >= l-- && d.cancel(k)
                }
            }
        }
    }

    function F(b, d) {
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function (e, f, g, h) {
                var j, k = K(g.uiSref, b.current.name),
                    l = {
                        state: k.state,
                        href: null,
                        params: null
                    },
                    o = T(f),
                    m = h[1] || h[0],
                    n = null;
                l.options = X({
                    relative: P(f) || b.$current,
                    inherit: !0
                }, g.uiSrefOpts ? e.$eval(g.uiSrefOpts) : {});
                var s = function (d) {
                    d && (l.params = c.copy(d));
                    l.href = b.href(k.state, l.params, l.options);
                    n && n();
                    m && (n = m.$$addStateInfo(k.state, l.params));
                    null !== l.href && g.$set(o.attr, l.href)
                };
                k.paramExpr && (e.$watch(k.paramExpr, function (b) {
                    b !== l.params && s(b)
                }, !0), l.params = c.copy(e.$eval(k.paramExpr)));
                s();
                o.clickable && (j = D(f, b, d, o, function () {
                    return l
                }), f.bind("click", j), e.$on("$destroy", function () {
                    f.unbind("click",
                        j)
                }))
            }
        }
    }

    function I(b, c) {
        return {
            restrict: "A",
            require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
            link: function (d, e, f, g) {
                function h(c) {
                    o.state = c[0];
                    o.params = c[1];
                    o.options = c[2];
                    o.href = b.href(o.state, o.params, o.options);
                    m && m();
                    l && (m = l.$$addStateInfo(o.state, o.params));
                    o.href && f.$set(k.attr, o.href)
                }
                var j, k = T(e),
                    l = g[1] || g[0],
                    g = "[" + [f.uiState, f.uiStateParams || null, f.uiStateOpts || null].map(function (b) {
                        return b || "null"
                    }).join(", ") + "]",
                    o = {
                        state: null,
                        params: null,
                        options: null,
                        href: null
                    },
                    m = null;
                d.$watch(g, h, !0);
                h(d.$eval(g));
                k.clickable && (j = D(e, b, c, k, function () {
                    return o
                }), e.bind("click", j), d.$on("$destroy", function () {
                    e.unbind("click", j)
                }))
            }
        }
    }

    function J(b, c, d) {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", "$timeout", function (c, e, f, g) {
                function h(c, d, f) {
                    var g = b.get(c, P(e)),
                        k = j(c, d),
                        l = {
                            state: g || {
                                name: c
                            },
                            params: d,
                            hash: k
                        };
                    return n.push(l), s[k] = f,
                        function () {
                            var b = n.indexOf(l); -1 !== b && n.splice(b, 1)
                        }
                }

                function j(b, d) {
                    if (!E(b)) throw Error("state should be a string");
                    return Z(d) ? b + Y(d) : (d = c.$eval(d), Z(d) ? b + Y(d) : b)
                }

                function k() {
                    for (var c = 0; c < n.length; c++) b.includes(n[c].state.name, n[c].params) ? l(e, s[n[c].hash]) : e.removeClass(s[n[c].hash]), b.is(n[c].state.name, n[c].params) ? l(e, o) : e.removeClass(o)
                }

                function l(b, c) {
                    g(function () {
                        b.addClass(c)
                    })
                }
                var o, m, n = [],
                    s = {};
                o = d(f.uiSrefActiveEq || "", !1)(c);
                try {
                    m = c.$eval(f.uiSrefActive)
                } catch (u) { }
                m = m || d(f.uiSrefActive || "", !1)(c);
                Z(m) && M(m, function (d, e) {
                    if (E(d)) {
                        var f = K(d, b.current.name);
                        h(f.state, c.$eval(f.paramExpr), e)
                    }
                });
                this.$$addStateInfo = function (b, c) {
                    if (!(Z(m) && 0 < n.length)) {
                        var d =
                            h(b, c, m);
                        return k(), d
                    }
                };
                c.$on("$stateChangeSuccess", k);
                k()
            }]
        }
    }

    function N(b) {
        var c = function (c, d) {
            return b.is(c, d)
        };
        return c.$stateful = !0, c
    }

    function U(b) {
        var c = function (c, d, e) {
            return b.includes(c, d, e)
        };
        return c.$stateful = !0, c
    }
    var Q = c.isDefined,
        B = c.isFunction,
        E = c.isString,
        Z = c.isObject,
        O = c.isArray,
        M = c.forEach,
        X = c.extend,
        aa = c.copy,
        Y = c.toJson;
    c.module("ui.router.util", ["ng"]);
    c.module("ui.router.router", ["ui.router.util"]);
    c.module("ui.router.state", ["ui.router.router", "ui.router.util"]);
    c.module("ui.router", ["ui.router.state"]);
    c.module("ui.router.compat", ["ui.router"]);
    s.$inject = ["$q", "$injector"];
    c.module("ui.router.util").service("$resolve", s);
    r.$inject = ["$http", "$templateCache", "$injector"];
    c.module("ui.router.util").service("$templateFactory", r);
    var ba;
    o.prototype.concat = function (b, c) {
        var d = {
            caseInsensitive: ba.caseInsensitive(),
            strict: ba.strictMode(),
            squash: ba.defaultSquashPolicy()
        };
        return new o(this.sourcePath + b + this.sourceSearch, X(d, c), this)
    };
    o.prototype.toString = function () {
        return this.source
    };
    o.prototype.exec = function (b, c) {
        function d(b) {
            function c(b) {
                return b.split("").reverse().join("")
            }
            b = c(b).split(/-(?!\\)/);
            b = p(b, c);
            return p(b, function (b) {
                return b.replace(/\\-/g, "-")
            }).reverse()
        }
        var e = this.regexp.exec(b);
        if (!e) return null;
        var c = c || {},
            f, g, h, j = this.parameters(),
            k = j.length,
            l = this.segments.length - 1,
            o = {};
        if (l !== e.length - 1) throw Error("Unbalanced capture group in route '" + this.source + "'");
        var m, n;
        for (f = 0; l > f; f++) {
            h = j[f];
            m = this.params[h];
            n = e[f + 1];
            for (g = 0; g < m.replace.length; g++) m.replace[g].from ===
                n && (n = m.replace[g].to);
            n && !0 === m.array && (n = d(n));
            Q(n) && (n = m.type.decode(n));
            o[h] = m.value(n)
        }
        for (; k > f; f++) {
            h = j[f];
            o[h] = this.params[h].value(c[h]);
            m = this.params[h];
            n = c[h];
            for (g = 0; g < m.replace.length; g++) m.replace[g].from === n && (n = m.replace[g].to);
            Q(n) && (n = m.type.decode(n));
            o[h] = m.value(n)
        }
        return o
    };
    o.prototype.parameters = function (b) {
        return Q(b) ? this.params[b] || null : this.$$paramNames
    };
    o.prototype.validates = function (b) {
        return this.params.$$validates(b)
    };
    o.prototype.format = function (b) {
        function c(b) {
            return encodeURIComponent(b).replace(/-/g,
                function (b) {
                    return "%5C%" + b.charCodeAt(0).toString(16).toUpperCase()
                })
        }
        var b = b || {},
            d = this.segments,
            e = this.parameters(),
            f = this.params;
        if (!this.validates(b)) return null;
        var g, h = !1,
            j = d.length - 1,
            k = e.length,
            l = d[0];
        for (g = 0; k > g; g++) {
            var o = j > g,
                m = e[g],
                n = f[m],
                s = n.value(b[m]),
                u = n.isOptional && n.type.equals(n.value(), s),
                t = u ? n.squash : !1,
                s = n.type.encode(s);
            if (o) o = d[g + 1], m = g + 1 === j, !1 === t ? (null != s && (l += O(s) ? p(s, c).join("-") : encodeURIComponent(s)), l += o) : !0 === t ? (t = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/, l += o.match(t)[1]) : E(t) &&
                (l += t + o), m && !0 === n.squash && "/" === l.slice(-1) && (l = l.slice(0, -1));
            else if (!(null == s || u && !1 !== t))
                if (!(O(s) || (s = [s]), 0 === s.length)) s = p(s, encodeURIComponent).join("&" + m + "="), l += (h ? "&" : "?") + (m + "=" + s), h = !0
        }
        return l
    };
    t.prototype.is = function () {
        return !0
    };
    t.prototype.encode = function (b) {
        return b
    };
    t.prototype.decode = function (b) {
        return b
    };
    t.prototype.equals = function (b, c) {
        return b == c
    };
    t.prototype.$subPattern = function () {
        var b = this.pattern.toString();
        return b.substr(1, b.length - 2)
    };
    t.prototype.pattern = /.*/;
    t.prototype.toString =
        function () {
            return "{Type:" + this.name + "}"
        };
    t.prototype.$normalize = function (b) {
        return this.is(b) ? b : this.decode(b)
    };
    t.prototype.$asArray = function (b, c) {
        if (!b) return this;
        if ("auto" === b && !c) throw Error("'auto' array mode is for query parameters only");
        return new function (b, c) {
            function e(b, c) {
                return function () {
                    return b[c].apply(b, arguments)
                }
            }

            function f(b) {
                return O(b) ? b : Q(b) ? [b] : []
            }

            function g(b) {
                return !b
            }

            function h(b, e) {
                return function (h) {
                    if (O(h) && 0 === h.length) return h;
                    h = f(h);
                    h = p(h, b);
                    if (!0 === e) h = 0 === q(h,
                        g).length;
                    else a: switch (h.length) {
                        case 0:
                            h = d;
                            break a;
                        case 1:
                            h = "auto" === c ? h[0] : h;
                            break a
                    }
                    return h
                }
            }
            this.encode = h(e(b, "encode"));
            this.decode = h(e(b, "decode"));
            this.is = h(e(b, "is"), !0);
            this.equals = function (b) {
                return function (c, d) {
                    var e = f(c),
                        g = f(d);
                    if (e.length !== g.length) return !1;
                    for (var h = 0; h < e.length; h++)
                        if (!b(e[h], g[h])) return !1;
                    return !0
                }
            }(e(b, "equals"));
            this.pattern = b.pattern;
            this.$normalize = h(e(b, "$normalize"));
            this.name = b.name;
            this.$arrayMode = c
        }(this, b)
    };
    c.module("ui.router.util").provider("$urlMatcherFactory",
        u);
    c.module("ui.router.util").run(["$urlMatcherFactory", function () { }]);
    w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"];
    c.module("ui.router.router").provider("$urlRouter", w);
    z.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"];
    c.module("ui.router.state").factory("$stateParams", function () {
        return {}
    }).constant("$state.runtime", {
        autoinject: !0
    }).provider("$state", z).run(["$injector", function (b) {
        b.get("$state.runtime").autoinject && b.get("$state")
    }]);
    A.$inject = [];
    c.module("ui.router.state").provider("$view",
        A);
    c.module("ui.router.state").provider("$uiViewScroll", function () {
        var b = !1;
        this.useAnchorScroll = function () {
            b = !0
        };
        this.$get = ["$anchorScroll", "$timeout", function (c, d) {
            return b ? c : function (b) {
                return d(function () {
                    b[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    });
    C.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"];
    G.$inject = ["$compile", "$controller", "$state", "$interpolate"];
    c.module("ui.router.state").directive("uiView", C);
    c.module("ui.router.state").directive("uiView", G);
    F.$inject = ["$state", "$timeout"];
    I.$inject = ["$state", "$timeout"];
    J.$inject = ["$state", "$stateParams", "$interpolate"];
    c.module("ui.router.state").directive("uiSref", F).directive("uiSrefActive", J).directive("uiSrefActiveEq", J).directive("uiState", I);
    N.$inject = ["$state"];
    U.$inject = ["$state"];
    c.module("ui.router.state").filter("isState", N).filter("includedByState", U)
})(window, window.angular);
