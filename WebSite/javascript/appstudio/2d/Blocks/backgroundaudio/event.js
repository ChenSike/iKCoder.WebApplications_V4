'use strict';

Blockly.Blocks['bga_event_start'] = {
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

Blockly.JavaScript['bga_event_start'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_event_volume_change'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当音量变化");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_event_volume_change'] = function (block) {
    var number_name = block.getFieldValue('event_x');
    var number_name = block.getFieldValue('event_y');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_event_pause'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当暂停播放");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_event_pause'] = function (block) {
    var number_name = block.getFieldValue('event_angle');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_event_stop'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当停止播放");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_event_stop'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_event_restart'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当重新开始播放");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_event_restart'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};