import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  price: number = 133;
  duration = 3;
  fromDate = '04.09.2019';
  toDate = '11.09.2019';

  constructor() { }

  ngOnInit(): void {
  }

}
