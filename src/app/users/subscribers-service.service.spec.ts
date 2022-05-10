import { TestBed } from '@angular/core/testing';

import { SubscribersServiceService } from './subscribers-service.service';

describe('SubscribersServiceService', () => {
  let service: SubscribersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
