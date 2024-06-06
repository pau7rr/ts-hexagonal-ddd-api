import { UserEmail } from './value_objects/userEmail.value-object';
import { UserID } from './value_objects/userID.value-object'
import { UserName } from './value_objects/userName.value-object';

class User {
  constructor(
    public id: UserID, 
    public name: UserName, 
    public email: UserEmail
  ) {}
}

export default User;
