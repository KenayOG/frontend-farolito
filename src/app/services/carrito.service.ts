import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cart, CartRequest } from '../interfaces/cart';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Carrito';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar el get de carrito.
  getCarrito(): Observable<Cart[]> {
    return this._http.get<Cart[]>(`${this.apiUrl}/usuario-carrito`);
  }

  // Método para agregar al carrito.
  addCarrito(data: CartRequest): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/agregar-carrito`, data);
  }
}
