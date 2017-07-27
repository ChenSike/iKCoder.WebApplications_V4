'use strict';

function openCustomPlayerImageWindow(option) {

};

Blockly.Blocks['npc_property_image'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("角色图片")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认角色图片 1", "npc_image_1"],
                        ["默认角色图片 2", "npc_image_2"],
                        ["自定义角色图片", "npc_image_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "npc_property_image_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'npc_image_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['npc_property_image'] = function (block) {
    var dropdown_name = block.getFieldValue('npc_property_image_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['npc_property_move_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("移动动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "npc_animation_1"],
                        ["默认动画 2", "npc_animation_2"],
                        ["自定义动画", "npc_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "npc_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'npc_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['npc_property_move_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('npc_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['npc_property_jump_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("跳跃动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "npc_animation_1"],
                        ["默认动画 2", "npc_animation_2"],
                        ["自定义动画", "npc_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "npc_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'npc_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['npc_property_jump_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('npc_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['npc_property_over_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("死亡动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "npc_animation_1"],
                        ["默认动画 2", "npc_animation_2"],
                        ["自定义动画", "npc_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "npc_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'npc_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['npc_property_over_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('npc_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['npc_property_collide_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("碰撞动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "npc_animation_1"],
                        ["默认动画 2", "npc_animation_2"],
                        ["自定义动画", "npc_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "npc_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'npc_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['npc_property_collide_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('npc_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};