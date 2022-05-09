import { StudentRepository } from '../../repositories/student';
import { StudentEntity } from '../../entities/student';

export class CreateStudentUseCase {
  constructor(private readonly _repository: StudentRepository<StudentEntity>) {}

  execute(student: StudentEntity) {
    return this._repository.create(student);
  }
}
