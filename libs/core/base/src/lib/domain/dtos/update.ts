import { ArrayOperatorParam, Id } from '../../types';

export type UpdateDto<T> = [ArrayOperatorParam<T>, Omit<T, Id>];
