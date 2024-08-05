import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionMermaComponent } from './administracion-merma/administracion-merma.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [AdministracionMermaComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    HttpClientModule,
    ProgressSpinnerModule,
  ],
})
export class MermaModule {}
