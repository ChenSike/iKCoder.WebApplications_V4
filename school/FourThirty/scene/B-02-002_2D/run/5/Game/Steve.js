
var GAME = GAME || {};

GAME.Steve = function (engine) {
	this.engine = engine;
	this.position = new PIXI.Point();

	this.runningFrames = [
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

	this.flyingFrames = [
		PIXI.Texture.fromFrame("characterFLATflying_01.png"),
		PIXI.Texture.fromFrame("characterFLATflying_02.png"),
		PIXI.Texture.fromFrame("characterFLATflying_03.png")
	];

	this.crashFrames = [
		PIXI.Texture.fromFrame("characterFALLscaled3.png"),
		PIXI.Texture.fromFrame("characterFALLscaled1.png"),
		PIXI.Texture.fromFrame("characterFALLscaled3.png")
	];

	this.view = new PIXI.MovieClip(this.flyingFrames);
	this.view.animationSpeed = 0.23;

	this.view.anchor.x = 0.5;
	this.view.anchor.y = 0.5;

	this.position.y = 477;
	this.ground = 477;
	this.gravity = 0.3;

	this.baseSpeed = 5;
	this.speed = new PIXI.Point(this.baseSpeed, 0);

	this.activeCount = 0;
	this.isFlying = false;
	this.accel = 0;

	this.width = 26
	this.height = 37;

	this.onGround = false;
	this.rotationSpeed = 0;
	this.joyRiding = false;
	this.level = 1;
	this.realAnimationSpeed = 0.23;

	this.volume = 0.3;

	this.steveActionPools = {};
	this.steveActionCount = 0;
	this.enemiesCount = 0;

	this.steveRunSetupSet = { x: 0, y: 0 };
	this.stevePosition = { x: 0, y: 0 };
	this.parabolaXPosition = 0;
	this.pause = false;

}

GAME.Steve.constructor = GAME.Steve;

GAME.Steve.prototype.update = function () {
	if (this.isDead) {
		this.updateDieing();
	}
	else {
		this.updateRunning();
	}
}

GAME.Steve.prototype.normalMode = function () {
	this.joyRiding = false;

	this.realAnimationSpeed = 0.23;
}

GAME.Steve.prototype.updateRunning = function () {
	this.view.animationSpeed = this.realAnimationSpeed * GAME.time.DELTA_TIME * this.level;

	if (this.steveActionPools[this.steveActionCount]) {
		if (this.steveActionPools[this.steveActionCount].isJump) {
			var curPickupPosition = { x: 0, y: 0, width: 0 };
			var prevPickupPosition = { x: 0, y: 0, width: 0 };
			var afterPickupPosition = { x: 0, y: 0, width: 0 };

			if (this.steveActionPools[this.steveActionCount].isBarrier) {
				curPickupPosition = this.getEnemyPosition(this.enemiesCount);

				if (this.steveActionPools[this.steveActionCount - 1].isBarrier) {
					prevPickupPosition = this.getEnemyPosition(this.enemiesCount - 1);
				} else {
					prevPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount - 1);
				}

				if (this.steveActionPools[this.steveActionCount + 1] && this.steveActionPools[this.steveActionCount + 1].isBarrier) {
					prevPickupPosition = this.getEnemyPosition(this.enemiesCount + 1);
				} else {
					afterPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount + 1);
				}

			} else {
				curPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount);
				prevPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount - 1);
				afterPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount + 1);
			}

			var parabolaWidth = 0;
			if ((afterPickupPosition.x - prevPickupPosition.x) > 100) {
				parabolaWidth = 100;
			} else {
				parabolaWidth = afterPickupPosition.x - prevPickupPosition.x;
			}

			var xdist = curPickupPosition.x - this.position.x;

			this.isFlying = (xdist > -curPickupPosition.width / 2 - parabolaWidth / 2 && xdist < curPickupPosition.width / 2 + parabolaWidth / 2);
		}
	}

	//if (this.isActive) {
	//	this.isFlying = true;
	//}

	var oldSpeed = this.speed.y;

	if (this.isFlying) {
		this.accel = 0.6;
		this.speed.y -= this.accel * GAME.time.DELTA_TIME;
		if (this.speed.y > 0) { this.speed.y -= 0.3 * GAME.time.DELTA_TIME; }
	}
	else {
		if (this.speed.y < 0) { this.speed.y += 0.05 * GAME.time.DELTA_TIME; }
	}

	this.speed.y += this.gravity * GAME.time.DELTA_TIME;

	if (this.speed.y > 8) this.speed.y = 8;
	if (this.speed.y < -9) this.speed.y = -9;

	var accel = this.speed.y - oldSpeed;
	//this.position.x += this.speed.x * GAME.time.DELTA_TIME * this.level;
	//this.position.x +=2;
	this.position.x += this.speed.x * GAME.time.DELTA_TIME * this.level;
	this.position.y += this.speed.y * GAME.time.DELTA_TIME;

	if (this.onGround !== this.onGroundCache) {
		this.onGroundCache = this.onGround;

		if (this.onGround) {
			this.view.textures = this.runningFrames;
		}
		else {
			this.view.textures = this.flyingFrames;
		}
	}

	GAME.camera.x = this.position.x - 100;

	//this.view.position.x = this.position.x - GAME.camera.x ;

	//this.view.position.x += 2;
	//this.countPosition += 2;

	//this.view.position.x += this.steveRunSetupSet.x;
	//this.countPosition += this.steveRunSetupSet.x;

	this.view.position.x = this.position.x - GAME.camera.x;
	//this.view.position.y = this.position.y - GAME.camera.y;

	if (this.steveActionPools[this.steveActionCount]) {

		if (this.steveActionPools[this.steveActionCount].isJump) {

			var curPickupPosition = { x: 0, y: 0, width: 0 };
			var prevPickupPosition = { x: 0, y: 0, width: 0 };
			var afterPickupPosition = { x: 0, y: 0, width: 0 };

			if (this.steveActionPools[this.steveActionCount].isBarrier) {
				curPickupPosition = this.getEnemyPosition(this.enemiesCount);

				if (this.steveActionPools[this.steveActionCount - 1].isBarrier) {
					prevPickupPosition = this.getEnemyPosition(this.enemiesCount - 1);
				} else {
					prevPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount - 1);
				}

				if (this.steveActionPools[this.steveActionCount + 1] && this.steveActionPools[this.steveActionCount + 1].isBarrier) {
					prevPickupPosition = this.getEnemyPosition(this.enemiesCount + 1);
				} else {
					afterPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount + 1);
				}

			} else {
				curPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount);
				prevPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount - 1);
				afterPickupPosition = this.getPickupPosition(this.steveActionCount - this.enemiesCount + 1);
			}

			var parabolaWidth = 0;
			if ((afterPickupPosition.x - prevPickupPosition.x) > 100) {
				parabolaWidth = 100;
			} else {
				parabolaWidth = afterPickupPosition.x - prevPickupPosition.x;
			}


			var xdist = curPickupPosition.x - this.position.x;

			if (xdist > (-curPickupPosition.width / 2 - parabolaWidth / 2) && xdist < (curPickupPosition.width / 2 + parabolaWidth / 2)) {

				this.parabolaXPosition += 1;
				if (this.parabolaXPosition >= parabolaWidth) {
					this.parabolaXPosition = 0;
				}

				this.view.position.y = this.calculateParabolaY(this.parabolaXPosition, this.steveActionPools[this.steveActionCount].curveA, this.steveActionPools[this.steveActionCount].curveB);
				this.isFlying = true;
			} else {

				if (this.parabolaXPosition >= parabolaWidth || this.parabolaXPosition == 0) {
					this.view.position.y = this.position.y - GAME.camera.y;
					this.isFlying = false;
				} else {
					this.parabolaXPosition += 1;
					if (this.parabolaXPosition >= parabolaWidth) {
						this.parabolaXPosition = 0;
					}

					this.view.position.y = this.calculateParabolaY(this.parabolaXPosition, this.steveActionPools[this.steveActionCount].curveA, this.steveActionPools[this.steveActionCount].curveB);
					this.isFlying = true;
				}
			}
		} else {
			this.view.position.y = this.position.y - GAME.camera.y;
			this.isFlying = false;
		}
	} else {
		this.view.position.y = this.position.y - GAME.camera.y;
		this.isFlying = false;
	}


	//if (this.view.position.x >= 600) {
	//	this.position.x += 600;
	//	this.view.position.x -= 600;
	//}

	//this.stevePosition.x = this.countPosition - 100;
	//this.stevePosition.y = this.view.position.y;

	this.view.rotation += (this.speed.y * 0.05 - this.view.rotation) * 0.1;
}

GAME.Steve.prototype.updateDieing = function () {
	this.speed.x *= 0.999;

	if (this.onGround) this.speed.y *= 0.99;

	this.speed.y += 0.1;
	this.accel += (0 - this.accel) * 0.1 * GAME.time.DELTA_TIME;

	this.speed.y += this.gravity * GAME.time.DELTA_TIME;

	this.position.x += this.speed.x * GAME.time.DELTA_TIME;
	this.position.y += this.speed.y * GAME.time.DELTA_TIME;

	GAME.camera.x = this.position.x - 100;

	this.view.position.x = this.position.x - GAME.camera.x;
	this.view.position.y = this.position.y - GAME.camera.y;

	if (this.speed.x < 5) {
		this.view.rotation += this.rotationSpeed * (this.speed.x / 5) * GAME.time.DELTA_TIME;
	}
	else {
		this.view.rotation += this.rotationSpeed * GAME.time.DELTA_TIME;
	}
}

GAME.Steve.prototype.jump = function () {
	if (this.isDead) {
		if (this.speed.x < 5) {
			this.isDead = false
			this.speed.x = 10;
		}
	}

	if (this.position.y !== this.ground) {
		this.isFlying = true;
	}
	else {
		this.isActive = true;
		this.activeCount = 0;
	}
}

GAME.Steve.prototype.die = function () {
	if (this.isDead) return;

	this.isDead = true;
	this.bounce = 0;
	this.speed.x = 15;
	this.speed.y = -15;
	this.rotationSpeed = 0.3;
	this.view.stop();
}


GAME.Steve.prototype.boil = function () {
	if (this.isDead) return;

	this.isDead = true;
}

GAME.Steve.prototype.fall = function () {
	this.isActive = false;
	this.isFlying = false;
}

GAME.Steve.prototype.isAirbourne = function () { }

GAME.Steve.prototype.stop = function () {
	this.view.stop();
}

GAME.Steve.prototype.resume = function () {
	this.view.play();
}

GAME.Steve.prototype.calculateParabolaY = function (xDistance, curveA, curveB) {
	return curveA * (xDistance * xDistance) + curveB * xDistance + 477;
}

GAME.Steve.prototype.getPickupPosition = function (pickupNum) {

	var pickups = this.engine.pickupManager.allPickups;
	var enemies = this.engine.enemyManager.allEnemies;

	var pickupPosition = { x: 0, y: 0, width: 0 };

	if (pickups[pickupNum]) {
		pickupPosition.x = pickups[pickupNum].x;
		pickupPosition.y = pickups[pickupNum].y;
		pickupPosition.width = pickups[pickupNum].width;
	}

	return pickupPosition;
}

GAME.Steve.prototype.getEnemyPosition = function (enemyNum) {
	var enemies = this.engine.enemyManager.allEnemies;

	var enemyPosition = { x: 0, y: 0, width: 0 };

	if (enemies[enemyNum]) {
		enemyPosition.x = enemies[enemyNum].x;
		enemyPosition.y = enemies[enemyNum].y;
		enemyPosition.width = enemies[enemyNum].width;
	}

	return enemyPosition;
}