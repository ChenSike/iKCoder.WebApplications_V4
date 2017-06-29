'use strict';

Blockly.Blocks['object_property_type'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("类型");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_type'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_start_position'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("初始位置");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_start_position'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_start_size'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("初始尺寸");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_start_size'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_deletable'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("是否可删除");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_deletable'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_visible'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("是否可见");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_visible'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_moveable'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("是否可移动");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_moveable'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_interactive'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("是否可交互");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_interactive'] = function (block) {
    return '';
};

Blockly.Blocks['object_property_custom'] = {
    init: function () {
        this.appendDummyInput()
           .appendField("自定义属性");
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour('#E86CEB');
        this.setTooltip('');
    }
};

Blockly.JavaScript['object_property_custom'] = function (block) {
    return '';
};
