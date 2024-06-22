let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1

/* Função para gerar um numero secreto de 1 a 10*/
function gerarNumeroSecreto(){
     return parseInt(Math.random() * 10 + 1);
}

/* Função para mudar o texto de uma teg*/
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', "Jogo do Numero Secreto");
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');  
}
exibirMensagemInicial()

/*Função para obter o valor de um componente*/
function obterValor(id){
    let valor = document.getElementById(id);
    return valor.value;
}
function limparCampo(){
    let campo = document.getElementById("campoNum");
    campo.value = '';
}

/* Funcao para fazer a verificação do chute */
function verificarChute(){
    let chute = obterValor('campoNum');

    if (parseInt(chute) === numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns !!! Voçê acertou.');
        exibirTextoNaTela('p', `Voce descobriu o numero secreto  na ${tentativas}ª tentativa.`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        let mensagem = numeroSecreto > chute? `O numero secreto é maior que ${chute}`: `O numero secreto é menor que ${chute}`
        exibirTextoNaTela('h1', `Que pena !!! Voçê errou sua ${tentativas}ª tentativa.`);
        exibirTextoNaTela('p', mensagem)
        limparCampo();
    }
    tentativas++
}

function reniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1
    exibirMensagemInicial()
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}




