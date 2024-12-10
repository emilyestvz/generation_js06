import readlinesync = require('readline-sync');
import {colors} from "./../util/cores"

let numero1: number;
let numero2: number;
let opcao: number;

do {

    menu();

    opcao = Number(readlinesync.questionInt('Digite a operacao desejada: '));

    if (opcao === 0) {
        about();
        process.exit(0);
    }

    switch (opcao) {
        case 1: 
            //desestruturação do objeto
            [numero1, numero2] = obterNumeros();
            console.log(`\n${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
        break;

        case 2: 
            [numero1, numero2] = obterNumeros();
            console.log(`\n${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)
        break;

        case 3: 
            [numero1, numero2] = obterNumeros();
            console.log(`\n${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`)
        break;

        case 4: 
            [numero1, numero2] = obterNumeros();
            let resultado = dividir(numero1, numero2)
            
            if (resultado!== null) {
                console.log(`\n${numero1} / ${numero2} = ${resultado.toFixed(2)}`)
            } else {
                console.log('\nNão é possível realizar a divisão por zero!')
            }
        break;

        default:
            console.log('\nOpção inválida!');
            break;
    }
} while (true);

function menu(): void{
    console.log(colors.fg.gray, `#=`.repeat(20));
    console.log(`\t\tCalculadora
        \n\t\t1 - SOMAR
        \n\t\t2- SUBTRAIR
        \n\t\t3 - MULTIPLICAR
        \n\t\t4 - DIVIDIR
        \n\t\t0 - SAIR`);
    console.log(`#=`.repeat(20), colors.reset);
}

function obterNumeros(): [number, number] {
    const numero1 = readlinesync.questionFloat('\nDigite o primeiro numero: ');
    const numero2 = readlinesync.questionFloat('\nDigite o segundo numero: ');
    return [numero1, numero2];
}

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
};

function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
};

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
};

function dividir(numero1: number, numero2: number): number | null {
    let divisao = numero1 / numero2;
    return (divisao !== Infinity ? divisao : null); //if ternario
};

function about() {
    console.log(`\nCriado por Emily`);
    console.log(`#=`.repeat(20));
}