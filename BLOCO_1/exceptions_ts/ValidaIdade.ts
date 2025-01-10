// try catch para tratar o erro

import * as readlinesync from 'readline-sync';
let loop: boolean = true;

do {
        try {
                let idade: number = readlinesync.questionInt("\nDigite a idade: ");
                validarIdade(idade);
                loop = false; // sai do loop caso a idade seja valida

        } catch(error: any) {

                //console.error(error.name); é o tipo de erro
                console.error("Ocorreu um erro:", error.message);
        }

} while (loop);

function validarIdade(idade: number): void {
    if (idade >= 18)
        console.log("A pessoa é maior de idade!")
    else 
        throw new Error('A pessoa é menor de idade!'); // error que trava o codigo
}