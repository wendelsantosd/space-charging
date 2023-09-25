import { IStationRepository } from '@modules/station/domain';
import { PrismaService } from '@shared/infra/db';
import { StationRepository } from '../station.repository';

export const makeStation = (): IStationRepository =>
  new StationRepository(new PrismaService());
