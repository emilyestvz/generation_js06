// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

const leia = require('readline-sync');

let numero;
let soma = 0;

console.log("Olá, seja bem vindo(a)!");

do {
    numero = leia.questionInt("\nDigite um numero inteiro (0 para sair): ");

    if (numero > 0)
        soma += numero;

} while (numero !== 0)

console.log(`A soma dos números positivos digitados é ${soma}`);
