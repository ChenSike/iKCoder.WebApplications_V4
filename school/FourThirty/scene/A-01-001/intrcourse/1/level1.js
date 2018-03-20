//(function () {
'use strict';

var configuration = {
    "Input Device": [{
        cn: "鼠标",
        en: "Mouse",
        dt: "输入设备，它可以对当前屏幕上的游标进行定位，并通过按键和滚轮装置对游标所经过位置的屏幕元素进行操作，按其工作原理的不同分为机械鼠标和光电鼠标。",
        path: "image/scene/intrcourse/svg/mouse.png"
    }, {
        cn: "键盘",
        en: "Keyboard",
        dt: "输入设备，通过键盘可以将英文字母、数字、标点符号等输入到计算机中，从而向计算机发出命令、输入数据等。",
        path: "image/scene/intrcourse/svg/keyboard.png"
    }],
    "Output Device": [{
        cn: "显示器",
        en: "Monitor",
        dt: "输出设备，一种将一定的电子文件通过特定的传输设备显示到屏幕上再反射到人眼的显示工具。",
        path: "image/scene/intrcourse/svg/monitor.png"
    }, {
        cn: "打印机",
        en: "Printer",
        dt: "输出设备，用于将计算机处理结果打印在相关介质上",
        path: "image/scene/intrcourse/svg/printer.png"
    }, {
        cn: "耳机",
        en: "Earphones",
        dt: "输出设备，输出声音，是随身音响的象征， 从佩带形式上分类则有耳塞式，挂耳式，入耳式和头戴式。",
        path: "image/scene/intrcourse/svg/earphones.png"
    }],
    "Storage": [{
        cn: "硬盘",
        en: "Harddrive",
        dt: "存储设备，是电脑主要的存储媒介。",
        path: "image/scene/intrcourse/svg/hard-drive.png"
    }, {
        cn: "光盘",
        en: "CD",
        dt: "存储设备，是以光信息做为存储的载体并用来存储数据的一种物品，可以存放各种文字、声音、图形、图像和动画等多媒体数字信息。",
        path: "image/scene/intrcourse/svg/cd.png"
    }, {
        cn: "USB闪存盘",
        en: "USB Flash Disk",
        dt: "存储设备，是一种使用USB接口的微型高容量移动存储产品，通过USB接口与电脑连接，实现即插即用。",
        path: "image/scene/intrcourse/svg/pendrive.png"
    }, {
        cn: "内存",
        en: "RAM",
        dt: "存储设备，内存是计算机中重要的部件之一，它是与CPU进行沟通的桥梁。其作用是用于暂时存放CPU中的运算数据，以及与硬盘等外部存储器交换的数据。",
        path: "image/scene/intrcourse/svg/ram-memory.png"
    }],
    "Computing": [{
        cn: "中央处理器",
        en: "CPU",
        dt: "计算设备，是一台计算机的运算核心（Core）和控制核心（ Control Unit），功能主要是解释计算机指令以及处理计算机软件中的数据。",
        path: "image/scene/intrcourse/svg/cpu.png"
    }, {
        cn: "显卡",
        en: "Graphics Card",
        dt: "计算设备，作为电脑主机里的一个重要组成部分，承担输出显示图形的任务。",
        path: "image/scene/intrcourse/svg/graphics-card.png"
    }, {
        cn: "主板",
        en: "Mother Board",
        dt: "计算设备，是计算机最基本的也是最重要的部件之一，是构成复杂电子系统例如电子计算机的中心或者主电路板。",
        path: "image/scene/intrcourse/svg/mainboard.png"
    }]
};

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

function placeComponentGroups(config, layer, stage) {
    var groups = [];
    for (var group in config) {
        groups.push(group);
    }

    var groupNum = groups.length,
        groupHeight = 200,
        groupSideMargin = 30,
        horizontalMargin = 100,
        groupWidth = ((stage.getWidth() - horizontalMargin) / groupNum) - groupSideMargin * 2;


    for (var i = 0; i < groupNum; i++) {
        var categoryConfig = {
            stroke: 'grey',
            strokeWidth: 1,
            height: groupHeight,
            width: groupWidth,
            group: groups[i],
            x: horizontalMargin / 2 + (groupSideMargin * 2 + groupWidth) * i + groupSideMargin,
            y: stage.getHeight() - groupHeight - 5
        };

        loadCategory(categoryConfig, layer, stage);
    }
}

function placeComponents(config, layer, categoryLayer, stage) {
    var ccomponents = [];
    for (var group in config) {
        ccomponents = Array.prototype.concat.apply(ccomponents, config[group]);
    }

    var cellDimension = 180;
    var numberOfComponents = ccomponents.length || 0;
    var verticalMargin = 50;
    var horizontalMargin = 50;
    var vSpace = 50;
    var hSpace = 50;
    var containerHeight = stage.getHeight() - verticalMargin * 2;
    var containerWidth = stage.getWidth() - horizontalMargin * 2;
    var columns = parseInt(containerWidth / cellDimension);
    var rows = parseInt(containerHeight / cellDimension);
    var recalcCellDimension = function () {
        while (columns * rows < numberOfComponents) {
            cellDimension -= 10;
            columns = parseInt(containerWidth / cellDimension);
            rows = parseInt(containerHeight / cellDimension);
        }

        while (columns * rows > numberOfComponents) {
            cellDimension += 10;
            columns = parseInt(containerWidth / cellDimension);
            rows = parseInt(containerHeight / cellDimension);
        }

        columns = parseInt(containerWidth / cellDimension);
        rows = parseInt(containerHeight / cellDimension);
        if (columns * rows < numberOfComponents) {
            cellDimension -= 10;
            columns = parseInt(containerWidth / cellDimension);
            rows = parseInt(containerHeight / cellDimension);
        }

        while (columns * rows > numberOfComponents) {
            rows--;
        }

        if (columns * rows < numberOfComponents) {
            rows++;
        }

        var totalVSpace = containerHeight + verticalMargin * 2 - cellDimension * rows;
        vSpace = Math.floor(totalVSpace / (rows + 1));
        verticalMargin = Math.floor((totalVSpace - vSpace * (rows - 1)) / 2);
        var totalHSpace = containerWidth + horizontalMargin * 2 - cellDimension * columns;
        hSpace = Math.floor(totalHSpace / (columns + 1));
        horizontalMargin = Math.floor((totalHSpace - hSpace * (columns - 1)) / 2);
    }

    recalcCellDimension();
    var cells = columns * rows;
    var calcCcomponentConfig = function (cellIndex, cellConfig) {
        var cn = cellConfig.cn,
            en = cellConfig.en,
            dt = cellConfig.dt,
            path = cellConfig.path,
            height = cellConfig.height || cellDimension - 60,
            width = cellConfig.width || cellDimension - 60,
            offsetX = 30,
            offsetY = 30,
            columnIndex = (cellIndex > columns - 1 ? cellIndex % columns : cellIndex),
            rowIndex = (cellIndex > columns - 1 ? Math.floor(cellIndex / columns) : 0),
            x = horizontalMargin + columnIndex * (cellDimension + hSpace) + offsetX,
            y = verticalMargin + rowIndex * (cellDimension + vSpace) + offsetY;

        return {
            x: x,
            y: y,
            width: width,
            height: height,
            file: path,
            en: en,
            cn: cn,
            dt: dt,
            id: en.replace(/ /g, "")
        };
    };

    var visited = {};
    for (var i = 0; i < Math.min(cells, ccomponents.length) ; i++) {
        visited[i] = false;
    }
    var tmpRandom = 0;
    for (var i = 0; i < Math.min(cells, ccomponents.length) ; i++) {
        tmpRandom = Math.round(Math.random() * 100) % ccomponents.length;
        while (visited[tmpRandom]) {
            tmpRandom = Math.round(Math.random() * 100) % ccomponents.length;
        }

        loadImage(calcCcomponentConfig(i, ccomponents[tmpRandom]), layer, categoryLayer);
        visited[tmpRandom] = true;
    }

    //for (var i = 0; i < Math.min(cells, ccomponents.length) ; i++) {
    //    loadImage(calcCcomponentConfig(i, ccomponents[i]), layer, categoryLayer);
    //}
}

var CATEGORY_THUMB_NAIL_SIZE_X = 50,
    CATEGORY_THUMB_NAIL_SIZE_Y = 50,
    CATEGORY_PADDING_BOTTOM = 5;

var categoryManager = (function () {
    var categoryToContainer = new Map();

    window.categoryToContainer = categoryToContainer;

    function init(_categoryLayer) {
        _categoryLayer.children.forEach(function (element) {
            categoryToContainer.set(element, new CategoryContainer(element));
        });
    }

    function isAssignedRight(rect, image) {
        var group = searchForGroup(image, configuration, function (key, component) {
            return key.en === component.en;
        });

        return rect._group === group;
    }

    function removeExistingFromCategories(image) {
        //for (var [k, v] of categoryToContainer) {
        for (var tempArr of categoryToContainer) {
            var v = tempArr[1];
            for (var i in v.children) {
                if (v.children[i]._id === image._id) {
                    Array.prototype.splice.call(v.children, i, 1);
                    return;
                }
            }
        }
    }

    function calculateOffsetY(i) {
        return (CATEGORY_THUMB_NAIL_SIZE_Y + CATEGORY_PADDING_BOTTOM) * i;
    }

    function CategoryContainer(categoryRect, children) {
        this.categoryRect = categoryRect;
        this.children = [];

        if (!!children)
            this.add(children);
    }

    CategoryContainer.prototype.add = function (child) {
        var that = this;

        // add children
        if (Array.isArray(child)) {
            child.forEach(function (element) {
                CategoryContainer.prototype.add.apply(that, element);
            });
        }

        // add child
        var isExist = this.children.some(function (element) {
            return element._id == child._id;
        });

        if (!!!isExist) {
            this.children.push(child);
        }

        return this.children.length - 1 || 0;
    };

    CategoryContainer.prototype.categorize = function (image, categoryRect, options) {
        removeExistingFromCategories(image);

        if (categoryRect !== undefined) {
            var nth = this.add(image);

            var x0 = image.x(),
                y0 = image.y(),
                width0 = image.width(),
                height0 = image.height(),
                RESULT_HEIGHT = 20,

                slices = 50,
                delta = (categoryRect.x() + 5 - x0) / slices,
                deltaY = (categoryRect.y() + 5 + calculateOffsetY(nth) - y0) / slices,
                deltaWidth = (CATEGORY_THUMB_NAIL_SIZE_X - width0) / slices,
                deltaHeight = (CATEGORY_THUMB_NAIL_SIZE_Y - height0) / slices;

            var i = 0;
            var anim = new Konva.Animation(function (frame) {
                if (i < slices) {
                    image.height(image.height() + deltaHeight);
                    image.width(image.width() + deltaWidth);
                    image.x(image.x() + delta);
                    image.y(image.y() + deltaY);
                    i++;
                } else {
                    anim.stop();

                    image._isAssigned = categoryRect === undefined ? false : true;
                    image._isAssignedCorrectly = isAssignedRight(categoryRect, image);

                    image.resultImage.x(image.x() + image.width() + 10);
                    image.resultImage.y(image.y() + (image.height() - RESULT_HEIGHT) / 2);

                    image.draw();
                    image.parent.draw();
                }
            }, image.parent);

            anim.start();

            image.draggable(false);
            image.off('mouseover');
        }

    };

    // return a function that return the associated CategoryContainer instance
    return function (_categoryLayer) {
        init(_categoryLayer);
        return function (categoryRect, image, options) {
            var container = categoryToContainer.get(categoryRect);
            CategoryContainer.prototype.categorize.call(container, image, categoryRect, options);
        };
    };

})();

function loadImage(config, layer, categoryLayer) {
    var box = new Konva.Ccomponent({
        x: config.x,
        y: config.y,
        width: config.width,
        height: config.height,
        draggable: false,//config.draggable === undefined ? true : false,
        en: config.en,
        cn: config.cn,
        dt: config.dt,
        id: config.id,
        comp: false
    });

    var imageObj = new Image();
    imageObj.src = config.file;
    imageObj.onload = function () {
        box.image(imageObj);
        layer.draw();
    };

    imageObj.onerror = function () {
        imageObj.src = config.file + '?rnd=' + Date.now();
    };

    box.on('click', function () {
        if (!this.comp) {
            this.comp = true;
            showTooltip(arguments[0], true);
            drawCompleteRound(arguments[0]);
            var count = 0;
            var total = 0;
            for (var i = 0; i < this.parent.children.length; i++) {
                var item = this.parent.children[i];
                if (item instanceof Konva.Ccomponent) {
                    total++;
                    if (item.comp) {
                        count++;
                    }
                }
            }

            if (count == total) {
                window.setTimeout('Scene.stepComplete()', 2000);
            }
        }
    });

    box.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
        if (!this.comp) {
            showWarning(arguments[0]);
            showTooltip(arguments[0], true);
        }
    });

    box.on('mouseout', function () {
        document.body.style.cursor = 'default';
        showWarning(null);
        showTooltip(arguments[0], false);
    });

    box.on('dragend', function () {
        var detectedCategoryRect = detectIntersection(this, categoryLayer.children);
        if (!!detectedCategoryRect) {
            _categorizer(detectedCategoryRect, this, {});
            // layer.draw();
        } else {
            this._isAssigned = false;
            layer.draw();
        }
    });

    //console.log('adding ' + config.file + ' at ' + config.x + ' ' + config.y);
    box instanceof Konva.Ccomponent && layer.add(box.resultImage);
    layer.add(box);
}

function drawCompleteRound(eventObj) {
    var target = eventObj.target;
    var context = target.parent.getContext();
    var width = target.attrs.width;
    var height = target.attrs.height;
    var x = target.attrs.x - 12;
    var y = target.attrs.y - 12;

    context.lineWidth = 6;
    context.strokeStyle = "rgb(255,204,51)";
    context.beginPath();
    context.moveTo(x + 15, y);
    context.lineTo(x + width + 24 - 15, y);
    context.arc(x + width + 24 - 15, y + 15, 15, 1.5 * Math.PI, 2 * Math.PI);
    context.lineTo(x + width + 24, y + height + 24 - 15);
    context.arc(x + width + 24 - 15, y + height + 24 - 15, 15, 0, 0.5 * Math.PI);
    context.lineTo(x + 15, y + height + 24);
    context.arc(x + 15, y + height + 24 - 15, 15, 0.5 * Math.PI, 1 * Math.PI);
    context.lineTo(x, y + 15);
    context.arc(x + 15, y + 15, 15, 1 * Math.PI, 1.5 * Math.PI);
    context.stroke();
}

function showWarning(eventObj) {
    if (!eventObj) {
        window.clearInterval(_staticSelectFrameInterval);
        $('.tooltip-warning-wrap').hide();
    } else {
        var tipFrame = $('.tooltip-warning-wrap');
        if (tipFrame.length == 0) {
            $('body').append($('<div class="tooltip-warning-wrap"></div>'));
        }

        tipFrame = $('.tooltip-warning-wrap');
        var wrap = $('#container_Static_Stage');
        var target = eventObj.currentTarget;
        var offset = wrap.offset();
        tipFrame.width(target.width() + 20);
        tipFrame.height(target.height() + 20);
        tipFrame.css('left', (target.x() + offset.left - 10 - 5) + 'px');
        tipFrame.css('top', (target.y() + offset.top - 10 - 5) + 'px');
        tipFrame.show();
        _staticSelectFrameInterval = window.setInterval("$('.tooltip-warning-wrap').toggleClass('hidden');", 300);
    }
}

var _staticSelectFrameInterval = '';
function showTooltip(eventObj, show) {
    var tmpId = 'tooltip_Component_' + eventObj.target.id();
    var tip = $('#' + tmpId);
    if (!show) {
        window.clearInterval(_staticSelectFrameInterval);
        updateTipsText(null);
        if (!eventObj.target.comp) {
            tip.hide();
        }
    } else {
        var target = eventObj.currentTarget;
        if (tip.length == 0) {
            $('body').append($('<div class="tooltip tooltip-top" id="' + tmpId + '" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'));
            tip = $('#' + tmpId);
        }

        tip.width(target.width() + 40);
        var wrap = $('#container_Static_Stage');
        var html = '<p style="font-family: 微软雅黑; font-size: 15px;"><strong <%style%>>' + target.cn + '</strong><span>(' + target.en + ')&nbsp;:&nbsp;' + target.dt + '</span></p>';
        updateTipsText(html.replace('<%style%>', 'style="color:rgb(2,117,216);"'));
        var tipInner = $('#' + tmpId + ' .tooltip-inner');
        tipInner.html(html.replace('<%style%>', ''));
        var offset = wrap.offset();
        var x = target.x() + offset.left + target.width() / 2 - tip.width() / 2;
        var y = target.y() + offset.top - tip.height() - 20;
        tip.css('left', x + 'px');
        tip.css('top', y + 'px');
        tip.css('opacity', '0.8');
        //tipInner.css('margin-left', (tip.width() - tipInner.width()) / 2 + 'px');
        tip.show();
    }
}

function loadCategory(config, layer) {
    var rect = new Konva.ComponentGroup(config);
    var groupText = new Konva.Text({
        x: rect.x(),
        y: rect.y() - 20,
        width: rect.width(),
        text: config.group,
        fontSize: 18,
        fontFamily: 'Calibri',
        align: 'center'
    });
    layer.add(rect);
    layer.add(groupText);
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

var _categorizer;
// Used for exposing Scene related API
function Scene(config) {
    this.config = config;
    this.___init();
}

Scene.prototype = {
    constructor: Scene,
    ___init: function () {
        this.stage = new Konva.Stage({
            container: 'container_Static_Stage',
            //width: window.innerWidth,
            //height: window.innerHeight
            width: $('#container_Static_Stage').width(),
            height: $('#container_Static_Stage').height()
        });

        this.layer = new Konva.Layer();
        this.resultLayer = new Konva.Layer();
        this.categoryLayer = new Konva.Layer();
        this.connectionLayer = new Konva.Layer({
            clearBeforeDraw: true
        });
    },

    start: function () {
        placeComponents(this.config, this.layer, this.categoryLayer, this.stage);
        // placeComponentGroups(this.config, this.categoryLayer, this.stage);

        _categorizer = categoryManager(this.categoryLayer);
        this.stage.add(this.categoryLayer);
        this.stage.add(this.layer);
        this.stage.add(this.resultLayer);
        this.stage.add(this.connectionLayer);
    },

    connect(comp1, comp2) {
        var that = this;

        var x0 = comp1.x() + comp1.width() / 2,
            y0 = comp1.y() + comp1.height(),

            arc = new Konva.ConnectionPoint({
                tmpX: x0,
                tmpY: y0,
                componentsLayer: that.layer,
                direction: Konva.ConnectionPoint.DOWN,
                target: comp2,
                inc: 8
            });

        arc.on('mouseover', function () {
            console.log(this.getStage().getPointerPosition());
        });
        this.connectionLayer.add(arc);

        var anim = new Konva.Animation(function (frame) {
            if (!arc.isDone()) {
                arc.moveAction();
            } else {
                anim.stop();
                console.log('anim done...');
            }
        }, this.connectionLayer);

        anim.start();
    },

    testConnect(x, y) {
        var comp1 = this.layer.children[x];
        var comp2 = this.layer.children[y];
        this.connect(comp1, comp2);
    }
};

Scene.reset = function () {
    $('.tooltip.tooltip-top').remove();
    ComputerScene.layer.clear();
    ComputerScene.layer.draw();
    for (var i = 0; i < ComputerScene.layer.children.length; i++) {
        var item = ComputerScene.layer.children[i];
        if (item instanceof Konva.Ccomponent) {
            item.comp = false;
        }
    }
};

//window.ComputerScene = new Scene(configuration);
//ComputerScene.start();
//})();