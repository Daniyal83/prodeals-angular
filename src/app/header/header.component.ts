import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isShow: Boolean = false;
    isRotate: Boolean = true;
    constructor(private router: Router, private store: Store<ProductStore.state>) { }
    
    animate() {
        setInterval(() => {
            this.isRotate = false;
            setTimeout(() => {
                this.isRotate = true;                
            }, 500)
        }, 10000)
    }

    goToMain() {
        this.router.navigate(['/main']);
        this.store.dispatch(new ProductStore.SetPage(1));
    }

    ngOnInit() {
        setTimeout(() => {
            this.isShow = true;
        }, 500)

        this.animate()
    }

}
