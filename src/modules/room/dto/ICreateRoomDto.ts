import { UserRoom } from "./IRoomDto";

interface ICreateRoomDto {
  room_id: string;
  is_private: boolean;
  password?: string;
  owner: UserRoom;
}

export { ICreateRoomDto };