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

  verifyJWT(token: string): ResponseVerify {
    const secret = process.env.TOKEN_SECRET;
    try {
      const data = verify(token, secret);
      return {
        isOk: true,
        data,
      };
    } catch (error) {
      return {
        isOk: false,
        error:
          error.name === 'TokenExpiredError'
            ? 'Token expirado'
            : 'Token expirado',
      };
    }
  }
}
