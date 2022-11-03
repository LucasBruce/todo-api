import { Repository } from 'typeorm';
import { Todo } from '../../models/todo';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    create(todo: Todo): Promise<Todo>;
    findOneById(id: number): Promise<Todo>;
    removeById(id: number): Promise<void>;
    findAll(): Promise<Todo[]>;
    update(id: number, todo: Todo): Promise<Todo>;
}
