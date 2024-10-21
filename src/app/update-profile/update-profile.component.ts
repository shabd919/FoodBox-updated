import { Component } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  updateModel = {
    id:'',
    username: '',
    email: '',
    mobileNumber:'',
    gender: '',
    password: '',
    confirmPassword: ''
  };
  
  errorMessage: string | null = null;

  onUpdate() {
    // Handle the update logic here
    // For example, make an HTTP request to update the user
  }
}
