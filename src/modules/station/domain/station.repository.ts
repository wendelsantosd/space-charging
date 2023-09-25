import { CreateStationInput, Station } from '../api';

export type StationResponse = {
  isOk: boolean;
  data?: Station;
  message?: string;
};

export type StationsResponse = {
  isOk: boolean;
  data?: Station[];
  message?: string;
};
export interface IStationRepository {
  create(data: CreateStationInput): Promise<StationResponse>;
  getAll(): Promise<StationsResponse>;
}
