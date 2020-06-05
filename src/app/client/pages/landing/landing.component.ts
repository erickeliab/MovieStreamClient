import { Component, OnInit } from '@angular/core';
import { Landing } from './landing.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

   items:Landing[] = [
    {
      Name : 'Transformers',
      Description:'These are the bes movies of all time',
      Cover:'assets/images/img_2.jpg'
    },
    {
      Name : 'Transporter',
      Description:'These are the bes movies of all time',
      Cover:'assets/images/img_3.jpg'
    },
    {
      Name : 'Terminator',
      Description:'These are the bes movies of all time',
      Cover:'assets/images/img_2.jpg'
    }

   ];

  ngOnInit(): void {

    var slides = this.items;

  }

}
