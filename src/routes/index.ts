import { Router } from 'express';
import { UserRoutes } from './user.routes';

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.router.get('/', (req, res) => res.send('Api is working'));
    this.router.use('/user', new UserRoutes().router);
    this.router.use('/*', (req, res) => {
      res
        .status(404)
        .json({ error: 'Rota não encontrada' });
    });
  }
}
