import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Purchase, PurchaseAll } from '../interfaces/purchase';
import { Observable } from 'rxjs';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Compra';

  constructor(private _http: HttpClient) {}

  // Método para agregar compras de inventario
  agregarLote(data: Purchase): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(
      `${this.apiUrl}/agregar-compras`,
      data
    );
  }

  // Metodo para invocar el endPoint GET de compras.
  getCompras(): Observable<PurchaseAll[]> {
    return this._http.get<PurchaseAll[]>(`${this.apiUrl}/compras`);
  }

  // Metodo para invocar el endPoint GET de compras por usuario.
  getComprasUser(): Observable<PurchaseAll[]> {
    return this._http.get<PurchaseAll[]>(`${this.apiUrl}/comprasUsuario`);
  }
}
