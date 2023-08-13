import { IRoomDto } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class AddMessageService {
  constructor (private roomRepository: RoomRepository) {}
  execute(updatedRoom: Partial<IRoomDto>) {
    return this.roomRepository.addMessage(updatedRoom);
  }
}

export { AddMessageService };
