import { Query, Resolver } from '@nestjs/graphql';
import { makeExoplanets } from '@shared/providers';
import { Exoplanet } from '../dtos';

@Resolver()
export class ExoplanetsResolver {
  @Query(() => [Exoplanet])
  public async suitablePlanets() {
    const response = await makeExoplanets().getIdealExoplanets();
    return response.data;
  }
}
