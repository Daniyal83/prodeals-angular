import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductStore from '../../store';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { getProductStateSearchResult } from '../../store';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  products: Observable<Product[]>

  constructor(private store: Store<ProductStore.state>) { 
    this.products = store.select(getProductStateSearchResult);
  }

  ngOnInit() {
  }

}
