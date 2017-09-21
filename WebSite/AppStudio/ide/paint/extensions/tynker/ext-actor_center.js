/*
 * ext-actor_center: multiple additions to manipulate the actor center.
 *
 * Based on ext-grid.js
 * Licensed under the MIT License
 * Copyright(c) 2010 Alexis Deveria
 *
 */

// Dependencies:
// 1) units.js
// 2) everything else

svgEditor.addExtension("actor_center", function(s) {
  var NS = "http://www.w3.org/2000/svg";
  var svgdoc = document.getElementById("svgcanvas").ownerDocument;
  var svgCanvas = svgEditor.canvas;

  var modeString = "drag_center";

  var centerVisible = false;
  var center = {
    x: null,
    y: null
  };

  // sets the config actor center to the center reference
  svgEditor.curConfig.actorCenter = center;

  // creates a new canvas center svg element
  var canvasCenter = svgdoc.createElementNS(NS, "svg");
  svgCanvas.assignAttributes(canvasCenter, {
    'id': 'canvasCenter',
    'width': '100%',
    'height': '100%',
    'x': 0,
    'y': 0,
    'overflow': 'visible',
    'display': 'none'
  });

  // adds the center to the background
  var selectorParentGroup = $('#selectorParentGroup');
  selectorParentGroup.append(canvasCenter);

  var lineV = svgdoc.createElementNS(NS, "line");
  svgCanvas.assignAttributes(lineV, {
    'stroke-width': 1,
    'stroke': '#000000',
    'fill': 'none',
    'pointer-events' : 'inherit',
    'x1': 0,
    'y1': 0,
    'x2': 0,
    'y2': svgCanvas.contentH,
    'id': 'centerLineV',
    'fill-opacity': 1,
    'stroke-opacity': 1
  })

  var lineH = svgdoc.createElementNS(NS, "line");
  svgCanvas.assignAttributes(lineH, {
    'stroke-width': 1,
    'stroke': '#000000',
    'fill': 'none',
    'pointer-events' : 'inherit',
    'x1': 0,
    'y1': 0,
    'x2': svgCanvas.contentW,
    'y2': 0,
    'id': 'centerLineH',
    'fill-opacity': 1,
    'stroke-opacity': 1
  })

  $('#canvasCenter').append(lineH)
  $('#canvasCenter').append(lineV)

  function positionCenter(position) {
    var bBox = svgCanvas.getStrokedBBox();

    var positionList = position.split('_');
    var positionV = positionList[0];
    var positionH = positionList[1];

    switch(positionV) {
      case 'top':
        center.y = bBox.y;
        break;
      case 'center':
        center.y = bBox.y + bBox.height / 2;
        break;
      case 'bottom':
        center.y = bBox.y + bBox.height;
        break;
    }

    switch(positionH) {
      case 'left':
        center.x = bBox.x;
        break;
      case 'center':
        center.x = bBox.x + bBox.width / 2;
        break;
      case 'right':
        center.x = bBox.x + bBox.width;
    }
  }

  function setCenter(x, y) {
    // apply canvas boundaries
    var boundedX = x, boundedY = y;
    boundedX = boundedX < 0 ? 0 : boundedX;
    boundedY = boundedY < 0 ? 0 : boundedY;
    boundedX = boundedX > svgCanvas.contentW ? svgCanvas.contentW : boundedX;
    boundedY = boundedY > svgCanvas.contentH ? svgCanvas.contentH : boundedY;

    center.x = boundedX;
    center.y = boundedY;

    updateCenter(svgCanvas.getZoom());
  }

  function updateCenter(zoom) {
    // applies zooming to the center coordinates
    var zoomedX = center.x * zoom;
    var zoomedY = center.y * zoom;

    // avoids anti-aliasing by using half pixels
    zoomedX = zoomedX % 1 == 0 ? zoomedX + .5 : zoomedX;
    zoomedY = zoomedY % 1 == 0? zoomedY + .5 : zoomedY;

    // updates line coordinates
    lineV.setAttribute('x1', zoomedX)
    lineV.setAttribute('x2', zoomedX)
    lineV.setAttribute('y2', svgCanvas.contentH * zoom)
    lineH.setAttribute('y1', zoomedY)
    lineH.setAttribute('y2', zoomedY)
    lineH.setAttribute('x2', svgCanvas.contentW * zoom)
  }

  function showCenter() {
    // when showing the center, defaults each coordinate to the middle of the canvas
    center.x = center.x != null ? center.x : svgCanvas.contentW / 2;
    center.y = center.y != null ? center.y : svgCanvas.contentH / 2;

    svgEditor.curConfig.centerVisible = centerVisible = true;
    $('#view_center').addClass('push_button_pressed').removeClass('tool_button');
    $('#canvasCenter').attr('display', 'normal');
    updateCenter(svgCanvas.getZoom());
  }

  function hideCenter() {
    svgEditor.curConfig.centerVisible = centerVisible = false;
    $('#view_center').removeClass('push_button_pressed').addClass('tool_button');
    $('#canvasCenter').attr('display', 'none');
  }

  var started = false;

  return {
    name: "actor_center",

    zoomChanged: function(zoom) {
      // update size
      if(showCenter) updateCenter(zoom);
    },

    buttons: [
      {
        id: "edit_center",
        type: "mode",
        title: "角色中心点",
        events: {
          'click': function() {
            // unselect current selection (so contextual tools are hidden)
            svgCanvas.clearSelection();

            // hides the constant panels
            $('#canvas_panel').hide();
            $('#color_panel').hide();

            if(!centerVisible) {
              showCenter();
            }
            $('#actor_center_panel').css("display", "inline");
            svgCanvas.setMode(modeString);

            // forces updating context panel on next mode switch
            // (and only the next)

            // define a new set mode for svg canvas, which
            // forces updating the context panel and restores
            // the previous set mode
            var oldSetMode = svgCanvas.setMode
            svgCanvas.setMode = function(pModeString) {
              var currentMode = svgCanvas.getMode()
              oldSetMode.apply(svgCanvas, arguments)
              if(pModeString != currentMode) {
                svgEditor._updateContextPanel();
              }

              // auto hide the actor center when moving out of the actor center mode
              if(pModeString != modeString) {
                hideCenter();

                // re-show the hidden panels
                $('#canvas_panel').show();
                $('#color_panel').show();
              }

              svgCanvas.setMode = oldSetMode
            }
          }
        }
      },
      {
        id: "position_top_left",
        icon: "extensions/tynker/ext-actor_center-position_top_left.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Top Left",
        events: {
          'click': function() {
            positionCenter('top_left')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_top_center",
        icon: "extensions/tynker/ext-actor_center-position_top_center.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Top Center",
        events: {
          'click': function() {
            positionCenter('top_center')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_top_right",
        icon: "extensions/tynker/ext-actor_center-position_top_right.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Top Right",
        events: {
          'click': function() {
            positionCenter('top_right')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_center_left",
        icon: "extensions/tynker/ext-actor_center-position_center_left.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Middle Left",
        events: {
          'click': function() {
            positionCenter('center_left')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_center_center",
        icon: "extensions/tynker/ext-actor_center-position_center_center.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Middle Center",
        events: {
          'click': function() {
            positionCenter('center_center')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_center_right",
        icon: "extensions/tynker/ext-actor_center-position_center_right.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Middle Right",
        events: {
          'click': function() {
            positionCenter('center_right')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_bottom_left",
        icon: "extensions/tynker/ext-actor_center-position_bottom_left.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Bottom Left",
        events: {
          'click': function() {
            positionCenter('bottom_left')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_bottom_center",
        icon: "extensions/tynker/ext-actor_center-position_bottom_center.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Bottom Center",
        events: {
          'click': function() {
            positionCenter('bottom_center')
            updateCenter(svgCanvas.getZoom());
          }
        }
      },
      {
        id: "position_bottom_right",
        icon: "extensions/tynker/ext-actor_center-position_bottom_right.png",
        type: "context",
        panel: "actor_center_panel",
        title: "Bottom Right",
        events: {
          'click': function() {
            positionCenter('bottom_right')
            updateCenter(svgCanvas.getZoom());
          }
        }
      }
    ],
    mouseDown: function(opts) {
      // check we're in brush mode
      if(svgCanvas.getMode() != modeString)  { return; }

      setCenter(opts.start_x, opts.start_y);

      return {started: true};
    },
    mouseMove: function(opts) {
      // check we're in brush mode
      if(svgCanvas.getMode() != modeString)  { return; }

      // change stroke color to red
      lineV.setAttribute('stroke', '#ff0000');
      lineH.setAttribute('stroke', '#ff0000');

      var zoom = svgCanvas.getZoom();
      setCenter(opts.mouse_x / zoom, opts.mouse_y / zoom);
    },
    mouseUp: function(opts) {
      // check we're in brush mode
      if(svgCanvas.getMode() != modeString)  { return; }

      // change stroke color back to black
      lineV.setAttribute('stroke', '#000000');
      lineH.setAttribute('stroke', '#000000');

      var zoom = svgCanvas.getZoom();
      setCenter(opts.mouse_x / zoom, opts.mouse_y / zoom);

      return { keep: true };
    }
  }
});
