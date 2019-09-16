import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isOpened: Boolean = false
    constructor() { }

    toggleMenu() {
        this.isOpened = !this.isOpened;
    }

    clickedOutside(e: Event) {
        this.isOpened = false;
    }

    ngOnInit() {
    }

}
