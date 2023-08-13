import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { ListRoomsByUserController } from "../../../modules/room/use-cases/listRoomsByUser/ListRoomsByUserController";
import { ListRoomsByUserService } from "../../../modules/room/use-cases/listRoomsByUser/ListRoomsByUserService";

const listRoomsByUserRepository = new RoomRepository();
const listRoomsByUserService = new ListRoomsByUserService(listRoomsByUserRepository);
const listRoomsByUserController = new ListRoomsByUserController(listRoomsByUserService);

export { listRoomsByUserController };
