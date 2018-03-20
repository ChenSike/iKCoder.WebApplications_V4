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
