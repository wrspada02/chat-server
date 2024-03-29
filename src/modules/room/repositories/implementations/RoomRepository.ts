import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { IRoomRepository } from "../IRoomRepository";
import { Room } from "../../entities/RoomEntity";
import { IRoomDto } from "../../dto/IRoomDto";
import { IDeleteDocument } from "../../../interfaces/IDeleteDocument";

class RoomRepository implements IRoomRepository {
  async create(room: ICreateRoomDto): Promise<IRoomDto> {
    const roomDocument = new Room({ ...room, max_users: 5, messages: [] });

    return await roomDocument.save();
  }
  
  async listAllRooms(): Promise<IRoomDto[]> {
    return await Room.find({});
  }

  async listRoom(id: string): Promise<IRoomDto | null> {
    return await Room.findOne({ room_id: id });
  }

  async deleteRoom(id: string): Promise<IDeleteDocument> {
    return await Room.deleteOne({ _id: id });
  }

  async deleteManyRooms(ids: string[]): Promise<IDeleteDocument> {
    return await Room.deleteMany({ _id: ids });
  }

  async updateRoom(updatedRoom: IRoomDto): Promise<any> { 
    return await Room.findByIdAndUpdate(updatedRoom._id, {...updatedRoom});
  }

  async joinUserIntoRoom(updatedRoom: Partial<IRoomDto>): Promise<IRoomDto | null> {
    return await Room.findOneAndUpdate({ room_id: updatedRoom.room_id }, { ...updatedRoom });
  }

  async listRoomsByUser(userLogin: string): Promise<IRoomDto[] | null> {
    return await Room.find({ $or: [{ 'owner.login': userLogin }, 
      { 'group_people': { $elemMatch: { login: userLogin }}}]});
  }

  async addMessage(updatedRoom: Partial<IRoomDto>): Promise<IRoomDto | null> {
    return await Room.findOneAndReplace({ room_id: updatedRoom.room_id }, { ...updatedRoom  });
  }
}

export { RoomRepository };
