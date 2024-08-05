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
  email: string = '';
  profileFormPass: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private matSnackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.profileFormPass = this.fb.group({
      currentPassword: ['', Validators.required],
      userEmail: [{ value: '', disabled: false }], // El email no se puede editar, pero se incluye en el formulario
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

        // Actualiza el valor del campo userEmail en el formulario
        this.profileFormPass.patchValue({
          userEmail: this.userEmail,
        });
      },
      error: (error) => {
        console.error('Error al obtener detalles del perfil', error);
      },
    });
  }

  cambiarPass() {
    if (this.profileFormPass.valid) {
      const formValues = this.profileFormPass.value;
      console.log('Current Password:', formValues.currentPassword);
      console.log('New Password:', formValues.newPassword);
      console.log('Email:', formValues.userEmail);
      this.usuariosService
        .changePass({
          currentPassword: formValues.currentPassword,
          newPassword: formValues.newPassword,
          email: formValues.userEmail,
        })
        .subscribe({
          next: () => {
            this.matSnackbar.open(
              'Password actualizado exitosamente',
              'Cerrar',
              {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
              }
            );
          },
          error: (error) => {
            console.error('Error al actualizar la contraseña', error);
            this.matSnackbar.open(
              'Error al actualizar la contraseña',
              'Cerrar',
              {
                duration: 2000,
              }
            );
          },
        });
    }
  }
}
