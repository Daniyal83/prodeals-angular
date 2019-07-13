import { Injectable } from '@angular/core';
import { PRODUCTS } from '../all-products/products';
import { Phone } from '../models/Phone';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Phone[] {
    return PRODUCTS;
  }

}
