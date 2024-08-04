import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../interfaces/purchase';
import { Observable } from 'rxjs';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Compra';

  constructor(private _http: HttpClient) { }

  // Método para agregar compras de inventario
  agregarLote(data: Purchase): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/agregar-compras`, data);
  }
}
