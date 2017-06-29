'use strict';

Blockly.Blocks['event_click_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当点击[对象]");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_click_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_dbclick_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标双击[对象]");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_dbclick_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_drag_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当拖曳[对象]");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_drag_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_mouse_down_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当按下鼠标[左/右]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_mouse_down_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_mouse_up_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当放开鼠标[左/右]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_mouse_up_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_mouse_move_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标移动");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_mouse_move_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_mouse_enter_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标滑入[对象]范围");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_mouse_enter_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_mouse_leave_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标离开[对象]范围");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_mouse_leave_object'] = function (block) {
    return '';
};

Blockly.Blocks['event_receive_message_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当接收到[...]消息");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_receive_message_object'] = function (block) {
    return '';
};