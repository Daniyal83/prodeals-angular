import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Brand } from '../../../models/Brand';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
    brands: Brand[];

    constructor(private store: Store<ProductStore.state>, private router: Router) { }

    setBrandFilter(name: string) {
        this.store.dispatch(new ProductStore.SetCategoryFilter(""));
        this.store.dispatch(new ProductStore.SetBrandFilter(name));
        this.router.navigate(['/main']);
    }  

    ngOnInit() {
        this.brands = [
        {id: 0, name: "All"},
        {id: 1, name: "Xiaomi"},
        {id: 2, name: "Meizu"},
        {id: 3, name: "Lenovo"},
        {id: 4, name: "OnePlus"},
        {id: 5, name: "Huawei"},
        {id: 6, name: "Vernee"},
        {id: 7, name: "Asus"},
        {id: 8, name: "LeEco"},
        ]
    }

}
