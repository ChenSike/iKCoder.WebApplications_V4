var teamManagerFn = function (t, e, i) {
    "use strict";
    var n = i(8),
        r = i(124),
        o = i(149),
        s = i(150),
        a = i(151),
        h = r.TEAM_STATE,
        l = r.PLAYER_STATE,
        c = function (t, e, i) {
            this.game = t,
            this.team = e,
            this.teamBad = i,
            this.enableShoot(),
            this.enablePass(),
            this.enableTackle(),
            this.enableSignal(),
            this.state = h.DEFENDING,
            this.human = !1,
            window.team = this,
            this.blockMove = !1,
            this.goal = null,
            this.firstGo = !1,
            this.constrainPlayer = !1,
            this.team.children[0].DEBUG = !0,
            this.team.run(function (e) {
                e.balanceManager = t,
                e.signals.onBallRecieved.add(this.onPlayerRecievedBall, this),
                e.signals.onBallLost.add(this.onPlayerLostBall, this)
            }, this), this.teamBad.run(function (t) {
                t.signals.onBallRecieved.add(this.onPlayerBadRecievedBall, this),
                t.signals.onBallLost.add(this.onPlayerBadLostBall, this)
            }, this),
            this.game.keeperLeft.signals.onBallRecieved.add(this.onKeeperRecievedBall, this),
            this.game.keeperRight.signals.onBallRecieved.add(this.onKeeperRecievedBall, this),
            this.game.keeperLeft.signals.onBallLost.add(this.onKeeperLostBall, this),
            this.game.keeperRight.signals.onBallLost.add(this.onKeeperLostBall, this),
            this.debug = new n.Text("HI MUM"), this.signCount = 0
        };
    c.constructor = c,
    c.prototype.setSide = function (t) {
        this.left !== t && (
            this.left = t,
            t ? (
                this.team.children[0].startPosition.set(300, 100),
                this.team.children[1].startPosition.set(200, 300),
                this.team.children[2].startPosition.set(100, 400),
                this.goal = this.game.goalRight,
                this.keeper = this.game.keeperRight,
                this.balanceData = this.game.balanceManager.teamA
            ) : (
                this.team.children[0].startPosition.set(700, 100),
                this.team.children[1].startPosition.set(600, 300),
                this.team.children[2].startPosition.set(500, 400),
                this.goal = this.game.goalLeft,
                this.keeper = this.game.keeperLeft,
                this.balanceData = this.game.balanceManager.teamB
            ),
            this.keeper.balanceData = this.balanceData,
            this.team.children[0].balanceData = this.balanceData,
            this.team.children[1].balanceData = this.balanceData,
            this.team.children[2].balanceData = this.balanceData
        )
    },
    c.prototype.show = function (t, e, i) {
        this.team.children[t].show(), this.resetPlayerAt(this.team.children[t], e, i)
    },
    c.prototype.hide = function (t, e, i) {
        this.team.children[t].hide(), this.resetPlayerAt(this.team.children[t], e, i)
    },
    c.prototype.hideAll = function (t) {
        for (var e = 0; e < this.team.children.length; e++) {
            this.team.children[e].hide(),
            this.resetPlayerAt(this.team.children[e], 50, 50);
        }
    },
    c.prototype.showAll = function (t) {
        for (var e = 0; e < this.team.children.length; e++) this.team.children[e].show()
    },
    c.prototype.setTeam = function (t) {
        for (var e = 0; e < this.team.children.length; e++) this.team.children[e].setData(t[e])
    },
    c.prototype.resetPositions = function (t, e) {
        var i = this.team.children;
        this.setState(h.KICK_OFF),
        this.setPlayer(null),
        t ? e ? (
            this.resetPlayerAt(i[0], .2, .4),
            this.resetPlayerAt(i[1], .2, .6),
            this.resetPlayerAt(i[2], .45, .5)
        ) : (
            i[0].reset(),
            i[1].reset(),
            i[2].reset(),
            i[0].position.set(800, 50),
            i[1].position.set(800, 50),
            i[2].position.set(800, 50),
            this.movePlayerTo(i[0], .2, .4),
            this.movePlayerTo(i[1], .2, .6),
            this.movePlayerTo(i[2], .45, .5)
        ) : e ? (
            this.resetPlayerAt(i[0], .15, .4),
            this.resetPlayerAt(i[1], .15, .6),
            this.resetPlayerAt(i[2], .4, .5)
        ) : (
            i[0].reset(), i[1].reset(),
            i[2].reset(),
            i[0].position.set(800, 50),
            i[1].position.set(800, 50),
            i[2].position.set(800, 50),
            this.movePlayerTo(i[0], .15, .4),
            this.movePlayerTo(i[1], .15, .6),
            this.movePlayerTo(i[2], .4, .5)
        )
    },
    c.prototype.go = function () {
        this.firstGo = !0, this.setState(h.DEFENDING), this.team.children[2].movement.direction.x = 1, this.team.children[2].movement.direction.y = 0
    },
    c.prototype.happy = function () {
        this.setState(h.SCORED)
    },
    c.prototype.sad = function () {
        this.setState(h.LOST)
    },
    c.prototype.stopActivePlayer = function () {
        this.activePlayer && this.human && this.activePlayer.stop()
    },
    c.prototype.moveActivePlayerInDirection = function (t, e) {
        if (this.activePlayer && this.human) {
            return this.blockMove ? void this.activePlayer.moveInDirection(0, 0) : void (
                this.constrainPlayer ? this.ConstrainActivePlayerInDirection(t, e) : this.activePlayer.moveInDirection(t, e)
            )
        }
    },
    c.prototype.ConstrainActivePlayerInDirection = function (t, e) {
        if (this.activePlayer && this.human) {
            var i = this.activePlayer.position.x / this.game.pitchWidth,
                n = this.activePlayer.position.y / this.game.pitchHeight;
            (i < .4 && 1 !== t || i > .6 && t !== -1) && (t = -t), (n < .4 && 1 !== e || n > .6 && e !== -1) && (e = -e), this.activePlayer.moveInDirection(t, e)
        }
    },
    c.prototype.setPlayer = function (t) {
        this.activePlayer !== t && (
            this.activePlayer && (
                this.activePlayer.stop(),
                this.activePlayer.auto = !0,
                this.activePlayer.view3d.reticle.visible = !1
            ),
            this.activePlayer = t,
            t && this.human && (t.auto = !1, t.view3d.reticle.visible = !0, t.stop())
        )
    };
    var u = {};
    u[h.ATTACKING] = "attack",
    u[h.TUTORIAL_PASS] = "t-attack",
    u[h.TUTORIAL_IDLE] = "t-idle",
    u[h.DEFENDING] = "defending",
    u[h.ATTACK_IDLE] = "attack_idle",
    u[h.KICK_OFF] = "kickoff",
    u[h.DEFEND_IDLE] = "defend_idle",
    u[h.SCORED] = "scored",
    u[h.LOST] = "lost",
    c.prototype.setState = function (t) {
        this.state !== t && (this.debug.text = "state " + u[t], this.makeDecision = !0, t === h.SCORED ? this.team.run(function (t) {
            t.win()
        }) : t === h.LOST && this.team.run(function (t) {
            t.lose()
        }), t === h.ATTACKING || t === h.DEFENDING ? this.keeper.active = !0 : this.keeper.active = !1, this.state = t)
    },
    c.prototype.actionBegin = function () {
        var t = this;
        if (this.shoot = !1, this.tackle = !1, this.pass = !1, this.game.ball.owner === this.activePlayer) {
            this.activePlayer.position.x / this.game.pitchWidth < .7 ? (this.pass = !0, this.canPass && this.passControl()) : this.timer = setTimeout(function () {
                t.shoot = !0, t.canShoot && t.activePlayer.shootBegin(t.goal)
            }, 150);
        } else {
            this.tackle = !0;
            var e = o(this.activePlayer, this.teamBad);
            this.canTackle && this.activePlayer.slideTackle(e.dx, e.dy, 10)
        }
    },
    c.prototype.passControl = function () {
        var t = o(this.activePlayer, this.team);
        t.player && t.player.state !== r.PLAYER_STATE.HIDE ? this.activePlayer.ballSkills.passTo(t.player) : this.activePlayer.ballSkills.pass(t.dx, t.dy, 10)
    },
    c.prototype.actionEnd = function () {
        clearTimeout(this.timer),
        this.activePlayer && (
            this.shoot && this.canShoot && this.activePlayer.shootRelease(this.goal),
            this.shoot || this.tackle || !this.canPass || this.passControl(),
            this.shoot = !1,
            this.tackle = !1,
            this.pass = !1
        )
    },
    c.prototype.actionOneShootBegin = function () {
        this.canShoot && this.activePlayer.shootBegin(this.goal)
    },
    c.prototype.actionOneShootEnd = function () {
        this.canShoot && this.activePlayer.shootRelease(this.goal)
    },
    c.prototype.actionTwoPassTackleBegin = function () {
        if (this.canPass) {
            var t = o(this.activePlayer, this.team);
            t.player && t.player.state !== r.PLAYER_STATE.HIDE ? this.activePlayer.ballSkills.passTo(t.player) : this.activePlayer.ballSkills.pass(t.dx, t.dy, 10)
        }
        if (this.canTackle && (!this.activePlayer || !this.activePlayer.ball)) {
            var t = o(this.activePlayer, this.teamBad);
            this.activePlayer.slideTackle(t.dx, t.dy, 10)
        }
    },
    c.prototype.actionTwoPassTackleEnd = function () { },
    c.prototype.update = function () {
        var t = this.game.pitchWidth,
            e = (this.game.pitchHeight, this.team),
            i = this.team.getIndex(this.activePlayer),
            n = this.activePlayer,
            r = e.getItem((i + 1) % 3),
            o = e.getItem((i + 2) % 3);
        o.position.x > r.position.x;
        var l = 160;
        if (this.state === h.DEFENDING) {
            this.makeDecision && (this.makeDecision = !1);
            var c = this.team.getItem(0),
                u = this.team.getItem(1),
                p = this.team.getItem(2);
            this.game.ball.position.x > .4 * t ? (
                this.movePlayerTo(c, .5, .5),
                this.movePlayerTo(u, .3, .6),
                this.movePlayerTo(p, .2, .4)
            ) : this.game.ball.position.x > .5 * t ? (
                this.movePlayerTo(c, .8, .5),
                this.movePlayerTo(u, .5, .6),
                this.movePlayerTo(p, .3, .4)
            ) : (
                this.movePlayerTo(c, .8, .5),
                this.movePlayerTo(u, .7, .4),
                this.movePlayerTo(p, .5, .4)
            );
            var d = s(this.game.ball, this.team);
            d.player.movement.turnMultiplier = .2 * this.balanceData.turnMultiplier, d.player.chaseDown(this.game.ball);
            var f = a(this.game.ball, this.activePlayer, this.team, this.left);
            this.setPlayer(f.player)
        } else if (this.state === h.TUTORIAL_IDLE) {

        } else if (this.state === h.TUTORIAL_TACKLE) {
            this.human || (
                this.team.getItem(1).moveTo(n.position.x, n.position.y),
                this.team.getItem(1).moveTo(this.game.ball.position.x, this.game.ball.position.y),
                this.team.getItem(1).chaseDown(this.game.ball)
            );
        } else if (this.state === h.ATTACKING) {
            var m = this.team.getItem(0),
                g = this.team.getItem(1),
                v = this.team.getItem(2);
            if (this.human) {
                if (this.game.ball.position.x < .3 * t) {
                    this.movePlayerTo(m, .5, .4), this.movePlayerTo(v, .2, .75), this.movePlayerTo(g, .2, .25);
                } else {
                    if (this.left) {
                        var y = Math.max(n.position.x, .8 * t),
                        _ = n.position.x - 200;
                    } else {
                        var y = Math.min(n.position.x, .2 * t),
                            _ = n.position.x + 200;
                    }
                    n.position.y < 450 ? o.moveTo(y, n.position.y + l + 100) : o.moveTo(y, n.position.y - l - 50), r.moveTo(_, n.position.y + l)
                }
            } else {
                if (
                    o.moveTo(n.position.x, n.position.y - l - 100),
                    r.moveTo(n.position.x + 200, n.position.y + l),
                    this.signCount += .02,
                    this.movePlayerTo(n, .81, .5 + .1 * Math.sin(this.signCount)),
                    n.passWait++,
                    n.ballSkills.ball
                ) {
                    var d = s(this.game.ball, this.teamBad);
                    n.passWait > 30 && this.agro < .4 && d.len < 100 && this.passToPlayer(o)
                }
                if (o.position.x > n.position.x && r.position.x > n.position.x && n.position.x < 500 && (n.passWait = 0), n.position.x < this.percentFromGoal(.2)) {
                    var x = this.game.pitchHeight;
                    n.position.y > .25 * x && n.position.y < .75 * x ? n.shootRelease(this.goal) : this.passToPlayer(o)
                } else n.passWait > 90 ? this.passToPlayer(Math.random() > .5 ? o : r) : n.passWait > 40 ? o.position.x < this.activePlayer.position.x && this.passToPlayer(o) : n.passWait > 10; if (!this.game.ball.owner) {
                    var d = s(this.game.ball, this.team);
                    d.player.movement.turnMultiplier = .2 * this.balanceData.turnMultiplier, d.player.chaseDown(this.game.ball)
                }
            }
        } else if (this.state === h.DEFEND_IDLE) {
            var c = this.team.getItem(0),
                u = this.team.getItem(1),
                p = this.team.getItem(2);
            this.movePlayerTo(c, .2, .5), this.movePlayerTo(u, .3, .3), this.movePlayerTo(p, .6, .4)
        } else if (this.state === h.ATTACK_IDLE) {
            var c = this.team.getItem(0),
                u = this.team.getItem(1),
                p = this.team.getItem(2);
            this.movePlayerTo(c, .4, .5), this.movePlayerTo(u, .6, .3), this.movePlayerTo(p, .6, .2)
        }
    },
    c.prototype.passToPlayer = function (t) {
        this.canPass && t !== this.activePlayer && t.state !== l.FALL && this.activePlayer.ballSkills.passTo(t)
    },
    c.prototype.resetPlayerAtByIndex = function (t, e, i) {
        this.left ? (
            this.team.children[t].position.x = this.game.pitchWidth * e,
            this.team.children[t].position.y = this.game.pitchHeight * i
        ) : (
            this.team.children[t].position.x = this.game.pitchWidth * (1 - e),
            this.team.children[t].position.y = this.game.pitchHeight * (1 - i)
        ),
        this.team.children[t].reset()
    },
    c.prototype.resetPlayerAt = function (t, e, i) {
        this.left ? (
            t.position.x = this.game.pitchWidth * e,
            t.position.y = this.game.pitchHeight * i
        ) : (
            t.position.x = this.game.pitchWidth * (1 - e),
            t.position.y = this.game.pitchHeight * (1 - i)
        ),
        t.reset()
    },
    c.prototype.movePlayerTo = function (t, e, i) {
        t.movement.turnMultiplier = 1,
        t.movingTo = !1,
        t.ballSkills.ball || (t.movingTo = !0),
        this.left ? t.moveTo(this.game.pitchWidth * e, this.game.pitchHeight * i) : t.moveTo(this.game.pitchWidth * (1 - e), this.game.pitchHeight * (1 - i))
    },
    c.prototype.onPlayerRecievedBall = function (t) {
        if (this.state !== h.TUTORIAL_IDLE || this.activePlayer !== t) {
            if ((Math.random() > .5 || this.firstGo) && (this.firstGo = !1, !this.human)) {
                var e = this.team,
                    i = e.getIndex(t),
                    n = e.getItem((i + 1) % 3),
                    r = e.getItem((i + 2) % 3),
                    o = Math.random();
                o > .25 && (o > .75 ? this.passToPlayer(n) : this.passToPlayer(r))
            }
            for (var s = 0; s < this.team.children.length; s++);
            this.agro = Math.random(), this.setPlayer(t), this.setState(h.ATTACKING)
        }
    },
    c.prototype.onPlayerLostBall = function (t) {
        if (this.state !== h.TUTORIAL_IDLE) {
            var e = .5 * this.game.pitchWidth;
            this.left ? this.game.ball.position.x < e && this.setState(h.DEFENDING) : this.game.ball.position.x > e && this.setState(h.DEFENDING);
            for (var i = 0; i < this.team.children.length; i++) this.team.children[i].chaseWait = 0
        }
    },
    c.prototype.percentFromGoal = function (t) {
        return this.left && (t = 1 - t), this.game.pitchWidth * t
    },
    c.prototype.onPlayerBadRecievedBall = function (t) {
        var e = s(this.game.ball, this.team);
        this.setPlayer(e.player), this.state !== h.TUTORIAL_IDLE && this.setState(h.DEFENDING)
    },
    c.prototype.onPlayerBadLostBall = function (t) {
        this.state === h.TUTORIAL_IDLE
    },
    c.prototype.onKeeperRecievedBall = function (t) {
        t === this.keeper ? this.setState(h.ATTACK_IDLE) : this.setState(h.DEFEND_IDLE)
    },
    c.prototype.onKeeperLostBall = function (t) {
        this.setState(h.DEFENDING)
    },
    c.prototype.enableShoot = function () {
        this.canShoot = !0
    },
    c.prototype.disableShoot = function () {
        this.canShoot = !1
    },
    c.prototype.enablePass = function () {
        this.canPass = !0
    },
    c.prototype.disablePass = function () {
        this.canPass = !1
    },
    c.prototype.enableTackle = function () {
        this.canTackle = !0
    },
    c.prototype.disableTackle = function () {
        this.canTackle = !1
    },
    c.prototype.enableSignal = function () {
        this.listenSignal = !0
    },
    c.prototype.disableSignal = function () {
        this.listenSignal = !1
    }, t.exports = c
}