'use strict';

Blockly.Blocks['set_control_mouse'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("使用鼠标控制: 单击")
            .appendField(new Blockly.FieldDropdown([["左键", "left"], ["右键", "right"]]), "control_mouse");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(210);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_control_mouse'] = function (block) {
    var button = block.getFieldValue('control_mouse');
    var code = 'Scene.setControl("mouse", "' + button + '");\n';
    return code;
};

Blockly.Blocks['set_control_keyboard'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("使用键盘控制: 按下")
            .appendField(new Blockly.FieldDropdown([
                ["方向键-上", "38"], 
                ["方向键-下", "40"], 
                ["方向键-左", "37"], 
                ["方向键-右", "39"], 
                ["空格键", "32"], 
                ["字母键-A", "65"], 
                ["字母键-S", "83"], 
                ["字母键-D", "68"], 
                ["字母键-W", "87"]
            ]), "control_keyboard");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(210);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_control_keyboard'] = function (block) {
    var keyCode = block.getFieldValue('control_keyboard');
    var code = 'Scene.setControl("key", "' + keyCode + '");\n';
    return code;
};

Blockly.Blocks['scene_control_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置如何控制逃亡者跳跃");
        this.appendStatementInput("scene_control").setCheck(null);
        this.setInputsInline(true);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_control_setting'] = function (block) {
    var code = Blockly.JavaScript.statementToCode(block, 'scene_control');
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