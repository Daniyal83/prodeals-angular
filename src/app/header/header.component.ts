import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow: Boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isShow = true;
    }, 500)
  }

}
