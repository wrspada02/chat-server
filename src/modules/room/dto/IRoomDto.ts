import { ICreateRoomDto } from "./ICreateRoomDto";

interface UserRoom {
  login: string;
  avatar_url: string;
}

interface RoomMessage {
  content: string;
  sender: UserRoom;
}

interface IRoomDto extends ICreateRoomDto {
  _id: string;
  messages: RoomMessage[];
  group_people: UserRoom[];
  max_users: number;
}

export { IRoomDto, UserRoom };
