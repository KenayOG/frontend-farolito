import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../interfaces/login-request';
import { AuthResponse } from '../interfaces/auth-response';
import { HttpClient } from '@angular/common/http';
import { map, Observable, BehaviorSubject, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.endPoint;
  private tokenKey = 'token';
  private authSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkAuthentication();
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}Usuario/login`, data)
      .pipe(
        map((response) => {
          if (response.isSuccess) {
            localStorage.setItem(this.tokenKey, response.token);
            this.authSubject.next(true);
          }
          return response;
        })
      );
  }

  isAuthenticated(): Observable<boolean> {
    const token = this.getToken();
    if (!token) return of(false);

    return of(!this.isTokenExpired());
  }

  private isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    const decoded: any = jwtDecode(token);
    const isTokenExpired = Date.now() >= decoded['exp'] * 1000;
    if (isTokenExpired) this.logout();
    return isTokenExpired;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.authSubject.next(false);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authSubject.asObservable();
  }

  private checkAuthentication(): void {
    this.isAuthenticated().subscribe(isAuthenticated => {
      this.authSubject.next(isAuthenticated);
    });
  }
}
