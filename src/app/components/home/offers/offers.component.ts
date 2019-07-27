import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Phone } from 'app/models/Phone';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { getProductStateBrandFilter, getProductStateCategoryFilter } from 'app/store';
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
    products: Phone[];
    brandFilter: Observable<string>;
    categoryFilter: Observable<string>;
    page = 1;
    
    @computed get isEmpty() {
        return !this.products || !this.products.length;
    }

    constructor(
        private productService: ProductService, 
        private store: Store<ProductStore.state>,
        private router: Router) { 
        this.brandFilter = store.select(getProductStateBrandFilter);
        this.categoryFilter = store.select(getProductStateCategoryFilter);
    }

    toggle() {
        this.isReady = !this.isReady;
    }

    getAllProducts(): void {
        const allProducts = this.productService.getProducts();
        this.brandFilter.subscribe(res => {
            this.isReady = false;
            setTimeout(() => {
                this.products = this.getFilteredByBrandProducts(allProducts, res);
                this.isReady = true
            }, 200);
        })
        this.categoryFilter.subscribe(res => {
            this.isReady = false;
            setTimeout(() => {
                this.products = this.getFilteredByCategoryProducts(allProducts, res);
                this.isReady = true
            }, 200);
        })
    }

    getFilteredByBrandProducts(arr, filter) {
        return arr.filter(item => item.brand.toLowerCase().indexOf(filter) !== -1);
    }

    getFilteredByCategoryProducts(arr, filter) {
        return arr.filter(item => item.category.toLowerCase().indexOf(filter) !== -1);
    }

    setDefaultBrandFilter() {
        this.store.dispatch(new ProductStore.SetBrandFilter(""));
    }

    setDefaultCategoryFilter() {
        this.store.dispatch(new ProductStore.SetCategoryFilter(""));
    }

    showDetails(value: string, product: Phone) {
        this.store.dispatch(new ProductStore.SetProductDetails(product));
        this.router.navigate(['/product-details'])
    }

    goToStore(value: string, product: Phone) {
        window.location.href = product.href;
    }

    ngOnInit() {
        this.setDefaultBrandFilter();
        this.setDefaultCategoryFilter();
        this.getAllProducts();
    }
}
