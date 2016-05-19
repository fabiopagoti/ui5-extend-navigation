sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function(Controller) {
   "use strict";
   return Controller.extend("base.app.controller.Second", {
      onPressButtonA: function() {
         this.getOwnerComponent().getRouter().navTo("r1");
      },
      onPressButtonC: function() {
         this.getOwnerComponent().getRouter().navTo("r3");
      }
   });
});