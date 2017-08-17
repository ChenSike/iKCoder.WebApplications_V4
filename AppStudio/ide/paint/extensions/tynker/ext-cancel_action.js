/*
 * ext-cancel_action: allows ESCaping back into selection tool.
 *
 */

svgEditor.addExtension("cancel_action", function() {
	$(document).bind('keydown', "esc", function() {
		$('div#svgcanvas').trigger('mouseup')
		svgEditor._clickSelect();
	});
	return {}
})