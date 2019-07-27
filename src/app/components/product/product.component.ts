import { Component, OnInit, Input } from '@angular/core';
import { Phone } from 'app/models/Phone';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';
import { Router } from '@angular/router';
import { offersAnimation } from 'app/animations';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    animations: [
        offersAnimation
    ]
})

export class ProductComponent implements OnInit {
  @Input() product: Phone;
  isReady: Boolean = false;
  
  constructor(private store: Store<ProductStore.state>, private router: Router) { }

  showProductDetails() {
    this.store.dispatch(new ProductStore.SetProductDetails(this.product));
    this.router.navigate(['/product-details'])
  }

  ngOnInit() {
      this.isReady = false;
      let ang = this;
      setTimeout(() => { ang.isReady = true }, 100)
  }

}
