import { Exoplanet, makeStation } from '@modules/station';
import { IHttpClient } from '@shared/providers/http-client';
import { ExoplanetsResponse, IExoplanets } from '../model';

type Response = {
  pl_name: string;
  pl_bmassj: number;
};

export class Exoplanets implements IExoplanets {
  constructor(private readonly httpClient: IHttpClient) {}

  public async getIdealExoplanets(): Promise<ExoplanetsResponse> {
    const url =
      'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmassj+from+pscomppars+where+pl_bmassj+>+10&format=json';

    const response = await this.httpClient.request<void, Response[]>({
      method: 'get',
      url,
    });

    if (!response.isOk) {
      return {
        isOk: false,
        message: 'Ocorreu um erro interno na API de buscar exoplanetas da NASA',
      };
    }

    const stations = await makeStation().getAll();

    const exoplanets: Exoplanet[] = response.response.map((exoplanet) => ({
      name: exoplanet.pl_name,
      mass: exoplanet.pl_bmassj,
      hasStation: stations.data.some(
        (station) => station.planet === exoplanet.pl_name,
      ),
    }));

    return {
      isOk: true,
      data: exoplanets,
    };
  }
}
