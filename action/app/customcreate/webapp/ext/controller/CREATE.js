sap.ui.define([
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        CREATE_CLICK: function (oEvent) {
            debugger
            this.loadFragment({
                id: "Create",
                name: "customcreate.ext.fragment.popup",
            }).then(function (oDialog) {
                // let myuuid = crypto.randomUUID();
               
                debugger
                var now = new Date();
                var randomNum = '';
                randomNum += Math.round(Math.random() * 9);
                randomNum += Math.round(Math.random() * 9);
                randomNum += now.getTime().toString().slice(-3);
                sap.ui.getCore().byId("Create--he").mAggregations.content[0].mAggregations.items[1].setValue(randomNum)
                oDialog.open();
            });
        },
        SAVE: function (oEvent) {
            debugger

          
            var id = oEvent.oSource.oParent.mAggregations.items[1].mProperties.value;
            var name = oEvent.oSource.oParent.mAggregations.items[3].mProperties.value;
            var date = oEvent.oSource.oParent.mAggregations.items[5].mProperties.value;
          
            if (name==="") {
                MessageToast.show("Fill the Name");
                var oView = this.getView(),
				aInputs = [
				oView.byId("nameInput"),
				oView.byId("emailInput")
			],
				bValidationError = false;

			// Check that inputs are not empty.
			// Validation does not happen during data binding as this is only triggered by user actions.
			aInputs.forEach(function (oInput) {
				bValidationError = this._validateInput(oInput) || bValidationError;
			}, this);

			if (!bValidationError) {
				MessageToast.show("The input is validated. Your form has been submitted.");
			} else {
				MessageBox.alert("A validation error has occurred. Complete your input first.");
			}
                
            }
               else if (date==="")
               {
                    MessageToast.show("Fill the DATE");
                    
                }
                else
                {

                    var testdata = JSON.stringify({ peolid: id, empname: name, date: date });
    
                    MessageToast.show("saved successfully");
                   
                    this.refresh()
        
                    
                }
                
              
           
            // let id2 = parseInt(id);
            // let name2 = parseInt(name);
            $.ajax({
                url: '/odata/v4/my/peol',
                type: 'POST',
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
        },
        CANCEL: function (oEvent) {
            debugger
            var des = oEvent.oSource.getParent().getParent().close()
            des.close()
            des.destroy()
        }

    };
});