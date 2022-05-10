import { RoomRepository } from '../../repositories/room';
import { RoomEntity } from '../../entities/room';

export class UpdateRoomUseCase {
  constructor(private readonly _repository: RoomRepository<RoomEntity>) {}

  execute<K extends keyof RoomEntity>(
    property: K,
    value: RoomEntity[K],
    room: RoomEntity
  ) {
    return this._repository.update(property, value, room);
  }
}
