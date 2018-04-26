var applicationFn = function (t, e, i) {
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
    var a = i(14),
        h = n(a),
        l = i(23),
        c = (n(l), i(24)),
        u = n(c),
        p = i(31),
        d = n(p),
        f = i(34),
        m = n(f),
        g = i(35),
        v = n(g),
        y = i(36),
        _ = n(y),
        x = i(39),
        b = n(x),
        w = i(55),
        S = n(w),
        T = i(64),
        M = n(T),
        E = i(68),
        A = n(E),
        C = i(80),
        L = n(C),
        R = i(81),
        P = n(R),
        O = i(82),
        I = n(O),
        D = i(83),
        B = n(D),
        k = i(85),
        F = n(k),
        N = i(90),
        U = n(N),
        G = i(91),
        z = n(G),
        V = i(179),
        j = n(V),
        H = i(180),
        W = n(H),
        X = i(49),
        Y = (n(X), i(181)),
        q = n(Y),
        K = i(182),
        Z = n(K),
        J = i(67),
        Q = (n(J), i(18)),
        $ = n(Q),
        tt = i(183),
        et = n(tt),
        it = i(184),
        nt = n(it),
        rt = i(186),
        ot = n(rt),
        st = i(50),
        at = i(61),
        ht = (n(at), i(177)),
        lt = n(ht),
        ct = i(37),
        ut = i(190),
        pt = n(ut),
        dt = i(8);
    window.PIXI = dt;
    var ft = i(32);
    window.sound = ft, dt.glCore.VertexArrayObject.FORCE_NATIVE = !0;
    var mt = function (t) {
        function e() {
            r(this, e);
            var i = {
                config: URL_HEADER.DATA + "json/config.json",
                loaderScreen: v["default"],
                backgroundColor: 0
            },
            n = o(this, t.call(this, i));
            window.app = n,
            window.renderer = n.renderer,
            n.localStorage = new lt["default"],
            n.localStorage.get("first-play") ? window.firstPlay = !1 : (window.firstPlay = !0, n.localStorage.store("first-play", !1)),
            n.screenManager.defaultTransition = new q["default"],
            n.safeSize = {
                width: 1136,
                height: 640
            },
            n.maxSize = {
                width: 1136,
                height: 745
            },
            n.preloader.addPixiAssets([
                URL_HEADER.IMAGE + "ui/menu-background.jpg",
                URL_HEADER.IMAGE + "ui/background-platform.png",
                URL_HEADER.IMAGE + "loader/loader-bar.png",
                URL_HEADER.IMAGE + "loader/loader-fill.png",
                URL_HEADER.IMAGE + "loader/loading_logo_cn.png",
                URL_HEADER.IMAGE + "localisation/loader-logo-small.png"]),
            n.loader.addPixiAssets([
                URL_HEADER.IMAGE + "ring.png",
                URL_HEADER.IMAGE + "game/main_info_panel.png",
                URL_HEADER.IMAGE + "game/panelDivider.png",
                URL_HEADER.IMAGE + _gSettings.background_game,
                URL_HEADER.IMAGE + "game/leaderboard.json",
                URL_HEADER.IMAGE + "ui/title.json",
                URL_HEADER.IMAGE + "game/game.json",
                URL_HEADER.IMAGE + "game/referee.json",
                URL_HEADER.IMAGE + "game/shoot_arrow.png",
                URL_HEADER.IMAGE + "game/runnoff.png",
                URL_HEADER.IMAGE + "sponsor/board1.png",
                URL_HEADER.IMAGE + "sponsor/board2.png",
                URL_HEADER.IMAGE + "sponsor/pitch-logo.png",
                URL_HEADER.IMAGE + "sponsor/main-menu-sponsor.jpg",
                URL_HEADER.IMAGE + "game/front_crowd.png",
                URL_HEADER.IMAGE + "game/shield_bubble.png",
                URL_HEADER.IMAGE + "game/overlays.json",
                URL_HEADER.IMAGE + "game/shop.json",
                URL_HEADER.IMAGE + "game/game_objects/ball-shadow.png",
                URL_HEADER.IMAGE + "ui/buttons.json",
                URL_HEADER.IMAGE + "ui/breadcrumb.json",
                URL_HEADER.IMAGE + "player/playercard.json",
                URL_HEADER.IMAGE + "player/character.json",
                URL_HEADER.IMAGE + "ui/panels.json",
                URL_HEADER.IMAGE + "ui/menu-background.jpg",
                URL_HEADER.IMAGE + "ui/country-select-panel.png",
                URL_HEADER.IMAGE + "ui/panel-player-select-and-tournament.png",
                URL_HEADER.IMAGE + "ui/diagram.png",
                URL_HEADER.IMAGE + "ui/vs-panel.png",
                URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png",
                URL_HEADER.IMAGE + "ui/overlay-background.png",
                URL_HEADER.IMAGE + "ui/instructions-panel.png",
                URL_HEADER.IMAGE + "ui/panel-final-score-background.png",
                URL_HEADER.IMAGE + "smoke_mixed.png"]),
            //n.loader.addCSS(ASSET_URL + "css/fonts.css"),
            n.loader.addCSS(URL_HEADER.CSS + "leading-course-fonts.css"),
            n.loader.addJson(URL_HEADER.DATA + "json/shopData.json", "shopData"),
            n.loader.addJson(URL_HEADER.DATA + "json/strings.json", "strings"),
            n.loader.addJson(URL_HEADER.DATA + "json/character-animation.json", "character-animation"),
            //n.loader.addCSS(ASSET_URL + "css/fonts.css"),
            n.loader.addCSS(URL_HEADER.CSS + "leading-course-fonts.css"),
            n.loader.addFonts(["lubalin", "fredburger"]);
            for (var s = [], a = 0; a < 40; a++) {
                var h = a;
                h < 10 && (h = "0" + h), s[a] = URL_HEADER.IMAGE + "game/shield/shield_" + h + ".png"
            }
            n.loader.addPixiAssets(s), n.loadSounds();
            var l = {};
            for (var a in st.CharacterData) {
                var c = st.CharacterData[a].spriteSheet,
                    u = c.replace("%COLOR%", "blue"),
                    p = c.replace("%COLOR%", "red");
                l[u] || (l[u] = !0, n.loader.addPixiAssets([URL_HEADER.IMAGE + "game/characters/" + p, URL_HEADER.IMAGE + "game/characters/" + u]))
            }
            return n.onReady.add(function () {
                setTimeout(function () {
                    n.onAppReady(n)
                }, 500)
            }), n.startup(), n
        }
        return s(e, t),
            e.prototype.onPreload = function () {
                var t = $["default"].getJson("config").config.LOCALE,
                    e = ["_ru"].indexOf(t) !== -1;
                window.MAIN_FONT = e ? "fredburger" : "lubalin",
                this.background = dt.Sprite.from(URL_HEADER.IMAGE + "/ui/menu-background.jpg"),
                this.stage.addChildAt(this.background, 0),
                this.background.alpha = 0,
                this.front = new dt.Container,
                this.platform = dt.Sprite.from(URL_HEADER.IMAGE + "ui/background-platform.png"),
                this.front.addChild(this.platform),
                this.stage.addChildAt(this.front, 1),
                this.platform.alpha = 0
            },
            e.prototype.loadSounds = function () {
                (0, d["default"])()
            },
            e.prototype.onAppReady = function () {
                var t = $["default"].getJson("strings").strings;
                window.translations = t;
                (0, st.translateCharacterNames)(t);
                this.spotLights = new pt["default"](this);
                this.front.addChild(this.spotLights);
                for (var e in ct.Translation) {
                    var i = ct.Translation[e];
                    for (var n in i) {
                        var r = i[n];
                        if (window.translations[r]) i[n] = window.translations[r];
                        else
                            for (var o in r) {
                                var s = r[o];
                                window.translations[s] && (r[o] = window.translations[s])
                            }
                    }
                }
                this.titleScreen = new b["default"](this),
                this.instructionsScreen = new S["default"](this),
                this.countrySelectScreen = new M["default"](this),
                this.captainSelectScreen = new A["default"](this),
                this.playerSelectScreen = new L["default"](this, (!0)),
                this.playerSelectScreen2 = new L["default"](this),
                this.teamReviewScreen = new P["default"](this),
                this.teamSelectScreen = new I["default"](this),
                this.tournamentScreen = new B["default"](this),
                this.leaderboardScreen = new F["default"](this),
                this.gameoverScreen = new U["default"](this),
                this.gameScreen = new z["default"](this),
                this.succeedScreen = new j["default"](this),
                this.failScreen = new W["default"](this),
                this.screenManager.addScreen(this.titleScreen, m["default"].SCREEN_ID.TITLE),
                this.screenManager.addScreen(this.instructionsScreen, m["default"].SCREEN_ID.INSTRUCTIONS),
                this.screenManager.addScreen(this.countrySelectScreen, m["default"].SCREEN_ID.COUNTRY_SELECT),
                this.screenManager.addScreen(this.captainSelectScreen, m["default"].SCREEN_ID.CAPTAIN_SELECT),
                this.screenManager.addScreen(this.playerSelectScreen, m["default"].SCREEN_ID.PLAYER_SELECT),
                this.screenManager.addScreen(this.playerSelectScreen2, m["default"].SCREEN_ID.PLAYER_SELECT_2),
                this.screenManager.addScreen(this.teamReviewScreen, m["default"].SCREEN_ID.TEAM_REVIEW),
                this.screenManager.addScreen(this.teamSelectScreen, m["default"].SCREEN_ID.TEAM_SELECT),
                this.screenManager.addScreen(this.tournamentScreen, m["default"].SCREEN_ID.TOURNAMENT),
                this.screenManager.addScreen(this.leaderboardScreen, m["default"].SCREEN_ID.LEADERBOARD),
                this.screenManager.addScreen(this.gameoverScreen, m["default"].SCREEN_ID.GAMEOVER),
                this.screenManager.addScreen(this.gameScreen, m["default"].SCREEN_ID.GAME),
                this.screenManager.addScreen(this.succeedScreen, m["default"].SCREEN_ID.SUCCEED),
                this.screenManager.addScreen(this.failScreen, m["default"].SCREEN_ID.FAIL),
                this.screenManager.container.name = "screenmanager",
                this.screenManager.container.defaultCursor = "pointer",
                this.topMenu = new et["default"](this),
                this.stage.addChild(this.topMenu),
                this.breadcrumb = new nt["default"](this),
                this.stage.addChildAt(this.breadcrumb, 2),
                this.overlayManager = new ot["default"](this),
                this.stage.addChildAt(this.overlayManager.view, 4),
                this.brand = new Z["default"](this),
                this.stage.addChild(this.brand),
                "true" === _["default"].get_query("fastplay") ? this.screenManager.gotoScreenByID(m["default"].SCREEN_ID.GAME) : this.screenManager.gotoScreenByID(m["default"].SCREEN_ID.TITLE),
                this.resize(this.w, this.h)
            },
            e.prototype.resize = function (t, e) {
                this.w = t || this.w, this.h = e || this.h;
                var i = 1;
                u["default"].instance.isMobile && (i = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI), i > 2 && (i = 2);
                var n = t / this.safeSize.width < e / this.safeSize.height ? t / this.safeSize.width : e / this.safeSize.height,
                    r = Math.min(this.maxSize.width * n, t),
                    o = Math.min(this.maxSize.height * n, e);
                this.w2 = r,
                this.h2 = o,
                this.ratio = n,
                this.renderer.resize(r * i | 0, o * i | 0),
                this.view.style.width = r + "px",
                this.view.style.height = o + "px",
                this.view.style.left = t / 2 - r / 2 + "px",
                this.view.style.top = e / 2 - o / 2 + "px",
                this.screenManager.resize(r / n, o / n),
                this.brand && (this.brand.resize(r / n, o / n), this.brand.scale.set(n * i)),
                this.overlayManager && (this.overlayManager.resize(r / n, o / n), this.overlayManager.view.scale.set(n * i)),
                this.background && this.background.scale.set(n * i),
                this.spotLights, this.platform && (this.front.scale.set(n * i), 1 === this.platform.alpha && (this.platform.position.y = o / n - this.platform.height)),
                this.topMenu && (this.topMenu.scale.set(n * i), this.topMenu.resize(r / n, o / n)),
                this.breadcrumb && (this.breadcrumb.resize(r / n, o / n), this.breadcrumb.scale.set(n * i)),
                this.screenManager.container.scale.set(n * i)
            },
            e.prototype.hidePlatform = function (t) {
                var e = this;
                TweenLite.to(this.platform, t ? 0 : .4, {
                    y: this.h2 / this.ratio,
                    onComplete: function () {
                        e.platform.alpha = 0
                    }
                })
            },
            e.prototype.showPlatform = function (t) {
                this.platform.alpha = 1, TweenLite.to(this.platform, t ? 0 : .4, {
                    y: this.h2 / this.ratio - this.platform.height
                })
            },
            e
    }(h["default"]);
    e["default"] = mt, t.exports = e["default"]
};