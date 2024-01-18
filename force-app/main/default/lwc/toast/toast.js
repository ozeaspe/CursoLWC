import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import MeuModal from 'c/modal';


export default class Toast extends LightningElement {

    result;

     connectedCallback(){
        this.showToast('Sucesso', 'Tela Iniciada com sucesso', 'success');
     } 

     handleClick() {
        this.result = MeuModal.open({
            size: 'large',
            description: 'Accessible description of modals purpose',
            content: 'Passed into content api',
        });
    }    

    showToastAviso(){
        this.showToast('Aviso', 'Não pode fazer isso', 'warning');
     }

    showToastErro(){
        this.showToast('Erro', 'Deu errado', 'error');
    }
    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        }));
    }
        
    
}
