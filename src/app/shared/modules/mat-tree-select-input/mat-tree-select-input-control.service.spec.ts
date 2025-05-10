import { TestBed } from '@angular/core/testing';

import { MatTreeSelectInputControlService } from './mat-tree-select-input-control.service';

describe('MatTreeSelectInputControlService', () => {
  let service: MatTreeSelectInputControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatTreeSelectInputControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
