import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { LampInventory } from '../interfaces/lamp-inventory';

@Injectable({
  providedIn: 'root',
})
export class InventarioLamparaService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Inventario';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar al endpoint GET de inventario-lampara.
  getInventarioLampara(): Observable<LampInventory[]> {
    return this._http.get<LampInventory[]>(
      `${this.apiUrl}/inventario-lamparas`
    );
  }
}
