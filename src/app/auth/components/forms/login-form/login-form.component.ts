import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    emailAddress: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const form = this.loginForm.value;
      alert(JSON.stringify(form));
    } else {
      alert('Please correct the form errors.');
    }
  }
}
