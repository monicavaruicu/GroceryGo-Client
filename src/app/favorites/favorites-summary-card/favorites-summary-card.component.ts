import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-favorites-summary-card',
  templateUrl: './favorites-summary-card.component.html',
  styleUrl: './favorites-summary-card.component.scss'
})
export class FavoritesSummaryCardComponent {
  @Input() products: ProductModel[];

  totalProducts: number = 0;
  totalAmount: number = 0;

  calculateTotal() {
    this.totalAmount = 0;
    if (this.products && this.products.length > 0) {
      this.products.forEach(product => {
        this.totalAmount += product.price;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && changes['products'].currentValue) {
      this.calculateTotal();
    }
  }
}
