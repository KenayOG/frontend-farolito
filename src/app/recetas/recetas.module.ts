import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionRecetasComponent } from './administracion-recetas/administracion-recetas.component';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [AdministracionRecetasComponent],
  imports: [CommonModule, AccordionModule, ImageModule, CheckboxModule],
})
export class RecetasModule {}
