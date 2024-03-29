({
    getAccountHelper : function(cmp, event, helper) {
        var action = cmp.get("c.getAccount");
        var accType = cmp.get("v.accountType");
        action.setParams({
            accountType : accType
        });
        action.setCallback(this, $A.getCallback(function(response) {
            var response = response.getReturnValue();
            console.log(response);

            let data = [];
            response.forEach(element => {
                
                data.push(
                    {
                        id:element.Id,
                        nome: element.Name,
                        cpfcnpj: accType == 'CPF' ? element.CPF__c : element.CNPJ__c,
                        cep: element.BillingPostalCode,
                        bairro:element.BillingCity,
                        localidade: element.localidade__c,
                        rua: element.BillingStreet,
                        uf: element.BillingState,
                        telefone:element.Phone,
                        qtnPacotes: element.qtnPacotes__c
                    }
                );

                cmp.set("v.data", data);
            });
        }));
        $A.enqueueAction(action);
    },

    getCepHelper: function (cmp, event, helper) {
        console.log('cep: '+ cmp.get("v.cep"));
        var action = cmp.get("c.consultaCep");
        action.setParams({
            cep : cmp.get("v.cep")
        });
        action.setCallback(this, $A.getCallback(function(response) {
            var response = response.getReturnValue();
            console.log(response);
            if(Object.keys(response).length == 0){
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "type": "error",
                    "message": "CEP não encontrado!"
                });
                toastEvent.fire();
            }else{
                cmp.set("v.rua", response.logradouro);
                cmp.set("v.bairro", response.bairro);
                cmp.set("v.cidade", response.localidade);
                cmp.set("v.uf", response.uf);
            }
        }));
        $A.enqueueAction(action); 
    },

    salvardados: function(cmp, event, helper) {
        
        var action = cmp.get("c.inserirDados");
        
        action.setParams({ 
            nome : cmp.get("v.nomeourazaosocial"),
            cpfoucnpj: cmp.get("v.cpfoucnpj"),
            cep : cmp.get("v.cep"),
            rua : cmp.get("v.rua"),
            bairro : cmp.get("v.bairro"),
            cidade : cmp.get("v.cidade"),
            uf : cmp.get("v.uf"),
            telefone : cmp.get("v.telefone"),
            qtnPacotes : cmp.get("v.qtnPacotes")
        });

        action.setCallback(this, (function(response) {
            var state = response.getState();
            if (state === "SUCCESS"){

                helper.showToast("success", "Dados inseridos com sucesso!");

                cmp.set("v.nomeourazaosocial", "");
                cmp.set("v.cpfoucnpj", "");
                cmp.set("v.cep", "");
                cmp.set("v.rua", "");
                cmp.set("v.bairro", "");
                cmp.set("v.cidade", "");
                cmp.set("v.uf", "");
                cmp.set("v.telefone", "");
                cmp.set("v.qtnPacotes","");

                cmp.set("v.exibirModal", false);

            }else{
               helper.showToast("error", "Ops algo deu errado!");
            }
        }));
        $A.enqueueAction(action);
    },

    showToast: function(type, message) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "type": type,
            "message": message
        });
        toastEvent.fire();
    },

    apagarDados: function(cmp, event, helper, row) {

        var action = cmp.get("c.deletarRegistro");
        
        action.setParams({ 
            idConta :  JSON.stringify(row.id) //aqui enviamos pro Apex o id da conta como string
        });
        
        action.setCallback(this, (function(response) {
            if (response.getState() === "SUCCESS"){
                var response = response.getReturnValue();
                if(response.success){
                    var rows = cmp.get('v.data ');
                    var rowIndex = rows.indexOf(row);
                    rows.splice(rowIndex, 1);
                    cmp.set('v.data', rows);
                    helper.showToast("success", response.msg);
                } else{
                    helper.showToast("error", response.msg); 
                }
            }
            else {
               helper.showToast("error", "Ops algo deu errado!");
            }
        }));
        $A.enqueueAction(action);
    }
    
})