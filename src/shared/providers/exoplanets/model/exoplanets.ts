import { Exoplanet } from '@modules/station';

export type ExoplanetsResponse = {
  isOk: boolean;
  data?: Exoplanet[];
  message?: string;
};

export interface IExoplanets {
  getIdealExoplanets(): Promise<ExoplanetsResponse>;
}
