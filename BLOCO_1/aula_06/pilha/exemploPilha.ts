/*Uma Pilha é uma estrutura de dados do tipo LIFO: 
"O último elemento inserido na pilha é o primeiro elemento que será retirado da pilha." (Last In - First Out).  */

import { Stack } from './Stack';

const pilha = new Stack<string>();

pilha.push('prato azul');
pilha.push('prato verde');
pilha.push('prato vermelho');

pilha.printStack();


// se o elemento existe
console.log(pilha.contains('prato branco'));


// retira o último elemento que foi inserido
pilha.pop();
pilha.printStack();