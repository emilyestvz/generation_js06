export abstract class Pessoa{

    //atributos
    private _nome: string;


	constructor(nome: string) {
		this._nome = nome;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    //métodos
    //assinatura: definição do método, sem parametros.
    abstract cansou(): void;

    public visualizar(){
        console.log('=====================================');
        console.log(`\nDADOS DO ATLETA:
            \nNome: ${this._nome}`);
        console.log('=====================================');
    }

}