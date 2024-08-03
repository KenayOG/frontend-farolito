import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/components';
import { Observable } from 'rxjs';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class ComponentesService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Componente';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar la lista de catalogo de componentes
  getCatalogoComponentes(): Observable<Componente[]> {
    return this._http.get<Componente[]>(`${this.apiUrl}/componentes`);
  }

  // Método para agregar componente
  createComponente(data: Componente): Observable<ResponsePosts>{
    return this._http.post<ResponsePosts>(`${this.apiUrl}/componente`, data);
  }
}
