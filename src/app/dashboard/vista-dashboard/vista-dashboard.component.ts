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
  public ventasProductosDataVentas: number[] = [];
  public ventasProductosDataRecaudado: number[] = [];

  public ventasPeriodosLabels: string[] = [];
  public ventasPeriodosDataVentas: number[] = [];
  public ventasPeriodosDataRecaudado: number[] = [];

  public existenciaComponentesLabels: string[] = [];
  public existenciaComponentesData: number[] = [];

  public existenciaLamparasLabels: string[] = [];
  public existenciaLamparasData: number[] = [];

  public comprasPeriodosLabels: string[] = [];
  public comprasPeriodosData: number[] = [];

  public lamparasClienteLabels: string[] = [];
  public lamparasClienteDataVentas: number[] = [];
  public lamparasClienteDataGastado: number[] = [];

  public mejorCliente: MejorCliente | null = null;

  public chartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public pieChartType: ChartType = 'pie';
  public lineChartType: ChartType = 'line';

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
      this.ventasProductosDataVentas = data.map(item => item.numeroDeVentas);
      this.ventasProductosDataRecaudado = data.map(item => item.totalRecaudado);
      this.createBarChart('ventasProductosChart', this.ventasProductosLabels, [
        { label: 'Número de Ventas', data: this.ventasProductosDataVentas },
        { label: 'Total Recaudado', data: this.ventasProductosDataRecaudado }
      ]);
    });
  }

  loadVentasProductoPeriodos(): void {
    this.dashboardService.getVentasProductoPeriodos().subscribe((data: VentasProductoPeriodos[]) => {
      this.ventasPeriodosLabels = data.map(item => `${item.anio}-${item.mes}`);
      this.ventasPeriodosDataVentas = data.map(item => item.numeroDeVentas);
      this.createLineChart('ventasPeriodosChart', this.ventasPeriodosLabels, this.ventasPeriodosDataVentas, 'Ventas por Periodo');
    });
  }

  loadExistenciaComponentes(): void {
    this.dashboardService.getExistenciaComponente().subscribe((data: ExistenciasComponentes[]) => {
      this.existenciaComponentesLabels = data.map(item => item.componente);
      this.existenciaComponentesData = data.map(item => item.existencia);
      this.createPieChart('existenciaComponentesChart', this.existenciaComponentesLabels, this.existenciaComponentesData, 'Existencias de Componentes');
    });
  }

  loadExistenciaLamparas(): void {
    this.dashboardService.getExistenciaLampara().subscribe((data: ExistenciasLampara[]) => {
      this.existenciaLamparasLabels = data.map(item => item.productoTerminado);
      this.existenciaLamparasData = data.map(item => item.existencia);
      this.createPieChart('existenciaLamparasChart', this.existenciaLamparasLabels, this.existenciaLamparasData, 'Existencias de Lámparas');
    });
  }

  loadVentasPeriodos(): void {
    this.dashboardService.getVentasPeriodos().subscribe((data: VentasPeriodos[]) => {
      this.comprasPeriodosLabels = data.map(item => `${item.año}-${item.mes}`);
      this.comprasPeriodosData = data.map(item => item.numeroDeCompras);
      this.createLineChart('comprasPeriodosChart', this.comprasPeriodosLabels, this.comprasPeriodosData, 'Compras por Periodo');
    });
  }

  loadLamparasCliente(): void {
    this.dashboardService.getLamparasCliente().subscribe((data: LamparasCliente[]) => {
      this.lamparasClienteLabels = data.map(item => item.cliente);
      this.lamparasClienteDataVentas = data.map(item => item.numeroDeVentas);
      this.lamparasClienteDataGastado = data.map(item => item.totalGastado);
      this.createBarChart('lamparasClienteChart', this.lamparasClienteLabels, [
        { label: 'Número de Ventas', data: this.lamparasClienteDataVentas },
        { label: 'Total Gastado', data: this.lamparasClienteDataGastado }
      ]);
    });
  }

  loadMejorCliente(): void {
    this.dashboardService.getMejorCliente().subscribe((data: MejorCliente) => {
      this.mejorCliente = data;
    });
  }

  createBarChart(chartId: string, labels: string[], datasets: { label: string, data: number[] }[]): void {
    const canvas = <HTMLCanvasElement>document.getElementById(chartId);
    const ctx = canvas.getContext('2d');

    new Chart(ctx!, {
      type: this.barChartType,
      data: {
        labels: labels,
        datasets: datasets.map(ds => ({
          label: ds.label,
          data: ds.data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }))
      },
      options: this.chartOptions
    });
  }

  createPieChart(chartId: string, labels: string[], data: number[], label: string): void {
    const canvas = <HTMLCanvasElement>document.getElementById(chartId);
    const ctx = canvas.getContext('2d');

    new Chart(ctx!, {
      type: this.pieChartType,
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: this.chartOptions
    });
  }

  createLineChart(chartId: string, labels: string[], data: number[], label: string): void {
    const canvas = <HTMLCanvasElement>document.getElementById(chartId);
    const ctx = canvas.getContext('2d');

    new Chart(ctx!, {
      type: this.lineChartType,
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true
        }]
      },
      options: this.chartOptions
    });
  }
}
