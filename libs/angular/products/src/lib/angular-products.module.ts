import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { angularProductsRoutes } from './lib.routes';
import { ProductComponent } from './component/product/product.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './+state/products/products.reducer';
import { ProductsEffects } from './+state/products/products.effects';
import { ProductsFacade } from './+state/products/products.facade';
import {NavbarComponent} from '@skart/component-navbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(angularProductsRoutes),
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.productsReducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
    NavbarComponent,
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  providers: [ProductsFacade],
})
export class AngularProductsModule {}
