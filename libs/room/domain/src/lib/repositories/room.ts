import { RoomEntity } from '../entities/room';

export abstract class RoomRepository<T extends RoomEntity> {
  abstract findAll(): T[];

  abstract findBy<K extends keyof T>(property: K, value: T[K]): T;

  abstract create(room: T): T;

  abstract update<K extends keyof T>(property: K, value: T[K], room: T): T;

  abstract remove<K extends keyof T>(property: K, value: T[K]): T;
}
