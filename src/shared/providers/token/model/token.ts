import { JwtPayload } from 'jsonwebtoken';

export type ResponseGenerate = {
  token: string;
  expiresIn: string;
};

export type ResponseVerify = {
  isOk: boolean;
  data?: string | JwtPayload;
  error?: 'Token expirado' | 'Token expirado';
};

export interface IToken {
  generateJWT(data: string | object): ResponseGenerate;
  verifyJWT(token: string): ResponseVerify;
}
