function titleScreenFn(t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(8),
            o = (i(32), i(40)),
            s = (i(41), i(44)),
            a = i(48),
            h = i(24),
            l = i(49),
            c = i(34),
            u = i(37),
            p = u.Translation,
            d = i(51),
            f = i(52),
            m = i(50),
            g = m.CharacterData,
            v = i(18),
            y = i(54),
            _ = function (t) {
                r.Container.call(this),
                this.app = t,
                this.transition = new y(t),
                this.party = new f(1136, 800, 1),
                this.addChild(this.party),
                this.bg = new r.Container,
                this.addChild(this.bg);
                var e = v.getJson("config").config.LOCALE;
                this.local = e,
                this.logo = r.Sprite.from(ASSET_URL + p.title_screen.logo),
                this.logo.anchor.set(.5, .5),
                this.playButton = new s("quickplay-normal.png", "quickplay-hover.png", "quickplay-hover.png", p.title_screen.quick_play, 1.1),
                this.playButton.defaultScale = 1,
                this.playButton.onPress.add(this.onPlayButtonPressed, this),
                this.addChild(this.playButton),
                this.tournamentButton = new s("tournament-normal.png", "tournament-hover.png", "tournament-hover.png", p.title_screen.tournament, 1.1),
                this.tournamentButton.defaultScale = 1,
                this.tournamentButton.onPress.add(this.onTournamentButtonPressed, this),
                this.addChild(this.tournamentButton),
                this.leaderboardButton = new s("leaderboard-normal.png", "leaderboard-hover.png", "leaderboard-hover.png", p.title_screen.leaderboard, 1.1),
                this.leaderboardButton.defaultScale = 1,
                this.leaderboardButton.onPress.add(this.onLeaderboardButtonPressed, this),
                this.addChild(this.leaderboardButton), this.flash = new d, this.characters = [];
                for (var i = ["_uk"].indexOf(e) !== -1, n = layouts[e] || layouts.defualt, o = 0; o < n.length; o++) {
                    4 == o && this.bg.addChild(this.logo);
                    var h = n[o],
                        l = r.Sprite.from(h.id);
                    l.anchor.set(.5),
                    l.scale.set(0),
                    l.home = h.pos,
                    l.count = a.random(-30, 30),
                    l.wobbleSpeed = a.random(.05, .1),
                    l.scaleWobble = h.scaleWobble,
                    l.moveSpeed = a.random(.05, .2),
                    l.yRange = h.yRange,
                    l.moveCount = a.random(-30, 30),
                    this.characters.push(l),
                    this.bg.addChild(l)
                }
                this.ball = r.Sprite.fromFrame("logo_ball.png"),
                this.ball.anchor.set(.5, .5), 
                this.ball.position.set(-86, -23),
                this.ballShadow = r.Sprite.fromFrame("logo_ball_shadow.png"),
                this.ballShadow.anchor.set(.5, .5),
                this.ballShadow.position.set(-86, -23),
                i && (this.logo.addChild(this.ball), this.logo.addChild(this.ballShadow)),
                this.ballAnim(),
                this.pos = new r.Point,
                this.chars = new r.Container,
                this.chars.addChild((new r.Graphics).beginFill(16777215).drawRect(-1e3, -1e3, 2e3, 2e3));
                var c = 0;
                for (var o in g) {
                    var u = g[o],
                        m = "blue",
                        _ = u.spriteSheet.replace("%COLOR%", m),
                        x = v.getJson("character-animation")[_],
                        b = new r.Sprite.from(x.stand[0]);
                    this.chars.addChild(b), b.anchor.x = 0, b.anchor.y = .87;
                    b.texture;
                    c++, b.x = 50 * c, b.y = 300
                }
                if (!window.WEBGL) {
                    this.removeChild(this.playButton), this.removeChild(this.tournamentButton), this.removeChild(this.leaderboardButton);
                    var w = new r.Text(p.title_screen.updateBrowser, {
                        fill: "white",
                        fontSize: 28,
                        fontFamily: window.MAIN_FONT,
                        stroke: !0,
                        strokeThickness: 8,
                        lineJoin: "round"
                    });
                    w.anchor.set(.5, .5), this.label = w, this.addChild(w)
                }
            };
        _.prototype = Object.create(r.Container.prototype),
        _.prototype.ballAnim = function () {
            this.ball.rotation = Math.PI / 180, TweenLite.to(this.ball, 2, {
                rotation: 360 * Math.PI / 180,
                ease: Linear.easeNone,
                onComplete: this.ballAnim,
                onCompleteScope: this
            })
        },
        _.prototype.goBackToMainSite = function () { },
        _.prototype.onPlayButtonPressed = function () {
            this.startGame(!1)
        },
        _.prototype.onTournamentButtonPressed = function () {
            this.startGame(!0)
        },
        _.prototype.onLeaderboardButtonPressed = function () {
            this.screenManager.gotoScreenByID(c.SCREEN_ID.LEADERBOARD), this.transition.reverse = !1
        },
        _.prototype.startGame = function (t) {
            h.instance.android && (document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.webkitRequestFullScreen && document.body.webkitRequestFullScreen()), this.app.breadcrumb.show(), this.app.breadcrumb.reset(), l.difficulty = 0, l.isTournament = t === !0, this.screenManager.gotoScreenByID(c.SCREEN_ID.COUNTRY_SELECT)
        },
        _.prototype.onHide = function () {
            this.animating = !1
        },
        _.prototype.onShow = function () {
            var t = this;
            TweenLite.to(this.app.background, .4, {
                alpha: 1
            }), this.app.spotLights.show(), o.play("menumusic2"), this.party.visible = !1, this.logo.scale.set(0), this.playButton.scale.set(0), this.tournamentButton.scale.set(0), this.leaderboardButton.scale.set(0), this.app.topMenu.setState("home"), this.app.breadcrumb.hide();
            for (var e = 0; e < this.bg.children.length; e++)
                if (4 != e) {
                    var i = this.bg.children[e];
                    TweenLite.to(i.scale, 1, {
                        x: 1,
                        y: 1,
                        ease: Elastic.easeOut,
                        delay: .4 + .01 * e
                    }), TweenLite.to(i.position, 1, {
                        x: i.home.x,
                        y: i.home.y,
                        ease: Elastic.easeOut,
                        delay: .4 + .01 * e
                    })
                }
            setTimeout(function () {
                t.animating = !0;
                for (var e = 0; e < t.characters.length; e++) {
                    var i = t.characters[e];
                    i.moveCount = 0;
                    var n = i.yRange;
                    i.yRange = 0, TweenLite.to(i, .8, {
                        yRange: n
                    })
                }
            }, 1400), TweenLite.delayedCall(.4, function () {
                this.flash.flash(.2, 1), this.playButton.scale.set(.5), this.tournamentButton.scale.set(.5), this.leaderboardButton.scale.set(.5), this.party.visible = !0
            }.bind(this));
            var n = "_ru" === this.local ? 1.5 : 1;
            TweenLite.to(this.logo.scale, 1, {
                x: n,
                y: n,
                ease: Elastic.easeOut,
                delay: .2
            }), TweenLite.to(this.playButton.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .4
            }), TweenLite.to(this.tournamentButton.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .4
            }), TweenLite.to(this.leaderboardButton.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .4
            })
        },
        _.prototype.updateTransform = function () {
            if (this.party.update(this.pos), this.containerUpdateTransform(), this.animating)
                for (var t = 0; t < this.characters.length; t++) {
                    var e = this.characters[t];
                    e.count += e.wobbleSpeed, e.moveCount += e.moveSpeed, e.y = e.home.y + Math.sin(e.moveCount) * e.yRange
                }
        },
        _.prototype.resize = function (t, e) {
            this.position.y = e / 2 - 372.5 - 40, h.instance.isMobile ? (this.bg.position.set(t / 2, 400), this.playButton.position.set(250, 610), this.tournamentButton.position.set(t / 2, 610), this.leaderboardButton.position.set(t - 250, 610), this.label && this.label.position.set(t / 2, 625)) : (this.bg.position.set(t / 2, 400), this.playButton.position.set(250, 675), this.tournamentButton.position.set(t / 2, 675), this.leaderboardButton.position.set(t - 250, 675), this.label && this.label.position.set(t / 2, 675)), this.flash.resize(t, e)
        };
        var x = [{
            id: "title_mojo.png",
            pos: {
                x: -225,
                y: -171
            },
            scaleWobble: .025,
            yRange: 5
        }, {
            id: "title_xlr8.png",
            pos: {
                x: 252,
                y: -99
            },
            scaleWobble: .025,
            yRange: 5
        }, {
            id: "title_grup.png",
            pos: {
                x: 27,
                y: -216
            },
            scaleWobble: .05,
            yRange: 10
        }, {
            id: "title_bears.png",
            pos: {
                x: -58.5,
                y: -63
            },
            scaleWobble: .05,
            yRange: 10
        }, {
            id: "title_blossom.png",
            pos: {
                x: 198,
                y: -108
            },
            scaleWobble: .025,
            yRange: 5
        }, {
            id: "title_ben.png",
            pos: {
                x: -399,
                y: -126
            },
            scaleWobble: .025,
            yRange: 5
        }, {
            id: "title_buttercup.png",
            pos: {
                x: -337.25,
                y: -85.5
            },
            scaleWobble: .025,
            yRange: 5
        }, {
            id: "title_finn.png",
            pos: {
                x: -283.5,
                y: 90
            },
            scaleWobble: .015,
            yRange: 5
        }, {
            id: "title_gumball.png",
            pos: {
                x: 247.5,
                y: 27
            },
            scaleWobble: .01,
            yRange: 5
        }],
            b = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: -58.5,
                    y: -63
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 270,
                    y: -108
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -337.25,
                    y: -85.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 310.5,
                    y: 27
                },
                scaleWobble: .01,
                yRange: 5
            }],
            w = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: -58.5,
                    y: -81
                },
                scaleWobble: .05,
                yRange: 4
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 207,
                    y: -108
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -337.25,
                    y: -85.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 301.5,
                    y: 27
                },
                scaleWobble: .01,
                yRange: 5
            }],
            S = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: 22.5,
                    y: -81
                },
                scaleWobble: .05,
                yRange: 4
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 202.5,
                    y: -63
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -289.75,
                    y: -85.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 315,
                    y: 27
                },
                scaleWobble: .01,
                yRange: 5
            }],
            T = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: -76.5,
                    y: -99
                },
                scaleWobble: .05,
                yRange: 4
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 216,
                    y: -63
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -337.25,
                    y: -85.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 297,
                    y: 63
                },
                scaleWobble: .01,
                yRange: 5
            }],
            M = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: 58.5,
                    y: -63
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 234,
                    y: -72
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -232.75,
                    y: -112.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 337.5,
                    y: 27
                },
                scaleWobble: .01,
                yRange: 5
            }],
            E = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: -58.5,
                    y: -72
                },
                scaleWobble: .05,
                yRange: 4
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 207,
                    y: -135
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -337.25,
                    y: -85.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 310.5,
                    y: 27
                },
                scaleWobble: .01,
                yRange: 5
            }],
            A = [{
                id: "title_mojo.png",
                pos: {
                    x: -225,
                    y: -171
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_xlr8.png",
                pos: {
                    x: 252,
                    y: -99
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_grup.png",
                pos: {
                    x: 27,
                    y: -216
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_bears.png",
                pos: {
                    x: -58.5,
                    y: -108
                },
                scaleWobble: .05,
                yRange: 10
            }, {
                id: "title_blossom.png",
                pos: {
                    x: 234,
                    y: -108
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_ben.png",
                pos: {
                    x: -399,
                    y: -126
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_buttercup.png",
                pos: {
                    x: -337.25,
                    y: -85.5
                },
                scaleWobble: .025,
                yRange: 5
            }, {
                id: "title_finn.png",
                pos: {
                    x: -283.5,
                    y: 90
                },
                scaleWobble: .015,
                yRange: 5
            }, {
                id: "title_gumball.png",
                pos: {
                    x: 301.5,
                    y: 27
                },
                scaleWobble: .01,
                yRange: 5
            }];
        layouts = {
            defualt: x,
            _tr: b,
            _ru: w,
            _ro: S,
            _pt: T,
            _pl: M,
            _es: A,
            _hu: E
        }, n.exports = _
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
}