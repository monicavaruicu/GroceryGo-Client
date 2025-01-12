import { Component, ViewChild } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { ProviderModel } from '../../models/ProviderModel';
import { ProviderService } from '../../services/provider.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrl: './products-overview.component.scss'
})
export class ProductsOverviewComponent {
  products: ProductModel[] = [];
  providers: ProviderModel[];
  filteredProducts: ProductModel[] = [];
  pagedProducts: ProductModel[] = [];
  currentPage: number = 0;
  pageSize: number = 10;

  priceFilterEnabled: boolean = false;
  minPrice: number = 0;
  maxPrice: number = 1000;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private providerService: ProviderService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const subcategoryIdParam = params.get('subcategoryId');
      if (subcategoryIdParam) {
        this.getProductsBySubcategory(+subcategoryIdParam);
      }})
    this.getAllProviders();
  }

  getProductsBySubcategory(subcategoryId: number){
    this.productService.getProductsBySubcategory(subcategoryId).subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = products;
        this.updatePagedProducts();
      }
    );
  }

  updatePagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedProducts();
  }

  searchFilter(value: string, products: ProductModel[]) {
    return products.filter(product =>
      product.name.toLowerCase().includes(value)
    );
  }

  minPriceFilter(value: string, products: ProductModel[]) {
    const minPrice = value ? parseInt(value, 10) : 0;
    return products.filter(product => {
      return (product.price >= minPrice)});
  }

  maxPriceFilter(value: string, products: ProductModel[]) {
    const maxPrice = value ? parseInt(value, 10) : 1000;
    return products.filter(product => {
      return (product.price <= maxPrice)});
  }

  providerFilter(value: number, products: ProductModel[]) {
    if (value == null || value == undefined || value == 0)
      return products;
    return products.filter(product => {
      return (product.providerId == value)});
  }

  applyFilter(event: Event, searchValue: string, minPriceValue: string, maxPriceValue: string, providerId: number) {
    var searchProducts = this.searchFilter(searchValue, this.products);
    var minPriceProducts = this.minPriceFilter(minPriceValue, searchProducts);
    var maxPriceProducts = this.maxPriceFilter(maxPriceValue, minPriceProducts);
    this.filteredProducts = this.providerFilter(providerId, maxPriceProducts);

    this.currentPage = 0;
    this.updatePagedProducts(); 
  }

  getAllProviders(){
    this.providerService.getAllProviders().subscribe((providers) => {
      this.providers = providers;
    });
  }
}
