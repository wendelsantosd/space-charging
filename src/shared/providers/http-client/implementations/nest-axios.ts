import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { HttpRequest, HttpResponse, IHttpClient } from '../model';

export class NestJSAxios implements IHttpClient {
  public async request<Body = any, Response = any>(
    data: HttpRequest<Body>,
  ): Promise<HttpResponse<Response>> {
    try {
      const client = new HttpService(axios);

      const response = await client.axiosRef.request<Response>({
        url: data.url,
        method: data.method,
        params: data.params,
        data: data.body,
        headers: data.headers,
      });

      return {
        isOk: true,
        statusCode: response.status,
        response: response.data,
      };
    } catch (error) {
      return {
        isOk: false,
        statusCode: error.response?.data?.statusCode,
        response: { ...error.response?.data },
      };
    }
  }
}
