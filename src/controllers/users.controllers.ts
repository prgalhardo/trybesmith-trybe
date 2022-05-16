import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UsersController {
  constructor(private userService = new UserService()) { }
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(201).json(userCreated);
  };
}