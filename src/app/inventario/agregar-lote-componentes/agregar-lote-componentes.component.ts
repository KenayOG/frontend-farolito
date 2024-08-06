import { Component } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { ComponentesService } from '../../services/componentes.service';
import { ComprasService } from '../../services/compras.service';
import { Provider } from '../../interfaces/provider';
import { Purchase } from '../../interfaces/purchase';
import { ResponsePosts } from '../../interfaces/response-posts';
import { NgForm } from '@angular/forms';
import { DetalleCompra } from '../../interfaces/component-recipe';
import { Componente } from '../../interfaces/components';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-lote-componentes',
  templateUrl: './agregar-lote-componentes.component.html',
  styleUrls: ['./agregar-lote-componentes.component.css'],
})
export class AgregarLoteComponentesComponent {
  providers: Provider[] = [];
  listaComponentes: Componente[] = [];
  cargando: boolean = true;
  fecha: string = '';
  lote: string = '';
  selectedComponenteId: number | null = null;
  selectedProveedorId: number | null = null;
  cantidad: number = 0;
  costo: number = 0;

  constructor(
    private proveedoresService: ProveedoresService,
    private componenteService: ComponentesService,
    private comprasService: ComprasService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.obtenerProveedor();
    this.obtenerComponentes();
    this.setFechaYlote();
  }

  setFechaYlote() {
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    this.fecha = `${yyyy}-${mm}-${dd}`;

    const fechaISO = new Date(this.fecha).toISOString();
    this.fecha = fechaISO.substring(0, 10);

    this.lote = `LOT${this.generateRandomCode(10)}`;
  }

  generateRandomCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  obtenerProveedor() {
    this.cargando = true;
    this.proveedoresService.getProveedores().subscribe({
      next: (data) => {
        //this.providers = data; // -- todos los proveedores
        /* Proveedores con estatus true solamente */
        this.providers = data.filter((provider) => provider.estatus === true);
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

  obtenerComponentes() {
    this.componenteService.getCatalogoComponentes().subscribe({
      next: (data) => {
        //this.listaComponentes = data; // -- todos los componentes
        /* Componentes con estatus true solamente */
        this.listaComponentes = data.filter(
          (catalogo) => catalogo.estatus === true
        );
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  agregarLote(form: NgForm) {
    if (form.valid) {
      const detalles: DetalleCompra[] = [
        {
          componentesId: this.selectedComponenteId!,
          cantidad: this.cantidad,
          costo: this.costo,
        },
      ];

      const purchase: Purchase = {
        fecha: this.fecha,
        proveedorId: this.selectedProveedorId!,
        detalles: detalles,
      };

      this.comprasService.agregarLote(purchase).subscribe({
        next: (response: ResponsePosts) => {
          form.resetForm();
          this.setFechaYlote();
          this.matSnackBar.open(response.message, 'Cerrar', {
            duration: 4000,
            horizontalPosition: 'center',
          });
          this.router.navigate(['/inventario']);
        },
        error: (err) => {
          console.log('Error al agregar compra', err);
          form.resetForm();
          this.matSnackBar.open(
            'Error al registrar compra: ' +
              (err.error.message || 'Desconocido'),
            'Cerrar',
            {
              duration: 4000,
              horizontalPosition: 'center',
            }
          );
        },
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
