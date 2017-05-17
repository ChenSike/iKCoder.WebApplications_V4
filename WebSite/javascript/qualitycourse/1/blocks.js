'use strict';

Blockly.Blocks['scene_setting'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("场景包含");
        this.appendStatementInput("objcets")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting'] = function (block) {
    var code = Blockly.JavaScript.statementToCode(block, 'objcets');
    code = 'Scene.initSceneEnvironment();\n' + code;
    return code;
};

Blockly.Blocks['scene_object_wolf'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("狼");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_wolf'] = function (block) {
    var code = 'Scene.CreateWolf();\n';
    return code;
};

Blockly.Blocks['scene_object_rabbit'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("兔子");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_rabbit'] = function (block) {
    var code = 'Scene.CreateRabbit();\n';
    return code;
};

Blockly.Blocks['scene_background'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_background'] = function (block) {
    var code = 'Scene.SetBackground();\n';
    return code;
};

Blockly.Blocks['scene_music'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("音乐");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_music'] = function (block) {
    var code = 'Scene.SetMusic();\n';
    return code;
};