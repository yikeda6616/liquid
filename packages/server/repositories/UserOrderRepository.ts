import { getRepository } from 'typeorm';
import { UserOrder } from '../entities';

export class OrderRepository {
  static async create(userOrder: UserOrder) {
    await getRepository(UserOrder).insert(userOrder);
  }

  static async get(oid: string) {
    return await getRepository(UserOrder).findOne({ oid });
  }
}
