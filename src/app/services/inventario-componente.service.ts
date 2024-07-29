import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentInventory } from '../interfaces/component-inventory';

@Injectable({
  providedIn: 'root',
})
export class InventarioComponenteService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Inventario';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar al endpoint GET de inventario-componente.
  getInventarioComponente(): Observable<ComponentInventory[]> {
    return this._http.get<ComponentInventory[]>(
      `${this.apiUrl}/inventario-componentes`
    );
  }

  // Metodo para obtener el componente por ID.
  getComponentePorId(id: number): Observable<ComponentInventory | undefined> {
    return this.getInventarioComponente().pipe(
      map((componentes) => componentes.find((component) => component.id === id))
    );
  }
}
