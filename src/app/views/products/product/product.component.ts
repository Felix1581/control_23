import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {ProductsService} from "../../../shared/services/products.service";
import {IdService} from "../../../shared/services/id.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType;
  constructor(private activateRoute: ActivatedRoute,private productsService: ProductsService,
              private router:Router, private idService:IdService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productsService.getProduct(+params ['id'])
          .pipe(
            tap((result) => {
              this.idService.productId = result.id;
              this.idService.title = result.title;
            })
          )

         .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          })
      }
    })
  }




}
