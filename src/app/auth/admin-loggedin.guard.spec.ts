import { TestBed } from '@angular/core/testing';

import { AdminLoggedinGuard } from './admin-loggedin.guard';

describe('AdminLoggedinGuard', () => {
  let guard: AdminLoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminLoggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
