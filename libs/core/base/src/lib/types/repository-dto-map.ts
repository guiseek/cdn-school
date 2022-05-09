import { RepositoryMethod } from './repository-method';
import { Method } from './method';

export type RepositoryDtoMap<T extends Record<RepositoryMethod, Method>> = {
  [K in keyof T]: T[K] extends Method<infer U> ? U : never;
};
