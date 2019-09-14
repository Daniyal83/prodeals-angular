import { Component, OnInit, Input } from '@angular/core';
import { Phone } from 'app/models/Phone';

@Component({
    selector: 'app-phone-features',
    templateUrl: './phone-features.component.html',
    styleUrls: ['./phone-features.component.scss']
})
export class PhoneFeaturesComponent implements OnInit {
    @Input() phone: Phone
    
    constructor() { }

    ngOnInit() {
    }

}
