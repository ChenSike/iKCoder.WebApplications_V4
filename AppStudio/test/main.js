'use strict';
//THREEJS RELATED VARIABLES 

var _params_GameStatus = "pause";
var _params_HeroStatus = "hidden";
var _params_MonsterStatus = "hidden";
var _params_ObstacleStatus = "hidden";
var _params_PropStatus = "hidden";
var _params_MusicPlay = false;
var _params_BsackgroundShow = false;

var scene,
  camera, fieldOfView, aspectRatio, nearPlane, farPlane,
  gobalLight, shadowLight, backLight,
  renderer,
  container,
  controls,
  clock;
var delta = 0;
var floorRadius = 200;
var speed = 6;
var distance = 0;
var level = 1;
var levelInterval;
var levelUpdateFreq = 3000;
var initSpeed = 5;
var maxSpeed = 48;
var monsterPos = .58;
var monsterPosTarget = .65;
var floorRotation = 0;
var collisionObstacle = 10;
var collisionBonus = 20;
var gameStatus = "play";
var cameraPosGame = 160;
var cameraPosGameOver = 260;
var monsterAcceleration = 0.004;
var malusClearColor = 0xb44b39;
var malusClearAlpha = 0;
var audio = new Audio('media/sound.mp3');
var fieldGameOver, fieldDistance;
//SCREEN & MOUSE VARIABLES
var HEIGHT, WIDTH, windowHalfX, windowHalfY, mousePos = { x: 0, y: 0 };
//3D OBJECTS VARIABLES
var hero, monster, prop, obstacle;
var globalLight;

function paramsEquals(constObj, defaultObj) {
    var tmpC, tmpD;
    for (var key in constObj) {
        if (defaultObj[key]) {
            tmpC = constObj[key];
            tmpD = defaultObj[key];
            if (tmpC.w != tmpD.w || tmpC.h != tmpD.h || tmpC.d != tmpD.d || tmpC.c.color.getStyle() != tmpD.c.color.getStyle()) {
                return false;
            } else if (tmpC.rt) {
                if (tmpC.rt != tmpD.rt || tmpC.rb != tmpD.rb) {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    return true;
}
// OTHER VARIABLES
var PI = Math.PI;
//INIT THREE JS, SCREEN AND MOUSE EVENTS
function initScreenAnd3D() {
    //HEIGHT = window.innerHeight;
    //WIDTH = window.innerWidth;
    container = document.getElementById('game_container');
    HEIGHT = $(container).height();
    WIDTH = $(container).width();
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xd6eae6, 160, 350);
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 50;
    nearPlane = 1;
    farPlane = 2000;
    camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    camera.position.x = 0;
    camera.position.z = cameraPosGame;
    camera.position.y = 30;
    camera.lookAt(new THREE.Vector3(0, 30, 0));

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(malusClearColor, malusClearAlpha);

    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;

    container.appendChild(renderer.domElement);


    //window.addEventListener('resize', handleWindowResize, false);
    container.addEventListener('mousedown', handleMouseDown, false);
    container.addEventListener("touchend", handleMouseDown, false);

    /*
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.minPolarAngle = -Math.PI / 2; 
    //controls.maxPolarAngle = Math.PI / 2;
    //controls.noZoom = true;
    controls.noPan = true;
    //*/

    clock = new THREE.Clock();

}

function handleWindowResize(width, height) {
    HEIGHT = height;
    WIDTH = width;
    //HEIGHT = window.innerHeight;
    //WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function handleMouseDown(event) {
    if (gameStatus == "play" && hero.status == 'running') {
        hero.jump();
    }
    //else if (gameStatus == "readyToReplay") {
    //    replay();
    //}
}

function createLights() {
    globalLight = new THREE.AmbientLight(0xffffff, .9);
    shadowLight = new THREE.DirectionalLight(0xffffff, 1);
    shadowLight.position.set(-30, 40, 20);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 2000;
    shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;
    scene.add(globalLight);
    scene.add(shadowLight);

}

function createFloor() {

    floorShadow = new THREE.Mesh(new THREE.SphereGeometry(floorRadius, 50, 50), new THREE.MeshPhongMaterial({
        color: 0x7abf8e,
        specular: 0x000000,
        shininess: 1,
        transparent: true,
        opacity: .5
    }));
    //floorShadow.rotation.x = -Math.PI / 2;
    floorShadow.receiveShadow = true;

    floorGrass = new THREE.Mesh(new THREE.SphereGeometry(floorRadius - .5, 50, 50), new THREE.MeshBasicMaterial({
        color: 0x7abf8e
    }));
    //floor.rotation.x = -Math.PI / 2;
    floorGrass.receiveShadow = false;

    floor = new THREE.Group();
    floor.position.y = -floorRadius;

    floor.add(floorShadow);
    floor.add(floorGrass);
    scene.add(floor);
}

var BonusParticles = function () {
    this.mesh = new THREE.Group();
    var bigParticleGeom = new THREE.CubeGeometry(10, 10, 10, 1);
    var smallParticleGeom = new THREE.CubeGeometry(5, 5, 5, 1);
    this.parts = [];
    for (var i = 0; i < 10; i++) {
        var partPink = new THREE.Mesh(bigParticleGeom, pinkMat);
        var partGreen = new THREE.Mesh(smallParticleGeom, greenMat);
        partGreen.scale.set(.5, .5, .5);
        this.parts.push(partPink);
        this.parts.push(partGreen);
        this.mesh.add(partPink);
        this.mesh.add(partGreen);
    }
}

BonusParticles.prototype.explose = function () {
    var _this = this;
    var explosionSpeed = .5;
    for (var i = 0; i < this.parts.length; i++) {
        var tx = -50 + Math.random() * 100;
        var ty = -50 + Math.random() * 100;
        var tz = -50 + Math.random() * 100;
        var p = this.parts[i];
        p.position.set(0, 0, 0);
        p.scale.set(1, 1, 1);
        p.visible = true;
        var s = explosionSpeed + Math.random() * .5;
        TweenMax.to(p.position, s, { x: tx, y: ty, z: tz, ease: Power4.easeOut });
        TweenMax.to(p.scale, s, { x: .01, y: .01, z: .01, ease: Power4.easeOut, onComplete: removeParticle, onCompleteParams: [p] });
    }
}

function removeParticle(p) {
    p.visible = false;
}

var _HeroModule = 'rabbit';
var _MonsterModule = 'wolf';
var _ObstacleModule = 'hedgehog';
var _PropModule = 'carrot';
var RoleModules = ['cat', 'lion', 'dragon', 'bird', 'mouse', 'rabbit', 'wolf', 'carrot', 'hedgehog'];
function setHeroModule(module) {
    _HeroModule = '';
    for (var i = 0; i < RoleModules.length; i++) {
        if (module == RoleModules[i]) {
            _HeroModule = module;
            break;
        }
    }

    _HeroModule = (_HeroModule == '' ? 'rabbit' : _HeroModule);
}

function setMonsterModule(module) {
    _MonsterModule = '';
    for (var i = 0; i < RoleModules.length; i++) {
        if (module == RoleModules[i]) {
            _MonsterModule = module;
            break;
        }
    }

    _MonsterModule = (_MonsterModule == '' ? 'wolf' : _MonsterModule);
}

function setObstacleModule(module) {
    _ObstacleModule = '';
    for (var i = 0; i < RoleModules.length; i++) {
        if (module == RoleModules[i]) {
            _ObstacleModule = module;
            break;
        }
    }

    _ObstacleModule = (_ObstacleModule == '' ? 'hedgehog' : _ObstacleModule);
}

function setPropModule(module) {
    _PropModule = '';
    for (var i = 0; i < RoleModules.length; i++) {
        if (module == RoleModules[i]) {
            _PropModule = module;
            break;
        }
    }

    _PropModule = (_PropModule == '' ? 'carrot' : _PropModule);
}

function createRoleObject(module) {
    var roleObj = null;
    switch (module) {
        case 'cat':
            roleObj = new Cat();
            break;
        case 'lion':
            roleObj = new Lion();
            break;
        case 'dragon':
            roleObj = new Dragon();
            break;
        case 'bird':
            roleObj = new Bird();
            break;
        case 'mouse':
            roleObj = new Mouse();
            break;
        case 'rabbit':
            roleObj = new Hero();
            break;
        case 'wolf':
            roleObj = new Monster();
            break;
        case 'carrot':
            roleObj = new Carrot();
            break;
        case 'hedgehog':
            roleObj = new Hedgehog();
            break;
    }

    return roleObj;
}

function createHero() {
    hero = createRoleObject(_HeroModule);
    hero.mesh.rotation.y = Math.PI / 2;
    scene.add(hero.mesh);
    hero.nod();
}

function reCreateHero() {
    scene.remove(hero.mesh);
    var newHero = createRoleObject(_HeroModule);
    newHero.mesh.rotation.y = Math.PI / 2;
    scene.add(newHero.mesh);
    hero = null;
    hero = newHero;
    hero.nod();
}

function createMonster() {
    monster = createRoleObject(_MonsterModule);
    monster.mesh.position.z = 20;
    //monster.mesh.scale.set(1.2,1.2,1.2);
    scene.add(monster.mesh);
    updateMonsterPosition();
}

function reCreateMonster() {
    scene.remove(monster.mesh);
    var newMonster = createRoleObject(_MonsterModule);
    newMonster.mesh.position.z = 20;
    //monster.mesh.scale.set(1.2,1.2,1.2);
    newMonster.resetOrgPosition();
    scene.add(newMonster.mesh);
    monster = null;
    monster = newMonster;
    updateMonsterPosition();
}

function updateMonsterPosition() {
    monster.status = _params_MonsterStatus;
    monster.mesh.visible = (monster.status == 'hidden' ? false : true);
    if (monster.status == "running") {
        monster.run();
        monsterPosTarget -= delta * monsterAcceleration;
        monsterPos += (monsterPosTarget - monsterPos) * delta;
        if (monsterPos < .56) {
            gameOver();
        }

        var angle = Math.PI * monsterPos;
        monster.mesh.position.y = -floorRadius + Math.sin(angle) * (floorRadius + 12);
        monster.mesh.position.x = Math.cos(angle) * (floorRadius + 15);
        monster.mesh.rotation.z = -Math.PI / 2 + angle;
    }
}

function gameOver() {
    //fieldGameOver.className = "show";
    gameStatus = "gameOver";
    monster.sit();
    hero.hang();
    monster.heroHolder.add(hero.mesh);
    TweenMax.to(this, 1, { speed: 0 });
    TweenMax.to(camera.position, 3, { z: cameraPosGameOver, y: 60, x: -30 });
    //prop.mesh.visible = false;
    //obstacle.mesh.visible = false;
    clearInterval(levelInterval);
}

function replay() {
    gameStatus = "preparingToReplay"
    //fieldGameOver.className = "";
    TweenMax.killTweensOf(monster.pawFL.position);
    TweenMax.killTweensOf(monster.pawFR.position);
    TweenMax.killTweensOf(monster.pawBL.position);
    TweenMax.killTweensOf(monster.pawBR.position);

    TweenMax.killTweensOf(monster.pawFL.rotation);
    TweenMax.killTweensOf(monster.pawFR.rotation);
    TweenMax.killTweensOf(monster.pawBL.rotation);
    TweenMax.killTweensOf(monster.pawBR.rotation);

    TweenMax.killTweensOf(monster.tail.rotation);
    TweenMax.killTweensOf(monster.head.rotation);
    TweenMax.killTweensOf(monster.eyeL.scale);
    TweenMax.killTweensOf(monster.eyeR.scale);

    //TweenMax.killTweensOf(hero.head.rotation);

    monster.tail.rotation.y = 0;

    TweenMax.to(camera.position, 3, { z: cameraPosGame, x: 0, y: 30, ease: Power4.easeInOut });
    TweenMax.to(monster.torso.rotation, 2, { x: 0, ease: Power4.easeInOut });
    TweenMax.to(monster.torso.position, 2, { y: 0, ease: Power4.easeInOut });
    TweenMax.to(monster.pawFL.rotation, 2, { x: 0, ease: Power4.easeInOut });
    TweenMax.to(monster.pawFR.rotation, 2, { x: 0, ease: Power4.easeInOut });
    TweenMax.to(monster.mouth.rotation, 2, { x: .5, ease: Power4.easeInOut });


    TweenMax.to(monster.head.rotation, 2, { y: 0, x: -.3, ease: Power4.easeInOut });

    TweenMax.to(hero.mesh.position, 2, { x: 20, ease: Power4.easeInOut });
    TweenMax.to(hero.head.rotation, 2, { x: 0, y: 0, ease: Power4.easeInOut });
    TweenMax.to(monster.mouth.rotation, 2, { x: .2, ease: Power4.easeInOut });
    TweenMax.to(monster.mouth.rotation, 1, {
        x: .4, ease: Power4.easeIn, delay: 1, onComplete: function () {

            resetGame();
        }
    });

}

var Fir = function () {
    var height = 200;
    var truncGeom = new THREE.CylinderGeometry(2, 2, height, 6, 1);
    truncGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, height / 2, 0));
    this.mesh = new THREE.Mesh(truncGeom, greenMat);
    this.mesh.castShadow = true;
}

var firs = new THREE.Group();

function createFirs() {

    var nTrees = 100;
    for (var i = 0; i < nTrees; i++) {
        var phi = i * (Math.PI * 2) / nTrees;
        var theta = Math.PI / 2;
        //theta += .25 + Math.random()*.3; 
        theta += (Math.random() > .05) ? .25 + Math.random() * .3 : -.35 - Math.random() * .1;

        var fir = new Tree();
        fir.mesh.position.x = Math.sin(theta) * Math.cos(phi) * floorRadius;
        fir.mesh.position.y = Math.sin(theta) * Math.sin(phi) * (floorRadius - 10);
        fir.mesh.position.z = Math.cos(theta) * floorRadius;

        var vec = fir.mesh.position.clone();
        var axis = new THREE.Vector3(0, 1, 0);
        fir.mesh.quaternion.setFromUnitVectors(axis, vec.clone().normalize());
        floor.add(fir.mesh);
    }
}

function createProp() {
    prop = createRoleObject(_PropModule);
    scene.add(prop.mesh);
}

function reCreateProp() {
    if (prop && prop.mesh) {
        scene.remove(prop.mesh);
        var newProp = createRoleObject(_PropModule);
        scene.add(newProp.mesh);
        prop = null;
        prop = newProp;
    }
}

function updatePropPosition() {
    prop.status = _params_PropStatus;
    if (prop.status == 'show') {
        prop.mesh.rotation.y += delta * 6;
        prop.mesh.rotation.z = Math.PI / 2 - (floorRotation + prop.angle);
        prop.mesh.position.y = -floorRadius + Math.sin(floorRotation + prop.angle) * (floorRadius + 50);
        prop.mesh.position.x = Math.cos(floorRotation + prop.angle) * (floorRadius + 50);
    }
}

function updateObstaclePosition() {
    if (obstacle.status == "flying") return;

    obstacle.status = _params_ObstacleStatus;
    if (obstacle.status == 'rerady') {
        // TODO fix this,
        if (floorRotation + obstacle.angle > 2.5) {
            obstacle.angle = -floorRotation + Math.random() * .3;
            obstacle.body.rotation.y = Math.random() * Math.PI * 2;
        }

        obstacle.mesh.rotation.z = floorRotation + obstacle.angle - Math.PI / 2;
        obstacle.mesh.position.y = -floorRadius + Math.sin(floorRotation + obstacle.angle) * (floorRadius + 3);
        obstacle.mesh.position.x = Math.cos(floorRotation + obstacle.angle) * (floorRadius + 3);
    }
}

function updateFloorRotation() {
    floor.visible = _params_BsackgroundShow;
    if (hero.status == "running") {
        floorRotation += delta * .03 * speed;
        floorRotation = floorRotation % (Math.PI * 2);
        floor.rotation.z = floorRotation;
    }
}

function createObstacle() {
    obstacle = createRoleObject(_ObstacleModule);
    obstacle.body.rotation.y = -Math.PI / 2;
    obstacle.mesh.scale.set(1.1, 1.1, 1.1);
    obstacle.mesh.position.y = floorRadius + 4;
    obstacle.nod();
    scene.add(obstacle.mesh);
}

function reCreateObstacle() {
    if (obstacle && obstacle.mesh) {
        scene.remove(obstacle.mesh);
        var newObstacle = createRoleObject(_ObstacleModule);
        obstacle.body.rotation.y = -Math.PI / 2;
        obstacle.mesh.scale.set(1.1, 1.1, 1.1);
        obstacle.mesh.position.y = floorRadius + 4;
        obstacle.nod();
        scene.add(newObstacle.mesh);
        obstacle = null;
        obstacle = newObstacle;
    }
}

function createBonusParticles() {
    bonusParticles = new BonusParticles();
    bonusParticles.mesh.visible = false;
    scene.add(bonusParticles.mesh);
}

function checkCollision() {
    var db = hero.mesh.position.clone().sub(prop.mesh.position.clone());
    var dm = hero.mesh.position.clone().sub(obstacle.mesh.position.clone());

    if (db.length() < collisionBonus) {
        getBonus();
    }

    if (dm.length() < collisionObstacle && obstacle.status != "flying") {
        getMalus();
    }
}

function getBonus() {
    if (prop.mesh.visible) {
        bonusParticles.mesh.position.copy(prop.mesh.position);
        bonusParticles.mesh.visible = true;
        bonusParticles.explose();
        prop.angle += Math.PI / 2;
        //speed*=.95;
        monsterPosTarget += .025;
    }
}

function getMalus() {
    if (obstacle.mesh.visible) {
        obstacle.status = "flying";
        var tx = (Math.random() > .5) ? -20 - Math.random() * 10 : 20 + Math.random() * 5;
        TweenMax.to(obstacle.mesh.position, 4, { x: tx, y: Math.random() * 50, z: 350, ease: Power4.easeOut });
        TweenMax.to(obstacle.mesh.rotation, 4, {
            x: Math.PI * 3, z: Math.PI * 3, y: Math.PI * 6, ease: Power4.easeOut, onComplete: function () {
                obstacle.status = "ready";
                obstacle.body.rotation.y = Math.random() * Math.PI * 2;
                obstacle.angle = -floorRotation - Math.random() * .4;

                obstacle.angle = obstacle.angle % (Math.PI * 2);
                obstacle.mesh.rotation.x = 0;
                obstacle.mesh.rotation.y = 0;
                obstacle.mesh.rotation.z = 0;
                obstacle.mesh.position.z = 0;

            }
        });
        //
        monsterPosTarget -= .04;
        TweenMax.from(this, .5, {
            malusClearAlpha: .5, onUpdate: function () {
                renderer.setClearColor(malusClearColor, malusClearAlpha);
            }
        })
    }
}

function updateDistance() {
    distance += delta * speed;
    var d = distance / 2;
    fieldDistance.innerHTML = Math.floor(d);
}

function updateLevel() {
    if (hero.status == 'running' && monster.status == 'running') {
        if (speed < maxSpeed) {
            level++;
            speed += 2;
        }
    }
}

function loop() {
    hero.status = _params_HeroStatus;
    hero.mesh.visible = (hero.status == 'hidden' ? false : true);
    monster.status = _params_MonsterStatus;
    monster.mesh.visible = (monster.status == 'hidden' ? false : true);
    delta = clock.getDelta();
    updateFloorRotation();
    hero.run();
    updateDistance();
    updateMonsterPosition();
    updatePropPosition();
    updateObstaclePosition();
    checkCollision();
    render();
    requestAnimationFrame(loop);
    if (_params_MusicPlay) {
        audio.play();
    } else {
        audio.pause();
    }
}

function render() {
    renderer.render(scene, camera);
}

function gameInit(event) {
    if (Scene.PrepareProperty) {
        Scene.PrepareProperty();
    }

    initScreenAnd3D();
    createLights();
    createFloor()
    createHero();
    createMonster();
    createFirs();
    createProp();
    createBonusParticles();
    createObstacle();
    initUI();
    reinitGameParam();
    if (Scene.PrepareStatus) {
        Scene.PrepareStatus();
    }

    resetGame();
    loop();
    //setInterval(hero.blink.bind(hero), 3000);
}

function gamePause() {
    monsterPos = .58;
    updateMonsterPosition();
    prop.mesh.visible = false;
    obstacle.mesh.visible = false;
    gameStatus = "pause";
    hero.status = "pause";
    monster.status = "pause";
    audio.pause();
}

function gameStart() {
    gameStatus = "play";
    prop.mesh.visible = (_params_PropStatus == 'hidden' ? false : true);
    obstacle.mesh.visible = (_params_ObstacleStatus == 'hidden' ? false : true);
    hero.status = _params_HeroStatus;
    monster.status = _params_MonsterStatus;
    if (hero.status == 'pause' && monster.status == 'running') {
        monsterAcceleration = 0.05;
        monsterPos = .58;
    } else {
        monsterAcceleration = 0.004;
        monsterPos = .56;
    }

    updateMonsterPosition();
}

function reinitGameParam() {
    scene.add(hero.mesh);
    hero.mesh.rotation.y = Math.PI / 2;
    hero.mesh.position.y = 0;
    hero.mesh.position.z = 0;
    hero.mesh.position.x = 0;
    monsterPos = .56;
    monsterPosTarget = .65;
    speed = initSpeed;
    level = 0;
    distance = 0;
    //carrot.mesh.visible = false;
    //obstacle.mesh.visible = false;
    //gameStatus = "pause";
    //hero.status = "pause";
    //monster.status = "pause";
    _params_GameStatus = "pause";
    _params_HeroStatus = "hidden";
    _params_MonsterStatus = "hidden";
    _params_ObstacleStatus = "hidden";
    _params_PropStatus = "hidden";
    _params_MusicPlay = false;
    _params_BsackgroundShow = false;
    audio.pause();

    monster.pause();
    TweenMax.to(this, 1, { speed: 0 });
    TweenMax.to(camera.position, 3, { z: cameraPosGameOver, y: 60, x: -30 });
    clearInterval(levelInterval);
}

function resetGame() {
    scene.add(hero.mesh);
    hero.mesh.rotation.y = Math.PI / 2;
    hero.mesh.position.y = 0;
    hero.mesh.position.z = 0;
    hero.mesh.position.x = 0;
    monsterPos = .56;
    monsterPosTarget = .65;
    speed = initSpeed;
    level = 0;
    distance = 0;
    prop.mesh.visible = (_params_PropStatus == 'hidden' ? false : true);
    obstacle.mesh.visible = (_params_ObstacleStatus == 'hidden' ? false : true);
    floor.visible = _params_BsackgroundShow;
    gameStatus = 'pause';
    hero.status = _params_HeroStatus;
    hero.mesh.visible = (hero.status == 'hidden' ? false : true);
    monster.status = _params_MonsterStatus;
    monster.mesh.visible = (monster.status == 'hidden' ? false : true);
    hero.nod();
    if (_params_MusicPlay) {
        audio.play();
    } else {
        audio.pause();
    }

    updateLevel();
    levelInterval = setInterval(updateLevel, levelUpdateFreq);
}

function initUI() {
    fieldDistance = document.getElementById("distValue");
    //fieldGameOver = document.getElementById("gameoverInstructions");
}

var Tree = function () {
    this.mesh = new THREE.Object3D();
    this.trunc = new Trunc();
    this.mesh.add(this.trunc.mesh);
}

var Trunc = function () {
    var truncHeight = 50 + Math.random() * 150;
    var topRadius = 1 + Math.random() * 5;
    var bottomRadius = 5 + Math.random() * 5;
    var mats = [blackMat, brownMat, pinkMat, whiteMat, greenMat, lightBrownMat, pinkMat];
    var matTrunc = blackMat;//mats[Math.floor(Math.random()*mats.length)];
    var nhSegments = 3;//Math.ceil(2 + Math.random()*6);
    var nvSegments = 3;//Math.ceil(2 + Math.random()*6);
    var geom = new THREE.CylinderGeometry(topRadius, bottomRadius, truncHeight, nhSegments, nvSegments);
    geom.applyMatrix(new THREE.Matrix4().makeTranslation(0, truncHeight / 2, 0));

    this.mesh = new THREE.Mesh(geom, matTrunc);

    for (var i = 0; i < geom.vertices.length; i++) {
        var noise = Math.random();
        var v = geom.vertices[i];
        v.x += -noise + Math.random() * noise * 2;
        v.y += -noise + Math.random() * noise * 2;
        v.z += -noise + Math.random() * noise * 2;

        geom.computeVertexNormals();

        // FRUITS

        if (Math.random() > .7) {
            var size = Math.random() * 3;
            var fruitGeometry = new THREE.CubeGeometry(size, size, size, 1);
            var matFruit = mats[Math.floor(Math.random() * mats.length)];
            var fruit = new THREE.Mesh(fruitGeometry, matFruit);
            fruit.position.x = v.x;
            fruit.position.y = v.y + 3;
            fruit.position.z = v.z;
            fruit.rotation.x = Math.random() * Math.PI;
            fruit.rotation.y = Math.random() * Math.PI;

            this.mesh.add(fruit);
        }

        // BRANCHES

        if (Math.random() > .5 && v.y > 10 && v.y < truncHeight - 10) {
            var h = 3 + Math.random() * 5;
            var thickness = .2 + Math.random();

            var branchGeometry = new THREE.CylinderGeometry(thickness / 2, thickness, h, 3, 1);
            branchGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, h / 2, 0));
            var branch = new THREE.Mesh(branchGeometry, matTrunc);
            branch.position.x = v.x;
            branch.position.y = v.y;
            branch.position.z = v.z;

            var vec = new THREE.Vector3(v.x, 2, v.z);
            var axis = new THREE.Vector3(0, 1, 0);
            branch.quaternion.setFromUnitVectors(axis, vec.clone().normalize());


            this.mesh.add(branch);
        }

    }


    this.mesh.castShadow = true;
}