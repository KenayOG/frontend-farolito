import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Receta';

  constructor(private _http: HttpClient) {}

  // Metodo para invocar el endpoint GET de recetas y catalogo.
  getRecetas(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>(`${this.apiUrl}/recetas`);
  }
}
