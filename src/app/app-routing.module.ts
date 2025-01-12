import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductsOverviewComponent } from './product/products-overview/products-overview.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { CategoriesOverviewComponent } from './category/categories-overview/categories-overview.component';
import { SubcategoriesOverviewComponent } from './subcategory/subcategories-overview/subcategories-overview.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { SubcategoryCreateComponent } from './subcategory/subcategory-create/subcategory-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RegisterComponent } from './register/register.component';
import { CartOverviewComponent } from './cart/cart-overview/cart-overview.component';
import { FavoritesOverviewComponent } from './favorites/favorites-overview/favorites-overview.component';
import { OrdersOverviewComponent } from './orders/orders-overview/orders-overview.component';
import { OrderCheckoutComponent } from './orders/order-checkout/order-checkout.component';
import { PaymentSuccessComponent } from './payment/payment-success/payment-success.component';
import { PaymentCancelComponent } from './payment/payment-cancel/payment-cancel.component';
import { OrderProductsOverviewComponent } from './orders/order-products-overview/order-products-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },,
  {
    path: 'products/:subcategoryId',
    component: ProductsOverviewComponent,
  },
  {
    path: 'product/create',
    component: ProductCreateComponent,
  },
  {
    path: 'categories',
    component: CategoriesOverviewComponent,
  },
  {
    path: 'subcategories/:categoryId',
    component: SubcategoriesOverviewComponent,
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent,
  },
  {
    path: 'subcategory/create',
    component: SubcategoryCreateComponent, 
  },
  {
    path: 'product/edit/:productId',
    component: ProductEditComponent,
  },
  {
    path: 'cart',
    component: CartOverviewComponent,
  },
  {
    path: 'favorites',
    component: FavoritesOverviewComponent,
  },
  {
    path: 'orders',
    component: OrdersOverviewComponent,
  },
  {
    path: 'checkout',
    component: OrderCheckoutComponent,
  },
  {
    path: 'payment/success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'payment/cancel',
    component: PaymentCancelComponent,
  },
  {
    path: 'orders/:orderId/products',
    component: OrderProductsOverviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
