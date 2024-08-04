import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-ver-datos-perfil',
  templateUrl: './ver-datos-perfil.component.html',
  styleUrls: ['./ver-datos-perfil.component.css'],
})
export class VerDatosPerfilComponent implements OnInit {
  user: any = {
    email: '',
    name: '',
    role: '',
  };

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const userData = this.usuariosService.getUserFromToken();
    if (userData) {
      this.user.email = userData.email;
      this.user.name = userData.name;
      this.user.role = userData.role;
    }
  }
}
