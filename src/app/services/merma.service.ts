import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LampDecrease, LampDecreaseRequest } from '../interfaces/lamp-decrease';
import { ComponenteDecrease, ComponenteDecreaseRequest } from '../interfaces/component-decrease';
import { ResponsePosts } from '../interfaces/response-posts';

@Injectable({
  providedIn: 'root',
})
export class MermaService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Mermas';
  constructor(private _http: HttpClient) {}

  // Método para invocar el endPoint GET de Merma-lamparas.
  getMermaLamparas(): Observable<LampDecrease[]> {
    return this._http.get<LampDecrease[]>(`${this.apiUrl}/mermasLamparas`);
  }

  // Método para invocar el endPoint GET de Merma-componentes.
  getMermaComponentes(): Observable<ComponenteDecrease[]> {
    return this._http.get<ComponenteDecrease[]>(
      `${this.apiUrl}/mermasComponentes`
    );
  }

  // Método para la punta merma de inventario de componentes
  sendMermaComponentes(data: ComponenteDecreaseRequest): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/mermaComponente`, data);
  }

  // Método para la punta merma de inventario de lámparas
  sendMermaLamparas(data: LampDecreaseRequest): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/mermaComponente`, data);
  }
}
