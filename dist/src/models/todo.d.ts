import { BaseEntity } from 'typeorm';
export declare class Todo extends BaseEntity {
    id: number;
    title?: string;
    message: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
