import { BCryptProvider } from '../implementations';
import { IEncryptationProvider } from '../model';

export const makeEncryptation = (): IEncryptationProvider =>
  new BCryptProvider();
