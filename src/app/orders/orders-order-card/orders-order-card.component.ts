import { Component, Input } from '@angular/core';
import { OrderModel } from '../../models/OrderModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-order-card',
  templateUrl: './orders-order-card.component.html',
  styleUrl: './orders-order-card.component.scss'
})
export class OrdersOrderCardComponent {
  @Input() order: OrderModel;

  orderStatus: string;
  paymentMethod: string;

constructor(private router: Router) {}

ngOnInit(){
  if (this.order.orderStatusId == 1){
    this.orderStatus = "To Be Processed"
  }

  if (this.order.paymentMethodId == 1)
  {
    this.paymentMethod = "Cash"
  }
  if (this.order.paymentMethodId == 2) {
    this.paymentMethod = "Credit Card"
  }
}

redirectToOrderProducts() {
  this.router.navigate(['/orders', this.order.id, 'products'], {
    state: { order: this.order }
  });
}
}
