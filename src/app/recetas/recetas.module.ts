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
import { ReactiveFormsModule } from '@angular/forms';
import { RecetasService } from '../services/recetas.service';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AdministracionRecetasComponent],
  imports: [
    CommonModule,
    AccordionModule,
    ImageModule,
    CheckboxModule,
    HttpClientModule,
    ProgressSpinnerModule,
    MatSnackBarModule,
    RouterLink,
    ReactiveFormsModule
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class RecetasModule {}
