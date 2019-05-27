import { Product } from '../entities';
import { ProductService } from '../services';
import { Post, Get, Put, Delete } from '.';

interface CreateRequest {
  name: string;
  price: number;
}

class ProductHandler {
  @Post('/product')
  static async create(params: CreateRequest) {
    const product = new Product();
    product.name = params.name;
    product.price = params.price;
    await ProductService.create(product);
  }

  @Get('/product')
  static async get(product: Product) {
    return await ProductService.get(product);
  }
}
