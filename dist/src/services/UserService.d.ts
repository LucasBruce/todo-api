import User from '../models/User';
export interface UserRequest {
    userName: string;
    name: string;
    active?: boolean;
    password: string;
}
declare class UserService {
    findById(id?: string | number | undefined): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number | string, userRequest: UserRequest): Promise<User>;
    create(userRequest: UserRequest): Promise<User>;
}
declare const _default: UserService;
export default _default;
