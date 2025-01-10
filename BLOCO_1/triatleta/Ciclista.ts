import { Atleta } from "./Atleta";

// herdou de atleta (atleta herdou de pessoa)
export interface Ciclista extends Atleta{
    pedalar(): void;
}