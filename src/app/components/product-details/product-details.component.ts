import { Component, OnInit } from '@angular/core';
import { Phone } from 'app/models/Phone';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router'
import * as ProductStore from 'app/store';
import { getProductStateChosenProduct } from 'app/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    $product: Observable<Phone>

    constructor(private store: Store<ProductStore.state>, private router: Router) { 
        this.$product = store.select(getProductStateChosenProduct);
    }

    isInfo(key: string) {
        const noInfoKeys = ["title", "href", "category", "special", "photo"]
        return noInfoKeys.indexOf(key) === -1;
    }

    goToStore(href) {
        window.location.href = href;
    }

    ngOnInit() {
        this.$product.subscribe(res => {
            if(!res) {
                return this.router.navigate(['/'])
            }
        })
    }

}
