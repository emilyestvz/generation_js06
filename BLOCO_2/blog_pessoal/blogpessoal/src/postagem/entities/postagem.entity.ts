// Classe model
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' }) // create table tb_postagens
export class Postagem {
  // Definição dos campos da tabela tb_postagens
  @PrimaryGeneratedColumn() // create column id INT AUTO_INCREMENT PRIMARY KEY
  id: number;

  @IsNotEmpty() // não pode ser vazio - validação dos dados do objeto
  @Column({ length: 100, nullable: false }) // create column titulo VARCHAR(255)
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false }) // create column texto TEXT
  texto: string;

  @UpdateDateColumn() // create column data DATE NOT NULL
  data: Date;
}
