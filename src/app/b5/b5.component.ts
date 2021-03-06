import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b5',
  templateUrl: './b5.component.html',
  styleUrls: ['./b5.component.css']
})
export class B5Component implements OnInit {

  arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  arrResult = [];

  constructor() { }

  ngOnInit(): void {
    this.arrResult = this.arrNum.filter(x => {
      let sq = Math.sqrt(x);
      return ((sq - Math.floor(sq)) == 0);
    });
  }

}
