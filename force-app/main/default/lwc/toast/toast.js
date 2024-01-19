import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import MeuModal from 'c/aula18modal';


export default class Toast extends LightningElement {

    result;

     connectedCallback(){
        this.showToast('Sucesso', 'Tela Iniciada com sucesso', 'success');
     } 

     async handleClick() {
        this.result = await MeuModal.open(
            {
           
            size: 'large',
            description: 'Accessible description of modals purpose',
            content: 'Abrir o Modal a partir de um outro componente',
            options: [
                { id: 1, label: 'Option 1', value : 1 },
                { id: 2, label: 'Option 2', value : 2},
              ]
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