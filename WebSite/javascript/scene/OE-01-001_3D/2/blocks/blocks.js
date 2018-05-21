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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(210);
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['set_wolf_shape'] = function (block) {
    var head = block.getFieldValue('wolf_head');
    var body = block.getFieldValue('wolf_body');
    var ear = block.getFieldValue('wolf_ear');
    var color = block.getFieldValue('wolf_color');
    var code = 'Scene.setWolfShape("' + head + '","' + body + '","' + ear + '","' + color + '");\n';
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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(330);
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['set_rabbit_shape'] = function (block) {
    var head = block.getFieldValue('rabbit_head');
    var body = block.getFieldValue('rabbit_body');
    var ear = block.getFieldValue('rabbit_ear');
    var color = block.getFieldValue('rabbit_color');
    var code = 'Scene.setRabbitShape("' + head + '","' + body + '","' + ear + '","' + color + '");\n';
    return code;
};

Blockly.Blocks['scene_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置场景内主要角色的外观");
        this.appendStatementInput("scene_roles_setting").setCheck(null);
        this.setInputsInline(true);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting'] = function (block) {
    var code = Blockly.JavaScript.statementToCode(block, 'scene_roles_setting');
    return code;
};

Blockly.Blocks['scene_setting_complete'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置完毕");
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setColour(240);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_setting_complete'] = function (block) {
    var code = 'Scene.settingComplete();';
    return code;
};