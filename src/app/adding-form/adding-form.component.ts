import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.css']
})
export class AddingFormComponent implements OnInit {
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    let augent = f.value.augent.replace(",", ".");
    let addend = f.value.addend.replace(",", ".");
    this.add.emit({augent: augent, addend: addend});
  }
}
