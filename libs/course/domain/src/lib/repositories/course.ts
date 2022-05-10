import { CourseEntity } from '../entities/course';

export abstract class CourseRepository<T extends CourseEntity = CourseEntity> {
  abstract findAll(): T[];

  abstract findBy<K extends keyof T>(property: K, value: T[K]): T;

  abstract create(learn: T): T;

  abstract update<K extends keyof T>(property: K, value: T[K], learn: T): T;

  abstract remove<K extends keyof T>(property: K, value: T[K]): T;
}
