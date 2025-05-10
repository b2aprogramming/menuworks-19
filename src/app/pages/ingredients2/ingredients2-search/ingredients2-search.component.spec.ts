import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingredients2SearchComponent } from './ingredients2-search.component';

describe('Ingredients2SearchComponent', () => {
  let component: Ingredients2SearchComponent;
  let fixture: ComponentFixture<Ingredients2SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ingredients2SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ingredients2SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
