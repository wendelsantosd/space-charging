import { makeRecharge } from '@modules/recharge/repository';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateRechargeInput } from '../dtos';

@Resolver()
export class RechargeResolver {
  @Mutation(() => String)
  async createRecharge(@Args('data') data: CreateRechargeInput) {
    try {
      const response = await makeRecharge().create(data);

      if (!response.isOk) throw new Error(response.message);

      return 'Recarga executada com sucesso';
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar recarregar');
    }
  }
}
