import { IRoomDto, UserRoom } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class JoinRoomService {
  constructor (private roomRepository: RoomRepository) {}


  async execute (updatedRoom: IRoomDto) {
    const room = await this.roomRepository.listRoom(updatedRoom._id);

    if (!room) throw new Error("Room not found");

    if (room.group_people.length >= room.max_users ) {
      throw new Error("Max users on room has been gotten");
    }

    return this.roomRepository.joinUserIntoRoom(updatedRoom);
  }
}

export { JoinRoomService };
