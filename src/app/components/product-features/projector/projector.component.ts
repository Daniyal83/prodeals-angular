import { Component, OnInit, Input } from '@angular/core';
import { Projector } from 'app/models/Projector';

@Component({
  selector: 'app-projector',
  templateUrl: './projector.component.html',
  styleUrls: ['./projector.component.scss']
})
export class ProjectorComponent implements OnInit {
    @Input() projector: Projector
        
    constructor() { }

    ngOnInit() {
    }

}
