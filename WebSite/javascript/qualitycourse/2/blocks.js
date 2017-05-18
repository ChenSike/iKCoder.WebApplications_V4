'use strict';

Blockly.FieldColour.COLOURS = goog.ui.ColorPicker.SIMPLE_GRID_COLORS.concat(['#0f0707', '#b44b39', '#7abf8e', '#dc5f45', '#e07a57', '#a49789', '#ff9ea5']);

Blockly.Blocks['scene_object_wolf_setting_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("狼的")
            .appendField(new Blockly.FieldDropdown([
                ["身体", "torso"],
                ["头", "head"],
                ["嘴巴", "mouth"],
                ["牙齿", "tooth"],
                ["舌头", "tongue"],
                ["鼻子", "nose"],
                ["眼睛", "eye"],
                ["瞳孔", "iris"],
                ["耳朵", "ear"],
                ["尾巴", "tail"],
                ["腿", "paw"]
            ],
            function (option) {
                this.sourceBlock_.updateItemValue(option);
            }), "part_name")
            .appendField("宽")
            .appendField(new Blockly.FieldNumber(monsterDefault['torso'].w, -Infinity, Infinity, 1), "part_width")
            .appendField("高")
            .appendField(new Blockly.FieldNumber(monsterDefault['torso'].h, - Infinity, Infinity, 1), "part_height")
            .appendField("深")
            .appendField(new Blockly.FieldNumber(monsterDefault['torso'].d, -Infinity, Infinity, 1), "part_depth")
            .appendField("颜色")
            .appendField(new Blockly.FieldColour(monsterDefault['torso'].c.color.getStyle()), "part_color");
        this.setPreviousStatement(true, "scene_object_wolf_setting_item");
        this.setNextStatement(true, "scene_object_wolf_setting_item");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateItemValue: function (option) {
        var valueObj = monsterDefault[option];
        if (option == 'tail' || option == 'paw') {
            this.inputList[0].fieldRow[2].setValue('顶部半径')
            this.inputList[0].fieldRow[4].setValue('底部半径')
            this.inputList[0].fieldRow[6].setValue('高')
            this.inputList[0].fieldRow[3].setValue(valueObj.rt);
            this.inputList[0].fieldRow[5].setValue(valueObj.rb);
            this.inputList[0].fieldRow[7].setValue(valueObj.h);
        } else {
            this.inputList[0].fieldRow[2].setValue("宽");
            this.inputList[0].fieldRow[4].setValue("高");
            this.inputList[0].fieldRow[6].setValue("深");
            this.inputList[0].fieldRow[3].setValue(valueObj.w);
            this.inputList[0].fieldRow[5].setValue(valueObj.h);
            this.inputList[0].fieldRow[7].setValue(valueObj.d);
        }

        this.inputList[0].fieldRow[9].setValue(valueObj.c.color.getStyle());
    }
};

Blockly.JavaScript['scene_object_wolf_setting_item'] = function (block) {
    var dropdown_part_name = block.getFieldValue('part_name');
    var number_part_width = block.getFieldValue('part_width');
    var number_part_height = block.getFieldValue('part_height');
    var number_part_depth = block.getFieldValue('part_depth');
    var colour_part_color = block.getFieldValue('part_color');
    var code = 'Scene.SetMonsterProperty("' + dropdown_part_name + '", ' + number_part_width + ', ' + number_part_height + ', ' + number_part_depth + ', "' + colour_part_color + '");\n';
    return code;
};

Blockly.Blocks['scene_object_wolf_setting'] = {
    init: function () {
        this.appendStatementInput("settings")
            .setCheck("scene_object_wolf_setting_item")
            .appendField("设置狼的属性");
        this.setInputsInline(false);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_object_wolf_setting'] = function (block) {
    var statements_settings = Blockly.JavaScript.statementToCode(block, 'settings');
    var code = 'Scene.ReinitMonsterProperty();\n' + statements_settings + 'Scene.UpdateMonsterProperty();\n';
    return code;
};

Blockly.Blocks['scene_object_rabbit_setting_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("兔子的")
            .appendField(new Blockly.FieldDropdown([
                ["身体", "torso"],
                ["头", "head"],
                ["嘴巴", "mouth"],
                ["鼻子", "nose"],
                ["眼睛", "eye"],
                ["瞳孔", "iris"],
                ["耳朵", "ear"],
                ["尾巴", "tail"],
                ["前腿", "pawF"],
                ["后腿", "pawB"],
                ["裤子", "pants"],
                ["脸颊", "cheek"]
            ],
            function (option) {
                this.sourceBlock_.updateItemValue(option);
            }), "part_name")
            .appendField("宽")
            .appendField(new Blockly.FieldNumber(heroDefault['torso'].w, -Infinity, Infinity, 1), "part_width")
            .appendField("高")
            .appendField(new Blockly.FieldNumber(heroDefault['torso'].h, -Infinity, Infinity, 1), "part_height")
            .appendField("深")
            .appendField(new Blockly.FieldNumber(heroDefault['torso'].d, -Infinity, Infinity, 1), "part_depth")
            .appendField("颜色")
            .appendField(new Blockly.FieldColour(heroDefault['torso'].c.color.getStyle()), "part_color");
        this.setPreviousStatement(true, "scene_object_rabbit_setting_item");
        this.setNextStatement(true, "scene_object_rabbit_setting_item");
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateItemValue: function (option) {
        var valueObj = heroDefault[option];
        this.inputList[0].fieldRow[3].setValue(valueObj.w);
        this.inputList[0].fieldRow[5].setValue(valueObj.h);
        this.inputList[0].fieldRow[7].setValue(valueObj.d);
        this.inputList[0].fieldRow[9].setValue(valueObj.c.color.getStyle());
    }
};

Blockly.JavaScript['scene_object_rabbit_setting_item'] = function (block) {
    var dropdown_part_name = block.getFieldValue('part_name');
    var number_part_width = block.getFieldValue('part_width');
    var number_part_height = block.getFieldValue('part_height');
    var number_part_depth = block.getFieldValue('part_depth');
    var colour_part_color = block.getFieldValue('part_color');
    var code = 'Scene.SetHeroProperty("' + dropdown_part_name + '", ' + number_part_width + ', ' + number_part_height + ', ' + number_part_depth + ', "' + colour_part_color + '");\n';
    return code;
};

Blockly.Blocks['scene_object_rabbit_setting'] = {
    init: function () {
        this.appendStatementInput("settings")
            .setCheck("scene_object_rabbit_setting_item")
            .appendField("设置兔子的属性");
        this.setInputsInline(false);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setDeletable(false);
    }
};

Blockly.JavaScript['scene_object_rabbit_setting'] = function (block) {
    var statements_settings = Blockly.JavaScript.statementToCode(block, 'settings');
    var code = 'Scene.ReinitHeroProperty();\n' + statements_settings + 'Scene.UpdateHeroProperty();\n';
    return code;
};