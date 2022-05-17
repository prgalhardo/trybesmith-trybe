import { Request, Response } from 'express';
import UserService from '../services/users.service';
import generateToken from '../services/generateToken';

export default class UsersController {
  constructor(private userService = new UserService()) { }
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const token = generateToken({ id: userCreated.id, username: userCreated.username });
    res.status(201).json(token);
  };
}