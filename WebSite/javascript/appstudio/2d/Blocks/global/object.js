'use strict';

Blockly.Blocks['background'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("背景对象");
        this.appendStatementInput("background_property")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("background_method")
            .setCheck(null)
            .appendField("方法");
        this.appendStatementInput("background_event")
            .setCheck(null)
            .appendField("事件");
        this.setInputsInline(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['background'] = function (block) {
    var statements_background_property = Blockly.JavaScript.statementToCode(block, 'background_property');
    var statements_background_method = Blockly.JavaScript.statementToCode(block, 'background_method');
    var statements_background_event = Blockly.JavaScript.statementToCode(block, 'background_event');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("玩家角色对象");
        this.appendStatementInput("player_property")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("player_method")
            .setCheck(null)
            .appendField("方法");
        this.appendStatementInput("player_event")
            .setCheck(null)
            .appendField("事件");
        this.setInputsInline(true);
        this.setColour(65);
        this.setTooltip('');
    }
};

Blockly.JavaScript['player'] = function (block) {
    var statements_background_property = Blockly.JavaScript.statementToCode(block, 'player_property');
    var statements_background_method = Blockly.JavaScript.statementToCode(block, 'player_method');
    var statements_background_event = Blockly.JavaScript.statementToCode(block, 'player_event');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['npc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("非玩家角色对象");
        this.appendStatementInput("npc_property")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("npc_method")
            .setCheck(null)
            .appendField("方法");
        this.appendStatementInput("npc_event")
            .setCheck(null)
            .appendField("事件");
        this.setInputsInline(true);
        this.setColour(65);
        this.setTooltip('');
    }
};

Blockly.JavaScript['player'] = function (block) {
    var statements_background_property = Blockly.JavaScript.statementToCode(block, 'npc_property');
    var statements_background_method = Blockly.JavaScript.statementToCode(block, 'npc_method');
    var statements_background_event = Blockly.JavaScript.statementToCode(block, 'npc_event');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['prop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("道具对象");
        this.appendStatementInput("prop_property")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("prop_method")
            .setCheck(null)
            .appendField("方法");
        this.appendStatementInput("prop_event")
            .setCheck(null)
            .appendField("事件");
        this.setInputsInline(true);
        this.setColour(65);
        this.setTooltip('');
    }
};

Blockly.JavaScript['player'] = function (block) {
    var statements_background_property = Blockly.JavaScript.statementToCode(block, 'prop_property');
    var statements_background_method = Blockly.JavaScript.statementToCode(block, 'prop_method');
    var statements_background_event = Blockly.JavaScript.statementToCode(block, 'prop_event');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};