import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../interfaces/provider';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Proveedor';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar el endPoint GET de proveedores.
  getProveedores(): Observable<Provider[]> {
    return this._http.get<Provider[]>(`${this.apiUrl}/proveedores`);
  }

  // Método para registrar proveedores
  regProveedores(data: Provider): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/regproveedores`, data);
  }
}
