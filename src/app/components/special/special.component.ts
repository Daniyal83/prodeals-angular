import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Phone } from 'app/models/Phone';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  products: Phone[];
  specialProduct: Phone;

  constructor(private productService: ProductService) { }

  getSpecialProduct(): void {
    this.products = this.productService.getProducts();
    this.specialProduct = this.products.find(item => item.special);
  }

  ngOnInit() {
    this.getSpecialProduct();
  }

}
