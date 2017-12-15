import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Animation } from '../animation-model/animation';
import { FrameCell } from '../animation-model/frame-cell';

//TODO
//number should be injected
//animation should be injected
@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity : 0.5})),
      transition('void => *', [
        animate(1000)
      ])
    ]),
    trigger('background', [
      state('void', style({backgroundColor : 'coral'})),
      transition('void => *', [
        animate(1000)
      ])
    ])
  ]
})
export class AnimationTestComponent implements OnChanges, OnInit {
  disablePrev: boolean;
  disableNext: boolean;
  ngOnChanges(changes: SimpleChanges): void {
    this.currentFrameIndex = 0;
    this.disableButtons();    
  }
  @Input() animation: Animation;
  currentFrameIndex = 0;
  constructor() {}

  getCurrentFrame(): FrameCell[][] {
    if(this.animation) {
      return this.animation.getFrameLines(this.currentFrameIndex)
    }
    return [[],[]];
  }
  onNextFrameClick() {
    this.currentFrameIndex = 
    this.currentFrameIndex + 1 < this.animation.frames.length ? 
    this.currentFrameIndex + 1 : this.currentFrameIndex;
    this.disableButtons();
  }
  onPrevFrameClick() {
    this.currentFrameIndex = 
    this.currentFrameIndex - 1 < 0 ? 0 : this.currentFrameIndex - 1;
    this.disableButtons();
  }
  disableButtons() {
    if(this.currentFrameIndex === 0) {
      this.disablePrev = true;
      this.disableNext = false;  
    }else if(this.currentFrameIndex >= this.animation.frames.length - 1) {
      this.disablePrev = false;      
      this.disableNext = true
    }else{
      this.disablePrev = false;
      this.disableNext = false     
    }
  }
  ngOnInit() {

  }

}
