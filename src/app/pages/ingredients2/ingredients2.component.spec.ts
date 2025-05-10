import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingredients2Component } from './ingredients2.component';

describe('Ingredients2Component', () => {
  let component: Ingredients2Component;
  let fixture: ComponentFixture<Ingredients2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ingredients2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ingredients2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
