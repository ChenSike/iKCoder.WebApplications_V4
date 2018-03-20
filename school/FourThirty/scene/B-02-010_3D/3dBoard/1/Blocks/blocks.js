'use strict';
Blockly.FieldColour.COLOURS = [ '#00ff00','#ff0000', '#0000ff','#ffb90f',  '#000000', '#888888','#cdc8b1', '#ffffff','#ffff00','#ff00ff','#00ffff','#b23aee'];
Blockly.FieldColour.COLUMNS = 4;

Blockly.Blocks['event_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当开始运行");
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['event_start'] = function (block) {
    return '';
};

Blockly.Blocks['move_forward_para'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向前移动");
		this.appendValueInput("length")
			.setCheck(null);
		this.appendDummyInput()
			.appendField(" 格 ");
		this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_forward_para'] = function (block) {
	return 'Scene.MoveForward(length);\n';
};

Blockly.Blocks['positive_rotate_line'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["顺时针","positive"], ["逆时针","negative"]]), "rotate_derection")
        .appendField("旋转线段")
        .appendField(new Blockly.FieldDropdown([["30","30"], ["60","60"],["90","90"],["120","120"]]), "rotate_degree")
        .appendField(" 度 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['positive_rotate_line'] = function (block) {
    var a = block.getFieldValue('rotate_derection');
    if (a == 'positive'){
        return 'Scene.RotateLine(' + block.getFieldValue('rotate_degree') + ',false);\n';
    }else if (a == 'negative')
        return 'Scene.RotateLine(' + block.getFieldValue('rotate_degree') + ',true);\n';
};

Blockly.Blocks['negative_rotate_line'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["逆时针","negative"], ["顺时针","positive"]]), "rotate_derection2")
        .appendField("旋转线段")
        .appendField(new Blockly.FieldDropdown([["30","30"], ["60","60"],["90","90"],["120","120"]]), "rotate_degree2")
        .appendField(" 度 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['negative_rotate_line'] = function (block) {
    var a = block.getFieldValue('rotate_derection2');
    if (a == 'positive'){
        return 'Scene.RotateLine(' + block.getFieldValue('rotate_degree2') + ',false);\n';
    }else if (a == 'negative')
        return 'Scene.RotateLine(' + block.getFieldValue('rotate_degree2') + ',true);\n';
};

Blockly.Blocks['set_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("设置颜色")
        .appendField(new Blockly.FieldColour("#00ff00"), "part_color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['set_color'] = function(block) {
  var colour_part_color = block.getFieldValue('part_color');
  var code = 'Scene.SetColor("' + colour_part_color + '");\n';
  return code;
};

Blockly.Blocks['set_lineWidth'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置宽度")
            .appendField(new Blockly.FieldNumber(6, 1, 15, 1), "lineWidth")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_lineWidth'] = function (block) {
    return 'Scene.SetLineWidth(' + block.getFieldValue('lineWidth') + ');\n';
};

Blockly.Blocks['define_lineLength'] = {
    init: function () {
		this.appendDummyInput()
            .appendField(" 设置  length  至")
            .appendField(new Blockly.FieldNumber('???', 1, 15, 1), "line_length");
		this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('设置该变量的值');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['define_lineLength'] = function (block) {
    return 'var length;\n length = ' + block.getFieldValue('line_length') + ';\n';
};

Blockly.Blocks['para_lineLength'] = {
    init: function () {
		this.appendDummyInput()
				.appendField("length");
		this.setOutput(true,null);
        this.setTooltip('返回此变量的值');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['para_lineLength'] = function (block) {
    return '';
};

Blockly.Blocks['move_forward_para_calc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向前移动");
		this.appendValueInput("number1")//length
            .setCheck(null);
        this.appendDummyInput()
//            .appendField(new Blockly.FieldDropdown([["﹢","plus"], ["﹣","minus"], ["×","multiply"], ["÷","divide"], ["∧","remainder"]]), "operation")
                .appendField(new Blockly.FieldDropdown([["﹢","+"], ["﹣","-"], ["×","*"], ["÷","/"]]), "operation")
            .appendField(new Blockly.FieldNumber(1,1,20,1), "number2");
        //this.appendValueInput("number2")
          //  .setCheck(null);
		this.appendDummyInput()
			.appendField(" 格 ");
		this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_forward_para_calc'] = function (block) {
    return 'Scene.MoveForward(length '  +  block.getFieldValue('operation') +' ' +  block.getFieldValue('number2') +');\n';
};

Blockly.Blocks['define_lineLength2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(" 设置  length  至");
		this.appendValueInput("number1")//length
            .setCheck(null);
        this.appendDummyInput()
//            .appendField(new Blockly.FieldDropdown([["﹢","plus"], ["﹣","minus"], ["×","multiply"], ["÷","divide"], ["∧","remainder"]]), "operation")
                .appendField(new Blockly.FieldDropdown([["﹢","+"], ["﹣","-"], ["×","*"], ["÷","/"]]), "operation")
            .appendField(new Blockly.FieldNumber(1,1,20,1), "number2");
        //this.appendValueInput("number2")
          //  .setCheck(null);
		this.appendDummyInput()
			.appendField(" 格 ");
		this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['define_lineLength2'] = function (block) {
    //return 'Scene.MoveForward(length '  +  block.getFieldValue('operation') +' ' +  block.getFieldValue('number2') +');\n';
    return 'length = length' + block.getFieldValue('operation') +' ' +  block.getFieldValue('number2') +';\n';
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
    // TODO: Assemble JavaScript into code variable.
    var countNum = "";
    if(statements_do.match("for") != null){
      var countNum = statements_do.match(/for/g).length;
    }  
    var count = "count" + countNum;
    var code = 'for (var '+ count +' = 0; '+ count + ' < ' + number_times +'; '+ count + '++)\n {\n' + statements_do + ' }\n';
    return code;
  };
  
Blockly.Blocks['move_brush'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("移动画笔到原点")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_brush'] = function (block) {
    return 'Scene.MoveBrush();\n';
};