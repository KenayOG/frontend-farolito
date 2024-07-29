import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LampDetail } from '../../interfaces/lamp-detail';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioLamparaService } from '../../services/inventario-lampara.service';

@Component({
  selector: 'app-detalle-lampara',
  templateUrl: './detalle-lampara.component.html',
  styleUrl: './detalle-lampara.component.css',
})
export class DetalleLamparaComponent implements OnInit {
  lampDetail: LampInventory | undefined;
  nombreLampara: string = '';
  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioLamparaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventarioService.getLamparaPorId(id).subscribe(
      (lamp) => {
        this.lampDetail = lamp;
        this.nombreLampara =
          this.lampDetail?.nombrelampara ||
          'Nombre de la lampara no encontrado';
      },
      (error) => {
        console.error('Error al obtener el detalle de la lampara', error);
      }
    );
  }
}
