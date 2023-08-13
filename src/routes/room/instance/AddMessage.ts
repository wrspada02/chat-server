import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { AddMessageController } from "../../../modules/room/use-cases/addMessage/AddMessageController";
import { AddMessageService } from "../../../modules/room/use-cases/addMessage/AddMessageService";

const addMessageRepository = new RoomRepository();
const addMessageService = new AddMessageService(addMessageRepository);
const addMessageController = new AddMessageController(addMessageService);

export { addMessageController };
