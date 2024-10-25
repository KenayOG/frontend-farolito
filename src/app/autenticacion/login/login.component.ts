import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../services/auth.service';
import {AppComponent} from '../../app.component';
import {LoginRequest} from '../../interfaces/login-request';
import {environment} from "../../../environments/environment";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  router = inject(Router);
  cargando: boolean = false;
  snackBar = inject(MatSnackBar);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private reCaptchaV3Service: ReCaptchaV3Service,
    private appComponent: AppComponent
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.form.valid) {
      this.cargando = true;
      this.reCaptchaV3Service.execute('login').subscribe((token) => {
        if (token) {
          const loginData: LoginRequest = {
            email: this.form.get('email')?.value,
            password: this.form.get('password')?.value,
            recaptchaToken: token
          };

          this.authService.login(loginData).subscribe((response) => {
              this.cargando = false;
              console.log("mensaje: " + response.message)
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
            }, (error: HttpErrorResponse) => {
              if (error.status === 400) {
                this.cargando = false;
                if (error.error?.message.includes("Account locked.")) {
                  this.snackBar.open('Tu cuenta está bloqueada. Intenta de nuevo más tarde.', 'Cerrar', {
                    duration: 3000,
                  });
                } else if (error.error?.message.includes("Invalid")) {
                  this.snackBar.open('reCAPTCHA verification failed', 'Cerrar', {
                    duration: 3000,
                  });
                }
              } else {
                this.cargando = false;
                this.snackBar.open('Error en el inicio de sesión', 'Cerrar', {
                  duration: 3000,
                });
              }
            }
          );
        } else {
          this.cargando = false;
          this.snackBar.open('reCAPTCHA verification failed', 'Cerrar', {
            duration: 3000,
          });
        }
      });
    } else {
      this.cargando = false;
      this.snackBar.open('Formulario inválido', 'Cerrar', {
        duration: 3000,
      });
    }
  }

  protected readonly environment = environment;
}
