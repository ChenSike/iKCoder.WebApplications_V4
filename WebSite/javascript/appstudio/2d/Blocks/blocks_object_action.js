'use strict';

Blockly.Blocks['object_action_move'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("移动");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_action_move'] = function (block) {
    return '';
};

Blockly.Blocks['object_action_rotate'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("初始位置");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_action_rotate'] = function (block) {
    return '';
};

Blockly.Blocks['object_action_jump'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("初始尺寸");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_action_jump'] = function (block) {
    return '';
};

Blockly.Blocks['object_action_run'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("是否可删除");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_action_run'] = function (block) {
    return '';
};

Blockly.Blocks['object_action_custom'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("是否可见");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_action_custom'] = function (block) {
    return '';
};