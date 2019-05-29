import { OrderRepository } from '../repositories';
import { UserOrder } from '../entities';

export class UserOrderService {
  static async create(userOrder: UserOrder) {
    await OrderRepository.create(userOrder);
  }

  static async get(oid: string) {
    return await OrderRepository.get(oid);
  }
}
