import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../../interfaces/user.interfaces';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}