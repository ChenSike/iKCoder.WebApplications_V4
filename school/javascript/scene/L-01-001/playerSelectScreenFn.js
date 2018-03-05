var playerSelectScreenFn = function (t, e, i) {
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
        p = i(34),
        d = n(p),
        f = i(37),
        m = function (t) {
            function e(i, n) {
                r(this, e);
                var s = o(this, t.call(this, i));
                return s.first = n,
                    s.setPlayers((0, u.getPlayers)()),
                    s.title.text = n ? f.Translation.player1_select_screen.title : f.Translation.player2_select_screen.title,
                    s
            }
            return s(e, t), e.prototype.updateCharaterGameSession = function (t) {
                c["default"].teamA[this.first ? 1 : 2] = t.data
            }, e.prototype.selectPlayer = function (t) {
                if (this.playerCardSelected) {
                    for (var e = 0; e < this.cards.length; e++) {
                        this.first ? this.cards[e].data.id !== c["default"].teamA[2].id && this.cards[e].unselect() : this.cards[e].data.id !== c["default"].teamA[1].id && this.cards[e].unselect();
                    }
                    u.CharacterData[this.playerCardSelected.data.id].selected = !1
                }
                this.playerCardSelected = t,
                this.playerCardSelected.select(),
                u.CharacterData[this.playerCardSelected.data.id].selected = !0
            }, e.prototype.onShow = function () {
                t.prototype.onShow.call(this);
                if (!_gSettings.enableSelectTeam) {
                    this.alpha = 0;
                }

                var e = this.first ? 3 : 4;
                this.app.breadcrumb.steps[this.app.breadcrumb.currentStep].hasBeenActivate || (this.playerCardSelected = null, c["default"].teamA[this.first ? 1 : 2] && (c["default"].teamA[this.first ? 1 : 2].selected = !1)),
                this.first && (this.app.breadcrumb.steps[this.app.breadcrumb.currentStep + 1].hasBeenActivate || c["default"].teamA[2] && (c["default"].teamA[2].selected = !1)),
                this.app.topMenu.prevScreen = this.first ? d["default"].SCREEN_ID.CAPTAIN_SELECT : d["default"].SCREEN_ID.PLAYER_SELECT,
                this.app.topMenu.nextScreen = this.first ? d["default"].SCREEN_ID.PLAYER_SELECT_2 : d["default"].SCREEN_ID.TEAM_REVIEW,
                this.app.breadcrumb.maxStepIndexRiched < e ? this.app.topMenu.setState("prev") : this.app.topMenu.setState("prevnext")
            }, e.prototype.onHide = function () {
                t.prototype.onHide.call(this), c["default"].teamA[this.first ? 1 : 2].selected = !0
            }, e
        }(h["default"]);
    e["default"] = m, t.exports = e["default"]
}