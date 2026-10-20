alert('Bem vindo ao jogo do numero secreto')
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt("Digite seu chute entre 1 a 10");

if (chute == numeroSecreto){
    // alert('Você acertou! O numero secreto realmente é ${numeroSecreto}');
} else {
     alert ('Você errou :c ! Seu chute foi ${chute} e o número Secreto é ${numeroSecreto}');
}