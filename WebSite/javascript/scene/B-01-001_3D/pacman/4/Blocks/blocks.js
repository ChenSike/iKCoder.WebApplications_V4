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

Blockly.Blocks['turn_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向右转");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['turn_right'] = function (block) {
    return 'Scene.TurnRight();\n';
};

Blockly.Blocks['turn_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向左转");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['turn_left'] = function (block) {
    return 'Scene.TurnLeft();\n';
};


Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("向前移动")
            // .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "move_steps")
            .appendField("1  步 ")
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['move_forward'] = function (block) {
    // return 'Scene.move("", ' + block.getFieldValue('move_steps') + ');\n';
    return 'Scene.move(1);\n';
};