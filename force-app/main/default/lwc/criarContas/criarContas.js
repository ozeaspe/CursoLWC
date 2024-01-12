import { LightningElement } from 'lwc';
import criarConta from '@salesforce/apex/CriarContas.criarConta';

export default class CriarContas extends LightningElement {

    conta = {};

    changeHandler(event){
        this.conta[event.target.name] = event.target.value;
    }

    handleClick(){
        
        if(this.conta){
            criarConta({ conta : this.conta});
            this.conta;
        }
        
    }
}