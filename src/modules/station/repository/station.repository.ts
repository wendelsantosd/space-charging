import { PrismaService } from '@shared/infra/db';
import { CreateStationInput, Station } from '../api';
import {
  IStationRepository,
  StationResponse,
  StationsResponse,
} from '../domain';

export class StationRepository implements IStationRepository {
  constructor(private readonly orm: PrismaService) {}

  async getById(id: string): Promise<StationResponse> {
    try {
      const station = await this.orm.stations.findUnique({
        where: { id },
      });

      if (!station)
        return {
          isOk: false,
          message: 'Estação não encontrada',
        };

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
        message: `Ocorreu um erro ao buscar estação: ${error?.message}`,
      };
    }
  }

  public async getAll(): Promise<StationsResponse> {
    try {
      const stations = await this.orm.stations.findMany();

      const buildedStations: Station[] = stations.map((station) => ({
        id: station.id,
        name: station.name,
        planet: station.planet,
      }));

      return {
        isOk: true,
        data: buildedStations,
      };
    } catch (error) {
      return {
        isOk: false,
        message: `Ocorreu um erro ao listar as estações: ${error?.message}`,
      };
    }
  }

  public async create(data: CreateStationInput): Promise<StationResponse> {
    try {
      const payload = {
        name: data.name,
        planet: data.planet,
      };

      const station = await this.orm.stations.create({
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
