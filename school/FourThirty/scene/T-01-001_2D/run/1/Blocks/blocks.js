Blockly.Blocks['event_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("开始运行");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['event_start'] = function (block) {
    var code = "Scene.start();\n";
    return code;
    //return '';
};

Blockly.Blocks['block_background'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("添加背景");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('');
    }
};

Blockly.JavaScript['block_background'] = function (block) {
    var code = 'Scene.SetBackground();\n';
    return code;
};

Blockly.Blocks['block_obstacle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("随机添加障碍物");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(150);
        this.setTooltip('');
    }
};

Blockly.JavaScript['block_obstacle'] = function (block) {
    var code = 'Scene.SetRandomObstacle();\n';
    return code;
};

Blockly.Blocks['block_prop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("随机添加道具");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['block_prop'] = function (block) {
    var code = 'Scene.SetRandomProp();\n';
    return code;
};

Blockly.Blocks['block_player'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("添加游戏角色");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['block_player'] = function (block) {
    var code = 'Scene.SetPlayer();\n';
    return code;
};

Blockly.Blocks['event_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("配置运行环境");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['event_setting'] = function (block) {
    return '';
};