import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationError } from '../../interfaces/validation-errors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  form!: FormGroup;
  router = inject(Router);
  matSnackBar = inject(MatSnackBar);
  errors!: ValidationError[];

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
      {
        validators: this.passwordMatchValidator,
      });
  }

  signUp() {
    this.authService.signUp(this.form.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.matSnackBar.open("Cuenta creada correctamente", 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
          this.router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          if (err!.status === 400) {
            this.errors = err!.error;
            this.matSnackBar.open('Algo salió mal, inténtalo de nuevo', 'Cerrar', {
              duration: 5000,
              horizontalPosition: 'center'
            });
            setTimeout(() => {
              this.errors = [];
            }, 3000);
          }
        },
        complete: () => console.log('Registro éxitoso'),
      });
  }
  

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true }
    }
    return null;
  }

}
