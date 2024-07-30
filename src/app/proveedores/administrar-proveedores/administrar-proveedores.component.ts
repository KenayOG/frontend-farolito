import { Component, OnInit } from '@angular/core';
import { Provider } from '../../interfaces/provider';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-administrar-proveedores',
  templateUrl: './administrar-proveedores.component.html',
  styleUrl: './administrar-proveedores.component.css',
})
export class AdministrarProveedoresComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private proveedoresService: ProveedoresService) {}
  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe((data) => {
      this.providers = data;
    });
  }
}
