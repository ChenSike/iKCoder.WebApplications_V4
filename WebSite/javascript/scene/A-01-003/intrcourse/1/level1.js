//(function () {
'use strict';

var configuration = {
    "Input Device": [{
        cn: "鼠标",
        en: "Mouse",
        dt: "左键，右键以及滚轮",
        path: "javascript/scene/image/intrcourse/svg/mouse.png"
    }, {
        cn: "键盘",
        en: "Keyboard",
        dt: "输入文字，数字，字母以及特殊字符， 命令",
        path: "javascript/scene/image/intrcourse/svg/keyboard.png"
    }],
    "Output Device": [{
        cn: "显示器",
        en: "Monitor",
        dt: "显示图像，播放动画片以及游戏",
        path: "javascript/scene/image/intrcourse/svg/monitor.png"
    }, {
        cn: "打印机",
        en: "Printer",
        dt: "将文字,图片输出在纸张上",
        path: "javascript/scene/image/intrcourse/svg/printer.png"
    }, {
        cn: "耳机",
        en: "Earphones",
        dt: "输出声音",
        path: "javascript/scene/image/intrcourse/svg/earphones.png"
    }],
    "Storage": [{
        cn: "硬盘",
        en: "Harddrive",
        dt: "存放数据，书柜",
        path: "javascript/scene/image/intrcourse/svg/hard-drive.png"
    }, {
        cn: "光盘",
        en: "CD",
        dt: "Compact Disc",
        path: "javascript/scene/image/intrcourse/svg/cd.png"
    }, {
        cn: "USB闪存盘",
        en: "USB Flash Disk",
        dt: "使用USB接口的移动存储设备",
        path: "javascript/scene/image/intrcourse/svg/pendrive.png"
    }, {
        cn: "内存",
        en: "RAM",
        dt: "临时存储数据， 书包（根据需要存放数据）",
        path: "javascript/scene/image/intrcourse/svg/ram-memory.png"
    }],
    "Computing": [{
        cn: "中央处理器",
        en: "CPU",
        dt: "运算中心，大脑",
        path: "javascript/scene/image/intrcourse/svg/cpu.png"
    }, {
        cn: "显卡",
        en: "Grahpics Card",
        dt: "显示适配器",
        path: "javascript/scene/image/intrcourse/svg/graphics-card.png"
    }, {
        cn: "主机",
        en: "Computer Tower",
        dt: "主机",
        path: "javascript/scene/image/intrcourse/svg/computer.svg"
    }]
};

var groupNameMap = {
    'Input Device': { name: '输入设备', color: 'rgb(29,185,124)', icon: 'javascript/scene/image/intrcourse/svg/input.svg' },
    'Output Device': { name: '输出设备', color: 'rgb(52,151,216)', icon: 'javascript/scene/image/intrcourse/svg/output.svg' },
    'Storage': { name: '存储设备', color: 'rgb(234,85,60)', icon: 'javascript/scene/image/intrcourse/svg/database.svg' },
    'Computing': { name: '运算设备', color: 'rgb(255,153,0)', icon: 'javascript/scene/image/intrcourse/svg/calculator.svg' },
}

function searchForGroup(key, config, predicate) {
    if (predicate === undefined) return null;

    for (var group in config) {
        var components = config[group];
        for (var component in components) {
            if (predicate && predicate(key, components[component]))
                return group;
        }
    }

    return null;
}

function placeComponents(config, layer, categoryLayer, stage) {
    var ccomponents = [];
    for (var group in config) {
        ccomponents = Array.prototype.concat.apply(ccomponents, config[group]);
    }

    var cellDimension = 100;
    var numberOfComponents = ccomponents.length || 0;
    var verticalMargin = 50;
    var horizontalMargin = 50;
    var columns = Math.floor((stage.getWidth() - horizontalMargin) / cellDimension);
    var rows = Math.floor((stage.getHeight() - verticalMargin) / cellDimension);
    var cells = columns * rows;
    var imgSize = 60;

    var calcCmpSize = function () {
        var tmpVal = stage.getWidth() * stage.getHeight() / numberOfComponents;
        var flag = false;
        var tmpCol = 1;
        var tmpRow = Math.floor(numberOfComponents / tmpCol);
        var tmpCellSize = Math.floor(stage.getWidth() / tmpCol);
        while (!flag) {
            tmpRow = (tmpCol * tmpRow < numberOfComponents ? tmpRow + 1 : tmpRow);
            tmpCellSize = Math.floor(stage.getWidth() / tmpCol);
            if (tmpCellSize * tmpRow > stage.getHeight()) {
                tmpCol++;
                tmpRow = Math.floor(numberOfComponents / tmpCol);
                continue;
            } else {
                flag = true;
                columns = tmpCol;
                rows = tmpRow;
                cellDimension = tmpCellSize;
                verticalMargin = (stage.getHeight() - tmpCellSize * tmpRow) / 2;
                horizontalMargin = (stage.getWidth() - tmpCellSize * tmpCol) / 2;
                imgSize = cellDimension - 40 / 100 * cellDimension;
            }
        }
    };

    var calcCcomponentConfig = function (cellIndex, cellConfig) {
        var cn = cellConfig.cn,
            en = cellConfig.en,
            path = cellConfig.path,
            height = cellConfig.height || imgSize,
            width = cellConfig.width || imgSize,
            offsetX = (cellDimension - width) / 2,
            offsetY = (cellDimension - height) / 2,

            columnIndex = (cellIndex > columns - 1 ? cellIndex % columns : cellIndex),
            rowIndex = (cellIndex > columns - 1 ? Math.floor(cellIndex / columns) : 0),

            x = horizontalMargin / 2 + columnIndex * cellDimension + offsetX,
            y = verticalMargin / 2 + rowIndex * cellDimension + offsetY;

        return {
            x: x,
            y: y,
            width: width,
            height: height,
            file: path,
            en: en,
            cn: cn,
            id: en,
            row: rowIndex,
            column: columnIndex
        };
    };

    calcCmpSize();
    for (var i = 0; i < Math.min(cells, ccomponents.length) ; i++) {
        loadImage(calcCcomponentConfig(i, ccomponents[i]), layer, categoryLayer);
    }
}

function loadImage(config, layer, categoryLayer) {
    var box = new Konva.Ccomponent({
        x: config.x,
        y: config.y,
        orgX: config.x,
        orgY: config.y,
        width: config.width,
        height: config.height,
        orgWidth: config.width,
        orgHeight: config.height,
        draggable: config.draggable === undefined ? true : false,
        en: config.en,
        cn: config.cn,
        dt: config.dt,
        id: config.id,
        comp: false
    });

    box.componentPosition(config.row, config.column);

    var imageObj = new Image();
    imageObj.src = config.file;
    imageObj.onload = function () {
        box.image(imageObj);
        layer.draw();
    };

    imageObj.onerror = function () {
        imageObj.src = config.file + '?rnd=' + Date.now();
    };

    // add cursor styling
    box.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });

    box.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

    box.on('dragend', function () {
        this._isAssigned = false;
        layer.draw();
    });

    //box.on('mousedown', function () {
    //    this._isAssigned = false;
    //    layer.draw();
    //});

    //console.log('adding ' + config.file + ' at ' + config.x + ' ' + config.y);

    box instanceof Konva.Ccomponent && layer.add(box.resultImage);
    layer.add(box);
}

var detectIntersection = (function () {
    function intersectRect(r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    }

    // translate x, y, height and width to left, right, top, bottom
    function translateToRect(_rect) {
        var that = {};

        // convert konva rect/image to an object that contains x, y, width and height
        var rect = _rect.attrs || _rect;
        that.left = rect.x,
            that.right = rect.x + rect.width,
            that.top = rect.y,
            that.bottom = rect.y + rect.height;

        return that;
    }

    function isDetect(r1, r2) {
        return intersectRect(translateToRect(r1), translateToRect(r2));
    }

    return function (r) {
        var rects = Array.prototype.slice.call(arguments, 1)[0];
        for (var index = 0; index < rects.length; index++) {
            if (isDetect(rects[index], r)) {
                return rects[index];
            }
        }
        return null;
    };
})();

function scene(config, containerId) {
    this.config = config;
    this.containerId = containerId;
    // this.___init();
}

scene.prototype = {
    constructor: scene,
    init: function () {
        this.containerId = this.containerId || 'game_container';
        this.stage = new Konva.Stage({
            container: this.containerId,
            width: $('#' + this.containerId).width(),
            height: $('#' + this.containerId).height()
        });

        this.layer = new Konva.Layer();
        this.resultLayer = new Konva.Layer();
        this.categoryLayer = new Konva.Layer();
        this.connectionLayer = new Konva.Layer({
            clearBeforeDraw: true
        });

        this.__paint();
        this.__connectionSet = [];
        this.registerResize();
        this.__correctConnectionArr = [
            ["Mouse", "Computer Tower"],
            ["Keyboard", "Computer Tower"],
            ["Monitor", "Computer Tower"],
            ["Computer Tower", "Printer"],
            ["Computer Tower", "Earphones"],
            ["Harddrive", "Computer Tower"],
            ["Computer Tower", "Pendrive"],
            ["RAM", "Computer Tower"],
            ["CPU", "Computer Tower"],
            ["Graphics Card", "Computer Tower"],
            ["Computer Tower"]
        ];
    },

    getImages: function () {
        return (this.layer && this.layer.children) || [];
    },

    registerResize: function () {
        var that = this;
        $("#" + this.containerId).resize(function () {
            var width = $('#' + that.containerId).width(),
                height = $('#' + that.containerId).height();
            that.stage.width(width);
            that.stage.height(height);
            // clear content in layers
            [that.layer, this.resultLayer, this.connectionLayer].forEach(function (layer) {
                that._clearLayer(layer);
            });
            //console.log('onresize to width=' + width + ' height= ' + height);
            that.__connectionSet = [];
            that._paint();
        });
    },

    __paint: function () {
        placeComponents(this.config, this.layer, this.categoryLayer, this.stage);
        this.stage.add(this.categoryLayer);
        this.stage.add(this.layer);
        this.stage.add(this.resultLayer);
        this.stage.add(this.connectionLayer);
    },

    __getTurningPoints(comp1, comp2) {
        var points = [],
            start,
            end,
            diffStart,
            diffEnd;
        if (comp1.row === comp2.row) {
            start = this.__getBottomPoint(comp1);
            end = this.__getBottomPoint(comp2);
            points.push(start);
            points.push([start[0], start[1] + 20]);
            points.push([end[0], end[1] + 20]);
            points.push(end);
        } else if (comp1.column === comp2.column) {
            start = this.__getLeftSidePoint(comp1);
            end = this.__getLeftSidePoint(comp2);
            points.push(start);
            points.push([start[0] - 20, start[1]]);
            points.push([end[0] - 20, end[1]]);
            points.push(end);
        } else if ((comp1.row < comp2.row) && Math.abs(comp1.row - comp2.row) === 1) {
            start = this.__getBottomPoint(comp1);
            end = this.__getTopPoint(comp2);
            diffStart = Math.floor(Math.abs(start[1] - end[1]) / 2);
            diffEnd = Math.abs(start[1] - end[1]) - diffStart;
            points.push(start);
            points.push([start[0], start[1] + diffStart]);
            points.push([end[0], end[1] - diffEnd]);
            points.push(end);
        } else if (comp1.row > comp2.row && Math.abs(comp1.row - comp2.row) === 1) {
            start = this.__getTopPoint(comp1);
            end = this.__getBottomPoint(comp2);
            diffStart = Math.floor(Math.abs(start[1] - end[1]) / 2);
            diffEnd = Math.abs(start[1] - end[1]) - diffStart;
            points.push(start);
            points.push([start[0], start[1] - diffStart]);
            points.push([end[0], end[1] + diffEnd]);
            points.push(end);
        } else if (Math.abs(comp1.row - comp2.row) > 1) {
            if ((comp1.row - comp2.row) < 0) {
                start = this.__getLeftSidePoint(comp1);
                end = this.__getBottomPoint(comp2);
                points.push(start);
                points.push([start[0] - 20, start[1]]);
                points.push([start[0] - 20, end[1] + 20]);
                points.push([end[0], end[1] + 20]);
                points.push(end);
            } else {
                start = this.__getBottomPoint(comp1);
                end = this.__getLeftSidePoint(comp2);
                points.push(start);
                points.push([start[0], start[1] + 20]);
                points.push([end[0] - 20, start[1] + 20]);
                points.push([end[0] - 20, end[1]]);
                points.push(end);
            }
        }

        return points;
    },

    getByName: function (name) {
        var cc = this.layer.children,
            c;

        for (var i in cc) {
            c = cc[i];
            if (c.en === name || c.cn === name) break;
        }

        return c;
    },

    __getBottomPoint(comp) {
        return [
            comp.x() + comp.width() / 2,
            comp.y() + comp.height()
        ];
    },

    __getTopPoint(comp) {
        return [
            comp.x() + comp.width() / 2,
            comp.y()
        ];
    },

    __getLeftSidePoint(comp) {
        return [
            comp.x(),
            comp.y() + comp.height() / 2
        ];
    },

    startGame() {
        if (this.__connectionSet.length > 0)
            for (var i in this.__connectionSet) {
                var names = this.__connectionSet[i];
                ComputerScene.prototype._doConnect.apply(this, names);
            }
    },

    endGame() {
        this.connectionLayer.getCanvas().getContext().clear();
    },

    clear() {
        this._clearLayer(this.connectionLayer);
        this.connectionLayer.removeChildren();
        this.__connectionSet = [];
    },

    _clearLayer(layer) {
        layer && layer.getCanvas().getContext().clear();
    },

    buildConnect(name1, name2) {
        this.__connectionSet.push([name1, name2]);
        this._doConnect(name1, name2);
    },

    _doConnect(comp1Id, comp2Id) {
        var that = this;

        var
            comp1 = this.getByName(comp1Id),
            comp2 = this.getByName(comp2Id),
            arc = new Konva.ConnectionPoint({
                componentsLayer: that.layer,
                inc: 8,
                turnings: this.__getTurningPoints(comp1, comp2)
            });

        this.connectionLayer.add(arc);

        var anim = new Konva.Animation(function (frame) {
            if (!arc.isDone()) {
                arc.moveAction();
            } else {
                anim.stop();
                //console.log('anim done...');
            }
        }, this.connectionLayer);

        anim.start();
    },

    testConnect(x, y) {
        var comp1 = this.layer.children[x];
        var comp2 = this.layer.children[y];
        this.connect(comp1, comp2);
    },

    checkComplete() {
        var rightConnectionNum = 0;

        this.__correctConnectionArr.forEach(function (fromto) {
            var from = fromto[0],
                to = fromto[1];
            this.__connectionSet.forEach(function (conntected) {
                var conntectedFrom = conntected[0],
                    conntectedTo = conntected[1];

                if (from === conntectedFrom && to === conntectedTo) {
                    rightConnectionNum++;
                }
            });
        });

        return rightConnectionNum >= 3;
    }
};

var Scene = new scene(configuration, 'game_container');

Scene.reset = function () {
    Scene.clear();
    //$('.tooltip.tooltip-top').remove();
    //ComputerScene.layer.clear();
    //for (var i = 0; i < ComputerScene.layer.children.length; i++) {
    //    var item = ComputerScene.layer.children[i];
    //    if (item instanceof Konva.Ccomponent) {
    //        item.comp = false;
    //        item._isAssigned = false;
    //        item._isAssignedCorrectly = false;
    //        item.x(item.attrs.orgX);
    //        item.y(item.attrs.orgY);
    //        item.width(item.attrs.orgWidth);
    //        item.height(item.attrs.orgHeight);
    //        item.resultImage.image(null);
    //        item.draggable(true);
    //        item.on('mouseover', function () {
    //            document.body.style.cursor = 'pointer';
    //            showWarning(arguments[0]);
    //            showTooltip(arguments[0], true);
    //        });
    //    }
    //}

    //for(var tmpItem of categoryToContainer) {
    //    tmpItem[1].clear();
    //}

    //ComputerScene.layer.draw();
};

function test() {
    Scene.testConnect(1, 17);
    Scene.testConnect(5, 7);
}
