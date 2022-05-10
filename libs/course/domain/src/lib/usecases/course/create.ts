import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class CreateCourseUseCase {
  constructor(private readonly _repository: CourseRepository<CourseEntity>) {}

  execute(room: CourseEntity) {
    return this._repository.create(room);
  }
}
