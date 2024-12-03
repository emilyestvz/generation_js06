const leia = require("readline-sync");

let Salario = leia.questionFloat("Digite o seu salario: ");
const abono = leia.questionFloat("Digite o seu abono: ");

// const novoSalario = Salario + abono;

const novoSalario = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(Salario + abono);

console.log("Seu novo salario com o abono incluso é: ", novoSalario);
