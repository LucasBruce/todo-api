import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Todo } from '../../models/todo';
import { response } from 'express';
import { throws } from 'assert';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
      ) {}

      async create(todo: Todo) {
        return this.todoRepository.save(todo);
      }
    
      async findOneById(id: number) {
        const todo = await this.todoRepository.findOne({ where: { id } });
        return todo;
      }
    
      async removeById(id: number) {
        const todo = await this.todoRepository.findOne({ where: { id } });
        await this.todoRepository.remove((todo) as Todo);
      }
    
      async findAll() {
        return this.todoRepository.find();
      }
    
      async update(id: number, todo: Todo) {
        let resultado = this.findOneById(todo.id);
        let isId = (await resultado).id;
        if(isId === null || isId === undefined){
           throw new Error('Entity not found.');
        }
        return this.todoRepository.save(todo);
      }
}
