import { LearnRepository } from '../../repositories/learn';

export class FindAllLearnsUseCase {
  constructor(private readonly _repository: LearnRepository) {}

  execute() {
    return this._repository.findAll();
  }
}
