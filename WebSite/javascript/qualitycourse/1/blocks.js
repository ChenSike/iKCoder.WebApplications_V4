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

Blockly.Blocks['wolf_run'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("狼开始跑");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['wolf_run'] = function (block) {
    return 'Scene.WolfRun();\n';
};

Blockly.Blocks['rabbit_run'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("兔子开始跑");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['rabbit_run'] = function (block) {
    return 'Scene.RabbitRun();\n';
};

Blockly.Blocks['play_music'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("开始播放音乐");
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['play_music'] = function (block) {
    return 'Scene.PlayMusic();\n';
};