import { IRoomDto } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class AddMessageService {
  constructor (private roomRepository: RoomRepository) {}
  async execute(updatedRoom: Partial<IRoomDto>) {
    const room = await this.roomRepository.listRoom(updatedRoom.room_id || '');

    if (!room || !updatedRoom.messages) throw new 
      Error('Room not found or it has no message to update');

    const roomAddMessage: IRoomDto = {
      _id: room._id,
      group_people: room.group_people,
      is_private: room.is_private,
      max_users: room.max_users,
      owner: room.owner,
      room_id: room.room_id,
      password: room.password,
      messages: [...room.messages, ...updatedRoom.messages],
    }

    return this.roomRepository.addMessage(roomAddMessage);
  }
}

export { AddMessageService };
