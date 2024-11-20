import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { SessionModel } from '../models/SessionModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loginURL = `${environment.apiUrl}/Auth/login`;
  
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel): Observable<SessionModel> {
    return this.http.post<SessionModel>(this.loginURL, loginModel);
  }
}