import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  price: number = 133;
  displayPrice: number;
  duration = 3;
  fromDate = '04.09.2019';
  toDate = '11.09.2019';
  numberOfParti: number = 10;
  validVoucherCode = ['abcde', '12345', 'xcvfr', 'bn674', '09oiu', 'gh6tf']; // list of vlalid codes
  isCodeValid: boolean;

  subscribeForm = new FormGroup({
    voucherCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    checkbox: new FormControl(''),
    partiNumber: new FormControl('1')
  })

  get f() { return this.subscribeForm.controls; }

  constructor() { }

  ngOnInit(): void {
    this.displayPrice = this.price;
    this.subscribeForm.get('partiNumber').setValue(1);
  }

  apply() {
    let code = this.subscribeForm.value.voucherCode;
    if(this.validVoucherCode.includes(code)) {
      this.isCodeValid = true;
      this.price = this.price/2;
      this.getNumberParticipant();
    } else {
      this.isCodeValid = false;
    }
  }

  getNumberParticipant() {
    let num = this.subscribeForm.value.partiNumber;
    this.displayPrice = this.price * num;
  }


}
