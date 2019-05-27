import { OrderRepository } from '../repositories';
import { Order } from '../entities';

export class OrderService {
  static async create(order: Order) {
    await OrderRepository.create(order);
  }

  static async get(order: Order) {
    return await OrderRepository.get(order.oid);
  }
}
