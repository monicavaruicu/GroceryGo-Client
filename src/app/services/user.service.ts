import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/RegisterModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerURL = `${environment.apiUrl}/Auth/register`;

  constructor(private http: HttpClient) {}

  register(registerModel: RegisterModel) {
    return this.http.post(this.registerURL, registerModel);
  }
}