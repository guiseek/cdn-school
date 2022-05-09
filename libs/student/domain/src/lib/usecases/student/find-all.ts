import { StudentRepository } from '../../repositories/student';
import { StudentEntity } from '../../entities/student';

export class FindAllStudentsUseCase {
  constructor(private readonly _repository: StudentRepository<StudentEntity>) {}

  execute() {
    return this._repository.findAll();
  }
}
