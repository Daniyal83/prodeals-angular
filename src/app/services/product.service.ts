import { Injectable } from '@angular/core';
import { allProducts } from '../all-products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return allProducts;
  }

  getProductByTitle(title) {
    return allProducts.find(item => item.title.replace(/[\/ ]/g, "_") === title);
  }

}
