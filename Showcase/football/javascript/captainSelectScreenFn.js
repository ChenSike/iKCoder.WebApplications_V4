var captainSelectScreenFn = function (t, e, i) {
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
    var a = i(69),
        h = n(a),
        l = i(49),
        c = n(l),
        u = i(50),
        p = i(37),
        d = i(34),
        f = n(d),
        m = function (t) {
            function e(i) {
                r(this, e);
                var n = o(this, t.call(this, i));
                return n.setPlayers((0, u.getCaptains)()),
                    n.gameSessionPlayerToSet = c["default"].teamA[0],
                    n.title.text = p.Translation.captain_select_screen.title,
                    n
            }
            return s(e, t), e.prototype.updateCharaterGameSession = function (t) {
                c["default"].teamA[0] = t.data
            }, e.prototype.onShow = function () {
                this.app.topMenu.buttons.prev.show();
                t.prototype.onShow.call(this);
                if (!_gSettings.enableSelectTeam) {
                    this.alpha = 0;
                }

                this.app.breadcrumb.steps[this.app.breadcrumb.currentStep].hasBeenActivate || (this.playerCardSelected = null, c["default"].teamA[0] && (c["default"].teamA[0].selected = !1)),
                this.app.topMenu.prevScreen = f["default"].SCREEN_ID.COUNTRY_SELECT,
                this.app.topMenu.nextScreen = f["default"].SCREEN_ID.PLAYER_SELECT,
                this.app.breadcrumb.maxStepIndexRiched < 2 ? this.app.topMenu.setState("prev") : this.app.topMenu.setState("prevnext")
            }, e
        }(h["default"]);
    e["default"] = m, t.exports = e["default"]
}