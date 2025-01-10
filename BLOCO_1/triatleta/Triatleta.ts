import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

// classe concreta, ela é uma subclasse de pessoa e implementar Ciclista, nadador e corredor
export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor {

	constructor(nome:string) {
        super(nome);

    }

    //metodos das classes implementadas
    aquecer(): void {
        console.log('Aquecendo...');
    }
    
    pedalar(): void {
        console.log('Pedalando...');
    }

    nadar(): void {
        console.log('Nadando...');
    }

    correr(): void {
        console.log('Correndo...');
    }

    cansou(): void {
        console.log('Cansou...');
    }
}