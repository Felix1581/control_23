import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

 products: ProductType[] = [];
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => {
          this.products = data;
      })

  }

}
