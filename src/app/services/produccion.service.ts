import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Production } from '../interfaces/production';
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
}
