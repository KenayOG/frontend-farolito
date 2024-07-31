import { Component, OnInit } from '@angular/core';
import { Provider } from '../../interfaces/provider';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-administrar-proveedores',
  templateUrl: './administrar-proveedores.component.html',
  styleUrl: './administrar-proveedores.component.css',
})
export class AdministrarProveedoresComponent {
  providers: Provider[] = [];

  constructor(private proveedoresService: ProveedoresService) {
    this.obtenerProveedor();
  }

  obtenerProveedor() {
    this.proveedoresService.getProveedores().subscribe({
      next: (data) => {
        this.providers = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
