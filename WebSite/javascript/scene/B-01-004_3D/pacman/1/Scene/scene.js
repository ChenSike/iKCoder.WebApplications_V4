'use strict';

var Scene = {};

Scene.defaultDATA = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 1, 2, 1, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

Scene.mapDATA = [];

Scene._CALCMOVEPATH = [];
Scene.targetPos = { x: 5, y: 2 };

Scene.initEnvironment = function (containerId) {
    Scene.initGlobalParams();
    var params = {
        fog: null,
        camera: {
            fov: 45,
            aspect: 1,
            near: 1,
            far: 2000,
            px: 0,
            py: _itemSize * _rowCount * 0.9,
            pz: _itemSize * _rowCount * 1.2,
            vector: { x: 0, y: 0, z: 0 }
        },
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
        lights: {
            globalLight: { type: 'ambient', color: '#ffffff', intensity: 0.25, adjustFn: null },
            pointLight: {
                type: 'point',
                color: '#ffffff',
                intensity: 0.85,
                distance: 0,
                adjustFn: function (pointLight) {
                    pointLight.position.x = 0;
                    pointLight.position.y = 720;
                    pointLight.position.z = 720;
                }
            }
        },
        modules: [
            Floor
        ],
        //backgroundAudio: ['../resource/sounds/sound_1.mp3'],
        //grid: {
        //    type: 'xz',
        //    line: '#000000',
        //    base: '#FF0000',
        //    step: 35,
        //    scope: 700
        //}
        grid: null,
        sizes: { w: 1440, h: 1440 }
    };

    Engine.initScreenAnd3D(containerId, params);
    Engine.prepareForStart();
    Scene.initMap();
    Scene.initPlayer(1, 6);
    var monsterParams = [
        //{ x: 3, y: 3, c: null },
        //{ x: 3, y: 11, c: null },
        //{ x: 11, y: 3, c: null },
        //{ x: 11, y: 11, c: null }
    ];
    Scene.initMonster(monsterParams);
};

Scene.initMap = function () {
    var tmpX, tmpZ, tmpKey;
    var halfWidth = _colCount * _itemSize / 2;
    var halfHeight = _rowCount * _itemSize / 2;
    var goods = [];
    for (var i = 0; i < Scene.defaultDATA.length; i++) {
        tmpZ = i * _itemSize - halfWidth + _itemSize / 2;
        var rowData = [];
        for (var j = 0; j < Scene.defaultDATA[i].length; j++) {
            tmpX = j * _itemSize - halfHeight + _itemSize / 2;
            tmpKey = '';
            if (Scene.defaultDATA[i][j] == 0) {
                tmpKey = Engine.addModuleObject(new Bean(), tmpX, null, tmpZ);
            } else if (Scene.defaultDATA[i][j] == 1) {
                tmpKey = Engine.addModuleObject(new Wall(), tmpX, null, tmpZ);
            } else if (Scene.defaultDATA[i][j] == 2) {
                var newGoods = new Goods();
                goods.push(newGoods);
                tmpKey = Engine.addModuleObject(newGoods, tmpX, null, tmpZ);
            }

            rowData.push({ t: Scene.defaultDATA[i][j], s: tmpKey, v: true });
        }

        Scene.mapDATA.push(rowData);
    }

    Goods.updatePose(goods);
};

Scene.initPlayer = function (x, y) {
    var player = new PACMan('study', Scene.mapDATA);
    Engine.addModuleObject(player, x, null, y);
    player.setPosition(x, y);
    if (Scene.mapDATA[y][x].t == 0 || Scene.mapDATA[y][x].t == 2) {
        Engine.getModuleObject(Scene.mapDATA[y][x].s).mesh.visible = false;
    }

    Scene.mapDATA[y][x].v = false;
    player.setPathCompleteFn(function () {
        if (Scene.targetPos.x == player.coord.x && Scene.targetPos.y == player.coord.y) {
            Scene.stepComplete();
        } else {
            Scene.stepFaild();
        }
    });
};

Scene.initMonster = function (params) {
    var monsters = [];
    for (var i = 0; i < params.length; i++) {
        var monster = new Monster('study', Scene.mapDATA);
        monsters.push(monster);
        Engine.addModuleObject(monster, params[i].x, null, params[i].y);
        monster.setPosition(params[i].x, params[i].y);
        if (Scene.mapDATA[params[i].y][params[i].x].t == 0 || Scene.mapDATA[params[i].y][params[i].x].t == 2) {
            Engine.getModuleObject(Scene.mapDATA[params[i].y][params[i].x].s).mesh.visible = false;
        }

        Scene.mapDATA[params[i].y][params[i].x].v = false;
    }

    Monster.updatePose(monsters);
};

Scene.initGlobalParams = function () {
    _colCount = Scene.defaultDATA[0].length;
    _rowCount = Scene.defaultDATA.length;
};

Scene.initModuelPath = function (moduleType) {
    Engine.modules[moduleType].initMovePath();
};

Scene.addModuelPath = function (moduleType, type, value) {
    Engine.modules[moduleType].addMovePath(type, value);
};

Scene.turnLeft = function (moduleType) {
    Engine.modules[moduleType].turnLeft();
};

Scene.turnRight= function (moduleType) {
    Engine.modules[moduleType].turnRight();
};

Scene.getPlayer = function () {
    return Engine.modules['pacman'];
};

Scene.getMonsters = function () {
    var monstres = [];
    for (var key in Engine.modules) {
        if (Engine.modules[key].type == 'monster') {
            monstres.push(Engine.modules[key]);
        }
    }

    return monstres;
};

Scene.getGoods = function () {
    var goods = [];
    for (var key in Engine.modules) {
        if (Engine.modules[key].type == 'goods') {
            goods.push(Engine.modules[key]);
        }
    }

    return goods;
};

Scene.start = function () {
    Engine.startScene();
};

Scene.reset = function () {
	Scene._CALCMOVEPATH = [];
    Engine.rersetScene();
    Scene.resetMap();
    Scene.getPlayer().reset();
    var x = Scene.getPlayer().defaultCoord.x;
    var y = Scene.getPlayer().defaultCoord.y;
    if (Scene.mapDATA[y][x].t == 0 || Scene.mapDATA[y][x].t == 2) {
        Engine.getModuleObject(Scene.mapDATA[y][x].s).mesh.visible = false;
    }

    Scene.mapDATA[y][x].v = false;
    var monstres = Scene.getMonsters();
    for (var i = 0; i < monstres.length; i++) {
        monstres[i].reset();
        var x = monstres[i].defaultCoord.x;
        var y = monstres[i].defaultCoord.y;
        if (Scene.mapDATA[y][x].t == 0 || Scene.mapDATA[y][x].t == 2) {
            Engine.getModuleObject(Scene.mapDATA[y][x].s).mesh.visible = false;
        }

        Scene.mapDATA[y][x].v = false;
    }
};

Scene.resetMap = function () {
    for (var i = 0; i < Scene.mapDATA.length; i++) {
        for (var j = 0; j < Scene.mapDATA[i].length; j++) {
            Scene.mapDATA[i][j].v = true;
        }
    }
};

Scene.resetSize = function () {
    try {
        Engine.calcWorldScale();
    }
    catch (ex) {

    }
};

Scene.move = function (orientation, steps) {
    Scene.addModuelPath('pacman', 'tt', orientation.toLowerCase());
    Scene.addModuelPath('pacman', 'm', steps);
	var pathItemOri = {
        x : Engine.modules["pacman"].coord.x,
        y : Engine.modules["pacman"].coord.y,
        orientation : Engine.modules["pacman"].orientation
    };
    if (Scene._CALCMOVEPATH.length == 0){
    Scene._CALCMOVEPATH.push(pathItemOri);
}
    var pathItemNext = {
        x : Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].x,
        y : Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].y,
        orientation : Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].orientation
    };
	
	       switch (pathItemNext.orientation) {
            case 0:
            case 2:
                pathItemNext.x = (pathItemOri.orientation == 0 ? 1 : -1) * steps + pathItemNext.x;
                pathItemNext.y = pathItemNext.y;
                break;
            case 1:
            case 3:
                pathItemNext.x = pathItemNext.x;
                pathItemNext.y = (pathItemOri.orientation == 1 ? -1 : 1) * steps + pathItemNext.y;
                break;
        }
		Scene._CALCMOVEPATH.push(pathItemNext);
	
};

Scene.TurnLeft = function () {
    Scene.addModuelPath('pacman', 'tl', 0);
};

Scene.TurnRight = function () {
	 Scene.addModuelPath('pacman', 'tr', 0);
};

Scene.moveForward = function () {
	Scene.addModuelPath('pacman', 'm', 4);
		var pathItemOri = {
        x : Engine.modules["pacman"].coord.x,
        y : Engine.modules["pacman"].coord.y,
        orientation : Engine.modules["pacman"].orientation
    };
    if (Scene._CALCMOVEPATH.length == 0){
    Scene._CALCMOVEPATH.push(pathItemOri);
}
    var pathItemNext = {
        x : Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].x,
        y : Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].y,
        orientation : Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].orientation
    };
	
	       switch (pathItemNext.orientation) {
            case 0:
            case 2:
                pathItemNext.x = (pathItemOri.orientation == 0 ? 1 : -1) * 4 + pathItemNext.x;
                pathItemNext.y = pathItemNext.y;
                break;
            case 1:
            case 3:
                pathItemNext.x = pathItemNext.x;
                pathItemNext.y = (pathItemOri.orientation == 1 ? -1 : 1) * 4 + pathItemNext.y;
                break;
        }
		Scene._CALCMOVEPATH.push(pathItemNext);
};

Scene.isWall = function () {
	var nextX, nextY, currentX, currentY, currentOrientation;
	
	 if (Scene._CALCMOVEPATH.length !=0){
        currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].x;
        currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].y;
        currentOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length-1].orientation;
    }
	
    switch (currentOrientation)
     {
         case 0: 
            var nextX = currentX + 1;
            var nextY = currentY;
            break;
        case 1:
            var nextX = currentX;
            var nextY = currentY - 1;
            break;
        case 2:
            var nextX = currentX - 1;
            var nextY = currentY;
            break;
        case 3:
            var nextX = currentX;
            var nextY = currentY + 1;
            break;
    }
    if (Scene.mapDATA[nextY][nextX].t == 1){
        return true;
    }else{
        return false;
    }
	
};

Scene.startGame = function () {
    Scene.start();
};
