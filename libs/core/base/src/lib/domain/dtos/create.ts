import { Id } from '../../types/id';

export type CreateDto<T> = Omit<T, Id>;
