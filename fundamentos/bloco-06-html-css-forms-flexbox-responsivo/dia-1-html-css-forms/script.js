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