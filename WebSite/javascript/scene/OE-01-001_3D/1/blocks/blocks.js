'use strict';
 
Blockly.Blocks['scene_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("场景中包含的资源");
        this.appendStatementInput("scene_resource")
            .setCheck('scene_role');
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
}

Blockly.JavaScript['scene_setting'] = function (block) {
    var code = '';// 'Scene.initSceneEnvironment();\n';
    code += Blockly.JavaScript.statementToCode(block, 'scene_resource');
    code += 'Scene.start();';
    return code;
};

Blockly.Blocks['scene_setting_hero'] = {
    init: function () {
        this.appendValueInput("scene_role_item")
            .setCheck('scene_role_object')
            .appendField("逃亡者(用户控制的角色)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'scene_role');
        this.setNextStatement(true, 'scene_role');
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting_hero'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'scene_role_item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Scene.SetRoleModule("' + value_name + '", "player");\n';
    return code;
};

Blockly.Blocks['scene_setting_monster'] = {
    init: function () {
        this.appendValueInput("scene_role_item")
            .setCheck('scene_role_object')
            .appendField("追逐者(怪物)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'scene_role');
        this.setNextStatement(true, 'scene_role');
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting_monster'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'scene_role_item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Scene.SetRoleModule("' + value_name + '", "monster");\n';
    return code;
};

Blockly.Blocks['scene_setting_obstacle'] = {
    init: function () {
        this.appendValueInput("scene_role_item")
            .setCheck('scene_role_object')
            .appendField("障碍物(逃亡者减速)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'scene_role');
        this.setNextStatement(true, 'scene_role');
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting_obstacle'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'scene_role_item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Scene.SetRoleModule("' + value_name + '", "obstacle");\n';
    return code;
};

Blockly.Blocks['scene_setting_prop'] = {
    init: function () {
        this.appendValueInput("scene_role_item")
            .setCheck('scene_role_object')
            .appendField("增益道具(逃亡者加速)");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'scene_role');
        this.setNextStatement(true, 'scene_role');
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting_prop'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'scene_role_item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Scene.SetRoleModule("' + value_name + '", "prop");\n';
    return code;
};

Blockly.Blocks['scene_setting_background'] = {
    init: function () {
        this.appendValueInput("scene_role_item")
            .setCheck('scene_background_obj')
            .appendField("背景");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'scene_role');
        this.setNextStatement(true, 'scene_role');
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting_background'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'scene_role_item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Scene.SetRoleModule("' + value_name + '", "floor");\n';
    return code;
};

Blockly.Blocks['scene_setting_music'] = {
    init: function () {
        this.appendValueInput("scene_role_item")
            .setCheck('scene_music_obj')
            .appendField("音乐");
        this.setInputsInline(true);
        this.setPreviousStatement(true, 'scene_role');
        this.setNextStatement(true, 'scene_role');
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_setting_music'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'scene_role_item', Blockly.JavaScript.ORDER_ATOMIC);
    var code =  'Scene.SetMusic("' + value_name + '");\n';
    return code;
};

Blockly.Blocks['scene_object_rabbit'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("兔子");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_rabbit'] = function (block) {
    var code = 'rabbit';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_wolf'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("狼");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_wolf'] = function (block) {
    var code = 'wolf';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_carrot'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("胡萝卜");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_carrot'] = function (block) {
    var code = 'carrot';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_hedgehog'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("刺猬");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_hedgehog'] = function (block) {
    var code = 'hedgehog';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_music_1'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景音乐 1");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_music_obj');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_music_1'] = function (block) {
    var code = 'media/sound_1.mp3';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_music_2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景音乐 2");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_music_obj');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_music_2'] = function (block) {
    var code = 'media/sound_2.mp3';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_background_grass'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景 草原");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_background_obj');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_background_grass'] = function (block) {
    var code = 'grass';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_background_forest'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景 森林");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_background_obj');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_background_forest'] = function (block) {
    var code = 'forest';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};