import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';
import { Table } from 'primeng/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MermaService } from '../../services/merma.service';
import { LampDecreaseRequest } from '../../interfaces/lamp-decrease';

@Component({
  selector: 'app-detalle-lampara',
  templateUrl: './detalle-lampara.component.html',
  styleUrl: './detalle-lampara.component.css',
})
export class DetalleLamparaComponent {
  lampDetail: LampInventory | undefined;
  nombreLampara: string = '';
  cargando: boolean = true;
  selectedLamp: any = {};
  @ViewChild('dtDetalleLamparas') dtDetalleLamparas!: Table;

  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioService,
    private matSnackBar: MatSnackBar,
    private modalService: NgbModal,
    private mermaService: MermaService
  ) {
    this.obtenerDetalleLampara();
  }

  openMermarLamparaModal(content: TemplateRef<any>, lamp: any) {
    this.selectedLamp = lamp;
    this.modalService.open(content, {
      ariaLabelledBy: 'mermarLamparaModal',
    });
  }

  mermarLampara() {
    const requestData: LampDecreaseRequest = {
      cantidad: this.selectedLamp.cantidadd,
      descripcion: this.selectedLamp.descripcion,
      inventariolamparaId: this.selectedLamp.id,
    };

    this.mermaService.sendMermaLamparas(requestData).subscribe({
      next: (response) => {
        console.log('Respuesta de merma lámpara:', response);
        //this.limpiarModal();
        this.modalService.dismissAll();
        this.obtenerDetalleLampara();
        this.matSnackBar.open(response.message, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (err) => {
        console.log('Error al mermar lámpara:', err);
        this.modalService.dismissAll();
        this.matSnackBar.open(
          'Ocurrió un problema: ' + (err.error.message || 'Desconocido'),
          'Cerrar',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      },
    });
  }

  obtenerDetalleLampara() {
    this.cargando = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventarioService.getLamparaPorId(id).subscribe(
      (lamp) => {
        if (lamp?.detalles) {
          lamp.detalles = lamp.detalles.filter(
            (detalle) => detalle.cantidad > 0
          );
        }
        this.lampDetail = lamp;
        this.nombreLampara =
          this.lampDetail?.nombrelampara ||
          'Nombre de la lampara no encontrado';
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      (error) => {
        console.error('Error al obtener el detalle de la lampara', error);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      }
    );
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtDetalleLamparas' && this.dtDetalleLamparas) {
      this.dtDetalleLamparas.filterGlobal(filterValue, 'contains');
    }
  }

  validateInput(event: KeyboardEvent) {
    const inputChar = event.key;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(inputChar)) {
      event.preventDefault();
    }
  }
}
