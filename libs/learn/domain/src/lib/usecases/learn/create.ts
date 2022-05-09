import { LearnRepository } from '../../repositories/learn';
import { LearnEntity } from '../../entities/learn';

export class CreateLearnUseCase {
  constructor(private readonly _repository: LearnRepository) {}

  execute(learn: LearnEntity) {
    return this._repository.create(learn);
  }
}
