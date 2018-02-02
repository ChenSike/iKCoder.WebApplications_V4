function countrySelectScreenFn(t, e, i) {
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
        p = i(65),
        d = n(p),
        f = i(66),
        m = n(f),
        g = i(57),
        v = n(g),
        y = i(38),
        _ = (n(y), i(49)),
        x = n(_),
        b = i(24),
        w = n(b),
        S = i(34),
        T = n(S),
        M = i(37),
        E = i(61),
        A = n(E),
        C = i(67),
        L = (n(C), function (t) {
            function e(i) {
                o(this, e);
                var n = s(this, t.call(this));
                n.app = i, n.ranking = [], n.scaleRatio = .8, n.blocked = !1, n.bg = l.Sprite.from(URL_HEADER.IMAGE + "ui/country-select-panel.png"), n.bg.anchor.set(.5, .5), n.addChild(n.bg), n.title = v["default"].h1(M.Translation.country_select_screen.title), n.title.anchor.set(.5, .5), n.addChild(n.title), n.flagsContainer = new l.Container, n.flagsContainer.scale.set(n.scaleRatio), n.bg.addChild(n.flagsContainer), n.countries = (0, M.getCountries)(), n.buttonList = [];
                for (var r, a, h = 0, h = 0, c = 0, p = 6, f = 0, g = 0; g < n.countries.length; g++) {
                    r = n.countries[g],
                        a = u["default"].country(r.FLAG),
                        a.onHover2.add(n.onCountryButtonHover, n),
                        w["default"].instance.isMobile ? a.onPress.add(n.onCountryButtonHover, n) : a.onPress.add(n.onCountryButtonPressed, n),
                        a.onMouseOut.add(n.onCountryButtonMouseOut, n),
                        n.buttonList.push(a),
                    g < 4 || g > n.countries.length - 5 ? (c = a.width + T["default"].COUNTRY_SELECT.MARGIN, p = 4, f = 0, g > n.countries.length - 5 && (f = 6)) : (f = 4, c = 0, p = 6),
                        (g - f) % p === 0 && 0 !== g && h++,
                    a.position.x = (a.width + T["default"].COUNTRY_SELECT.MARGIN) * (g % p) + c,
                        a.position.y = (a.height + T["default"].COUNTRY_SELECT.MARGIN) * h,
                        a.id = r.ID, n.flagsContainer.addChild(a);
                }
                return n.bgc = new l.Graphics, n.bgc.beginFill(4095 * Math.random()), n.bgc.drawRect(0, 0, n.flagsContainer.width, n.flagsContainer.height), n.flagsContainer.position.set(-n.flagsContainer.width / 2 + a.width / 2 - T["default"].COUNTRY_SELECT.MARGIN / 2, -n.flagsContainer.height / 2 + a.height / 2 - T["default"].COUNTRY_SELECT.MARGIN / 2), n.countryGroup = new d["default"](n.buttonList, 1), n.toolTip = new m["default"], n.bg.addChild(n.toolTip), n.toolTip.onDown.add(n.onCountryButtonPressed.bind(n)), n.hoverDebounce = 0, n
            }
            return a(e, t),
                e.prototype.onCountryButtonPressed = function (t) {
                    if ((t.selected || this.currentButton) && 0 == this.blocked) {
                        var e = M.Translation.countries[t.id || this.currentButton.id];
                        this.blocked = !0, x["default"].countryID = e, this.app.breadcrumb.currentItem.updateTexture(e.FLAG), this.app.breadcrumb.next()
                    }
                },
                e.prototype.updateTransform = function () {
                    t.prototype.updateTransform.call(this), this.currentTime = Date.now()
                },
                e.prototype.onCountryButtonHover = function (t) {
                    this.currentButton === t && this.onCountryButtonPressed(t), w["default"].instance.isMobile && (this.currentButton = t), this.hoverDebounce++;
                    var e = {
                        name: M.Translation.countries[t.id].NAME,
                        label: M.Translation.country_select_screen.toolTip,
                        ranking: this.getRank(M.Translation.countries[t.id].SCORE_ID)
                    },
                        i = {
                            x: t.position.x * this.scaleRatio + this.flagsContainer.position.x,
                            y: (t.position.y + t.height / 2) * this.scaleRatio + this.flagsContainer.position.y
                        };
                    TweenLite.to(this.toolTip.position, .25, {
                        x: i.x,
                        y: i.y,
                        ease: Linear.None
                    }), this.toolTip.show(e)
                },
            e.prototype.onCountryButtonMouseOut = function (t) {
                this.hoverDebounce < 2 && this.toolTip.hide(), this.hoverDebounce = 0
            },
            e.prototype.getRank = function (t) {
                var e = 0;
                for (var i in this.ranking)
                    if (Number(this.ranking[i].id) == t) return e = this.ranking[i].rank;
                return e
            },
                e.prototype.onShow = function () {
                    this.toolTip.hide(),
                        this.blocked = !1,
                    A["default"].getScores(function (t) {
                        this.ranking = t
                    }.bind(this), !0),
                    this.currentButton = null,
                    this.bg.scale.set(0),
                    this.app.breadcrumb.hidden && (this.app.breadcrumb.show(), this.app.breadcrumb.reset()),
                    this.app.topMenu.prevScreen = T["default"].SCREEN_ID.TITLE,
                    this.app.topMenu.nextScreen = T["default"].SCREEN_ID.CAPTAIN_SELECT,
                    this.app.breadcrumb.steps[0].hasBeenActivate || (this.countryGroup.reset(), this.app.breadcrumb.steps[0].activate()),
                    this.app.breadcrumb.maxStepIndexRiched < 1 ? this.app.topMenu.setState("prev") : this.app.topMenu.setState("prevnext"),
                    TweenLite.to(this.bg.scale, 1, {
                        x: w["default"].instance.isMobile ? .9 : 1,
                        y: w["default"].instance.isMobile ? .9 : 1,
                        ease: Elastic.easeOut,
                        delay: .2
                    }),
                    this.title.scale.set(0),
                    TweenLite.to(this.title.scale, 1, {
                        x: 1,
                        y: 1,
                        ease: Elastic.easeOut,
                        delay: .2
                    })
                },
            e.prototype.onShown = function () {
                for (var t = void 0, e = void 0, i = 0; i < this.app.stage.children.length; i++) {
                    var n = this.app.stage.children[i];
                    "breabcrumb" === n.name && (t = n), "screenmanager" === n.name && (e = n)
                }
                this.app.stage.children[2] = t, this.app.stage.children[3] = e
            },
                e.prototype.resize = function (t, e) {
                    this.bg.position.set(t / 2, e / 2), this.title.position.y = T["default"].MARGIN.TITLE_TOP, this.title.position.x = t / 2
                }, e
        }(l.Container));
    e["default"] = L, t.exports = e["default"]
}