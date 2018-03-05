'use strict';


Blockly.Blocks['event_start'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("当开始运行");
		this.setNextStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['event_start'] = function (block) {
	//return 'Scene.start();\n';
	return '';
};

Blockly.Blocks['move_onestep_up'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向上移动 1 步");
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_onestep_up'] = function (block) {
	return 'Scene.move("U", 1);\n';
};

Blockly.Blocks['move_onestep_down'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向下移动 1 步");
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_onestep_down'] = function (block) {
	return 'Scene.move("D", 1);\n';
};

Blockly.Blocks['move_onestep_left'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向左移动 1 步");
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_onestep_left'] = function (block) {
	return 'Scene.move("L", 1);\n';
};

Blockly.Blocks['move_onestep_right'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向右移动 1 步");
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_onestep_right'] = function (block) {
	return 'Scene.move("R", 1);\n';
};

Blockly.Blocks['turn_right'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向右转");
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['turn_right'] = function (block) {
	return 'Scene.TurnRight();\n';
};

Blockly.Blocks['turn_left'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向左转");
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['turn_left'] = function (block) {
	return 'Scene.TurnLeft();\n';
};

Blockly.Blocks['move_forward'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向前移动")
			.appendField(new Blockly.FieldNumber(1, 1, 25, 1), "move_steps")
			.appendField(" 步 ")
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_forward'] = function (block) {
	return 'Scene.move(' + block.getFieldValue('move_steps') + ');\n';
};

Blockly.Blocks['move_nstep_forward'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向前移动")
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_nstep_forward'] = function (block) {
	return 'Scene.moveForward();\n';
};

Blockly.Blocks['move_one_forward'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("向前移动")
			.appendField("1  步 ")
		this.setNextStatement(true, null);
		this.setPreviousStatement(true, null);
		this.setColour(150);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['move_one_forward'] = function (block) {
	//return 'Scene.move("", 1);\n';
	return 'Scene.move(1)';
};

Blockly.Blocks['if_condition'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("如果 ")
			.appendField("前面是墙");
		this.appendStatementInput("DO0")
			.setCheck(null)
			.appendField("执行");
		//    this.appendStatementInput("ELSE")
		//        .setCheck(null)
		//        .appendField("否则");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
		var a = this;
	}
};

Blockly.JavaScript['if_condition'] = function (a) {
	var b = 0,
		c = "",
		d, e;
	//do 
	//e = Blockly.JavaScript.valueToCode(a, "IF" + b, Blockly.JavaScript.ORDER_NONE) || "false", 
	d = Blockly.JavaScript.statementToCode(a, "DO" + b),
		c += (0 < b ? " else " : "") + "if (Scene.isWall()) {\nScene.setFunctionWhenWall('" + d + "')}";
	//++b;
	//while (a.getInput("IF" + b));
	//  a.getInput("ELSE") && (d = Blockly.JavaScript.statementToCode(a, "ELSE"), c += " else {\n" + d + "}");
	return c + ";\n"
};


Blockly.Blocks['forloop'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("重复")
			.appendField(new Blockly.FieldTextInput("???"), "times")
			.appendField("次");
		this.appendStatementInput("do")
			.setCheck(null)
			.appendField("做");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};
Blockly.JavaScript['forloop'] = function (block) {
	var number_times = block.getFieldValue('times');
	var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
	// TODO: Assemble JavaScript into code variable.
	var countNum = "";
	if (statements_do.match("for") != null) {
		var countNum = statements_do.match(/for/g).length;
	}
	var count = "count" + countNum;
	var code = 'for (var ' + count + ' = 0; ' + count + ' < ' + number_times + '; ' + count + '++)\n {\n' + statements_do + ' }\n';
	return code;
};

Blockly.Blocks['whileloop'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("重复直到 吃到红色豆子");
		this.appendStatementInput("do")
			.setCheck(null)
			.appendField("执行");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['whileloop'] = function (block) {
	var d = Blockly.JavaScript.statementToCode(block, "do"),
		d = Blockly.JavaScript.addLoopTrap(d, block.id),
		c = 'Scene.NotEatRedBeans()';
	var code = 'while (' + c + ') {\n' + d + '};\n';
	return code;
};

Blockly.Blocks['if_condition_else'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("如果 ")
			//.appendField("是")
			.appendField(new Blockly.FieldDropdown([["前方是怪物", "Monster"], ["前方是豆子", "Beans"]]), "DropName");
		this.appendStatementInput("DO0")
			.setCheck(null)
			.appendField("执行");
		this.appendStatementInput("ELSE")
			.setCheck(null)
			.appendField("否则");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
		var a = this;
	}
};

Blockly.JavaScript['if_condition_else'] = function (a) {
	var b = 0,
		c = "",
		d, e, f;
	var selectedValue = a.getFieldValue('DropName');
	if (selectedValue == "Monster") {
		f = "Scene.isMonster()";
	} else if (selectedValue == "Beans") {
		f = "Scene.isBean()";
	}
	//do 
	//	e = Blockly.JavaScript.valueToCode(a, "IF" + b, Blockly.JavaScript.ORDER_NONE) || "false", 
	d = Blockly.JavaScript.statementToCode(a, "DO" + b),
		c += (0 < b ? " else " : "") + "if (" + f + ") {\n" + d + "}";
	//	++b;
	//while (a.getInput("IF" + b));
	a.getInput("ELSE") && (d = Blockly.JavaScript.statementToCode(a, "ELSE"), c += " else {\n" + d + "}");
	return c + "\n"
};