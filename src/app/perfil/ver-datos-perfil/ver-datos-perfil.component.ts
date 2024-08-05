import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from '../../interfaces/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // Detalle de usuario
  userId: string = '';
  userFullName: string = '';
  userEmail: string = '';
  userTarjeta: string | null = null;
  userPhoneNumber: string | null = null;
  userTwoFactorEnabled: boolean = false;
  userPhoneNumberConfirmed: boolean = false;
  userAccessFailedCount: number = 0;
  userUrlImage: string | null = null;
  userDireccion: string | null = null;

  // Cambio de contraseña
  currentPassword: string = '';
  newPassword: string = '';
  profileForm: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private matSnackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      currentPassword: ['', Validators.required],
      userEmail: [{ value: this.userEmail, disabled: true }],
      newPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
    this.obtenerDetellesPerfil();
  }

  loadUserProfile(): void {
    const userData = this.usuariosService.getUserFromToken();
    if (userData) {
      this.user.email = userData.email;
      this.user.name = userData.name;
      this.user.role = userData.role;
    }
  }

  obtenerDetellesPerfil(): void {
    this.usuariosService.getUserDetail().subscribe({
      next: (data: User) => {
        this.userId = data.id;
        this.userFullName = data.fullName;
        this.userEmail = data.email;
        this.userTarjeta = data.tarjeta;
        this.userPhoneNumber = data.phoneNumber;
        this.userTwoFactorEnabled = data.twoFactorEnabled;
        this.userPhoneNumberConfirmed = data.phoneNumberConfirmed;
        this.userAccessFailedCount = data.accessFailedCount;
        this.userUrlImage = data.urlImage;
        this.userDireccion = data.direccion;
        console.log(this.userFullName);
        console.log(this.userDireccion);
      },
      error: (error) => {
        console.error('Error al obtener detalles del perfil', error);
      },
    });
  }

  cambiarContraseñaPerfil() {
    if (this.profileForm.valid) {
      const formValues = this.profileForm.value;
      console.log('Current Password:', formValues.currentPassword);
      console.log('New Password:', formValues.newPassword);
      console.log('Email:', formValues.userEmail);
    }
  }
}
