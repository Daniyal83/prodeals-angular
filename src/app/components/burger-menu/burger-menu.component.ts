import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

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

    constructor() { }

    toggleMenu() {
        this.isMenuOpened = !this.isMenuOpened;
    }

    clickedOutsideMenu(e: Event) {
        this.isMenuOpened = false;
    }

    ngOnInit() {
    }

}