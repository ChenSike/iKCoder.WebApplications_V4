'use strict';

var i_GameRender;
var i_stage;
var i_person;
var i_spritesObjectsPool = {};
var i_actionPool = {};
var i_status = "0";
var i_requestAnimationID;

var i_status_control = "0";

var i_person_default_position_y;
var i_person_default_position_x;
var i_person_ClipView;
var i_person_currentPosition_X;
var i_person_targetStep;
var i_person_currentStep = 0;
var i_person_currentStandStoneIndex = 0;
var i_person_jumpTimes = 0;
var i_person_jumpFlag = false;

var i_ground_position_Y;
var i_background_default_width = 1286;
var i_background_default_height = 640;
var i_senceWidth;
var i_senceHeight;

var i_animation_shine_count = 0;
var i_collisionmap = {};
var i_curvemap = {};

var i_curve_a = 0.016;
var i_curve_b = 3.2;
var i_curve_c = 640;

var i_PixiAssets_json = "javascript/scene/image/run/PixiAssets-hd.json";
var i_shine_img = "javascript/scene/image/run/shine.fw.png";
var i_candy_img = "javascript/scene/image/run/candy.fw.png";
var i_box_img = "javascript/scene/image/run/box.fw.png";
var i_stone_img = "javascript/scene/image/run/stone.fw.png";
var i_ip4BGtile_img = "javascript/scene/image/run/iP4_BGtile.jpg";


function ActionNode() {
	this.index = 0;
	this.actionRefMethod = null;
	this.checkReturn = false;
	this.checkReturnCallback = null;
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

function CollisionNode() {
	this.position_x = 0;
	this.position_y = 0;
	this.width = 0;
	this.height = 0;
	this.isPickup = false;
	this.isEndPoint = false;
	this.spriteObject = null;
};

function CurveTargetNode() {
	this.step = 0;
	this.target_x = 0;
	this.target_y = 0;
};

function IKCoderSenceRun_Set_AddRun() {
	var tmpActionNode = new ActionNode();
	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.actionRefMethod = IKCoderSenceRun_Person_RunStep;
	tmpActionNode.checkReturn = false;
	i_actionPool[tmpActionNode.index] = tmpActionNode;
};

function IKCoderSenceRun_Set_AddJudegBarrier(callbackparam) {
	var tmpActionNode = new ActionNode();
	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.actionRefMethod = IKcoderSenceRun_Get_JudegeBarrier;
	tmpActionNode.checkReturn = true;
	if (callbackparam == "Scene.CallIKCoderRun_Set_RunningStep();")
		tmpActionNode.checkReturnCallback = IKCoderSenceRun_Person_RunStep;
	else if (callbackparam == "Scene.CallIKCoderRun_Set_JumpStep();")
		tmpActionNode.checkReturnCallback = IKCoderSenceRun_Set_JumpSteps;
	else
		tmpActionNode.checkReturnCallback = null;
	i_actionPool[tmpActionNode.index] = tmpActionNode;
};

function IKCoderSenceRun_Set_AddJump() {
	var tmpActionNode = new ActionNode();
	tmpActionNode.index = getActionPoolLength();
	tmpActionNode.actionRefMethod = IKCoderSenceRun_Set_JumpSteps;
	tmpActionNode.checkReturn = false;
	tmpActionNode.curveA = i_curve_a;
	tmpActionNode.curveB = i_curve_b;

	i_actionPool[tmpActionNode.index] = tmpActionNode;
};

function IKcoderSenceRun_Get_JudegeBarrier() {
	for (var startPositionX = i_person_ClipView.position.x; startPositionX <= i_curvemap[i_person_currentStandStoneIndex + 1].target_x; startPositionX++) {
		var checkResult = IKCoderSenceRun_Person_CheckCollision(startPositionX, i_person_ClipView.position.y, 80, 80);
		if (checkResult.type == "1")
			return true;
	}
	return false;
};

function IKCoderSenceRun_RunActions() {
	var checkResult = "0";
	for (var actionKey in i_actionPool) {
		var actionObject = i_actionPool[actionKey];
		if (actionObject != null) {

			i_curve_a = actionObject.curveA;
			i_curve_b = actionObject.curveB;

			if (actionObject.checkReturn == false) {
				actionObject.actionRefMethod(actionObject.index);
			}
			else {
				if (actionObject.actionRefMethod()) {
					actionObject.checkReturnCallback(actionObject.index);
					var tmpActionNode = new ActionNode();
					tmpActionNode.index = actionObject.index;
					tmpActionNode.actionRefMethod = actionObject.checkReturnCallback;
					tmpActionNode.checkReturn = false;
					i_actionPool[tmpActionNode.index] = tmpActionNode;
				}
				else
					i_actionPool[actionObject.index] = null;
			}
			checkResult = IKCoderSenceRun_Person_CheckCollision(i_person_ClipView.position.x, i_person_ClipView.position.y, 80, 80);
			if (checkResult.type == "1") {
				IKCoderSenceRun_Person_StopAnimation();
				cancelAnimationFrame(i_requestAnimationID);
				Scene.stepFaild();
				return;
			}
			else if (checkResult.type == "2") {
				if (i_stage.children.includes(checkResult.Object)) {
					//i_stage.children.find((n) => n == checkResult.Object).visible = false;
					checkResult.Object.visible = false;
				}
			} else if (checkResult.type == "3") {

				if (i_stage.children.includes(checkResult.Object)) {
					checkResult.Object.visible = false;
				}

				IKCoderSenceRun_Person_StopAnimation();
				cancelAnimationFrame(i_requestAnimationID);
				Scene.stepComplete();
				return;
			}

			break;
		}
	}
	var notCompleteFlag = true;
	for (var actionKey in i_actionPool) {
		if (i_actionPool[actionKey] != null)
			notCompleteFlag = false;
	}
	if (notCompleteFlag == true) {
		cancelAnimationFrame(i_requestAnimationID);
		Scene.stepFaild();
	}
	else {
		i_requestAnimationID = requestAnimationFrame(IKCoderSenceRun_RunActions);
	}
};

function IKCoderSenceRun_Set_SwitchToStart() {
	i_status_control = "1";
};

function IKCoderSenceRun_Reset() {
	i_person_ClipView.stop();
	i_person_ClipView.position.x = 0;
	i_person_ClipView.position.y = i_background_default_height - 161;
	i_person_currentStandStoneIndex = 0;
	cancelAnimationFrame(i_requestAnimationID);
	i_actionPool = {};

	IKCoderVisibleChildren();
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

	Scene.container.append(i_GameRender.view);
	i_stage = new PIXI.Stage();

	IKCoderSenceRun_Resize(i_senceWidth, i_senceHeight);

	var i_loader = new PIXI.AssetLoader([
		i_shine_img,
		i_candy_img,
		i_PixiAssets_json,
		i_ip4BGtile_img,
		i_box_img,
		i_stone_img
	]);

	i_loader.addEventListener('onComplete', function (event) {
		IKCoderSenceRun_InitResources();
	});

	i_loader.load();
};

function IKCoderSenceRun_InitResources() {
	IKCoderSenceRun_AddSprite(i_ip4BGtile_img, i_background_default_width, i_background_default_height, -1, -1);
	i_ground_position_Y = i_background_default_height - 161;

	var i_countOfStones = i_background_default_width / 162;

	for (var index = 1; index <= i_countOfStones; index++) {
		IKCoderSenceRun_AddSprite(i_stone_img, -1, -1, 162 * index, i_background_default_height - 70);
		var tmpMapNode = new CurveTargetNode();
		tmpMapNode.target_x = 162 * index;
		tmpMapNode.target_y = i_background_default_height - 70;
		tmpMapNode.step = index;
		i_curvemap[index] = tmpMapNode;
	}

	var sprite_box_one = IKCoderSenceRun_AddSprite(i_box_img, -1, -1, 230, i_background_default_height - 150);
	IKCoderSenceRun_AddcollisonNode("box_1", 230, i_background_default_height - 150, sprite_box_one.width, sprite_box_one.height, sprite_box_one, false, false);

	var sprite_box_two = IKCoderSenceRun_AddSprite(i_box_img, -1, -1, 230, i_background_default_height - 280);
	IKCoderSenceRun_AddcollisonNode("box_2", 230, i_background_default_height - 280, sprite_box_two.width, sprite_box_two.height, sprite_box_two, false, false);

	var sprite_pickup_candy1 = IKCoderSenceRun_AddSprite(i_candy_img, -1, -1, 410, i_background_default_height - 270);
	i_spritesObjectsPool["sprite_pickup_candy1"] = sprite_pickup_candy1;
	IKCoderSenceRun_AddcollisonNode("candy1", 410, i_background_default_height - 270, sprite_pickup_candy1.width, sprite_pickup_candy1.height, sprite_pickup_candy1, true, false);

	var sprite_pickup_candy2 = IKCoderSenceRun_AddSprite(i_candy_img, -1, -1, 600, i_background_default_height - 421);
	i_spritesObjectsPool["sprite_pickup_candy2"] = sprite_pickup_candy2;
	IKCoderSenceRun_AddcollisonNode("candy2", 600, i_background_default_height - 250, sprite_pickup_candy2.width, sprite_pickup_candy2.height, sprite_pickup_candy2, true, false);

	var sprite_pickup_candy3 = IKCoderSenceRun_AddSprite(i_candy_img, -1, -1, 860, i_background_default_height - 250);
	i_spritesObjectsPool["sprite_pickup_candy3"] = sprite_pickup_candy3;
	IKCoderSenceRun_AddcollisonNode("candy3", 860, i_background_default_height - 421, sprite_pickup_candy3.width, sprite_pickup_candy3.height, sprite_pickup_candy3, true, false);

	var sprite_pickup_sunshine = IKCoderSenceRun_AddSprite(i_shine_img, -1, -1, 1110, i_background_default_height - 121);
	sprite_pickup_sunshine.anchor.x = sprite_pickup_sunshine.anchor.y = 0.5;
	i_spritesObjectsPool["sprite_pickup_sunshine"] = sprite_pickup_sunshine;

	var sprite_pickup_candy4 = IKCoderSenceRun_AddSprite(i_candy_img, -1, -1, 1080, i_background_default_height - 141);
	i_spritesObjectsPool["sprite_pickup_candy4"] = sprite_pickup_candy4;

	IKCoderSenceRun_AddcollisonNode("candy4", 1080, i_background_default_height - 141, sprite_pickup_candy4.width, sprite_pickup_candy4.height, sprite_pickup_candy4, true, true);
	IKCoderSenceRun_Animation_PickupShine();

	IKCoderSenceRun_PersonInit(0, i_background_default_height - 161);

	IKCoderSetCurve(0.4, 0);
};

function IKCoderSetCurve(maxPonitRateForA, maxPonitLengthForB) {
	var middle_X, middle_Y;
	middle_X = i_curvemap[1].target_x / 2;
	middle_Y = 450;
	calc_curve_AB(middle_X, middle_Y, maxPonitRateForA, maxPonitLengthForB);
}

function IKCoderSenceRun_AddcollisonNode(name, position_x, position_y, width, height, spriteObject, isPickup, isEndPoint) {
	var collisonObj = new CollisionNode();
	collisonObj.position_x = position_x;
	collisonObj.position_y = position_y;
	collisonObj.width = width;
	collisonObj.height = height;
	collisonObj.isPickup = isPickup;
	collisonObj.isEndPoint = isEndPoint;
	collisonObj.spriteObject = spriteObject;

	i_collisionmap[name] = collisonObj;
};

function IKCoderSenceRun_Animation_PickupShine() {
	i_spritesObjectsPool["sprite_pickup_sunshine"].rotation = i_animation_shine_count * 0.2;
	i_animation_shine_count = i_animation_shine_count + 0.1;
	i_GameRender.render(i_stage);
	requestAnimationFrame(IKCoderSenceRun_Animation_PickupShine);
};

function IKCoderSenceRun_PersonInit(positionX, positionY) {
	var runningFrames = [
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

	i_person_ClipView = new PIXI.MovieClip(runningFrames);
	i_person_ClipView.animationSpeed = 0.2;
	i_person_ClipView.position.x = positionX;
	i_person_ClipView.position.y = positionY;
	i_stage.addChild(i_person_ClipView);
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

function IKCoderSenceRun_Set_JumpSteps(actionItemIndex) {
	if (i_person_currentStandStoneIndex == getCurvemapPoolLength() - 1)
		return;
	if (i_person_ClipView.position.x >= i_curvemap[i_person_currentStandStoneIndex + 1].target_x) {
		requestAnimationFrame(IKCoderSenceRun_RunActions);
		IKCoderSenceRun_Person_StopAnimation();
		i_actionPool[actionItemIndex] = null;
		i_person_currentStandStoneIndex++;
	}
	else {
		cancelAnimationFrame(i_requestAnimationID);
		IKCoderSenceRun_Person_PlayAnimation();
		if (i_person_ClipView.position.x < i_curvemap[1].target_x) {
			i_person_ClipView.position.y = calc_curve_Y(i_person_ClipView.position.x);
			i_person_ClipView.position.x = i_person_ClipView.position.x + 1;
		}
		else {
			var position_Y = calc_curve_Y(i_person_ClipView.position.x - i_curvemap[i_person_currentStandStoneIndex].target_x);
			i_person_ClipView.position.y = position_Y;
			i_person_ClipView.position.x = i_person_ClipView.position.x + 1;
		}
	}

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

function IKCoderSenceRun_Person_CheckCollision(current_X, currect_Y, spriteWidth, spiteHeight) {
	var params = {
		type: "0",
		Object: null
	}

	for (var activeCollisionKey in i_collisionmap) {
		var activeObject = i_collisionmap[activeCollisionKey];
		var left_x = activeObject.spriteObject.position.x - activeObject.spriteObject.width / 2;
		var left_y = activeObject.spriteObject.position.y + activeObject.spriteObject.height / 2;
		var right_x = activeObject.spriteObject.position.x + activeObject.spriteObject.width / 2;
		var leftbelow_y = activeObject.spriteObject.position.y - activeObject.spriteObject.height / 2;

		params.Object = activeObject.spriteObject;

		if (current_X >= left_x && current_X <= right_x) {
			if ((currect_Y <= left_y && currect_Y >= leftbelow_y)) {
				if (!activeObject.isPickup) {
					params.type = "1";
					return params;
				}
				else if (activeObject.isPickup && !activeObject.isEndPoint) {
					params.type = "2";
					return params;
				} else {
					params.type = "3";
					return params;
				}
			}
		}
	}

	return params;
};

function IKCoderSenceRun_Resize(width, height) {
	i_GameRender.view.style.width = width + "px";
	i_GameRender.view.style.height = height + "px";
};

function IKCoderSenceRun_AddSprite(fileURI, width, height, startX, startY) {
	var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(fileURI));
	if (width >= 0)
		sprite.width = width;
	if (height >= 0)
		sprite.height = height;
	if (startX >= 0)
		sprite.position.x = startX;
	if (startY >= 0)
		sprite.position.y = startY;
	i_stage.addChild(sprite);
	i_GameRender.render(i_stage);


	return sprite;
};