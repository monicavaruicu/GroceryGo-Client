import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary-card',
  templateUrl: './cart-summary-card.component.html',
  styleUrl: './cart-summary-card.component.scss'
})
export class CartSummaryCardComponent {
  @Input() products: ProductModel[];

  total: number = 0;

  constructor(private router: Router) {}

  calculateTotal() {
    this.total = 0;
    if (this.products && this.products.length > 0) {
      this.products.forEach(product => {
        this.total += product.price;
      });
    }
    this.total += 11;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && changes['products'].currentValue) {
      this.calculateTotal();
    }
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout'], { queryParams: { total: this.total } });
  }
}
