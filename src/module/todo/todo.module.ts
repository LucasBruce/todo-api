import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from '../../controller/todo/todo.controller';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo/todo.service';

@Module({
    controllers: [TodoController],
    providers: [TodoService],
    imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
