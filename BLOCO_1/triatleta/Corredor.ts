import { Atleta } from "./Atleta";

// herdou de atleta (atleta herdou de pessoa)
export interface Corredor extends Atleta{
    correr(): void;
}