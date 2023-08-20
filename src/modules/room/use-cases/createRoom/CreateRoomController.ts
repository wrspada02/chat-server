import { Request, Response } from "express";
import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { CreateRoomService } from "./CreateRoomService";
import { ICreateRoomDtoUser } from "../../../interfaces/IRoomDtoUser";
import { io } from "../../../..";

class CreateRoomController {
  constructor (private createRoomService: CreateRoomService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { user, ...room }: ICreateRoomDtoUser = request.body;

    const roomToUpdate: ICreateRoomDto = {
      ...room,
      owner: user,
    };

    try {
      const createdRoom = await this.createRoomService.execute(roomToUpdate);

      io.sockets.emit('add-room', roomToUpdate);
      return response.status(201).json(createdRoom);
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}

export { CreateRoomController };