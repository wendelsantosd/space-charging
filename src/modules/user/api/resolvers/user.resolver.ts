import { makeUser } from '@modules/user/repository';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { makeEncryptation } from '@shared/providers/encryptation';
import { makeToken } from '@shared/providers/token';
import {
  AuthenticateUser,
  AuthenticateUserInput,
  CreateUserInput,
} from '../dtos';

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async createUser(@Args('data') data: CreateUserInput) {
    const userExists = await makeUser().getByEmail(data.email);

    if (userExists.isOk) return 'Esse e-mail já está sendo utilizado';

    const hashPassword = await makeEncryptation().generateHash(data.password);

    const response = await makeUser().create({
      ...data,
      password: hashPassword,
    });

    if (!response.isOk) throw new Error(response.message);

    return 'Usuário criado com sucesso';
  }

  @Query(() => AuthenticateUser)
  async authenticate(@Args('data') data: AuthenticateUserInput) {
    const userExists = await makeUser().getByEmail(data.email);

    if (!userExists.isOk) throw new Error('E-mail ou senha incorretos');

    const {
      data: { password, id },
    } = userExists;

    const isValidPassword = await makeEncryptation().compareHash(
      data.password,
      password,
    );

    if (!isValidPassword) throw new Error('E-mail ou senha incorretos');

    const response = makeToken().generateJWT({
      userId: id,
    });

    return response;
  }
}
