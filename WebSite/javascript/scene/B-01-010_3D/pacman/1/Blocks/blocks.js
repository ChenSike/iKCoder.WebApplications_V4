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

Blockly.Blocks['turn_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向右转");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(100);
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
        this.setColour(120);
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
            // .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "move_steps")
            .appendField("1  步 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(80);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_forward'] = function (block) {
    // return 'Scene.move("", ' + block.getFieldValue('move_steps') + ');\n';
    return 'Scene.move(1);\n';
};


Blockly.Blocks['if_condition'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("如果 ")
			.appendField(new Blockly.FieldDropdown([["前面是墙", "wall"], ["前面是豆子", "beans"]]), "beans_wall");
		this.appendStatementInput("do")
			.setCheck(null)
			.appendField("执行");
		this.appendStatementInput("else")
	        .setCheck(null)
            .appendField("否则");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(200);
		this.setTooltip('');
		this.setHelpUrl('');
		var a = this;
	}
};

Blockly.JavaScript['if_condition'] = function (block) {
	var dropDownCode = "Scene.NotEatRedBeans()";
	var dropDownVal = block.getFieldValue("beans_wall");

	if (dropDownVal === "beans") {
		dropDownCode = "Scene.isBeans()";
	} else if (dropDownVal === "wall") {
		dropDownCode = "Scene.isWall()";
	}

	var d = Blockly.JavaScript.statementToCode(block, "do");
	var e = Blockly.JavaScript.statementToCode(block, "else");
	var c = "if (" + dropDownCode + ") {\n" + d + "}else{\n" + e+ "}\n";

	return c + "\n";
};


Blockly.Blocks['forloop'] = {
  init: function() {
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

Blockly.JavaScript['forloop'] = function(block) {
  var number_times = block.getFieldValue('times');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  var code = 'for (var i = 0; i < ' + number_times +'; i++)\n {\n' + statements_do + ' }\n';
  return code;
};