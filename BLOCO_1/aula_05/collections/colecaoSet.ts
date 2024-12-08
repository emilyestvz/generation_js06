// Um Set é uma coleção de valores únicos, sem duplicatas, e sem ordem específica.

// Cria um novo Set vazio para armazenar strings (nomes de frutas).

const frutas: Set<string> = new Set<string>();

frutas.add('apple');
frutas.add('maçã');
frutas.add('caqui');
frutas.add('banana');
frutas.add('manga');

console.table(frutas);

// Retorna true se o elemento existir, false caso contrário.
console.log(`A fruta morango existe? `, frutas.has('morango'));

// Removendo elemento
frutas.delete('caqui');
console.table(frutas);

//Converte o Set para um Array - Ordena os elementos alfabeticamente.
let setOrdenado: Array<string> = Array.from(frutas).sort();
console.table(setOrdenado);