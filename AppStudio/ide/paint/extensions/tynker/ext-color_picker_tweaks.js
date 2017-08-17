/*
 * ext-default_color_selector: color picker behavior tweaks for Tynker drawing tool:
 * 1) Manipulates the default color selector when mode switching occurs.
 * 2) Hides the color panel when no object is selected.
 *
 */

svgEditor.addExtension("color_picker_tweaks", function(s) {
  var svgCanvas = svgEditor.canvas;

  /**
   * Modes which default color picker should be the fill tool.
   * @type {Array}
   */
  var fillModes = ['ellipse', 'rect', 'text', 'shapelib'];

  /**
   * Modes which default color picker should be the stroke tool.
   * @type {Array}
   */
  var strokeModes = ['fhpath', 'line', 'path'];

  /**
   * Modes which require the color selection.
   * @type {Array}
   */
  var colorPickerModes = ['fhpath', 'path', 'ellipse', 'rect', 'line', 'shapelib', 'text'];

  // Tweak #1 - Default color select tweak
  // define a new set mode for svg canvas, which
  // updates the active tool selector for certain modes
  // before actually setting the mode
  var oldSetMode = svgCanvas.setMode
  svgCanvas.setMode = function(pModeString) {
    // clear selection, when switching modes
    var currentMode = svgCanvas.getMode();
    if(pModeString != currentMode) {
      // clear selection (and don't call the "selected" handler)
      svgCanvas.clearSelection(true);
    }

    // if this mode requires the fill tool
    if(fillModes.indexOf(pModeString) > -1) {
      $('#tool_fill').addClass('active');
      $("#tool_stroke").removeClass('active');
    }
    // otherwise if this mode requires the stroke tool
    else if(strokeModes.indexOf(pModeString) > -1) {
      $("#tool_stroke").addClass('active');
      $('#tool_fill').removeClass('active');
    }

    // in case the mode requires the color picker
    if(colorPickerModes.indexOf(pModeString) > -1) {
      $('#color_panel').show();
    }
    // otherwise if nothing is selected
    else if(svgCanvas.getSelectedElems().length == 0 || svgCanvas.getSelectedElems()[0] == undefined) {
      $('#color_panel').hide();
    }

    oldSetMode.apply(svgCanvas, arguments);
  }

  return {
    callback: function() {
      // Tweak #2 - Hides color panel
      // after the extension is loaded, toggles the color panel, depending on whether something is selected
      var canvas = svgEditor.canvas;
      if(canvas.getSelectedElems().length > 0 && canvas.getSelectedElems()[0] != undefined) {
        $('#color_panel').show();
      }
      else {
        $('#color_panel').hide();
      }
    },
    /**
     * Hides the color panel (tweak #2), when no object is selected (no need for colors).
     *
     * @param opts An object with these properties: elems (array of the newly selected elements),
     * selectedElement (the single selected element),
     * multiselected (a boolean that indicates whether one or more elements was selected).
     */
    selectedChanged: function(opts) {
      if((opts.elems && opts.elems.length > 0) || opts.selectedElement) {
        $('#color_panel').show();
      }
      else {
        $('#color_panel').hide();
      }
    }
  }
});
