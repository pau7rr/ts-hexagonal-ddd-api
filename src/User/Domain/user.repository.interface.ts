import User from "./User";
import { UserID } from "./value_objects/userID.value-object";

interface IUserRepository {
    getById(id: UserID): User | null;
    save(user: User): User;
}

export default IUserRepository;