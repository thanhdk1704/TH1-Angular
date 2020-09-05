import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B7Component } from './b7.component';

describe('B7Component', () => {
  let component: B7Component;
  let fixture: ComponentFixture<B7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
