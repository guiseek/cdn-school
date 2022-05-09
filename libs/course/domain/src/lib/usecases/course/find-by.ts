import { ArrayParam, UseCase } from '@cdn-school/core/base';
import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class FindCourseByUseCase
  implements UseCase<ArrayParam<CourseEntity>, Promise<CourseEntity>>
{
  constructor(private readonly _repository: CourseRepository) {}

  execute([property, value]: ArrayParam<CourseEntity>) {
    return this._repository.findBy([property, value]);
  }
}
