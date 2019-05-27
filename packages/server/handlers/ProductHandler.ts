import { Product } from '../entities';
import { ProductService } from '../services';
import { Post, Get, Put, Delete } from '.';

interface CreateRequest {
  id: number;
  name: string;
  price: number;
  description: string;
  productStatusId: number;
  createdAt: Date;
  updatedAt: Date;
  stock: number;
}

class ProductHandler {
  @Post('/product')
  static async create(params: CreateRequest) {
    const product = new Product();
    product.id = params.id;
    product.name = params.name;
    product.price = params.price;
    product.description = params.description;
    product.productStatusId = params.productStatusId;
    product.createdAt = new Date();
    product.updatedAt = new Date();
    product.stock = params.stock;
    await ProductService.create(product);
  }

  @Get('/product')
  static async get(product: Product) {
    return await ProductService.get(product);
  }
}
