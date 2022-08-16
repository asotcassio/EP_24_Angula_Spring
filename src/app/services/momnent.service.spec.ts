import { TestBed } from '@angular/core/testing';

import { MomnentService } from './momnent.service';

describe('MomnentService', () => {
  let service: MomnentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomnentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
