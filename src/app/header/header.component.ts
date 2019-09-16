import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isShow: Boolean = false;
    isRotate: Boolean = true;
    constructor(private router: Router) { }
    
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
    }

    ngOnInit() {
        setTimeout(() => {
            this.isShow = true;
        }, 500)

        this.animate()
    }

}
