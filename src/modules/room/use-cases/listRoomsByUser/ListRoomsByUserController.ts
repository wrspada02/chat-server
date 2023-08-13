import { Request, Response } from "express";
import { ListRoomsByUserService } from "./ListRoomsByUserService";
import { UserRoom } from "../../dto/IRoomDto";

class ListRoomsByUserController {
  constructor (private listRoomsByUserService: ListRoomsByUserService) {}
  async handle(request: Request, response: Response) {
    try {
      const user: UserRoom = request.body.user;

      const roomsByUser = await this.listRoomsByUserService.execute(user.login);

      return response.status(200).json(roomsByUser);
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { ListRoomsByUserController };
