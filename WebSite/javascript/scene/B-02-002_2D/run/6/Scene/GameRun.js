
window.addEventListener('resize', function () {
	resize();
});

window.onorientationchange = resize;

PIXI.Texture.fromFrameId = PIXI.Texture.fromFrame;

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

var GAME_MODE = {
	TITLE: 0,
	COUNT_DOWN: 1,
	PLAYING: 2,
	GAME_OVER: 3,
	INTRO: 4,
	PAUSED: 5
};

var game;
var gameMode = 0;
var loader;
var black;
var logo;
var countdown;


var interactive = true;
var width = 800;
var height = 600;


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
	game.steve.position.x = 0;
	game.steve.steveActionCount = 0;
	game.steve.parabolaXPosition = 0;
	game.steve.enemiesCount = 0;
	game.pickupManager.allPickups = [];
	game.steve.steveActionPools = {};
	game.DELTA_TIME = 1;
	//game.steve.baseSpeed = 0;
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

	loader = new PIXI.AssetLoader([
	   "image/scene/run/stretched_hyper_tile.jpg",
	   "image/scene/run/SplashAssets.json",
	   "image/scene/run/WorldAssets-hd.json",
	   "image/scene/run/HudAssets-hd.json",
	   "image/scene/run/PixiAssets-hd.json",
	   "image/scene/run/iP4_BGtileEx.jpg",
	   "image/scene/run/blackSquare.jpg",
	   "image/scene/run/hud/pausedPanel.png",
	   "image/scene/run/hud/pixieRevised_controls.png",
	   "image/scene/run/hud/ContinuePlay.png",
	   "image/scene/run/hud/RestartPlay.png",
	   "image/scene/run/hud/pause.png",
	   "image/scene/run/hud/PersonalBest.png"
	]);


	loader.addEventListener('onComplete', function (event) {
		init();
	});

	loader.load();
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
	gameMode = GAME_MODE.INTRO;
	interactive = false;

	game = new GAME.RprEngine();

	Scene.container.append(game.view.renderer.view);

	requestAnimFrame(update);

	game.onGameover = onGameover;

	black = new PIXI.Sprite.fromImage("image/scene/run/blackSquare.jpg");
	this.game.view.hud.addChild(black);

	TweenLite.to(black, 0.3, {
		alpha: 0.75,
		delay: 0.5
	});

	logo = PIXI.Sprite.fromFrame("runLogo.png");
	logo.anchor.x = 0.5;
	logo.anchor.y = 0.5;
	logo.alpha = 0;

	//this.game.view.hud.addChild(logo);

	personalBestTitle = PIXI.Sprite.fromImage("assets/hud/PersonalBest.png");
	personalBestTitle.anchor.x = 0.5;
	personalBestTitle.anchor.y = 0.5;
	personalBestTitle.alpha = 0;
	personalBestTitle.scale.x = 1.5;
	personalBestTitle.scale.y = 1.5;

	this.game.view.hud.addChild(personalBestTitle);

	var pressStart = PIXI.Sprite.fromFrame("spaceStart.png");
	pressStart.anchor.x = 0.5;
	pressStart.position.y = 200;

	TweenLite.to(logo, 0.1, {
		alpha: 1,
		delay: 0.6,
		onComplete: onIntroFaded
	});

	countdown = new GAME.Countdown();
	this.game.view.hud.addChild(countdown);

	pauseButton = PIXI.Sprite.fromFrame("image/scene/run/hud/pause.png");
	pauseButton.interactive = true;
	pauseButton.anchor.x = 0.5;
	pauseButton.anchor.y = 0.5;
	pauseButton.alpha = 0;
	pauseButton.visible = false;
	pauseButton.type = "button";

	pauseScreen = PIXI.Sprite.fromImage("image/scene/run/hud/pausedPanel.png");
	pauseScreen.anchor.x = 0.5;
	pauseScreen.anchor.y = 0.5;
	pauseScreen.scale.x = 1.5;
	pauseScreen.scale.y = 1.5;
	pauseScreen.alpha = 0;
	pauseScreen.visible = false;

	// Buttons
	resumeButton = PIXI.Sprite.fromImage("image/scene/run/hud/ContinuePlay.png");
	resumeButton.anchor.x = 0.5;
	resumeButton.anchor.y = 0.5;
	resumeButton.scale.x = 0;
	resumeButton.scale.y = 0;
	resumeButton.alpha = 0;
	resumeButton.interactive = true;

	resumeButton.touchstart = resumeButton.mousedown = function () {
		onResumePressed();
	}

	restartButton = PIXI.Sprite.fromImage("image/scene/run/hud/RestartPlay.png");
	restartButton.anchor.x = 0.5;
	restartButton.anchor.y = 0.5;
	restartButton.scale.x = 0;
	restartButton.scale.y = 0;
	restartButton.alpha = 0;
	restartButton.interactive = true;

	restartButton.touchstart = restartButton.mousedown = function (event) {
		event.originalEvent.preventDefault();
		onRestartPressed();
	}

	this.game.view.stage.addChild(pauseScreen);
	this.game.view.stage.addChild(resumeButton);
	this.game.view.stage.addChild(restartButton);
	this.game.view.stage.addChild(pauseButton);

	pauseButton.mousedown = pauseButton.touchstart = function (event) {
		event.originalEvent.preventDefault();
		onPaused();
	}

	this.game.view.container.mousedown = this.game.view.container.touchstart = function (event) {
		onTap(event);
	}

	this.game.view.container.mouseup = this.game.view.container.touchend = function (event) {
		onTouchEnd(event);
	}

	resize();
};

function onResumePressed() {
	onPaused();
};

function onRestartPressed() {
	onPaused();
	game.steve.die();
	game.gameover();
};

var prevState = false;

function pauseEnded() {
	pauseScreen.visible = false;
	pauseScreen.scale.x = 1.5;
	pauseScreen.scale.y = 1.5;

	resumeButton.alpha = 0;
	resumeButton.visible = false;
	restartButton.alpha = 0;
	restartButton.visible = false;
};

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

		TweenLite.to(restartButton.scale, 0.6, {
			x: 0,
			y: 0,
			ease: Elastic.easeOut
		});
		TweenLite.to(restartButton, 0.1, {
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
	}
	else {
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

		TweenLite.to(restartButton, 0.1, {
			alpha: 1,
		});
		TweenLite.to(restartButton.scale, 0.6, {
			x: 1,
			y: 1,
			ease: Elastic.easeOut
		});
	}
};

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
	logo.visible = true;
	TweenLite.to(logo, 0.3, {
		alpha: 1,
		onComplete: onGameoverShown
	});
}

function onGameoverShown() {
	this.isGameReallyOver = true;
	interactive = true;
}

function onTouchStart(event) {
	onTap(event);
}

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

	if (game.isPlaying) game.steve.fall();
}

function getRatio(type, w, h) {

	var width = w, height = h;

	var dips = 1;
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
	window.scrollTo(0, 0);

	var h = 640;
	var width = window.innerWidth || document.body.clientWidth;
	var height = window.innerHeight || document.body.clientHeight;
	var ratio = height / h;

	if (game) {
		var view = game.view.renderer.view;
		view.style.height = h * ratio + "px";

		var newWidth = (width / ratio);

		view.style.width = width + "px";

		this.logo.position.x = newWidth / 2;
		this.logo.position.y = h / 2 - 20;

		if (black) {
			black.scale.x = newWidth / 16;
			black.scale.y = h / 16;
		}

		this.countdown.position.x = newWidth / 2;
		this.countdown.position.y = h / 2;

		game.view.resize(newWidth, h);

		pauseButton.position.x = newWidth - 60;
		pauseButton.position.y = h - 60;

		pauseScreen.position.x = (newWidth * 0.5);
		pauseScreen.position.y = h * 0.5;

		resumeButton.position.x = (newWidth * 0.5);
		resumeButton.position.y = (h * 0.5);

		restartButton.position.x = (newWidth * 0.5) + 125;
		restartButton.position.y = (h * 0.5);
	}

	GAME.width = (width / ratio);
	GAME.height = h;
};

function update() {
	game.update();

	requestAnimFrame(update);
};


var Time = function () {
	this.deltaTime = 1;
	this.lastTime = 0;
};

Time.constructor = Time;

Time.prototype.update = function () {
	var time = Date.now();
	var currentTime = time;
	var passedTime = currentTime - this.lastTime;

	if (passedTime > 100) passedTime = 100;

	this.DELTA_TIME = (passedTime * 0.06);
	this.lastTime = currentTime;
}

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
					//call the function!
					if (item.touchstart) item.touchstart(touchData);
					item.__isDown = true;
					item.__touchData = touchData;

					if (!item.interactiveChildren) break;
				}
			}
		}
	}
};


function update() {
	game.update();
	requestAnimFrame(update);
};


function onTap(event) {
	event.originalEvent.preventDefault();

	if (event.target.type !== 'button') {
		if (!interactive) return;

		if (gameMode === GAME_MODE.INTRO) {
			interactive = false;
			gameMode = GAME_MODE.TITLE;

			logo.alpha = 0;
			logo.scale.x = 1.5;
			logo.scale.y = 1.5;
			logo.setTexture(PIXI.Texture.fromFrame("image/scene/run/hud/pixieRevised_controls.png"));

			TweenLite.to(logo, 0.1, {
				alpha: 1
			});

			TweenLite.to(logo.scale, 1, {
				x: 1,
				y: 1,
				ease: Elastic.easeOut,
				onComplete: onIntroFaded
			});
		}
		else if (gameMode === GAME_MODE.TITLE) {
			interactive = false;

			game.start();
			gameMode = GAME_MODE.COUNT_DOWN;


			if (black) {
				TweenLite.to(black, 0.2, {
					alpha: 0
				});
			}

			TweenLite.to(logo, 0.3, {
				alpha: 0,
				onComplete: function () {
					logo.visible = false;
					logo.setTexture(PIXI.Texture.fromFrame("gameOver.png"));
					game.view.showHud();
					game.view.hud.removeChild(black);
					countdown.startCountDown(onCountdownComplete);
				}
			});
		}
		else if (gameMode === GAME_MODE.GAME_OVER) {
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
					logo.visible = false;
					gameMode = GAME_MODE.COUNT_DOWN;

					TweenLite.killTweensOf(GAME.camera);
					GAME.camera.zoom = 1;

					TweenLite.to(black, 0.3, {
						alpha: 0,
						onComplete: function () {
							logo.visible = false;
							game.start();

							countdown.startCountDown(onCountdownComplete);
						}
					});
				}
			});
		}
		else {
			// handle our jump sound
			thrusters = true;
			if (game.isPlaying) game.steve.jump();
		}
	}
};
