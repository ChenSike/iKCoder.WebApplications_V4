'use strict';

Blockly.Blocks['player'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("球员");
        this.appendStatementInput("player_property")
            .setCheck("property")
            .appendField("属性");
        this.appendStatementInput("player_function")
            .setCheck("function")
            .appendField("动作");
        this.setInputsInline(true);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player'] = function (block) {
    var statements_player_property = Blockly.JavaScript.statementToCode(block, 'player_property');
    var statements_player_function = Blockly.JavaScript.statementToCode(block, 'player_function');
    var code = "var player = function (figure, ix, iy){\n";
    code += statements_player_property;
    code += "};\n\n";
    code += statements_player_function;
    return code;
};

Blockly.Blocks['player_property_figure'] = {
    init: function () {
        this.appendDummyInput().appendField("形象");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "property");
        this.setNextStatement(true, "property");
        this.setColour(260);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_property_figure'] = function (block) {
    var code = 'this.figure = figure;\n';
    return code;
};

Blockly.Blocks['player_property_position'] = {
    init: function () {
        this.appendDummyInput().appendField("位置");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "property");
        this.setNextStatement(true, "property");
        this.setColour(260);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_property_position'] = function (block) {
    var code = 'this.position = {x: ix, y: iy};\n';
    return code;
};

//Blockly.Blocks['player_function_setFigure'] = {
//    init: function () {
//        this.appendDummyInput().appendField("设置形象(figure)");
//        this.setPreviousStatement(true, "function");
//        this.setNextStatement(true, "function");
//        this.setColour(20);
//        this.setTooltip('');
//        this.setHelpUrl('http://www.example.com/');
//    }
//};
//Blockly.JavaScript['player_function_setFigure'] = function (block) {
//    var code = 'setFigure: function(figure){},\n';
//    return code;
//};
//Blockly.Blocks['player_function_locate'] = {
//    init: function () {
//        this.appendDummyInput().appendField("定位到(x,y)");
//        this.setPreviousStatement(true, "function");
//        this.setNextStatement(true, "function");
//        this.setColour(20);
//        this.setTooltip('');
//        this.setHelpUrl('http://www.example.com/');
//    }
//};
//Blockly.JavaScript['player_function_locate'] = function (block) {
//    var code = 'locateTo: function(x, y){},\n';
//    return code;
//};

Blockly.Blocks['player_function_run'] = {
    init: function () {
        this.appendDummyInput().appendField("移动到(x,y)");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_run'] = function (block) {
    var code = 'player.prototype.runTo = function(x, y){\n};\n\n';
    return code;
};

Blockly.Blocks['player_function_shot'] = {
    init: function () {
        this.appendDummyInput().appendField("射门(level)");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_shot'] = function (block) {
    var code = 'player.prototype.shot = function(level){\n};\n\n';
    return code;
};

Blockly.Blocks['player_function_tackle'] = {
    init: function () {
        this.appendDummyInput().appendField("抢断");
        this.setPreviousStatement(true, "function");
        this.setNextStatement(true, "function");
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['player_function_tackle'] = function (block) {
    var code = 'player.prototype.tackle = function(){\n};\n\n';
    return code;
};