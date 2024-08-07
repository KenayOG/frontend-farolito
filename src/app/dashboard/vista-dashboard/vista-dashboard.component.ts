import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, Chart, registerables } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';
import { ExistenciasComponentes, ExistenciasLampara, LamparasCliente, MejorCliente, VentasPeriodos, VentasProductoPeriodos, VentasProductos } from '../../interfaces/dashboard';

Chart.register(...registerables);

@Component({
  selector: 'app-vista-dashboard',
  templateUrl: './vista-dashboard.component.html',
  styleUrls: ['./vista-dashboard.component.css']
})
export class VistaDashboardComponent implements OnInit {

  public ventasProductosLabels: string[] = [];
  public ventasProductosData: number[] = [];

  public ventasPeriodosLabels: string[] = [];
  public ventasPeriodosData: number[] = [];

  public existenciaComponentesLabels: string[] = [];
  public existenciaComponentesData: number[] = [];

  public existenciaLamparasLabels: string[] = [];
  public existenciaLamparasData: number[] = [];

  public comprasPeriodosLabels: string[] = [];
  public comprasPeriodosData: number[] = [];

  public lamparasClienteLabels: string[] = [];
  public lamparasClienteData: number[] = [];

  public mejorCliente: MejorCliente | null = null;

  public chartOptions: ChartOptions = {
    responsive: true,
  };
  public chartType: ChartType = 'bar';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadVentasProductos();
    this.loadVentasProductoPeriodos();
    this.loadExistenciaComponentes();
    this.loadExistenciaLamparas();
    this.loadVentasPeriodos();
    this.loadLamparasCliente();
    this.loadMejorCliente();
  }

  loadVentasProductos(): void {
    this.dashboardService.getVentasProductos().subscribe((data: VentasProductos[]) => {
      this.ventasProductosLabels = data.map(item => item.producto);
      this.ventasProductosData = data.map(item => item.totalRecaudado);
      this.createChart('ventasProductosChart', this.ventasProductosLabels, this.ventasProductosData, 'Ventas por Producto');
    });
  }

  loadVentasProductoPeriodos(): void {
    this.dashboardService.getVentasProductoPeriodos().subscribe((data: VentasProductoPeriodos[]) => {
      this.ventasPeriodosLabels = data.map(item => item.producto);
      this.ventasPeriodosData = data.map(item => item.numeroDeVentas);
      this.createChart('ventasPeriodosChart', this.ventasPeriodosLabels, this.ventasPeriodosData, 'Ventas por Periodo');
    });
  }

  loadExistenciaComponentes(): void {
    this.dashboardService.getExistenciaComponente().subscribe((data: ExistenciasComponentes[]) => {
      this.existenciaComponentesLabels = data.map(item => item.componente);
      this.existenciaComponentesData = data.map(item => item.existencia);
      this.createChart('existenciaComponentesChart', this.existenciaComponentesLabels, this.existenciaComponentesData, 'Existencias de Componentes');
    });
  }

  loadExistenciaLamparas(): void {
    this.dashboardService.getExistenciaLampara().subscribe((data: ExistenciasLampara[]) => {
      this.existenciaLamparasLabels = data.map(item => item.productoTerminado);
      this.existenciaLamparasData = data.map(item => item.existencia);
      this.createChart('existenciaLamparasChart', this.existenciaLamparasLabels, this.existenciaLamparasData, 'Existencias de Lámparas');
    });
  }

  loadVentasPeriodos(): void {
    this.dashboardService.getVentasPeriodos().subscribe((data: VentasPeriodos[]) => {
      this.comprasPeriodosLabels = data.map(item => `${item.año}-${item.mes}`);
      this.comprasPeriodosData = data.map(item => item.numeroDeCompras);
      this.createChart('comprasPeriodosChart', this.comprasPeriodosLabels, this.comprasPeriodosData, 'Compras por Periodo');
    });
  }

  loadLamparasCliente(): void {
    this.dashboardService.getLamparasCliente().subscribe((data: LamparasCliente[]) => {
      this.lamparasClienteLabels = data.map(item => item.cliente);
      this.lamparasClienteData = data.map(item => item.numeroDeVentas);
      this.createChart('lamparasClienteChart', this.lamparasClienteLabels, this.lamparasClienteData, 'Lámparas Compradas por Cliente');
    });
  }

  loadMejorCliente(): void {
    this.dashboardService.getMejorCliente().subscribe((data: MejorCliente) => {
      this.mejorCliente = data;
    });
  }

  createChart(chartId: string, labels: string[], data: number[], label: string): void {
    const canvas = <HTMLCanvasElement>document.getElementById(chartId);
    const ctx = canvas.getContext('2d');

    new Chart(ctx!, {
      type: this.chartType,
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: 'rgba(255, 204, 102, 0.2)',
          borderColor: 'rgba(199, 153, 60, 1)',
          borderWidth: 1
        }]
      },
      options: this.chartOptions
    });
  }
}