import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-left-block',
  templateUrl: './left-block.component.html',
  styleUrls: ['./left-block.component.scss']
})
export class LeftBlockComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    try {
        (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
    } catch(err) {
        console.log("google ads error: ", err)
    }
  }

}
