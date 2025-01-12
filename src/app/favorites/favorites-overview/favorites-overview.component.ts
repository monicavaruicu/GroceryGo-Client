import { Component, ViewChild } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { ProductService } from '../../services/product.service';
import { SessionService } from '../../services/session.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-favorites-overview',
  templateUrl: './favorites-overview.component.html',
  styleUrl: './favorites-overview.component.scss'
})
export class FavoritesOverviewComponent {
  products: ProductModel[] = [];
  pagedProducts: ProductModel[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private productService: ProductService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.getFavoriteProducts();
  }

  getFavoriteProducts(){
    var userId = this.sessionService.userId;
    this.productService.getFavoriteProducts(userId).subscribe(
      (products: ProductModel[]) => {
        this.products = products.filter(
          (product, index, self) =>
            self.findIndex(p => p.id === product.id) === index
        );
        this.updatePagedProducts();
      }
    );
  }

  updatePagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProducts = this.products.slice(startIndex, endIndex);
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedProducts();
  }

  onProductDeleted() {
    this.refreshProducts();
  }

  refreshProducts() {
    var userId = this.sessionService.userId;
    this.productService.getFavoriteProducts(userId).subscribe((products: ProductModel[]) => {
      this.products = products;
      this.updatePagedProducts();
    });
  }
}
