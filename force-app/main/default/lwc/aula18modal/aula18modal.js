import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class Aula18modal extends LightningModal {
    @api content;
    @api options = [];

    handleOkay() {
        this.close('Fechou');
    }

    

    handleOptionClick(e) {
        const { target } = e;
        const { id, value } = target.dataset;
        this.close(id);
    }
}