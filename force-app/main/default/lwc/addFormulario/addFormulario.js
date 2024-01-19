import { LightningElement, track } from 'lwc';
import criarContas from '@salesforce/apex/CriarContas.criarContas'

export default class AddFormulario extends LightningElement {

    @track formularios = [];

    handlerChange(e){
        const index = e.target.dataset.index;
        this.formularios[index] [e.target.name] = e.target.value;
    }

    handleDeleteForm(e){
        const index = e.target.dataset.index;
        this.formularios.splice(index, 1);
    }

    addFormulario(){
        const newForm = {
            id: Date.now(),
            Name: '',
            Idade__c: 0
        }
        this.formularios.push(newForm);
    }

    salvarFormulario(){
        if(this.formularios){
            criarContas({contas : this.formularios});
        }
    }
}