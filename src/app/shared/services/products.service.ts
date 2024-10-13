import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  constructor(private http:HttpClient) { }

  getProducts():Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + 'tea');
  }

  getProduct(id:number):Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiURL + `tea?id=${id}`);
  }

  createOrder(data: {name:any,last_name:any, phone:any, country:any, zip:any, product:any,
         address:any,comment:any}) {
    return this.http.post<{success: boolean, message?: string}>(environment.apiURL + 'order-tea',data)
  }

}
