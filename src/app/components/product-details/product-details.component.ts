import { Component, OnInit } from '@angular/core';
import { Phone } from 'app/models/Phone';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router'
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as ProductStore from 'app/store';
import { getProductStateChosenProduct } from 'app/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    $product: Observable<Phone>

    constructor(private store: Store<ProductStore.state>, private router: Router,
        private renderer2: Renderer2, @Inject(DOCUMENT) private _document) { 
        this.$product = store.select(getProductStateChosenProduct)
    }

    isInfo(key: string) {
        const noInfoKeys = ["brand", "title", "href", "category", "rusCategory", "special", "photo", "isDiscount"];
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
        });
        const d = this._document.body || this._document.head;
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://kupimvmeste.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        if(d) this.renderer2.appendChild(d, s);
    }
}
