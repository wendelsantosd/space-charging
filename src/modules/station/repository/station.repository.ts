import { PrismaService } from '@shared/infra/db';
import { CreateStationInput, Station } from '../api';
import { IStationRepository, StationResponse } from '../domain';

export class StationRepository implements IStationRepository {
  constructor(private readonly orm: PrismaService) {}

  public async createStation(
    data: CreateStationInput,
  ): Promise<StationResponse> {
    try {
      const payload = {
        name: data.name,
        planet: data.planet,
      };

      const station = await this.orm.station.create({
        data: payload,
      });

      const buildedStation: Station = {
        id: station.id,
        name: station.name,
        planet: station.planet,
      };

      return {
        isOk: true,
        data: buildedStation,
      };
    } catch (error) {
      return {
        isOk: false,
        message: `Ocorreu um erro ao criar estação: ${error?.message}`,
      };
    }
  }
}
