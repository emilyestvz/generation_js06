/*
var n1; global/antigo
let n2; recomendada

const - valores que não mudam
let - valores que mudam
var - nao usar
*/

//Declarando variáveis

const leia = require('readline-sync') //Importante a biblioteca

let n1, n2;


n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

//console.log('\nA variável n1 possui o valor: ', n1);
//console.log('A variável n2 possui o valor: ', n2);

//soma = n1 + n2; 

console.log('\nA Soma de n1 e n2 é: ', n1 + n2);
console.log('\nA Subtração de n1 e n2 é: ', n1 - n2);
console.log('\nA Multiplicação de n1 e n2 é: ', n1 * n2);
console.log('\nA Divisão de n1 e n2 é: ', n1 / n2);
console.log('\nA Potenciação de n1 e n2 é: ', Math.pow(n1, n2));
console.log('\nA Raiz Quadrada de n1: ', Math.sqrt(n1));

