import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
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
  @Input() product: Product;
  isReady: Boolean = false;
  
  constructor() { }

  ngOnInit() {
      this.isReady = false;
      let ang = this;
      setTimeout(() => { ang.isReady = true }, 100)
  }

}
