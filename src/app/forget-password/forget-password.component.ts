import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Here, you would typically send the email to your backend API
      console.log('Request to reset password for:', this.email);
      
      // Simulate a successful response
      this.successMessage = 'A password reset link has been sent to your email.';
      this.errorMessage = ''; // Clear any previous error messages

      // Reset the form
      form.reset();
      this.email = ''; // Clear the email input
    } else {
      this.errorMessage = 'Please enter a valid email address.';
      this.successMessage = ''; // Clear any previous success messages
    }
  }
}
