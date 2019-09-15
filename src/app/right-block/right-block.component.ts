import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.scss']
})
export class RightBlockComponent implements AfterViewInit {

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
