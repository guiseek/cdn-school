import { ArrayParam, UseCase } from '@cdn-school/core/base';
import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class UpdateCourseUseCase
  implements
    UseCase<[ArrayParam<CourseEntity>, CourseEntity], Promise<CourseEntity>>
{
  constructor(private readonly _repository: CourseRepository) {}

  execute([[property, value], course]: [
    ArrayParam<CourseEntity>,
    CourseEntity
  ]) {
    return this._repository.update([[property, value], course]);
  }
}
