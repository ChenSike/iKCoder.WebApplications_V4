
var GAME = GAME || {};

var laserCount = 0;

GAME.CollisionManager = function (engine) {
	this.engine = engine;
}

// constructor
GAME.CollisionManager.constructor = GAME.CollisionManager;

GAME.CollisionManager.prototype.update = function () {
	//if (this.engine.isPlaying) 
	this.playerVsBlock();
	this.playerVsPickup();
	this.playerVsFloor();

}

GAME.CollisionManager.prototype.playerVsBlock = function () {
	var enemies = this.engine.enemyManager.enemies;
	var steve = this.engine.steve;

	for (var i = 0; i < enemies.length; i++) {
		var enemy = enemies[i]

		if (steve.position.x > enemy.position.x + enemy.width + 81) {
			steve.steveActionCount += 1;
			steve.enemiesCount += 1;
		}

		var xdist = enemy.position.x - steve.position.x;
		if (xdist > -enemy.width / 2 && xdist < enemy.width / 2) {
			var ydist = enemy.position.y - steve.position.y;

			//if (ydist > -enemy.height / 2 && ydist < enemy.height / 2 && !steve.isDead && steve.steveActionPools[steve.steveActionCount] && steve.steveActionPools[steve.steveActionCount].isBarrier) {
			//	steve.steveActionCount += 1;
			//	steve.enemiesCount += 1;
			//}

			//if (ydist > -enemy.height / 2 - 20 && ydist < enemy.height / 2) {
			//	if (!steve.joyRiding && steve.steveActionPools[steve.steveActionCount] && steve.steveActionPools[steve.steveActionCount].isJump) {
			//		enemy.hit();
			//		steve.stop();
			//		steve.pause = true;
			//		Scene.stepFaild();
			//	}
			//}
		}
	}
}

GAME.CollisionManager.prototype.playerVsPickup = function () {

	var pickups = this.engine.pickupManager.pickups;
	var steve = this.engine.steve;

	for (var i = 0; i < pickups.length; i++) {
		var pickup = pickups[i]
		if (pickup.isPickedUp) { continue; }

		var xdist = pickup.position.x - steve.position.x;
		//var xdist = pickup.position.x - steve.stevePosition.x;

		if (xdist > -pickup.width / 2 && xdist < pickup.width / 2) {
			var ydist = pickup.position.y - steve.position.y;

			//var ydist = pickup.position.y - steve.stevePosition.y;

			if (ydist > -pickup.height / 2 && ydist < pickup.height / 2 && !steve.isDead && steve.steveActionPools[steve.steveActionCount] && steve.steveActionPools[steve.steveActionCount].isPickUp) {
				this.engine.pickupManager.removePickup(i);
				this.engine.pickup();

				steve.steveActionCount += 1;

			} else {
				if (steve.position.x >= (steve.steveActionPools[steve.steveActionCount] && steve.steveActionPools[steve.steveActionCount].isJump ? pickup.position.x + 200 : pickup.position.x) ) {
					steve.stop();
					steve.pause = true;
					Scene.stepFaild();	
				}
			}
		}
	}
}

GAME.CollisionManager.prototype.playerVsFloor = function () {
	var floors = this.engine.floorManager.floors;
	var steve = this.engine.steve;
	var segment = this.engine.segmentManager;

	var max = floors.length;
	steve.onGround = false;

	if (steve.position.x >= 3205.1 || steve.isDead) {

		//steve.boil();
		//this.engine.view.doSplash();
		//this.engine.gameover();
		steve.baseSpeed = 0;
		steve.stop();
		
		//steve.die();
		Scene.stepComplete();
		return;
	}


	if (steve.position.y > 610 || steve.position.x >= segment.totalLength) {
		if (this.engine.isPlaying) {
			steve.boil();
			this.engine.view.doSplash();
			this.engine.gameover();
		}
		else {
			steve.speed.x *= 0.95;
			interactive = !interactive;

			if (steve.bounce === 0) {
				steve.bounce++;
				steve.boil();
				this.engine.view.doSplash();
			}

			return;
		}
	}

	for (var i = 0; i < max; i++) {
		var floor = floors[i];
		var xdist = floor.x - steve.position.x + 1135;

		if (steve.position.y > 477) {
			if (xdist > 0 && xdist < 1135) {
				if (steve.isDead) {
					steve.bounce++;

					if (steve.bounce > 2) {
						return;
					}

					if (steve.crashFrames[steve.bounce]) {
						steve.view.setTexture(steve.crashFrames[steve.bounce])

						steve.speed.y *= -0.7;
						steve.speed.x *= 0.8;

						if (steve.rotationSpeed > 0) {
							steve.rotationSpeed = Math.random() * -0.3;
						}
						else if (steve.rotationSpeed === 0) {
							steve.rotationSpeed = Math.random() * 0.3;
						}
						else {
							steve.rotationSpeed = 0;
						}
					}
				}
				else {
					steve.speed.y = -0.3;
				}

				if (!steve.isFlying) {
					steve.position.y = 478;
					steve.onGround = true;

				}
			}
		}
	}

	if (steve.position.y < 0) {
		steve.position.y = 0;
		steve.speed.y *= 0;
	}
}
