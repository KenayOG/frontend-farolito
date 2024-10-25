import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart, CartRemove, CartRequest, CartUpdated } from '../interfaces/cart';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Carrito';
  constructor(private _http: HttpClient) { }

  // Metodo para invocar el get de carrito.
  getCarrito(): Observable<Cart[]> {
    return this._http.get<Cart[]>(`${this.apiUrl}/usuario-carrito`);
  }

  // Método para agregar al carrito.
  addCarrito(data: CartRequest[]): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/agregar-carrito`, data);
  }

  // Método para eliminar del carrito
  deleteCarrito(data: CartRemove[]): Observable<ResponsePosts> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.request<ResponsePosts>('delete', `${this.apiUrl}/eliminar-del-carrito`, {
      headers,
      body: data
    });
  }

  //metodo para actualizar el carrito
  updateCarrito(data: CartUpdated[]): Observable<ResponsePosts>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.request<ResponsePosts>('patch',`${this.apiUrl}/actualizar-carrito`, {
      headers,
      body: data
    })
  }

}
