import { IDeleteDocument } from "../../interfaces/IDeleteDocument";
import { ICreateRoomDto } from "../dto/ICreateRoomDto";
import { IRoomDto } from "../dto/IRoomDto";

interface IRoomRepository {
  create(room: ICreateRoomDto): Promise<ICreateRoomDto>;
  listAllRooms(): Promise<IRoomDto[]>;
  listRoom(id: string): Promise<IRoomDto | null>;
  deleteRoom(id: string): Promise<IDeleteDocument>;
  deleteManyRooms(ids: string[]): Promise<IDeleteDocument>;
  updateRoom(updatedRoom: IRoomDto): Promise<any>;
  joinUserIntoRoom(updatedRoom: Partial<ICreateRoomDto>): Promise<IRoomDto | null>;
  listRoomsByUser(userLogin: string): Promise<IRoomDto[] | null>;
  addMessage(updatedRoom: Partial<IRoomDto>): Promise<IRoomDto | null>;
}

export { IRoomRepository };
