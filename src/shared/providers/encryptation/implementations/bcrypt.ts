import { IEncryptationProvider } from '../model';
import { hash, compare } from 'bcrypt';

export class BCryptProvider implements IEncryptationProvider {
  public async generateHash(data: string | Buffer): Promise<string> {
    return hash(data, 8);
  }

  public async compareHash(
    data: string | Buffer,
    hashed: string,
  ): Promise<boolean> {
    return compare(data, hashed);
  }
}
