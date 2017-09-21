var WinPaint = {
    tool : 'eraser',
    toolType : null,
    fillColor : '#000000',
    strokeColor : '#000000',
    // Whether stroke or fill color is selected to be changed
    selectedColor : 'stroke',
    size : 4,

    text : '',
    fontFamily: 'Arial',
    fontSize: 10,
    fontIsBold: false,
    fontIsItalic: false,
    fontIsUnderline: false,

    canvas : null,
    context : null,
    viewport : null,
    viewportContext : null,
    overlay : null,
    overlayContext : null,
    center : null,
    centerContext : null,
    selection : null,
    selectionContext : null,
    buffer : null,
    bufferContext : null,

    undoLimit : 20,
    undoStack : [],
    redoIndex : 0,
    dirty : false,
    editingUrl : 0,
    editingWidth : 0,
    editingHeight : 0,

    centerVisible : true,
    centerX : null,
    centerY : null,

    penDown : false,
    lastX : 0,
    lastY : 0,

    dropZoneVisible : false,
    gridVisible : true,
    resizeHandleSize : 6,
    growFactor : 1.1,
    shrinkFactor : 0.9,
    rotateLeverSize : 6,

    brushBristles : [],
    brushNumberBristles : 20, // how many strokes to draw
    brushRefreshRate : 15, // time between brush updates (ms) - set this higher if performance is an issue directly affects easing
    brushEasing : 0.7, // kind of "how loopy" higher= bigger loops

    proportionalResize: true,

    viewportX : 0,
    viewportY : 0,
    zoomLevel : 1,
    minZoomLevel : 0.25,
    maxZoomLevel : 16,

    viewportWidth : 480,
    viewportHeight : 320,

    discardMoveTolerance : 15, // maximum tolerance for discarding moves

    visible: false,

    minimumEditorWidth: 640,
    minimumEditorHeight: 480

};

WinPaint.init = function() {
    // The different canvas layers
    WinPaint.canvas = document.createElement('canvas');
    WinPaint.context = WinPaint.canvas.getContext('2d');
    WinPaint.viewport = document.createElement('canvas');
    WinPaint.viewportContext = WinPaint.viewport.getContext('2d');
    WinPaint.overlay = document.createElement('canvas');
    WinPaint.overlayContext = WinPaint.overlay.getContext('2d');
    WinPaint.selection = document.createElement('canvas');
    WinPaint.selectionContext = WinPaint.selection.getContext('2d');
    WinPaint.center = document.createElement('canvas');
    WinPaint.centerContext = WinPaint.center.getContext('2d');
    WinPaint.buffer = document.createElement('canvas');
    WinPaint.bufferContext = WinPaint.buffer.getContext('2d');
    $('#win-paint .canvas').append(WinPaint.canvas);
    $('#win-paint .canvas').append(WinPaint.viewport);
    $('#win-paint .canvas').append(WinPaint.overlay);
    $('#win-paint .canvas').append(WinPaint.selection);
    // drop zone before the center canvas (which has the drag events and toggles the drop zone's visibility
    $('#win-paint .canvas').append('<div id="drop-zone" class="hidden"><p>Drop files here</p></div>');
    $('#win-paint .canvas').append(WinPaint.center);
    $('#win-paint .canvas').append(WinPaint.buffer);
    $(WinPaint.canvas).addClass('hidden');
    $(WinPaint.selection).addClass('hidden');
    $(WinPaint.buffer).addClass('hidden');

    // initializes the pencil
    $('#win-paint .tool-options .pencil li').each(function(idx, el) {
        var size = $(el).attr('radius');
        var element = $(el).find('div').css('border-radius', Math.floor(size/2));
        element.css('width', size).css('height', size);
    });

    // initializes the brush
    $('#win-paint .tool-options .brush .oval li').each(function(idx, el) {
        var type = $(el).attr('type');
        var size = $(el).attr('radius');
        var element = $(el).find('div').css('border-radius', Math.floor(size/2));
        element.css('width', size).css('height', size * .5);
    });

    // initialize the pen
    $('#win-paint .tool-options .pen li').each(function(idx, el) {
        var type = $(el).attr('type');
        var size = $(el).attr('size');
        var element = $(el).find('div').css('width', size * size).css('height', size * size);
    });

    // initialize the color picker
    ColorPicker.init('#win-paint');

    // initialize the oval brush
    for(var i = 0; i < WinPaint.brushNumberBristles; i++) {
        var ease = Math.random() * 0.05 + WinPaint.brushEasing;
        WinPaint.brushBristles.push({
            dx : WinPaint.canvas.width / 2,
            dy : WinPaint.canvas.height / 2,
            ax : 0,
            ay : 0,
            div : 0.1,
            ease : ease
        });
    }

    // initialize the marker
    WinPaint.marker = new Image();

    // Setup the tool option handlers

    $('#win-paint .edit-menu').click(WinPaint.cmdEditMenu);
    $('#win-paint .edit ul li a').click(WinPaint.cmdSelectEditMenuOption);
    $('#win-paint .title-zoom ul li').click(WinPaint.cmdSelectZoomOption);
    $('#win-paint .font-family').click(WinPaint.cmdChooseFontFamily);
    $('#win-paint .font-family').next().find('a').click(WinPaint.cmdSelectFontFamily);
    $('#win-paint .font-size').click(WinPaint.cmdChooseFontSize);
    $('#win-paint .font-size').next().find('a').click(WinPaint.cmdSelectFontSize);
    $('#win-paint .font-style.bold').click(WinPaint.cmdToggleBold);
    $('#win-paint .font-style.italic').click(WinPaint.cmdToggleItalic);
    $('#win-paint .font-style.underline').click(WinPaint.cmdToggleUnderline);
    $('#win-paint .pencilsize').click(WinPaint.cmdChoosePencilSize);
    $('#win-paint .brushsize').click(WinPaint.cmdChooseBrushSize);
    $('#win-paint .pensize').click(WinPaint.cmdChoosePenSize);
    $('#win-paint .fillcolor').click(WinPaint.cmdChooseFillColor);
    $('#win-paint .strokecolor').click(WinPaint.cmdChooseStrokeColor);
    $('#win-paint .color-predefined').mouseover(function(){ $('.color-tray', this).show(); });
    $('#win-paint .color-predefined').mouseleave(function(){ $('.color-tray', this).hide(); });
    $('#win-paint .color-predefined li').click(WinPaint.cmdChoosePredefinedColor);
    $('#win-paint .tool-color').click(WinPaint.cmdChooseColor);
    $('#win-paint .tool-eyedropper').click(WinPaint.cmdToolColor);
    $('#win-paint li.selection-type').click(WinPaint.cmdChooseSelectionType);
    $('#win-paint li.cut').click(WinPaint.cmdCut);
    $('#win-paint li.copy').click(WinPaint.cmdCopy);
    $('#win-paint li.paste').click(WinPaint.cmdPaste);
    $('#win-paint li.flip-horizontally').click(WinPaint.cmdFlipHorizontally);
    $('#win-paint li.flip-vertically').click(WinPaint.cmdFlipVertically);
    $('#win-paint li.grow').click(WinPaint.cmdGrow);
    $('#win-paint li.shrink').click(WinPaint.cmdShrink);
    $('#win-paint li.zoom-type').click(WinPaint.cmdChooseZoomType);
    $('#win-paint li.undo').click(WinPaint.cmdUndo);
    $('#win-paint li.redo').click(WinPaint.cmdRedo);

    $('#win-paint .tool-pencil').click(WinPaint.cmdToolPencil);
    $('#win-paint .tool-brush').click(WinPaint.cmdToolBrush);
    $('#win-paint .tool-pen').click(WinPaint.cmdToolPen);
    $('#win-paint .tool-eraser').click(WinPaint.cmdToolEraser);
    $('#win-paint .tool-fill').click(WinPaint.cmdToolFill);
    $('#win-paint .tool-rectangle').click(WinPaint.cmdToolRectangle);
    $('#win-paint .tool-ellipse').click(WinPaint.cmdToolEllipse);
    $('#win-paint .tool-line').click(WinPaint.cmdToolLine);
    $('#win-paint .tool-text').click(WinPaint.cmdToolText);
    $('#win-paint .tool-selection').click(WinPaint.cmdToolSelection);
    $('#win-paint .tool-stamp').click(WinPaint.cmdToolStamp);
    $('#win-paint .tool-zoom').click(WinPaint.cmdToolZoom);
    $('#win-paint .tool-center').click(WinPaint.cmdToolCenter);

    $('#win-paint .pencil li').click(WinPaint.cmdChoosePredefinedPencilSize);
    $('#win-paint .brush .oval li').click(WinPaint.cmdChoosePredefinedBrushSize);
    $('#win-paint .brush .wetbrush li').click(WinPaint.cmdChoosePredefinedBrush);
    $('#win-paint .pen li').click(WinPaint.cmdChoosePredefinedPenSize);
    
    $('#win-paint .pencil .slider').slider({
        'min': 1,
        'max': 40,
        'value': WinPaint.size,
        'slide': function(event, ui) {
            WinPaint.size = $('#win-paint .pencil .slider').slider('value');
            $('#win-paint .pencil .pencilsize span').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
            $('#win-paint .pencil .showsize div').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
        },
        'change': function(event, ui) {
            var value = $('#win-paint .pencil .slider').slider('value');
            $('#win-paint .pencil .pencilsize span').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
            $('#win-paint .pencil .showsize div').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
            $('#win-paint .pencil .pencilsize').next().addClass('hidden');
            /* LOGGING */ _log('paint', 'brush size slider', WinPaint.size);
        }
    });

    $('#win-paint .brush .slider').slider({
        'min': 1,
        'max': 40,
        'value': WinPaint.size,
        'slide': function(event, ui) {
            WinPaint.size = $('#win-paint .brush .slider').slider('value');
            $('#win-paint .brush .brushsize span').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
            $('#win-paint .brush .showsize div').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
        },
        'change': function(event, ui) {
            var value = $('#win-paint .brush .slider').slider('value');
            $('#win-paint .brush .brushsize span').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
            $('#win-paint .brush .showsize div').css('border-radius', Math.floor(WinPaint.size/2))
                .css('width', WinPaint.size)
                .css('height', WinPaint.size);
            $('#win-paint .brush .brushsize').next().addClass('hidden');
            /* LOGGING */ _log('paint', 'brush size slider', WinPaint.size);
        }
    });

    $(WinPaint.center).mousedown(WinPaint._mousedown);
    $(WinPaint.center).mouseup(WinPaint._mouseup);
    $(WinPaint.center).mouseenter(WinPaint._mouseenter);
    $(WinPaint.center).mousemove(WinPaint._mousemove);
    $(WinPaint.center).bind('dragover', WinPaint._dragover);
    $(WinPaint.center).bind('dragleave', WinPaint._dragleave);
    $(WinPaint.center).bind('drop', WinPaint._drop);

    $('#import-image-file').change(WinPaint._change);

    $('body').keypress(WinPaint._keypress);
    $('body').keydown(WinPaint._keydown);
    $('body').keyup(WinPaint._keyup);

    WinPaint.resetTools();
    WinPaint.adjustWindow();
};

WinPaint.resetTools = function() {
    WinPaint.updateToggleCenterText();
    WinPaint.text = '';
    WinPaint.fontFamily = 'Arial';
    $('#win-paint .font-family span').text(WinPaint.fontFamily);
    WinPaint.fontSize = 30;
    $('#win-paint .font-size span').text(WinPaint.fontSize);
    WinPaint.fontIsBold = false;
    WinPaint.fontIsItalic = false;
    WinPaint.fontIsUnderline = false;
    $('#win-paint .font-style').removeClass('selected');
    WinPaint.size = 4;
    $('#win-paint .pencilsize span').css('border-radius', Math.floor(WinPaint.size/2))
        .css('width', WinPaint.size)
        .css('height', WinPaint.size);
    $('#win-paint .brushsize span').css('border-radius', Math.floor(WinPaint.size/2))
        .css('width', WinPaint.size)
        .css('height', WinPaint.size);
    $('#win-paint .pensize span').css('width', WinPaint.size).css('height', WinPaint.size);
    WinPaint.selectedColor = 'stroke';
    WinPaint.strokeColor = '#000000';
    $('#win-paint .strokecolor').addClass('selected').find('> div').css('border', '4px solid ' + WinPaint.strokeColor);
    WinPaint.fillColor = '#0000ff';
    $('#win-paint .fillcolor').removeClass('selected').find('> div').css('background-color', WinPaint.fillColor);

    WinPaint.cmdToolEraser();

    WinPaint.context.strokeStyle = WinPaint.strokeColor;
    WinPaint.context.fillStyle = WinPaint.fillColor;
    WinPaint.context.lineWidth = WinPaint.size;
    WinPaint.context.lineCap = 'round';

    // disables image smoothing for pixel editing (without anti-aliasing);
    // (anti-aliasing is still done on the main canvas)
    WinPaint.viewportContext.imageSmoothingEnabled = false;
    WinPaint.viewportContext.mozImageSmoothingEnabled = false;
    WinPaint.viewportContext.webkitImageSmoothingEnabled = false;

    WinPaint.undoClear();
};

/**
 * Call to edit an image.
 */
WinPaint._editImage = function(img, width, height) {
//    $('#win-paint').dialog('option', {
//        width : WinPaint.editingWidth > WinPaint.canvas.width ? WinPaint.editingWidth : 800,
//        height : WinPaint.editingHeight > WinPaint.canvas.height ? WinPaint.editingHeight : 600
//    });
    if (WinPaint.editingWidth > WinPaint.canvas.width) {
        WinPaint.canvas.width = WinPaint.editingWidth;
        $(WinPaint.canvas.width).css('width', WinPaint.editingWidth + 'px');
        WinPaint.viewport.width = WinPaint.editingWidth;
        $(WinPaint.viewport.width).css('width', WinPaint.editingWidth + 'px');
        WinPaint.overlay.width = WinPaint.editingWidth;
        $(WinPaint.overlay.width).css('width', WinPaint.editingWidth + 'px');
        WinPaint.selection.width = WinPaint.editingWidth;
        $(WinPaint.selection.width).css('width', WinPaint.editingWidth + 'px');
        WinPaint.center.width = WinPaint.editingWidth;
        $(WinPaint.center.width).css('width', WinPaint.editingWidth + 'px');
        WinPaint.buffer.width = WinPaint.editingWidth;
        $(WinPaint.buffer.width).css('width', WinPaint.editingWidth + 'px');
    }
    if (WinPaint.editingHeight > WinPaint.canvas.height) {
        WinPaint.canvas.height = WinPaint.editingHeight;
        $(WinPaint.canvas.height).css('height', WinPaint.editingHeight + 'px');
        WinPaint.viewport.height = WinPaint.editingHeight;
        $(WinPaint.viewport.height).css('height', WinPaint.editingHeight + 'px');
        WinPaint.overlay.height = WinPaint.editingHeight;
        $(WinPaint.overlay.height).css('height', WinPaint.editingHeight + 'px');
        WinPaint.selection.height = WinPaint.editingHeight;
        $(WinPaint.selection.height).css('height', WinPaint.editingHeight + 'px');
        WinPaint.center.height = WinPaint.editingHeight;
        $(WinPaint.center.height).css('height', WinPaint.editingHeight + 'px');
        WinPaint.buffer.height = WinPaint.editingHeight;
        $(WinPaint.buffer.height).css('height', WinPaint.editingHeight + 'px');
    }
    WinPaint.context.drawImage(img, 0, 0, width, height);

    if (WinPaint.centerX === undefined || WinPaint.centerX === null) {
        WinPaint.centerX = WinPaint.canvas.width / 2;
    } else {
        WinPaint.centerX = (WinPaint.canvas.width - WinPaint.editingWidth) / 2 + WinPaint.centerX;
    }
    if (WinPaint.centerY === undefined || WinPaint.centerY === null) {
        WinPaint.centerY = WinPaint.canvas.height / 2;
    } else {
        WinPaint.centerY = (WinPaint.canvas.height - WinPaint.editingHeight) / 2 + WinPaint.centerY;
    }
    WinPaint.adjustWindow();
};

/**
 * Call to edit an image.
 */
WinPaint.edit = function(title, url, width, height, maxHeight, maxWidth, imageTop, imageLeft, cx, cy, doneCallback, cancelCallback) {
    var topBarHeight = 48;
    var sideBarWidth = 48;
    var bottomBarHeight = 0;

    var editorWidth = width ? width + sideBarWidth : window.innerWidth - 20;
    var editorHeight = height ? height + topBarHeight + bottomBarHeight : window.innerHeight - 20;

    // apply maximum dimensions
    if(editorWidth > maxWidth) { editorWidth = maxWidth }
    if(editorHeight > maxHeight) { editorHeight = maxHeight }
    // apply minimum dimensions
    if(editorWidth < WinPaint.minimumEditorWidth) { editorWidth = WinPaint.minimumEditorWidth }
    if(editorHeight < WinPaint.minimumEditorHeight) { editorHeight = WinPaint.minimumEditorHeight }

    // determine viewport based on window size
    WinPaint.viewportWidth = width;
    WinPaint.viewportHeight = height;

    if (url) {
        WinPaint.editingUrl = url;
        WinPaint.editingWidth = 0;
        WinPaint.editingHeight = 0;

        WinPaint.canvas.width = width;
        WinPaint.canvas.height = height;
        $(WinPaint.canvas.width).css('width', width).css('height', height);
        WinPaint.viewport.width = width;
        WinPaint.viewport.height = height;
        $(WinPaint.viewport.width).css('width', width).css('height', height);
        WinPaint.overlay.width = width;
        WinPaint.overlay.height = height;
        $(WinPaint.overlay.width).css('width', width).css('height', height);
        WinPaint.selection.width = width;
        WinPaint.selection.height = height;
        $(WinPaint.selection.width).css('width', width).css('height', height);
        WinPaint.center.width = width;
        WinPaint.center.height = height;
        $(WinPaint.center.width).css('width', width).css('height', height);
        WinPaint.buffer.width = width;
        WinPaint.buffer.height = height;
        $(WinPaint.buffer.width).css('width', width).css('height', height);

        var img = new Image();
        img.onload = function() {
            WinPaint.editingWidth = width;//img.width;
            WinPaint.editingHeight = height;//img.height;
            WinPaint._editImage(img, width, height);

            WinPaint.resetTools();
            WinPaint.addUndo();
        };
        img.src = url;
    } else {
//        WinPaint.editingWidth = width;
//        WinPaint.editingHeight = height;
        WinPaint.editingWidth = WinPaint.viewportWidth; // * (1 / WinPaint.minZoomLevel);
        WinPaint.editingHeight = WinPaint.viewportHeight; // * (1 / WinPaint.minZoomLevel);

        WinPaint.canvas.width = WinPaint.editingWidth;
        WinPaint.canvas.height = WinPaint.editingHeight;
        $(WinPaint.canvas.width).css('width', WinPaint.editingWidth).css('height', WinPaint.editingHeight);
        WinPaint.viewport.width = WinPaint.editingWidth;
        WinPaint.viewport.height = WinPaint.editingHeight;
        $(WinPaint.viewport.width).css('width', WinPaint.editingWidth).css('height', WinPaint.editingHeight);
        WinPaint.overlay.width = WinPaint.editingWidth;
        WinPaint.overlay.height = WinPaint.editingWidth;
        $(WinPaint.overlay.width).css('width', WinPaint.editingWidth).css('height', WinPaint.editingHeight);
        WinPaint.selection.width = WinPaint.editingWidth;
        WinPaint.selection.height = WinPaint.editingHeight;
        $(WinPaint.selection.width).css('width', WinPaint.editingWidth).css('height', WinPaint.editingHeight);
        WinPaint.center.width = WinPaint.editingWidth;
        WinPaint.center.height = WinPaint.editingHeight;
        $(WinPaint.center.width).css('width', WinPaint.editingWidth).css('height', WinPaint.editingHeight);
        WinPaint.buffer.width = WinPaint.editingWidth;
        WinPaint.buffer.height = WinPaint.editingHeight;
        $(WinPaint.buffer.width).css('width', WinPaint.editingWidth).css('height', WinPaint.editingHeight);

        WinPaint.resetTools();
        WinPaint.addUndo();
    }
    WinPaint.doneCallback = doneCallback;
    WinPaint.cancelCallback = cancelCallback;

    if (!title) {
        title = 'Paint';
    }

    WinPaint.clearCanvas(false);
    WinPaint.centerX = cx;
    WinPaint.centerY = cy;


//    $('#tool-color').text('Color #000000');
//    $('#tool-color div').css('background-color', WinPaint.color);
//    $('#tool-size div').slider('option', 'value', WinPaint.size);
//    $('.paint-tools').removeClass('selected');
//    $('#tool-brush').addClass('selected');

    // Editor dimensions is the overall size available for the window
    // Edit image container is the actual window
    // Edit image content wraps the win paint div

    var editImageButtonsHeight = 38;
    var editImageContentWidth = editorWidth - 20;
    var editImageContentHeight = editorHeight - 20 - editImageButtonsHeight;
    var winPaintWidth = editImageContentWidth - 10;
    var winPaintHeight = editImageContentHeight - 14;

    $('#edit_image_container').draggable({cancel:'#edit_image_content, #edit_image_buttons *', containment: 'window'});
    $('#edit_image_container').css('width', editorWidth)
      .css('margin-left', -editorWidth / 2)
      .css('height', editorHeight)
      .css('margin-top', -editorHeight / 2);

    $('#edit_image_content').css('width', editImageContentWidth).css('height', editImageContentHeight)

    $('#win-paint').css('width', winPaintWidth).css('height', winPaintHeight);

    var box = $('#edit_image_box')
    box.show()
    WinPaint.visible = true;

    $('#edit_image_buttons .save').bind('click', function() {
        WinPaint.visible = false;
        WinPaint.save();
        box.hide();
    });
    $('#edit_image_buttons .cancel').bind('click', function() {
        WinPaint.visible = false;
        WinPaint.close();
        box.hide();
    });
    WinPaint.adjustWindow();
    return false;
};

/**
 * Save the image.  Find the bounds and get a hugging image.
 */
WinPaint.save = function() {
    var bounds = WinPaint.findBounds();
    var snapshot = document.createElement('canvas');
    var snapContext = snapshot.getContext('2d');
    snapshot.width = bounds.right - bounds.left + 1;
    snapshot.height = bounds.bottom - bounds.top + 1;

    // Get the center position
    if (WinPaint.centerX === undefined || WinPaint.centerX === null) {
        WinPaint.centerX = WinPaint.canvas.width / 2;
    }
    if (WinPaint.centerY === undefined || WinPaint.centerY === null) {
        WinPaint.centerY = WinPaint.canvas.height / 2;
    }
    WinPaint.centerX = Math.floor(WinPaint.centerX - bounds.left);
    WinPaint.centerY = Math.floor(WinPaint.centerY - bounds.top);

    var imageData = WinPaint.context.getImageData(bounds.left, bounds.top, bounds.right - bounds.left + 1, bounds.bottom - bounds.top + 1);
    snapContext.putImageData(imageData, 0, 0);
    var data = snapshot.toDataURL();


    if (WinPaint.doneCallback) {
        WinPaint.doneCallback(data, WinPaint.centerX, WinPaint.centerY);
    }

//    if (WinPaint.dirty) {
//        WinPaint.dirty = false;
//        var data = snapshot.toDataURL();
//        var url = 'd=' + encodeURIComponent(data);
//        if (WinPaint.mediaId) {
//            url += '&i=' + encodeURIComponent(WinPaint.mediaId);
//        }
//        $.ajax({
//            url : '/api/mediasave',
//            type : 'POST',
//            data : url,
//            success : function(data) {
//                var result = JSON.parse(data);
//                if (result.result) {
//                    WinPaint.mediaId = result.id;
//                }
//                WinContent._fetchFiles('MyStuff', null, true);
//
//                if (WinPaint.doneCallback) {
//                    WinPaint.doneCallback('/assets/user/' + WinPaint.mediaId + '.png', WinPaint.centerX, WinPaint.centerY);
//                }
//            }
//        });
//
//    } else if (WinPaint.editingUrl) {
//        if (WinPaint.doneCallback) {
//            WinPaint.doneCallback(WinPaint.editingUrl, WinPaint.centerX, WinPaint.centerY);
//        }
//    }
    return false;
};

/**
 * Close the editor. Call the cancel callback.
 */
WinPaint.close = function() {
    if (WinPaint.cancelCallback) {
        WinPaint.cancelCallback.call(null);
    }
}

/**
 * Adjust the paint window.
 */
WinPaint.adjustWindow = function() {
    $('#win-paint div.canvas')
        .css('top', $('#win-paint div.tool-options').position().top + $('#win-paint div.tool-options').outerHeight())
        .css('left', $('#win-paint div.tools').position().left + $('#win-paint div.tools').outerWidth());

    var width = $('#win-paint div.canvas').innerWidth();
    var height = $('#win-paint div.canvas').innerHeight();

    WinPaint.centerX = WinPaint.canvas.width / 2;;
    WinPaint.centerY = WinPaint.canvas.height / 2;;

    if (WinPaint.centerVisible) {
        WinPaint.drawCenter();
    }
    else {
        WinPaint.clearCenter();
    }

//    if (width && height && WinPaint.editingWidth < WinPaint.canvas.width &&
//        WinPaint.editingHeight < WinPaint.canvas.height &&
//        (width != WinPaint.canvas.width || height != WinPaint.canvas.height)) {
//
//        var imgData = WinPaint.context.getImageData(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
//
//        WinPaint.canvas.width = width;
//        WinPaint.canvas.height = height;
//        WinPaint.canvas.style.width = WinPaint.canvas.width + 'px';
//        WinPaint.canvas.style.height = WinPaint.canvas.height + 'px';
//
//        WinPaint.overlay.width = WinPaint.canvas.width;
//        WinPaint.overlay.height = WinPaint.canvas.height;
//        WinPaint.overlay.style.width = WinPaint.canvas.width + 'px';
//        WinPaint.overlay.style.height = WinPaint.canvas.height + 'px';
//
//        WinPaint.center.width = WinPaint.canvas.width;
//        WinPaint.center.height = WinPaint.canvas.height;
//        WinPaint.center.style.width = WinPaint.canvas.width + 'px';
//        WinPaint.center.style.height = WinPaint.canvas.height + 'px';
//
//        WinPaint.context.putImageData(imgData, 0, 0);
//    }
};

/**
 * When mouse is down, mark the position as the starting point.  For paint
 * brush, draw the first point.
 */
WinPaint._mousedown = function(event) {
    $('#win-paint .menu').addClass('hidden');

    WinPaint.penDown = true;
    var x = event.pageX - $(WinPaint.viewport).offset().left;
    var y = event.pageY - $(WinPaint.viewport).offset().top;

    WinPaint.context.save();
    WinPaint.context.translate(WinPaint.viewportX, WinPaint.viewportY);
    WinPaint.context.scale(1 / WinPaint.zoomLevel, 1 / WinPaint.zoomLevel);

    if (WinPaint.tool == 'pencil') {
        WinPaint.dirty = true;
        WinPaint.context.lineCap = 'round';
        WinPaint.context.lineWidth = WinPaint.size * WinPaint.zoomLevel;
        WinPaint.context.strokeStyle = WinPaint.fillColor;

        WinPaint.context.beginPath();
        WinPaint.context.moveTo(x, y);
        WinPaint.context.lineTo(x + 1, y);
        WinPaint.context.stroke();

    } else if (WinPaint.tool == 'brush' && WinPaint.toolType == 'oval') {
        // resets the brush
        for (var i = 0; i < WinPaint.brushBristles.length; i++) {
            WinPaint.brushBristles[i].ax = 0;
            WinPaint.brushBristles[i].ay = 0;
            WinPaint.brushBristles[i].dx = x;
            WinPaint.brushBristles[i].dy = y;
        }

        WinPaint.brushInterval = setInterval(WinPaint._updateBrush, WinPaint.brushRefreshRate);

    } else if (WinPaint.tool == 'brush' && WinPaint.toolType == 'wetbrush') {
        WinPaint.dirty = true;
        var halfBrushW = WinPaint.marker.width / 2.0;
        var halfBrushH = WinPaint.marker.height / 2.0;

        var start = { x : x, y : y };
        var end = { x : x + 1, y : y };

        var distance = parseInt(WinPaint.distance(start, end));
        var angle = WinPaint.angle(start, end);

        var drawX, drawY;

        for (var z = 0; (z <= distance || z == 0); z += 1) {
            drawX = start.x + (Math.sin(angle) * z) - halfBrushW;
            drawY = start.y + (Math.cos(angle) * z) - halfBrushH;
            WinPaint.context.drawImage(WinPaint.marker, drawX, drawY);
        }
    } else if (WinPaint.tool == 'pen') {
        WinPaint.dirty = true;
        WinPaint.context.restore();
        WinPaint.context.fillStyle = WinPaint.fillColor;
        var drawX = x / WinPaint.zoomLevel + WinPaint.viewportX;
        var drawY = y / WinPaint.zoomLevel + WinPaint.viewportY;
        WinPaint.context.fillRect(Math.round(drawX - WinPaint.size / 2), Math.round(drawY - WinPaint.size / 2), WinPaint.size, WinPaint.size);
    } else if (WinPaint.tool == 'colorpicker') {
        $('#win-paint .tool-eyedropper').removeClass('selected');
        WinPaint.tool = WinPaint.lastTool;

        var pixels = WinPaint.context.getImageData(x, y, 1, 1);
        var color = 'rgb(' + pixels.data[0] + ',' + pixels.data[1] + ',' + pixels.data[2] + ')';
        if (WinPaint.selectedColor == 'fill') {
            $('#win-paint .fillcolor > div').css('background-color', color);
            WinPaint.fillColor = color;
        } else if (WinPaint.selectedColor == 'stroke') {
            $('#win-paint .strokecolor > div').css('border', '4px solid ' + color);
            WinPaint.strokeColor = color;
        }

    } else if (WinPaint.tool == 'text') {
        WinPaint.dirty = true;

        WinPaint._commit();
        WinPaint.text = '';

        WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
        WinPaint.overlayContext.strokeStyle = WinPaint.strokeColor;
        WinPaint.overlayContext.lineWidth = 2;
        WinPaint.overlayContext.beginPath();
        WinPaint.overlayContext.moveTo(x, y);
        WinPaint.overlayContext.lineTo(x, y - WinPaint.fontSize);
        WinPaint.overlayContext.closePath();
        WinPaint.overlayContext.stroke();

    } else if (WinPaint.tool == 'selection' || WinPaint.tool == 'stamp-selection') {
        if (WinPaint.toolType == 'lasso') {
            WinPaint.dirty = true;
            WinPaint.overlayContext.lineCap = 'round';
            WinPaint.overlayContext.lineWidth = 1;
            WinPaint.overlayContext.strokeStyle = '#333';
            WinPaint.overlayContext.beginPath();
            WinPaint.overlayContext.moveTo(x, y);
            WinPaint.overlayContext.lineTo(x + 1, y);
            WinPaint.overlayContext.stroke();

            // initializes the lasso path points
            WinPaint.lassoPathPoints = [{x:x, y:y}];
        }
    } else if (WinPaint.tool == 'move') {
        $(WinPaint.selection).addClass('hidden');

        switch(WinPaint.getSelectionLocation(x, y)) {
            case 'rotation_lever':
                WinPaint.rotationAngle = 0;
                WinPaint.tool = 'rotate';
                break;
            case 'nw_corner':
                WinPaint.tool = 'nw-resize';
                break;
            case 'ne_corner':
                WinPaint.tool = 'ne-resize';
                break;
            case 'se_corner':
                WinPaint.tool = 'se-resize';
                break;
            case 'sw_corner':
                WinPaint.tool = 'sw-resize';
                break;
            case 'n_edge':
                WinPaint.tool = 'n-resize';
                break;
            case 'e_edge':
                WinPaint.tool = 'e-resize';
                break;
            case 'w_edge':
                WinPaint.tool = 'w-resize';
                break;
            case 's_edge':
                WinPaint.tool = 's-resize';
                break;
            case 'outside':
                // clicked outside, commit move
                WinPaint.context.restore();
                WinPaint._commit();
                break;
        }

    } else if (WinPaint.tool == 'stamp') {
        WinPaint.context.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, x - WinPaint.selectionWidth / 2, y - WinPaint.selectionHeight / 2, WinPaint.selectionWidth, WinPaint.selectionHeight);

    } else if (WinPaint.tool == 'zoom' && WinPaint.toolType == 'zoom-in') {
        // determines the zoom window dimensions
        var nextViewportWidth = WinPaint.viewportWidth / 2;
        var nextViewportHeight = WinPaint.viewportHeight / 2;

        // determines the zoom window position, in viewport coordinates
        var left = x - (nextViewportWidth / 2);
        var top = y - (nextViewportHeight / 2);

        // transforms the zoom window coordinates into real size canvas coordinates
        var leftT = WinPaint.viewportX + (left / WinPaint.zoomLevel);
        var topT = WinPaint.viewportY + (top / WinPaint.zoomLevel);

        // applies lower bound to viewport position
        var newViewportX = Math.max(leftT, 0);
        var newViewportY = Math.max(topT, 0);

        WinPaint.zoomIn(newViewportX, newViewportY);

        // in case the maximum zoom level has been reached, switches to zoom out
        if (WinPaint.zoomLevel >= WinPaint.maxZoomLevel) {
            WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
            WinPaint.toolType = 'zoom-out';
            $('#win-paint .zoom ul li.zoom-type').removeClass('selected');
            $('#win-paint .zoom ul li.zoom-type.' + WinPaint.toolType).addClass('selected');

        }

    } else if (WinPaint.tool == 'zoom' && WinPaint.toolType == 'zoom-out') {
        WinPaint.zoomOut();

        // in case the minimum zoom level has been reached, switches to zoom in
        if (WinPaint.zoomLevel <= WinPaint.minZoomLevel) {
            WinPaint.toolType = 'zoom-in';
            $('#win-paint .zoom ul li.zoom-type').removeClass('selected');
            $('#win-paint .zoom ul li.zoom-type.' + WinPaint.toolType).addClass('selected');
        }

    } else if (WinPaint.tool == 'center') {
        // update center in canvas coordinates (100%)
        WinPaint.centerX = Math.round(x / WinPaint.zoomLevel + WinPaint.viewportX);
        WinPaint.centerY = Math.round(y / WinPaint.zoomLevel + WinPaint.viewportY);
    }

    WinPaint.lastX = x;
    WinPaint.lastY = y;

    WinPaint.context.restore();
    WinPaint.updateViewport();
};

/**
 * When the mouse is released, we'll move whatever is in the overlay layer
 * down onto the buffer.  For the paint bucket, we'll perform the flood fill.
 */
WinPaint._mouseup = function(event) {
    // skips the mouse up behaviour,
    // in case the pen has not been set down
    if(!WinPaint.penDown) {
        return false;
    }

    WinPaint.penDown = false;

    var x = event.pageX - $(WinPaint.viewport).offset().left;
    var y = event.pageY - $(WinPaint.viewport).offset().top;
    WinPaint.checkDiscardableMove(x, y);

    WinPaint.context.save();
    WinPaint.context.translate(WinPaint.viewportX, WinPaint.viewportY);
    WinPaint.context.scale(1 / WinPaint.zoomLevel, 1 / WinPaint.zoomLevel);

    // Copy canvas into buffer
//    WinPaint.bufferContext.drawImage(WinPaint.canvas, 0, 0);
    if (WinPaint.tool == 'pencil') {
        WinPaint.addUndo();

    } else if(WinPaint.tool == 'brush' && WinPaint.toolType == 'oval') {
        clearInterval(WinPaint.brushInterval);
        WinPaint.addUndo();

    } else if(WinPaint.tool == 'pen') {
        WinPaint.addUndo();

    } else if (WinPaint.tool == 'line' && !WinPaint.isDiscardableMove) {
        WinPaint.dirty = true;

        var lineWidth = WinPaint.size * WinPaint.zoomLevel;

        // draw to overlay
        WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
        WinPaint.overlayContext.lineCap = 'round';
        WinPaint.overlayContext.lineWidth = lineWidth;
        WinPaint.overlayContext.strokeStyle = WinPaint.fillColor;
        WinPaint.overlayContext.beginPath();
        WinPaint.overlayContext.moveTo(WinPaint.lastX, WinPaint.lastY);
        WinPaint.overlayContext.lineTo(x, y);
        WinPaint.overlayContext.stroke();

        // copy an area bounding the shape
        // from the overlay to the selection
        var lineBoundingBox = {
            left : Math.min(WinPaint.lastX, x) - lineWidth,
            top : Math.min(WinPaint.lastY, y) - lineWidth,
            right : Math.max(WinPaint.lastX, x) + lineWidth,
            bottom : Math.max(WinPaint.lastY, y) + lineWidth
        };
        WinPaint.selectionX = lineBoundingBox.left;
        WinPaint.selectionY = lineBoundingBox.top;
        WinPaint.selectionWidth = lineBoundingBox.right - lineBoundingBox.left;
        WinPaint.selectionHeight = lineBoundingBox.bottom - lineBoundingBox.top;
        WinPaint.selectionContext.drawImage(WinPaint.overlay, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        // draws the selection outline
        WinPaint.drawSelectionOutline();

        // switch to move tool (temporary)
        // (will switch back to line tool on click outside)
        WinPaint.tool = 'move';
        WinPaint.toolType = 'move-line';

    } else if (WinPaint.tool == 'rectangle' && !WinPaint.isDiscardableMove) {
        WinPaint.dirty = true;

        var lineWidth = WinPaint.size * WinPaint.zoomLevel;

        // draw to overlay
        WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
        WinPaint.overlayContext.lineCap = 'round';
        WinPaint.overlayContext.lineWidth = lineWidth;
        WinPaint.overlayContext.strokeStyle = WinPaint.strokeColor;
        WinPaint.overlayContext.fillStyle = WinPaint.fillColor;
        WinPaint.overlayContext.beginPath();
        var left = Math.min(WinPaint.lastX, x);
        var top = Math.min(WinPaint.lastY, y);
        var width = Math.abs(WinPaint.lastX - x);
        var height = Math.abs(WinPaint.lastY - y);
        WinPaint.overlayContext.rect(left, top, width, height);
        if (WinPaint.fillColor != 'none') {
            WinPaint.overlayContext.fill();
        }
        WinPaint.overlayContext.stroke();

        // copy an area bounding the shape
        // from the overlay to the selection
        var rectangleBoundingBox = {
            left : left - lineWidth,
            top : top - lineWidth,
            right : left + width + lineWidth,
            bottom : top + height + lineWidth
        };
        WinPaint.selectionX = rectangleBoundingBox.left;
        WinPaint.selectionY = rectangleBoundingBox.top;
        WinPaint.selectionWidth = rectangleBoundingBox.right - rectangleBoundingBox.left;
        WinPaint.selectionHeight = rectangleBoundingBox.bottom - rectangleBoundingBox.top;
        WinPaint.selectionContext.drawImage(WinPaint.overlay, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        // draws the selection outline
        WinPaint.drawSelectionOutline();

        // switch to move tool (temporary)
        // (will switch back to rectangle tool on click outside)
        WinPaint.tool = 'move';
        WinPaint.toolType = 'move-rectangle';

    } else if (WinPaint.tool == 'ellipse' && !WinPaint.isDiscardableMove) {
        WinPaint.dirty = true;

        var lineWidth = WinPaint.size * WinPaint.zoomLevel;

        // draw to overlay
        WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
        WinPaint.overlayContext.lineCap = 'round';
        WinPaint.overlayContext.lineWidth = lineWidth;
        WinPaint.overlayContext.strokeStyle = WinPaint.strokeColor;
        WinPaint.overlayContext.fillStyle = WinPaint.fillColor;
        WinPaint.overlayContext.beginPath();
        var left = Math.min(WinPaint.lastX, x);
        var top = Math.min(WinPaint.lastY, y);
        var width = Math.abs(WinPaint.lastX - x);
        var height = Math.abs(WinPaint.lastY - y);
        var diameter = Math.max(width, height);
        var scaleX = width / diameter;
        var scaleY = height / diameter;
        WinPaint.overlayContext.save();
        WinPaint.overlayContext.translate((WinPaint.lastX + x)/2, (WinPaint.lastY + y)/2);
        WinPaint.overlayContext.scale(scaleX, scaleY);
        WinPaint.overlayContext.beginPath();
        WinPaint.overlayContext.arc(0, 0, diameter/2, 0, Math.PI * 2, false);
        WinPaint.overlayContext.closePath();
        WinPaint.overlayContext.restore();
        if (WinPaint.fillColor != 'none') {
            WinPaint.overlayContext.fill();
        }
        WinPaint.overlayContext.stroke();

        // copy an area bounding the shape
        // from the overlay to the selection
        var ellipseBoundingBox = {
            left : left - lineWidth,
            top : top - lineWidth,
            right : left + width + lineWidth,
            bottom : top + height + lineWidth
        };
        WinPaint.selectionX = ellipseBoundingBox.left;
        WinPaint.selectionY = ellipseBoundingBox.top;
        WinPaint.selectionWidth = ellipseBoundingBox.right - ellipseBoundingBox.left;
        WinPaint.selectionHeight = ellipseBoundingBox.bottom - ellipseBoundingBox.top;
        WinPaint.selectionContext.drawImage(WinPaint.overlay, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        // draws the selection outline
        WinPaint.drawSelectionOutline();

        // switch to move tool (temporary)
        // (will switch back to line tool on click outside)
        WinPaint.tool = 'move';
        WinPaint.toolType = 'move-ellipse';

        WinPaint.addUndo();

    } else if ((WinPaint.tool == 'selection' || WinPaint.tool == 'stamp-selection') && !WinPaint.isDiscardableMove) {
        WinPaint.dirty = true;

        // calculates final selection dimensions
        var left = Math.min(WinPaint.lastX, x);
        var top = Math.min(WinPaint.lastY, y);
        var dx = Math.abs(WinPaint.lastX - x);
        var dy = Math.abs(WinPaint.lastY - y);
        WinPaint.selectionX = left;
        WinPaint.selectionY = top;
        WinPaint.selectionWidth = dx;
        WinPaint.selectionHeight = dy;

        // clears the canvas for receiving the images
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);

        // creates a clipping path, so that only the selected region (ellipse and lasso selection)
        // are written to the selection canvas
        if (WinPaint.toolType == 'rectangle') {
            // no clipping required
        } else if (WinPaint.toolType == 'ellipse') {
            var diameter = Math.max(WinPaint.selectionWidth, WinPaint.selectionHeight);
            var scaleX = WinPaint.selectionWidth / diameter;
            var scaleY = WinPaint.selectionHeight / diameter;

            WinPaint.selectionContext.save();
            WinPaint.selectionContext.translate((WinPaint.lastX + x)/2 - WinPaint.selectionX, (WinPaint.lastY + y)/2 - WinPaint.selectionY);
            WinPaint.selectionContext.scale(scaleX, scaleY);
            WinPaint.selectionContext.beginPath();
            WinPaint.selectionContext.arc(0, 0, diameter/2, 0, Math.PI * 2, false);
            WinPaint.selectionContext.restore();
            WinPaint.selectionContext.save();
            WinPaint.selectionContext.clip();

            WinPaint.overlayContext.save();
            WinPaint.overlayContext.translate((WinPaint.lastX + x)/2, (WinPaint.lastY + y)/2);
            WinPaint.overlayContext.scale(scaleX, scaleY);
            WinPaint.overlayContext.beginPath();
            WinPaint.overlayContext.arc(0, 0, diameter/2, 0, Math.PI * 2, false);
            WinPaint.overlayContext.stroke();
            WinPaint.overlayContext.restore();
        } else if (WinPaint.toolType == 'lasso') {
            // appends the final point
            WinPaint.lassoPathPoints.push({x:x, y:y});

            var minX = x, maxX = x;
            var minY = y, maxY = y;

            WinPaint.overlayContext.beginPath();
            for (var index in WinPaint.lassoPathPoints) {
                var point = WinPaint.lassoPathPoints[index];
                WinPaint.overlayContext.lineTo(point.x, point.y);

                minX = Math.min(minX, point.x);
                maxX = Math.max(maxX, point.x);
                minY = Math.min(minY, point.y);
                maxY = Math.max(maxY, point.y);
            }
            WinPaint.overlayContext.closePath();
            WinPaint.overlayContext.stroke();

            // determines the lasso's bounding box
            left = minX;
            top = minY;
            dx = Math.abs(maxX - minX);
            dy = Math.abs(maxY - minY);

            // updates the selection box, according to the lasso's bounding box
            WinPaint.selectionX = minX;
            WinPaint.selectionY = minY;
            WinPaint.selectionWidth = Math.abs(maxX - minX);
            WinPaint.selectionHeight = Math.abs(maxY - minY);

            WinPaint.selectionContext.save();
            WinPaint.selectionContext.translate(-WinPaint.selectionX, -WinPaint.selectionY);
            WinPaint.selectionContext.beginPath();
            for (var index in WinPaint.lassoPathPoints) {
                var point = WinPaint.lassoPathPoints[index];
                WinPaint.selectionContext.lineTo(point.x, point.y);
            }
            WinPaint.selectionContext.restore();
            WinPaint.selectionContext.save();
            WinPaint.selectionContext.clip();
        }

        // computes the selection box dimensions in canvas coordinates (100%)
        var canvasLeft = Math.round(left / WinPaint.zoomLevel + WinPaint.viewportX);
        var canvasTop = Math.round(top / WinPaint.zoomLevel + WinPaint.viewportY);
        var canvasDx = dx / WinPaint.zoomLevel;
        var canvasDy = dy / WinPaint.zoomLevel;

        // copy canvas into selection
        // copy selection into overlay
        // uses integers when taking a slice from the canvas into the selection, to
        // prevent anti-aliasing
        WinPaint.selectionContext.drawImage(WinPaint.canvas, canvasLeft, canvasTop, canvasDx, canvasDy, 0, 0, dx, dy);
        WinPaint.selectionContext.restore();
        WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, Math.round(WinPaint.selectionX), Math.round(WinPaint.selectionY), WinPaint.selectionWidth, WinPaint.selectionHeight);
        WinPaint.drawSelectionOutline();

        if (WinPaint.tool == 'stamp-selection') {
            WinPaint.tool = 'stamp';

        } else {
            if (WinPaint.toolType == 'rectangle') {
                // no clipping required
                WinPaint.context.save();
            } else if (WinPaint.toolType == 'ellipse') {
                var width = Math.abs(WinPaint.lastX - x);
                var height = Math.abs(WinPaint.lastY - y);
                var diameter = Math.max(width, height);
                var scaleX = width / diameter;
                var scaleY = height / diameter;

                WinPaint.context.save();
                WinPaint.context.translate((WinPaint.lastX + x)/2, (WinPaint.lastY + y)/2);
                WinPaint.context.scale(scaleX, scaleY);
                WinPaint.context.beginPath();
                WinPaint.context.arc(0, 0, diameter/2, 0, Math.PI * 2, false);
                WinPaint.context.restore();

                WinPaint.context.save();
                WinPaint.context.clip();
            }
            else if (WinPaint.toolType == 'lasso') {
                WinPaint.context.beginPath();
                for (var index in WinPaint.lassoPathPoints) {
                    var point = WinPaint.lassoPathPoints[index];
                    WinPaint.context.lineTo(point.x, point.y);
                }

                WinPaint.context.save();
                WinPaint.context.clip();
            }
            WinPaint.context.clearRect(WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.context.restore();

            WinPaint.tool = 'move';
        }
    } else if (WinPaint.tool == 'move') {
        // does nothing
    } else if (WinPaint.tool == 'fill') {
        WinPaint.dirty = true;

        var canvasX = Math.round(x / WinPaint.zoomLevel + WinPaint.viewportX);
        var canvasY = Math.round(y / WinPaint.zoomLevel + WinPaint.viewportY);
        WinPaint.floodFill(canvasX, canvasY, WinPaint.context, WinPaint.fillColor, 10);

        WinPaint.addUndo();

    } else if (WinPaint.tool == 'rotate') {
        WinPaint.dirty = true;

        // draws the selection to the rotated overlay
        WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
        WinPaint.overlayContext.save();
        WinPaint.overlayContext.translate(WinPaint.selectionX + WinPaint.selectionWidth / 2, WinPaint.selectionY + WinPaint.selectionHeight / 2);
        WinPaint.overlayContext.rotate(WinPaint.rotationAngle);
        WinPaint.overlayContext.translate(-(WinPaint.selectionX + WinPaint.selectionWidth / 2), -(WinPaint.selectionY + WinPaint.selectionHeight / 2));
        WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
        WinPaint.overlayContext.restore();

        // updates the selection box dimensions
        var boundingBox = WinPaint.getRotationBoundingBox(WinPaint.overlayContext, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.rotationAngle);
        WinPaint.selectionX = Math.max(boundingBox.left, 0);
        WinPaint.selectionY = Math.max(boundingBox.top, 0);
        WinPaint.selectionWidth = boundingBox.right - boundingBox.left;
        WinPaint.selectionHeight = boundingBox.bottom - boundingBox.top;

        // redraws the rotated image from the overlay onto the selection
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.overlay, Math.round(WinPaint.selectionX), Math.round(WinPaint.selectionY), WinPaint.selectionWidth, WinPaint.selectionHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.drawSelectionOutline();

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'center') {
        // make center black (until mouse up)
        WinPaint.centerStyle = '#222';

    } else if (WinPaint.tool == 'nw-resize') {
        var dx = WinPaint.lastX - x;
        var dy = WinPaint.lastY - y;
        if (WinPaint.proportionalResize) {
            // for proportional resize, use the largest displacement (in absolute value) for both axis
            dx = dy = Math.max(dx, dy);
        }

        var originalWidth = WinPaint.selectionWidth;
        var originalHeight = WinPaint.selectionHeight;
        WinPaint.selectionX -= dx;
        WinPaint.selectionY -= dy;
        WinPaint.selectionWidth += dx;
        WinPaint.selectionHeight += dy;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, originalWidth, originalHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'ne-resize') {
        var dx = x - WinPaint.lastX;
        var dy = WinPaint.lastY - y;
        if (WinPaint.proportionalResize) {
            // for proportional resize, use the largest displacement (in absolute value) for both axis
            dx = dy = Math.max(dx, dy);
        }

        var originalWidth = WinPaint.selectionWidth;
        var originalHeight = WinPaint.selectionHeight;
        WinPaint.selectionY -= dy;
        WinPaint.selectionWidth += dx;
        WinPaint.selectionHeight += dy;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, originalWidth, originalHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'se-resize') {
        var dx = x - WinPaint.lastX;
        var dy = y - WinPaint.lastY;
        if (WinPaint.proportionalResize) {
            // for proportional resize, use the largest displacement (in absolute value) for both axis
            dx = dy = Math.max(dx, dy);
        }

        var originalWidth = WinPaint.selectionWidth;
        var originalHeight = WinPaint.selectionHeight;
        WinPaint.selectionWidth += dx;
        WinPaint.selectionHeight += dy;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, originalWidth, originalHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'sw-resize') {
        var dx = WinPaint.lastX - x;
        var dy = y - WinPaint.lastY;
        if (WinPaint.proportionalResize) {
            // for proportional resize, use the largest displacement (in absolute value) for both axis
            dx = dy = Math.max(dx, dy);
        }

        var originalWidth = WinPaint.selectionWidth;
        var originalHeight = WinPaint.selectionHeight;
        WinPaint.selectionX -= dx;
        WinPaint.selectionWidth += dx;
        WinPaint.selectionHeight += dy;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, originalWidth, originalHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'n-resize') {
        var dy = WinPaint.lastY - y;

        var originalHeight = WinPaint.selectionHeight;

        WinPaint.selectionY -= dy;
        WinPaint.selectionHeight += dy;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, WinPaint.selectionWidth, originalHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'e-resize') {
        var dx = x - WinPaint.lastX;

        var originalWidth = WinPaint.selectionWidth;

        WinPaint.selectionWidth += dx;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, originalWidth, WinPaint.selectionHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 's-resize') {
        var dy = y - WinPaint.lastY;

        var originalHeight = WinPaint.selectionHeight;

        WinPaint.selectionHeight += dy;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, WinPaint.selectionWidth, originalHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    } else if (WinPaint.tool == 'w-resize') {
        var dx = WinPaint.lastX - x;

        var originalWidth = WinPaint.selectionWidth;

        WinPaint.selectionX = WinPaint.selectionX - dx;
        WinPaint.selectionWidth += dx;

        WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
        WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.selection.width, WinPaint.selection.height);
        WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, originalWidth, WinPaint.selectionHeight, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.tool = 'move';

    }

    WinPaint.context.restore();
    WinPaint.updateViewport();
};

/**
 * If the mouse leaves the canvas and re-enters, we'll restart the paint
 * brush from where we left off.
 */
WinPaint._mouseenter = function(event) {
    if (WinPaint.penDown) {
        if (WinPaint.tool == 'pencil' || WinPaint.tool == 'brush') {
            WinPaint.lastX = event.pageX - $(WinPaint.canvas).offset().left;
            WinPaint.lastY = event.pageY - $(WinPaint.canvas).offset().top;
        }
    }
};

/**
 * Handle the tool actions as the mouse moves.
 */
WinPaint._mousemove = function(event) {
    var x = event.pageX - $(WinPaint.viewport).offset().left;
    var y = event.pageY - $(WinPaint.viewport).offset().top;
    WinPaint.checkDiscardableMove(x, y);

    if (WinPaint.penDown) {
        WinPaint.context.save();
        WinPaint.context.translate(WinPaint.viewportX, WinPaint.viewportY);
        WinPaint.context.scale(1 / WinPaint.zoomLevel, 1 / WinPaint.zoomLevel);

        if (WinPaint.tool == 'pencil') {
            WinPaint.dirty = true;
            WinPaint.context.lineCap = 'round';
            WinPaint.context.lineWidth = WinPaint.size * WinPaint.zoomLevel;
            WinPaint.context.strokeStyle = WinPaint.fillColor;
            WinPaint.context.beginPath();
            WinPaint.context.moveTo(WinPaint.lastX, WinPaint.lastY);
            WinPaint.context.lineTo(x, y);
            WinPaint.lastX = x;
            WinPaint.lastY = y;
            WinPaint.context.stroke();
            WinPaint.context.restore();
        } else if (WinPaint.tool == 'brush' && WinPaint.toolType== 'oval') {
            // the update loop does all the work
            WinPaint.lastX = x;
            WinPaint.lastY = y;
        } else if (WinPaint.tool == 'brush' && WinPaint.toolType== 'wetbrush') {
            WinPaint.dirty = true;
            var halfBrushW = WinPaint.marker.width / 2.0;
            var halfBrushH = WinPaint.marker.height / 2.0;

            var start = { x : WinPaint.lastX, y : WinPaint.lastY };
            var end = { x : x, y : y };

            var distance = parseInt(WinPaint.distance(start, end));
            var angle = WinPaint.angle(start, end);

            var drawX, drawY;

            for (var z = 0; (z <= distance || z == 0); z += 1) {
                drawX = start.x + (Math.sin(angle) * z) - halfBrushW;
                drawY = start.y + (Math.cos(angle) * z) - halfBrushH;
                WinPaint.context.drawImage(WinPaint.marker, drawX, drawY);
            }

            WinPaint.lastX = x;
            WinPaint.lastY = y;
        }else if (WinPaint.tool == 'pen') {
            WinPaint.dirty = true;
            WinPaint.context.restore();
            WinPaint.context.fillStyle = WinPaint.fillColor;
            var drawX = x / WinPaint.zoomLevel + WinPaint.viewportX;
            var drawY = y / WinPaint.zoomLevel + WinPaint.viewportY;
            WinPaint.context.fillRect(Math.round(drawX - WinPaint.size / 2), Math.round(drawY - WinPaint.size / 2), WinPaint.size, WinPaint.size);
        } else if (WinPaint.tool == 'eraser') {
            WinPaint.dirty = true;
            var previous = WinPaint.context.globalCompositeOperation;
            WinPaint.context.globalCompositeOperation = 'destination-out';
            WinPaint.context.strokeStyle = 'rgba(255, 255, 255, 1.0)';
            WinPaint.context.lineCap = 'round';
            WinPaint.context.lineWidth = WinPaint.size * WinPaint.zoomLevel;
            WinPaint.context.beginPath();
            WinPaint.context.moveTo(WinPaint.lastX, WinPaint.lastY);
            WinPaint.context.lineTo(x, y);
            WinPaint.lastX = x;
            WinPaint.lastY = y;
            WinPaint.context.stroke();
            WinPaint.context.globalCompositeOperation = previous;

        } else if (WinPaint.tool == 'line' && !WinPaint.isDiscardableMove) {
            WinPaint.dirty = true;
            WinPaint.overlayContext.lineCap = 'round';
            WinPaint.overlayContext.lineWidth = WinPaint.size * WinPaint.zoomLevel;
            WinPaint.overlayContext.strokeStyle = WinPaint.fillColor;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
            WinPaint.overlayContext.beginPath();
            WinPaint.overlayContext.moveTo(WinPaint.lastX, WinPaint.lastY);
            WinPaint.overlayContext.lineTo(x, y);
            WinPaint.overlayContext.stroke();

        } else if (WinPaint.tool == 'rectangle' && !WinPaint.isDiscardableMove) {
            WinPaint.dirty = true;
            WinPaint.overlayContext.lineCap = 'round';
            WinPaint.overlayContext.lineWidth = WinPaint.size * WinPaint.zoomLevel;
            WinPaint.overlayContext.strokeStyle = WinPaint.strokeColor;
            WinPaint.overlayContext.fillStyle = WinPaint.fillColor;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
            WinPaint.overlayContext.beginPath();
            var left = Math.min(WinPaint.lastX, x);
            var top = Math.min(WinPaint.lastY, y);
            WinPaint.overlayContext.rect(left, top, Math.abs(WinPaint.lastX - x), Math.abs(WinPaint.lastY - y));
            if (WinPaint.fillColor != 'none') {
                WinPaint.overlayContext.fill();
            }
            WinPaint.overlayContext.stroke();

        } else if (WinPaint.tool == 'ellipse' && !WinPaint.isDiscardableMove) {
            WinPaint.dirty = true;
            WinPaint.overlayContext.lineCap = 'round';
            WinPaint.overlayContext.lineWidth = WinPaint.size * WinPaint.zoomLevel;
            WinPaint.overlayContext.strokeStyle = WinPaint.strokeColor;
            WinPaint.overlayContext.fillStyle = WinPaint.fillColor;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
            WinPaint.overlayContext.beginPath();
            var left = Math.min(WinPaint.lastX, x);
            var top = Math.min(WinPaint.lastY, y);
            var width = Math.abs(WinPaint.lastX - x);
            var height = Math.abs(WinPaint.lastY - y);
            var diameter = Math.max(width, height);
            var scaleX = width / diameter;
            var scaleY = height / diameter;

            WinPaint.overlayContext.save();
            WinPaint.overlayContext.translate((WinPaint.lastX + x)/2, (WinPaint.lastY + y)/2);
            WinPaint.overlayContext.scale(scaleX, scaleY);
            WinPaint.overlayContext.beginPath();
            WinPaint.overlayContext.arc(0, 0, diameter/2, 0, Math.PI * 2, false);
            WinPaint.overlayContext.closePath();
            WinPaint.overlayContext.restore();
            if (WinPaint.fillColor != 'none') {
                WinPaint.overlayContext.fill();
            }
            WinPaint.overlayContext.stroke();

        } else if ((WinPaint.tool == 'selection' || WinPaint.tool == 'stamp-selection') && !WinPaint.isDiscardableMove) {
            WinPaint.dirty = true;
            WinPaint.overlayContext.lineCap = 'round';
            WinPaint.overlayContext.lineWidth = 1;
            WinPaint.overlayContext.strokeStyle = '#333';

            var left = Math.min(WinPaint.lastX, x);
            var top = Math.min(WinPaint.lastY, y);

            WinPaint.overlayContext.beginPath();
            if (WinPaint.toolType == 'rectangle') {
                WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
                //WinPaint.overlayContext.dashedLine(WinPaint.lastX, WinPaint.lastY, x, WinPaint.lastY, 5);
                //WinPaint.overlayContext.dashedLine(WinPaint.lastX, y, x, y, 5);
                //WinPaint.overlayContext.dashedLine(WinPaint.lastX, WinPaint.lastY, WinPaint.lastX, y, 5);
                //WinPaint.overlayContext.dashedLine(x, WinPaint.lastY, x, y, 5);
                WinPaint.overlayContext.rect(left, top, Math.abs(WinPaint.lastX - x), Math.abs(WinPaint.lastY - y));

            } else if (WinPaint.toolType == 'ellipse') {
                var width = Math.abs(WinPaint.lastX - x);
                var height = Math.abs(WinPaint.lastY - y);
                var diameter = Math.max(width, height);
                var scaleX = width / diameter;
                var scaleY = height / diameter;
                WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
                WinPaint.overlayContext.save();
                WinPaint.overlayContext.translate((WinPaint.lastX + x)/2, (WinPaint.lastY + y)/2);
                WinPaint.overlayContext.scale(scaleX, scaleY);
                WinPaint.overlayContext.beginPath();
                WinPaint.overlayContext.arc(0, 0, diameter/2, 0, Math.PI * 2, false);
                WinPaint.overlayContext.restore();
            } else if (WinPaint.toolType == 'lasso') {
                // does not clear overlay, like brush keeps previous shapes
                // (which represent the lasso segments being pushed onto the point list

                // draws the current segment
                WinPaint.overlayContext.moveTo(WinPaint.lastX, WinPaint.lastY);
                WinPaint.overlayContext.lineTo(x, y);

                WinPaint.lastX = x;
                WinPaint.lastY = y;

                // appends the lasso path point
                WinPaint.lassoPathPoints.push({x:x, y:y});
            }
            WinPaint.overlayContext.stroke();

        } else if (WinPaint.tool == 'move') {
            WinPaint.dirty = true;

            switch(WinPaint.getSelectionLocation(x, y)) {
                case 'inside':
                    var dx = x - WinPaint.lastX;
                    var dy = y - WinPaint.lastY;
                    WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
                    WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, Math.round(WinPaint.selectionX + dx), Math.round(WinPaint.selectionY + dy), WinPaint.selectionWidth, WinPaint.selectionHeight);
                    WinPaint.selectionX += dx;
                    WinPaint.selectionY += dy;
                    WinPaint.lastX = x;
                    WinPaint.lastY = y;

                    // draws the selection border
                    WinPaint.drawSelectionOutline();
                    $('#win-paint > div.canvas').css('cursor', 'move');
                    break;
                case 'rotation_lever':
                    $('#win-paint > div.canvas').css('cursor', 'move');
                    break;
                default:
                    $('#win-paint > div.canvas').css('cursor', 'crosshair');
            }

        } else if (WinPaint.tool == 'center') {
            // update center
            WinPaint.centerX = Math.round(x / WinPaint.zoomLevel + WinPaint.viewportX);
            WinPaint.centerY = Math.round(y / WinPaint.zoomLevel + WinPaint.viewportY);

            // make center red (until mouse up)
            WinPaint.centerStyle = '#f00';
        } else if (WinPaint.tool == 'rotate') {
            var dx = x - WinPaint.lastX;
            var dy = (WinPaint.selectionY + WinPaint.selectionHeight / 2) - y;

            WinPaint.rotationAngle = Math.atan2(dx, dy);

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.save();
            WinPaint.overlayContext.translate(WinPaint.selectionX + WinPaint.selectionWidth / 2, WinPaint.selectionY + WinPaint.selectionHeight / 2);
            WinPaint.overlayContext.rotate(WinPaint.rotationAngle);
            WinPaint.overlayContext.translate(-(WinPaint.selectionX + WinPaint.selectionWidth / 2), -(WinPaint.selectionY + WinPaint.selectionHeight / 2));
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            WinPaint.overlayContext.restore();
        } else if (WinPaint.tool == 'nw-resize') {
            var dx = WinPaint.lastX - x;
            var dy = WinPaint.lastY - y;
            if (WinPaint.proportionalResize) {
                // for proportional resize, use the largest displacement (in absolute value) for both axis
                dx = dy = Math.max(dx, dy);
            }

            // temporarily updates the selection bounds
            var originalX = WinPaint.selectionX;
            var originalY = WinPaint.selectionY;
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionX -= dx;
            WinPaint.selectionY -= dy;
            WinPaint.selectionWidth += dx;
            WinPaint.selectionHeight += dy;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restore the selection bounds
            WinPaint.selectionX = originalX;
            WinPaint.selectionY = originalY;
            WinPaint.selectionWidth = originalWidth;
            WinPaint.selectionHeight = originalHeight;

        } else if (WinPaint.tool == 'ne-resize') {
            var dx = x - WinPaint.lastX;
            var dy = WinPaint.lastY - y;
            if (WinPaint.proportionalResize) {
                // for proportional resize, use the largest displacement (in absolute value) for both axis
                dx = dy = Math.max(dx, dy);
            }

            // temporarily updates the selection bounds
            var originalY = WinPaint.selectionY;
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionY -= dy;
            WinPaint.selectionWidth += dx;
            WinPaint.selectionHeight += dy;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restores the selection bounds
            WinPaint.selectionY = originalY;
            WinPaint.selectionWidth = originalWidth;
            WinPaint.selectionHeight = originalHeight;

        } else if (WinPaint.tool == 'se-resize') {
            var dx = x - WinPaint.lastX;
            var dy = y - WinPaint.lastY;
            if (WinPaint.proportionalResize) {
                // for proportional resize, use the largest displacement (in absolute value) for both axis
                dx = dy = Math.max(dx, dy);
            }

            // temporarily updates the selection bounds
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionWidth += dx;
            WinPaint.selectionHeight += dy;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restores the selection bounds
           WinPaint.selectionWidth = originalWidth;
            WinPaint.selectionHeight = originalHeight;

        } else if (WinPaint.tool == 'sw-resize') {
            var dx = WinPaint.lastX - x;
            var dy = y - WinPaint.lastY;
            if (WinPaint.proportionalResize) {
                // for proportional resize, use the largest displacement (in absolute value) for both axis
                dx = dy = Math.max(dx, dy);
            }

            // temporarily updates the selection bounds
            var originalX = WinPaint.selectionX
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionX -= dx;
            WinPaint.selectionWidth += dx;
            WinPaint.selectionHeight += dy;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restores the selection bounds
            WinPaint.selectionX = originalX;
            WinPaint.selectionWidth = originalWidth;
            WinPaint.selectionHeight = originalHeight;

        } else if (WinPaint.tool == 'n-resize') {
            var dy = WinPaint.lastY - y;

            // temporarily updates the selection bounds
            var originalY = WinPaint.selectionY;
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionY -= dy;
            WinPaint.selectionHeight += dy;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            WinPaint.selectionY = originalY;
            WinPaint.selectionHeight = originalHeight;

        } else if (WinPaint.tool == 'e-resize') {
            var dx = x - WinPaint.lastX;

            // temporarily updates the selection bounds
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionWidth += dx;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restores the selection bounds
            WinPaint.selectionWidth = originalWidth;

        } else if (WinPaint.tool == 's-resize') {
            var dy = y - WinPaint.lastY;

            // temporarily updates the selection bounds
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionHeight += dy;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restores the selection bounds
            WinPaint.selectionHeight = originalHeight;

        } else if (WinPaint.tool == 'w-resize') {
            var dx = WinPaint.lastX - x;

            // temporarily updates the selection bounds
            var originalX = WinPaint.selectionX;
            var originalWidth = WinPaint.selectionWidth;
            var originalHeight = WinPaint.selectionHeight;
            WinPaint.selectionX -= dx;
            WinPaint.selectionWidth += dx;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, originalWidth, originalHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline();

            // restores the selection bounds
            WinPaint.selectionX = originalX;
            WinPaint.selectionWidth = originalWidth;

        }

        WinPaint.context.restore();
        WinPaint.updateViewport();
    } else {
        // Hovers
        if (WinPaint.tool == 'move') {
            // changes cursor according to where in the selection the mouse is
            switch (WinPaint.getSelectionLocation(x, y)) {
                case 'nw_corner':
                    $('#win-paint > div.canvas').css('cursor', 'nw-resize');
                    break;
                case 'ne_corner':
                    $('#win-paint > div.canvas').css('cursor', 'ne-resize');
                    break;
                case 'se_corner':
                    $('#win-paint > div.canvas').css('cursor', 'se-resize');
                    break;
                case 'sw_corner':
                    $('#win-paint > div.canvas').css('cursor', 'sw-resize');
                    break;
                case 'n_edge':
                    $('#win-paint > div.canvas').css('cursor', 'n-resize');
                    break;
                case 'e_edge':
                    $('#win-paint > div.canvas').css('cursor', 'e-resize');
                    break;
                case 's_edge':
                    $('#win-paint > div.canvas').css('cursor', 's-resize');
                    break;
                case 'w_edge':
                    $('#win-paint > div.canvas').css('cursor', 'w-resize');
                    break;
                case 'inside':
                    $('#win-paint > div.canvas').css('cursor', 'move');
                    break;
                case 'rotation_lever':
                    $('#win-paint > div.canvas').css('cursor', 'move');
                    break;
                default:
                    $('#win-paint > div.canvas').css('cursor', 'crosshair');
            }
        } else if (WinPaint.tool == 'stamp') {
            WinPaint.dirty = true;

            WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
            WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, x - WinPaint.selectionWidth / 2, y - WinPaint.selectionHeight / 2, WinPaint.selectionWidth, WinPaint.selectionHeight);
            WinPaint.drawSelectionOutline(false);

            $('#win-paint > div.canvas').css('cursor', 'crosshair');
        } else if (WinPaint.tool == 'zoom' && WinPaint.toolType == 'zoom-in') {
            var nextViewportWidth = WinPaint.viewportWidth / 2;
            var nextViewportHeight = WinPaint.viewportHeight / 2;
            var nextViewportX = x - nextViewportWidth / 2;
            var nextViewportY = y - nextViewportHeight / 2;

            WinPaint.overlayContext.lineWidth = 1;
            WinPaint.overlayContext.strokeStyle = '#222';
            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
            WinPaint.overlayContext.strokeRect(nextViewportX, nextViewportY, nextViewportWidth, nextViewportHeight);
        }
    }

    event.preventDefault();
    return false;
};

WinPaint._updateText = function() {
    WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);

    var font = WinPaint.fontSize + 'px ' + WinPaint.fontFamily;
    if (WinPaint.fontIsBold) {
        font = 'bold ' + font;
    }
    if (WinPaint.fontIsItalic) {
        font = 'italic ' + font;
    }
    WinPaint.overlayContext.font = font;
    WinPaint.overlayContext.lineWidth = 2;
    WinPaint.overlayContext.strokeStyle = WinPaint.strokeColor;
    WinPaint.overlayContext.fillStyle = WinPaint.fillColor;
    WinPaint.overlayContext.textAlign = 'left';
    WinPaint.overlayContext.textBaseline = 'bottom';
    WinPaint.overlayContext.fillText(WinPaint.text, WinPaint.lastX, WinPaint.lastY);
    WinPaint.overlayContext.strokeText(WinPaint.text, WinPaint.lastX, WinPaint.lastY);

    var m = WinPaint.overlayContext.measureText(WinPaint.text);
    var width = m.width;
    if (WinPaint.fontIsUnderline) {
        WinPaint.overlayContext.lineWidth = 1;
        WinPaint.overlayContext.strokeStyle = WinPaint.fillColor;
        WinPaint.overlayContext.beginPath();
        WinPaint.overlayContext.moveTo(WinPaint.lastX, WinPaint.lastY);
        WinPaint.overlayContext.lineTo(WinPaint.lastX + width, WinPaint.lastY);
        WinPaint.overlayContext.closePath();
        WinPaint.overlayContext.stroke();
    }
};

WinPaint._updateBrush = function() {
    WinPaint.context.lineWidth = WinPaint.size * WinPaint.zoomLevel;
    WinPaint.context.strokeStyle = WinPaint.fillColor;

    WinPaint.context.save();
    WinPaint.context.translate(WinPaint.viewportX, WinPaint.viewportY);
    WinPaint.context.scale(1 / WinPaint.zoomLevel, 1 / WinPaint.zoomLevel);

    // each of the bristles will paint an individual line, which altogether form a brushstroke
    for (var i = 0; i < WinPaint.brushBristles.length; i++) {
      var dx = WinPaint.brushBristles[i].dx;
      var dy = WinPaint.brushBristles[i].dy;

      // start from the latest bristle position
      // (restoring the bristle context)
      WinPaint.context.beginPath();
      WinPaint.context.moveTo(dx, dy);

      // updates A based on attenuated movement direction and the bristle's random factor
      var deltaX = dx - WinPaint.lastX;
      var deltaY = dy - WinPaint.lastY;
      WinPaint.brushBristles[i].ax += WinPaint.brushBristles[i].div * deltaX;
      WinPaint.brushBristles[i].ay += WinPaint.brushBristles[i].div * deltaY;
      WinPaint.brushBristles[i].ax *= WinPaint.brushBristles[i].ease
      WinPaint.brushBristles[i].ay *= WinPaint.brushBristles[i].ease

      // determines the new bristle position
      WinPaint.brushBristles[i].dx -= WinPaint.brushBristles[i].ax;
      WinPaint.brushBristles[i].dy -= WinPaint.brushBristles[i].ay;

      // draw the current bristle's stroke, by stroking a line
      // between the previous bristle pos and the update bristle pos
      WinPaint.context.lineTo(WinPaint.brushBristles[i].dx, WinPaint.brushBristles[i].dy);
      WinPaint.context.stroke();
    }

    WinPaint.context.restore();
};

WinPaint._dragover = function(event) {
    event.stopPropagation();
    event.preventDefault();

    var files = event.originalEvent.dataTransfer.files; // FileList object.

    // in case dragover does not contain files (FF)
    if(!files) {
        // display the drag zone
        $('#drop-zone').removeClass("hidden");
        WinPaint.dropZoneVisible = true;
        return;
    }

    // Display drop zone (only for image files)
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }

        // display the drag zone
        $('#drop-zone').removeClass("hidden");
        WinPaint.dropZoneVisible = true;
    }
};

WinPaint._dragleave = function(event) {
    if (!WinPaint.dropZoneVisible) return;

    // hide the drag zone
    $('#drop-zone').addClass("hidden");
    WinPaint.dropZoneVisible = false;
};

WinPaint._drop = function(event) {
    WinPaint._commit();

    if (WinPaint.dropZoneVisible) {
        $('#drop-zone').addClass("hidden");
        WinPaint.dropZoneVisible = false;
    }

    event.stopPropagation();
    event.preventDefault();

    WinPaint.lastX = event.originalEvent.clientX - $(WinPaint.canvas).offset().left;
    WinPaint.lastY = event.originalEvent.clientY - $(WinPaint.canvas).offset().top;

    var files = event.originalEvent.dataTransfer.files; // FileList object.

    for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = WinPaint._onLoadImage;

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
};

WinPaint._change = function(event) {
    WinPaint._commit();

    var files = event.originalEvent.target.files; // FileList object.

    // inserts the image at the center
    WinPaint.lastX = WinPaint.centerX != null ? WinPaint.centerX : 0;
    WinPaint.lastY = WinPaint.centerY != null ? WinPaint.centerY : 0;

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = WinPaint._onLoadImage;

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

WinPaint._keyup = function(event) {
    if(!WinPaint.visible) { return true; }

    event.preventDefault();
    return false;
};

/**
 * Adapts the jQuery event to the onKeyPress handler.
 */
WinPaint._keypress = function(event) {
    if(!WinPaint.visible) { return true; }

    event.preventDefault();

    WinPaint._onKeyPress(event.keyCode, event.charCode);

    // prevents the default behavior
    return false;
};

/**
 * Adapts the jQuery keydown event to the onKeyPress handler,
 * for the backspace key.
 */
WinPaint._keydown = function(event) {
    if(!WinPaint.visible) { return true; }

    event.preventDefault();

    // backspace
    if(event.keyCode == 8) {
        WinPaint._onKeyPress(event.keyCode, event.charCode);

        // prevents the default behavior (back shortcut in many browsers)
        return false;

    } else if (event.keyCode >= 37 && event.keyCode <= 40) {
        // sends the directional keys
        WinPaint._onKeyPress(event.keyCode, event.charCode);
    }
};

WinPaint._onKeyPress = function(keyCode, charCode) {
    if (WinPaint.tool == 'text') {
        if (keyCode == 8) {
            if (WinPaint.text.length > 0) {
                WinPaint.text = WinPaint.text.substring(0, WinPaint.text.length - 1);
            }

        } else if (keyCode == 32) {
            WinPaint.text += ' ';

        } else if (charCode && charCode == keyCode) {
            WinPaint.text += String.fromCharCode(charCode);
        }

        WinPaint._updateText();

        // Draw cursor
        var m = WinPaint.overlayContext.measureText(WinPaint.text);
        var width = m.width;
        WinPaint.overlayContext.strokeStyle = '#000000';
        WinPaint.overlayContext.lineWidth = 2;
        WinPaint.overlayContext.beginPath();
        WinPaint.overlayContext.moveTo(WinPaint.lastX + width, WinPaint.lastY);
        WinPaint.overlayContext.lineTo(WinPaint.lastX + width, WinPaint.lastY - WinPaint.fontSize);
        WinPaint.overlayContext.closePath();
        WinPaint.overlayContext.stroke();

    } else if (WinPaint.tool == 'move') {
        if (keyCode == 8) {
            WinPaint.cmdCut();
        }

    } else {
        if (keyCode == 37) {
            // left
            WinPaint.viewportX -= (WinPaint.viewportWidth / WinPaint.zoomLevel) / 4;
            WinPaint.viewportX = Math.max(WinPaint.viewportX, 0);
            WinPaint.updateViewport();

        } else if (keyCode == 38) {
            // up
            WinPaint.viewportY -= (WinPaint.viewportHeight / WinPaint.zoomLevel) / 4;
            WinPaint.viewportY = Math.max(WinPaint.viewportY, 0);
            WinPaint.updateViewport();

        } else if (keyCode == 39) {
            // right
            WinPaint.viewportX += (WinPaint.viewportWidth / WinPaint.zoomLevel) / 3;
            // @TODO: needs upper bounds
            WinPaint.updateViewport();

        } else if (keyCode == 40) {
            // down
            WinPaint.viewportY += (WinPaint.viewportHeight / WinPaint.zoomLevel) / 3;
            // @TODO: needs upper bounds
            WinPaint.updateViewport();

        }

    }
};

/**
 * Handler for the FileReader onload event.
 */
WinPaint._onLoadImage = function(e) {
    // sets the image source with the file's contents
    var importImage = $('#import-image');
    importImage.attr('src', '');
    importImage.attr('src', e.target.result);

    // when the image loads, draws it in the main canvas
    importImage.load(function() {
        var image = importImage[0];

        WinPaint.dirty = true;

        WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
        WinPaint.selectionX = WinPaint.lastX - (image.width / 2);
        WinPaint.selectionY = WinPaint.lastY - (image.height / 2);
        // scales the image to the canvas size
        WinPaint.selectionWidth = Math.min(image.width, WinPaint.canvas.width);
        WinPaint.selectionHeight = Math.min(image.height, WinPaint.canvas.height);

        // uses integers when taking a slice from the canvas into the selection, to
        // prevent anti-aliasing
        WinPaint.selectionContext.drawImage(image, 0, 0);
        WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);

        WinPaint.drawSelectionOutline();

        WinPaint.tool = 'move';
    });
};

/**
 * Get the bounds of the image based on what was drawn on the whole canvas.
 */
WinPaint.findBounds = function() {
    return WinPaint.findBoxBounds(WinPaint.context, 0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
};

/**
 * Get the bounds of the image based on what was drawn on a part of canvas.
 */
WinPaint.findBoxBounds = function(context, x, y, width, height) {
    var imageData = context.getImageData(x, y, width, height).data;

    var bounds = {top:y + height, left:x + width, bottom:y, right:x};
    var idx = 0;
    // scans the two dimensional image for pixels
    for (var currY=y; currY<y + height; currY++) {
        for (var currX=x; currX<x + width; currX++) {
            // If there is an alpha, treat pixel as visible
            if (imageData[idx+3]) {
                if (currX < bounds.left) {
                    bounds.left = currX;
                }
                if (currX > bounds.right) {
                    bounds.right = currX;
                }
                if (currY < bounds.top) {
                    bounds.top = currY;
                }
                if (currY > bounds.bottom) {
                    bounds.bottom = currY;
                }
            }
            idx += 4;
        }
    }

    return bounds;
};

/**
 * Checks if the move specified between the provided point (x, y) and the last recorded point (lastX, lastY) is
 * sufficiently wide not to be discarded.
 * Some actions need a minimum move amplitude to be consider valid moves, these function performs the check.
 */
WinPaint.checkDiscardableMove = function(x, y) {
    var moveSize = Math.sqrt(Math.pow(x - WinPaint.lastX, 2) + Math.pow(y - WinPaint.lastY, 2));

    WinPaint.isDiscardableMove = WinPaint.isDiscardableMove && moveSize <= WinPaint.discardMoveTolerance;
};

WinPaint._commit = function() {
    if (WinPaint.tool == 'text') {
        if (WinPaint.text) {
            WinPaint.overlayContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);

            var font = WinPaint.fontSize + 'px ' + WinPaint.fontFamily;
            if (WinPaint.fontIsBold) {
                font = 'bold ' + font;
            }
            if (WinPaint.fontIsItalic) {
                font = 'italic ' + font;
            }
            WinPaint.context.font = font;
            WinPaint.context.lineWidth = 2;
            WinPaint.context.strokeStyle = WinPaint.strokeColor;
            WinPaint.context.fillStyle = WinPaint.fillColor;
            WinPaint.context.textAlign = 'left';
            WinPaint.context.textBaseline = 'bottom';
            WinPaint.context.fillText(WinPaint.text, WinPaint.lastX, WinPaint.lastY);
            WinPaint.context.strokeText(WinPaint.text, WinPaint.lastX, WinPaint.lastY);

            var m = WinPaint.overlayContext.measureText(WinPaint.text);
            var width = m.width;
            if (WinPaint.fontIsUnderline) {
                WinPaint.context.lineWidth = 1;
                WinPaint.context.strokeStyle = WinPaint.fillColor;
                WinPaint.context.beginPath();
                WinPaint.context.moveTo(WinPaint.lastX, WinPaint.lastY);
                WinPaint.context.lineTo(WinPaint.lastX + width, WinPaint.lastY);
                WinPaint.context.closePath();
                WinPaint.context.stroke();
            }

            WinPaint.text = '';

            WinPaint.addUndo();

        } else {
            WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
        }

    } else if (WinPaint.tool == 'move') {
        // computes the selection box dimensions in canvas coordinates (100%)
        var canvasSelectionX = Math.round(WinPaint.selectionX / WinPaint.zoomLevel + WinPaint.viewportX);
        var canvasSelectionY = Math.round(WinPaint.selectionY / WinPaint.zoomLevel + WinPaint.viewportY);
        var canvasSelectionWidth = WinPaint.selectionWidth / WinPaint.zoomLevel;
        var canvasSelectionHeight = WinPaint.selectionHeight / WinPaint.zoomLevel;

        // copies from selection to canvas
        WinPaint.context.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, canvasSelectionX, canvasSelectionY, canvasSelectionWidth, canvasSelectionHeight);

        WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
        WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

        WinPaint.addUndo();

        // in case this a shape move, switches back to the shape tool
        if (WinPaint.toolType == 'move-line') {
            WinPaint.tool = 'line';

        } else if (WinPaint.toolType == 'move-rectangle') {
            WinPaint.tool = 'rectangle';

        } else if (WinPaint.toolType == 'move-ellipse') {
            WinPaint.tool = 'ellipse';

        } else {
            WinPaint.tool = 'selection';
        }

    } else if (WinPaint.tool == 'stamp') {
        WinPaint.tool = 'stamp-selection';

    } else {
        WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
    }

    // resets the discardable move flag
    WinPaint.isDiscardableMove = true;

    WinPaint.updateViewport();
};

WinPaint._clearToolSelection = function() {
    $('#win-paint .text').addClass('hidden');
    $('#win-paint .pencil').addClass('hidden');
    $('#win-paint .brush').addClass('hidden');
    $('#win-paint .pen').addClass('hidden');
    $('#win-paint .colorpicker').addClass('hidden');
    $('#win-paint .fillcolor').addClass('hidden');
    $('#win-paint .strokecolor').addClass('hidden');
    $('#win-paint .copy').addClass('hidden');
    $('#win-paint .stamp').addClass('hidden');
    $('#win-paint .zoom').addClass('hidden');

    $('#win-paint .menu').addClass('hidden');

    $('#win-paint .paint-tools').removeClass('selected');

    WinPaint.clearCenter();
}

WinPaint._showColorPicker = function() {
    $('#win-paint .colorpicker').removeClass('hidden');
    $('#win-paint .fillcolor').removeClass('hidden');
    $('#win-paint .strokecolor').removeClass('hidden');

    WinPaint.cmdChooseFillColor();
};

WinPaint._showFillColorPicker = function() {
    $('#win-paint .colorpicker').removeClass('hidden');
    $('#win-paint .fillcolor').removeClass('hidden');

    WinPaint.cmdChooseFillColor();
};

WinPaint.cmdEditMenu = function() {
    $('#win-paint .menu').not($(this).next()).addClass('hidden');
    $(this).next().toggleClass('hidden')
        .css('left', $(this).position().left)
        .css('top', $(this).position().top + $(this).outerHeight());

    if ($(this).next().hasClass('hidden')) {
        /* LOGGING */ _log('paint', 'hide edit menu');
    } else {
        /* LOGGING */ _log('paint', 'show edit menu');
    }
    return false;
};

WinPaint.cmdSelectEditMenuOption = function() {
    $('#win-paint .menu').addClass('hidden');

    var option = $(this).attr("data-option");

    switch (option) {
        case "import_image":
            $('#import-image-file').click();
            break;
        case "clear_canvas":
            WinPaint.clearCanvas();
            break;
        case "flip_canvas_horizontal":
            WinPaint.flipCanvasHorizontally();
            break;
        case "flip_canvas_vertical":
            WinPaint.flipCanvasVertically();
            break;
        case "toggle_center":
            WinPaint.toggleCenter();
            break;
        case "toggle_grid":
            WinPaint.toggleGrid();
            break;
    }

    /* LOGGING */ _log('paint', 'choose edit menu option', option);
    return false;
};

WinPaint.cmdSelectZoomOption = function() {
    WinPaint._commit();

    var option = $(this).attr("data-option");

    switch(option) {
        case 'zoom_out':
            WinPaint.zoomOut();
            break;
        case 'zoom_in':
            WinPaint.zoomIn();
            break;
    }
};

WinPaint.cmdChooseFontFamily = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).next().toggleClass('hidden')
        .css('left', $(this).position().left)
        .css('top', $(this).position().top + $(this).outerHeight());

    if ($(this).next().hasClass('hidden')) {
        /* LOGGING */ _log('paint', 'hide font family');
    } else {
        /* LOGGING */ _log('paint', 'show font family');
    }
    return false;
};

WinPaint.cmdSelectFontFamily = function() {
    $('#win-paint .menu').addClass('hidden');
    WinPaint.fontFamily = $(this).text();
    $('#win-paint .font-family span').text(WinPaint.fontFamily);
    WinPaint._updateText();

    /* LOGGING */ _log('paint', 'choose font family', WinPaint.fontFamily);
    return false;
};

WinPaint.cmdChooseFontSize = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).next().toggleClass('hidden')
        .css('left', $(this).position().left)
        .css('top', $(this).position().top + $(this).outerHeight());

    if ($(this).next().hasClass('hidden')) {
        /* LOGGING */ _log('paint', 'hide font size');
    } else {
        /* LOGGING */ _log('paint', 'show font size');
    }
    return false;
};

WinPaint.cmdSelectFontSize = function() {
    $('#win-paint .menu').addClass('hidden');
    WinPaint.fontSize = parseInt($(this).text());
    $('#win-paint .font-size span').text(WinPaint.fontSize);
    WinPaint._updateText();

    /* LOGGING */ _log('paint', 'choose font size', WinPaint.fontSize);
    return false;
};

WinPaint.cmdToggleBold = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).toggleClass('selected');
    WinPaint.fontIsBold = $(this).hasClass('selected');
    WinPaint._updateText();

    if ($(this).hasClass('selected')) {
        /* LOGGING */ _log('paint', 'bold on');
    } else {
        /* LOGGING */ _log('paint', 'bold off');
    }
    return false;
};

WinPaint.cmdToggleItalic = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).toggleClass('selected');
    WinPaint.fontIsItalic = $(this).hasClass('selected');
    WinPaint._updateText();

    if ($(this).hasClass('selected')) {
        /* LOGGING */ _log('paint', 'italic on');
    } else {
        /* LOGGING */ _log('paint', 'italic off');
    }
    return false;
};

WinPaint.cmdToggleUnderline = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).toggleClass('selected');
    WinPaint.fontIsUnderline = $(this).hasClass('selected');
    WinPaint._updateText();

    if ($(this).hasClass('selected')) {
        /* LOGGING */ _log('paint', 'underline on');
    } else {
        /* LOGGING */ _log('paint', 'underline off');
    }
    return false;
};

WinPaint.cmdChoosePencilSize = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).next().toggleClass('hidden')
        .css('left', $(this).position().left)
        .css('top', $(this).position().top + $(this).outerHeight());

    if ($(this).next().hasClass('hidden')) {
        /* LOGGING */ _log('paint', 'hide pencil size');
    } else {
        /* LOGGING */ _log('paint', 'show pencil size');
    }
    return false;
};

WinPaint.cmdChooseBrushSize = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).next().toggleClass('hidden')
        .css('left', $(this).position().left)
        .css('top', $(this).position().top + $(this).outerHeight());

    if ($(this).next().hasClass('hidden')) {
        /* LOGGING */ _log('paint', 'hide brush size');
    } else {
        /* LOGGING */ _log('paint', 'show brush size');
    }
    return false;
};

WinPaint.cmdChoosePredefinedPencilSize = function() {
    $('#win-paint .menu').addClass('hidden');
    WinPaint.toolType = $(this).attr('type');
    WinPaint.size = parseInt($(this).attr('radius'));

    $('#win-paint .pencilsize div img').addClass("hidden");
    $('#win-paint .pencilsize div span').css('border-radius', Math.floor(WinPaint.size/2))
        .css('width', WinPaint.size)
        .css('height', WinPaint.size);
    $('#win-paint .pencilsize div span').removeClass("hidden");

    $('#win-paint .pencil .showsize div').addClass('oval');
    $('#win-paint .pencil .showsize div').css('border-radius', Math.floor(WinPaint.size/2))
        .css('width', WinPaint.size)
        .css('height', WinPaint.size);
    $('#win-paint .pencil .showsize div img').addClass("hidden");

    /* LOGGING */ _log('paint', 'predefined pencil size', WinPaint.size);
    return false;
};

WinPaint.cmdChoosePredefinedBrushSize = function() {
    $('#win-paint .menu').addClass('hidden');
    WinPaint.toolType = $(this).attr('type');
    WinPaint.size = parseInt($(this).attr('radius'));

    $('#win-paint .brushsize div img').addClass("hidden");
    $('#win-paint .brushsize div span').css('border-radius', Math.floor(WinPaint.size/2))
        .css('width', WinPaint.size)
        .css('height', WinPaint.size);
    $('#win-paint .brushsize div span').removeClass("hidden");

    $('#win-paint .brush .showsize div').addClass('oval');
    $('#win-paint .brush .showsize div').css('border-radius', Math.floor(WinPaint.size/2))
        .css('width', WinPaint.size)
        .css('height', WinPaint.size);
    $('#win-paint .brush .showsize div img').addClass("hidden");

    /* LOGGING */ _log('paint', 'predefined brush size', WinPaint.size);
    return false;
};

WinPaint.cmdChoosePredefinedBrush = function() {
    $('#win-paint .menu').addClass('hidden');
    WinPaint.toolType = $(this).attr('type');
    WinPaint.marker.src = $('img', this).attr('src');
    
    $('#win-paint .brushsize div span').addClass("hidden");
    $('#win-paint .brushsize div img').attr('src', WinPaint.marker.src);
    $('#win-paint .brushsize div img').removeClass("hidden");

    $('#win-paint .showsize div img').attr('src', WinPaint.marker.src);
    $('#win-paint .showsize div').removeClass('oval');
    $('#win-paint .showsize div img').removeClass("hidden");

    /* LOGGING */ _log('paint', 'predefined brush', WinPaint.marker.src);
    return false;
};

WinPaint.cmdChoosePenSize = function() {
    $('#win-paint .menu').addClass('hidden');
    $(this).next().toggleClass('hidden')
        .css('left', $(this).position().left)
        .css('top', $(this).position().top + $(this).outerHeight());

    if ($(this).next().hasClass('hidden')) {
        /* LOGGING */ _log('paint', 'hide pen size');
    } else {
        /* LOGGING */ _log('paint', 'show pen size');
    }
    return false;
};

WinPaint.cmdChoosePredefinedPenSize = function() {
    $('#win-paint .menu').addClass('hidden');
    WinPaint.toolType = $(this).attr('type');
    WinPaint.size = parseInt($(this).attr('size'));
    $('#win-paint .pensize span').css('width', WinPaint.size * WinPaint.size).css('height', WinPaint.size * WinPaint.size);

    /* LOGGING */ _log('paint', 'predefined pen size', WinPaint.size);
    return false;
};

WinPaint.cmdChooseFillColor = function() {
    $('#win-paint .menu').addClass('hidden');
    $('#win-paint .fillcolor').addClass('selected');
    $('#win-paint .strokecolor').removeClass('selected');
    WinPaint.selectedColor = 'fill';

    /* LOGGING */ _log('paint', 'fill color');
};

WinPaint.cmdChooseStrokeColor = function() {
    $('#win-paint .menu').addClass('hidden');
    $('#win-paint .fillcolor').removeClass('selected');
    $('#win-paint .strokecolor').addClass('selected');
    WinPaint.selectedColor = 'stroke';

    /* LOGGING */ _log('paint', 'stroke color');
};

WinPaint.cmdChoosePredefinedColor = function() {
    $('#win-paint .menu').addClass('hidden');
    $('#win-paint .tool-eyedropper').removeClass('selected');
    var color = $(this).css('background-color');
    if (!color) {
        color = 'none';
    }
    if (WinPaint.selectedColor == 'fill') {
        $('#win-paint .fillcolor > div').css('background-color', color);
        WinPaint.fillColor = color;

        /* LOGGING */ _log('paint', 'predefined fill color', color);

    } else if (WinPaint.selectedColor == 'stroke') {
        $('#win-paint .strokecolor > div').css('border', '4px solid ' + color);
        WinPaint.strokeColor = color;

        /* LOGGING */ _log('paint', 'predefined stroke color', color);
    }

    // updates the text preview on color change
    if (WinPaint.tool == 'text') { WinPaint._updateText(); }

    return false;
};

WinPaint.cmdChooseColor = function() {
    $('#win-paint .menu').addClass('hidden');
    $('#win-paint .tool-eyedropper').removeClass('selected');
    var tool = $('#win-paint .tool-color');
    ColorPicker.show(tool.offset().left, tool.offset().top, 0, function(color) {
        if (WinPaint.selectedColor == 'fill') {
            $('#win-paint .fillcolor > div').css('background-color', color);
            WinPaint.fillColor = color;

            /* LOGGING */ _log('paint', 'choose fill color', color);

        } else if (WinPaint.selectedColor == 'stroke') {
            $('#win-paint .strokecolor > div').css('border', '4px solid ' + color);
            WinPaint.strokeColor = color;

            /* LOGGING */ _log('paint', 'choose stroke color', color);
        }
    });

    return false;
};

WinPaint.cmdToolColor = function() {
    $('#win-paint .menu').addClass('hidden');
    $('#win-paint .tool-eyedropper').addClass('selected');

    WinPaint.lastTool = WinPaint.tool;
    WinPaint.tool = 'colorpicker';

    /* LOGGING */ _log('paint', 'color picker');

    return false;
};

WinPaint.cmdChooseSelectionType = function() {
    WinPaint._commit();
    if (WinPaint.tool == 'move') {
        WinPaint.tool = 'selection';
    } else if (WinPaint.tool == 'stamp') {
        WinPaint.tool = 'stamp-selection';
    }
    WinPaint.toolType = $(this).attr('data-tool_type');

    /* LOGGING */ _log('paint', 'choose selection type ' + WinPaint.toolType);

    return false;
};

WinPaint.cmdCut = function() {
    WinPaint.tool = 'cut';
    WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    WinPaint.addUndo();

    /* LOGGING */ _log('paint', 'cut');
    return false;
};

WinPaint.cmdCopy = function() {
    WinPaint.tool = 'copy';
//    WinPaint.context.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
//    WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
//    WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    /* LOGGING */ _log('paint', 'copy');
    return false;
};

WinPaint.cmdPaste = function() {
    if (WinPaint.tool == 'move') {
        WinPaint.context.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);

    } else {
        WinPaint.tool = 'move';
        WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
    }
//    WinPaint.context.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
//    WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
//    WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    WinPaint.addUndo();

    /* LOGGING */ _log('paint', 'paste');
    return false;
};

WinPaint.cmdFlipHorizontally = function() {
    // copy selection to buffer
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
    WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);

    // flip selection using buffer
    WinPaint.selectionContext.clearRect(0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);
    WinPaint.selectionContext.save();
    WinPaint.selectionContext.scale(-1, 1);
    WinPaint.selectionContext.drawImage(WinPaint.buffer, -WinPaint.selectionWidth, 0);
    WinPaint.selectionContext.restore();

    // draw selection to overlay (for user feedback)
    WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
    WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
    WinPaint.drawSelectionOutline();

    // sets move tool, for the final commit to flush from selection to canvas
    WinPaint.tool = 'move';

    // clean up
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
};

WinPaint.cmdFlipVertically = function() {
    // copy selection to buffer
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
    WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);

    // flip selection using buffer
    WinPaint.selectionContext.clearRect(0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);
    WinPaint.selectionContext.save();
    WinPaint.selectionContext.scale(1, -1);
    WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, -WinPaint.selectionHeight);
    WinPaint.selectionContext.restore();

    // draw selection to overlay (for user feedback)
    WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
    WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
    WinPaint.drawSelectionOutline();

    // sets move tool, for the final commit to flush from selection to canvas
    WinPaint.tool = 'move';

    // clean up
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
};

WinPaint.cmdGrow = function() {
    WinPaint.scaleSelection(WinPaint.growFactor, WinPaint.growFactor);

    // sets move tool, for the final commit to flush from selection to canvas
    WinPaint.tool = 'move';
};

WinPaint.cmdShrink = function() {
    WinPaint.scaleSelection(WinPaint.shrinkFactor, WinPaint.shrinkFactor);

    // sets move tool, for the final commit to flush from selection to canvas
    WinPaint.tool = 'move';
};

WinPaint.cmdChooseZoomType = function() {
    WinPaint._commit();

    WinPaint.toolType = $(this).attr('data-tool_type');

    // Zoom out button not only selects zoom type, but also performs an instant zoom out
    if(WinPaint.toolType == 'zoom-out') {
        WinPaint.zoomOut();
    }

    $('#win-paint .zoom ul li.zoom-type').removeClass('selected');
    $('#win-paint .zoom ul li.zoom-type.' + WinPaint.toolType).addClass('selected');
};

WinPaint.cmdToolPencil = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showFillColorPicker();

    $('#win-paint .tool-options .label').text('Pencil');
    $('#win-paint .pencil').removeClass('hidden');
    $('#win-paint .tool-pencil').addClass('selected');

    WinPaint.tool = 'pencil';

    /* LOGGING */ _log('paint', 'pencil');
    return false;
};

WinPaint.cmdToolBrush = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showFillColorPicker();

    $('#win-paint .tool-options .label').text('Paint Brush');
    $('#win-paint .brush').removeClass('hidden');
    $('#win-paint .tool-brush').addClass('selected');

    WinPaint.tool = 'brush';
    WinPaint.toolType = 'oval';

    /* LOGGING */ _log('paint', 'brush');
    return false;
};

WinPaint.cmdToolPen = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showFillColorPicker();

    $('#win-paint .tool-options .label').text('Pen');
    $('#win-paint .pen').removeClass('hidden');
    $('#win-paint .tool-pen').addClass('selected');

    WinPaint.tool = 'pen';

    /* LOGGING */ _log('paint', 'pen');
    return false;
};

WinPaint.cmdToolEraser = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();

    $('#win-paint .tool-options .label').text('Eraser');
    $('#win-paint .tool-eraser').addClass('selected');
    $('#win-paint .pencil').removeClass('hidden');

    WinPaint.tool = 'eraser';

    /* LOGGING */ _log('paint', 'eraser');
    return false;
};

WinPaint.cmdToolFill = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showFillColorPicker();

    $('#win-paint .tool-options .label').text('Paint Bucket');
    $('#win-paint .tool-fill').addClass('selected');

    WinPaint.tool = 'fill';

    /* LOGGING */ _log('paint', 'fill');
    return false;
};

WinPaint.cmdToolRectangle = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showColorPicker();

    $('#win-paint .tool-options .label').text('Box Tool');
    $('#win-paint .brush').removeClass('hidden');
    $('#win-paint .tool-rectangle').addClass('selected');

    WinPaint.tool = 'rectangle';

    /* LOGGING */ _log('paint', 'rectangle');
    return false;
};

WinPaint.cmdToolEllipse = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showColorPicker();

    $('#win-paint .tool-options .label').text('Ellipse Tool');
    $('#win-paint .brush').removeClass('hidden');
    $('#win-paint .tool-ellipse').addClass('selected');

    WinPaint.tool = 'ellipse';

    /* LOGGING */ _log('paint', 'ellipse');
    return false;
};

WinPaint.cmdToolLine = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showFillColorPicker();

    $('#win-paint .tool-options .label').text('Line Tool');
    $('#win-paint .brush').removeClass('hidden');
    $('#win-paint .tool-line').addClass('selected');

    WinPaint.tool = 'line';

    /* LOGGING */ _log('paint', 'line');
    return false;
};

WinPaint.cmdToolText = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();
    WinPaint._showColorPicker();

    $('#win-paint .tool-options .label').text('Text');
    $('#win-paint .text').removeClass('hidden');
    $('#win-paint .tool-text').addClass('selected');

    WinPaint.tool = 'text';

    /* LOGGING */ _log('paint', 'text');
    return false;
};

WinPaint.cmdToolSelection = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();

    $('#win-paint .tool-options .label').text('Selection Tool');
    $('#win-paint .copy').removeClass('hidden');
    $('#win-paint .tool-selection').addClass('selected');

    WinPaint.tool = 'selection';
    WinPaint.toolType = 'rectangle';

    /* LOGGING */ _log('paint', 'select');
    return false;
};

WinPaint.cmdToolStamp = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();

    $('#win-paint .tool-options .label').text('Stamping Tool');
    $('#win-paint .stamp').removeClass('hidden');
    $('#win-paint .tool-stamp').addClass('selected');

    WinPaint.tool = 'stamp-selection';
    WinPaint.toolType = 'rectangle';

    /* LOGGING */ _log('paint', 'select');
    return false;
};

WinPaint.cmdToolZoom = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();

    $('#win-paint .tool-options .label').text('Zoom');
    $('#win-paint .zoom').removeClass('hidden');
    $('#win-paint .tool-zoom').addClass('selected');
    $('#win-paint .zoom ul li.zoom-type').removeClass('selected');

    WinPaint.tool = 'zoom';
    WinPaint.toolType = 'zoom-in';

    // selects the current zoom type
    $('#win-paint .zoom ul li.zoom-type.' + WinPaint.toolType).addClass('selected');

    /* LOGGING */ _log('paint', 'zoom');
    return false;
};

WinPaint.cmdToolCenter = function() {
    WinPaint._commit();
    WinPaint._clearToolSelection();

    $('#win-paint .tool-options .label').text('Choose Actor Center');
    $('#win-paint .tool-center').addClass('selected');

    WinPaint.tool = 'center';

    // Draw the crosshair at the center
    WinPaint.drawCenter();

    /* LOGGING */ _log('paint', 'center');
    return false;
};

/**
 * Clear the undo stack
 */
WinPaint.undoClear = function() {
    WinPaint.undoStack = [];
    WinPaint.redoIndex = 0;
};

/**
 * Add operation that can be undone.
 */
WinPaint.addUndo = function() {
    // Wipe out redo from stack index onwards
    if (WinPaint.undoStack.length > 0 && WinPaint.redoIndex < WinPaint.undoStack.length) {
        WinPaint.undoStack.splice(WinPaint.redoIndex, WinPaint.undoStack.length - WinPaint.redoIndex);
    }

    // Add to end of stack
    var img = new Image();
    try {
        img.src = WinPaint.canvas.toDataURL();
    } catch (exception) {
        if(exception.name == "SECURITY_ERR" && exception.code == 18) {
            // Avoid security exceptions from being thrown, due to canvas being tainted by cross-origin data
            // e.g. when wet brush sprite is written to canvas while using file://
            return;
        }
    }

    WinPaint.undoStack.push(img);

    // Limit undo steps to avoid out of memory
    if (WinPaint.undoStack.length > WinPaint.undoLimit) {
        WinPaint.undoStack.splice(0, 1);

    } else {
        // Redo index is one ahead of undo index
        WinPaint.redoIndex++;
    }
};

/**
 * Perform an undo operation.
 */
WinPaint.cmdUndo = function() {
    WinPaint._commit();

    if (WinPaint.undoStack.length > 0 && WinPaint.redoIndex > 1) {
        // Get the command to undo (one lower on the stack than the redo index)
        var img = WinPaint.undoStack[WinPaint.redoIndex - 2];
        WinPaint.context.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
        WinPaint.context.drawImage(img, 0, 0);

        // Move the redo index back by one
        WinPaint.redoIndex--;
    }

    return false;
};

/**
 * Perform a redo operation.
 */
WinPaint.cmdRedo = function() {
    WinPaint._commit();

    if (WinPaint.undoStack.length > 0 && WinPaint.redoIndex < WinPaint.undoStack.length) {
        // Get the command to redo
        var img = WinPaint.undoStack[WinPaint.redoIndex];
        WinPaint.context.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
        WinPaint.context.drawImage(img, 0, 0);

        // Move the redo index up by one
        WinPaint.redoIndex++;
    }

    return false;
};

/**
 * Draw the crosshair at the center.
 */
WinPaint.drawCenter = function(strokeStyle) {
    // apply the default stroke style for the center crosshair
    strokeStyle = strokeStyle || '#000';

    if (WinPaint.centerX === undefined || WinPaint.centerX === null) {
        WinPaint.centerX = WinPaint.canvas.width / 2;
    }
    if (WinPaint.centerY === undefined || WinPaint.centerY === null) {
        WinPaint.centerY = WinPaint.canvas.height / 2;
    }

    WinPaint.centerContext.save();
    WinPaint.centerContext.scale(WinPaint.zoomLevel, WinPaint.zoomLevel);
    WinPaint.centerContext.translate(-WinPaint.viewportX, -WinPaint.viewportY);

    WinPaint.centerContext.lineWidth = 1 / WinPaint.zoomLevel;
    WinPaint.centerContext.strokeStyle = strokeStyle;
    WinPaint.centerContext.beginPath();
    WinPaint.centerContext.moveTo(WinPaint.centerX, 0);
    WinPaint.centerContext.lineTo(WinPaint.centerX, WinPaint.center.height);
    WinPaint.centerContext.stroke();
    WinPaint.centerContext.beginPath();
    WinPaint.centerContext.moveTo(0, WinPaint.centerY);
    WinPaint.centerContext.lineTo(WinPaint.center.width, WinPaint.centerY);
    WinPaint.centerContext.stroke();

    WinPaint.centerContext.restore();

    WinPaint.centerVisible = true;
    WinPaint.updateToggleCenterText();
};

/**
 * Clears the crosshair at the center point.
 */
WinPaint.clearCenter = function() {
    WinPaint.centerContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);

    WinPaint.centerVisible = false;
    WinPaint.updateToggleCenterText();

    // @TODO: instead of forcing redraw, avoid clear center calls from tool activation
    WinPaint.updateViewport();
};

/**
 * Draw the grid in the background.
 */
WinPaint.drawGrid = function() {
    $('#win-paint div.canvas').css('background-image', '');

    WinPaint.gridVisible = true;
    WinPaint.updateToggleGridText();
};

/**
 * Clears the grid in the background.
 */
WinPaint.clearGrid = function() {
    $('#win-paint div.canvas').css('background-image', 'none');

    WinPaint.gridVisible = false;
    WinPaint.updateToggleGridText();
};

/**
 * Draws the outline for the selection bounding box.
 */
WinPaint.drawSelectionOutline = function (showHandles) {
    showHandles = showHandles != null ? showHandles : true;

    WinPaint.overlayContext.save(); // saves the drawing styles

    WinPaint.overlayContext.lineWidth = 1;
    WinPaint.overlayContext.strokeStyle = '#333';
    WinPaint.overlayContext.fillStyle = '#fff';
    WinPaint.overlayContext.beginPath();

    // draw the bounding box
    //WinPaint.overlayContext.dashedLine(WinPaint.lastX, WinPaint.lastY, x, WinPaint.lastY, 5);
    //WinPaint.overlayContext.dashedLine(WinPaint.lastX, y, x, y, 5);
    //WinPaint.overlayContext.dashedLine(WinPaint.lastX, WinPaint.lastY, WinPaint.lastX, y, 5);
    //WinPaint.overlayContext.dashedLine(x, WinPaint.lastY, x, y, 5);
    WinPaint.overlayContext.strokeRect(WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);

    if(!showHandles) {
        WinPaint.overlayContext.restore(); // restores the drawing styles
        return;
    }
    // draw the rotation handle
    var leverHeight = 30;
    var selectionCenterX = WinPaint.selectionX + WinPaint.selectionWidth / 2;
    WinPaint.rotationLeverX = selectionCenterX - WinPaint.rotateLeverSize / 2;
    WinPaint.rotationLeverY = WinPaint.selectionY - leverHeight - WinPaint.rotateLeverSize / 2;
    WinPaint.overlayContext.moveTo(selectionCenterX, WinPaint.selectionY - leverHeight);
    WinPaint.overlayContext.lineTo(selectionCenterX, WinPaint.selectionY);
    WinPaint.overlayContext.stroke();
    WinPaint.overlayContext.closePath();

    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.rotationLeverX, WinPaint.rotationLeverY, WinPaint.rotateLeverSize, WinPaint.rotateLeverSize);
    WinPaint.overlayContext.fill();

    // draw the resize handles
    var halfResizeHandleSize = WinPaint.resizeHandleSize / 2;
    var halfWidth = WinPaint.selectionWidth / 2;
    var halfHeight = WinPaint.selectionHeight / 2;
    // nw corner
    WinPaint.overlayContext.stroke();
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX - halfResizeHandleSize, WinPaint.selectionY - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // ne corner
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX + WinPaint.selectionWidth - halfResizeHandleSize, WinPaint.selectionY - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // se corner
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX + WinPaint.selectionWidth - halfResizeHandleSize, WinPaint.selectionY + WinPaint.selectionHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // sw corner
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX - halfResizeHandleSize, WinPaint.selectionY + WinPaint.selectionHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // n edge
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX + halfWidth - halfResizeHandleSize, WinPaint.selectionY - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // e edge
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX + WinPaint.selectionWidth - halfResizeHandleSize, WinPaint.selectionY + halfHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // s edge
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX + halfWidth - halfResizeHandleSize, WinPaint.selectionY + WinPaint.selectionHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();
    // w edge
    WinPaint.overlayContext.beginPath();
    WinPaint.overlayContext.rect(WinPaint.selectionX - halfResizeHandleSize, WinPaint.selectionY + halfHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize);
    WinPaint.overlayContext.fill();
    WinPaint.overlayContext.stroke();

    WinPaint.overlayContext.restore(); // restores the drawing styles
};

/**
 * Updates the label for the toggle center option in the edit menu.
 */
WinPaint.updateToggleCenterText = function() {
    var toggleCenterText = !WinPaint.centerVisible ? 'Show Actor Center Point' : 'Hide Actor Center Point';
    $('#win-paint .edit .menu .toggle-center').text(toggleCenterText);
};

/**
 * Updates the label for the toggle grid option in the edit menu.
 */
WinPaint.updateToggleGridText = function() {
    var toggleGridText = !WinPaint.gridVisible ? 'Show Grid' : 'Hide Grid';
    $('#win-paint .edit .menu .toggle-grid').text(toggleGridText);
};

/**
 * Updates the viewport canvas, with the scene canvas' content with
 * the current viewport settings.
 */
WinPaint.updateViewport = function() {
    WinPaint.viewportContext.clearRect(0, 0, WinPaint.viewport.width, WinPaint.viewport.height);
    WinPaint.viewportContext.save();
    WinPaint.viewportContext.scale(WinPaint.zoomLevel, WinPaint.zoomLevel);
    WinPaint.viewportContext.translate(-WinPaint.viewportX, -WinPaint.viewportY);

    WinPaint.centerContext.clearRect(0, 0, WinPaint.center.width, WinPaint.center.height);
    WinPaint.centerContext.save();
    WinPaint.centerContext.scale(WinPaint.zoomLevel, WinPaint.zoomLevel);
    WinPaint.centerContext.translate(-WinPaint.viewportX, -WinPaint.viewportY);

    // draws the pixel grid
    if (WinPaint.zoomLevel >= 4) {
        WinPaint.centerContext.lineWidth = 1 / WinPaint.zoomLevel;
        WinPaint.centerContext.strokeStyle = '#aaa';
        WinPaint.centerContext.beginPath();
        for (var x = 0; x < WinPaint.center.width; x += 1) {
            WinPaint.centerContext.moveTo(x, 0);
            WinPaint.centerContext.lineTo(x, WinPaint.center.height);
        }
        for (var y = 0; y < WinPaint.center.height; y += 1) {
            WinPaint.centerContext.moveTo(0, y);
            WinPaint.centerContext.lineTo(WinPaint.center.width, y);
        }

        WinPaint.centerContext.stroke();
        WinPaint.clearGrid();
    } else {
        // @TODO: should consider the previous grid state
        WinPaint.drawGrid();
    }

    WinPaint.viewportContext.drawImage(WinPaint.canvas, 0, 0);
    WinPaint.viewportContext.restore();
    WinPaint.centerContext.restore();

    if (WinPaint.centerVisible) {
        WinPaint.drawCenter(WinPaint.centerStyle);
    }
};

/**
 * Clears the canvas.
 */
WinPaint.clearCanvas = function(addUndo) {
    addUndo = addUndo != null ? addUndo : true;

    WinPaint.mediaId = 0;
    WinPaint.dirty = false;
    WinPaint.context.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
    WinPaint.viewportContext.clearRect(0, 0, WinPaint.viewport.width, WinPaint.viewport.height);
    WinPaint.overlayContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
    WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
    WinPaint.centerContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    if (addUndo) {
        WinPaint.addUndo();
    }
};

/**
 * Flips the whole canvas horizontally.
 */
WinPaint.flipCanvasHorizontally = function() {
    WinPaint.selectionContext.drawImage(WinPaint.canvas, 0, 0);

    WinPaint.context.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    WinPaint.context.save();
    WinPaint.context.scale(-1, 1);
    WinPaint.context.drawImage(WinPaint.selection, -2 * WinPaint.centerX, 0);
    WinPaint.context.restore();

    WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    WinPaint.addUndo();
    WinPaint.updateViewport();
};

/**
 * Flips the whole canvas vertically.
 */
WinPaint.flipCanvasVertically = function() {
    WinPaint.selectionContext.drawImage(WinPaint.canvas, 0, 0);

    WinPaint.context.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    WinPaint.context.save();
    WinPaint.context.scale(1, -1);
    WinPaint.context.drawImage(WinPaint.selection, 0, -2 * WinPaint.centerY);
    WinPaint.context.restore();

    WinPaint.selectionContext.clearRect(0, 0, WinPaint.canvas.width, WinPaint.canvas.height);

    WinPaint.addUndo();
    WinPaint.updateViewport();
};

/**
 * Increases the zoom level, capped by the max zoom level.
 * Centers the viewport on the optional viewport position provided.
 * @param viewportX (optional) The new viewport x.
 * @param viewportY (optional) The new viewport y.
 */
WinPaint.zoomIn = function(viewportX, viewportY) {
    viewportX = viewportX != null ? viewportX : WinPaint.viewportX;
    viewportY = viewportY != null ? viewportY : WinPaint.viewportY;

    // commits any pending actions
    WinPaint._commit();

    WinPaint.viewportX = viewportX;
    WinPaint.viewportY = viewportY;

    WinPaint.zoomLevel *= 2;
    WinPaint.zoomLevel = Math.min(WinPaint.zoomLevel, WinPaint.maxZoomLevel); // applies the upper bound

    WinPaint.updateViewport();
    WinPaint.updateZoomLevelDisplay();
};

/**
 * Decreases the zoom level, capped by the min zoom level.
 * Centers the viewport on the optional viewport position provided.
 * @param viewportX (optional) The new viewport x.
 * @param viewportY (optional) The new viewport y.
 */
WinPaint.zoomOut = function(viewportX, viewportY) {
    viewportX = viewportX != null ? viewportX : WinPaint.viewportX;
    viewportY = viewportY != null ? viewportY : WinPaint.viewportY;

    // commits any pending actions
    WinPaint._commit();

    WinPaint.viewportX = viewportX;
    WinPaint.viewportY = viewportY;

    WinPaint.zoomLevel /= 2;
    WinPaint.zoomLevel = Math.max(WinPaint.zoomLevel, WinPaint.minZoomLevel); // applies the lower bound

    // reset viewport when the whole canvas fits inside the viewport
    if (WinPaint.editingWidth * WinPaint.zoomLevel <= WinPaint.viewportWidth &&
        WinPaint.editingHeight * WinPaint.zoomLevel <= WinPaint.viewportHeight ) {
        WinPaint.viewportX = 0;
        WinPaint.viewportY = 0;
    }

    WinPaint.updateViewport();
    WinPaint.updateZoomLevelDisplay();
};

WinPaint.updateZoomLevelDisplay = function() {
    // inactivates all indicators
    $('#win-paint .title-bar .title-zoom ul li.indicator').removeClass('active');

    // searches and activates the indicator for the current zoom level
    var found = false;
    $('#win-paint .title-bar .title-zoom ul li.indicator').each(function(){
        if (found) {
            return;
        }

        var value = parseFloat($(this).attr('data-value'));
        if(WinPaint.zoomLevel <= value) {
            $(this).addClass('active');
            found = true;
        }
    });
};

/**
 * Toggles the actor center point on and off.
 */
WinPaint.toggleCenter = function() {
    if (WinPaint.centerVisible) {
        WinPaint.clearCenter();
    }
    else {
        WinPaint.drawCenter();
    }
};

/**
 * Toggles the grid on and off.
 */
WinPaint.toggleGrid = function() {
    if (WinPaint.gridVisible) {
        WinPaint.clearGrid();
    }
    else {
        WinPaint.drawGrid();
    }
};

/**
 * Scales the selection by the provided x and y factors.
 * Manages updating the selection canvas as well as the overlay.
 */
WinPaint.scaleSelection = function(xScale, yScale) {
    var newWidth = WinPaint.selectionWidth * xScale;
    var newHeight = WinPaint.selectionHeight * yScale;

    // copy selection to buffer
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
    WinPaint.bufferContext.drawImage(WinPaint.selection, 0, 0);

    // grow selection using buffer
    WinPaint.selectionContext.clearRect(0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight);
    WinPaint.selectionContext.drawImage(WinPaint.buffer, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, 0, 0, newWidth, newHeight);

    WinPaint.selectionWidth = newWidth;
    WinPaint.selectionHeight = newHeight;

    // draw selection to overlay (for user feedback)
    WinPaint.overlayContext.clearRect(0, 0, WinPaint.overlay.width, WinPaint.overlay.height);
    WinPaint.overlayContext.drawImage(WinPaint.selection, 0, 0, WinPaint.selectionWidth, WinPaint.selectionHeight, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight);
    WinPaint.drawSelectionOutline();

    // clean up
    WinPaint.bufferContext.clearRect(0, 0, WinPaint.buffer.width, WinPaint.buffer.height);
};

WinPaint.getSelectionLocation = function(x, y) {
    var location;

    var halfResizeHandleSize = WinPaint.resizeHandleSize / 2;
    var halfWidth = WinPaint.selectionWidth / 2;
    var halfHeight = WinPaint.selectionHeight / 2;

    // If the rotation box was clicked, switches to rotation
    if (WinPaint.isContained(x, y, WinPaint.rotationLeverX, WinPaint.rotationLeverY, WinPaint.rotateLeverSize, WinPaint.rotateLeverSize)) {
       location = 'rotation_lever';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX - halfResizeHandleSize, WinPaint.selectionY - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'nw_corner';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX + WinPaint.selectionWidth - halfResizeHandleSize, WinPaint.selectionY - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'ne_corner';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX + WinPaint.selectionWidth - halfResizeHandleSize, WinPaint.selectionY + WinPaint.selectionHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'se_corner';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX - halfResizeHandleSize, WinPaint.selectionY + WinPaint.selectionHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'sw_corner';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX + halfWidth - halfResizeHandleSize, WinPaint.selectionY - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'n_edge';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX + WinPaint.selectionWidth - halfResizeHandleSize, WinPaint.selectionY + halfHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'e_edge';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX + halfWidth - halfResizeHandleSize, WinPaint.selectionY + WinPaint.selectionHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 's_edge';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX - halfResizeHandleSize, WinPaint.selectionY + halfHeight - halfResizeHandleSize, WinPaint.resizeHandleSize, WinPaint.resizeHandleSize)) {
        location = 'w_edge';

    } else if (WinPaint.isContained(x, y, WinPaint.selectionX, WinPaint.selectionY, WinPaint.selectionWidth, WinPaint.selectionHeight)) {
        location = 'inside';

    } else {
        location = 'outside';
    }

    return location;
};

/**
 * Checks whether (x, y) is contained in the specified box.
 */
WinPaint.isContained = function (x, y, boxX, boxY, boxWidth, boxHeight) {
    return x >= boxX && x <= boxX + boxWidth &&
        y >= boxY && y <= boxY + boxHeight;
};

/**
 * Retrieves the bounding box for the provided rectangle after rotation
 */
WinPaint.getRotationBoundingBox = function (context, left, top, w, h, angle) {
    var centerX = left + w / 2;
    var centerY = top + h / 2;

    var right = left + w;
    var bottom = top + h;

    var p1Xt = WinPaint.transformX(left, top, centerX, centerY, angle);
    var p1Yt = WinPaint.transformY(left, top, centerX, centerY, angle);

    var p2Xt = WinPaint.transformX(right, top, centerX, centerY, angle);
    var p2Yt = WinPaint.transformY(right, top, centerX, centerY, angle);

    var p3Xt = WinPaint.transformX(right, bottom, centerX, centerY, angle);
    var p3Yt = WinPaint.transformY(right, bottom, centerX, centerY, angle);

    var p4Xt = WinPaint.transformX(left, bottom, centerX, centerY, angle);
    var p4Yt = WinPaint.transformY(left, bottom, centerX, centerY, angle);

    var minX = Math.min.apply(Math, [p1Xt, p2Xt, p3Xt, p4Xt]);
    var maxX = Math.max.apply(Math, [p1Xt, p2Xt, p3Xt, p4Xt]);
    var minY = Math.min.apply(Math, [p1Yt, p2Yt, p3Yt, p4Yt]);
    var maxY = Math.max.apply(Math, [p1Yt, p2Yt, p3Yt, p4Yt]);

    var boxBounds = WinPaint.findBoxBounds(context, minX, minY, Math.abs(maxX - minX), Math.abs(maxY - minY));

    return boxBounds;
};

/**
 * Transforms the coordinated
 * @param x Coordinate's x to transform.
 * @param y Coordinate's y.
 * @param x0 Center of rotation's x.
 * @param y0 Center of rotation's y.
 * @param angle Angle of rotation.
 * @return {Number} The transformed x.
 */
WinPaint.transformX = function (x, y, x0, y0, angle) {
    return x0 + (x - x0) * Math.cos(angle) + (y - y0) * Math.sin(angle);
};

/**
 * Transforms the coordinated
 * @param x Coordinate's x.
 * @param y Coordinate's y to transform.
 * @param x0 Center of rotation's x.
 * @param y0 Center of rotation's y.
 * @param angle Angle of rotation.
 * @return {Number} The transformed y.
 */
WinPaint.transformY = function (x, y, x0, y0, angle) {
    return y0 - (x - x0) * Math.sin(angle) + (y - y0) * Math.cos(angle);
};

/**
 * Measures the distance between the two points.
 * @param point1 {Object} First point as a map with x and y keys
 * @param point2 {Object} Second point as a map with x and y keys.
 * @return {Number} The distance in pixels.
 */
WinPaint.distance = function (point1, point2) {
    var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    return Math.sqrt( Math.pow( dx, 2 ) + Math.pow( dy, 2 ) );
};

/**
 * Measures the angle between the two points.
 * @param point1 {Object} First point as a map with x and y keys
 * @param point2 {Object} Second point as a map with x and y keys.
 * @return {Number} The angle in radians.
 */
WinPaint.angle = function (point1, point2) {
    var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    return Math.atan2( dx, dy );
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Floodfill - Linear Floodfill with tolerance in plain Javascript.
 * 
 * Autor: Markus Ritberger
 * Modified: Kelvin Chong (2012-06-03)
 * Version: 1.0.1 (2012-04-16)
 *      
 * Examples at: http://demos.ritberger.at/floodfill
 * 
 * licensed under MIT license:
 * 
 * Copyright (c) 2012 Markus Ritberger
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
 * THE SOFTWARE.
 **/

WinPaint._matchTolerance = function(color, imageData, pixelPos) {
    var r = imageData.data[pixelPos];
    var g = imageData.data[pixelPos+1];	
    var b = imageData.data[pixelPos+2];
    var a = imageData.data[pixelPos+3];

    return (
        r >= color[0] && r <= color[4] &&
        g >= color[1] && g <= color[5] &&
        b >= color[2] && b <= color[6] &&
        a >= color[3] && a <= color[7]
    ) && !(
        r == color[8] &&
        g == color[9] &&
        b == color[10] &&
        a == 255
    );
};

WinPaint.floodFill = function(x, y, context, color, tolerance) {
    x = Math.floor(x);
    y = Math.floor(y);
    var pixelStack = [[x, y]];
    var width = context.canvas.width;
    var height = context.canvas.height;
    var pixelPos = (y*width + x) * 4;
    var imageData = context.getImageData(0, 0, width, height);

    if (color.charAt(0) == '#') {
        var color = color.substring(1, 7);
        color = [
            parseInt(color.substring(0, 2), 16),
            parseInt(color.substring(2, 4), 16),
            parseInt(color.substring(4, 6), 16)
        ];

    } else if (color.substring(0, 4) == 'rgb(') {
        color = color.substring(4, color.length - 1).split(',');
        color = [
            parseInt(color[0].trim()),
            parseInt(color[1].trim()),
            parseInt(color[2].trim())
        ];

    } else {
        return;
    }
    var startColor = [
        imageData.data[pixelPos] - tolerance,
        imageData.data[pixelPos+1] - tolerance,
        imageData.data[pixelPos+2] - tolerance,
        imageData.data[pixelPos+3] - tolerance,
        imageData.data[pixelPos] + tolerance,
        imageData.data[pixelPos+1] + tolerance,
        imageData.data[pixelPos+2] + tolerance,
        imageData.data[pixelPos+3] + tolerance,
        color[0],
        color[1],
        color[2]
    ];
    while (pixelStack.length) {
        var newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];
        pixelPos = (y*width + x) * 4;
        while (y-- >= 0 && WinPaint._matchTolerance(startColor, imageData, pixelPos)) {
            pixelPos -= width * 4;
        }
        pixelPos += width * 4;
        ++y;
        var reachLeft = false;
        var reachRight = false;
        while (y++ < height-1 && WinPaint._matchTolerance(startColor, imageData, pixelPos)) {
            imageData.data[pixelPos] = color[0];
            imageData.data[pixelPos+1] = color[1];
            imageData.data[pixelPos+2] = color[2];
            imageData.data[pixelPos+3] = 255;
            if (x > 0) {
                if (WinPaint._matchTolerance(startColor, imageData, pixelPos - 4)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }
            if (x < width-1) {
                if (WinPaint._matchTolerance(startColor, imageData, pixelPos + 4)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (WinPaint._matchTolerance(startColor, imageData, pixelPos + 4 -(width *4))) {
                    if (!reachLeft) {
                        pixelStack.push([x + 1, y - 1]);
                        reachLeft = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }
            pixelPos += width * 4;
        }
    }
    context.putImageData(imageData, 0, 0);
};
