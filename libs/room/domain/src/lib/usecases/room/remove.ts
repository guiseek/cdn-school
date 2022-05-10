import { RoomRepository } from '../../repositories/room';
import { RoomEntity } from '../../entities/room';

export class RemoveRoomUseCase {
  constructor(private readonly _repository: RoomRepository<RoomEntity>) {}

  execute<K extends keyof RoomEntity>(property: K, value: RoomEntity[K]) {
    return this._repository.remove(property, value);
  }
}
