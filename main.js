const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

const forcaSenha = document.querySelector(".forca")
forcaSenha.classList.add('media')

let LetrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let LetrasMinuscula = "abcdefghijklmnopqrstuvwxyz"
campoSenha.value = 'sabs21'
let simbolos = "!@#$%&*"

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')

// pega o 1°botao = - 
botoes[0].onclick = diminuir;
// funçao diminuir
function diminuir(){
    if(tamanhoSenha > 0 ){
    // diminui de 1 em 1 e mostra na tela
          tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
geraSenha()
    }
    // checkbox[0]=

  
}

// BOTAO DE AUMENTAR
// pega o 1°botao = +
botoes[1].onclick = AUMENTAR;
// funçao AUMENTAR
function AUMENTAR(){
    if(tamanhoSenha < 20) {
       // aumenta de 1 em 1 e mostra na tela
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
geraSenha() 
    }
    
}

// FUNÇAO DE CRIAR A SENHA ALEATORIA
geraSenha()

function geraSenha() {
    
    let alfabeto = '' 

    //local que verifica qual checkbox foi clicada
    //e adiciona no alfabeto
    if(checkbox[0].checked){
        alfabeto = alfabeto + LetrasMaiusculas
    }
    if(checkbox[1].checked){
        alfabeto = alfabeto + LetrasMinuscula
    }
    if(checkbox[2].checked){
        alfabeto = alfabeto + numeroSenha
    }
    if(checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }

    
    
    
    let senha = ''
    // LOOP - repetições 
    for ( let i = 0; i< tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha += alfabeto[numeroAleatorio]
    }
    campoSenha.value = senha;
    claificarSenha()
}
// FUNÇÃO CLASSSIFICAR SENHA
function claificarSenha(){
    forcaSenha.classList.remove('forte', 'media', 'fraca')
    if (tamanhoSenha > 11  ) {
        forcaSenha.classList.add('forte')

        } else if(tamanhoSenha < 7){
            forcaSenha.classList.add('fraca')
        }else{
            forcaSenha.classList.add('media')
        }

}