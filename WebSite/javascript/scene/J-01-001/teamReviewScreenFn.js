function teamReviewScreenFn(t, e, i) {
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
        c = i(49),
        u = n(c),
        p = i(34),
        d = n(p),
        f = i(37),
        m = i(50),
        g = i(60),
        v = n(g),
        y = i(57),
        _ = n(y),
        x = i(67),
        b = n(x),
        w = i(48),
        S = n(w),
        T = i(32),
        M = n(T),
        E = function (t) {
            function e(i) {
                o(this, e);
                var n = s(this, t.call(this));
                window.teamr = n,
                n.app = i,
                n.transition = new b["default"](n.app),
                n.cams = [];
                for (var r = 0; r < 20; r++) {
                    var a = new l.Sprite.from("camera-flash.png");
                    n.cams.push(a)
                }
                n.title = _["default"].h1(f.Translation.review_screen.title),
                n.title.anchor.set(.5, .5),
                n.captain = new l.Sprite,
                n.captain.anchor.set(.5, 1),
                n.captain.offset = {
                    x: 0,
                    y: 0
                },
                n.firstTeamMember = new l.Sprite,
                n.firstTeamMember.anchor.set(.5, 1),
                n.firstTeamMember.offset = {
                    x: 0,
                    y: 0
                }, n.secondTeamMember = new l.Sprite,
                n.secondTeamMember.anchor.set(.5, 1),
                n.secondTeamMember.offset = {
                    x: 0,
                    y: 0
                };
                for (var r = 0; r < n.cams.length / 2; r++) {
                    n.addChild(n.cams[r]);
                }
                n.addChild(n.firstTeamMember),
                n.addChild(n.secondTeamMember),
                n.addChild(n.captain);
                for (var r = n.cams.length / 2; r < n.cams.length; r++) {
                    n.addChild(n.cams[r])
                };
                n.flash = new l.Graphics,
                n.flash.beginFill(16777215),
                n.flash.drawRect(0, 0, 100, 100),
                n.flash.alpha = 0,
                n.addChild(n.flash),
                n.tick = 0,
                n.rand = {
                    c: S["default"].random(-.6, .6),
                    f: S["default"].random(-.6, .6),
                    s: S["default"].random(-.6, .6)
                },
                n.playButton = new l.Sprite.from("play_text_button.png"),
                n.playButton.interactive = !0,
                n.playButton.buttonMode = !0,
                n.playButton.anchor.x = .5,
                n.playButton.anchor.y = .5;
                var h = new l.Texture.fromImage("breadcrumb-play-til-on.png");
                return n.pbg = new l.extras.TilingSprite(h, n.playButton.width - 24, n.playButton.height - 24),
                    n.pbg.anchor.x = .5,
                    n.pbg.anchor.y = .5,
                    n.pbg.position.x = -3,
                    n.pbg.position.y = -3,
                    n.playButton.addChild(n.pbg),
                    n.pbtext = new _["default"].h1(translations.STR_PLAY_BUTTON),
                    n.pbtext.anchor.x = .5,
                    n.pbtext.anchor.y = .5,
                    n.playButton.addChild(n.pbtext),
                    n.playButton.mouseover = function () {
                        TweenLite.to(this.playButton.scale, .3, {
                            x: 1.1,
                            y: 1.1
                        })
                    }.bind(n),
                    n.playButton.mouseout = function () {
                        TweenLite.to(this.playButton.scale, .3, {
                            x: 1,
                            y: 1
                        })
                    }.bind(n),
                    n.playButton.mouseup = n.playButton.touchend = function () {
                        M["default"].sfx.play("button_press"), TweenLite.to(this.playButton.scale, .3, {
                            x: .7,
                            y: .7,
                            ease: Expo.easeOut
                        }), TweenLite.to(this.playButton, .4, {
                            alpha: 0,
                            ease: Expo.easeOut
                        }), u["default"].isTournament ? this.app.screenManager.gotoScreenByID(d["default"].SCREEN_ID.TOURNAMENT) : (this.app.screenManager.gotoScreenByID(d["default"].SCREEN_ID.GAME), this.app.breadcrumb.hide()), this.app.spotLights.hide()
                    }.bind(n),
                    n.addChild(n.playButton),
                    n.addChild(n.title),
                    n
            }
            return a(e, t),
            e.prototype.updateTransform = function () {
                t.prototype.updateTransform.call(this),
                this.tick += .1,
                this.pbg.tilePosition.x -= 1.2,
                this.pbtext.rotation = Math.PI / 180 * 5 * Math.sin(2 * this.tick),
                this.captain.position.x = this.w / 2 + this.captain.offset.x + 3 * Math.cos(this.tick * this.rand.c),
                this.captain.position.y = this.h / 1.3 + this.captain.offset.y + 3 * Math.sin(this.tick * this.rand.c),
                this.firstTeamMember.position.x = this.w / 4 + this.firstTeamMember.offset.x + 2 * Math.cos(this.tick * this.rand.f),
                this.firstTeamMember.position.y = this.h / 1.3 + this.firstTeamMember.offset.y + 2 * Math.sin(this.tick * this.rand.f),
                this.secondTeamMember.position.x = this.w / 2 + this.w / 4 + this.secondTeamMember.offset.x + 2 * Math.cos(this.tick * this.rand.s),
                this.secondTeamMember.position.y = this.h / 1.3 + this.secondTeamMember.offset.y + 2 * Math.sin(this.tick * this.rand.s)
            },
            e.prototype.onHide = function () {
                this.stop = !0,
                TweenLite.to(this.captain.offset, 2, {
                    y: 500,
                    ease: Quad.easeOut
                }), TweenLite.to(this.firstTeamMember.offset, 2, {
                    y: 500,
                    ease: Quad.easeOut
                }), TweenLite.to(this.secondTeamMember.offset, 2, {
                    y: 500,
                    ease: Quad.easeOut
                })
            },
            e.prototype.onShow = function () {
                this.alpha = 0;
                this.stop = !1,
                this.epilepsy(),
                this.app.spotLights.show(),
                this.app.breadcrumb.show(!0),
                this.app.topMenu.prevScreen = d["default"].SCREEN_ID.PLAYER_SELECT_2,
                this.captain.texture = new l.Texture.fromImage(u["default"].teamA[0].profile),
                this.firstTeamMember.texture = new l.Texture.fromImage(u["default"].teamA[1].profile),
                this.secondTeamMember.texture = new l.Texture.fromImage(u["default"].teamA[2].profile),
                this.captain.offset.x = u["default"].teamA[0].offsetReview && u["default"].teamA[0].offsetReview.x ? u["default"].teamA[0].offsetReview.x : 0,
                this.captain.offset.y = u["default"].teamA[0].offsetReview && u["default"].teamA[0].offsetReview.y ? u["default"].teamA[0].offsetReview.y : 0,
                this.firstTeamMember.offset.x = u["default"].teamA[1].offsetReview && u["default"].teamA[1].offsetReview.x ? u["default"].teamA[1].offsetReview.x : 0,
                this.firstTeamMember.offset.y = u["default"].teamA[1].offsetReview && u["default"].teamA[1].offsetReview.y ? u["default"].teamA[1].offsetReview.y : 0,
                this.secondTeamMember.offset.x = u["default"].teamA[2].offsetReview && u["default"].teamA[2].offsetReview.x ? u["default"].teamA[2].offsetReview.x : 0,
                this.secondTeamMember.offset.y = u["default"].teamA[2].offsetReview && u["default"].teamA[2].offsetReview.y ? u["default"].teamA[2].offsetReview.y : 0,
                this.buildTeam(),
                this.captain.scale.set(0),
                TweenLite.to(this.captain.scale, 1, {
                    x: Device.instance.isMobile ? .9 : 1.2,
                    y: Device.instance.isMobile ? .9 : 1.2,
                    ease: Elastic.easeOut,
                    delay: .2
                }),
                this.playButton.alpha = 1,
                this.playButton.scale.set(0),
                TweenLite.to(this.playButton.scale, 1, {
                    x: Device.instance.isMobile ? .9 : 1,
                    y: Device.instance.isMobile ? .9 : 1,
                    ease: Elastic.easeOut,
                    delay: .3
                }),
                this.firstTeamMember.scale.set(0),
                TweenLite.to(this.firstTeamMember.scale, 1, {
                    x: Device.instance.isMobile ? .9 : 1.2,
                    y: Device.instance.isMobile ? .9 : 1.2,
                    ease: Elastic.easeOut,
                    delay: .2
                }),
                this.secondTeamMember.scale.set(0),
                TweenLite.to(this.secondTeamMember.scale, 1, {
                    x: Device.instance.isMobile ? .9 : 1.2,
                    y: Device.instance.isMobile ? .9 : 1.2,
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
            e.prototype.buildTeam = function () {
                u["default"].tournamentData.quarter = [],
                u["default"].tournamentData.semi = [],
                u["default"].tournamentData["final"] = [],
                u["default"].tournamentData.winner = [],
                u["default"].matchResult.goalsA = u["default"].matchResult.goalsB = -1;
                var t = [];
                for (var e in m.CharacterData) t.push(m.CharacterData[e]);
                for (var e = 0; e < u["default"].teamA.length; e++) {
                    var i = t.indexOf(u["default"].teamA[e]);
                    i !== -1 && t.splice(i, 1)
                }
                v["default"].shuffle(t), u["default"].teamB = t.slice(0, 3);
                var n = [];
                for (e in f.Translation.countries) {
                    var r = f.Translation.countries[e];
                    u["default"].countryID !== r && n.push(r)
                }
                if (v["default"].shuffle(n), n = n.slice(0, 7), u["default"].isTournament) {
                    n.push(u["default"].countryID), v["default"].shuffle(n);
                    var o = [],
                        s = 2;
                    for (e = 0; e < n.length; e += s) o.push(n.slice(e, e + s));
                    u["default"].tournamentData.quarter = o.slice()
                } else u["default"].opponentID = n[0]
            },
            e.prototype.onShown = function () { }, e.prototype.epilepsy = function () {
                var t = this;
                setTimeout(function () {
                    t.stop || t.epilepsy()
                }, 1500 * Math.random() + 300), this.flash.alpha = 1, TweenLite.to(this.flash, .5 * Math.random() + .3, {
                    alpha: 0,
                    ease: Elastic.easeOut
                });
                for (var e = 0; e < this.cams.length; e++) {
                    this.cams[e].position.x = Math.random() * this.w,
                    this.cams[e].position.y = this.h / 2 + 200 * Math.random() - 100,
                    this.cams[e].alpha = 1,
                    this.cams[e].scale.set(S["default"].random(.1, 2)),
                    TweenLite.to(this.cams[e], Math.random() + .3, {
                        alpha: 0
                    })
                }
            }, 
            e.prototype.resize = function (t, e) {
                this.w = t,
                this.h = e,
                this.flash.width = t,
                this.flash.height = e,
                this.title.position.y = d["default"].MARGIN.TITLE_TOP,
                this.title.position.x = t / 2,
                this.playButton.position.x = t / 2,
                this.playButton.position.y = e / 1.3,
                this.captain.position.x = t / 2 + this.captain.offset.x,
                this.captain.position.y = e / 1.3 + this.captain.offset.y,
                this.firstTeamMember.position.x = t / 4 + this.firstTeamMember.offset.x,
                this.firstTeamMember.position.y = e / 1.3 + this.firstTeamMember.offset.x,
                this.secondTeamMember.position.x = t / 2 + t / 4 + this.secondTeamMember.offset.x,
                this.secondTeamMember.position.y = e / 1.3 + this.secondTeamMember.offset.x
            }, e
        }(l.Container);
    e["default"] = E, t.exports = e["default"]
};
