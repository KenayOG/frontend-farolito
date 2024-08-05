import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Provider } from '../../interfaces/provider';
import { Componente } from '../../interfaces/components';
import { ComponentesService } from '../../services/componentes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrl: './editar-proveedor.component.css',
})
export class EditarProveedorComponent implements OnInit {
  proveedor!: Provider;
  formProvider!: FormGroup;
  listaComponentes: Componente[] = [];
  componentesSeleccionados: { [key: number]: boolean } = {}; // Para almacenar el estado de los checkboxes

  constructor(
    private fb: FormBuilder,
    private matSnackbar: MatSnackBar,
    private componentesService: ComponentesService,
    private proveedoresService: ProveedoresService
  ) {}

  ngOnInit(): void {
    this.formProvider = this.fb.group({
      nombreEmpresa: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      apellidoP: ['', Validators.required],
      nombreAtiende: ['', Validators.required],
      apellidoM: ['', Validators.required],
    });

    this.componentesService.getCatalogoComponentes().subscribe({
      next: (data) => {
        this.listaComponentes = data;
        console.log('Lista de Componentes:', this.listaComponentes); // Verifica que los datos estén presentes

        const storedProvider = localStorage.getItem('selectedProvider');
        if (storedProvider) {
          this.proveedor = JSON.parse(storedProvider);
          this.cargarDatosProveedor();
        }
      },
      error: (e) => {
        console.error('Error al obtener componentes', e);
      },
    });
  }

  cargarDatosProveedor() {
    if (this.proveedor) {
      this.formProvider.patchValue({
        nombreEmpresa: this.proveedor.nombreEmpresa,
        direccion: this.proveedor.direccion,
        telefono: this.proveedor.telefono,
        apellidoP: this.proveedor.apellidoP,
        nombreAtiende: this.proveedor.nombreAtiende,
        apellidoM: this.proveedor.apellidoM,
      });

      this.listaComponentes.forEach((componente) => {
        this.componentesSeleccionados[componente.id] =
          this.proveedor.productos.some((p) => p.id === componente.id);
      });
    }
    console.log('Datos del proveedor', this.proveedor);
  }

  toggleCheckbox(componentId: number, event: any) {
    this.componentesSeleccionados[componentId] = event.target.checked;
  }

  editarProveedor() {
    if (this.formProvider.valid) {
      const editProvider: Provider = {
        ...this.proveedor,
        ...this.formProvider.value,
        productos: this.listaComponentes
          .filter((componente) => this.componentesSeleccionados[componente.id])
          .map((componente) => ({
            id: componente.id,
            nombre: componente.nombre,
          })),
      };

      console.log('Datos del proveedor a editar:', editProvider); // Añade este log para verificar los datos antes de enviar la solicitud

      this.proveedoresService.editProveedores(editProvider).subscribe({
        next: (response) => {
          this.matSnackbar.open(
            'Proveedor actualizado exitosamente',
            'Cerrrar',
            {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            }
          );
        },
        error: (error) => {
          console.error('Error al actualizar el proveedor', error);
          this.matSnackbar.open('Error al actualizar proveedor', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        },
      });
    }
  }
}
