var GAME = GAME || {};

//初始化飞溅点
GAME.Splash = function(owner)
{
	this.textures = [PIXI.Texture.fromFrameId("lavaFrame_01.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_02.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_03.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_04.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_05.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_06.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_07.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_08.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_09.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_10.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_11.png"),
	                 PIXI.Texture.fromFrameId("lavaFrame_12.png")];
	
	PIXI.MovieClip.call( this, this.textures );
	this.anchor.x = 0.5;
	this.anchor.y = 1;
	this.scale.x = this.scale.y = 2;
	this.animationSpeed = 0.3;
	this.visible =false;
	
	this.realPosition;
}

GAME.Splash.constructor = GAME.Splash;
GAME.Splash.prototype = Object.create( PIXI.MovieClip.prototype );

//设置飞溅点位置
GAME.Splash.prototype.splash = function(position)
{
	this.realPosition = position.x;

	this.position.y = 620;//this.engine.steve.view.position.y;

	this.gotoAndPlay(0)
	this.visible = true;
}

//更新飞溅点的场景变化
GAME.Splash.prototype.updateTransform = function()
{
	if(!this.visible)return;
	
	PIXI.MovieClip.prototype.updateTransform.call(this);
	this.position.x = this.realPosition - GAME.camera.x 
	
	
	if(this.currentFrame > this.textures.length-1)
	{
		this.stop();
		this.visible =false;
	}
}