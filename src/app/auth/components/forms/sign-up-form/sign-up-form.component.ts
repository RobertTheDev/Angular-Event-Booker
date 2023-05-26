import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.sass'],
})
export class SignUpFormComponent {
  constructor(private fb: FormBuilder) {}

  signUpForm = this.fb.group({
    emailAddress: ['', Validators.email],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.minLength(8)],
    confirmPassword: ['', Validators.required],
  });

  passwordsMatch(): boolean {
    const password = this.signUpForm.value.password;
    const confirmPassword = this.signUpForm.value.confirmPassword;
    return password === confirmPassword;
  }
  onSubmit() {
    if (this.signUpForm.valid && this.passwordsMatch()) {
      const form = this.signUpForm.value;
      alert(JSON.stringify(form));
    } else {
      alert('Please correct the form errors.');
    }
  }
}
