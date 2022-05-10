import { LearnRepository } from '@cdn-school/learn/domain';
import { LearnEntity } from '../entities/learn';

export abstract class LearnDataRepository implements LearnRepository {
  abstract findAll(): LearnEntity[];

  abstract findBy<K extends keyof LearnEntity>(
    property: K,
    value: LearnEntity[K]
  ): LearnEntity;

  abstract create(learn: LearnEntity): LearnEntity;

  abstract update<K extends keyof LearnEntity>(
    property: K,
    value: LearnEntity[K],
    learn: LearnEntity
  ): LearnEntity;

  abstract remove<K extends keyof LearnEntity>(
    property: K,
    value: LearnEntity[K]
  ): LearnEntity;
}
