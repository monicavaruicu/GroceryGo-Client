import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/CategoryModel';
import { environment } from '../../environments/environment';
import { SubcategoryModel } from '../models/SubcategoryModel';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSubcategoriesByCategory(categoryId: number): Observable<CategoryModel[]> {
    const url = `${this.baseURL}/Product/get-subcategories?categoryId=${categoryId}`;
    return this.http.get<CategoryModel[]>(url);
  }

  getProductSubcategory(subcategoryId: number): Observable<SubcategoryModel[]> {
    const url = `${this.baseURL}/Product/get-subcategorybyId?subcategoryId=${subcategoryId}`;
    return this.http.get<SubcategoryModel[]>(url);
  }
}