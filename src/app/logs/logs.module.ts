import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsActividadComponent } from './logs-actividad/logs-actividad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [LogsActividadComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ],
})
export class LogsModule {}
