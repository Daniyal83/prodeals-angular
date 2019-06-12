import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'app/models/Product';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { getProductStateBrandFilter } from 'app/store';
import { transition, trigger, animate, state, style } from '@angular/animations'

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('hide', style({
                opacity: 0,
            })),
            state('show', style({
                opacity: 1,
            })),
            transition('hide => show', [
                animate('0.2s')
            ]),
            transition('show => hide', [
                animate('0.2s')
            ])
        ])
    ]
})
export class OffersComponent implements OnInit {
    isReady: Boolean = false;
    products: Product[];
    brandFilter: Observable<string>;

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
                this.products = allProducts.filter(item => item.brand.toLowerCase().indexOf(res) !== -1);
                this.isReady = true
            }, 200);
        })
    }

    showDetails(value: string) {
        console.log(value);
    }

    goToStore(value: string) {
        console.log(value);
    }

    ngOnInit() {
        this.getAllProducts();
    }
}
