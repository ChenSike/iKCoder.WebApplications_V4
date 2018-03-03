var gameScreenWrapFn = function (t, e, i) {
    var n = null;
    n = function (t, e, n) {
        var r = i(8),
            o = (i(32), i(40), i(92)),
            s = (i(176), i(178)),
            a = i(34),
            h = i(49),
            l = i(61),
            c = function (t) {
                r.Container.call(this),
                this.app = t,
                this.game = new o,
                this.game.onGameover.add(this.onGameover, this),
                this.addChild(this.game.view),
                this.app.game = this.game,
                this.transition = new s
                _gloablObj = this;
            };
        c.prototype = Object.create(r.Container.prototype),
        c.prototype.onShow = function () {
            TweenLite.to(this.app.background, .4, {
                alpha: 0,
                delay: .4
            }),
            this.game.start(),
            this.app.overlayManager.onShow.add(this.onOverlayShow, this),
            this.app.overlayManager.onHide.add(this.onOverlayHide, this),
            this.app.topMenu.setState("game")
        },
        c.prototype.quit = function () {
            this.screenManager.gotoScreenByID(a.SCREEN_ID.TITLE)
        },
        c.prototype.onGameover = function () {
            var t = h.matchResult.goalsA - h.matchResult.goalsB,
                e = h.countryID.SCORE_ID;
            l.sendScore(e, t),
            h.isTournament === !0 ? this.screenManager.gotoScreenByID(a.SCREEN_ID.TOURNAMENT) : this.screenManager.gotoScreenByID(a.SCREEN_ID.GAMEOVER)
        },
        c.prototype.onShown = function () { },
        c.prototype.onHide = function () {
            TweenLite.to(this.app.background, .4, {
                alpha: 1
            }),
            this.game.pause(),
            this.app.overlayManager.onShow.remove(this.onOverlayShow, this),
            this.app.overlayManager.onHide.remove(this.onOverlayHide, this),
            app.view.style["-webkit-filter"] = null
        },
        c.prototype.onHidden = function () {
            this.game.pause(), this.app.topMenu.setState("home")
        },
        c.prototype.onOverlayShow = function () {
            this.game.pause()
        },
        c.prototype.onOverlayHide = function () {
            this.game.isGameover ? (this.game.reset(), this.game.resume()) : this.game.resume()
        },
        c.prototype.resize = function (t, e) {
            this.game.resize(t, e), this.position.x = 0, this.position.y = 0
        },
        n.exports = c;
    }.call(e, i, e, t),
    !(void 0 !== n && (t.exports = n))
}