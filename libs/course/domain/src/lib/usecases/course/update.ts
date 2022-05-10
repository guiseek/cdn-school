import { CourseRepository } from '../../repositories/course';
import { CourseEntity } from '../../entities/course';

export class UpdateCourseUseCase{
  constructor(private readonly _repository: CourseRepository) {}

  execute<K extends keyof CourseEntity>(
    property: K,
    value: CourseEntity[K],
    room: CourseEntity
  ) {
    return this._repository.update(property, value, room);
  }
}
