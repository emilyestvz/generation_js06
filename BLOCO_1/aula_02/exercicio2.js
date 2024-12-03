const leia = require("readline-sync");

let nota1 = leia.questionFloat("Digite a primeira nota: ");
let nota2 = leia.questionFloat("Digite a segunda nota: ");
let nota3 = leia.questionFloat("Digite a terceira nota: ");
let nota4 = leia.questionFloat("Digite a quarta nota: ");

calcularMedia = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nSua média final é: ", calcularMedia.toFixed(1));

if (calcularMedia >= 7) {
    console.log("\nParabéns, você foi aprovado! 🤍")
}else {
    console.log("\nVocê foi reprovado. ⚠")
}