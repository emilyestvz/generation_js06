

const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let pares = 0, impares = 0, soma;


console.log("\nESCOLHA UM VETOR: ", vetor);
//let numeroDigitado = leia.questionInt("\nDigite um numero inteiro: ");
//let posicao = vetor.indexOf(numeroDigitado);

for (let numero = 0; numero < 10; numero++) {
    
    if (vetor % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }

    soma += vetor;
    // Calcular média
    let media = soma / vetor;

    vetor++; // incrementa o vetor para próxima iteração


    

}

console.log(`\nTotal de número pares: ${pares}
            \nTotal de impares: ${impares}
            \nSoma dos números: ${soma}
            \nMédia dos números: ${media}`);

        