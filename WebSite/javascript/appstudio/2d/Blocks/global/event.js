'use strict';

var g_KeyMap = {
    32: ' ', 37: '←', 38: '↑', 39: '→', 40: '↓', 48: '0', 49: '1',
    50: '2', 51: '3', 52: '4', 53: '5', 54: '6', 55: '7', 56: '8', 57: '9',
    65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E',
    70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J', 75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O',
    80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y',
    90: 'Z'
};

Blockly.Blocks['global_event_keydown'] = {
    init: function () {
        var keyArr = [];
        for (var keyCode in g_KeyMap) {
            keyArr.push([g_KeyMap[keyCode], keyCode]);
        }

        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当按下")
            .appendField(new Blockly.FieldDropdown(keyArr), "global_property_key_fdd")
            .appendField("键");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_keydown'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_keyup'] = {
    init: function () {
        var keyArr = [];
        for (var keyCode in g_KeyMap) {
            keyArr.push([g_KeyMap[keyCode], keyCode]);
        }

        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当松开")
            .appendField(new Blockly.FieldDropdown(keyArr), "global_property_key_fdd")
            .appendField("键");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_keyup'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_keypress'] = {
    init: function () {
        var keyArr = [];
        for (var keyCode in g_KeyMap) {
            keyArr.push([g_KeyMap[keyCode], keyCode]);
        }

        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当敲击")
            .appendField(new Blockly.FieldDropdown(keyArr), "global_property_key_fdd")
            .appendField("键");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_keypress'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_mousedown'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当按下鼠标")
            .appendField(new Blockly.FieldDropdown(
                [
                    ['左', 'event_mouse_left'],
                    ['右', 'event_mouse_right']
                ]
            ), "global_property_key_fdd")
            .appendField("键");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_mousedown'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_mouseup'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当松开鼠标")
            .appendField(new Blockly.FieldDropdown(
                [
                    ['左', 'event_mouse_left'],
                    ['右', 'event_mouse_right']
                ]
            ), "global_property_key_fdd")
            .appendField("键");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_mouseup'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_click'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当点击鼠标")
            .appendField(new Blockly.FieldDropdown(
                [
                    ['左', 'event_mouse_left'],
                    ['右', 'event_mouse_right']
                ]
            ), "global_property_key_fdd")
            .appendField("键");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_click'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_start'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当开始");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_start'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['global_event_pause'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当暂停");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_pause'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_stop'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当停止");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_stop'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['global_event_over'] = {
    init: function () {
        this.appendStatementInput("event_fn")
            .setCheck(null)
            .appendField("当结束");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['global_event_over'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'event_fn');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};