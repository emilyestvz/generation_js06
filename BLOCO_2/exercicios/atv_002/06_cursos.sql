create database db_curso_da_minha_vida;
use db_curso_da_minha_vida;

create table tb_categorias(
	id_categoria bigint auto_increment primary key,
    categoria varchar(255) not null,
    desc_categoria TEXT
);

create table tb_cursos(
	id_curso bigint auto_increment primary key,
    nome varchar(255) not null,
    carga_horaria int not null,
    desc_curso TEXT not null,
    valor decimal(10,2) not null,
    id_categoria bigint not null,
    foreign key (id_categoria) references tb_categorias(id_categoria)
);

insert into tb_categorias (categoria, desc_categoria) values
('Tecnologia', 'Cursos relacionados a programação, redes e informática'),
('Idiomas', 'Cursos para aprender novos idiomas e melhorar a comunicação'),
('Negócios', 'Cursos para gestão, marketing e empreendedorismo'),
('Saúde', 'Cursos voltados para a área de saúde e bem-estar'),
('Artes', 'Cursos de música, pintura e outras artes visuais');

insert into tb_cursos (nome, desc_curso, carga_horaria, valor, id_categoria) values
('Introdução à Programação', 'Aprenda os fundamentos da programação', 40, 199.90, 1),
('Desenvolvimento Web', 'Crie websites com HTML, CSS e JavaScript', 60, 299.90, 1),
('Curso de Inglês Básico', 'Domine o inglês básico em 3 meses', 50, 149.90, 2),
('Espanhol para Viagem', 'Aprenda frases essenciais para viagens', 20, 99.90, 2),
('Gestão de Projetos', 'Gerencie projetos de forma eficaz', 80, 399.90, 3),
('Marketing Digital', 'Técnicas para promover negócios online', 45, 249.90, 3),
('Primeiros Socorros', 'Aprenda a lidar com emergências médicas', 30, 179.90, 4),
('Pintura em Aquarela', 'Desenvolva suas habilidades de pintura', 25, 129.90, 5);

select * from tb_categorias;
select * from tb_cursos;

drop table tb_cursos;

select * from tb_cursos where valor > 500.00;

select * from tb_cursos where valor between 600.00 and 1000.00;

select * from tb_cursos where nome like '%j%';

select
    id_curso,
    nome,
    valor,
    carga_horaria,
    desc_curso,
    categoria,
    desc_categoria
from tb_cursos inner join tb_categorias on tb_cursos.id_categoria = tb_categorias.id_categoria;

select * from tb_cursos inner join tb_categorias on tb_cursos.id_categoria = tb_categorias.id_categoria where tb_cursos.id_categoria =1;


