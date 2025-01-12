import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { CategoriesOverviewComponent } from './category/categories-overview/categories-overview.component';
import { CategoryCardComponent } from './category/category-card/category-card.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductsOverviewComponent } from './product/products-overview/products-overview.component';
import { SubcategoriesOverviewComponent } from './subcategory/subcategories-overview/subcategories-overview.component';
import { SubcategoryCardComponent } from './subcategory/subcategory-card/subcategory-card.component';
import { SubcategoryCreateComponent } from './subcategory/subcategory-create/subcategory-create.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { CartOverviewComponent } from './cart/cart-overview/cart-overview.component';
import { CartProductCardComponent } from './cart/cart-product-card/cart-product-card.component';
import { CartSummaryCardComponent } from './cart/cart-summary-card/cart-summary-card.component';
import { FavoritesOverviewComponent } from './favorites/favorites-overview/favorites-overview.component';
import { FavoritesProductCardComponent } from './favorites/favorites-product-card/favorites-product-card.component';
import { FavoritesSummaryCardComponent } from './favorites/favorites-summary-card/favorites-summary-card.component';
import { OrdersOverviewComponent } from './orders/orders-overview/orders-overview.component';
import { OrdersOrderCardComponent } from './orders/orders-order-card/orders-order-card.component';
import { OrdersSummaryCardComponent } from './orders/orders-summary-card/orders-summary-card.component';
import { OrderCheckoutComponent } from './orders/order-checkout/order-checkout.component';
import { PaymentSuccessComponent } from './payment/payment-success/payment-success.component';
import { PaymentCancelComponent } from './payment/payment-cancel/payment-cancel.component';
import { OrderProductsOverviewComponent } from './orders/order-products-overview/order-products-overview.component';
import { OrderProductCardComponent } from './orders/order-product-card/order-product-card.component';
import { OrderProductsSummaryCardComponent } from './orders/order-products-summary-card/order-products-summary-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductCardComponent,
    ProductsOverviewComponent,
    ProductCreateComponent,
    CategoryCardComponent,
    CategoriesOverviewComponent,
    SubcategoryCardComponent,
    SubcategoriesOverviewComponent,
    SubcategoryCreateComponent,
    CategoryCreateComponent,
    ProductEditComponent,
    NavigationBarComponent,
    CartOverviewComponent,
    CartProductCardComponent,
    CartSummaryCardComponent,
    FavoritesOverviewComponent,
    FavoritesProductCardComponent,
    FavoritesSummaryCardComponent,
    OrdersOverviewComponent,
    OrdersOrderCardComponent,
    OrdersSummaryCardComponent,
    OrderCheckoutComponent,
    PaymentSuccessComponent,
    PaymentCancelComponent,
    OrderProductsOverviewComponent,
    OrderProductCardComponent,
    OrderProductsSummaryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatRippleModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatError,
    MatLabel
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatRippleModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatError,
    MatLabel
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
