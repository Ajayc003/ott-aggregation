import { TestBed } from '@angular/core/testing';

import { OttonboardServiceService } from './ottonboard-service.service';

describe('OttonboardServiceService', () => {
  let service: OttonboardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttonboardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
