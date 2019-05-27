import { Product } from '../entities';
import { ProductRepository } from '../repositories';

export class ProductService {
  static async create(product: Product) {
    await ProductRepository.create(product);
  }

  static async get(pid) {
    return await ProductRepository.get(pid);
  }
}
