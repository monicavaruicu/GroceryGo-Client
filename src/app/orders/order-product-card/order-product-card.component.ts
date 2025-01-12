import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-product-card',
  templateUrl: './order-product-card.component.html',
  styleUrl: './order-product-card.component.scss'
})
export class OrderProductCardComponent {
  @Input() product: ProductModel;
  @Input() quantity: number;
  
  isFavorite: boolean = false;

  constructor(
    public sessionService: SessionService,
    public productService: ProductService,
  ) {}

  isAdmin() {
    return this.sessionService.isAdmin();
  }
}
