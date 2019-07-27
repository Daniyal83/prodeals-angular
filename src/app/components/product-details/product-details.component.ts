import { Component, OnInit } from '@angular/core';
import { Phone } from 'app/models/Phone';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { getProductStateChosenProduct } from 'app/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    $product: Observable<Phone>

    constructor(private store: Store<ProductStore.state>) { 
        this.$product = store.select(getProductStateChosenProduct);
    }

    ngOnInit() {
    }

}
