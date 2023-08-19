import { Request, Response } from "express";
import { JoinRoomService } from "./JoinRoomService";
import { ICreateRoomDtoUser } from "../../../interfaces/IRoomDtoUser";
import { IRoomDto, UserRoom } from "../../dto/IRoomDto";

class JoinRoomController {
  constructor (private joinRoomService: JoinRoomService) {}

  async handle (request: Request, response: Response) {
    const roomId: string = request.params.id;
    const { user, ...room }: ICreateRoomDtoUser = request.body;

    const roomToUpdate: Partial<IRoomDto> & { group_people: UserRoom[] } = {
      room_id: roomId,
      group_people: [user],
    };

    try {
      const createdRoom = await this.joinRoomService.execute(roomToUpdate);

      return response.status(201).json(createdRoom);
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}

export { JoinRoomController };
