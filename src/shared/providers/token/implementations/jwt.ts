import { sign, verify } from 'jsonwebtoken';
import { IToken, ResponseGenerate, ResponseVerify } from '../model';

export class Token implements IToken {
  generateJWT(data: string | object): ResponseGenerate {
    const secret = process.env.TOKEN_SECRET;
    const expiresIn = process.env.TOKEN_MAX_TIME_LIFE;

    const token = sign(data, secret, {
      expiresIn,
    });

    return {
      token,
      expiresIn,
    };
  }

  verifyJWT<T>(token: string): ResponseVerify {
    const secret = process.env.TOKEN_SECRET;
    try {
      const data = verify(token, secret);
      return data as T;
    } catch (error) {
      return {
        error: error.name === 'TokenExpiredError' ? 'expired' : 'invalid',
      } as T;
    }
  }
}
