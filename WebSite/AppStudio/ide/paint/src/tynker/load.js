/*
 * Adapted from import_image, the handler for drag-n-drop, which
 * relies on HTML5 File API to open a local file.
 * @param url: The url for the svg or raster image (png, jpg, etc.).
 * @imageCenterX: The X for the center in image coordinates (from the image top left).
 * @imageCenterY: The Y for the center in image coordinates (from the image top left).
 */
function importImage(url, imgCenterX, imgCenterY) {
	$("#workarea").removeAttr("style");
	$('#main_menu').hide();

	if(url.indexOf(".svg") != -1) {
		svgEditor.loadFromURL(url)
	}
	else {
		// let's insert when we know its dimensions
		var insertNewImage = function(img_width, img_height){
			// adjust canvas size to fit the image, reusing the changeCanvasSize handler
			$("#canvas_width").val(img_width);
			$("#canvas_height").val(img_height);
			svgEditor._changeCanvasSize(null);

			var newImage = svgCanvas.addSvgElementFromJson({
				"element": "image",
				"attr": {
					"x": 0,
					"y": 0,
					"width": img_width,
					"height": img_height,
					"id": svgCanvas.getNextId(),
					"style": "pointer-events:inherit"
				}
			});
			svgCanvas.setHref(newImage, url /*e.target.result*/);
			svgCanvas.selectOnly([newImage])
			svgCanvas.alignSelectedElements("m", "page");
			svgCanvas.alignSelectedElements("c", "page");
			svgEditor._updateContextPanel();

			// update the center, converting the image coordinates to canvas coordinates
			var canvasRes = svgCanvas.getResolution();
			var canvasCenterX = canvasRes.w / 2;
			var canvasCenterY = canvasRes.h / 2;
			if(imgCenterX != null) {
				var centerX = canvasCenterX - img_width / 2 + imgCenterX;
				svgEditor.curConfig.actorCenter.x = centerX;
			}
			if(imgCenterY != null) {
				var centerY = canvasCenterY - img_height / 2 + imgCenterY;
				svgEditor.curConfig.actorCenter.y = centerY;
			}
		}
		// create dummy img so we know the default dimensions
		var img_width = 100;
		var img_height = 100;
		var img = new Image();
		img.src = url /*e.target.result*/;
		img.style.opacity = 0;
		img.onload = function() {
			img_width = this.width;
			img_height = this.height;
			insertNewImage(img_width, img_height);
		}
	}
}

$('body').ready(function() {
	var urldata = $.deparam.querystring(true);
	var imageUrl = urldata.image_url;
	var cx = urldata.cx;
	var cy = urldata.cy;

	if(cx != null) { svgEditor.curConfig.actorCenter.x = cx; }
	if(cy != null) { svgEditor.curConfig.actorCenter.y = cy; }

	if(!imageUrl) { return; }

	importImage(imageUrl, cx, cy)
});
