import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeSelectInputComponent2 } from './mat-tree-select-input.component2';

describe('MatTreeSelectInputComponent', () => {
  let component: MatTreeSelectInputComponent2;
  let fixture: ComponentFixture<MatTreeSelectInputComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTreeSelectInputComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTreeSelectInputComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
