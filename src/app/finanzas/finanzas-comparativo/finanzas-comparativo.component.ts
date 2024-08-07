import { Component, OnInit } from '@angular/core';
import { FinanzasService } from '../../services/finanzas.service';
import { CapitalFarolito } from '../../interfaces/capital-farolito';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-finanzas-comparativo',
  templateUrl: './finanzas-comparativo.component.html',
  styleUrl: './finanzas-comparativo.component.css',
})
export class FinanzasComparativoComponent implements OnInit {
  capitalFarolito: CapitalFarolito | undefined;
  cargando: boolean = true;
  cards: { title: string; value: number | string | undefined; icon: string }[] =
    [];
  currentIndex: number = 0;

  // Fechas por defecto
  startDate: string = '2024-01-01';
  endDate: string = '2024-12-31';

  constructor(
    private finanzasService: FinanzasService,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    this.fetchCapitalFarolito();
  }

  fetchCapitalFarolito(): void {
    this.cargando = true;
    this.finanzasService
      .getCapitalFarolito(this.startDate, this.endDate)
      .subscribe((data) => {
        this.capitalFarolito = data;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
        this.updateCards();
      });
  }

  cambiarFechaInicio(event: any): void {
    this.startDate = event.target.value;
    this.fetchCapitalFarolito();
  }

  cambiarFechaFin(event: any): void {
    this.endDate = event.target.value;
    this.fetchCapitalFarolito();
  }

  updateCards(): void {
    if (this.capitalFarolito) {
      this.cards = [
        {
          title: 'Ventas',
          value: this.formatCurrency(this.capitalFarolito.totalVentas),
          icon: 'fa-solid fa-chart-line',
        },
        {
          title: 'Compras',
          value: this.formatCurrency(this.capitalFarolito.totalCompras),
          icon: 'fa-solid fa-box',
        },
        {
          title: 'Ganancia',
          value: this.formatCurrency(this.capitalFarolito.ganancia),
          icon: 'fa-solid fa-money-bill-wave',
        },
        {
          title: 'Estatus',
          value: this.capitalFarolito.estado,
          icon: 'fa-solid fa-info-circle',
        },
      ];
    }
  }

  formatCurrency(value: number | undefined): string {
    if (value === undefined) return '$0.00';
    return `$${this.decimalPipe.transform(value, '1.0-2')}`;
  }

  /* prevCard(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
  }

  nextCard(): void {
    this.currentIndex =
      this.currentIndex < this.cards.length - 1 ? this.currentIndex + 1 : 0;
  } */
}
