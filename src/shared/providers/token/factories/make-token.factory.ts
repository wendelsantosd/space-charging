import { Token } from '../implementations';
import { IToken } from '../model';

export const makeToken = (): IToken => new Token();
