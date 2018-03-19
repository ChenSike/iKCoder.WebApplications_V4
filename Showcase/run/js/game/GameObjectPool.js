var GAME = GAME || {};

//��ʼ��һ����Ϸ����
GAME.GameObjectPool = function(classType)
{
	this.classType = classType;
	this.pool = [];
}

// constructor
GAME.GameObjectPool.constructor = GAME.GameObjectPool;

//�õ�һ����Ϸ����
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
