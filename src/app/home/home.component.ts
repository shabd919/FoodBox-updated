import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodModel = {
    name: '',
    description: '',
    price: null,
    quantity:'',
    category: '',
    imageUrl: ''
  };
  
  errorMessage: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Here, you would typically send the foodModel to your backend API
      console.log('Food Details Submitted:', this.foodModel);
      
      // Reset the form after submission
      form.reset();
      this.foodModel = {
        name: '',
        description: '',
        price: null,
        quantity:'',
        category: '',
        imageUrl: ''
      };
      this.errorMessage = ''; // Clear any previous error messages
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
