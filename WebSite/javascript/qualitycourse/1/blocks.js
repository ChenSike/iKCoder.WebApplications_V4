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
    var code = 'Scene.initSceneEnvironment();\n';
    code += Blockly.JavaScript.statementToCode(block, 'scene_resource');
    code += '';
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
    var code = 'Scene.SetHeroModule("' + value_name + '");\n';
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
    var code = 'Scene.SetMonsterModule("' + value_name + '");\n';
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
    var code = 'Scene.SetObstacleModule("' + value_name + '");\n';
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
    var code = 'Scene.SetPropModule("' + value_name + '");\n';
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
    var code = 'Scene.SetBackground("' + value_name + '");\n';
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
    var code = 'Scene.SetMusic("' + value_name + '");\n';
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

Blockly.Blocks['scene_object_cat'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("猫");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_cat'] = function (block) {
    var code = 'cat';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_lion'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("狮子");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_lion'] = function (block) {
    var code = 'lion';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_dragon'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("龙");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_dragon'] = function (block) {
    var code = 'dragon';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_bird'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("鸡");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_bird'] = function (block) {
    var code = 'bird';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_object_mouse'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("老鼠");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_role_object');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_object_mouse'] = function (block) {
    var code = 'mouse';
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

Blockly.Blocks['scene_music'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景音乐");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_music_obj');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_music'] = function (block) {
    var code = 'music';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['scene_background'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("背景图");
        this.setInputsInline(true);
        this.setOutput(true, 'scene_background_obj');
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['scene_background'] = function (block) {
    var code = 'background';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};