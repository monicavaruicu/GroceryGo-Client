import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service';
import { CartItemModel } from '../../models/CartItemModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteModel } from '../../models/FavoriteModel';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: ProductModel;
  isFavorite: boolean = false;

  constructor(
    private sessionService: SessionService,
    private productService: ProductService,
    private snackBar: MatSnackBar,

  ) { }

  isAdmin() {
    return this.sessionService.isAdmin();
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      var favorite: FavoriteModel = {
        productId: this.product.id,
        userId: this.sessionService.userId
      }
      this.productService.setProductAsFavorite(favorite).subscribe(
        () => {
          this.snackBar.open('Product saved as favorite!', 'Close', { duration: 2000 });
        },
        (errorResult) => {
            this.snackBar.open(errorResult.error.message, 'Close', { duration: 2000 });
        });
    }
  }

  addToCart() {
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
}
