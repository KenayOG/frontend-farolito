import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ExistenciasComponentes, ExistenciasLampara, LamparasCliente, MejorCliente, VentasPeriodos, VentasProductoPeriodos, VentasProductos } from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Dashboard';

  constructor(private _http: HttpClient) { }

  // Método para mostrar las Ventas de Productos
  getVentasProductos(): Observable<VentasProductos[]> {
    return this._http.get<VentasProductos[]>(`${this.apiUrl}/VentasProductos`);
  }

  // Método para mostrar las Ventas de Productos por Periodos
  getVentasProductoPeriodos(): Observable<VentasProductoPeriodos[]> {
    return this._http.get<VentasProductoPeriodos[]>(`${this.apiUrl}/VentasProductoPeriodos`);
  }

  // Método para mostrar la existencias de componentes
  getExistenciaComponente(): Observable<ExistenciasComponentes[]> {
    return this._http.get<ExistenciasComponentes[]>(`${this.apiUrl}/ExistenciasComponentes`);
  }
  
  // Método para mostrar la existencias de lámparas
  getExistenciaLampara(): Observable<ExistenciasLampara[]> {
    return this._http.get<ExistenciasLampara[]>(`${this.apiUrl}/ExistenciasLampara`);
  }

  // Método para mostrar los periodos y sus ventas
  getVentasPeriodos(): Observable<VentasPeriodos[]> {
    return this._http.get<VentasPeriodos[]>(`${this.apiUrl}/VentasPeriodos`);
  } 
  
  // Método para mostrar las lámparas vendidas por cliente
  getLamparasCliente(): Observable<LamparasCliente[]> {
    return this._http.get<LamparasCliente[]>(`${this.apiUrl}/LamparasCliente`);
  }

  // Método para mostrar el mejor cliente
  getMejorCliente(): Observable<MejorCliente> {
    return this._http.get<MejorCliente>(`${this.apiUrl}/MejorCliente`);
  }

}
