'use strict';

Blockly.Blocks['prop_event_stop'] = {
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

Blockly.JavaScript['prop_event_stop'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['prop_event_pause'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当暂停运行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['prop_event_pause'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['prop_event_move_to'] = {
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

Blockly.JavaScript['prop_event_move_to'] = function (block) {
    var number_name = block.getFieldValue('event_x');
    var number_name = block.getFieldValue('event_y');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    var code = '...;\n';
    return code;
};

Blockly.Blocks['prop_event_change_image'] = {
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

Blockly.JavaScript['prop_event_change_image'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['prop_event_collide'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当发生碰撞");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['prop_event_collide'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};