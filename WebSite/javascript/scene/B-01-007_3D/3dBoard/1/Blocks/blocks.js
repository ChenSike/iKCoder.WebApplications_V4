'use strict';
Blockly.FieldColour.COLOURS = [ '#00ff00','#ff0000', '#0000ff','#ffb90f',  '#000000', '#888888','#cdc8b1', '#ffffff','#ffff00','#ff00ff','#00ffff','#b23aee'];
Blockly.FieldColour.COLUMNS = 4;
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";

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

Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向前移动")
            .appendField(new Blockly.FieldNumber(12,1,24,1), "move_steps")
            .appendField(" 格 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_forward'] = function (block) {
    return 'Scene.MoveForward(' + block.getFieldValue('move_steps') + ');\n';
};

Blockly.Blocks['jump_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["向上","up"], ["向下","down"], ["向左","left"], ["向右","right"]]), "jump_derection")
            .appendField("跳")
            .appendField(new Blockly.FieldNumber(1,1,24,1), "jump_steps")
            .appendField(" 格 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['jump_forward'] = function (block) {
    var a = block.getFieldValue('jump_derection');
    if (a == "up"){
        return 'Scene.jump(' + block.getFieldValue('jump_steps') + ', "up");\n';
    }else if (a == "down"){
        return 'Scene.jump(' + block.getFieldValue('jump_steps') + ', "down");\n';
    }else if (a == "left"){
        return 'Scene.jump(' + block.getFieldValue('jump_steps') + ', "left");\n';
    }else if (a == "right"){
        return 'Scene.jump(' + block.getFieldValue('jump_steps') + ', "right");\n';
    }
    
};

Blockly.Blocks['positive_rotate_line'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["顺时针","positive"], ["逆时针","negative"]]), "rotate_derection")
        .appendField("旋转线段")
//            .appendField(new Blockly.FieldNumber(120, 1, 360, 1), "rotate_degree")
        .appendField(new Blockly.FieldDropdown([["30","30"], ["60","60"],["120","120"],["180","180"]]), "rotate_degree")
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
//            .appendField(new Blockly.FieldNumber(120, 1, 360, 1), "rotate_degree")
        .appendField(new Blockly.FieldDropdown([["30","30"], ["60","60"],["120","120"],["180","180"]]), "rotate_degree2")
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

Blockly.Blocks['positive_rotate_triangle'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["顺时针","positive"], ["逆时针","negative"]]), "rotate_derection")
        .appendField("旋转三角形")
        .appendField(new Blockly.FieldDropdown([["60","60"], ["120","120"],["180","180"],["240","240"], ["300","300"]]), "rotate_degree")
        .appendField(" 度 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['positive_rotate_triangle'] = function (block) {
    var a = block.getFieldValue('rotate_derection');
    if (a == 'positive'){
        return 'Scene.RotateTriangle(' + block.getFieldValue('rotate_degree') + ',false);\n';
    }else if (a == 'negative')
        return 'Scene.RotateTriangle(' + block.getFieldValue('rotate_degree') + ',true);\n';
};

Blockly.Blocks['negative_rotate_triangle'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["逆时针","negative"] ,["顺时针","positive"]]), "rotate_derection2")
        .appendField("旋转三角形")
        .appendField(new Blockly.FieldDropdown([["60","60"], ["120","120"],["180","180"],["240","240"], ["300","300"]]), "rotate_degree2")
        .appendField(" 度 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['negative_rotate_triangle'] = function (block) {
    var a = block.getFieldValue('rotate_derection2');
    if (a == 'positive'){
        return 'Scene.RotateTriangle(' + block.getFieldValue('rotate_degree2') + ',false);\n';
    }else if (a == 'negative')
        return 'Scene.RotateTriangle(' + block.getFieldValue('rotate_degree2') + ',true);\n';
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

Blockly.Blocks['draw_triangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("画三角形")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['draw_triangle'] = function (block) {
    return 'draw_triangle();\n';
};

/*Blockly.Blocks['userFunction'] = {
    init: function () {
       var a = "";
        this.appendDummyInput().appendField("函数    画三角形").appendField(a, "NAME");
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip('');
        this.setHelpUrl();
        this.arguments_ = [];
        this.setStatements_(!0);
    },
    
    setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
    getProcedureDef: function () {
        return [this.getFieldValue("NAME"), this.arguments_, !0]
    },
};

Blockly.JavaScript['userFunction'] = function (block) {
    var b = 'draw_triangle',
    c = Blockly.JavaScript.statementToCode(block, "STACK");
    Blockly.JavaScript.STATEMENT_PREFIX && (c = Blockly.JavaScript.prefixLines(Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g, "'" + block.id + "'"), Blockly.JavaScript.INDENT) + c);
    Blockly.JavaScript.INFINITE_LOOP_TRAP && (c = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + c);
    var d = Blockly.JavaScript.valueToCode(block, "RETURN", Blockly.JavaScript.ORDER_NONE) || "";
    d && (d = "  return " + d + ";\n");
    for (var e = [], f = 0; f < block.arguments_.length; f++) e[f] = Blockly.JavaScript.variableDB_.getName(block.arguments_[f], Blockly.Variables.NAME_TYPE);
    c = "function " + b + "(" + e.join(", ") + ") {\n" + c + d + "}";
    c = Blockly.JavaScript.scrub_(block, c);
    Blockly.JavaScript.definitions_["%" + b] = c;
    return null
};*/


Blockly.Blocks['draw_triangle_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("函数    画三角形");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.JavaScript['draw_triangle_function'] = function(block) {
     var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
     var code = 'function draw_triangle()\n {\n' + statements_do + ' Scene.Brush.groupPatterns(3);\n};\n';
    return code;
};