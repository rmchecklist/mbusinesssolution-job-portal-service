import { TestBed } from '@angular/core/testing';

import { CurrentOpeningsService } from './current-openings.service';

describe('CurrentOpeningsService', () => {
  let service: CurrentOpeningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentOpeningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
