import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';
import { LoginRequest } from '../../interfaces/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  router = inject(Router);
  snackBar = inject(MatSnackBar);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.form.valid) {
      const loginData: LoginRequest = {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      };

      this.authService.login(loginData).subscribe(
        (response) => {
          if (response.isSuccess) {
            this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
              duration: 3000,
            });
            this.appComponent.showNavBar = true;
            this.router.navigate(['/home']);
          } else {
            this.snackBar.open('Error en el inicio de sesión', 'Cerrar', {
              duration: 3000,
            });
          }
        },
        (error) => {
          this.snackBar.open('Error en el inicio de sesión', 'Cerrar', {
            duration: 3000,
          });
        }
      );
    } else {
      this.snackBar.open('Formulario inválido', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
