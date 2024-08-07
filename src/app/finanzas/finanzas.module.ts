import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FinanzasComparativoComponent } from './finanzas-comparativo/finanzas-comparativo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar esto
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [FinanzasComparativoComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ProgressSpinnerModule],
  providers: [DecimalPipe],
})
export class FinanzasModule {}
