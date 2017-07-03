'use strict';

Blockly.Blocks['bg_event_start'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当开始运行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bg_event_start'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bg_event_move_to'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当移动到")
            .appendField("X: ")
            .appendField(new Blockly.FieldNumber(0), "event_x")
            .appendField("Y: ")
            .appendField(new Blockly.FieldNumber(0), "event_y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bg_event_move_to'] = function (block) {
    var number_name = block.getFieldValue('event_x');
    var number_name = block.getFieldValue('event_y');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bg_event_rotate_to'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当旋转到")
            .appendField("Angle: ")
            .appendField(new Blockly.FieldNumber(0), "event_angle");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bg_event_rotate_to'] = function (block) {
    var number_name = block.getFieldValue('event_angle');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bg_event_change_image'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当切换图片");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bg_event_change_image'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bg_event_stop'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当停止运行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bg_event_stop'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};