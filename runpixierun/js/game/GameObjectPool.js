var GAME = GAME || {};

//初始化一个游戏对象
GAME.GameObjectPool = function(classType)
{
	this.classType = classType;
	this.pool = [];
}

// constructor
GAME.GameObjectPool.constructor = GAME.GameObjectPool;

//得到一个游戏对象
GAME.GameObjectPool.prototype.getObject = function()
{
	var object = this.pool.pop();
	if(!object)
	{
		object =  new this.classType();
		
	}
	return object;
}

GAME.GameObjectPool.prototype.returnObject = function(object)
{
	//this.pool.push(object);
}
