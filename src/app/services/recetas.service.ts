import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Recipe, RecipeRequest } from '../interfaces/recipe';
import { Observable } from 'rxjs';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Receta';

  constructor(private _http: HttpClient) {}

  // Método para invocar el endpoint GET de recetas y catalogo.
  getRecetas(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>(`${this.apiUrl}/recetas`);
  }

  // Método para agregar Recetas
  createRecipe(data: RecipeRequest): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/agregar-recetas`, data);
  }

}
