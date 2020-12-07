import { TestBed } from '@angular/core/testing';

import { GridDataServiceService } from './grid-data-service.service';

describe('GridDataServiceService', () => {
  let service: GridDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
