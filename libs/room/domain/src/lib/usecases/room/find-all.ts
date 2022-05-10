import { RoomRepository } from '../../repositories/room';
import { RoomEntity } from '../../entities/room';

export class FindAllRoomsUseCase {
  constructor(private readonly _repository: RoomRepository<RoomEntity>) {}

  execute() {
    return this._repository.findAll();
  }
}
