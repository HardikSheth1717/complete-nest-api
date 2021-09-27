import { DeleteResult, Repository } from 'typeorm';
import { BaseInterfaceRepository } from './interface/base.interface';

export abstract class BaseRepository<T> implements BaseInterfaceRepository<T> {
    private repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async GetOne(id: number): Promise<T> {
        return await this.repository.findOne(id);
    }
    
    async GetAll(): Promise<T[]> {
        return await this.repository.find();
    }
    
    async Filter(condition: any): Promise<T[]> {
        return await this.repository.find({
            where: condition
        });
    }
    
    async create(data: T | any): Promise<T> {
        return await this.repository.save(data);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }
}