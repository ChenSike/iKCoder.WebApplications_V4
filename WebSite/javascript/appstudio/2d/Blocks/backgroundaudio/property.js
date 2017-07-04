'use strict';

function openCustomBgAudioWindow(option) {
    showBlocklyPopup('自定义背景音乐', 'building...', function () { }, []);
};

Blockly.Blocks['bga_property_audio'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("背景声音")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["背景声音 1", "bga_audio_1"],
                        ["背景声音 2", "bga_audio_2"],
                        ["自定义背景声音", "bga_audio_custom"]
                    ],
                    function (option) {
                        this.sourceBlock_.updateAudio_(option);
                    }
                ), "bga_property_audio_fdd");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },

    updateAudio_: function (option) {
        openCustomBgAudioWindow(option);
        if (option == 'bga_audio_custom') {
        } else {
        }

        //this.getField('bg_property_audio_fdd').setValue('bg_audio_4')
    }
};

Blockly.JavaScript['bga_property_audio'] = function (block) {
    var dropdown_name = block.getFieldValue('bga_property_audio_fdd');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};