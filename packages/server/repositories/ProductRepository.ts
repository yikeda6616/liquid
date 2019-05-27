import { Product } from '../entities';
import { getRepository } from 'typeorm';

export class ProductRepository {
  static async create(product: Product) {}

  static async get(pid: number) {
    return await getRepository(Product).findOne(pid);
  }
}
