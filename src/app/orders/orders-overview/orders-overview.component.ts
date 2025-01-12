import { Component, ViewChild } from '@angular/core';
import { OrderModel } from '../../models/OrderModel';
import { MatPaginator } from '@angular/material/paginator';
import { OrderService } from '../../services/order.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-orders-overview',
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.scss'
})
export class OrdersOverviewComponent {
  orders: OrderModel[] = [];
  pagedOrders: OrderModel[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private orderService: OrderService,
    private sessionService: SessionService
  )
  {}

  ngOnInit()
  {
    this.getAllOrders();
  }

  updatePagedOrders() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedOrders = this.orders.slice(startIndex, endIndex);
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedOrders();
  }

  getAllOrders() {
    var userId = this.sessionService.userId;
    this.orderService.getOrders(userId).subscribe((orders: OrderModel[]) => {
      this.orders = orders.reverse();
      this.updatePagedOrders();
    }
    );
  }
}
