import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

import {
  User,
  UpdateCreditCard,
  UpdateUserprofile,
} from '../../interfaces/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from '../../interfaces/auth-response';

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

  // Actualizar tarjeta de credito
  tarjetaForm: FormGroup;

  // Editar usuario
  userFormEdit: FormGroup;
  profileUser!: UpdateUserprofile;

  // Agregar imagen del usuario
  selectedFile: File | null = null;
  message: string | null = null;
  backgroundImageUrl: string = '';
  baseUrl: string = 'https://localhost:5000';

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

    this.tarjetaForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    });

    this.userFormEdit = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      direccion: ['', Validators.required],
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

  cargarFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  subirFoto() {
    if (this.selectedFile) {
      this.usuariosService.uploadImage(this.selectedFile).subscribe({
        next: () => {
          this.matSnackbar.open('Imagen subida correctamente', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          window.location.reload();
          this.obtenerDetellesPerfil();
        },
        error: (error) => {
          console.error('Error al subir la imagen', error);
          this.matSnackbar.open('Error al subir la imagen', 'Cerrar', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        },
      });
    }
  }

  getImagen(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }

  editarPerfilUsuario(): void {
    if (this.userFormEdit.valid) {
      const editUser: UpdateUserprofile = {
        ...this.profileUser,
        ...this.userFormEdit.value,
      };

      console.log('Datos del usuario:', editUser);

      this.usuariosService.editarUser(editUser).subscribe({
        next: (response) => {
          this.matSnackbar.open('Usuario actualizado exitosamente', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          this.loadUserProfile();
        },
        error: (error) => {
          console.error('Error al actualizar el usuario', error);
          this.matSnackbar.open('Error al actualizar el usuario', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        },
      });
    }
  }
  actualizarTarjeta(): void {
    if (this.tarjetaForm.invalid) {
      this.matSnackbar.open(
        'Por favor ingresa un número de tarjeta válido',
        'Cerrar',
        {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        }
      );
      return;
    }

    const cardNumber = this.tarjetaForm.value.cardNumber;

    this.usuariosService.updateCreditCard(cardNumber).subscribe({
      next: () => {
        this.matSnackbar.open('Tarjeta actualizada exitosamente', 'Cerrar', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.tarjetaForm.reset();
        this.obtenerDetellesPerfil();
      },
      error: (error) => {
        console.error('Error al actualizar la tarjeta', error);
        this.matSnackbar.open('Error al actualizar la tarjeta', 'Cerrar', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
    });
  }

  obtenerDetellesPerfil(): void {
    this.usuariosService.getUserDetail().subscribe({
      next: (data: User) => {
        this.userId = data.id;
        this.userFullName = data.fullName;
        this.userEmail = data.email;
        this.userTarjeta = data.tarjeta;
        console.log(this.userTarjeta);
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
        this.userFormEdit.patchValue({
          userTarjeta: this.userTarjeta,
        });
        this.backgroundImageUrl = this.getImagen(this.userUrlImage || '');
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
