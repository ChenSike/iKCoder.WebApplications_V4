/**
 * Package: svgedit.tynker.path
 * Tynker overrides for path.
 *
 * Copyright(c) 2013 Tynker
 *
 * Based on svgedit.path
 * Copyright(c) 2011 Alexis Deveria
 * Copyright(c) 2011 Jeff Schiller
 */

svgedit.path.Segment.prototype.select = function(y) {
	if(this.ptgrip) {
		this.ptgrip.setAttribute("stroke", y ? "#FF9933" : "#4F80FF");
		this.ptgrip.setAttribute("fill", y ? "#FF9933" : "#fff");
		this.segsel.setAttribute("display", y ? "inline" : "none");
		if(this.ctrlpts) {
			this.selectCtrls(y);
		}
		this.selected = y;
	}
};