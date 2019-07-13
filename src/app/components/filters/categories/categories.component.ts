import { Component, OnInit } from '@angular/core';
import { Categories } from '../../../models/Categories';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    categories: Categories[]

    constructor(private store: Store<ProductStore.state>, private router: Router) { }

    setCategoriesFilter(name: string) {
        this.store.dispatch(new ProductStore.SetBrandFilter(""));
        this.store.dispatch(new ProductStore.SetCategoryFilter(name));
        this.router.navigate(['/main']);
    }

    ngOnInit() {
        this.categories = [
            {id: 1, name: "Phones"},
            {id: 2, name: "Headphones"},
            {id: 3, name: "Cases"},
            {id: 4, name: "TV-boxes"},
            {id: 5, name: "Watches"}
        ]
    }

}
