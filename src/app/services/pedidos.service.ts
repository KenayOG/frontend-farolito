import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LogisticManager } from '../interfaces/logistic-manager';
import { OrderCustomer } from '../interfaces/customer-order';
import { EstatusOrder } from '../interfaces/orders';
import { ResponsePosts } from '../interfaces/response-posts';

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

  // Metodo para modificar el estado del pedido para encargado de logistica
  updateEstatusPedido(data: EstatusOrder): Observable<ResponsePosts> {
    return this._http.put<ResponsePosts>(
      `${this.apiUrl}/actualizar-estado`,
      data
    );
  }
}
