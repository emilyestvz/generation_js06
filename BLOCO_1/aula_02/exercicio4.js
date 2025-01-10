// Elabore um algoritmo que leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre n1 e n2 pelo produto entre n3 e o n4.

const leia = require("readline-sync");

let n1 = leia.question("Digite o primeiro numero: ");

let n2 = leia.question("Digite o segundo numero: ");

let n3 = leia.question("Digite o terceiro numero: ");

let n4 = leia.question("Digite o quarto numero: ");

let produtoN1N2 = n1 * n2;

let produtoN3N4 = n3 * n4;

let diferenca = produtoN1N2 - produtoN3N4;

console.log(
  `\nA diferença entre ${produtoN1N2} e ${produtoN3N4} é de ${diferenca}!`
);
