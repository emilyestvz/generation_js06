
export class Transporte {

    private _capacidade:number;

	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}


    // métodos getters e setters
	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar(){
        console.log('=====================================');
        console.log(`\nDADOS DO TRANSPORTE:
            \nCapacidade do meio de transporte: ${this._capacidade}`);
        console.log('=====================================');
    }
}