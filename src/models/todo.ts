import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
  } from 'typeorm';

@Entity()
export class Todo extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    title?:string;
    
    @Column()
    message!:string;

    @Column()
    active!:boolean;

    @CreateDateColumn()
    createdAt!:Date;

    @CreateDateColumn()
    updatedAt!:Date;
}
