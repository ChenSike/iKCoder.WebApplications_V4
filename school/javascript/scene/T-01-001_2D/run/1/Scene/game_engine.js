//全局变量、事件及重载
{
    window.addEventListener('resize', function () {
        resize();
    });

    window.onorientationchange = resize;
    PIXI.Texture.fromFrameId = PIXI.Texture.fromFrame;
    // Override
    PIXI.InteractionManager.prototype.onTouchStart = function (event) {
        var rect = this.interactionDOMElement.getBoundingClientRect();

        if (PIXI.AUTO_PREVENT_DEFAULT) event.preventDefault();

        var changedTouches = event.changedTouches;
        for (var i = 0; i < changedTouches.length; i++) {
            var touchEvent = changedTouches[i];

            var touchData = this.pool.pop();
            if (!touchData) touchData = new PIXI.InteractionData();

            touchData.originalEvent = event || window.event;

            this.touchs[touchEvent.identifier] = touchData;
            touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
            touchData.global.y = (touchEvent.clientY - rect.top) * (this.target.height / rect.height);

            if (navigator.isCocoonJS) {
                var h = this.interactionDOMElement.style.height;
                var w = this.interactionDOMElement.style.width;

                var heightRatio = parseInt(h.replace('px', '')) / GAME.height;
                var widthRatio = parseInt(w.replace('px', '')) / GAME.width;

                touchData.global.x = touchEvent.clientX / widthRatio;
                touchData.global.y = touchEvent.clientY / heightRatio;
            }

            var length = this.interactiveItems.length;

            for (var j = 0; j < length; j++) {
                var item = this.interactiveItems[j];

                if (item.touchstart || item.tap) {
                    item.__hit = this.hitTest(item, touchData);

                    if (item.__hit) {
                        if (item.touchstart) item.touchstart(touchData);
                        item.__isDown = true;
                        item.__touchData = touchData;

                        if (!item.interactiveChildren) break;
                    }
                }
            }
        }
    };
    //应用状态
    var GAME_MODE = {
        TITLE: 0,
        COUNT_DOWN: 1,
        PLAYING: 2,
        GAME_OVER: 3,
        INTRO: 4,
        PAUSED: 5
    };

    var _loadBackground = false;
    var _loadFloor = true;
    var _loadPlayer = false;
    var _loadProps = false;
    var _loadObstacle = false;
    var width = 800;
    var height = 600;
    var isAdding = false;
    var loader;
    var game;
    var mouseX = 0;
    var mouseY = 0;
    var ratio;
    var offsetX;
    var offsetY;
    var holder;
    var loadInterval = false;
    var loadCount = 0;
    var gameMode = 0;
    var countdown;
    var black;
    var interactive = true;
    var Device = new Fido.Device();
    var gameLoop = false;
    var thrustLoop = false;
    var thrusters = 0;
    var thrustersVolume = 0;
    var pauseButton = false;
    var pauseScreen = false;
    var resumeButton = false;
    var sound = false;
    var containerSize = { w: 0, h: 0 };
    var GAME = GAME || {};
    GAME.HIGH_MODE = true;
    GAME.camera = new PIXI.Point();
    GAME.height;
    GAME.bundleId = "www.ikcoder.com";
    GAME.newHighScore = false;
    var laserCount = 0;
}

//游戏角色
{
    GAME.Steve = function () {
        this.position = new PIXI.Point();

        this.runningFrames = [
            PIXI.Texture.fromFrame("characterRUNscaled_01.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_02.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_03.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_04.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_05.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_06.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_07.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_08.png"),
            PIXI.Texture.fromFrame("characterRUNscaled_09.png")
        ];

        this.flyingFrames = [
            PIXI.Texture.fromFrame("characterFLATflying_01.png"),
            PIXI.Texture.fromFrame("characterFLATflying_02.png"),
            PIXI.Texture.fromFrame("characterFLATflying_03.png")
        ];

        this.crashFrames = [
            PIXI.Texture.fromFrame("characterFALLscaled3.png"),
            PIXI.Texture.fromFrame("characterFALLscaled1.png"),
            PIXI.Texture.fromFrame("characterFALLscaled3.png")
        ];

        this.view = new PIXI.MovieClip(this.flyingFrames);
        this.view.animationSpeed = 0.23;

        this.view.anchor.x = 0.5;
        this.view.anchor.y = 0.5;

        this.position.y = 477;
        this.ground = 477;
        this.gravity = 0.3;

        this.baseSpeed = 8;
        this.speed = new PIXI.Point(this.baseSpeed, 0);

        this.activeCount = 0;
        this.isFlying = false;
        this.accel = 0;

        this.width = 26
        this.height = 37;

        this.onGround = false;
        this.rotationSpeed = 0;
        this.joyRiding = false;
        this.level = 1;
        this.realAnimationSpeed = 0.23;

        this.volume = 0.3;
    }

    GAME.Steve.constructor = GAME.Steve;

    GAME.Steve.prototype.update = function () {
        if (this.isDead) {
            this.updateDieing();
        } else {
            this.updateRunning();
        }
    }

    GAME.Steve.prototype.joyrideMode = function () {
        this.joyRiding = true;
        TweenLite.to(this.speed, 0.3, {
            x: 20,
            ease: Cubic.easeIn
        });
        this.realAnimationSpeed = 0.23 * 4
    }

    GAME.Steve.prototype.normalMode = function () {
        this.joyRiding = false;
        TweenLite.to(this.speed, 0.6, {
            x: this.baseSpeed,
            ease: Cubic.easeOut
        });
        this.realAnimationSpeed = 0.23;
    }

    GAME.Steve.prototype.updateRunning = function () {
        this.view.animationSpeed = this.realAnimationSpeed * GAME.time.DELTA_TIME * this.level;
        if (this.isActive) {
            this.isFlying = true;
        }

        var oldSpeed = this.speed.y;

        if (this.isFlying) {
            this.accel = 0.6;
            this.speed.y -= this.accel * GAME.time.DELTA_TIME;
            if (this.speed.y > 0) this.speed.y -= 0.3 * GAME.time.DELTA_TIME;
        }
        else {
            if (this.speed.y < 0) this.speed.y += 0.05 * GAME.time.DELTA_TIME;
        }

        this.speed.y += this.gravity * GAME.time.DELTA_TIME;

        if (this.speed.y > 8) this.speed.y = 8;
        if (this.speed.y < -9) this.speed.y = -9;

        var accel = this.speed.y - oldSpeed;
        this.position.x += this.speed.x * GAME.time.DELTA_TIME * this.level;
        this.position.y += this.speed.y * GAME.time.DELTA_TIME;

        if (this.onGround !== this.onGroundCache) {
            this.onGroundCache = this.onGround;
            if (this.onGround) {
                this.view.textures = this.runningFrames;
            } else {
                this.view.textures = this.flyingFrames;
            }
        }

        GAME.camera.x = this.position.x - 100;

        this.view.position.x = this.position.x - GAME.camera.x;
        this.view.position.y = this.position.y - GAME.camera.y;
        this.view.rotation += (this.speed.y * 0.05 - this.view.rotation) * 0.1;
    }

    GAME.Steve.prototype.updateDieing = function () {
        this.speed.x *= 0.999;

        if (this.onGround) this.speed.y *= 0.99;

        this.speed.y += 0.1;
        this.accel += (0 - this.accel) * 0.1 * GAME.time.DELTA_TIME;

        this.speed.y += this.gravity * GAME.time.DELTA_TIME;;

        this.position.x += this.speed.x * GAME.time.DELTA_TIME;;
        this.position.y += this.speed.y * GAME.time.DELTA_TIME;;

        GAME.camera.x = this.position.x - 100;

        this.view.position.x = this.position.x - GAME.camera.x;
        this.view.position.y = this.position.y - GAME.camera.y;

        if (this.speed.x < 5) {
            this.view.rotation += this.rotationSpeed * (this.speed.x / 5) * GAME.time.DELTA_TIME;
        }
        else {
            this.view.rotation += this.rotationSpeed * GAME.time.DELTA_TIME;
        }
    }

    GAME.Steve.prototype.jump = function () {
        if (this.isDead) {
            if (this.speed.x < 5) {
                this.isDead = false
                this.speed.x = 10;
            }
        }

        if (this.position.y !== this.ground) {
            this.isFlying = true;
        }
        else {
            this.isActive = true;
            this.activeCount = 0;
        }
    }

    GAME.Steve.prototype.die = function () {
        if (this.isDead) return;

        TweenLite.to(GAME.time, 0.5, {
            speed: 0.1,
            ease: Cubic.easeOut,
            onComplete: function () {
                TweenLite.to(GAME.time, 2, {
                    speed: 1,
                    delay: 1
                });
            }
        });

        this.isDead = true;
        this.bounce = 0;
        this.speed.x = 15;
        this.speed.y = -15;
        this.rotationSpeed = 0.3;
        this.view.stop();
    }

    GAME.Steve.prototype.boil = function () {
        if (this.isDead) return;
        this.isDead = true;
    }

    GAME.Steve.prototype.fall = function () {
        this.isActive = false;
        this.isFlying = false;
    }

    GAME.Steve.prototype.isAirbourne = function () { }

    GAME.Steve.prototype.stop = function () {
        this.view.stop();
    }

    GAME.Steve.prototype.resume = function () {
        this.view.play();
    }
}

//片段管理
{
    GAME.SegmentManager = function (engine) {
        this.engine = engine;

        this.sections = data;
        this.count = 0;
        this.currentSegment = data[0]
        this.startSegment = { length: 1135 * 2, floor: [0, 1135], blocks: [], coins: [] },
        this.chillMode = true;
        this.last = 0;
        this.position = 0;
    }

    GAME.SegmentManager.constructor = GAME.SegmentManager;

    GAME.SegmentManager.prototype.reset = function (dontReset) {
        if (dontReset) this.count = 0;
        this.currentSegment = this.startSegment;
        this.currentSegment.start = -200;

        for (var i = 0; i < this.currentSegment.floor.length; i++) {
            this.engine.floorManager.addFloor(this.currentSegment.start + this.currentSegment.floor[i]);
        }
    }

    GAME.SegmentManager.prototype.update = function () {
        this.position = GAME.camera.x + width * 2;
        var relativePosition = this.position - this.currentSegment.start;
        if (relativePosition > this.currentSegment.length) {
            if (this.engine.joyrideMode) {
                var nextSegment = this.startSegment
                nextSegment.start = this.currentSegment.start + this.currentSegment.length;
                this.currentSegment = nextSegment;
                for (var i = 0; i < this.currentSegment.floor.length; i++) {
                    this.engine.floorManager.addFloor(this.currentSegment.start + this.currentSegment.floor[i]);
                }

                return;
            }

            var nextSegment = this.sections[this.count % this.sections.length];
            nextSegment.start = this.currentSegment.start + this.currentSegment.length;
            this.currentSegment = nextSegment;
            for (var i = 0; i < this.currentSegment.floor.length; i++) {
                this.engine.floorManager.addFloor(this.currentSegment.start + this.currentSegment.floor[i]);
            }

            var blocks = this.currentSegment.blocks;
            var length = blocks.length / 2;
            for (var i = 0; i < length; i++) {
                this.engine.enemyManager.addEnemy(this.currentSegment.start + blocks[i * 2], blocks[(i * 2) + 1]);
            }

            var pickups = this.currentSegment.coins;
            var length = pickups.length / 2;
            for (var i = 0; i < length; i++) {
                this.engine.pickupManager.addPickup(this.currentSegment.start + pickups[i * 2], pickups[(i * 2) + 1]);
            }

            this.count++;

        }
    }
}

//地板管理
{
    GAME.FloorManager = function (engine) {
        this.engine = engine;
        this.count = 0;
        this.floors = [];
        this.floorPool = new GAME.GameObjectPool(GAME.Floor);
    }

    GAME.FloorManager.constructor = GAME.FloorManager;

    GAME.FloorManager.prototype.update = function () {
        for (var i = 0; i < this.floors.length; i++) {
            var floor = this.floors[i];
            floor.position.x = floor.x - GAME.camera.x - 16;

            if (floor.position.x < -1135 - GAME.xOffset - 16) {
                this.floorPool.returnObject(floor)
                this.floors.splice(i, 1);
                i--;
                this.engine.view.gameFront.removeChild(floor);
            }
        }
    }

    GAME.FloorManager.prototype.addFloor = function (floorData) {
        if (_loadFloor) {
            var floor = this.floorPool.getObject();
            floor.x = floorData;
            floor.position.y = 640 - 158;
            this.engine.view.gameFront.addChild(floor);
            this.floors.push(floor);
        }
    }

    GAME.FloorManager.prototype.destroyAll = function () {
        for (var i = 0; i < this.floors.length; i++) {
            var floor = this.floors[i];
            this.floorPool.returnObject(floor);
            this.engine.view.gameFront.removeChild(floor);
        }

        this.floors = [];
    }

    GAME.Floor = function () {
        PIXI.Sprite.call(this, PIXI.Texture.fromFrameId("00_forest_floor.png"));
    }

    GAME.Floor.constructor = PIXI.Floor;

    GAME.Floor.prototype = Object.create(PIXI.Sprite.prototype);
}

//道具管理
{
    GAME.PickupManager = function (engine) {
        this.engine = engine;

        this.pickups = [];

        this.pickupPool = new GAME.GameObjectPool(GAME.Pickup);

        this.spawnCount = 0;

        this.pos = 0
    }

    GAME.PickupManager.constructor = GAME.PickupManager;

    GAME.PickupManager.prototype.update = function () {
        if (this.engine.joyrideMode) {
            this.spawnCount += GAME.time.DELTA_TIME;
            if (this.spawnCount > 5) {
                this.pos += 0.15;
                this.spawnCount = 0;
                this.addPickup(GAME.camera.x + GAME.width, 280 + Math.sin(this.pos) * 180)
            }
        }

        for (var i = 0; i < this.pickups.length; i++) {
            var pickup = this.pickups[i]
            pickup.update();
            if (pickup.isPickedUp) {
                pickup.ratio += (1 - pickup.ratio) * 0.3 * GAME.time.DELTA_TIME;
                if (pickup.ratio > 0.99) {
                    this.pickupPool.returnObject(pickup);
                    this.pickups.splice(i, 1);
                    this.engine.view.game.removeChild(pickup.view);
                    i--;
                }
            } else {
                if (pickup.view.position.x < -100 - GAME.xOffset) {
                    this.engine.view.game.removeChild(pickup.view);
                    this.pickupPool.returnObject(pickup);
                    this.pickups.splice(i, 1);
                    i--;
                }
            }
        }
    }

    GAME.PickupManager.prototype.addPickup = function (x, y) {
        if (_loadProps) {
            var pickup = this.pickupPool.getObject();
            pickup.position.x = x
            pickup.position.y = y

            this.pickups.push(pickup);
            this.engine.view.game.addChild(pickup.view);
        }
    }

    GAME.PickupManager.prototype.removePickup = function (index) {
        var pickup = this.pickups[index];
        pickup.isPickedUp = true;
        pickup.steve = this.engine.steve;
        pickup.pickupPosition = { x: pickup.position.x, y: pickup.position.y };
        pickup.ratio = 0;
    }

    GAME.PickupManager.prototype.destroyAll = function () {
        for (var i = 0; i < this.pickups.length; i++) {
            var pickup = this.pickups[i]
            this.pickupPool.returnObject(pickup);
            this.engine.view.game.removeChild(pickup.view);
        }

        this.pickups = [];
    }

    GAME.PickupManager.prototype.destroyAllOffScreen = function () {
        for (var i = 0; i < this.pickups.length; i++) {
            var pickup = this.pickups[i];

            if (pickup.x > GAME.camera.x + GAME.width) {
                this.pickupPool.returnObject(pickup);
                this.engine.view.game.removeChild(pickup.view);
                this.pickups.splice(i, 1);
                i--;
            }
        }

    }

    GAME.EnemyManager = function (engine) {
        this.engine = engine;
        this.enemies = [];
        this.enemyPool = new GAME.GameObjectPool(GAME.Enemy);
        this.spawnCount = 0;
    }
}

//障碍管理
{
    GAME.EnemyManager.constructor = GAME.EnemyManager;

    GAME.EnemyManager.prototype.update = function () {
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i]
            enemy.update();

            if (enemy.view.position.x < -100 - GAME.xOffset && !this.engine.steve.isDead) {
                this.enemyPool.returnObject(enemy);
                this.enemies.splice(i, 1);

                this.engine.view.gameFront.removeChild(enemy.view);
                i--;
            }
        }
    }

    GAME.EnemyManager.prototype.addEnemy = function (x, y) {
        if (_loadObstacle) {
            var enemy = this.enemyPool.getObject();
            enemy.position.x = x
            enemy.position.y = y
            this.enemies.push(enemy);
            this.engine.view.gameFront.addChild(enemy.view);
        }
    }

    GAME.EnemyManager.prototype.destroyAll = function () {
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            enemy.reset();
            this.enemyPool.returnObject(enemy);
            this.engine.view.gameFront.removeChild(enemy.view);
        }

        this.enemies = [];
    }

    GAME.EnemyManager.prototype.destroyAllOffScreen = function () {
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];

            if (enemy.x > GAME.camera.x + GAME.width) {
                this.enemyPool.returnObject(enemy);
                this.engine.view.game.removeChild(enemy.view);
                this.enemies.splice(i, 1);
                i--;
            }
        }
    }
}

//碰撞管理
{
    GAME.CollisionManager = function (engine) {
        this.engine = engine;
    }

    GAME.CollisionManager.constructor = GAME.CollisionManager;

    GAME.CollisionManager.prototype.update = function () {
        if (_loadPlayer) {
            this.playerVsBlock();
            this.playerVsPickup();
            this.playerVsFloor();
        }
    }

    GAME.CollisionManager.prototype.playerVsBlock = function () {
        var enemies = this.engine.enemyManager.enemies;
        var steve = this.engine.steve;

        for (var i = 0; i < enemies.length; i++) {
            var enemy = enemies[i]

            var xdist = enemy.position.x - steve.position.x;
            if (xdist > -enemy.width / 2 && xdist < enemy.width / 2) {
                var ydist = enemy.position.y - steve.position.y;

                if (ydist > -enemy.height / 2 - 20 && ydist < enemy.height / 2) {
                    if (!steve.joyRiding) {
                        steve.die();
                        this.engine.gameover();
                        enemy.hit();
                    }
                }
            }
        }
    }

    GAME.CollisionManager.prototype.playerVsPickup = function () {

        var pickups = this.engine.pickupManager.pickups;
        var steve = this.engine.steve;

        for (var i = 0; i < pickups.length; i++) {
            var pickup = pickups[i]
            if (pickup.isPickedUp) continue;

            var xdist = pickup.position.x - steve.position.x;
            if (xdist > -pickup.width / 2 && xdist < pickup.width / 2) {
                var ydist = pickup.position.y - steve.position.y;

                if (ydist > -pickup.height / 2 && ydist < pickup.height / 2) {
                    this.engine.pickupManager.removePickup(i);
                    this.engine.pickup();
                }
            }
        }
    }

    GAME.CollisionManager.prototype.playerVsFloor = function () {
        var floors = this.engine.floorManager.floors;
        var steve = this.engine.steve;

        var max = floors.length;
        steve.onGround = false;

        if (steve.position.y > 610) {
            if (this.engine.isPlaying) {
                steve.boil();
                this.engine.view.doSplash();
                this.engine.gameover();
            }
            else {
                steve.speed.x *= 0.95;

                if (!interactive) {
                    showGameover();
                    interactive = true;
                }

                if (steve.bounce === 0) {
                    steve.bounce++;
                    steve.boil();
                    this.engine.view.doSplash();
                }

                return;
            }
        }

        for (var i = 0; i < max; i++) {
            var floor = floors[i];
            var xdist = floor.x - steve.position.x + 1135;

            if (steve.position.y > 477) {
                if (xdist > 0 && xdist < 1135) {
                    if (steve.isDead) {
                        steve.bounce++;

                        if (steve.bounce > 2) {
                            return;
                        }
                        steve.view.setTexture(steve.crashFrames[steve.bounce])

                        steve.speed.y *= -0.7;
                        steve.speed.x *= 0.8;

                        if (steve.rotationSpeed > 0) {
                            steve.rotationSpeed = Math.random() * -0.3;
                        }
                        else if (steve.rotationSpeed === 0) {
                            steve.rotationSpeed = Math.random() * 0.3;
                        }
                        else {
                            steve.rotationSpeed = 0;
                        }
                    }
                    else {
                        steve.speed.y = -0.3;
                    }

                    if (!steve.isFlying) {
                        steve.position.y = 478;
                        steve.onGround = true;

                    }
                }
            }
        }

        if (steve.position.y < 0) {
            steve.position.y = 0;
            steve.speed.y *= 0;
        }
    }
}

//视图
{
    GAME.RprView = function (engine) {
        this.engine = engine;
        this.renderer = PIXI.autoDetectRenderer(600, 800);
        GAME.HIGH_MODE = (this.renderer instanceof PIXI.WebGLRenderer);
        this.stage = new PIXI.Stage();
        this.container = new PIXI.DisplayObjectContainer();
        this.container.hitArea = this.stage.hitArea;
        this.container.interactive = true;
        this.hud = new PIXI.DisplayObjectContainer();
        this.game = new PIXI.DisplayObjectContainer();
        this.gameFront = new PIXI.DisplayObjectContainer();
        this.container.addChild(this.game);
        this.container.addChild(this.gameFront);
        this.stage.addChild(this.container);
        this.stage.addChild(this.hud);
        this.normalBackground = new GAME.Background(this.gameFront);
        this.joyBackground = new GAME.JoyBackground();
        this.lava = new GAME.Lava(this.gameFront);
        this.powerBar = new GAME.PowerBar();
        this.score = new GAME.Score();
        this.bestScore = new GAME.BestScore();
        this.background = this.normalBackground;
        this.score.position.x = 300;
        if (_loadBackground) {
            this.game.addChild(this.background);
        }

        this.hud.addChild(this.powerBar);
        this.hud.addChild(this.score);
        this.hud.addChild(this.bestScore);
        this.trail = new GAME.SteveTrail(this.game);
        this.trail2 = new GAME.SteveTrailFire(this.game);
        this.powerBar.alpha = 0;
        this.score.alpha = 0;
        this.bestScore.alpha = 0;
        this.count = 0;
        this.zoom = 1;
        this.white = PIXI.Sprite.fromImage("image/CoursewareDemo/whiteSquare.jpg");
        GAME.xOffset = this.container.position.x;
        this.dust = new GAME.PixiDust();
        this.container.addChild(this.dust);
        this.splash = new GAME.Splash();
        this.splash.position.y = 300;
        this.splash.position.x = 300;
        this.game.addChild(this.splash);
    }

    GAME.RprView.constructor = GAME.RprView;

    GAME.RprView.prototype.showHud = function () {
        var start =
        {
            x: GAME.width + 300,
            y: 0
        };

        this.score.alpha = 1;
        this.score.position.x = start.x;
        TweenLite.to(this.score.position, 1, {
            x: GAME.width - 495 - 20,
            ease: Elastic.easeOut
        });

        this.bestScore.alpha = 1;
        this.bestScore.position.x = start.x;
        this.bestScore.position.y -= 14;
        TweenLite.to(this.bestScore.position, 1, {
            x: GAME.width - 20,
            ease: Elastic.easeOut
        });

        this.powerBar.alpha = 1;
        this.powerBar.position.x = GAME.width;
        TweenLite.to(this.powerBar.position, 1, {
            x: GAME.width - 495,
            ease: Elastic.easeOut,
            delay: 0.3
        });
    }

    GAME.RprView.prototype.hideHud = function () {

    }

    GAME.RprView.prototype.update = function () {
        this.count += 0.01;

        if (!GAME.lowMode) {
            var ratio = (this.zoom - 1);
            var position = -GAME.width / 2
            var position2 = -this.engine.steve.view.position.x;
            var inter = position + (position2 - position) * ratio;

            this.container.position.x = inter * this.zoom;
            this.container.position.y = -this.engine.steve.view.position.y * this.zoom;

            this.container.position.x += GAME.width / 2;
            this.container.position.y += GAME.height / 2;

            GAME.xOffset = this.container.position.x;

            if (this.container.position.y > 0) this.container.position.y = 0;
            var yMax = -GAME.height * this.zoom;
            yMax += GAME.height;

            if (this.container.position.y < yMax) this.container.position.y = yMax;

            this.container.scale.x = this.zoom;
            this.container.scale.y = this.zoom;
        }

        this.trail.target = this.engine.steve;
        this.trail2.target = this.engine.steve;

        this.trail.update();
        this.trail2.update();
        this.dust.update();

        this.lava.setPosition(GAME.camera.x + 4000);
        this.bestScore.update();
        this.score.setScore(Math.round(this.engine.score));
        this.powerBar.bar.scale.x = ((this.engine.pickupCount / (50 * this.engine.bulletMult)) * (248 / 252))
        this.renderer.render(this.stage);
    }

    GAME.RprView.prototype.joyrideMode = function () {
        this.game.removeChild(this.background);
        this.background = this.joyBackground;
        this.game.addChildAt(this.background, 0);
        this.stage.addChild(this.white);
        this.white.alpha = 1;

        TweenLite.to(this.white, 0.7, {
            alpha: 0,
            ease: Sine.easeOut
        });
    }

    GAME.RprView.prototype.doSplash = function () {
        this.splash.splash(this.engine.steve.position);
    }

    GAME.RprView.prototype.normalMode = function () {
        this.game.removeChild(this.background);
        this.background = this.normalBackground;
        this.game.addChildAt(this.background, 0);
        this.stage.addChild(this.white)
        this.white.alpha = 1;

        TweenLite.to(this.white, 0.5, {
            alpha: 0,
            ease: Sine.easeOut
        });
    }

    GAME.RprView.prototype.resize = function (w, h) {
        GAME.width = w;
        GAME.height = h;

        this.renderer.resize(w, h);
        this.background.width = w;

        this.bestScore.position.x = w - 20;
        this.bestScore.position.y = 100;

        this.score.position.x = w - 495 - 20;
        this.score.position.y = 12;

        this.white.scale.x = w / 16;
        this.white.scale.y = h / 16;

        this.powerBar.position.x = w - 495;
        this.powerBar.position.y = 12;
    }
}

//引擎
{
    GAME.RprEngine = function () {
        this.onGameover;

        this.steve = new GAME.Steve();
        this.view = new GAME.RprView(this);
        this.segmentManager = new GAME.SegmentManager(this);
        this.enemyManager = new GAME.EnemyManager(this);
        this.pickupManager = new GAME.PickupManager(this);
        this.floorManager = new GAME.FloorManager(this);
        this.collisionManager = new GAME.CollisionManager(this);
        this.LocalStorage = new Fido.LocalStorage(GAME.bundleId);

        this.steve.view.visible = false;

        this.bulletMult = 1;
        this.pickupCount = 0;
        this.score = 0;
        this.joyrideMode = false;
        this.joyrideCountdown = 0;
        this.isPlaying = false;
        this.levelCount = 0;
        this.gameReallyOver = false;
        this.isDying = false;
        if (_loadPlayer) {
            this.view.game.addChild(this.steve.view);
        }
    }

    GAME.RprEngine.prototype.start = function () {
        this.segmentManager.reset();
        this.enemyManager.destroyAll();
        this.pickupManager.destroyAll();
        this.isPlaying = true;
        this.gameReallyOver = false;
        this.score = 0;
        this.steve.level = 1;
        this.steve.position.y = 477;
        this.steve.speed.y = 0;
        this.steve.speed.x = this.steve.baseSpeed;
        this.steve.view.rotation = 0;
        this.steve.isFlying = false;
        this.steve.isDead = false;
        this.steve.view.play()
        this.steve.view.visible = true;
        this.segmentManager.chillMode = false;
        this.bulletMult = 1;

    }

    GAME.RprEngine.prototype.update = function () {
        GAME.time.update();
        var targetCamY = 0;
        if (targetCamY > 0) {
            targetCamY = 0;
        }

        if (targetCamY < -70) {
            targetCamY = -70;
        }

        GAME.camera.y = targetCamY;
        if (gameMode !== GAME_MODE.PAUSED) {
            //游戏角色绘制
            this.steve.update();
            //碰撞检测
            this.collisionManager.update();
            //背景分段绘制
            this.segmentManager.update();
            //地板绘制
            this.floorManager.update();
            //障碍物绘制
            this.enemyManager.update();
            //道具绘制
            this.pickupManager.update();

            if (this.joyrideMode) {
                this.joyrideCountdown -= GAME.time.DELTA_TIME;
                if (this.joyrideCountdown <= 0) {
                    this.joyrideComplete();
                }
            }

            this.levelCount += GAME.time.DELTA_TIME;
            if (this.levelCount > (60 * 60)) {
                this.levelCount = 0;
                this.steve.level += 0.05;
                GAME.time.speed += 0.05;
            }
        }
        else {
            if (this.joyrideMode) {
                this.joyrideCountdown += GAME.time.DELTA_TIME;
            }
        }

        this.view.update();
    }

    GAME.RprEngine.prototype.reset = function () {
        this.enemyManager.destroyAll();
        this.floorManager.destroyAll();

        this.segmentManager.reset();
        this.view.zoom = 1;
        this.pickupCount = 0;
        this.levelCount = 0;
        this.steve.level = 1;

        this.view.game.addChild(this.steve.view);
    }

    GAME.RprEngine.prototype.joyrideComplete = function () {
        this.joyrideMode = false;
        this.pickupCount = 0;
        this.bulletMult += 0.3;
        this.view.normalMode();
        this.steve.normalMode();
        this.enemyManager.destroyAll();
    }

    GAME.RprEngine.prototype.gameover = function () {
        this.isPlaying = false;
        this.isDying = true;
        this.segmentManager.chillMode = true;

        var nHighscore = this.LocalStorage.get('highscore');
        if (!nHighscore || this.score > nHighscore) {
            this.LocalStorage.store('highscore', this.score);
            GAME.newHighscore = true;
        }

        this.onGameover();

        this.view.game.addChild(this.steve.view);

        TweenLite.to(this.view, 0.5, {
            zoom: 2,
            ease: Cubic.easeOut
        });
    }

    GAME.RprEngine.prototype.gameoverReal = function () {
        this.gameReallyOver = true;
        this.isDying = false;
        this.onGameoverReal();
    }

    GAME.RprEngine.prototype.pickup = function () {
        if (this.steve.isDead) {
            return;
        }

        this.score += 10;
        this.view.score.jump();
        this.pickupCount++;
        if (this.pickupCount >= 50 * this.bulletMult && !this.steve.isDead) {
            this.pickupCount = 0;
            this.joyrideMode = true;
            this.joyrideCountdown = 60 * 10;
            this.view.joyrideMode();
            this.steve.joyrideMode();
            this.steve.position.x = 0;
            GAME.camera.x = game.steve.position.x - 100;
            this.enemyManager.destroyAll();
            this.pickupManager.destroyAll();
            this.floorManager.destroyAll();
            this.segmentManager.reset();
        }
    }
}

//计时器
{
    Time = function () {
        this.DELTA_TIME = 1;
        this.lastTime = Date.now();
        this.speed = 1;
    }

    Time.constructor = Time;

    Time.prototype.update = function () {
        var time = Date.now();
        var currentTime = time;
        var passedTime = currentTime - this.lastTime;

        this.DELTA_TIME = ((passedTime) * 0.06);
        this.DELTA_TIME *= this.speed;

        if (this.DELTA_TIME > 2.3) this.DELTA_TIME = 2.3;

        this.lastTime = currentTime;
    }

    GAME.time = new Time();
}

//全局函数
{
    /*
    全局入口
    */
    function onReady(conntainerWidth, containerHeight) {
        containerSize.w = conntainerWidth;
        containerSize.h = containerHeight;
        GAME.lowMode = false;
        interactive = false;
        document.body.scroll = "no";
        //创建资源加载器
        loader = new PIXI.AssetLoader([
            "image/CoursewareDemo/stretched_hyper_tile.jpg",
            "image/CoursewareDemo/SplashAssets.json",
            "image/CoursewareDemo/WorldAssets-hd.json",
            "image/CoursewareDemo/HudAssets-hd.json",
            "image/CoursewareDemo/PixiAssets-hd.json",
            "image/CoursewareDemo/iP4_BGtile.jpg",
            "image/CoursewareDemo/blackSquare.jpg",
            "image/CoursewareDemo/hud/pausedPanel.png",
            "image/CoursewareDemo/hud/pixieRevised_controls.png",
            "image/CoursewareDemo/hud/ContinuePlay.png",
            "image/CoursewareDemo/hud/RestartPlay.png",
            "image/CoursewareDemo/hud/pause.png",
            "image/CoursewareDemo/hud/PersonalBest.png"
        ]);
        //给加载器添加事件, 当全部资源加载完成后,初始化环境
        loader.addEventListener('onComplete', function (event) {
            PIXI.Texture.fromFrameId = PIXI.Texture.fromFrame;
            init();
            resize();
            clearInterval(loadInterval);
        });
        //资源加载器开始加载资源
        loader.load();
        resize();
    }
    /*
    响应鼠标按下或者点击触摸屏
    */
    function onTap(event) {
        event.originalEvent.preventDefault();
        //如果没有点击到按钮
        if (event.target.type !== 'button') {
            if (!interactive) {
                return;
            }
            if (gameMode === GAME_MODE.INTRO) {
                //当状态为初始化阶段
                interactive = false;
                gameMode = GAME_MODE.TITLE;
                onIntroFaded();
            } else if (gameMode === GAME_MODE.TITLE) {
                //当状态为初始化完毕
                interactive = false;
                game.start();
                gameMode = GAME_MODE.COUNT_DOWN;
                if (black) {
                    TweenLite.to(black, 0.2, {
                        alpha: 0
                    });
                }

                game.view.showHud();
                game.view.hud.removeChild(black);
                countdown.startCountDown(onCountdownComplete);
            } else if (gameMode === GAME_MODE.GAME_OVER) {
                //当状态为结束
                interactive = false;
                game.view.stage.addChild(black);
                TweenLite.to(black, 0.3, {
                    alpha: 1,
                    onComplete: function () {
                        game.steve.normalMode();
                        game.joyrideComplete();

                        game.steve.position.x = 0;
                        GAME.camera.x = game.steve.position.x - 100;
                        game.reset();
                        gameMode = GAME_MODE.COUNT_DOWN;

                        TweenLite.killTweensOf(GAME.camera);
                        GAME.camera.zoom = 1;

                        TweenLite.to(black, 0.3, {
                            alpha: 0,
                            onComplete: function () {
                                game.start();
                                countdown.startCountDown(onCountdownComplete);
                            }
                        });
                    }
                });
            } else {
                thrusters = true;
                if (game.isPlaying) game.steve.jump();
            }
        }
    }
    /*
    初始化环境
    */
    function init() {
        gameMode = GAME_MODE.INTRO;
        interactive = false;
        //game是应用中的主体对象，所有对象全部从此引用
        game = new GAME.RprEngine();
        //将view添加到document中
        document.getElementById('game_container').appendChild(game.view.renderer.view);
        game.view.renderer.view.style.position = "absolute";
        game.view.renderer.view.style.left = "0px";
        game.view.renderer.view.style.top = "0px";
        game.view.renderer.view.webkitImageSmoothingEnabled = false;
        //开始绘制动画
        requestAnimFrame(update);
        game.onGameover = onGameover;
        black = new PIXI.Sprite.fromImage("image/CoursewareDemo/blackSquare.jpg");
        this.game.view.hud.addChild(black);
        var pressStart = PIXI.Sprite.fromFrame("spaceStart.png");
        pressStart.anchor.x = 0.5;
        pressStart.position.y = 200;
        onIntroFaded();
        //倒计时面板
        countdown = new GAME.Countdown();
        this.game.view.hud.addChild(countdown);
        //暂停按钮
        pauseButton = PIXI.Sprite.fromFrame("image/CoursewareDemo/hud/pause.png");
        pauseButton.interactive = true;
        pauseButton.anchor.x = 0.5;
        pauseButton.anchor.y = 0.5;
        pauseButton.alpha = 0;
        pauseButton.visible = false;
        pauseButton.type = "button";
        //暂停面板
        pauseScreen = PIXI.Sprite.fromImage("image/CoursewareDemo/hud/pausedPanel.png");
        pauseScreen.anchor.x = 0.5;
        pauseScreen.anchor.y = 0.5;
        pauseScreen.scale.x = 1.5;
        pauseScreen.scale.y = 1.5;
        pauseScreen.alpha = 0;
        pauseScreen.visible = false;
        //恢复按钮
        resumeButton = PIXI.Sprite.fromImage("image/CoursewareDemo/hud/ContinuePlay.png");
        resumeButton.anchor.x = 0.5;
        resumeButton.anchor.y = 0.5;
        resumeButton.scale.x = 0;
        resumeButton.scale.y = 0;
        resumeButton.alpha = 0;
        resumeButton.interactive = true;
        resumeButton.touchstart = resumeButton.mousedown = function () {
            onResumePressed();
        }
        this.game.view.stage.addChild(pauseScreen);
        this.game.view.stage.addChild(resumeButton);
        this.game.view.stage.addChild(pauseButton);
        pauseButton.mousedown = pauseButton.touchstart = function (event) {
            event.originalEvent.preventDefault();
            onPaused();
        }
        //添加 鼠标按下/在触摸屏上开始触摸 的事件
        this.game.view.container.mousedown = this.game.view.container.touchstart = function (event) {
            onTap(event);
        }
        //添加 鼠标弹起/在触摸屏上结束触摸 的事件
        this.game.view.container.mouseup = this.game.view.container.touchend = function (event) {
            onTouchEnd(event);
        }

        resize();
        interactive = false;
        game.start();
        gameMode = GAME_MODE.COUNT_DOWN;
        game.view.showHud();
        game.view.hud.removeChild(black);
        countdown.startCountDown(onCountdownComplete);
    }

    function onResumePressed() {
        onPaused();
    }

    function onRestartPressed() {
        onPaused();
        game.steve.die();
        game.gameover();
    }

    var prevState = false;

    function pauseEnded() {
        pauseScreen.visible = false;
        pauseScreen.scale.x = 1.5;
        pauseScreen.scale.y = 1.5;
        resumeButton.alpha = 0;
        resumeButton.visible = false;
    }

    function onPaused() {
        pauseButton.scale.set(0.5);

        TweenLite.to(pauseButton.scale, 0.5, {
            x: 1,
            y: 1,
            ease: Elastic.easeOut
        });

        if (gameMode === GAME_MODE.PAUSED) {
            game.steve.resume();
            interactive = true;
            gameMode = prevState;
            prevState = false;
            TweenLite.to(resumeButton.scale, 0.6, {
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
            TweenLite.to(resumeButton, 0.1, {
                alpha: 0
            });
            TweenLite.to(pauseScreen.scale, 1, {
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
            TweenLite.to(pauseScreen, 0.1, {
                alpha: 0
            });
        } else {
            game.steve.stop();
            prevState = gameMode;
            gameMode = GAME_MODE.PAUSED;
            interactive = false;
            pauseScreen.visible = true;
            TweenLite.to(pauseScreen, 0.1, {
                alpha: 1,
            });
            TweenLite.to(pauseScreen.scale, 0.6, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut
            });
            TweenLite.to(resumeButton, 0.1, {
                alpha: 1,
            });
            TweenLite.to(resumeButton.scale, 0.6, {
                x: 1,
                y: 1,
                ease: Elastic.easeOut
            });
        }
    }

    function onIntroFaded() {
        interactive = true;
    }

    function onGameover() {
        pauseButton.interactive = false;
        TweenLite.to(pauseButton, 0.6, {
            alpha: 0,
            onComplete: function () {
                pauseButton.visible = false;
            }
        });

        gameMode = GAME_MODE.GAME_OVER;
        interactive = false;
    }

    function showGameover() {
        onGameoverShown();
    }

    function onGameoverShown() {
        this.isGameReallyOver = true;
        interactive = true;
    }

    function onTouchStart(event) {
        onTap(event);
    }
    /*倒计时结束后开始运行*/
    function onCountdownComplete() {
        interactive = true;
        gameMode = GAME_MODE.PLAYING;
        pauseButton.visible = true;
        TweenLite.to(pauseButton, 0.6, {
            alpha: 1,
            onComplete: function () {
                pauseButton.interactive = true;
            }
        });
    }

    function onTouchEnd(event) {
        event.originalEvent.preventDefault();
        thrusters = false;
        if (game && game.isPlaying) {
            game.steve.fall();
        }
    }

    function getRatio(type, w, h) {
        var width = Device.cocoonJS ? window.innerWidth : w, height = Device.cocoonJS ? window.innerHeight : h;
        var dips = Device.pixelRatio;
        width = width * dips;
        height = height * dips;
        var scaleX = width / w,
            scaleY = height / h,
            result = {
                x: 1,
                y: 1
            };

        switch (type) {
            case 'all':
                result.x = scaleX > scaleY ? scaleY : scaleX;
                result.y = scaleX > scaleY ? scaleY : scaleX;
                break;
            case 'fit':
                result.x = scaleX > scaleY ? scaleX : scaleY;
                result.y = scaleX > scaleY ? scaleX : scaleY;
                break;
            case 'fill':
                result.x = scaleX;
                result.y = scaleY;
                break;
        }

        return result;
    }

    function resize() {
        var h = 640;
        var width = containerSize.w;
        var height = containerSize.h;
        var newWidth = width * h / height;
        if (game) {
            var view = game.view.renderer.view;
            view.style.height = height + "px";
            view.style.width = width + "px";

            if (black) {
                black.scale.x = width / 16;
                black.scale.y = height / 16;
            }

            this.countdown.position.x = width / 2;
            this.countdown.position.y = height / 2;

            game.view.resize(newWidth, h);

            pauseButton.position.x = newWidth - 60;
            pauseButton.position.y = h - 60;

            pauseScreen.position.x = (newWidth * 0.5);
            pauseScreen.position.y = h * 0.5;

            resumeButton.position.x = (newWidth * 0.5);
            resumeButton.position.y = (h * 0.5);
        }

        GAME.width = width;
        GAME.height = height;
    }

    function update() {
        if (game && game.update) {
            game.update();
            requestAnimFrame(update);
        }
    }
}