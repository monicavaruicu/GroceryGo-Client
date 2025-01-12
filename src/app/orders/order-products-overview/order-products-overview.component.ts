import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProductModel } from '../../models/ProductModel';
import { ProductService } from '../../services/product.service';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { OrderModel } from '../../models/OrderModel';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-products-overview',
  templateUrl: './order-products-overview.component.html',
  styleUrl: './order-products-overview.component.scss'
})
export class OrderProductsOverviewComponent {
  products: ProductModel[] = [];
  order: OrderModel;
  distinctProducts: ProductModel[] = [];
  orderId: number;
  pagedProducts: ProductModel[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private productService: ProductService,
    private sessionService: SessionService,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.paramMap.get('orderId'));
    const state = history.state;
    this.order = state.order || null;
    this.orderService.getOrderProducts(this.orderId).subscribe((products: ProductModel[]) => {
      this.products = products;
      const productMap = new Map();
      this.products.forEach(product => {
        productMap.set(product.id, product);
      });
      this.distinctProducts = Array.from(productMap.values());
      this.updatePagedProducts();
    });
  }

  updatePagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProducts = this.distinctProducts.slice(startIndex, endIndex);
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedProducts();
  }

  countProductOccurrences(product: ProductModel): number {
    return this.products.filter(p => p.id === product.id).length;
  }
}
