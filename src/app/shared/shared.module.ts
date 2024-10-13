import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProductCartComponent} from "./components/product-cart/product-cart.component";
import {TextLimitationPipe} from "./pipes/text-limitation.pipe";
import {RouterModule} from "@angular/router";
import {ConductInputDirective} from "./directives/conduct-input.directive";




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductCartComponent,
    TextLimitationPipe,
    ConductInputDirective,


  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductCartComponent,
    TextLimitationPipe,
    ConductInputDirective,
  ]
})
export class SharedModule { }
