import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'app/models/Product';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { getProductStateBrandFilter } from 'app/store';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
    
    products: Product[];
    brandFilter: Observable<string>;

    constructor(private productService: ProductService, private store: Store<ProductStore.state>) { 
        this.brandFilter = store.select(getProductStateBrandFilter);

    }

    getAllProducts(): void {
        const allProducts = this.productService.getProducts();
        this.brandFilter.subscribe(res => {
            this.products = allProducts.filter(item => item.brand.toLowerCase().indexOf(res) !== -1)
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
