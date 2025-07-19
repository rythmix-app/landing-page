import { TestBed } from '@angular/core/testing';

import { NeonService } from './neon.service';

describe('NeonService', () => {
  let service: NeonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
