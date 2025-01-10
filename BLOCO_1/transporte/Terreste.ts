import { Transporte } from "./Transporte";

//criando uma herença: classe Terrestre herdou de Transporte
export class Terrestre extends Transporte{

    // atributos 
    private _numeroRodas: number;
    private _velocidade: number;

    // construtor - adicionar os parametros da classe anterior
	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
        super(capacidade);      // enviando o parametro (ele chama o construtor da super classe)
		this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

	public get numeroRodas(): number {
		return this._numeroRodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}

	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

    public visualizar(){
        super.visualizar();  // chamando o método da superclasse
        console.log(`\nNúmero de rodas: ${this._numeroRodas}
            \nVelocidade: ${this._velocidade}`);
    }

}