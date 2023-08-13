import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class ListRoomsByUserService {
  constructor (private roomRepository: RoomRepository) {}
  execute (userLogin: string) {
    return this.roomRepository.listRoomsByUser(userLogin);
  }
}

export { ListRoomsByUserService };
