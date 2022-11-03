import { Model } from "sequelize-typescript";
declare class User extends Model {
    name?: string;
    password: string;
    userName: string;
    active: boolean;
    toJSON<User>(): User;
}
export default User;
