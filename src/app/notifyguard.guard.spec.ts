import { TestBed } from '@angular/core/testing';

import { NotifyguardGuard } from './notifyguard.guard';

describe('NotifyguardGuard', () => {
  let guard: NotifyguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotifyguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
