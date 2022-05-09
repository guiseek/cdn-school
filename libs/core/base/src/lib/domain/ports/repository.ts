import { CreateDto, FindDto, FindOneDto, RemoveDto, UpdateDto } from '../dtos';

export abstract class Repository<T> {
  abstract find(params: FindDto<T>): Promise<T[]>;

  abstract findOne(params: FindOneDto<T>): Promise<T>;

  abstract create(params: CreateDto<T>): Promise<T>;

  abstract update(params: UpdateDto<T>): Promise<T>;

  abstract remove(params: RemoveDto<T>): Promise<T>;
}
