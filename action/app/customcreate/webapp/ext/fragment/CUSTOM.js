sap.ui.define([
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onPress: function (oEvent) {
            debugger
            this.loadFragment({
                id: "Create",
                name: "customcreate.ext.controller/EDIT",
            }).then(function (oDialog) {
                debugger
                var value1 =oEvent.getSource().getParent().getCells()[0].getText();
                var value2 =oEvent.getSource().getParent().getCells()[1].getText();
                var value3 =oEvent.getSource().getParent().getCells()[2].getText();
                // oEvent.getSource().getParent().getCells()[0].setText (value1);
                // oEvent.getSource().getParent().getCells()[1].setText(value2);
                // oEvent.getSource().getParent().getCells()[2].setText(value3);
                sap.ui.getCore().byId("Create--hello").mAggregations.content[0].mAggregations.items[1].setValue(value1);
                sap.ui.getCore().byId("Create--hello").mAggregations.content[0].mAggregations.items[3].setValue(value2);
                sap.ui.getCore().byId("Create--hello").mAggregations.content[0].mAggregations.items[5].setValue(value3);
                oDialog.open();
            });
        },
        SAVE: function (oEvent) {
            debugger
           
            var id = oEvent.oSource.oParent.mAggregations.items[1].mProperties.value;
            var name = oEvent.oSource.oParent.mAggregations.items[3].mProperties.value;
            var date = oEvent.oSource.oParent.mAggregations.items[5].mProperties.value;
            let testdata = JSON.stringify({ peolid: id, empname: name, date: date });
            var url = '/odata/v4/my/peol/' + id;
            // MessageToast.show("saved successfully");
            
           

            // let id2 = parseInt(id);
            // let name2 = parseInt(name);
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: testdata,
                success: function (data) {
                    debugger
                    // Handle success
                    console.log(data);
                    
                    oEvent.oSource.getParent().getParent().destroy()
                    
                    // des.close()
                    // des.destroy()
                    // location.reload()


                },

                error: function (jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })
            

            this.refresh()
            
        },
        CANCEL: function (oEvent) {
            debugger
            var des = oEvent.oSource.getParent().getParent().close()
            des.close()
            des.destroy()
        }

    };
});

// return {
//     upload: function (oBindingContext, aSelectedContexts) {
//         debugger
//         this.loadFragment({
//             id: "excelUploadDialog",
//             name: "plantmappingfinall.ext.fragment.uploadfrag",
//             controller: _createUploadController(this, 'plant')
//         }).then(function (oDialog) {
//             oDialog.open();
//         });
//     }