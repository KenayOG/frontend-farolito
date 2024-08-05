import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { SaleRequestList } from '../interfaces/sale';
import { Observable } from 'rxjs';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Venta';

  constructor(private _http: HttpClient) {}
 
  // Método para agregar venta
  createSell(data: SaleRequestList[]): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/venta-lampara`, data);
  }
}
