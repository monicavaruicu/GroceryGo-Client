import { Component, Input } from '@angular/core';
import { OrderModel } from '../../models/OrderModel';

@Component({
  selector: 'app-orders-summary-card',
  templateUrl: './orders-summary-card.component.html',
  styleUrl: './orders-summary-card.component.scss'
})
export class OrdersSummaryCardComponent {
  @Input() orders: OrderModel[];
}
