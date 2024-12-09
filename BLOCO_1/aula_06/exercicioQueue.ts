/*Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
 */

import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();
let opcao: number;


do { 

    console.log(`=#=`.repeat(20));
    console.log(`
        \t1 - Adicionar Cliente na fila
        \t2 - Listar todos os Clientes
        \t3 - Chamar (retirar) um Cliente da fila
        \t0 - Sair
        `)
    console.log(`=#=`.repeat(20));

    opcao = Number(readlinesync.question('\nDigite a opcao desejada: '));


    if(opcao === 1) {
        const nome = readlinesync.question('\nDigite o seu nome: ');

        fila.enqueue(nome);
        console.log(`\nPaciente ${nome} adicionado com sucesso!`);

    } else if(opcao === 2) {
        console.log(`\nPacientes na fila de espera: `);
            fila.printQueue();

    } else if(opcao === 3) {
        console.log("\nDIRIJA-SE AO BALCÃO: ", fila.dequeue())
        fila.printQueue();

        if(fila.isEmpty()) {
            console.log("\nA fila está vazia!");
        }

    } else if (opcao === 0) {
        console.log('Programa encerrado!');
        break;
    }
} while (opcao !== 0);