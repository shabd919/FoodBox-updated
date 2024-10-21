import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dummy= [
    {
        "name": "Laptop",
        "price": 999.99,
        "quantity": 50
    },
    {
        "name": "Wireless Mouse",
        "price": 25.99,
        "quantity": 200
    },
    {
        "name": "Bluetooth Headphones",
        "price": 79.99,
        "quantity": 150
    },
    {
        "name": "USB-C Charging Cable",
        "price": 9.99,
        "quantity": 300
    },
    {
        "name": "Smartphone",
        "price": 699.99,
        "quantity": 75
    }
 
];
increment(product: any) {
  product.quantity++;
}
 
decrement(product: any) {
  if (product.quantity > 0) {
    product.quantity--;
  }
}
}
