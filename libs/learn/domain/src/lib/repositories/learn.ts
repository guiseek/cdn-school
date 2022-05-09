import { LearnEntity } from '../entities/learn';

export abstract class LearnRepository<T extends LearnEntity = LearnEntity> {
  abstract findAll(): T[];

  abstract findBy<K extends keyof T>(property: K, value: T[K]): T;

  abstract create(learn: T): T;

  abstract update<K extends keyof T>(property: K, value: T[K], learn: T): T;

  abstract remove<K extends keyof T>(property: K, value: T[K]): T;
}
