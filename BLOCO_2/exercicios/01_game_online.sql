drop database db_generation_game_online;

create database db_generation_game_online;
use db_generation_game_online;

create table tb_classes(
	id_classe bigint auto_increment,
    tipo_classe varchar(50) not null,
    descricao varchar(255),
    primary key(id_classe)
);

create table tb_personagens(
	id_personagem bigint auto_increment primary key,
    nome varchar(255) not null,
    poder_atq int not null,
    poder_def int not null,
    nivel int not null, 
    id_classe bigint,
    foreign key (id_classe) references tb_classes(id_classe)
);

insert into tb_classes (tipo_classe, descricao) values
('Guerreiro', 'Especialista em combate corpo a corpo'),
('Mago', 'Usuário de magia poderosa'),
('Arqueiro', 'Especialista em ataques à distância com arco e flecha'),
('Assassino', 'Especialista em ataques furtivos e críticos'),
('Paladino', 'Guerreiro com habilidades de cura e defesa');

SELECT * FROM tb_personagens;
select * from tb_classes;

insert into tb_personagens (nome, poder_atq, poder_def, nivel, id_classe) VALUES
('Thorin', 2500, 1500, 10, 1),
('Eldrin', 1800, 1200, 8, 3),
('Merlin', 3000, 800, 12, 2),
('Cassandra', 2200, 1300, 9, 4),
('Baldur', 1700, 2000, 7, 5),
('Cypher', 2100, 900, 11, 4),
('Artemis', 2600, 1400, 10, 3),
('Lancelot', 2400, 1700, 11, 1);

-- visualizando poder de ataque maior q 2000
select * from tb_personagens where poder_atq >= 2000;

-- visualizando poder de defesa entre 1000 e 2000
select * from tb_personagens where poder_def between 1000 and 2000;

-- visualizando personagens com nome que contenha letra 'C'
select * from tb_personagens where nome like '%C%';

-- inner join para unir as duas tabelas
select * from tb_personagens inner join tb_classes on tb_personagens.id_classe = tb_classes.id_classe;

-- inner join para seleção de personagens de uma classe específica
select * from tb_personagens inner join tb_classes 
on tb_personagens.id_classe = tb_classes.id_classe 
where tb_personagens.id_classe = 4;



