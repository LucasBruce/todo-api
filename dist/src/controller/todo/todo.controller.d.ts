import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo/todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(todo: Todo): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    update(id: string, todo: Todo): Promise<Todo>;
    remove(id: string): Promise<void>;
}
