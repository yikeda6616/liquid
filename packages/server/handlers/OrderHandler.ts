import { Order } from '../entities';
import { OrderService } from '../services';
import { Post, Get, Put, Delete } from '.';

interface CreateRequest {}

class OrderHandler {
  @Post('/order')
  static async create(params: CreateRequest) {
    const order = new Order();
    await OrderService.create(order);
  }

  @Get('/order')
  static async get() {
    return await OrderService.get(1);
  }
}
