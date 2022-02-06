import { EntityRepository, Repository } from 'typeorm';
import { User } from '../database/entities/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByName(name: string): Promise<User[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
