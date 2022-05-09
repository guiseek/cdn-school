import { StudentEntity } from '../entities/student';

export abstract class StudentRepository<T extends StudentEntity> {
  abstract findAll(): T[];

  abstract findBy<K extends keyof T>(property: K, value: T[K]): T;

  abstract create(student: T): T;

  abstract update<K extends keyof T>(property: K, value: T[K], student: T): T;

  abstract remove<K extends keyof T>(property: K, value: T[K]): T;
}
