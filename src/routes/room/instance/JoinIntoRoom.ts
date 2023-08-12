import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { JoinRoomController } from "../../../modules/room/use-cases/joinRoom/JoinRoomController";
import { JoinRoomService } from "../../../modules/room/use-cases/joinRoom/JoinRoomService";

const joinIntoRoomRepository = new RoomRepository();
const joinIntoRoomService = new JoinRoomService(joinIntoRoomRepository);
const joinIntoRoomController = new JoinRoomController(joinIntoRoomService);

export { joinIntoRoomController };
