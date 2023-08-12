import { IRoomDto, UserRoom } from "../room/dto/IRoomDto";

export interface IRoomDtoUser extends IRoomDto {
  user: UserRoom;
}