import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as ProductStore from '../../store';
import { Observable } from 'rxjs';
import { Phone } from '../../models/Phone';
import { getProductStateSearchResult } from '../../store';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  products: Observable<Phone[]>

  constructor(
      private store: Store<ProductStore.state>,
      private router: Router) { 
    this.products = store.select(getProductStateSearchResult);
  }

  showDetails(value: string, prod: Phone) {
    this.store.dispatch(new ProductStore.SetProductDetails(prod));
    this.router.navigate(['/product-details'])
  }

  ngOnInit() {
  }

}
