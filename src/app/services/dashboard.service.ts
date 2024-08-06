import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ComprasPorPeriodo, ComprasProductos, InventarioMateriasPrimas, InventarioProductosTerminados, MejorCliente, VentasPorLote, VentasPorProducto } from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Dashboard';

  constructor(private _http: HttpClient) { }

  // Método para mostrar las Ventas de Productos
  getVentasProductos(): Observable<VentasPorProducto[]> {
    return this._http.get<VentasPorProducto[]>(`${this.apiUrl}/VentasProductos`);
  }

  // Método para mostrar las Ventas de Productos por Periodos
  getVentasProductoPeriodos(): Observable<VentasPorLote[]> {
    return this._http.get<VentasPorLote[]>(`${this.apiUrl}/VentasProductoPeriodos`);
  }

  // Método para mostrar la existencias de componentes
  getExistenciaComponente(): Observable<InventarioMateriasPrimas[]> {
    return this._http.get<InventarioMateriasPrimas[]>(`${this.apiUrl}/ExistenciasComponentes`);
  }
  
  // Método para mostrar la existencias de lámparas
  getExistenciaLampara(): Observable<InventarioProductosTerminados[]> {
    return this._http.get<InventarioProductosTerminados[]>(`${this.apiUrl}/ExistenciasLampara`);
  }

  // Método para mostrar los periodos y sus ventas
  getVentasPeriodos(): Observable<ComprasPorPeriodo[]> {
    return this._http.get<ComprasPorPeriodo[]>(`${this.apiUrl}/VentasPeriodos`);
  } 
  
  // Método para mostrar las lámparas vendidas por cliente
  getLamparasCliente(): Observable<ComprasProductos[]> {
    return this._http.get<ComprasProductos[]>(`${this.apiUrl}/LamparasCliente`);
  }

  // Método para mostrar el mejor cliente
  getMejorCliente(): Observable<MejorCliente> {
    return this._http.get<MejorCliente>(`${this.apiUrl}/MejorCliente`);
  }

}
