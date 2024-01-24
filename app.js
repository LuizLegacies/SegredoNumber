    let listaDeNumerosSorteados=[];
    let numeroLimite=10
    let numeroSecreto = gerarNumeroAleatorio()
    let tentativas = 1 

    function exibirTextoNaTela (tag , texto){
        let campo = document.querySelector(tag);
        campo.innerHTML=texto;
        responsiveVoice.speak(texto ,'Brazilian Portuguese Female')
    }
    function exibirInicial() {
        exibirTextoNaTela('h1', 'O Número Secreto');
        exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10 ');

    }
    exibirInicial();


    function verificarChute() {
        let chute = document.querySelector(`input`).value
    if ( numeroSecreto ==  chute) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavratentativa = tentativas > 1 ? 'tentativas':'tentativa'
        let mensagemTentativas = ` Você descobriu o número secreto com ${tentativas} ${palavratentativa} `;
        exibirTextoNaTela( 'p',mensagemTentativas);
    } else
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'o numero secreto é menor')
        }else{
                exibirTextoNaTela ('p', 'o numero secreto é maior ')
                document.getElementById('reiniciar').removeAttribute('disabled')
            }
            tentativas++
            limparCampo()
    }

    function gerarNumeroAleatorio (){
        let numeroEscolhido = parseInt(Math.random() * numeroLimite+ 1 )
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if(quantidadeDeElementosNaLista == numeroLimite){
            listaDeNumerosSorteados = []
        }



        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
        }else {
            listaDeNumerosSorteados.push(numeroEscolhido)
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
    }

    function limparCampo (){
        chute = document.querySelector('input')
        chute.value ='';
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas =1;
        exibirInicial()
        document.getElementById('reiniciar').setAttribute('disabled',true)
    }
    