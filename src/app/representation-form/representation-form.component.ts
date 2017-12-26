import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-representation-form',
  templateUrl: './representation-form.component.html',
  styleUrls: ['./representation-form.component.css']
})
export class RepresentationFormComponent implements OnInit {
  @Output() representation = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submit(f, event: Event) {
    event.preventDefault();
    let number = f.value.number.replace(",", ".");
    this.representation.emit(number);
  }
}
