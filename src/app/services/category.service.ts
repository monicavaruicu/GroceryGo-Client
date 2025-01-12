import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/CategoryModel';
import { environment } from '../../environments/environment';
import { SaveCategoryModel } from '../models/SaveCategoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseURL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryModel[]> {
    const url = `${this.baseURL}/category/get-all`;
    return this.http.get<CategoryModel[]>(url);
  }

  addCategory(category: SaveCategoryModel){
    const url = `${this.baseURL}/category/add-category`;
    return this.http.post(url, category);
  }
}