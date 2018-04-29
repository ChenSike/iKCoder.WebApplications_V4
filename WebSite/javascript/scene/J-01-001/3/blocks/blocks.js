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

Blockly.Blocks['initial_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置球员");
        this.appendValueInput("player")
            .setCheck("player");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['initial_setting'] = function (block) {
    var code = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_NONE);
    code += 'Scene.addPlayer(playerObject);\n';
    return code;
};

Blockly.Blocks['player'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员")
            .appendField("形象")
            .appendField(new Blockly.FieldDropdown([
                [{ "src": "javascript/scene/image/football/player/panda_bear.png", "width": 20, "height": 20, "alt": "Panda" }, "panda_bear"],
                [{ "src": "javascript/scene/image/football/player/grup.png", "width": 20, "height": 20, "alt": "Grup" }, "grup"],
                [{ "src": "javascript/scene/image/football/player/fourarms.png", "width": 20, "height": 20, "alt": "Four Arms" }, "fourarms"],
                [{ "src": "javascript/scene/image/football/player/prohyas.png", "width": 20, "height": 20, "alt": "Prohyas" }, "prohyas"],
                [{ "src": "javascript/scene/image/football/player/vambre.png", "width": 20, "height": 20, "alt": "Vambre" }, "vambre"],
                [{ "src": "javascript/scene/image/football/player/ben10.png", "width": 20, "height": 20, "alt": "Ben" }, "ben10"]
            ]), "figure")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(false);
        this.setOutput(true, "player");
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player'] = function (block) {
    var dropdown_figure = block.getFieldValue('figure');
    var number_coord_x = block.getFieldValue('coord_x');
    var number_coord_y = block.getFieldValue('coord_y');
    var code = 'var playerObject = new playerClass("' + dropdown_figure + '", ' + number_coord_x + ', ' + number_coord_y + ');\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['player_function_locate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员定位到")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0), "locate_position_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0), "locate_position_y");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_locate'] = function (block) {
    var number_locate_position_x = block.getFieldValue('locate_position_x');
    var number_locate_position_y = block.getFieldValue('locate_position_y');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_function_run'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员移动到")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0), "move_position_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0), "move_position_y");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_run'] = function (block) {
    var number_move_position_x = block.getFieldValue('move_position_x');
    var number_move_position_y = block.getFieldValue('move_position_y');
    // TODO: Assemble JavaScript into code variable.
    var code = 'playerObject.runTo(' + number_move_position_x + ', ' + number_move_position_y + ');\n';
    return code;
};

Blockly.Blocks['player_function_shot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员射门")
            .appendField("强度")
            .appendField(new Blockly.FieldNumber(0), "shot_level");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_shot'] = function (block) {
    var number_shot_level = block.getFieldValue('shot_level');
    // TODO: Assemble JavaScript into code variable.
    var code = 'playerObject.shot(' + number_shot_level + ');\n';
    return code;
};

Blockly.Blocks['player_function_tackle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员抢断");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_tackle'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'playerObject.tackle();\n';    
    return code;
};