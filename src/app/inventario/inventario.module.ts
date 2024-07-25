import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AdministracionInventarioComponent } from './administracion-inventario/administracion-inventario.component';
import { DetalleLamparaComponent } from './detalle-lampara/detalle-lampara.component';
import { RouterLink } from '@angular/router';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';

@NgModule({
  declarations: [AdministracionInventarioComponent, DetalleLamparaComponent, DetalleComponenteComponent],
  imports: [
    CommonModule,
    RouterLink,
    TableModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    ButtonModule,
  ],
})
export class InventarioModule {}
