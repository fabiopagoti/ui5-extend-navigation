sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("base.app.controller.Second", {
      onPressButton2 : function () {
         this.getOwnerComponent().getRouter().navTo("r1");
      }
   });
});