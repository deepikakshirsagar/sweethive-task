import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  price = 133;
  duration = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
