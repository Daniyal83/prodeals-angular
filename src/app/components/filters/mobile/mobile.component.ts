import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({transform: 'translateX(100%)'}),
                animate('100ms ease-in', style({transform: 'translateX(0)'}))
              ]),
              transition(':leave', [
                animate('100ms ease-in', style({transform: 'translateX(100%)'}))
              ])
        ]),
        trigger('dropInOut', [
            transition(':enter', [
                style({'max-height': 0, opacity: 0}),
                animate('200ms ease-in', style({'max-height': '400px'}))
              ]),
              transition(':leave', [
                animate('150ms ease-in', style({opacity: 0, 'max-height': 0}))
              ])
        ])
    ]
})
export class MobileComponent implements OnInit {
    isFiltersOpened: Boolean = false
    isCategories: Boolean = false;
    isBrands: Boolean = false;
    categories = [
        {id: 0, name: "All", rusName: 'Все'},
        {id: 1, name: "Phones", rusName: 'Смартфоны'},
        {id: 2, name: "Headphones", rusName: 'Наушники'},
        {id: 3, name: "Cases", rusName: 'Чехлы'},
        {id: 4, name: "TV-boxes", rusName: 'ТВ-приставки'},
        {id: 5, name: "Projectors", rusName: 'Проекторы'},
        {id: 5, name: "Watches", rusName: 'Часы'}
    ]
    brands = [
        {id: 0, name: "Все"},
        {id: 1, name: "Xiaomi"},
        {id: 2, name: "Meizu"},
        {id: 3, name: "Lenovo"},
        {id: 4, name: "OnePlus"},
        {id: 5, name: "Huawei"},
        {id: 6, name: "Honor"},
        {id: 7, name: "Asus"},
        {id: 8, name: "LeEco"},
    ]

    constructor(private store: Store<ProductStore.state>, private router: Router) { }

    toggleFilters() {
        this.isFiltersOpened = !this.isFiltersOpened;
        if(!this.isFiltersOpened) {
            this.isCategories = false;
            this.isBrands = false;
        }
    }

    toggleCategores() {
        this.isBrands = false;
        this.isCategories = !this.isCategories;
    }

    toggleBrands() {
        this.isCategories = false;
        this.isBrands = !this.isBrands;        
    }

    clickedOutside() {
        this.isFiltersOpened = false;
        this.isCategories = false;
        this.isBrands = false;
    }

    setCategoryFilter(category: any) {
        this.store.dispatch(new ProductStore.SetBrandFilter(""));
        this.store.dispatch(new ProductStore.SetCategoryFilter(category.rusName));
        this.clickedOutside();
        if(category.rusName !== 'Все') {
            return this.router.navigate([`/main/filtered/${category.name}`]);
        }
        this.router.navigate(['/main']);
    }

    setBrandFilter(name: string) {
        this.store.dispatch(new ProductStore.SetCategoryFilter(""));
        this.store.dispatch(new ProductStore.SetBrandFilter(name));
        this.clickedOutside();
        if(name !== 'Все') {
            return this.router.navigate([`/main/filtered/${name}`]);
        }
        this.router.navigate(['/main']);
    }

    ngOnInit() {
    }

}
