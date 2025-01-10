/* Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, 
para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:

1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia. */ 

import readlinesync = require('readline-sync');
import { Stack } from './Stack';

const pilhaLivros = new Stack<string>();
let opcao: number;

do {

    console.log(`=#=`.repeat(20));
    console.log(`
        \t1 - Adicionar um novo livro
        \t2 - Listar todos os livros 
        \t3 - Retirar um livro 
        \t0 - Sair
        `)
    console.log(`=#=`.repeat(20));
    
    opcao = Number(readlinesync.question('\n- Digite a opcao desejada: '));

    if(opcao === 1) {
        let novoLivro = readlinesync.question('\n- Digite o nome do livro: ');
        pilhaLivros.push(novoLivro);
            
        console.log(`\n📌 Livro "${novoLivro}" adicionado com sucesso!`);
            
    } else if(opcao === 2) {
        console.log('\n🔎 Listagem de livros: ');
        pilhaLivros.printStack();
    
    } else if(opcao === 3) {
        console.log("\n📕 Retirada do livro: ", pilhaLivros.pop());
        pilhaLivros.printStack();

        if(pilhaLivros.isEmpty()) {
            console.log("\nn📚 A fila está vazia!");
        }

    } else if (opcao === 0) {
        console.log("\n📚 Saindo do programa...");
    break;
    }

    else {
        console.log("\nn📚 Opção inválida!");
    }
} while (opcao!== 0);
