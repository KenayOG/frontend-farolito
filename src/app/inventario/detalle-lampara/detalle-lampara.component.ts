import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LampDetail } from '../../interfaces/lamp-detail';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-detalle-lampara',
  templateUrl: './detalle-lampara.component.html',
  styleUrl: './detalle-lampara.component.css',
})
export class DetalleLamparaComponent {
  lampDetail: LampInventory | undefined;
  nombreLampara: string = '';
  //cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioService
  ) {
    this.obtenerDetalleLampara();
  }

  obtenerDetalleLampara() {
    //this.cargando = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventarioService.getLamparaPorId(id).subscribe(
      (lamp) => {
        this.lampDetail = lamp;
        this.nombreLampara =
          this.lampDetail?.nombrelampara ||
          'Nombre de la lampara no encontrado';
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      },
      (error) => {
        console.error('Error al obtener el detalle de la lampara', error);
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      }
    );
  }
}
