const leia = require("readline-sync");



console.log("=".repeat(30), "SEU PLANO DE SAÚDE", "=".repeat(30));
let nome = leia.question("\nDigite o seu nome: ");


console.log(`\nOlá, seja bem vindo(a) ${nome}!`);
console.log(`
    \n\tFaixas etarias: 
    \n1 - Idade entre 0 e 10 anos
    \n2 - Idade entre 11 e 29 anos
    \n3 - Idade entre 30 e 45 anos
    \n4 - Idade entre 46 59 anos
    \n5 - Idade entre 60 e 65 anos
    \n6 - Idade acima de 66 anos`);

let faixaEtaria = leia.questionInt("\nQual a faixa etaria? ");
let valor;

switch (faixaEtaria) {
  case 1:
    valor = 100.0;
    break;
  case 2:
    valor = 200.0;
    break;
  case 3:
    valor = 300.0;
    break;
  case 4:
    valor = 500.0;
    break;
  case 5:
    valor = 600.0;
    break;
  case 6:
    valor = 1000.0;
    break;
  default:
    console.log("Faixa etária inválida!");
    process.exit(0);
}

console.log(`\nVocê pagará R$ ${valor.toFixed(2)} reais por ano.`);
