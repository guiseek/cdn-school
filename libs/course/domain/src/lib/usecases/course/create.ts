import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';
import { UseCase } from '@cdn-school/core/base';

export class CreateCourseUseCase
  implements UseCase<CourseEntity, Promise<CourseEntity>>
{
  constructor(private readonly _repository: CourseRepository) {}

  execute(course: CourseEntity) {
    return this._repository.create(course);
  }
}
