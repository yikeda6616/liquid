import { Product } from '../entities';
import { getRepository } from 'typeorm';

export class ProductRepository {
  static async create(product: Product) {
    await getRepository(Product).insert(product);
  }

  static async get(pid: number) {
    return await getRepository(Product).findOne(pid);
  }
}
