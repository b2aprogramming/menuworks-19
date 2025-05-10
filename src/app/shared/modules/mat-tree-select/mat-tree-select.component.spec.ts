import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeSelectComponent } from './mat-tree-select.component';

describe('MatTreeSelectComponent', () => {
  let component: MatTreeSelectComponent;
  let fixture: ComponentFixture<MatTreeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTreeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
