sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("base.app.controller.First", {
      onPressButton1 : function () {
         this.getOwnerComponent().getRouter().navTo("r2");
      }
   });
});