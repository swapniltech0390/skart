import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { angularProductsRoutes } from './lib.routes';
import { ProductComponent } from './component/product/product.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class AngularProductsModule {}
