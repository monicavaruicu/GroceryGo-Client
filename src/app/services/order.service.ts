import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SaveOrderModel } from '../models/SaveOrderModel';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/OrderModel';
import { CartItemModel } from '../models/CartItemModel';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseURL = environment.apiUrl;
  private order: SaveOrderModel;

  constructor(private http: HttpClient) {
    const savedOrder = localStorage.getItem('order');
    this.order = savedOrder ? JSON.parse(savedOrder) : {} as SaveOrderModel;
  }

  placeOrder(order: SaveOrderModel) {
    const url = `${this.baseURL}/order/place-order`;
    return this.http.post(url, order);
  }

  getOrders(userId: number) : Observable<OrderModel[]> {
    const url = `${this.baseURL}/order/get-orders?userId=${userId}`;
    return this.http.get<OrderModel[]>(url);
  }

  removeOneEntryFromCart(entryToRemove: CartItemModel){
    const url = `${this.baseURL}/preorder/delete-from-preorder`;
    return this.http.post(url, entryToRemove);
  }

  setOrder(order: SaveOrderModel) {
    this.order = order;
    localStorage.setItem('order', JSON.stringify(this.order));
  }

  getOrder() : SaveOrderModel {
    const order = this.order;
    localStorage.removeItem('order');
    
    return order;
  }

  getOrderProducts(orderId: number): Observable<ProductModel[]> {
    const url = `${this.baseURL}/order/get-order-products?orderId=${orderId}`;
    return this.http.get<ProductModel[]>(url);
  }
}