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
            .appendField(new Blockly.FieldNumber(10,1,24,0.01), "move_steps")
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

Blockly.Blocks['move_to'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("移动到点")
            .appendField(new Blockly.FieldDropdown([["(-6, -2)","-6,-2"], ["(-6, -6)","-6,-6"], ["(2, -8)","2,-8"], ["(2, -12)","2,-12"]]), "move_point")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_to'] = function (block) {
    //var a = block.getFieldValue('move_point');
    return 'Scene.MoveTo(' + block.getFieldValue('move_point') + ');\n';

};

Blockly.Blocks['positive_rotate_line'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["顺时针","positive"], ["逆时针","negative"]]), "rotate_derection")
        .appendField("旋转线段")
//            .appendField(new Blockly.FieldNumber(120, 1, 360, 1), "rotate_degree")
        .appendField(new Blockly.FieldDropdown([["30","30"], ["45","45"],["60","60"],["90","90"],["135","135"]]), "rotate_degree")
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
        .appendField(new Blockly.FieldDropdown([["30","30"], ["45","45"],["60","60"],["90","90"],["135","135"]]), "rotate_degree2")
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

Blockly.Blocks['draw_circle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("圆心 X")
            .appendField(new Blockly.FieldNumber(0,-12,12,1), "centerX")
             .appendField("圆心 Y")
            .appendField(new Blockly.FieldNumber(0,-12,12,1), "centerY")
             .appendField("半径")
            .appendField(new Blockly.FieldNumber(1,1,12,1), "radius")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['draw_circle'] = function (block) {
    return 'Scene.DrawCircle(' + block.getFieldValue('centerX') +',' + block.getFieldValue('centerY') + ',' +block.getFieldValue('radius') + ');\n';
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
