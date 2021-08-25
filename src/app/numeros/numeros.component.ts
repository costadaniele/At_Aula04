import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  n = 0;

  constructor() {}

  ngOnInit() {}

  getRandom() {
    this.n = Math.floor(Math.random() * 100 + 1);
  }

  getMultiplicationTable() {
    let list: number[] = [];
    for (let i = 1; i <= 10; i++) {
      list.push(this.n * i);
    }
    return list;
  }
}
