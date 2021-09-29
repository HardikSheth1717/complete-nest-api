import { DeleteResult } from "typeorm";

export interface BaseRepositoryInterface<T> {
    getOne(id: number): Promise<T>;

    getAll(): Promise<T[]>;

    filter(condition: any): Promise<T[]>;

    save(data: T | any): Promise<T>;
    
    delete(id: number): Promise<DeleteResult>;
}