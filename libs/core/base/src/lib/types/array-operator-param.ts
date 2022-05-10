import { CommonOperator, Operator } from './operator';

export type ArrayOperatorParam<T, O extends Operator = CommonOperator> = [
  keyof T,
  O,
  T[keyof T]
];
