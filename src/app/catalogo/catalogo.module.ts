import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [CatalogoProductosComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    HttpClientModule,
    ProgressSpinnerModule,
    GalleriaModule,
  ],
})
export class CatalogoModule {}
