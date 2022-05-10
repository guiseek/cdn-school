import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class FindCourseByUseCase {
  constructor(private readonly _repository: CourseRepository<CourseEntity>) {}

  execute<K extends keyof CourseEntity>(property: K, value: CourseEntity[K]) {
    return this._repository.findBy(property, value);
  }
}
