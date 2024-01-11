import { LightningElement } from 'lwc';

export default class CriarContato extends LightningElement {

    handleContact(){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if(inputFields) {
            inputFields.forEach(
                field => {
                    field.reset();
                }
            );
        }
    }
}