import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';
import { FavoriteModel } from '../../models/FavoriteModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { SessionService } from '../../services/session.service';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-favorites-product-card',
  templateUrl: './favorites-product-card.component.html',
  styleUrl: './favorites-product-card.component.scss'
})
export class FavoritesProductCardComponent {
  @Input() product: ProductModel;
  @Output() productDeleted = new EventEmitter<void>();
  isFavorite: boolean = false;

  constructor(
    public sessionService: SessionService,
    public productService: ProductService,
    private snackBar: MatSnackBar,
  ) {}

  isAdmin() {
    return this.sessionService.isAdmin();
  }

  addToCart(){
    var product: CartItemModel = {
      productId: this.product.id,
      userId: this.sessionService.userId
    }
    this.productService.addProductToCart(product).subscribe(() => {
      this.snackBar.open('Product added to cart', 'Dismiss', {
        duration: 3000,
      });
    });
  }

  delete() {
    var favorite: FavoriteModel = {
      productId: this.product.id,
      userId: this.sessionService.userId
    }
    this.productService.removeProductFromFavorites(favorite).subscribe(() => {
      this.productDeleted.emit();
    })
  }
}
