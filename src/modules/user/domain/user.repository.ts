import { CreateUserInput, User } from '../api';

export type UserResponse = {
  isOk: boolean;
  data?: User;
  message?: string;
};

export interface IUserRepository {
  create(data: CreateUserInput): Promise<UserResponse>;
}
