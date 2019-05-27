import { getRepository } from 'typeorm';
import { Order } from '../entities';

export class OrderRepository {
  static async create(order: Order) {
    await getRepository(Order).insert(order);
  }

  static async get(oid: string) {
    return await getRepository(Order).findOne({ oid });
  }
}
