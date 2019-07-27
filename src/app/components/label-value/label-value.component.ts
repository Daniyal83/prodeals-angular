import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-value',
  templateUrl: './label-value.component.html',
  styleUrls: ['./label-value.component.scss']
})
export class LabelValueComponent implements OnInit {
    @Input() label: string
    @Input() value: string
    @Input() isCurrency: boolean
    
    constructor() { }

    ngOnInit() {
    }

}
