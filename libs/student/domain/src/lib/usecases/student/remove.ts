import { StudentRepository } from '../../repositories/student';
import { StudentEntity } from '../../entities/student';

export class RemoveStudentUseCase {
  constructor(private readonly _repository: StudentRepository<StudentEntity>) {}

  execute<K extends keyof StudentEntity>(property: K, value: StudentEntity[K]) {
    return this._repository.remove(property, value);
  }
}
