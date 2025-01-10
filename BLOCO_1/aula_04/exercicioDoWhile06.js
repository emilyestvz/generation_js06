// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
// Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3.

const leia = require('readline-sync');

let soma = 0;
let contador = 0;
let numero;

console.log("Olá, seja bem vindo(a)!");

do {
    numero = leia.questionInt("\nDigite um numero (zero para sair): ");

    if(numero !== 0 && numero % 3 === 0)
        soma += numero; // adiciona o número à soma se for múltiplo de 3
        contador++;     // incrementa o contador


} while(numero !== 0);

if(contador > 0) {
    const media = soma / contador;
    console.log(`A média dos números multiplos de 3 é: ${media.toFixed(2)}`); 
} else {
    console.log("Nenhum número múltiplo de 3 foi digitado.");
}
