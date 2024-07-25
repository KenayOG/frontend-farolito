import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './home-products/home-products.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmarCarritoComponent } from './confirmar-carrito/confirmar-carrito.component';

@NgModule({
  declarations: [HomeProductsComponent, ConfirmarCarritoComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    CardModule,
    ButtonModule,
    OrderListModule,
    NgbPopoverModule,
  ],
  providers: [],
})
export class HomeModule {
  constructor(config: NgbPopoverConfig) {
    config.placement = 'end';
    config.triggers = 'hover';

    config.popperOptions = (options) => {
      for (const modifier of options.modifiers || []) {
        if (modifier.name === 'offset' && modifier.options) {
          modifier.options['offset'] = () => [30, 8];
        }
      }
      return options;
    };
  }
}
