'use strict';

Blockly.Blocks['event_sys_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当开始运行");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_start'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_pause'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当暂停运行");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_pause'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_continue'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当从暂停恢复运行");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_continue'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当停止运行");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_stop'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_over'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当运行结束");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_over'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_click'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当点击鼠标[左/右]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_click'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_dbclick'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当双击鼠标[左/右]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_dbclick'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_mouse_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当按下鼠标[左/右]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_mouse_down'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_mouse_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当放开鼠标[左/右]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_mouse_up'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_mouse_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标移动");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_mouse_move'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_mouse_enter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标滑入[对象]范围");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_mouse_enter'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_mouse_leave'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当鼠标离开[对象]范围");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_mouse_leave'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_keypress'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当在键盘上敲击[]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_keypress'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_keydown'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当在键盘上按下[]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_keydown'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_keyup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当在键盘上松开[]键");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_keyup'] = function (block) {
    return '';
};

Blockly.Blocks['event_sys_receive_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当接收到[...]消息");
        this.setNextStatement(true, null);
        this.setColour('#0076ff');
        this.setTooltip('');
    }
};

Blockly.JavaScript['event_sys_receive_message'] = function (block) {
    return '';
};