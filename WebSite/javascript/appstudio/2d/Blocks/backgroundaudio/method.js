'use strict';

Blockly.Blocks['bga_method_play'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("播放");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_play'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_pause'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("暂停");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_pause'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_volumeup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("提高音量");        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_volumeup'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_volumedown'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("降低音量");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_volumedown'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_volumeto'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("调整音量到");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "fnum_volume");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_volumeto'] = function (block) {
    var number_name = block.getFieldValue('fnum_volume');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("停止播放");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_stop'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_restart'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("重新开始播放");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_restart'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bga_method_change_audio'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("切换声音");
        this.appendDummyInput()
            .appendField("切换为")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "fdd_change_audio");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['bga_method_change_audio'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
