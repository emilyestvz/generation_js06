let numOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log('\nListar estados que iniciam com a palavra RIO (Filter): ');

// Includes para buscar a string
let estadosRio: Array<string> = estados.filter(e => e.includes('Rio'));

console.dir(estadosRio); // console.dir: faz uma listagem de dados

// Map gera um novo array, fazendo uma modificação nos dados
console.log('\nListar todos os números multiplicados por 3 (map()): ');

let numerosMultiplicados: Array<number> = numOrdenados.map(n => n * 3);

console.dir(numerosMultiplicados);

// Reduce gera um novo valor, somando todos os elementos do array
console.log('\nListar todos estados sem repetições (reduce()): ')

let estadosSemRepeticao: Array<string> = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if(acumulador.indexOf(estado) === -1)
        acumulador.push(estado);
    return acumulador;
}, []);

// Spread Operator 
console.log('\nCombinação de Arrays');

const arrayCombinado: number[] = [...numOrdenados, ...numerosDesordenados]
console.dir(arrayCombinado);