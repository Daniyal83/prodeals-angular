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

    setCategoriesFilter(category: any) {
        this.store.dispatch(new ProductStore.SetBrandFilter(""));
        this.store.dispatch(new ProductStore.SetCategoryFilter(category.rusName));
        if(category.rusName !== 'Все') {
            return this.router.navigate([`/main/filtered/${category.name}`]);
        }
        this.router.navigate(['/main']);
        this.store.dispatch(new ProductStore.SetPage(1));
    }

    ngOnInit() {
        this.categories = [
            {id: 0, name: "All", rusName: 'Все'},
            {id: 1, name: "Phones", rusName: 'Смартфоны'},
            {id: 2, name: "Headphones", rusName: 'Наушники'},
            {id: 3, name: "Cases", rusName: 'Чехлы'},
            {id: 4, name: "TV-boxes", rusName: 'ТВ-приставки'},
            {id: 5, name: "Projectors", rusName: 'Проекторы'},
            {id: 5, name: "Watches", rusName: 'Часы'}
        ]
    }

}
