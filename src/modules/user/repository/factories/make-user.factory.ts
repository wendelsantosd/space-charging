import { IUserRepository, UserRepository } from '@modules/user';
import { PrismaService } from '@shared/infra/db';

export const makeUser = (): IUserRepository =>
  new UserRepository(new PrismaService());
