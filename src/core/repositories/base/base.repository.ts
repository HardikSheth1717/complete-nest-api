import { DeleteResult, Repository } from 'typeorm';
import { BaseRepositoryInterface } from './interface/base.repository.interface';

export abstract class BaseAbstractRepository<T> implements BaseRepositoryInterface<T> {
    private repository: Repository<T>;

    protected constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async getOne(id: number): Promise<T> {
        return await this.repository.findOne(id);
    }
    
    async getAll(): Promise<T[]> {
        return await this.repository.find();
    }
    
    async filter(condition: any): Promise<T[]> {
        return await this.repository.find({
            where: condition
        });
    }
    
    async save(data: T | any): Promise<T> {
        return await this.repository.save(data);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }
}