'use strict';

function openCustomBgAudioWindow(option) {
    showBlocklyPopup('自定义背景音乐', 'building...', function () { }, []);
};

function openCustomBgImageWindow(option) {
    showBlocklyPopup('自定义背景图片', 'building...', function () { }, []);
};

Blockly.Blocks['bg_property_audio'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("背景音乐")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["背景音乐 1", "bg_audio_1"],
                        ["背景音乐 2", "bg_audio_2"],
                        ["自定义背景音乐", "bg_audio_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateAudio_(option);
                    }
                ), "bg_property_audio_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateAudio_: function (option) {
        openCustomBgAudioWindow(option);
        if (option == 'bg_audio_custom') {
        } else {
        }

        //this.getField('bg_property_audio_fdd').setValue('bg_audio_4')
    }
};

Blockly.JavaScript['bg_property_audio'] = function (block) {
    var dropdown_name = block.getFieldValue('bg_property_audio_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['bg_property_image'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("背景图片")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认背景图片 1", "bg_image_1"],
                        ["默认背景图片 2", "bg_image_2"],
                        ["自定义背景图片", "bg_image_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateImage_(option);
                    }
                ), "bg_property_image_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateImage_: function (option) {
        openCustomBgImageWindow(option);
        if (option == 'bg_image_custom') {

        } else {

        }
    }
};

Blockly.JavaScript['bg_property_image'] = function (block) {
    var dropdown_name = block.getFieldValue('bg_property_image_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};