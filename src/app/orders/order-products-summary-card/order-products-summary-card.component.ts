import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-order-products-summary-card',
  templateUrl: './order-products-summary-card.component.html',
  styleUrl: './order-products-summary-card.component.scss'
})
export class OrderProductsSummaryCardComponent {
  @Input() products: ProductModel[];
  @Input() orderId: number;
  @Input() total: number = 0;
}
