import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../interfaces/cart';

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
}
