// // Operadores de Atribuição
// let numOperador = 1;

// console.log("\nAtribuição com soma (numero = numero + 2): ", (numOperador += 2));

// console.log("-*-")

// // Operadores Relacionais: Compara tipo, compara valor

// let numeroStr = "1";
// let numero = 1;

// console.log("\nComparação Igual: ", numeroStr == numero);
// console.log("\nComparação Estritamente igual: ", numeroStr === numero);

// // Operadores Lógicos

const leia = require("readline-sync");

// // Dados usuário
const usuario = "user@email.com";
const senha = "user1234";
const isAdmin = false;
const isGerente = true;
const isBlock = false;

// Validando dados

console.log("\n◽ Tela de Login ◽");

let usuarioLogin = leia.question("Digite o seu usuario: ");
let senhaLogin = leia.question("Digite a sua senha: ", { hideEchoBack: true });

console.log("\nValidando dados...");

if (usuarioLogin === usuario && senhaLogin === senha) {
  var mensagem = "\nSejam bem-vindo(a)! 💜";
} else {
  var mensagem = "\nAcesso negado.";
}

console.log(mensagem);

if (!isBlock) {
  console.log("\nVocê está ativo! ✔");
} else {
  console.log("\nVocê está bloqueado. Contate o Administrator. ");
  process.exit(0);
}

if (isAdmin || isGerente) {
  console.log("\nAcesso ao painel Administrativo liberado! 💻");
} else {
  console.log("\nAcesso ao painel Administrativo negado.");
}
