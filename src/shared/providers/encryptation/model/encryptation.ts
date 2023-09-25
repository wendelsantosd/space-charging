export interface IEncryptation {
  generateHash(data: string | Buffer): Promise<string>;
  compareHash(data: string | Buffer, hashed: string): Promise<boolean>;
}
