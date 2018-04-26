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

Blockly.Blocks['set_background'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景(球场)");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_background'] = function (block) {
    return 'Scene.setBackground();\n';
};

Blockly.Blocks['set_football'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("添加足球");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_football'] = function (block) {
    return 'Scene.setFootball();\n';
};
//this.teamA = [t.panda_bear, t.grup, t.fourarms],
//this.teamB = [t.prohyas, t.vambre, t.ben10],
Blockly.Blocks['set_player_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员 Panda")
            .appendField(new Blockly.FieldImage("javascript/scene/image/football/player/panda_bear.png", 20, 20, "*"))
            .appendField("属性")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_player_1'] = function (block) {
    var coord_x = block.getFieldValue('coord_x');
    var coord_y = block.getFieldValue('coord_y');
    var code = 'Scene.setPlayer(0, ' + coord_x + ', ' + coord_y + ')';
    return code;
};

Blockly.Blocks['set_player_2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员 Grup")
            .appendField(new Blockly.FieldImage("javascript/scene/image/football/player/grup.png", 20, 20, "*"))
            .appendField("属性")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_player_2'] = function (block) {
    var coord_x = block.getFieldValue('coord_x');
    var coord_y = block.getFieldValue('coord_y');
    var code = 'Scene.setPlayer(1, ' + coord_x + ', ' + coord_y + ')';
    return code;
};

Blockly.Blocks['set_player_3'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员 Four Arms")
            .appendField(new Blockly.FieldImage("javascript/scene/image/football/player/fourarms.png", 20, 20, "*"))
            .appendField("属性")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_player_3'] = function (block) {
    var coord_x = block.getFieldValue('coord_x');
    var coord_y = block.getFieldValue('coord_y');
    var code = 'Scene.setPlayer(2, ' + coord_x + ', ' + coord_y + ')';
    return code;
};

Blockly.Blocks['set_player_4'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员 Prohyas")
            .appendField(new Blockly.FieldImage("javascript/scene/image/football/player/prohyas.png", 20, 20, "*"))
            .appendField("属性")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_player_4'] = function (block) {
    var coord_x = block.getFieldValue('coord_x');
    var coord_y = block.getFieldValue('coord_y');
    var code = 'Scene.setPlayer(3, ' + coord_x + ', ' + coord_y + ')';
    return code;
};

Blockly.Blocks['set_player_5'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员 Vambre")
            .appendField(new Blockly.FieldImage("javascript/scene/image/football/player/vambre.png", 20, 20, "*"))
            .appendField("属性")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_player_5'] = function (block) {
    var coord_x = block.getFieldValue('coord_x');
    var coord_y = block.getFieldValue('coord_y');
    var code = 'Scene.setPlayer(4, ' + coord_x + ', ' + coord_y + ')';
    return code;
};

Blockly.Blocks['set_player_6'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员 Ben")
            .appendField(new Blockly.FieldImage("javascript/scene/image/football/player/ben10.png", 20, 20, "*"))
            .appendField("属性")
            .appendField("位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0, 0, 1000, 1), "coord_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0, 0, 1700, 1), "coord_y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['set_player_6'] = function (block) {
    var coord_x = block.getFieldValue('coord_x');
    var coord_y = block.getFieldValue('coord_y');
    var code = 'Scene.setPlayer(5, ' + coord_x + ', ' + coord_y + ')';
    return code;
};