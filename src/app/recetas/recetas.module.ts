import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionRecetasComponent } from './administracion-recetas/administracion-recetas.component';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecetasService } from '../services/recetas.service';
import { AppComponent } from '../app.component';
import { EditarRecetasComponent } from './editar-recetas/editar-recetas.component';

@NgModule({
  declarations: [AdministracionRecetasComponent, EditarRecetasComponent],
  imports: [
    CommonModule,
    AccordionModule,
    ImageModule,
    CheckboxModule,
    HttpClientModule,
    ProgressSpinnerModule,
    MatSnackBarModule,
    RouterLink,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class RecetasModule {}
