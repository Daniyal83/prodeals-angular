import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Store } from '@ngrx/store';
import * as ProductStore from 'app/store';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({transform: 'translateX(-100%)'}),
                animate('100ms ease-in', style({transform: 'translateX(0%)'}))
              ]),
              transition(':leave', [
                animate('100ms ease-in', style({transform: 'translateX(-100%)'}))
              ])
        ])
    ]
})
export class BurgerMenuComponent implements OnInit {
    isMenuOpened: Boolean = false

    constructor(private store: Store<ProductStore.state>) { }

    setDefaultPage() {
        this.store.dispatch(new ProductStore.SetPage(1));
    }

    toggleMenu() {
        this.isMenuOpened = !this.isMenuOpened;
    }

    clickedOutsideMenu(e: Event) {
        this.isMenuOpened = false;
    }

    ngOnInit() {
    }

}
