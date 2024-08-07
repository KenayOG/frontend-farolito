import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarProveedoresComponent } from './administrar-proveedores/administrar-proveedores.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProveedoresService } from '../services/proveedores.service';
import { AppComponent } from '../app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CheckboxModule } from 'primeng/checkbox';

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
    MatSnackBarModule,
    ReactiveFormsModule,
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
    HttpClientModule,
    ProgressSpinnerModule,
    CheckboxModule,
    RouterModule,
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent],
  exports: [],
})
export class ProveedoresModule {}
