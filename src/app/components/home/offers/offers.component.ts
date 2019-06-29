import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'app/models/Product';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { getProductStateBrandFilter } from 'app/store';
import { offersAnimation } from 'app/animations';
import { computed } from 'mobx-angular';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss'],
    animations: [
        offersAnimation
    ]
})
export class OffersComponent implements OnInit {
    isReady: Boolean = false;
    products: Product[];
    brandFilter: Observable<string>;
    page = 1;
    
    @computed get isEmpty() {
        return !this.products || !this.products.length;
    }

    constructor(private productService: ProductService, private store: Store<ProductStore.state>) { 
        this.brandFilter = store.select(getProductStateBrandFilter);

    }

    toggle() {
        this.isReady = !this.isReady;
    }

    getAllProducts(): void {
        const allProducts = this.productService.getProducts();
        this.brandFilter.subscribe(res => {
            this.isReady = false;
            setTimeout(() => {
                this.products = this.getFilteredProducts(allProducts, res);
                this.isReady = true
            }, 200);
        })
    }

    getFilteredProducts(arr, filter) {
        return arr.filter(item => item.brand.toLowerCase().indexOf(filter) !== -1);
    }

    setDefaultBrandFilter() {
        this.store.dispatch(new ProductStore.SetBrandFilter(""));
    }  

    showDetails(value: string) {
        console.log(value);
    }

    goToStore(value: string) {
        console.log(value);
    }

    ngOnInit() {
        this.setDefaultBrandFilter();
        this.getAllProducts();
    }
}
