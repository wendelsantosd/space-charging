import { Query, Resolver } from '@nestjs/graphql';
import { makeExoplanets } from '@shared/providers';
import { Exoplanet } from '../dtos';

@Resolver()
export class ExoplanetsResolver {
  @Query(() => [Exoplanet])
  public async suitablePlanets() {
    try {
      const response = await makeExoplanets().getIdealExoplanets();
      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao listar os exoplanetas');
    }
  }
}
