import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {AuthService} from '../services/auth.service';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    AuthService, provideAnimationsAsync()
  ],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class AutenticacionModule {
}
