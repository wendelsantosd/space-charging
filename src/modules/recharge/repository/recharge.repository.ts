import { PrismaService } from '@shared/infra/db';
import { CreateRechargeInput, Recharge } from '../api';
import { IRechargeRepository, RechargeResponse } from '../domain';

export class RechargeRepository implements IRechargeRepository {
  constructor(private readonly orm: PrismaService) {}

  public async create(data: CreateRechargeInput): Promise<RechargeResponse> {
    try {
      const userRecharging = await this.orm.recharges.findUnique({
        where: {
          userId: data.userId,
        },
      });

      if (userRecharging)
        return {
          isOk: false,
          message: 'Usuário já tem recarga em andamento',
        };

      const stationRecharging = await this.orm.recharges.findUnique({
        where: {
          stationId: data.stationId,
        },
      });

      if (stationRecharging)
        return {
          isOk: false,
          message: 'Estação está com recarga em andamento, tente mais tarde',
        };

      const payload = {
        ...data,
        endTime: new Date(data.endTime),
      };

      const recharge = await this.orm.recharges.create({
        data: payload,
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
