import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b6',
  templateUrl: './b6.component.html',
  styleUrls: ['./b6.component.css']
})
export class B6Component implements OnInit {

  constructor() { }
public tongduong(n:number[]){
  let S=0;
for(let i=0; i<n.length;i++){
if(n[i]>=0){
  S+=n[i];
} else continue;
}return S;
}
tong=0;
dayso=[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
      this.tong=this.tongduong(this.dayso);
  }

}