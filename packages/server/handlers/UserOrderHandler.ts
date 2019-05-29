import { UserOrder } from '../entities';
import { UserOrderService } from '../services';
import { Post, Get, Put, Delete } from '.';

interface CreateRequest {
  uid: number;
  oid: string;
  price: number;
  userOrderStatusId: number;
  createdAt: Date;
  updatedAt: Date;
}

class UserOrderHandler {
  @Post('/userOrder')
  static async create(params: CreateRequest) {
    const userOrder = new UserOrder();
    userOrder.uid = 1;
    userOrder.price = params.price;
    userOrder.userOrderStatus = 'In Progress';
    userOrder.createdAt = new Date();
    userOrder.updatedAt = new Date();
    await UserOrderService.create(userOrder);
  }

  @Get('/userOrder')
  static async get(oid: string) {
    return await UserOrderService.get(oid);
  }
}
