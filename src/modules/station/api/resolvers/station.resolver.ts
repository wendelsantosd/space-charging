import { makeStation } from '@modules/station/repository';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { makeExoplanets } from '@shared/providers';
import { CreateStationInput, Exoplanet } from '../dtos';

@Resolver()
export class StationResolver {
  @Query(() => [Exoplanet])
  async suitablePlanets() {
    try {
      const response = await makeExoplanets().getIdealExoplanets();
      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao listar os exoplanetas');
    }
  }

  @Mutation(() => String)
  async installStation(@Args('data') data: CreateStationInput) {
    try {
      await makeStation().createStation(data);
      return 'Estação instalada com sucesso';
    } catch (error) {
      throw new Error('Ocorreu um erro ao criar estação');
    }
  }
}
