// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, 
// onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. 
// Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.

const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("\nESCOLHA UM VETOR: ", vetor);
let numeroDigitado = leia.questionInt("\nDigite um numero inteiro: ");
let posicao = vetor.indexOf(numeroDigitado);


if(posicao !== -1) {
    console.log(`\nO numero ${numeroDigitado} foi encontrado na posicao ${posicao}`);
} else {
    console.log(`\nA posição do ${numeroDigitado}, não foi encontrada!`);
}

