import { Component, OnInit } from '@angular/core';
import { AddingAnimation } from '../animated-examples/adding-animations-generator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  addingAnimation;
  overflowAnimation;
  ngOnInit() {
    this.addingAnimation = AddingAnimation.adding();
    this.overflowAnimation = AddingAnimation.overflow();
  }

}
