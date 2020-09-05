import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b4',
  templateUrl: './b4.component.html',
  styleUrls: ['./b4.component.css']
})
export class B4Component implements OnInit {
  ds = [{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},{ hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}];
  constructor() { }

  ngOnInit(): void {
    console.log(this.ds.filter(sv => {
      return sv.diemthi > 8 && sv.quequan == 'Hai Phong';
    }));
  }

}

