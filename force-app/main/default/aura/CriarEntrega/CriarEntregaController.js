({
    handleSubmit: function(component, event, helper) {
        component.set('v.spinner', true);
        event.preventDefault();       // stop the form from submitting
        
        var fields = event.getParam('fields');
        
        component.find('recordEditForm').submit(fields);

        component.set("v.Account__c", "");
        component.set("v.Tipos_de_Entrega__c", "");
        component.set("v.Prioridade__c", "");
        component.set("v.Observacao__c", "");
        
    },
    handleSuccess: function(component, event, helper) {
        component.set('v.spinner', false);
        helper.showToast("success", "Agora Sim");
    }
})