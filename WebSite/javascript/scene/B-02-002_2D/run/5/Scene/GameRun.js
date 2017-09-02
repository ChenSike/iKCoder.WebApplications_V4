'use strict';

var GAME = GAME || {};

var i_GameRender;
var i_stage;
var i_person;
var i_actionPool = {};
var i_status = "0";
var i_requestAnimationID;

var i_status_control = "0";
var i_person_ClipView;
var i_person_currentStandStoneIndex = 0;

var i_ground_position_Y;
var i_background_default_width = 1286;
var i_background_default_height = 640;
var i_senceWidth;
var i_senceHeight;

var i_curvemap = {};

var i_curve_a = 0.016;
var i_curve_b = 3.2;
var i_curve_c = 640;

var game;
var interactive = true;
var width = 800;
var height = 600;

PIXI.Texture.fromFrameId = PIXI.Texture.fromFrame;

function ActionNode() {
	this.index = 0;
	this.isJump = false;
	this.isPickUp = false;
	this.isBarrier = false;
	this.curveA = 0;
	this.curveB = 0;
};


function getActionPoolLength() {
	var arr = Object.keys(i_actionPool);
	return arr.length;
};


function getCurvemapPoolLength() {
	var arr = Object.keys(i_curvemap);
	return arr.length;
};


function onInitRun(senceWidth, senceHeight) {
	i_senceWidth = senceWidth;
	i_senceHeight = senceHeight;
	IKCoderSenceRun_Begin();
};


function CurveTargetNode() {
	this.step = 0;
	this.target_x = 0;
	this.target_y = 0;
};


function IKCoderSenceRun_Set_AddPickup() {
	var tmpActionNode = new ActionNode();
	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.isPickUp = true;

	i_actionPool[tmpActionNode.index] = tmpActionNode;
};

function IKCoderSenceRun_Set_AddJumpPickup() {
	var tmpActionNode = new ActionNode();
	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.isPickUp = true;
	tmpActionNode.isJump = true;
	tmpActionNode.curveA = i_curve_a;
	tmpActionNode.curveB = i_curve_b;

	i_actionPool[tmpActionNode.index] = tmpActionNode;
};


function IKCoderSenceRun_Set_AddJumpBarrier() {
	var tmpActionNode = new ActionNode();

	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.isJump = true;
	tmpActionNode.isBarrier = true;
	tmpActionNode.curveA = i_curve_a;
	tmpActionNode.curveB = i_curve_b;

	i_actionPool[tmpActionNode.index] = tmpActionNode;
};


function IKCoderSenceRun_Set_AddJump() {
	var tmpActionNode = new ActionNode();

	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.isJump = true;
	tmpActionNode.curveA = i_curve_a;
	tmpActionNode.curveB = i_curve_b;

	i_actionPool[tmpActionNode.index] = tmpActionNode;
};


function IKCoderSenceRun_RunActions() {

	if (getActionPoolLength(i_actionPool) == 0) {
		Scene.stepFaild();
		IKCoderSenceRun_Reset();
		return;
	}

	onTap();
	game.steve.steveActionPools = i_actionPool;

};


function IKCoderSenceRun_Set_SwitchToStart() {
	i_status_control = "1";
};


function IKCoderSenceRun_Reset() {

	i_actionPool = {};
	game.steve.steveActionCount = 0;
	game.steve.parabolaXPosition = 0;
	game.steve.enemiesCount = 0;
	game.pickupManager.allPickups = [];
	game.steve.steveActionPools = {};
	game.DELTA_TIME = 1;
	game.steve.baseSpeed = 0;
	//game.segmentManager.reset(true);
};


function IKCoderVisibleChildren() {
	for (var i = 0; i < i_stage.children.length; i++) {
		if (!i_stage.children[i].visible) {
			i_stage.children[i].visible = true;
		}
	}
};


function IKCoderSenceRun_Begin() {
	document.body.scroll = "no";

	i_GameRender = PIXI.autoDetectRenderer(i_background_default_width, i_background_default_height);

	var i_loader = new PIXI.AssetLoader([
		"image/scene/run/stretched_hyper_tile.jpg",
		"image/scene/run/SplashAssets.json",
		"image/scene/run/WorldAssets-hd.json",
		"image/scene/run/HudAssets-hd.json",
		"image/scene/run/PixiAssets-hd.json",
		"image/scene/run/iP4_BGtileEx.jpg",
		"image/scene/run/blackSquare.jpg",
		"image/scene/run/PersonalBest.png",
		"image/scene/run/pixieRevised_controls.png"
	]);


	i_loader.addEventListener('onComplete', function (event) {
		init();
	});

	i_loader.load();
};


function IKCoderSetCurve(maxPonitRateForA, maxPonitLengthForB) {
	var middle_X, middle_Y;
	//middle_X = i_curvemap[1].target_x / 2;

	middle_X = 50;
	middle_Y = 477;
	calc_curve_AB(middle_X, middle_Y, maxPonitRateForA, maxPonitLengthForB);
};


function IKCoderSenceRun_Person_RunStep(actionItemIndex) {
	if (i_person_ClipView.position.x >= i_curvemap[i_person_currentStandStoneIndex + 1].target_x) {
		requestAnimationFrame(IKCoderSenceRun_RunActions);
		IKCoderSenceRun_Person_StopAnimation();
		i_actionPool[actionItemIndex] = null;
		i_person_currentStandStoneIndex++;
	}
	else {
		cancelAnimationFrame(i_requestAnimationID);
		IKCoderSenceRun_Person_PlayAnimation();
		i_person_ClipView.position.x = i_person_ClipView.position.x + 2;
	}
};


function IKCoderSenceRun_Person_StopAnimation() {
	i_person_ClipView.stop();
};


function IKCoderSenceRun_Person_PlayAnimation() {
	i_person_ClipView.play();
};


function calc_curve_AB(random_X, random_Y, maxPonitRateForA, maxPonitLengthForB) {
	i_curve_a = random_Y / (random_X * random_X);
	if (maxPonitRateForA > 0) {
		i_curve_a = i_curve_a * maxPonitRateForA;
	}

	i_curve_b = -2 * i_curve_a * random_X;

	if (maxPonitLengthForB > 0) {
		i_curve_b = i_curve_b * maxPonitLengthForB;
	}

};


function calc_curve_Y(current_X) {
	return i_curve_a * (current_X * current_X) + i_curve_b * current_X + i_ground_position_Y;
};


function IKCoderSenceRun_Resize(width, height) {
	i_GameRender.view.style.width = width + "px";
	i_GameRender.view.style.height = height + "px";
};


function init() {

	game = new GAME.RprEngine();

	Scene.container.append(game.view.renderer.view);
	//document.body.appendChild(game.view.renderer.view);
	//game.view.renderer.view.style.position = "absolute";
	//game.view.renderer.view.webkitImageSmoothingEnabled = false;
	GAME.viewWidth = i_senceWidth;

	requestAnimFrame(update);

	//game.onGameover = onGameover;

	resize(i_senceWidth, i_senceHeight);

};


function resize(viewWidth, viewHeight) {

	var h = 640;
	var width = viewWidth;
	var height = viewHeight;
	var ratio = height / h;

	if (game) {
		var view = game.view.renderer.view;
		//view.style.height = height + "px";
		//view.style.width = width + "px";

		view.style.height = h * ratio + "px";

		var newWidth = (width / ratio);

		view.style.width = width + "px";

		game.view.resize(newWidth, h);
	}

	//GAME.width = width;
	//GAME.height = height;

	GAME.width = (width / ratio);
	GAME.height = h;
};

function update() {
	game.update();
	requestAnimFrame(update);
};

function onTap() {
	
	interactive = false;
	game.segmentManager.reset(true);
	game.steve.normalMode();
	game.steve.position.x = 0;
	game.steve.baseSpeed = 5;
	//game.steve.countPosition = 0;
	//game.steve.stevePosition = { x: 0, y: 0 };

	GAME.camera.x = game.steve.position.x - 100;

	game.reset();
	game.start();
};
