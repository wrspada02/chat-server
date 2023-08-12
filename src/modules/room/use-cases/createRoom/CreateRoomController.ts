import { Request, Response } from "express";
import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { CreateRoomService } from "./CreateRoomService";
import { ICreateRoomDtoUser } from "../../../interfaces/IRoomDtoUser";
import { IRoomDto } from "../../dto/IRoomDto";

class CreateRoomController {
  constructor (private createRoomService: CreateRoomService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { user, ...room }: ICreateRoomDtoUser = request.body;

    const roomToUpdate: Partial<IRoomDto> = {
      ...room,
      owner: user,
    };

    try {
      const createdRoom = await this.createRoomService.execute(roomToUpdate);

      return response.status(201).json(createdRoom);
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}

export { CreateRoomController };