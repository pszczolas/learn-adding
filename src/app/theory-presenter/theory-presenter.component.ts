import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theory-presenter',
  templateUrl: './theory-presenter.component.html',
  styleUrls: ['./theory-presenter.component.css']
})
export class TheoryPresenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() addingStrategy: string;

}
