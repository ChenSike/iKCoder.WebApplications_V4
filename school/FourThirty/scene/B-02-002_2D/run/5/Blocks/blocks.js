'use strict';

Blockly.Blocks['event_start'] = {
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

Blockly.JavaScript['event_start'] = function (block) {
    var code = "Scene.AllowStart();\n";
    return code;
    //return '';
};

Blockly.Blocks['block_jump'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("人物小跳跃");
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

Blockly.Blocks['block_large_jump'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("跃过障碍物");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(20);
		this.setTooltip('');
	}
};

Blockly.JavaScript['block_large_jump'] = function (block) {
	var code = 'Scene.CallIKCoderRun_Set_JumpBarrierStep();\n';
	return code;
};

Blockly.Blocks['block_pickup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("跑步获得币");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
    }
};

Blockly.JavaScript['block_pickup'] = function (block) {
    var code = 'Scene.CallIKCoderRun_Set_PickupStep();\n';
    return code;
};

Blockly.Blocks['block_jumppickup'] = {
	init: function () {
		this.appendDummyInput()
            .appendField("跳跃获得币");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip('');
	}
};

Blockly.JavaScript['block_jumppickup'] = function (block) {
	var code = 'Scene.CallIKCoderRun_Set_JumpPickupStep();\n';
	return code;
};

Blockly.Blocks['block_judgecollion'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("如果前方有障碍物");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.JavaScript['block_judgecollion'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'Scene.CallIKCoderRun_Set_JudegeMent(\'' + $.trim(statements_name) + '\');\n';
    return code;
};