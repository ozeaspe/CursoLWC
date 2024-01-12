({
    doInit : function(component, event, helper) {
        console.log(component.get('v.recordId'));

        helper.showToast("success", "Id do registro", component.get('v.recordId'));


    }
})