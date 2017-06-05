'use strict';

Blockly.FieldColour.COLOURS = goog.ui.ColorPicker.SIMPLE_GRID_COLORS.concat(['#0f0707', '#b44b39', '#7abf8e', '#dc5f45', '#e07a57', '#a49789', '#ff9ea5']);

Blockly.Blocks['set_wolf_shape'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置狼的外形");
        this.appendDummyInput()
            .appendField("头部")
            .appendField(new Blockly.FieldDropdown([["大", "max"], ["中", "middle"], ["小", "min"]]), "wolf_head");
        this.appendDummyInput()
            .appendField("身体")
            .appendField(new Blockly.FieldDropdown([["大", "max"], ["中", "middle"], ["小", "min"]]), "wolf_body");
        this.appendDummyInput()
            .appendField("耳朵")
            .appendField(new Blockly.FieldDropdown([["大", "max"], ["中", "middle"], ["小", "min"]]), "wolf_ear");
        this.appendDummyInput()
            .appendField("主体颜色")
            .appendField(new Blockly.FieldColour('#0f0707'), "wolf_color");
        this.setTooltip('');
        this.setColour(210);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_wolf_shape'] = function (block) {
    //var dropdown_part_name = block.getFieldValue('part_name');
    //var number_part_width = block.getFieldValue('part_width');
    //var number_part_height = block.getFieldValue('part_height');
    //var number_part_depth = block.getFieldValue('part_depth');
    //var colour_part_color = block.getFieldValue('part_color');
    //var code = 'Scene.SetMonsterProperty("' + dropdown_part_name + '", ' + number_part_width + ', ' + number_part_height + ', ' + number_part_depth + ', "' + colour_part_color + '");\n';
    var code = '';
    return code;
};


Blockly.Blocks['set_rabbit_shape'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置兔子的外形");
        this.appendDummyInput()
            .appendField("头部")
            .appendField(new Blockly.FieldDropdown([["大", "max"], ["中", "middle"], ["小", "min"]]), "rabbit_head");
        this.appendDummyInput()
            .appendField("身体")
            .appendField(new Blockly.FieldDropdown([["大", "max"], ["中", "middle"], ["小", "min"]]), "rabbit_body");
        this.appendDummyInput()
            .appendField("耳朵")
            .appendField(new Blockly.FieldDropdown([["大", "max"], ["中", "middle"], ["小", "min"]]), "rabbit_ear");
        this.appendDummyInput()
            .appendField("主体颜色")
            .appendField(new Blockly.FieldColour('#dc5f45'), "rabbit_color");
        this.setTooltip('');
        this.setColour(330);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_rabbit_shape'] = function (block) {
    //var dropdown_part_name = block.getFieldValue('part_name');
    //var number_part_width = block.getFieldValue('part_width');
    //var number_part_height = block.getFieldValue('part_height');
    //var number_part_depth = block.getFieldValue('part_depth');
    //var colour_part_color = block.getFieldValue('part_color');
    //var code = 'Scene.SetMonsterProperty("' + dropdown_part_name + '", ' + number_part_width + ', ' + number_part_height + ', ' + number_part_depth + ', "' + colour_part_color + '");\n';
    var code = '';
    return code;
};




