declare const _default: () => {
    port: string | number;
    jwtSecret: string;
    jwtExpiresIn: string;
    database: {
        type: string;
        database: string;
        synchronize: boolean;
    };
};
export default _default;
