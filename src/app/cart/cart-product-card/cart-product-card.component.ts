import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { CartItemModel } from '../../models/CartItemModel';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrl: './cart-product-card.component.scss'
})
export class CartProductCardComponent {
  @Input() product: ProductModel;
  @Input() quantity: number;
  @Output() productDeleted = new EventEmitter<void>();
  
  isFavorite: boolean = false;

  constructor(
    public sessionService: SessionService,
    public productService: ProductService,
    private orderService: OrderService,
  ) {}

  isAdmin() {
    return this.sessionService.isAdmin();
  }

  delete() {
    var entryToRemove: CartItemModel = {
      productId: this.product.id,
      userId: this.sessionService.userId
    }
    this.orderService.removeOneEntryFromCart(entryToRemove).subscribe(() => {
      this.productDeleted.emit();
    })
  }
}
