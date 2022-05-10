import { CourseRepository } from '@cdn-school/course/domain';
import { CourseEntity } from '../entities/course';

export abstract class CourseDataRepository implements CourseRepository {
  abstract findAll(): CourseEntity[];

  abstract findBy<K extends keyof CourseEntity>(
    property: K,
    value: CourseEntity[K]
  ): CourseEntity;

  abstract create(learn: CourseEntity): CourseEntity;

  abstract update<K extends keyof CourseEntity>(
    property: K,
    value: CourseEntity[K],
    learn: CourseEntity
  ): CourseEntity;

  abstract remove<K extends keyof CourseEntity>(
    property: K,
    value: CourseEntity[K]
  ): CourseEntity;
}
