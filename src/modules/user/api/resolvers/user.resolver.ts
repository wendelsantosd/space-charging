import { makeUser } from '@modules/user/repository';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { makeEncryptation } from '@shared/providers/encryptation';
import { CreateUserInput } from '../dtos';

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
}
