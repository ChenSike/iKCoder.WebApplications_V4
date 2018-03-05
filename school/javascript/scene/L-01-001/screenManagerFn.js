var screenManagerFn = function (t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(8),
            o = (i(21), i(22)),
            s = function (t, e, i, n) {
                this.container = t || new r.Container,
                this.screens = {},
                this.currentScreen,
                this.fading = !1,
                this.w = e || 400,
                this.h = i || 400,
                this.history = [],
                this.defaultTransition = n || new o,
                this.transition = this.defaultTransition,
                this.active = !1
            };
        s.constructor = s,
        s.prototype.gotoScreenByID = function (t, e) {
            var i = this.screens[t];
            if (!i) throw new Error("screen not found with id : " + t);
            this.gotoScreen(i, e)
        },
        s.prototype.addScreen = function (t, e) {
            this.screens[e] = t, t.id = e, t.screenManager = this
        },
        s.prototype.goBack = function () {
            this.history.pop();
            var t = this.history.pop();
            t && this.gotoScreen(t)
        },
        s.prototype.getScreenId = function (t) {
            for (var e in this.screens)
                if (this.screens[e] === t) return e;
            return null
        },
        s.prototype.gotoScreen = function (t, e) {
            if (this.currentScreen !== t && (this.history.push(t), this.nextScreen = t, !this.active)) {
                this.active = !0,
                this.transition = t.transition || this.defaultTransition,
                this.transition.onResize && this.transition.onResize(this.w, this.h);
                var i = this.currentScreen;
                this.nextScreen && this.nextScreen.resize && this.nextScreen.resize(this.w, this.h),
                this.currentScreen = t,
                this.transition.begin(this, i, this.nextScreen);
            }
        },
        s.prototype.onTransitionComplete = function () {
            this.active = !1, this.currentScreen != this.nextScreen && this.gotoScreen(this.nextScreen)
        },
        s.prototype.resize = function (t, e) {
            this.w = t,
            this.h = e,
            this.transition.onResize && this.transition.onResize(t, e),
            this.currentScreen && this.currentScreen.resize && this.currentScreen.resize(t, e);
        },
        n.exports = s
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
};