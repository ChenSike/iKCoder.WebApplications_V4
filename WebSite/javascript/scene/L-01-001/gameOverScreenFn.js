function gameOverScreenFn(t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(8),
            o = (i(32), i(41)),
            s = (i(38), i(57)),
            a = i(34),
            h = i(49),
            l = i(37),
            c = l.Translation;
        GameoverScreen = function (t) {
            r.Container.call(this),
            this.app = t,
            this.bg = r.Sprite.from(URL_HEADER.IMAGE + "ui/panel-various-paused-bg.png"),
            this.bg.anchor.set(.5, .5),
            this.addChild(this.bg),
            this.title = new s.h1(c.gameover_screen.title),
            this.title.anchor.set(.5),
            this.title.position.set(0, -this.bg.height / 2 - 35),
            this.bg.addChild(this.title),
            this.flag = null,
            this.flag2 = null;
            var e = {
                fill: "white",
                fontSize: 20,
                fontFamily: window.MAIN_FONT,
                stroke: !0,
                strokeThickness: 8,
                lineJoin: "round",
                align: "center"
            };
            this.labelCountry = new r.Text("", e),
            this.labelCountry.anchor.set(.5),
            this.labelCountry.position.set(-125, 0),
            this.bg.addChild(this.labelCountry),
            this.labelCountry2 = new r.Text("", e), 
            this.labelCountry2.anchor.set(.5),
            this.labelCountry2.position.set(125, 0),
            this.bg.addChild(this.labelCountry2), e = {
                fill: "white",
                fontSize: 100,
                fontFamily: window.MAIN_FONT,
                stroke: !0,
                strokeThickness: 8,
                lineJoin: "round",
                align: "center"
            },
            this.labelScore = new r.Text("", e),
            this.labelScore.anchor.set(.5),
            this.labelScore.position.set(-125, 75),
            this.bg.addChild(this.labelScore),
            this.labelVs = new r.Text("-", e),
            this.labelVs.anchor.set(.5),
            this.labelVs.position.set(0, 75),
            this.bg.addChild(this.labelVs),
            this.labelScore2 = new r.Text("", e),
            this.labelScore2.anchor.set(.5),
            this.labelScore2.position.set(125, 75),
            this.bg.addChild(this.labelScore2),
            this.restartButton = o.big("icon-back.png"),
            this.restartButton.position.set(-425, 290),
            this.restartButton.onPress.add(this.onRestartButtonPressed, this),
            this.nextButton = o.big("icon-back.png"),
            this.nextButton.position.set(380, 200),
            this.nextButton.icon.rotation = Math.PI,
            this.nextButton.onPress.add(this.onNextButtonPressed, this)
            //this.bg.addChild(this.nextButton)
        },
        GameoverScreen.prototype = Object.create(r.Container.prototype),
        GameoverScreen.prototype.onRestartButtonPressed = function () {
            this.screenManager.gotoScreenByID(a.SCREEN_ID.GAME)
        }, 
        GameoverScreen.prototype.onNextButtonPressed = function () {
            this.screenManager.gotoScreenByID(a.SCREEN_ID.TITLE)
        },
        GameoverScreen.prototype.updateContent = function () {
            null !== this.flag && (this.bg.removeChild(this.flag), this.bg.removeChild(this.flag2));
            var t = h.countryID,
                e = h.opponentID;
            this.flag = new r.Sprite.fromFrame(t.FLAG), this.flag.anchor.set(.5, .5), this.flag.scale.set(.9), this.flag.position.set(-125, -75), this.bg.addChild(this.flag), this.flag2 = new r.Sprite.fromFrame(e.FLAG), this.flag2.anchor.set(.5, .5), this.flag2.scale.set(.9), this.flag2.position.set(125, -75), this.bg.addChild(this.flag2), this.labelCountry.text = c.countries[t.ID].NAME, this.labelCountry2.text = c.countries[e.ID].NAME, this.labelScore.text = "" + this.app.game.goalsA, this.labelScore2.text = "" + this.app.game.goalsB
        },
        GameoverScreen.prototype.onShow = function () {
            this.updateContent(), this.bg.scale.set(0), this.app.topMenu.setState("home"), TweenLite.to(this.bg.scale, 1, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut,
                delay: .2
            })
        },
        GameoverScreen.prototype.onShown = function () { },
        GameoverScreen.prototype.resize = function (t, e) {
            this.position.y = e / 2 - 372.5 - 40, this.bg.position.set(t / 2, 440)
        },
        n.exports = GameoverScreen
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
}