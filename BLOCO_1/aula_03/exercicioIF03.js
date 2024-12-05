// Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean).

const leia = require("readline-sync");

let nomeDoador = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a sua idade: ");

let pergunta = leia.keyInYNStrict("Ja fez outras doacoes de sangue? ");

if (idade <= 17 || idade >= 70) {
  console.log("\nDoador não apto para fazer doações.");

} else if (idade >= 60) {
  let sim = true;
  let nao = false;

  if (pergunta === sim) {
    console.log(`\n${nomeDoador} está apto(a) para doar sangue!`);
  } else if (pergunta == nao) {
    console.log(`\n${nomeDoador} não está apto(a) para doar sangue!`);
  } else {
    console.log("Opção inválida!");
    process.exit(0);
  }

} else {
  console.log(`\n${nomeDoador} está apto(a) para doar sangue!`);
}
