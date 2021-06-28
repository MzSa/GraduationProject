import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from './login-response';
import {Observable} from 'rxjs';
import {LoginRequest} from './login-request';
import {Catalog} from './register/model/catalog';
import {RegisterRequest} from './register/model/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://172.20.10.7:8080/auth/auth/signIn`, loginRequest, {
      headers: {'proxy': 'guest'}
    });
  }

  getcatalogs(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`http://172.20.10.7:8080/ngo/catalog/all`, {
      headers: {'proxy': 'guest'}
    });
  }

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post<any>(`http://172.20.10.7:8080/ngo/NGO/register`, registerRequest, {
      headers: {'proxy': 'guest'}
    });
  }
}
