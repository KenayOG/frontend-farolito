import { Component, ViewChild } from '@angular/core';
import { PurchaseAll } from '../../interfaces/purchase';
import { Table } from 'primeng/table';
import { ComprasService } from '../../services/compras.service';

@Component({
  selector: 'app-administracion-compras',
  templateUrl: './administracion-compras.component.html',
  styleUrl: './administracion-compras.component.css',
})
export class AdministracionComprasComponent {
  purchaseAll: PurchaseAll[] = [];
  purchaseUser: PurchaseAll[] = [];
  cargando: boolean = true;

  @ViewChild('dtCompras') dtCompras!: Table;
  @ViewChild('dtComprasUsuario') dtComprasUsuario!: Table;

  constructor(private comprasService: ComprasService) {
    this.obtenerCompras();
    this.obtenerComprasUsuario();
  }

  obtenerCompras() {
    this.cargando = true;
    this.comprasService.getCompras().subscribe({
      next: (data) => {
        this.purchaseAll = data;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  obtenerComprasUsuario() {
    this.comprasService.getComprasUser().subscribe({
      next: (data) => {
        this.purchaseUser = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtCompras' && this.dtCompras) {
      this.dtCompras.filterGlobal(filterValue, 'contains');
    } else if (tableId === 'dtComprasUsuario' && this.dtComprasUsuario) {
      this.dtComprasUsuario.filterGlobal(filterValue, 'contains');
    }
  }

  validateInput(event: KeyboardEvent) {
    const inputChar = event.key;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(inputChar)) {
      event.preventDefault();
    }
  }

  validateDateInput(event: KeyboardEvent) {
    const inputChar = event.key;
    const regex = /^[0-9-]+$/;
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

    if (!regex.test(inputChar) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
