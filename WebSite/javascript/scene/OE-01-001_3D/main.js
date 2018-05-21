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
        bonus: null,
        floor: null
    },
    moduleLib: {
        wolf: null,
        rabbit: null,
        hedgehog: null,
        carrot: null,
        grass: null,
        forest: null
    },
    _stateOver: -1,
    _statePause: 0,
    _stateRun: 1,
    _stateJump: 2,
    _statePrepare: 3,
    _stateSit: 4,
    _stateFly: 5,
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
        monster: { pos: 0.58, tpos: 0.65, acceleration: 0.04, pursue: true }
    },
    audio: 'media/sound_1.mp3',
    floorRadius: 200,
    treeCount: 50,
    playerJumpHeight: 45,
    collisionBonus: 20,
    collisionObstacle: 10,
    modules: {
        rabbit: { head: 1, body: 1, ear: 1, color: '#b44b39', role: 'player' },
        wolf: { head: 1, body: 1, ear: 1, color: '#100707', role: 'monster' },
        hedgehog: { role: 'obstacle' },
        carrot: { role: 'prop' },
        grass: { role: '' },
        forest: { role: 'floor' }
    },
    control: { device: 'm', key: 0 }
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
    Engine.setControl(Engine.params.control.device, Engine.params.control.key);
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
    var renderEl = Engine.renderer.domElement;
    Engine.container.append(renderEl);
    renderEl.oncontextmenu = new Function("event.returnValue=false;");
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
    var flag = false;
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            flag = true;
            break;
        }
    }

    if (flag) {
        Engine.renderer.render(Engine.scene, Engine.camera);
    }
};

Engine.loop = function () {
    Engine._delta = Engine.clock.getDelta();
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            Engine.modules[key].updatePosition();
            Engine.modules[key].updatePose();
        }
    }

    Engine.checkCollision(Engine.modules);
    Engine.updateDistance();
    Engine.render();
    Engine._animationId = requestAnimationFrame(Engine.loop);
};

Engine.checkCollision = function () {
    for (var key in Engine.modules) {
        if (!Engine.modules[key]) {
            return;
        }
    }

    var db = Engine.modules.player.mesh.position.clone().sub(Engine.modules.prop.mesh.position.clone());
    var dm = Engine.modules.player.mesh.position.clone().sub(Engine.modules.obstacle.mesh.position.clone());
    if (db.length() < Engine.params.collisionBonus) {
        if (Engine.modules.prop.mesh.visible) {
            Engine.modules.bonus.mesh.position.copy(Engine.modules.prop.mesh.position);
            Engine.modules.bonus.explose();
            Engine.modules.prop.angle -= Math.PI / 2;
            Engine.modules.monster.monsterPosTarget += .03;
        }
    }

    if (dm.length() < Engine.params.collisionObstacle && Engine.modules.obstacle.status != Engine._stateFly) {
        if (Engine.modules.obstacle.mesh.visible) {
            Engine.modules.monster.monsterPosTarget -= 0.04;
            //Engine.modules.monster.monsterPosTarget -= 0.01;
            Engine.modules.obstacle.fly();
        }
    }
}

Engine.updateDistance = function () {
    //Engine._distance += Engine._delta * Engine.modules['player'].speed;
};

Engine.createRoleObject = function (moduleType, role) {
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
        case 'grass':
        case 'forest':
            roleObj = new Floor(moduleType == 'forest' ? true : false);
            break;
    }

    switch (role) {
        case 'player':
            role = 'player';
            break;
        case 'monster':
            role = 'monster';
            break;
        case 'obstacle':
            role = 'obstacle';
            break;
        case 'prop':
            role = 'prop';
            break;
        default:
            role = '';
            break;
    }

    roleObj.setRole(role);
    return roleObj;
}

Engine.initModules = function () {
    for (var key in Engine.params.modules) {
        Engine.moduleLib[key] = Engine.createRoleObject(key, Engine.params.modules[key].role);
        Engine.moduleLib[key].mesh.visible = false;
        Engine.scene.add(Engine.moduleLib[key].mesh);
        Engine.moduleLib[key].prepareForRun();
    }

    Engine.modules['bonus'] = Engine.createRoleObject('bonus', '');
    Engine.scene.add(Engine.modules['bonus'].mesh);
};

Engine.prepareForRun = function () {
    Engine.state = Engine._statePrepare;
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            Engine.scene.remove(Engine.modules[key].mesh);
        }

        Engine.modules[key] = null;
    }

    Engine.initModules();
    //Engine.DrawGrid();
    Engine.render();
    TweenMax.to(window, 1, { speed: 0 });
    TweenMax.to(Engine.camera.position, 3, { z: Engine.params.camera.oz, y: Engine.params.camera.oy, x: 0 });//Engine.params.camera.ox });

    if (Engine._animationId != '') {
        cancelAnimationFrame(Engine._animationId);
        Engine._animationId = '';
    }

    Engine._delta = 0;
    Engine._distance = 0;
};

Engine.pause = function () {
    Engine.state = Engine._statePause;
    for (var key in Engine.modules) {
        Engine.modules[key].state = Engine._statePause;
    }

    Engine.audio.pause();
};

Engine.addModules = function (moduleType, role) {
    for (var key in Engine.params.modules) {
        if (moduleType == key) {
            Engine.modules[role] = Engine.createRoleObject(moduleType, role);
            Engine.modules[role].setRole(role);
            Engine.scene.add(Engine.modules[role].mesh);
            Engine.modules[role].prepareForRun();
        }
    }

    Engine.render();
};

Engine.changeRoleModule_create = function (moduleType, role) {
    for (var key in Engine.modules) {
        if (role == key) {
            if (Engine.modules[role]) {
                Engine.scene.remove(Engine.modules[role].mesh);
            }

            if (moduleType != '') {
                Engine.modules[role] = Engine.createRoleObject(moduleType, role);
                Engine.modules[role].setRole(role);
                Engine.scene.add(Engine.modules[role].mesh);
                Engine.modules[role].prepareForRun();
            }
        }
    }

    Engine.render();
};

Engine.changeRoleModule = function (moduleType, role) {
    for (var key in Engine.modules) {
        if (role == key) {
            if (Engine.modules[role]) {
                Engine.modules[role].mesh.visible = false;
            }

            if (moduleType != '') {
                Engine.modules[role] = Engine.moduleLib[moduleType];
                Engine.modules[role].mesh.visible = true;
                Engine.modules[role].setRole(role);
                Engine.modules[role].prepareForRun();
            } else {
                if (Engine.modules[role]) {
                    Engine.modules[role].mesh.visible = false;
                    Engine.modules[role].setRole('');
                }
            }
        }
    }

    Engine.render();
};

Engine.setAudio = function (audioPath) {
    if (audioPath === false) {
        if (Engine.audio) {
            Engine.audio.pause();
        }
    } else {
        if (Engine.audio.src.indexOf(audioPath) < 0) {
            Engine.audio = new Audio(audioPath);
        }

        Engine.audio.play();
    }
}

Engine.start = function () {
    if (Engine._animationId && Engine._animationId != '') {
        cancelAnimationFrame(Engine._animationId);
        Engine._animationId = '';
    }

    Engine._delta = 0;

    Engine.state = Engine._stateRun;
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            Engine.modules[key].state = Engine._stateRun;
        }
    }

    Engine.loop();
    Engine.updateLevel();
    Engine.levelInterval = setInterval(Engine.updateLevel, 3000);
};

Engine.reset = function () {
    Engine.prepareForRun();
    Engine.audio.pause();
};

Engine.over = function () {
    Engine.state = Engine._stateOver;
    for (var key in Engine.modules) {
        if (Engine.modules[key]) {
            Engine.modules[key].over();
        }
    }

    TweenMax.to(this, 1, { speed: 0 });
    TweenMax.to(Engine.camera.position, 3, { z: Engine.params.camera.oz, y: Engine.params.camera.oy, x: 0 });//Engine.params.camera.ox });
    Engine.overCallbackFn();
    clearInterval(Engine.levelInterval);
};

Engine.setControl = function (device, eventKeyCode) {
    Engine.container.unbind();
    Engine.container.on("touchend", Engine.handleMouseDown);
    Engine.params.control = { device: 'm', key: 0 };
    if (Engine.params.speed.monster.pursue) {
        if (device == 'm') {
            Engine.container.on('mousedown', Engine.handleMouseDown);
            Engine.params.control = { device: 'm', key: eventKeyCode };
        } else {
            Engine.container.on('keydown', Engine.handleKeyDown);
            Engine.params.control = { device: 'k', key: eventKeyCode };
        }
    }
}

Engine.handleWindowResize = function () {
    if (Engine.renderer) {
        Engine.renderer.setSize(this.container.width(), this.container.height());
        Engine.camera.aspect = this.container.width() / this.container.height();
        Engine.camera.updateProjectionMatrix();
    }
};

Engine.handleMouseDown = function (eventObj) {
    if (eventObj.button == Engine.params.control.key) {
        Engine.eventHandler();
    }
};

Engine.handleKeyDown = function (eventObj) {
    if (eventObj.which == Engine.params.control.key) {
        Engine.eventHandler();
    }
};

Engine.eventHandler = function () {
    if (Engine.state == Engine._stateRun) {
        Engine.modules['player'].jump();
    } else if (Engine.state == Engine._stateOver) {
        Engine.overEventFn();
    }
}

Engine.getPlayer = function () {
    return Engine.modules['player'];
};

Engine.DrawGrid = function () {
    var scope = 1000;
    var step = 10;
    var lColor = '#000000';
    var bColor = '#FF0000';
    var geometryH = new THREE.Geometry();
    var geometryV = new THREE.Geometry();
    var geometryD = new THREE.Geometry();
    var lpH = '';
    var lpV = '';
    var lpD = '';
    var lr = '';
    geometryH.vertices.push(new THREE.Vector3(-scope, 0, 0));
    geometryH.vertices.push(new THREE.Vector3(scope, 0, 0));
    geometryV.vertices.push(new THREE.Vector3(0, -scope, 0));
    geometryV.vertices.push(new THREE.Vector3(0, scope, 0));
    geometryD.vertices.push(new THREE.Vector3(0, 0, scope));
    geometryD.vertices.push(new THREE.Vector3(0, 0, -scope));

    var loopCount = scope / step * 2;
    var currColor = '';
    for (var i = 0; i <= loopCount; i++) {
        currColor = (i == loopCount / 2 ? bColor : lColor);
        var hLine = new THREE.Line(geometryH, new THREE.LineBasicMaterial({ color: currColor, opacity: 1 }));
        hLine.position.z = (i * step) - scope;
        var vLine = new THREE.Line(geometryV, new THREE.LineBasicMaterial({ color: currColor, opacity: 1 }));
        vLine.position.x = (i * step) - scope;
        var dLine = new THREE.Line(geometryD, new THREE.LineBasicMaterial({ color: currColor, opacity: 1 }));
        dLine.position.x = (i * step) - scope;
        Engine.scene.add(hLine);
        Engine.scene.add(vLine);
        Engine.scene.add(dLine);
    }
};

Engine.overCallbackFn = function () {

};

Engine.setOverCallbackFn = function (fn) {
    Engine.overCallbackFn = fn;
};

Engine.overEventFn = function () {

};

Engine.setOverEventFn = function (fn) {
    Engine.overEventFn = fn;
};

Engine.updateLevel = function() {
    if (Engine.modules.player) {
        if (Engine.modules.player.speed < Engine.params.speed.player.max) {
            Engine.modules.player.speed += 2;
            if (Engine.modules.monster && !isNaN(Engine.modules.monster.speed)) {
                Engine.modules.monster.speed += 2;
            }
        }
    }
}

var Module = function () {
    this.state = Engine._statePrepare;
    this.visible = true;
    this.speed = 1;
    this.id = '';
    this.role = '';
    this.angle = 0;
    this.symbol = '';
    // 'prepare'/'run'/'jump'/'over'/;
    this.poseType = Engine._statePrepare;
    this.completeFired = false;
    this.monsterPosTarget = Engine.params.speed.monster.tpos;
    this.monsterPos = Engine.params.speed.monster.pos;
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.head = new THREE.Group();
};

Module.prototype.prepareForRun = function () {

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

Module.prototype.prepareForRole = function (role) {

};

Module.prototype.pause = function () {

};

Module.prototype.continue = function () {

};

Module.prototype.reset = function () {

};

Module.prototype.over = function () {
    this.state = Engine._stateOver;
    if (this.role == 'monster') {
        if (this.mouth) {
            this.mouth.add(Engine.modules.player.mesh);
        } else {
            this.mesh.add(Engine.modules.player.mesh);
        }
    }
};

Module.prototype.setRole = function (role) {
    this.role = role;
    if (this.role == 'player') {
        this.speed = Engine.params.speed.player.min;
    }

    this.prepareForRole(role);
    Module._prepareForRole(role, this);
};

Module.prototype.updatePosition_Monster = function () {
    if (Engine.params.speed.monster.pursue && Engine.state == Engine._stateRun) {
        this.monsterPosTarget -= Engine._delta * Engine.params.speed.monster.acceleration;
        this.monsterPos += (this.monsterPosTarget - this.monsterPos) * Engine._delta;
        if (this.monsterPos < .56) {
            Engine.over();
        }
    }

    this.angle = Math.PI * this.monsterPos;
    this.mesh.position.y = -Engine.params.floorRadius + Math.sin(this.angle) * (Engine.params.floorRadius + 12);
    this.mesh.position.x = Math.cos(this.angle) * (Engine.params.floorRadius + 15);
    this.mesh.rotation.z = -Math.PI / 2 + this.angle;
};

Module.prototype.updatePosition_Obstacle = function () {
    if (this.state == Engine._stateFly) {
        return;
    }

    var floorRotation = (Engine.modules.floor ? Engine.modules.floor.rotation : 0);
    if (floorRotation + this.angle > 2.5) {
        this.angle = -floorRotation + Math.random() * .3;
        this.body.rotation.y = Math.random() * Math.PI * 2;
    }

    this.mesh.rotation.z = floorRotation + this.angle - Math.PI / 2;
    this.mesh.position.y = -Engine.params.floorRadius + Math.sin(floorRotation + this.angle) * (Engine.params.floorRadius + 3);
    this.mesh.position.x = Math.cos(floorRotation + this.angle) * (Engine.params.floorRadius + 3);
}

Module.prototype.updatePosition_Prop = function () {
    var floorRotation = (Engine.modules.floor ? Engine.modules.floor.rotation : 0);
    this.mesh.rotation.y += Engine._delta * 6;
    this.mesh.rotation.z = Math.PI / 2 - (floorRotation + this.angle);
    this.mesh.position.y = -Engine.params.floorRadius + Math.sin(floorRotation + this.angle) * (Engine.params.floorRadius + 50);
    this.mesh.position.x = Math.cos(floorRotation + this.angle) * (Engine.params.floorRadius + 50);
}

Module.prototype.updatePosition = function () {
    if (this.role == 'monster') {
        if (this.positionType != 'player') {
            this.updatePosition_Monster();
        }
    } else if (this.role == 'obstacle') {
        this.updatePosition_Obstacle();
    } else if (this.role == 'prop') {
        this.updatePosition_Prop();
    }
};

Module.prototype.updatePose = function () {
    if (this.state == Engine._stateRun) {
        if (this.poseType != Engine._stateRun) {
            this.nod();
            this.poseType == Engine._stateRun;
        }

        if (this.role == 'player' || this.role == 'monster') {
            this.run();
        }
    } else if (this.state == Engine._stateJump) {
        if (this.poseType != Engine._stateJump) {
            this.poseType == Engine._stateJump;
            this.nod();
            this.jump();
        }
    } else if (this.state == Engine._stateOver) {
        if (this.poseType != Engine._stateOver) {
            this.nod();
            if (this.role == 'monster') {
                this.sit();
            } else if (this.role == 'player') {
                this.hang();
            } else {
                this.pause();
            }

            this.poseType == Engine._stateOver;
        }
    } else if (this.state == Engine._statePrepare) {
        if (this.poseType != Engine._statePrepare) {
            this.nod();
            this.poseType == Engine._statePrepare;
        }
    } else if (this.state == Engine._statePause) {
        if (this.poseType != Engine._statePause) {
            this.nod();
            this.poseType == Engine._statePause;
        }
    }
};

Module._prepareForRole = function (role, module) {
    if (role == 'monster') {
        var angle = Math.PI * Engine.params.speed.monster.pos;
        module.mesh.position.y = -Engine.params.floorRadius + Math.sin(angle) * (Engine.params.floorRadius + 12);
        module.mesh.position.x = Math.cos(angle) * (Engine.params.floorRadius + 15);
        module.mesh.rotation.z = -Math.PI / 2 + angle;
    }
};

Module.prototype.fly = function () {
    this.status = Engine._stateFly;
    var tx = (Math.random() > 0.5) ? -20 - Math.random() * 10 : 20 + Math.random() * 5;
    var _that = this;
    TweenMax.to(this.mesh.position, 4, { x: tx, y: Math.random() * 50, z: 350, ease: Power4.easeOut });
    TweenMax.to(this.mesh.rotation, 4, {
        x: Math.PI * 3, z: Math.PI * 3, y: Math.PI * 6, ease: Power4.easeOut, onComplete: function () {
            var floorRotation = (Engine.modules.floor ? Engine.modules.floor.rotation : 0);
            _that.status = "ready";
            _that.body.rotation.y = Math.random() * Math.PI * 2;
            _that.angle = -floorRotation - Math.random() * .4;
            _that.angle = this.angle % (Math.PI * 2);
            _that.mesh.rotation.x = 0;
            _that.mesh.rotation.y = 0;
            _that.mesh.rotation.z = 0;
            _that.mesh.position.z = 0;
        }
    });

    var tmpAlpha = Engine.params.renderer.clearColor;
    TweenMax.from(this,
        0.5,
        {
            tmpAlpha: 0.5,
            onUpdate: function () {
                Engine.params.renderer.clearColor = tmpAlpha;
                Engine.renderer.setClearColor(Engine.params.renderer.clearColor, Engine.params.renderer.clearAlpha);
            }
        })
}
