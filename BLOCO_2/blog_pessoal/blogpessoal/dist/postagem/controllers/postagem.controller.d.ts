import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
export declare class PostagemController {
    private readonly postagemService;
    constructor(postagemService: PostagemService);
    findall(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    findByTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
