// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let A = parseInt(leia.question('Digite o primeiro numero: '));
let B = parseInt(leia.question('Digite o segundo numero: '));
let C = parseInt(leia.question('Digite o terceiro numero: '));

let somaAB = A + B;

if (somaAB > C) {  
    console.log('A soma de A + B é maior que C.');
} else if (somaAB < C) {
    console.log('A soma de A + B é menor que C.');
} else {
    console.log('A soma de A + B é igual a C.');
}