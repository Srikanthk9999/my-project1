import { TestBed } from '@angular/core/testing';

import { AllstudentregistrationService } from './allstudentregistration.service';

describe('AllstudentregistrationService', () => {
  let service: AllstudentregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllstudentregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
