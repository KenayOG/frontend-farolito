import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, RouterLink],
})
export class AutenticacionModule {}
