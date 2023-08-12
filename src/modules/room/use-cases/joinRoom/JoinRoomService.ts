import { IRoomDto, UserRoom } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class JoinRoomService {
  constructor (private roomRepository: RoomRepository) {}

  execute (updatedRoom: IRoomDto) {
    return this.roomRepository.joinUserIntoRoom(updatedRoom);
  }
}

export { JoinRoomService };
