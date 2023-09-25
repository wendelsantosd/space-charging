import { makeUser } from '@modules/user/repository';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../dtos';

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async createUser(@Args('data') data: CreateUserInput) {
    const response = await makeUser().create(data);

    if (!response.isOk) throw new Error(response.message);

    return 'Usuário criado com sucesso';
  }
}
