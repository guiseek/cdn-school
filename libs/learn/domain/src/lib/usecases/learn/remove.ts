import { LearnRepository } from '../../repositories/learn';
import { LearnEntity } from '../../entities/learn';

export class RemoveLearnUseCase {
  constructor(private readonly _repository: LearnRepository) {}

  execute<K extends keyof LearnEntity>(property: K, value: LearnEntity[K]) {
    return this._repository.remove(property, value);
  }
}
