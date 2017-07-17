﻿'use strict';

Blockly.Blocks['player_method_keepmoving'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("持续平移");
        this.appendDummyInput()
            .appendField("方向")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "fdd_orientation");
        this.appendDummyInput()
            .appendField("速度")
            .appendField(new Blockly.FieldNumber(0), "fnum_speed")
            .appendField("像素/秒");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_keepmoving'] = function (block) {
    var dropdown_name = block.getFieldValue('fdd_orientation');
    var number_name = block.getFieldValue('fnum_speed');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_moveto'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("移动到");
        this.appendDummyInput()
            .appendField("坐标")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0), "fnum_pos_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0), "fnum_pos_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_moveto'] = function (block) {
    var number_name = block.getFieldValue('fnum_pos_x');
    var number_name = block.getFieldValue('fnum_pos_y');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_moveby'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("按自定义函数移动");
        this.appendValueInput("fn_moveby")
            .appendField("函数")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_moveby'] = function (block) {
    var number_name = block.getFieldValue('fn_moveby');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_rotate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("旋转");
        this.appendDummyInput()
            .appendField("方向")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "fdd_orientation");
        this.appendDummyInput()
            .appendField("角度")
            .appendField(new Blockly.FieldNumber(0), "fnum_angle");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_rotate'] = function (block) {
    var dropdown_name = block.getFieldValue('fdd_orientation');
    var number_name = block.getFieldValue('fnum_angle');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_jump'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("跳跃");
        this.appendDummyInput()
            .appendField("高度")
            .appendField(new Blockly.FieldNumber(0), "fnum_angle");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_jump'] = function (block) {
    var number_name = block.getFieldValue('fnum_angle');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_squat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("蹲下");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_squat'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("卧倒");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_down'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_diminish'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("缩小");
        this.appendDummyInput()
            .appendField("倍数")
            .appendField(new Blockly.FieldNumber(0), "fnum_angle");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_diminish'] = function (block) {
    var number_name = block.getFieldValue('fnum_angle');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_magnify'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("放大");
        this.appendDummyInput()
            .appendField("倍数")
            .appendField(new Blockly.FieldNumber(0), "fnum_angle");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_magnify'] = function (block) {
    var number_name = block.getFieldValue('fnum_angle');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_change_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("切换图片");
        this.appendDummyInput()
            .appendField("切换为")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "fdd_orientation");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_change_image'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("停止");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_stop'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_pause'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("暂停");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_pause'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_shot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("发射");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_shot'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_method_invincible'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("无敌");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_method_invincible'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
