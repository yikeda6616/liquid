import { OrderRepository } from '../repositories';
import { Order } from '../entities';

export class OrderService {
  static async create(order: Order) {
    await OrderRepository.create(order);
  }

  static async get(oid: string) {
    return await OrderRepository.get(oid);
  }
}
