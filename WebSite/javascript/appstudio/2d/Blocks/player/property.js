'use strict';

function openCustomPlayerImageWindow(option) {

};

Blockly.Blocks['player_property_image'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("角色图片")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认角色图片 1", "player_image_1"],
                        ["默认角色图片 2", "player_image_2"],
                        ["自定义角色图片", "player_image_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_image_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_image_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_image'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_image_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_move_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("移动动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_move_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_jump_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("跳跃动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_jump_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_squat_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("下蹲动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_squat_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_down_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("卧倒动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_down_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_diminish_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("缩小动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_diminish_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_magnify_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("放大动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_magnify_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_over_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("死亡动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_over_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_invincible_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("无敌动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_invincible_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_behit_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("被击中动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_behit_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_shot_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("发射动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_shot_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_shot_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("发射动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_shot_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['player_property_collide_animation'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("碰撞动画")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认动画 1", "player_animation_1"],
                        ["默认动画 2", "player_animation_2"],
                        ["自定义动画", "player_animation_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "player_property_animation_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'player_animation_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['player_property_collide_animation'] = function (block) {
    var dropdown_name = block.getFieldValue('player_property_animation_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};