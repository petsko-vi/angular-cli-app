/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildComponent4Component } from './child-component4.component';

describe('ChildComponent4Component', () => {
  let component: ChildComponent4Component;
  let fixture: ComponentFixture<ChildComponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
