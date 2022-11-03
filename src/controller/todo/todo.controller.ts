import { Controller,
                Get,
                Post,
                Body,
                Param,
                Delete,
                Put,
                } from '@nestjs/common';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo/todo.service';
import { Response } from 'express';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    create(@Body() todo: Todo) {
      return this.todoService.create(todo);
    }
  
    @Get()
    findAll() {
      return this.todoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.todoService.findOneById(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() todo: Todo) {
      return this.todoService.update(+id, todo);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.todoService.removeById(+id);
    }
}
