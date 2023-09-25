import { makeRecharge } from '@modules/recharge/repository';
import { makeStation } from '@modules/station';
import { makeUser } from '@modules/user';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateRechargeInput } from '../dtos';

@Resolver()
export class RechargeResolver {
  @Mutation(() => String)
  async recharge(@Args('data') data: CreateRechargeInput) {
    const user = await makeUser().getById(data.userId);

    if (!user.isOk) throw new Error(user.message);

    const station = await makeStation().getById(data.stationId);

    if (!station.isOk) throw new Error(station.message);

    const response = await makeRecharge().create(data);

    if (!response.isOk) throw new Error(response.message);

    return 'Recarga executada com sucesso';
  }
}
