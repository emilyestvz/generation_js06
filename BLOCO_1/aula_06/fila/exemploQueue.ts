/*Uma Fila é uma estrutura de dados do tipo FIFO: 
"o primeiro elemento que entra é o primeiro elemento que sai" (first in, first out). */

import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

// ENQUEUE para inserir dados por ordem em FIFO (fila)
fila.enqueue("Emily");
fila.enqueue("Alana");
fila.enqueue("Beatriz");


//fila.enqueue(readlinesync.question("Digite o seu nome: "));

fila.printQueue(); //imprimir no terminal


// CONTAINS para saber se existe o elemento
console.log(fila.contains("Alana"));


// COUNT para contar quantos tem na fila
console.log(fila.count());


// DEQUEUE para remover dados por ordem
console.log("\nChamar: ", fila.dequeue());
fila.printQueue(); 


// PEEK para ver o primeiro item da fila
console.log(fila.peek());


// CLEAR para limpar a fila
fila.clear();
fila.printQueue();