import { ArrayOperatorParam, ArrayParam } from '@cdn-school/core/base';
import { FindAllCoursesDto } from '../dtos/find-all-courses';
import { CourseEntity } from '../entities/course';

export abstract class CourseRepository<T extends CourseEntity = CourseEntity> {
  abstract findAll(params: FindAllCoursesDto): Promise<T[]>;

  abstract findBy([property, value]: ArrayParam<T>): Promise<T>;

  abstract create(course: T): Promise<T>;

  abstract update([[property, value], course]: [ArrayParam<T>, T]): Promise<T>;

  abstract batch(
    [property, operator, value]: ArrayOperatorParam<T>,
    course: T
  ): Promise<T>;

  abstract remove([property, value]: ArrayParam<T>): Promise<T>;
}
