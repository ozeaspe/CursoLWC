public with sharing class CriarContas {
    
    @AuraEnabled
    public static void criarConta(Account conta){

        Account acc = new Account();
        acc.Name = (String) conta.get('name');
        acc.Phone = (String) conta.get('phone');
        acc.NumberOfEmployees = Integer.valueOf(conta.get('numberOfEmployees'));
        
        if(Schema.sObjectType.Account.isCreateable()){
            insert acc;
        }
        
          
        
    }
}