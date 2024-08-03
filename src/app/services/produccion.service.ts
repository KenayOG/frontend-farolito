import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Production, ProductionSolicitude } from '../interfaces/production';
import { ResponsePosts } from '../interfaces/response-posts';
@Injectable({
  providedIn: 'root',
})
export class ProduccionService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Produccion';
  constructor(private _http: HttpClient) { }

  // Metodo para invocar el endPoint GET de solicitudes de produccion.
  getSolicitudesProduccion(): Observable<Production[]> {
    return this._http.get<Production[]>(`${this.apiUrl}/CargarSolicitudes`);
  }

  // Método para agregar solicitud producción
  createProdSolicitude(data: ProductionSolicitude): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/AgregarSolicitud`, data);
  }

  // Método para autorizar solicitud de producción
  approveSolicitude(data: boolean): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/AutorizarSolicitud`, data);
  }
}
