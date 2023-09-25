import { BCrypt } from '../implementations';
import { IEncryptation } from '../model/encryptation';

export const makeEncryptation = (): IEncryptation => new BCrypt();
