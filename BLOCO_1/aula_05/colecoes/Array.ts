import readlinesync = require('readline-sync');

// Criamos a coleção Array vazia
// variavel numero do tipo array, tipada como number 
const numeros: Array<number> = new Array<number>();

// Adicionamos os valores no final da coleção
numeros.push(1);
numeros.push(7);
numeros.push(10);
numeros.push(5);
numeros.push(2, 3);

// Listamos os dados que foram adicionados
for(let numero of numeros){
    console.log(numero);
}

//numeros.push(readlinesync.questionFloat('Digite um numero: '));

// Adiciona um ou mais elementos no inicio da fila
numeros.unshift(2, 4.5, 8, 9);

console.table(numeros);

// Verifica se um determinado elemento existe dentro do array
console.log(`\nExiste o numero 10 no Array?`, numeros.includes(5));

// Verificamos qual é o indice de um elemento
console.log(`\nQual o índice do numero 3 no Array?`, numeros.indexOf(3));

// Remove um ou mais elementos do array
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);