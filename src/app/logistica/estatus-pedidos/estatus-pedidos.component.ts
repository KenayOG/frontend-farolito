import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { EstatusOrder, Order } from '../../interfaces/orders';
import { LogisticManager } from '../../interfaces/logistic-manager';
import { PedidosService } from '../../services/pedidos.service';
import { Table } from 'primeng/table';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-estatus-pedidos',
  templateUrl: './estatus-pedidos.component.html',
  styleUrl: './estatus-pedidos.component.css',
})
export class EstatusPedidosComponent implements OnInit {
  orders: LogisticManager[] = [];
  cargando: boolean = true;
  formEstatusPedido!: FormGroup;
  estatusP!: EstatusOrder;
  pedidoIdTemp!: number;
  @ViewChild('dtPedidosLogistica') dtPedidosLogistica!: Table;

  constructor(
    private pedidosService: PedidosService,
    private fb: FormBuilder,
    private matSnackbar: MatSnackBar,
    private modalService: NgbModal
  ) {
    this.obtenerPedidos();
  }

  ngOnInit(): void {
    this.formEstatusPedido = this.fb.group({
      pedidoId: ['', Validators.required],
    });
  }

  obtenerPedidos() {
    this.cargando = true;
    this.pedidosService.getTodosLosPedidos().subscribe({
      next: (data) => {
        this.orders = data;
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

  /* setPedidoId(id: number) {
    this.formEstatusPedido.patchValue({ pedidoId: id });
  } */

  advertenciaEstatus(content: TemplateRef<any>, id: number): void {
    this.pedidoIdTemp = id;
    this.modalService.open(content, {
      ariaLabelledBy: 'modalEstatusPedido',
    });
  }

  ActualizarEstatusPedido() {
    this.formEstatusPedido.patchValue({
      pedidoId: this.pedidoIdTemp,
    });
    this.modalService.dismissAll();
    this.editarEstatusPedido();
  }

  editarEstatusPedido() {
    if (this.formEstatusPedido.invalid) {
      return;
    }
    const pedido: EstatusOrder = {
      ...this.formEstatusPedido.value,
    };

    this.pedidosService.updateEstatusPedido(pedido).subscribe(
      (response) => {
        console.log(pedido);
        this.formEstatusPedido.reset();
        this.obtenerPedidos();
        this.matSnackbar.open(
          'Estatus de pedido actualizado correctamente',
          'Close',
          {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          }
        );
      },
      (error) => {
        console.error(error);
        this.matSnackbar.open(
          'Ha ocurrido un error, el estatus no fue modificado',
          'Close',
          {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          }
        );
      }
    );
  }

  cancelarActualizacion() {
    this.modalService.dismissAll();
  }

  applyFilterGlobal(event: Event, tableId: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (tableId === 'dtPedidosLogistica' && this.dtPedidosLogistica) {
      this.dtPedidosLogistica.filterGlobal(filterValue, 'contains');
    }
  }
}
