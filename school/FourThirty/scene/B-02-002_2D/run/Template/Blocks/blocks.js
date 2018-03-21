Blockly.Blocks['block_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("开始运行");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['block_start'] = function (block) {
    return '';
    //return '';
};

Blockly.Blocks['block_jump'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("人物跳跃");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('');
    }
};

Blockly.JavaScript['block_jump'] = function (block) {    
    var code = 'Scene.CallIKCoderRun_Set_JumpStep();\n';
    return code;
};

Blockly.Blocks['block_run'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("人物奔跑");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
    }
};

Blockly.JavaScript['block_run'] = function (block) {
    var code = 'Scene.CallIKCoderRun_Set_RunningStep();\n';
    return code;
};