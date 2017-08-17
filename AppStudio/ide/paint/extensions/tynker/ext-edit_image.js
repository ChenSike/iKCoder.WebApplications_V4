/*
 * ext-edit_image: adds a button to launch the inline image editor.
 *
 */

svgEditor.addExtension("edit_image", function(s) {
  // add a global logging function
  window._log = function() { /* console.log(arguments); */ }

  // initialize the editor
  WinPaint.init();

  return {
    name: "edit_image",
    svgicons: "extensions/tynker/ext-edit_image.svg",
    buttons: [
      {
        id: "edit_image",
        type: "mode",
        title: "±à¼­Í¼Ïñ",
        events: {
          'click': function() {
            // find the selected image
            // retrieve the content
            // open the editor

            // ensures an image is selected
            // (at least one element is select, and the first element is an image)
            if(!(svgCanvas.getSelectedElems().length > 0 && svgCanvas.getSelectedElems()[0] && svgCanvas.getSelectedElems()[0].nodeName == 'image')) {
              // cancels any action
              svgEditor._clickSelect();
              return false;
            }

            var image = $(svgCanvas.getSelectedElems()[0])
            var url = image.attr('xlink:href')

            var canvasOffset = svgCanvas.getOffset();
            var canvasX = canvasOffset.x;
            var canvasY = canvasOffset.y;

            var imageCanvasX = image.attr('x');
            var imageCanvasY = image.attr('y');

            var imageX = canvasX + imageCanvasX;
            var imageY = canvasY + imageCanvasY;

            var width = image.attr('width');
            var height = image.attr('height');

            var workarea = $('#workarea');
            var maxWidth = workarea.width();
            var maxHeight = workarea.height();

            if (window.parent && window.parent.WinSVGPaint) {
                window.parent.WinSVGPaint.enableDialogButtons(false);
            }
          	WinPaint.edit('Edit this Image', url, width, height, maxHeight, maxWidth, imageY, imageX, 0, 0, function(src, x, y) {
          		image.attr('xlink:href', src)
                if (window.parent && window.parent.WinSVGPaint) {
                    window.parent.WinSVGPaint.enableDialogButtons(true);
                }
          	}, function() {
          		svgEditor._clickSelect();
                if (window.parent && window.parent.WinSVGPaint) {
                    window.parent.WinSVGPaint.enableDialogButtons(true);
                }
          	});
          }
        }
      }
    ],
    callback: function() {
      // after the extension is loaded, disabled the edit button unless and image is already selected
      if(!(svgCanvas.getSelectedElems().length > 0 && svgCanvas.getSelectedElems()[0] && svgCanvas.getSelectedElems()[0].nodeName == 'image')) {
        $('#edit_image').addClass('disabled');
      }
    },
    /**
     * Disables the edit image button, unless the selected element is a single image element.
     *
     * @param opts An object with these properties: elems (array of the newly selected elements),
     * selectedElement (the single selected element),
     * multiselected (a boolean that indicates whether one or more elements was selected).
     */
    selectedChanged: function(opts) {
      if(opts.selectedElement && opts.selectedElement.tagName == 'image') {
        $('#edit_image').removeClass('disabled');
      }
      else {
        $('#edit_image').addClass('disabled');
      }
    }
  }
})
