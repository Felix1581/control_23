import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  productId: number = 0;
  title:string = '';

  constructor() {
  }
}
