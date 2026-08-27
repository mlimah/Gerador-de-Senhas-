const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'sabs21'


tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')

// pega o 1°botao = - 
botoes[0].onclick = diminuir;
// funçao diminuir
function diminuir(){
    // diminui de 1 em 1 e mostra na tela
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
}

// BOTAO DE AUMENTAR
// pega o 1°botao = +
botoes[1].onclick = AUMENTAR;
// funçao AUMENTAR
function AUMENTAR(){
    // aumenta de 1 em 1 e mostra na tela
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
}