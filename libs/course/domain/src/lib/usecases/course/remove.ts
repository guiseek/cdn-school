import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class RemoveCourseUseCase {
  constructor(private readonly _repository: CourseRepository<CourseEntity>) {}

  execute<K extends keyof CourseEntity>(property: K, value: CourseEntity[K]) {
    return this._repository.remove(property, value);
  }
}
