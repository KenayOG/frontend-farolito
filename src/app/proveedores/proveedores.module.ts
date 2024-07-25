import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarProveedoresComponent } from './administrar-proveedores/administrar-proveedores.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AdministrarProveedoresComponent,
    CrearProveedorComponent,
    EditarProveedorComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
    DialogModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextareaModule,
    FileUploadModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    FormsModule,
    InputNumberModule,
  ],
})
export class ProveedoresModule {}
