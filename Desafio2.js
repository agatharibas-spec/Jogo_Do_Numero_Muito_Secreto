    let diadasemana = prompt("Qual o dia da semana?");
    if (diadasemana == "Sábado" ){
        alert("Bom final de semana!");
    } else if (diadasemana == "Domingo"){
     alert ("Bom final de semana");
    } else{
   alert("Boa Semana!");
    }

 //Exercício 2

 let Numero = prompt("Digite um Número");
 if (Numero > 0){
    alert(`O numero ${Numero} é positivo`);
 } else if (Numero < 0){
    alert(`O numero ${Numero} é negativo`);
 } else {
    alert(`O numero ${Numero} é zero`);
 }

 //Exercicio 3
 let Pontuacao = prompt("Digite a pontuação do jogador: ");
 if (Pontuacao >= 100){
    alert("Parabéns, você venceu! :D");
 } else {
    alert("Tente outra vez.");
 }