import User from '../models/User';
interface JWTPayload {
    id: number;
    userName: string;
}
declare class AuthService {
    private secret;
    createJWT(user: User): string;
    login(userName: string, password: string): Promise<string>;
    validate(token: string): JWTPayload;
}
declare const _default: AuthService;
export default _default;
