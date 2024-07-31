import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LampDecrease } from '../interfaces/lamp-decrease';
import { ComponenteDecrease } from '../interfaces/component-decrease';

@Injectable({
  providedIn: 'root',
})
export class MermaService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Mermas';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar el endPoint GET de Merma-lamparas.
  getMermaLamparas(): Observable<LampDecrease[]> {
    return this._http.get<LampDecrease[]>(`${this.apiUrl}/mermasLamparas`);
  }

  // Metodo para invocar el endPoint GET de Merma-componentes.
  getMermaComponentes(): Observable<ComponenteDecrease[]> {
    return this._http.get<ComponenteDecrease[]>(
      `${this.apiUrl}/mermasComponentes`
    );
  }
}
