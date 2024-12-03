const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Digite o Salario Bruto: ");
const adcNoturno = leia.questionFloat("Digite o Adicional Noturno: ");
const hExtras = leia.questionFloat("Digite as Horas Extras: ");
const descontos = leia.questionFloat("Digite os Descontos: ");

const salarioLiquido = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(salarioBruto + adcNoturno + hExtras * 5 - descontos);

// Calculando o salário líquido

//let salarioLiquido = salarioBruto + adcNoturno + (hExtras * 5) - descontos;

console.log("\nCalculado do Salário Líquido: ", salarioLiquido);
