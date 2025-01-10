const leia = require('readline-sync');

//linhas da matriz
let matrizInt = new Array(2);

// Colunas da matriz
for (let indice = 0; indice < matrizInt.length; indice++){
    matrizInt[indice] = Array(3);
}

// Percorrendo a matriz e preenchendo dados
for(let indiceLinha = 0; indiceLinha < matrizInt.length; indiceLinha++) {
    for(let indiceColuna = 0; indiceColuna < matrizInt[indiceLinha].length; indiceColuna++) {
        matrizInt[indiceLinha][indiceColuna] = leia.questionInt('Digite um numero: ');
    }
}

// visualizando a matriz e preenchendo dados
console.table(matrizInt);
//console.log(matrizInt[0].length);
//console.log(matrizInt[1].length);