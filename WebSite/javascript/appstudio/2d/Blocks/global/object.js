'use strict';

function openCustomBgImageWindow(option) {
    showBlocklyPopup('自定义背景图片', 'building...', function () { }, []);
};

Blockly.Blocks['background'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("背景对象");
        //this.appendDummyInput()
        //    .appendField("属性")
        //    .appendField("背景图片")
        //    .appendField(new Blockly.FieldDropdown([
        //        ["默认背景图片 1", "bg_image_1"],
        //        ["默认背景图片 2", "bg_image_2"],
        //        ["默认背景图片 3", "bg_image_3"],
        //        ["自定义背景图片", "bg_image_custom"]
        //    ],
        //    function (option) {
        //        this.sourceBlock_.updateImage_(option);
        //    }
        //), "bg_property_image");
        this.appendDummyInput()
            .appendField("属性")
            .appendField("初始大小")
            .appendField("宽")
            .appendField(new Blockly.FieldNumber(0), "bg_property_org_width")
            .appendField("高")
            .appendField(new Blockly.FieldNumber(0), "bg_property_org_height");
        this.appendDummyInput()
            .appendField("属性")
            .appendField("填充方式")
            .appendField(new Blockly.FieldDropdown([
                ["填充", "1"],
                ["居中", "2"],
                ["拉伸铺满", "3"],
                ["保持长宽比拉伸", "4"]
            ],
            function (option) {
                this.sourceBlock_.updateFillModle_(option);
            }
        ), "bg_property_fillmodle");
        this.appendDummyInput()
            .appendField("属性")
            .appendField("初始位置")
            .appendField("X:")
            .appendField(new Blockly.FieldNumber(0), "bg_property_org_x")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0), "bg_property_org_y");
        this.appendStatementInput("bg_images")
            .appendField("属性")
            .setCheck(null)
            .appendField("背景图片");
        this.appendStatementInput("bg_events")
            .setCheck(null)
            .appendField("绑定事件");
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'bg_image_custom') {

        } else {

        }
    },

    updateFillModle_: function (option) {
        openCustomBgImageWindow(option);
        if (option == '1') {

        } else {

        }
    }
};

Blockly.JavaScript['background'] = function (block) {
    //var dropdown_name = block.getFieldValue('bg_property_image');
    var number_name = block.getFieldValue('bg_property_org_width');
    var number_name = block.getFieldValue('bg_property_org_height');
    var dropdown_name = block.getFieldValue('bg_property_fillmodle');
    var number_name = block.getFieldValue('bg_property_org_x');
    var number_name = block.getFieldValue('bg_property_org_y');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'bg_images');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'bg_events');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['backgroundaudio'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("背景音乐对象");
        this.appendDummyInput()
            .appendField("属性")
            .appendField("音量")
            .appendField(new Blockly.FieldNumber(0), "bga_property_org_volume");
        this.appendDummyInput()
            .appendField("属性")
            .appendField("循环方式")
            .appendField(new Blockly.FieldDropdown([
                ["单一循环", "1"],
                ["全部循环", "2"],
                ["随机播放", "3"]
            ],
            function (option) {
                this.sourceBlock_.updateCycleModle_(option);
            }
        ), "bga_property_fillmodle");
        this.appendStatementInput("background_property")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("background_method")
            .setCheck(null)
            .appendField("方法");
        this.appendStatementInput("background_event")
            .setCheck(null)
            .appendField("事件");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateFillModle_: function (option) {
        if (option == '1') {

        } else {

        }
    }
};

Blockly.JavaScript['backgroundaudio'] = function (block) {
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
        this.appendDummyInput()
            .appendField("属性")
            .appendField("音量")
            .appendField(new Blockly.FieldNumber(0), "bga_property_org_volume");
                this.appendDummyInput()
                    .appendField("属性")
                    .appendField("循环方式")
                    .appendField(new Blockly.FieldDropdown([
                        ["单一循环", "1"],
                        ["全部循环", "2"],
                        ["随机播放", "3"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateCycleModle_(option);
                    }
                ), "bga_property_fillmodle");

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