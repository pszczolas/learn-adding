import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlockDiagramService } from '../block-diagram.service';
import { AddingAnimation } from '../animated-examples/adding-animations-generator';
import { RepresentationAnimation } from '../animated-examples/representation-animations-generator';
import { Animation } from '../animation-model/animation';

@Component({
  selector: 'app-adding-tutorial',
  templateUrl: './adding-tutorial.component.html',
  styleUrls: ['./adding-tutorial.component.css']
})
export class AddingTutorialComponent implements OnInit {
  title: string;
  representation: string;
  diagramPath: string;
  addAnimation: Animation;
  representAnimation: Animation;
  addingAnimationRenderer: AddingAnimation;
  representationAnimationRenderer: RepresentationAnimation;
  //TODO it is not place for that stuff:
  showRepresentationAnimation = false;
  representationArgument: number;

  showAddingAnimation = false;  
  addingArg1: number;
  addingArg2: number;
  //end of stuff

  constructor(
    private route: ActivatedRoute,
    private diagramService: BlockDiagramService,
  ) {
    this.addingAnimationRenderer = new AddingAnimation();
    this.representationAnimationRenderer = new RepresentationAnimation();
  }

  showRepresentation(event) {
    this.showRepresentationAnimation = false;
    this.representationArgument = parseFloat(event);
    this.renderNewRepresentationAnimation();
    this.showRepresentationAnimation = true;
  }

  showAdding(event) {
    this.showAddingAnimation = false;
    this.addingArg1 = parseFloat(event.augent);
    this.addingArg2 = parseFloat(event.addend);
    this.renderNewAddingAnimation();
    this.showAddingAnimation = true;
  }

  renderNewRepresentationAnimation() {
    switch(this.title) {
      case "SM":  this.representAnimation = this.representationAnimationRenderer.animateRepresentationZM(this.representationArgument);
                  break;
      case "U1":  this.representAnimation = this.representationAnimationRenderer.animateRepresentationU1(this.representationArgument);
                  break;
      case "U2":  this.representAnimation = this.representationAnimationRenderer.animateRepresentationU2(this.representationArgument);
                  break;      
    }
  }

  renderNewAddingAnimation() {
    switch(this.title) {
      case "SM":  this.addAnimation = this.addingAnimationRenderer.animateAdddingSM(this.addingArg1, this.addingArg2);
                  break;
      case "U1":  this.addAnimation = this.addingAnimationRenderer.animateAdddingU1(this.addingArg1, this.addingArg2);
                  break;
      case "U2":  this.addAnimation = this.addingAnimationRenderer.animateAdddingU2(this.addingArg1, this.addingArg2);
                  break;
    }
  }

  renderRepresentation() {
    switch(this.title) {
      case "SM":  return "modułowy";
      case "U1":  return "odwrotny";
      case "U2":  return "dopełnieniowy";
    }
  }
  
  ngOnInit() {
    this.route.paramMap
      .subscribe( params => {
        this.title = params.get('id');
          this.showRepresentationAnimation = false;
          this.showAddingAnimation = false;
          this.diagramPath = this.diagramService.get(this.title);
          this.representation = this.renderRepresentation();
      });
  }

}
