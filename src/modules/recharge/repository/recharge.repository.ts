import { PrismaService } from '@shared/infra/db';
import { CreateRechargeInput, Recharge } from '../api';
import { IRechargeRepository, RechargeResponse } from '../domain';

export class RechargeRepository implements IRechargeRepository {
  constructor(private readonly orm: PrismaService) {}

  public async create(data: CreateRechargeInput): Promise<RechargeResponse> {
    try {
      const recharge = await this.orm.recharges.create({
        data,
      });

      const buildedRecharge: Recharge = {
        id: recharge.id,
        startTime: recharge.startTime,
        endTime: recharge.endTime,
        stationId: recharge.stationId,
        userId: recharge.userId,
      };

      return {
        isOk: true,
        data: buildedRecharge,
      };
    } catch (error) {
      return {
        isOk: false,
        message: `Ocorreu um erro ao fazer recarga: ${error?.message}`,
      };
    }
  }
}
