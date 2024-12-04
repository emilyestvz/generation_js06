// Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal,
//segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

const leia = require("readline-sync");

console.log("=".repeat(30), "JOGO DO BICHO", "=".repeat(30));

let primeiraPalavra = leia.question(
  "\nEscolha entre Vertebrado ou Invertebrado: "
);

if (primeiraPalavra === "vertebrado" || primeiraPalavra === "Vertebrado") {
  let segundaPalavra = leia.question("\nAgora escolha entre Ave ou Mamifero: ");

  if (segundaPalavra === "Ave" || segundaPalavra === "ave") {
    let terceiraPalavra = leia.question(
      "\nE depois entre Carnivoro ou Onivoro: "
    );

    if (terceiraPalavra === "Carnivoro" || terceiraPalavra === "carnivoro") {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Águia 🦅 ");
    } else if (segundaPalavra === "Onivoro" || segundaPalavra === "onivoro") {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Pomba 🕊");
    } else {
      console.log("\nVocê não escolheu uma opção válida. Tente novamente.");
    }
  }

  if (segundaPalavra === "Mamifero" || segundaPalavra === "mamifero") {
    let terceiraPalavra = leia.question(
      "\nE depois entre Onivoro ou Herbivoro: "
    );

    if (terceiraPalavra === "Onivoro" || terceiraPalavra === "onivoro") {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Homem 👨🏻 ");
    } else if (
      terceiraPalavra === "Herbivoro" ||
      terceiraPalavra === "herbivoro"
    ) {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Vaca 🐄");
    } else {
      console.log("\nVocê não escolheu uma opção válida. Tente novamente.");
    }
  }
}

if (primeiraPalavra === "Invertebrado" || primeiraPalavra === "invertebrado") {
  let segundaPalavra = leia.question(
    "\nAgora escolha entre Inseto ou Anelideo: "
  );

  if (segundaPalavra === "Inseto" || segundaPalavra === "inseto") {
    let terceiraPalavra = leia.question(
      "\nE depois entre Hematofago ou Herbivoro: "
    );

    if (terceiraPalavra === "Hematofago" || terceiraPalavra === "hematofago") {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Pulga");
    } else if (
      segundaPalavra === "Herbivoro" ||
      segundaPalavra === "herbivoro"
    ) {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Largata 🐛");
    } else {
      console.log("\nVocê não escolheu uma opção válida. Tente novamente.");
    }
  }

  if (segundaPalavra === "Anelideo" || segundaPalavra === "anelideo") {
    let terceiraPalavra = leia.question(
      "\nE depois entre Hematofago ou Onivoro: "
    );

    if (terceiraPalavra === "Hematofago" || terceiraPalavra === "hematofago") {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Sanguessuga");
    } else if (terceiraPalavra === "Onivoro" || terceiraPalavra === "onivoro") {
      console.log("\n✨ Parabéns você acertou! ✨\nAnimal: Minhoca 🐛");
    } else {
      console.log("\nVocê não escolheu uma opção válida. Tente novamente.");
    }
  }
}
