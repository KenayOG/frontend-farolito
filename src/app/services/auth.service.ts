import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {LoginRequest} from '../interfaces/login-request';
import {AuthResponse} from '../interfaces/auth-response';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of, throwError} from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import {Customer, CustomerChanger, CustomerEmployee, CustomerForgotten, CustomerReset} from '../interfaces/customer';
import {ResponsePosts} from '../interfaces/response-posts';

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

  // Método para iniciar sesión
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
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  // Método para registrar usuario de tipo Cliente
  signUp(data: Customer): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}Usuario/registerClient`, data)
      .pipe(
        catchError(error => {
          console.error('Error en el registro:', error);
          return throwError(() => new Error('Error al registrar un cliente'));
        })
      );
  }

  // Método para registrar usuario de tipo Empleado
  signUpEmployee(data: CustomerEmployee): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}Usuario/registerEmpl`, data)
      .pipe(
        catchError(error => {
          console.error('Error en el registro:', error);
          return throwError(() => new Error('Error al registrar un empleado'));
        })
      );
  }

  // Método para recuperar contraseña
  forgotPassword(data: CustomerForgotten): Observable<ResponsePosts> {
    return this.http.post<ResponsePosts>(`${this.apiUrl}Usuario/forgot-password`, data)
      .pipe(
        catchError(error => {
          console.error('Error al recuperar la contraseña:', error);
          return throwError(() => new Error('Error al recuperar la contraseña'))
        })
      );
  }

  // Método para resetear la contraseña
  resetPassword(data: CustomerReset): Observable<ResponsePosts> {
    console.log(data);
    return this.http.post<ResponsePosts>(`${this.apiUrl}Usuario/reset-password`, data)
      .pipe(
        catchError(error => {
          console.error('Error al restablecer la contraseña:', error);
          return throwError(() => new Error('Error al restablecer la contraseña'))
        })
      );
  }

  // Método para cambiar la contraseña
  changePassword(data: CustomerChanger): Observable<ResponsePosts> {
    return this.http.post<ResponsePosts>(`${this.apiUrl}Usuario/ChangePass`, data)
      .pipe(
        catchError(error => {
          console.error('Error al cambiar la contraseña:', error);
          return throwError(() => new Error('Error al cambiar la contraseña'))
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

  getToken(): string | null {
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
