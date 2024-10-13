import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdService} from "../../shared/services/id.service";
import {ProductsService} from "../../shared/services/products.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я]+$')]),
    phone: new FormControl('',  [Validators.required, Validators.pattern('^\\+?\\d{11}$')]),
    country: new FormControl('', Validators.required),
    indexAddress: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.pattern('^[А-ЯA-Za-zа-я\\s\\/\\-0-9]+')] ),
    product: new FormControl(''),
    comment: new FormControl('',)
  })

  get name() {
    return this.orderForm.get('name');
  }
  get lastName() {
    return this.orderForm.get('lastName');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get country() {
    return this.orderForm.get('country');
  }
  get indexAddress() {
    return this.orderForm.get('indexAddress');
  }
  get address() {
    return this.orderForm.get('address');
  }

  get comment() {
    return this.orderForm.get('comment');
  }

  requestGood:boolean = false;
  requestRepeat:boolean = false;
  formDisplay:boolean= true;
  constructor( private idService:IdService, private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.orderForm.patchValue({
      product: this.idService.title.toUpperCase(),
    })

  }

  createOrder() {
    this.productsService.createOrder({
      name: this.orderForm.controls['name'].value,
      last_name: this.orderForm.controls['lastName'].value,
      phone: this.orderForm.controls['phone'].value,
      country: this.orderForm.controls['country'].value,
      zip: this.orderForm.controls['indexAddress'].value,
      product: this.orderForm.controls['product'].value,
      address: this.orderForm.controls['address'].value,
      comment: this.orderForm.controls['comment'].value
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.requestGood = true;
          this.orderForm.reset();
          this.formDisplay = false;

        } else {
          this.requestRepeat = true;
        }
      })
  }
}
