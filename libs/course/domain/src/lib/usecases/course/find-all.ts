import { UseCase } from '@cdn-school/core/base';
import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';
import { FindAllCoursesDto } from '../../dtos/find-all-courses';

export class FindAllCoursesUseCase
  implements UseCase<FindAllCoursesDto, Promise<CourseEntity[]>>
{
  constructor(private readonly _repository: CourseRepository) {}

  execute(params: FindAllCoursesDto) {
    return this._repository.findAll(params);
  }
}
