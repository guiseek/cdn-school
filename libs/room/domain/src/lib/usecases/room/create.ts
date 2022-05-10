import { RoomRepository } from '../../repositories/room';
import { RoomEntity } from '../../entities/room';

export class CreateRoomUseCase {
  constructor(private readonly _repository: RoomRepository<RoomEntity>) {}

  execute(room: RoomEntity) {
    return this._repository.create(room);
  }
}
