import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() buttonValue: string;
    @Output() clicked = new EventEmitter<string>();

    constructor() { }

    makeAction() {
        this.clicked.emit(this.buttonValue);
    }

    ngOnInit() {
    }

}
