import { Component } from '@angular/core';
import { SaveOrderModel } from '../../models/SaveOrderModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { SessionService } from '../../services/session.service';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss'
})
export class OrderCheckoutComponent {
  stripePublicKey = 'pk_test_51QgQviHGj8pDXLfAeNMCJbWaiIhk005qWguDFXaTYYkcmpms9ZVyM6ZlXRRSj5GGVWBQHFPDqs7AxlTRGvIb0ty900qjUllUYw';

  firstName: string;
  lastName: string;
  email: string;
  selectedPaymentMethod: number;
  address: string;
  total: number;

  constructor(
    public sessionService: SessionService,
    private orderService: OrderService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUserInfo();
    this.route.queryParams.subscribe(params => {
      this.total = Number(params['total']);;
    });
  }

  getUserInfo() {
    this.firstName = this.sessionService.userFirstName;
    this.lastName = this.sessionService.userLastName;
    this.email = this.sessionService.userEmail;
  }

  processOrder() : SaveOrderModel {
    var userId = this.sessionService.userId;
    var order: SaveOrderModel = {
      address: this.address,
      userId: userId,
      paymentMethodId: this.selectedPaymentMethod,
      total: this.total
    }

    return order;
  }

  placeOrder() {

    var order = this.processOrder();

    this.orderService.placeOrder(order).subscribe(() => {
      this.snackBar.open('The order has been successfully placed!', 'Close', {
        duration: 1000,
      });

      setTimeout(() => {
        this.router.navigateByUrl('categories');
      }, 1000);
    });
  }

  checkAddressLength() {
    if (this.address.length < 10)
      return true;
    return false;
  }

  async pay() {
    var order = this.processOrder();
    this.orderService.setOrder(order);

    const stripe = await loadStripe(this.stripePublicKey);

    if (!stripe) {
      console.error('Stripe could no be initialized.');
      return;
    }

    try {
      var apiUrl = `${environment.apiUrl}/payment/create-checkout-session`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: this.total * 100 })
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

    } catch (error) {
    }
  }
}
