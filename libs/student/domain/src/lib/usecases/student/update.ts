import { StudentRepository } from '../../repositories/student';
import { StudentEntity } from '../../entities/student';

export class UpdateStudentUseCase {
  constructor(private readonly _repository: StudentRepository<StudentEntity>) {}

  execute<K extends keyof StudentEntity>(
    property: K,
    value: StudentEntity[K],
    student: StudentEntity
  ) {
    return this._repository.update(property, value, student);
  }
}
