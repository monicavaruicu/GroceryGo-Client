import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/ProductModel';
import { ProductSaveModel } from '../models/ProductAddModel';
import { environment } from '../../environments/environment';
import { CartItemModel } from '../models/CartItemModel';
import { FavoriteModel } from '../models/FavoriteModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getProductById(productId: number)
  {
    const url = `${this.baseURL}/product/get-product-by-id?productId=${productId}`;
    return this.http.get<ProductModel>(url);
  }

  getProductsBySubcategory(subcategoryId: number): Observable<ProductModel[]> {
    const url = `${this.baseURL}/product/get-all?subcategoryId=${subcategoryId}`;
    return this.http.get<ProductModel[]>(url);
  }

  addProduct(product: ProductSaveModel) {
    const url = `${this.baseURL}/product/save-product`;
    return this.http.post(url, product);
  }

  updateProduct(product: ProductModel) {
    const url = `${this.baseURL}/product/update-product`;
    return this.http.post(url, product);
  }

  deleteProduct(productId: number){
    const url = `${this.baseURL}/product/delete-product?productId=${productId}`;
    return this.http.post(url, null);
  }

  addProductToCart(cartItem: CartItemModel){
    const url = `${this.baseURL}/preorder/add-to-preorder`;
    return this.http.post(url, cartItem);
  }

  getCartProducts(userId: number): Observable<ProductModel[]> {
    const url = `${this.baseURL}/preorder/get-preorder-by-user?userId=${userId}`;
    return this.http.get<ProductModel[]>(url);
  }

  setProductAsFavorite(favorite: FavoriteModel){
    const url = `${this.baseURL}/favorite/save-favorite`;
    return this.http.post(url, favorite);
  }

  getFavoriteProducts(userId: number): Observable<ProductModel[]> {
    const url = `${this.baseURL}/favorite/get-favorite-by-user?userId=${userId}`;
    return this.http.get<ProductModel[]>(url);
  }

  removeProductFromFavorites(favorite: FavoriteModel){
    const url = `${this.baseURL}/favorite/remove-from-favorite`;
    return this.http.post(url, favorite);
  }
}