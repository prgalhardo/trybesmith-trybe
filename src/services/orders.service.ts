import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import { Order } from '../../interfaces/orders.interfaces';

export default class OrderService {
  public orderModel: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();
    const products = await this.productModel.getAll();

    const allOrders = orders.map((order) => {
      const productsIds = products.filter((product) =>
        product.orderId === order.id).map((listOfProducts) => listOfProducts.id);
      return { ...order, productsIds };
    });
    return allOrders;
  }
}