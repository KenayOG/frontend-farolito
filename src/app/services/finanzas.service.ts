import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CapitalFarolito } from '../interfaces/capital-farolito';
@Injectable({
  providedIn: 'root',
})
export class FinanzasService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Capital';
  constructor(private _http: HttpClient) {}

  getCapitalFarolito(startDate: string, endDate: string): Observable<CapitalFarolito> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this._http.get<CapitalFarolito>(`${this.apiUrl}/total`, { params });
  }
}
