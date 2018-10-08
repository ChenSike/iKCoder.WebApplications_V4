(function () {
    'use strict';

    var configuration = {
        "Input Device": [{
            cn: "鼠标",
            en: "Mouse",
            dt: "左键，右键以及滚轮",
            path: "svg/mouse.png"
        }, {
            cn: "键盘",
            en: "Keyboard",
            dt: "输入文字，数字，字母以及特殊字符， 命令",
            path: "svg/keyboard.png"
        }],
        "Output Device": [{
            cn: "显示器",
            en: "Monitor",
            dt: "显示图像，播放动画片以及游戏",
            path: "svg/monitor.png"
        }, {
            cn: "打印机",
            en: "Printer",
            dt: "将文字,图片输出在纸张上",
            path: "svg/printer.png"
        }, {
            cn: "耳机",
            en: "Earphones",
            dt: "输出声音",
            path: "svg/earphones.png"
        }],
        "Storage": [{
            cn: "硬盘",
            en: "Harddrive",
            dt: "存放数据，书柜",
            path: "svg/hard-drive.png"
        }, {
            cn: "光盘",
            en: "CD",
            dt: "Compact Disc",
            path: "svg/cd.png"
        }, {
            cn: "USB闪存盘",
            en: "USB Flash Disk",
            dt: "使用USB接口的移动存储设备",
            path: "svg/pendrive.png"
        }, {
            cn: "内存",
            en: "RAM",
            dt: "临时存储数据， 书包（根据需要存放数据）",
            path: "svg/ram-memory.png"
        }],
        "Computing": [{
            cn: "中央处理器",
            en: "CPU",
            dt: "运算中心，大脑",
            path: "svg/cpu.png"
        }, {
            cn: "显卡",
            en: "Grahpics Card",
            dt: "显示适配器",
            path: "svg/graphics-card.png"
        }, {
            cn: "主机",
            en: "Computer Tower",
            dt: "主机",
            path: "svg/computer.svg"
        }]
    };

    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined' ?
                    args[number] :
                    match;
            });
        };
    };

    var COMPUTER_FIELD_COMPONENT_SELECTION_DROPDOWN_FROM = 'computer-game-component-dropdown-from',
        COMPUTER_FIELD_COMPONENT_SELECTION_DROPDOWN_TO = 'computer-game-component-dropdown-to',
        COMPUTER_BLOCK_COMPONENT_SELECTION = 'computer-selection-block',
        COMPUTER_BLOCK_COMPONENT_CONFIGURATION = 'computer-configuration-block',
        COMPUTER_FIELD_COMPONENT_SELECT_LEVEL = 'computer-game-select-level';


    Blockly.Blocks[COMPUTER_BLOCK_COMPONENT_CONFIGURATION] = {
        init: function () {
            this.setPreviousStatement(false);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');

            this.appendDummyInput().appendField("请选择连接模块");
        }
    };

    Blockly.JavaScript[COMPUTER_BLOCK_COMPONENT_CONFIGURATION] = function (block) {
        return 'Scene.clear();\n';
    };

    Blockly.Blocks['computer_block_connection'] = {
        init: function () {
            this.appendValueInput("from_computer_component")
                .setCheck("")
                .appendField("从");
            this.appendValueInput("to_computer_component")
                .setCheck(null)
                .appendField("至");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip('');
            this.setHelpUrl('');
        }
    };

    Blockly.JavaScript['computer_block_connection'] = function (block) {
        var value_from_computer_component = Blockly.JavaScript.valueToCode(block, 'from_computer_component');
        var value_to_computer_component = Blockly.JavaScript.valueToCode(block, 'to_computer_component');
        var code = "Scene.buildConnect(\"{0}\", \"{1}\");\n".format(
            value_from_computer_component, value_to_computer_component);
        return code;
    };

    var generateComponentBlocks = function (config) {
        var generateTmpl = function (identifier, path, code, alt) {
            identifier = identifier.replace(' ', '_').replace(' ', '_');
            var tmplArr = [];
            tmplArr.push('Blockly.Blocks["computer_component_block_' + identifier + '"] = {');
            tmplArr.push('  init: function() {');
            tmplArr.push('      this.appendDummyInput()');
            tmplArr.push('      .appendField(new Blockly.FieldImage("javascript/scene/image/intrcourse/' + path + '", 30, 30, "' + alt + '"));');
            tmplArr.push('      this.setInputsInline(true);');
            tmplArr.push('      this.setOutput(true, null);');
            tmplArr.push('      this.setColour(230);');
            tmplArr.push('      this.setTooltip("");');
            tmplArr.push('      this.setHelpUrl("");');
            tmplArr.push('  }');
            tmplArr.push('};\n');
            tmplArr.push('Blockly.JavaScript["computer_component_block_' + identifier + '"]  = function(block) {');
            tmplArr.push('  var code = "' + code + '";');
            tmplArr.push('  return [code, Blockly.JavaScript.ORDER_NONE];');
            tmplArr.push('};\n');

            return tmplArr.join('\n');
        };

        var ccomponents = [];
        for (var group in config) {
            ccomponents = Array.prototype.concat.apply(ccomponents, config[group]);
        }

        ccomponents.forEach(function (comp) {
            var identifier = comp.en.toLowerCase(),
                path = comp.path,
                code = comp.en,
                alt = comp.cn,
                tmpl = generateTmpl(identifier, path, code, alt);

            //console.log(tmpl);
            eval(tmpl);
        });
    };

    generateComponentBlocks(configuration);
})();
