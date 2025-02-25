"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const postagem_entity_1 = require("../entities/postagem.entity");
const typeorm_2 = require("typeorm");
let PostagemService = class PostagemService {
    constructor(postagemRepository) {
        this.postagemRepository = postagemRepository;
    }
    async findAll() {
        return await this.postagemRepository.find();
    }
    async findById(id) {
        const postagem = await this.postagemRepository.findOne({ where: { id } });
        if (!postagem)
            throw new common_1.HttpException('Postagem não encontrada!', common_1.HttpStatus.NOT_FOUND);
        return postagem;
    }
    async findByTitulo(titulo) {
        return await this.postagemRepository.find({
            where: {
                titulo: (0, typeorm_2.ILike)(`%${titulo}%`)
            },
        });
    }
    async create(postagem) {
        return await this.postagemRepository.save(postagem);
    }
    async update(postagem) {
        await this.findById(postagem.id);
        return await this.postagemRepository.save(postagem);
    }
    async delete(id) {
        await this.findById(id);
        return await this.postagemRepository.delete(id);
    }
};
exports.PostagemService = PostagemService;
exports.PostagemService = PostagemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(postagem_entity_1.Postagem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostagemService);
//# sourceMappingURL=postagem.service.js.map