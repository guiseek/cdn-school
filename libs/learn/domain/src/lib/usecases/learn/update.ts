import { LearnRepository } from '../../repositories/learn';
import { LearnEntity } from '../../entities/learn';

export class UpdateLearnUseCase {
  constructor(private readonly _repository: LearnRepository) {}

  execute<K extends keyof LearnEntity>(
    property: K,
    value: LearnEntity[K],
    learn: LearnEntity
  ) {
    return this._repository.update(property, value, learn);
  }
}
