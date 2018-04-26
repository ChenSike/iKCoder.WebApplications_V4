var PitchObjectFn = function (t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(8),
            o = i(12),
            s = i(126),
            a = (i(128), i(117)),
            h = (i(118), function () {
                for (var t = r.Sprite.from(URL_HEADER.IMAGE + _gSettings.background_game), e = new o.PlaneGeometry(1800, 1100), i = new r.Container, n = 0; n < 8; n++) {
                    var h = r.Sprite.from(URL_HEADER.IMAGE + "sponsor/board" + (n % 2 + 1) + ".png");
                    h.x = 305 * n, i.addChild(h)
                }
                this.loader = new o.TextureLoader;
                var l = this.loader.load(URL_HEADER.IMAGE + _gSettings.background_game),
                    c = new o.MeshBasicMaterial({
                        map: l
                    });
                c.side = o.DoubleSide,
                c.polygonOffset = !0,
                c.polygonOffsetFactor = 40,
                this.view3d = new o.Mesh(e, c),
                this.view3d.position.x = 800,
                this.view3d.position.y = 450,
                s.call(this, 0, 0, t);
                var l = a.getPixiTexture(i),
                    c = new o.MeshBasicMaterial({
                        map: l
                    });
                c.side = o.DoubleSide,
                c.transparent = !0,
                boardGeometry = new o.PlaneGeometry(i.width, 82),
                this.boardMesh = new o.Mesh(boardGeometry, c),
                this.view3d.add(this.boardMesh),
                this.boardMesh.rotation.x = Math.PI / 2 - .8,
                this.boardMesh.position.z = 25,
                this.boardMesh.position.y = 500,
                this.addCrowd(),
                this.addRunoff(),
                this.frontCrowd(),
                this.groups = ["Pitch"];
                var u = r.Texture.from(URL_HEADER.IMAGE + "sponsor/pitch-logo.png"),
                    p = new o.Texture;
                p.image = u.baseTexture.source, p.needsUpdate = !0;
                var c = new o.MeshBasicMaterial({
                    map: p
                });
                c.side = o.DoubleSide,
                c.transparent = !0,
                c.depthTest = !1,
                c.opacity = .5,
                logoGeometry = new o.PlaneGeometry(336, 336),
                this.logoMesh = new o.Mesh(logoGeometry, c),
                window.logoMesh = this.logoMesh,
                this.view3d.add(this.logoMesh)
            });
        h.prototype = Object.create(s.prototype),
        h.prototype.showLogo = function () {
            this.logoMesh.visible = !0, this.logoMesh.material.opacity = .4, TweenLite.to(this.logoMesh.material, .5, {
                opacity: 0,
                onComplete: function () {
                    this.logoMesh.visible = !1
                }.bind(this),
                delay: 8
            })
        },
        h.prototype.hideLogo = function () {
            TweenLite.to(this.logoMesh.material, .3, {
                opacity: 0,
                onComplete: function () {
                    this.logoMesh.visible = !1
                }.bind(this),
                delay: 0
            })
        },
        h.prototype.addCrowd = function () {
            var t = this.loader.load(URL_HEADER.IMAGE + "game/stadium-02.jpg");
            t.repeat.set(6 * .3, 1.2), t.wrapS = t.wrapT = o.RepeatWrapping;
            var e = new o.MeshBasicMaterial({
                map: t
            });
            e.side = o.DoubleSide, crowdGeometry = new o.PlaneGeometry(2400, (-500)), this.crowdMesh = new o.Mesh(crowdGeometry, e), this.view3d.add(this.crowdMesh), this.crowdMesh.rotation.x = -Math.PI / 2 - 1.2, this.crowdMesh.position.z = 75, this.crowdMesh.position.y = 780, this.crowdMesh.scale.z = -1
        },
        h.prototype.addRunoff = function () {
            var t = this.loader.load(URL_HEADER.IMAGE + "game/runnoff.png");
            t.repeat.set(1, 3), t.wrapS = t.wrapT = o.RepeatWrapping;
            var e = new o.MeshBasicMaterial({
                map: t
            });
            e.side = o.DoubleSide, e.polygonOffset = !0, e.polygonOffsetFactor = 40;
            var i = new o.PlaneGeometry(400, 1400),
                n = new o.Mesh(i, e);
            this.view3d.add(n), n.position.x = -1100, n.position.y = 300;
            var r = new o.Mesh(i, e);
            this.view3d.add(r), r.scale.x = -1, r.position.x = 1100, r.position.y = 300
        },
        h.prototype.frontCrowd = function () {
            var t = this.loader.load(URL_HEADER.IMAGE + "game/front_crowd.png");
            t.repeat.set(4, 1), t.wrapS = t.wrapT = o.RepeatWrapping;
            var e = new o.MeshBasicMaterial({
                map: t
            });
            e.side = o.DoubleSide, e.transparent = !0;
            var i = new o.PlaneGeometry(1600, 112),
                n = new o.Mesh(i, e);
            this.view3d.add(n), n.position.z = 106, n.position.y = -586, n.rotation.x = 1
        },
        h.prototype.reset = function () { },
        h.prototype.update = function () { },
        n.exports = h
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
}