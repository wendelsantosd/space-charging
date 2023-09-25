import { makeStation } from '@modules/station/repository';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { makeExoplanets } from '@shared/providers';
import { CreateStationInput, Exoplanet, Station } from '../dtos';

@Resolver()
export class StationResolver {
  @Query(() => [Exoplanet])
  async suitablePlanets() {
    try {
      const response = await makeExoplanets().getIdealExoplanets();

      if (!response.isOk) throw new Error(response.message);

      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao listar os exoplanetas');
    }
  }

  @Query(() => [Station])
  async stations() {
    try {
      const response = await makeStation().getAll();

      if (!response.isOk) throw new Error(response.message);

      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao listar as estações');
    }
  }

  @Mutation(() => String)
  async installStation(@Args('data') data: CreateStationInput) {
    try {
      const response = await makeStation().create(data);

      if (!response.isOk) throw new Error(response.message);

      return 'Estação instalada com sucesso';
    } catch (error) {
      throw new Error('Ocorreu um erro ao criar a estação');
    }
  }
}
