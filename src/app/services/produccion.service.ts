import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Production,
  ProductionHechas,
  ProductionReject,
  ProductionSolicitude,
  ProductionSteps,
} from '../interfaces/production';
import { ResponsePosts } from '../interfaces/response-posts';
@Injectable({
  providedIn: 'root',
})
export class ProduccionService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Produccion';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar el endPoint GET de solicitudes de produccion.
  getSolicitudesProduccion(): Observable<Production[]> {
    return this._http.get<Production[]>(`${this.apiUrl}/CargarSolicitudes`);
  }

  // Metodo para cargar producciones hechas
  getCargarProduccionesHechas(): Observable<ProductionHechas[]> {
    return this._http.get<ProductionHechas[]>(
      `${this.apiUrl}/CargarProduciones`
    );
  }

  // Metodo para cargar producciones hechas
  getCargarProducciones(): Observable<ProductionSteps[]> {
    return this._http.get<ProductionSteps[]>(
      `${this.apiUrl}/CargarProduciones`
    );
  }

  // Metodo para generar lote por nombre de lámpara
  generateLote(): Observable<string> {
    return this._http.get<string>(`${this.apiUrl}/GenerarLote`);
  }

  // Método para agregar solicitud producción
  createProdSolicitude(data: ProductionSolicitude): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(
      `${this.apiUrl}/AgregarSolicitud`,
      data
    );
  }

  // Método para autorizar solicitud de producción
  approveSolicitude(data: number): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(
      `${this.apiUrl}/AutorizarSolicitud`,
      data
    );
  }

  // Método para Rechazar una solicitud de producción
  rejectSolicitude(data: ProductionReject): Observable<ResponsePosts> {
    return this._http.patch<ResponsePosts>(`${this.apiUrl}/RechazarSolicitud`, data);
  }

  // Método para actualizar una solicitud de producción
  updateSolicitude(data: number): Observable<ResponsePosts> {
    return this._http.patch<ResponsePosts>(`${this.apiUrl}/ActualizarProduccion`, data);
  }

  // Método para terminar una solicitud de producción
  finishSolicitude(data: number): Observable<ResponsePosts> {
    return this._http.patch<ResponsePosts>(`${this.apiUrl}/TerminarProduccion`, data);
  }
}
