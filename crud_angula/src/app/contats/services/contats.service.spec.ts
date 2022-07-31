import { TestBed } from '@angular/core/testing';

import { ContatsService } from './contats.service';

describe('ContatsService', () => {
  let service: ContatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
