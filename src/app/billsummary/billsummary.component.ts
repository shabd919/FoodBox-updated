import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  price: number; // Price in Rupees
  quantity: number;
}

@Component({
  selector: 'app-billsummary',
  templateUrl: './billsummary.component.html',
  styleUrls: ['./billsummary.component.css']
})
export class BillsummaryComponent {
  orderedItems: MenuItem[] = [
    { name: 'Pizza', price: 599, quantity: 2 },      // Price in INR
    { name: 'Burger', price: 249, quantity: 1 },     // Price in INR
    { name: 'Chicken 65', price: 199, quantity: 3 },  // Price in INR
  ];

  totalAmount: number = 0;
  billSummary: string = '';

  calculateBillSummary() {
    this.totalAmount = 0;
    let itemDetails = '';

    this.orderedItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      this.totalAmount += itemTotal;
      itemDetails += `${item.name} (x${item.quantity}): ₹${itemTotal.toFixed(2)}<br>`;
    });

    this.billSummary = `
      <strong>Bill Summary:</strong><br>
      -----------------<br>
      ${itemDetails}
      -----------------<br>
      <strong>Total Amount: ₹${this.totalAmount.toFixed(2)}</strong>
    `;
  }

  onGetSummary() {
    this.calculateBillSummary();
  }

  // Method to check if there are ordered items
  isButtonDisabled(): boolean {
    return this.orderedItems.length === 0;
  }
}
