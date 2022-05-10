import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class FindAllCoursesUseCase {
  constructor(private readonly _repository: CourseRepository<CourseEntity>) {}

  execute() {
    return this._repository.findAll();
  }
}
