import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, DoCheck {
  searchValue: string = "";

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log(this.searchValue);
  }

}
