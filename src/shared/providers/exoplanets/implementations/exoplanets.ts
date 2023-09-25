import { Exoplanet } from '@modules/station';
import { IHttpClient } from '@shared/providers/http-client';
import { ExoplanetsResponse, IExoplanets } from '../model';

export class Exoplanets implements IExoplanets {
  constructor(private readonly httpClient: IHttpClient) {}

  public async getIdealExoplanets(): Promise<ExoplanetsResponse> {
    const url =
      'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmassj+from+pscomppars+where+pl_bmassj+>+10&format=json';

    const response = await this.httpClient.request<void, Exoplanet[]>({
      method: 'get',
      url,
    });

    if (!response.isOk) {
      return {
        isOk: false,
        message: 'Ocorreu um erro interno na API de buscar exoplanetas da NASA',
      };
    }

    return {
      isOk: true,
      data: response.response,
    };
  }
}
