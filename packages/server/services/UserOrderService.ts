import { UserOrderRepository } from '../repositories';
import { UserOrder } from '../entities';

export class UserOrderService {
  static async create(userOrder: UserOrder) {
    await UserOrderRepository.create(userOrder);
  }

  static async get(oid: string) {
    return await UserOrderRepository.get(oid);
  }
}
