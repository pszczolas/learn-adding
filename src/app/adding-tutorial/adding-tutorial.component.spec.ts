import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTutorialComponent } from './adding-tutorial.component';

describe('AddingTutorialComponent', () => {
  let component: AddingTutorialComponent;
  let fixture: ComponentFixture<AddingTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
