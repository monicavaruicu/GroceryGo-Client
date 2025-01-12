import { Component, ViewChild } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { ProductService } from '../../services/product.service';
import { SessionService } from '../../services/session.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrl: './cart-overview.component.scss'
})
export class CartOverviewComponent {
  products: ProductModel[] = [];
  pagedProducts: ProductModel[] = [];
  distinctProducts: ProductModel[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private productService: ProductService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() {
    const userId = this.sessionService.userId;
    this.productService.getCartProducts(userId).subscribe(
      (products : ProductModel[]) => {
        this.products = products;
        const productMap = new Map();
        this.products.forEach(product => {
          productMap.set(product.id, product);
        });
        this.distinctProducts = Array.from(productMap.values());
        this.updatePagedProducts();
      }
    );
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

  onProductDeleted() {
    this.refreshProducts();
  }

  refreshProducts() {
    var userId = this.sessionService.userId;
    this.productService.getCartProducts(userId).subscribe((products: ProductModel[]) => {
      this.products = products;
      const productMap = new Map();
      this.products.forEach(product => {
        productMap.set(product.id, product);
      });
      this.distinctProducts = Array.from(productMap.values());
      this.updatePagedProducts();
    });
  }
}
