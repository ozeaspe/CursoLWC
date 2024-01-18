import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class Aula18modal extends LightningModal {
    @api content;

    handleOkay() {
        this.close('fechou');
    }
}