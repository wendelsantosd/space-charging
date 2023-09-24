export type Exoplanet = {
  pl_name: string;
  pl_bmassj: number;
};

export type ExoplanetsResponse = {
  isOk: boolean;
  data?: Exoplanet[];
  message?: string;
};

export interface IExoplanets {
  getIdealExoplanets(): Promise<ExoplanetsResponse>;
}
