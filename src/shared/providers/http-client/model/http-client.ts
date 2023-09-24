export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  isOk: boolean;
  statusCode: HttpStatusCode;
  response?: T;
};

export type HttResponseType = 'json';

export type HttpRequest<Body> = {
  url: string;
  method: HttpMethod;
  body?: Body;
  params?: any;
  query?: any;
  headers?: any;
  responseType?: HttResponseType;
};

export interface IHttpClient {
  request<Body = any, Response = any>(
    data: HttpRequest<Body>,
  ): Promise<HttpResponse<Response>>;
}

export type HttpMethod = 'post' | 'put' | 'patch' | 'get' | 'delete';
