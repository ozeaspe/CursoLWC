import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
  nomeCompleto = '';
  idade = '';
  estudante = false;
  clickedMostrarNome;
  serie = '';
  sexo = false;
  sexoSelecionado;

  changeHandler(event) {
    this.nomeCompleto = event.target.value;
  }

  changeHandlerIdade(event) {
    this.idade = event.target.value;
  }

  changeHandlerEstudante(event) {
    this.estudante = event.target.checked;
    if(!this.estudante){
      this.serie = '';
    }
  }

  handleClick(event) {
    
    if(this.clickedMostrarNome != ''){
      this.clickedMostrarNome == '';
    }else{
      this.clickedMostrarNome = this.nomeCompleto;
    }
    
}
    handleClick2(event) {
    this.nomeCompleto = '';
    this.idade = '';
    this.estudante = false;  
    this.clickedMostrarNome = '';
    
}

get optionsSeries() {
  return [
      { label: 'Série 1', value: 'serie1' },
      { label: 'Série 2', value: 'serie2' },
      { label: 'Série 3', value: 'serie3' },
  ];
}

handleChangeSerie(event) {
  this.serie = event.detail.value;
}

get optionsSexo() {
  return [
      { label: 'Masculino', value: 'masculino' },
      { label: 'Feminino', value: 'feminino' },
  ];
}

handleChangeSexo(event) {
  this.sexoSelecionado = event.detail.value;
  if(this.sexoSelecionado == 'masculino'){
    this.sexo = true
  }else{
    this.sexo = false
  }
}

}