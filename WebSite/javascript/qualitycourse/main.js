'use strict';

var _PI = Math.PI;

var Engine = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    modules: {
        player: null,
        monster: null,
        obstacle: null,
        prop: null,
        bonus: null
    },
    _statusOver: -1,
    _statusPause: 0,
    _statusRun: 1,
    _statusJump: 2,
    _statusPrepare: 3,
    _animationId: '',
    _delta: 0,
    _distance: 0,
    state: 0
};

Engine.params = {
    fog: {
        color: '#d6eae6',
        near: 160,
        far: 350
    },
    camera: {
        aspectRatio: 1,
        fieldOfView: 50,
        nearPlane: 1,
        farPlane: 2000,
        x: 0,
        y: 30,
        z: 160,
        ox: -30,
        oy: 60,
        oz: 260
    },
    renderer: {
        alpha: true,
        antialias: true,
        clearColor: '#b44b39',
        clearAlpha: 0
    },
    lights: {
        global: {
            type: 'g',
            color: '#ffffff',
            intensity: 0.9,
            cfg: null
        },
        shadow: {
            type: 'd',
            color: '#ffffff',
            intensity: 0.9,
            cfg: {
                position: { x: -30, y: 40, z: 20 },
                castShadow: true,
                camera: {
                    left: -400,
                    right: 400,
                    top: 400,
                    bottom: -400,
                    near: 1,
                    far: 2000
                },
                mapSize: { w: 2048, h: 2048 }
            }
        }
    },
    speed: {
        player: { min: 6, max: 48, freq: 3000, step: 2 },
        monster: { pos: 0.58, tpos: 0.65, acceleration: 0.004 }
    },
    audio: 'media/sound_1.mp3',
    floorRadius: 200,
    treeCount: 100,
    modules: {
        player: 'rabbit',
        monster: 'wolf',
        obstacle: 'hedgehog',
        prop: 'carrot'
    }
};

Engine.initParams = function (params) {
    for (var key in Engine.params) {
        if (typeof (params[key]) != 'undefined') {
            Engine.params[key] = params[key];
        }
    }
}

Engine.initScreenAnd3D = function (containerId, params) {
    Engine.initParams(params);
    Engine.container = $('#' + containerId);
    Engine.initScene();
    Engine.initCamera();
    Engine.initRender();
    Engine.initLights();
    Engine.audio = new Audio(Engine.params.audio);
    Engine.clock = new THREE.Clock();
};

Engine.initScene = function () {
    Engine.scene = new THREE.Scene();
    Engine.scene.fog = new THREE.Fog(Engine.params.fog.color, Engine.params.fog.near, Engine.params.fog.far);
};

Engine.initCamera = function () {
    Engine.params.camera.aspectRatio = Engine.container.width() / Engine.container.height();
    Engine.camera = new THREE.PerspectiveCamera(
       Engine.params.camera.fieldOfView,
       Engine.params.camera.aspectRatio,
       Engine.params.camera.nearPlane,
       Engine.params.camera.farPlane
    );

    Engine.camera.position.x = Engine.params.camera.x;
    Engine.camera.position.y = Engine.params.camera.y;
    Engine.camera.position.z = Engine.params.camera.z;
    Engine.camera.lookAt(new THREE.Vector3(0, 30, 0));
};

Engine.initRender = function () {
    Engine.renderer = new THREE.WebGLRenderer({
        alpha: Engine.params.renderer.alpha,
        antialias: Engine.params.renderer.antialias
    });

    Engine.renderer.setPixelRatio(window.devicePixelRatio);
    Engine.renderer.setClearColor(Engine.params.renderer.clearColor, Engine.params.renderer.clearAlpha);

    Engine.renderer.setSize(Engine.container.width(), Engine.container.height());
    Engine.renderer.shadowMap.enabled = true;
    Engine.container.append(Engine.renderer.domElement);
    //container.addEventListener('mousedown', handleMouseDown, false);
    //container.addEventListener("touchend", handleMouseDown, false);
};

Engine.initLights = function () {
    var tmpItem, tmpCfg;
    for (var key in Engine.params.lights) {
        tmpItem = Engine.params.lights[key];
        var tmpLight = null;
        if (tmpItem.type == 'g') {
            tmpLight = new THREE.AmbientLight(tmpItem.color, tmpItem.intensity);
        } else if (tmpItem.type == 'd') {
            tmpLight = new THREE.DirectionalLight(tmpItem.color, tmpItem.intensity);
        }

        if (tmpItem.cfg) {
            tmpCfg = tmpItem.cfg;
            if (tmpCfg.position) {
                tmpLight.position.set(tmpCfg.position.x, tmpCfg.position.y, tmpCfg.position.z);
            }

            tmpLight.castShadow = typeof tmpCfg.castShadow == 'boolean' ? tmpCfg.castShadow : false;
            if (tmpCfg.camera) {
                tmpLight.shadow.camera.left = isNaN(tmpCfg.camera.left) ? 0 : tmpCfg.camera.left;
                tmpLight.shadow.camera.right = isNaN(tmpCfg.camera.right) ? 0 : tmpCfg.camera.right;
                tmpLight.shadow.camera.top = isNaN(tmpCfg.camera.top) ? 0 : tmpCfg.camera.top;
                tmpLight.shadow.camera.bottom = isNaN(tmpCfg.camera.bottom) ? 0 : tmpCfg.camera.bottom;
                tmpLight.shadow.camera.near = isNaN(tmpCfg.camera.near) ? 0 : tmpCfg.camera.near;
                tmpLight.shadow.camera.far = isNaN(tmpCfg.camera.far) ? 0 : tmpCfg.camera.far;
            }

            if (tmpCfg.mapSize) {
                tmpLight.shadow.mapSize.width = isNaN(tmpCfg.mapSize.w) ? 2048 : tmpCfg.mapSize.w;
                tmpLight.shadow.mapSize.height = isNaN(tmpCfg.mapSize.h) ? 2048 : tmpCfg.mapSize.h;
            }
        }

        Engine.scene.add(tmpLight);
    }
};

Engine.render = function () {
    Engine.renderer.render(Engine.scene, Engine.camera);
};

Engine.loop = function () {
    Engine._delta = Engine.clock.getDelta();
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            Engine.modules[key].updatePosition();
            Engine.modules[key].updatePose();
        }
    }

    Engine.updateDistance();
    Engine.render();
    Engine._animationId = requestAnimationFrame(Engine.loop);
};

Engine.updateDistance = function () {
    //Engine._distance += Engine._delta * Engine.modules['player'].speed;
};

Engine.createRoleObject = function (moduleType) {
    var roleObj = null;
    switch (moduleType) {
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
            roleObj = new Rabbit();
            break;
        case 'wolf':
            roleObj = new Wolf();
            break;
        case 'carrot':
            roleObj = new Carrot();
            break;
        case 'hedgehog':
            roleObj = new Hedgehog();
            break;
        case 'bonus':
            roleObj = new BonusParticles();
            break;
        case 'floor':
            roleObj = new Floor();
            break;
    }

    return roleObj;
}

Engine.initModules = function () {
    Engine.modules['background'] = Engine.createRoleObject('floor');
    Engine.scene.add(Engine.modules['background'].mesh);
    //for (var key in Engin.params.modules) {
    //    Engine.modules[key] = Engine.createRoleObject(Engin.params.modules[key]);
    //    Engine.scene.add(Engine.modules[key].mesh);
    //    Engine.modules[key].preparingForRun();
    //}

    //Engine.modules['bonus'] = Engine.createRoleObject('bonus');
    //Engine.scene.add(Engine.modules['bonus'].mesh);
};

Engine.prepareForRun = function () {
    Engine.state = Engine._statusPrepare;
    for (var key in Engine.modules) {
        Engine.scene.remove(Engine.modules[key]);
        Engine.modules[key] = null;
    }

    Engine.initModules();
    Engine.render();
    TweenMax.to(window, 1, { speed: 0 });
    TweenMax.to(Engine.camera.position, 3, { z: Engine.params.camera.oz, y: Engine.params.camera.oy, x: Engine.params.camera.ox });

    if (Engine._animationId != '') {
        cancelAnimationFrame(Engine._animationId);
        Engine._animationId = '';
    }

    Engine._delta = 0;
    Engine._distance = 0;
};

Engine.pause = function () {
    Engine.state = Engine._statusPause;
    for (var key in Engine.modules) {
        Engine.modules[key].state = Engine._statusPause;
    }

    Engine.audio.pause();
};

Engine.start = function () {
    Engine.state = "run";
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            Engine.modules[key].state = 'run';
        }
    }

    Engine.loop();
};

Engine.reset = function () {
    Engine.prepareForRun();
    Engine.audio.play();
};

Engine.over = function () {
    Engine.state = "over";
    for (var key in Engin.modules) {
        Engin.modules[key].over();
    }

    TweenMax.to(this, 1, { speed: 0 });
    TweenMax.to(camera.position, 3, { z: Engine.params.camera.oz, y: Engine.params.camera.oy, x: Engine.params.camera.ox });
};

Engine.handleWindowResize = function (width, height) {
    //HEIGHT = height;
    //WIDTH = width;
    ////HEIGHT = window.innerHeight;
    ////WIDTH = window.innerWidth;
    //windowHalfX = WIDTH / 2;
    //windowHalfY = HEIGHT / 2;
    //renderer.setSize(WIDTH, HEIGHT);
    //camera.aspect = WIDTH / HEIGHT;
    //camera.updateProjectionMatrix();
};

Engine.handleMouseDown = function (event) {
    //if (gameStatus == "play" && hero.status == 'running') {
    //    hero.jump();
    //}
    ////else if (gameStatus == "readyToReplay") {
    ////    replay();
    ////}
};

Engine.getPlayer = function () {
    return Engine.modules['player'];
}

var Module = function () {
    this.state = Engine._statusRun;
    this.visible = true;
    this.speed = 1;
    this.id = '';
    this.symbol = '';
    this.completeFired = false;
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.head = new THREE.Group();
};

Module.prototype.updatePosition = function () {

};

Module.prototype.updatePose = function () {

};

Module.prototype.preparingForRun = function () {

};

Module.prototype.pause = function () {

};

Module.prototype.continue = function () {

};

Module.prototype.reset = function () {

};

Module.prototype.over = function () {

};

Module.prototype.collideAction = function (sourceModule) {

};

Module.prototype.run = function () {

};

Module.prototype.jump = function () {

};

Module.prototype.sit = function () {

};

Module.prototype.hang = function () {

};

Module.prototype.nod = function () {

};