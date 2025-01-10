import { Atleta } from "./Atleta";

// herdou de atleta (atleta herdou de pessoa)
export interface Nadador extends Atleta{
    nadar(): void;
}