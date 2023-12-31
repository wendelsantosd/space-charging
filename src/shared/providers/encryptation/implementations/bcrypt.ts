import { IEncryptation } from '../model';
import { hash, compare } from 'bcrypt';

export class BCrypt implements IEncryptation {
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
