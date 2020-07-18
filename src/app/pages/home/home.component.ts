import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  price = 133;
  duration = 3;

  conceptList = ['Live seminars in the Virtual Classroom with Adobe Connect and separate telephone conference',
  'Intensive format for learning intercultural skills and management/leadership skills',
  'Led by experienced Berlitz teaching experts',
  'Usually two 90-minute sessions plus preparatory, interim, and follow-up exercises',
  'Interactive techniques like in face-to-face training',
  'Available as open-enrollment courses or for company groups',
  'Small groups of max. twelve participants']

  constructor() { }

  ngOnInit(): void {
  }

}
