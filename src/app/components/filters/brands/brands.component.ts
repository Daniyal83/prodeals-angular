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
        if(name !== 'Все') {
            return this.router.navigate([`/main/filtered/${name}`]);
        }
        this.router.navigate(['/main']);
        this.store.dispatch(new ProductStore.SetPage(1));
    }  

    ngOnInit() {
        this.brands = [
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
    }

}
