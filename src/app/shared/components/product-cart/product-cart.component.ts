import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  @Input() product: ProductType;
  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
