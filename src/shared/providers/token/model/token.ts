export type ResponseGenerate = {
  token: string;
  expiresIn: string;
};

export type ResponseVerify = {
  error?: 'expired' | 'invalid';
};

export interface IToken {
  generateJWT(data: string | object): ResponseGenerate;
  verifyJWT(token: string): ResponseVerify;
}
