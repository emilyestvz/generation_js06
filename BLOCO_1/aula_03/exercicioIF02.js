// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo

const leia = require('readline-sync');

console.log("Seja bem vindo(a)!");
let numero = leia.questionInt("\nDigite aqui um numero: ");

if (numero % 2 === 0) {
    console.log(`O ${numero} é um número par.`);
} else {
    console.log(`O ${numero} é um número ímpar.`);
}