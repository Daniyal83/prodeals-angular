import { Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @computed get currentYear() {
    return new Date().getFullYear();
  }

  constructor() { }

  ngOnInit() {
  }

}
