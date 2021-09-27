import { DeleteResult } from "typeorm";

export interface BaseInterfaceRepository<T> {
    GetOne(id: number): Promise<T>;

    GetAll(): Promise<T[]>;

    Filter(condition: any): Promise<T[]>;

    create(data: T | any): Promise<T>;
    
    delete(id: number): Promise<DeleteResult>;
}