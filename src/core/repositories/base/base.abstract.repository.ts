import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { BaseRepositoryInterface } from './interface/base.repository.interface';

export abstract class BaseAbstractRepository<T>
  implements BaseRepositoryInterface<T>
{
  private repository: Repository<T>;

  protected constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async getOne(id: number): Promise<T> {
    try {
      return this.repository.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  async findByCondition(condition: FindOneOptions): Promise<T> {
    try {
      return this.repository.findOne(condition);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<T[]> {
    try {
      return this.repository.find();
    } catch (error) {
      throw error;
    }
  }

  async filter(condition: FindManyOptions): Promise<T[]> {
    try {
      return this.repository.find(condition);
    } catch (error) {
      throw error;
    }
  }

  async save(data: T | any): Promise<T> {
    try {
      return this.repository.save(data);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<DeleteResult> {
    try {
      return this.repository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
