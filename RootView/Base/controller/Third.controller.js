sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("base.app.controller.Third", {

		onPressButtonB: function() {
			this.getOwnerComponent().getRouter().navTo("r2");
		}

	});
});