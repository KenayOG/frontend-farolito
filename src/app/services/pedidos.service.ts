import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LogisticManager } from '../interfaces/logistic-manager';
import { OrderCustomer } from '../interfaces/customer-order';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Pedido';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar los pedidos para encargado de logistica
  getTodosLosPedidos(): Observable<LogisticManager[]> {
    return this._http.get<LogisticManager[]>(
      `${this.apiUrl}/obtener-todos-pedidos`
    );
  }

  // Metodo para traer los pedidos de un usuario en especifico
  getPedidosUsuario(): Observable<OrderCustomer[]> {
    return this._http.get<OrderCustomer[]>(`${this.apiUrl}/obtener-pedidos`);
  }
}
