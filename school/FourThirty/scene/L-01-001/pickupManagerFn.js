var pickupManagerFn = function (t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(53),
            o = i(159),
            s = i(126),
            a = i(48),
            h = i(160),
            l = i(162),
            c = i(163),
            u = i(164),
            p = i(23),
            d = i(165),
            f = function (t) {
                this.game = t,
                this.count = 100,
                this.pool = new r(o),
                this.activePowerups = [],
                this.maxPowerups = 4,
                this.powerups = [u, c, h, l],
                this.paused = !1,
                this.onPowerupActivated = new d,
                this.firstRun = !0,
                this.firstRunCount = 0,
                this.powerupStates = {},
                this.world = null,
                s.call(this, 400, 50, null, null)
            };
        f.constructor = f,
        f.prototype = Object.create(s.prototype),
        f.prototype.pause = function () {
            this.paused = !0
        },
        f.prototype.resume = function () {
            this.paused = !1
        },
        f.prototype.clear = function () {
            var t = this.world.groups.pickup;
            t && t.run(function (t) {
                t.destroy()
            }, this)
        },
        f.prototype.update = function () {
            if (!this.paused && (this.count += p.game.deltaTime, this.count > 1e3)) {
                var t = this.world.groups.pickup;
                t ? t.children.length < this.maxPowerups && 0 == this.activePowerups.length && this.addPickup() : this.addPickup()
            }
        },
        f.prototype.addPickup = function () {
            if (_gSettings.enablePickUP) {
                this.count = 0;
                var t = r.getObject(o);
                t.timer = 0,
                t.position.x = a.random(400, 1200),
                t.position.y = a.random(250, 650);
                var e = Math.random() * this.powerups.length | 0;
                t.reset(this.powerups[e]),
                this.world.add(t)
            }
        },
        f.prototype.onPickupActivate = function (t) {
            t = t || this.cachePickup
        },
        f.prototype.reset = function (t) {
            for (var e = 0; e < this.pickups.length; e++) {
                var i = this.pickups[e];
                this.game.world.remove(i), GameObjectPool.returnObject(i)
            }
            this.powerups = t.powerups, this.paused = !1
        },
        n.exports = f
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
}