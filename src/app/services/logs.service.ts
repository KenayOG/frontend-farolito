import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logs } from '../interfaces/logs';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  private apiUrl: string = `${environment.endPoint}Logs/get-logs`;

  constructor(private _http: HttpClient) {}

  // Método para invocar el endPoint GET de Logs.
  getLogs(moduloNombre: string): Observable<Logs[]> {
    const params = new HttpParams().set('moduloNombre', moduloNombre);
    return this._http.get<Logs[]>(this.apiUrl, { params });
  }
}
