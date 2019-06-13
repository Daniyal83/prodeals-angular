import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isShow: Boolean = false;
    isRotate: Boolean = true;
    constructor() { }
    
    animate() {
        setInterval(() => {
            this.isRotate = false;
            setTimeout(() => {
                this.isRotate = true;                
            }, 500)
        }, 10000)
    }

    ngOnInit() {
        setTimeout(() => {
            this.isShow = true;
        }, 500),

        this.animate()
    }

}
