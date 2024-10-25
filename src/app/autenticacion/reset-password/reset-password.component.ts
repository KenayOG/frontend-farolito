import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ResponsePosts} from "../../interfaces/response-posts";
import {CustomerReset} from "../../interfaces/customer";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm!: FormGroup;
    email!: string;
    token!: string;


    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private authService: AuthService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.resetPasswordForm = this.fb.group({
            newPassword: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.email = params['email'];
            const encodedToken = params['token'].replace(/\+/g, '%2B');
            this.token = decodeURIComponent(encodedToken);
            this.token = this.token.replace(/\+/g, '%2B').replace(/\//g, '%2F');
            console.log('Email:', this.email);
            console.log('Token:', this.token);
        });
    }



    onSubmit(): void {
        if (this.resetPasswordForm.valid) {

            const data: CustomerReset = {
                email: this.email,
                token: this.token,
                newPassword: this.resetPasswordForm.value.newPassword
            }

            this.authService.resetPassword(data).subscribe({
                next: (response: ResponsePosts) => {
                    if (response.isSuccess) {
                        this.snackBar.open(response.message, 'Cerrar', {
                            duration: 3000,
                            panelClass: ['success-snackbar']
                        });
                        this.router.navigate(['/login']);
                    } else {
                        this.snackBar.open(response.message, 'Cerrar', {
                            duration: 3000,
                            panelClass: ['error-snackbar']
                        });
                    }
                },
                error: (error) => {
                    this.snackBar.open('Error al restablecer la contraseña', 'Cerrar', {
                        duration: 3000,
                        panelClass: ['error-snackbar']
                    });
                }
            });
        }
    }
}
