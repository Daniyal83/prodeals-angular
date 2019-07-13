import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Phone } from './../models/Phone';
import * as ProductStore from '../store';
import { getProductStateProducts, getProductStateSearchResult } from '../store';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  products: Observable<Phone[]>;
  searchResult: Observable<Phone[]>;
  newProduct: Phone = {
    title: "",
    category: "",
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
