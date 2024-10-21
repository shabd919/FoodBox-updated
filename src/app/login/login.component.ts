import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel = { email: '', password: '' };
  forgotPasswordModel = { email: '' };
  resetPasswordModel = { newPassword: '', confirmPassword: '' };
  errorMessage: string | null = null;
  forgotErrorMessage: string | null = null;
  resetErrorMessage: string | null = null;
  isForgotPassword: boolean = false;
  isResetPassword: boolean = false;

  onSubmit() {
    // Your login logic
  }

  onForgotPassword() {
    // Your logic to send reset link
  }

  onResetPassword() {
    // Your logic to handle resetting the password
    if (this.resetPasswordModel.newPassword === this.resetPasswordModel.confirmPassword) {
      // Proceed with reset logic
    } else {
      this.resetErrorMessage = 'Passwords do not match.';
    }
  }

  toggleForgotPassword(event: Event) {
    event.preventDefault();
    this.isForgotPassword = !this.isForgotPassword;
    this.isResetPassword = false; // Reset state
    this.errorMessage = null;
    this.forgotErrorMessage = null;
    this.resetErrorMessage = null;
  }

  toggleResetPassword(event: Event) {
    event.preventDefault();
    this.isResetPassword = !this.isResetPassword;
    this.isForgotPassword = false; // Reset state
    this.forgotErrorMessage = null;
    this.resetErrorMessage = null;
  }
}
