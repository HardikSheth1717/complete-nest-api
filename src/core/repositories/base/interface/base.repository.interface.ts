import { DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm';

export interface BaseRepositoryInterface<T> {
  getOne(id: number): Promise<T>;

  findByCondition(condition: FindOneOptions): Promise<T>;

  getAll(): Promise<T[]>;

  filter(condition: FindManyOptions): Promise<T[]>;

  save(data: T | any): Promise<T>;

  delete(id: number): Promise<DeleteResult>;
}
