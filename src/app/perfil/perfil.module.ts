import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerDatosPerfilComponent } from './ver-datos-perfil/ver-datos-perfil.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [VerDatosPerfilComponent],
  imports: [CommonModule, PasswordModule, InputTextModule],
})
export class PerfilModule {}
