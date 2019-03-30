import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductStore from '../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, DoCheck {
  searchValue: string = "";

  constructor(
    private store: Store<ProductStore.state>,
    private router: Router,) { }

  search() {
    if(!this.searchValue) return;
    this.store.dispatch(new ProductStore.SearchProduct(this.searchValue));
    this.router.navigate(['/search-result']);
  } 

  ngOnInit() {
  }

  ngDoCheck() {
  }

}
