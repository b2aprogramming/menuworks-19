import { TestBed } from '@angular/core/testing';

import { MatTreeSelectInputControlService2 } from './mat-tree-select-input-control.service2';

describe('MatTreeSelectInputControlService', () => {
  let service: MatTreeSelectInputControlService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatTreeSelectInputControlService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
