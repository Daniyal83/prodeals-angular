import { Component, OnInit, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductStore from '../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, DoCheck {
  searchValue: string = "";

  constructor(private store: Store<ProductStore.state>) { }

  search() {
    console.log('submited');
    this.store.dispatch(new ProductStore.SearchProduct(this.searchValue));
  } 

  ngOnInit() {
  }

  ngDoCheck() {
  }

}
