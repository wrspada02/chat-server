import { IRoomDto } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class JoinRoomService {
  constructor (private roomRepository: RoomRepository) {}


  async execute (updatedRoom: Partial<IRoomDto>) {
    const room = await this.roomRepository.listRoom(updatedRoom?.room_id as string);

    if (!room) throw new Error("Room not found");

    if (room.group_people.length >= room.max_users) {
      throw new Error("Max users on room has been gotten");
    }

    return this.roomRepository.joinUserIntoRoom(updatedRoom);
  }
}

export { JoinRoomService };
