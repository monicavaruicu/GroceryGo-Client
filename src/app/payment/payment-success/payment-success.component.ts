import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.scss'
})
export class PaymentSuccessComponent {

  constructor(
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(){
    this.placeOrder();
  }

  placeOrder() {

    var order = this.orderService.getOrder();

    if (order != null && order != undefined) {
      this.orderService.placeOrder(order).subscribe(() => {
        this.snackBar.open('The order has been successfully placed!', 'Close', {
          duration: 1000,
        });
      });
    }
  }
}
