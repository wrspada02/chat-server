import { ICreateRoomDto } from "../room/dto/ICreateRoomDto";
import { UserRoom } from "../room/dto/IRoomDto";

export interface ICreateRoomDtoUser extends ICreateRoomDto {
  user: UserRoom;
}