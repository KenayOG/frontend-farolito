import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';
import {ValidationError} from '../../interfaces/validation-errors';

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
  isLoading = false;

  isUpperCase = false;
  isLowerCase = false;
  isNumber = false;
  isMinLength = false;
  isSymbol = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required]],
        password: ['', [Validators.required, this.passwordStrengthValidator.bind(this)]],
        confirmPassword: ['', [Validators.required, this.passwordStrengthValidator.bind(this)]]
      },
      {
        validators: this.passwordMatchValidator,
      });

    this.form.get('password')?.valueChanges.subscribe((value) => {
      this.updatePasswordValidationState(value);
    })
  }

  private updatePasswordValidationState(password: string) {
    this.isUpperCase = /[A-Z]/.test(password);
    this.isLowerCase = /[a-z]/.test(password);
    this.isNumber = /\d/.test(password);
    this.isSymbol = /[.*!@#$%^&,\-_']/.test(password);
    this.isMinLength = password.length >= 8;
  }

  signUp() {
    if (this.form.invalid) return;

    this.isLoading = true;

    this.authService.signUp(this.form.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.matSnackBar.open("Cuenta creada correctamente", 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center'
          });
          this.router.navigate(['/login']);
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
        complete: () => {
          this.isLoading = false;
          console.log('Registro éxitoso');
        },
      });
  }

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return {passwordMismatch: true}
    }
    return null;
  }

  private passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasMinLength = password.length >= 8;
    const hasSymbol = /[.*!@#$%^&,\-_']/.test(password)

    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasMinLength || !hasSymbol) {
      return {passwordWeak: true};
    }
    return null;
  }
}
