'use strict';

var Engine = {};
Engine._statusOver = -1;
Engine._statusPause = 0;
Engine._statusRun = 1;
Engine._statusSick = 2;
Engine._statusPower = 3;
Engine.scene;
Engine.camera;
Engine.renderer;
Engine.clock;
Engine.Lights = {};
Engine.modules = {};
Engine.audios = {};
Engine.status = 1;
Engine.delta = 0;
Engine.loopID = null;
Engine.intervals = {};
Engine.backgroundAudio = null;
Engine.params = {
    /*
        color: 烟雾的颜色
        near: 近处属性值
        far: 远处属性值
        start: 雾化开始位置，近处属性值，远处属性值，雾化开始和结束的地方，以及加深的程度
        end: 雾化结束位置 
        ratio: 雾化加深的程度
        conc: 雾化浓度
    */
    fog: {
        color: '#d6eae6',
        near: 160,
        far: 350,
        start: null,
        end: null,
        ratio: null,
        conc: null
    },
    /*
        fov: 视野角
        aspect: 纵横比
        near: 相机离视体积最近的距离
        far: 相机离视体积最远的距离
        THREE.PerspectiveCamera: 透视投影相机
        px: 相机的位置坐标 X
        py: 相机的位置坐标 Y
        pz: 相机的位置坐标 Z
        cv: 视野的中心坐标 (THREE.Vector3), 相机的聚焦点
    */
    camera: {
        fov: 50,
        aspect: 1,
        near: 1,
        far: 2000,
        px: 0,
        py: 160,
        pz: 30,
        vector: { x: 0, y: 0, z: 0 }
    },
    /*
      antialias: true/false是否开启反锯齿
      precision: highp/mediump/lowp着色精度选择
      alpha: true/false是否可以设置背景色透明
      premultipliedAlpha: false,//?
      stencil: false,//?
      preserveDrawingBuffer: true/false是否保存绘图缓冲
      maxLights:number 最大灯光数    
      clearColor: 设置canvas背景色
      clearAlpha: 背景色透明度
    */
    renderer: {
        antialias: true,
        precision: 'highp',
        alpha: true,
        premultipliedAlpha: false,
        stencil: false,
        preserveDrawingBuffer: true,
        maxLights: 1,
        enableShadowMap: true,
        shadowMapType: null,
        clearColor: '#b44b39',
        clearAlpha: 0
    },
    /*
    环境光 : THREE.AmbientLight( color, intensity)
                color : 颜色
                intensity : 强度, 默认是1.0(100%)
    点光源 : THREE.PointLight( color, intensity, distance )
                color : 颜色
                intensity : 强度, 默认是1.0(100%)
                distance : 距离, 从Intensity衰减为0的距离, 默认值为0.0，表示不衰减
    聚光灯 : THREE.SpotLight( color, intensity, distance, angle, exponent )
                color : 颜色
                intensity : 强度, 默认1.0(100%)
                distance : 距离, 从Intensity衰减为0的距离, 默认值为0.0，表示不衰减.
                angle :着色的角度，用弧度作为单位，和光源的方向形成的角度
                exponent :衰减参数，越大衰减越快。
    平行光/方向光 ： THREE.DirectionalLight(color, intensity)
                Intensity : 强度, 默认为1(100%)
    区域光 :  THREE.AreaLight
    */
    lights: {
        globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.9, adjustFn: null },
        shadowLight: { type: 'directional', color: '#ffffff', intensity: 1, adjustFn: null }
    },
    /*{id: module: }    */
    modules: {},
    backgroundAudio: [],
    audios: {},
    intervals: {}
};

/*
THREE的相机控件，用于控制场景中的相机
FirstPersonControls：第一人称控件，键盘移动，鼠标转动 
FlyControls：飞行器模拟控件，键盘和鼠标来控制相机的移动和转动 
RollControls：翻滚控件，FlyControls的简化版，可以绕z轴旋转 
TrackballControls：轨迹球控件，用鼠标来轻松移动、平移和缩放场景 
OrbitControls：轨道控件，用于特定场景，模拟轨道中的卫星，可以用鼠标和键盘在场景中游走 
PathControls：路径控件，相机可以沿着预定义的路径移动。可以四处观看，但不能改变自身的位置。
*/

Engine.events = {
    'mousedown': handleMouseDown,
    'touchend': handleMouseDown,
};

Engine.initScreenAnd3D = function (containerId) {
    container = $('#' + containerId);
    var width = container.width();
    var height = container.height();
    Engine.scene = new THREE.Scene();
    Engine.scene.fog = Engine.createFog();
    Engine.initCamera(width, height);
    Engine.initRenderer(width, height);
    container.appendChild(Engine.renderer.domElement);
    Engine.initEvent();
    Engine.clock = new THREE.Clock();
    Engine.initLights();
    //renderer.render(scene, camera);
};

Engine.createFog = function () {
    var color = Engine.params.fog.color;
    var near = Engine.params.fog.near;
    var far = Engine.params.fog.far;
    var start = Engine.params.fog.start;
    var end = Engine.params.fog.end;
    var ratio = Engine.params.fog.ratio;
    var concentration = Engine.params.fog.conc;
    var fog;
    if (concentration) {
        fog = new THREE.FogExp2(color, concentration);
    } else {
        if (start && end && ratio) {
            fog = new THREE.Fog(color, near, far, start, end, retio);
        } if (start && end) {
            fog = new THREE.Fog(color, near, far, start, end);
        } else {
            fog = new THREE.Fog(color, near, far);
        }
    }

    return fog;
};

Engine.initCamera = function (width, height) {
    Engine.params.camera.aspect = width / height;
    Engine.camera = new THREE.PerspectiveCamera(
      Engine.params.camera.fov,
      Engine.params.camera.aspect,
      Engine.params.camera.near,
      Engine.params.camera.far
    );
    Engine.camera.position.x = Engine.params.camera.px;
    Engine.camera.position.z = Engine.params.camera.py;
    Engine.camera.position.y = Engine.params.camera.pz;
    Engine.camera.lookAt(new THREE.Vector3(Engine.params.camera.vector.x, Engine.params.camera.vector.y, Engine.params.camera.vector.z));
};

Engine.initRenderer = function (width, height) {
    Engine.renderer = new THREE.WebGLRenderer({ alpha: Engine.params.renderer.alpha, antialias: Engine.params.renderer.antialias });
    Engine.renderer.setPixelRatio(window.devicePixelRatio);
    Engine.renderer.setSize(width, height);
    Engine.renderer.setClearColor(Engine.params.renderer.clearColor, Engine.params.renderer.clearAlpha);
    Engine.renderer.shadowMap.enabled = Engine.params.renderer.enableShadowMap;
    if (Engine.params.renderer.shadowMapType) {
        Engine.renderer.shadowMap.type = Engine.params.renderer.shadowMapType;
    }
};

Engine.initEvent = function () {
    for (var key in Engine.events) {
        container.on(key, function (eventObj) {
            Engine.events[key](eventObj);
        });
    }
};

Engine.handleContainerResize = function (width, height) {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};

Engine.handleMouseDown = function (eventObj) {
    //if (gameStatus == "play" && hero.status == 'running') {
    //    hero.jump();
    //}
    //else if (gameStatus == "readyToReplay") {
    //    replay();
    //}
};

Engine.initLights = function () {
    for (var key in Engine.params.lights) {
        var tmpItem = Engine.params.lights[key];
        switch (tmpItem.type) {
            case 'ambient':
                Engine.lights[key] = new THREE.AmbientLight(tmpItem.color, tmpItem.intensity);
                break;
            case 'point':
                Engine.lights[key] = new THREE.PointLight(tmpItem.color, tmpItem.intensity, tmpIten.distance);
                break;
            case 'spot':
                Engine.lights[key] = new THREE.SpotLight(tmpItem.color, tmpItem.intensity, tmpIten.distance, tmpIten.angle, tmpIten.exponent);
                break;
            case 'directional':
                Engine.lights[key] = new THREE.AmbientLight(tmpItem.color, tmpItem.intensity);
                break;
            case 'area':
                Engine.lights[key] = new THREE.AreaLight(tmpItem.color, tmpItem.intensity);
                break;
        }

        Engine.scene.add(Engine.lights[key]);
        if (typeof (tmpItem.adjustFn) == 'object' && tmpItem.adjustFn) {
            tmpItem.adjustFn(Engine.lights[key]);
        }
    }
};

Engine.initModules = function () {
    for (var key in Engine.params.modules) {
        Engine.modules[key] = new Engine.params.modules[key];
        Engine.scene.add(Engine.modules[key].mesh);
    }
};

Engine.initAudios = function () {
    for (var key in Engine.params.audios) {
        Engine.audios[key] = new Audio(Engine.params.audios[key]);
    }

    if (Engine.params.backgroundAudio && Engine.params.backgroundAudio != '') {
        Engine.backgroundAudio = new Audio(Engine.params.backgroundAudio);
    }
};

Engine.initIntervals = function () {
    var currParams;
    for (var key in Engine.params.intervals) {
        currParams = Engine.params.intervals[key];
        Engine.intervals[key] = window.setInterval(currParams.fn, currParams.freq);
    }
};

Engine.clearIntervals = function () {
    for (var key in Engine.intervals) {
        window.clearIntervals(Engine.intervals[key]);
        Engine.params.intervals[key].clearFn();
    }
};

Engine.loop = function () {
    Enging.delta = Enging.clock.getDelta();
    var currModule = null;
    for (var key in Engine.modules) {
        currModule = Engine.modules[key];
        if (currModule && currModule.status == Engine._statusRun && currModule.visible) {
            if (Engine.status == Engine._statusRun) {
                currModule.updatePosition();
            }

            currModule.updatePose();
        }
    }

    if (Enging.checkCollision) {
        Enging.checkCollision(Engine.modules);
    }

    Enging.renderer.render(Enging.scene, Enging.camera);
    Engine.loopID = requestAnimationFrame(Engine.loop);
};

Engine.clearScene = function () {
    for (var key in Engine.modules) {
        Engine.scene.remove(Engine.modules[key].mesh);
        Engine.modules[key] = null;
    }
};

Engine.restartScene = function () {
    if (Engine.loopID) {
        cancelAnimationFrame(Engine.loopID);
    }

    Engine.status = Engine._statusRun;
    Engine.clearScene();
    Engine.initModules();
    for (var key in Engine.modules) {
        currModule = Engine.modules[key];
        if (currModule && currModule.visible) {
            currModule.preparingToRestart();
        }
    }

    Engine.clearIntervals();
    Engine.initIntervals();
    Engine.loop();
    if (Engine.backgroundAudio) {
        Engine.backgroundAudio.load();
        Engine.backgroundAudio.play();
    }
};

Engine.pauseScene = function () {
    Engine.status = Engine._statusPause;
    for (var key in Engine.modules) {
        currModule = Engine.modules[key];
        if (currModule && currModule.visible) {
            currModule.pause();
        }
    }
};

Engine.continueScene = function () {
    Engine.status = Engine._statusRun;
    for (var key in Engine.modules) {
        currModule = Engine.modules[key];
        if (currModule && currModule.visible) {
            currModule.continue();
        }
    }
};

Engine.startScene = function () {
    Engine.status = Engine._statusRun;
    Engine.initModules();
    Engine.initAudios();
    Engine.initIntervals();
    for (var key in Engine.modules) {
        currModule = Engine.modules[key];
        if (currModule && currModule.visible) {
            currModule.preparingToRestart();
        }
    }

    Engine.loop();
    if (Engine.backgroundAudio) {
        Engine.backgroundAudio.load();
        Engine.backgroundAudio.play();
    }
};

Engine.sceneOver = function () {
    Engine.status = Engine._statusOver;
    Engine.clearIntervals();
    for (var key in Engine.modules) {
        currModule = Engine.modules[key];
        if (currModule && currModule.visible) {
            currModule.over();
        }
    }

    if (Engine.params.overFn) {
        Engine.params.overFn();
    }
};

var Module = function () {
    this.status = Engine._statusRun;
    this.visable = true;
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.head = new THREE.Group();
};

Module.prototype.updatePosition = function () {

};

Module.prototype.updatePose = function () {

};

Module.prototype.preparingToRestart = function () {

};

Module.prototype.pause = function () {

};

Module.prototype.continue = function () {

};

Module.prototype.over = function () {

};