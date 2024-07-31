import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LampInventory } from '../interfaces/lamp-inventory';
import { ComponentInventory } from '../interfaces/component-inventory';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Inventario';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar el endPoint GET de inventarios-lamparas.
  getInventarioLampara(): Observable<LampInventory[]> {
    return this._http.get<LampInventory[]>(
      `${this.apiUrl}/inventario-lamparas`
    );
  }

  // Metodo para invocar el endPoint GET de inventarios-componentes.
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

  // Metodo para obtener la lampara por ID.
  getLamparaPorId(id: number): Observable<LampInventory | undefined> {
    return this.getInventarioLampara().pipe(
      map((lamparas) => lamparas.find((lamp) => lamp.id === id))
    );
  }
}
