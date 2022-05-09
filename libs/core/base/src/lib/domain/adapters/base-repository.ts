import { FindDto, FindOneDto, CreateDto, UpdateDto, RemoveDto } from '../dtos';
import { RepositoryDtoMap, RepositoryMethod } from '../../types';
import { Method } from '../../types/method';
import { HttpClient } from '../ports/http-client';
import { Repository } from '../ports/repository';

interface DtoMap<T> extends Record<RepositoryMethod, Method> {
  find(params: FindDto<T>): Promise<T[]>;
  findOne(params: FindOneDto<T>): Promise<T>;
  create(params: CreateDto<T>): Promise<T>;
  update(params: UpdateDto<T>): Promise<T>;
  remove(params: RemoveDto<T>): Promise<T>;
}

export class BaseRepository<T, D extends Record<RepositoryMethod, Method>> implements Repository<T> {
  constructor(
    protected readonly httpClient: HttpClient,
    protected path: string
  ) {}

  find(params: FindDto<T>): Promise<T[]> {
    let url = ''

    if (params) {
      const [propery, operator, value] = params;
      url = `${this.path}?${propery}${operator}${value}`;
    }

    return this.httpClient.get<T[]>(url);
  }

  findOne(params: FindOneDto<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }

  create(params: CreateDto<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }

  update(params: UpdateDto<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }

  remove(params: RemoveDto<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }

  buildParams(params: Record<keyof T, T[keyof T]>): string {
    const param = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      param.append(key, `${value}`);
    });
    return param.toString();
  }
}
