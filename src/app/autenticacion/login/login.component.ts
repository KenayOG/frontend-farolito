import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../interfaces/login-request';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  router = inject(Router);
  snackBar = inject(MatSnackBar);

  constructor(private authService: AuthService, private fb: FormBuilder) { }

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
        password: this.form.get('password')?.value
      };

      this.authService.login(loginData).subscribe(
        (response) => {
          if (response.isSuccess) {
            this.snackBar.open('Haz iniciado sesión', 'Cerrar', {
              duration: 6000,
            });
            this.router.navigate(['/home']);
          } else {
            this.snackBar.open('Error en el inicio de sesión', 'Cerrar', {
              duration: 6000,
            });
          }
        },
        (error) => {
          this.snackBar.open('Error en el inicio de sesión', 'Cerrar', {
            duration: 6000,
          });
        }
      );
    } else {
      this.snackBar.open('Formulario inválido', 'Cerrar', {
        duration: 6000,
      });
    }
  }
}