import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CustomError } from '../utils/custom.error';
import UserRepository from '../repositories/user.repository';

export class UserController {
  private userRepository: UserRepository = getCustomRepository(UserRepository);

  public get = async (req: Request, res: Response) => {
    try {
      const result = await this.userRepository.find();
      res.send(result);
    } catch (error: any) {
      console.log(error);
      if (error instanceof CustomError) {
        res.status(error.code).send({ message: error.details });
      } else {
        res.status(500).send({ error: 'Erro interno de servidor' });
      }
    }
  };
}
