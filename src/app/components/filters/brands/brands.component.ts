import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../models/Brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands: Brand[];

  constructor() { }

  ngOnInit() {
    this.brands = [
      {id: 1, name: "Xiaomi"},
      {id: 2, name: "Meizu"},
      {id: 3, name: "Lenovo"},
      {id: 4, name: "OnePlus"},
      {id: 5, name: "Huawei"},
      {id: 6, name: "Vernee"},
      {id: 7, name: "Asus"},
      {id: 8, name: "LeEco"},
    ]
  }

}
