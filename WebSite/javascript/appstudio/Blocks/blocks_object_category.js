'use strict';

Blockly.Blocks['object_background'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("背景");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_background'] = function (block) {
    return '';
};

Blockly.Blocks['object_player'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("人工控制的对象");
        this.setNextStatement(true, null);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_player'] = function (block) {
    return '';
};

Blockly.Blocks['object_NPC'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("电脑控制的对象");
        this.setNextStatement(true, null);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_NPC'] = function (block) {
    return '';
};

Blockly.Blocks['object_prop'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("道具对象");
        this.setNextStatement(true, null);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_prop'] = function (block) {
    return '';
};

Blockly.Blocks['object_border'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("边界对象");
        this.setNextStatement(true, null);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_border'] = function (block) {
    return '';
};

Blockly.Blocks['object_derive'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("衍生对象");
        this.setNextStatement(true, null);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_derive'] = function (block) {
    return '';
};

Blockly.Blocks['object_other'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("其他对象");
        this.setNextStatement(true, null);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_other'] = function (block) {
    return '';
};