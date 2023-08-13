import { IDeleteDocument } from "../../interfaces/IDeleteDocument";
import { IGithubUser } from "../dto/IGithubUser";

interface IUserRepository {
  create(user: IGithubUser): Promise<IGithubUser>;
  listUserById(id: string): Promise<IGithubUser | null>;
  listAllUsers(): Promise<IGithubUser[]>;
  deleteUser(userId: string): Promise<IDeleteDocument>;
  deleteManyUsers(userIds: string[]): Promise<IDeleteDocument>;
}

export { IUserRepository };
