import { RechargeRepository } from '@modules/recharge';
import { IRechargeRepository } from '@modules/recharge/domain';
import { PrismaService } from '@shared/infra/db';

export const makeRecharge = (): IRechargeRepository =>
  new RechargeRepository(new PrismaService());
