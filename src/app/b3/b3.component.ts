import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b3',
  templateUrl: './b3.component.html',
  styleUrls: ['./b3.component.css']
})
export class B3Component implements OnInit {
  ds = [{hoten: 'Nguyen Thi Mai', diemthi:9},{hoten: 'Tran Thi Anh', diemthi:7.5},{ hoten: 'Hoang Thi Dung', diemthi:8.3}];

  constructor() { }

  ngOnInit(): void {
    console.log(this.ds.sort((a, b) => {
      let name1 = a.hoten;
      let name2 = b.hoten;

      name1 = name1.substring(name1.lastIndexOf(" "), name1.length) + name1.substring(0, name1.lastIndexOf(" "));
      name2 = name2.substring(name2.lastIndexOf(" "), name2.length) + name2.substring(0, name2.lastIndexOf(" "));

      if(name1 > name2) return 1;
      if(name1 < name2) return -1;
      return 0;
    }));
  }

}

