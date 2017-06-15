'use strict';

var Scene = {};

Scene.defaultDATA = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 1, 3, 3, 1, 0, 1, 3, 3, 3, 1, 0, 1, 1, 0, 1, 3, 3, 3, 1, 0, 1, 3, 3, 1, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
	[3, 3, 3, 3, 3, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 1, 0, 1, 1, 0, 1, 1, 1, 3, 3, 1, 1, 1, 0, 1, 1, 0, 1, 3, 3, 3, 3, 3],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 6, 0, 0, 6, 1, 3, 3, 3, 3, 3, 3, 1, 6, 0, 0, 6, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
	[3, 3, 3, 3, 3, 1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 3, 3, 3, 3, 3],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
	[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
	[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	
];

Scene.isFirstMonster = false;

Scene.mapDATA = [];
Scene._CALCMOVEPATH = [];
Scene.randomObj = [];
Scene.targetPos = { x: 13, y: 16 };

 Scene.monsterParams = [
	{ x: 6, y: 14, c: null },
	{ x: 9, y: 14, c: null },
	{ x: 18, y: 14, c: null },
	{ x: 21, y: 14, c: null }
];

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
	Scene.initPlayer(12, 5);

};

Scene.initMap = function () {
	var tmpX, tmpZ, tmpKey;
	var halfWidth = _colCount * _itemSize / 2;
	var halfHeight = _rowCount * _itemSize / 2;
	var goods = [];
	var questionMarkCount = 0;
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
			} else if (Scene.defaultDATA[i][j] == 6) {

				questionMarkCount++;

				var tmpBean = new Bean();
				tmpBean.type = 'especialBean';

				tmpBean.mesh.visible = false;

				var tmpQuestionMark = new QuestionMark();

				Engine.addModuleObject(tmpQuestionMark, tmpX, null, tmpZ);
				tmpKey = Engine.addModuleObject(tmpBean, tmpX, null, tmpZ);

				Scene.randomObj.push({ name: "questionmark" + questionMarkCount, obj: tmpQuestionMark });
				Scene.randomObj.push({ name: "bean" + questionMarkCount, obj: tmpBean });

			}

			rowData.push({ t: Scene.defaultDATA[i][j], s: tmpKey, v: true });
		}

		Scene.mapDATA.push(rowData);
	}

	Goods.updatePose(goods);

	Scene.initMonster(Scene.monsterParams );

	for (var i = 8; i < Scene.randomObj.length; i++) {
		Scene.randomObj[i].obj.mesh.visible = false;
	}
};

Scene.initPlayer = function (x, y) {
	var player = new PACMan('study', Scene.mapDATA);
	player._stopWhenComplete = false;
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

		Scene.randomObj.push({ name: 'monster' + i, obj: monster });
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

Scene.setRandomObjectStaus = function () {

	var initRandomValue = Math.floor(Math.random() * 2);

	Scene.randomObj[0].obj.mesh.visible = false;
	Scene.randomObj[2].obj.mesh.visible = false;
	Scene.randomObj[4].obj.mesh.visible = false;
	Scene.randomObj[6].obj.mesh.visible = false;

	if (initRandomValue == 0) {
		Scene.randomObj[1].obj.mesh.visible = true;
		Scene.randomObj[3].obj.mesh.visible = true;
		Scene.randomObj[5].obj.mesh.visible = false;
		Scene.randomObj[7].obj.mesh.visible = false;

		Scene.randomObj[8].obj.mesh.visible = false;
		Scene.randomObj[9].obj.mesh.visible = false;
		Scene.randomObj[10].obj.mesh.visible = true;
		Scene.randomObj[11].obj.mesh.visible = true;
		Scene.isFirstMonster = false;

	} else {
		Scene.randomObj[1].obj.mesh.visible = false;
		Scene.randomObj[3].obj.mesh.visible = false;
		Scene.randomObj[5].obj.mesh.visible = true;
		Scene.randomObj[7].obj.mesh.visible = true;

		Scene.randomObj[8].obj.mesh.visible = true;
		Scene.randomObj[9].obj.mesh.visible = true;
		Scene.randomObj[10].obj.mesh.visible = false;
		Scene.randomObj[11].obj.mesh.visible = false;
		Scene.isFirstMonster = true;
	}

};

Scene.setRandomObjectOnlyQuestionMarkVisible = function () {
	Scene.randomObj[0].obj.mesh.visible = true;
	Scene.randomObj[2].obj.mesh.visible = true;
	Scene.randomObj[4].obj.mesh.visible = true;
	Scene.randomObj[6].obj.mesh.visible = true;

	Scene.randomObj[1].obj.mesh.visible = false;
	Scene.randomObj[3].obj.mesh.visible = false;
	Scene.randomObj[5].obj.mesh.visible = false;
	Scene.randomObj[7].obj.mesh.visible = false;
	Scene.randomObj[8].obj.mesh.visible = false;
	Scene.randomObj[9].obj.mesh.visible = false;
	Scene.randomObj[10].obj.mesh.visible = false;
	Scene.randomObj[11].obj.mesh.visible = false;
};

Scene.ResetConfig = function () {
	Scene.setRandomObjectStaus();
	Scene._CALCMOVEPATH = [];
};

Scene.reset = function () {
	Scene._CALCMOVEPATH = [];

	Engine.resetScene();
	Scene.resetMap();
	Scene.resetRandomObj();

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

Scene.resetRandomObj = function () {

	for (var key in Engine.modules) {

		switch (Engine.modules[key].type) {
			case "questionmark":
				Engine.modules[key].mesh.visible = true;
				Engine.modules[key]
				break;

			case "monster":
				Engine.modules[key].mesh.visible = false;
				break;

			case "especialBean":
				Engine.modules[key].mesh.visible = false;
				break;
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
	var curOrientation = Scene.getPlayer().orientation;

	if (Scene._CALCMOVEPATH.length > 0) {
		curOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation;
		curX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x ;
		curY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
	}

	switch (curOrientation) {
		case 0:
		case 2:
			curX = curX + (curOrientation == 0 ? 1 : -1) * steps;
			break;

		case 1:
		case 3:
			curY = curY + (curOrientation == 1 ? -1 : 1) * steps;
			break;
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

	if (Scene._CALCMOVEPATH.length == 0) {
		var orientationObj = Scene.getPlayer().orientation + 1;
		orientationObj = (orientationObj == 4 ? 0 : orientationObj);

		var pathItemOri = {
			x: Scene.getPlayer().coord.x,
			y: Scene.getPlayer().coord.y,
			orientation: orientationObj
		};

		Scene._CALCMOVEPATH.push(pathItemOri);

	} else {

		var orientationObj = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation + 1;
		orientationObj = (orientationObj == 4 ? 0 : orientationObj);

		var pathItemOri = {
			x: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x,
			y: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y,
			orientation: orientationObj
		};

		Scene._CALCMOVEPATH.push(pathItemOri);
	}
};

Scene.TurnRight = function (output) {
	if (output === true) {
		return 'this.turnRight(' + Engine.getModuleObject('pacman').orientation + ');'
	} else {
		Scene.addModuelPath('pacman', 'tr');
	}

	if (Scene._CALCMOVEPATH.length == 0) {
		var orientationObj = Scene.getPlayer().orientation - 1;
		orientationObj = (orientationObj == -1 ? 3 : orientationObj);

		var pathItemOri = {
			x: Scene.getPlayer().coord.x,
			y: Scene.getPlayer().coord.y,
			orientation: orientationObj
		};

		Scene._CALCMOVEPATH.push(pathItemOri);

	} else {

		var orientationObj = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation - 1;
		orientationObj = (orientationObj == -1 ? 3 : orientationObj);

		var pathItemOri = {
			x: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x,
			y: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y,
			orientation: orientationObj
		};

		Scene._CALCMOVEPATH.push(pathItemOri);
	}
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
	return true;
	var nextX, nextY, currentX, currentY, currentOrientation;

	if (Scene._CALCMOVEPATH.length != 0) {
		currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x;
		currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
		currentOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation;
	}

	switch (currentOrientation) {
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
	if (Scene.mapDATA[nextY][nextX].t == 1) {
		return true;
	} else {
		return false;
	}

};

Scene.startGame = function () {

	var code = Blockly.JavaScript.workspaceToCode(WorkScene.workspace);

	if (Scene.checkBlockly(code)) {
		Scene.start();
	}
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
	var nextX, nextY, currentX, currentY;
	var pathItemOri;

	if (Scene._CALCMOVEPATH.length == 0) {

		pathItemOri = {
			x: Scene.getPlayer().coord.x,
			y: Scene.getPlayer().coord.y
		};

		currentX = Scene.getPlayer().coord.x;
		currentY = Scene.getPlayer().coord.y;
		Scene._CALCMOVEPATH.push(pathItemOri);

	} else {
		pathItemOri = {
			x: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x + 1,
			y: Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y
		};

		Scene._CALCMOVEPATH.push(pathItemOri);

		currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x;
		currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
	}

	var targetPos = Scene.targetPos;

	if (targetPos.x == currentX && targetPos.y == currentY) {
		return false;
	} else {
		return true;
	}

};

Scene.checkBlockly = function (code) {
	var result = true;

	var strtmp = code.replace(/"/, "\"");
	var strtmp1 = strtmp.replace(/  /, '');
	var strtmp2 = strtmp1.replace(/ /, '');
	var sourceStr = strtmp2.replace(/\n/g, '');

	var x1 = findStringPostion(sourceStr, "{", 0) + 1;
	var x2 = findStringPostion(sourceStr, "{", 1) + 1;
	var y1 = findStringPostion(sourceStr, "}", 0);
	var y2 = findStringPostion(sourceStr, "}", 1);

	var ifx = sourceStr.indexOf("if");
	var tarStr1 = sourceStr.substring(x1, y1);
	var tarStr2 = sourceStr.substring(x2, y2);

	if (ifx == -1) {
		Scene.setRandomObjectOnlyQuestionMarkVisible();
		Scene.stepFaild();
		result = false;
	} else {
		if (tarStr1 == "") {
			Scene.setRandomObjectOnlyQuestionMarkVisible();
			Scene.stepFaild();
			result = false;
		} else if (tarStr2 == "") {
			Scene.setRandomObjectOnlyQuestionMarkVisible();
			Scene.stepFaild();
			result = false;
		}
	}

	return result;
};

function findStringPostion(searchString, searchedString, num) {
	var x = searchString.indexOf(searchedString);
	for (var i = 0; i < num; i++) {
		x = searchString.indexOf(searchedString, x + 1);
	}
	return x;
};

Scene.isBean = function () {
	var nextX, nextY, currentX, currentY, currentOrientation;
	if (Scene._CALCMOVEPATH.length != 0) {
		currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x;
		currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
		currentOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation;
	} else {
		var player = Scene.getPlayer();
		currentX = player.coord.x;
		currentY = player.coord.y;
		currentOrientation = player.orientation;
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
	if (Scene.checkPointUsedByBean(nextX, nextY)) {
		return true;
	} else {
		return false;
	}
};

Scene.isMonster = function () {
	var nextX, nextY, currentX, currentY, currentOrientation;
	if (Scene._CALCMOVEPATH.length != 0) {
		currentX = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].x;
		currentY = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].y;
		currentOrientation = Scene._CALCMOVEPATH[Scene._CALCMOVEPATH.length - 1].orientation;
	} else {
		var player = Scene.getPlayer();
		currentX = player.coord.x;
		currentY = player.coord.y;
		currentOrientation = player.orientation;
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
	if (Scene.checkPointUsedByMonster(nextX, nextY)) {
		return true;
	} else {
		return false;
	}
};

Scene.checkPointUsedByBean = function (x, y) {
	if (Scene.defaultDATA[y][x] == 0) {
		return true;
	}

	return false;
};

Scene.checkPointUsedByMonster = function (x, y) {
	if (x == Scene.monsterParams[0].x && y == Scene.monsterParams[0].y) {
		return Scene.isFirstMonster;
	} else if (x == Scene.monsterParams[1].x && y == Scene.monsterParams[1].y) {
		return !Scene.isFirstMonster
	} else {
		return false;
	}
};