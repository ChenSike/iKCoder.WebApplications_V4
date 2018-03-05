﻿'use strict';

var Scene = {};
Scene.Game = null;

Scene.init = function (containerId, model, configs) {
	this.container = document.getElementById(containerId);
	if (this.container != null) {
		var height = $(this.container).height();
		var width = $(this.container).width();
		var newSize = Scene.adjustSize(width, height);
		onInitRun(newSize.w, newSize.h);
	}
};

Scene.adjustSize = function (width, height) {
	var minRate = Math.min(1286 / width, 640 / height);
	width = 1286 / minRate;
	height = 640 / minRate;
	return { w: width, h: height };
};

Scene.resetSize = function () {
	var container = $(this.container);
	Scene.adjustSize(container.width(), container.height());
};

Scene.start = function () {

};

Scene.reset = function () {
	IKCoderSenceRun_Reset();
};

Scene.restart = function () {
	Scene.Game.restart();
};

Scene.startGame = function () {
	IKCoderSenceRun_RunActions();
};

Scene.pause = function () {
	Scene.Game.pause();
};

Scene.AllowStart = function () {
	IKCoderSenceRun_Set_SwitchToStart();
};
