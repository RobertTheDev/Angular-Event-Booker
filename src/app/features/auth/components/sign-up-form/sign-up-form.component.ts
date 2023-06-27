import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

export const passwordMismatch: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordMismatch: true }
    : null;
};

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly supabase: SupabaseService
  ) {}

  loading = false;

  submitted = false;

  signUpForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      termsAccepted: [false, [Validators.requiredTrue]],
    },
    { validators: passwordMismatch }
  );

  get email() {
    return this.signUpForm.get('email');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get termsAccepted() {
    return this.signUpForm.get('termsAccepted');
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const email = this.signUpForm.value.email as string;

      const { error } = await this.supabase.signIn(email);
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.signUpForm.reset();
      this.loading = false;
    }
  }

  alert() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      alert(JSON.stringify(this.signUpForm.value));
    }
  }
}
