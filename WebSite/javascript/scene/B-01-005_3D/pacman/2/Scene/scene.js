'use strict';

var Scene = {};

Scene.defaultDATA = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

Scene.mapDATA = [];
Scene._CALCMOVEPATH = [];
Scene.targetPos = { x: 7, y: 4 };

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
	Scene.initPlayer(1, 12);
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

Scene.getPlayer = function () {
	return Engine.modules['pacman'];
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
	Engine.resetScene();
	Scene.resetMap();
	Scene.getPlayer().reset();
	var x = Scene.getPlayer().defaultCoord.x;
	var y = Scene.getPlayer().defaultCoord.y;
	if (Scene.mapDATA[y][x].t == 0 || Scene.mapDATA[y][x].t == 2) {
		Engine.getModuleObject(Scene.mapDATA[y][x].s).mesh.visible = false;
	}

	Scene.mapDATA[y][x].v = false;

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

Scene.move = function (steps) {
	Scene.addModuelPath('pacman', 'm', steps);

	var curX = Scene.getPlayer().coord.x;
	var curY = Scene.getPlayer().coord.y;
	var curOrientation = 0;

	if (Scene._CALCMOVEPATH.length > 0) {
		curOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation;

		switch (curOrientation) {
			case 0:
			case 2:
				curX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x + (curOrientation == 0 ? 1 : -1) * steps;
				break;

			case 1:
			case 3:
				curX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x +(curOrientation == 1 ? 1 : -1) * steps;
				break;
		}
	}

	var pathItemOri = {
		x: curX,
		y: curY,
		orientation: curOrientation
	};

	Scene._CALCMOVEPATH.push(pathItemOri);
};

Scene.TurnLeft = function (output) {
	if (output === true) {
		return 'this.turnLeft(' + Engine.getModuleObject('pacman').orientation + ');';
	} else {
		Scene.addModuelPath('pacman', 'tl');
	}

	var orientationObj = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation + 1;
	orientationObj = (orientationObj == 4 ? 0 : orientationObj);

	var pathItemOri = {
		x: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x,
		y: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y,
		orientation: orientationObj
	};

	Scene._CALCMOVEPATH.push(pathItemOri);
};

Scene.TurnRight = function (output) {
	if (output === true) {
		return 'this.turnRight(' + Engine.getModuleObject('pacman').orientation + ');'
	} else {
		Scene.addModuelPath('pacman', 'tr');
	}

	var orientationObj = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation - 1;
	orientationObj = (orientationObj == -1 ? 3 : orientationObj);

	var pathItemOri = {
		x: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x,
		y: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y,
		orientation: orientationObj
	};

	Scene._CALCMOVEPATH.push(pathItemOri);
};

Scene.moveForward = function () {
	Scene.addModuelPath('pacman', 'm', -1);
	var pathItemOri = {
		x: Engine.modules["pacman"].coord.x,
		y: Engine.modules["pacman"].coord.y,
		orientation: Engine.modules["pacman"].orientation
	};
	if (Scene._CALCMOVEPATH.length == 0) {
		Scene._CALCMOVEPATH.push(pathItemOri);
	}
	var pathItemNext = {
		x: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x,
		y: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y,
		orientation: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation
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
	if (Scene._CALCMOVEPATH.length != 0) {
		currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x;
		currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
		currentOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation;
	}
	switch (currentOrientation) {
		case 0:
			nextX = currentX + 1;
			nextY = currentY;
			break;
		case 2:
			nextX = currentX - 1;
			nextY = currentY;
			break;
		case 1:
			nextX = currentX;
			nextY = currentY - 1;
			break;
		case 3:
			nextX = currentX;
			nextY = currentY + 1;
			break;
	}

	if (Scene.checkPointUsedByWall(nextX, nextY)) {
		return true;
	}
	else {
		return false;
	}
};

Scene.checkPointUsedByWall = function (x, y) {
	if (Scene.defaultDATA[y][x] == 1) {
		return true;
	}

	return false;
};

Scene.startGame = function () {
	Scene.start();
};


Scene.setFunctionWhenWall = function (logicStr) {
	var arr = logicStr.split(';');
	var newCode = '';
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].indexOf('Scene.TurnLeft') >= 0) {
			newCode += Scene.TurnLeft(true);
		} else if (arr[i].indexOf('Scene.TurnRight') >= 0) {
			newCode += Scene.TurnRight(true);
		}
	}

	var tmpFn = function () {
		eval(newCode);
		return false;
	};

	Engine.getModuleObject('pacman').setActionForCollideWallSeq(tmpFn);
	Engine.getModuleObject('pacman').setActionForCollideGoods(function () { return true; });
};

Scene.NotEatRedBeans = function () {

	var nextX, nextY, currentX, currentY, currentOrientation;
	var pathItemOri = {
		x: Scene.getPlayer().coord.x,
		y: Scene.getPlayer().coord.y,
		orientation: Scene.getPlayer().orientation
	};

	if (Scene._CALCMOVEPATH.length == 0) {
		Scene._CALCMOVEPATH.push(pathItemOri);
		currentX = Scene.getPlayer().coord.x;
		currentY = Scene.getPlayer().coord.y;
	} else {
		currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x;
		currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
	}

var targetPos = Scene.targetPos;
	if (Scene.isWall()) {
		return false;
	} else {
		if (targetPos.x == currentX && targetPos.y == currentY) {
			return false;
		} else {
			return true;
		}
	}
};

