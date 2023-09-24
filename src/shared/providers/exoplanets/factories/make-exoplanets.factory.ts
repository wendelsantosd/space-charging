import { Exoplanets } from '../implementations';
import { IExoplanets } from '../model';
import { makeHttpClient } from '@shared/providers/http-client';

export const makeExoplanets = (): IExoplanets =>
  new Exoplanets(makeHttpClient());
