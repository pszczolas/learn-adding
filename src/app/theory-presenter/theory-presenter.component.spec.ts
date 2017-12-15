import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryPresenterComponent } from './theory-presenter.component';

describe('TheoryPresenterComponent', () => {
  let component: TheoryPresenterComponent;
  let fixture: ComponentFixture<TheoryPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
