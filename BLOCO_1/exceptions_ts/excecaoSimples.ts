
export class ExcecaoSimples extends Error{

    constructor(message: string) {
        super(message);
        this.name = "ExcecaoSimples";
        this.message = message;
    }
}