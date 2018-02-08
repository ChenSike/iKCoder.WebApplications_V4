function loaderScreenFn(t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(8),
            o = i(23),
            s = (i(24), i(26)),
            a = (i(36), i(16)),
            h = i(37),
            l = h.Translation,
            c = i(38),
            u = i(21),
            p = i(18),
            d = function (t) {
                r.Container.call(this),
                this.app = t,
                this.count = 0,
                t.loader.onProgress.add(this.onProgress, this),
                this.easeLoad = 0,
                this.targetLoad = 0,
                this.onReady = new a,
                this.onComplete = new a,
                this.transition = new u,
                this.onAssetsLoaded()
            };
        d.prototype = Object.create(r.Container.prototype),
        d.prototype.constructor = d,
        d.prototype.onShown = function () { },
        d.prototype.onAssetsLoaded = function () {
            this.container = new r.Container,
            this.container.position.x = this.app.safeSize.width / 2,
            this.container.position.y = this.app.safeSize.height / 2;
            var t = (p.getJson("config").config.LOCALE, !1);
            this.logoContainer = new r.Container,
                t || (
                    this.logo = new r.Sprite.fromImage(URL_HEADER.IMAGE + "localisation/loader-logo-small.png"),
                    this.logo.anchor.set(.5, .5)
                    //this.logoContainer.addChild(this.logo)
                ),
                this.cnLogo = new r.Sprite.fromImage(URL_HEADER.IMAGE + "loader/loading_logo_cn.png"),
                this.cnLogo.anchor.set(.5, .5),
                t || (
                    this.cnLogo.position.x = this.logo.width + 40),
                    //this.logoContainer.addChild(this.cnLogo),
                    t || (
                        this.logoContainer.position.x = -this.logoContainer.width / 4 - 20
                    ),
                    this.barBg = new r.Sprite.fromImage(URL_HEADER.IMAGE + "loader/loader-bar.png"),
                    this.barBg.anchor.set(.5, .5),
                    this.barFill = new r.Sprite.fromImage(URL_HEADER.IMAGE + "loader/loader-fill.png"),
                    this.barFill.anchor.set(.5, .5),
                    this.barW = 494,
                    this.barH = 70,
                    this.barMask = new r.Graphics,
                    this.barMask.lineStyle(0),
                    this.barMask.beginFill(16711680, 1),
                    this.barMask.moveTo(0, 0),
                    this.barMask.lineTo(this.barW - 12, 0),
                    this.barMask.lineTo(this.barW - 12, this.barH - 12),
                    this.barMask.lineTo(0, this.barH - 12),
                    this.barMask.scale.x = 0,
                    this.barFill.mask = this.barMask,
                    this.barFrame = new r.Sprite.fromImage(URL_HEADER.IMAGE + "loader/loader-frame.png"),
                    this.barFrame.anchor.set(.5, .5),
                    this.label = new c,
                    this.barBg.position.set(0, this.logoContainer.height + 20),
                    this.barFill.position.set(0, this.barBg.position.y),
                    this.barMask.position.set(-this.barW / 2, this.barBg.position.y - this.barH / 2),
                    this.barFrame.position.set(0, this.barBg.position.y),
                    this.container.addChild(this.barBg),
                    this.container.addChild(this.barFrame),
                    this.container.addChild(this.barFill),
                    this.container.addChild(this.barMask),
                    this.container.addChild(this.logoContainer),
                    this.container.addChild(this.label),
                    o.instance.add(this.update, this),
                    this.addChild(this.container),
                    this.resize(this.w, this.h),
                    s.wait(this.showLoader.bind(this)
                )
        },
        d.prototype.showLoader = function () {
            TweenLite.to(this.app.background, .6, {
                alpha: 1,
                ease: Sine.easeOut
            }), this.app.resize(this.app.w, this.app.h), this.app.loader.load()
        },
        d.prototype.update = function () {
            this.count += .02,
            this.easeLoad += .3 * (this.targetLoad - this.easeLoad),
            this.barMask.scale.x = this.easeLoad,
            this.label.setText(l.loader.loading.replace("##", Math.ceil(100 * this.easeLoad))),
            this.easeLoad > .99 && (o.instance.remove(this.update, this), this.onComplete.dispatch())
        },
        d.prototype.onProgress = function (t) {
            this.targetLoad = t
        },
        d.prototype.onShow = function () { },
        d.prototype.onHide = function () {
            o.instance.remove(this.update, this)
        },
        d.prototype.resize = function (t, e) {
            this.w = t, this.h = e
            },
        n.exports = d
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
};