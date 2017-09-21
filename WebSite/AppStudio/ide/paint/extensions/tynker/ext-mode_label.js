var modeLabelMap = {
  'select'      : '选择工具',
  'fhpath'      : '铅笔工具',
  'connector'   : '连接两个对象',
  'line'        : '直线工具',
  'rect'        : '矩形',
  'rect_show'   : '矩形',
  'square'      : '正方形',
  'fhrect': '自由的矩形',
  'ellipse'     : '椭圆',
  'ellipse_show': '椭圆',
  'circle'      : '圆形',
  'fhellipse'   : '自由的椭圆',
  'path'        : '路径工具',
  'shapelib'    : '图形工具',
  'text'        : '文本工具',
  'layer_rename': '文本工具',
  'image'       : '图像工具',
  'zoom'        : '缩放工具',
  'drag_center' : '角色中心点'
};

svgEditor.addExtension("mode_label", {
  callback: function() {
    svgEditor.ready(function() {
      var oldSetMode = svgCanvas.setMode;

      var updateModeLabel = function(mode) {
        var modeLabel = modeLabelMap[mode] || modeLabelMap.select
        $('#mode_panel > h4').html(modeLabel)
      }

      svgCanvas.setMode = function(mode) {
        oldSetMode.apply(svgCanvas, arguments)
        updateModeLabel.apply(svgCanvas, arguments)
      }

      // init the mode label
      var currentMode = svgCanvas.getMode();
      updateModeLabel(currentMode)
    })
  }
})
