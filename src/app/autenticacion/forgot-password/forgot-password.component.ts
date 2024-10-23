import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {CustomerForgotten} from "../../interfaces/customer";
import {ResponsePosts} from "../../interfaces/response-posts";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isSubmitting: boolean = false;


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.forgotPasswordForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const email = this.forgotPasswordForm.get('email')?.value;
    const data: CustomerForgotten = {email};

    this.authService.forgotPassword(data).subscribe({
      next: (response: ResponsePosts) => {
        if (response.isSuccess) {
          this.snackBar.open('Correo enviado con éxito. Revisa tu bandeja de entrada.', 'Cerrar', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
        } else {
          this.snackBar.open(response.message, 'Cerrar', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Ocurrió un error: ', error)
        this.snackBar.open('Ocurrió un error. Inténtalo de nuevo más tarde.', 'Cerrar', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.isSubmitting = false;
      }
    });
  }
}
