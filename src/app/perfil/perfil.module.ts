import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerDatosPerfilComponent } from './ver-datos-perfil/ver-datos-perfil.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { UsuariosService } from '../services/usuarios.service';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [VerDatosPerfilComponent],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent],
  exports: [],
})
export class PerfilModule {}
