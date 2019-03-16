import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Product } from './../models/Product';
import * as ProductStore from '../store';
import { getProductStateProducts, getProductStateSearchResult } from '../store';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  products: Observable<Product[]>;
  searchResult: Observable<Product[]>;
  newProduct: Product = {
    title: "",
    brand: "",
    price: 0,
    colors: [],
    photo: "../../assets/images/phones/redmiNote7.jpg",
    special: false,
  };
  colors: string;

  constructor(private store: Store<ProductStore.state>) {
    this.products = store.select(getProductStateProducts);
    this.searchResult = store.select(getProductStateSearchResult);
  }

  addProduct(obj) {
    const prod = {...obj, colors: [this.colors]};
    this.store.dispatch(new ProductStore.AddProduct({...prod}))
  }

  ngOnInit() {
  }

}
