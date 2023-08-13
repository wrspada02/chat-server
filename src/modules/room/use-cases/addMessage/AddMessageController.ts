import { Request, Response } from "express";
import { AddMessageService } from "./AddMessageService";
import { IRoomDto } from "../../dto/IRoomDto";

class AddMessageController {
  constructor (private addMessageService: AddMessageService) {}
  async handle(request: Request, response: Response) {
    try {
      const roomId: string = request.params.id;
      const { user, ...message } = request.body;
      const room: Partial<IRoomDto> = {
        messages: [{content: message.message, sender: user}],
        room_id: roomId,
      }

      const updatedRoom = await this.addMessageService.execute(room);
      
      return response.status(200).json(updatedRoom);
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { AddMessageController };
