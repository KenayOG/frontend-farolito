import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarEmpleadosComponent } from './administrar-empleados/administrar-empleados.component';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { RouterLink } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AdministrarEmpleadosComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    TableModule,
    PasswordModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    ProgressSpinnerModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    HttpClientModule,
  ],
})
export class UsuariosModule {}
