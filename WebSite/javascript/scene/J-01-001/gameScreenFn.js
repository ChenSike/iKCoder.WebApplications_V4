function gameScreenFn(t, e, i) {
    var n;
    n = function (t, e, n) {
        var r = i(8),
            o = (i(12), i(16)),
            s = i(23),
            a = i(24),
            h = i(32),
            l = i(40),
            c = i(93),
            u = i(95),
            p = i(98),
            d = i(105),
            f = i(116),
            m = i(121),
            g = i(123),
            v = i(125),
            y = i(137),
            _ = i(140),
            x = i(142),
            b = i(144),
            w = i(145),
            S = i(146),
            T = i(147),
            M = i(148),
            E = i(152),
            A = i(153),
            C = i(154),
            L = i(155),
            R = i(156),
            P = i(157),
            O = i(124),
            I = i(49),
            D = i(158),
            B = i(51),
            k = i(166),
            F = i(167),
            N = i(168),
            U = i(170),
            G = i(173),
            z = i(175);
        s.game = new s;
        var GameScreen = function (t) {
            this.pitchCreater = b;
            this.onGameover = new o,
            this.wait = new S(s.game),
            s.game.start(),
            this.isGameover = !1,
            this.paused = !0,
            this.score = 0,
            this.counter = 0,
            this.view = new r.Container,
            this.world = new d.World;
            var e = {
                camera: new m(this),
                camera3d: new g(this)
            };
            this.world.install(new d.CrashWorld, "crash"),
            this.world.install(new d.PixiView(e), "view"),
            this.world.install(new f(e), "view3d"),
            this.particleSystem = new G,
            this.world.view3d.scene.add(this.particleSystem),
            this.arrow = new z,
            this.world.view3d.scene.add(this.arrow),
            this.world.overlay = new r.Container,
            this.view.addChild((new r.Graphics).beginFill(1044480).drawRect(0, 0, 2, 2)),
            this.view.addChild(this.world.view3d),
            this.world.crash.registerCollison(0, 1),
            this.world.crash.registerCollison(1, 1),
            this.world.crash.registerCollison(1, 4),
            this.world.game = this,
            this.balanceManager = new F(this),
            this.pitch = new b,
            this.world.add(this.pitch),
            this.goalLeft = new _,
            this.goalRight = new _((!0)),
            this.keeperLeft = new x,
            this.keeperRight = new x((!0)),
            this.ball = new y,
            this.teamLeft = new d.Group([new v((!1)), new v((!1)), new v((!1))]),
            this.teamRight = new d.Group([new v((!0)), new v((!0)), new v((!0))]),
            this.teamLeft.run(function (t) { t.setTeam(this) }, this.teamLeft),
            this.teamRight.run(function (t) { t.setTeam(this) }, this.teamRight),
            this.world.addGroup(this.teamLeft),
            this.world.addGroup(this.teamRight),
            this.speed = 1,
            this.endState = 0,
            this.setPositions(),
            this.world.add(this.goalLeft),
            this.world.add(this.goalRight),
            this.world.add(this.keeperRight),
            this.world.add(this.keeperLeft),
            this.world.add(this.ball),
            //add for draw position symbol,
            this.positionSymbols = [],
            this.createPositionSymbol();
            this.gameDetails = new T(this),
            this.teamManagerA = new M(this, this.teamLeft, this.teamRight),
            this.teamManagerA.setSide(!0),
            this.teamManagerA.human = !0,
            this.teamManagerB = new M(this, this.teamRight, this.teamLeft),
            this.teamManagerB.setSide(!1),
            this.keeperManagerRight = new E(this.keeperRight, (!1), this),
            this.keeperManagerLeft = new E(this.keeperLeft, (!0), this),
            this.powerupManager = new D,
            this.world.add(this.powerupManager),
            this.black = (new r.Graphics).beginFill(0).drawRect(0, 0, 100, 100),
            this.goalLeft.onGoalScored.add(this.onGoalScored, this),
            this.goalRight.onGoalScored.add(this.onGoalScored, this),
            this.scripts = {
                start: new A(this),
                goal: new C(this),
                "super": new R(this),
                end: new L(this)
            },
            this.hud = new p(this),
            this.world.view.interactiveChildren = !1,
            this.view.addChild(this.world.overlay),
            this.view.addChild(this.hud.party),
            this.view.addChild(this.black),
            _gSettings.positionCount <= 0 ? this.view.addChild(this.hud) : null,
            this.flash = new B,
            this.movieBorders = new k(1, 1, .05),
            this.timer = new P(60 * O.GAME.TIME, s.game),
            this.timer.onComplete.add(this.onTimeUp, this),
            this.black.alpha = 0,
            this.goalsA = 0,
            this.goalsB = 0,
            this.view.addChild(this.flash),
            this.teamManagerB.debug.position.x = 400,
            this.team1AI,
            this.superMove = new N,
            this.view.addChild(this.superMove),
            this.vignette = new r.Sprite.from(URL_HEADER.IMAGE + "game/vignette.png"),
            this.view.addChild(this.vignette),
            this.controller = a.instance.desktop ? new c(this) : new u(this),
            this.goldenGoal = !1,
            window.firstPlay && (this.tutorialManager = new U(this), this.view.addChild(this.tutorialManager))
        };
        GameScreen.constructor = GameScreen,
        GameScreen.prototype.setPositions = function () {
            var t = 1600,
                e = 900;
            this.pitchWidth = t,
            this.pitchHeight = e,
            this.pitch.view.width = t,
            this.pitch.view.height = e,
            this.setBounds(new r.Rectangle(0, 0, t, e)),
            this.ball.position.x = t / 2,
            this.ball.position.y = e / 2,
            this.goalLeft.position.x = -100,
            this.goalLeft.left = !0,
            this.goalLeft.position.y = e / 2,
            this.goalRight.position.x = t,
            this.goalRight.position.y = e / 2,
            this.keeperRight.position.x = t - 30,
            this.keeperRight.position.y = e / 2,
            this.keeperLeft.position.x = 30,
            this.keeperLeft.position.y = e / 2,
            this.teamLeft.run(function (e) {
                e.position.x = t / 2, e.position.y = 0
            }, this), this.teamRight.run(function (e) {
                e.position.x = t / 2, e.position.y = 0
            }, this)
        },
        GameScreen.prototype.onGoalScored = function (t) {
            this.powerupManager.clear(),
            this.world.view.camera.shake(),
            Math.random() < .5 ? h.sfx.play("crowd_goal_1") : h.sfx.play("crowd_goal_2"),
            t.left ? this.goalsB++ : this.goalsA++,
            this.goldenGoal ? this.finish() : this.scripts.goal.run(t.left),
            this.hud.updateScore();
        },
        GameScreen.prototype.reset = function (t) {
            window.firstPlay || (this.hud.scorePanel.alpha = 1),
            this.setPositions(),
            this.isGameover = !1,
            this.goldenGoal = !1,
            this.scripts.start.reset(),
            this.scripts.goal.reset(),
            this.scripts["super"].reset(),
            this.scripts.end.reset(),
            this.powerupManager.clear(),
            this.teamManagerA.setTeam(I.teamA),
            this.teamManagerB.setTeam(I.teamB),
            this.teamManagerA.resetPositions(!0, !1),
            this.teamManagerA.showAll(),
            this.teamManagerB.resetPositions(!1, !1),
            this.teamManagerB.showAll(),
            this.keeperManagerRight.show(),
            this.powerupManager.resume(),
            this.keeperLeft.show(),
            this.keeperRight.show(),
            this.goalLeft.enableGoal(),
            this.goalRight.enableGoal(),
            this.teamManagerA.constrainPlayer = !1,
            this.teamManagerA.enablePass(),
            this.teamManagerA.enableTackle(),
            this.teamManagerA.enableShoot(),
            this.counter = 0,
            this.score = 0,
            this.goalsA = 0,
            this.goalsB = 0,
            this.hud.reset(),
            this.hud.setData(I.countryID, I.opponentID),
            this.timer.reset(),
            window.firstPlay || this.scripts.start.run(!0, !0)
        },
        GameScreen.prototype.start = function (t) {
            this.reset(t),
            this.resume(),
            window.firstPlay ? (this.tutorialManager.start(), this.hud.scorePanel.alpha = 0) : this.hud.scorePanel.alpha = 1;
            if (_gSettings.hideAllTeams) {
                this.teamManagerA.hideAll();
                this.teamManagerB.hideAll();
            }

            if (_gSettings.enablePlay) {
                resetPlayBtn('R');
            }
        },
        GameScreen.prototype.pause = function () {
            this.paused || (l.volume = 1, l.play("menumusic2"), this.paused = !0, this.view.interactive = !1, s.game.stop(), s.game.remove(this.update, this))
        },
        GameScreen.prototype.resume = function () {
            this.paused && (l.volume = .5, l.play("applause_loop"), this.paused = !1, this.view.interactive = !0, s.game.start(), s.game.add(this.update, this, 1))
        },
        GameScreen.prototype.update = function () {
            window.firstPlay && this.tutorialManager.update(),
            s.game.speed += .3 * (.8 * this.speed - s.game.speed),
            this.counter += s.instance.deltaTime,
            this.world.crash.dt = s.game.speed,
            this.world.update(),
            this.world.view3d.camera.focusMode ? this.vignette.alpha += .05 * (1 - this.vignette.alpha) : this.vignette.alpha += .1 * (0 - this.vignette.alpha),
            this.balanceManager.update(),
            this.particleSystem.update(),
            this.arrow.update();
            this.ball.view3d;
            this.controller.update(),
            this.keeperManagerRight.update(),
            this.keeperManagerLeft.update(),
            this.hud.update();
            if (_gSettings.enablePlay) {
                this.teamManagerA.update(),
                this.teamManagerB.update();
            }
        },
        GameScreen.prototype.onTimeUp = function () {
            //this.goalsA === this.goalsB ? this.goldenGoal = !0 : (this.finish(), this.teamManagerA.disableShoot())
            if (!_gSettings.neverOver) {
                this.finish();
                this.teamManagerA.disableShoot();
            }
        },
        GameScreen.prototype.finish = function () {
            this.goldenGoal = !1,
            this.goalsA > this.goalsB ? this.endState = O.END_STATE.WIN : this.goalsA === this.goalsB ? this.endState = O.END_STATE.DRAW : this.endState = O.END_STATE.LOSE,
            this.scripts.end.run(this.endState);
        },
        GameScreen.prototype.gameover = function () {
            this.isGameover || (this.isGameover = !0, this.onGameover.dispatch())
        },
        GameScreen.prototype.setBounds = function (t) {
            var e = 200,
                i = new w(t.x - 100, 0, 100, t.height / 2 - e / 2),
                n = new w(t.x - 100, t.height / 2 + e / 2, 100, t.height / 2 - e / 2),
                r = new w(t.x - 200 + 20, (-100), 100, t.height + 200);
            r.net = !0;
            var o = new w(t.x + t.width, 0, 100, t.height / 2 - e / 2),
                s = new w(t.x + t.width, t.height / 2 + e / 2, 100, t.height / 2 + e / 2),
                a = new w(t.x + t.width + 100 - 20, (-100), 100, t.height + 200);
            a.net = !0;
            var h = new w(t.x - 100, t.y - 100, t.width + 200, 100),
                l = new w(t.x - 100, t.y + t.height, t.width + 200, 100);
            this.world.add(i), this.world.add(n), this.world.add(r), this.world.add(o), this.world.add(s), this.world.add(a), this.world.add(h), this.world.add(l)
        },
        GameScreen.prototype.resize = function (t, e) {
            this.hud.resize(t, e), this.controller.resize(t, e), this.world.view3d.resize(t, e), this.black.scale.set(t / 100, e / 100), this.flash.resize(t, e), this.movieBorders.resize(t, e), window.firstPlay && this.tutorialManager.resize(t, e), this.vignette.width = t, this.vignette.height = e, this.superMove.resize(t, e)
        },
        GameScreen.prototype.setBackground = function (bgImgPath) {
            if (typeof bgImgPath == 'undefined' && !bgImgPath) {
                _gSettings.background_game = "game/toon_pitch_full_1.jpg";
            } else {
                _gSettings.background_game = bgImgPath;
            }

            this.world.removeItem(this.pitch);
            this.pitch = new this.pitchCreater;
            this.world.add(this.pitch);
            for (var i = 0; i < _gSettings.positionCount; i++) {
                this.positionSymbols[i].updateTextColor();
            }
        },
        GameScreen.prototype.setAllPlayers = function () {
            this.teamManagerA.showAll();
            this.teamManagerB.showAll();
            var posObj = _gSettings.teamStartPosition;
            this.teamManagerA.team.children[0].position.set(posObj.A[0].x, posObj.A[0].y);
            this.teamManagerA.team.children[1].position.set(posObj.A[1].x, posObj.A[1].y);
            this.teamManagerA.team.children[2].position.set(posObj.A[2].x, posObj.A[2].y);
            this.teamManagerB.team.children[0].position.set(posObj.B[0].x, posObj.B[0].y);
            this.teamManagerB.team.children[1].position.set(posObj.B[1].x, posObj.B[1].y);
            this.teamManagerB.team.children[2].position.set(posObj.B[2].x, posObj.B[2].y);
        },
        GameScreen.prototype.createPositionSymbol = function () {
            if (_gSettings.positionCount > 0) {
                var coords = this.getRandomCoords(_gSettings.positionCount);
                for (var i = 0; i < _gSettings.positionCount; i++) {
                    var tmpSymbol = new positionSymbol(coords[i].x, coords[i].y, this.world.view3d.scene)
                    this.positionSymbols.push(tmpSymbol);
                    this.world.view3d.scene.add(tmpSymbol.mesh);
                }
            }
        },
        GameScreen.prototype.getRandomCoords = function (length) {
            var coords = [];
            var flag = true;
            var loopCount = 0;
            while (coords.length < 6) {
                flag = true;
                var x = Math.floor(Math.random() * 451 + 550);
                var y = Math.floor(Math.random() * 471 + 300);
                if (loopCount < 6000) {
                    for (var j = 0; j < coords.length; j++) {
                        loopCount++;
                        if (Math.abs(coords[j].x - x) < 40 && Math.abs(coords[j].y - y) < 40) {
                            flag = false;
                            break;
                        }
                    }
                }

                if (flag) {
                    coords.push({ x: x, y: y });
                }
            }

            return coords;
        },
        n.exports = GameScreen
    }.call(e, i, e, t), !(void 0 !== n && (t.exports = n))
}

var positionSymbol = function (x, y, scene) {
    this.scene = scene;
    this.text = '';
    this.mesh = new THREE.Group();
    this.textMesh = null;
    this.params = {
        x: x > 1000 ? 1000 : x < 500 ? 500 : x,
        y: y > 770 ? 770 : y < 300 ? 300 : y,
        r: 20,
        color: '#ffffff',
        textColor: 0xffff00,
        size: 10,
        height: 1,
        specular: 0xffff00
    };

    this.createText();
    this.mesh.position.x = this.params.x;
    this.mesh.position.y = this.params.y;
    this.mesh.position.z = 0;
    this.bodyMaterial = [new THREE.MeshBasicMaterial({ color: this.params.color, shading: THREE.FlatShading })];
    this.bodyGeometry = new THREE.CircleGeometry(this.params.r, 20, 0, Math.PI * 2);
    this.body = THREE.SceneUtils.createMultiMaterialObject(this.bodyGeometry, this.bodyMaterial);
    this.mesh.add(this.body);
}

positionSymbol.prototype.createText = function () {
    var _self = this;
    var tmpObj = new THREE.FontLoader().load('fonts/helvetiker_regular.typeface.json', function (font) {
        var tmpText = _self.params.x + ' , ' + _self.params.y
        var gem = new THREE.TextGeometry(tmpText, {
            size: _self.params.size,                       //字号大小，一般为大写字母的高度
            height: _self.params.height,                     //文字的厚度
            weight: 'normal',            //值为'normal'或'bold'，表示是否加粗
            font: font,                    //字体，默认是'helvetiker'，需对应引用的字体文件
            style: 'normal',              //值为'normal'或'italics'，表示是否斜体
            //bevelThickness: 1,         //倒角厚度
            //bevelSize: 1,                //倒角宽度
            curveSegments: 50,      //弧线分段数，使得文字的曲线更加光滑
            bevelEnabled: false,       //布尔值，是否使用倒角，意为在边缘处斜切
        });
        gem.center();
        //MeshPhongMaterial,FlatShading
        var mat = new THREE.MeshBasicMaterial({
            color: _self.params.textColor,
            //specular: _self.params.specular,
            //shininess: 0,
            shading: THREE.SmoothShading
        });
        _self.textMesh = new THREE.Mesh(gem, mat);
        _self.textMesh.castShadow = true;
        _self.textMesh.rotation.x = Math.PI / 180 * 50;
        _self.textMesh.position.z = 30;
        _self.mesh.add(_self.textMesh);
        _self.light = new THREE.DirectionalLight(0xffffff);
        _self.light.target = _self.textMesh;
        _self.light.position.set(_self.params.x, _self.params.y, 2000);
        _self.scene.add(_self.light);
    });
};

positionSymbol.prototype.updateTextColor = function () {
    this.textMesh.material.color.r = (_gSettings.background_game == "game/toon_pitch_full_1.jpg" ? 1 : 0);
    this.textMesh.material.color.g = (_gSettings.background_game == "game/toon_pitch_full_1.jpg" ? 1 : 0);
    this.textMesh.material.color.b = (_gSettings.background_game == "game/toon_pitch_full_1.jpg" ? 1 : 0);
};