import { TestBed } from '@angular/core/testing';

import { GtUnitsService } from './gt-units.service';

describe('GtUnitsService', () => {
  let service: GtUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
