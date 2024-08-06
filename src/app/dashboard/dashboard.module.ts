import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaDashboardComponent } from './vista-dashboard/vista-dashboard.component';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    VistaDashboardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    ButtonModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterLink,
    BrowserModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class DashboardModule { }
