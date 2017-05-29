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
    //return 'Scene.start();\n';
    return '';
};

Blockly.Blocks['move_onestep_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向上移动 1 步");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_onestep_up'] = function (block) {
    return 'Scene.move("U", 1);\n';
};

Blockly.Blocks['move_onestep_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向下移动 1 步");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_onestep_down'] = function (block) {
    return 'Scene.move("D", 1);\n';
};

Blockly.Blocks['move_onestep_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向左移动 1 步");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_onestep_left'] = function (block) {
    return 'Scene.move("L", 1);\n';
};

Blockly.Blocks['move_onestep_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向右移动 1 步");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_onestep_right'] = function (block) {
    return 'Scene.move("R", 1);\n';
};
