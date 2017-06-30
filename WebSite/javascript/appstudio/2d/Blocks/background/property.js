'use strict';

function openCustomBgImageWindow(option) {
    showBlocklyPopup('自定义背景图片', 'building...', function () { }, []);
};

Blockly.Blocks['bg_property_image'] = {
    init: function () {
        this.appendDummyInput()
        .appendField("背景图片")
        .appendField(new Blockly.FieldDropdown(
                    [
                        ["默认背景图片 1", "bg_image_1"],
                        ["默认背景图片 2", "bg_image_2"],
                        ["默认背景图片 3", "bg_image_3"],
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