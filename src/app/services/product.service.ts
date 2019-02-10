import { Injectable } from '@angular/core';
import { PRODUCTS } from '../all-products/products';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

}
