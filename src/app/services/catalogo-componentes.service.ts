import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/components';

@Injectable({
  providedIn: 'root',
})
export class CatalogoComponentesService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Componente';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar la lista de catalogo de componentes
  getCatalogoComponentes(): Observable<Componente[]> {
    return this._http.get<Componente[]>(`${this.apiUrl}/componentes`);
  }
}
