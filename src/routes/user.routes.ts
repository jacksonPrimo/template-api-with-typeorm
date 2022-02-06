import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoutes {
  public router: Router;

  public userController: UserController = new UserController();

  constructor() {
    this.router = Router();
    this.router.get('/:id', this.userController.get);
  }
}
