'use strict';

Blockly.Blocks['event_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当开始运行");
        this.setNextStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['event_start'] = function (block) {
    return '';
};

Blockly.Blocks['bind_event'] = {
    init: function () {
        this.appendValueInput("player")
                .setCheck("event_player")
                .appendField("绑定事件到球员");
        this.appendStatementInput("move_event")
            .setCheck("move_func")
            .appendField("球员移动");
        this.appendStatementInput("action_event")
            .setCheck("action_func")
            .appendField("球员动作");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bind_event'] = function (block) {
    Blockly.JavaScript['bind_event'] = function (block) {
        var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_NONE);
        var statements_move_event = Blockly.JavaScript.statementToCode(block, 'move_event');
        var statements_action_event = Blockly.JavaScript.statementToCode(block, 'action_event');
        var code = value_player + statements_move_event + statements_action_event;
        return code;
    }
};

Blockly.Blocks['player_event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员")
            .appendField(new Blockly.FieldDropdown([
                [{ "src": "javascript/scene/image/football/player/panda_bear.png", "width": 20, "height": 20, "alt": "Panda" }, "panda_bear"],
                [{ "src": "javascript/scene/image/football/player/grup.png", "width": 20, "height": 20, "alt": "Grup" }, "grup"],
                [{ "src": "javascript/scene/image/football/player/fourarms.png", "width": 20, "height": 20, "alt": "Four Arms" }, "fourarms"],
                [{ "src": "javascript/scene/image/football/player/prohyas.png", "width": 20, "height": 20, "alt": "Prohyas" }, "prohyas"],
                [{ "src": "javascript/scene/image/football/player/vambre.png", "width": 20, "height": 20, "alt": "Vambre" }, "vambre"],
                [{ "src": "javascript/scene/image/football/player/ben10.png", "width": 20, "height": 20, "alt": "Ben" }, "ben10"]
            ]), "figure")
        this.setOutput(true, "event_player");
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_event'] = function (block) {
    var dropdown_figure = block.getFieldValue('figure');
    var code = 'Scene.setEventTarget("' + dropdown_figure + '");\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当按下");
        this.appendValueInput("key")
            .setCheck("keyboard_move_key");
        this.appendDummyInput()
            .appendField("球员");
        this.appendValueInput("direction")
            .setCheck("keyboard_move_direction");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "move_func");
        this.setNextStatement(true, "move_func");
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move'] = function (block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_NONE);
    var value_direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_NONE);
    var code = 'Scene.bindMoveEvent(' + value_key + ', ' + value_direction + ');\n';
    return code;
};

Blockly.Blocks['keyboard_move_key_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LEFT键(方向控制键)");
        this.setInputsInline(true);
        this.setOutput(true, "keyboard_move_key");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_key_left'] = function (block) {
    var code = '"left"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_key_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("RIGHT键(方向控制键)");
        this.setInputsInline(true);
        this.setOutput(true, "keyboard_move_key");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_key_right'] = function (block) {
    var code = '"right"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_key_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("UP键(方向控制键)");
        this.setInputsInline(true);
        this.setOutput(true, "keyboard_move_key");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_key_up'] = function (block) {
    var code = '"up"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_key_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DOWN键(方向控制键)");
        this.setInputsInline(true);
        this.setOutput(true, "keyboard_move_key");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_key_down'] = function (block) {
    var code = '"down"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_direction_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向左移动");
        this.setOutput(true, "keyboard_move_direction");
        this.setColour(310);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_direction_left'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_direction_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向左移动");
        this.setOutput(true, "keyboard_move_direction");
        this.setColour(310);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_direction_left'] = function (block) {
    var code = '"left"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_direction_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向右移动");
        this.setOutput(true, "keyboard_move_direction");
        this.setColour(310);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_direction_right'] = function (block) {
    var code = '"right"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_direction_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向上移动");
        this.setOutput(true, "keyboard_move_direction");
        this.setColour(310);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_direction_up'] = function (block) {
    var code = '"up"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_move_direction_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向下移动");
        this.setOutput(true, "keyboard_move_direction");
        this.setColour(310);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_move_direction_down'] = function (block) {
    var code = '"down"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_action'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当按下");
        this.appendValueInput("key")
            .setCheck("keyboard_action_key");
        this.appendDummyInput()
            .appendField("球员");
        this.appendValueInput("action")
            .setCheck("keyboard_action_func");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "action_func");
        this.setNextStatement(true, "action_func");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action'] = function (block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_NONE);
    var value_action = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_NONE);
    var code = 'Scene.bindActionEvent(' + value_key + ', ' + value_action + ');\n';
    return code;
};

Blockly.Blocks['keyboard_action_key_space'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SPACE(空格键)");
        this.setOutput(true, "keyboard_action_key");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action_key_space'] = function (block) {
    var code = '"space"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_action_func_pass'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("传球");
        this.setOutput(true, "keyboard_action_func");
        this.setColour(250);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action_func_pass'] = function (block) {
    var code = '"pass"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_action_key_shift'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SHIFT(上档转换键)");
        this.setOutput(true, "keyboard_action_key");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action_key_shift'] = function (block) {
    var code = '"shift"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_action_func_tackle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("铲球");
        this.setOutput(true, "keyboard_action_func");
        this.setColour(250);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action_func_tackle'] = function (block) {
    var code = '"tackle"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_action_key_ctrl'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CTRL(控制键)");
        this.setOutput(true, "keyboard_action_key");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action_key_ctrl'] = function (block) {
    var code = '"ctrl"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['keyboard_action_func_shoot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("射门");
        this.setOutput(true, "keyboard_action_func");
        this.setColour(250);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['keyboard_action_func_shoot'] = function (block) {
    var code = '"shoot"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};