import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Phone } from 'app/models/Phone';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { getProductStateBrandFilter, getProductStateCategoryFilter, getProductStatePage } from 'app/store';
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
    products: Phone[] = [];
    brandFilter: Observable<string>;
    categoryFilter: Observable<string>;
    page: Observable<number>;
    
    @computed get isEmpty() {
        return !this.products || !this.products.length;
    }

    constructor(
        private productService: ProductService, 
        private store: Store<ProductStore.state>,
        private router: Router,
        private route: ActivatedRoute) {
            this.page = store.select(getProductStatePage);
            this.brandFilter = store.select(getProductStateBrandFilter);
            this.categoryFilter = store.select(getProductStateCategoryFilter);
    }

    pageChange(event) {
        this.store.dispatch(new ProductStore.SetPage(event));
        this.scrollToTop(1000);
    }

    scrollToTop(scrollDuration) {
        const cosParameter = window.scrollY / 2;
        let scrollCount = 0;
        let oldTimestamp = performance.now();
        function step (newTimestamp) {
            scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) window.scrollTo(0, 0);
            if (window.scrollY === 0) return;
            window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }

    toggle() {
        this.isReady = !this.isReady;
    }

    getAllProducts(): void {
        let brand, category;
        const allProducts = this.productService.getProducts();
        this.brandFilter.subscribe(res => {
            brand = res;
            this.isReady = false;
            setTimeout(() => {
                this.products = this.getFilteredByBrandProducts(allProducts, res);
                this.isReady = true
            }, 200);
        })
        this.categoryFilter.subscribe(res => {
            category = res;
            if(res) {
                this.isReady = false;
                setTimeout(() => {
                    this.products = this.getFilteredByCategoryProducts(allProducts, res);
                    this.isReady = true
                }, 200);
            }
        })
        if(!brand && !category) {
            this.router.navigate(['/main'])
        }
    }

    getFilteredByBrandProducts(arr, filter) {
        return arr.filter(item => item.brand.toLowerCase().indexOf(filter) !== -1);
    }

    getFilteredByCategoryProducts(arr, filter) {
        return arr.filter(item => item.rusCategory.toLowerCase().indexOf(filter) !== -1);
    }

    setDefaultFilters() {
        if(!this.route.snapshot.params.filter) {
            this.store.dispatch(new ProductStore.SetBrandFilter(""));
            this.store.dispatch(new ProductStore.SetCategoryFilter(""));
        }
    }

    showDetails(value: string, product: Phone) {
        this.store.dispatch(new ProductStore.SetProductDetails(product));
        this.router.navigate([`/product-details/${product.title.replace(/[\/ ]/g, "_")}`])
    }

    goToStore(value: string, product: Phone) {
        window.open(product.href, '_blank');
    }

    ngOnInit() {
        this.setDefaultFilters();
        this.getAllProducts();
    }
}
