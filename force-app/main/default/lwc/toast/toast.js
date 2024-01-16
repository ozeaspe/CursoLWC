import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Toast extends LightningElement {

    
    showToastAviso(){
        this.ShowToast('Aviso', 'Não pode fazer isso', 'warning');
    }

    showToastErro(){
        this.ShowToast('Erro', 'Deu errado', 'error');
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}