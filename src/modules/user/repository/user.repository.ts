import { PrismaService } from '@shared/infra/db';
import { CreateUserInput, User } from '../api';
import { IUserRepository, UserResponse } from '../domain';

export class UserRepository implements IUserRepository {
  constructor(private readonly orm: PrismaService) {}

  async getById(id: string): Promise<UserResponse> {
    try {
      const user = await this.orm.users.findUnique({
        where: { id },
      });

      if (!user)
        return {
          isOk: false,
          message: 'Usuário não está cadastrado no sistema',
        };

      const buildedUser: User = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      return {
        isOk: true,
        data: buildedUser,
      };
    } catch (error) {
      return {
        isOk: false,
        message: `Ocorreu um erro ao buscar usuário: ${error?.message}`,
      };
    }
  }

  async getByEmail(email: string): Promise<UserResponse> {
    try {
      const user = await this.orm.users.findUnique({
        where: { email },
      });

      if (!user)
        return {
          isOk: false,
          message: 'Usuário não está cadastrado no sistema',
        };

      const buildedUser: User = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      return {
        isOk: true,
        data: buildedUser,
      };
    } catch (error) {
      return {
        isOk: false,
        message: `Ocorreu um erro ao buscar usuário: ${error?.message}`,
      };
    }
  }

  public async create(data: CreateUserInput): Promise<UserResponse> {
    try {
      const user = await this.orm.users.create({
        data,
      });

      const buildedUser: User = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      return {
        isOk: true,
        data: buildedUser,
      };
    } catch (error) {
      return {
        isOk: false,
        message: `Ocorreu um erro ao criar usuário: ${error?.message}`,
      };
    }
  }
}
