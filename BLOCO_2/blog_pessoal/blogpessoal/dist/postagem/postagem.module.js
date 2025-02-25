"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const postagem_entity_1 = require("./entities/postagem.entity");
const postagem_controller_1 = require("./controllers/postagem.controller");
const postagem_service_1 = require("./services/postagem.service");
let PostagemModule = class PostagemModule {
};
exports.PostagemModule = PostagemModule;
exports.PostagemModule = PostagemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([postagem_entity_1.Postagem])],
        controllers: [postagem_controller_1.PostagemController],
        providers: [postagem_service_1.PostagemService],
        exports: [typeorm_1.TypeOrmModule],
    })
], PostagemModule);
//# sourceMappingURL=postagem.module.js.map