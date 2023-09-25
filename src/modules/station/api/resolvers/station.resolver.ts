import { makeStation } from '@modules/station/repository';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { makeExoplanets } from '@shared/providers';
import { CreateStationInput, Exoplanet, Station } from '../dtos';

@Resolver()
export class StationResolver {
  @Query(() => [Exoplanet])
  async suitablePlanets() {
    const response = await makeExoplanets().getIdealExoplanets();

    if (!response.isOk) throw new Error(response.message);

    return response.data;
  }

  @Query(() => [Station])
  async stations() {
    const response = await makeStation().getAll();

    if (!response.isOk) throw new Error(response.message);

    return response.data;
  }

  @Mutation(() => String)
  async installStation(@Args('data') data: CreateStationInput) {
    const response = await makeStation().create(data);

    if (!response.isOk) throw new Error(response.message);

    return 'Estação instalada com sucesso';
  }
}
