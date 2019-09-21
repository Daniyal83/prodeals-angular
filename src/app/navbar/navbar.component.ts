import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    
    constructor(private store: Store<ProductStore.state>) { }

    setDefaultPage() {
        this.store.dispatch(new ProductStore.SetPage(1));
    }

    ngOnInit() {
    }

}
