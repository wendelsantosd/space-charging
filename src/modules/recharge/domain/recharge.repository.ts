import { CreateRechargeInput, Recharge } from '../api';

export type RechargeResponse = {
  isOk: boolean;
  data?: Recharge;
  message?: string;
};

export interface IRechargeRepository {
  create(data: CreateRechargeInput): Promise<RechargeResponse>;
}
