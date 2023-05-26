import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SignUpFormComponent } from './components/forms/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpViewComponent,
    LoginViewComponent,
    SignUpFormComponent,
    LoginFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpViewComponent, LoginViewComponent],
})
export class AuthModule {}
