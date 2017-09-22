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


Blockly.Blocks['block_blocks'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("添加障碍物");
		this.appendStatementInput("blocks")
			.setCheck(null)
			.setAlign(Blockly.ALIGN_CENTRE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['block_blocks'] = function (block) {
	var statements_block = Blockly.JavaScript.statementToCode(block, 'blocks');

	var code = '...;\n';
	return code;
};

Blockly.Blocks['block_conins'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("添加Coins");
		this.appendStatementInput("conins")
			.setCheck(null)
			.setAlign(Blockly.ALIGN_CENTRE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(330);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['block_conins'] = function (block) {
	var statements_block = Blockly.JavaScript.statementToCode(block, 'conins');

	var code = '...;\n';
	return code;
};

Blockly.Blocks['block_setposition'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("X:")
			.appendField(new Blockly.FieldNumber(0), "X")
			.appendField("Y:")
			.appendField(new Blockly.FieldNumber(0), "Y");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript['block_setposition'] = function (block) {
	var xVal = block.getFieldValue('X');
	var yVal = block.getFieldValue('Y');
	var code = '...;\n';
	return code;
};

