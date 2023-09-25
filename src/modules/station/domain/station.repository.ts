import { CreateStationInput, Station } from '../api';

export type StationResponse = {
  isOk: boolean;
  data?: Station;
  message?: string;
};
export interface IStationRepository {
  createStation(data: CreateStationInput): Promise<StationResponse>;
}
