const estadosNomes = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins","Distrito Federal"];
const estados = document.getElementById('estado');

function criarEstados() {
  for(let index in estadosNomes) {
    const elementOptions = document.createElement('option');
    elementOptions.innerHTML = estadosNomes[index];
    estados.appendChild(elementOptions);
  }
}

criarEstados();

let picker = new Pikaday({ field: document.getElementById('datepicker') });
picker.setMinDate('1822-01-01');
picker.setMaxDate('3000-12-31');

const validate = new window.JustValidate('#form');

import JustValidatePluginDate from 'just-validate-plugin-date';

validation.addField('#date', [
  {
    plugin: JustValidatePluginDate(() => ({
      format: 'dd/MM/yyyy',
      isBefore: '15/12/2022',
      isAfter: '10/12/2022',
    })),
    errorMessage: 'Date should be between 01/01/1822 and 15/12/2022',
  },
]);