import { Component } from '@angular/core';
import { Provider } from '../../interfaces/provider';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-administrar-proveedores',
  templateUrl: './administrar-proveedores.component.html',
  styleUrl: './administrar-proveedores.component.css',
})
export class AdministrarProveedoresComponent {
  providers: Provider[] = [];
  cargando: boolean = true;

  constructor(private proveedoresService: ProveedoresService) {
    this.obtenerProveedor();
  }

  obtenerProveedor() {
    this.cargando = true;
    this.proveedoresService.getProveedores().subscribe({
      next: (data) => {
        this.providers = data;
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
}
