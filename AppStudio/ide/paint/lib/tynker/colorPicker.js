var ColorPicker = {};

/**
 * Build Color palette
 */
ColorPicker.init = function(target) {
    // target defaults to body
    target == null ? 'body' : target;

    // Add color picker canvas
//    ColorPicker.colors = $('<canvas class="color-chooser" style="display:none" width="142" height="77"></canvas>');
//    ColorPicker.colors = $('<canvas class="color-chooser" style="display:none" width="200" height="120"></canvas>');
    ColorPicker.colors = $('<canvas class="color-chooser" style="display:none" width="300" height="220"></canvas>');
    $(target).append(ColorPicker.colors);
    ColorPicker.ctx = ColorPicker.colors[0].getContext('2d');

    // White background
    ColorPicker.ctx.fillStyle = '#ffffff';
    ColorPicker.ctx.fillRect(0, 0, ColorPicker.ctx.canvas.width, ColorPicker.ctx.canvas.height);

    // Make a gradient
//    var gradient = ColorPicker.ctx.createLinearGradient(0, 0, ColorPicker.colors.width()-60, 0);
    var gradient = ColorPicker.ctx.createLinearGradient(0, 0, ColorPicker.ctx.canvas.width - 100, 0);

    // Create color gradient
    gradient.addColorStop(0,    "rgb(255,   0,   0)");
    gradient.addColorStop(0.15, "rgb(255,   0, 255)");
    gradient.addColorStop(0.33, "rgb(0,     0, 255)");
    gradient.addColorStop(0.49, "rgb(0,   255, 255)");
    gradient.addColorStop(0.67, "rgb(0,   255,   0)");
    gradient.addColorStop(0.84, "rgb(255, 255,   0)");
    gradient.addColorStop(1,    "rgb(255,   0,   0)");

    // Apply gradient to canvas
    ColorPicker.ctx.fillStyle = gradient;
//    ColorPicker.ctx.fillRect(0, 0, ColorPicker.ctx.canvas.width-60, ColorPicker.ctx.canvas.height);
    ColorPicker.ctx.fillRect(0, 0, ColorPicker.ctx.canvas.width-100, ColorPicker.ctx.canvas.height);

    // Create semi transparent gradient (white -> trans. -> black)
    gradient = ColorPicker.ctx.createLinearGradient(0, 0, 0, ColorPicker.ctx.canvas.height);
    gradient.addColorStop(0,   "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
    gradient.addColorStop(1,   "rgba(0,     0,   0, 1)");

    // Apply gradient to canvas
    ColorPicker.ctx.fillStyle = gradient;
//    ColorPicker.ctx.fillRect(0, 0, ColorPicker.ctx.canvas.width-60, ColorPicker.ctx.canvas.height);
    ColorPicker.ctx.fillRect(0, 0, ColorPicker.ctx.canvas.width-100, ColorPicker.ctx.canvas.height);

    var colors = [
        '#000000',  'Black',
        '#0000ff',  'Blue',
        '#996633',  'Brown',
        '#00ffff',  'Cyan',
        '#00ff00',  'Green',
        '#ff00ff',  'Magenta',
        '#ff8000',  'Orange',
        '#800080',  'Purple',
        '#ff0000',  'Red',
        '#ffff00',  'Yellow',
        '#ffffff',  'White'
    ];
    ColorPicker.ctx.textAlign = 'left';
    ColorPicker.ctx.textBaseline = 'middle';
    ColorPicker.ctx.font = 'normal 14px Arial';
    for (var i=0; i<colors.length; i+=2) {
        ColorPicker.ctx.fillStyle = colors[i];
        ColorPicker.ctx.fillRect(ColorPicker.ctx.canvas.width - 96, i * 20 / 2, 20, 20);
        // Color name
        ColorPicker.ctx.strokeStyle = '#000';
        ColorPicker.ctx.fillStyle = '#000';
        ColorPicker.ctx.fillText(colors[i+1], ColorPicker.ctx.canvas.width - 72, i * 20 / 2 + 10);
    }

    ColorPicker.ctx.strokeStyle = '#000000';
    ColorPicker.ctx.strokeRect(0, 0, ColorPicker.ctx.canvas.width, ColorPicker.ctx.canvas.height);

//    var colors = [
//        ['#ffaaaa', '#ffd4aa', '#ffffaa', '#d4ffaa', '#aaffaa', '#aaffd4', '#aaffff', '#aad4ff', '#aaaaff', '#d4aaff', '#ffaaff', '#ffaad4'],
//        ['#ff5656', '#ffaa56', '#ffff56', '#aaff56', '#56ff56', '#56ffaa', '#56ffff', '#56aaff', '#5656ff', '#aa56ff', '#ff56ff', '#ff56aa'],
//        ['#ff0000', '#ff7f00', '#ffff00', '#7fff00', '#00ff00', '#00ff7f', '#00ffff', '#007fff', '#0000ff', '#7f00ff', '#ff00ff', '#ff007f'],
//        ['#bf0000', '#bf5f00', '#bfbf00', '#5fbf00', '#00bf00', '#00bf5f', '#00bfbf', '#005fbf', '#0000bf', '#5f00bf', '#bf00bf', '#bf005f'],
//        ['#7f0000', '#7f3f00', '#7f7f00', '#3f7f00', '#007f00', '#007f3f', '#003f7f', '#003f7f', '#00007f', '#3f007f', '#7f007f', '#7f003f'],
//        ['#ffffff', '#e5e5e5', '#cccccc', '#b2b2b2', '#999999', '#7f7f7f', '#666666', '#4c4c4c', '#333333', '#191919', '#0f0f0f', '#000000']
//    ];
//    for (var i=0; i<colors.length; i++) {
//        for (var j=0; j<colors[i].length; j++) {
//            ColorPicker.ctx.fillStyle = colors[i][j];
//            ColorPicker.ctx.fillRect(ColorPicker.ctx.canvas.width - (colors.length - i) * 10, j * 10, 10, 10);
//        }
//    }

    // Mouse button status
    ColorPicker.mousedown = false;

    // Mouse down on the color
    ColorPicker.colors.mousedown(function(e) {
        ColorPicker.mousedown = true;
        ColorPicker.updateColor(e);
    });

    // Mouse up on the color, we're done
    ColorPicker.colors.mouseup(function(e) {
        if (ColorPicker.mousedown) {
            ColorPicker.mousedown = false;
            ColorPicker.hide();
            /* LOGGING */ _log('colorpicker', 'chose color', ColorPicker.selectedColor);
        }
    });

    // Track mouse movement on the canvas if the mouse button is down
    $(ColorPicker.colors).mousemove(function(e) {
        ColorPicker.updateColor(e);
        /* LOGGING */ _log('colorpicker', 'drag color', ColorPicker.selectedColor);
    });
};

/**
 * Show the color picker at the specified position.
 */
ColorPicker.show = function(x, y, altY, fn) {
    if (x + $(ColorPicker.colors).outerWidth() > window.innerWidth) {
        x = window.innerWidth - $(ColorPicker.colors).outerWidth();
    }
    if (y + $(ColorPicker.colors).outerHeight() > window.innerHeight) {
//        y = window.innerHeight - $(ColorPicker.colors).outerHeight();
        y = altY - $(ColorPicker.colors).outerHeight();
    }
    ColorPicker.colors.css('left', x+'px');
    ColorPicker.colors.css('top', y+'px');
    ColorPicker.colors.css('display', 'block');
    ColorPicker.fnDone = fn;
};

/**
 * Hide the color palette.
 */
ColorPicker.hide = function() {
    ColorPicker.colors.css('display', 'none');
};

/**
 * Pick the color at the mouse point.
 */
ColorPicker.updateColor = function(e) {
    if (ColorPicker.mousedown) {
        var x = e.pageX - ColorPicker.colors.offset().left;
        var y = e.pageY - ColorPicker.colors.offset().top;
        var imageData = ColorPicker.ctx.getImageData(x, y, 1, 1);

        var r = Math.floor(imageData.data[0]).toString(16);
        if (r.length<2) {
            r = '0' + r;
        }
        var g = Math.floor(imageData.data[1]).toString(16);
        if (g.length<2) {
            g = '0' + g;
        }
        var b = Math.floor(imageData.data[2]).toString(16);
        if (b.length<2) {
            b = '0' + b;
        }

        //ColorPicker.selectedColor = 'rgb(' + imageData.data[0] + ', ' + imageData.data[1] + ', ' + imageData.data[2] + ')'; 
        ColorPicker.selectedColor = '#' + r + g + b;
        if (ColorPicker.fnDone) {
            ColorPicker.fnDone(ColorPicker.selectedColor);
        }
    }
};

/**
 * Pick the color from the stage at the mouse point.
 */
ColorPicker.updateColorStage = function(e) {
    var imageData = Runtime.stage.getBuffer();
    var x = e.pageX - $(Runtime.stage.container).offset().left;
    var y = e.pageY - $(Runtime.stage.container).offset().top;
    var width = Runtime.stage.getWidth();
    var height = Runtime.stage.getHeight();
    // Adjust x/y for scaling
    x = Math.floor(x * width / $('#stage-canvas').outerWidth());
    y = Math.floor(y * height / $('#stage-canvas').outerHeight());
    var r = Math.floor(imageData[x * 4 + y * 4 * width]).toString(16);
    if (r.length<2) {
        r = '0' + r;
    }
    var g = Math.floor(imageData[x * 4 + y * 4 * width + 1]).toString(16);
    if (g.length<2) {
        g = '0' + g;
    }
    var b = Math.floor(imageData[x * 4 + y * 4 * width + 2]).toString(16);
    if (b.length<2) {
        b = '0' + b;
    }
    ColorPicker.selectedColor = '#' + r + g + b;
    if (ColorPicker.fnDone) {
        ColorPicker.fnDone(ColorPicker.selectedColor);
    }
    /* LOGGING */ _log('colorpicker', 'pick from stage', ColorPicker.selectedColor);
};

$(document).ready(function() {
    //ColorPicker.init();
});
