import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Componente, ComponenteRequest } from '../interfaces/components';
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
  createComponente(data: ComponenteRequest): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/componente`, data);
  }
  // Metodo para actualizar un componente
  updateComponente(data: ComponenteRequest): Observable<ResponsePosts> {
    return this._http.put<ResponsePosts>(`${this.apiUrl}/componente`, data);
  }

  // Metodo para elimina logicamente un componente
  updateEstatusComponente(id: number, estatus: boolean): Observable<void> {
    const payload = { id, estatus };
    return this._http.patch<void>(`${this.apiUrl}/componente`, payload);
  }
}
