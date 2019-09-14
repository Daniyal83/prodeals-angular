import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('400ms ease-in', style({transform: 'translateY(0%)'}))
            ]),
            transition(':leave', [
            animate('500ms ease-in', style({transform: 'translateY(-100%)'}))
            ])
        ])
    ]
})
export class AppComponent implements OnInit {
  title = 'prodeals';
  isSiteWorkRemain: Boolean = true;

  ngOnInit() {
    setTimeout(() => {
        this.isSiteWorkRemain = false;
    }, 4000)
  }
}
