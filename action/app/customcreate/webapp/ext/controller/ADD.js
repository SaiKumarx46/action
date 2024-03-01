sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        ADD_CLICK: function(oEvent) {
            debugger
            this.loadFragment({
                id: "Create",
                name: "customcreate.ext.controller.ADD",
            }).then(function (oDialog) {
                oDialog.open();
                // var a = sap.ui.getCore().byId("Create--he").mAggregations.content[0].mAggregations.items[1].

            });
        }
    };
});
