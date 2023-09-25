import { CreateUserInput, User } from '../api';

export type UserResponse = {
  isOk: boolean;
  data?: User;
  message?: string;
};

export interface IUserRepository {
  create(data: CreateUserInput): Promise<UserResponse>;
  getById(id: string): Promise<UserResponse>;
  getByEmail(email: string): Promise<UserResponse>;
}
