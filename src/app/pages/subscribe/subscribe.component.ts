import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  numberOfParti: number = 10;
  validVoucherCode = ['xcvfr', 'bn674', '09oiu', 'gh6tf'];

  voucherCode = new FormControl('', [Validators.required,
    Validators.minLength(5)]);


  constructor() { }

  ngOnInit(): void {
  }

  apply() {

  }

}
