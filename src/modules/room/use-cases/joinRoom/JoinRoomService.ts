import { io } from "../../../..";
import { IRoomDto, UserRoom } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class JoinRoomService {
  constructor (private roomRepository: RoomRepository) {}

  async execute (updatedRoom: Partial<IRoomDto> & { group_people: UserRoom[] }) {
    const room = await this.roomRepository.listRoom(updatedRoom?.room_id as string);
    const isThereSameUser = room?.group_people.some((person) => person.login === updatedRoom.group_people[0].login);

    if (!room || !updatedRoom.group_people) throw new 
      Error("Room not found or it has no person to add");

    if (room.group_people.length >= room.max_users) {
      throw new Error("Max users on room has been gotten");
    }

    if (room.is_private && room.password !== updatedRoom.password) {
      throw new Error("Password does not match");
    }

    if (isThereSameUser) throw new 
      Error("This user has already been added");

    const roomAddPerson: IRoomDto = {
      _id: room._id,
      group_people: [...room.group_people, ...updatedRoom.group_people],
      is_private: room.is_private,
      max_users: room.max_users,
      messages: room.messages,
      owner: room.owner,
      room_id: room.room_id,
      password: room.password,
    };

    io.sockets.emit('add-person-room', roomAddPerson);

    return await this.roomRepository.joinUserIntoRoom(roomAddPerson);
  }
}

export { JoinRoomService };
